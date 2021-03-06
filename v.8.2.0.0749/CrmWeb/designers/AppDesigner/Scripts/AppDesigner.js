var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            "use strict";
            var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                AppDesignerBase = function() {
                    function AppDesignerBase(appContextManipulationService, cacheUtilityService) {
                        this.appContextManipulationService = appContextManipulationService;
                        this.cacheUtilityService = cacheUtilityService
                    }

                    Object.defineProperty(AppDesignerBase.prototype,
                        "AppContext",
                        {
                            "get": function() { return this.appContextManipulationService.AppContext },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(AppDesignerBase.prototype,
                        "AppContextModel",
                        {
                            "get": function() { return this.appContextManipulationService.ContextModel },
                            enumerable: true,
                            configurable: true
                        });
                    AppDesignerBase.prototype.UpdateLastSavedAppContext = function() {
                        if (!Designers.Common.Utility.ScriptUtilities
                            .IsNullOrUndefined(this.AppContext.appInfo.webResourceItem
                                .webresourceid))
                            this.AppContext.appInfo.selectedWebResourceId = this.AppContext.appInfo.webResourceItem
                                .webresourceid;
                        this.cacheUtilityService.Add(Designers.Common.Constants.CacheUtilitiesKeys.AppContext,
                            angular.copy(this.AppContext))
                    };
                    AppDesignerBase.prototype
                        .UpdateLastSavedContextModel = function() {
                            this.cacheUtilityService.Add(Designers.Common.Constants.CacheUtilitiesKeys.AppContextModel,
                                angular.copy(this.AppContextModel))
                        };
                    AppDesignerBase
                        .$inject = [ServiceNames.AppContextManipulationService, ServiceNames.CacheUtilityService];
                    return AppDesignerBase
                }();
            AppDesigner.AppDesignerBase = AppDesignerBase
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            "use strict";
            var appUrls = Designers.Common.Constants.AppUrls,
                ModuleNames = Mscrm.Designers.Common.Constants.ModuleNames,
                allModules = [
                    ModuleNames.UIRouterModule, ModuleNames.CommonModule, ModuleNames.AccessibilityHelperModule,
                    ModuleNames.NGAriaModule
                ],
                allModulesWithoutAccessibility = [ModuleNames.UIRouterModule, ModuleNames.CommonModule],
                ngAriaConfigFunction = function($ariaProvider) {
                    $ariaProvider.config({ bindKeydown: false, tabindex: false })
                },
                isIE10 = window.navigator.userAgent.indexOf("MSIE 10") > 0,
                modules = isIE10 ? allModulesWithoutAccessibility : allModules,
                configFunction = isIE10 ? null : ngAriaConfigFunction;
            AppDesigner.AppDesignerModule = angular.module("mscrmAppDesigner", modules, configFunction);
            AppDesigner.AppDesignerModule.config([
                "$stateProvider", "$urlRouterProvider", "$controllerProvider",
                function($stateProvider, $urlRouterProvider) {
                    $stateProvider.state(Mscrm.Designers.Common.Constants.AppUrlStateNames.createNewApp,
                    {
                        url: appUrls.getUrl(appUrls.createApp),
                        templateUrl: "AppDesigner/AppWizard/Views/AppWizard.html?v=8200000749"
                    }).state(Mscrm.Designers.Common.Constants.AppUrlStateNames.appDesignerCanvas,
                    {
                        url: appUrls.getUrl(appUrls.appDesigner),
                        templateUrl: "AppDesigner/Common/Views/ApplicationShell.html?v=8200000749",
                        controller: "mscrmAppController",
                        controllerAs: "appController"
                    })
                }
            ])
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            (function(FormType) {
                FormType[FormType["Main"] = 2] = "Main";
                FormType[FormType["Quick"] = 6] = "Quick";
                FormType[FormType["QuickCreate"] = 7] = "QuickCreate"
            })(AppDesigner.FormType || (AppDesigner.FormType = {}));
            var FormType = AppDesigner.FormType;
            (function(ViewType) {
                ViewType[ViewType["Public"] = 0] = "Public";
                ViewType[ViewType["AdvancedFind"] = 1] = "AdvancedFind";
                ViewType[ViewType["Associated"] = 2] = "Associated";
                ViewType[ViewType["Lookup"] = 64] = "Lookup"
            })(AppDesigner.ViewType || (AppDesigner.ViewType = {}));
            var ViewType = AppDesigner.ViewType;
            (function(AppDesignerTab) {
                AppDesignerTab[AppDesignerTab["Components"] = 0] = "Components";
                AppDesignerTab[AppDesignerTab["Properties"] = 1] = "Properties";
                AppDesignerTab[AppDesignerTab["Dependencies"] = 2] = "Dependencies"
            })(AppDesigner.AppDesignerTab || (AppDesigner.AppDesignerTab = {}));
            var AppDesignerTab = AppDesigner.AppDesignerTab;
            (function(SelectionType) {
                SelectionType[SelectionType["SingleSelection"] = 0] = "SingleSelection";
                SelectionType[SelectionType["MultiSelection"] = 1] = "MultiSelection";
                SelectionType[SelectionType["NoSelection"] = 2] = "NoSelection"
            })(AppDesigner.SelectionType || (AppDesigner.SelectionType = {}));
            var SelectionType = AppDesigner.SelectionType;
            (function(ComponentListType) {
                ComponentListType[ComponentListType["EntityList"] = 0] = "EntityList";
                ComponentListType[ComponentListType["DashboardList"] = 1] = "DashboardList";
                ComponentListType[ComponentListType["FormList"] = 2] = "FormList";
                ComponentListType[ComponentListType["ChartList"] = 3] = "ChartList";
                ComponentListType[ComponentListType["ViewList"] = 4] = "ViewList";
                ComponentListType[ComponentListType["BPFList"] = 5] = "BPFList";
                ComponentListType[ComponentListType["SiteMapList"] = 6] = "SiteMapList";
                ComponentListType[ComponentListType["AddComponentsList"] = 7] = "AddComponentsList"
            })(AppDesigner.ComponentListType || (AppDesigner.ComponentListType = {}));
            var ComponentListType = AppDesigner.ComponentListType;
            (function(ActionType) {
                ActionType[ActionType["New"] = 1] = "New";
                ActionType[ActionType["Edit"] = 2] = "Edit"
            })(AppDesigner.ActionType || (AppDesigner.ActionType = {}));
            var ActionType = AppDesigner.ActionType;
            (function(AppState) {
                AppState[AppState["Published"] = 0] = "Published";
                AppState[AppState["Draft"] = 1] = "Draft"
            })(AppDesigner.AppState || (AppDesigner.AppState = {}));
            var AppState = AppDesigner.AppState,
                ComponentState = function() {
                    function ComponentState() {}

                    ComponentState.GetComponentState = function(status) {
                        switch (status) {
                        case AppState.Published:
                            return "AppDesigner.Published";
                        case AppState.Draft:
                            return "AppDesigner.Draft"
                        }
                    };
                    return ComponentState
                }();
            AppDesigner.ComponentState = ComponentState;
            var DependencyTree = function() {
                function DependencyTree() {}

                Object.defineProperty(DependencyTree,
                    "BPFTree",
                    { "get": function() { return "bpfTree" }, enumerable: true, configurable: true });
                Object.defineProperty(DependencyTree,
                    "SitemapTree",
                    { "get": function() { return "sitemapTree" }, enumerable: true, configurable: true });
                Object.defineProperty(DependencyTree,
                    "DashboardTree",
                    { "get": function() { return "dashboardTree" }, enumerable: true, configurable: true });
                Object.defineProperty(DependencyTree,
                    "EntityTree",
                    { "get": function() { return "entityTree" }, enumerable: true, configurable: true });
                return DependencyTree
            }();
            AppDesigner.DependencyTree = DependencyTree;
            var AppDesignerServiceNames = function() {
                function AppDesignerServiceNames() {}

                Object.defineProperty(AppDesignerServiceNames,
                    "AppDesignerPerfKpisService",
                    {
                        "get": function() { return "mscrmAppDesignerPerfKpisService" },
                        enumerable: true,
                        configurable: true
                    });
                Object.defineProperty(AppDesignerServiceNames,
                    "PageLoadService",
                    { "get": function() { return "mscrmPageLoadService" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerServiceNames,
                    "CategorizationService",
                    {
                        "get": function() { return "mscrmCategorizationService" },
                        enumerable: true,
                        configurable:
                            true
                    });
                Object.defineProperty(AppDesignerServiceNames,
                    "ValidationService",
                    { "get": function() { return "mscrmValidationService" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerServiceNames,
                    "MetaDataService",
                    { "get": function() { return "mscrmMetadataService" }, enumerable: true, configurable: true });
                return AppDesignerServiceNames
            }();
            AppDesigner.AppDesignerServiceNames = AppDesignerServiceNames;
            var AppDesignerTraceItems = function() {
                function AppDesignerTraceItems() {}

                Object.defineProperty(AppDesignerTraceItems,
                    "BusinessProcesses",
                    { "get": function() { return "GetAllBusinessProcesses" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerTraceItems,
                    "ImageWebResourcesUtil",
                    { "get": function() { return "GetImageWebResourcesUtil" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerTraceItems,
                    "AllSitemaps",
                    { "get": function() { return "GetAllSitemaps" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerTraceItems,
                    "AllDashboards",
                    { "get": function() { return "GetAllDashboards" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerTraceItems,
                    "AllFormsForEntity",
                    { "get": function() { return "GetAllFormsForEntity" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerTraceItems,
                    "AllViewsForEntity",
                    { "get": function() { return "GetAllViewsForEntity" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerTraceItems,
                    "AllChartsForEntity",
                    { "get": function() { return "GetAllChartsForEntity" }, enumerable: true, configurable: true });
                return AppDesignerTraceItems
            }();
            AppDesigner.AppDesignerTraceItems = AppDesignerTraceItems;
            (function(CommandBarAddFlyoutMenu) {
                CommandBarAddFlyoutMenu[CommandBarAddFlyoutMenu["AddEntity"] = 1] = "AddEntity";
                CommandBarAddFlyoutMenu[CommandBarAddFlyoutMenu["AddDashboard"] = 2] = "AddDashboard";
                CommandBarAddFlyoutMenu[CommandBarAddFlyoutMenu["AddBPF"] = 3] = "AddBPF";
                CommandBarAddFlyoutMenu[CommandBarAddFlyoutMenu["AddViews"] = 4] = "AddViews";
                CommandBarAddFlyoutMenu[CommandBarAddFlyoutMenu["AddForm"] = 5] = "AddForm";
                CommandBarAddFlyoutMenu[CommandBarAddFlyoutMenu["AddChart"] = 6] = "AddChart"
            })(AppDesigner.CommandBarAddFlyoutMenu || (AppDesigner.CommandBarAddFlyoutMenu = {}));
            var CommandBarAddFlyoutMenu = AppDesigner.CommandBarAddFlyoutMenu;
            (function(CategoryState) {
                CategoryState[CategoryState["Expanded"] = 0] = "Expanded";
                CategoryState[CategoryState["Collapsed"] = 1] = "Collapsed"
            })(AppDesigner.CategoryState || (AppDesigner.CategoryState = {}));
            var CategoryState = AppDesigner.CategoryState;
            (function(EntitySwimlaneArtifactNodeIndex) {
                EntitySwimlaneArtifactNodeIndex[EntitySwimlaneArtifactNodeIndex["Form"] = 0] = "Form";
                EntitySwimlaneArtifactNodeIndex[EntitySwimlaneArtifactNodeIndex["View"] = 1] = "View";
                EntitySwimlaneArtifactNodeIndex[EntitySwimlaneArtifactNodeIndex["Chart"] = 2] = "Chart"
            })(AppDesigner.EntitySwimlaneArtifactNodeIndex || (AppDesigner.EntitySwimlaneArtifactNodeIndex = {}));
            var EntitySwimlaneArtifactNodeIndex = AppDesigner.EntitySwimlaneArtifactNodeIndex,
                KeyboardShortcuts = function() {
                    function KeyboardShortcuts() {}

                    Object.defineProperty(KeyboardShortcuts,
                        "GlobalSaveKeyCode1",
                        { "get": function() { return "CTRL+S" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "GlobalSaveKeyCode2",
                        { "get": function() { return "SHIFT+F12" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "GlobalSaveAndCloseKeyCode",
                        { "get": function() { return "CTRL+ALT+S" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "GlobalValidateKeyCode",
                        { "get": function() { return "CTRL+ALT+V" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "GlobalPublishKeyCode",
                        { "get": function() { return "CTRL+ALT+P" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "CanvasAddKeyCode",
                        { "get": function() { return "SHIFT+N" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "CanvasRemoveKeyCode",
                        { "get": function() { return "SHIFT+R" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "CanvasEditKeyCode",
                        { "get": function() { return "SHIFT+E" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "ComponentsTabKeyCode",
                        { "get": function() { return "ALT+SHIFT+C" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "PropertyTabKeyCode",
                        { "get": function() { return "ALT+SHIFT+P" }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyboardShortcuts,
                        "DependencyTabKeyCode",
                        { "get": function() { return "ALT+SHIFT+R" }, enumerable: true, configurable: true });
                    return KeyboardShortcuts
                }();
            AppDesigner.KeyboardShortcuts = KeyboardShortcuts;
            var AppDesignerScenarios = function() {
                function AppDesignerScenarios() {}

                Object.defineProperty(AppDesignerScenarios,
                    "CreateApp",
                    { "get": function() { return "CreateApp" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "UpdateApp",
                    { "get": function() { return "UpdateApp" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "LoadApp",
                    { "get": function() { return "LoadApp" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "DisplayComponentsList",
                    { "get": function() { return "DisplayComponentsList" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "UpdateCanvasPane",
                    { "get": function() { return "UpdateCanvasPane" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "AddRemoveComponentslist",
                    { "get": function() { return "AddRemoveComponentslist" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "OpenEditWindow",
                    { "get": function() { return "OpenEditWindow" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "Validate",
                    { "get": function() { return "Validate" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "GetLatestDependencies",
                    { "get": function() { return "GetLatestDependencies" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "Save",
                    { "get": function() { return "Save" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "Publish",
                    { "get": function() { return "Publish" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "UpdateAppInfo",
                    { "get": function() { return "UpdateAppInfo" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "RetrieveApp",
                    { "get": function() { return "RetrieveApp" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "LoadEntityDefinitions",
                    { "get": function() { return "LoadEntityDefinitions" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "GetProcessNameForBusinessProcess",
                    {
                        "get": function() { return "GetProcessNameForBusinessProcess" },
                        enumerable: true,
                        configurable: true
                    });
                Object.defineProperty(AppDesignerScenarios,
                    "AppIRetrieveRequiredComponents",
                    {
                        "get": function() { return "AppIRetrieveRequiredComponents" },
                        enumerable: true,
                        configurable: true
                    });
                Object.defineProperty(AppDesignerScenarios,
                    "RemoveItemFromCategorizedList",
                    {
                        "get": function() { return "RemoveItemFromCategorizedList" },
                        enumerable: true,
                        configurable: true
                    });
                Object.defineProperty(AppDesignerScenarios,
                    "getAllBusinessProcesses",
                    { "get": function() { return "getAllBusinessProcesses" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "getAllDashboards",
                    { "get": function() { return "getAllDashboards" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "getAllSitemaps",
                    { "get": function() { return "getAllSitemaps" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "getAllFormsForEntity",
                    { "get": function() { return "getAllFormsForEntity" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "getAllViewsForEntity",
                    { "get": function() { return "getAllViewsForEntity" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "getAllChartsForEntity",
                    { "get": function() { return "getAllChartsForEntity" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "GetImageWebResourcesUtil",
                    { "get": function() { return "GetImageWebResourcesUtil" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "SaveAppComponents",
                    { "get": function() { return "SaveAppComponents" }, enumerable: true, configurable: true });
                Object.defineProperty(AppDesignerScenarios,
                    "PublishAppModule",
                    { "get": function() { return "PublishAppModule" }, enumerable: true, configurable: true });
                return AppDesignerScenarios
            }();
            AppDesigner.AppDesignerScenarios = AppDesignerScenarios;
            var EventStatus = function() {
                function EventStatus() {}

                Object.defineProperty(EventStatus,
                    "Success",
                    { "get": function() { return "Success" }, enumerable: true, configurable: true });
                Object.defineProperty(EventStatus,
                    "Fail",
                    { "get": function() { return "Fail" }, enumerable: true, configurable: true });
                return EventStatus
            }();
            AppDesigner.EventStatus = EventStatus;
            var SupportedViews = function() {
                function SupportedViews() {}

                Object.defineProperty(SupportedViews,
                    "SupportedViewsList",
                    {
                        "get": function() {
                            var supportedViewsList = [];
                            supportedViewsList.push(ViewType.AdvancedFind);
                            supportedViewsList.push(ViewType.Associated);
                            supportedViewsList.push(ViewType.Lookup);
                            supportedViewsList.push(ViewType.Public);
                            return supportedViewsList
                        },
                        enumerable: true,
                        configurable: true
                    });
                return SupportedViews
            }();
            AppDesigner.SupportedViews = SupportedViews;
            var SupportedForms = function() {
                function SupportedForms() {}

                Object.defineProperty(SupportedForms,
                    "SupportedFormsList",
                    {
                        "get": function() {
                            var supportedFormsList = [];
                            supportedFormsList.push(FormType.Main);
                            supportedFormsList.push(FormType.Quick);
                            supportedFormsList.push(FormType.QuickCreate);
                            return supportedFormsList
                        },
                        enumerable: true,
                        configurable: true
                    });
                return SupportedForms
            }();
            AppDesigner.SupportedForms = SupportedForms
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
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
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    StateRouteParams = Mscrm.Designers.Common.Constants.StateRouteParams,
                    AppContextNodeNames = Mscrm.Designers.Common.Constants.AppContextNodeNames,
                    StringUtilities = Mscrm.Designers.Common.Utility.StringUtilities,
                    AppController = function(_super) {
                        __extends(AppController, _super);

                        function AppController(scope,
                            window,
                            stateParamsService,
                            appContextManipulationService,
                            perfService,
                            appDesignerPerfKpisService,
                            traceUtility,
                            modalDialogService,
                            legacyDesignerService,
                            localizationService,
                            dateTimeFormatService,
                            categorizationService,
                            appInterfaceService,
                            composabiityService,
                            componentService,
                            pageLoadService,
                            notificationService,
                            flyoutService,
                            errorUtilityService,
                            metadataService,
                            cacheUtilityService) {
                            _super.call(this, appContextManipulationService, cacheUtilityService);
                            this.scope = scope;
                            this.window = window;
                            this.stateParamsService = stateParamsService;
                            this.appContextManipulationService = appContextManipulationService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.traceUtility = traceUtility;
                            this.modalDialogService = modalDialogService;
                            this.legacyDesignerService = legacyDesignerService;
                            this.localizationService = localizationService;
                            this.dateTimeFormatService = dateTimeFormatService;
                            this.categorizationService = categorizationService;
                            this.appInterfaceService = appInterfaceService;
                            this.composabiityService = composabiityService;
                            this.componentService = componentService;
                            this.pageLoadService = pageLoadService;
                            this.notificationService = notificationService;
                            this.flyoutService = flyoutService;
                            this.errorUtilityService = errorUtilityService;
                            this.metadataService = metadataService;
                            this.cacheUtilityService = cacheUtilityService;
                            this.appId = stateParamsService[StateRouteParams.AppId];
                            Designers.Common.Utility.StringUtilities.IsNullOrEmpty(this.appId) &&
                                this.errorUtilityService
                                .RedirectToErrorHandlerPage(this.localizationService
                                    .getResourceString("AppDesigner.AppId"),
                                    Designers.Common.Constants.ErrorCode.MissingDataInUrl);
                            this.pageLoadService.getCurrentAppState() ===
                                Mscrm.Designers.Common.Constants.AppUrlStateNames.appDesignerCanvas &&
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.fullLoadAppDesigner))
                                .start(AppDesigner.Services.KpiDisplayName.fullLoadAppDesignerCanvasPage);
                            this.appContextManipulationService.InitializeAppContextModelData();
                            this.InitUserInterfaceComponents();
                            this.LoadAppData();
                            this.SetupEvents()
                        }

                        Object.defineProperty(AppController.prototype,
                            "AppLastSavedOnText",
                            {
                                "get": function() {
                                    var appInfoTimeStamp = this.dateTimeFormatService
                                        .getShortDateTimeString(this.AppContext.appInfo.lastModifiedOn);
                                    return this.localizationService.getResourceString("AppDesigner.LastSavedOn")
                                        .replace("{0}", appInfoTimeStamp)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(AppController.prototype,
                            "AppInfoStatus",
                            {
                                "get": function() {
                                    return this.localizationService.getResourceString(this.AppContext.appInfo.status)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        AppController.prototype.InitUserInterfaceComponents = function() {
                            this.scope.contextModel = this.appContextManipulationService.ContextModel;
                            this.scope.contextModel.selectedTab = AppDesigner.AppDesignerTab.Components
                        };
                        AppController.prototype.LoadAppData = function() {
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.LoadApp;
                            this.modalDialogService.open(new Designers.Common.ModalDialog
                                .ProgressDialogParams(this.localizationService
                                    .getResourceString("PageLoadingMessage")));
                            var composableContext = this.composabiityService
                                .getComposableContext(Designers.Common.Constants.DesignerName.SiteMapDesigner);
                            if (this.scope.contextModel &&
                                composableContext &&
                                composableContext.GetComposableContextParams()) {
                                var comDictionary = composableContext.GetComposableContextParams(),
                                    siteMapId = comDictionary
                                        .getValue(Mscrm.Designers.Common.Constants.ComposableContextParam.SitemapId);
                                siteMapId &&
                                    this.componentService
                                    .AddSiteMap(new AppDesigner.Models.SelectableArtifactInfo(siteMapId, ""));
                                this.modalDialogService.close()
                            } else
                                this.appContextManipulationService.GetEntityListWrapper().then(function(response) {
                                        this.loadAppContext(this.appId);
                                        this.traceUtility.LogInfo(Designers.Common.Tracing.TraceComponent.AppDesigner,
                                            "LoadEntityDefinitions",
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData("Successfully Retrieved Entity Definitions"))
                                    }.bind(this),
                                    function(error) {
                                        this.modalDialogService.close();
                                        this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.AppDesigner,
                                            "LoadEntityDefinitions",
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData("Entity Definitions Retrieval Failed"))
                                    }.bind(this))
                        };
                        AppController.prototype.loadAppContext = function(appId) {
                            var _this = this;
                            if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(this.AppContext.appInfo.appId)) {
                                this.modalDialogService.close();
                                return
                            }
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.LoadApp;
                            this.AppContext.appInfo.appId = this.appId;
                            if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(appId)) {
                                var appGuid = new Designers.Common.Guid(appId);
                                this.appInterfaceService
                                    .RetrieveApp(appGuid,
                                        function(response) { _this.onRetrieveAppSuccess(response) },
                                        function(response) { _this.onRetrieveAppFailure(response) })
                            }
                        };
                        AppController.prototype.ApplicationShellClick = function() { this.flyoutService.Hide() };
                        AppController.prototype.SetupEvents = function() {
                            this.window.AppDesignerCallback = this.UpdateCanvasPane.bind(this);
                            this.window.AppDesignerOpenNewEditorCallback = this.HandleNewEditorCallback.bind(this)
                        };
                        AppController.prototype.UpdateCanvasPaneForProcessDesigner = function(itemData, shouldDelete) {
                            var masterList = this.appContextManipulationService.ContextModel.businessProcesses
                                    .masterList,
                                selectedList = this.appContextManipulationService.ContextModel.businessProcesses
                                    .selectedList;
                            if (shouldDelete) {
                                this.DeleteArtifactFromContextModel(masterList, selectedList, itemData.id);
                                this.TriggerScopeDigestPhase()
                            } else if (!this.UpdateContextModelListsforArtifact(masterList, selectedList, itemData)) {
                                this.legacyDesignerService.OpenBusinessProcessEditor(itemData.id);
                                this.appContextManipulationService.getProcessNameForBusinessProcess(itemData.id)
                                    .then(function(data) { masterList.push(data) }.bind(this))
                            } else this.TriggerScopeDigestPhase()
                        };
                        AppController.prototype
                            .DeleteArtifactFromContextModel = function(masterList, selectedList, artifactId) {
                                for (var i = 0; i < masterList.length; i++) {
                                    selectedList[i] && selectedList[i].id === artifactId && selectedList.splice(i, 1);
                                    masterList[i] && masterList[i].id === artifactId && masterList.splice(i, 1)
                                }
                            };
                        AppController.prototype
                            .UpdateContextModelListsforArtifact = function(masterList, selectedList, editedItem) {
                                for (var isPresentInMasterList = false, i = 0; i < masterList.length; i++) {
                                    if (selectedList[i] && selectedList[i].id === editedItem.id
                                    ) selectedList[i].displayName = editedItem.displayName;
                                    if (!isPresentInMasterList && masterList[i].id === editedItem.id) {
                                        masterList[i].displayName = editedItem.displayName;
                                        masterList[i].description = editedItem.description;
                                        isPresentInMasterList = true
                                    }
                                }
                                return isPresentInMasterList
                            };
                        AppController.prototype
                            .AddElementsWithTypeInContextModelList =
                            function(masterList, selectedList, addedItem, artifactNode) {
                                var artifactNodeType = artifactNode.displayName;
                                if (artifactNodeType == CommonModel.ComponentTypeName.FORM ||
                                    artifactNodeType == CommonModel.ComponentTypeName.VIEW) {
                                    var dashBoardItem = new AppDesigner.Models
                                        .DashboardItem(addedItem.id, addedItem.displayName, addedItem.formType);
                                    if (artifactNodeType == CommonModel.ComponentTypeName.VIEW
                                    ) dashBoardItem.formType = addedItem.querytype;
                                    dashBoardItem.description = addedItem.description;
                                    masterList.push(dashBoardItem);
                                    this.categorizationService.populateTypesList(artifactNodeType, masterList)
                                }
                            };
                        AppController.prototype
                            .TriggerScopeDigestPhase = function() { !this.scope.$$phase && this.scope.$digest() };
                        AppController.prototype
                            .TriggerScopeApplyPhase = function() { !this.scope.$$phase && this.scope.$apply() };
                        AppController.prototype
                            .UpdateCanvasPane = function(itemData, artifactNodetype, entityid, shouldDelete) {
                                this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.UpdateCanvasPane;
                                var masterList, selectedList;
                                switch (artifactNodetype) {
                                case CommonModel.ComponentTypeName.DASHBOARD:
                                    masterList = this.scope.contextModel.dashboards.masterList;
                                    selectedList = this.scope.contextModel.dashboards.selectedList;
                                    if (!this.UpdateContextModelListsforArtifact(masterList, selectedList, itemData)) {
                                        var selectableItem = new AppDesigner.Models
                                            .SelectableArtifactInfo(itemData.id, itemData.displayName);
                                        selectableItem.description = itemData.description;
                                        masterList.push(selectableItem)
                                    }
                                    this.TriggerScopeDigestPhase();
                                    break;
                                case CommonModel.ComponentTypeName.FORM:
                                case CommonModel.ComponentTypeName.VIEW:
                                case CommonModel.ComponentTypeName.CHART:
                                    this.UpdateEntityArtifacts(itemData, artifactNodetype, entityid);
                                    break;
                                case CommonModel.ComponentTypeName.ENTITY:
                                    this.UpdateEntityMetadata(itemData, entityid);
                                    break;
                                case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                    this.UpdateCanvasPaneForProcessDesigner(itemData, shouldDelete)
                                }
                            };
                        AppController.prototype.UpdateEntityArtifacts = function(itemData, artifactNodetype, entityid) {
                            var masterList,
                                selectedList,
                                index = this.scope.contextModel.entityArea.entityList.indexOf(entityid);
                            if (index > -1) {
                                var artifactNode = this.scope.contextModel.entityArea.entitySwimLanes[index]
                                    .getArtifactNode(artifactNodetype);
                                masterList = artifactNode.masterList;
                                selectedList = artifactNode.selectedList;
                                if (!this.UpdateContextModelListsforArtifact(masterList, selectedList, itemData))
                                    if (artifactNodetype == CommonModel.ComponentTypeName.CHART) {
                                        var selectableItem = new AppDesigner.Models
                                            .SelectableArtifactInfo(itemData.id, itemData.displayName);
                                        selectableItem.description = itemData.description;
                                        masterList.push(selectableItem)
                                    } else
                                        (artifactNodetype == CommonModel.ComponentTypeName.FORM ||
                                                artifactNodetype == CommonModel.ComponentTypeName.VIEW) &&
                                            this
                                            .AddElementsWithTypeInContextModelList(masterList,
                                                selectedList,
                                                itemData,
                                                artifactNode);
                                this.TriggerScopeDigestPhase()
                            }
                        };
                        AppController.prototype.UpdateEntityMetadata = function(itemData, entityid) {
                            var entityMetadata;
                            if (itemData.params.isNewEntity)
                                this.appContextManipulationService.LoadEntityDefinitions(itemData.params.logicalName)
                                    .then(function(response) { this.TriggerScopeDigestPhase() }.bind(this));
                            else {
                                entityMetadata = this.appContextManipulationService.entityMetadataMap[entityid];
                                if (entityMetadata) {
                                    entityMetadata.displayName = itemData.displayName;
                                    this.TriggerScopeDigestPhase()
                                }
                            }
                        };
                        AppController.prototype.HandleNewEditorCallback = function(data) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(data))
                                switch (data.componentType) {
                                case CommonModel.ComponentTypeCode.SystemForm:
                                    this.legacyDesignerService.OpenDashboardEditor(null, data.layoutId);
                                    break;
                                case CommonModel.ComponentTypeCode.BPF:
                                    this.appContextManipulationService.ContextModel.businessProcesses.masterList
                                        .push(data.retObj);
                                    this.legacyDesignerService.OpenBusinessProcessEditor(data.retObj.id)
                                }
                            this.modalDialogService.close();
                            this.TriggerScopeApplyPhase()
                        };
                        AppController.prototype.onRetrieveAppSuccess = function(response) {
                            var xml = response;
                            this.parseAppComponentRetrieveXML(xml);
                            this.AppContext.isAppLoadComplete = true;
                            this.traceUtility.LogInfo(Designers.Common.Tracing.TraceComponent.AppDesigner,
                                "RetrieveAppCallSuccess",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Success +
                                    ": Successfully Retrieved App Component with AppID:" +
                                    this.AppContext.appInfo.appId));
                            this.traceUtility.Scenario = "";
                            this.modalDialogService.close();
                            this.TriggerScopeApplyPhase();
                            this.componentService.RetrieveAppSiteMap()
                        };
                        AppController.prototype.onRetrieveAppFailure = function(error) {
                            this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.AppDesigner,
                                "RetrieveAppCallFailure",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Fail +
                                    ": Failed to Retrieve App Components. " +
                                    error.toString()));
                            this.traceUtility.Scenario = Designers.Common.Utility.StringUtilities.EmptyString;
                            this.errorUtilityService
                                .RedirectToErrorHandlerPage(this.localizationService
                                    .getResourceString("AppDesigner.Error_ServerDown"),
                                    Designers.Common.Constants.ErrorCode.CRMError)
                        };
                        AppController.prototype.parseAppComponentRetrieveXML = function(xml) {
                            var appContextNode = this
                                .getElementsbyTagNameGenericXml(xml, "b:", AppContextNodeNames.Value);
                            if (!Sdk.Xml.isNodeNull(appContextNode)) {
                                var appInfoNode = this
                                        .getElementsbyTagNameGeneric(appContextNode, "a:", AppContextNodeNames.AppInfo),
                                    webResourceNode = this
                                        .getElementsbyTagNameGeneric(appContextNode,
                                            "c:",
                                            AppContextNodeNames.WebResourceInfo),
                                    bpfNode = this
                                        .getElementsbyTagNameGeneric(appContextNode, "a:", AppContextNodeNames.BPFIds),
                                    dashboardsNode = this
                                        .getElementsbyTagNameGeneric(appContextNode,
                                            "a:",
                                            AppContextNodeNames.DashboardIds),
                                    appEntityInfoNode = this
                                        .getElementsbyTagNameGeneric(appContextNode,
                                            "a:",
                                            AppContextNodeNames.AppEntityInfo);
                                this.AppContext.appInfo.appId = this
                                    .getElementTextContent(this
                                        .getElementsbyTagNameGeneric(appInfoNode, "c:", AppContextNodeNames.AppId)
                                        .firstChild);
                                this.AppContext.appInfo.description = this
                                    .getElementTextContent(this
                                        .getElementsbyTagNameGeneric(appInfoNode, "c:", AppContextNodeNames.Description)
                                        .firstChild);
                                this.AppContext.appInfo
                                    .lastModifiedOn = new Date(this
                                        .getElementTextContent(this
                                            .getElementsbyTagNameGeneric(appInfoNode,
                                                "c:",
                                                AppContextNodeNames.LastModifiedOn).firstChild));
                                this.AppContext.appInfo.appUrl = this
                                    .getElementTextContent(this
                                        .getElementsbyTagNameGeneric(appInfoNode, "c:", AppContextNodeNames.AppUrl)
                                        .firstChild);
                                this.AppContext.appInfo.status = Mscrm.Designers.AppDesigner.ComponentState
                                    .GetComponentState(parseInt(this
                                        .getElementTextContent(this
                                            .getElementsbyTagNameGeneric(appInfoNode, "c:", AppContextNodeNames.Status)
                                            .firstChild)));
                                this.AppContext.appInfo.title = this
                                    .getElementTextContent(this
                                        .getElementsbyTagNameGeneric(appInfoNode, "c:", AppContextNodeNames.Title)
                                        .firstChild);
                                this.AppContext.appInfo.uniqueName = this
                                    .getElementTextContent(this
                                        .getElementsbyTagNameGeneric(appInfoNode, "c:", AppContextNodeNames.UniqueName)
                                        .firstChild);
                                this.AppContext.appInfo.selectedWebResourceId = this
                                    .getElementTextContent(this
                                        .getElementsbyTagNameGeneric(webResourceNode, "c:", AppContextNodeNames.Guid)
                                        .firstChild);
                                this.AppContext.appInfo.thumbnailContext
                                    .useDefaultThumbnail = this.AppContext.appInfo.selectedWebResourceId ==
                                    Designers.Common.Constants.Defaults.DefaultAppModuleImageWebResourceId;
                                if (this.AppContext.appInfo.thumbnailContext
                                    .thumbnailListAvailable)
                                    this.AppContext.appInfo.webResourceItem = this.metadataService
                                        .getWebResourceFromWebResourceList(this.AppContext.appInfo
                                            .selectedWebResourceId);
                                var SiteMapId = this
                                    .getElementTextContent(this
                                        .getElementsbyTagNameGeneric(appContextNode,
                                            "a:",
                                            AppContextNodeNames.SitemapId)
                                        .firstChild);
                                if (!StringUtilities.IsNullOrEmpty(SiteMapId)) {
                                    this.appContextManipulationService.ContextModel.siteMaps.selectedList = [];
                                    this.appContextManipulationService
                                        .AddComponentInApp(this.appContextManipulationService.ContextModel.siteMaps,
                                            new AppDesigner.Models.SelectableArtifactInfo(SiteMapId, ""),
                                            false)
                                }
                                for (var bpfChildNode = 0;
                                    bpfChildNode < bpfNode.childNodes.length;
                                    bpfChildNode++
                                )
                                    this.appContextManipulationService
                                        .AddComponentInApp(this.appContextManipulationService.ContextModel
                                            .businessProcesses,
                                            new AppDesigner.Models
                                            .SelectableArtifactInfo(this
                                                .getElementTextContent(bpfNode.childNodes[bpfChildNode].firstChild),
                                                ""),
                                            false);
                                for (var dashboardChildNode = 0;
                                    dashboardChildNode < dashboardsNode.childNodes.length;
                                    dashboardChildNode++)
                                    this.appContextManipulationService
                                        .AddComponentInApp(this.appContextManipulationService.ContextModel.dashboards,
                                            new AppDesigner.Models
                                            .SelectableArtifactInfo(this
                                                .getElementTextContent(dashboardsNode.childNodes[dashboardChildNode]
                                                    .firstChild),
                                                ""),
                                            false);
                                if (appEntityInfoNode.childNodes != undefined)
                                    for (var appEnityInfoChildNode = 0;
                                        appEnityInfoChildNode < appEntityInfoNode.childNodes.length;
                                        appEnityInfoChildNode++) {
                                        var appEntityInfoChild = appEntityInfoNode.childNodes[appEnityInfoChildNode],
                                            entityId = this
                                                .getElementTextContent(this
                                                    .getElementsbyTagNameGeneric(appEntityInfoChild,
                                                        "c:",
                                                        AppContextNodeNames.EntityId).firstChild);
                                        this.appContextManipulationService
                                            .AddEntityComponentInApp(this.appContextManipulationService
                                                .entityMetadataMap[entityId],
                                                false);
                                        for (var chartsNode = this
                                                     .getElementsbyTagNameGeneric(appEntityInfoChild,
                                                         "c:",
                                                         AppContextNodeNames.ChartIds),
                                            formsNode = this
                                                .getElementsbyTagNameGeneric(appEntityInfoChild,
                                                    "c:",
                                                    AppContextNodeNames.Forms),
                                            viewsNode = this
                                                .getElementsbyTagNameGeneric(appEntityInfoChild,
                                                    "c:",
                                                    AppContextNodeNames.Views),
                                            index = this.appContextManipulationService.ContextModel.entityArea
                                                .entityList
                                                .indexOf(entityId),
                                            chartsChildNode = 0;
                                            chartsChildNode < chartsNode.childNodes.length;
                                            chartsChildNode++)
                                            this.appContextManipulationService
                                                .AddComponentInApp(this.appContextManipulationService.ContextModel
                                                    .entityArea.entitySwimLanes[index]
                                                    .getArtifactNode(CommonModel.ComponentTypeName.CHART),
                                                    new AppDesigner.Models
                                                    .SelectableArtifactInfo(this
                                                        .getElementTextContent(chartsNode.childNodes[chartsChildNode]
                                                            .firstChild),
                                                        ""),
                                                    false);
                                        for (var formsChildNode = 0;
                                            formsChildNode < formsNode.childNodes.length;
                                            formsChildNode++)
                                            this.appContextManipulationService
                                                .AddComponentInApp(this.appContextManipulationService.ContextModel
                                                    .entityArea.entitySwimLanes[index]
                                                    .getArtifactNode(CommonModel.ComponentTypeName.FORM),
                                                    new AppDesigner.Models
                                                    .SelectableArtifactInfo(this
                                                        .getElementTextContent(this
                                                            .getElementsbyTagNameGeneric(formsNode
                                                                .childNodes[formsChildNode],
                                                                "c:",
                                                                AppContextNodeNames.Id).firstChild),
                                                        ""),
                                                    false);
                                        for (var viewsChildNode = 0;
                                            viewsChildNode < viewsNode.childNodes.length;
                                            viewsChildNode++)
                                            this.appContextManipulationService
                                                .AddComponentInApp(this.appContextManipulationService.ContextModel
                                                    .entityArea.entitySwimLanes[index]
                                                    .getArtifactNode(CommonModel.ComponentTypeName.VIEW),
                                                    new AppDesigner.Models
                                                    .SelectableArtifactInfo(this
                                                        .getElementTextContent(this
                                                            .getElementsbyTagNameGeneric(viewsNode
                                                                .childNodes[viewsChildNode],
                                                                "c:",
                                                                AppContextNodeNames.Id).firstChild),
                                                        ""),
                                                    false)
                                    }
                                this.UpdateLastSavedAppContext();
                                this.UpdateLastSavedContextModel()
                            }
                        };
                        AppController.prototype.getElementTextContent = function(element) {
                            if (element != null) return element.nodeValue;
                            else return null
                        };
                        AppController.prototype
                            .getElementsbyTagNameGenericXml = function(xml, ns, value) {
                                if (xml != null)
                                    return xml.getElementsByTagName(value)[0] || xml.getElementsByTagName(ns + value)[0]
                            };
                        AppController.prototype
                            .getElementsbyTagNameGeneric = function(node, ns, value) {
                                if (node != null)
                                    return node.getElementsByTagName(value)[0] ||
                                        node.getElementsByTagName(ns + value)[0]
                            };
                        AppController.$inject = [
                            ServiceNames.ScopeService, ServiceNames.WindowService, ServiceNames.StateParamsService,
                            ServiceNames.AppContextManipulationService, ServiceNames.PerfService, ServiceNames
                            .AppDesignerPerfKpiService, ServiceNames.TraceUtilityService, ServiceNames
                            .ModalDialogService,
                            ServiceNames.LegacyDesignerService, ServiceNames.LocalizationService, ServiceNames
                            .DateTimeFormatService, AppDesigner.AppDesignerServiceNames.CategorizationService,
                            ServiceNames
                            .AppInterfaceService, ServiceNames.ComposabilityService, "mscrmComponentService",
                            AppDesigner
                            .AppDesignerServiceNames.PageLoadService, ServiceNames.NotificationBarService, ServiceNames
                            .FlyoutService, ServiceNames.ErrorUtilityService, AppDesigner.AppDesignerServiceNames
                            .MetaDataService, ServiceNames.CacheUtilityService
                        ];
                        return AppController
                    }(AppDesigner.AppDesignerBase);
                Controllers.AppController = AppController;
                AppDesigner.AppDesignerModule.controller("mscrmAppController", AppController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    CommonServiceNames = Designers.Common.Constants.ServiceNames,
                    CommandBarController = function() {
                        function CommandBarController(scope,
                            componentService,
                            localizationService,
                            flyoutService,
                            shortcutKeyService) {
                            this.scope = scope;
                            this.componentService = componentService;
                            this.localizationService = localizationService;
                            this.flyoutService = flyoutService;
                            this.shortcutKeyService = shortcutKeyService;
                            this.InitializeCommandBarFlyoutMenuItems();
                            this.RegisterShortcutKey();
                            this.scope.$on("$destroy", this.destructor.bind(this))
                        }

                        CommandBarController.prototype.destructor = function() { this.DeregisterShortcutKey() };
                        CommandBarController.prototype.InitializeCommandBarFlyoutMenuItems = function() {
                            var menuCategoryGeneral = [], menuItem = new AppDesigner.Models.CommandBarAddFlyoutMenuItem;
                            menuItem.text = this.localizationService.getResourceString("AppDesigner.AddEntity");
                            menuItem.id = AppDesigner.CommandBarAddFlyoutMenu.AddEntity;
                            menuItem.componentType = CommonModel.ComponentTypeName.ENTITY;
                            menuItem.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.Entities.Tooltip");
                            menuCategoryGeneral.push(menuItem);
                            menuItem = new AppDesigner.Models.CommandBarAddFlyoutMenuItem;
                            menuItem.text = this.localizationService.getResourceString("AppDesigner.AddDashboard");
                            menuItem.id = AppDesigner.CommandBarAddFlyoutMenu.AddDashboard;
                            menuItem.componentType = CommonModel.ComponentTypeName.DASHBOARD;
                            menuItem.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.Dashboards.Tooltip");
                            menuCategoryGeneral.push(menuItem);
                            menuItem = new AppDesigner.Models.CommandBarAddFlyoutMenuItem;
                            menuItem.text = this.localizationService.getResourceString("AppDesigner.AddBPF");
                            menuItem.id = AppDesigner.CommandBarAddFlyoutMenu.AddBPF;
                            menuItem.componentType = CommonModel.ComponentTypeName.BUSINESS_PROCESS;
                            menuItem.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.BusinessProcessFlows.Tooltip");
                            menuCategoryGeneral.push(menuItem);
                            var menuCategoryEntity = [];
                            menuItem = new AppDesigner.Models.CommandBarAddFlyoutMenuItem;
                            menuItem.text = this.localizationService.getResourceString("AppDesigner.AddForm");
                            menuItem.componentType = CommonModel.ComponentTypeName.FORM;
                            menuItem.id = AppDesigner.CommandBarAddFlyoutMenu.AddForm;
                            menuItem.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.Forms.Tooltip");
                            menuCategoryEntity.push(menuItem);
                            menuItem = new AppDesigner.Models.CommandBarAddFlyoutMenuItem;
                            menuItem.text = this.localizationService.getResourceString("AppDesigner.AddView");
                            menuItem.id = AppDesigner.CommandBarAddFlyoutMenu.AddViews;
                            menuItem.componentType = CommonModel.ComponentTypeName.VIEW;
                            menuItem.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.Views.Tooltip");
                            menuCategoryEntity.push(menuItem);
                            menuItem = new AppDesigner.Models.CommandBarAddFlyoutMenuItem;
                            menuItem.text = this.localizationService.getResourceString("AppDesigner.AddChart");
                            menuItem.id = AppDesigner.CommandBarAddFlyoutMenu.AddChart;
                            menuItem.componentType = CommonModel.ComponentTypeName.CHART;
                            menuItem.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.Charts.Tooltip");
                            menuCategoryEntity.push(menuItem);
                            var addFlyoutModels = [],
                                generalflyoutModel = new AppDesigner.Models.CommandBarAddFlyoutMenuModel;
                            generalflyoutModel.nodeCategory = this.localizationService
                                .getResourceString("AppDesigner.Artifacts");
                            generalflyoutModel.nodes = menuCategoryGeneral;
                            generalflyoutModel.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.Artifacts.Tooltip");
                            addFlyoutModels.push(generalflyoutModel);
                            var entityFlyoutModel = new AppDesigner.Models.CommandBarAddFlyoutMenuModel;
                            entityFlyoutModel.nodeCategory = this.localizationService
                                .getResourceString("AppDesigner.EntityAssets");
                            entityFlyoutModel.nodes = menuCategoryEntity;
                            entityFlyoutModel.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.EntityAssets.Tooltip");
                            addFlyoutModels.push(entityFlyoutModel);
                            this.commandBarAddFlyoutModel = new AppDesigner.Models.CommandBarAddFlyoutButtonModel;
                            this.commandBarAddFlyoutModel.Hide();
                            this.commandBarAddFlyoutModel.flyoutMenuModels = addFlyoutModels;
                            this.commandBarAddFlyoutModel.tooltipTitle = this.localizationService
                                .getResourceString("AppDesigner.Add.Tooltip");
                            this.commandBarAddFlyoutModel.buttonText = this.localizationService
                                .getResourceString("AppDesigner.Add")
                        };
                        CommandBarController.prototype
                            .HandleCategoryClick = function($event) { $event.stopPropagation() };
                        CommandBarController.prototype
                            .HandleAddFlyoutMenuItemClick = function(menuitem) {
                                this.componentService.DisplayComponentList(menuitem.componentType)
                            };
                        CommandBarController.prototype
                            .ToggleAddFlyout = function($event) {
                                this.commandBarAddFlyoutModel.ToggleFlyout(this.flyoutService, $event)
                            };
                        CommandBarController.prototype
                            .IsAddMenuItemEnabled = function(menuitem) {
                                return this.componentService.CanDisplayComponentList(menuitem.componentType)
                            };
                        CommandBarController.prototype.RegisterShortcutKey = function() {
                            this.OpenFlyoutFunction = this.OpenFlyoutOnShortcutKey.bind(this);
                            this.shortcutKeyService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.CanvasAddKeyCode,
                                    this.OpenFlyoutFunction)
                        };
                        CommandBarController.prototype
                            .DeregisterShortcutKey = function() {
                                this.shortcutKeyService
                                    .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.CanvasAddKeyCode,
                                        this.OpenFlyoutFunction)
                            };
                        CommandBarController.prototype.OpenFlyoutOnShortcutKey = function(e) {
                            this.ToggleAddFlyout(e);
                            var addElement = document.getElementById("AppDesigner.Commandbar.Add");
                            addElement && addElement.focus();
                            this.triggerScopeApplyPhase()
                        };
                        CommandBarController.prototype
                            .triggerScopeApplyPhase = function() { !this.scope.$$phase && this.scope.$apply() };
                        CommandBarController.$inject = [
                            "$scope", "mscrmComponentService", CommonServiceNames.LocalizationService,
                            CommonServiceNames
                            .FlyoutService, CommonServiceNames.KeyboardShortcutService
                        ];
                        return CommandBarController
                    }();
                AppDesigner.AppDesignerModule.controller("mscrmAppCommandBarController", CommandBarController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    CommonServiceNames = Designers.Common.Constants.ServiceNames,
                    ComposableContextParam = Mscrm.Designers.Common.Constants.ComposableContextParam,
                    CanvasPaneController = function() {
                        function CanvasPaneController(scope,
                            metadataService,
                            urlHelperService,
                            legacyDesignerService,
                            perfService,
                            appDesignerPerfKpisService,
                            mscrmAppContextManipulationService,
                            mscrmLocalizationService,
                            state,
                            componentService,
                            categorizationService,
                            designerConfigurationService,
                            composabilityService,
                            validationService,
                            flyoutService,
                            keyboardShortcutService,
                            breadcrumbService,
                            modalDialogService,
                            dirtyCheckService,
                            notificationBarService) {
                            this.scope = scope;
                            this.metadataService = metadataService;
                            this.urlHelperService = urlHelperService;
                            this.legacyDesignerService = legacyDesignerService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.mscrmAppContextManipulationService = mscrmAppContextManipulationService;
                            this.mscrmLocalizationService = mscrmLocalizationService;
                            this.state = state;
                            this.componentService = componentService;
                            this.categorizationService = categorizationService;
                            this.designerConfigurationService = designerConfigurationService;
                            this.composabilityService = composabilityService;
                            this.validationService = validationService;
                            this.flyoutService = flyoutService;
                            this.keyboardShortcutService = keyboardShortcutService;
                            this.breadcrumbService = breadcrumbService;
                            this.modalDialogService = modalDialogService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.notificationBarService = notificationBarService;
                            this.showNonEntityArtifactHolderCards = true;
                            this.showEntitySwimLanes = true;
                            this.scope.contextModel.selections = new AppDesigner.Models.SelectedObjects;
                            this.nonEntityArtifactList = [
                                this.scope.contextModel.dashboards, this.scope.contextModel.businessProcesses
                            ];
                            this.scope.contextModel.formflyoutmenu = new AppDesigner.Models.CreateNewButtonModel;
                            this.sitemapConfig = this.designerConfigurationService
                                .getDesignerConfig(Designers.Common.Constants.DesignerName.SiteMapDesigner);
                            this.RegisterShortcutKeys();
                            this.scope.$on("$destroy", this.destructor.bind(this))
                        }

                        Object.defineProperty(CanvasPaneController.prototype,
                            "NonEntityArtifactList",
                            {
                                "get": function() { return this.nonEntityArtifactList },
                                enumerable: true,
                                configurable: true
                            });
                        CanvasPaneController.prototype.destructor = function() { this.DeregisterShortcutKeys() };
                        CanvasPaneController.prototype.RegisterShortcutKeys = function() {
                            this.removeFunction = this.RemoveArtifactOnKeyPress.bind(this);
                            this.editFunction = this.OpenEditWindowOnKeyPress.bind(this);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts
                                    .CanvasRemoveKeyCode,
                                    this.removeFunction);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.CanvasEditKeyCode, this.editFunction)
                        };
                        CanvasPaneController.prototype.DeregisterShortcutKeys = function() {
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.CanvasRemoveKeyCode,
                                    this.removeFunction);
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.CanvasEditKeyCode,
                                    this.editFunction)
                        };
                        Object.defineProperty(CanvasPaneController.prototype,
                            "ShouldShowNotification",
                            {
                                "get": function() { return this.notificationBarService.ShouldShowNotification },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(CanvasPaneController.prototype,
                            "AppContext",
                            {
                                "get": function() { return this.mscrmAppContextManipulationService.AppContext },
                                enumerable: true,
                                configurable: true
                            });
                        CanvasPaneController.prototype
                            .OpenEditWindowOnKeyPress = function() { !this.IsEditDisabled() && this.OpenEditWindow() };
                        CanvasPaneController.prototype.RemoveArtifactOnKeyPress = function() {
                            if (!this.IsRemoveDisabled()) {
                                this.componentService.RemoveWithConfirmCheck();
                                this.triggerScopeApplyPhase()
                            }
                        };
                        CanvasPaneController.prototype
                            .isDesignerLaunchable = function(artifactType) {
                                return this.legacyDesignerService.isDesignerEnabled(artifactType)
                            };
                        CanvasPaneController.prototype
                            .HandleToggleSeeHideDetails = function(artifact, entitySwimLane, $event) {
                                this.OpenComponentRecordList(entitySwimLane, artifact, $event);
                                artifact.ToggleFlyout(this.flyoutService, $event)
                            };
                        CanvasPaneController.prototype.GetDependencyCount = function(artifact, entitySwimLane) {
                            var dependencyCount = 0, selectedComponentTypeIndex = 0;
                            if (this.mscrmAppContextManipulationService.isDependencyPaneHidden) return 0;
                            if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(artifact)) {
                                var dependency = this.validationService.dependencyById
                                    .getValue(entitySwimLane.entitymetadata.id);
                                if (dependency) dependencyCount += dependency;
                                return dependencyCount
                            }
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(entitySwimLane)) {
                                if (artifact
                                    .componentTypeCode ==
                                    CommonModel.ComponentTypeCode.SystemForm) selectedComponentTypeIndex = 0;
                                else if (artifact
                                    .componentTypeCode ==
                                    CommonModel.ComponentTypeCode.SavedQuery) selectedComponentTypeIndex = 1;
                                else if (artifact
                                    .componentTypeCode ==
                                    CommonModel.ComponentTypeCode
                                    .SavedQueryVisualization) selectedComponentTypeIndex = 2;
                                for (var _i = 0,
                                    _a = entitySwimLane.entityArtifacts[selectedComponentTypeIndex].selectedList;
                                    _i < _a.length;
                                    _i++) {
                                    var selectedListItem = _a[_i],
                                        dependency = this.validationService.dependencyById
                                            .getValue(selectedListItem.id);
                                    if (dependency) dependencyCount += dependency
                                }
                                return dependencyCount
                            }
                            switch (artifact.componentTypeCode) {
                            case CommonModel.ComponentTypeCode.BPF:
                                dependencyCount = this.validationService.GetBpfDependencyCount();
                                break;
                            case CommonModel.ComponentTypeCode.SystemForm:
                                dependencyCount = this.validationService.GetDashboardDependencyCount();
                                break;
                            case CommonModel.ComponentTypeCode.SiteMap:
                                dependencyCount = this.validationService.GetSitemapDependencyCount();
                                break
                            }
                            return dependencyCount
                        };
                        CanvasPaneController.prototype.GetEditorURL = function(editorType) {
                            var customUrl = "";
                            if (editorType === CommonModel.ComponentTypeName.SITEMAP
                            ) customUrl = "SitemapDesigner.aspx";
                            else if (editorType === CommonModel.ComponentTypeName.COMMAND_BAR
                            ) customUrl = "CommandBarDesigner.aspx";
                            return this.urlHelperService.RootDesignerPath + customUrl
                        };
                        CanvasPaneController.prototype.IsArtifactCardSelected = function(artifact, entitySwimLane) {
                            var isCurrentArtifactSelected = this.scope.contextModel.selections
                                .selectedArtifact ===
                                artifact;
                            if (entitySwimLane) {
                                var isCurrentEntitySwimLaneSelected =
                                    this.scope.contextModel.selections.selectedEntitySwimLane === entitySwimLane;
                                if (isCurrentEntitySwimLaneSelected
                                )
                                    return this.scope.contextModel.selections.isFullEntitySwimLaneSelected
                                        ? true
                                        : isCurrentArtifactSelected && isCurrentEntitySwimLaneSelected
                            }
                            return isCurrentArtifactSelected
                        };
                        CanvasPaneController.prototype.NavigateToSitemapDesigner = function(sitemapBreadcrumb) {
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.sitemapLaunchFromAppCanvas)).start();
                            this.dirtyCheckService.clearAll();
                            this.composabilityService
                                .setComposableContext(Designers.Common.Constants.DesignerName.SiteMapDesigner,
                                    this.mscrmAppContextManipulationService.getComposableContext());
                            var params = {};
                            if (this.mscrmAppContextManipulationService.getComposableContext()
                                .GetComposableContextParams()
                                .containsKey(ComposableContextParam.SitemapId)) {
                                sitemapBreadcrumb.breadcrumbUrl = "SiteMapEdit";
                                params = {
                                    siteMapId: this.mscrmAppContextManipulationService.getComposableContext()
                                        .GetComposableContextParams().getValue(ComposableContextParam.SitemapId)
                                }
                            }
                            this.breadcrumbService.Navigate(sitemapBreadcrumb, params, { location: false }, true)
                        };
                        CanvasPaneController.prototype.PerformDirtyCheckAndNavigate = function() {
                            var sitemapBreadcrumb = new Designers.Common.Breadcrumb
                                .MscrmBreadcrumbItem(this.mscrmLocalizationService
                                    .getResourceString("SitemapDesigner.Title"),
                                    "SiteMapHome",
                                    Designers.Common.Constants.DesignerName.SiteMapDesigner);
                            if (this.dirtyCheckService
                                .IsDesignerInDirtyState(Designers.Common.Constants.DesignerName.AppDesigner)) {
                                var promise = this.modalDialogService
                                    .open(new Designers.Common.ModalDialog
                                        .ConfirmDialogParams(this.mscrmLocalizationService
                                            .getResourceString("AppDesigner.UnsavedChanges"),
                                            this.mscrmLocalizationService
                                            .getResourceString("AppDesigner.UnsavedChangesMessage"),
                                            this.mscrmLocalizationService.getResourceString("AppDesigner.OK"),
                                            this.mscrmLocalizationService.getResourceString("AppDesigner.Cancel")));
                                promise.then(function(result) { this.NavigateToSitemapDesigner(sitemapBreadcrumb) }
                                    .bind(this),
                                    function(result) {}.bind(this))
                            } else this.NavigateToSitemapDesigner(sitemapBreadcrumb)
                        };
                        CanvasPaneController.prototype
                            .handleClickOnLaunch = function(record, artifact, entityInfoSwimLane, $event) {
                                var artifactType = artifact.displayName;
                                if (!this.legacyDesignerService.isDesignerEnabled(artifactType)) {
                                    this.SetSelections(entityInfoSwimLane, artifact, record);
                                    $event.stopPropagation()
                                } else this.OpenArtifactItemEditor(record, artifactType, entityInfoSwimLane)
                            };
                        CanvasPaneController.prototype
                            .OpenArtifactItemEditor = function(record, artifactType, entityInfoSwimLane) {
                                var entityMetadata = null;
                                if (entityInfoSwimLane) entityMetadata = entityInfoSwimLane.entitymetadata;
                                switch (artifactType) {
                                case CommonModel.ComponentTypeName.SITEMAP:
                                    this.IsSiteMapDesignerEnabled && this.PerformDirtyCheckAndNavigate();
                                    break;
                                case CommonModel.ComponentTypeName.DASHBOARD:
                                    var dashboardItemRecord = record;
                                    this.legacyDesignerService.OpenDashboardEditor(dashboardItemRecord.id);
                                    break;
                                case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                    this.legacyDesignerService.OpenBusinessProcessEditor(record.id);
                                    break;
                                case CommonModel.ComponentTypeName.FORM:
                                    var formItemRecord = record;
                                    this.legacyDesignerService
                                        .OpenFormEditor(entityMetadata, formItemRecord.formType, formItemRecord.id);
                                    break;
                                case CommonModel.ComponentTypeName.ENTITY:
                                    this.legacyDesignerService
                                        .OpenEntityEditor(AppDesigner.ActionType.Edit, entityMetadata.id);
                                    break;
                                case CommonModel.ComponentTypeName.VIEW:
                                    var viewItemRecord = record;
                                    this.legacyDesignerService.OpenViewEditor(entityMetadata, viewItemRecord.id);
                                    break;
                                case CommonModel.ComponentTypeName.CHART:
                                    var chartItemRecord = record;
                                    this.legacyDesignerService.OpenChartEditor(entityMetadata, chartItemRecord.id);
                                    break;
                                case CommonModel.ComponentTypeName.COMMAND_BAR:
                                    window.open(this.GetEditorURL(CommonModel.ComponentTypeName.COMMAND_BAR) +
                                        "?entitylogicalname=" +
                                        entityMetadata.logicalName,
                                        "CommandBarDesigner",
                                        "type=fullWindow,scrollbars=yes")
                                }
                            };
                        Object.defineProperty(CanvasPaneController.prototype,
                            "SitemapConfigurationStatus",
                            {
                                "get": function() {
                                    if (this.scope.contextModel.siteMaps.selectedList
                                        .length >
                                        0)
                                        return this.mscrmLocalizationService
                                            .getResourceString("AppDesigner.SitemapConfigured");
                                    else if (this.AppContext
                                        .isAppLoadComplete ===
                                        true)
                                        return this.mscrmLocalizationService
                                            .getResourceString("AppDesigner.SitemapNotConfigured");
                                    else return Designers.Common.Utility.StringUtilities.EmptyString
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(CanvasPaneController.prototype,
                            "SiteMapDesignerToolTip",
                            {
                                "get": function() {
                                    if (this
                                        .IsSiteMapDesignerEnabled
                                    ) return this.getLaunchIconToolTip("AppDesigner.LaunchIcon.Tooltip", "SiteMap");
                                    else
                                        return this
                                            .getLaunchIconToolTip("AppDesigner.LaunchIcon.Disabled.Tooltip", "SiteMap")
                                },
                                enumerable: true,
                                configurable: true
                            });
                        CanvasPaneController.prototype.getArtifactToolTip = function(artifactName) {
                            if (this.legacyDesignerService
                                .isDesignerEnabled(artifactName)
                            ) return this.getLaunchIconToolTip("AppDesigner.LaunchIcon.Tooltip", artifactName);
                            else
                                return this
                                    .getLaunchIconToolTip("AppDesigner.LaunchIcon.Disabled.Tooltip", artifactName)
                        };
                        CanvasPaneController.prototype.getLaunchIconToolTip = function(resourceIdKey, artifactName) {
                            var launchIconToolTip = this.mscrmLocalizationService.getResourceString(resourceIdKey),
                                artifactDisplayName = this.mscrmLocalizationService
                                    .getResourceString("AppDesigner.Artifact." + artifactName);
                            return Designers.Common.Utility.StringUtilities
                                .Format(launchIconToolTip, [artifactDisplayName])
                        };
                        Object.defineProperty(CanvasPaneController.prototype,
                            "IsSiteMapDesignerEnabled",
                            {
                                "get": function() { return this.sitemapConfig && this.sitemapConfig.IsLaunchable() },
                                enumerable: true,
                                configurable: true
                            });
                        CanvasPaneController.prototype
                            .ShowExpandCardLink = function(artifact) { return artifact.selectedList.length > 0 };
                        CanvasPaneController.prototype
                            .SetSelections = function(entitySwimLane, artifact, record, isFullEntitySwimLaneSelected) {
                                if (isFullEntitySwimLaneSelected === void 0) isFullEntitySwimLaneSelected = false;
                                this.scope.contextModel.selections
                                    .isFullEntitySwimLaneSelected = isFullEntitySwimLaneSelected;
                                this.scope.contextModel.selections.selectedEntitySwimLane = entitySwimLane;
                                this.scope.contextModel.selections.selectedArtifact = artifact;
                                this.scope.contextModel.selections.selectedRecordFromArtifact = record
                            };
                        CanvasPaneController.prototype
                            .SelectRecordFromArtifact = function(entitySwimLane, artifact, record, $event) {
                                this.SetSelections(entitySwimLane, artifact, null);
                                this.scope.contextModel.selectedTab = AppDesigner.AppDesignerTab.Components;
                                this.componentService.DisplayComponentList(artifact.displayName);
                                this.scope.contextModel.selections.selectedRecordFromArtifact = record;
                                $event.stopPropagation()
                            };
                        CanvasPaneController.prototype.SelectEntity = function(entitySwimLane, $event) {
                            $event.stopPropagation();
                            this.componentService.OpenAddComponentsPane();
                            this.SetSelections(entitySwimLane, null, null, true);
                            this.scope.contextModel.CurrentComponentList.components = null
                        };
                        CanvasPaneController.prototype
                            .DisplayAddComponentsPane = function() { this.componentService.DisplayAddComponentsPane() };
                        CanvasPaneController.prototype.ShouldHighlightSwimlane = function(laneId, entitySwimLane) {
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.scope.contextModel.selections
                                    .selectedRecordFromArtifact)) return false;
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.scope.contextModel.selections
                                    .selectedEntitySwimLane))
                                return this.scope.contextModel.selections.selectedEntitySwimLane === entitySwimLane;
                            else if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(laneId)) {
                                if (laneId === "Dashboard_BPC"
                                )
                                    return this.scope.contextModel.CurrentComponentList.componentListType ===
                                        CommonModel.ComponentTypeName.DASHBOARD ||
                                        this.scope.contextModel.CurrentComponentList.componentListType ===
                                        CommonModel.ComponentTypeName.BUSINESS_PROCESS;
                                return this.scope.contextModel.CurrentComponentList.componentListType === laneId
                            }
                            return false
                        };
                        CanvasPaneController.prototype.IsRemoveDisabled = function() {
                            if (this.scope.contextModel.selections.selectedArtifact != null &&
                                this.scope.contextModel.selections.selectedRecordFromArtifact != null) return false;
                            else if (this.scope.contextModel.selections.selectedEntitySwimLane != null &&
                                this.scope.contextModel.selections.selectedRecordFromArtifact == null &&
                                this.scope.contextModel.selections.selectedArtifact == null) return false;
                            else return true
                        };
                        CanvasPaneController.prototype.IsEditDisabled = function() {
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.scope.contextModel.selections.selectedRecordFromArtifact)) {
                                if (!this.isDesignerLaunchable(this.scope.contextModel.selections.selectedArtifact
                                    .displayName)) return true;
                                return false
                            }
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.scope.contextModel.selections.selectedEntitySwimLane) &&
                                this.scope.contextModel.selections.isFullEntitySwimLaneSelected) {
                                var id = this.scope.contextModel.selections.selectedEntitySwimLane.entitymetadata.id,
                                    seletedEntityMetadata = this.mscrmAppContextManipulationService
                                        .entityMetadataMap[id];
                                if (!Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(seletedEntityMetadata) &&
                                    seletedEntityMetadata.isCustomizable) return false
                            }
                            return true
                        };
                        CanvasPaneController.prototype.OpenEditWindow = function() {
                            var entitySwimLane, artifactType, contextSelections = this.scope.contextModel.selections;
                            if (this.scope.contextModel.selections
                                .selectedEntitySwimLane !=
                                null) entitySwimLane = this.scope.contextModel.selections.selectedEntitySwimLane;
                            artifactType = Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(contextSelections.selectedArtifact) ||
                                Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(contextSelections.selectedRecordFromArtifact)
                                ? CommonModel.ComponentTypeName.ENTITY
                                : this.scope.contextModel.selections.selectedArtifact.displayName;
                            this.OpenArtifactItemEditor(this.scope.contextModel.selections.selectedRecordFromArtifact,
                                artifactType,
                                entitySwimLane)
                        };
                        CanvasPaneController.prototype
                            .CheckIfArtifactHasType = function(artifact) {
                                return artifact.displayName == Designers.Common.Models.ComponentTypeName.FORM ||
                                    artifact.displayName == Designers.Common.Models.ComponentTypeName.VIEW
                            };
                        CanvasPaneController.prototype.GetTypeMap = function(artifactNode) {
                            if (this
                                .CheckIfArtifactHasType(artifactNode)
                            ) return this.categorizationService.getTypeMap(artifactNode);
                            return null
                        };
                        CanvasPaneController.prototype.IsCategoryCollapsed = function(artifactNode, key) {
                            var isCollapsed = artifactNode.categoryStateMap.getValue(key);
                            return isCollapsed == AppDesigner.CategoryState.Collapsed
                        };
                        CanvasPaneController.prototype.ToggleCategoryState = function(artifactNode, key, $event) {
                            var stateMap = artifactNode.categoryStateMap;
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(stateMap) &&
                                this.categorizationService.toggleCategoryState(stateMap, key);
                            $event.stopPropagation()
                        };
                        CanvasPaneController.prototype
                            .OpenComponentRecordList = function(entitySwimLane, artifact, $event) {
                                this.SetSelections(entitySwimLane, artifact, null, false);
                                this.componentService.DisplayComponentList(artifact.displayName);
                                this.scope.contextModel.CurrentComponentList.searchText = Designers.Common.Utility
                                    .StringUtilities.EmptyString;
                                $event.stopPropagation()
                            };
                        CanvasPaneController.prototype.getCardDescription = function(artifact) {
                            switch (artifact.displayName) {
                            case CommonModel.ComponentTypeName.DASHBOARD:
                                return this.mscrmLocalizationService
                                    .getResourceString("AppDesigner.DashboardDescription");
                            case CommonModel.ComponentTypeName.FORM:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.FormDescription");
                            case CommonModel.ComponentTypeName.VIEW:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.ViewDescription");
                            case CommonModel.ComponentTypeName.CHART:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.ChartDescription");
                            case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                return this.mscrmLocalizationService
                                    .getResourceString("AppDesigner.BusinessProcessDescription")
                            }
                        };
                        CanvasPaneController.prototype.getCardTitle = function(artifact) {
                            switch (artifact.displayName) {
                            case CommonModel.ComponentTypeName.DASHBOARD:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.Dashboard");
                            case CommonModel.ComponentTypeName.FORM:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.Form");
                            case CommonModel.ComponentTypeName.VIEW:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.View");
                            case CommonModel.ComponentTypeName.CHART:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.Chart");
                            case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                return this.mscrmLocalizationService.getResourceString("AppDesigner.BusinessProcess")
                            }
                        };
                        CanvasPaneController.prototype
                            .getDependencyWarning = function(artifact, entitySwimLane) {
                                return Designers.Common.Utility.StringUtilities
                                    .Format(this.mscrmLocalizationService.getResourceString("AppDesigner.Dependencies"),
                                        [this.GetDependencyCount(artifact, entitySwimLane).toString()])
                            };
                        CanvasPaneController.prototype
                            .getReferenceCountTitle = function(artifact) {
                                return Designers.Common.Utility.StringUtilities
                                    .Format(this.mscrmLocalizationService
                                        .getResourceString("AppDesigner.ReferenceCount.Tooltip"),
                                        [this.getReferenceCount(artifact)])
                            };
                        CanvasPaneController.prototype
                            .getReferenceCount = function(artifact) {
                                return artifact.selectedList.length > 0
                                    ? artifact.selectedList.length.toString()
                                    : this.mscrmLocalizationService.getResourceString("AppDesigner.SelectAll")
                                    .toString()
                            };
                        CanvasPaneController.prototype.getListStatus = function(artifact) {
                            if (!artifact.IsFlyoutOpen)
                                return this.mscrmLocalizationService
                                    .getResourceString("AppDesigner.ShowDetails.Tooltip");
                            else
                                return this.mscrmLocalizationService
                                    .getResourceString("AppDesigner.HideDetails.Tooltip")
                        };
                        CanvasPaneController.prototype
                            .ToggleNonEntityArtifactHolderVisibility =
                            function() {
                                this.showNonEntityArtifactHolderCards = !this.showNonEntityArtifactHolderCards
                            };
                        Object.defineProperty(CanvasPaneController.prototype,
                            "AreNonEntityArtifactHoldersVisible",
                            {
                                "get": function() { return this.showNonEntityArtifactHolderCards },
                                enumerable: true,
                                configurable: true
                            });
                        CanvasPaneController.prototype
                            .ToggleEntitySwimLanesVisibility = function() {
                                this.showEntitySwimLanes = !this.showEntitySwimLanes
                            };
                        Object.defineProperty(CanvasPaneController.prototype,
                            "AreEntitySwimLanesVisible",
                            {
                                "get": function() { return this.showEntitySwimLanes },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        CanvasPaneController.prototype
                            .triggerScopeApplyPhase = function() { !this.scope.$$phase && this.scope.$apply() };
                        CanvasPaneController.prototype
                            .NonEntitySwimlaneTitle = function(artifact) {
                                return this.SwimLaneCountMask(this.getCardTitle(artifact),
                                    artifact.selectedList.length.toString())
                            };
                        CanvasPaneController.prototype
                            .EntitySwimlaneTitle = function(entityArea) {
                                return this.SwimLaneCountMask(this.mscrmLocalizationService
                                    .getResourceString("AppDesigner.EntityView"),
                                    entityArea.entitySwimLanes.length.toString())
                            };
                        CanvasPaneController.prototype
                            .SwimLaneCountMask = function(title, length) {
                                return Designers.Common.Utility.StringUtilities
                                    .Format(this.mscrmLocalizationService.getResourceString("AppDesigner.CountLabel"),
                                        [title, length])
                            };
                        CanvasPaneController.$inject = [
                            "$scope", "mscrmMetadataService", CommonServiceNames.UrlHelperService,
                            "mscrmLegacyDesignerService", "mscrmPerfService", "mscrmAppDesignerPerfKpisService",
                            "mscrmAppContextManipulationService", "mscrmLocalizationService", "$state",
                            "mscrmComponentService", AppDesigner.AppDesignerServiceNames.CategorizationService,
                            CommonServiceNames.DesignerConfigService, CommonServiceNames.ComposabilityService,
                            AppDesigner
                            .AppDesignerServiceNames.ValidationService, CommonServiceNames.FlyoutService,
                            CommonServiceNames
                            .KeyboardShortcutService, CommonServiceNames.BreadcrumbService, CommonServiceNames
                            .ModalDialogService, CommonServiceNames.DirtyCheckService, CommonServiceNames
                            .NotificationBarService
                        ];
                        return CanvasPaneController
                    }();
                Controllers.CanvasPaneController = CanvasPaneController;
                AppDesigner.AppDesignerModule.controller("mscrmCanvasPaneController", CanvasPaneController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CanvasCardDirective() {
                    return {
                        restrict: "E",
                        replace: true,
                        templateUrl: "/Designers/AppDesigner/AppCanvas/Templates/CanvasCard.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmCanvasCard", CanvasCardDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CanvasCardDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/AppCanvas/Templates/SitemapCard.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmSitemapCard", CanvasCardDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CommandBarAddFlyOutDirective() {
                    return {
                        restrict: "E",
                        replace: true,
                        scope: {
                            flyoutmodels: "=",
                            handlecategoryclick: "&",
                            handlenodeclick: "&",
                            toggleaddflyout: "&",
                            isitemenabled: "&"
                        },
                        templateUrl: "/Designers/AppDesigner/AppCanvas/Templates/CommandBarAddFlyOut.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmCommandBarAddFlyOut", CommandBarAddFlyOutDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Models;
            (function(Models) { "use strict" })(Models = AppDesigner.Models || (AppDesigner.Models = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var AppAddDependenciesEvent = function(_super) {
                    __extends(AppAddDependenciesEvent, _super);

                    function AppAddDependenciesEvent(appId,
                        acceptedDependenciesComponentType,
                        acceptedDependenciesCount) {
                        _super.call(this, null, AppAddDependenciesEvent.eventName);
                        this.AddEventParameter(AppAddDependenciesTelemetryParameters.AppId, appId);
                        this.AddEventParameter(AppAddDependenciesTelemetryParameters.AcceptedDependenciesComponentType,
                            acceptedDependenciesComponentType);
                        this.AddEventParameter(AppAddDependenciesTelemetryParameters.AcceptedDependenciesCount,
                            acceptedDependenciesCount)
                    }

                    AppAddDependenciesEvent.eventName = "AppAddDependencies";
                    return AppAddDependenciesEvent
                }(Mscrm.Designers.Common.Telemetry.DesignerTelemetryEvent);
                Telemetry.AppAddDependenciesEvent = AppAddDependenciesEvent;
                var AppAddDependenciesTelemetryParameters = function() {
                    function AppAddDependenciesTelemetryParameters() {}

                    AppAddDependenciesTelemetryParameters.AppId = "AppId";
                    AppAddDependenciesTelemetryParameters
                        .AcceptedDependenciesComponentType = "AcceptedDependenciesComponentType";
                    AppAddDependenciesTelemetryParameters.AcceptedDependenciesCount = "AcceptedDependenciesCount";
                    return AppAddDependenciesTelemetryParameters
                }();
                Telemetry.AppAddDependenciesTelemetryParameters = AppAddDependenciesTelemetryParameters
            })(Telemetry = AppDesigner.Telemetry || (AppDesigner.Telemetry = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var AppCreateEvent = function(_super) {
                    __extends(AppCreateEvent, _super);

                    function AppCreateEvent(appId, solutionId) {
                        _super.call(this, null, AppCreateEvent.eventName);
                        this.AddEventParameter(AppCreateTelemetryParameters.AppId, appId);
                        this.AddEventParameter(AppCreateTelemetryParameters.SolutionId, solutionId)
                    }

                    AppCreateEvent.eventName = "AppCreate";
                    return AppCreateEvent
                }(Mscrm.Designers.Common.Telemetry.DesignerTelemetryEvent);
                Telemetry.AppCreateEvent = AppCreateEvent;
                var AppCreateTelemetryParameters = function() {
                    function AppCreateTelemetryParameters() {}

                    AppCreateTelemetryParameters.AppId = "AppId";
                    AppCreateTelemetryParameters.SolutionId = "SolutionId";
                    return AppCreateTelemetryParameters
                }();
                Telemetry.AppCreateTelemetryParameters = AppCreateTelemetryParameters
            })(Telemetry = AppDesigner.Telemetry || (AppDesigner.Telemetry = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var AppDependencyInfoEvent = function(_super) {
                    __extends(AppDependencyInfoEvent, _super);

                    function AppDependencyInfoEvent(appId,
                        parentComponentType,
                        dependentComponentType,
                        dependentComponentCount,
                        dependentComponentIDs) {
                        _super.call(this, null, AppDependencyInfoEvent.eventName);
                        this.AddEventParameter(AppDependencyInfoTelemetryParameters.AppId, appId);
                        this.AddEventParameter(AppDependencyInfoTelemetryParameters.ParentComponentType,
                            parentComponentType);
                        this.AddEventParameter(AppDependencyInfoTelemetryParameters.DependentComponentType,
                            dependentComponentType);
                        this.AddEventParameter(AppDependencyInfoTelemetryParameters.DependentComponentCount,
                            dependentComponentCount);
                        this.AddEventParameter(AppDependencyInfoTelemetryParameters.DependentComponentIDs,
                            dependentComponentIDs)
                    }

                    AppDependencyInfoEvent.eventName = "AppDependencyInfo";
                    return AppDependencyInfoEvent
                }(Mscrm.Designers.Common.Telemetry.DesignerTelemetryEvent);
                Telemetry.AppDependencyInfoEvent = AppDependencyInfoEvent;
                var AppDependencyInfoTelemetryParameters = function() {
                    function AppDependencyInfoTelemetryParameters() {}

                    AppDependencyInfoTelemetryParameters.AppId = "AppId";
                    AppDependencyInfoTelemetryParameters.ParentComponentType = "ParentComponentType";
                    AppDependencyInfoTelemetryParameters.DependentComponentType = "DependentComponentType";
                    AppDependencyInfoTelemetryParameters.DependentComponentCount = "DependentComponentCount";
                    AppDependencyInfoTelemetryParameters.DependentComponentIDs = "DependentComponentIDs";
                    return AppDependencyInfoTelemetryParameters
                }();
                Telemetry.AppDependencyInfoTelemetryParameters = AppDependencyInfoTelemetryParameters
            })(Telemetry = AppDesigner.Telemetry || (AppDesigner.Telemetry = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var AppPublishEvent = function(_super) {
                    __extends(AppPublishEvent, _super);

                    function AppPublishEvent(appId,
                        error,
                        entityCount,
                        entities,
                        BPFCount,
                        dashboardCount,
                        entityFormCount,
                        entityViewCount,
                        entityChartCount) {
                        _super.call(this, null, AppPublishEvent.eventName);
                        this.AddEventParameter(AppPublishTelemetryParameters.AppId, appId);
                        this.AddEventParameter(AppPublishTelemetryParameters.Error, error);
                        this.AddEventParameter(AppPublishTelemetryParameters.EntityCount, entityCount);
                        this.AddEventParameter(AppPublishTelemetryParameters.Entities, entities);
                        this.AddEventParameter(AppPublishTelemetryParameters.BPFCount, BPFCount);
                        this.AddEventParameter(AppPublishTelemetryParameters.DashboardCount, dashboardCount);
                        this.AddEventParameter(AppPublishTelemetryParameters.EntityFormCount, entityFormCount);
                        this.AddEventParameter(AppPublishTelemetryParameters.EntityViewCount, entityViewCount);
                        this.AddEventParameter(AppPublishTelemetryParameters.EntityChartCount, entityChartCount)
                    }

                    AppPublishEvent.eventName = "AppPublish";
                    return AppPublishEvent
                }(Mscrm.Designers.Common.Telemetry.DesignerTelemetryEvent);
                Telemetry.AppPublishEvent = AppPublishEvent;
                var AppPublishTelemetryParameters = function() {
                    function AppPublishTelemetryParameters() {}

                    AppPublishTelemetryParameters.AppId = "AppId";
                    AppPublishTelemetryParameters.Error = "Error";
                    AppPublishTelemetryParameters.EntityCount = "EntityCount";
                    AppPublishTelemetryParameters.Entities = "Entities";
                    AppPublishTelemetryParameters.BPFCount = "BPFCount";
                    AppPublishTelemetryParameters.DashboardCount = "DashboardCount";
                    AppPublishTelemetryParameters.EntityFormCount = "EntityFormCount";
                    AppPublishTelemetryParameters.EntityChartCount = "EntityChartCount";
                    AppPublishTelemetryParameters.EntityViewCount = "EntityViewCount";
                    return AppPublishTelemetryParameters
                }();
                Telemetry.AppPublishTelemetryParameters = AppPublishTelemetryParameters
            })(Telemetry = AppDesigner.Telemetry || (AppDesigner.Telemetry = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var AppSaveEvent = function(_super) {
                    __extends(AppSaveEvent, _super);

                    function AppSaveEvent(appId,
                        error,
                        entityCount,
                        entities,
                        BPFCount,
                        dashboardCount,
                        entityFormCount,
                        entityViewCount,
                        entityChartCount) {
                        _super.call(this, null, AppSaveEvent.eventName);
                        this.AddEventParameter(AppSaveTelemetryParameters.AppId, appId);
                        this.AddEventParameter(AppSaveTelemetryParameters.Error, error);
                        this.AddEventParameter(AppSaveTelemetryParameters.EntityCount, entityCount);
                        this.AddEventParameter(AppSaveTelemetryParameters.Entities, entities);
                        this.AddEventParameter(AppSaveTelemetryParameters.BPFCount, BPFCount);
                        this.AddEventParameter(AppSaveTelemetryParameters.DashboardCount, dashboardCount);
                        this.AddEventParameter(AppSaveTelemetryParameters.EntityFormCount, entityFormCount);
                        this.AddEventParameter(AppSaveTelemetryParameters.EntityViewCount, entityViewCount);
                        this.AddEventParameter(AppSaveTelemetryParameters.EntityChartCount, entityChartCount)
                    }

                    AppSaveEvent.eventName = "AppSave";
                    return AppSaveEvent
                }(Mscrm.Designers.Common.Telemetry.DesignerTelemetryEvent);
                Telemetry.AppSaveEvent = AppSaveEvent;
                var AppSaveTelemetryParameters = function() {
                    function AppSaveTelemetryParameters() {}

                    AppSaveTelemetryParameters.AppId = "AppId";
                    AppSaveTelemetryParameters.Error = "Error";
                    AppSaveTelemetryParameters.EntityCount = "EntityCount";
                    AppSaveTelemetryParameters.Entities = "Entities";
                    AppSaveTelemetryParameters.BPFCount = "BPFCount";
                    AppSaveTelemetryParameters.DashboardCount = "DashboardCount";
                    AppSaveTelemetryParameters.EntityFormCount = "EntityFormCount";
                    AppSaveTelemetryParameters.EntityChartCount = "EntityChartCount";
                    AppSaveTelemetryParameters.EntityViewCount = "EntityViewCount";
                    return AppSaveTelemetryParameters
                }();
                Telemetry.AppSaveTelemetryParameters = AppSaveTelemetryParameters
            })(Telemetry = AppDesigner.Telemetry || (AppDesigner.Telemetry = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var AppValidateEvent = function(_super) {
                    __extends(AppValidateEvent, _super);

                    function AppValidateEvent(appId, error, totalDependencyCount) {
                        _super.call(this, null, AppValidateEvent.eventName);
                        this.AddEventParameter(AppValidateTelemetryParameters.AppId, appId);
                        this.AddEventParameter(AppValidateTelemetryParameters.Error, error);
                        this.AddEventParameter(AppValidateTelemetryParameters.TotalDependencyCount,
                            totalDependencyCount)
                    }

                    AppValidateEvent.eventName = "AppValidate";
                    return AppValidateEvent
                }(Mscrm.Designers.Common.Telemetry.DesignerTelemetryEvent);
                Telemetry.AppValidateEvent = AppValidateEvent;
                var AppValidateTelemetryParameters = function() {
                    function AppValidateTelemetryParameters() {}

                    AppValidateTelemetryParameters.AppId = "AppId";
                    AppValidateTelemetryParameters.Error = "Error";
                    AppValidateTelemetryParameters.TotalDependencyCount = "TotalDependencyCount";
                    return AppValidateTelemetryParameters
                }();
                Telemetry.AppValidateTelemetryParameters = AppValidateTelemetryParameters
            })(Telemetry = AppDesigner.Telemetry || (AppDesigner.Telemetry = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Services;
            (function(Services) {
                "use strict";
                var AppCanvasScrollService = function() {
                    function AppCanvasScrollService() { this.animationTimeframe = 2e3 }

                    AppCanvasScrollService.prototype.ScrollToScrollPoint = function(scrollPoint) {
                        if (Designers.Common.Utility.StringUtilities.IsNullOrEmpty(scrollPoint)) return;
                        scrollPoint = scrollPoint.toLowerCase();
                        switch (scrollPoint) {
                        case "bpc":
                        case "dashboard":
                            scrollPoint = "dashboard_bpc";
                            break;
                        default:
                            break
                        }
                        $(".mscrm-CanvasPaneOverflowContainer")
                            .animate({ scrollTop: $("[data-scroll-point='" + scrollPoint + "']").position().top },
                                this.animationTimeframe)
                    };
                    return AppCanvasScrollService
                }();
                AppDesigner.AppDesignerModule.service("mscrmAppCanvasScrollService", AppCanvasScrollService)
            })(Services = AppDesigner.Services || (AppDesigner.Services = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    CommonModel = Mscrm.Designers.Common.Models,
                    Utilities = Mscrm.Designers.Common.Utility,
                    ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    DesignerTelemetry = Mscrm.Designers.AppDesigner.Telemetry,
                    AppDesignerValidationService = function() {
                        function AppDesignerValidationService(metaDataService,
                            appContextManipulationService,
                            componentDependencyService,
                            notificationService,
                            perfService,
                            appDesignerPerfKpisService,
                            telemetryService,
                            localizationService) {
                            this.metaDataService = metaDataService;
                            this.appContextManipulationService = appContextManipulationService;
                            this.componentDependencyService = componentDependencyService;
                            this.notificationService = notificationService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.telemetryService = telemetryService;
                            this.localizationService = localizationService;
                            this.lastAddedDependencies = new Dictionary;
                            this.dependencyById = new Dictionary;
                            this.componentTypeMap = new Dictionary;
                            this.componentTypeMap.add(26, CommonModel.ComponentTypeName.VIEW);
                            this.componentTypeMap.add(1, CommonModel.ComponentTypeName.ENTITY);
                            this.componentTypeMap.add(29, CommonModel.ComponentTypeName.BUSINESS_PROCESS);
                            this.componentTypeMap.add(59, CommonModel.ComponentTypeName.CHART);
                            this.componentTypeMap.add(60, CommonModel.ComponentTypeName.FORM);
                            this.componentTypeMap.add(62, CommonModel.ComponentTypeName.SITEMAP);
                            this.newDependenciesCount = 0
                        }

                        Object.defineProperty(AppDesignerValidationService.prototype,
                            "LastAddedDependencies",
                            {
                                "get": function() { return this.lastAddedDependencies },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(AppDesignerValidationService.prototype,
                            "SitemapTree",
                            { "get": function() { return this.sitemapTree }, enumerable: true, configurable: true });
                        Object.defineProperty(AppDesignerValidationService.prototype,
                            "DashboardTree",
                            { "get": function() { return this.dashboardTree }, enumerable: true, configurable: true });
                        Object.defineProperty(AppDesignerValidationService.prototype,
                            "EntityTree",
                            { "get": function() { return this.entityTree }, enumerable: true, configurable: true });
                        Object.defineProperty(AppDesignerValidationService.prototype,
                            "BpfTree",
                            { "get": function() { return this.bpfTree }, enumerable: true, configurable: true });
                        AppDesignerValidationService.prototype
                            .resetAddedDependencies = function() { this.lastAddedDependencies = new Dictionary };
                        AppDesignerValidationService.prototype.AddDependencies = function(tree) {
                            var ComponentTree;
                            this.addedEntityDependencyCount = 0;
                            this.selectedViewCount = 0;
                            this.selectedChartCount = 0;
                            this.selectedFormCount = 0;
                            switch (tree) {
                            case AppDesigner.DependencyTree.SitemapTree:
                                ComponentTree = this.SitemapTree;
                                break;
                            case AppDesigner.DependencyTree.BPFTree:
                                ComponentTree = this.BpfTree;
                                break;
                            case AppDesigner.DependencyTree.DashboardTree:
                                ComponentTree = this.DashboardTree;
                                break;
                            case AppDesigner.DependencyTree.EntityTree:
                                ComponentTree = this.EntityTree;
                                break
                            }
                            if (Utilities.ScriptUtilities.IsNullOrUndefined(ComponentTree)) return;
                            ComponentTree.length > 0 && this.lastAddedDependencies.add(tree, true);
                            for (var _i = 0; _i < ComponentTree.length; _i++) {
                                var Component = ComponentTree[_i];
                                this.AddNodeDependencies(Component);
                                if (!Utilities.ScriptUtilities.IsNullOrUndefined(Component.children))
                                    for (var _a = 0, _b = Component.children; _a < _b.length; _a++) {
                                        var ComponentChild = _b[_a];
                                        this.AddNodeDependencies(ComponentChild)
                                    }
                            }
                            this.ProcessEntityTree();
                            this.TelemetryForAddDependencies()
                        };
                        AppDesignerValidationService.prototype.AddNodeDependencies = function(ComponentTreeNode) {
                            if (Utilities.ScriptUtilities
                                .IsNullOrUndefined(ComponentTreeNode.requiredComponentsByEntity)) return;
                            for (var _i = 0, _a = ComponentTreeNode.requiredComponentsByEntity; _i < _a.length; _i++) {
                                var ComponentRequiredComponentsByEntity = _a[_i];
                                if (ComponentRequiredComponentsByEntity.isEntitySelected) {
                                    if (ComponentRequiredComponentsByEntity.isEntityAddedToAppContext == false &&
                                        ComponentRequiredComponentsByEntity.reqComponents
                                        .length !=
                                        0) ++this.addedEntityDependencyCount;
                                    this.appContextManipulationService
                                        .AddEntityComponentInApp(this.appContextManipulationService
                                            .entityMetadataMap[ComponentRequiredComponentsByEntity.parentEntityId
                                                .toString()]);
                                    ComponentRequiredComponentsByEntity.isEntityAddedToAppContext = true;
                                    if (ComponentRequiredComponentsByEntity.reqComponents
                                        .length ==
                                        0) ++this.addedEntityDependencyCount
                                }
                                if (!Utilities.ScriptUtilities
                                    .IsNullOrUndefined(ComponentRequiredComponentsByEntity.reqComponents))
                                    for (var _b = 0, _c = ComponentRequiredComponentsByEntity.reqComponents;
                                        _b < _c.length;
                                        _b++) {
                                        var RequiredComponent = _c[_b];
                                        if (RequiredComponent.isSelected) {
                                            this
                                                .SearchAndAddArtifactNode(RequiredComponent,
                                                    ComponentRequiredComponentsByEntity.parentEntityId.toString());
                                            RequiredComponent.isAddedToAppContext = true;
                                            switch (RequiredComponent.componentType) {
                                            case CommonModel.ComponentTypeCode.SavedQuery:
                                                ++this.selectedViewCount;
                                                break;
                                            case CommonModel.ComponentTypeCode.SavedQueryVisualization:
                                                ++this.selectedChartCount;
                                                break;
                                            case CommonModel.ComponentTypeCode.SystemForm:
                                                ++this.selectedFormCount;
                                                break
                                            }
                                        }
                                    }
                            }
                        };
                        AppDesignerValidationService.prototype
                            .SearchAndAddArtifactNode = function(component, parentEntityId) {
                                var componentType = component.componentType;
                                if (componentType == CommonModel.ComponentTypeCode.BPF ||
                                    componentType == CommonModel.ComponentTypeCode.SystemForm &&
                                    component.componentSubType == 0) {
                                    var artifact = componentType == CommonModel.ComponentTypeCode.BPF
                                        ? this.appContextManipulationService.ContextModel.businessProcesses
                                        : this.appContextManipulationService.ContextModel.dashboards;
                                    if (!this.selectedComponent.isAddedToApp) {
                                        this.selectedComponent.isAddedToApp = true;
                                        this.appContextManipulationService
                                            .AddComponentInApp(artifact, this.selectedComponent);
                                        this.componentDependencyService
                                            .AddDependenciesforArtifact(artifact.componentTypeCode,
                                                this.selectedComponent.id)
                                    }
                                }
                                componentType == CommonModel.ComponentTypeCode.SystemForm &&
                                    component.componentSubType != 0 &&
                                    this.AddToArtifactNode(component,
                                        parentEntityId,
                                        AppDesigner.EntitySwimlaneArtifactNodeIndex.Form);
                                componentType == CommonModel.ComponentTypeCode.SavedQuery &&
                                    this.AddToArtifactNode(component,
                                        parentEntityId,
                                        AppDesigner.EntitySwimlaneArtifactNodeIndex.View);
                                componentType == CommonModel.ComponentTypeCode.SavedQueryVisualization &&
                                    this.AddToArtifactNode(component,
                                        parentEntityId,
                                        AppDesigner.EntitySwimlaneArtifactNodeIndex.Chart)
                            };
                        AppDesignerValidationService.prototype
                            .AddToArtifactNode = function(component, parentEntityId, artifactTypeIndex) {
                                for (var entitySwimLaneLength = this.appContextManipulationService.ContextModel
                                             .entityArea
                                             .entitySwimLanes.length,
                                    i = 0;
                                    i < entitySwimLaneLength;
                                    i++)
                                    if (parentEntityId ==
                                        this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes[i]
                                        .entitymetadata.id) {
                                        var artifactTypeNode = this.appContextManipulationService.ContextModel
                                            .entityArea
                                            .entitySwimLanes[i].entityArtifacts[artifactTypeIndex];
                                        this.AddToSelectedList(component, artifactTypeNode);
                                        break
                                    }
                            };
                        AppDesignerValidationService.prototype.AddToSelectedList = function(component, artifactNode) {
                            if (!this.IsPresentInSelectedList(component.componentId, artifactNode.selectedList)) {
                                var matchingMasterItems = artifactNode.masterList
                                        .filter(function(masterItem, index, array) {
                                            if (masterItem.id === component.componentId) return true;
                                            return false
                                        }),
                                    itemToAdd = null;
                                if (matchingMasterItems.length > 0) itemToAdd = matchingMasterItems[0];
                                else
                                    itemToAdd = new AppDesigner.Models
                                        .SelectableArtifactInfo(component.componentId,
                                            Designers.Common.Utility.StringUtilities.EmptyString);
                                itemToAdd.status = true;
                                itemToAdd.isAddedToApp = true;
                                this.appContextManipulationService.AddComponentInApp(artifactNode, itemToAdd)
                            }
                        };
                        AppDesignerValidationService.prototype.IsPresentInSelectedList = function(id, list) {
                            for (var i = 0; i < list.length; i++) if (list[i].id == id) return true;
                            return false
                        };
                        AppDesignerValidationService.prototype.GetParentEntityId = function(componentId) {
                            var entityInfo = this.metaDataService.componentInformationByComponentId
                                .getValue(componentId);
                            if (entityInfo != false) {
                                var entityId = entityId;
                                return entityId[0]
                            } else return Utilities.StringUtilities.EmptyString
                        };
                        AppDesignerValidationService.prototype.GetDisplayName = function(componentId) {
                            var entityInfo = this.metaDataService.componentInformationByComponentId
                                .getValue(componentId);
                            if (entityInfo != false) {
                                var entityId = entityId;
                                return entityId[1]
                            } else return Utilities.StringUtilities.EmptyString
                        };
                        AppDesignerValidationService.prototype.GetSitemapDependencyCount = function() {
                            var dependencyCount = 0;
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.sitemapTree)) return dependencyCount;
                            for (var _i = 0, _a = this.sitemapTree; _i < _a.length; _i++) {
                                var treeNode = _a[_i];
                                dependencyCount += treeNode.getDependencyCount()
                            }
                            return dependencyCount
                        };
                        AppDesignerValidationService.prototype.GetDashboardDependencyCount = function() {
                            var dependencyCount = 0;
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.dashboardTree)) return dependencyCount;
                            for (var _i = 0, _a = this.dashboardTree; _i < _a.length; _i++) {
                                var treeNode = _a[_i];
                                dependencyCount += treeNode.getDependencyCount()
                            }
                            return dependencyCount
                        };
                        AppDesignerValidationService.prototype.GetBpfDependencyCount = function() {
                            var dependencyCount = 0;
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.bpfTree)) return dependencyCount;
                            for (var _i = 0, _a = this.bpfTree; _i < _a.length; _i++) {
                                var treeNode = _a[_i];
                                dependencyCount += treeNode.getDependencyCount()
                            }
                            return dependencyCount
                        };
                        AppDesignerValidationService.prototype.GetEntityDependencyCount = function() {
                            var dependencyCount = 0;
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.entityTree)) return dependencyCount;
                            dependencyCount = this.entityTree.length;
                            return dependencyCount
                        };
                        AppDesignerValidationService.prototype.processNotificationBarText = function(issue) {
                            if (issue.ErrorType === CommonModel.ErrorType.Warning &&
                                !Utilities.StringUtilities
                                .IsNullOrEmpty(issue.Message)) this.notificationService.WarningList.push(issue.Message);
                            else if (issue
                                .ErrorType ===
                                CommonModel.ErrorType.Error)
                                !Utilities.StringUtilities.IsNullOrEmpty(issue.Message) &&
                                    this.notificationService.ErrorList.push(issue.Message)
                        };
                        AppDesignerValidationService.prototype.onValidateAppSuccess = function(response) {
                            this.treeNodeByEntity = new Dictionary;
                            this.sitemapTree = [];
                            this.dashboardTree = [];
                            this.bpfTree = [];
                            this.entityTree = [];
                            var validationResponse = response;
                            this.resetAddedDependencies();
                            if (!Utilities.ScriptUtilities.IsNullOrUndefined(validationResponse.ValidationIssues)) {
                                for (var i = 0; i < validationResponse.ValidationIssues.length; i++) {
                                    var issue = validationResponse.ValidationIssues[i];
                                    this.processNotificationBarText(issue);
                                    this.processIssue(issue)
                                }
                                if (this.notificationService.ErrorList.length > 0 ||
                                    this.notificationService.WarningList.length > 0) {
                                    this.notificationService.DesignerName = Designers.Common.Constants.DesignerName
                                        .AppDesigner;
                                    this.notificationService.ShowNotificationText()
                                }
                            }
                            var appValidateEvent = new DesignerTelemetry
                                .AppValidateEvent(this.appContextManipulationService.AppContext.appInfo.appId,
                                    null,
                                    this.GetTotalDependencyCount());
                            this.telemetryService.AddTelemetryEvent(appValidateEvent);
                            this.ProcessEntityTree();
                            this.ProcessDependencies();
                            if (this.sitemapTree.length > 0 ||
                                this.dashboardTree.length > 0 ||
                                this.bpfTree.length > 0 ||
                                this.entityTree.length > 0)
                                this.appContextManipulationService.isDependencyPaneHidden = false;
                            else this.appContextManipulationService.isDependencyPaneHidden = true
                        };
                        AppDesignerValidationService.prototype.ProcessEntityTree = function() {
                            this.dependencyById = new Dictionary;
                            for (var _i = 0, _a = this.entityTree; _i < _a.length; _i++) {
                                var entityTreeNode = _a[_i];
                                this.dependencyById.add(entityTreeNode
                                    .componentId,
                                    entityTreeNode.getDependencyCount());
                                for (var _b = 0, _c = entityTreeNode.children; _b < _c.length; _b++) {
                                    var childTreeNode = _c[_b];
                                    this.dependencyById.add(childTreeNode.componentId,
                                        childTreeNode.getDependencyCount())
                                }
                            }
                        };
                        AppDesignerValidationService.prototype.GetTotalDependencyCount = function() {
                            var dependencyCount = 0;
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.entityTree)) return dependencyCount;
                            for (var _i = 0, _a = this.entityTree;
                                _i < _a.length;
                                _i++
                            )
                                for (var entityTreeNode = _a[_i], i = 0;
                                    i < entityTreeNode.children.length;
                                    i++
                                )
                                    for (var entityListLength = entityTreeNode.children[i].requiredComponentsByEntity
                                                 .length,
                                        k = 0;
                                        k < entityListLength;
                                        k++)
                                        if (!entityTreeNode.children[i].requiredComponentsByEntity[k]
                                            .isEntityAddedToAppContext) ++dependencyCount;
                            return this.GetDashboardDependencyCount() +
                                this.GetSitemapDependencyCount() +
                                this.GetBpfDependencyCount() +
                                dependencyCount
                        };
                        AppDesignerValidationService.prototype.ProcessDependencies = function() {
                            if (!(Utilities.ScriptUtilities.IsNullOrUndefined(this.dashboardTree) ||
                                this.dashboardTree.length == 0))
                                for (var _i = 0, _a = this.dashboardTree; _i < _a.length; _i++) {
                                    for (var dashboardTreeNode = _a[_i],
                                        dashboardEntityCount = 0,
                                        viewCount = 0,
                                        chartCount = 0,
                                        formCount = 0,
                                        dashboardEntityList = "",
                                        dependencyViewList = "",
                                        dependencyChartList = "",
                                        dependencyFormList = "",
                                        j = 0;
                                        j < dashboardTreeNode.requiredComponentsByEntity.length;
                                        j++) {
                                        if (dashboardTreeNode.requiredComponentsByEntity[j].isEntitySelected == false) {
                                            ++dashboardEntityCount;
                                            if (dashboardEntityList == ""
                                            )
                                                dashboardEntityList += dashboardTreeNode.requiredComponentsByEntity[j]
                                                    .parentEntityId.toString();
                                            else
                                                dashboardEntityList +=
                                                    ", " +
                                                    dashboardTreeNode.requiredComponentsByEntity[j].parentEntityId
                                                    .toString()
                                        }
                                        for (var k = 0;
                                            k < dashboardTreeNode.requiredComponentsByEntity[j].reqComponents.length;
                                            k++)
                                            switch (dashboardTreeNode.requiredComponentsByEntity[j].reqComponents[k]
                                                .componentType) {
                                            case CommonModel.ComponentTypeCode.SavedQuery:
                                                ++viewCount;
                                                if (dependencyViewList == ""
                                                )
                                                    dependencyViewList += dashboardTreeNode
                                                        .requiredComponentsByEntity[j]
                                                        .reqComponents[k].componentId.toString();
                                                else
                                                    dependencyViewList +=
                                                        ", " +
                                                        dashboardTreeNode.requiredComponentsByEntity[j].reqComponents[k]
                                                        .componentId.toString();
                                                break;
                                            case CommonModel.ComponentTypeCode.SavedQueryVisualization:
                                                ++chartCount;
                                                if (dependencyChartList == ""
                                                )
                                                    dependencyChartList += dashboardTreeNode
                                                        .requiredComponentsByEntity[j]
                                                        .reqComponents[k].componentId.toString();
                                                else
                                                    dependencyChartList +=
                                                        ", " +
                                                        dashboardTreeNode.requiredComponentsByEntity[j].reqComponents[k]
                                                        .componentId.toString();
                                                break;
                                            case CommonModel.ComponentTypeCode.SystemForm:
                                                ++formCount;
                                                if (dependencyFormList == ""
                                                )
                                                    dependencyFormList += dashboardTreeNode
                                                        .requiredComponentsByEntity[j]
                                                        .reqComponents[k].componentId.toString();
                                                else
                                                    dependencyFormList +=
                                                        ", " +
                                                        dashboardTreeNode.requiredComponentsByEntity[j].reqComponents[k]
                                                        .componentId.toString();
                                                break
                                            }
                                    }
                                    for (var dependenciesLists =
                                             [
                                                 [
                                                     CommonModel.ComponentTypeName.ENTITY, dashboardEntityCount,
                                                     dashboardEntityList
                                                 ], [CommonModel.ComponentTypeName.VIEW, viewCount, dependencyViewList],
                                                 [CommonModel.ComponentTypeName.CHART, chartCount, dependencyChartList],
                                                 [CommonModel.ComponentTypeName.FORM, formCount, dependencyFormList]
                                             ],
                                        i = 0;
                                        i < dependenciesLists.length;
                                        i++) {
                                        var item = dependenciesLists[i];
                                        this
                                            .AddDependencyInfoTelemetryEvent(this.appContextManipulationService
                                                .AppContext
                                                .appInfo.appId,
                                                dashboardTreeNode.componentId.toString(),
                                                item[0].toString(),
                                                Number(item[1]),
                                                item[2].toString())
                                    }
                                }
                            if (!(Utilities.ScriptUtilities.IsNullOrUndefined(this.sitemapTree) ||
                                this.sitemapTree.length == 0))
                                for (var _b = 0, _c = this.sitemapTree; _b < _c.length; _b++) {
                                    for (var sitemapNode = _c[_b],
                                        dependencySitemapComponentList = "",
                                        dependencyCount = sitemapNode.getDependencyCount(),
                                        dependencySitemapComponentType = sitemapNode.componentId.toString(),
                                        reqCompLength = sitemapNode.requiredComponentsByEntity.length,
                                        j = 0;
                                        j < reqCompLength;
                                        j++)
                                        if (j == 0 && dependencySitemapComponentList == ""
                                        )
                                            dependencySitemapComponentList += sitemapNode.requiredComponentsByEntity[j]
                                                .parentEntityId.toString();
                                        else
                                            dependencySitemapComponentList +=
                                                ", " +
                                                sitemapNode.requiredComponentsByEntity[j].parentEntityId.toString();
                                    this
                                        .AddDependencyInfoTelemetryEvent(this.appContextManipulationService.AppContext
                                            .appInfo.appId,
                                            CommonModel.ComponentTypeName.SITEMAP,
                                            dependencySitemapComponentType,
                                            dependencyCount,
                                            dependencySitemapComponentList)
                                }
                            if (!(Utilities.ScriptUtilities.IsNullOrUndefined(this.entityTree) ||
                                this.entityTree.length == 0))
                                for (var _d = 0, _e = this.entityTree; _d < _e.length; _d++) {
                                    for (var entityTreeNode = _e[_d], j = 0; j < entityTreeNode.children.length; j++)
                                        for (var entityCount = 0,
                                            dependencyEntityList = "",
                                            parentComponentType = entityTreeNode.children[j].componentId.toString(),
                                            entityListLength = entityTreeNode.children[j].requiredComponentsByEntity
                                                .length,
                                            k = 0;
                                            k < entityListLength;
                                            k++) {
                                            ++entityCount;
                                            if (k == 0 && dependencyEntityList == ""
                                            )
                                                dependencyEntityList += entityTreeNode.children[j]
                                                    .requiredComponentsByEntity[k].parentEntityId.toString();
                                            else
                                                dependencyEntityList +=
                                                    ", " +
                                                    entityTreeNode.children[j].requiredComponentsByEntity[k]
                                                    .parentEntityId
                                                    .toString()
                                        }
                                    this
                                        .AddDependencyInfoTelemetryEvent(this.appContextManipulationService.AppContext
                                            .appInfo.appId,
                                            parentComponentType,
                                            CommonModel.ComponentTypeName.ENTITY,
                                            entityCount,
                                            dependencyEntityList)
                                }
                            if (!(Utilities.ScriptUtilities
                                .IsNullOrUndefined(this.bpfTree) ||
                                this.bpfTree.length == 0))
                                for (var _f = 0, _g = this.bpfTree; _f < _g.length; _f++) {
                                    for (var bpfTreeNode = _g[_f],
                                        parentbpfComponentType = bpfTreeNode.componentId.toString(),
                                        dependencybpfComponentList = "",
                                        bpfCount = 0,
                                        reqCompLength = bpfTreeNode.requiredComponentsByEntity.length,
                                        j = 0;
                                        j < reqCompLength;
                                        j++) {
                                        ++bpfCount;
                                        if (j == 0 && dependencybpfComponentList == ""
                                        )
                                            dependencybpfComponentList += bpfTreeNode.requiredComponentsByEntity[j]
                                                .parentEntityId.toString();
                                        else
                                            dependencybpfComponentList +=
                                                ", " +
                                                bpfTreeNode.requiredComponentsByEntity[j].parentEntityId.toString()
                                    }
                                    this
                                        .AddDependencyInfoTelemetryEvent(this.appContextManipulationService.AppContext
                                            .appInfo.appId,
                                            parentbpfComponentType,
                                            CommonModel.ComponentTypeName.ENTITY,
                                            bpfCount,
                                            dependencybpfComponentList)
                                }
                        };
                        AppDesignerValidationService.prototype
                            .AddDependencyInfoTelemetryEvent =
                            function(appId,
                                parentComponentType,
                                dependentComponentType,
                                dependentComponentCount,
                                dependentComponentIDs) {
                                var appDependencyInfoEvent = new DesignerTelemetry
                                    .AppDependencyInfoEvent(appId,
                                        parentComponentType,
                                        dependentComponentType,
                                        dependentComponentCount,
                                        dependentComponentIDs);
                                this.telemetryService.AddTelemetryEvent(appDependencyInfoEvent)
                            };
                        AppDesignerValidationService.prototype.getArrayByTreeId = function(tree) {
                            var arr;
                            switch (tree) {
                            case AppDesigner.DependencyTree.DashboardTree:
                                arr = this.dashboardTree;
                                break;
                            case AppDesigner.DependencyTree.EntityTree:
                                arr = this.entityTree;
                                break;
                            case AppDesigner.DependencyTree.BPFTree:
                                arr = this.bpfTree;
                                break;
                            case AppDesigner.DependencyTree.SitemapTree:
                                arr = this.sitemapTree;
                                break
                            }
                            return arr
                        };
                        AppDesignerValidationService.prototype
                            .AddDependencyTreeNodeForEntityComponents = function(issue, treeNode) {
                                if (!Utilities.ScriptUtilities.IsNullOrUndefined(issue.ParentEntityId)) {
                                    var entityTreeNode = this
                                        .getEntityNode(issue.ParentEntityId, issue.ParentEntityName);
                                    if (Utilities.ScriptUtilities
                                        .IsNullOrUndefined(entityTreeNode.children)) entityTreeNode.children = [];
                                    entityTreeNode.children.push(treeNode)
                                }
                            };
                        AppDesignerValidationService.prototype.processIssue = function(issue) {
                            if (!Utilities.ScriptUtilities.IsNullOrUndefined(issue)) {
                                var treeNode = new AppDesigner.Models.TreeNode;
                                treeNode.componentId = issue.ComponentId.ToString();
                                treeNode.parentId = Utilities.StringUtilities.EmptyString;
                                treeNode.componentName = issue.ComponentDisplayName;
                                if (!this.addrequiredComponentsByEntity(treeNode, issue.RequiredComponents)) return;
                                switch (issue.ComponentType) {
                                case CommonModel.ComponentTypeCode.SiteMap:
                                    treeNode.componentType = CommonModel.ComponentTypeName.SITEMAP;
                                    this.SitemapTree.push(treeNode);
                                    break;
                                case CommonModel.ComponentTypeCode.BPF:
                                    treeNode.componentType = CommonModel.ComponentTypeName.BUSINESS_PROCESS;
                                    this.BpfTree.push(treeNode);
                                    break;
                                case CommonModel.ComponentTypeCode.Entity:
                                    var entityArea = this.appContextManipulationService.ContextModel.entityArea,
                                        index = entityArea.entityList.indexOf(treeNode.componentId);
                                    if (index != -1)
                                        treeNode.componentName = entityArea.entitySwimLanes[index].entitymetadata
                                            .displayName;
                                    treeNode.componentType = CommonModel.ComponentTypeName.ENTITY;
                                    this.AddEntityTreeNode(treeNode);
                                    break;
                                case CommonModel.ComponentTypeCode.SystemForm:
                                    if (issue.ComponentSubType == 0) {
                                        treeNode.componentType = CommonModel.ComponentTypeName.DASHBOARD;
                                        this.DashboardTree.push(treeNode)
                                    } else {
                                        treeNode.componentType = CommonModel.ComponentTypeName.FORM;
                                        this.AddDependencyTreeNodeForEntityComponents(issue, treeNode)
                                    }
                                    break;
                                case CommonModel.ComponentTypeCode.SavedQuery:
                                    treeNode.componentType = CommonModel.ComponentTypeName.VIEW;
                                    this.AddDependencyTreeNodeForEntityComponents(issue, treeNode);
                                    break;
                                case CommonModel.ComponentTypeCode.SavedQueryVisualization:
                                    treeNode.componentType = CommonModel.ComponentTypeName.CHART;
                                    this.AddDependencyTreeNodeForEntityComponents(issue, treeNode);
                                    break
                                }
                            }
                        };
                        AppDesignerValidationService.prototype
                            .isDashboard = function(componentId) {
                                return !this.metaDataService.ComponentInformationByComponentId.containsKey(componentId)
                            };
                        AppDesignerValidationService.prototype.AddEntityTreeNode = function(treeNode) {
                            this.EntityTree.push(treeNode);
                            this.treeNodeByEntity.add(treeNode.componentId, treeNode)
                        };
                        AppDesignerValidationService.prototype.getEntityNode = function(entityId, entityDisplayName) {
                            if (this.treeNodeByEntity
                                .containsKey(entityId
                                    .ToString())) return this.treeNodeByEntity.getValue(entityId.ToString());
                            var treeNode = new AppDesigner.Models.TreeNode;
                            treeNode.componentId = entityId.ToString();
                            treeNode.parentId = Utilities.StringUtilities.EmptyString;
                            treeNode.componentName = entityDisplayName;
                            treeNode.componentType = CommonModel.ComponentTypeName.ENTITY;
                            treeNode.requiredComponentsByEntity = [];
                            treeNode.children = [];
                            this.AddEntityTreeNode(treeNode);
                            return treeNode
                        };
                        AppDesignerValidationService.prototype.TelemetryForAddDependencies = function() {
                            var selectedListCount;
                            if (this
                                .selectedViewCount !=
                                0 ||
                                this.selectedChartCount != 0 ||
                                this.selectedFormCount != 0) {
                                selectedListCount = new Dictionary;
                                selectedListCount.add(CommonModel.ComponentTypeName.VIEW, this.selectedViewCount);
                                selectedListCount.add(CommonModel.ComponentTypeName.CHART, this.selectedChartCount);
                                selectedListCount.add(CommonModel.ComponentTypeName.FORM, this.selectedFormCount);
                                for (var i = 0; i < selectedListCount.getKeys().length; i++) {
                                    var appAddDependenciesEvent = new DesignerTelemetry
                                        .AppAddDependenciesEvent(this.appContextManipulationService.AppContext.appInfo
                                            .appId,
                                            selectedListCount.getKeys()[i],
                                            selectedListCount.getValues()[i]);
                                    this.telemetryService.AddTelemetryEvent(appAddDependenciesEvent)
                                }
                            } else if (this.addedEntityDependencyCount != 0) {
                                var appAddDependenciesEvent = new DesignerTelemetry
                                    .AppAddDependenciesEvent(this.appContextManipulationService.AppContext.appInfo
                                        .appId,
                                        CommonModel.ComponentTypeName.ENTITY,
                                        this.addedEntityDependencyCount);
                                this.telemetryService.AddTelemetryEvent(appAddDependenciesEvent)
                            }
                        };
                        AppDesignerValidationService.prototype
                            .addrequiredComponentsByEntity = function(treeNode, components) {
                                var _this = this, ret = false;
                                if (Utilities.ScriptUtilities.IsNullOrUndefined(components)) {
                                    treeNode.requiredComponentsByEntity = null;
                                    return ret
                                }
                                var dependencyByEntityId = new Dictionary;
                                components.forEach(function(component, index, array) {
                                    var subType = component.ComponentSubType;
                                    if (component.ComponentType ==
                                        Mscrm.Designers.Common.Models.ComponentTypeCode.SavedQuery &&
                                        Mscrm.Designers.AppDesigner.SupportedViews.SupportedViewsList
                                        .indexOf(subType) ==
                                        -1) return;
                                    if (component.ComponentType ==
                                        Mscrm.Designers.Common.Models.ComponentTypeCode.SystemForm &&
                                        Mscrm.Designers.AppDesigner.SupportedForms.SupportedFormsList
                                        .indexOf(subType) ==
                                        -1) return;
                                    if (!dependencyByEntityId.containsKey(component.ParentEntityId.ToString())) {
                                        var discard = false,
                                            entityMetadata,
                                            dependency_1 = new AppDesigner.Models.Dependencies;
                                        if (component.ComponentType == CommonModel.ComponentTypeCode.Entity) {
                                            entityMetadata = _this.appContextManipulationService
                                                .entityMetadataMap[component
                                                    .ComponentId.ToString()];
                                            if (Utilities.ScriptUtilities
                                                .IsNullOrUndefined(entityMetadata)) discard = true
                                        }
                                        if (!discard) {
                                            ret = true;
                                            dependency_1.parentEntityId = component.ParentEntityId.ToString();
                                            dependency_1.isEntityAddedToAppContext = _this
                                                .isEntityPresentinApp(dependency_1.parentEntityId);
                                            if (dependency_1
                                                .isEntityAddedToAppContext) dependency_1.isEntitySelected = true;
                                            else dependency_1.isEntitySelected = false;
                                            if (!Utilities.StringUtilities
                                                .IsNullOrEmpty(component
                                                    .ParentEntityName)
                                            ) dependency_1.parentEntityDisplayName = component.ParentEntityName;
                                            else if (!Utilities.StringUtilities
                                                .IsNullOrEmpty(component
                                                    .SchemaName)
                                            ) dependency_1.parentEntityDisplayName = component.SchemaName;
                                            else
                                                dependency_1.parentEntityDisplayName = component.ParentEntityId
                                                    .ToString();
                                            dependencyByEntityId.add(component.ParentEntityId.ToString(), dependency_1)
                                        }
                                    }
                                    var dependency = dependencyByEntityId.getValue(component.ParentEntityId.ToString()),
                                        requiredComponent = new AppDesigner.Models.RequiredComponents;
                                    requiredComponent.componentId = component.ComponentId.ToString();
                                    requiredComponent.componentName = component.DisplayName;
                                    requiredComponent.componentschemaId = component.SchemaName;
                                    requiredComponent.componentType = component.ComponentType;
                                    requiredComponent.componentSubType = component.ComponentSubType;
                                    requiredComponent.componentTypeName = _this
                                        .getComponentTypeName(component.ComponentType,
                                            component.ComponentId.ToString());
                                    if (dependency) {
                                        if (Utilities.ScriptUtilities
                                            .IsNullOrUndefined(dependency.reqComponents)) dependency.reqComponents = [];
                                        component.ComponentType != CommonModel.ComponentTypeCode.Entity &&
                                            dependency.reqComponents.push(requiredComponent)
                                    }
                                });
                                for (var dependencyKeys = dependencyByEntityId.getKeys(), _i = 0;
                                    _i < dependencyKeys.length;
                                    _i++) {
                                    var dependency = dependencyKeys[_i];
                                    dependencyByEntityId.getValue(dependency).reqComponents.length == 0 &&
                                        dependencyByEntityId.getValue(dependency).isEntityAddedToAppContext == true &&
                                        dependencyByEntityId.remove(dependency)
                                }
                                treeNode.requiredComponentsByEntity = dependencyByEntityId.getValues();
                                return ret
                            };
                        AppDesignerValidationService.prototype.isEntityPresentinApp = function(entityId) {
                            for (var i = 0;
                                i < this.appContextManipulationService.ContextModel.entityArea.entityList.length;
                                i++)
                                if (entityId ==
                                    this.appContextManipulationService.ContextModel.entityArea.entityList[i]
                                    .toString()) return true;
                            return false
                        };
                        AppDesignerValidationService.prototype
                            .getComponentTypeName = function(componentType, componentId) {
                                if (this.componentTypeMap.containsKey(componentType)) {
                                    var componentTypeEnumName = Designers.Common.Utility.StringUtilities.EmptyString;
                                    if (this.componentTypeMap.getValue(componentType) ==
                                        CommonModel.ComponentTypeName.FORM &&
                                        this
                                        .isInDashboardMasterList(componentId)
                                    ) componentTypeEnumName = CommonModel.ComponentTypeName.DASHBOARD;
                                    else if (this.componentTypeMap
                                        .getValue(componentType) ==
                                        CommonModel.ComponentTypeName.FORM &&
                                        !this
                                        .isDashboard(componentId)
                                    ) componentTypeEnumName = CommonModel.ComponentTypeName.FORM;
                                    else componentTypeEnumName = this.componentTypeMap.getValue(componentType);
                                    return this.localizationService
                                        .getResourceString("AppDesigner.Artifact." + componentTypeEnumName)
                                }
                                return Utilities.StringUtilities.EmptyString
                            };
                        AppDesignerValidationService.prototype.isInDashboardMasterList = function(componentId) {
                            for (var i = 0;
                                i < this.appContextManipulationService.ContextModel.dashboards.masterList.length;
                                i++)
                                if (this.appContextManipulationService.ContextModel.dashboards.masterList[i].id ==
                                    componentId) return true;
                            return false
                        };
                        AppDesignerValidationService.prototype.onValidateAppFailure = function(error) {
                            var errorList = [];
                            this.notificationService
                                .ParseAndDisplayMultipleSOAPErrors(Designers.Common.Constants.DesignerName.AppDesigner,
                                    error,
                                    function() { return });
                            var appValidateEvent = new DesignerTelemetry
                                .AppValidateEvent(this.appContextManipulationService.AppContext.appInfo.appId,
                                    error.toString(),
                                    null);
                            this.telemetryService.AddTelemetryEvent(appValidateEvent)
                        };
                        AppDesignerValidationService.$inject = [
                            AppDesigner.AppDesignerServiceNames.MetaDataService, Designers.Common.Constants.ServiceNames
                            .AppContextManipulationService, "mscrmComponentDependencyService", Designers.Common
                            .Constants
                            .ServiceNames.NotificationBarService, ServiceNames.PerfService, ServiceNames
                            .AppDesignerPerfKpiService, ServiceNames.TelemetryService, Designers.Common.Constants
                            .ServiceNames.LocalizationService
                        ];
                        return AppDesignerValidationService
                    }();
                DataServices.AppDesignerValidationService = AppDesignerValidationService;
                AppDesigner.AppDesignerModule.service(AppDesigner.AppDesignerServiceNames.ValidationService,
                    AppDesignerValidationService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Designers.Common.Constants.ServiceNames,
                    StringUtilities = Mscrm.Designers.Common.Utility.StringUtilities,
                    AppInterface = Mscrm.Designers.Common.AppInterface,
                    ComponentService = function() {
                        function ComponentService(appContextManipulationService,
                            localizationService,
                            legacyDesignerService,
                            modalDialogService,
                            urlHelperService,
                            compDependencyService,
                            metadataService,
                            mscrmAppCanvasScrollService,
                            $q,
                            categorizationService,
                            perfService,
                            appDesignerPerfKpisService,
                            traceUtility,
                            dirtyCheckService,
                            crudOperationService) {
                            this.appContextManipulationService = appContextManipulationService;
                            this.localizationService = localizationService;
                            this.legacyDesignerService = legacyDesignerService;
                            this.modalDialogService = modalDialogService;
                            this.urlHelperService = urlHelperService;
                            this.compDependencyService = compDependencyService;
                            this.metadataService = metadataService;
                            this.mscrmAppCanvasScrollService = mscrmAppCanvasScrollService;
                            this.$q = $q;
                            this.categorizationService = categorizationService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.traceUtility = traceUtility;
                            this.dirtyCheckService = dirtyCheckService;
                            this.crudOperationService = crudOperationService;
                            this.msgForEntitySelection = this.localizationService
                                .getResourceString("AppDesigner.ConfirmRemoveSubcomponentsMessage");
                            this.msgForEntityRecordSelection = this.localizationService
                                .getResourceString("AppDesigner.ConfirmRemoveMessage")
                        }

                        Object.defineProperty(ComponentService.prototype,
                            "componentType",
                            {
                                "get": function() { return this.ContextModel.CurrentComponentList.componentListType },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ComponentService.prototype,
                            "ContextModel",
                            {
                                "get": function() { return this.appContextManipulationService.ContextModel },
                                enumerable: true,
                                configurable: true
                            });
                        ComponentService.prototype.AddSiteMap = function(sitemap) {
                            this.compDependencyService
                                .AddDependenciesforArtifact(CommonModel.ComponentTypeCode.SiteMap, sitemap.id);
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.ContextModel.siteMaps.selectedList[0]) &&
                                this.ContextModel.siteMaps.selectedList[0].id === sitemap.id) return;
                            this.ContextModel.siteMaps.selectedList = [];
                            this.appContextManipulationService.AddComponentInApp(this.ContextModel.siteMaps, sitemap)
                        };
                        ComponentService.prototype.RetrieveAppSiteMap = function() {
                            if (StringUtilities.IsNullOrEmpty(this.appContextManipulationService.GetSitemapId())) {
                                var params = [];
                                params.push(this.appContextManipulationService.AppContext.appInfo.uniqueName);
                                this.crudOperationService
                                    .GetData(AppInterface.BusinessLogic.ActionKey.SiteMapRetriveByUniqueName,
                                        params,
                                        function(response) {
                                            response.data.value.length > 0 &&
                                                this.AddSiteMap(new AppDesigner.Models
                                                    .SelectableArtifactInfo(response.data.value[0].sitemapid, ""))
                                        }.bind(this),
                                        function(error) {
                                            this.traceUtility
                                                .LogInfo(Tracing.TraceComponent.SitemapDesigner,
                                                    "RetrieveAppSiteMap",
                                                    new Mscrm.Designers.Common.Tracing
                                                    .StringTraceData("Failed to retrieve App Sitemap based on sitemap unique name."))
                                        }.bind(this))
                            }
                        };
                        ComponentService.prototype
                            .AddComponentToSelectedList = function(artifact, component, shouldSetDirty) {
                                if (shouldSetDirty === void 0) shouldSetDirty = true;
                                component.isAddedToApp = true;
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.addComponent)).start();
                                this.appContextManipulationService
                                    .AddComponentInApp(artifact, component, shouldSetDirty);
                                var compTypeCode = artifact.componentTypeCode,
                                    compTypeName = artifact.displayName,
                                    compId = component.id;
                                (compTypeName == CommonModel.ComponentTypeName.SITEMAP ||
                                        compTypeName == CommonModel.ComponentTypeName.DASHBOARD ||
                                        compTypeName == CommonModel.ComponentTypeName.BUSINESS_PROCESS) &&
                                    this.compDependencyService.AddDependenciesforArtifact(compTypeCode, compId);
                                if (compTypeName == CommonModel.ComponentTypeName.FORM ||
                                    compTypeName == CommonModel.ComponentTypeName.VIEW) {
                                    var typeBasedNode = artifact;
                                    this.categorizationService
                                        .addItemToTypeList(typeBasedNode.listByTypeMap, component);
                                    this.perfService
                                        .getStopWatch(this.appDesignerPerfKpisService
                                            .getPerfKpiByName(AppDesigner.Services.KpiNames.addComponent)).stop()
                                }
                            };
                        ComponentService.prototype.AddRemoveComponentInSelectedList = function(selectedComponent) {
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.AddRemoveComponentslist;
                            selectedComponent.status = !selectedComponent.status;
                            this.SelectComponentSection(this.componentType, null);
                            if (selectedComponent
                                .isAddedToApp)
                                this.AddComponentToSelectedList(this.ContextModel.selections.selectedArtifact,
                                    selectedComponent);
                            else this.RemoveWithConfirmCheck(selectedComponent)
                        };
                        Object.defineProperty(ComponentService.prototype,
                            "selectedSwimlane",
                            {
                                "get": function() { return this.selectedSwimLaneIndex },
                                "set": function(selectedSwimlane) { this.selectedSwimLaneIndex = selectedSwimlane },
                                enumerable: true,
                                configurable: true
                            });
                        ComponentService.prototype.CanDisplayComponentList = function(componentType) {
                            var bRet = true;
                            switch (componentType) {
                            case CommonModel.ComponentTypeName.VIEW:
                            case CommonModel.ComponentTypeName.FORM:
                            case CommonModel.ComponentTypeName.CHART:
                                if (!this.ContextModel.entityArea.entitySwimLanes.length) bRet = false;
                                break
                            }
                            return bRet
                        };
                        ComponentService.prototype.DisplayAddComponentsPane = function() {
                            this.OpenAddComponentsPane();
                            this.SetSelections(null, null, null)
                        };
                        ComponentService.prototype.OpenAddComponentsPane = function() {
                            this.ContextModel.CurrentComponentList.componentListType = null;
                            this.ContextModel.selectedTab = AppDesigner.AppDesignerTab.Components;
                            this.ContextModel.CurrentComponentList.selectionType = AppDesigner.SelectionType.NoSelection
                        };
                        ComponentService.prototype.SetCurrentComponentList = function(componentType, componentList) {
                            this.ContextModel.CurrentComponentList.componentListType = componentType;
                            this.ContextModel.CurrentComponentList.components = componentList;
                            this.ContextModel.CurrentComponentList.selectionType = AppDesigner.SelectionType
                                .NoSelection;
                            this.ContextModel.selectedTab = AppDesigner.AppDesignerTab.Components;
                            (this.componentType === Designers.Common.Models.ComponentTypeName.FORM ||
                                    this.componentType === Designers.Common.Models.ComponentTypeName.VIEW) &&
                                this.categorizationService
                                .populateTypesList(this.componentType.toString(), componentList);
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(componentList) &&
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.loadComponentList)).stop()
                        };
                        ComponentService.prototype
                            .RetrieveComponentList = function(componentType,
                                artifactNode,
                                entityLogicalName,
                                entityId,
                                progressDialogLocation) {
                                var _this = this, componentMetadataPromise = this.$q.defer();
                                if (Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(progressDialogLocation)
                                ) progressDialogLocation = Designers.Common.Constants.ProgressDialogLocation.RightPane;
                                if (Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(artifactNode.masterList) ||
                                    artifactNode.masterList.length == 0) {
                                    this.startRetievalProgress(progressDialogLocation);
                                    this.metadataService
                                        .getMetadataForArtifact(componentType.toString(), entityLogicalName, entityId)
                                        .then(function(response) {
                                                _this.stopRetievalProgress(progressDialogLocation);
                                                artifactNode.masterList = response;
                                                componentMetadataPromise.resolve(artifactNode.masterList)
                                            },
                                            function(reason) {
                                                _this.stopRetievalProgress(progressDialogLocation);
                                                componentMetadataPromise.reject()
                                            })
                                } else componentMetadataPromise.resolve(artifactNode.masterList);
                                return componentMetadataPromise.promise
                            };
                        ComponentService.prototype.GetEntityInfoSwimLane = function() {
                            var retValue = this.ContextModel.selections.selectedEntitySwimLane;
                            if (!retValue) retValue = this.ContextModel.entityArea.entitySwimLanes[0];
                            return retValue
                        };
                        ComponentService.prototype.CanCreateNewEntityAsset = function(selectedIndex, componentType) {
                            var canCreate = true;
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(selectedIndex)) {
                                var entityInfo = this.ContextModel.entityArea.entitySwimLanes[selectedIndex];
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(componentType) &&
                                    !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(entityInfo))
                                    switch (componentType) {
                                    case CommonModel.ComponentTypeName.VIEW:
                                        canCreate = entityInfo.entitymetadata.canCreateViews;
                                        break;
                                    case CommonModel.ComponentTypeName.FORM:
                                        canCreate = entityInfo.entitymetadata.canCreateForms;
                                        break;
                                    case CommonModel.ComponentTypeName.CHART:
                                        canCreate = entityInfo.entitymetadata.canCreateCharts;
                                        break
                                    }
                            }
                            return canCreate
                        };
                        ComponentService.prototype.OnEntityChange = function(selectedIndex) {
                            var _this = this;
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.loadComponentList)).start();
                            var entityInfo = this.ContextModel.entityArea.entitySwimLanes[selectedIndex];
                            this.selectedSwimlane = selectedIndex;
                            this.ContextModel.selections.selectedArtifact = entityInfo
                                .getArtifactNode(this.componentType.toString());
                            this.ContextModel.selections.selectedEntitySwimLane = entityInfo;
                            this.SetCurrentComponentList(this.componentType, null);
                            this.RetrieveComponentList(this.componentType,
                                entityInfo.getArtifactNode(this.componentType.toString()),
                                entityInfo.entitymetadata.logicalName,
                                entityInfo.entitymetadata.id,
                                Designers.Common.Constants.ProgressDialogLocation.RightPane).then(function(response) {
                                _this.SetCurrentComponentList(_this.componentType, response);
                                _this.ContextModel.selections.selectedArtifact.selectedList.length > 0 &&
                                    !_this.ContextModel.selections.selectedArtifact.selectedList[0].isAddedToApp &&
                                    _this.UpdateSelectedList(_this.ContextModel.selections.selectedArtifact, false)
                            });
                            this.mscrmAppCanvasScrollService.ScrollToScrollPoint(entityInfo.entitymetadata.logicalName);
                            this.SetSelections(entityInfo, this.ContextModel.selections.selectedArtifact, null)
                        };
                        ComponentService.prototype.DisplayComponentList = function(componentType) {
                            var _this = this;
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.loadComponentList)).start();
                            var entityInfo;
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.DisplayComponentsList;
                            switch (componentType) {
                            case CommonModel.ComponentTypeName.ENTITY:
                                this.SetCurrentComponentList(CommonModel.ComponentTypeName.ENTITY,
                                    this.appContextManipulationService.getEntityMetadata());
                                this.mscrmAppCanvasScrollService.ScrollToScrollPoint("entity");
                                break;
                            case CommonModel.ComponentTypeName.DASHBOARD:
                                this.SetCurrentComponentList(componentType, null);
                                this.RetrieveComponentList(componentType, this.ContextModel.dashboards)
                                    .then(function(response) {
                                        _this.SetCurrentComponentList(_this.componentType, response);
                                        _this.ContextModel.dashboards.selectedList.length > 0 &&
                                            !_this.ContextModel.dashboards.selectedList[0].isAddedToApp &&
                                            _this.UpdateSelectedList(_this.ContextModel.dashboards)
                                    });
                                this.mscrmAppCanvasScrollService.ScrollToScrollPoint("dashboard");
                                this.SetSelections(null, this.ContextModel.dashboards, null, false);
                                break;
                            case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                this.SetCurrentComponentList(componentType, null);
                                this.RetrieveComponentList(componentType, this.ContextModel.businessProcesses)
                                    .then(function(response) {
                                        _this.SetCurrentComponentList(_this.componentType, response);
                                        _this.ContextModel.businessProcesses.selectedList.length > 0 &&
                                            !_this.ContextModel.businessProcesses.selectedList[0].isAddedToApp &&
                                            _this.UpdateSelectedList(_this.ContextModel.businessProcesses)
                                    });
                                this.mscrmAppCanvasScrollService.ScrollToScrollPoint("bpc");
                                this.SetSelections(null, this.ContextModel.businessProcesses, null, false);
                                break;
                            case CommonModel.ComponentTypeName.FORM:
                            case CommonModel.ComponentTypeName.VIEW:
                            case CommonModel.ComponentTypeName.CHART:
                                entityInfo = this.GetEntityInfoSwimLane();
                                this.ContextModel.CurrentComponentList.componentListType = componentType;
                                this.OnEntityChange(this.ContextModel.entityArea.entitySwimLanes.indexOf(entityInfo));
                                break
                            }
                        };
                        ComponentService.prototype.UpdateSelectedList = function(artifactNode, shouldSetDirty) {
                            if (shouldSetDirty === void 0) shouldSetDirty = true;
                            for (var masterListById = new Dictionary, _i = 0, _a = artifactNode.masterList;
                                _i < _a.length;
                                _i++) {
                                var masterArtifact = _a[_i];
                                masterListById.add(masterArtifact.id, masterArtifact)
                            }
                            for (var newSelectedList = [], _b = 0, _c = artifactNode.selectedList;
                                _b < _c.length;
                                _b++
                            ) {
                                var item = _c[_b];
                                newSelectedList.push(item)
                            }
                            artifactNode.selectedList = [];
                            for (var _d = 0; _d < newSelectedList.length; _d++) {
                                var selectedArtifact = newSelectedList[_d];
                                if (masterListById.containsKey(selectedArtifact.id)) {
                                    var itemToAdd = masterListById.getValue(selectedArtifact.id);
                                    !itemToAdd.isAddedToApp &&
                                        this.AddComponentToSelectedList(artifactNode, itemToAdd, shouldSetDirty)
                                }
                            }
                        };
                        ComponentService.prototype.CreateNew = function(formitems) {
                            switch (this.componentType) {
                            case CommonModel.ComponentTypeName.ENTITY:
                                this.legacyDesignerService.OpenEntityEditor(AppDesigner.ActionType.New);
                                break;
                            case CommonModel.ComponentTypeName.DASHBOARD:
                                var dashboardLayoutUrl = this.urlHelperService.GetDashboardLayoutUrl();
                                this.modalDialogService.open(new Designers.Common.ModalDialog
                                    .IFrameDialogParams(dashboardLayoutUrl));
                                break;
                            case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                var workflowTemplatePageUrl = this.urlHelperService.GetWorkflowTemplatePageUrl();
                                this.modalDialogService.open(new Designers.Common.ModalDialog
                                    .IFrameDialogParams(workflowTemplatePageUrl));
                                break;
                            case Designers.Common.Models.ComponentTypeName.CHART:
                                this.legacyDesignerService
                                    .OpenChartEditor(this.ContextModel.selections.selectedEntitySwimLane.entitymetadata,
                                        null);
                                break;
                            case Designers.Common.Models.ComponentTypeName.VIEW:
                                this.legacyDesignerService
                                    .OpenViewEditor(this.ContextModel.selections.selectedEntitySwimLane.entitymetadata,
                                        null);
                                break;
                            case Designers.Common.Models.ComponentTypeName.FORM:
                                this.legacyDesignerService
                                    .OpenFormEditor(this.ContextModel.selections.selectedEntitySwimLane.entitymetadata,
                                        formitems.formType,
                                        null);
                                break
                            }
                        };
                        ComponentService.prototype.HandleComponentListSelection = function(selectedComponent) {
                            switch (this.componentType) {
                            case CommonModel.ComponentTypeName.ENTITY:
                                if (!selectedComponent.isAddedToApp) {
                                    this.perfService
                                        .getStopWatch(this.appDesignerPerfKpisService
                                            .getPerfKpiByName(AppDesigner.Services.KpiNames.removeComponent)).start();
                                    this.RemoveWithConfirmCheck(selectedComponent);
                                    this.perfService
                                        .getStopWatch(this.appDesignerPerfKpisService
                                            .getPerfKpiByName(AppDesigner.Services.KpiNames.removeComponent)).stop()
                                } else {
                                    this.perfService
                                        .getStopWatch(this.appDesignerPerfKpisService
                                            .getPerfKpiByName(AppDesigner.Services.KpiNames.addComponent)).start();
                                    this.appContextManipulationService.AddEntityComponentInApp(selectedComponent);
                                    this.perfService
                                        .getStopWatch(this.appDesignerPerfKpisService
                                            .getPerfKpiByName(AppDesigner.Services.KpiNames.addComponent)).stop()
                                }
                                break;
                            case CommonModel.ComponentTypeName.DASHBOARD:
                            case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                            case CommonModel.ComponentTypeName.VIEW:
                            case CommonModel.ComponentTypeName.CHART:
                            case CommonModel.ComponentTypeName.FORM:
                                this.AddRemoveComponentInSelectedList(selectedComponent);
                                break
                            }
                        };
                        ComponentService.prototype.SelectComponentSection = function(componentType, selectedComponent) {
                            switch (this.componentType) {
                            case CommonModel.ComponentTypeName.DASHBOARD:
                                this.SetSelections(null, this.ContextModel.dashboards, selectedComponent, false);
                                break;
                            case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                this.SetSelections(null, this.ContextModel.businessProcesses, selectedComponent, false);
                                break;
                            case CommonModel.ComponentTypeName.CHART:
                            case CommonModel.ComponentTypeName.VIEW:
                            case CommonModel.ComponentTypeName.FORM:
                                this.SetSelections(this.ContextModel.selections.selectedEntitySwimLane,
                                    this.ContextModel.selections.selectedArtifact,
                                    selectedComponent,
                                    false);
                                break
                            }
                        };
                        ComponentService.prototype.RemoveWithConfirmCheck = function(selectedComponent) {
                            var msg;
                            if (selectedComponent)
                                msg = this.componentType === CommonModel.ComponentTypeName.ENTITY
                                    ? this.msgForEntitySelection
                                    : this.msgForEntityRecordSelection;
                            else
                                msg = !(null != this.ContextModel.selections.selectedRecordFromArtifact) &&
                                    null != this.ContextModel.selections.selectedEntitySwimLane
                                    ? this.msgForEntitySelection
                                    : this.msgForEntityRecordSelection;
                            var promise = this.modalDialogService
                                .open(new Designers.Common.ModalDialog
                                    .ConfirmDialogParams(this.localizationService
                                        .getResourceString("AppDesigner.ConfirmRemoveTitle"),
                                        msg,
                                        this.localizationService.getResourceString("AppDesigner.OK"),
                                        this.localizationService.getResourceString("AppDesigner.Cancel")));
                            promise.then(function(result) { this.Remove(selectedComponent) }.bind(this),
                                function(result) { if (selectedComponent) selectedComponent.isAddedToApp = true }
                                .bind(this))
                        };
                        ComponentService.prototype
                            .IsComponentPaneDataRetrieveInProgress =
                            function() { return this.componentPaneDataRetriveInProgress };
                        ComponentService.prototype
                            .RemoveItemFromCategorizedList = function(artifactNode, selectedComponent) {
                                if (artifactNode.displayName == CommonModel.ComponentTypeName.FORM ||
                                    artifactNode.displayName == CommonModel.ComponentTypeName.VIEW) {
                                    this.categorizationService
                                        .removeItemFromTypeList(artifactNode.listByTypeMap, selectedComponent);
                                    this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                        "RemoveItemFromCategorizedList",
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(AppDesigner.EventStatus
                                            .Success +
                                            "Removed items successfully"));
                                    this.traceUtility.Scenario = ""
                                }
                            };
                        ComponentService.prototype.Remove = function(selectedComponent) {
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.removeComponent)).start();
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                .AppDesignerCanvas,
                                true);
                            if (selectedComponent)
                                if (this.componentType === CommonModel.ComponentTypeName.ENTITY) {
                                    this.ContextModel.entityArea.RemoveEntity(selectedComponent);
                                    this.SetSelections(null, null, null)
                                } else {
                                    var index = this.ContextModel.selections.selectedArtifact.selectedList
                                        .indexOf(selectedComponent);
                                    this.ContextModel.selections.selectedArtifact.selectedList.splice(index, 1);
                                    selectedComponent.isAddedToApp = false;
                                    this
                                        .RemoveItemFromCategorizedList(this.ContextModel.selections.selectedArtifact,
                                            selectedComponent);
                                    this.ContextModel.selections.selectedRecordFromArtifact = null
                                }
                            else if (this.ContextModel.selections.selectedEntitySwimLane != null &&
                                this.ContextModel.selections.selectedRecordFromArtifact == null) {
                                this.ContextModel.entityArea
                                    .RemoveEntity(this.ContextModel.selections.selectedEntitySwimLane.entitymetadata);
                                this.SetSelections(null, null, null)
                            } else {
                                var indexOfRecord = this.ContextModel.selections.selectedArtifact.selectedList
                                    .indexOf(this.ContextModel.selections.selectedRecordFromArtifact);
                                this.ContextModel.selections.selectedRecordFromArtifact.status = false;
                                this.ContextModel.selections.selectedRecordFromArtifact.isAddedToApp = false;
                                this.ContextModel.selections.selectedArtifact.selectedList.splice(indexOfRecord, 1);
                                this
                                    .RemoveItemFromCategorizedList(this.ContextModel.selections.selectedArtifact,
                                        this.ContextModel.selections.selectedRecordFromArtifact);
                                this.ContextModel.selections.selectedRecordFromArtifact = null
                            }
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.removeComponent)).stop()
                        };
                        ComponentService.prototype
                            .HandleExtraOptionSelection = function(component) { this.AddAllAssets(component) };
                        ComponentService.prototype
                            .SetSelections = function(entitySwimLane, artifact, record, isFullEntitySwimLaneSelected) {
                                if (isFullEntitySwimLaneSelected === void 0) isFullEntitySwimLaneSelected = false;
                                this.ContextModel.selections
                                    .isFullEntitySwimLaneSelected = isFullEntitySwimLaneSelected;
                                this.ContextModel.selections.selectedEntitySwimLane = entitySwimLane;
                                this.ContextModel.selections.selectedArtifact = artifact;
                                this.ContextModel.selections.selectedRecordFromArtifact = record
                            };
                        ComponentService.prototype.AddComponentsToApp = function(componentslist, artifactNode) {
                            if (componentslist)
                                for (var len = componentslist.length, n = 0; n < len; n++)
                                    if (!this.IsArtifactItemAddedToSelectedList(componentslist[n], artifactNode)) {
                                        componentslist[n].isAddedToApp = true;
                                        this.appContextManipulationService
                                            .AddComponentInApp(artifactNode, componentslist[n]);
                                        (artifactNode.displayName == CommonModel.ComponentTypeName.FORM ||
                                                artifactNode.displayName == CommonModel.ComponentTypeName.VIEW) &&
                                            this.categorizationService
                                            .addItemToTypeList(artifactNode.listByTypeMap, componentslist[n])
                                    }
                        };
                        ComponentService.prototype
                            .IsArtifactItemAddedToSelectedList = function(artifactItem, artifactNode) {
                                if (Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(artifactNode) ||
                                    Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(artifactNode.selectedList)) return false;
                                for (var artifactSelectedList = artifactNode.selectedList,
                                    listLength = artifactSelectedList.length,
                                    index = 0;
                                    index < listLength;
                                    index++) if (artifactSelectedList[index].id == artifactItem.id) return true;
                                return false
                            };
                        ComponentService.prototype.ShouldUpdateSelectedListForArtifactNode = function(artifactNode) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(artifactNode) &&
                                !Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(artifactNode
                                    .selectedList))
                                if (artifactNode.selectedList
                                    .length >
                                    0 &&
                                    !artifactNode.selectedList[0].isAddedToApp) return true;
                            return false
                        };
                        ComponentService.prototype.AddAllAssets = function(entity) {
                            for (var _this = this,
                                entitySwimLane,
                                formArtifactNode,
                                viewArtifactNode,
                                chartArtifactNode,
                                swimlanes = this.ContextModel.entityArea.entitySwimLanes,
                                len = swimlanes.length,
                                n = 0;
                                n < len;
                                n++)
                                if (swimlanes[n].entitymetadata.id === entity.id) {
                                    entitySwimLane = swimlanes[n];
                                    break
                                }
                            for (var index = 0;
                                index < entitySwimLane.entityArtifacts.length;
                                index++
                            )
                                this.ShouldUpdateSelectedListForArtifactNode(entitySwimLane.entityArtifacts[index]) &&
                                    this.UpdateSelectedList(entitySwimLane.entityArtifacts[index]);
                            formArtifactNode = entitySwimLane
                                .getArtifactNode(CommonModel.ComponentTypeName.FORM.toString());
                            this.RetrieveComponentList(CommonModel.ComponentTypeName.FORM,
                                    formArtifactNode,
                                    entitySwimLane.entitymetadata.logicalName,
                                    entitySwimLane.entitymetadata.id,
                                    Designers.Common.Constants.ProgressDialogLocation.Canvas)
                                .then(function(response) { _this.AddComponentsToApp(response, formArtifactNode) });
                            viewArtifactNode = entitySwimLane
                                .getArtifactNode(CommonModel.ComponentTypeName.VIEW.toString());
                            this.RetrieveComponentList(CommonModel.ComponentTypeName.VIEW,
                                    viewArtifactNode,
                                    entitySwimLane.entitymetadata.logicalName,
                                    entitySwimLane.entitymetadata.id,
                                    Designers.Common.Constants.ProgressDialogLocation.Canvas)
                                .then(function(response) { _this.AddComponentsToApp(response, viewArtifactNode) });
                            chartArtifactNode = entitySwimLane
                                .getArtifactNode(CommonModel.ComponentTypeName.CHART.toString());
                            this.RetrieveComponentList(CommonModel.ComponentTypeName.CHART,
                                    chartArtifactNode,
                                    entitySwimLane.entitymetadata.logicalName,
                                    entitySwimLane.entitymetadata.id,
                                    Designers.Common.Constants.ProgressDialogLocation.Canvas)
                                .then(function(response) { _this.AddComponentsToApp(response, chartArtifactNode) });
                            entity.extraOptionsModel.bAllEntityAssetsAdded = true
                        };
                        ComponentService.prototype.CheckIfNodeHasType = function(artifactNode) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(artifactNode)) {
                                var artifactName = artifactNode.displayName;
                                return artifactName == CommonModel.ComponentTypeName.FORM ||
                                    artifactName == CommonModel.ComponentTypeName.VIEW
                            }
                            return false
                        };
                        ComponentService.prototype.GetTypeMap = function(artifactNode) {
                            if (this
                                .CheckIfNodeHasType(artifactNode)
                            ) return this.categorizationService.getTypeMap(artifactNode);
                            return null
                        };
                        ComponentService.prototype.GetTypesList = function(artifactNode) {
                            if (this
                                .CheckIfNodeHasType(artifactNode)
                            ) return this.categorizationService.getTypesList(artifactNode);
                            return null
                        };
                        ComponentService.prototype.startRetievalProgress = function(progressDialogLocation) {
                            switch (progressDialogLocation) {
                            case Designers.Common.Constants.ProgressDialogLocation.RightPane:
                                this.componentPaneDataRetriveInProgress = true;
                                break;
                            case Designers.Common.Constants.ProgressDialogLocation.Canvas:
                                this.modalDialogService
                                    .showProgress(new Designers.Common.ModalDialog
                                        .ProgressDialogParams(this.localizationService
                                            .getResourceString("PageLoadingMessage")));
                                break
                            }
                        };
                        ComponentService.prototype.stopRetievalProgress = function(progressDialogLocation) {
                            switch (progressDialogLocation) {
                            case Designers.Common.Constants.ProgressDialogLocation.RightPane:
                                this.componentPaneDataRetriveInProgress = false;
                                break;
                            case Designers.Common.Constants.ProgressDialogLocation.Canvas:
                                this.modalDialogService.hideProgress();
                                break
                            }
                        };
                        ComponentService.$inject = [
                            "mscrmAppContextManipulationService", "mscrmLocalizationService",
                            "mscrmLegacyDesignerService",
                            "mscrmModalDialogService", ServiceNames.UrlHelperService, "mscrmComponentDependencyService",
                            "mscrmMetadataService", "mscrmAppCanvasScrollService", "$q", AppDesigner
                            .AppDesignerServiceNames
                            .CategorizationService, "mscrmPerfService", "mscrmAppDesignerPerfKpisService", ServiceNames
                            .TraceUtilityService, ServiceNames.DirtyCheckService, AppInterface.AppInterfaceConstants
                            .ServiceNames.AppInterfaceCRUDOperations
                        ];
                        return ComponentService
                    }();
                DataServices.ComponentService = ComponentService;
                AppDesigner.AppDesignerModule.service("mscrmComponentService", ComponentService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    CommonModel = Mscrm.Designers.Common.Models,
                    Utility = Mscrm.Designers.Common.Utility,
                    DesignerTelemetry = Mscrm.Designers.AppDesigner.Telemetry,
                    Telemetry = Mscrm.Designers.Common.Telemetry,
                    CommonConstants = Mscrm.Designers.Common.Constants,
                    GlobalCommandBarController = function(_super) {
                        __extends(GlobalCommandBarController, _super);

                        function GlobalCommandBarController(scope,
                            appContextManipulationService,
                            perfService,
                            appDesignerPerfKpisService,
                            appInterfaceService,
                            traceUtility,
                            notificationService,
                            validationService,
                            telemetryService,
                            modalDialogService,
                            localizationService,
                            keyboardShortcutService,
                            dirtyCheckService,
                            cacheUtilityService) {
                            _super.call(this, appContextManipulationService, cacheUtilityService);
                            this.scope = scope;
                            this.appContextManipulationService = appContextManipulationService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.appInterfaceService = appInterfaceService;
                            this.traceUtility = traceUtility;
                            this.notificationService = notificationService;
                            this.validationService = validationService;
                            this.telemetryService = telemetryService;
                            this.modalDialogService = modalDialogService;
                            this.localizationService = localizationService;
                            this.keyboardShortcutService = keyboardShortcutService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.cacheUtilityService = cacheUtilityService;
                            this.saveAndCloseAppDesigner = false;
                            this.RegisterShortcutKeys();
                            this.scope.$on("$destroy", this.destructor.bind(this))
                        }

                        GlobalCommandBarController.prototype.destructor = function() { this.DeregisterShortcutKeys() };
                        Object.defineProperty(GlobalCommandBarController.prototype,
                            "IsAppDesignerInDirtyState",
                            {
                                "get": function() {
                                    return this.dirtyCheckService
                                        .IsDesignerInDirtyState(Designers.Common.Constants.DesignerName.AppDesigner)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(GlobalCommandBarController.prototype,
                            "IsAppInPublishedState",
                            {
                                "get": function() { return this.AppContext.appInfo.status === "AppDesigner.Published" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(GlobalCommandBarController.prototype,
                            "IsAppPropertiesValid",
                            {
                                "get": function() {
                                    return !Utility.StringUtilities.IsNullOrEmpty(this.AppContext.appInfo.title)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        GlobalCommandBarController.prototype
                            .TitleClick = function() {
                                this.appContextManipulationService.ContextModel.selectedTab = AppDesigner.AppDesignerTab
                                    .Properties
                            };
                        GlobalCommandBarController.prototype
                            .triggerScopeApplyPhase = function() { !this.scope.$$phase && this.scope.$apply() };
                        GlobalCommandBarController.prototype.Save = function() {
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.Save;
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.globalSave)).start();
                            this.notificationService.ClearNotificationText();
                            var loadingMessage = Utility.StringUtilities
                                .Format(this.localizationService.getResourceString("Designer.Save.LoadingMessage"),
                                    [this.localizationService.getResourceString("AppDesigner.App")]);
                            this.modalDialogService.open(new Designers.Common.ModalDialog
                                .ProgressDialogParams(loadingMessage));
                            this.appInterfaceService
                                .SaveAppComponents(this.AppContext.appInfo,
                                    this.appContextManipulationService.getAppComponents(),
                                    this.onSaveAppComponentsSuccess.bind(this),
                                    this.onSaveAppComponentsFailure.bind(this));
                            this.traceUtility.Scenario = ""
                        };
                        GlobalCommandBarController.prototype.RegisterShortcutKeys = function() {
                            this.saveFunction = this.Save.bind(this);
                            this.saveAndCloseFunction = this.SaveAndClose.bind(this);
                            this.validateFunction = this.Validate.bind(this);
                            this.publishFunction = this.Publish.bind(this);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalSaveKeyCode1,
                                    this.saveFunction);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalSaveKeyCode2,
                                    this.saveFunction);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalSaveAndCloseKeyCode,
                                    this.saveAndCloseFunction);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalValidateKeyCode,
                                    this.validateFunction);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalPublishKeyCode,
                                    this.publishFunction)
                        };
                        GlobalCommandBarController.prototype.DeregisterShortcutKeys = function() {
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalSaveKeyCode1,
                                    this.saveFunction);
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalSaveKeyCode2,
                                    this.saveFunction);
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalSaveAndCloseKeyCode,
                                    this.saveAndCloseFunction);
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalValidateKeyCode,
                                    this.validateFunction);
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.GlobalPublishKeyCode,
                                    this.publishFunction)
                        };
                        GlobalCommandBarController.prototype.onSaveAppComponentsSuccess = function(response) {
                            this.appContextManipulationService.PostSuccessfulAppUpdate();
                            this.modalDialogService.close();
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                .AppDesignerCanvas,
                                false);
                            this.UpdateLastSavedContextModel();
                            this.UpdateLastSavedAppContext();
                            this.triggerScopeApplyPhase();
                            this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                "SaveAppComponents",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Success +
                                    ": Successfully saved AppComponents for the App."));
                            this.traceUtility.Scenario = "";
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.globalSave)).stop();
                            this.GetTelemetryEventParam();
                            var saveEvent = new DesignerTelemetry
                                .AppSaveEvent(this.AppContext.appInfo.appId,
                                    null,
                                    this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes.length,
                                    this.entityList,
                                    this.appContextManipulationService.ContextModel.businessProcesses.selectedList
                                    .length,
                                    this.appContextManipulationService.ContextModel.dashboards.selectedList.length,
                                    this.entityFormCount,
                                    this.entityViewCount,
                                    this.entityChartCount);
                            this.telemetryService.AddTelemetryEvent(saveEvent);
                            for (var indexClickDetails = 0;
                                indexClickDetails <
                                    CommonConstants.TelemetryDictionary.DesignerUserActions.getKeys()
                                    .length;
                                indexClickDetails++) {
                                var designerUserActionEvent = new Telemetry
                                    .DesignerUserActionTelemetryEvent(CommonConstants.TelemetryDictionary
                                        .DesignerUserActions.getKeys()[indexClickDetails],
                                        Number(CommonConstants.TelemetryDictionary.DesignerUserActions
                                            .getValues()[indexClickDetails].userInteractionCounter),
                                        CommonConstants.TelemetryDictionary.DesignerUserActions
                                        .getValues()[indexClickDetails].userInteractionType,
                                        this.AppContext.appInfo.appId);
                                this.telemetryService.AddTelemetryEvent(designerUserActionEvent)
                            }
                            this.SetPristine();
                            if (this.saveAndCloseAppDesigner === true) {
                                this.saveAndCloseAppDesigner = false;
                                window.close()
                            }
                        };
                        GlobalCommandBarController.prototype.GetTelemetryEventParam = function() {
                            this.entityFormCount = 0;
                            this.entityViewCount = 0;
                            this.entityChartCount = 0;
                            this.entityList = "";
                            for (var i = 0;
                                i < this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes.length;
                                i++) {
                                if (i == 0)
                                    this.entityList += this.appContextManipulationService.ContextModel.entityArea
                                        .entitySwimLanes[i].entitymetadata.id.toString();
                                else
                                    this.entityList += "," +
                                        this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes[i]
                                        .entitymetadata.id.toString();
                                for (var j = 0;
                                    j <
                                        this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes[i]
                                        .entityArtifacts.length;
                                    j++)
                                    switch (this.appContextManipulationService.ContextModel.entityArea
                                        .entitySwimLanes[i]
                                        .entityArtifacts[j].displayName) {
                                    case CommonModel.ComponentTypeName.FORM:
                                        this.entityFormCount = this.entityFormCount +
                                            this.appContextManipulationService.ContextModel.entityArea
                                            .entitySwimLanes[i]
                                            .entityArtifacts[j].selectedList.length;
                                        break;
                                    case CommonModel.ComponentTypeName.VIEW:
                                        this.entityViewCount = this.entityViewCount +
                                            this.appContextManipulationService.ContextModel.entityArea
                                            .entitySwimLanes[i]
                                            .entityArtifacts[j].selectedList.length;
                                        break;
                                    case CommonModel.ComponentTypeName.CHART:
                                        this
                                            .entityChartCount =
                                            this.entityChartCount +
                                            this.appContextManipulationService.ContextModel.entityArea
                                            .entitySwimLanes[i]
                                            .entityArtifacts[j].selectedList.length;
                                        break
                                    }
                            }
                        };
                        GlobalCommandBarController.prototype
                            .SetPristine = function() {
                                this.scope.createAppForm && this.scope.createAppForm.$setPristine()
                            };
                        GlobalCommandBarController.prototype.onSaveAppComponentsFailure = function(error) {
                            this.traceUtility.LogError(Tracing.TraceComponent.AppDesigner,
                                AppDesigner.AppDesignerScenarios.SaveAppComponents,
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Fail +
                                    ": Failed to save AppComponents for the App." +
                                    error.toString()));
                            this.traceUtility.Scenario = "";
                            this.modalDialogService.close();
                            this.notificationService
                                .ParseAndDisplayMultipleSOAPErrors(Designers.Common.Constants.DesignerName.AppDesigner,
                                    error,
                                    this.triggerScopeApplyPhase.bind(this));
                            this.perfService.clearStopwatchByName(AppDesigner.Services.KpiNames.globalSave);
                            this.GetTelemetryEventParam();
                            var saveEvent = new DesignerTelemetry
                                .AppSaveEvent(this.AppContext.appInfo.appId,
                                    error.toString(),
                                    this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes.length,
                                    this.entityList,
                                    this.appContextManipulationService.ContextModel.businessProcesses.selectedList
                                    .length,
                                    this.appContextManipulationService.ContextModel.dashboards.selectedList.length,
                                    this.entityFormCount,
                                    this.entityViewCount,
                                    this.entityChartCount);
                            this.telemetryService.AddTelemetryEvent(saveEvent)
                        };
                        GlobalCommandBarController.prototype.SaveAndClose = function() {
                            if (!this.IsAppDesignerInDirtyState) window.close();
                            else {
                                this.saveAndCloseAppDesigner = true;
                                this.Save()
                            }
                        };
                        GlobalCommandBarController.prototype.Publish = function() {
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.Publish;
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.globalPublish)).start();
                            this.notificationService.ClearNotificationText();
                            var loadingMessage = Utility.StringUtilities
                                .Format(this.localizationService.getResourceString("Designer.Publish.LoadingMessage"),
                                    [this.localizationService.getResourceString("AppDesigner.App")]);
                            this.modalDialogService.open(new Designers.Common.ModalDialog
                                .ProgressDialogParams(loadingMessage));
                            this.appInterfaceService.PublishApp(this.AppContext.appInfo.appId,
                                this.onPublishAppSuccess.bind(this),
                                this.onPublishAppFailure.bind(this))
                        };
                        GlobalCommandBarController.prototype.onPublishAppSuccess = function(response) {
                            this.AppContext.appInfo.status = Mscrm.Designers.AppDesigner.ComponentState
                                .GetComponentState(Mscrm.Designers.AppDesigner.AppState.Published);
                            this.UpdateLastSavedAppContext();
                            this.modalDialogService.close();
                            this.triggerScopeApplyPhase();
                            this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                "PublishAppSuccess",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Success + ": Publish App Module Successfull"));
                            this.traceUtility.Scenario = "";
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.globalPublish)).stop();
                            this.GetTelemetryEventParam();
                            var publishEvent = new DesignerTelemetry
                                .AppPublishEvent(this.AppContext.appInfo.appId,
                                    null,
                                    this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes.length,
                                    this.entityList,
                                    this.appContextManipulationService.ContextModel.businessProcesses.selectedList
                                    .length,
                                    this.appContextManipulationService.ContextModel.dashboards.selectedList.length,
                                    this.entityFormCount,
                                    this.entityViewCount,
                                    this.entityChartCount);
                            this.telemetryService.AddTelemetryEvent(publishEvent);
                            var userInteractionObj = CommonConstants.TelemetryDictionary.DesignerUserActions
                                    .getValue(CommonConstants.AppDesignerClicks.AppDesignerPublishClick),
                                designerUserActionEvent = new Telemetry
                                    .DesignerUserActionTelemetryEvent(CommonConstants.AppDesignerClicks
                                        .AppDesignerPublishClick,
                                        userInteractionObj.userInteractionCounter,
                                        userInteractionObj.userInteractionType,
                                        this.AppContext.appInfo.appId);
                            this.telemetryService.AddTelemetryEvent(designerUserActionEvent)
                        };
                        GlobalCommandBarController.prototype.onPublishAppFailure = function(httpError) {
                            this.traceUtility.LogError(Tracing.TraceComponent.AppDesigner,
                                "PublishAppFailure",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Fail + ": Publish App Module Failed"));
                            this.traceUtility.Scenario = "";
                            this.modalDialogService.close();
                            this.notificationService
                                .ParseAndDisplayMultipleSOAPErrors(Designers.Common.Constants.DesignerName.AppDesigner,
                                    httpError,
                                    this.triggerScopeApplyPhase.bind(this));
                            this.perfService.clearStopwatchByName(AppDesigner.Services.KpiNames.globalPublish);
                            this.GetTelemetryEventParam();
                            var publishEvent = new DesignerTelemetry
                                .AppPublishEvent(this.AppContext.appInfo.appId,
                                    httpError.toString(),
                                    this.appContextManipulationService.ContextModel.entityArea.entitySwimLanes.length,
                                    this.entityList,
                                    this.appContextManipulationService.ContextModel.businessProcesses.selectedList
                                    .length,
                                    this.appContextManipulationService.ContextModel.dashboards.selectedList.length,
                                    this.entityFormCount,
                                    this.entityViewCount,
                                    this.entityChartCount);
                            this.telemetryService.AddTelemetryEvent(publishEvent)
                        };
                        GlobalCommandBarController.prototype.Validate = function() {
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.Validate;
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.globalValidate)).start();
                            this.appContextManipulationService.isDependencyPaneHidden = true;
                            this.notificationService.ClearNotificationText();
                            this.modalDialogService.open(new Designers.Common.ModalDialog
                                .ProgressDialogParams(this.localizationService
                                    .getResourceString("AppDesigner.Validate.LoadingMessage")));
                            this.appInterfaceService
                                .ValidateApp(new Designers.Common.Guid(this.AppContext.appInfo.appId),
                                    this.onValidateAppSuccess.bind(this),
                                    this.onValidateAppFailure.bind(this))
                        };
                        Object.defineProperty(GlobalCommandBarController.prototype,
                            "ShouldSaveBeDisabled",
                            {
                                "get": function() {
                                    return !(this.IsAppDesignerInDirtyState && this.IsAppPropertiesValid)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(GlobalCommandBarController.prototype,
                            "ShouldPublishBeDisabled",
                            {
                                "get": function() {
                                    return this.IsAppDesignerInDirtyState || this.IsAppInPublishedState
                                },
                                enumerable: true,
                                configurable: true
                            });
                        GlobalCommandBarController.prototype.onValidateAppSuccess = function(response) {
                            this.validationService.onValidateAppSuccess(response);
                            this.modalDialogService.close();
                            if (this.appContextManipulationService
                                .isDependencyPaneHidden ==
                                false) this.scope.contextModel.selectedTab = AppDesigner.AppDesignerTab.Dependencies;
                            else this.scope.contextModel.selectedTab = AppDesigner.AppDesignerTab.Components;
                            this.triggerScopeApplyPhase();
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.globalValidate)).stop();
                            this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                AppDesigner.AppDesignerScenarios.Validate,
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus
                                    .Success +
                                    ": Validate App Module Successfull"));
                            this.traceUtility.Scenario = ""
                        };
                        GlobalCommandBarController.prototype.onValidateAppFailure = function(error) {
                            this.validationService.onValidateAppFailure(error);
                            this.modalDialogService.close();
                            this.triggerScopeApplyPhase();
                            this.perfService.clearStopwatchByName(AppDesigner.Services.KpiNames.globalValidate);
                            this.traceUtility.LogError(Tracing.TraceComponent.AppDesigner,
                                AppDesigner.AppDesignerScenarios.Validate,
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Fail +
                                    ": Validate App Module Failed" +
                                    error.toString()));
                            this.traceUtility.Scenario = ""
                        };
                        GlobalCommandBarController.$inject = [
                            ServiceNames.ScopeService, ServiceNames.AppContextManipulationService, ServiceNames
                            .PerfService,
                            ServiceNames.AppDesignerPerfKpiService, ServiceNames.AppInterfaceService, ServiceNames
                            .TraceUtilityService, ServiceNames.NotificationBarService, AppDesigner
                            .AppDesignerServiceNames
                            .ValidationService, ServiceNames.TelemetryService, ServiceNames.ModalDialogService,
                            ServiceNames
                            .LocalizationService, ServiceNames.KeyboardShortcutService, ServiceNames.DirtyCheckService,
                            ServiceNames.CacheUtilityService
                        ];
                        return GlobalCommandBarController
                    }(AppDesigner.AppDesignerBase);
                Controllers.GlobalCommandBarController = GlobalCommandBarController;
                AppDesigner.AppDesignerModule.controller("mscrmGlobalCommandBarController", GlobalCommandBarController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
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
                            mscrmButtonTooltipKey: "@",
                            mscrmButtonDisabled: "&"
                        },
                        templateUrl:
                            "/Designers/AppDesigner/GlobalCommandBar/Templates/GlobalCommandButton.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmGlobalCommandButton", GlobalCommandButtonDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    CommonServiceNames = Designers.Common.Constants.ServiceNames,
                    ComponentPaneController = function() {
                        function ComponentPaneController(scope,
                            compDependencyService,
                            localizationService,
                            perfService,
                            appDesignerPerfKpisService,
                            legacyDesignerService,
                            modalDialogService,
                            urlHelperService,
                            appInfoManipulationService,
                            componentService,
                            categorizationService) {
                            this.scope = scope;
                            this.compDependencyService = compDependencyService;
                            this.localizationService = localizationService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.legacyDesignerService = legacyDesignerService;
                            this.modalDialogService = modalDialogService;
                            this.urlHelperService = urlHelperService;
                            this.appInfoManipulationService = appInfoManipulationService;
                            this.componentService = componentService;
                            this.categorizationService = categorizationService
                        }

                        ComponentPaneController.prototype.AddComponentInSelectedList = function(selectedItem) {
                            if (this.scope.contextModel.CurrentComponentList.selectionType ==
                                AppDesigner.SelectionType.SingleSelection &&
                                selectedItem.status) return;
                            selectedItem.status = !selectedItem.status;
                            var compTypeCode = this.scope.contextModel.selections.selectedArtifact.componentTypeCode,
                                compTypeName = this.scope.contextModel.selections.selectedArtifact.displayName,
                                compId = selectedItem.id;
                            if (selectedItem.status) {
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.addComponent)).start();
                                if (compTypeName == CommonModel.ComponentTypeName.SITEMAP
                                ) this.componentService.AddSiteMap(selectedItem);
                                else
                                    this.appInfoManipulationService
                                        .AddComponentInApp(this.scope.contextModel.selections.selectedArtifact,
                                            selectedItem);
                                (compTypeName == CommonModel.ComponentTypeName.SITEMAP ||
                                        compTypeName == CommonModel.ComponentTypeName.DASHBOARD ||
                                        compTypeName == CommonModel.ComponentTypeName.BUSINESS_PROCESS) &&
                                    this.compDependencyService.AddDependenciesforArtifact(compTypeCode, compId);
                                if (compTypeName == CommonModel.ComponentTypeName.FORM ||
                                    compTypeName == CommonModel.ComponentTypeName.VIEW) {
                                    var typeBasedNode = this.scope.contextModel.selections.selectedArtifact;
                                    this.categorizationService
                                        .addItemToTypeList(typeBasedNode.listByTypeMap, selectedItem)
                                }
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.addComponent)).stop()
                            } else {
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.removeComponent)).start();
                                var index = this.scope.contextModel.selections.selectedArtifact.selectedList
                                    .indexOf(selectedItem);
                                this.scope.contextModel.selections.selectedArtifact.selectedList.splice(index, 1);
                                if (compTypeName == CommonModel.ComponentTypeName.FORM ||
                                    compTypeName == CommonModel.ComponentTypeName.VIEW) {
                                    var typeBasedNode = this.scope.contextModel.selections.selectedArtifact;
                                    this.categorizationService
                                        .removeItemFromTypeList(typeBasedNode.listByTypeMap, selectedItem)
                                }
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.removeComponent)).stop()
                            }
                        };
                        Object.defineProperty(ComponentPaneController.prototype,
                            "contextModel",
                            {
                                "get": function() { return this.scope.contextModel },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ComponentPaneController.prototype,
                            "ComponentListType",
                            {
                                "get": function() { return this.contextModel.CurrentComponentList.componentListType },
                                enumerable: true,
                                configurable: true
                            });
                        ComponentPaneController.prototype
                            .IsComponentListFrame = function() {
                                return this.contextModel.CurrentComponentList.componentListType ===
                                    CommonModel.ComponentTypeName.ENTITY ||
                                    this.contextModel.CurrentComponentList.componentListType ===
                                    CommonModel.ComponentTypeName.DASHBOARD ||
                                    this.contextModel.CurrentComponentList.componentListType ===
                                    CommonModel.ComponentTypeName.BUSINESS_PROCESS ||
                                    this.contextModel.CurrentComponentList.componentListType ===
                                    CommonModel.ComponentTypeName.CHART ||
                                    this.contextModel.CurrentComponentList.componentListType ===
                                    CommonModel.ComponentTypeName.FORM ||
                                    this.contextModel.CurrentComponentList.componentListType ===
                                    CommonModel.ComponentTypeName.VIEW
                            };
                        ComponentPaneController.prototype
                            .DisplayCreateNewOption = function() {
                                return this.IsComponentListFrame() && !this.IsAddComponentsFrame()
                            };
                        ComponentPaneController.prototype
                            .IsAddComponentsFrame = function() {
                                return !this.contextModel.CurrentComponentList.componentListType &&
                                (this.contextModel.CurrentComponentList.selectionType === undefined ||
                                    this.contextModel.CurrentComponentList.selectionType ===
                                    AppDesigner.SelectionType.NoSelection)
                            };
                        ComponentPaneController.prototype.DisplayComponentList = function(componentType) {
                            this.componentService.DisplayComponentList(componentType);
                            this.contextModel.CurrentComponentList.searchText = Designers.Common.Utility.StringUtilities
                                .EmptyString
                        };
                        ComponentPaneController.prototype
                            .IsSingleSelect = function(selectionType) {
                                return selectionType === AppDesigner.SelectionType.SingleSelection
                            };
                        ComponentPaneController.prototype
                            .IsMultiSelect = function(selectionType) {
                                return selectionType === AppDesigner.SelectionType.MultiSelection
                            };
                        ComponentPaneController.prototype.CheckIfNodeHasType = function(artifactNode) {
                            if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(artifactNode)) {
                                var artifactName = artifactNode.displayName;
                                return artifactName == CommonModel.ComponentTypeName.FORM ||
                                    artifactName == CommonModel.ComponentTypeName.VIEW
                            }
                            return false
                        };
                        ComponentPaneController.prototype
                            .IsAddComponentTypeEnabled = function(componentType) {
                                return this.componentService.CanDisplayComponentList(componentType)
                            };
                        ComponentPaneController.prototype
                            .IsDataRetrieveInProgress = function() {
                                return this.componentService.IsComponentPaneDataRetrieveInProgress()
                            };
                        ComponentPaneController.prototype.GetArtifactExpandCollapseTitle = function(state) {
                            var title = "";
                            if (state) title = this.localizationService.getResourceString("AppDesigner.HideArtifacts");
                            else title = this.localizationService.getResourceString("AppDesigner.ShowArtifacts");
                            return title
                        };
                        ComponentPaneController.prototype.GetEntityAssetsExpandCollapseTitle = function(state) {
                            var title = "";
                            if (state)
                                title = this.localizationService.getResourceString("AppDesigner.HideEntityAssets");
                            else title = this.localizationService.getResourceString("AppDesigner.ShowEntityAssets");
                            return title
                        };
                        ComponentPaneController.$inject = [
                            "$scope", "mscrmComponentDependencyService", CommonServiceNames.LocalizationService,
                            "mscrmPerfService", "mscrmAppDesignerPerfKpisService", "mscrmLegacyDesignerService",
                            "mscrmModalDialogService", Designers.Common.Constants.ServiceNames.UrlHelperService,
                            "mscrmAppContextManipulationService", "mscrmComponentService", AppDesigner
                            .AppDesignerServiceNames.CategorizationService
                        ];
                        return ComponentPaneController
                    }();
                Controllers.ComponentPaneController = ComponentPaneController;
                AppDesigner.AppDesignerModule.controller("mscrmComponentPaneController", ComponentPaneController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    CommonModel = Mscrm.Designers.Common.Models,
                    CommonServiceNames = Designers.Common.Constants.ServiceNames,
                    ComponentListFrameController = function() {
                        function ComponentListFrameController(scope,
                            appContextManipulationService,
                            componentService,
                            localizationService,
                            legacyDesignerService,
                            metadataService,
                            categorizationService,
                            flyoutService) {
                            this.scope = scope;
                            this.appContextManipulationService = appContextManipulationService;
                            this.componentService = componentService;
                            this.localizationService = localizationService;
                            this.legacyDesignerService = legacyDesignerService;
                            this.metadataService = metadataService;
                            this.categorizationService = categorizationService;
                            this.flyoutService = flyoutService;
                            this.FilterComponentList = function(component) {
                                return component.displayName.toLowerCase()
                                    .indexOf(this.SearchText.toLowerCase()) >
                                    -1 ||
                                    component.description.toLowerCase().indexOf(this.SearchText.toLowerCase()) > -1
                            }.bind(this);
                            this.InitializeCreateNewFormMenuItems();
                            this.SetCreateNewButtonState()
                        }

                        Object.defineProperty(ComponentListFrameController.prototype,
                            "Header",
                            {
                                "get": function() {
                                    var header, componentType = this.scope.componentType;
                                    switch (componentType) {
                                    case CommonModel.ComponentTypeName.ENTITY:
                                        header = this.localizationService
                                            .getResourceString("AppDesigner.SelectEntities");
                                        break;
                                    case CommonModel.ComponentTypeName.DASHBOARD:
                                        header = this.localizationService
                                            .getResourceString("AppDesigner.SelectDashboards");
                                        break;
                                    case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                        header = this.localizationService.getResourceString("AppDesigner.SelectBPFs");
                                        break;
                                    case CommonModel.ComponentTypeName.CHART:
                                        header = this.localizationService.getResourceString("AppDesigner.SelectCharts");
                                        break;
                                    case CommonModel.ComponentTypeName.VIEW:
                                        header = this.localizationService.getResourceString("AppDesigner.SelectViews");
                                        break;
                                    case CommonModel.ComponentTypeName.FORM:
                                        header = this.localizationService.getResourceString("AppDesigner.SelectForms");
                                        break
                                    }
                                    return header
                                },
                                enumerable: true,
                                configurable: true
                            });
                        ComponentListFrameController.prototype
                            .ExtraOptionsButtonTooltip = function() {
                                return this.localizationService.getResourceString("AppDesigner.MoreOptionsForEntity")
                            };
                        Object.defineProperty(ComponentListFrameController.prototype,
                            "CreateButtonTooltip",
                            {
                                "get": function() {
                                    var createButtonTooltip, componentType = this.scope.componentType;
                                    switch (componentType) {
                                    case CommonModel.ComponentTypeName.ENTITY:
                                        createButtonTooltip = this.localizationService
                                            .getResourceString("AppDesigner.CreateNewEntity.Tooltip");
                                        break;
                                    case CommonModel.ComponentTypeName.DASHBOARD:
                                        createButtonTooltip = this.localizationService
                                            .getResourceString("AppDesigner.CreateNewDashboard.Tooltip");
                                        break;
                                    case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                        createButtonTooltip = this.localizationService
                                            .getResourceString("AppDesigner.CreateNewBPF.Tooltip");
                                        break;
                                    case CommonModel.ComponentTypeName.CHART:
                                        createButtonTooltip = this.localizationService
                                            .getResourceString("AppDesigner.CreateNewChart.Tooltip");
                                        break;
                                    case CommonModel.ComponentTypeName.VIEW:
                                        createButtonTooltip = this.localizationService
                                            .getResourceString("AppDesigner.CreateNewView.Tooltip");
                                        break;
                                    case CommonModel.ComponentTypeName.FORM:
                                        createButtonTooltip = this.localizationService
                                            .getResourceString("AppDesigner.CreateNewForm.Tooltip");
                                        break
                                    }
                                    return createButtonTooltip
                                },
                                enumerable: true,
                                configurable: true
                            });
                        ComponentListFrameController.prototype
                            .OnEntityChange = function(selectedIndex) {
                                this.componentService.OnEntityChange(selectedIndex)
                            };
                        ComponentListFrameController.prototype.CreateNew = function($event) {
                            if (this.scope
                                .componentType ===
                                CommonModel.ComponentTypeName
                                .FORM) this.formFlyoutMenuModel.ToggleFlyout(this.flyoutService, $event);
                            else this.componentService.CreateNew()
                        };
                        ComponentListFrameController.prototype
                            .HandleComponentListSelection = function(component) {
                                this.componentService.HandleComponentListSelection(component)
                            };
                        Object.defineProperty(ComponentListFrameController.prototype,
                            "selectedSwimlane",
                            {
                                "get": function() { return this.componentService.selectedSwimlane },
                                "set": function(selectedSwimlane) {
                                    this.componentService.selectedSwimlane = selectedSwimlane
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ComponentListFrameController.prototype,
                            "contextModel",
                            {
                                "get": function() { return this.appContextManipulationService.ContextModel },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ComponentListFrameController.prototype,
                            "EntitySwimLanes",
                            {
                                "get": function() { return this.contextModel.entityArea.entitySwimLanes },
                                enumerable: true,
                                configurable: true
                            });
                        ComponentListFrameController.prototype.IsSearchEnabled = function() {
                            var bRet = false;
                            if (this.scope.componentType === CommonModel.ComponentTypeName.ENTITY ||
                                this.scope.componentType === CommonModel.ComponentTypeName.DASHBOARD ||
                                this.scope
                                .componentType ===
                                CommonModel.ComponentTypeName.BUSINESS_PROCESS) bRet = true;
                            return bRet
                        };
                        ComponentListFrameController.prototype.IsEntityFilterEnabled = function() {
                            var bRet = false;
                            if (this.scope.componentType === CommonModel.ComponentTypeName.FORM ||
                                this.scope.componentType === CommonModel.ComponentTypeName.VIEW ||
                                this.scope.componentType === CommonModel.ComponentTypeName.CHART) bRet = true;
                            return bRet
                        };
                        ComponentListFrameController.prototype
                            .showCreate = function() {
                                return this.legacyDesignerService.isDesignerEnabled(this.scope.componentType)
                            };
                        ComponentListFrameController.prototype.HasExtraOptions = function() {
                            var bRet = false;
                            if (this.scope.componentType === CommonModel.ComponentTypeName.ENTITY) bRet = true;
                            return bRet
                        };
                        ComponentListFrameController.prototype.IsCategorizedList = function() {
                            var bRet = false;
                            if (this.scope.componentType === CommonModel.ComponentTypeName.VIEW ||
                                this.scope.componentType === CommonModel.ComponentTypeName.FORM) bRet = true;
                            return bRet
                        };
                        ComponentListFrameController.prototype
                            .CanCreateNewEntityAsset = function(selectedIndex) {
                                return this.componentService
                                    .CanCreateNewEntityAsset(selectedIndex, this.scope.componentType)
                            };
                        Object.defineProperty(ComponentListFrameController.prototype,
                            "ComponentMetadata",
                            {
                                "get": function() {
                                    if (this.appContextManipulationService.ContextModel
                                        .CurrentComponentList !=
                                        null)
                                        return this.appContextManipulationService.ContextModel.CurrentComponentList
                                            .components
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ComponentListFrameController.prototype,
                            "SearchText",
                            {
                                "get": function() {
                                    return Designers.Common.Utility.StringUtilities
                                        .IsNullOrEmpty(this.appContextManipulationService.ContextModel
                                            .CurrentComponentList
                                            .searchText)
                                        ? Designers.Common.Utility.StringUtilities.EmptyString
                                        : this.appContextManipulationService.ContextModel.CurrentComponentList
                                        .searchText
                                },
                                "set": function(searchText) {
                                    this.appContextManipulationService.ContextModel.CurrentComponentList
                                        .searchText = searchText
                                },
                                enumerable: true,
                                configurable: true
                            });
                        ComponentListFrameController.prototype
                            .HandleExtraOptionSelection = function(component) {
                                this.componentService.HandleExtraOptionSelection(component)
                            };
                        ComponentListFrameController.prototype
                            .HandleAddExtraOptionsClick = function(extraOptionsModel, $event) {
                                extraOptionsModel.ToggleFlyout(this.flyoutService, $event)
                            };
                        ComponentListFrameController.prototype
                            .CreateNewForm = function(formitems) { this.componentService.CreateNew(formitems) };
                        ComponentListFrameController.prototype.InitializeCreateNewFormMenuItems = function() {
                            var menuItems = [], menuItem = new AppDesigner.Models.FormFlyoutMenuItem;
                            menuItem.text = this.localizationService
                                .getResourceString("SystemCustomization.FormsGridPage.Buttons.CreateMainForm");
                            menuItem.formType = AppDesigner.FormType.Main;
                            menuItems.push(menuItem);
                            menuItem = new AppDesigner.Models.FormFlyoutMenuItem;
                            menuItem.text = this.localizationService
                                .getResourceString("SystemCustomization.FormsGridPage.Buttons.CreateQuickForm");
                            menuItem.formType = AppDesigner.FormType.Quick;
                            menuItems.push(menuItem);
                            menuItem = new AppDesigner.Models.FormFlyoutMenuItem;
                            menuItem.text = this.localizationService
                                .getResourceString("SystemCustomization.FormsGridPage.Buttons.CreateQuickCreateForm");
                            menuItem.formType = AppDesigner.FormType.QuickCreate;
                            menuItems.push(menuItem);
                            this.formFlyoutMenuModel = new AppDesigner.Models.CreateNewButtonModel;
                            this.formFlyoutMenuModel.flyoutMenuItems = menuItems;
                            this.formFlyoutMenuModel.buttonText = this.localizationService
                                .getResourceString("AppDesigner.CreateNew")
                        };
                        ComponentListFrameController.prototype
                            .SetCreateNewButtonState = function() {
                                this.formFlyoutMenuModel.isCreateNewButtonVisible = this.contextModel.formflyoutmenu
                                    .isCreateNewButtonVisible
                            };
                        ComponentListFrameController.prototype
                            .GetTypeMap = function(artifactNode) {
                                return this.componentService.GetTypeMap(artifactNode)
                            };
                        ComponentListFrameController.prototype
                            .GetTypesList = function(artifactNode) {
                                return this.componentService.GetTypesList(artifactNode)
                            };
                        ComponentListFrameController.prototype
                            .DisplayAddComponentsPane = function() { this.componentService.DisplayAddComponentsPane() };
                        ComponentListFrameController.prototype.IsCategoryCollapsed = function(artifactNode, key) {
                            var categoryStateMap = this.categorizationService.getCategoryStateMap(artifactNode);
                            if (!Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(categoryStateMap)
                            ) return categoryStateMap.getValue(key) == AppDesigner.CategoryState.Collapsed;
                            return false
                        };
                        ComponentListFrameController.prototype.ToggleCategoryState = function(e, artifactNode, key) {
                            var categoryStateMap = this.categorizationService.getCategoryStateMap(artifactNode);
                            !Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(categoryStateMap) &&
                                this.categorizationService.toggleCategoryState(categoryStateMap, key);
                            AccessibilityUtility
                                .SetAriaExpandedValue(!this
                                    .IsCategoryCollapsed(this.contextModel.selections.selectedArtifact, key),
                                    e.target)
                        };
                        ComponentListFrameController.$inject = [
                            "$scope", "mscrmAppContextManipulationService", "mscrmComponentService",
                            "mscrmLocalizationService", "mscrmLegacyDesignerService", "mscrmMetadataService",
                            AppDesigner
                            .AppDesignerServiceNames.CategorizationService, CommonServiceNames.FlyoutService
                        ];
                        return ComponentListFrameController
                    }();
                Controllers.ComponentListFrameController = ComponentListFrameController;
                AppDesigner.AppDesignerModule.controller("mscrmComponentListFrameController",
                    ComponentListFrameController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    TabbedContainerController = function() {
                        function TabbedContainerController(scope,
                            appContextManipulationService,
                            keyboardShortcutService) {
                            this.scope = scope;
                            this.appContextManipulationService = appContextManipulationService;
                            this.keyboardShortcutService = keyboardShortcutService;
                            this.RegisterShortcutKeys();
                            this.scope.$on("$destroy", this.destructor.bind(this))
                        }

                        TabbedContainerController.prototype.destructor = function() { this.DeregisterShortcutKeys() };
                        TabbedContainerController.prototype.RegisterShortcutKeys = function() {
                            this.ChangeToComponentPaneFunction = this.ChangeToComponentsPaneOnKeyPress.bind(this);
                            this.ChangeToPropertiesPaneFunction = this.ChangeToPropertiesPaneOnKeyPress.bind(this);
                            this.ChangeToDepenedencyPaneFunction = this.ChangeToDependencyPaneOnKeyPress.bind(this);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.ComponentsTabKeyCode,
                                    this.ChangeToComponentPaneFunction);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.PropertyTabKeyCode,
                                    this.ChangeToPropertiesPaneFunction);
                            this.keyboardShortcutService
                                .RegisterShortcutKey(AppDesigner.KeyboardShortcuts.DependencyTabKeyCode,
                                    this.ChangeToDepenedencyPaneFunction)
                        };
                        TabbedContainerController.prototype.DeregisterShortcutKeys = function() {
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.ComponentsTabKeyCode,
                                    this.ChangeToComponentPaneFunction);
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.PropertyTabKeyCode,
                                    this.ChangeToPropertiesPaneFunction);
                            this.keyboardShortcutService
                                .DeregisterShortcutKey(AppDesigner.KeyboardShortcuts.DependencyTabKeyCode,
                                    this.ChangeToDepenedencyPaneFunction)
                        };
                        TabbedContainerController.prototype.ChangeToComponentsPaneOnKeyPress = function() {
                            this.SetSelectedTab(AppDesigner.AppDesignerTab.Components);
                            this.triggerScopeApplyPhase()
                        };
                        TabbedContainerController.prototype.ChangeToPropertiesPaneOnKeyPress = function() {
                            if (!this.IsPropertyPaneDisabled()) {
                                this.SetSelectedTab(AppDesigner.AppDesignerTab.Properties);
                                this.triggerScopeApplyPhase()
                            }
                        };
                        TabbedContainerController.prototype.ChangeToDependencyPaneOnKeyPress = function() {
                            if (!this.IsDependencyPaneHidden) {
                                this.SetSelectedTab(AppDesigner.AppDesignerTab.Dependencies);
                                this.triggerScopeApplyPhase()
                            }
                        };
                        TabbedContainerController.prototype.SetSelectedTab = function(tab) {
                            if (tab == AppDesigner.AppDesignerTab.Properties && this.IsPropertyPaneDisabled()) return;
                            this.scope.contextModel.selectedTab = tab
                        };
                        Object.defineProperty(TabbedContainerController.prototype,
                            "IsDependencyPaneHidden",
                            {
                                "get": function() { return this.appContextManipulationService.isDependencyPaneHidden },
                                enumerable: true,
                                configurable: true
                            });
                        TabbedContainerController.prototype
                            .IsTabSelected = function(tab) { return this.scope.contextModel.selectedTab == tab };
                        Object.defineProperty(TabbedContainerController.prototype,
                            "TabCount",
                            {
                                "get": function() {
                                    var numberOfFixedTabs = 2;
                                    numberOfFixedTabs += this.IsDependencyPaneHidden ? 0 : 1;
                                    return numberOfFixedTabs
                                },
                                enumerable: true,
                                configurable: true
                            });
                        TabbedContainerController.prototype.IsPropertyPaneDisabled = function() {
                            var propertyPaneDisabilityFlag = false;
                            if (null != this.scope.contextModel.selections &&
                                null != this.scope.contextModel.selections.selectedRecordFromArtifact
                            ) propertyPaneDisabilityFlag = true;
                            return propertyPaneDisabilityFlag
                        };
                        TabbedContainerController.prototype
                            .triggerScopeApplyPhase = function() { !this.scope.$$phase && this.scope.$apply() };
                        TabbedContainerController.$inject = [
                            "$scope", ServiceNames.AppContextManipulationService, ServiceNames.KeyboardShortcutService
                        ];
                        return TabbedContainerController
                    }();
                Controllers.TabbedContainerController = TabbedContainerController;
                AppDesigner.AppDesignerModule.controller("mscrmTabbedContainerController", TabbedContainerController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function AddComponentsDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/AddComponentsPane.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmAddComponentsPane", AddComponentsDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function AppDesignerShellDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Common/Templates/AppDesignerShell.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmAppDesignerShell", AppDesignerShellDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CanvasPaneDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/AppCanvas/Templates/CanvasPane.html?v=8200000749",
                        controller: "mscrmCanvasPaneController",
                        controllerAs: "appArtifacts"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmCanvasPane", CanvasPaneDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function ComponentTileDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/AddComponentTile.html?v=8200000749",
                        scope: {
                            label: "@",
                            description: "@",
                            icon: "@",
                            componenttype: "@",
                            isenabled: "&",
                            clickhandler: "&",
                            tooltip: "@"
                        }
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmComponentTile", ComponentTileDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CategorizedComponentListDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl:
                            "/Designers/AppDesigner/Sidebar/Templates/CategorizedComponentList.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmCategorizedComponentList",
                    CategorizedComponentListDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function ComponentListDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/ComponentList.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmComponentList", ComponentListDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function ComponentPaneDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/ComponentPane.html?v=8200000749",
                        controller: "mscrmComponentPaneController",
                        controllerAs: "componentPaneController"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmComponentPane", ComponentPaneDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CommandBarDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Common/Templates/CommandBar.html?v=8200000749",
                        controller: "mscrmAppCommandBarController",
                        controllerAs: "commandBarController"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmAppCommandBar", CommandBarDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function AddExtraOptionsDirective() {
                    return {
                        restrict: "E",
                        replace: true,
                        scope: {
                            component: "=",
                            handleitemclick: "&",
                            addextraoptionsclick: "&",
                            extraoptionsbuttontooltip: "@"
                        },
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/AddExtraOptions.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmAddExtraOptions", AddExtraOptionsDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function CreateNewDirective() {
                    return {
                        restrict: "E",
                        replace: true,
                        scope: { createnewmodel: "=", handlenodeclick: "&", handlebuttonclick: "&", tooltip: "=" },
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/CreateNewMenu.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmCreateNewButton", CreateNewDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function GlobalCommandBarDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl:
                            "/Designers/AppDesigner/GlobalCommandBar/Templates/GlobalCommandBar.html?v=8200000749",
                        controller: "mscrmGlobalCommandBarController",
                        controllerAs: "globalCmdBarController"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmGlobalCommandBar", GlobalCommandBarDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function StatusBarDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Common/Templates/StatusBar.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmStatusBar", StatusBarDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function ComponentListFrameDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/ComponentListFrame.html?v=8200000749",
                        controller: "mscrmComponentListFrameController",
                        controllerAs: "componentListController",
                        scope: { componentType: "@" }
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmComponentListFrame", ComponentListFrameDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function TabbedContainerDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/TabbedContainer.html?v=8200000749",
                        controller: "mscrmTabbedContainerController",
                        controllerAs: "tabbedContainerController"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmTabbedContainer", TabbedContainerDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Models;
            (function(Models) {
                "use strict";
                var AppComposableContext = function() {
                    function AppComposableContext(composableContext) { this.composableContext = composableContext }

                    AppComposableContext.prototype
                        .GetComposableContextParams = function() { return this.composableContext };
                    AppComposableContext.prototype.UpdateComposableItem = function(item) {
                        this.GetComposableContextParams().upsert(item.Name, item.Id.guidString);
                        return true
                    };
                    return AppComposableContext
                }();
                Models.AppComposableContext = AppComposableContext
            })(Models = AppDesigner.Models || (AppDesigner.Models = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Models;
            (function(Models) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    FlyoutManagement = Mscrm.Designers.Common.FlyoutManagement,
                    AppEntityInfo = function() {
                        function AppEntityInfo(entityId) {
                            this.entityId = entityId;
                            this.forms = [];
                            this.charts = [];
                            this.views = []
                        }

                        return AppEntityInfo
                    }();
                Models.AppEntityInfo = AppEntityInfo;
                var AppContext = function() {
                    function AppContext() {
                        this.appInfo = new Designers.Common.Models.AppInfo;
                        this.sitemap = null;
                        this.bpfs = [];
                        this.dashboards = [];
                        this.appEntityInfo = [];
                        this.isAppLoadComplete = false
                    }

                    return AppContext
                }();
                Models.AppContext = AppContext;
                var ObjectInfo = function() {
                    function ObjectInfo(id, displayName) {
                        this.id = id;
                        this.displayName = displayName;
                        this.isAddedToApp = false
                    }

                    return ObjectInfo
                }();
                Models.ObjectInfo = ObjectInfo;
                var SelectableArtifactInfo = function(_super) {
                    __extends(SelectableArtifactInfo, _super);

                    function SelectableArtifactInfo() { _super.apply(this, arguments) }

                    return SelectableArtifactInfo
                }(ObjectInfo);
                Models.SelectableArtifactInfo = SelectableArtifactInfo;
                var ArtifactNode = function(_super) {
                    __extends(ArtifactNode, _super);

                    function ArtifactNode(displayName, componentTypeCode) {
                        _super.call(this);
                        this.displayName = displayName;
                        this.componentTypeCode = componentTypeCode;
                        this.selectedList = [];
                        this.masterList = [];
                        this.dependencyCount = 0
                    }

                    ArtifactNode.prototype.AddComponent = function(component) {
                        this.selectedList.push(component);
                        this.selectedList = this.selectedList
                            .sort(function(artifact1, artifact2) {
                                return artifact1.displayName.localeCompare(artifact2.displayName)
                            })
                    };
                    Object.defineProperty(ArtifactNode.prototype,
                        "componentTypeName",
                        {
                            "get": function() {
                                if (this.displayName === CommonModel.ComponentTypeName.DASHBOARD) return "Dashboard";
                                return CommonModel.ComponentTypeCode[this.componentTypeCode]
                            },
                            enumerable: true,
                            configurable: true
                        });
                    return ArtifactNode
                }(FlyoutManagement.FlyoutContainer);
                Models.ArtifactNode = ArtifactNode;
                var EntityInfoSwimLane = function() {
                    function EntityInfoSwimLane() { this.entityArtifacts = [] }

                    EntityInfoSwimLane.prototype
                        .getArtifactNode = function(displayName) {
                            for (var i = 0;
                                i < this.entityArtifacts.length;
                                i++
                            )
                                if (this
                                    .entityArtifacts[i] &&
                                    this.entityArtifacts[i].displayName === displayName) return this.entityArtifacts[i]
                        };
                    return EntityInfoSwimLane
                }();
                Models.EntityInfoSwimLane = EntityInfoSwimLane;
                var EntityMetadata = function(_super) {
                    __extends(EntityMetadata, _super);

                    function EntityMetadata(id,
                        displayName,
                        logicalName,
                        objectTypeCode,
                        canCreateForms,
                        canCreateViews,
                        canCreateCharts,
                        isCustomizable) {
                        _super.call(this, id, displayName);
                        this.logicalName = logicalName;
                        this.objectTypeCode = objectTypeCode;
                        this.description = logicalName;
                        this.canCreateForms = canCreateForms;
                        this.canCreateViews = canCreateViews;
                        this.canCreateCharts = canCreateCharts;
                        this.isCustomizable = isCustomizable;
                        this.extraOptionsModel = new Models.EntityExtraOptionsFlyoutModel;
                        this.extraOptionsModel.bAllEntityAssetsAdded = false;
                        this.extraOptionsModel.bEntityMetadataIncluded = false
                    }

                    return EntityMetadata
                }(ObjectInfo);
                Models.EntityMetadata = EntityMetadata;
                var EntityArea = function() {
                    function EntityArea() {
                        this.entitySwimLanes = [];
                        this.entityList = []
                    }

                    EntityArea.prototype.AddEntity = function(entityMetadata) {
                        if (entityMetadata && this.entityList.indexOf(entityMetadata.id) == -1) {
                            if (!entityMetadata.displayName || !entityMetadata.logicalName) return;
                            var eISL = new EntityInfoSwimLane;
                            eISL.entitymetadata = entityMetadata;
                            eISL.entitymetadata.isAddedToApp = true;
                            this.AddArtifactsInSwimLane(eISL);
                            this.entitySwimLanes.push(eISL);
                            this.entitySwimLanes.sort(function(entity1, entity2) {
                                return entity1.entitymetadata.displayName
                                    .localeCompare(entity2.entitymetadata.displayName)
                            });
                            this.entityList.push(entityMetadata.id)
                        }
                    };
                    EntityArea.prototype.RemoveEntity = function(entityMetadata) {
                        entityMetadata.isAddedToApp = false;
                        entityMetadata.extraOptionsModel.bAllEntityAssetsAdded = false;
                        var len = this.entitySwimLanes.length, index = this.entityList.indexOf(entityMetadata.id);
                        if (index > -1) {
                            this.entityList.splice(index, 1);
                            for (var n = 0; n < len; n++)
                                if (this.entitySwimLanes[n].entitymetadata.id === entityMetadata.id) {
                                    this.entitySwimLanes.splice(n, 1);
                                    break
                                }
                        }
                    };
                    EntityArea.prototype.AddArtifactsInSwimLane = function(eISL) {
                        eISL.entityArtifacts.push(new Models
                            .TypeBasedArtifactNode(CommonModel.ComponentTypeName.FORM,
                                CommonModel.ComponentTypeCode.SystemForm));
                        eISL.entityArtifacts.push(new Models
                            .TypeBasedArtifactNode(CommonModel.ComponentTypeName.VIEW,
                                CommonModel.ComponentTypeCode.SavedQuery));
                        eISL.entityArtifacts
                            .push(new ArtifactNode(CommonModel.ComponentTypeName.CHART,
                                CommonModel.ComponentTypeCode.SavedQueryVisualization))
                    };
                    return EntityArea
                }();
                Models.EntityArea = EntityArea;
                var ComponentList = function() {
                    function ComponentList() {}

                    return ComponentList
                }();
                Models.ComponentList = ComponentList;
                var CreateNewButtonModel = function(_super) {
                    __extends(CreateNewButtonModel, _super);

                    function CreateNewButtonModel() {
                        _super.call(this);
                        this.isCreateNewButtonVisible = false
                    }

                    return CreateNewButtonModel
                }(FlyoutManagement.FlyoutContainer);
                Models.CreateNewButtonModel = CreateNewButtonModel;
                var FormFlyoutMenuItem = function() {
                    function FormFlyoutMenuItem() {}

                    return FormFlyoutMenuItem
                }();
                Models.FormFlyoutMenuItem = FormFlyoutMenuItem;
                var AppContextModel = function() {
                    function AppContextModel() {}

                    Object.defineProperty(AppContextModel.prototype,
                        "CurrentComponentList",
                        {
                            "get": function() {
                                if (Designers.Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(this
                                        .currentComponentList)) this.currentComponentList = new ComponentList;
                                return this.currentComponentList
                            },
                            enumerable: true,
                            configurable: true
                        });
                    return AppContextModel
                }();
                Models.AppContextModel = AppContextModel;
                var SelectedObjects = function() {
                    function SelectedObjects() {}

                    return SelectedObjects
                }();
                Models.SelectedObjects = SelectedObjects;
                var TreeNode = function() {
                    function TreeNode() {}

                    TreeNode.prototype.getDependencyCount = function() {
                        for (var dependencyCounter = 0, _i = 0, _a = this.requiredComponentsByEntity;
                            _i < _a.length;
                            _i++) {
                            var dependency = _a[_i];
                            dependencyCounter += dependency.getDependencyCount();
                            if (!dependency.isEntityAddedToAppContext) dependencyCounter += 1
                        }
                        return dependencyCounter
                    };
                    return TreeNode
                }();
                Models.TreeNode = TreeNode;
                var Dependencies = function() {
                    function Dependencies() {}

                    Dependencies.prototype.getDependencyCount = function() {
                        for (var dependencyCounter = 0, _i = 0, _a = this.reqComponents; _i < _a.length; _i++) {
                            var requiredComponent = _a[_i];
                            if (!requiredComponent.isAddedToAppContext) dependencyCounter++
                        }
                        return dependencyCounter
                    };
                    return Dependencies
                }();
                Models.Dependencies = Dependencies;
                var RequiredComponents = function() {
                    function RequiredComponents() {}

                    return RequiredComponents
                }();
                Models.RequiredComponents = RequiredComponents
            })(Models = AppDesigner.Models || (AppDesigner.Models = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Models;
            (function(Models) {
                "use strict";
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    FlyoutManagement = Mscrm.Designers.Common.FlyoutManagement,
                    BusinessProcessItem = function(_super) {
                        __extends(BusinessProcessItem, _super);

                        function BusinessProcessItem() { _super.apply(this, arguments) }

                        return BusinessProcessItem
                    }(Models.SelectableArtifactInfo);
                Models.BusinessProcessItem = BusinessProcessItem;
                var SiteMapItem = function(_super) {
                    __extends(SiteMapItem, _super);

                    function SiteMapItem() { _super.apply(this, arguments) }

                    return SiteMapItem
                }(Models.SelectableArtifactInfo);
                Models.SiteMapItem = SiteMapItem;
                var DashboardItem = function(_super) {
                    __extends(DashboardItem, _super);

                    function DashboardItem(formid, displayName, formType) {
                        _super.call(this, formid, displayName);
                        this.formType = formType
                    }

                    return DashboardItem
                }(Models.SelectableArtifactInfo);
                Models.DashboardItem = DashboardItem;
                var ViewItem = function(_super) {
                    __extends(ViewItem, _super);

                    function ViewItem() { _super.apply(this, arguments) }

                    return ViewItem
                }(Models.SelectableArtifactInfo);
                Models.ViewItem = ViewItem;
                var ChartItem = function(_super) {
                    __extends(ChartItem, _super);

                    function ChartItem() { _super.apply(this, arguments) }

                    return ChartItem
                }(Models.SelectableArtifactInfo);
                Models.ChartItem = ChartItem;
                var TypeBasedArtifactNode = function(_super) {
                    __extends(TypeBasedArtifactNode, _super);

                    function TypeBasedArtifactNode(displayName, componentTypeCode) {
                        _super.call(this, displayName, componentTypeCode);
                        this.listByTypeMap = new Dictionary;
                        this.categoryStateMap = new Dictionary;
                        AppDesigner.Services.CategorizationService
                            .InitializeCategoryStateMap(displayName, this.categoryStateMap)
                    }

                    return TypeBasedArtifactNode
                }(Models.ArtifactNode);
                Models.TypeBasedArtifactNode = TypeBasedArtifactNode;
                var EntityExtraOptionsFlyoutModel = function(_super) {
                    __extends(EntityExtraOptionsFlyoutModel, _super);

                    function EntityExtraOptionsFlyoutModel() { _super.apply(this, arguments) }

                    return EntityExtraOptionsFlyoutModel
                }(FlyoutManagement.FlyoutContainer);
                Models.EntityExtraOptionsFlyoutModel = EntityExtraOptionsFlyoutModel;
                var CommandBarAddFlyoutButtonModel = function(_super) {
                    __extends(CommandBarAddFlyoutButtonModel, _super);

                    function CommandBarAddFlyoutButtonModel() { _super.apply(this, arguments) }

                    return CommandBarAddFlyoutButtonModel
                }(FlyoutManagement.FlyoutContainer);
                Models.CommandBarAddFlyoutButtonModel = CommandBarAddFlyoutButtonModel;
                var CommandBarAddFlyoutMenuModel = function() {
                    function CommandBarAddFlyoutMenuModel() {}

                    return CommandBarAddFlyoutMenuModel
                }();
                Models.CommandBarAddFlyoutMenuModel = CommandBarAddFlyoutMenuModel;
                var CommandBarAddFlyoutMenuItem = function() {
                    function CommandBarAddFlyoutMenuItem() {}

                    return CommandBarAddFlyoutMenuItem
                }();
                Models.CommandBarAddFlyoutMenuItem = CommandBarAddFlyoutMenuItem
            })(Models = AppDesigner.Models || (AppDesigner.Models = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Designers.Common.Constants.ServiceNames,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    ComposableContextParam = Mscrm.Designers.Common.Constants.ComposableContextParam,
                    AppPageModel = function() {
                        function AppPageModel(appContext, contextModel) {
                            this.appContext = appContext;
                            this.contextModel = contextModel
                        }

                        return AppPageModel
                    }(),
                    AppContextManipulationService = function() {
                        function AppContextManipulationService($http,
                            urlHelperService,
                            traceUtility,
                            perfService,
                            appDesignerPerfKpisService,
                            pageLoadService,
                            mscrmBreadcrumbService,
                            dirtyCheckService,
                            cacheUtilityService,
                            mscrmAppInterfaceService) {
                            this.$http = $http;
                            this.urlHelperService = urlHelperService;
                            this.traceUtility = traceUtility;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.pageLoadService = pageLoadService;
                            this.mscrmBreadcrumbService = mscrmBreadcrumbService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.cacheUtilityService = cacheUtilityService;
                            this.mscrmAppInterfaceService = mscrmAppInterfaceService;
                            this.entityMetadataMap = {};
                            this.entityMetadata = [];
                            this.isDependencyPaneHidden = true;
                            this.appContext = new AppDesigner.Models.AppContext;
                            this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                .AppDesignerCanvas,
                                false)
                        }

                        AppContextManipulationService.prototype.updateAppContext = function(appContext) {
                            this.appContext = appContext;
                            this.cachedAppInfo = JSON.parse(JSON.stringify(this.appContext.appInfo))
                        };
                        Object.defineProperty(AppContextManipulationService.prototype,
                            "AppContext",
                            { "get": function() { return this.appContext }, enumerable: true, configurable: true });
                        AppContextManipulationService.prototype
                            .retrieveCachedAppInfo = function() { return this.cachedAppInfo };
                        AppContextManipulationService.prototype.InitializeAppContextModelData = function() {
                            if (Designers.Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(this.ContextModel)) this.createAppContextModel();
                            else {
                                this.appContext = angular.copy(this.cacheUtilityService
                                    .Get(Designers.Common.Constants.CacheUtilitiesKeys.AppContext));
                                this.contextModel = angular
                                    .copy(this.cacheUtilityService
                                        .Get(Designers.Common.Constants.CacheUtilitiesKeys.AppContextModel));
                                this.RestoreSelections()
                            }
                        };
                        AppContextManipulationService.prototype.RestoreSelections = function() {
                            for (var index = 0;
                                index < this.entityMetadata.length;
                                index++
                            ) this.entityMetadata[index].isAddedToApp = false;
                            for (var appEntityList = this.contextModel.entityArea.entityList, index = 0;
                                index < appEntityList.length;
                                index++) this.entityMetadataMap[appEntityList[index]].isAddedToApp = true
                        };
                        AppContextManipulationService.prototype
                            .PushToBreadcrumb = function(breadcrumbItem) {
                                this.mscrmBreadcrumbService.PushBreadcrumb(breadcrumbItem)
                            };
                        AppContextManipulationService.prototype.createAppContextModel = function() {
                            this.contextModel = new AppDesigner.Models.AppContextModel;
                            this.contextModel.siteMaps = new AppDesigner.Models
                                .ArtifactNode(CommonModel.ComponentTypeName.SITEMAP,
                                    CommonModel.ComponentTypeCode.SiteMap);
                            this.contextModel.businessProcesses = new AppDesigner.Models
                                .ArtifactNode(CommonModel.ComponentTypeName.BUSINESS_PROCESS,
                                    CommonModel.ComponentTypeCode.BPF);
                            this.contextModel.dashboards = new AppDesigner.Models
                                .ArtifactNode(CommonModel.ComponentTypeName.DASHBOARD,
                                    CommonModel.ComponentTypeCode.SystemForm);
                            this.contextModel.entityArea = new AppDesigner.Models.EntityArea;
                            this.cacheUtilityService.Add(Designers.Common.Constants.CacheUtilitiesKeys.AppContextModel,
                                angular.copy(this.ContextModel));
                            return this.contextModel
                        };
                        Object.defineProperty(AppContextManipulationService.prototype,
                            "ContextModel",
                            { "get": function() { return this.contextModel }, enumerable: true, configurable: true });
                        AppContextManipulationService.prototype.LoadEntityDefinitions = function(entitySchemaName) {
                            var entitiesShownInCustomizationUIFilter = this.urlHelperService
                                    .EntitiesShownInCustomizationUIFilter,
                                entitiesCanBeCustomizedFilter = this.urlHelperService.EntitiesCanBeCustomizedFilter,
                                entitiesBlacklistedFilter = this.urlHelperService.EntitiesBlacklistedFilter,
                                url = this.urlHelperService.ODataEndPointUrl +
                                    "EntityDefinitions?$select=LogicalName,DisplayName,ObjectTypeCode,CanCreateForms,CanCreateViews,CanCreateCharts,IsCustomizable&$filter=" +
                                    entitiesShownInCustomizationUIFilter +
                                    " and " +
                                    entitiesCanBeCustomizedFilter +
                                    " and " +
                                    entitiesBlacklistedFilter;
                            if (entitySchemaName) url += " and (LogicalName eq '" + entitySchemaName + "')";
                            var result = this.$http.get(encodeURI(url)).then(function(response) {
                                    this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                        encodeURI(url),
                                        new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                    for (var data = response.data, entityMetadata, i = 0; i < data.value.length; i++)
                                        if (!Designers.Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(data.value[i].DisplayName.UserLocalizedLabel)) {
                                            entityMetadata = new AppDesigner.Models
                                                .EntityMetadata(data.value[i].MetadataId,
                                                    data.value[i].DisplayName.UserLocalizedLabel.Label,
                                                    data.value[i].LogicalName,
                                                    data.value[i].ObjectTypeCode,
                                                    data.value[i].CanCreateForms.Value,
                                                    data.value[i].CanCreateViews.Value,
                                                    data.value[i].CanCreateCharts.Value,
                                                    data.value[i].IsCustomizable.Value);
                                            this.entityMetadataMap[data.value[i]["MetadataId"]] = entityMetadata;
                                            this.entityMetadata.push(entityMetadata)
                                        }
                                    this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                        "LoadEntityDefinitions",
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(AppDesigner.EventStatus
                                            .Success +
                                            ": Loads Entity Definitions"));
                                    this.traceUtility.Scenario = "";
                                    this.pageLoadService.entityDefinitionsFetched = true;
                                    this.perfService
                                        .checkForFullLoad(this.pageLoadService.getConditionForCurrentState(),
                                            this.appDesignerPerfKpisService
                                            .getPerfKpiByName(AppDesigner.Services.KpiNames.fullLoadAppDesigner))
                                }.bind(this),
                                function(httpError) {
                                    this.traceUtility.LogError(Tracing.TraceComponent.AppDesigner,
                                        "LoadEntityDefinitions",
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(AppDesigner.EventStatus.Fail +
                                            ": Failed to Load Entity Definitions"));
                                    this.traceUtility.Scenario = ""
                                }.bind(this));
                            return result
                        };
                        AppContextManipulationService.prototype.GetEntityListWrapper = function() {
                            var self = this,
                                result = this.mscrmAppInterfaceService
                                    .GetData(Designers.Common.AppInterface.BusinessLogic.ActionKey.RetreiveEntityList,
                                        null)
                                    .then(function(response) {
                                            if (response.status === 200) {
                                                var entity = [];
                                                if (!Designers.Common.Utility.ScriptUtilities
                                                    .IsNullOrUndefined(response.data.value))
                                                    for (var entityMetadata, i = 0;
                                                        i < response.data.value.length;
                                                        i++
                                                    ) {
                                                        entityMetadata = new AppDesigner.Models
                                                            .EntityMetadata(response.data.value[i].MetadataId,
                                                                response.data.value[i].DisplayName.UserLocalizedLabel
                                                                .Label,
                                                                response.data.value[i].LogicalName,
                                                                response.data.value[i].ObjectTypeCode,
                                                                response.data.value[i].CanCreateForms.Value,
                                                                response.data.value[i].CanCreateViews.Value,
                                                                response.data.value[i].CanCreateCharts.Value,
                                                                response.data.value[i].IsCustomizable.Value);
                                                        self.entityMetadataMap[response.data
                                                            .value[i]["MetadataId"]] = entityMetadata;
                                                        self.entityMetadata.push(entityMetadata)
                                                    }
                                            }
                                        },
                                        function(httpError) {});
                            return result
                        };
                        AppContextManipulationService.prototype
                            .getEntityMetadata = function() { return this.entityMetadata };
                        AppContextManipulationService.prototype.getProcessNameForBusinessProcess = function(id) {
                            var url = this.urlHelperService.ODataEndPointUrl +
                                    "workflows?$select=name,description&$filter=workflowid eq " +
                                    id,
                                result = this.$http.get(encodeURI(url)).then(function(response) {
                                    this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                        encodeURI(url),
                                        new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                    if (!Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(response.data.value) &&
                                        !Designers.Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(response.data.value[0])) {
                                        var processItem = new AppDesigner.Models
                                            .BusinessProcessItem(id, response.data.value[0].name);
                                        processItem.description = response.data.value[0].description;
                                        this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                            "GetProcessNameForBusinessProcess",
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData(AppDesigner.EventStatus.Success +
                                                ": Business Process Item" +
                                                processItem));
                                        this.traceUtility.Scenario = ""
                                    }
                                    return processItem
                                }.bind(this));
                            return result
                        };
                        AppContextManipulationService.prototype.populateBusinessProcessObject = function() {
                            if (this.contextModel.businessProcesses && this.contextModel.businessProcesses.selectedList)
                                for (var i = 0; i < this.contextModel.businessProcesses.selectedList.length; i++) {
                                    var artifactInfo = this.contextModel.businessProcesses.selectedList[i],
                                        bpf = new CommonModel
                                            .AppComponent(new Designers.Common.Guid(artifactInfo.id),
                                                CommonModel.ComponentTypeCode.BPF,
                                                CommonModel.ComponentTypeName.BUSINESS_PROCESS);
                                    this.appComponents.push(bpf)
                                }
                        };
                        AppContextManipulationService.prototype.populateDashboardObject = function() {
                            this.appContext.dashboards = [];
                            if (this.contextModel.dashboards && this.contextModel.dashboards.selectedList)
                                for (var i = 0; i < this.contextModel.dashboards.selectedList.length; i++) {
                                    var artifactInfo = this.contextModel.dashboards.selectedList[i],
                                        dashboard = new CommonModel
                                            .AppComponent(new Designers.Common.Guid(artifactInfo.id),
                                                CommonModel.ComponentTypeCode.SystemForm,
                                                CommonModel.ComponentTypeName.DASHBOARD);
                                    this.appComponents.push(dashboard)
                                }
                        };
                        AppContextManipulationService.prototype.populateAppEntityObject = function() {
                            for (var i = 0; i < this.contextModel.entityArea.entitySwimLanes.length; i++) {
                                var ensl = this.contextModel.entityArea.entitySwimLanes[i],
                                    appEntityInfo = new AppDesigner.Models.AppEntityInfo(ensl.entitymetadata.id),
                                    appComponent = new CommonModel
                                        .AppComponent(new Designers.Common.Guid(ensl.entitymetadata.id),
                                            CommonModel.ComponentTypeCode.Entity,
                                            ensl.entitymetadata.displayName);
                                this.appComponents.push(appComponent);
                                for (var j = 0; j < ensl.entityArtifacts.length; j++)
                                    for (var artifact = ensl.entityArtifacts[j], k = 0;
                                        k < artifact.selectedList.length;
                                        k++) {
                                        var componentType;
                                        switch (artifact.displayName) {
                                        case CommonModel.ComponentTypeName.FORM:
                                            componentType = CommonModel.ComponentTypeCode.SystemForm;
                                            break;
                                        case CommonModel.ComponentTypeName.VIEW:
                                            componentType = CommonModel.ComponentTypeCode.SavedQuery;
                                            break;
                                        case CommonModel.ComponentTypeName.CHART:
                                            componentType = CommonModel.ComponentTypeCode.SavedQueryVisualization
                                        }
                                        var appComponent = new CommonModel
                                            .AppComponent(new Designers.Common.Guid(artifact.selectedList[k].id),
                                                componentType,
                                                artifact.displayName);
                                        this.appComponents.push(appComponent)
                                    }
                            }
                        };
                        AppContextManipulationService.prototype.getAppComponents = function() {
                            this.appComponents = [];
                            this.contextModel.siteMaps &&
                                this.contextModel.siteMaps.selectedList[0] &&
                                this.appComponents.push(new CommonModel
                                    .AppComponent(new Designers.Common
                                        .Guid(this.contextModel.siteMaps.selectedList[0].id),
                                        CommonModel.ComponentTypeCode.SiteMap,
                                        CommonModel.ComponentTypeName.SITEMAP));
                            this.populateBusinessProcessObject();
                            this.populateDashboardObject();
                            this.populateAppEntityObject();
                            return this.appComponents
                        };
                        AppContextManipulationService.prototype.getComposableContext = function() {
                            var composableContextParams = new Dictionary;
                            composableContextParams.add(ComposableContextParam.AppId, this.AppContext.appInfo.appId);
                            composableContextParams.add(ComposableContextParam.AppName, this.AppContext.appInfo.title);
                            composableContextParams.add(ComposableContextParam
                                .SolutionId,
                                this.urlHelperService.SolutionId);
                            composableContextParams.add(ComposableContextParam.AppUniqueName,
                                this.AppContext.appInfo.uniqueName);
                            this.contextModel.siteMaps &&
                                this.contextModel.siteMaps.selectedList[0] &&
                                composableContextParams.add(ComposableContextParam.SitemapId,
                                    this.contextModel.siteMaps.selectedList[0].id);
                            var composableContext = new AppDesigner.Models
                                .AppComposableContext(composableContextParams);
                            return composableContext
                        };
                        AppContextManipulationService.prototype
                            .AddComponentInApp = function(artifactNode, component, shouldSetDirty) {
                                if (shouldSetDirty === void 0) shouldSetDirty = true;
                                artifactNode.AddComponent(component);
                                this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                    .AppDesignerCanvas,
                                    shouldSetDirty)
                            };
                        AppContextManipulationService.prototype
                            .AddEntityComponentInApp = function(entityMetadata, shouldSetDirty) {
                                if (shouldSetDirty === void 0) shouldSetDirty = true;
                                if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(entityMetadata) &&
                                    this.ContextModel.entityArea.entityList.indexOf(entityMetadata.id) === -1) {
                                    this.ContextModel.entityArea.AddEntity(entityMetadata);
                                    this.dirtyCheckService
                                        .setDirty(Designers.Common.Constants.DirtyCheckModelNames.AppDesignerCanvas,
                                            shouldSetDirty)
                                }
                            };
                        AppContextManipulationService.prototype.GetSitemapId = function() {
                            var sitemapId = "";
                            if (this.ContextModel
                                .siteMaps &&
                                this.ContextModel.siteMaps
                                .selectedList[0]) sitemapId = this.ContextModel.siteMaps.selectedList[0].id;
                            return sitemapId
                        };
                        AppContextManipulationService.prototype.PostSuccessfulAppUpdate = function() {
                            this.AppContext.appInfo.status = Mscrm.Designers.AppDesigner.ComponentState
                                .GetComponentState(Mscrm.Designers.AppDesigner.AppState.Draft);
                            this.AppContext.appInfo.lastModifiedOn = new Date
                        };
                        AppContextManipulationService
                            .$inject = [
                                ServiceNames.HttpService, ServiceNames.UrlHelperService, ServiceNames
                                .TraceUtilityService,
                                ServiceNames.PerfService, AppDesigner.AppDesignerServiceNames
                                .AppDesignerPerfKpisService,
                                AppDesigner.AppDesignerServiceNames.PageLoadService, "mscrmBreadcrumbService",
                                ServiceNames
                                .DirtyCheckService, ServiceNames.CacheUtilityService, "mscrmAppInterfaceService"
                            ];
                        return AppContextManipulationService
                    }();
                DataServices.AppContextManipulationService = AppContextManipulationService;
                AppDesigner.AppDesignerModule.service("mscrmAppContextManipulationService",
                    AppContextManipulationService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var AppInterface = Mscrm.Designers.Common.AppInterface,
                    AppInterfaceService = function(_super) {
                        __extends(AppInterfaceService, _super);

                        function AppInterfaceService(appCrudService, appValidateService) {
                            _super.call(this, appCrudService);
                            this.appCrudService = appCrudService;
                            this.appValidateService = appValidateService
                        }

                        AppInterfaceService.prototype
                            .CreateApp = function(appInfo, solutionUniqueName, onSuccess, onFailure) {
                                this.appCrudService
                                    .CreateAppModule(appInfo.GetAttributes(), solutionUniqueName, onSuccess, onFailure)
                            };
                        AppInterfaceService.prototype
                            .RetrieveApp = function(Id, onSuccess, onFailure) {
                                this.appCrudService.RetrieveAppComponents(Id, onSuccess, onFailure)
                            };
                        AppInterfaceService.prototype
                            .UpdateAppInfo = function(appInfo, onSuccess, onFailure) {
                                this.appCrudService.Update(AppInterface.BusinessLogic.ActionKey.AppUpdate,
                                    appInfo.GetAttributes(),
                                    onSuccess,
                                    onFailure)
                            };
                        AppInterfaceService.prototype
                            .RemoveSiteMapDependencies = function() {
                                for (var cssNodes = document.getElementsByTagName("link"), indexCount = cssNodes.length;
                                    indexCount >= 0;
                                    indexCount--)
                                    cssNodes[indexCount] &&
                                        cssNodes[indexCount].getAttribute("href") != null &&
                                        cssNodes[indexCount].getAttribute("href").indexOf("bootstrap.min.css") != -1 &&
                                        cssNodes[indexCount].parentNode != null &&
                                        cssNodes[indexCount].parentNode.removeChild(cssNodes[indexCount])
                            };
                        AppInterfaceService.prototype
                            .SaveAppComponents = function(appInfo,
                                appComponents,
                                onSuccess,
                                onFailure,
                                isRetainAppModuleComponents) {
                                if (isRetainAppModuleComponents === void 0) isRetainAppModuleComponents = false;
                                this.appCrudService
                                    .AddEditAppModuleComponents(appInfo.GetAttributes(),
                                        appComponents,
                                        onSuccess,
                                        onFailure,
                                        isRetainAppModuleComponents)
                            };
                        AppInterfaceService.prototype
                            .ValidateApp = function(appId, onSuccess, onFailure) {
                                this.appValidateService.ValidateApp(appId, onSuccess, onFailure)
                            };
                        AppInterfaceService.prototype
                            .PublishApp = function(appId, onSuccess, onFailure) {
                                this.appCrudService
                                    .PublishAppModule(new Designers.Common.Guid(appId), onSuccess, onFailure)
                            };
                        AppInterfaceService.$inject = [
                            AppInterface.AppInterfaceConstants.ServiceNames.AppInterfaceCRUDOperations, AppInterface
                            .AppInterfaceConstants.ServiceNames.AppInterfaceValidationOperation
                        ];
                        return AppInterfaceService
                    }(AppInterface.Designers.AppInterfaceServiceBase);
                DataServices.AppInterfaceService = AppInterfaceService;
                AppDesigner.AppDesignerModule.service("mscrmAppInterfaceService", AppInterfaceService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Services;
            (function(Services) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    CategorizationService = function() {
                        function CategorizationService(localizationService, filter) {
                            this.localizationService = localizationService;
                            this.filter = filter;
                            this.formMap = new Dictionary;
                            this.viewMap = new Dictionary;
                            this.formTypesList = new Dictionary;
                            this.viewTypesList = new Dictionary;
                            this.formCategoryStateMap = new Dictionary;
                            this.viewCategoryStateMap = new Dictionary;
                            this.initializeFormMap();
                            this.initializeViewMap();
                            CategorizationService.InitializeFormCategoryStateMap(this.formCategoryStateMap);
                            CategorizationService.InitializeViewCategoryStateMap(this.viewCategoryStateMap)
                        }

                        CategorizationService.prototype.initializeFormMap = function() {
                            this.formMap.add(AppDesigner.FormType.Main.toString(),
                                this.localizationService.getResourceString("AppDesigner.MainForms"));
                            this.formMap.add(AppDesigner.FormType.Quick.toString(),
                                this.localizationService.getResourceString("AppDesigner.QuickViewForms"));
                            this.formMap.add(AppDesigner.FormType.QuickCreate.toString(),
                                this.localizationService.getResourceString("AppDesigner.QuickCreateForms"))
                        };
                        CategorizationService.prototype.initializeViewMap = function() {
                            this.viewMap.add(AppDesigner.ViewType.Public.toString(),
                                this.localizationService.getResourceString("AppDesigner.PublicViews"));
                            this.viewMap.add(AppDesigner.ViewType.AdvancedFind.toString(),
                                this.localizationService.getResourceString("AppDesigner.AdvancedFindViews"));
                            this.viewMap.add(AppDesigner.ViewType.Associated.toString(),
                                this.localizationService.getResourceString("AppDesigner.AssociatedViews"));
                            this.viewMap.add(AppDesigner.ViewType.Lookup.toString(),
                                this.localizationService.getResourceString("AppDesigner.LookupViews"))
                        };
                        CategorizationService.InitializeCategoryStateMap = function(artifactName, categoryStateMap) {
                            if (artifactName == CommonModel.ComponentTypeName.FORM
                            ) CategorizationService.InitializeFormCategoryStateMap(categoryStateMap);
                            else
                                artifactName == CommonModel.ComponentTypeName.VIEW &&
                                    CategorizationService.InitializeViewCategoryStateMap(categoryStateMap)
                        };
                        CategorizationService.InitializeFormCategoryStateMap = function(categoryStateMap) {
                            categoryStateMap.add(AppDesigner.FormType.Main.toString(),
                                AppDesigner.CategoryState.Expanded);
                            categoryStateMap.add(AppDesigner.FormType.Quick.toString(),
                                AppDesigner.CategoryState.Expanded);
                            categoryStateMap.add(AppDesigner.FormType.QuickCreate.toString(),
                                AppDesigner.CategoryState.Expanded)
                        };
                        CategorizationService.InitializeViewCategoryStateMap = function(categoryStateMap) {
                            categoryStateMap.add(AppDesigner.ViewType.Public
                                .toString(),
                                AppDesigner.CategoryState.Expanded);
                            categoryStateMap.add(AppDesigner.ViewType.AdvancedFind.toString(),
                                AppDesigner.CategoryState.Expanded);
                            categoryStateMap.add(AppDesigner.ViewType.Associated.toString(),
                                AppDesigner.CategoryState.Expanded);
                            categoryStateMap.add(AppDesigner.ViewType.Lookup.toString(),
                                AppDesigner.CategoryState.Expanded)
                        };
                        CategorizationService.prototype
                            .setCategoryStateMapToExpandedState =
                            function(categoryStateMap) {
                                for (var item in categoryStateMap
                                    .getKeys()) categoryStateMap.update(item, AppDesigner.CategoryState.Expanded)
                            };
                        CategorizationService.prototype.getCategoryStateMap = function(artifactNode) {
                            if (artifactNode
                                .displayName ==
                                CommonModel.ComponentTypeName.FORM) return this.formCategoryStateMap;
                            else if (artifactNode
                                .displayName ==
                                CommonModel.ComponentTypeName.VIEW) return this.viewCategoryStateMap;
                            return null
                        };
                        CategorizationService.prototype.toggleCategoryState = function(categoryStateMap, key) {
                            var currentState = categoryStateMap.getValue(key);
                            switch (currentState) {
                            case AppDesigner.CategoryState.Collapsed:
                                categoryStateMap.update(key, AppDesigner.CategoryState.Expanded);
                                break;
                            case AppDesigner.CategoryState.Expanded:
                                categoryStateMap.update(key, AppDesigner.CategoryState.Collapsed)
                            }
                        };
                        CategorizationService.prototype.getTypeMap = function(artifactNode) {
                            if (artifactNode.displayName == CommonModel.ComponentTypeName.FORM) return this.formMap;
                            else if (artifactNode
                                .displayName ==
                                CommonModel.ComponentTypeName.VIEW) return this.viewMap;
                            return null
                        };
                        CategorizationService.prototype.getTypesList = function(artifactNode) {
                            if (artifactNode
                                .displayName ==
                                CommonModel.ComponentTypeName.FORM) return this.formTypesList;
                            else if (artifactNode
                                .displayName ==
                                CommonModel.ComponentTypeName.VIEW) return this.viewTypesList;
                            return null
                        };
                        CategorizationService.prototype.populateTypesList = function(artifactName, itemList) {
                            this.setCategoryStateMapToExpandedState(this.formCategoryStateMap);
                            this.setCategoryStateMapToExpandedState(this.viewCategoryStateMap);
                            var typeList;
                            if (itemList == null) return;
                            if (artifactName == CommonModel.ComponentTypeName.FORM) {
                                var mainForms = this.filter(itemList, { formType: AppDesigner.FormType.Main }),
                                    quickViewForms = this.filter(itemList, { formType: AppDesigner.FormType.Quick }),
                                    quickCreateForms = this
                                        .filter(itemList, { formType: AppDesigner.FormType.QuickCreate });
                                itemList = [];
                                itemList = itemList.concat(mainForms, quickViewForms, quickCreateForms);
                                typeList = this.formTypesList
                            } else if (artifactName == CommonModel.ComponentTypeName.VIEW
                            ) typeList = this.viewTypesList;
                            else return;
                            typeList.clear();
                            for (var _i = 0; _i < itemList.length; _i++) {
                                var nodeItem = itemList[_i];
                                this.addItemToTypeList(typeList, nodeItem)
                            }
                        };
                        CategorizationService.prototype.addItemToTypeList = function(dict, item) {
                            var typeString = item.formType.toString(),
                                typeListValue = dict.getValue(typeString),
                                typeList;
                            if (typeListValue !== false) typeList = typeListValue;
                            else typeList = [];
                            typeList.push(item);
                            typeList = typeList.sort(function(artifact1, artifact2) {
                                return artifact1.displayName.localeCompare(artifact2.displayName)
                            });
                            dict.sortedUpsert(typeString, typeList)
                        };
                        CategorizationService.prototype.removeItemFromTypeList = function(dict, item) {
                            var typeString = item.formType.toString(), typeListValue = dict.getValue(typeString);
                            if (typeListValue !== false) {
                                var typeList = typeListValue, index = typeList.indexOf(item);
                                typeList.splice(index, 1);
                                typeList.length == 0 && dict.remove(typeString)
                            }
                        };
                        CategorizationService.$inject = ["mscrmLocalizationService", "filterFilter"];
                        return CategorizationService
                    }();
                Services.CategorizationService = CategorizationService;
                AppDesigner.AppDesignerModule.service("mscrmCategorizationService", CategorizationService)
            })(Services = AppDesigner.Services || (AppDesigner.Services = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var appUrls = Designers.Common.Constants.AppUrls,
                    appStateNames = Designers.Common.Constants.AppUrlStateNames,
                    scriptUtil = Mscrm.Designers.Common.Utility.ScriptUtilities,
                    PageLoadService = function() {
                        function PageLoadService(state) {
                            this.state = state;
                            this.imageResourcesLoaded = false;
                            this.entityDefinitionsFetched = false
                        }

                        PageLoadService.prototype.getConditionForCurrentState = function() {
                            var _this = this, condition;
                            if (!scriptUtil.IsNullOrUndefined(this.state.current) &&
                                !scriptUtil.IsNullOrUndefined(this.state.current.url))
                                if (this.state.current.url.toString()
                                    .indexOf(appUrls.createApp) !==
                                    -1) condition = function() { return _this.imageResourcesLoaded };
                                else if (this.state.current.url.toString()
                                    .indexOf(appUrls.appDesigner) !==
                                    -1)
                                    condition = function() {
                                        return _this.imageResourcesLoaded && _this.entityDefinitionsFetched
                                    };
                            return condition
                        };
                        PageLoadService.prototype.getCurrentAppState = function() {
                            if (!scriptUtil.IsNullOrUndefined(this.state.current))
                                if (this.state.current
                                    .name ===
                                    appStateNames.createNewApp) return appStateNames.createNewApp;
                                else if (this.state.current
                                    .name ===
                                    appStateNames.appDesignerCanvas) return appStateNames.appDesignerCanvas;
                            return null
                        };
                        PageLoadService.$inject = ["$state"];
                        return PageLoadService
                    }();
                DataServices.PageLoadService = PageLoadService;
                AppDesigner.AppDesignerModule.service("mscrmPageLoadService", PageLoadService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Designers.Common.Constants.ServiceNames,
                    ComponentDependencyService = function() {
                        function ComponentDependencyService($http,
                            appCtxManipulationSvc,
                            urlHelperService,
                            perfService,
                            appDesignerPerfKpisService,
                            traceUtility) {
                            this.$http = $http;
                            this.appCtxManipulationSvc = appCtxManipulationSvc;
                            this.urlHelperService = urlHelperService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.traceUtility = traceUtility
                        }

                        ComponentDependencyService.prototype.EvalDependency = function(compTypeCode, compId) {
                            var result;
                            result = this.GetRequiredComponents(compTypeCode, compId)
                                .then(function(response) { return response });
                            return result
                        };
                        ComponentDependencyService.prototype
                            .AddDependenciesforArtifact = function(compTypeCode, compId) {
                                this.EvalDependency(compTypeCode, compId).then(function(response) {
                                    if (response) {
                                        for (var i = 0;
                                            i < response.length;
                                            i++
                                        )
                                            this.appCtxManipulationSvc
                                                .AddEntityComponentInApp(this.appCtxManipulationSvc
                                                    .entityMetadataMap[response[i].Id.toString()]);
                                        this.perfService
                                            .getStopWatch(this.appDesignerPerfKpisService
                                                .getPerfKpiByName(AppDesigner.Services.KpiNames.addComponent)).stop()
                                    }
                                }.bind(this))
                            };
                        ComponentDependencyService.prototype.GetRequiredComponents = function(compTypeCode, compId) {
                            var result = this.AppIRetrieveRequiredComponents(compTypeCode, compId)
                                .then(function(response) {
                                    var retVal = [];
                                    if (response)
                                        for (var resp = response.data.value,
                                            objType,
                                            Id,
                                            displayName,
                                            logicalName,
                                            objectTypeCode,
                                            i = 0;
                                            i < resp.length;
                                            i++)
                                            if (resp[i]["requiredcomponenttype"] == CommonModel.ComponentTypeCode.Entity
                                            ) {
                                                Id = resp[i]["requiredcomponentobjectid"];
                                                objType = "Entity";
                                                var metadata = this.appCtxManipulationSvc.entityMetadataMap[Id
                                                    .toString()];
                                                if (metadata != undefined) {
                                                    logicalName = metadata.logicalName;
                                                    displayName = metadata.displayName;
                                                    objectTypeCode = metadata.objectTypeCode;
                                                    retVal.push({
                                                        Type: objType,
                                                        Id: Id,
                                                        DisplayName: displayName,
                                                        LogicalName: logicalName,
                                                        ObjectTypeCode: objectTypeCode
                                                    })
                                                }
                                            }
                                    return retVal
                                }.bind(this));
                            return result
                        };
                        ComponentDependencyService.prototype
                            .AppIRetrieveRequiredComponents = function(compTypeCode, ObjectId) {
                                var url = this.urlHelperService.ODataEndPointUrl +
                                        "RetrieveRequiredComponents(ObjectId=" +
                                        ObjectId +
                                        ",ComponentType=" +
                                        compTypeCode.toString() +
                                        ")",
                                    result = this.$http.get(encodeURI(url)).then(function(response) {
                                            this.traceUtility
                                                .LogVerbose(Tracing.TraceComponent.AppDesigner,
                                                    url,
                                                    new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                            this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                                "AppIRetrieveRequiredComponents",
                                                new Mscrm.Designers.Common.Tracing
                                                .StringTraceData(AppDesigner.EventStatus.Success +
                                                    ": Retrieve Components successful."));
                                            this.traceUtility.Scenario = "";
                                            return response
                                        }.bind(this),
                                        function(httpError) {
                                            this.traceUtility.LogError(Tracing.TraceComponent.AppDesigner,
                                                "AppIRetrieveRequiredComponents",
                                                new Mscrm.Designers.Common.Tracing
                                                .StringTraceData(AppDesigner.EventStatus.Fail +
                                                    ": Failed to retrieve required components."));
                                            this.traceUtility.Scenario = "";
                                            return ""
                                        }.bind(this));
                                return result
                            };
                        ComponentDependencyService.$inject = [
                            "$http", "mscrmAppContextManipulationService", Designers.Common.Constants.ServiceNames
                            .UrlHelperService, "mscrmPerfService", "mscrmAppDesignerPerfKpisService", ServiceNames
                            .TraceUtilityService
                        ];
                        return ComponentDependencyService
                    }();
                DataServices.ComponentDependencyService = ComponentDependencyService;
                AppDesigner.AppDesignerModule.service("mscrmComponentDependencyService", ComponentDependencyService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    LegacyDesignerService = function() {
                        function LegacyDesignerService(urlHelperService, sessionInfo) {
                            this.urlHelperService = urlHelperService;
                            this.sessionInfo = sessionInfo;
                            this.dashboardPageType = "dashboardeditor";
                            this.chartPageType = "vizdesigner";
                            this.formPageType = "formeditor";
                            this.dashboardTypeCode = 1030;
                            this.serverUrl = this.urlHelperService.ClientUrl
                        }

                        Object.defineProperty(LegacyDesignerService.prototype,
                            "WindowProperties",
                            {
                                "get": function() {
                                    return Designers.Common.Utility.StringUtilities
                                        .Format("height={0},width={1},left={2},top={3},scrollbars=yes,resizable=1",
                                        [
                                            (screen.availHeight * .9).toString(), (screen.availWidth * .8).toString(),
                                            (screen.availWidth * .1).toString(), (screen.availHeight * .05).toString()
                                        ])
                                },
                                enumerable: true,
                                configurable: true
                            });
                        LegacyDesignerService.prototype.OpenBusinessProcessEditor = function(workflowId) {
                            var customUrl = this.serverUrl +
                                "/Tools/ProcessControl/UnifiedProcessDesigner.aspx?id=" +
                                workflowId;
                            window.open(customUrl,
                                Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(workflowId)
                                ? "_blank"
                                : workflowId,
                                this.WindowProperties)
                        };
                        LegacyDesignerService.prototype.OpenDashboardEditor = function(formId, layoutId) {
                            var customUrl = null;
                            customUrl = this.serverUrl +
                                "/main.aspx?appSolutionId={" +
                                this.urlHelperService.SolutionId +
                                "}&extraqs=";
                            if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(formId))
                                customUrl = customUrl + encodeURIComponent("formId={" + formId + "}");
                            else if (!Designers.Common.Utility.StringUtilities
                                .IsNullOrEmpty(layoutId))
                                customUrl = customUrl + encodeURIComponent("layoutId=" + layoutId);
                            customUrl = customUrl +
                                encodeURIComponent("&dashboardtype=" + this.dashboardTypeCode) +
                                "&pagetype=" +
                                this.dashboardPageType;
                            window.open(customUrl,
                                Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(formId) ? "_blank" : formId,
                                this.WindowProperties)
                        };
                        LegacyDesignerService.prototype.isDesignerEnabled = function(artifactType) {
                            switch (artifactType) {
                            case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                return this.sessionInfo.FCBDetails[Designers.Common.Constants.FCBNames
                                    .UnifiedProcessDesigner]
                            }
                            return true
                        };
                        LegacyDesignerService.prototype.OpenFormEditor = function(entityMetadata, formType, formid) {
                            var customUrl = null;
                            customUrl = this.serverUrl +
                                "/main.aspx?appSolutionId={" +
                                this.urlHelperService.SolutionId +
                                "}&etc=" +
                                entityMetadata.objectTypeCode +
                                "&extraqs=formtype";
                            customUrl += formType === AppDesigner.FormType.QuickCreate
                                ? encodeURIComponent("=" +
                                    AppDesigner.FormType[formType].charAt(0).toLowerCase() +
                                    AppDesigner.FormType[formType].slice(1))
                                : encodeURIComponent("=" + AppDesigner.FormType[formType].toLowerCase());
                            customUrl += formid && formid != null
                                ? encodeURIComponent("&action=-1".toLowerCase() + "&formId=" + formid)
                                : encodeURIComponent("&action=0").toLowerCase();
                            customUrl += encodeURIComponent("&entityId={" + entityMetadata.id + "}") +
                                "&pagetype=formeditor";
                            window.open(customUrl,
                                Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(formid)
                                ? "NewForm" + formType
                                : formid,
                                this.WindowProperties)
                        };
                        LegacyDesignerService.prototype.OpenViewEditor = function(entityMetadata, viewId) {
                            var customUrl = null;
                            customUrl = this.serverUrl +
                                "/tools/vieweditor/viewManager.aspx?appSolutionId={" +
                                this.urlHelperService.SolutionId +
                                "}&entityId={" +
                                entityMetadata.id +
                                "}";
                            if (viewId && viewId != null) customUrl += "&id={" + viewId + "}";
                            else customUrl += "&mode=new&objectTypeCode=" + entityMetadata.objectTypeCode;
                            window.open(customUrl,
                                Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(viewId) ? "_blank" : viewId,
                                this.WindowProperties)
                        };
                        LegacyDesignerService.prototype.OpenChartEditor = function(entityMetadata, id) {
                            var customUrl = null;
                            customUrl = this.serverUrl +
                                "/main.aspx?appSolutionId={" +
                                this.urlHelperService.SolutionId +
                                "}&extraqs=" +
                                encodeURIComponent("etc=" + entityMetadata.objectTypeCode);
                            customUrl += id && id != null ? encodeURIComponent("&id={" + id + "}") : "";
                            customUrl += encodeURIComponent("&entityId={" + entityMetadata.id + "}") +
                                "&pagetype=" +
                                this.chartPageType;
                            window.open(customUrl,
                                Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(id) ? "_blank" : id,
                                this.WindowProperties)
                        };
                        LegacyDesignerService.prototype.OpenEntityEditor = function(actionType, id) {
                            var customUrl = null;
                            customUrl = this.serverUrl +
                                "/tools/systemcustomization/entities/manageentity.aspx?appSolutionId={" +
                                this.urlHelperService.SolutionId +
                                "}";
                            if (actionType === AppDesigner.ActionType.Edit
                            ) customUrl += id && id != null ? "&id={" + id + "}" : "";
                            window.open(customUrl,
                                Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(id) ? "_blank" : id,
                                this.WindowProperties)
                        };
                        LegacyDesignerService.$inject = [
                            Designers.Common.Constants.ServiceNames.UrlHelperService, "sessionInfo"
                        ];
                        return LegacyDesignerService
                    }();
                DataServices.LegacyDesignerService = LegacyDesignerService;
                AppDesigner.AppDesignerModule.service("mscrmLegacyDesignerService", LegacyDesignerService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var DataServices;
            (function(DataServices) {
                "use strict";
                var CommonModel = Mscrm.Designers.Common.Models,
                    ServiceNames = Designers.Common.Constants.ServiceNames,
                    Tracing = Mscrm.Designers.Common.Tracing,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    TraceItems = AppDesigner.AppDesignerTraceItems,
                    MetadataService = function() {
                        function MetadataService($http,
                            urlHelperService,
                            perfService,
                            appDesignerPerfKpisService,
                            pageLoadService,
                            $q,
                            traceUtility,
                            notificationService) {
                            this.$http = $http;
                            this.urlHelperService = urlHelperService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.pageLoadService = pageLoadService;
                            this.$q = $q;
                            this.traceUtility = traceUtility;
                            this.notificationService = notificationService;
                            this
                                .businessProcessParameters =
                                "workflows?$select=name,description,businessprocesstype&$filter=type eq 1 and category eq 4 and businessprocesstype eq 0";
                            this.dashboardsParameters = "systemforms/" +
                                Designers.Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                "?$select=name,description,formid,objecttypecode&$filter=(type eq 0)";
                            this.sitemapParameters = "sitemaps/" +
                                Designers.Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                "?$select=sitemapidunique&$filter=(isappaware eq false)";
                            this.formParameters = "systemforms/" +
                                Designers.Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                "?$select=name,description,type&$filter=" +
                                this.getFormTypeFilterString() +
                                " and (objecttypecode eq '" +
                                MetadataService.ENTITY_PLACE_HOLDER +
                                "')";
                            this.viewParameters = "savedqueries/" +
                                Designers.Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                "?$select=name,description,returnedtypecode,querytype&$filter=(returnedtypecode eq '" +
                                MetadataService.ENTITY_PLACE_HOLDER +
                                "') and " +
                                this.getViewTypeFilterString();
                            this.chartParameters = "savedqueryvisualizations/" +
                                Designers.Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                "?$select=name,description,primaryentitytypecode&$filter=(primaryentitytypecode eq '" +
                                MetadataService.ENTITY_PLACE_HOLDER +
                                "')";
                            this.imageWebResourceProperties = "webresourceset/" +
                                Designers.Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                "?$select=webresourceid,name,displayname&$orderby=displayname&$filter=(webresourcetype eq 5 or webresourcetype eq 6 or webresourcetype eq 7 or webresourcetype eq 10) and ishidden/Value eq false";
                            this.imageWebResourceList = null;
                            this.componentInformationByComponentId = new Dictionary;
                            this.$http.defaults.headers.common = { "odata.cacheselectexpandnode": "false" }
                        }

                        Object.defineProperty(MetadataService.prototype,
                            "ComponentInformationByComponentId",
                            {
                                "get": function() { return this.componentInformationByComponentId },
                                enumerable: true,
                                configurable: true
                            });
                        MetadataService.prototype.getFormTypeFilterString = function() {
                            var filter = "(",
                                supportedFormsList = Mscrm.Designers.AppDesigner.SupportedForms.SupportedFormsList;
                            filter += "type eq " + supportedFormsList[0];
                            for (var i = 1;
                                i < supportedFormsList.length;
                                i++
                            ) filter += "or type eq " + supportedFormsList[i];
                            filter += ")";
                            return filter
                        };
                        MetadataService.prototype.getViewTypeFilterString = function() {
                            var filter = "(",
                                supportedViewsList = Mscrm.Designers.AppDesigner.SupportedViews.SupportedViewsList;
                            filter += "querytype eq " + supportedViewsList[0];
                            for (var i = 1;
                                i < supportedViewsList.length;
                                i++
                            ) filter += "or querytype eq " + supportedViewsList[i];
                            filter += ")";
                            return filter
                        };
                        MetadataService.prototype
                            .getMetadataForArtifact = function(componentType, entityName, entityId) {
                                switch (componentType) {
                                case CommonModel.ComponentTypeName.SITEMAP:
                                    return this.getAllSitemaps();
                                case CommonModel.ComponentTypeName.BUSINESS_PROCESS:
                                    return this.getAllBusinessProcesses();
                                case CommonModel.ComponentTypeName.DASHBOARD:
                                    return this.getAllDashboards();
                                case CommonModel.ComponentTypeName.FORM:
                                    return this.getAllFormsForEntity(entityName, entityId);
                                case CommonModel.ComponentTypeName.VIEW:
                                    return this.getAllViewsForEntity(entityName, entityId);
                                case CommonModel.ComponentTypeName.CHART:
                                    return this.getAllChartsForEntity(entityName, entityId)
                                }
                            };
                        MetadataService
                            .populateEmptyDescription = function(value) {
                                if (Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(value
                                        .description))
                                    value.description = Designers.Common.Utility.StringUtilities.EmptyString
                            };
                        MetadataService.prototype.getAllBusinessProcesses = function() {
                            var url = this.urlHelperService.ODataEndPointUrl + this.businessProcessParameters,
                                result = this.$http.get(encodeURI(url)).then(function(response) {
                                        this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                            encodeURI(url),
                                            new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                        var values = response.data.value;
                                        for (var index in values) {
                                            values[index].id = values[index].workflowid;
                                            values[index].displayName = values[index].name;
                                            values[index].status = false;
                                            MetadataService.populateEmptyDescription(values[index])
                                        }
                                        this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                            TraceItems.BusinessProcesses,
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData(AppDesigner.EventStatus.Success +
                                                ": Get all business process successful"));
                                        this.traceUtility.Scenario = "";
                                        return values
                                    }.bind(this),
                                    function(httpError) {
                                        return this
                                            .TraceAndGetRejectionPromise(httpError,
                                                TraceItems.BusinessProcesses,
                                                "all business process")
                                    }.bind(this));
                            return result
                        };
                        MetadataService.prototype.getAllDashboards = function() {
                            var url = this.urlHelperService.ODataEndPointUrl + this.dashboardsParameters,
                                result = this.$http.get(encodeURI(url)).then(function(response) {
                                        this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                            encodeURI(url),
                                            new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                        var values = response.data.value;
                                        for (var index in values) {
                                            values[index].id = values[index].formid;
                                            values[index].displayName = values[index].name;
                                            values[index].status = false;
                                            MetadataService.populateEmptyDescription(values[index])
                                        }
                                        this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                            TraceItems.AllDashboards,
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData(AppDesigner.EventStatus.Success +
                                                ": Get all dashboards successful"));
                                        this.traceUtility.Scenario = "";
                                        return values
                                    }.bind(this),
                                    function(httpError) {
                                        return this
                                            .TraceAndGetRejectionPromise(httpError,
                                                TraceItems.AllDashboards,
                                                "all dashboards process")
                                    }.bind(this));
                            return result
                        };
                        MetadataService.prototype.getAllSitemaps = function() {
                            var url = this.urlHelperService.ODataEndPointUrl + this.sitemapParameters,
                                result = this.$http.get(encodeURI(url)).then(function(response) {
                                        this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                            encodeURI(url),
                                            new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                        var values = response.data.value;
                                        for (var index in values) {
                                            values[index].displayName = "Sitemap (Default)";
                                            values[index].id = values[index].sitemapid;
                                            values[index].status = false
                                        }
                                        this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                            TraceItems.AllSitemaps,
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData(AppDesigner.EventStatus.Success +
                                                ": Get all sitemaps successful"));
                                        this.traceUtility.Scenario = "";
                                        return values
                                    }.bind(this),
                                    function(httpError) {
                                        return this
                                            .TraceAndGetRejectionPromise(httpError,
                                                TraceItems.AllSitemaps,
                                                "all sitemaps")
                                    }.bind(this));
                            return result
                        };
                        MetadataService.prototype.getAllFormsForEntity = function(entityName, entityId) {
                            var entityFormParameterString = this.formParameters
                                    .replace(MetadataService.ENTITY_PLACE_HOLDER, entityName),
                                url = this.urlHelperService.ODataEndPointUrl + entityFormParameterString,
                                result = this.$http.get(encodeURI(url)).then(function(response) {
                                        this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                            encodeURI(url),
                                            new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                        var values = response.data.value;
                                        for (var index in values) {
                                            values[index].id = values[index].formid;
                                            values[index].displayName = values[index].name;
                                            values[index].formType = values[index].type;
                                            values[index].status = false;
                                            !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(entityId) &&
                                                this.componentInformationByComponentId
                                                .add(values[index].id, [entityId, values[index].displayName]);
                                            MetadataService.populateEmptyDescription(values[index])
                                        }
                                        this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                            TraceItems.AllFormsForEntity,
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData(AppDesigner.EventStatus.Success +
                                                ": Get all forms for entity successful"));
                                        this.traceUtility.Scenario = "";
                                        return values
                                    }.bind(this),
                                    function(httpError) {
                                        return this
                                            .TraceAndGetRejectionPromise(httpError,
                                                TraceItems.AllFormsForEntity,
                                                "all forms for entity")
                                    }.bind(this));
                            return result
                        };
                        MetadataService.prototype.getAllViewsForEntity = function(entityName, entityId) {
                            var entityViewParameterString = this.viewParameters
                                    .replace(MetadataService.ENTITY_PLACE_HOLDER, entityName),
                                url = this.urlHelperService.ODataEndPointUrl + entityViewParameterString,
                                result = this.$http.get(encodeURI(url)).then(function(response) {
                                        this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                            encodeURI(url),
                                            new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                        var values = response.data.value;
                                        for (var index in values) {
                                            values[index].id = values[index].savedqueryid;
                                            values[index].displayName = values[index].name;
                                            values[index].formType = values[index].querytype;
                                            values[index].status = false;
                                            !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(entityId) &&
                                                this.componentInformationByComponentId
                                                .add(values[index].id, [entityId, values[index].displayName]);
                                            MetadataService.populateEmptyDescription(values[index])
                                        }
                                        this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                            TraceItems.AllViewsForEntity,
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData(AppDesigner.EventStatus.Success +
                                                ": Get all views for entity successful"));
                                        this.traceUtility.Scenario = "";
                                        return values
                                    }.bind(this),
                                    function(httpError) {
                                        return this
                                            .TraceAndGetRejectionPromise(httpError,
                                                TraceItems.AllViewsForEntity,
                                                "all views for entity")
                                    }.bind(this));
                            return result
                        };
                        MetadataService.prototype.getAllChartsForEntity = function(entityName, entityId) {
                            var entityChartParameterString = this.chartParameters
                                    .replace(MetadataService.ENTITY_PLACE_HOLDER, entityName),
                                url = this.urlHelperService.ODataEndPointUrl + entityChartParameterString,
                                result = this.$http.get(encodeURI(url)).then(function(response) {
                                        this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                            encodeURI(url),
                                            new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                        var values = response.data.value;
                                        for (var index in values) {
                                            values[index].id = values[index].savedqueryvisualizationid;
                                            values[index].displayName = values[index].name;
                                            values[index].status = false;
                                            !Designers.Common.Utility.StringUtilities.IsNullOrEmpty(entityId) &&
                                                this.componentInformationByComponentId
                                                .add(values[index].id, [entityId, values[index].displayName]);
                                            MetadataService.populateEmptyDescription(values[index])
                                        }
                                        this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                            TraceItems.AllChartsForEntity,
                                            new Mscrm.Designers.Common.Tracing
                                            .StringTraceData(AppDesigner.EventStatus.Success +
                                                ": Get all charts for entity successful"));
                                        this.traceUtility.Scenario = "";
                                        return values
                                    }.bind(this),
                                    function(httpError) {
                                        return this
                                            .TraceAndGetRejectionPromise(httpError,
                                                TraceItems.AllChartsForEntity,
                                                "all charts for entity")
                                    }.bind(this));
                            return result
                        };
                        MetadataService.prototype.GetImageWebResource = function() {
                            var _this = this, webResourceDeferredPromise = this.$q.defer();
                            if (this.imageWebResourceList != null) {
                                webResourceDeferredPromise.resolve();
                                return webResourceDeferredPromise.promise
                            }
                            this.GetImageWebResourcesUtil().then(function(response) {
                                    var values = response.data.value;
                                    for (var index in values)
                                        values[index].fullpath = _this.urlHelperService.ClientUrl +
                                            "/WebResources/" +
                                            values[index].name;
                                    _this.imageWebResourceList = values;
                                    _this.pageLoadService.imageResourcesLoaded = true;
                                    webResourceDeferredPromise.resolve();
                                    _this.perfService
                                        .checkForFullLoad(_this.pageLoadService.getConditionForCurrentState(),
                                            _this.appDesignerPerfKpisService
                                            .getPerfKpiByName(AppDesigner.Services.KpiNames.fullLoadAppDesigner))
                                },
                                function(reason) { webResourceDeferredPromise.reject(reason) });
                            return webResourceDeferredPromise.promise
                        };
                        MetadataService.prototype.getWebResourceFromWebResourceList = function(webResourceId) {
                            var webResourceList = this.imageWebResourceList
                                .filter(function(value, index, array) { return value.webresourceid == webResourceId });
                            if (webResourceList.length > 0) return webResourceList[0];
                            return this.imageWebResourceList[0]
                        };
                        MetadataService.prototype.GetImageWebResourcesUtil = function() {
                            var url = this.urlHelperService.ODataEndPointUrl + this.imageWebResourceProperties,
                                result = this.$http.get(encodeURI(url));
                            result.then(function(response) {
                                    this.traceUtility.LogVerbose(Tracing.TraceComponent.AppDesigner,
                                        encodeURI(url),
                                        new Mscrm.Designers.Common.Tracing.StringTraceData(response.data));
                                    this.traceUtility.LogInfo(Tracing.TraceComponent.AppDesigner,
                                        TraceItems.ImageWebResourcesUtil,
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(AppDesigner.EventStatus.Success +
                                            ": Get image web resource util successful"));
                                    this.traceUtility.Scenario = ""
                                }.bind(this),
                                function(httpError) {
                                    this.traceUtility.LogError(Tracing.TraceComponent.AppDesigner,
                                        TraceItems.ImageWebResourcesUtil,
                                        new Mscrm.Designers.Common.Tracing
                                        .StringTraceData(AppDesigner.EventStatus.Fail +
                                            ": Failed to get image web resource util"));
                                    this.traceUtility.Scenario = ""
                                }.bind(this));
                            return result
                        };
                        MetadataService.prototype
                            .TraceAndGetRejectionPromise = function(httpError, traceLocation, customMessage) {
                                var error = "";
                                if (httpError) error = JSON.stringify(httpError);
                                customMessage = AppDesigner.EventStatus.Fail + ": Failed to get " + customMessage;
                                var traceData = new Designers.Common.Tracing
                                    .StringTraceData(customMessage + " Error Object: " + error);
                                this.traceUtility.LogError(Tracing.TraceComponent
                                    .AppDesigner,
                                    traceLocation,
                                    traceData);
                                this.traceUtility.Scenario = "";
                                return this.$q.reject(error)
                            };
                        MetadataService.ENTITY_PLACE_HOLDER = "%Entity%";
                        MetadataService.$inject = [
                            ServiceNames.HttpService, ServiceNames.UrlHelperService, ServiceNames.PerfService,
                            AppDesigner
                            .AppDesignerServiceNames.AppDesignerPerfKpisService, AppDesigner.AppDesignerServiceNames
                            .PageLoadService, "$q", ServiceNames.TraceUtilityService, ServiceNames
                            .NotificationBarService
                        ];
                        return MetadataService
                    }();
                DataServices.MetadataService = MetadataService;
                AppDesigner.AppDesignerModule.service("mscrmMetadataService", MetadataService)
            })(DataServices = AppDesigner.DataServices || (AppDesigner.DataServices = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Services;
            (function(Services) {
                "use strict";
                var AppDesignerPerfKpisService = function() {
                    function AppDesignerPerfKpisService(perfService) {
                        this.perfService = perfService;
                        this.kpis = {};
                        this.kpis[KpiNames.globalSave] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.globalSave,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                4e3);
                        this.kpis[KpiNames.globalValidate] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.globalValidate,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                4e3);
                        this.kpis[KpiNames.globalPublish] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.globalPublish,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                6e4);
                        this.kpis[KpiNames.createNewSave] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.createNewSave,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                2e3);
                        this.kpis[KpiNames.updateAppInfo] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.updateAppInfo,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                2e3);
                        this.kpis[KpiNames.addComponent] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.addComponent,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                2e3);
                        this.kpis[KpiNames.removeComponent] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.removeComponent,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                2e3);
                        this.kpis[KpiNames.loadComponentList] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.loadComponentList,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                2e3);
                        this.kpis[KpiNames.fullLoadAppDesigner] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.fullLoadAppDesigner,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                5e3);
                        this.kpis[KpiNames.sitemapLaunchFromAppCanvas] = this.perfService
                            .createPerfKpi(AppDesignerPerfKpisService.appDesignerComponent,
                                KpiNames.sitemapLaunchFromAppCanvas,
                                Designers.Perf.Common.PerfKpiTypes.scenario,
                                1e3)
                    }

                    AppDesignerPerfKpisService.prototype.getPerfKpiByName = function(name) { return this.kpis[name] };
                    AppDesignerPerfKpisService.$inject = ["mscrmPerfService"];
                    AppDesignerPerfKpisService.appDesignerComponent = "App Designer";
                    return AppDesignerPerfKpisService
                }();
                Services.AppDesignerPerfKpisService = AppDesignerPerfKpisService;
                var KpiNames = function() {
                    function KpiNames() {}

                    Object.defineProperty(KpiNames,
                        "globalSave",
                        { "get": function() { return "globalSave" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "globalValidate",
                        { "get": function() { return "globalValidate" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "globalPublish",
                        { "get": function() { return "globalPublish" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "createNewSave",
                        { "get": function() { return "createNewSave" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "updateAppInfo",
                        { "get": function() { return "updateAppInfo" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "addComponent",
                        { "get": function() { return "addComponent" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "removeComponent",
                        { "get": function() { return "removeComponent" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "loadComponentList",
                        { "get": function() { return "loadComponentList" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "fullLoadAppDesigner",
                        { "get": function() { return "fullLoadAppDesigner" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiNames,
                        "sitemapLaunchFromAppCanvas",
                        {
                            "get": function() { return "sitemapLaunchFromAppCanvas" },
                            enumerable: true,
                            configurable: true
                        });
                    return KpiNames
                }();
                Services.KpiNames = KpiNames;
                var KpiDisplayName = function() {
                    function KpiDisplayName() {}

                    Object.defineProperty(KpiDisplayName,
                        "fullLoadAppDesignerCanvasPage",
                        { "get": function() { return "canvasPageFullLoad" }, enumerable: true, configurable: true });
                    Object.defineProperty(KpiDisplayName,
                        "fullLoadAppDesignerCreateNewPage",
                        { "get": function() { return "createNewPageFullLoad" }, enumerable: true, configurable: true });
                    return KpiDisplayName
                }();
                Services.KpiDisplayName = KpiDisplayName;
                AppDesigner.AppDesignerModule.service("mscrmAppDesignerPerfKpisService", AppDesignerPerfKpisService)
            })(Services = AppDesigner.Services || (AppDesigner.Services = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppWizard;
        (function(AppWizard) {
            "use strict";
            AppWizard.AppWizardModule = angular.module("mscrmAppWizard", ["mscrmAppDesigner"])
        })(AppWizard = Designers.AppWizard || (Designers.AppWizard = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function AppInfoForm() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/AppWizard/Templates/AppInfoForm.html?v=8200000749",
                        controller: "mscrmAppWizardController",
                        controllerAs: "wizardController"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmAppInfoForm", AppInfoForm)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function TilePreviewDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/AppWizard/Templates/TilePreview.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmTilePreview", TilePreviewDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function WizardButtonstrip() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/AppWizard/Templates/ButtonStrip.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmWizardButtonstrip", WizardButtonstrip)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function AppInfoPropertiesButtons() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl:
                            "/Designers/AppDesigner/AppWizard/Templates/AppInfoPropertiesButtons.html?v=8200000749"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmPropertiesButtons", AppInfoPropertiesButtons)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var Utility = Mscrm.Designers.Common.Utility,
                    ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    DesignerTelemetry = Mscrm.Designers.AppDesigner.Telemetry,
                    AppWizardController = function(_super) {
                        __extends(AppWizardController, _super);

                        function AppWizardController(scope,
                            publisherPrefix,
                            appInfoManipulationService,
                            metadataService,
                            state,
                            appInterfaceService,
                            perfService,
                            appDesignerPerfKpisService,
                            urlHelperService,
                            traceUtility,
                            notificationService,
                            dirtyCheckService,
                            localizationService,
                            stringCleansingService,
                            telemetryService,
                            appContextManipulationService,
                            pageLoadService,
                            modalDialogService,
                            errorUtilityService,
                            cacheUtilityService) {
                            var _this = this;
                            _super.call(this, appContextManipulationService, cacheUtilityService);
                            this.scope = scope;
                            this.publisherPrefix = publisherPrefix;
                            this.appInfoManipulationService = appInfoManipulationService;
                            this.metadataService = metadataService;
                            this.state = state;
                            this.appInterfaceService = appInterfaceService;
                            this.perfService = perfService;
                            this.appDesignerPerfKpisService = appDesignerPerfKpisService;
                            this.urlHelperService = urlHelperService;
                            this.traceUtility = traceUtility;
                            this.notificationService = notificationService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.localizationService = localizationService;
                            this.stringCleansingService = stringCleansingService;
                            this.telemetryService = telemetryService;
                            this.appContextManipulationService = appContextManipulationService;
                            this.pageLoadService = pageLoadService;
                            this.modalDialogService = modalDialogService;
                            this.errorUtilityService = errorUtilityService;
                            this.cacheUtilityService = cacheUtilityService;
                            this.MaxUrlSuffixLength = 20;
                            this.MaxUniqueNameLength = 40;
                            this.pageLoadService.getCurrentAppState() ===
                                Mscrm.Designers.Common.Constants.AppUrlStateNames.createNewApp &&
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.fullLoadAppDesigner))
                                .start(AppDesigner.Services.KpiDisplayName.fullLoadAppDesignerCreateNewPage);
                            this.isTitleValid = true;
                            this.isUniqueNameValid = true;
                            this.isUniqueNameModified = false;
                            this.isAppUrlModified = false;
                            this.isCallInProgress = false;
                            this.AddFieldValidators();
                            this.clientUrl = this.urlHelperService.ClientUrl + this.urlHelperService.AppsSubPath;
                            this.defaultThumbnail = null;
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.GetImageWebResourcesUtil;
                            this.thumbnailPromise = this.metadataService.GetImageWebResource();
                            this.thumbnailPromise.then(function() {
                                    _this.AppContext.appInfo.thumbnailContext.thumbnailListAvailable = true;
                                    if (_this.AppContext
                                        .isAppLoadComplete)
                                        _this.AppContext.appInfo.webResourceItem = _this.metadataService
                                            .getWebResourceFromWebResourceList(_this.AppContext.appInfo
                                                .selectedWebResourceId);
                                    else _this.AppContext.appInfo.webResourceItem = _this.DefaultThumbnail
                                },
                                function(httpError) {});
                            this.AppContext.appInfo.publisherPrefix = this.publisherPrefix + "_";
                            this.appInterfaceService.RemoveSiteMapDependencies();
                            this.scope.$watch("wizardController.scope.createAppForm.$dirty",
                                this.HandleCreateAppFormChange.bind(this));
                            this.SetupUseDefaultThumbnail()
                        }

                        Object.defineProperty(AppWizardController.prototype,
                            "MetadataService",
                            {
                                "get": function() { return this.metadataService },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        Object.defineProperty(AppWizardController.prototype,
                            "ThumbnailContext",
                            {
                                "get": function() { return this.AppContext.appInfo.thumbnailContext },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(AppWizardController.prototype,
                            "AppInfo",
                            {
                                "get": function() { return this.AppContext.appInfo },
                                enumerable: true,
                                configurable: true
                            });
                        AppWizardController.prototype
                            .HandleCreateAppFormChange = function(newValue, oldValue) {
                                this.dirtyCheckService.setDirty(Designers.Common.Constants.DirtyCheckModelNames
                                    .AppCreateForm,
                                    newValue)
                            };
                        Object.defineProperty(AppWizardController.prototype,
                            "NewApp",
                            {
                                "get": function() {
                                    return Designers.Common.Utility.StringUtilities
                                        .IsNullOrEmpty(this.AppContext.appInfo.appId)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(AppWizardController.prototype,
                            "IsAppWizardInDirtyState",
                            {
                                "get": function() {
                                    return this.dirtyCheckService
                                        .getDirty(Designers.Common.Constants.DirtyCheckModelNames.AppCreateForm)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(AppWizardController.prototype,
                            "ShouldEnableUpdateInWizard",
                            {
                                "get": function() {
                                    if (this
                                        .IsAppWizardInDirtyState
                                    )
                                        return !Utility.StringUtilities.IsNullOrEmpty(this.AppContext.appInfo.title) &&
                                            !Utility.StringUtilities.IsNullOrEmpty(this.AppContext.appInfo.uniqueName);
                                    return false
                                },
                                enumerable: true,
                                configurable: true
                            });
                        AppWizardController.prototype.AddFieldValidators = function() {
                            this.scope.$watch("wizardController.AppInfo.title", this.HandleTitleChange.bind(this));
                            this.NewApp &&
                                this.scope.$watch("wizardController.AppInfo.uniqueName",
                                    this.HandleUniqueNameChange.bind(this))
                        };
                        Object.defineProperty(AppWizardController.prototype,
                            "UniqueName",
                            {
                                "set": function(value) {
                                    if (!this.isUniqueNameModified) this.AppContext.appInfo.uniqueName = value
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(AppWizardController.prototype,
                            "AppUrl",
                            {
                                "set": function(value) {
                                    if (!this.isAppUrlModified) this.AppContext.appInfo.appUrl = value
                                },
                                enumerable: true,
                                configurable: true
                            });
                        AppWizardController.prototype.HandleTitleChange = function(newValue, oldValue) {
                            if (newValue != oldValue)
                                if (Designers.Common.Utility.StringUtilities.IsNullOrEmpty(newValue)) {
                                    this.isTitleValid = false;
                                    if (this.NewApp) {
                                        this.AppUrl = Designers.Common.Utility.StringUtilities.EmptyString;
                                        this.UniqueName = Designers.Common.Utility.StringUtilities.EmptyString
                                    }
                                } else {
                                    this.isTitleValid = true;
                                    if (this.NewApp) {
                                        var cleansedString = this.stringCleansingService
                                            .CleanseString(this.AppContext.appInfo.title,
                                                [Utility.CharacterSet.WhiteSpace, Utility.CharacterSet.NonEnglish]);
                                        this.AppUrl = cleansedString.substring(0, this.MaxUrlSuffixLength);
                                        this.UniqueName = cleansedString.substring(0, this.UniqueNameMaxLengthAllowed)
                                    }
                                }
                        };
                        AppWizardController.prototype.HandleUniqueNameChange = function(newValue, oldValue) {
                            if (newValue != oldValue)
                                if (Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(newValue)) this.isUniqueNameValid = false;
                                else {
                                    this.isUniqueNameValid = true;
                                    this.stringCleansingService
                                        .CleanseString(this.AppContext.appInfo.uniqueName,
                                            [Utility.CharacterSet.WhiteSpace, Utility.CharacterSet.NonEnglish])
                                }
                        };
                        AppWizardController.prototype.OnDiscardClick = function(e) {
                            var appObject = angular.copy(this.cacheUtilityService
                                .Get(Designers.Common.Constants.CacheUtilitiesKeys.AppContext).appInfo);
                            jQuery.extend(true, this.AppContext.appInfo, appObject);
                            this.scope.createAppForm.$setPristine();
                            e.target.setAttribute("data-isdisabled", "true")
                        };
                        AppWizardController.prototype
                            .OnTitleBlur = function() {
                                if (Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(this.AppContext.appInfo.title)) this.isTitleValid = false
                            };
                        AppWizardController.prototype
                            .OnUniqueNameBlur = function() {
                                if (Designers.Common.Utility.StringUtilities
                                    .IsNullOrEmpty(this.AppContext.appInfo.uniqueName)) this.isUniqueNameValid = false
                            };
                        AppWizardController.prototype
                            .OnUniqueNameModified = function() { this.isUniqueNameModified = true };
                        AppWizardController.prototype.OnAppUrlModified = function() { this.isAppUrlModified = true };
                        Object.defineProperty(AppWizardController.prototype,
                            "UniqueNameMaxLengthAllowed",
                            {
                                "get": function() {
                                    var uniqueNameMaxLength = this.MaxUniqueNameLength;
                                    if (this.NewApp)
                                        uniqueNameMaxLength = uniqueNameMaxLength -
                                            this.AppContext.appInfo.publisherPrefix.length;
                                    return uniqueNameMaxLength
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(AppWizardController.prototype,
                            "UniqueNameToolTip",
                            {
                                "get": function() {
                                    if (this.NewApp) {
                                        var uniqueNameToolTip = this.localizationService
                                            .getResourceString("AppDesigner.AppCreate.UniqueName.ToolTip");
                                        return Designers.Common.Utility.StringUtilities
                                            .Format(uniqueNameToolTip, [this.AppContext.appInfo.publisherPrefix])
                                    } else return this.localizationService.getResourceString("AppDesigner.UniqueName")
                                },
                                enumerable: true,
                                configurable: true
                            });
                        AppWizardController.prototype.OnApplyClick = function(e) {
                            var _this = this;
                            if (this.isTitleValid && !this.isCallInProgress) {
                                this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.UpdateApp;
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.updateAppInfo)).start();
                                this.isCallInProgress = true;
                                this.notificationService.ClearNotificationText();
                                if (this.AppContext.appInfo.status ==
                                    Mscrm.Designers.AppDesigner.ComponentState
                                    .GetComponentState(Mscrm.Designers.AppDesigner.AppState
                                        .Published))
                                    this.appInterfaceService
                                        .SaveAppComponents(this.AppContext.appInfo,
                                            null,
                                            function(response) { _this.onUpdateSuccess(response) },
                                            function(response) { _this.onUpdateFailure(response) },
                                            true);
                                else
                                    this.appInterfaceService
                                        .UpdateAppInfo(this.AppContext.appInfo,
                                            function(response) { _this.onUpdateSuccess(response) },
                                            function(response) { _this.onUpdateFailure(response) })
                            }
                            e.target.setAttribute("data-isdisabled", "true")
                        };
                        AppWizardController.prototype
                            .triggerScopeApplyPhase = function() { !this.scope.$$phase && this.scope.$apply() };
                        AppWizardController.prototype.onUpdateSuccess = function(response) {
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.updateAppInfo)).stop();
                            this.isCallInProgress = false;
                            this.appInfoManipulationService.PostSuccessfulAppUpdate();
                            this.UpdateLastSavedAppContext();
                            this.scope.createAppForm.$setPristine();
                            !this.scope.$$phase && this.scope.$apply();
                            this.traceUtility.LogInfo(Designers.Common.Tracing.TraceComponent.AppWizard,
                                "UpdateAppSuccess",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus
                                    .Success +
                                    ": Successfully update Info for the App."));
                            this.traceUtility.Scenario = ""
                        };
                        AppWizardController.prototype.onUpdateFailure = function(error) {
                            this.perfService.clearStopwatchByName(AppDesigner.Services.KpiNames.updateAppInfo);
                            this.isCallInProgress = false;
                            this.notificationService
                                .ParseAndDisplayMultipleSOAPErrors(Designers.Common.Constants.DesignerName.AppDesigner,
                                    error,
                                    this.triggerScopeApplyPhase.bind(this));
                            this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.AppWizard,
                                "UpdateAppFailure",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Fail +
                                    ": Failed to update info for the App." +
                                    error.toString()));
                            this.traceUtility.Scenario = ""
                        };
                        AppWizardController.prototype.CancelWizard = function() {
                            if (this.IsAppWizardInDirtyState) {
                                var promise = this.modalDialogService
                                    .open(new Designers.Common.ModalDialog
                                        .ConfirmDialogParams(this.localizationService
                                            .getResourceString("AppDesigner.UnsavedChanges"),
                                            this.localizationService
                                            .getResourceString("AppDesigner.UnsavedChangesMessage"),
                                            this.localizationService.getResourceString("AppDesigner.OK"),
                                            this.localizationService.getResourceString("AppDesigner.Cancel")));
                                promise.then(function(result) { window.close() }.bind(this),
                                    function(result) {}.bind(this))
                            } else window.close()
                        };
                        AppWizardController.prototype.HandleCreateAppEvent = function() {
                            var _this = this;
                            if (this.isTitleValid && !this.isCallInProgress) {
                                this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.CreateApp;
                                this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                    .getPerfKpiByName(AppDesigner.Services.KpiNames.createNewSave)).start();
                                this.isCallInProgress = true;
                                this.notificationService.ClearNotificationText();
                                var appContext = angular.copy(this.AppContext.appInfo);
                                appContext.uniqueName = appContext.publisherPrefix + appContext.uniqueName;
                                this.appInterfaceService.CreateApp(appContext,
                                    this.urlHelperService.SolutionUniqueName,
                                    function(response) {
                                        _this.isCallInProgress = false;
                                        _this.onCreateAppSuccess(response)
                                    },
                                    function(response) {
                                        _this.isCallInProgress = false;
                                        _this.onCreateAppFailure(response)
                                    })
                            }
                        };
                        Object.defineProperty(AppWizardController.prototype,
                            "DefaultThumbnail",
                            {
                                "get": function() {
                                    if (!this.defaultThumbnail) {
                                        var thumbnailList = this.metadataService.imageWebResourceList
                                            .filter(function(value, index, array) {
                                                return value.webresourceid ==
                                                    Designers.Common.Constants.Defaults
                                                    .DefaultAppModuleImageWebResourceId
                                            });
                                        if (thumbnailList.length > 0) this.defaultThumbnail = thumbnailList[0];
                                        else this.defaultThumbnail = this.metadataService.imageWebResourceList[0]
                                    }
                                    return this.defaultThumbnail
                                },
                                enumerable: true,
                                configurable: true
                            });
                        AppWizardController.prototype.SetupUseDefaultThumbnail = function() {
                            var _this = this;
                            this.scope.$watch("wizardController.AppInfo.thumbnailContext.useDefaultThumbnail",
                                function(oldValue, newValue, scope) {
                                    if (_this.AppContext.appInfo.thumbnailContext.useDefaultThumbnail &&
                                        _this.AppContext.appInfo.thumbnailContext
                                        .thumbnailListAvailable
                                    ) _this.AppContext.appInfo.webResourceItem = _this.DefaultThumbnail
                                })
                        };
                        AppWizardController.prototype.onCreateAppSuccess = function(response) {
                            var _this = this;
                            this.perfService.getStopWatch(this.appDesignerPerfKpisService
                                .getPerfKpiByName(AppDesigner.Services.KpiNames.createNewSave)).stop();
                            this.AppContext.appInfo.appId = response;
                            this.AppContext.appInfo.status = Mscrm.Designers.AppDesigner.ComponentState
                                .GetComponentState(Mscrm.Designers.AppDesigner.AppState.Draft);
                            this.AppContext.appInfo.lastModifiedOn = new Date;
                            this.AppContext.isAppLoadComplete = true;
                            this.state.go("AppDesignerCanvas",
                                { appId: this.AppContext.appInfo.appId },
                                { location: "replace" }).then(function() {
                                _this.AppContext.appInfo
                                    .uniqueName = _this.AppContext.appInfo.publisherPrefix +
                                    _this.AppContext.appInfo.uniqueName;
                                _this.UpdateLastSavedAppContext()
                            }.bind(this));
                            this.traceUtility.LogInfo(Designers.Common.Tracing.TraceComponent.AppWizard,
                                "CreateAppSuccess",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Success +
                                    ": Successfully Created App with AppID:" +
                                    this.AppContext.appInfo.appId));
                            this.traceUtility.Scenario = "";
                            var createAppEvent = new DesignerTelemetry
                                .AppCreateEvent(this.AppContext.appInfo.appId, this.urlHelperService.SolutionId);
                            this.telemetryService.AddTelemetryEvent(createAppEvent)
                        };
                        AppWizardController.prototype.onCreateAppFailure = function(error) {
                            this.perfService.clearStopwatchByName(AppDesigner.Services.KpiNames.createNewSave);
                            this.notificationService
                                .ParseAndDisplayMultipleSOAPErrors(Designers.Common.Constants.DesignerName.AppDesigner,
                                    error,
                                    this.triggerScopeApplyPhase.bind(this));
                            this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.AppWizard,
                                "CreateAppFailure",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus
                                    .Fail +
                                    ": Failed to Create App." +
                                    error.toString()));
                            this.traceUtility.Scenario = ""
                        };
                        AppWizardController.$inject = [
                            "$scope", Designers.Common.Constants.InjectedObjectNames.SolutionPublisherIdPrefix,
                            "mscrmAppContextManipulationService", "mscrmMetadataService", "$state",
                            "mscrmAppInterfaceService", "mscrmPerfService", "mscrmAppDesignerPerfKpisService", Designers
                            .Common.Constants.ServiceNames.UrlHelperService, "mscrmTraceUtilityService", Designers
                            .Common
                            .Constants.ServiceNames.NotificationBarService, Designers.Common.Constants.ServiceNames
                            .DirtyCheckService, Designers.Common.Constants.ServiceNames.LocalizationService, Designers
                            .Common.Constants.ServiceNames.StringCleansingService, ServiceNames.TelemetryService,
                            ServiceNames.AppContextManipulationService, AppDesigner.AppDesignerServiceNames
                            .PageLoadService,
                            Designers.Common.Constants.ServiceNames.ModalDialogService, Designers.Common.Constants
                            .ServiceNames.ErrorUtilityService, ServiceNames.CacheUtilityService
                        ];
                        return AppWizardController
                    }(AppDesigner.AppDesignerBase);
                AppDesigner.AppDesignerModule.controller("mscrmAppWizardController", AppWizardController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";
                var KeyCodes = Mscrm.Designers.Common.Constants.KeyCode;

                function RestrictNonAlphaNumericDirective() {
                    var link = function(scope, element, attrs) {
                        element.bind("keypress paste",
                            function(event) {
                                if (event.type == "keypress") {
                                    var keyCode = event.which || event.keyCode;
                                    if (keyCode >= KeyCodes.ZeroKeyCode && keyCode <= KeyCodes.NineKeyCode ||
                                        keyCode >= KeyCodes.AKeyCode && keyCode <= KeyCodes.ZKeyCode ||
                                        keyCode >= KeyCodes.Numpad1KeyCode && keyCode <= KeyCodes.F11KeyCode ||
                                        (keyCode == KeyCodes.BackSpaceKeyCode || keyCode == KeyCodes.TabKeyCode) ||
                                        keyCode == KeyCodes.DelKeyCode && event.key != ".") return true;
                                    else return false
                                }
                                if (event.type == "paste") {
                                    var clipBoardEvent = event.originalEvent,
                                        clipboardData = clipBoardEvent.clipboardData || eval("window.clipboardData");
                                    if (!Designers.Common.Utility.ScriptUtilities.IsNullOrUndefined(clipboardData) &&
                                        clipboardData.getData) {
                                        var inputString = clipboardData.getData("Text");
                                        if (!Designers.Common.Utility.StringUtilities.IsNullOrEmpty(inputString)) {
                                            var outputString = inputString
                                                .match(Designers.Common.Utility.StringUtilities
                                                    .EnglishAndNumericCharacters);
                                            if (!Designers.Common.Utility.ScriptUtilities
                                                .IsNullOrUndefined(outputString) &&
                                                outputString.length > 0) {
                                                element.val(outputString
                                                    .join(Designers.Common.Utility.StringUtilities.EmptyString));
                                                element.trigger("input")
                                            }
                                            event.preventDefault()
                                        }
                                    }
                                }
                            })
                    };
                    return {
                        restrict: Mscrm.Designers.Common.Constants.DirectiveRestrictTypes.AttributeType,
                        link: link
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmRestrictNonAlphaNumeric",
                    RestrictNonAlphaNumericDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    DependencyPaneController = function(_super) {
                        __extends(DependencyPaneController, _super);

                        function DependencyPaneController(scope,
                            appDesignerValidationService,
                            appCtxManipulationSvc,
                            componentSvc,
                            mscrmLocalizationService,
                            traceUtility,
                            notificationService,
                            appInterfaceService,
                            dirtyCheckService) {
                            _super.call(this, appCtxManipulationSvc, null);
                            this.scope = scope;
                            this.appDesignerValidationService = appDesignerValidationService;
                            this.appCtxManipulationSvc = appCtxManipulationSvc;
                            this.componentSvc = componentSvc;
                            this.mscrmLocalizationService = mscrmLocalizationService;
                            this.traceUtility = traceUtility;
                            this.notificationService = notificationService;
                            this.appInterfaceService = appInterfaceService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.scope.collapsedSitemap = true;
                            this.scope.collapsedDashboards = true;
                            this.scope.collapsedEntities = true;
                            this.scope.collapsedProcesses = true
                        }

                        Object.defineProperty(DependencyPaneController.prototype,
                            "GetLatestDependenciesInProgress",
                            {
                                "get": function() { return this.getLatestDependenciesInProgress },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "contextModel",
                            {
                                "get": function() { return this.appCtxManipulationSvc.ContextModel },
                                enumerable: true,
                                configurable: true
                            });
                        DependencyPaneController.prototype.AddDependencies = function(e) {
                            this.appDesignerValidationService.resetAddedDependencies();
                            this.appDesignerValidationService.AddDependencies(AppDesigner.DependencyTree.DashboardTree);
                            this.appDesignerValidationService.AddDependencies(AppDesigner.DependencyTree.BPFTree);
                            this.appDesignerValidationService.AddDependencies(AppDesigner.DependencyTree.EntityTree);
                            this.appDesignerValidationService.AddDependencies(AppDesigner.DependencyTree.SitemapTree);
                            this.appDesignerValidationService.newDependenciesCount = 0;
                            e.target.setAttribute("data-isdisabled", "true")
                        };
                        Object.defineProperty(DependencyPaneController.prototype,
                            "ShouldShowSitemapDependency",
                            {
                                "get": function() {
                                    return this.HasSiteMapDependency ||
                                        this.appDesignerValidationService.LastAddedDependencies
                                        .getValue(AppDesigner.DependencyTree.SitemapTree)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "ShouldShowDashboardDependency",
                            {
                                "get": function() {
                                    return this.HasDashboardDependency ||
                                        this.appDesignerValidationService.LastAddedDependencies
                                        .getValue(AppDesigner.DependencyTree.DashboardTree)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "ShouldShowEntityDependency",
                            {
                                "get": function() {
                                    return this.HasEntityDependency ||
                                        this.appDesignerValidationService.LastAddedDependencies
                                        .getValue(AppDesigner.DependencyTree.EntityTree)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "ShouldShowBPFDependency",
                            {
                                "get": function() {
                                    return this.HasBPFDependency ||
                                        this.appDesignerValidationService.LastAddedDependencies
                                        .getValue(AppDesigner.DependencyTree.BPFTree)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "HasSiteMapDependency",
                            {
                                "get": function() {
                                    return this.appDesignerValidationService.GetSitemapDependencyCount() > 0
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "HasDashboardDependency",
                            {
                                "get": function() {
                                    return this.appDesignerValidationService.GetDashboardDependencyCount() > 0
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "HasBPFDependency",
                            {
                                "get": function() {
                                    return this.appDesignerValidationService.GetBpfDependencyCount() > 0
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "HasEntityDependency",
                            {
                                "get": function() {
                                    return this.appDesignerValidationService.GetEntityDependencyCount() > 0
                                },
                                enumerable: true,
                                configurable: true
                            });
                        DependencyPaneController.prototype.togglesSitemapCollapsePanel = function(e) {
                            this.scope.collapsedSitemap = !this.scope.collapsedSitemap;
                            AccessibilityUtility.SetAriaExpandedValue(!this.scope.collapsedSitemap, e.target)
                        };
                        DependencyPaneController.prototype.toggleDashboardCollapsePanel = function(e) {
                            this.scope.collapsedDashboards = !this.scope.collapsedDashboards;
                            AccessibilityUtility.SetAriaExpandedValue(!this.scope.collapsedDashboards, e.target)
                        };
                        DependencyPaneController.prototype.toggleEntityCollapsePanel = function(e) {
                            this.scope.collapsedEntities = !this.scope.collapsedEntities;
                            AccessibilityUtility.SetAriaExpandedValue(!this.scope.collapsedEntities, e.target)
                        };
                        DependencyPaneController.prototype.toggleBPFCollapsePanel = function(e) {
                            this.scope.collapsedProcesses = !this.scope.collapsedProcesses;
                            AccessibilityUtility.SetAriaExpandedValue(!this.scope.collapsedProcesses, e.target)
                        };
                        DependencyPaneController.prototype.IgnoreDependencies = function() {
                            this.appCtxManipulationSvc.isDependencyPaneHidden = true;
                            this.appCtxManipulationSvc.ContextModel.selectedTab = AppDesigner.AppDesignerTab.Components
                        };
                        Object.defineProperty(DependencyPaneController.prototype,
                            "GetAddDependenciesDisability",
                            {
                                "get": function() {
                                    return this.appDesignerValidationService
                                        .newDependenciesCount <=
                                        0
                                },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(DependencyPaneController.prototype,
                            "IsAppDesignerInDirtyState",
                            {
                                "get": function() {
                                    return this.dirtyCheckService
                                        .IsDesignerInDirtyState(Designers.Common.Constants.DesignerName.AppDesigner)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        DependencyPaneController.prototype.Validate = function() {
                            this.traceUtility.Scenario = AppDesigner.AppDesignerScenarios.GetLatestDependencies;
                            this.getLatestDependenciesInProgress = true;
                            this.appInterfaceService
                                .ValidateApp(new Designers.Common.Guid(this.AppContext.appInfo.appId),
                                    this.onValidateAppSuccess.bind(this),
                                    this.onValidateAppFailure.bind(this))
                        };
                        DependencyPaneController.prototype.onValidateAppSuccess = function(response) {
                            this.notificationService.ClearNotificationText();
                            this.appDesignerValidationService.onValidateAppSuccess(response);
                            this.getLatestDependenciesInProgress = false;
                            if (this.appContextManipulationService
                                .isDependencyPaneHidden ==
                                false) this.scope.contextModel.selectedTab = AppDesigner.AppDesignerTab.Dependencies;
                            else this.scope.contextModel.selectedTab = AppDesigner.AppDesignerTab.Components;
                            this.triggerScopeApplyPhase();
                            this.traceUtility.LogVerbose(Designers.Common.Tracing.TraceComponent.AppDesigner,
                                AppDesigner.AppDesignerScenarios.GetLatestDependencies,
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus
                                    .Success +
                                    ": GetLatestDependencies Successfull"));
                            this.traceUtility.Scenario = ""
                        };
                        DependencyPaneController.prototype.onValidateAppFailure = function(error) {
                            this.notificationService.ClearNotificationText();
                            this.appDesignerValidationService.onValidateAppFailure(error);
                            this.getLatestDependenciesInProgress = false;
                            this.triggerScopeApplyPhase();
                            this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.AppDesigner,
                                AppDesigner.AppDesignerScenarios.GetLatestDependencies,
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(AppDesigner.EventStatus.Fail +
                                    ": GetLatestDependencies Failed" +
                                    error.toString()));
                            this.traceUtility.Scenario = ""
                        };
                        DependencyPaneController.prototype
                            .triggerScopeApplyPhase = function() { !this.scope.$$phase && this.scope.$apply() };
                        DependencyPaneController.$inject = [
                            "$scope", AppDesigner.AppDesignerServiceNames.ValidationService,
                            "mscrmAppContextManipulationService", "mscrmComponentService", "mscrmLocalizationService",
                            ServiceNames.TraceUtilityService, ServiceNames.NotificationBarService, ServiceNames
                            .AppInterfaceService, ServiceNames.DirtyCheckService
                        ];
                        return DependencyPaneController
                    }(AppDesigner.AppDesignerBase);
                Controllers.DependencyPaneController = DependencyPaneController;
                AppDesigner.AppDesignerModule.controller("mscrmDependencyPaneController", DependencyPaneController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Controllers;
            (function(Controllers) {
                "use strict";
                var AccessibilityUtility = Mscrm.Designers.Framework.Common.AccessibilityUtility,
                    Utilities = Mscrm.Designers.Common.Utility,
                    DependencyComponentCollapseStateMap = function() {
                        function DependencyComponentCollapseStateMap() {}

                        return DependencyComponentCollapseStateMap
                    }();
                Controllers.DependencyComponentCollapseStateMap = DependencyComponentCollapseStateMap;
                var TreeControlController = function() {
                    function TreeControlController(scope, appDesignerValidationService, localizationService) {
                        this.scope = scope;
                        this.appDesignerValidationService = appDesignerValidationService;
                        this.localizationService = localizationService;
                        this.scope.validationService = this.appDesignerValidationService;
                        this.showDependentComponent = false;
                        this.dependencyComponentCollapseStateList = []
                    }

                    TreeControlController.prototype.ToggleShowDependentComponent = function(e, dependencyItem) {
                        this.showDependentComponent = !this.showDependentComponent;
                        var itemMap = this.getToggleStateMapForDependencyItem(dependencyItem);
                        if (itemMap != null) itemMap.isExpanded = !itemMap.isExpanded;
                        else {
                            var dependencyStateMap = new DependencyComponentCollapseStateMap;
                            dependencyStateMap.dependencyItem = dependencyItem;
                            dependencyStateMap.isExpanded = true;
                            this.dependencyComponentCollapseStateList.push(dependencyStateMap)
                        }
                        AccessibilityUtility.SetAriaExpandedValue(this.showDependentComponent, e.target)
                    };
                    TreeControlController.prototype.GetLocalizedComponentType = function(componentTypeIdentifier) {
                        if (componentTypeIdentifier === Designers.Common.Models.ComponentTypeName.ENTITY
                        ) return this.localizationService.getResourceString("AppDesigner.AddEntity");
                        return this.localizationService
                            .getResourceString("AppDesigner.Artifact." + componentTypeIdentifier)
                    };
                    TreeControlController.prototype.ShouldShowDependentComponent = function(dependencyItem) {
                        var itemMap = this.getToggleStateMapForDependencyItem(dependencyItem);
                        if (itemMap != null) return itemMap.isExpanded;
                        else return false
                    };
                    TreeControlController.prototype.ToggleAll = function(items, isAllSelected) {
                        for (var _i = 0; _i < items.length; _i++) {
                            var item = items[_i];
                            !item.isSelected && isAllSelected && this.UpdateDependencyCount(true);
                            item.isSelected && !isAllSelected && this.UpdateDependencyCount(false);
                            item.isSelected = isAllSelected
                        }
                    };
                    TreeControlController.prototype.ShouldDisableSelectAll = function(items) {
                        for (var _i = 0; _i < items.length; _i++) {
                            var item = items[_i];
                            if (Utilities.ScriptUtilities.IsNullOrUndefined(item.isAddedToAppContext) ||
                                item.isAddedToAppContext == false) return false
                        }
                        return true
                    };
                    TreeControlController.prototype.IsSelectAllEnabled = function(items) {
                        for (var _i = 0; _i < items.length; _i++) {
                            var item = items[_i];
                            if (!item.isSelected) return false
                        }
                        return true
                    };
                    TreeControlController.prototype.UpdateDependencyCount = function(incrementFlag) {
                        if (incrementFlag) this.appDesignerValidationService.newDependenciesCount++;
                        else this.appDesignerValidationService.newDependenciesCount--
                    };
                    TreeControlController.prototype.DisableAllIfNeeded = function(items, incrementFlag) {
                        if (incrementFlag) this.appDesignerValidationService.newDependenciesCount++;
                        else {
                            this.appDesignerValidationService.newDependenciesCount--;
                            for (var _i = 0; _i < items.length; _i++) {
                                var item = items[_i];
                                item.isSelected && this.UpdateDependencyCount(false);
                                item.isSelected = incrementFlag
                            }
                        }
                    };
                    TreeControlController.prototype.getToggleStateMapForDependencyItem = function(dependencyItem) {
                        for (var _i = 0, _a = this.dependencyComponentCollapseStateList; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.dependencyItem == dependencyItem) return item
                        }
                        return null
                    };
                    TreeControlController.$inject = [
                        "$scope", AppDesigner.AppDesignerServiceNames.ValidationService, "mscrmLocalizationService"
                    ];
                    return TreeControlController
                }();
                Controllers.TreeControlController = TreeControlController;
                AppDesigner.AppDesignerModule.controller("mscrmTreeControlController", TreeControlController)
            })(Controllers = AppDesigner.Controllers || (AppDesigner.Controllers = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function DependencyPaneDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/DependencyPane.html?v=8200000749",
                        controller: "mscrmDependencyPaneController",
                        controllerAs: "dependencyPaneController"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmDependencyPane", DependencyPaneDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var AppDesigner;
        (function(AppDesigner) {
            var Directives;
            (function(Directives) {
                "use strict";

                function TreeControlDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        scope: { tree: "=" },
                        link: function(scope, elem, attributes) { scope.tree = attributes["tree"] },
                        templateUrl: "/Designers/AppDesigner/Sidebar/Templates/TreeControl.html?v=8200000749",
                        controller: "mscrmTreeControlController",
                        controllerAs: "treeControlController"
                    }
                }

                AppDesigner.AppDesignerModule.directive("mscrmTreeControl", TreeControlDirective)
            })(Directives = AppDesigner.Directives || (AppDesigner.Directives = {}))
        })(AppDesigner = Designers.AppDesigner || (Designers.AppDesigner = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}))