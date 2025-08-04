Type.registerNamespace('Mscrm');

Mscrm.Lazy$1 = function Mscrm_Lazy$1(generator) {
    this.$2N_0 = ((this.$$gta['Mscrm.Lazy$1']['T'] === Number || Type.isEnum(this.$$gta['Mscrm.Lazy$1']['T'])) ? 0 : (this.$$gta['Mscrm.Lazy$1']['T'] === Boolean) ? false : null);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Lazy.cs (16,3)
    if (IsNull(generator)) {
        throw Error.argumentNull('generator');
    }
    this.$1E_0 = generator;
}
Mscrm.Lazy$1.$$ = function Mscrm_Lazy$1$$$(T) {
    var $$cn = 'Lazy$1' + '$' + T.getName().replace(/\./g, '_');
    if (!Mscrm[$$cn]) {
        var $$ccr = Mscrm[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['Mscrm.Lazy$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            Mscrm.Lazy$1.apply(this, $v_0);
        };
        $$ccr.registerClass('Mscrm.' + $$cn);
        var $$dict_5 = Mscrm.Lazy$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return Mscrm[$$cn];
}
Mscrm.Lazy$1.prototype = {
    $1E_0: null,
    
    get_hasValue: function Mscrm_Lazy$1$get_hasValue() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Lazy.cs (32,4)
        return IsNull(this.$1E_0);
    },
    
    get_value: function Mscrm_Lazy$1$get_value() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Lazy.cs (43,4)
        if (this.get_hasValue()) {
            return this.$2N_0;
        }
        this.$2N_0 = this.$1E_0();
        this.$1E_0 = null;
        return this.$2N_0;
    }
}


Type.registerNamespace('Mscrm.SocialInsights');

Mscrm.SocialInsights.SocialInsightsConfigurationService = function Mscrm_SocialInsights_SocialInsightsConfigurationService() {
}
Mscrm.SocialInsights.SocialInsightsConfigurationService.prototype = {
    
    createOrUpdate: function Mscrm_SocialInsights_SocialInsightsConfigurationService$createOrUpdate(configuration) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SocialInsightsConfigurationService.cs (16,3)
        var $v_0 = JSON.stringify(configuration);
        var $v_1 = this.$1p_0('CreateOrUpdateSocialInsightsConfiguration');
        $v_1.SetParameter('serializedSocialInsightsConfiguration', $v_0);
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
        var $$t_6 = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($p1_0.Success) {
                $v_2.resolve(null);
            }
            else {
                $v_2.reject($p1_0);
            }
        });
        return $v_2;
    },
    
    retrieve: function Mscrm_SocialInsights_SocialInsightsConfigurationService$retrieve(configuration) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SocialInsightsConfigurationService.cs (39,3)
        var $v_0 = this.$1p_0('RetrieveSocialInsightsConfiguration');
        var $v_1 = JSON.stringify(configuration);
        $v_0.SetParameter('serializedSocialInsightsConfiguration', $v_1);
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration, Object);
        var $$t_7 = this;
        $v_0.Execute(function($p1_0, $p1_1) {
            if ($p1_0.Success) {
                var $v_3 = $p1_0.ReturnValue;
                if (IsNull($v_3) || isNullOrEmptyString($v_3.SocialInsightsConfigurationId)) {
                    $v_3 = null;
                }
                $v_2.resolve($v_3);
            }
            else {
                $v_2.reject($p1_0);
            }
        });
        return $v_2;
    },
    
    resetAllSocialInsightsData: function Mscrm_SocialInsights_SocialInsightsConfigurationService$resetAllSocialInsightsData() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SocialInsightsConfigurationService.cs (68,3)
        var $v_0 = this.$1p_0('ResetAllSocialInsightsData');
        return $v_0.Execute().Success;
    },
    
    deleteCommand: function Mscrm_SocialInsights_SocialInsightsConfigurationService$deleteCommand(configuration) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SocialInsightsConfigurationService.cs (80,3)
        var $v_0 = JSON.stringify(configuration);
        var $v_1 = this.$1p_0('DeleteSocialInsightsConfiguration');
        $v_1.SetParameter('serializedSocialInsightsConfiguration', $v_0);
        var $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration, Object);
        var $$t_7 = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($p1_0.Success) {
                var $v_3 = $p1_0.ReturnValue;
                $v_2.resolve($v_3);
            }
            else {
                $v_2.reject($p1_0);
            }
        });
        return $v_2;
    },
    
    $1p_0: function Mscrm_SocialInsights_SocialInsightsConfigurationService$$1p_0($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SocialInsightsConfigurationService.cs (101,3)
        return new RemoteCommand('SocialInsightsWebService', $p0, null);
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Common');

Mscrm.SocialInsights.Common.SocialInsightControlJsonWrapper = function Mscrm_SocialInsights_Common_SocialInsightControlJsonWrapper() {
}
Mscrm.SocialInsights.Common.SocialInsightControlJsonWrapper.prototype = {
    RootUrl: 'https://cs-dev-01-web.cloudapp.net/',
    OrgInfo: '1/',
    VersionInfo: 'version/1.0/',
    RestUrl: null
}


Mscrm.SocialInsights.Common.Constants = function Mscrm_SocialInsights_Common_Constants() {
}


Mscrm.SocialInsights.Common.DependencyInstanceContainer = function Mscrm_SocialInsights_Common_DependencyInstanceContainer() {
}
Mscrm.SocialInsights.Common.DependencyInstanceContainer.get_urlServiceInstance = function Mscrm_SocialInsights_Common_DependencyInstanceContainer$get_urlServiceInstance() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/DependencyInstanceContainer.cs (24,4)
    if (IsNull(Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1U)) {
        Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1U = new Mscrm.SocialInsights.Runtime.Services.UrlService();
    }
    return Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1U;
}
Mscrm.SocialInsights.Common.DependencyInstanceContainer.set_urlServiceInstance = function Mscrm_SocialInsights_Common_DependencyInstanceContainer$set_urlServiceInstance(value) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/DependencyInstanceContainer.cs (32,4)
    Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1U = value;
    return value;
}


Mscrm.SocialInsights.Common.Dialogs = function Mscrm_SocialInsights_Common_Dialogs() {
}
Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze = function Mscrm_SocialInsights_Common_Dialogs$unableToConnectToNetBreeze() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Dialogs.cs (10,3)
    var $v_0 = Mscrm.XrmInternal.getErrorMessage(-2147090431);
    Mscrm.XrmInternal.openErrorDialog(-2147090431, $v_0);
}


Mscrm.SocialInsights.Common.Disposable = function Mscrm_SocialInsights_Common_Disposable() {
}
Mscrm.SocialInsights.Common.Disposable.prototype = {
    _disposed: false,
    
    dispose: function Mscrm_SocialInsights_Common_Disposable$dispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Disposable.cs (25,3)
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this.actualDispose();
        Mscrm.Utilities.destroyObject(this);
    }
}


Mscrm.SocialInsights.Common.InternalDataHelper = function Mscrm_SocialInsights_Common_InternalDataHelper() {
}
Mscrm.SocialInsights.Common.InternalDataHelper.get_$27 = function Mscrm_SocialInsights_Common_InternalDataHelper$get_$27() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/InternalDataHelper.cs (23,4)
    if (!Mscrm.SocialInsights.Common.InternalDataHelper.$1f) {
        Mscrm.SocialInsights.Common.InternalDataHelper.$1f = $P_CRM.parseJSON(window._SocialInsightControlJsonData.substr(8));
    }
    return Mscrm.SocialInsights.Common.InternalDataHelper.$1f;
}


Type.registerNamespace('Mscrm.SocialInsights.Views');

Mscrm.SocialInsights.Views.BaseView = function Mscrm_SocialInsights_Views_BaseView(uiElement) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/BaseView.cs (18,3)
    Mscrm.SocialInsights.Views.BaseView.initializeBase(this);
    if (IsNull(uiElement)) {
        throw Error.argumentNull('uiElement');
    }
    this.$2J_1 = uiElement;
}
Mscrm.SocialInsights.Views.BaseView.prototype = {
    $2J_1: null,
    
    get_uiElement: function Mscrm_SocialInsights_Views_BaseView$get_uiElement() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/BaseView.cs (31,4)
        return this.$2J_1;
    },
    
    find: function Mscrm_SocialInsights_Views_BaseView$find(subName) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/BaseView.cs (42,3)
        if (IsNull(subName)) {
            throw Error.argumentNull('subName');
        }
        return this.$2J_1.find('.' + subName);
    },
    
    findSingle: function Mscrm_SocialInsights_Views_BaseView$findSingle(subItemName, notSingleMessage) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/BaseView.cs (57,3)
        var $v_0 = this.find(subItemName);
        return $v_0;
    },
    
    findOptional: function Mscrm_SocialInsights_Views_BaseView$findOptional(subItemName, multipleMessage) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/BaseView.cs (71,3)
        var $v_0 = this.find(subItemName);
        return $v_0;
    }
}


Mscrm.SocialInsights.Views.ContainerView = function Mscrm_SocialInsights_Views_ContainerView(uiElement) {
    this.$19_2 = [];
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ContainerView.cs (11,3)
    Mscrm.SocialInsights.Views.ContainerView.initializeBase(this, [ uiElement ]);
}
Mscrm.SocialInsights.Views.ContainerView.prototype = {
    
    add: function Mscrm_SocialInsights_Views_ContainerView$add(view) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ContainerView.cs (24,3)
        if (IsNull(view)) {
            throw Error.argumentNull('view');
        }
        this.get_container().append(view.get_uiElement());
        this.$19_2[this.$19_2.length] = view;
    },
    
    dispose: function Mscrm_SocialInsights_Views_ContainerView$dispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ContainerView.cs (38,3)
        Mscrm.SocialInsights.Common.Disposable.prototype.dispose.call(this);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_ContainerView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ContainerView.cs (46,3)
        for (var $v_0 = 0; $v_0 < this.$19_2.length; $v_0++) {
            var $v_1 = this.$19_2[$v_0];
            $v_1.dispose();
        }
    }
}


Mscrm.SocialInsights.Views.CssClasses = function Mscrm_SocialInsights_Views_CssClasses() {
}


Mscrm.SocialInsights.Views.ListItemMoveControlsView = function Mscrm_SocialInsights_Views_ListItemMoveControlsView(uiElement, listView) {
    this.$$d_$4l_2 = Function.createDelegate(this, this.$4l_2);
    this.$$d_$4V_2 = Function.createDelegate(this, this.$4V_2);
    this.$$d_$4X_2 = Function.createDelegate(this, this.$4X_2);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (24,3)
    Mscrm.SocialInsights.Views.ListItemMoveControlsView.initializeBase(this, [ uiElement ]);
    if (IsNull(listView)) {
        throw Error.argumentNull('listView');
    }
    this.$0_2 = listView;
    this.$7_2 = this.find('List-MoveUp');
    this.$6_2 = this.find('List-MoveDown');
    this.$M_2();
}
Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype = {
    
    initialize: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$initialize() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (38,3)
        this.$35_2();
    },
    
    get_canMoveUp: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$get_canMoveUp() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (48,4)
        return !this.$7_2.hasClass('disabled');
    },
    
    get_canMoveDown: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$get_canMoveDown() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (55,4)
        return !this.$6_2.hasClass('disabled');
    },
    
    get_moveUpButton: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$get_moveUpButton() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (58,41)
        return this.$7_2;
    },
    
    get_moveDownButton: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$get_moveDownButton() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (59,43)
        return this.$6_2;
    },
    
    switchUpButton: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$switchUpButton(enable) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (61,3)
        this.$7_2.toggleClass('disabled', !enable);
    },
    
    switchDownButton: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$switchDownButton(enable) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (66,3)
        this.$6_2.toggleClass('disabled', !enable);
    },
    
    $7_2: null,
    $6_2: null,
    $0_2: null,
    
    $35_2: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$$35_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (78,3)
        var $v_0 = this.$0_2.$4_2;
        var $v_1 = $v_0 >= 0;
        this.switchUpButton($v_0 > 0);
        this.switchDownButton($v_0 + 1 < this.$0_2.get_itemCount() && $v_1);
    },
    
    $4V_2: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$$4V_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (86,3)
        if (this.$6_2.hasClass('disabled')) {
            return;
        }
        this.$0_2.move(this.$0_2.$4_2, this.$0_2.$4_2 + 1);
        if (this.$0_2.$4_2 + 1 === this.$0_2.get_itemCount() && !this.$7_2.hasClass('disabled')) {
            this.$7_2.focus();
        }
        $p0.preventDefault();
        $p0.stopImmediatePropagation();
    },
    
    $4X_2: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$$4X_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (99,3)
        if (this.$7_2.hasClass('disabled')) {
            return;
        }
        this.$0_2.move(this.$0_2.$4_2, this.$0_2.$4_2 - 1);
        if (!this.$0_2.$4_2 && !this.$6_2.hasClass('disabled')) {
            this.$6_2.focus();
        }
        $p0.preventDefault();
        $p0.stopImmediatePropagation();
    },
    
    $4l_2: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$$4l_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (112,3)
        this.$35_2();
    },
    
    $M_2: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$$M_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (124,3)
        this.$7_2.click(this.$$d_$4X_2);
        this.$6_2.click(this.$$d_$4V_2);
        this.$0_2.add_selectionChanged(this.$$d_$4l_2);
    },
    
    $Q_2: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$$Q_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (131,3)
        this.$0_2.remove_selectionChanged(this.$$d_$4l_2);
        this.$7_2.unbind('click', this.$$d_$4X_2);
        this.$6_2.unbind('click', this.$$d_$4V_2);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_ListItemMoveControlsView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListItemsMoveControlsView.cs (139,3)
        this.$Q_2();
    }
}


Mscrm.SocialInsights.Views.ListView = function Mscrm_SocialInsights_Views_ListView(uiElement, itemViewModels, itemViewFactory) {
    this.$$d_$31_2 = Function.createDelegate(this, this.$31_2);
    this.$$d_$4d_2 = Function.createDelegate(this, this.$4d_2);
    this.$$d_$4c_2 = Function.createDelegate(this, this.$4c_2);
    this.$3_2 = [];
    this.$4_2 = -1;
    this.$E_2 = new Sys.EventHandlerList();
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (29,3)
    Mscrm.SocialInsights.Views.ListView.initializeBase(this, [ uiElement ]);
    if (IsNull(itemViewModels)) {
        throw Error.argumentNull('viewModel');
    }
    if (IsNull(itemViewFactory)) {
        throw Error.argumentNull('itemViewFactory');
    }
    this.$9_2 = itemViewModels;
    this.$1J_2 = itemViewFactory;
}
Mscrm.SocialInsights.Views.ListView.$3M = function Mscrm_SocialInsights_Views_ListView$$3M($p0, $p1, $p2) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (390,3)
    if ($p0 > $p1) {
        for (; $p0 > $p1; $p0--) {
            $p2[$p0] = $p2[$p0 - 1];
        }
    }
    else {
        for (; $p0 < $p1; $p0++) {
            $p2[$p0] = $p2[$p0 + 1];
        }
    }
}
Mscrm.SocialInsights.Views.ListView.createDefaultLayout = function Mscrm_SocialInsights_Views_ListView$createDefaultLayout(itemViewModels, itemViewFactory) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (505,3)
    if (IsNull(itemViewModels)) {
        throw Error.argumentNull('viewModel');
    }
    if (IsNull(itemViewFactory)) {
        throw Error.argumentNull('itemViewFactory');
    }
    var $v_0 = String.format('<div class=\'listview {0}\' tabindex=0></div>', '');
    var $v_1 = $P_CRM($v_0);
    return new Mscrm.SocialInsights.Views.ListView($v_1, itemViewModels, itemViewFactory);
}
Mscrm.SocialInsights.Views.ListView.prototype = {
    
    initialize: function Mscrm_SocialInsights_Views_ListView$initialize() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (44,3)
        for (var $v_0 = 0; $v_0 < this.$9_2.length; $v_0++) {
            var $v_1 = this.$9_2[$v_0];
            this.$2b_2($v_1);
        }
        this.$M_2();
    },
    
    get_viewModel: function Mscrm_SocialInsights_Views_ListView$get_viewModel() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (60,32)
        return this.$9_2;
    },
    
    get_itemViewFactory: function Mscrm_SocialInsights_Views_ListView$get_itemViewFactory() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (67,4)
        return this.$1J_2;
    },
    
    set_itemViewFactory: function Mscrm_SocialInsights_Views_ListView$set_itemViewFactory(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (68,4)
        if (IsNull(value)) {
            throw Error.argumentNull('ItemViewFactory');
        }
        this.$1J_2 = value;
        return value;
    },
    
    get_itemCount: function Mscrm_SocialInsights_Views_ListView$get_itemCount() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (82,4)
        return this.$3_2.length;
    },
    
    get_item: function Mscrm_SocialInsights_Views_ListView$get_item(index) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (95,4)
        return this.$3_2[index];
    },
    
    get_selectedIndex: function Mscrm_SocialInsights_Views_ListView$get_selectedIndex() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (107,4)
        return this.$4_2;
    },
    
    set_selectedIndex: function Mscrm_SocialInsights_Views_ListView$set_selectedIndex(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (111,4)
        if (value < 0) {
            this.$J_2(null);
            return value;
        }
        this.$1i_2(value, 'SelectedIndex');
        var $v_0 = this.$3_2[value];
        this.$J_2($v_0.get_uiElement()[0]);
        return value;
    },
    
    getItemIndex: function Mscrm_SocialInsights_Views_ListView$getItemIndex(ui) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (129,3)
        if (IsNull(ui)) {
            throw Error.argumentNull('ui');
        }
        if (ui.length !== 1) {
            throw Error.argument('ui', 'Parameter must refer to exactly one DOM element');
        }
        var $v_0 = this.$2R_2(ui[0]);
        if ($v_0 >= 0) {
            return $v_0;
        }
        ui = ui.parents();
        for (var $v_1 = 0; $v_1 < ui.length; $v_1++) {
            $v_0 = this.$2R_2(ui[$v_1]);
            if ($v_0 >= 0) {
                return $v_0;
            }
        }
        return -1;
    },
    
    add_selectionChanged: function Mscrm_SocialInsights_Views_ListView$add_selectionChanged(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (154,4)
        this.$E_2.addHandler('SelectionChanged', value);
    },
    
    remove_selectionChanged: function Mscrm_SocialInsights_Views_ListView$remove_selectionChanged(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (155,4)
        this.$E_2.removeHandler('SelectionChanged', value);
    },
    
    add_itemAdded: function Mscrm_SocialInsights_Views_ListView$add_itemAdded(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (164,4)
        this.$E_2.addHandler('ItemAdded', value);
    },
    
    remove_itemAdded: function Mscrm_SocialInsights_Views_ListView$remove_itemAdded(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (165,4)
        this.$E_2.removeHandler('ItemAdded', value);
    },
    
    add_itemRemoved: function Mscrm_SocialInsights_Views_ListView$add_itemRemoved(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (173,4)
        this.$E_2.addHandler('ItemRemoved', value);
    },
    
    remove_itemRemoved: function Mscrm_SocialInsights_Views_ListView$remove_itemRemoved(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (174,4)
        this.$E_2.removeHandler('ItemRemoved', value);
    },
    
    add: function Mscrm_SocialInsights_Views_ListView$add(itemViewModel) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (181,3)
        this.$9_2[this.$9_2.length] = itemViewModel;
        var $v_0 = this.$2b_2(itemViewModel);
        this.$1u_2('ItemAdded', Sys.EventArgs.Empty);
        return $v_0;
    },
    
    move: function Mscrm_SocialInsights_Views_ListView$move(originalIndex, newIndex) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (194,3)
        this.$1i_2(originalIndex, 'originalIndex');
        this.$1i_2(newIndex, 'newIndex');
        if (originalIndex === newIndex) {
            return;
        }
        this.$4W_2(originalIndex, newIndex);
        var $v_0 = this.$9_2[originalIndex];
        var $v_1 = this.$3_2[originalIndex];
        var $v_2 = (this.$4_2 < 0) ? null : this.$3_2[this.$4_2];
        Mscrm.SocialInsights.Views.ListView.$3M(originalIndex, newIndex, this.$9_2);
        Mscrm.SocialInsights.Views.ListView.$3M(originalIndex, newIndex, this.$3_2);
        this.$9_2[newIndex] = $v_0;
        this.$3_2[newIndex] = $v_1;
        this.$2n_2(originalIndex, newIndex);
        this.$2o_2(originalIndex, newIndex, $v_2);
    },
    
    removeAt: function Mscrm_SocialInsights_Views_ListView$removeAt(index) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (222,3)
        this.$1i_2(index, 'index');
        this.$2L_2(index);
        var $v_0 = this.$3_2[index];
        var $v_1 = (this.$4_2 < 0) ? null : this.$3_2[this.$4_2];
        $v_0.get_uiElement().detach();
        $v_0.dispose();
        Array.removeAt(this.$9_2, index);
        Array.removeAt(this.$3_2, index);
        if (index < this.get_itemCount()) {
            this.$2n_2(index, this.get_itemCount() - 1);
        }
        if ($v_1 !== $v_0) {
            this.$2o_2(index, this.get_itemCount(), $v_1);
        }
        else {
            this.$44_2(index);
        }
        this.$1u_2('ItemRemoved', Sys.EventArgs.Empty);
    },
    
    get_itemViewModels: function Mscrm_SocialInsights_Views_ListView$get_itemViewModels() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (251,4)
        var $$t_0;
        return ($$t_0 = this.$9_2).concat.call($$t_0);
    },
    
    $9_2: null,
    $1J_2: null,
    
    $44_2: function Mscrm_SocialInsights_Views_ListView$$44_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (267,3)
        if ($p0 < this.get_itemCount()) {
            this.$J_2(this.get_item($p0).get_uiElement()[0]);
        }
        else if ($p0 > 0) {
            this.$J_2(this.get_item($p0 - 1).get_uiElement()[0]);
        }
        else {
            this.$J_2(null);
        }
    },
    
    $2b_2: function Mscrm_SocialInsights_Views_ListView$$2b_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (279,3)
        var $v_0 = this.$3_2.length;
        var $v_1 = Mscrm.SocialInsights.Views.ListViewItem.createDefaultLayout();
        var $v_2 = this.$1J_2($p0);
        $v_1.$a_3 = $v_2;
        $v_1.add($v_2);
        var $v_3 = ($v_0 + 1).toString();
        $v_1.index.text($v_3);
        this.$3_2[$v_0] = $v_1;
        this.get_uiElement().append($v_1.get_uiElement());
        $v_1.get_uiElement().click(this.$$d_$4c_2);
        $v_1.get_uiElement().keydown(this.$$d_$4d_2);
        return $v_1;
    },
    
    $2R_2: function Mscrm_SocialInsights_Views_ListView$$2R_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (300,3)
        for (var $v_0 = 0; $v_0 < this.$3_2.length; $v_0++) {
            var $v_1 = this.$3_2[$v_0];
            if ($v_1.get_uiElement()[0] === $p0) {
                return $v_0;
            }
        }
        return -1;
    },
    
    $4c_2: function Mscrm_SocialInsights_Views_ListView$$4c_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (311,3)
        if (!this.get_uiElement().has($p0.currentTarget).length) {
            return;
        }
        this.$J_2($p0.currentTarget);
        $p0.preventDefault();
        $p0.stopPropagation();
    },
    
    $J_2: function Mscrm_SocialInsights_Views_ListView$$J_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (321,3)
        this.$4_2 = -1;
        for (var $v_0 = 0; $v_0 < this.$3_2.length; $v_0++) {
            var $v_1 = this.$3_2[$v_0];
            var $v_2 = $v_1.get_uiElement()[0] === $p0;
            if ($v_2) {
                this.$4_2 = $v_0;
            }
            $v_1.set_isFocusable($v_2);
            $v_1.get_uiElement().toggleClass('selected', $v_2);
        }
        this.$1u_2('SelectionChanged', Sys.EventArgs.Empty);
    },
    
    $3B_2: function Mscrm_SocialInsights_Views_ListView$$3B_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (339,3)
        var $v_0 = this.$2R_2($p0);
        var $v_1 = $p1 + $v_0;
        if ($v_1 < 0 || $v_1 >= this.get_itemCount()) {
            return;
        }
        this.set_selectedIndex($v_1);
        this.get_item($v_1).get_uiElement().focus();
    },
    
    $4d_2: function Mscrm_SocialInsights_Views_ListView$$4d_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (350,3)
        if ($p0.currentTarget !== $p0.target) {
            return;
        }
        switch ($p0.which) {
            case 13:
                this.$J_2($p0.currentTarget);
                break;
            case 27:
                this.$J_2(null);
                this.get_uiElement().focus();
                break;
            case 38:
                this.$3B_2($p0.currentTarget, -1);
                break;
            case 40:
                this.$3B_2($p0.currentTarget, 1);
                break;
            default:
                return;
        }
        $p0.preventDefault();
        $p0.stopPropagation();
    },
    
    $2n_2: function Mscrm_SocialInsights_Views_ListView$$2n_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (411,3)
        var $v_0 = Math.min($p0, $p1);
        var $v_1 = Math.max($p0, $p1);
        for (var $v_2 = $v_0; $v_2 <= $v_1; $v_2++) {
            var $v_3 = this.$3_2[$v_2];
            var $v_4 = ($v_2 + 1).toString();
            $v_3.index.text($v_4);
        }
    },
    
    $2o_2: function Mscrm_SocialInsights_Views_ListView$$2o_2($p0, $p1, $p2) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (423,3)
        if (this.$4_2 < Math.min($p0, $p1) || this.$4_2 > Math.max($p0, $p1)) {
            return;
        }
        this.$J_2($p2.get_uiElement()[0]);
    },
    
    $4W_2: function Mscrm_SocialInsights_Views_ListView$$4W_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (432,3)
        var $v_0 = this.$3_2[$p0];
        var $v_1 = this.$3_2[$p1];
        if ($p0 > $p1) {
            $v_0.get_uiElement().insertBefore($v_1.get_uiElement());
        }
        else {
            $v_0.get_uiElement().insertAfter($v_1.get_uiElement());
        }
    },
    
    $1u_2: function Mscrm_SocialInsights_Views_ListView$$1u_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (444,3)
        if (IsNull(this.$E_2)) {
            return;
        }
        var $v_0 = this.$E_2.getHandler($p0);
        if (!IsNull($v_0)) {
            $v_0(this, $p1);
        }
    },
    
    $1i_2: function Mscrm_SocialInsights_Views_ListView$$1i_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (454,3)
        if ($p0 < 0 || $p0 >= this.get_itemCount()) {
            throw Error.argumentOutOfRange($p1);
        }
    },
    
    $31_2: function Mscrm_SocialInsights_Views_ListView$$31_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (462,3)
        if ($p0.target !== this.get_uiElement()[0] || !this.get_itemCount() || this.$4_2 >= 0) {
            return;
        }
        this.get_item(0).set_isFocusable(true);
        this.get_item(0).get_uiElement().focus();
    },
    
    $M_2: function Mscrm_SocialInsights_Views_ListView$$M_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (474,3)
        this.get_uiElement().bind('focusin', this.$$d_$31_2);
    },
    
    $Q_2: function Mscrm_SocialInsights_Views_ListView$$Q_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (479,3)
        this.get_uiElement().unbind('focusin', this.$$d_$31_2);
    },
    
    $2L_2: function Mscrm_SocialInsights_Views_ListView$$2L_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (484,3)
        var $v_0 = this.get_item($p0).get_uiElement();
        $v_0.unbind('click', this.$$d_$4c_2);
        $v_0.unbind('keydown', this.$$d_$4d_2);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_ListView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListView.cs (491,3)
        this.$Q_2();
        for (var $v_0 = 0; $v_0 < this.$3_2.length; $v_0++) {
            this.$2L_2($v_0);
            this.get_item($v_0).dispose();
        }
    }
}


