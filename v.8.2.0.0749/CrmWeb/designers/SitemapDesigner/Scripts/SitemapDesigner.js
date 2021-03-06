var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var BorderInfo = function() {
                    function BorderInfo(showBorder) {
                        if (showBorder === void 0) showBorder = false;
                        this.showBorder = showBorder
                    }

                    return BorderInfo
                }();
                model.BorderInfo = BorderInfo
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Models = Mscrm.Designers.mscrmSitemapDesigner.model,
                    BorderInfoWrapper = function() {
                        function BorderInfoWrapper() {
                            this.area = new Models.BorderInfo;
                            this.group = new Models.BorderInfo;
                            this.subArea = new Models.BorderInfo
                        }

                        return BorderInfoWrapper
                    }();
                model.BorderInfoWrapper = BorderInfoWrapper
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) { "use strict" })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var DashboardItem = function() {
                    function DashboardItem() {}

                    return DashboardItem
                }();
                model.DashboardItem = DashboardItem
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var LocalizationConstants = function() {
                function LocalizationConstants() {}

                LocalizationConstants.AreaLabel = "SitemapDesigner.Area";
                LocalizationConstants.GroupLabel = "SitemapDesigner.Group";
                LocalizationConstants.SubAreaLabel = "SitemapDesigner.Sub-Area";
                LocalizationConstants.New = "SitemapDesigner.New_Keyword";
                LocalizationConstants.NewArea = "SitemapDesigner.NewArea";
                LocalizationConstants.NewGroup = "SitemapDesigner.NewGroup";
                LocalizationConstants.NewSubArea = "SitemapDesigner.NewSubArea";
                LocalizationConstants.ClonedGroup = "SitemapDesigner.ClonedGroup";
                LocalizationConstants.ClonedArea = "SitemapDesigner.ClonedArea";
                LocalizationConstants.ClonedSubArea = "SitemapDesigner.ClonedSubArea";
                LocalizationConstants.AreaIdAlreadyExists = "SitemapDesigner.Area_Id_Already_Exists";
                LocalizationConstants.GroupIdAlreadyExists = "SitemapDesigner.Group_Id_Already_Exists";
                LocalizationConstants.SubAreaIdAlreadyExists = "SitemapDesigner.SubArea_Id_Already_Exists";
                LocalizationConstants.NotValidUrl = "SitemapDesigner.Not_Valid_Url";
                LocalizationConstants.Copy = "SitemapDesigner.Copy";
                LocalizationConstants.EmptyTitle = "SitemapDesigner.Empty_Title";
                LocalizationConstants.EmptyDesc = "SitemapDesigner.Empty_Description";
                LocalizationConstants.CRM_Brand = "Brand_CRM_Short";
                LocalizationConstants.Error_SubAreaNotFound = "SitemapDesigner.Error_SubAreaNotFound";
                LocalizationConstants.Error_ComponentError = "SitemapDesigner.Error_ComponentError";
                LocalizationConstants.Empty = "SitemapDesigner.Empty";
                LocalizationConstants.SiteMapFailedToLoad = "SitemapDesigner.FailedToLoad";
                LocalizationConstants.Error_DuplicateIdOnDrop = "SitemapDesigner.Error_DuplicateIdOnDrop";
                return LocalizationConstants
            }();
            mscrmSitemapDesigner.LocalizationConstants = LocalizationConstants;
            var ComponentTypes = function() {
                function ComponentTypes() {}

                ComponentTypes.AreaType = "'areaType'";
                ComponentTypes.GroupType = "'groupType'";
                ComponentTypes.SubAreaType = "'subAreaType'";
                ComponentTypes.Area = "Area";
                ComponentTypes.Group = "Group";
                ComponentTypes.SubArea = "Sub-Area";
                return ComponentTypes
            }();
            mscrmSitemapDesigner.ComponentTypes = ComponentTypes;
            var PropertyCategoryTypes = function() {
                function PropertyCategoryTypes() {}

                PropertyCategoryTypes.General = "General";
                PropertyCategoryTypes.Advanced = "Advanced";
                PropertyCategoryTypes.ValueDirective = "ValueDirective";
                return PropertyCategoryTypes
            }();
            mscrmSitemapDesigner.PropertyCategoryTypes = PropertyCategoryTypes;
            (function(NodeTypes) {
                NodeTypes[NodeTypes["Area"] = 0] = "Area";
                NodeTypes[NodeTypes["Client"] = 1] = "Client";
                NodeTypes[NodeTypes["Description"] = 2] = "Description";
                NodeTypes[NodeTypes["DashBoard"] = 3] = "DashBoard";
                NodeTypes[NodeTypes["DefaultDashboard"] = 4] = "DefaultDashboard";
                NodeTypes[NodeTypes["Entity"] = 5] = "Entity";
                NodeTypes[NodeTypes["Group"] = 6] = "Group";
                NodeTypes[NodeTypes["Icon"] = 7] = "Icon";
                NodeTypes[NodeTypes["Id"] = 8] = "Id";
                NodeTypes[NodeTypes["SubArea"] = 9] = "SubArea";
                NodeTypes[NodeTypes["Sku"] = 10] = "Sku";
                NodeTypes[NodeTypes["Title"] = 11] = "Title";
                NodeTypes[NodeTypes["Type"] = 12] = "Type";
                NodeTypes[NodeTypes["Url"] = 13] = "Url";
                NodeTypes[NodeTypes["URL"] = 14] = "URL";
                NodeTypes[NodeTypes["WebResources"] = 15] = "WebResources";
                NodeTypes[NodeTypes["OutlookShortcutIcon"] = 16] = "OutlookShortcutIcon";
                NodeTypes[NodeTypes["Privilege"] = 17] = "Privilege";
                NodeTypes[NodeTypes["SelectSubArea"] = 18] = "SelectSubArea";
                NodeTypes[NodeTypes["PassParams"] = 19] = "PassParams"
            })(mscrmSitemapDesigner.NodeTypes || (mscrmSitemapDesigner.NodeTypes = {}));
            var NodeTypes = mscrmSitemapDesigner.NodeTypes,
                ShortcutKeysConstants = function() {
                    function ShortcutKeysConstants() {}

                    Object.defineProperty(ShortcutKeysConstants,
                        "SaveKeyCode",
                        { "get": function() { return "CTRL+S" }, enumerable: true, configurable: true });
                    Object.defineProperty(ShortcutKeysConstants,
                        "SaveAndCloseKeyCode",
                        { "get": function() { return "CTRL+ALT+S" }, enumerable: true, configurable: true });
                    Object.defineProperty(ShortcutKeysConstants,
                        "PublishKeyCode",
                        { "get": function() { return "CTRL+ALT+P" }, enumerable: true, configurable: true });
                    Object.defineProperty(ShortcutKeysConstants,
                        "DeleteKeyCode",
                        { "get": function() { return "DEL" }, enumerable: true, configurable: true });
                    Object.defineProperty(ShortcutKeysConstants,
                        "CloneKeyCode",
                        { "get": function() { return "Ctrl+C" }, enumerable: true, configurable: true });
                    Object.defineProperty(ShortcutKeysConstants,
                        "AddFlyoutKeyCode",
                        { "get": function() { return "Ctrl+Alt+N" }, enumerable: true, configurable: true });
                    Object.defineProperty(ShortcutKeysConstants,
                        "AddFlyoutCloseKeyCode",
                        { "get": function() { return "ESC" }, enumerable: true, configurable: true });
                    return ShortcutKeysConstants
                }();
            mscrmSitemapDesigner.ShortcutKeysConstants = ShortcutKeysConstants;
            var SiteMapConstants = function() {
                function SiteMapConstants() {}

                SiteMapConstants.SitemapShowPropertiesPane = "sitemapShowPropertiesPane";
                SiteMapConstants.ToogleButtonStatus = "toggleButtonStatus";
                SiteMapConstants.SitemapDeletion = "sitemapDeletion";
                SiteMapConstants.AreaSelected = "AreaSelected";
                SiteMapConstants.GroupSelected = "GroupSelected";
                SiteMapConstants.SubAreaSelected = "SubAreaSelected";
                SiteMapConstants.Area = "Area";
                SiteMapConstants.Group = "Group";
                SiteMapConstants.SubArea = "SubArea";
                SiteMapConstants.DefaultSiteMapColumn = "defaultcrmcustomname";
                SiteMapConstants.NewAreaPrefix = "NewArea_";
                SiteMapConstants.NewGroupPrefix = "NewGroup_";
                SiteMapConstants.NewSubAreaPrefix = "NewSubArea_";
                SiteMapConstants.SelectSubAreaType = "SelectSubArea";
                SiteMapConstants.SubAreaPropertyPassParams = "PassParams";
                SiteMapConstants.SubAreaPropertyUrl = "Url";
                SiteMapConstants.Comma = ",";
                SiteMapConstants.ComponentNameBlankValue = "(empty)";
                SiteMapConstants.UrlListIndex = 0;
                SiteMapConstants.IconListIndex = 1;
                SiteMapConstants.IconMapIndex = 2;
                SiteMapConstants.ComponentNameSeparator = " -> ";
                SiteMapConstants.OpenRoundBracket = "(";
                SiteMapConstants.CloseRoundBracket = ")";
                SiteMapConstants.SitemapShowUnsupportedMessage = "sitemapShowUnsupportedMessage";
                SiteMapConstants.Left = "left";
                SiteMapConstants.Right = "right";
                SiteMapConstants.Swing = "swing";
                SiteMapConstants.AreaNode = "area";
                SiteMapConstants.GroupNode = "group";
                return SiteMapConstants
            }();
            mscrmSitemapDesigner.SiteMapConstants = SiteMapConstants;
            (function(SitemapState) {
                SitemapState[SitemapState["Published"] = 0] = "Published";
                SitemapState[SitemapState["Draft"] = 1] = "Draft"
            })(mscrmSitemapDesigner.SitemapState || (mscrmSitemapDesigner.SitemapState = {}));
            var SitemapState = mscrmSitemapDesigner.SitemapState,
                ComponentState = function() {
                    function ComponentState() {}

                    ComponentState.GetComponentState = function(status) {
                        switch (status) {
                        case SitemapState.Published:
                            return "SitemapDesigner.Published";
                        case SitemapState.Draft:
                            return "SitemapDesigner.Draft"
                        }
                    };
                    return ComponentState
                }();
            mscrmSitemapDesigner.ComponentState = ComponentState;
            var SubAreaConstants = function() {
                function SubAreaConstants() {}

                SubAreaConstants.maxSubAreaWidth = 180;
                SubAreaConstants.maxSubArea = 6;
                SubAreaConstants.defaultMinWidth = 80;
                SubAreaConstants.px = "px";
                SubAreaConstants.WebSourcePrefix = "$webresource:";
                SubAreaConstants.DashboardResourceId = "Homepage_Dashboards";
                SubAreaConstants.DashboardDescription = "Dashboards_Description";
                SubAreaConstants.DashboardTooltip = "Dashboards_ToolTip";
                return SubAreaConstants
            }();
            mscrmSitemapDesigner.SubAreaConstants = SubAreaConstants;
            var AreaNodeConstants = function() {
                function AreaNodeConstants() {}

                AreaNodeConstants.AreaSalesNode = "Area_Sales";
                AreaNodeConstants.AreaServiceNode = "Area_Service";
                AreaNodeConstants.AreaMarketingNode = "Area_Marketing";
                AreaNodeConstants.AreaSettingsNode = "Area_Settings";
                AreaNodeConstants.AreaHelpNode = "Area_Help";
                return AreaNodeConstants
            }();
            mscrmSitemapDesigner.AreaNodeConstants = AreaNodeConstants;
            var SitemapDesignerScenarios = function() {
                function SitemapDesignerScenarios() {}

                Object.defineProperty(SitemapDesignerScenarios,
                    "PublishSitemap",
                    { "get": function() { return "PublishSitemap" }, enumerable: true, configurable: true });
                Object.defineProperty(SitemapDesignerScenarios,
                    "SaveSitemap",
                    { "get": function() { return "SaveSitemap" }, enumerable: true, configurable: true });
                Object.defineProperty(SitemapDesignerScenarios,
                    "RetrieveSitemap",
                    { "get": function() { return "RetrieveSitemap" }, enumerable: true, configurable: true });
                Object.defineProperty(SitemapDesignerScenarios,
                    "CreateNewSitemap",
                    { "get": function() { return "CreateNewSitemap" }, enumerable: true, configurable: true });
                Object.defineProperty(SitemapDesignerScenarios,
                    "SaveAndCloseSitemap",
                    { "get": function() { return "SaveAndCloseSitemap" }, enumerable: true, configurable: true });
                Object.defineProperty(SitemapDesignerScenarios,
                    "LoadPropertiesPaneData",
                    { "get": function() { return "LoadPropertiesPaneData" }, enumerable: true, configurable: true });
                Object.defineProperty(SitemapDesignerScenarios,
                    "GetEntityList",
                    { "get": function() { return "GetEntityList" }, enumerable: true, configurable: true });
                Object.defineProperty(SitemapDesignerScenarios,
                    "GetWebResourceList",
                    { "get": function() { return "GetWebResourceList" }, enumerable: true, configurable: true });
                return SitemapDesignerScenarios
            }();
            mscrmSitemapDesigner.SitemapDesignerScenarios = SitemapDesignerScenarios;
            var PrivilegeTypes = function() {
                function PrivilegeTypes() {}

                PrivilegeTypes.All = "All";
                PrivilegeTypes.Create = "Create";
                PrivilegeTypes.Read = "Read";
                PrivilegeTypes.Write = "Write";
                PrivilegeTypes.Delete = "Delete";
                PrivilegeTypes.AllowQuickCampaign = "AllowQuickCampaign";
                PrivilegeTypes.UseInternetMarketing = "UseInternetMarketing";
                PrivilegeTypes.Append = "Append";
                PrivilegeTypes.AppendTo = "AppendTo";
                PrivilegeTypes.Share = "Share";
                PrivilegeTypes.Assign = "Assign";
                return PrivilegeTypes
            }();
            mscrmSitemapDesigner.PrivilegeTypes = PrivilegeTypes;
            var ClientOption = function() {
                function ClientOption() {}

                ClientOption.All = "All";
                ClientOption.Outlook = "Outlook";
                ClientOption.OutlookLaptopClient = "OutlookLaptopClient";
                ClientOption.OutlookWorkstationClient = "OutlookWorkstationClient";
                ClientOption.Web = "Web";
                return ClientOption
            }();
            mscrmSitemapDesigner.ClientOption = ClientOption;
            var SkuOptions = function() {
                function SkuOptions() {}

                SkuOptions.All = "All";
                SkuOptions.OnPremise = "OnPremise";
                SkuOptions.Live = "Live";
                SkuOptions.SPLA = "SPLA";
                return SkuOptions
            }();
            mscrmSitemapDesigner.SkuOptions = SkuOptions;
            var DefaultIcons = function() {
                function DefaultIcons() {}

                DefaultIcons.Area = "Area_Default_Icon.png";
                DefaultIcons.SubArea = "Subarea_Default_Icon.png";
                DefaultIcons.WebResourceSubArea = "Subarea_Webresource_Default_Icon.png";
                DefaultIcons.URLSubArea = "Subarea_Webresource_Default_Icon.png";
                return DefaultIcons
            }();
            mscrmSitemapDesigner.DefaultIcons = DefaultIcons
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var ScriptUtilities = Designers.Common.Utility.ScriptUtilities,
                CommonUtility = function() {
                    function CommonUtility() {}

                    CommonUtility.SetUnsupportedComponentMessageVisibility = function(controller, isVisible) {
                        if (!ScriptUtilities.IsNullOrUndefined(controller)) {
                            var commonVariables = !ScriptUtilities.IsNullOrUndefined(controller.commonVariables)
                                ? controller.commonVariables
                                : controller.$scope;
                            ScriptUtilities.IsNullOrUndefined(commonVariables) &&
                                controller.commonVariables.SetUnsupportedComponent(isVisible);
                            !ScriptUtilities.IsNullOrUndefined(controller.$rootScope) &&
                                controller.$rootScope
                                .$broadcast(mscrmSitemapDesigner.SiteMapConstants.SitemapShowUnsupportedMessage,
                                    { unsupportedComponent: isVisible })
                        }
                    };
                    return CommonUtility
                }();
            mscrmSitemapDesigner.CommonUtility = CommonUtility
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var __extends = this && this.__extends ||
        function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

            function __() { this.constructor = d }

            __.prototype = b.prototype;
            d.prototype = new __
        },
    Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var FlyoutManagement = Mscrm.Designers.Common.FlyoutManagement,
                    SiteMapAreaModel = function() {
                        function SiteMapAreaModel() {}

                        return SiteMapAreaModel
                    }();
                model.SiteMapAreaModel = SiteMapAreaModel;
                var SiteMapGroupModel = function() {
                    function SiteMapGroupModel() {}

                    return SiteMapGroupModel
                }();
                model.SiteMapGroupModel = SiteMapGroupModel;
                var SiteMapAddFlyoutModel = function(_super) {
                    __extends(SiteMapAddFlyoutModel, _super);

                    function SiteMapAddFlyoutModel() { _super.apply(this, arguments) }

                    return SiteMapAddFlyoutModel
                }(FlyoutManagement.FlyoutContainer);
                model.SiteMapAddFlyoutModel = SiteMapAddFlyoutModel;
                var SiteMapTypeAheadFlyoutModel = function(_super) {
                    __extends(SiteMapTypeAheadFlyoutModel, _super);

                    function SiteMapTypeAheadFlyoutModel() { _super.apply(this, arguments) }

                    return SiteMapTypeAheadFlyoutModel
                }(FlyoutManagement.FlyoutContainer);
                model.SiteMapTypeAheadFlyoutModel = SiteMapTypeAheadFlyoutModel
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var ComposableContextParam = Mscrm.Designers.Common.Constants.ComposableContextParam,
                    SitemapContext = function() {
                        function SitemapContext(composableContext) {
                            this.composableContext = composableContext;
                            this.sitemapStatus = mscrmSitemapDesigner.SitemapState.Draft;
                            this.OverwriteTime = new Date;
                            this.SiteMapXmlManaged = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.SolutionId = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.SiteMapIdUnique = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.SiteMapXml = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.ComponentState = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.SupportingSolutionId = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.OrganizationId = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.IsAppAware = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.SiteMapGuid = Designers.Common.Guid.EmptyGuid;
                            this.AppName = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.AppUniqueName = Designers.Common.Utility.StringUtilities.EmptyString
                        }

                        Object.defineProperty(SitemapContext.prototype,
                            "AppName",
                            {
                                "get": function() { return this.AppModuleName },
                                "set": function(appName) { this.AppModuleName = appName },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(SitemapContext.prototype,
                            "AppUniqueName",
                            {
                                "get": function() { return this.AppModuleUniqueName },
                                "set": function(appUniqueName) { this.AppModuleUniqueName = appUniqueName },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(SitemapContext.prototype,
                            "SiteMapId",
                            {
                                "get": function() { return this.SiteMapGuid },
                                "set": function(guid) {
                                    this.SiteMapGuid = guid;
                                    this.composableContext
                                        .add(ComposableContextParam.SitemapId, this.SiteMapId.ToString())
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(SitemapContext.prototype,
                            "SitemapStatus",
                            {
                                "get": function() { return this.sitemapStatus },
                                "set": function(status) { this.sitemapStatus = status },
                                enumerable: true,
                                configurable: true
                            });
                        SitemapContext.prototype
                            .GetComposableContextParams = function() { return this.composableContext };
                        SitemapContext.prototype.UpdateComposableItem = function(item) { return true };
                        SitemapContext.prototype.GetAttributes = function() {
                            var attributes = [];
                            this.SiteMapId.ToString() != Designers.Common.Guid.EmptyGuid.ToString() &&
                                attributes.push(new Designers.Common.Models
                                    .AttributeBase(Designers.Common.AppInterface.AppInterfaceConstants.Constants
                                        .SiteMapIdAttribute,
                                        Designers.Common.Models.AttributeType.Guid,
                                        this.SiteMapId.ToString()));
                            attributes.push(new Designers.Common.Models
                                .AttributeBase(Designers.Common.AppInterface.AppInterfaceConstants.Constants
                                    .SiteMapXmlAttribute,
                                    Designers.Common.Models.AttributeType.String,
                                    this.SiteMapXml));
                            !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(this.SolutionId) &&
                                attributes.push(new Designers.Common.Models
                                    .AttributeBase(Designers.Common.AppInterface.AppInterfaceConstants.Constants
                                        .AppSolutionIdAttribute,
                                        Designers.Common.Models.AttributeType.Guid,
                                        this.SolutionId));
                            attributes.push(new Designers.Common.Models
                                .AttributeBase(Designers.Common.AppInterface.AppInterfaceConstants.Constants
                                    .SiteMapIsAppAwareAttribute,
                                    Designers.Common.Models.AttributeType.Boolean,
                                    true));
                            !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(this.AppName) &&
                                attributes.push(new Designers.Common.Models
                                    .AttributeBase(Designers.Common.AppInterface.AppInterfaceConstants.Constants
                                        .SiteMapDisplayNameAttribute,
                                        Designers.Common.Models.AttributeType.String,
                                        this.AppName));
                            !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(this.AppModuleUniqueName) &&
                                attributes.push(new Designers.Common.Models
                                    .AttributeBase(Designers.Common.AppInterface.AppInterfaceConstants.Constants
                                        .SiteMapUniqueNameAttribute,
                                        Designers.Common.Models.AttributeType.String,
                                        this.AppModuleUniqueName));
                            return attributes
                        };
                        return SitemapContext
                    }();
                model.SitemapContext = SitemapContext
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var SitemapSaveTelemetryEvent = function(_super) {
                    __extends(SitemapSaveTelemetryEvent, _super);

                    function SitemapSaveTelemetryEvent(areasCount,
                        groupsPerAreaCount,
                        subAreasperGroupCount,
                        siteMapId,
                        newSiteMapCreated) {
                        _super.call(this, null, SitemapSaveTelemetryEvent.eventName);
                        this.AreasCount = "AreasCount";
                        this.GroupsPerAreaCount = "GroupsPerAreaCount";
                        this.SubAreasPerGroupCount = "SubAreasPerGroupCount";
                        this.SiteMapId = "SitemapId";
                        this.SiteMapLaunchMode = "SiteMapLaunchMode";
                        this.AddEventParameter(this.AreasCount, areasCount);
                        this.AddEventParameter(this.GroupsPerAreaCount, groupsPerAreaCount);
                        this.AddEventParameter(this.SubAreasPerGroupCount, subAreasperGroupCount);
                        this.AddEventParameter(this.SiteMapId, siteMapId);
                        this.AddEventParameter(this.SiteMapLaunchMode,
                            newSiteMapCreated ? "Sitemapcreated" : "Sitemapedited")
                    }

                    SitemapSaveTelemetryEvent.eventName = "SitemapSaveTelemetryEvent";
                    return SitemapSaveTelemetryEvent
                }(Mscrm.Designers.Common.Telemetry.DesignerTelemetryEvent);
                Telemetry.SitemapSaveTelemetryEvent = SitemapSaveTelemetryEvent
            })(Telemetry = mscrmSitemapDesigner.Telemetry || (mscrmSitemapDesigner.Telemetry = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            "use strict";
            var ModuleNames = Mscrm.Designers.Common.Constants.ModuleNames,
                siteMapUrls = Designers.Common.Constants.SiteMapUrls,
                allModules = [
                    "ui.router", "SitemapService", "dndLists", ModuleNames.AccessibilityHelperModule, Mscrm.Designers
                    .Common.Constants.ModuleNames.CommonModule, Mscrm.Designers.Common.Constants.ModuleNames
                    .NGAriaModule
                ],
                allModulesWithoutAccessibility = [
                    "ui.router", "SitemapService", "dndLists", Mscrm.Designers.Common.Constants.ModuleNames.CommonModule
                ],
                ngAriaConfigFunction = function($ariaProvider) {
                    $ariaProvider.config({ bindKeydown: false, tabindex: false })
                },
                isIE10 = window.navigator.userAgent.indexOf("MSIE 10") > 0,
                modules = isIE10 ? allModulesWithoutAccessibility : allModules,
                configFunction = isIE10 ? null : ngAriaConfigFunction;
            mscrmSitemapDesigner.SitemapDesignerModule = angular
                .module("mscrmSitemapDesigner", modules, configFunction);
            mscrmSitemapDesigner.SitemapDesignerModule
                .config([
                    "$stateProvider", "$urlRouterProvider", "$controllerProvider",
                    function($stateProvider, $urlRouterProvider) {
                        $stateProvider.state("SiteMapHome",
                        {
                            url: siteMapUrls.getUrl(siteMapUrls.siteMapHome),
                            templateUrl: "SitemapDesigner/Common/Views/SitemapHome.html?v=8200000749"
                        }).state("SiteMapEdit",
                        {
                            url: siteMapUrls.getUrl(siteMapUrls.siteMapEdit),
                            templateUrl: "SitemapDesigner/Common/Views/SitemapHome.html?v=8200000749"
                        })
                    }
                ])
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Designers.Common.Constants.ServiceNames,
                    StateRouteParams = Designers.Common.Constants.StateRouteParams,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    ComposableContextParam = Mscrm.Designers.Common.Constants.ComposableContextParam,
                    InjectedObjectNames = Designers.Common.Constants.InjectedObjectNames,
                    CommonConstants = Mscrm.Designers.Common.Constants,
                    SitemapDesignerShellController = function() {
                        function SitemapDesignerShellController($scope,
                            $http,
                            dataAccessService,
                            localization,
                            deserializeSitemap,
                            breadcrumbService,
                            traceUtility,
                            composabiityService,
                            perfService,
                            sitemapDesignerPerfKpisService,
                            notificationService,
                            modalDialogService,
                            errorUtilityService,
                            flyoutService,
                            stateParamsService,
                            $rootScope,
                            sessionInfo,
                            commonVariables,
                            mscrmSitemapUtilityService) {
                            var _this = this;
                            this.$scope = $scope;
                            this.$http = $http;
                            this.dataAccessService = dataAccessService;
                            this.localization = localization;
                            this.deserializeSitemap = deserializeSitemap;
                            this.breadcrumbService = breadcrumbService;
                            this.traceUtility = traceUtility;
                            this.composabiityService = composabiityService;
                            this.perfService = perfService;
                            this.sitemapDesignerPerfKpisService = sitemapDesignerPerfKpisService;
                            this.notificationService = notificationService;
                            this.modalDialogService = modalDialogService;
                            this.errorUtilityService = errorUtilityService;
                            this.flyoutService = flyoutService;
                            this.stateParamsService = stateParamsService;
                            this.$rootScope = $rootScope;
                            this.sessionInfo = sessionInfo;
                            this.commonVariables = commonVariables;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.$scope.SiteMap = {};
                            this.$scope.CurrentExpandedAreaId = null;
                            this.$scope.Components = {};
                            this.$scope.$on("$destroy", this.destructor.bind(this));
                            $scope.ComponentList = {
                                components: [
                                    {
                                        label: this.localization
                                            .getResourceString("SitemapDesigner.Component.Area.Name"),
                                        type: "'areaType'",
                                        icon: "mscrm-SitemapAreaIcon mscrm-glyph-SectionsIcon",
                                        description: this.localization
                                            .getResourceString("SitemapDesigner.Component.Area.Description"),
                                        tooltip: this.localization
                                            .getResourceString("SitemapDesigner.Component.Area.Tooltip"),
                                        disabled: function() { return _this.IsTileAreaDisabled() }
                                    }, {
                                        label: this.localization
                                            .getResourceString("SitemapDesigner.Component.Group.Name"),
                                        type: "'groupType'",
                                        icon: "mscrm-SitemapGroupIcon mscrm-glyph-GroupedListIcon",
                                        description: this.localization
                                            .getResourceString("SitemapDesigner.Component.Group.Description"),
                                        tooltip: this.localization
                                            .getResourceString("SitemapDesigner.Component.Group.Tooltip"),
                                        disabled: function() { return _this.IsTileGroupDisabled() }
                                    }, {
                                        label: this.localization
                                            .getResourceString("SitemapDesigner.Component.SubArea.Name"),
                                        type: "'subAreaType'",
                                        icon: "mscrm-SitemapSubAreaIcon mscrm-glyph-GlobeIcon",
                                        description: this.localization
                                            .getResourceString("SitemapDesigner.Component.SubArea.Description"),
                                        tooltip: this.localization
                                            .getResourceString("SitemapDesigner.Component.SubArea.Tooltip"),
                                        disabled: function() { return _this.IsTileSubAreaDisabled() }
                                    }
                                ]
                            };
                            this.onRetrieveFailure = this.onRetrieveFailure.bind(this);
                            this.composableContext = composabiityService
                                .getComposableContext(Designers.Common.Constants.DesignerName.SiteMapDesigner);
                            if (this
                                .composableContext !=
                                undefined) this.comDictionary = this.composableContext.GetComposableContextParams();
                            else if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(stateParamsService[StateRouteParams.SiteMapId])) {
                                this.comDictionary = new Dictionary;
                                this.comDictionary.add(ComposableContextParam.SitemapId,
                                    stateParamsService[StateRouteParams.SiteMapId]);
                                this.comDictionary.add(ComposableContextParam.SolutionId,
                                    this.sessionInfo.solutionID.guidString)
                            } else
                                this.errorUtilityService
                                    .RedirectToErrorHandlerPage(this.localization
                                        .getResourceString("SitemapDesigner.SitemapId"),
                                        Designers.Common.Constants.ErrorCode.MissingDataInUrl)
                        }

                        SitemapDesignerShellController.prototype
                            .destructor = function() {
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.notificationService) &&
                                    this.notificationService.ClearNotificationText()
                            };
                        SitemapDesignerShellController.prototype.loadDefaultSiteMap = function() {
                            var _this = this;
                            this.traceUtility.LogVerbose(Tracing.TraceComponent.SitemapDesigner,
                                "loadDefaultSiteMap",
                                new Mscrm.Designers.Common.Tracing.StringTraceData("Started loading default sitemap"));
                            this.dataAccessService
                                .getSiteMapData(function(response) { _this.onRetrieveSuccess(response, true) },
                                    function(response) { _this.onRetrieveFailure(response) },
                                    this.comDictionary)
                        };
                        SitemapDesignerShellController.prototype.loadSiteMap = function() {
                            var _this = this;
                            this.notificationService.ClearNotificationText();
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.comDictionary)) {
                                this.traceUtility.Scenario = mscrmSitemapDesigner.SitemapDesignerScenarios
                                    .RetrieveSitemap;
                                this.modalDialogService.open(new Designers.Common.ModalDialog
                                    .ProgressDialogParams(this.localization.getResourceString("PageLoadingMessage")));
                                this.dataAccessService
                                    .getSiteMapData(function(response) { _this.onRetrieveSuccess(response, true) },
                                        function(response) { _this.onRetrieveFailure(response) },
                                        this.comDictionary)
                            } else this.loadDefaultSiteMap()
                        };
                        SitemapDesignerShellController.prototype
                            .onRetrieveSuccess = function(response, isODataResponse) {
                                if (isODataResponse === void 0) isODataResponse = false;
                                this.traceUtility.LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                    "onRetrieveSuccess",
                                    new Mscrm.Designers.Common.Tracing
                                    .StringTraceData(CommonConstants.EventStatus.Success +
                                        ": Successfully retrieved info for Sitemap."));
                                var valueSitemap, self = this;
                                if (!isODataResponse) {
                                    var sdkResponse = response;
                                    valueSitemap = sdkResponse.getValue("sitemapxml")
                                } else {
                                    var siteMapData = response["data"]["value"][0];
                                    (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(siteMapData) ||
                                            Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(siteMapData.sitemapid)) &&
                                        this.errorUtilityService
                                        .RedirectToErrorHandlerPage(this.localization
                                            .getResourceString("SitemapDesigner.SitemapId"),
                                            Designers.Common.Constants.ErrorCode.MissingDataInUrl);
                                    valueSitemap = siteMapData.sitemapxml;
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(siteMapData
                                            .sitemapname)) this.$rootScope.appTitle = siteMapData.sitemapname;
                                    else !siteMapData.isappaware && this.SetDefaultSiteMapName();
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(siteMapData.sitemapid))
                                        if (!this.comDictionary.containsKey(ComposableContextParam.AppId)) {
                                            this.dataAccessService
                                                .SetSitemapStatus(siteMapData.componentstate
                                                    ? mscrmSitemapDesigner.SitemapState.Draft
                                                    : mscrmSitemapDesigner.SitemapState.Published);
                                            this.breadcrumbService.PopBreadcrumb();
                                            var sitemapbreadcrump = new Designers.Common.Breadcrumb
                                                .MscrmBreadcrumbItem(this.localization
                                                    .getResourceString("SitemapDesigner.Title"),
                                                    "SiteMapEdit",
                                                    Designers.Common.Constants.DesignerName.SiteMapDesigner);
                                            this.breadcrumbService.PushBreadcrumb(sitemapbreadcrump);
                                            this.breadcrumbService
                                                .Navigate(sitemapbreadcrump,
                                                    { siteMapId: siteMapData.sitemapid },
                                                    { location: "replace" })
                                        } else this.dataAccessService.updateSiteMapContext(siteMapData);
                                    else
                                        this.showErrorNotification(this.localization
                                            .getResourceString("SitemapDesigner.Error_SitemapIdNotFound"),
                                            true)
                                }
                                var _siteMap = valueSitemap.replace(/>(\n|\t|\s)*</g, "><").replace(/\n|\t/g, " ")
                                    .replace(/\s+/g, " ");
                                this.traceUtility.LogVerbose(Tracing.TraceComponent.SitemapDesigner,
                                    "onRetrieveSuccess_preserialize",
                                    new Mscrm.Designers.Common.Tracing
                                    .StringTraceData("Sitemap xml before deserialization : " + _siteMap));
                                var entityMapList = [],
                                    _sitemap = self.deserializeSitemap.DeserializeSiteMapXml(_siteMap, entityMapList);
                                this.traceUtility.LogVerbose(Tracing.TraceComponent.SitemapDesigner,
                                    "onRetrieveSuccess_postserialize",
                                    new Mscrm.Designers.Common.Tracing
                                    .StringTraceData("Sitemap xml after deserialization : " + _siteMap));
                                if (this.mscrmSitemapUtilityService
                                    .IsValidSiteMap) this.$scope.SiteMap = _sitemap.SiteMap[0];
                                else {
                                    this.$scope.SiteMap = null;
                                    this.showErrorNotification(this.localization
                                        .getResourceString(mscrmSitemapDesigner.LocalizationConstants
                                            .SiteMapFailedToLoad),
                                        true)
                                }
                                this.perfService.getStopWatch(this.sitemapDesignerPerfKpisService
                                    .getPerfKpiByName(Designers.mscrmSitemapDesigner.services.KpiNames
                                        .sitemapLaunchFromAppCanvas)).stop();
                                var self = this;
                                this.dataAccessService.getEntityList().then(function(response) {
                                    this.traceUtility.LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                        "RetrieveEntityList",
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(CommonConstants.EventStatus.Success +
                                            ": Successfully retreived entity list"));
                                    this.dataAccessService.entity = response;
                                    for (var i = 0; i < entityMapList.length; i++)
                                        if (this.dataAccessService.entityLogicalNameList
                                            .indexOf(entityMapList[i]) ==
                                            -1) {
                                            self.dataAccessService.getAllEntityList()
                                                .then(function(response) {
                                                    self.traceUtility
                                                        .LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                                            "getEntityListWrapper",
                                                            new Mscrm.Designers.Common.Tracing
                                                            .StringTraceData(CommonConstants.EventStatus.Success +
                                                                ": Successfully retreived entity list"))
                                                });
                                            break
                                        }
                                    this.modalDialogService.close()
                                }.bind(this));
                                this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString
                            };
                        SitemapDesignerShellController.prototype.showErrorNotification = function(error, useErrorAsIs) {
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(error.toString())) {
                                if (useErrorAsIs === false)
                                    error = this.errorUtilityService.GetErrorString(null, error.status);
                                this.notificationService.ErrorList.push(error.toString());
                                this.notificationService.DesignerName = Designers.Common.Constants.DesignerName
                                    .SiteMapDesigner;
                                this.notificationService.ShowNotificationText();
                                this.triggerScopeApplyPhase()
                            }
                        };
                        SitemapDesignerShellController.prototype
                            .triggerScopeApplyPhase = function() { !this.$scope.$$phase && this.$scope.$apply() };
                        SitemapDesignerShellController.prototype.onRetrieveFailure = function(error) {
                            this.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                "onRetrieveFailure",
                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(error));
                            this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.errorUtilityService
                                .RedirectToErrorHandlerPage(this.localization
                                    .getResourceString("AppDesigner.Error_ServerDown"),
                                    Designers.Common.Constants.ErrorCode.CRMError)
                        };
                        SitemapDesignerShellController.prototype.InjectSiteMapDependencies = function() {};
                        SitemapDesignerShellController.prototype.SitemapDesignerShellClick = function(event) {
                            if (event.type == "keypress") return;
                            this.flyoutService.Hide();
                            this.clearPropertiesPaneErrorState()
                        };
                        SitemapDesignerShellController.prototype
                            .UpdateCommandBarButtonsVisibility =
                            function(isDisabled) {
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope
                                        .commandBarController)
                                ) this.$scope.commandBarController.toggleButtonStatus = isDisabled
                            };
                        SitemapDesignerShellController.prototype.SetDefaultSiteMapName = function() {
                            var _this = this;
                            this.dataAccessService.GetDefaultSiteMapName(function(result) {
                                    var sdkResult = result;
                                    _this.$rootScope.appTitle = sdkResult
                                        .getValue(mscrmSitemapDesigner.SiteMapConstants.DefaultSiteMapColumn);
                                    !_this.$scope.$$phase && _this.$scope.$apply()
                                },
                                function(error) {
                                    _this.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                        "SetDefaultSiteMapName",
                                        new Mscrm.Designers.Common.Tracing.ErrorTraceData(error))
                                },
                                this.sessionInfo.orgID)
                        };
                        SitemapDesignerShellController.prototype
                            .IsTileAreaDisabled = function() { return !this.mscrmSitemapUtilityService.IsValidSiteMap };
                        SitemapDesignerShellController.prototype
                            .IsTileGroupDisabled = function() {
                                return this.commonVariables && this.commonVariables.IsAddGroupEnabled() ? false : true
                            };
                        SitemapDesignerShellController.prototype
                            .IsTileSubAreaDisabled = function() {
                                return this.commonVariables && this.commonVariables.IsAddSubAreaEnabled() ? false : true
                            };
                        SitemapDesignerShellController.prototype.clearPropertiesPaneErrorState = function() {
                            if (this.commonVariables.GetShowPropertiesPane()) return;
                            this.flyoutService.resetValidationState();
                            this.$scope.errorInPropertiesPane = false
                        };
                        SitemapDesignerShellController
                            .$inject = [
                                "$scope", "$http", "dataAccessService", "mscrmLocalizationService",
                                "deserializeSitemap",
                                ServiceNames.BreadcrumbService, ServiceNames.TraceUtilityService, ServiceNames
                                .ComposabilityService, ServiceNames.PerfService, ServiceNames
                                .SitemapDesignerPerfKpisService, ServiceNames.NotificationBarService, ServiceNames
                                .ModalDialogService, ServiceNames.ErrorUtilityService, ServiceNames.FlyoutService,
                                ServiceNames.StateParamsService, "$rootScope", InjectedObjectNames.SessionInfo,
                                "mscrmCommonVariableService", ServiceNames.SitemapDesignerUtilityService
                            ];
                        return SitemapDesignerShellController
                    }();
                controllers.SitemapDesignerShellController = SitemapDesignerShellController;
                mscrmSitemapDesigner.SitemapDesignerModule
                    .controller("mscrmSitemapDesignerShellController", SitemapDesignerShellController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    SitemapUtilityService = function() {
                        function SitemapUtilityService(traceUtility) {
                            this.traceUtility = traceUtility;
                            this.SitemapAreaMap = new Dictionary;
                            this.IsValidSiteMap = true
                        }

                        SitemapUtilityService.prototype.GenerateSiteMapAreasObj = function(areas) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(areas)) {
                                this.SitemapAreaMap = new Dictionary;
                                for (var areaModel = new mscrmSitemapDesigner.model.SiteMapAreaModel, i = 0;
                                    i < areas.length;
                                    i++) {
                                    areaModel = new mscrmSitemapDesigner.model.SiteMapAreaModel;
                                    areaModel.Area = areas[i];
                                    if (this.IsValidSiteMap &&
                                        !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(areas[i].Id) &&
                                        !this.SitemapAreaMap.containsKey(areas[i].Id)) {
                                        this.SetGroup(areas[i].Group, areaModel);
                                        this.SitemapAreaMap.add(areas[i].Id, areaModel)
                                    } else {
                                        this.IsValidSiteMap = false;
                                        break
                                    }
                                }
                            }
                        };
                        SitemapUtilityService.prototype.GenerateSiteMapTreeObj = function(siteMap) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(siteMap) &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(siteMap.SiteMap)) {
                                var siteMapObj = siteMap.SiteMap[0];
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(siteMapObj)
                                )
                                    !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(siteMapObj.Area) &&
                                        this.GenerateSiteMapAreasObj(siteMapObj.Area)
                            }
                        };
                        SitemapUtilityService.prototype.SetGroup = function(group, areaModel) {
                            var groupDictionary = new Dictionary;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(group)) {
                                areaModel.GroupDictionary = new Dictionary;
                                for (var groupModel = new mscrmSitemapDesigner.model.SiteMapGroupModel, i = 0;
                                    i < group.length;
                                    i++) {
                                    groupModel = new mscrmSitemapDesigner.model.SiteMapGroupModel;
                                    groupModel.Group = group[i];
                                    groupModel.SubAreaDictionary = new Dictionary;
                                    if (this.IsValidSiteMap &&
                                        !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(group[i].Id) &&
                                        !areaModel.GroupDictionary.containsKey(group[i].Id)) {
                                        this.SetSubArea(group[i].SubArea, groupModel);
                                        if (areaModel.GroupDictionary.count() > 0) {
                                            var groupArray = areaModel.GroupDictionary.getValues();
                                            this.CheckDuplicateSubArea(groupArray, groupModel);
                                            if (!this.IsValidSiteMap) break
                                        }
                                        areaModel.GroupDictionary.add(group[i].Id, groupModel)
                                    } else {
                                        this.IsValidSiteMap = false;
                                        break
                                    }
                                }
                            }
                        };
                        SitemapUtilityService.prototype.SetSubArea = function(subArea, groupModel) {
                            var groupDictionary = new Dictionary;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subArea))
                                for (var i = 0; i < subArea.length; i++)
                                    if (this.IsValidSiteMap &&
                                        !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(subArea[i].Id) &&
                                        !groupModel.SubAreaDictionary
                                        .containsKey(subArea[i]
                                            .Id)) groupModel.SubAreaDictionary.add(subArea[i].Id, subArea[i]);
                                    else {
                                        this.IsValidSiteMap = false;
                                        break
                                    }
                        };
                        SitemapUtilityService.prototype.CheckDuplicateSubArea = function(groupArray, groupModel) {
                            for (var subAreaKeys = groupModel.SubAreaDictionary.getKeys(), i = 0;
                                i < groupArray.length;
                                i++)
                                for (var j = 0; j < subAreaKeys.length; j++)
                                    if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(subAreaKeys[j]) &&
                                        groupArray[i].SubAreaDictionary.containsKey(subAreaKeys[j])) {
                                        this.IsValidSiteMap = false;
                                        break
                                    }
                        };
                        SitemapUtilityService.prototype.GetAreaById = function(areaId) {
                            if (this.SitemapAreaMap.containsKey(areaId)) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId);
                                return sitemapArea.Area
                            } else return undefined
                        };
                        SitemapUtilityService.prototype.GetGroupById = function(areaId, groupId) {
                            if (this.SitemapAreaMap.containsKey(areaId)) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId);
                                if (sitemapArea.GroupDictionary.containsKey(groupId)) {
                                    var siteMapGroup = sitemapArea.GroupDictionary.getValue(groupId);
                                    return siteMapGroup.Group
                                }
                            } else return undefined
                        };
                        SitemapUtilityService.prototype.GetSubAreaById = function(areaId, groupId, subAreaId) {
                            if (this.SitemapAreaMap.containsKey(areaId)) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId);
                                if (sitemapArea.GroupDictionary.containsKey(groupId)) {
                                    var siteMapGroup = sitemapArea.GroupDictionary.getValue(groupId);
                                    if (siteMapGroup.SubAreaDictionary
                                        .containsKey(subAreaId)
                                    ) return siteMapGroup.SubAreaDictionary.getValue(subAreaId)
                                }
                            } else return undefined
                        };
                        SitemapUtilityService.prototype.GetGroupListByAreaId = function(areaId) {
                            if (this.SitemapAreaMap.containsKey(areaId)) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId),
                                    groupList = sitemapArea.Area.Group;
                                return groupList
                            } else return undefined
                        };
                        SitemapUtilityService.prototype.GetSubAreaListByAreaId = function(areaId, subAreaId) {
                            if (this.SitemapAreaMap.containsKey(areaId))
                                for (var sitemapArea = this.SitemapAreaMap.getValue(areaId),
                                    groups = sitemapArea.GroupDictionary.getValues(),
                                    i = 0;
                                    i < groups.length;
                                    i++) {
                                    var group = groups[i];
                                    if (group.SubAreaDictionary
                                        .containsKey(subAreaId)) return group.SubAreaDictionary.getValues()
                                }
                            else return undefined
                        };
                        SitemapUtilityService.prototype.GetAreaIndexById = function(areaId) {
                            if (this.SitemapAreaMap.containsKey(areaId)) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId),
                                    keyIndex = this.SitemapAreaMap.getKeys().indexOf(areaId);
                                return keyIndex
                            } else return -1
                        };
                        SitemapUtilityService.prototype.GetGroupIndexById = function(areaId, groupId) {
                            if (this.SitemapAreaMap.containsKey(areaId)) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId);
                                if (sitemapArea.GroupDictionary.containsKey(groupId)) {
                                    var keyIndex = sitemapArea.GroupDictionary.getKeys().indexOf(groupId);
                                    return keyIndex
                                }
                            } else return -1
                        };
                        SitemapUtilityService.prototype.GetSubAreaIndexById = function(areaId, groupId, subAreaId) {
                            if (this.SitemapAreaMap.containsKey(areaId)) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId);
                                if (sitemapArea.GroupDictionary.containsKey(groupId)) {
                                    var siteMapGroup = sitemapArea.GroupDictionary.getValue(groupId);
                                    if (siteMapGroup.SubAreaDictionary.containsKey(subAreaId)) {
                                        var keyIndex = siteMapGroup.SubAreaDictionary.getKeys().indexOf(subAreaId);
                                        return keyIndex
                                    }
                                }
                            } else return -1
                        };
                        SitemapUtilityService.prototype.GetGroupIndexBySubAreaId = function(areaId, subAreaId) {
                            if (this.SitemapAreaMap.containsKey(areaId))
                                for (var sitemapArea = this.SitemapAreaMap.getValue(areaId),
                                    groups = sitemapArea.GroupDictionary.getValues(),
                                    i = 0;
                                    i < groups.length;
                                    i++) {
                                    var group = groups[i];
                                    if (group.SubAreaDictionary.containsKey(subAreaId)) return i
                                }
                            else return -1
                        };
                        SitemapUtilityService.prototype.GetSubAreaIndexByAreaId = function(areaId, subAreaId) {
                            if (this.SitemapAreaMap.containsKey(areaId))
                                for (var sitemapArea = this.SitemapAreaMap.getValue(areaId),
                                    groups = sitemapArea.GroupDictionary.getValues(),
                                    i = 0;
                                    i < groups.length;
                                    i++) {
                                    var group = groups[i];
                                    if (group.SubAreaDictionary
                                        .containsKey(subAreaId)
                                    ) return group.SubAreaDictionary.getKeys().indexOf(subAreaId)
                                }
                            else return -1
                        };
                        SitemapUtilityService.prototype.GetSubAreaByAreaId = function(areaId, subAreaId) {
                            if (this.SitemapAreaMap.containsKey(areaId))
                                for (var sitemapArea = this.SitemapAreaMap.getValue(areaId),
                                    groups = sitemapArea.GroupDictionary.getValues(),
                                    i = 0;
                                    i < groups.length;
                                    i++) {
                                    var group = groups[i];
                                    if (group.SubAreaDictionary
                                        .containsKey(subAreaId)) return group.SubAreaDictionary.getValue(subAreaId)
                                }
                            else return undefined
                        };
                        SitemapUtilityService.prototype.UpdateAreaId = function(previousId, updatedId) {
                            var sitemapArea = this.SitemapAreaMap.getValue(previousId);
                            this.SitemapAreaMap.remove(previousId);
                            this.SitemapAreaMap.add(updatedId, sitemapArea)
                        };
                        SitemapUtilityService.prototype
                            .UpdateGroupId = function(areaId, previousGroupId, updatedGroupId) {
                                var sitemapArea = this.SitemapAreaMap.getValue(areaId);
                                this.UpdateId(sitemapArea.GroupDictionary, previousGroupId, updatedGroupId)
                            };
                        SitemapUtilityService.prototype
                            .UpdateSubAreaId = function(areaId, previousSubAreaId, updatedSubAreaId) {
                                for (var sitemapArea = this.SitemapAreaMap.getValue(areaId),
                                    groups = sitemapArea.GroupDictionary.getValues(),
                                    i = 0;
                                    i < groups.length;
                                    i++) {
                                    var group = groups[i];
                                    this.UpdateId(group.SubAreaDictionary, previousSubAreaId, updatedSubAreaId)
                                }
                            };
                        SitemapUtilityService.prototype.UpdateId = function(dictionary, previousId, updatedId) {
                            if (dictionary.containsKey(previousId)) {
                                var nodeDetails = dictionary.getValue(previousId);
                                dictionary.remove(previousId);
                                dictionary.add(updatedId, nodeDetails)
                            }
                        };
                        SitemapUtilityService.prototype.SubAreaExistsInSitemap = function() {
                            for (var allAreas = this.SitemapAreaMap.getValues(),
                                isAvailable = false,
                                areaObject,
                                groupObject,
                                index = 0;
                                index < allAreas.length;
                                index++) {
                                areaObject = allAreas[index];
                                groupObject = areaObject[mscrmSitemapDesigner.SiteMapConstants
                                    .Area][mscrmSitemapDesigner
                                    .SiteMapConstants.Group];
                                groupObject.every(function(element, index) {
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(element[mscrmSitemapDesigner.SiteMapConstants.SubArea]) &&
                                        element[mscrmSitemapDesigner.SiteMapConstants.SubArea].length > 0) {
                                        isAvailable = true;
                                        return false
                                    }
                                    return true
                                });
                                if (isAvailable) break
                            }
                            return isAvailable
                        };
                        SitemapUtilityService.$inject = ["mscrmTraceUtilityService"];
                        return SitemapUtilityService
                    }();
                common.SitemapUtilityService = SitemapUtilityService;
                mscrmSitemapDesigner.SitemapDesignerModule.service("mscrmSitemapUtilityService", SitemapUtilityService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";
                var link = function(scope, element, attrs, controller) {
                    scope.GetSubAreaMinWidth = function() {
                        var subAreaDraggedOver = element.find(".mscrm-subareaNodesContainer.dndDragover").length > 0;
                        if (subAreaDraggedOver) {
                            scope.highlightBorder = true;
                            this.commonVariables.borderInfo.subArea.showBorder = false
                        } else scope.highlightBorder = false;
                        if (scope.group.SubArea === undefined ||
                            scope.group.SubArea === null ||
                            scope.group.SubArea
                            .length ===
                            0)
                            return {
                                "min-width": mscrmSitemapDesigner.SubAreaConstants.maxSubAreaWidth +
                                    mscrmSitemapDesigner.SubAreaConstants.px,
                                "max-width": mscrmSitemapDesigner.SubAreaConstants.maxSubAreaWidth +
                                    mscrmSitemapDesigner.SubAreaConstants.px
                            };
                        var subAreaCount = scope.group.SubArea.length + (subAreaDraggedOver ? 1 : 0),
                            width = Math.ceil(subAreaCount / mscrmSitemapDesigner.SubAreaConstants.maxSubArea) *
                                mscrmSitemapDesigner.SubAreaConstants.maxSubAreaWidth +
                                mscrmSitemapDesigner.SubAreaConstants.px;
                        return { "min-width": width, "max-width": width }
                    }
                };

                function SubareaOverflowDirective() { return { link: link, restrict: "A" } }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSubareaOverflowDirective", SubareaOverflowDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var AreaController = function() {
                    function AreaController($scope,
                        notificationBrokerService,
                        localization,
                        dataAccessService,
                        commonVariableService) {
                        this.$scope = $scope;
                        this.notificationBrokerService = notificationBrokerService;
                        this.localization = localization;
                        this.dataAccessService = dataAccessService;
                        this.commonVariableService = commonVariableService;
                        this.$scope.isGroupVisible = this.$scope.CurrentExpandedAreaId === this.$scope.area.Id;
                        this.$scope.getCustomStyle = this.getCustomStyle.bind(this);
                        this.$scope.GetResourceString = this.GetResourceString.bind(this);
                        (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$scope.area.Icon) ||
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$scope.area.Icon) &&
                                this.$scope.area.Icon.length == 0 ||
                                this.commonVariableService.getDefaultImageIconText === this.$scope.area.Icon) &&
                            this.getDefaultAreaIcon();
                        if (this.$scope.area.Group === undefined) this.$scope.area.Group = [];
                        this.$scope.area.OriginalIcon = this.$scope.area.Icon
                    }

                    AreaController.prototype.getDefaultAreaIcon = function() {
                        var result = [];
                        this.dataAccessService.getWebResourceListWrapper(result)
                            .then(function() { this.OnGetWebResourceListWrapperSuccess(result, this) }.bind(this))
                    };
                    AreaController.prototype.OnGetWebResourceListWrapperSuccess = function(result, currentScope) {
                        if (result.length > 0) {
                            currentScope.urlList = result[mscrmSitemapDesigner.SiteMapConstants.UrlListIndex];
                            var iconList = [];
                            if (result[1] != null)
                                for (var i = 0;
                                    i < result[1].length;
                                    i++
                                )
                                    !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(result[1][i].DisplayName) &&
                                        iconList.push(result[1][i]);
                            var webDefaultAreaIconList = iconList
                                .filter(function(value, index, array) {
                                    return value.WebResourceId ==
                                        Designers.Common.Constants.Defaults.DefaultAreaImageWebResourceId
                                });
                            if (webDefaultAreaIconList.length > 0) {
                                this.$scope.area.Icon = webDefaultAreaIconList[0].webResourceImageUrl;
                                this.commonVariableService
                                    .setDefaultAreaImageStripUrl(webDefaultAreaIconList[0].webResourceImageUrl)
                            }
                        }
                    };
                    AreaController.prototype.getCustomStyle = function(areaNode) {
                        switch (areaNode.ResourceId) {
                        case mscrmSitemapDesigner.AreaNodeConstants.AreaSalesNode:
                            return "sfaTileCSS";
                        case mscrmSitemapDesigner.AreaNodeConstants.AreaServiceNode:
                            return "csTileCSS";
                        case mscrmSitemapDesigner.AreaNodeConstants.AreaMarketingNode:
                            return "maTileCSS";
                        case mscrmSitemapDesigner.AreaNodeConstants.AreaSettingsNode:
                            return "settingsTileCSS";
                        case mscrmSitemapDesigner.AreaNodeConstants.AreaHelpNode:
                            return "hlpTileCSS";
                        default:
                            return "areaTileDefaultCSS"
                        }
                    };
                    AreaController.prototype.GetResourceString = function(resourceId, areaId) {
                        var areaTitle = "", isTitlePresent = false;
                        if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$scope.area) &&
                            this.$scope.area != null)
                            if (this.$scope.area.Id === areaId)
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.area.Titles) &&
                                    !Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.area.Titles[0]))
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.$scope.area.Titles[0].Title))
                                        if (this.$scope.area.Titles[0].Title.length > 0)
                                            for (var title = 0;
                                                title < this.$scope.area.Titles[0].Title.length;
                                                title++)
                                                if (this.$scope.area.Titles[0].Title[title].LCID ==
                                                    this.dataAccessService.getLCID()) {
                                                    areaTitle = this.$scope.area.Titles[0].Title[title].Title;
                                                    isTitlePresent = true;
                                                    break
                                                }
                        if (!isTitlePresent)
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(resourceId) &&
                                !Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(resourceId)) areaTitle = this.localization.getResourceString(resourceId);
                            else if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.$scope.area.Title) &&
                                !Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(this.$scope.area.Title)) areaTitle = this.$scope.area.Title;
                        return areaTitle
                    };
                    AreaController.$inject = [
                        "$scope", "mscrmNotificationBrokerService", "mscrmLocalizationService", "dataAccessService",
                        Mscrm.Designers.Common.Constants.ServiceNames.CommonVariableService
                    ];
                    return AreaController
                }();
                controllers.AreaController = AreaController;
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmAreaController", AreaController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var ServiceNames = Designers.Common.Constants.ServiceNames,
                    SitemapCommonUtility = Mscrm.Designers.mscrmSitemapDesigner.CommonUtility,
                    CommandBarController = function() {
                        function CommandBarController($scope,
                            $timeout,
                            $rootScope,
                            notificationBrokerService,
                            localization,
                            commonVariables,
                            mscrmSitemapUtilityService,
                            urlHelperService,
                            shortcutKeyService,
                            dirtyCheckService,
                            flyoutService,
                            dataAccessService,
                            filter,
                            propertiesPaneService) {
                            this.$scope = $scope;
                            this.$timeout = $timeout;
                            this.$rootScope = $rootScope;
                            this.localization = localization;
                            this.commonVariables = commonVariables;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.urlHelperService = urlHelperService;
                            this.shortcutKeyService = shortcutKeyService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.flyoutService = flyoutService;
                            this.dataAccessService = dataAccessService;
                            this.filter = filter;
                            this.propertiesPaneService = propertiesPaneService;
                            this.toggleButtonStatus = true;
                            this.deactivateEventHandler = null;
                            this.notificationBrokerService = notificationBrokerService;
                            this.notificationBrokerService.RegisterObserver("evtSiteMapNodeSelected", this);
                            this.$scope.$watch("$root.rightPaneForm.$dirty", this.HandleRightPaneFormChange.bind(this));
                            this.deactivateEventHandler = this.$rootScope
                                .$on(mscrmSitemapDesigner.SiteMapConstants.ToogleButtonStatus,
                                    this.HandleDeleteEvent.bind(this));
                            this.$scope.$on("$destroy", this.destroyEvent.bind(this));
                            this.RegisterShortcutKeys();
                            this.siteMapAddFlyoutMenuModel = new mscrmSitemapDesigner.model.SiteMapAddFlyoutModel
                        }

                        CommandBarController.prototype
                            .setSiteMapCanvasDirty = function() {
                                this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                    .SiteMapCanvas,
                                    true)
                            };
                        CommandBarController.prototype.destroyEvent = function() {
                            this.deactivateEventHandler();
                            this.DeregisterShortcutKeys()
                        };
                        CommandBarController.prototype
                            .HandleRightPaneFormChange = function(newValue, oldValue) {
                                newValue &&
                                    this.dirtyCheckService
                                    .setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm, true)
                            };
                        CommandBarController.prototype.PublishNotification = function(eventName, context) {
                            console.log("PublishNotification " + eventName);
                            var notificationObj = new mscrmSitemapDesigner.model.NotificationObj(eventName, context);
                            this.notificationBrokerService.Notify(notificationObj)
                        };
                        CommandBarController.prototype.Notify = function(notificationObj) {
                            for (var node in notificationObj.context) {
                                this.selectedNodeName = node;
                                this.selectedNode = notificationObj.context[node];
                                if (node != mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Area] ||
                                    this.$scope.showSubAreaPane) this.toggleButtonStatus = false
                            }
                        };
                        CommandBarController.prototype
                            .setGeneralTab = function() { this.$scope.showPropertiesPane = false };
                        CommandBarController.prototype
                            .setPropertiesTab = function() { this.$scope.showPropertiesPane = true };
                        CommandBarController.prototype
                            .isValidSiteMap = function() { return !this.mscrmSitemapUtilityService.IsValidSiteMap };
                        CommandBarController.prototype
                            .toggleCommandButtons = function() { return this.toggleButtonStatus };
                        CommandBarController.prototype.deleteSelection = function() {
                            var $scope = this.$scope, _this = this;
                            switch (this.selectedNodeName) {
                            case "Area":
                                for (var areaList = this.$scope.SiteMap.Area, indexArea = 0;
                                    indexArea < areaList.length;
                                    indexArea++)
                                    if (areaList[indexArea].Id === this.$scope.selectedArea.Id) {
                                        areaList.splice(indexArea, 1);
                                        this.mscrmSitemapUtilityService.SitemapAreaMap
                                            .remove(this.$scope.selectedArea.Id);
                                        this.commonVariables.SetSelectedArea(null);
                                        this.$rootScope
                                            .$broadcast(mscrmSitemapDesigner.SiteMapConstants.SitemapDeletion,
                                                { showSubAreaPane: false });
                                        this.HandlePropertiesPaneAndCommandBarButtonOnDelete();
                                        this.ApplyPagination(this.selectedNodeName, $scope);
                                        return
                                    }
                                break;
                            case "Group":
                                for (var indexArea = 0; indexArea < this.$scope.SiteMap.Area.length; indexArea++)
                                    for (var groupList = this.$scope.SiteMap.Area[indexArea].Group, indexGroup = 0;
                                        indexGroup < groupList.length;
                                        indexGroup++)
                                        if (groupList[indexGroup].Id == this.selectedNode.Id) {
                                            groupList.splice(indexGroup, 1);
                                            this.commonVariables.SetSelectedGroup(null);
                                            !Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(this.$scope.SiteMap.Area[indexArea].Id) &&
                                                this.mscrmSitemapUtilityService.SitemapAreaMap
                                                .getValue(this.$scope.SiteMap.Area[indexArea].Id).GroupDictionary
                                                .remove(this.selectedNode.Id);
                                            this.$rootScope
                                                .$broadcast(mscrmSitemapDesigner.SiteMapConstants.SitemapDeletion,
                                                    { showSubAreaPane: true, showPropertiesPane: false });
                                            this.HandlePropertiesPaneAndCommandBarButtonOnDelete();
                                            this.ApplyPagination(this.selectedNodeName, $scope);
                                            return
                                        }
                                break;
                            case "SubArea":
                                for (var indexArea = 0; indexArea < this.$scope.SiteMap.Area.length; indexArea++)
                                    for (var indexGroup = 0;
                                        indexGroup < this.$scope.SiteMap.Area[indexArea].Group.length;
                                        indexGroup++)
                                        for (var subAreaList = this.$scope.SiteMap.Area[indexArea].Group[indexGroup]
                                                     .SubArea,
                                            indexSArea = 0;
                                            indexSArea < subAreaList.length;
                                            indexSArea++)
                                            if (subAreaList[indexSArea].Id == this.selectedNode.Id) {
                                                subAreaList.splice(indexSArea, 1);
                                                this.commonVariables.SetSelectedSubArea(null);
                                                !Designers.Common.Utility.ScriptUtilities
                                                    .IsNullOrUndefined(this.$scope.SiteMap.Area[indexArea].Id) &&
                                                    !Designers.Common.Utility.ScriptUtilities
                                                    .IsNullOrUndefined(this.$scope.SiteMap.Area[indexArea]
                                                        .Group[indexGroup]
                                                        .Id) &&
                                                    this.mscrmSitemapUtilityService.SitemapAreaMap
                                                    .getValue(this.$scope.SiteMap.Area[indexArea].Id).GroupDictionary
                                                    .getValue(this.$scope.SiteMap.Area[indexArea].Group[indexGroup].Id)
                                                    .SubAreaDictionary.remove(this.selectedNode.Id);
                                                this.$rootScope
                                                    .$broadcast(mscrmSitemapDesigner.SiteMapConstants.SitemapDeletion,
                                                        { showSubAreaPane: true, showPropertiesPane: false });
                                                this.HandlePropertiesPaneAndCommandBarButtonOnDelete();
                                                this.ApplyPagination(this.selectedNodeName, $scope);
                                                return
                                            }
                            }
                        };
                        CommandBarController.prototype.SelectFirstItemMenuOnFlyOut = function() {
                            if (this.siteMapAddFlyoutMenuModel.IsFlyoutOpen) {
                                var firstMenuItem = angular.element(".mscrm-FlyoutMenu").children().first();
                                firstMenuItem.focus();
                                firstMenuItem.trigger("focusin")
                            }
                        };
                        CommandBarController.prototype.addComponent = function(componentType) {
                            var $scope = this.$scope;
                            switch (componentType) {
                            case mscrmSitemapDesigner.ComponentTypes.Area:
                                controllers.SitemapController.prototype.addArea($scope, this);
                                this.SetPropertiesPaneVisibility(true);
                                this.toggleButtonStatus = false;
                                break;
                            case mscrmSitemapDesigner.ComponentTypes.Group:
                                if (this.commonVariables.IsAddGroupEnabled()) {
                                    controllers.SitemapController.prototype.addGroup($scope, this);
                                    this.SetPropertiesPaneVisibility(true);
                                    this.toggleButtonStatus = false
                                }
                                break;
                            case mscrmSitemapDesigner.ComponentTypes.SubArea:
                                if (this.commonVariables.IsAddSubAreaEnabled()) {
                                    this.propertiesPaneService.ResetSubAreaProperties();
                                    controllers.SitemapController.prototype.addSubArea($scope, this);
                                    this.SetPropertiesPaneVisibility(true)
                                }
                                break
                            }
                            this.ApplyPagination(this.selectedNodeName, $scope);
                            this.setSiteMapCanvasDirty()
                        };
                        CommandBarController.prototype.CloneSelection = function() {
                            var areaList = this.$scope.SiteMap.Area;
                            this.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.SiteMap.Area);
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(areaList) != null &&
                                areaList.length > 0) {
                                var areaIndex = this.mscrmSitemapUtilityService
                                        .GetAreaIndexById(this.$scope.selectedArea.Id),
                                    groupIndex = this.selectedNodeName !==
                                        mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea]
                                        ? this.mscrmSitemapUtilityService
                                        .GetGroupIndexById(this.$scope.selectedArea.Id, this.selectedNode.Id)
                                        : this.mscrmSitemapUtilityService
                                        .GetGroupIndexBySubAreaId(this.$scope.selectedArea.Id, this.selectedNode.Id),
                                    subAreaIndex = this.mscrmSitemapUtilityService
                                        .GetSubAreaIndexByAreaId(this.$scope.selectedArea.Id, this.selectedNode.Id);
                                switch (this.selectedNodeName) {
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Area]:
                                    areaIndex > -1 && this.HandleCloneOperation(areaList, areaIndex);
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Group]:
                                    if (groupIndex > -1) {
                                        var groupList = areaList[areaIndex].Group;
                                        this.HandleCloneOperation(groupList, groupIndex)
                                    }
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea]:
                                    if (subAreaIndex > -1) {
                                        var groupList = areaList[areaIndex].Group,
                                            subAreaList = groupList[groupIndex].SubArea;
                                        this.HandleCloneOperation(subAreaList, subAreaIndex)
                                    }
                                }
                            }
                            this.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.SiteMap.Area);
                            this.ApplyPagination(this.selectedNodeName, this.$scope)
                        };
                        CommandBarController.prototype.HandleCloneOperation = function(nodeList, indexValue) {
                            var $scope = this.$scope;
                            if (this.urlHelperService.SitemapGenraterandomID() != undefined)
                                if (this.selectedNodeName ===
                                    mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Area]) {
                                    nodeList.splice(indexValue + 1, 0, angular.copy(this.$scope.selectedArea));
                                    this.SetUniqueIdForGroupNode(nodeList[indexValue + 1]);
                                    nodeList[indexValue + 1]
                                        .Id = mscrmSitemapDesigner.SiteMapConstants.NewAreaPrefix +
                                        this.urlHelperService.SitemapGenraterandomID();
                                    nodeList[indexValue + 1] = this
                                        .SetClonedName(nodeList, nodeList[indexValue + 1], this.selectedNodeName);
                                    mscrmSitemapDesigner.controllers.SitemapController.prototype
                                        .areaSelectionNodeOperation(nodeList[indexValue + 1], $scope);
                                    this.setSiteMapCanvasDirty()
                                } else if (this.selectedNodeName ===
                                    mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Group]) {
                                    nodeList.splice(indexValue + 1, 0, angular.copy(this.selectedNode));
                                    this.SetUniqueIdForSubAreaNode(nodeList[indexValue + 1]);
                                    nodeList[indexValue + 1]
                                        .Id = mscrmSitemapDesigner.SiteMapConstants.NewGroupPrefix +
                                        this.urlHelperService.SitemapGenraterandomID();
                                    nodeList[indexValue + 1] = this
                                        .SetClonedName(nodeList, nodeList[indexValue + 1], this.selectedNodeName);
                                    mscrmSitemapDesigner.controllers.GroupController.prototype
                                        .groupSelectionNodeOperation(nodeList[indexValue + 1], $scope);
                                    this.setSiteMapCanvasDirty()
                                } else if (this.selectedNodeName ===
                                    mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea]) {
                                    nodeList.splice(indexValue + 1, 0, angular.copy(this.selectedNode));
                                    nodeList[indexValue + 1]
                                        .Id = mscrmSitemapDesigner.SiteMapConstants.NewSubAreaPrefix +
                                        this.urlHelperService.SitemapGenraterandomID();
                                    nodeList[indexValue + 1] = this
                                        .SetClonedName(nodeList, nodeList[indexValue + 1], this.selectedNodeName);
                                    mscrmSitemapDesigner.controllers.SubAreaController.prototype
                                        .subAreaSelectionNodeOperation(nodeList[indexValue + 1], $scope);
                                    this.commonVariables &&
                                        this.commonVariables.SetSelectedSubArea(nodeList[indexValue + 1]);
                                    this.setSiteMapCanvasDirty()
                                }
                        };
                        CommandBarController.prototype.SetClonedName = function(nodeList, clonedNode, nodeType) {
                            var copyCount = null;
                            copyCount = this.GetCopyCount(nodeList, clonedNode);
                            var nodeTitle = this.HasTitleInAdditionalTitles(clonedNode, nodeType);
                            if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(nodeTitle))
                                clonedNode = this
                                    .SetTitleForNode(clonedNode, this.GenerateNewName(nodeTitle, copyCount));
                            else {
                                nodeTitle = this.localization.getResourceString(clonedNode.ResourceId);
                                clonedNode = this
                                    .SetTitleForNode(clonedNode, this.GenerateNewName(nodeTitle, copyCount))
                            }
                            return clonedNode
                        };
                        CommandBarController.prototype.SetTitleForNode = function(node, title) {
                            var nodeTitleObj = new mscrmSitemapDesigner.model.Title;
                            nodeTitleObj.Title = title;
                            nodeTitleObj.LCID = this.dataAccessService.getLCID();
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(node.Titles)) {
                                node.Titles = [];
                                node.Titles[0] = {};
                                node.Titles[0].Title = []
                            }
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(node.Titles[0])) {
                                node.Titles[0] = {};
                                node.Titles[0].Title = []
                            }
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(node.Titles[0].Title)) node.Titles[0].Title = [];
                            if (node.Titles[0].Title.length > 0) {
                                var existingTitleObjIndex = node.Titles[0].Title
                                    .indexOf(this.filter(node.Titles[0].Title, { LCID: nodeTitleObj.LCID })[0]);
                                if (existingTitleObjIndex > -1
                                ) node.Titles[0].Title[existingTitleObjIndex] = nodeTitleObj;
                                else node.Titles[0].Title.push(nodeTitleObj)
                            } else node.Titles[0].Title.push(nodeTitleObj);
                            return node
                        };
                        CommandBarController.prototype.GetCopyCount = function(nodeList, clonednode) {
                            var filteredNodes = [];
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(clonednode
                                    .ResourceId))
                                filteredNodes = this.filter(nodeList, { ResourceId: clonednode.ResourceId });
                            else if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(clonednode
                                    .Entity)) filteredNodes = this.filter(nodeList, { Entity: clonednode.Entity });
                            else if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(clonednode.Title)) {
                                var clonedNodeTitle = this.GetTitleWithoutCopy(clonednode.Title);
                                filteredNodes = this.filter(nodeList, { Title: clonedNodeTitle })
                            }
                            if (filteredNodes.length == 2) return null;
                            else if (filteredNodes.length > 2) return filteredNodes.length - 2;
                            return null
                        };
                        CommandBarController.prototype.GenerateNewName = function(name, count) {
                            var newName = name;
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(name)) {
                                var copyString = this.localization
                                    .getResourceString(mscrmSitemapDesigner.LocalizationConstants.Copy);
                                newName = this.GetTitleWithoutCopy(name);
                                newName += copyString +
                                (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(count)
                                    ? Designers.Common.Utility.StringUtilities.EmptyString
                                    : count.toString())
                            }
                            return newName
                        };
                        CommandBarController.prototype.HasTitleInAdditionalTitles = function(areaNode, nodetype) {
                            var title = Designers.Common.Utility.StringUtilities.EmptyString;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(areaNode) &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(areaNode.Titles) &&
                                areaNode.Titles.length > 0 &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(areaNode.Titles[0].Title) &&
                                areaNode.Titles[0].Title.length > 0) {
                                var currentLCIDNodeIndex = areaNode.Titles[0].Title
                                    .indexOf(this.filter(areaNode.Titles[0].Title,
                                        { LCID: this.dataAccessService.getLCID() })[0]);
                                if (currentLCIDNodeIndex > -1
                                ) title = areaNode.Titles[0].Title[currentLCIDNodeIndex].Title
                            }
                            if (Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(title) &&
                                nodetype === "SubArea") title = this.HasTitleForSubArea(areaNode);
                            if (Designers.Common.Utility.StringUtilities.IsNullOrEmpty(title) &&
                                !Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(areaNode.Title)) title = areaNode.Title;
                            return title
                        };
                        CommandBarController.prototype.HasTitleForSubArea = function(node) {
                            var nodeTitle = Designers.Common.Utility.StringUtilities.EmptyString;
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(node.Entity)) nodeTitle = this.HasTitleFromEntity(node.Entity);
                            if (nodeTitle)
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(node
                                        .resourceId)) nodeTitle = this.localization.getResourceString(node.resourceId);
                            return nodeTitle
                        };
                        CommandBarController.prototype.HasTitleFromEntity = function(entityname) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(entityname) &&
                                !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(entityname)) {
                                var entitynames = this.dataAccessService.entityMappingList;
                                if (entitynames != null &&
                                    !Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(entitynames[entityname])
                                ) return entitynames[entityname].PluralName
                            }
                            return null
                        };
                        CommandBarController.prototype.SetUniqueIdForGroupNode = function(clonedNode) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(clonedNode.Group) &&
                                clonedNode.Group.length > 0)
                                for (var indexGroup = 0; indexGroup < clonedNode.Group.length; indexGroup++) {
                                    var clonedGroup = clonedNode.Group[indexGroup];
                                    clonedGroup.Id = mscrmSitemapDesigner.SiteMapConstants.NewGroupPrefix +
                                        this.urlHelperService.SitemapGenraterandomID();
                                    this.SetUniqueIdForSubAreaNode(clonedGroup)
                                }
                        };
                        CommandBarController.prototype.SetUniqueIdForSubAreaNode = function(clonedNode) {
                            if (clonedNode.SubArea != null && clonedNode.SubArea.length > 0)
                                for (var indexSArea = 0; indexSArea < clonedNode.SubArea.length; indexSArea++) {
                                    var clonedSubArea = clonedNode.SubArea[indexSArea];
                                    clonedSubArea.Id = mscrmSitemapDesigner.SiteMapConstants.NewSubAreaPrefix +
                                        this.urlHelperService.SitemapGenraterandomID()
                                }
                        };
                        CommandBarController.prototype.RegisterShortcutKeys = function() {
                            this.openFlyoutFunction = this.OpenFlyoutOnShortcutKey.bind(this);
                            this.cloneNodeFunction = this.CloneNodeShortcutKey.bind(this);
                            this.deleteNodeFunction = this.DeleteNodeShortcutKey.bind(this);
                            this.closeFlyoutFunction = this.CloseFlyoutOnShortcutKey.bind(this);
                            this.shortcutKeyService
                                .RegisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.AddFlyoutKeyCode,
                                    this.openFlyoutFunction);
                            this.shortcutKeyService
                                .RegisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.CloneKeyCode,
                                    this.cloneNodeFunction);
                            this.shortcutKeyService
                                .RegisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.DeleteKeyCode,
                                    this.deleteNodeFunction)
                        };
                        CommandBarController.prototype.DeregisterShortcutKeys = function() {
                            this.shortcutKeyService
                                .DeregisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.AddFlyoutKeyCode,
                                    this.openFlyoutFunction);
                            this.shortcutKeyService
                                .DeregisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.CloneKeyCode,
                                    this.cloneNodeFunction);
                            this.shortcutKeyService
                                .DeregisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.DeleteKeyCode,
                                    this.deleteNodeFunction);
                            this.shortcutKeyService
                                .DeregisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.AddFlyoutCloseKeyCode,
                                    this.closeFlyoutFunction)
                        };
                        CommandBarController.prototype.OpenFlyoutOnShortcutKey = function($event) {
                            this.HandleAddFlyoutMenu($event);
                            this.applyScope();
                            this.SelectFirstItemMenuOnFlyOut()
                        };
                        CommandBarController.prototype.CloneNodeShortcutKey = function() {
                            if (!this.toggleCommandButtons()) {
                                this.setSiteMapCanvasDirty();
                                this.CloneSelection();
                                this.applyScope();
                                !Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.selectedNode_Properties) &&
                                    $("#" + this.$scope.selectedNode_Properties.Id).focus()
                            }
                        };
                        CommandBarController.prototype.DeleteNodeShortcutKey = function() {
                            if (!this.toggleCommandButtons()) {
                                this.deleteSelection();
                                this.applyScope()
                            }
                        };
                        CommandBarController.prototype
                            .applyScope = function() { !this.$scope.$$phase && this.$scope.$apply() };
                        CommandBarController.prototype
                            .HandleDeleteEvent = function(event, args) {
                                if (this.$scope.SiteMap.Area
                                    .length !=
                                    1 &&
                                    args.showPropertiesPane) this.toggleButtonStatus = false
                            };
                        CommandBarController.prototype
                            .HandleAddFlyoutMenu = function($event) {
                                this.siteMapAddFlyoutMenuModel.ToggleFlyout(this.flyoutService, $event)
                            };
                        CommandBarController.prototype
                            .IsAddGroupEnabled = function() { return this.commonVariables.IsAddGroupEnabled() };
                        CommandBarController.prototype
                            .IsAddSubAreaEnabled = function() { return this.commonVariables.IsAddSubAreaEnabled() };
                        CommandBarController.prototype.HandlePropertiesPaneAndCommandBarButtonOnDelete = function() {
                            this.toggleButtonStatus = true;
                            this.SetPropertiesPaneVisibility(false);
                            this.$rootScope.$broadcast(mscrmSitemapDesigner.SiteMapConstants.ToogleButtonStatus,
                                { showPropertiesPane: false });
                            this.setSiteMapCanvasDirty()
                        };
                        CommandBarController.prototype.CloseFlyoutOnShortcutKey = function($event) {
                            if (this.siteMapAddFlyoutMenuModel.IsFlyoutOpen) {
                                this.siteMapAddFlyoutMenuModel.ToggleFlyout(this.flyoutService, $event);
                                this.applyScope()
                            }
                        };
                        CommandBarController.prototype.ApplyPagination = function(nodeName, scope) {
                            var _this = this;
                            this.$timeout(function() {
                                    mscrmSitemapDesigner.controllers.SitemapController.prototype
                                        .displayPagination(_this.selectedNodeName, scope)
                                },
                                0,
                                false)
                        };
                        CommandBarController.prototype.SetPropertiesPaneVisibility = function(isVisible) {
                            SitemapCommonUtility.SetUnsupportedComponentMessageVisibility(this, false);
                            this.commonVariables.SetShowPropertiesPane(isVisible);
                            this.$rootScope.$broadcast(mscrmSitemapDesigner.SiteMapConstants.SitemapShowPropertiesPane,
                                { showPropertiesPane: isVisible })
                        };
                        CommandBarController.prototype.GetTitleWithoutCopy = function(title) {
                            var copyString = this.localization
                                    .getResourceString(mscrmSitemapDesigner.LocalizationConstants.Copy),
                                clonedNodeTitle = title;
                            if (clonedNodeTitle
                                .indexOf(copyString) >
                                -1) clonedNodeTitle = clonedNodeTitle.split(copyString)[0];
                            return clonedNodeTitle
                        };
                        CommandBarController.$inject = [
                            "$scope", "$timeout", "$rootScope", "mscrmNotificationBrokerService",
                            "mscrmLocalizationService", "mscrmCommonVariableService", "mscrmSitemapUtilityService",
                            ServiceNames.UrlHelperService, ServiceNames.KeyboardShortcutService, ServiceNames
                            .DirtyCheckService, Designers.Common.Constants.ServiceNames.FlyoutService,
                            "dataAccessService",
                            "filterFilter", ServiceNames.PropertiesPaneService
                        ];
                        return CommandBarController
                    }();
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmCommandBarController", CommandBarController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var SitemapCommonUtility = Mscrm.Designers.mscrmSitemapDesigner.CommonUtility,
                    GroupController = function() {
                        function GroupController($scope,
                            $rootScope,
                            dataAccessService,
                            notificationBrokerService,
                            localization,
                            urlHelperService,
                            commonVariables,
                            mscrmSitemapUtilityService) {
                            this.$scope = $scope;
                            this.$rootScope = $rootScope;
                            this.dataAccessService = dataAccessService;
                            this.notificationBrokerService = notificationBrokerService;
                            this.localization = localization;
                            this.urlHelperService = urlHelperService;
                            this.commonVariables = commonVariables;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.$scope.onGroupSelection = this.onGroupSelection.bind(this);
                            this.sortableUiInit();
                            this.$scope
                                .onSubAreaDragStart = function(event, groupIndex, subAreaIndex, parentSrc, item) {
                                    this.commonVariables.subAreaDragInProcess = true;
                                    event.dataTransfer.setData("text", JSON.stringify(groupIndex + "_" + subAreaIndex));
                                    this.onDragStartOverArea(event, parentSrc, item)
                                };
                            if (this.$scope.group.SubArea === undefined) this.$scope.group.SubArea = [];
                            this.$scope.GetResourceString = this.GetResourceString.bind(this);
                            this.$scope.mscrmSitemapUtilityService = this.mscrmSitemapUtilityService
                        }

                        GroupController.prototype.GetResourceString = function(resourceId, groupId) {
                            var groupTitle = "", isTitlePresent = false;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$scope.group))
                                if (this.$scope.group.Id === groupId)
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.$scope.group.Titles) &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.$scope.group.Titles[0]))
                                        if (!Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(this.$scope.group.Titles[0].Title))
                                            if (this.$scope.group.Titles[0].Title.length > 0)
                                                for (var title = 0;
                                                    title < this.$scope.group.Titles[0].Title.length;
                                                    title++)
                                                    if (this.$scope.group.Titles[0].Title[title].LCID ==
                                                        this.dataAccessService.getLCID()) {
                                                        groupTitle = this.$scope.group.Titles[0].Title[title].Title;
                                                        isTitlePresent = true;
                                                        break
                                                    }
                            if (!isTitlePresent)
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(resourceId) &&
                                    !Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(resourceId)
                                ) groupTitle = this.localization.getResourceString(resourceId);
                                else if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.group.Title) &&
                                    !Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(this.$scope.group.Title)) groupTitle = this.$scope.group.Title;
                            return groupTitle
                        };
                        GroupController.prototype
                            .sortableUiInit = function() {
                                this.$scope
                                    .sortableOptionsForSubarea =
                                    {
                                        placeholder: "subarea-item-destination",
                                        connectWith: ".subarea-container",
                                        "ui-floating": true,
                                        stop: function() {}
                                    }
                            };
                        GroupController.prototype.onGroupSelection = function(groupNode) {
                            SitemapCommonUtility.SetUnsupportedComponentMessageVisibility(this, false);
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(groupNode)) {
                                if (this.commonVariables != undefined) {
                                    this.commonVariables.SetSelectedGroup(groupNode);
                                    this.commonVariables.SetSelectedSubArea(null);
                                    this.commonVariables.SetShowPropertiesPane(true)
                                }
                                var ctx = { Group: groupNode };
                                this.$scope.PublishNotification("evtSiteMapNodeSelected", ctx);
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$rootScope)) {
                                    this.commonVariables.SetShowPropertiesPane(true);
                                    this.$rootScope
                                        .$broadcast("sitemapShowPropertiesPane", { showPropertiesPane: true })
                                }
                                this.$scope.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.areas)
                            }
                        };
                        GroupController.prototype.groupSelectionNodeOperation = function(groupNode, $scope) {
                            this.$scope = $scope;
                            this.onGroupSelection(groupNode)
                        };
                        GroupController.prototype.addSubAreaNode = function($scope, thisObject) {
                            this.$scope = $scope;
                            var subAreaObj = new mscrmSitemapDesigner.model.SubArea;
                            thisObject
                                .mscrmLocalizationService = Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(thisObject.mscrmLocalizationService)
                                ? this.$scope.localization
                                : thisObject.mscrmLocalizationService;
                            subAreaObj.ResourceId = mscrmSitemapDesigner.LocalizationConstants.NewSubArea;
                            subAreaObj.Id = mscrmSitemapDesigner.SiteMapConstants.NewSubAreaPrefix +
                                thisObject.urlHelperService.SitemapGenraterandomID();
                            subAreaObj.Client = thisObject.commonVariables.getClientOptions();
                            subAreaObj.Sku = thisObject.commonVariables.getSkuOptions();
                            var selectedGroup = thisObject.commonVariables.GetSelectedGroup(),
                                selectedSubArea = thisObject.commonVariables.GetSelectedSubArea(),
                                index = -1;
                            if (selectedGroup)
                                if (selectedSubArea) {
                                    index = this.$scope.mscrmSitemapUtilityService
                                        .GetSubAreaIndexById($scope.selectedArea.Id,
                                            selectedGroup.Id,
                                            selectedSubArea.Id);
                                    if (index > -1) {
                                        index = index + 1;
                                        this
                                            .AddSubAreaBasedOnGroupIndex($scope,
                                                thisObject,
                                                subAreaObj,
                                                selectedGroup,
                                                index)
                                    } else this.AddSubAreaNodeToLastGroup($scope, thisObject, subAreaObj, selectedGroup)
                                } else this.AddSubAreaNodeToLastGroup($scope, thisObject, subAreaObj, selectedGroup);
                            else if (selectedSubArea) {
                                selectedGroup = $scope.selectedArea.Group[this.$scope.mscrmSitemapUtilityService
                                    .GetGroupIndexBySubAreaId($scope.selectedArea.Id, selectedSubArea.Id)];
                                selectedGroup = !Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(selectedGroup)
                                    ? selectedGroup
                                    : $scope.selectedArea.Group[$scope.selectedArea.Group.length - 1];
                                index = this.$scope.mscrmSitemapUtilityService
                                    .GetSubAreaIndexByAreaId($scope.selectedArea.Id, selectedSubArea.Id);
                                index = index + 1;
                                this.AddSubAreaBasedOnGroupIndex($scope, thisObject, subAreaObj, selectedGroup, index)
                            } else {
                                selectedGroup = this.$scope.selectedArea
                                    .Group[this.$scope.selectedArea.Group.length - 1];
                                this.AddSubAreaNodeToLastGroup($scope, thisObject, subAreaObj, selectedGroup)
                            }
                            this.$scope.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.areas)
                        };
                        GroupController.prototype
                            .AddSubAreaNodeToLastGroup = function($scope, thisObject, subAreaObj, selectedGroup) {
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.selectedArea.Group) &&
                                    this.$scope.selectedArea.Group.length > 0) {
                                    selectedGroup.SubArea = !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(selectedGroup.SubArea)
                                        ? selectedGroup.SubArea
                                        : [];
                                    selectedGroup.SubArea.push(JSON.parse(JSON.stringify(subAreaObj)));
                                    var index = selectedGroup.SubArea.length - 1;
                                    this.SetSubAreaSelected($scope, thisObject, selectedGroup, index)
                                }
                            };
                        GroupController.prototype
                            .AddSubAreaBasedOnGroupIndex =
                            function($scope, thisObject, subAreaObj, selectedGroup, index) {
                                selectedGroup.SubArea.splice(index, 0, JSON.parse(JSON.stringify(subAreaObj)));
                                this.SetSubAreaSelected($scope, thisObject, selectedGroup, index)
                            };
                        GroupController.prototype
                            .SetSubAreaSelected = function($scope, thisObject, selectedGroup, index) {
                                thisObject.commonVariables.SetSelectedSubArea(selectedGroup.SubArea[index]);
                                selectedGroup.SubArea.selected = selectedGroup.SubArea[index];
                                controllers.SubAreaController.prototype
                                    .subAreaSelectionNodeOperation(selectedGroup.SubArea[index], $scope);
                                this.$scope.toggleButtonStatus = false
                            };
                        GroupController.$inject = [
                            "$scope", "$rootScope", "dataAccessService", "mscrmNotificationBrokerService",
                            "mscrmLocalizationService", Designers.Common.Constants.ServiceNames.UrlHelperService,
                            "mscrmCommonVariableService", "mscrmSitemapUtilityService"
                        ];
                        return GroupController
                    }();
                controllers.GroupController = GroupController;
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmGroupController", GroupController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var LeftPaneController = function() {
                    function LeftPaneController($scope, dataAccessService) {
                        this.$scope = $scope;
                        this.dataAccessService = dataAccessService
                    }

                    LeftPaneController.$inject = ["$scope", "dataAccessService"];
                    return LeftPaneController
                }();
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmLeftPaneController", LeftPaneController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var NewElementController = function() {
                    function NewElementController($scope) { this.$scope = $scope }

                    NewElementController.$inject = ["$scope"];
                    return NewElementController
                }();
                controllers.NewElementController = NewElementController;
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmNewElementController", NewElementController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    ScriptUtilities = Designers.Common.Utility.ScriptUtilities,
                    CommonConstants = Mscrm.Designers.Common.Constants,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    StringUtility = Mscrm.Designers.Common.Utility.StringUtilities,
                    ArtifactTypeNode = function() {
                        function ArtifactTypeNode(componentTypeCode, componentTypeName) {
                            this.componentTypeCode = componentTypeCode;
                            this.componentTypeName = componentTypeName
                        }

                        return ArtifactTypeNode
                    }(),
                    PropertiesPaneController = function() {
                        function PropertiesPaneController($scope,
                            $rootScope,
                            $compile,
                            $http,
                            notificationBrokerService,
                            dataAccessService,
                            localization,
                            urlHelperService,
                            parsingService,
                            dirtyCheckService,
                            commonVariableService,
                            mscrmSitemapUtilityService,
                            flyoutService,
                            localeService,
                            traceUtility,
                            mscmSiteMapScrollService,
                            propertiesPaneService) {
                            this.$scope = $scope;
                            this.$rootScope = $rootScope;
                            this.$compile = $compile;
                            this.$http = $http;
                            this.dataAccessService = dataAccessService;
                            this.localization = localization;
                            this.urlHelperService = urlHelperService;
                            this.parsingService = parsingService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.commonVariableService = commonVariableService;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.flyoutService = flyoutService;
                            this.localeService = localeService;
                            this.traceUtility = traceUtility;
                            this.mscmSiteMapScrollService = mscmSiteMapScrollService;
                            this.propertiesPaneService = propertiesPaneService;
                            this.urlList = [];
                            this.iconList = [];
                            this.clientList = [];
                            this.skuList = [];
                            this.PropertyDirectives = [];
                            this.GeneralPropertyDirectives = [];
                            this.AdvancedPropertyDirectives = [];
                            this.deactivateEventHandler = null;
                            this.isAdditionalDescriptionsOpen = false;
                            this.isAdditionalTitlesOpen = false;
                            this.isAdvancedSectionOpen = false;
                            this.showNoResultMessage = false;
                            this.showNoResultMessageForDashboard = false;
                            this.showNoResultMessageForIcon = false;
                            this.showNoResultMessageForOutlook = false;
                            this.propertiesDirectiveMapping = null;
                            this.IconMap = new Dictionary;
                            $scope.isRequired = true;
                            $scope.showNoRecordsForTitles = true;
                            $scope.showNoRecordsForDescriptions = true;
                            $scope.selection = [];
                            $scope.showPropertiesPane = false;
                            this.$scope.objectSubArea = {};
                            $scope.subAreaTypes = this.commonVariableService.getSubAreaTypes();
                            this.$scope["PropertyDirectives"] = this.PropertyDirectives;
                            this.$scope["GeneralPropertyDirectives"] = this.GeneralPropertyDirectives;
                            this.$scope["AdvancedPropertyDirectives"] = this.AdvancedPropertyDirectives;
                            this.$scope["baseLanguageTitle"] = this.BaseLanguageTitle;
                            this.notificationBrokerService = notificationBrokerService;
                            this.notificationBrokerService.RegisterObserver("evtSiteMapNodeSelected", this);
                            this.propertiesDirectiveMapping === null &&
                                this.dataAccessService.getPropertiesDirectiveMappingXml()
                                .then(function(response) { this.propertiesDirectiveMapping = response.SiteMap }
                                    .bind(this));
                            var propertyPaneController = this;
                            this.traceUtility.Scenario = mscrmSitemapDesigner.SitemapDesignerScenarios
                                .LoadPropertiesPaneData;
                            this.entityList = this.dataAccessService.getEntityListWrapper();
                            this.dashboardList = this.dataAccessService.getDashboardListWrapper();
                            this.isTitleInEditMode = [];
                            this.isDescriptionInEditMode = [];
                            this.BindLanguageLocaleList();
                            this.ArtifactList = [];
                            this.ArtifactListMap = new Mscrm.Designers.Common.Models.Dictionary;
                            this.ArtifactList
                                .push(new ArtifactTypeNode(1,
                                    this.localization.getResourceString("SitemapDesigner.EntityLabel")));
                            this.ArtifactList
                                .push(new ArtifactTypeNode(60,
                                    this.localization.getResourceString("SitemapDesigner.DashboardLabel")));
                            this.ArtifactListMap.add(Designers.Common.Models.ComponentTypeCode.Entity,
                                this.localization.getResourceString("SitemapDesigner.EntityLabel"));
                            this.ArtifactListMap.add(Designers.Common.Models.ComponentTypeCode.SystemForm,
                                this.localization.getResourceString("SitemapDesigner.DashboardLabel"));
                            this.BindIcons();
                            this.BindTitlesAndDescriptions(this.$scope.selectedNodeName_Properties);
                            this.$scope.$watch("rightPaneForm.$dirty", this.HandleRightPaneFormChange.bind(this));
                            this.$scope.propertiesDirectiveMapping = this.propertiesDirectiveMapping;
                            this.deactivateEventHandler = this.$rootScope
                                .$on("sitemapDeletion", this.HandleDeleteEvent.bind(this));
                            this.$scope.$on("$destroy", this.destroyEvent.bind(this));
                            this.sitemapTypeAheadModel = new mscrmSitemapDesigner.model.SiteMapTypeAheadFlyoutModel;
                            this.isSiteMapNodeContentDelete = false;
                            this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.isTitleInEditMode = [];
                            this.isDescriptionInEditMode = [];
                            this.$rootScope.$on(mscrmSitemapDesigner.SiteMapConstants.SitemapShowUnsupportedMessage,
                                this.HandleUnsupportedComponent.bind(this))
                        }

                        PropertiesPaneController.prototype.destroyEvent = function() { this.deactivateEventHandler() };
                        PropertiesPaneController.prototype.BindLanguageLocaleList = function() {
                            var langList = [], orgLCID = null, lanList = null;
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.languageList)) {
                                lanList = this.localeService.GetLanguageList();
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(lanList)) {
                                    this.languageList = lanList.slice();
                                    this.descLanguageList = lanList.slice();
                                    orgLCID = this.dataAccessService.getLCID();
                                    if (Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.defaultLanguage)) {
                                        this.defaultLanguage = this.localeService.GetDefaultLanguage(orgLCID);
                                        var indexBaseLanguage = this.languageList.indexOf(this.defaultLanguage);
                                        indexBaseLanguage > -1 && this.languageList.splice(indexBaseLanguage, 1);
                                        this.$scope.selectedTitleLanguageOption = null;
                                        this.$scope.selectedDescLanguage = this.defaultLanguage
                                    }
                                }
                            }
                        };
                        PropertiesPaneController.prototype.AddBaseLanguageTitle = function(node) {
                            var nodeValue = node.nodeValue, orgLCID = null;
                            orgLCID = this.dataAccessService.getLCID();
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this
                                    .defaultLanguage))
                                this.defaultLanguage = this.localeService.GetDefaultLanguage(orgLCID);
                            this.titleList != null && this.RemoveElement(orgLCID, "Title");
                            this.$scope.selectedTitleLanguageOption = this.defaultLanguage;
                            this.$scope.titleText = nodeValue;
                            this.AddTitleToNode()
                        };
                        PropertiesPaneController.prototype.BindIcons = function() {
                            var result = [];
                            this.dataAccessService.getWebResourceListWrapper(result).then(function(response) {
                                    if (result.length > 0) {
                                        this.urlList = result[0];
                                        this.iconList = [];
                                        if (result[1] != null)
                                            for (var i = 0;
                                                i < result[1].length;
                                                i++
                                            )
                                                !Designers.Common.Utility.StringUtilities
                                                    .IsNullOrEmpty(result[1][i].DisplayName) &&
                                                    this.iconList.push(result[1][i]);
                                        this.IconMap = result[2];
                                        !Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(this.$scope.PropertyDirective) &&
                                            !Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(this.$scope.PropertyDirective.nodeValue) &&
                                            this.BindSelectedvalues()
                                    }
                                }.bind(this),
                                function(error) {
                                    !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.$scope.PropertyDirective) &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.$scope.PropertyDirective.nodeValue) &&
                                        this.BindSelectedvalues()
                                }.bind(this))
                        };
                        PropertiesPaneController.prototype.setDefaultIconPathsFromWebResourceList = function() {
                            var webDefaultAreaIconList = this.iconList
                                .filter(function(value, index, array) {
                                    return value.WebResourceId ==
                                        Designers.Common.Constants.Defaults.DefaultAreaImageWebResourceId
                                });
                            webDefaultAreaIconList.length > 0 &&
                                this.commonVariableService
                                .setDefaultAreaImageStripUrl(webDefaultAreaIconList[0].webResourceImageUrl);
                            var webDefaultSubAreaIconList = this.iconList
                                .filter(function(value, index, array) {
                                    return value.WebResourceId ==
                                        Designers.Common.Constants.Defaults.DefaultSubAreaImageWebResourceId
                                });
                            webDefaultSubAreaIconList.length > 0 &&
                                this.commonVariableService
                                .setDefaultSubAreaImageStripUrl(webDefaultSubAreaIconList[0].webResourceImageUrl);
                            var webDefaultSubAreaWebResourceIconList = this.iconList
                                .filter(function(value, index, array) {
                                    return value.WebResourceId ==
                                        Designers.Common.Constants.Defaults.DefaultSubAreaWebResourceImageWebResourceId
                                });
                            if (webDefaultSubAreaWebResourceIconList.length > 0) {
                                this.commonVariableService
                                    .setDefaultWebResourceImageStripUrl(webDefaultSubAreaWebResourceIconList[0]
                                        .webResourceImageUrl);
                                this.commonVariableService
                                    .setDefaultURLImageStripUrl(webDefaultSubAreaWebResourceIconList[0]
                                        .webResourceImageUrl)
                            }
                        };
                        PropertiesPaneController.prototype
                            .HandleRightPaneFormChange = function(newValue, oldValue) {
                                newValue &&
                                    this.dirtyCheckService
                                    .setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm, true)
                            };
                        Object.defineProperty(PropertiesPaneController.prototype,
                            "ShouldShowNotification",
                            {
                                "get": function() {
                                    return Designers.Common.Utility.StringUtilities
                                        .IsNullOrEmpty(this.$scope.propertiesPaneMessage)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        PropertiesPaneController.prototype
                            .getID = function(resourceKey) { return this.localization.getResourceString(resourceKey) };
                        PropertiesPaneController.prototype.IsTypeAheadDisabled = function(selectedSubAreas) {
                            var isDisabled = false;
                            if (this.propertiesPaneService
                                .GetSelectedType() !=
                                mscrmSitemapDesigner.NodeTypes.SelectSubArea)
                                for (var _i = 0; _i < selectedSubAreas.length; _i++) {
                                    var subArea = selectedSubAreas[_i];
                                    if (this.propertiesPaneService.GetSelectedType() ===
                                        parseInt(mscrmSitemapDesigner.NodeTypes[subArea])) {
                                        isDisabled = true;
                                        break
                                    }
                                }
                            return isDisabled
                        };
                        PropertiesPaneController.prototype.RevertIdIfDuplicateOrEmpty = function(node) {
                            var nodeId = node.nodeValue[node.nodeLabel];
                            if (this.$scope.isDuplicateIdExist ||
                                Designers.Common.Utility.StringUtilities.IsNullOrEmpty(nodeId)) {
                                var areaSelected = this.$scope[mscrmSitemapDesigner.SiteMapConstants.AreaSelected],
                                    groupSelected = this.$scope[mscrmSitemapDesigner.SiteMapConstants.GroupSelected],
                                    subAreaSelected = this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                        .SubAreaSelected];
                                switch (node.nodeType) {
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Area]:
                                    node.nodeValue[node.nodeLabel] = areaSelected;
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Group]:
                                    node.nodeValue[node.nodeLabel] = groupSelected;
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea]:
                                    node.nodeValue[node.nodeLabel] = subAreaSelected;
                                    break
                                }
                                this.ClearDuplicateIdMessage()
                            }
                        };
                        PropertiesPaneController.prototype.CheckDuplicateIds = function(node) {
                            this.ClearDuplicateIdMessage();
                            var nodeId = node.nodeValue[node.nodeLabel];
                            if (node.nodeLabel === mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Id] &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(nodeId)) {
                                var areaSelected = this.$scope[mscrmSitemapDesigner.SiteMapConstants.AreaSelected],
                                    groupSelected = this.$scope[mscrmSitemapDesigner.SiteMapConstants.GroupSelected],
                                    subAreaSelected = this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                        .SubAreaSelected],
                                    nodeType = node.nodeType,
                                    nodeIndex = -1;
                                if (nodeType === mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Area] &&
                                    nodeId !== areaSelected) {
                                    nodeIndex = this.mscrmSitemapUtilityService.GetAreaIndexById(nodeId);
                                    if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(nodeIndex) &&
                                        nodeIndex !== -1)
                                        this
                                            .SetDuplicateIdMessage(mscrmSitemapDesigner.LocalizationConstants
                                                .AreaIdAlreadyExists);
                                    else {
                                        this.mscrmSitemapUtilityService.UpdateAreaId(areaSelected, nodeId);
                                        this.$scope[mscrmSitemapDesigner.SiteMapConstants.AreaSelected] = nodeId
                                    }
                                } else if (nodeType ===
                                    mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Group
                                    ] &&
                                    nodeId !== groupSelected) {
                                    nodeIndex = this.mscrmSitemapUtilityService.GetGroupIndexById(areaSelected, nodeId);
                                    if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(nodeIndex) &&
                                        nodeIndex !== -1)
                                        this
                                            .SetDuplicateIdMessage(mscrmSitemapDesigner.LocalizationConstants
                                                .GroupIdAlreadyExists);
                                    else {
                                        this.mscrmSitemapUtilityService
                                            .UpdateGroupId(areaSelected, groupSelected, nodeId);
                                        this.$scope[mscrmSitemapDesigner.SiteMapConstants.GroupSelected] = nodeId
                                    }
                                } else if (nodeType ===
                                    mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea] &&
                                    nodeId !== subAreaSelected) {
                                    nodeIndex = this.mscrmSitemapUtilityService
                                        .GetSubAreaIndexByAreaId(areaSelected, nodeId);
                                    if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(nodeIndex) &&
                                        nodeIndex !== -1)
                                        this
                                            .SetDuplicateIdMessage(mscrmSitemapDesigner.LocalizationConstants
                                                .SubAreaIdAlreadyExists);
                                    else {
                                        this.mscrmSitemapUtilityService
                                            .UpdateSubAreaId(areaSelected, subAreaSelected, nodeId);
                                        this.$scope[mscrmSitemapDesigner.SiteMapConstants.SubAreaSelected] = nodeId
                                    }
                                }
                            }
                        };
                        PropertiesPaneController.prototype.SetDuplicateIdMessage = function(messageConstant) {
                            this.$scope.propertiesPaneMessage = this.getID(messageConstant);
                            this.$scope.isDuplicateIdExist = true
                        };
                        PropertiesPaneController.prototype.ClearDuplicateIdMessage = function() {
                            this.$scope.propertiesPaneMessage = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.$scope.isDuplicateIdExist = false
                        };
                        PropertiesPaneController.prototype.PublishNotification = function(eventName, context) {
                            var notificationObj = new mscrmSitemapDesigner.model.NotificationObj(eventName, context);
                            this.notificationBrokerService.Notify(notificationObj)
                        };
                        PropertiesPaneController.prototype.Notify = function(notificationObj) {
                            for (var node in notificationObj.context) {
                                this.$scope.selectedNodeName_Properties = node;
                                this.$scope.selectedNode_Properties = notificationObj.context[node];
                                this.$scope.selectedNodeLabel = this.localization
                                    .getResourceString("SitemapDesigner." + node + "General")
                            }
                            this.$scope.showPropertiesPane = true;
                            this.$scope.isGeneralSectionOpen = true;
                            var nodeAttributes,
                                categoryAttributes,
                                directives = [],
                                generalDirectives = [],
                                advancedDirectives = [],
                                directiveObj;
                            for (var node in notificationObj.context) {
                                if (Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.propertiesDirectiveMapping)) return;
                                categoryAttributes = this.propertiesDirectiveMapping[node];
                                for (var category in categoryAttributes) {
                                    directiveObj = {};
                                    directiveObj["name"] = categoryAttributes[category].ValueDirective;
                                    directiveObj["nodeLabel"] = category;
                                    directiveObj["nodeType"] = node;
                                    directives.push(directiveObj);
                                    nodeAttributes = categoryAttributes[category];
                                    for (var attr in nodeAttributes) {
                                        if (attr == mscrmSitemapDesigner.PropertyCategoryTypes.ValueDirective) continue;
                                        directiveObj = {};
                                        directiveObj["name"] = nodeAttributes[attr].ValueDirective;
                                        directiveObj["nodeLabel"] = attr;
                                        directiveObj["nodeType"] = node;
                                        if (attr ===
                                            mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Title]
                                        )
                                            directiveObj["nodeValue"] = this
                                                .PopulateBaseLanguageTitle(node, notificationObj);
                                        else directiveObj["nodeValue"] = notificationObj.context[node];
                                        directiveObj["nodeDisplayName"] = this.localization
                                            .getResourceString("SitemapDesigner." + attr + ".Key");
                                        directiveObj["nodeTooltip"] = this.localization
                                            .getResourceString("SitemapDesigner." + node + attr + ".Tooltip");
                                        if (nodeAttributes[attr]
                                            .OptionSet) directiveObj["optionSet"] = nodeAttributes[attr].OptionSet;
                                        if (!Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(directiveObj["nodeValue"]) &&
                                            !Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(directiveObj["nodeValue"]["Url"]) &&
                                            !Designers.Common.Utility.StringUtilities
                                            .IsNullOrEmpty(directiveObj["nodeValue"]["Url"]))
                                            if (directiveObj["nodeValue"]["Url"] != null &&
                                                directiveObj["nodeValue"]["Url"].indexOf("%") != -1)
                                                do
                                                    directiveObj["nodeValue"]["Url"] =
                                                        decodeURIComponent(directiveObj["nodeValue"]["Url"]);
                                                while (directiveObj["nodeValue"]["Url"].indexOf("%") != -1);
                                        if (category == mscrmSitemapDesigner.PropertyCategoryTypes.General
                                        ) generalDirectives.push(directiveObj);
                                        else advancedDirectives.push(directiveObj)
                                    }
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(directiveObj["nodeValue"]) &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(directiveObj["nodeValue"]["Id"]) &&
                                        !Designers.Common.Utility.StringUtilities
                                        .IsNullOrEmpty(directiveObj["nodeValue"]["Id"]))
                                        if (node === mscrmSitemapDesigner.SiteMapConstants.Area) {
                                            this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                .AreaSelected] = directiveObj["nodeValue"]["Id"];
                                            var groupList = directiveObj["nodeValue"]["Group"];
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(groupList) &&
                                                groupList.length > 0) {
                                                this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                    .GroupSelected] = directiveObj["nodeValue"]["Group"][0]["Id"];
                                                var subAreaList = directiveObj["nodeValue"]["Group"][0]["SubArea"];
                                                if (!Designers.Common.Utility.ScriptUtilities
                                                    .IsNullOrUndefined(subAreaList) &&
                                                    subAreaList
                                                    .length >
                                                    0)
                                                    this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                            .SubAreaSelected] = directiveObj["nodeValue"]["Group"][0][
                                                            "SubArea"]
                                                        [0]["Id"]
                                            } else {
                                                this.$scope[mscrmSitemapDesigner.SiteMapConstants.GroupSelected] = null;
                                                this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                    .SubAreaSelected] = null
                                            }
                                        } else if (node === mscrmSitemapDesigner.SiteMapConstants.Group) {
                                            this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                .GroupSelected] = directiveObj["nodeValue"]["Id"];
                                            var subAreaList = directiveObj["nodeValue"]["SubArea"];
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(subAreaList) &&
                                                subAreaList
                                                .length >
                                                0)
                                                this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                    .SubAreaSelected] = directiveObj["nodeValue"]["SubArea"][0]["Id"];
                                            else
                                                this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                    .SubAreaSelected] = null
                                        } else if (node === mscrmSitemapDesigner.SiteMapConstants.SubArea
                                        )
                                            this.$scope[mscrmSitemapDesigner.SiteMapConstants
                                                .SubAreaSelected] = directiveObj["nodeValue"]["Id"]
                                }
                            }
                            this.$scope["PropertyDirectives"] = directives;
                            this.$scope["GeneralPropertyDirectives"] = generalDirectives;
                            this.$scope["AdvancedPropertyDirectives"] = advancedDirectives
                        };
                        PropertiesPaneController.prototype.PopulateBaseLanguageTitle = function(node, notifyObj) {
                            this.BaseLanguageTitle = "";
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(notifyObj.context[node].Titles)) this.BaseLanguageTitle = "";
                            else {
                                var orgLCID = null;
                                orgLCID = this.dataAccessService.getLCID();
                                this.finaltitleList = notifyObj.context[node].Titles.slice();
                                for (var i = 0; i < notifyObj.context[node].Titles.length; i++)
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(notifyObj.context[node].Titles[i].Title[0]))
                                        for (var j = 0; j < notifyObj.context[node].Titles[i].Title.length; j++)
                                            if (orgLCID == notifyObj.context[node].Titles[i].Title[j].LCID) {
                                                this.BaseLanguageTitle = notifyObj.context[node].Titles[i].Title[j]
                                                    .Title;
                                                this.finaltitleList.splice(j, 1)
                                            }
                            }
                            return this.BaseLanguageTitle
                        };
                        PropertiesPaneController.prototype.RemoveBaseLanguageTitle = function(titlelist) {
                            var orgLCID = null;
                            orgLCID = this.dataAccessService.getLCID();
                            for (var i = 0;
                                i < titlelist.length;
                                i++
                            ) orgLCID == titlelist[i].LCID && titlelist.splice(i, 1)
                        };
                        PropertiesPaneController.prototype
                            .PopulateDictionaryforBaseLanguageTitle = function(areaTitle, id) {
                                var orgLCID = null;
                                orgLCID = this.dataAccessService.getLCID();
                                orgLCID == areaTitle.LCID && this.propertiesPaneService.addTitle(id, areaTitle)
                            };
                        PropertiesPaneController.prototype.AddTitleToNode = function() {
                            if (this.$scope.titleText != "" && this.$scope.selectedTitleLanguageOption != null) {
                                switch (this.$scope.selectedNodeName_Properties) {
                                case "Area":
                                    if (this.$scope.SiteMap.Area != null)
                                        for (var i = 0; i < this.$scope.SiteMap.Area.length; i++)
                                            if (this.$scope.SiteMap.Area[i].Id ===
                                                this.$scope.selectedNode_Properties.Id)
                                                if (this.$scope.selectedTitleLanguageOption != null &&
                                                    this.$scope.titleText != null) {
                                                    var areaTitle = new mscrmSitemapDesigner.model.Title;
                                                    areaTitle.LCID = this.$scope.selectedTitleLanguageOption.LocaleId;
                                                    areaTitle.Title = this.$scope.titleText;
                                                    this
                                                        .PopulateDictionaryforBaseLanguageTitle(areaTitle,
                                                            this.$scope.selectedNode_Properties.Id);
                                                    if (this.titleList != null ||
                                                        !Designers.Common.Utility.ScriptUtilities
                                                        .IsNullOrUndefined(this.$scope.SiteMap.Area[i].Titles) &&
                                                        !Designers.Common.Utility.ScriptUtilities
                                                        .IsNullOrUndefined(this.$scope.SiteMap.Area[i].Titles[0]) &&
                                                        this.$scope.SiteMap.Area[i].Titles[0].Title != null &&
                                                        this.$scope.SiteMap.Area[i].Titles[0].Title.length != 0) {
                                                        this
                                                            .BindTitlesAndDescriptions(this.$scope
                                                                .selectedNodeName_Properties);
                                                        if (this.CheckValueAlreadyExists(this.titleList, areaTitle))
                                                            if (this.$scope.SiteMap.Area[i].Titles[0].Title != null) {
                                                                this.$scope.SiteMap.Area[i].Titles[0].Title
                                                                    .push(JSON.parse(JSON.stringify(areaTitle)));
                                                                this.propertiesPaneService
                                                                    .getTitleList(this.$scope.selectedNode_Properties
                                                                        .Id) &&
                                                                    this
                                                                    .CheckValueAlreadyExists(this.titleList,
                                                                        this.propertiesPaneService
                                                                        .getTitleList(this.$scope
                                                                            .selectedNode_Properties
                                                                            .Id)) &&
                                                                    this.$scope.SiteMap.Area[i].Titles[0].Title
                                                                    .push(JSON
                                                                        .parse(JSON
                                                                            .stringify(this.propertiesPaneService
                                                                                .getTitleList(this.$scope
                                                                                    .selectedNode_Properties.Id))));
                                                                this.finaltitleList = this.$scope.SiteMap.Area[i]
                                                                    .Titles[0]
                                                                    .Title.slice();
                                                                this.RemoveBaseLanguageTitle(this.finaltitleList);
                                                                this.$scope.showNoRecordsForTitles = false;
                                                                this.ClearTitleInputs();
                                                                this.isTitleInEditMode.push(false)
                                                            }
                                                        break
                                                    } else {
                                                        this
                                                            .AddTitleAndDescriptionForEmptyNodes("Title",
                                                                this.$scope.SiteMap.Area[i],
                                                                areaTitle);
                                                        this.finaltitleList = this.$scope.SiteMap.Area[i].Titles[0]
                                                            .Title
                                                            .slice();
                                                        this.propertiesPaneService
                                                            .getTitleList(this.$scope.selectedNode_Properties.Id) &&
                                                            this
                                                            .CheckValueAlreadyExists(this.titleList,
                                                                this.propertiesPaneService
                                                                .getTitleList(this.$scope.selectedNode_Properties
                                                                    .Id)) &&
                                                            this.$scope.SiteMap.Area[i].Titles[0].Title
                                                            .push(JSON.parse(JSON
                                                                .stringify(this.propertiesPaneService
                                                                    .getTitleList(this.$scope.selectedNode_Properties
                                                                        .Id))));
                                                        this.RemoveBaseLanguageTitle(this.finaltitleList);
                                                        this.ClearTitleInputs();
                                                        this.isTitleInEditMode.push(false);
                                                        break
                                                    }
                                                }
                                    break;
                                case "Group":
                                    if (this.$scope.SiteMap.Area != null)
                                        for (var i = 0; i < this.$scope.SiteMap.Area.length; i++)
                                            if (this.$scope.SiteMap.Area[i].Id == this.$scope.selectedArea.Id)
                                                if (this.$scope.SiteMap.Area[i].Group != null)
                                                    for (var j = 0; j < this.$scope.SiteMap.Area[i].Group.length; j++)
                                                        if (this.$scope.SiteMap.Area[i].Group[j].Id ===
                                                            this.$scope.selectedNode_Properties.Id)
                                                            if (
                                                                this.$scope.selectedTitleLanguageOption != null &&
                                                                    this.$scope.titleText != null) {
                                                                var groupTitle = new mscrmSitemapDesigner.model.Title;
                                                                groupTitle.LCID = this.$scope
                                                                    .selectedTitleLanguageOption
                                                                    .LocaleId;
                                                                groupTitle.Title = this.$scope.titleText;
                                                                this
                                                                    .PopulateDictionaryforBaseLanguageTitle(groupTitle,
                                                                        this.$scope.selectedNode_Properties.Id);
                                                                if (
                                                                    this.titleList != null ||
                                                                        !Designers.Common.Utility.ScriptUtilities
                                                                        .IsNullOrUndefined(this.$scope.SiteMap.Area[i]
                                                                            .Group[j].Titles) &&
                                                                        !Designers.Common.Utility.ScriptUtilities
                                                                        .IsNullOrUndefined(this.$scope.SiteMap.Area[i]
                                                                            .Group[j].Titles[0]) &&
                                                                        this.$scope.SiteMap.Area[i].Group[j].Titles[0]
                                                                        .Title !=
                                                                        null &&
                                                                        this.$scope.SiteMap.Area[i].Group[j].Titles[0]
                                                                        .Title
                                                                        .length !=
                                                                        0) {
                                                                    this
                                                                        .BindTitlesAndDescriptions(this.$scope
                                                                            .selectedNodeName_Properties);
                                                                    if (this
                                                                        .CheckValueAlreadyExists(this.titleList,
                                                                            groupTitle)
                                                                    )
                                                                        if (this.$scope.SiteMap.Area[i].Group[j]
                                                                            .Titles[0]
                                                                            .Title) {
                                                                            this.$scope.SiteMap.Area[i].Group[j]
                                                                                .Titles[0]
                                                                                .Title
                                                                                .push(JSON.parse(JSON
                                                                                    .stringify(groupTitle)));
                                                                            this.propertiesPaneService
                                                                                .getTitleList(this.$scope
                                                                                    .selectedNode_Properties.Id) &&
                                                                                this
                                                                                .CheckValueAlreadyExists(this.titleList,
                                                                                    this.propertiesPaneService
                                                                                    .getTitleList(this.$scope
                                                                                        .selectedNode_Properties.Id)) &&
                                                                                this.$scope.SiteMap.Area[i].Group[j]
                                                                                .Titles[0].Title
                                                                                .push(JSON.parse(JSON.stringify(this
                                                                                    .propertiesPaneService
                                                                                    .getTitleList(this.$scope
                                                                                        .selectedNode_Properties.Id))));
                                                                            this.finaltitleList = this.$scope.SiteMap
                                                                                .Area[i].Group[j].Titles[0].Title
                                                                                .slice();
                                                                            this
                                                                                .RemoveBaseLanguageTitle(this
                                                                                    .finaltitleList);
                                                                            this.ClearTitleInputs();
                                                                            this.$scope.showNoRecordsForTitles = false;
                                                                            this.isTitleInEditMode.push(false)
                                                                        }
                                                                    break
                                                                } else {
                                                                    this
                                                                        .AddTitleAndDescriptionForEmptyNodes("Title",
                                                                            this.$scope.SiteMap.Area[i].Group[j],
                                                                            groupTitle);
                                                                    this.propertiesPaneService
                                                                        .getTitleList(this.$scope
                                                                            .selectedNode_Properties
                                                                            .Id) &&
                                                                        this
                                                                        .CheckValueAlreadyExists(this.titleList,
                                                                            this.propertiesPaneService
                                                                            .getTitleList(this.$scope
                                                                                .selectedNode_Properties.Id)) &&
                                                                        this.$scope.SiteMap.Area[i].Group[j].Titles[0]
                                                                        .Title
                                                                        .push(JSON
                                                                            .parse(JSON
                                                                                .stringify(this.propertiesPaneService
                                                                                    .getTitleList(this.$scope
                                                                                        .selectedNode_Properties.Id))));
                                                                    this.finaltitleList = this.$scope.SiteMap.Area[i]
                                                                        .Group[j].Titles[0].Title.slice();
                                                                    this.RemoveBaseLanguageTitle(this.finaltitleList);
                                                                    this.ClearTitleInputs();
                                                                    this.isTitleInEditMode.push(false);
                                                                    break
                                                                }
                                                            }
                                    break;
                                case "SubArea":
                                    if (this.$scope.SiteMap.Area != null)
                                        for (var i = 0; i < this.$scope.SiteMap.Area.length; i++) {
                                            if (this.$scope.SiteMap.Area.length == 1 &&
                                                Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(this.$scope.$parent.AreaSelected)
                                            ) this.$scope.$parent["AreaSelected"] = this.$scope.SiteMap.Area[i].Id;
                                            if (this.$scope.$parent != null &&
                                                this.$scope.$parent.AreaSelected != null &&
                                                this.$scope.$parent.AreaSelected == this.$scope.SiteMap.Area[i].Id)
                                                if (this.$scope.SiteMap.Area[i].Group != null)
                                                    for (var j = 0; j < this.$scope.SiteMap.Area[i].Group.length; j++)
                                                        if (this.$scope.SiteMap.Area[i].Group[j].SubArea != null)
                                                            for
                                                            (var k = 0;
                                                                k < this.$scope.SiteMap.Area[i].Group[j].SubArea.length;
                                                                k++)
                                                                if (
                                                                    this.$scope.SiteMap.Area[i].Group[j].SubArea[k]
                                                                        .Id ===
                                                                        this.$scope.selectedNode_Properties.Id)
                                                                    if (
                                                                        this.$scope.selectedTitleLanguageOption !=
                                                                            null &&
                                                                            this.$scope.titleText != null) {
                                                                        var
                                                                            subAreaTitle = new mscrmSitemapDesigner
                                                                                .model
                                                                                .Title;
                                                                        subAreaTitle.LCID = this.$scope
                                                                            .selectedTitleLanguageOption.LocaleId;
                                                                        subAreaTitle.Title = this.$scope.titleText;
                                                                        this
                                                                            .PopulateDictionaryforBaseLanguageTitle(subAreaTitle, this.$scope.$parent.AreaSelected + this.$scope.selectedNode_Properties.Id);
                                                                        if (
                                                                            this.titleList != null &&
                                                                                this.titleList.length != 0 ||
                                                                                !Designers.Common.Utility
                                                                                .ScriptUtilities
                                                                                .IsNullOrUndefined(this.$scope.SiteMap
                                                                                    .Area[i].Group[j].SubArea[k]
                                                                                    .Titles) &&
                                                                                !Designers.Common.Utility
                                                                                .ScriptUtilities
                                                                                .IsNullOrUndefined(this.$scope.SiteMap
                                                                                    .Area[i].Group[j].SubArea[k]
                                                                                    .Titles[0]) &&
                                                                                this.$scope.SiteMap.Area[i].Group[j]
                                                                                .SubArea[k].Titles[0].Title !=
                                                                                null &&
                                                                                this.$scope.SiteMap.Area[i].Group[j]
                                                                                .SubArea[k].Titles[0].Title.length !=
                                                                                0) {
                                                                            this
                                                                                .BindTitlesAndDescriptions(this.$scope
                                                                                    .selectedNodeName_Properties);
                                                                            if (this
                                                                                .CheckValueAlreadyExists(this.titleList,
                                                                                    subAreaTitle))
                                                                                if (
                                                                                    this.$scope.SiteMap.Area[i].Group[j]
                                                                                        .SubArea[k].Titles[0].Title !=
                                                                                        null) {
                                                                                    this.$scope.SiteMap.Area[i].Group[j]
                                                                                        .SubArea[k].Titles[0].Title
                                                                                        .push(JSON.parse(JSON
                                                                                            .stringify(subAreaTitle)));
                                                                                    this.propertiesPaneService
                                                                                        .getTitleList(this.$scope
                                                                                            .$parent
                                                                                            .AreaSelected +
                                                                                            this.$scope
                                                                                            .selectedNode_Properties
                                                                                            .Id) &&
                                                                                        this
                                                                                        .CheckValueAlreadyExists(this
                                                                                            .titleList,
                                                                                            this.propertiesPaneService
                                                                                            .getTitleList(this.$scope
                                                                                                .$parent.AreaSelected +
                                                                                                this.$scope
                                                                                                .selectedNode_Properties
                                                                                                .Id)) &&
                                                                                        this.$scope.SiteMap.Area[i]
                                                                                        .Group[j]
                                                                                        .SubArea[k].Titles[0].Title
                                                                                        .push(JSON.parse(JSON
                                                                                            .stringify(this
                                                                                                .propertiesPaneService
                                                                                                .getTitleList(this
                                                                                                    .$scope
                                                                                                    .$parent
                                                                                                    .AreaSelected +
                                                                                                    this.$scope
                                                                                                    .selectedNode_Properties
                                                                                                    .Id))));
                                                                                    this.finaltitleList = this.$scope
                                                                                        .SiteMap.Area[i].Group[j]
                                                                                        .SubArea[k]
                                                                                        .Titles[0].Title.slice();
                                                                                    this
                                                                                        .RemoveBaseLanguageTitle(this
                                                                                            .finaltitleList);
                                                                                    this.ClearTitleInputs();
                                                                                    this.$scope
                                                                                        .showNoRecordsForTitles = false;
                                                                                    this.isTitleInEditMode.push(false)
                                                                                }
                                                                            break
                                                                        } else {
                                                                            this
                                                                                .AddTitleAndDescriptionForEmptyNodes("Title", this.$scope.SiteMap.Area[i].Group[j].SubArea[k], subAreaTitle);
                                                                            this.propertiesPaneService
                                                                                .getTitleList(this.$scope.$parent
                                                                                    .AreaSelected +
                                                                                    this.$scope.selectedNode_Properties
                                                                                    .Id) &&
                                                                                this
                                                                                .CheckValueAlreadyExists(this.titleList,
                                                                                    this.propertiesPaneService
                                                                                    .getTitleList(this.$scope.$parent
                                                                                        .AreaSelected +
                                                                                        this.$scope
                                                                                        .selectedNode_Properties
                                                                                        .Id)) &&
                                                                                this.$scope.SiteMap.Area[i].Group[j]
                                                                                .SubArea[k].Titles[0].Title
                                                                                .push(JSON.parse(JSON.stringify(this
                                                                                    .propertiesPaneService
                                                                                    .getTitleList(this.$scope.$parent
                                                                                        .AreaSelected +
                                                                                        this.$scope
                                                                                        .selectedNode_Properties
                                                                                        .Id))));
                                                                            this.finaltitleList = this.$scope.SiteMap
                                                                                .Area[i].Group[j].SubArea[k].Titles[0]
                                                                                .Title
                                                                                .slice();
                                                                            this
                                                                                .RemoveBaseLanguageTitle(this
                                                                                    .finaltitleList);
                                                                            this.ClearTitleInputs();
                                                                            this.isTitleInEditMode.push(false);
                                                                            break
                                                                        }
                                                                    }
                                        }
                                    break
                                }
                                this.isSiteMapNodeContentDelete = false
                            }
                        };
                        PropertiesPaneController.prototype.AddDescriptionToNode = function() {
                            if (this.$scope.descriptionText != "" && this.$scope.selectedDescLanguage != null) {
                                switch (this.$scope.selectedNodeName_Properties) {
                                case "Area":
                                    if (this.$scope.SiteMap.Area)
                                        for (var i = 0; i < this.$scope.SiteMap.Area.length; i++)
                                            if (this.$scope.SiteMap.Area[i].Id ===
                                                this.$scope.selectedNode_Properties.Id)
                                                if (this.$scope.selectedDescLanguage != null &&
                                                    this.$scope.descriptionText != null) {
                                                    var areaDescription = new mscrmSitemapDesigner.model.Description;
                                                    areaDescription.LCID = this.$scope.selectedDescLanguage.LocaleId;
                                                    areaDescription.Description = this.$scope.descriptionText;
                                                    if (this.descriptionList != null) {
                                                        if (this
                                                            .CheckValueAlreadyExists(this.descriptionList,
                                                                areaDescription))
                                                            if (
                                                                this.$scope.SiteMap.Area[i].Descriptions[0]
                                                                    .Description !=
                                                                    null) {
                                                                this.$scope.SiteMap.Area[i].Descriptions[0].Description
                                                                    .push(JSON.parse(JSON.stringify(areaDescription)));
                                                                this.ClearDescriptionInputs();
                                                                this.$scope.showNoRecordsForDescriptions = false;
                                                                this.isDescriptionInEditMode.push(false)
                                                            }
                                                        break
                                                    } else {
                                                        this
                                                            .AddTitleAndDescriptionForEmptyNodes("Description",
                                                                this.$scope.SiteMap.Area[i],
                                                                areaDescription);
                                                        this.ClearDescriptionInputs();
                                                        this.isDescriptionInEditMode.push(false);
                                                        break
                                                    }
                                                }
                                    break;
                                case "Group":
                                    if (this.$scope.SiteMap.Area)
                                        for (var i = 0; i < this.$scope.SiteMap.Area.length; i++)
                                            if (this.$scope.SiteMap.Area[i].Id == this.$scope.selectedArea.Id)
                                                if (this.$scope.SiteMap.Area[i].Group)
                                                    for (var j = 0; j < this.$scope.SiteMap.Area[i].Group.length; j++)
                                                        if (this.$scope.SiteMap.Area[i].Group[j].Id ===
                                                            this.$scope.selectedNode_Properties.Id)
                                                            if (
                                                                this.$scope.selectedDescLanguage != null &&
                                                                    this.$scope.descriptionText != null) {
                                                                var
                                                                    groupDescription = new mscrmSitemapDesigner.model
                                                                        .Description;
                                                                groupDescription.LCID = this.$scope.selectedDescLanguage
                                                                    .LocaleId;
                                                                groupDescription.Description = this.$scope
                                                                    .descriptionText;
                                                                if (this.descriptionList != null) {
                                                                    if (this
                                                                        .CheckValueAlreadyExists(this.descriptionList,
                                                                            groupDescription))
                                                                        if (
                                                                            this.$scope.SiteMap.Area[i].Group[j]
                                                                                .Descriptions[0].Description !=
                                                                                null) {
                                                                            this.$scope.SiteMap.Area[i].Group[j]
                                                                                .Descriptions[0].Description
                                                                                .push(JSON.parse(JSON
                                                                                    .stringify(groupDescription)));
                                                                            this.ClearDescriptionInputs();
                                                                            this.$scope
                                                                                .showNoRecordsForDescriptions = false;
                                                                            this.isDescriptionInEditMode.push(false)
                                                                        }
                                                                    break
                                                                } else {
                                                                    this
                                                                        .AddTitleAndDescriptionForEmptyNodes("Description",
                                                                            this.$scope.SiteMap.Area[i].Group[j],
                                                                            groupDescription);
                                                                    this.ClearDescriptionInputs();
                                                                    this.isDescriptionInEditMode.push(false);
                                                                    break
                                                                }
                                                            }
                                    break;
                                case "SubArea":
                                    if (this.$scope.SiteMap.Area != null)
                                        for (var i = 0; i < this.$scope.SiteMap.Area.length; i++)
                                            if (this.$scope.SiteMap.Area[i].Group != null)
                                                for (var j = 0; j < this.$scope.SiteMap.Area[i].Group.length; j++)
                                                    if (this.$scope.SiteMap.Area[i].Group[j].SubArea != null)
                                                        for (var k = 0;
                                                            k < this.$scope.SiteMap.Area[i].Group[j].SubArea.length;
                                                            k++)
                                                            if (
                                                                this.$scope.SiteMap.Area[i].Group[j].SubArea[k].Id ===
                                                                    this.$scope.selectedNode_Properties.Id)
                                                                if (
                                                                    this.$scope.selectedDescLanguage != null &&
                                                                        this.$scope.descriptionText != null) {
                                                                    var
                                                                        subAreaDescription = new mscrmSitemapDesigner
                                                                            .model
                                                                            .Description;
                                                                    subAreaDescription.LCID = this.$scope
                                                                        .selectedDescLanguage.LocaleId;
                                                                    subAreaDescription.Description = this.$scope
                                                                        .descriptionText;
                                                                    if (this.descriptionList != null) {
                                                                        if (this
                                                                            .CheckValueAlreadyExists(this
                                                                                .descriptionList,
                                                                                subAreaDescription))
                                                                            if (
                                                                                this.$scope.SiteMap.Area[i].Group[j]
                                                                                    .SubArea[k].Descriptions[0]
                                                                                    .Description !=
                                                                                    null) {
                                                                                this.$scope.SiteMap.Area[i].Group[j]
                                                                                    .SubArea[k].Descriptions[0]
                                                                                    .Description
                                                                                    .push(JSON.parse(JSON
                                                                                        .stringify(subAreaDescription)));
                                                                                this.ClearDescriptionInputs();
                                                                                this.$scope
                                                                                    .showNoRecordsForDescriptions =
                                                                                    false;
                                                                                this.isDescriptionInEditMode.push(false)
                                                                            }
                                                                        break
                                                                    } else {
                                                                        this
                                                                            .AddTitleAndDescriptionForEmptyNodes("Description", this.$scope.SiteMap.Area[i].Group[j].SubArea[k], subAreaDescription);
                                                                        this.ClearDescriptionInputs();
                                                                        this.isDescriptionInEditMode.push(false);
                                                                        break
                                                                    }
                                                                }
                                    break
                                }
                                this.isSiteMapNodeContentDelete = false
                            }
                        };
                        PropertiesPaneController.prototype.BindTitlesAndDescriptions = function(selectedNode) {
                            var titlesList = [], descsList = [];
                            switch (selectedNode) {
                            case "Area":
                                if (this.$scope.SiteMap[this.$scope.selectedNodeName_Properties] != null &&
                                    this.$scope.SiteMap[this.$scope.selectedNodeName_Properties].length > 0)
                                    if (this.$scope.SiteMap.Area != null)
                                        for (var i = 0; i < this.$scope.SiteMap.Area.length; i++)
                                            if (this.$scope.SiteMap.Area[i].Id ===
                                                this.$scope.selectedNode_Properties.Id) {
                                                titlesList = this.$scope.SiteMap[this.$scope
                                                        .selectedNodeName_Properties][i]
                                                    .Titles;
                                                descsList = this.$scope.SiteMap[this.$scope
                                                        .selectedNodeName_Properties][i]
                                                    .Descriptions;
                                                if (!angular.isUndefined(titlesList) &&
                                                    !angular.isUndefined(titlesList[0]))
                                                    if (!Designers.Common.Utility.ScriptUtilities
                                                        .IsNullOrUndefined(titlesList[0].Title) &&
                                                        titlesList[0].Title.length > 0) {
                                                        this.titleList = titlesList[0].Title;
                                                        this.finaltitleList = this.titleList.slice();
                                                        this.RemoveBaseLanguageTitle(this.finaltitleList);
                                                        this.$scope.showNoRecordsForTitles = false;
                                                        this.ClearTitleInputs()
                                                    }
                                                if (!angular.isUndefined(descsList) &&
                                                    !angular.isUndefined(descsList[0]))
                                                    if (!Designers.Common.Utility.ScriptUtilities
                                                        .IsNullOrUndefined(descsList[0].Description) &&
                                                        descsList[0].Description.length > 0) {
                                                        this.descriptionList = descsList[0].Description;
                                                        this.$scope.showNoRecordsForDescriptions = false;
                                                        this.ClearDescriptionInputs()
                                                    }
                                                break
                                            }
                                break;
                            case "Group":
                                if (this.$scope.SiteMap.Area != null)
                                    for (var i = 0; i < this.$scope.SiteMap.Area.length; i++)
                                        if (this.$scope.SiteMap.Area[i].Id == this.$scope.selectedArea.Id)
                                            if (this.$scope.SiteMap.Area[i].Group)
                                                for (var j = 0; j < this.$scope.SiteMap.Area[i].Group.length; j++)
                                                    if (this.$scope.SiteMap.Area[i].Group[j].Id ===
                                                        this.$scope.selectedNode_Properties.Id)
                                                        if (!angular.isUndefined(this.$scope.SiteMap.Area[i].Group)) {
                                                            titlesList = this.$scope.SiteMap.Area[i].Group[j].Titles;
                                                            descsList = this.$scope.SiteMap.Area[i].Group[j]
                                                                .Descriptions;
                                                            if (
                                                                !angular.isUndefined(titlesList) &&
                                                                    !angular.isUndefined(titlesList[0]))
                                                                if (
                                                                    !Designers.Common.Utility.ScriptUtilities
                                                                        .IsNullOrUndefined(titlesList[0].Title) &&
                                                                        titlesList[0].Title.length > 0) {
                                                                    this.titleList = titlesList[0].Title;
                                                                    this.finaltitleList = this.titleList.slice();
                                                                    this.RemoveBaseLanguageTitle(this.finaltitleList);
                                                                    this.$scope.showNoRecordsForTitles = false;
                                                                    this.ClearTitleInputs()
                                                                }
                                                            if (
                                                                !angular.isUndefined(descsList) &&
                                                                    !angular.isUndefined(descsList[0]))
                                                                if (
                                                                    !Designers.Common.Utility.ScriptUtilities
                                                                        .IsNullOrUndefined(descsList[0].Description) &&
                                                                        descsList[0].Description.length > 0) {
                                                                    this.descriptionList = descsList[0].Description;
                                                                    this.$scope.showNoRecordsForDescriptions = false;
                                                                    this.ClearDescriptionInputs()
                                                                }
                                                            break
                                                        }
                                break;
                            case "SubArea":
                                if (this.$scope.SiteMap.Area)
                                    for (var i = 0; i < this.$scope.SiteMap.Area.length; i++) {
                                        if (this.$scope.SiteMap.Area.length == 1 &&
                                            Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(this.$scope.$parent
                                                .AreaSelected)
                                        ) this.$scope.$parent["AreaSelected"] = this.$scope.SiteMap.Area[i].Id;
                                        if (!angular.isUndefined(this.$scope.SiteMap.Area[i].Group))
                                            if (this.$scope.$parent != null &&
                                                this.$scope.$parent.AreaSelected != null &&
                                                this.$scope.$parent.AreaSelected == this.$scope.SiteMap.Area[i].Id)
                                                for (var j = 0; j < this.$scope.SiteMap.Area[i].Group.length; j++)
                                                    if (!angular
                                                        .isUndefined(this.$scope.SiteMap.Area[i].Group[j].SubArea))
                                                        for (var k = 0;
                                                            k < this.$scope.SiteMap.Area[i].Group[j].SubArea.length;
                                                            k++)
                                                            if (
                                                                this.$scope.SiteMap.Area[i].Group[j].SubArea[k].Id ===
                                                                    this.$scope.selectedNode_Properties.Id) {
                                                                titlesList = this.$scope.SiteMap.Area[i].Group[j]
                                                                    .SubArea[k]
                                                                    .Titles;
                                                                descsList = this.$scope.SiteMap.Area[i].Group[j]
                                                                    .SubArea[k]
                                                                    .Descriptions;
                                                                if (
                                                                    !angular.isUndefined(titlesList) &&
                                                                        !angular.isUndefined(titlesList[0]))
                                                                    if (
                                                                        !Designers.Common.Utility.ScriptUtilities
                                                                            .IsNullOrUndefined(titlesList[0].Title) &&
                                                                            titlesList[0].Title.length > 0) {
                                                                        this.titleList = titlesList[0].Title;
                                                                        this.finaltitleList = this.titleList.slice();
                                                                        this
                                                                            .RemoveBaseLanguageTitle(this
                                                                                .finaltitleList);
                                                                        this.$scope.showNoRecordsForTitles = false;
                                                                        this.ClearTitleInputs()
                                                                    }
                                                                if (
                                                                    !angular.isUndefined(descsList) &&
                                                                        !angular.isUndefined(descsList[0]))
                                                                    if (
                                                                        !Designers.Common.Utility.ScriptUtilities
                                                                            .IsNullOrUndefined(descsList[0]
                                                                                .Description) &&
                                                                            descsList[0].Description.length > 0) {
                                                                        this.descriptionList = descsList[0].Description;
                                                                        this.$scope
                                                                            .showNoRecordsForDescriptions = false;
                                                                        this.ClearDescriptionInputs()
                                                                    }
                                                                break
                                                            }
                                    }
                                break
                            }
                        };
                        PropertiesPaneController.prototype
                            .AddTitleAndDescriptionForEmptyNodes = function(nodeName, siteMapObject, nodeValue) {
                                switch (nodeName) {
                                case "Title":
                                    siteMapObject["Titles"] = [];
                                    var obj = {};
                                    siteMapObject.Titles.push(JSON.parse(JSON.stringify(obj)));
                                    siteMapObject.Titles[0]["Title"] = [];
                                    siteMapObject.Titles[0].Title.push(JSON.parse(JSON.stringify(nodeValue)));
                                    this.BindTitlesAndDescriptions(this.$scope.selectedNodeName_Properties);
                                    break;
                                case "Description":
                                    siteMapObject["Descriptions"] = [];
                                    var obj = {};
                                    siteMapObject.Descriptions.push(JSON.parse(JSON.stringify(obj)));
                                    siteMapObject.Descriptions[0]["Description"] = [];
                                    siteMapObject.Descriptions[0].Description
                                        .push(JSON.parse(JSON.stringify(nodeValue)));
                                    this.BindTitlesAndDescriptions(this.$scope.selectedNodeName_Properties);
                                    break
                                }
                            };
                        PropertiesPaneController.prototype.CheckValueAlreadyExists = function(list, newNode) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(list) && list.length > 0)
                                for (var i = 0; i < list.length; i++)
                                    if (list[i].LCID == newNode.LCID.toString()) {
                                        if (list[0].Title)
                                            this.$scope.showError = this.localization
                                                .getResourceString("SitemapDesigner.Title_Value_Already_Exists");
                                        else if (list[0]
                                            .Description)
                                            this.$scope.showError = this.localization
                                                .getResourceString("SitemapDesigner.Description_Value_Already_Exists");
                                        return false
                                    }
                            return true
                        };
                        PropertiesPaneController.prototype.RemoveElement = function(lCID, listType) {
                            switch (listType) {
                            case "Title":
                                for (var i = 0; i < this.titleList.length; i++)
                                    if (this.titleList[i].LCID == lCID) {
                                        this.titleList.splice(i, 1);
                                        this.isTitleInEditMode.splice(i, 1);
                                        this.finaltitleList = this.titleList.slice();
                                        this.RemoveBaseLanguageTitle(this.finaltitleList);
                                        this.$scope.selectedTitleLanguageOption = this
                                            .GetLanguageForTitleAndDescription(this.titleList);
                                        break
                                    }
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.finaltitleList) &&
                                    this.finaltitleList.length == 0) {
                                    this.$scope.showNoRecordsForTitles = true;
                                    this.$scope.showError = "";
                                    this.$scope.titleText = "";
                                    this.$scope.selectedTitleLanguageOption = null;
                                    this.finaltitleList = null
                                }
                                break;
                            case "Description":
                                for (var i = 0; i < this.descriptionList.length; i++)
                                    if (this.descriptionList[i].LCID == lCID) {
                                        this.descriptionList.splice(i, 1);
                                        this.isDescriptionInEditMode.splice(i, 1);
                                        this.$scope.selectedDescLanguage = this
                                            .GetLanguageForTitleAndDescription(this.descriptionList);
                                        break
                                    }
                                if (this.descriptionList.length == 0) {
                                    this.$scope.showNoRecordsForDescriptions = true;
                                    this.$scope.showError = "";
                                    this.$scope.descriptionText = "";
                                    this.$scope.selectedDescLanguage = this.defaultLanguage
                                }
                                break
                            }
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm,
                                true);
                            this.isSiteMapNodeContentDelete = true
                        };
                        PropertiesPaneController.prototype
                            .getIconClass = function(iconUrl, entityLogicalName, isCustomEntity) {
                                var entityIconClass = "";
                                if (isCustomEntity)
                                    entityIconClass = this.commonVariableService.getCustomEntityIconClassName();
                                else if (iconUrl === this.commonVariableService.getOOBEntityImageStripUrl())
                                    if (this.propertiesPaneService.GetSelectedType() ===
                                        mscrmSitemapDesigner.NodeTypes.DashBoard ||
                                        this.propertiesPaneService.GetSelectedType() ===
                                        mscrmSitemapDesigner.NodeTypes
                                        .DefaultDashboard)
                                        entityIconClass = this.commonVariableService.getDashboardIconClassName();
                                    else if (!ScriptUtilities.IsNullOrUndefined(entityLogicalName) &&
                                        entityLogicalName
                                        .length !==
                                        0)
                                        entityIconClass = this.commonVariableService
                                            .getIconClassNameFromEntityName(entityLogicalName);
                                return entityIconClass
                            };
                        PropertiesPaneController.prototype
                            .ToggleCheckboxModelValue = function(nodeValue, nodeLabel) {
                                if (nodeValue != null)
                                    nodeValue[nodeLabel] = nodeValue[nodeLabel] == "true" ? "false" : "true"
                            };
                        PropertiesPaneController.prototype.OnArtifactListChange = function() {
                            if (this.$scope.PropertyDirective.nodeValue != null)
                                if (this
                                    .SelectedComponentType ===
                                    Designers.Common.Models.ComponentTypeCode.SystemForm) {
                                    this.$scope.PropertyDirective.nodeValue["Url"] = this.urlHelperService
                                        .GetDefaultDashboardUrl;
                                    this.$scope.PropertyDirective.nodeValue["Entity"] = ""
                                } else if (this
                                    .SelectedComponentType ===
                                    Designers.Common.Models.ComponentTypeCode.Entity) {
                                    this.$scope.PropertyDirective.nodeValue["DefaultDashboard"] = "";
                                    this.$scope.PropertyDirective.nodeValue["Url"] = ""
                                }
                        };
                        PropertiesPaneController.prototype.onDropDownValueChange = function() {
                            if (this.$scope.PropertyDirective.nodeValue != null)
                                if (this
                                    .SelectedComponentType ===
                                    Designers.Common.Models.ComponentTypeCode
                                    .SystemForm)
                                    this.$scope.PropertyDirective.nodeValue["DefaultDashboard"] = this
                                        .propertiesPaneService
                                        .GetSelectedDashboard();
                                else this.updateIcon()
                        };
                        PropertiesPaneController.prototype.updateIcon = function() {
                            var iconUrl = this.$scope.selectedNode_Properties.Icon,
                                entityName = this.$scope.selectedNode_Properties.Entity,
                                entityList = this.dataAccessService.entityMappingList,
                                isCustomEntity = entityList != null && entityList[entityName] != null
                                    ? entityList[entityName].IsCustomEntity
                                    : false,
                                resourceId = this.$scope.selectedNode_Properties.ResourceId;
                            if (this.$scope.PropertyDirective.nodeType == "Area") {
                                if (iconUrl.length == 0)
                                    if (resourceId != null && resourceId.length != 0) {
                                        var areaPrefix = "Area_",
                                            areaName = resourceId.substr(areaPrefix.length, resourceId.length);
                                        this.$scope.selectedNode_Properties
                                            .Icon = "/_imgs/NavBar/ActionImgs/NavTile_icon_" + areaName + "_85x71.png"
                                    }
                            } else if (this.$scope.PropertyDirective.nodeType == "SubArea") {
                                var entityIconClass = "";
                                if (iconUrl != null && iconUrl.length != 0
                                ) entityIconClass = this.getIconClass(iconUrl, entityName, isCustomEntity);
                                else if (entityName != null && entityName.length != 0) {
                                    iconUrl = this.commonVariableService.getOOBEntityImageStripUrl();
                                    entityIconClass = this.commonVariableService
                                        .getIconClassNameFromEntityName(entityName)
                                } else if (this.$scope.selectedNode_Properties.OriginalIcon != null) {
                                    iconUrl = this.$scope.selectedNode_Properties.OriginalIcon;
                                    entityIconClass = this.getIconClass(iconUrl, entityName, isCustomEntity)
                                } else iconUrl = this.commonVariableService.getOOBEntityImageStripUrl();
                                this.$scope.selectedNode_Properties.Icon = iconUrl;
                                this.$scope.selectedNode_Properties.EntityIconClass = entityIconClass;
                                if (this.propertiesPaneService.GetSelectedType() ==
                                    mscrmSitemapDesigner.NodeTypes.Entity &&
                                    !ScriptUtilities.IsNullOrUndefined(entityName) &&
                                    !ScriptUtilities.IsNullOrUndefined(entityList) &&
                                    !ScriptUtilities.IsNullOrUndefined(entityList[entityName]) &&
                                    !ScriptUtilities.IsNullOrUndefined(entityList[entityName].EntityColor) &&
                                    entityList[entityName].EntityColor
                                    .length !=
                                    0)
                                    this.$scope.selectedNode_Properties.EntityColor = entityList[entityName]
                                        .EntityColor;
                                else
                                    this.$scope.selectedNode_Properties.EntityColor = this.commonVariableService
                                        .getDefaultEntityColor()
                            }
                        };
                        PropertiesPaneController.prototype.ClearTitleInputs = function() {
                            this.$scope.titleText = "";
                            this.$scope.selectedTitleLanguageOption = null;
                            this.$scope.showError = ""
                        };
                        PropertiesPaneController.prototype.ClearDescriptionInputs = function() {
                            this.$scope.descriptionText = "";
                            this.$scope.selectedDescLanguage = this
                                .GetLanguageForTitleAndDescription(this.descriptionList);
                            this.$scope.showError = ""
                        };
                        PropertiesPaneController.prototype.GetLanguageForTitleAndDescription = function(list) {
                            var language = this.defaultLanguage;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(language))
                                for (var index = 0; index < list.length; index++) {
                                    if (list[index].LCID == this.defaultLanguage.LocaleId) language = null;
                                    break
                                }
                            return language
                        };
                        PropertiesPaneController.prototype.TypeSelectIndex = function(selectedType) {
                            switch (selectedType) {
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.DashBoard]:
                                PropertiesPaneController.prototype.subAreaSelectedType = mscrmSitemapDesigner
                                    .NodeTypes[mscrmSitemapDesigner.NodeTypes.DashBoard];
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity]:
                                PropertiesPaneController.prototype.subAreaSelectedType = mscrmSitemapDesigner
                                    .NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity];
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.WebResources]:
                                PropertiesPaneController.prototype.subAreaSelectedType = mscrmSitemapDesigner
                                    .NodeTypes[mscrmSitemapDesigner.NodeTypes.WebResources];
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Url]:
                                PropertiesPaneController.prototype.subAreaSelectedType = mscrmSitemapDesigner
                                    .NodeTypes[mscrmSitemapDesigner.NodeTypes.Url];
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SelectSubArea]:
                                PropertiesPaneController.prototype.subAreaSelectedType = mscrmSitemapDesigner
                                    .NodeTypes[mscrmSitemapDesigner.NodeTypes.SelectSubArea];
                                break
                            }
                            var objectToBind = null;
                            objectToBind = this.mscrmSitemapUtilityService
                                .GetSubAreaByAreaId(this.$scope.selectedArea
                                    .Id,
                                    this.$scope.selectedNode_Properties.Id);
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(objectToBind)
                            ) objectToBind.SubAreaSelectedType = PropertiesPaneController.prototype.subAreaSelectedType;
                            this.updateIcon()
                        };
                        PropertiesPaneController.prototype.SelectTypeDropdownChangehandler = function() {
                            this.propertiesPaneService
                                .ClearValueOnSubAreaTypeSelection(this.$scope.selectedArea.Id,
                                    this.$scope.selectedNode_Properties.Id);
                            this.propertiesPaneService.SetIconOnSubAreaTypeSelection();
                            this.$scope.$parent.$parent.errorInPropertiesPane = this.flyoutService
                                .checkIfAnyTypeaheadBoxHasError()
                        };
                        PropertiesPaneController.prototype.LoadOptionSetValuesForSkuAndClient = function(propertyType) {
                            var objectToBind = null, options;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(propertyType)) {
                                objectToBind = this.mscrmSitemapUtilityService
                                    .GetSubAreaByAreaId(this.$scope.selectedArea
                                        .Id,
                                        this.$scope.selectedNode_Properties.Id);
                                switch (propertyType) {
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Sku]:
                                    options = this.commonVariableService.getSkuOptions();
                                    this.skuOptionsList = this.SetSkuOptions(objectToBind, options);
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Client]:
                                    options = this.commonVariableService.getClientOptions();
                                    this.clientOptionsList = this.SetClientOptions(objectToBind, options);
                                    break
                                }
                            }
                        };
                        PropertiesPaneController.prototype.SetClientOptions = function(subArea, options) {
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(subArea.Client)) {
                                if (typeof subArea.Client == "string") this.clientList = subArea.Client.split(",");
                                else {
                                    options = subArea.Client;
                                    for (var init = 0;
                                        init < options.length;
                                        init++
                                    ) options[init].Value && this.clientList.push(options[init].Id)
                                }
                                subArea.Client = (new mscrmSitemapDesigner.model.SubArea).Client = [];
                                if (this.clientList.length > 0) {
                                    for (var index = 0; index < options.length; index++) {
                                        subArea.Client[index] = new mscrmSitemapDesigner.model.Client;
                                        subArea.Client[index].Id = options[index].Id;
                                        subArea.Client[index].Label = options[index].Label;
                                        if (this.clientList
                                            .indexOf(options[index].Id) >
                                            -1) subArea.Client[index].Value = true;
                                        else subArea.Client[index].Value = false
                                    }
                                    return subArea.Client
                                }
                            } else {
                                subArea.Client = (new mscrmSitemapDesigner.model.SubArea).Client = [];
                                for (var index = 0; index < options.length; index++) {
                                    subArea.Client[index] = new mscrmSitemapDesigner.model.Client;
                                    subArea.Client[index].Id = options[index].Id;
                                    subArea.Client[index].Label = options[index].Label;
                                    subArea.Client[index].Value = false
                                }
                                return subArea.Client
                            }
                        };
                        PropertiesPaneController.prototype.SetSkuOptions = function(subArea, options) {
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(subArea.Sku)) {
                                if (typeof subArea.Sku == "string") this.skuList = subArea.Sku.split(",");
                                else {
                                    options = subArea.Sku;
                                    this.skuList = [];
                                    for (var init = 0;
                                        init < options.length;
                                        init++
                                    ) options[init].Value && this.skuList.push(options[init].Id)
                                }
                                subArea.Sku = (new mscrmSitemapDesigner.model.SubArea).Sku = [];
                                if (this.skuList.length > 0) {
                                    for (var index = 0; index < options.length; index++) {
                                        subArea.Sku[index] = new mscrmSitemapDesigner.model.Sku;
                                        subArea.Sku[index].Id = options[index].Id;
                                        subArea.Sku[index].Label = options[index].Label;
                                        if (this.skuList
                                            .indexOf(options[index].Id) >
                                            -1) subArea.Sku[index].Value = true;
                                        else subArea.Sku[index].Value = false
                                    }
                                    return subArea.Sku
                                }
                            } else if (Designers.Common.Utility.StringUtilities.IsNullOrEmpty(subArea.Sku)) {
                                subArea.Sku = (new mscrmSitemapDesigner.model.SubArea).Sku = [];
                                for (var index = 0; index < options.length; index++) {
                                    subArea.Sku[index] = new mscrmSitemapDesigner.model.Sku;
                                    subArea.Sku[index].Id = options[index].Id;
                                    subArea.Sku[index].Label = options[index].Label;
                                    subArea.Sku[index].Value = false
                                }
                                return subArea.Sku
                            }
                        };
                        PropertiesPaneController.prototype
                            .SetSku = function(selectedSku) {
                                this.skuOptionsList.length > 0 &&
                                    this
                                    .UpdateSkuAndClientOptions(this.skuOptionsList,
                                        mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Sku],
                                        selectedSku)
                            };
                        PropertiesPaneController.prototype
                            .SetClient = function(selectedClient) {
                                this.clientOptionsList.length > 0 &&
                                    this
                                    .UpdateSkuAndClientOptions(this.clientOptionsList,
                                        mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Client],
                                        selectedClient)
                            };
                        PropertiesPaneController.prototype
                            .UpdateSkuAndClientOptions = function(optionList, propertyType, selectedOption) {
                                this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                    .SiteMapForm,
                                    true);
                                for (var clientIndex = 0; clientIndex < optionList.length; clientIndex++)
                                    if (selectedOption === this.localization.getResourceString("SitemapDesigner.All")) {
                                        if (!optionList[clientIndex].Value) this.checkAllOptions(optionList);
                                        else this.UncheckAll(optionList);
                                        this.UpdateClientSkuModel(optionList, propertyType);
                                        return
                                    } else if (optionList[clientIndex].Label == selectedOption) {
                                        this.SetOption(optionList, clientIndex);
                                        this.UpdateClientSkuModel(optionList, propertyType);
                                        return
                                    }
                            };
                        PropertiesPaneController.prototype.SetOption = function(optionList, optIndex) {
                            if (optionList[optIndex].Value) optionList[optIndex].Value = false;
                            else optionList[optIndex].Value = true;
                            for (var index = 0;
                                index < optionList.length;
                                index++
                            )
                                if (optionList[index]
                                    .Label ===
                                    this.localization
                                    .getResourceString("SitemapDesigner.All")
                                ) if (optionList[index].Value) optionList[index].Value = false;
                            for (var index = 0; index < optionList.length; index++)
                                if (optionList[index].Label ===
                                    this.localization.getResourceString("SitemapDesigner.All"))
                                    if (!optionList[index].Value)
                                        for (var ind = optionList.length - 1; ind < optionList.length; ind--)
                                            if (!optionList[ind].Value) {
                                                optionList[ind].Label ===
                                                    this.localization.getResourceString("SitemapDesigner.All") &&
                                                    !optionList[ind].Value &&
                                                    this.checkAllOptions(optionList);
                                                return
                                            }
                        };
                        PropertiesPaneController.prototype
                            .checkAllOptions = function(optionsList) {
                                for (var index = 0; index < optionsList.length; index++) optionsList[index].Value = true
                            };
                        PropertiesPaneController.prototype
                            .UncheckAll = function(optionsList) {
                                for (var index = 0;
                                    index < optionsList.length;
                                    index++
                                ) optionsList[index].Value = false
                            };
                        PropertiesPaneController.prototype.UpdateClientSkuModel = function(options, propertyType) {
                            var objectToBind = null;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(propertyType)) {
                                objectToBind = this.mscrmSitemapUtilityService
                                    .GetSubAreaByAreaId(this.$scope.selectedArea
                                        .Id,
                                        this.$scope.selectedNode_Properties.Id);
                                switch (propertyType) {
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Sku]:
                                    objectToBind.Sku = (new mscrmSitemapDesigner.model.SubArea).Sku = [];
                                    for (var index = 0; index < options.length; index++) {
                                        objectToBind.Sku[index] = new mscrmSitemapDesigner.model.Sku;
                                        objectToBind.Sku[index].Id = options[index].Id;
                                        objectToBind.Sku[index].Label = options[index].Label;
                                        objectToBind.Sku[index].Value = options[index].Value
                                    }
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Client]:
                                    objectToBind.Client = (new mscrmSitemapDesigner.model.SubArea).Client = [];
                                    for (var index = 0; index < options.length; index++) {
                                        objectToBind.Client[index] = new mscrmSitemapDesigner.model.Client;
                                        objectToBind.Client[index].Id = options[index].Id;
                                        objectToBind.Client[index].Label = options[index].Label;
                                        objectToBind.Client[index].Value = options[index].Value
                                    }
                                    break
                                }
                            }
                        };
                        PropertiesPaneController.prototype
                            .UpdateSubAreaProperties = function(updatedValue, propertyType) {
                                var objectToBind = undefined;
                                if (this.$scope.PropertyDirective.nodeType ===
                                    mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                        .SubArea])
                                    objectToBind = this.mscrmSitemapUtilityService
                                        .GetSubAreaByAreaId(this.$scope.selectedArea
                                            .Id,
                                            this.$scope.selectedNode_Properties.Id);
                                else
                                    objectToBind = this.mscrmSitemapUtilityService
                                        .GetAreaById(this.$scope.selectedNode_Properties.Id);
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(objectToBind)) {
                                    switch (propertyType) {
                                    case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                            .DefaultDashboard]:
                                        objectToBind.DefaultDashboard = updatedValue.id;
                                        objectToBind.Url = this.urlHelperService.GetDefaultDashboardUrl;
                                        this.SetResourceProperties(objectToBind,
                                            mscrmSitemapDesigner.SubAreaConstants.DashboardResourceId,
                                            mscrmSitemapDesigner.SubAreaConstants.DashboardDescription,
                                            mscrmSitemapDesigner.SubAreaConstants.DashboardTooltip);
                                        this.propertiesPaneService.SetSelectedDashboard(updatedValue.displayName);
                                        break;
                                    case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Icon]:
                                        objectToBind.Icon = updatedValue.webResourceImageUrl;
                                        this.UpdateSubAreaIconOnSelection(objectToBind, updatedValue);
                                        break;
                                    case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity]:
                                        objectToBind.Entity = updatedValue.LogicalName;
                                        this.SetResourceProperties(objectToBind,
                                            Designers.Common.Utility.StringUtilities.EmptyString,
                                            Designers.Common.Utility.StringUtilities.EmptyString,
                                            Designers.Common.Utility.StringUtilities.EmptyString);
                                        this.propertiesPaneService.SetSelectedEntity(updatedValue.DisplayName);
                                        if (objectToBind
                                            .Icon ===
                                            this.commonVariableService
                                            .getDefaultSubAreaImageStripUrl()
                                        ) objectToBind.Icon = this.commonVariableService.getOOBEntityImageStripUrl();
                                        break;
                                    case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Url]:
                                        if (this.propertiesPaneService.GetSelectedType() ===
                                            mscrmSitemapDesigner.NodeTypes.WebResources) {
                                            objectToBind.Url = mscrmSitemapDesigner.SubAreaConstants.WebSourcePrefix +
                                                updatedValue.Name;
                                            this.propertiesPaneService.SetSelectedUrl(updatedValue.DisplayName)
                                        } else {
                                            objectToBind.Url = updatedValue;
                                            this.propertiesPaneService.SetSelectedUrl(updatedValue)
                                        }
                                        this.SetResourceProperties(objectToBind,
                                            mscrmSitemapDesigner.LocalizationConstants.NewSubArea,
                                            Designers.Common.Utility.StringUtilities.EmptyString,
                                            Designers.Common.Utility.StringUtilities.EmptyString);
                                        break;
                                    case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                            .OutlookShortcutIcon]:
                                        objectToBind.OutlookShortcutIcon = updatedValue.webResourceImageUrl;
                                        this.SelectedOutlookIcon = updatedValue.DisplayName;
                                        break;
                                    case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.PassParams]:
                                        objectToBind.PassParams = this.propertiesPaneService.GetPassParams();
                                        break;
                                    case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Type]:
                                        objectToBind.SelectedType = this.propertiesPaneService.GetSelectedType();
                                        this.SelectTypeDropdownChangehandler();
                                        break
                                    }
                                    this.propertiesPaneService.SetPersistedSubAreaNode(objectToBind)
                                }
                                this.updateIcon();
                                this.$scope.showTypeHead = false;
                                this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                    .SiteMapForm,
                                    true)
                            };
                        PropertiesPaneController.prototype
                            .SetResourceProperties = function(selectedNode,
                                resourceId,
                                descriptionResourceId,
                                toolTipResourceId) {
                                selectedNode.ResourceId = resourceId;
                                selectedNode.DescriptionResourceId = descriptionResourceId;
                                selectedNode.ToolTipResourceId = toolTipResourceId
                            };
                        PropertiesPaneController.prototype.BindSelectedvalues = function() {
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.$scope.PropertyDirective) &&
                                !Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.$scope.PropertyDirective.nodeValue)) {
                                switch (this.$scope.PropertyDirective.nodeLabel) {
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.DefaultDashboard]:
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.$scope.PropertyDirective.nodeValue[mscrmSitemapDesigner
                                            .NodeTypes[mscrmSitemapDesigner.NodeTypes.DefaultDashboard]]))
                                        for (var i = 0; i < this.dashboardList.length; i++)
                                            if (this.dashboardList[i].id ==
                                                this.$scope.PropertyDirective.nodeValue[mscrmSitemapDesigner
                                                    .NodeTypes[mscrmSitemapDesigner.NodeTypes.DefaultDashboard]]) {
                                                this.propertiesPaneService
                                                    .SetSelectedDashboard(this.dashboardList[i].displayName);
                                                return
                                            }
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Icon]:
                                    var iconObj = this.IconMap.getValue(this.$scope.PropertyDirective.nodeValue.Icon),
                                        selectedIcon = iconObj != false
                                            ? iconObj.DisplayName
                                            : this.$scope.PropertyDirective.nodeValue.Icon;
                                    if (this.commonVariableService.getOOBEntityImageStripUrl() === selectedIcon ||
                                        this.commonVariableService.getDefaultSubAreaImageStripUrl() === selectedIcon ||
                                        this.commonVariableService.getDefaultAreaImageStripUrl() === selectedIcon ||
                                        mscrmSitemapDesigner.DefaultIcons.Area === selectedIcon &&
                                        this.$scope.PropertyDirective.nodeType ===
                                        mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Area] ||
                                        mscrmSitemapDesigner.DefaultIcons.SubArea === selectedIcon &&
                                        this.$scope.PropertyDirective.nodeType ===
                                        mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea] ||
                                        mscrmSitemapDesigner.DefaultIcons.WebResourceSubArea === selectedIcon &&
                                        this.$scope.PropertyDirective.nodeType ===
                                        mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea] ||
                                        mscrmSitemapDesigner.DefaultIcons.URLSubArea === selectedIcon &&
                                        this.$scope.PropertyDirective.nodeType ===
                                        mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                            .SubArea])
                                        selectedIcon = this.commonVariableService.getDefaultImageIconText();
                                    this.propertiesPaneService.SetSelectedIcon(selectedIcon);
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity]:
                                    var entityName = this.$scope.PropertyDirective.nodeValue.Entity,
                                        entityList = this.dataAccessService.entityMappingList;
                                    entityName != "" &&
                                        !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(entityName) &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(entityList[entityName]) &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(entityList[entityName].DisplayName) &&
                                        this.propertiesPaneService
                                        .SetSelectedEntity(entityList[entityName].DisplayName);
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Url]:
                                    var nodeValueUrl = this.$scope.PropertyDirective.nodeValue.Url;
                                    if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(nodeValueUrl)) {
                                        var webResourceUrlDisplayName = this
                                            .getDisplayName(this.urlList,
                                                nodeValueUrl
                                                .replace(mscrmSitemapDesigner.SubAreaConstants.WebSourcePrefix, ""));
                                        if (nodeValueUrl
                                            .indexOf(mscrmSitemapDesigner.SubAreaConstants.WebSourcePrefix) !=
                                            -1 &&
                                            !Designers.Common.Utility.StringUtilities
                                            .IsNullOrEmpty(webResourceUrlDisplayName)
                                        ) this.propertiesPaneService.SetSelectedUrl(webResourceUrlDisplayName);
                                        else
                                            this.propertiesPaneService
                                                .SetSelectedUrl(nodeValueUrl
                                                    .replace(mscrmSitemapDesigner.SubAreaConstants.WebSourcePrefix, ""))
                                    }
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.PassParams]:
                                    this.propertiesPaneService
                                        .SetPassParams(String(this.$scope.PropertyDirective.nodeValue
                                                .PassParams) ==
                                            "true");
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.OutlookShortcutIcon]:
                                    var iconObj = this.IconMap
                                        .getValue(this.$scope.PropertyDirective.nodeValue.OutlookShortcutIcon);
                                    this.SelectedOutlookIcon = iconObj != false
                                        ? iconObj.DisplayName
                                        : this.$scope.PropertyDirective.nodeValue.OutlookShortcutIcon;
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Type]:
                                    var selectedSubAreaType = Designers.Common.Utility.StringUtilities
                                        .IsNullOrEmpty(this.$scope.PropertyDirective.nodeValue.SelectedType)
                                        ? mscrmSitemapDesigner.NodeTypes.SelectSubArea
                                        : this.$scope.PropertyDirective.nodeValue.SelectedType;
                                    this.propertiesPaneService.SetSelectedType(selectedSubAreaType);
                                    break
                                }
                                if (this.$scope.PropertyDirective.nodeType ===
                                    mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.SubArea]) {
                                    var objectToBind = this.mscrmSitemapUtilityService
                                        .GetSubAreaByAreaId(this.$scope.selectedArea.Id,
                                            this.$scope.selectedNode_Properties.Id);
                                    this.propertiesPaneService.SetPersistedSubAreaNode(objectToBind)
                                }
                            }
                        };
                        PropertiesPaneController.prototype.getDisplayName = function(inputArray, stringSearch) {
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(stringSearch)
                            )
                                for (var i = 0;
                                    i < inputArray.length;
                                    i++
                                ) if (inputArray[i].Name == stringSearch) return inputArray[i].DisplayName;
                            return null
                        };
                        PropertiesPaneController.prototype
                            .HandleDeleteEvent = function(event, args) {
                                this.$scope.showPropertiesPane = args.showPropertiesPane
                            };
                        PropertiesPaneController.prototype
                            .HandleUnsupportedComponent = function(event, args) {
                                this.$scope.unsupportedComponent = args.unsupportedComponent
                            };
                        PropertiesPaneController.prototype.EditableTitleInputs = function(isEnable, index) {
                            if (isEnable) this.isTitleInEditMode[index] = true;
                            if (!isEnable) this.isTitleInEditMode[index] = false;
                            this.$scope.showError = Designers.Common.Utility.StringUtilities.EmptyString;
                            if (Designers.Common.Utility.StringUtilities.IsNullOrEmpty(this.titleList[index].Title)) {
                                this.$scope.showError = this
                                    .getID(mscrmSitemapDesigner.LocalizationConstants.EmptyTitle);
                                this.isTitleInEditMode[index] = true
                            }
                        };
                        PropertiesPaneController.prototype.EditableDescriptionInputs = function(isEnable, index) {
                            if (isEnable) this.isDescriptionInEditMode[index] = true;
                            if (!isEnable) this.isDescriptionInEditMode[index] = false;
                            this.$scope.showError = Designers.Common.Utility.StringUtilities.EmptyString;
                            if (Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(this.descriptionList[index].Description)) {
                                this.$scope.showError = this
                                    .getID(mscrmSitemapDesigner.LocalizationConstants.EmptyDesc);
                                this.isDescriptionInEditMode[index] = true
                            }
                        };
                        PropertiesPaneController.prototype.ToggleAdvancedSection = function(event) {
                            this.$scope.isAdvancedSectionOpen = !this.$scope.isAdvancedSectionOpen;
                            AccessibilityUtility
                                .SetAriaExpandedValueForElement(this.$scope.isAdvancedSectionOpen, event.target)
                        };
                        PropertiesPaneController.prototype.toggleAdditionalDescriptions = function(event) {
                            if (!this.$scope
                                .isAdditionalDescriptionsOpen) this.$scope.isAdditionalDescriptionsOpen = true;
                            else this.$scope.isAdditionalDescriptionsOpen = false;
                            AccessibilityUtility
                                .SetAriaExpandedValueForElement(this.$scope.isAdditionalDescriptionsOpen, event.target);
                            return this.$scope.isAdditionalDescriptionsOpen
                        };
                        PropertiesPaneController.prototype.toggleAdditionalTitles = function(event) {
                            if (!this.$scope.isAdditionalTitlesOpen) this.$scope.isAdditionalTitlesOpen = true;
                            else this.$scope.isAdditionalTitlesOpen = false;
                            AccessibilityUtility
                                .SetAriaExpandedValueForElement(this.$scope.isAdditionalTitlesOpen, event.target);
                            return this.$scope.isAdditionalTitlesOpen
                        };
                        PropertiesPaneController.prototype.toggleLabelCheckboxList = function(event) {
                            this.$scope.isClientItemsOpened = !this.$scope.isClientItemsOpened;
                            AccessibilityUtility
                                .SetAriaExpandedValueForElement(this.$scope.isClientItemsOpened, event.target);
                            return this.$scope.isClientItemsOpened
                        };
                        PropertiesPaneController.prototype.toggleSkuCheckboxList = function(event) {
                            this.$scope.isItemsOpened = !this.$scope.isItemsOpened;
                            AccessibilityUtility
                                .SetAriaExpandedValueForElement(this.$scope.isItemsOpened, event.target);
                            return this.$scope.isItemsOpened
                        };
                        PropertiesPaneController.prototype.HandleTextBoxKeyDown = function($event) {
                            if ($event.keyCode == CommonConstants.KeyCode.SpaceKeyCode) {
                                $event.stopImmediatePropagation();
                                return
                            }
                        };
                        PropertiesPaneController.prototype
                            .HandleDropDownClick = function($event, scrollTo, activeSrcElementId) {
                                this.sitemapTypeAheadModel.ToggleFlyout(this.flyoutService, null, activeSrcElementId);
                                !this.sitemapTypeAheadModel.IsFlyoutOpen &&
                                    !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined($event) &&
                                    $event.stopPropagation();
                                !StringUtility.IsNullOrEmpty(scrollTo) &&
                                    this.mscmSiteMapScrollService.ScrollToScrollPoint(scrollTo)
                            };
                        PropertiesPaneController.prototype.ToggleGeneralSection = function(event) {
                            this.$scope.isGeneralSectionOpen = !this.$scope.isGeneralSectionOpen;
                            var expandedState = this.$scope.isGeneralSectionOpen ? "true" : "false";
                            AccessibilityUtility
                                .SetAriaExpandedValueForElement(this.$scope.isGeneralSectionOpen, event.target)
                        };
                        PropertiesPaneController.prototype
                            .HandleTypeAheadTextBoxKeyDown = function($event, scrollTo, nodeLabel, currElementId) {
                                if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined($event.keyCode)) return;
                                if ($event.keyCode == CommonConstants.KeyCode.SpaceKeyCode) {
                                    $event.stopImmediatePropagation();
                                    return
                                }
                                if (($event.keyCode == CommonConstants.KeyCode.TabKeyCode ||
                                        $event.keyCode == CommonConstants.KeyCode.EnterKeyCode ||
                                        $event.keyCode == CommonConstants.KeyCode.EscKeyCode) &&
                                    this.sitemapTypeAheadModel.IsFlyoutOpen) {
                                    $event.keyCode != CommonConstants.KeyCode.EscKeyCode &&
                                        this.handleAutoResolveForTypeaheadTextBox(nodeLabel);
                                    this.flyoutService.Hide();
                                    if (!StringUtility.IsNullOrEmpty(currElementId)) {
                                        var currentElement = document.getElementById(currElementId);
                                        currentElement.focus()
                                    }
                                    return
                                }
                                if (!this.sitemapTypeAheadModel
                                    .IsFlyoutOpen)
                                    ($event.keyCode == CommonConstants.KeyCode.F4KeyCode ||
                                            $event.keyCode == CommonConstants.KeyCode.DownArrowKeyCode) &&
                                        this.ShowFlyout($event, scrollTo, currElementId);
                                else
                                    $event.keyCode === CommonConstants.KeyCode.TabKeyCode &&
                                        $event.shiftKey &&
                                        this.sitemapTypeAheadModel.ToggleFlyout(this.flyoutService, null, currElementId)
                            };
                        PropertiesPaneController.prototype.ShowFlyout = function($event, scrollTo, activeSrcElementId) {
                            !this.sitemapTypeAheadModel.IsFlyoutOpen &&
                                this.flyoutService.Show(this.sitemapTypeAheadModel, activeSrcElementId);
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined($event) &&
                                $event.stopPropagation();
                            !StringUtility.IsNullOrEmpty(scrollTo) &&
                                this.mscmSiteMapScrollService.ScrollToScrollPoint(scrollTo)
                        };
                        PropertiesPaneController.prototype
                            .IsIconListDisabled = function() {
                                return this.propertiesPaneService.IsIconListDisabled() &&
                                    mscrmSitemapDesigner.SiteMapConstants.Area != this.$scope.PropertyDirective.nodeType
                            };
                        PropertiesPaneController.prototype
                            .ShowTypeAheadFlyoutDropdown = function(passedSubAreaType) {
                                return this.propertiesPaneService.ShowTypeAheadFlyoutDropdown(passedSubAreaType)
                            };
                        PropertiesPaneController.prototype
                            .DisplayURLBasedOnSubAreaType = function(passedSubAreaType) {
                                return this.propertiesPaneService.DisplayURLBasedOnSubAreaType(passedSubAreaType)
                            };
                        PropertiesPaneController.prototype
                            .keydownHanlderForFlyoutItem =
                            function(event, elementId, updatedValue, propertyType, currSelectedItemIndex) {
                                if (event.keyCode == CommonConstants.KeyCode.UpArrowKeyCode &&
                                    currSelectedItemIndex == 0) {
                                    this.applyHighlightStyle(elementId);
                                    return
                                }
                                if (event
                                    .keyCode ==
                                    CommonConstants.KeyCode.DownArrowKeyCode &&
                                    currSelectedItemIndex == 0) {
                                    this.disableHighlightStyle(elementId, -1);
                                    return
                                }
                                if (event.keyCode != CommonConstants.KeyCode.EnterKeyCode &&
                                    event.keyCode != CommonConstants.KeyCode.TabKeyCode &&
                                    event.keyCode != CommonConstants.KeyCode.SpaceKeyCode) return;
                                if (event.keyCode == CommonConstants.KeyCode.EnterKeyCode ||
                                    event.keyCode == CommonConstants.KeyCode.SpaceKeyCode) {
                                    var elementObj = document.getElementById(elementId),
                                        flyoutSrcElementID = elementObj.parentElement
                                            .getAttribute(AccessibilityUtility.Constants.FLYOUTSRC_ID),
                                        flyoutSrcElementObj = document.getElementById(flyoutSrcElementID);
                                    flyoutSrcElementObj.focus();
                                    event.preventDefault();
                                    event.stopPropagation()
                                }
                                this.UpdateSubAreaProperties(updatedValue, propertyType);
                                this.disableHighlightStyle(elementId, currSelectedItemIndex);
                                this.flyoutService.Hide(true)
                            };
                        PropertiesPaneController.prototype.onKeyUpHandlerForTypeaheadTextbox = function(nodeLabel) {
                            switch (nodeLabel) {
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity]:
                                var filteredEntities = this.entityList.filter(this.filterEntityElements, this);
                                if (filteredEntities != undefined && filteredEntities.length > 0
                                ) this.showNoResultMessage = false;
                                else {
                                    this.showNoResultMessage = true;
                                    this.$scope.noResultFoundMessage = this.getID("SitemapDesigner.NoResults")
                                }
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.DefaultDashboard]:
                                var filteredDashboardItems = this.dashboardList
                                    .filter(this.filterDashboardElements, this);
                                if (filteredDashboardItems != undefined && filteredDashboardItems.length > 0
                                ) this.showNoResultMessageForDashboard = false;
                                else {
                                    this.showNoResultMessageForDashboard = true;
                                    this.$scope.noResultFoundMessage = this.getID("SitemapDesigner.NoResults")
                                }
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Icon]:
                                var filteredIcons = this.iconList.filter(this.filterIconElements, this);
                                if (filteredIcons != undefined && filteredIcons.length > 0
                                ) this.showNoResultMessageForIcon = false;
                                else {
                                    this.showNoResultMessageForIcon = true;
                                    this.$scope.noResultFoundMessage = this.getID("SitemapDesigner.NoResults")
                                }
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.OutlookShortcutIcon]:
                                var filteredIcons = this.iconList.filter(this.filterOutlookIconElements, this);
                                if (filteredIcons != undefined && filteredIcons.length > 0
                                ) this.showNoResultMessageForOutlook = false;
                                else {
                                    this.showNoResultMessageForOutlook = true;
                                    this.$scope.noResultFoundMessage = this.getID("SitemapDesigner.NoResults")
                                }
                                break
                            }
                        };
                        PropertiesPaneController.prototype
                            .onFocusHandlerForTypeaheadTextbox = function(nodeLabel, activeSrcElementId) {
                                StringUtility.IsNullOrEmpty(this.flyoutService.getCurrActiveFlyoutSrcElementId()) &&
                                    this.flyoutService.setCurrActiveFlyoutSrcElementId(activeSrcElementId);
                                switch (nodeLabel) {
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity]:
                                    this.flyoutService.entityHasInvalidText = false;
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.DefaultDashboard]:
                                    this.flyoutService.dashboardHasInvalidText = false;
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Icon]:
                                    this.flyoutService.iconHasInvalidText = false;
                                    break;
                                case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.OutlookShortcutIcon]:
                                    this.flyoutService.outlookIconHasInvalidText = false;
                                    break
                                }
                            };
                        PropertiesPaneController.prototype.resetValidationState = function() {
                            this.flyoutService.resetValidationState();
                            this.$scope.$parent.$parent.errorInPropertiesPane = false
                        };
                        PropertiesPaneController.prototype
                            .isEntityMandatory = function() { return this.propertiesPaneService.isEntityMandatory() };
                        PropertiesPaneController.prototype
                            .isURLMandatory = function() { return this.propertiesPaneService.isURLMandatory() };
                        PropertiesPaneController.prototype
                            .isURLOrEntityMandatory = function() {
                                return this.propertiesPaneService.isURLOrEntityMandatory()
                            };
                        PropertiesPaneController.prototype
                            .isEntityNotSelected = function() {
                                return this.propertiesPaneService.isEntityNotSelected()
                            };
                        PropertiesPaneController.prototype
                            .isWebResourceNotSelected = function() {
                                return this.propertiesPaneService.isWebResourceNotSelected()
                            };
                        PropertiesPaneController.prototype.onBlurHandlerForTypeaheadTextbox = function(nodeLabel) {
                            if (this.sitemapTypeAheadModel.IsFlyoutOpen) return;
                            switch (nodeLabel) {
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity]:
                                this.handleOnBlurForEntityBox(nodeLabel);
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.DefaultDashboard]:
                                this.handleOnBlurForDashboardBox(nodeLabel);
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Icon]:
                                this.handleOnBlurForIconBox(nodeLabel);
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.OutlookShortcutIcon]:
                                this.handleOnBlurForOutlookIconBox(nodeLabel);
                                break
                            }
                        };
                        PropertiesPaneController.prototype.handleOnBlurForEntityBox = function(nodeLabel) {
                            if (StringUtility.IsNullOrEmpty(this.propertiesPaneService.GetSelectedEntity())) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            if (this.checkForExactMatch(this.entityList,
                                "DisplayName",
                                this.propertiesPaneService.GetSelectedEntity())) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            this.flyoutService.entityHasInvalidText = true;
                            this.$scope.propertiesPaneEntityErrorMessage = this
                                .getID("SitemapDesigner.Error_InvalidValue");
                            this.$scope.$parent.$parent.errorInPropertiesPane = true
                        };
                        PropertiesPaneController.prototype.handleOnBlurForDashboardBox = function(nodeLabel) {
                            if (StringUtility.IsNullOrEmpty(this.propertiesPaneService.GetSelectedDashboard())) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            if (this.checkForExactMatch(this.dashboardList,
                                "displayName",
                                this.propertiesPaneService.GetSelectedDashboard())) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            this.flyoutService.dashboardHasInvalidText = true;
                            this.$scope.propertiesPaneEntityErrorMessage = this
                                .getID("SitemapDesigner.Error_InvalidValue");
                            this.$scope.$parent.$parent.errorInPropertiesPane = true
                        };
                        PropertiesPaneController.prototype.handleOnBlurForIconBox = function(nodeLabel) {
                            if (StringUtility.IsNullOrEmpty(this.propertiesPaneService.GetSelectedIcon())) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            if (this.propertiesPaneService
                                .GetSelectedIcon() ==
                                this.$scope.PropertyDirective.nodeValue.Icon) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            if (this.checkForExactMatch(this.iconList,
                                "DisplayName",
                                this.propertiesPaneService.GetSelectedIcon())) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            this.flyoutService.iconHasInvalidText = true;
                            this.$scope.propertiesPaneEntityErrorMessage = this
                                .getID("SitemapDesigner.Error_InvalidValue");
                            this.$scope.$parent.$parent.errorInPropertiesPane = true
                        };
                        PropertiesPaneController.prototype.handleOnBlurForOutlookIconBox = function(nodeLabel) {
                            if (StringUtility.IsNullOrEmpty(this.SelectedOutlookIcon)) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            if (this.checkForExactMatch(this.iconList, "DisplayName", this.SelectedOutlookIcon)) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            this.flyoutService.outlookIconHasInvalidText = true;
                            this.$scope.propertiesPaneEntityErrorMessage = this
                                .getID("SitemapDesigner.Error_InvalidValue");
                            this.$scope.$parent.$parent.errorInPropertiesPane = true
                        };
                        PropertiesPaneController.prototype.handleAutoResolveForTypeaheadTextBox = function(nodeLabel) {
                            switch (nodeLabel) {
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Entity]:
                                if (!StringUtility.IsNullOrEmpty(this.propertiesPaneService.GetSelectedEntity())) {
                                    var filteredEntities = this.entityList.filter(this.filterEntityElements, this);
                                    if (filteredEntities != undefined && filteredEntities.length > 0) {
                                        filteredEntities.sort(this.sortEntityList);
                                        this.UpdateSubAreaProperties(filteredEntities[0], nodeLabel)
                                    }
                                }
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.DefaultDashboard]:
                                if (!StringUtility.IsNullOrEmpty(this.propertiesPaneService.GetSelectedDashboard())) {
                                    var filteredDashboards = this.dashboardList
                                        .filter(this.filterDashboardElements, this);
                                    if (filteredDashboards != undefined && filteredDashboards.length > 0) {
                                        filteredDashboards.sort(this.sortDashboardList);
                                        this.UpdateSubAreaProperties(filteredDashboards[0], nodeLabel)
                                    }
                                }
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.Icon]:
                                if (!StringUtility.IsNullOrEmpty(this.propertiesPaneService.GetSelectedIcon())) {
                                    var filteredIcons = this.iconList.filter(this.filterIconElements, this);
                                    if (filteredIcons != undefined && filteredIcons.length > 0) {
                                        filteredIcons.sort(this.sortIconList);
                                        this.UpdateSubAreaProperties(filteredIcons[0], nodeLabel)
                                    }
                                }
                                break;
                            case mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes.OutlookShortcutIcon]:
                                if (!StringUtility.IsNullOrEmpty(this.SelectedOutlookIcon)) {
                                    var filteredIcons = this.iconList.filter(this.filterOutlookIconElements, this);
                                    if (filteredIcons != undefined && filteredIcons.length > 0) {
                                        filteredIcons.sort(this.sortIconList);
                                        this.UpdateSubAreaProperties(filteredIcons[0], nodeLabel)
                                    }
                                }
                                break
                            }
                            var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                            if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false
                        };
                        PropertiesPaneController.prototype.applyHighlightStyle = function(elementId) {
                            var element = angular.element("#" + elementId);
                            if (element == undefined || element == null) return;
                            $(element.parent().children()[0]).removeClass("highlight-selection");
                            element.addClass("highlight-selection")
                        };
                        PropertiesPaneController.prototype
                            .disableHighlightStyle = function(elementId, currentSelectedItemIndex) {
                                if (currentSelectedItemIndex == 0) return;
                                var element = angular.element("#" + elementId);
                                element.removeClass("highlight-selection")
                            };
                        PropertiesPaneController.prototype
                            .checkForExactMatch = function(list, propertyName, currentSelectedValue) {
                                for (var i = 0;
                                    i < list.length;
                                    i++
                                ) if (list[i][propertyName] == currentSelectedValue) return true;
                                return false
                            };
                        PropertiesPaneController.prototype.filterEntityElements = function(value) {
                            var currEntity = this.propertiesPaneService.GetSelectedEntity();
                            if (StringUtility.IsNullOrEmpty(currEntity)) return true;
                            return value.DisplayName.toLowerCase().indexOf(currEntity.toLowerCase()) != -1
                        };
                        PropertiesPaneController.prototype.filterDashboardElements = function(value) {
                            var currDashboard = this.propertiesPaneService.GetSelectedDashboard();
                            if (StringUtility.IsNullOrEmpty(currDashboard)) return true;
                            return value.displayName.toLowerCase().indexOf(currDashboard.toLowerCase()) != -1
                        };
                        PropertiesPaneController.prototype.filterIconElements = function(value) {
                            if (StringUtility.IsNullOrEmpty(this.propertiesPaneService.GetSelectedIcon())) return true;
                            return value.DisplayName.toLowerCase()
                                .indexOf(this.propertiesPaneService.GetSelectedIcon().toLowerCase()) !=
                                -1
                        };
                        PropertiesPaneController.prototype.filterOutlookIconElements = function(value) {
                            if (StringUtility.IsNullOrEmpty(this.SelectedOutlookIcon)) return true;
                            return value.DisplayName.toLowerCase().indexOf(this.SelectedOutlookIcon.toLowerCase()) != -1
                        };
                        PropertiesPaneController.prototype
                            .sortEntityList = function(thisValue, thatValue) {
                                return thisValue.DisplayName.localeCompare(thatValue.DisplayName)
                            };
                        PropertiesPaneController.prototype
                            .sortDashboardList = function(thisValue, thatValue) {
                                return thisValue.displayName.localeCompare(thatValue.displayName)
                            };
                        PropertiesPaneController.prototype
                            .sortIconList = function(thisValue, thatValue) {
                                return thisValue.DisplayName.localeCompare(thatValue.DisplayName)
                            };
                        PropertiesPaneController.prototype
                            .UpdateSubAreaIconOnSelection = function(currentSelectedObject, updatedValue) {
                                var selectedIcon;
                                if (this
                                    .IsDefaultIconSelectedForSelectedSubAreaType(updatedValue)
                                ) selectedIcon = this.commonVariableService.getDefaultImageIconText();
                                else {
                                    selectedIcon = updatedValue.DisplayName;
                                    if (selectedIcon === this.commonVariableService.getDefaultImageIconText())
                                        if (this.$scope.PropertyDirective.nodeType ===
                                            mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                                .SubArea]) this.propertiesPaneService.SetIconBasedOnSubAreaType();
                                        else if (currentSelectedObject.Icon ===
                                            this.commonVariableService
                                            .getOOBEntityImageStripUrl()
                                        )
                                            currentSelectedObject.Icon = this.commonVariableService
                                                .getDefaultAreaImageStripUrl()
                                }
                                this.propertiesPaneService.SetSelectedIcon(selectedIcon)
                            };
                        PropertiesPaneController.prototype
                            .IsDefaultIconSelectedForSelectedSubAreaType =
                            function(updatedValue) {
                                return this.commonVariableService
                                    .getOOBEntityImageStripUrl() ===
                                    updatedValue.DisplayName ||
                                    this.commonVariableService
                                    .getDefaultSubAreaImageStripUrl() ===
                                    updatedValue.DisplayName ||
                                    this.commonVariableService.getDefaultAreaImageStripUrl() ===
                                    updatedValue.DisplayName ||
                                    this.commonVariableService
                                    .getDefaultURLImageStripUrl() ===
                                    updatedValue.DisplayName ||
                                    this.commonVariableService.getDefaultWebResourceImageStripUrl() ===
                                    updatedValue.DisplayName
                            };
                        PropertiesPaneController.prototype
                            .GetSelectedIcon = function() { return this.propertiesPaneService.GetSelectedIcon() };
                        PropertiesPaneController.$inject = [
                            "$scope", "$rootScope", "$compile", "$http", "mscrmNotificationBrokerService",
                            "dataAccessService", "mscrmLocalizationService", ServiceNames.UrlHelperService,
                            "parsingService", ServiceNames.DirtyCheckService, "mscrmCommonVariableService",
                            "mscrmSitemapUtilityService", ServiceNames.FlyoutService, ServiceNames.LocaleService,
                            ServiceNames.TraceUtilityService, "mscrmSitemapScrollService", ServiceNames
                            .PropertiesPaneService
                        ];
                        return PropertiesPaneController
                    }();
                controllers.PropertiesPaneController = PropertiesPaneController;
                mscrmSitemapDesigner.SitemapDesignerModule
                    .controller("mscrmPropertiesPaneController", PropertiesPaneController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var RightPaneController = function() {
                    function RightPaneController($scope) { this.$scope = $scope }

                    return RightPaneController
                }();
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmRightPaneController", RightPaneController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    CommonConstants = Mscrm.Designers.Common.Constants,
                    SitemapCommonUtility = Mscrm.Designers.mscrmSitemapDesigner.CommonUtility,
                    SitemapController = function() {
                        function SitemapController($scope,
                            $timeout,
                            $rootScope,
                            $q,
                            dataAccessService,
                            $window,
                            urlHelperService,
                            composabilityService,
                            dirtyCheckService,
                            notificationBrokerService,
                            commonVariables,
                            localization,
                            mscrmSitemapUtilityService,
                            propertiesPaneService,
                            telemetryService,
                            actionOnSelectService,
                            notificationService,
                            mscrmSitemapValidationService) {
                            this.$scope = $scope;
                            this.$timeout = $timeout;
                            this.$rootScope = $rootScope;
                            this.$q = $q;
                            this.dataAccessService = dataAccessService;
                            this.$window = $window;
                            this.urlHelperService = urlHelperService;
                            this.composabilityService = composabilityService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.notificationBrokerService = notificationBrokerService;
                            this.commonVariables = commonVariables;
                            this.localization = localization;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.propertiesPaneService = propertiesPaneService;
                            this.telemetryService = telemetryService;
                            this.actionOnSelectService = actionOnSelectService;
                            this.notificationService = notificationService;
                            this.mscrmSitemapValidationService = mscrmSitemapValidationService;
                            this.deactivateEventHandler = null;
                            this.$scope.selectedArea = null;
                            this.$scope.showSubAreaPane = false;
                            this.$scope.selectedAreaIndex = -1;
                            this.$scope.selectedGroupIndex = -1;
                            this.$scope.selectedSubAreaIndex = -1;
                            this.$scope.mscrmSitemapUtilityService = this.mscrmSitemapUtilityService;
                            this.$scope.commonVariables = this.commonVariables;
                            this.$scope.localization = this.localization;
                            this.$scope.areas = [];
                            this.$scope.mscrmSitemapUtilityService = this.mscrmSitemapUtilityService;
                            this.$scope.propertiesPaneService = this.propertiesPaneService;
                            this.$scope.CurrentExpandedAreaId = null;
                            this.$scope.PublishNotification = this.PublishNotification.bind(this);
                            var sitemapController = this;
                            this.$scope.totalAreaPosition = 0;
                            this.$scope.totalSubAreaPosition = 0;
                            this.$scope.shouldShowAreaBorder = this.shouldShowAreaBorder.bind(this);
                            this.$scope.shouldShowGroupBorder = this.shouldShowGroupBorder.bind(this);
                            this.$scope.shouldShowSubAreaContainerBorder = this.shouldShowSubAreaContainerBorder
                                .bind(this);
                            this.composableContext = composabilityService
                                .getComposableContext(Designers.Common.Constants.DesignerName.SiteMapDesigner);
                            if (this.composableContext)
                                this.$rootScope.appTitle = this.composableContext.GetComposableContextParams()
                                    .getValue(Designers.Common.Constants.ComposableContextParam.AppName);
                            $scope.dragEndHandler = function(itemType) { this.commonVariables.dragEndHandler(itemType) }
                                .bind(this);
                            $scope.onAreaDragStart = function(event, areaIndex) {
                                event.dataTransfer.setData("text", JSON.stringify(areaIndex))
                            };
                            $scope.onGroupDragStart = function(event, groupIndex, parentSrc, item) {
                                this.commonVariables.borderInfo.group.showBorder = true;
                                event.dataTransfer.setData("text", JSON.stringify(groupIndex));
                                this.onDragStartOverArea(event, parentSrc, item)
                            };
                            $scope.moveWithinSameArr = function(index, srcIndex, arr) {
                                if (index - 1 == srcIndex) return;
                                var toRemoveIndexAfterInsertion = srcIndex;
                                if (index - 1 < srcIndex) toRemoveIndexAfterInsertion++;
                                arr.splice(index, 0, arr[srcIndex]);
                                arr.splice(toRemoveIndexAfterInsertion, 1)
                            };
                            $scope.getDirtyCheckService = this.getDirtyCheckService.bind(this);
                            $scope.onDrop = function(event, elementsArray, dest, index, cntrlType) {
                                this.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.areas);
                                var isNewElementDropped = event.dataTransfer.getData("text") == JSON.stringify("new");
                                this.getDirtyCheckService()
                                    .setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapCanvas, true);
                                if (isNewElementDropped) {
                                    actionOnSelectService
                                        .CaptureClickCountForTelemetry("SitemapDesignerDragDropUsage",
                                            CommonConstants.UserInteractionType.DragDrop);
                                    switch (cntrlType) {
                                    case "Area":
                                        var areaObj = new mscrmSitemapDesigner.model.Area;
                                        areaObj.Id = mscrmSitemapDesigner.SiteMapConstants.NewAreaPrefix +
                                            urlHelperService.SitemapGenraterandomID();
                                        areaObj.ResourceId = mscrmSitemapDesigner.LocalizationConstants.NewArea;
                                        areaObj.Group = [];
                                        this.areas.splice(index, 0, JSON.parse(JSON.stringify(areaObj)));
                                        this.handleAreaSelection(this.areas[index]);
                                        break;
                                    case "Group":
                                        if (this.selectedArea) {
                                            var groupObj = new mscrmSitemapDesigner.model.Group;
                                            groupObj.Id = mscrmSitemapDesigner.SiteMapConstants.NewGroupPrefix +
                                                urlHelperService.SitemapGenraterandomID();
                                            groupObj.ResourceId = mscrmSitemapDesigner.LocalizationConstants.NewGroup;
                                            groupObj.SubArea = [];
                                            elementsArray.splice(index, 0, groupObj);
                                            this.handleGroupSelectionOnDrop(elementsArray[index], this)
                                        }
                                        break;
                                    case "SubArea":
                                        var subAreaObj = new mscrmSitemapDesigner.model.SubArea;
                                        subAreaObj.Id = mscrmSitemapDesigner.SiteMapConstants.NewSubAreaPrefix +
                                            urlHelperService.SitemapGenraterandomID();
                                        subAreaObj.ResourceId = mscrmSitemapDesigner.LocalizationConstants.NewSubArea;
                                        subAreaObj.Client = this.commonVariables.getClientOptions();
                                        subAreaObj.Sku = this.commonVariables.getSkuOptions();
                                        this.group.SubArea.splice(index, 0, JSON.parse(JSON.stringify(subAreaObj)));
                                        this.propertiesPaneService.ResetSubAreaProperties();
                                        this.handleSubAreaSelectionOnDrop(this.group.SubArea[index], this);
                                        break
                                    }
                                } else {
                                    this.commonVariables.borderInfo.group.showBorder = false;
                                    this.commonVariables.subAreaDragInProcess = false;
                                    this.commonVariables.borderInfo.subArea.showBorder = false;
                                    if (cntrlType != "") {
                                        actionOnSelectService
                                            .CaptureClickCountForTelemetry("SitemapDesignerRearrangeUsage",
                                                CommonConstants.UserInteractionType.Rearrange);
                                        if (!this.dragOverAreaFlag) {
                                            var selectedIndex = null,
                                                srcData = JSON.parse(event.dataTransfer.getData("text")),
                                                item;
                                            if (cntrlType == "Area") {
                                                item = this.areas[parseInt(srcData)];
                                                selectedIndex = parseInt(srcData)
                                            } else if (cntrlType == "Group") {
                                                item = this.selectedArea.Group[parseInt(srcData)];
                                                selectedIndex = parseInt(srcData)
                                            }
                                            if (cntrlType == "Area" && item["Group"] != undefined ||
                                                cntrlType == "Group"
                                            ) this.moveWithinSameArr(index, selectedIndex, elementsArray);
                                            else if (cntrlType == "SubArea") {
                                                var srcGroupIndex = parseInt(srcData.split("_")[0]),
                                                    srcSubAreaIndex = parseInt(srcData.split("_")[1]),
                                                    src = this.selectedArea.Group[srcGroupIndex];
                                                if (dest == src
                                                ) this.moveWithinSameArr(index, srcSubAreaIndex, dest.SubArea);
                                                else {
                                                    dest.SubArea.splice(index, 0, src.SubArea[srcSubAreaIndex]);
                                                    src.SubArea.splice(srcSubAreaIndex, 1)
                                                }
                                            }
                                        } else if (this.dragOverAreaFlag == true)
                                            if (cntrlType == "Group") sitemapController.MoveGroupAccrossArea(index);
                                            else
                                                cntrlType == "SubArea" &&
                                                    sitemapController.MoveSubAreaAcrossArea(dest, index)
                                    }
                                }
                                this.dragOverAreaFlag = false;
                                this.$digest();
                                this.displayPagination(cntrlType, $scope);
                                this.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.areas)
                            };
                            this.$scope.displayPagination = this.displayPagination.bind(this);
                            this.$scope.handleAreaSelection = this.handleAreaSelection.bind(this);
                            this.$scope.onAreaFocus = this.onAreaFocus.bind(this);
                            this.$scope.handleGroupSelectionOnDrop = this.handleGroupSelectionOnDrop.bind(this);
                            this.$scope.handleSubAreaSelectionOnDrop = this.handleSubAreaSelectionOnDrop.bind(this);
                            this.$scope.expandAreaOnLoad = this.expandAreaOnLoad.bind(this);
                            this.$scope.sitemapCanvasClick = this.sitemapCanvasClick.bind(this);
                            this.$scope.handleNodeSlide = this.handleNodeSlide.bind(this);
                            this.sortableUiInit();
                            this.$scope.groupNavContainer = this.groupNavContainer.bind(this);
                            this.$scope.idSelectedVote = null;
                            this.$scope.width = $(window).width();
                            var thisObj = this;
                            $window.addEventListener("resize",
                                function() {
                                    angular.element(".nav-scrl-cont")
                                        .width(angular.element(SitemapController.navContainerSelector).width() - 40);
                                    SitemapController.prototype.arrowCheck(thisObj)
                                },
                                true);
                            this.setAreaPagination();
                            $scope.dragOverArea = function(event, index, external, typeofElm) {
                                if (typeofElm != "areaType") {
                                    index = index == this.areas.length ? index - 1 : index;
                                    if (this.dragOverAreaFlag == false || this.selectedArea != this.areas[index]) {
                                        this.dragOverAreaFlag = true;
                                        sitemapController.handleAreaSelection(this.areas[index])
                                    }
                                } else return true
                            };
                            this.$scope.onDragStartOverArea = function(event, draggedSrc, item) {
                                this.commonVariables.SetDraggedElement(item);
                                this.commonVariables.SetDraggedSrc(draggedSrc);
                                this.commonVariables.SetfreezeDraggedSrcArea(true);
                                this.commonVariables.SetDraggedSrcArea(this.selectedArea)
                            };
                            this.deactivateEventHandler = this.$rootScope
                                .$on("sitemapDeletion", this.HandleDeleteEvent.bind(this));
                            this.$scope.$on("$destroy", this.destroyEvent.bind(this))
                        }

                        Object.defineProperty(SitemapController,
                            "actionHide",
                            { "get": function() { return 0 }, enumerable: true, configurable: true });
                        Object.defineProperty(SitemapController,
                            "actionShow",
                            { "get": function() { return 1 }, enumerable: true, configurable: true });
                        Object.defineProperty(SitemapController,
                            "groupType",
                            { "get": function() { return 0 }, enumerable: true, configurable: true });
                        Object.defineProperty(SitemapController,
                            "groupTpyeTotalContainer",
                            {
                                "get": function() {
                                    return "#detailActionGroupControl_viewport .mscrm-groupItemContainer"
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(SitemapController,
                            "groupTpyeContainer",
                            {
                                "get": function() { return "#detailActionGroupControl_scrollableContainer" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(SitemapController,
                            "areaType",
                            { "get": function() { return 1 }, enumerable: true, configurable: true });
                        Object.defineProperty(SitemapController,
                            "areaTpyeTotalContainer",
                            {
                                "get": function() { return "#actionGroupControl_viewport .mscrm-areaNodeContainer" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(SitemapController,
                            "areaTpyeContainer",
                            {
                                "get": function() { return "#actionGroupControl_scrollableContainer" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(SitemapController,
                            "noOfPages",
                            { "get": function() { return "noOfPages" }, enumerable: true, configurable: true });
                        Object.defineProperty(SitemapController,
                            "navContainerSelector",
                            {
                                "get": function() { return ".mscrm-navbarContainer" },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        Object.defineProperty(SitemapController,
                            "isPageBreak",
                            { "get": function() { return "isPageBreak" }, enumerable: true, configurable: true });
                        Object.defineProperty(SitemapController,
                            "groupLabelContainerClass",
                            {
                                "get": function() { return "mscrm-groupLabelContainer" },
                                enumerable: true,
                                configurable: true
                            });
                        SitemapController.prototype
                            .shouldShowAreaBorder = function() {
                                return this.commonVariables.borderInfo.area.showBorder
                            };
                        SitemapController.prototype
                            .shouldShowGroupBorder = function() {
                                return this.commonVariables.borderInfo.group.showBorder
                            };
                        SitemapController.prototype.shouldShowSubAreaContainerBorder = function(groupIndex) {
                            var currentPosition = this.getCurrentPosition("group"),
                                totalContainerSelector = SitemapController.groupTpyeTotalContainer,
                                containerSelector = SitemapController.groupTpyeContainer,
                                currentPageIndex = 0,
                                nodeType = SitemapController.groupType,
                                paginatedObject = this
                                    .getTotalElementWidth(totalContainerSelector, containerSelector, nodeType);
                            if (currentPosition < 0)
                                currentPageIndex = this.getCurrentPageIndex(currentPosition, paginatedObject);
                            var lastGroupIndexByPageIndex = this.getLastGroupIndexByPageIndex(totalContainerSelector),
                                subAreaDraggedOver = angular.element("#GroupElements")
                                    .find(".mscrm-subareaNodesContainer.dndDragover").length;
                            if (subAreaDraggedOver === 0 && this.commonVariables.subAreaDragInProcess === true
                            ) this.commonVariables.borderInfo.subArea.showBorder = true;
                            if (groupIndex == lastGroupIndexByPageIndex[currentPageIndex]
                            ) return this.commonVariables.borderInfo.subArea.showBorder;
                            return false
                        };
                        SitemapController.prototype.destroyEvent = function() { this.deactivateEventHandler() };
                        SitemapController.prototype.PublishNotification = function(eventName, context) {
                            var notificationObj = new mscrmSitemapDesigner.model.NotificationObj(eventName, context);
                            this.notificationBrokerService.Notify(notificationObj)
                        };
                        SitemapController.prototype
                            .expandAreaOnLoad = function(index, areaNode) {
                                index === 0 && this.handleAreaSelection(areaNode, true, true)
                            };
                        SitemapController.prototype.getDirtyCheckService = function() { return this.dirtyCheckService };
                        SitemapController.prototype.arrowCheck = function(thisObj) {
                            this.areaOrGroupArrowCheck(thisObj, SitemapController.areaType);
                            this.areaOrGroupArrowCheck(thisObj, SitemapController.groupType)
                        };
                        SitemapController.prototype.displayPagination = function(controlType, scope) {
                            var nodeType;
                            this.$scope = scope;
                            switch (controlType) {
                            case "Area":
                                nodeType = SitemapController.areaType;
                                break;
                            case "Group":
                                nodeType = SitemapController.groupType;
                                break;
                            case "SubArea":
                                nodeType = SitemapController.groupType;
                                break
                            }
                            this.areaOrGroupArrowCheck(this, nodeType)
                        };
                        SitemapController.prototype.hideOrShowArrow = function(action, isLeft, nodeType) {
                            var displayProperty = action == SitemapController.actionHide ? "none" : "block",
                                directionStr = "rightNavContainer";
                            if (isLeft) directionStr = "leftNavContainer";
                            var nodeStr = nodeType === SitemapController.areaType
                                ? "#actionGroupControl"
                                : "#detailActionGroupControl";
                            angular.element(nodeStr + "_" + directionStr).css("display", displayProperty)
                        };
                        SitemapController.prototype.areaOrGroupArrowCheck = function(thisObj, nodeType) {
                            var maskWidth = this.getNavContainerWidth(),
                                totalContainerSelector = nodeType === SitemapController.areaType
                                    ? SitemapController.areaTpyeTotalContainer
                                    : SitemapController.groupTpyeTotalContainer,
                                containerSelector = nodeType === SitemapController.areaType
                                    ? SitemapController.areaTpyeContainer
                                    : SitemapController.groupTpyeContainer,
                                totalElemW = thisObj
                                    .getTotalElementWidth(totalContainerSelector, containerSelector, nodeType)[
                                        "totalPageWidth"],
                                offset = thisObj.$scope.totalAreaPosition == undefined
                                    ? 0
                                    : thisObj.$scope.totalAreaPosition;
                            if (nodeType === SitemapController.groupType
                            )
                                offset = thisObj.$scope.totalSubAreaPosition == undefined
                                    ? 0
                                    : thisObj.$scope.totalSubAreaPosition;
                            if (maskWidth < totalElemW + offset
                            ) this.hideOrShowArrow(SitemapController.actionShow, false, nodeType);
                            else this.hideOrShowArrow(SitemapController.actionHide, false, nodeType);
                            if (offset < 0) this.hideOrShowArrow(SitemapController.actionShow, true, nodeType);
                            else this.hideOrShowArrow(SitemapController.actionHide, true, nodeType)
                        };
                        SitemapController.prototype.checkAreaRightArrowVisible = function(areaWidth) {
                            if (this.getNavContainerWidth() <
                                this.getTotalElementWidth(SitemapController.areaTpyeTotalContainer,
                                    SitemapController.areaTpyeContainer,
                                    SitemapController.areaType)["totalPageWidth"] -
                                areaWidth) {
                                angular.element("#actionGroupControl_rightNavContainer").css("display", "block");
                                angular.element("#detailActionGroupControl_rightNavContainer").css("display", "none")
                            } else angular.element("#actionGroupControl_rightNavContainer").css("display", "none")
                        };
                        SitemapController.prototype.checkGroupRighArrowtVisible = function(groupWidth) {
                            if (angular.element(".mscrm-navbarContainer").width() <
                                this.getTotalElementWidth(SitemapController.groupTpyeTotalContainer,
                                    SitemapController.groupTpyeContainer,
                                    SitemapController.groupType)["totalPageWidth"] -
                                groupWidth)
                                this.hideOrShowArrow(SitemapController.actionShow, false, SitemapController.groupType);
                            else this.hideOrShowArrow(SitemapController.actionHide, false, SitemapController.groupType)
                        };
                        SitemapController.prototype
                            .getCurrentPosition = function(nodeName) {
                                return nodeName == "area"
                                    ? parseInt(this.$scope.view.css("margin-left"))
                                    : parseInt(this.$scope.listview.css("margin-left"))
                            };
                        SitemapController.prototype
                            .getNavContainerWidth = function() {
                                return angular.element(SitemapController.navContainerSelector).width()
                            };
                        SitemapController.prototype.getCurrentPageIndex = function(currentPosition, paginatedObject) {
                            for (var totalPages = paginatedObject[SitemapController.noOfPages],
                                sum = 0,
                                pageIndex = 0,
                                i = 0;
                                i < totalPages;
                                i++) {
                                sum += paginatedObject[i];
                                if (sum === Math.abs(currentPosition)) {
                                    pageIndex = i + 1;
                                    break
                                }
                            }
                            return pageIndex
                        };
                        Object.defineProperty(SitemapController.prototype,
                            "BrandName",
                            {
                                "get": function() {
                                    return this.$scope.localization
                                        .getResourceString(mscrmSitemapDesigner.LocalizationConstants.CRM_Brand)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        SitemapController.prototype.handleNodeSlide = function(event, index, nodeName, selectorName) {
                            if (event.keyCode == CommonConstants.KeyCode.TabKeyCode) {
                                if (nodeName == mscrmSitemapDesigner.SiteMapConstants.GroupNode &&
                                    !this.checkGroupNode(event)) return;
                                if (event.shiftKey)
                                    this.groupNavContainer(mscrmSitemapDesigner.SiteMapConstants.Left,
                                        nodeName,
                                        selectorName,
                                        index);
                                else
                                    this.groupNavContainer(mscrmSitemapDesigner.SiteMapConstants.Right,
                                        nodeName,
                                        selectorName,
                                        index)
                            }
                        };
                        SitemapController.prototype
                            .checkGroupNode = function(event) {
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(event
                                        .target))
                                    return angular.element(event.target)
                                        .hasClass(SitemapController.groupLabelContainerClass)
                            };
                        SitemapController.prototype
                            .groupNavContainer = function(direction, nodeName, selectorName, index) {
                                var currentPosition = this.getCurrentPosition(nodeName),
                                    currentView = nodeName == mscrmSitemapDesigner.SiteMapConstants.AreaNode
                                        ? this.$scope.view
                                        : this.$scope.listview,
                                    totalContainerSelector = nodeName == mscrmSitemapDesigner.SiteMapConstants.AreaNode
                                        ? SitemapController.areaTpyeTotalContainer
                                        : SitemapController.groupTpyeTotalContainer,
                                    containerSelector = nodeName == mscrmSitemapDesigner.SiteMapConstants.AreaNode
                                        ? SitemapController.areaTpyeContainer
                                        : SitemapController.groupTpyeContainer,
                                    currentPageIndex = 0,
                                    nodeType = nodeName == mscrmSitemapDesigner.SiteMapConstants.GroupNode
                                        ? SitemapController.groupType
                                        : SitemapController.areaType,
                                    paginatedObject = this
                                        .getTotalElementWidth(totalContainerSelector,
                                            containerSelector,
                                            nodeType,
                                            index);
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(index) &&
                                    !paginatedObject[SitemapController
                                        .isPageBreak]) direction = Designers.Common.Utility.StringUtilities.EmptyString;
                                if (currentPosition < 0 &&
                                    !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(direction)
                                ) currentPageIndex = this.getCurrentPageIndex(currentPosition, paginatedObject);
                                switch (direction) {
                                case mscrmSitemapDesigner.SiteMapConstants.Right:
                                    if (paginatedObject[currentPageIndex] === undefined
                                    ) this.$scope.move = paginatedObject[paginatedObject[SitemapController.noOfPages]];
                                    else this.$scope.move = paginatedObject[currentPageIndex];
                                    currentView.stop(false, true)
                                        .animate({ marginLeft: "-=" + this.$scope.move },
                                            { duration: 400 },
                                            { easing: mscrmSitemapDesigner.SiteMapConstants.Swing });
                                    var totalContentWidth = this.getTotalContentWidth(totalContainerSelector),
                                        containerWidth = this.getContainerWidth(containerSelector),
                                        _this = this;
                                    if (nodeName == mscrmSitemapDesigner.SiteMapConstants.AreaNode) {
                                        this.$scope
                                            .totalAreaPosition = this.$scope.totalAreaPosition - this.$scope.move;
                                        this.$timeout(function() {
                                                _this.areaOrGroupArrowCheck(_this, SitemapController.areaType)
                                            },
                                            0,
                                            false)
                                    } else {
                                        this.$scope
                                            .totalSubAreaPosition = this.$scope.totalSubAreaPosition - this.$scope.move;
                                        this.$timeout(function() {
                                                _this.areaOrGroupArrowCheck(_this, SitemapController.groupType)
                                            },
                                            0,
                                            false)
                                    }
                                    break;
                                case mscrmSitemapDesigner.SiteMapConstants.Left:
                                    if (currentPosition < 0) {
                                        if (paginatedObject[currentPageIndex - 1] === undefined
                                        )
                                            this.$scope.move = paginatedObject[paginatedObject[SitemapController
                                                .noOfPages]];
                                        else this.$scope.move = paginatedObject[currentPageIndex - 1];
                                        if (this.$scope.move === 0) this.$scope.move = -currentPosition;
                                        if (this.$scope.move > -currentPosition) this.$scope.move = -currentPosition;
                                        currentView.stop(false, true)
                                            .animate({ marginLeft: "+=" + this.$scope.move },
                                                { duration: 400 },
                                                { easing: mscrmSitemapDesigner.SiteMapConstants.Swing })
                                    }
                                    var _this = this;
                                    if (nodeName == mscrmSitemapDesigner.SiteMapConstants.AreaNode) {
                                        this.$scope
                                            .totalAreaPosition = this.$scope.totalAreaPosition + this.$scope.move;
                                        this.$timeout(function() {
                                                _this.areaOrGroupArrowCheck(_this, SitemapController.areaType)
                                            },
                                            0,
                                            false)
                                    } else {
                                        this.$scope
                                            .totalSubAreaPosition = this.$scope.totalSubAreaPosition + this.$scope.move;
                                        this.$timeout(function() {
                                                _this.areaOrGroupArrowCheck(_this, SitemapController.groupType)
                                            },
                                            0,
                                            false)
                                    }
                                    break
                                }
                            };
                        SitemapController.prototype.setAreaPagination = function() {
                            this.$scope.view = angular.element("#actionGroupControl_viewport.nav-scrl-view");
                            !angular.isUndefined(this.$scope.areas) &&
                                this.handlepaginationArea("#actionGroupControl",
                                    SitemapController.areaTpyeContainer,
                                    this.$scope.areas.length * 210)
                        };
                        SitemapController.prototype.getTotalContentWidth = function(totalContainerSelector) {
                            var result = 0;
                            $(totalContainerSelector).each(function() { result += $(this).outerWidth(true) });
                            return result
                        };
                        SitemapController.prototype.getSubAreaMaxWidthArr = function(groupNode) {
                            var result = [];
                            groupNode.each(function(index) {
                                var currentSubAreaWidth = $(this).outerWidth(true);
                                if ((index + 1) % 6 == 1) result.push(currentSubAreaWidth);
                                else if (result[result
                                        .length -
                                        1] <
                                    currentSubAreaWidth) result[result.length - 1] = currentSubAreaWidth
                            });
                            return result
                        };
                        SitemapController.prototype
                            .getTotalElementWidth =
                            function(totalContainerSelector, containerSelector, nodeType, index) {
                                var result = [], _this = this, pageBreak = false;
                                $(totalContainerSelector).each(function() {
                                    var subAreaNodes = [];
                                    if (nodeType == SitemapController.groupType
                                    ) subAreaNodes = $(this).find(".mscrm-subareaNodeContainer");
                                    if (nodeType == SitemapController.groupType && subAreaNodes.length > 6
                                    ) result = result.concat(_this.getSubAreaMaxWidthArr(subAreaNodes));
                                    else result.push($(this).outerWidth(true))
                                });
                                for (var pageOffsets = [],
                                    currentPageWidth = 0,
                                    totalPageWidth = 0,
                                    i = 0,
                                    currentPageMargin = 0,
                                    page = 0,
                                    i = 0;
                                    i < result.length;
                                    i++) {
                                    if (currentPageWidth > 0 &&
                                        currentPageWidth + result[i] >= this.getNavContainerWidth()
                                    ) {
                                        pageOffsets[page++] = currentPageWidth;
                                        currentPageWidth = 0;
                                        if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(index) &&
                                            index != 0 &&
                                            index != result.length &&
                                            index == i) {
                                            pageBreak = true;
                                            break
                                        }
                                    }
                                    currentPageWidth += result[i];
                                    totalPageWidth += result[i]
                                }
                                pageOffsets[SitemapController.isPageBreak] = pageBreak;
                                pageOffsets[page] = currentPageWidth;
                                pageOffsets["totalPageWidth"] = totalPageWidth;
                                pageOffsets[SitemapController.noOfPages] = page;
                                return pageOffsets
                            };
                        SitemapController.prototype.getLastGroupIndexByPageIndex = function(totalContainerSelector) {
                            var result = [], _this = this, lastGroupIndexByPageIndex = [];
                            $(totalContainerSelector).each(function() {
                                var subAreaNodes = [];
                                result.push($(this).outerWidth(true))
                            });
                            for (var currentPageWidth = 0, containerWidth = this.getNavContainerWidth(), i = 0;
                                i < result.length;
                                i++) {
                                currentPageWidth += result[i];
                                if (currentPageWidth == containerWidth) {
                                    lastGroupIndexByPageIndex.push(i);
                                    currentPageWidth = 0
                                } else if (currentPageWidth > containerWidth) {
                                    lastGroupIndexByPageIndex.push(i - 1);
                                    currentPageWidth = result[i]
                                }
                            }
                            currentPageWidth > 0 && lastGroupIndexByPageIndex.push(result.length - 1);
                            return lastGroupIndexByPageIndex
                        };
                        SitemapController.prototype
                            .getContainerWidth = function(containerSelector) {
                                return $(containerSelector).outerWidth(false)
                            };
                        SitemapController.prototype
                            .handlepaginationArea = function(selectorName, parentSelectorName, totalWidthOfContainer) {
                                this.$scope.viewSiteMap = angular.element(".mscrm-navbarContainer").width();
                                this.$scope.move = this.$scope.viewSiteMap;
                                this.$scope.sliderLimit = -this.$scope.viewSiteMap;
                                var viePointWidth = this.$scope.viewSiteMap;
                                if (totalWidthOfContainer - viePointWidth >= 210
                                ) angular.element(selectorName + "_rightNavContainer").css("display", "block");
                                else angular.element(selectorName + "_rightNavContainer").css("display", "none")
                            };
                        SitemapController.prototype.onAreaFocus = function(areaNode) {
                            var selectedAreaNode = { Area: areaNode };
                            this.$scope.PublishNotification("evtSiteMapNodeSelected", selectedAreaNode);
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$rootScope) &&
                                this.SetPropertiesPaneVisibility(true)
                        };
                        SitemapController.prototype
                            .handleAreaSelection = function(areaNode, fromView, disablePropertiesPane) {
                                SitemapCommonUtility.SetUnsupportedComponentMessageVisibility(this, false);
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(areaNode)) {
                                    angular.element("#detailActionGroupControl_viewport.nav-scrl-view")
                                        .css("margin-left", "0");
                                    this.$scope.showSubAreaPane = true;
                                    for (var i = 0; i < this.$scope.areas.length; i++)
                                        if (this.$scope.areas[i].Id == areaNode.Id) {
                                            this.$scope.selectedArea = this.$scope.areas[i];
                                            !this.$scope.commonVariables.GetfreezeDraggedSrcArea() &&
                                                this.$scope.commonVariables.SetDraggedSrcArea(this.$scope.selectedArea);
                                            break
                                        }
                                    this.$scope.commonVariables.SetSelectedGroup(null);
                                    this.$scope.commonVariables.SetSelectedSubArea(null);
                                    if (!disablePropertiesPane) {
                                        this.$scope.commonVariables.SetSelectedArea(areaNode);
                                        var ctx = { Area: areaNode };
                                        this.$scope.idSelectedVote = areaNode;
                                        this.$scope.PublishNotification("evtSiteMapNodeSelected", ctx);
                                        !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$rootScope) &&
                                            this.SetPropertiesPaneVisibility(true)
                                    } else {
                                        this.$scope[mscrmSitemapDesigner.SiteMapConstants.AreaSelected] = areaNode.Id;
                                        this.SetPropertiesPaneVisibility(false)
                                    }
                                    this.$scope.listview = angular
                                        .element("#detailActionGroupControl_viewport.nav-scrl-view");
                                    if (fromView) {
                                        var _this = this;
                                        !angular.isUndefined(this.$scope.selectedArea.Group) &&
                                            this.$timeout(function() {
                                                    _this.$scope.totalSubAreaPosition = 0;
                                                    _this.displayPagination("Area", _this.$scope);
                                                    _this.displayPagination("Group", _this.$scope)
                                                },
                                                0,
                                                false)
                                    } else {
                                        this.hideOrShowArrow(SitemapController.actionHide,
                                            true,
                                            SitemapController.groupType);
                                        this.hideOrShowArrow(SitemapController.actionHide,
                                            false,
                                            SitemapController.groupType)
                                    }
                                    this.$scope.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.areas)
                                }
                            };
                        SitemapController.prototype.areaSelectionNodeOperation = function(areaNode, $scope) {
                            this.$scope = $scope;
                            this.handleAreaSelection(areaNode)
                        };
                        SitemapController.prototype.sortableUiInit = function() {
                            this.$scope
                                .sortableOptionsForArea = {
                                    connectWith: ".area-item",
                                    "ui-floating": true,
                                    stop: function() {}
                                };
                            this.$scope
                                .sortableOptionsForGroup = {
                                    placeholder: "group-item-destination",
                                    connectWith: ".group-item",
                                    "ui-floating": true,
                                    stop: function() {}
                                }
                        };
                        SitemapController.prototype.addArea = function($scope, thisObj) {
                            this.$scope = $scope;
                            var areaObj = new mscrmSitemapDesigner.model.Area;
                            areaObj.Id = mscrmSitemapDesigner.SiteMapConstants.NewAreaPrefix +
                                Math.random().toString(16).substring(7);
                            areaObj.ResourceId = mscrmSitemapDesigner.LocalizationConstants.NewArea;
                            var index = $scope.areas.length;
                            if (this.commonVariables && this.commonVariables.GetSelectedArea() != null) {
                                index = this.$scope.mscrmSitemapUtilityService.GetAreaIndexById($scope.selectedArea.Id);
                                index = index + 1
                            }
                            this.$scope.selectedAreaIndex = index;
                            $scope.areas.splice(index, 0, JSON.parse(JSON.stringify(areaObj)));
                            this.handleAreaSelection($scope.areas[index]);
                            this.$scope.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.areas)
                        };
                        SitemapController.prototype.addGroup = function($scope, thisObject) {
                            this.$scope = $scope;
                            var groupObj = new mscrmSitemapDesigner.model.Group;
                            groupObj.ResourceId = mscrmSitemapDesigner.LocalizationConstants.NewGroup;
                            groupObj.Id = mscrmSitemapDesigner.SiteMapConstants.NewGroupPrefix +
                                Math.random().toString(16).substring(7);
                            var index = -1;
                            if ($scope.selectedArea) {
                                var selectedGroup = thisObject.commonVariables.GetSelectedGroup();
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(selectedGroup)
                                )
                                    index = this.$scope.mscrmSitemapUtilityService
                                        .GetGroupIndexById($scope.selectedArea.Id, selectedGroup.Id);
                                if (index > -1) {
                                    index = index + 1;
                                    $scope.selectedArea.Group.splice(index, 0, JSON.parse(JSON.stringify(groupObj)))
                                } else {
                                    var selectedSubArea = thisObject.commonVariables.GetSelectedSubArea();
                                    if (selectedSubArea) {
                                        index = this.$scope.mscrmSitemapUtilityService
                                            .GetGroupIndexBySubAreaId($scope.selectedArea.Id, selectedSubArea.Id);
                                        index = index + 1;
                                        selectedGroup = $scope.selectedArea.Group[index];
                                        $scope.selectedArea.Group
                                            .splice(index, 0, JSON.parse(JSON.stringify(groupObj)));
                                        thisObject.commonVariables.SetSelectedGroup(selectedGroup)
                                    } else {
                                        $scope.selectedArea.Group.push(JSON.parse(JSON.stringify(groupObj)));
                                        index = $scope.selectedArea.Group.length - 1
                                    }
                                }
                                this.$scope.selectedGroupIndex = index;
                                thisObject.commonVariables.SetSelectedGroup($scope.selectedArea.Group[index]);
                                $scope.selectedArea.Group.selected = $scope.selectedArea.Group[index];
                                controllers.GroupController.prototype
                                    .groupSelectionNodeOperation($scope.selectedArea.Group[index], $scope)
                            }
                            this.$scope.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.areas)
                        };
                        SitemapController.prototype.addSubArea = function($scope, thisObject) {
                            this.$scope = $scope;
                            controllers.GroupController.prototype.addSubAreaNode($scope, thisObject)
                        };
                        SitemapController.prototype
                            .GotoLastPage = function() {
                                angular.element("#actionGroupControl_rightNavContainer").css("display") == "block" &&
                                    this.groupNavContainer("right", "area", "#actionGroupControl")
                            };
                        SitemapController.prototype.MoveSubAreaAcrossArea = function(dest, index) {
                            this.commonVariables.SetDraggedCntrlType("Sub-Area");
                            var sourceGroup = this.commonVariables.GetDraggedSrc(),
                                duplicateSubArea = this.mscrmSitemapValidationService
                                    .GetDuplicateNode(this.commonVariables.GetSelectedArea(),
                                        sourceGroup,
                                        this.commonVariables.GetDraggedElement(),
                                        mscrmSitemapDesigner.SiteMapConstants.SubArea);
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(duplicateSubArea)) {
                                var item = this.commonVariables.GetDraggedElement(),
                                    draggedSrcArea = this.commonVariables.GetDraggedSrcArea();
                                if (draggedSrcArea != null) {
                                    var groupIndex = this.mscrmSitemapUtilityService
                                            .GetGroupIndexById(draggedSrcArea.Id, sourceGroup.Id),
                                        srcIndex = this.mscrmSitemapUtilityService
                                            .GetSubAreaIndexById(draggedSrcArea.Id,
                                                draggedSrcArea.Group[groupIndex].Id,
                                                item.Id);
                                    draggedSrcArea.Group[groupIndex].SubArea.splice(srcIndex, 1);
                                    dest.SubArea.splice(index, 0, item)
                                }
                                this.commonVariables.SetDraggedSrcArea(null);
                                this.commonVariables.SetfreezeDraggedSrcArea(false)
                            } else {
                                this.notificationService
                                    .DisplayError(this
                                        .GetErrorForDuplicateSubArea(this.commonVariables.GetDraggedSrcArea(),
                                            sourceGroup,
                                            this.commonVariables.GetDraggedElement(),
                                            duplicateSubArea));
                                this.applyScope()
                            }
                        };
                        SitemapController.prototype.MoveGroupAccrossArea = function(index) {
                            var draggedGroup = this.commonVariables.GetDraggedElement(),
                                dupGroup = this.mscrmSitemapValidationService
                                    .GetDuplicateNode(this.commonVariables.GetSelectedArea(),
                                        draggedGroup,
                                        this.commonVariables.GetDraggedElement(),
                                        mscrmSitemapDesigner.SiteMapConstants.Group),
                                errorList = [];
                            this.commonVariables.SetSelectedGroup(dupGroup);
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(dupGroup)) {
                                for (var isValidGroupToMove = true, ind = 0; ind < draggedGroup.SubArea.length; ind++) {
                                    var dupSubArea = this.mscrmSitemapValidationService
                                        .GetDuplicateNode(this.commonVariables.GetSelectedArea(),
                                            draggedGroup,
                                            draggedGroup.SubArea[ind],
                                            mscrmSitemapDesigner.SiteMapConstants.SubArea);
                                    if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(dupSubArea)) {
                                        isValidGroupToMove = false;
                                        var error = this
                                            .GetErrorForDuplicateSubArea(this.commonVariables.GetDraggedSrcArea(),
                                                draggedGroup,
                                                draggedGroup.SubArea[ind],
                                                dupSubArea);
                                        errorList.push(error)
                                    }
                                }
                                if (isValidGroupToMove) {
                                    var dest = null, srcIndex = null, src = this.commonVariables.GetDraggedSrc();
                                    if (src != null) {
                                        dest = this.$scope.selectedArea;
                                        if (draggedGroup["SubArea"] != undefined) {
                                            srcIndex = this.mscrmSitemapUtilityService
                                                .GetGroupIndexById(src.Id, draggedGroup.Id);
                                            src.Group.splice(srcIndex, 1);
                                            dest.Group.splice(index, 0, draggedGroup)
                                        }
                                        this.commonVariables.SetDraggedCntrlType("");
                                        this.commonVariables.SetDraggedSrcArea(null);
                                        this.commonVariables.SetfreezeDraggedSrcArea(false)
                                    }
                                } else if (errorList.length > 0) {
                                    this.notificationService.DisplayErrors(errorList);
                                    this.applyScope()
                                }
                            } else {
                                var error = this.localization
                                    .getResourceString(mscrmSitemapDesigner.LocalizationConstants
                                        .Error_DuplicateIdOnDrop)
                                    .replace("{0}",
                                        this.mscrmSitemapValidationService
                                        .GetAreaNodeName(this.commonVariables.GetDraggedSrcArea()) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        this.mscrmSitemapValidationService.GetGroupNodeName(draggedGroup))
                                    .replace("{1}", draggedGroup.Id)
                                    .replace("{2}",
                                        this.mscrmSitemapValidationService
                                        .GetAreaNodeName(this.commonVariables.GetSelectedArea()) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        this.mscrmSitemapValidationService.GetGroupNodeName(dupGroup));
                                this.notificationService.DisplayError(error)
                            }
                        };
                        SitemapController.prototype
                            .HandleDeleteEvent = function(event, args) {
                                this.$scope.showSubAreaPane = args.showSubAreaPane
                            };
                        SitemapController.prototype.handleSubAreaSelectionOnDrop = function(subAreaNode, $scope) {
                            this.SetPropertiesPaneVisibility(true);
                            controllers.SubAreaController.prototype.subAreaSelectionNodeOperation(subAreaNode, this);
                            this.commonVariables.SetSelectedSubArea(subAreaNode)
                        };
                        SitemapController.prototype.handleGroupSelectionOnDrop = function(groupNode, $scope) {
                            this.SetPropertiesPaneVisibility(true);
                            controllers.GroupController.prototype.groupSelectionNodeOperation(groupNode, $scope)
                        };
                        SitemapController.prototype.SetPropertiesPaneVisibility = function(isVisible) {
                            SitemapCommonUtility.SetUnsupportedComponentMessageVisibility(this, false);
                            this.commonVariables.SetShowPropertiesPane(isVisible);
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$rootScope) &&
                                this.$rootScope.$broadcast(mscrmSitemapDesigner.SiteMapConstants
                                    .SitemapShowPropertiesPane,
                                    { showPropertiesPane: isVisible })
                        };
                        SitemapController.prototype.sitemapCanvasClick = function() {
                            this.$scope.commonVariables.SetSelectedArea(null);
                            this.$scope.commonVariables.SetSelectedGroup(null);
                            this.$scope.commonVariables.SetSelectedSubArea(null);
                            this.SetPropertiesPaneVisibility(false)
                        };
                        SitemapController.prototype
                            .GetErrorForDuplicateSubArea = function(area, group, subArea, duplicateSubArea) {
                                var error = this.localization
                                    .getResourceString(mscrmSitemapDesigner.LocalizationConstants
                                        .Error_DuplicateIdOnDrop)
                                    .replace("{0}",
                                        this.mscrmSitemapValidationService.GetAreaNodeName(area) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        this.mscrmSitemapValidationService.GetGroupNodeName(group) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        this.mscrmSitemapValidationService.GetSubAreaNodeName(subArea))
                                    .replace("{1}", subArea.Id)
                                    .replace("{2}",
                                        this.mscrmSitemapValidationService
                                        .GetAreaNodeName(this.commonVariables.GetSelectedArea()) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        this.mscrmSitemapValidationService
                                        .GetGroupNodeName(this.commonVariables.GetDuplicateGroup()) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        this.mscrmSitemapValidationService.GetSubAreaNodeName(duplicateSubArea));
                                return error
                            };
                        SitemapController.prototype
                            .applyScope = function() { !this.$scope.$$phase && this.$scope.$apply() };
                        SitemapController.$inject = [
                            ServiceNames.ScopeService, ServiceNames.TimeoutService, "$rootScope", ServiceNames.QService,
                            ServiceNames.SiteMapDesignerDataAccessService, ServiceNames.WindowService, ServiceNames
                            .UrlHelperService, ServiceNames.ComposabilityService, ServiceNames.DirtyCheckService,
                            "mscrmNotificationBrokerService", "mscrmCommonVariableService", ServiceNames
                            .LocalizationService, "mscrmSitemapUtilityService", ServiceNames.PropertiesPaneService,
                            "mscrmTelemetryService", Designers.Common.Constants.ServiceNames.ActionOnSelectService,
                            ServiceNames.NotificationBarService, ServiceNames.SitemapDesignerValidationService
                        ];
                        return SitemapController
                    }();
                controllers.SitemapController = SitemapController;
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmSitemapController", SitemapController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    CommonConstants = Mscrm.Designers.Common.Constants,
                    StringUtility = Mscrm.Designers.Common.Utility.StringUtilities,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    SitemapCommonUtility = Mscrm.Designers.mscrmSitemapDesigner.CommonUtility,
                    SubAreaController = function() {
                        function SubAreaController($scope,
                            $rootScope,
                            notificationBrokerService,
                            dataAccessService,
                            localization,
                            window,
                            commonVariables,
                            mscrmSitemapUtilityService,
                            flyoutService,
                            dirtyCheckService,
                            propertiesPaneService,
                            mscrmSitemapValidationService,
                            parsingService,
                            $q) {
                            var _this = this;
                            this.$scope = $scope;
                            this.$rootScope = $rootScope;
                            this.notificationBrokerService = notificationBrokerService;
                            this.dataAccessService = dataAccessService;
                            this.localization = localization;
                            this.window = window;
                            this.commonVariables = commonVariables;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.flyoutService = flyoutService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.propertiesPaneService = propertiesPaneService;
                            this.mscrmSitemapValidationService = mscrmSitemapValidationService;
                            this.parsingService = parsingService;
                            this.$q = $q;
                            this.selectedPrevilegeLogicName = null;
                            this.showTypeHead = false;
                            this.selectedEntityDisplayName = "";
                            this.showNoResultMessage = false;
                            this.$scope.onSubAreaSelection = this.onSubAreaSelection.bind(this);
                            this.$scope.GetResourceString = this.GetResourceString.bind(this);
                            this.privilegeEntityList = this.dataAccessService.getEntityListWrapper();
                            this.$scope.subAreaPrevilege = null;
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$scope.subArea)) return;
                            var entityName = this.$scope.subArea.Entity,
                                entityList = this.dataAccessService.entityMappingList,
                                isCustomEntity = entityList != null && entityList[entityName] != null
                                    ? entityList[entityName].IsCustomEntity
                                    : false;
                            this.defaultIconPromise = this.getDefaultSubAreaIcon();
                            this.defaultIconPromise.then(function() {
                                if (isCustomEntity) {
                                    _this.$scope.subArea.EntityIconClass = _this.commonVariables
                                        .getCustomEntityIconClassName();
                                    if (!Designers.Common.Utility.StringUtilities
                                        .IsNullOrEmpty(_this.$scope.subArea
                                            .EntityIconClass))
                                        _this.$scope.subArea.Icon = _this.commonVariables
                                            .getDefaultSubAreaImageStripUrl();
                                    else _this.$scope.subArea.Icon = _this.commonVariables.getOOBEntityImageStripUrl()
                                } else if (_this.$scope.subArea.Icon != null && _this.$scope.subArea.Icon.length != 0) {
                                    if (_this.$scope.subArea
                                        .Icon ==
                                        _this.commonVariables.getOOBEntityImageStripUrl()) {
                                        if (entityName != null && entityName.length != 0
                                        )
                                            _this.$scope.subArea.EntityIconClass = _this.commonVariables
                                                .getIconClassNameFromEntityName(entityName)
                                    } else if (_this.$scope.subArea.Icon.indexOf("/WebResources/") != -1 ||
                                        _this.$scope.subArea.Icon.indexOf("$webresource") != -1) {
                                        if (_this.$scope.subArea.Icon.indexOf("$webresource") != -1) {
                                            var webResourcePrefix = "$webresource:";
                                            _this.$scope.subArea
                                                .Icon = "/WebResources/" +
                                                _this.$scope.subArea.Icon
                                                .substring(webResourcePrefix.length, _this.$scope.subArea.Icon.length)
                                        }
                                        _this.$scope.subArea.EntityIconClass = ""
                                    }
                                } else if (entityName != null && entityName.length != 0) {
                                    _this.$scope.subArea.Icon = _this.commonVariables.getOOBEntityImageStripUrl();
                                    _this.$scope.subArea.EntityIconClass = _this.commonVariables
                                        .getIconClassNameFromEntityName(entityName)
                                } else
                                    _this.$scope.subArea.Icon = _this.commonVariables.getDefaultSubAreaImageStripUrl();
                                _this.$scope.subArea.OriginalIcon = _this.$scope.subArea.Icon;
                                var entityColor = _this.$scope.subArea.Entity != null &&
                                    entityList[_this.$scope.subArea.Entity] != null
                                    ? entityList[_this.$scope.subArea.Entity].EntityColor
                                    : null;
                                if (entityColor != null) _this.$scope.subArea.EntityColor = entityColor;
                                else _this.$scope.subArea.EntityColor = _this.commonVariables.getDefaultEntityColor()
                            });
                            this.sitemapTypeAheadModel = new mscrmSitemapDesigner.model.SiteMapTypeAheadFlyoutModel;
                            this.$scope.isSelectedSubArea = this.isSelectedSubarea.bind(this)
                        }

                        SubAreaController.prototype
                            .isSelectedSubarea = function(subArea) {
                                return subArea === this.commonVariables.GetSelectedSubArea()
                            };
                        SubAreaController.GetEntityResourceName = function(descriptionResourceId) {
                            var entityResourceName = "";
                            if (descriptionResourceId.indexOf(".SubArea") != -1 ||
                                descriptionResourceId
                                .indexOf("_SubArea") !=
                                -1)
                                entityResourceName = descriptionResourceId
                                    .substring(0,
                                        descriptionResourceId.indexOf(".SubArea") != -1
                                        ? descriptionResourceId.indexOf(".SubArea")
                                        : descriptionResourceId.indexOf("_SubArea"));
                            else if (descriptionResourceId.indexOf(".Description") != -1 ||
                                descriptionResourceId
                                .indexOf("_Description") !=
                                -1)
                                entityResourceName = descriptionResourceId
                                    .substring(0,
                                        descriptionResourceId.indexOf(".Description") != -1
                                        ? descriptionResourceId.indexOf(".Description")
                                        : descriptionResourceId.indexOf("_Description"));
                            return entityResourceName
                        };
                        SubAreaController.prototype
                            .GetResourceString = function(subArea) {
                                return this.mscrmSitemapValidationService.GetSubAreaNodeName(subArea)
                            };
                        SubAreaController.prototype.onSubAreaSelection = function(subAreaNode, $event) {
                            this.propertiesPaneService && this.propertiesPaneService.ResetSubAreaProperties();
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subAreaNode)) {
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.commonVariables)) {
                                    this.commonVariables.SetSelectedSubArea(subAreaNode);
                                    var selectedGroup = this.mscrmSitemapUtilityService
                                        .GetGroupById(this.$scope.selectedArea.Id, this.$scope.selectedArea.Group.Id);
                                    this.commonVariables.SetSelectedGroup(selectedGroup)
                                }
                                var ctx = { SubArea: subAreaNode };
                                this.$scope.PublishNotification("evtSiteMapNodeSelected", ctx);
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$rootScope)) {
                                    this.commonVariables.SetShowPropertiesPane(true);
                                    this.$rootScope
                                        .$broadcast("sitemapShowPropertiesPane", { showPropertiesPane: true });
                                    var entityName = subAreaNode.Entity;
                                    if (!(Designers.Common.Utility.StringUtilities.IsNullOrEmpty(subAreaNode.Entity) ||
                                            Designers.Common.Utility.StringUtilities
                                            .IsBlankString(subAreaNode.Entity)) &&
                                        Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(this.dataAccessService
                                            .entityMappingList[entityName])
                                    ) SitemapCommonUtility.SetUnsupportedComponentMessageVisibility(this, true);
                                    else SitemapCommonUtility.SetUnsupportedComponentMessageVisibility(this, false)
                                }
                                this.$scope.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.areas)
                            }
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined($event) &&
                                $event.stopImmediatePropagation()
                        };
                        SubAreaController.prototype.subAreaSelectionNodeOperation = function(subAreaNode, $scope) {
                            this.$scope = $scope;
                            this.onSubAreaSelection(subAreaNode)
                        };
                        SubAreaController.prototype.GetExistingEntityList = function() {
                            var selectedPrivilegeEntityList = [];
                            this.$scope.selectedDisplayPrivilegeEntityList = [];
                            var objectToBind = this.mscrmSitemapUtilityService
                                .GetSubAreaByAreaId(this.$scope.selectedArea
                                    .Id,
                                    this.$scope.selectedNode_Properties.Id);
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(objectToBind) &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(objectToBind.Privilege)) {
                                selectedPrivilegeEntityList = objectToBind.Privilege;
                                if (selectedPrivilegeEntityList.length > 0)
                                    for (var index = 0; index < selectedPrivilegeEntityList.length; index++)
                                        if (objectToBind.Privilege[index].Entity &&
                                            Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(this.NonSupportedPrevilegeValue(objectToBind, index)))
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(objectToBind.Privilege[index]) &&
                                                !Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(objectToBind.Privilege[index].Privilege)
                                            ) this.BindingDefaultPrivileges(objectToBind, index);
                                            else this.BindOptions(objectToBind, index)
                            }
                        };
                        SubAreaController.prototype.NonSupportedPrevilegeValue = function(objectToBind, index) {
                            for (var nonSupportedPrivilege = null,
                                privilegeValues = objectToBind.Privilege[index].Privilege.split(","),
                                k = 0;
                                k < privilegeValues.length;
                                k++)
                                if (this.parsingService.privilegeList.indexOf(privilegeValues[k]) == -1) {
                                    nonSupportedPrivilege = privilegeValues[k];
                                    break
                                }
                            return nonSupportedPrivilege
                        };
                        SubAreaController.prototype.BindingDefaultPrivileges = function(subAreaObj, index) {
                            var DisplayPreName = [];
                            DisplayPreName = subAreaObj.Privilege[index].Privilege.split(",");
                            var privilege = this.commonVariables.getPrivilege();
                            privilege.Entity = subAreaObj.Privilege[index].Entity;
                            for (var displayprivilege = 0;
                                displayprivilege < privilege.Privilege.length;
                                displayprivilege++) privilege.Privilege[displayprivilege].value = false;
                            for (var indexLabel = 0;
                                indexLabel < DisplayPreName.length;
                                indexLabel++
                            )
                                for (var index = 0;
                                    index < privilege.Privilege.length;
                                    index++
                                )
                                    if (privilege.Privilege[index]
                                        .id ==
                                        DisplayPreName[indexLabel]) privilege.Privilege[index].value = true;
                            this.$scope.selectedDisplayPrivilegeEntityList.push(privilege)
                        };
                        SubAreaController.prototype.BindOptions = function(subAreaObj, index) {
                            var privilege = this.commonVariables.getPrivilege();
                            privilege.Entity = subAreaObj.Privilege[index].Entity;
                            for (var listprivilege = 0;
                                listprivilege < privilege.Privilege.length;
                                listprivilege++
                            ) privilege.Privilege[listprivilege].value = false;
                            this.$scope.selectedDisplayPrivilegeEntityList.push(privilege)
                        };
                        SubAreaController.prototype.AddEntity = function() {
                            var objectToBind = this.mscrmSitemapUtilityService
                                .GetSubAreaByAreaId(this.$scope.selectedArea
                                    .Id,
                                    this.$scope.selectedNode_Properties.Id);
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(objectToBind)) {
                                this.$scope.subAreaPrevilege = this.commonVariables.getPrivilege();
                                this.$scope.subAreaPrevilege.Entity = this.selectedPrevilegeLogicName;
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.selectedDisplayPrivilegeEntityList) &&
                                    this.$scope.selectedDisplayPrivilegeEntityList.length > 0)
                                    if (this.IsEntityExists(this.$scope.selectedDisplayPrivilegeEntityList,
                                        this.$scope.subAreaPrevilege)) this.ClearPrivilegeInputs();
                                    else {
                                        this.AddNewEntity(objectToBind, this.$scope.subAreaPrevilege);
                                        this.ClearPrivilegeInputs()
                                    }
                                else {
                                    this.AddNewEntity(objectToBind, this.$scope.subAreaPrevilege);
                                    this.ClearPrivilegeInputs()
                                }
                                this.IsBlankEntity = true
                            }
                        };
                        SubAreaController.prototype.IsEntityExists = function(existingPrivilegeList, newPrivilegeList) {
                            var IsPresent = false;
                            this.showLabel = null;
                            if (existingPrivilegeList.length > 0)
                                for (var index = 0; index < existingPrivilegeList.length; index++)
                                    if (existingPrivilegeList[index].Entity == newPrivilegeList.Entity) {
                                        this.showLabel = this.localization
                                            .getResourceString("SitemapDesigner.Value_Already_Exists");
                                        IsPresent = true;
                                        break
                                    } else IsPresent = false;
                            return IsPresent
                        };
                        SubAreaController.prototype.IsEntitySelected = function() {
                            this.IsBlankEntity = true;
                            var entityName = this.selectedEntityDisplayName,
                                selectedEntityLogicalName = this.$scope.subAreaController.selectedPrevilegeLogicName,
                                entityList = this.dataAccessService.entityMappingList;
                            this.IsBlankEntity = Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(entityName) ||
                                Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(entityList) ||
                                Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(entityList[selectedEntityLogicalName]);
                            return this.IsBlankEntity
                        };
                        SubAreaController.prototype.AddNewEntity = function(subArea, privilegeList) {
                            for (var PreValue = [], newPre = new PrivilegeModel, pre = 0;
                                pre <
                                    privilegeList[mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                        .Privilege]]
                                    .length;
                                pre++)
                                privilegeList[mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                        .Privilege]][pre]
                                    .value ==
                                    true &&
                                    PreValue.push(privilegeList[mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner
                                        .NodeTypes.Privilege]][pre].id);
                            newPre.Entity = privilegeList[mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                .Entity]];
                            newPre.Privilege = PreValue.toString();
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(subArea
                                    .Privilege))
                                subArea.Privilege = (new mscrmSitemapDesigner.model.SubArea).Privilege = [];
                            subArea.Privilege.push(newPre);
                            this.GetExistingEntityList()
                        };
                        SubAreaController.prototype
                            .UnCheckAllOption = function(entityName) {
                                for (var index = 0;
                                    index < this.$scope.selectedDisplayPrivilegeEntityList.length;
                                    index++
                                )
                                    if (this.$scope.selectedDisplayPrivilegeEntityList[index]
                                        .Entity ===
                                        entityName)
                                        for (var preindex = 0;
                                            preindex <
                                                this.$scope.selectedDisplayPrivilegeEntityList[index].Privilege.length;
                                            preindex++)
                                            if (this.$scope.selectedDisplayPrivilegeEntityList[index]
                                                .Privilege[preindex]
                                                .label ==
                                                this.localization
                                                .getResourceString("SitemapDesigner.All")
                                            )
                                                this.$scope.selectedDisplayPrivilegeEntityList[index]
                                                    .Privilege[preindex]
                                                    .value = false
                            };
                        SubAreaController.prototype.RemovePrivilegeEntity = function(entity) {
                            var objectToBind = this.mscrmSitemapUtilityService
                                .GetSubAreaByAreaId(this.$scope.selectedArea
                                    .Id,
                                    this.$scope.selectedNode_Properties.Id);
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(objectToBind
                                    .Privilege))
                                for (var index = 0;
                                    index < objectToBind.Privilege.length;
                                    index++
                                )
                                    objectToBind.Privilege[index].Entity == entity &&
                                        objectToBind.Privilege.splice(index, 1);
                            for (var index = 0;
                                index < this.$scope.selectedDisplayPrivilegeEntityList.length;
                                index++
                            )
                                this.$scope.selectedDisplayPrivilegeEntityList[index].Entity == entity &&
                                    this.$scope.selectedDisplayPrivilegeEntityList.splice(index, 1);
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm,
                                true)
                        };
                        SubAreaController.prototype.IsItemChecked = function(entityName, selectedPrivilege) {
                            for (var objectToBind = this.mscrmSitemapUtilityService
                                         .GetSubAreaByAreaId(this.$scope.selectedArea.Id,
                                             this.$scope.selectedNode_Properties.Id),
                                allLabel = this.localization.getResourceString("SitemapDesigner.All"),
                                index = 0;
                                index < this.$scope.selectedDisplayPrivilegeEntityList.length;
                                index++)
                                if (this.$scope.selectedDisplayPrivilegeEntityList[index].Entity === entityName)
                                    if (selectedPrivilege
                                        .label ===
                                        allLabel &&
                                        selectedPrivilege
                                        .value ===
                                        true) this.UpdateCheckboxOptions(true, index, entityName, objectToBind);
                                    else
                                        selectedPrivilege.label === allLabel &&
                                            selectedPrivilege.value === false &&
                                            this.UpdateCheckboxOptions(false, index, entityName, objectToBind);
                            this.UpdateModelSelection(entityName, selectedPrivilege)
                        };
                        SubAreaController.prototype
                            .UpdateCheckboxOptions = function(isChecked, index, entityName, subAreaObj) {
                                for (var selectedDisplayPrivilegeEntity = this.$scope
                                             .selectedDisplayPrivilegeEntityList[index].Privilege,
                                    preindex = 0;
                                    preindex < selectedDisplayPrivilegeEntity.length;
                                    preindex++) selectedDisplayPrivilegeEntity[preindex].value = !isChecked;
                                this.SetPrivelegeModelOnCheckAllOption(entityName, subAreaObj, !isChecked)
                            };
                        SubAreaController.prototype
                            .SetPrivelegeModelOnCheckAllOption = function(entityName, subAreaObj, isChecked) {
                                for (var index = 0; index < subAreaObj.Privilege.length; index++)
                                    if (subAreaObj.Privilege[index].Entity === entityName) {
                                        if (isChecked) {
                                            var privilegeList = this.commonVariables.getPrivilege();
                                            privilegeList.Entity = entityName;
                                            for (var privilege = [], pre = 0;
                                                pre <
                                                    privilegeList[mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner
                                                        .NodeTypes.Privilege]].length;
                                                pre++)
                                                privilegeList[mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner
                                                        .NodeTypes
                                                        .Privilege]][pre].value ==
                                                    true &&
                                                    privilege.push(privilegeList[mscrmSitemapDesigner
                                                        .NodeTypes[mscrmSitemapDesigner.NodeTypes.Privilege]][pre].id);
                                            privilegeList.Privilege = privilege.toString();
                                            subAreaObj.Privilege[index].Privilege = privilegeList.Privilege
                                        } else subAreaObj.Privilege[index].Privilege = null;
                                        break
                                    }
                            };
                        SubAreaController.prototype.UpdateModelSelection = function(entityName, selectedPrivlige) {
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm,
                                true);
                            if (selectedPrivlige.label != this.localization.getResourceString("SitemapDesigner.All")) {
                                var subAreaList = this.mscrmSitemapUtilityService
                                    .GetSubAreaByAreaId(this.$scope.selectedArea
                                        .Id,
                                        this.$scope.selectedNode_Properties.Id);
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subAreaList.Privilege))
                                    for (var index = 0; index < subAreaList.Privilege.length; index++)
                                        if (subAreaList.Privilege[index].Entity === entityName) {
                                            var PrivilegeName = [];
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(subAreaList.Privilege[index].Privilege)) {
                                                PrivilegeName = subAreaList.Privilege[index].Privilege.split(",");
                                                if (selectedPrivlige.value === true)
                                                    for (var indexPreName = 0;
                                                        indexPreName < PrivilegeName.length;
                                                        indexPreName++)
                                                        if (PrivilegeName[indexPreName] == selectedPrivlige.id) {
                                                            PrivilegeName.splice(indexPreName, 1);
                                                            break
                                                        }
                                            }
                                            for (var selectedEntityNameIndexInList = 0, entityListIndex = 0;
                                                entityListIndex < this.$scope.selectedDisplayPrivilegeEntityList.length;
                                                entityListIndex++)
                                                if (this.$scope.selectedDisplayPrivilegeEntityList[entityListIndex]
                                                    .Entity ==
                                                    entityName) {
                                                    selectedEntityNameIndexInList = entityListIndex;
                                                    for (var preindex = 0;
                                                        preindex <
                                                            this.$scope
                                                            .selectedDisplayPrivilegeEntityList[
                                                                selectedEntityNameIndexInList].Privilege.length;
                                                        preindex++)
                                                        if (this.$scope
                                                            .selectedDisplayPrivilegeEntityList[
                                                                selectedEntityNameIndexInList].Privilege[preindex]
                                                            .label ==
                                                            selectedPrivlige.label)
                                                            if (selectedPrivlige.value === false) {
                                                                this.$scope
                                                                    .selectedDisplayPrivilegeEntityList[
                                                                        selectedEntityNameIndexInList]
                                                                    .Privilege[preindex]
                                                                    .value = true;
                                                                PrivilegeName.push(selectedPrivlige.id)
                                                            } else
                                                                this.$scope
                                                                    .selectedDisplayPrivilegeEntityList[
                                                                        selectedEntityNameIndexInList]
                                                                    .Privilege[preindex]
                                                                    .value = false;
                                                    break
                                                }
                                            for (var saIndex = 0; saIndex < PrivilegeName.length; saIndex++)
                                                if (PrivilegeName[saIndex] == mscrmSitemapDesigner.PrivilegeTypes.All) {
                                                    this.UnCheckAllOption(entityName);
                                                    PrivilegeName.splice(saIndex, 1)
                                                }
                                            this
                                                .AllOptionTobeChecked(this.$scope
                                                    .selectedDisplayPrivilegeEntityList[selectedEntityNameIndexInList]
                                                    .Privilege,
                                                    PrivilegeName);
                                            subAreaList.Privilege[index].Privilege = PrivilegeName.toString()
                                        }
                            }
                        };
                        SubAreaController.prototype.AllOptionTobeChecked = function(optionList, privilegeList) {
                            for (var index = 0; index < optionList.length; index++)
                                if (!optionList[index].value)
                                    for (var ind = optionList.length - 1; ind < optionList.length; ind--)
                                        if (!optionList[ind].value) {
                                            if (optionList[ind].label ===
                                                this.localization.getResourceString("SitemapDesigner.All") &&
                                                optionList[ind].value === false) {
                                                optionList[ind].value = true;
                                                privilegeList
                                                    .push(this.localization.getResourceString("SitemapDesigner.All"))
                                            }
                                            return
                                        }
                        };
                        SubAreaController.prototype.ClearPrivilegeInputs = function() {
                            this.selectedEntityDisplayName = "";
                            this.selectedPrevilegeLogicName = null
                        };
                        SubAreaController.prototype.AddSelectedEntity = function(entityOption) {
                            this.selectedEntityDisplayName = entityOption.DisplayName;
                            this.selectedPrevilegeLogicName = entityOption.LogicalName;
                            this.showTypeHead = false;
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm,
                                true)
                        };
                        SubAreaController.prototype.GetEntityDisplayName = function(logicalName) {
                            var entityList = this.dataAccessService.entityMappingList;
                            if (logicalName != "" &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(logicalName) &&
                                !Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(entityList[logicalName])
                            )
                                return Designers.Common.Utility.StringUtilities
                                    .Format(this.localization.getResourceString("SitemapDesigner.ForEntity"),
                                        [entityList[logicalName].DisplayName]);
                            return this.localization.getResourceString("SitemapDesigner.Unknown")
                        };
                        SubAreaController.prototype.HandleDropDownClick = function($event, currActiveSrcElementId) {
                            this.InitializeSitemapTypeAheadModel();
                            this.sitemapTypeAheadModel.ToggleFlyout(this.flyoutService, null, currActiveSrcElementId);
                            !this.sitemapTypeAheadModel.IsFlyoutOpen &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined($event) &&
                                $event.stopPropagation()
                        };
                        SubAreaController.prototype.HandleTypeAheadTextBoxKeyDown = function($event, currElementId) {
                            this.InitializeSitemapTypeAheadModel();
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined($event.keyCode)) return;
                            if ($event.keyCode == CommonConstants.KeyCode.SpaceKeyCode) {
                                $event.stopPropagation();
                                return
                            }
                            if (($event.keyCode == CommonConstants.KeyCode.TabKeyCode ||
                                    $event.keyCode == CommonConstants.KeyCode.EnterKeyCode ||
                                    $event.keyCode == CommonConstants.KeyCode.EscKeyCode) &&
                                this.sitemapTypeAheadModel.IsFlyoutOpen) {
                                $event
                                    .keyCode !=
                                    CommonConstants.KeyCode.EscKeyCode &&
                                    this.autoResolveEntityBoxValue();
                                this.flyoutService.Hide();
                                var currentElement = document.getElementById(currElementId);
                                currentElement.focus();
                                return
                            }
                            if (!this.sitemapTypeAheadModel
                                .IsFlyoutOpen)
                                ($event.keyCode == CommonConstants.KeyCode.F4KeyCode ||
                                        $event.keyCode == CommonConstants.KeyCode.DownArrowKeyCode) &&
                                    this.ShowFlyout($event, currElementId);
                            else
                                $event.keyCode === CommonConstants.KeyCode.TabKeyCode &&
                                    $event.shiftKey &&
                                    this.sitemapTypeAheadModel.ToggleFlyout(this.flyoutService, null, currElementId)
                        };
                        SubAreaController.prototype.toggleAdditionalPrivileges = function(event) {
                            this.$scope.isAdditionalPrivilegesOpen = !this.$scope.isAdditionalPrivilegesOpen;
                            AccessibilityUtility
                                .SetAriaExpandedValueForElement(this.$scope.isAdditionalPrivilegesOpen, event.target);
                            return this.$scope.isAdditionalPrivilegesOpen
                        };
                        SubAreaController.prototype.ShowFlyout = function($event, currActiveSrcElementId) {
                            this.InitializeSitemapTypeAheadModel();
                            !this.sitemapTypeAheadModel.IsFlyoutOpen &&
                                this.flyoutService.Show(this.sitemapTypeAheadModel, currActiveSrcElementId);
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined($event) &&
                                $event.stopPropagation()
                        };
                        SubAreaController.prototype
                            .keydownHanlderForFlyoutItem =
                            function(event, elementId, updatedValue, propertyType, currSelectedItemIndex) {
                                this.InitializeSitemapTypeAheadModel();
                                if (event.keyCode == CommonConstants.KeyCode.UpArrowKeyCode &&
                                    currSelectedItemIndex == 0) {
                                    this.applyHighlightStyle(elementId);
                                    return
                                }
                                if (event
                                    .keyCode ==
                                    CommonConstants.KeyCode.DownArrowKeyCode &&
                                    currSelectedItemIndex == 0) {
                                    this.disableHighlightStyle(elementId, -1);
                                    return
                                }
                                if (event.keyCode != CommonConstants.KeyCode.EnterKeyCode &&
                                    event.keyCode != CommonConstants.KeyCode.TabKeyCode &&
                                    event.keyCode != CommonConstants.KeyCode.SpaceKeyCode) return;
                                if (event.keyCode == CommonConstants.KeyCode.EnterKeyCode ||
                                    event.keyCode == CommonConstants.KeyCode.SpaceKeyCode) {
                                    var elementObj = document.getElementById(elementId),
                                        flyoutSrcElementID = elementObj.parentElement
                                            .getAttribute(AccessibilityUtility.Constants.FLYOUTSRC_ID),
                                        flyoutSrcElementObj = document.getElementById(flyoutSrcElementID);
                                    flyoutSrcElementObj.focus();
                                    event.preventDefault();
                                    event.stopPropagation()
                                }
                                this.AddSelectedEntity(updatedValue);
                                this.disableHighlightStyle(elementId, currSelectedItemIndex);
                                this.flyoutService.Hide(true)
                            };
                        SubAreaController.prototype.applyHighlightStyle = function(elementId) {
                            this.InitializeSitemapTypeAheadModel();
                            var element = angular.element("#" + elementId);
                            if (element == undefined || element == null) return;
                            $(element.parent().children()[0]).removeClass("highlight-selection");
                            element.addClass("highlight-selection")
                        };
                        SubAreaController.prototype
                            .disableHighlightStyle = function(elementId, currentSelectedItemIndex) {
                                this.InitializeSitemapTypeAheadModel();
                                if (currentSelectedItemIndex == 0) return;
                                var element = angular.element("#" + elementId);
                                element.removeClass("highlight-selection")
                            };
                        SubAreaController.prototype.onKeyUpHandlerForEntityTextbox = function() {
                            this.InitializeSitemapTypeAheadModel();
                            var filteredEntities = this.privilegeEntityList.filter(this.filterEntityElements, this);
                            if (filteredEntities != undefined && filteredEntities.length > 0
                            ) this.showNoResultMessage = false;
                            else {
                                this.showNoResultMessage = true;
                                this.$scope.noResultFoundMessage = this.localization
                                    .getResourceString("SitemapDesigner.NoResults")
                            }
                        };
                        SubAreaController.prototype
                            .onFocusHandlerForEntityTextbox = function($event, currActiveSrcElementId) {
                                this.InitializeSitemapTypeAheadModel();
                                this.flyoutService.setCurrActiveFlyoutSrcElementId(currActiveSrcElementId);
                                this.flyoutService.privilegeEntityHasInvalidText = false
                            };
                        SubAreaController.prototype.onBlurHandlerForEntityTextbox = function() {
                            this.InitializeSitemapTypeAheadModel();
                            if (this.sitemapTypeAheadModel.IsFlyoutOpen) return;
                            if (StringUtility.IsNullOrEmpty(this.selectedEntityDisplayName)) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            if (this.checkForExactMatch(this.privilegeEntityList,
                                "DisplayName",
                                this.selectedEntityDisplayName)) {
                                var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                                if (!invalidState) this.$scope.$parent.$parent.errorInPropertiesPane = false;
                                return
                            }
                            this.flyoutService.privilegeEntityHasInvalidText = true;
                            this.$scope.propertiesPaneEntityErrorMessage = this.localization
                                .getResourceString("SitemapDesigner.Error_InvalidValue");
                            this.$scope.$parent.$parent.errorInPropertiesPane = true
                        };
                        SubAreaController.prototype.autoResolveEntityBoxValue = function() {
                            if (!StringUtility.IsNullOrEmpty(this.selectedEntityDisplayName)) {
                                var filteredEntities = this.privilegeEntityList.filter(this.filterEntityElements, this);
                                if (filteredEntities != undefined && filteredEntities.length > 0) {
                                    filteredEntities.sort(this.sortEntityList);
                                    this.AddSelectedEntity(filteredEntities[0])
                                }
                            }
                            var invalidState = this.flyoutService.checkIfAnyTypeaheadBoxHasError();
                            if (!invalidState) this.$scope.$parent.errorInPropertiesPane = false
                        };
                        SubAreaController.prototype
                            .checkForExactMatch = function(list, propertyName, currentSelectedValue) {
                                for (var i = 0;
                                    i < list.length;
                                    i++
                                ) if (list[i][propertyName] == currentSelectedValue) return true;
                                return false
                            };
                        SubAreaController.prototype.filterEntityElements = function(value) {
                            if (StringUtility.IsNullOrEmpty(this.selectedEntityDisplayName)) return true;
                            return value.DisplayName.toLowerCase()
                                .indexOf(this.selectedEntityDisplayName.toLowerCase()) !=
                                -1
                        };
                        SubAreaController.prototype
                            .sortEntityList = function(thisValue, thatValue) {
                                return thisValue.DisplayName.localeCompare(thatValue.DisplayName)
                            };
                        SubAreaController.prototype
                            .InitializeSitemapTypeAheadModel = function() {
                                if (Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this
                                        .sitemapTypeAheadModel)
                                )
                                    this.sitemapTypeAheadModel = new mscrmSitemapDesigner.model
                                        .SiteMapTypeAheadFlyoutModel
                            };
                        SubAreaController.prototype.getDefaultSubAreaIcon = function() {
                            var webResourceDeferredPromise = this.$q.defer(), result = [];
                            this.dataAccessService.getWebResourceListWrapper(result).then(function(response) {
                                if (result.length > 0) {
                                    this.urlList = result[0];
                                    var iconList = [];
                                    if (result[1] != null)
                                        for (var i = 0;
                                            i < result[1].length;
                                            i++
                                        )
                                            !Designers.Common.Utility.StringUtilities
                                                .IsNullOrEmpty(result[1][i].DisplayName) &&
                                                iconList.push(result[1][i]);
                                    var webDefaultSubAreaIconList = iconList
                                        .filter(function(value, index, array) {
                                            return value.WebResourceId ==
                                                Designers.Common.Constants.Defaults.DefaultSubAreaImageWebResourceId
                                        });
                                    webDefaultSubAreaIconList.length > 0 &&
                                        this.commonVariables
                                        .setDefaultSubAreaImageStripUrl(webDefaultSubAreaIconList[0]
                                            .webResourceImageUrl);
                                    var webDefaultSubAreaWebResourceIconList = iconList
                                        .filter(function(value, index, array) {
                                            return value.WebResourceId ==
                                                Designers.Common.Constants.Defaults
                                                .DefaultSubAreaWebResourceImageWebResourceId
                                        });
                                    if (webDefaultSubAreaWebResourceIconList.length > 0) {
                                        this.commonVariables
                                            .setDefaultWebResourceImageStripUrl(webDefaultSubAreaWebResourceIconList[0]
                                                .webResourceImageUrl);
                                        this.commonVariables
                                            .setDefaultURLImageStripUrl(webDefaultSubAreaWebResourceIconList[0]
                                                .webResourceImageUrl)
                                    }
                                    webResourceDeferredPromise.resolve()
                                }
                            }.bind(this));
                            return webResourceDeferredPromise.promise
                        };
                        SubAreaController.$inject = [
                            "$scope", "$rootScope", "mscrmNotificationBrokerService", "dataAccessService",
                            "mscrmLocalizationService", "$window", "mscrmCommonVariableService",
                            "mscrmSitemapUtilityService", Designers.Common.Constants.ServiceNames.FlyoutService,
                            ServiceNames.DirtyCheckService, ServiceNames.PropertiesPaneService, ServiceNames
                            .SitemapDesignerValidationService, ServiceNames.ParsingService, ServiceNames.QService
                        ];
                        return SubAreaController
                    }();
                controllers.SubAreaController = SubAreaController;
                var PrivilegeModel = function() {
                    function PrivilegeModel() {}

                    return PrivilegeModel
                }();
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmSubAreaController", SubAreaController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Designers.Common.Constants.ServiceNames,
                    Telemetry = Mscrm.Designers.Common.Telemetry,
                    CommonConstants = Mscrm.Designers.Common.Constants,
                    SiteMapTelemetryEvents = Mscrm.Designers.mscrmSitemapDesigner.Telemetry,
                    GlobalCommandBarController = function() {
                        function GlobalCommandBarController($scope,
                            $rootScope,
                            perfService,
                            sitemapDesignerPerfKpisService,
                            mscrmSerializeSitemapService,
                            dataAccessService,
                            publishAllService,
                            dirtyCheckService,
                            mscrmBreadcrumbService,
                            traceUtility,
                            shortcutKeyService,
                            notificationService,
                            modalDialogService,
                            errorUtilityService,
                            localization,
                            telemetryService,
                            mscrmSitemapUtilityService,
                            mscrmSitemapComponentService) {
                            this.$scope = $scope;
                            this.$rootScope = $rootScope;
                            this.perfService = perfService;
                            this.sitemapDesignerPerfKpisService = sitemapDesignerPerfKpisService;
                            this.mscrmSerializeSitemapService = mscrmSerializeSitemapService;
                            this.dataAccessService = dataAccessService;
                            this.publishAllService = publishAllService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.mscrmBreadcrumbService = mscrmBreadcrumbService;
                            this.traceUtility = traceUtility;
                            this.shortcutKeyService = shortcutKeyService;
                            this.notificationService = notificationService;
                            this.modalDialogService = modalDialogService;
                            this.errorUtilityService = errorUtilityService;
                            this.localization = localization;
                            this.telemetryService = telemetryService;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.mscrmSitemapComponentService = mscrmSitemapComponentService;
                            this.isSitemapXmlInvalid = false;
                            this.$scope.$watch("$root.rightPaneForm.$dirty", this.HandleRightPaneFormChange.bind(this));
                            this.RegisterShortcutKeys();
                            this.$scope.$on("$destroy", this.destructor.bind(this));
                            this.saveAndCloseContext = false;
                            this.publishSuccessCallBack = this.OnPublishSitemapSuccess.bind(this);
                            this.publishFailureCallBack = this.OnPublishSitemapFailure.bind(this)
                        }

                        GlobalCommandBarController.prototype.destructor = function() {
                            this.DeregisterShortcutKeys();
                            this.publishSuccessCallBack = null;
                            this.publishFailureCallBack = null
                        };
                        GlobalCommandBarController.prototype.RegisterShortcutKeys = function() {
                            this.publishCommandFunction = this.PublishCommandShortcutKey.bind(this);
                            this.saveCommandFunction = this.SaveCommandShortcutKey.bind(this);
                            this.saveAndCloseCommandFunction = this.SaveAndCloseCommandShortcutKey.bind(this);
                            this.shortcutKeyService
                                .RegisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.SaveKeyCode,
                                    this.saveCommandFunction);
                            this.shortcutKeyService
                                .RegisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.PublishKeyCode,
                                    this.publishCommandFunction);
                            this.shortcutKeyService
                                .RegisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.SaveAndCloseKeyCode,
                                    this.saveAndCloseCommandFunction)
                        };
                        GlobalCommandBarController.prototype.DeregisterShortcutKeys = function() {
                            this.shortcutKeyService
                                .DeregisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.SaveKeyCode,
                                    this.saveCommandFunction);
                            this.shortcutKeyService
                                .DeregisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.PublishKeyCode,
                                    this.publishCommandFunction);
                            this.shortcutKeyService
                                .DeregisterShortcutKey(mscrmSitemapDesigner.ShortcutKeysConstants.SaveAndCloseKeyCode,
                                    this.saveAndCloseCommandFunction)
                        };
                        GlobalCommandBarController.prototype.RemoveEmptyElements = function(elem) {
                            for (var children = elem, len = elem.length, index = 0; index < len; index++) {
                                var elemAttribute = children[index];
                                for (var key in elemAttribute)
                                    if (elemAttribute.hasOwnProperty(key))
                                        if (!elemAttribute[key] || elemAttribute[key].length === 0) {
                                            if (key === "Group" || key === "SubArea") continue;
                                            delete elemAttribute[key]
                                        } else
                                            elemAttribute[key] instanceof Array &&
                                                this.RemoveEmptyElements(elemAttribute[key])
                            }
                        };
                        GlobalCommandBarController.prototype.onUpdateSitemapSuccess = function(response) {
                            this.dataAccessService.SetSitemapStatus(mscrmSitemapDesigner.SitemapState.Draft);
                            this.clearDirtyFlag();
                            this.traceUtility.LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                "onUpdateSitemapSuccess",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(CommonConstants.EventStatus
                                    .Success +
                                    ": SitemapUpdate was successful."));
                            this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.$rootScope.rightPaneForm.$setPristine();
                            this.dirtyCheckService.clearAll();
                            this.modalDialogService.close();
                            this.triggerScopeApplyPhase();
                            if (this.saveAndCloseContext) {
                                this.UpdateBreadCrumbAndNavigate();
                                this.saveAndCloseContext = false
                            }
                            this.perfService.getStopWatch(this.sitemapDesignerPerfKpisService
                                .getPerfKpiByName(mscrmSitemapDesigner.services.KpiNames.sitemapSave)).stop()
                        };
                        GlobalCommandBarController.prototype.ShowModalDialog = function(bShow) {
                            this.$scope.$parent["dataRetrievalInProgress"] = bShow;
                            this.$scope.$parent.$digest()
                        };
                        GlobalCommandBarController.prototype.onUpdateSitemapFailure = function(error) {
                            this.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                "onUpdateSitemapFailure",
                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(error));
                            this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.modalDialogService.close();
                            this.notificationService
                                .ParseAndDisplayMultipleSOAPErrors(Designers.Common.Constants.DesignerName
                                    .SiteMapDesigner,
                                    error,
                                    this.triggerScopeApplyPhase.bind(this));
                            this.perfService.clearStopwatchByName(mscrmSitemapDesigner.services.KpiNames.sitemapSave)
                        };
                        GlobalCommandBarController.prototype.clearDirtyFlag = function() {
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm,
                                false);
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                .SiteMapCanvas,
                                false)
                        };
                        GlobalCommandBarController.prototype
                            .HandleRightPaneFormChange = function(newValue, oldValue) {
                                newValue &&
                                    this.dirtyCheckService
                                    .setDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm, true)
                            };
                        GlobalCommandBarController.prototype.SaveCommandShortcutKey = function() {
                            if (!this.isSaveButtonDisabled()) {
                                this.SaveSiteMap();
                                this.applyScope()
                            }
                        };
                        GlobalCommandBarController.prototype.PublishCommandShortcutKey = function() {
                            if (!this.isPublishDisabled()) {
                                this.onPublishSelection();
                                this.applyScope()
                            }
                        };
                        GlobalCommandBarController.prototype.SaveAndCloseCommandShortcutKey = function() {
                            if (!this.isSaveAndCloseButtonDisabled()) {
                                this.onUpdateAndClose();
                                this.applyScope()
                            }
                        };
                        GlobalCommandBarController.prototype
                            .applyScope = function() { !this.$scope.$$phase && this.$scope.$apply() };
                        GlobalCommandBarController.prototype
                            .triggerScopeApplyPhase = function() { !this.$scope.$$phase && this.$scope.$apply() };
                        GlobalCommandBarController.prototype.SaveSiteMap = function() {
                            if (this.ValidateSiteMap()) {
                                this.traceUtility.Scenario = mscrmSitemapDesigner.SitemapDesignerScenarios.SaveSitemap;
                                this.onUpdateSelection()
                            }
                        };
                        GlobalCommandBarController.prototype
                            .SubAreaExistsInSitemap = function() {
                                return this.mscrmSitemapUtilityService.SubAreaExistsInSitemap()
                            };
                        GlobalCommandBarController.prototype.onUpdateSelection = function() {
                            this.perfService.getStopWatch(this.sitemapDesignerPerfKpisService
                                .getPerfKpiByName(mscrmSitemapDesigner.services.KpiNames.sitemapSave)).start();
                            this.isSitemapXmlInvalid = false;
                            this.publishSitemapTelemetryData();
                            this.notificationService.ClearNotificationText();
                            this.RemoveEmptyElements(this.$scope.SiteMap.Area);
                            var loadingMessage = Designers.Common.Utility.StringUtilities
                                .Format(this.localization.getResourceString("Designer.Save.LoadingMessage"),
                                    [this.localization.getResourceString("AppDesigner.SiteMap")]);
                            this.modalDialogService.open(new Designers.Common.ModalDialog
                                .ProgressDialogParams(loadingMessage));
                            var sitemapXml = this.mscrmSerializeSitemapService.SerializeSiteMapXml(this.$scope.SiteMap);
                            this.dataAccessService
                                .updateSiteMapData(sitemapXml,
                                    this.onUpdateSitemapSuccess.bind(this),
                                    this.onUpdateSitemapFailure.bind(this))
                        };
                        GlobalCommandBarController.prototype.onPublishSelection = function() {
                            this.perfService.getStopWatch(this.sitemapDesignerPerfKpisService
                                .getPerfKpiByName(mscrmSitemapDesigner.services.KpiNames.sitemapPublish)).start();
                            var loadingMessage = Designers.Common.Utility.StringUtilities
                                .Format(this.localization.getResourceString("Designer.Publish.LoadingMessage"),
                                    [this.localization.getResourceString("AppDesigner.SiteMap")]);
                            this.modalDialogService.open(new Designers.Common.ModalDialog
                                .ProgressDialogParams(loadingMessage));
                            var paramterXml = "<importexportxml><sitemaps><sitemap>" +
                                this.dataAccessService.SitemapId +
                                "</sitemap></sitemaps></importexportxml>";
                            this.notificationService.ClearNotificationText();
                            this.publishAllService
                                .PublishCustomization(paramterXml,
                                    this.publishSuccessCallBack,
                                    this.publishFailureCallBack)
                        };
                        GlobalCommandBarController.prototype.OnPublishSitemapSuccess = function(response) {
                            this.modalDialogService.close();
                            this.perfService.getStopWatch(this.sitemapDesignerPerfKpisService
                                .getPerfKpiByName(mscrmSitemapDesigner.services.KpiNames.sitemapPublish)).stop();
                            this.dataAccessService.SetSitemapStatus(mscrmSitemapDesigner.SitemapState.Published);
                            this.clearDirtyFlag();
                            this.callTelemetryEventOnPublish();
                            this.traceUtility.LogInfo(Designers.Common.Tracing.TraceComponent.SitemapDesigner,
                                "OnPublishSitemapSuccess",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(CommonConstants.EventStatus.Success +
                                    ": Publish Sitemap was Successful"));
                            this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString
                        };
                        GlobalCommandBarController.prototype.OnPublishSitemapFailure = function(httpError) {
                            this.modalDialogService.close();
                            this.notificationService.DisplayError(null, httpError);
                            this.triggerScopeApplyPhase();
                            this.perfService
                                .clearStopwatchByName(mscrmSitemapDesigner.services.KpiNames.sitemapPublish);
                            this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.SitemapDesigner,
                                "OnPublishSitemapFailure",
                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError));
                            this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString
                        };
                        GlobalCommandBarController.prototype.onUpdateAndClose = function() {
                            if (this.ValidateSiteMap()) {
                                this.traceUtility.Scenario = mscrmSitemapDesigner.SitemapDesignerScenarios
                                    .SaveAndCloseSitemap;
                                if (this.dirtyCheckService
                                    .IsDesignerInDirtyState(Designers.Common.Constants.DesignerName.SiteMapDesigner) ||
                                    !Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.isDuplicateIdExist) &&
                                    !this.$scope.isDuplicateIdExist) {
                                    this.saveAndCloseContext = true;
                                    this.onUpdateSelection()
                                } else this.UpdateBreadCrumbAndNavigate()
                            }
                        };
                        GlobalCommandBarController.prototype.ValidateSiteMap = function() {
                            if (!this.SubAreaExistsInSitemap()) {
                                this.notificationService
                                    .DisplayError(this.localization
                                        .getResourceString(mscrmSitemapDesigner.LocalizationConstants
                                            .Error_SubAreaNotFound));
                                return false
                            }
                            var errorList = this.IsValidSitemap();
                            if (errorList.length > 0) {
                                this.notificationService.DisplayErrors(errorList);
                                return false
                            }
                            return true
                        };
                        GlobalCommandBarController.prototype.UpdateBreadCrumbAndNavigate = function() {
                            if (!this.isSitemapXmlInvalid)
                                if (this.mscrmBreadcrumbService.BreadcrumbList
                                    .Count >
                                    1) this.mscrmBreadcrumbService.PopBreadcrumb();
                                else window.close();
                            this.$scope.mscrmSitemapUtilityService.GenerateSiteMapAreasObj(this.$scope.SiteMap.Area)
                        };
                        GlobalCommandBarController.prototype
                            .isSiteMapDirty = function() {
                                return this.dirtyCheckService
                                    .getDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapCanvas) ||
                                    this.dirtyCheckService
                                    .getDirty(Designers.Common.Constants.DirtyCheckModelNames.SiteMapForm)
                            };
                        GlobalCommandBarController.prototype
                            .isSaveButtonDisabled = function() {
                                return this.isSaveAndCloseButtonDisabled() ? true : !this.isSiteMapDirty()
                            };
                        GlobalCommandBarController.prototype
                            .isSaveAndCloseButtonDisabled = function() {
                                return !this.mscrmSitemapUtilityService.IsValidSiteMap ||
                                    !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.$scope.SiteMap) &&
                                    !Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this.$scope.SiteMap.Area) &&
                                    this.$scope.SiteMap.Area.length == 0 ||
                                    this.isValidationErrorOnPropertyPane()
                                    ? true
                                    : false
                            };
                        GlobalCommandBarController.prototype
                            .isPublishDisabled = function() {
                                return !this.mscrmSitemapUtilityService.IsValidSiteMap ||
                                    this.dataAccessService.GetSitemapStatus() ===
                                    mscrmSitemapDesigner.SitemapState.Published ||
                                    this.isSiteMapDirty()
                            };
                        GlobalCommandBarController.prototype.isValidationErrorOnPropertyPane = function() {
                            if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(this.$scope.propertiesPaneMessage) ||
                                this.$scope.errorInPropertiesPane) return true;
                            else return false
                        };
                        GlobalCommandBarController.prototype.publishSitemapTelemetryData = function() {
                            if (this.$scope.SiteMap) {
                                for (var areaCount = this.$scope.SiteMap.Area ? this.$scope.SiteMap.Area.length : 0,
                                    totalNumberOfGroups,
                                    groupsCountPerArea,
                                    subAreaCountPerGroup,
                                    counter = 0;
                                    counter < areaCount;
                                    counter++) {
                                    var groupsInArea = this.$scope.SiteMap.Area[counter].Group
                                        ? this.$scope.SiteMap.Area[counter].Group.length
                                        : 0;
                                    groupsCountPerArea += "Area" + counter + ":" + groupsInArea + ",";
                                    for (var groupCounter = 0; groupCounter < groupsInArea; groupCounter++) {
                                        var subAreasInGroup = this.$scope.SiteMap.Area[counter].Group[groupCounter]
                                            .SubArea
                                            ? this.$scope.SiteMap.Area[counter].Group[groupCounter].SubArea.length
                                            : 0;
                                        subAreaCountPerGroup += "SubArea" + groupCounter + subAreasInGroup + ","
                                    }
                                }
                                this.telemetryService
                                    .AddTelemetryEvent(new SiteMapTelemetryEvents
                                        .SitemapSaveTelemetryEvent(areaCount,
                                            groupsCountPerArea,
                                            subAreaCountPerGroup,
                                            this.dataAccessService.SitemapId,
                                            this.dataAccessService.getNewSiteMapCreated()))
                            }
                            for (var indexClickDetails = 0;
                                indexClickDetails <
                                    CommonConstants.TelemetryDictionary.DesignerUserActionsForSitemap.getKeys().length;
                                indexClickDetails++) {
                                var designerUserActionEvent = new Telemetry
                                    .DesignerUserActionTelemetryEvent(CommonConstants.TelemetryDictionary
                                        .DesignerUserActionsForSitemap.getKeys()[indexClickDetails],
                                        Number(CommonConstants.TelemetryDictionary.DesignerUserActionsForSitemap
                                            .getValues()[indexClickDetails].userInteractionCounter),
                                        CommonConstants.TelemetryDictionary.DesignerUserActionsForSitemap
                                        .getValues()[indexClickDetails].userInteractionType,
                                        this.dataAccessService.SitemapId);
                                this.telemetryService.AddTelemetryEvent(designerUserActionEvent)
                            }
                        };
                        GlobalCommandBarController.prototype.callTelemetryEventOnPublish = function() {
                            var userInteractionObjWithClick = CommonConstants.TelemetryDictionary
                                .DesignerUserActionsForSitemap
                                .getValue(CommonConstants.SitemapDesignerClicks.SitemapDesignerPublishClick);
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(userInteractionObjWithClick)) {
                                var designerUserActionEvent = new Telemetry
                                    .DesignerUserActionTelemetryEvent(CommonConstants.SitemapDesignerClicks
                                        .SitemapDesignerPublishClick,
                                        userInteractionObjWithClick.userInteractionCounter,
                                        userInteractionObjWithClick.userInteractionType,
                                        this.dataAccessService.SitemapId);
                                this.telemetryService.AddTelemetryEvent(designerUserActionEvent)
                            }
                            var userInteractionObjWithShortcutkeys = CommonConstants.TelemetryDictionary
                                    .DesignerUserActionsForSitemap
                                    .getValue(CommonConstants.SitemapDesignerClicks.SitemapDesignerPublishShortcutKey),
                                designerUserActionEvent = new Telemetry
                                    .DesignerUserActionTelemetryEvent(CommonConstants.SitemapDesignerClicks
                                        .SitemapDesignerPublishShortcutKey,
                                        userInteractionObjWithShortcutkeys.userInteractionCounter,
                                        userInteractionObjWithShortcutkeys.userInteractionType,
                                        this.dataAccessService.SitemapId);
                            this.telemetryService.AddTelemetryEvent(designerUserActionEvent)
                        };
                        GlobalCommandBarController.prototype
                            .GetLocalizedResourceString = function(resourceId) {
                                return this.localization.getResourceString(resourceId)
                            };
                        GlobalCommandBarController.prototype
                            .IsValidSitemap = function() {
                                return this.mscrmSitemapComponentService
                                    .ValidateSitemapComponent(this.$scope.SiteMap.Area)
                            };
                        GlobalCommandBarController.$inject = [
                            ServiceNames.ScopeService, "$rootScope", ServiceNames.PerfService, ServiceNames
                            .SitemapDesignerPerfKpisService, ServiceNames.SerializeSitemapService, ServiceNames
                            .SiteMapDesignerDataAccessService, ServiceNames.SiteMapDesignerPublishAllService,
                            ServiceNames
                            .DirtyCheckService, ServiceNames.BreadcrumbService, ServiceNames.TraceUtilityService,
                            ServiceNames.KeyboardShortcutService, ServiceNames.NotificationBarService, ServiceNames
                            .ModalDialogService, ServiceNames.ErrorUtilityService, "mscrmLocalizationService",
                            ServiceNames
                            .TelemetryService, ServiceNames.SitemapDesignerUtilityService, ServiceNames
                            .SitemapDesignerValidationService
                        ];
                        return GlobalCommandBarController
                    }();
                mscrmSitemapDesigner.SitemapDesignerModule
                    .controller("mscrmSitemapGlobalCommandBarController", GlobalCommandBarController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function SitemapDesignerShellDirective() {
                    var link = function(scope, element, attrs, controller) { controller.loadSiteMap() };
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/SitemapDesignerShell.html?v=8200000749",
                        link: link,
                        controller: "mscrmSitemapDesignerShellController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSitemapDesignerShell", SitemapDesignerShellDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                (function(AppDesignerTab) {
                    AppDesignerTab[AppDesignerTab["Components"] = 0] = "Components";
                    AppDesignerTab[AppDesignerTab["Properties"] = 1] = "Properties"
                })(controllers.AppDesignerTab || (controllers.AppDesignerTab = {}));
                var AppDesignerTab = controllers.AppDesignerTab,
                    TabbedContainerController = function() {
                        function TabbedContainerController(scope, rootScope, commonVariables) {
                            this.scope = scope;
                            this.rootScope = rootScope;
                            this.commonVariables = commonVariables;
                            this.selectedTab = 0;
                            this.rootScope.$on("sitemapShowPropertiesPane",
                                this.HandleShowPropertiesPaneEvent.bind(this));
                            this.dragEndHandler = function(itemType) { this.commonVariables.dragEndHandler(itemType) }
                                .bind(this)
                        }

                        TabbedContainerController.prototype.HandleShowPropertiesPaneEvent = function(event, args) {
                            if (args.showPropertiesPane) this.SetSelectedTab(AppDesignerTab.Properties);
                            else this.SetSelectedTab(AppDesignerTab.Components)
                        };
                        TabbedContainerController.prototype.SetSelectedTab = function(tab) {
                            if (tab == AppDesignerTab.Properties) {
                                if (this.IsPropertiesPaneEnabled()) this.selectedTab = tab
                            } else this.selectedTab = tab
                        };
                        TabbedContainerController.prototype
                            .IsPropertiesPaneEnabled = function() {
                                return this.commonVariables.GetShowPropertiesPane()
                            };
                        TabbedContainerController.prototype
                            .IsTabSelected = function(tab) { return this.selectedTab == tab };
                        TabbedContainerController.prototype.newComponentDragStart = function(event, componentType) {
                            event.dataTransfer.setData("text", JSON.stringify("new"));
                            switch (componentType) {
                            case mscrmSitemapDesigner.ComponentTypes.AreaType:
                                this.commonVariables.borderInfo.area.showBorder = true;
                                break;
                            case mscrmSitemapDesigner.ComponentTypes.GroupType:
                                this.commonVariables.borderInfo.group.showBorder = true;
                                break;
                            case mscrmSitemapDesigner.ComponentTypes.SubAreaType:
                                this.commonVariables.subAreaDragInProcess = true;
                                this.commonVariables.borderInfo.subArea.showBorder = true
                            }
                        };
                        TabbedContainerController.$inject = ["$scope", "$rootScope", "mscrmCommonVariableService"];
                        return TabbedContainerController
                    }();
                controllers.TabbedContainerController = TabbedContainerController;
                mscrmSitemapDesigner.SitemapDesignerModule
                    .controller("mscrmSitemapTabbedContainerController", TabbedContainerController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var controllers;
            (function(controllers) {
                "use strict";
                var StatusBarController = function() {
                    function StatusBarController(scope, dateTimeFormatService, dataAccessService, localizationService) {
                        this.scope = scope;
                        this.dateTimeFormatService = dateTimeFormatService;
                        this.dataAccessService = dataAccessService;
                        this.localizationService = localizationService
                    }

                    StatusBarController.prototype
                        .sitemapStatus = function() {
                            return this.localizationService
                                .getResourceString(mscrmSitemapDesigner.ComponentState
                                    .GetComponentState(this.dataAccessService.GetSitemapStatus()))
                        };
                    StatusBarController.$inject = [
                        "$scope", "mscrmDateTimeFormatService", "dataAccessService", "mscrmLocalizationService",
                        "mscrmCommonVariableService"
                    ];
                    return StatusBarController
                }();
                controllers.StatusBarController = StatusBarController;
                mscrmSitemapDesigner.SitemapDesignerModule.controller("mscrmStatusBarController", StatusBarController)
            })(controllers = mscrmSitemapDesigner.controllers || (mscrmSitemapDesigner.controllers = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function TabbedContainerDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/TabbedContainer.html?v=8200000749",
                        controller: "mscrmSitemapTabbedContainerController",
                        controllerAs: "tabbedContainerController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSitemapTabbedContainer", TabbedContainerDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function AreaDirective() {
                    var link = function(scope, element, attrs, controller) {};
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Area/Views/Area.html?v=8200000749",
                        link: link,
                        controller: "mscrmAreaController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmArea", AreaDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CommandBarDirective() {
                    var link = function(scope, element, attrs, controller) {};
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/CommandBar.html?v=8200000749",
                        link: link,
                        controller: "mscrmCommandBarController",
                        controllerAs: "commandBarController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmSitemapCommandBar", CommandBarDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmNewArea",
                        function() {
                            return {
                                templateUrl: "SitemapDesigner/Area/Views/NewArea.html?v=8200000749",
                                controller: "mscrmNewElementController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmNewGroup",
                        function() {
                            return {
                                templateUrl: "SitemapDesigner/Group/Views/NewGroup.html?v=8200000749",
                                controller: "mscrmNewElementController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmNewSubArea",
                        function() {
                            return { templateUrl: "SitemapDesigner/SubArea/Views/NewSubArea.html?v=8200000749" }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveSitemapDesignerModuleMsg",
                        function() {
                            return {
                                templateUrl:
                                    "SitemapDesigner/Common/Views/SitemapDesignerModulelicationMsgBoard.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelImageButton",
                        function() {
                            return {
                                restrict: "E",
                                templateUrl: "SitemapDesigner/Common/Views/LabelImageButton.html?v=8200000749",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelTextAreaWithButton",
                        function() {
                            return {
                                restrict: "E",
                                templateUrl: "SitemapDesigner/Common/Views/LabelTextAreaWithButton.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmOptionSet",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/OptionSet.html",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectivePropertiesPane",
                        function() {
                            return {
                                templateUrl: "SitemapDesigner/Common/Views/PropertiesPane.html?v=8200000749",
                                replace: true
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelTextBox",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelTextBox.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelCheckbox",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelCheckBox.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelCheckboxGroup",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelCheckBoxGroup.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSiteMapNodeTitles",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/SiteMapNodeTitles.html?v=8200000749",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSiteMapNodeDescriptions",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/SiteMapNodeDescriptions.html?v=8200000749",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSubAreaPrivileges",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/SubArea/Views/SubAreaPrivileges.html",
                                controller: "mscrmSubAreaController",
                                controllerAs: "subAreaController",
                                link: function(scope, element, attrs) {
                                    element.bind("click",
                                        function($event) {
                                            Designers.Common.Utility.JQueryUtilities.SelectSiblingInput(element, $event)
                                        })
                                }
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelTextBoxButton",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelTextBoxButton.html?v=8200000749",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController",
                                link: function(scope, element, attrs) {
                                    element.bind("click",
                                        function($event) {
                                            Designers.Common.Utility.JQueryUtilities.SelectSiblingInput(element, $event)
                                        })
                                }
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmLabelCombobox",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelCombobox.html?v=8200000749",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController",
                                link: function(scope, element, attrs) {
                                    element.bind("click",
                                        function($event) {
                                            Designers.Common.Utility.JQueryUtilities.SelectSiblingInput(element, $event)
                                        })
                                }
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelDropDown",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelDropDown.html?v=8200000749",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController",
                                link: function(scope, element, attrs) {
                                    element.bind("click",
                                        function($event) {
                                            Designers.Common.Utility.JQueryUtilities.SelectSiblingInput(element, $event)
                                        })
                                }
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelTextBoxRequired",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelTextBoxRequired.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelCheckBoxList",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelCheckBoxList.html",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveLabelDropDownList",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/LabelDropDownList.html",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController",
                                link: function(scope, element, attrs) {
                                    element.bind("click",
                                        function($event) {
                                            Designers.Common.Utility.JQueryUtilities.SelectSiblingInput(element, $event)
                                        })
                                }
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSkuCheckBoxList",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/SkuCheckBoxList.html",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmPassParamsCheckbox",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/PassParamsCheckbox.html",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmOutlookIconDropDown",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/OutlookIconDropDown.html",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController",
                                link: function(scope, element, attrs) {
                                    element.bind("click",
                                        function($event) {
                                            Designers.Common.Utility.JQueryUtilities.SelectSiblingInput(element, $event)
                                        })
                                }
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule.directive("render",
                    function($compile) {
                        return function(scope, element, attrs) {
                            scope.$watch(function(scope) { return scope.$eval(attrs.render) },
                                function(value) {
                                    element.html("<" + value.name + "></" + value.name + ">");
                                    $compile(element.contents())(scope)
                                })
                        }
                    });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveAdvancedSection",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/AdvancedSection.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveGeneralSection",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/GeneralSection.html?v=8200000749"
                            }
                        });
                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDirectiveBaseLanguageTitle",
                        function() {
                            return {
                                restrict: "E",
                                replace: true,
                                templateUrl: "SitemapDesigner/Common/Views/BaseLanguageTitle.html?v=8200000749",
                                controller: "mscrmPropertiesPaneController",
                                controllerAs: "propertyPaneController"
                            }
                        })
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function GroupDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Group/Views/Group.html?v=8200000749",
                        controller: "mscrmGroupController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmGroup", GroupDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function LeftPaneDirective() {
                    var link = function(scope, element, attrs, controller) {};
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/LeftPane.html?v=8200000749",
                        link: link,
                        controller: "mscrmLeftPaneController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmSitemapLeftPane", LeftPaneDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function SiteMapDirective() {
                    var link = function(scope, element, attrs, controller) {
                        scope.$watch("SiteMap",
                            function(newValue, oldValue) {
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(scope.SiteMap)) scope.areas = scope.SiteMap["Area"]
                            })
                    };
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/Sitemap.html?v=8200000749",
                        link: link,
                        controller: "mscrmSitemapController",
                        controllerAs: "sitemapController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmSiteMap", SiteMapDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function StatusBarDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/StatusBar.html?v=8200000749",
                        controller: "mscrmStatusBarController",
                        controllerAs: "sitemapStatusBarController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmSitemapStatusBar", StatusBarDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function ComponentTileDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/AddComponentTile.html?v=8200000749",
                        scope: { label: "@", description: "@", icon: "@", tooltip: "@" }
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSitemapComponentTile", ComponentTileDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function ErrorValidationMessageDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/Common/Views/ErrorValidationMessage.html?v=8200000749",
                        scope: { errormessage: "@", resourcekey: "@" }
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmErrorValidationMessage", ErrorValidationMessageDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function SubAreaDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SiteMapDesigner/SubArea/Views/SubArea.html?v=8200000749",
                        controller: "mscrmSubAreaController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmSubArea", SubAreaDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var filters;
            (function(filters) {
                "use strict";

                function paging() {
                    return function(dataList, startPosition) {
                        if (dataList != null && dataList.length > 0) {
                            startPosition = +startPosition;
                            return dataList.slice(startPosition)
                        }
                    }
                }

                filters.paging = paging;
                mscrmSitemapDesigner.SitemapDesignerModule.filter("paging", paging)
            })(filters = mscrmSitemapDesigner.filters || (mscrmSitemapDesigner.filters = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var interfaces;
            (function(interfaces) { "use strict" })(interfaces =
                mscrmSitemapDesigner.interfaces || (mscrmSitemapDesigner.interfaces = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var interfaces;
            (function(interfaces) { "use strict" })(interfaces =
                mscrmSitemapDesigner.interfaces || (mscrmSitemapDesigner.interfaces = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var interfaces;
            (function(interfaces) { "use strict" })(interfaces =
                mscrmSitemapDesigner.interfaces || (mscrmSitemapDesigner.interfaces = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Area = function() {
                    function Area() {
                        this.Titles = [];
                        this.Descriptions = [];
                        this.Group = [];
                        this.Id = "";
                        this.Url = "";
                        this.Title = "";
                        this.Icon = "";
                        this.OriginalIcon = "";
                        this.ShowGroups = "false";
                        this.ResourceId = "";
                        this.DescriptionResourceId = "";
                        this.IntroducedVersion = ""
                    }

                    return Area
                }();
                model.Area = Area
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Description = function() {
                    function Description() {}

                    return Description
                }();
                model.Description = Description
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Entity = function() {
                    function Entity(LogicalName, DisplayName, PluralName, EntityColor, IsCustomEntity) {
                        this.LogicalName = LogicalName;
                        this.DisplayName = DisplayName;
                        this.PluralName = PluralName;
                        this.EntityColor = EntityColor;
                        this.IsCustomEntity = IsCustomEntity
                    }

                    return Entity
                }();
                model.Entity = Entity
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Group = function() {
                    function Group() {
                        this.Titles = [];
                        this.Descriptions = [];
                        this.SubArea = [];
                        this.Id = "";
                        this.Url = "";
                        this.Icon = "";
                        this.Title = "";
                        this.IsProfile = "false";
                        this.ResourceId = "";
                        this.DescriptionResourceId = "";
                        this.ToolTipResourseId = "";
                        this.IntroducedVersion = ""
                    }

                    return Group
                }();
                model.Group = Group
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Icon = function() {
                    function Icon(DisplayName, Name, WebResourceId, webResourceImageUrl) {
                        this.DisplayName = DisplayName;
                        this.Name = Name;
                        this.WebResourceId = WebResourceId;
                        this.webResourceImageUrl = webResourceImageUrl
                    }

                    return Icon
                }();
                model.Icon = Icon
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) { "use strict" })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Language = function() {
                    function Language(Language, Name, LocaleId, DisplayName) {
                        this.Language = Language;
                        this.Name = Name;
                        this.LocaleId = LocaleId;
                        this.DisplayName = DisplayName
                    }

                    return Language
                }();
                model.Language = Language
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var NotificationObj = function() {
                    function NotificationObj(evtName, ctx) {
                        this.eventName = "";
                        this.context = {};
                        this.eventName = evtName;
                        this.context = ctx
                    }

                    Object.defineProperty(NotificationObj.prototype,
                        "getEventName",
                        { "get": function() { return this.eventName }, enumerable: true, configurable: true });
                    Object.defineProperty(NotificationObj.prototype,
                        "setEventName",
                        { "set": function(value) { this.eventName = value }, enumerable: true, configurable: true });
                    Object.defineProperty(NotificationObj.prototype,
                        "getContext",
                        { "get": function() { return this.context }, enumerable: true, configurable: true });
                    Object.defineProperty(NotificationObj.prototype,
                        "setContext",
                        { "set": function(value) { this.context = value }, enumerable: true, configurable: true });
                    return NotificationObj
                }();
                model.NotificationObj = NotificationObj
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Privilege = function() {
                    function Privilege() { this.Privilege = [] }

                    return Privilege
                }();
                model.Privilege = Privilege
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var SiteMap = function() {
                    function SiteMap() {}

                    return SiteMap
                }();
                model.SiteMap = SiteMap
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Client = function() {
                    function Client() {
                        this.Id = "";
                        this.Label = "";
                        this.Value = true
                    }

                    return Client
                }();
                model.Client = Client
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Sku = function() {
                    function Sku() {
                        this.Id = "";
                        this.Label = "";
                        this.Value = true
                    }

                    return Sku
                }();
                model.Sku = Sku
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var SubArea = function() {
                    function SubArea() {
                        this.Titles = [];
                        this.Descriptions = [];
                        this.Id = "";
                        this.Title = "";
                        this.Icon = "";
                        this.OriginalIcon = "";
                        this.Url = "";
                        this.Entity = "";
                        this.EntityColor = "";
                        this.EntityIconClass = "";
                        this.DescriptionResourceId = "";
                        this.GetStartedPanePath = "";
                        this.GetStartedPanePathAdmin = "";
                        this.GetStartedPanePathAdminOutlook = "";
                        this.GetStartedPanePathOutlook = "";
                        this.ResourceId = "";
                        this.EntityResourceName = "";
                        this.ToolTipResourceId = "";
                        this.DefaultDashboard = "";
                        this.Privilege = [];
                        this.Type = [];
                        this.SelectedType = mscrmSitemapDesigner.NodeTypes.SelectSubArea;
                        this.Client = [];
                        this.OutlookShortcutIcon = "";
                        this.PassParams = false;
                        this.AvailableOffline = "false";
                        this.Sku = [];
                        this.SubAreaSelectedType = ""
                    }

                    return SubArea
                }();
                model.SubArea = SubArea
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Title = function() {
                    function Title() {}

                    return Title
                }();
                model.Title = Title
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var model;
            (function(model) {
                "use strict";
                var Url = function() {
                    function Url(DisplayName, Name, WebResourceId) {
                        this.DisplayName = DisplayName;
                        this.Name = Name;
                        this.WebResourceId = WebResourceId
                    }

                    return Url
                }();
                model.Url = Url
            })(model = mscrmSitemapDesigner.model || (mscrmSitemapDesigner.model = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function AddFlyoutDirective() {
                    return {
                        restrict: "E",
                        replace: true,
                        templateUrl: "SitemapDesigner/Common/Views/AddFlyout.html?v=8200000749"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule.directive("mscrmSitemapAddFlyout", AddFlyoutDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function SitemapDesignerDisableCommandbarDirective() {
                    var updateCommandBarButtonsVisibility = function(e, controller) {
                            if (angular.element(e.target).closest(".mscrm-FlyoutMenuItems").length > 0) return;
                            if (angular.element(e.target).closest(".mscrm-areaNodeContainer").length > 0 ||
                                angular.element(e.target).closest(".mscrm-groupLabelContainer").length > 0 ||
                                angular.element(e.target).closest(".mscrm-subareaNodeOuterContainer").length > 0 ||
                                angular.element(e.target).closest("#cloneButton:enabled")
                                .length >
                                0) controller.UpdateCommandBarButtonsVisibility(false);
                            else controller.UpdateCommandBarButtonsVisibility(true)
                        },
                        initializeConfig = function(element, scope, controller) {
                            element[0].addEventListener("click",
                                function(e) {
                                    scope.$apply(function() { updateCommandBarButtonsVisibility(e, controller) })
                                });
                            element[0].addEventListener("contextmenu",
                                function(e) {
                                    scope.$apply(function() { updateCommandBarButtonsVisibility(e, controller) })
                                });
                            element[0].addEventListener("mousedown",
                                function(e) {
                                    scope.$apply(function() {
                                        angular.element(e.target).closest(".mscrm-propertiesPaneContainer")
                                            .length >
                                            0 &&
                                            controller.UpdateCommandBarButtonsVisibility(true)
                                    })
                                })
                        },
                        link = function(scope, element, attrs, controller) {
                            initializeConfig(element, scope, controller)
                        };
                    return {
                        replace: true,
                        restrict: "A",
                        link: link,
                        controller: "mscrmSitemapDesignerShellController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmDisableCommandbar", SitemapDesignerDisableCommandbarDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                angular.module("SitemapService", [])
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var DeserializeSitemap = function() {
                    function DeserializeSitemap(parsingService, mscrmSitemapUtilityService) {
                        this.parsingService = parsingService;
                        this.mscrmSitemapUtilityService = mscrmSitemapUtilityService
                    }

                    DeserializeSitemap.prototype.DeserializeSiteMapXml = function(sitemapXml, entityList) {
                        var siteMap = new mscrmSitemapDesigner.model.SiteMap;
                        siteMap = this.parsingService
                            .convertXmlToJson(this.parsingService.parseXml(sitemapXml), entityList);
                        this.mscrmSitemapUtilityService.GenerateSiteMapTreeObj(siteMap);
                        return siteMap
                    };
                    DeserializeSitemap.prototype.DeserializePropertiesDirectiveMappingXml = function(pdmXml) {
                        var pdMapping = this.parsingService.convertPDMXmlToJson(this.parsingService.parseXml(pdmXml));
                        return pdMapping
                    };
                    DeserializeSitemap.$inject = ["parsingService", "mscrmSitemapUtilityService"];
                    return DeserializeSitemap
                }();
                common.DeserializeSitemap = DeserializeSitemap;
                angular.module("SitemapService").service("deserializeSitemap", DeserializeSitemap)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var services;
            (function(services) {
                "use strict";
                var NotificationBrokerService = function() {
                    function NotificationBrokerService() { this.observers = {} }

                    NotificationBrokerService.prototype
                        .Notify = function(notificationObj) {
                            for (var evtTargets = this.observers[notificationObj.eventName],
                                len = evtTargets ? evtTargets.length : 0,
                                n = 0;
                                n < len;
                                n++) evtTargets[n].Notify(notificationObj)
                        };
                    NotificationBrokerService.prototype.RegisterObserver = function(eventName, observer) {
                        if (!this.observers[eventName]) this.observers[eventName] = [];
                        this.observers[eventName].push(observer)
                    };
                    NotificationBrokerService.prototype.RemoveObserver = function(observer) {};
                    return NotificationBrokerService
                }();
                services.NotificationBrokerService = NotificationBrokerService;
                mscrmSitemapDesigner.SitemapDesignerModule
                    .service("mscrmNotificationBrokerService", NotificationBrokerService)
            })(services = mscrmSitemapDesigner.services || (mscrmSitemapDesigner.services = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var ServiceNames = Designers.Common.Constants.ServiceNames,
                    StringUtilities = Designers.Common.Utility.StringUtilities,
                    ParsingService = function() {
                        function ParsingService(errorUtilityService, localizationSvc) {
                            this.errorUtilityService = errorUtilityService;
                            this.localizationSvc = localizationSvc;
                            this.privilegeList = [
                                "All", "Create", "Read", "Write", "Delete", "Append", "AppendTo", "Share", "Assign"
                            ]
                        }

                        ParsingService.prototype.parseXml = function(xml) {
                            var dom = null;
                            try {
                                dom = (new DOMParser).parseFromString(xml, "text/xml")
                            } catch (e) {
                                dom = null
                            }
                            if (dom == null)
                                try {
                                    dom = new ActiveXObject("Microsoft.XMLDOM");
                                    dom.async = "false";
                                    dom.loadXML(xml)
                                } catch (e) {
                                    dom = null
                                }
                            return dom
                        };
                        ParsingService.prototype.convertXmlToJson = function(xmlDoc, entitySubAreaList) {
                            var jsonObj = {};
                            if (xmlDoc.nodeType === 1) {
                                var isPrivilegeNode = xmlDoc.nodeName == "Privilege";
                                if (isPrivilegeNode)
                                    if (StringUtilities.IsNullOrEmpty(xmlDoc.getAttribute("Privilege"))) {
                                        var errorString = this.localizationSvc
                                            .getResourceString("SitemapDesigner.Error.InvalidPrivilege");
                                        this.errorUtilityService
                                            .RedirectToErrorHandlerPage(errorString,
                                                Designers.Common.Constants.ErrorCode.CRMError);
                                        return
                                    }
                                if (xmlDoc.attributes.length > 0)
                                    for (var j = 0; j < xmlDoc.attributes.length; j++) {
                                        var attribute = xmlDoc.attributes.item(j);
                                        jsonObj[attribute.nodeName] = attribute.nodeValue;
                                        attribute.nodeName === "Entity" &&
                                            !StringUtilities.IsNullOrEmpty(attribute.nodeValue) &&
                                            entitySubAreaList.push(attribute.nodeValue)
                                    }
                            }
                            if (xmlDoc.hasChildNodes())
                                for (var i = 0; i < xmlDoc.childNodes.length; i++) {
                                    var node = xmlDoc.childNodes.item(i), nodeName = node.nodeName;
                                    if (typeof jsonObj[nodeName] == "undefined") jsonObj[nodeName] = [];
                                    jsonObj[nodeName].push(this.convertXmlToJson(node, entitySubAreaList))
                                }
                            return jsonObj
                        };
                        ParsingService.prototype.convertPDMXmlToJson = function(xmlDoc) {
                            var jsonObj = {};
                            if (xmlDoc.nodeType === 1)
                                if (xmlDoc.attributes.length > 0)
                                    for (var j = 0; j < xmlDoc.attributes.length; j++) {
                                        var attribute = xmlDoc.attributes.item(j);
                                        jsonObj[attribute.nodeName] = attribute.nodeValue
                                    }
                            if (xmlDoc.hasChildNodes())
                                for (var i = 0; i < xmlDoc.childNodes.length; i++)
                                    if (xmlDoc.childNodes.item(i).nodeType === 1) {
                                        var node = xmlDoc.childNodes.item(i), nodeName = node.nodeName;
                                        if (typeof jsonObj[nodeName] == "undefined") {
                                            var newObj = {};
                                            jsonObj[nodeName] = newObj
                                        }
                                        jsonObj[nodeName] = this.convertPDMXmlToJson(node)
                                    }
                            return jsonObj
                        };
                        ParsingService.$inject = [ServiceNames.ErrorUtilityService, ServiceNames.LocalizationService];
                        return ParsingService
                    }();
                common.ParsingService = ParsingService;
                angular.module("SitemapService").service("parsingService", ParsingService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var ServiceNames = Designers.Common.Constants.ServiceNames,
                    AppInterfaceServiceNames = Designers.Common.AppInterface.AppInterfaceConstants.ServiceNames,
                    AppInterface = Designers.Common.AppInterface,
                    PublishAllService = function() {
                        function PublishAllService($http, dataAccessService, businessLogicService, traceUtility) {
                            this.$http = $http;
                            this.dataAccessService = dataAccessService;
                            this.businessLogicService = businessLogicService;
                            this.traceUtility = traceUtility;
                            this.$http.defaults.headers.post = {
                                Accept: "application/json",
                                "Content-Type": "application/json;charset=utf-8"
                            }
                        }

                        PublishAllService.prototype
                            .PublishCustomization = function(paramaterXml, onSuccess, onFailure) {
                                this.traceUtility.Scenario = mscrmSitemapDesigner.SitemapDesignerScenarios
                                    .PublishSitemap;
                                this.businessLogicService.GetData(AppInterface.BusinessLogic.ActionKey
                                    .SiteMapPublishAll,
                                    [paramaterXml],
                                    onSuccess,
                                    onFailure)
                            };
                        PublishAllService.$inject = [
                            "$http", "dataAccessService", AppInterfaceServiceNames.AppInterfaceBusinessLogicService,
                            ServiceNames.TraceUtilityService
                        ];
                        return PublishAllService
                    }();
                common.PublishAllService = PublishAllService;
                angular.module("SitemapService").service("publishAllService", PublishAllService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var Tracing = Mscrm.Designers.Common.Tracing,
                    SerializeSitemap = function() {
                        function SerializeSitemap(traceUtility) {
                            this.traceUtility = traceUtility;
                            this.areaPos = 0;
                            this.groupPos = 0;
                            this.subAreaPos = 0
                        }

                        SerializeSitemap.prototype.SerializeSiteMapXml = function(SiteMap) {
                            this.SiteMapObj = SiteMap;
                            var sitemapXml;
                            sitemapXml = this.GenerateSiteMapXml(SiteMap);
                            this.traceUtility.LogVerbose(Tracing.TraceComponent.SitemapDesigner,
                                "Success",
                                new Mscrm.Designers.Common.Tracing.StringTraceData(sitemapXml));
                            var dom = (new DOMParser).parseFromString(sitemapXml, "text/xml"),
                                serializer = new XMLSerializer;
                            sitemapXml = serializer.serializeToString(dom);
                            return sitemapXml
                        };
                        SerializeSitemap.prototype.convertToXML = function(xmlDoc) {
                            if (xmlDoc == null) return null;
                            xmlDoc.hasChildNodes() && this.convertToXMLUtility(xmlDoc)
                        };
                        SerializeSitemap.prototype.convertToXMLUtility = function(node) {
                            for (var i = 0; i < node.childNodes.length; i++) {
                                var child = node.childNodes.item(i);
                                if (child.childNodes.length == 1 && !child.firstChild.hasChildNodes()) {
                                    node.setAttribute(child.nodeName, child.firstChild.nodeValue);
                                    node.removeChild(child);
                                    i--
                                } else this.convertToXMLUtility(child)
                            }
                        };
                        SerializeSitemap.prototype.decodeUrl = function(urlString) {
                            if (urlString != null && urlString.length != 0 && urlString.indexOf("&") != -1
                            ) urlString = urlString.replace("&", "&amp;");
                            return urlString
                        };
                        SerializeSitemap.prototype.GenerateSiteMapXml = function(SiteMap) {
                            var start = '<SiteMap IntroducedVersion="' + SiteMap.IntroducedVersion + '">',
                                Area = this.GetArea(SiteMap.Area),
                                end = "</SiteMap>";
                            return start + Area + end
                        };
                        SerializeSitemap.prototype.GetArea = function(area) {
                            var areaElement = "";
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(area))
                                for (var i = 0; i < area.length; i++) {
                                    this.areaPos = i;
                                    areaElement += '<Area Id="' + area[i].Id;
                                    areaElement += this.SiteMapObj.Area[i].ResourceId != null
                                        ? '"  ResourceId="' + this.SiteMapObj.Area[i].ResourceId
                                        : "";
                                    areaElement += this.SiteMapObj.Area[i].DescriptionResourceId != null
                                        ? '" DescriptionResourceId="' + this.SiteMapObj.Area[i].DescriptionResourceId
                                        : "";
                                    areaElement += area[i].Icon != null ? '" Icon="' + area[i].Icon : "";
                                    areaElement += area[i].ShowGroups != null
                                        ? '" ShowGroups="' + area[i].ShowGroups
                                        : "";
                                    areaElement += this.SiteMapObj.Area[i].IntroducedVersion != null
                                        ? '" IntroducedVersion="' + this.SiteMapObj.Area[i].IntroducedVersion
                                        : "";
                                    areaElement += area[i].Url != null ? '" Url="' + this.decodeUrl(area[i].Url) : "";
                                    areaElement += area[i].Title != null
                                        ? '" Title="' + area[i].Title
                                        : Designers.Common.Utility.StringUtilities.EmptyString;
                                    areaElement += '">';
                                    areaElement += this.GetTitles(area[i].Titles);
                                    areaElement += this.GetDescriptions(area[i].Descriptions);
                                    areaElement += this.GetGroups(area[i].Group);
                                    areaElement += "</Area>"
                                }
                            return areaElement
                        };
                        SerializeSitemap.prototype.GetTitles = function(Titles) {
                            var title = "";
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(Titles) &&
                                Titles.length > 0)
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(Titles[0].Title)) {
                                    title += "<Titles>";
                                    for (var i = 0; i < Titles[0].Title.length; i++)
                                        if (!Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(Titles[0].Title[i])) {
                                            var tmpTitle = JSON.parse(JSON.stringify(Titles[0].Title[i]));
                                            title += '<Title LCID="' +
                                                tmpTitle.LCID +
                                                '" Title="' +
                                                this.GetEmptyStringIfUndefined(tmpTitle.Title) +
                                                '"/>'
                                        }
                                    title += "</Titles>"
                                }
                            return title
                        };
                        SerializeSitemap.prototype.GetDescriptions = function(Descriptions) {
                            var description = "";
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(Descriptions) &&
                                Descriptions.length > 0)
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(Descriptions[0].Description)) {
                                    description += "<Descriptions>";
                                    for (var i = 0; i < Descriptions[0].Description.length; i++)
                                        if (!Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(Descriptions[0].Description[i])) {
                                            var tmpDescription = JSON
                                                .parse(JSON.stringify(Descriptions[0].Description[i]));
                                            description += '<Description LCID="' +
                                                tmpDescription.LCID +
                                                '" Description="' +
                                                this.GetEmptyStringIfUndefined(tmpDescription.Description) +
                                                '"/>'
                                        }
                                    description += "</Descriptions>"
                                }
                            return description
                        };
                        SerializeSitemap.prototype.GetGroups = function(Groups) {
                            var group = "";
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(Groups))
                                for (var i = 0; i < Groups.length; i++) {
                                    this.groupPos = i;
                                    group += this.GetGroup(Groups[i]);
                                    group += this.GetTitles(Groups[i].Titles);
                                    group += this.GetDescriptions(Groups[i].Descriptions);
                                    group += this.GetSubAreas(Groups[i].SubArea);
                                    group += "</Group>"
                                }
                            return group
                        };
                        SerializeSitemap.prototype.GetGroup = function(Group) {
                            var group = "", isProfile = Group.IsProfile != null ? Group.IsProfile : "false";
                            group += '<Group Id="' + Group.Id;
                            group += this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].ResourceId != null
                                ? '" ResourceId="' + this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].ResourceId
                                : "";
                            group += this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].DescriptionResourceId !=
                                null
                                ? '" DescriptionResourceId="' +
                                this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].DescriptionResourceId
                                : "";
                            group += Group.Icon != null ? '" Icon="' + Group.Icon : "";
                            group += this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].IntroducedVersion != null
                                ? '" IntroducedVersion="' +
                                this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].IntroducedVersion
                                : "";
                            group += isProfile != null ? '" IsProfile="' + isProfile : "";
                            group += Group.Url != null ? '" Url="' + this.decodeUrl(Group.Url) : "";
                            group += Group.Title != null
                                ? '" Title="' + Group.Title
                                : Designers.Common.Utility.StringUtilities.EmptyString;
                            if (Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(Group
                                    .ToolTipResourseId)) group += '" ToolTipResourseId="SitemapDesigner.Unknown';
                            else
                                group += Group.ToolTipResourseId != null
                                    ? '" ToolTipResourseId="' + Group.ToolTipResourseId
                                    : 'ToolTipResourseId="  ';
                            group += '">';
                            return group
                        };
                        SerializeSitemap.prototype.GetSubAreas = function(SubAreas) {
                            var subArea = "";
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(SubAreas))
                                for (var i = 0; i < SubAreas.length; i++) {
                                    this.subAreaPos = i;
                                    subArea += this.GetSubArea(SubAreas[i]);
                                    subArea += this.GetTitles(SubAreas[i].Titles);
                                    subArea += this.GetDescriptions(SubAreas[i].Descriptions);
                                    subArea += this.GetPrivileges(SubAreas[i].Privilege);
                                    subArea += "</SubArea>"
                                }
                            return subArea
                        };
                        SerializeSitemap.prototype.GetSubArea = function(SubArea) {
                            var subArea = "";
                            subArea += SubArea.Id != null ? '<SubArea Id="' + SubArea.Id : "";
                            subArea += this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].SubArea[this.subAreaPos]
                                .ResourceId !=
                                null
                                ? '" ResourceId="' +
                                this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].SubArea[this.subAreaPos]
                                .ResourceId
                                : "";
                            subArea += this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].SubArea[this.subAreaPos]
                                .DescriptionResourceId !=
                                null
                                ? '" DescriptionResourceId="' +
                                this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].SubArea[this.subAreaPos]
                                .DescriptionResourceId
                                : "";
                            subArea += SubArea.Icon != null ? '" Icon="' + SubArea.Icon : "";
                            subArea += SubArea.Url != null ? '" Url="' + this.decodeUrl(SubArea.Url) : "";
                            subArea += SubArea.Title != null
                                ? '" Title="' + SubArea.Title
                                : Designers.Common.Utility.StringUtilities.EmptyString;
                            subArea += SubArea.DefaultDashboard != null
                                ? '" DefaultDashboard="' + SubArea.DefaultDashboard
                                : "";
                            subArea += this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].SubArea[this.subAreaPos]
                                .IntroducedVersion !=
                                null
                                ? '" IntroducedVersion="' +
                                this.SiteMapObj.Area[this.areaPos].Group[this.groupPos].SubArea[this.subAreaPos]
                                .IntroducedVersion
                                : "";
                            subArea += SubArea.GetStartedPanePath != null
                                ? '" GetStartedPanePath="' + SubArea.GetStartedPanePath
                                : "";
                            subArea += SubArea.GetStartedPanePathAdmin != null
                                ? '" GetStartedPanePathAdmin="' + SubArea.GetStartedPanePathAdmin
                                : "";
                            subArea += SubArea.GetStartedPanePathAdminOutlook != null
                                ? '" GetStartedPanePathAdminOutlook="' + SubArea.GetStartedPanePathAdminOutlook
                                : "";
                            subArea += SubArea.GetStartedPanePathOutlook != null
                                ? '" GetStartedPanePathOutlook="' + SubArea.GetStartedPanePathOutlook
                                : "";
                            subArea += SubArea.Entity != null ? '" Entity="' + SubArea.Entity : "";
                            subArea += this.ConvertArrayToString(SubArea.Client) != ""
                                ? '" Client="' + this.ConvertArrayToString(SubArea.Client)
                                : "";
                            subArea += SubArea.OutlookShortcutIcon != null
                                ? '" OutlookShortcutIcon="' + SubArea.OutlookShortcutIcon
                                : "";
                            subArea += '" AvailableOffline="' + this.IsChecked(SubArea.AvailableOffline);
                            subArea += '" PassParams="' + this.IsChecked(SubArea.PassParams);
                            subArea += this.ConvertArrayToString(SubArea.Sku) != ""
                                ? '" Sku="' + this.ConvertArrayToString(SubArea.Sku)
                                : "";
                            subArea += SubArea.ToolTipResourceId != null
                                ? '" ToolTipResourseId="' + SubArea.ToolTipResourceId
                                : "";
                            subArea += '">';
                            return subArea
                        };
                        SerializeSitemap.prototype.GetPrivileges = function(Privileges) {
                            var privilege = "";
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(Privileges)
                            ) for (var i = 0; i < Privileges.length; i++) privilege += this.GetPrivilege(Privileges[i]);
                            return privilege
                        };
                        SerializeSitemap.prototype.GetPrivilege = function(Privilege) {
                            var privilege = "<Privilege ";
                            privilege += Privilege.Entity ? 'Entity="' + Privilege.Entity + '" ' : "";
                            privilege += Privilege.Privilege ? ' Privilege="' + Privilege.Privilege : "";
                            privilege += '"/>';
                            return privilege
                        };
                        SerializeSitemap.prototype.GetEmptyStringIfUndefined = function(inputStr) {
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(inputStr)) return inputStr;
                            return ""
                        };
                        SerializeSitemap.prototype.EscapeSpecialCharactersInUrl = function(encodeValue) {
                            if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(encodeValue)) return encodeURIComponent(encodeValue);
                            return ""
                        };
                        SerializeSitemap.prototype.UnicodeEscape = function(escapeStr) {
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(escapeStr)) {
                                for (var result = "", index = 0, charCode;
                                    !isNaN(charCode = escapeStr.charCodeAt(index++));
                                ) result += "\\u" + ("0000" + charCode.toString(16)).slice(-4);
                                return result
                            }
                            return ""
                        };
                        SerializeSitemap.prototype.ConvertArrayToString = function(checkList) {
                            var selectedList = [];
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(checkList)) {
                                if (typeof checkList != "string") {
                                    if (checkList.length > 0)
                                        for (var index = 0;
                                            index < checkList.length;
                                            index++
                                        ) checkList[index].Value && selectedList.push(checkList[index].Id);
                                    return selectedList.join(",")
                                }
                                if (typeof checkList == "string") return checkList
                            }
                            return ""
                        };
                        SerializeSitemap.prototype.IsChecked = function(value) {
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(value)) return value;
                            return "false"
                        };
                        SerializeSitemap.$inject = ["mscrmTraceUtilityService"];
                        return SerializeSitemap
                    }();
                common.SerializeSitemap = SerializeSitemap;
                mscrmSitemapDesigner.SitemapDesignerModule.service("mscrmSerializeSitemapService", SerializeSitemap)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var AppInterface = Mscrm.Designers.Common.AppInterface,
                    CommonModel = Mscrm.Designers.Common.Models,
                    Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Designers.Common.Constants.ServiceNames,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    ComposableContextParam = Mscrm.Designers.Common.Constants.ComposableContextParam,
                    CommonConstants = Mscrm.Designers.Common.Constants,
                    DataAccessService = function(_super) {
                        __extends(DataAccessService, _super);

                        function DataAccessService($q,
                            $http,
                            deserializeSitemap,
                            window,
                            crudOperationService,
                            traceUtility,
                            composabiityService,
                            localization,
                            errorUtilityService,
                            commonVariableService) {
                            _super.call(this, crudOperationService);
                            this.$q = $q;
                            this.$http = $http;
                            this.deserializeSitemap = deserializeSitemap;
                            this.window = window;
                            this.crudOperationService = crudOperationService;
                            this.traceUtility = traceUtility;
                            this.composabiityService = composabiityService;
                            this.localization = localization;
                            this.errorUtilityService = errorUtilityService;
                            this.commonVariableService = commonVariableService;
                            this.entityMappingList = [];
                            this.entityLogicalNameList = [];
                            this.allEntityMappingList = null;
                            this.url = [];
                            this.icon = [];
                            this.iconmap = new Dictionary;
                            this._sitemapContext = new mscrmSitemapDesigner.model.SitemapContext(new Dictionary);
                            this.newSitemapCreated = false;
                            this.$http.defaults.headers
                                .patch = {
                                    Accept: "application/json",
                                    "Content-Type": "application/json;charset=utf-8"
                                };
                            this.onCreateSitemapSuccess = this.onCreateSitemapSuccess.bind(this);
                            this.onCreateSitemapFailure = this.onCreateSitemapFailure.bind(this);
                            this.getSiteMapData = this.getSiteMapData.bind(this);
                            this.dashboards = null
                        }

                        Object.defineProperty(DataAccessService.prototype,
                            "SitemapId",
                            { "get": function() { return this.sitemapId }, enumerable: true, configurable: true });
                        DataAccessService.prototype.getLCID = function() {
                            var windowObj = window;
                            return windowObj["lCID"]
                        };
                        DataAccessService.prototype.getNewSiteMapCreated = function() { return this.newSitemapCreated };
                        DataAccessService.prototype.getPropertiesDirectiveMappingXml = function() {
                            var self = this,
                                result = this.$http.get("SitemapDesigner/Common/Views/PropertiesDirectiveMapping.xml")
                                    .then(function(response) {
                                            if (response.status === 200) {
                                                var propertiesDirectiveMappingObject = response.data;
                                                return self.deserializeSitemap
                                                    .DeserializePropertiesDirectiveMappingXml(propertiesDirectiveMappingObject)
                                            }
                                        },
                                        function(httpError) {
                                            self.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                                "getPropertiesDirectiveMappingXml",
                                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError));
                                            return self.$q.reject(httpError)
                                        });
                            return result
                        };
                        DataAccessService.prototype.getEntityListWrapper = function() {
                            if (this.entity == null) {
                                var self = this;
                                this.getEntityList().then(function(response) {
                                    self.traceUtility.LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                        "getEntityListWrapper",
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(CommonConstants.EventStatus.Success +
                                            ": Successfully retreived entity list"));
                                    self.entity = response;
                                    return self.entity
                                })
                            } else return this.entity
                        };
                        DataAccessService.prototype.getDashboardListWrapper = function() {
                            if (this.dashboards == null) {
                                var self = this;
                                this.getDashboardList().then(function(response) {
                                    self.traceUtility.LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                        "getDashboardListWrapper",
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(CommonConstants.EventStatus.Success +
                                            ": Successfully retreived dashboard list"));
                                    this.dashboards = response;
                                    return this.dashboards
                                }.bind(this))
                            } else return this.dashboards
                        };
                        DataAccessService.prototype.getDashboardList = function() {
                            var self = this,
                                result = this.crudOperationService
                                    .GetData(AppInterface.BusinessLogic.ActionKey.SiteMapRetreiveDashboardList, null)
                                    .then(function(response) {
                                            var values = response.data.value;
                                            for (var index in values) {
                                                values[index].id = values[index].formid;
                                                values[index].displayName = values[index].name
                                            }
                                            return values
                                        },
                                        function(httpError) {
                                            self.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                                "getDashboardList",
                                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError))
                                        });
                            return result
                        };
                        DataAccessService.prototype.getEntityList = function() {
                            var self = this, result;
                            result = this.GetData(AppInterface.BusinessLogic.ActionKey.RetreiveEntityList, null)
                                .then(function(response) {
                                        if (response.status === 200) {
                                            var entity = [];
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(response.data.value))
                                                for (var i = 0; i < response.data.value.length; i++) {
                                                    var collectionName = response.data.value[i].DisplayName,
                                                        pluralName = response.data.value[i].DisplayCollectionName;
                                                    if (collectionName &&
                                                        collectionName.UserLocalizedLabel &&
                                                        pluralName &&
                                                        pluralName.UserLocalizedLabel) {
                                                        self.entityMappingList[response.data.value[i]
                                                                .LogicalName] =
                                                            {
                                                                DisplayName: collectionName.UserLocalizedLabel.Label,
                                                                PluralName: pluralName.UserLocalizedLabel.Label,
                                                                EntityColor: response.data.value[i].EntityColor,
                                                                IsCustomEntity: response.data.value[i].IsCustomEntity
                                                            };
                                                        self.entityLogicalNameList
                                                            .push(response.data.value[i].LogicalName);
                                                        entity.push(new mscrmSitemapDesigner.model
                                                            .Entity(response.data.value[i].LogicalName,
                                                                collectionName.UserLocalizedLabel.Label,
                                                                pluralName.UserLocalizedLabel.Label,
                                                                response.data.value[i].EntityColor,
                                                                response.data.value[i].IsCustomEntity))
                                                    }
                                                }
                                            return entity
                                        }
                                    },
                                    function(httpError) {
                                        self.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                            "getEntityList",
                                            new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError))
                                    });
                            return result
                        };
                        DataAccessService.prototype.getAllEntityList = function() {
                            var self = this, result;
                            result = this.GetData(AppInterface.BusinessLogic.ActionKey.RetreiveAllEntityList, null)
                                .then(function(response) {
                                        if (response.status === 200) {
                                            var entity = [];
                                            self.allEntityMappingList = [];
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(response.data.value))
                                                for (var i = 0; i < response.data.value.length; i++) {
                                                    var collectionName = response.data.value[i].DisplayName,
                                                        pluralName = response.data.value[i].DisplayCollectionName;
                                                    if (collectionName &&
                                                        collectionName.UserLocalizedLabel &&
                                                        pluralName &&
                                                        pluralName.UserLocalizedLabel) {
                                                        self.allEntityMappingList[response.data.value[i]
                                                                .LogicalName] =
                                                            {
                                                                DisplayName: collectionName.UserLocalizedLabel.Label,
                                                                PluralName: pluralName.UserLocalizedLabel.Label,
                                                                EntityColor: response.data.value[i].EntityColor,
                                                                IsCustomEntity: response.data.value[i].IsCustomEntity
                                                            };
                                                        self.entityLogicalNameList
                                                            .push(response.data.value[i].LogicalName);
                                                        entity.push(new mscrmSitemapDesigner.model
                                                            .Entity(response.data.value[i].LogicalName,
                                                                collectionName.UserLocalizedLabel.Label,
                                                                pluralName.UserLocalizedLabel.Label,
                                                                response.data.value[i].EntityColor,
                                                                response.data.value[i].IsCustomEntity))
                                                    }
                                                }
                                            return entity
                                        }
                                    },
                                    function(httpError) {
                                        self.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                            "getEntityList",
                                            new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError))
                                    });
                            return result
                        };
                        DataAccessService.prototype.getWebResourceListWrapper = function(result) {
                            var deferred = this.$q.defer(), self = this;
                            if (this.url.length == 0 || this.icon.length == 0)
                                this.getWebResourceList().then(function(response) {
                                        if (response) {
                                            self.traceUtility
                                                .LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                                    "getWebResourceListWrapper",
                                                    new Mscrm.Designers.Common.Tracing
                                                    .StringTraceData(CommonConstants.EventStatus.Success +
                                                        ": Successfully retreived web resource list"));
                                            self.url = response[mscrmSitemapDesigner.SiteMapConstants.UrlListIndex];
                                            self.icon = response[mscrmSitemapDesigner.SiteMapConstants.IconListIndex];
                                            self.iconmap = response[mscrmSitemapDesigner.SiteMapConstants.IconMapIndex];
                                            result[0] = self.url;
                                            result[1] = self.icon;
                                            result[2] = self.iconmap;
                                            deferred.resolve()
                                        }
                                    },
                                    function(httpError) {
                                        deferred.reject(httpError);
                                        self.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                            "getWebResourceList",
                                            new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError))
                                    });
                            else {
                                result[0] = self.url;
                                result[1] = self.icon;
                                result[2] = self.iconmap;
                                deferred.resolve()
                            }
                            return deferred.promise
                        };
                        DataAccessService.prototype.getWebResourceList = function() {
                            var self = this,
                                result = this.crudOperationService
                                    .GetData(AppInterface.BusinessLogic.ActionKey.SiteMapRetreiveWebResourceList, null)
                                    .then(function(response) {
                                            if (response.status === 200) {
                                                for (var Url = [], Icon = [], IconUrlMap = new Dictionary, i = 0;
                                                    i < response.data.value.length;
                                                    i++) {
                                                    response.data.value[i].webresourcetype == 1 &&
                                                        Url.push(new mscrmSitemapDesigner.model
                                                            .Url(response.data.value[i].displayname,
                                                                response.data.value[i].name,
                                                                response.data.value[i].webresourceid));
                                                    if (response.data.value[i].webresourcetype == 5) {
                                                        i == 0 &&
                                                            Icon.push(new mscrmSitemapDesigner.model
                                                                .Icon(self.localization
                                                                    .getResourceString("AppDesigner.UseDefaultImage"),
                                                                    self.localization
                                                                    .getResourceString("AppDesigner.UseDefaultImage"),
                                                                    Mscrm.Designers.Common.Guid.NewGuid(),
                                                                    self.commonVariableService
                                                                    .getOOBEntityImageStripUrl()));
                                                        var
                                                            webResourceImageUrl =
                                                                "/WebResources/" + response.data.value[i].name,
                                                            iconObj = new mscrmSitemapDesigner.model
                                                                .Icon(response.data.value[i].displayname,
                                                                    response.data.value[i].name,
                                                                    response.data.value[i].webresourceid,
                                                                    webResourceImageUrl);
                                                        Icon.push(iconObj);
                                                        IconUrlMap.add(webResourceImageUrl, iconObj)
                                                    }
                                                }
                                                return [Url, Icon, IconUrlMap]
                                            }
                                        },
                                        function(httpError) {
                                            self.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                                "getWebResourceList",
                                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError))
                                        });
                            return result
                        };
                        DataAccessService.prototype.getLanguageLocaleWrapper = function(result) {
                            var self = this;
                            if (this.language == null)
                                this.getLanguageLocaleList().then(function(response) {
                                    if (response) {
                                        self.traceUtility
                                            .LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                                "getLanguageLocaleWrapper",
                                                new Mscrm.Designers.Common.Tracing
                                                .StringTraceData(CommonConstants.EventStatus.Success +
                                                    ": Successfully retreived language locale list"));
                                        self.language = response;
                                        result = self.language
                                    }
                                });
                            else result[0] = self.language
                        };
                        DataAccessService.prototype.getLanguageLocaleList = function() {
                            var self = this,
                                resxLanguageDisplayName = this.localization
                                    .getResourceString("SitemapDesigner.LanguageDisplayName"),
                                result = this.crudOperationService
                                    .GetData(AppInterface.BusinessLogic.ActionKey.SiteMapRetreiveLanguageLocaleList,
                                        null)
                                    .then(function(response) {
                                            if (response.status === 200) {
                                                var language = "",
                                                    name_1 = "",
                                                    localeId = "",
                                                    displayName = "",
                                                    Language = [];
                                                if (!Designers.Common.Utility.ScriptUtilities
                                                    .IsNullOrUndefined(response.data) &&
                                                    !Designers.Common.Utility.ScriptUtilities
                                                    .IsNullOrUndefined(response.data.value)) {
                                                    for (var i = 0; i < response.data.value.length; i++)
                                                        if (!Designers.Common.Utility.ScriptUtilities
                                                            .IsNullOrUndefined(response.data.value[i].language) &&
                                                            !Designers.Common.Utility.ScriptUtilities
                                                            .IsNullOrUndefined(response.data.value[i].name) &&
                                                            !Designers.Common.Utility.ScriptUtilities
                                                            .IsNullOrUndefined(response.data.value[i].localeid)) {
                                                            language = response.data.value[i].language;
                                                            name_1 = response.data.value[i].name;
                                                            localeId = response.data.value[i].localeid;
                                                            displayName = Designers.Common.Utility.StringUtilities
                                                                .Format(resxLanguageDisplayName, [name_1, localeId]);
                                                            Language
                                                                .push(new mscrmSitemapDesigner.model
                                                                    .Language(language, name_1, localeId, displayName))
                                                        }
                                                    return Language
                                                }
                                            }
                                        },
                                        function(httpError) {
                                            self.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                                "getLanguageLocaleList",
                                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(httpError))
                                        });
                            return result
                        };
                        DataAccessService.prototype.getSiteMapData = function(onSuccess, onFailure, comDictionary) {
                            this.postSiteMapLoadSuccessCallback = onSuccess;
                            this.postSiteMapLoadFailureCallBack = onFailure;
                            this.comDictionary = comDictionary;
                            if (comDictionary != undefined) {
                                this._sitemapContext.AppName = comDictionary
                                    .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.AppName);
                                this._sitemapContext.AppUniqueName = comDictionary
                                    .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.AppUniqueName);
                                if (!comDictionary.getValue(Mscrm.Designers.Common.Constants.ComposableContextParam
                                    .SitemapId)) this.createSiteMap();
                                else {
                                    this.sitemapId = comDictionary
                                        .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.SitemapId)
                                        .toString();
                                    this.solutionId = comDictionary
                                        .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.SolutionId) ==
                                        undefined
                                        ? ""
                                        : comDictionary
                                        .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.SolutionId)
                                        .toString();
                                    this.organizationId = comDictionary
                                        .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.AppId) ==
                                        undefined
                                        ? ""
                                        : comDictionary
                                        .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.AppId)
                                        .toString()
                                }
                                if (this.sitemapId != undefined) {
                                    this._sitemapContext.SiteMapId = new Mscrm.Designers.Common.Guid(this.sitemapId);
                                    this._sitemapContext.SiteMapXml = "";
                                    this._sitemapContext.SolutionId = this.solutionId;
                                    this._sitemapContext.OrganizationId = this.organizationId;
                                    var params = [];
                                    params.push(this._sitemapContext.SiteMapId.guidString);
                                    this.crudOperationService
                                        .GetData(AppInterface.BusinessLogic.ActionKey.SiteMapRetrive,
                                            params,
                                            onSuccess,
                                            onFailure)
                                }
                            } else
                                this.crudOperationService
                                    .Retrieve(AppInterface.BusinessLogic.ActionKey.DefaultSiteMapRetrieve,
                                        null,
                                        null,
                                        onSuccess,
                                        onFailure)
                        };
                        DataAccessService.prototype.GetDefaultSiteMapName = function(onSuccess, onFailure, orgId) {
                            var attributes = [],
                                attribute = new CommonModel
                                    .AttributeBase(mscrmSitemapDesigner.SiteMapConstants.DefaultSiteMapColumn,
                                        null,
                                        null);
                            attributes[0] = attribute;
                            this.crudOperationService.Retrieve(AppInterface.BusinessLogic.ActionKey
                                .OrganizationRetrieve,
                                orgId,
                                attributes,
                                onSuccess,
                                null)
                        };
                        DataAccessService.prototype.onCreateSitemapSuccess = function(response) {
                            this.traceUtility.LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                "onCreateSiteMapSuccess",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(CommonConstants.EventStatus
                                    .Success +
                                    ": Successfully created Sitemap."));
                            this.sitemapId = response;
                            this._sitemapContext.SiteMapId = new Mscrm.Designers.Common.Guid(this.sitemapId);
                            this._sitemapContext.SiteMapXml = "";
                            var params = [];
                            params.push(this._sitemapContext.SiteMapId.guidString);
                            this.crudOperationService.GetData(AppInterface.BusinessLogic.ActionKey.SiteMapRetrive,
                                params,
                                this.postSiteMapLoadSuccessCallback,
                                this.postSiteMapLoadFailureCallBack)
                        };
                        DataAccessService.prototype.onCreateSitemapFailure = function(error) {
                            this.traceUtility.LogError(Tracing.TraceComponent.SitemapDesigner,
                                "onCreateSitemapFailure",
                                new Mscrm.Designers.Common.Tracing.ErrorTraceData(error));
                            this.errorUtilityService
                                .RedirectToErrorHandlerPage(this.localization
                                    .getResourceString("AppDesigner.Error_ServerDown"),
                                    Designers.Common.Constants.ErrorCode.CRMError)
                        };
                        DataAccessService.prototype.getDefaultSiteMapXml = function() {
                            var sDefaultSitemapXml = "";
                            if (this.comDictionary) {
                                sDefaultSitemapXml +=
                                    '<?xml version="1.0" encoding="UTF-8"?> <SiteMap IntroducedVersion="7.0.0.0"> <Area Id="';
                                sDefaultSitemapXml += 'New_Area" ResourceId="' +
                                    mscrmSitemapDesigner.LocalizationConstants.NewArea +
                                    '" DescriptionResourceId="' +
                                    mscrmSitemapDesigner.LocalizationConstants.NewArea +
                                    '" ShowGroups="true" IntroducedVersion="7.0.0.0">';
                                sDefaultSitemapXml += '<Group Id="New_Group" ResourceId="' +
                                    mscrmSitemapDesigner.LocalizationConstants.NewGroup +
                                    '" DescriptionResourceId="' +
                                    mscrmSitemapDesigner.LocalizationConstants.NewGroup +
                                    '" IntroducedVersion="7.0.0.0">';
                                sDefaultSitemapXml += '<SubArea Id="New_SubArea" ResourceId="' +
                                    mscrmSitemapDesigner.LocalizationConstants.NewSubArea +
                                    '" DescriptionResourceId="' +
                                    mscrmSitemapDesigner.LocalizationConstants.NewSubArea +
                                    '" IntroducedVersion= "7.0.0.0" AvailableOffline="false" PassParams="false" Client="All,Outlook,OutlookLaptopClient,OutlookWorkstationClient,Web" Sku="All,OnPremise,Live,SPLA"/></Group></Area></SiteMap>'
                            }
                            return sDefaultSitemapXml
                        };
                        DataAccessService.prototype.createSiteMap = function() {
                            this.newSitemapCreated = true;
                            this._sitemapContext.SiteMapXml = this.getDefaultSiteMapXml();
                            this.traceUtility.LogVerbose(Tracing.TraceComponent.SitemapDesigner,
                                "createSiteMap",
                                new Mscrm.Designers.Common.Tracing.StringTraceData("Creating new sitemap"));
                            this.crudOperationService
                                .CreateSitemap(this._sitemapContext.GetAttributes(),
                                    this.onCreateSitemapSuccess,
                                    this.onCreateSitemapFailure)
                        };
                        DataAccessService.prototype.updateSiteMapContext = function(siteMapData) {
                            this.sitemapId = siteMapData.sitemapid;
                            this._sitemapContext.SiteMapId = new Mscrm.Designers.Common.Guid(siteMapData.sitemapid);
                            this._sitemapContext.SiteMapXml = siteMapData.sitemapxml;
                            this._sitemapContext.SolutionId = siteMapData.solutionid;
                            this._sitemapContext.OrganizationId = siteMapData._organizationid_value;
                            this._sitemapContext
                                .SitemapStatus = siteMapData.componentstate
                                ? mscrmSitemapDesigner.SitemapState.Draft
                                : mscrmSitemapDesigner.SitemapState.Published;
                            this.composabiityService
                                .getComposableContext(Designers.Common.Constants.DesignerName.SiteMapDesigner)
                                .UpdateComposableItem(new Mscrm.Designers.Common.Composability
                                    .ComposableItem(ComposableContextParam.SitemapId,
                                        this._sitemapContext.SiteMapId,
                                        CommonModel.ComponentTypeName.SITEMAP))
                        };
                        DataAccessService.prototype
                            .SetSitemapStatus = function(status) { this._sitemapContext.SitemapStatus = status };
                        DataAccessService.prototype
                            .GetSitemapStatus = function() { return this._sitemapContext.SitemapStatus };
                        DataAccessService.prototype.updateSiteMapData = function(sitemapXml, onSuccess, onFailure) {
                            this._sitemapContext.SiteMapId = new Mscrm.Designers.Common.Guid(this.sitemapId);
                            this._sitemapContext.SiteMapXml = sitemapXml;
                            this._sitemapContext.SolutionId = this.solutionId;
                            this._sitemapContext.OrganizationId = this.organizationId;
                            this.crudOperationService.Update(AppInterface.BusinessLogic.ActionKey.SiteMapUpdate,
                                this._sitemapContext.GetAttributes(),
                                onSuccess,
                                onFailure)
                        };
                        DataAccessService.$inject = [
                            ServiceNames.QService, "$http", "deserializeSitemap", "$window", AppInterface
                            .AppInterfaceConstants.ServiceNames.AppInterfaceCRUDOperations, ServiceNames
                            .TraceUtilityService, ServiceNames.ComposabilityService, ServiceNames.LocalizationService,
                            ServiceNames.ErrorUtilityService, "mscrmCommonVariableService"
                        ];
                        return DataAccessService
                    }(AppInterface.Designers.AppInterfaceServiceBase);
                common.DataAccessService = DataAccessService;
                angular.module("SitemapService").service("dataAccessService", DataAccessService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var services;
            (function(services) {
                "use strict";
                var SitemapDesignerPerfKpisService = function() {
                    function SitemapDesignerPerfKpisService(perfService) {
                        this.perfService = perfService;
                        this.kpis = {};
                        this.kpis[KpiNames.sitemapSave] = this.perfService
                            .createPerfKpi(SitemapDesignerPerfKpisService.sitemapDesignerComponent,
                                KpiNames.sitemapSave,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                2e3);
                        this.kpis[KpiNames.sitemapPublish] = this.perfService
                            .createPerfKpi(SitemapDesignerPerfKpisService.sitemapDesignerComponent,
                                KpiNames.sitemapPublish,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                5e3);
                        this.kpis[KpiNames.sitemapLaunchFromAppCanvas] = this.perfService
                            .createPerfKpi(SitemapDesignerPerfKpisService.sitemapDesignerComponent,
                                KpiNames.sitemapLaunchFromAppCanvas,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                1e3)
                    }

                    SitemapDesignerPerfKpisService.prototype
                        .getPerfKpiByName = function(name) { return this.kpis[name] };
                    SitemapDesignerPerfKpisService.$inject = ["mscrmPerfService"];
                    SitemapDesignerPerfKpisService.sitemapDesignerComponent = "Sitemap Designer";
                    return SitemapDesignerPerfKpisService
                }();
                services.SitemapDesignerPerfKpisService = SitemapDesignerPerfKpisService;
                var KpiNames = function() {
                    function KpiNames() {}

                    Object.defineProperty(KpiNames,
                        "sitemapSave",
                        { "get": function() { return "sitemapSave" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "sitemapPublish",
                        { "get": function() { return "sitemapPublish" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "sitemapLaunchFromAppCanvas",
                        {
                            "get": function() { return "sitemapLaunchFromAppCanvas" },
                            enumerable: true,
                            configurable: true
                        });
                    return KpiNames
                }();
                services.KpiNames = KpiNames;
                mscrmSitemapDesigner.SitemapDesignerModule
                    .service("mscrmSitemapDesignerPerfKpisService", SitemapDesignerPerfKpisService)
            })(services = mscrmSitemapDesigner.services || (mscrmSitemapDesigner.services = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                var LocaleService = function() {
                    function LocaleService(dataAccessService) { this.dataAccessService = dataAccessService }

                    LocaleService.prototype.GetLanguageList = function() {
                        if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(this.languageList)) {
                            var langList = [];
                            this.dataAccessService.getLanguageLocaleWrapper(langList);
                            this.languageList = langList[0]
                        }
                        return this.languageList
                    };
                    LocaleService.prototype.GetDefaultLanguage = function(orgLCID) {
                        if (Designers.Common.Utility.ScriptUtilities
                            .IsNullOrUndefined(this.defaultLangaue)) this.defaultLCID = orgLCID;
                        if (this.defaultLCID == orgLCID)
                            this.defaultLangaue = this.languageList
                                .filter(function(Language) { return Language.LocaleId == orgLCID })[0];
                        return this.defaultLangaue
                    };
                    LocaleService.$inject = ["dataAccessService"];
                    return LocaleService
                }();
                common.LocaleService = LocaleService;
                mscrmSitemapDesigner.SitemapDesignerModule.service("mscrmLocaleService", LocaleService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var interfaces;
            (function(interfaces) { "use strict" })(interfaces =
                mscrmSitemapDesigner.interfaces || (mscrmSitemapDesigner.interfaces = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var services;
            (function(services) {
                "use strict";
                var Models = Mscrm.Designers.mscrmSitemapDesigner.model,
                    CommonVariableService = function() {
                        function CommonVariableService(localization, $document) {
                            this.localization = localization;
                            this.$document = $document;
                            this.draggedElement = null;
                            this.draggedSrc = null;
                            this.draggedCntrlType = "";
                            this.draggedSrcArea = null;
                            this.freezeDraggedSrcArea = false;
                            this.defaultEntityColor = "#001CA5";
                            this.OOBEntityImageStripUrl = "/_imgs/imagestrips/transparent_spacer.gif";
                            this.defaultSubAreaImageStripUrl = "";
                            this.defaultAreaImageStripUrl = "";
                            this.defaultWebResourceImageStripUrl = "";
                            this.defaultURLImageStripUrl = "";
                            this.defaultImageIconText = "";
                            this.customEntityIconClassName = "ms-crm-ImageStrip-NavBar_ActionImgs_CustomEntity_32";
                            this.dashboardIconClassName = "ms-crm-ImageStrip-NavBar_ActionImgs_Dashboards_32";
                            this.selectedGroup = null;
                            this.selectedSubArea = null;
                            this.selectedArea = null;
                            this.showPropertiesPane = false;
                            this.unsupportedComponent = false;
                            this.duplicateGroup = null;
                            this.borderInfo = new Models.BorderInfoWrapper;
                            this.subAreaDragInProcess = false;
                            this.$document.on("mouseup", this.documentMouseUpHandler.bind(this))
                        }

                        CommonVariableService.prototype.documentMouseUpHandler = function() {
                            this.borderInfo.group.showBorder = false;
                            this.subAreaDragInProcess = false;
                            this.borderInfo.subArea.showBorder = false
                        };
                        CommonVariableService.prototype.dragEndHandler = function(componentType) {
                            switch (componentType) {
                            case mscrmSitemapDesigner.ComponentTypes.AreaType:
                            case mscrmSitemapDesigner.ComponentTypes.Area:
                                this.borderInfo.area.showBorder = false;
                                break;
                            case mscrmSitemapDesigner.ComponentTypes.GroupType:
                            case mscrmSitemapDesigner.ComponentTypes.Group:
                                this.borderInfo.group.showBorder = false;
                                break;
                            case mscrmSitemapDesigner.ComponentTypes.SubAreaType:
                            case mscrmSitemapDesigner.ComponentTypes.SubArea:
                                this.subAreaDragInProcess = false;
                                this.borderInfo.subArea.showBorder = false
                            }
                        };
                        CommonVariableService.prototype.GetDraggedElement = function() { return this.draggedElement };
                        CommonVariableService.prototype
                            .SetDraggedElement = function(element) { this.draggedElement = element };
                        CommonVariableService.prototype.GetDraggedSrc = function() { return this.draggedSrc };
                        CommonVariableService.prototype.SetDraggedSrc = function(element) { this.draggedSrc = element };
                        CommonVariableService.prototype
                            .GetDraggedCntrlType = function() { return this.draggedCntrlType };
                        CommonVariableService.prototype
                            .SetDraggedCntrlType = function(cntrlType) { this.draggedCntrlType = cntrlType };
                        CommonVariableService.prototype.GetDraggedSrcArea = function() { return this.draggedSrcArea };
                        CommonVariableService.prototype
                            .SetDraggedSrcArea = function(element) { this.draggedSrcArea = element };
                        CommonVariableService.prototype
                            .GetfreezeDraggedSrcArea = function() { return this.freezeDraggedSrcArea };
                        CommonVariableService.prototype
                            .SetfreezeDraggedSrcArea = function(isFreez) { this.freezeDraggedSrcArea = isFreez };
                        CommonVariableService.prototype
                            .GetShowPropertiesPane = function() { return this.showPropertiesPane };
                        CommonVariableService.prototype
                            .SetShowPropertiesPane = function(show) { this.showPropertiesPane = show };
                        CommonVariableService.prototype
                            .GetUnsupportedComponent = function() { return this.unsupportedComponent };
                        CommonVariableService.prototype
                            .SetUnsupportedComponent = function(showWarning) {
                                this.unsupportedComponent =
                                    showWarning
                            };
                        CommonVariableService.prototype.GetSelectedGroup = function() { return this.selectedGroup };
                        CommonVariableService.prototype
                            .SetSelectedGroup = function(group) { this.selectedGroup = group };
                        CommonVariableService.prototype.GetSelectedSubArea = function() { return this.selectedSubArea };
                        CommonVariableService.prototype
                            .SetSelectedSubArea = function(subArea) { this.selectedSubArea = subArea };
                        CommonVariableService.prototype.GetSelectedArea = function() { return this.selectedArea };
                        CommonVariableService.prototype.SetSelectedArea = function(area) { this.selectedArea = area };
                        CommonVariableService.prototype
                            .IsAddGroupEnabled = function() { return this.GetSelectedArea() ? true : false };
                        CommonVariableService.prototype
                            .IsAddSubAreaEnabled = function() {
                                return this.GetSelectedArea() && this.GetSelectedArea().Group.length ? true : false
                            };
                        CommonVariableService.prototype.getSubAreaTypes = function() {
                            var subArea = new mscrmSitemapDesigner.model.SubArea;
                            subArea.Type = [
                                {
                                    label: this.localization.getResourceString("SitemapDesigner.SelectSubArea"),
                                    value: "SelectSubArea",
                                    type: mscrmSitemapDesigner.NodeTypes.SelectSubArea
                                }, {
                                    label: this.localization.getResourceString("SitemapDesigner.SubAreaDashboard"),
                                    value: "DefaultDashboard",
                                    type: mscrmSitemapDesigner.NodeTypes.DefaultDashboard
                                }, {
                                    label: this.localization.getResourceString("SitemapDesigner.SubAreaEntity"),
                                    value: "Entity",
                                    type: mscrmSitemapDesigner.NodeTypes.Entity
                                }, {
                                    label: this.localization.getResourceString("SitemapDesigner.SubAreaWebResources"),
                                    value: "WebResources",
                                    type: mscrmSitemapDesigner.NodeTypes.WebResources
                                }, {
                                    label: this.localization.getResourceString("SitemapDesigner.SubAreaUrl"),
                                    value: "Url",
                                    type: mscrmSitemapDesigner.NodeTypes.Url
                                }
                            ];
                            return subArea.Type
                        };
                        CommonVariableService.prototype.getClientOptions = function() {
                            var subAreaClient = (new mscrmSitemapDesigner.model.SubArea).Client = [],
                                optionAll = new mscrmSitemapDesigner.model.Client;
                            optionAll.Id = mscrmSitemapDesigner.ClientOption.All;
                            optionAll.Label = this.localization.getResourceString("SitemapDesigner.All");
                            optionAll.Value = true;
                            subAreaClient.push(optionAll);
                            var optionOutlook = new mscrmSitemapDesigner.model.Client;
                            optionOutlook.Id = mscrmSitemapDesigner.ClientOption.Outlook;
                            optionOutlook.Label = this.localization.getResourceString("SitemapDesigner.Outlook");
                            optionOutlook.Value = true;
                            subAreaClient.push(optionOutlook);
                            var optionOutlookLaptopClient = new mscrmSitemapDesigner.model.Client;
                            optionOutlookLaptopClient.Id = mscrmSitemapDesigner.ClientOption.OutlookLaptopClient;
                            optionOutlookLaptopClient.Label = this.localization
                                .getResourceString("SitemapDesigner.OutlookLaptopClient");
                            optionOutlookLaptopClient.Value = true;
                            subAreaClient.push(optionOutlookLaptopClient);
                            var optionOutlookWorkstationClient = new mscrmSitemapDesigner.model.Client;
                            optionOutlookWorkstationClient.Id = mscrmSitemapDesigner.ClientOption
                                .OutlookWorkstationClient;
                            optionOutlookWorkstationClient.Label = this.localization
                                .getResourceString("SitemapDesigner.OutlookWorkstationClient");
                            optionOutlookWorkstationClient.Value = true;
                            subAreaClient.push(optionOutlookWorkstationClient);
                            var optionWeb = new mscrmSitemapDesigner.model.Client;
                            optionWeb.Id = mscrmSitemapDesigner.ClientOption.Web;
                            optionWeb.Label = this.localization.getResourceString("SitemapDesigner.Web");
                            optionWeb.Value = true;
                            subAreaClient.push(optionWeb);
                            return subAreaClient
                        };
                        CommonVariableService.prototype.getSkuOptions = function() {
                            var subAreaSku = (new mscrmSitemapDesigner.model.SubArea).Sku = [],
                                optionAll = new mscrmSitemapDesigner.model.Sku;
                            optionAll.Id = mscrmSitemapDesigner.SkuOptions.All;
                            optionAll.Label = this.localization.getResourceString("SitemapDesigner.All");
                            optionAll.Value = true;
                            subAreaSku.push(optionAll);
                            var optionOnPremise = new mscrmSitemapDesigner.model.Sku;
                            optionOnPremise.Id = mscrmSitemapDesigner.SkuOptions.OnPremise;
                            optionOnPremise.Label = this.localization.getResourceString("SitemapDesigner.OnPremise");
                            optionOnPremise.Value = true;
                            subAreaSku.push(optionOnPremise);
                            var optionLive = new mscrmSitemapDesigner.model.Sku;
                            optionLive.Id = mscrmSitemapDesigner.SkuOptions.Live;
                            optionLive.Label = this.localization.getResourceString("SitemapDesigner.Live");
                            optionLive.Value = true;
                            subAreaSku.push(optionLive);
                            var optionSPLA = new mscrmSitemapDesigner.model.Sku;
                            optionSPLA.Id = mscrmSitemapDesigner.SkuOptions.SPLA;
                            optionSPLA.Label = this.localization.getResourceString("SitemapDesigner.SPLA");
                            optionSPLA.Value = true;
                            subAreaSku.push(optionSPLA);
                            return subAreaSku
                        };
                        CommonVariableService.prototype.getPrivilege = function() {
                            var previlege = new mscrmSitemapDesigner.model.Privilege;
                            previlege.Privilege = [
                                {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.All,
                                    label: this.localization.getResourceString("SitemapDesigner.All"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.Create,
                                    label: this.localization.getResourceString("SitemapDesigner.Create"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.Read,
                                    label: this.localization.getResourceString("SitemapDesigner.Read"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.Write,
                                    label: this.localization.getResourceString("SitemapDesigner.Write"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.Delete,
                                    label: this.localization.getResourceString("SitemapDesigner.Delete"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.Append,
                                    label: this.localization.getResourceString("SitemapDesigner.Append"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.AppendTo,
                                    label: this.localization.getResourceString("SitemapDesigner.AppendTo"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.Share,
                                    label: this.localization.getResourceString("SitemapDesigner.Share"),
                                    value: true
                                }, {
                                    id: mscrmSitemapDesigner.PrivilegeTypes.Assign,
                                    label: this.localization.getResourceString("SitemapDesigner.Assign"),
                                    value: true
                                }
                            ];
                            return previlege
                        };
                        CommonVariableService.prototype
                            .getDefaultEntityColor = function() { return this.defaultEntityColor };
                        CommonVariableService.prototype
                            .getOOBEntityImageStripUrl = function() { return this.OOBEntityImageStripUrl };
                        CommonVariableService.prototype
                            .setDefaultSubAreaImageStripUrl =
                            function(value) { this.defaultSubAreaImageStripUrl = value };
                        CommonVariableService.prototype
                            .setDefaultAreaImageStripUrl = function(value) { this.defaultAreaImageStripUrl = value };
                        CommonVariableService.prototype
                            .setDefaultWebResourceImageStripUrl =
                            function(value) { this.defaultWebResourceImageStripUrl = value };
                        CommonVariableService.prototype
                            .setDefaultURLImageStripUrl = function(value) { this.defaultURLImageStripUrl = value };
                        CommonVariableService.prototype
                            .getDefaultSubAreaImageStripUrl = function() { return this.defaultSubAreaImageStripUrl };
                        CommonVariableService.prototype
                            .getDefaultAreaImageStripUrl = function() { return this.defaultAreaImageStripUrl };
                        CommonVariableService.prototype
                            .getDefaultWebResourceImageStripUrl =
                            function() { return this.defaultWebResourceImageStripUrl };
                        CommonVariableService.prototype
                            .getDefaultURLImageStripUrl = function() { return this.defaultURLImageStripUrl };
                        CommonVariableService.prototype
                            .getDefaultImageIconText = function() {
                                return this.localization.getResourceString("AppDesigner.UseDefaultImage")
                            };
                        CommonVariableService.prototype
                            .getCustomEntityIconClassName = function() { return this.customEntityIconClassName };
                        CommonVariableService.prototype
                            .getDashboardIconClassName = function() { return this.dashboardIconClassName };
                        CommonVariableService.prototype
                            .getIconClassNameFromEntityName = function(entityLogicalName) {
                                return "ms-crm-ImageStrip-NavBar_ActionImgs_" + entityLogicalName + "_32"
                            };
                        CommonVariableService.prototype.GetDuplicateGroup = function() { return this.duplicateGroup };
                        CommonVariableService.prototype
                            .SetDuplicateGroup = function(group) { this.duplicateGroup = group };
                        CommonVariableService.$inject = ["mscrmLocalizationService", "$document"];
                        return CommonVariableService
                    }();
                services.CommonVariableService = CommonVariableService;
                mscrmSitemapDesigner.SitemapDesignerModule.service("mscrmCommonVariableService", CommonVariableService)
            })(services = mscrmSitemapDesigner.services || (mscrmSitemapDesigner.services = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var SitemapScrollService = function() {
                    function SitemapScrollService() {}

                    SitemapScrollService.prototype
                        .ScrollToScrollPoint = function(scrollPoint) {
                            $(".mscrm-propertiesPane-PropertiesForm")
                                .animate({ scrollTop: $("[data-scroll-point='" + scrollPoint + "']").position().top })
                        };
                    return SitemapScrollService
                }();
                mscrmSitemapDesigner.SitemapDesignerModule.service("mscrmSitemapScrollService", SitemapScrollService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function GlobalCommandBarDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "SitemapDesigner/GlobalCommandBar/Templates/GlobalCommandBar.html?v=8200000749",
                        controller: "mscrmSitemapGlobalCommandBarController",
                        controllerAs: "globalCommandBarController"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSitemapGlobalCommandBar", GlobalCommandBarDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function GlobalCommandButtonDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        scope: {
                            mscrmButtonTextKey: "@",
                            mscrmButtonIconClass: "@",
                            mscrmButtonClickCallback: "&",
                            mscrmButtonIsDisabled: "@",
                            mscrmButtonTooltipKey: "@"
                        },
                        templateUrl: "SitemapDesigner/GlobalCommandBar/Templates/GlobalCommandButton.html?v=8200000749"
                    }
                }

                mscrmSitemapDesigner.SitemapDesignerModule
                    .directive("mscrmSitemapGlobalCommandButton", GlobalCommandButtonDirective)
            })(Directives = mscrmSitemapDesigner.Directives || (mscrmSitemapDesigner.Directives = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    PropertiesPaneService = function() {
                        function PropertiesPaneService(urlHelperService,
                            mscrmSitemapUtilityService,
                            flyoutService,
                            commonVariableService) {
                            this.urlHelperService = urlHelperService;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.flyoutService = flyoutService;
                            this.commonVariableService = commonVariableService;
                            this.currentSelectedSubAreaNode = new mscrmSitemapDesigner.model.SubArea;
                            this.initializeSubAreaTypeDependencies()
                        }

                        PropertiesPaneService.prototype.initializeSubAreaTypeDependencies = function() {
                            this.nodeTitles = new Dictionary;
                            this.subAreaTypeDependencies = new Dictionary;
                            this.subAreaTypeDependencies.add(mscrmSitemapDesigner.NodeTypes.DefaultDashboard,
                                ["Entity", "Url", "PassParams"]);
                            this.subAreaTypeDependencies.add(mscrmSitemapDesigner.NodeTypes.Entity,
                                ["Url", "PassParams", "DefaultDashboard"]);
                            this.subAreaTypeDependencies.add(mscrmSitemapDesigner.NodeTypes.Url,
                                ["Url", "Entity", "PassParams", "DefaultDashboard"]);
                            this.subAreaTypeDependencies.add(mscrmSitemapDesigner.NodeTypes.WebResources,
                                ["Url", "Entity", "PassParams", "DefaultDashboard"]);
                            this.subAreaTypeDependencies.add(mscrmSitemapDesigner.NodeTypes.SelectSubArea, [])
                        };
                        PropertiesPaneService.prototype
                            .GetSelectedType = function() { return this.currentSelectedSubAreaNode.SelectedType };
                        PropertiesPaneService.prototype
                            .SetSelectedType = function(selectedType) {
                                this.currentSelectedSubAreaNode.SelectedType = selectedType
                            };
                        PropertiesPaneService.prototype
                            .GetSelectedDashboard = function() {
                                return this.currentSelectedSubAreaNode.DefaultDashboard
                            };
                        PropertiesPaneService.prototype
                            .SetSelectedDashboard = function(value) {
                                this.currentSelectedSubAreaNode.DefaultDashboard = value
                            };
                        PropertiesPaneService.prototype
                            .GetSelectedEntity = function() { return this.currentSelectedSubAreaNode.Entity };
                        PropertiesPaneService.prototype
                            .SetSelectedEntity = function(value) { this.currentSelectedSubAreaNode.Entity = value };
                        PropertiesPaneService.prototype
                            .GetSelectedUrl = function() { return this.currentSelectedSubAreaNode.Url };
                        PropertiesPaneService.prototype
                            .SetSelectedUrl = function(value) { this.currentSelectedSubAreaNode.Url = value };
                        PropertiesPaneService.prototype
                            .GetPassParams = function() { return this.currentSelectedSubAreaNode.PassParams };
                        PropertiesPaneService.prototype
                            .SetPassParams = function(value) { this.currentSelectedSubAreaNode.PassParams = value };
                        PropertiesPaneService.prototype
                            .GetCurrentSelectedSubAreaNode = function() { return this.currentSelectedSubAreaNode };
                        PropertiesPaneService.prototype
                            .GetPersistedSubAreaNode = function() { return this.persistedSubAreaNode };
                        PropertiesPaneService.prototype
                            .SetPersistedSubAreaNode = function(value) { this.persistedSubAreaNode = value };
                        PropertiesPaneService.prototype
                            .SetSelectedIcon = function(value) { this.currentSelectedSubAreaNode.Icon = value };
                        PropertiesPaneService.prototype
                            .GetSelectedIcon = function() { return this.currentSelectedSubAreaNode.Icon };
                        PropertiesPaneService.prototype.ResetSubAreaProperties = function() {
                            this.currentSelectedSubAreaNode.DefaultDashboard = Designers.Common.Utility.StringUtilities
                                .EmptyString;
                            this.currentSelectedSubAreaNode.Entity = Designers.Common.Utility.StringUtilities
                                .EmptyString;
                            this.currentSelectedSubAreaNode.Url = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.currentSelectedSubAreaNode.PassParams = false;
                            this.persistedSubAreaNode = null
                        };
                        PropertiesPaneService.prototype.ClearValueByType = function() {
                            var properties = this.subAreaTypeDependencies.getValue(this.GetSelectedType());
                            this.ClearValuesForSelectedNode(properties, this.currentSelectedSubAreaNode);
                            this.ClearValuesForSelectedNode(properties, this.persistedSubAreaNode)
                        };
                        PropertiesPaneService.prototype
                            .ClearValuesForSelectedNode = function(properties, nodeObject) {
                                angular.forEach(nodeObject,
                                    function(value, key) {
                                        properties.indexOf(key) > -1 && this.ClearValueForKey(key, nodeObject)
                                    },
                                    this)
                            };
                        PropertiesPaneService.prototype.addTitle = function(id, title) {
                            this.nodeTitles.containsKey(id) && this.nodeTitles.remove(id);
                            this.nodeTitles.add(id, title)
                        };
                        PropertiesPaneService.prototype
                            .getTitleList = function(id) { return this.nodeTitles.getValue(id) };
                        PropertiesPaneService.prototype.ClearValueForKey = function(key, nodeObject) {
                            switch (key) {
                            case mscrmSitemapDesigner.SiteMapConstants.SubAreaPropertyPassParams:
                                nodeObject[key] = false;
                                break;
                            case mscrmSitemapDesigner.SiteMapConstants.SubAreaPropertyUrl:
                                this.SetUrlValue();
                                break;
                            default:
                                nodeObject[key] = "";
                                this.flyoutService.resetValidationState(key);
                                break
                            }
                        };
                        PropertiesPaneService.prototype.SetUrlValue = function() {
                            var url = Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(this.persistedSubAreaNode.Url)
                                ? ""
                                : this.persistedSubAreaNode.Url;
                            if (this.GetSelectedType() == mscrmSitemapDesigner.NodeTypes.WebResources) {
                                if (url.indexOf(mscrmSitemapDesigner.SubAreaConstants.WebSourcePrefix) == -1) {
                                    this.persistedSubAreaNode.Url = Designers.Common.Utility.StringUtilities
                                        .EmptyString;
                                    this.currentSelectedSubAreaNode.Url = Designers.Common.Utility.StringUtilities
                                        .EmptyString
                                }
                            } else if (this.GetSelectedType() == mscrmSitemapDesigner.NodeTypes.DefaultDashboard) {
                                this.persistedSubAreaNode.Url = this.urlHelperService.GetDefaultDashboardUrl;
                                this.currentSelectedSubAreaNode.Url = this.urlHelperService.GetDefaultDashboardUrl
                            } else if (this.GetSelectedType() == mscrmSitemapDesigner.NodeTypes.Url) {
                                if (url == this.urlHelperService.GetDefaultDashboardUrl ||
                                    url.indexOf(mscrmSitemapDesigner.SubAreaConstants.WebSourcePrefix) > -1) {
                                    this.persistedSubAreaNode.Url = Designers.Common.Utility.StringUtilities
                                        .EmptyString;
                                    this.currentSelectedSubAreaNode.Url = Designers.Common.Utility.StringUtilities
                                        .EmptyString
                                }
                            } else {
                                this.persistedSubAreaNode.Url = Designers.Common.Utility.StringUtilities.EmptyString;
                                this.currentSelectedSubAreaNode.Url = Designers.Common.Utility.StringUtilities
                                    .EmptyString
                            }
                        };
                        PropertiesPaneService.prototype.ClearValueOnSubAreaTypeSelection = function(areaId, subAreaId) {
                            var objectToBind = this.mscrmSitemapUtilityService.GetSubAreaByAreaId(areaId, subAreaId);
                            this.persistedSubAreaNode = objectToBind;
                            this.ClearValueByType()
                        };
                        PropertiesPaneService.prototype.ShowTypeAheadFlyoutDropdown = function(passedSubAreaType) {
                            var showDropdown = false,
                                passedSubAreaNodeType = parseInt(mscrmSitemapDesigner.NodeTypes[passedSubAreaType]);
                            return this.GetSelectedType() == passedSubAreaNodeType ||
                                this.GetSelectedType() == mscrmSitemapDesigner.NodeTypes.SelectSubArea
                        };
                        PropertiesPaneService.prototype.DisplayURLBasedOnSubAreaType = function(passedSubAreaType) {
                            var passedSubAreaNodeType = parseInt(mscrmSitemapDesigner.NodeTypes[passedSubAreaType]);
                            return this.GetSelectedType() == passedSubAreaNodeType
                        };
                        PropertiesPaneService.prototype
                            .IsIconListDisabled = function() {
                                return this.currentSelectedSubAreaNode.SelectedType ===
                                    mscrmSitemapDesigner.NodeTypes.DefaultDashboard ||
                                    this.currentSelectedSubAreaNode.SelectedType ===
                                    mscrmSitemapDesigner.NodeTypes.Entity
                            };
                        PropertiesPaneService.prototype.SetIconOnSubAreaTypeSelection = function() {
                            this.SetIconBasedOnSubAreaType();
                            this.IsIconListDisabled() &&
                                this.flyoutService
                                .resetValidationState(mscrmSitemapDesigner.NodeTypes[mscrmSitemapDesigner.NodeTypes
                                    .Icon])
                        };
                        PropertiesPaneService.prototype.SetIconBasedOnSubAreaType = function() {
                            switch (this.persistedSubAreaNode.SelectedType) {
                            case mscrmSitemapDesigner.NodeTypes.Entity:
                            case mscrmSitemapDesigner.NodeTypes.DefaultDashboard:
                                this.persistedSubAreaNode.Icon = this.commonVariableService.getOOBEntityImageStripUrl();
                                this.currentSelectedSubAreaNode.Icon = this.commonVariableService
                                    .getDefaultImageIconText();
                                break;
                            case mscrmSitemapDesigner.NodeTypes.Url:
                                if (this.persistedSubAreaNode.Icon ===
                                    this.commonVariableService.getOOBEntityImageStripUrl() ||
                                    this.persistedSubAreaNode.Icon ===
                                    this.commonVariableService
                                    .getDefaultSubAreaImageStripUrl()
                                )
                                    this.persistedSubAreaNode.Icon = this.commonVariableService
                                        .getDefaultURLImageStripUrl();
                                break;
                            case mscrmSitemapDesigner.NodeTypes.WebResources:
                                if (this.persistedSubAreaNode.Icon ===
                                    this.commonVariableService.getOOBEntityImageStripUrl() ||
                                    this.persistedSubAreaNode.Icon ===
                                    this.commonVariableService
                                    .getDefaultSubAreaImageStripUrl()
                                )
                                    this.persistedSubAreaNode.Icon = this.commonVariableService
                                        .getDefaultWebResourceImageStripUrl();
                                break;
                            default:
                                if (Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(this.persistedSubAreaNode.DefaultDashboard) &&
                                    Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(this.persistedSubAreaNode
                                        .Entity))
                                    this.persistedSubAreaNode.Icon = this.commonVariableService
                                        .getDefaultSubAreaImageStripUrl()
                            }
                        };
                        PropertiesPaneService.prototype
                            .isEntityMandatory = function() {
                                return this.GetSelectedType() == mscrmSitemapDesigner.NodeTypes.Entity
                            };
                        PropertiesPaneService.prototype.isURLMandatory = function() {
                            var selectedType = this.GetSelectedType();
                            return selectedType == mscrmSitemapDesigner.NodeTypes.WebResources ||
                                selectedType == mscrmSitemapDesigner.NodeTypes.Url ||
                                selectedType == mscrmSitemapDesigner.NodeTypes.DefaultDashboard
                        };
                        PropertiesPaneService.prototype
                            .isURLOrEntityMandatory = function() {
                                return this.GetSelectedType() == mscrmSitemapDesigner.NodeTypes.SelectSubArea &&
                                    this.isInValidEntity() &&
                                    Designers.Common.Utility.StringUtilities.IsNullOrEmpty(this.GetSelectedUrl())
                            };
                        PropertiesPaneService.prototype
                            .isEntityNotSelected = function() {
                                return this.GetSelectedType() === mscrmSitemapDesigner.NodeTypes.Entity &&
                                    this.isInValidEntity()
                            };
                        PropertiesPaneService.prototype
                            .isInValidEntity = function() {
                                return Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(this.GetPersistedSubAreaNode().Entity)
                            };
                        PropertiesPaneService.prototype
                            .isWebResourceNotSelected = function() {
                                return this.GetSelectedType() === mscrmSitemapDesigner.NodeTypes.WebResources &&
                                    Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(this.GetPersistedSubAreaNode().Url)
                            };
                        PropertiesPaneService.$inject = [
                            Designers.Common.Constants.ServiceNames.UrlHelperService, Designers.Common.Constants
                            .ServiceNames.SitemapDesignerUtilityService, ServiceNames.FlyoutService, ServiceNames
                            .CommonVariableService
                        ];
                        return PropertiesPaneService
                    }();
                common.PropertiesPaneService = PropertiesPaneService;
                angular.module("SitemapService").service(ServiceNames.PropertiesPaneService, PropertiesPaneService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var mscrmSitemapDesigner;
        (function(mscrmSitemapDesigner) {
            var common;
            (function(common) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    SitemapValidationService = function() {
                        function SitemapValidationService(localizationService,
                            dataAccessService,
                            mscrmSitemapUtilityService,
                            commonVariables,
                            localization,
                            filter) {
                            this.localizationService = localizationService;
                            this.dataAccessService = dataAccessService;
                            this.mscrmSitemapUtilityService = mscrmSitemapUtilityService;
                            this.commonVariables = commonVariables;
                            this.localization = localization;
                            this.filter = filter
                        }

                        SitemapValidationService.prototype.ValidateSitemapComponent = function(sitemapComponents) {
                            var errorList = [], errorMessage, areaNodeName, groupNodeName, subAreaNodeName;
                            if (sitemapComponents)
                                for (var area = 0; area < sitemapComponents.length; area++) {
                                    areaNodeName = this.GetAreaNodeName(sitemapComponents[area]);
                                    if (Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(sitemapComponents[area].Id)) {
                                        errorMessage = this.localizationService
                                            .getResourceString(mscrmSitemapDesigner.LocalizationConstants
                                                .Error_ComponentError)
                                            .replace("{0}", this.GetComponentNameForNotificationBarError(areaNodeName));
                                        errorList.push(errorMessage)
                                    }
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(sitemapComponents[area].Group))
                                        for (var group = 0; group < sitemapComponents[area].Group.length; group++) {
                                            groupNodeName = this.GetGroupNodeName(sitemapComponents[area].Group[group]);
                                            if (Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(sitemapComponents[area].Group[group].Id)) {
                                                errorMessage = this.localizationService
                                                    .getResourceString(mscrmSitemapDesigner.LocalizationConstants
                                                        .Error_ComponentError)
                                                    .replace("{0}",
                                                        this
                                                        .GetComponentNameForNotificationBarError(areaNodeName,
                                                            groupNodeName));
                                                errorList.push(errorMessage)
                                            }
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(sitemapComponents[area].Group[group].SubArea))
                                                for (var subarea = 0;
                                                    subarea < sitemapComponents[area].Group[group].SubArea.length;
                                                    subarea++) {
                                                    var currentSubarea = sitemapComponents[area].Group[group]
                                                            .SubArea[subarea],
                                                        isCurrentSubAreaValid = true;
                                                    if (Designers.Common.Utility.ScriptUtilities
                                                        .IsNullOrUndefined(currentSubarea.Id)
                                                    ) isCurrentSubAreaValid = false;
                                                    else if (!this
                                                        .IsValidSubArea(currentSubarea)) isCurrentSubAreaValid = false;
                                                    if (!isCurrentSubAreaValid) {
                                                        subAreaNodeName = this.GetSubAreaNodeName(currentSubarea);
                                                        errorMessage = this.localizationService
                                                            .getResourceString(mscrmSitemapDesigner
                                                                .LocalizationConstants
                                                                .Error_ComponentError)
                                                            .replace("{0}",
                                                                this
                                                                .GetComponentNameForNotificationBarError(areaNodeName,
                                                                    groupNodeName,
                                                                    subAreaNodeName));
                                                        errorList.push(errorMessage)
                                                    }
                                                }
                                        }
                                }
                            return errorList
                        };
                        SitemapValidationService.prototype.IsValidSubArea = function(subarea) {
                            var isValid = false;
                            if (Designers.Common.Utility.StringUtilities.IsNullOrEmpty(subarea.SelectedType) ||
                                subarea
                                .SelectedType ==
                                mscrmSitemapDesigner.NodeTypes
                                .SelectSubArea)
                                isValid = !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subarea.Entity) &&
                                    subarea.Entity !== "" ||
                                    !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subarea.Url) &&
                                    subarea.Url !== "";
                            else if (subarea
                                .SelectedType ==
                                mscrmSitemapDesigner.NodeTypes
                                .Entity)
                                isValid = !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subarea.Entity) &&
                                    subarea.Entity !== "";
                            else
                                isValid = !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subarea.Url) &&
                                    subarea.Url !== "";
                            return isValid
                        };
                        SitemapValidationService.prototype.IsNodeNameEmpty = function(name) {
                            var isEmpty = false;
                            if (Designers.Common.Utility.StringUtilities.IsNullOrEmpty(name)) isEmpty = true;
                            return isEmpty
                        };
                        SitemapValidationService.prototype
                            .GetComponentNameForNotificationBarError =
                            function(areaNodeName, groupNodeName, subAreaNodeName) {
                                if (groupNodeName === void 0) groupNodeName = undefined;
                                if (subAreaNodeName === void 0) subAreaNodeName = undefined;
                                var componentEmptyValue = mscrmSitemapDesigner.SiteMapConstants.OpenRoundBracket +
                                        this.localizationService
                                        .getResourceString(mscrmSitemapDesigner.LocalizationConstants.Empty) +
                                        mscrmSitemapDesigner.SiteMapConstants.CloseRoundBracket,
                                    componentName;
                                if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(groupNodeName) &&
                                    Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(subAreaNodeName)
                                )
                                    componentName = this.IsNodeNameEmpty(areaNodeName)
                                        ? componentEmptyValue
                                        : areaNodeName;
                                else if (Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(subAreaNodeName)
                                )
                                    componentName = (this
                                            .IsNodeNameEmpty(areaNodeName)
                                            ? componentEmptyValue
                                            : areaNodeName) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        (this.IsNodeNameEmpty(groupNodeName) ? componentEmptyValue : groupNodeName);
                                else
                                    componentName = (this
                                            .IsNodeNameEmpty(areaNodeName)
                                            ? componentEmptyValue
                                            : areaNodeName) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        (this.IsNodeNameEmpty(groupNodeName) ? componentEmptyValue : groupNodeName) +
                                        mscrmSitemapDesigner.SiteMapConstants.ComponentNameSeparator +
                                        (this.IsNodeNameEmpty(subAreaNodeName) ? componentEmptyValue : subAreaNodeName);
                                return componentName
                            };
                        SitemapValidationService.prototype
                            .GetAreaNodeName = function(area) { return this.GetNodeName(area) };
                        SitemapValidationService.prototype
                            .GetGroupNodeName = function(group) { return this.GetNodeName(group) };
                        SitemapValidationService.prototype.GetSubAreaNodeName = function(subArea) {
                            var resourceId = subArea.ResourceId,
                                entityname = subArea.Entity,
                                name = Designers.Common.Utility.StringUtilities.EmptyString,
                                isTitlePresent = false;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subArea.Titles) &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subArea.Titles[0]) &&
                                !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(subArea.Titles[0].Title) &&
                                subArea.Titles[0].Title.length > 0) {
                                var currentLCIDNodeIndex = subArea.Titles[0].Title
                                    .indexOf(this.filter(subArea.Titles[0].Title,
                                        { LCID: this.dataAccessService.getLCID() })[0]);
                                if (currentLCIDNodeIndex > -1) {
                                    name = subArea.Titles[0].Title[currentLCIDNodeIndex].Title;
                                    isTitlePresent = true
                                }
                            }
                            if (!isTitlePresent)
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(entityname) &&
                                    !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(entityname)) {
                                    var entitynames = this.dataAccessService.entityMappingList,
                                        allentitynames = this.dataAccessService.allEntityMappingList;
                                    if (entitynames != null &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(entitynames[entityname])
                                    ) name = entitynames[entityname].PluralName;
                                    else if (entitynames != null &&
                                        !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(allentitynames) &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(allentitynames[entityname])
                                    ) name = allentitynames[entityname].PluralName
                                } else if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(resourceId) &&
                                    !Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(resourceId)
                                ) name = this.localizationService.getResourceString(resourceId);
                            return name
                        };
                        SitemapValidationService.prototype.GetNodeName = function(node) {
                            var name = Designers.Common.Utility.StringUtilities.EmptyString;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(node.Titles) &&
                                node.Titles.length > 0) {
                                var currentLCIDNodeIndex = node.Titles[0].Title
                                    .indexOf(this.filter(node.Titles[0]
                                        .Title,
                                        { LCID: this.dataAccessService.getLCID() })[0]);
                                if (currentLCIDNodeIndex > -1) name = node.Titles[0].Title[currentLCIDNodeIndex].Title
                            } else if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(node
                                    .ResourceId)) name = this.localizationService.getResourceString(node.ResourceId);
                            return name
                        };
                        SitemapValidationService.prototype.GetDuplicateNode = function(area, group, subArea, nodetype) {
                            var duplicateNode = null;
                            if (this.commonVariables.GetDraggedSrcArea() != area &&
                                this.mscrmSitemapUtilityService.SitemapAreaMap.containsKey(area.Id)) {
                                var sitemapArea = this.mscrmSitemapUtilityService.SitemapAreaMap.getValue(area.Id);
                                switch (nodetype) {
                                case mscrmSitemapDesigner.SiteMapConstants.Group:
                                    if (sitemapArea.GroupDictionary
                                        .containsKey(group
                                            .Id)) duplicateNode = sitemapArea.GroupDictionary.getValue(group.Id).Group;
                                    break;
                                case mscrmSitemapDesigner.SiteMapConstants.SubArea:
                                    for (var i = 0; i < sitemapArea.Area.Group.length; i++) {
                                        var groupNode = sitemapArea.GroupDictionary
                                                .getValue(sitemapArea.Area.Group[i].Id),
                                            subAreaNode = groupNode.SubAreaDictionary.getValue(subArea.Id);
                                        if (subAreaNode) {
                                            duplicateNode = subAreaNode;
                                            this.commonVariables.SetDuplicateGroup(groupNode.Group);
                                            break
                                        }
                                    }
                                    break
                                }
                            }
                            return duplicateNode
                        };
                        SitemapValidationService.$inject = [
                            ServiceNames.LocalizationService, ServiceNames.SiteMapDesignerDataAccessService,
                            ServiceNames
                            .SitemapDesignerUtilityService, ServiceNames.SitemapDesignerCommonVariableService,
                            ServiceNames
                            .LocalizationService, ServiceNames.FilterService
                        ];
                        return SitemapValidationService
                    }();
                common.SitemapValidationService = SitemapValidationService;
                mscrmSitemapDesigner.SitemapDesignerModule
                    .service(ServiceNames.SitemapDesignerValidationService, SitemapValidationService)
            })(common = mscrmSitemapDesigner.common || (mscrmSitemapDesigner.common = {}))
        })(mscrmSitemapDesigner = Designers.mscrmSitemapDesigner || (Designers.mscrmSitemapDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}))