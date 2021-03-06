var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/InteractionCentricUserEducation",
    ["require", "exports", "Core/ReactTypescriptAdapter"],
    function(require, exports, TsAdapter) {
        var InteractionCentricUserEducationSpec = function(_super) {
            __extends(InteractionCentricUserEducationSpec, _super);

            function InteractionCentricUserEducationSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionCentricUserEducation"
            }

            InteractionCentricUserEducationSpec.prototype.shouldComponentUpdate = function() { return false };
            InteractionCentricUserEducationSpec.prototype
                .renderHelpTip = function(className, index) {
                    return React.DOM.div({ key: "tip" + index, className: className },
                    [
                        React.DOM.label({
                            key: "heading",
                            id: "UserEducationHelpTip" + index + "Heading",
                            className: "helpTipHeading"
                        }), React.DOM.label({
                            key: "tip",
                            id: "UserEducationHelpTip" + index,
                            className: "helpTipDescription"
                        })
                    ])
                };
            InteractionCentricUserEducationSpec.prototype.renderUserEducationWrapper = function() {
                var header = React.DOM.div({
                            key: "header",
                            id: "UserEducationHeader",
                            className: "interactionCentricUserEducationHeader"
                        },
                        React.DOM.label({ id: "UserEducationTitle", className: "userEducationTitle" })),
                    tips = React.DOM.div({
                            key: "tips",
                            id: "UserEducationTips",
                            className: "interactionCentricUserEducationTips"
                        },
                        [
                            this.renderHelpTip("helpTip", 1), this.renderHelpTip("helpTip", 2), this
                            .renderHelpTip("helpTip helpTipLast", 3)
                        ]),
                    gifSection = React.DOM.div({ key: "gif", className: "gifSection" },
                        React.DOM.img({
                            id: "interactionCentricUserEducationImage",
                            className: "interactionCentricUserEducationImage"
                        })),
                    ieSafariSpecificMsgWrapper = React.DOM.div({ key: "iemsg", id: "ieSafariSpecificMsgWrapper" },
                    [
                        React.DOM.div({ key: "icon", id: "infoIcon" }), React.DOM
                        .span({ key: "msg", id: "ieSafariSpecificMsg" })
                    ]);
                return React.DOM.div({ key: "wrapper", id: "userEducationWrapper" },
                    [header, tips, gifSection, ieSafariSpecificMsgWrapper])
            };
            InteractionCentricUserEducationSpec.prototype.renderFeedbackSection = function() {
                var syncProgressIndicatorSection = React.DOM
                        .div({
                                key: "syncprogress",
                                id: "SyncProgressIndicatorSection",
                                className: "interactionCentricSyncProgressIndicatorSection"
                            },
                            [
                                React.DOM.label({
                                    key: "progress",
                                    id: "SyncProgressIndicator",
                                    className: "interactionCentricSyncProgressIndicator"
                                }), React.DOM.label({
                                    key: "text",
                                    id: "SyncProgressIndicatorText",
                                    className: "interactionCentricSyncProgressIndicatorText"
                                }), React.DOM.label({
                                    key: "step",
                                    id: "StepProgressIndicator",
                                    className: "stepProgressIndicator"
                                })
                            ]),
                    waitLabel = React.DOM.label({
                        key: "wait",
                        id: "WaitLabel",
                        className: "interactionCentricWaitLabel"
                    }),
                    crmUiLoading = React.DOM.div({
                            key: "crmui",
                            id: "CRMUILoading",
                            className: "indeterminateProgressRing"
                        },
                        [
                            React.DOM.div({ key: "dot1", className: "progressDot" }), React.DOM
                            .div({ key: "dot2", className: "progressDot" }), React.DOM
                            .div({ key: "dot3", className: "progressDot" }), React.DOM
                            .div({ key: "dot4", className: "progressDot" }), React.DOM
                            .div({ key: "dot5", className: "progressDot" })
                        ]);
                return React.DOM.div({ key: "feedback", className: "interactionCentricUserEducationFeedbackSection" },
                    React.DOM.div({ id: "LoadingSection", className: "loadingSection" },
                        [syncProgressIndicatorSection, waitLabel, crmUiLoading]))
            };
            InteractionCentricUserEducationSpec.prototype
                .render = function() {
                    return React.DOM.div({
                            id: "UserEducation",
                            className: "interactionCentricUserEducation",
                            style: { display: "none" }
                        },
                        this.renderUserEducationWrapper(),
                        this.renderFeedbackSection())
                };
            return InteractionCentricUserEducationSpec
        }(TsAdapter.SpecBase);
        exports.InteractionCentricUserEducation = TsAdapter.createComponent(new InteractionCentricUserEducationSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationControl/NavigationControl",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/Button", "Components/Primitives/FontIcon"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, Button, FontIcon) {
        exports.DESCRIPTOR_NAME = "NavigationControl";
        var NavigationControlSpec = function(_super) {
            __extends(NavigationControlSpec, _super);

            function NavigationControlSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavigationControl";
                this.listenToProperties = [
                    "ListPosition", "ListNavigationIndicatorRecordTitle", "ListNavigationEnabled"
                ]
            }

            NavigationControlSpec.prototype
                .isNotPrimaryRecord = function() {
                    return this.props.dataContext.get_ListNavigationContext().get_CurrentIndex() === -1
                };
            NavigationControlSpec.prototype.shouldDisplay = function() {
                return this.props.dataContext.get_ListNavigationContext() &&
                    this.props.dataContext.get_ListNavigationEnabled() &&
                    !this.isNotPrimaryRecord()
            };
            NavigationControlSpec.prototype.HandlePreviousClick = function() {
                this.props.dataContext.get_NavigateToPrevious().execute();
                $(".flyoutPaneClass").css("display", "none")
            };
            NavigationControlSpec.prototype.HandleNextClick = function() {
                this.props.dataContext.get_NavigateToNext().execute();
                $(".flyoutPaneClass").css("display", "none")
            };
            NavigationControlSpec.prototype
                .onListNavigationDataContextChanged = function() {
                    this.props.dataContext.get_ListNavigationContext().get_ShouldCreateNewPage() &&
                        this.props.dataContext.get_ListNavigationContext().openNewPageForCurrentIndex()
                };
            NavigationControlSpec.prototype
                .componentDidMount = function() {
                    this.props.clientContext.applicationShellViewModel
                        .apcl("CurrentListNavigationDataContext", this.onListNavigationDataContextChanged)
                };
            NavigationControlSpec.prototype
                .componentWillUnmount = function() {
                    this.props.clientContext.applicationShellViewModel
                        .rpcl("CurrentListNavigationDataContext", this.onListNavigationDataContextChanged)
                };
            NavigationControlSpec.prototype.render = function() {
                if (!this.shouldDisplay()) return React.DOM.noscript();
                var children = [],
                    previousButton = Button.Button({
                            title: this.props.clientContext.getLocalizedString("L_Previous_Button_Text"),
                            className: this.props.dataContext.get_ListNavigationContext().get_AtStart()
                                ? "PreviousAndNextNavButton"
                                : "NavButton",
                            onClick: this.HandlePreviousClick,
                            tabIndex: this.props.dataContext.GetRootTabIndex()
                        },
                        FontIcon.FontIcon({ symbolName: "UpArrow" })),
                    nextButton = Button.Button({
                            title: this.props.clientContext.getLocalizedString("L_Next_Button_Text"),
                            className: this.props.dataContext.get_ListNavigationContext().get_AtEnd()
                                ? "PreviousAndNextNavButton"
                                : "NavButton",
                            onClick: this.HandleNextClick,
                            tabIndex: this.props.dataContext.GetRootTabIndex()
                        },
                        FontIcon.FontIcon({ symbolName: "DownArrow" }));
                children.push(previousButton, nextButton);
                var recordCount = React.DOM.span({
                        key: "recordCount",
                        className: "listNavigationRecordCount",
                        title: this.props.dataContext.get_ListNavigationRecordCount()
                    },
                    this.props.dataContext.get_ListNavigationRecordCount());
                return React.DOM.div({ className: "NavigationControlContainer" }, [children, recordCount])
            };
            return NavigationControlSpec
        }(TsAdapter.SpecBase);
        exports.NavigationControl = DataWrapperComponent.wrapComponent(new NavigationControlSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarArea",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/ComponentFactory", "Components/Primitives/FontIcon", "Components/Primitives/Popup",
        "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, ComponentFactory, FontIcon, Popup, Constants) {
        exports.DESCRIPTOR_NAME = "NavBarArea";
        var NavBarAreaSpec = function(_super) {
            __extends(NavBarAreaSpec, _super);

            function NavBarAreaSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarArea";
                this.lastChild = 0;
                this.listenToProperties = ["Visible"]
            }

            NavBarAreaSpec.prototype.onTileClicked = function() {
                this.props.dataContext.set_Visible(true);
                this.setState({ navBarAreaState: !this.state.navBarAreaState, navBarAreaActiveState: false })
            };
            NavBarAreaSpec.prototype.onTileClickedInNavBar = function(entityLogicalName) {
                this.props.dataContext.navigateTo(entityLogicalName)
            };
            NavBarAreaSpec.prototype.handleNavBarAreaFlyoutDismiss = function() {
                this.props.dataContext.set_Visible(false);
                this.setState({ navBarAreaActiveState: false, navBarAreaState: false })
            };
            NavBarAreaSpec.prototype.getInitialState = function() {
                var state = {};
                this.props.dataContext.set_Visible(false);
                state.navBarAreaState = false;
                state.navBarAreaActiveState = false;
                return state
            };
            NavBarAreaSpec.prototype.handleChildClicked = function(subAreaName) {
                this.handleSubAreaClicked(subAreaName)
            };
            NavBarAreaSpec.prototype.handleSubAreaClicked = function(subAreaName) {
                this.props.dataContext.setActiveSubArea(subAreaName);
                this.props.dataContext.setActiveArea();
                this.setState({ navBarAreaActiveState: false, navBarAreaState: false })
            };
            NavBarAreaSpec.prototype.handleAreaClicked = function(areaName) {
                this.props.dataContext.setActiveArea();
                this.setState({ navBarAreaState: !this.state.navBarAreaState })
            };
            NavBarAreaSpec.prototype.onSiteMapAreaDropDownClicked = function() {
                this.props.dataContext.set_Visible(true);
                this.setState({ navBarAreaActiveState: true })
            };
            NavBarAreaSpec.prototype.handleChildKeyDown = function(e) {
                if (e.keyCode == Constants.ESCAPE_KEY_CODE) {
                    this.handleNavBarAreaFlyoutDismiss();
                    if ($(document.activeElement).parents(".areaInNavBar")
                        .length >
                        0) $(".navBarSiteMapAreaDropDownButton").focus();
                    else $(ReactDOM.findDOMNode(this)).find("[tabindex]:first").focus()
                } else e.keyCode == Constants.ENTER_KEY_CODE && this.handleNavBarAreaFlyoutDismiss()
            };
            NavBarAreaSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["onClick"] = this.handleChildClicked;
                var viewModel = childProps["dataContext"];
                childProps["onKeyDown"] = this.handleChildKeyDown;
                childProps["key"] = this.props.inNavBar == true ? "active" + viewModel.get_Id() : viewModel.get_Id();
                childProps["inNavBar"] = this.props.inNavBar;
                return factory(childProps)
            };
            NavBarAreaSpec.prototype.render = function() {
                var children = [],
                    navBarAreaFlyoutVisible = this.props.inNavBar == true
                        ? this.state.navBarAreaActiveState === false ? false : this.props.dataContext.get_Visible()
                        : this.state.navBarAreaState === false ? false : this.props.dataContext.get_Visible();
                if (navBarAreaFlyoutVisible)
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator);
                var styles = {}, tileRecordName = this.props.dataContext.get_ResourceId();
                if (tileRecordName === "")
                    tileRecordName = this.props.clientContext.getLocalizedString("Web.crmToday.xsl.aspx_122") +
                        this.props.dataContext.get_UnknownNodeCount();
                var tileItems = [],
                    navActionButtonIcon = React.DOM.div({
                        key: "navActionButtonIcon",
                        style: {
                            top: this.state.navBarAreaState == false ? "-30px" : "-20px",
                            backgroundImage: "url('" + this.props.dataContext.get_TileIconURL() + "')"
                        },
                        className: "navActionButtonIcon"
                    });
                if (!this.props.inNavBar) {
                    styles["backgroundColor"] = this.props.dataContext.get_TileColor();
                    styles["height"] = this.state.navBarAreaState == false ? "70px" : "85px";
                    tileItems.push(navActionButtonIcon)
                }
                var navActionButtonLabel = React.DOM.span({
                        key: "navActionButtonLabel",
                        style: { top: this.state.navBarAreaState == false ? "-50px" : "-40px" },
                        className: "navActionButtonLabel"
                    },
                    tileRecordName);
                tileItems.push(navActionButtonLabel);
                var navBarAreaTile = React.DOM.div({
                            key: this.props.inNavBar == true ? "activeAreaTile" : "areaTile",
                            className: this.props
                                .inNavBar ==
                                true
                                ? "tileContainerInNavBar"
                                : "navBarAreaTileContainer",
                            onClick: this.props.inNavBar == true
                                ? this.onTileClickedInNavBar.bind(this, this.props.dataContext.get_ResourceId())
                                : this.onTileClicked,
                            style: styles,
                            id: this.props.dataContext.get_Id(),
                            "data-id": tileRecordName,
                            "data-seq": this.props.dataSeq,
                            tabIndex: this.props.inNavBar == true
                                ? this.props.tabIndex
                                : this.props.dataContext.get_StartIndex(),
                            onKeyDown: this.itemOnKeyDownHandler,
                            title: tileRecordName,
                            role: "link"
                        },
                        tileItems),
                    childrenInNavBar = [navBarAreaTile];
                if (this.props.inNavBar == true) {
                    var siteMapSeparator = React.DOM.span({
                                key: "navBarSiteMapAreaSeparator",
                                className: "navBarSiteMapAreaSeparator"
                            },
                            React.DOM.img({
                                alt: "|",
                                src: "/_imgs/NavBar/NavBarDivider.png",
                                className: "navBarSiteMapSeparatorImage"
                            })),
                        siteMapAreaDropDown = React.DOM.div({
                                key: "navBarSiteMapDropDownButton",
                                onClick: this.onSiteMapAreaDropDownClicked,
                                className: "navBarSiteMapAreaDropDownButton",
                                onKeyDown: this.siteMapAreaDropDownClickHandler,
                                tabIndex: this.props.tabIndex,
                                title: tileRecordName,
                                "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled()
                                    ? tileRecordName
                                    : null,
                                role: "link"
                            },
                            FontIcon.FontIcon({ symbolName: "Expanded" }));
                    childrenInNavBar.push(siteMapSeparator, siteMapAreaDropDown)
                }
                var navBarAreaFlyout = Popup.Popup({
                        key: "navBarAreaFlyout",
                        visible: navBarAreaFlyoutVisible,
                        className: "navBarAreaFlyout",
                        style: { top: this.props.inNavBar == true ? "42px" : "141px" },
                        "data-id": this.props.dataId,
                        onDismiss: this.handleNavBarAreaFlyoutDismiss
                    },
                    children);
                return React.DOM.div({
                        className: this.props.inNavBar == true ? "areaInNavBar" : "navBarAreaContainer",
                        key: this.props.inNavBar == true ? "activeNavBarAreaContainer" : "navBarAreaContainer"
                    },
                    childrenInNavBar,
                    navBarAreaFlyout)
            };
            NavBarAreaSpec.prototype.siteMapAreaDropDownClickHandler = function(e) {
                switch (e.keyCode) {
                case Constants.F8_KEY_CODE:
                    var logoSelector = $("#headerBar .navBarSiteMapLogoText");
                    logoSelector != null &&
                        logoSelector.length > 0 &&
                        this.props.clientContext.focusNextMajorComponent(logoSelector, e.shiftKey);
                    e.stopPropagation();
                    break;
                case Constants.ENTER_KEY_CODE:
                    if (!this.props.dataContext.get_Visible()) this.onSiteMapAreaDropDownClicked();
                    else this.handleNavBarAreaFlyoutDismiss();
                    break
                }
            };
            NavBarAreaSpec.prototype.itemOnKeyDownHandler = function(e) {
                if (e.keyCode == Constants.F8_KEY_CODE) {
                    if (e.shiftKey) {
                        var logoSelector = $("#headerBar .navBarSiteMapLogoText");
                        logoSelector != null &&
                            logoSelector.length > 0 &&
                            this.props.clientContext.focusNextMajorComponent(logoSelector, e.shiftKey)
                    } else {
                        var historyLogoElement = $("#headerBar .navBarMru .navBarMruButton");
                        historyLogoElement != null && historyLogoElement.length > 0 && historyLogoElement.focus()
                    }
                    e.stopPropagation()
                }
                var dataIndex = this.props.dataSeq;
                if (!dataIndex) return;
                else {
                    var dataIdSequence = parseInt(dataIndex.substring(dataIndex.lastIndexOf("_") + 1)),
                        dataIdConstant = dataIndex.substring(0, dataIndex.lastIndexOf("_") + 1);
                    this.props.onKeyDown(e);
                    switch (e.keyCode) {
                    case Constants.RIGHT_ARROW_KEY_CODE:
                        var nextControlId = dataIdConstant + (dataIdSequence + 1);
                        this.focusElement(nextControlId);
                        break;
                    case Constants.LEFT_ARROW_KEY_CODE:
                        var previousControlId = dataIdConstant + (dataIdSequence - 1);
                        this.focusElement(previousControlId);
                        break;
                    case Constants.ENTER_KEY_CODE:
                        if (this.props.inNavBar) this.onTileClickedInNavBar(this.props.dataContext.get_ResourceId());
                        else this.onTileClicked();
                        $('[data-seq="CS_NavBarArea_NavBarGroup_1"]').focus();
                        return false;
                        break;
                    case Constants.TAB_KEY_CODE:
                        if (!e.shiftKey) {
                            var lastControlId = dataIdConstant + (dataIdSequence + 1);
                            if ($('[data-seq="' + lastControlId + '"]').length == 0) {
                                this.lastChild = dataIdSequence;
                                var firstControlId = dataIdConstant + "1";
                                this.focusElement(firstControlId);
                                e.preventDefault()
                            } else {
                                this.focusElement(lastControlId);
                                e.preventDefault()
                            }
                        } else if (e.shiftKey) {
                            this.lastChild = $(".navBarAreaTileContainer").length;
                            var prevControlId = dataIdSequence == 1 ? this.lastChild : dataIdSequence - 1,
                                firstElementToFocus = dataIdConstant + prevControlId;
                            this.focusElement(firstElementToFocus);
                            e.preventDefault()
                        }
                        break
                    }
                }
            };
            NavBarAreaSpec.prototype.focusElement = function(navBarAreaTileDataIndex) {
                var elementToFocus = $('[data-seq="' + navBarAreaTileDataIndex + '"]');
                elementToFocus != null && elementToFocus.focus()
            };
            return NavBarAreaSpec
        }(TsAdapter.SpecBase);
        exports.NavBarArea = DataWrapperComponent.wrapComponent(new NavBarAreaSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarUserInfo",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/Button", "Components/Primitives/Popup", "Utils/CssClassSet",
        "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, Button, Popup, CssClassSet, Constants) {
        exports.DESCRIPTOR_NAME = "NavBarUserInfo";
        var NavBarUserInfoSpec = function(_super) {
            __extends(NavBarUserInfoSpec, _super);

            function NavBarUserInfoSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarUserInfo";
                this.listenToProperties = ["Visible"]
            }

            NavBarUserInfoSpec.prototype.handleClick = function(e) { this.props.dataContext.set_Visible(true) };
            NavBarUserInfoSpec.prototype.focusElementWithRef = function(ref) {
                var element = this.refs[ref];
                if (element instanceof Element) $(element).focus();
                else $(ReactDOM.findDOMNode(element)).focus()
            };
            NavBarUserInfoSpec.prototype.handleOnkeyDownForUserInfo = function(e) {
                if (e.key == Constants.ENTER_KEY) {
                    this.handleClick(e);
                    this.focusElementWithRef("icUserSignout")
                }
                if (e.keyCode == Constants.F8_KEY_CODE) {
                    if (e.shiftKey) {
                        var logoSelector = $("#headerBar .navBarSiteMapLogoText");
                        logoSelector != null && logoSelector.length > 0 && logoSelector.focus()
                    } else this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    e.stopPropagation()
                }
            };
            NavBarUserInfoSpec.prototype.handlePopupDismiss = function() { this.props.dataContext.set_Visible(false) };
            NavBarUserInfoSpec.prototype.handleSignoutClick = function() {
                this.handlePopupDismiss();
                this.props.dataContext.SignoutUser()
            };
            NavBarUserInfoSpec.prototype.handleSignoutKeyDown = function(e) {
                switch (e.key) {
                case Constants.ENTER_KEY:
                    this.handleSignoutClick();
                    break;
                case Constants.TAB_KEY:
                    this.handlePopupDismiss();
                    break;
                case Constants.ESCAPE_KEY:
                    this.handlePopupDismiss();
                    this.focusElementWithRef("userInfo");
                    break
                }
            };
            NavBarUserInfoSpec.prototype.render = function() {
                var user = this.props.dataContext.get_UserName(),
                    userName = React.DOM.div({ key: "userInfoName", className: "userInfoName" }, user),
                    orgName = React.DOM.div({ key: "userInfoOrg", className: "userInfoOrg" },
                        this.props.dataContext.get_OrgName()),
                    signOutBtn = React.DOM.a({
                            className: "icUserSignout icUserInfoLink",
                            ref: "icUserSignout",
                            title: this.props.clientContext.getLocalizedString("ButtonText_Signout"),
                            onClick: this.handleSignoutClick,
                            tabIndex: this.props.tabIndex,
                            onKeyDown: this.handleSignoutKeyDown
                        },
                        this.props.clientContext.getLocalizedString("ButtonText_Signout")),
                    shouldShowSignout = this.props.dataContext.get_ShouldShowSignoutCommand(),
                    sitemapPopup = Popup.Popup({
                            visible: this.props.dataContext.get_Visible(),
                            key: "icUserInfoPopup",
                            className: "transformAnim icUserInfoPopup",
                            id: "userInfoPopup",
                            onDismiss: this.handlePopupDismiss
                        },
                        signOutBtn),
                    userInfo = [userName, orgName],
                    userInfoBtn = Button.Button({
                            key: "userInfo",
                            className: "userInfo",
                            ref: "userInfo",
                            title: user,
                            tabIndex: this.props.tabIndex,
                            onClick: shouldShowSignout ? this.handleClick : null,
                            onKeyDown: this.handleOnkeyDownForUserInfo
                        },
                        userInfo);
                return React.DOM.span({
                        className: CssClassSet({ open: this.props.dataContext.get_Visible() },
                            "userInfoDiv",
                            this.props.className)
                    },
                    userInfoBtn,
                    sitemapPopup)
            };
            return NavBarUserInfoSpec
        }(TsAdapter.SpecBase);
        exports.NavBarUserInfo = DataWrapperComponent.wrapComponent(new NavBarUserInfoSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarMru",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/Popup", "Core/Binding/UIHasRenderedMixin", "Components/Common/Constants",
        "Components/Primitives/FontIcon", "Utils/CssClassSet", "Components/Common/AccessibilityUtility",
        "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        Popup,
        UIHasRendered,
        Constants,
        FontIcon,
        CssClassSet,
        AccessibilityUtility,
        FocusHandlerMixin) {
        exports.DESCRIPTOR_NAME = "NavBarMru";
        var NavBarMruSpec = function(_super) {
            __extends(NavBarMruSpec, _super);

            function NavBarMruSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarMru";
                this.mixins = [UIHasRendered.Mixin, FocusHandlerMixin.Mixin];
                this.listenToProperties = ["DataFetched", "ActiveNavigationStack", "Top"];
                this.lastChild = 0
            }

            NavBarMruSpec.prototype.getInitialState = function() { return { showMruItems: false } };
            NavBarMruSpec.prototype.handleMruButtonClick = function() {
                this.props.dataContext.fetchGlobalMruData();
                this.setState({ showMruItems: !this.state.showMruItems })
            };
            NavBarMruSpec.prototype.componentDidUpdate = function() {
                this.shouldTakeFocus() && $(ReactDOM.findDOMNode(this)).find(".recentViewsHeader").focus()
            };
            NavBarMruSpec.prototype.onKeyDownHandler = function(e) {
                var currentElement = e.target;
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.handleMruButtonClick();
                    break;
                case Constants.F8_KEY_CODE:
                    if (e.shiftKey) {
                        var logoSelector = $("#headerBar .navBarSiteMapLogoText");
                        logoSelector != null && logoSelector.length > 0 && logoSelector.focus()
                    } else this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    e.stopPropagation();
                    break
                }
            };
            NavBarMruSpec.prototype.handleMruListDismiss = function() {
                this.setState({ showMruItems: !this.state.showMruItems })
            };
            NavBarMruSpec.prototype.handleMruItemClick = function(itemRecord) {
                this.handleMruListDismiss();
                this.props.dataContext.navigateTo(itemRecord)
            };
            NavBarMruSpec.prototype.renderMruItems = function() {
                var children = [], viewCount = 0, recordCount = 0;
                if (this.state.showMruItems) {
                    var mruItemList = this.props.dataContext.get_recentlyViewedItemList(),
                        count = mruItemList.get_Count();
                    if (count == 0)
                        children.push(React.DOM.li({ key: "noMruItem", className: "noMruItem noGlobalMruItem" },
                            React.DOM.span({ key: "mruNoItemImageSpan", className: "mruItemImageSpan" },
                                FontIcon.FontIcon({ symbolName: "entity" })),
                            React.DOM.span({ className: "mruTitle" },
                                this.props.clientContext
                                .getLocalizedString("InteractionCentricNavBar_EntityMru_NoRecords"))));
                    else {
                        for (var views = [], records = [], i = 0; i < count; i++) {
                            var mruItemData = mruItemList.get_Items()[i], entityLogicalName = mruItemData["entityName"];
                            if (mruItemData["isDashboard"] == "true") entityLogicalName = "dashboard";
                            var mruItemImage = React.DOM.span({
                                        key: "mruLocalItemImageSpan" + i.toString(),
                                        style: {
                                            backgroundColor: this.props.dataContext.getEntityColor(entityLogicalName)
                                        },
                                        className: "mruItemImageSpan"
                                    },
                                    FontIcon.FontIcon({ symbolName: entityLogicalName + " entity" })),
                                mruItemTitle = React.DOM
                                    .span({ key: "mruItemTitle" + i.toString(), className: "mruTitle" },
                                        mruItemData["title"]),
                                mruItem = React.DOM.li({
                                        key: "mruItem" + i.toString(),
                                        className: "mruItem",
                                        "data-id": mruItemData["title"],
                                        tabIndex: this.props.dataContext.get_StartIndex(),
                                        onKeyDown: this.keyDownHandlerForListItem.bind(this, mruItemData),
                                        title: mruItemData["title"],
                                        onClick: this.handleMruItemClick.bind(this, mruItemData),
                                        role: "link"
                                    },
                                    mruItemImage,
                                    mruItemTitle);
                            if (mruItemData["isGrid"] === "true") {
                                views.push(mruItem);
                                viewCount++
                            } else {
                                records.push(mruItem);
                                recordCount++
                            }
                        }
                        var viewHeaderDiv = React.DOM.div({
                                    key: "viewHeader",
                                    className: "recentViewsHeader",
                                    ref: "firstActionable",
                                    tabIndex: this.props.tabIndex,
                                    onKeyDown: this.keyDownHandlerForHeader
                                },
                                this.props.clientContext
                                .getLocalizedString("InteractionCentricNavBar_Mru_RecentViews")),
                            viewContentDiv = React.DOM.div({ key: "viewContent", className: "recentViewRecordContent" },
                                views),
                            recordHeaderDiv = React.DOM.div({
                                    key: "recordHeader",
                                    className: "recentRecordsHeader",
                                    ref: "lastActionable",
                                    tabIndex: this.props.tabIndex,
                                    onKeyDown: this.keyDownHandlerForHeader
                                },
                                this.props.clientContext
                                .getLocalizedString("InteractionCentricNavBar_Mru_RecentRecords")),
                            recordContentDiv = React.DOM
                                .div({ key: "recordContent", className: "recentViewRecordContent" },
                                    records),
                            recentViewSpan = React.DOM.span({ key: "recentViews", className: "recentViews" },
                                viewHeaderDiv,
                                viewContentDiv),
                            recentRecordSpan = React.DOM.span({ key: "recentRecords", className: "recentRecords" },
                                recordHeaderDiv,
                                recordContentDiv);
                        children.push(recentViewSpan, recentRecordSpan)
                    }
                }
                return Popup.Popup({
                        key: "globalMruList",
                        visible: this.state.showMruItems,
                        className: "globalMruList",
                        style: {
                            height: (((viewCount > recordCount ? viewCount : recordCount) + 1) * 20).toString() + "px"
                        },
                        onDismiss: this.handleMruListDismiss
                    },
                    children)
            };
            NavBarMruSpec.prototype.keyDownHandlerForHeader = function(e) {
                switch (e.keyCode) {
                case Constants.DOWN_ARROW_KEY_CODE:
                    $(document.activeElement).next(".recentViewRecordContent").find("li").first().focus();
                    break;
                case Constants.ESCAPE_KEY_CODE:
                    this.handleMruListDismiss();
                    $(document.activeElement).parents(".popupContent").prev(".navBarMruButton").focus();
                    break;
                case Constants.LEFT_ARROW_KEY_CODE:
                    $(document.activeElement).parent().prev("span").children().first().focus();
                    break;
                case Constants.RIGHT_ARROW_KEY_CODE:
                    $(document.activeElement).parent().next("span").children().first().focus();
                    break;
                case Constants.TAB_KEY_CODE:
                    var firstActionable = this.refs["firstActionable"], lastActionable = this.refs["lastActionable"];
                    if (!e.shiftKey && e.currentTarget == lastActionable) {
                        $(firstActionable).focus();
                        e.preventDefault()
                    } else if (e.shiftKey && e.currentTarget == firstActionable) {
                        $(lastActionable).focus();
                        e.preventDefault()
                    }
                    break
                }
            };
            NavBarMruSpec.prototype.keyDownHandlerForListItem = function(itemRecord, e) {
                var targetElement = e.target;
                switch (e.keyCode) {
                case Constants.DOWN_ARROW_KEY_CODE:
                    var nextListItem = $(document.activeElement).next("li");
                    nextListItem != null && nextListItem.focus();
                    break;
                case Constants.UP_ARROW_KEY_CODE:
                    var prevListItem = $(document.activeElement).prev("li");
                    if (prevListItem && prevListItem.length > 0) prevListItem.focus();
                    else {
                        var spanElement = $(document.activeElement).closest("span"),
                            firstChild = spanElement
                                ? spanElement.children()
                                ? spanElement.children()
                                .first()
                                : null
                                : null;
                        firstChild && firstChild.focus()
                    }
                    break;
                case Constants.LEFT_ARROW_KEY_CODE:
                    var parentElement = $(document.activeElement).parent()
                            ? $(document.activeElement).parent().parent()
                            : null,
                        spanElement = parentElement ? parentElement.prev("span") : null,
                        firstListItem = spanElement
                            ? spanElement.find("li") ? spanElement.find("li").first() : null
                            : null;
                    firstListItem && firstListItem.focus();
                    break;
                case Constants.RIGHT_ARROW_KEY_CODE:
                    var parentElement = $(document.activeElement).parent()
                            ? $(document.activeElement).parent().parent()
                            : null,
                        spanElement = parentElement ? parentElement.next("span") : null,
                        firstListItem = spanElement
                            ? spanElement.find("li") ? spanElement.find("li").first() : null
                            : null;
                    firstListItem && firstListItem.focus();
                    break;
                case Constants.ESCAPE_KEY_CODE:
                    this.handleMruListDismiss();
                    var parentPopupElement = $(document.activeElement).parents(".popupContent"),
                        parentPreviousElement = parentPopupElement ? parentPopupElement.prev(".navBarMruButton") : null;
                    parentPreviousElement != null && parentPreviousElement.focus();
                    break;
                case Constants.ENTER_KEY_CODE:
                    this.handleMruItemClick(itemRecord);
                    break;
                case Constants.TAB_KEY_CODE:
                    if (!AccessibilityUtility.doesNextElementExist(targetElement, e)) {
                        this.handleMruListDismiss();
                        var parentPopupElement = $(document.activeElement).parents(".popupContent"),
                            parentPreviousElement = parentPopupElement
                                ? parentPopupElement.prev(".navBarMruButton")
                                : null;
                        parentPreviousElement != null && parentPreviousElement.focus()
                    }
                    e.preventDefault();
                    break
                }
            };
            NavBarMruSpec.prototype.render = function() {
                var globalMruButton = React.DOM.span({
                            key: "globalMruButton",
                            className: CssClassSet({
                                navBarMruButton: true,
                                majorComponent: this.props.dataContext.get_IsInteractionCentricEnabled()
                            }),
                            "data-id": "navBarMruButton",
                            title: this.props.clientContext.getLocalizedString("Web.NavBar.GlobalMru_Title"),
                            tabIndex: this.props.tabIndex,
                            onClick: this.handleMruButtonClick,
                            onKeyDown: this.onKeyDownHandler,
                            "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled()
                                ? this.props.clientContext.getLocalizedString("Web.NavBar.GlobalMru_Title")
                                : null,
                            role: "link"
                        },
                        React.DOM.img({
                            key: "globalMruButtonImage",
                            src: "/_imgs/NavBar/Invisible.gif",
                            className: "globalMruButtonImage"
                        })),
                    children = [globalMruButton];
                this.state.showMruItems && children.push(this.renderMruItems());
                return React.DOM.span({ key: "globalMru", className: "navBarMru" }, children)
            };
            return NavBarMruSpec
        }(TsAdapter.SpecBase);
        exports.NavBarMru = DataWrapperComponent.wrapComponent(new NavBarMruSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarSearch",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/Button", "Components/Primitives/FontIcon", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, Button, FontIcon, Constants) {
        exports.DESCRIPTOR_NAME = "NavBarSearch";
        var NavBarSearchSpec = function(_super) {
            __extends(NavBarSearchSpec, _super);

            function NavBarSearchSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarSearch";
                this.listenToProperties = ["Enabled"]
            }

            NavBarSearchSpec.prototype.handleClick = function(e) {
                e.stopPropagation();
                var command = this.props.dataContext.get_OpenSearchPageCommand();
                command && command.get_CanExecute() && command.execute()
            };
            NavBarSearchSpec.prototype.onKeyDownHandler = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.handleClick(e);
                    break;
                case Constants.F8_KEY_CODE:
                    if (e.shiftKey) {
                        var logoSelector = $("#headerBar .navBarSiteMapLogoText");
                        logoSelector != null && logoSelector.length > 0 && logoSelector.focus()
                    } else this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    e.stopPropagation();
                    break
                }
            };
            NavBarSearchSpec.prototype.render = function() {
                return Button.Button({
                        className: "searchHeaderButton",
                        enabled: this.props.dataContext.get_Enabled(),
                        tabIndex: this.props.tabIndex,
                        title: this.props.dataContext.get_SearchButtonToolTip(),
                        dataId: "searchImage",
                        onClick: this.props.dataContext.get_Enabled() ? this.handleClick : null,
                        onKeyDown: this.props.dataContext.get_Enabled() ? this.onKeyDownHandler : null
                    },
                    FontIcon.FontIcon({ symbolName: "SearchButton" }))
            };
            return NavBarSearchSpec
        }(TsAdapter.SpecBase);
        exports.NavBarSearch = DataWrapperComponent.wrapComponent(new NavBarSearchSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarQuickCreate",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/FontIcon", "Components/Primitives/Popup", "Components/Common/Constants",
        "Core/Binding/UIHasRenderedMixin", "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        FontIcon,
        Popup,
        Constants,
        UIHasRendered,
        FocusHandlerMixin) {
        exports.DESCRIPTOR_NAME = "NavbarQuickCreate";
        var NavbarQuickCreateSpec = function(_super) {
            __extends(NavbarQuickCreateSpec, _super);

            function NavbarQuickCreateSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavbarQuickCreate";
                this.mixins = [UIHasRendered.Mixin, FocusHandlerMixin.Mixin];
                this.listenToProperties = ["Visible", "ActiveNavigationStack", "Top"]
            }

            NavbarQuickCreateSpec.prototype.getInitialState = function() { return { showQuickCreateItems: false } };
            NavbarQuickCreateSpec.prototype
                .onQuickCreateButtonClick = function() {
                    this.setState({ showQuickCreateItems: !this.state.showQuickCreateItems })
                };
            NavbarQuickCreateSpec.prototype.onKeyDownHandler = function(e) {
                var currentElement = e.target;
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.onQuickCreateButtonClick();
                    break;
                case Constants.F8_KEY_CODE:
                    if (e.shiftKey) {
                        var crmLogoSelector = $("#headerBar .navBarSiteMapLogoText");
                        crmLogoSelector.length > 0 && crmLogoSelector.focus()
                    } else this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    e.stopPropagation();
                    break
                }
            };
            NavbarQuickCreateSpec.prototype
                .componentDidUpdate = function() {
                    this.shouldTakeFocus() &&
                        $(ReactDOM.findDOMNode(this)).find(".quickCreateGroupTitle").first().focus()
                };
            NavbarQuickCreateSpec.prototype.onQuickCreateItemClick = function(entityMetadata) {
                this.props.dataContext.navigateTo(entityMetadata);
                this.props.dataContext.getEntityLogicalName(entityMetadata) == "email" &&
                    this.setState({ showQuickCreateItems: false })
            };
            NavbarQuickCreateSpec.prototype
                .handleQuickCreateFlyoutDismiss = function() {
                    this.setState({ showQuickCreateItems: !this.state.showQuickCreateItems })
                };
            NavbarQuickCreateSpec.prototype.renderQuickCreateItems = function() {
                var children = [];
                if (this.state.showQuickCreateItems) {
                    this.props.dataContext.populateActivityAndRecordEntities();
                    var activityEntities = this.props.dataContext.get_ActivityEntities(),
                        count = activityEntities.get_Count();
                    if (count > 0) {
                        var activityTitle = React.DOM.div({
                                key: "activityTitleKey",
                                ref: "firstActionable",
                                className: "quickCreateGroupTitle",
                                tabIndex: this.props.tabIndex,
                                "data-seq": "quickCreateGroupTitle_1",
                                onKeyDown: this.itemOnKeyDownHandler
                            },
                            this.props.clientContext
                            .getLocalizedString("InteractionCentricNavBar_QuickCreate_Activities"));
                        children.push(activityTitle)
                    }
                    for (var availableActivityEntities = activityEntities.get_Items(), i = 0; i < count; i++) {
                        var activityLogicalName = this.props.dataContext
                                .getEntityLogicalName(availableActivityEntities[i]),
                            entityListItemImage = React.DOM
                                .span({
                                        key: "entityListItemImageSpan" + i.toString(),
                                        className: "entityListItemImageSpan"
                                    },
                                    FontIcon.FontIcon({ symbolName: activityLogicalName + " entity" })),
                            activityItemName = this.props.dataContext.getEntityName(availableActivityEntities[i]),
                            activityItem = React.DOM.div({
                                    id: "ActivityEntityListItemId_" + i,
                                    key: "activityEntityListItem_" + i,
                                    className: "quickCreateListItems",
                                    "data-seq": "activityEntityListItem_" + i,
                                    tabIndex: this.props.dataContext.get_StartIndex(),
                                    title: activityItemName,
                                    onKeyDown: this.keyDownHandlerforListItem,
                                    onClick: this.onQuickCreateItemClick.bind(this, availableActivityEntities[i]),
                                    role: "link"
                                },
                                [entityListItemImage, activityItemName]);
                        children.push(activityItem)
                    }
                    var recordEntities = this.props.dataContext
                            .get_RecordEntities(),
                    count = recordEntities.get_Count();
                    if (count > 0) {
                        var recordTitle = React.DOM.div({
                                key: "recordTitleKey",
                                ref: "lastActionable",
                                className: "quickCreateGroupTitle",
                                tabIndex: this.props.tabIndex,
                                "data-seq": "quickCreateGroupTitle_2",
                                onKeyDown: this.itemOnKeyDownHandler
                            },
                            this.props.clientContext
                            .getLocalizedString("InteractionCentricNavBar_QuickCreate_Records"));
                        children.push(recordTitle)
                    }
                    for (var availableRecordEntities = recordEntities.get_Items(), i = 0; i < count; i++) {
                        var recordLogicalName = this.props.dataContext.getEntityLogicalName(availableRecordEntities[i]),
                            entityListItemImage = React.DOM
                                .span({
                                        key: "entityListItemImageSpan" + i.toString(),
                                        style: {
                                            backgroundColor: this.props.dataContext
                                                .getEntityColor(availableRecordEntities[i])
                                        },
                                        className: "entityListItemImageSpan"
                                    },
                                    FontIcon.FontIcon({ symbolName: recordLogicalName + " entity" })),
                            recordItemName = this.props.dataContext.getEntityName(availableRecordEntities[i]),
                            recordItem = React.DOM.div({
                                    id: "RecordEntityListItemId_" + i,
                                    key: "recordEntityListItem_" + i,
                                    className: "quickCreateListItems",
                                    "data-seq": "recordEntityListItem_" + i,
                                    title: recordItemName,
                                    onKeyDown: this.keyDownHandlerforListItem,
                                    tabIndex: this.props.dataContext.get_StartIndex(),
                                    onClick: this.onQuickCreateItemClick.bind(this, availableRecordEntities[i]),
                                    role: "link"
                                },
                                [entityListItemImage, recordItemName]);
                        children.push(recordItem)
                    }
                }
                return Popup.Popup({
                        key: "navBarQuickCreateListPane",
                        visible: this.state.showQuickCreateItems,
                        className: "navBarQuickCreateListPane",
                        onDismiss: this.handleQuickCreateFlyoutDismiss
                    },
                    children)
            };
            NavbarQuickCreateSpec.prototype.itemOnKeyDownHandler = function(e) {
                switch (e.keyCode) {
                case Constants.DOWN_ARROW_KEY_CODE:
                    $(document.activeElement).next(".quickCreateListItems").focus();
                    return false;
                    break;
                case Constants.ESCAPE_KEY_CODE:
                    this.handleQuickCreateFlyoutDismiss();
                    $(ReactDOM.findDOMNode(this)).find("[tabindex]:first").focus();
                    break;
                case Constants.TAB_KEY_CODE:
                    var firstActionable = this.refs["firstActionable"], lastActionable = this.refs["lastActionable"];
                    if (!e.shiftKey && e.currentTarget == lastActionable) {
                        $(firstActionable).focus();
                        e.preventDefault()
                    } else if (e.shiftKey && e.currentTarget == firstActionable) {
                        $(lastActionable).focus();
                        e.preventDefault()
                    }
                    break
                }
            };
            NavbarQuickCreateSpec.prototype.keyDownHandlerforListItem = function(e) {
                var targetElement = e.target, dataSeq = $(document.activeElement).attr("data-seq");
                if (!dataSeq) return;
                else {
                    var dataSequence = parseInt(dataSeq.substring(dataSeq.lastIndexOf("_") + 1)),
                        dataConstant = dataSeq.substring(0, dataSeq.lastIndexOf("_") + 1);
                    switch (e.keyCode) {
                    case Constants.DOWN_ARROW_KEY_CODE:
                        var nextControlId = dataConstant + (dataSequence + 1);
                        this.focusElement(nextControlId);
                        break;
                    case Constants.UP_ARROW_KEY_CODE:
                        if (dataSequence == 0) $(document.activeElement).prev(".quickCreateGroupTitle").focus();
                        else {
                            var prevControlId = dataConstant + (dataSequence - 1);
                            this.focusElement(prevControlId)
                        }
                        break;
                    case Constants.ESCAPE_KEY_CODE:
                    case Constants.TAB_KEY_CODE:
                        if (e.keyCode === Constants.TAB_KEY_CODE) {
                            var nextElement = !e.shiftKey
                                ? targetElement.nextSibling
                                : targetElement.previousSibling ? targetElement.previousSibling.previousSibling : null;
                            if (nextElement != null) break
                        }
                        this.handleQuickCreateFlyoutDismiss();
                        $(ReactDOM.findDOMNode(this)).find("[tabindex]:first").focus();
                        e.preventDefault();
                        break;
                    case Constants.ENTER_KEY_CODE:
                        var entityName = dataSeq.substring(0, dataSeq.lastIndexOf("_"));
                        if (entityName == "activityEntityListItem") {
                            var activityEntities = this.props.dataContext.get_ActivityEntities();
                            this.onQuickCreateItemClick(activityEntities.get_Items()[dataSequence])
                        } else if (entityName == "recordEntityListItem") {
                            var recordEntities = this.props.dataContext.get_RecordEntities();
                            this.onQuickCreateItemClick(recordEntities.get_Items()[dataSequence])
                        }
                        break
                    }
                }
            };
            NavbarQuickCreateSpec.prototype.focusElement = function(navBarAreaTileDataIndex) {
                var elementToFocus = $('[data-seq="' + navBarAreaTileDataIndex + '"]');
                elementToFocus != null && elementToFocus.focus()
            };
            NavbarQuickCreateSpec.prototype.render = function() {
                var quickCreateButton = React.DOM.span({
                            key: "quickCreate",
                            className: "navBarQuickCreateButton",
                            "data-id": "navBarQuickCreateButton",
                            tabIndex: this.props.tabIndex,
                            title: this.props.clientContext.getLocalizedString("Web.NavBar.QuickCreate_Title") +
                                "\n\n" +
                                this.props.clientContext.getLocalizedString("Web.NavBar.QuickCreate_Desc"),
                            onClick: this.onQuickCreateButtonClick,
                            onKeyDown: this.onKeyDownHandler,
                            "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled()
                                ? this.props.clientContext.getLocalizedString("Web.NavBar.QuickCreate_Title") +
                                "\n\n" +
                                this.props.clientContext.getLocalizedString("Web.NavBar.QuickCreate_Desc")
                                : null,
                            role: "link",
                            dataId: "quickCreate"
                        },
                        FontIcon.FontIcon({
                            symbolName: "Add",
                            key: "check",
                            dataId: "checkmarksymbol",
                            className: "quickCreateButtonImg"
                        })),
                    children = [quickCreateButton];
                this.state.showQuickCreateItems && children.push(this.renderQuickCreateItems());
                return React.DOM.span({ className: "navBarQuickCreate" }, children)
            };
            return NavbarQuickCreateSpec
        }(TsAdapter.SpecBase);
        exports.NavbarQuickCreate = DataWrapperComponent.wrapComponent(new NavbarQuickCreateSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarAssociatedItem",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/FontIcon", "../../Common/Constants", "Components/Common/AccessibilityUtility"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, FontIcon, Constants, AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "NavBarAssociatedItem";
        var NavBarAssociatedItemSpec = function(_super) {
            __extends(NavBarAssociatedItemSpec, _super);

            function NavBarAssociatedItemSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarAssociatedItem";
                this.listenToProperties = ["Visible", "Label", "Enabled", "HasFocus"]
            }

            NavBarAssociatedItemSpec.prototype.onButtonClicked = function() {
                this.props.dismissPopUpEventHandler();
                this.props.dataContext.OpenItem()
            };
            NavBarAssociatedItemSpec.prototype.setFocus = function() {
                if (this.props.dataContext && this.props.dataContext.get_HasFocus()) {
                    this.onButtonClicked();
                    this.props.dataContext.set_HasFocus(false)
                }
            };
            NavBarAssociatedItemSpec.prototype.componentDidUpdate = function() { this.setFocus() };
            NavBarAssociatedItemSpec.prototype.componentDidMount = function() { this.setFocus() };
            NavBarAssociatedItemSpec.prototype.render = function() {
                var children = [],
                    titleName = this.props.dataContext.get_AssociatedViewData().get_DisplayName(),
                    labelValue = this.props.dataContext.get_Label(),
                    divStyle = {
                        display: this.props.dataContext.get_Visible() ? "block" : "none",
                        disabled: this.props.dataContext.get_Enabled() ? "false" : "true"
                    },
                    associatedItem = React.DOM.span({
                            key: "ICNavbarAssociatedView-Item",
                            className: "ICNavbarAssociatedView-Item"
                        },
                        labelValue),
                    logicalName = this.props.dataContext.get_AssociatedViewData().get_TargetEntityName(),
                    associatedItemIcon = React.DOM.span({
                            key: "ICNavbarAssociatedView-Icon",
                            style: { backgroundColor: this.props.dataContext.getEntityColor(logicalName) },
                            className: "ICNavbarAssociatedView-Icon"
                        },
                        FontIcon.FontIcon({ symbolName: logicalName + " entity" }));
                children = [associatedItemIcon, associatedItem];
                return React.DOM.div({
                        key: "ICNavbarAssociatedView-ItemContainer",
                        className: "ICNavbarAssociatedView-ItemContainer",
                        title: titleName,
                        style: divStyle,
                        onClick: this.onButtonClicked,
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        onKeyDown: this.keyDownHandlerForAssociatedView,
                        role: "link"
                    },
                    children)
            };
            NavBarAssociatedItemSpec.prototype.keyDownHandlerForAssociatedView = function(e) {
                switch (e.keyCode) {
                case Constants.DOWN_ARROW_KEY_CODE:
                    var nextListItem = $(document.activeElement).next(".ICNavbarAssociatedView-ItemContainer");
                    nextListItem.focus();
                    break;
                case Constants.UP_ARROW_KEY_CODE:
                    var prevListItem = $(document.activeElement).prev(".ICNavbarAssociatedView-ItemContainer");
                    prevListItem.focus();
                    break;
                case Constants.ESCAPE_KEY_CODE:
                case Constants.TAB_KEY_CODE:
                    var targetElement = e.target;
                    if (e
                        .keyCode ===
                        Constants.TAB_KEY_CODE &&
                        AccessibilityUtility.doesNextElementExist(targetElement, e)) break;
                    this.props.dismissPopUpEventHandler();
                    $(document.activeElement).parents(".popupContent").prev(".navBarSiteMapDropDownButton").focus();
                    e.preventDefault();
                    break;
                case Constants.ENTER_KEY_CODE:
                    this.onButtonClicked();
                    break
                }
            };
            return NavBarAssociatedItemSpec
        }(TsAdapter.SpecBase);
        exports.NavBarAssociatedItem = DataWrapperComponent.wrapComponent(new NavBarAssociatedItemSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarAssociatedView",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/InteractionCentric/NavigationBar/NavBarAssociatedItem", "Components/Primitives/Popup",
        "Components/Primitives/FontIcon", "Components/Common/Constants", "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        NavBarAssociatedItem,
        Popup,
        FontIcon,
        Constants,
        FocusHandlerMixin) {
        exports.DESCRIPTOR_NAME = "NavBarAssociatedView";
        var NavBarAssociatedViewSpec = function(_super) {
            __extends(NavBarAssociatedViewSpec, _super);

            function NavBarAssociatedViewSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarAssociatedView";
                this.listenToProperties = ["Visible", "ActiveNavigationStack", "Top"];
                this.mixins = [FocusHandlerMixin.Mixin]
            }

            NavBarAssociatedViewSpec.prototype.getInitialState = function() {
                var state = {};
                state.showNavBarAssociatedView = false;
                return state
            };
            NavBarAssociatedViewSpec.prototype
                .onAssociatedViewsButtonClicked = function() {
                    this.setState({ showNavBarAssociatedView: !this.state.showNavBarAssociatedView })
                };
            NavBarAssociatedViewSpec.prototype
                .handlePopupDismiss = function() {
                    this.setState({ showNavBarAssociatedView: !this.state.showNavBarAssociatedView })
                };
            NavBarAssociatedViewSpec.prototype
                .componentDidUpdate = function() {
                    this.shouldTakeFocus() && $(".ICNavbarAssociatedView-ItemContainer").first().focus()
                };
            NavBarAssociatedViewSpec.prototype.onKeyDownHandler = function(e) {
                var currentElement = e.target;
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.onAssociatedViewsButtonClicked();
                    break
                }
            };
            NavBarAssociatedViewSpec.prototype.render = function() {
                var children = [];
                this.props.dataContext.RetrieveAssociatedViewModelFromRootViewModel();
                var showAssociatedViewsButton = React.DOM.div({
                        key: "ICNavbarAssociatedView-AssociatedViewsButton",
                        onClick: this.onAssociatedViewsButtonClicked,
                        title: this.props.title,
                        onKeyDown: this.onKeyDownHandler,
                        className: "navBarSiteMapDropDownButton",
                        tabIndex: this.props.tabIndex,
                        "aria-label": this.props.dataContext
                            .get_IsInteractionCentricEnabled()
                            ? this.props.title
                            : null,
                        role: "link"
                    },
                    FontIcon.FontIcon({ symbolName: "Expanded" }));
                children.push(showAssociatedViewsButton);
                if (this.props.dataContext.get_IsRelationshipsPresent()) {
                    this.props.dataContext.GenerateAssociatedItems();
                    var noOfRecords = this.props.dataContext.get_NumberOfRecords(),
                        associatedItemViewModels = this.props.dataContext.get_NavBarAssociatedItemsViewModels();
                    if (noOfRecords != 0) {
                        for (var items = [], i = 0; i < noOfRecords; ++i) {
                            var child = NavBarAssociatedItem
                                .NavBarAssociatedItem({
                                    clientContext: this.props.clientContext,
                                    dataContext: associatedItemViewModels[i],
                                    key: "NavBarAssociatedItem-" + i.toString(),
                                    dismissPopUpEventHandler: this.handlePopupDismiss
                                });
                            items.push(child)
                        }
                        var popUpContainerHeight = noOfRecords * 40 + 20;
                        children.push(Popup.Popup({
                                key: "ICNavbarAssociatedView-PopUpContainer",
                                visible: this.state.showNavBarAssociatedView,
                                onDismiss: this.handlePopupDismiss,
                                style: { height: popUpContainerHeight.toString() + "px" },
                                className: "ICNavbarAssociatedView-PopUpContainer"
                            },
                            items))
                    }
                }
                return React.DOM.div({
                        key: "ICNavbarAssociatedView-AssociatedViewContainer",
                        className: "ICNavbarAssociatedView-AssociatedViewContainer"
                    },
                    children)
            };
            return NavBarAssociatedViewSpec
        }(TsAdapter.SpecBase);
        exports.NavBarAssociatedView = DataWrapperComponent.wrapComponent(new NavBarAssociatedViewSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarSettings",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/FontIcon", "Components/Primitives/Popup", "Components/Common/Constants",
        "Core/Binding/UIHasRenderedMixin", "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        FontIcon,
        Popup,
        Constants,
        UIHasRendered,
        FocusHandlerMixin) {
        exports.DESCRIPTOR_NAME = "NavBarSettings";
        this.mixins = [UIHasRendered.Mixin, FocusHandlerMixin.Mixin];
        var NavBarSettingsSpec = function(_super) {
            __extends(NavBarSettingsSpec, _super);

            function NavBarSettingsSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarSettings"
            }

            NavBarSettingsSpec.prototype.getInitialState = function() { return { showSettingsItems: false } };
            NavBarSettingsSpec.prototype.componentDidUpdate = function() {
                var settingAboutDom = this.refs["settingAbout"];
                this.state.showSettingsItems &&
                    settingAboutDom != undefined &&
                    settingAboutDom instanceof Element &&
                    $(settingAboutDom).focus()
            };
            NavBarSettingsSpec.prototype
                .onSettingsButtonClick = function() {
                    this.setState({ showSettingsItems: !this.state.showSettingsItems })
                };
            NavBarSettingsSpec.prototype
                .handleSettingsFlyoutDismiss = function() { this.setState({ showSettingsItems: false }) };
            NavBarSettingsSpec.prototype.openSettingsUrl = function(currentElement) {
                this.handleSettingsFlyoutDismiss();
                var popUpIdentifier = "", windowProp = "", url = "";
                if (currentElement != null) {
                    switch (currentElement.textContent.trim()) {
                    case this.props.clientContext.getLocalizedString("Settings_About"):
                        popUpIdentifier = "AboutMicrosoftCRM";
                        windowProp = "height=570,width=570";
                        url = this.props.dataContext.get_AboutUrl();
                        break;
                    case this.props.clientContext.getLocalizedString("Settings_Privacy_Statement"):
                        url = this.props.dataContext.get_ReturnPrivacyStatementUrl();
                        break
                    }
                    window.open(url, popUpIdentifier, windowProp)
                }
            };
            NavBarSettingsSpec.prototype.handleSettingsItems = function(element) {
                this.openSettingsUrl(element.currentTarget)
            };
            NavBarSettingsSpec.prototype.onKeyDownHandler = function(e) {
                var currentElement = e.target;
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                case Constants.SPACE_KEY_CODE:
                    this.onSettingsButtonClick();
                    break;
                case Constants.TAB_KEY_CODE:
                    e.shiftKey && this.handleSettingsFlyoutDismiss();
                    break
                }
            };
            NavBarSettingsSpec.prototype.itemOnKeyDownHandler = function(e) {
                var targetElement = e.target;
                switch (e.keyCode) {
                case Constants.DOWN_ARROW_KEY_CODE:
                    var nextElement = targetElement.nextSibling;
                    nextElement != null && $(nextElement).focus();
                    break;
                case Constants.UP_ARROW_KEY_CODE:
                    var previousElement = targetElement.previousSibling;
                    previousElement != null && $(previousElement).focus();
                    break;
                case Constants.ESCAPE_KEY_CODE:
                    this.handleSettingsFlyoutDismiss();
                    $(ReactDOM.findDOMNode(this)) != null &&
                        $(ReactDOM.findDOMNode(this)).find("[tabindex]:first") != null &&
                        $(ReactDOM.findDOMNode(this)).find("[tabindex]:first").focus();
                    break;
                case Constants.ENTER_KEY_CODE:
                case Constants.SPACE_KEY_CODE:
                    this.handleSettingsItems(e);
                    break;
                case Constants.TAB_KEY_CODE:
                    if (!e.shiftKey) {
                        var nextElement = targetElement.nextSibling;
                        if (nextElement != null) break;
                        this.handleSettingsFlyoutDismiss()
                    }
                    break
                }
            };
            NavBarSettingsSpec.prototype.renderSettingsItems = function() {
                var children = [],
                    settingAbout = React.DOM.div({
                            className: "navBarSettingsListItems",
                            key: "settingAbout",
                            ref: "settingAbout",
                            title: this.props.clientContext.getLocalizedString("NavBar_Settings_About_ToolTip"),
                            onClick: this.handleSettingsItems,
                            tabIndex: this.props.tabIndex,
                            onKeyDown: this.itemOnKeyDownHandler
                        },
                        React.DOM.div({
                                key: "settingAboutItem",
                                ref: "settingAboutItem",
                                className: "navBarSettingsListItem"
                            },
                            this.props.clientContext.getLocalizedString("Settings_About")));
                children.push(settingAbout);
                var settingPrivacy = React.DOM.div({
                        className: "navBarSettingsListItems",
                        key: "settingPrivacyStatement",
                        ref: "settingPrivacyStatement",
                        title: this.props.clientContext.getLocalizedString("NavBar_Settings_Privacy_Statement_ToolTip"),
                        onClick: this.handleSettingsItems,
                        tabIndex: this.props.tabIndex,
                        onKeyDown: this.itemOnKeyDownHandler
                    },
                    React.DOM.div({
                            key: "settingPrivacyStmtItem",
                            ref: "settingPrivacyStmtItem",
                            className: "navBarSettingsListItem"
                        },
                        this.props.clientContext.getLocalizedString("Settings_Privacy_Statement")));
                children.push(settingPrivacy);
                return Popup.Popup({
                        visible: this.state.showSettingsItems,
                        className: "navBarSettingsListPane",
                        onDismiss: this.handleSettingsFlyoutDismiss
                    },
                    children)
            };
            NavBarSettingsSpec.prototype.render = function() {
                var settingsButton = React.DOM.span({
                            key: "SettingsButton",
                            className: "navBarSettingsButton",
                            "data-id": "NavBarSettingsButton",
                            tabIndex: this.props.tabIndex,
                            title: this.props.clientContext.getLocalizedString("NavBar_Settings_ToolTip"),
                            onClick: this.onSettingsButtonClick,
                            onKeyDown: this.onKeyDownHandler,
                            role: "link"
                        },
                        FontIcon.FontIcon({ symbolName: "Settings" })),
                    children = [settingsButton];
                children.push(this.renderSettingsItems());
                return React.DOM.span({ className: "navBarSettings" }, children)
            };
            return NavBarSettingsSpec
        }(TsAdapter.SpecBase);
        exports.NavBarSettings = DataWrapperComponent.wrapComponent(new NavBarSettingsSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/NavigationBar/InteractionCentricNavigationBar",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Core/Binding/XrmUIDescriptorMixin", "Components/Primitives/FontIcon", "Utils/CssClassSet",
        "Components/Primitives/Popup", "Components/NavigationBar/SiteMapButton",
        "Components/NavigationBar/SiteMapPopup",
        "Components/InteractionCentric/NavigationBar/NavBarArea",
        "Components/InteractionCentric/NavigationBar/NavBarUserInfo",
        "Components/InteractionCentric/NavigationBar/NavBarMru",
        "Components/InteractionCentric/NavigationBar/NavBarSearch",
        "Components/InteractionCentric/NavigationBar/NavBarQuickCreate", "Components/Common/Constants",
        "Components/InteractionCentric/NavigationBar/NavBarAssociatedView", "Core/Binding/FocusHandlerMixin",
        "Components/InteractionCentric/NavigationBar/NavBarSettings"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        IXUD,
        FontIcon,
        CssClassSet,
        Popup,
        SiteMapButton,
        SiteMapPopup,
        NavBarArea,
        NavBarUserInfo,
        NavBarMru,
        NavBarSearch,
        NavBarQuickCreate,
        Constants,
        NavBarAssociatedView,
        FocusHandlerMixin,
        NavBarSettings) {
        var InteractionCentricNavigationBarSpec = function(_super) {
            __extends(InteractionCentricNavigationBarSpec, _super);

            function InteractionCentricNavigationBarSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionCentricNavigationBar";
                this.mixins = [IXUD.Mixin, FocusHandlerMixin.Mixin];
                this.listenToProperties = [
                    "SiteMapViewModel", "ActiveArea", "ActiveSubArea", "EntityLevelMruDataFetched", "Visible",
                    "NavigationHappened", "ActiveNavigationStack", "Top"
                ];
                this.showRecentRecords = false
            }

            InteractionCentricNavigationBarSpec.prototype
                .onSiteMapButtonClicked = function() {
                    this.props.dataContext.get_SiteMapViewModel()
                        .set_Visible(true)
                };
            InteractionCentricNavigationBarSpec.prototype.onSiteMapSubAreaDropDownClicked = function(entityTypeCode) {
                this.showRecentRecords = !this.showRecentRecords;
                if (this.showRecentRecords) {
                    this.props.dataContext.set_Visible(true);
                    this.props.dataContext.fetchEntityLevelMruData(entityTypeCode)
                } else this.props.dataContext.set_Visible(false)
            };
            InteractionCentricNavigationBarSpec.prototype.handleMruListDismiss = function() {
                this.props.dataContext.set_Visible(false);
                this.showRecentRecords = false
            };
            InteractionCentricNavigationBarSpec.prototype.handleMruItemClick = function(recordData) {
                this.props.dataContext.navigateToRecord(recordData);
                this.handleMruListDismiss()
            };
            InteractionCentricNavigationBarSpec.prototype
                .handleSiteMapLogoClick = function() { this.props.dataContext.onSiteMapLogoClicked() };
            InteractionCentricNavigationBarSpec.prototype
                .handleSiteMapActiveSubAreaClick = function() {
                    this.props.dataContext.get_ActiveSubArea().navigateTo()
                };
            InteractionCentricNavigationBarSpec.prototype
                .handleHelpButtonClick = function() { window.open(this.props.dataContext.getHelpButtonUrl()) };
            InteractionCentricNavigationBarSpec.prototype.onKeyDownHandlerForHelp = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.handleHelpButtonClick();
                    break;
                case Constants.F8_KEY_CODE:
                    if (e.shiftKey) {
                        var logoSelector = $("#headerBar .navBarSiteMapLogoText");
                        logoSelector.length > 0 && logoSelector.focus()
                    } else {
                        var historyLogoElement = $("#headerBar .navBarMru .navBarMruButton");
                        historyLogoElement != null &&
                            historyLogoElement.length > 0 &&
                            this.props.clientContext.focusNextMajorComponent(historyLogoElement, e.shiftKey)
                    }
                    e.stopPropagation();
                    break
                }
            };
            InteractionCentricNavigationBarSpec.prototype
                .renderSiteMapLogo = function() {
                    return React.DOM.div({
                            key: "siteMapLogo",
                            onClick: this.handleSiteMapLogoClick,
                            onKeyDown: this.handleSiteMapLogoKeyDown,
                            className: CssClassSet({
                                navBarSiteMapLogoText: true,
                                majorComponent: this.props.dataContext.get_IsInteractionCentricEnabled()
                            }),
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            title: this.props.clientContext.getLocalizedString("Brand_CRM") +
                                "\n\n" +
                                this.props.clientContext.getLocalizedString("Brand_CRM_Desc"),
                            role: "link"
                        },
                        React.DOM.img({
                            key: "siteMapLogo-img",
                            className: "navTabLogoTextId",
                            src: "/nga/resources/images/ThemeNavBarLogo_ISH.png"
                        }))
                };
            InteractionCentricNavigationBarSpec.prototype.handleSiteMapLogoKeyDown = function(e) {
                if (e
                    .keyCode ==
                    Constants.ENTER_KEY_CODE ||
                    e.keyCode == Constants.SPACE_KEY_CODE) this.handleSiteMapLogoClick();
                else if (e.keyCode == Constants.F8_KEY_CODE) {
                    this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    return false
                }
            };
            InteractionCentricNavigationBarSpec.prototype
                .renderSiteMapHomeButton = function() {
                    return React.DOM.div({
                            key: "siteMapHomeButton",
                            onClick: this.handleSiteMapLogoClick,
                            className: "navBarSiteMapHomeButton",
                            title: this.props.clientContext.getLocalizedString("Brand_CRM") +
                                "\n\n" +
                                this.props.clientContext.getLocalizedString("Brand_CRM_Desc")
                        },
                        React.DOM.img({
                            key: "navTabLogoHomeButton",
                            className: "navTabLogoHomeButton",
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            src: "/_imgs/NavBar/Invisible.gif"
                        }))
                };
            InteractionCentricNavigationBarSpec.prototype
                .renderSiteMapNavBarSeparator = function(classForSeparator, styles) {
                    return React.DOM.span({ className: classForSeparator, key: "key_" + classForSeparator },
                        React.DOM.img({
                            alt: "|",
                            style: styles,
                            src: "/_imgs/NavBar/NavBarDivider.png",
                            className: "navBarSiteMapSeparatorImage"
                        }))
                };
            InteractionCentricNavigationBarSpec.prototype.renderSiteMapButton = function() {
                var siteMapViewModel = this.props.dataContext.get_SiteMapViewModel();
                return SiteMapButton.SiteMapButton({
                    key: "siteMapButton",
                    className: "navBarSiteMapButton",
                    symbolName: "SiteMap",
                    clientContext: this.props.clientContext,
                    dataContext: siteMapViewModel,
                    xrmUIParentId: XrmUI.ControlId.navigationBar,
                    tabIndex: this.props.dataContext.get_StartIndex(),
                    stopClickPropagation: false,
                    title: this.props.clientContext.getLocalizedString("Web.NavBar.FormNav_Title") +
                        "\n\n" +
                        this.props.clientContext.getLocalizedString("Web.NavBar.FormNav_Desc")
                })
            };
            InteractionCentricNavigationBarSpec.prototype
                .renderSiteMapMenu = function() {
                    return SiteMapPopup.SiteMapPopup({
                        key: "siteMapMenu",
                        style: { backgroundColor: "rgb(223, 226, 232)" },
                        clientContext: this.props.clientContext,
                        dataContext: this.props.dataContext.get_SiteMapViewModel(),
                        interactionCentricMode: true
                    })
                };
            InteractionCentricNavigationBarSpec.prototype
                .renderUserInfo = function() {
                    return React.DOM.span({
                            key: "navBarUserInfoSpan",
                            className: "navBarUserInfo",
                            "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled()
                                ? this.props.dataContext.get_NavBarUserInfoViewModel().get_UserName()
                                : null,
                            role: "link"
                        },
                        NavBarUserInfo.NavBarUserInfo({
                            key: "navBarUserInfo",
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            clientContext: this.props.clientContext,
                            dataContext: this.props.dataContext.get_NavBarUserInfoViewModel()
                        }))
                };
            InteractionCentricNavigationBarSpec.prototype
                .renderSiteMapActiveArea = function() {
                    return NavBarArea.NavBarArea({
                        key: "siteMapActiveArea",
                        className: "navBarSiteMapAreaContainer",
                        inNavBar: true,
                        clientContext: this.props.clientContext,
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        dataContext: this.props.dataContext.get_ActiveArea()
                    })
                };
            InteractionCentricNavigationBarSpec.prototype.renderSiteMapActiveSubArea = function() {
                var label = this.props.dataContext.get_ActiveSubArea().get_ResourceId();
                if (label == "") label = this.props.dataContext.get_ActiveSubArea().get_Entity();
                return React.DOM.div({
                        key: "siteMapActiveSubArea",
                        className: "navBarSiteMapAreaContainer",
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        onClick: this.handleSiteMapActiveSubAreaClick,
                        onKeyDown: this.onKeyDownHandler,
                        title: label,
                        role: "link"
                    },
                    label)
            };
            InteractionCentricNavigationBarSpec.prototype.onKeyDownHandler = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.handleSiteMapActiveSubAreaClick();
                    break
                }
            };
            InteractionCentricNavigationBarSpec.prototype
                .handleFocus = function() { $(ReactDOM.findDOMNode(this)).find(".mruItem").first().focus() };
            InteractionCentricNavigationBarSpec.prototype.renderSiteMapActiveSubAreaDropDown = function() {
                var activeSubAreaLabel = this.props.dataContext.get_ActiveSubArea().get_Entity();
                if (activeSubAreaLabel == "")
                    activeSubAreaLabel = this.props.dataContext.get_ActiveSubArea().get_ResourceId();
                var entityTypeCode = this.props.dataContext.get_ActiveSubArea().get_EntityTypeCode();
                return React.DOM.div({
                        onClick: this.onSiteMapSubAreaDropDownClicked.bind(this, entityTypeCode),
                        key: "navBarSiteMapSubAreaDropDownButton",
                        className: "navBarSiteMapSubAreaDropDownButton",
                        onKeyDown: this.itemOnKeyDownHandler,
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        title: activeSubAreaLabel,
                        "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled()
                            ? activeSubAreaLabel
                            : null,
                        role: "link"
                    },
                    FontIcon.FontIcon({ symbolName: "Expanded" }))
            };
            InteractionCentricNavigationBarSpec.prototype.itemOnKeyDownHandler = function(e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE) {
                    var entityTypeCode = this.props.dataContext.get_ActiveSubArea().get_EntityTypeCode();
                    this.onSiteMapSubAreaDropDownClicked(entityTypeCode)
                }
            };
            InteractionCentricNavigationBarSpec.prototype.renderEntityMruList = function() {
                var records = [],
                    mruItemList = this.props.dataContext.get_entityLevelMruList(),
                    count = mruItemList.get_Count();
                if (count == 0)
                    records.push(React.DOM.li({ key: "noLocalMruItem", className: "noMruItem localMruItem" },
                        React.DOM.span({ key: "mruLocalNoItemImageSpan", className: "mruItemImageSpan" },
                            FontIcon.FontIcon({ symbolName: "entity" })),
                        React.DOM.span({ className: "mruTitle" },
                            this.props.clientContext
                            .getLocalizedString("InteractionCentricNavBar_EntityMru_NoRecords"))));
                else
                    for (var i = 0; i < count; i++) {
                        var mruItemData = mruItemList.get_Items()[i], entityLogicalName = mruItemData["entityName"];
                        if (mruItemData["isDashboard"] == "true") entityLogicalName = "dashboard";
                        var mruItemImage = React.DOM.span({
                                    key: "mruLocalItemImageSpan" + i.toString(),
                                    style: {
                                        backgroundColor: this.props.dataContext
                                            .getEntityColor(entityLogicalName)
                                    },
                                    className: "mruItemImageSpan"
                                },
                                FontIcon.FontIcon({ symbolName: entityLogicalName + " entity" })),
                            mruItemTitle = React.DOM
                                .span({ key: "localMruTitle" + i.toString(), className: "mruTitle" },
                                    mruItemData["title"]),
                            mruItem = React.DOM.li({
                                    key: "localMruItem" + i.toString(),
                                    className: "mruItem localMruItem",
                                    title: mruItemData["title"],
                                    tabIndex: -1,
                                    onClick: this.handleMruItemClick.bind(this, mruItemData),
                                    onKeyDown: this.keyDownHandlerForMruItem.bind(this, mruItemData),
                                    role: "link"
                                },
                                mruItemImage,
                                mruItemTitle);
                        records.push(mruItem)
                    }
                return Popup.Popup({
                        key: "localMruList",
                        visible: this.props.dataContext.get_Visible(),
                        className: "localMruList",
                        onDismiss: this.handleMruListDismiss
                    },
                    records)
            };
            InteractionCentricNavigationBarSpec.prototype.keyDownHandlerForMruItem = function(recordData) {
                if (arguments[1] && arguments[1].keyCode) {
                    var targetElement = arguments[1].target;
                    switch (arguments[1].keyCode) {
                    case Constants.ESCAPE_KEY_CODE:
                        this.handleMruListDismiss();
                        $(document.activeElement).parents(".icNavigationBar")
                            .find(".navBarSiteMapSubAreaDropDownButton")
                            .focus();
                        break;
                    case Constants.UP_ARROW_KEY_CODE:
                        $(document.activeElement).prev("li").focus();
                        break;
                    case Constants.DOWN_ARROW_KEY_CODE:
                        $(document.activeElement).next("li").focus();
                        break;
                    case Constants.ENTER_KEY_CODE:
                        this.props.dataContext.navigateToRecord(recordData);
                        this.handleMruListDismiss();
                        break;
                    case Constants.TAB_KEY_CODE:
                        var nextElement = !arguments[1]
                            .shiftKey
                            ? targetElement.nextSibling
                            : targetElement.previousSibling;
                        nextElement == null && this.handleMruListDismiss();
                        arguments[1].preventDefault();
                        break
                    }
                }
            };
            InteractionCentricNavigationBarSpec.prototype
                .renderGlobalMruButton = function() {
                    return NavBarMru.NavBarMru({
                        key: "navBarMru",
                        clientContext: this.props.clientContext,
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        dataContext: this.props.dataContext.get_NavBarMruViewModel()
                    })
                };
            InteractionCentricNavigationBarSpec.prototype
                .renderQuickCreateButton = function() {
                    return NavBarQuickCreate.NavbarQuickCreate({
                        key: "navBarQuickCreate",
                        clientContext: this.props.clientContext,
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        dataContext: this.props.dataContext.get_NavBarQuickCreateViewModel()
                    })
                };
            InteractionCentricNavigationBarSpec.prototype
                .handleOnKeyDown = function(e) {
                    e.keyCode == Constants.F8_KEY_CODE &&
                        this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey)
                };
            InteractionCentricNavigationBarSpec.prototype
                .renderSearchButton = function() {
                    return React.DOM.span({ className: "navBarSearch", key: "navBarSearchSpan" },
                        NavBarSearch.NavBarSearch({
                            key: "navBarSearch",
                            clientContext: this.props.clientContext,
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            dataContext: this.props.dataContext.get_NavBarSearchViewModel()
                        }))
                };
            InteractionCentricNavigationBarSpec.prototype
                .renderHelpButton = function() {
                    return React.DOM.span({
                            key: "navBarHelp",
                            className: "navBarHelp",
                            title: this.props.clientContext.getLocalizedString("Web.NavBar.Help_Title") +
                                "\n\n" +
                                this.props.clientContext.getLocalizedString("Web.NavBar.Help_Desc"),
                            onClick: this.handleHelpButtonClick,
                            onKeyDown: this.onKeyDownHandlerForHelp,
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled()
                                ? this.props.clientContext.getLocalizedString("Web.NavBar.Help_Title") +
                                "\n\n" +
                                this.props.clientContext.getLocalizedString("Web.NavBar.Help_Desc")
                                : null,
                            role: "link"
                        },
                        FontIcon.FontIcon({ symbolName: "Help" }))
                };
            InteractionCentricNavigationBarSpec.prototype.renderAssociatedView = function() {
                var associatedViewChildren = [],
                    entityName = this.props.dataContext.get_CurrentEntityName(),
                    tabInd = this.props.dataContext.get_StartIndex(),
                    curentOpenedEntityArea = React.DOM.span({
                            key: "NavBarCurrentOpenedForm",
                            title: entityName,
                            className: "navBarSiteMapAreaContainer",
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled() ? entityName : null,
                            role: "link"
                        },
                        entityName);
                associatedViewChildren.push(curentOpenedEntityArea);
                if (!this.props.dataContext.get_IsOpenedFormInCreateMode()) {
                    var navBarAssociatedView = NavBarAssociatedView
                        .NavBarAssociatedView({
                            key: "navBarBarAssociatedView",
                            clientContext: this.props.clientContext,
                            style: { display: "inline" },
                            title: entityName,
                            tabIndex: tabInd,
                            dataContext: this.props.dataContext.get_NavBarAssociatedViewModel()
                        });
                    associatedViewChildren.push(this.renderSiteMapNavBarSeparator("siteMapSubAreaSeparator"));
                    associatedViewChildren.push(navBarAssociatedView)
                }
                return React.DOM.span({
                        key: "InteracationCentricAssociatedViewContainer",
                        className: "InteracationCentricAssociatedViewContainer"
                    },
                    associatedViewChildren)
            };
            InteractionCentricNavigationBarSpec.prototype
                .renderSettingsButton = function() {
                    return NavBarSettings.NavBarSettings({
                        key: "navBarSettings",
                        clientContext: this.props.clientContext,
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        dataContext: this.props.dataContext.get_NavBarSettingsViewModel()
                    })
                };
            InteractionCentricNavigationBarSpec.prototype.render = function() {
                var children = [], stylesIcon = {};
                children.push(this.renderSiteMapLogo());
                children.push(this.renderSiteMapHomeButton());
                var stylesLogo = {};
                stylesLogo["height"] = "41px";
                stylesLogo["paddingTop"] = "5px";
                stylesLogo["paddingBottom"] = "5px";
                children.push(this.renderSiteMapNavBarSeparator("siteMapSeparator", stylesLogo));
                children.push(this.renderSiteMapButton());
                children.push(this.renderSiteMapMenu());
                this.props.dataContext.get_ActiveArea() != null && children.push(this.renderSiteMapActiveArea());
                if (this.props.dataContext.get_ActiveSubArea() != null) {
                    children.push(this.renderSiteMapActiveSubArea());
                    children.push(this.renderSiteMapNavBarSeparator("siteMapSubAreaSeparator"));
                    children.push(this.renderSiteMapActiveSubAreaDropDown())
                }
                this.showRecentRecords && children.push(this.renderEntityMruList());
                this.props.dataContext.get_IsCurrentEntityDataPopulated() && children.push(this.renderAssociatedView());
                children.push(this.renderGlobalMruButton());
                children.push(this.renderQuickCreateButton());
                children.push(this.renderSearchButton());
                children.push(this.renderUserInfo());
                children.push(this.renderSettingsButton());
                stylesIcon["height"] = "41px";
                stylesIcon["padding"] = "0px";
                children.push(this.renderSiteMapNavBarSeparator("separatorForHelp", stylesIcon));
                children.push(this.renderHelpButton());
                return React.DOM.div({
                        key: "icnavBar",
                        className: CssClassSet({ icnavBar: true, icnavBarOff: this.props.dataContext.isNavBarOff() })
                    },
                    React.DOM.div({
                            key: "headerBar",
                            className: "icNavigationBar",
                            id: "headerBar",
                            onKeyDown: this.handleOnKeyDown
                        },
                        children))
            };
            return InteractionCentricNavigationBarSpec
        }(TsAdapter.SpecBase);
        exports.InteractionCentricNavigationBar = DataWrapperComponent
            .wrapComponent(new InteractionCentricNavigationBarSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/InteractionCentricShell",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Shell/Shell",
        "Utils/CssClassSet", "Components/Shell/OfflineIndicator", "Components/Shell/Conductor",
        "Components/Shell/DialogConductor", "Components/InteractionCentric/InteractionCentricUserEducation",
        "Components/InteractionCentric/NavigationControl/NavigationControl",
        "Components/NavigationBar/InteractionCentricNavigationBar", "Components/AppBar/AppBarShell",
        "Components/Shell/ShellBackButton"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        Shell,
        CssClassSet,
        OfflineIndicator,
        Conductor,
        DialogConductor,
        InteractionCentricUserEducation,
        NavigationControl,
        InteractionCentricNavigationBar,
        AppBarShell,
        ShellBackButton) {
        var InteractionCentricShellSpec = function(_super) {
            __extends(InteractionCentricShellSpec, _super);

            function InteractionCentricShellSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionCentricShell";
                this.listenToProperties = [
                    "CanvasConductor", "LastRetrievedText", "InteractionCentricNavigationBar",
                    "CommandManagerViewModel",
                    "DialogConductor"
                ]
            }

            InteractionCentricShellSpec.prototype
                .shouldClearSelectedViewModelsOnTargetClick = function(target) {
                    return target.closest(".interactionCentricGrid").length === 0 &&
                        target.closest(".interactionCentricAssociatedGrid").length === 0 &&
                        target.closest(".panoramaItem").length === 0 &&
                        target.closest(".flyoutButton-flyOut").length === 0 &&
                        target.closest(".commandBar-content").length === 0 &&
                        this.props.dataContext.get_CanvasConductor().get_Top().get_ComponentType() !== 13
                };
            InteractionCentricShellSpec.prototype.render = function() {
                var children = [];
                children.push(OfflineIndicator
                    .OfflineIndicator({
                        key: "offline",
                        dataContext: this.props.dataContext,
                        clientContext: this.props.clientContext
                    }));
                children.push(React.DOM.div({
                        key: "container",
                        className: CssClassSet({
                            "interactionCentricMainContainer applicationShell-contentRegion": true,
                            interactionCentricNavbarOff: this.props.dataContext.isNavBarOff()
                        })
                    },
                    [
                        Conductor.Conductor({
                            key: "canvas",
                            dataContext: this.props.dataContext.get_CanvasConductor(),
                            clientContext: this.props.clientContext
                        }), React.DOM.span({ key: "lastretrievedtext", className: "lastRetrievedText" },
                            this.props.dataContext.get_LastRetrievedText())
                    ]));
                children.push(React.DOM.div({
                        key: "nav",
                        className: CssClassSet({
                            interactionCentricNavContainer: true,
                            backButtonOff: this.props.dataContext.isBackButtonOff()
                        }),
                        id: "navigationPane"
                    },
                    [
                        ShellBackButton.ShellBackButton({
                            key: "backbutton",
                            clientContext: this.props.clientContext,
                            dataContext: this.props.dataContext
                        }), NavigationControl.NavigationControl({
                            key: "navcontrol",
                            dataContext: this.props.dataContext,
                            clientContext: this.props.clientContext
                        })
                    ]));
                children.push(InteractionCentricNavigationBar
                    .InteractionCentricNavigationBar({
                        key: "navbar",
                        dataContext: this.props.dataContext.get_InteractionCentricNavigationBar(),
                        clientContext: this.props.clientContext
                    }));
                children.push(AppBarShell.AppBarShell({
                    key: "appbar",
                    dataContext: this.props.dataContext.get_CommandManagerViewModel(),
                    clientContext: this.props.clientContext
                }));
                children.push(DialogConductor.DialogConductor({
                    key: "dialog",
                    dataContext: this.props.dataContext.get_DialogConductor(),
                    clientContext: this.props.clientContext
                }));
                children.push(InteractionCentricUserEducation.InteractionCentricUserEducation({ key: "usered" }));
                return Shell.Shell({
                        dataContext: this.props.dataContext,
                        clientContext: this.props.clientContext,
                        shouldshouldClearSelectedViewModelsOnTargetClick: this
                            .shouldClearSelectedViewModelsOnTargetClick
                    },
                    children)
            };
            return InteractionCentricShellSpec
        }(TsAdapter.SpecBase);
        exports.InteractionCentricShell = DataWrapperComponent.wrapComponent(new InteractionCentricShellSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/Dialogs/InteractionCentricQuickCreateForm",
    [
        "require", "exports", "Components/DataWrapperComponent", "Components/Primitives/Button",
        "Components/Primitives/FontIcon", "Components/Dialogs/QuickCreateButton", "Components/Dialogs/QuickCreateForm",
        "Components/Common/Constants", "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        DataWrapperComponent,
        Button,
        FontIcon,
        QuickCreateButton,
        QuickCreateForm,
        Constants,
        FocusHandlerMixin) {
        var InteractionCentricQuickCreateFormSpec = function(_super) {
            __extends(InteractionCentricQuickCreateFormSpec, _super);

            function InteractionCentricQuickCreateFormSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionCentricQuickCreateForm";
                this.mixins = [FocusHandlerMixin.Mixin];
                this.listenToProperties = ["ActiveNavigationStack", "Top"]
            }

            InteractionCentricQuickCreateFormSpec.prototype.handleCloseClick = function() {
                var command = this.props.dataContext.get_RequestCloseCommand();
                command && command.get_CanExecute() && command.execute()
            };
            InteractionCentricQuickCreateFormSpec.prototype
                .componentWillMount = function() { this.activeElementBeforeOpening = document.activeElement };
            InteractionCentricQuickCreateFormSpec.prototype.handleFocus = function() {
                var focusableComponent = this.refs["firstFocusable"];
                if (focusableComponent) {
                    var focusableDomComponent = $(ReactDOM.findDOMNode(focusableComponent));
                    if (focusableDomComponent) {
                        var firstSectionControl = $(focusableDomComponent.find(".section_control")[0]);
                        if (firstSectionControl != null && firstSectionControl.length > 0) firstSectionControl.focus();
                        else focusableDomComponent.focus()
                    }
                    return false
                }
            };
            InteractionCentricQuickCreateFormSpec.prototype.componentWillUnmount = function() {
                if (this.activeElementBeforeOpening &&
                    $(this.activeElementBeforeOpening).is(":visible") &&
                    !(this.activeElementBeforeOpening.tagName === "BODY")) $(this.activeElementBeforeOpening).focus();
                else {
                    var focusableItem = $(".flyoutContainer .flyoutTopMenuButton");
                    focusableItem != null && focusableItem.length > 0 && focusableItem.focus()
                }
            };
            InteractionCentricQuickCreateFormSpec.prototype.handleKeyDownOnClose = function(e) {
                var firstFocusable = this.refs["firstFocusable"], lastFocusable = this.refs["firstFocusable"];
                switch (e.keyCode) {
                case Constants.TAB_KEY_CODE:
                    if (e.shiftKey) {
                        $(ReactDOM.findDOMNode(lastFocusable)).find("button").focus();
                        e.preventDefault()
                    } else if (!e.shiftKey) {
                        $(ReactDOM.findDOMNode(firstFocusable)).focus();
                        e.preventDefault()
                    }
                    break;
                case Constants.ENTER_KEY_CODE:
                case Constants.ESCAPE_KEY_CODE:
                    this.handleCloseClick();
                    break
                }
            };
            InteractionCentricQuickCreateFormSpec.prototype.renderICHeader = function() {
                var header = this.renderHeader(),
                    closeButton = Button.Button({
                            key: "closeQuickCreate",
                            ref: "closeQuickCreate",
                            onKeyDown: this.handleKeyDownOnClose,
                            className: "icQuickCreateForm_closeButton",
                            onClick: this.handleCloseClick,
                            tabIndex: this.props.dataContext.get_IsInteractionCentricEnabled()
                                ? this.props.dataContext.get_StartIndex()
                                : null,
                            title: this.props.clientContext.getLocalizedString("LabelForCloseButton"),
                            ariaLabel: this.props.dataContext.get_IsInteractionCentricEnabled()
                                ? (this.props.dataContext.get_Label() ? this.props.dataContext.get_Label() : "") +
                                ". " +
                                this.props.clientContext.getLocalizedString("LabelForCloseButton")
                                : null
                        },
                        FontIcon.FontIcon({ symbolName: "Close" }));
                return React.DOM.div({ key: "icHeader", className: "icQuickCreateForm_Header" }, [closeButton, header])
            };
            InteractionCentricQuickCreateFormSpec.prototype.renderActions = function() {
                var actions = [],
                    viewModel = this.props.dataContext,
                    nextTabIndex = viewModel.get_StartIndex(),
                    closeTabIndex = nextTabIndex + 2,
                    saveTabIndex = nextTabIndex + 1;
                if (!viewModel.get_IsCloseButtonHidden()) {
                    var close = QuickCreateButton
                        .QuickCreateButton({
                            key: "close",
                            ref: "lastFocusable",
                            className: "quickCreateCloseButton",
                            noImageRequired: true,
                            symbolName: "close",
                            onKeyDown: this.handleKeyDown,
                            clientContext: this.props.clientContext,
                            dataContext: viewModel.get_RequestCloseCommand(),
                            label: viewModel.get_CancelButtonText(),
                            tabIndex: closeTabIndex,
                            dataId: "close"
                        });
                    actions.push(close)
                }
                if (!viewModel.get_IsSaveAndCloseButtonHidden()) {
                    var save = QuickCreateButton
                        .QuickCreateButton({
                            key: "save",
                            noImageRequired: true,
                            symbolName: "save",
                            onKeyDown: this.handleKeyDown,
                            clientContext: this.props.clientContext,
                            dataContext: viewModel.get_CreateAndCloseCommand(),
                            label: viewModel.get_CreateAndCloseButtonText(),
                            tabIndex: saveTabIndex,
                            dataId: "createandclose"
                        });
                    actions.push(save)
                }
                return actions
            };
            InteractionCentricQuickCreateFormSpec.prototype.render = function() {
                var content = React.DOM.div({
                            key: "content",
                            className: "icQuickCreateForm-popupContent",
                            "aria-label": " "
                        },
                        [this.renderICHeader(), this.renderBody()]),
                    actionContainer = React.DOM.div({
                            key: "actions",
                            className: "icQuickCreateForm_actionDivContainer"
                        },
                        this.renderActions());
                return React.DOM.div({ className: "icQuickCreateFullForm icQuickCreateForm-popup" },
                    [content, actionContainer])
            };
            return InteractionCentricQuickCreateFormSpec
        }(QuickCreateForm.QuickCreateFormSpec);
        exports.InteractionCentricQuickCreateForm = DataWrapperComponent
            .wrapComponent(new InteractionCentricQuickCreateFormSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/TagFilter/TagFilter",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Core/Binding/WindowResizeHandlerMixin", "Utils/CssClassSet", "Components/Primitives/ProgressIndicator",
        "Components/Common/AccessibilityUtility"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        WindowResizeHandler,
        CssClassSet,
        ProgressIndicator,
        AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "TagFilter";
        var TagFilterSpec = function(_super) {
            __extends(TagFilterSpec, _super);

            function TagFilterSpec() {
                _super.apply(this, arguments);
                this.displayName = "TagFilter";
                this.visualFilterGridCell = "visualFilterGridCell";
                this.forceCheckOnNextUpdate = false;
                this.numberOfTagsToShow = 0;
                this.prevData = [];
                this.bodyHeight = 0;
                this.totalHeight = 0;
                this.mixins = [WindowResizeHandler.Mixin];
                this.listenToProperties = ["Enabled", "Visible", "Data", "IsLoading"]
            }

            TagFilterSpec.prototype.getDefaultProps = function() {
                return {
                    titleClassName: "title",
                    showMoreClassName: "showMore",
                    selectedTagElementClassName: "selectedTagElement",
                    nonSelectedTagElementClassName: "nonSelectedTagElement",
                    headerClassName: "tagFilterHeader",
                    bodyClassName: "tagFilterBody",
                    tagFilterClassName: "tagFilter"
                }
            };
            TagFilterSpec.prototype.getInitialState = function() {
                return {
                    showMore: false,
                    truncated: false,
                    tagFilterContainerScreenreaderText: "",
                    tagFilterContainerScreenreaderDelimiterText: this.props.clientContext
                        .getLocalizedString("VisualFilterHeader_ScreenReader_DelimiterLabel")
                }
            };
            TagFilterSpec.prototype.handleWindowResize = function() {
                this.forceCheckOnNextUpdate = true;
                this.setState({ truncated: false })
            };
            TagFilterSpec.prototype
                .handleShowMoreOrLessClick = function() { this.setState({ showMore: !this.state.showMore }) };
            TagFilterSpec.prototype
                .handleShowMoreOrLessKeyDown = function(e) {
                    (e.keyCode == 13 || e.keyCode == 32) && this.handleShowMoreOrLessClick()
                };
            TagFilterSpec.prototype.handleOnFocus = function() { this.props.dataContext.set_HasFocus(true) };
            TagFilterSpec.prototype.handleOnBlur = function() { this.props.dataContext.set_HasFocus(false) };
            TagFilterSpec.prototype.handleTagKeyDown = function(idElem, e) {
                (e.keyCode == 13 || e.keyCode == 32) && this.handleTagAction(idElem);
                e.stopPropagation()
            };
            TagFilterSpec.prototype.handleTagClick = function(idElem, e) { this.handleTagAction(idElem) };
            TagFilterSpec.prototype.handleTagAction = function(idElem) {
                var tagsData = this.props.dataContext.get_Data();
                if (idElem >= tagsData.length) return;
                var tag = tagsData[idElem], tagAttributeString = tag.get_Attribute();
                this.props.dataContext.HandleApplyFilter(tag.get_Aggregators(), tagAttributeString);
                if (tagAttributeString == "-1")
                    tagAttributeString = this.props.clientContext.getLocalizedString("ChartAttributeValueMissing");
                this.screenReaderDynamicText = this.props.clientContext
                    .getLocalizedString("VisualFilterPostApplication_ScreenReader_Label") +
                    tagAttributeString +
                    " product "
            };
            TagFilterSpec.prototype.getTagRepresentationStringForScreenReader = function(tag) {
                var tagAttributeString = tag.get_Attribute();
                if (tagAttributeString == "-1")
                    tagAttributeString = this.props.clientContext.getLocalizedString("ChartAttributeValueMissing");
                return tag.get_FormattedEntityCount() + " " + tagAttributeString + " product"
            };
            TagFilterSpec.prototype.getTagRepresentationString = function(tag) {
                var tagAttributeString = tag.get_Attribute();
                if (tagAttributeString == "-1")
                    tagAttributeString = this.props.clientContext.getLocalizedString("ChartAttributeValueMissing");
                var tagEntityCountString = " (" + tag.get_FormattedEntityCount() + ") ",
                    tagRepresentationString = tagAttributeString + tagEntityCountString,
                    tagTruncated = false,
                    untruncatedTagValue = "";
                if (tagAttributeString == "-1") untruncatedTagValue = tagAttributeString;
                else untruncatedTagValue = tagRepresentationString;
                var maximumLengthOfTag = this.props.dataContext.get_MaximumLengthOfTag();
                if (tagRepresentationString.length > maximumLengthOfTag) {
                    tagTruncated = true;
                    tagRepresentationString = tagAttributeString
                        .substr(0, maximumLengthOfTag - tagEntityCountString.length - 3) +
                        "\u2026" +
                        tagEntityCountString
                }
                return {
                    tagTruncated: tagTruncated,
                    tagRepresentationString: tagRepresentationString,
                    untruncatedTagValue: untruncatedTagValue
                }
            };
            TagFilterSpec.prototype.createDivElementsOutOfTags = function(tagsData, maxNumberOfTags) {
                for (var children = [],
                    selectedTagIdsDictionary = this.props.dataContext.get_SelectedIdsDictionary(),
                    dictionaryLength = Object.keys(selectedTagIdsDictionary).length,
                    i = 0;
                    i < Math.min(maxNumberOfTags, tagsData.length);
                    ++i) {
                    var noTagSelected = dictionaryLength === 0,
                        clickHandler = this.handleTagClick.bind(this, i),
                        keyDownHandler = this.handleTagKeyDown.bind(this, i),
                        tagIsPresentInDictionary = false;
                    if (this.props.dataContext
                        .get_FilterEventHadRangeQuery())
                        tagIsPresentInDictionary = selectedTagIdsDictionary[tagsData[i].get_Attribute()];
                    else {
                        var tagId = this.props.dataContext.GetElementPrimaryId(tagsData[i].get_Aggregators());
                        tagIsPresentInDictionary = selectedTagIdsDictionary[tagId]
                    }
                    var tagIsActive = noTagSelected || tagIsPresentInDictionary,
                        tagActionAllowed = tagIsActive && dictionaryLength !== 1;
                    if (!tagActionAllowed) {
                        clickHandler = null;
                        keyDownHandler = null
                    }
                    var tagElementClass = tagIsActive
                            ? this.props.selectedTagElementClassName
                            : this.props.nonSelectedTagElementClassName,
                        tagValue = this.getTagRepresentationString(tagsData[i]);
                    if (this.state.tagFilterContainerScreenreaderText
                        .indexOf(this.state.tagFilterContainerScreenreaderDelimiterText) ===
                        -1) {
                        if (i == 0)
                            this.state
                                .tagFilterContainerScreenreaderText +=
                                this.props.dataContext.VisualFilterHeaderScreenReaderLabel("Tag filter") + " ";
                        this.state.tagFilterContainerScreenreaderText += this
                            .getTagRepresentationStringForScreenReader(tagsData[i]);
                        if (i == Math.min(maxNumberOfTags, tagsData.length) - 2
                        ) this.state.tagFilterContainerScreenreaderText += " and ";
                        else if (i == Math.min(maxNumberOfTags, tagsData.length) - 1) {
                            var primaryEntityName = tagsData[i].get_FormattedEntityCount() == "1"
                                ? this.props.dataContext.PrimaryEntityDisplayName()
                                : this.props.dataContext.PrimaryEntityPluralName();
                            this.state
                                .tagFilterContainerScreenreaderText +=
                                " " + primaryEntityName + " " + this.state.tagFilterContainerScreenreaderDelimiterText
                        } else this.state.tagFilterContainerScreenreaderText += ", "
                    }
                    var tagChild = React.DOM.div({
                            className: tagElementClass,
                            key: "TagFilterContainer_tag" + i,
                            onClick: clickHandler,
                            onKeyDown: keyDownHandler,
                            title: tagValue.untruncatedTagValue,
                            tabIndex: tagIsActive ? this.tabIndex++ : -1,
                            "aria-label": tagValue.tagRepresentationString +
                                this.props.clientContext.getLocalizedString("VisualFilter_ScreenReader_Label"),
                            onFocus: this.handleOnFocus,
                            onBlur: this.handleOnBlur
                        },
                        tagValue.tagRepresentationString);
                    children.push(tagChild)
                }
                return children
            };
            TagFilterSpec.prototype.createShowMoreOrLessDiv = function(textToDisplay) {
                return React.DOM.div({
                        className: this.props.showMoreClassName,
                        key: "TagFilter_MoreOrLessOption",
                        ref: "TagFilter_MoreOrLessOption",
                        onClick: this.handleShowMoreOrLessClick,
                        onKeyDown: this.handleShowMoreOrLessKeyDown,
                        tabIndex: this.tabIndex++
                    },
                    textToDisplay)
            };
            TagFilterSpec.prototype.getTagsToRender = function() {
                var children = [],
                    tagsData = this.props.dataContext.get_Data(),
                    dataChanged = this.hasDataChanged(this.prevData, tagsData);
                if (dataChanged) {
                    this.prevData = tagsData;
                    this.forceCheckOnNextUpdate = true
                }
                if (this.state.showMore || this.forceCheckOnNextUpdate) {
                    children = this.createDivElementsOutOfTags(tagsData, tagsData.length);
                    if (this.state.showMore) {
                        var showLessString = this.props.clientContext.getLocalizedString("Tag_Filter_Show_Less") + "<<",
                            showLessDiv = this.createShowMoreOrLessDiv(showLessString);
                        children.push(showLessDiv)
                    } else {
                        var showMoreString = tagsData.length +
                                " " +
                                this.props.clientContext.getLocalizedString("Tag_Filter_Show_More") +
                                ">>",
                            showMoreDiv = this.createShowMoreOrLessDiv(showMoreString);
                        children.push(showMoreDiv)
                    }
                } else {
                    children = this.createDivElementsOutOfTags(tagsData, this.numberOfTagsToShow);
                    var cannotFitInContainer = this.numberOfTagsToShow < tagsData.length;
                    if (cannotFitInContainer) {
                        var remainingTagsCount = tagsData.length - this.numberOfTagsToShow,
                            showMoreString = remainingTagsCount +
                                " " +
                                this.props.clientContext.getLocalizedString("Tag_Filter_Show_More") +
                                ">>",
                            showMoreDiv = this.createShowMoreOrLessDiv(showMoreString);
                        children.push(showMoreDiv)
                    }
                }
                return children
            };
            TagFilterSpec.prototype.calculateNumberOfTagsFittingBody = function(node) {
                var numberOfTagsWhichCanbeShown = 0, bodyHeight = this.bodyHeight, bodyWidth = node.offsetWidth;
                if (node.children.length > 0) {
                    var tagElementHeight = node.children.item(0).offsetHeight,
                        margin = parseInt(getComputedStyle(node.children.item(0)).marginTop),
                        numberOfRows = Math.floor(bodyHeight / (tagElementHeight + 2 * margin)),
                        lengthAvailableInRow = bodyWidth,
                        lengthAvailableInPreviousRow = 0,
                        rowNumber = 0,
                        index = 0,
                        numberOfTagsToBeDisplayed = node.children.length - 1;
                    while (index < numberOfTagsToBeDisplayed && rowNumber < numberOfRows) {
                        var spaceTakenByTagI = node.children.item(index).offsetWidth + 2 * margin;
                        if (lengthAvailableInRow > spaceTakenByTagI) {
                            lengthAvailableInRow -= spaceTakenByTagI;
                            ++index
                        } else {
                            lengthAvailableInPreviousRow = lengthAvailableInRow;
                            lengthAvailableInRow = bodyWidth;
                            rowNumber++
                        }
                    }
                    numberOfTagsWhichCanbeShown = index;
                    if (index < numberOfTagsToBeDisplayed) {
                        var positionOfShowMoreDiv = node.children.length - 1,
                            spaceTakenByShowMoreDiv = node.children.item(positionOfShowMoreDiv).offsetWidth + margin;
                        if (spaceTakenByShowMoreDiv > lengthAvailableInPreviousRow) numberOfTagsWhichCanbeShown -= 1
                    }
                }
                return numberOfTagsWhichCanbeShown
            };
            TagFilterSpec.prototype.fixHeight = function() {
                if (this.props.dataContext.get_IsLoading()) return;
                this.refs["TagFilterBody"].style.height = this.bodyHeight.toString() + "px";
                $("." + this.visualFilterGridCell).css("height", this.totalHeight.toString() + "px")
            };
            TagFilterSpec.prototype.checkTruncation = function() {
                if (this.bodyHeight == 0) {
                    this.bodyHeight = $("." + this.visualFilterGridCell).innerHeight() - 40;
                    this.totalHeight = $("." + this.visualFilterGridCell).outerHeight()
                }
                if (this.props.dataContext.get_IsLoading()) return;
                this.fixHeight();
                var node = this.refs["TagFilterBody"],
                    numberOfNodesDisplayed = this.calculateNumberOfTagsFittingBody(node),
                    numberOfTagsAvailable = this.props.dataContext.get_Data().length;
                this.numberOfTagsToShow = numberOfNodesDisplayed;
                if (node && numberOfNodesDisplayed < numberOfTagsAvailable) this.setState({ truncated: true });
                else this.setState({ truncated: false })
            };
            TagFilterSpec.prototype.hasDataChanged = function(prevData, newData) {
                if (newData == null && prevData == null) return false;
                if (prevData == null || prevData.length != newData.length) return true;
                for (var i = 0; i < prevData.length; i++) {
                    if (prevData[i].get_Attribute() != newData[i].get_Attribute()) return true;
                    if (parseInt(prevData[i].get_EntityCount()) != parseInt(newData[i].get_EntityCount())) return true
                }
                return false
            };
            TagFilterSpec.prototype.componentDidMount = function() { this.checkTruncation() };
            TagFilterSpec.prototype.componentDidUpdate = function(prevProps) {
                if (!this.state.showMore) {
                    if (this.forceCheckOnNextUpdate)
                        if (this.state.truncated) {
                            this.forceCheckOnNextUpdate = true;
                            this.numberOfTagsToShow = 0;
                            this.setState({ truncated: false })
                        } else {
                            this.checkTruncation();
                            this.forceCheckOnNextUpdate = false
                        }
                    else this.props.dataContext.UIHasRendered();
                    this.fixHeight()
                }
                if (this.props.dataContext.get_HasFocus()) {
                    $(ReactDOM.findDOMNode(this)).attr("aria-label", this.screenReaderDynamicText);
                    $(ReactDOM.findDOMNode(this)).focus()
                }
            };
            TagFilterSpec.prototype.renderError = function() {
                var errorTitle = React.DOM.div({ className: "tagFilterErrorTitle", key: "TagFilterErrorTitle" },
                        this.props.dataContext.get_ErrorTitle()),
                    errorMessage = React.DOM.div({ className: "tagFilterErrorMessage", key: "TagFilterErrorMessage" },
                        this.props.dataContext.get_ErrorMessage());
                return React.DOM.div({ className: "tagFilterErrorContainer" }, errorTitle, errorMessage)
            };
            TagFilterSpec.prototype.render = function() {
                this.tabIndex = this.props.dataContext.get_StartIndex();
                var divIndex = this.tabIndex++;
                if (this.props.dataContext.get_IsError()) return this.renderError();
                else if (this.props.dataContext.get_IsLoading()) {
                    var progressIndicator = ProgressIndicator
                        .ProgressIndicator({
                            key: "loadingTagFilters",
                            type: ProgressIndicator.ProgressIndicatorType.Bar,
                            active: this.props.dataContext.get_IsLoading()
                        });
                    return React.DOM.div({
                            className: this.props.tagFilterClassName,
                            key: "TagFilterContainer",
                            tabIndex: divIndex
                        },
                        [progressIndicator])
                }
                var title = React.DOM.div({ className: this.props.titleClassName, key: "TagFilterTitle" },
                        this.props.dataContext.get_Title()),
                    headerChildren = [title],
                    header = React.DOM.div({ className: this.props.headerClassName, key: "TagFilterHeader" },
                        headerChildren),
                    bodyChildren = this.getTagsToRender(),
                    body = React.DOM.div({
                            className: CssClassSet({ tagFilterBodyShowAll: this.state.showMore },
                                this.props.bodyClassName),
                            key: "TagFilterBody",
                            ref: "TagFilterBody"
                        },
                        bodyChildren),
                    tagFilter = React.DOM.div({
                            className: this.props.tagFilterClassName,
                            key: "TagFilterContainer",
                            onKeyDown: this.itemOnKeyDownHandler,
                            tabIndex: divIndex,
                            "aria-label": this.state.tagFilterContainerScreenreaderText
                        },
                        [header, body]);
                return tagFilter
            };
            TagFilterSpec.prototype.itemOnKeyDownHandler = function(e) {
                AccessibilityUtility.handleArrowNavigationForTable(ReactDOM.findDOMNode(this), e);
                $(ReactDOM.findDOMNode(this)).attr("aria-label", this.state.tagFilterContainerScreenreaderText)
            };
            return TagFilterSpec
        }(TsAdapter.SpecBase);
        exports.TagFilter = DataWrapperComponent.wrapComponent(new TagFilterSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/MultiplePieChartControl/MultiplePieChartControl",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Core/Binding/WindowResizeHandlerMixin", "Components/Common/Constants",
        "Components/Primitives/ProgressIndicator",
        "Components/Common/AccessibilityUtility"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        WindowResizeHandler,
        Constants,
        ProgressIndicator,
        AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "MultiplePieChartControl";
        var MultiplePieChartControlSpec = function(_super) {
            __extends(MultiplePieChartControlSpec, _super);

            function MultiplePieChartControlSpec() {
                _super.apply(this, arguments);
                this.displayName = "MultiplePieChartControl";
                this.charts = [];
                this.prevData = [];
                this.mixins = [WindowResizeHandler.Mixin];
                this.listenToProperties = ["Data", "IsLoading", "RenderMultiplePie"]
            }

            MultiplePieChartControlSpec.prototype
                .getDefaultProps = function() { return { chartTitle: "BY PRIORITY", maxTitleLength: 10 } };
            MultiplePieChartControlSpec.prototype.handleWindowResize = function() { this.createMultiplePies() };
            MultiplePieChartControlSpec.prototype.setHeightsAndWidths = function(totalRings) {
                var rightMargin = 15,
                    leftMargin = 20,
                    singleRingInnerSizeMax = 120,
                    singleRingInnerSizeMin = 50,
                    pieCalcWidth,
                    pieOffsetWidth = ReactDOM.findDOMNode(this).clientWidth;
                pieCalcWidth = (pieOffsetWidth - leftMargin - rightMargin * (totalRings - 1)) / totalRings;
                if (pieCalcWidth > singleRingInnerSizeMax) pieCalcWidth = singleRingInnerSizeMax;
                if (pieCalcWidth < singleRingInnerSizeMin) pieCalcWidth = singleRingInnerSizeMin;
                this.props.dataContext.set_pieInnerSize(pieCalcWidth);
                this.props.dataContext.set_singlePieWidth(this.props.dataContext.get_pieInnerSize())
            };
            MultiplePieChartControlSpec.prototype.isPiesDataChanged = function(prevPiesData, newPiesData) {
                if (newPiesData == null && prevPiesData == null) return false;
                if (prevPiesData == null || prevPiesData.length != newPiesData.length) return true;
                for (var i = 0; i < prevPiesData.length; i++) {
                    if (prevPiesData[i].get_Attribute() != newPiesData[i].get_Attribute()) return true;
                    if (parseInt(prevPiesData[i]
                            .get_EntityCount()) !=
                        parseInt(newPiesData[i].get_EntityCount())) return true
                }
                return false
            };
            MultiplePieChartControlSpec.prototype.disposeCurrentCharts = function() {
                for (var chartIndex = 0; chartIndex < this.charts.length; chartIndex++) {
                    if (this.charts[chartIndex]) {
                        $(this.charts[chartIndex]).trigger("destroy");
                        this.charts[chartIndex] = null
                    }
                    var singleRing = this.refs["singleRing" + chartIndex];
                    singleRing instanceof Element && $(singleRing).unbind()
                }
                this.charts = null
            };
            MultiplePieChartControlSpec.prototype.componentWillUpdate = function() {
                var piesData = this.props.dataContext.get_Data();
                piesData != null && this.setHeightsAndWidths(piesData.length)
            };
            MultiplePieChartControlSpec.prototype.componentDidUpdate = function() {
                var piesData = this.props.dataContext.get_Data();
                if (this.isPiesDataChanged(this.prevData, piesData)) this.prevData = piesData;
                this.createMultiplePies();
                this.props.dataContext.UIHasRendered();
                if (this.props.dataContext.get_HasFocus()) {
                    $(ReactDOM.findDOMNode(this)).attr("aria-label", this.screenReaderDynamicText);
                    $(ReactDOM.findDOMNode(this)).focus()
                }
            };
            MultiplePieChartControlSpec.prototype.componentDidMount = function() {
                this.createMultiplePies();
                this.props.dataContext.UIHasRendered()
            };
            MultiplePieChartControlSpec.prototype.componentWillUnmount = function() { this.disposeCurrentCharts() };
            MultiplePieChartControlSpec.prototype.getTitleString = function(titleStr) {
                var titleString = titleStr;
                if (titleString
                    .length >
                    this.props.maxTitleLength)
                    titleString = titleStr.substr(0, this.props.maxTitleLength - 3) + "\u2026";
                return titleString
            };
            MultiplePieChartControlSpec.prototype
                .handleFilterClick = function(idElem, e) { this.handleFilterAction(idElem) };
            MultiplePieChartControlSpec.prototype.handleFilterKeyDown = function(idElem, e) {
                switch (e.keyCode) {
                case Constants.F8_KEY_CODE:
                    this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    break;
                case Constants.ENTER_KEY_CODE:
                case Constants.SPACE_KEY_CODE:
                    this.handleFilterAction(idElem);
                    break
                }
                e.stopPropagation()
            };
            MultiplePieChartControlSpec.prototype
                .handleOnFocus = function() { this.props.dataContext.set_HasFocus(true) };
            MultiplePieChartControlSpec.prototype
                .handleOnBlur = function() { this.props.dataContext.set_HasFocus(false) };
            MultiplePieChartControlSpec.prototype.handleFilterAction = function(idElem) {
                var selectedIdsDictionary = this.props.dataContext.get_SelectedIdsDictionary(),
                    dictionaryLength = Object.keys(selectedIdsDictionary).length;
                if (dictionaryLength !== 1) {
                    var pieData = this.props.dataContext.get_Data()[idElem], pieIsPresentInDictionary = false;
                    if (this.props.dataContext
                        .get_FilterEventHadRangeQuery())
                        pieIsPresentInDictionary = selectedIdsDictionary[pieData.get_Attribute()];
                    else {
                        var pieId = this.props.dataContext.GetElementPrimaryId(pieData.get_Aggregators());
                        pieIsPresentInDictionary = selectedIdsDictionary[pieId]
                    }
                    var actionAllowed = dictionaryLength === 0 || pieIsPresentInDictionary;
                    if (actionAllowed) {
                        var filterAttributeValue = pieData.get_Attribute();
                        this.props.dataContext.HandleApplyFilter(pieData.get_Aggregators(), filterAttributeValue);
                        this.screenReaderDynamicText = this.props.clientContext
                            .getLocalizedString("VisualFilterPostApplication_ScreenReader_Label") +
                            filterAttributeValue +
                            " priority"
                    }
                }
            };
            MultiplePieChartControlSpec.prototype.createMultiplePies = function() {
                if (this.props.dataContext.get_IsLoading()) return;
                var piesData = this.props.dataContext.get_Data();
                piesData != null && this.setHeightsAndWidths(piesData.length);
                this.disposeCurrentCharts();
                this.charts = [];
                for (var total = 0, index = 0;
                    index < piesData.length;
                    index++
                ) total += +piesData[index].get_EntityCount();
                for (var count = 0; count < piesData.length; count++) {
                    var val = +piesData[count].get_EntityCount(),
                        clickHandler = this.handleFilterClick.bind(this, count),
                        percentage = val / total * 100;
                    if (this.refs["pieTitle" + count] !== null && this.refs["pieTitle" + count] !== undefined)
                        if (val > 0) $(this.refs["pieTitle" + count]).css("cursor", "pointer");
                        else $(this.refs["pieTitle" + count]).css("cursor", "default");
                    var options = {
                            chart: {
                                renderTo: this.refs["singleRing" + count],
                                plotBackgroundColor: "#000000",
                                plotBorderWidth: 0,
                                plotShadow: false,
                                margin: [-1, -1, -1, -1]
                            },
                            title: {
                                style: { color: "#FFFFFF", fontWeight: "bold" },
                                text: piesData[count].get_FormattedEntityCount(),
                                align: "center",
                                verticalAlign: "middle"
                            },
                            tooltip: { formatter: function() { return false } },
                            plotOptions: {
                                series: { cursor: "default" },
                                pie: {
                                    borderWidth: "5px",
                                    borderColor: "#000000",
                                    startAngle: 0,
                                    endAngle: 360,
                                    center: ["50%", "50%"]
                                }
                            },
                            credits: { enabled: false },
                            series: [
                                {
                                    type: "pie",
                                    name: "Priority",
                                    innerSize: this.props.dataContext.get_pieInnerSize(),
                                    height: "auto",
                                    overflow: "auto",
                                    cursor: "pointer",
                                    data: [
                                        {
                                            name: piesData[count].get_Attribute(),
                                            y: percentage,
                                            color: "#FEFAFA",
                                            dataLabels: { enabled: false },
                                            events: { click: clickHandler }
                                        }, {
                                            name: "RemainingFields",
                                            y: 100 - percentage,
                                            color: "#666666",
                                            dataLabels: { enabled: false }
                                        }
                                    ]
                                }
                            ]
                        },
                        chart = new Highcharts.Chart(options);
                    this.charts.push(chart)
                }
            };
            MultiplePieChartControlSpec.prototype.renderHeader = function() {
                var headerChildren = [],
                    title = React.DOM.span({ key: "chartTitle", className: "chartTitle" },
                        this.props.dataContext.get_Title());
                headerChildren.push(title);
                return React.DOM.div({ key: "multiplePieChartHeader", className: "multiplePieChartHeader" },
                    headerChildren)
            };
            MultiplePieChartControlSpec.prototype.getScreenReaderTextForSingleRing = function(pieData) {
                var singlePieChartScreenReaderText = "";
                if (pieData) {
                    var primaryEntityName = pieData.get_EntityCount() == "1"
                        ? this.props.dataContext.PrimaryEntityDisplayName()
                        : this.props.dataContext.PrimaryEntityPluralName();
                    singlePieChartScreenReaderText = "Priority " +
                        pieData.get_Attribute() +
                        "." +
                        pieData.get_EntityCount() +
                        " " +
                        primaryEntityName +
                        " " +
                        this.props.clientContext.getLocalizedString("VisualFilter_ScreenReader_Label")
                }
                return singlePieChartScreenReaderText
            };
            MultiplePieChartControlSpec.prototype.renderSinglePie = function(index, pieData) {
                var singleElement = [],
                    name = "singleRing" + index,
                    element = React.DOM.div({
                        key: name,
                        className: "singleRing",
                        style: {
                            width: this.props.dataContext.get_singlePieWidth(),
                            height: this.props.dataContext.get_singlePieWidth()
                        },
                        ref: name,
                        tabIndex: pieData.get_EntityCount() != "0" ? this.tabIndex++ : -1,
                        onKeyDown: this.handleFilterKeyDown.bind(this, index),
                        onFocus: this.handleOnFocus,
                        onBlur: this.handleOnBlur,
                        "aria-label": this.getScreenReaderTextForSingleRing(pieData)
                    });
                singleElement.push(element);
                singleElement.push(this.renderFooter(index, pieData));
                var val = pieData.get_EntityCount(), percentage = 0;
                if (this.totalCount > 0) percentage = parseFloat(val) / this.totalCount * 100;
                var toolTip = pieData.get_Attribute() === "RemainingFields"
                    ? null
                    : pieData.get_Attribute() + ": " + percentage.toFixed(2).toString() + "%";
                return React.DOM.div({
                        key: "pieBodyElement" + index,
                        className: "pieBodyElement",
                        title: toolTip,
                        style: { width: this.props.dataContext.get_singlePieWidth() }
                    },
                    singleElement)
            };
            MultiplePieChartControlSpec.prototype.renderBody = function(piesData) {
                for (var bodyChildren = [], count = 0;
                    count < piesData.length;
                    count++
                ) bodyChildren.push(this.renderSinglePie(count, piesData[count]));
                return React.DOM.div({ key: "pieBody", className: "pieBody" }, bodyChildren)
            };
            MultiplePieChartControlSpec.prototype.getScreenReaderTextForMultiplePieContainer = function(piesData) {
                var multiplePieChartScreenReaderText = "";
                if (piesData.length) {
                    multiplePieChartScreenReaderText = this.props.dataContext
                        .VisualFilterHeaderScreenReaderLabel("Pie chart") +
                        " ";
                    for (var count = 0; count < piesData.length - 1; count++) {
                        if (count != 0) multiplePieChartScreenReaderText += ", ";
                        multiplePieChartScreenReaderText += piesData[count].get_EntityCount() + " ";
                        multiplePieChartScreenReaderText += piesData[count].get_Attribute() + " ";
                        multiplePieChartScreenReaderText += "priority"
                    }
                    if (piesData.length > 1) multiplePieChartScreenReaderText += " and ";
                    var primaryEntityName = piesData[count].get_EntityCount() === "1"
                        ? this.props.dataContext.PrimaryEntityDisplayName()
                        : this.props.dataContext.PrimaryEntityPluralName();
                    multiplePieChartScreenReaderText += piesData[count].get_EntityCount() + " ";
                    multiplePieChartScreenReaderText += piesData[count].get_Attribute() + " ";
                    multiplePieChartScreenReaderText += " priority " +
                        primaryEntityName +
                        " " +
                        this.props.clientContext.getLocalizedString("VisualFilterHeader_ScreenReader_DelimiterLabel")
                }
                return multiplePieChartScreenReaderText
            };
            MultiplePieChartControlSpec.prototype.renderFooter = function(index, pieData) {
                var clickHandler = this.handleFilterClick.bind(this, index),
                    title = pieData.get_Attribute().toString(),
                    titleString = this.getTitleString(title);
                if (titleString == "-1")
                    titleString = this.props.clientContext.getLocalizedString("ChartAttributeValueMissing");
                var pieTitle = React.DOM.span({
                        key: "pieTitle" + index,
                        className: "pieTitle",
                        ref: "pieTitle" + index,
                        title: title == "-1" ? titleString : title,
                        onClick: clickHandler
                    },
                    titleString);
                return React.DOM.div({ key: "footer" + index, className: "footerElement" }, pieTitle)
            };
            MultiplePieChartControlSpec.prototype.renderError = function() {
                var errorTitle = React.DOM.div({ className: "multiplePieErrorTitle", key: "MultiplePieErrorTitle" },
                        this.props.dataContext.get_ErrorTitle()),
                    errorMessage = React.DOM.div({
                            className: "multiplePieErrorMessage",
                            key: "MultiplePieErrorMessage"
                        },
                        this.props.dataContext.get_ErrorMessage());
                return React.DOM.div({ className: "multiplePieErrorContainer" }, errorTitle, errorMessage)
            };
            MultiplePieChartControlSpec.prototype.render = function() {
                var pieContainer = [];
                if (this.props.dataContext.get_IsError()) return this.renderError();
                else if (this.props.dataContext.get_IsLoading()) {
                    pieContainer.push(ProgressIndicator
                        .ProgressIndicator({
                            key: "loadingPieCharts",
                            type: ProgressIndicator.ProgressIndicatorType.Bar,
                            active: this.props.dataContext.get_IsLoading()
                        }));
                    return React.DOM.div({ className: "multiplePieContainer", tabIndex: divIndex }, pieContainer)
                }
                var piesData = this.props.dataContext.get_Data();
                this.tabIndex = this.props.dataContext.get_StartIndex();
                var divIndex = this.tabIndex++, piesData = this.props.dataContext.get_Data();
                this.totalCount = 0;
                for (var index = 0;
                    index < piesData.length;
                    index++
                ) this.totalCount += +piesData[index].get_EntityCount();
                pieContainer.push(this.renderHeader());
                pieContainer.push(this.renderBody(piesData));
                return React.DOM.div({
                        className: "multiplePieContainer",
                        onKeyDown: this.itemOnKeyDownHandler.bind(this, piesData),
                        tabIndex: divIndex,
                        "aria-label": this.getScreenReaderTextForMultiplePieContainer(piesData)
                    },
                    pieContainer)
            };
            MultiplePieChartControlSpec.prototype.itemOnKeyDownHandler = function(piesData, e) {
                AccessibilityUtility.handleArrowNavigationForTable(ReactDOM.findDOMNode(this), e);
                $(ReactDOM.findDOMNode(this)).attr("aria-label",
                    this.getScreenReaderTextForMultiplePieContainer(piesData))
            };
            return MultiplePieChartControlSpec
        }(TsAdapter.SpecBase);
        exports.MultiplePieChartControl = DataWrapperComponent.wrapComponent(new MultiplePieChartControlSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/AppliedFiltersControl/AppliedFilters",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/Button",
        "Components/DataWrapperComponent", "Core/Binding/UIHasRenderedMixin", "Components/Primitives/FontIcon",
        "Components/Primitives/ProgressIndicator", "Components/Common/Constants"
    ],
    function(require,
        exports,
        TsAdapter,
        Button,
        DataWrapperComponent,
        UIHasRendered,
        FontIcon,
        ProgressIndicator,
        Constants) {
        exports.DESCRIPTOR_NAME = "AppliedFilters";
        var AppliedFiltersSpec = function(_super) {
            __extends(AppliedFiltersSpec, _super);

            function AppliedFiltersSpec() {
                _super.apply(this, arguments);
                this.displayName = "AppliedFilters";
                this.isFirstRender = true;
                this.mixins = [UIHasRendered.Mixin];
                this.listenToProperties = ["MetadataFetched", "CurrentAppliedFilters"]
            }

            AppliedFiltersSpec.prototype.getInitialState = function() { return { truncated: false } };
            AppliedFiltersSpec.prototype.onRemoveButtonClick = function(attributeName) {
                this.props.dataContext.removedAppliedFilters(attributeName)
            };
            AppliedFiltersSpec.prototype
                .onRemoveButtonClickWithEntity = function(entityName, attributeName) {
                    this.props.dataContext.removedAppliedFiltersWithEntity(entityName, attributeName)
                };
            AppliedFiltersSpec.prototype
                .onRemoveAllButtonClick = function() { this.props.dataContext.removedAllAppliedFilters() };
            AppliedFiltersSpec.prototype.componentDidMount = function() {
                var appliedFiltersContainer = this.refs["AppliedFiltersContainer"];
                if (appliedFiltersContainer instanceof Element) {
                    var node = $(appliedFiltersContainer);
                    node.height() > 40 && this.setState({ truncated: true })
                }
            };
            AppliedFiltersSpec.prototype.componentDidUpdate = function() {
                var appliedFiltersContainer = this.refs["AppliedFiltersContainer"];
                if (appliedFiltersContainer instanceof Element) {
                    var node = $(appliedFiltersContainer);
                    if (node.height() > 40) this.setState({ truncated: true });
                    else this.isFirstRender = true
                }
            };
            AppliedFiltersSpec.prototype.focusGlobalFilterButton = function() {
                var globalFilterButton = $("#GlobalFilterButton");
                globalFilterButton && globalFilterButton.focus()
            };
            AppliedFiltersSpec.prototype.onRemoveButtonKeyDown = function(attributeName, e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) {
                    this.onRemoveButtonClick(attributeName);
                    this.focusGlobalFilterButton()
                }
            };
            AppliedFiltersSpec.prototype.onRemoveButtonKeyDownWithEntity = function(entityName, attributeName, e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) {
                    this.onRemoveButtonClickWithEntity(entityName, attributeName);
                    this.focusGlobalFilterButton()
                }
            };
            AppliedFiltersSpec.prototype.onRemoveAllButtonKeyDown = function(e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) {
                    this.onRemoveAllButtonClick();
                    this.focusGlobalFilterButton()
                }
            };
            AppliedFiltersSpec.prototype.render = function() {
                if (this.props.dataContext.get_IsLoading())
                    return ProgressIndicator.ProgressIndicator({
                        key: "progress",
                        active: true,
                        type: ProgressIndicator.ProgressIndicatorType.Bar
                    });
                var appliedFilters = this.props.dataContext.GenerateAppliedFilters();
                if (appliedFilters) {
                    var children = [];
                    if (this.isFirstRender)
                        for (var keyName in appliedFilters) {
                            var label = React.DOM.span({ key: keyName }, appliedFilters[keyName]["displaytext"]),
                                keyDownHandler = this.props.dataContext.get_IsMultipleEntityGraphSupported()
                                    ? this.onRemoveButtonKeyDownWithEntity
                                    .bind(this, appliedFilters[keyName]["entityname"], keyName)
                                    : this.onRemoveButtonKeyDown.bind(this, keyName),
                                removeButton = this.props.dataContext.get_IsMultipleEntityGraphSupported()
                                    ? Button.Button({
                                            key: "removeButton",
                                            dataId: keyName,
                                            onClick: this.onRemoveButtonClickWithEntity
                                                .bind(this, appliedFilters[keyName]["entityname"], keyName),
                                            title: this.props.clientContext
                                                .getLocalizedString("AppliedFilters_RemoveFilter")
                                        },
                                        FontIcon.FontIcon({ symbolName: "Close" }))
                                    : Button.Button({
                                            key: "removeButton",
                                            dataId: keyName,
                                            onClick: this.onRemoveButtonClick.bind(this, keyName),
                                            title: this.props.clientContext
                                                .getLocalizedString("AppliedFilters_RemoveFilter")
                                        },
                                        FontIcon.FontIcon({ symbolName: "Close" })),
                                containerDiv = React.DOM.div({
                                        key: keyName,
                                        className: "AppliedFilter",
                                        tabIndex: this.props.dataContext.get_NextTabIndex() > -1
                                            ? this.props.dataContext.get_NextTabIndex()
                                            : this.props.dataContext.get_StartIndex(),
                                        "aria-label": this.props.dataContext
                                            .AppliedFilterScreenReaderText(appliedFilters[keyName]["screenreadabletext"
                                            ]),
                                        onKeyDown: keyDownHandler
                                    },
                                    label,
                                    removeButton);
                            children.push(containerDiv);
                            this.isFirstRender = false
                        }
                    else {
                        if (this.state.truncated && this.props.dataContext.get_AppliedFiltersCount() > 0) {
                            var count = React.DOM.span({ key: "AppliedFiltersCount" },
                                this.props.dataContext.get_AppliedFiltersCount() +
                                " " +
                                this.props.clientContext.getLocalizedString("GlobalFilter_Filters"));
                            children.push(count);
                            var globalFilterButton = $("#GlobalFilterButton");
                            globalFilterButton &&
                                globalFilterButton.attr("aria-label",
                                    this.props.dataContext.TruncatedGlobalFilterScreenReaderText())
                        } else
                            for (var keyName in appliedFilters) {
                                var label = React.DOM.span({ key: keyName }, appliedFilters[keyName]["displaytext"]),
                                    keyDownHandler = this.props.dataContext.get_IsMultipleEntityGraphSupported()
                                        ? this.onRemoveButtonKeyDownWithEntity
                                        .bind(this, appliedFilters[keyName]["entityname"], keyName)
                                        : this.onRemoveButtonKeyDown.bind(this, keyName),
                                    removeButton = this.props.dataContext.get_IsMultipleEntityGraphSupported()
                                        ? Button.Button({
                                                key: "removeButton",
                                                dataId: keyName,
                                                onClick: this.onRemoveButtonClickWithEntity
                                                    .bind(this, appliedFilters[keyName]["entityname"], keyName),
                                                title: this.props.clientContext
                                                    .getLocalizedString("AppliedFilters_RemoveFilter")
                                            },
                                            FontIcon.FontIcon({ symbolName: "Close" }))
                                        : Button.Button({
                                                key: "removeButton",
                                                dataId: keyName,
                                                onClick: this.onRemoveButtonClick.bind(this, keyName),
                                                title: this.props.clientContext
                                                    .getLocalizedString("AppliedFilters_RemoveFilter")
                                            },
                                            FontIcon.FontIcon({ symbolName: "Close" })),
                                    containerDiv = React.DOM
                                        .div({
                                                key: keyName,
                                                className: "AppliedFilter",
                                                tabIndex: this.props.dataContext.get_NextTabIndex() > -1
                                                    ? this.props.dataContext.get_NextTabIndex()
                                                    : this.props.dataContext.get_StartIndex(),
                                                "aria-label": this.props.dataContext
                                                    .AppliedFilterScreenReaderText(appliedFilters[keyName][
                                                        "screenreadabletext"
                                                    ]),
                                                onKeyDown: keyDownHandler
                                            },
                                            label,
                                            removeButton);
                                children.push(containerDiv)
                            }
                        this.isFirstRender = true
                    }
                    if (this.props.dataContext.get_AppliedFiltersCount() > 0) {
                        var removeAllFilters = Button.Button({
                                key: "removeAllFilters",
                                className: "removeAllFilters",
                                onClick: this.onRemoveAllButtonClick,
                                tabIndex: this.props.dataContext.get_NextTabIndex() > -1
                                    ? this.props.dataContext.get_NextTabIndex()
                                    : this.props.dataContext.get_StartIndex(),
                                onKeyDown: this.onRemoveAllButtonKeyDown,
                                ariaLabel: this.props.clientContext
                                    .getLocalizedString("AppliedFilters_ScreenReader_ClearAllFilters")
                            },
                            FontIcon.FontIcon({ symbolName: "RemoveFilter" }));
                        children.push(removeAllFilters)
                    }
                    return React.DOM.div({ className: "AppliedFiltersContainer", ref: "AppliedFiltersContainer" },
                        children)
                } else return React.DOM.noscript()
            };
            return AppliedFiltersSpec
        }(TsAdapter.SpecBase);
        exports.AppliedFilters = DataWrapperComponent.wrapComponent(new AppliedFiltersSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/DateRangeControl/DateRangeControl",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/FontIcon", "Components/Common/Constants", "Core/Binding/FocusHandlerMixin"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, FontIcon, Constants, FocusHandlerMixin) {
        exports.DESCRIPTOR_NAME = "DateRangeControl";
        exports.DAY = "day";
        exports.DAYS = "days";
        exports.WEEK = "week";
        exports.MONTH = "month";
        exports.QUARTER = "quarter";
        exports.TODAY = "0";
        exports.YESTERDAY = "1";
        exports.THISWEEK = "2";
        exports.LASTWEEK = "3";
        exports.THISMONTH = "4";
        exports.LASTMONTH = "5";
        exports.MONTHTILLDATE = "6";
        exports.THISQUARTER = "7";
        exports.LASTQUARTER = "8";
        var DateRangeControlSpec = function(_super) {
            __extends(DateRangeControlSpec, _super);

            function DateRangeControlSpec() {
                _super.apply(this, arguments);
                this.displayName = "DateRangeControl";
                this.dateRangeValue = "";
                this.classVisible = "visible";
                this.listenToProperties = ["StartDate", "EndDate", "FilterBy", "ActiveNavigationStack", "Top"];
                this.mixins = [FocusHandlerMixin.Mixin]
            }

            DateRangeControlSpec.prototype.componentWillMount = function() {
                if (!this.props.dataContext.get_TimeFrame()) return;
                else if (this.props.dataContext.get_TimeFrameInitialized() == true) return;
                var today = moment().toISOString(), startDate = today, endDate = today;
                switch (this.props.dataContext.get_TimeFrame()) {
                case exports.TODAY:
                    break;
                case exports.YESTERDAY:
                    startDate = moment().subtract(1, exports.DAYS).toISOString();
                    endDate = moment().subtract(1, exports.DAYS).toISOString();
                    break;
                case exports.THISWEEK:
                    startDate = moment().startOf(exports.WEEK).add(1, exports.DAY).toISOString();
                    endDate = moment().startOf(exports.WEEK).add(7, exports.DAY).toISOString();
                    break;
                case exports.LASTWEEK:
                    startDate = moment().startOf(exports.WEEK).subtract(6, exports.DAY).toISOString();
                    endDate = moment().startOf(exports.WEEK).toISOString();
                    break;
                case exports.THISMONTH:
                    startDate = moment().startOf(exports.MONTH).toISOString();
                    endDate = moment().endOf(exports.MONTH).toISOString();
                    break;
                case exports.LASTMONTH:
                    startDate = moment().subtract(1, exports.MONTH).startOf(exports.MONTH).toISOString();
                    endDate = moment().subtract(1, exports.MONTH).endOf(exports.MONTH).toISOString();
                    break;
                case exports.MONTHTILLDATE:
                    startDate = moment().startOf(exports.MONTH).toISOString();
                    endDate = today;
                    break;
                case exports.THISQUARTER:
                    startDate = moment().startOf(exports.QUARTER).toISOString();
                    endDate = moment().endOf(exports.QUARTER).toISOString();
                    break;
                case exports.LASTQUARTER:
                    startDate = moment().subtract(1, exports.QUARTER).startOf(exports.QUARTER).toISOString();
                    endDate = moment().subtract(1, exports.QUARTER).endOf(exports.QUARTER).toISOString();
                    break
                }
                this.props.dataContext.set_TimeFrameInitialized(true);
                this.props.dataContext.SetDates(startDate, endDate);
                this.props.dataContext.SetAttributeDisplayName()
            };
            DateRangeControlSpec.prototype.getRanges = function() {
                var today = moment();
                return {
                    Today: {
                        Label: this.props.clientContext.getLocalizedString("LabelForToday"),
                        range: [today, today]
                    },
                    Yesterday: {
                        Label: this.props.clientContext.getLocalizedString("LabelForYesterday"),
                        range: [moment().subtract(1, exports.DAYS), moment().subtract(1, exports.DAYS)]
                    },
                    "This Week": {
                        Label: this.props.clientContext.getLocalizedString("LabelForThisWeek"),
                        range: [
                            moment().startOf(exports.WEEK).add(1, exports.DAY), moment().startOf(exports.WEEK)
                            .add(7, exports.DAY)
                        ]
                    },
                    "Last Week": {
                        Label: this.props.clientContext.getLocalizedString("LabelForLastWeek"),
                        range: [moment().startOf(exports.WEEK).subtract(6, exports.DAY), moment().startOf(exports.WEEK)]
                    },
                    "This Month": {
                        Label: this.props.clientContext.getLocalizedString("LabelForThisMonth"),
                        range: [moment().startOf(exports.MONTH), moment().endOf(exports.MONTH)]
                    },
                    "Last Month": {
                        Label: this.props.clientContext.getLocalizedString("LabelForLastMonth"),
                        range: [
                            moment().subtract(1, exports.MONTH).startOf(exports.MONTH), moment()
                            .subtract(1, exports.MONTH)
                            .endOf(exports.MONTH)
                        ]
                    },
                    "Month Till Date": {
                        Label: this.props.clientContext.getLocalizedString("ICDashboardEditorTimeFrameMonthTillDate"),
                        range: [moment().startOf(exports.MONTH), today]
                    },
                    "This Quarter": {
                        Label: this.props.clientContext.getLocalizedString("LabelForThisQuarter"),
                        range: [moment().startOf(exports.QUARTER), moment().endOf(exports.QUARTER)]
                    },
                    "Last Quarter": {
                        Label: this.props.clientContext.getLocalizedString("LabelForLastQuarter"),
                        range: [
                            moment().subtract(1, exports.QUARTER).startOf(exports.QUARTER), moment()
                            .subtract(1, exports.QUARTER).endOf(exports.QUARTER)
                        ]
                    }
                }
            };
            DateRangeControlSpec.prototype
                .getWeekLabelOptions = function() {
                    return {
                        weekLabelForSunday: this.props.dataContext.DayName(0),
                        weekLabelForMonday: this.props.dataContext.DayName(1),
                        weekLabelForTuesday: this.props.dataContext.DayName(2),
                        weekLabelForWednesday: this.props.dataContext.DayName(3),
                        weekLabelForThursday: this.props.dataContext.DayName(4),
                        weekLabelForFriday: this.props.dataContext.DayName(5),
                        weekLabelForSaturday: this.props.dataContext.DayName(6)
                    }
                };
            DateRangeControlSpec.prototype
                .getMonthLabelOptions = function() {
                    return {
                        monthLabelForJanuary: this.props.clientContext.getLocalizedString("MonthLabelJanuary"),
                        monthLabelForFebruary: this.props.clientContext.getLocalizedString("MonthLabelFebruary"),
                        monthLabelForMarch: this.props.clientContext.getLocalizedString("MonthLabelMarch"),
                        monthLabelForApril: this.props.clientContext.getLocalizedString("MonthLabelApril"),
                        monthLabelForMay: this.props.clientContext.getLocalizedString("MonthLabelMay"),
                        monthLabelForJune: this.props.clientContext.getLocalizedString("MonthLabelJune"),
                        monthLabelForJuly: this.props.clientContext.getLocalizedString("MonthLabelJuly"),
                        monthLabelForAugust: this.props.clientContext.getLocalizedString("MonthLabelAugust"),
                        monthLabelForSeptember: this.props.clientContext.getLocalizedString("MonthLabelSeptember"),
                        monthLabelForOctober: this.props.clientContext.getLocalizedString("MonthLabelOctober"),
                        monthLabelForNovember: this.props.clientContext.getLocalizedString("MonthLabelNovember"),
                        monthLabelForDecember: this.props.clientContext.getLocalizedString("MonthLabelDecember")
                    }
                };
            DateRangeControlSpec.prototype.getOptions = function() {
                var fromDateString = this.props.dataContext.get_StartDateText(),
                    toDateString = this.props.dataContext.get_EndDateText(),
                    fromDate = fromDateString == null || fromDateString == ""
                        ? null
                        : moment(this.props.dataContext.get_StartDate()),
                    toDate = toDateString == null || toDateString == ""
                        ? null
                        : moment(this.props.dataContext.get_EndDate()),
                    optionset = {
                        startDate: fromDate,
                        startDateString: fromDateString,
                        endDate: toDate,
                        endDateString: toDateString,
                        minDateString: this.props.dataContext.get_DateTextForMinDate(),
                        minDate: moment(this.props.dataContext.get_MinDate()).toISOString(),
                        maxDateString: this.props.dataContext.get_DateTextForMaxDate(),
                        maxDate: moment(this.props.dataContext.get_MaxDate()).toISOString(),
                        ranges: this.getRanges(),
                        dataid: this.props.dataContext.get_DataId(),
                        showNoRange: this.props.dataContext.get_ShowNoRange(),
                        opens: "left",
                        showDropdowns: true,
                        localizedLabels: {
                            WeekLabels: this.getWeekLabelOptions(),
                            MonthLabels: this.getMonthLabelOptions()
                        },
                        locale: {
                            applyLabel: this.props.clientContext.getLocalizedString("LabelForApplyButton"),
                            cancelLabel: this.props.clientContext.getLocalizedString("LabelForCloseButton"),
                            customRangeLabel: this.props.clientContext.getLocalizedString("LabelForCustomTimeFrame"),
                            noRangeLabel: this.props.clientContext.getLocalizedString("LabelForNoRange"),
                            startDateLabel: this.props.clientContext.getLocalizedString("LabelForStartDate"),
                            endDateLabel: this.props.clientContext.getLocalizedString("LabelForEndDate")
                        }
                    };
                return optionset
            };
            DateRangeControlSpec.prototype.getCallBackMethod = function() {
                return function(start, end, label) {
                    var startISO = start == null ? null : start.toISOString(),
                        endISO = end == null ? null : end.toISOString();
                    this.props.dataContext.set_StartDateText(startISO);
                    this.props.dataContext.set_EndDateText(endISO);
                    var startDate = this.props.dataContext.get_StartDateText(),
                        endDate = this.props.dataContext.get_EndDateText();
                    if (label == this.props.clientContext.getLocalizedString("LabelForToday") ||
                        label == this.props.clientContext.getLocalizedString("LabelForYesterday")
                    ) this.dateRangeValue = label + " " + startDate;
                    else if (label == this.props.clientContext.getLocalizedString("LabelForNoRange")
                    ) this.dateRangeValue = label;
                    else this.dateRangeValue = label + " " + startDate + " - " + endDate + " "
                }
            };
            DateRangeControlSpec.prototype.getApplyCallBackMethod = function() {
                return function(event, picker) {
                    var startISO = picker.startDate == null ? null : picker.startDate.toISOString(),
                        endISO = picker.endDate == null ? null : picker.endDate.toISOString();
                    this.props.dataContext.set_StartDateText(startISO);
                    this.props.dataContext.set_EndDateText(endISO);
                    this.props.dataContext.SetDates(startISO, endISO);
                    var startDate = this.props.dataContext.get_StartDateText(),
                        endDate = this.props.dataContext.get_EndDateText();
                    if (picker
                        .chosenLabel ==
                        this.props.clientContext.getLocalizedString("LabelForCustomTimeFrame")) picker.chosenLabel = "";
                    if (picker.chosenLabel == this.props.clientContext.getLocalizedString("LabelForToday") ||
                        picker
                        .chosenLabel ==
                        this.props.clientContext
                        .getLocalizedString("LabelForYesterday")
                    ) this.dateRangeValue = picker.chosenLabel + " " + startDate;
                    else if (picker
                        .chosenLabel ==
                        this.props.clientContext
                        .getLocalizedString("LabelForNoRange")) this.dateRangeValue = picker.chosenLabel;
                    else this.dateRangeValue = picker.chosenLabel + " " + startDate + " - " + endDate + " "
                }
            };
            DateRangeControlSpec.prototype.componentDidMount = function() {
                if (this.shouldTakeFocus()) {
                    var domNode = $(this.refs["dateRangePicker"]);
                    if (domNode) {
                        this.dateRangePicker = domNode
                            .daterangepicker(this.getOptions(), this.getCallBackMethod().bind(this));
                        domNode.on("apply.daterangepicker", this.getApplyCallBackMethod().bind(this));
                        domNode.focus()
                    }
                }
            };
            DateRangeControlSpec.prototype
                .componentWillUnmount = function() { this.dateRangePicker.data("daterangepicker").remove() };
            DateRangeControlSpec.prototype.handleKeyDown = function(e) {
                switch (e.key) {
                case Constants.ESCAPE_KEY:
                    this.handleClosePopup();
                    break
                }
            };
            DateRangeControlSpec.prototype.handleClosePopup = function() {
                var interactionWallSourceFliterContainer = $(".mscrm-InteractionWallSourceFilterContainer");
                interactionWallSourceFliterContainer != null &&
                    interactionWallSourceFliterContainer.length > 0 &&
                    interactionWallSourceFliterContainer.css("display", "None");
                var interactionWallFilter = $(".mscrm-interactionWallHeader").find(".mscrm-InteractionWallFilter");
                if (interactionWallFilter != null && interactionWallFilter.length > 0) {
                    interactionWallFilter.removeClass(this.classVisible);
                    interactionWallFilter.focus()
                }
            };
            DateRangeControlSpec.prototype.render = function() {
                var dateRangeInputField = React.DOM.span({
                            key: "dateRangeSpanKey",
                            ref: "dateRangeSpan",
                            className: "dateRangeSpan",
                            onKeyDown: this.handleKeyDown
                        },
                        this.dateRangeValue),
                    dropDownImage = React.DOM.span({
                            key: "dropdownkey",
                            onKeyDown: this.handleKeyDown,
                            className: "dateRangeDropdown"
                        },
                        FontIcon.FontIcon({ symbolName: "Expanded" })),
                    children = [dateRangeInputField, dropDownImage];
                return React.DOM.div({
                        key: "dateRangePickerKey",
                        ref: "dateRangePicker",
                        onKeyDown: this.handleKeyDown,
                        "data-id": this.props.dataContext.get_DataId(),
                        tabIndex: this.props.dataContext.get_DataId() && this.props.dataContext.get_NextTabIndex() > -1
                            ? this.props.dataContext.get_NextTabIndex()
                            : this.props.tabIndex,
                        title: this.props.dataContext.get_AttributeDisplayName() + " : " + this.dateRangeValue,
                        className: "daterangepicker-pullright"
                    },
                    children)
            };
            return DateRangeControlSpec
        }(TsAdapter.SpecBase);
        exports.DateRangeControl = DataWrapperComponent.wrapComponent(new DateRangeControlSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/FilterGraph/FilterGraph",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/ProgressIndicator", "Components/Charts/Highchart",
        "Core/Binding/WindowResizeHandlerMixin",
        "Core/ComponentUpdateRequestManager", "Components/Common/AccessibilityUtility"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        ProgressIndicator,
        Highchart,
        WindowResizeHandler,
        ComponentUpdateRequestManager,
        AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "FilterGraph";
        var FilterGraphSpec = function(_super) {
            __extends(FilterGraphSpec, _super);

            function FilterGraphSpec() {
                _super.apply(this, arguments);
                this.displayName = "FilterGraph";
                this.mixins = [WindowResizeHandler.Mixin];
                this.isWindowResizeEvent = false;
                this.listenToProperties = ["IsFilterApplied", "IsLoading", "ErrorInformation", "ChartConfigObject"]
            }

            FilterGraphSpec.prototype.handleWindowResize = function() {
                if (!this.updateManager) this.updateManager = new ComponentUpdateRequestManager(this);
                this.updateManager.requestUpdate("FilterGraph is requesting an render via handleWindowResize()");
                this.isWindowResizeEvent = true
            };
            FilterGraphSpec.prototype.chartSeriesPointClicked = function(seriesPoint) {
                if (seriesPoint == null) return;
                this.props.dataContext.HandleSeriesPointClick(seriesPoint)
            };
            FilterGraphSpec.prototype.chartSeriesPointSelected = function(seriesPoint) {};
            FilterGraphSpec.prototype.chartSeriesPointUnselected = function() {};
            FilterGraphSpec.prototype.renderComplete = function() {
                this.props.dataContext.UIHasRendered();
                if (this.isWindowResizeEvent) {
                    this.props.dataContext.FilterGraphRenderCompleted();
                    this.isWindowResizeEvent = false
                }
            };
            FilterGraphSpec.prototype.renderFilterGraphHeader = function() {
                var headerChildern = [];
                headerChildern.push(React.DOM.div({ key: "filterGraphTitle", className: "filterGraphTitle" },
                    this.props.dataContext.get_TitleText()));
                return React.DOM.div({ key: "filterGraphHeaderContainer", className: "filterGraphHeaderContainer" },
                    headerChildern)
            };
            FilterGraphSpec.prototype.renderFilterGraphError = function() {
                var errorInfo = this.props.dataContext.get_ErrorInformation(),
                    errorType = errorInfo.get_ErrorType(),
                    children = [];
                errorType &&
                    errorType.trim().length > 0 &&
                    children.push(React.DOM.div({ key: "type", className: "filterGraphErrorMessageType" }, errorType));
                children.push(React.DOM.div({ key: "description", className: "filterGraphErrorMessageDescription" },
                    errorInfo.get_ErrorDescription()));
                return React.DOM.div({ key: "error", className: "filterGraphErrorMessageContainer" }, children)
            };
            FilterGraphSpec.prototype.render = function() {
                var children = [];
                this.tabIndex = this.props.dataContext.get_StartIndex();
                var divIndex = this.tabIndex++;
                children.push(ProgressIndicator
                    .ProgressIndicator({
                        key: "loadingfilterGraph",
                        type: ProgressIndicator.ProgressIndicatorType.Bar,
                        active: this.props.dataContext.get_IsLoading() ||
                            !this.props.dataContext.get_AreZeroValueBaseSetAttributeFieldsSet()
                    }));
                if (this.props.dataContext.get_DisplayMode() === 1) children.push(this.renderFilterGraphError());
                else if (!this.props.dataContext.get_IsLoading() &&
                    this.props.dataContext.get_AreZeroValueBaseSetAttributeFieldsSet() &&
                    this.props.dataContext.get_ChartConfigObject()) {
                    children.push(this.renderFilterGraphHeader());
                    children.push(Highchart.Highchart({
                        key: "chart",
                        config: this.props.dataContext.get_ChartConfigObject(),
                        clientContext: this.props.clientContext,
                        allowPointSelect: false,
                        chartSeriesPointClicked: this.chartSeriesPointClicked,
                        chartRendered: this.renderComplete,
                        isFilterGraphContext: true,
                        chartSeriesPointSelected: this.chartSeriesPointSelected,
                        chartSeriesPointUnselected: this.chartSeriesPointUnselected,
                        selectedPoint: this.props.dataContext.get_SelectedHighchartPoint.bind(this.props.dataContext),
                        areSeriesPointsEqual: this.props.dataContext.areSeriesPointsEqual.bind(this.props.dataContext)
                    }))
                }
                return React.DOM.div({
                        className: "filterGraphContainer",
                        tabIndex: divIndex,
                        onKeyDown: this.itemOnKeyDownHandler
                    },
                    children)
            };
            FilterGraphSpec.prototype.itemOnKeyDownHandler = function(e) {
                AccessibilityUtility.handleArrowNavigationForTable(ReactDOM.findDOMNode(this), e)
            };
            return FilterGraphSpec
        }(TsAdapter.SpecBase);
        exports.FilterGraph = DataWrapperComponent.wrapComponent(new FilterGraphSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GlobalFilterControl/GlobalFilterHeader",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/Button",
        "Core/Binding/PureUpdateMixin",
        "Components/Primitives/FontIcon", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, Button, PureUpdate, FontIcon, Constants) {
        var GlobalFilterHeaderSpec = function(_super) {
            __extends(GlobalFilterHeaderSpec, _super);

            function GlobalFilterHeaderSpec() {
                _super.apply(this, arguments);
                this.displayName = "GlobalFilterHeader";
                this.mixins = [PureUpdate.Mixin]
            }

            GlobalFilterHeaderSpec.prototype
                .handleClearButtonClick = function() { this.props.dataContext.handleClearClick() };
            GlobalFilterHeaderSpec.prototype.handleClearButtonKeyDown = function(e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) {
                    this.handleClearButtonClick();
                    $(".actionButton").focus();
                    return false
                }
            };
            GlobalFilterHeaderSpec.prototype.handleCancelButtonClick = function() {
                this.props.dataContext.handleCancelClick();
                $(".globalFilterButton").focus();
                return false
            };
            GlobalFilterHeaderSpec.prototype.handleCancelButtonKeyDown = function(e) {
                if (e
                    .keyCode ==
                    Constants.ENTER_KEY_CODE ||
                    e.keyCode == Constants.SPACE_KEY_CODE) this.handleCancelButtonClick();
                else if (e.keyCode == Constants.TAB_KEY_CODE && !e.shiftKey) {
                    $(e.currentTarget).parents(".globalFilterHeader").find(".actionButton:first").focus();
                    return false
                }
            };
            GlobalFilterHeaderSpec.prototype.handleApplyButtonClick = function() {
                this.props.dataContext.handleApplyClick();
                $(".globalFilterButton").focus();
                return false
            };
            GlobalFilterHeaderSpec.prototype
                .handleApplyButtonKeyDown = function(e) {
                    (e.keyCode == 13 || e.keyCode == 32) && this.handleApplyButtonClick()
                };
            GlobalFilterHeaderSpec.prototype.handleCloseFilterPopupButtonClick = function() {
                this.props.dataContext.handleCancelClick();
                $(".globalFilterButton").focus();
                return false
            };
            GlobalFilterHeaderSpec.prototype.handleCloseFilterPopupButtonKeyDown = function(e) {
                if (e.shiftKey && e.keyCode == Constants.TAB_KEY_CODE) {
                    $(e.currentTarget).parents(".globalFilterHeader").find(".actionButton:last").focus();
                    return false
                } else
                    (e.keyCode == Constants.SPACE_KEY_CODE || e.keyCode == Constants.ENTER_KEY_CODE) &&
                        this.handleCloseFilterPopupButtonClick()
            };
            GlobalFilterHeaderSpec.prototype.render = function() {
                var children = [],
                    closeFilterPopup = Button.Button({
                            className: "actionButton",
                            key: "closeFilterPopup",
                            title: this.props.clientContext.getLocalizedString("GlobalFilter_CloseFilterPanel"),
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            onClick: this.handleCloseFilterPopupButtonClick,
                            onKeyDown: this.handleCloseFilterPopupButtonKeyDown
                        },
                        FontIcon.FontIcon({ symbolName: "GlobalFilter" }));
                children.push(closeFilterPopup);
                var selectedFilterCount = React.DOM.span({
                        key: "selectedFilterCount",
                        className: "selectedFilterCount"
                    },
                    this.props.dataContext.get_SelectedFilterCount() +
                    " " +
                    this.props.clientContext.getLocalizedString("GlobalFilter_Filters"));
                children.push(selectedFilterCount);
                var applyButton = Button.Button({
                            key: "applyButton",
                            className: "actionButton",
                            tabIndex: this.props.dataContext.get_StartIndex() + 1,
                            title: this.props.clientContext.getLocalizedString("GlobalFilter_Apply"),
                            onClick: this.handleApplyButtonClick,
                            onKeyDown: this.handleApplyButtonKeyDown,
                            enabled: this.props.dataContext.get_IsApplyButtonEnabled(),
                            dataId: "ApplyFilters",
                            ariaLabel: this.props.clientContext.getLocalizedString("GlobalFilter_Apply")
                        },
                        FontIcon.FontIcon({ symbolName: "ApplyFilter" }),
                        this.props.clientContext.getLocalizedString("GlobalFilter_Apply")),
                    cancelButton = Button.Button({
                            className: "actionButton",
                            key: "cancelButton",
                            title: this.props.clientContext.getLocalizedString("GlobalFilter_Cancel"),
                            tabIndex: this.props.dataContext.get_StartIndex() + 3,
                            onClick: this.handleCancelButtonClick,
                            onKeyDown: this.handleCancelButtonKeyDown,
                            ariaLabel: this.props.clientContext.getLocalizedString("GlobalFilter_Cancel")
                        },
                        FontIcon.FontIcon({ symbolName: "CancelFilter" }),
                        this.props.clientContext.getLocalizedString("GlobalFilter_Cancel")),
                    clearButton = Button.Button({
                            className: "actionButton",
                            key: "clearButton",
                            tabIndex: this.props.dataContext.get_StartIndex() + 2,
                            title: this.props.clientContext.getLocalizedString("GlobalFilter_Clear"),
                            onClick: this.handleClearButtonClick,
                            onKeyDown: this.handleClearButtonKeyDown,
                            enabled: this.props.dataContext.get_IsClearButtonEnabled(),
                            ariaLabel: this.props.clientContext.getLocalizedString("SliderControl_ClearButton")
                        },
                        FontIcon.FontIcon({ symbolName: "RemoveFilter" }),
                        this.props.clientContext.getLocalizedString("SliderControl_ClearButton")),
                    filterButtons = React.DOM.span({ className: "filterButtons", key: "filterButtons" },
                        [applyButton, clearButton, cancelButton]);
                children.push(filterButtons);
                return React.DOM.div({ className: "globalFilterHeader" }, children)
            };
            return GlobalFilterHeaderSpec
        }(TsAdapter.SpecBase);
        exports.GlobalFilterHeader = TsAdapter.createComponent(new GlobalFilterHeaderSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GlobalFilterControl/GlobalFilterControl",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/Button",
        "Components/DataWrapperComponent", "Components/Primitives/Popup", "Components/Primitives/FontIcon",
        "Components/ComponentFactory", "Components/InteractionCentric/GlobalFilterControl/GlobalFilterHeader",
        "Components/Common/Constants"
    ],
    function(require,
        exports,
        TsAdapter,
        Button,
        DataWrapperComponent,
        Popup,
        FontIcon,
        ComponentFactory,
        GlobalFilterHeader,
        Constants) {
        exports.DESCRIPTOR_NAME = "GlobalFilterControl";
        var GlobalFilterControlSpec = function(_super) {
            __extends(GlobalFilterControlSpec, _super);

            function GlobalFilterControlSpec() {
                _super.apply(this, arguments);
                this.displayName = "GlobalFilterControl";
                this.listenToProperties = ["Visible", "FilterExpression", "ChildProperties", "IsExpandAll"]
            }

            GlobalFilterControlSpec.prototype.handleGlobalFilterButtonClick = function() {
                this.props.dataContext.updateIsExpandedPropertyOfChildren();
                this.props.dataContext.set_Visible(!this.props.dataContext.get_Visible())
            };
            GlobalFilterControlSpec.prototype
                .handleIsExpandAllButtonClick = function() { this.props.dataContext.handleIsExpandAllButtonClick() };
            GlobalFilterControlSpec.prototype
                .handleIsExpandAllButtonKeyDown = function(e) {
                    (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) &&
                        this.handleIsExpandAllButtonClick()
                };
            GlobalFilterControlSpec.prototype
                .handleGlobalFilterButtonKeyDown = function(e) {
                    (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) &&
                        this.handleGlobalFilterButtonClick()
                };
            GlobalFilterControlSpec.prototype.handleEscapeKeyDown = function(e) {
                if (e.keyCode == Constants.ESCAPE_KEY_CODE) {
                    this.props.dataContext.handleCancelClick();
                    $(".globalFilterButton").focus()
                }
            };
            GlobalFilterControlSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["tabIndex"] = this.props.dataContext.get_StartIndex();
                return React.DOM.div({ className: "attributeFilterBlock" }, factory(childProps))
            };
            GlobalFilterControlSpec.prototype.componentDidMount = function() {
                this.props.dataContext.set_IsApplyButtonEnabled(false);
                this.props.dataContext.UIHasRendered()
            };
            GlobalFilterControlSpec.prototype.componentDidUpdate = function() {
                this.props.dataContext.UIHasRendered();
                if (!this.props.dataContext.get_Visible()) {
                    var expandAllButton = $(document.activeElement).parent().next().find(".isExpandAllButton");
                    expandAllButton != null && expandAllButton.length > 0 && expandAllButton.focus()
                }
            };
            GlobalFilterControlSpec.prototype.renderPopup = function() {
                var popup = [],
                    attributes = [],
                    popupBody = [],
                    header = GlobalFilterHeader
                        .GlobalFilterHeader({
                            key: "GlobalFilterHeader",
                            clientContext: this.props.clientContext,
                            dataContext: this.props.dataContext
                        });
                popup.push(header);
                attributes = ComponentFactory
                    .createChildComponents(this.props.dataContext,
                        this.props.descriptor,
                        this.props.clientContext,
                        this.childDecorator);
                var isExpandAllButton = Button.Button({
                        className: "isExpandAllButton",
                        key: "isExpandAllButton",
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        onClick: this.handleIsExpandAllButtonClick,
                        onKeyDown: this.handleIsExpandAllButtonKeyDown,
                        ariaLabel: this.props.dataContext.get_IsExpandAll()
                            ? this.props.clientContext.getLocalizedString("GlobalFilter_ExpandAll")
                            : this.props.clientContext.getLocalizedString("GlobalFilter_CollapseAll")
                    },
                    this.props.dataContext.get_IsExpandAll()
                    ? this.props.clientContext.getLocalizedString("GlobalFilter_ExpandAll")
                    : this.props.clientContext.getLocalizedString("GlobalFilter_CollapseAll"));
                if (attributes.length != 0)
                    popup.push(React.DOM.div({
                            key: "popupBody",
                            className: "popupBody",
                            style: { maxHeight: (window.innerHeight - 150).toString() + "px" }
                        },
                        [isExpandAllButton, attributes]));
                else
                    popup.push(React.DOM.span({ key: "GlobalFilterNoAttributes", className: "NoAttributes" },
                        this.props.clientContext.getLocalizedString("GlobalFilter_No_Attributes")));
                return popup
            };
            GlobalFilterControlSpec.prototype.render = function() {
                var button = Button.Button({
                            className: "globalFilterButton",
                            id: "GlobalFilterButton",
                            title: this.props.clientContext.getLocalizedString("GlobalFilter_OpenFilterPanel"),
                            dataFlyoutOpen: this.props.dataContext.get_Visible(),
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            onClick: this.handleGlobalFilterButtonClick,
                            onKeyDown: this.handleGlobalFilterButtonKeyDown,
                            ariaLabel: this.props.dataContext.GlobalFilterScreenReaderText()
                        },
                        FontIcon.FontIcon({ symbolName: "GlobalFilter" })),
                    globalFilterChildren = [],
                    globalFilterButton = React.DOM.div({
                            className: "globalFilterButtonContainer",
                            key: "globalFilterButtonContainer"
                        },
                        button);
                globalFilterChildren.push(globalFilterButton);
                if (!this.props.dataContext.get_Visible()) {
                    var globalFilterPopup = Popup.Popup({
                            visible: true,
                            key: "popup",
                            className: "globalFilterPopup",
                            onDismiss: null
                        },
                        this.renderPopup());
                    globalFilterChildren.push(globalFilterPopup)
                }
                return React.DOM.div({ className: "globalFilter", onKeyDown: this.handleEscapeKeyDown },
                    globalFilterChildren)
            };
            return GlobalFilterControlSpec
        }(TsAdapter.SpecBase);
        exports.GlobalFilterControl = DataWrapperComponent.wrapComponent(new GlobalFilterControlSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GlobalFilterControl/OptionSetFilterItem",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent", "Utils/CssClassSet",
        "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, CssClassSet, Constants) {
        exports.DESCRIPTOR_NAME = "OptionSetFilterItem";
        var OptionSetFilterItemSpec = function(_super) {
            __extends(OptionSetFilterItemSpec, _super);

            function OptionSetFilterItemSpec() {
                _super.apply(this, arguments);
                this.displayName = "OptionSetFilterItem";
                this.listenToProperties = ["Data"]
            }

            OptionSetFilterItemSpec.prototype.handleCheckboxClick = function() {
                var currentState = this.props.dataContext.get_Data();
                this.props.dataContext.set_Data(!currentState);
                this.props.onCheckboxClick &&
                    this.props.onCheckboxClick(!currentState, this.props.dataContext.get_LogicalName())
            };
            OptionSetFilterItemSpec.prototype.handleCheckboxKeyPress = function(e) {
                var dataId = ReactDOM.findDOMNode(this).getAttribute("data-id"),
                    dataIdSeq = parseInt(dataId.substring(dataId.lastIndexOf("_") + 1)),
                    dataIdConstant = dataId.substring(0, dataId.lastIndexOf("_") + 1);
                switch (e.key) {
                case Constants.ENTER_KEY:
                    e.preventDefault();
                    this.handleCheckboxClick();
                    break;
                case Constants.DOWN_ARROW_KEY:
                case Constants.UP_ARROW_KEY:
                    var dataIdToFocus = e.key == Constants.UP_ARROW_KEY ? dataIdSeq - 1 : dataIdSeq + 1;
                    this.getElementToFocusForCheckbox(dataIdConstant, dataIdToFocus);
                    e.preventDefault();
                    break;
                case Constants.TAB_KEY:
                    var item = e.currentTarget;
                    if (item.getAttribute("tabindex") == null || item.getAttribute("tabindex") == "-1") {
                        var filterBlock = $(item).closest(".attributeFilterBlock")[0];
                        if (filterBlock != null) {
                            e.preventDefault();
                            if (e.shiftKey) {
                                var firstChild = $(filterBlock).find(".optionsetFilterItemCheckbox")[0];
                                this.focusItem(firstChild)
                            } else {
                                var nextBlock = filterBlock.nextSibling;
                                if (nextBlock != null) {
                                    var toggleButton = $(nextBlock).find(".toggleButton")[0];
                                    this.focusItem(toggleButton)
                                }
                            }
                        }
                    }
                    break
                }
            };
            OptionSetFilterItemSpec.prototype.focusItem = function(item) { item != null && $(item).focus() };
            OptionSetFilterItemSpec.prototype.getElementToFocusForCheckbox = function(selectorId, dataIdSequence) {
                var elementToFocus = $('[data-id="' + selectorId + dataIdSequence + '"]');
                elementToFocus != null && elementToFocus.find("input[type='checkbox']").focus()
            };
            OptionSetFilterItemSpec.prototype.render = function() {
                var childSeq = this.props.dataId.substring(this.props.dataId
                        .lastIndexOf("_") +
                        1),
                isFirstChild = false;
                if (childSeq == "1") isFirstChild = true;
                var tab = -1;
                if (isFirstChild) tab = this.props.tabIndex;
                var checkbox = React.DOM.input({
                        type: "checkbox",
                        className: "optionsetFilterItemCheckbox",
                        key: "checkbox",
                        checked: this.props.dataContext.get_Data(),
                        tabIndex: tab,
                        onClick: this.handleCheckboxClick,
                        onKeyDown: this.handleCheckboxKeyPress,
                        "data-id": this.props.dataContext.get_DisplayName(),
                        "aria-label": this.props.dataContext.get_DisplayName()
                    }),
                    label = React.DOM.span({
                            key: "label",
                            className: CssClassSet({
                                optionsetFilterItemLabel: true,
                                optionsetFilterItemChecked: this.props.dataContext.get_Data()
                            })
                        },
                        this.props.dataContext.get_DisplayName());
                return React.DOM.div({ className: "optionSetFilterItem", "data-id": this.props.dataId },
                    [checkbox, label])
            };
            return OptionSetFilterItemSpec
        }(TsAdapter.SpecBase);
        exports.OptionSetFilterItem = DataWrapperComponent.wrapComponent(new OptionSetFilterItemSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GlobalFilterControl/DateRangeFilter",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/Button",
        "Core/Binding/PureUpdateMixin",
        "Components/InteractionCentric/CollapsibleControl/CollapsibleControl",
        "Components/InteractionCentric/DateRangeControl/DateRangeControl"
    ],
    function(require, exports, TsAdapter, Button, PureUpdate, CollapsibleControl, DateRangeControl) {
        exports.DESCRIPTOR_NAME = "DateRangeFilter";
        var DateRangeFilterSpec = function(_super) {
            __extends(DateRangeFilterSpec, _super);

            function DateRangeFilterSpec() {
                _super.apply(this, arguments);
                this.displayName = "DateRangeFilter";
                this.mixins = [PureUpdate.Mixin]
            }

            DateRangeFilterSpec.prototype
                .handleClearButtonClick = function() { this.props.dataContext.SetDates(null, null) };
            DateRangeFilterSpec.prototype.handleExpandOrCollapseIconClick = function(collapsed) {
                this.props.dataContext.handleExpandOrCollapseIconClick(!collapsed);
                return true
            };
            DateRangeFilterSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Active()) return React.DOM.noscript();
                var children = [],
                    attributeLabel = React.DOM.span({ key: "attributeName", className: "attributeName" },
                        this.props.dataContext.get_AttributeDisplayName());
                if (this.props.dataContext
                    .get_SelectedFilterCount() !=
                    0)
                    var selectedFilter = React.DOM.span({ key: "selectedFilter", className: "selectedFilter" },
                        " " + this.props.dataContext.get_DateRangeText());
                var clear = Button.Button({
                            title: this.props.clientContext.getLocalizedString("DateRangeFilter_Clear"),
                            className: "clearButton",
                            key: "clearButton",
                            onClick: this.handleClearButtonClick,
                            tabIndex: this.props.tabIndex,
                            ariaLabel: this.props.clientContext.getLocalizedString("DateRangeFilter_Clear")
                        },
                        this.props.clientContext.getLocalizedString("DateRangeFilter_Clear")),
                    header = React.DOM.span({ className: "attributeHeader", key: "attributeHeader" },
                        [attributeLabel, selectedFilter]),
                    dateControl = DateRangeControl
                        .DateRangeControl({
                            key: "dateRange",
                            clientContext: this.props.clientContext,
                            tabIndex: this.props.tabIndex,
                            dataContext: this.props.dataContext
                        });
                children.push(dateControl);
                children.push(clear);
                var screenReaderText = this.props.dataContext.getScreenReadableText();
                return CollapsibleControl.CollapsibleControl({
                        headerLabel: header,
                        headerFormatExpanded: CollapsibleControl.HeaderFormat.LabelRight,
                        headerFormatCollapsed: CollapsibleControl.HeaderFormat.LabelRight,
                        defaultCollapsed: !this.props.dataContext.get_IsExpanded(),
                        clientContext: this.props.clientContext,
                        stateChangedEventHandler: this.handleExpandOrCollapseIconClick,
                        tabIndex: this.props.tabIndex,
                        dataContext: null,
                        className: "dateRangeFilter",
                        buttonImageNameExpanded: "GlobalFilterExpand",
                        buttonImageNameCollapsed: "GlobalFilterCollapse",
                        ariaLabel: screenReaderText ? screenReaderText : ""
                    },
                    children)
            };
            return DateRangeFilterSpec
        }(TsAdapter.SpecBase);
        exports.DateRangeFilter = TsAdapter.createComponent(new DateRangeFilterSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GlobalFilterControl/SliderFilter",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Core/Binding/PureUpdateMixin",
        "Components/InteractionCentric/CollapsibleControl/CollapsibleControl", "Components/Search/RangeSliderControl"
    ],
    function(require, exports, TsAdapter, PureUpdate, CollapsibleControl, SliderControl) {
        exports.DESCRIPTOR_NAME = "SliderFilter";
        var SliderFilterSpec = function(_super) {
            __extends(SliderFilterSpec, _super);

            function SliderFilterSpec() {
                _super.apply(this, arguments);
                this.displayName = "SliderFilter";
                this.mixins = [PureUpdate.Mixin]
            }

            SliderFilterSpec.prototype.handleExpandOrCollapseIconClick = function(collapsed) {
                this.props.dataContext.handleExpandOrCollapseIconClick(!collapsed);
                return true
            };
            SliderFilterSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Active()) return React.DOM.noscript();
                var children = [],
                    attributeLabel = React.DOM.span({ key: "attributeName", className: "attributeName" },
                        this.props.dataContext.get_AttributeDisplayName());
                if (this.props.dataContext
                    .get_SelectedFilterCount() !=
                    0)
                    var selectedFilter = React.DOM.span({ key: "selectedFilter", className: "selectedFilter" },
                        " " +
                        (this.props.dataContext
                            .get_SelectedMinimum() +
                            " - " +
                            this.props.dataContext.get_SelectedMaximum()));
                var header = React.DOM.span({ className: "attributeHeader", key: "attributeHeader" },
                        [attributeLabel, selectedFilter]),
                    sliderControl = SliderControl
                        .RangeSliderControl({
                            key: "sliderControl",
                            clientContext: this.props.clientContext,
                            tabIndex: this.props.tabIndex,
                            dataContext: this.props.dataContext,
                            enableClearFilterButton: true,
                            enableRangeEditTextBox: true
                        });
                children.push(sliderControl);
                var screenReaderText = this.props.dataContext.getScreenReadableText();
                return CollapsibleControl.CollapsibleControl({
                        headerLabel: header,
                        headerFormatExpanded: CollapsibleControl.HeaderFormat.LabelRight,
                        headerFormatCollapsed: CollapsibleControl.HeaderFormat.LabelRight,
                        defaultCollapsed: !this.props.dataContext.get_IsExpanded(),
                        clientContext: this.props.clientContext,
                        stateChangedEventHandler: this.handleExpandOrCollapseIconClick,
                        tabIndex: this.props.tabIndex,
                        dataContext: null,
                        className: "sliderFilter",
                        ariaLabel: screenReaderText ? screenReaderText : ""
                    },
                    children)
            };
            return SliderFilterSpec
        }(TsAdapter.SpecBase);
        exports.SliderFilter = TsAdapter.createComponent(new SliderFilterSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GlobalFilterControl/OptionSetFilter",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/Button",
        "Core/Binding/PureUpdateMixin",
        "Components/ComponentFactory", "Components/InteractionCentric/CollapsibleControl/CollapsibleControl"
    ],
    function(require, exports, TsAdapter, Button, PureUpdate, ComponentFactory, CollapsibleControl) {
        exports.DESCRIPTOR_NAME = "OptionSetFilter";
        var OptionSetFilterSpec = function(_super) {
            __extends(OptionSetFilterSpec, _super);

            function OptionSetFilterSpec() {
                _super.apply(this, arguments);
                this.displayName = "OptionSetFilter";
                this.mixins = [PureUpdate.Mixin]
            }

            OptionSetFilterSpec.prototype
                .handleSelectAllButtonClick = function() { this.props.dataContext.handleSelectAllButtonClick() };
            OptionSetFilterSpec.prototype.handleExpandOrCollapseIconClick = function(collapsed) {
                this.props.dataContext.handleExpandOrCollapseIconClick(!collapsed);
                return true
            };
            OptionSetFilterSpec.prototype.handleSelectAllButtonKeyDown = function(e) {
                if (e.keyCode == 13 || e.keyCode == 32) {
                    this.handleSelectAllButtonClick();
                    var collapsiblePanelOnlyScreenReaderElement = document
                            .getElementById("collapsiblePanelScreenReadableElementId"),
                        buttonLabel = this.props.dataContext.get_IsSelectAll()
                            ? this.props.clientContext.getLocalizedString("OptionSetFilter_SelectAll")
                            : this.props.clientContext.getLocalizedString("OptionSetFilter_DeSelectAll");
                    if (collapsiblePanelOnlyScreenReaderElement) {
                        collapsiblePanelOnlyScreenReaderElement.innerHTML = " ";
                        collapsiblePanelOnlyScreenReaderElement.innerHTML = this.props.dataContext
                            .getScreenReadableTextForButton(buttonLabel)
                    }
                }
            };
            OptionSetFilterSpec.prototype.handleCheckboxclick = function(value, name) {
                var filterContext = { Value: value, Name: name };
                this.props.dataContext.updateFilterExpression(filterContext)
            };
            OptionSetFilterSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["onCheckboxClick"] = this.handleCheckboxclick;
                childProps["tabIndex"] = this.props.tabIndex;
                return React.DOM.div(null, factory(childProps))
            };
            OptionSetFilterSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Active()) return React.DOM.noscript();
                var children = [],
                    optionSetFilterItems = [],
                    attributeLabel = React.DOM.span({ key: "attributeName", className: "attributeName" },
                        this.props.dataContext.get_AttributeDisplayName());
                if (this.props.dataContext
                    .get_SelectedFilterCount() >
                    0)
                    var selectedFilter = React.DOM.span({ key: "selectedFilter", className: "selectedFilter" },
                            " " + this.props.dataContext.get_SelectedFilterCount()),
                        optionsetCount = React.DOM.span({ key: "optionSetCount", className: "optionSetCount" },
                            "/" + this.props.dataContext.get_OptionSetValuesCount());
                var header = React.DOM.span({ className: "attributeHeader", key: "attributeHeader" },
                    [attributeLabel, selectedFilter, optionsetCount]);
                if (this.props.dataContext.get_OptionSetValuesCount() > 0) {
                    var selectAllButtonLabel = this.props.dataContext.get_IsSelectAll()
                            ? this.props.clientContext.getLocalizedString("OptionSetFilter_SelectAll")
                            : this.props.clientContext.getLocalizedString("OptionSetFilter_DeSelectAll"),
                        selectAllbutton = Button.Button({
                                id: "selectAllButtonId",
                                className: "selectAllButton",
                                key: "selectAllButton",
                                tabIndex: this.props.tabIndex,
                                onClick: this.handleSelectAllButtonClick,
                                onKeyDown: this.handleSelectAllButtonKeyDown,
                                ariaLabel: selectAllButtonLabel
                            },
                            selectAllButtonLabel);
                    children.push(selectAllbutton)
                }
                optionSetFilterItems = ComponentFactory
                    .createChildComponents(this.props.dataContext,
                        this.props.descriptor,
                        this.props.clientContext,
                        this.childDecorator);
                children.push(React.DOM.div({ key: "optionsetFilterItems" }, optionSetFilterItems));
                var screenReaderText = this.props.dataContext.getScreenReadableText();
                return CollapsibleControl.CollapsibleControl({
                        key: "optionSetGlobalFilter",
                        headerLabel: header,
                        headerFormatExpanded: CollapsibleControl.HeaderFormat.LabelRight,
                        headerFormatCollapsed: CollapsibleControl.HeaderFormat.LabelRight,
                        defaultCollapsed: !this.props.dataContext.get_IsExpanded(),
                        clientContext: this.props.clientContext,
                        stateChangedEventHandler: this.handleExpandOrCollapseIconClick,
                        dataContext: null,
                        className: "optionSetFilter",
                        tabIndex: this.props.tabIndex,
                        dataId: this.props.dataContext.get_AttributeDisplayName(),
                        buttonImageNameExpanded: "GlobalFilterExpand",
                        buttonImageNameCollapsed: "GlobalFilterCollapse",
                        ariaLabel: screenReaderText ? screenReaderText : ""
                    },
                    children)
            };
            return OptionSetFilterSpec
        }(TsAdapter.SpecBase);
        exports.OptionSetFilter = TsAdapter.createComponent(new OptionSetFilterSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/QueueContainer/QueueItem",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent", "Utils/CssClassSet",
        "Components/Primitives/FontIcon", "Components/Common/Constants", "Components/Primitives/ImageCheckbox",
        "Components/Primitives/Button"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        CssClassSet,
        FontIcon,
        Constants,
        ImageCheckBox,
        Button) {
        var QueueItemSpec = function(_super) {
            __extends(QueueItemSpec, _super);

            function QueueItemSpec() {
                _super.apply(this, arguments);
                this.displayName = "QueueItem";
                this.listenToProperties = ["IsSelected", "RecordId", "QueueItemStatusChanged"]
            }

            QueueItemSpec.prototype.getInitialState = function() {
                return {
                    isExpanded: false,
                    queueItemAriaInfo: this.props.dataContext.screenReaderTextForQueueItem(false)
                }
            };
            QueueItemSpec.prototype.getDefaultProps = function() { return { screenReaderParentInfoText: "" } };
            QueueItemSpec.prototype.componentDidUpdate = function() {
                var iframe = this.refs["IFrameContent"];
                if (iframe instanceof HTMLIFrameElement && this.state.isExpanded) {
                    iframe.contentDocument.body.innerHTML = "";
                    var detailItems = this.props.dataContext.get_DetailItems(),
                        htmlIndex = this.props.dataContext.get_HtmlDetailIndex();
                    iframe.contentDocument.write(detailItems[htmlIndex])
                }
            };
            QueueItemSpec.prototype.toggleExpand = function(e) {
                e.stopPropagation();
                this.setState({ isExpanded: !this.state.isExpanded })
            };
            QueueItemSpec.prototype.handleQuickActionCheckBoxClick = function(e) {
                e.stopPropagation();
                var recordID = this.props.dataContext.GetQueueItemGuid(),
                    state = !this.props.dataContext.get_IsSelected(),
                    entityLogicalName = this.props.dataContext.get_EntityLogicalName();
                this.props.dataContext.set_IsSelected(state);
                var child = this.props.dataContext.get_parentViewModel();
                child.handleQueueItemSelectedEvent(recordID, state, entityLogicalName)
            };
            QueueItemSpec.prototype.renderColorBar = function() {
                var colorStrip = this.props.dataContext.get_ColorStrip();
                if (colorStrip == null) colorStrip = "#3F94E9";
                var colorStyle = { backgroundColor: colorStrip };
                return React.DOM.span({
                        key: "queuePanelItemColorBar",
                        className: "queuePanelItemColorBar",
                        title: this.props.dataContext.get_ColorTooltip(),
                        style: colorStyle
                    },
                    "\u00a0")
            };
            QueueItemSpec.prototype.renderQueueItemHeader = function() {
                for (var header, headerItems = this.props.dataContext.get_HeaderItems(), headerChildren = [], i = 0;
                    i < headerItems.length;
                    i++)
                    headerItems[i] !== undefined &&
                        headerItems[i] !== null &&
                        headerItems[i] !== "" &&
                        headerChildren.push(React.DOM.span({
                                key: "queuePanelItemHeaderItem" + i,
                                className: "queuePanelItemHeaderItem",
                                title: headerItems[i]
                            },
                            headerItems[i]));
                header = React.DOM.div({
                        key: "queuePanelItemHeader",
                        className: "queuePanelItemHeader",
                        onClick: this.itemClickHandler
                    },
                    headerChildren);
                return header
            };
            QueueItemSpec.prototype.getIframeDescription = function() {
                return React.DOM.iframe({
                    sandbox: "allow-same-origin",
                    key: "editHeaderIframeDescription",
                    className: "mscrm-QueueItemEmailIFrameContent",
                    ref: "IFrameContent"
                })
            };
            QueueItemSpec.prototype.renderQueueItemDetail = function() {
                var detail, className = "queuePanelItemDetail";
                if (this.state.isExpanded) className = "queuePanelItemDetailExpanded";
                var detailItems = this.props.dataContext.get_DetailItems(),
                    detailChildren = [],
                    numberOfItemsToDisplay = detailItems.length;
                if (this.props.isCondensed) if (detailItems.length > 2) numberOfItemsToDisplay = 2;
                for (var i = 0; i < numberOfItemsToDisplay; i++)
                    if (i == this.props.dataContext.get_HtmlDetailIndex() &&
                        this.props.dataContext.get_EntityLogicalName() == "email" &&
                        this.props.dataContext.get_HtmlDetailIndex() != -1) {
                        var showHideButton = Button.Button({
                                    className: "mscrm-QueueItem-EmailToggle",
                                    key: "mscrm-QueueItem-EmailToggle",
                                    onClick: this.toggleExpand,
                                    title: this.props.clientContext
                                        .getLocalizedString("L_InteractionWallEvent_StatutoryWarningTooltip")
                                },
                                this.state.isExpanded
                                ? this.props.clientContext.getLocalizedString("L_InteractionWallEvent_HidePreview")
                                : this.props.clientContext.getLocalizedString("L_InteractionWallEvent_ShowPreview")),
                            iframe = this.state.isExpanded ? this.getIframeDescription() : "";
                        detailChildren.push(React.DOM.span({
                                key: "queuePanelItemDetailItem" + i,
                                className: "queuePanelItemDetailItem"
                            },
                            showHideButton,
                            iframe))
                    } else
                        detailChildren.push(React.DOM.span({
                                key: "queuePanelItemDetailItem" + i,
                                className: "queuePanelItemDetailItem",
                                "data-id": this.props.dataId,
                                onClick: this.itemClickHandler,
                                onKeyDown: this.itemOnKeyDownHandler,
                                title: detailItems[i]
                            },
                            detailItems[i]));
                detail = React.DOM.div({ key: "queuePanelItemDetail", className: className }, detailChildren);
                return detail
            };
            QueueItemSpec.prototype.renderQueueItemFooter = function() {
                for (var footer, footerItems = this.props.dataContext.get_FooterItems(), footerChildren = [], i = 0;
                    i < footerItems.length;
                    i++)
                    footerChildren.push(React.DOM.span({
                            key: "queuePanelItemFooterItem" + i,
                            className: "queuePanelItemFooterItem",
                            title: footerItems[i]
                        },
                        footerItems[i]));
                var expandIconName = "Expanded",
                    tooltip = this.props.clientContext.getLocalizedString("Queue_Item_ExpandTooltip_Text");
                if (this.state.isExpanded) {
                    expandIconName = "UpArrowHead";
                    tooltip = this.props.clientContext.getLocalizedString("Queue_Item_CollapseTooltip_Text")
                }
                var expandIcon = FontIcon.FontIcon({
                    key: "queueItemExpandButtonIcon",
                    className: "queueItemExpandButtonIcon",
                    title: tooltip,
                    symbolName: expandIconName
                });
                footerChildren.push(React.DOM.span({
                        key: "queueItemExpandButton",
                        className: "queueItemExpandButton",
                        onClick: this.toggleExpand,
                        title: tooltip,
                        tabIndex: this.props.tabIndex > 0
                            ? this.props.tabIndex
                            : this.props.dataContext.get_NextTabIndex(),
                        onKeyDown: this.handleKeyDownForExpandButton
                    },
                    expandIcon));
                footer = React.DOM.div({
                        key: "queuePanelItemFooter",
                        className: "queuePanelItemFooter",
                        onClick: this.itemClickHandler
                    },
                    footerChildren);
                return footer
            };
            QueueItemSpec.prototype.renderQuickActionCheckBox = function() {
                var quickActionCheckBox = ImageCheckBox
                    .ImageCheckbox({
                        type: "checkbox",
                        key: "checkbox",
                        dataId: this.props.dataId,
                        checked: this.props.dataContext.get_IsSelected(),
                        onClick: this.handleQuickActionCheckBoxClick,
                        className: CssClassSet({
                            quickActionImageCheckBox: !this.props.dataContext.get_IsSelected(),
                            quickActionImageCheckBoxChecked: this.props.dataContext.get_IsSelected()
                        })
                    });
                return React.DOM.div({ key: "quickActionCheckBoxContainer", className: "quickActionCheckBoxContainer" },
                    quickActionCheckBox)
            };
            QueueItemSpec.prototype.renderFullView = function() {
                var children = [],
                    colorBar = this.renderColorBar(),
                    itemHeader = this.renderQueueItemHeader(),
                    detail = this.renderQueueItemDetail(),
                    itemFooter = this.renderQueueItemFooter(),
                    recordId = this.props.dataContext.GetQueueItemGuid(),
                    itemBody = React.DOM.div({
                            key: "queueItemBody",
                            className: CssClassSet({
                                queueItemBody: true,
                                queueItemBodyDisabled: !this.props.dataContext
                                    .isEntityInteractionCentricEnabled(this.props.dataContext.get_EntityLogicalName())
                            }),
                            onKeyDown: this.itemOnKeyDownHandler,
                            "data-recordid": recordId
                        },
                        itemHeader,
                        detail,
                        itemFooter),
                    quickActionCheckBox = this.renderQuickActionCheckBox();
                children.push(quickActionCheckBox, colorBar, itemBody);
                return children
            };
            QueueItemSpec.prototype.renderCondensedView = function() {
                var itemDetail = this.renderQueueItemDetail(), recordId = this.props.dataContext.GetQueueItemGuid();
                return React.DOM.div({ key: "queueItemBody", className: "queueItemBody", "data-recordid": recordId },
                    itemDetail)
            };
            QueueItemSpec.prototype.itemClickHandler = function(e) {
                e != null && e.stopPropagation();
                if (!this.props.dataContext
                    .isEntityInteractionCentricEnabled(this.props.dataContext.get_EntityLogicalName())) return;
                this.props.dataContext.navigateToRecord()
            };
            QueueItemSpec.prototype.updateAriaOnFocus = function(e) {
                if (this.props.dataContext.get_IsCtrlPressed()) this.setStateForQueueItem(true, false);
                else this.setStateForQueueItem(false, false)
            };
            QueueItemSpec.prototype.handleKeyDownForExpandButton = function(e) {
                e.stopPropagation();
                switch (e.key) {
                case Constants.ENTER_KEY:
                    this.setState({ isExpanded: !this.state.isExpanded });
                    break;
                case Constants.F8_KEY:
                    this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    break
                }
            };
            QueueItemSpec.prototype.itemOnKeyDownHandler = function(e) {
                var dataId = this.props.dataId;
                if (dataId != undefined)
                    var dataIdseq = parseInt(dataId.substring(dataId.lastIndexOf("-") + 1)),
                        dataIdConstant = this.props.dataId.substring(0, dataId.lastIndexOf("-") + 1);
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.itemClickHandler(null);
                    this.props.onKeyDown(e.keyCode);
                    break;
                case Constants.ESCAPE_KEY_CODE:
                    e.preventDefault();
                    this.props.onEscKeyDown && this.props.onEscKeyDown();
                    break;
                case Constants.SPACE_KEY_CODE:
                    var queuePanelViewModel = this.props.dataContext.get_parentViewModel(),
                        multiSelectInfo = queuePanelViewModel.get_MultiSelectInfo();
                    if (e.shiftKey) {
                        if (multiSelectInfo && !multiSelectInfo.get_IsMultiSelectUsingShiftKey()) {
                            this.handleQuickActionCheckBoxToggle(-1);
                            this.setMultiSelectInfoAndDirection(multiSelectInfo, false, true, 0);
                            e.preventDefault()
                        }
                    } else if (e.ctrlKey) {
                        if (multiSelectInfo && !multiSelectInfo.get_IsMultiSelectUsingControlKey()) {
                            this.handleQuickActionCheckBoxToggle(-1);
                            this.setMultiSelectInfoAndDirection(multiSelectInfo, true, false, 0);
                            e.preventDefault()
                        }
                    } else {
                        this.handleQuickActionCheckBoxToggle(-1);
                        this.props.onKeyDown(e.keyCode);
                        e.preventDefault();
                        this.setStateForQueueItem(false, true)
                    }
                    this.props.dataContext.get_IsCtrlPressed() && this.props.dataContext.set_IsCtrlPressed(false);
                    break;
                case Constants.UP_ARROW_KEY_CODE:
                case Constants.DOWN_ARROW_KEY_CODE:
                    e.preventDefault();
                    e.stopPropagation();
                    var nextItemSeq = -1;
                    if (e.keyCode == Constants.DOWN_ARROW_KEY_CODE) nextItemSeq = dataIdseq + 1;
                    else if (e.keyCode == Constants.UP_ARROW_KEY_CODE) nextItemSeq = dataIdseq - 1;
                    if (nextItemSeq > -1)
                        if (e.shiftKey) {
                            if ($('[data-id="' + dataIdConstant + nextItemSeq + '"]').length > 0) {
                                var queuePanelViewModel = this.props.dataContext.get_parentViewModel(),
                                    multiSelectInfo = queuePanelViewModel.get_MultiSelectInfo(),
                                    item = this.props.dataContext;
                                if (multiSelectInfo.get_Direction() == 0 && !item.get_IsSelected()) {
                                    this.handleQuickActionCheckBoxToggle(dataIdseq);
                                    this.handleQuickActionCheckBoxToggle(nextItemSeq);
                                    this.focusQueueItem(dataIdConstant + nextItemSeq);
                                    multiSelectInfo.set_Direction(e.keyCode);
                                    break
                                }
                                var queueItems = queuePanelViewModel.get_Items();
                                if (queueItems && nextItemSeq < queueItems.get_Count()
                                ) item = queueItems.getItem(nextItemSeq);
                                if (item.get_IsSelected()) {
                                    this.handleQuickActionCheckBoxToggle(dataIdseq);
                                    this.focusQueueItem(dataIdConstant + nextItemSeq)
                                } else {
                                    this.handleQuickActionCheckBoxToggle(nextItemSeq);
                                    this.focusQueueItem(dataIdConstant + nextItemSeq)
                                }
                                multiSelectInfo.set_Direction(e.keyCode)
                            }
                        } else if (e.ctrlKey) {
                            this.props.dataContext.set_IsCtrlPressed(true);
                            this.focusQueueItem(dataIdConstant + nextItemSeq)
                        } else {
                            this.clearAllSelection();
                            this.focusQueueItem(dataIdConstant + nextItemSeq)
                        }
                    break;
                case Constants.TAB_KEY_CODE:
                    if (this.props.dataContext.get_IsSelected() && this.props.onKeyDown(e.keyCode)) break;
                    if (this.props.dataContext.get_IsSelected()) {
                        var elementToFocus = $('[data-id="' + dataId + '"]');
                        if (elementToFocus != null) {
                            var queuePanelClassName = ".queuePanel" + this.props.dataContext.get_DashboardCategory(),
                                quickActionContainer = elementToFocus.parents(queuePanelClassName)
                                    ? elementToFocus.parents(queuePanelClassName).find(".quickActionQueueContainer")
                                    : null,
                                quickActionFirstChild = quickActionContainer
                                    ? quickActionContainer.find(".quickActionNormalButton:first-child")
                                    : null;
                            quickActionFirstChild && quickActionFirstChild.focus();
                            this.props.onKeyDown(e.keyCode);
                            e.preventDefault()
                        }
                    } else this.props.isCondensed && this.checkForTabStopInQueueItems(e);
                    var queuePanelViewModel = this.props.dataContext.get_parentViewModel();
                    if (queuePanelViewModel) {
                        var state = false, multiSelectInfo = queuePanelViewModel.get_MultiSelectInfo();
                        this.setMultiSelectInfoAndDirection(multiSelectInfo, state, state, 0)
                    }
                    break
                }
                if (this.props.screenReaderParentInfoText != "" && $(ReactDOM.findDOMNode(this)) != null) {
                    var label = "";
                    if (this.props.isCondensed) label = this.props.dataContext.screenReaderTextForQueueItem(true);
                    $(ReactDOM.findDOMNode(this)).attr("aria-label", label)
                }
            };
            QueueItemSpec.prototype
                .setMultiSelectInfoAndDirection = function(multiSelectInfo,
                    isMultiSelectUsingControlKey,
                    isMultiSelectUsingShiftKey,
                    direction) {
                    multiSelectInfo.set_IsMultiSelectUsingControlKey(isMultiSelectUsingControlKey);
                    multiSelectInfo.set_IsMultiSelectUsingShiftKey(isMultiSelectUsingShiftKey);
                    multiSelectInfo.set_Direction(direction)
                };
            QueueItemSpec.prototype.checkForTabStopInQueueItems = function(e) {
                var domNode = ReactDOM.findDOMNode(this),
                    targetElement = e.shiftKey ? domNode.previousSibling : domNode.nextSibling;
                if (targetElement == null) {
                    e.preventDefault();
                    $(domNode).focus()
                }
            };
            QueueItemSpec.prototype.focusQueueItem = function(queueItemlDataId) {
                var queueItem = $('[data-id="' + queueItemlDataId + '"]');
                if (queueItem != null)
                    if (this.props.isCondensed) queueItem.parents(".queueItemContainerCondensed").focus();
                    else queueItem.parents(".queueItemContainer").focus()
            };
            QueueItemSpec.prototype.hidePopUpMenu = function(popupId) {
                var popupmenu = $('[data-id="' + popupId + '"]').parents(".popupContent");
                if (popupmenu != null) {
                    var queuePanelId = popupId.substring(0, popupId.indexOf("-") + 2);
                    popupmenu.hide();
                    $('[data-id="' + queuePanelId + '"]').focus()
                }
            };
            QueueItemSpec.prototype.clearAllSelection = function() {
                var queuePanelViewModel = this.props.dataContext.get_parentViewModel();
                if (queuePanelViewModel) {
                    var state = false, multiSelectInfo = queuePanelViewModel.get_MultiSelectInfo();
                    this.setMultiSelectInfoAndDirection(multiSelectInfo, state, state, 0);
                    this.props.dataContext.set_IsCtrlPressed(false);
                    for (var queueItems = queuePanelViewModel.get_Items(), i = 0; i < queueItems.get_Count(); i++) {
                        var item = queueItems.getItem(i);
                        if (item.get_IsSelected()) {
                            var recordID = item.GetQueueItemGuid(),
                                entityLogicalName = this.props.dataContext.get_EntityLogicalName();
                            item.set_IsSelected(state);
                            queuePanelViewModel.handleQueueItemSelectedEvent(recordID, state, entityLogicalName)
                        }
                        this.state.queueItemAriaInfo != this.props.dataContext.screenReaderTextForQueueItem(false) &&
                            this.setState({
                                queueItemAriaInfo: this.props.dataContext.screenReaderTextForQueueItem(false),
                                isExpanded: this.state.isExpanded
                            })
                    }
                    this.props.dataContext.set_ItemSelectionCounter(0)
                }
            };
            QueueItemSpec.prototype.handleQuickActionCheckBoxToggle = function(elementIndex) {
                var item = this.props.dataContext, queuePanelViewModel = this.props.dataContext.get_parentViewModel();
                if (elementIndex > -1) {
                    var queueItems = queuePanelViewModel.get_Items();
                    if (queueItems && elementIndex < queueItems.get_Count()) item = queueItems.getItem(elementIndex)
                }
                if (item) {
                    var recordID = item.GetQueueItemGuid(),
                        state = !item.get_IsSelected(),
                        entityLogicalName = this.props.dataContext.get_EntityLogicalName();
                    item.set_IsSelected(state);
                    queuePanelViewModel &&
                        queuePanelViewModel.handleQueueItemSelectedEvent(recordID, state, entityLogicalName)
                }
            };
            QueueItemSpec.prototype.setStateForQueueItem = function(isCtrlKey, isSpaceKey) {
                var ariaLabel;
                if (this.props.dataContext
                    .get_ItemSelectionCounter() ==
                    0 &&
                    !isSpaceKey ||
                    isCtrlKey) ariaLabel = this.props.dataContext.screenReaderTextForQueueItem(false);
                else if (this.props.dataContext
                    .get_ItemSelectionCounter() ==
                    1 &&
                    isSpaceKey)
                    ariaLabel = this.props.clientContext.getLocalizedString("QueueItems_ScreenReader_RecordSelected");
                else if (this.props.dataContext.get_PreviousSelectionCount() >
                    this.props.dataContext
                    .get_ItemSelectionCounter())
                    ariaLabel = this.props.clientContext
                        .getLocalizedString("QueueItems_ScreenReader_SelectionRemoved") +
                        this.props.dataContext.screenReaderTextWithSelectionCount();
                else {
                    var dataId = this.props.dataId, dataIdseq = -1;
                    if (dataId != undefined) var dataIdseq = parseInt(dataId.substring(dataId.lastIndexOf("-") + 1));
                    if (dataIdseq == 0 &&
                        !this.props.dataContext.get_IsSelected() &&
                        this.props.dataContext
                        .get_ItemSelectionCounter() >
                        0) ariaLabel = this.props.dataContext.screenReaderTextForQueueItem(false);
                    else ariaLabel = this.props.dataContext.screenReaderTextWithSelectionCount()
                }
                ariaLabel != this.state.queueItemAriaInfo &&
                    this.setState({ queueItemAriaInfo: ariaLabel, isExpanded: this.state.isExpanded });
                if (isSpaceKey) {
                    var queueContainerScreenReaderElement = $("#queueContainerScreenReadableElementId")[0];
                    if (queueContainerScreenReaderElement != null) {
                        queueContainerScreenReaderElement.innerHTML = " ";
                        queueContainerScreenReaderElement.innerHTML = ariaLabel
                    }
                }
            };
            QueueItemSpec.prototype.render = function() {
                if (this.props.isCondensed)
                    return React.DOM.span({
                            className: "queueItemContainerCondensed",
                            tabIndex: this.props.tabIndex,
                            onKeyDown: this.itemOnKeyDownHandler,
                            "aria-label": this.props.screenReaderParentInfoText +
                                " " +
                                this.props.dataContext.screenReaderTextForQueueItem(true),
                            onMouseEnter: this.props.dataContext.get_IsInteractionCentricEnabled() &&
                                this.props.dataContext.get_Enabled() &&
                                this.props.onMouseEnter
                                ? this.props.onMouseEnter
                                : null
                        },
                        this.renderCondensedView());
                else
                    return React.DOM.span({
                            className: CssClassSet({
                                queueItemContainer: true,
                                queueItemContainerSelected: this.props.dataContext.get_IsSelected(),
                                queueItemContainerDisabled: !this.props.dataContext
                                    .isEntityInteractionCentricEnabled(this.props.dataContext.get_EntityLogicalName())
                            }),
                            tabIndex: this.props.tabIndex,
                            onKeyDown: this.itemOnKeyDownHandler,
                            onFocus: this.updateAriaOnFocus,
                            "aria-label": this.state.queueItemAriaInfo
                        },
                        this.renderFullView())
            };
            return QueueItemSpec
        }(TsAdapter.SpecBase);
        exports.QueueItem = DataWrapperComponent.wrapComponent(new QueueItemSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/QuickAction/QuickActionButton",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, Constants) {
        exports.DESCRIPTOR_NAME = "QuickActionButton";
        var QuickActionButtonSpec = function(_super) {
            __extends(QuickActionButtonSpec, _super);

            function QuickActionButtonSpec() {
                _super.apply(this, arguments);
                this.displayName = "QuickActionButton";
                this.listenToProperties = ["QuickActionButtonUpdated"]
            }

            QuickActionButtonSpec.prototype.handleOnClick = function() { this.props.dataContext.HandleOnClick() };
            QuickActionButtonSpec.prototype.handleKeydown = function(e) {
                this.props.onKeyDown && this.props.onKeyDown(e);
                switch (e.key) {
                case Constants.ENTER_KEY:
                    this.handleOnClick();
                    break;
                case Constants.SPACE_KEY:
                    this.handleOnClick();
                    break;
                case Constants.DOWN_ARROW_KEY:
                case Constants.UP_ARROW_KEY:
                    var currentElement = e.currentTarget,
                        itemToFocus = e.key == Constants.DOWN_ARROW_KEY
                            ? currentElement.nextSibling
                            : currentElement.previousSibling;
                    itemToFocus != null && $(itemToFocus).focus();
                    e.stopPropagation();
                    e.preventDefault();
                    break;
                case Constants.TAB_KEY:
                    var currentTarget = e.currentTarget,
                        nextElement = e.shiftKey ? currentTarget.previousSibling : currentTarget.nextSibling;
                    if (nextElement == null) $(currentTarget).hasClass("quickActionPopupButton") && e.preventDefault();
                    break
                }
            };
            QuickActionButtonSpec.prototype.calculateTestabilityId = function() {
                var id = null, vm = this.props.dataContext;
                if (vm) {
                    id = this.props.dataContext.get_Id();
                    var command = vm.get_Command(), label = vm.get_Label();
                    if (command)
                        if (command === "ProcessStageGateCommand") {
                            var params = vm.get_Parameters();
                            if (params && params["EntityId"]) id = params["EntityId"];
                            else if (label === "Create") id = "CreateNew"
                        } else if (label && command === "ChangeProcessControlCommand") id = label
                }
                return id
            };
            QuickActionButtonSpec.prototype.render = function() {
                return React.DOM.div({
                        key: "quickActionButton" + this.props.dataContext.get_Id(),
                        onClick: this.handleOnClick,
                        tabIndex: this.props.tabIndex,
                        className: this.props.cssClassName,
                        title: this.props.dataContext.get_Label(),
                        "data-id": this.calculateTestabilityId(),
                        onKeyDown: this.handleKeydown,
                        "aria-label": this.props.dataContext.get_Label() +
                            " button " +
                            this.props.dataContext.get_Label(),
                        onMouseEnter: this.props.dataContext.get_IsInteractionCentricEnabled() &&
                            this.props.onMouseEnter
                            ? this.props.onMouseEnter
                            : null
                    },
                    this.props.dataContext.get_Label())
            };
            return QuickActionButtonSpec
        }(TsAdapter.SpecBase);
        exports.QuickActionButton = DataWrapperComponent.wrapComponent(new QuickActionButtonSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/QuickAction/QuickActionQueueContainer",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/InteractionCentric/QuickAction/QuickActionButton", "Components/Common/Constants",
        "Components/Primitives/Popup", "Core/Binding/UIHasRenderedMixin", "Components/Common/AccessibilityUtility"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        QuickActionButton,
        Constants,
        Popup,
        UIHasRendered,
        AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "QuickActionQueueContainer";
        var QuickActionQueueContainerSpec = function(_super) {
            __extends(QuickActionQueueContainerSpec, _super);

            function QuickActionQueueContainerSpec() {
                _super.apply(this, arguments);
                this.displayName = "QuickActionQueueContainer";
                this.mixins = [UIHasRendered.Mixin];
                this.listenToProperties = [
                    "QuickActionButtonCreated", "SelectionCountChanged", "QueueContainerQuickActionPopup"
                ]
            }

            QuickActionQueueContainerSpec.prototype
                .togglePopup = function() {
                    !this.props.dataContext.get_queueContainerQuickActionPopup() &&
                        this.props.dataContext.set_queueContainerQuickActionPopup(true)
                };
            QuickActionQueueContainerSpec.prototype.closePopup = function() {
                if (this.props.dataContext.get_queueContainerQuickActionPopup()) {
                    this.props.dataContext.set_queueContainerQuickActionPopup(false);
                    var button = this.refs["QueueContainerPopupIconButton"];
                    button instanceof Element && $(button).focus()
                }
            };
            QuickActionQueueContainerSpec.prototype.itemOnKeyDownHandler = function(e) {
                switch (e.key) {
                case Constants.ENTER_KEY:
                    this.togglePopup();
                    e.preventDefault();
                    break;
                case Constants.SPACE_KEY:
                    this.togglePopup();
                    e.preventDefault();
                    break
                }
            };
            QuickActionQueueContainerSpec.prototype.onKeyDownHandler = function(e) {
                switch (e.key) {
                case Constants.ESCAPE_KEY:
                case Constants.TAB_KEY:
                    var currentTarget = e.currentTarget;
                    if (e
                        .key ===
                        Constants.TAB_KEY &&
                        AccessibilityUtility.doesNextElementExist(currentTarget, e)) break;
                    this.closePopup();
                    break
                }
            };
            QuickActionQueueContainerSpec.prototype.render = function() {
                for (var children = [],
                    childViewModels = this.props.dataContext.getQuickActionButtonViewModels(),
                    count = this.props.dataContext.getQuickActionButtonViewModelCount(),
                    i = 0;
                    i < count && i < 3;
                    i++)
                    children.push(QuickActionButton
                        .QuickActionButton({
                            key: "quickActionButton" + i.toString(),
                            clientContext: this.props.clientContext,
                            dataContext: childViewModels[i],
                            tabIndex: this.props.tabIndex,
                            id: "quickActionButton" + i.toString(),
                            cssClassName: "quickActionNormalButton"
                        }));
                var popupChildren = [];
                if (count > 3)
                    for (var i = 3; i < count; i++)
                        popupChildren.push(QuickActionButton
                            .QuickActionButton({
                                key: "quickActionButton" + i.toString(),
                                clientContext: this.props.clientContext,
                                dataContext: childViewModels[i],
                                id: "quickActionButton" + i.toString(),
                                "data-id": "quickActionButton-" + i.toString(),
                                cssClassName: "quickActionPopupButton",
                                tabIndex: this.props.tabIndex,
                                onKeyDown: this.onKeyDownHandler,
                                onMouseEnter: AccessibilityUtility.handleOnMouseEnter
                            }));
                var menuPopup = Popup.Popup({
                            key: "quickActionQueuePopup",
                            visible: this.props.dataContext.get_queueContainerQuickActionPopup(),
                            className: "quickActionQueueContainerPopup",
                            onDismiss: this.closePopup
                        },
                        popupChildren),
                    popupIcon = React.DOM.button({
                            key: "popupButton" + this.props.dataContext.get_Id(),
                            onClick: this.togglePopup,
                            tabIndex: this.props.tabIndex,
                            className: "quickActionQueueContainerPopupButton",
                            ref: "QueueContainerPopupIconButton",
                            onKeyDown: this.itemOnKeyDownHandler,
                            "aria-label": this.props.clientContext
                                .getLocalizedString("QueueContainer_ScreenReader_QuickActionMenuButton")
                        },
                        "\u2026");
                count > 3 && children.push(popupIcon, menuPopup);
                return React.DOM.div({ className: "quickActionQueueContainer" }, children)
            };
            return QuickActionQueueContainerSpec
        }(TsAdapter.SpecBase);
        exports.QuickActionQueueContainer = DataWrapperComponent.wrapComponent(new QuickActionQueueContainerSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/QueueContainer/QueuePanel",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Core/Binding/UIHasRenderedMixin", "Components/InteractionCentric/QueueContainer/QueueItem",
        "Components/InteractionCentric/QuickAction/QuickActionQueueContainer", "Components/Primitives/Popup",
        "Components/Primitives/FontIcon", "Components/Common/Constants", "Components/Primitives/ScrollRegion",
        "Utils/CssClassSet", "Components/Primitives/ProgressIndicator", "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        UIHasRendered,
        QueueItem,
        QuickActionQueueContainer,
        Popup,
        FontIcon,
        Constants,
        ScrollRegion,
        CssClassSet,
        ProgressIndicator,
        FocusHandlerMixin) {
        var selectedSortAttribute = "";
        exports.DESCRIPTOR_NAME = "QueuePanel";
        var QueuePanelSpec = function(_super) {
            __extends(QueuePanelSpec, _super);

            function QueuePanelSpec() {
                _super.apply(this, arguments);
                this.displayName = "QueuePanel";
                this.mixins = [UIHasRendered.Mixin, FocusHandlerMixin.Mixin];
                this.listenToProperties = [
                    "Visible", "IsLoading", "IsEditMode", "QuickActionCommandBarEnabled", "ActiveNavigationStack", "Top"
                ];
                this.scrollPagingTriggerPadding = 40;
                this.isEditModeToggled = false;
                this.isEditModeOpen = false;
                this.isMountedFirstTime = false
            }

            QueuePanelSpec.prototype.handleFocus = function() {
                var queuepanelClassName = ".queuePanel" + this.props.dataContext.get_DashboardCategory(),
                    editProperties = this.refs["editProperties"];
                if (this.props.dataContext.get_IsEditMode()) {
                    var firstActionable = this.refs["firstActionable"];
                    firstActionable instanceof Element && $(firstActionable).focus()
                } else if (!this.props.dataContext.get_IsEditMode() &&
                    !this.state.isMenuVisible &&
                    this.isEditModeToggled &&
                    this.isEditModeOpen) {
                    var menuButtonPopup = this.refs["menuButtonPopup"];
                    if (menuButtonPopup instanceof Element) {
                        this.isEditModeToggled = false;
                        this.isEditModeOpen = false;
                        $(menuButtonPopup).focus()
                    }
                } else if (this.isEditModeToggled && editProperties instanceof Element) $(editProperties).focus();
                else if (this.isEditModeOpen) {
                    this.isEditModeOpen = false;
                    $(".editProperties").focus()
                } else if ($(queuepanelClassName) != null &&
                    $(queuepanelClassName).length > 0 &&
                    !this.isMountedFirstTime
                ) {
                    this.isMountedFirstTime = true;
                    $(queuepanelClassName).first().focus();
                    this.props.dataContext.get_IsInteractionCentricEnabled() &&
                        $(queuepanelClassName).addClass("removeOutLine")
                }
            };
            QueuePanelSpec.prototype.getDefaultProps = function() { return { isHidden: false } };
            QueuePanelSpec.prototype.getInitialState = function() { return { isMenuVisible: false } };
            QueuePanelSpec.prototype.changeSortOrder = function() {
                var isSortedInDescending = this.props.dataContext.get_IsSortedInDescending();
                this.props.dataContext.set_IsSortedInDescending(!isSortedInDescending);
                this.props.dataContext.set_LoadTriggeredByPagingEvent(false);
                this.props.dataContext.retrieveData();
                var queueContainerScreenReaderElement = $("#queueContainerScreenReadableElementId")[0];
                if (queueContainerScreenReaderElement != null) {
                    queueContainerScreenReaderElement.innerHTML = " ";
                    queueContainerScreenReaderElement.innerHTML = this.props.dataContext.screenReaderTextForSortIcon()
                }
            };
            QueuePanelSpec.prototype.changeSortOrderKeyDown = function(e) {
                (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) &&
                    this.changeSortOrder()
            };
            QueuePanelSpec.prototype.renderMenuFlyout = function() {
                var menuButton;
                if (this.state.isMenuVisible)
                    var menuPopup = Popup.Popup({
                            key: "MenuPopup" + this.props.dataContext.get_StreamId(),
                            visible: true,
                            className: "menuPopup",
                            onDismiss: this.toggleMenu
                        },
                        this.renderMenuItems());
                menuButton = React.DOM.span({
                        key: "queuePanelHeaderMenuButton",
                        ref: "queuePanelHeaderMenuButton",
                        className: "queuePanelHeaderMenuButton",
                        title: this.props.clientContext.getLocalizedString("Queue_Panel_EllipsisTooltip_Text")
                    },
                    FontIcon.FontIcon({ symbolName: "More" }));
                var children = [menuButton, menuPopup];
                return React.DOM.span({
                        key: "menuButtonPopup",
                        ref: "menuButtonPopup",
                        className: "menuButtonPopup",
                        tabIndex: this.props.tabIndex,
                        onClick: this.toggleMenu,
                        onKeyDown: this.toggleMenuKeyDown,
                        "aria-label": this.props.dataContext.screenReaderTextForMenuButton()
                    },
                    children)
            };
            QueuePanelSpec.prototype
                .toggleMenu = function() { this.setState({ isMenuVisible: !this.state.isMenuVisible }) };
            QueuePanelSpec.prototype.toggleMenuKeyDown = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                case Constants.SPACE_KEY_CODE:
                    this.setState({ isMenuVisible: true });
                    this.isEditModeOpen = true;
                    break;
                case Constants.ESCAPE_KEY_CODE:
                    this.setState({ isMenuVisible: false });
                    $(this.refs["menuButtonPopup"]).focus();
                    break;
                case Constants.DOWN_ARROW_KEY_CODE:
                    var editProperties = this.refs["editProperties"];
                    editProperties instanceof Element && $(editProperties).focus();
                    break
                }
            };
            QueuePanelSpec.prototype.renderMenuItems = function() {
                var children = [
                    React.DOM.span({
                            key: "editProperties",
                            ref: "editProperties",
                            className: "editProperties",
                            tabIndex: this.props.tabIndex,
                            onClick: this.toggleEditMode,
                            onKeyDown: this.toggleEditModeKeyDown,
                            title: this.props.clientContext.getLocalizedString("Queue_Panel_Edit_Properties_Text"),
                            "aria-label": this.props.clientContext
                                .getLocalizedString("Queue_Panel_Edit_Properties_Text") +
                                " " +
                                this.props.clientContext.getLocalizedString("Queue_Panel_Edit_Properties_Text")
                        },
                        this.props.clientContext.getLocalizedString("Queue_Panel_Edit_Properties_Text"))
                ];
                return React.DOM.span({ key: "menuPopupContent", className: "menuPopupContent" }, children)
            };
            QueuePanelSpec.prototype.toggleEditMode = function() {
                this.props.dataContext.set_IsEditMode(!this.props.dataContext.get_IsEditMode());
                selectedSortAttribute = this.props.dataContext.get_SelectedSortBy();
                this.isEditModeToggled = !this.props.dataContext.get_IsEditMode()
            };
            QueuePanelSpec.prototype.cancelSettings = function() {
                this.props.dataContext.set_SelectedSortBy(selectedSortAttribute);
                this.toggleEditMode();
                this.setState({ isMenuVisible: false })
            };
            QueuePanelSpec.prototype.cancelSettingsOnKeyDown = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.cancelSettings();
                    e.preventDefault();
                    break;
                case Constants.TAB_KEY_CODE:
                    if (!e.shiftKey) {
                        var lastActionable = this.refs["lastActionable"];
                        if (lastActionable instanceof Element) {
                            $(lastActionable).focus();
                            e.preventDefault()
                        }
                    }
                }
            };
            QueuePanelSpec.prototype.applySettings = function() {
                this.props.dataContext.set_IsEditMode(!this.props.dataContext.get_IsEditMode());
                this.props.dataContext.editModeApplySettings();
                this.isEditModeToggled = !this.props.dataContext.get_IsEditMode();
                this.setState({ isMenuVisible: false })
            };
            QueuePanelSpec.prototype.applySettingsOnKeyDown = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.applySettings();
                    e.preventDefault();
                    break
                }
            };
            QueuePanelSpec.prototype.toggleEditModeKeyDown = function(e) {
                var targetElement = e.target;
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                case Constants.SPACE_KEY_CODE:
                    this.toggleEditMode();
                    this.setState({ isMenuVisible: false });
                    break;
                case Constants.TAB_KEY_CODE:
                    var nextElement = !e.shiftKey ? targetElement.nextSibling : targetElement.previousSibling;
                    if (e.shiftKey) {
                        var cancelButton = this.refs["queuePanelEditFooterCancelButton"];
                        if (cancelButton instanceof Element) {
                            $(cancelButton).focus();
                            e.preventDefault()
                        } else nextElement == null && this.setState({ isMenuVisible: false })
                    } else nextElement == null && this.setState({ isMenuVisible: false });
                    break
                }
            };
            QueuePanelSpec.prototype.getSortSymbolName = function() {
                return this.props.dataContext.get_IsSortedInDescending() ? "DownArrow" : "UpArrow"
            };
            QueuePanelSpec.prototype.renderStreamName = function() {
                return React.DOM.span({
                        key: "queuePanelHeaderStreamName",
                        className: "queuePanelHeaderStreamName",
                        title: this.props.dataContext.get_StreamName()
                    },
                    this.props.dataContext.get_StreamName() != null
                    ? this.props.dataContext.get_StreamName()
                    : this.props.clientContext.getLocalizedString("Queue_Panel_MissingStreamTitle_Text"))
            };
            QueuePanelSpec.prototype.iterateSelection = function(keyCode) {
                switch (keyCode) {
                case Constants.TAB_KEY_CODE:
                    if (!this.isIterated) {
                        this.isIterated = true;
                        return false
                    } else return true;
                    break;
                case Constants.ENTER_KEY_CODE:
                case Constants.SPACE_KEY_CODE:
                    this.isIterated = false;
                    break
                }
            };
            QueuePanelSpec.prototype.renderPanelHeader = function() {
                var numberOfItems = this.props.dataContext.get_QueueItemCount().toString();
                if (this.props.dataContext.get_ItemLimitExceeded()) numberOfItems += "+";
                var headerChildren = [],
                    queueIcon = FontIcon.FontIcon({
                        key: "queuePanelHeaderQueueIcon",
                        className: "queuePanelHeaderQueueIcon",
                        title: this.props.clientContext.getLocalizedString("Queue_Panel_QueueIconTooltip_Text"),
                        symbolName: "QueueIcon"
                    });
                if (this.props.dataContext
                    .get_TypeOfStream() ==
                    "1")
                    queueIcon = FontIcon.FontIcon({
                        key: "queuePanelHeaderQueueIcon",
                        className: "queuePanelHeaderQueueIcon",
                        title: this.props.clientContext.getLocalizedString("Queue_Panel_QueueIconTooltip_Text"),
                        symbolName: "ViewIcon"
                    });
                var itemCount = React.DOM.span({
                            key: "queuePanelHeaderItemcount",
                            title: this.props.clientContext.getLocalizedString("Queue_Panel_ItemCounterTooltip_Text"),
                            className: "queuePanelHeaderItemcount"
                        },
                        numberOfItems),
                    sortIcon = FontIcon.FontIcon({
                        key: "queuePanelHeaderSortByIcon",
                        className: "queuePanelHeaderSortByIcon",
                        symbolName: this.getSortSymbolName()
                    });
                headerChildren.push(queueIcon);
                headerChildren.push(itemCount);
                if (this.props.dataContext.get_SelectedSortBy() != null) {
                    var sortBy = React.DOM.span({
                                key: "queuePanelHeaderSortBy",
                                className: "queuePanelHeaderSortBy",
                                ref: "queuePanelHeaderSortBy" +
                                    this.props.dataId.substring(this.props.dataId.indexOf("-") + 1),
                                tabIndex: this.props.tabIndex,
                                onClick: this.changeSortOrder,
                                onKeyDown: this.changeSortOrderKeyDown,
                                "aria-label": this.props.dataContext.screenReaderTextForSortIcon()
                            },
                            " " + this.props.dataContext.get_SelectedSortBy()),
                        sortWrapper = React.DOM.span({
                                key: "queuePanelHeaderSortWrapper",
                                className: "queuePanelHeaderSortWrapper",
                                title: this.props.clientContext.getLocalizedString("Queue_Panel_SortTooltip_Text")
                            },
                            sortIcon,
                            sortBy);
                    headerChildren.push(sortWrapper)
                }
                var menuFlyoutButton = this.renderMenuFlyout();
                headerChildren.push(menuFlyoutButton);
                return React.DOM.span({
                        key: "queuePanelHeader" + this.props.dataContext.get_StreamId(),
                        "data-recordid": this.props.dataContext.get_StreamId(),
                        className: "queuePanelHeader"
                    },
                    headerChildren)
            };
            QueuePanelSpec.prototype.renderPanelBody = function() {
                var itemIdArray = this.props.dataContext.get_QueueItemIdArray(),
                    queueItemViewModels = this.props.dataContext.get_QueueItemViewModels(),
                    bodyChildren = [];
                if (!this.props.dataContext
                    .get_IsCardFormDefined())
                    return React.DOM.div({ key: "queuePanelBody", className: "queuePanelBody" },
                        this.props.clientContext.getLocalizedString("Queue_Panel_No_Card_Form"));
                else if (!this.props.dataContext
                    .get_UserPrivilege())
                    return React.DOM.div({ key: "queuePanelBody", className: "queuePanelBody" },
                        this.props.clientContext.getLocalizedString("Queue_Panel_No_Read_Privilege"));
                else if (this.props.dataContext
                    .get_IsErrorOccured())
                    return React.DOM.div({ key: "queuePanelBody", className: "queuePanelBody" },
                        this.props.clientContext.getLocalizedString("Component_Not_Displayed_Error"));
                else if (itemIdArray.length == 0)
                    return React.DOM.div({ key: "queuePanelBody", className: "queuePanelBody" },
                        this.props.clientContext.getLocalizedString("NoItems_Available_Filter"));
                for (var i = 0; i < itemIdArray.length; i++) {
                    var keyValue = "queuePanelItem-" + i.toString(),
                        queueItem = QueueItem.QueueItem({
                            clientContext: this.props.clientContext,
                            parentList: this.props.dataContext,
                            dataContext: queueItemViewModels[itemIdArray[i]],
                            key: keyValue,
                            isCondensed: false,
                            onKeyDown: this.iterateSelection,
                            tabIndex: this.props.tabIndex,
                            dataId: this.props.dataId + keyValue
                        });
                    bodyChildren.push(queueItem)
                }
                return ScrollRegion.ScrollRegion({
                        key: "queuePanelBody",
                        ref: "queuePanelBody",
                        className: CssClassSet({
                            queuePanelBody: !this.props.dataContext.isQuickActionBarEnabled(),
                            queuePanelBodyQuickAction: this.props.dataContext.isQuickActionBarEnabled()
                        }),
                        onScrollEnd: this.handleScrollEnd,
                        scrollState: this.props.dataContext,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        viewModelId: this.props.dataContext.get_Id()
                    },
                    bodyChildren)
            };
            QueuePanelSpec.prototype.handleScrollEnd = function(e) {
                this.props.dataContext.get_MoreNextPage() &&
                    this.isScrollBottomHit(e) &&
                    this.props.dataContext.loadMoreData()
            };
            QueuePanelSpec.prototype.showScrollbar = function(scrollVisibleClass) {
                var totalHeight = 0,
                    queuePanelBody = this.refs["queuePanelBody"],
                    queuePanelNode = ReactDOM.findDOMNode(queuePanelBody);
                $(queuePanelNode).children().each(function(index, element) {
                    totalHeight += $(element).outerHeight(true)
                });
                totalHeight > $(queuePanelNode).height() && $(ReactDOM.findDOMNode(this)).addClass(scrollVisibleClass)
            };
            QueuePanelSpec.prototype.hideScrollbar = function(scrollVisibleClass) {
                $(ReactDOM.findDOMNode(this)).removeClass(scrollVisibleClass)
            };
            QueuePanelSpec.prototype.onMouseEnter = function(e) { this.showScrollbar("scrollVisible") };
            QueuePanelSpec.prototype.onMouseLeave = function(e) { this.hideScrollbar("scrollVisible") };
            QueuePanelSpec.prototype.onFocus = function(e) { this.showScrollbar("scrollVisible queuePanelBodyScroll") };
            QueuePanelSpec.prototype.onBlur = function(e) { this.hideScrollbar("scrollVisible queuePanelBodyScroll") };
            QueuePanelSpec.prototype.isScrollBottomHit = function(e) {
                var scrollBottom = e.scrollTop + e.scrollContentHeight,
                    scrollTarget = e.scrollHeight - this.scrollPagingTriggerPadding;
                return scrollBottom >= scrollTarget
            };
            QueuePanelSpec.prototype.renderEditHeader = function() {
                var headerChildren = [
                    React.DOM.span({
                            key: "queuePanelEditHeaderBackButton",
                            className: "queuePanelHeaderBackButton",
                            ref: "lastActionable",
                            tabIndex: this.props.tabIndex,
                            onClick: this.cancelSettings,
                            onKeyDown: this.toggleEditModeKeyDown,
                            "aria-label": this.props.clientContext
                                .getLocalizedString("QueuePanels_ScreenReader_BackButton")
                        },
                        FontIcon.FontIcon({ symbolName: "BackButton" })), React.DOM
                    .div({ key: "queuePanelEditHeaderPropertiesText", className: "queuePanelEditHeaderPropertiesText" },
                        this.props.clientContext.getLocalizedString("Queue_Panel_Stream_Properties_Text"))
                ];
                return React.DOM.span({ className: "queuePanelEditHeader" }, headerChildren)
            };
            QueuePanelSpec.prototype.getSortOptions = function() {
                for (var children = [],
                    sortableAttributes = this.props.dataContext.get_SortableAttributes().toArray().sort(),
                    i = 0;
                    i < sortableAttributes.length;
                    i++)
                    children.push(React.DOM.option({ key: "sortOption" + i, value: sortableAttributes[i] },
                        sortableAttributes[i]));
                return children
            };
            QueuePanelSpec.prototype.renderQueueEditForm = function() {
                var nameText = React.DOM
                        .span({ key: "queuePanelEditFormNameText", className: "queuePanelEditFormNameText" },
                            this.props.clientContext.getLocalizedString("Queue_Panel_Name_Text")),
                    streamTitle = React.DOM.span({
                            key: "queuePanelEditFormStreamTitle",
                            className: "queuePanelEditFormStreamTitle",
                            title: this.props.dataContext.get_StreamName()
                        },
                        this.props.dataContext.get_StreamName()),
                    editFormNameRow = React.DOM.span({
                            key: "queuePanelEditFormNameRow",
                            className: "queuePanelEditFormNameRow"
                        },
                        nameText,
                        streamTitle),
                    lookForText = React.DOM.span({
                            key: "queuePanelEditFormLookForText",
                            className: "queuePanelEditFormLookForText"
                        },
                        this.props.clientContext.getLocalizedString("Queue_Panel_Look_For_Text")),
                    entityPluralName = React.DOM.span({
                            key: "queuePanelEditFormEntityPluralName",
                            className: "queuePanelEditFormEntityPluralName"
                        },
                        this.props.dataContext.get_EntityPluralName()),
                    editFormLookForRow = React.DOM.span({
                            key: "queuePanelEditFormLookForRow",
                            className: "queuePanelEditFormLookForRow"
                        },
                        lookForText,
                        entityPluralName),
                    sortByText = React.DOM.span({
                            key: "queuePanelEditFormSortByText",
                            className: "queuePanelEditFormSortByText"
                        },
                        this.props.clientContext.getLocalizedString("Queue_Panel_Sort_By_Text")),
                    selectMenu = React.DOM.select({
                            onChange: this.onSelectValueChange,
                            ref: "firstActionable",
                            key: "queuePanelEditFormSelectMenu",
                            tabIndex: this.props.tabIndex,
                            className: "queuePanelEditFormSelectMenu",
                            value: this.props.dataContext.get_SelectedSortBy(),
                            "aria-label": this.props.clientContext.getLocalizedString("Queue_Panel_Sort_By_Text") +
                                " " +
                                this.props.dataContext.get_SelectedSortBy()
                        },
                        this.getSortOptions()),
                    editFormSortByRow = React.DOM.span({
                            key: "queuePanelEditFormSortByRow",
                            className: "queuePanelEditFormSortByRow"
                        },
                        sortByText,
                        selectMenu),
                    formItems = [editFormNameRow, editFormLookForRow, editFormSortByRow];
                return React.DOM.span({ key: "queuePanelEditForm", className: "queuePanelEditForm" }, formItems)
            };
            QueuePanelSpec.prototype.renderQueueEditFooter = function() {
                var queueOKButton = React.DOM.button({
                            key: "queuePanelEditFooterOkButton",
                            className: "queuePanelEditFooterOkButton",
                            tabIndex: this.props.tabIndex,
                            onKeyDown: this.applySettingsOnKeyDown,
                            onClick: this.applySettings
                        },
                        this.props.clientContext.getLocalizedString("L_OK_Text")),
                    queueCancelButton = React.DOM.button({
                            key: "queuePanelEditFooterCancelButton",
                            className: "queuePanelEditFooterCancelButton",
                            ref: "queuePanelEditFooterCancelButton",
                            onKeyDown: this.cancelSettingsOnKeyDown,
                            tabIndex: this.props.tabIndex,
                            onClick: this.cancelSettings
                        },
                        this.props.clientContext.getLocalizedString("L_Cancel_Text"));
                return React.DOM.span({ key: "queuePanelEditFooter", className: "queuePanelEditFooter" },
                    queueOKButton,
                    queueCancelButton)
            };
            QueuePanelSpec.prototype.onSelectValueChange = function(e) {
                var element = e.target;
                this.props.dataContext.set_SelectedSortBy(element.value)
            };
            QueuePanelSpec.prototype.handleOnKeyDown = function(e) {
                var targetItem = ReactDOM.findDOMNode(this),
                    queuepanelClassName = ".queuePanel" + this.props.dataContext.get_DashboardCategory();
                this.props.dataContext.get_IsInteractionCentricEnabled() &&
                    $(queuepanelClassName).removeClass("removeOutLine");
                if (e.keyCode == Constants.F8_KEY_CODE) {
                    this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    return false
                } else if (e.keyCode == Constants.DOWN_ARROW_KEY_CODE) {
                    var firstItemId = this.props.dataId + "queuePanelItem-0",
                        queueItem = $('[data-id="' + firstItemId + '"]');
                    queueItem != null && queueItem.parents(".queueItemContainer").focus()
                }
            };
            QueuePanelSpec.prototype.escapeKeyHandler = function(e) {
                e.keyCode == Constants.ESCAPE_KEY_CODE && this.toggleEditMode()
            };
            QueuePanelSpec.prototype.onMouseClick = function(e) {
                var targetItem = ReactDOM.findDOMNode(this),
                    queuepanelClassName = ".queuePanel" + this.props.dataContext.get_DashboardCategory();
                this.props.dataContext.get_IsInteractionCentricEnabled() &&
                    $(queuepanelClassName).addClass("removeOutLine")
            };
            QueuePanelSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                var children = [], isEditMode = this.props.dataContext.get_IsEditMode();
                children.push(this.renderStreamName());
                if (!isEditMode) {
                    children.push(this.renderPanelHeader());
                    this.props.dataContext.get_IsLoading() &&
                        children.push(ProgressIndicator
                            .ProgressIndicator({
                                key: "loadingQueuePanel",
                                type: ProgressIndicator.ProgressIndicatorType.Bar,
                                active: true
                            }));
                    children.push(QuickActionQueueContainer
                        .QuickActionQueueContainer({
                            key: "quickActionQueueContainer",
                            dataContext: this.props.dataContext.get_quickActionViewModel(),
                            tabIndex: this.props.tabIndex,
                            clientContext: this.props.clientContext
                        }));
                    children.push(this.renderPanelBody())
                } else {
                    var editBody = React.DOM.div({
                            key: "queuePanelEditBody",
                            className: "queuePanelEditBody",
                            onKeyDown: this.escapeKeyHandler
                        },
                        this.renderEditHeader(),
                        this.renderQueueEditForm(),
                        this.renderQueueEditFooter());
                    children.push(editBody)
                }
                var instruction = "";
                if (this.props.dataContext
                    .get_QueueItemCount() >
                    0)
                    instruction = this.props.clientContext
                        .getLocalizedString("QueuePanels_ScreenReader_DownArrow_Instruction");
                return React.DOM.div({
                        className: "queuePanel" + this.props.dataContext.get_DashboardCategory() + " majorComponent",
                        tabIndex: this.props.tabIndex,
                        onKeyDown: this.handleOnKeyDown,
                        "aria-label": this.props.dataContext.screenReaderTextForStreamName() +
                            this.props.dataContext.screenReaderTextForItemCount() +
                            instruction,
                        onClick: this.onMouseClick
                    },
                    children)
            };
            return QueuePanelSpec
        }(TsAdapter.SpecBase);
        exports.QueuePanel = DataWrapperComponent.wrapComponent(new QueuePanelSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/QueueContainer/TileView",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/FontIcon",
        "Components/DataWrapperComponent", "Components/InteractionCentric/QueueContainer/QueueItem",
        "Components/Primitives/Popup", "Components/Common/Constants", "Components/Primitives/ScrollRegion",
        "Core/Binding/UIHasRenderedMixin", "Components/Primitives/ProgressIndicator", "Core/Binding/FocusHandlerMixin",
        "Components/Common/AccessibilityUtility"
    ],
    function(require,
        exports,
        TsAdapter,
        FontIcon,
        DataWrapperComponent,
        QueueItem,
        Popup,
        Constants,
        ScrollRegion,
        UIHasRendered,
        ProgressIndicator,
        FocusHandlerMixin,
        AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "TileView";
        var TileViewSpec = function(_super) {
            __extends(TileViewSpec, _super);

            function TileViewSpec() {
                _super.apply(this, arguments);
                this.displayName = "TileView";
                this.mixins = [UIHasRendered.Mixin, FocusHandlerMixin.Mixin];
                this.listenToProperties = ["Visible", "IsLoading", "ActiveNavigationStack", "Top"];
                this.scrollPagingTriggerPadding = 40;
                this.isMountedFirstTime = false
            }

            TileViewSpec.prototype.getInitialState = function() { return { isItemListVisible: false } };
            TileViewSpec.prototype.componentDidMount = function() {
                if (this.shouldTakeFocus()) {
                    var queuepanelClassName = ".queuePanel" + this.props.dataContext.get_DashboardCategory() + ":first";
                    if ($(queuepanelClassName) != null && $(queuepanelClassName).length > 0 && !this.isMountedFirstTime
                    ) {
                        this.isMountedFirstTime = true;
                        $(queuepanelClassName).focus()
                    } else if ($(".tileViewHeader:first") != null &&
                        $(".tileViewHeader:first").length > 0 &&
                        !this.isMountedFirstTime) {
                        this.isMountedFirstTime = true;
                        $(".tileViewHeader:first").focus()
                    }
                }
            };
            TileViewSpec.prototype.getTileHeaderStringForScreenReader = function() {
                var dateRangeDomElement = $('[data-id="dateRangeFilterOpen"]'),
                    dateRangeContent = dateRangeDomElement && dateRangeDomElement[0]
                        ? dateRangeDomElement[0].textContent
                        : null,
                    filterDashboardsNode = $('[data-id="filterDashboards"]'),
                    selectedDashboardTextNode = filterDashboardsNode
                        ? filterDashboardsNode.find(".dashboardPickerSelectedItemText")
                        : null,
                    selectedDashBoardName = selectedDashboardTextNode && selectedDashboardTextNode[0]
                        ? selectedDashboardTextNode[0].textContent
                        : null;
                return (this.props["isTileViewIntroScreenReaderTextSet"] != null
                        ? this.props.dataContext
                        .screenReaderTextForTilesContainer(dateRangeContent, selectedDashBoardName)
                        : "") +
                    this.props.dataContext.screenReaderTextForTileHeader()
            };
            TileViewSpec.prototype.getTileBody = function() {
                var title = this.props.dataContext.get_StreamName();
                if (this.props.dataContext
                    .get_IsErrorOccured())
                    title = this.props.clientContext.getLocalizedString("Component_Not_Displayed_Error");
                var numberOfItems = this.props.dataContext.get_QueueItemCount(),
                    numberOfMembers = this.props.dataContext.get_NumberOfMembers();
                if (this.state
                    .isItemListVisible &&
                    numberOfItems)
                    var tilePopup = Popup.Popup({
                            key: "tilePopupKey" + title,
                            visible: true,
                            className: "tilePopup",
                            onDismiss: this.dismissPopup,
                            ariaLabel: ""
                        },
                        this.renderPopupItems());
                var queueChildren = [];
                numberOfMembers !== null &&
                    queueChildren.push(React.DOM.span({
                                key: "numberOfMembers",
                                title: this.props.clientContext.getLocalizedString("Queue_TileView_MemberTooltip_Text")
                            },
                            numberOfMembers),
                        FontIcon.FontIcon({ key: "membersIcon", symbolName: "MembersIcon" }));
                var leftCornerText;
                if (this.props.dataContext
                    .get_TypeOfStream() ==
                    "1") leftCornerText = this.props.clientContext.getLocalizedString("Tile_View_Text");
                else leftCornerText = this.props.clientContext.getLocalizedString("Tile_Queue_Text");
                var tileChildren = [
                        React.DOM.span({ key: "leftCornerText11", className: "tileLeftCornerText" }, leftCornerText),
                        React
                        .DOM.span({ key: "rightCornerText11", className: "tileRightCornerText" }, queueChildren), React
                        .DOM
                        .span({ key: "tileViewHeader-title", className: "tileViewHeader-title", title: title }, title),
                        React.DOM.span({
                                key: "tileViewHeader-num",
                                className: "tileViewHeader-num",
                                title: this.props.clientContext
                                    .getLocalizedString("Queue_TileView_ItemCounterTooltip_Text")
                            },
                            numberOfItems), React.DOM.span({
                                key: "tileMoreButton",
                                className: "tileMoreButton",
                                title: this.props.clientContext
                                    .getLocalizedString("Queue_TileView_EllipsisTooltip_Text")
                            },
                            FontIcon.FontIcon({ symbolName: "More", onClick: this.handleTileContentButtonClick }))
                    ],
                    progress = ProgressIndicator.ProgressIndicator({
                        key: "loadingTile",
                        type: ProgressIndicator.ProgressIndicatorType.Bar,
                        active: this.props.dataContext.get_IsLoading()
                    }),
                    tileHeaderContainer = React.DOM.div({
                            key: "tileViewHeader",
                            className: "tileViewHeader",
                            tabIndex: this.props.tabIndex,
                            onClick: this.handleTileContentButtonClick,
                            "data-id": this.props.dataId,
                            onKeyDown: this.handleTileContentButtonKeyDown,
                            "aria-label": this.getTileHeaderStringForScreenReader()
                        },
                        progress,
                        tileChildren),
                    children = [tileHeaderContainer, tilePopup];
                return React.DOM.div({ key: "tileViewContainer", className: "tileViewContainer" }, children)
            };
            TileViewSpec.prototype
                .handleTileContentButtonClick = function() {
                    this.setState({ isItemListVisible: !this.state.isItemListVisible })
                };
            TileViewSpec.prototype.handleTileContentButtonKeyDown = function(e) {
                var dataId = this.props.dataId,
                    dataIdSequence = parseInt(dataId.substring(dataId.lastIndexOf("-") + 1)),
                    dataIdConstant = this.props.parentGivenKey.substring(0, dataId.lastIndexOf("-") + 1),
                    targetItem = $(ReactDOM.findDOMNode(this)),
                    targetToFocus,
                    targetParent;
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                case Constants.SPACE_KEY_CODE:
                    this.handleTileContentButtonClick();
                    break;
                case Constants.ESCAPE_KEY_CODE:
                    e.preventDefault();
                    this.dismissPopup();
                    break;
                case Constants.DOWN_ARROW_KEY_CODE:
                    var nextTileDataId = dataIdConstant + (dataIdSequence + 1);
                    if (targetItem
                        .next() !=
                        null &&
                        targetItem.next().length) targetToFocus = $(targetItem.next()[0]).find(".tileViewHeader:first");
                    else {
                        targetParent = targetItem.closest("tr");
                        targetToFocus = targetParent.next().find(".tileViewHeader:first")
                    }
                    break;
                case Constants.UP_ARROW_KEY_CODE:
                    var preTileDataId = dataIdConstant + (dataIdSequence - 1);
                    if (targetItem
                        .prev() !=
                        null &&
                        targetItem.prev().length) targetToFocus = $(targetItem.prev()[0]).find(".tileViewHeader:first");
                    else {
                        targetParent = targetItem.closest("tr");
                        targetToFocus = $(targetParent).prev().find(".tileViewHeader:first")
                    }
                    break;
                case Constants.RIGHT_ARROW_KEY_CODE:
                    targetParent = targetItem.closest("td");
                    targetToFocus = $(targetParent).next().find(".tileViewHeader:first");
                    break;
                case Constants.LEFT_ARROW_KEY_CODE:
                    targetParent = targetItem.closest("td");
                    targetToFocus = $(targetParent).prev().find(".tileViewHeader:first");
                    break;
                case Constants.F8_KEY_CODE:
                    $('[data-id="PanelsView"]').parent().focus();
                    return false;
                    break;
                case Constants.TAB_KEY_CODE:
                    e.shiftKey && this.dismissPopup()
                }
                targetToFocus != null && $(targetToFocus).focus();
                this.props["isTileViewIntroScreenReaderTextSet"] != null &&
                    $(ReactDOM.findDOMNode(this)).find(".tileViewHeader")[0] != null &&
                    $($(ReactDOM.findDOMNode(this)).find(".tileViewHeader")[0])
                    .attr("aria-label", this.props.dataContext.screenReaderTextForTileHeader());
                !this.isTileFocused(dataId) && this.dismissPopup()
            };
            TileViewSpec.prototype.focusTileElement = function(queuePanelDataId) {
                var elementToFocus = $('[data-id="' + queuePanelDataId + '"]');
                elementToFocus != null && elementToFocus.focus()
            };
            TileViewSpec.prototype.isTileFocused = function(tileDataId) {
                return $('[data-id="' + tileDataId + '"]').is(":focus")
            };
            TileViewSpec.prototype.dismissPopup = function() { this.setState({ isItemListVisible: false }) };
            TileViewSpec.prototype.dismissPopupKeyDown = function(e) {
                (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) &&
                    this.setState({ isItemListVisible: false })
            };
            TileViewSpec.prototype.handlePopupKeyDown = function(e) {
                e.keyCode == Constants.ESCAPE_KEY_CODE && this.setState({ isItemListVisible: false })
            };
            TileViewSpec.prototype.getPopupHeader = function() {
                var title = this.props.dataContext.get_StreamName(),
                    len = this.props.dataContext.get_QueueItemCount(),
                    header = [],
                    itemCount = React.DOM.span({
                            key: "tilePopupHeader-itemcount",
                            className: "tilePopupHeader-itemcount"
                        },
                        len),
                    popupTitle = React.DOM.span({
                            key: "tilePopupHeader-title",
                            className: "tilePopupHeader-title",
                            title: title
                        },
                        title);
                header.push(itemCount);
                header.push(popupTitle);
                return React.DOM.div({ key: "tilePopupHeader-header", className: "tilePopupHeader" }, header)
            };
            TileViewSpec.prototype.getPopupContent = function() {
                for (var queueItemViewModels = this.props.dataContext.get_QueueItemViewModels(),
                    contentChildren = [],
                    itemIdArray = this.props.dataContext.get_QueueItemIdArray(),
                    i = 0;
                    i < itemIdArray.length;
                    i++) {
                    var keyValue = "queuePanelItem-" + i.toString(),
                        s = QueueItem.QueueItem({
                            clientContext: this.props.clientContext,
                            parentList: this.props.dataContext,
                            dataContext: queueItemViewModels[itemIdArray[i]],
                            key: keyValue,
                            isCondensed: true,
                            dataId: this.props.dataId + keyValue,
                            tabIndex: this.props.tabIndex,
                            screenReaderParentInfoText: i == 0
                                ? this.props.dataContext.screenReaderTextForTilePopup()
                                : "",
                            onEscKeyDown: this.dismissPopup,
                            onMouseEnter: AccessibilityUtility.handleOnMouseEnter
                        });
                    contentChildren.push(s)
                }
                return ScrollRegion.ScrollRegion({
                        key: "tilePopupContent-content",
                        className: "tilePopupContent",
                        onScrollEnd: this.handleScrollEnd,
                        scrollState: this.props.dataContext,
                        viewModelId: this.props.dataContext.get_Id(),
                        onKeyDown: this.handlePopupKeyDown
                    },
                    contentChildren)
            };
            TileViewSpec.prototype.handleScrollEnd = function(e) {
                this.props.dataContext.get_MoreNextPage() &&
                    this.isScrollBottomHit(e) &&
                    this.props.dataContext.loadMoreData()
            };
            TileViewSpec.prototype.isScrollBottomHit = function(e) {
                var scrollBottom = e.scrollTop + e.scrollContentHeight,
                    scrollTarget = e.scrollHeight - this.scrollPagingTriggerPadding;
                return scrollBottom >= scrollTarget
            };
            TileViewSpec.prototype.renderPopupItems = function() {
                var children = [];
                children.push(this.getPopupHeader());
                this.props.dataContext.get_IsLoading() &&
                    children.push(ProgressIndicator
                        .ProgressIndicator({
                            key: "loadingPopupQueue",
                            type: ProgressIndicator.ProgressIndicatorType.Bar,
                            active: true
                        }));
                children.push(this.getPopupContent());
                return children
            };
            TileViewSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                var children = this.getTileBody();
                return React.DOM.div({
                        key: this.props.dataContext.get_StreamId(),
                        className: "tileView" + this.props.dataContext.get_DashboardCategory(),
                        "data-recordid": this.props.dataContext.get_StreamId()
                    },
                    children)
            };
            return TileViewSpec
        }(TsAdapter.SpecBase);
        exports.TileView = DataWrapperComponent.wrapComponent(new TileViewSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/ButtonStrip/ButtonStrip",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/ComponentFactory", "Utils/CssClassSet", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, ComponentFactory, CssClassSet, Constants) {
        exports.DESCRIPTOR_NAME = "ButtonStrip";
        (function(ButtonStripOrientation) {
            ButtonStripOrientation[ButtonStripOrientation["Vertical"] = 0] = "Vertical";
            ButtonStripOrientation[ButtonStripOrientation["Horizontal"] = 1] = "Horizontal"
        })(exports.ButtonStripOrientation || (exports.ButtonStripOrientation = {}));
        var ButtonStripOrientation = exports.ButtonStripOrientation,
            ButtonStripSpec = function(_super) {
                __extends(ButtonStripSpec, _super);

                function ButtonStripSpec() {
                    _super.apply(this, arguments);
                    this.displayName = "ButtonStrip";
                    this.listenToProperties = ["Visible"]
                }

                ButtonStripSpec.prototype.handleOnClick = function(buttonID, e, additionalParams) {
                    if (this.props.dataContext.get_Enabled())
                        if (this.props
                            .onClickEvents &&
                            this.props.onClickEvents[buttonID]) this.props.onClickEvents[buttonID](e, additionalParams);
                        else this.props.onClick && this.props.onClick(buttonID, e, additionalParams)
                };
                ButtonStripSpec.prototype.handleOnKeyDown = function(buttonID, e, additionalParams) {
                    (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) &&
                        this.handleOnClick(buttonID, e, additionalParams)
                };
                ButtonStripSpec.prototype.childDecorator = function(factory, childProps) {
                    var childViewModel = childProps["dataContext"];
                    childProps["onClick"] = this.handleOnClick.bind(this, childViewModel.get_Id());
                    childProps["onKeyDown"] = this.handleOnKeyDown.bind(this, childViewModel.get_Id());
                    childProps["tabIndex"] = this.props.dataContext.get_StartIndex();
                    return React.DOM.li({
                            key: "button-strip-button" + this.props.dataContext.get_StartIndex(),
                            className: "button-strip-button"
                        },
                        factory(childProps))
                };
                ButtonStripSpec.prototype.render = function() {
                    if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                    var buttonStripClassName = null, buttonStripOrientation = null;
                    if (this.props.descriptor && this.props.descriptor.Properties) {
                        buttonStripClassName = "className" in this.props.descriptor.Properties
                            ? this.props.descriptor.Properties["className"]
                            : this.props.className;
                        buttonStripOrientation = "orientation" in this.props.descriptor.Properties
                            ? this.props.descriptor.Properties["orientation"]
                            : this.props.orientation
                    }
                    var contentChildren = [];
                    contentChildren = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator);
                    return React.DOM.ul({
                            className: CssClassSet(null,
                                "button-strip",
                                buttonStripClassName,
                                buttonStripOrientation
                                ? buttonStripOrientation.toString()
                                : ButtonStripOrientation.Horizontal.toString()),
                            style: this.props.style
                        },
                        contentChildren)
                };
                return ButtonStripSpec
            }(TsAdapter.SpecBase);
        exports.ButtonStrip = DataWrapperComponent.wrapComponent(new ButtonStripSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/QueueContainer/QueueContainer",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Core/Binding/UIHasRenderedMixin", "Components/InteractionCentric/QueueContainer/QueuePanel",
        "Components/InteractionCentric/QueueContainer/TileView",
        "Components/InteractionCentric/ButtonStrip/ButtonStrip",
        "Components/Common/Constants"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        UIHasRendered,
        QueuePanel,
        TileView,
        ButtonStrip,
        Constants) {
        exports.DESCRIPTOR_NAME = "QueueContainer";
        var TIER_ONE_DASHBOARD = "1",
            TIER_TWO_DASHBOARD = "2",
            QueueContainerSpec = function(_super) {
                __extends(QueueContainerSpec, _super);

                function QueueContainerSpec() {
                    _super.apply(this, arguments);
                    this.displayName = "QueueContainer";
                    this.mixins = [UIHasRendered.Mixin];
                    this.listenToProperties = ["DataChanged"]
                }

                QueueContainerSpec.prototype.handleOnKeyDown = function(e) {
                    if (e.keyCode == Constants.F8_KEY_CODE) {
                        this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                        return false
                    }
                };
                QueueContainerSpec.prototype.componentDidMount = function() {
                    if ($("#queueContainerScreenReadableElementId").length == 0) {
                        var screenReaderElement = $("<div>");
                        screenReaderElement.attr("id", "queueContainerScreenReadableElementId");
                        screenReaderElement.attr("class", "onlyScreenReadableContent");
                        screenReaderElement.attr("aria-live", "polite");
                        screenReaderElement.attr("aria-atomic", "true");
                        $("#queueContainerId").append(screenReaderElement)
                    }
                };
                QueueContainerSpec.prototype.renderView = function() {
                    var streamViewModels = this.props.dataContext.get_StreamViewModels(),
                        viewType = this.props.dataContext.get_ViewType(),
                        children = [];
                    if (streamViewModels)
                        for (var i = 0; i < streamViewModels.length; i++) {
                            var keyValue = "queuePanel-" + i.toString(),
                                props = {
                                    key: keyValue,
                                    parentGivenKey: keyValue,
                                    clientContext: this.props.clientContext,
                                    tabIndex: this.props.dataContext.get_StartIndex(),
                                    dataContext: streamViewModels[i],
                                    dataId: keyValue
                                };
                            if (viewType == 1) {
                                props["tabIndex"] = this.props.dataContext.get_StartIndex();
                                if (i == 0 && this.props.dataContext.get_DashboardCategory() == TIER_ONE_DASHBOARD
                                ) props["isTileViewIntroScreenReaderTextSet"] = true;
                                children.push(TileView.TileView(props))
                            } else children.push(QueuePanel.QueuePanel(props))
                        }
                    return children
                };
                QueueContainerSpec.prototype.handleRadioClick = function(e, value) {
                    if (value == "PanelsView") this.props.dataContext.set_ViewType(0);
                    else value == "TilesView" && this.props.dataContext.set_ViewType(1)
                };
                QueueContainerSpec.prototype.getOnClickEvents = function() {
                    var onClickEvents = {};
                    onClickEvents["RadioButtonGroup"] = this.handleRadioClick;
                    return onClickEvents
                };
                QueueContainerSpec.prototype.render = function() {
                    var children = [], clickEvents = this.getOnClickEvents();
                    if (this.props.dataContext
                        .get_DashboardCategory() ==
                        TIER_ONE_DASHBOARD)
                        var switcherPanel = ButtonStrip
                                .ButtonStrip({
                                        dataContext: this.props.dataContext.get_SwitcherPanelViewModel(),
                                        clientContext: this.props.clientContext,
                                        descriptor: this.props.descriptor.ChildControlViewDescriptors["ButtonStrip"],
                                        onClickEvents: clickEvents
                                    },
                                    null),
                            footer = React.DOM.div({ key: "QueueContainerFooter", className: "footer" },
                                React.DOM.div({
                                        className: "button-strip majorComponent",
                                        tabIndex: this.props.dataContext.get_StartIndex(),
                                        onKeyDown: this.handleOnKeyDown
                                    },
                                    switcherPanel));
                    children = this.renderView();
                    var queueContainerClassName = "queueContainer", viewType = this.props.dataContext.get_ViewType();
                    if (viewType == 1 && this.props.dataContext.get_DashboardCategory() == TIER_TWO_DASHBOARD
                    ) queueContainerClassName = "queueContainerTier2Tiles";
                    return React.DOM.div({ className: queueContainerClassName, id: "queueContainerId" },
                        [children, footer])
                };
                return QueueContainerSpec
            }(TsAdapter.SpecBase);
        exports.QueueContainer = DataWrapperComponent.wrapComponent(new QueueContainerSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/RadioButtonGroup/RadioButtonGroup",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent", "Utils/CssClassSet",
        "Components/ComponentFactory"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, CssClassSet, ComponentFactory) {
        exports.DESCRIPTOR_NAME = "RadioButtonGroup";
        var RadioButtonGroupSpec = function(_super) {
            __extends(RadioButtonGroupSpec, _super);

            function RadioButtonGroupSpec() {
                _super.apply(this, arguments);
                this.displayName = "RadioButtonGroup";
                this.listenToProperties = ["Visible", "CurrentSelectedValue"]
            }

            RadioButtonGroupSpec.prototype.handleOnChange = function(e, value) {
                if (this.props.dataContext.get_Enabled()) {
                    e.preventDefault();
                    this.props.dataContext.set_CurrentSelectedValue(value);
                    this.props.onChange && this.props.onChange(e, value);
                    this.props.onClick && this.props.onClick(e, value)
                }
            };
            RadioButtonGroupSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["onChange"] = this.handleOnChange;
                childProps["nameAttribute"] = this.props.dataContext.get_NameAttribute();
                childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            RadioButtonGroupSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                var radioButtonGroupClassName = null;
                if (this.props
                    .descriptor &&
                    this.props.descriptor.Properties)
                    radioButtonGroupClassName = "className" in this.props.descriptor.Properties
                        ? this.props.descriptor.Properties["className"]
                        : this.props.className;
                var radioButtons = [];
                radioButtons = ComponentFactory
                    .createChildComponents(this.props.dataContext,
                        this.props.descriptor,
                        this.props.clientContext,
                        this.childDecorator);
                for (var isDefaultChecked = true, radiobtnCnt = 0; radiobtnCnt < radioButtons.length; radiobtnCnt++)
                    if (radioButtons[radiobtnCnt].props.dataContext.get_IsChecked()) {
                        isDefaultChecked = false;
                        break
                    }
                isDefaultChecked == true && radioButtons[0].props.dataContext.set_IsChecked(true);
                return React.DOM.div({
                        key: "radio-button-group",
                        className: CssClassSet(null, "radio-button-group", radioButtonGroupClassName),
                        style: this.props.style
                    },
                    radioButtons)
            };
            return RadioButtonGroupSpec
        }(TsAdapter.SpecBase);
        exports.RadioButtonGroup = DataWrapperComponent.wrapComponent(new RadioButtonGroupSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/RadioButtonGroup/RadioButton",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent", "Utils/CssClassSet",
        "Components/Primitives/FontIcon", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, CssClassSet, FontIcon, Constants) {
        exports.DESCRIPTOR_NAME = "RadioButton";
        var RadioButtonSpec = function(_super) {
            __extends(RadioButtonSpec, _super);

            function RadioButtonSpec() {
                _super.apply(this, arguments);
                this.displayName = "RadioButton";
                this.listenToProperties = ["Visible", "IsChecked", "Label"]
            }

            RadioButtonSpec.prototype.handleOnChange = function(e) {
                if (this.props.dataContext.get_Enabled()) {
                    !this.props.dataContext.get_IsChecked() &&
                        this.props.dataContext.set_IsChecked(!this.props.dataContext.get_IsChecked());
                    if (this.props.onChange) {
                        e.preventDefault();
                        this.props.onChange(e, this.props.dataContext.get_Value())
                    }
                }
            };
            RadioButtonSpec.prototype.handleOnKeyDown = function(e) {
                if (e.key === Constants.ENTER_KEY || e.key === Constants.SPACE_KEY) this.handleOnChange(e);
                else if (e.key === Constants.RIGHT_ARROW_KEY) {
                    if ($('[data-id="TilesView"]') != null)
                        if ($('[data-id="TilesView"]').parent() != null) {
                            $('[data-id="TilesView"]').parent().focus();
                            return false
                        }
                } else if (e.key === Constants.LEFT_ARROW_KEY) {
                    if ($('[data-id="PanelsView"]') != null)
                        if ($('[data-id="PanelsView"]').parent() != null) {
                            $('[data-id="PanelsView"]').parent().focus();
                            return false
                        }
                } else if (e.key === Constants.F8_KEY) {
                    this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                    return false
                }
            };
            RadioButtonSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                var radioButtonClassName = null, radioButtonStyle = null;
                if (this.props
                    .descriptor &&
                    this.props.descriptor.Properties)
                    radioButtonClassName = "className" in this.props.descriptor.Properties
                        ? this.props.descriptor.Properties["className"]
                        : this.props.className;
                var label;
                if (this.props.dataContext
                    .get_DisplayLabel() &&
                    this.props.dataContext.get_Label())
                    label = React.DOM.span({
                            key: "checked-label",
                            className: CssClassSet({ checked: this.props.dataContext.get_IsChecked() }, "label"),
                            onClick: this.handleOnChange,
                            onKeyDown: this.handleOnKeyDown
                        },
                        this.props.dataContext.get_Label());
                var children = [];
                if (!this.props.dataContext.get_SymbolName()) {
                    var radioInput = React.DOM.input({
                        "data-id": this.props.dataContext.get_Value(),
                        key: "radio-input",
                        type: "radio",
                        className: CssClassSet({ checked: this.props.dataContext.get_IsChecked() },
                            "radio-button",
                            radioButtonClassName),
                        disabled: !this.props.dataContext.get_Enabled(),
                        style: radioButtonStyle,
                        tabIndex: this.props.tabIndex,
                        value: this.props.dataContext.get_Value(),
                        name: this.props.nameAttribute,
                        checked: this.props.dataContext.get_IsChecked() ? this.props.dataContext.get_IsChecked() : null,
                        onChange: this.handleOnChange,
                        onKeyDown: this.handleOnKeyDown
                    });
                    children.push(React.DOM.div({ key: "radio-input-div" }, [radioInput, label]))
                } else {
                    var fontIcon = FontIcon.FontIcon({
                                dataId: this.props.dataContext.get_Value(),
                                key: "radio-fontIcon",
                                symbolName: this.props.dataContext.get_SymbolName(),
                                className: CssClassSet({ checked: this.props.dataContext.get_IsChecked() },
                                    "radio-button",
                                    radioButtonClassName),
                                style: radioButtonStyle
                            },
                            label),
                        imageSpan = React.DOM.span({
                                key: "radio-fontIconSpan",
                                className: "radio-fontIcon",
                                onClick: this.handleOnChange
                            },
                            fontIcon);
                    children.push(imageSpan)
                }
                var isEllipsis = this.props.descriptor &&
                        this.props.descriptor.Properties &&
                        "isEllipsis" in this.props.descriptor.Properties
                        ? this.props.descriptor.Properties["isEllipsis"]
                        : false,
                    radioButtonContainer = React.DOM.div({
                            key: "radio-button-container",
                            className: CssClassSet({
                                    checked: this.props.dataContext.get_IsChecked(),
                                    ellipsisClass: isEllipsis
                                },
                                "radio-button-container"),
                            title: this.props.clientContext.getLocalizedString(this.props.dataContext.get_Title()),
                            tabIndex: this.props.dataContext.get_NextTabIndex(),
                            onKeyDown: this.handleOnKeyDown,
                            role: "link"
                        },
                        children);
                return radioButtonContainer
            };
            return RadioButtonSpec
        }(TsAdapter.SpecBase);
        exports.RadioButton = DataWrapperComponent.wrapComponent(new RadioButtonSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/QuickAction/QuickActionInteractionWall",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/InteractionCentric/QuickAction/QuickActionButton", "Components/Primitives/Popup",
        "Components/Common/Constants", "Components/Common/AccessibilityUtility"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        QuickActionButton,
        Popup,
        Constants,
        AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "QuickActionInteractionWall";
        var QuickActionInteractionWallSpec = function(_super) {
            __extends(QuickActionInteractionWallSpec, _super);

            function QuickActionInteractionWallSpec() {
                _super.apply(this, arguments);
                this.displayName = "QuickActionInteractionWall";
                this.listenToProperties = ["InteractionWallQuickActionPopup", "QuickActionButtonCreated"]
            }

            QuickActionInteractionWallSpec.prototype
                .togglePopup = function() {
                    this.props.dataContext
                        .set_interactionWallQuickActionPopup(!this.props.dataContext
                            .get_interactionWallQuickActionPopup())
                };
            QuickActionInteractionWallSpec.prototype.handleKeyDown = function(e) {
                var targetElement = e.target;
                switch (e.keyCode) {
                case Constants.ESCAPE_KEY_CODE:
                case Constants.TAB_KEY_CODE:
                    if (e
                        .keyCode ===
                        Constants.TAB_KEY_CODE &&
                        AccessibilityUtility.doesNextElementExist(targetElement, e)) break;
                    this.closePopup();
                    var popupIconButton = this.refs["InteractionWallPopupIconButton"];
                    popupIconButton instanceof Element && $(popupIconButton).focus();
                    break;
                default:
                    break
                }
            };
            QuickActionInteractionWallSpec.prototype
                .closePopup = function() {
                    this.props.dataContext.get_interactionWallQuickActionPopup() &&
                        this.props.dataContext.set_interactionWallQuickActionPopup(false)
                };
            QuickActionInteractionWallSpec.prototype.render = function() {
                for (var children = [],
                    popupChildren = [],
                    childViewModels = this.props.dataContext.getQuickActionButtonViewModels(),
                    count = this.props.dataContext.getQuickActionButtonViewModelCount(),
                    i = 0;
                    i < count;
                    i++)
                    popupChildren.push(QuickActionButton
                        .QuickActionButton({
                            key: "quickActionInteractionWall" + i.toString(),
                            clientContext: this.props.clientContext,
                            dataContext: childViewModels[i],
                            id: "quickActionInteractionWall" + i.toString(),
                            cssClassName: "quickActionPopupButton",
                            tabIndex: this.props.tabIndex,
                            onKeyDown: this.handleKeyDown,
                            onMouseEnter: AccessibilityUtility.handleOnMouseEnter
                        }));
                var menuPopup = Popup.Popup({
                            key: "quickActionInteractionWallPopup",
                            visible: this.props.dataContext.get_interactionWallQuickActionPopup(),
                            className: "quickActionInteractionWallPopup",
                            onDismiss: this.closePopup
                        },
                        popupChildren),
                    popupIcon = React.DOM.button({
                            key: "quickActionInteractionWallPopupButton" + this.props.dataContext.get_Id(),
                            onClick: this.togglePopup,
                            title: this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Actions"),
                            className: "quickActionInteractionWallPopupButton",
                            ref: "InteractionWallPopupIconButton",
                            tabIndex: this.props.tabIndex,
                            "aria-label": this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Actions")
                        },
                        "\u2026");
                count != 0 && children.push(popupIcon, menuPopup);
                return React.DOM.div({ className: "quickActionInteractionWallContainer" }, children)
            };
            return QuickActionInteractionWallSpec
        }(TsAdapter.SpecBase);
        exports.QuickActionInteractionWall = DataWrapperComponent.wrapComponent(new QuickActionInteractionWallSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/InteractionWall/InteractionWallEvent",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Core/Binding/PureUpdateMixin",
        "Components/Primitives/FontIcon", "Components/Common/Image", "Components/Primitives/Button",
        "Components/InteractionCentric/QuickAction/QuickActionInteractionWall", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, PureUpdate, FontIcon, Image, Button, QuickActionInteractionWall, Constants) {
        exports.DESCRIPTOR_NAME = "InteractionWallEvent";
        var InteractionWallEventSpec = function(_super) {
            __extends(InteractionWallEventSpec, _super);

            function InteractionWallEventSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionWallEvent";
                this.mixins = [PureUpdate.Mixin];
                this.screenReaderTextForInteractionWallItemState = "";
                this.screenReaderTextForInteractionWallItemPriority = "";
                this.screenReaderTextForInteractionWallItem = "";
                this.isFirstRender = true
            }

            InteractionWallEventSpec.prototype.getCreatedBy = function() {
                return React.DOM.span({ key: "editHeader" + this.props.dataContext.get_CreatedBy() },
                    this.props.dataContext.get_CreatedBy() + " . ")
            };
            InteractionWallEventSpec.prototype.getCreatedByString = function() {
                var type = this.props.dataContext.get_ActivityType();
                if (type === 0 || type === 3 || type === 2) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItem +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_CreatedBy") + " ";
                    return React.DOM.span({ key: "InteractionWallEventCreatedByString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_CreatedBy") + "  ")
                } else if (type === 7) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItem +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_PostBy") + " ";
                    return React.DOM.span({ key: "InteractionWallEventCreatedByString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_PostBy") + "  ")
                } else if (type === 5) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItem +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_NoteBy") + " ";
                    return React.DOM.span({ key: "InteractionWallEventCreatedByString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_NoteBy") + "  ")
                } else if (type === 4) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItem +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_ResolvedBy") + " ";
                    return React.DOM.span({ key: "InteractionWallEventCreatedByString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_ResolvedBy") + "  ")
                } else {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItem +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_CreatedBy") + " ";
                    return React.DOM.span({ key: "InteractionWallEventCreatedByString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_CreatedBy") + "  ")
                }
            };
            InteractionWallEventSpec.prototype.getTimeStampString = function() {
                if (this.isFirstRender)
                    this.screenReaderTextForInteractionWallItem += ". " + this.props.dataContext.get_TimeStamp() + ". ";
                return React.DOM.span({ key: "editHeader" + this.props.dataContext.get_TimeStamp() },
                    this.props.dataContext.get_TimeStamp())
            };
            InteractionWallEventSpec.prototype.getStartDate = function() {
                return React.DOM.span({ key: "editHeader" + this.props.dataContext.get_StartDate() },
                    this.props.dataContext.get_StartDate())
            };
            InteractionWallEventSpec.prototype
                .getStartDateString = function() {
                    return React.DOM.span({ key: "startDateString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_StartDate") + "  ")
                };
            InteractionWallEventSpec.prototype.getEndDate = function() {
                return React.DOM.span({ key: "editHeader" + this.props.dataContext.get_EndDate() },
                    this.props.dataContext.get_EndDate())
            };
            InteractionWallEventSpec.prototype
                .getEndDateString = function() {
                    return React.DOM.span({ key: "endDateString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_EndDate") + "  ")
                };
            InteractionWallEventSpec.prototype.getPriority = function() {
                var priority = this.props.dataContext.get_Priority();
                if (priority == 0) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItemPriority +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_High") + ". ";
                    return React.DOM.span({ key: "editHeader" + priority },
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_High"))
                } else if (priority == 1) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItemPriority +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Normal") + ". ";
                    return React.DOM.span({ key: "editHeader" + priority },
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Normal"))
                } else {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItemPriority +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Low") + ". ";
                    return React.DOM.span({ key: "editHeader" + priority },
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Low"))
                }
            };
            InteractionWallEventSpec.prototype
                .getPriorityString = function() {
                    return React.DOM.span({ key: "InteractionWallEventPriorityString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Priority") + "  ")
                };
            InteractionWallEventSpec.prototype.getState = function() {
                var state = this.props.dataContext.get_State();
                if (state == 0) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItemState +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Open") + ". ";
                    return React.DOM.span({ key: "editHeader" + state },
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Open"))
                } else if (state == 1) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItemState +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Completed") + ". ";
                    return React.DOM.span({ key: "editHeader" + state },
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Completed"))
                } else if (state == 2) {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItemState +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Canceled") + ". ";
                    return React.DOM.span({ key: "editHeader" + state },
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Canceled"))
                } else {
                    if (this.isFirstRender)
                        this
                            .screenReaderTextForInteractionWallItemState +=
                            this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Scheduled") + ". ";
                    return React.DOM.span({ key: "editHeader" + state },
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Scheduled"))
                }
            };
            InteractionWallEventSpec.prototype
                .getStateString = function() {
                    return React.DOM.span({ key: "InteractionWallEventStateString" },
                        "  " + this.props.clientContext.getLocalizedString("L_InteractionWallEvent_State") + "  ")
                };
            InteractionWallEventSpec.prototype.getCreatedByInfo = function() {
                var createdByInfo = [];
                createdByInfo.push(this.getCreatedByString());
                createdByInfo.push(this.getCreatedBy());
                if (this.isFirstRender)
                    this.screenReaderTextForInteractionWallItem += this.props.dataContext.get_CreatedBy();
                return React.DOM.span({ key: "createdbyinfo" }, createdByInfo)
            };
            InteractionWallEventSpec.prototype.getStartDateInfo = function() {
                var startDateInfo = [];
                startDateInfo.push(this.getStartDateString());
                startDateInfo.push(this.getStartDate());
                if (this.isFirstRender)
                    this
                        .screenReaderTextForInteractionWallItem +=
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_StartDate") +
                        " " +
                        this.props.dataContext.get_StartDate() +
                        " ";
                return React.DOM.span({ key: "startdateinfo" }, startDateInfo)
            };
            InteractionWallEventSpec.prototype.getEndDateInfo = function() {
                var endDateInfo = [];
                endDateInfo.push(this.getEndDateString());
                endDateInfo.push(this.getEndDate());
                if (this.isFirstRender)
                    this
                        .screenReaderTextForInteractionWallItem +=
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_EndDate") +
                        " " +
                        this.props.dataContext.get_EndDate() +
                        ". ";
                return React.DOM.span({ key: "endDateInfo" }, endDateInfo)
            };
            InteractionWallEventSpec.prototype.getPriorityInfo = function() {
                var priorityInfo = [];
                priorityInfo.push(this.getPriorityString());
                if (this.isFirstRender)
                    this
                        .screenReaderTextForInteractionWallItemPriority +=
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_Priority") + " ";
                priorityInfo.push(this.getPriority());
                return React.DOM.span({ key: "priorityInfo" }, priorityInfo)
            };
            InteractionWallEventSpec.prototype.getStateInfo = function() {
                var stateInfo = [];
                stateInfo.push(this.getStateString());
                if (this.isFirstRender)
                    this
                        .screenReaderTextForInteractionWallItemState +=
                        this.props.clientContext.getLocalizedString("L_InteractionWallEvent_State") + " ";
                stateInfo.push(this.getState());
                return React.DOM.span({ key: "stateInfo" }, stateInfo)
            };
            InteractionWallEventSpec.prototype
                .handleEnterkeyDown = function(e) { e.keyCode == Constants.ENTER_KEY_CODE && this.handleItemClick() };
            InteractionWallEventSpec.prototype.getSubject = function() {
                var isInteractionCentricEnabled = this.props.dataContext.get_IsInteractionCentricEnabled();
                if (this.isFirstRender)
                    this.screenReaderTextForInteractionWallItem += this.props.dataContext.get_Subject() + ". ";
                if (!isInteractionCentricEnabled)
                    return React.DOM.div({
                            key: "editHeader" + this.props.dataContext.get_Subject(),
                            className: "mscrm-InteractionWallEventHeader",
                            title: this.props.dataContext.get_Subject()
                        },
                        React.DOM.p({ className: "truncate" },
                            this.trimWhitespaces(this.props.dataContext.get_Subject())));
                return Button.Button({
                        key: "editHeader" + this.props.dataContext.get_Subject(),
                        className: "mscrm-InteractionWallEventHeader mscrm-InteractionWallEventHeaderButton",
                        onClick: this.handleItemClick,
                        title: this.props.dataContext.get_Subject(),
                        tabIndex: this.props.tabIndex,
                        onKeyDown: this.handleEnterkeyDown,
                        ariaLabel: this.props.dataContext.get_Subject()
                    },
                    React.DOM.p({ className: "truncate" }, this.trimWhitespaces(this.props.dataContext.get_Subject())))
            };
            InteractionWallEventSpec.prototype.getIcon = function(activityType, direction) {
                var iconToRender;
                if (activityType === 2)
                    iconToRender = FontIcon.FontIcon({ className: "mscrm-WallIcons", symbolName: "Appointment" });
                else if (activityType === 1)
                    if (direction === 0)
                        iconToRender = FontIcon.FontIcon({ className: "mscrm-WallIcons", symbolName: "EmailIncoming" });
                    else
                        iconToRender = FontIcon.FontIcon({ className: "mscrm-WallIcons", symbolName: "EmailOutgoing" });
                else if (activityType === 3)
                    if (direction === 0)
                        iconToRender = FontIcon.FontIcon({
                            className: "mscrm-WallIcons",
                            symbolName: "PhoneCallIncoming"
                        });
                    else
                        iconToRender = FontIcon.FontIcon({
                            className: "mscrm-WallIcons",
                            symbolName: "PhoneCallOutgoing"
                        });
                else if (activityType === 8)
                    if (direction === 0)
                        iconToRender = FontIcon.FontIcon({
                            className: "mscrm-WallIcons",
                            symbolName: "SocialActivityIncoming"
                        });
                    else
                        iconToRender = FontIcon.FontIcon({
                            className: "mscrm-WallIcons",
                            symbolName: "SocialActivityOutgoing"
                        });
                else if (activityType === 4)
                    iconToRender = FontIcon.FontIcon({ className: "mscrm-WallIcons", symbolName: "CaseResolve" });
                else if (activityType === 9)
                    iconToRender = FontIcon.FontIcon({ className: "mscrm-WallIcons", symbolName: "CustomActivity" });
                else if (activityType === 0)
                    iconToRender = FontIcon.FontIcon({ className: "mscrm-WallIcons", symbolName: "Task" });
                else iconToRender = FontIcon.FontIcon({ className: "mscrm-WallIcons", symbolName: "SystemPost" });
                var isInteractionCentricEnabled = this.props.dataContext.get_IsInteractionCentricEnabled();
                if (!isInteractionCentricEnabled || activityType === 6) return iconToRender;
                var navigableIcon = Button.Button({
                        key: "editHeaderIcon" + this.props.dataContext.get_Subject(),
                        className: "mscrm-InteractionWallEventHeaderButtonIcon",
                        onClick: this.handleItemClick,
                        title: this.props.dataContext.get_EntityDisplayName()
                    },
                    iconToRender);
                if (this.isFirstRender)
                    this
                        .screenReaderTextForInteractionWallItem +=
                        this.props.dataContext.get_EntityDisplayName() + ". ";
                return navigableIcon
            };
            InteractionWallEventSpec.prototype.createDivForDescription = function() {
                for (var collectionForDescription = [], startString = "`~<", endString = ">~`", count = 0;
                    count < 2;
                    count++) {
                    var divPart = [];
                    if (count == 0) var text = this.props.dataContext.get_Description();
                    if (count == 1) var text = this.props.dataContext.get_StringPartWallForPost();
                    if (text == null) continue;
                    text = text.replace(/\@\[/g, startString).replace(/\]/g, endString);
                    if (count == 0) text = this.trimWhitespaces(text);
                    var elements = text.split(/`~<|>~`/), exit = false, indexStart = 0, indexEnd = 0, matched = [];
                    while (!exit) {
                        indexStart = text.indexOf(startString);
                        indexEnd = text.indexOf(endString);
                        if (indexStart != -1 && indexEnd != -1) {
                            matched.push(text.substr(indexStart + startString.length,
                                indexEnd - indexStart - startString.length));
                            text = text.substr(indexEnd + endString.length)
                        } else exit = true
                    }
                    for (var i = 0; i < elements.length; i++)
                        if (matched.indexOf(elements[i]) > -1) {
                            if (count == 0) {
                                var tuple = elements[i].split(/,/), name = tuple[2].replace(/"/g, "");
                                divPart.push(React.DOM.button({
                                        key: "key_interactionWall" + elements[i] + i.toString(),
                                        className: this.props.dataContext.IsEntityInteractionCentricEnabled(tuple[0]) ==
                                            true
                                            ? "mscrm-InteractionWall-button"
                                            : "mscrm-InteractionWall-nonIC-button",
                                        onClick: this.props.dataContext.IsEntityInteractionCentricEnabled(tuple[0]) ==
                                            true
                                            ? this.handleTargetEntityItemClick.bind(this, +tuple[0], tuple[1])
                                            : null,
                                        title: name
                                    },
                                    name));
                                if (this.isFirstRender) this.screenReaderTextForInteractionWallItem += name + " "
                            } else if (count == 1) {
                                divPart.push(React.DOM.button({
                                        key: "key_interactionWall" + elements[i] + i.toString(),
                                        className: this.props.dataContext.get_IsInteractionCentricEnabled() == true
                                            ? "mscrm-InteractionWall-button"
                                            : "mscrm-InteractionWall-nonIC-button",
                                        onClick: this.props.dataContext.get_IsInteractionCentricEnabled() == true
                                            ? this.handleItemClick
                                            : null,
                                        title: elements[i]
                                    },
                                    elements[i]));
                                if (this.isFirstRender) this.screenReaderTextForInteractionWallItem += elements[i] + " "
                            }
                        } else {
                            divPart.push(React.DOM.span({
                                    key: "key_interactionWall" + elements[i] + i.toString(),
                                    className: "mscrm-InteractionWall"
                                },
                                elements[i]));
                            if (this.isFirstRender) this.screenReaderTextForInteractionWallItem += elements[i] + " "
                        }
                    this.screenReaderTextForInteractionWallItem += ". ";
                    collectionForDescription.push(React.DOM
                        .div({ key: "key_interactionWall-divPart" + count, className: "mscrm-InteractionWall-divPart" },
                            divPart))
                }
                return collectionForDescription
            };
            InteractionWallEventSpec.prototype.trimWhitespaces = function(text) {
                if (!text) return text;
                return text.replace(/\s+/g, " ").trim()
            };
            InteractionWallEventSpec.prototype
                .getDescription = function() {
                    return React.DOM.div({
                            key: "editHeaderDescription",
                            className: "mscrm-InteractionWallTruncatableContent"
                        },
                        this.createDivForDescription())
                };
            InteractionWallEventSpec.prototype
                .getIframeDescription = function() {
                    return React.DOM.iframe({
                        sandbox: "allow-same-origin",
                        key: "editHeaderIframeDescription",
                        className: "mscrm-InteractionWallEventIFrameContent",
                        ref: "IFrameContent"
                    })
                };
            InteractionWallEventSpec.prototype
                .handleUserClick = function() { this.props.dataContext.navigateToUserRecord() };
            InteractionWallEventSpec.prototype
                .handleItemClick = function() { this.props.dataContext.navigateToItemRecord() };
            InteractionWallEventSpec.prototype
                .handleTargetEntityItemClick = function(id, guid) {
                    this.props.dataContext.navigateToTargetEntityItemRecord(id, guid)
                };
            InteractionWallEventSpec.prototype
                .handleExpandClick = function() { this.setState({ expanded: !this.state.expanded }) };
            InteractionWallEventSpec.prototype.getInitialState = function() { return { expanded: false } };
            InteractionWallEventSpec.prototype.componentDidUpdate = function() {
                var iframe = this.refs["IFrameContent"];
                if (iframe instanceof HTMLIFrameElement) {
                    if (iframe.contentDocument.body != null) iframe.contentDocument.body.innerHTML = "";
                    iframe.contentDocument.write(this.props.dataContext.get_Description())
                }
            };
            InteractionWallEventSpec.prototype.handleOnKeydown = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    break;
                case Constants.DOWN_ARROW_KEY_CODE:
                case Constants.UP_ARROW_KEY_CODE:
                    var currentElement = e.currentTarget,
                        itemToFocus = e.keyCode == Constants.DOWN_ARROW_KEY_CODE
                            ? currentElement.nextSibling
                            : currentElement.previousSibling;
                    e.preventDefault();
                    itemToFocus != null && $(itemToFocus).focus();
                    break
                }
            };
            InteractionWallEventSpec.prototype.render = function() {
                var activityType = this.props.dataContext.get_ActivityType(),
                    startDate = this.props.dataContext.get_StartDate(),
                    endDate = this.props.dataContext.get_EndDate(),
                    priority = this.props.dataContext.get_Priority(),
                    state = this.props.dataContext.get_State(),
                    interactionWallItem = [],
                    interactionWallIcon,
                    direction = this.props.dataContext.get_ResultDirection();
                if (activityType === 7 || activityType === 5)
                    interactionWallIcon = Image.Image({
                        key: "image_userpost",
                        dataContext: this.props.dataContext.get_ImageViewModel(),
                        clientContext: this.props.clientContext,
                        className: "mscrm-ProfileIcon"
                    });
                else interactionWallIcon = this.getIcon(activityType, direction);
                var interactionWallEventMainContent = [];
                interactionWallEventMainContent.push(React.DOM
                    .div({ key: "key_interactionWallEventIcon", className: "mscrm-InteractionWallEventIcon" },
                        interactionWallIcon));
                var interactionWallContent = [],
                    interactionWallStartDateContent = [],
                    interactionWallEndDateContent = [],
                    interactionWallPriorityContent = [],
                    interactionWallStateContent = [];
                interactionWallContent.push(this.getSubject());
                if (activityType === 1) {
                    this.state.expanded && interactionWallContent.push(this.getIframeDescription());
                    var previewButtonLabel = this.state.expanded
                        ? this.props.clientContext.getLocalizedString("L_InteractionWallEvent_HidePreview")
                        : this.props.clientContext.getLocalizedString("L_InteractionWallEvent_ShowPreview");
                    interactionWallContent.push(Button.Button({
                            className: "mscrm-InteractionWallEvent-EmailToggle",
                            key: "mscrm-InteractionWallEvent-EmailToggle",
                            onClick: this.handleExpandClick,
                            title: this.props.clientContext
                                .getLocalizedString("L_InteractionWallEvent_StatutoryWarningTooltip"),
                            tabIndex: this.props.tabIndex,
                            ariaLabel: previewButtonLabel
                        },
                        previewButtonLabel));
                    if (this.isFirstRender) this.screenReaderTextForInteractionWallItem += previewButtonLabel + ". "
                } else interactionWallContent.push(this.getDescription());
                if (activityType === 2 || activityType === 9) {
                    startDate != null &&
                        startDate != "" &&
                        interactionWallStartDateContent.push(this.getStartDateInfo());
                    endDate != null && endDate != "" && interactionWallEndDateContent.push(this.getEndDateInfo())
                }
                interactionWallEventMainContent.push(React.DOM
                    .div({ key: "key_interactionWallEventContent", className: "mscrm-InteractionWallEventContent" },
                        interactionWallContent));
                interactionWallItem.push(React.DOM.div({
                        key: "key_interactionWallEventMainContent",
                        className: "mscrm-InteractionWallEventMainContent"
                    },
                    interactionWallEventMainContent));
                var interactionWallEventAugmentedContent = [];
                if (startDate != null && startDate != "")
                    (activityType === 2 || activityType === 9) &&
                        interactionWallEventAugmentedContent
                        .push(React.DOM.div({
                                key: "key_interactionWallStartDateContent",
                                className: "mscrm-InteractionWallStateItem"
                            },
                            interactionWallStartDateContent));
                if (endDate != null && endDate != "")
                    (activityType === 2 || activityType === 9) &&
                        interactionWallEventAugmentedContent
                        .push(React.DOM.div({
                                key: "key_interactionWallEndDateContent",
                                className: "mscrm-InteractionWallStateItem"
                            },
                            interactionWallEndDateContent));
                (activityType === 2 || activityType === 0) &&
                    interactionWallPriorityContent.push(this.getPriorityInfo());
                interactionWallStateContent.push(this.getStateInfo());
                if (activityType === 3 || activityType === 0 || activityType === 2 || activityType === 9) {
                    interactionWallEventAugmentedContent.push(React.DOM
                        .div({ key: "key_interactionWallPriorityContent", className: "mscrm-InteractionWallStateItem" },
                            interactionWallPriorityContent));
                    if (this.isFirstRender)
                        this.screenReaderTextForInteractionWallItem += this
                            .screenReaderTextForInteractionWallItemPriority
                }
                if (activityType === 3 || activityType === 0 || activityType === 2 || activityType === 9) {
                    interactionWallEventAugmentedContent.push(React.DOM
                        .div({ key: "key_interactionWallStateContent", className: "mscrm-InteractionWallStateItem" },
                            interactionWallStateContent));
                    if (this.isFirstRender)
                        this.screenReaderTextForInteractionWallItem += this.screenReaderTextForInteractionWallItemState
                }
                if (activityType === 5)
                    for (var attachedFilesList = this.props.dataContext.get_AttachedFiles(), i = 0;
                        i < attachedFilesList.get_Count();
                        i++) {
                        var attachedFile = attachedFilesList.get_Items()[i],
                            attachmentLink = React.DOM.a({
                                    href: attachedFile.get_filePath(),
                                    key: "key_interactionWallAttachmentItem-" + i.toString()
                                },
                                attachedFile.get_fileName());
                        if (this.isFirstRender)
                            this.screenReaderTextForInteractionWallItem += attachedFile.get_fileName() + " ";
                        var fileSize = React.DOM.span({ key: "key_interactionWallAttachmentSize-" + i.toString() },
                            " (" + attachedFile.get_fileSizeFormattedString() + ")");
                        if (this.isFirstRender)
                            this
                                .screenReaderTextForInteractionWallItem +=
                                attachedFile.get_fileSizeFormattedString() + ". ";
                        interactionWallEventAugmentedContent
                            .push(React.DOM.div({
                                    key: "key_interactionWallAttachmentContent-" + i.toString(),
                                    className: "mscrm-InteractionWallStateItem"
                                },
                                [FontIcon.FontIcon({ symbolName: "Attach" }), attachmentLink, fileSize]))
                    }
                interactionWallEventAugmentedContent.length > 0 &&
                    interactionWallItem.push(React.DOM.div({
                            key: "key_interactionWallEventAugmentedContent",
                            className: "mscrm-interactionWallEventAugmentedContent"
                        },
                        interactionWallEventAugmentedContent));
                var interactionWallFooter = [], interactionWallFooterLeft = [], interactionWallFooterRight = [];
                activityType != 6 && interactionWallFooterLeft.push(this.getCreatedByInfo());
                interactionWallFooterLeft.push(this.getTimeStampString());
                if (this.props.dataContext.get_IsInteractionCentricEnabled() && activityType != 6) {
                    var quickActionViewModel = this.props.dataContext.get_QuickActionViewModel();
                    quickActionViewModel != null &&
                        interactionWallFooterRight.push(QuickActionInteractionWall
                            .QuickActionInteractionWall({
                                key: "quickActionInteractionWall" + this.props.dataContext.get_Id(),
                                clientContext: this.props.clientContext,
                                dataContext: quickActionViewModel,
                                id: "quickActionInteractionWall" + this.props.dataContext.get_Id(),
                                tabIndex: this.props.tabIndex
                            }))
                }
                interactionWallFooter.push(React.DOM.span({ key: "interactionWallEventFooterLeft" },
                    interactionWallFooterLeft));
                interactionWallFooter.push(React.DOM.span({
                        key: "interactionWallEventFooterRight",
                        className: "mscrm-InteractionWallEventFooterRight"
                    },
                    interactionWallFooterRight));
                interactionWallItem.push(React.DOM.div({
                        key: "key_interactionWallEventFooter",
                        className: "mscrm-InteractionWallEventFooter"
                    },
                    interactionWallFooter));
                this.isFirstRender = false;
                return React.DOM.div({
                        key: "key_interactionWallEventItem",
                        className: "mscrm-InteractionWallEventItem",
                        tabIndex: this.props.tabIndex,
                        onKeyDown: this.handleOnKeydown,
                        title: this.props.dataContext.get_Subject(),
                        "data-id": this.props.dataContext.getResultId(),
                        "data-entity": this.props.dataContext.getEntityLogicalName(),
                        "aria-label": this.props.dataContext
                            .screenReaderTextForInteractionWallItem(this.props.currentElementIndex + 1,
                                this.props.totalRecords,
                                this.screenReaderTextForInteractionWallItem)
                    },
                    interactionWallItem)
            };
            return InteractionWallEventSpec
        }(TsAdapter.SpecBase);
        exports.InteractionWallEvent = TsAdapter.createComponent(new InteractionWallEventSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/InteractionWall/InteractionWallControl",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/Button",
        "Components/Primitives/FontIcon", "Components/InteractionCentric/InteractionWall/InteractionWallEvent",
        "Components/Lists/InteractBarListHeader", "Utils/CssClassSet", "Components/DataWrapperComponent",
        "Core/Binding/RetrieveViewDescriptorMixin", "Components/Primitives/ProgressIndicator",
        "Components/InteractionCentric/DateRangeControl/DateRangeControl", "Components/Common/Constants",
        "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        TsAdapter,
        Button,
        FontIcon,
        InteractionWallEvent,
        InteractBarListHeader,
        CssClassSet,
        DataWrapperComponent,
        RetrieveViewDescriptor,
        ProgressIndicator,
        DateRangePicker,
        Constants,
        FocusHandlerMixin) {
        exports.DESCRIPTOR_NAME = "InteractionWallControl";
        var InteractionWallControlSpec = function(_super) {
            __extends(InteractionWallControlSpec, _super);

            function InteractionWallControlSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionWallControl";
                this.mixins = [RetrieveViewDescriptor.Mixin, FocusHandlerMixin.Mixin];
                this.listenToProperties = ["DataLoadCompleted", "ErrorMessage", "ActiveNavigationStack", "Top"];
                this.searchContainerPrevScreenReaderText = ""
            }

            InteractionWallControlSpec.prototype
                .renderFilterBar = function() {
                    return React.DOM
                        .div({ key: "filterContainer", className: "mscrm-InteractionWallSourceFilterContainer" },
                            [this.renderDateRangeFilter(), this.renderFilterDropDown()])
                };
            InteractionWallControlSpec.prototype.componentDidUpdate = function() {
                var iwSearchBox = this.refs["IWSearchBox"];
                if (this.state.searchVisible && iwSearchBox instanceof HTMLElement) {
                    if ($("#interactionWallOnlyScreenReadableElementId").length == 0) {
                        var screenReaderElement = $("<div>");
                        screenReaderElement.attr("id", "interactionWallOnlyScreenReadableElementId");
                        screenReaderElement.attr("class", "mscrm-onlyScreenReadableContent");
                        screenReaderElement.attr("aria-live", "assertive");
                        screenReaderElement.attr("aria-atomic", "true");
                        $("#InteractionWallSearchContainerId").append(screenReaderElement);
                        this.searchContainerPrevScreenReaderText = ""
                    }
                    var currentScreenReaderText,
                        InteractionWallEventViewModels = this.props.dataContext.get_InteractionWallEventViewModels()
                            .get_Items();
                    if (InteractionWallEventViewModels
                        .length ==
                        0)
                        currentScreenReaderText = this.props.clientContext
                            .getLocalizedString("InteractionWall_Screenreader_DynamicSearchTextForNoRecord");
                    else
                        currentScreenReaderText = this.props.dataContext
                            .screenReaderTextForInteractionWallSearchContainer(InteractionWallEventViewModels.length);
                    if (this.searchContainerPrevScreenReaderText != currentScreenReaderText) {
                        var interactionWallOnlyScreenReaderElement = document
                            .getElementById("interactionWallOnlyScreenReadableElementId");
                        interactionWallOnlyScreenReaderElement.innerHTML = " ";
                        interactionWallOnlyScreenReaderElement.innerHTML = currentScreenReaderText;
                        this.searchContainerPrevScreenReaderText = currentScreenReaderText
                    }
                    this.shouldTakeFocus() && $(iwSearchBox).focus()
                }
            };
            InteractionWallControlSpec.prototype
                .renderDateRangeFilter = function() {
                    return DateRangePicker.DateRangeControl({
                        key: "filterDateRange",
                        clientContext: this.props.clientContext,
                        tabIndex: this.props.tabIndex,
                        dataContext: this.props.dataContext.get_DateRangeViewModel()
                    })
                };
            InteractionWallControlSpec.prototype.renderFilterDropDown = function() {
                var sourceList = this.props.dataContext.get_SourceList(),
                    activeSource = this.props.dataContext.get_ActiveSource(),
                    optionChildren = [];
                optionChildren.push(React.DOM.option({ key: "allText", value: this.props.dataContext.get_AllText() },
                    this.props.dataContext.get_AllText()));
                var i = 0;
                for (var source in sourceList) {
                    optionChildren.push(React.DOM.option({ key: "option" + i, value: sourceList[source] },
                        this.props.clientContext.getLocalizedString(sourceList[source])));
                    i++
                }
                return React.DOM.select({
                        key: "key_interactionWallFilterDropDown",
                        value: this.props.dataContext.get_ActiveSource(),
                        title: this.props.dataContext.get_ActiveSource(),
                        className: "mscrm-InteractionWallSourceFilters",
                        onChange: this.changeFilter,
                        tabIndex: this.props.tabIndex
                    },
                    optionChildren)
            };
            InteractionWallControlSpec.prototype
                .changeFilter = function(e) {
                    e &&
                        e.target &&
                        this.props.dataContext.set_ActiveSource(e.target
                            .value)
                };
            InteractionWallControlSpec.prototype.renderHeader = function() {
                var searchToggle = Button.Button({
                            key: "searchToggle",
                            className: CssClassSet({ visible: this.state.searchVisible },
                                "mscrm-InteractionWallToggle mscrm-InteractionWallSearch"),
                            title: this.state.searchVisible
                                ? this.props.clientContext.getLocalizedString("L_InteractionWall_HideSearch")
                                : this.props.clientContext.getLocalizedString("L_InteractionWall_ShowSearch"),
                            onClick: this.toggleSearchDisplay,
                            onKeyDown: this.handleKeydown,
                            tabIndex: this.props.tabIndex,
                            ariaLabel: this.state.searchVisible
                                ? this.props.clientContext.getLocalizedString("L_InteractionWall_HideSearch")
                                : this.props.clientContext.getLocalizedString("L_InteractionWall_ShowSearch"),
                            ref: "SearchButton"
                        },
                        FontIcon.FontIcon({ symbolName: "SearchButton" })),
                    header = InteractBarListHeader
                        .InteractBarListHeader({
                            key: "header",
                            clientContext: this.props.clientContext,
                            dataContext: this.props.dataContext,
                            descriptor: this.state.viewDescriptor,
                            tabIndex: this.props.tabIndex
                        }),
                    filterToggle = Button.Button({
                            key: "filterToggle",
                            className: CssClassSet({ visible: this.state.filterVisible },
                                "mscrm-InteractionWallToggle mscrm-InteractionWallFilter"),
                            title: this.state.filterVisible
                                ? this.props.clientContext.getLocalizedString("L_InteractionWall_HideFilter")
                                : this.props.clientContext.getLocalizedString("L_InteractionWall_ShowFilter"),
                            onClick: this.toggleFilterDisplay,
                            tabIndex: this.props.tabIndex,
                            ariaLabel: this.state.filterVisible
                                ? this.props.clientContext.getLocalizedString("L_InteractionWall_HideFilter")
                                : this.props.clientContext.getLocalizedString("L_InteractionWall_ShowFilter")
                        },
                        FontIcon.FontIcon({ symbolName: "Filter" }));
                return React.DOM.div({ key: "mscrm-interactionWallHeader", className: "mscrm-interactionWallHeader" },
                    [this.renderRefreshButton(), header, searchToggle, filterToggle])
            };
            InteractionWallControlSpec.prototype.toggleSearchDisplay = function() {
                this.setState({ searchVisible: !this.state.searchVisible });
                this.clearSearch()
            };
            InteractionWallControlSpec.prototype.handleKeydown = function(e) {
                switch (e.keyCode) {
                case Constants.ENTER_KEY_CODE:
                    this.toggleSearchDisplay();
                    break
                }
            };
            InteractionWallControlSpec.prototype.toggleFilterDisplay = function() {
                this.setState({ filterVisible: !this.state.filterVisible });
                this.props.dataContext.resetAllFilters(this.state.filterVisible)
            };
            InteractionWallControlSpec.prototype
                .renderSearchBar = function() {
                    return React.DOM.input({
                        key: "SearchBox",
                        "data-id": "searchText",
                        ref: "IWSearchBox",
                        className: "mscrm-InteractionWallSearchBar",
                        tabIndex: this.props.tabIndex,
                        placeholder: this.props.clientContext.getLocalizedString("L_InteractionWall_SearchPlaceholder"),
                        onKeyDown: this.performSearch
                    })
                };
            InteractionWallControlSpec.prototype.renderSearchButton = function() {
                var symbolName;
                if (this.props.dataContext.get_SearchActive()) symbolName = "Cancel";
                else symbolName = "SearchButton";
                return Button.Button({
                        key: "SearchButton",
                        dataId: "searchImage",
                        onClick: this.clickSearch,
                        title: this.props.dataContext.get_SearchActive()
                            ? this.props.clientContext.getLocalizedString("L_InteractionWall_ClearSearch")
                            : this.props.clientContext.getLocalizedString("L_InteractionWall_StartSearch"),
                        className: "mscrm-InteractionWallSearchIcon",
                        tabIndex: this.props.tabIndex,
                        ariaLabel: this.props.dataContext.get_SearchActive()
                            ? this.props.clientContext.getLocalizedString("L_InteractionWall_ClearSearch")
                            : this.props.clientContext.getLocalizedString("L_InteractionWall_StartSearch")
                    },
                    FontIcon.FontIcon({ symbolName: symbolName }))
            };
            InteractionWallControlSpec.prototype
                .renderMoreResultButton = function() {
                    return Button.Button({
                            key: "MoreResults",
                            className: "mscrm-InteractionWallMoreResults",
                            onClick: this.loadMoreResults,
                            tabIndex: this.props.tabIndex
                        },
                        this.props.clientContext.getLocalizedString("L_InteractionWall_MoreResults"))
                };
            InteractionWallControlSpec.prototype
                .renderRefreshButton = function() {
                    return Button.Button({
                            key: "InteractionWallRefresh",
                            onClick: this.refreshResults,
                            className: "mscrm-InteractionWallRefreshButton",
                            title: this.props.clientContext
                                .getLocalizedString("Mobile_Preview_No_Records_Refresh_Button"),
                            tabIndex: this.props.tabIndex,
                            ariaLabel: this.props.clientContext
                                .getLocalizedString("Mobile_Preview_No_Records_Refresh_Button")
                        },
                        FontIcon.FontIcon({ symbolName: "Refresh" }))
                };
            InteractionWallControlSpec.prototype.refreshResults = function() { this.props.dataContext.refreshData() };
            InteractionWallControlSpec.prototype
                .loadMoreResults = function() { this.props.dataContext.loadMoreResults() };
            InteractionWallControlSpec.prototype.performSearch = function(e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE)
                    this.props.dataContext.SetSearchText(this.refs["IWSearchBox"].value, true);
                else if (e.keyCode == Constants.ESCAPE_KEY_CODE) {
                    this.setState({ searchVisible: false });
                    var buttonComponent = this.refs["SearchButton"];
                    buttonComponent && $(ReactDOM.findDOMNode(buttonComponent)).focus()
                }
            };
            InteractionWallControlSpec.prototype.clickSearch = function(e) {
                var searchBox = this.refs["IWSearchBox"];
                if (searchBox instanceof HTMLInputElement)
                    if (this.props.dataContext.get_SearchActive()) this.clearSearch();
                    else this.props.dataContext.SetSearchText(searchBox.value, true)
            };
            InteractionWallControlSpec.prototype.clearSearch = function() {
                var searchBox = this.refs["IWSearchBox"];
                if (searchBox instanceof HTMLInputElement) searchBox.value = "";
                this.props.dataContext.SetSearchText("", this.state.searchVisible)
            };
            InteractionWallControlSpec.prototype
                .getInitialState = function() { return { searchVisible: false, filterVisible: false } };
            InteractionWallControlSpec.prototype.render = function() {
                var children = [];
                if (this.props.tabIndex == null) this.props.tabIndex = this.props.dataContext.get_StartIndex();
                this.props.dataContext.get_IsNavigated() && this.props.dataContext.refreshData();
                var InteractionWallEventViewModels = this.props.dataContext.get_InteractionWallEventViewModels()
                    .get_Items();
                children.push(this.renderHeader());
                this.state.searchVisible &&
                    children.push(React.DOM.div({
                            id: "InteractionWallSearchContainerId",
                            key: "SearchBarContainer",
                            className: "mscrm-InteractionWallSearchContainer"
                        },
                        [this.renderSearchBar(), this.renderSearchButton()]));
                this.state.filterVisible && children.push(this.renderFilterBar());
                if (InteractionWallEventViewModels.length == 0 ||
                    this.props.dataContext.get_Root().get_ComponentType() == 40 &&
                    this.props.dataContext.get_Root().get_FormMode() == 1) {
                    var noRecordsDiv = React.DOM.div({
                            key: "interactionWallEmptyMessageDiv",
                            className: CssClassSet({
                                    searchVisible: this.state.searchVisible,
                                    filterVisible: this.state.filterVisible
                                },
                                "mscrm-InteractionWallEventContainer")
                        },
                        this.props.clientContext.getLocalizedString("ActivityWall.EmptyMessage"));
                    children.push(noRecordsDiv)
                } else {
                    (this.props.dataContext.get_IsDataLoading() ||
                            this.props.dataContext.get_Root() == null ||
                            this.props.dataContext.get_Root().get_ModelContext() == null) &&
                        children.push(ProgressIndicator
                            .ProgressIndicator({
                                key: "InteractionWallProgressIndicator",
                                active: true,
                                type: ProgressIndicator.ProgressIndicatorType.Bar
                            }));
                    var eventChildren = [];
                    if (InteractionWallEventViewModels)
                        for (var i = 0; i < InteractionWallEventViewModels.length; i++) {
                            var props = {
                                key: "InteractionWallEvent-" + i.toString(),
                                clientContext: this.props.clientContext,
                                dataContext: InteractionWallEventViewModels[i],
                                className: "mscrm-InteractionWallEvent",
                                tabIndex: this.props.tabIndex,
                                totalRecords: InteractionWallEventViewModels.length,
                                currentElementIndex: i
                            };
                            eventChildren.push(InteractionWallEvent.InteractionWallEvent(props))
                        }
                    this.props.dataContext.get_MoreRecords() == true &&
                        eventChildren.push(this.renderMoreResultButton());
                    children.push(React.DOM.div({
                            key: "mscrm-InteractionWallEventContainer",
                            className: CssClassSet({
                                    searchVisible: this.state.searchVisible,
                                    filterVisible: this.state.filterVisible,
                                    loading: this.props.dataContext.get_IsDataLoading() ||
                                        this.props.dataContext.get_Root() == null ||
                                        this.props.dataContext.get_Root().get_ModelContext() == null
                                },
                                "mscrm-InteractionWallEventContainer")
                        },
                        eventChildren))
                }
                return React.DOM.div({
                        className: "mscrm-InteractionWallContainer",
                        "data-id": "GridHeader",
                        "data-vmid": this.props.dataContext.get_ViewModelId()
                    },
                    children)
            };
            return InteractionWallControlSpec
        }(TsAdapter.SpecBase);
        exports.InteractionWallControl = DataWrapperComponent.wrapComponent(new InteractionWallControlSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GridLayout/ColumnLayout",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Core/Binding/PureUpdateMixin",
        "Components/ComponentFactory",
        "Utils/CssClassSet", "Components/Common/AccessibilityUtility"
    ],
    function(require, exports, TsAdapter, PureUpdate, ComponentFactory, CssClassSet, AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "ColumnLayout";
        var ColumnLayoutSpec = function(_super) {
            __extends(ColumnLayoutSpec, _super);

            function ColumnLayoutSpec() {
                _super.apply(this, arguments);
                this.displayName = "ColumnLayout";
                this.listenToProperties = ["ShouldScroll"];
                this.mixins = [PureUpdate.Mixin]
            }

            ColumnLayoutSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["tabIndex"] = this.props.tabIndex != null
                    ? this.props.tabIndex
                    : this.props.dataContext.get_StartIndex();
                childProps["shouldUseTabIndex"] = true;
                return factory(childProps)
            };
            ColumnLayoutSpec.prototype.isVisualFilterOrTileforTier2 = function() {
                if (!this.props.dataContext
                    .IsTier1Dashboard())
                    if (this.props.dataContext
                        .get_ContainsTiles() ||
                        this.props.dataContext.get_ContainsVisualFilter()) return true;
                return false
            };
            ColumnLayoutSpec.prototype.scrollToControl = function() {
                var node = ReactDOM.findDOMNode(this);
                $(node).scrollTop($(node).scrollTop() + this.props.dataContext.get_ScrollTopValueToSet());
                $(node).scrollLeft($(node).scrollLeft() + this.props.dataContext.get_ScrollLeftValueToSet());
                this.props.dataContext.set_ShouldScroll(false)
            };
            ColumnLayoutSpec.prototype.componentDidUpdate = function() {
                this.props.dataContext.get_ShouldScroll() && this.scrollToControl()
            };
            ColumnLayoutSpec.prototype.componentDidMount = function() {
                this.props.dataContext.get_ShouldScroll() && this.scrollToControl()
            };
            ColumnLayoutSpec.prototype.handleOnFocus = function(e) {
                var currentElement = e.target;
                if ($(currentElement).hasClass("columnOverflow")) {
                    var sectionLayoutElement = $(currentElement).find(".sectionLayout");
                    sectionLayoutElement != null && sectionLayoutElement.attr("aria-hidden", "true")
                }
                e.stopPropagation()
            };
            ColumnLayoutSpec.prototype.handleOnBlur = function(e) {
                var currentElement = e.target;
                if ($(currentElement).hasClass("columnOverflow")) {
                    var sectionLayoutElement = $(currentElement).find(".sectionLayout");
                    sectionLayoutElement != null && sectionLayoutElement.attr("aria-hidden", "false")
                }
                e.stopPropagation()
            };
            ColumnLayoutSpec.prototype.onMouseEnter = function(e) {
                var totalHeight = 0, domNode = $(ReactDOM.findDOMNode(this));
                domNode.children().each(function(index, element) { totalHeight += $(element).outerHeight(true) });
                totalHeight > domNode.height() && domNode.addClass("columnScrollVisible")
            };
            ColumnLayoutSpec.prototype.onMouseLeave = function(e) {
                $(ReactDOM.findDOMNode(this)).removeClass("columnScrollVisible")
            };
            ColumnLayoutSpec.prototype.GetSectionHeadingText = function() {
                var heading = null,
                    quickViewFormHeading = this.props.dataContext.get_ChildViewModels(),
                    gridSectionHeading = quickViewFormHeading["GridSection0"];
                if (gridSectionHeading != null) {
                    var labelText = gridSectionHeading.get_ChildViewModels();
                    if (labelText != null) {
                        var headingText = labelText["FormSectionLabel"];
                        if (headingText != null) heading = headingText.get_Data()
                    }
                }
                return heading
            };
            ColumnLayoutSpec.prototype.GetScreenReaderLabelText = function(className) {
                var labelText = null, heading = null;
                switch (className) {
                case "col-xs-4":
                    heading = this.GetSectionHeadingText();
                    if (heading != null && heading == "RELATED"
                    ) labelText = this.props.clientContext.getLocalizedString("ReferencePanel_ScreenReader_Heading");
                    else labelText = heading != null ? heading : null;
                    break;
                case "col-xs-12":
                case "col-xs-8":
                    heading = this.GetSectionHeadingText();
                    labelText = heading != null ? heading : null;
                    break
                }
                return labelText
            };
            ColumnLayoutSpec.prototype.render = function() {
                var height = this.props.dataContext.get_HeightPercent(), styles = {};
                if (height != null && height > 0) styles = { height: height + "%" };
                var clsName = "col-xs-" + this.props.dataContext.get_BootstrapColumns(), children = [];
                if (this.props.dataContext
                    .get_IsInteractionCentricEnabled())
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator);
                else
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext, this.props.descriptor, this.props.clientContext);
                return React.DOM.div({
                        className: CssClassSet({
                                columnOverflow: true,
                                columnLayout: this.isVisualFilterOrTileforTier2(),
                                majorComponent: this.props.dataContext.get_IsInteractionCentricEnabled()
                            },
                            clsName),
                        style: styles,
                        onFocus: this.props.dataContext.get_IsInteractionCentricEnabled() ? this.handleOnFocus : null,
                        onBlur: this.props.dataContext.get_IsInteractionCentricEnabled() ? this.handleOnBlur : null,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        onMouseDown: AccessibilityUtility.handleMouseDownAndHideOutLine,
                        onKeyDown: AccessibilityUtility.handleKeyDownAndShowOutLine,
                        "aria-label": this.props.dataContext.get_IsInteractionCentricEnabled()
                            ? this.GetScreenReaderLabelText(clsName)
                            : null,
                        tabIndex: this.props.dataContext.get_IsInteractionCentricEnabled()
                            ? this.props.tabIndex != null
                            ? this.props.tabIndex
                            : this.props.dataContext.get_StartIndex()
                            : null
                    },
                    children)
            };
            return ColumnLayoutSpec
        }(TsAdapter.SpecBase);
        exports.ColumnLayoutControl = TsAdapter.createComponent(new ColumnLayoutSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GridLayout/TabLayout",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Core/Binding/UIHasRenderedMixin", "Components/ComponentFactory", "Utils/CssClassSet",
        "Components/InteractionCentric/CollapsibleControl/CollapsibleControl", "Core/Binding/WindowResizeHandlerMixin",
        "Components/Common/Constants"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        UIHasRendered,
        ComponentFactory,
        CssClassSet,
        CollapsibleControl,
        WindowResizeHandler,
        Constants) {
        exports.DESCRIPTOR_NAME = "TabLayout";
        var TabLayoutSpec = function(_super) {
            __extends(TabLayoutSpec, _super);

            function TabLayoutSpec() {
                _super.apply(this, arguments);
                this.mixins = [UIHasRendered.Mixin, WindowResizeHandler.Mixin];
                this.listenToProperties = ["CheckIfCollapsed", "Label"];
                this.displayName = "TabLayout"
            }

            TabLayoutSpec.prototype.handleWindowResize = function() {
                if (!this.props.dataContext
                    .IsTier1Dashboard())
                    this.props.dataContext.get_ContainsHeader() && this.props.dataContext.RefreshData()
            };
            TabLayoutSpec.prototype.DashboardRowKeyDownHandler = function(e) {
                switch (e.key) {
                case Constants.F8_KEY:
                    for (var targetElement = $(e.target),
                        majorComponent = targetElement.closest(".majorComponent"),
                        elementsToIterate = $(document.body).find(".majorComponent"),
                        elementsCount = elementsToIterate.length,
                        i = 0;
                        i < elementsCount;
                        i++) {
                        var nextCount = i + 1;
                        if (nextCount === elementsCount) {
                            $(elementsToIterate[0]).focus();
                            return
                        }
                        if (elementsToIterate[i] === majorComponent[0])
                            if (e.shiftKey) {
                                for (var startIndex = i - 1 >= 0 ? i - 1 : elementsCount - 1, counter = startIndex;
                                    counter > 0;
                                    counter--) if (this.setFocusOnElement(elementsToIterate[counter])) return
                            } else
                                for (var counter = nextCount;
                                    counter < elementsCount;
                                    counter++
                                ) if (this.setFocusOnElement(elementsToIterate[counter])) return
                    }
                }
            };
            TabLayoutSpec.prototype.setFocusOnElement = function(element) {
                if ($(element).is(":visible")) {
                    $(element).focus();
                    return true
                }
                return false
            };
            TabLayoutSpec.prototype.childDecorator = function(factory, childProps) {
                if (this.props.shouldUseTabIndex) childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            TabLayoutSpec.prototype.render = function() {
                var height = this.props.dataContext.get_HeightPercent(), styles = {}, className = "";
                if (this.props.dataContext.get_Root()
                    .get_ComponentType() ==
                    40)
                    styles = {
                        height: "calc(100% - " +
                            this.props.descriptor.Properties["FormFooterContentHeightInPixels"] +
                            "px)"
                    };
                var isTier2 = false;
                isTier2 = this.props.descriptor != null &&
                    this.props.descriptor.Properties != null &&
                    "IsTier2Dasboard" in this.props.descriptor.Properties &&
                    this.props.descriptor.Properties["IsTier2Dasboard"] == true;
                var containsQueueContainerTier1 = this.props.dataContext.get_ContainsQueueContainerTier1();
                if (containsQueueContainerTier1)
                    if (this.props.dataContext.get_CheckIfCollapsed()) className = "streamsTier1Collapsed";
                    else className = "streamsTier1Expanded";
                else if (this.props.dataContext.get_ContainsHeader()) styles = { height: "40px" };
                else if (height != null && height > 0)
                    if (isTier2) styles = { height: "calc(100% - 81px)", marginTop: "36px" };
                    else styles = { height: "calc(100% - 45px)" };
                var isDashboard = false;
                isDashboard = this.props.descriptor != null &&
                    this.props.descriptor.Properties != null &&
                    "IsDashboard" in this.props.descriptor.Properties &&
                    this.props.descriptor.Properties["IsDashboard"] == true;
                var children = [];
                if (!("IsCurrentSelectedTab" in this.props) || this.props.IsCurrentSelectedTab
                )
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator);
                if (this.props.dataContext.get_DisplayLabel() && this.props.dataContext.get_Label()) {
                    var tabLabelText = React.DOM.label({ key: "icform_tab_label", className: "icform_tab_label" },
                        this.props.dataContext.get_Label());
                    children.splice(0, 0, tabLabelText)
                }
                if (this.props.dataContext.get_CheckIfCollapsed() &&
                    isDashboard &&
                    !isTier2 &&
                    !this.props.dataContext.get_ContainsQueueContainerTier1()) children = [];
                var tabElement = React.DOM.div({
                        key: "tabElement-row",
                        className: CssClassSet({
                                selected: this.props.IsCurrentSelectedTab,
                                dashboard_row:
                                    isDashboard
                            },
                            "row",
                            "tabElement",
                            className),
                        style: styles,
                        onKeyDown: this.DashboardRowKeyDownHandler
                    },
                    children);
                if (this.props.dataContext.get_Collapsible())
                    return CollapsibleControl
                        .CollapsibleControl({
                                clientContext: this.props.clientContext,
                                tabIndex: this.props.tabIndex != null
                                    ? this.props.tabIndex
                                    : this.props.dataContext.get_StartIndex(),
                                dataContext: null,
                                hideButton: true,
                                defaultCollapsed: this.props.dataContext.get_CheckIfCollapsed()
                            },
                            tabElement);
                return tabElement
            };
            return TabLayoutSpec
        }(TsAdapter.SpecBase);
        exports.TabLayoutControl = DataWrapperComponent.wrapComponent(new TabLayoutSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GridLayout/SectionLayout",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Core/Binding/PureUpdateMixin",
        "Components/ComponentFactory",
        "Utils/CssClassSet", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, PureUpdate, ComponentFactory, CssClassSet, Constants) {
        exports.DESCRIPTOR_NAME = "SectionLayout";
        var SectionLayoutSpec = function(_super) {
            __extends(SectionLayoutSpec, _super);

            function SectionLayoutSpec() {
                _super.apply(this, arguments);
                this.displayName = "SectionLayout";
                this.mixins = [PureUpdate.Mixin]
            }

            SectionLayoutSpec.prototype.handleOnKeyDown = function(e) {
                e.keyCode == Constants.F8_KEY_CODE && $(".queuePanel1:first").focus()
            };
            SectionLayoutSpec.prototype.childDecorator = function(factory, childProps) {
                if (this.props.descriptor &&
                    this.props.descriptor.Properties &&
                    "IsTier2VisualFilter" in this.props.descriptor.Properties &&
                    this.props.descriptor
                    .Properties["IsTier2VisualFilter"] ==
                    true)
                    if (this.props.descriptor &&
                        this.props.descriptor.Properties &&
                        "RowCount" in this.props.descriptor.Properties
                    )
                        childProps["Tier2VisualFilterHeightPercentage"] =
                            100 / this.props.descriptor.Properties["RowCount"] + "%";
                if (this.props.dataContext
                    .get_IsInteractionCentricEnabled()) childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            SectionLayoutSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                var height = this.props.dataContext.get_HeightPercent(), styles = {};
                if (height != null && height > 0) styles = { height: height + "%" };
                var children = ComponentFactory
                    .createChildComponents(this.props.dataContext,
                        this.props.descriptor,
                        this.props.clientContext,
                        this.childDecorator);
                if (this.props.descriptor &&
                    this.props.descriptor.Properties &&
                    "HeightExpression" in this.props.descriptor.Properties
                ) styles = { height: this.props.descriptor.Properties["HeightExpression"] };
                if (this.props.descriptor &&
                    this.props.descriptor.Properties &&
                    "TotalMargin" in this.props.descriptor.Properties
                ) styles["marginTop"] = this.props.descriptor.Properties["TotalMargin"];
                var classStrings = "sectionLayout sectionLayout";
                return React.DOM.table({
                        className: CssClassSet(null,
                            "sectionLayout sectionLayout" + this.props.parentGivenKey,
                            this.props.descriptor.Properties["AdditionalCSSClassName"]),
                        style: styles,
                        onKeyDown: this.handleOnKeyDown
                    },
                    React.DOM.tbody({}, children))
            };
            return SectionLayoutSpec
        }(TsAdapter.SpecBase);
        exports.SectionLayoutControl = TsAdapter.createComponent(new SectionLayoutSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GridLayout/GridRowLayout",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Core/Binding/PureUpdateMixin",
        "Components/ComponentFactory"
    ],
    function(require, exports, TsAdapter, PureUpdate, ComponentFactory) {
        exports.DESCRIPTOR_NAME = "GridRowLayout";
        var GridRowLayoutSpec = function(_super) {
            __extends(GridRowLayoutSpec, _super);

            function GridRowLayoutSpec() {
                _super.apply(this, arguments);
                this.displayName = "GridRowLayout";
                this.mixins = [PureUpdate.Mixin]
            }

            GridRowLayoutSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            GridRowLayoutSpec.prototype.render = function() {
                var children = [];
                if (this.props.dataContext
                    .get_IsInteractionCentricEnabled())
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator);
                else
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext, this.props.descriptor, this.props.clientContext);
                var cssClassName = null;
                if (this.props.descriptor &&
                    this.props.descriptor.Properties &&
                    "RowCssClassName" in this.props.descriptor.Properties
                ) cssClassName = this.props.descriptor.Properties["RowCssClassName"];
                if (this.props.dataContext.get_Root().get_ComponentType() == 40 &&
                    this.props.dataContext.get_Root()
                    .get_FormMode() ==
                    1) cssClassName = cssClassName + " interactionCentricCreateMode";
                var styles = {};
                if ("Tier2VisualFilterHeightPercentage" in this.props
                ) styles = { height: this.props["Tier2VisualFilterHeightPercentage"] };
                return React.DOM.tr({ className: cssClassName, style: styles }, children)
            };
            return GridRowLayoutSpec
        }(TsAdapter.SpecBase);
        exports.GridRowLayoutControl = TsAdapter.createComponent(new GridRowLayoutSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GridLayout/GridCellLayout",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Core/Binding/PureUpdateMixin", "Components/ComponentFactory", "Utils/CssClassSet"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, PureUpdate, ComponentFactory, CssClassSet) {
        exports.DESCRIPTOR_NAME = "GridCellLayout";
        var GridCellLayoutSpec = function(_super) {
            __extends(GridCellLayoutSpec, _super);

            function GridCellLayoutSpec() {
                _super.apply(this, arguments);
                this.displayName = "GridCellLayout";
                this.mixins = [PureUpdate.Mixin];
                this.listenToProperties = ["Visible"]
            }

            GridCellLayoutSpec.prototype.childDecorator = function(factory, props) {
                props["className"] = "gridCellLayoutItem" + props.key;
                if (this.props.dataContext.get_IsInteractionCentricEnabled()) props["tabIndex"] = this.props.tabIndex;
                return factory(props)
            };
            GridCellLayoutSpec.prototype.render = function() {
                if (this.props.dataContext.get_Visible() === false) return React.DOM.noscript();
                var rowSpan = this.props.dataContext.get_RowSpan().toString(),
                    colSpan = this.props.dataContext.get_ColSpan().toString(),
                    isAutoHeight = this.props.dataContext.get_IsAutoHeight(),
                    widthPercent = this.props.dataContext.get_WidthPercent(),
                    heightPercent = this.props.dataContext.get_HeightPercent(),
                    cellHeight = this.props.dataContext.get_CellHeight(),
                    dashboardType = this.props.dataContext.get_TierType(),
                    className;
                if (this.props.dataContext.get_IsQueueContainer()) className = "tileCell";
                else if (this.props.dataContext.get_IsInteractionWallGridCell()) className = "interactionWallCell";
                else if (this.props.dataContext.get_IsBlankGridCell()) className = "blankGridCell";
                else if (this.props.dataContext.get_ControlName() == "EmailBody") className = "emailBodyGridCell";
                else if (this.props.dataContext.get_ControlName() == "RichEditor") className = "richEditorGridCell";
                else if (this.props.dataContext.get_ControlName() === "SearchWidget") className = "searchWidgetCell";
                else {
                    className = "gridCell";
                    if (dashboardType != null && dashboardType === "1_0") className = className + " gridCellTier1"
                }
                if (this.props.dataContext.get_IsVisualFilterSection()) className += " visualFilterGridCell";
                var styles = {};
                if (!this.props.dataContext.get_IsInteractionWallGridCell()) styles["width"] = widthPercent + "%";
                if (isAutoHeight) styles["height"] = "auto";
                else if (cellHeight > 0) styles["height"] = cellHeight.toString() + "px";
                else if (heightPercent > 0) styles["height"] = heightPercent.toString() + "%";
                var children = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator),
                    cellProperties = {
                        className: CssClassSet(null,
                            className,
                            this.props.descriptor.Properties[this.props.dataContext
                                .get_AdditionalCSSClassNamePropertyName()])
                    };
                if (!this.props.dataContext.get_IsQuickViewForm()) {
                    cellProperties.style = styles;
                    cellProperties["rowSpan"] = rowSpan;
                    cellProperties["colSpan"] = colSpan
                }
                return React.DOM.td(cellProperties, children)
            };
            return GridCellLayoutSpec
        }(TsAdapter.SpecBase);
        exports.GridCellLayoutControl = DataWrapperComponent.wrapComponent(new GridCellLayoutSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/Primitives/ImageButtonWrapper",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/ImageButton",
        "Components/DataWrapperComponent"
    ],
    function(require, exports, TsAdapter, ImageButton, DataWrapperComponent) {
        exports.DESCRIPTOR_NAME = "ImageButtonWrapper";
        var ImageButtonWrapperSpec = function(_super) {
            __extends(ImageButtonWrapperSpec, _super);

            function ImageButtonWrapperSpec() {
                _super.apply(this, arguments);
                this.displayName = "ImageButtonWrapper";
                this.listenToProperties = ["Enabled", "Visible", "Label"]
            }

            ImageButtonWrapperSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                return ImageButton.ImageButton({
                    imageType: this.props.dataContext.get_ImageType().toString(),
                    imageName: this.props.dataContext.get_ImageName(),
                    label: this.props.dataContext.get_Label(),
                    tabIndex: this.props.dataContext.get_IsInteractionCentricEnabled() ? this.props.tabIndex : null,
                    labelClassName: this.props.dataContext.get_LabelClassName(),
                    onClick: this.props.dataContext.get_Enabled() ? this.props.onClick : null,
                    onKeyDown: this.props.dataContext.get_Enabled() ? this.props.onKeyDown : null
                })
            };
            return ImageButtonWrapperSpec
        }(TsAdapter.SpecBase);
        exports.ImageButtonWrapper = DataWrapperComponent.wrapComponent(new ImageButtonWrapperSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/CommunicationCard/InteractionCentricCommunicationCard",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Common/DynamicsButton", "Components/Common/Image", "Utils/CssClassSet"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, DynamicsButton, Image, CssClassSet) {
        exports.DESCRIPTOR_NAME = "InteractionCentricCommunicationCard";
        var InteractionCentricCommunicationCardSpec = function(_super) {
            __extends(InteractionCentricCommunicationCardSpec, _super);

            function InteractionCentricCommunicationCardSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionCentricCommunicationCard";
                this.listenToProperties = ["DataChanged", "Visible", "Rerender"]
            }

            InteractionCentricCommunicationCardSpec.prototype
                .componentDidMount = function() { this.props.dataContext.UIHasRendered() };
            InteractionCentricCommunicationCardSpec.prototype
                .componentDidUpdate = function() { this.props.dataContext.UIHasRendered() };
            InteractionCentricCommunicationCardSpec.prototype
                .handleOpenItemCommand = function(recordId) { this.props.dataContext.navigateToRecord(recordId) };
            InteractionCentricCommunicationCardSpec.prototype
                .getTabIndex = function(text) {
                    return this.props.dataContext.IsLink(text) ? this.props.tabIndex : null
                };
            InteractionCentricCommunicationCardSpec.prototype.renderTileTextContainer = function() {
                var tileTextContainerChildren = [
                    React.DOM.div({
                            key: "icText1",
                            id: "ICTileText1",
                            className: CssClassSet({
                                icTileText: true,
                                underlineTileText: this.props.dataContext.IsLink("Text1")
                            }),
                            onClick: this.handleOpenItemCommand.bind(this, "Text1"),
                            tabIndex: this.getTabIndex("Text1")
                        },
                        this.props.dataContext.get_Text1()), React.DOM
                    .div({
                            key: "icText2",
                            id: "ICTileText2",
                            className: CssClassSet({
                                icTileText: true,
                                underlineTileText: this.props.dataContext.IsLink("Text2")
                            }),
                            onClick: this.handleOpenItemCommand.bind(this, "Text2"),
                            tabIndex: this.getTabIndex("Text2")
                        },
                        this.props.dataContext.get_Text2()), React.DOM
                    .div({
                            key: "icText3",
                            id: "ICTileText3",
                            className: CssClassSet({
                                icTileText: true,
                                underlineTileText: this.props.dataContext.IsLink("Text3")
                            }),
                            onClick: this.handleOpenItemCommand.bind(this, "Text3"),
                            tabIndex: this.getTabIndex("Text3")
                        },
                        this.props.dataContext.get_Text3()), React.DOM
                    .div({
                            key: "icText4",
                            id: "ICTileText4",
                            className: CssClassSet({
                                icTileText: true,
                                underlineTileText: this.props.dataContext.IsLink("Text4")
                            }),
                            onClick: this.handleOpenItemCommand.bind(this, "Text4"),
                            tabIndex: this.getTabIndex("Text4")
                        },
                        this.props.dataContext.get_Text4()), React.DOM
                    .div({
                            key: "icText5",
                            id: "ICTileText5",
                            className: CssClassSet({
                                icTileText: true,
                                underlineTileText: this.props.dataContext.IsLink("Text5")
                            }),
                            onClick: this.handleOpenItemCommand.bind(this, "Text5"),
                            tabIndex: this.getTabIndex("Text5")
                        },
                        this.props.dataContext.get_Text5())
                ];
                return React.DOM.div({ key: "ictextContainer", className: "ictextcontainer" },
                    tileTextContainerChildren)
            };
            InteractionCentricCommunicationCardSpec.prototype.renderTileButtonContainer = function() {
                var tileButtonContainerChildren = [];
                this.props.dataContext.get_Button1ViewModel() &&
                    tileButtonContainerChildren.push(DynamicsButton
                        .DynamicsButton({
                            key: "icTileButton1",
                            parentGivenKey: "icTileButton1",
                            clientContext: this.props.clientContext,
                            dataContext: this.props.dataContext.get_Button1ViewModel(),
                            title: this.props.dataContext.get_EmailAddress(),
                            showWhenDisabled: true,
                            className: "icButton",
                            tabIndex: this.props.tabIndex != null
                                ? this.props.tabIndex
                                : this.props.dataContext.get_StartIndex(),
                            onClick: this.props.dataContext.get_Button1ViewModel().get_ActionCommand().get_CanExecute()
                        }));
                this.props.dataContext.get_Button2ViewModel() &&
                    tileButtonContainerChildren.push(DynamicsButton
                        .DynamicsButton({
                            key: "tileButton2",
                            parentGivenKey: "tileButton2",
                            clientContext: this.props.clientContext,
                            dataContext: this.props.dataContext.get_Button2ViewModel(),
                            title: this.props.dataContext.get_PhoneNumber(),
                            showWhenDisabled: true,
                            className: "icButton",
                            tabIndex: this.props.tabIndex != null
                                ? this.props.tabIndex
                                : this.props.dataContext.get_StartIndex(),
                            onClick: this.props.dataContext.get_Button2ViewModel().get_ActionCommand().get_CanExecute()
                        }));
                return React.DOM.div({ key: "tileButtons", className: "icbuttoncontainer" },
                    tileButtonContainerChildren)
            };
            InteractionCentricCommunicationCardSpec.prototype.imageContainer = function() {
                var image = Image.Image({
                    key: "image",
                    dataContext: this.props.dataContext.get_ImageViewModel(),
                    clientContext: this.props.clientContext,
                    className: "icEntityImage"
                });
                return React.DOM.div({ key: "icimageContainer", className: "icimageContainer" }, image)
            };
            InteractionCentricCommunicationCardSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Rerender()) return React.DOM.div({ style: { display: "none" } });
                if (this.props.dataContext.get_SetActionable()) {
                    this.props.dataContext.fetchData();
                    return React.DOM.noscript()
                }
                var children = [];
                children.push(React.DOM.div({ className: "icContentContainer", key: "icContentContainer" },
                    [this.imageContainer(), this.renderTileTextContainer()]));
                children.push(this.renderTileButtonContainer());
                return React.DOM.div({
                        className: "iccardcontainer",
                        disabled: this.props.dataContext.get_Enabled(),
                        "data-id": "TileHeader"
                    },
                    children)
            };
            return InteractionCentricCommunicationCardSpec
        }(TsAdapter.SpecBase);
        exports.InteractionCentricCommunicationCard = DataWrapperComponent
            .wrapComponent(new InteractionCentricCommunicationCardSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/CollapsibleControl/CollapseVisualFilterButton",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/Primitives/Button",
        "Components/Primitives/FontIcon", "Utils/CssClassSet", "Core/Binding/PureUpdateMixin",
        "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, Button, FontIcon, CssClassSet, PureUpdate, Constants) {
        exports.DESCRIPTOR_NAME = "CollapseVisualFilterButton";
        var CollapseVisualFilterButtonSpec = function(_super) {
            __extends(CollapseVisualFilterButtonSpec, _super);

            function CollapseVisualFilterButtonSpec() {
                _super.apply(this, arguments);
                this.displayName = "CollapseVisualFilterButton";
                this.mixins = [PureUpdate.Mixin]
            }

            CollapseVisualFilterButtonSpec.prototype.getInitialState = function() { return { expanded: false } };
            CollapseVisualFilterButtonSpec.prototype.handleCollapseButtonClick = function() {
                this.props.dataContext.handleCollapsibleToggleButtonClick();
                this.setState({ expanded: !this.state.expanded })
            };
            CollapseVisualFilterButtonSpec.prototype.handleOnKeyDown = function(e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) {
                    this.props.dataContext.handleCollapsibleToggleButtonClick();
                    this.setState({ expanded: true });
                    $(".visualFilterToggleButton").focus();
                    e.preventDefault();
                    return false
                } else if (e.keyCode == Constants.ESCAPE_KEY_CODE) {
                    this.props.dataContext.handleCollapsibleToggleButtonClick();
                    this.setState({ expanded: false });
                    return false
                }
            };
            CollapseVisualFilterButtonSpec.prototype.render = function() {
                return Button.Button({
                        key: "togglebuttonVisualFiter",
                        className: CssClassSet({ visualFilterExpanded: this.state.expanded },
                            "visualFilterToggleButton"),
                        ref: "toggleButtonGraphArea",
                        title: this.state.expanded
                            ? this.props.clientContext.getLocalizedString("VisualFilter_Collapse")
                            : this.props.clientContext.getLocalizedString("VisualFilter_Expand"),
                        onClick: this.handleCollapseButtonClick,
                        onKeyDown: this.handleOnKeyDown,
                        tabIndex: this.props.dataContext.get_StartIndex()
                    },
                    FontIcon.FontIcon({ symbolName: "VisualFilter" }))
            };
            return CollapseVisualFilterButtonSpec
        }(TsAdapter.SpecBase);
        exports.CollapseVisualFilterButton = TsAdapter.createComponent(new CollapseVisualFilterButtonSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/MultiSessionTabControl/SessionTabContainer",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/ComponentFactory",
        "Components/DataWrapperComponent", "Utils/CssClassSet", "Components/Primitives/FontIcon",
        "Components/RelatedEntitySearchControls/KbSearchResultContentPane", "Components/Common/Constants"
    ],
    function(require,
        exports,
        TsAdapter,
        ComponentFactory,
        DataWrapperComponent,
        CssClassSet,
        FontIcon,
        KbSearchResultContentPane,
        Constants) {
        exports.DESCRIPTOR_NAME = "SessionTabContainer";
        var SessionTabContainerSpec = function(_super) {
            __extends(SessionTabContainerSpec, _super);

            function SessionTabContainerSpec() {
                _super.apply(this, arguments);
                this.displayName = "SessionTabContainer";
                this.tabGap = 4;
                this.borderWidth = 2;
                this.listenToProperties = ["DataAvailable"]
            }

            SessionTabContainerSpec.prototype.updateTabsAndContent = function() {
                var iframeNode = this.refs["descIframe"];
                if (iframeNode instanceof HTMLIFrameElement)
                    iframeNode.contentWindow.document.body.innerHTML = this.props.dataContext
                        .get_TabData()["Description"];
                var parentElement = this.refs["container" + this.props.dataId].parentElement,
                    childNode = $(this.refs["tab"]);
                if (this.props.tabOrientation === "right") {
                    var tabHeight = this.props.dataContext
                            .tabHeightSecondPass(parentElement.clientHeight,
                                this.props.isFixed,
                                this.props.noOfSiblings + 1,
                                this.tabGap),
                        tabWidth = this.props.dataContext
                            .tabWidthSecondPass(parentElement.clientWidth,
                                true,
                                this.props.noOfSiblings + 1,
                                this.tabGap);
                    childNode.css("right", -(tabWidth + this.borderWidth) + "px");
                    childNode.css("top", (tabHeight + this.tabGap) * this.props.index + "px");
                    childNode.css("width", tabWidth);
                    childNode.css("height", tabHeight)
                } else if (this.props.tabOrientation === "top") {
                    var tabHeight = this.props.dataContext
                            .tabHeightSecondPass(parentElement
                                .clientHeight,
                                true,
                                this.props.noOfSiblings + 1,
                                this.tabGap),
                        tabWidth = this.props.dataContext
                            .tabWidthSecondPass(parentElement.clientWidth,
                                false,
                                this.props.noOfSiblings + 1,
                                this.tabGap);
                    childNode.css("top", -tabHeight - this.tabGap);
                    childNode.css("left", (tabWidth + this.tabGap) * this.props.index + "px");
                    childNode.css("width", tabWidth);
                    childNode.css("height", tabHeight);
                    !childNode.hasClass("deactivated") && childNode.focus()
                }
            };
            SessionTabContainerSpec.prototype.componentDidMount = function() { this.updateTabsAndContent() };
            SessionTabContainerSpec.prototype.componentDidUpdate = function() { this.updateTabsAndContent() };
            SessionTabContainerSpec.prototype.onCloseButtonClicked = function() {
                if (document.activeElement != null && SessionTabContainerSpec.tabTitles.length > 0) {
                    var activeElement = document.activeElement, activeTabTitle = activeElement.getAttribute("title");
                    SessionTabContainerSpec.tabTitles
                        .splice(SessionTabContainerSpec.tabTitles.indexOf(activeTabTitle), 1);
                    var focusableTabTitle = "'" +
                            SessionTabContainerSpec.tabTitles[SessionTabContainerSpec.tabTitles.length - 1] +
                            "'",
                        focusableItem = $("div[title=" + focusableTabTitle + "]");
                    focusableItem != null && focusableItem.length > 0 && focusableItem.focus()
                }
                this.props.onTabCloseButtonClicked(this.props.dataId)
            };
            SessionTabContainerSpec.prototype.onCloseButtonKeyDown = function(e) {
                e.stopPropagation();
                if (e.key == Constants.ENTER_KEY) this.onCloseButtonClicked();
                else e.key == Constants.TAB_KEY && this.handleTabDown(e)
            };
            SessionTabContainerSpec.prototype.onTabClicked = function() { this.props.onTabClick(this.props.dataId) };
            SessionTabContainerSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            SessionTabContainerSpec.prototype.handelQuickTabNavigation = function(e) {
                for (var targetElement = $(e.target),
                    majorComponent = targetElement.closest(".majorComponent"),
                    elementsToIterate = $(document.body).find(".majorComponent"),
                    elementsCount = elementsToIterate.length,
                    i = 0;
                    i < elementsCount;
                    i++) {
                    var nextCount = i + 1;
                    if (nextCount === elementsCount) {
                        $(elementsToIterate[0]).focus();
                        return
                    }
                    if (elementsToIterate[i] === majorComponent[0])
                        if (e.shiftKey) {
                            for (var startIndex = i - 1 >= 0 ? i - 1 : elementsCount - 1, counter = startIndex;
                                counter > 0;
                                counter--) if (this.setFocusOnElement(elementsToIterate[counter])) return
                        } else
                            for (var counter = nextCount;
                                counter < elementsCount;
                                counter++
                            ) if (this.setFocusOnElement(elementsToIterate[counter])) return
                }
            };
            SessionTabContainerSpec.prototype.setFocusOnElement = function(element) {
                if ($(element).is(":visible")) {
                    $(element).focus();
                    return true
                }
                return false
            };
            SessionTabContainerSpec.prototype.quickNavigationKeyDown = function(e) {
                if (e.key === Constants.F8_KEY) {
                    this.handelQuickTabNavigation(e);
                    e.stopPropagation();
                    e.preventDefault()
                }
            };
            SessionTabContainerSpec.prototype.handleOnKeyDown = function(e) {
                e.stopPropagation();
                switch (e.key) {
                case Constants.ENTER_KEY:
                    this.props.onTabClick(this.props.dataId);
                    break;
                case Constants.SPACE_KEY:
                    this.props.onTabClick(this.props.dataId);
                    break;
                case Constants.ESCAPE_KEY:
                    this.onCloseButtonClicked();
                    break;
                case Constants.TAB_KEY:
                    this.handleTabDown(e);
                    break;
                case Constants.F8_KEY:
                    this.handelQuickTabNavigation(e);
                    e.preventDefault();
                    break
                }
            };
            SessionTabContainerSpec.prototype.handleTabDown = function(e) {
                var domNode = this.refs["tab"], closeButtonRef = this.refs["closeButton"];
                if (domNode instanceof Element &&
                    $(domNode).prev().find("[tabindex]") != null &&
                    (!(closeButtonRef instanceof Element) ||
                        closeButtonRef == e.currentTarget ||
                        !$(domNode).has($(closeButtonRef)))) {
                    for (var focusableItem = $(domNode).prev().find("[tabindex]:first"),
                        itemCount = $(domNode).prev().find("[tabindex]").length,
                        i = 0;
                        i < itemCount;
                        i++) {
                        var control = $(domNode).prev().find("[tabindex]")[i];
                        if (control != null)
                            if ($(control).attr("disabled") === undefined) {
                                focusableItem = $(control);
                                break
                            }
                    }
                    if (focusableItem != null && focusableItem.length > 0) {
                        focusableItem.focus();
                        e.preventDefault()
                    }
                }
            };
            SessionTabContainerSpec.prototype.renderParatureData = function(content) {
                var descIframe = React.DOM.iframe({
                    id: "descIframe",
                    ref: "descIframe",
                    className: "refPanelArticleDescription",
                    sandbox: "allow-same-origin allow-popups"
                });
                if (!content) return descIframe;
                var contentChildren = [],
                    timesViewedSpan = React.DOM.span({ ref: "timesViewedSpan", className: "refPanelTimesViewedSpan" },
                    [
                        FontIcon.FontIcon({ symbolName: "Article", className: "ratingTimesViewedIcon" }),
                        content["TimesViewed"]
                    ]),
                    modifiedOnSpan = React.DOM.span({ ref: "modifiedOnSpan", className: "refPanelModifiedSpan" },
                        ["Last Modified On " + content["LastModifiedOn"]]),
                    metadataDiv = React.DOM.div({ ref: "metadataDiv" }, [timesViewedSpan, modifiedOnSpan]),
                    titleDiv = React.DOM
                        .div({ ref: "titleDiv", className: "refPanelArticleTitle" }, [content["Title"]]);
                contentChildren.push(titleDiv);
                contentChildren.push(metadataDiv);
                contentChildren.push(descIframe);
                return React.DOM.div({
                        key: "metadata" + this.props.dataId,
                        ref: "articleDiv",
                        className: "refPanelArticle"
                    },
                    contentChildren)
            };
            SessionTabContainerSpec.prototype.renderCRMData = function(content) {
                var descIframe = React.DOM.iframe({
                    id: "descIframe",
                    ref: "descIframe",
                    className: "refPanelArticleDescription",
                    sandbox: "allow-same-origin allow-popups"
                });
                if (!content) return descIframe;
                return KbSearchResultContentPane
                    .KbSearchControlReadPane({
                        clientContext: this.props.clientContext,
                        dataContext: content["KbSearchResultContentPaneViewModel"],
                        selectedSearchResult: content["SelectedSearchResult"],
                        articleEntityDisplayName: content["ArticleEntityDisplayName"],
                        backButtonHandler: null,
                        showContextualActions: content["ShowContextualActions"],
                        isHostedInReferencePanel: content["IsHostedInReferencePanel"],
                        getUsedHeightOfControl: null,
                        isMobileControl: false
                    })
            };
            SessionTabContainerSpec.prototype.renderData = function(content) {
                switch (this.props.dataContext.get_ContentDataSource()) {
                case 0:
                    return this.renderParatureData(content);
                case 1:
                    return this.renderCRMData(content);
                default:
                    return
                }
            };
            SessionTabContainerSpec.prototype.render = function() {
                var contentChildren = [], qcf;
                if (this.props.dataContext.get_Root() != null &&
                    this.props.dataContext.get_Root().get_ComponentType() == 40 &&
                    this.props.dataContext.get_Root()
                    .get_FormMode() ==
                    1)
                    qcf = React.DOM
                        .div({ key: "referencePanelEmptyMessageDiv", className: "referencePanelEmptyMessageDiv" },
                            this.props.clientContext.getLocalizedString("EmptyGridMessageBoundSubgridCreateRefresh"));
                else {
                    qcf = [];
                    if (this.props.activated)
                        qcf = ComponentFactory
                            .createChildComponents(this.props.dataContext,
                                this.props.descriptor,
                                this.props.clientContext,
                                this.childDecorator)
                }
                var paratureDiv = this.renderData(this.props.dataContext.get_TabData()),
                    tabTitle = "session" + this.props.dataId + "tab";
                if (this.props.dataContext.get_TabData() != null) {
                    tabTitle = this.props.dataContext.get_TabData()["Title"];
                    var index = SessionTabContainerSpec.tabTitles.indexOf(tabTitle);
                    index === -1 && SessionTabContainerSpec.tabTitles.push(tabTitle)
                }
                if (this.props.dataContext.get_ToolTip() != null) {
                    tabTitle = this.props.dataContext.get_ToolTip();
                    SessionTabContainerSpec.tabTitles = this.props.tabArray
                }
                var qcfContainer = React.DOM.div({
                            ref: "quickcreateformcontainer",
                            key: this.props.dataId,
                            className: "sessiontabcontainer",
                            onKeyDown: this.quickNavigationKeyDown
                        },
                        [qcf, paratureDiv]),
                    closeButton = React.DOM.div({
                            ref: "closeButton",
                            key: "closeButton" + this.props.dataId,
                            className: "closeButton",
                            tabIndex: this.props.tabIndex != null
                                ? this.props.tabIndex
                                : this.props.dataContext.get_StartIndex(),
                            onClick: this.onCloseButtonClicked,
                            onKeyDown: this.onCloseButtonKeyDown
                        },
                        FontIcon.FontIcon({ symbolName: "Cancel" })),
                    tabTitleDiv = React.DOM.div({ className: "tabTitleDiv", ref: "tabTitleDiv", key: "tabTitleDiv" },
                        tabTitle),
                    tabContent;
                if (this.props.dataContext
                    .get_IconUrl() !=
                    null)
                    tabContent = React.DOM.img({
                        className: "tabIcon",
                        key: "statictabicon" + this.props.dataId,
                        src: this.props.dataContext.getFullUrl(this.props.dataContext.get_IconUrl())
                    });
                else tabContent = [this.props.dataContext.get_IsCloseButtonVisible() ? closeButton : [], tabTitleDiv];
                var tab = React.DOM.div({
                        ref: "tab",
                        key: "tab" + this.props.dataId,
                        title: tabTitle,
                        className: CssClassSet({
                            tab: true,
                            majorComponent: true,
                            deactivated: this.props.activated == true ? false : true
                        }),
                        style: {
                            borderTopWidth: this.props.dataContext.borderTop(),
                            borderBottomWidth: this.props.dataContext.borderBottom(),
                            borderLeftWidth: this.props.dataContext.borderLeft(),
                            borderRightWidth: this.props.dataContext.borderRight(),
                            color: this.props.dataContext.textColor()
                        },
                        tabIndex: this.props.tabIndex != null
                            ? this.props.tabIndex
                            : this.props.dataContext.get_StartIndex(),
                        onKeyDown: this.handleOnKeyDown,
                        onClick: this.onTabClicked,
                        "aria-label": this.props.dataContext.get_IsCloseButtonVisible()
                            ? tabTitle +
                            " " +
                            this.props.clientContext.getLocalizedString("QuickViewForm_ScreenReader_CloseButton")
                            : null
                    },
                    [tabContent]);
                contentChildren.push(tab);
                contentChildren.push(qcfContainer);
                return React.DOM.div({
                        ref: "container" + this.props.dataId,
                        key: "container" + this.props.dataId,
                        className: CssClassSet({ inactive: !this.props.activated }, "tabChildContainer")
                    },
                    contentChildren)
            };
            SessionTabContainerSpec.tabTitles = [];
            return SessionTabContainerSpec
        }(TsAdapter.SpecBase);
        exports.SessionTabContainer = DataWrapperComponent.wrapComponent(new SessionTabContainerSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/MultiSessionTabControl/MultiSessionTabContainer",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent", "Utils/CssClassSet",
        "Components/InteractionCentric/MultiSessionTabControl/SessionTabContainer", "Core/Binding/UIHasRenderedMixin"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, CssClassSet, SessionTabContainer, UIHasRendered) {
        exports.DESCRIPTOR_NAME = "MultiSessionTabContainer";
        var MultiSessionTabContainerSpec = function(_super) {
            __extends(MultiSessionTabContainerSpec, _super);

            function MultiSessionTabContainerSpec() {
                _super.apply(this, arguments);
                this.displayName = "MultiSessionTabContainer";
                this.mixins = [UIHasRendered.Mixin];
                this.listenToProperties = ["ChildrenList", "ActiveChild"]
            }

            MultiSessionTabContainerSpec.prototype
                .childDecorator = function(factory, childProps) { return factory(childProps) };
            MultiSessionTabContainerSpec.prototype.onTabClicked = function(ref) {
                var children = this.props.dataContext.get_ChildrenList();
                children = children.toArray();
                for (var child in children)
                    if (children[child] == ref) {
                        this.props.dataContext.set_ActiveChild(ref);
                        this.props.dataContext.pushChild(ref)
                    }
            };
            MultiSessionTabContainerSpec.prototype.onTabCloseButtonClicked = function(ref) {
                if (this.props.dataContext.checkTabClose()) {
                    this.props.dataContext.removeChild(ref);
                    this.props.dataContext.removeChildStack(ref);
                    this.props.dataContext.setPrevActive()
                } else window.alert(this.props.clientContext.getLocalizedString("TabControl_LastTabClose"))
            };
            MultiSessionTabContainerSpec.prototype
                .getDefaultProps = function() {
                    return {
                        onChildTabClicked: this.onTabClicked,
                        onChildTabCloseButtonClicked: this.onTabCloseButtonClicked
                    }
                };
            MultiSessionTabContainerSpec.prototype.render = function() {
                var children = this.props.dataContext.get_ChildrenList();
                children = children.toArray();
                var mtype = this.props.dataContext.get_MetaDataIdentifier();
                mtype = mtype.toArray();
                var contentChildren = [], tabArrayCollection = [];
                for (var child in children) {
                    if (this.props.dataContext.get_ChildViewModels()[children[child]].get_TabData() != null) {
                        var tabTitle = this.props.dataContext.get_ChildViewModels()[children[child]]
                            .get_TabData()["Title"];
                        tabArrayCollection.push(tabTitle)
                    }
                    if (this.props.dataContext.get_ChildViewModels()[children[child]].get_ToolTip() != null) {
                        var tabTitle = this.props.dataContext.get_ChildViewModels()[children[child]].get_ToolTip();
                        tabArrayCollection.push(tabTitle)
                    }
                }
                for (var child in children) {
                    var active = children[child] == this.props.dataContext.get_ActiveChild() ? true : false,
                        childDescriptor = this.props.descriptor.ChildControlViewDescriptors[children[child]] == null
                            ? this.props.dataContext.get_ChildTabViewDescriptors().toArray()[child]
                            : this.props.descriptor.ChildControlViewDescriptors[children[child]],
                        session = SessionTabContainer
                            .SessionTabContainer({
                                key: children[child],
                                ref: children[child],
                                clientContext: this.props.clientContext,
                                dataContext: this.props.dataContext.get_ChildViewModels()[children[child]],
                                descriptor: childDescriptor,
                                activated: active,
                                onTabClick: this.props.onChildTabClicked,
                                onTabCloseButtonClicked: this.props.onChildTabCloseButtonClicked,
                                tabOrientation: this.props.dataContext.get_TabOrientation(),
                                index: child,
                                isFixed: this.props.isFixed,
                                noOfSiblings: this.props.dataContext.get_ChildrenList().get_Count() - 1,
                                tabArray: tabArrayCollection,
                                tabIndex: this.props.tabIndex,
                                dataId: children[child]
                            });
                    contentChildren.push(session)
                }
                return React.DOM.div({
                        ref: "multisessiontabcontrol",
                        key: " multisessiontabcontrol",
                        className: CssClassSet({
                                unfocused: this.props.activeContainerName != this.props.dataContext.get_Name(),
                                horizontalActive: this.props.areHorizontalTabsPresent
                            },
                            "tabContainer")
                    },
                    contentChildren)
            };
            return MultiSessionTabContainerSpec
        }(TsAdapter.SpecBase);
        exports.MultiSessionTabContainer = DataWrapperComponent.wrapComponent(new MultiSessionTabContainerSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/ReferencePanel/ReferencePanel",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/ComponentFactory",
        "Core/Binding/UIHasRenderedMixin", "Components/DataWrapperComponent"
    ],
    function(require, exports, TsAdapter, ComponentFactory, UIHasRendered, DataWrapperComponent) {
        exports.DESCRIPTOR_NAME = "ReferencePanel";
        var ReferencePanelSpec = function(_super) {
            __extends(ReferencePanelSpec, _super);

            function ReferencePanelSpec() {
                _super.apply(this, arguments);
                this.displayName = "ReferencePanel";
                this.mixins = [UIHasRendered.Mixin];
                this.listenToProperties = ["ActiveContainer"]
            }

            ReferencePanelSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["onChildTabClicked"] = this.onChildTabClicked;
                childProps["onChildTabCloseButtonClicked"] = this.onChildTabCloseButtonClicked;
                childProps["isFixed"] = true;
                childProps["activeContainerName"] = this.props.dataContext.get_ActiveContainer();
                childProps["areHorizontalTabsPresent"] = this.props.dataContext.get_ChildViewModels()["HorizontalTabs"]
                    .get_ChildrenList().toArray().length >
                    0;
                childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            ReferencePanelSpec.prototype
                .onChildTabCloseButtonClicked = function(ref) {
                    this.props.dataContext.onChildTabCloseButtonClicked(ref.toString())
                };
            ReferencePanelSpec.prototype.onChildTabClicked = function(ref) {
                ref = ref.toString();
                this.props.dataContext.onChildTabClicked(ref, false)
            };
            ReferencePanelSpec.prototype.render = function() {
                var contentChildren = ComponentFactory
                    .createChildComponents(this.props.dataContext,
                        this.props.descriptor,
                        this.props.clientContext,
                        this.childDecorator);
                return React.DOM.div({ ref: "referencepanel", key: " referencepanel", className: "referencePanel" },
                    [contentChildren])
            };
            return ReferencePanelSpec
        }(TsAdapter.SpecBase);
        exports.ReferencePanel = DataWrapperComponent.wrapComponent(new ReferencePanelSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/RefreshControl/RefreshControl",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/FontIcon", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, FontIcon, Constants) {
        exports.DESCRIPTOR_NAME = "RefreshControl";
        var RefreshControlSpec = function(_super) {
            __extends(RefreshControlSpec, _super);

            function RefreshControlSpec() {
                _super.apply(this, arguments);
                this.displayName = "RefreshControl";
                this.listenToProperties = ["Enabled", "ModelContext"]
            }

            RefreshControlSpec.prototype.getInitialState = function() { return { showAsListStyle: true } };
            RefreshControlSpec.prototype.renderRefreshButton = function() {
                return React.DOM.div({
                        key: "Refresh",
                        onClick: this.refreshData,
                        className: "refreshButtonDiv",
                        title: this.props.clientContext
                            .getLocalizedString("InteractionCentricDashboard_RefreshButton_Tooltip")
                    },
                    FontIcon.FontIcon({ symbolName: "Refresh" }))
            };
            RefreshControlSpec.prototype.handleOnKeyDown = function(e) {
                (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) &&
                    this.props.dataContext.RefreshData()
            };
            RefreshControlSpec.prototype.refreshData = function() { this.props.dataContext.RefreshData() };
            RefreshControlSpec.prototype.render = function() {
                return React.DOM.div({
                        className: "refreshButton",
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        "aria-label": this.props.clientContext
                            .getLocalizedString("InteractionCentricDashboard_RefreshButton_Tooltip"),
                        onKeyDown: this.handleOnKeyDown
                    },
                    this.renderRefreshButton())
            };
            return RefreshControlSpec
        }(TsAdapter.SpecBase);
        exports.RefreshControl = DataWrapperComponent.wrapComponent(new RefreshControlSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarGroup",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/ComponentFactory", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, ComponentFactory, Constants) {
        exports.DESCRIPTOR_NAME = "NavBarGroup";
        var NavBarGroupSpec = function(_super) {
            __extends(NavBarGroupSpec, _super);

            function NavBarGroupSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarGroup";
                this.listenToProperties = [""];
                this.lastChild = 0
            }

            NavBarGroupSpec.prototype.getInitialState = function() {
                var state = {};
                state.NavBarGroupState = false;
                return state
            };
            NavBarGroupSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["onClick"] = this.props.onClick;
                childProps["onKeyDown"] = this.props.onKeyDown;
                childProps["inNavBar"] = this.props.inNavBar;
                childProps["key"] = this.props.inNavBar == true
                    ? "active" + childProps["dataContext"].get_Id()
                    : childProps["dataContext"].get_Id();
                childProps["tabIndex"] = 10;
                return factory(childProps)
            };
            NavBarGroupSpec.prototype.render = function() {
                var children = [];
                children = ComponentFactory
                    .createChildComponents(this.props.dataContext,
                        this.props.descriptor,
                        this.props.clientContext,
                        this.childDecorator);
                var label = this.props.dataContext.get_ResourceId();
                if (label === "")
                    label = this.props.clientContext.getLocalizedString("Web.crmToday.xsl.aspx_122") +
                        this.props.dataContext.get_UnknownNodeCount();
                var NavBarGroupHeader = React.DOM.div({
                            key: "groupHeader",
                            tabIndex: this.props.dataContext.get_StartIndex(),
                            "data-seq": this.props.dataSeq,
                            onKeyDown: this.itemOnKeyDownHandler,
                            className: "navBarGroupHeader"
                        },
                        label),
                    NavBarGroupSubAreaFlyout = React.DOM.div({
                            key: "groupSubAreaFlyout",
                            className: "navBarGroupSubAreaFlyout"
                        },
                        children);
                return React.DOM.div({ className: "navBarGroup" }, [NavBarGroupHeader, NavBarGroupSubAreaFlyout])
            };
            NavBarGroupSpec.prototype.itemOnKeyDownHandler = function(e) {
                var activeElement = document ? document.activeElement : null,
                    currentElement = e.target,
                    dataId = currentElement.getAttribute("data-seq");
                if (!activeElement || !dataId) return;
                else {
                    var dataIdSequence = parseInt(dataId.substring(dataId.lastIndexOf("_") + 1)),
                        dataIdConstant = dataId.substring(0, dataId.lastIndexOf("_") + 1);
                    this.props.onKeyDown(e);
                    switch (e.keyCode) {
                    case Constants.DOWN_ARROW_KEY_CODE:
                        var nextSibling = activeElement ? activeElement.nextSibling : null,
                            childNode = nextSibling ? nextSibling.childNodes[0] : null,
                            attributeArray = childNode ? childNode.attributes : null;
                        if (attributeArray)
                            for (var cnt = 0; attributeArray.length; cnt++)
                                if (attributeArray[cnt].name == "data-seq") {
                                    var firstElementInGroup = attributeArray[cnt].textContent;
                                    e.preventDefault();
                                    var navBarGroupParent = $(activeElement).parents(".navBarGroup"),
                                        firstGroupElement = navBarGroupParent
                                            ? navBarGroupParent.find('[data-seq="' + firstElementInGroup + '"]')
                                            : null;
                                    firstGroupElement && firstGroupElement.focus();
                                    break
                                }
                        break;
                    case Constants.RIGHT_ARROW_KEY_CODE:
                        var nextControlId = dataIdConstant + (dataIdSequence + 1);
                        this.focusElement(nextControlId);
                        break;
                    case Constants.LEFT_ARROW_KEY_CODE:
                        var previousControlId = dataIdConstant + (dataIdSequence - 1);
                        this.focusElement(previousControlId);
                        break;
                    case Constants.TAB_KEY_CODE:
                        if (!e.shiftKey) {
                            var lastControlId = dataIdConstant + (dataIdSequence + 1);
                            if ($('[data-seq="' + lastControlId + '"]').length == 0) {
                                this.lastChild = dataIdSequence;
                                var firstControlId = dataIdConstant + "1";
                                this.focusElement(firstControlId);
                                e.preventDefault()
                            } else {
                                this.focusElement(lastControlId);
                                e.preventDefault()
                            }
                        } else if (e.shiftKey) {
                            var navBarAreaFlyoutParent = $(activeElement).parents(".navBarAreaFlyout"),
                                childrenArray = navBarAreaFlyoutParent ? navBarAreaFlyoutParent.children() : null;
                            if (childrenArray) {
                                this.lastChild = childrenArray ? childrenArray.length : null;
                                var prevControlId = dataIdSequence == 1 ? this.lastChild : dataIdSequence - 1,
                                    firstElementToFocus = dataIdConstant + prevControlId;
                                this.focusElement(firstElementToFocus);
                                e.preventDefault()
                            }
                        }
                        break
                    }
                }
            };
            NavBarGroupSpec.prototype.focusElement = function(nnavBarAreaTileDataIndex) {
                var elementToFocus = $('[data-seq="' + nnavBarAreaTileDataIndex + '"]');
                elementToFocus != null && elementToFocus.focus()
            };
            return NavBarGroupSpec
        }(TsAdapter.SpecBase);
        exports.NavBarGroup = DataWrapperComponent.wrapComponent(new NavBarGroupSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/NavigationBar/NavBarSubArea",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/FontIcon", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, FontIcon, Constants) {
        exports.DESCRIPTOR_NAME = "NavBarSubArea";
        var NavBarSubAreaSpec = function(_super) {
            __extends(NavBarSubAreaSpec, _super);

            function NavBarSubAreaSpec() {
                _super.apply(this, arguments);
                this.displayName = "NavBarSubArea";
                this.listenToProperties = [""]
            }

            NavBarSubAreaSpec.prototype.onTileClicked = function() {
                this.setState({ NavBarSubAreaState: !this.state.NavBarSubAreaState })
            };
            NavBarSubAreaSpec.prototype.getInitialState = function() {
                var state = {};
                state.NavBarSubAreaState = false;
                return state
            };
            NavBarSubAreaSpec.prototype.handleSubAreaClick = function() {
                if (this.props.dataContext.get_Url() != null) return;
                this.props.dataContext.navigateTo();
                this.props.onClick(this.props.dataContext)
            };
            NavBarSubAreaSpec.prototype.handleSubAreaEnter = function() {
                var url = this.props.dataContext.getUrlForSubAreaNode();
                if (url !== null && url !== "" && url !== undefined) {
                    window.open(url);
                    return
                }
                this.props.dataContext.navigateTo();
                this.props.onClick(this.props.dataContext)
            };
            NavBarSubAreaSpec.prototype.render = function() {
                if (this.props.dataContext
                    .get_Entity() !==
                    "" &&
                    !this.props.dataContext.IsUserPrivilegedForEntityRead()) return React.DOM.noscript();
                var label = this.props.dataContext.get_ResourceId() === ""
                    ? this.props.dataContext.get_Entity()
                    : this.props.dataContext.get_ResourceId();
                if (label === "")
                    label = this.props.clientContext.getLocalizedString("Web.crmToday.xsl.aspx_122") +
                        this.props.dataContext.get_UnknownNodeCount();
                var url = this.props.dataContext.getUrlForSubAreaNode(), labelString = label;
                if (url != null && url != "")
                    if (url
                        .indexOf("msdyn_launchDesigner") >
                        0) label = React.DOM.a({ href: url, style: { color: "#000000" } }, labelString);
                    else label = React.DOM.a({ href: url, target: "_blank", style: { color: "#000000" } }, labelString);
                var entityLogicalName = this.props.dataContext.get_EntityLogicalName(),
                    entityNameIcon = React.DOM.span({
                            key: "subAreaIcon",
                            style: { backgroundColor: this.props.dataContext.get_EntityColor() },
                            className: "subAreaIcon"
                        },
                        FontIcon.FontIcon({
                            symbolName: (this.props.dataContext.get_IsHelpSubAreaInSiteMap()
                                    ? "help"
                                    : entityLogicalName) +
                                " entity"
                        })),
                    entityNamelabel = React.DOM.label({ key: "subAreaLabel", className: "subAreaLabel" }, label);
                return React.DOM.div({
                        className: "navBarSubAreaContainer",
                        onClick: this.handleSubAreaClick,
                        onKeyDown: this.itemOnKeyDownHandler,
                        id: this.props.dataContext.get_Id(),
                        "data-id": labelString,
                        "data-seq": this.props.dataSeq,
                        tabIndex: -1,
                        title: labelString,
                        role: "link"
                    },
                    [entityNameIcon, entityNamelabel])
            };
            NavBarSubAreaSpec.prototype.itemOnKeyDownHandler = function(e) {
                this.props.onKeyDown(e);
                var currentElement = e.target, dataId = currentElement.getAttribute("data-seq");
                if (!dataId) return;
                else {
                    var dataIdseq = parseInt(dataId.substring(dataId.lastIndexOf("_") + 1)),
                        dataIdConstant = dataId.substring(0, dataId.lastIndexOf("_") + 1);
                    switch (e.keyCode) {
                    case Constants.ENTER_KEY_CODE:
                        this.handleSubAreaEnter();
                        break;
                    case Constants.TAB_KEY_CODE:
                        e.preventDefault();
                    case Constants.UP_ARROW_KEY_CODE:
                    case Constants.DOWN_ARROW_KEY_CODE:
                        e.preventDefault();
                        var nextItemSeq = -1;
                        if (e.keyCode == Constants.DOWN_ARROW_KEY_CODE) nextItemSeq = dataIdseq + 1;
                        else if (e.keyCode == Constants.UP_ARROW_KEY_CODE) nextItemSeq = dataIdseq - 1;
                        if (nextItemSeq > -1)
                            if (e.shiftKey) this.focusSubAreaItem(dataIdConstant + nextItemSeq);
                            else if (e.keyCode == Constants.UP_ARROW_KEY_CODE && nextItemSeq <= 0) {
                                var activeElement = $(document.activeElement),
                                    activeElementParent = activeElement ? activeElement.parents(".navBarGroup") : null,
                                    navBarGroupHeader = activeElementParent
                                        ? activeElementParent.find(".navBarGroupHeader")
                                        : null;
                                navBarGroupHeader && navBarGroupHeader.focus()
                            } else this.focusSubAreaItem(dataIdConstant + nextItemSeq);
                        break;
                    case Constants.LEFT_ARROW_KEY_CODE:
                        var activeElement = $(document.activeElement),
                            activeElementParent = activeElement ? activeElement.parents(".navBarGroup") : null,
                            prevElement = activeElementParent ? activeElementParent.prev(".navBarGroup") : null,
                            navBarSubAreaContainer = prevElement ? prevElement.find(".navBarSubAreaContainer") : null,
                            attributeArray = navBarSubAreaContainer
                                ? navBarSubAreaContainer.length ? navBarSubAreaContainer[0].attributes : null
                                : null;
                        if (attributeArray)
                            for (var cnt = 0; cnt < attributeArray.length; cnt++)
                                if (attributeArray[cnt].name == "data-seq") {
                                    navBarSubAreaContainer.first() && navBarSubAreaContainer.first().focus();
                                    break
                                }
                        break;
                    case Constants.RIGHT_ARROW_KEY_CODE:
                        var activeElement = $(document.activeElement),
                            activeElementParent = activeElement ? activeElement.parents(".navBarGroup") : null,
                            nextElement = activeElementParent ? activeElementParent.next(".navBarGroup") : null,
                            navBarSubAreaContainer = nextElement ? nextElement.find(".navBarSubAreaContainer") : null,
                            attributeArray = navBarSubAreaContainer
                                ? navBarSubAreaContainer.length ? navBarSubAreaContainer[0].attributes : null
                                : null;
                        if (attributeArray)
                            for (var cnt = 0; cnt < attributeArray.length; cnt++)
                                if (attributeArray[cnt].name == "data-seq") {
                                    navBarSubAreaContainer.first() && navBarSubAreaContainer.first().focus();
                                    break
                                }
                        break
                    }
                }
            };
            NavBarSubAreaSpec.prototype.focusSubAreaItem = function(queueItemlDataId) {
                var queueItem = $('[data-seq="' + queueItemlDataId + '"]');
                if (queueItem != null) {
                    var activeElement = $(document.activeElement),
                        activeElementParent = activeElement ? activeElement.parents(".navBarGroup") : null,
                        queueItem = activeElementParent
                            ? activeElementParent.find('[data-seq="' + queueItemlDataId + '"]')
                            : null;
                    queueItem && queueItem.focus()
                }
            };
            return NavBarSubAreaSpec
        }(TsAdapter.SpecBase);
        exports.NavBarSubArea = DataWrapperComponent.wrapComponent(new NavBarSubAreaSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/RichEntityContent/RichEntityContent",
    ["require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent"],
    function(require, exports, TsAdapter, DataWrapperComponent) {
        exports.DESCRIPTOR_NAME = "RichEntityContent";
        var RichEntityContentSpec = function(_super) {
            __extends(RichEntityContentSpec, _super);

            function RichEntityContentSpec() {
                _super.apply(this, arguments);
                this.displayName = "RichEntityContent";
                this.listenToProperties = ["Data"]
            }

            RichEntityContentSpec.prototype.componentDidUpdate = function() {
                var iframe = this.refs[RichEntityContentSpec.iFrameRef];
                if (iframe instanceof HTMLIFrameElement) {
                    this.element = ReactDOM.findDOMNode(this);
                    $(this.element).parents("div:first").addClass(RichEntityContentSpec.controlValue)
                        .parents("div:first").addClass(RichEntityContentSpec.sectionControl).parents("div:first")
                        .addClass(RichEntityContentSpec.section);
                    $(this.element).contents().find("body").css("font-family", '"SegoeUI", "Segoe UI"');
                    var data = this.props.dataContext.get_Data(),
                        frameDoc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
                    frameDoc.write(data ? data : "")
                }
                return false
            };
            RichEntityContentSpec.prototype.componentDidMount = function() { this.componentDidUpdate() };
            RichEntityContentSpec.prototype.render = function() {
                var iFrameTabIndex = this.props.dataContext.get_NextTabIndex();
                this.props.dataContext.set_NextTabIndex(iFrameTabIndex + 1);
                return React.DOM.iframe({
                    sandbox: "allow-scripts allow-same-origin",
                    key: "RichEntityContent-IFrame",
                    className: RichEntityContentSpec.iFrameClass,
                    ref: RichEntityContentSpec.iFrameRef,
                    tabIndex: this.props.dataContext.get_IsInteractionCentricEnabled() ? iFrameTabIndex : null
                })
            };
            RichEntityContentSpec.rootClass = "richEntityContent";
            RichEntityContentSpec.rootPrefix = RichEntityContentSpec.rootClass + "-";
            RichEntityContentSpec.iFrameClass = RichEntityContentSpec.rootPrefix + "IFrame";
            RichEntityContentSpec.iFrameRef = RichEntityContentSpec.rootPrefix + "IFrameRef";
            RichEntityContentSpec.controlValue = RichEntityContentSpec.rootPrefix + "ControlValue";
            RichEntityContentSpec.sectionControl = RichEntityContentSpec.rootPrefix + "SectionControl";
            RichEntityContentSpec.section = RichEntityContentSpec.rootPrefix + "Section";
            return RichEntityContentSpec
        }(TsAdapter.SpecBase);
        exports.RichEntityContent = DataWrapperComponent.wrapComponent(new RichEntityContentSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/InteractionCentricForm/InteractionCentricFormLabel",
    ["require", "exports", "Components/DataWrapperComponent", "Components/Common/Label"],
    function(require, exports, DataWrapperComponent, Label) {
        exports.DESCRIPTOR_NAME = "InteractionCentricFormLabel";
        var InteractionCentricFormLabelSpec = function(_super) {
            __extends(InteractionCentricFormLabelSpec, _super);

            function InteractionCentricFormLabelSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionCentricFormLabel";
                this.listenToProperties = [Label.RENDERED_PROPERTY_NAME, "Visible"]
            }

            InteractionCentricFormLabelSpec.prototype.render = function() {
                var root = this.props.dataContext.get_Root();
                if (root
                    .get_ComponentType() ==
                    40 &&
                    root.get_FormMode() == 1)
                    return React.DOM.div({ className: "interactionCentricFormLabel" },
                        this.props.dataContext.getInteractionCentricNewFormTitle(root.get_PrimaryModelName()));
                else return _super.prototype.render.call(this)
            };
            return InteractionCentricFormLabelSpec
        }(Label.LabelSpec);
        exports.InteractionCentricFormLabel = DataWrapperComponent.wrapComponent(new InteractionCentricFormLabelSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/InteractionCentricForm/InteractionCentricFormTabNavigator",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent", "Utils/CssClassSet",
        "Components/ComponentFactory", "Components/Primitives/Popup", "Components/Common/Constants",
        "Components/Common/AccessibilityUtility"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        CssClassSet,
        ComponentFactory,
        Popup,
        Constants,
        AccessibilityUtility) {
        exports.DESCRIPTOR_NAME = "InteractionCentricFormTabNavigator";
        var InteractionCentricFormTabNavigatorSpec = function(_super) {
            __extends(InteractionCentricFormTabNavigatorSpec, _super);

            function InteractionCentricFormTabNavigatorSpec() {
                _super.apply(this, arguments);
                this.displayName = "InteractionCentricFormTabNavigator";
                this.listenToProperties = ["Visible", "CurrentSelectedValue"];
                this.shouldFocusPopupSourceElement = false
            }

            InteractionCentricFormTabNavigatorSpec.prototype.handleOnChange = function(e, value) {
                if (this.props.dataContext.get_Enabled()) {
                    e.preventDefault();
                    this.props.dataContext.set_CurrentSelectedValue(value);
                    this.props.onChange && this.props.onChange(e, value)
                }
            };
            InteractionCentricFormTabNavigatorSpec.prototype
                .getInitialState = function() { return { maxTabNamesToDisplay: 5 } };
            InteractionCentricFormTabNavigatorSpec.prototype
                .getDefaultProps = function() { return { maxWidthOfTabs: 220 } };
            InteractionCentricFormTabNavigatorSpec.prototype.componentDidMount = function() {
                window.addEventListener("resize", this.handleResize);
                this.handleResize();
                $($(ReactDOM.findDOMNode(this)).find(".radio-button-container")[0]).addClass("majorComponent")
            };
            InteractionCentricFormTabNavigatorSpec.prototype
                .componentWillUnmount = function() { window.removeEventListener("resize", this.handleResize) };
            InteractionCentricFormTabNavigatorSpec.prototype.componentDidUpdate = function() {
                if (this.shouldFocusPopupSourceElement) {
                    this.shouldFocusPopupSourceElement = false;
                    AccessibilityUtility.focusPopupSourceElement(ReactDOM.findDOMNode(this))
                }
            };
            InteractionCentricFormTabNavigatorSpec.prototype.handleResize = function() {
                var maxVisisbleButtons = Math.floor(window.innerWidth / this.props.maxWidthOfTabs) - 1;
                maxVisisbleButtons = maxVisisbleButtons < 0 ? 0 : maxVisisbleButtons;
                this.state.maxTabNamesToDisplay !== maxVisisbleButtons &&
                    this.setState({ maxTabNamesToDisplay: maxVisisbleButtons })
            };
            InteractionCentricFormTabNavigatorSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["onChange"] = this.handleOnChange;
                childProps["nameAttribute"] = this.props.dataContext.get_NameAttribute();
                childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            InteractionCentricFormTabNavigatorSpec.prototype
                .handlePopUpDismiss = function() { this.props.dataContext.set_ShouldDisplayPopout(false) };
            InteractionCentricFormTabNavigatorSpec.prototype.handlePopUpKeyDown = function(e) {
                var targetElement = e.target;
                switch (e.keyCode) {
                case Constants.ESCAPE_KEY_CODE:
                case Constants.ENTER_KEY_CODE:
                case Constants.TAB_KEY_CODE:
                    if (e
                        .keyCode ===
                        Constants.TAB_KEY_CODE &&
                        AccessibilityUtility.doesNextElementExist(targetElement, e)) break;
                    this.handlePopUpDismiss();
                    this.shouldFocusPopupSourceElement = true;
                    break;
                default:
                    break
                }
            };
            InteractionCentricFormTabNavigatorSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Visible()) return React.DOM.noscript();
                var interactionCentricFormTabNavigatorClassName = null;
                if (this.props
                    .descriptor &&
                    this.props.descriptor.Properties)
                    interactionCentricFormTabNavigatorClassName =
                        "className" in this.props.descriptor.Properties
                        ? this.props.descriptor.Properties["className"]
                        : this.props.className;
                var tabNavigators = [];
                tabNavigators = ComponentFactory
                    .createChildComponents(this.props.dataContext,
                        this.props.descriptor,
                        this.props.clientContext,
                        this.childDecorator);
                var popup, tabNavigatorsToDisplayOutsidePopup;
                if (tabNavigators.length > this.state.maxTabNamesToDisplay + 1) {
                    tabNavigatorsToDisplayOutsidePopup = tabNavigators.slice(0, this.state.maxTabNamesToDisplay);
                    var tabNavigatorsToDisplayInPopup = tabNavigators
                        .slice(this.state.maxTabNamesToDisplay, tabNavigators.length);
                    tabNavigatorsToDisplayInPopup.pop();
                    for (var ellipsesComponent, i = 0;
                        i < tabNavigators.length;
                        i++
                    )
                        if (tabNavigators[i].props.dataContext
                            .get_Name() ==
                            "EllipsesComponent") ellipsesComponent = tabNavigators[i];
                    if (ellipsesComponent)
                        tabNavigatorsToDisplayOutsidePopup = tabNavigatorsToDisplayOutsidePopup
                            .concat(ellipsesComponent);
                    popup = Popup.Popup({
                            visible: this.props.dataContext.get_ShouldDisplayPopout(),
                            onDismiss: this.handlePopUpDismiss,
                            onKeyDown: this.handlePopUpKeyDown
                        },
                        tabNavigatorsToDisplayInPopup);
                    return React.DOM.div({
                            className: CssClassSet(null,
                                "radio-button-group",
                                interactionCentricFormTabNavigatorClassName),
                            style: this.props.style
                        },
                        [tabNavigatorsToDisplayOutsidePopup, popup])
                } else {
                    tabNavigators.pop();
                    return React.DOM.div({
                            className: CssClassSet(null,
                                "radio-button-group",
                                interactionCentricFormTabNavigatorClassName),
                            style: this.props.style
                        },
                        tabNavigators)
                }
            };
            return InteractionCentricFormTabNavigatorSpec
        }(TsAdapter.SpecBase);
        exports.InteractionCentricFormTabNavigator = DataWrapperComponent
            .wrapComponent(new InteractionCentricFormTabNavigatorSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/EmailAttachment/EmailAttachment",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, Constants) {
        exports.DESCRIPTOR_NAME = "EmailAttachment";
        var EmailAttachmentSpec = function(_super) {
            __extends(EmailAttachmentSpec, _super);

            function EmailAttachmentSpec() {
                _super.apply(this, arguments);
                this.displayName = "EmailAttachment";
                this.listenToProperties = ["Visible", "AttachmentsRefresh"]
            }

            EmailAttachmentSpec.prototype.onPopupWindowBeforeUnload = function(ev) { this.props.dataContext.Refresh() };
            EmailAttachmentSpec.prototype.handleShortPress = function(e) {
                e.stopPropagation();
                e.preventDefault();
                var height = this.props.dataContext.GetPopupHeight(),
                    width = this.props.dataContext.GetPopupWidth(),
                    left = (window.screen.width - width) / 2,
                    top = (window.screen.height - height) / 2,
                    popupWindow = window.open(this.props.dataContext.GetAttachmentItemUri(),
                        "_blank",
                        this.props.dataContext.GetWindowOptions(width, height, top, left)),
                    viewModel = this.props.dataContext,
                    timer = setInterval(function() {
                            if (popupWindow.closed) {
                                clearInterval(timer);
                                viewModel.Refresh()
                            }
                        },
                        viewModel.get_PopupWindowTimeout())
            };
            EmailAttachmentSpec.prototype.handleKeyDownHandler = function(e) {
                var targetEvent = e;
                if (targetEvent.keyCode == Constants.ENTER_KEY_CODE) {
                    this.handleShortPress(e);
                    var parentElement = $(ReactDOM.findDOMNode(this).parentElement),
                        closestTabbableAncestor = parentElement
                            ? parentElement.closest("[tabindex]:not([tabindex^=-])")
                            : null;
                    closestTabbableAncestor != null && closestTabbableAncestor.focus()
                }
            };
            EmailAttachmentSpec.prototype.render = function() {
                var children = [],
                    vm = this.props.dataContext,
                    fileName = React.DOM.div({ key: "EmailAttachmentFileName" }, vm.get_FileName()),
                    fileSize = React.DOM.div({ key: "EmailAttachmentFileSize" }, vm.get_FileSize());
                return React.DOM.div({
                        className: "EmailAttachmentItem",
                        onShortPress: this.handleShortPress,
                        title: vm.get_FileName(),
                        tabIndex: this.props.tabIndex ? this.props.tabIndex : this.props.dataContext.get_NextTabIndex(),
                        onKeyDown: this.handleKeyDownHandler
                    },
                    [fileName, fileSize])
            };
            return EmailAttachmentSpec
        }(TsAdapter.SpecBase);
        exports.EmailAttachment = DataWrapperComponent.wrapComponent(new EmailAttachmentSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/ComponentSwitcher",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/ComponentFactory"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, ComponentFactory) {
        exports.DESCRIPTOR_NAME = "ComponentSwitcher";
        var ComponentSwitcherSpec = function(_super) {
            __extends(ComponentSwitcherSpec, _super);

            function ComponentSwitcherSpec() {
                _super.apply(this, arguments);
                this.displayName = "ComponentSwitcher";
                this.listenToProperties = ["Render"]
            }

            ComponentSwitcherSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["tabIndex"] = this.props.tabIndex;
                return factory(childProps)
            };
            ComponentSwitcherSpec.prototype.render = function() {
                var children = [];
                if (this.props.dataContext.get_ShouldShowSpecifyFieldError() &&
                    this.props.dataContext.get_BindingField() != null) {
                    var errorString = React.DOM.span({ key: "error", className: "listComponentView_errorTitle" },
                        this.props.dataContext.get_SpecifyFieldErrorTitle());
                    children.push(errorString)
                } else if (this.props.dataContext
                    .get_IsInteractionCentricEnabled())
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator);
                else
                    children = ComponentFactory
                        .createChildComponents(this.props.dataContext, this.props.descriptor, this.props.clientContext);
                return React.DOM.div({ key: "ComponentSwitcher", className: "componentswitcher" }, children)
            };
            return ComponentSwitcherSpec
        }(TsAdapter.SpecBase);
        exports.ComponentSwitcher = DataWrapperComponent.wrapComponent(new ComponentSwitcherSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/Dialogs/QuickViewForm",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/ComponentFactory"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, ComponentFactory) {
        exports.DESCRIPTOR_NAME = "QuickViewForm";
        var QuickViewFormSpec = function(_super) {
            __extends(QuickViewFormSpec, _super);

            function QuickViewFormSpec() {
                _super.apply(this, arguments);
                this.displayName = "QuickViewForm";
                this.listenToProperties = ["DataChanged", "Visible", "Rerender"]
            }

            QuickViewFormSpec.prototype.childDecorator = function(factory, childProps) {
                childProps["tabIndex"] = this.props.tabIndex;
                childProps["shouldUseTabIndex"] = true;
                return factory(childProps)
            };
            QuickViewFormSpec.prototype.render = function() {
                if (!this.props.dataContext.get_Rerender()) return React.DOM.div({ style: { display: "none" } });
                if (this.props.dataContext.get_SetActionable()) {
                    this.props.dataContext.RefreshQuickViewFormData();
                    return React.DOM.noscript()
                }
                var body = [];
                if (this.props.dataContext
                    .get_IsInteractionCentricEnabled())
                    body = ComponentFactory
                        .createChildComponents(this.props.dataContext,
                            this.props.descriptor,
                            this.props.clientContext,
                            this.childDecorator);
                else
                    body = ComponentFactory
                        .createChildComponents(this.props.dataContext, this.props.descriptor, this.props.clientContext);
                return React.DOM.div({ key: "quickviewcontainer", className: "quickviewcontainer" }, body)
            };
            return QuickViewFormSpec
        }(TsAdapter.SpecBase);
        exports.QuickViewForm = DataWrapperComponent.wrapComponent(new QuickViewFormSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/DashboardPicker/DashboardPicker",
    [
        "require", "exports", "Core/Binding/PureUpdateMixin",
        "Components/InteractionCentric/Popup/InteractionCentricPopupWrapper", "Core/ReactTypescriptAdapter"
    ],
    function(require, exports, PureUpdate, InteractionCentricPopupWrapper, TsAdapter) {
        exports.DESCRIPTOR_NAME = "DashboardPicker";
        var DashboardPickerSpec = function(_super) {
            __extends(DashboardPickerSpec, _super);

            function DashboardPickerSpec() {
                _super.apply(this, arguments);
                this.displayName = "DashboardPicker";
                this.mixins = [PureUpdate.Mixin]
            }

            DashboardPickerSpec.prototype.render = function() {
                return InteractionCentricPopupWrapper
                    .InteractionCentricPopupWrapper({
                        dataContext: this.props.dataContext,
                        clientContext: this.props.clientContext,
                        tabIndex: this.props.dataContext.get_StartIndex(),
                        selectedItemClassName: "dashboardPickerSelectedItem",
                        selectedItemTextClassName: "dashboardPickerSelectedItemText",
                        mainClassName: "dashboardPicker",
                        dataID: "filterDashboards"
                    })
            };
            return DashboardPickerSpec
        }(TsAdapter.SpecBase);
        exports.DashboardPicker = TsAdapter.createComponent(new DashboardPickerSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/ViewIdDisplay/ViewIdDisplay",
    ["require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent"],
    function(require, exports, TsAdapter, DataWrapperComponent) {
        exports.DESCRIPTOR_NAME = "ViewIdDisplay";
        var ViewIdDisplaySpec = function(_super) {
            __extends(ViewIdDisplaySpec, _super);

            function ViewIdDisplaySpec() {
                _super.apply(this, arguments);
                this.displayName = "ViewIdDisplay";
                this.listenToProperties = ["ViewNameSet"]
            }

            ViewIdDisplaySpec.prototype.render = function() {
                var viewName;
                viewName = this.props.dataContext.get_ViewName();
                var textHolder = React.DOM.div({ className: "textHolder" }, viewName);
                return React.DOM.div({ className: "viewNameContainer", ref: "viewNameContainer" }, textHolder)
            };
            return ViewIdDisplaySpec
        }(TsAdapter.SpecBase);
        exports.ViewIdDisplay = DataWrapperComponent.wrapComponent(new ViewIdDisplaySpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/FilterBar/FilterBar",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/Primitives/Button", "Components/Primitives/FontIcon", "Components/Common/Constants"
    ],
    function(require, exports, TsAdapter, DataWrapperComponent, Button, FontIcon, Constants) {
        exports.DESCRIPTOR_NAME = "FilterBar";
        var FilterBarSpec = function(_super) {
            __extends(FilterBarSpec, _super);

            function FilterBarSpec() {
                _super.apply(this, arguments);
                this.displayName = "FilterBar";
                this.listenToProperties = ["SearchText"]
            }

            FilterBarSpec.prototype.performSearch = function(e) {
                e.key == "Enter" &&
                    !this.props.dataContext.get_IsSearchBlocked() &&
                    this.props.dataContext.RefreshData()
            };
            FilterBarSpec.prototype.handleOnKeyDown = function(e) {
                switch (e.key) {
                case Constants.F8_KEY:
                    this.props.clientContext.focusNextMajorComponent($(e.target), e.shiftKey);
                case Constants.ENTER_KEY:
                    e.preventDefault()
                }
            };
            FilterBarSpec.prototype.onTextBoxChanged = function(event) {
                if (event && event.target) {
                    var target = event.target;
                    this.props.dataContext.set_SearchText(target.value)
                }
            };
            FilterBarSpec.prototype.handleSearchButtonClick = function(e) {
                this.props.dataContext &&
                    !this.props.dataContext.get_IsSearchBlocked() &&
                    this.props.dataContext.RefreshData()
            };
            FilterBarSpec.prototype.render = function() {
                var children = [],
                    textbox = React.DOM.input({
                        ref: "searchTextBox",
                        className: "SearchTextBox majorComponent",
                        key: "FilterSearchBox",
                        role: "textbox",
                        type: this.props.clientContext.getTextBoxTypeString(5),
                        "data-id": "searchText",
                        value: this.props.dataContext.get_SearchText(),
                        maxLength: 100,
                        tabIndex: this.props.tabIndex,
                        placeholder: this.props.clientContext
                            .getLocalizedString("L_InteractionWall_SearchPlaceholder") +
                            " ...",
                        onKeyUp: this.performSearch,
                        onKeyDown: this.handleOnKeyDown,
                        onChange: this.onTextBoxChanged,
                        "aria-label": this.props.ariaLabel
                    }),
                    buttonSearch = Button.Button({
                            key: "button",
                            className: "ButtonSearch",
                            onClick: this.handleSearchButtonClick,
                            dataId: "searchImage"
                        },
                        FontIcon.FontIcon({ symbolName: "SearchButton" }));
                children.push(textbox, buttonSearch);
                return React.DOM.div({ className: "FilterControlGrid" }, children)
            };
            return FilterBarSpec
        }(TsAdapter.SpecBase);
        exports.FilterBar = DataWrapperComponent.wrapComponent(new FilterBarSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/GridView/AssociatedGrid",
    [
        "require", "exports", "Components/InteractionCentric/GridView/GridViewFlyout",
        "Components/DataWrapperComponent",
        "Core/ReactTypescriptAdapter", "Core/Binding/UIHasRenderedMixin",
        "Components/InteractionCentric/GridView/InteractionCentricGridControlView"
    ],
    function(require, exports, GridViewFlyout, DataWrapperComponent, TsAdapter, UIHasRendered, GridControl) {
        exports.DESCRIPTOR_NAME = "AssociatedGrid";
        var AssociatedGridSpec = function(_super) {
            __extends(AssociatedGridSpec, _super);

            function AssociatedGridSpec() {
                _super.apply(this, arguments);
                this.displayName = "AssociatedGrid";
                this.mixins = [UIHasRendered.Mixin];
                this.listenToProperties = ["AssociatedGridSelectViewDataReceived"]
            }

            AssociatedGridSpec.prototype.render = function() {
                if (this.props.dataContext.get_IsAssociatedGridActive()) {
                    var grid = GridControl
                        .InteractionCentricGridControl({
                            dataContext: this.props.dataContext,
                            clientContext: this.props.clientContext
                        });
                    if (this.props.dataContext.get_SystemViewData() != null) {
                        var dropdown = GridViewFlyout
                            .GridViewFlyout({
                                mainClassName: "subGridFlyout",
                                dataContext: this.props.dataContext.get_AssociatedGridFlyoutViewModel(),
                                clientContext: this.props.clientContext,
                                tabIndex: this.props.dataContext.get_NextTabIndex()
                            });
                        dropdown.props.dataContext.ItemSelected(this.props.dataContext.get_DefinitionId(), null)
                    }
                    return React.DOM.div({ className: "interactionCentricAssociatedGrid" }, [dropdown, grid])
                } else return React.DOM.noscript()
            };
            return AssociatedGridSpec
        }(TsAdapter.SpecBase);
        exports.AssociatedGrid = DataWrapperComponent.wrapComponent(new AssociatedGridSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/HybridGridControl",
    [
        "require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent",
        "Components/InteractionCentric/GridView/InteractionCentricGridControlView", "Components/Primitives/FontIcon",
        "Components/Primitives/Button", "Utils/CssClassSet", "Components/Common/Constants",
        "Core/Binding/FocusHandlerMixin"
    ],
    function(require,
        exports,
        TsAdapter,
        DataWrapperComponent,
        InteractionCentricGridControl,
        FontIcon,
        Button,
        CssClassSet,
        Constants,
        FocusHandlerMixin) {
        exports.DESCRIPTOR_NAME = "HybridGridControl";
        var HybridGridControlSpec = function(_super) {
            __extends(HybridGridControlSpec, _super);

            function HybridGridControlSpec() {
                _super.apply(this, arguments);
                this.displayName = "HybridGridControl";
                this.listenToProperties = [
                    "Visible", "EnableRelationshipFilter", "RelationshipLogicalName", "ActiveNavigationStack", "Top"
                ];
                this.mixins = [FocusHandlerMixin.Mixin];
                this.isFirstFocusForDropDown = true;
                this.isFirstBlurForDropDown = true
            }

            HybridGridControlSpec.prototype.getInitialState = function() {
                return { childGridRowsSelected: false, isFirstTime: true, selectedItemTabIndex: -1 }
            };
            HybridGridControlSpec.prototype.onEntityValueChange = function(e) {
                var element = e.target;
                this.props.dataContext.set_SelectedEntity(this.props.dataContext.GetEntityLogicalName(element.value))
            };
            HybridGridControlSpec.prototype.onViewValueChange = function(e) {
                var element = e.target;
                this.props.dataContext.set_SelectedView(element.value)
            };
            HybridGridControlSpec.prototype.getEntityOptions = function() {
                for (var children = [],
                    entities = this.props.dataContext.get_EntitiesDisplayName().toArray().sort(),
                    i = 0;
                    i < entities.length;
                    i++) children.push(React.DOM.option({ value: entities[i] }, entities[i]));
                return children
            };
            HybridGridControlSpec.prototype.getViewOptions = function() {
                for (var children = [], views = this.props.dataContext.get_Views().toArray().sort(), i = 0;
                    i < views.length;
                    i++) children.push(React.DOM.option({ value: views[i] }, views[i]));
                return children
            };
            HybridGridControlSpec.prototype
                .handleDeleteItemCommand = function(index) {
                    this.props.dataContext && this.props.dataContext.DeleteItem(index)
                };
            HybridGridControlSpec.prototype.handleOnKeyDown = function(index, screenReaderText, e) {
                if (e.keyCode == Constants.ENTER_KEY_CODE || e.keyCode == Constants.SPACE_KEY_CODE) {
                    this.handleDeleteItemCommand(index);
                    var selectedItemOnlyScreenReaderElement = document
                        .getElementById("selectedItemOnlyScreenReadableElementId");
                    if (selectedItemOnlyScreenReaderElement && screenReaderText
                    )
                        selectedItemOnlyScreenReaderElement
                            .innerHTML = index == 0
                            ? this.props.dataContext
                            .SelectedItemScreenReaderText(this.props.clientContext
                                .getLocalizedString("Web._controls.lookup.lookupmulti.aspx_173") +
                                " " +
                                screenReaderText)
                            : this.props.dataContext.SelectedItemScreenReaderText(screenReaderText)
                }
            };
            HybridGridControlSpec.prototype.setActionButtonTabIndex = function() {
                if ($(".CrmDialog-body .SearchTextBox") != null) {
                    var tabindex = $(".CrmDialog-body .SearchTextBox").attr("tabindex");
                    $(".CrmDialog-body .SimpleButton").first() != null &&
                        $(".CrmDialog-body .SimpleButton").first().attr("tabindex", tabindex);
                    $(".CrmDialog-body .SimpleButton").last() != null &&
                        $(".CrmDialog-body .SimpleButton").last().attr("tabindex", tabindex)
                }
            };
            HybridGridControlSpec.prototype.setSelectedItemTabIndex = function() {
                if ($(".CrmDialog-body .SearchTextBox") != null) {
                    var tabIndexValue = $(".CrmDialog-body .SearchTextBox").attr("tabindex");
                    this.state.selectedItemTabIndex !== Number(tabIndexValue) &&
                        this.setState({ selectedItemTabIndex: Number(tabIndexValue) })
                }
                if ($("#selectioncontrolId").length != 0 && $("#selectedItemOnlyScreenReadableElementId").length == 0) {
                    var screenReaderElement = $("<div>");
                    screenReaderElement.attr("id", "selectedItemOnlyScreenReadableElementId");
                    screenReaderElement.attr("class", "onlyScreenReadableContent");
                    screenReaderElement.attr("aria-live", "assertive");
                    screenReaderElement.attr("aria-atomic", "true");
                    $("#selectioncontrolId").append(screenReaderElement)
                }
            };
            HybridGridControlSpec.prototype.handleDropDownFocus = function() {
                if (this.isFirstFocusForDropDown) {
                    this.isFirstFocusForDropDown = false;
                    var dialogHeaderLabel = $(".dialog_header_label") ? $(".dialog_header_label").text() : "",
                        searchCriteriaSectionHeader = this.props.clientContext
                            .getLocalizedString("Web.Workplace.home_answers.aspx_41"),
                        searchLabel = this.props.clientContext.getLocalizedString("Search_Label_Find"),
                        searchScreenReaderText = dialogHeaderLabel + ". " + searchCriteriaSectionHeader + searchLabel,
                        lookForContainerElement = $(ReactDOM.findDOMNode(this)).find(".lookForEntityContainer"),
                        selectElement = lookForContainerElement
                            ? lookForContainerElement.find(".entityDropDownSelector")
                            : null;
                    selectElement && selectElement.attr("aria-label", searchScreenReaderText)
                }
            };
            HybridGridControlSpec.prototype.handleDropDownBlur = function() {
                if (this.isFirstBlurForDropDown) {
                    this.isFirstBlurForDropDown = false;
                    var searchCriteriaSectionHeader = this.props.clientContext
                            .getLocalizedString("Web.Workplace.home_answers.aspx_41"),
                        searchLabel = this.props.clientContext.getLocalizedString("Search_Label_Find"),
                        searchScreenReaderText = searchCriteriaSectionHeader + searchLabel,
                        lookForContainerElement = $(ReactDOM.findDOMNode(this)).find(".lookForEntityContainer"),
                        selectElement = lookForContainerElement
                            ? lookForContainerElement
                            .find(".entityDropDownSelector")
                            : null;
                    selectElement && selectElement.attr("aria-label", searchScreenReaderText)
                }
            };
            HybridGridControlSpec.prototype.callbackForFocus = function() {
                var headerLabel = $(".dialog_header_label").parents(".section_control");
                headerLabel[0] != null && headerLabel.focus()
            };
            HybridGridControlSpec.prototype.componentDidUpdate = function() {
                this.setActionButtonTabIndex();
                if (this.state.isFirstTime) {
                    this.setState({ isFirstTime: false });
                    if (this.shouldTakeFocus()) {
                        var focusableItem = $(".entityDropDownSelector");
                        focusableItem != null && focusableItem.length > 0 && focusableItem.focus()
                    }
                }
            };
            HybridGridControlSpec.prototype.renderRecords = function() {
                for (var displayNamesCollection = this.props.dataContext.get_ItemViewModelDisplayNames(),
                    itemsCount = displayNamesCollection.length,
                    results = [],
                    i = 0;
                    i < itemsCount;
                    i++) {
                    var item = displayNamesCollection[i],
                        nextFocussableItem = itemsCount > 1
                            ? i + 1 == itemsCount ? displayNamesCollection[i - 1] : displayNamesCollection[i + 1]
                            : null,
                        selectedItemName = React.DOM.span({ key: "partyListItem" + i, "aria-hidden": true }, item),
                        delButton = Button.Button({
                                key: "delete" + i,
                                imageType: "Symbol",
                                imageName: "Clear",
                                className: "partyListCrossButton",
                                onClick: this.handleDeleteItemCommand.bind(this, i)
                            },
                            FontIcon.FontIcon({ symbolName: "Clear" }));
                    results.push(React.DOM.div({
                            key: "selectedItem" + i,
                            className: "selectedItem",
                            title: item,
                            tabIndex: this.state.selectedItemTabIndex,
                            onKeyDown: this.handleOnKeyDown.bind(this,
                                i,
                                this.props.dataContext.SelectedItemScreenReaderText(nextFocussableItem)),
                            "aria-label": i == 0
                                ? this.props.dataContext
                                .SelectedItemScreenReaderText(this.props.clientContext
                                    .getLocalizedString("Web._controls.lookup.lookupmulti.aspx_173") +
                                    " " +
                                    item)
                                : this.props.dataContext.SelectedItemScreenReaderText(item)
                        },
                        [selectedItemName, delButton]))
                }
                return results
            };
            HybridGridControlSpec.prototype.childGridRowSelected = function() {
                this.setState({ childGridRowsSelected: !this.state.childGridRowsSelected });
                this.setSelectedItemTabIndex()
            };
            HybridGridControlSpec.prototype.getSearchCriteriaView = function() {
                var searchCriteriaLabel = React.DOM.div({
                            key: "searchCriteriaLabelKey",
                            className: CssClassSet({}, "searchCriteriaLabel", "hybridGridLabel")
                        },
                        this.props.clientContext.getLocalizedString("Web.Workplace.home_answers.aspx_41")),
                    rnd = "" + Math.random(),
                    entityDropDownId = "entityDropDownId" + rnd,
                    lookForLabel = React.DOM.label({
                            htmlFor: entityDropDownId,
                            key: "lookForLabel",
                            className: "lookForRecordLabel"
                        },
                        this.props.clientContext.getLocalizedString("Search_Label_Find")),
                    entityDropdown = React.DOM.select({
                            id: entityDropDownId,
                            onChange: this.onEntityValueChange,
                            key: "entityDropDown",
                            className: "entityDropDownSelector",
                            disabled: this.props.dataContext.get_DisableViewPicker(),
                            value: this.props.dataContext.GetSelectedEntityDisplayName(),
                            tabIndex: this.props.tabIndex > 0
                                ? this.props.tabIndex
                                : this.props.dataContext.get_StartIndex(),
                            onFocus: this.handleDropDownFocus,
                            onBlur: this.handleDropDownBlur
                        },
                        this.getEntityOptions()),
                    lookForEntityContainer = React.DOM
                        .div({ key: "lookForEntity", className: "lookForEntityContainer" },
                            [entityDropdown, lookForLabel]),
                    viewDropDownId = "viewDropDownId" + rnd,
                    lookInLabel = React.DOM.label({
                            htmlFor: viewDropDownId,
                            key: "lookInLabel",
                            className: "lookForRecordLabel"
                        },
                        this.props.clientContext.getLocalizedString("Web.Lookup_Label")),
                    viewDropDown = React.DOM.select({
                            id: viewDropDownId,
                            onChange: this.onViewValueChange,
                            key: "viewDropDown",
                            className: "viewDropDownSelector",
                            disabled: this.props.dataContext.get_DisableViewPicker(),
                            value: this.props.dataContext.get_SelectedView(),
                            tabIndex: this.props.tabIndex > 0
                                ? this.props.tabIndex
                                : this.props.dataContext.get_StartIndex(),
                            "aria-label": this.props.clientContext.getLocalizedString("Web.Lookup_Label")
                        },
                        this.getViewOptions()),
                    lookInEntityContainer = React.DOM.div({ key: "lookInEntity", className: "lookInEntityContainer" },
                        [viewDropDown, lookInLabel]),
                    checkboxList = [];
                if (this.props.dataContext.get_AllowFilterOff() &&
                    this.props.dataContext.get_HasRelationshipFilterCondition()) {
                    var enableRelationshipFilterContainer,
                        enableRelationshipFilterId = "enableRelationshipFilterId" + rnd,
                        enableRelationshipFilterLabel = React.DOM
                            .label({
                                    htmlFor: enableRelationshipFilterId,
                                    key: "enableFilterRelationshipLabel",
                                    className: "enableFilterRelationshipLabel"
                                },
                                this.props.dataContext.get_RelationshipFilterText()),
                        enableRelationshipFilterCheckbox = React.DOM
                            .input({
                                type: "checkbox",
                                id: enableRelationshipFilterId,
                                checked: this.props.dataContext.get_EnableRelationshipFilter(),
                                tabIndex: this.props.tabIndex > 0
                                    ? this.props.tabIndex
                                    : this.props.dataContext.get_StartIndex(),
                                "aria-label": this.props.dataContext.get_RelationshipFilterText(),
                                onChange: this.toggleEnableRelationship
                            });
                    checkboxList.push(React.DOM.div({
                            key: "enableFilterRelationship",
                            className: "enableFilterRelationship checkboxItem"
                        },
                        [enableRelationshipFilterCheckbox, enableRelationshipFilterLabel]))
                }
                var checkboxContainer = React.DOM.div({ key: "checkboxContainer", className: "checkboxContainer" },
                    checkboxList);
                return React.DOM.div({ key: "searchCriteriaViewKey" },
                    [searchCriteriaLabel, lookForEntityContainer, lookInEntityContainer, checkboxContainer])
            };
            HybridGridControlSpec.prototype
                .toggleEnableRelationship = function(e) {
                    this.props.dataContext
                        .set_EnableRelationshipFilter(!this.props.dataContext.get_EnableRelationshipFilter())
                };
            HybridGridControlSpec.prototype.render = function() {
                var children = [];
                if (this.props.dataContext.get_ShouldShowOnlyGrid()) {
                    var grid = InteractionCentricGridControl
                            .InteractionCentricGridControl({
                                dataContext: this.props.dataContext.get_InteractionCentricGridViewModel(),
                                clientContext: this.props.clientContext,
                                onSelection: this.childGridRowSelected,
                                tabIndex: this.props.tabIndex > 0
                                    ? this.props.tabIndex
                                    : this.props.dataContext.get_StartIndex(),
                                callbackForFocus: this.callbackForFocus
                            }),
                        dialogGrid = React.DOM.div({ key: "dialogGrid", className: "gridControlInDialog" }, grid);
                    children.push(dialogGrid)
                } else if (this.props.dataContext
                    .get_Views() ==
                    null ||
                    this.props.dataContext.get_Entities() == null) children = [];
                else {
                    var searchCriteriaView = React.DOM.div({
                                key: "searchCriteriaView",
                                className: "searchCriteriaContainer"
                            },
                            this.getSearchCriteriaView()),
                        availableRecordsLabel = React.DOM.div({
                                key: "availableRecordsLabelKey",
                                className: CssClassSet({}, "availableRecordsLabel", "hybridGridLabel")
                            },
                            this.props.clientContext.getLocalizedString("Web._controls.lookup.lookupmulti.aspx_171")),
                        grid = InteractionCentricGridControl
                            .InteractionCentricGridControl({
                                dataContext: this.props.dataContext.get_InteractionCentricGridViewModel(),
                                clientContext: this.props.clientContext,
                                onSelection: this.childGridRowSelected,
                                onSelectionAll: this.childGridRowSelected,
                                headerSectionTitle: this.props.clientContext
                                    .getLocalizedString("Web._controls.lookup.lookupmulti.aspx_171"),
                                tabIndex: this.props.tabIndex > 0
                                    ? this.props.tabIndex
                                    : this.props.dataContext.get_StartIndex()
                            }),
                        dialogGrid = React.DOM.div({ key: "dialogGrid", className: "gridControlInDialog" },
                            [availableRecordsLabel, grid]);
                    children.push(searchCriteriaView);
                    children.push(dialogGrid);
                    if (this.props.dataContext.get_IsMultiSelect()) {
                        var partyListRecords = this.renderRecords(),
                            selectionControlHeader = React.DOM
                                .div({
                                        key: "selectionControlHeaderKey",
                                        className: CssClassSet({}, "selectionControlHeader", "hybridGridLabel")
                                    },
                                    this.props.clientContext
                                    .getLocalizedString("Web._controls.lookup.lookupmulti.aspx_173")),
                            selectionControl = React.DOM.div({
                                    key: "selectionControl",
                                    className: "selectioncontrol",
                                    id: "selectioncontrolId"
                                },
                                React.DOM.div({ className: "selectionControlInnerDiv" }, partyListRecords));
                        children.push(selectionControlHeader, selectionControl)
                    }
                }
                return React.DOM.div({}, children)
            };
            return HybridGridControlSpec
        }(TsAdapter.SpecBase);
        exports.HybridGridControl = DataWrapperComponent.wrapComponent(new HybridGridControlSpec)
    });
var __extends = this && this.__extends ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d }

        __.prototype = b.prototype;
        d.prototype = new __
    };
define("Components/InteractionCentric/ICTimerControl/ICTimerControl",
    ["require", "exports", "Core/ReactTypescriptAdapter", "Components/DataWrapperComponent"],
    function(require, exports, TsAdapter, DataWrapperComponent) {
        exports.DESCRIPTOR_NAME = "ICTimerControl";
        var INPROGRESS = "inProgress",
            CANCELED = "canceled",
            PAUSED = "paused",
            VIOLATED = "violated",
            NEARINGVIOLATION = "nearingViolation",
            SUCCESSFUL = "successful",
            UNSUCCESSFUL = "unsuccessful",
            NOTSET = "notSet",
            NOPRIVILEGE = "noPrivilege",
            SECURE_VALUE_MASK = "*******",
            statusImageName,
            iconClassName,
            statusColor,
            tooltip,
            seconds,
            minutes,
            hours,
            days,
            dayAbbr,
            hoursAbbr,
            minutesAbbr,
            secondsAbbr,
            ICTimerControlSpec = function(_super) {
                __extends(ICTimerControlSpec, _super);

                function ICTimerControlSpec() {
                    _super.apply(this, arguments);
                    this.displayName = "ICTimerControl";
                    this.listenToProperties = ["ViewChanged", "Enabled", "Visible", "Label", "HasFocus"]
                }

                ICTimerControlSpec.prototype.setFocus = function() {
                    if (this.props.dataContext && this.props.dataContext.get_HasFocus()) {
                        var jNode = $(ReactDOM.findDOMNode(this));
                        jNode.focus()
                    }
                };
                ICTimerControlSpec.prototype.componentDidUpdate = function() {
                    this.setFocus();
                    this.props.dataContext.set_HasFocus(false);
                    var jNode = $(ReactDOM.findDOMNode(this));
                    if (jNode.attr("aria-label") == null) jNode.attr("aria-label", this.getScreenReaderText());
                    else !jNode.is(":focus") && jNode.attr("aria-label", this.getScreenReaderText())
                };
                ICTimerControlSpec.prototype.componentDidMount = function() { this.setFocus() };
                ICTimerControlSpec.prototype
                    .componentWillUnmount = function() { this.props.dataContext.set_IsTimerInitialized(false) };
                ICTimerControlSpec.prototype.getScreenReaderText = function() {
                    var labelText = this.props.dataContext.get_ControlLabelValue(),
                        timerStatus = this.props.dataContext.get_TimerState(),
                        timerScreenReaderValue = labelText + " " + timerStatus;
                    if (timerStatus == INPROGRESS || timerStatus == NEARINGVIOLATION || timerStatus == VIOLATED) {
                        var secondsValue = this.props.dataContext.get_Seconds(),
                            minutesValue = this.props.dataContext.get_Minutes(),
                            hoursValue = this.props.dataContext.get_Hours(),
                            daysValue = this.props.dataContext.get_Days(),
                            dayAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Days_Full"),
                            hoursAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Hours_Full"),
                            minutesAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Minutes_Full"),
                            secondsAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Seconds_Full");
                        timerScreenReaderValue += " " +
                            daysValue +
                            " " +
                            dayAbbrValue +
                            " " +
                            hoursValue +
                            " " +
                            hoursAbbrValue +
                            " " +
                            minutesValue +
                            " " +
                            minutesAbbrValue +
                            " " +
                            secondsValue +
                            " " +
                            secondsAbbrValue
                    }
                    return timerScreenReaderValue
                };
                ICTimerControlSpec.prototype.render = function() {
                    var labelText = this.props.dataContext.get_ControlLabelValue(),
                        labelTooltip = String.format(this.props.clientContext
                            .getLocalizedString("ToolTip_Label_TimerControl"),
                            labelText),
                        labelValue = React.DOM.div({ className: "labelValue", title: labelTooltip }, labelText),
                        timerStatus = this.props.dataContext.get_TimerState();
                    iconClassName = "ViewNotifications-symbol";
                    statusColor = "transparent";
                    if (timerStatus == INPROGRESS || timerStatus == NEARINGVIOLATION || timerStatus == VIOLATED) {
                        var secondsValue = this.props.dataContext.get_Seconds(),
                            minutesValue = this.props.dataContext.get_Minutes(),
                            hoursValue = this.props.dataContext.get_Hours(),
                            daysValue = this.props.dataContext.get_Days(),
                            dayAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Days_Full"),
                            hoursAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Hours_Full"),
                            minutesAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Minutes_Full"),
                            secondsAbbrValue = this.props.clientContext.getLocalizedString("TimerControl_Seconds_Full");
                        seconds = React.DOM.div({ className: "timedigit" }, secondsValue);
                        minutes = React.DOM.div({ className: "timedigit" }, minutesValue);
                        hours = React.DOM.div({ className: "timedigit" }, hoursValue);
                        days = React.DOM.div({ className: "timedigit" }, daysValue);
                        dayAbbr = React.DOM.div({ className: "abbreviation", title: dayAbbrValue },
                            this.props.clientContext.getLocalizedString("TimerControl_Days"));
                        hoursAbbr = React.DOM.div({ className: "abbreviation", title: hoursAbbrValue },
                            this.props.clientContext.getLocalizedString("TimerControl_Hours"));
                        minutesAbbr = React.DOM.div({ className: "abbreviation", title: minutesAbbrValue },
                            this.props.clientContext.getLocalizedString("TimerControl_Minutes"));
                        secondsAbbr = React.DOM.div({ className: "abbreviation", title: secondsAbbrValue },
                            this.props.clientContext.getLocalizedString("TimerControl_Seconds"))
                    }
                    var timerValueRow = this.getTimerValueRow(timerStatus),
                        backgroundColorStyle = { backgroundColor: statusColor },
                        divTimerStyle = {
                            display: this.props.dataContext.get_Visible() ? "flex" : "none",
                            disabled: this.props.dataContext.get_Enabled() ? "true" : "false"
                        },
                        statusIcon = React.DOM.div({ className: "crmSymbolIconBackround", style: backgroundColorStyle },
                            [React.DOM.span({ className: "symbolFont " + iconClassName })]),
                        timerContainer = React.DOM.div({ className: "timerContainer", ref: "timerContainer" },
                            timerValueRow);
                    return React.DOM.div({
                            className: "timerControl",
                            title: tooltip,
                            key: "ictimercontrol",
                            style: divTimerStyle,
                            tabIndex: this.props.tabIndex > 0
                                ? this.props.tabIndex
                                : this.props.dataContext.get_StartIndex(),
                            ref: "timerControl"
                        },
                        statusIcon,
                        labelValue,
                        timerValueRow)
                };
                ICTimerControlSpec.prototype.getDaysval = function(timerStatus) {
                    var daysVal = this.props.dataContext.get_Days();
                    if (timerStatus == INPROGRESS)
                        if (daysVal != null && daysVal != "0")
                            return React.DOM.div({ className: "timerValueRow", ref: "timerValue" },
                                days,
                                dayAbbr,
                                hours,
                                hoursAbbr,
                                minutes,
                                minutesAbbr,
                                seconds,
                                secondsAbbr);
                        else
                            return React.DOM.div({ className: "timerValueRow", ref: "timerValue" },
                                hours,
                                hoursAbbr,
                                minutes,
                                minutesAbbr,
                                seconds,
                                secondsAbbr);
                    else if (daysVal != null && daysVal != "0"
                    )
                        return React.DOM.div({
                                className: "timerValueRow",
                                ref: "timerValue",
                                style: { color: statusColor }
                            },
                            days,
                            dayAbbr,
                            hours,
                            hoursAbbr,
                            minutes,
                            minutesAbbr,
                            seconds,
                            secondsAbbr);
                    else
                        return React.DOM.div({
                                className: "timerValueRow",
                                ref: "timerValue",
                                style: { color: statusColor }
                            },
                            hours,
                            hoursAbbr,
                            minutes,
                            minutesAbbr,
                            seconds,
                            secondsAbbr)
                };
                ICTimerControlSpec.prototype.getTimerValueRow = function(timerStatus) {
                    var timerValueRow;
                    switch (timerStatus) {
                    case INPROGRESS:
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_InProgress_TimerControl");
                        timerValueRow = this.getDaysval(timerStatus);
                        break;
                    case NEARINGVIOLATION:
                        statusColor = "#ffa500";
                        iconClassName = "HighPriority-symbol";
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_InProgress_TimerControl");
                        timerValueRow = this.getDaysval(timerStatus);
                        break;
                    case PAUSED:
                        statusColor = "#0072c6";
                        iconClassName = "Pause-symbol";
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_Paused_TimerControl");
                        var paused = React.DOM.div({ className: "timerTableCell" },
                            this.props.clientContext.getLocalizedString("TimerControl_Paused"));
                        timerValueRow = React.DOM.div({
                                className: "timerValueRow",
                                ref: "timerValue",
                                style: { color: statusColor }
                            },
                            paused);
                        break;
                    case SUCCESSFUL:
                        statusColor = "#228c00";
                        iconClassName = "Accept-symbol";
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_Success_TimerControl");
                        var successful = React.DOM.div({ className: "timerTableCell" },
                            this.props.clientContext.getLocalizedString("TimerControl_Succeeded"));
                        timerValueRow = React.DOM.div({
                                className: "timerValueRow",
                                ref: "timerValue",
                                style: { color: statusColor }
                            },
                            successful);
                        break;
                    case UNSUCCESSFUL:
                        statusColor = "#ff0000";
                        iconClassName = "Close-symbol";
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_Failure_TimerControl");
                        var expired = React.DOM.div({ className: "timerTableCell" },
                            this.props.clientContext.getLocalizedString("TimerControl_Failed"));
                        timerValueRow = React.DOM.div({
                                className: "timerValueRow",
                                ref: "timerValue",
                                style: { color: statusColor }
                            },
                            expired);
                        break;
                    case VIOLATED:
                        statusColor = "#ff0000";
                        iconClassName = "Close-symbol";
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_Violated_TimerControl");
                        timerValueRow = this.getDaysval(timerStatus);
                        break;
                    case CANCELED:
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_Canceled_TimerControl");
                        var canceled = React.DOM.div({ className: "timerTableCell" },
                            this.props.clientContext.getLocalizedString("TimerControl_Canceled"));
                        timerValueRow = React.DOM.div({ className: "timerValueRow", ref: "timerValue" }, canceled);
                        break;
                    case NOTSET:
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_NotSet_TimerControl");
                        var notset = React.DOM.div({ className: "timerTableCell" },
                            this.props.clientContext.getLocalizedString("TimerControl_NotSet"));
                        timerValueRow = React.DOM.div({ className: "timerValueRow", ref: "timerValue" }, notset);
                        break;
                    case NOPRIVILEGE:
                        iconClassName = "Secured-symbol";
                        tooltip = this.props.clientContext.getLocalizedString("ToolTip_NoPrivilege_TimerControl");
                        var noPrivilege = React.DOM.div({ className: "timerTableCell" }, SECURE_VALUE_MASK);
                        timerValueRow = React.DOM.div({ className: "timerValueRow", ref: "timerValue" }, noPrivilege);
                        break;
                    default:
                        timerValueRow = React.DOM.div({ className: "timerValueRow", ref: "timerValue" });
                        break
                    }
                    return timerValueRow
                };
                return ICTimerControlSpec
            }(TsAdapter.SpecBase);
        exports.ICTimerControl = DataWrapperComponent.wrapComponent(new ICTimerControlSpec)
    });
define("InteractionCentricComponents",
    [
        "require", "exports", "Components/ComponentFactory", "Components/InteractionCentric/InteractionCentricShell",
        "Components/Dialogs/InteractionCentricQuickCreateForm",
        "Components/InteractionCentric/NavigationControl/NavigationControl",
        "Components/InteractionCentric/TagFilter/TagFilter",
        "Components/InteractionCentric/MultiplePieChartControl/MultiplePieChartControl",
        "Components/InteractionCentric/CollapsibleControl/CollapsibleControl",
        "Components/InteractionCentric/AppliedFiltersControl/AppliedFilters",
        "Components/InteractionCentric/DateRangeControl/DateRangeControl", "Components/Fields/DateControl/DateControl",
        "Components/Fields/DurationControl/DurationControl", "Components/InteractionCentric/FilterGraph/FilterGraph",
        "Components/InteractionCentric/GlobalFilterControl/GlobalFilterControl",
        "Components/InteractionCentric/GlobalFilterControl/OptionSetFilterItem",
        "Components/InteractionCentric/GlobalFilterControl/DateRangeFilter",
        "Components/InteractionCentric/GlobalFilterControl/SliderFilter",
        "Components/InteractionCentric/GlobalFilterControl/OptionSetFilter",
        "Components/InteractionCentric/QueueContainer/QueueContainer",
        "Components/InteractionCentric/ButtonStrip/ButtonStrip",
        "Components/InteractionCentric/RadioButtonGroup/RadioButtonGroup",
        "Components/InteractionCentric/RadioButtonGroup/RadioButton",
        "Components/InteractionCentric/InteractionWall/InteractionWallControl",
        "Components/InteractionCentric/GridLayout/ColumnLayout", "Components/InteractionCentric/GridLayout/TabLayout",
        "Components/InteractionCentric/GridLayout/SectionLayout",
        "Components/InteractionCentric/GridLayout/GridRowLayout",
        "Components/InteractionCentric/GridLayout/GridCellLayout", "Components/Primitives/ImageButtonWrapper",
        "Components/InteractionCentric/ComboBoxWrapper",
        "Components/InteractionCentric/CommunicationCard/InteractionCentricCommunicationCard",
        "Components/InteractionCentric/NavigationBar/NavBarAssociatedView",
        "Components/InteractionCentric/CollapsibleControl/CollapseVisualFilterButton",
        "Components/InteractionCentric/MultiSessionTabControl/SessionTabContainer",
        "Components/InteractionCentric/MultiSessionTabControl/MultiSessionTabContainer",
        "Components/InteractionCentric/ReferencePanel/ReferencePanel",
        "Components/InteractionCentric/RefreshControl/RefreshControl",
        "Components/InteractionCentric/NavigationBar/NavBarArea",
        "Components/InteractionCentric/NavigationBar/NavBarGroup",
        "Components/InteractionCentric/NavigationBar/NavBarSubArea",
        "Components/InteractionCentric/NavigationBar/NavBarSearch",
        "Components/InteractionCentric/NavigationBar/NavBarUserInfo",
        "Components/InteractionCentric/NavigationBar/NavBarMru", "Components/RichEntityContent/RichEntityContent",
        "Components/RelatedEntitySearchControls/KbSearchControl",
        "Components/InteractionCentric/InteractionCentricForm/InteractionCentricFormLabel",
        "Components/InteractionCentric/InteractionCentricForm/InteractionCentricFormTabNavigator",
        "Components/InteractionCentric/QuickAction/QuickActionQueueContainer",
        "Components/InteractionCentric/QuickAction/QuickActionButton",
        "Components/InteractionCentric/EmailAttachment/EmailAttachment",
        "Components/InteractionCentric/QuickAction/QuickActionInteractionWall",
        "Components/InteractionCentric/ComponentSwitcher", "Components/Dialogs/QuickViewForm",
        "Components/InteractionCentric/HierarchicalSubjectControl/HierarchicalSubject",
        "Components/InteractionCentric/DashboardPicker/DashboardPicker",
        "Components/InteractionCentric/ViewIdDisplay/ViewIdDisplay",
        "Components/InteractionCentric/GridView/InteractionCentricGridHeaderControlView",
        "Components/InteractionCentric/GridView/InteractionCentricGridControlView",
        "Components/InteractionCentric/FilterBar/FilterBar", "Components/InteractionCentric/GridView/AssociatedGrid",
        "Components/InteractionCentric/HybridGridControl",
        "Components/InteractionCentric/ICTimerControl/ICTimerControl",
        "Components/Shell/DialogConductor", "Components/Dialogs/CrmDialog"
    ],
    function(require,
        exports,
        ComponentFactory,
        interactionCentricShell,
        interactionCentricQuickCreateForm,
        navigationControl,
        TagFilter,
        MultiplePieChartControl,
        CollapsibleControl,
        AppliedFiltersControl,
        DateRangeControl,
        DateControl,
        DurationControl,
        FilterGraph,
        GlobalFilterControl,
        OptionSetFilterItem,
        DateRangeFilter,
        SliderFilter,
        OptionSetFilter,
        QueueContainer,
        ButtonStrip,
        RadioButtonGroup,
        RadioButton,
        InteractionWallControl,
        ColumnLayout,
        TabLayout,
        SectionLayout,
        GridRowLayout,
        GridCellLayout,
        ImageButtonWrapper,
        ComboBoxWrapper,
        InteractionCentricCommunicationCard,
        NavBarAssociatedView,
        CollapseVisualFilterButton,
        SessionTabContainer,
        MultiSessionTabContainer,
        ReferencePanel,
        RefreshControl,
        NavBarArea,
        NavBarGroup,
        NavBarSubArea,
        NavBarSearch,
        NavBarUserInfo,
        NavBarMru,
        RichEntityContent,
        KbSearchControl,
        InteractionCentricFormLabel,
        InteractionCentricFormTabNavigator,
        QuickActionQueueContainer,
        QuickActionButton,
        EmailAttachment,
        QuickActionInteractionWall,
        ComponentSwitcher,
        QuickViewForm,
        HierarchicalSubjectControl,
        DashboardPicker,
        ViewIdDisplay,
        InteractionCentricGridHeaderControlView,
        InteractionCentricGridControlView,
        FilterBar,
        AssociatedGrid,
        HybridGridControl,
        ICTimerControl,
        DialogConductor,
        CrmDialog) {
        DialogConductor.registerComponentForViewModel("Microsoft.Crm.Client.Core.ViewModels.QuickCreateFormViewModel",
            interactionCentricQuickCreateForm.InteractionCentricQuickCreateForm,
            { useBackdrop: true });
        DialogConductor.registerComponentForViewModel("Microsoft.Crm.Client.Core.ViewModels.CrmDialogViewModel",
            CrmDialog.CrmDialog,
            { useBackdrop: true });
        DialogConductor.registerComponentForViewModel("Microsoft.Crm.Client.Core.ViewModels.QuickViewFormViewModel",
            QuickViewForm.QuickViewForm,
            { dismissOnBlur: true });
        ComponentFactory.registerComponentFactory(DateRangeControl.DESCRIPTOR_NAME, DateRangeControl.DateRangeControl);
        ComponentFactory.registerComponentFactory(DateControl.DESCRIPTOR_NAME, DateControl.DateControl);
        ComponentFactory.registerComponentFactory(TagFilter.DESCRIPTOR_NAME, TagFilter.TagFilter);
        ComponentFactory.registerComponentFactory(MultiplePieChartControl.DESCRIPTOR_NAME,
            MultiplePieChartControl.MultiplePieChartControl);
        ComponentFactory.registerComponentFactory(CollapsibleControl
            .DESCRIPTOR_NAME,
            CollapsibleControl.CollapsibleControl);
        ComponentFactory.registerComponentFactory(AppliedFiltersControl.DESCRIPTOR_NAME,
            AppliedFiltersControl.AppliedFilters);
        ComponentFactory.registerComponentFactory(FilterGraph.DESCRIPTOR_NAME, FilterGraph.FilterGraph);
        ComponentFactory.registerComponentFactory(GlobalFilterControl.DESCRIPTOR_NAME,
            GlobalFilterControl.GlobalFilterControl);
        ComponentFactory.registerComponentFactory(OptionSetFilterItem.DESCRIPTOR_NAME,
            OptionSetFilterItem.OptionSetFilterItem);
        ComponentFactory.registerComponentFactory(DateRangeFilter.DESCRIPTOR_NAME, DateRangeFilter.DateRangeFilter);
        ComponentFactory.registerComponentFactory(OptionSetFilter.DESCRIPTOR_NAME, OptionSetFilter.OptionSetFilter);
        ComponentFactory.registerComponentFactory(SliderFilter.DESCRIPTOR_NAME, SliderFilter.SliderFilter);
        ComponentFactory.registerComponentFactory(QueueContainer.DESCRIPTOR_NAME, QueueContainer.QueueContainer);
        ComponentFactory.registerComponentFactory(ButtonStrip.DESCRIPTOR_NAME, ButtonStrip.ButtonStrip);
        ComponentFactory.registerComponentFactory(InteractionCentricFormLabel.DESCRIPTOR_NAME,
            InteractionCentricFormLabel.InteractionCentricFormLabel);
        ComponentFactory.registerComponentFactory(InteractionCentricFormTabNavigator.DESCRIPTOR_NAME,
            InteractionCentricFormTabNavigator.InteractionCentricFormTabNavigator);
        ComponentFactory.registerComponentFactory(RadioButtonGroup.DESCRIPTOR_NAME, RadioButtonGroup.RadioButtonGroup);
        ComponentFactory.registerComponentFactory(RadioButton.DESCRIPTOR_NAME, RadioButton.RadioButton);
        ComponentFactory.registerComponentFactory(RadioButtonGroup.DESCRIPTOR_NAME, RadioButtonGroup.RadioButtonGroup);
        ComponentFactory.registerComponentFactory(CollapsibleControl
            .DESCRIPTOR_NAME,
            CollapsibleControl.CollapsibleControl);
        ComponentFactory.registerComponentFactory(AppliedFiltersControl.DESCRIPTOR_NAME,
            AppliedFiltersControl.AppliedFilters);
        ComponentFactory.registerComponentFactory(InteractionWallControl.DESCRIPTOR_NAME,
            InteractionWallControl.InteractionWallControl);
        ComponentFactory.registerComponentFactory(SectionLayout.DESCRIPTOR_NAME, SectionLayout.SectionLayoutControl);
        ComponentFactory.registerComponentFactory(GridRowLayout.DESCRIPTOR_NAME, GridRowLayout.GridRowLayoutControl);
        ComponentFactory.registerComponentFactory(GridCellLayout.DESCRIPTOR_NAME, GridCellLayout.GridCellLayoutControl);
        ComponentFactory.registerComponentFactory(ColumnLayout.DESCRIPTOR_NAME, ColumnLayout.ColumnLayoutControl);
        ComponentFactory.registerComponentFactory(TabLayout.DESCRIPTOR_NAME, TabLayout.TabLayoutControl);
        ComponentFactory.registerComponentFactory(ImageButtonWrapper
            .DESCRIPTOR_NAME,
            ImageButtonWrapper.ImageButtonWrapper);
        ComponentFactory.registerComponentFactory(DurationControl.DESCRIPTOR_NAME, DurationControl.DurationControl);
        ComponentFactory.registerComponentFactory(navigationControl.DESCRIPTOR_NAME,
            navigationControl.NavigationControl);
        ComponentFactory.registerComponentFactory(ComboBoxWrapper.DESCRIPTOR_NAME, ComboBoxWrapper.ComboBoxWrapper);
        ComponentFactory.registerComponentFactory(QuickActionQueueContainer.DESCRIPTOR_NAME,
            QuickActionQueueContainer.QuickActionQueueContainer);
        ComponentFactory.registerComponentFactory(QuickActionButton.DESCRIPTOR_NAME,
            QuickActionButton.QuickActionButton);
        ComponentFactory.registerComponentFactory(QuickActionInteractionWall.DESCRIPTOR_NAME,
            QuickActionInteractionWall.QuickActionInteractionWall);
        ComponentFactory.registerComponentFactory(InteractionCentricCommunicationCard.DESCRIPTOR_NAME,
            InteractionCentricCommunicationCard.InteractionCentricCommunicationCard);
        ComponentFactory.registerComponentFactory(NavBarAssociatedView.DESCRIPTOR_NAME,
            NavBarAssociatedView.NavBarAssociatedView);
        ComponentFactory.registerComponentFactory(CollapseVisualFilterButton.DESCRIPTOR_NAME,
            CollapseVisualFilterButton.CollapseVisualFilterButton);
        ComponentFactory.registerComponentFactory(SessionTabContainer.DESCRIPTOR_NAME,
            SessionTabContainer.SessionTabContainer);
        ComponentFactory.registerComponentFactory(MultiSessionTabContainer.DESCRIPTOR_NAME,
            MultiSessionTabContainer.MultiSessionTabContainer);
        ComponentFactory.registerComponentFactory(ReferencePanel.DESCRIPTOR_NAME, ReferencePanel.ReferencePanel);
        ComponentFactory.registerComponentFactory(RefreshControl.DESCRIPTOR_NAME, RefreshControl.RefreshControl);
        ComponentFactory.registerComponentFactory(NavBarArea.DESCRIPTOR_NAME, NavBarArea.NavBarArea);
        ComponentFactory.registerComponentFactory(NavBarGroup.DESCRIPTOR_NAME, NavBarGroup.NavBarGroup);
        ComponentFactory.registerComponentFactory(NavBarSubArea.DESCRIPTOR_NAME, NavBarSubArea.NavBarSubArea);
        ComponentFactory.registerComponentFactory(NavBarSearch.DESCRIPTOR_NAME, NavBarSearch.NavBarSearch);
        ComponentFactory.registerComponentFactory(NavBarUserInfo.DESCRIPTOR_NAME, NavBarUserInfo.NavBarUserInfo);
        ComponentFactory.registerComponentFactory(NavBarMru.DESCRIPTOR_NAME, NavBarMru.NavBarMru);
        ComponentFactory.registerComponentFactory(RichEntityContent.DESCRIPTOR_NAME,
            RichEntityContent.RichEntityContent);
        ComponentFactory.registerComponentFactory(KbSearchControl.DESCRIPTOR_NAME, KbSearchControl.KbSearchControl);
        ComponentFactory.registerComponentFactory(ComponentSwitcher.DESCRIPTOR_NAME,
            ComponentSwitcher.ComponentSwitcher);
        ComponentFactory.registerComponentFactory(QuickViewForm.DESCRIPTOR_NAME, QuickViewForm.QuickViewForm);
        ComponentFactory.registerComponentFactory(EmailAttachment.DESCRIPTOR_NAME, EmailAttachment.EmailAttachment);
        ComponentFactory.registerComponentFactory(HierarchicalSubjectControl.DESCRIPTOR_NAME,
            HierarchicalSubjectControl.HierarchicalSubjectControl);
        ComponentFactory.registerComponentFactory(DashboardPicker.DESCRIPTOR_NAME, DashboardPicker.DashboardPicker);
        ComponentFactory.registerComponentFactory(ViewIdDisplay.DESCRIPTOR_NAME, ViewIdDisplay.ViewIdDisplay);
        ComponentFactory.registerComponentFactory(InteractionCentricGridHeaderControlView.DESCRIPTOR_NAME,
            InteractionCentricGridHeaderControlView.InteractionCentricGridHeaderControl);
        ComponentFactory.registerComponentFactory(InteractionCentricGridControlView.DESCRIPTOR_NAME,
            InteractionCentricGridControlView.InteractionCentricGridControl);
        ComponentFactory.registerComponentFactory(FilterBar.DESCRIPTOR_NAME, FilterBar.FilterBar);
        ComponentFactory.registerComponentFactory(AssociatedGrid.DESCRIPTOR_NAME, AssociatedGrid.AssociatedGrid);
        ComponentFactory.registerComponentFactory(HybridGridControl.DESCRIPTOR_NAME,
            HybridGridControl.HybridGridControl);
        ComponentFactory.registerComponentFactory(ICTimerControl.DESCRIPTOR_NAME, ICTimerControl.ICTimerControl);
        var InteractionCentricComponents;
        (function(InteractionCentricComponents) {
            InteractionCentricComponents.InteractionCentricShell = interactionCentricShell.InteractionCentricShell
        })(InteractionCentricComponents || (InteractionCentricComponents = {}));
        return InteractionCentricComponents
    })