Mscrm.SocialInsights.Views.ListViewItem = function Mscrm_SocialInsights_Views_ListViewItem(uiElement) {
    this.$$d_$4b_3 = Function.createDelegate(this, this.$4b_3);
    this.$$d_$31_3 = Function.createDelegate(this, this.$31_3);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (21,3)
    Mscrm.SocialInsights.Views.ListViewItem.initializeBase(this, [ uiElement ]);
    this.$2P_3 = this.findSingle('listview-item-container', 'There must be exactly one item container');
    this.index = this.find('listview-item-index');
    this.$M_3();
}
Mscrm.SocialInsights.Views.ListViewItem.createDefaultLayout = function Mscrm_SocialInsights_Views_ListViewItem$createDefaultLayout() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (69,3)
    var $v_0 = $P_CRM('<div class=\'listview-item\' tabindex=\'-1\'>\r\n\t\t\t\t<div class=\'listview-item-index\'></div>\r\n\t\t\t\t<div class=\'listview-item-container\'></div>\r\n\t\t\t</div>');
    return new Mscrm.SocialInsights.Views.ListViewItem($v_0);
}
Mscrm.SocialInsights.Views.ListViewItem.prototype = {
    $2P_3: null,
    index: null,
    $a_3: null,
    
    get_itemView: function Mscrm_SocialInsights_Views_ListViewItem$get_itemView() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (40,28)
        return this.$a_3;
    },
    
    get_isFocusable: function Mscrm_SocialInsights_Views_ListViewItem$get_isFocusable() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (47,4)
        return this.get_uiElement().attr('tabindex') !== '-1';
    },
    
    set_isFocusable: function Mscrm_SocialInsights_Views_ListViewItem$set_isFocusable(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (48,4)
        var $v_0 = (value) ? '0' : '-1';
        this.get_uiElement().attr('tabindex', $v_0);
        if (Mscrm.SocialInsights.Common.Views.ISupportFocus.isInstanceOfType(this.$a_3)) {
            (this.$a_3).set_isFocusable(value);
        }
        return value;
    },
    
    get_container: function Mscrm_SocialInsights_Views_ListViewItem$get_container() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (57,47)
        return this.$2P_3;
    },
    
    $31_3: function Mscrm_SocialInsights_Views_ListViewItem$$31_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (86,3)
        this.get_uiElement().addClass('focused');
    },
    
    $4b_3: function Mscrm_SocialInsights_Views_ListViewItem$$4b_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (91,3)
        this.get_uiElement().removeClass('focused');
    },
    
    $M_3: function Mscrm_SocialInsights_Views_ListViewItem$$M_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (98,3)
        this.get_uiElement().bind('focusin', this.$$d_$31_3);
        this.get_uiElement().bind('focusout', this.$$d_$4b_3);
    },
    
    $Q_3: function Mscrm_SocialInsights_Views_ListViewItem$$Q_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (104,3)
        this.get_uiElement().unbind('focusin', this.$$d_$31_3);
        this.get_uiElement().unbind('focusout', this.$$d_$4b_3);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_ListViewItem$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/ListViewItem.cs (110,3)
        this.$Q_3();
        Mscrm.SocialInsights.Views.ContainerView.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Views.SpinnerView = function Mscrm_SocialInsights_Views_SpinnerView(uiElement) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (18,3)
    Mscrm.SocialInsights.Views.SpinnerView.initializeBase(this, [ uiElement ]);
    this.$10_2 = this.find('spinner-AnimationContainer img');
}
Mscrm.SocialInsights.Views.SpinnerView.createDefaultLayout = function Mscrm_SocialInsights_Views_SpinnerView$createDefaultLayout() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (130,3)
    var $v_0 = $P_CRM('<div class=\'spinner-Container\' style=\'display: none;\' tabindex=\'0\'>\r\n\t\t\t\t<div class=\'spinner-MessageRow\'>\r\n\t\t\t\t\t<div class=\'spinner-MessageCell\'>\r\n\t\t\t\t\t\t<div class=\'spinner-AnimationContainer\'><img class=\'spinner-Animation\'></img></div>\r\n\t\t\t\t\t\t<div class=\'spinner-Title\'></div>\r\n\t\t\t\t\t\t<div class=\'spinner-Action\'><div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>');
    return new Mscrm.SocialInsights.Views.SpinnerView($v_0);
}
Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault = function Mscrm_SocialInsights_Views_SpinnerView$createNetBreezeDefault() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (140,3)
    var $v_0 = Mscrm.SocialInsights.Views.SpinnerView.createDefaultLayout();
    $v_0.setTitle(window.LOCID_NETBREEZE_WAIT_TITLE);
    var $v_1 = Mscrm.CrmUri.create('/_imgs/processing_loader.gif');
    var $v_2 = Mscrm.ImageStrip.getImageInfo($v_1);
    $v_0.setAnimation($v_2);
    $v_0.setAction(window.LOCID_NETBREEZE_COMMUNICATING);
    return $v_0;
}
Mscrm.SocialInsights.Views.SpinnerView.prototype = {
    
    show: function Mscrm_SocialInsights_Views_SpinnerView$show() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (27,3)
        this.get_uiElement().show();
        if (IsNull(this.$11_2)) {
            this.$11_2 = new Mscrm.SocialInsights.Common.Views.KeepFocusBehavior(this.get_uiElement()[0], this.get_uiElement()[0], this.get_uiElement()[0]);
            var $$t_0 = this;
            this.$2Z_2 = window.setTimeout(function() {
                $P_CRM(document.body).focus();
            }, 0);
        }
    },
    
    hide: function Mscrm_SocialInsights_Views_SpinnerView$hide() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (41,3)
        if (!IsNull(this.$11_2)) {
            this.$11_2.dispose();
            this.$11_2 = null;
        }
        this.get_uiElement().hide();
        window.clearTimeout(this.$2Z_2);
    },
    
    setAnimation: function Mscrm_SocialInsights_Views_SpinnerView$setAnimation(imageInfo) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (56,3)
        if (IsNull(imageInfo)) {
            throw Error.argumentNull('imageInfo');
        }
        this.$3g_2();
        this.$10_2.attr('src', imageInfo.source);
        this.$10_2.addClass(imageInfo.cssClass);
    },
    
    setTitle: function Mscrm_SocialInsights_Views_SpinnerView$setTitle(title) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (71,3)
        var $v_0 = this.find('spinner-Title');
        $v_0.text(title);
        this.$10_2.attr('alt', title);
    },
    
    setAction: function Mscrm_SocialInsights_Views_SpinnerView$setAction(actionDescription) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (83,3)
        var $v_0 = this.find('spinner-Action');
        $v_0.text(actionDescription);
        $v_0.attr('title', actionDescription);
    },
    
    $10_2: null,
    $1q_2: null,
    $11_2: null,
    $2Z_2: 0,
    
    $3g_2: function Mscrm_SocialInsights_Views_SpinnerView$$3g_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (98,3)
        if (IsNull(this.$1q_2)) {
            return;
        }
        this.$10_2.removeClass(this.$1q_2.cssClass);
        this.$1q_2 = null;
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_SpinnerView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/SpinnerView.cs (109,3)
    }
}


Mscrm.SocialInsights.Views.ChooseTopicTypeView = function Mscrm_SocialInsights_Views_ChooseTopicTypeView(uiElement) {
    this.$$d_$4D_3 = Function.createDelegate(this, this.$4D_3);
    this.$$d_$4I_3 = Function.createDelegate(this, this.$4I_3);
    this.$$d_$32_3 = Function.createDelegate(this, this.$32_3);
    this.$$d_$43_3 = Function.createDelegate(this, this.$43_3);
    this.$p_3 = new Mscrm.Views.IconHoverBehavior();
    this.$i_3 = new Mscrm.Views.IconHoverBehavior();
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (27,3)
    Mscrm.SocialInsights.Views.ChooseTopicTypeView.initializeBase(this, [ uiElement ]);
    this.$p_3.disabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3T.get_value();
    this.$p_3.enabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3S.get_value();
    this.$p_3.hover = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3R.get_value();
    this.$p_3.attach(this.get_$2H_3());
    this.$i_3.disabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$2g.get_value();
    this.$i_3.enabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$2f.get_value();
    this.$i_3.hover = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$2e.get_value();
    this.$i_3.attach(this.get_$1l_3());
    this.$c_3 = uiElement.find('input[name=\'radio\']');
    this.$M_3();
    this.$3C_3();
    if (!this.get_currentDataItemType()) {
        this.$5C_3();
    }
}
Mscrm.SocialInsights.Views.ChooseTopicTypeView.run = function Mscrm_SocialInsights_Views_ChooseTopicTypeView$run() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (69,3)
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Views.ChooseTopicTypeView($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Views.ChooseTopicTypeView.skip = function Mscrm_SocialInsights_Views_ChooseTopicTypeView$skip() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (85,3)
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(1);
}
Mscrm.SocialInsights.Views.ChooseTopicTypeView.prototype = {
    
    save: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$save() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (60,3)
        this.set_currentDataItemType(this.get_$3A_3());
        return true;
    },
    
    $c_3: null,
    $d_3: null,
    
    get_$3A_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$get_$3A_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (101,4)
        var $v_0 = $P_CRM('#radio :radio:checked').attr('id');
        if ($v_0 === 'socialInsightTopicCategory') {
            return 2;
        }
        else if ($v_0 === 'socialInsightTopic') {
            return 1;
        }
        else {
            return 0;
        }
    },
    
    $32_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$32_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (113,3)
        switch (this.get_$3A_3()) {
            case 0:
                this.$2V_3(false, false);
                break;
            case 2:
                this.$2V_3(false, true);
                break;
            case 1:
                this.$2V_3(true, false);
                break;
        }
    },
    
    $2V_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$2V_3($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (129,3)
        this.$p_3.toggle(this.get_$2H_3(), !$p0);
        this.$i_3.toggle(this.get_$1l_3(), !$p1);
        this.get_$2H_3().toggleClass('ui-state-active disabled', $p0);
        this.get_$1l_3().toggleClass('ui-state-active disabled', $p1);
        var $v_0 = $p0 || $p1;
        WizardSetButtonEnabled($v_0, _WizardButtonsEnum.NEXTBUTTON);
        this.keepFocus.$g_1 = ($v_0) ? this.get_uiElement().find('#buttonNext')[0] : this.get_uiElement().find('#buttonSettings')[0];
    },
    
    $3C_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$3C_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (142,3)
        var $v_0 = '';
        switch (this.get_currentDataItemType()) {
            case 2:
                $v_0 = 'socialInsightTopicCategory';
                $P_CRM('#socialInsightTopicCategory').attr('checked', 'true');
                break;
            case 1:
                $v_0 = 'socialInsightTopic';
                $P_CRM('#socialInsightTopic').attr('checked', 'true');
                break;
        }
        var $v_1 = $P_CRM($v_0);
        $v_1.click();
        var $$t_2 = this;
        window.setTimeout(function() {
            $v_1.focus();
        }, 0);
        this.$32_3(null);
    },
    
    get_$2H_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$get_$2H_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (173,4)
        return this.get_uiElement().find('.topicLabel');
    },
    
    get_$1l_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$get_$1l_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (184,4)
        return this.get_uiElement().find('.categoryLabel');
    },
    
    $5C_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$5C_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (193,3)
        this.$5A_3();
        this.$36_2().always(this.$$d_$43_3);
    },
    
    $5A_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$5A_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (204,3)
        this.$d_3 = Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault();
        this.$d_3.setAction('');
        $P_CRM(document.body).append(this.$d_3.get_uiElement());
        this.$d_3.show();
    },
    
    $43_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$43_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (217,3)
        this.$3C_3();
        this.$d_3.hide();
        this.$d_3.dispose();
        this.$d_3 = null;
    },
    
    $M_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$M_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (230,3)
        this.$c_3.change(this.$$d_$32_3);
        this.$c_3.keydown(this.$$d_$4I_3);
        this.$c_3.siblings('label').dblclick(this.$$d_$4D_3);
    },
    
    $Q_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$Q_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (237,3)
        this.$c_3.unbind('change', this.$$d_$32_3);
        this.$c_3.unbind('keydown', this.$$d_$4I_3);
        this.$c_3.siblings('label').unbind('dblclick', this.$$d_$4D_3);
    },
    
    $4D_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$4D_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (247,3)
        this.$33_3();
    },
    
    $4I_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$4I_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (256,3)
        if ($p0.which !== 13) {
            return;
        }
        this.$33_3();
    },
    
    $33_3: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$$33_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (267,3)
        this.save();
        this.wizardNavigate(_WizardNavigateEnum.NEXT);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_ChooseTopicTypeView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/ChooseTopicTypeView.cs (277,3)
        this.$Q_3();
        this.$p_3.detach(this.get_$2H_3());
        this.$i_3.detach(this.get_$1l_3());
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Views.SearchTopicItemView = function Mscrm_SocialInsights_Views_SearchTopicItemView(uiElement, viewModel) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemView.cs (18,3)
    Mscrm.SocialInsights.Views.SearchTopicItemView.initializeBase(this, [ uiElement ]);
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    this.$B_2 = viewModel;
    this.$26_2 = this.findSingle('searchTopicName', 'There must be only one name element');
    this.$25_2 = this.findSingle('searchTopicKeywords', 'There must be only one keyword element');
    this.$2M_2();
}
Mscrm.SocialInsights.Views.SearchTopicItemView.createDefaultLayout = function Mscrm_SocialInsights_Views_SearchTopicItemView$createDefaultLayout(viewModel) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemView.cs (74,3)
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    var $v_0 = $P_CRM('<div class=\'searchTopicItem\'>\r\n\t\t\t\t<div class=\'searchTopicName\'></div>\r\n\t\t\t\t<div class=\'searchTopicKeywords\'></div>\r\n\t\t\t</div>');
    return new Mscrm.SocialInsights.Views.SearchTopicItemView($v_0, viewModel);
}
Mscrm.SocialInsights.Views.SearchTopicItemView.prototype = {
    $26_2: null,
    $25_2: null,
    $B_2: null,
    
    $2M_2: function Mscrm_SocialInsights_Views_SearchTopicItemView$$2M_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemView.cs (42,3)
        this.$26_2.text(this.$B_2.$13_0);
        this.$26_2.attr('title', this.$B_2.$13_0);
        this.$25_2.text(this.$B_2.$1K_0);
        this.$25_2.attr('title', this.$B_2.$1K_0);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_SearchTopicItemView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemView.cs (52,3)
    }
}


Mscrm.SocialInsights.Views.SearchTopicItemsListView = function Mscrm_SocialInsights_Views_SearchTopicItemsListView(uiElement, searchTopicItemViewModelsList) {
    this.$$d_$50_2 = Function.createDelegate(this, this.$50_2);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (13,3)
    Mscrm.SocialInsights.Views.SearchTopicItemsListView.initializeBase(this, [ uiElement ]);
    if (IsNull(searchTopicItemViewModelsList)) {
        throw Error.argumentNull('searchTopicItemViewModelsList');
    }
    var $v_0 = this.findSingle('searchTopicItemsList', 'There must be exactly one topics List');
    this.$0_2 = new Mscrm.SocialInsights.Views.ListView($v_0, searchTopicItemViewModelsList, this.$$d_$50_2);
}
Mscrm.SocialInsights.Views.SearchTopicItemsListView.prototype = {
    $0_2: null,
    
    initialize: function Mscrm_SocialInsights_Views_SearchTopicItemsListView$initialize() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (26,3)
        this.$0_2.initialize();
        if (!this.$0_2.get_itemCount()) {
            var $v_0 = String.format(window.LOCID_NETBREEZE_NO_TOPICS, window.LOCID_NETBREEZE_TOPIC);
            this.find('searchTopicItemsList').text($v_0);
        }
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_SearchTopicItemsListView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (38,3)
    },
    
    $50_2: function Mscrm_SocialInsights_Views_SearchTopicItemsListView$$50_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (43,3)
        if (IsNull($p0)) {
            throw Error.argumentNull('viewModel');
        }
        if (Object.getType($p0) !== Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel) {
            throw Error.argumentType('viewModel', Object.getType($p0), Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel);
        }
        var $v_0 = Mscrm.SocialInsights.Views.SearchTopicItemView.createDefaultLayout($p0);
        return $v_0;
    },
    
    getSelectedItem: function Mscrm_SocialInsights_Views_SearchTopicItemsListView$getSelectedItem() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (55,3)
        if (this.$0_2.$4_2 < 0) {
            return null;
        }
        return this.$0_2.$9_2[this.$0_2.$4_2];
    },
    
    selectFirstItem: function Mscrm_SocialInsights_Views_SearchTopicItemsListView$selectFirstItem() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (65,3)
        if (!this.$0_2.get_itemCount()) {
            return;
        }
        this.$0_2.set_selectedIndex(0);
    },
    
    select: function Mscrm_SocialInsights_Views_SearchTopicItemsListView$select(itemID) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (78,3)
        for (var $v_0 = 0; $v_0 < this.$0_2.get_itemCount(); $v_0++) {
            var $v_1 = this.$0_2.$9_2[$v_0];
            if ($v_1.$15_0.id !== itemID) {
                continue;
            }
            this.$0_2.set_selectedIndex($v_0);
            this.$4y_2($v_0);
            return true;
        }
        return false;
    },
    
    $4y_2: function Mscrm_SocialInsights_Views_SearchTopicItemsListView$$4y_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicItemsListView.cs (100,3)
        var $v_0 = this.$0_2.get_item($p0).get_uiElement();
        var $v_1 = $v_0.parent();
        $v_1.scrollTop(0);
        $v_1.scrollTop($v_0.position().top - $v_1.position().top);
    }
}


