var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("src/Components/AppModuleData", ["require", "exports"], function (require, exports) {
    "use strict";
});
define("src/Components/ManageRoles/CurrentAppManageRolesData", ["require", "exports"], function (require, exports) {
    "use strict";
    var CurrentAppManageRolesData = (function () {
        function CurrentAppManageRolesData() {
        }
        return CurrentAppManageRolesData;
    }());
    exports.CurrentAppManageRolesData = CurrentAppManageRolesData;
});
define("src/Models", ["require", "exports"], function (require, exports) {
    "use strict";
    (function (ClientType) {
        ClientType[ClientType["Unknown"] = 0] = "Unknown";
        ClientType[ClientType["Desktop"] = 1] = "Desktop";
        ClientType[ClientType["Tablet"] = 2] = "Tablet";
        ClientType[ClientType["Phone"] = 3] = "Phone";
    })(exports.ClientType || (exports.ClientType = {}));
    var ClientType = exports.ClientType;
    (function (ClientStatus) {
        ClientStatus[ClientStatus["Online"] = 0] = "Online";
        ClientStatus[ClientStatus["Offline"] = 1] = "Offline";
    })(exports.ClientStatus || (exports.ClientStatus = {}));
    var ClientStatus = exports.ClientStatus;
    (function (PrivilegeDepth) {
        PrivilegeDepth[PrivilegeDepth["None"] = -1] = "None";
        PrivilegeDepth[PrivilegeDepth["Basic"] = 0] = "Basic";
        PrivilegeDepth[PrivilegeDepth["Local"] = 1] = "Local";
        PrivilegeDepth[PrivilegeDepth["Deep"] = 2] = "Deep";
        PrivilegeDepth[PrivilegeDepth["Global"] = 3] = "Global";
    })(exports.PrivilegeDepth || (exports.PrivilegeDepth = {}));
    var PrivilegeDepth = exports.PrivilegeDepth;
    var Role = (function () {
        function Role(roleid, roleName, businessUnit) {
            this.roleId = roleid;
            this.roleName = roleName;
            this.businessUnit = businessUnit;
        }
        return Role;
    }());
    exports.Role = Role;
    var RolesList = (function () {
        function RolesList() {
            var _this = this;
            this.AddRoleToRolesList = function (role) {
                _this.roles.push(role);
            };
            this.roles = [];
        }
        return RolesList;
    }());
    exports.RolesList = RolesList;
    (function (ClientTypes) {
        ClientTypes[ClientTypes["Web"] = 0] = "Web";
        ClientTypes[ClientTypes["UCI"] = 1] = "UCI";
    })(exports.ClientTypes || (exports.ClientTypes = {}));
    var ClientTypes = exports.ClientTypes;
    (function (ShowHideRoles) {
        ShowHideRoles[ShowHideRoles["ShowAllRoles"] = 3] = "ShowAllRoles";
        ShowHideRoles[ShowHideRoles["HideAllRoles"] = 2] = "HideAllRoles";
    })(exports.ShowHideRoles || (exports.ShowHideRoles = {}));
    var ShowHideRoles = exports.ShowHideRoles;
    (function (PublishedState) {
        PublishedState[PublishedState["Published"] = 0] = "Published";
        PublishedState[PublishedState["Unpublished"] = 1] = "Unpublished";
    })(exports.PublishedState || (exports.PublishedState = {}));
    var PublishedState = exports.PublishedState;
    (function (RoleSelectionTypes) {
        RoleSelectionTypes[RoleSelectionTypes["ShowRoles"] = 0] = "ShowRoles";
        RoleSelectionTypes[RoleSelectionTypes["HideRoles"] = 1] = "HideRoles";
        RoleSelectionTypes[RoleSelectionTypes["ManageRoles"] = 2] = "ManageRoles";
        RoleSelectionTypes[RoleSelectionTypes["OpenAppDesinger"] = 3] = "OpenAppDesinger";
        RoleSelectionTypes[RoleSelectionTypes["Publish"] = 4] = "Publish";
    })(exports.RoleSelectionTypes || (exports.RoleSelectionTypes = {}));
    var RoleSelectionTypes = exports.RoleSelectionTypes;
    (function (ComponentTypes) {
        ComponentTypes[ComponentTypes["PublishAppsSection"] = 0] = "PublishAppsSection";
        ComponentTypes[ComponentTypes["UnpublishedAppsSection"] = 1] = "UnpublishedAppsSection";
        ComponentTypes[ComponentTypes["FilterSideNavbar"] = 2] = "FilterSideNavbar";
        ComponentTypes[ComponentTypes["ManageRolesSideNavbar"] = 3] = "ManageRolesSideNavbar";
    })(exports.ComponentTypes || (exports.ComponentTypes = {}));
    var ComponentTypes = exports.ComponentTypes;
    (function (KeyCodeEnum) {
        KeyCodeEnum[KeyCodeEnum["TabKey"] = 9] = "TabKey";
        KeyCodeEnum[KeyCodeEnum["ShiftKey"] = 16] = "ShiftKey";
        KeyCodeEnum[KeyCodeEnum["EnterKey"] = 13] = "EnterKey";
        KeyCodeEnum[KeyCodeEnum["EscapeKey"] = 27] = "EscapeKey";
        KeyCodeEnum[KeyCodeEnum["SpaceKey"] = 32] = "SpaceKey";
        KeyCodeEnum[KeyCodeEnum["UpArrowKey"] = 38] = "UpArrowKey";
        KeyCodeEnum[KeyCodeEnum["DownArrowKey"] = 40] = "DownArrowKey";
        KeyCodeEnum[KeyCodeEnum["RightArrowkey"] = 39] = "RightArrowkey";
        KeyCodeEnum[KeyCodeEnum["LeftArrowKey"] = 37] = "LeftArrowKey";
        KeyCodeEnum[KeyCodeEnum["Altkey"] = 18] = "Altkey";
        KeyCodeEnum[KeyCodeEnum["CtrlKey"] = 17] = "CtrlKey";
        KeyCodeEnum[KeyCodeEnum["CKey"] = 67] = "CKey";
        KeyCodeEnum[KeyCodeEnum["FKey"] = 70] = "FKey";
        KeyCodeEnum[KeyCodeEnum["MKey"] = 77] = "MKey";
        KeyCodeEnum[KeyCodeEnum["RKey"] = 82] = "RKey";
        KeyCodeEnum[KeyCodeEnum["SKey"] = 83] = "SKey";
        KeyCodeEnum[KeyCodeEnum["WKey"] = 87] = "WKey";
        KeyCodeEnum[KeyCodeEnum["f6Key"] = 117] = "f6Key";
    })(exports.KeyCodeEnum || (exports.KeyCodeEnum = {}));
    var KeyCodeEnum = exports.KeyCodeEnum;
    (function (AccordianState) {
        AccordianState[AccordianState["Collapsed"] = 0] = "Collapsed";
        AccordianState[AccordianState["Expanded"] = 1] = "Expanded";
    })(exports.AccordianState || (exports.AccordianState = {}));
    var AccordianState = exports.AccordianState;
    (function (ViewPortEnum) {
        ViewPortEnum[ViewPortEnum["Mobile"] = 0] = "Mobile";
        ViewPortEnum[ViewPortEnum["Tablet"] = 1] = "Tablet";
        ViewPortEnum[ViewPortEnum["WideTablet"] = 2] = "WideTablet";
        ViewPortEnum[ViewPortEnum["Desktop"] = 3] = "Desktop";
    })(exports.ViewPortEnum || (exports.ViewPortEnum = {}));
    var ViewPortEnum = exports.ViewPortEnum;
});
define("src/Actions", ["require", "exports", 'redux-actions'], function (require, exports, redux_actions_1) {
    "use strict";
    exports.ADD_PUBLISHED_APPS = 'ADD_PUBLISHED_APPS';
    exports.ADD_UNPUBLISHED_APPS = 'ADD_UNPUBLISHED_APPS';
    exports.ADD_LOCALIZED_STRINGS = 'ADD_LOCALIZED_STRINGS';
    exports.INITIALIZE_CLIENT_FILTERS_STATES = 'INITIALIZE_CLIENT_FILTERS_STATES';
    exports.ADD_SEARCH_TEXT_FILTER = 'ADD_SEARCH_TEXT_FILTER';
    exports.CLEAR_SEARCH_TEXT_FILTER = 'CLEAR_SEARCH_TEXT_FILTER';
    exports.TOGGLE_CLIENT_TYPE_FILTER = 'TOGGLE_CLIENT_TYPE_FILTER';
    exports.INITIALIZE_COMPONENT_STATES = 'INITIALIZE_COMPONENT_STATES';
    exports.TOGGLE_COMPONENT_VISIBILITY = 'TOGGLE_COMPONENT_VISIBILITY';
    exports.SET_VIEW_PORT = 'SET_VIEW_PORT';
    exports.ADD_ROLES = 'ADD_ROLES';
    exports.ADD_USER_DATA = 'ADD_USER_DATA';
    exports.SET_CURRENT_APP_MANAGE_ROLE_DATA = 'SET_CURRENT_APP_MANAGE_ROLE_DATA';
    exports.SHOW_OVERLAY_DIALOG = 'SHOW_OVERLAY_DIALOG';
    exports.HIDE_OVERLAY_DIALOG = 'HIDE_OVERLAY_DIALOG';
    exports.ROLE_STATE = 'ROLE_STATE';
    exports.ERROR_STATE = 'ERROR_STATE';
    exports.SHOW_LANDING_PAGE_DIALOG = 'SHOW_LANDING_PAGE_DIALOG';
    exports.HIDE_LANDING_PAGE_DIALOG = 'HIDE_LANDING_PAGE_DIALOG';
    exports.SET_MANAGE_ROLES_ERROR_DATA = 'SET_MANAGE_ROLES_ERROR_DATA';
    exports.SHOW_ELLIPSIS_FLYOUT = 'SHOW_ELLIPSIS_FLYOUT';
    exports.HIDE_ELLIPSIS_FLYOUT = 'HIDE_ELLIPSIS_FLYOUT';
    exports.addUserData = redux_actions_1.createAction(exports.ADD_USER_DATA, function (userData) { return (userData); });
    exports.setCurrentAppManageRolesData = redux_actions_1.createAction(exports.SET_CURRENT_APP_MANAGE_ROLE_DATA, function (currentAppManageRolesData) { return (currentAppManageRolesData); });
    exports.showEllipsisFlyout = redux_actions_1.createAction(exports.SHOW_ELLIPSIS_FLYOUT, function (offset, appData, roles, ellipsisID) {
        return {
            showEllipsisFlyout: true,
            ellipsisButtonOffset: offset,
            appModuleData: appData,
            roleBasedOptions: roles,
            ellipsisID: ellipsisID
        };
    });
    exports.hideEllipsisFlyout = redux_actions_1.createAction(exports.HIDE_ELLIPSIS_FLYOUT, function () {
        return {
            showEllipsisFlyout: false
        };
    });
    exports.addRoles = redux_actions_1.createAction(exports.ADD_ROLES, function (roles) { return (roles); });
    exports.addPublishedApps = redux_actions_1.createAction(exports.ADD_PUBLISHED_APPS, function (apps) { return ({ list: apps }); });
    exports.addUnPublishedApps = redux_actions_1.createAction(exports.ADD_UNPUBLISHED_APPS, function (apps) { return ({ list: apps }); });
    exports.addLocalizedStrings = redux_actions_1.createAction(exports.ADD_LOCALIZED_STRINGS, function (localizedStrs) { return (localizedStrs); });
    exports.addSearchTextFilter = redux_actions_1.createAction(exports.ADD_SEARCH_TEXT_FILTER, function (searchText) { return ({ searchText: searchText }); });
    exports.initializeClientFilters = redux_actions_1.createAction(exports.INITIALIZE_CLIENT_FILTERS_STATES, function () { return ({ clientType: [] }); });
    exports.clearSearchTextFilter = redux_actions_1.createAction(exports.CLEAR_SEARCH_TEXT_FILTER, function () { return ({ searchText: '' }); });
    exports.toggleClientTypeFilter = redux_actions_1.createAction(exports.TOGGLE_CLIENT_TYPE_FILTER, function (clientType) { return (clientType); });
    exports.initializeComponentStates = redux_actions_1.createAction(exports.INITIALIZE_COMPONENT_STATES, function () { return ({ isPublishedSectionVisible: true, isUnPublishedSectionVisible: true, isFilterSideNavbarVisible: false, isManageRolesSideNavbarVisible: false }); });
    exports.toggleComponentVisibility = redux_actions_1.createAction(exports.TOGGLE_COMPONENT_VISIBILITY, function (componentType) { return (componentType); });
    exports.roleStates = redux_actions_1.createAction(exports.ROLE_STATE, function (isCopy) { return ({ isCopy: isCopy }); });
    exports.errorStates = redux_actions_1.createAction(exports.ERROR_STATE, function (isError) { return ({ isError: isError }); });
    exports.setViewPortAction = redux_actions_1.createAction(exports.SET_VIEW_PORT, function (viewPort) { return ({ viewPortType: viewPort }); });
    exports.showOverlayDialog = redux_actions_1.createAction(exports.SHOW_OVERLAY_DIALOG, function (overlayMessage) { return ({ overlayText: overlayMessage, isOverlayVisible: true }); });
    exports.hideOverlayDialog = redux_actions_1.createAction(exports.HIDE_OVERLAY_DIALOG, function () { return ({ overlayText: "", isOverlayVisible: false }); });
    exports.showLandingPageDialog = redux_actions_1.createAction(exports.SHOW_LANDING_PAGE_DIALOG, function (dialogTitle, dialogMessage, postFocusElement) { return ({ dialogTitle: dialogTitle, dialogMessage: dialogMessage, isDialogVisible: true, postFocusElement: postFocusElement }); });
    exports.hideLandingPageDialog = redux_actions_1.createAction(exports.HIDE_LANDING_PAGE_DIALOG, function () { return ({ dialogTitle: "", dialogMessage: "", isDialogVisible: false, postFocusElement: "" }); });
    exports.setManageRolesErrorData = redux_actions_1.createAction(exports.SET_MANAGE_ROLES_ERROR_DATA, function (errorData) { return (errorData); });
});
define("src/Components/CustomCheckbox", ["require", "exports", "react", 'react-redux'], function (require, exports, React, react_redux_1) {
    "use strict";
    var CustomCheckbox = (function (_super) {
        __extends(CustomCheckbox, _super);
        function CustomCheckbox(props) {
            _super.call(this, props);
            this.state = {
                isHovered: false
            };
        }
        CustomCheckbox.prototype.render = function () {
            var self = this;
            return (React.createElement("div", {"aria-checked": this.props.isChecked, title: this.props.title, onClick: function () { self.props.onClick(); }, onKeyDown: function (e) { self.props.onKeyDown(e); }, role: "checkbox", tabIndex: 1, onMouseEnter: function () { self.setState({ isHovered: true }); }, onMouseLeave: function () { self.setState({ isHovered: false }); }, style: { width: '100%', height: '100%', margin: 'auto', padding: '0.35rem 0.45rem', cursor: 'pointer' }}, 
                React.createElement("div", {className: "mscrm-glyph-DNDSuccessIcon", style: this.computeStyle()})
            ));
        };
        CustomCheckbox.prototype.computeStyle = function () {
            var style = { fontSize: '0.75rem', color: "#cccccc" };
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            if (this.props.isChecked) {
                style = Object.assign({}, style, { color: "#666666" });
                return style;
            }
            if (this.state.isHovered)
                style = Object.assign({}, style, { color: "#a6a6a6" });
            return style;
        };
        return CustomCheckbox;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        isRTL: state.userData.isRTL,
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_1.connect(mapStateToProps, null, null)(CustomCheckbox);
});
define("src/Utils/Styler", ["require", "exports"], function (require, exports) {
    "use strict";
    var Styler = (function () {
        function Styler() {
        }
        Styler.maxZIndex = 999999;
        Styler.FontWeight = {
            semiLight: {
                fontFamily: '"Segoe UI semilight","Segoe",Tahoma,Helvetica,Arial,sans-serif'
            },
            regular: {
                fontFamily: '"Segoe UI regular","Segoe",Tahoma,Helvetica,Arial,sans-serif'
            },
            default: {
                fontFamily: '"Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif'
            }
        };
        Styler.AppModuleTileStyle = {
            display: 'flex',
            textDecoration: 'none',
            width: '218px',
            height: '70px',
            color: '#212121',
            backgroundColor: '#fff',
            border: '1px solid #666666',
            marginRight: '0.85rem',
            marginLeft: '0rem',
            marginBottom: '0.85rem'
        };
        Styler.AppDetailsStyle = {
            DetailsDivCollapsedStyle: {
                position: 'relative',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: 'calc(100% - 5rem)',
                height: '100%',
                padding: '0 0.75rem'
            },
            DetailsDivExpandedStyle: {
                position: 'relative',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                height: 'calc(100% - 7rem)',
                padding: '0 0.85rem'
            },
            AppNameStyle: {
                paddingTop: '1.25rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: '#333333',
                fontSize: '1.15rem',
                lineHeight: '1.4',
                width: '100%',
            },
            AppDescExpandedStyle: {
                overflow: 'hidden',
                color: '#505050',
                fontSize: '0.85rem',
                lineHeight: '1.4',
                whiteSpace: 'pre-line',
                paddingTop: '0.5rem',
                width: '100%',
                height: '3rem'
            },
            AppDescStyle: {
                height: '1.14rem',
                maxHeight: '1.14rem',
                margin: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: '#505050',
                fontSize: '0.75rem',
                lineHeight: '1.2',
                whiteSpace: 'nowrap',
                width: '100%'
            },
            PublisherStyle: {
                paddingTop: '0.5rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: '#505050',
                fontSize: '0.75rem',
                lineHeight: '1.4',
                width: '100%'
            },
            DateStyle: {
                paddingTop: '0.25rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: '#a6a6a6',
                fontSize: '0.75rem',
                lineHeight: '1.4',
                width: '100%'
            },
            ClientTypeStyle: {
                display: 'inline-block',
                color: '#FFFFFF',
                fontSize: '0.65rem',
                lineHeight: '0.85rem',
                fontFamily: '"Segoe UI semibold","Segoe",Tahoma,Helvetica,Arial,sans-serif',
                backgroundColor: '#999999',
                textAlign: 'center',
                height: 'auto',
                width: '2.5rem',
                border: '1px solid #999999',
                borderRadius: '3px 3px 0px 0px',
                letterSpacing: '0.03rem',
                textTransform: 'uppercase'
            }
        };
        Styler.FilterList = {
            container: {
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                padding: "0.25rem",
                border: "1px solid",
                borderColor: "#505050",
                fontSize: "0.75rem",
                color: "#505050",
                backgroundColor: "#ddd",
                marginRight: "0.25rem",
                marginLeft: "0rem"
            },
            crossButton: {
                marginRight: "0.25rem",
                marginLeft: "0rem",
                cursor: "pointer"
            }
        };
        Styler.FilterSideNavbar = {
            container: {
                visibility: 'hidden',
                height: "100%",
                width: "23rem",
                position: "fixed",
                zIndex: Styler.maxZIndex - 2,
                top: "0",
                backgroundColor: "#fff",
                overflowX: "hidden",
                transition: "left .25s ease,right .25s ease",
                padding: "1.15rem",
                boxShadow: "1px 1px 16px #333333",
                //RTL Handling
                right: "-25rem",
                borderLeft: '1px solid #231F20'
            },
            title: {
                fontSize: "1.25rem",
                color: "#333333",
                fontFamily: '"Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif',
                marginBottom: '1.5rem',
                width: 'calc(100% - 2.25rem)'
            },
            clientType: {
                fontSize: "0.85rem",
                color: "#333333",
                marginBottom: '0.75rem',
                fontWeight: 700
            },
            cross: {
                position: 'absolute',
                top: '0',
                padding: '0.55rem',
                fontSize: '1rem',
                height: '2.25rem',
                width: '2.25rem',
                color: "#999999",
                border: 'none',
                backgroundColor: "transparent",
                cursor: "pointer",
                //RTL Handling
                right: '0'
            },
            childCheckBoxContainer: {
                width: '100%',
                cursor: 'pointer',
                fontSize: "0.85rem",
                color: "#333333",
                marginBottom: '0.75rem',
                display: 'flex',
                flexDirection: 'row'
            },
            checkBox: {
                cursor: 'pointer',
                marginRight: '0.75rem',
                marginLeft: '0',
                height: '1rem',
                width: '1rem'
            }
        };
        Styler.CreateNewAppTile = {
            NoAppTile: {
                height: '238px',
                width: '218px',
                border: '1px solid #D0D1D3',
                backgroundColor: '#fff',
                padding: '1.25rem 0',
                cursor: 'pointer',
                marginLeft: '0rem',
                marginRight: '0.85rem',
                marginBottom: '0.85rem',
            },
            NoAppSmallTile: {
                height: '70px',
                width: '218px',
                border: '1px solid #D0D1D3',
                backgroundColor: '#fff',
                padding: '0',
                cursor: 'pointer',
                marginRight: '0.5rem',
                marginBottom: '0.85rem',
                marginLeft: '0rem',
                display: 'flex',
                flexDirection: 'row'
            },
            NoAppTileHeader: {
                fontSize: '1.15rem',
                lineHeight: '1.4',
                color: '#505050',
                fontFamily: '"Segoe UI semilight","Segoe",Tahoma,Helvetica,Arial,sans-serif',
                textAlign: 'center'
            },
            PlusFontIconContainer: {
                padding: '3rem 0 3.5rem 0'
            },
            SmallPlusFontIconContainer: {
                padding: '0'
            },
            PlusFontIcon: {
                height: '5.14rem',
                width: '5.14rem',
                fontSize: '5.14rem',
                color: '#0078D6',
                margin: 'auto'
            },
            SmallPlusFontIcon: {
                height: '3.25rem',
                width: '3.25rem',
                fontSize: '3.25rem',
                color: '#dddddd',
                margin: 'auto'
            },
            FooterText: {
                fontSize: '1rem',
                lineHeight: '1.4',
                color: '#0078D6',
                display: 'flex',
                justifyContent: 'center'
            },
            AppDesignerFontIcon: {
                fontSize: '1rem',
                lineHeight: '1.4',
                color: '#0078D6'
            }
        };
        Styler.ImageSectionStyle = {
            ImageStyle: {
                height: '3.214rem',
                width: 'auto',
                display: 'block',
                border: 'none'
            },
            ImageDivStyleCollapsed: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '5rem',
                height: '100%',
                backgroundColor: '#001950'
            },
            ImageDivStyleExpanded: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '7rem',
                width: '100%',
                backgroundColor: '#001950'
            }
        };
        Styler.AppSectionStyle = {
            display: 'inline-block',
            width: '100%',
        };
        Styler.AppListStyle = {
            padding: '0 0 0.85rem 0',
            margin: '0',
            border: '0',
            display: 'flex',
            maxWidth: '100%',
            flexWrap: 'wrap'
        };
        Styler.AppTile = {
            float: 'left'
        };
        Styler.AppListItemStyle = {
            display: 'inline-block',
            verticalAlign: 'top',
            float: 'left'
        };
        Styler.SectionHeaderStyle = {
            display: 'flex',
            flexDirection: 'row',
            margin: '0',
            width: '100%',
            cursor: 'pointer'
        };
        Styler.expandCollapseFontIcons = {
            fontSize: '0.75rem',
            color: '#505050',
            fontFamily: '"Segoe UI regular","Segoe",Tahoma,Helvetica,Arial,sans-serif',
            paddingRight: '0.25rem',
            paddingLeft: '0rem',
            paddingBottom: '0.25rem'
        };
        Styler.SectionHeadingStyle = {
            fontSize: '1.15rem',
            lineHeight: '1.4',
            color: '#505050',
            fontFamily: '"Segoe UI Light","Segoe",Tahoma,Helvetica,Arial,sans-serif',
            margin: '0 0 0.50rem 0',
            top: '2px',
            position: 'relative'
        };
        Styler.SearchAndCommandBarStyle = {
            display: 'flex',
            flexDirection: 'row',
            padding: '1.5rem 1.75rem 1.75rem 1.75rem'
        };
        Styler.SearchAndCommandBarMobileStyle = {
            display: 'flex',
            flexDirection: 'row',
            padding: '0.5rem 0.5rem 0.5rem 1.15rem',
            marginBottom: '1.75rem',
            background: '#ffffff'
        };
        Styler.TextInputStyle = {
            border: 0,
            borderBottom: '1px solid #505050',
            maxWidth: '18rem',
            fontSize: '0.85rem',
            width: '100%',
            background: 'transparent'
        };
        Styler.TextInputMobileStyle = {
            maxWidth: '18rem',
            fontSize: '0.85rem',
            width: '100%',
            background: 'white',
            border: 'none'
        };
        Styler.TextInputDivStyle = {
            display: 'flex',
            flexDirection: 'row',
            height: '2rem',
            flex: '1 1 auto',
            alignItems: 'center'
        };
        Styler.searchFontIcon = {
            paddingLeft: '0rem',
            paddingRight: "0.25rem",
            color: "#505050",
            fontSize: "1.15rem"
        };
        Styler.ActionBtnContainerStyle = {
            display: 'flex',
            marginLeft: 'auto',
            alignItems: 'center'
        };
        Styler.ActionBtnsMobileStyleExtension = {
            height: '2rem',
            width: '2rem',
            display: 'flex',
            justifyContent: 'center',
            padding: '0px',
            margin: '0 0.25rem'
        };
        Styler.AppLandingPageStyle = {
            padding: '0 1.75rem 1.75rem 1.75rem',
            boxSizing: 'border-box',
            display: 'inline-block',
            width: '100%'
        };
        Styler.FilterListStyle = {};
        Styler.FilterListItemStyle = {};
        Styler.FilterRemoveBtnStyle = {};
        Styler.FilterSideBarStyle = {};
        Styler.NoAppSectionLine1Style = {
            fontSize: '1.75rem',
            lineHeight: '1.4',
            color: '#505050',
            marginTop: '5rem',
            textAlign: 'center',
            width: '100%',
            margin: '5rem auto 0',
        };
        Styler.NoAppSectionLine2Style = {
            fontSize: '1rem',
            lineHeight: '1.4',
            color: '#505050',
            textAlign: 'center',
            width: '100%',
            margin: '0.75rem auto 0',
        };
        Styler.NoAppSectionDivStyle = {
            height: '100%',
            width: '100%',
            position: 'absolute'
        };
        Styler.EllipsisFlyout = {
            EllipsisFlyoutContainer: {
                position: 'fixed',
                height: 'auto',
                width: '280px',
                minHeight: '100px',
                zIndex: Styler.maxZIndex - 2
            },
            EllipsisFlyoutArrow: {
                position: 'absolute',
                width: '0px',
                height: '0px',
                left: '-22px',
                right: 'auto',
                top: '0px',
                bottom: 'auto',
                borderWidth: '11px',
                borderStyle: 'solid',
                borderColor: 'transparent white transparent transparent'
            },
            EllipsisBtnOverlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: Styler.maxZIndex - 3
            },
            CrossImage: {
                padding: '0.55rem',
                fontSize: '1rem',
                height: '2.25rem',
                width: '2.25rem',
                backgroundColor: 'rgb(255, 255, 255)',
                border: 'none',
                cursor: "pointer",
                color: '#999999'
            },
            EllipsisFlyoverTitleContainer: {
                width: '100%',
                display: 'flex',
                flexDirection: 'row'
            },
            TitlelabelDiv: {
                width: 'calc(100% - 2.25rem)',
                padding: '1.15rem 1.15rem 0 1.15rem',
                whiteSpace: 'normal',
                overflow: 'hidden'
            },
            TitleLabel: {
                fontSize: '1.15rem',
                lineHeight: '1.4',
                fontFamily: '"Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif',
                color: '#333333'
            },
            LineBreaker: {
                border: '0.5px solid #cccccc',
                margin: '0 1.15rem 0.5rem'
            },
            DescriptionDiv: {
                width: 'calc(100% - 1.15rem)',
                padding: '0 1.15rem',
                margin: '0.75rem 0px 1.25rem 0px',
                overflowY: 'auto',
                maxHeight: '4rem',
                overflow: 'hidden'
            },
            DescriptionLabel: {
                fontSize: '0.75rem',
                lineHeight: '1.4',
                color: '#505050'
            }
        };
        Styler.RolebasedButtons = {
            RoleBasedButtonContainer: {
                padding: '0.5rem 1.15rem 0.25rem 1.15rem',
                cursor: 'pointer'
            },
            ButtonStyles: {
                display: 'flex'
            },
            ButtonText: {
                margin: '0 8px',
                fontSize: '0.85rem',
                lineHeight: '1.4',
                color: '#505050',
                textTransform: 'uppercase',
                cursor: 'pointer'
            },
            FontIcon: {
                fontSize: '1.5rem',
                color: '#505050'
            }
        };
        Styler.ElipsisStyle = {
            position: 'absolute',
            top: '0.25rem',
            right: '0.25rem',
            padding: '0 0.675rem',
            color: '#999999'
        };
        Styler.CommandButtonStyles = {
            display: 'flex',
            alignItems: 'center',
            width: 'auto',
            fontSize: '0.85rem',
            color: '#505050',
            lineHeight: '1',
            cursor: 'pointer',
            textAlign: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            padding: '0.25rem 0.75rem',
        };
        Styler.CommandBarFontIconStyles = {
            paddingLeft: '0',
            paddingRight: '0.25rem',
            color: "#505050",
            fontSize: "1.15rem"
        };
        Styler.CommandBarButtonLabelStyles = {
            color: "#505050",
            fontSize: "0.85rem",
            lineHeight: '1.4',
            cursor: 'pointer'
        };
        Styler.PublishAnimation = {
            top: '34%',
            position: 'absolute',
            fontSize: '1.75rem',
            lineHeight: '1.4',
            margin: '0px auto',
            width: '100%',
            textAlign: 'center',
            fontFamily: '"Segoe UI semilight","Segoe",Tahoma,Helvetica,Arial,sans-serif',
            color: '#fff',
            zIndex: Styler.maxZIndex
        };
        Styler.PublishAnimationProgress = {
            textAlign: 'center',
            marginTop: '1 rem',
            marginBottom: '0px',
            padding: '0px',
        };
        Styler.ManageRoleFlyout = {
            Button: {
                fontSize: '1rem',
                height: 'auto',
                width: '6rem',
                backgroundColor: '#dddddd',
                border: '1px solid #dddddd',
                color: '#212121',
                marginLeft: '0.5rem',
                marginRight: '0',
                padding: '0.5rem 1rem',
                textAlign: 'center',
                display: 'inline-block',
                cursor: 'pointer'
            },
            RoleTableDataColumn1Style: {
                fontSize: '0.75rem',
                lineHeight: '1.4',
                color: '#505050',
                width: '59%',
                maxWidth: '59%',
                padding: '0.25rem 0.5rem',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textAlign: 'left'
            },
            RoleTableDataColumn2Style: {
                fontSize: '0.75rem',
                lineHeight: '1.4',
                color: '#505050',
                width: '28%',
                maxWidth: '28%',
                padding: '0.25rem 0.5rem',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textAlign: 'left'
            },
            SideNavBarStyle: {
                visibility: 'hidden',
                height: "100%",
                width: "23rem",
                position: "fixed",
                top: "0",
                right: "-25rem",
                backgroundColor: "#fff",
                overflowX: "hidden",
                transition: "left .25s ease,right .25s ease",
                boxShadow: "1px 1px 16px #333333",
                padding: "1.15rem",
                borderLeft: '1px solid #231F20',
                zIndex: Styler.maxZIndex - 2
            },
            SideNavBarHeadingStyle: {
                display: 'flex',
                width: 'calc(100% - 2.25rem)',
                fontSize: "1.25rem",
                color: "#333333",
                marginBottom: '0.25rem',
                fontFamily: '"Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif',
            },
            SideNavBarHeadingCrossButtonStyle: {
                position: 'absolute',
                top: '0',
                color: "#999999",
                padding: '0.55rem',
                fontSize: '1rem',
                height: '2.25rem',
                width: '2.25rem',
                border: 'none',
                backgroundColor: "transparent",
                cursor: "pointer",
                //RTL Handling
                right: '0'
            },
            ManageRolesDescriptionStyle: {
                fontSize: "0.85rem",
                color: "#505050"
            },
            AppURLSuffixTextBoxStyle: {
                fontSize: "0.85rem",
                width: '17rem',
                color: "#505050",
                border: "1px solid #cccccc",
                marginTop: '0.75rem',
                padding: '0.25rem 0.5rem'
            },
            AppURLCopyIconStyle: {
                fontSize: '0.85rem',
                color: '#3a95dc',
                marginRight: '0.5rem'
            },
            AppURLStyle: {
                fontSize: '0.85rem',
                color: '#0078d6',
            },
            ManageRolesRadioButtonContainerStyle: {},
            ManageRolesTableStyle: {
                marginTop: "0.75rem",
                width: '100%',
                display: 'block',
                transition: '0.5s'
            },
            ManageRolesTableFooterStyle: {
                border: '1px solid #cccccc',
                borderTop: '0px',
                padding: '0.25rem 0.5rem',
                fontSize: '0.75rem',
                lineHeight: '1.4',
                color: '#505050'
            },
            ManageRoleDescriptionSectionContainer: {
                //height: '3.0rem',
                //overflow: 'hidden',
                //textOverflow: 'ellipsis',
                marginTop: '1.00rem'
            },
            ManageRoleSectionContainer: {
                marginTop: '2.5rem'
            },
            ManageRoleSectionTitleContainer: {
                margin: '0 7px'
            },
            ManageRoleButtonsContainer: {
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                padding: '1.5rem',
                position: 'absolute',
                bottom: '0',
                left: '0'
            },
            RoleTableHeaderBorder: {
                borderRight: '1px solid #cccccc'
            },
            AccordianIcon: {
                fontSize: '0.75rem',
            },
            FlyoutOverlayStyle: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: Styler.maxZIndex - 3
            }
        };
        Styler.AppLandingPageDialog = {
            AppLandingPageDialogStyle: {
                position: 'absolute',
                height: '14.3rem',
                width: '28.5rem',
                top: '50%',
                left: '50%',
                margin: '0px',
                marginTop: '-7.15rem',
                marginLeft: '-14.25rem',
                backgroundColor: 'white',
                border: '1px solid #cccccc',
                boxShadow: '4px 4px 4px 1px (0, 0, 0, 0.1)',
                zIndex: Styler.maxZIndex
            },
            AppLandingPageDialogOverLayStyle: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: '0px',
                left: '0px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: Styler.maxZIndex - 1
            },
            AppLandingPagePopupTitleRow: {
                display: 'flex',
                width: '100%',
            },
            TitleDiv: {
                width: '100%',
                padding: '1.5rem 1.75rem 0 1.75rem',
                fontSize: '1.75rem',
                fontFamily: '"Segoe UI Light","Segoe",Tahoma,Helvetica,Arial,sans-serif',
                lineHeight: '1.4',
                color: '#333333'
            },
            CrossImg: {
                padding: '0.55rem',
                fontSize: '1.15rem',
                height: '2.25rem',
                width: '2.25rem',
                color: '#999999',
                cursor: "pointer",
                alignItems: 'flex-start'
            },
            AppLandingPagePopupMessageRow: {
                whiteSpace: "pre-line",
                width: 'calc(100% - 3.5rem)',
                height: '3.75rem',
                maxHeight: '3.75rem',
                minHeight: '3.75rem',
                overflowY: 'auto',
                margin: '1.5rem 1.75rem 1rem 1.75rem',
                fontSize: '0.85rem',
                lineHeight: '1.4',
                color: '#333333'
            },
            AppLandingPagePopupButtonRow: {
                width: '100%',
                padding: '0 1.75rem 1.5rem 1.75rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            },
            Button: {
                height: '37px',
                width: '100px',
                float: 'right',
                backgroundColor: '#dddddd',
                border: '1px solid #dddddd',
                color: '#212121',
                cursor: 'pointer'
            },
        };
        Styler.ManageRolesErrorDiv = {
            ErrorFontIcon: {
                width: '2.143rem',
                height: '2.143rem',
                backgroundColor: '#cc0000',
                padding: '0.6465rem',
                fontSize: '0.85rem'
            },
            WarningMessageDiv: {
                fontSize: '0.85rem',
                padding: '0.50rem',
                backgroundColor: '#a6a6a6',
                lineHeight: '1.4',
                color: '#505050'
            },
            ErrorMessageDiv: {
                fontSize: '0.85rem',
                lineHeight: '1.4',
                color: '#cc0000',
                marginTop: '0.5rem'
            }
        };
        return Styler;
    }());
    exports.Styler = Styler;
});
define("src/Components/AppImage", ["require", "exports", "react", "src/Utils/Styler"], function (require, exports, React, Styler_1) {
    "use strict";
    var AppImage = (function (_super) {
        __extends(AppImage, _super);
        function AppImage() {
            _super.apply(this, arguments);
        }
        AppImage.prototype.render = function () {
            return (React.createElement("div", {style: { 'display': 'block' }}, 
                React.createElement("div", {style: this.props.collapsedState ? Styler_1.Styler.ImageSectionStyle.ImageDivStyleCollapsed : Styler_1.Styler.ImageSectionStyle.ImageDivStyleExpanded}, 
                    React.createElement("img", {src: this.props.src, alt: this.props.alt, style: Styler_1.Styler.ImageSectionStyle.ImageStyle})
                )
            ));
        };
        return AppImage;
    }(React.Component));
    exports.AppImage = AppImage;
});
define("src/Constants", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.LS_PUBLISH_APP = "AppModuleLandingPage.PublishAppText";
    exports.LS_PUBLISH_APP_TOOLTIP = "AppModuleLandingPage.PublishAppToolTip";
    exports.LS_APP_LANDING_PAGE_TITLE = "AppModuleLandingPage.BrowserTitleForAppLandingPage";
    exports.LS_CREATE_NEW_APP_TOOLTIP = "AppModuleLandingPage.CreateAppButtonToolTip";
    exports.LS_APPS_BEING_EDITED = "AppModuleLandingPage.AppsBeingEditedFilterText";
    exports.LS_APPS_BEING_EDITED_TOOLTIP = "AppModuleLandingPage.AppsBeingEditedFilterToolTip";
    exports.LS_OPEN_IN_DESIGNER = "AppModuleLandingPage.OpenInAppDesignerText";
    exports.LS_OPEN_IN_DESIGNER_TOOLTIP = "AppModuleLandingPage.OpenInAppDesignerToolTip";
    exports.LS_HIDE_APP = "LandingPage_defaultApp_HideForAllRoles";
    exports.LS_HIDE_APP_TOOLTIP = "LandingPage_defaultApp_HideForAllRolesTooltip";
    exports.LS_MANAGE_ROLES = "AppModuleLandingPage.ManageRolesText";
    exports.LS_MANAGE_ROLES_TOOLTIP = "AppModuleLandingPage.ManageRolesToolTip";
    exports.LS_MANAGE_ROLES_FOR_DRAFT_TOOLTIP = "AppModuleLandingPage.ManageRolesForDrafToolTip";
    exports.LS_MORE_OPTIONS = "AppModuleLandingPage.MoreOptionsText";
    exports.LS_MORE_OPTIONS_TOOLTIP = "AppModuleLandingPage.MoreOptionsToolTip";
    exports.LS_PUBLISHED_APPS = "AppModuleLandingPage.PublishedAppsFilterText";
    exports.LS_PUBLISHED_APPS_TOOLTIP = "AppModuleLandingPage.PublishedAppsFilterToolTip";
    exports.LS_APPS_EDITED = "AppModuleLandingPage.AppsBeingEditedFilterText";
    exports.LS_SHOW_APP = "LandingPage_defaultApp_ShowForAllRoles";
    exports.LS_SHOW_APP_TOOLTIP = "LandingPage_defaultApp_ShowForAllRolesTooltip";
    exports.LS_WELCOME_USER = "AppModuleLandingPage.WelcomeUserText";
    exports.LS_MANAGE_APP_HEADER = "AppModuleLandingPage.ManageAppDialogHeader";
    exports.LS_CHOOSE_URL_MSG = "AppModuleLandingPage.ManageAppDialogChooseURLMsg";
    exports.LS_APP_URL = "AppModuleLandingPage.ManageAppDialogAppURLText";
    exports.LS_APP_URL_TOOLTIP = "AppModuleLandingPage.ManageAppDialogAppURLTextToolTip";
    exports.LS_ACCESS_TO_ALL_ROLES = "AppModuleLandingPage.ManageAppDialogAccessToAllRolesLabel";
    exports.LS_ACCESS_TO_SELECTED_ROLES = "AppModuleLandingPage.ManageAppDialogAccessToSelectedRolesLabel";
    exports.LS_SAVE_BUTTON_TOOLTIP = "AppModuleLandingPage.ManageAppDialogSaveButtonToolTip";
    exports.LS_CANCEL_BUTTON_TOOLTIP = "AppModuleLandingPage.ManageAppDialogCancelButtonToolTip";
    exports.LS_ROLES_SELECTED = "AppModuleLandingPage.ManageAppDialogRolesSelected";
    exports.LS_URL_VALIDATION_MSG = "AppModuleLandingPage.ManageAppDialogAppURLValidationMsg";
    exports.LS_PUBLISHING_APP_MSG = "AppModuleLandingPage.PublishAppDialogProgressMessage";
    exports.LS_PROGRESS_MSG = "AppModuleLandingPage.ManageAppDialogProgressMessage";
    exports.LS_ROLES_LABEL = "AppModuleLandingPage.ManageAppDialogRolesLbl";
    exports.LS_BUSINESS_UNIT = "AppModuleLandingPage.BusinessUnitTableColumn";
    exports.LS_MANAGE_ROLE_DESCRIPTION = "AppModuleLandingPage.ManageAppDialogChooseURLMsg";
    exports.LS_NAME = "Tab_Label_Schema";
    exports.LS_REFRESH = "MenuItem_Label_Refresh";
    exports.LS_SEARCH_MY_APPS = "AppModuleLandingPage.SearchMyApps";
    exports.LS_NO_APPS = "AppModuleLandingPage.NoApps";
    exports.LS_MISSING_APP_REFRESH = "AppModuleLandingPage.AppRefresh";
    exports.LS_CREATE_NEW_APP = "AppModuleLandingPage.CreateNewApp";
    exports.LS_DEFAULT_PUBLISHER = "AppModuleLandingPage.DefaultPublisher";
    exports.LS_APP_DESIGNER = "AppDesigner.Homepage.Title";
    exports.LS_FILTER = "AppModuleLandingPage.Filter";
    exports.LS_FILTERBY = "AppModuleLandingPage.FilterBy";
    exports.LS_CLIENT_LABEL = "AppDesigner.TargetClient.Label";
    exports.LS_APP_URL_SUFFIX = "AppDesigner.ApplicationURL";
    exports.LS_CLIENT_WEB = "AppDesigner.ClientWeb";
    exports.LS_CLOSE = "AppModuleLandingPage.Close";
    exports.LS_CLIENT_UCI = "AppModuleLandingPage.UCIFilter";
    exports.LS_NO_MATCHING_SEARCH = "AppModuleLandingPage.NoMatchingSearch";
    exports.LS_BUTTON_SAVE = "Button_Label_Save";
    exports.LS_BUTTON_CANCEL = "Button_Label_Cancel";
    exports.LS_UPDATE_APPS = "AppModuleLandingPage.UpdateApps";
    exports.LS_PROCESS_APPS_MSG = "AppModuleLandingPage.ProcessingMsg";
    exports.LS_MY_APPS = "App_Modules_SubArea_Title";
    exports.LS_APP_URL_NOT_UNIQUE = "AppModuleLandingPage.ManageAppDialogAppUrlNotUniqueMsg";
    exports.LS_APP_URL_LENGHT_ERROR = "AppModuleLandingPage.ManageAppDialogAppURLValidationMsg";
    exports.LS_APP_ROLE_ASSIGNMENT_ERROR = "AppModuleLandingPage.ManageAppDialogAppRoleAssignmentErrorMsg";
    exports.LS_GENERIC_ERROR = "AppModuleLandingPage.GenericUnknownError";
    exports.LS_CANNOT_PUBLISH_OPEN_DESIGNER = "AppModuleLandingPage.CannotPublishOpenDesignerError";
    exports.LS_CANNOT_PUBLISH_TITLE = "AppModuleLandingPage.AppValidationErrorTitle";
    exports.LS_ERROR_TITLE_GENERIC = "Error_Title_Generic";
    exports.LS_PUBLISHED_APPS_SECTION_TOOLTIP = "AppModuleLandingPage.PublishedAppsTooltip";
    exports.LS_UNPUBLISHED_APPS_SECTION_TOOLTIP = "AppModuleLandingPage.UnPublishedAppsTooltip";
    exports.LS_GO_TO_MY_APPS_TOOLTIP = "App_Modules_SubArea_ToolTip";
    exports.LS_CHOOSE_APP_ROLE_MAPPING_TOOLTIP = "AppModuleLandingPage.ChooseAppRoleMapping";
    exports.LS_PUBLISH_APP_AND_COMPONENT_TOOLTIP = "AppModuleLandingPage.PublishAppAndComponentsTooltip";
    exports.LS_CREATE_NEW_APP_BUTTON_TOOLTIP = "AppModuleLandingPage.CreateNewAppButtonToolTip";
    exports.LS_FILTER_BUTTON_TOOLTIP = "AppModuleLandingPage.FilterButtonToolTip";
    exports.LS_REFRESH_BUTTON_TOOLTIP = "AppModuleLandingPage.RefreshButtonTooltip";
    exports.LS_URL_SUFFIX_TOOLTIP = "AppModuleLandingPage.UrlSuffixToolTip";
    exports.LS_WARNING_TEXT = "Warning_Dlg_Title";
    exports.LS_OPEN_IN_DESIGNER_BUTTON_TOOLTIP = "AppModuleLandingPage.OpenInDesinerTooltip";
    exports.LS_OK = "AppModuleLandingPage.Ok";
});
define("src/Selectors", ["require", "exports", 'Reselect', "src/Models"], function (require, exports, Reselect_1, Models_1) {
    "use strict";
    var publishedAppsSelector = function (state) { return state.publishedApps.list; };
    var unPublishedAppsSelector = function (state) { return state.unPublishedApps.list; };
    var searchTextSelector = function (state) { return state.filters.searchText; };
    var clientTypesSelector = function (state) { return state.filters.clientType; };
    exports.filteredPublishedApps = Reselect_1.createSelector(publishedAppsSelector, searchTextSelector, clientTypesSelector, function (publishedApps, searchText, clientTypes) {
        var isAnyFilterApplied = false;
        var filteredPublishedApps = publishedApps.slice();
        if (searchText) {
            isAnyFilterApplied = true;
            filteredPublishedApps = filteredPublishedApps.filter(function (app) { return (app.appInfo.Title.toUpperCase().indexOf(searchText.toUpperCase()) != -1 ||
                (app.appInfo.Description != null && app.appInfo.Description.toUpperCase().indexOf(searchText.toUpperCase()) != -1)); });
        }
        if (clientTypes != null && clientTypes.length > 0) {
            isAnyFilterApplied = true;
            filteredPublishedApps = filteredPublishedApps.filter(function (app) { return (app.appInfo.ClientType && isAppValidForSelectedClientTypes(app.appInfo.ClientType, clientTypes)); });
        }
        if (!isAnyFilterApplied) {
            return publishedApps;
        }
        return filteredPublishedApps;
    });
    exports.filteredUnPublishedApps = Reselect_1.createSelector(unPublishedAppsSelector, searchTextSelector, clientTypesSelector, function (unPublishedApps, searchText, clientTypes) {
        var isAnyFilterApplied = false;
        var filteredUnPublishedApps = unPublishedApps.slice();
        if (searchText) {
            isAnyFilterApplied = true;
            filteredUnPublishedApps = filteredUnPublishedApps.filter(function (app) { return (app.appInfo.Title.toUpperCase().indexOf(searchText.toUpperCase()) != -1 || (app.appInfo.Description != null && app.appInfo.Description.toUpperCase().indexOf(searchText.toUpperCase()) != -1)); });
        }
        if (clientTypes != null && clientTypes.length > 0) {
            isAnyFilterApplied = true;
            filteredUnPublishedApps = filteredUnPublishedApps.filter(function (app) { return (app.appInfo.ClientType && isAppValidForSelectedClientTypes(app.appInfo.ClientType, clientTypes)); });
        }
        if (!isAnyFilterApplied) {
            return unPublishedApps;
        }
        return filteredUnPublishedApps;
    });
    function isAppValidForSelectedClientTypes(appInfoClientType, clientTypes) {
        if (clientTypes.length == 2)
            return true;
        if (clientTypes.indexOf(Models_1.ClientTypes.Web) > -1 && (appInfoClientType == 2 || appInfoClientType == 8))
            return true;
        if (clientTypes.indexOf(Models_1.ClientTypes.UCI) > -1 && (appInfoClientType == 4 || appInfoClientType == 8))
            return true;
        return false;
    }
});
define("src/DataServiceUtility", ["require", "exports", "src/Constants", "src/Models"], function (require, exports, Constants, Models_2) {
    "use strict";
    var webfragment = "/api/data/v9.0/";
    var xrmapi = XrmAPI();
    /**
     * If ClientAPIFrame is available use the one otherwise normal Xrm
     */
    function XrmAPI() {
        var MXrm = null;
        var clientFrame = null;
        var frames = window.top.document.getElementsByTagName("iframe");
        for (var i = 0; i < frames.length; ++i) {
            if (frames[i].id.indexOf("ClientApiFrame") >= 0) {
                clientFrame = frames[i];
                break;
            }
        }
        if (clientFrame != null) {
            MXrm = clientFrame.contentWindow;
        }
        else {
            MXrm = window.top;
        }
        return MXrm;
    }
    /**
     * Generate a random GUID
     */
    function guid() {
        function _p8(s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8(null) + _p8(true) + _p8(true) + _p8(null);
    }
    /**
     * RetrieveUserContext the user context.
     * @returns {any} a promise object which will get user context on then().
     */
    function RetrieveUserContext(org) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = org + webfragment + 'GetClientMetadata(ClientMetadataQuery=@ClientMetadataQuery)?@ClientMetadataQuery={"MetadataType":null,"MetadataSubtype":null,"EntityLogicalName":null,"MetadataId":null,"MetadataName":null,"GetDefault":null,"DependencyDepth":"UserContext","ChangedAfter":null,"Exclude":[],"AppId":null}';
            xhr.open('GET', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.response != null) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
            xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
            xhr.send();
        });
    }
    exports.RetrieveUserContext = RetrieveUserContext;
    /// <summary>
    /// Set show or hide Default app for all roles
    /// </summary>
    function DefaultAppForAllRoles(roleValue) {
        return new Promise(function (resolve, reject) {
            var val = (Models_2.ShowHideRoles.ShowAllRoles == roleValue) ? true : false;
            var xml = "<Organization><defaultappenabled>" + val + "</defaultappenabled></Organization>";
            var defaultappXml = new DOMParser().parseFromString(xml, "text/xml");
            var url = "/Tools/AppModuleContainer/Cmds/cmd_AppModuleOperations.aspx?oType=" + "3";
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache", "true");
            xhr.setRequestHeader("Content-type", "text/html; charset=UTF-8.");
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("SessionId", guid());
            xhr.send(defaultappXml);
        });
    }
    exports.DefaultAppForAllRoles = DefaultAppForAllRoles;
    /**
     * RetrieveAppDescriptors
     * @returns {any} a promise object which will get app descs. on then().
     */
    function RetrieveAppDescriptors(org) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = org + webfragment + 'GetClientMetadata(ClientMetadataQuery=@ClientMetadataQuery)?@ClientMetadataQuery={"MetadataType":"appmodules","MetadataSubtype":null,"EntityLogicalName":"AppModule","MetadataId":null,"GetDefault":false,"DependencyDepth":null,"ChangedAfter":null,"Exclude":[]}';
            xhr.open('GET', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.response != null) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
            xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
            xhr.send();
        });
    }
    exports.RetrieveAppDescriptors = RetrieveAppDescriptors;
    /**
     * RetrieveLocalizedStrings
     * @returns {any} a promise object which will get app descs. on then().
     */
    function RetrieveLocalizedStrings(org) {
        var strs = [];
        for (var key in Constants) {
            strs.push(Constants[key]);
        }
        return new Promise(function (resolve, reject) {
            var InputData = {
                "resourceIds": strs
            };
            var url = org + "/AppWebServices/MetadataService.asmx/GetResourceStrings";
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache", "true");
            xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8.");
            xhr.setRequestHeader("SOAPAction", org + "/AppWebServices/MetadataService.asmx/GetResourceStrings");
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("SessionId", guid());
            xhr.send(JSON.stringify(InputData));
        });
    }
    exports.RetrieveLocalizedStrings = RetrieveLocalizedStrings;
    /**
     * RetrieveAppRoles
     * @returns {any} a promise object which will get app descs. on then().
     */
    function RetrieveAppRoles(org, appid) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = org + webfragment + "appmodules" + "(" + appid + ")" + "?$expand=appmoduleroles_association";
            xhr.open('GET', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.response != null) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Content-type", "application/json; odata.metadata=minimal");
            xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
            xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
            xhr.send();
        });
    }
    exports.RetrieveAppRoles = RetrieveAppRoles;
    /**
     * RetrieveRoles
     * @returns {any} a promise object which will get app descs. on then().
     */
    function RetrieveRoles(org) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = org + webfragment + "roles";
            xhr.open('GET', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.response != null) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Content-type", "application/json; odata.metadata=minimal");
            xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
            xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
            xhr.send();
        });
    }
    exports.RetrieveRoles = RetrieveRoles;
    /**
     * Save App URL API call
     * @returns {any} a promise object which will get app descs. on then().
     */
    function SaveAppURL(org, appid, newurl) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var InputData = {
                url: newurl
            };
            var url = org + webfragment + "appmodules" + "(" + appid + ")";
            xhr.open('PATCH', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 204) {
                    if (xhr.response != null && xhr.response != "") {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(JSON.stringify(InputData));
        });
    }
    exports.SaveAppURL = SaveAppURL;
    /// <summary>
    /// Publish App
    /// </summary>
    function PublishApp(AppId) {
        return new Promise(function (resolve, reject) {
            var xml = "<AppModule><appmoduleid>" + AppId + "</appmoduleid></AppModule>";
            var defaultappXml = new DOMParser().parseFromString(xml, "text/xml");
            var url = "/Tools/AppModuleContainer/Cmds/cmd_AppModuleOperations.aspx?oType=" + "1";
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache", "true");
            xhr.setRequestHeader("Content-type", "text/html; charset=UTF-8.");
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("SessionId", guid());
            xhr.send(defaultappXml);
        });
    }
    exports.PublishApp = PublishApp;
    function AssociateAppRoles(org, appid, role) {
        return new Promise(function (resolve, reject) {
            var data = GetOrgName() + webfragment + "roles" + "(" + role + ")";
            var InputData = {
                "@odata.id": data
            };
            var url = GetOrgName() + webfragment + "appmodules" + "(" + appid + ")" + "/appmoduleroles_association" + "/$ref";
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 204)) {
                    resolve(xhr.response);
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache", "true");
            xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8.");
            xhr.send(JSON.stringify(InputData));
        });
    }
    exports.AssociateAppRoles = AssociateAppRoles;
    function DisassociateAppRoles(org, appid, role) {
        return new Promise(function (resolve, reject) {
            var url = GetOrgName() + webfragment + "appmodules" + "(" + appid + ")" + "/appmoduleroles_association" + "(" + role + ")" + "/$ref";
            var xhr = new XMLHttpRequest();
            xhr.open('DELETE', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 204) {
                    if (xhr.response != null && xhr.response != "") {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("cache", "true");
            xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8.");
            xhr.send();
        });
    }
    exports.DisassociateAppRoles = DisassociateAppRoles;
    function getBusinessUnit() {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = GetOrgName() + webfragment + "businessunits";
            xhr.open('GET', url, true);
            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.response != null) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        resolve(xhr.response);
                    }
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            // Handle network errors
            xhr.onerror = function () {
                reject(Error("Network Error"));
            };
            xhr.setRequestHeader("Content-type", "application/json; odata.metadata=minimal");
            xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.8");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.send();
        });
    }
    exports.getBusinessUnit = getBusinessUnit;
    function GetClientType() {
        if (xrmapi != null) {
            return xrmapi.Xrm.Page.context.client.getClient();
        }
    }
    exports.GetClientType = GetClientType;
    function GetOrgName() {
        if (xrmapi != null) {
            return xrmapi.Xrm.Page.context.getClientUrl();
        }
    }
    exports.GetOrgName = GetOrgName;
    function GetDomainName() {
        if (xrmapi != null) {
            return xrmapi.Xrm.Page.context.getClientUrl().split("/")[2];
        }
    }
    exports.GetDomainName = GetDomainName;
    function GetClientStatus() {
        if (xrmapi != null) {
            return xrmapi.Xrm.Page.context.client.getClientState();
        }
    }
    exports.GetClientStatus = GetClientStatus;
    ///0 - Unknown, 1 - Desktop, 2 - Tablet, 3 - Phone
    function GetFormFactor() {
        if (xrmapi != null) {
            return xrmapi.Xrm.Page.context.client.getFormFactor();
        }
    }
    exports.GetFormFactor = GetFormFactor;
});
define("src/Components/ManageRoles/AppUrlSuffixSection", ["require", "exports", "react", "src/DataServiceUtility", "src/Utils/Styler", "src/Constants"], function (require, exports, React, DataServiceUtility_1, Styler_2, Constants) {
    "use strict";
    var AppUrlSuffixSection = (function (_super) {
        __extends(AppUrlSuffixSection, _super);
        function AppUrlSuffixSection(props) {
            _super.call(this, props);
            this.state = {
                currentAppURL: this.props.appUrl
            };
        }
        AppUrlSuffixSection.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {id: "appUrlSuffixSection", style: { display: 'none', transition: '0.5s' }}, 
                React.createElement("input", {key: "appURLSuffixInput", "aria-label": this.props.localizedStrings[Constants.LS_URL_SUFFIX_TOOLTIP], tabIndex: 1, type: "text", maxLength: 20, value: this.state.currentAppURL, style: Styler_2.Styler.ManageRoleFlyout.AppURLSuffixTextBoxStyle, onChange: this.handleTextChange.bind(this)}), 
                this.state.currentAppURL != null && this.state.currentAppURL.length > 0 ?
                    React.createElement("div", {style: { marginTop: '0.5rem', display: 'flex' }}, 
                        React.createElement("div", {title: "Copy", role: "button", className: "mscrm-glyph-CopyIcon", tabIndex: 1, style: this.computeFontIconStyle(), onClick: function () { return _this.copyAppUrl(); }}), 
                        React.createElement("a", {role: "link", href: this.state.currentAppURL, style: Styler_2.Styler.ManageRoleFlyout.AppURLStyle}, 
                            React.createElement("label", {id: "app-suffix-url-label"}, this.getFullAppUrl()), 
                            " "))
                    : null));
        };
        AppUrlSuffixSection.prototype.computeFontIconStyle = function () {
            var style = Styler_2.Styler.ManageRoleFlyout.AppURLCopyIconStyle;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        AppUrlSuffixSection.prototype.handleTextChange = function (event) {
            var editedAppUrl = event.target.value;
            this.setState({
                currentAppURL: editedAppUrl.trim()
            });
            this.props.onChangeListener(editedAppUrl.trim());
        };
        AppUrlSuffixSection.prototype.componentWillReceiveProps = function () {
            this.setState({
                currentAppURL: this.props.appUrl
            });
        };
        AppUrlSuffixSection.prototype.getFullAppUrl = function () {
            return DataServiceUtility_1.GetOrgName() + "/apps/" + this.state.currentAppURL;
        };
        AppUrlSuffixSection.prototype.copyAppUrl = function () {
            var textToCopy = this.getFullAppUrl();
            var textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                var status = document.execCommand('copy');
                textArea.remove();
            }
            catch (err) {
                console.log(err);
            }
        };
        return AppUrlSuffixSection;
    }(React.Component));
    exports.AppUrlSuffixSection = AppUrlSuffixSection;
});
define("src/Components/ManageRoles/RolesTableRow", ["require", "exports", "react", "src/Utils/Styler", "src/Models", 'react-redux', "src/Actions", "src/Components/CustomCheckbox"], function (require, exports, React, Styler_3, Models_3, react_redux_2, Actions_1, CustomCheckbox_1) {
    "use strict";
    var RolesTableRow = (function (_super) {
        __extends(RolesTableRow, _super);
        function RolesTableRow(props) {
            _super.call(this, props);
            this.state = {
                isSelected: this.props.currentAppManageRolesData.appSelectedRoles[this.props.role.roleId],
                isHovered: false
            };
        }
        RolesTableRow.prototype.render = function () {
            var self = this;
            var chkBoxTitle = this.props.role.roleName;
            var checkBox = React.createElement(CustomCheckbox_1.default, {key: this.props.role.roleId + "checkbox", title: this.props.role.roleName, onClick: function () { }, onKeyDown: function (e) { self.keyPressOnCheckBox(e, self); }, isChecked: this.state.isSelected});
            return React.DOM.div({
                id: this.props.role.roleId,
                style: this.getRowStyle(),
                key: this.props.role.roleName,
                onClick: function (e) { self.toggleRowCheckBox(self, e); },
                onMouseEnter: function () { self.setState({ isSelected: self.state.isSelected, isHovered: true }); },
                onMouseLeave: function () { self.setState({ isSelected: self.state.isSelected, isHovered: false }); }
            }, [
                React.DOM.div({ key: 'checkbox', style: { width: '9%' } }, checkBox),
                React.DOM.div({ key: 'role-name', style: self.getColumnCellStyle(Styler_3.Styler.ManageRoleFlyout.RoleTableDataColumn1Style, self) }, [this.props.role.roleName]),
                React.DOM.div({ key: 'business-unit', style: self.getColumnCellStyle(Styler_3.Styler.ManageRoleFlyout.RoleTableDataColumn2Style, self) }, [this.props.role.businessUnit])
            ]);
        };
        RolesTableRow.prototype.getColumnCellStyle = function (style, self) {
            var newStyle = Object.assign({}, style);
            if (self.props.isRTL) {
                newStyle = Object.assign({}, style, { textAlign: 'right' });
            }
            return newStyle;
        };
        RolesTableRow.prototype.keyPressOnCheckBox = function (e, self) {
            if (e.keyCode == Models_3.KeyCodeEnum.SpaceKey || e.keyCode == Models_3.KeyCodeEnum.EnterKey) {
                e.target.parentElement.click();
                e.stopPropagation();
                e.preventDefault();
            }
        };
        RolesTableRow.prototype.toggleRowCheckBox = function (self, e) {
            this.setState({
                isSelected: !this.state.isSelected,
                isHovered: true
            });
            this.props.currentAppManageRolesData.appSelectedRoles[this.props.role.roleId] = !this.props.currentAppManageRolesData.appSelectedRoles[this.props.role.roleId];
            self.props.setRoleState(false);
            this.props.setCurrentAppManageRolesData(this.props.currentAppManageRolesData);
        };
        RolesTableRow.prototype.getRowStyle = function () {
            var style = { height: '1.50rem', cursor: 'pointer', display: 'flex' };
            if (this.state.isSelected) {
                style = Object.assign({}, style, { backgroundColor: '#c6dff5' });
                return style;
            }
            if (this.state.isHovered)
                style = Object.assign({}, style, { backgroundColor: '#d7ebf9' });
            return style;
        };
        RolesTableRow.prototype.componentWillReceiveProps = function (nextProps) {
            this.setState({
                isSelected: nextProps.currentAppManageRolesData.appSelectedRoles[this.props.role.roleId],
                isHovered: this.state.isHovered
            });
        };
        return RolesTableRow;
    }(React.Component));
    var mapDispatchToProps = function (dispatch) { return ({
        setCurrentAppManageRolesData: function (currentAppManageRolesData) {
            dispatch(Actions_1.setCurrentAppManageRolesData(currentAppManageRolesData));
        },
        setRoleState: function (isCopy) {
            dispatch(Actions_1.roleStates(isCopy));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_2.connect(null, mapDispatchToProps, null)(RolesTableRow);
});
define("src/Components/ManageRoles/RolesTable", ["require", "exports", "react", 'react-redux', "src/Utils/Styler", "src/Constants", "src/Models", "src/Components/ManageRoles/RolesTableRow", "src/Actions", "src/Components/CustomCheckbox"], function (require, exports, React, react_redux_3, Styler_4, Constants_1, Models_4, RolesTableRow_1, Actions_2, CustomCheckbox_2) {
    "use strict";
    var RolesTable = (function (_super) {
        __extends(RolesTable, _super);
        function RolesTable() {
            _super.apply(this, arguments);
            this.allState = false;
            this.columns = [this.props.localizedStrings[Constants_1.LS_NAME], this.props.localizedStrings[Constants_1.LS_BUSINESS_UNIT]];
        }
        RolesTable.prototype.render = function () {
            var self = this;
            var tbodyheight = window.innerHeight < 600 ? '206px' : '306px';
            var isRTL = this.props.isRTL;
            var checkBox = React.createElement(CustomCheckbox_2.default, {key: "headerCheckbox", title: "", onClick: function () { self.setAllRolesToTrue(self); }, onKeyDown: function (e) { self.headerKeyDown(e, self); }, isChecked: this.allState});
            var thead = React.DOM.div({ key: 'thead-row', style: { display: 'block', height: '1.5rem' } }, React.DOM.div({ key: 'header-roles-table', style: { display: 'flex' } }, [
                React.DOM.div({ key: 'check-box', style: Object.assign({}, { width: '9%' }, Styler_4.Styler.ManageRoleFlyout.RoleTableHeaderBorder) }, [checkBox]),
                React.DOM.div({ key: 'role-name', style: self.getColumnHeaderCellStyle(Styler_4.Styler.ManageRoleFlyout.RoleTableDataColumn1Style, self) }, "Name"),
                React.DOM.div({ key: 'business-unit', style: self.getColumnHeaderCellStyle(Styler_4.Styler.ManageRoleFlyout.RoleTableDataColumn2Style, self) }, "Business Unit")
            ]));
            var trows = this.props.roles.map(function (row) {
                return React.createElement(RolesTableRow_1.default, {key: row.roleId, role: row, currentAppManageRolesData: self.props.currentAppManageRolesData, isRTL: self.props.isRTL});
            });
            var tbody = React.DOM.div({ key: 'tbody', style: { display: 'block', borderTop: '1px solid #cccccc', overflowY: 'auto', height: tbodyheight } }, [trows]);
            return React.DOM.div({ key: 'role-table', onKeyDown: function (e) { self.keyboardActions(self, e); }, style: { border: '1px solid #cccccc', width: '100%' }, cellSpacing: '0', cellPadding: '0' }, [thead, tbody]);
        };
        RolesTable.prototype.getColumnHeaderCellStyle = function (style, self) {
            var newStyle = Object.assign({}, style, Styler_4.Styler.ManageRoleFlyout.RoleTableHeaderBorder);
            if (self.props.isRTL) {
                newStyle = Object.assign({}, newStyle, { textAlign: 'right' });
            }
            return newStyle;
        };
        RolesTable.prototype.setAllRolesToTrue = function (self) {
            self.allState = !self.allState;
            if (self.allState) {
                Object.keys(self.props.currentAppManageRolesData.appSelectedRoles).map(function (item) {
                    self.props.currentAppManageRolesData.appSelectedRoles[item] = true;
                });
            }
            else {
                Object.keys(self.props.currentAppManageRolesData.appSelectedRoles).map(function (item) {
                    self.props.currentAppManageRolesData.appSelectedRoles[item] = false;
                });
            }
            self.props.setRoleState(false);
            self.props.setCurrentAppManageRolesData(self.props.currentAppManageRolesData);
        };
        RolesTable.prototype.headerKeyDown = function (e, self) {
            if (e.keyCode === Models_4.KeyCodeEnum.SpaceKey || e.keyCode === Models_4.KeyCodeEnum.EnterKey) {
                e.target.click();
            }
        };
        RolesTable.prototype.keyboardActions = function (self, e) {
            if (e.ctrlKey && e.keyCode == Models_4.KeyCodeEnum.f6Key) {
                document.getElementById('roles-save').focus();
                e.stopPropagation();
                e.preventDefault();
            }
        };
        return RolesTable;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        isRTL: state.userData.isRTL,
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        setCurrentAppManageRolesData: function (currentAppManageRolesData) {
            dispatch(Actions_2.setCurrentAppManageRolesData(currentAppManageRolesData));
        },
        setRoleState: function (isCopy) {
            dispatch(Actions_2.roleStates(isCopy));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_3.connect(mapStateToProps, mapDispatchToProps, null)(RolesTable);
});
define("src/Components/ManageRoles/RolesSection", ["require", "exports", "react", 'react-redux', "src/Utils/Styler", "src/Components/ManageRoles/RolesTable"], function (require, exports, React, react_redux_4, Styler_5, RolesTable_1) {
    "use strict";
    var RolesSection = (function (_super) {
        __extends(RolesSection, _super);
        function RolesSection() {
            _super.apply(this, arguments);
        }
        RolesSection.prototype.render = function () {
            var self = this;
            return (React.createElement("div", {id: "roleSection", className: "landing-page-overflow-handling", style: Styler_5.Styler.ManageRoleFlyout.ManageRolesTableStyle}, 
                React.createElement(RolesTable_1.default, {roles: this.props.allRoles.roles, currentAppManageRolesData: this.props.currentAppManageRolesData, localizedStrings: this.props.localizedStrings}), 
                React.createElement("div", {style: Styler_5.Styler.ManageRoleFlyout.ManageRolesTableFooterStyle}, 
                    " 1 - ", 
                    this.getRolesCount(), 
                    " of ", 
                    this.getRolesCount(), 
                    " (", 
                    this.getSelectedRolesCount(), 
                    " selected) ")));
        };
        RolesSection.prototype.getSelectedRolesCount = function () {
            var count = 0;
            var self = this;
            Object.keys(self.props.currentAppManageRolesData.appSelectedRoles).map(function (role) {
                if (self.props.currentAppManageRolesData.appSelectedRoles[role] == true)
                    count++;
            });
            return count;
        };
        RolesSection.prototype.getRolesCount = function () {
            return Object.keys(this.props.currentAppManageRolesData.appSelectedRoles).length;
        };
        return RolesSection;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        allRoles: state.allRoles,
        localizedStrings: state.localizedStrings,
        currentAppManageRolesData: state.currentAppManageRolesData
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_4.connect(mapStateToProps, null, null)(RolesSection);
});
define("src/Components/ManageRoles/ManageRolesErrorDiv", ["require", "exports", "react", "src/Utils/Styler", 'react-redux'], function (require, exports, React, Styler_6, react_redux_5) {
    "use strict";
    var ManageRolesErrorDiv = (function (_super) {
        __extends(ManageRolesErrorDiv, _super);
        function ManageRolesErrorDiv() {
            _super.apply(this, arguments);
        }
        ManageRolesErrorDiv.prototype.render = function () {
            if (this.props.error.errorString == "")
                return null;
            return (React.createElement("div", {style: { marginTop: '1.00rem' }}, 
                React.createElement("div", {style: { display: 'inline-flex', backgroundColor: '#a6a6a6', width: '100%' }}, 
                    React.createElement("div", {id: "error_div_icon", className: "mscrm-glyph-ErrorIcon", style: Styler_6.Styler.ManageRolesErrorDiv.ErrorFontIcon}), 
                    React.createElement("div", {id: "warningSection_Title", style: Styler_6.Styler.ManageRolesErrorDiv.WarningMessageDiv}, 
                        React.createElement("label", null, "Warning")
                    )), 
                React.createElement("div", {style: Styler_6.Styler.ManageRolesErrorDiv.ErrorMessageDiv}, 
                    React.createElement("label", null, this.props.error.errorString)
                )));
        };
        return ManageRolesErrorDiv;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        error: state.manageRolesErrorData
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_5.connect(mapStateToProps, null, null)(ManageRolesErrorDiv);
});
define("src/Components/CrossButton", ["require", "exports", "react", "src/Models"], function (require, exports, React, Models_5) {
    "use strict";
    var CrossButton = (function (_super) {
        __extends(CrossButton, _super);
        function CrossButton() {
            _super.call(this);
            this.state = {
                crossBtnHover: false
            };
        }
        CrossButton.prototype.render = function () {
            var _this = this;
            return (React.createElement("button", {title: this.props.btnTitle, id: this.props.btnID, className: "mscrm-glyph-CrossIcon", tabIndex: 1, onMouseEnter: function () { return _this.setState({ crossBtnHover: true }); }, onMouseLeave: function () { return _this.setState({ crossBtnHover: false }); }, onClick: function () { return _this.props.closeCallback(); }, style: this.computeCrossBtnStyle(), onKeyDown: function (e) { return _this.shiftFocusOnShitTab(e); }}));
        };
        CrossButton.prototype.computeCrossBtnStyle = function () {
            var style = this.props.btnStyle;
            if (this.state.crossBtnHover)
                style = Object.assign({}, style, { backgroundColor: '#eaeaea' });
            if (this.props.isRTL) {
                style = Object.assign({}, style, { left: style.right });
                delete style.right;
            }
            return style;
        };
        CrossButton.prototype.shiftFocusOnShitTab = function (e) {
            if (e.keyCode == Models_5.KeyCodeEnum.TabKey && e.shiftKey) {
                if (this.props.preFocusElement != null && document.getElementById(this.props.preFocusElement) != null) {
                    document.getElementById(this.props.preFocusElement).focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        return CrossButton;
    }(React.Component));
    exports.CrossButton = CrossButton;
});
define("src/Components/GenericButton", ["require", "exports", "react", "src/Models"], function (require, exports, React, Models_6) {
    "use strict";
    var GenericButton = (function (_super) {
        __extends(GenericButton, _super);
        function GenericButton() {
            _super.call(this);
            this.state = {
                btnHover: false
            };
        }
        GenericButton.prototype.render = function () {
            var _this = this;
            return (React.createElement("button", {className: "landing-page-overflow-handling", style: this.computeBtnStyle(), role: "button", id: this.props.btnID, tabIndex: 1, "aria-label": this.props.btnName, title: this.props.toolTip, onMouseEnter: function () { return _this.setState({ btnHover: true }); }, onMouseLeave: function () { return _this.setState({ btnHover: false }); }, onClick: function () { return _this.props.clickCallback(); }, onKeyDown: function (e) { return _this.shiftFocusOnTab(e); }}, 
                React.createElement("span", null, this.props.btnName)
            ));
        };
        GenericButton.prototype.shiftFocusOnTab = function (e) {
            if (e.keyCode == Models_6.KeyCodeEnum.TabKey && !e.shiftKey) {
                if (this.props.postFocusElement != null && document.getElementById(this.props.postFocusElement) != null) {
                    document.getElementById(this.props.postFocusElement).focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        GenericButton.prototype.computeBtnStyle = function () {
            var style = this.props.btnStyle;
            if (this.state.btnHover)
                style = Object.assign({}, style, { backgroundColor: '#006cc2', color: 'white', border: '1px solid #006cc2' });
            return style;
        };
        return GenericButton;
    }(React.Component));
    exports.GenericButton = GenericButton;
});
define("src/Utils/RefreshUtil", ["require", "exports", "src/Models", "src/DataServiceUtility"], function (require, exports, Models_7, DataServiceUtility_2) {
    "use strict";
    function refreshAllApps(appData, userDataObj) {
        var publishedApps = [];
        var unPublishedApps = [];
        var isShim = ((DataServiceUtility_2.GetFormFactor() == Models_7.ClientType.Tablet) || (DataServiceUtility_2.GetFormFactor() == Models_7.ClientType.Phone));
        if (appData.Metadata != "") {
            if (JSON.parse(appData.Metadata).LegacyAppModule) {
                publishedApps = publishedApps.concat(JSON.parse(appData.Metadata).LegacyAppModule);
            }
            if (JSON.parse(appData.Metadata).AppModulePublished) {
                publishedApps = publishedApps.concat(JSON.parse(appData.Metadata).AppModulePublished);
                //Remove after Tarun's Fix
                for (var i_1 = 0; i_1 < publishedApps.length; i_1++) {
                    publishedApps[i_1].appInfo.Status = 0;
                    if (isShim && publishedApps[i_1] != null && (publishedApps[i_1].appInfo.ClientType != 4)) {
                        publishedApps.splice(i_1, 1);
                        i_1--;
                    }
                }
                publishedApps.sort(function (a, b) {
                    if (a.appInfo && a.appInfo.Title && b.appInfo && b.appInfo.Title) {
                        return a.appInfo.Title.toLocaleLowerCase().localeCompare(b.appInfo.Title.toLocaleLowerCase());
                    }
                });
            }
            if ((JSON.parse(appData.Metadata).AppModuleUnpublished) && (userDataObj.landingPagePrivileges.isAppModuleAdmin)) {
                unPublishedApps = unPublishedApps.concat(JSON.parse(appData.Metadata).AppModuleUnpublished);
                //Remove after Tarun's Fix
                for (var i = 0; i < unPublishedApps.length; i++) {
                    unPublishedApps[i].appInfo.Status = 1;
                    if (isShim && unPublishedApps[i] != null && (unPublishedApps[i].appInfo.ClientType != 4)) {
                        unPublishedApps.splice(i, 1);
                        i--;
                    }
                }
                unPublishedApps.sort(function (a, b) {
                    return a.appInfo.Title.toLocaleLowerCase().localeCompare(b.appInfo.Title.toLocaleLowerCase());
                });
            }
        }
        var allApps = {
            publishedApps: publishedApps,
            unPublishedApps: unPublishedApps
        };
        return allApps;
    }
    exports.refreshAllApps = refreshAllApps;
});
define("src/Components/ManageRoles/ManageRoleSideNavBar", ["require", "exports", "react", "src/Components/ManageRoles/AppUrlSuffixSection", "src/Components/ManageRoles/RolesSection", "src/Components/ManageRoles/ManageRolesErrorDiv", 'react-redux', "src/Models", "src/Actions", "src/Utils/Styler", "src/Constants", "src/Components/AppLandingPage", "src/Components/ManageRoles/CurrentAppManageRolesData", "src/DataServiceUtility", "src/Components/CrossButton", "src/Components/GenericButton", "src/Utils/RefreshUtil"], function (require, exports, React, AppUrlSuffixSection_1, RolesSection_1, ManageRolesErrorDiv_1, react_redux_6, Models_8, Actions_3, Styler_7, Constants, AppLandingPage_1, CurrentAppManageRolesData_1, DataServiceUtility_3, CrossButton_1, GenericButton_1, RefreshUtil_1) {
    "use strict";
    var ManageRolesSideNavbar = (function (_super) {
        __extends(ManageRolesSideNavbar, _super);
        function ManageRolesSideNavbar() {
            _super.apply(this, arguments);
            this.existingAppManageRolesData = new CurrentAppManageRolesData_1.CurrentAppManageRolesData();
            this.newAppURLSuffix = "";
            this.stopwatch = new StopWatch.Stopwatch();
        }
        ManageRolesSideNavbar.prototype.render = function () {
            var _this = this;
            var self = this;
            if (self.props.roleState.isCopy) {
                if (this.props.appManageRolesData != null && this.props.appManageRolesData.currentApp != null && this.props.appManageRolesData.appSelectedRoles != {}) {
                    var currentApp = Object.assign({}, this.props.appManageRolesData.currentApp);
                    var appSelectedRoles = Object.assign({}, this.props.appManageRolesData.appSelectedRoles);
                    this.existingAppManageRolesData.currentApp = currentApp;
                    this.existingAppManageRolesData.appSelectedRoles = appSelectedRoles;
                    this.newAppURLSuffix = this.props.appManageRolesData.currentApp.appInfo.AppUrl;
                }
            }
            if (this.props.appManageRolesData.currentApp == null)
                return (React.createElement("div", {id: "app-manage-role-flyout", "aria-hidden": "true"}));
            var manageRolesFlyoutOverlay = this.props.componentStates.isManageRolesSideNavbarVisible ?
                React.createElement("div", {id: "manageRolesFlyoutOverlay", onClick: function (e) { return _this.close(); }, style: Styler_7.Styler.ManageRoleFlyout.FlyoutOverlayStyle})
                : null;
            //this.newAppURLSuffix = this.props.appManageRolesData.currentApp.appInfo.AppUrl;
            if (this.newAppURLSuffix == null)
                this.newAppURLSuffix = "";
            var title = "Manage Roles - " + this.props.appManageRolesData.currentApp.appInfo.Title;
            var titleSection = React.createElement("div", {title: title, "aria-label": title, id: "manageRole_TitleRow", className: "landing-page-overflow-handling", style: Styler_7.Styler.ManageRoleFlyout.SideNavBarHeadingStyle}, 
                React.createElement("div", null, this.props.localizedStrings[Constants.LS_MANAGE_ROLES]), 
                React.createElement("div", {style: { padding: "0rem 0.5rem" }}, " - "), 
                React.createElement("div", null, this.props.appManageRolesData.currentApp.appInfo.Title));
            var descriptionSection = this.props.viewPort != Models_8.ViewPortEnum.Mobile ?
                React.createElement("div", {title: this.props.localizedStrings[Constants.LS_MANAGE_ROLE_DESCRIPTION], "aria-label": this.props.localizedStrings[Constants.LS_MANAGE_ROLE_DESCRIPTION], style: Styler_7.Styler.ManageRoleFlyout.ManageRoleDescriptionSectionContainer}, 
                    React.createElement("label", {id: "manageRole_DescriptionRow", style: Styler_7.Styler.ManageRoleFlyout.ManageRolesDescriptionStyle}, this.props.localizedStrings[Constants.LS_MANAGE_ROLE_DESCRIPTION])
                ) : null;
            var appURLSection = React.createElement("div", {id: "manageRole_AppUrlSuffixSectionRow", style: Styler_7.Styler.ManageRoleFlyout.ManageRoleSectionContainer, onKeyDown: function (e) {
                if (e.ctrlKey && e.keyCode === Models_8.KeyCodeEnum.f6Key) {
                    document.getElementById('roleSection_AppUrlSuffixSection').focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }}, 
                React.createElement("div", {role: "button", "aria-hidden": "false", "aria-expanded": "false", id: "accordian_AppUrlSuffixSection", title: "App URL Suffix", tabIndex: 1, style: { display: 'flex' }, name: Models_8.AccordianState[Models_8.AccordianState.Collapsed], onKeyDown: function (e) { self.keyDownOnAccordian(e, self); }, onClick: function (e) { return _this.toggleSections(e); }}, 
                    React.createElement("div", {id: "appUrlSuffixSection_Accordian_Icon", className: "mscrm-glyph-RightArrowIcon", "data-name": 'collapsed', style: this.computeFontIconStyle()}), 
                    React.createElement("div", {id: "appUrlSuffixSection_Title", className: "landing-page-overflow-handling", style: Styler_7.Styler.ManageRoleFlyout.ManageRoleSectionTitleContainer}, 
                        React.createElement("label", {style: Styler_7.Styler.ManageRoleFlyout.ManageRolesDescriptionStyle}, this.props.localizedStrings[Constants.LS_APP_URL_SUFFIX])
                    )), 
                React.createElement(AppUrlSuffixSection_1.AppUrlSuffixSection, {appUrl: this.newAppURLSuffix, localizedStrings: this.props.localizedStrings, onChangeListener: function (url) { return _this.onChangeListenerForUrlSuffix(url); }, isRTL: this.props.isRTL}));
            var roleMappingSection = React.createElement("div", {id: "manageRole_RoleSectionRow", style: Styler_7.Styler.ManageRoleFlyout.ManageRoleSectionContainer, onKeyDown: function (e) {
                if (e.ctrlKey && e.keyCode === Models_8.KeyCodeEnum.f6Key) {
                    document.getElementById('roles-save').focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }}, 
                React.createElement("div", {role: "button", "aria-expanded": "true", id: "roleSection_AppUrlSuffixSection", title: "Roles", tabIndex: 1, style: { display: 'flex' }, name: Models_8.AccordianState[Models_8.AccordianState.Expanded], onKeyDown: function (e) { self.keyDownOnAccordian(e, self); }, onClick: function (e) { return _this.toggleSections(e); }}, 
                    React.createElement("div", {id: "appUrlSuffixSection_Accordian_Icon", className: "mscrm-glyph-DownArrowIcon", "data-name": 'expanded', style: this.computeFontIconStyle()}), 
                    React.createElement("div", {id: "roleSection_Title", className: "landing-page-overflow-handling", style: Styler_7.Styler.ManageRoleFlyout.ManageRoleSectionTitleContainer}, 
                        React.createElement("label", {style: Styler_7.Styler.ManageRoleFlyout.ManageRolesDescriptionStyle}, this.props.localizedStrings[Constants.LS_ROLES_LABEL])
                    )), 
                React.createElement(RolesSection_1.default, {currentAppManageRolesData: self.props.appManageRolesData}));
            var buttonRow = React.createElement("div", {id: "manageRoleBtnRow", style: Styler_7.Styler.ManageRoleFlyout.ManageRoleButtonsContainer, onKeyDown: function (e) {
                if (e.ctrlKey && e.keyCode === Models_8.KeyCodeEnum.f6Key) {
                    document.getElementById('accordian_AppUrlSuffixSection').focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }}, 
                React.createElement(GenericButton_1.GenericButton, {btnID: "roles-save", btnName: this.props.localizedStrings[Constants.LS_BUTTON_SAVE], toolTip: this.props.localizedStrings[Constants.LS_SAVE_BUTTON_TOOLTIP], key: "roles-save", clickCallback: function () { return _this.save(); }, btnStyle: this.computeFooterBtnStyle(), postFocusElement: null}), 
                React.createElement(GenericButton_1.GenericButton, {btnID: "roles-cancel", btnName: this.props.localizedStrings[Constants.LS_BUTTON_CANCEL], toolTip: this.props.localizedStrings[Constants.LS_CANCEL_BUTTON_TOOLTIP], key: "roles-cancel", clickCallback: function () { return _this.close(); }, btnStyle: this.computeFooterBtnStyle(), postFocusElement: "app-manage-role-close"}));
            return (React.createElement("div", null, 
                manageRolesFlyoutOverlay, 
                React.createElement("div", {"aria-label": title, "aria-describedby": "manageRole_DescriptionRow", role: "dialog", id: "app-manage-role-flyout", tabIndex: 1, className: "manageroles-sidenavbar", onKeyDown: function (e) { return _this.shortCutActions(e); }, style: this.computeManageRoleSidebarStyle(), "aria-hidden": !this.props.componentStates.isManageRolesSideNavbarVisible}, 
                    titleSection, 
                    React.createElement(CrossButton_1.CrossButton, {btnID: "app-manage-role-close", btnTitle: this.props.localizedStrings[Constants.LS_CLOSE], isRTL: this.props.isRTL, btnStyle: Styler_7.Styler.ManageRoleFlyout.SideNavBarHeadingCrossButtonStyle, closeCallback: function () { return _this.close(); }, preFocusElement: "roles-cancel"}), 
                    React.createElement("div", {id: "manage-role-content-box", style: { height: 'calc( 100% - 6rem)', overflowY: 'auto' }}, 
                        React.createElement(ManageRolesErrorDiv_1.default, null), 
                        descriptionSection, 
                        React.createElement("div", {role: "tablist"}, 
                            appURLSection, 
                            roleMappingSection)), 
                    buttonRow)));
        };
        ManageRolesSideNavbar.prototype.computeFontIconStyle = function () {
            var style = Styler_7.Styler.ManageRoleFlyout.AccordianIcon;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        ManageRolesSideNavbar.prototype.computeFooterBtnStyle = function () {
            var style = Styler_7.Styler.ManageRoleFlyout.Button;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { marginRight: style.marginLeft, marginLeft: style.marginRight });
            }
            return style;
        };
        ManageRolesSideNavbar.prototype.computeManageRoleSidebarStyle = function () {
            var style = Styler_7.Styler.ManageRoleFlyout.SideNavBarStyle;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { left: style.right });
                delete style.right;
            }
            if (this.props.componentStates.isManageRolesSideNavbarVisible) {
                style = Object.assign({}, style, { visibility: 'visible' });
                if (this.props.isRTL) {
                    style = Object.assign({}, style, { left: 0 });
                }
                else
                    style = Object.assign({}, style, { right: 0 });
            }
            if (this.props.viewPort <= Models_8.ViewPortEnum.Tablet) {
                style = Object.assign({}, style, { width: '100%', height: '100%' });
            }
            return style;
        };
        ManageRolesSideNavbar.prototype.refreshApps = function () {
            var self = this;
            DataServiceUtility_3.RetrieveAppDescriptors(DataServiceUtility_3.GetOrgName()).then(function (appData) {
                var listOfApps = RefreshUtil_1.refreshAllApps(appData, self.props.userDataObj);
                self.props.refreshPublishedAppsUtil(listOfApps.publishedApps);
                self.props.refreshUnPublishedAppsUtil(listOfApps.unPublishedApps);
                self.props.hideOverlayDialogCallback();
            });
        };
        ManageRolesSideNavbar.prototype.save = function () {
            //---------------Needs fixing-----------
            var self = this;
            var saveFunctionalityPromises = [];
            this.stopwatch.start();
            if (this.validateNewAppUrlSuffix()) {
                var saveAppUrlPromise = null;
                // check if the new URL is unique
                if (!this.checkUrlUnique()) {
                    this.stopwatch.stop();
                    localStorage.setItem("ManageRolesSave_SnapshotTime", this.stopwatch.elapsedMilliseconds.toString());
                    return;
                }
                if (this.checkUrlUnique() && this.urlChanged()) {
                    saveAppUrlPromise = DataServiceUtility_3.SaveAppURL(DataServiceUtility_3.GetOrgName(), this.props.appManageRolesData.currentApp.appInfo.AppId, this.newAppURLSuffix);
                    saveFunctionalityPromises.push(saveAppUrlPromise);
                }
                var calculatedRoles = this.calculateAssociatedAndDisassociatedRoles();
                var associateAppRolesPromise = null;
                if (calculatedRoles.associatedRoles.length > 0) {
                    for (var i = 0; i < calculatedRoles.associatedRoles.length; i++) {
                        associateAppRolesPromise = DataServiceUtility_3.AssociateAppRoles(DataServiceUtility_3.GetOrgName(), this.props.appManageRolesData.currentApp.appInfo.AppId, calculatedRoles.associatedRoles[i]);
                        if (associateAppRolesPromise != null) {
                            saveFunctionalityPromises.push(associateAppRolesPromise);
                        }
                    }
                }
                var disassociateAppRolesPromise = null;
                if (calculatedRoles.disassociatedRoles.length > 0) {
                    for (var i = 0; i < calculatedRoles.disassociatedRoles.length; i++) {
                        disassociateAppRolesPromise = DataServiceUtility_3.DisassociateAppRoles(DataServiceUtility_3.GetOrgName(), this.props.appManageRolesData.currentApp.appInfo.AppId, calculatedRoles.disassociatedRoles[i]);
                        if (disassociateAppRolesPromise != null) {
                            saveFunctionalityPromises.push(disassociateAppRolesPromise);
                        }
                    }
                }
                // dis-associate call once the api started working.
                if (saveFunctionalityPromises.length > 0) {
                    this.props.showOverlayDialogCallback("Please Wait");
                    this.executeAllPromises(saveFunctionalityPromises).then(function (items) {
                        var isError = items.errors.length;
                        var saveError = isError > 0 ? items.errors.indexOf(0) : "";
                        if (isError > 0 && saveAppUrlPromise != null && saveError != "" && (saveError == undefined || saveError == -1)) {
                            DataServiceUtility_3.PublishApp(self.props.appManageRolesData.currentApp.appInfo.AppId).then(function (publishing) {
                                if (publishing) {
                                    self.props.hideOverlayDialogCallback();
                                    self.props.showManageRolesErrorData(self.props.localizedStrings[Constants.LS_APP_ROLE_ASSIGNMENT_ERROR]);
                                }
                                else {
                                    self.refreshApps();
                                }
                                //self.props.toggleManageRolesSideNavbar(ComponentTypes.ManageRolesSideNavbar);
                            }, function (err) {
                                self.props.hideOverlayDialogCallback();
                                self.props.showManageRolesErrorData(self.props.localizedStrings[Constants.LS_APP_ROLE_ASSIGNMENT_ERROR]);
                                return;
                            });
                        }
                        else {
                            self.props.hideOverlayDialogCallback();
                            self.props.toggleManageRolesSideNavbar(Models_8.ComponentTypes.ManageRolesSideNavbar);
                        }
                        if (isError > 0 && !self.isAllErrorUndefined(items.errors)) {
                            self.props.hideOverlayDialogCallback();
                            self.props.showManageRolesErrorData(self.props.localizedStrings[Constants.LS_APP_ROLE_ASSIGNMENT_ERROR]);
                            return;
                        }
                        self.stopwatch.stop();
                        localStorage.setItem("ManageRolesSave_SnapshotTime", self.stopwatch.elapsedMilliseconds.toString());
                    });
                }
                else {
                    this.stopwatch.stop();
                    localStorage.setItem("ManageRolesSave_SnapshotTime", this.stopwatch.elapsedMilliseconds.toString());
                }
            }
            else {
                this.stopwatch.stop();
                localStorage.setItem("ManageRolesSave_SnapshotTime", this.stopwatch.elapsedMilliseconds.toString());
                return;
            }
            if (saveFunctionalityPromises.length == 0) {
                self.props.toggleManageRolesSideNavbar(Models_8.ComponentTypes.ManageRolesSideNavbar);
            }
            this.props.hideManageRolesErrorData();
        };
        ManageRolesSideNavbar.prototype.isAllErrorUndefined = function (promiseErrors) {
            var result = true;
            promiseErrors.map(function (item) {
                if (item != undefined) {
                    result = false;
                }
            });
            return result;
        };
        ManageRolesSideNavbar.prototype.urlChanged = function () {
            var result = false;
            if (this.newAppURLSuffix != this.props.appManageRolesData.currentApp.appInfo.AppUrl) {
                result = true;
            }
            return result;
        };
        ManageRolesSideNavbar.prototype.executeAllPromises = function (promises) {
            // Wrap all Promises in a Promise that will always "resolve"
            var resolvingPromises = promises.map(function (promise) {
                return new Promise(function (resolve) {
                    var payload = new Array(2);
                    promise.then(function (result) {
                        payload[0] = result;
                    })
                        .catch(function (error) {
                        console.log(error);
                        payload[1] = error;
                    })
                        .then(function () {
                        resolve(payload);
                    });
                });
            });
            var errors = [];
            var results = [];
            // Execute all wrapped Promises
            return Promise.all(resolvingPromises)
                .then(function (items) {
                items.forEach(function (payload) {
                    errors.push(payload[1]);
                    results.push(payload[0]);
                });
                return {
                    errors: errors,
                    results: results
                };
            });
        };
        ManageRolesSideNavbar.prototype.checkUrlUnique = function () {
            if (this.validateAppUrlUniqueness()) {
                this.props.hideManageRolesErrorData();
                return true;
            }
            this.props.showManageRolesErrorData(this.props.localizedStrings[Constants.LS_APP_URL_NOT_UNIQUE]);
            return false;
        };
        ManageRolesSideNavbar.prototype.validateAppUrlUniqueness = function () {
            var updatedUrl = this.newAppURLSuffix;
            var foundDuplicate = false;
            for (var i = 0; i < this.props.publishedAppList.length; i++) {
                var app = this.props.publishedAppList[i];
                if (app.appInfo.AppId == this.props.appManageRolesData.currentApp.appInfo.AppId)
                    continue;
                if (updatedUrl == app.appInfo.AppUrl) {
                    foundDuplicate = true;
                    break;
                }
            }
            if (foundDuplicate) {
                return false;
            }
            for (var i = 0; i < this.props.unPublishedAppList.length; i++) {
                var app = this.props.unPublishedAppList[i];
                if (app.appInfo.AppId == this.props.appManageRolesData.currentApp.appInfo.AppId)
                    continue;
                if (updatedUrl == app.appInfo.AppUrl) {
                    foundDuplicate = true;
                    break;
                }
            }
            if (foundDuplicate) {
                return false;
            }
            return true;
        };
        ManageRolesSideNavbar.prototype.validateNewAppUrlSuffix = function () {
            if (this.newAppURLSuffix == "")
                return true;
            var validPattern = /^[0-9a-zA-Z]+$/;
            if (this.newAppURLSuffix.match(validPattern)) {
                return true;
            }
            this.props.showManageRolesErrorData(this.props.localizedStrings[Constants.LS_APP_URL_LENGHT_ERROR]);
            return false;
        };
        ManageRolesSideNavbar.prototype.close = function () {
            this.props.toggleManageRolesSideNavbar(Models_8.ComponentTypes.ManageRolesSideNavbar);
            this.props.hideManageRolesErrorData();
        };
        ManageRolesSideNavbar.prototype.keyDownOnAccordian = function (e, self) {
            if (e.keyCode === Models_8.KeyCodeEnum.SpaceKey || e.keyCode === Models_8.KeyCodeEnum.EnterKey) {
                e.target.click();
            }
            else if (e.keyCode == Models_8.KeyCodeEnum.LeftArrowKey) {
                if (e.target["getAttribute"]('name') == Models_8.AccordianState[Models_8.AccordianState.Expanded]) {
                    e.target["setAttribute"]('name', Models_8.AccordianState[Models_8.AccordianState.Collapsed]);
                    e.target.click();
                }
            }
            else if (e.keyCode == Models_8.KeyCodeEnum.RightArrowkey) {
                if (e.target["getAttribute"]('name') == Models_8.AccordianState[Models_8.AccordianState.Collapsed]) {
                    e.target["setAttribute"]('name', Models_8.AccordianState[Models_8.AccordianState.Expanded]);
                    e.target.click();
                }
            }
            else if (e.ctrlKey && e.keyCode === Models_8.KeyCodeEnum.f6Key) {
                if (e.target.id === "accordian_AppUrlSuffixSection") {
                    document.getElementById('selected-roles-access').focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        ManageRolesSideNavbar.prototype.shortCutActions = function (e) {
            if (e.keyCode == Models_8.KeyCodeEnum.EscapeKey) {
                this.cancelDomEl.click();
            }
            else if (e.altKey && e.keyCode == Models_8.KeyCodeEnum.SKey) {
                this.saveDomEl.click();
            }
        };
        ManageRolesSideNavbar.prototype.toggleSections = function (e) {
            this.toggle_visibility('appUrlSuffixSection');
            this.toggle_visibility('roleSection');
        };
        ManageRolesSideNavbar.prototype.toggle_visibility = function (id) {
            var e = document.getElementById(id);
            if (e.style.display == 'block' || e.style.display == '') {
                e.style.display = 'none';
                e.previousElementSibling.firstChild["className"] = 'mscrm-glyph-RightArrowIcon';
                e.previousElementSibling.setAttribute('aria-expanded', 'false');
                e.previousElementSibling.setAttribute('name', Models_8.AccordianState[Models_8.AccordianState.Collapsed]);
            }
            else {
                e.style.display = 'block';
                e.previousElementSibling.firstChild["className"] = 'mscrm-glyph-DownArrowIcon';
                e.previousElementSibling.setAttribute('aria-expanded', 'true');
                e.previousElementSibling.setAttribute('name', Models_8.AccordianState[Models_8.AccordianState.Expanded]);
            }
        };
        // Check if required
        ManageRolesSideNavbar.prototype.componentDidMount = function () {
            this.saveDomEl = document.getElementById('roles-save');
            this.cancelDomEl = document.getElementById('roles-cancel');
            this.manageRoleDomEl = document.getElementById('app-manage-role-flyout');
        };
        ManageRolesSideNavbar.prototype.componentDidUpdate = function (prevProps) {
            this.saveDomEl = document.getElementById('roles-save');
            this.cancelDomEl = document.getElementById('roles-cancel');
            this.manageRoleDomEl = document.getElementById('app-manage-role-flyout');
            var appUrlSuffixSection = document.getElementById('appUrlSuffixSection');
            if (appUrlSuffixSection) {
                appUrlSuffixSection.style.display = 'none';
                appUrlSuffixSection.previousElementSibling.firstChild["className"] = 'mscrm-glyph-RightArrowIcon';
            }
            var roleSection = document.getElementById('roleSection');
            if (roleSection) {
                roleSection.style.display = 'block';
                roleSection.previousElementSibling.firstChild["className"] = 'mscrm-glyph-DownArrowIcon';
            }
            if (!prevProps.componentStates.isManageRolesSideNavbarVisible && this.props.componentStates.isManageRolesSideNavbarVisible) {
                AppLandingPage_1.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "true");
                AppLandingPage_1.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "true");
                document.getElementById('accordian_AppUrlSuffixSection').focus();
            }
            else if (prevProps.componentStates.isManageRolesSideNavbarVisible && !this.props.componentStates.isManageRolesSideNavbarVisible) {
                AppLandingPage_1.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "false");
                AppLandingPage_1.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "false");
                if (document.getElementById(prevProps.appManageRolesData.parentEllipsisID))
                    document.getElementById(prevProps.appManageRolesData.parentEllipsisID).focus();
            }
        };
        ManageRolesSideNavbar.prototype.onChangeListenerForUrlSuffix = function (appURL) {
            this.newAppURLSuffix = appURL;
        };
        ManageRolesSideNavbar.prototype.calculateAssociatedAndDisassociatedRoles = function () {
            var self = this;
            var associatedAndDisassociatedRoles = {
                associatedRoles: [],
                disassociatedRoles: []
            };
            Object.keys(this.props.appManageRolesData.appSelectedRoles).map(function (roleid) {
                if (self.existingAppManageRolesData.appSelectedRoles[roleid] == false && self.props.appManageRolesData.appSelectedRoles[roleid] == true) {
                    associatedAndDisassociatedRoles.associatedRoles.push(roleid);
                }
                if (self.existingAppManageRolesData.appSelectedRoles[roleid] == true && self.props.appManageRolesData.appSelectedRoles[roleid] == false) {
                    associatedAndDisassociatedRoles.disassociatedRoles.push(roleid);
                }
            });
            return associatedAndDisassociatedRoles;
        };
        return ManageRolesSideNavbar;
    }(React.Component));
    exports.ManageRolesSideNavbar = ManageRolesSideNavbar;
    var mapStateToProps = function (state) { return ({
        componentStates: state.componentStates,
        appManageRolesData: state.currentAppManageRolesData,
        localizedStrings: state.localizedStrings,
        roleState: state.roleState,
        publishedAppList: state.publishedApps.list,
        unPublishedAppList: state.unPublishedApps.list,
        isRTL: state.userData.isRTL,
        viewPort: state.viewPort.viewPortType
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        showOverlayDialogCallback: function (message) {
            dispatch(Actions_3.showOverlayDialog(message));
        },
        toggleManageRolesSideNavbar: function (componentType) {
            dispatch(Actions_3.toggleComponentVisibility(componentType));
        },
        refreshPublishedAppsUtil: function (appList) {
            dispatch(Actions_3.addPublishedApps(appList));
        },
        refreshUnPublishedAppsUtil: function (appList) {
            dispatch(Actions_3.addUnPublishedApps(appList));
        },
        hideOverlayDialogCallback: function () {
            dispatch(Actions_3.hideOverlayDialog());
        },
        setViewPort: function (viewPort) {
            dispatch(Actions_3.setViewPortAction(viewPort));
        },
        showManageRolesErrorData: function (errorString) {
            var errorData = { errorString: errorString };
            dispatch(Actions_3.setManageRolesErrorData(errorData));
        },
        hideManageRolesErrorData: function () {
            var errorData = { errorString: "" };
            dispatch(Actions_3.setManageRolesErrorData(errorData));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_6.connect(mapStateToProps, mapDispatchToProps, null)(ManageRolesSideNavbar);
});
define("src/Components/RoleBasedButton", ["require", "exports", "react", 'react-redux', "src/Models", "src/Utils/Styler", "src/DataServiceUtility", "src/Constants", "src/Constants", "src/Models", "src/Actions", "src/DataServiceUtility", "src/Components/ManageRoles/CurrentAppManageRolesData", "src/Utils/RefreshUtil"], function (require, exports, React, react_redux_7, Models_9, Styler_8, DataServiceUtility_4, Constants_2, Constants, Models_10, Actions_4, DataServiceUtility_5, CurrentAppManageRolesData_2, RefreshUtil_2) {
    "use strict";
    var RoleBasedButton = (function (_super) {
        __extends(RoleBasedButton, _super);
        function RoleBasedButton() {
            _super.call(this);
            this.state = {
                isHovered: false
            };
        }
        RoleBasedButton.prototype.render = function () {
            var _this = this;
            var self = this;
            var id = "apps-roleBasedButton_" + this.props.roleOptions;
            var toolTip = this.getToolTip(this.props.roleOptions);
            var buttonLabel = this.getButtonName(this.props.roleOptions);
            return (React.createElement("div", {role: "button", id: id, "data-name": "role-based-buttons", "aria-label": buttonLabel, title: toolTip, tabIndex: 1, style: this.state.isHovered ? Object.assign({}, Styler_8.Styler.RolebasedButtons.RoleBasedButtonContainer, { backgroundColor: '#eaeaea' }) : Styler_8.Styler.RolebasedButtons.RoleBasedButtonContainer, onClick: function (e) {
                self.RoleBasedAction(self.props.roleOptions);
                e.stopPropagation();
                e.preventDefault();
            }, onKeyDown: function (e) {
                if (e.keyCode == Models_10.KeyCodeEnum.SpaceKey || e.keyCode == Models_10.KeyCodeEnum.EnterKey) {
                    self.RoleBasedAction(self.props.roleOptions);
                    e.stopPropagation();
                    e.preventDefault();
                }
            }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }}, 
                React.createElement("div", {id: "role-type-button", style: Styler_8.Styler.RolebasedButtons.ButtonStyles}, 
                    this.getFontIcon(this.props.roleOptions), 
                    React.createElement("div", {className: "landing-page-overflow-handling", style: Styler_8.Styler.RolebasedButtons.ButtonText}, 
                        React.createElement("span", {"aria-hidden": "true"}, buttonLabel)
                    ))
            ));
        };
        RoleBasedButton.prototype.RoleBasedAction = function (roleType) {
            this.props.closeFlyoutCallback();
            var self = this;
            // Show for all Roles
            if (roleType == Models_9.RoleSelectionTypes.ShowRoles) {
                this.props.showOverlayDialogCallback(self.props.localizedStrings[Constants.LS_PROGRESS_MSG]);
                DataServiceUtility_5.DefaultAppForAllRoles(Models_9.ShowHideRoles.ShowAllRoles)
                    .then(function (response) {
                    self.props.appModuleObj.appInfo.IsDefault = true;
                    self.props.hideOverlayDialogCallback();
                }, function (err) {
                    self.props.hideOverlayDialogCallback();
                    self.props.showLandingPageDialogCallback(self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_TITLE], self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_OPEN_DESIGNER], self.props.parentEllipsisID);
                });
            }
            else if (roleType == Models_9.RoleSelectionTypes.HideRoles) {
                this.props.showOverlayDialogCallback(self.props.localizedStrings[Constants.LS_PROGRESS_MSG]);
                DataServiceUtility_5.DefaultAppForAllRoles(Models_9.ShowHideRoles.HideAllRoles)
                    .then(function (response) {
                    self.props.appModuleObj.appInfo.IsDefault = false;
                    self.props.hideOverlayDialogCallback();
                }, function (err) {
                    self.props.hideOverlayDialogCallback();
                    self.props.showLandingPageDialogCallback(self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_TITLE], self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_OPEN_DESIGNER], self.props.parentEllipsisID);
                });
            }
            else if (roleType == Models_9.RoleSelectionTypes.OpenAppDesinger)
                this.openDesigner();
            else if (roleType == Models_9.RoleSelectionTypes.ManageRoles) {
                if (self.props.allRoles.roles.length == 0) {
                    self.props.showLandingPageDialogCallback(self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_TITLE], self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_OPEN_DESIGNER], self.props.parentEllipsisID);
                }
                else {
                    self.props.showOverlayDialogCallback(self.props.localizedStrings[Constants.LS_PROGRESS_MSG]);
                    DataServiceUtility_4.RetrieveAppRoles(DataServiceUtility_4.GetOrgName(), this.props.appModuleObj.appInfo.AppId).then(function (appRolesMappings) {
                        var newCurrentAppManageRolesData = new CurrentAppManageRolesData_2.CurrentAppManageRolesData();
                        newCurrentAppManageRolesData.currentApp = self.props.appModuleObj;
                        newCurrentAppManageRolesData.appSelectedRoles = {};
                        newCurrentAppManageRolesData.parentEllipsisID = self.props.parentEllipsisID;
                        self.props.allRoles.roles.map(function (role) {
                            newCurrentAppManageRolesData.appSelectedRoles[role.roleId] = false;
                        });
                        appRolesMappings.appmoduleroles_association.map(function (approle) {
                            newCurrentAppManageRolesData.appSelectedRoles[approle.roleid] = true;
                        });
                        self.props.setRoleState(true);
                        self.props.setCurrentAppManageRolesData(newCurrentAppManageRolesData);
                        self.props.hideOverlayDialogCallback();
                        self.props.toggleManageRolesSideNavbar(Models_10.ComponentTypes.ManageRolesSideNavbar);
                    }).catch(function (err) {
                        console.log(err);
                        self.props.hideOverlayDialogCallback();
                        self.props.showLandingPageDialogCallback(self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_TITLE], self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_OPEN_DESIGNER], self.props.parentEllipsisID);
                    });
                }
            }
            else if (roleType == Models_9.RoleSelectionTypes.Publish) {
                var AppId = this.props.appModuleObj.appInfo.AppId;
                this.props.showOverlayDialogCallback(self.props.localizedStrings[Constants.LS_PUBLISHING_APP_MSG]);
                DataServiceUtility_5.PublishApp(AppId).then(function (publishing) {
                    if (publishing) {
                        self.props.hideOverlayDialogCallback();
                    }
                    else {
                        self.refreshApps();
                    }
                }).catch(function (err) {
                    console.log(err);
                    self.props.hideOverlayDialogCallback();
                    self.props.showLandingPageDialogCallback(self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_TITLE], self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_OPEN_DESIGNER], self.props.parentEllipsisID);
                });
            }
        };
        RoleBasedButton.prototype.refreshApps = function () {
            var self = this;
            DataServiceUtility_5.RetrieveAppDescriptors(DataServiceUtility_4.GetOrgName()).then(function (appData) {
                var listOfApps = RefreshUtil_2.refreshAllApps(appData, self.props.userDataObj);
                self.props.refreshPublishedAppsUtil(listOfApps.publishedApps);
                self.props.refreshUnPublishedAppsUtil(listOfApps.unPublishedApps);
                self.props.hideOverlayDialogCallback();
            }, function (err) {
                self.props.hideOverlayDialogCallback();
                self.props.showLandingPageDialogCallback(self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_TITLE], self.props.localizedStrings[Constants.LS_CANNOT_PUBLISH_OPEN_DESIGNER], self.props.parentEllipsisID);
            });
        };
        RoleBasedButton.prototype.getButtonName = function (roleType) {
            var name;
            switch (roleType) {
                case Models_9.RoleSelectionTypes.ShowRoles:
                    name = this.props.localizedStrings[Constants_2.LS_SHOW_APP];
                    break;
                case Models_9.RoleSelectionTypes.HideRoles:
                    name = this.props.localizedStrings[Constants_2.LS_HIDE_APP];
                    break;
                case Models_9.RoleSelectionTypes.ManageRoles:
                    name = this.props.localizedStrings[Constants_2.LS_MANAGE_ROLES];
                    break;
                case Models_9.RoleSelectionTypes.OpenAppDesinger:
                    name = this.props.localizedStrings[Constants_2.LS_OPEN_IN_DESIGNER];
                    break;
                case Models_9.RoleSelectionTypes.Publish:
                    name = this.props.localizedStrings[Constants_2.LS_PUBLISH_APP];
                    break;
                default:
                    name = "Show All Roles";
            }
            return name;
        };
        RoleBasedButton.prototype.getToolTip = function (roleType) {
            var tooltip;
            switch (roleType) {
                case Models_9.RoleSelectionTypes.ShowRoles:
                    tooltip = this.props.localizedStrings[Constants_2.LS_SHOW_APP];
                    break;
                case Models_9.RoleSelectionTypes.HideRoles:
                    tooltip = this.props.localizedStrings[Constants_2.LS_HIDE_APP];
                    break;
                case Models_9.RoleSelectionTypes.ManageRoles:
                    tooltip = this.props.localizedStrings[Constants_2.LS_CHOOSE_APP_ROLE_MAPPING_TOOLTIP];
                    break;
                case Models_9.RoleSelectionTypes.OpenAppDesinger:
                    tooltip = this.props.localizedStrings[Constants_2.LS_OPEN_IN_DESIGNER_BUTTON_TOOLTIP];
                    break;
                case Models_9.RoleSelectionTypes.Publish:
                    tooltip = this.props.localizedStrings[Constants_2.LS_PUBLISH_APP_TOOLTIP];
                    break;
                default:
                    tooltip = "Show All Roles";
            }
            return tooltip;
        };
        RoleBasedButton.prototype.getFontIcon = function (roleType) {
            var fontIcon;
            switch (roleType) {
                case Models_9.RoleSelectionTypes.ShowRoles:
                    fontIcon = React.createElement("div", {className: "mscrm-glyph-ShowAllRole", style: Styler_8.Styler.RolebasedButtons.FontIcon});
                    break;
                case Models_9.RoleSelectionTypes.HideRoles:
                    fontIcon = React.createElement("div", {className: "mscrm-glyph-HideAllRole", style: Styler_8.Styler.RolebasedButtons.FontIcon});
                    break;
                case Models_9.RoleSelectionTypes.ManageRoles:
                    fontIcon = React.createElement("div", {className: "mscrm-glyph-ManageRole", style: Styler_8.Styler.RolebasedButtons.FontIcon});
                    break;
                case Models_9.RoleSelectionTypes.OpenAppDesinger:
                    fontIcon = React.createElement("div", {className: "mscrm-glyph-OpenInDesigner", style: Styler_8.Styler.RolebasedButtons.FontIcon});
                    break;
                case Models_9.RoleSelectionTypes.Publish:
                    fontIcon = React.createElement("div", {className: "mscrm-glyph-PublishApp", style: Styler_8.Styler.RolebasedButtons.FontIcon});
                    break;
                default:
                    fontIcon = React.createElement("div", {className: "mscrm-glyph-OpenInDesigner", style: Styler_8.Styler.RolebasedButtons.FontIcon});
            }
            return fontIcon;
        };
        RoleBasedButton.prototype.openDesigner = function () {
            var domainName = DataServiceUtility_4.GetDomainName();
            var orgName = DataServiceUtility_4.GetOrgName();
            var solutionID = "fd140aaf-4df4-11dd-bd17-0019b9312238";
            var appId = this.props.appModuleObj.appInfo.AppId;
            var url = orgName + "/Designer/App/" + solutionID + "/" + appId;
            window.open(url);
        };
        RoleBasedButton.prototype.closeFlyOut = function (event, self) {
            event.preventDefault();
            event.stopPropagation();
            self.setState({
                isHovered: false,
                showRoleBasedAction: false
            });
        };
        return RoleBasedButton;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        userDataObj: state.userData,
        allRoles: state.allRoles,
        localizedStrings: state.localizedStrings
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        toggleManageRolesSideNavbar: function (componentType) {
            dispatch(Actions_4.toggleComponentVisibility(componentType));
        },
        refreshPublishedAppsUtil: function (appList) {
            dispatch(Actions_4.addPublishedApps(appList));
        },
        refreshUnPublishedAppsUtil: function (appList) {
            dispatch(Actions_4.addUnPublishedApps(appList));
        },
        setCurrentAppManageRolesData: function (currentAppManageRolesData) {
            dispatch(Actions_4.setCurrentAppManageRolesData(currentAppManageRolesData));
        },
        setRoleState: function (isCopy) {
            dispatch(Actions_4.roleStates(isCopy));
        },
        showOverlayDialogCallback: function (message) {
            dispatch(Actions_4.showOverlayDialog(message));
        },
        hideOverlayDialogCallback: function () {
            dispatch(Actions_4.hideOverlayDialog());
        },
        showLandingPageDialogCallback: function (title, message, postFocusElement) {
            dispatch(Actions_4.showLandingPageDialog(title, message, postFocusElement));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_7.connect(mapStateToProps, mapDispatchToProps, null)(RoleBasedButton);
});
define("src/Components/EllipsisFlyout", ["require", "exports", "react", 'react-redux', "src/Utils/Styler", "src/Models", "src/Actions", "src/Components/RoleBasedButton", "src/Components/CrossButton", "src/Constants", "src/Components/AppLandingPage"], function (require, exports, React, react_redux_8, Styler_9, Models_11, Actions_5, RoleBasedButton_1, CrossButton_2, Constants, AppLandingPage_2) {
    "use strict";
    var EllipsisFlyout = (function (_super) {
        __extends(EllipsisFlyout, _super);
        function EllipsisFlyout(props) {
            _super.call(this, props);
            this.height = Number((Styler_9.Styler.EllipsisFlyout.EllipsisFlyoutContainer.minHeight).slice(0, -2));
            this.arrowLeft = '-18px';
            this.arrowTop = '0px';
            this.arrowBgColor = 'transparent white transparent transparent';
            this.state = {
                isPositioned: false
            };
        }
        EllipsisFlyout.prototype.render = function () {
            var _this = this;
            if (!this.props.isEllipsisFlyoutVisible)
                return null;
            var self = this;
            var title = "" + self.props.appModuleData.appInfo.Title;
            return (React.createElement("div", {id: "ellipsisFlyoutparent"}, 
                React.createElement("div", {id: "ellipsisFlyoutOverlay", onWheel: function (e) { return _this.closeFlyout(e, _this); }, onClick: function (e) { return _this.closeFlyout(e, _this); }, style: Styler_9.Styler.EllipsisFlyout.EllipsisBtnOverlay}), 
                React.createElement("div", {id: "ellipsisFlyout", role: "dialog", "aria-labelledby": "ellipsisFlyoutTitle", "aria-describedby": "ellipsisFlyoutDesc", onKeyUp: function (e) { if (e.keyCode === Models_11.KeyCodeEnum.EscapeKey) {
                    self.closeFlyout(e, self);
                } }, onClick: function (e) { return _this.stopProp(e); }, style: self.computerEllipsisFlyoutContainerStyle()}, 
                    React.createElement("div", {id: "ellipsisFlyoutTitleRow", style: Styler_9.Styler.EllipsisFlyout.EllipsisFlyoverTitleContainer}, 
                        React.createElement("div", {style: Styler_9.Styler.EllipsisFlyout.TitlelabelDiv}, 
                            React.createElement("label", {id: "ellipsisFlyoutTitle", title: self.props.appModuleData.appInfo.Title, style: Styler_9.Styler.EllipsisFlyout.TitleLabel}, self.props.appModuleData.appInfo.Title)
                        ), 
                        React.createElement(CrossButton_2.CrossButton, {btnID: 'app-ellipsis-crossIcon', btnTitle: this.props.localizedStrings[Constants.LS_CLOSE], closeCallback: function (e) { return self.closeFlyout(e, self); }, btnStyle: Styler_9.Styler.EllipsisFlyout.CrossImage, isRTL: this.props.isRTL, preFocusElement: "apps-roleBasedButton_" + this.props.roleBasedOptions[this.props.roleBasedOptions.length - 1]})), 
                    React.createElement("div", {style: Styler_9.Styler.EllipsisFlyout.DescriptionDiv}, 
                        React.createElement("label", {id: "ellipsisFlyoutDesc", title: self.props.appModuleData.appInfo.Description, style: Styler_9.Styler.EllipsisFlyout.DescriptionLabel}, self.props.appModuleData.appInfo.Description)
                    ), 
                    React.createElement("div", {id: "ellipsisFlyoutBreaker", style: Styler_9.Styler.EllipsisFlyout.LineBreaker}), 
                    React.createElement("div", {id: "ellipsisFlyoutButtons", style: { padding: '0 0.25rem 1rem 0.25rem', width: '100%' }}, this.props.roleBasedOptions.map(function (button) {
                        return React.createElement("div", {key: button.toString(), onClick: function (e) { return self.closeFlyout(e, self); }}, 
                            React.createElement(RoleBasedButton_1.default, {roleOptions: button, appModuleObj: self.props.appModuleData, closeFlyoutCallback: function (e) { return self.closeFlyout(e, self); }, parentEllipsisID: self.props.parentEllipsisID})
                        );
                    })), 
                    React.createElement("div", {id: "ellipsisFlyoutArrow", style: self.computerEllipsisArrowStyle()}))));
        };
        EllipsisFlyout.prototype.closeFlyout = function (event, self) {
            if (this.props.isEllipsisFlyoutVisible) {
                document.getElementById(self.props.parentEllipsisID).focus();
                if (event !== undefined && event !== null) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                self.props.hideEllipsisFlyout();
            }
        };
        EllipsisFlyout.prototype.positionFlyout = function () {
            if (!this.state.isPositioned) {
                var diff = 0;
                var containerWidth = Number((Styler_9.Styler.EllipsisFlyout.EllipsisFlyoutContainer.width).slice(0, -2));
                var containerHeight = this.height;
                this.top = this.props.ellipsisButtonOffset.top + (this.props.ellipsisButtonOffset.height / 2) - (containerHeight / 2);
                if (this.props.isRTL && (this.props.ellipsisButtonOffset.left - containerWidth < 0)) {
                    this.renderOnRight(containerWidth);
                }
                else if (window.innerWidth > this.props.ellipsisButtonOffset.left + this.props.ellipsisButtonOffset.width + containerWidth && !this.props.isRTL) {
                    this.renderOnRight(containerWidth);
                }
                else {
                    this.renderOnLeft(containerWidth);
                }
                // Vertical adjustment
                if (window.innerHeight < this.top + containerHeight) {
                    diff = (this.top + containerHeight + 5) - window.innerHeight; //5 px to give space so that it does not stick to the end
                    this.top = this.top - (diff);
                }
                this.arrowTop = ((containerHeight / 2) + diff - 9) + 'px'; // 9px is half height of the arrow			
                this.setState({
                    isPositioned: true
                });
            }
        };
        EllipsisFlyout.prototype.computerEllipsisFlyoutContainerStyle = function () {
            var defaultViewStyle = {
                position: 'fixed',
                minHeight: (Styler_9.Styler.EllipsisFlyout.EllipsisFlyoutContainer.minHeight),
                height: (this.props.viewPort <= Models_11.ViewPortEnum.Tablet ? '100%' : Styler_9.Styler.EllipsisFlyout.EllipsisFlyoutContainer.height),
                width: (this.props.viewPort <= Models_11.ViewPortEnum.Tablet ? '100%' : Styler_9.Styler.EllipsisFlyout.EllipsisFlyoutContainer.width),
                top: (this.props.viewPort <= Models_11.ViewPortEnum.Tablet ? '0px' : this.top),
                left: (this.props.viewPort <= Models_11.ViewPortEnum.Tablet ? '0px' : this.left),
                zIndex: Styler_9.Styler.EllipsisFlyout.EllipsisFlyoutContainer.zIndex,
                backgroundColor: 'rgb(255, 255, 255)', boxShadow: '3px 2px 6px 0px rgba(0, 0, 0, 0.25)', border: '1px solid #666666'
            };
            return defaultViewStyle;
        };
        EllipsisFlyout.prototype.computerEllipsisArrowStyle = function () {
            var arrowStyleObject = {
                position: 'absolute',
                width: '0px',
                height: '0px',
                left: this.arrowLeft,
                right: 'auto',
                top: this.arrowTop,
                bottom: 'auto',
                borderWidth: '9px',
                borderStyle: 'solid',
                borderColor: this.arrowBgColor
            };
            return arrowStyleObject;
        };
        EllipsisFlyout.prototype.stopProp = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        EllipsisFlyout.prototype.preventConditionalScroll = function (e, _this) {
            var delta = e.wheelDelta || -e.detail;
            _this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        };
        EllipsisFlyout.prototype.renderOnLeft = function (containerWidth) {
            this.left = this.props.ellipsisButtonOffset.left - containerWidth;
            this.arrowLeft = containerWidth - 2 + 'px'; //2px for border
            this.arrowBgColor = 'transparent transparent transparent white';
        };
        EllipsisFlyout.prototype.renderOnRight = function (containerWidth) {
            this.left = this.props.ellipsisButtonOffset.left + (this.props.ellipsisButtonOffset.width);
            this.arrowLeft = '-18px';
            this.arrowBgColor = 'transparent white transparent transparent';
        };
        EllipsisFlyout.prototype.checkRoleButtonsForAccessibility = function () {
            this.firstButton = document.getElementById("apps-roleBasedButton_" + this.props.roleBasedOptions[0]);
            this.crossButton = document.getElementById("app-ellipsis-crossIcon");
            this.lastButton = document.getElementById("apps-roleBasedButton_" + this.props.roleBasedOptions[this.props.roleBasedOptions.length - 1]);
            this.allRoleBasedButtons = document.querySelectorAll('[data-name="role-based-buttons"]');
        };
        EllipsisFlyout.prototype.setDefaultFocus = function () {
            if (this.firstButton !== undefined && this.firstButton !== null) {
                this.firstButton.focus();
            }
            else {
                this.ellipsisFlyoutDomEl.focus();
            }
        };
        EllipsisFlyout.prototype.onArrowKeyOnBtn = function (e, _this, self) {
            if (e.keyCode == Models_11.KeyCodeEnum.UpArrowKey || (e.shiftKey && e.keyCode == Models_11.KeyCodeEnum.TabKey)) {
                if (_this.parentElement.previousSibling) {
                    _this.parentElement.previousSibling.firstChild.focus();
                }
                else {
                    if (e.keyCode == Models_11.KeyCodeEnum.TabKey)
                        self.crossButton.focus();
                    else
                        self.lastButton.focus();
                }
                self.stopProp(e);
            }
            else if (e.keyCode == Models_11.KeyCodeEnum.DownArrowKey || (e.keyCode == Models_11.KeyCodeEnum.TabKey)) {
                if (_this.parentElement.nextSibling) {
                    _this.parentElement.nextSibling.firstChild.focus();
                }
                else {
                    if (e.keyCode == Models_11.KeyCodeEnum.TabKey)
                        self.crossButton.focus();
                    else
                        self.firstButton.focus();
                }
                self.stopProp(e);
            }
            else if (e.keyCode == Models_11.KeyCodeEnum.LeftArrowKey || e.keyCode == Models_11.KeyCodeEnum.RightArrowkey) {
                self.stopProp(e);
            }
        };
        EllipsisFlyout.prototype.attachKeyboardEvents = function () {
            var self = this;
            if (self.allRoleBasedButtons !== undefined && self.allRoleBasedButtons !== null) {
                if (self.allRoleBasedButtons.length > 0) {
                    for (var i = 0; i < self.allRoleBasedButtons.length; i++) {
                        self.allRoleBasedButtons[i].addEventListener("keydown", function (e) {
                            self.onArrowKeyOnBtn(e, this, self);
                        });
                    }
                }
            }
        };
        EllipsisFlyout.prototype.deattachKeyboardEvents = function () {
            var self = this;
            if (self.allRoleBasedButtons !== undefined && self.allRoleBasedButtons !== null) {
                if (self.allRoleBasedButtons.length > 0) {
                    for (var i = 0; i < self.allRoleBasedButtons.length; i++) {
                        self.allRoleBasedButtons[i].removeEventListener("keydown", function (e) {
                            self.onArrowKeyOnBtn(e, this, self);
                        });
                    }
                }
            }
        };
        EllipsisFlyout.prototype.componentDidUpdate = function () {
            var self = this;
            if (this.props.isEllipsisFlyoutVisible) {
                this.ellipsisFlyoutDomEl = document.getElementById('ellipsisFlyout');
                this.height = this.ellipsisFlyoutDomEl.clientHeight;
                this.positionFlyout();
                this.checkRoleButtonsForAccessibility();
                this.setDefaultFocus();
                this.attachKeyboardEvents();
                window.addEventListener("resize", function (e) { self.closeFlyout(e, self); });
                document.getElementById('ellipsisFlyoutDesc').addEventListener('mousewheel', function (e) { self.preventConditionalScroll(e, this); });
                AppLandingPage_2.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "true");
                AppLandingPage_2.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "true");
            }
            else {
                window.removeEventListener("resize", function (e) { self.closeFlyout(e, self); });
                this.deattachKeyboardEvents();
                AppLandingPage_2.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "false");
                AppLandingPage_2.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "false");
            }
        };
        EllipsisFlyout.prototype.componentWillUpdate = function (nextProps, nextState) {
            if (this.props.isEllipsisFlyoutVisible && !nextProps.isEllipsisFlyoutVisible) {
                this.setState({
                    isPositioned: false
                });
            }
        };
        EllipsisFlyout.prototype.componentWillUnmount = function () {
            var self = this;
            window.removeEventListener("resize", function (e) { self.closeFlyout(e, self); });
            this.deattachKeyboardEvents();
        };
        return EllipsisFlyout;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        isEllipsisFlyoutVisible: state.ellipsisFlyoutState.showEllipsisFlyout,
        viewPort: state.viewPort.viewPortType,
        ellipsisButtonOffset: state.ellipsisFlyoutState.ellipsisButtonOffset,
        appModuleData: state.ellipsisFlyoutState.appModuleData,
        roleBasedOptions: state.ellipsisFlyoutState.roleBasedOptions,
        parentEllipsisID: state.ellipsisFlyoutState.ellipsisID,
        isRTL: state.userData.isRTL,
        localizedStrings: state.localizedStrings,
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        hideEllipsisFlyout: function () {
            dispatch(Actions_5.hideEllipsisFlyout());
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_8.connect(mapStateToProps, mapDispatchToProps, null)(EllipsisFlyout);
});
define("src/Components/ElipsisButton", ["require", "exports", "react", "src/Models", "src/Utils/Styler", "src/Models", "src/DataServiceUtility"], function (require, exports, React, Models_12, Styler_10, Models_13, DataServiceUtility_6) {
    "use strict";
    var ElipsisButton = (function (_super) {
        __extends(ElipsisButton, _super);
        function ElipsisButton() {
            _super.call(this);
            this.state = {
                isHovered: false
            };
        }
        ElipsisButton.prototype.render = function () {
            var _this = this;
            var self = this;
            var id = this.getElipsisId();
            return (React.createElement("div", {id: "ellipsisDivContainer"}, 
                React.createElement("div", {title: self.props.titleString, role: "button", tabIndex: 1, id: id, className: "mscrm-glyph-EllipsisIcon", style: self.computeStyleForEllipsisFontIcon(), onKeyDown: function (e) { self.onKeyDown(e, self); }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }, onClick: function (event) {
                    self.showElipsisPopOver(event, self);
                    self.props.removeHoverCallback();
                }})
            ));
        };
        ElipsisButton.prototype.getElipsisId = function () {
            return "app-tile-ellipsis-btn-Sec_" + this.props.sectionIndex + "_Item_" + this.props.index;
        };
        ElipsisButton.prototype.findRoleBasedOptions = function () {
            var roleOptions = new Array();
            //Default App Case
            if (this.isDefaultApp()) {
                if (this.props.appModuleData.appInfo.IsDefault) {
                    roleOptions.push(Models_12.RoleSelectionTypes.HideRoles);
                }
                else {
                    roleOptions.push(Models_12.RoleSelectionTypes.ShowRoles);
                }
                return roleOptions;
            }
            //Open In Designer FCB Check
            if (this.props.userData.isDesignerFCBenabled && (DataServiceUtility_6.GetFormFactor() == Models_13.ClientType.Desktop || DataServiceUtility_6.GetFormFactor() == Models_13.ClientType.Tablet))
                roleOptions.push(Models_12.RoleSelectionTypes.OpenAppDesinger);
            if (this.props.userData.landingPagePrivileges.canPublishCustomizations) {
                // Published Apps
                if (this.props.appModuleData.appInfo.Status == Models_12.PublishedState.Published)
                    roleOptions.push(Models_12.RoleSelectionTypes.ManageRoles);
                else if (this.props.appModuleData.appInfo.Status == Models_12.PublishedState.Unpublished)
                    roleOptions.push(Models_12.RoleSelectionTypes.Publish);
            }
            return roleOptions;
        };
        ElipsisButton.prototype.isDefaultApp = function () {
            return (this.props.appModuleData.appInfo.AppId == this.props.userData.userContext.OrganizationSettings.OrganizationId);
        };
        ElipsisButton.prototype.showElipsisPopOver = function (event, self) {
            event.preventDefault();
            event.stopPropagation();
            self.offset = event.target.getBoundingClientRect();
            this.props.showEllipsisFlyout(this.offset, this.props.appModuleData, this.findRoleBasedOptions(), this.getElipsisId());
        };
        ElipsisButton.prototype.computeStyleForEllipsisFontIcon = function () {
            var style = Styler_10.Styler.ElipsisStyle;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { left: style.right });
                delete style.right;
            }
            if (this.state.isHovered)
                style = Object.assign({}, style, { backgroundColor: '#c9c9c9', color: '#505050' });
            return style;
        };
        ElipsisButton.prototype.onKeyDown = function (event, self) {
            if (event.keyCode == Models_13.KeyCodeEnum.EnterKey || event.keyCode == Models_13.KeyCodeEnum.SpaceKey || event.keyCode == Models_13.KeyCodeEnum.DownArrowKey) {
                this.showElipsisPopOver(event, this);
            }
        };
        return ElipsisButton;
    }(React.Component));
    exports.ElipsisButton = ElipsisButton;
});
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="./AppModuleData.tsx" />
define("src/Components/AppDetailsSection", ["require", "exports", "react", "src/Constants", "src/Components/ElipsisButton", "src/Utils/Styler", "src/Models", "src/Constants", 'react-redux', "src/Actions", "src/DataServiceUtility"], function (require, exports, React, Constants, ElipsisButton_1, Styler_11, Models_14, Constants_3, react_redux_9, Actions_6, DataServiceUtility_7) {
    "use strict";
    var AppDetailsSection = (function (_super) {
        __extends(AppDetailsSection, _super);
        function AppDetailsSection() {
            _super.apply(this, arguments);
        }
        AppDetailsSection.prototype.render = function () {
            var _this = this;
            var id = "AppDetailsSec_" + this.props.sectionIndex + "_Item_" + this.props.index;
            var elipsisSection = null;
            var footerSection = null;
            var clientTag = null;
            if (this.props.userData.landingPagePrivileges.isAppModuleAdmin && (DataServiceUtility_7.GetClientStatus() == Models_14.ClientStatus[Models_14.ClientStatus.Online])) {
                if (!this.isDefaultApp() || (this.isDefaultApp() && this.props.userData.landingPagePrivileges.isSystemAdmin)) {
                    elipsisSection =
                        React.createElement(ElipsisButton_1.ElipsisButton, {isRTL: this.props.isRTL, userData: this.props.userData, appModuleData: this.props.appModuleData, index: this.props.index, titleString: this.props.localizedStrings[Constants.LS_MORE_OPTIONS], sectionAppCount: this.props.sectionAppCount, sectionIndex: this.props.sectionIndex, removeHoverCallback: function () { return _this.props.removeHoverCallback(); }, showEllipsisFlyout: this.props.showEllipsisFlyout});
                }
                clientTag = (React.createElement("div", {title: this.mapAppInfoClientTypeToStr(this.props.appModuleData.appInfo.ClientType), style: this.computerClientTagStyle(this)}, this.mapAppInfoClientTypeToStr(this.props.appModuleData.appInfo.ClientType)));
                footerSection = (React.createElement("div", {style: { width: 'calc(100% - 1.7rem)', position: 'absolute', bottom: '0' }}, 
                    React.createElement("div", {title: this.props.appModuleData.publisherInfo.friendlyName, style: this.computeDefaultPublisherStyle(this)}, this.props.appModuleData.publisherInfo.friendlyName), 
                    React.createElement("div", {title: this.props.appModuleData.appInfo.PublishedOn, style: this.computeDateStyle(this)}, this.props.appModuleData.appInfo.PublishedOn), 
                    clientTag));
            }
            return (React.createElement("div", {id: id, style: this.computeDivExpandCollapseStyle(this)}, 
                elipsisSection, 
                React.createElement("div", {title: this.props.appModuleData.appInfo.Title, style: this.computeAppNameStyle(this)}, this.props.appModuleData.appInfo.Title), 
                React.createElement("div", {title: this.props.appModuleData.appInfo.Description, style: this.computeAppDescStyle(this)}, this.props.appModuleData.appInfo.Description), 
                footerSection));
        };
        AppDetailsSection.prototype.mapAppInfoClientTypeToStr = function (clientType) {
            if (clientType == 4) {
                return this.props.localizedStrings[Constants_3.LS_CLIENT_UCI];
            }
            return this.props.localizedStrings[Constants_3.LS_CLIENT_WEB];
        };
        AppDetailsSection.prototype.isDefaultApp = function () {
            return (this.props.appModuleData.appInfo.AppId == this.props.userData.userContext.OrganizationSettings.OrganizationId);
        };
        AppDetailsSection.prototype.computeAppNameStyle = function (self) {
            return self.props.collapsedState ? Object.assign({}, Styler_11.Styler.AppDetailsStyle.AppNameStyle, { paddingTop: '1.0rem', fontSize: '1.0rem', lineHeight: '1.2' }) : Styler_11.Styler.AppDetailsStyle.AppNameStyle;
        };
        AppDetailsSection.prototype.computeAppDescStyle = function (self) {
            return self.props.collapsedState ? Styler_11.Styler.AppDetailsStyle.AppDescStyle : Styler_11.Styler.AppDetailsStyle.AppDescExpandedStyle;
        };
        AppDetailsSection.prototype.computeDefaultPublisherStyle = function (self) {
            return self.props.collapsedState ? Object.assign({}, Styler_11.Styler.AppDetailsStyle.PublisherStyle, { display: "none" }) : Styler_11.Styler.AppDetailsStyle.PublisherStyle;
        };
        AppDetailsSection.prototype.computeDateStyle = function (self) {
            return self.props.collapsedState ? Object.assign({}, Styler_11.Styler.AppDetailsStyle.DateStyle, { display: "none" }) : Styler_11.Styler.AppDetailsStyle.DateStyle;
        };
        AppDetailsSection.prototype.computeDivExpandCollapseStyle = function (self) {
            return self.props.collapsedState ? Styler_11.Styler.AppDetailsStyle.DetailsDivCollapsedStyle : Styler_11.Styler.AppDetailsStyle.DetailsDivExpandedStyle;
        };
        AppDetailsSection.prototype.computerClientTagStyle = function (self) {
            return self.props.collapsedState ? Styler_11.Styler.AppDetailsStyle.ClientTypeStyle : Object.assign({}, Styler_11.Styler.AppDetailsStyle.ClientTypeStyle, { marginTop: '0.30rem', lineHeight: '0.93rem', });
        };
        return AppDetailsSection;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        userData: state.userData,
        localizedStrings: state.localizedStrings
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        showEllipsisFlyout: function (offset, appData, roleBasedOptions, ellipsisID) {
            dispatch(Actions_6.showEllipsisFlyout(offset, appData, roleBasedOptions, ellipsisID));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_9.connect(mapStateToProps, mapDispatchToProps, null)(AppDetailsSection);
});
define("src/Components/AppModuleTile", ["require", "exports", "react", "src/Components/AppImage", "src/Components/AppDetailsSection", "src/DataServiceUtility", "src/DataServiceUtility", "src/DataServiceUtility", "src/Utils/Styler", "src/Models", "src/Components/CreateNewAppTile"], function (require, exports, React, AppImage_1, AppDetailsSection_1, DataServiceUtility_8, DataServiceUtility_9, DataServiceUtility_10, Styler_12, Models_15, CreateNewAppTile_1) {
    "use strict";
    var AppModuleTile = (function (_super) {
        __extends(AppModuleTile, _super);
        function AppModuleTile() {
            _super.call(this);
            this.state = {
                isHovered: false
            };
        }
        AppModuleTile.prototype.render = function () {
            var _this = this;
            var appTile = null;
            if (this.props.appModuleData.isCreateNewAppTile) {
                appTile =
                    React.createElement(CreateNewAppTile_1.CreateNewAppTile, {index: this.props.index, collapsedState: this.props.collapsedState, sectionAppCount: this.props.sectionAppCount, sectionIndex: this.props.sectionIndex, shiftFocusOnArrows: function (e) { return _this.shiftFocusOnArrowKey(e); }, isNoAppSection: false, isRTL: this.props.isRTL, localizedStrings: this.props.localizedStrings, viewPort: this.props.viewPort});
            }
            else {
                //let appUrl: string = window.location.href.split("&")[0] + "&appid=" + this.props.appModuleData.appInfo.AppId;
                var self_1 = this;
                var appUrl = "";
                var domainName = DataServiceUtility_10.GetDomainName();
                var orgName = DataServiceUtility_9.GetOrgName();
                var browserClientType = DataServiceUtility_8.GetClientType();
                var appClickTarget = "_parent";
                var descriptionText = (this.props.appModuleData.appInfo.Description && this.props.appModuleData.appInfo.Description.length > 0) ? this.props.appModuleData.appInfo.Description : "";
                var toolTip = this.props.appModuleData.appInfo.Title + "\r\n" + descriptionText;
                // App module case 
                if (this.props.appModuleData.appInfo.AppId !== null) {
                    if (this.props.appModuleData.appInfo.ClientType == -1) {
                        appUrl = orgName + "/main.aspx";
                    }
                    else {
                        appUrl = orgName + "/main.aspx?appid=" + this.props.appModuleData.appInfo.AppId;
                    }
                    if (this.props.appModuleData.appInfo.Status == 1) {
                        var domainName_1 = DataServiceUtility_10.GetDomainName();
                        var orgName_1 = DataServiceUtility_9.GetOrgName();
                        // ---------------------to do -------------//
                        var solutionID = "fd140aaf-4df4-11dd-bd17-0019b9312238";
                        var appId = this.props.appModuleData.appInfo.AppId;
                        appUrl = orgName_1 + "/Designer/App/" + solutionID + "/" + appId;
                        appClickTarget = "_blank";
                    }
                }
                appTile =
                    React.createElement("a", {id: this.getTileId(this.props.sectionIndex, this.props.index), tabIndex: 1, href: appUrl, target: appClickTarget, style: this.computeStyle(), title: toolTip, key: this.props.appModuleData.appInfo.AppId, onKeyDown: function (e) { self_1.shiftFocusOnArrowKey(e); }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }, onMouseOver: function () { return _this.setTileHoverState(); }}, 
                        React.createElement(AppImage_1.AppImage, {src: "/WebResources/" + this.props.appModuleData.webResourceInfo.Name, alt: "", collapsedState: this.props.collapsedState}), 
                        React.createElement(AppDetailsSection_1.default, {appModuleData: this.props.appModuleData, collapsedState: this.props.collapsedState, index: this.props.index, sectionAppCount: this.props.sectionAppCount, removeHoverCallback: function () { return _this.removeHoveredState(); }, sectionIndex: this.props.sectionIndex, isRTL: this.props.isRTL, localizedStrings: this.props.localizedStrings}));
            }
            return (React.createElement("div", {id: this.getTileContainerId(this.props.sectionIndex, this.props.index), key: this.props.appModuleData.appInfo ? this.props.appModuleData.appInfo.AppId : "CreateNewAppTile", style: Styler_12.Styler.AppListItemStyle}, appTile));
        };
        AppModuleTile.prototype.getTileContainerId = function (sectionIndex, index) {
            return ("AppTileContainerSec_" + sectionIndex + "_LI_" + index);
        };
        AppModuleTile.prototype.getTileId = function (sectionIndex, index) {
            return ("AppModuleTileSec_" + sectionIndex + "_Item_" + index);
        };
        AppModuleTile.prototype.removeHoveredState = function () {
            this.setState({
                isHovered: false
            });
        };
        AppModuleTile.prototype.computeStyle = function () {
            var style = Styler_12.Styler.AppModuleTileStyle;
            if (this.props.viewPort !== Models_15.ViewPortEnum.Desktop)
                style = Object.assign({}, style, { marginRight: '0.5rem' });
            else
                style = Object.assign({}, style, { marginRight: '0.85rem' });
            if (this.props.isRTL)
                style = Object.assign({}, style, { marginLeft: style.marginRight, marginRight: style.marginLeft });
            if (!this.props.collapsedState)
                style = Object.assign({}, style, { height: '17rem', display: 'inline-block' });
            if (this.state.isHovered)
                style = Object.assign({}, style, { border: '1px solid #666666', backgroundColor: '#e2e2e2', boxShadow: '1px 0px 12px 0px rgba(0,0,0,5)' });
            return style;
        };
        AppModuleTile.prototype.shiftFocusOnArrowKey = function (e) {
            var sectionIndex = this.props.sectionIndex;
            var tileIndex = this.props.index;
            var sectionAppCount = this.props.sectionAppCount;
            var containerWidth = document.getElementById('AppTileContainer_UL').clientWidth;
            var tileWidth = document.getElementById(this.getTileContainerId(sectionIndex, tileIndex)).clientWidth;
            var numberOfTilesInRow = Math.floor(containerWidth / tileWidth);
            if (e.keyCode == Models_15.KeyCodeEnum.UpArrowKey) {
                var targetElIndex = this.props.index - numberOfTilesInRow;
                if (targetElIndex <= 0) {
                    var locationOnLastRow = numberOfTilesInRow + targetElIndex;
                    targetElIndex = Math.floor(sectionAppCount / numberOfTilesInRow) * numberOfTilesInRow + locationOnLastRow;
                    if (targetElIndex > sectionAppCount)
                        targetElIndex = targetElIndex - numberOfTilesInRow;
                }
                document.getElementById(this.getTileId(sectionIndex, targetElIndex)).focus();
                e.stopPropagation();
                e.preventDefault();
            }
            else if (e.keyCode == Models_15.KeyCodeEnum.DownArrowKey) {
                var targetElIndex = numberOfTilesInRow + this.props.index;
                if (targetElIndex > sectionAppCount)
                    targetElIndex = targetElIndex % numberOfTilesInRow;
                if (targetElIndex == 0)
                    targetElIndex = numberOfTilesInRow;
                document.getElementById(this.getTileId(sectionIndex, targetElIndex)).focus();
                e.stopPropagation();
                e.preventDefault();
            }
            else if (e.keyCode == Models_15.KeyCodeEnum.RightArrowkey) {
                var targetElIndex = this.props.index + 1;
                if (targetElIndex <= sectionAppCount)
                    document.getElementById(this.getTileId(sectionIndex, targetElIndex)).focus();
                e.stopPropagation();
                e.preventDefault();
            }
            else if (e.keyCode == Models_15.KeyCodeEnum.LeftArrowKey) {
                var targetElIndex = this.props.index - 1;
                if (targetElIndex > 0)
                    document.getElementById(this.getTileId(sectionIndex, targetElIndex)).focus();
                e.stopPropagation();
                e.preventDefault();
            }
        };
        AppModuleTile.prototype.setTileHoverState = function () {
            if (!this.state.isHovered) {
                this.setState({
                    isHovered: true
                });
            }
        };
        return AppModuleTile;
    }(React.Component));
    exports.AppModuleTile = AppModuleTile;
});
define("src/Components/SearchTextInput", ["require", "exports", "react", 'react-redux', "src/Models", "src/Actions", "src/Utils/Styler", "src/Actions", "src/Constants"], function (require, exports, React, react_redux_10, Models_16, Actions_7, Styler_13, Actions_8, Constants_4) {
    "use strict";
    var SearchTextInput = (function (_super) {
        __extends(SearchTextInput, _super);
        function SearchTextInput() {
            _super.apply(this, arguments);
        }
        SearchTextInput.prototype.render = function () {
            this.setSearchTextStyle();
            return (React.createElement("div", {style: Styler_13.Styler.TextInputDivStyle}, 
                React.createElement("div", {className: "mscrm-glyph-SearchIcon", style: this.computeFontIconStyle(), onClick: this.handleTextChange.bind(this)}), 
                React.createElement("input", {tabIndex: 1, id: "app-search-input", style: this.searchTextStyle, onChange: this.handleTextChange.bind(this), type: "text", placeholder: this.props.localizedStrings[Constants_4.LS_SEARCH_MY_APPS]})));
        };
        SearchTextInput.prototype.setSearchTextStyle = function () {
            this.searchTextStyle = (this.props.viewPort <= Models_16.ViewPortEnum.Tablet) ? Styler_13.Styler.TextInputMobileStyle : Styler_13.Styler.TextInputStyle;
        };
        SearchTextInput.prototype.computeFontIconStyle = function () {
            var style = Styler_13.Styler.searchFontIcon;
            style = this.props.viewPort <= Models_16.ViewPortEnum.Tablet ? Object.assign({}, style, { fontSize: '1.25rem', paddingRight: '0.75rem' }) : style;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        SearchTextInput.prototype.handleTextChange = function (event) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            var self = this;
            var searchStr = event.target.value;
            this.timer = setTimeout(function () {
                self.props.changeSearchText(searchStr.trim());
            }, 100);
        };
        return SearchTextInput;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        viewPort: state.viewPort.viewPortType,
        localizedStrings: state.localizedStrings,
        isRTL: state.userData.isRTL
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        changeSearchText: function (searchText) {
            dispatch(Actions_7.addSearchTextFilter(searchText));
        },
        setViewPort: function (viewPort) {
            dispatch(Actions_8.setViewPortAction(viewPort));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_10.connect(mapStateToProps, mapDispatchToProps, null)(SearchTextInput);
});
define("src/Components/RefreshButton", ["require", "exports", "react", 'react-redux', "src/DataServiceUtility", "src/Actions", "src/DataServiceUtility", "src/Utils/Styler", "src/Models", "src/Constants", "src/Utils/RefreshUtil", "src/Constants"], function (require, exports, React, react_redux_11, DataServiceUtility_11, Actions_9, DataServiceUtility_12, Styler_14, Models_17, Constants_5, RefreshUtil_3, Constants) {
    "use strict";
    var RefreshButton = (function (_super) {
        __extends(RefreshButton, _super);
        function RefreshButton() {
            _super.call(this);
            this.state = {
                isHovered: false
            };
        }
        RefreshButton.prototype.render = function () {
            var _this = this;
            var self = this;
            var labelId = "refreshLbl";
            return (React.createElement("div", {tabIndex: 1, role: "button", ref: function (btn) {
                if (btn)
                    self.refreshBtn = btn.id;
            }, title: this.props.localizedStrings[Constants_5.LS_REFRESH_BUTTON_TOOLTIP], "aria-describedby": labelId, id: "app-refresh-button", onClick: function () { return _this.refreshApps(); }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }, onKeyDown: function (e) {
                if (e.keyCode == Models_17.KeyCodeEnum.SpaceKey || e.keyCode == Models_17.KeyCodeEnum.EnterKey) {
                    self.refreshApps();
                }
            }, style: this.computeContainerStyle()}, 
                React.createElement("div", {className: "mscrm-glyph-RefreshIcon", style: this.computeFontIconStyle()}), 
                React.createElement("label", {id: labelId, name: "hideOnSmall", style: (this.props.viewPort <= Models_17.ViewPortEnum.Tablet) ? { display: 'none' } : Styler_14.Styler.CommandBarButtonLabelStyles}, this.props.localizedStrings[Constants_5.LS_REFRESH])));
        };
        RefreshButton.prototype.computeContainerStyle = function () {
            var style = this.props.viewPort <= Models_17.ViewPortEnum.Tablet ? Object.assign({}, Styler_14.Styler.CommandButtonStyles, Styler_14.Styler.ActionBtnsMobileStyleExtension) : Styler_14.Styler.CommandButtonStyles;
            style = this.state.isHovered ? Object.assign({}, style, { backgroundColor: '#cccccc' }) : style;
            return style;
        };
        RefreshButton.prototype.computeFontIconStyle = function () {
            var style = Styler_14.Styler.CommandBarFontIconStyles;
            style = this.props.viewPort <= Models_17.ViewPortEnum.Tablet ? Object.assign({}, style, { paddingRight: '0px', paddingLeft: '0px', fontSize: "1.25rem" }) : style;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        RefreshButton.prototype.refreshApps = function () {
            var self = this;
            this.props.showOverlayDialog(this.props.localizedStrings[Constants_5.LS_UPDATE_APPS]);
            DataServiceUtility_11.RetrieveAppDescriptors(DataServiceUtility_12.GetOrgName()).then(function (appData) {
                var listOfApps = RefreshUtil_3.refreshAllApps(appData, self.props.userDataObj);
                self.props.refreshPublishedAppsUtil(listOfApps.publishedApps);
                self.props.refreshUnPublishedAppsUtil(listOfApps.unPublishedApps);
                //AppLandingPage.searchTextDomEl.focus();
                self.props.hideOverlayDialog();
            }).catch(function (err) {
                console.log(err);
                self.props.hideOverlayDialog();
                self.props.showLandingPageDialog(self.props.localizedStrings[Constants.LS_ERROR_TITLE_GENERIC], self.props.localizedStrings[Constants.LS_GENERIC_ERROR], self.refreshBtn);
            });
            ;
        };
        return RefreshButton;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        viewPort: state.viewPort.viewPortType,
        userDataObj: state.userData,
        localizedStrings: state.localizedStrings,
        isRTL: state.userData.isRTL
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        refreshPublishedAppsUtil: function (appList) {
            dispatch(Actions_9.addPublishedApps(appList));
        },
        refreshUnPublishedAppsUtil: function (appList) {
            dispatch(Actions_9.addUnPublishedApps(appList));
        },
        setViewPort: function (viewPort) {
            dispatch(Actions_9.setViewPortAction(viewPort));
        },
        showLandingPageDialog: function (title, message, postFocusElement) {
            dispatch(Actions_9.showLandingPageDialog(title, message, postFocusElement));
        },
        showOverlayDialog: function (message) {
            dispatch(Actions_9.showOverlayDialog(message));
        },
        hideOverlayDialog: function () {
            dispatch(Actions_9.hideOverlayDialog());
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_11.connect(mapStateToProps, mapDispatchToProps, null)(RefreshButton);
});
define("src/Components/FilterButton", ["require", "exports", "react", 'react-redux', "src/Models", "src/Actions", "src/Utils/Styler", "src/Constants"], function (require, exports, React, react_redux_12, Models_18, Actions_10, Styler_15, Constants_6) {
    "use strict";
    var FilterButton = (function (_super) {
        __extends(FilterButton, _super);
        function FilterButton() {
            _super.call(this);
            this.state = {
                isHovered: false
            };
        }
        FilterButton.prototype.render = function () {
            var _this = this;
            var self = this;
            var labelId = "createNewAppLbl";
            return (React.createElement("div", {tabIndex: 1, role: "button", title: this.props.localizedStrings[Constants_6.LS_FILTER_BUTTON_TOOLTIP], "aria-describedby": labelId, id: "app-filter-button", onClick: function (e) { return _this.open(e); }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }, onKeyDown: function (e) {
                if (e.keyCode == Models_18.KeyCodeEnum.SpaceKey || e.keyCode == Models_18.KeyCodeEnum.EnterKey) {
                    self.open(e);
                }
            }, style: this.computeContainerStyle()}, 
                React.createElement("div", {className: "mscrm-glyph-filterIcon", style: this.computeFontIconStyle()}), 
                React.createElement("label", {id: labelId, name: "hideOnSmall", style: (this.props.viewPort <= Models_18.ViewPortEnum.Tablet) ? { display: 'none' } : Styler_15.Styler.CommandBarButtonLabelStyles}, this.props.localizedStrings[Constants_6.LS_FILTER])));
        };
        FilterButton.prototype.open = function (e) {
            this.props.toggleFilterSideNavbar(Models_18.ComponentTypes.FilterSideNavbar);
        };
        FilterButton.prototype.computeContainerStyle = function () {
            var style = this.props.viewPort <= Models_18.ViewPortEnum.Tablet ? Object.assign({}, Styler_15.Styler.CommandButtonStyles, Styler_15.Styler.ActionBtnsMobileStyleExtension) : Styler_15.Styler.CommandButtonStyles;
            style = this.state.isHovered ? Object.assign({}, style, { backgroundColor: '#cccccc' }) : style;
            return style;
        };
        FilterButton.prototype.computeFontIconStyle = function () {
            var style = Styler_15.Styler.CommandBarFontIconStyles;
            style = this.props.viewPort <= Models_18.ViewPortEnum.Tablet ? Object.assign({}, style, { paddingRight: '0px', paddingLeft: '0px', fontSize: "1.25rem" }) : style;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        return FilterButton;
    }(React.Component));
    exports.FilterButton = FilterButton;
    var mapStateToProps = function (state) { return ({
        componentStates: state.componentStates,
        viewPort: state.viewPort.viewPortType,
        localizedStrings: state.localizedStrings,
        isRTL: state.userData.isRTL
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        toggleFilterSideNavbar: function (componentType) {
            dispatch(Actions_10.toggleComponentVisibility(componentType));
        },
        setViewPort: function (viewPort) {
            dispatch(Actions_10.setViewPortAction(viewPort));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_12.connect(mapStateToProps, mapDispatchToProps, null)(FilterButton);
});
define("src/Components/CreateNewAppButton", ["require", "exports", "react", 'react-redux', "src/Utils/Styler", "src/DataServiceUtility", "src/Models", "src/Actions", "src/Constants"], function (require, exports, React, react_redux_13, Styler_16, DataServiceUtility_13, Models_19, Actions_11, Constants_7) {
    "use strict";
    var CreateNewAppButton = (function (_super) {
        __extends(CreateNewAppButton, _super);
        function CreateNewAppButton() {
            _super.call(this);
            this.state = {
                isHovered: false
            };
        }
        CreateNewAppButton.prototype.render = function () {
            var _this = this;
            var self = this;
            var labelId = "createNewAppLbl";
            return (React.createElement("div", {tabIndex: 1, role: "button", title: this.props.localizedStrings[Constants_7.LS_CREATE_NEW_APP_BUTTON_TOOLTIP], "aria-describedby": labelId, id: "app-create-new-app-button", onClick: function () { return _this.openDesigner(); }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }, onKeyDown: function (e) {
                if (e.keyCode == Models_19.KeyCodeEnum.SpaceKey || e.keyCode == Models_19.KeyCodeEnum.EnterKey) {
                    self.openDesigner();
                }
            }, style: this.computeContainerStyle()}, 
                React.createElement("div", {className: "mscrm-glyph-AddIcon", style: this.computeFontIconStyle()}), 
                React.createElement("label", {id: labelId, name: "hideOnSmall", style: (this.props.viewPort <= Models_19.ViewPortEnum.Tablet) ? { display: 'none' } : Styler_16.Styler.CommandBarButtonLabelStyles}, this.props.localizedStrings[Constants_7.LS_CREATE_NEW_APP])));
        };
        CreateNewAppButton.prototype.openDesigner = function () {
            var domainName = DataServiceUtility_13.GetDomainName();
            var orgName = DataServiceUtility_13.GetOrgName();
            var solutionID = "fd140aaf-4df4-11dd-bd17-0019b9312238";
            var url = orgName + "/Designer/App/" + solutionID;
            window.open(url);
        };
        CreateNewAppButton.prototype.computeContainerStyle = function () {
            var style = this.props.viewPort <= Models_19.ViewPortEnum.Tablet ? Object.assign({}, Styler_16.Styler.CommandButtonStyles, Styler_16.Styler.ActionBtnsMobileStyleExtension) : Styler_16.Styler.CommandButtonStyles;
            style = this.state.isHovered ? Object.assign({}, style, { backgroundColor: '#cccccc' }) : style;
            return style;
        };
        CreateNewAppButton.prototype.computeFontIconStyle = function () {
            var style = Styler_16.Styler.CommandBarFontIconStyles;
            style = this.props.viewPort <= Models_19.ViewPortEnum.Tablet ? Object.assign({}, style, { paddingRight: '0px', paddingLeft: '0px', fontSize: "1.25rem" }) : style;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        return CreateNewAppButton;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        viewPort: state.viewPort.viewPortType,
        localizedStrings: state.localizedStrings,
        isRTL: state.userData.isRTL
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        setViewPort: function (viewPort) {
            dispatch(Actions_11.setViewPortAction(viewPort));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_13.connect(mapStateToProps, mapDispatchToProps, null)(CreateNewAppButton);
});
define("src/Components/ActionButtons", ["require", "exports", "react", "src/Components/RefreshButton", "src/Components/FilterButton", "src/Components/CreateNewAppButton", "src/Utils/Styler", "src/Models", 'react-redux', "src/DataServiceUtility"], function (require, exports, React, RefreshButton_1, FilterButton_1, CreateNewAppButton_1, Styler_17, Models_20, react_redux_14, DataServiceUtility_14) {
    "use strict";
    var ActionButtons = (function (_super) {
        __extends(ActionButtons, _super);
        function ActionButtons() {
            _super.apply(this, arguments);
        }
        ActionButtons.prototype.render = function () {
            // Render Create New Button if FCB Designer is on and user is AppModule Admin
            var isDesktop = (DataServiceUtility_14.GetFormFactor() == Models_20.ClientType.Desktop);
            var isTablet = (DataServiceUtility_14.GetFormFactor() == Models_20.ClientType.Tablet);
            var isOnline = (DataServiceUtility_14.GetClientStatus() == Models_20.ClientStatus[Models_20.ClientStatus.Online]);
            return (React.createElement("div", {style: Styler_17.Styler.ActionBtnContainerStyle}, 
                (this.props.userData.isDesignerFCBenabled && this.props.userData.landingPagePrivileges.isAppModuleAdmin && (isDesktop || isTablet) && isOnline) ? React.createElement(CreateNewAppButton_1.default, null) : null, 
                React.createElement(RefreshButton_1.default, null), 
                (isDesktop && isOnline) ? React.createElement(FilterButton_1.default, null) : null));
        };
        return ActionButtons;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        userData: state.userData
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_14.connect(mapStateToProps, null, null)(ActionButtons);
});
define("src/Components/SearchAndCommandBar", ["require", "exports", "react", 'react-redux', "src/Components/SearchTextInput", "src/Components/ActionButtons", "src/Utils/Styler", "src/Models"], function (require, exports, React, react_redux_15, SearchTextInput_1, ActionButtons_1, Styler_18, Models_21) {
    "use strict";
    var SearchAndCommandBar = (function (_super) {
        __extends(SearchAndCommandBar, _super);
        function SearchAndCommandBar() {
            _super.apply(this, arguments);
        }
        SearchAndCommandBar.prototype.render = function () {
            var _this = this;
            this.setSearchViewStyle();
            return (React.createElement("div", {id: "SearchAndCommandBar", "aria-hidden": "false", style: this.searchViewStyleObj, onKeyDown: function (e) { return _this.F6KeyHandler(e); }}, 
                React.createElement(SearchTextInput_1.default, null), 
                React.createElement(ActionButtons_1.default, null)));
        };
        SearchAndCommandBar.prototype.F6KeyHandler = function (e) {
            if (e.ctrlKey && e.keyCode == Models_21.KeyCodeEnum.f6Key) {
                if (document.getElementById('app-section-header_1')) {
                    document.getElementById('app-section-header_1').focus();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        };
        SearchAndCommandBar.prototype.setSearchViewStyle = function () {
            var style;
            if (this.props.viewPort <= Models_21.ViewPortEnum.Tablet) {
                if (this.props.isRTL)
                    style = Object.assign({}, Styler_18.Styler.SearchAndCommandBarMobileStyle, { padding: '0.5rem 1.15rem 0.5rem 0.5rem', });
                else
                    style = Styler_18.Styler.SearchAndCommandBarMobileStyle;
            }
            else {
                style = Styler_18.Styler.SearchAndCommandBarStyle;
            }
            this.searchViewStyleObj = style;
        };
        SearchAndCommandBar.prototype.setDefaultFocus = function () {
            document.getElementById('app-search-input').focus();
        };
        SearchAndCommandBar.prototype.componentDidUpdate = function () {
            this.setDefaultFocus();
        };
        SearchAndCommandBar.prototype.componentDidMount = function () {
            this.setDefaultFocus();
        };
        return SearchAndCommandBar;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        viewPort: state.viewPort.viewPortType,
        isRTL: state.userData.isRTL,
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_15.connect(mapStateToProps, null, null)(SearchAndCommandBar);
});
define("src/Components/Filter/FilterList", ["require", "exports", "react", 'react-redux', "src/Models", "src/Actions", "src/Utils/Styler", "src/Constants"], function (require, exports, React, react_redux_16, Models_22, Actions_12, Styler_19, Constants) {
    "use strict";
    var FilterList = (function (_super) {
        __extends(FilterList, _super);
        function FilterList() {
            _super.apply(this, arguments);
        }
        FilterList.prototype.render = function () {
            var filter;
            if (this.props.filters.clientType) {
                var self = this;
                filter = this.props.filters.clientType.map(function (clientType) {
                    var clientTypeStr = clientType == Models_22.ClientTypes.Web ? this.props.localizedStrings[Constants.LS_CLIENT_WEB] : this.props.localizedStrings[Constants.LS_CLIENT_UCI];
                    return (React.createElement("div", {tabIndex: 1, key: clientType, style: self.computeContainerStyle(), onKeyDown: function (e) {
                        if (e.keyCode == Models_22.KeyCodeEnum.SpaceKey || e.keyCode == Models_22.KeyCodeEnum.EnterKey) {
                            self.removeClientType(clientType);
                        }
                    }}, 
                        React.createElement("div", {className: 'mscrm-glyph-CrossIcon', style: self.computeFontIconStyle(), onClick: function () { return self.removeClientType(clientType); }}), 
                        React.createElement("label", null, clientTypeStr)));
                });
            }
            return (React.createElement("div", {className: "filter-list", style: { display: 'flex', width: '100%' }}, filter));
        };
        FilterList.prototype.removeClientType = function (clientType) {
            this.props.toggleClientType(clientType);
        };
        FilterList.prototype.computeContainerStyle = function () {
            var style = Styler_19.Styler.FilterList.container;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { marginRight: style.marginLeft, marginLeft: style.marginRight });
            }
            return style;
        };
        FilterList.prototype.computeFontIconStyle = function () {
            var style = Styler_19.Styler.FilterList.crossButton;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        return FilterList;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        filters: state.filters,
        isRTL: state.userData.isRTL,
        localizedStrings: state.localizedStrings,
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        toggleClientType: function (clientType) {
            dispatch(Actions_12.toggleClientTypeFilter(clientType));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_16.connect(mapStateToProps, mapDispatchToProps, null)(FilterList);
});
define("src/Components/Filter/FilterSideNavbar", ["require", "exports", "react", "react-dom", 'react-redux', "src/Models", "src/Actions", "src/Components/AppLandingPage", "src/Constants", "src/Utils/Styler", "src/Components/CrossButton"], function (require, exports, React, ReactDOM, react_redux_17, Models_23, Actions_13, AppLandingPage_3, Constants, Styler_20, CrossButton_3) {
    "use strict";
    var FilterSideNavbar = (function (_super) {
        __extends(FilterSideNavbar, _super);
        function FilterSideNavbar() {
            var _this = this;
            _super.call(this);
            this.handleClick = function (event) {
                // findDOMNode gives you a reference to your component;
                if (!ReactDOM.findDOMNode(_this).contains(event.target)) {
                    // the click was outside your component, so handle closing here
                    _this.close();
                }
            };
            this.state = {
                crossBtnHover: false
            };
        }
        FilterSideNavbar.prototype.render = function () {
            var _this = this;
            var self = this;
            return (React.createElement("div", {"aria-labelledby": "filterByTitle", role: "dialog", id: "app-filter-sideNavBar", className: "filter-sidenavbar", style: this.computeFilterSidebarStyle(), "aria-hidden": !this.props.componentStates.isFilterSideNavbarVisible, onKeyDown: function (e) {
                if (e.keyCode === Models_23.KeyCodeEnum.EscapeKey) {
                    self.close();
                }
            }}, 
                React.createElement(CrossButton_3.CrossButton, {btnID: "app-filter-close", btnTitle: this.props.localizedStrings[Constants.LS_CLOSE], isRTL: this.props.isRTL, btnStyle: Styler_20.Styler.FilterSideNavbar.cross, closeCallback: function () { return _this.close(); }, preFocusElement: "app-filter-uci-checkBox"}), 
                React.createElement("div", {id: "filterByTitle", style: Styler_20.Styler.FilterSideNavbar.title, className: "landing-page-overflow-handling"}, this.props.localizedStrings[Constants.LS_FILTERBY]), 
                React.createElement("div", {id: "filterByTitle", style: Styler_20.Styler.FilterSideNavbar.clientType}, this.props.localizedStrings[Constants.LS_CLIENT_LABEL]), 
                React.createElement("div", {style: Styler_20.Styler.FilterSideNavbar.childCheckBoxContainer, onClick: function () { return _this.props.toggleClientType(Models_23.ClientTypes.Web); }}, 
                    React.createElement("input", {id: "app-filter-web-checkBox", tabIndex: 1, type: "checkbox", style: this.computeCheckboxStyle(), name: "clientType", checked: this.props.filters.clientType.indexOf(Models_23.ClientTypes.Web) > -1}), 
                    React.createElement("div", null, this.props.localizedStrings[Constants.LS_CLIENT_WEB])), 
                React.createElement("div", {onKeyDown: function (e) {
                    if (e.keyCode == Models_23.KeyCodeEnum.TabKey) {
                        if (e.shiftKey) { }
                        else {
                            document.getElementById('app-filter-close').focus();
                            e.stopPropagation();
                            e.preventDefault();
                        }
                    }
                }, style: Styler_20.Styler.FilterSideNavbar.childCheckBoxContainer, onClick: function () { return _this.props.toggleClientType(Models_23.ClientTypes.UCI); }}, 
                    React.createElement("input", {id: "app-filter-uci-checkBox", tabIndex: 1, type: "checkbox", style: this.computeCheckboxStyle(), name: "clientType", checked: this.props.filters.clientType.indexOf(Models_23.ClientTypes.UCI) > -1}), 
                    React.createElement("div", null, this.props.localizedStrings[Constants.LS_CLIENT_UCI]))));
        };
        FilterSideNavbar.prototype.computeCheckboxStyle = function () {
            var style = Styler_20.Styler.FilterSideNavbar.checkBox;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { marginLeft: style.marginRight, marginRight: style.marginLeft });
            }
            return style;
        };
        FilterSideNavbar.prototype.close = function () {
            this.props.toggleFilterSideNavbar(Models_23.ComponentTypes.FilterSideNavbar);
            AppLandingPage_3.AppLandingPage.filterBtnDomEl.focus();
        };
        FilterSideNavbar.prototype.computeFilterSidebarStyle = function () {
            var style = Styler_20.Styler.FilterSideNavbar.container;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { left: style.right });
                delete style.right;
            }
            if (this.props.componentStates.isFilterSideNavbarVisible) {
                style = Object.assign({}, style, { visibility: 'visible' });
                if (this.props.isRTL) {
                    style = Object.assign({}, style, { left: 0 });
                }
                else
                    style = Object.assign({}, style, { right: 0 });
            }
            if (this.props.viewPort <= Models_23.ViewPortEnum.Tablet) {
                style = Object.assign({}, style, { width: '100%', height: '100%' });
            }
            return style;
        };
        FilterSideNavbar.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.componentStates.isFilterSideNavbarVisible && !prevProps.componentStates.isFilterSideNavbarVisible) {
                AppLandingPage_3.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "true");
                AppLandingPage_3.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "true");
                document.addEventListener('click', this.handleClick, false);
                document.getElementById('app-filter-web-checkBox').focus();
            }
            else if (!this.props.componentStates.isFilterSideNavbarVisible && prevProps.componentStates.isFilterSideNavbarVisible) {
                AppLandingPage_3.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "false");
                AppLandingPage_3.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "false");
                document.removeEventListener('click', this.handleClick, false);
            }
        };
        FilterSideNavbar.prototype.componentWillUnmount = function () {
            document.removeEventListener('click', this.handleClick, false);
        };
        return FilterSideNavbar;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        filters: state.filters,
        componentStates: state.componentStates,
        localizedStrings: state.localizedStrings,
        isRTL: state.userData.isRTL,
        viewPort: state.viewPort.viewPortType
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        toggleClientType: function (clientType) {
            dispatch(Actions_13.toggleClientTypeFilter(clientType));
        },
        toggleFilterSideNavbar: function (componentType) {
            dispatch(Actions_13.toggleComponentVisibility(componentType));
        },
        setViewPort: function (viewPort) {
            dispatch(Actions_13.setViewPortAction(viewPort));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_17.connect(mapStateToProps, mapDispatchToProps, null)(FilterSideNavbar);
});
/// <reference path="../../typings/react/react.d.ts" />
define("src/Components/AppLandingPageDialogOverlay", ["require", "exports", "react", "src/Utils/Styler"], function (require, exports, React, Styler_21) {
    "use strict";
    var AppLandingPageDialogOverlay = (function (_super) {
        __extends(AppLandingPageDialogOverlay, _super);
        function AppLandingPageDialogOverlay() {
            _super.apply(this, arguments);
        }
        AppLandingPageDialogOverlay.prototype.render = function () {
            return (React.createElement("div", {id: "appLandingPagePopupOverlay", style: Styler_21.Styler.AppLandingPageDialog.AppLandingPageDialogOverLayStyle}));
        };
        return AppLandingPageDialogOverlay;
    }(React.Component));
    exports.AppLandingPageDialogOverlay = AppLandingPageDialogOverlay;
});
/// <reference path="../../typings/react/react.d.ts" />
define("src/Components/LandingPageDialog", ["require", "exports", "react", "src/Components/AppLandingPageDialogOverlay", "src/Utils/Styler", "src/Components/AppLandingPage", "src/Components/GenericButton", "src/Components/CrossButton", "src/Models", 'react-redux', "src/Constants", "src/Actions"], function (require, exports, React, AppLandingPageDialogOverlay_1, Styler_22, AppLandingPage_4, GenericButton_2, CrossButton_4, Models_24, react_redux_18, Constants, Actions_14) {
    "use strict";
    var LandingPageDialog = (function (_super) {
        __extends(LandingPageDialog, _super);
        function LandingPageDialog() {
            _super.apply(this, arguments);
        }
        LandingPageDialog.prototype.render = function () {
            if (!this.props.dialogState.isDialogVisible)
                return null;
            var self = this;
            var btnNameLoc = this.props.localizedStrings[Constants.LS_OK] != undefined ? this.props.localizedStrings[Constants.LS_OK] : "Ok";
            var btnCloseLoc = this.props.localizedStrings[Constants.LS_CLOSE] != undefined ? this.props.localizedStrings[Constants.LS_OK] : "Close";
            var titleSection = React.createElement("div", {id: "appLandingPagePopupTitleRow", style: Styler_22.Styler.AppLandingPageDialog.AppLandingPagePopupTitleRow}, 
                React.createElement("div", {id: "appLandingPagePopupTitle", className: "landing-page-overflow-handling", style: Styler_22.Styler.AppLandingPageDialog.TitleDiv, tabIndex: -1}, this.props.dialogState.dialogTitle), 
                React.createElement(CrossButton_4.CrossButton, {btnID: "landing-pade-dialog-close", btnTitle: btnCloseLoc, isRTL: self.props.isRTL, btnStyle: Styler_22.Styler.ManageRoleFlyout.SideNavBarHeadingCrossButtonStyle, closeCallback: function () { return self.close(self); }, preFocusElement: "dialog_ok_button"}));
            var messageSection = React.createElement("div", {id: "appLandingPagePopupMessageRow", style: Styler_22.Styler.AppLandingPageDialog.AppLandingPagePopupMessageRow, tabIndex: -1}, this.props.dialogState.dialogMessage);
            var buttonSection = React.createElement("div", {id: "appLandingPagePopupButtonRow", style: Styler_22.Styler.AppLandingPageDialog.AppLandingPagePopupButtonRow}, 
                React.createElement(GenericButton_2.GenericButton, {btnID: "dialog_ok_button", btnName: btnNameLoc, toolTip: null, clickCallback: function () { return self.close(self); }, btnStyle: Styler_22.Styler.AppLandingPageDialog.Button, postFocusElement: "landing-pade-dialog-close"})
            );
            return (React.createElement("div", {id: "AppLandingPageDialog", onKeyDown: function (e) {
                if (e.keyCode == Models_24.KeyCodeEnum.EscapeKey)
                    self.close(self);
            }}, 
                React.createElement(AppLandingPageDialogOverlay_1.AppLandingPageDialogOverlay, null), 
                React.createElement("div", {onKeyDown: function (e) {
                    if (e.shiftKey && e.keyCode == Models_24.KeyCodeEnum.TabKey) {
                        document.getElementById('dialog_ok_button').focus();
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }, role: "dialog", "aria-hidden": !this.props.dialogState.isDialogVisible, "aria-labelledby": "appLandingPagePopupTitle", "aria-describedby": "appLandingPagePopupMessageRow", tabIndex: -1, id: "appLandingPagePopup", style: self.computeDialogStyle(self)}, 
                    titleSection, 
                    messageSection, 
                    buttonSection)));
        };
        LandingPageDialog.prototype.computeDialogStyle = function (self) {
            var style = Styler_22.Styler.AppLandingPageDialog.AppLandingPageDialogStyle;
            if (self.props.viewPort == Models_24.ViewPortEnum.Tablet) {
                style = Object.assign({}, style, { width: '90%', marginLeft: '-45%' });
            }
            else if (self.props.viewPort == Models_24.ViewPortEnum.Mobile) {
                style = Object.assign({}, style, { width: '100%', marginLeft: '-50%' });
            }
            if (self.props.isRTL) {
                style = Object.assign({}, style, { marginRight: style.marginLeft, marginLeft: 'auto', right: style.left, left: 'auto' });
            }
            return style;
        };
        LandingPageDialog.prototype.close = function (self) {
            self.props.hideLandingPageDialogCallback();
        };
        LandingPageDialog.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.dialogState.isDialogVisible) {
                AppLandingPage_4.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "true");
                AppLandingPage_4.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "true");
                document.getElementById('dialog_ok_button').focus();
            }
            else {
                AppLandingPage_4.AppLandingPage.landingPageContentContainerDomEl.setAttribute("aria-hidden", "false");
                AppLandingPage_4.AppLandingPage.searchAndCommandBarDomEl.setAttribute("aria-hidden", "false");
                if (prevProps.dialogState.postFocusElement && document.getElementById(prevProps.dialogState.postFocusElement))
                    document.getElementById(prevProps.dialogState.postFocusElement).focus();
            }
        };
        return LandingPageDialog;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        dialogState: state.landingPageDialogState,
        viewPort: state.viewPort.viewPortType,
        localizedStrings: state.localizedStrings,
        isRTL: state.userData.isRTL
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        hideLandingPageDialogCallback: function () {
            dispatch(Actions_14.hideLandingPageDialog());
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_18.connect(mapStateToProps, mapDispatchToProps, null)(LandingPageDialog);
});
define("src/Components/AppSectionHeader", ["require", "exports", "react", "src/Utils/Styler", "src/Models"], function (require, exports, React, Styler_23, Models_25) {
    "use strict";
    var AppSectionHeader = (function (_super) {
        __extends(AppSectionHeader, _super);
        function AppSectionHeader() {
            _super.apply(this, arguments);
        }
        AppSectionHeader.prototype.render = function () {
            var self = this;
            var headerId = "app-section-header_" + this.props.sectionIndex;
            var nameAttr = Models_25.AccordianState[Models_25.AccordianState.Expanded];
            var numberOfApps = this.props.apps.length;
            if (this.props.apps.length != 0 && this.props.apps[this.props.apps.length - 1].isCreateNewAppTile)
                numberOfApps = numberOfApps - 1;
            var accordianIconClassName = this.props.isSectionVisible ? "mscrm-glyph-expandedIcon" : "mscrm-glyph-collapsedIcon";
            var toolTip = this.props.toolTip ? this.props.toolTip.replace(/\{0\}/g, numberOfApps.toString()) : numberOfApps.toString();
            return (React.createElement("div", {"aria-expanded": this.props.isSectionVisible, role: "button", name: nameAttr, "aria-label": this.props.heading + numberOfApps, title: toolTip, id: headerId, tabIndex: 1, style: Styler_23.Styler.SectionHeaderStyle, onClick: function (e) { return self.props.toggleSectionVisibility(); }, onKeyDown: function (e) { self.onKeyDown(e, self); }}, 
                React.createElement("div", {className: accordianIconClassName, style: this.computeFontIconStyle()}), 
                React.createElement("h2", {style: Styler_23.Styler.SectionHeadingStyle}, this.props.heading), 
                React.createElement("h2", {style: Object.assign({}, Styler_23.Styler.SectionHeadingStyle, { margin: '0 0.5rem 0.5rem' })}, "(" + numberOfApps + ")")));
        };
        AppSectionHeader.prototype.computeFontIconStyle = function () {
            var style = Styler_23.Styler.expandCollapseFontIcons;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        AppSectionHeader.prototype.onKeyDown = function (e, self) {
            if (e.keyCode == Models_25.KeyCodeEnum.SpaceKey || e.keyCode == Models_25.KeyCodeEnum.EnterKey) {
                self.props.toggleSectionVisibility();
            }
            else if (e.keyCode == Models_25.KeyCodeEnum.LeftArrowKey && self.props.isSectionVisible) {
                self.props.toggleSectionVisibility();
            }
            else if (e.keyCode == Models_25.KeyCodeEnum.RightArrowkey && !self.props.isSectionVisible) {
                self.props.toggleSectionVisibility();
            }
        };
        return AppSectionHeader;
    }(React.Component));
    exports.AppSectionHeader = AppSectionHeader;
});
define("src/Components/AppTileContainer", ["require", "exports", "react", "src/Components/AppModuleTile", "src/Utils/Styler"], function (require, exports, React, AppModuleTile_1, Styler_24) {
    "use strict";
    var AppTileContainer = (function (_super) {
        __extends(AppTileContainer, _super);
        function AppTileContainer() {
            _super.apply(this, arguments);
        }
        AppTileContainer.prototype.render = function () {
            var collapsedSate = this.props.collapsedState;
            var self = this;
            return (React.createElement("div", {id: "AppTileContainer_UL", style: this.computeContainerStyle()}, this.props.apps.map(function (app, index) {
                return (React.createElement(AppModuleTile_1.AppModuleTile, {key: app.isCreateNewAppTile ? "createNewAppTile" : app.appInfo.AppId, sectionIndex: self.props.sectionIndex, collapsedState: collapsedSate, appModuleData: app, index: index + 1, sectionAppCount: self.props.apps.length, isRTL: self.props.isRTL, localizedStrings: self.props.localizedStrings, viewPort: self.props.viewPort}));
            })));
        };
        AppTileContainer.prototype.computeContainerStyle = function () {
            var style = Styler_24.Styler.AppListStyle;
            if (!this.props.isSectionVisible)
                style = Object.assign({}, style, { display: "none" });
            return style;
        };
        return AppTileContainer;
    }(React.Component));
    exports.AppTileContainer = AppTileContainer;
});
define("src/Components/AppSection", ["require", "exports", "react", 'react-redux', "src/Components/AppSectionHeader", "src/Components/AppTileContainer", "src/Models", "src/Utils/Styler"], function (require, exports, React, react_redux_19, AppSectionHeader_1, AppTileContainer_1, Models_26, Styler_25) {
    "use strict";
    var AppSection = (function (_super) {
        __extends(AppSection, _super);
        function AppSection() {
            _super.apply(this, arguments);
        }
        AppSection.prototype.render = function () {
            var _this = this;
            var length = this.props.apps.length;
            return (React.createElement("div", {className: "app-list-container", style: this.computeSectionStyle(), onKeyDown: function (e) { return _this.F6KeyHandler(e); }}, 
                React.createElement(AppSectionHeader_1.AppSectionHeader, {sectionIndex: this.props.sectionIndex, heading: this.props.sectionHeader, toolTip: this.props.toolTip, toggleSectionVisibility: this.props.toggleSectionVisibility, isSectionVisible: this.props.isSectionVisible, apps: this.props.apps, isRTL: this.props.isRTL}), 
                React.createElement(AppTileContainer_1.AppTileContainer, {sectionIndex: this.props.sectionIndex, collapsedState: (this.props.viewPort <= Models_26.ViewPortEnum.Tablet), isSectionVisible: this.props.isSectionVisible, apps: this.props.apps, isRTL: this.props.isRTL, localizedStrings: this.props.localizedStrings, viewPort: this.props.viewPort})));
        };
        AppSection.prototype.F6KeyHandler = function (e) {
            if (e.ctrlKey && e.keyCode == Models_26.KeyCodeEnum.f6Key) {
                if (document.getElementById('app-section-header_' + (this.props.sectionIndex + 1)))
                    document.getElementById('app-section-header_' + (this.props.sectionIndex + 1)).focus();
                else
                    document.getElementById('app-search-input').focus();
                e.stopPropagation();
                e.preventDefault();
            }
        };
        AppSection.prototype.computeSectionStyle = function () {
            var style = Styler_25.Styler.AppSectionStyle;
            if (!this.props.isSectionVisible) {
                style = Object.assign({}, style, { marginBottom: '0.85rem' });
            }
            return style;
        };
        return AppSection;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        viewPort: state.viewPort.viewPortType,
        isRTL: state.userData.isRTL,
        localizedStrings: state.localizedStrings
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_19.connect(mapStateToProps, null, null)(AppSection);
});
define("src/Components/NoAppSection", ["require", "exports", "react", "src/Utils/Styler", "src/Components/CreateNewAppTile", "src/Constants", "src/Models"], function (require, exports, React, Styler_26, CreateNewAppTile_2, Constants, Models_27) {
    "use strict";
    var NoAppSection = (function (_super) {
        __extends(NoAppSection, _super);
        function NoAppSection() {
            _super.apply(this, arguments);
        }
        NoAppSection.prototype.render = function () {
            var displayString1 = this.props.isFilterApplied ? this.props.localizedStrings[Constants.LS_NO_MATCHING_SEARCH] : this.props.localizedStrings[Constants.LS_NO_APPS];
            var displayString2 = this.props.localizedStrings[Constants.LS_MISSING_APP_REFRESH];
            var createNewAppTile = (!this.props.isFilterApplied && this.props.userData.isDesignerFCBenabled && this.props.userData.landingPagePrivileges.isAppModuleAdmin) ?
                React.createElement("div", {style: { margin: '1rem auto 0', width: '218px' }}, 
                    React.createElement(CreateNewAppTile_2.CreateNewAppTile, {isNoAppSection: true, isRTL: this.props.isRTL, localizedStrings: this.props.localizedStrings, viewPort: Models_27.ViewPortEnum.Desktop})
                ) : null;
            return (React.createElement("div", {className: "no-app-section-container", style: Styler_26.Styler.NoAppSectionDivStyle}, 
                React.createElement("div", {style: Styler_26.Styler.NoAppSectionLine1Style}, 
                    React.createElement("label", {id: "no-apps-section-text", style: Styler_26.Styler.FontWeight.default, title: displayString1}, 
                        " ", 
                        displayString1)
                ), 
                React.createElement("div", {style: Styler_26.Styler.NoAppSectionLine2Style}, 
                    React.createElement("label", {title: displayString2}, 
                        " ", 
                        displayString2)
                ), 
                createNewAppTile, 
                React.createElement("div", {style: { border: '0.5px solid #D0D1D3', margin: '1.5rem auto', width: '218px' }})));
        };
        return NoAppSection;
    }(React.Component));
    exports.NoAppSection = NoAppSection;
});
/// <reference path="../../typings/react/react.d.ts" />
define("src/Components/OverlayDialog", ["require", "exports", "react", "src/Components/AppLandingPageDialogOverlay", "src/Utils/Styler", 'react-redux', "src/Components/AppLandingPage"], function (require, exports, React, AppLandingPageDialogOverlay_2, Styler_27, react_redux_20, AppLandingPage_5) {
    "use strict";
    var OverlayDialog = (function (_super) {
        __extends(OverlayDialog, _super);
        function OverlayDialog() {
            _super.apply(this, arguments);
        }
        OverlayDialog.prototype.render = function () {
            var animationStyle = null;
            if (this.props.isRTL) {
                animationStyle = React.createElement("p", {style: Styler_27.Styler.PublishAnimationProgress}, 
                    React.createElement("img", {src: "/_static/_controls/AppManagementControl/HorzPreloader_12x145-Reverse-White.gif", alt: "image"})
                );
            }
            else {
                animationStyle = React.createElement("p", {style: Styler_27.Styler.PublishAnimationProgress}, 
                    React.createElement("img", {src: "/_static/_controls/AppManagementControl/HorzPreloader_12x145-White.gif", alt: "image"})
                );
            }
            var overlayDialog = this.props.overlayDialogState.isOverlayVisible ?
                React.createElement("div", {id: "OverlayDialogBox"}, 
                    React.createElement("div", {id: "OverlayDialogLabelBox", "aria-label": this.props.overlayDialogState.overlayText, tabIndex: 1, style: Styler_27.Styler.PublishAnimation}, 
                        React.createElement("label", {style: Styler_27.Styler.FontWeight.default}, 
                            " ", 
                            this.props.overlayDialogState.overlayText, 
                            " "), 
                        animationStyle), 
                    React.createElement(AppLandingPageDialogOverlay_2.AppLandingPageDialogOverlay, null), 
                    ";") : null;
            return (React.createElement("div", {id: "OverlayDialogPopover"}, overlayDialog));
        };
        OverlayDialog.prototype.setDefaultFocus = function () {
            var overlayDisplayLabelDomeEl = document.getElementById('OverlayDialogLabelBox');
            if (overlayDisplayLabelDomeEl) {
                overlayDisplayLabelDomeEl.focus();
            }
        };
        OverlayDialog.prototype.componentDidUpdate = function () {
            if (this.props.overlayDialogState.isOverlayVisible)
                this.setDefaultFocus();
            else
                AppLandingPage_5.AppLandingPage.searchTextDomEl.focus();
        };
        return OverlayDialog;
    }(React.Component));
    var mapStateToProps = function (state) { return ({
        overlayDialogState: state.overlayDialogState,
        isRTL: state.userData.isRTL
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_20.connect(mapStateToProps, null, null)(OverlayDialog);
});
define("src/Components/AppLandingPage", ["require", "exports", "react", 'react-redux', "src/Components/SearchAndCommandBar", "src/Components/Filter/FilterList", "src/Components/Filter/FilterSideNavbar", "src/Components/ManageRoles/ManageRoleSideNavBar", "src/Components/LandingPageDialog", "src/Components/AppSection", "src/Components/NoAppSection", "src/Models", "src/Selectors", "src/Utils/Styler", "src/Components/OverlayDialog", "src/Components/EllipsisFlyout", "src/Actions", "src/Constants", "src/DataServiceUtility"], function (require, exports, React, react_redux_21, SearchAndCommandBar_1, FilterList_1, FilterSideNavbar_1, ManageRoleSideNavBar_1, LandingPageDialog_1, AppSection_1, NoAppSection_1, Models_28, Selectors_1, Styler_28, OverlayDialog_1, EllipsisFlyout_1, Actions_15, Constants, DataServiceUtility_15) {
    "use strict";
    var AppLandingPage = (function (_super) {
        __extends(AppLandingPage, _super);
        function AppLandingPage() {
            _super.apply(this, arguments);
            this.stopwatch = new StopWatch.Stopwatch();
        }
        AppLandingPage.prototype.render = function () {
            this.stopwatch.start();
            window.parent.document.title = this.props.localizedStrings[Constants.LS_MY_APPS];
            if (this.props.initailizationErrorState.isError) {
                return (React.createElement("div", {id: "AppLandingPage", style: { overflowY: 'scroll', height: '100%' }}, 
                    React.createElement(LandingPageDialog_1.default, null)
                ));
            }
            var self = this;
            var noAppSection = null;
            var publishedAppSection = null;
            var unPublishedAppSection = null;
            var showNoAppsSectionFlag = this.showNoAppsSection();
            var isAppModuleAdmin = this.props.userData.landingPagePrivileges.isAppModuleAdmin;
            var isDesktop = (DataServiceUtility_15.GetFormFactor() == Models_28.ClientType.Desktop);
            var isTablet = (DataServiceUtility_15.GetFormFactor() == Models_28.ClientType.Tablet);
            var isOnline = (DataServiceUtility_15.GetClientStatus() == Models_28.ClientStatus[Models_28.ClientStatus.Online]);
            if (showNoAppsSectionFlag) {
                noAppSection = React.createElement(NoAppSection_1.NoAppSection, {key: "noAppsSection", isFilterApplied: this.props.isFilterApplied, localizedStrings: this.props.localizedStrings, userData: this.props.userData, isRTL: this.props.userData.isRTL});
            }
            else {
                publishedAppSection = React.createElement(AppSection_1.default, {key: "publishedAppsSection", sectionIndex: 1, isSectionVisible: this.props.isPublishedVisible, apps: this.props.publishedAppList, sectionHeader: this.props.localizedStrings[Constants.LS_PUBLISHED_APPS], toolTip: this.props.localizedStrings[Constants.LS_PUBLISHED_APPS_SECTION_TOOLTIP], toggleSectionVisibility: this.props.togglePublishedVisibility});
                if (isAppModuleAdmin) {
                    var unPublishedAppsList = this.props.unPublishedAppList.slice();
                    if (this.props.userData.isDesignerFCBenabled && (isDesktop || isTablet) && isOnline) {
                        var CreateNewAppTileData = {
                            isCreateNewAppTile: true
                        };
                        unPublishedAppsList.push(CreateNewAppTileData);
                    }
                    unPublishedAppSection = React.createElement(AppSection_1.default, {key: "unPublishedAppsSection", sectionIndex: 2, isSectionVisible: this.props.isUnPublishedVisible, apps: unPublishedAppsList, toolTip: this.props.localizedStrings[Constants.LS_UNPUBLISHED_APPS_SECTION_TOOLTIP], sectionHeader: this.props.localizedStrings[Constants.LS_APPS_EDITED], toggleSectionVisibility: this.props.toggleUnPublishedVisibility});
                }
            }
            return (React.createElement("div", {id: "AppLandingPage", "aria-hidden": "false", style: { overflowY: 'auto', height: '100%' }}, 
                React.createElement(OverlayDialog_1.default, null), 
                React.createElement(LandingPageDialog_1.default, null), 
                React.createElement(FilterSideNavbar_1.default, null), 
                React.createElement(ManageRoleSideNavBar_1.default, null), 
                React.createElement(EllipsisFlyout_1.default, null), 
                React.createElement(SearchAndCommandBar_1.default, null), 
                React.createElement("div", {id: "AppLandingPageContentContainer", style: self.computeAppLandingPageContainerStyle(self)}, 
                    React.createElement(FilterList_1.default, null), 
                    noAppSection, 
                    publishedAppSection, 
                    unPublishedAppSection)));
        };
        AppLandingPage.prototype.setShortCutKeys = function (e) {
            if (e.ctrlKey && e.shiftKey) {
                switch (e.keyCode) {
                    case Models_28.KeyCodeEnum.CKey:
                        AppLandingPage.createNewBtntDomEl.click();
                        break;
                    case Models_28.KeyCodeEnum.SKey:
                        AppLandingPage.searchTextDomEl.previousSibling.click();
                        break;
                    case Models_28.KeyCodeEnum.FKey:
                        AppLandingPage.filterBtnDomEl.click();
                        break;
                }
            }
            else if (e.altKey && e.shiftKey) {
                switch (e.keyCode) {
                    case Models_28.KeyCodeEnum.RKey:
                        AppLandingPage.refreshBtnDomEl.click();
                        break;
                }
            }
        };
        AppLandingPage.prototype.showNoAppsSection = function () {
            if (this.props.userData && this.props.publishedAppList.length == 0 && this.props.unPublishedAppList.length == 0)
                return true;
            return false;
        };
        AppLandingPage.prototype.computeAppLandingPageContainerStyle = function (self) {
            var style = Styler_28.Styler.AppLandingPageStyle;
            if (self.props.viewPort !== Models_28.ViewPortEnum.Desktop) {
                if (this.props.userData.isRTL)
                    style = Object.assign({}, style, { padding: '0 0.75rem 1.75rem 0' });
                else
                    style = Object.assign({}, style, { padding: '0 0 1.75rem 0.75rem' });
            }
            else {
                style = Object.assign({}, style, { padding: '0 1.75rem 1.75rem 1.75rem' });
            }
            return style;
        };
        AppLandingPage.prototype.getCurrentViewName = function () {
            if (window.matchMedia("(max-width: 320px)").matches) {
                this.props.setViewPort(Models_28.ViewPortEnum.Mobile);
            }
            else if (window.matchMedia("(max-width: 480px)").matches) {
                this.props.setViewPort(Models_28.ViewPortEnum.Tablet);
            }
            else if (window.matchMedia("(max-width: 767px)").matches) {
                this.props.setViewPort(Models_28.ViewPortEnum.WideTablet);
            }
            else {
                this.props.setViewPort(Models_28.ViewPortEnum.Desktop);
            }
        };
        AppLandingPage.prototype.attachKeyboardEvents = function () {
            var self = this;
            AppLandingPage.landingPageDomEl.addEventListener('keydown', function (e) {
                self.setShortCutKeys(e);
            });
        };
        AppLandingPage.prototype.deattachKeyboardEvents = function () {
            var self = this;
            AppLandingPage.landingPageDomEl.removeEventListener('keydown', function (e) {
                self.setShortCutKeys(e);
            });
        };
        AppLandingPage.prototype.componentDidMount = function () {
            var self = this;
            AppLandingPage.landingPageDomEl = document.getElementById('AppLandingPage');
            AppLandingPage.landingPageContentContainerDomEl = document.getElementById('AppLandingPageContentContainer');
            AppLandingPage.searchTextDomEl = document.getElementById('app-search-input');
            AppLandingPage.searchAndCommandBarDomEl = document.getElementById('SearchAndCommandBar');
            AppLandingPage.filterBtnDomEl = document.getElementById('app-filter-button');
            AppLandingPage.createNewBtntDomEl = document.getElementById('app-create-new-app-button');
            AppLandingPage.refreshBtnDomEl = document.getElementById('app-refresh-button');
            AppLandingPage.filterSidebarDomEl = document.getElementById('app-filter-sideNavBar');
            AppLandingPage.manageRolDomEl = document.getElementById('app-manage-role-flyout');
            self.getCurrentViewName();
            window.addEventListener("resize", function (e) {
                self.getCurrentViewName();
            });
            self.attachKeyboardEvents();
            this.stopwatch.stop();
            localStorage.setItem("AppModuleLandingPage_SnapshotTime", this.stopwatch.elapsedMilliseconds.toString());
        };
        AppLandingPage.prototype.componentWillUnmount = function () {
            var self = this;
            window.removeEventListener("resize", function (e) {
                self.getCurrentViewName();
            });
            self.deattachKeyboardEvents();
        };
        AppLandingPage.prototype.componentWillMount = function () {
            this.getCurrentViewName();
        };
        AppLandingPage.prototype.componentWillUpdate = function () {
            this.getCurrentViewName();
        };
        return AppLandingPage;
    }(React.Component));
    exports.AppLandingPage = AppLandingPage;
    var mapStateToProps = function (state) { return ({
        publishedAppList: Selectors_1.filteredPublishedApps(state),
        unPublishedAppList: Selectors_1.filteredUnPublishedApps(state),
        localizedStrings: state.localizedStrings,
        isFilterApplied: (state.filters.clientType != []) && (state.filters.searchText != undefined) && (state.filters.searchText != ""),
        isPublishedVisible: state.componentStates.isPublishedSectionVisible,
        isUnPublishedVisible: state.componentStates.isUnPublishedSectionVisible,
        userData: state.userData,
        initailizationErrorState: state.initailizationErrorState,
        viewPort: state.viewPort.viewPortType
    }); };
    var mapDispatchToProps = function (dispatch) { return ({
        togglePublishedVisibility: function () {
            dispatch(Actions_15.toggleComponentVisibility(Models_28.ComponentTypes.PublishAppsSection));
        },
        toggleUnPublishedVisibility: function () {
            dispatch(Actions_15.toggleComponentVisibility(Models_28.ComponentTypes.UnpublishedAppsSection));
        },
        setViewPort: function (viewPort) {
            dispatch(Actions_15.setViewPortAction(viewPort));
        }
    }); };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_21.connect(mapStateToProps, mapDispatchToProps, null)(AppLandingPage);
});
define("src/Components/CreateNewAppTile", ["require", "exports", "react", "src/Utils/Styler", "src/Models", "src/DataServiceUtility", "src/Constants"], function (require, exports, React, Styler_29, Models_29, DataServiceUtility_16, Constants_8) {
    "use strict";
    var CreateNewAppTile = (function (_super) {
        __extends(CreateNewAppTile, _super);
        function CreateNewAppTile() {
            _super.call(this);
            this.state = {
                isHovered: false
            };
        }
        CreateNewAppTile.prototype.render = function () {
            var _this = this;
            var self = this;
            var toolTip = this.props.localizedStrings[Constants_8.LS_CREATE_NEW_APP_BUTTON_TOOLTIP];
            var titleContainer = React.createElement("div", {style: this.computeAppTileHeaderStyle(), className: "landing-page-overflow-handling"}, 
                React.createElement("label", null, this.props.localizedStrings[Constants_8.LS_CREATE_NEW_APP])
            );
            var plusIconContainer = React.createElement("div", {style: this.computePlusIconContainer()}, 
                React.createElement("div", {id: "no-apps-created-button", className: "mscrm-glyph-PlusIcon", style: this.computePlusFontIcon()})
            );
            var linkContainer = React.createElement("div", {style: this.computeLinkStyle(), className: "landing-page-overflow-handling"}, 
                React.createElement("label", null, this.props.localizedStrings[Constants_8.LS_APP_DESIGNER]), 
                React.createElement("div", {id: "no-apps-AppDesigner-button", className: "mscrm-glyph-AppDesignerIcon", style: this.computeFontIconStyle()}));
            var largeTile = React.createElement("div", {tabIndex: 1, name: "CreateNewAppTile", id: this.getTileId(this.props.sectionIndex, this.props.index), role: "button", "aria-label": this.props.localizedStrings[Constants_8.LS_CREATE_NEW_APP], title: toolTip, onKeyDown: function (e) { return _this.keyDownHandlers(e); }, onClick: function () { return _this.openDesigner(); }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }, onMouseOver: function () { return _this.setTileHoverState(); }, style: self.computeStyle()}, 
                titleContainer, 
                plusIconContainer, 
                linkContainer);
            var smallTile = React.createElement("div", {tabIndex: 1, name: "CreateNewAppTile", id: this.getTileId(this.props.sectionIndex, this.props.index), role: "button", "aria-label": this.props.localizedStrings[Constants_8.LS_CREATE_NEW_APP], title: toolTip, onKeyDown: function (e) { return _this.keyDownHandlers(e); }, onClick: function () { return _this.openDesigner(); }, onMouseEnter: function () { return _this.setState({ isHovered: true }); }, onMouseLeave: function () { return _this.setState({ isHovered: false }); }, onMouseOver: function () { return _this.setTileHoverState(); }, style: self.computeStyle()}, 
                React.createElement("div", {style: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '5rem', height: '100%' }}, plusIconContainer), 
                React.createElement("div", {style: { width: 'calc(100% - 5rem)', height: '100%', padding: '1rem 0.75rem' }}, 
                    titleContainer, 
                    linkContainer));
            var appTile = this.props.viewPort <= Models_29.ViewPortEnum.Tablet ? smallTile : largeTile;
            return (appTile);
        };
        CreateNewAppTile.prototype.getTileId = function (sectionIndex, index) {
            return ("AppModuleTileSec_" + sectionIndex + "_Item_" + index);
        };
        CreateNewAppTile.prototype.computeFontIconStyle = function () {
            var style = Styler_29.Styler.CreateNewAppTile.AppDesignerFontIcon;
            if (this.props.isRTL) {
                style = Object.assign({}, style, { transform: 'scaleX(-1)' });
            }
            return style;
        };
        CreateNewAppTile.prototype.computePlusFontIcon = function () {
            var style = Styler_29.Styler.CreateNewAppTile.PlusFontIcon;
            if (this.props.viewPort <= Models_29.ViewPortEnum.Tablet) {
                style = Styler_29.Styler.CreateNewAppTile.SmallPlusFontIcon;
            }
            return style;
        };
        CreateNewAppTile.prototype.computePlusIconContainer = function () {
            var style = Styler_29.Styler.CreateNewAppTile.PlusFontIconContainer;
            if (this.props.viewPort <= Models_29.ViewPortEnum.Tablet) {
                style = Styler_29.Styler.CreateNewAppTile.SmallPlusFontIconContainer;
            }
            return style;
        };
        CreateNewAppTile.prototype.computeAppTileHeaderStyle = function () {
            var style = Styler_29.Styler.CreateNewAppTile.NoAppTileHeader;
            if (this.props.viewPort <= Models_29.ViewPortEnum.Tablet) {
                style = Object.assign({}, Styler_29.Styler.CreateNewAppTile.NoAppTileHeader, { fontSize: '1rem', lineHeight: '1.2' });
            }
            return style;
        };
        CreateNewAppTile.prototype.computeLinkStyle = function () {
            var style = Styler_29.Styler.CreateNewAppTile.FooterText;
            if (this.props.viewPort <= Models_29.ViewPortEnum.Tablet) {
                style = Object.assign({}, Styler_29.Styler.CreateNewAppTile.FooterText, { fontSize: '1rem', lineHeight: '1.2' });
            }
            return style;
        };
        CreateNewAppTile.prototype.keyDownHandlers = function (e) {
            if (e.keyCode == Models_29.KeyCodeEnum.SpaceKey || e.keyCode == Models_29.KeyCodeEnum.EnterKey)
                this.openDesigner();
            else if (!this.props.isNoAppSection)
                this.props.shiftFocusOnArrows(e);
        };
        CreateNewAppTile.prototype.openDesigner = function () {
            var domainName = DataServiceUtility_16.GetDomainName();
            var orgName = DataServiceUtility_16.GetOrgName();
            var solutionID = "fd140aaf-4df4-11dd-bd17-0019b9312238";
            var url = orgName + "/Designer/App/" + solutionID;
            window.open(url);
        };
        CreateNewAppTile.prototype.computeStyle = function () {
            var style = this.props.viewPort <= Models_29.ViewPortEnum.Tablet ? Styler_29.Styler.CreateNewAppTile.NoAppSmallTile : Styler_29.Styler.CreateNewAppTile.NoAppTile;
            if (this.props.isRTL)
                style = Object.assign({}, style, { marginLeft: style.marginRight, marginRight: style.marginLeft });
            if (this.state.isHovered)
                style = Object.assign({}, style, { border: '1px solid #666666', backgroundColor: '#e2e2e2', boxShadow: '1px 1px 20px 0px rgba(102,102,102,1)' });
            return style;
        };
        CreateNewAppTile.prototype.setTileHoverState = function () {
            if (!this.state.isHovered) {
                this.setState({
                    isHovered: true
                });
            }
        };
        return CreateNewAppTile;
    }(React.Component));
    exports.CreateNewAppTile = CreateNewAppTile;
});
define("src/Reducer", ["require", "exports", 'redux-actions', "src/Models", "src/Actions"], function (require, exports, redux_actions_2, Models_30, actions_1) {
    "use strict";
    var initialAppListState = { list: [] };
    var initialRolesListState = new Models_30.RolesList();
    var initialRoleState = { isCopy: false };
    var initialErrorState = { isError: false };
    var initialLocalizedStringState = {};
    var initialViewPortState = { viewPortType: Models_30.ViewPortEnum.Desktop };
    var initialAppFiltersState = { searchText: "", clientType: [] };
    var initailEllipsisFlyoutState = { showEllipsisFlyout: false };
    var initialComponentStatesState = { isPublishedSectionVisible: true, isUnPublishedSectionVisible: true, isManageRolesSideNavbarVisible: false, isFilterSideNavbarVisible: false };
    var initialCurrentAppManageRolesData = {
        currentApp: null,
        parentEllipsisID: null,
        appSelectedRoles: {}
    };
    var initialOverlayDialogState = { overlayText: "", isOverlayVisible: false };
    var initialLandingPageDialogState = { dialogTitle: "", dialogMessage: "", isDialogVisible: false, postFocusElement: "" };
    var initailManageRolesErrorData = { errorString: "" };
    exports.ellipsisFlyoutState = redux_actions_2.handleActions((_a = {},
        _a[actions_1.SHOW_ELLIPSIS_FLYOUT] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _a[actions_1.HIDE_ELLIPSIS_FLYOUT] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _a
    ), initailEllipsisFlyoutState);
    exports.manageRolesErrorData = redux_actions_2.handleActions((_b = {},
        _b[actions_1.SET_MANAGE_ROLES_ERROR_DATA] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _b
    ), initailManageRolesErrorData);
    exports.userData = redux_actions_2.handleActions((_c = {},
        _c[actions_1.ADD_USER_DATA] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _c
    ), {});
    exports.currentAppManageRolesData = redux_actions_2.handleActions((_d = {},
        _d[actions_1.SET_CURRENT_APP_MANAGE_ROLE_DATA] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _d
    ), initialCurrentAppManageRolesData);
    exports.publishedApps = redux_actions_2.handleActions((_e = {},
        _e[actions_1.ADD_PUBLISHED_APPS] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _e
    ), initialAppListState);
    exports.allRoles = redux_actions_2.handleActions((_f = {},
        _f[actions_1.ADD_ROLES] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _f
    ), initialRolesListState);
    exports.roleState = redux_actions_2.handleActions((_g = {},
        _g[actions_1.ROLE_STATE] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _g
    ), initialRoleState);
    exports.initailizationErrorState = redux_actions_2.handleActions((_h = {},
        _h[actions_1.ERROR_STATE] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _h
    ), initialErrorState);
    exports.unPublishedApps = redux_actions_2.handleActions((_j = {},
        _j[actions_1.ADD_UNPUBLISHED_APPS] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _j
    ), initialAppListState);
    exports.localizedStrings = redux_actions_2.handleActions((_k = {},
        _k[actions_1.ADD_LOCALIZED_STRINGS] = function (state, action) {
            return Object.freeze(action.payload);
        },
        _k
    ), initialLocalizedStringState);
    exports.viewPort = redux_actions_2.handleActions((_l = {},
        _l[actions_1.SET_VIEW_PORT] = function (state, action) {
            return Object.freeze(action.payload);
        },
        _l
    ), initialViewPortState);
    exports.filters = redux_actions_2.handleActions((_m = {},
        _m[actions_1.INITIALIZE_CLIENT_FILTERS_STATES] = function (state, action) {
            var newObj = Object.assign({}, state, action.payload);
            return Object.freeze(newObj);
        },
        _m[actions_1.ADD_SEARCH_TEXT_FILTER] = function (state, action) {
            var newObj = Object.assign({}, state, action.payload);
            return Object.freeze(newObj);
        },
        _m[actions_1.CLEAR_SEARCH_TEXT_FILTER] = function (state, action) {
            var newObj = Object.assign({}, state, action.payload);
            return Object.freeze(newObj);
        },
        _m[actions_1.TOGGLE_CLIENT_TYPE_FILTER] = function (state, action) {
            var clientTypeFilters = state.clientType == null ? [] : state.clientType.slice();
            var index = clientTypeFilters.indexOf(action.payload);
            if (index != -1) {
                clientTypeFilters.splice(index, 1);
            }
            else {
                clientTypeFilters.push(action.payload);
            }
            var newObj = Object.assign({}, state, { clientType: clientTypeFilters });
            return Object.freeze(newObj);
        },
        _m
    ), initialAppFiltersState);
    exports.componentStates = redux_actions_2.handleActions((_o = {},
        _o[actions_1.INITIALIZE_COMPONENT_STATES] = function (state, action) {
            var newObj = Object.assign({}, state, action.payload);
            return Object.freeze(newObj);
        },
        _o[actions_1.TOGGLE_COMPONENT_VISIBILITY] = function (state, action) {
            var payload = {};
            switch (action.payload) {
                case Models_30.ComponentTypes.PublishAppsSection:
                    payload = { isPublishedSectionVisible: !state.isPublishedSectionVisible };
                    break;
                case Models_30.ComponentTypes.UnpublishedAppsSection:
                    payload = { isUnPublishedSectionVisible: !state.isUnPublishedSectionVisible };
                    break;
                case Models_30.ComponentTypes.FilterSideNavbar:
                    payload = { isFilterSideNavbarVisible: !state.isFilterSideNavbarVisible };
                    break;
                case Models_30.ComponentTypes.ManageRolesSideNavbar:
                    payload = { isManageRolesSideNavbarVisible: !state.isManageRolesSideNavbarVisible };
                    break;
            }
            var newObj = Object.assign({}, state, payload);
            return Object.freeze(newObj);
        },
        _o
    ), initialComponentStatesState);
    exports.overlayDialogState = redux_actions_2.handleActions((_p = {},
        _p[actions_1.HIDE_OVERLAY_DIALOG] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _p[actions_1.SHOW_OVERLAY_DIALOG] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _p
    ), initialOverlayDialogState);
    exports.landingPageDialogState = redux_actions_2.handleActions((_q = {},
        _q[actions_1.HIDE_LANDING_PAGE_DIALOG] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _q[actions_1.SHOW_LANDING_PAGE_DIALOG] = function (state, action) {
            var newObj = Object.assign({}, action.payload);
            return Object.freeze(newObj);
        },
        _q
    ), initialLandingPageDialogState);
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
});
define("src/Utils/Privilege", ["require", "exports"], function (require, exports) {
    "use strict";
    (function (PrivilegeDepth) {
        PrivilegeDepth[PrivilegeDepth["None"] = -1] = "None";
        PrivilegeDepth[PrivilegeDepth["Basic"] = 0] = "Basic";
        PrivilegeDepth[PrivilegeDepth["Local"] = 1] = "Local";
        PrivilegeDepth[PrivilegeDepth["Deep"] = 2] = "Deep";
        PrivilegeDepth[PrivilegeDepth["Global"] = 3] = "Global";
    })(exports.PrivilegeDepth || (exports.PrivilegeDepth = {}));
    var PrivilegeDepth = exports.PrivilegeDepth;
    var PrivilegeType = (function () {
        function PrivilegeType() {
        }
        PrivilegeType.PublishCustomization = "b5360d1d-733e-4127-a267-0559e098380d";
        PrivilegeType.ReadEntity = "a3311f47-2134-44ee-a258-6774018d4bc3";
        PrivilegeType.WriteEntity = "2a4e96d7-7bf9-4578-9d4e-1e494c33c1bf";
        PrivilegeType.ReadAttribute = "b8caea5d-f379-4295-aa59-38adeb73e853";
        PrivilegeType.WriteAttribute = "6fa055d5-e524-4eed-a48e-8af713f83ff4";
        PrivilegeType.ReadRelationship = "aa38bf03-556f-418e-ae55-a3e8fbbc0f2d";
        PrivilegeType.WriteRelationship = "92c5f167-3b51-40fe-bfdf-dbf9fd94706d";
        PrivilegeType.ReadQuery = "902d70d3-2ff8-4d93-92f9-8efdcf889af8";
        PrivilegeType.WriteQuery = "ece4c21d-060a-4e86-982b-f97410ca5f71";
        PrivilegeType.ReadOptionSet = "e3f45b8e-4872-4bb5-8b84-01ee8f9c9da1";
        PrivilegeType.WriteOptionSet = "2493b394-f9d7-4604-a6cb-13e1f240450d";
        PrivilegeType.ReadCustomization = "7bb3b531-ac45-4977-89c8-b99768e55ab8";
        PrivilegeType.WriteCustomization = "e7a46107-f750-47a0-add6-2ae60c3fe413";
        PrivilegeType.ReadAppModule = "cad9c968-cb81-444d-873a-e91b88f345eb";
        PrivilegeType.CreateAppModule = "01d18a13-9038-4756-8650-9bd29530e516";
        PrivilegeType.WriteAppModule = "d67cf867-f31a-426f-9cf4-1f642c0a3055";
        PrivilegeType.ReadWebResource = "4156db68-93e2-4a83-8cbb-5bb344ebaf47";
        PrivilegeType.ReadPublisher = "8cdebade-6187-440d-b041-5b3f3d84db53";
        PrivilegeType.ReadSolution = "b64e92c8-5d2a-4052-a026-1b73eff9cebf";
        return PrivilegeType;
    }());
    exports.PrivilegeType = PrivilegeType;
    var SYSTEM_ADMINISTRATOR = "System Administrator";
    var APP_DESIGNER_FCB = "FCB.AppDesigner";
    function getPrivilege(privilegeID, privilegeDepth, userContext) {
        var userPrivileges = userContext.RolePrivileges;
        var foundPrivilege = userPrivileges.filter(function (userPrivilege) {
            return userPrivilege.PrivilegeId == privilegeID;
        })[0];
        return (foundPrivilege != undefined && foundPrivilege.Depth >= privilegeDepth);
    }
    exports.getPrivilege = getPrivilege;
    function checkPublishPrivileges(userContext) {
        return (
        // Publish Customization Privilege
        getPrivilege(PrivilegeType.PublishCustomization, PrivilegeDepth.Global, userContext) &&
            //Entity Privilege
            getPrivilege(PrivilegeType.ReadEntity, PrivilegeDepth.Global, userContext) &&
            getPrivilege(PrivilegeType.WriteEntity, PrivilegeDepth.Global, userContext) &&
            // Attribute Privilege
            getPrivilege(PrivilegeType.ReadAttribute, PrivilegeDepth.Global, userContext) &&
            getPrivilege(PrivilegeType.WriteAttribute, PrivilegeDepth.Global, userContext) &&
            // Relationship Privilege
            getPrivilege(PrivilegeType.ReadRelationship, PrivilegeDepth.Global, userContext) &&
            getPrivilege(PrivilegeType.WriteRelationship, PrivilegeDepth.Global, userContext) &&
            // Form Privilege
            getPrivilege(PrivilegeType.ReadCustomization, PrivilegeDepth.Global, userContext) &&
            getPrivilege(PrivilegeType.WriteCustomization, PrivilegeDepth.Global, userContext) &&
            // View Privilege
            getPrivilege(PrivilegeType.ReadQuery, PrivilegeDepth.Global, userContext) &&
            getPrivilege(PrivilegeType.WriteQuery, PrivilegeDepth.Global, userContext) &&
            // optionset
            getPrivilege(PrivilegeType.ReadOptionSet, PrivilegeDepth.Global, userContext) &&
            getPrivilege(PrivilegeType.WriteOptionSet, PrivilegeDepth.Global, userContext));
    }
    exports.checkPublishPrivileges = checkPublishPrivileges;
    function checkAppModuleAdminPrivilege(userContext) {
        return (
        // AppModule CRU
        getPrivilege(PrivilegeType.CreateAppModule, PrivilegeDepth.Basic, userContext) &&
            getPrivilege(PrivilegeType.ReadAppModule, PrivilegeDepth.Basic, userContext) &&
            getPrivilege(PrivilegeType.WriteAppModule, PrivilegeDepth.Basic, userContext));
    }
    exports.checkAppModuleAdminPrivilege = checkAppModuleAdminPrivilege;
    function hasAccesstoWebResource(userContext) {
        return getPrivilege(PrivilegeType.ReadWebResource, PrivilegeDepth.Basic, userContext);
    }
    exports.hasAccesstoWebResource = hasAccesstoWebResource;
    function hasReadPrivilegeForSolutionAndPublisherEntity(userContext) {
        return (getPrivilege(PrivilegeType.ReadPublisher, PrivilegeDepth.Basic, userContext) &&
            getPrivilege(PrivilegeType.ReadSolution, PrivilegeDepth.Basic, userContext));
    }
    exports.hasReadPrivilegeForSolutionAndPublisherEntity = hasReadPrivilegeForSolutionAndPublisherEntity;
    function hasAppModuleReadPrivilege(userContext) {
        return getPrivilege(PrivilegeType.ReadAppModule, PrivilegeDepth.Basic, userContext);
    }
    exports.hasAppModuleReadPrivilege = hasAppModuleReadPrivilege;
    function checkAdminPrivilege(userContext) {
        var userRoles = userContext.RoleNames;
        var adminUserRole = userRoles.filter(function (userRole) {
            return userRole == SYSTEM_ADMINISTRATOR;
        })[0];
        return (adminUserRole != undefined);
    }
    exports.checkAdminPrivilege = checkAdminPrivilege;
    function checkFCBforDesigner(userContext) {
        var currentFCBContext = userContext.FCBContext;
        var designerFCB = currentFCBContext.filter(function (currentFCBContextObject) {
            return currentFCBContextObject.FeatureControlBitName == APP_DESIGNER_FCB;
        })[0];
        return (designerFCB == undefined || designerFCB.Value == true);
    }
    exports.checkFCBforDesigner = checkFCBforDesigner;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
});
define("src/Utils/UserContext", ["require", "exports", "src/Utils/Privilege"], function (require, exports, PrivilegeUtil) {
    "use strict";
    (function (rtlLanguages) {
        rtlLanguages[rtlLanguages["Hebrew"] = 1037] = "Hebrew";
        rtlLanguages[rtlLanguages["Arabic"] = 1025] = "Arabic";
    })(exports.rtlLanguages || (exports.rtlLanguages = {}));
    var rtlLanguages = exports.rtlLanguages;
    ;
    var UserContext = (function () {
        function UserContext() {
        }
        UserContext.getUserData = function (userContextObject) {
            var userPrivilegeForLandingPage = {
                isSystemAdmin: PrivilegeUtil.checkAdminPrivilege(userContextObject),
                isAppModuleAdmin: PrivilegeUtil.checkAppModuleAdminPrivilege(userContextObject),
                canPublishCustomizations: PrivilegeUtil.checkPublishPrivileges(userContextObject),
                hasAccessToWebResourceEntity: PrivilegeUtil.hasAccesstoWebResource(userContextObject),
                hasReadPrivilegeForSolutionAndPublisherEntity: PrivilegeUtil.hasReadPrivilegeForSolutionAndPublisherEntity(userContextObject),
                hasReadAccessToAppModuleEntity: PrivilegeUtil.hasAppModuleReadPrivilege(userContextObject)
            };
            var userData = {
                userContext: userContextObject,
                landingPagePrivileges: userPrivilegeForLandingPage,
                isDesignerFCBenabled: PrivilegeUtil.checkFCBforDesigner(userContextObject),
                isRTL: UserContext.checkIfRTL(userContextObject)
            };
            return userData;
        };
        UserContext.checkIfRTL = function (userContextObject) {
            return (UserContext.rtlLangList.indexOf(userContextObject.UserSettings.LanguageId) >= 0);
        };
        UserContext.rtlLangList = [rtlLanguages.Hebrew, rtlLanguages.Arabic];
        return UserContext;
    }());
    exports.UserContext = UserContext;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
});
define("src/Initializer", ["require", "exports", "react", "react-dom", "redux", 'react-redux', "src/Components/AppLandingPage", "src/DataServiceUtility", "src/Reducer", "src/Actions", "src/Models", "src/DataServiceUtility", "src/Utils/UserContext", "src/Utils/RefreshUtil", "src/Constants"], function (require, exports, React, ReactDOM, redux_1, react_redux_22, AppLandingPage_6, DataServiceUtility_17, Reducer_1, Actions, Models_31, DataServiceUtility_18, UserContext_1, RefreshUtil_4, Constants) {
    "use strict";
    var initialState = {};
    var rootReducer = redux_1.combineReducers({
        publishedApps: Reducer_1.publishedApps,
        unPublishedApps: Reducer_1.unPublishedApps,
        localizedStrings: Reducer_1.localizedStrings,
        filters: Reducer_1.filters,
        componentStates: Reducer_1.componentStates,
        allRoles: Reducer_1.allRoles,
        viewPort: Reducer_1.viewPort,
        userData: Reducer_1.userData,
        currentAppManageRolesData: Reducer_1.currentAppManageRolesData,
        overlayDialogState: Reducer_1.overlayDialogState,
        roleState: Reducer_1.roleState,
        initailizationErrorState: Reducer_1.initailizationErrorState,
        landingPageDialogState: Reducer_1.landingPageDialogState,
        manageRolesErrorData: Reducer_1.manageRolesErrorData,
        ellipsisFlyoutState: Reducer_1.ellipsisFlyoutState
    });
    exports.store = redux_1.createStore(rootReducer, initialState);
    var localizedStrs = {};
    function Boot() {
        var orgName = DataServiceUtility_18.GetOrgName();
        var isShim = ((DataServiceUtility_18.GetFormFactor() == Models_31.ClientType.Tablet) || (DataServiceUtility_18.GetFormFactor() == Models_31.ClientType.Tablet)) ? true : false;
        DataServiceUtility_17.RetrieveLocalizedStrings(orgName).then(function (localizedStrsResponse) {
            exports.store.dispatch(Actions.addLocalizedStrings(ParseLocalizeStringsAPIResponse(localizedStrsResponse)));
            DataServiceUtility_17.RetrieveUserContext(orgName).then(function (userContextResponse) {
                var userContextResponse = JSON.parse(userContextResponse.Metadata).UserContext[0];
                var userDataObj = UserContext_1.UserContext.getUserData(userContextResponse);
                exports.store.dispatch(Actions.addUserData(userDataObj));
                // Set dir property of body for RTL
                document.body.dir = 'ltr';
                if (userDataObj.isRTL) {
                    document.body.dir = 'rtl';
                }
                DataServiceUtility_17.RetrieveAppDescriptors(DataServiceUtility_18.GetOrgName()).then(function (appData) {
                    var listOfApps = RefreshUtil_4.refreshAllApps(appData, userDataObj);
                    exports.store.dispatch(Actions.addPublishedApps(listOfApps.publishedApps));
                    exports.store.dispatch(Actions.addUnPublishedApps(listOfApps.unPublishedApps));
                    RenderAppManagmentControl();
                    DataServiceUtility_17.RetrieveRoles(orgName).then(function (rolesData) {
                        //Check if rolesData is empty
                        var roles = new Models_31.RolesList();
                        var rolesArray = rolesData.value;
                        var filteredRoles = filterRoles(rolesArray);
                        var businessUnits = [];
                        DataServiceUtility_18.getBusinessUnit().then(function (businessunits) {
                            for (var _i = 0, _a = businessunits.value; _i < _a.length; _i++) {
                                var bunit = _a[_i];
                                businessUnits.push(bunit);
                            }
                            var _loop_1 = function(role) {
                                var result = businessUnits.filter(function (data) {
                                    return data.businessunitid == role._businessunitid_value;
                                })[0].name;
                                if (result) {
                                    role["businessUnitStr"] = result;
                                }
                                roles.AddRoleToRolesList(new Models_31.Role(role.roleid, role.name, role.businessUnitStr));
                            };
                            for (var _b = 0, filteredRoles_1 = filteredRoles; _b < filteredRoles_1.length; _b++) {
                                var role = filteredRoles_1[_b];
                                _loop_1(role);
                            }
                            exports.store.dispatch(Actions.addRoles(roles));
                            InitializeStoreDefaults();
                        }).catch(function (err) {
                            console.log(err);
                            showGenericErrorDialog();
                        });
                    }).catch(function (err) {
                        console.log(err);
                        showGenericErrorDialog();
                    });
                }).catch(function (err) {
                    console.log(err);
                    exports.store.dispatch(Actions.errorStates(true));
                    showGenericErrorDialog();
                    RenderAppManagmentControl();
                });
            }).catch(function (err) {
                console.log(err);
                exports.store.dispatch(Actions.errorStates(true));
                showGenericErrorDialog();
                RenderAppManagmentControl();
            });
        }).catch(function (err) {
            console.log(err);
            exports.store.dispatch(Actions.errorStates(true));
            exports.store.dispatch(Actions.showLandingPageDialog("Error", "An error has occured.\r\nTry this action again. \
				If the problem continues, check the Microsoft Dynamics CRM Community for solutions or contact your organization's Microsoft Dynamics CRM Administrator. \
				Finally, you can contact Microsoft Support.", null));
            RenderAppManagmentControl();
        });
    }
    function showGenericErrorDialog() {
        exports.store.dispatch(Actions.showLandingPageDialog(localizedStrs[Constants.LS_ERROR_TITLE_GENERIC], localizedStrs[Constants.LS_GENERIC_ERROR], null));
    }
    function filterRoles(roles) {
        return filterBusinessUnit(roles, function (item) {
            return ((item._parentroleid_value == null));
        });
    }
    function filterBusinessUnit(roles, func) {
        var rolesResult = [];
        for (var i = 0; i < roles.length; i++) {
            if (func(roles[i])) {
                rolesResult.push(roles[i]);
            }
        }
        return rolesResult;
    }
    function ParseLocalizeStringsAPIResponse(localizedStrsResponse) {
        var localizedStrsArrStr = JSON.parse(localizedStrsResponse).d;
        var localizedStrsArr = JSON.parse(localizedStrsArrStr);
        for (var i = 0; i < localizedStrsArr.length; i++) {
            localizedStrs[localizedStrsArr[i]["Key"]] = localizedStrsArr[i]["Value"];
        }
        return localizedStrs;
    }
    function InitializeStoreDefaults() {
        exports.store.dispatch(Actions.initializeClientFilters());
        exports.store.dispatch(Actions.initializeComponentStates());
    }
    function RenderAppManagmentControl() {
        ReactDOM.render(React.createElement(react_redux_22.Provider, {store: exports.store}, 
            React.createElement(AppLandingPage_6.default, null)
        ), document.getElementById('content'));
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Boot;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
});
var StopWatch;
(function (StopWatch) {
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
    }());
    StopWatch.Stopwatch = Stopwatch;
})(StopWatch || (StopWatch = {}));
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=AppManagementControl.js.map