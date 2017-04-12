var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Constants;
            (function(Constants) {
                var ModuleNames = function() {
                    function ModuleNames() {}

                    Object.defineProperty(ModuleNames,
                        "CommonModule",
                        {
                            "get": function() { return ModuleNames.commonModule },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(ModuleNames,
                        "AccessibilityHelperModule",
                        {
                            "get": function() { return ModuleNames.accessibilityHelperModule },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ModuleNames,
                        "PerfFrameworkModule",
                        {
                            "get": function() { return ModuleNames.perfFrameworkModule },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ModuleNames,
                        "TelemetryFrameworkModule",
                        {
                            "get": function() { return ModuleNames.telemetryFrameworkModule },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ModuleNames,
                        "UIRouterModule",
                        {
                            "get": function() { return ModuleNames.uiRouterModule },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ModuleNames,
                        "NGAriaModule",
                        {
                            "get": function() { return ModuleNames.ngAriaModule },
                            enumerable: true,
                            configurable:
                                true
                        });
                    ModuleNames.commonModule = "mscrmCommon";
                    ModuleNames.accessibilityHelperModule = "mscrmAccessibilityHelper";
                    ModuleNames.perfFrameworkModule = "mscrmPerformance";
                    ModuleNames.uiRouterModule = "ui.router";
                    ModuleNames.ngAriaModule = "ngAria";
                    ModuleNames.telemetryFrameworkModule = "mscrmTelemetry";
                    return ModuleNames
                }();
                Constants.ModuleNames = ModuleNames;
                var ServiceNames = function() {
                    function ServiceNames() {}

                    Object.defineProperty(ServiceNames,
                        "UrlHelperService",
                        { "get": function() { return "mscrmUrlHelperService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "PerfService",
                        { "get": function() { return "mscrmPerfService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "HttpService",
                        { "get": function() { return "$http" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "QService",
                        { "get": function() { return "$q" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "TimeoutService",
                        { "get": function() { return "$timeout" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "TraceUtilityService",
                        {
                            "get": function() { return "mscrmTraceUtilityService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "DateTimeFormatService",
                        {
                            "get": function() { return "mscrmDateTimeFormatService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "LocalizationService",
                        {
                            "get": function() { return "mscrmLocalizationService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "ComponentService",
                        { "get": function() { return "mscrmComponentService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "ModalDialogService",
                        {
                            "get": function() { return "mscrmModalDialogService" },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(ServiceNames,
                        "LegacyDesignerService",
                        {
                            "get": function() { return "mscrmLegacyDesignerService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "AppInterfaceService",
                        {
                            "get": function() { return "mscrmAppInterfaceService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "AppDesignerPerfKpiService",
                        {
                            "get": function() { return "mscrmAppDesignerPerfKpisService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "ComponentDependencyService",
                        {
                            "get": function() { return "mscrmComponentDependencyService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "AppContextManipulationService",
                        {
                            "get": function() { return "mscrmAppContextManipulationService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "WindowService",
                        { "get": function() { return "$window" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "ScopeService",
                        { "get": function() { return "$scope" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "StateParamsService",
                        { "get": function() { return "$stateParams" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "NotificationBarService",
                        {
                            "get": function() { return "mscrmNotificationService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "DesignerConfigService",
                        {
                            "get": function() { return "mscrmDesignerConfigService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "ComposabilityService",
                        {
                            "get": function() { return "mscrmComposabilityService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "DirtyCheckService",
                        {
                            "get": function() { return "mscrmDirtyCheckService" },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(ServiceNames,
                        "StringCleansingService",
                        {
                            "get": function() { return "mscrmStringCleansingService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "ErrorUtilityService",
                        {
                            "get": function() { return "mscrmErrorUtilityService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "FlyoutService",
                        { "get": function() { return "mscrmFlyoutService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "KeyboardShortcutService",
                        {
                            "get": function() { return "mscrmKeyboardShortcutKeysService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "SitemapDesignerPerfKpisService",
                        {
                            "get": function() { return "mscrmSitemapDesignerPerfKpisService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "SiteMapDesignerDataAccessService",
                        { "get": function() { return "dataAccessService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "SiteMapDesignerPublishAllService",
                        { "get": function() { return "publishAllService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "BreadcrumbService",
                        {
                            "get": function() { return "mscrmBreadcrumbService" },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(ServiceNames,
                        "SerializeSitemapService",
                        {
                            "get": function() { return "mscrmSerializeSitemapService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "LocaleService",
                        { "get": function() { return "mscrmLocaleService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "CacheUtilityService",
                        {
                            "get": function() { return "mscrmCachingUtilityService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "TelemetryService",
                        { "get": function() { return "mscrmTelemetryService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "ActionOnSelectService",
                        {
                            "get": function() { return "mscrmActionOnSelectService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "PropertiesPaneService",
                        {
                            "get": function() { return "mscrmPropertiesPaneService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "SitemapDesignerUtilityService",
                        {
                            "get": function() { return "mscrmSitemapUtilityService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "CommonVariableService",
                        {
                            "get": function() { return "mscrmCommonVariableService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "ParsingService",
                        { "get": function() { return "parsingService" }, enumerable: true, configurable: true });
                    Object.defineProperty(ServiceNames,
                        "SitemapDesignerValidationService",
                        {
                            "get": function() { return "mscrmSitemapValidationService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "SitemapDesignerCommonVariableService",
                        {
                            "get": function() { return "mscrmCommonVariableService" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ServiceNames,
                        "FilterService",
                        { "get": function() { return "filterFilter" }, enumerable: true, configurable: true });
                    return ServiceNames
                }();
                Constants.ServiceNames = ServiceNames;
                var InjectedObjectNames = function() {
                    function InjectedObjectNames() {}

                    Object.defineProperty(InjectedObjectNames,
                        "SessionInfo",
                        { "get": function() { return "sessionInfo" }, enumerable: true, configurable: true });
                    Object.defineProperty(InjectedObjectNames,
                        "TraceLevel",
                        { "get": function() { return "traceLevel" }, enumerable: true, configurable: true });
                    Object.defineProperty(InjectedObjectNames,
                        "ResourceStrings",
                        { "get": function() { return "resourceStrings" }, enumerable: true, configurable: true });
                    Object.defineProperty(InjectedObjectNames,
                        "InitialBreadcrumb",
                        { "get": function() { return "initialBreadcrumb" }, enumerable: true, configurable: true });
                    Object.defineProperty(InjectedObjectNames,
                        "SolutionPublisherIdPrefix",
                        {
                            "get": function() { return "solutionPublisherIdPrefix" },
                            enumerable: true,
                            configurable: true
                        });
                    return InjectedObjectNames
                }();
                Constants.InjectedObjectNames = InjectedObjectNames;
                var FCBNames = function() {
                    function FCBNames() {}

                    Object.defineProperty(FCBNames,
                        "UnifiedProcessDesigner",
                        {
                            "get": function() { return "FCB.UnifiedProcessDesigner" },
                            enumerable: true,
                            configurable: true
                        });
                    return FCBNames
                }();
                Constants.FCBNames = FCBNames;
                var DirectiveRestrictTypes = function() {
                    function DirectiveRestrictTypes() {}

                    Object.defineProperty(DirectiveRestrictTypes,
                        "AttributeType",
                        {
                            "get": function() { return DirectiveRestrictTypes.attributeType },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(DirectiveRestrictTypes,
                        "ElementType",
                        {
                            "get": function() { return DirectiveRestrictTypes.elementType },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(DirectiveRestrictTypes,
                        "ClassType",
                        {
                            "get": function() { return DirectiveRestrictTypes.classType },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(DirectiveRestrictTypes,
                        "CommentType",
                        {
                            "get": function() { return DirectiveRestrictTypes.commentType },
                            enumerable: true,
                            configurable: true
                        });
                    DirectiveRestrictTypes.attributeType = "A";
                    DirectiveRestrictTypes.elementType = "E";
                    DirectiveRestrictTypes.classType = "C";
                    DirectiveRestrictTypes.commentType = "M";
                    return DirectiveRestrictTypes
                }();
                Constants.DirectiveRestrictTypes = DirectiveRestrictTypes;
                var KeyCode = function() {
                    function KeyCode() {}

                    Object.defineProperty(KeyCode,
                        "EscKeyCode",
                        { "get": function() { return KeyCode.escKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "TabKeyCode",
                        { "get": function() { return KeyCode.tabKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "EnterKeyCode",
                        { "get": function() { return KeyCode.enterKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "SpaceKeyCode",
                        { "get": function() { return KeyCode.spaceKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "UpArrowKeyCode",
                        { "get": function() { return KeyCode.upArrowKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "DownArrowKeyCode",
                        {
                            "get": function() { return KeyCode.downArrowKeyCode },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyCode,
                        "LeftArrowKeyCode",
                        {
                            "get": function() { return KeyCode.leftArrowKeyCode },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyCode,
                        "RightArrowKeyCode",
                        {
                            "get": function() { return KeyCode.rightArrowKeyCode },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyCode,
                        "HomeKeyCode",
                        { "get": function() { return KeyCode.homeKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "EndKeyCode",
                        { "get": function() { return KeyCode.endKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "PageUpKeyCode",
                        { "get": function() { return KeyCode.pageUpKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "PageDownKeyCode",
                        { "get": function() { return KeyCode.pageDownKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "BackSpaceKeyCode",
                        {
                            "get": function() { return KeyCode.backspaceKeyCode },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyCode,
                        "ShiftKeyCode",
                        { "get": function() { return KeyCode.shiftKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "CtrlKeyCode",
                        { "get": function() { return KeyCode.ctrlKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "AltKeyCode",
                        { "get": function() { return KeyCode.altKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "CapsLockKeyCode",
                        { "get": function() { return KeyCode.capslockKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "InsKeyCode",
                        { "get": function() { return KeyCode.insKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "DelKeyCode",
                        { "get": function() { return KeyCode.delKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "ZeroKeyCode",
                        { "get": function() { return KeyCode.zeroKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "NineKeyCode",
                        { "get": function() { return KeyCode.nineKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "AKeyCode",
                        { "get": function() { return KeyCode.aKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "ZKeyCode",
                        { "get": function() { return KeyCode.zKeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Meta1KeyCode",
                        { "get": function() { return KeyCode.meta1KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Meta2KeyCode",
                        { "get": function() { return KeyCode.meta2KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "UnderscoreKeyCode",
                        {
                            "get": function() { return KeyCode.underscoreKeyCode },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyCode,
                        "Numpad0KeyCode",
                        { "get": function() { return KeyCode.numpad0KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad1KeyCode",
                        { "get": function() { return KeyCode.numpad1KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad2KeyCode",
                        { "get": function() { return KeyCode.numpad2KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad3KeyCode",
                        { "get": function() { return KeyCode.numpad3KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad4KeyCode",
                        { "get": function() { return KeyCode.numpad4KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad5KeyCode",
                        { "get": function() { return KeyCode.numpad5KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad6KeyCode",
                        { "get": function() { return KeyCode.numpad6KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad7KeyCode",
                        { "get": function() { return KeyCode.numpad7KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad8KeyCode",
                        { "get": function() { return KeyCode.numpad8KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Numpad9KeyCode",
                        { "get": function() { return KeyCode.numpad9KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "Meta3KeyCode",
                        { "get": function() { return KeyCode.meta3KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F1KeyCode",
                        { "get": function() { return KeyCode.f1KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F2KeyCode",
                        { "get": function() { return KeyCode.f2KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F3KeyCode",
                        { "get": function() { return KeyCode.f3KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F4KeyCode",
                        { "get": function() { return KeyCode.f4KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F5KeyCode",
                        { "get": function() { return KeyCode.f5KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F6KeyCode",
                        { "get": function() { return KeyCode.f6KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F7KeyCode",
                        { "get": function() { return KeyCode.f7KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F8KeyCode",
                        { "get": function() { return KeyCode.f8KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F9KeyCode",
                        { "get": function() { return KeyCode.f9KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F10KeyCode",
                        { "get": function() { return KeyCode.f10KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F11KeyCode",
                        { "get": function() { return KeyCode.f11KeyCode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyCode,
                        "F12KeyCode",
                        { "get": function() { return KeyCode.f12KeyCode }, enumerable: true, configurable: true });
                    KeyCode.escKeyCode = 27;
                    KeyCode.tabKeyCode = 9;
                    KeyCode.enterKeyCode = 13;
                    KeyCode.spaceKeyCode = 32;
                    KeyCode.upArrowKeyCode = 38;
                    KeyCode.downArrowKeyCode = 40;
                    KeyCode.leftArrowKeyCode = 37;
                    KeyCode.rightArrowKeyCode = 39;
                    KeyCode.homeKeyCode = 36;
                    KeyCode.endKeyCode = 35;
                    KeyCode.pageUpKeyCode = 33;
                    KeyCode.pageDownKeyCode = 34;
                    KeyCode.backspaceKeyCode = 8;
                    KeyCode.shiftKeyCode = 16;
                    KeyCode.ctrlKeyCode = 17;
                    KeyCode.altKeyCode = 18;
                    KeyCode.capslockKeyCode = 20;
                    KeyCode.insKeyCode = 45;
                    KeyCode.delKeyCode = 46;
                    KeyCode.zeroKeyCode = 48;
                    KeyCode.nineKeyCode = 57;
                    KeyCode.aKeyCode = 65;
                    KeyCode.zKeyCode = 90;
                    KeyCode.meta1KeyCode = 91;
                    KeyCode.meta2KeyCode = 93;
                    KeyCode.underscoreKeyCode = 95;
                    KeyCode.numpad0KeyCode = 96;
                    KeyCode.numpad1KeyCode = 97;
                    KeyCode.numpad2KeyCode = 98;
                    KeyCode.numpad3KeyCode = 99;
                    KeyCode.numpad4KeyCode = 100;
                    KeyCode.numpad5KeyCode = 101;
                    KeyCode.numpad6KeyCode = 102;
                    KeyCode.numpad7KeyCode = 103;
                    KeyCode.numpad8KeyCode = 104;
                    KeyCode.numpad9KeyCode = 105;
                    KeyCode.meta3KeyCode = 224;
                    KeyCode.f1KeyCode = 112;
                    KeyCode.f2KeyCode = 113;
                    KeyCode.f3KeyCode = 114;
                    KeyCode.f4KeyCode = 115;
                    KeyCode.f5KeyCode = 116;
                    KeyCode.f6KeyCode = 117;
                    KeyCode.f7KeyCode = 118;
                    KeyCode.f8KeyCode = 119;
                    KeyCode.f9KeyCode = 120;
                    KeyCode.f10KeyCode = 121;
                    KeyCode.f11KeyCode = 122;
                    KeyCode.f12KeyCode = 123;
                    return KeyCode
                }();
                Constants.KeyCode = KeyCode;
                var KeyPressMode = function() {
                    function KeyPressMode() {}

                    Object.defineProperty(KeyPressMode,
                        "FocusMode",
                        { "get": function() { return KeyPressMode.focusMode }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyPressMode,
                        "EnterMode",
                        { "get": function() { return KeyPressMode.enterMode }, enumerable: true, configurable: true });
                    KeyPressMode.focusMode = "focus";
                    KeyPressMode.enterMode = "enter";
                    return KeyPressMode
                }();
                Constants.KeyPressMode = KeyPressMode;
                var KeyNames = function() {
                    function KeyNames() {}

                    Object.defineProperty(KeyNames,
                        "EscKeyName",
                        { "get": function() { return KeyNames.escKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "TabKeyName",
                        { "get": function() { return KeyNames.tabKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "EnterKeyName",
                        { "get": function() { return KeyNames.enterKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "SpaceKeyName",
                        { "get": function() { return KeyNames.spaceKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "UpArrowKeyName",
                        { "get": function() { return KeyNames.upArrowKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "DownArrowKeyName",
                        {
                            "get": function() { return KeyNames.downArrowKeyName },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyNames,
                        "LeftArrowKeyName",
                        {
                            "get": function() { return KeyNames.leftArrowKeyName },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyNames,
                        "RightArrowKeyName",
                        {
                            "get": function() { return KeyNames.rightArrowKeyName },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(KeyNames,
                        "HomeKeyName",
                        { "get": function() { return KeyNames.homeKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "EndKeyName",
                        { "get": function() { return KeyNames.endKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "PageUpKeyName",
                        { "get": function() { return KeyNames.pageUpKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "PageDownKeyName",
                        {
                            "get": function() { return KeyNames.pageDownKeyName },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyNames,
                        "BackSpaceKeyName",
                        {
                            "get": function() { return KeyNames.backspaceKeyName },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyNames,
                        "ShiftKeyName",
                        { "get": function() { return KeyNames.shiftKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "CtrlKeyName",
                        { "get": function() { return KeyNames.ctrlKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "AltKeyName",
                        { "get": function() { return KeyNames.altKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "CapsLockKeyName",
                        {
                            "get": function() { return KeyNames.capslockKeyName },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(KeyNames,
                        "InsKeyName",
                        { "get": function() { return KeyNames.insKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "DelKeyName",
                        { "get": function() { return KeyNames.delKeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Meta1KeyName",
                        { "get": function() { return KeyNames.meta1KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Meta2KeyName",
                        { "get": function() { return KeyNames.meta2KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "UnderscoreKeyName",
                        {
                            "get": function() { return KeyNames.underscoreKeyName },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(KeyNames,
                        "Numpad0KeyName",
                        { "get": function() { return KeyNames.numpad0KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad1KeyName",
                        { "get": function() { return KeyNames.numpad1KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad2KeyName",
                        { "get": function() { return KeyNames.numpad2KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad3KeyName",
                        { "get": function() { return KeyNames.numpad3KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad4KeyName",
                        { "get": function() { return KeyNames.numpad4KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad5KeyName",
                        { "get": function() { return KeyNames.numpad5KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad6KeyName",
                        { "get": function() { return KeyNames.numpad6KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad7KeyName",
                        { "get": function() { return KeyNames.numpad7KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad8KeyName",
                        { "get": function() { return KeyNames.numpad8KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Numpad9KeyName",
                        { "get": function() { return KeyNames.numpad9KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "Meta3KeyName",
                        { "get": function() { return KeyNames.meta3KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F1KeyName",
                        { "get": function() { return KeyNames.f1KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F2KeyName",
                        { "get": function() { return KeyNames.f2KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F3KeyName",
                        { "get": function() { return KeyNames.f3KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F4KeyName",
                        { "get": function() { return KeyNames.f4KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F5KeyName",
                        { "get": function() { return KeyNames.f5KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F6KeyName",
                        { "get": function() { return KeyNames.f6KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F7KeyName",
                        { "get": function() { return KeyNames.f7KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F8KeyName",
                        { "get": function() { return KeyNames.f8KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F9KeyName",
                        { "get": function() { return KeyNames.f9KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F10KeyName",
                        { "get": function() { return KeyNames.f10KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F11KeyName",
                        { "get": function() { return KeyNames.f11KeyName }, enumerable: true, configurable: true });
                    Object.defineProperty(KeyNames,
                        "F12KeyName",
                        { "get": function() { return KeyNames.f12KeyName }, enumerable: true, configurable: true });
                    KeyNames.escKeyName = "esc";
                    KeyNames.tabKeyName = "tab";
                    KeyNames.enterKeyName = "enter";
                    KeyNames.spaceKeyName = "space";
                    KeyNames.upArrowKeyName = "up";
                    KeyNames.downArrowKeyName = "down";
                    KeyNames.leftArrowKeyName = "left";
                    KeyNames.rightArrowKeyName = "right";
                    KeyNames.homeKeyName = "home";
                    KeyNames.endKeyName = "end";
                    KeyNames.pageUpKeyName = "pageup";
                    KeyNames.pageDownKeyName = "pagedown";
                    KeyNames.backspaceKeyName = "backspace";
                    KeyNames.shiftKeyName = "shift";
                    KeyNames.ctrlKeyName = "ctrl";
                    KeyNames.altKeyName = "alt";
                    KeyNames.capslockKeyName = "capslock";
                    KeyNames.insKeyName = "ins";
                    KeyNames.delKeyName = "del";
                    KeyNames.meta1KeyName = "meta";
                    KeyNames.meta2KeyName = "meta";
                    KeyNames.underscoreKeyName = "underscore";
                    KeyNames.numpad0KeyName = "0";
                    KeyNames.numpad1KeyName = "1";
                    KeyNames.numpad2KeyName = "2";
                    KeyNames.numpad3KeyName = "3";
                    KeyNames.numpad4KeyName = "4";
                    KeyNames.numpad5KeyName = "5";
                    KeyNames.numpad6KeyName = "6";
                    KeyNames.numpad7KeyName = "7";
                    KeyNames.numpad8KeyName = "8";
                    KeyNames.numpad9KeyName = "9";
                    KeyNames.meta3KeyName = "meta";
                    KeyNames.f1KeyName = "f1";
                    KeyNames.f2KeyName = "f2";
                    KeyNames.f3KeyName = "f3";
                    KeyNames.f4KeyName = "f4";
                    KeyNames.f5KeyName = "f5";
                    KeyNames.f6KeyName = "f6";
                    KeyNames.f7KeyName = "f7";
                    KeyNames.f8KeyName = "f8";
                    KeyNames.f9KeyName = "f9";
                    KeyNames.f10KeyName = "f10";
                    KeyNames.f11KeyName = "f11";
                    KeyNames.f12KeyName = "f12";
                    return KeyNames
                }();
                Constants.KeyNames = KeyNames;
                var DesignerName = function() {
                    function DesignerName() {}

                    Object.defineProperty(DesignerName,
                        "AppDesigner",
                        { "get": function() { return "AppDesigner" }, enumerable: true, configurable: true });
                    Object.defineProperty(DesignerName,
                        "SiteMapDesigner",
                        { "get": function() { return "SiteMapDesigner" }, enumerable: true, configurable: true });
                    return DesignerName
                }();
                Constants.DesignerName = DesignerName;
                var AppUrls = function() {
                    function AppUrls() {}

                    Object.defineProperty(AppUrls,
                        "createApp",
                        { "get": function() { return "CreateNewApp" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppUrls,
                        "appDesigner",
                        {
                            "get": function() { return "AppDesignerCanvas/:" + StateRouteParams.AppId },
                            enumerable: true,
                            configurable: true
                        });
                    AppUrls.getUrl = function(url) { return "/" + url };
                    return AppUrls
                }();
                Constants.AppUrls = AppUrls;
                var AppUrlStateNames = function() {
                    function AppUrlStateNames() {}

                    Object.defineProperty(AppUrlStateNames,
                        "createNewApp",
                        { "get": function() { return "CreateNewApp" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppUrlStateNames,
                        "appDesignerCanvas",
                        { "get": function() { return "AppDesignerCanvas" }, enumerable: true, configurable: true });
                    return AppUrlStateNames
                }();
                Constants.AppUrlStateNames = AppUrlStateNames;
                var StateRouteParams = function() {
                    function StateRouteParams() {}

                    Object.defineProperty(StateRouteParams,
                        "AppId",
                        { "get": function() { return "appId" }, enumerable: true, configurable: true });
                    Object.defineProperty(StateRouteParams,
                        "ComposableContext",
                        { "get": function() { return "composableContext" }, enumerable: true, configurable: true });
                    Object.defineProperty(StateRouteParams,
                        "SiteMapId",
                        { "get": function() { return "siteMapId" }, enumerable: true, configurable: true });
                    return StateRouteParams
                }();
                Constants.StateRouteParams = StateRouteParams;
                var ComposableContextParam = function() {
                    function ComposableContextParam() {}

                    Object.defineProperty(ComposableContextParam,
                        "AppId",
                        { "get": function() { return "AppId" }, enumerable: true, configurable: true });
                    Object.defineProperty(ComposableContextParam,
                        "AppUniqueName",
                        { "get": function() { return "AppUniqueName" }, enumerable: true, configurable: true });
                    Object.defineProperty(ComposableContextParam,
                        "AppName",
                        { "get": function() { return "AppName" }, enumerable: true, configurable: true });
                    Object.defineProperty(ComposableContextParam,
                        "SolutionId",
                        { "get": function() { return "SolutionId" }, enumerable: true, configurable: true });
                    Object.defineProperty(ComposableContextParam,
                        "SitemapId",
                        { "get": function() { return "SitemapId" }, enumerable: true, configurable: true });
                    return ComposableContextParam
                }();
                Constants.ComposableContextParam = ComposableContextParam;
                var AppContextNodeNames = function() {
                    function AppContextNodeNames() {}

                    Object.defineProperty(AppContextNodeNames,
                        "Value",
                        { "get": function() { return "value" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "AppInfo",
                        { "get": function() { return "appInfo" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "WebResourceInfo",
                        { "get": function() { return "webResourceInfo" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "BPFIds",
                        { "get": function() { return "bpfIds" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "DashboardIds",
                        { "get": function() { return "dashboardIds" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "AppEntityInfo",
                        { "get": function() { return "appEntityInfo" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "AppId",
                        { "get": function() { return "AppId" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "UniqueName",
                        { "get": function() { return "UniqueName" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Description",
                        { "get": function() { return "Description" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "LastModifiedOn",
                        { "get": function() { return "LastModifiedOn" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "AppUrl",
                        { "get": function() { return "AppUrl" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Status",
                        { "get": function() { return "Status" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Title",
                        { "get": function() { return "Title" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Name",
                        { "get": function() { return "Name" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "DisplayName",
                        { "get": function() { return "DisplayName" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Guid",
                        { "get": function() { return "Guid" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "WebResourceType",
                        { "get": function() { return "WebResourceType" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Path",
                        { "get": function() { return "Path" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "SitemapId",
                        { "get": function() { return "SitemapId" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "EntityId",
                        { "get": function() { return "EntityId" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "ChartIds",
                        { "get": function() { return "ChartIds" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Forms",
                        { "get": function() { return "Forms" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Views",
                        { "get": function() { return "Views" }, enumerable: true, configurable: true });
                    Object.defineProperty(AppContextNodeNames,
                        "Id",
                        { "get": function() { return "Id" }, enumerable: true, configurable: true });
                    return AppContextNodeNames
                }();
                Constants.AppContextNodeNames = AppContextNodeNames;
                var DirtyCheckModelNames = function() {
                    function DirtyCheckModelNames() {}

                    Object.defineProperty(DirtyCheckModelNames,
                        "SiteMapCanvas",
                        { "get": function() { return "SiteMapCanvas" }, enumerable: true, configurable: true });
                    Object.defineProperty(DirtyCheckModelNames,
                        "SiteMapForm",
                        { "get": function() { return "SiteMapForm" }, enumerable: true, configurable: true });
                    Object.defineProperty(DirtyCheckModelNames,
                        "AppDesignerCanvas",
                        { "get": function() { return "AppDesignerCanvas" }, enumerable: true, configurable: true });
                    Object.defineProperty(DirtyCheckModelNames,
                        "AppCreateForm",
                        { "get": function() { return "AppCreateForm" }, enumerable: true, configurable: true });
                    return DirtyCheckModelNames
                }();
                Constants.DirtyCheckModelNames = DirtyCheckModelNames;
                var CRMWebApiReferenceConstants = function() {
                    function CRMWebApiReferenceConstants() {}

                    Object.defineProperty(CRMWebApiReferenceConstants,
                        "RetrieveUnpublishedMultiple",
                        {
                            "get": function() { return "Microsoft.Dynamics.CRM.RetrieveUnpublishedMultiple()" },
                            enumerable: true,
                            configurable: true
                        });
                    return CRMWebApiReferenceConstants
                }();
                Constants.CRMWebApiReferenceConstants = CRMWebApiReferenceConstants;
                var CacheUtilitiesKeys = function() {
                    function CacheUtilitiesKeys() {}

                    Object.defineProperty(CacheUtilitiesKeys,
                        "AppContext",
                        { "get": function() { return "appContext" }, enumerable: true, configurable: true });
                    Object.defineProperty(CacheUtilitiesKeys,
                        "AppContextModel",
                        { "get": function() { return "contextModel" }, enumerable: true, configurable: true });
                    Object.defineProperty(CacheUtilitiesKeys,
                        "UnhandledExceptionList",
                        {
                            "get": function() { return "unhandledExceptionList" },
                            enumerable: true,
                            configurable:
                                true
                        });
                    return CacheUtilitiesKeys
                }();
                Constants.CacheUtilitiesKeys = CacheUtilitiesKeys;
                var ErrorCode = function() {
                    function ErrorCode() {}

                    Object.defineProperty(ErrorCode,
                        "MissingDataInUrl",
                        { "get": function() { return "0x80050101" }, enumerable: true, configurable: true });
                    Object.defineProperty(ErrorCode,
                        "CRMError",
                        { "get": function() { return "0x80050102" }, enumerable: true, configurable: true });
                    return ErrorCode
                }();
                Constants.ErrorCode = ErrorCode;
                var ModalDialogType = function() {
                    function ModalDialogType() {}

                    ModalDialogType
                        .ProgressDialog =
                        "/Designers/Common/ModalDialog/Templates/ModalDialog_Progress.html?v=8200000749";
                    ModalDialogType
                        .IFrameDialog = "/Designers/Common/ModalDialog/Templates/ModalDialog_IFrame.html?v=8200000749";
                    ModalDialogType
                        .ConfirmDialog =
                        "/Designers/Common/ModalDialog/Templates/ModalDialog_Confirm.html?v=8200000749";
                    ModalDialogType
                        .WatsonDialog = "/Designers/Common/ModalDialog/Templates/ModalDialog_Watson.html?v=8200000749";
                    return ModalDialogType
                }();
                Constants.ModalDialogType = ModalDialogType;
                var ErrorStrings = function() {
                    function ErrorStrings() {}

                    Object.defineProperty(ErrorStrings,
                        "KeyNotInActionDictionary",
                        {
                            "get": function() { return "Key Does not exits in the action dictionary" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ErrorStrings,
                        "MethodNotDefinedInActionDictionary",
                        {
                            "get": function() { return "Action item method not defined in action dictionary." },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ErrorStrings,
                        "UrlNotDefinedInActionDictionary",
                        {
                            "get": function() { return "Url is null or empty in action item." },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(ErrorStrings,
                        "ActionNotSupported",
                        {
                            "get": function() { return "Action is not supported." },
                            enumerable: true,
                            configurable: true
                        });
                    return ErrorStrings
                }();
                Constants.ErrorStrings = ErrorStrings;
                var Defaults = function() {
                    function Defaults() {}

                    Object.defineProperty(Defaults,
                        "DefaultAppModuleImageWebResourceId",
                        {
                            "get": function() { return "953b9fac-1e5e-e611-80d6-00155ded156f" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(Defaults,
                        "DefaultAreaImageWebResourceId",
                        {
                            "get": function() { return "2d453e7d-babb-44ba-b5ee-2e7cdf0fbd1d" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(Defaults,
                        "DefaultSubAreaImageWebResourceId",
                        {
                            "get": function() { return "4c4c5cc3-b9a3-4ced-8064-69f02c6672a9" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(Defaults,
                        "DefaultSubAreaWebResourceImageWebResourceId",
                        {
                            "get": function() { return "f6c18450-be58-4f01-9f34-dde039ccdddc" },
                            enumerable: true,
                            configurable: true
                        });
                    return Defaults
                }();
                Constants.Defaults = Defaults;
                var TracingScenarios = function() {
                    function TracingScenarios() {}

                    Object.defineProperty(TracingScenarios,
                        "DesignerBootstrap",
                        { "get": function() { return "Designer Bootstrap" }, enumerable: true, configurable: true });
                    Object.defineProperty(TracingScenarios,
                        "DesignerConfig",
                        { "get": function() { return "Designer Config" }, enumerable: true, configurable: true });
                    Object.defineProperty(TracingScenarios,
                        "TelemetryInit",
                        { "get": function() { return "TelemetryInit" }, enumerable: true, configurable: true });
                    Object.defineProperty(TracingScenarios,
                        "MakeCorsRequest",
                        { "get": function() { return "MakeCorsRequest" }, enumerable: true, configurable: true });
                    Object.defineProperty(TracingScenarios,
                        "AddTelemetryEvent",
                        { "get": function() { return "AddTelemetryEvent" }, enumerable: true, configurable: true });
                    Object.defineProperty(TracingScenarios,
                        "Telemetry",
                        { "get": function() { return "Telemetry" }, enumerable: true, configurable: true });
                    return TracingScenarios
                }();
                Constants.TracingScenarios = TracingScenarios;
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
                Constants.EventStatus = EventStatus;
                var SiteMapUrls = function() {
                    function SiteMapUrls() {}

                    Object.defineProperty(SiteMapUrls,
                        "siteMapHome",
                        { "get": function() { return "SiteMapHome" }, enumerable: true, configurable: true });
                    Object.defineProperty(SiteMapUrls,
                        "siteMapEdit",
                        {
                            "get": function() { return "SiteMapHome/:" + StateRouteParams.SiteMapId },
                            enumerable: true,
                            configurable: true
                        });
                    SiteMapUrls.getUrl = function(url) { return "/" + url };
                    return SiteMapUrls
                }();
                Constants.SiteMapUrls = SiteMapUrls;
                var UtilityConstants = function() {
                    function UtilityConstants() {}

                    UtilityConstants.AndOperator = " and ";
                    UtilityConstants.ObjectTypeCodeNotEqual = " ObjectTypeCode ne ";
                    UtilityConstants.BlackListedOTCs = [
                        "4712", "4724", "9933", "9934", "9935", "9947", "9945", "9944", "9942", "9951", "2016", "9949"
                    ];
                    UtilityConstants.EqualOperator = " eq ";
                    UtilityConstants.OrOperator = " or ";
                    UtilityConstants.customizedFilter = [
                        "IsCustomizable/Value eq true", "IsCustomEntity eq true", "IsManaged eq false",
                        "IsMappable/Value eq true", "IsRenameable/Value eq true"
                    ];
                    return UtilityConstants
                }();
                Constants.UtilityConstants = UtilityConstants;
                (function(ProgressDialogLocation) {
                    ProgressDialogLocation[ProgressDialogLocation["Canvas"] = 0] = "Canvas";
                    ProgressDialogLocation[ProgressDialogLocation["RightPane"] = 1] = "RightPane"
                })(Constants.ProgressDialogLocation || (Constants.ProgressDialogLocation = {}));
                var ProgressDialogLocation = Constants.ProgressDialogLocation,
                    ResourceStrings = function() {
                        function ResourceStrings() {}

                        Object.defineProperty(ResourceStrings,
                            "networkFailure",
                            {
                                "get": function() { return "AppDesigner.Error_NetworkFailure" },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ResourceStrings,
                            "genericError",
                            {
                                "get": function() { return "AppDesigner.Error_ServerDown" },
                                enumerable: true,
                                configurable: true
                            });
                        return ResourceStrings
                    }();
                Constants.ResourceStrings = ResourceStrings
            })(Constants = Common.Constants || (Common.Constants = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            "use strict";
            Common.CommonModule = angular.module(Common.Constants.ModuleNames.CommonModule,
            [
                Common.Constants.ModuleNames.PerfFrameworkModule, Common.Constants.ModuleNames.TelemetryFrameworkModule
            ])
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Guid = function() {
                function Guid(guidString) {
                    this.guidString = guidString;
                    var regexp = new
                        RegExp("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");
                    if (regexp.test(guidString)) this.guid = guidString
                }

                Object.defineProperty(Guid,
                    "EmptyGuid",
                    {
                        "get": function() { return new Guid("00000000-0000-0000-0000-000000000000") },
                        enumerable: true,
                        configurable: true
                    });
                Guid.prototype.ToString = function() { return this.guid };
                Guid.NewGuid = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                        function(c) {
                            var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
                            return v.toString(16)
                        })
                };
                return Guid
            }();
            Common.Guid = Guid
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Exceptions;
            (function(Exceptions) {
                "use strict";
                var CrmScriptErrorReport = function() {
                    function CrmScriptErrorReport(errorMessage, stackTrace, lineNumber, functionName, fileName) {
                        this.errorMessage = errorMessage;
                        this.stackTrace = stackTrace;
                        this.lineNumber = lineNumber;
                        this.functionName = functionName;
                        this.fileName = fileName
                    }

                    CrmScriptErrorReport.prototype.getErrorReportXml = function() {
                        var reportXml = "<CrmScriptErrorReport>";
                        reportXml += "<ReportVersion>1.0</ReportVersion>";
                        reportXml += "<ScriptErrorDetails>";
                        reportXml += "<Message>" + this.errorMessage + "</Message>";
                        reportXml += "<Line>" + this.lineNumber + "</Line>";
                        reportXml += "<URL>" + window.location.href + "</URL>";
                        reportXml += "<Line>" + this.lineNumber + "</Line>";
                        reportXml += "<CallStack>";
                        reportXml += "<Function>" + this.functionName + "</Function>";
                        reportXml += "</CallStack></ScriptErrorDetails>";
                        reportXml += "<ClientInformation>";
                        reportXml += "<BrowserUserAgent>" + window.navigator.userAgent + "</BrowserUserAgent>";
                        reportXml += "<BrowserLanguage>" + window.navigator.userLanguage + "</BrowserLanguage>";
                        reportXml += "<BrowserLanguage>" + window.navigator.userLanguage + "</BrowserLanguage>";
                        reportXml += "<SystemLanguage></SystemLanguage>";
                        reportXml += "<UserLanguage>" + window["lCID"] + " </UserLanguage>";
                        reportXml += "<ScreenResolution>" +
                            window.screen.width +
                            "x" +
                            window.screen.height +
                            "</ScreenResolution>";
                        reportXml += "<ClientName>Designers</ClientName>";
                        reportXml += "<ClientTime>" + new Date + "</ClientTime>";
                        reportXml += "</ClientInformation>";
                        reportXml += "</CrmScriptErrorReport>";
                        return reportXml
                    };
                    CrmScriptErrorReport.prototype
                        .toString = function() {
                            return this.errorMessage +
                                "_" +
                                this.functionName +
                                "_" +
                                this.fileName +
                                "_" +
                                this.lineNumber +
                                "_" +
                                this.stackTrace
                        };
                    return CrmScriptErrorReport
                }();
                Exceptions.CrmScriptErrorReport = CrmScriptErrorReport
            })(Exceptions = Common.Exceptions || (Common.Exceptions = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Exceptions;
            (function(Exceptions) {
                "use strict";
                var GlobalExceptionConfig = function() {
                    function GlobalExceptionConfig(provide) {
                        this.provide = provide;
                        provide.decorator("$exceptionHandler",
                        [
                            "$delegate", function($delegate) {
                                var exceptionHandler = new Exceptions.GlobalExceptionHandler($delegate);
                                return exceptionHandler.exception.bind(exceptionHandler)
                            }
                        ])
                    }

                    GlobalExceptionConfig.$inject = ["$provide"];
                    return GlobalExceptionConfig
                }();
                Exceptions.GlobalExceptionConfig = GlobalExceptionConfig
            })(Exceptions = Common.Exceptions || (Common.Exceptions = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
angular.module(Mscrm.Designers.Common.Constants.ModuleNames.CommonModule)
    .config(["$provide", Mscrm.Designers.Common.Exceptions.GlobalExceptionConfig.bind(this)]);
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Exceptions;
            (function(Exceptions) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    Tracing = Mscrm.Designers.Common.Tracing,
                    GlobalExceptionHandler = function() {
                        function GlobalExceptionHandler(defaultHandler) {
                            var _this = this;
                            this.defaultHandler = defaultHandler;
                            this.exception = function(exception, cause) {
                                _this.exceptionObject = exception;
                                _this.defaultHandler(exception, cause);
                                if (exception.message.indexOf("[$compile:tpload]") !== 0) {
                                    _this.initServices();
                                    _this.processException(exception)
                                }
                            }
                        }

                        GlobalExceptionHandler.prototype.processException = function(exception) {
                            try {
                                this.getStackTraceFrames(exception)
                                    .then(this.onGetStackTraceSuccess.bind(this),
                                        this.onGetStackTraceFailure.bind(this))
                            } catch (ex) {
                                this.TraceError(Tracing.TraceComponent.ExceptionHandler,
                                    "processException",
                                    new Mscrm.Designers.Common.Tracing
                                    .StringTraceData("GlobalExceptionHandler:processException: Exception in getStackTraceFrames" + ex.message))
                            }
                        };
                        GlobalExceptionHandler.prototype.onGetStackTraceSuccess = function(stackFrames) {
                            try {
                                var topStackFrame = stackFrames[0], stackTrace = this.getStackTrace(stackFrames);
                                this.crmScriptErrorReport = new Exceptions
                                    .CrmScriptErrorReport(this.exceptionObject.message,
                                        stackTrace,
                                        topStackFrame.lineNumber,
                                        topStackFrame.functionName,
                                        topStackFrame.fileName)
                            } catch (ex) {
                                this.onGetStackTraceFailure(ex)
                            }
                            this.reportException()
                        };
                        GlobalExceptionHandler.prototype.onGetStackTraceFailure = function(stackTraceError) {
                            this.TraceError(Tracing.TraceComponent.ExceptionHandler,
                                "onGetStackTraceFailure",
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData("GlobalExceptionHandler:onGetStackTraceFailure: Exception in processing stack Trace" + stackTraceError.message));
                            this.crmScriptErrorReport = new Exceptions
                                .CrmScriptErrorReport(this.exceptionObject.message, "", -1, "", "");
                            this.reportException()
                        };
                        GlobalExceptionHandler.prototype
                            .getStackTraceFrames = function(exception) { return StackTrace.fromError(exception) };
                        GlobalExceptionHandler.prototype.getStackTrace = function(stackFrames) {
                            var stack = stackFrames.map(function(sf) { return sf.toString() }).join("\n");
                            return stack
                        };
                        GlobalExceptionHandler.prototype.reportException = function() {
                            try {
                                if (this.getAlreadySeenExceptionList()
                                    .containsKey(this.crmScriptErrorReport.toString())) return;
                                this.sendTelemetryEvent();
                                this.openWatsonDialog();
                                this.getAlreadySeenExceptionList().add(this.crmScriptErrorReport.toString(), true)
                            } catch (ex) {
                                this.TraceError(Common.Tracing.TraceComponent.ExceptionHandler,
                                    "reportException",
                                    new Common.Tracing.StringTraceData(ex.message))
                            }
                        };
                        GlobalExceptionHandler.prototype.sendTelemetryEvent = function() {
                            try {
                                var errorEvent = new Common.Telemetry
                                    .DesignerErrorEvent(this.sessionInfo.designerName,
                                        this.traceUtilityService.Scenario,
                                        this.crmScriptErrorReport.errorMessage,
                                        this.crmScriptErrorReport.stackTrace,
                                        true);
                                this.telemetryService.AddTelemetryEvent(errorEvent)
                            } catch (ex) {
                                this.TraceError(Common.Tracing.TraceComponent.ExceptionHandler,
                                    "sendTelemetryEvent",
                                    new Common.Tracing.StringTraceData(ex.message))
                            }
                        };
                        GlobalExceptionHandler.prototype.openWatsonDialog = function() {
                            try {
                                var watsonDialogParams = new Common.ModalDialog
                                    .WatsonDialogParams(this.crmScriptErrorReport);
                                this.modalDialogService.ModalDialogParameter &&
                                    this.modalDialogService.ModalDialogParameter.ShowModalDialog &&
                                    this.modalDialogService.ModalDialogParameter.DialogTemplate ==
                                    Common.Constants.ModalDialogType.ProgressDialog &&
                                    this.modalDialogService.close();
                                !(this.modalDialogService.ModalDialogParameter &&
                                        this.modalDialogService.ModalDialogParameter.ShowModalDialog) &&
                                    this.modalDialogService.open(watsonDialogParams)
                            } catch (ex) {
                                this.TraceError(Tracing.TraceComponent.ExceptionHandler,
                                    "openWatsonDialog",
                                    new Mscrm.Designers.Common.Tracing.StringTraceData(ex.message))
                            }
                        };
                        GlobalExceptionHandler.prototype.initServices = function() {
                            var injector = angular.element(document.body).injector();
                            this.modalDialogService = injector.get(ServiceNames.ModalDialogService);
                            this.traceUtilityService = injector.get(ServiceNames.TraceUtilityService);
                            this.telemetryService = injector.get(ServiceNames.TelemetryService);
                            this.cachingUtilityService = injector.get(ServiceNames.CacheUtilityService);
                            this.sessionInfo = injector.get(Common.Constants.InjectedObjectNames.SessionInfo)
                        };
                        GlobalExceptionHandler.prototype.getAlreadySeenExceptionList = function() {
                            var alreadySeenExceptions = this.cachingUtilityService
                                .Get(Common.Constants.CacheUtilitiesKeys.UnhandledExceptionList);
                            if (!alreadySeenExceptions) {
                                alreadySeenExceptions = new Common.Models.Dictionary;
                                this.cachingUtilityService.Add(Common.Constants.CacheUtilitiesKeys
                                    .UnhandledExceptionList,
                                    alreadySeenExceptions)
                            }
                            return alreadySeenExceptions
                        };
                        GlobalExceptionHandler.prototype.TraceError = function(component, traceLocation, data) {
                            if (this.traceUtilityService)
                                try {
                                    this.traceUtilityService.LogError(component, traceLocation, data)
                                } catch (ex) {
                                    console.log("Exception in TraceError:" + ex.Message);
                                    console.log("[{%s}]: (%s): %s: %s: %s",
                                        "ExceptionHandler",
                                        (new Date).toISOString(),
                                        "",
                                        traceLocation,
                                        data.ToString())
                                }
                        };
                        GlobalExceptionHandler.$inject = ["$delegate"];
                        return GlobalExceptionHandler
                    }();
                Exceptions.GlobalExceptionHandler = GlobalExceptionHandler
            })(Exceptions = Common.Exceptions || (Common.Exceptions = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var Common;
            (function(Common) {
                "use strict";
                angular.module("mscrmPerformance", ["ui.router"])
                    .config([
                        "$stateProvider", "$urlRouterProvider", "$controllerProvider",
                        function($stateProvider, $urlRouterProvider) {
                            $stateProvider.state("PerfLogs",
                            {
                                url: "/PerfLogs",
                                templateUrl:
                                    "Common/PerformanceTools/Performance/OnDemand/Views/PerfLogs.html?v=8200000749",
                                controller: "mscrmPersistentLoggerController",
                                controllerAs: "persistentLogger"
                            })
                        }
                    ]);
                var PerfKpiTypes = function() {
                    function PerfKpiTypes() {}

                    PerfKpiTypes.render = "Render";
                    PerfKpiTypes.xhr = "Xhr";
                    PerfKpiTypes.processing = "Processing";
                    PerfKpiTypes.functionType = "Function";
                    PerfKpiTypes.scenario = "Scenario";
                    PerfKpiTypes.other = "Other";
                    return PerfKpiTypes
                }();
                Common.PerfKpiTypes = PerfKpiTypes;
                (function(LoggerTypes) {
                    LoggerTypes[LoggerTypes["consoleLogger"] = 1] = "consoleLogger";
                    LoggerTypes[LoggerTypes["persistentLogger"] = 2] = "persistentLogger"
                })(Common.LoggerTypes || (Common.LoggerTypes = {}));
                var LoggerTypes = Common.LoggerTypes;
                (function(PerfMarkerTypes) {
                    PerfMarkerTypes[PerfMarkerTypes["majorMarker"] = 1] = "majorMarker";
                    PerfMarkerTypes[PerfMarkerTypes["regularMarker"] = 2] = "regularMarker"
                })(Common.PerfMarkerTypes || (Common.PerfMarkerTypes = {}));
                var PerfMarkerTypes = Common.PerfMarkerTypes
            })(Common = Perf.Common || (Perf.Common = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var Common;
            (function(Common) {
                "use strict";
                var PerfController = function() {
                    function PerfController(perfMarkerService) { this.perfMarkerService = perfMarkerService }

                    PerfController.$inject = ["mscrmPerfMarkerService"];
                    return PerfController
                }();
                Common.PerfController = PerfController;
                angular.module("mscrmPerformance").controller("mscrmPerfController", PerfController)
            })(Common = Perf.Common || (Perf.Common = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var Stub;
            (function(Stub) {
                "use strict";
                var StubPerfStopWatch = function() {
                    function StubPerfStopWatch() {}

                    StubPerfStopWatch.prototype.start = function(alternateDisplayName) {};
                    StubPerfStopWatch.prototype.stop = function() {};
                    StubPerfStopWatch.prototype.toString = function() { return null };
                    return StubPerfStopWatch
                }();
                Stub.StubPerfStopWatch = StubPerfStopWatch;
                var StubPerfMarker = function() {
                    function StubPerfMarker(id, data, name, parameters) {
                        this.id = id;
                        this.data = data;
                        this.name = name;
                        this.parameters = parameters
                    }

                    return StubPerfMarker
                }();
                Stub.StubPerfMarker = StubPerfMarker;
                var StubPerfKpi = function() {
                    function StubPerfKpi() {}

                    return StubPerfKpi
                }();
                Stub.StubPerfKpi = StubPerfKpi
            })(Stub = Perf.Stub || (Perf.Stub = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var Stub;
            (function(Stub) {
                "use strict";
                var StubPerfService = function() {
                    function StubPerfService() { this.navigatedViaBrowser = false }

                    StubPerfService.prototype.getStopWatch = function(kpi) { return new Stub.StubPerfStopWatch };
                    StubPerfService.prototype.log = function(msg, kpi) {};
                    StubPerfService.prototype.clearStopwatchByName = function(name) {};
                    StubPerfService.prototype.checkForFullLoad = function(condition, fullLoadKpi) {};
                    StubPerfService.prototype
                        .createPerfKpi = function(component, name, type, goal) { return new Stub.StubPerfKpi };
                    StubPerfService.prototype.getStopwatchByName = function(name) { return new Stub.StubPerfStopWatch };
                    StubPerfService.prototype.getLogger = function(loggerType) { return null };
                    return StubPerfService
                }();
                angular.module("mscrmPerformance").service("mscrmPerfService", StubPerfService)
            })(Stub = Perf.Stub || (Perf.Stub = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Constants;
            (function(Constants) {
                var UserInteractionInfo = function() {
                    function UserInteractionInfo(userInteractionType, userInteractionCounter) {
                        this.userInteractionType = userInteractionType;
                        this.userInteractionCounter = userInteractionCounter
                    }

                    return UserInteractionInfo
                }();
                Constants.UserInteractionInfo = UserInteractionInfo;
                var UserInteractionType = function() {
                    function UserInteractionType() {}

                    UserInteractionType.MouseClick = "MouseClick";
                    UserInteractionType.DragDrop = "DragDrop";
                    UserInteractionType.Rearrange = "Rearrange";
                    UserInteractionType.KeyboardShortKeyPress = "KeyboardShortKeyPress";
                    return UserInteractionType
                }();
                Constants.UserInteractionType = UserInteractionType;
                var AppDesignerClicks = function() {
                    function AppDesignerClicks() {}

                    AppDesignerClicks.AppDesignerAddClick = "AppDesignerAddClick";
                    AppDesignerClicks.AppDesignerEditClick = "AppDesignerEditClick";
                    AppDesignerClicks.AppDesignerRemoveClick = "AppDesignerRemoveClick";
                    AppDesignerClicks.AppDesignerSaveClick = "AppDesignerSaveClick";
                    AppDesignerClicks.AppDesignerSaveAndCloseClick = "AppDesignerSaveAndCloseClick";
                    AppDesignerClicks.AppDesignerValidateClick = "AppDesignerValidateClick";
                    AppDesignerClicks.AppDesignerPublishClick = "AppDesignerPublishClick";
                    AppDesignerClicks.AppDesignerEntitiesGoClick = "AppDesignerEntitiesGoClick";
                    AppDesignerClicks.AppDesignerDashboardGoClick = "AppDesignerDashboardGoClick";
                    AppDesignerClicks.AppDesignerBPCGOClick = "AppDesignerBPCGOClick";
                    AppDesignerClicks.AppDesignerFormGoClick = "AppDesignerFormGoClick";
                    AppDesignerClicks.AppDesignerViewGoClick = "AppDesignerViewGoClick";
                    AppDesignerClicks.AppDesignerChartGoClick = "AppDesignerChartGoClick";
                    AppDesignerClicks.AppDesignerAddEntityClick = "AppDesignerAddEntityClick";
                    AppDesignerClicks.AppDesignerAddDashboardClick = "AppDesignerAddDashboardClick";
                    AppDesignerClicks.AppDesignerAddBPCClick = "AppDesignerAddBPCClick";
                    AppDesignerClicks.AppDesignerAddViewClick = "AppDesignerAddViewClick";
                    AppDesignerClicks.AppDesignerAddFormClick = "AppDesignerAddFormClick";
                    AppDesignerClicks.AppDesignerAddChartClick = "AppDesignerAddChartClick";
                    return AppDesignerClicks
                }();
                Constants.AppDesignerClicks = AppDesignerClicks;
                var SitemapDesignerClicks = function() {
                    function SitemapDesignerClicks() {}

                    SitemapDesignerClicks.SitemapDesignerAddAreaClick = "SitemapDesignerAddAreaClick";
                    SitemapDesignerClicks.SitemapDesignerAddGroupClick = "SitemapDesignerAddGroupClick";
                    SitemapDesignerClicks.SitemapDesignerAddSubAreaClick = "SitemapDesignerAddSubAreaClick";
                    SitemapDesignerClicks.SitemapDesignerCloneClick = "SitemapDesignerCloneClick";
                    SitemapDesignerClicks.SitemapDesignerDeleteClick = "SitemapDesignerDeleteClick";
                    SitemapDesignerClicks.SitemapDesignerSaveClick = "SitemapDesignerSaveClick";
                    SitemapDesignerClicks.SitemapDesignerSaveAndCloseClick = "SitemapDesignerSaveAndCloseClick";
                    SitemapDesignerClicks.SitemapDesignerPublishClick = "SitemapDesignerPublishClick";
                    SitemapDesignerClicks.SitemapDesignerDragDropUsage = "SitemapDesignerDragDropUsage";
                    SitemapDesignerClicks.SitemapDesignerRearrangeUsage = "SitemapDesignerRearrangeUsage";
                    SitemapDesignerClicks
                        .SitemapDesignerOpenFlyoutOnShortcutKey = "SitemapDesignerOpenFlyoutOnShortcutKey";
                    SitemapDesignerClicks.SitemapDesignerDeleteShortcutKey = "SitemapDesignerDeleteShortcutKey";
                    SitemapDesignerClicks.SitemapDesignerCloneShortcutKey = "SitemapDesignerCloneShortcutKey";
                    SitemapDesignerClicks.SitemapDesignerSaveShortcutKey = "SitemapDesignerSaveShortcutKey";
                    SitemapDesignerClicks
                        .SitemapDesignerSaveAndCloseShortcutKey = "SitemapDesignerSaveAndCloseShortcutKey";
                    SitemapDesignerClicks.SitemapDesignerPublishShortcutKey = "SitemapDesignerPublishShortcutKey";
                    return SitemapDesignerClicks
                }();
                Constants.SitemapDesignerClicks = SitemapDesignerClicks;
                var TelemetryDictionary = function() {
                    function TelemetryDictionary() {}

                    TelemetryDictionary.InitilizeDesignerUserActions = function() {
                        TelemetryDictionary.AppDesignerUserActions = new Mscrm.Designers.Common.Models.Dictionary;
                        TelemetryDictionary.DesignerUserActions = new Mscrm.Designers.Common.Models.Dictionary;
                        TelemetryDictionary.DesignerUserActionsForSitemap = new Mscrm.Designers.Common.Models
                            .Dictionary;
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Edit", AppDesignerClicks.AppDesignerEditClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Remove", AppDesignerClicks.AppDesignerRemoveClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AppGlobalCommand.AppDesigner.Save",
                                AppDesignerClicks.AppDesignerSaveClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AppGlobalCommand.AppDesigner.SaveAndClose",
                                AppDesignerClicks.AppDesignerSaveAndCloseClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AppGlobalCommand.AppDesigner.Validate",
                                AppDesignerClicks.AppDesignerValidateClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AppGlobalCommand.AppDesigner.Publish",
                                AppDesignerClicks.AppDesignerPublishClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AddComponent.Entity.Go", AppDesignerClicks.AppDesignerEntitiesGoClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AddComponent.Dashboard.Go",
                                AppDesignerClicks
                                .AppDesignerDashboardGoClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AddComponent.BPC.Go", AppDesignerClicks.AppDesignerBPCGOClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AddComponent.Form.Go", AppDesignerClicks.AppDesignerFormGoClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AddComponent.View.Go", AppDesignerClicks.AppDesignerViewGoClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.AddComponent.Chart.Go", AppDesignerClicks.AppDesignerChartGoClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Flyoutmenu.Node.1",
                                AppDesignerClicks.AppDesignerAddEntityClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Flyoutmenu.Node.2",
                                AppDesignerClicks.AppDesignerAddDashboardClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Flyoutmenu.Node.3", AppDesignerClicks.AppDesignerAddBPCClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Flyoutmenu.Node.4", AppDesignerClicks.AppDesignerAddViewClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Flyoutmenu.Node.5", AppDesignerClicks.AppDesignerAddFormClick);
                        TelemetryDictionary.AppDesignerUserActions
                            .add("AppDesigner.Commandbar.Flyoutmenu.Node.6",
                                AppDesignerClicks
                                .AppDesignerAddChartClick);
                        TelemetryDictionary.SitemapDesignerUserActions = new Mscrm.Designers.Common.Models.Dictionary;
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("AddArea", SitemapDesignerClicks.SitemapDesignerAddAreaClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("AddGroup", SitemapDesignerClicks.SitemapDesignerAddGroupClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("AddSubArea", SitemapDesignerClicks.SitemapDesignerAddSubAreaClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("cloneButton", SitemapDesignerClicks.SitemapDesignerCloneClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("deleteButton", SitemapDesignerClicks.SitemapDesignerDeleteClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("SaveSiteMap", SitemapDesignerClicks.SitemapDesignerSaveClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("SaveandCloseSiteMap", SitemapDesignerClicks.SitemapDesignerSaveAndCloseClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("PublishSiteMap", SitemapDesignerClicks.SitemapDesignerPublishClick);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("SitemapDesignerDragDropUsage", SitemapDesignerClicks.SitemapDesignerDragDropUsage);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("SitemapDesignerRearrangeUsage", SitemapDesignerClicks.SitemapDesignerRearrangeUsage);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("DEL", SitemapDesignerClicks.SitemapDesignerDeleteShortcutKey);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("Ctrl+C", SitemapDesignerClicks.SitemapDesignerCloneShortcutKey);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("CTRL+S", SitemapDesignerClicks.SitemapDesignerSaveShortcutKey);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("CTRL+ALT+S", SitemapDesignerClicks.SitemapDesignerSaveAndCloseShortcutKey);
                        TelemetryDictionary.SitemapDesignerUserActions
                            .add("CTRL+ALT+P", SitemapDesignerClicks.SitemapDesignerPublishShortcutKey)
                    };
                    return TelemetryDictionary
                }();
                Constants.TelemetryDictionary = TelemetryDictionary
            })(Constants = Common.Constants || (Common.Constants = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var AppInterfaceConstants;
                (function(AppInterfaceConstants) {
                    var ServiceNames = function() {
                        function ServiceNames() {}

                        Object.defineProperty(ServiceNames,
                            "AppInterfacePlatformService",
                            {
                                "get": function() { return ServiceNames.appInterfacePlatformService },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ServiceNames,
                            "AppInterfaceBusinessLogicService",
                            {
                                "get": function() { return ServiceNames.appInterfaceBusinessLogicService },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ServiceNames,
                            "AppInterfaceCRUDOperations",
                            {
                                "get": function() { return ServiceNames.appInterfaceCRUDOperations },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ServiceNames,
                            "AppInterfaceValidationOperation",
                            {
                                "get": function() { return ServiceNames.appInterfaceValidationOperation },
                                enumerable: true,
                                configurable: true
                            });
                        ServiceNames.appInterfacePlatformService = "AppInterfacePlatformService";
                        ServiceNames.appInterfaceBusinessLogicService = "BusinessLogicBaseService";
                        ServiceNames.appInterfaceCRUDOperations = "AppInterfaceCRUDOperations";
                        ServiceNames.appInterfaceValidationOperation = "AppInterfaceValidationOperation";
                        return ServiceNames
                    }();
                    AppInterfaceConstants.ServiceNames = ServiceNames;
                    var Constants = function() {
                        function Constants() {}

                        Object.defineProperty(Constants,
                            "EntityNameKey",
                            {
                                "get": function() { return Constants.entityNameKey },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppModuleEntityName",
                            {
                                "get": function() { return Constants.appModuleEntityName },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppModuleIdAttribute",
                            {
                                "get": function() { return Constants.appModuleIdAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppNameAttribute",
                            {
                                "get": function() { return Constants.appNameAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppDescriptionAttribute",
                            {
                                "get": function() { return Constants.appDescriptionAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppWebResourceIdAttribute",
                            {
                                "get": function() { return Constants.appWebResourceIdAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppUniqueNameAttribute",
                            {
                                "get": function() { return Constants.appUniqueNameAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "UrlAttribute",
                            {
                                "get": function() { return Constants.urlAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppSolutionIdAttribute",
                            {
                                "get": function() { return Constants.appSolutionIdAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "AppModuleComponentEntity",
                            {
                                "get": function() { return Constants.appModuleComponentEntity },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "ObjectIdKey",
                            {
                                "get": function() { return Constants.objectIdKey },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        Object.defineProperty(Constants,
                            "ComponentTypeKey",
                            {
                                "get": function() { return Constants.componentTypeKey },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "ClientTypeKey",
                            {
                                "get": function() { return Constants.clientTypeKey },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "FormFactorKey",
                            {
                                "get": function() { return Constants.formFactorKey },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "SolutionUniqueNameKey",
                            {
                                "get": function() { return Constants.solutionUniqueNameKey },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "OdataRequest",
                            {
                                "get": function() { return Constants.oDataRequest },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "NotODataRequest",
                            {
                                "get": function() { return Constants.notODataRequest },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "SiteMapEntity",
                            {
                                "get": function() { return Constants.siteMapEntity },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "SiteMapIdAttribute",
                            {
                                "get": function() { return Constants.siteMapIdAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "SiteMapIsAppAwareAttribute",
                            {
                                "get": function() { return Constants.siteMapIsAppAwareAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "SiteMapDisplayNameAttribute",
                            {
                                "get": function() { return Constants.siteMapDisplayNameAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "SiteMapUniqueNameAttribute",
                            {
                                "get": function() { return Constants.siteMapUniqueNameAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "SiteMapXmlAttribute",
                            {
                                "get": function() { return Constants.siteMapXmlAttribute },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "ParameterXmlKey",
                            {
                                "get": function() { return Constants.parameterXmlKey },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(Constants,
                            "OrganizationEntity",
                            {
                                "get": function() { return Constants.organizationEntity },
                                enumerable: true,
                                configurable: true
                            });
                        Constants.entityNameKey = "entityname";
                        Constants.appModuleEntityName = "appmodule";
                        Constants.appModuleIdAttribute = "appmoduleid";
                        Constants.appNameAttribute = "name";
                        Constants.appDescriptionAttribute = "description";
                        Constants.appWebResourceIdAttribute = "webresourceid";
                        Constants.appUniqueNameAttribute = "uniquename";
                        Constants.urlAttribute = "url";
                        Constants.appSolutionIdAttribute = "solutionid";
                        Constants.appModuleComponentEntity = "appmodulecomponent";
                        Constants.objectIdKey = "objectid";
                        Constants.componentTypeKey = "componenttype";
                        Constants.clientTypeKey = "clienttype";
                        Constants.formFactorKey = "formfactor";
                        Constants.solutionUniqueNameKey = "SolutionUniqueName";
                        Constants.oDataRequest = true;
                        Constants.notODataRequest = false;
                        Constants.siteMapEntity = "sitemap";
                        Constants.siteMapIdAttribute = "sitemapid";
                        Constants.siteMapIsAppAwareAttribute = "isappaware";
                        Constants.siteMapDisplayNameAttribute = "sitemapname";
                        Constants.siteMapUniqueNameAttribute = "sitemapnameunique";
                        Constants.siteMapXmlAttribute = "sitemapxml";
                        Constants.parameterXmlKey = "ParameterXml";
                        Constants.organizationEntity = "organization";
                        return Constants
                    }();
                    AppInterfaceConstants.Constants = Constants
                })(AppInterfaceConstants = AppInterface.AppInterfaceConstants ||
                    (AppInterface.AppInterfaceConstants = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    "use strict";
                    var ActionItem = function() {
                        function ActionItem(isODataRequest, url, method, data) {
                            this.IsODataRequest = isODataRequest;
                            this.Url = url;
                            this.Method = method;
                            this.Data = data
                        }

                        return ActionItem
                    }();
                    BusinessLogic.ActionItem = ActionItem
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    "use strict";
                    (function(ActionKey) {
                        ActionKey[ActionKey["AppCreate"] = 0] = "AppCreate";
                        ActionKey[ActionKey["AppRetrieve"] = 1] = "AppRetrieve";
                        ActionKey[ActionKey["AppUpdate"] = 2] = "AppUpdate";
                        ActionKey[ActionKey["AppDelete"] = 3] = "AppDelete";
                        ActionKey[ActionKey["SiteMapUpdate"] = 4] = "SiteMapUpdate";
                        ActionKey[ActionKey["SiteMapCreate"] = 5] = "SiteMapCreate";
                        ActionKey[ActionKey["SiteMapRetrive"] = 6] = "SiteMapRetrive";
                        ActionKey[ActionKey["AppValidate"] = 7] = "AppValidate";
                        ActionKey[ActionKey["DefaultSiteMapRetrieve"] = 8] = "DefaultSiteMapRetrieve";
                        ActionKey[ActionKey["SiteMapRetreiveDashboardList"] = 9] = "SiteMapRetreiveDashboardList";
                        ActionKey[ActionKey["RetreiveEntityList"] = 10] = "RetreiveEntityList";
                        ActionKey[ActionKey["SiteMapRetreiveWebResourceList"] = 11] = "SiteMapRetreiveWebResourceList";
                        ActionKey[ActionKey["SiteMapRetreiveLanguageLocaleList"] = 12] =
                            "SiteMapRetreiveLanguageLocaleList";
                        ActionKey[ActionKey["SiteMapPublishAll"] = 13] = "SiteMapPublishAll";
                        ActionKey[ActionKey["SiteMapRetriveByUniqueName"] = 14] = "SiteMapRetriveByUniqueName";
                        ActionKey[ActionKey["OrganizationRetrieve"] = 15] = "OrganizationRetrieve";
                        ActionKey[ActionKey["RetreiveAllEntityList"] = 16] = "RetreiveAllEntityList"
                    })(BusinessLogic.ActionKey || (BusinessLogic.ActionKey = {}));
                    var ActionKey = BusinessLogic.ActionKey
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    "use strict";
                    var BusinessLogicBase = function() {
                        function BusinessLogicBase(platformService, urlHelperService) {
                            this.platformService = platformService;
                            this.urlHelperService = urlHelperService;
                            this.InitActionDictionary();
                            Sdk.Util.setClientUrl(this.urlHelperService.ClientUrl)
                        }

                        BusinessLogicBase.prototype.GetAttributeBase = function(type, name, value) {
                            switch (type) {
                            case Common.Models.AttributeType.Boolean:
                                return new Sdk.Boolean(name, value);
                            case Common.Models.AttributeType.DateTime:
                                return new Sdk.DateTime(name, value);
                            case Common.Models.AttributeType.Decimal:
                                return new Sdk.Decimal(name, value);
                            case Common.Models.AttributeType.Guid:
                                return new Sdk.Guid(name, value);
                            case Common.Models.AttributeType.Int:
                                return new Sdk.Int(name, value);
                            case Common.Models.AttributeType.String:
                                return new Sdk.String(name, value)
                            }
                        };
                        BusinessLogicBase.prototype.InitActionDictionary = function() {
                            this.actionDictionary = {};
                            this.InitSitemapDataInDictionary()
                        };
                        BusinessLogicBase.prototype.InitSitemapDataInDictionary = function() {
                            this.actionDictionary[BusinessLogic.ActionKey
                                    .SiteMapRetreiveDashboardList] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.DashboardListUrlEndpoint,
                                    this.urlHelperService.GetMethod,
                                    null);
                            this.actionDictionary[BusinessLogic.ActionKey.RetreiveEntityList] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.EntityListRetrieveUrl,
                                    this.urlHelperService.GetMethod,
                                    null);
                            this.actionDictionary[BusinessLogic.ActionKey.RetreiveAllEntityList] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.AllEntityListRetrieveUrl,
                                    this.urlHelperService.GetMethod,
                                    null);
                            this.actionDictionary[BusinessLogic.ActionKey
                                    .SiteMapRetreiveWebResourceList] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.WebresourceUrlEndpoint,
                                    this.urlHelperService.GetMethod,
                                    null);
                            this.actionDictionary[BusinessLogic.ActionKey
                                    .SiteMapRetreiveLanguageLocaleList] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.LanguageLocaleUrlEndpoint,
                                    this.urlHelperService.GetMethod,
                                    null);
                            var data = {};
                            data[AppInterface.AppInterfaceConstants.Constants.ParameterXmlKey] = null;
                            this.actionDictionary[BusinessLogic.ActionKey.SiteMapPublishAll] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.PublishXmlEndpoint,
                                    this.urlHelperService.PostMethod,
                                    data)
                        };
                        BusinessLogicBase.prototype.GetData = function(actionKey, parameters, onSuccess, onFailure) {
                            var item = this.actionDictionary[actionKey];
                            if (Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(item)) throw Common.Constants.ErrorStrings.KeyNotInActionDictionary;
                            if (item.IsODataRequest) {
                                var urlString = item.Url;
                                if (!Common.Utility.StringUtilities.IsNullOrEmpty(urlString)) {
                                    if (Common.Utility.StringUtilities
                                        .IsNullOrEmpty(item
                                            .Method))
                                        throw Common.Constants.ErrorStrings.MethodNotDefinedInActionDictionary;
                                    if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(parameters) &&
                                        parameters.length > 0)
                                        if (item
                                            .Method ===
                                            this.urlHelperService
                                            .GetMethod)
                                            urlString = Common.Utility.StringUtilities.Format(urlString, parameters);
                                        else if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(item.Data)) {
                                            var index = 0;
                                            for (var key in item.Data) item.Data[key] = parameters[index++]
                                        }
                                    if (Common.Utility.ScriptUtilities.IsNullOrUndefined(onSuccess) &&
                                        Common.Utility.ScriptUtilities
                                        .IsNullOrUndefined(onFailure)
                                    ) return this.platformService.ODataRequest(urlString, item.Method, item.Data);
                                    else
                                        this.platformService
                                            .ODataRequest(urlString, item.Method, item.Data, onSuccess, onFailure)
                                } else throw Common.Constants.ErrorStrings.UrlNotDefinedInActionDictionary
                            } else throw Common.Constants.ErrorStrings.ActionNotSupported
                        };
                        BusinessLogicBase.$inject = [
                            AppInterface.AppInterfaceConstants.ServiceNames.AppInterfacePlatformService, Common
                            .Constants.ServiceNames.UrlHelperService
                        ];
                        return BusinessLogicBase
                    }();
                    BusinessLogic.BusinessLogicBase = BusinessLogicBase;
                    Common.CommonModule.service(AppInterface.AppInterfaceConstants.ServiceNames
                        .AppInterfaceBusinessLogicService,
                        BusinessLogicBase)
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
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
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    "use strict";
                    var CRUDOperations = function(_super) {
                        __extends(CRUDOperations, _super);

                        function CRUDOperations(platformService, urlHelperService, localizationService) {
                            _super.call(this, platformService, urlHelperService);
                            this.platformService = platformService;
                            this.urlHelperService = urlHelperService;
                            this.localizationService = localizationService;
                            this.InitDictionary()
                        }

                        CRUDOperations.prototype.InitDictionary = function() {
                            var data = {};
                            data[AppInterface.AppInterfaceConstants.Constants.EntityNameKey] = AppInterface
                                .AppInterfaceConstants.Constants.AppModuleEntityName;
                            this.actionDictionary[BusinessLogic.ActionKey.AppCreate] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                    this.urlHelperService.EmptyUrl,
                                    this.urlHelperService.GetMethod,
                                    data);
                            this.actionDictionary[BusinessLogic.ActionKey.AppRetrieve] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                    this.urlHelperService.EmptyUrl,
                                    this.urlHelperService.GetMethod,
                                    data);
                            this.actionDictionary[BusinessLogic.ActionKey.AppUpdate] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                    this.urlHelperService.EmptyUrl,
                                    this.urlHelperService.GetMethod,
                                    data);
                            this.actionDictionary[BusinessLogic.ActionKey.AppDelete] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                    this.urlHelperService.EmptyUrl,
                                    this.urlHelperService.GetMethod,
                                    data);
                            this.InitSitemapDictionary()
                        };
                        CRUDOperations.prototype.InitSitemapDictionary = function() {
                            var siteMapData = {};
                            siteMapData[AppInterface.AppInterfaceConstants.Constants.EntityNameKey] = AppInterface
                                .AppInterfaceConstants.Constants.SiteMapEntity;
                            var organizationData = {};
                            organizationData[AppInterface.AppInterfaceConstants.Constants.EntityNameKey] = AppInterface
                                .AppInterfaceConstants.Constants.OrganizationEntity;
                            this.actionDictionary[BusinessLogic.ActionKey.SiteMapUpdate] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                    this.urlHelperService.EmptyUrl,
                                    this.urlHelperService.GetMethod,
                                    siteMapData);
                            this.actionDictionary[BusinessLogic.ActionKey.SiteMapCreate] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                    this.urlHelperService.EmptyUrl,
                                    this.urlHelperService.GetMethod,
                                    siteMapData);
                            this.actionDictionary[BusinessLogic.ActionKey.SiteMapRetrive] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.GetUnpublishedSiteMapUrl,
                                    this.urlHelperService.GetMethod,
                                    null);
                            this.actionDictionary[BusinessLogic.ActionKey
                                    .SiteMapRetriveByUniqueName] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.GetSiteMapByUniqueNameUrl,
                                    this.urlHelperService.GetMethod,
                                    null);
                            this.actionDictionary[BusinessLogic.ActionKey.DefaultSiteMapRetrieve] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.OdataRequest,
                                    this.urlHelperService.GetDefaultSiteMapUrl,
                                    this.urlHelperService.GetMethod,
                                    null);
                            this.actionDictionary[BusinessLogic.ActionKey.OrganizationRetrieve] = new BusinessLogic
                                .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                    this.urlHelperService.EmptyUrl,
                                    this.urlHelperService.GetMethod,
                                    organizationData)
                        };
                        CRUDOperations.prototype.Create = function(actionKey, attributes, onSuccess, onFailure) {
                            var _this = this, item = this.actionDictionary[actionKey];
                            if (Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(item)) throw Common.Constants.ErrorStrings.KeyNotInActionDictionary;
                            if (item.IsODataRequest)
                                this.platformService
                                    .ODataRequest(item.Url, item.Method, item.Data, onSuccess, onFailure);
                            else {
                                var entity = new Sdk.Entity(item.Data[AppInterface.AppInterfaceConstants.Constants
                                    .EntityNameKey]);
                                attributes.forEach(function(attribute, index, attributes) {
                                    entity.addAttribute(_this
                                        .GetAttributeBase(attribute.Type, attribute.Name, attribute.Value))
                                });
                                Sdk.Async.create(entity,
                                    function(newlyCreatedRecordID) { onSuccess(newlyCreatedRecordID) },
                                    function(errorObject) { onFailure(errorObject) })
                            }
                        };
                        CRUDOperations.prototype.Update = function(actionKey, attributes, onSuccess, onFailure) {
                            var _this = this, item = this.actionDictionary[actionKey];
                            if (Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(item)) throw Common.Constants.ErrorStrings.KeyNotInActionDictionary;
                            if (item.IsODataRequest)
                                this.platformService
                                    .ODataRequest(item.Url, item.Method, item.Data, onSuccess, onFailure);
                            else {
                                var entity = new Sdk.Entity(item.Data[AppInterface.AppInterfaceConstants.Constants
                                    .EntityNameKey]);
                                attributes.forEach(function(attribute, index, attributes) {
                                    entity.addAttribute(_this
                                        .GetAttributeBase(attribute.Type, attribute.Name, attribute.Value))
                                });
                                Sdk.Async.update(entity, onSuccess, onFailure)
                            }
                        };
                        CRUDOperations.prototype.Delete = function(actionKey, recordId, onSuccess, onFailure) {
                            var item = this.actionDictionary[actionKey];
                            if (Common.Utility.ScriptUtilities
                                .IsNullOrUndefined(item)) throw Common.Constants.ErrorStrings.KeyNotInActionDictionary;
                            if (item.IsODataRequest)
                                this.platformService
                                    .ODataRequest(item.Url, item.Method, item.Data, onSuccess, onFailure);
                            else {
                                var entityName = item.Data[AppInterface.AppInterfaceConstants.Constants.EntityNameKey];
                                Sdk.Async.del(entityName, recordId.ToString(), onSuccess, onFailure)
                            }
                        };
                        CRUDOperations.prototype
                            .AddEditAppModuleComponents =
                            function(attributes, appComponents, onSuccess, onFailure, isRetainAppModuleComponents) {
                                var _this = this;
                                if (isRetainAppModuleComponents === void 0) isRetainAppModuleComponents = false;
                                var app = new Sdk.Entity(AppInterface.AppInterfaceConstants.Constants
                                    .AppModuleEntityName);
                                attributes.forEach(function(attribute, index, attributes) {
                                    app.addAttribute(_this
                                        .GetAttributeBase(attribute.Type, attribute.Name, attribute.Value))
                                });
                                var entityCollection, collctn = new Sdk.Collection(Sdk.Entity);
                                !Common.Utility.ScriptUtilities.IsNullOrUndefined(appComponents) &&
                                    appComponents.forEach(function(value, index, appComponents) {
                                        var appModuleComponent = new Sdk
                                            .Entity(AppInterface.AppInterfaceConstants.Constants
                                                .AppModuleComponentEntity);
                                        appModuleComponent
                                            .addAttribute(new Sdk
                                                .Guid(AppInterface.AppInterfaceConstants.Constants.ObjectIdKey,
                                                    value.ObjectId.ToString()));
                                        appModuleComponent
                                            .addAttribute(new Sdk
                                                .OptionSet(AppInterface.AppInterfaceConstants.Constants
                                                    .ComponentTypeKey,
                                                    value.ObjTypeCode));
                                        collctn.add(appModuleComponent)
                                    });
                                entityCollection = new Sdk.EntityCollection(collctn);
                                (Common.Utility.ScriptUtilities.IsNullOrUndefined(appComponents) ||
                                        appComponents.length == 0) &&
                                    entityCollection
                                    .setEntityName(AppInterface.AppInterfaceConstants.Constants
                                        .AppModuleComponentEntity);
                                var request = new BusinessLogic.ServiceRequests
                                    .AddEditModuleRequest(app, entityCollection, false, isRetainAppModuleComponents);
                                Sdk.Async.execute(request, onSuccess, onFailure)
                            };
                        CRUDOperations.prototype
                            .CreateAppModule = function(attributes, solutionUniqueName, onSuccess, onFailure) {
                                var _this = this,
                                    app = new Sdk.Entity(AppInterface.AppInterfaceConstants.Constants
                                        .AppModuleEntityName);
                                attributes.forEach(function(attribute, index, attributes) {
                                    app.addAttribute(_this
                                        .GetAttributeBase(attribute.Type, attribute.Name, attribute.Value))
                                });
                                var solutionUniqueNameAttribute = this
                                        .GetAttributeBase(Common.Models.AttributeType.String,
                                            Common.AppInterface.AppInterfaceConstants.Constants.SolutionUniqueNameKey,
                                            solutionUniqueName),
                                    request = new BusinessLogic.ServiceRequests
                                        .AppModuleCreateRequest(app, solutionUniqueNameAttribute);
                                Sdk.Async.execute(request,
                                    function(response) {
                                        if (Common.Utility.ScriptUtilities.IsNullOrUndefined(response.ID)) {
                                            onFailure(new Error("AppDesigner.Error_EditEntityFormOpen"));
                                            return
                                        }
                                        onSuccess(response.ID)
                                    },
                                    onFailure)
                            };
                        CRUDOperations.prototype.CreateSitemap = function(attributes, onSuccess, onFailure) {
                            var _this = this,
                                sitemap = new Sdk.Entity(AppInterface.AppInterfaceConstants.Constants.SiteMapEntity);
                            attributes.forEach(function(attribute, index, attributes) {
                                sitemap.addAttribute(_this
                                    .GetAttributeBase(attribute.Type, attribute.Name, attribute.Value))
                            });
                            var request = new BusinessLogic.ServiceRequests.SitemapCreateRequest(sitemap);
                            Sdk.Async.execute(request,
                                function(response) {
                                    if (Common.Utility.ScriptUtilities.IsNullOrUndefined(response.ID)) {
                                        onFailure(new Error("AppDesigner.Error_EditEntityFormOpen"));
                                        return
                                    }
                                    onSuccess(response.ID)
                                },
                                onFailure)
                        };
                        CRUDOperations.prototype.RetrieveAppComponents = function(appId, onSuccess, onFailure) {
                            var request = new BusinessLogic.ServiceRequests.RetrieveAppModuleRequest(appId);
                            Sdk.Async.execute(request, function(response) { onSuccess(response.XML) }, onFailure)
                        };
                        CRUDOperations.prototype.PublishAppModule = function(appModuleId, onSuccess, onFailure) {
                            var request = new BusinessLogic.ServiceRequests.PublishAppRequest(appModuleId);
                            Sdk.Async.execute(request, onSuccess, onFailure)
                        };
                        CRUDOperations.prototype
                            .Retrieve = function(actionKey, recordId, attributes, onSuccess, onFailure) {
                                var item = this.actionDictionary[actionKey];
                                if (Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(item)
                                ) throw Common.Constants.ErrorStrings.KeyNotInActionDictionary;
                                if (item.IsODataRequest)
                                    this.platformService
                                        .ODataRequest(item.Url, item.Method, item.Data, onSuccess, onFailure);
                                else {
                                    var columnSet = new Sdk.ColumnSet;
                                    attributes.forEach(function(attribute, index, attributes) {
                                        columnSet.addColumn(attribute.Name)
                                    });
                                    Sdk.Async.retrieve(item.Data[AppInterface.AppInterfaceConstants.Constants
                                            .EntityNameKey],
                                        recordId.toString(),
                                        columnSet,
                                        onSuccess,
                                        onFailure)
                                }
                            };
                        CRUDOperations.$inject = [
                            AppInterface.AppInterfaceConstants.ServiceNames.AppInterfacePlatformService, Common
                            .Constants.ServiceNames.UrlHelperService, Common.Constants.ServiceNames.LocalizationService
                        ];
                        return CRUDOperations
                    }(BusinessLogic.BusinessLogicBase);
                    BusinessLogic.CRUDOperations = CRUDOperations;
                    Common.CommonModule.service(AppInterface.AppInterfaceConstants.ServiceNames
                        .AppInterfaceCRUDOperations,
                        BusinessLogic.CRUDOperations)
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    var ServiceRequests;
                    (function(ServiceRequests) {
                        "use strict";
                        var AddEditModuleRequest = function(_super) {
                            __extends(AddEditModuleRequest, _super);

                            function AddEditModuleRequest(appModuleEntity,
                                appComponents,
                                isNew,
                                isRetainAppModuleComponents) {
                                if (isRetainAppModuleComponents === void 0) isRetainAppModuleComponents = false;
                                if (appModuleEntity == null ||
                                    appModuleEntity == undefined ||
                                    appComponents == null ||
                                    appComponents == undefined) throw"Invalid request. Missing parameters";
                                _super.call(this);
                                this.appComponents = appComponents;
                                this.appModule = appModuleEntity;
                                this.isNew = isNew;
                                this.getRequestXml = function() {
                                    return [
                                        "<d:request>", "<a:Parameters>", "<a:KeyValuePairOfstringanyType>",
                                        "<b:key>AppModule</b:key>",
                                        [
                                            '<b:value i:type="a:Entity">', this.AppModule
                                            .toValueXml(this.IsNew ? "create" : "update"), "</b:value>"
                                        ].join(""), "</a:KeyValuePairOfstringanyType>",
                                        "<a:KeyValuePairOfstringanyType>", "<b:key>AppModuleComponents</b:key>",
                                        [
                                            '<b:value i:type="a:EntityCollection">', this.AppComponents.toValueXml(),
                                            "</b:value>"
                                        ].join(""), "</a:KeyValuePairOfstringanyType>",
                                        "<a:KeyValuePairOfstringanyType>", "<b:key>IsNew</b:key>",
                                        ['<b:value i:type="c:boolean">', this.IsNew, "</b:value>"].join(""),
                                        "</a:KeyValuePairOfstringanyType>", "<a:KeyValuePairOfstringanyType>",
                                        "<b:key>RetainAppModuleComponents</b:key>",
                                        ['<b:value i:type="c:boolean">', isRetainAppModuleComponents, "</b:value>"]
                                        .join(""), "</a:KeyValuePairOfstringanyType>", "</a:Parameters>",
                                        '<a:RequestId i:nil="true" />',
                                        "<a:RequestName>AddEditAppModule</a:RequestName>", "</d:request>"
                                    ].join("")
                                };
                                AddEditModuleResponse.prototype.type = "Sdk.OrganizationResponse";
                                this.setResponseType(AddEditModuleResponse)
                            }

                            Object.defineProperty(AddEditModuleRequest.prototype,
                                "AppComponents",
                                {
                                    "get": function() { return this.appComponents },
                                    enumerable: true,
                                    configurable: true
                                });
                            Object.defineProperty(AddEditModuleRequest.prototype,
                                "AppModule",
                                { "get": function() { return this.appModule }, enumerable: true, configurable: true });
                            Object.defineProperty(AddEditModuleRequest.prototype,
                                "IsNew",
                                { "get": function() { return this.isNew }, enumerable: true, configurable: true });
                            return AddEditModuleRequest
                        }(Sdk.OrganizationRequest);
                        ServiceRequests.AddEditModuleRequest = AddEditModuleRequest;
                        var AddEditModuleResponse = function() {
                            function AddEditModuleResponse(xml) {
                                if (!(this instanceof AddEditModuleResponse)) return new AddEditModuleResponse(xml);
                                this.setEntityCollection(xml)
                            }

                            Object.defineProperty(AddEditModuleResponse.prototype,
                                "EntityCollection",
                                {
                                    "get": function() { return this.entityCollection },
                                    enumerable: true,
                                    configurable: true
                                });
                            AddEditModuleResponse.prototype.setEntityCollection = function(xml) {
                                if (xml != null) {
                                    var valueNode = Sdk.Xml
                                        .selectSingleNode(xml,
                                            "//a:KeyValuePairOfstringanyType[b:key='EntityCollection']/b:value");
                                    if (!Sdk.Xml
                                        .isNodeNull(valueNode)
                                    ) this.entityCollection = Sdk.Util.createEntityCollectionFromNode(valueNode)
                                }
                            };
                            return AddEditModuleResponse
                        }();
                        ServiceRequests.AddEditModuleResponse = AddEditModuleResponse
                    })(ServiceRequests = BusinessLogic.ServiceRequests || (BusinessLogic.ServiceRequests = {}))
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    var ServiceRequests;
                    (function(ServiceRequests) {
                        "use strict";
                        var AppModuleCreateRequest = function(_super) {
                            __extends(AppModuleCreateRequest, _super);

                            function AppModuleCreateRequest(appModuleEntity, solutionUniqueNameAttribute) {
                                if (Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(appModuleEntity)) throw"Invalid request. Missing parameters";
                                _super.call(this);
                                this.appModule = appModuleEntity;
                                this.getRequestXml = function() {
                                    return [
                                        "<d:request>", "<a:Parameters>", "<a:KeyValuePairOfstringanyType>",
                                        "<b:key>Target</b:key>",
                                        [
                                            '<b:value i:type="a:Entity">', this.AppModule.toValueXml("create"),
                                            "</b:value>"
                                        ].join(""), "</a:KeyValuePairOfstringanyType>", solutionUniqueNameAttribute
                                        .toXml(null), "</a:Parameters>", '<a:RequestId i:nil="true" />',
                                        "<a:RequestName>Create</a:RequestName>", "</d:request>"
                                    ].join("")
                                };
                                AppModuleCreateResponse.prototype.type = "Sdk.OrganizationResponse";
                                this.setResponseType(AppModuleCreateResponse)
                            }

                            Object.defineProperty(AppModuleCreateRequest.prototype,
                                "AppModule",
                                { "get": function() { return this.appModule }, enumerable: true, configurable: true });
                            return AppModuleCreateRequest
                        }(Sdk.OrganizationRequest);
                        ServiceRequests.AppModuleCreateRequest = AppModuleCreateRequest;
                        var AppModuleCreateResponse = function() {
                            function AppModuleCreateResponse(xml) {
                                if (!(this instanceof AppModuleCreateResponse)) return new AppModuleCreateResponse(xml);
                                this.setId(xml)
                            }

                            Object.defineProperty(AppModuleCreateResponse.prototype,
                                "ID",
                                { "get": function() { return this.id }, enumerable: true, configurable: true });
                            AppModuleCreateResponse.prototype.setId = function(xml) {
                                if (xml != null) {
                                    var valueNode = Sdk.Xml
                                        .selectSingleNode(xml, "//a:KeyValuePairOfstringanyType[b:key='id']/b:value");
                                    if (!Sdk.Xml
                                        .isNodeNull(valueNode)
                                    )
                                        if (!Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(valueNode.firstChild)
                                        ) this.id = valueNode.firstChild.nodeValue
                                }
                            };
                            return AppModuleCreateResponse
                        }();
                        ServiceRequests.AppModuleCreateResponse = AppModuleCreateResponse
                    })(ServiceRequests = BusinessLogic.ServiceRequests || (BusinessLogic.ServiceRequests = {}))
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    var ServiceRequests;
                    (function(ServiceRequests) {
                        "use strict";
                        var SitemapCreateRequest = function(_super) {
                            __extends(SitemapCreateRequest, _super);

                            function SitemapCreateRequest(SitemapEntity) {
                                if (Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(SitemapEntity)) throw"Invalid request. Missing parameters";
                                _super.call(this);
                                this.sitemap = SitemapEntity;
                                this.getRequestXml = function() {
                                    return [
                                        "<d:request>", "<a:Parameters>", "<a:KeyValuePairOfstringanyType>",
                                        "<b:key>Target</b:key>",
                                        ['<b:value i:type="a:Entity">', this.Sitemap.toValueXml("create"), "</b:value>"]
                                        .join(""), "</a:KeyValuePairOfstringanyType>", "</a:Parameters>",
                                        '<a:RequestId i:nil="true" />', "<a:RequestName>Create</a:RequestName>",
                                        "</d:request>"
                                    ].join("")
                                };
                                SitemapCreateResponse.prototype.type = "Sdk.OrganizationResponse";
                                this.setResponseType(SitemapCreateResponse)
                            }

                            Object.defineProperty(SitemapCreateRequest.prototype,
                                "Sitemap",
                                { "get": function() { return this.sitemap }, enumerable: true, configurable: true });
                            return SitemapCreateRequest
                        }(Sdk.OrganizationRequest);
                        ServiceRequests.SitemapCreateRequest = SitemapCreateRequest;
                        var SitemapCreateResponse = function() {
                            function SitemapCreateResponse(xml) {
                                if (!(this instanceof SitemapCreateResponse)) return new SitemapCreateResponse(xml);
                                this.setId(xml)
                            }

                            Object.defineProperty(SitemapCreateResponse.prototype,
                                "ID",
                                { "get": function() { return this.id }, enumerable: true, configurable: true });
                            SitemapCreateResponse.prototype.setId = function(xml) {
                                if (xml != null) {
                                    var valueNode = Sdk.Xml
                                        .selectSingleNode(xml, "//a:KeyValuePairOfstringanyType[b:key='id']/b:value");
                                    if (!Sdk.Xml
                                        .isNodeNull(valueNode)
                                    )
                                        if (!Common.Utility.ScriptUtilities
                                            .IsNullOrUndefined(valueNode.firstChild)
                                        ) this.id = valueNode.firstChild.nodeValue
                                }
                            };
                            return SitemapCreateResponse
                        }();
                        ServiceRequests.SitemapCreateResponse = SitemapCreateResponse
                    })(ServiceRequests = BusinessLogic.ServiceRequests || (BusinessLogic.ServiceRequests = {}))
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    var ServiceRequests;
                    (function(ServiceRequests) {
                        "use strict";
                        var PublishAppRequest = function(_super) {
                            __extends(PublishAppRequest, _super);

                            function PublishAppRequest(appModuleId) {
                                if (Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(appModuleId)) throw"Invalid request. Missing parameters";
                                _super.call(this);
                                this.appModuleId = appModuleId;
                                this.getRequestXml = function() {
                                    return [
                                        "<d:request>", "<a:Parameters>", "<a:KeyValuePairOfstringanyType>",
                                        "<b:key>AppModuleId</b:key>",
                                        ['<b:value i:type="e:guid">', this.appModuleId.ToString(), "</b:value>"]
                                        .join(""), "</a:KeyValuePairOfstringanyType>", "</a:Parameters>",
                                        '<a:RequestId i:nil="true" />',
                                        "<a:RequestName>PublishAppModule</a:RequestName>", "</d:request>"
                                    ].join("")
                                };
                                PublishAppResponse.prototype.type = "Sdk.OrganizationResponse";
                                this.setResponseType(PublishAppResponse)
                            }

                            Object.defineProperty(PublishAppRequest.prototype,
                                "AppModuleId",
                                {
                                    "get": function() { return this.appModuleId },
                                    enumerable: true,
                                    configurable:
                                        true
                                });
                            return PublishAppRequest
                        }(Sdk.OrganizationRequest);
                        ServiceRequests.PublishAppRequest = PublishAppRequest;
                        var PublishAppResponse = function() {
                            function PublishAppResponse(xml) {
                                if (!(this instanceof PublishAppResponse)) return new PublishAppResponse(xml)
                            }

                            return PublishAppResponse
                        }();
                        ServiceRequests.PublishAppResponse = PublishAppResponse
                    })(ServiceRequests = BusinessLogic.ServiceRequests || (BusinessLogic.ServiceRequests = {}))
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    var ServiceRequests;
                    (function(ServiceRequests) {
                        "use strict";
                        var ValidateAppModuleRequest = function(_super) {
                            __extends(ValidateAppModuleRequest, _super);

                            function ValidateAppModuleRequest(appModuleId) {
                                if (Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(appModuleId)) throw"Invalid request. Missing parameters";
                                _super.call(this);
                                this.appModuleId = appModuleId;
                                this.getRequestXml = function() {
                                    return [
                                        "<d:request>", "<a:Parameters>", "<a:KeyValuePairOfstringanyType>",
                                        "<b:key>AppModuleId</b:key>",
                                        ['<b:value i:type="e:guid">', this.AppModuleId.ToString(), "</b:value>"]
                                        .join(""), "</a:KeyValuePairOfstringanyType>", "</a:Parameters>",
                                        '<a:RequestId i:nil="true" />',
                                        "<a:RequestName>ValidateAppModule</a:RequestName>", "</d:request>"
                                    ].join("")
                                };
                                ValidateAppModuleResponse.prototype.type = "Sdk.OrganizationResponse";
                                this.setResponseType(ValidateAppModuleResponse)
                            }

                            Object.defineProperty(ValidateAppModuleRequest.prototype,
                                "AppModuleId",
                                {
                                    "get": function() { return this.appModuleId },
                                    enumerable: true,
                                    configurable:
                                        true
                                });
                            return ValidateAppModuleRequest
                        }(Sdk.OrganizationRequest);
                        ServiceRequests.ValidateAppModuleRequest = ValidateAppModuleRequest;
                        var ValidateAppModuleResponse = function() {
                            function ValidateAppModuleResponse(xml) {
                                if (!(this instanceof ValidateAppModuleResponse)
                                ) return new ValidateAppModuleResponse(xml);
                                this.parseXml(xml)
                            }

                            Object.defineProperty(ValidateAppModuleResponse.prototype,
                                "CanBeActivated",
                                {
                                    "get": function() { return this.canBeActivated },
                                    enumerable: true,
                                    configurable: true
                                });
                            Object.defineProperty(ValidateAppModuleResponse.prototype,
                                "ValidationIssues",
                                {
                                    "get": function() { return this.validationIssues },
                                    enumerable: true,
                                    configurable: true
                                });
                            ValidateAppModuleResponse.prototype.parseXml = function(xml) {
                                if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(xml)) {
                                    var valueNode = Sdk.Xml
                                            .selectSingleNode(xml,
                                                "//a:KeyValuePairOfstringanyType[b:key='AppModuleValidation']/b:value"),
                                        childNodes = valueNode.childNodes;
                                    if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(childNodes) &&
                                        childNodes.length == 2) {
                                        var canBeActivated = this.getNodeValue(childNodes.item(0));
                                        if (!Common.Utility.StringUtilities
                                            .IsNullOrEmpty(canBeActivated)
                                        ) this.canBeActivated = canBeActivated === "false" ? false : true;
                                        var validationIssuesNodeList = childNodes.item(1).childNodes;
                                        if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(validationIssuesNodeList))
                                            for (var issueNode,
                                                componentId,
                                                componentType,
                                                componentName,
                                                componentSubType,
                                                parentEntityId,
                                                parentEntityName,
                                                errorType,
                                                message,
                                                requiredComponents,
                                                len,
                                                node,
                                                nodeValue,
                                                validationIssueIndex = 0;
                                                validationIssueIndex < validationIssuesNodeList.length;
                                                validationIssueIndex++) {
                                                issueNode = validationIssuesNodeList.item(validationIssueIndex);
                                                if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(issueNode)) {
                                                    var issueNodeChilds = issueNode.childNodes;
                                                    if (!Common.Utility.ScriptUtilities
                                                        .IsNullOrUndefined(issueNodeChilds)) {
                                                        len = issueNodeChilds.length;
                                                        for (var n = 0; n < len; n++) {
                                                            node = issueNodeChilds.item(n);
                                                            nodeValue = this.getNodeValue(node);
                                                            switch (node.nodeName.toLowerCase()) {
                                                            case "c:componentid":
                                                                componentId =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? null
                                                                    : new Common.Guid(nodeValue);
                                                                break;
                                                            case "c:componenttype":
                                                                componentType =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? -1
                                                                    : parseInt(nodeValue);
                                                                break;
                                                            case "c:errortype":
                                                                errorType =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? 1
                                                                    : nodeValue === "Warning"
                                                                    ? Common.Models.ErrorType.Warning
                                                                    : Common.Models.ErrorType.Error;
                                                                break;
                                                            case "c:message":
                                                                message =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? Common.Utility.StringUtilities.EmptyString
                                                                    : nodeValue;
                                                                break;
                                                            case "c:requiredcomponents":
                                                                requiredComponents = this.parseRequiredComponents(node);
                                                                break;
                                                            case "c:displayname":
                                                                componentName =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? Common.Utility.StringUtilities.EmptyString
                                                                    : nodeValue;
                                                                break;
                                                            case "c:componentsubtype":
                                                                componentSubType =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? -1
                                                                    : parseInt(nodeValue);
                                                                break;
                                                            case "c:parententityid":
                                                                parentEntityId =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? null
                                                                    : new Common.Guid(nodeValue);
                                                                break;
                                                            case "c:parententityname":
                                                                parentEntityName =
                                                                    Common.Utility.StringUtilities
                                                                    .IsNullOrEmpty(nodeValue)
                                                                    ? Common.Utility.StringUtilities.EmptyString
                                                                    : nodeValue;
                                                                break
                                                            }
                                                        }
                                                        var
                                                            validationIssue = new Common.Models
                                                                .ValidationIssue(errorType,
                                                                    message,
                                                                    componentId,
                                                                    componentName,
                                                                    componentType,
                                                                    requiredComponents,
                                                                    componentSubType,
                                                                    parentEntityId,
                                                                    parentEntityName);
                                                        if (this.validationIssues == null) this.validationIssues = [];
                                                        this.validationIssues.push(validationIssue)
                                                    }
                                                }
                                            }
                                    }
                                }
                            };
                            ValidateAppModuleResponse.prototype.getNodeValue = function(node) {
                                if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(node) &&
                                    !Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(node.firstChild)) return node.firstChild.nodeValue;
                                return null
                            };
                            ValidateAppModuleResponse.prototype.parseRequiredComponents = function(node) {
                                if (Common.Utility.ScriptUtilities.IsNullOrUndefined(node)) return null;
                                var components = [], childNodes = node.childNodes;
                                if (Common.Utility.ScriptUtilities.IsNullOrUndefined(childNodes)) return components;
                                for (var childNodeIndex = 0; childNodeIndex < childNodes.length; childNodeIndex++) {
                                    var componentNode = childNodes.item(childNodeIndex);
                                    if (Common.Utility.ScriptUtilities.IsNullOrUndefined(componentNode)) continue;
                                    var componentAttributesList = componentNode.childNodes;
                                    if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(componentAttributesList) &&
                                        componentAttributesList.length == 7) {
                                        var retrievedValue = this.getNodeValue(componentAttributesList.item(0)),
                                            componentId = Common.Utility.StringUtilities.IsNullOrEmpty(retrievedValue)
                                                ? null
                                                : new Common.Guid(retrievedValue);
                                        retrievedValue = this.getNodeValue(componentAttributesList.item(1));
                                        var componentSubType =
                                            Common.Utility.StringUtilities.IsNullOrEmpty(retrievedValue)
                                                ? -1
                                                : parseInt(retrievedValue);
                                        retrievedValue = this.getNodeValue(componentAttributesList.item(2));
                                        var componentType =
                                            Common.Utility.StringUtilities.IsNullOrEmpty(retrievedValue)
                                                ? -1
                                                : parseInt(retrievedValue);
                                        retrievedValue = this.getNodeValue(componentAttributesList.item(3));
                                        var displayName = Common.Utility.StringUtilities.IsNullOrEmpty(retrievedValue)
                                            ? Common.Utility.StringUtilities.EmptyString
                                            : retrievedValue;
                                        retrievedValue = this.getNodeValue(componentAttributesList.item(4));
                                        var parentEntityId =
                                            Common.Utility.StringUtilities.IsNullOrEmpty(retrievedValue)
                                                ? componentId
                                                : new Common.Guid(retrievedValue);
                                        retrievedValue = this.getNodeValue(componentAttributesList.item(5));
                                        var parentEntityName =
                                            Common.Utility.StringUtilities.IsNullOrEmpty(retrievedValue)
                                                ? displayName
                                                : retrievedValue;
                                        retrievedValue = this.getNodeValue(componentAttributesList.item(6));
                                        var schemaName = Common.Utility.StringUtilities.IsNullOrEmpty(retrievedValue)
                                            ? Common.Utility.StringUtilities.EmptyString
                                            : retrievedValue;
                                        if (parentEntityId.ToString() == Common.Guid.EmptyGuid.ToString()) {
                                            parentEntityId = componentId;
                                            parentEntityName = displayName;
                                            schemaName = displayName
                                        }
                                        components.push(new Common.Models
                                            .RequiredComponent(displayName,
                                                schemaName,
                                                componentType,
                                                componentId,
                                                parentEntityId,
                                                parentEntityName,
                                                componentSubType))
                                    }
                                }
                                return components
                            };
                            return ValidateAppModuleResponse
                        }();
                        ServiceRequests.ValidateAppModuleResponse = ValidateAppModuleResponse
                    })(ServiceRequests = BusinessLogic.ServiceRequests || (BusinessLogic.ServiceRequests = {}))
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    "use strict";
                    var ValidationOperation = function(_super) {
                        __extends(ValidationOperation, _super);

                        function ValidationOperation(platformService, urlHelperService) {
                            _super.call(this, platformService, urlHelperService);
                            this.platformService = platformService;
                            this.urlHelperService = urlHelperService;
                            this.InitDictionary()
                        }

                        ValidationOperation.prototype
                            .InitDictionary = function() {
                                this.actionDictionary[BusinessLogic.ActionKey.AppValidate] = new BusinessLogic
                                    .ActionItem(AppInterface.AppInterfaceConstants.Constants.NotODataRequest,
                                        this.urlHelperService.EmptyUrl,
                                        this.urlHelperService.GetMethod,
                                        null)
                            };
                        ValidationOperation.prototype.ValidateApp = function(appModuleId, onSuccess, onFailure) {
                            var validateAppModuleRequest = new BusinessLogic.ServiceRequests
                                .ValidateAppModuleRequest(appModuleId);
                            Sdk.Async.execute(validateAppModuleRequest, onSuccess, onFailure)
                        };
                        ValidationOperation.$inject = [
                            AppInterface.AppInterfaceConstants.ServiceNames.AppInterfacePlatformService, Common
                            .Constants.ServiceNames.UrlHelperService
                        ];
                        return ValidationOperation
                    }(BusinessLogic.BusinessLogicBase);
                    BusinessLogic.ValidationOperation = ValidationOperation;
                    Common.CommonModule.service(AppInterface.AppInterfaceConstants.ServiceNames
                        .AppInterfaceValidationOperation,
                        BusinessLogic.ValidationOperation)
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var BusinessLogic;
                (function(BusinessLogic) {
                    var ServiceRequests;
                    (function(ServiceRequests) {
                        "use strict";
                        var RetrieveAppModuleRequest = function(_super) {
                            __extends(RetrieveAppModuleRequest, _super);

                            function RetrieveAppModuleRequest(appId) {
                                if (Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(appId)) throw"Invalid request. Missing parameters";
                                _super.call(this);
                                this.appId = appId;
                                this.getRequestXml = function() {
                                    return [
                                        "<d:request>", "<a:Parameters>", "<a:KeyValuePairOfstringanyType>",
                                        "<b:key>AppModuleId</b:key>",
                                        ['<b:value i:type="e:guid">', this.appId.ToString(), "</b:value>"].join(""),
                                        "</a:KeyValuePairOfstringanyType>", "</a:Parameters>",
                                        '<a:RequestId i:nil="true" />',
                                        "<a:RequestName>RetrieveAppContext</a:RequestName>", "</d:request>"
                                    ].join("")
                                };
                                RetrieveAppModuleResponse.prototype.type = "Sdk.OrganizationResponse";
                                this.setResponseType(RetrieveAppModuleResponse)
                            }

                            Object.defineProperty(RetrieveAppModuleRequest.prototype,
                                "AppId",
                                { "get": function() { return this.appId }, enumerable: true, configurable: true });
                            return RetrieveAppModuleRequest
                        }(Sdk.OrganizationRequest);
                        ServiceRequests.RetrieveAppModuleRequest = RetrieveAppModuleRequest;
                        var RetrieveAppModuleResponse = function() {
                            function RetrieveAppModuleResponse(xml) {
                                if (!(this instanceof RetrieveAppModuleResponse)
                                ) return new RetrieveAppModuleResponse(xml);
                                this.setXML(xml)
                            }

                            Object.defineProperty(RetrieveAppModuleResponse.prototype,
                                "XML",
                                { "get": function() { return this.xml }, enumerable: true, configurable: true });
                            RetrieveAppModuleResponse.prototype
                                .setXML = function(xml) { if (xml != null) this.xml = xml };
                            return RetrieveAppModuleResponse
                        }();
                        ServiceRequests.RetrieveAppModuleResponse = RetrieveAppModuleResponse
                    })(ServiceRequests = BusinessLogic.ServiceRequests || (BusinessLogic.ServiceRequests = {}))
                })(BusinessLogic = AppInterface.BusinessLogic || (AppInterface.BusinessLogic = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers_1) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var Designers;
                (function(Designers) {
                    "use strict";
                    var AppInterfaceServiceBase = function() {
                        function AppInterfaceServiceBase(crudService) { this.crudService = crudService }

                        AppInterfaceServiceBase.prototype
                            .GetData = function(actionKey, parameters, onSuccess, onFailure) {
                                if (Common.Utility.ScriptUtilities.IsNullOrUndefined(onSuccess) &&
                                    Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(onFailure)
                                ) return this.crudService.GetData(actionKey, parameters);
                                else this.crudService.GetData(actionKey, parameters, onSuccess, onFailure)
                            };
                        AppInterfaceServiceBase.$inject = [
                            AppInterface.AppInterfaceConstants.ServiceNames.AppInterfaceCRUDOperations
                        ];
                        return AppInterfaceServiceBase
                    }();
                    Designers.AppInterfaceServiceBase = AppInterfaceServiceBase
                })(Designers = AppInterface.Designers || (AppInterface.Designers = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers_1.Common || (Designers_1.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var AppInterface;
            (function(AppInterface) {
                var Platform;
                (function(Platform) {
                    "use strict";
                    var AppInterfacePlatform = function() {
                        function AppInterfacePlatform($http, urlHelperService) {
                            this.$http = $http;
                            this.urlHelperService = urlHelperService;
                            this.clientUrl = ""
                        }

                        AppInterfacePlatform.prototype.PrepareUrlForODataRequest = function(url) {
                            url = this.urlHelperService.ClientUrl + this.urlHelperService.ODataServiceEndpoint + url;
                            return url
                        };
                        AppInterfacePlatform.prototype.PrepareUrlForSoapRequest = function() {
                            var url = this.urlHelperService.ClientUrl + this.urlHelperService.SoapServiceEndPoint;
                            return url
                        };
                        AppInterfacePlatform.prototype.PrepareUrlForWebRequest = function(url) {
                            url = this.urlHelperService.ClientUrl + url;
                            return url
                        };
                        AppInterfacePlatform.prototype.SetClientUrl = function(url) { this.clientUrl = url };
                        AppInterfacePlatform.prototype
                            .ODataRequest = function(urlString, methodName, passedData, onSuccess, onFailure) {
                                var returnResult = false;
                                if (Common.Utility.ScriptUtilities.IsNullOrUndefined(onSuccess) &&
                                    Common.Utility.ScriptUtilities.IsNullOrUndefined(onFailure)) {
                                    returnResult = true;
                                    onSuccess = function(response) { return response };
                                    onFailure = function(error) { return error }
                                }
                                urlString = this.PrepareUrlForODataRequest(urlString);
                                if (methodName === this.urlHelperService.GetMethod) {
                                    var result = this.$http({ method: methodName, url: urlString })
                                        .then(onSuccess, onFailure);
                                    if (returnResult) return result
                                } else {
                                    var result = this
                                        .$http({
                                            method: methodName,
                                            url: urlString,
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json;charset=utf-8"
                                            },
                                            data: passedData
                                        }).then(onSuccess, onFailure);
                                    if (returnResult) return result
                                }
                            };
                        AppInterfacePlatform.prototype.SOAPRequest = function(data, onSuccess, onFailure) {
                            var urlString = this.PrepareUrlForSoapRequest();
                            this.$http({
                                method: this.urlHelperService.PostMethod,
                                url: this.PrepareUrlForSoapRequest(),
                                data: data,
                                headers: this.urlHelperService.SoapHeaderObject
                            }).then(onSuccess, onFailure)
                        };
                        AppInterfacePlatform.prototype
                            .WebRequest = function(urlString, methodName, onSuccess, onFailure) {
                                urlString = this.PrepareUrlForWebRequest(urlString);
                                this.$http({ method: methodName, url: urlString }).then(onSuccess, onFailure)
                            };
                        AppInterfacePlatform.$inject = ["$http", Common.Constants.ServiceNames.UrlHelperService];
                        return AppInterfacePlatform
                    }();
                    Platform.AppInterfacePlatform = AppInterfacePlatform;
                    Common.CommonModule.service(AppInterface.AppInterfaceConstants.ServiceNames
                        .AppInterfacePlatformService,
                        Platform.AppInterfacePlatform)
                })(Platform = AppInterface.Platform || (AppInterface.Platform = {}))
            })(AppInterface = Common.AppInterface || (Common.AppInterface = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                "use strict";
                var RequiredComponent = function() {
                    function RequiredComponent(displayName,
                        schemaName,
                        componentType,
                        componentId,
                        parentEntityId,
                        parentEntityName,
                        componentSubType) {
                        this.displayName = displayName;
                        this.schemaName = schemaName;
                        this.componentType = componentType;
                        this.componentId = componentId;
                        this.parentEntityId = parentEntityId;
                        this.parentEntityName = parentEntityName;
                        this.componentSubType = componentSubType
                    }

                    Object.defineProperty(RequiredComponent.prototype,
                        "DisplayName",
                        { "get": function() { return this.displayName }, enumerable: true, configurable: true });
                    Object.defineProperty(RequiredComponent.prototype,
                        "SchemaName",
                        { "get": function() { return this.schemaName }, enumerable: true, configurable: true });
                    Object.defineProperty(RequiredComponent.prototype,
                        "ComponentType",
                        { "get": function() { return this.componentType }, enumerable: true, configurable: true });
                    Object.defineProperty(RequiredComponent.prototype,
                        "ComponentSubType",
                        { "get": function() { return this.componentSubType }, enumerable: true, configurable: true });
                    Object.defineProperty(RequiredComponent.prototype,
                        "ComponentId",
                        { "get": function() { return this.componentId }, enumerable: true, configurable: true });
                    Object.defineProperty(RequiredComponent.prototype,
                        "ParentEntityId",
                        { "get": function() { return this.parentEntityId }, enumerable: true, configurable: true });
                    Object.defineProperty(RequiredComponent.prototype,
                        "ParentEntityName",
                        { "get": function() { return this.parentEntityName }, enumerable: true, configurable: true });
                    return RequiredComponent
                }();
                Models.RequiredComponent = RequiredComponent
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                "use strict";
                var ValidationIssue = function() {
                    function ValidationIssue(errorType,
                        message,
                        componentId,
                        componentDisplayName,
                        componentType,
                        requiredComponents,
                        componentSubType,
                        parentEntityId,
                        parentEntityName) {
                        this.errorType = errorType;
                        this.message = message;
                        this.componentId = componentId;
                        this.componentDisplayName = componentDisplayName;
                        this.componentType = componentType;
                        this.requiredComponents = requiredComponents;
                        this.componentSubType = componentSubType;
                        this.parentEntityId = parentEntityId;
                        this.parentEntityName = parentEntityName
                    }

                    Object.defineProperty(ValidationIssue.prototype,
                        "ErrorType",
                        { "get": function() { return this.errorType }, enumerable: true, configurable: true });
                    Object.defineProperty(ValidationIssue.prototype,
                        "Message",
                        { "get": function() { return this.message }, enumerable: true, configurable: true });
                    Object.defineProperty(ValidationIssue.prototype,
                        "ComponentId",
                        { "get": function() { return this.componentId }, enumerable: true, configurable: true });
                    Object.defineProperty(ValidationIssue.prototype,
                        "ComponentType",
                        { "get": function() { return this.componentType }, enumerable: true, configurable: true });
                    Object.defineProperty(ValidationIssue.prototype,
                        "ComponentDisplayName",
                        {
                            "get": function() { return this.componentDisplayName },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(ValidationIssue.prototype,
                        "RequiredComponents",
                        { "get": function() { return this.requiredComponents }, enumerable: true, configurable: true });
                    Object.defineProperty(ValidationIssue.prototype,
                        "ComponentSubType",
                        { "get": function() { return this.componentSubType }, enumerable: true, configurable: true });
                    Object.defineProperty(ValidationIssue.prototype,
                        "ParentEntityId",
                        { "get": function() { return this.parentEntityId }, enumerable: true, configurable: true });
                    Object.defineProperty(ValidationIssue.prototype,
                        "ParentEntityName",
                        { "get": function() { return this.parentEntityName }, enumerable: true, configurable: true });
                    return ValidationIssue
                }();
                Models.ValidationIssue = ValidationIssue
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                "use strict";
                (function(ErrorType) {
                    ErrorType[ErrorType["Error"] = 1] = "Error";
                    ErrorType[ErrorType["Warning"] = 2] = "Warning"
                })(Models.ErrorType || (Models.ErrorType = {}));
                var ErrorType = Models.ErrorType
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    ModalDialogController = function() {
                        function ModalDialogController(scope, modalDialogService) {
                            this.modalDialogService = modalDialogService;
                            this.dialogParameters = this.modalDialogService.ModalDialogParameter;
                            scope.dialogParameters = this.modalDialogService.DialogParameter
                        }

                        ModalDialogController.$inject = [ServiceNames.ScopeService, ServiceNames.ModalDialogService];
                        return ModalDialogController
                    }();
                Common.CommonModule.controller("mscrmModalDialogController", ModalDialogController)
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";

                function ModalDialogDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        controller: "mscrmModalDialogController",
                        templateUrl: "/Designers/Common/ModalDialog/Templates/ModalDialog.html?v=8200000749"
                    }
                }

                Common.CommonModule.directive("mscrmModalDialog", ModalDialogDirective)
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog_1) {
                "use strict";
                var ModalDialogService = function() {
                    function ModalDialogService(q) {
                        this.q = q;
                        this.dialogParameter = new Mscrm.Designers.Common.ModalDialog.DialogParamsBase;
                        this.openProgressDialogCount = 0
                    }

                    Object.defineProperty(ModalDialogService.prototype,
                        "DialogParameter",
                        { "get": function() { return this.dialogParameter }, enumerable: true, configurable: true });
                    Object.defineProperty(ModalDialogService.prototype,
                        "ModalDialogParameter",
                        {
                            "get": function() { return this.modalDialogParameter },
                            enumerable: true,
                            configurable:
                                true
                        });
                    ModalDialogService.prototype.open = function(dialogParams) {
                        this.modalDialogParameter = dialogParams;
                        this.dialogParameter.DialogTemplate = this.modalDialogParameter.DialogTemplate;
                        this.dialogParameter.ShowModalDialog = true;
                        this.modalDialogParameter.Deferred = this.q.defer();
                        return this.modalDialogParameter.Deferred.promise
                    };
                    ModalDialogService.prototype.close = function() {
                        this.DialogParameter.DialogTemplate = "";
                        this.modalDialogParameter = null;
                        this.dialogParameter.ShowModalDialog = false
                    };
                    ModalDialogService.prototype.showProgress = function(dialogParams) {
                        this.openProgressDialogCount++;
                        return this.open(dialogParams)
                    };
                    ModalDialogService.prototype.hideProgress = function() {
                        this.openProgressDialogCount--;
                        this.openProgressDialogCount == 0 && this.close()
                    };
                    ModalDialogService.prototype.resolve = function(result) {
                        this.modalDialogParameter.Deferred.resolve(result);
                        this.close()
                    };
                    ModalDialogService.prototype.reject = function(result) {
                        this.modalDialogParameter.Deferred.reject(result);
                        this.close()
                    };
                    ModalDialogService.$inject = ["$q"];
                    return ModalDialogService
                }();
                ModalDialog_1.ModalDialogService = ModalDialogService;
                Common.CommonModule.service("mscrmModalDialogService", ModalDialogService)
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var ModalDialogResult = function() {
                    function ModalDialogResult() {}

                    return ModalDialogResult
                }();
                ModalDialog.ModalDialogResult = ModalDialogResult;
                var DialogParamsBase = function() {
                    function DialogParamsBase() {
                        this.showModalDialog = false;
                        this.shouldCancelOnEsc = true
                    }

                    Object.defineProperty(DialogParamsBase.prototype,
                        "ShowModalDialog",
                        {
                            "get": function() { return this.showModalDialog },
                            "set": function(status) { this.showModalDialog = status },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(DialogParamsBase.prototype,
                        "DialogTemplate",
                        {
                            "get": function() { return this.dialogTemplate },
                            "set": function(text) { this.dialogTemplate = text },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(DialogParamsBase.prototype,
                        "ShouldCancelOnEsc",
                        {
                            "get": function() { return this.shouldCancelOnEsc },
                            "set": function(status) { this.shouldCancelOnEsc = status },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(DialogParamsBase.prototype,
                        "Deferred",
                        {
                            "get": function() { return this.deferred },
                            "set": function(deferred) { this.deferred = deferred },
                            enumerable: true,
                            configurable: true
                        });
                    return DialogParamsBase
                }();
                ModalDialog.DialogParamsBase = DialogParamsBase
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var ConfirmDialogParams = function(_super) {
                    __extends(ConfirmDialogParams, _super);

                    function ConfirmDialogParams(dialogTitle, dialogText, okButtonText, cancelButtonText) {
                        _super.call(this);
                        this.dialogTitle = dialogTitle;
                        this.dialogText = dialogText;
                        this.okButtonText = okButtonText;
                        this.cancelButtonText = cancelButtonText;
                        this.DialogTemplate = Common.Constants.ModalDialogType.ConfirmDialog
                    }

                    return ConfirmDialogParams
                }(Common.ModalDialog.DialogParamsBase);
                ModalDialog.ConfirmDialogParams = ConfirmDialogParams
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    ConfirmModalDialogController = function() {
                        function ConfirmModalDialogController(modalDialogService) {
                            this.modalDialogService = modalDialogService;
                            this.dialogParameters = this.modalDialogService.ModalDialogParameter
                        }

                        ConfirmModalDialogController.prototype
                            .onOK = function() { this.modalDialogService.resolve(this.result) };
                        ConfirmModalDialogController.prototype
                            .onCancel = function() { this.modalDialogService.reject(this.result) };
                        ConfirmModalDialogController.$inject = [ServiceNames.ModalDialogService];
                        return ConfirmModalDialogController
                    }();
                Common.CommonModule.controller("mscrmConfirmModalDialogController", ConfirmModalDialogController)
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var IFrameDialogParams = function(_super) {
                    __extends(IFrameDialogParams, _super);

                    function IFrameDialogParams(iFrameSrc) {
                        _super.call(this);
                        this.iFrameSrc = iFrameSrc;
                        this.DialogTemplate = Common.Constants.ModalDialogType.IFrameDialog
                    }

                    return IFrameDialogParams
                }(Common.ModalDialog.DialogParamsBase);
                ModalDialog.IFrameDialogParams = IFrameDialogParams
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var ProgressDialogParams = function(_super) {
                    __extends(ProgressDialogParams, _super);

                    function ProgressDialogParams(dialogText) {
                        _super.call(this);
                        this.dialogText = dialogText;
                        this.DialogTemplate = Common.Constants.ModalDialogType.ProgressDialog;
                        this.ShouldCancelOnEsc = false
                    }

                    return ProgressDialogParams
                }(Common.ModalDialog.DialogParamsBase);
                ModalDialog.ProgressDialogParams = ProgressDialogParams
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var WatsonDialogParams = function(_super) {
                    __extends(WatsonDialogParams, _super);

                    function WatsonDialogParams(crmScriptErrorData) {
                        _super.call(this);
                        this.crmScriptErrorData = crmScriptErrorData;
                        this.ShowModalDialog = true;
                        this.DialogTemplate = Common.Constants.ModalDialogType.WatsonDialog
                    }

                    return WatsonDialogParams
                }(Common.ModalDialog.DialogParamsBase);
                ModalDialog.WatsonDialogParams = WatsonDialogParams
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ModalDialog;
            (function(ModalDialog) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    WatsonDialogController = function() {
                        function WatsonDialogController(scope,
                            $http,
                            traceUtilityService,
                            urlHelperService,
                            modalDialogService,
                            localizationService,
                            window) {
                            this.scope = scope;
                            this.$http = $http;
                            this.traceUtilityService = traceUtilityService;
                            this.urlHelperService = urlHelperService;
                            this.modalDialogService = modalDialogService;
                            this.localizationService = localizationService;
                            this.window = window;
                            this.dialogParameters = this.modalDialogService.ModalDialogParameter;
                            this.showErrorData = false
                        }

                        WatsonDialogController.prototype.onSend = function() {
                            this.postExceptionDataToServer();
                            this.modalDialogService.resolve(this.result)
                        };
                        WatsonDialogController.prototype
                            .onDontSend = function() { this.modalDialogService.reject(this.result) };
                        WatsonDialogController.prototype
                            .getSendReportText = function() {
                                return this.localizationService
                                    .getResourceString("Web__common_error_scriptError_aspx_BtnSendReport")
                                    .replace(/&/g, "")
                            };
                        WatsonDialogController.prototype
                            .getDontSendText = function() {
                                return this.localizationService
                                    .getResourceString("Web__common_error_scriptError_aspx_BtnDoNotSendReport")
                                    .replace(/&/g, "")
                            };
                        WatsonDialogController.prototype
                            .toggleViewErrorData = function() { this.showErrorData = !this.showErrorData };
                        Object.defineProperty(WatsonDialogController.prototype,
                            "ShowErrorData",
                            { "get": function() { return this.showErrorData }, enumerable: true, configurable: true });
                        WatsonDialogController.prototype.openLink = function(linkId) {
                            var url = "http://go.microsoft.com/fwlink/?LinkId=" + linkId;
                            this.window.open(url, "_blank")
                        };
                        WatsonDialogController.prototype.postExceptionDataToServer = function() {
                            try {
                                this.$http({
                                    method: this.urlHelperService.PostMethod,
                                    url: this.urlHelperService.CrmScriptErrorEndpoint,
                                    data: this.getScriptErrorData(),
                                    headers: { "Content-Type": "application/x-www-form-urlencoded" }
                                }).then(this.onPostSuccess.bind(this), this.onPostFailure.bind(this))
                            } catch (ex) {
                                this.traceUtilityService
                                    .LogError(Common.Tracing.TraceComponent.ExceptionHandler,
                                        "WatsonReport",
                                        new Common.Tracing.StringTraceData(ex.toString()))
                            }
                        };
                        WatsonDialogController.prototype
                            .onPostSuccess = function(response) {
                                this.traceUtilityService
                                    .LogVerbose(Common.Tracing.TraceComponent.ExceptionHandler,
                                        "WatsonReport",
                                        new Common.Tracing.StringTraceData(response.toString()))
                            };
                        WatsonDialogController.prototype
                            .onPostFailure = function(error) {
                                this.traceUtilityService
                                    .LogError(Common.Tracing.TraceComponent.ExceptionHandler,
                                        "WatsonReport",
                                        new Common.Tracing.StringTraceData(error.toString()))
                            };
                        WatsonDialogController.prototype.getScriptErrorData = function() {
                            var scriptErrorData = "";
                            scriptErrorData += "fileName=" + this.dialogParameters.crmScriptErrorData.fileName;
                            scriptErrorData += "&lineNumber=" + this.dialogParameters.crmScriptErrorData.lineNumber;
                            scriptErrorData += "&function=" + this.dialogParameters.crmScriptErrorData.functionName;
                            scriptErrorData += "&errorReport=" +
                                this.dialogParameters.crmScriptErrorData.getErrorReportXml();
                            scriptErrorData += "&addServerInformation=true";
                            scriptErrorData += "&errorReportingPreference=PromptBeforeReport";
                            scriptErrorData += "&reportToWatson=true";
                            return scriptErrorData
                        };
                        WatsonDialogController.$inject = [
                            ServiceNames.ScopeService, ServiceNames.HttpService, ServiceNames.TraceUtilityService,
                            ServiceNames.UrlHelperService, ServiceNames.ModalDialogService, ServiceNames
                            .LocalizationService, "$window"
                        ];
                        return WatsonDialogController
                    }();
                Common.CommonModule.controller("mscrmWatsonDialogController", WatsonDialogController)
            })(ModalDialog = Common.ModalDialog || (Common.ModalDialog = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var NotificationBar;
            (function(NotificationBar) {
                "use strict";
                var NotificationBarController = function() {
                    function NotificationBarController(commonNotificationService, localizationService) {
                        this.commonNotificationService = commonNotificationService;
                        this.localizationService = localizationService
                    }

                    Object.defineProperty(NotificationBarController.prototype,
                        "IsFlyoutExpanded",
                        {
                            "get": function() { return this.commonNotificationService.IsFlyoutExpanded },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(NotificationBarController.prototype,
                        "ErrorList",
                        {
                            "get": function() { return this.commonNotificationService.ErrorList },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(NotificationBarController.prototype,
                        "WarningList",
                        {
                            "get": function() { return this.commonNotificationService.WarningList },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(NotificationBarController.prototype,
                        "LocalizedDesignerName",
                        {
                            "get": function() {
                                switch (this.commonNotificationService.DesignerName) {
                                case Common.Constants.DesignerName.AppDesigner:
                                    return this.localizationService.getResourceString("AppDesigner.App");
                                case Common.Constants.DesignerName.SiteMapDesigner:
                                    return this.localizationService.getResourceString("AppDesigner.SiteMap")
                                }
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(NotificationBarController.prototype,
                        "ExpandCollapseString",
                        {
                            "get": function() {
                                return this.IsFlyoutExpanded
                                    ? this.localizationService.getResourceString("AppDesigner.HideDetails")
                                    : this.localizationService.getResourceString("AppDesigner.ViewDetails")
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(NotificationBarController.prototype,
                        "NotificationHeaderText",
                        {
                            "get": function() {
                                var headerString = this.localizationService
                                        .getResourceString("AppDesigner.NotificationHeader"),
                                    warningsLength = this.WarningList.length;
                                return Common.Utility.StringUtilities
                                    .Format(headerString,
                                    [
                                        this.ErrorList.length.toString(), warningsLength.toString(), this
                                        .LocalizedDesignerName
                                    ])
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(NotificationBarController.prototype,
                        "ShouldRenderWarningTemplate",
                        {
                            "get": function() { return this.ErrorList.length == 0 && this.WarningList.length > 0 },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(NotificationBarController.prototype,
                        "ShouldShowNotification",
                        {
                            "get": function() { return this.commonNotificationService.ShouldShowNotification },
                            enumerable: true,
                            configurable: true
                        });
                    NotificationBarController.prototype
                        .HideNotification = function() { this.commonNotificationService.ClearNotificationText() };
                    NotificationBarController.prototype
                        .ToggleNotificationFlyout = function() {
                            this.commonNotificationService.IsFlyoutExpanded = !this.commonNotificationService
                                .IsFlyoutExpanded
                        };
                    NotificationBarController.$inject = [
                        Common.Constants.ServiceNames.NotificationBarService, Common.Constants.ServiceNames
                        .LocalizationService
                    ];
                    return NotificationBarController
                }();
                Common.CommonModule.controller("mscrmNotificationBarController", NotificationBarController)
            })(NotificationBar = Common.NotificationBar || (Common.NotificationBar = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var NotificationBar;
            (function(NotificationBar) {
                "use strict";

                function NotificationBarDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        controller: "mscrmNotificationBarController",
                        controllerAs: "notificationCtrl",
                        templateUrl: "/Designers/Common/NotificationBar/Templates/NotificationBar.html?v=8200000749"
                    }
                }

                Common.CommonModule.directive("mscrmNotificationBar", NotificationBarDirective)
            })(NotificationBar = Common.NotificationBar || (Common.NotificationBar = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var NotificationBar;
            (function(NotificationBar) {
                "use strict";
                var ServiceNames = Common.Constants.ServiceNames,
                    NotificationBarService = function() {
                        function NotificationBarService(errorUtilityService, localizationService) {
                            this.errorUtilityService = errorUtilityService;
                            this.localizationService = localizationService;
                            this.errorList = [];
                            this.warningList = [];
                            this.shouldShowNotification = false;
                            this.isFlyoutExpanded = false;
                            this.designerName = Common.Constants.DesignerName.AppDesigner
                        }

                        Object.defineProperty(NotificationBarService.prototype,
                            "IsFlyoutExpanded",
                            {
                                "get": function() { return this.isFlyoutExpanded },
                                "set": function(isflyoutExpanded) { this.isFlyoutExpanded = isflyoutExpanded },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(NotificationBarService.prototype,
                            "DesignerName",
                            {
                                "get": function() { return this.designerName },
                                "set": function(designerName) { this.designerName = designerName },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(NotificationBarService.prototype,
                            "ErrorList",
                            { "get": function() { return this.errorList }, enumerable: true, configurable: true });
                        Object.defineProperty(NotificationBarService.prototype,
                            "WarningList",
                            { "get": function() { return this.warningList }, enumerable: true, configurable: true });
                        Object.defineProperty(NotificationBarService.prototype,
                            "ShouldShowNotification",
                            {
                                "get": function() { return this.shouldShowNotification },
                                "set": function(showNotification) { this.shouldShowNotification = showNotification },
                                enumerable: true,
                                configurable: true
                            });
                        NotificationBarService.prototype
                            .ShowNotificationText = function() { this.shouldShowNotification = true };
                        NotificationBarService.prototype.ClearNotificationText = function() {
                            this.shouldShowNotification = false;
                            this.isFlyoutExpanded = false;
                            this.errorList = [];
                            this.warningList = []
                        };
                        NotificationBarService.prototype
                            .ParseAndDisplayMultipleSOAPErrors =
                            function(designerName, error, scopeApplyPhaseCallback) {
                                if (!Common.Utility.StringUtilities.IsNullOrEmpty(error.message)) {
                                    this.DesignerName = designerName;
                                    for (var errorCodes = error.message.split(","), _i = 0;
                                        _i < errorCodes.length;
                                        _i++) {
                                        var errorCode = errorCodes[_i];
                                        this.ErrorList.push(this.errorUtilityService
                                            .GetErrorString(this.localizationService.getResourceString(errorCode)))
                                    }
                                    this.ShowNotificationText();
                                    scopeApplyPhaseCallback()
                                }
                            };
                        NotificationBarService.prototype.DisplayError = function(error, httpError) {
                            this.AddError(error, httpError);
                            this.ShowNotificationText()
                        };
                        NotificationBarService.prototype.DisplayErrors = function(errors, httpError) {
                            errors.forEach(function(error, index) { this.AddError(error, httpError) }, this);
                            this.ShowNotificationText()
                        };
                        NotificationBarService.prototype.AddError = function(error, httpError) {
                            var status = httpError !== undefined ? httpError.status : undefined,
                                errorStr = this.errorUtilityService.GetErrorString(error, status);
                            this.ErrorList.indexOf(errorStr) === -1 && this.ErrorList.push(errorStr)
                        };
                        NotificationBarService.$inject = [
                            ServiceNames.ErrorUtilityService, ServiceNames.LocalizationService
                        ];
                        return NotificationBarService
                    }();
                NotificationBar.NotificationBarService = NotificationBarService;
                Common.CommonModule.service("mscrmNotificationService", NotificationBarService)
            })(NotificationBar = Common.NotificationBar || (Common.NotificationBar = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                angular.module("mscrmTelemetry", [])
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var EventParameter = function() {
                    function EventParameter(parameterName, value) {
                        this.parameterName = parameterName;
                        this.value = value
                    }

                    EventParameter.prototype.ParameterName = function() { return this.parameterName };
                    EventParameter.prototype.Value = function() { return this.value };
                    return EventParameter
                }();
                Telemetry.EventParameter = EventParameter
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var DesignerTelemetryEvent = function() {
                    function DesignerTelemetryEvent(sessionId, eventName) {
                        this.SetSessionInfo();
                        this.sessionId = sessionId;
                        if (Common.Utility.StringUtilities
                            .IsNullOrEmpty(this.sessionId)) this.sessionId = this.ActiveSessionId();
                        this.designerName = this.GetDesignerName();
                        this.eventName = eventName;
                        this.eventParameters = []
                    }

                    DesignerTelemetryEvent.prototype
                        .AddEventParameter = function(name, value) {
                            this.eventParameters.push(new Telemetry.EventParameter(name, value))
                        };
                    DesignerTelemetryEvent.prototype.ToJson = function() {
                        var jsonObject = {};
                        jsonObject["SessionId"] = this.sessionId;
                        jsonObject["EventName"] = this.eventName;
                        for (var eventValues = {}, param = 0;
                            param < this.eventParameters.length;
                            param++
                        )
                            eventValues[this.eventParameters[param].ParameterName()] = this.eventParameters[param]
                                .Value();
                        jsonObject["EventValues"] = eventValues;
                        return jsonObject
                    };
                    DesignerTelemetryEvent.prototype
                        .GetDesignerName = function() { return this.sessionInfo ? this.sessionInfo.designerName : "" };
                    DesignerTelemetryEvent.prototype
                        .ActiveSessionId = function() { return DesignerTelemetryEvent.activeSessionId };
                    DesignerTelemetryEvent.prototype.SessionId = function() { return this.sessionId };
                    DesignerTelemetryEvent.prototype.DesignerName = function() { return this.designerName };
                    DesignerTelemetryEvent.prototype.EventName = function() { return this.eventName };
                    DesignerTelemetryEvent.prototype.EventParameters = function() { return this.eventParameters };
                    DesignerTelemetryEvent.prototype.SetSessionInfo = function() {
                        var injector = angular.element(document.body).injector();
                        this.sessionInfo = injector.get(Common.Constants.InjectedObjectNames.SessionInfo)
                    };
                    DesignerTelemetryEvent.activeSessionId = Common.Guid.NewGuid().toString();
                    return DesignerTelemetryEvent
                }();
                Telemetry.DesignerTelemetryEvent = DesignerTelemetryEvent
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var DesignerErrorEvent = function(_super) {
                    __extends(DesignerErrorEvent, _super);

                    function DesignerErrorEvent(designerName, component, errorMessage, stackTrace, isUnhandled) {
                        _super.call(this, null, DesignerErrorEvent.eventName);
                        this.AddEventParameter(DesignerErrorTelemetryParameters.DesignerName, designerName);
                        this.AddEventParameter(DesignerErrorTelemetryParameters.Component, component);
                        this.AddEventParameter(DesignerErrorTelemetryParameters.ErrorMessage, errorMessage);
                        this.AddEventParameter(DesignerErrorTelemetryParameters.StackTrace, stackTrace);
                        this.AddEventParameter(DesignerErrorTelemetryParameters.IsUnhandled, isUnhandled)
                    }

                    DesignerErrorEvent.eventName = "DesignerError";
                    return DesignerErrorEvent
                }(Telemetry.DesignerTelemetryEvent);
                Telemetry.DesignerErrorEvent = DesignerErrorEvent;
                var DesignerErrorTelemetryParameters = function() {
                    function DesignerErrorTelemetryParameters() {}

                    DesignerErrorTelemetryParameters.DesignerName = "DesignerName";
                    DesignerErrorTelemetryParameters.Component = "Component";
                    DesignerErrorTelemetryParameters.ErrorMessage = "ErrorMessage";
                    DesignerErrorTelemetryParameters.StackTrace = "StackTrace";
                    DesignerErrorTelemetryParameters.IsUnhandled = "IsUnhandled";
                    return DesignerErrorTelemetryParameters
                }();
                Telemetry.DesignerErrorTelemetryParameters = DesignerErrorTelemetryParameters
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var DesignerPerfMarkersEvent = function(_super) {
                    __extends(DesignerPerfMarkersEvent, _super);

                    function DesignerPerfMarkersEvent(designerName,
                        userAgent,
                        perfMarkerName,
                        kpiType,
                        value,
                        perfMarkerDetails) {
                        _super.call(this, null, Telemetry.DesignerErrorEvent.eventName);
                        this.AddEventParameter(DesignerPerfMarkersTelemetryParameters.DesignerName, designerName);
                        this.AddEventParameter(DesignerPerfMarkersTelemetryParameters.UserAgent, userAgent);
                        this.AddEventParameter(DesignerPerfMarkersTelemetryParameters.PerfMarkerName, perfMarkerName);
                        this.AddEventParameter(DesignerPerfMarkersTelemetryParameters.KpiType, kpiType);
                        this.AddEventParameter(DesignerPerfMarkersTelemetryParameters.Value, value);
                        this.AddEventParameter(DesignerPerfMarkersTelemetryParameters.PerfMarkerDetails,
                            perfMarkerDetails)
                    }

                    DesignerPerfMarkersEvent.eventName = "DesignerPerfMarkers";
                    return DesignerPerfMarkersEvent
                }(Telemetry.DesignerTelemetryEvent);
                Telemetry.DesignerPerfMarkersEvent = DesignerPerfMarkersEvent;
                var DesignerPerfMarkersTelemetryParameters = function() {
                    function DesignerPerfMarkersTelemetryParameters() {}

                    DesignerPerfMarkersTelemetryParameters.DesignerName = "DesignerName";
                    DesignerPerfMarkersTelemetryParameters.UserAgent = "UserAgent";
                    DesignerPerfMarkersTelemetryParameters.PerfMarkerName = "PerfMarkerName";
                    DesignerPerfMarkersTelemetryParameters.KpiType = "KpiType";
                    DesignerPerfMarkersTelemetryParameters.Value = "Value";
                    DesignerPerfMarkersTelemetryParameters.PerfMarkerDetails = "PerfMarkerDetails";
                    return DesignerPerfMarkersTelemetryParameters
                }();
                Telemetry.DesignerPerfMarkersTelemetryParameters = DesignerPerfMarkersTelemetryParameters
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var DesignerLaunchEvent = function(_super) {
                    __extends(DesignerLaunchEvent, _super);

                    function DesignerLaunchEvent(designerName,
                        userAgent,
                        userId,
                        orgId,
                        tenant,
                        region,
                        language,
                        serverVersion,
                        solutionId,
                        launchPage) {
                        _super.call(this, null, DesignerLaunchEvent.EventName);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.DesignerName, designerName);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.UserAgent, userAgent);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.UserId, userId);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.OrgId, orgId);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.Tenant, tenant);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.Region, region);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.Language, language);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.ServerVersion, serverVersion);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.SolutionId, solutionId);
                        this.AddEventParameter(DesignerLaunchTelemetryParameters.LaunchPage, launchPage)
                    }

                    DesignerLaunchEvent.EventName = "DesignerLaunch";
                    return DesignerLaunchEvent
                }(Telemetry.DesignerTelemetryEvent);
                Telemetry.DesignerLaunchEvent = DesignerLaunchEvent;
                var DesignerLaunchTelemetryParameters = function() {
                    function DesignerLaunchTelemetryParameters() {}

                    DesignerLaunchTelemetryParameters.DesignerName = "DesignerName";
                    DesignerLaunchTelemetryParameters.UserAgent = "UserAgent";
                    DesignerLaunchTelemetryParameters.UserId = "UserId";
                    DesignerLaunchTelemetryParameters.OrgId = "OrgId";
                    DesignerLaunchTelemetryParameters.Tenant = "Tenant";
                    DesignerLaunchTelemetryParameters.Region = "Region";
                    DesignerLaunchTelemetryParameters.Language = "Language";
                    DesignerLaunchTelemetryParameters.ServerVersion = "ServerVersion";
                    DesignerLaunchTelemetryParameters.SolutionId = "SolutionId";
                    DesignerLaunchTelemetryParameters.LaunchPage = "LaunchPage";
                    return DesignerLaunchTelemetryParameters
                }();
                Telemetry.DesignerLaunchTelemetryParameters = DesignerLaunchTelemetryParameters
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                "use strict";
                var DesignerUserActionTelemetryEvent = function(_super) {
                    __extends(DesignerUserActionTelemetryEvent, _super);

                    function
                        DesignerUserActionTelemetryEvent(actionName,
                            actionCount,
                            userInteraction,
                            designerEntityId,
                            actionLocation) {
                            _super.call(this, null, DesignerUserActionTelemetryEvent.eventName);
                            this.ActionName = "ActionName";
                            this.UserInteraction = "ActionType";
                            this.ActionCount = "ActionCount";
                            this.ActionLocation = "ActionLocation";
                            this.DesignerEntityId = "DesignerEntityId";
                            this.AddEventParameter(this.ActionName, actionName);
                            this.AddEventParameter(this.ActionCount, actionCount);
                            this.AddEventParameter(this.UserInteraction, userInteraction);
                            this.AddEventParameter(this.DesignerEntityId, designerEntityId)
                        }

                    DesignerUserActionTelemetryEvent.eventName = "DesignerUserActionEvent";
                    return DesignerUserActionTelemetryEvent
                }(Telemetry.DesignerTelemetryEvent);
                Telemetry.DesignerUserActionTelemetryEvent = DesignerUserActionTelemetryEvent
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Telemetry;
            (function(Telemetry) {
                var CommonConstants = Mscrm.Designers.Common.Constants,
                    ActionOnSelectService = function() {
                        function ActionOnSelectService() {
                            CommonConstants.TelemetryDictionary.InitilizeDesignerUserActions()
                        }

                        ActionOnSelectService.prototype
                            .CaptureClickCountForTelemetry = function(idOfElement, userInteractionType) {
                                var appElementID = CommonConstants.TelemetryDictionary.AppDesignerUserActions
                                    .getValue(idOfElement);
                                if (appElementID) {
                                    var appElementIdNode = CommonConstants.TelemetryDictionary.DesignerUserActions
                                        .getValue(appElementID.toString());
                                    if (appElementIdNode) {
                                        var userInteractionObj = CommonConstants.TelemetryDictionary.DesignerUserActions
                                            .getValue(appElementID.toString());
                                        ++userInteractionObj.userInteractionCounter
                                    } else
                                        CommonConstants.TelemetryDictionary.DesignerUserActions
                                            .add(appElementID.toString(),
                                                new CommonConstants.UserInteractionInfo(userInteractionType, 1))
                                }
                                var sitemapElementID = CommonConstants.TelemetryDictionary.SitemapDesignerUserActions
                                    .getValue(idOfElement);
                                if (sitemapElementID) {
                                    var sitemapElementIdNode = CommonConstants.TelemetryDictionary
                                        .DesignerUserActionsForSitemap.getValue(sitemapElementID.toString());
                                    if (sitemapElementIdNode) {
                                        var userInteractionObj = CommonConstants.TelemetryDictionary
                                            .DesignerUserActionsForSitemap.getValue(sitemapElementID.toString());
                                        ++userInteractionObj.userInteractionCounter
                                    } else
                                        CommonConstants.TelemetryDictionary.DesignerUserActionsForSitemap
                                            .add(sitemapElementID.toString(),
                                                new CommonConstants.UserInteractionInfo(userInteractionType, 1))
                                }
                            };
                        return ActionOnSelectService
                    }();
                Telemetry.ActionOnSelectService = ActionOnSelectService;
                Mscrm.Designers.Common.CommonModule.service(CommonConstants.ServiceNames.ActionOnSelectService,
                    ActionOnSelectService)
            })(Telemetry = Common.Telemetry || (Common.Telemetry = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Telemetry;
        (function(Telemetry) {
            var Stub;
            (function(Stub) {
                "use strict";
                var StubTelemetryInitService = function() {
                    function StubTelemetryInitService() {}

                    StubTelemetryInitService.prototype.TryReportInitEvent = function() {};
                    return StubTelemetryInitService
                }();
                angular.module("mscrmTelemetry").service("mscrmInitTelemetryService", StubTelemetryInitService)
            })(Stub = Telemetry.Stub || (Telemetry.Stub = {}))
        })(Telemetry = Designers.Telemetry || (Designers.Telemetry = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Telemetry;
        (function(Telemetry) {
            var Stub;
            (function(Stub) {
                "use strict";
                var StubTelemetryService = function() {
                    function StubTelemetryService() {}

                    StubTelemetryService.prototype.AddTelemetryEvent = function() {};
                    return StubTelemetryService
                }();
                angular.module("mscrmTelemetry").service("mscrmTelemetryService", StubTelemetryService)
            })(Stub = Telemetry.Stub || (Telemetry.Stub = {}))
        })(Telemetry = Designers.Telemetry || (Designers.Telemetry = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var DateTimeFormatService;
            (function(DateTimeFormatService_1) {
                "use strict";
                var DateTimeFormatService = function() {
                    function DateTimeFormatService(dateTimeFormatInfo) { this.dateTimeFormatInfo = dateTimeFormatInfo }

                    DateTimeFormatService.prototype
                        .getShortDateFormat = function() {
                            return this.dateTimeFormatInfo.ShortDatePattern
                                .replace(new RegExp("/", "g"), this.dateTimeFormatInfo.DateSeparator)
                        };
                    DateTimeFormatService.prototype
                        .getShortTimeFormat = function() {
                            return this.dateTimeFormatInfo.ShortTimePattern
                                .replace(new RegExp(":", "g"), this.dateTimeFormatInfo.TimeSeparator)
                        };
                    DateTimeFormatService.prototype.getShortDateTimeString = function(dateObj) {
                        if (Common.Utility.ScriptUtilities
                            .IsNullOrUndefined(this
                                .dateTimeFormatInfo)) return Common.Utility.StringUtilities.EmptyString;
                        var shortFormat = this.getShortDateFormat().toUpperCase() +
                            " " +
                            this.getShortTimeFormat().replace("tt", "a");
                        return moment(dateObj).format(shortFormat).replace("am", this.dateTimeFormatInfo.AMDesignator)
                            .replace("pm", this.dateTimeFormatInfo.PMDesignator)
                    };
                    DateTimeFormatService.$inject = ["dateTimeFormatInfo"];
                    return DateTimeFormatService
                }();
                DateTimeFormatService_1.DateTimeFormatService = DateTimeFormatService;
                Common.CommonModule.service("mscrmDateTimeFormatService", DateTimeFormatService)
            })(DateTimeFormatService = Common.DateTimeFormatService || (Common.DateTimeFormatService = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Bootstrap;
            (function(Bootstrap) {
                var Telemetry = Mscrm.Designers.Common.Telemetry,
                    ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames;
                "use strict";
                var BootstrapController = function() {
                    function BootstrapController($window,
                        traceLevel,
                        initialBreadcrumb,
                        resourceStrings,
                        sessionInfo,
                        traceUtility,
                        traceService,
                        localizationService,
                        breadcrumbSevice,
                        initTelemetryService,
                        dirtyCheckService,
                        telemetryService,
                        urlHelperService) {
                        this.$window = $window;
                        this.traceLevel = traceLevel;
                        this.initialBreadcrumb = initialBreadcrumb;
                        this.resourceStrings = resourceStrings;
                        this.sessionInfo = sessionInfo;
                        this.traceUtility = traceUtility;
                        this.traceService = traceService;
                        this.localizationService = localizationService;
                        this.breadcrumbSevice = breadcrumbSevice;
                        this.initTelemetryService = initTelemetryService;
                        this.dirtyCheckService = dirtyCheckService;
                        this.telemetryService = telemetryService;
                        this.urlHelperService = urlHelperService;
                        traceService.AppTraceLevel = traceLevel;
                        traceUtility.Initialize();
                        this.traceUtility.Scenario = Common.Constants.TracingScenarios.DesignerBootstrap;
                        localizationService.setResourceStrings(resourceStrings);
                        breadcrumbSevice.PushBreadcrumb(initialBreadcrumb);
                        initTelemetryService.TryReportInitEvent();
                        traceUtility.LogInfo(Mscrm.Designers.Common.Tracing.TraceComponent.Common,
                            "DesignerBootstrap",
                            new Mscrm.Designers.Common.Tracing
                            .StringTraceData("Bootstrapped Designer App with TraceLevel:" +
                                traceService
                                .AppTraceLevel));
                        this.traceUtility.Scenario = "";
                        this.$window.onbeforeunload = this.handleWindowBeforeUnload.bind(this);
                        var desingerEvent = new Telemetry
                            .DesignerLaunchEvent(this.sessionInfo.designerName,
                                this.urlHelperService.GetUserAgent(),
                                this.sessionInfo.userID,
                                this.sessionInfo.orgID,
                                "",
                                this.sessionInfo.currentRegion,
                                this.sessionInfo.lCID,
                                this.sessionInfo.buildVersion,
                                this.sessionInfo.solutionID,
                                this.urlHelperService.GetLaunchPage());
                        this.telemetryService.AddTelemetryEvent(desingerEvent)
                    }

                    BootstrapController.prototype
                        .getResourceString = function(resourceKey) {
                            return this.localizationService.getResourceString(resourceKey)
                        };
                    BootstrapController.prototype.handleWindowBeforeUnload = function() {
                        if (this.dirtyCheckService
                            .isDirty())
                            return this.localizationService
                                .getResourceString("Designer.WindowCloseUnSavedChanges.Message");
                        return
                    };
                    BootstrapController.$inject = [
                        ServiceNames.WindowService, "traceLevel", "initialBreadcrumb", "resourceStrings", "sessionInfo",
                        "mscrmTraceUtilityService", "mscrmGlobalTraceService", "mscrmLocalizationService",
                        "mscrmBreadcrumbService", "mscrmInitTelemetryService", ServiceNames.DirtyCheckService,
                        ServiceNames.TelemetryService, ServiceNames.UrlHelperService
                    ];
                    return BootstrapController
                }();
                Bootstrap.BootstrapController = BootstrapController
            })(Bootstrap = Common.Bootstrap || (Common.Bootstrap = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                var AppInfo = function() {
                    function AppInfo() {
                        this.appId = Common.Utility.StringUtilities.EmptyString;
                        this.title = Common.Utility.StringUtilities.EmptyString;
                        this.description = Common.Utility.StringUtilities.EmptyString;
                        this.webResourceItem = new Models.WebResourceItem;
                        this.status = Common.Utility.StringUtilities.EmptyString;
                        this.lastModifiedOn = new Date;
                        this.clientType = ClientType.Web;
                        this.formFactor = AppModuleFormFactor.Desktop;
                        this.uniqueName = Common.Utility.StringUtilities.EmptyString;
                        this.appUrl = Common.Utility.StringUtilities.EmptyString;
                        this.thumbnailContext = new ThumbnailContext;
                        this.selectedWebResourceId = Common.Utility.StringUtilities.EmptyString;
                        this.publisherPrefix = Common.Utility.StringUtilities.EmptyString
                    }

                    AppInfo.prototype.GetAttributes = function() {
                        var attributes = [];
                        if (this.appId != "")
                            attributes.push(new Models
                                .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants.AppModuleIdAttribute,
                                    Models.AttributeType.Guid,
                                    this.appId));
                        else {
                            attributes.push(new Models
                                .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants.UrlAttribute,
                                    Models.AttributeType.String,
                                    this.appUrl));
                            attributes.push(new Models
                                .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants.FormFactorKey,
                                    Models.AttributeType.Int,
                                    this.formFactor))
                        }
                        attributes.push(new Models
                            .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants.AppNameAttribute,
                                Models.AttributeType.String,
                                this.title));
                        attributes.push(new Models
                            .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants.AppDescriptionAttribute,
                                Models.AttributeType.String,
                                this.description));
                        attributes.push(new Models
                            .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants
                                .AppWebResourceIdAttribute,
                                Models.AttributeType.Guid,
                                Common.Utility.ScriptUtilities.IsNullOrUndefined(this.webResourceItem.webresourceid)
                                ? Common.Constants.Defaults.DefaultAppModuleImageWebResourceId
                                : this.webResourceItem.webresourceid));
                        attributes.push(new Models
                            .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants.AppUniqueNameAttribute,
                                Models.AttributeType.String,
                                this.uniqueName));
                        attributes.push(new Models
                            .AttributeBase(Common.AppInterface.AppInterfaceConstants.Constants.ClientTypeKey,
                                Models.AttributeType.Int,
                                this.clientType));
                        return attributes
                    };
                    return AppInfo
                }();
                Models.AppInfo = AppInfo;
                var ThumbnailContext = function() {
                    function ThumbnailContext(useDefaultThumbnail, thumbnailListAvailable) {
                        if (useDefaultThumbnail === void 0) useDefaultThumbnail = true;
                        if (thumbnailListAvailable === void 0) thumbnailListAvailable = false;
                        this.useDefaultThumbnail = useDefaultThumbnail;
                        this.thumbnailListAvailable = thumbnailListAvailable
                    }

                    return ThumbnailContext
                }();
                Models.ThumbnailContext = ThumbnailContext;
                (function(ClientType) {
                    ClientType[ClientType["MoCA"] = 1] = "MoCA";
                    ClientType[ClientType["Web"] = 2] = "Web"
                })(Models.ClientType || (Models.ClientType = {}));
                var ClientType = Models.ClientType;
                (function(AppModuleFormFactor) {
                    AppModuleFormFactor[AppModuleFormFactor["None"] = 0] = "None";
                    AppModuleFormFactor[AppModuleFormFactor["Desktop"] = 1] = "Desktop";
                    AppModuleFormFactor[AppModuleFormFactor["Phone"] = 2] = "Phone";
                    AppModuleFormFactor[AppModuleFormFactor["Tablet"] = 4] = "Tablet";
                    AppModuleFormFactor[AppModuleFormFactor["All"] = 8] = "All"
                })(Models.AppModuleFormFactor || (Models.AppModuleFormFactor = {}));
                var AppModuleFormFactor = Models.AppModuleFormFactor
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                "use strict";
                var AppComponent = function() {
                    function AppComponent(objId, objTypeCode, objType) {
                        this.objectId = objId;
                        this.objTypeCode = objTypeCode;
                        this.objType = objType
                    }

                    Object.defineProperty(AppComponent.prototype,
                        "ObjectId",
                        { "get": function() { return this.objectId }, enumerable: true, configurable: true });
                    Object.defineProperty(AppComponent.prototype,
                        "ObjTypeCode",
                        { "get": function() { return this.objTypeCode }, enumerable: true, configurable: true });
                    Object.defineProperty(AppComponent.prototype,
                        "ObjType",
                        { "get": function() { return this.objType }, enumerable: true, configurable: true });
                    return AppComponent
                }();
                Models.AppComponent = AppComponent
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                var AttributeBase = function() {
                    function AttributeBase(name, type, value) {
                        this.Name = name;
                        this.Type = type;
                        this.Value = value
                    }

                    return AttributeBase
                }();
                Models.AttributeBase = AttributeBase
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                "use strict";
                (function(AttributeType) {
                    AttributeType[AttributeType["Boolean"] = 0] = "Boolean";
                    AttributeType[AttributeType["DateTime"] = 1] = "DateTime";
                    AttributeType[AttributeType["Decimal"] = 2] = "Decimal";
                    AttributeType[AttributeType["Double"] = 3] = "Double";
                    AttributeType[AttributeType["Guid"] = 4] = "Guid";
                    AttributeType[AttributeType["Int"] = 5] = "Int";
                    AttributeType[AttributeType["String"] = 6] = "String"
                })(Models.AttributeType || (Models.AttributeType = {}));
                var AttributeType = Models.AttributeType
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                var ComponentTypeName = function() {
                    function ComponentTypeName() {}

                    ComponentTypeName.SITEMAP = "Sitemap";
                    ComponentTypeName.BUSINESS_PROCESS = "BPC";
                    ComponentTypeName.DASHBOARD = "Dashboard";
                    ComponentTypeName.FORM = "Form";
                    ComponentTypeName.VIEW = "View";
                    ComponentTypeName.CHART = "Chart";
                    ComponentTypeName.COMMAND_BAR = "Command";
                    ComponentTypeName.ENTITY = "Entity";
                    return ComponentTypeName
                }();
                Models.ComponentTypeName = ComponentTypeName
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                (function(ComponentTypeCode) {
                    ComponentTypeCode[ComponentTypeCode["Entity"] = 1] = "Entity";
                    ComponentTypeCode[ComponentTypeCode["SavedQuery"] = 26] = "SavedQuery";
                    ComponentTypeCode[ComponentTypeCode["BPF"] = 29] = "BPF";
                    ComponentTypeCode[ComponentTypeCode["SavedQueryVisualization"] = 59] = "SavedQueryVisualization";
                    ComponentTypeCode[ComponentTypeCode["SystemForm"] = 60] = "SystemForm";
                    ComponentTypeCode[ComponentTypeCode["SiteMap"] = 62] = "SiteMap"
                })(Models.ComponentTypeCode || (Models.ComponentTypeCode = {}));
                var ComponentTypeCode = Models.ComponentTypeCode
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                var WebResourceItem = function() {
                    function WebResourceItem() {}

                    return WebResourceItem
                }();
                Models.WebResourceItem = WebResourceItem
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                "use strict";
                var SessionInfo = function() {
                    function SessionInfo() {}

                    return SessionInfo
                }();
                Models.SessionInfo = SessionInfo
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) { "use strict" })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) { "use strict" })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                var StringTraceData = function() {
                    function StringTraceData(message) { this.message = message }

                    StringTraceData.prototype.ToString = function() { return this.message };
                    return StringTraceData
                }();
                Tracing.StringTraceData = StringTraceData
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                var ErrorTraceData = function() {
                    function ErrorTraceData(error) { this.error = error }

                    ErrorTraceData.prototype.ToString = function() {
                        if (Common.Utility.ScriptUtilities.IsNullOrUndefinedNested(this.error, "data.error.message") &&
                            this.error.data &&
                            this.error.data.error &&
                            this.error.data.error.message) return this.error.data.error.message.toString();
                        else if (!Common.Utility.ScriptUtilities
                            .IsNullOrUndefined(this.error.toString)) return this.error.toString();
                        else return JSON.stringify(this.error)
                    };
                    return ErrorTraceData
                }();
                Tracing.ErrorTraceData = ErrorTraceData
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                (function(TraceComponent) {
                    TraceComponent[TraceComponent["Common"] = 0] = "Common";
                    TraceComponent[TraceComponent["AppDesigner"] = 1] = "AppDesigner";
                    TraceComponent[TraceComponent["AppWizard"] = 2] = "AppWizard";
                    TraceComponent[TraceComponent["SitemapDesigner"] = 3] = "SitemapDesigner";
                    TraceComponent[TraceComponent["Telemetry"] = 4] = "Telemetry";
                    TraceComponent[TraceComponent["ExceptionHandler"] = 5] = "ExceptionHandler";
                    TraceComponent[TraceComponent["TraceUtility"] = 6] = "TraceUtility"
                })(Tracing.TraceComponent || (Tracing.TraceComponent = {}));
                var TraceComponent = Tracing.TraceComponent
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                (function(TraceLevel) {
                    TraceLevel[TraceLevel["Off"] = 0] = "Off";
                    TraceLevel[TraceLevel["Error"] = 1] = "Error";
                    TraceLevel[TraceLevel["Warning"] = 2] = "Warning";
                    TraceLevel[TraceLevel["Perf"] = 3] = "Perf";
                    TraceLevel[TraceLevel["Info"] = 4] = "Info";
                    TraceLevel[TraceLevel["Verbose"] = 5] = "Verbose"
                })(Tracing.TraceLevel || (Tracing.TraceLevel = {}));
                var TraceLevel = Tracing.TraceLevel
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                (function(TraceModule) {
                    TraceModule[TraceModule["ConsoleTracer"] = 0] = "ConsoleTracer";
                    TraceModule[TraceModule["CompositeTracer"] = 1] = "CompositeTracer"
                })(Tracing.TraceModule || (Tracing.TraceModule = {}));
                var TraceModule = Tracing.TraceModule
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                var ConsoleTrace = function() {
                    function ConsoleTrace(mscrmGlobalTraceService) {
                        this.mscrmGlobalTraceService = mscrmGlobalTraceService
                    }

                    ConsoleTrace.prototype.LogError = function(key, component, scenario, data) {
                        this.mscrmGlobalTraceService.AppTraceLevel >= Tracing.TraceLevel.Error &&
                            console.error("[{%s}]: (%s): %s: %s: %s",
                                Tracing.TraceComponent[component],
                                (new Date).toISOString(),
                                scenario,
                                key,
                                data.ToString())
                    };
                    ConsoleTrace.prototype.LogWarning = function(key, component, scenario, data) {
                        this.mscrmGlobalTraceService.AppTraceLevel >= Tracing.TraceLevel.Warning &&
                            console.warn("[{%s}]: (%s): %s: %s: %s",
                                Tracing.TraceComponent[component],
                                (new Date).toISOString(),
                                scenario,
                                key,
                                data.ToString())
                    };
                    ConsoleTrace.prototype.LogPerf = function(key, component, scenario, data) {
                        this.mscrmGlobalTraceService.AppTraceLevel >= Tracing.TraceLevel.Perf &&
                            console.log("[{%s}]: (%s): %s: %s: %s",
                                Tracing.TraceComponent[component],
                                (new Date).toISOString(),
                                scenario,
                                key,
                                data.ToString())
                    };
                    ConsoleTrace.prototype.LogInfo = function(key, component, scenario, data) {
                        this.mscrmGlobalTraceService.AppTraceLevel >= Tracing.TraceLevel.Info &&
                            console.log("[{%s}]: (%s): %s: %s: %s",
                                Tracing.TraceComponent[component],
                                (new Date).toISOString(),
                                scenario,
                                key,
                                data.ToString())
                    };
                    ConsoleTrace.prototype.LogVerbose = function(key, component, scenario, data) {
                        this.mscrmGlobalTraceService.AppTraceLevel >= Tracing.TraceLevel.Verbose &&
                            console.log("[{%s}]: (%s): %s: %s: %s",
                                Tracing.TraceComponent[component],
                                (new Date).toISOString(),
                                scenario,
                                key,
                                data.ToString())
                    };
                    return ConsoleTrace
                }();
                Tracing.ConsoleTrace = ConsoleTrace
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                var CompositeTracer = function() {
                    function CompositeTracer(mscrmGlobalTraceService) {
                        this.mscrmGlobalTraceService = mscrmGlobalTraceService;
                        this.traceModules = [];
                        this.traceModules.push(new Tracing.ConsoleTrace(this.mscrmGlobalTraceService))
                    }

                    CompositeTracer.prototype.LogError = function(key, component, scenario, data) {
                        for (var _i = 0, _a = this.traceModules; _i < _a.length; _i++) {
                            var traceModule = _a[_i];
                            traceModule.LogError(key, component, scenario, data)
                        }
                    };
                    CompositeTracer.prototype.LogWarning = function(key, component, scenario, data) {
                        for (var _i = 0, _a = this.traceModules; _i < _a.length; _i++) {
                            var traceModule = _a[_i];
                            traceModule.LogWarning(key, component, scenario, data)
                        }
                    };
                    CompositeTracer.prototype.LogPerf = function(key, component, scenario, data) {
                        for (var _i = 0, _a = this.traceModules; _i < _a.length; _i++) {
                            var traceModule = _a[_i];
                            traceModule.LogPerf(key, component, scenario, data)
                        }
                    };
                    CompositeTracer.prototype.LogInfo = function(key, component, scenario, data) {
                        for (var _i = 0, _a = this.traceModules; _i < _a.length; _i++) {
                            var traceModule = _a[_i];
                            traceModule.LogInfo(key, component, scenario, data)
                        }
                    };
                    CompositeTracer.prototype.LogVerbose = function(key, component, scenario, data) {
                        for (var _i = 0, _a = this.traceModules; _i < _a.length; _i++) {
                            var traceModule = _a[_i];
                            traceModule.LogVerbose(key, component, scenario, data)
                        }
                    };
                    return CompositeTracer
                }();
                Tracing.CompositeTracer = CompositeTracer
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                var TraceFactory = function() {
                    function TraceFactory() {}

                    TraceFactory.GetTraceModule = function(mscrmGlobalTraceService) {
                        switch (mscrmGlobalTraceService.AppTraceModule) {
                        case Tracing.TraceModule.ConsoleTracer:
                            return new Tracing.ConsoleTrace(mscrmGlobalTraceService);
                        case Tracing.TraceModule.CompositeTracer:
                            return new Tracing.CompositeTracer(mscrmGlobalTraceService);
                        default:
                            return new Tracing.CompositeTracer(mscrmGlobalTraceService)
                        }
                    };
                    return TraceFactory
                }();
                Tracing.TraceFactory = TraceFactory
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                var MSCRMGlobalTraceService = function() {
                    function MSCRMGlobalTraceService() {}

                    return MSCRMGlobalTraceService
                }();
                Tracing.MSCRMGlobalTraceService = MSCRMGlobalTraceService;
                angular.module("mscrmCommon").service("mscrmGlobalTraceService", MSCRMGlobalTraceService)
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Tracing;
            (function(Tracing) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    TelemetryEvents = Mscrm.Designers.Common.Telemetry,
                    MSCRMTraceUtilityService = function() {
                        function MSCRMTraceUtilityService(mscrmGlobalTraceService, telemetryService, sessionInfo) {
                            this.mscrmGlobalTraceService = mscrmGlobalTraceService;
                            this.telemetryService = telemetryService;
                            this.sessionInfo = sessionInfo
                        }

                        Object.defineProperty(MSCRMTraceUtilityService.prototype,
                            "Scenario",
                            {
                                "get": function() { return this.scenario },
                                "set": function(Scenario) {
                                    if (Scenario !== "") {
                                        this.scenario = Scenario;
                                        this.LogInfo(Tracing.TraceComponent.TraceUtility,
                                            "Scenario",
                                            new Mscrm.Designers.Common.Tracing.StringTraceData("Scenario Start"))
                                    } else {
                                        this.LogInfo(Tracing.TraceComponent.TraceUtility,
                                            "Scenario",
                                            new Mscrm.Designers.Common.Tracing.StringTraceData("Scenario End"));
                                        this.scenario = Scenario
                                    }
                                },
                                enumerable: true,
                                configurable: true
                            });
                        MSCRMTraceUtilityService.prototype.Initialize = function() {
                            if (this.mscrmGlobalTraceService.AppTraceLevel == null ||
                                this.mscrmGlobalTraceService
                                .AppTraceLevel ==
                                undefined) this.mscrmGlobalTraceService.AppTraceLevel = Tracing.TraceLevel.Warning;
                            if (this.mscrmGlobalTraceService.AppTraceModule == null ||
                                this.mscrmGlobalTraceService
                                .AppTraceModule ==
                                undefined)
                                this.mscrmGlobalTraceService.AppTraceModule = Tracing.TraceModule.CompositeTracer;
                            this.traceModule = Tracing.TraceFactory.GetTraceModule(this.mscrmGlobalTraceService)
                        };
                        MSCRMTraceUtilityService.prototype.LogError = function(component, traceLocation, data) {
                            this.traceModule.LogError(traceLocation, component, this.scenario, data);
                            var designerErrorEvent = new TelemetryEvents
                                .DesignerErrorEvent(this.sessionInfo.designerName,
                                    this.scenario,
                                    data.ToString(),
                                    null,
                                    false);
                            this.telemetryService.AddTelemetryEvent(designerErrorEvent)
                        };
                        MSCRMTraceUtilityService.prototype
                            .LogWarning = function(component, traceLocation, data) {
                                this.traceModule.LogWarning(traceLocation, component, this.scenario, data)
                            };
                        MSCRMTraceUtilityService.prototype
                            .LogPerf = function(component, traceLocation, data) {
                                this.traceModule.LogPerf(traceLocation, component, this.scenario, data)
                            };
                        MSCRMTraceUtilityService.prototype
                            .LogInfo = function(component, traceLocation, data) {
                                this.traceModule.LogInfo(traceLocation, component, this.scenario, data)
                            };
                        MSCRMTraceUtilityService.prototype
                            .LogVerbose = function(component, traceLocation, data) {
                                this.traceModule.LogVerbose(traceLocation, component, this.scenario, data)
                            };
                        MSCRMTraceUtilityService.$inject = [
                            "mscrmGlobalTraceService", ServiceNames.TelemetryService, "sessionInfo"
                        ];
                        return MSCRMTraceUtilityService
                    }();
                Tracing.MSCRMTraceUtilityService = MSCRMTraceUtilityService;
                angular.module("mscrmCommon").service("mscrmTraceUtilityService", MSCRMTraceUtilityService)
            })(Tracing = Common.Tracing || (Common.Tracing = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Breadcrumb;
            (function(Breadcrumb) {
                "use strict";
                var MscrmBreadcrumbItem = function() {
                    function MscrmBreadcrumbItem(breadcrumbText, breadcrumbUrl, designerName) {
                        this.breadcrumbText = breadcrumbText;
                        this.breadcrumbUrl = breadcrumbUrl;
                        this.designerName = designerName;
                        this.navigatable = false
                    }

                    MscrmBreadcrumbItem.AreTwoBreadcrumbsSame = function(item1, item2) {
                        var result = false;
                        if (item1 === item2) result = true;
                        else if (!item1 || !item2) result = false;
                        else if (item1.breadcrumbText === item2.breadcrumbText &&
                            item1.breadcrumbUrl === item2.breadcrumbUrl &&
                            item1.designerName === item2.designerName &&
                            item1.navigatable === item2.navigatable) result = true;
                        return result
                    };
                    return MscrmBreadcrumbItem
                }();
                Breadcrumb.MscrmBreadcrumbItem = MscrmBreadcrumbItem
            })(Breadcrumb = Common.Breadcrumb || (Common.Breadcrumb = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Breadcrumb;
            (function(Breadcrumb) {
                "use strict";
                var MscrmBreadcrumbList = function() {
                    function MscrmBreadcrumbList() { this.breadCrumbs = [] }

                    MscrmBreadcrumbList.prototype
                        .PushBreadcrumb = function(breadcrumb) { this.breadCrumbs.push(breadcrumb) };
                    MscrmBreadcrumbList.prototype.PopBreadcrumb = function() { return this.breadCrumbs.pop() };
                    MscrmBreadcrumbList.prototype.GetItem = function(i) { return this.breadCrumbs[i] };
                    Object.defineProperty(MscrmBreadcrumbList.prototype,
                        "Count",
                        { "get": function() { return this.breadCrumbs.length }, enumerable: true, configurable: true });
                    MscrmBreadcrumbList.prototype.ForEach = function(ForEachDelegate) {
                        for (var _i = 0, _a = this.breadCrumbs; _i < _a.length; _i++) {
                            var breadCrumbItem = _a[_i];
                            ForEachDelegate(breadCrumbItem)
                        }
                    };
                    return MscrmBreadcrumbList
                }();
                Breadcrumb.MscrmBreadcrumbList = MscrmBreadcrumbList
            })(Breadcrumb = Common.Breadcrumb || (Common.Breadcrumb = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Breadcrumb;
            (function(Breadcrumb) { "use strict" })(Breadcrumb = Common.Breadcrumb || (Common.Breadcrumb = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Breadcrumb;
            (function(Breadcrumb) {
                "use strict";
                var InjectedObjectNames = Mscrm.Designers.Common.Constants.InjectedObjectNames,
                    MscrmBreadcrumbService = function() {
                        function MscrmBreadcrumbService(state, composabilityService, sessionInfo) {
                            this.state = state;
                            this.composabilityService = composabilityService;
                            this.sessionInfo = sessionInfo;
                            this.breadcrumbList = new Breadcrumb.MscrmBreadcrumbList
                        }

                        Object.defineProperty(MscrmBreadcrumbService.prototype,
                            "BreadcrumbList",
                            { "get": function() { return this.breadcrumbList }, enumerable: true, configurable: true });
                        Object.defineProperty(MscrmBreadcrumbService.prototype,
                            "AppModuleId",
                            {
                                "get": function() {
                                    return this.composabilityService
                                        .getComposableContext(Common.Constants.DesignerName.SiteMapDesigner)
                                        .GetComposableContextParams()
                                        .getValue(Common.Constants.ComposableContextParam.AppId)
                                },
                                enumerable: true,
                                configurable: true
                            });
                        MscrmBreadcrumbService.prototype.PushBreadcrumb = function(breadcrumbItem) {
                            for (var i = 0; i < this.breadcrumbList.Count; i++) {
                                var item = this.breadcrumbList.GetItem(i);
                                if (Breadcrumb.MscrmBreadcrumbItem.AreTwoBreadcrumbsSame(item, breadcrumbItem)) return
                            }
                            this.breadcrumbList.Count > 0 &&
                                this.breadcrumbList
                                .ForEach(function(breadcrumbItem) { breadcrumbItem.navigatable = true });
                            this.breadcrumbList.PushBreadcrumb(breadcrumbItem)
                        };
                        MscrmBreadcrumbService.prototype.PopBreadcrumb = function(bNavigate) {
                            if (bNavigate === void 0) bNavigate = true;
                            var breadCrumbItem = this.breadcrumbList.PopBreadcrumb();
                            if (this.breadcrumbList.Count > 0) {
                                var topmostBreadCrumb = this.breadcrumbList.GetItem(this.breadcrumbList.Count - 1);
                                topmostBreadCrumb.navigatable = false;
                                bNavigate &&
                                    this.Navigate(topmostBreadCrumb,
                                        { appId: this.AppModuleId },
                                        { location: "replace" })
                            }
                            return breadCrumbItem
                        };
                        MscrmBreadcrumbService.prototype.UnwindTillBreadcrumb = function(breadcrumbItem) {
                            while (this.breadcrumbList.Count > 0 &&
                                this.breadcrumbList.GetItem(this.breadcrumbList
                                    .Count -
                                    1) !==
                                breadcrumbItem) this.PopBreadcrumb(false);
                            this.Navigate(breadcrumbItem, { appId: this.AppModuleId }, { location: "replace" })
                        };
                        MscrmBreadcrumbService.prototype
                            .Navigate = function(breadcrumbItem, params, options, forwardNavigate) {
                                var _this = this;
                                this.state.go(breadcrumbItem.breadcrumbUrl, params, options).then(function() {
                                    forwardNavigate === true && _this.PushBreadcrumb(breadcrumbItem);
                                    _this.UpdateDesignerName(breadcrumbItem)
                                }.bind(this))
                            };
                        MscrmBreadcrumbService.prototype
                            .UpdateDesignerName = function(breadcrumbItem) {
                                this.sessionInfo.designerName = breadcrumbItem.designerName
                            };
                        MscrmBreadcrumbService.$inject = [
                            "$state", Common.Constants.ServiceNames.ComposabilityService, InjectedObjectNames
                            .SessionInfo
                        ];
                        return MscrmBreadcrumbService
                    }();
                Common.CommonModule.service("mscrmBreadcrumbService", MscrmBreadcrumbService)
            })(Breadcrumb = Common.Breadcrumb || (Common.Breadcrumb = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Breadcrumb;
            (function(Breadcrumb) {
                "use strict";

                function MscrmBreadcrumbDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl: "/Designers/Common/Breadcrumb/Template/MscrmBreadcrumb.html?v=8200000749"
                    }
                }

                Common.CommonModule.directive("mscrmBreadcrumb", MscrmBreadcrumbDirective)
            })(Breadcrumb = Common.Breadcrumb || (Common.Breadcrumb = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Breadcrumb;
            (function(Breadcrumb) {
                "use strict";
                var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    MscrmBreadcrumbController = function() {
                        function MscrmBreadcrumbController(scope,
                            mscrmBreadcrumbService,
                            dirtyCheckService,
                            modalDialogService,
                            localizationService) {
                            this.mscrmBreadcrumbService = mscrmBreadcrumbService;
                            this.dirtyCheckService = dirtyCheckService;
                            this.modalDialogService = modalDialogService;
                            this.localizationService = localizationService;
                            scope.breadcrumbList = this.mscrmBreadcrumbService.BreadcrumbList;
                            scope.breadCrumbClickHandler = this.breadCrumbClickHandler.bind(this)
                        }

                        MscrmBreadcrumbController.prototype
                            .navigate = function(breadCrumb) {
                                this.mscrmBreadcrumbService.UnwindTillBreadcrumb(breadCrumb)
                            };
                        MscrmBreadcrumbController.prototype.breadCrumbClickHandler = function(breadCrumb) {
                            if (breadCrumb.navigatable)
                                if (this.dirtyCheckService.isDirty()) {
                                    var promise = this.modalDialogService
                                        .open(new Common.ModalDialog
                                            .ConfirmDialogParams(this.localizationService
                                                .getResourceString("AppDesigner.UnsavedChanges"),
                                                this.localizationService
                                                .getResourceString("AppDesigner.UnsavedChangesMessage"),
                                                this.localizationService.getResourceString("AppDesigner.OK"),
                                                this.localizationService.getResourceString("AppDesigner.Cancel")));
                                    promise.then(function(result) {
                                            this.dirtyCheckService.clearAll();
                                            this.navigate(breadCrumb)
                                        }.bind(this),
                                        function(result) {}.bind(this))
                                } else this.navigate(breadCrumb)
                        };
                        MscrmBreadcrumbController.$inject = [
                            "$scope", "mscrmBreadcrumbService", ServiceNames.DirtyCheckService, Common.Constants
                            .ServiceNames.ModalDialogService, Common.Constants.ServiceNames.LocalizationService
                        ];
                        return MscrmBreadcrumbController
                    }();
                Common.CommonModule.controller("mscrmBreadcrumbController", MscrmBreadcrumbController)
            })(Breadcrumb = Common.Breadcrumb || (Common.Breadcrumb = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var TypeaheadSearch;
            (function(TypeaheadSearch) {
                "use strict";

                function TypeaheadSearchControlDirective() {
                    return {
                        replace: true,
                        restrict: "E",
                        templateUrl:
                            "/Designers/Common/TypeaheadSearch/Templates/TypeaheadSearchControl.html?v=8200000749",
                        scope: { searchText: "=" }
                    }
                }

                Common.CommonModule.directive("mscrmTypeaheadSearchControl", TypeaheadSearchControlDirective)
            })(TypeaheadSearch = Common.TypeaheadSearch || (Common.TypeaheadSearch = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Utility;
            (function(Utility) {
                var CachingUtilityService = function() {
                    function CachingUtilityService() { this.cache = new Common.Models.Dictionary }

                    CachingUtilityService.prototype.Add = function(key, value) { this.cache.upsert(key, value) };
                    CachingUtilityService.prototype.Get = function(key) { return this.cache.getValue(key) };
                    return CachingUtilityService
                }();
                Utility.CachingUtilityService = CachingUtilityService;
                Common.CommonModule.service(Common.Constants.ServiceNames.CacheUtilityService, CachingUtilityService)
            })(Utility = Common.Utility || (Common.Utility = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Utility;
            (function(Utility) {
                var ResourceStrings = Common.Constants.ResourceStrings,
                    ErrorUtilityService = function() {
                        function ErrorUtilityService(windowService, localizationService, urlHelperService) {
                            this.windowService = windowService;
                            this.localizationService = localizationService;
                            this.urlHelperService = urlHelperService
                        }

                        Object.defineProperty(ErrorUtilityService.prototype,
                            "NetworkFailureStatus",
                            {
                                "get": function() { return /status\s*:\s+[0]:/gi },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        Object.defineProperty(ErrorUtilityService.prototype,
                            "ServerDownStatus",
                            {
                                "get": function() { return /status\s*:\s*[0-9]{3}\s*:\s*[\w\s]+/gi },
                                enumerable: true,
                                configurable: true
                            });
                        Object.defineProperty(ErrorUtilityService.prototype,
                            "ServerErrorStatus",
                            {
                                "get": function() { return /status\s*:\s*5[0-9]{2}/gi },
                                enumerable: true,
                                configurable: true
                            });
                        ErrorUtilityService.prototype.GetErrorString = function(error, status) {
                            var errorMsgs = [
                                    this.localizationService.getResourceString(ResourceStrings.networkFailure), this
                                    .localizationService.getResourceString(ResourceStrings.genericError)
                                ],
                                errorIndex = 0;
                            if (status != undefined)
                                switch (status) {
                                case -1:
                                case 0:
                                    errorIndex = 0;
                                    break;
                                default:
                                    errorIndex = 1;
                                    break
                                }
                            else if (error && error.search(this.NetworkFailureStatus) > -1) errorIndex = 0;
                            else if (error.search(this.ServerDownStatus) > -1) errorIndex = 1;
                            else return error;
                            return errorMsgs[errorIndex]
                        };
                        ErrorUtilityService.prototype
                            .RedirectToErrorHandlerPage = function(errorString, errorCode) {
                                this.windowService.location
                                    .href = this.urlHelperService.ClientUrl +
                                    "/_common/error/errorhandler.aspx?BackUri=&ErrorCode=" +
                                    errorCode +
                                    "&inline=1&Parm0=" +
                                    errorString +
                                    "&Parm1=" +
                                    errorString
                            };
                        ErrorUtilityService.prototype.IsServerError = function(errorMessage) {
                            var bRet = false;
                            if (errorMessage.search(this.ServerErrorStatus) > -1) bRet = true;
                            return bRet
                        };
                        ErrorUtilityService.$inject = [
                            Common.Constants.ServiceNames.WindowService, Common.Constants.ServiceNames
                            .LocalizationService,
                            Common.Constants.ServiceNames.UrlHelperService
                        ];
                        return ErrorUtilityService
                    }();
                Utility.ErrorUtilityService = ErrorUtilityService;
                Common.CommonModule.service(Common.Constants.ServiceNames.ErrorUtilityService, ErrorUtilityService)
            })(Utility = Common.Utility || (Common.Utility = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Utility;
            (function(Utility) {
                "use strict";
                var JQueryUtilities = function() {
                    function JQueryUtilities() {}

                    JQueryUtilities.SelectSiblingInput = function(element, $event) {
                        if (!Common.Utility.ScriptUtilities.IsNullOrUndefined($event) &&
                            !Common.Utility.ScriptUtilities.IsNullOrUndefined($event.target) &&
                            !Common.Utility.ScriptUtilities.IsNullOrUndefined($event.target.attributes) &&
                            !Common.Utility.ScriptUtilities
                            .IsNullOrUndefined($event.target.attributes.getNamedItem("data-isflyout-src")) &&
                            $event.target.attributes.getNamedItem("data-isflyout-src").value === "true") {
                            var inputTextBox = element.parent().find("input");
                            !Common.Utility.ScriptUtilities.IsNullOrUndefined(inputTextBox) && inputTextBox.select();
                            $event.stopPropagation()
                        }
                    };
                    JQueryUtilities.dropDownIdPostfix = "DropDown";
                    return JQueryUtilities
                }();
                Utility.JQueryUtilities = JQueryUtilities
            })(Utility = Common.Utility || (Common.Utility = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                var Queue = function() {
                    function Queue() { this._arr = [] }

                    Object.defineProperty(Queue.prototype,
                        "canDequeue",
                        { "get": function() { return this._arr.length > 0 }, enumerable: true, configurable: true });
                    Object.defineProperty(Queue.prototype,
                        "count",
                        { "get": function() { return this._arr.length }, enumerable: true, configurable: true });
                    Queue.prototype.enqueue = function(item) { this._arr.push(item) };
                    Queue.prototype.dequeue = function() { return this._arr.shift() };
                    Queue.prototype.peek = function() {
                        if (this._arr.length === 0) return undefined;
                        return this._arr[0]
                    };
                    Queue.prototype.clear = function() {
                        delete this._arr;
                        this._arr = []
                    };
                    return Queue
                }();
                Models.Queue = Queue
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Utility;
            (function(Utility) {
                "use strict";
                var ScriptUtilities = function() {
                    function ScriptUtilities() {}

                    ScriptUtilities.IsNullOrUndefined = function(obj) { return obj == null || obj == undefined };
                    ScriptUtilities.IsMacMachine = function() { return navigator.platform.indexOf("Mac") !== -1 };
                    ScriptUtilities.IsNullOrUndefinedNested = function(objectNode, key) {
                        var isValid = key.split(".").every(function(x) {
                            if (typeof objectNode != "object" ||
                                objectNode == null ||
                                !(x in objectNode) ||
                                objectNode[x] == null) return false;
                            objectNode = objectNode[x];
                            return true
                        });
                        return isValid
                    };
                    return ScriptUtilities
                }();
                Utility.ScriptUtilities = ScriptUtilities
            })(Utility = Common.Utility || (Common.Utility = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Utility;
            (function(Utility) {
                (function(CharacterSet) {
                    CharacterSet[CharacterSet["WhiteSpace"] = 0] = "WhiteSpace";
                    CharacterSet[CharacterSet["NonEnglish"] = 1] = "NonEnglish"
                })(Utility.CharacterSet || (Utility.CharacterSet = {}));
                var CharacterSet = Utility.CharacterSet,
                    StringCleansingService = function() {
                        function StringCleansingService() {}

                        StringCleansingService.prototype.CleanseString = function(input, removalCharacterSets) {
                            var output = input;
                            removalCharacterSets.forEach(function(charSet, index, removalCharacterSets) {
                                switch (charSet) {
                                case CharacterSet.WhiteSpace:
                                    output = output.replace(Utility.StringUtilities.WhiteSpace,
                                        Utility.StringUtilities.EmptyString);
                                    break;
                                case CharacterSet.NonEnglish:
                                    var outputString = output
                                        .match(Utility.StringUtilities.EnglishAndNumericCharacters);
                                    if (!Common.Utility.ScriptUtilities.IsNullOrUndefined(outputString) &&
                                        outputString
                                        .length >
                                        0) output = outputString.join(Utility.StringUtilities.EmptyString);
                                    else output = Utility.StringUtilities.EmptyString;
                                    break
                                }
                            });
                            return output
                        };
                        return StringCleansingService
                    }();
                Utility.StringCleansingService = StringCleansingService;
                Common.CommonModule.service(Common.Constants.ServiceNames.StringCleansingService,
                    StringCleansingService)
            })(Utility = Common.Utility || (Common.Utility = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Utility;
            (function(Utility) {
                "use strict";
                var StringUtilities = function() {
                    function StringUtilities() {}

                    Object.defineProperty(StringUtilities,
                        "EmptyString",
                        { "get": function() { return "" }, enumerable: true, configurable: true });
                    Object.defineProperty(StringUtilities,
                        "WhiteSpace",
                        { "get": function() { return / /g }, enumerable: true, configurable: true });
                    Object.defineProperty(StringUtilities,
                        "EnglishAndNumericCharacters",
                        { "get": function() { return /([a-z0-9A-Z]+)/g }, enumerable: true, configurable: true });
                    Object.defineProperty(StringUtilities,
                        "ValidIdExpression",
                        { "get": function() { return /([a-z0-9A-Z_]+)/g }, enumerable: true, configurable: true });
                    StringUtilities.IsNullOrEmpty = function(str) {
                        return str == null || str == undefined || str == ""
                    };
                    StringUtilities.Format = function(str, args) {
                        if (StringUtilities.IsNullOrEmpty(str)) return str;
                        return str.replace(/\{\{|\}\}|\{(\d+)\}/g,
                            function(match, group) {
                                if (match == "{{") return "{";
                                if (match == "}}") return "}";
                                return args[group]
                            })
                    };
                    StringUtilities.EndsWithString = function(mainString, subString) {
                        return mainString.indexOf(subString, mainString.length - subString.length) !== -1
                    };
                    StringUtilities.IsBlankString = function(str) { return str.replace(/\s/g, "").length == 0 };
                    return StringUtilities
                }();
                Utility.StringUtilities = StringUtilities
            })(Utility = Common.Utility || (Common.Utility = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Utility;
            (function(Utility) {
                var UrlHelperService = function() {
                    function UrlHelperService(windowService, solutionId, solutionUniqueName) {
                        this.windowService = windowService;
                        this.solutionId = solutionId;
                        this.solutionUniqueName = solutionUniqueName;
                        this.rawValue = this.windowService.navigator.userAgent;
                        this.isBrowserIE = false;
                        this.isBrowserEdge = false;
                        this.isBrowserFirefox = false;
                        this.isBrowserChrome = false;
                        this.isBrowserChromeGauntletVersion = false;
                        this.isBrowserSafari = false;
                        this.AppsSubPath = "/Apps"
                    }

                    Object.defineProperty(UrlHelperService.prototype,
                        "SolutionId",
                        { "get": function() { return this.solutionId }, enumerable: true, configurable: true });
                    Object.defineProperty(UrlHelperService.prototype,
                        "SolutionUniqueName",
                        { "get": function() { return this.solutionUniqueName }, enumerable: true, configurable: true });
                    Object.defineProperty(UrlHelperService.prototype,
                        "ClientUrl",
                        {
                            "get": function() {
                                if (Utility.StringUtilities.IsNullOrEmpty(this.clientUrl)) {
                                    var hrefLocation = this.windowService.location.href,
                                        occurence = hrefLocation.indexOf(this.windowService.location.pathname),
                                        hostname = hrefLocation.substring(0, occurence);
                                    if (this.windowService.IsOnlineOrIfd
                                        .toLowerCase() ===
                                        "false") this.clientUrl = hostname + "/" + this.windowService.orgName;
                                    else this.clientUrl = hostname
                                }
                                return this.clientUrl
                            },
                            "set": function(url) { this.clientUrl = url },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "ODataServiceEndpoint",
                        { "get": function() { return "/api/data/v8.2" }, enumerable: true, configurable: true });
                    Object.defineProperty(UrlHelperService.prototype,
                        "SoapServiceEndPoint",
                        {
                            "get": function() { return "/XRMServices/2011/Organization.svc/web" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "SoapHeaderObject",
                        {
                            "get": function() {
                                return {
                                    Accept: "application / xml, text / xml, */*",
                                    "Content-Type": "text/xml; charset=UTF-8",
                                    SOAPAction:
                                        "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute"
                                }
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "GetMethod",
                        { "get": function() { return "GET" }, enumerable: true, configurable: true });
                    Object.defineProperty(UrlHelperService.prototype,
                        "PostMethod",
                        { "get": function() { return "POST" }, enumerable: true, configurable: true });
                    Object.defineProperty(UrlHelperService.prototype,
                        "EmptyUrl",
                        {
                            "get": function() { return Utility.StringUtilities.EmptyString },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "RootDesignerPath",
                        {
                            "get": function() { return this.ClientUrl + "/designers/" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "ODataEndPointUrl",
                        {
                            "get": function() { return this.ClientUrl + this.ODataServiceEndpoint + "/" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "GetDefaultSiteMapUrl",
                        {
                            "get": function() {
                                return "/sitemaps/" +
                                    Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                    "?$filter=isappaware eq false"
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "GetSiteMapByUniqueNameUrl",
                        {
                            "get": function() {
                                return "/sitemaps/" +
                                    Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                    "?$filter=sitemapnameunique eq '{0}'"
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "GetUnpublishedSiteMapUrl",
                        {
                            "get": function() {
                                return "/sitemaps/" +
                                    Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                    "?$filter=sitemapid eq {0}"
                            },
                            enumerable: true,
                            configurable: true
                        });
                    UrlHelperService.prototype
                        .GetDashboardLayoutUrl = function() {
                            return this.ClientUrl + "/tools/dashboardeditor/dialogs/dashboardlayoutdialog.aspx?dType=1"
                        };
                    UrlHelperService.prototype.GetUserAgent = function() {
                        this.isBrowserIE = this.rawValue.indexOf("MSIE") != -1 || this.rawValue.indexOf("Trident") != -1
                            ? true
                            : false;
                        this.isBrowserEdge = this.rawValue.indexOf("Edge/") != -1 ? true : false;
                        this.isBrowserChrome = this.rawValue.indexOf("Chrome") != -1 ? true : false;
                        if (this.isBrowserChrome)
                            this
                                .isBrowserChromeGauntletVersion =
                                this.rawValue.indexOf("20.0") != -1 || this.rawValue.indexOf("27.0") != -1;
                        this.isBrowserFirefox = this.rawValue.indexOf("Firefox") != -1 ? true : false;
                        if (this.rawValue.indexOf("Safari") != -1)
                            if (this.rawValue
                                .indexOf("Chrome") !=
                                -1 ||
                                this.rawValue.indexOf("Android") != -1) this.isBrowserSafari = false;
                            else this.isBrowserSafari = true;
                        return this.GetBrowserType()
                    };
                    UrlHelperService.prototype.GetBrowserType = function() {
                        if (this.isBrowserChrome) return "Chrome";
                        else if (this.isBrowserEdge) return "Edge";
                        else if (this.isBrowserFirefox) return "FireFox";
                        else if (this.isBrowserIE) return "Internet Explorer";
                        else if (this.isBrowserSafari) return "Safari";
                        return this.rawValue
                    };
                    UrlHelperService.prototype
                        .GetLaunchPage = function() { return this.windowService.location.hash.split("/")[1] };
                    UrlHelperService.prototype
                        .SitemapGenraterandomID = function() { return Math.random().toString(16).substring(7) };
                    UrlHelperService.prototype
                        .GetWorkflowTemplatePageUrl = function() {
                            return this.ClientUrl + "/sfa/workflow/workflowTemplate/workflowTemplatePage.aspx?dType=1"
                        };
                    Object.defineProperty(UrlHelperService.prototype,
                        "DashboardListUrlEndpoint",
                        {
                            "get": function() {
                                return "/systemforms/" +
                                    Common.Constants.CRMWebApiReferenceConstants.RetrieveUnpublishedMultiple +
                                    "?$select=name,formid&$filter=(type eq 0)"
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "EntityListUrlEndpoint",
                        {
                            "get": function() {
                                return "/EntityDefinitions?$select=LogicalName,DisplayName,DisplayCollectionName,EntityColor,IsCustomEntity,ObjectTypeCode,CanCreateForms,CanCreateViews,CanCreateCharts,IsCustomizable&$filter="
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "EntitiesShownInCustomizationUIFilter",
                        {
                            "get": function() { return "(IsIntersect eq false and IsLogicalEntity eq false)" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "EntitiesCanBeCustomizedFilter",
                        {
                            "get": function() { return this.GetEntitiesCustomizedFilterString() },
                            enumerable: true,
                            configurable: true
                        });
                    UrlHelperService.prototype.GetEntitiesCustomizedFilterString = function() {
                        for (var customizedFilterString = "",
                            customizedFilter = Common.Constants.UtilityConstants.customizedFilter,
                            indexValue = 0;
                            indexValue < customizedFilter.length;
                            indexValue++) {
                            customizedFilterString += customizedFilter[indexValue];
                            if (indexValue != customizedFilter.length - 1
                            ) customizedFilterString += Common.Constants.UtilityConstants.OrOperator
                        }
                        return "(" + customizedFilterString + ")"
                    };
                    Object.defineProperty(UrlHelperService.prototype,
                        "EntitiesBlacklistedFilter",
                        {
                            "get": function() { return this.GetBlacklistedOTC() },
                            enumerable: true,
                            configurable:
                                true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "WebresourceUrlEndpoint",
                        {
                            "get": function() {
                                return "/webresourceset?$select=name,displayname,webresourcetype&$filter=webresourcetype eq 1 or webresourcetype eq 5"
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "LanguageLocaleUrlEndpoint",
                        {
                            "get": function() { return "/languagelocale?$select=language,name,localeid" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "PublishXmlEndpoint",
                        { "get": function() { return "/PublishXml" }, enumerable: true, configurable: true });
                    Object.defineProperty(UrlHelperService.prototype,
                        "GetDefaultDashboardUrl",
                        {
                            "get": function() { return "/workplace/home_dashboards.aspx" },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "CrmScriptErrorEndpoint",
                        {
                            "get": function() {
                                return this.ClientUrl + "/AppWebServices/ScriptError.asmx/SendScriptErrorReport"
                            },
                            enumerable: true,
                            configurable: true
                        });
                    UrlHelperService.prototype.GetBlacklistedOTC = function() {
                        for (var BlackListedOTCs = Common.Constants.UtilityConstants.BlackListedOTCs,
                            BlackListString = "",
                            indexBlackList = 0;
                            indexBlackList < BlackListedOTCs.length;
                            indexBlackList++) {
                            BlackListString = BlackListString +
                                Common.Constants.UtilityConstants.ObjectTypeCodeNotEqual +
                                BlackListedOTCs[indexBlackList];
                            if (indexBlackList != BlackListedOTCs.length - 1
                            ) BlackListString += Common.Constants.UtilityConstants.AndOperator
                        }
                        return BlackListString
                    };
                    Object.defineProperty(UrlHelperService.prototype,
                        "EntityListRetrieveUrl",
                        {
                            "get": function() {
                                return this.EntityListUrlEndpoint +
                                    this.EntitiesShownInCustomizationUIFilter +
                                    Common.Constants.UtilityConstants.AndOperator +
                                    this.EntitiesCanBeCustomizedFilter +
                                    Common.Constants.UtilityConstants.AndOperator +
                                    this.EntitiesBlacklistedFilter
                            },
                            enumerable: true,
                            configurable: true
                        });
                    Object.defineProperty(UrlHelperService.prototype,
                        "AllEntityListRetrieveUrl",
                        {
                            "get": function() {
                                return "/EntityDefinitions?$select=LogicalName,DisplayName,DisplayCollectionName,EntityColor,IsCustomEntity,ObjectTypeCode,CanCreateForms,CanCreateViews,CanCreateCharts,IsCustomizable"
                            },
                            enumerable: true,
                            configurable: true
                        });
                    UrlHelperService.$inject = ["$window", "solutionId", "solutionUniqueName"];
                    return UrlHelperService
                }();
                Utility.UrlHelperService = UrlHelperService;
                Common.CommonModule.service(Common.Constants.ServiceNames.UrlHelperService, UrlHelperService)
            })(Utility = Common.Utility || (Common.Utility = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Models;
            (function(Models) {
                "use strict";
                var Dictionary = function() {
                    function Dictionary() {
                        this.keys = [];
                        this.values = []
                    }

                    Dictionary.prototype.add = function(key, value) {
                        if (!this.containsKey(key)) {
                            this.keys.push(key);
                            this.values.push(value);
                            return true
                        }
                        return false
                    };
                    Dictionary.prototype.upsert = function(key, value) {
                        !this.update(key, value) && this.add(key, value)
                    };
                    Dictionary.prototype.sortedUpsert = function(key, value) {
                        if (!this.update(key, value)) {
                            var insertIndex = 0;
                            while (insertIndex < this.keys.length && this.keys[insertIndex] < key) insertIndex++;
                            this.keys.splice(insertIndex, 0, key);
                            this.values.splice(insertIndex, 0, value)
                        }
                    };
                    Dictionary.prototype.clear = function() {
                        this.keys = [];
                        this.values = []
                    };
                    Dictionary.prototype.containsKey = function(key) { return this.keys.indexOf(key) !== -1 };
                    Dictionary.prototype.containsValue = function(value) { return this.values.indexOf(value) !== -1 };
                    Dictionary.prototype.count = function() { return this.keys.length };
                    Dictionary.prototype.getValue = function(key) {
                        var keyIndex = this.keys.indexOf(key);
                        if (keyIndex !== -1) return this.values[keyIndex];
                        return false
                    };
                    Dictionary.prototype.getKeys = function() { return this.keys.slice() };
                    Dictionary.prototype.getValues = function() { return this.values.slice() };
                    Dictionary.prototype.remove = function(key) {
                        var keyIndex = this.keys.indexOf(key);
                        if (keyIndex !== -1) {
                            this.keys.splice(keyIndex, 1);
                            this.values.splice(keyIndex, 1);
                            return true
                        }
                        return false
                    };
                    Dictionary.prototype.update = function(key, value) {
                        var keyIndex = this.keys.indexOf(key);
                        if (keyIndex !== -1) {
                            this.values[keyIndex] = value;
                            return true
                        }
                        return false
                    };
                    return Dictionary
                }();
                Models.Dictionary = Dictionary
            })(Models = Common.Models || (Common.Models = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Localization;
            (function(Localization) { "use strict" })(Localization = Common.Localization || (Common.Localization = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Localization;
            (function(Localization) {
                "use strict";
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    LocalizationService = function() {
                        function LocalizationService() { this.locStringsMap = new Dictionary }

                        LocalizationService.prototype
                            .parseSerializedString = function(resourceString) {
                                return resourceString.replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t")
                                    .replace(/\\b/g, "\b")
                            };
                        LocalizationService.prototype
                            .setResourceStrings = function(resourceStrings) {
                                for (var designerKey in resourceStrings
                                )
                                    for (var key in JSON.parse(JSON
                                        .stringify(resourceStrings[designerKey]))
                                    )
                                        this.locStringsMap.add(key,
                                            this.parseSerializedString(resourceStrings[designerKey][key]))
                            };
                        LocalizationService.prototype.getResourceString = function(resourceKey) {
                            if (this.locStringsMap
                                .containsKey(resourceKey)) return this.locStringsMap.getValue(resourceKey);
                            else return resourceKey
                        };
                        return LocalizationService
                    }();
                angular.module(Common.Constants.ModuleNames.CommonModule)
                    .service("mscrmLocalizationService", LocalizationService)
            })(Localization = Common.Localization || (Common.Localization = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Localization;
            (function(Localization) {
                "use strict";
                var LocalizationController = function() {
                    function LocalizationController(scope, mscrmLocalizationService) {
                        scope.mscrmLocalizedString = mscrmLocalizationService.getResourceString(scope.mscrmResourceKey)
                    }

                    LocalizationController.$inject = ["$scope", "mscrmLocalizationService"];
                    return LocalizationController
                }();
                Common.CommonModule.controller("mscrmLocalizationController", LocalizationController)
            })(Localization = Common.Localization || (Common.Localization = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Localization;
            (function(Localization) {
                "use strict";

                function LocalizationElementDirective() {
                    return {
                        restrict: "E",
                        scope: { mscrmResourceKey: "@" },
                        link: function(scope, element) { element.replaceWith(scope.mscrmLocalizedString) },
                        controller: "mscrmLocalizationController"
                    }
                }

                function LocalizationAttributeDirective() {
                    return {
                        restrict: "A",
                        scope: { mscrmResourceKey: "@", mscrmTargetAttr: "@" },
                        link: function(scope, element) {
                            element.attr(scope.mscrmTargetAttr, scope.mscrmLocalizedString)
                        },
                        controller: "mscrmLocalizationController"
                    }
                }

                Common.CommonModule.directive("mscrmLocale", LocalizationElementDirective);
                Common.CommonModule.directive("mscrmLocale", LocalizationAttributeDirective)
            })(Localization = Common.Localization || (Common.Localization = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Config;
            (function(Config) {
                "use strict";
                var DesignerConfig = function() {
                    function DesignerConfig(Name, IsEnabled, IsAuthorized) {
                        this.Name = Name;
                        this.IsEnabled = IsEnabled;
                        this.IsAuthorized = IsAuthorized
                    }

                    DesignerConfig.prototype.IsLaunchable = function() { return this.IsEnabled && this.IsAuthorized };
                    return DesignerConfig
                }();
                Config.DesignerConfig = DesignerConfig
            })(Config = Common.Config || (Common.Config = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Config;
            (function(Config) {
                "use strict";
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    Tracing = Mscrm.Designers.Common.Tracing,
                    ServiceNames = Common.Constants.ServiceNames,
                    DesignerConfigService = function() {
                        function DesignerConfigService(traceUtility, designerConfigs) {
                            this.traceUtility = traceUtility;
                            this.designerConfigs = designerConfigs;
                            this.designerConfigMap = new Dictionary;
                            for (var key in designerConfigs) {
                                var config = new Config
                                    .DesignerConfig(designerConfigs[key].Name,
                                        designerConfigs[key].IsEnabled,
                                        designerConfigs[key].IsAuthorized);
                                this.designerConfigMap.add(key, config)
                            }
                        }

                        DesignerConfigService.prototype.getDesignerConfig = function(designerName) {
                            this.traceUtility.Scenario = Common.Constants.TracingScenarios.DesignerConfig;
                            if (this.designerConfigMap
                                .containsKey(designerName)) return this.designerConfigMap.getValue(designerName);
                            else {
                                this.traceUtility.LogError(Tracing.TraceComponent.Common,
                                    Common.Constants.TracingScenarios.DesignerConfig,
                                    new Mscrm.Designers.Common.Tracing
                                    .StringTraceData("ConfigFailure: DesignerConfig not present for " + designerName));
                                this.traceUtility.Scenario = "";
                                return null
                            }
                        };
                        DesignerConfigService.$inject = [ServiceNames.TraceUtilityService, "designerConfigs"];
                        return DesignerConfigService
                    }();
                angular.module(Common.Constants.ModuleNames.CommonModule)
                    .service("mscrmDesignerConfigService", DesignerConfigService)
            })(Config = Common.Config || (Common.Config = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Composability;
            (function(Composability) {
                var ComposableItem = function() {
                    function ComposableItem(Name, Id, Type) {
                        this.Name = Name;
                        this.Id = Id;
                        this.Type = Type
                    }

                    return ComposableItem
                }();
                Composability.ComposableItem = ComposableItem
            })(Composability = Common.Composability || (Common.Composability = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Composability;
            (function(Composability) { "use strict" })(Composability =
                Common.Composability || (Common.Composability = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Composability;
            (function(Composability) {
                "use strict";
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    ComposabilityService = function() {
                        function ComposabilityService() { this.contextMap = new Dictionary }

                        ComposabilityService.prototype
                            .setComposableContext = function(designerName, composableContext) {
                                this.contextMap.upsert(designerName, composableContext)
                            };
                        ComposabilityService.prototype.getComposableContext = function(designerName) {
                            if (this.contextMap
                                .containsKey(designerName)) return this.contextMap.getValue(designerName);
                            else return null
                        };
                        return ComposabilityService
                    }();
                angular.module(Common.Constants.ModuleNames.CommonModule)
                    .service("mscrmComposabilityService", ComposabilityService)
            })(Composability = Common.Composability || (Common.Composability = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Services;
            (function(Services) {
                "use strict";
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    DirtyCheckService = function() {
                        function DirtyCheckService() { this.dirtyCheckMap = new Dictionary }

                        DirtyCheckService.prototype.setDirty = function(modelKey, value) {
                            if (!value) {
                                this.dirtyCheckMap.remove(modelKey);
                                return
                            }
                            this.dirtyCheckMap.upsert(modelKey, true)
                        };
                        DirtyCheckService.prototype.getDirty = function(modelKey) {
                            return this.dirtyCheckMap.containsKey(modelKey)
                        };
                        DirtyCheckService.prototype
                            .isDirty = function() { return this.dirtyCheckMap.getKeys().length > 0 };
                        DirtyCheckService.prototype.clearAll = function() { this.dirtyCheckMap = new Dictionary };
                        DirtyCheckService.prototype.IsDesignerInDirtyState = function(designerName) {
                            switch (designerName) {
                            case Common.Constants.DesignerName.AppDesigner:
                                return this.getDirty(Common.Constants.DirtyCheckModelNames.AppCreateForm) ||
                                    this.getDirty(Common.Constants.DirtyCheckModelNames.AppDesignerCanvas);
                            case Common.Constants.DesignerName.SiteMapDesigner:
                                return this.getDirty(Common.Constants.DirtyCheckModelNames.SiteMapForm) ||
                                    this.getDirty(Common.Constants.DirtyCheckModelNames.SiteMapCanvas);
                            default:
                                return false
                            }
                        };
                        return DirtyCheckService
                    }();
                angular.module(Common.Constants.ModuleNames.CommonModule)
                    .service("mscrmDirtyCheckService", DirtyCheckService)
            })(Services = Common.Services || (Common.Services = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var FlyoutManagement;
            (function(FlyoutManagement) {
                "use strict";
                var FlyoutContainerStack = function() {
                    function FlyoutContainerStack() { this.flyoutContainers = [] }

                    Object.defineProperty(FlyoutContainerStack.prototype,
                        "StackSize",
                        {
                            "get": function() { return this.flyoutContainers.length },
                            enumerable: true,
                            configurable: true
                        });
                    FlyoutContainerStack.prototype
                        .PushFlyoutContainer = function(newFlyoutContainer) {
                            this.flyoutContainers.push(newFlyoutContainer)
                        };
                    FlyoutContainerStack.prototype
                        .PopFlyoutContainer = function() { return this.flyoutContainers.pop() };
                    FlyoutContainerStack.prototype
                        .PopAndExecute = function(executeFunction) {
                            while (this.flyoutContainers.length > 0) executeFunction(this.flyoutContainers.pop())
                        };
                    return FlyoutContainerStack
                }();
                FlyoutManagement.FlyoutContainerStack = FlyoutContainerStack
            })(FlyoutManagement = Common.FlyoutManagement || (Common.FlyoutManagement = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var FlyoutManagement;
            (function(FlyoutManagement) { "use strict" })(FlyoutManagement =
                Common.FlyoutManagement || (Common.FlyoutManagement = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var FlyoutManagement;
            (function(FlyoutManagement) {
                "use strict";
                var FlyoutContainer = function() {
                    function FlyoutContainer() { this.isFlyoutOpen = false }

                    Object.defineProperty(FlyoutContainer.prototype,
                        "IsFlyoutOpen",
                        { "get": function() { return this.isFlyoutOpen }, enumerable: true, configurable: true });
                    FlyoutContainer.prototype.Show = function() { this.isFlyoutOpen = true };
                    FlyoutContainer.prototype.Hide = function() { this.isFlyoutOpen = false };
                    FlyoutContainer.prototype.ToggleFlyout = function(flyoutService, $event, activeSrcElementId) {
                        if (this.isFlyoutOpen) flyoutService.Hide();
                        else flyoutService.Show(this, activeSrcElementId);
                        !Common.Utility.ScriptUtilities.IsNullOrUndefined($event) && $event.stopPropagation()
                    };
                    return FlyoutContainer
                }();
                FlyoutManagement.FlyoutContainer = FlyoutContainer
            })(FlyoutManagement = Common.FlyoutManagement || (Common.FlyoutManagement = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var FlyoutManagement;
            (function(FlyoutManagement) { "use strict" })(FlyoutManagement =
                Common.FlyoutManagement || (Common.FlyoutManagement = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var FlyoutManagement;
            (function(FlyoutManagement) {
                var FlyoutService = function() {
                    function FlyoutService(rootScope) {
                        this.rootScope = rootScope;
                        this.nestedFlyoutContainerStack = new FlyoutManagement.FlyoutContainerStack;
                        this.currOpenFlyoutSrcElementId = ""
                    }

                    FlyoutService.prototype.Show = function(newFlyoutContainer, activeSrcElementId) {
                        this.Hide();
                        newFlyoutContainer.Show();
                        this.nestedFlyoutContainerStack.PushFlyoutContainer(newFlyoutContainer);
                        this.currOpenFlyoutSrcElementId = activeSrcElementId
                    };
                    FlyoutService.prototype.Hide = function(stopEventBroadcast) {
                        if (stopEventBroadcast == undefined || !stopEventBroadcast
                        )
                            this.nestedFlyoutContainerStack.StackSize != 0 &&
                                this.rootScope.$broadcast("mscrm-flyoutClose", this.currOpenFlyoutSrcElementId);
                        this.nestedFlyoutContainerStack.PopAndExecute(this.HideSingleFlyout);
                        this.currOpenFlyoutSrcElementId = ""
                    };
                    FlyoutService.prototype.ShowSubFlyout = function(subFlyoutContainer) {
                        subFlyoutContainer.Show();
                        this.nestedFlyoutContainerStack.PushFlyoutContainer(subFlyoutContainer)
                    };
                    FlyoutService.prototype.HideSubFlyout = function() {
                        if (this.nestedFlyoutContainerStack.StackSize > 0) {
                            var lastSubFlyout = this.nestedFlyoutContainerStack.PopFlyoutContainer();
                            lastSubFlyout.Hide()
                        }
                    };
                    FlyoutService.prototype.checkIfAnyTypeaheadBoxHasError = function() {
                        if (this.entityHasInvalidText ||
                            this.dashboardHasInvalidText ||
                            this.iconHasInvalidText ||
                            this.privilegeEntityHasInvalidText ||
                            this.outlookIconHasInvalidText) return true;
                        return false
                    };
                    FlyoutService.prototype.resetValidationState = function(keyType) {
                        if (Common.Utility.StringUtilities.IsNullOrEmpty(keyType)) {
                            this.entityHasInvalidText = false;
                            this.dashboardHasInvalidText = false;
                            this.privilegeEntityHasInvalidText = false;
                            this.iconHasInvalidText = false;
                            this.outlookIconHasInvalidText = false;
                            return
                        }
                        switch (keyType) {
                        case "Entity":
                            this.entityHasInvalidText = false;
                            break;
                        case "DefaultDashboard":
                            this.dashboardHasInvalidText = false;
                            break;
                        case "Icon":
                            this.iconHasInvalidText = false;
                            break;
                        case "OutlookShortcutIcon":
                            this.outlookIconHasInvalidText = false;
                            break
                        }
                    };
                    FlyoutService.prototype
                        .getCurrActiveFlyoutSrcElementId = function() { return this.currOpenFlyoutSrcElementId };
                    FlyoutService.prototype
                        .setCurrActiveFlyoutSrcElementId = function(aciveSrcId) {
                            this.currOpenFlyoutSrcElementId = aciveSrcId
                        };
                    FlyoutService.prototype.HideSingleFlyout = function(flyoutContainer) { flyoutContainer.Hide() };
                    FlyoutService.$inject = ["$rootScope"];
                    return FlyoutService
                }();
                FlyoutManagement.FlyoutService = FlyoutService;
                Common.CommonModule.service(Common.Constants.ServiceNames.FlyoutService, FlyoutService)
            })(FlyoutManagement = Common.FlyoutManagement || (Common.FlyoutManagement = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var KeyboardShortcut;
            (function(KeyboardShortcut) {
                var Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    ShortcutKeyObject = function() {
                        function ShortcutKeyObject(keyComb, keyInfo, handler) {
                            this.keyCombination = keyComb;
                            this.keyInformation = keyInfo;
                            this.keyHandlerCallback = handler
                        }

                        return ShortcutKeyObject
                    }();
                KeyboardShortcut.ShortcutKeyObject = ShortcutKeyObject;
                var KeyInformation = function() {
                    function KeyInformation(char, modifiers) {
                        this.keyChar = char;
                        this.keyModifiers = modifiers
                    }

                    return KeyInformation
                }();
                KeyboardShortcut.KeyInformation = KeyInformation;
                var ShortcutKeysService = function() {
                    function ShortcutKeysService() {
                        this.shortcutKeyObjects = [];
                        this.AddKeyDownEvent();
                        this.LoadKeyCodes()
                    }

                    ShortcutKeysService.prototype
                        .RegisterShortcutKey = function(keyCodeCombination, callback, doNotReplaceCtrlKeyInMac) {
                            var shortcutKeyObject = this.BuildShortcutKeyObject(keyCodeCombination, callback);
                            if (Common.Utility.ScriptUtilities.IsMacMachine() &&
                                (Common.Utility.ScriptUtilities.IsNullOrUndefined(doNotReplaceCtrlKeyInMac) ||
                                    doNotReplaceCtrlKeyInMac == false)
                            )
                                if (!Common.Utility.ScriptUtilities
                                    .IsNullOrUndefined(shortcutKeyObject
                                        .keyInformation))
                                    for (var modifiersIndex in shortcutKeyObject.keyInformation
                                        .keyModifiers)
                                        if (shortcutKeyObject.keyInformation.keyModifiers[modifiersIndex] ==
                                            Common.Constants.KeyNames
                                            .CtrlKeyName)
                                            shortcutKeyObject.keyInformation.keyModifiers[modifiersIndex] = Common
                                                .Constants.KeyNames.Meta1KeyName;
                            var matchedShortcutObjects = this.GetMatchingShortcutObjects(shortcutKeyObject, true);
                            matchedShortcutObjects.length == 0 && this.shortcutKeyObjects.push(shortcutKeyObject)
                        };
                    ShortcutKeysService.prototype.BuildShortcutKeyObject = function(keyCodeCombination, callback) {
                        var keyInfo = this.GetKeyAndModifierInformationFrom(keyCodeCombination),
                            shortcutKeyObject = new ShortcutKeyObject(keyCodeCombination, keyInfo, callback);
                        return shortcutKeyObject
                    };
                    ShortcutKeysService.prototype.DeregisterShortcutKey = function(keyCodeCombination, callback) {
                        var shortcutKeyObject = this.BuildShortcutKeyObject(keyCodeCombination, callback),
                            matchedShortcutObjects = this.GetMatchingShortcutObjects(shortcutKeyObject, true);
                        if (matchedShortcutObjects.length > 0) {
                            var index = this.shortcutKeyObjects.indexOf(matchedShortcutObjects[0]);
                            index > -1 && this.shortcutKeyObjects.splice(index, 1)
                        }
                    };
                    ShortcutKeysService.prototype.GetKeyAndModifierInformationFrom = function(keyCodeCombination) {
                        var key, keys, modifiers = [];
                        keys = this.GetKeysFromString(keyCodeCombination);
                        for (var index = 0, index = 0; index < keys.length; index++)
                            if (this.IsModifierKey(keys[index])) modifiers.push(keys[index]);
                            else key = keys[index];
                        var keyInformationObject = new KeyInformation(key, modifiers);
                        return keyInformationObject
                    };
                    ShortcutKeysService.prototype.GetKeysFromString = function(keyCombination) {
                        keyCombination = keyCombination.replace(/\+{2}/g, "+plus");
                        return keyCombination.toLowerCase().split("+")
                    };
                    ShortcutKeysService.prototype
                        .IsModifierKey = function(key) {
                            return key == Common.Constants.KeyNames.ShiftKeyName ||
                                key == Common.Constants.KeyNames.CtrlKeyName ||
                                key == Common.Constants.KeyNames.AltKeyName ||
                                key == Common.Constants.KeyNames.Meta1KeyName
                        };
                    ShortcutKeysService.prototype
                        .GetMatchingShortcutObjects = function(shortcutKeyObject, filterByCallback) {
                            var index,
                                matchedShortcutObjects = [],
                                filterShortcutKeyobjects = this.shortcutKeyObjects
                                    .filter(function(element) {
                                        return element.keyInformation.keyChar ==
                                            shortcutKeyObject.keyInformation.keyChar
                                    });
                            if (filterShortcutKeyobjects.length == 0) return [];
                            for (index = 0; index < filterShortcutKeyobjects.length; ++index)
                                if (this.ModifiersMatch(filterShortcutKeyobjects[index].keyInformation.keyModifiers,
                                    shortcutKeyObject.keyInformation.keyModifiers))
                                    if (filterByCallback)
                                        filterShortcutKeyobjects[index].keyHandlerCallback ==
                                            shortcutKeyObject.keyHandlerCallback &&
                                            matchedShortcutObjects.push(filterShortcutKeyobjects[index]);
                                    else matchedShortcutObjects.push(filterShortcutKeyobjects[index]);
                            return matchedShortcutObjects
                        };
                    ShortcutKeysService.prototype
                        .ModifiersMatch = function(modifiers1, modifiers2) {
                            return modifiers1.sort().join(",") === modifiers2.sort().join(",")
                        };
                    ShortcutKeysService.prototype.AddKeyDownEvent = function() {
                        var _this = this;
                        document.body.addEventListener("keydown",
                            function(event) { return _this.HandleKeyEvent(event) },
                            true)
                    };
                    ShortcutKeysService.prototype.HandleKeyEvent = function(e) {
                        if (typeof e.which !== "number") e.which = e.keyCode;
                        var character = this.GetCharacterFromEvent(e);
                        if (!character) return;
                        this.HandleKeyEventAndCallback(character, this.GetModifiersFromEvent(e), e);
                        if (character === "s") {
                            var modifiers = this.GetModifiersFromEvent(e);
                            if (modifiers.length == 1 &&
                            (modifiers[0] == Common.Constants.KeyNames.CtrlKeyName ||
                                modifiers[0] == Common.Constants.KeyNames.Meta1KeyName &&
                                Common.Utility.ScriptUtilities.IsMacMachine())) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    };
                    ShortcutKeysService.prototype.GetCharacterFromEvent = function(e) {
                        if (this.keyCodes.containsKey(e.keyCode)) return this.keyCodes.getValue(e.keyCode).toString();
                        return String.fromCharCode(e.which).toLowerCase()
                    };
                    ShortcutKeysService.prototype.GetModifiersFromEvent = function(e) {
                        var modifiers = [];
                        e.shiftKey && modifiers.push(Common.Constants.KeyNames.ShiftKeyName);
                        e.altKey && modifiers.push(Common.Constants.KeyNames.AltKeyName);
                        e.ctrlKey && modifiers.push(Common.Constants.KeyNames.CtrlKeyName);
                        e.metaKey && modifiers.push(Common.Constants.KeyNames.Meta1KeyName);
                        return modifiers
                    };
                    ShortcutKeysService.prototype.HandleKeyEventAndCallback = function(keyCharacter, modifiers, event) {
                        for (var keyInfo = new KeyInformation(keyCharacter, modifiers),
                            shortcutKeyObject = new ShortcutKeyObject(null, keyInfo, null),
                            shortcutKeysForCallback = this.GetMatchingShortcutObjects(shortcutKeyObject, false),
                            index = 0;
                            index < shortcutKeysForCallback.length;
                            ++index) {
                            Mscrm.Designers.Common.Telemetry.ActionOnSelectService.prototype
                                .CaptureClickCountForTelemetry(shortcutKeysForCallback[index].keyCombination,
                                    Common.Constants.UserInteractionType.KeyboardShortKeyPress);
                            this.FireCallback(shortcutKeysForCallback[index].keyHandlerCallback,
                                event,
                                shortcutKeysForCallback[index].keyCombination)
                        }
                    };
                    ShortcutKeysService.prototype.FireCallback = function(callback, e, keyCombombination) {
                        if (callback(e, keyCombombination) === false) {
                            e.preventDefault();
                            e.stopPropagation()
                        }
                    };
                    ShortcutKeysService.prototype.LoadKeyCodes = function() {
                        this.keyCodes = new Dictionary;
                        this.keyCodes.add(Common.Constants.KeyCode.BackSpaceKeyCode,
                            Common.Constants.KeyNames.BackSpaceKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.TabKeyCode, Common.Constants.KeyNames.TabKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode
                            .EnterKeyCode,
                            Common.Constants.KeyNames.EnterKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode
                            .ShiftKeyCode,
                            Common.Constants.KeyNames.ShiftKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.CtrlKeyCode, Common.Constants.KeyNames.CtrlKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.AltKeyCode, Common.Constants.KeyNames.AltKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.CapsLockKeyCode,
                            Common.Constants.KeyNames.CapsLockKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.EscKeyCode, Common.Constants.KeyNames.EscKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode
                            .SpaceKeyCode,
                            Common.Constants.KeyNames.SpaceKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.PageUpKeyCode,
                            Common.Constants.KeyNames.SpaceKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.PageDownKeyCode,
                            Common.Constants.KeyNames.PageDownKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.EndKeyCode, Common.Constants.KeyNames.EndKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.HomeKeyCode, Common.Constants.KeyNames.HomeKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.LeftArrowKeyCode,
                            Common.Constants.KeyNames.LeftArrowKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.UpArrowKeyCode,
                            Common.Constants.KeyNames.UpArrowKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.RightArrowKeyCode,
                            Common.Constants.KeyNames.RightArrowKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.DownArrowKeyCode,
                            Common.Constants.KeyNames.DownArrowKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.InsKeyCode, Common.Constants.KeyNames.InsKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.DelKeyCode, Common.Constants.KeyNames.DelKeyName);
                        this.keyCodes.add(Common.Constants.KeyCode
                            .Meta1KeyCode,
                            Common.Constants.KeyNames.Meta1KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode
                            .Meta2KeyCode,
                            Common.Constants.KeyNames.Meta2KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode
                            .Meta3KeyCode,
                            Common.Constants.KeyNames.Meta3KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad0KeyCode,
                            Common.Constants.KeyNames.Numpad0KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad1KeyCode,
                            Common.Constants.KeyNames.Numpad1KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad2KeyCode,
                            Common.Constants.KeyNames.Numpad2KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad3KeyCode,
                            Common.Constants.KeyNames.Numpad3KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad4KeyCode,
                            Common.Constants.KeyNames.Numpad4KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad5KeyCode,
                            Common.Constants.KeyNames.Numpad5KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad6KeyCode,
                            Common.Constants.KeyNames.Numpad6KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad7KeyCode,
                            Common.Constants.KeyNames.Numpad7KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad8KeyCode,
                            Common.Constants.KeyNames.Numpad8KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.Numpad9KeyCode,
                            Common.Constants.KeyNames.Numpad9KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F1KeyCode, Common.Constants.KeyNames.F1KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F2KeyCode, Common.Constants.KeyNames.F2KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F3KeyCode, Common.Constants.KeyNames.F3KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F4KeyCode, Common.Constants.KeyNames.F4KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F5KeyCode, Common.Constants.KeyNames.F5KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F6KeyCode, Common.Constants.KeyNames.F6KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F7KeyCode, Common.Constants.KeyNames.F7KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F8KeyCode, Common.Constants.KeyNames.F8KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F9KeyCode, Common.Constants.KeyNames.F9KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F10KeyCode, Common.Constants.KeyNames.F10KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F11KeyCode, Common.Constants.KeyNames.F11KeyName);
                        this.keyCodes.add(Common.Constants.KeyCode.F12KeyCode, Common.Constants.KeyNames.F12KeyName)
                    };
                    return ShortcutKeysService
                }();
                Common.CommonModule.service(Common.Constants.ServiceNames.KeyboardShortcutService, ShortcutKeysService)
            })(KeyboardShortcut = Common.KeyboardShortcut || (Common.KeyboardShortcut = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var Interceptors;
            (function(Interceptors) {
                var ServiceNames = Common.Constants.ServiceNames,
                    HttpInterceptorService = function() {
                        function HttpInterceptorService(qService, modalDialogService, notificationService) {
                            this.qService = qService;
                            this.modalDialogService = modalDialogService;
                            this.notificationService = notificationService;
                            this.responseError = function(response) {
                                var rejectionPromise = this.qService.reject(response);
                                this.modalDialogService.close();
                                if (typeof response === "string") this.notificationService.DisplayError(response, null);
                                else response.status && this.notificationService.DisplayError(null, response);
                                return rejectionPromise
                            }.bind(this)
                        }

                        HttpInterceptorService.$inject = [
                            ServiceNames.QService, ServiceNames.ModalDialogService, ServiceNames.NotificationBarService
                        ];
                        return HttpInterceptorService
                    }();
                Interceptors.HttpInterceptorService = HttpInterceptorService;
                Common.CommonModule.service("mscrmHttpInterceptorService", Interceptors.HttpInterceptorService);
                Common.CommonModule.config(function($httpProvider) {
                    $httpProvider.interceptors.push("mscrmHttpInterceptorService")
                })
            })(Interceptors = Common.Interceptors || (Common.Interceptors = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Common;
        (function(Common) {
            var ValidInputCheck;
            (function(ValidInputCheck) {
                "use strict";
                var KeyCodes = Mscrm.Designers.Common.Constants.KeyCode;

                function RestrictInvalidCharsForIdDirective() {
                    var link = function(scope, element, attrs) {
                        element.bind("keypress",
                            function(event) {
                                var keyCode = event.which || event.keyCode;
                                if (keyCode >= KeyCodes.ZeroKeyCode && keyCode <= KeyCodes.NineKeyCode ||
                                    keyCode >= KeyCodes.AKeyCode && keyCode <= KeyCodes.ZKeyCode ||
                                    keyCode >= KeyCodes.Numpad1KeyCode && keyCode <= KeyCodes.F11KeyCode ||
                                    keyCode == KeyCodes.UnderscoreKeyCode ||
                                    (keyCode == KeyCodes.BackSpaceKeyCode || keyCode == KeyCodes.TabKeyCode) ||
                                    keyCode == KeyCodes.DelKeyCode && event.key != ".") return true;
                                else return false
                            })
                    };
                    return {
                        restrict: Mscrm.Designers.Common.Constants.DirectiveRestrictTypes.AttributeType,
                        link: link
                    }
                }

                Common.CommonModule.directive("mscrmRestrictInvalidCharsForId", RestrictInvalidCharsForIdDirective)
            })(ValidInputCheck = Common.ValidInputCheck || (Common.ValidInputCheck = {}))
        })(Common = Designers.Common || (Designers.Common = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}))