Mscrm.SocialInsights.Views.CreateTopicView = function Mscrm_SocialInsights_Views_CreateTopicView($p0, $p1) {
    this.$$d_$4Y_2 = Function.createDelegate(this, this.$4Y_2);
    this.$$d_$5G_2 = Function.createDelegate(this, this.$5G_2);
    this.$$d_handleNextForCreate = Function.createDelegate(this, this.handleNextForCreate);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (60,3)
    Mscrm.SocialInsights.Views.CreateTopicView.initializeBase(this, [ $p0 ]);
    this.$5_2 = $p1;
    this.$D_2 = this.get_uiElement().siblings('.errorDiv');
    this.$I_2 = this.get_uiElement().find('#edit');
    this.$14_2 = this.$I_2.find('#nameInput');
    this.$t_2 = this.$I_2.find('#categorySelect');
    this.$12_2 = this.$I_2.find('#keywordsInput');
    this.$21_2 = this.$I_2.find('#inclusionsInput');
    this.$1t_2 = this.$I_2.find('#exclusionsInput');
    this.$1n_2 = this.$I_2.find('#channelsField .field');
    this.$28_2 = this.$I_2.find('#languagesField .field');
    this.$r_2 = this.get_uiElement().find('#advancedEdit');
    this.$1h_2 = this.$r_2.find('#advancedSetup');
    this.$1R_2 = this.get_uiElement().find('#quickSetupUnavailable');
    this.$2A_2 = this.$1R_2.find('#quickSetupUnavailableLink');
    this.$53_2();
    this.$14_2.keyup(this.$$d_handleNextForCreate);
    this.$12_2.keyup(this.$$d_handleNextForCreate);
    this.$2_2 = Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault();
    var $v_0 = $P_CRM(document.body);
    $v_0.append(this.$2_2.get_uiElement());
}
Mscrm.SocialInsights.Views.CreateTopicView.setupCreateTopicView = function Mscrm_SocialInsights_Views_CreateTopicView$setupCreateTopicView(element) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (105,3)
    var $v_0 = new Mscrm.SocialInsights.ViewModels.CreateTopicViewModel();
    return new Mscrm.SocialInsights.Views.CreateTopicView(element, $v_0);
}
Mscrm.SocialInsights.Views.CreateTopicView.prototype = {
    $5_2: null,
    $D_2: null,
    $I_2: null,
    $r_2: null,
    $14_2: null,
    $t_2: null,
    $12_2: null,
    $21_2: null,
    $1t_2: null,
    $1n_2: null,
    $28_2: null,
    $1h_2: null,
    $1R_2: null,
    $2A_2: null,
    $2_2: null,
    $22_2: false,
    
    handleNextForCreate: function Mscrm_SocialInsights_Views_CreateTopicView$handleNextForCreate(e) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (90,3)
        var $v_0 = WizardGetProperty('editSearchItemAllowed');
        var $v_1 = false;
        if ((!IsNull($v_0) && !$v_0) || (!isNullOrEmptyString(this.$14_2.val()) && !isNullOrEmptyString(this.$12_2.val()))) {
            $v_1 = true;
        }
        WizardSetButtonEnabled($v_1, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    validateTopic: function Mscrm_SocialInsights_Views_CreateTopicView$validateTopic() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (115,3)
        this.$D_2.removeClass('topicTooBroadVisible');
        this.$3J_2();
        var $v_0 = this.$5_2.validateTopic();
        $v_0.fail(this.$$d_$5G_2);
        return $v_0;
    },
    
    storeValuesInPropertyBag: function Mscrm_SocialInsights_Views_CreateTopicView$storeValuesInPropertyBag() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (131,3)
        this.$5_2.get_searchItem().name = this.$14_2.val();
        this.$5_2.get_searchItem().parentId = this.$t_2.val();
        this.$5_2.get_searchItem().searchQuerySet[0].phrases = this.$12_2.val();
        this.$5_2.get_searchItem().searchQuerySet[0].inclusions.phrases = this.$21_2.val();
        this.$5_2.get_searchItem().searchQuerySet[0].exclusions.phrases = this.$1t_2.val();
        WizardSetProperty('proposedSearchItem', this.$5_2.get_searchItem());
    },
    
    initialize: function Mscrm_SocialInsights_Views_CreateTopicView$initialize(searchItemId) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (146,3)
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, String);
        this.$3J_2();
        if (isNullOrEmptyString(searchItemId)) {
            this.$3F_2();
            $v_0.resolve();
        }
        else {
            var $$t_4 = this, $$t_5 = this;
            Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem(searchItemId).done(function($p1_0) {
                $v_0.resolve(true);
                $$t_4.$4z_2($p1_0);
            }).fail(function($p1_0) {
                $$t_5.$3F_2();
                $v_0.reject($p1_0);
            });
        }
        return $v_0.promise();
    },
    
    get_initialized: function Mscrm_SocialInsights_Views_CreateTopicView$get_initialized() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (178,29)
        return this.$22_2;
    },
    
    $5G_2: function Mscrm_SocialInsights_Views_CreateTopicView$$5G_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (186,3)
        this.$2_2.hide();
        if ($p0 === 'TopicTooBroad') {
            this.$D_2.addClass('topicTooBroadVisible');
        }
        else {
            Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze();
        }
    },
    
    $4z_2: function Mscrm_SocialInsights_Views_CreateTopicView$$4z_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (204,3)
        this.$5_2.$H_0 = $p0.$15_0;
        if (!this.$5_2.get_showEdit()) {
            this.$59_2();
            return;
        }
        var $$t_3 = this, $$t_4 = this;
        this.$5_2.get_categories().done(function($p1_0) {
            $$t_3.$2i_2(null, $p1_0);
            $$t_3.handleNextForCreate(null);
        }).fail(function($p1_0) {
            $$t_4.$2_2.hide();
            Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze();
        });
    },
    
    $3F_2: function Mscrm_SocialInsights_Views_CreateTopicView$$3F_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (242,3)
        var $$t_2 = this, $$t_3 = this;
        $P_CRM.when(this.$5_2.get_netBreezeDefaults(), this.$5_2.get_categories()).done(function($p1_0) {
            $$t_2.$2i_2(arguments[0], arguments[1]);
        }).fail(function($p1_0) {
            $$t_3.$2_2.hide();
            Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze();
        });
    },
    
    $2i_2: function Mscrm_SocialInsights_Views_CreateTopicView$$2i_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (268,3)
        this.$22_2 = true;
        this.$4m_2($p1);
        this.$52_2();
        this.$54_2($p0);
        this.$58_2();
    },
    
    $4m_2: function Mscrm_SocialInsights_Views_CreateTopicView$$4m_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (288,3)
        this.$t_2.empty();
        for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            this.$t_2.append(String.format('<option value=\'{0}\'>{1}</option>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.id), CrmEncodeDecode.CrmHtmlEncode($v_0.name)));
        }
    },
    
    $52_2: function Mscrm_SocialInsights_Views_CreateTopicView$$52_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (304,3)
        if (!IsNull(WizardGetProperty('proposedSearchItem'))) {
            this.$5_2.$H_0 = WizardGetProperty('proposedSearchItem');
        }
        if (!IsNull(this.$5_2.get_searchItem())) {
            var $v_0 = this.$5_2.get_searchItem();
            this.$14_2.val($v_0.name);
            this.$t_2.val($v_0.parentId);
            this.$12_2.val($v_0.searchQuerySet[0].phrases);
            this.$21_2.val($v_0.searchQuerySet[0].inclusions.phrases);
            this.$1t_2.val($v_0.searchQuerySet[0].exclusions.phrases);
        }
        else {
            this.$r_2.hide();
        }
    },
    
    $54_2: function Mscrm_SocialInsights_Views_CreateTopicView$$54_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (329,3)
        var $v_0 = this.$5_2.get_searchItem();
        if (!IsNull($v_0.searchQuerySet[0].searchChannels)) {
            var $v_1 = $v_0.searchQuerySet[0];
            var $v_2 = new Array(0);
            for (var $$arr_4 = $v_1.languages, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_4 = $$arr_4[$$idx_6];
                $v_2.push($v_4);
            }
            var $v_3 = new Array(0);
            for (var $$arr_9 = $v_1.searchChannels, $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B) {
                var $v_5 = $$arr_9[$$idx_B];
                $v_3.push($v_5.name);
            }
            this.$28_2.text($v_2.join(', '));
            this.$1n_2.text($v_3.join(', '));
        }
        else {
            this.$1n_2.text($p0.searchChannelDefaults.join(', '));
            this.$28_2.text($p0.searchLanguageDefaults.join(', '));
        }
    },
    
    $53_2: function Mscrm_SocialInsights_Views_CreateTopicView$$53_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (361,3)
        this.$1h_2.click(this.$$d_$4Y_2);
        this.$2A_2.click(this.$$d_$4Y_2);
    },
    
    $4Y_2: function Mscrm_SocialInsights_Views_CreateTopicView$$4Y_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (370,3)
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_socialinsightsresetalldata.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_Advanced_Insight_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_Advanced_Insight_Description';
        $v_0.get_query()['resource_body1'] = 'Dialog_Advanced_Insight_Body1';
        $v_0.get_query()['resource_body2'] = 'Dialog_Advanced_Insight_Body2';
        var $v_1 = new Mscrm.CrmDialog($v_0, null, Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth, Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight, null);
        var $v_2 = Mscrm.Utilities.createCallbackFunctionObject('LaunchNetBreeze', this, null, false);
        $v_1.setCallbackReference($v_2);
        $v_1.show();
    },
    
    LaunchNetBreeze: function Mscrm_SocialInsights_Views_CreateTopicView$LaunchNetBreeze(result) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (388,3)
        if (IsNull(result) || !result) {
            return;
        }
        window.open(Mscrm.SocialInsights.Runtime.Services.UrlService.getAdvancedSetupLink(this.$5_2.get_searchItem().id));
        WizardNavigate(_WizardNavigateEnum.CLOSE);
    },
    
    $3J_2: function Mscrm_SocialInsights_Views_CreateTopicView$$3J_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (402,3)
        this.$2_2.show();
    },
    
    $58_2: function Mscrm_SocialInsights_Views_CreateTopicView$$58_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (410,3)
        this.$2_2.hide();
        this.$I_2.show();
        this.$r_2.show();
        this.$1R_2.hide();
        WizardSetProperty('editSearchItemAllowed', true);
    },
    
    $59_2: function Mscrm_SocialInsights_Views_CreateTopicView$$59_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (422,3)
        this.$2_2.hide();
        this.$I_2.hide();
        this.$r_2.hide();
        this.$1R_2.show();
        WizardSetProperty('editSearchItemAllowed', false);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_CreateTopicView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/CreateTopicView.cs (431,3)
        this.$2_2.get_uiElement().remove();
        this.$2_2.dispose();
        this.$1h_2.unbind();
        this.$2A_2.unbind();
    }
}


Mscrm.SocialInsights.Views.WidgetListEditorStrings = function Mscrm_SocialInsights_Views_WidgetListEditorStrings() {
}
Mscrm.SocialInsights.Views.WidgetListEditorStrings.prototype = {
    moveUpTooltip: 'INVALID STRING',
    moveDownTooltip: 'INVALID STRING',
    deleteTooltip: 'INVALID STRING',
    addButtonCaptionAndTooltip: 'INVALID STRING',
    headerType: 'INVALID STRING',
    headerDescription: 'INVALID STRING',
    headerPreview: 'INVALID STRING',
    unsupportedWidget: 'INVALID STRING',
    searchItemCaption: 'INVALID STRING',
    searchCategoryCaption: 'INVALID STRING',
    
    getFromWindowLocalizationVariables: function Mscrm_SocialInsights_Views_WidgetListEditorStrings$getFromWindowLocalizationVariables() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorStrings.cs (29,3)
        this.moveUpTooltip = window.LOCID_NETBREEZE_WIDGET_UP;
        this.moveDownTooltip = window.LOCID_NETBREEZE_WIDGET_DOWN;
        this.deleteTooltip = window.LOCID_NETBREEZE_WIDGET_DEL;
        this.addButtonCaptionAndTooltip = window.LOCID_NETBREEZE_WIDGET_ADD;
        this.headerType = window.LOCID_NETBREEZE_HEAD_TYPE;
        this.headerDescription = window.LOCID_NETBREEZE_HEAD_DESCR;
        this.headerPreview = window.LOCID_NETBREEZE_HEAD_PREVIEW;
        this.unsupportedWidget = window.LOCID_NETBREEZE_ERR_UNSUPPORTED;
        this.searchItemCaption = window.LOCID_NETBREEZE_ITEM_CAPTION;
        this.searchCategoryCaption = window.LOCID_NETBREEZE_CATEGORY_CAPTION;
    }
}


Mscrm.SocialInsights.Views.WidgetListEditorView = function Mscrm_SocialInsights_Views_WidgetListEditorView($p0, $p1, $p2) {
    this.$$d_$3W_2 = Function.createDelegate(this, this.$3W_2);
    this.$$d_$4e_2 = Function.createDelegate(this, this.$4e_2);
    this.$$d_$3v_2 = Function.createDelegate(this, this.$3v_2);
    this.$$d_$5K_2 = Function.createDelegate(this, this.$5K_2);
    this.$S_2 = new Mscrm.Views.IconHoverBehavior();
    this.$1C_2 = new Mscrm.Views.IconHoverBehavior();
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (24,3)
    Mscrm.SocialInsights.Views.WidgetListEditorView.initializeBase(this, [ $p0 ]);
    if (IsNull($p1)) {
        throw Error.argumentNull('viewModel');
    }
    if (IsNull($p2)) {
        throw Error.argumentNull('strings');
    }
    this.$o_2 = $p2;
    var $v_0 = this.findSingle('WidgetListEditor-List', 'There must be exactly one widget list');
    this.$0_2 = new Mscrm.SocialInsights.Views.ListView($v_0, $p1, this.$$d_$5K_2);
    var $$t_9 = this;
    this.$0_2.add_itemAdded(function($p1_0, $p1_1) {
        return Mscrm.SocialInsights.Views.WidgetListEditorView.$3E(true);
    });
    var $$t_A = this;
    this.$0_2.add_itemRemoved(function($p1_0, $p1_1) {
        if (!$$t_A.$0_2.get_itemCount()) {
            Mscrm.SocialInsights.Views.WidgetListEditorView.$3E(false);
        }
    });
    var $v_1 = this.findSingle('WidgetListEditor-MoveControls', 'There must be exactly one instance of move controls');
    this.$29_2 = new Mscrm.Views.CrmMoveControlsView($v_1, this.$0_2);
    this.$C_2 = this.find('WidgetListEditor-AddButton');
    this.$S_2.enabled = Mscrm.Views.CrmMoveIcons.enabledAddInfo.get_value();
    this.$S_2.hover = Mscrm.Views.CrmMoveIcons.hoverAddInfo.get_value();
    this.$S_2.disabled = Mscrm.Views.CrmMoveIcons.disabledAddInfo.get_value();
    this.$S_2.attach(this.$C_2);
    this.$S_2.onDisable(this.$C_2);
    this.$1C_2.enabled = Mscrm.Views.CrmMoveIcons.enabledDeleteInfo.get_value();
    this.$1C_2.hover = Mscrm.Views.CrmMoveIcons.hoverDeleteInfo.get_value();
    this.$29_2.initialize();
}
Mscrm.SocialInsights.Views.WidgetListEditorView.$3E = function Mscrm_SocialInsights_Views_WidgetListEditorView$$3E($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (56,3)
    WizardSetButtonEnabled($p0, _WizardButtonsEnum.NEXTBUTTON);
}
Mscrm.SocialInsights.Views.WidgetListEditorView.createDefaultLayout = function Mscrm_SocialInsights_Views_WidgetListEditorView$createDefaultLayout(isCategory, strings) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (347,3)
    if (IsNull(strings)) {
        throw Error.argumentNull('strings');
    }
    var $v_0 = String.format('<div class=\'WidgetListEditor\'>\r\n\t\t\t\t<div class=\'WidgetListEditor-Title\'>\t\t\t\t\t\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<div tabindex=0 class=\'WidgetListEditor-TopicContainer\'>\r\n\t\t\t\t\t\t\t<span class=\'WidgetListEditor-TopicCaption\'>{6}</span>\r\n\t\t\t\t\t\t\t<span class=\'WidgetListEditor-Topic\'></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<button class=\'WidgetListEditor-AddButton disabled\'  title=\'{5}\' disabled=\'disabled\'><img alt=\'{5}\'/></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'WidgetListEditor-Header\'>\r\n\t\t\t\t\t<div class=\'listview-item-index\'><br></div>\r\n\t\t\t\t\t<div class=\'widget-type\'>{0}</div>\r\n\t\t\t\t\t<div class=\'widget-type-description\'>{1}</div>\r\n\t\t\t\t\t<div class=\'widget-type-preview\'>{2}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'listview WidgetListEditor-List\'></div>\r\n\t\t\t\t<div class=\'WidgetListEditor-MoveControls\'>\r\n\t\t\t\t\t<button class=\'List-MoveUp disabled\' title=\'{3}\' disabled=\'disabled\'><img alt=\'{3}\'/></button>\r\n\t\t\t\t\t<button class=\'List-MoveDown disabled\'  title=\'{4}\' disabled=\'disabled\'><img alt=\'{4}\'/></button>\r\n\t\t\t\t\t<div class=\'WidgetListEditor-MoveCaptionCell\'>\r\n\t\t\t\t\t\t<span class=\'List-MoveCaption\'></span>\r\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t<div id=\'visualNotSupportedWarning\' class=\'WidgetListEditor-VisualNotSupported\'>   \r\n\t\t\t\t\t  <div style=\'display:table-cell\'>\r\n\t\t\t\t\t\t  <img class=\'WidgetListEditor-VisualNotSupportedInfoIcon\' src=\'/_imgs/SocialInsight/InfoAlert_16.png\'>\r\n\t\t\t\t\t  </div> \r\n\t\t\t\t\t  <div style=\'display:table-cell\'>\r\n\t\t\t\t\t\t<div class=\'WidgetListEditor-VisualNotSupportedMessage\'>{7}</div>\r\n\t\t\t\t\t  </div>  \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>', CrmEncodeDecode.CrmHtmlEncode(strings.headerType), CrmEncodeDecode.CrmHtmlEncode(strings.headerDescription), CrmEncodeDecode.CrmHtmlEncode(strings.headerPreview), CrmEncodeDecode.CrmHtmlAttributeEncode(strings.moveUpTooltip), CrmEncodeDecode.CrmHtmlAttributeEncode(strings.moveDownTooltip), CrmEncodeDecode.CrmHtmlAttributeEncode(strings.addButtonCaptionAndTooltip), CrmEncodeDecode.CrmHtmlEncode((isCategory) ? strings.searchCategoryCaption : strings.searchItemCaption), CrmEncodeDecode.CrmHtmlEncode(strings.unsupportedWidget));
    var $v_1 = $P_CRM($v_0);
    return new Mscrm.SocialInsights.Views.WidgetListEditorView($v_1, [], strings);
}
Mscrm.SocialInsights.Views.WidgetListEditorView.prototype = {
    
    initialize: function Mscrm_SocialInsights_Views_WidgetListEditorView$initialize() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (61,3)
        if (IsNull(this.$K_2)) {
            throw Error.invalidOperation('You must set SupportedTypes first');
        }
        this.$0_2.initialize();
        this.$M_2();
        this.$1T_2();
    },
    
    get_supportedTypes: function Mscrm_SocialInsights_Views_WidgetListEditorView$get_supportedTypes() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (81,4)
        return this.$K_2;
    },
    
    set_supportedTypes: function Mscrm_SocialInsights_Views_WidgetListEditorView$set_supportedTypes(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (82,4)
        if (IsNull(value)) {
            throw Error.argumentNull('SupportedTypes');
        }
        this.$K_2 = value;
        this.$1T_2();
        return value;
    },
    
    get_viewModel: function Mscrm_SocialInsights_Views_WidgetListEditorView$get_viewModel() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (96,32)
        return this.$0_2.$9_2;
    },
    
    add: function Mscrm_SocialInsights_Views_WidgetListEditorView$add(widgetType) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (102,3)
        if (IsNull(widgetType)) {
            throw Error.argumentNull('widgetType');
        }
        var $v_0 = this.$0_2.add(widgetType.clone());
        var $v_1 = $v_0.$a_3;
        var $v_2 = $v_1.$y_2;
        $v_2.click(this.$$d_$3v_2);
        this.$1C_2.attach($v_2);
        this.$1T_2();
    },
    
    displayVisualNotFoundMessage: function Mscrm_SocialInsights_Views_WidgetListEditorView$displayVisualNotFoundMessage() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (121,3)
        var $v_0 = $P_CRM('#visualNotSupportedWarning');
        $v_0.show();
    },
    
    hideVisualNotFoundMessage: function Mscrm_SocialInsights_Views_WidgetListEditorView$hideVisualNotFoundMessage() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (127,3)
        var $v_0 = $P_CRM('#visualNotSupportedWarning');
        $v_0.hide();
    },
    
    $0_2: null,
    $29_2: null,
    $C_2: null,
    $o_2: null,
    $K_2: null,
    
    $1T_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$1T_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (145,3)
        this.hideVisualNotFoundMessage();
        var $v_0 = this.$2S_2();
        this.$5F_2($v_0);
        if (this.$3Z_2($v_0)) {
            this.$C_2.addClass('disabled');
            this.$S_2.onDisable(this.$C_2);
            this.$C_2.prop('disabled', true);
        }
        else {
            this.$C_2.removeClass('disabled');
            this.$S_2.onEnable(this.$C_2);
            this.$C_2.prop('disabled', false);
        }
    },
    
    $5K_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$5K_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (161,3)
        if (IsNull($p0)) {
            throw Error.argumentNull('viewModel');
        }
        var $v_0 = $p0;
        if (IsNull($v_0)) {
            throw Error.argumentType('viewModel', Object.getType($p0), Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel);
        }
        var $v_1 = Mscrm.SocialInsights.Views.WidgetTypeView.createDefaultLayout($v_0, this.$o_2);
        var $v_2 = this.$2S_2();
        $v_1.$3D_2(this.$K_2, $v_2);
        $v_1.add_$3U_2(this.$$d_$4e_2);
        return $v_1;
    },
    
    $3v_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$3v_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (177,3)
        var $v_0 = this.$0_2.getItemIndex($P_CRM($p0.currentTarget));
        this.$2L_2($v_0);
        this.$0_2.removeAt($v_0);
        this.$1T_2();
        this.$0_2.get_uiElement().focus();
    },
    
    $3W_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$3W_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (191,3)
        if (this.$C_2.hasClass('disabled')) {
            return;
        }
        var $v_0 = this.$46_2();
        this.add($v_0);
        this.$0_2.set_selectedIndex(this.$0_2.get_itemCount() - 1);
    },
    
    $46_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$46_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (203,3)
        var $v_0 = this.$2S_2();
        for (var $$arr_1 = this.$K_2, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            if (!(($v_1.get_id()) in $v_0)) {
                return $v_1;
            }
        }
        return null;
    },
    
    $5F_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$5F_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (214,3)
        for (var $v_0 = 0; $v_0 < this.$0_2.get_itemCount(); $v_0++) {
            var $v_1 = this.$0_2.get_item($v_0);
            var $v_2 = $v_1.$a_3;
            $v_2.$3D_2(this.$K_2, $p0);
        }
    },
    
    $2S_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$2S_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (224,3)
        var $v_0 = {};
        var $v_1 = this.$0_2.get_itemViewModels();
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            $v_0[$v_3.get_id()] = true;
        }
        return $v_0;
    },
    
    $3Z_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$3Z_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (236,3)
        for (var $$arr_1 = this.$K_2, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (!(($v_0.get_id()) in $p0)) {
                return false;
            }
        }
        return true;
    },
    
    $4e_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$4e_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (246,3)
        this.$1T_2();
    },
    
    $2L_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$2L_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (253,3)
        var $v_0 = this.$0_2.get_item($p0).$a_3;
        $v_0.$y_2.unbind('click', this.$$d_$3v_2);
        this.$1C_2.detach($v_0.$y_2);
        $v_0.remove_$3U_2(this.$$d_$4e_2);
    },
    
    $M_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$M_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (261,3)
        this.$C_2.click(this.$$d_$3W_2);
    },
    
    $Q_2: function Mscrm_SocialInsights_Views_WidgetListEditorView$$Q_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (266,3)
        this.$C_2.unbind('click', this.$$d_$3W_2);
        for (var $v_0 = 0; $v_0 < this.$0_2.get_itemCount(); $v_0++) {
            this.$2L_2($v_0);
        }
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_WidgetListEditorView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetListEditorView.cs (275,3)
        this.$Q_2();
        this.$S_2.detach(this.$C_2);
        this.$29_2.dispose();
        this.$0_2.dispose();
    }
}


Mscrm.SocialInsights.Views.WidgetTypeView = function Mscrm_SocialInsights_Views_WidgetTypeView(uiElement, viewModel, strings) {
    this.$$d_$5J_2 = Function.createDelegate(this, this.$5J_2);
    this.$E_2 = new Sys.EventHandlerList();
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (27,3)
    Mscrm.SocialInsights.Views.WidgetTypeView.initializeBase(this, [ uiElement ]);
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    if (IsNull(strings)) {
        throw Error.argumentNull('strings');
    }
    this.$B_2 = viewModel;
    this.$o_2 = strings;
    this.$f_2 = this.findSingle('widget-type', 'There must be only one dropdown for widget type');
    this.$2I_2 = this.get_uiElement().find('.widget-type-description-text div');
    this.$2a_2 = this.findSingle('widget-type-preview', 'There must be only one widget preview element');
    this.$y_2 = this.findSingle('WidgetListEditor-DeleteButton', 'There must be exactly one delete button');
    this.$2M_2(true);
    this.$M_2();
}
Mscrm.SocialInsights.Views.WidgetTypeView.createDefaultLayout = function Mscrm_SocialInsights_Views_WidgetTypeView$createDefaultLayout(viewModel, strings) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (223,3)
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    var $v_0 = String.format('<div class=\'widget-type-view\'>\r\n\t\t\t\t<select class=\'widget-type\' title=\'{0}\' tabindex=\'-1\'></select>\r\n\t\t\t\t<div class=\'widget-type-description\'>\r\n\t\t\t\t\t<div class=\'widget-type-description-cell\'>\r\n\t\t\t\t\t\t<div class=\'widget-type-description-text\' tabindex=\'-1\'><div/></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img class=\'widget-type-preview\'>\r\n\t\t\t\t<button class=\'{1}\' title=\'{2}\' tabindex=\'-1\'><img alt=\'{2}\'/></button>\r\n\t\t\t</div>', CrmEncodeDecode.CrmHtmlAttributeEncode(strings.headerType), 'WidgetListEditor-DeleteButton', CrmEncodeDecode.CrmHtmlAttributeEncode(strings.deleteTooltip));
    var $v_1 = $P_CRM($v_0);
    return new Mscrm.SocialInsights.Views.WidgetTypeView($v_1, viewModel, strings);
}
Mscrm.SocialInsights.Views.WidgetTypeView.prototype = {
    
    get_isFocusable: function Mscrm_SocialInsights_Views_WidgetTypeView$get_isFocusable() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (54,4)
        return this.$24_2;
    },
    
    set_isFocusable: function Mscrm_SocialInsights_Views_WidgetTypeView$set_isFocusable(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (55,4)
        if (value === this.$24_2) {
            return value;
        }
        var $v_0 = (value) ? '0' : '-1';
        this.get_uiElement().find('[tabindex]').attr('tabindex', $v_0);
        this.$24_2 = value;
        return value;
    },
    
    get_deleteButton: function Mscrm_SocialInsights_Views_WidgetTypeView$get_deleteButton() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (70,38)
        return this.$y_2;
    },
    
    add_$3U_2: function Mscrm_SocialInsights_Views_WidgetTypeView$add_$3U_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (74,4)
        this.$E_2.addHandler('TypeChanged', $p0);
    },
    
    remove_$3U_2: function Mscrm_SocialInsights_Views_WidgetTypeView$remove_$3U_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (75,4)
        this.$E_2.removeHandler('TypeChanged', $p0);
    },
    
    $3D_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$3D_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (78,3)
        var $v_0 = false;
        this.$f_2.empty();
        for (var $$arr_3 = $p0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_1 = $$arr_3[$$idx_5];
            var $v_2 = $v_1.get_id() === this.$B_2.get_id();
            $v_0 = !!($v_0 | $v_2);
            if (!(($v_1.get_id()) in $p1) || $v_2) {
                this.$2c_2($v_1);
            }
        }
        if (!$v_0) {
            this.$2c_2(this.$B_2);
        }
        this.$f_2.val(this.$B_2.get_id());
        this.$K_2 = $p0;
        this.$2M_2($v_0);
    },
    
    $f_2: null,
    $2I_2: null,
    $2a_2: null,
    $y_2: null,
    $B_2: null,
    $o_2: null,
    $K_2: null,
    $24_2: false,
    
    $1u_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$1u_2($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (116,3)
        if (IsNull(this.$E_2)) {
            return;
        }
        var $v_0 = this.$E_2.getHandler($p0);
        if (!IsNull($v_0)) {
            $v_0(this, $p1);
        }
    },
    
    $2c_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$2c_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (125,3)
        var $v_0 = $P_CRM('<option>');
        $v_0.val($p0.get_id());
        $v_0.text($p0.get_name());
        this.$f_2.append($v_0);
    },
    
    $5J_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$5J_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (134,3)
        var $v_0 = this.$f_2.val();
        var $v_1 = this.$48_2($v_0);
        this.$B_2.setType($v_1);
        this.$2M_2(true);
        this.$1u_2('TypeChanged', Sys.EventArgs.Empty);
    },
    
    $48_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$48_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (144,3)
        for (var $$arr_1 = this.$K_2, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.get_id() === $p0) {
                return $v_0;
            }
        }
        throw Error.invalidOperation('Type ID not found: ' + $p0);
    },
    
    $2M_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$2M_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (157,3)
        if ($p0) {
            this.get_uiElement().removeClass('widget-type-unsupported');
            this.$2I_2.text(this.$B_2.get_typeDescription()).parent().attr('title', this.$B_2.get_typeDescription());
        }
        else {
            this.get_uiElement().addClass('widget-type-unsupported');
            this.$2I_2.text(this.$o_2.unsupportedWidget).parent().attr('title', this.$o_2.unsupportedWidget);
        }
        this.$2a_2.attr('src', this.$B_2.get_previewImage());
    },
    
    $M_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$M_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (177,3)
        this.$f_2.change(this.$$d_$5J_2);
    },
    
    $Q_2: function Mscrm_SocialInsights_Views_WidgetTypeView$$Q_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (182,3)
        this.$f_2.unbind('change', this.$$d_$5J_2);
    },
    
    actualDispose: function Mscrm_SocialInsights_Views_WidgetTypeView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WidgetTypeView.cs (187,3)
        this.$Q_2();
    }
}


Type.registerNamespace('Mscrm.Views');

Mscrm.Views.IconHoverBehavior = function Mscrm_Views_IconHoverBehavior() {
    this.$$d_$4h_0 = Function.createDelegate(this, this.$4h_0);
    this.$$d_$4g_0 = Function.createDelegate(this, this.$4g_0);
}
Mscrm.Views.IconHoverBehavior.$30 = function Mscrm_Views_IconHoverBehavior$$30($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (124,3)
    return $p0.hasClass('disabled');
}
Mscrm.Views.IconHoverBehavior.prototype = {
    disabled: null,
    enabled: null,
    hover: null,
    
    attach: function Mscrm_Views_IconHoverBehavior$attach(icon) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (32,3)
        this.$u_0(icon);
        this.$1S_0(icon, this.enabled);
        icon.mouseenter(this.$$d_$4g_0);
        icon.mouseleave(this.$$d_$4h_0);
    },
    
    detach: function Mscrm_Views_IconHoverBehavior$detach(icon) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (45,3)
        this.$u_0(icon);
        icon.unbind('mouseenter', this.$$d_$4g_0);
        icon.unbind('mouseleave', this.$$d_$4h_0);
    },
    
    onEnable: function Mscrm_Views_IconHoverBehavior$onEnable(icon) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (55,3)
        this.$u_0(icon);
        this.$1S_0(icon, this.enabled);
    },
    
    onDisable: function Mscrm_Views_IconHoverBehavior$onDisable(icon) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (64,3)
        this.$u_0(icon);
        this.$1S_0(icon, this.disabled);
    },
    
    toggle: function Mscrm_Views_IconHoverBehavior$toggle(icon, enabled) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (73,3)
        if (enabled) {
            this.onEnable(icon);
        }
        else {
            this.onDisable(icon);
        }
    },
    
    $u_0: function Mscrm_Views_IconHoverBehavior$$u_0($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (82,3)
        if (IsNull($p0)) {
            throw Error.argumentNull('icon');
        }
        if (!$p0.children('img').length) {
            throw Error.argument('icon', 'This is not an icon container');
        }
    },
    
    $1S_0: function Mscrm_Views_IconHoverBehavior$$1S_0($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (90,3)
        var $v_0 = $p0.children('img');
        $v_0.removeClass(this.enabled.cssClass);
        $v_0.removeClass(this.hover.cssClass);
        if (!IsNull(this.disabled)) {
            $v_0.removeClass(this.disabled.cssClass);
        }
        $v_0.attr('src', $p1.source);
        $v_0.addClass($p1.cssClass);
    },
    
    $4g_0: function Mscrm_Views_IconHoverBehavior$$4g_0($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (102,3)
        var $v_0 = $P_CRM($p0.currentTarget);
        this.$u_0($v_0);
        if (Mscrm.Views.IconHoverBehavior.$30($v_0)) {
            return;
        }
        this.$1S_0($v_0, this.hover);
    },
    
    $4h_0: function Mscrm_Views_IconHoverBehavior$$4h_0($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/IconHoverBehavior.cs (113,3)
        var $v_0 = $P_CRM($p0.currentTarget);
        this.$u_0($v_0);
        if (Mscrm.Views.IconHoverBehavior.$30($v_0)) {
            return;
        }
        this.$1S_0($v_0, this.enabled);
    }
}


Mscrm.Views.CrmMoveIcons = function Mscrm_Views_CrmMoveIcons() {
}
Mscrm.Views.CrmMoveIcons.$8 = function Mscrm_Views_CrmMoveIcons$$8($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveIcons.cs (33,3)
    return new (Mscrm.Lazy$1.$$(Mscrm.ImageInfo))(function() {
        var $v_0 = Mscrm.CrmUri.create($p0);
        return Mscrm.ImageStrip.getImageInfo($v_0);
    });
}


Mscrm.Views.CrmMoveControlsView = function Mscrm_Views_CrmMoveControlsView(uiElement, listView) {
    this.$$d_$4j_3 = Function.createDelegate(this, this.$4j_3);
    this.$$d_$4i_3 = Function.createDelegate(this, this.$4i_3);
    this.$l_3 = new Mscrm.Views.IconHoverBehavior();
    this.$m_3 = new Mscrm.Views.IconHoverBehavior();
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (17,3)
    Mscrm.Views.CrmMoveControlsView.initializeBase(this, [ uiElement, listView ]);
    this.$l_3.disabled = Mscrm.Views.CrmMoveIcons.disabledDownArrowInfo.get_value();
    this.$l_3.enabled = Mscrm.Views.CrmMoveIcons.enabledDownArrowInfo.get_value();
    this.$l_3.hover = Mscrm.Views.CrmMoveIcons.hoverDownArrowInfo.get_value();
    this.$m_3.disabled = Mscrm.Views.CrmMoveIcons.disabledUpArrowInfo.get_value();
    this.$m_3.enabled = Mscrm.Views.CrmMoveIcons.enabledUpArrowInfo.get_value();
    this.$m_3.hover = Mscrm.Views.CrmMoveIcons.hoverUpArrowInfo.get_value();
    this.$l_3.attach(this.$6_2);
    this.$m_3.attach(this.$7_2);
    this.$k_3 = this.find('List-MoveCaption');
    this.$k_3.text(window.LOCID_PROCESS_MOVE);
    this.$6_2.data('caption', window.LOCID_PROCESS_MOVE_DOWN);
    this.$7_2.data('caption', window.LOCID_PROCESS_MOVE_UP);
    this.$M_3();
}
Mscrm.Views.CrmMoveControlsView.prototype = {
    
    switchDownButton: function Mscrm_Views_CrmMoveControlsView$switchDownButton(enable) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (40,3)
        Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype.switchDownButton.call(this, enable);
        this.$3P_3(this.$6_2, enable);
        this.$3Q_3(this.$6_2, this.$l_3, enable);
        this.$k_3.toggleClass('disabled', !(this.get_canMoveDown() || this.get_canMoveUp()));
    },
    
    switchUpButton: function Mscrm_Views_CrmMoveControlsView$switchUpButton(enable) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (48,3)
        Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype.switchUpButton.call(this, enable);
        this.$3P_3(this.$7_2, enable);
        this.$3Q_3(this.$7_2, this.$m_3, enable);
        this.$k_3.toggleClass('disabled', !(this.get_canMoveDown() || this.get_canMoveUp()));
    },
    
    $k_3: null,
    
    $3Q_3: function Mscrm_Views_CrmMoveControlsView$$3Q_3($p0, $p1, $p2) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (64,3)
        if ($p2) {
            $p0.removeClass('disabled');
            $p1.onEnable($p0);
        }
        else {
            $p0.addClass('disabled');
            $p1.onDisable($p0);
        }
    },
    
    $3P_3: function Mscrm_Views_CrmMoveControlsView$$3P_3($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (74,3)
        if ($p1) {
            $p0.removeAttr('disabled');
        }
        else {
            $p0.attr('disabled', 'disabled');
        }
    },
    
    $4i_3: function Mscrm_Views_CrmMoveControlsView$$4i_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (82,3)
        var $v_0 = $P_CRM($p0.currentTarget);
        if ($v_0.hasClass('disabled')) {
            return;
        }
        this.$k_3.text($v_0.data('caption'));
    },
    
    $4j_3: function Mscrm_Views_CrmMoveControlsView$$4j_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (90,3)
        this.$k_3.text(window.LOCID_PROCESS_MOVE);
    },
    
    $M_3: function Mscrm_Views_CrmMoveControlsView$$M_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (101,3)
        this.$6_2.mouseenter(this.$$d_$4i_3);
        this.$7_2.mouseenter(this.$$d_$4i_3);
        this.$6_2.mouseleave(this.$$d_$4j_3);
        this.$7_2.mouseleave(this.$$d_$4j_3);
    },
    
    $Q_3: function Mscrm_Views_CrmMoveControlsView$$Q_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (109,3)
        this.$6_2.unbind('mouseenter', this.$$d_$4i_3);
        this.$6_2.unbind('mouseleave', this.$$d_$4j_3);
        this.$7_2.unbind('mouseenter', this.$$d_$4i_3);
        this.$7_2.unbind('mouseleave', this.$$d_$4j_3);
    },
    
    actualDispose: function Mscrm_Views_CrmMoveControlsView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/CrmMoveControlsView.cs (118,3)
        this.$l_3.detach(this.$6_2);
        this.$m_3.detach(this.$7_2);
        this.$Q_3();
        Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype.actualDispose.call(this);
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Common.Views');

Mscrm.SocialInsights.Common.Views.ISupportFocus = function() {}
Mscrm.SocialInsights.Common.Views.ISupportFocus.registerInterface('Mscrm.SocialInsights.Common.Views.ISupportFocus');


Mscrm.SocialInsights.Common.Views.KeepFocusBehavior = function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior(target, firstFocusable, lastFocusable) {
    this.$$d_$4f_1 = Function.createDelegate(this, this.$4f_1);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (20,3)
    Mscrm.SocialInsights.Common.Views.KeepFocusBehavior.initializeBase(this);
    if (IsNull(target)) {
        throw Error.argumentNull('target');
    }
    if (IsNull(target)) {
        throw Error.argumentNull('firstFocusable');
    }
    if (IsNull(target)) {
        throw Error.argumentNull('lastFocusable');
    }
    this.$2G_1 = target;
    this.$q_1 = firstFocusable;
    this.$g_1 = lastFocusable;
    this.$M_1();
}
Mscrm.SocialInsights.Common.Views.KeepFocusBehavior.prototype = {
    $q_1: null,
    
    get_firstFocusable: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$get_firstFocusable() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (36,38)
        return this.$q_1;
    },
    
    set_firstFocusable: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$set_firstFocusable(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (36,43)
        this.$q_1 = value;
        return value;
    },
    
    $g_1: null,
    
    get_lastFocusable: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$get_lastFocusable() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (37,37)
        return this.$g_1;
    },
    
    set_lastFocusable: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$set_lastFocusable(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (37,42)
        this.$g_1 = value;
        return value;
    },
    
    $2G_1: null,
    
    $4f_1: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$$4f_1($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (41,3)
        var $v_0 = $p0.keyCode === 9;
        if (!$v_0) {
            return;
        }
        if ($p0.target === this.$q_1 && $p0.shiftKey) {
            Mscrm.InlineDialogUtility.overrideFocusOnTab(this.$g_1, $p0);
        }
        else if ($p0.target === this.$g_1 && !$p0.shiftKey) {
            Mscrm.InlineDialogUtility.overrideFocusOnTab(this.$q_1, $p0);
        }
    },
    
    $M_1: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$$M_1() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (57,3)
        $addHandler(this.$2G_1, 'keydown', this.$$d_$4f_1);
    },
    
    $Q_1: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$$Q_1() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (62,3)
        $removeHandler(this.$2G_1, 'keydown', this.$$d_$4f_1);
    },
    
    actualDispose: function Mscrm_SocialInsights_Common_Views_KeepFocusBehavior$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Common/Views/KeepFocusBehavior.cs (67,3)
        this.$Q_1();
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Configuration');

Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler = function Mscrm_SocialInsights_Configuration_AdvancedSettingsHandler() {
}
Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler.showAdvancedSettings = function Mscrm_SocialInsights_Configuration_AdvancedSettingsHandler$showAdvancedSettings() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/AdvancedSettingsHandler.cs (17,3)
    getInlineDialogArgumentsFromWizard();
    var $v_0 = window.inlineDialogArguments.passedArguments;
    if (IsNull($v_0)) {
        return;
    }
    $v_0.Field.SolutionUrl = Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl();
    var $v_1 = Mscrm.CrmUri.create('/Tools/FormEditor/Dialogs/SocialInsight.aspx?mode=' + $v_0.mode + '&datatype=iframe&editorType=dashboardEditor&scrolling=auto');
    var $v_2 = openStdDlg($v_1, $v_0, 470, 660, false);
    if (!IsNull($v_2)) {
        $v_0.Field = $v_2;
        window.inlineDialogArguments.callbackFunction.content = $v_2;
    }
}


Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler = function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler($p0) {
    this.$$d_$4B_3 = Function.createDelegate(this, this.$4B_3);
    this.$$d_$4C_3 = Function.createDelegate(this, this.$4C_3);
    this.$$d_$4A_3 = Function.createDelegate(this, this.$4A_3);
    this.$$d_$3x_3 = Function.createDelegate(this, this.$3x_3);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (29,3)
    Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.initializeBase(this, [ $p0 ]);
    this.$2W_3 = this.find('selectedCategory');
    this.$17_3 = this.find('topicCategorySelect');
    this.$1m_3 = this.find('topicCategoryPreview');
    this.$D_3 = this.find('errorDiv');
    this.$2Q_3 = $P_CRM('#topicCount');
    this.$W_3 = null;
    this.$1k_3 = {};
    this.$V_3 = Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault();
    var $v_0 = $P_CRM(document.body);
    $v_0.append(this.$V_3.get_uiElement());
    this.$V_3.show();
    this.$4S_3();
}
Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.run = function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$run() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (65,3)
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.skip = function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$skip() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (80,3)
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(3);
}
Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.prototype = {
    
    save: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$save() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (50,3)
        if (IsNull(this.$W_3)) {
            return false;
        }
        var $v_0 = this.$W_3.attr('value');
        if (isNullOrEmptyString($v_0)) {
            return false;
        }
        this.set_currentDataItemId($v_0);
        return true;
    },
    
    $2W_3: null,
    $17_3: null,
    $1m_3: null,
    $D_3: null,
    $V_3: null,
    $W_3: null,
    $2Q_3: null,
    $1k_3: null,
    
    $4C_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$4C_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (110,3)
        switch ($p0.which) {
            case 13:
                this.$J_3($p0.target);
                break;
            case 40:
                $P_CRM($p0.target).next().focus();
                break;
            case 38:
                $P_CRM($p0.target).prev().focus();
                break;
            default:
                return;
        }
        $p0.preventDefault();
        $p0.stopImmediatePropagation();
    },
    
    $4B_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$4B_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (138,3)
        this.$J_3($p0.target);
    },
    
    $J_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$J_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (143,3)
        this.$D_3.removeClass('errorVisible');
        if (!IsNull(this.$W_3)) {
            this.$W_3.removeClass('selected-category');
        }
        this.$W_3 = $P_CRM($p0);
        this.$W_3.addClass('selected-category');
        var $v_0 = this.$W_3.attr('value');
        this.$2W_3.val($v_0);
        this.$5E_3($v_0);
    },
    
    $5E_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$5E_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (170,3)
        this.$1m_3.empty();
        var $v_0 = this.$1k_3[$p0];
        if (IsNull($v_0.searchItems)) {
            this.$2w_3(0);
            return;
        }
        this.$2w_3($v_0.searchItems.length);
        for (var $$arr_2 = $v_0.searchItems, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            var $v_2 = $P_CRM('<li></li>');
            $v_2.text($v_1.name);
            this.$1m_3.append($v_2);
        }
    },
    
    $2w_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$2w_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (197,3)
        this.$2Q_3.text(String.format(window.LOCID_NETBREEZE_CONTAINS_TOPICS, $p0.toString()));
        WizardSetButtonEnabled($p0 > 0, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    $4S_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$4S_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (206,3)
        this.$V_3.show();
        var $v_0 = Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl();
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, $v_0, null).done(this.$$d_$3x_3).fail(this.$$d_$4A_3);
    },
    
    $3x_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$3x_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (221,3)
        this.$V_3.hide();
        this.$2k_3();
        var $v_0 = null;
        var $v_1 = $p0;
        for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_3 = $$arr_3[$$idx_5];
            var $v_4 = $P_CRM('<li></li>');
            $v_4.text($v_3.name);
            $v_4.attr('value', $v_3.id);
            $v_4.attr('tabindex', '0');
            $v_4.keydown(this.$$d_$4C_3);
            $v_4.click(this.$$d_$4B_3);
            this.$17_3.append($v_4);
            if (this.get_currentDataItemId() + '' === $v_3.id + '') {
                $v_0 = $v_4;
            }
            this.$1k_3[$v_3.id] = $v_3;
        }
        var $v_2 = this.get_currentDataItemType() === 2 && !IsNull(this.get_currentDataItemId()) && IsNull($v_0);
        $v_0 = $v_0 || this.$17_3.children().first();
        $v_0.click();
        var $$t_9 = this;
        window.setTimeout(function() {
            $v_0.focus();
        }, 0);
        if ($v_2) {
            this.$D_3.addClass('errorVisible');
        }
        WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    $4A_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$4A_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (272,3)
        this.$V_3.hide();
        Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze();
    },
    
    $2k_3: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$$2k_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (286,3)
        this.$17_3.find('li').unbind('click', this.$$d_$4B_3).unbind('keydown', this.$$d_$4C_3);
        this.$17_3.empty();
    },
    
    actualDispose: function Mscrm_SocialInsights_Configuration_SelectSearchTopicCategoryHandler$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/SelectSearchTopicCategoryHandler.cs (297,3)
        this.$2k_3();
        this.$V_3.get_uiElement().remove();
        this.$V_3.dispose();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Configuration.Models');

Mscrm.SocialInsights.Configuration.Models.NetBreezeDataItemType = function() {}
Mscrm.SocialInsights.Configuration.Models.NetBreezeDataItemType.prototype = {
    none: 0, 
    searchItem: 1, 
    itemClass: 2
}
Mscrm.SocialInsights.Configuration.Models.NetBreezeDataItemType.registerEnum('Mscrm.SocialInsights.Configuration.Models.NetBreezeDataItemType', false);


Mscrm.SocialInsights.Configuration.Models.InlineDialogArguments = function Mscrm_SocialInsights_Configuration_Models_InlineDialogArguments() {
}
Mscrm.SocialInsights.Configuration.Models.InlineDialogArguments.prototype = {
    Field: null,
    mode: null
}


Mscrm.SocialInsights.Configuration.Models.SocialInsightObj = function Mscrm_SocialInsights_Configuration_Models_SocialInsightObj() {
}
Mscrm.SocialInsights.Configuration.Models.SocialInsightObj.prototype = {
    Id: null,
    Labels: null,
    SolutionUrl: null
}


Mscrm.SocialInsights.Configuration.Models.Label = function Mscrm_SocialInsights_Configuration_Models_Label() {
}
Mscrm.SocialInsights.Configuration.Models.Label.prototype = {
    Description: null
}


Mscrm.SocialInsights.Configuration.Models.WidgetRestriction = function Mscrm_SocialInsights_Configuration_Models_WidgetRestriction() {
}


Type.registerNamespace('Mscrm.SocialInsights.Models');

Mscrm.SocialInsights.Models.AjaxCall = function Mscrm_SocialInsights_Models_AjaxCall() {
}
Mscrm.SocialInsights.Models.AjaxCall.prototype = {
    id: 0,
    ajax: null,
    result: null,
    error: null,
    errorCode: 0
}


Mscrm.SocialInsights.Models.PendingRequest = function Mscrm_SocialInsights_Models_PendingRequest() {
}
Mscrm.SocialInsights.Models.PendingRequest.prototype = {
    ajaxCall: null,
    deferred: null
}


Mscrm.SocialInsights.Models.NetBreezeEstimate = function Mscrm_SocialInsights_Models_NetBreezeEstimate() {
}
Mscrm.SocialInsights.Models.NetBreezeEstimate.prototype = {
    estimate: 0,
    valid: false,
    limit: 0,
    searchQueryId: null
}


Mscrm.SocialInsights.Models.NetBreezeLinks = function Mscrm_SocialInsights_Models_NetBreezeLinks() {
}
Mscrm.SocialInsights.Models.NetBreezeLinks.prototype = {
    rel: null,
    ref: null
}


Mscrm.SocialInsights.Models.Channel = function Mscrm_SocialInsights_Models_Channel() {
}
Mscrm.SocialInsights.Models.Channel.prototype = {
    name: null,
    id: null,
    parentId: null
}


Mscrm.SocialInsights.Models.SearchChannel = function Mscrm_SocialInsights_Models_SearchChannel() {
}
Mscrm.SocialInsights.Models.SearchChannel.prototype = {
    channel: null,
    searchChannelType: null,
    name: null,
    id: null
}


Mscrm.SocialInsights.Models.Inclusions = function Mscrm_SocialInsights_Models_Inclusions() {
}
Mscrm.SocialInsights.Models.Inclusions.prototype = {
    phrases: null,
    matchScope: null
}


Mscrm.SocialInsights.Models.Exclusions = function Mscrm_SocialInsights_Models_Exclusions() {
}
Mscrm.SocialInsights.Models.Exclusions.prototype = {
    phrases: null,
    matchScope: null
}


Mscrm.SocialInsights.Models.SearchQuery = function Mscrm_SocialInsights_Models_SearchQuery() {
}
Mscrm.SocialInsights.Models.SearchQuery.copy = function Mscrm_SocialInsights_Models_SearchQuery$copy(original) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Models/NetBreezeSearchItem.cs (81,3)
    var $v_0 = new Mscrm.SocialInsights.Models.SearchQuery();
    $v_0.searchChannels = original.searchChannels;
    $v_0.phrases = original.phrases;
    $v_0.inclusions = original.inclusions;
    $v_0.exclusions = original.exclusions;
    $v_0.languages = original.languages;
    $v_0.id = original.id;
    return $v_0;
}
Mscrm.SocialInsights.Models.SearchQuery.prototype = {
    searchChannels: null,
    phrases: null,
    inclusions: null,
    exclusions: null,
    languages: null,
    id: null
}


Mscrm.SocialInsights.Models.NetBreezeSearchItem = function Mscrm_SocialInsights_Models_NetBreezeSearchItem() {
}
Mscrm.SocialInsights.Models.NetBreezeSearchItem.copy = function Mscrm_SocialInsights_Models_NetBreezeSearchItem$copy(original) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Models/NetBreezeSearchItem.cs (113,3)
    var $v_0 = new Mscrm.SocialInsights.Models.NetBreezeSearchItem();
    $v_0.id = original.id;
    $v_0.name = original.name;
    $v_0.parentId = original.parentId;
    $v_0.searchQuerySet = new Array(original.searchQuerySet.length);
    for (var $v_1 = 0; $v_1 < $v_0.searchQuerySet.length; $v_1++) {
        $v_0.searchQuerySet[$v_1] = Mscrm.SocialInsights.Models.SearchQuery.copy(original.searchQuerySet[$v_1]);
    }
    return $v_0;
}
Mscrm.SocialInsights.Models.NetBreezeSearchItem.prototype = {
    searchQuerySet: null,
    name: null,
    id: null,
    parentId: null
}


Mscrm.SocialInsights.Models.NetBreezeWidget = function Mscrm_SocialInsights_Models_NetBreezeWidget() {
}
Mscrm.SocialInsights.Models.NetBreezeWidget.prototype = {
    key: null,
    title: null,
    description: null,
    information: null,
    type: null,
    size: null,
    links: null,
    restriction: null
}


Mscrm.SocialInsights.Models.SearchItemCategory = function Mscrm_SocialInsights_Models_SearchItemCategory() {
}
Mscrm.SocialInsights.Models.SearchItemCategory.prototype = {
    name: null,
    id: null,
    searchItems: null
}


Mscrm.SocialInsights.Models.WidgetType = function Mscrm_SocialInsights_Models_WidgetType(id, name, previewImage, description, restriction) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Models/WidgetType.cs (8,3)
    this.name = name;
    this.previewImage = previewImage;
    this.description = description;
    this.id = id;
    this.restriction = restriction;
}
Mscrm.SocialInsights.Models.WidgetType.prototype = {
    id: null,
    name: null,
    previewImage: null,
    description: null,
    restriction: null
}


Mscrm.SocialInsights.Models.NetBreezeDefaults = function Mscrm_SocialInsights_Models_NetBreezeDefaults() {
}
Mscrm.SocialInsights.Models.NetBreezeDefaults.prototype = {
    searchChannelDefaults: null,
    searchLanguageDefaults: null
}


Type.registerNamespace('Mscrm.SocialInsights.ViewModels');

Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel = function Mscrm_SocialInsights_ViewModels_SearchTopicItemViewModel(netBreezeSearchItem) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/SearchTopicItemViewModel.cs (23,3)
    this.$15_0 = netBreezeSearchItem;
    this.$13_0 = netBreezeSearchItem.name;
    this.$1K_0 = Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.$47(netBreezeSearchItem.searchQuerySet);
}
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.$47 = function Mscrm_SocialInsights_ViewModels_SearchTopicItemViewModel$$47($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/SearchTopicItemViewModel.cs (35,3)
    var $v_0 = [];
    for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        var $v_2 = $v_1.phrases;
        var $v_3 = $v_2.split(',');
        for (var $$arr_8 = $v_3, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
            var $v_4 = $$arr_8[$$idx_A];
            Array.add($v_0, $v_4);
            if ($v_0.length === 10) {
                return $v_0.join(', ');
            }
        }
    }
    return $v_0.join(', ');
}
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem = function Mscrm_SocialInsights_ViewModels_SearchTopicItemViewModel$getSearchItem(itemID) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/SearchTopicItemViewModel.cs (93,3)
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel, String);
    var $v_1 = Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemUrl(itemID);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, $v_1, null).done(function($p1_0) {
        var $v_2 = $p1_0;
        var $v_3 = new Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel($v_2);
        $v_0.resolve($v_3);
    }).fail(function($p1_0) {
        $v_0.reject($p1_0.error);
    });
    return $v_0.promise();
}
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItems = function Mscrm_SocialInsights_ViewModels_SearchTopicItemViewModel$getSearchItems() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/SearchTopicItemViewModel.cs (116,3)
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemsUrl(), null).done(function($p1_0) {
        var $v_1 = new Array(0);
        var $v_2 = $p1_0;
        for (var $$arr_4 = $v_2, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_3 = $$arr_4[$$idx_6];
            var $v_4 = new Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel($v_3);
            Array.add($v_1, $v_4);
        }
        $v_0.resolve($v_1);
    }).fail(function($p1_0) {
        $v_0.reject($p1_0.error);
    });
    return $v_0.promise();
}
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.prototype = {
    $13_0: null,
    $1K_0: null,
    $15_0: null,
    
    get_keywords: function Mscrm_SocialInsights_ViewModels_SearchTopicItemViewModel$get_keywords() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/SearchTopicItemViewModel.cs (64,4)
        return this.$1K_0;
    },
    
    get_name: function Mscrm_SocialInsights_ViewModels_SearchTopicItemViewModel$get_name() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/SearchTopicItemViewModel.cs (75,4)
        return this.$13_0;
    },
    
    get_netBreezeSearchItem: function Mscrm_SocialInsights_ViewModels_SearchTopicItemViewModel$get_netBreezeSearchItem() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/SearchTopicItemViewModel.cs (86,4)
        return this.$15_0;
    }
}


Mscrm.SocialInsights.ViewModels.CreateTopicViewModel = function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (96,3)
    this.$18_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, Object);
    this.$4o_0();
    this.$1M_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.SocialInsights.Models.NetBreezeDefaults, Object);
    this.$4q_0();
}
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.saveTopic = function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$saveTopic(topic) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (204,3)
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, String);
    var $v_1 = IsNull(topic.id);
    var $v_2 = Mscrm.SocialInsights.Models.NetBreezeSearchItem.copy(topic);
    $v_2.searchQuerySet[0].id = WizardGetProperty('apiVersion1_1searchqueryId');
    Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(($v_1) ? 1 : 2, ($v_1) ? Mscrm.SocialInsights.Runtime.Services.UrlService.getCreateOrEditSearchItemsUrl() : Mscrm.SocialInsights.Runtime.Services.UrlService.getEditSearchItemUrl(topic.id), JSON.stringify($v_2)).done(function($p1_0) {
        var $v_3 = $p1_0;
        if (isNullOrEmptyString($v_3.id)) {
            $v_0.reject($p1_0.toString());
        }
        else {
            $v_0.resolve($v_3.id);
        }
    }).fail(function($p1_0) {
        $v_0.reject($p1_0.error);
    });
    return $v_0;
}
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.prototype = {
    
    get_showEdit: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$get_showEdit() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (38,4)
        return !this.$H_0 || this.$H_0.searchQuerySet.length === 1;
    },
    
    $H_0: null,
    
    get_searchItem: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$get_searchItem() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (54,4)
        if (IsNull(this.$H_0)) {
            this.$H_0 = this.$3o_0();
        }
        return this.$H_0;
    },
    
    set_searchItem: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$set_searchItem(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (61,4)
        this.$H_0 = value;
        return value;
    },
    
    get_categories: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$get_categories() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (72,4)
        return this.$18_0.promise();
    },
    
    get_netBreezeDefaults: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$get_netBreezeDefaults() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (80,4)
        return this.$1M_0.promise();
    },
    
    $18_0: null,
    $1M_0: null,
    
    validateTopic: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$validateTopic() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (111,3)
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, String);
        var $v_1 = this.$H_0.searchQuerySet[0];
        var $v_2 = new Mscrm.SocialInsights.Models.SearchChannel();
        $v_2.id = '4';
        $v_2.name = 'Microblogs';
        $v_2.searchChannelType = 'STANDARD';
        var $v_3 = new Mscrm.SocialInsights.Models.Channel();
        $v_3.id = '18';
        $v_3.name = 'Microblogs';
        $v_3.parentId = '1';
        $v_3.param = 'Twitter';
        $v_2.channel = $v_3;
        $v_1.searchChannels = [ $v_2 ];
        $v_1.languages = [ 'en' ];
        $v_1.id = null;
        this.$H_0.searchQuerySet[0] = $v_1;
        var $$t_8 = this, $$t_9 = this;
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(1, Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchQueriesUrl(), JSON.stringify(this.$H_0.searchQuerySet[0])).done(function($p1_0) {
            var $v_4 = $p1_0;
            if (!IsNull($v_4.valid) && $v_4.valid) {
                $v_0.resolve($v_4.searchQueryId);
            }
            else {
                $v_0.reject('TopicTooBroad');
            }
        }).fail(function($p1_0) {
            if (IsNull($p1_0)) {
                $v_0.reject('NullEstimateResponse');
                return;
            }
            if (isNullOrEmptyString($p1_0.result)) {
                $v_0.reject($p1_0.error);
                return;
            }
            var $v_5 = JSON.parse($p1_0.result);
            if (IsNull($v_5)) {
                $v_0.reject($p1_0.error);
                return;
            }
            if (!$v_5.valid) {
                $v_0.reject('TopicTooBroad');
                return;
            }
            $v_0.reject($p1_0.error);
        });
        return $v_0;
    },
    
    $4o_0: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$$4o_0() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (239,3)
        var $$t_2 = this, $$t_3 = this;
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl(), null).done(function($p1_0) {
            $$t_2.$18_0.resolve($p1_0);
        }).fail(function($p1_0) {
            $$t_3.$18_0.reject($p1_0.error);
        });
    },
    
    $4q_0: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$$4q_0() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (257,3)
        var $$t_2 = this, $$t_3 = this;
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeDefaultsUrl(), null).done(function($p1_0) {
            $$t_2.$1M_0.resolve($p1_0);
        }).fail(function($p1_0) {
            $$t_3.$1M_0.reject($p1_0.error);
        });
    },
    
    $3o_0: function Mscrm_SocialInsights_ViewModels_CreateTopicViewModel$$3o_0() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/CreateTopicViewModel.cs (276,3)
        var $v_0 = new Mscrm.SocialInsights.Models.SearchQuery();
        $v_0.inclusions = new Mscrm.SocialInsights.Models.Inclusions();
        $v_0.exclusions = new Mscrm.SocialInsights.Models.Exclusions();
        var $v_1 = new Mscrm.SocialInsights.Models.NetBreezeSearchItem();
        $v_1.searchQuerySet = [ $v_0 ];
        return $v_1;
    }
}


Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel = function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (15,3)
    if (IsNull($p0)) {
        throw Error.argumentNull('widgetType');
    }
    this.$R_0 = $p0;
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.getWidgetTypes = function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$getWidgetTypes(isCategory) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (60,3)
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, Mscrm.SocialInsights.Runtime.Services.UrlService.getAllWidgetsUrl(), null).done(function($p1_0) {
        var $v_1 = $p1_0;
        var $v_2 = new Array(0);
        for (var $$arr_5 = $v_1, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_3 = $$arr_5[$$idx_7];
            if (isCategory && $v_3.restriction === 'SINGLE_SEARCH_ITEM') {
                continue;
            }
            var $v_4 = Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.$3p($v_3);
            $v_2[$v_2.length] = $v_4;
        }
        $v_0.resolve($v_2);
    }).fail(function($p1_0) {
        $v_0.reject($p1_0.error);
    });
    return $v_0.promise();
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.toControlParameters = function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$toControlParameters(types) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (99,3)
    if (IsNull(types)) {
        throw Error.argumentNull('types');
    }
    var $v_0 = new Sys.StringBuilder();
    for (var $v_1 = 0; $v_1 < types.length; $v_1++) {
        var $v_2 = types[$v_1];
        $v_0.append($v_2.get_id());
    }
    return $v_0.toString('-');
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.fromControlParameters = function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$fromControlParameters(currentSocialDataParameters, supportedTypes) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (119,3)
    var $v_0 = [];
    if (isNullOrEmptyString(currentSocialDataParameters)) {
        return $v_0;
    }
    var $v_1 = {};
    for (var $$arr_4 = supportedTypes, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_2 = $$arr_4[$$idx_6];
        $v_1[$v_2.get_id()] = $v_2;
    }
    for (var $$arr_8 = currentSocialDataParameters.split('-'), $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
        var $v_3 = $$arr_8[$$idx_A];
        var $v_4 = $v_1[$v_3];
        if (!IsNull($v_4)) {
            $v_0[$v_0.length] = $v_4;
        }
    }
    return $v_0;
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.hasUnsupportedWidgets = function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$hasUnsupportedWidgets(currentSocialDataParameters, supportedTypes) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (149,3)
    if (isNullOrEmptyString(currentSocialDataParameters)) {
        return false;
    }
    var $v_0 = {};
    for (var $$arr_3 = supportedTypes, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_1 = $$arr_3[$$idx_5];
        $v_0[$v_1.get_id()] = $v_1;
    }
    for (var $$arr_7 = currentSocialDataParameters.split('-'), $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
        var $v_2 = $$arr_7[$$idx_9];
        var $v_3 = $v_0[$v_2];
        if (IsNull($v_3)) {
            return true;
        }
    }
    return false;
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.$3p = function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$$3p($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (176,3)
    var $v_0 = null;
    for (var $$arr_2 = $p0.links, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        if ($v_1.rel === 'graphics') {
            $v_0 = $v_1.ref;
            break;
        }
    }
    return new Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel(new Mscrm.SocialInsights.Models.WidgetType($p0.key, $p0.title, $v_0, $p0.description, $p0.restriction));
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.prototype = {
    $R_0: null,
    
    get_id: function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$get_id() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (30,4)
        return this.$R_0.id;
    },
    
    setType: function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$setType(type) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (40,3)
        if (IsNull(type)) {
            throw Error.argumentNull('type');
        }
        this.$R_0 = type.$R_0;
    },
    
    get_name: function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$get_name() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (48,24)
        return this.$R_0.name;
    },
    
    get_previewImage: function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$get_previewImage() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (50,32)
        return this.$R_0.previewImage;
    },
    
    get_typeDescription: function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$get_typeDescription() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (52,35)
        return this.$R_0.description;
    },
    
    get_restriction: function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$get_restriction() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (54,31)
        return this.$R_0.restriction;
    },
    
    clone: function Mscrm_SocialInsights_ViewModels_WidgetTypeViewModel$clone() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/ViewModels/WidgetTypeViewModel.cs (200,3)
        return new Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel(this.$R_0);
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Configuration.Views');

Mscrm.SocialInsights.Configuration.Views.SocialInsightsWizardStartPage = function() {}
Mscrm.SocialInsights.Configuration.Views.SocialInsightsWizardStartPage.prototype = {
    defaultPage: 0, 
    chooseTopicTypePage: 1, 
    searchTopicPage: 2, 
    selectSearchTopicCategoryPage: 3, 
    visualizationPage: 4
}
Mscrm.SocialInsights.Configuration.Views.SocialInsightsWizardStartPage.registerEnum('Mscrm.SocialInsights.Configuration.Views.SocialInsightsWizardStartPage', false);


Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView = function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView($p0) {
    this.$$d_$3I_3 = Function.createDelegate(this, this.$3I_3);
    this.$$d_$3K_3 = Function.createDelegate(this, this.$3K_3);
    this.$$d_$2y_3 = Function.createDelegate(this, this.$2y_3);
    this.$$d_$4v_3 = Function.createDelegate(this, this.$4v_3);
    this.$$d_$3y_3 = Function.createDelegate(this, this.$3y_3);
    this.$$d_$49_3 = Function.createDelegate(this, this.$49_3);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (23,3)
    Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.initializeBase(this, [ $p0 ]);
    this.$2_3 = Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault();
    this.$5B_3();
    this.$e_3 = $P_CRM('#selectATopic');
    this.$w_3 = $P_CRM('#createNewTopic');
    this.$2D_3 = $P_CRM('#selectATopicSection');
    this.$v_3 = $P_CRM('#createNewTopicSection');
    this.$1B_3 = $P_CRM('#createLabel');
    this.$1D_3 = $P_CRM('#editLabel');
    this.$D_3 = $P_CRM('.errorDiv');
    this.$T_3 = Mscrm.SocialInsights.Views.CreateTopicView.setupCreateTopicView(this.$v_3);
    this.$4T_3();
    this.$M_3();
    this.$55_3();
    $P_CRM('#sectionsContainer').show();
}
Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.run = function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$run() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (131,3)
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.skip = function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$skip() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (146,3)
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(2);
}
Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.prototype = {
    
    $55_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$55_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (54,3)
        if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem()) {
            this.$1D_3.show();
        }
        else {
            this.$1B_3.show();
        }
        if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor()) {
            this.$w_3.prop('checked', true);
            this.$3I_3(null);
        }
        else {
            this.$e_3.prop('checked', true);
        }
    },
    
    wizardNavigate: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$wizardNavigate(navigationTarget) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (83,3)
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wasShowingTopicEditor(this.get_$3r_3());
        if (navigationTarget === _WizardNavigateEnum.NEXT) {
            this.save();
            if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor()) {
                this.$T_3.validateTopic().done(this.$$d_$49_3);
                return;
            }
        }
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.wizardNavigate.call(this, navigationTarget);
    },
    
    save: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$save() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (106,3)
        if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor() && (!IsNull(this.get_editSearchItemAllowed()) && this.get_editSearchItemAllowed())) {
            this.$T_3.storeValuesInPropertyBag();
        }
        return this.$38_3();
    },
    
    $38_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$38_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (116,3)
        if (IsNull(this.$A_3)) {
            return false;
        }
        var $v_0 = this.$A_3.getSelectedItem();
        this.set_currentDataItemId((IsNull($v_0)) ? null : $v_0.$15_0.id);
        return !IsNull(this.get_currentDataItemId());
    },
    
    $2_3: null,
    $T_3: null,
    $e_3: null,
    $w_3: null,
    $2D_3: null,
    $v_3: null,
    $D_3: null,
    $1B_3: null,
    $1D_3: null,
    $A_3: null,
    
    get_$3r_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$get_$3r_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (171,31)
        return this.$v_3.is(':visible');
    },
    
    $3y_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$3y_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (173,3)
        var $v_0 = $P_CRM('#topicsList');
        this.$A_3 = new Mscrm.SocialInsights.Views.SearchTopicItemsListView($v_0, $p0);
        this.$A_3.initialize();
        var $$t_2 = this;
        window.setTimeout(function() {
            $v_0.focus();
        }, 0);
        this.$42_3();
        if (!this.$A_3.select('' + this.get_currentDataItemId())) {
            if (!IsNull(this.get_currentDataItemId())) {
                this.$D_3.addClass('searchItemNotFoundVisible');
                this.$1D_3.hide();
                this.$1B_3.show();
            }
            this.$A_3.selectFirstItem();
        }
        this.$2v_3();
    },
    
    $2v_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$2v_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (201,3)
        var $v_0 = !IsNull(this.$A_3) && !IsNull(this.$A_3.getSelectedItem());
        WizardSetButtonEnabled($v_0, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    $4v_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$4v_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (207,3)
        var $v_0 = $P_CRM('#topicsList');
        this.$A_3 = new Mscrm.SocialInsights.Views.SearchTopicItemsListView($v_0, []);
        this.$A_3.initialize();
        Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze();
    },
    
    $49_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$49_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (215,3)
        WizardSetProperty('apiVersion1_1searchqueryId', $p0);
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.wizardNavigate.call(this, _WizardNavigateEnum.NEXT);
    },
    
    $42_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$42_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (221,3)
        this.$e_3.prop('disabled', false);
        this.$w_3.prop('disabled', false);
        this.$e_3.focus();
    },
    
    $3K_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$3K_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (229,3)
        this.$D_3.removeClass('topicTooBroadVisible');
        this.$T_3.storeValuesInPropertyBag();
        this.$2D_3.show();
        this.$v_3.hide();
        if (this.get_currentDataItemType() === 1) {
            if (!IsNull(this.$A_3)) {
                this.$A_3.select('' + this.get_currentDataItemId());
            }
        }
        this.$2v_3();
    },
    
    $3I_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$3I_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (248,3)
        this.$D_3.removeClass('searchItemNotFoundVisible');
        this.$38_3();
        this.$2D_3.hide();
        this.$v_3.show();
        if (!this.$T_3.$22_2) {
            var $$t_2 = this;
            this.$T_3.initialize((Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem()) ? this.get_baseConfiguration().SocialDataItemId : null).fail(function($p1_0) {
                $$t_2.$3K_3(null);
                $$t_2.$D_3.addClass('searchItemNotFoundVisible');
                $$t_2.$e_3.prop('checked', true);
                $$t_2.$1D_3.hide();
                $$t_2.$1B_3.show();
                $$t_2.$2y_3(null);
            });
        }
        this.$T_3.handleNextForCreate(null);
    },
    
    $5B_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$5B_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (273,3)
        var $v_0 = $P_CRM(document.body);
        $v_0.append(this.$2_3.get_uiElement());
        this.$2_3.show();
    },
    
    $2y_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$2y_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (280,3)
        if (IsNull(this.$2_3)) {
            return;
        }
        this.$2_3.hide();
        this.$2_3.get_uiElement().remove();
        this.$2_3.dispose();
        this.$2_3 = null;
    },
    
    $4T_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$4T_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (292,3)
        Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItems().done(this.$$d_$3y_3).fail(this.$$d_$4v_3).always(this.$$d_$2y_3);
    },
    
    $M_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$M_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (302,3)
        this.$e_3.click(this.$$d_$3K_3);
        this.$w_3.click(this.$$d_$3I_3);
    },
    
    $Q_3: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$$Q_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (308,3)
        this.$e_3.unbind('click', this.$$d_$3K_3);
        this.$w_3.unbind('click', this.$$d_$3I_3);
    },
    
    actualDispose: function Mscrm_SocialInsights_Configuration_Views_SearchTopicPageView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/SearchTopicPageView.cs (314,3)
        this.$Q_3();
        if (!IsNull(this.$2_3)) {
            this.$2_3.dispose();
        }
        if (!IsNull(this.$A_3)) {
            this.$A_3.dispose();
        }
        this.$T_3.dispose();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView = function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView(ui) {
    this.$$d_$3t_3 = Function.createDelegate(this, this.$3t_3);
    this.$$d_$4x_3 = Function.createDelegate(this, this.$4x_3);
    this.$$d_$4Z_3 = Function.createDelegate(this, this.$4Z_3);
    this.$$d_$4k_3 = Function.createDelegate(this, this.$4k_3);
    this.$$d_$4R_3 = Function.createDelegate(this, this.$4R_3);
    this.$$d_$3e_3 = Function.createDelegate(this, this.$3e_3);
    this.$$d_$5H_3 = Function.createDelegate(this, this.$5H_3);
    this.$$d_$2z_3 = Function.createDelegate(this, this.$2z_3);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (26,3)
    Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.initializeBase(this, [ ui ]);
    var $v_0 = this.get_currentDataItemType() === 2;
    this.$F_3 = Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$3s($v_0);
    this.$L_3 = Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$3n();
    Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.getWidgetTypes($v_0).done(this.$$d_$2z_3).fail(this.$$d_$5H_3);
    if ($v_0) {
        var $v_1 = Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl();
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, $v_1, null).done(this.$$d_$3e_3);
    }
    else {
        if (!Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor()) {
            Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem(this.get_currentDataItemId()).done(this.$$d_$4R_3);
        }
        else if (Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.get_hasSkippedOtherPages() || (!IsNull(this.get_editSearchItemAllowed()) && !this.get_editSearchItemAllowed())) {
            Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem(this.get_baseConfiguration().SocialDataItemId).done(this.$$d_$4R_3);
            this.set_currentDataItemId(this.get_baseConfiguration().SocialDataItemId);
        }
        else {
            this.$2X_3((IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem().name)) ? '' : Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem().name);
        }
    }
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$4w = function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$4w($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (151,3)
    getInlineDialogArgumentsFromWizard();
    var $v_0 = window.inlineDialogArguments.passedArguments;
    if (IsNull($v_0) || IsNull($v_0.Field)) {
        return;
    }
    var $v_1 = $v_0.Field.Id;
    if ($v_1.substr(0, 7) !== 'IFRAME_') {
        $v_1 = 'IFRAME_' + $v_1;
        $v_0.Field.Id = $v_1;
    }
    $p0.ControlId = $v_1;
    if (!IsNull($v_0.Field.Labels[0]) && IsNull($v_0.Field.Labels[0].Description)) {
        $v_0.Field.Labels[0].Description = $v_0.Field.Id;
    }
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.run = function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$run() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (183,3)
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.skip = function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$skip() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (196,3)
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(4);
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.get_hasSkippedOtherPages = function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$get_hasSkippedOtherPages() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (208,4)
    if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow() === 4 && IsNull(WizardGetProperty('wasShowingTopicEditor'))) {
        return true;
    }
    return false;
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$3s = function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$3s($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (308,3)
    var $v_0 = new Mscrm.SocialInsights.Views.WidgetListEditorStrings();
    $v_0.getFromWindowLocalizationVariables();
    var $v_1 = Mscrm.SocialInsights.Views.WidgetListEditorView.createDefaultLayout($p0, $v_0);
    $P_CRM('#socialInsightsEditorControl').append($v_1.get_uiElement());
    return $v_1;
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$3n = function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$3n() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (318,3)
    var $v_0 = Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault();
    $P_CRM(document.body).append($v_0.get_uiElement());
    $v_0.show();
    return $v_0;
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.prototype = {
    
    save: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$save() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (70,3)
        var $v_0 = this.$F_3.get_viewModel();
        this.set_currentSocialDataParameters(Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.toControlParameters($v_0));
        return true;
    },
    
    saveAndClose: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$saveAndClose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (82,3)
        this.$F_3.hideVisualNotFoundMessage();
        this.$L_3.setAction(window.LOCID_NETBREEZE_SAVING_WIDGETS);
        this.$L_3.show();
        if (!Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.get_hasSkippedOtherPages() && Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor() && this.get_currentDataItemType() === 1 && (!IsNull(this.get_editSearchItemAllowed()) && this.get_editSearchItemAllowed())) {
            Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.saveTopic(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem()).done(this.$$d_$4k_3).fail(this.$$d_$4Z_3);
        }
        else {
            this.$37_3();
        }
    },
    
    $4k_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$4k_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (110,3)
        this.set_currentDataItemId($p0);
        this.$37_3();
    },
    
    $37_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$37_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (119,3)
        this.$F_3.hideVisualNotFoundMessage();
        this.save();
        this.$P_3 = Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.cloneSocialInsightsConfiguration(this.get_baseConfiguration());
        this.$P_3.SocialDataItemType = this.get_currentDataItemType();
        this.$P_3.SocialDataItemId = this.get_currentDataItemId();
        this.$P_3.SocialDataParameters = this.get_currentSocialDataParameters();
        if (!this.get_launchedFromRuntimeControl()) {
            Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$4w(this.$P_3);
        }
        if (this.$P_3.FormId === '00000000-0000-0000-0000-000000000000') {
            saveForFuture(this.$P_3);
        }
        else {
            var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
            $v_0.createOrUpdate(this.$P_3).done(this.$$d_$4x_3).fail(this.$$d_$3t_3);
        }
    },
    
    $F_3: null,
    $L_3: null,
    $P_3: null,
    
    $3e_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$3e_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (224,3)
        var $v_0 = $p0;
        for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($v_1.id + '' === this.get_currentDataItemId() + '') {
                this.$2X_3($v_1.name);
                return;
            }
        }
    },
    
    $4R_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$4R_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (238,3)
        this.$2X_3($p0.$13_0);
    },
    
    $2X_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$2X_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (243,3)
        var $v_0 = this.$F_3.find('WidgetListEditor-Topic');
        $v_0.text($p0);
        $v_0.attr('title', $p0);
    },
    
    $2z_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$2z_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (251,3)
        this.$F_3.set_supportedTypes($p0);
        this.$F_3.initialize();
        var $v_0 = Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.fromControlParameters(this.get_currentSocialDataParameters(), $p0);
        if (!$v_0.length && $p0.length > 0) {
            $v_0[0] = $p0[0];
        }
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            this.$F_3.add($v_0[$v_1]);
        }
        this.$F_3.get_uiElement().focus();
        this.$L_3.hide();
        if (Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.hasUnsupportedWidgets(this.get_currentSocialDataParameters(), $p0)) {
            this.$F_3.displayVisualNotFoundMessage();
        }
    },
    
    $5H_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$5H_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (272,3)
        this.$F_3.get_uiElement().focus();
        this.$L_3.hide();
        this.$2z_3(new Array(0));
        Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze();
    },
    
    $4x_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$4x_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (281,3)
        this.$L_3.hide();
        this.$L_3.get_uiElement().remove();
        this.$L_3.dispose();
        completeClose(this.get_launchedFromRuntimeControl(),this.$P_3);
    },
    
    $4Z_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$4Z_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (290,3)
        this.$3L_3();
        Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze();
    },
    
    $3t_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$3t_3($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (296,3)
        this.$3L_3();
    },
    
    $3L_3: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$$3L_3() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (302,3)
        this.$F_3.get_uiElement().focus();
        this.$L_3.hide();
    },
    
    actualDispose: function Mscrm_SocialInsights_Configuration_Views_VisualizationsPageView$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/VisualizationsPageView.cs (327,3)
        this.$F_3.dispose();
        this.$L_3.dispose();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Configuration.Views.WizardPageHandler = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler(ui) {
    this.$$d_$4a_2 = Function.createDelegate(this, this.$4a_2);
    this.$$d_wizardNavigate = Function.createDelegate(this, this.wizardNavigate);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (20,3)
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.initializeBase(this, [ ui ]);
    this.$4P_2();
    if (!IsNull((WizardGetProperty('baseConfiguration')).RegardingObjectId)) {
        $P_CRM('#buttonSettings').hide();
    }
    this.$4Q_2();
    var $v_0 = ui.find('body');
    var $v_1 = $P_CRM('#buttonNext');
    this.keepFocus = new Mscrm.SocialInsights.Common.Views.KeepFocusBehavior(ui[0], $v_0[0], $v_1[0]);
    var $$t_3 = this;
    window.setTimeout(function() {
        window.focus();
        $v_0.focus();
    }, 0);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$runChild(pageHandler) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (50,3)
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    if (IsNull(pageHandler)) {
        throw Error.argumentNull('pageHandler');
    }
    if (Mscrm.CrmBrowser.get_currentBrowser().get_isIE8()) {
        pageHandler.get_uiElement().find('body').addClass('ie8');
    }
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler = pageHandler;
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$3X();
    $P_CRM(window).unload(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2F);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$shouldSkipPage(currentPage) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (69,3)
    return !(!Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow() || Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow() === currentPage);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_wizardPageToShow() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (188,4)
    return WizardGetProperty('wizardPageToShow');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wizardPageToShow = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_wizardPageToShow(value) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (197,4)
    WizardSetProperty('wizardPageToShow', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_editExistingSearchItem() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (210,4)
    return WizardGetProperty('editExistingSearchItem');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_editExistingSearchItem = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_editExistingSearchItem(value) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (214,4)
    WizardSetProperty('editExistingSearchItem', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_wasShowingTopicEditor() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (228,4)
    var $v_0 = WizardGetProperty('wasShowingTopicEditor');
    if (IsNull($v_0)) {
        $v_0 = Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem();
    }
    return $v_0;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wasShowingTopicEditor = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_wasShowingTopicEditor(value) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (238,4)
    WizardSetProperty('wasShowingTopicEditor', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_proposedSearchItem() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (261,4)
    return WizardGetProperty('proposedSearchItem');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.cloneSocialInsightsConfiguration = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$cloneSocialInsightsConfiguration(config) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (282,3)
    if (IsNull(config)) {
        return config;
    }
    var $v_0 = new Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration();
    $v_0.ControlId = config.ControlId;
    $v_0.FormId = config.FormId;
    $v_0.FormTypeCode = config.FormTypeCode;
    $v_0.RegardingObjectId = config.RegardingObjectId;
    $v_0.RegardingObjectTypeCode = config.RegardingObjectTypeCode;
    $v_0.SocialDataItemId = config.SocialDataItemId;
    $v_0.SocialDataItemType = config.SocialDataItemType;
    $v_0.SocialDataParameters = config.SocialDataParameters;
    $v_0.SocialInsightsConfigurationId = config.SocialInsightsConfigurationId;
    return $v_0;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2F = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$2F($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (380,3)
    $P_CRM(window).unbind('unload', Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2F);
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler.dispose();
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler = null;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$3X = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$3X() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (478,3)
    if (window.parent.parent.$P_CRM('#InlineDialog').height() !== Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_wizardHeight()) {
        return;
    }
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2h(1000, 50);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2h = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$2h($p0, $p1) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (489,3)
    if ($p0 <= 0) {
        return;
    }
    $p0--;
    if ($P_CRM('#wizardStagesContainer').height() > 0) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$56($P_CRM('#wizardStagesContainer').height());
    }
    else {
        window.setTimeout(function() {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2h($p0, $p1);
        }, $p1);
    }
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$56 = function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$56($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (506,3)
    var $v_0 = Mscrm.Utilities.parseInt($P_CRM('.wizardStageText').css('line-height'));
    var $v_1 = window.parent.parent.$P_CRM('#InlineDialog').height();
    var $v_2 = Math.round(($p0 / $v_0));
    var $v_3 = ($v_2 - 2) * $v_0;
    var $v_4 = Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_wizardHeight() + $v_3;
    if ($v_2 > 2 && $v_1 !== $v_4) {
        window.parent.parent.$P_CRM('#InlineDialog').height($v_4);
        window.parent.parent.$P_CRM('#InlineDialog_Iframe').height($v_4);
    }
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype = {
    
    get_baseConfiguration: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_baseConfiguration() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (81,4)
        return WizardGetProperty('baseConfiguration');
    },
    
    set_baseConfiguration: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_baseConfiguration(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (85,4)
        WizardSetProperty('baseConfiguration', value);
        return value;
    },
    
    get_currentDataItemType: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_currentDataItemType() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (98,4)
        var $v_0 = WizardGetProperty('socialDataItemType');
        if (!IsNull($v_0)) {
            return $v_0;
        }
        return this.get_baseConfiguration().SocialDataItemType;
    },
    
    set_currentDataItemType: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_currentDataItemType(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (107,4)
        WizardSetProperty('socialDataItemType', value);
        return value;
    },
    
    get_currentDataItemId: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_currentDataItemId() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (121,4)
        var $v_0 = WizardGetProperty('currentDataItemIds');
        if (IsNull($v_0)) {
            $v_0 = {};
        }
        var $v_1 = $v_0[Mscrm.SocialInsights.Configuration.Models.NetBreezeDataItemType.toString(this.get_currentDataItemType())];
        if (!IsNull($v_1)) {
            return $v_1;
        }
        else if (this.get_baseConfiguration().SocialDataItemType === this.get_currentDataItemType()) {
            return this.get_baseConfiguration().SocialDataItemId;
        }
        return null;
    },
    
    set_currentDataItemId: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_currentDataItemId(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (144,4)
        var $v_0 = WizardGetProperty('currentDataItemIds');
        if (IsNull($v_0)) {
            $v_0 = {};
        }
        $v_0[Mscrm.SocialInsights.Configuration.Models.NetBreezeDataItemType.toString(this.get_currentDataItemType())] = value;
        WizardSetProperty('currentDataItemIds', $v_0);
        return value;
    },
    
    get_currentSocialDataParameters: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_currentSocialDataParameters() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (168,4)
        var $v_0 = WizardGetProperty('socialDataParameters');
        if (!IsNull($v_0)) {
            return $v_0;
        }
        return this.get_baseConfiguration().SocialDataParameters;
    },
    
    set_currentSocialDataParameters: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_currentSocialDataParameters(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (177,4)
        WizardSetProperty('socialDataParameters', value);
        return value;
    },
    
    get_editSearchItemAllowed: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_editSearchItemAllowed() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (250,4)
        return WizardGetProperty('editSearchItemAllowed');
    },
    
    get_launchedFromRuntimeControl: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$get_launchedFromRuntimeControl() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (272,4)
        return WizardGetProperty('launchedFromRuntimeControl');
    },
    
    set_launchedFromRuntimeControl: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$set_launchedFromRuntimeControl(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (277,4)
        WizardSetProperty('launchedFromRuntimeControl', value);
        return value;
    },
    
    wizardNavigate: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$wizardNavigate(navigationTarget) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (311,3)
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wizardPageToShow(0);
        if (navigationTarget === _WizardNavigateEnum.CANCEL) {
            this.$4K_2();
            return;
        }
        if (navigationTarget === _WizardNavigateEnum.BACK) {
            this.save();
        }
        this.originalWizardNavigate(navigationTarget);
    },
    
    keepFocus: null,
    
    $4K_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$4K_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (336,3)
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_cancelwizard.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_CancelWizard_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_CancelWizard_Description';
        $v_0.get_query()['resource_body1'] = 'Dialog_CancelWizard_Body1';
        var $v_1 = new Mscrm.CrmDialog($v_0, null, 500, 210, null);
        var $v_2 = Mscrm.Utilities.createCallbackFunctionObject('HandleWizardExitResponse', this, null, false);
        $v_1.setCallbackReference($v_2);
        $v_1.show();
    },
    
    HandleWizardExitResponse: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$HandleWizardExitResponse(result) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (350,3)
        if (!IsNull(result) && result) {
            this.originalWizardNavigate(_WizardNavigateEnum.CANCEL);
        }
    },
    
    originalWizardNavigate: null,
    
    $4Q_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$4Q_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (360,3)
        if (!IsNull(this.originalWizardNavigate)) {
            throw Error.invalidOperation();
        }
        this.originalWizardNavigate = WizardNavigate;
        window.WizardNavigate = this.$$d_wizardNavigate;
    },
    
    $5D_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$5D_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (372,3)
        if (IsNull(this.originalWizardNavigate)) {
            throw Error.invalidOperation();
        }
        window.WizardNavigate = this.originalWizardNavigate;
    },
    
    $4P_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$4P_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (387,3)
        getInlineDialogArgumentsFromWizard();
        this.$4M_2();
        this.$4O_2();
        this.$4F_2();
    },
    
    $4F_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$4F_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (396,3)
        if (this.get_launchedFromRuntimeControl() && this.get_baseConfiguration().SocialDataItemType && isNullOrEmptyString(this.get_baseConfiguration().SocialInsightsConfigurationId)) {
            this.$36_2();
        }
    },
    
    $4O_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$4O_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (409,3)
        if (IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow())) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wizardPageToShow(window.inlineDialogArguments.passedArguments.wizardPageToShow);
        }
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_editExistingSearchItem((this.get_baseConfiguration().SocialDataItemType === 1));
        this.set_launchedFromRuntimeControl(window.inlineDialogArguments.passedArguments.launchedFromRuntimeControl);
    },
    
    $4M_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$4M_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (424,3)
        if (IsNull(this.get_baseConfiguration())) {
            this.set_baseConfiguration(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.cloneSocialInsightsConfiguration(window.inlineDialogArguments.passedArguments.socialInsightsConfiguration));
            if (IsNull(this.get_baseConfiguration())) {
                this.set_baseConfiguration(new Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration());
                this.get_baseConfiguration().FormId = window.inlineDialogArguments.passedArguments.FormID;
                this.get_baseConfiguration().FormTypeCode = window.inlineDialogArguments.passedArguments.FormType;
                this.get_baseConfiguration().ControlId = window.inlineDialogArguments.callbackFunction.content.Id;
            }
        }
    },
    
    $36_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$36_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (451,3)
        return new Mscrm.SocialInsights.SocialInsightsConfigurationService().retrieve(this.get_baseConfiguration()).done(this.$$d_$4a_2);
    },
    
    $4a_2: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$$4a_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (464,3)
        if (!IsNull($p0)) {
            this.set_baseConfiguration($p0);
        }
    },
    
    actualDispose: function Mscrm_SocialInsights_Configuration_Views_WizardPageHandler$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Configuration/Views/WizardPageHandler.cs (522,3)
        this.keepFocus.dispose();
        this.$5D_2();
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Provisioning');

Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler = function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler($p0) {
    this.$$d_$3h_2 = Function.createDelegate(this, this.$3h_2);
    this.$$d_$3Y_2 = Function.createDelegate(this, this.$3Y_2);
    this.$$d_$3j_2 = Function.createDelegate(this, this.$3j_2);
    this.$$d_$39_2 = Function.createDelegate(this, this.$39_2);
    this.$$d_$4t_2 = Function.createDelegate(this, this.$4t_2);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (14,3)
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.initializeBase(this, [ $p0 ]);
    this.$1g_2 = $p0.find('#acceptDisclaimer');
    this.$1j_2 = $p0.find('#close');
    this.$1s_2 = $p0.find('#Disclaimer');
    this.$23_2 = $p0.find('#InstanceSelection');
    if (!this.$1s_2.length) {
        this.$23_2.show();
    }
    this.$O_2 = $p0.find('#NetbreezeInstance');
    this.$s_2 = $p0.find('#applyInstance');
    this.$16_2 = $p0.find('#resetNetbreeze');
    this.$2C_2 = $p0.find('#resetStatusMessageSucess');
    this.$2B_2 = $p0.find('#resetStatusMessageFailure');
    this.$1r_2 = $p0.find('#SocialInsightsInstance');
    this.$2E_2 = $p0.find('#SolutionUnavailable');
    this.$M_2();
    this.$4n_2(this.get_$x_2());
    var $$t_1 = this;
    window.setTimeout(function() {
        $$t_1.$O_2.focus();
    }, 0);
}
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.run = function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$run() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (43,3)
    if (!IsNull(Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1H)) {
        throw Error.invalidOperation();
    }
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1H = new Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler($P_CRM(document));
    $P_CRM(window).unload(Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$2F);
}
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$2F = function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$2F($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (203,3)
    $P_CRM(window).unbind('unload', Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$2F);
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1H.dispose();
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1H = null;
}
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.prototype = {
    $1g_2: null,
    $1j_2: null,
    $1s_2: null,
    $23_2: null,
    $O_2: null,
    $s_2: null,
    $16_2: null,
    $2C_2: null,
    $2B_2: null,
    $1r_2: null,
    $2E_2: null,
    
    get_$x_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$get_$x_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (71,4)
        return this.$1r_2.attr('value');
    },
    
    set_$x_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$set_$x_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (72,4)
        this.$1r_2.attr('value', $p0);
        return $p0;
    },
    
    $4t_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$4t_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (75,3)
        this.$2x_2();
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_socialinsightsresetalldata.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_Reset_Insight_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_Reset_Insight_Description';
        $v_0.get_query()['resource_body1'] = 'Dialog_Reset_Insight_Body1';
        $v_0.get_query()['resource_body2'] = 'Dialog_Reset_Insight_Body2';
        var $v_1 = new Mscrm.CrmDialog($v_0, null, Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth, Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight, null);
        var $v_2 = Mscrm.Utilities.createCallbackFunctionObject('HandleResetAllSocialInsightsDataConfirmation', this, null, false);
        $v_1.setCallbackReference($v_2);
        $v_1.show();
    },
    
    $3w_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$3w_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (91,3)
        var $v_0 = ($p0) ? this.$2C_2 : this.$2B_2;
        $v_0.show();
        var $$t_2 = this;
        window.setTimeout(function() {
            $v_0.focus();
        }, 0);
    },
    
    $2x_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$2x_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (98,3)
        this.$2C_2.hide();
        this.$2B_2.hide();
    },
    
    HandleResetAllSocialInsightsDataConfirmation: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$HandleResetAllSocialInsightsDataConfirmation(result) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (104,3)
        if (!IsNull(result) && result) {
            var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
            this.$3w_2($v_0.resetAllSocialInsightsData());
        }
    },
    
    $39_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$39_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (114,3)
        var $v_0 = this.$O_2.val();
        var $v_1 = $v_0 === this.get_$x_2() || (isNullOrEmptyString(this.get_$x_2()) && isNullOrEmptyString($v_0));
        this.$s_2.prop('disabled', $v_1);
        this.$2t_2();
    },
    
    $3j_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$3j_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (125,3)
        this.$2x_2();
        var $v_0 = this.$O_2.val();
        if (!isNullOrEmptyString(this.get_$x_2()) && !isNullOrEmptyString($v_0)) {
            var $v_1 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_socialinsightsresetalldata.aspx');
            $v_1.get_query()['resource_title'] = 'Dialog_Change_Insight_Instance_Title';
            $v_1.get_query()['resource_description'] = 'Dialog_Change_Insight_Instance_Description';
            $v_1.get_query()['resource_body1'] = 'Dialog_Change_Insight_Instance_Body1';
            $v_1.get_query()['resource_body2'] = 'Dialog_Change_Insight_Instance_Body2';
            var $v_2 = new Mscrm.CrmDialog($v_1, null, Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth, Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight, null);
            var $v_3 = Mscrm.Utilities.createCallbackFunctionObject('ApplyNewNetBreezeInstance', this, null, false);
            $v_2.setCallbackReference($v_3);
            $v_2.show();
        }
        else {
            this.ApplyNewNetBreezeInstance(true);
        }
    },
    
    ApplyNewNetBreezeInstance: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$ApplyNewNetBreezeInstance($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (154,3)
        if (IsNull($p0) || !$p0) {
            return;
        }
        var $v_0 = this.$O_2.val();
        var $v_1 = Mscrm.SocialInsights.Shared.SocialInsightsWebService.switchInstance($v_0);
        this.$5I_2($v_1);
        var $$t_3 = this;
        $v_1.done(function() {
            $$t_3.set_$x_2($v_0);
            $$t_3.$39_2(null);
            $$t_3.$16_2.prop('disabled', isNullOrEmptyString($$t_3.get_$x_2()));
        });
    },
    
    $3Y_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$3Y_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (171,3)
        this.$1s_2.hide();
        var $v_0 = Mscrm.SocialInsights.Shared.SocialInsightsWebService.acceptTerms();
        this.$2d_2($v_0);
        var $$t_2 = this;
        $v_0.done(function() {
            $$t_2.$23_2.show();
        });
    },
    
    $5I_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$5I_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (180,3)
        this.$2d_2($p0);
        this.$s_2.prop('disabled', true);
        this.$16_2.prop('disabled', true);
    },
    
    $2d_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$2d_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (187,3)
        var $$t_1 = this;
        $p0.fail(function() {
            $$t_1.$57_2($p0);
        });
    },
    
    $57_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$57_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (192,3)
    },
    
    $3h_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$3h_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (198,3)
        window.history.back();
    },
    
    $4n_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$4n_2($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (210,3)
        if (isNullOrEmptyString($p0)) {
            return;
        }
        var $$t_4 = this;
        this.$O_2.find('option').each(function($p1_0, $p1_1) {
            var $v_0 = $P_CRM($p1_1);
            if ($v_0.attr('value') === $p0) {
                $v_0.attr('selected', 'true');
                return false;
            }
            return true;
        });
        this.$2t_2();
    },
    
    $2t_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$2t_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (229,3)
        var $v_0 = this.$O_2.find('option:selected');
        if ($v_0.length <= 0) {
            return;
        }
        var $v_1 = $v_0.prop('disabled');
        if ($v_1) {
            this.$2E_2.show();
        }
        else {
            this.$2E_2.hide();
        }
    },
    
    $M_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$M_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (249,3)
        this.$16_2.click(this.$$d_$4t_2);
        this.$O_2.change(this.$$d_$39_2);
        this.$s_2.click(this.$$d_$3j_2);
        this.$1g_2.click(this.$$d_$3Y_2);
        this.$1j_2.click(this.$$d_$3h_2);
    },
    
    $Q_2: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$$Q_2() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (258,3)
        this.$16_2.unbind('click', this.$$d_$4t_2);
        this.$O_2.unbind('change', this.$$d_$39_2);
        this.$s_2.unbind('click', this.$$d_$3j_2);
        this.$1g_2.unbind('click', this.$$d_$3Y_2);
        this.$1j_2.unbind('click', this.$$d_$3h_2);
    },
    
    actualDispose: function Mscrm_SocialInsights_Provisioning_NetBreezeConfigurationHandler$actualDispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Provisioning/NetBreezeConfigurationHandler.cs (266,3)
        this.$Q_2();
    }
}


Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults = function Mscrm_SocialInsights_Provisioning_NetBreezeConfirmationDialogDefaults() {
}


Type.registerNamespace('Mscrm.SocialInsights.Runtime.Controls');

Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl = function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl(element) {
    this.$$d_$4L_4 = Function.createDelegate(this, this.$4L_4);
    this.$$d_$4H_4 = Function.createDelegate(this, this.$4H_4);
    this.$$d_$4E_4 = Function.createDelegate(this, this.$4E_4);
    this.$$d_$3u_4 = Function.createDelegate(this, this.$3u_4);
    this.$$d_$40_4 = Function.createDelegate(this, this.$40_4);
    this.$$d_$41_4 = Function.createDelegate(this, this.$41_4);
    this.$$d_$3i_4 = Function.createDelegate(this, this.$3i_4);
    this.$$d_$3k_4 = Function.createDelegate(this, this.$3k_4);
    this.$$d_$3m_4 = Function.createDelegate(this, this.$3m_4);
    this.$$d_$3l_4 = Function.createDelegate(this, this.$3l_4);
    this.$$d_$4J_4 = Function.createDelegate(this, this.$4J_4);
    this.$$d_$3c_4 = Function.createDelegate(this, this.$3c_4);
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (493,3)
    Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.initializeBase(this, [ element ]);
    setPerfMarkerTimestamp('StartSocialInsightsControlInitializationTimestamp');
    this.$G_4 = $P_CRM(element);
    this.$1P_4 = this.$G_4.parent();
    this.$1Q_4 = $P_CRM('#placeholder', element);
    this.$Z_4 = $P_CRM('#configuration', element);
    this.$2K_4 = $P_CRM('#unauthorized', element);
    this.$1N_4 = $P_CRM('#newEntityScreen', element);
    this.$1O_4 = $P_CRM('#outlookOfflineMessage', element);
    this.$b_4 = $P_CRM('#nbContent', element);
    this.$Y_4 = $P_CRM('#buttons', element);
    this.$1A_4 = true;
    this.$U_4 = !IsNull(window.RecordData);
    if (!this.$U_4) {
        this.$G_4.addClass('dashboard');
    }
}
Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.prototype = {
    $1I_4: false,
    
    get_hasFocus: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_hasFocus() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (60,4)
        return this.$1I_4;
    },
    
    set_hasFocus: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$set_hasFocus(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (61,4)
        this.$1I_4 = value;
        return value;
    },
    
    $z_4: false,
    
    get_hasMouse: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_hasMouse() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (74,4)
        return this.$z_4;
    },
    
    set_hasMouse: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$set_hasMouse(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (75,4)
        this.$z_4 = value;
        return value;
    },
    
    get_hasConfiguration: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_hasConfiguration() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (85,4)
        return !isNullOrEmptyString(this.$1_4.SocialDataItemId) && !isNullOrEmptyString(this.$1_4.SocialDataParameters);
    },
    
    $U_4: false,
    $1A_4: false,
    
    get_confirmDeletion: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_confirmDeletion() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (115,4)
        return this.$1A_4;
    },
    
    set_confirmDeletion: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$set_confirmDeletion(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (116,4)
        this.$1A_4 = value;
        return value;
    },
    
    $1P_4: null,
    $G_4: null,
    
    get_control: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_control() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (142,4)
        return this.$G_4;
    },
    
    $1Q_4: null,
    
    get_placeholder: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_placeholder() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (155,4)
        return this.$1Q_4;
    },
    
    $1N_4: null,
    
    get_newEntityScreen: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_newEntityScreen() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (168,4)
        return this.$1N_4;
    },
    
    $1O_4: null,
    
    get_outlookOfflineScreen: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_outlookOfflineScreen() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (181,4)
        return this.$1O_4;
    },
    
    $Z_4: null,
    
    get_configuration: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_configuration() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (194,4)
        return this.$Z_4;
    },
    
    $2K_4: null,
    $b_4: null,
    
    get_nbContent: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_nbContent() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (212,4)
        return this.$b_4;
    },
    
    $Y_4: null,
    
    get_buttons: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_buttons() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (225,4)
        return this.$Y_4;
    },
    
    $1_4: null,
    
    get_socialInsightsConfiguration: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_socialInsightsConfiguration() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (238,4)
        return this.$1_4;
    },
    
    $1w_4: 0,
    
    get_FormType: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_FormType() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (249,4)
        return this.$1w_4;
    },
    
    set_FormType: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$set_FormType(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (250,4)
        this.$1w_4 = value;
        return value;
    },
    
    $1v_4: null,
    
    get_FormId: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_FormId() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (265,4)
        return this.$1v_4;
    },
    
    set_FormId: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$set_FormId(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (266,4)
        this.$1v_4 = value;
        return value;
    },
    
    $1o_4: null,
    
    get_ControlId: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_ControlId() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (281,4)
        return this.$1o_4;
    },
    
    set_ControlId: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$set_ControlId(value) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (282,4)
        this.$1o_4 = value;
        return value;
    },
    
    $1b_4: null,
    
    get_editButtonIcon: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_editButtonIcon() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (295,4)
        if (IsNull(this.$1b_4)) {
            this.$1b_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/SocialInsight/NBEditIcon.png'));
        }
        return this.$1b_4;
    },
    
    $1e_4: null,
    
    get_editVisualizationButtonIcon: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_editVisualizationButtonIcon() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (315,4)
        if (IsNull(this.$1e_4)) {
            this.$1e_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/SocialInsight/NBEditVisualizationIcon.png'));
        }
        return this.$1e_4;
    },
    
    $1Y_4: null,
    
    get_deleteButtonIcon: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_deleteButtonIcon() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (335,4)
        if (IsNull(this.$1Y_4)) {
            this.$1Y_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/SocialInsight/NBDeleteIcon.png'));
        }
        return this.$1Y_4;
    },
    
    $1a_4: null,
    
    get_editButtonHoverIcon: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_editButtonHoverIcon() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (355,4)
        if (IsNull(this.$1a_4)) {
            this.$1a_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/SocialInsight/NBHoverEditIcon.png'));
        }
        return this.$1a_4;
    },
    
    $1d_4: null,
    
    get_editVisualizationButtonHoverIcon: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_editVisualizationButtonHoverIcon() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (375,4)
        if (IsNull(this.$1d_4)) {
            this.$1d_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/SocialInsight/NBHoverEditVisualizationIcon.png'));
        }
        return this.$1d_4;
    },
    
    $1X_4: null,
    
    get_deleteButtonHoverIcon: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_deleteButtonHoverIcon() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (395,4)
        if (IsNull(this.$1X_4)) {
            this.$1X_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/SocialInsight/NBHoverDeleteIcon.png'));
        }
        return this.$1X_4;
    },
    
    $1Z_4: null,
    
    get_editButton: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_editButton() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (415,4)
        if (IsNull(this.$1Z_4)) {
            this.$1Z_4 = this.$Y_4.find('.edit');
        }
        return this.$1Z_4;
    },
    
    $1c_4: null,
    
    get_editVisualizationButton: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_editVisualizationButton() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (435,4)
        if (IsNull(this.$1c_4)) {
            this.$1c_4 = this.$Y_4.find('.editVisualization');
        }
        return this.$1c_4;
    },
    
    $1W_4: null,
    
    get_deleteButton: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_deleteButton() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (455,4)
        if (IsNull(this.$1W_4)) {
            this.$1W_4 = this.$Y_4.find('.delete');
        }
        return this.$1W_4;
    },
    
    $1V_4: null,
    
    get_$2j_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$get_$2j_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (476,4)
        if (IsNull(this.$1V_4)) {
            this.$1V_4 = this.$Z_4.find('a');
        }
        return this.$1V_4;
    },
    
    initialize: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$initialize() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (519,3)
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = this.$G_4.parents('div.ms-crm-InlineTabBody-Read:first');
        if (!$v_0.length || $v_0.css('display') !== 'none') {
            this.$2T_4();
        }
        else {
            Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$3c_4, 2);
        }
    },
    
    Refresh: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$Refresh(socialInsightsConfiguration) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (541,3)
        this.$1_4 = socialInsightsConfiguration;
        this.$X_4(this.$1Q_4);
        this.$2Y_4();
    },
    
    dispose: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$dispose() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (553,3)
        this.get_editVisualizationButton().children(':first-child').unbind();
        this.get_editButton().children(':first-child').unbind();
        this.get_deleteButton().children(':first-child').unbind();
        this.get_editVisualizationButton().unbind();
        this.get_editButton().unbind();
        this.get_deleteButton().unbind();
        this.get_$2j_4().unbind();
        this.$1P_4.unbind();
        Mscrm.UIControl.prototype.dispose.call(this);
    },
    
    $3c_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3c_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (575,3)
        var $v_0 = this.$G_4.parents('div.ms-crm-InlineTab-Read:first');
        if (!$v_0.length) {
            return;
        }
        var $v_1 = $find($v_0[0].id);
        if (IsNull($v_1) || $v_1.get_displayState() !== 'collapsed') {
            this.$2T_4();
            return;
        }
        $v_1.add_tabStateChange(this.$$d_$4J_4);
    },
    
    $4J_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$4J_4($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (596,3)
        if (($p1).get_displayState() !== 'expanded') {
            return;
        }
        ($p0).remove_tabStateChange(this.$$d_$4J_4);
        this.$2T_4();
    },
    
    $2T_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$2T_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (609,3)
        if (!Mscrm.SessionInfo.isOnline()) {
            this.$X_4(this.$1O_4);
            return;
        }
        this.$3G_4();
        if (this.$U_4 && isNullOrEmptyString(this.$1_4.RegardingObjectId)) {
            this.$4G_4();
        }
        else {
            this.$4p_4();
        }
        this.$4N_4();
    },
    
    $4N_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$4N_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (631,3)
        if (!this.$U_4) {
            return;
        }
        this.$1P_4.mouseenter(this.$$d_$3l_4);
        this.$1P_4.mouseleave(this.$$d_$3m_4);
        this.$G_4.focusin(this.$$d_$3k_4);
        this.$G_4.focusout(this.$$d_$3k_4);
        this.get_editVisualizationButton().append(String.format('<img src=\'{0}\' class=\'{1}\' tabindex=\'0\'></img>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editVisualizationButtonIcon().source), CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editVisualizationButtonIcon().cssClass)));
        this.get_editButton().append(String.format('<img src=\'{0}\' class=\'{1}\' tabindex=\'0\'></img>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editButtonIcon().source), CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editButtonIcon().cssClass)));
        this.get_deleteButton().append(String.format('<img src=\'{0}\' class=\'{1}\' tabindex=\'0\'></img>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_deleteButtonIcon().source), CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_deleteButtonIcon().cssClass)));
        this.get_$2j_4().click(this.$$d_$3i_4);
        this.$2O_4(this.get_editVisualizationButton(), this.get_editVisualizationButtonIcon(), this.get_editVisualizationButtonHoverIcon());
        this.$2O_4(this.get_editButton(), this.get_editButtonIcon(), this.get_editButtonHoverIcon());
        this.$2O_4(this.get_deleteButton(), this.get_deleteButtonIcon(), this.get_deleteButtonHoverIcon());
        if (!this.$3f_4()) {
            this.$G_4.addClass('titleMissing');
        }
    },
    
    $3l_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3l_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (675,3)
        this.$z_4 = true;
        this.$1G_4();
    },
    
    $3m_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3m_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (684,3)
        this.$z_4 = false;
        this.$1G_4();
    },
    
    $3k_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3k_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (693,3)
        this.$1I_4 = this.$G_4[0] === document.activeElement || this.$G_4.has(document.activeElement).length > 0;
        this.$1G_4();
    },
    
    $3i_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3i_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (705,3)
        this.$1L_4(0);
    },
    
    $40_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$40_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (713,3)
        switch (this.$1_4.SocialDataItemType) {
            case 1:
                this.$1L_4(2);
                break;
            case 2:
                this.$1L_4(3);
                break;
            case 0:
                this.$1L_4(0);
                break;
        }
    },
    
    $41_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$41_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (732,3)
        this.$1L_4(4);
    },
    
    $1L_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$1L_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (737,3)
        if (!this.get_hasConfiguration()) {
            this.$3G_4();
        }
        var $v_0 = {};
        $v_0.launchedFromRuntimeControl = true;
        $v_0.socialInsightsConfiguration = this.$1_4;
        $v_0.wizardPageToShow = $p0;
        var $v_1 = new Mscrm.CrmDialog(Mscrm.CrmUri.create('/WebWizard/WizardContainer.aspx?WizardId=2F705211-E38E-4CF8-A0E3-980FC83025C6'), $v_0, 700, 560, null);
        $v_1.setCallbackInfo('Refresh', this, null);
        $v_1.showInlineDialog();
    },
    
    $3u_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3u_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (762,3)
        if (!this.$1A_4) {
            this.DeleteSocialInsightsConfirmation(true);
            return;
        }
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_removesocialinsights.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_Remove_SocialInsight_Confirmation_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_Remove_SocialInsight_Confirmation_Description';
        $v_0.get_query()['resource_body'] = 'Dialog_Remove_SocialInsight_Confirmation_Body';
        var $v_1 = new Mscrm.CrmDialog($v_0, null, 500, 228, null);
        var $v_2 = Mscrm.Utilities.createCallbackFunctionObject('DeleteSocialInsightsConfirmation', this, null, false);
        $v_1.setCallbackReference($v_2);
        $v_1.show();
    },
    
    DeleteSocialInsightsConfirmation: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$DeleteSocialInsightsConfirmation(result) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (781,3)
        if (!IsNull(result) && result) {
            var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
            var $$t_3 = this, $$t_4 = this;
            $v_0.deleteCommand(this.$1_4).done(function($p1_0) {
                $$t_3.$1_4 = $p1_0;
                $$t_3.$X_4($$t_3.$Z_4);
                $$t_3.$1G_4();
                $$t_3.$2l_4();
                $$t_3.$2m_4();
            }).fail(function() {
                $$t_4.$X_4($$t_4.$b_4);
            });
        }
    },
    
    $2O_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$2O_4($p0, $p1, $p2) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (809,3)
        var $v_0 = $p0.children(':first-child');
        var $$t_4 = this;
        $v_0.mouseenter(function() {
            $v_0.attr('src', $p2.source);
            $v_0.attr('class', $p2.cssClass);
        });
        var $$t_5 = this;
        $v_0.mouseleave(function() {
            $v_0.attr('src', $p1.source);
            $v_0.attr('class', $p1.cssClass);
        });
    },
    
    $3a_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3a_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (828,3)
        this.get_editVisualizationButton().click(this.$$d_$41_4);
        this.get_editButton().click(this.$$d_$40_4);
        this.get_deleteButton().click(this.$$d_$3u_4);
    },
    
    $2l_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$2l_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (835,3)
        this.get_editVisualizationButton().unbind('click', this.$$d_$41_4);
        this.get_editButton().unbind('click', this.$$d_$40_4);
        this.get_deleteButton().unbind('click', this.$$d_$3u_4);
    },
    
    $3b_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3b_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (845,3)
        this.get_editVisualizationButton().keydown(this.$$d_$4E_4);
        this.get_editButton().keydown(this.$$d_$4E_4);
        this.get_deleteButton().keydown(this.$$d_$4E_4);
    },
    
    $2m_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$2m_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (855,3)
        this.get_editVisualizationButton().unbind('keydown', this.$$d_$4E_4);
        this.get_editButton().unbind('keydown', this.$$d_$4E_4);
        this.get_deleteButton().unbind('keydown', this.$$d_$4E_4);
    },
    
    $4E_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$4E_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (865,3)
        if ($p0.which === 13) {
            $p0.target.click();
        }
    },
    
    $3f_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3f_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (877,3)
        var $v_0 = (this.$G_4).parent().siblings();
        return !!$v_0.size();
    },
    
    $3G_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3G_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (887,3)
        if (IsNull(this.$1_4)) {
            this.$1_4 = new Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration();
        }
        this.$1_4.FormId = this.$1v_4;
        this.$1_4.ControlId = this.$1o_4;
        this.$1_4.FormTypeCode = this.$1w_4;
        if (this.$U_4) {
            var $v_0 = Mscrm.InlineEditUtilities.getEntityReference(window.RecordData);
            if (isNullOrEmptyString(this.$1_4.RegardingObjectId)) {
                this.$1_4.RegardingObjectId = $v_0.Id;
            }
            if (!this.$1_4.RegardingObjectTypeCode) {
                this.$1_4.RegardingObjectTypeCode = $v_0.TypeCode;
            }
        }
    },
    
    $4G_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$4G_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (915,3)
        this.$X_4(this.$1N_4);
        Mscrm.InlineEditDataService.get_dataService().add_formRefreshed(this.$$d_$4H_4);
    },
    
    $4H_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$4H_4($p0, $p1) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (924,3)
        if ($p1.get_command() !== 1) {
            return;
        }
        Mscrm.InlineEditDataService.get_dataService().remove_formRefreshed(this.$$d_$4H_4);
        this.$1_4.RegardingObjectId = $p1.get_entityReference().Id;
        this.$1_4.RegardingObjectTypeCode = $p1.get_entityReference().TypeCode;
        this.$X_4(this.$Z_4);
    },
    
    $4p_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$4p_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (940,3)
        var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
        var $$t_2 = this, $$t_3 = this;
        $v_0.retrieve(this.$1_4).done(function($p1_0) {
            if (!IsNull($p1_0)) {
                $$t_2.$1_4 = $p1_0;
            }
            $$t_2.$2Y_4();
        }).fail(function() {
            $$t_3.$2Y_4();
        });
    },
    
    $2Y_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$2Y_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (959,3)
        this.$1G_4();
        this.$2l_4();
        this.$2m_4();
        if (!this.get_hasConfiguration() || !window._IsSocialInsightsInstanceAvailable) {
            if (this.$U_4 && Mscrm.InlineEditDataService.get_formEntity().get_isDisabled()) {
                this.$X_4(this.$2K_4);
            }
            else {
                this.$X_4(this.$Z_4);
            }
            setPerfMarkerTimestamp('FinishSocialInsightsControlInitializationTimestamp');
            return;
        }
        else if (this.$U_4 && !Mscrm.InlineEditDataService.get_formEntity().get_isDisabled()) {
            this.$3a_4();
            this.$3b_4();
        }
        var $v_0 = Mscrm.SocialInsights.Common.DependencyInstanceContainer.get_urlServiceInstance().createDisplayUrl(this.$1_4.SocialDataItemId, this.$1_4.SocialDataParameters.split('-'));
        var $v_1 = this.$b_4.find('iframe');
        $v_1.removeAttr('url');
        $v_1.attr('src', $v_0);
        $v_1.load(this.$$d_$4L_4);
        setPerfMarkerTimestamp('FinishSocialInsightsControlInitializationTimestamp');
        setPerfMarkerTimestamp('StartSocialInsightsIFrameLoadTimestamp');
    },
    
    $4L_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$4L_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (997,3)
        this.$X_4(this.$b_4);
        this.$b_4.find('iframe').unbind('load', this.$$d_$4L_4);
        setPerfMarkerTimestamp('FinishSocialInsightsIFrameLoadTimestamp');
    },
    
    $1G_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$1G_4() {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (1007,3)
        if ((this.$z_4 || this.$1I_4) && this.get_hasConfiguration() && this.$U_4 && !Mscrm.InlineEditDataService.get_formEntity().get_isDisabled()) {
            this.$3H_4(this.$Y_4);
        }
        else {
            this.$j_4(this.$Y_4);
        }
    },
    
    $X_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$X_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (1019,3)
        this.$j_4(this.$1Q_4);
        this.$j_4(this.$1N_4);
        this.$j_4(this.$Z_4);
        this.$j_4(this.$2K_4);
        this.$j_4(this.$b_4);
        this.$j_4(this.$1O_4);
        this.$3H_4($p0);
    },
    
    $j_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$j_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (1034,3)
        $p0.addClass('hidden');
    },
    
    $3H_4: function Mscrm_SocialInsights_Runtime_Controls_SocialInsightControl$$3H_4($p0) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Controls/SocialInsightControl.cs (1042,3)
        $p0.removeClass('hidden');
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Runtime.Services');

Mscrm.SocialInsights.Runtime.Services.IUrlService = function() {}
Mscrm.SocialInsights.Runtime.Services.IUrlService.registerInterface('Mscrm.SocialInsights.Runtime.Services.IUrlService');


Mscrm.SocialInsights.Runtime.Services.UrlService = function Mscrm_SocialInsights_Runtime_Services_UrlService() {
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$get_rootUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (26,4)
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$27().RootUrl;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo = function Mscrm_SocialInsights_Runtime_Services_UrlService$get_versionInfo() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (37,4)
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$27().VersionInfo;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo = function Mscrm_SocialInsights_Runtime_Services_UrlService$get_orgInfo() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (48,4)
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$27().OrgInfo;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$get_restUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (59,4)
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$27().RestUrl || Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'api/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo() + 'solutions/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo();
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getAllWidgetsUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getAllWidgetsUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (78,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo() + 'solutions/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'widgets/';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgetInfoUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getWidgetInfoUrl(widgetId) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (87,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getAllWidgetsUrl() + widgetId;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgetPictureUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getWidgetPictureUrl(widgetId) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (96,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgetInfoUrl(widgetId) + '/graphics';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgets = function Mscrm_SocialInsights_Runtime_Services_UrlService$getWidgets(widgetIds) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (105,3)
    var $v_0 = '';
    for (var $v_1 = 0; $v_1 < widgetIds.length - 1; ++$v_1) {
        $v_0 += widgetIds[$v_1] + '-';
    }
    $v_0 += widgetIds[widgetIds.length - 1];
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'redirect?widgets=' + $v_0;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemsUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getSearchItemsUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (120,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'searchitems';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getCreateOrEditSearchItemsUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getCreateOrEditSearchItemsUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (134,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.$2s() + 'searchitems';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getSearchItemUrl(id) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (143,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemsUrl() + '/' + id;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getEditSearchItemUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getEditSearchItemUrl(id) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (159,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getCreateOrEditSearchItemsUrl() + '/' + id;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getCategoriesUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (168,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'categories/tree';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getAdvancedSetupLink = function Mscrm_SocialInsights_Runtime_Services_UrlService$getAdvancedSetupLink(searchTermId) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (177,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'settings/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + '#page:searchitems&id=' + (searchTermId || 'new');
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getCorsWorkaroundUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getCorsWorkaroundUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (185,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'cors.htm';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeOrigin = function Mscrm_SocialInsights_Runtime_Services_UrlService$getNetBreezeOrigin() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (193,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl().substring(0, Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl().length - 1);
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getEstimateUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getEstimateUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (206,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'searchitems' + '/' + 'estimate';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchQueriesUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getSearchQueriesUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (223,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.$2s() + 'searchqueries';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeDefaultsUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getNetBreezeDefaultsUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (231,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'searchitems' + '/' + 'config';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSignInTargetUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getSignInTargetUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (243,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'authenticate.htm';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getAuthStatusUrl = function Mscrm_SocialInsights_Runtime_Services_UrlService$getAuthStatusUrl() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (252,3)
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'auth_status.htm';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.$2s = function Mscrm_SocialInsights_Runtime_Services_UrlService$$2s() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (264,3)
    if (Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo().indexOf('1.0') !== -1) {
        return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl().replace('1.0', '1.1');
    }
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl();
}
Mscrm.SocialInsights.Runtime.Services.UrlService.prototype = {
    
    createDisplayUrl: function Mscrm_SocialInsights_Runtime_Services_UrlService$createDisplayUrl(searchTerms, visualizationIds) {
        // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/UrlService.cs (70,3)
        return Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgets(visualizationIds) + '&nodeIds=' + searchTerms;
    }
}


Mscrm.SocialInsights.Runtime.Services.AjaxService = function Mscrm_SocialInsights_Runtime_Services_AjaxService() {
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$$cctor = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$$cctor() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (90,3)
    $P_CRM(window).unload(Mscrm.SocialInsights.Runtime.Services.AjaxService.$3z);
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$3d = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$3d() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (54,3)
    ($P_CRM(window)).on('message', Mscrm.SocialInsights.Runtime.Services.AjaxService.$2u);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$N = $P_CRM('<iframe style=\'display:none;\'/>');
    $P_CRM('body').append(Mscrm.SocialInsights.Runtime.Services.AjaxService.$N);
    (Mscrm.SocialInsights.Runtime.Services.AjaxService.$N).on('load', function() {
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$4u();
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$2U = true;
    });
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$N.attr('src', Mscrm.SocialInsights.Runtime.Services.UrlService.getCorsWorkaroundUrl());
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$4u = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$4u() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (77,3)
    for (var $v_0 = 1; $v_0 <= Mscrm.SocialInsights.Runtime.Services.AjaxService.$20; $v_0++) {
        var $v_1 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$n[$v_0 + ''];
        if (!IsNull($v_1)) {
            Mscrm.SocialInsights.Runtime.Services.AjaxService.$3O($v_1.ajaxCall);
        }
    }
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest = function Mscrm_SocialInsights_Runtime_Services_AjaxService$makeRequest(requestType, url, data, createNewCorsFrame) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (114,3)
    var $v_0 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$3q(requestType, url, data);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$20++;
    var $v_1 = new Mscrm.SocialInsights.Models.AjaxCall();
    $v_1.id = Mscrm.SocialInsights.Runtime.Services.AjaxService.$20;
    $v_1.ajax = $v_0;
    var $v_2 = new Mscrm.SocialInsights.Models.PendingRequest();
    $v_2.ajaxCall = $v_1;
    $v_2.deferred = jQueryApi.jQueryDeferredFactory.Deferred(Object, Mscrm.SocialInsights.Models.AjaxCall);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$4U($v_2);
    return $v_2.deferred.promise();
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$3q = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$3q($p0, $p1, $p2) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (143,3)
    var $v_0 = new jQueryAjaxOptions();
    $v_0.url = $p1;
    $v_0.async = true;
    $v_0.processData = false;
    switch ($p0) {
        case 0:
            $v_0.type = 'GET';
            break;
        case 1:
            $v_0.type = 'POST';
            break;
        case 2:
            $v_0.type = 'PUT';
            break;
    }
    if (!$p0) {
        $v_0.dataType = 'json';
    }
    else {
        $v_0.contentType = 'application/json';
    }
    if (!IsNull($p2)) {
        $v_0.data = $p2;
    }
    return $v_0;
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$4U = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$4U($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (181,3)
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$n[$p0.ajaxCall.id + ''] = $p0;
    var $v_0 = $p0.ajaxCall.id;
    window.setTimeout(function() {
        return Mscrm.SocialInsights.Runtime.Services.AjaxService.$4r($v_0);
    }, Mscrm.SocialInsights.Runtime.Services.AjaxService.requestTimeout);
    if (IsNull(Mscrm.SocialInsights.Runtime.Services.AjaxService.$N)) {
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$3d();
    }
    if (!Mscrm.SocialInsights.Runtime.Services.AjaxService.$2U) {
        return;
    }
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$3O($p0.ajaxCall);
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$3O = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$3O($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (198,3)
    var $v_0 = JSON.stringify($p0);
    var $v_1 = (Mscrm.SocialInsights.Runtime.Services.AjaxService.$N[0]).contentWindow;
    $v_1.postMessage($v_0, '*');
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$4r = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$4r($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (205,3)
    var $v_0 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$n[$p0.toString()];
    if (IsNull($v_0)) {
        return;
    }
    var $v_1 = $v_0.deferred;
    $v_1.reject('time is out');
    delete Mscrm.SocialInsights.Runtime.Services.AjaxService.$n[$p0.toString()];
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$2u = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$2u($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (224,3)
    var $v_0 = $p0.originalEvent;
    var $v_1 = $v_0.origin;
    if (Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeOrigin() !== $v_1) {
        return;
    }
    var $v_2 = $v_0.data;
    var $v_3 = JSON.parse($v_2);
    var $v_4 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$n[$v_3.id.toString()];
    if (IsNull($v_4)) {
        return;
    }
    if (IsNull($v_3.error)) {
        $v_4.deferred.resolve($v_3.result);
    }
    else {
        $v_4.deferred.reject($v_3);
    }
    delete Mscrm.SocialInsights.Runtime.Services.AjaxService.$n[$v_3.id.toString()];
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$3z = function Mscrm_SocialInsights_Runtime_Services_AjaxService$$3z($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Runtime/Services/AjaxService.cs (250,3)
    $P_CRM(window).unbind('message', Mscrm.SocialInsights.Runtime.Services.AjaxService.$2u);
    if (!IsNull(Mscrm.SocialInsights.Runtime.Services.AjaxService.$N)) {
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$N.unbind('load');
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$N.remove();
    }
}


Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType = function() {}
Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType.prototype = {
    get: 0, 
    post: 1, 
    put: 2
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType.registerEnum('Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType', false);


Type.registerNamespace('Mscrm.SocialInsights.Shared');

Mscrm.SocialInsights.Shared.SocialInsightsConstants = function Mscrm_SocialInsights_Shared_SocialInsightsConstants() {
}
Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_wizardHeight = function Mscrm_SocialInsights_Shared_SocialInsightsConstants$get_wizardHeight() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Shared/SocialInsightsConstants.cs (23,4)
    return 560;
}
Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_wizardWidth = function Mscrm_SocialInsights_Shared_SocialInsightsConstants$get_wizardWidth() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Shared/SocialInsightsConstants.cs (31,4)
    return 700;
}


Mscrm.SocialInsights.Shared.SocialInsightsWebService = function Mscrm_SocialInsights_Shared_SocialInsightsWebService() {
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.acceptTerms = function Mscrm_SocialInsights_Shared_SocialInsightsWebService$acceptTerms() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Shared/SocialInsightsWebService.cs (14,3)
    var $v_0 = '<organization>\r\n\t\t\t\t\t<socialinsightstermsaccepted>1</socialinsightstermsaccepted>\r\n\t\t\t\t</organization>';
    return Mscrm.SocialInsights.Shared.SocialInsightsWebService.$3N($v_0);
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.switchInstance = function Mscrm_SocialInsights_Shared_SocialInsightsWebService$switchInstance($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Shared/SocialInsightsWebService.cs (29,3)
    var $v_0 = '<organization>\r\n\t\t\t\t\t<socialinsightsinstance>{0}</socialinsightsinstance>\r\n\t\t\t\t</organization>';
    $p0 = CrmEncodeDecode.CrmXmlEncode($p0);
    var $v_1 = String.format($v_0, $p0);
    return Mscrm.SocialInsights.Shared.SocialInsightsWebService.$3N($v_1);
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.get_$34 = function Mscrm_SocialInsights_Shared_SocialInsightsWebService$get_$34() {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Shared/SocialInsightsWebService.cs (48,4)
    return Mscrm.CrmUri.create('/Tools/SocialInsights/cmds/cmd_update.aspx');
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.$3N = function Mscrm_SocialInsights_Shared_SocialInsightsWebService$$3N($p0) {
    // file:///c:/bt/160165/src/core/application/web/scriptsharp/_controls/socialinsights/Shared/SocialInsightsWebService.cs (51,3)
    var $v_0 = new jQueryAjaxOptions();
    $v_0.beforeSend = function($p1_0) {
        Mscrm.WrpcTokenFuncs.setTokenInHeader($p1_0, Mscrm.SocialInsights.Shared.SocialInsightsWebService.get_$34());
    };
    $v_0.url = Mscrm.SocialInsights.Shared.SocialInsightsWebService.get_$34().toString();
    $v_0.type = 'POST';
    $v_0.data = $p0;
    return $P_CRM.ajax($v_0);
}


Type.registerNamespace('Microsoft.Crm.Core.Application.WebServices');

Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration = function Microsoft_Crm_Core_Application_WebServices_SocialInsightsConfiguration() {
}
Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration.prototype = {
    SocialInsightsConfigurationId: null,
    SocialDataItemId: null,
    SocialDataItemType: 0,
    SocialDataParameters: null,
    RegardingObjectId: null,
    RegardingObjectTypeCode: 0,
    FormTypeCode: 0,
    FormId: null,
    ControlId: null
}


Mscrm.SocialInsights.SocialInsightsConfigurationService.registerClass('Mscrm.SocialInsights.SocialInsightsConfigurationService');
Mscrm.SocialInsights.Common.SocialInsightControlJsonWrapper.registerClass('Mscrm.SocialInsights.Common.SocialInsightControlJsonWrapper');
Mscrm.SocialInsights.Common.Constants.registerClass('Mscrm.SocialInsights.Common.Constants');
Mscrm.SocialInsights.Common.DependencyInstanceContainer.registerClass('Mscrm.SocialInsights.Common.DependencyInstanceContainer');
Mscrm.SocialInsights.Common.Dialogs.registerClass('Mscrm.SocialInsights.Common.Dialogs');
Mscrm.SocialInsights.Common.Disposable.registerClass('Mscrm.SocialInsights.Common.Disposable', null, Sys.IDisposable);
Mscrm.SocialInsights.Common.InternalDataHelper.registerClass('Mscrm.SocialInsights.Common.InternalDataHelper');
Mscrm.SocialInsights.Views.BaseView.registerClass('Mscrm.SocialInsights.Views.BaseView', Mscrm.SocialInsights.Common.Disposable);
Mscrm.SocialInsights.Views.ContainerView.registerClass('Mscrm.SocialInsights.Views.ContainerView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.CssClasses.registerClass('Mscrm.SocialInsights.Views.CssClasses');
Mscrm.SocialInsights.Views.ListItemMoveControlsView.registerClass('Mscrm.SocialInsights.Views.ListItemMoveControlsView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.ListView.registerClass('Mscrm.SocialInsights.Views.ListView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.ListViewItem.registerClass('Mscrm.SocialInsights.Views.ListViewItem', Mscrm.SocialInsights.Views.ContainerView, Mscrm.SocialInsights.Common.Views.ISupportFocus);
Mscrm.SocialInsights.Views.SpinnerView.registerClass('Mscrm.SocialInsights.Views.SpinnerView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.registerClass('Mscrm.SocialInsights.Configuration.Views.WizardPageHandler', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.ChooseTopicTypeView.registerClass('Mscrm.SocialInsights.Views.ChooseTopicTypeView', Mscrm.SocialInsights.Configuration.Views.WizardPageHandler);
Mscrm.SocialInsights.Views.SearchTopicItemView.registerClass('Mscrm.SocialInsights.Views.SearchTopicItemView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.SearchTopicItemsListView.registerClass('Mscrm.SocialInsights.Views.SearchTopicItemsListView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.CreateTopicView.registerClass('Mscrm.SocialInsights.Views.CreateTopicView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.WidgetListEditorStrings.registerClass('Mscrm.SocialInsights.Views.WidgetListEditorStrings');
Mscrm.SocialInsights.Views.WidgetListEditorView.registerClass('Mscrm.SocialInsights.Views.WidgetListEditorView', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Views.WidgetTypeView.registerClass('Mscrm.SocialInsights.Views.WidgetTypeView', Mscrm.SocialInsights.Views.BaseView, Mscrm.SocialInsights.Common.Views.ISupportFocus);
Mscrm.Views.IconHoverBehavior.registerClass('Mscrm.Views.IconHoverBehavior');
Mscrm.Views.CrmMoveIcons.registerClass('Mscrm.Views.CrmMoveIcons');
Mscrm.Views.CrmMoveControlsView.registerClass('Mscrm.Views.CrmMoveControlsView', Mscrm.SocialInsights.Views.ListItemMoveControlsView);
Mscrm.SocialInsights.Common.Views.KeepFocusBehavior.registerClass('Mscrm.SocialInsights.Common.Views.KeepFocusBehavior', Mscrm.SocialInsights.Common.Disposable);
Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler.registerClass('Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler');
Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.registerClass('Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler', Mscrm.SocialInsights.Configuration.Views.WizardPageHandler);
Mscrm.SocialInsights.Configuration.Models.InlineDialogArguments.registerClass('Mscrm.SocialInsights.Configuration.Models.InlineDialogArguments');
Mscrm.SocialInsights.Configuration.Models.SocialInsightObj.registerClass('Mscrm.SocialInsights.Configuration.Models.SocialInsightObj');
Mscrm.SocialInsights.Configuration.Models.Label.registerClass('Mscrm.SocialInsights.Configuration.Models.Label');
Mscrm.SocialInsights.Configuration.Models.WidgetRestriction.registerClass('Mscrm.SocialInsights.Configuration.Models.WidgetRestriction');
Mscrm.SocialInsights.Models.AjaxCall.registerClass('Mscrm.SocialInsights.Models.AjaxCall');
Mscrm.SocialInsights.Models.PendingRequest.registerClass('Mscrm.SocialInsights.Models.PendingRequest');
Mscrm.SocialInsights.Models.NetBreezeEstimate.registerClass('Mscrm.SocialInsights.Models.NetBreezeEstimate');
Mscrm.SocialInsights.Models.NetBreezeLinks.registerClass('Mscrm.SocialInsights.Models.NetBreezeLinks');
Mscrm.SocialInsights.Models.Channel.registerClass('Mscrm.SocialInsights.Models.Channel');
Mscrm.SocialInsights.Models.SearchChannel.registerClass('Mscrm.SocialInsights.Models.SearchChannel');
Mscrm.SocialInsights.Models.Inclusions.registerClass('Mscrm.SocialInsights.Models.Inclusions');
Mscrm.SocialInsights.Models.Exclusions.registerClass('Mscrm.SocialInsights.Models.Exclusions');
Mscrm.SocialInsights.Models.SearchQuery.registerClass('Mscrm.SocialInsights.Models.SearchQuery');
Mscrm.SocialInsights.Models.NetBreezeSearchItem.registerClass('Mscrm.SocialInsights.Models.NetBreezeSearchItem');
Mscrm.SocialInsights.Models.NetBreezeWidget.registerClass('Mscrm.SocialInsights.Models.NetBreezeWidget');
Mscrm.SocialInsights.Models.SearchItemCategory.registerClass('Mscrm.SocialInsights.Models.SearchItemCategory');
Mscrm.SocialInsights.Models.WidgetType.registerClass('Mscrm.SocialInsights.Models.WidgetType');
Mscrm.SocialInsights.Models.NetBreezeDefaults.registerClass('Mscrm.SocialInsights.Models.NetBreezeDefaults');
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.registerClass('Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel');
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.registerClass('Mscrm.SocialInsights.ViewModels.CreateTopicViewModel');
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.registerClass('Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel');
Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.registerClass('Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView', Mscrm.SocialInsights.Configuration.Views.WizardPageHandler);
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.registerClass('Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView', Mscrm.SocialInsights.Configuration.Views.WizardPageHandler);
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.registerClass('Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.registerClass('Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults');
Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.registerClass('Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl', Mscrm.UIControl);
Mscrm.SocialInsights.Runtime.Services.UrlService.registerClass('Mscrm.SocialInsights.Runtime.Services.UrlService', null, Mscrm.SocialInsights.Runtime.Services.IUrlService);
Mscrm.SocialInsights.Runtime.Services.AjaxService.registerClass('Mscrm.SocialInsights.Runtime.Services.AjaxService');
Mscrm.SocialInsights.Shared.SocialInsightsConstants.registerClass('Mscrm.SocialInsights.Shared.SocialInsightsConstants');
Mscrm.SocialInsights.Shared.SocialInsightsWebService.registerClass('Mscrm.SocialInsights.Shared.SocialInsightsWebService');
Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration.registerClass('Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration');
Mscrm.SocialInsights.Common.Constants.badData = 'for(;;);';
Mscrm.SocialInsights.Common.Constants.socialInsightControlJsonData = '_SocialInsightControlJsonData';
Mscrm.SocialInsights.Common.Constants.isSocialInsightsInstanceAvailable = '_IsSocialInsightsInstanceAvailable';
Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1U = null;
Mscrm.SocialInsights.Common.InternalDataHelper.$1f = null;
Mscrm.SocialInsights.Views.CssClasses.disabled = 'disabled';
Mscrm.SocialInsights.Views.CssClasses.selected = 'selected';
Mscrm.SocialInsights.Views.CssClasses.focused = 'focused';
Mscrm.SocialInsights.Views.ListItemMoveControlsView.moveUpCssClass = 'List-MoveUp';
Mscrm.SocialInsights.Views.ListItemMoveControlsView.moveDownCssClass = 'List-MoveDown';
Mscrm.SocialInsights.Views.ListView.cssClass = 'listview';
Mscrm.SocialInsights.Views.ListViewItem.containerCssClass = 'listview-item-container';
Mscrm.SocialInsights.Views.ListViewItem.indexCssClass = 'listview-item-index';
Mscrm.SocialInsights.Views.ListViewItem.cssClass = 'listview-item';
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3S = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/topicDefault.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3R = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/topicHover.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3T = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/topicSelect.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$2f = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/categoryDefault.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$2e = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/categoryHover.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$2g = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/categorySelect.png');
Mscrm.SocialInsights.Views.SearchTopicItemView.topicNameCssClass = 'searchTopicName';
Mscrm.SocialInsights.Views.SearchTopicItemView.keywordsCssClass = 'searchTopicKeywords';
Mscrm.SocialInsights.Views.SearchTopicItemView.defaultLayout = '<div class=\'searchTopicItem\'>\r\n\t\t\t\t<div class=\'searchTopicName\'></div>\r\n\t\t\t\t<div class=\'searchTopicKeywords\'></div>\r\n\t\t\t</div>';
Mscrm.SocialInsights.Views.SearchTopicItemsListView.listCssClass = 'searchTopicItemsList';
Mscrm.SocialInsights.Views.CreateTopicView.topicTooBroadVisibleClass = 'topicTooBroadVisible';
Mscrm.SocialInsights.Views.WidgetListEditorView.editorCssClass = 'WidgetListEditor';
Mscrm.SocialInsights.Views.WidgetListEditorView.listCssClass = 'WidgetListEditor-List';
Mscrm.SocialInsights.Views.WidgetListEditorView.moveControlsCssClass = 'WidgetListEditor-MoveControls';
Mscrm.SocialInsights.Views.WidgetListEditorView.addButtonCssClass = 'WidgetListEditor-AddButton';
Mscrm.SocialInsights.Views.WidgetListEditorView.moveCaptionCellCssClass = 'WidgetListEditor-MoveCaptionCell';
Mscrm.SocialInsights.Views.WidgetListEditorView.visualNotSupportedCssClass = 'WidgetListEditor-VisualNotSupported';
Mscrm.SocialInsights.Views.WidgetListEditorView.visualNotSupportedInfoIconCssClass = 'WidgetListEditor-VisualNotSupportedInfoIcon';
Mscrm.SocialInsights.Views.WidgetListEditorView.visualNotSupportedMessageCssClass = 'WidgetListEditor-VisualNotSupportedMessage';
Mscrm.SocialInsights.Views.WidgetTypeView.typeCssClass = 'widget-type';
Mscrm.SocialInsights.Views.WidgetTypeView.descriptionCssClass = 'widget-type-description';
Mscrm.SocialInsights.Views.WidgetTypeView.descriptionTextCssClass = 'widget-type-description-text';
Mscrm.SocialInsights.Views.WidgetTypeView.previewCssClass = 'widget-type-preview';
Mscrm.SocialInsights.Views.WidgetTypeView.unsupportedCssClass = 'widget-type-unsupported';
Mscrm.SocialInsights.Views.WidgetTypeView.deleteCssClass = 'WidgetListEditor-DeleteButton';
Mscrm.SocialInsights.Views.WidgetTypeView.defaultLayoutFormat = '<div class=\'widget-type-view\'>\r\n\t\t\t\t<select class=\'widget-type\' title=\'{0}\' tabindex=\'-1\'></select>\r\n\t\t\t\t<div class=\'widget-type-description\'>\r\n\t\t\t\t\t<div class=\'widget-type-description-cell\'>\r\n\t\t\t\t\t\t<div class=\'widget-type-description-text\' tabindex=\'-1\'><div/></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img class=\'widget-type-preview\'>\r\n\t\t\t\t<button class=\'{1}\' title=\'{2}\' tabindex=\'-1\'><img alt=\'{2}\'/></button>\r\n\t\t\t</div>';
Mscrm.Views.CrmMoveIcons.enabledUpArrowInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Arrow_Up_active_30.png');
Mscrm.Views.CrmMoveIcons.disabledUpArrowInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Arrow_Up_inactive_30.png');
Mscrm.Views.CrmMoveIcons.hoverUpArrowInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Arrow_Up_active_hover_30.png');
Mscrm.Views.CrmMoveIcons.enabledDownArrowInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Arrow_Down_active_30.png');
Mscrm.Views.CrmMoveIcons.disabledDownArrowInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Arrow_Down_inactive_30.png');
Mscrm.Views.CrmMoveIcons.hoverDownArrowInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Arrow_Down_active_hover_30.png');
Mscrm.Views.CrmMoveIcons.enabledDeleteInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Delete_visualization_12.png');
Mscrm.Views.CrmMoveIcons.hoverDeleteInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Delete_visualization_hover_12.png');
Mscrm.Views.CrmMoveIcons.enabledAddInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Add_20.png');
Mscrm.Views.CrmMoveIcons.hoverAddInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Add_hover_20.png');
Mscrm.Views.CrmMoveIcons.disabledAddInfo = Mscrm.Views.CrmMoveIcons.$8('/_imgs/SocialInsight/Add_inactive_20.png');
Mscrm.Views.CrmMoveControlsView.moveCaptionCssClass = 'List-MoveCaption';
Mscrm.SocialInsights.Configuration.Models.WidgetRestriction.none = 'NONE';
Mscrm.SocialInsights.Configuration.Models.WidgetRestriction.singleSearchItem = 'SINGLE_SEARCH_ITEM';
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.nullEstimateResponse = 'NullEstimateResponse';
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.topicTooBroad = 'TopicTooBroad';
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler = null;
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1H = null;
Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth = 500;
Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight = 286;
Mscrm.SocialInsights.Runtime.Services.AjaxService.requestTimeout = 120000;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$20 = 0;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$n = {};
Mscrm.SocialInsights.Runtime.Services.AjaxService.$N = null;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$2U = false;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$$cctor();
//@ sourceMappingURL=file:///c:/bt/160165/Target/retail/amd64/SocialInsights.js.srcmap
