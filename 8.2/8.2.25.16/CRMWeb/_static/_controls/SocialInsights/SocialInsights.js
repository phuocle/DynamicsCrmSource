Type.registerNamespace('Mscrm');

Mscrm.Lazy$1 = function(generator) {
    this.$31_0 = ((this.$$gta['Mscrm.Lazy$1']['T'] === Number || Type.isEnum(this.$$gta['Mscrm.Lazy$1']['T'])) ? 0 : (this.$$gta['Mscrm.Lazy$1']['T'] === Boolean) ? false : null);
    if (IsNull(generator)) {
        throw Error.argumentNull('generator');
    }
    this.$1X_0 = generator;
}
Mscrm.Lazy$1.$$ = function(T) {
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
    $1X_0: null,
    
    get_hasValue: function() {
        return IsNull(this.$1X_0);
    },
    
    get_value: function() {
        if (this.get_hasValue()) {
            return this.$31_0;
        }
        this.$31_0 = this.$1X_0();
        this.$1X_0 = null;
        return this.$31_0;
    }
}


Type.registerNamespace('Mscrm.SocialInsights');

Mscrm.SocialInsights.SocialInsightsConfigurationService = function() {
}
Mscrm.SocialInsights.SocialInsightsConfigurationService.prototype = {
    
    createOrUpdate: function(configuration) {
        var $v_0 = JSON.stringify(configuration);
        var $v_1 = this.$2H_0('CreateOrUpdateSocialInsightsConfiguration');
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
    
    retrieve: function(configuration) {
        var $v_0 = this.$2H_0('RetrieveSocialInsightsConfiguration');
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
    
    resetAllSocialInsightsData: function() {
        var $v_0 = this.$2H_0('ResetAllSocialInsightsData');
        return $v_0.Execute().Success;
    },
    
    deleteCommand: function(configuration) {
        var $v_0 = JSON.stringify(configuration);
        var $v_1 = this.$2H_0('DeleteSocialInsightsConfiguration');
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
    
    $2H_0: function($p0) {
        return new RemoteCommand('SocialInsightsWebService', $p0, null);
    }
}


Mscrm.SocialInsights.SocialInsightUtility = function() {
}
Mscrm.SocialInsights.SocialInsightUtility.extractDialogArgumentsFromInlineDialog = function() {
    var $v_0 = window.parent.frameElement.parentNode.id + '_childDialogArguments';
    var $v_1 = window.parent.inlineDialogArguments;
    var $v_2 = window.parent.opener;
    var $v_3 = window.parent.isInlined;
    var $v_4 = window.parent.isMobileClient;
    if (IsNull($v_1)) {
        var $v_5 = window.parent;
        var $v_6 = $v_5.parent;
        while ($v_6 !== $v_5) {
            $v_5 = $v_6;
            $v_6 = $v_5.parent;
        }
        $v_1 = $v_6[$v_0];
        $v_2 = $v_6.opener;
        $v_3 = $v_6.isInlined;
        $v_4 = $v_6.isMobileClient;
    }
    window.inlineDialogArguments = $v_1;
    window.inlineDialogId = $v_0;
    window.opener = $v_2;
    window.isInlined = $v_3;
    window.isMobileClient = $v_4;
}
Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory = function(func, parameters) {
    return function(retValue) { parameters.unshift(retValue); return func.apply(null, parameters); };
}


Type.registerNamespace('Mscrm.SocialInsights.Common');

Mscrm.SocialInsights.Common.SocialInsightControlJsonWrapper = function() {
}
Mscrm.SocialInsights.Common.SocialInsightControlJsonWrapper.prototype = {
    RootUrl: 'https://cs-dev-01-web.cloudapp.net/',
    OrgInfo: '1/',
    VersionInfo: 'version/1.0/',
    RestUrl: null
}


Mscrm.SocialInsights.Common.Constants = function() {
}


Mscrm.SocialInsights.Common.DependencyInstanceContainer = function() {
}
Mscrm.SocialInsights.Common.DependencyInstanceContainer.get_urlServiceInstance = function() {
    if (IsNull(Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1p)) {
        Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1p = new Mscrm.SocialInsights.Runtime.Services.UrlService();
    }
    return Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1p;
}
Mscrm.SocialInsights.Common.DependencyInstanceContainer.set_urlServiceInstance = function(value) {
    Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1p = value;
    return value;
}


Mscrm.SocialInsights.Common.Dialogs = function() {
}
Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze = function($p0, $p1) {
    var $v_0 = Xrm.Internal.getErrorMessage(-2147090431);
    if (!IsNull($p0)) {
        var $v_1 = ' External Call Result: ' + $p0.result + ' Error Code: ' + $p0.errorCode + ' Error: ' + $p0.error + ' Id: ' + $p0.id;
        $v_0 += $v_1;
    }
    if (!isNullOrEmptyString($p1)) {
        var $v_2 = ' External Call Error: ' + $p1;
        $v_0 += $v_2;
    }
    Xrm.Internal.openErrorDialog(-2147090431, $v_0);
}


Mscrm.SocialInsights.Common.Disposable = function() {
}
Mscrm.SocialInsights.Common.Disposable.prototype = {
    _disposed: false,
    
    dispose: function() {
        if (this._disposed) {
            return;
        }
        this._disposed = true;
        this.actualDispose();
        Mscrm.Utilities.destroyObject(this);
    }
}


Mscrm.SocialInsights.Common.InternalDataHelper = function() {
}
Mscrm.SocialInsights.Common.InternalDataHelper.get_$g = function() {
    if (!Mscrm.SocialInsights.Common.InternalDataHelper.$1O) {
        var $v_0 = window._SocialInsightControlJsonData;
        if (!IsNull($v_0)) {
            Mscrm.SocialInsights.Common.InternalDataHelper.$1O = $P_CRM.parseJSON(($v_0).substr(8));
        }
    }
    return Mscrm.SocialInsights.Common.InternalDataHelper.$1O;
}
Mscrm.SocialInsights.Common.InternalDataHelper.set_$g = function($p0) {
    if (!IsNull($p0)) {
        Mscrm.SocialInsights.Common.InternalDataHelper.$1O = $p0;
    }
    return $p0;
}


Type.registerNamespace('Mscrm.SocialInsights.Views');

Mscrm.SocialInsights.Views.BaseView = function(uiElement) {
    Mscrm.SocialInsights.Views.BaseView.initializeBase(this);
    if (IsNull(uiElement)) {
        throw Error.argumentNull('uiElement');
    }
    this.$2x_1 = uiElement;
}
Mscrm.SocialInsights.Views.BaseView.prototype = {
    $2x_1: null,
    
    get_uiElement: function() {
        return this.$2x_1;
    },
    
    find: function(subName) {
        if (IsNull(subName)) {
            throw Error.argumentNull('subName');
        }
        return this.$2x_1.find('.' + subName);
    },
    
    findSingle: function(subItemName, notSingleMessage) {
        var $v_0 = this.find(subItemName);
        Mscrm.CrmDebug.assert($v_0.length === 1, notSingleMessage);
        return $v_0;
    },
    
    findOptional: function(subItemName, multipleMessage) {
        var $v_0 = this.find(subItemName);
        Mscrm.CrmDebug.assert($v_0.length <= 1, multipleMessage);
        return $v_0;
    }
}


Mscrm.SocialInsights.Views.ContainerView = function(uiElement) {
    this.$1R_2 = [];
    Mscrm.SocialInsights.Views.ContainerView.initializeBase(this, [ uiElement ]);
}
Mscrm.SocialInsights.Views.ContainerView.prototype = {
    
    add: function(view) {
        if (IsNull(view)) {
            throw Error.argumentNull('view');
        }
        this.get_container().append(view.get_uiElement());
        this.$1R_2[this.$1R_2.length] = view;
    },
    
    dispose: function() {
        Mscrm.SocialInsights.Common.Disposable.prototype.dispose.call(this);
    },
    
    actualDispose: function() {
        for (var $v_0 = 0; $v_0 < this.$1R_2.length; $v_0++) {
            var $v_1 = this.$1R_2[$v_0];
            $v_1.dispose();
        }
    }
}


Mscrm.SocialInsights.Views.CssClasses = function() {
}


Mscrm.SocialInsights.Views.ListItemMoveControlsView = function(uiElement, listView) {
    this.$$d_$5h_2 = Function.createDelegate(this, this.$5h_2);
    this.$$d_$5R_2 = Function.createDelegate(this, this.$5R_2);
    this.$$d_$5T_2 = Function.createDelegate(this, this.$5T_2);
    Mscrm.SocialInsights.Views.ListItemMoveControlsView.initializeBase(this, [ uiElement ]);
    if (IsNull(listView)) {
        throw Error.argumentNull('listView');
    }
    this.$0_2 = listView;
    this.$7_2 = this.find('List-MoveUp');
    this.$6_2 = this.find('List-MoveDown');
    this.$L_2();
}
Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype = {
    
    initialize: function() {
        this.$3u_2();
    },
    
    get_canMoveUp: function() {
        return !this.$7_2.hasClass('disabled');
    },
    
    get_canMoveDown: function() {
        return !this.$6_2.hasClass('disabled');
    },
    
    get_moveUpButton: function() {
        return this.$7_2;
    },
    
    get_moveDownButton: function() {
        return this.$6_2;
    },
    
    switchUpButton: function(enable) {
        this.$7_2.toggleClass('disabled', !enable);
    },
    
    switchDownButton: function(enable) {
        this.$6_2.toggleClass('disabled', !enable);
    },
    
    $7_2: null,
    $6_2: null,
    $0_2: null,
    
    $3u_2: function() {
        var $v_0 = this.$0_2.$5_2;
        var $v_1 = $v_0 >= 0;
        this.switchUpButton($v_0 > 0);
        this.switchDownButton($v_0 + 1 < this.$0_2.get_itemCount() && $v_1);
    },
    
    $5R_2: function($p0) {
        if (this.$6_2.hasClass('disabled')) {
            return;
        }
        this.$0_2.move(this.$0_2.$5_2, this.$0_2.$5_2 + 1);
        if (this.$0_2.$5_2 + 1 === this.$0_2.get_itemCount() && !this.$7_2.hasClass('disabled')) {
            this.$7_2.focus();
        }
        $p0.preventDefault();
        $p0.stopImmediatePropagation();
    },
    
    $5T_2: function($p0) {
        if (this.$7_2.hasClass('disabled')) {
            return;
        }
        this.$0_2.move(this.$0_2.$5_2, this.$0_2.$5_2 - 1);
        if (!this.$0_2.$5_2 && !this.$6_2.hasClass('disabled')) {
            this.$6_2.focus();
        }
        $p0.preventDefault();
        $p0.stopImmediatePropagation();
    },
    
    $5h_2: function($p0, $p1) {
        this.$3u_2();
    },
    
    $L_2: function() {
        this.$7_2.click(this.$$d_$5T_2);
        this.$6_2.click(this.$$d_$5R_2);
        this.$0_2.add_selectionChanged(this.$$d_$5h_2);
    },
    
    $P_2: function() {
        this.$0_2.remove_selectionChanged(this.$$d_$5h_2);
        this.$7_2.unbind('click', this.$$d_$5T_2);
        this.$6_2.unbind('click', this.$$d_$5R_2);
    },
    
    actualDispose: function() {
        this.$P_2();
    }
}


Mscrm.SocialInsights.Views.ListView = function(uiElement, itemViewModels, itemViewFactory) {
    this.$$d_$3m_2 = Function.createDelegate(this, this.$3m_2);
    this.$$d_$5Z_2 = Function.createDelegate(this, this.$5Z_2);
    this.$$d_$5Y_2 = Function.createDelegate(this, this.$5Y_2);
    this.$2_2 = [];
    this.$5_2 = -1;
    this.$I_2 = new Sys.EventHandlerList();
    Mscrm.SocialInsights.Views.ListView.initializeBase(this, [ uiElement ]);
    if (IsNull(itemViewModels)) {
        throw Error.argumentNull('viewModel');
    }
    if (IsNull(itemViewFactory)) {
        throw Error.argumentNull('itemViewFactory');
    }
    this.$A_2 = itemViewModels;
    this.$1d_2 = itemViewFactory;
}
Mscrm.SocialInsights.Views.ListView.$4C = function($p0, $p1, $p2) {
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
Mscrm.SocialInsights.Views.ListView.createDefaultLayout = function(itemViewModels, itemViewFactory) {
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
    
    initialize: function() {
        for (var $v_0 = 0; $v_0 < this.$A_2.length; $v_0++) {
            var $v_1 = this.$A_2[$v_0];
            this.$3K_2($v_1);
        }
        this.$L_2();
    },
    
    get_viewModel: function() {
        return this.$A_2;
    },
    
    get_itemViewFactory: function() {
        return this.$1d_2;
    },
    
    set_itemViewFactory: function(value) {
        if (IsNull(value)) {
            throw Error.argumentNull('ItemViewFactory');
        }
        this.$1d_2 = value;
        return value;
    },
    
    get_itemCount: function() {
        return this.$2_2.length;
    },
    
    get_item: function(index) {
        return this.$2_2[index];
    },
    
    get_selectedIndex: function() {
        return this.$5_2;
    },
    
    set_selectedIndex: function(value) {
        if (value < 0) {
            this.$U_2(null);
            return value;
        }
        this.$1P_2(value, 'SelectedIndex');
        var $v_0 = this.$2_2[value];
        this.$U_2($v_0.get_uiElement()[0]);
        return value;
    },
    
    getItemIndex: function(ui) {
        if (IsNull(ui)) {
            throw Error.argumentNull('ui');
        }
        if (ui.length !== 1) {
            throw Error.argument('ui', 'Parameter must refer to exactly one DOM element');
        }
        var $v_0 = this.$39_2(ui[0]);
        if ($v_0 >= 0) {
            return $v_0;
        }
        ui = ui.parents();
        for (var $v_1 = 0; $v_1 < ui.length; $v_1++) {
            $v_0 = this.$39_2(ui[$v_1]);
            if ($v_0 >= 0) {
                return $v_0;
            }
        }
        return -1;
    },
    
    add_selectionChanged: function(value) {
        this.$I_2.addHandler('SelectionChanged', value);
    },
    
    remove_selectionChanged: function(value) {
        this.$I_2.removeHandler('SelectionChanged', value);
    },
    
    add_itemAdded: function(value) {
        this.$I_2.addHandler('ItemAdded', value);
    },
    
    remove_itemAdded: function(value) {
        this.$I_2.removeHandler('ItemAdded', value);
    },
    
    add_itemRemoved: function(value) {
        this.$I_2.addHandler('ItemRemoved', value);
    },
    
    remove_itemRemoved: function(value) {
        this.$I_2.removeHandler('ItemRemoved', value);
    },
    
    add: function(itemViewModel) {
        this.$A_2[this.$A_2.length] = itemViewModel;
        var $v_0 = this.$3K_2(itemViewModel);
        this.$2N_2('ItemAdded', Sys.EventArgs.Empty);
        return $v_0;
    },
    
    move: function(originalIndex, newIndex) {
        this.$1P_2(originalIndex, 'originalIndex');
        this.$1P_2(newIndex, 'newIndex');
        if (originalIndex === newIndex) {
            return;
        }
        this.$5S_2(originalIndex, newIndex);
        var $v_0 = this.$A_2[originalIndex];
        var $v_1 = this.$2_2[originalIndex];
        var $v_2 = (this.$5_2 < 0) ? null : this.$2_2[this.$5_2];
        Mscrm.SocialInsights.Views.ListView.$4C(originalIndex, newIndex, this.$A_2);
        Mscrm.SocialInsights.Views.ListView.$4C(originalIndex, newIndex, this.$2_2);
        this.$A_2[newIndex] = $v_0;
        this.$2_2[newIndex] = $v_1;
        this.$3Z_2(originalIndex, newIndex);
        this.$3a_2(originalIndex, newIndex, $v_2);
        this.scrollItemIntoView(newIndex, false);
    },
    
    removeAt: function(index) {
        this.$1P_2(index, 'index');
        this.$2z_2(index);
        var $v_0 = this.$2_2[index];
        var $v_1 = (this.$5_2 < 0) ? null : this.$2_2[this.$5_2];
        $v_0.get_uiElement().detach();
        $v_0.dispose();
        Array.removeAt(this.$A_2, index);
        Array.removeAt(this.$2_2, index);
        if (index < this.get_itemCount()) {
            this.$3Z_2(index, this.get_itemCount() - 1);
        }
        if ($v_1 !== $v_0) {
            this.$3a_2(index, this.get_itemCount(), $v_1);
        }
        else {
            this.$4t_2(index);
        }
        this.$2N_2('ItemRemoved', Sys.EventArgs.Empty);
    },
    
    scrollItemIntoView: function(index, forceNearTop) {
        this.$1P_2(index, 'index');
        var $v_0 = (this.$2_2[index]).get_uiElement();
        var $v_1 = $v_0.parent();
        var $v_2 = null;
        if (forceNearTop || $v_0.position().top - $v_1.position().top < 0) {
            $v_2 = true;
        }
        else if ($v_0.position().top + $v_0.height() > $v_1.position().top + $v_1.height()) {
            $v_2 = false;
        }
        if (($v_2 != null)) {
            $v_0[0].scrollIntoView($v_2);
        }
    },
    
    get_itemViewModels: function() {
        var $$t_0;
        return ($$t_0 = this.$A_2).concat.call($$t_0);
    },
    
    $A_2: null,
    $1d_2: null,
    
    $4t_2: function($p0) {
        if ($p0 < this.get_itemCount()) {
            this.$U_2(this.get_item($p0).get_uiElement()[0]);
        }
        else if ($p0 > 0) {
            this.$U_2(this.get_item($p0 - 1).get_uiElement()[0]);
        }
        else {
            this.$U_2(null);
        }
    },
    
    $3K_2: function($p0) {
        var $v_0 = this.$2_2.length;
        var $v_1 = Mscrm.SocialInsights.Views.ListViewItem.createDefaultLayout();
        var $v_2 = this.$1d_2($p0);
        $v_1.$o_3 = $v_2;
        $v_1.add($v_2);
        var $v_3 = ($v_0 + 1).toString();
        $v_1.index.text($v_3);
        this.$2_2[$v_0] = $v_1;
        this.get_uiElement().append($v_1.get_uiElement());
        $v_1.get_uiElement().click(this.$$d_$5Y_2);
        $v_1.get_uiElement().keydown(this.$$d_$5Z_2);
        return $v_1;
    },
    
    $39_2: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$2_2.length; $v_0++) {
            var $v_1 = this.$2_2[$v_0];
            if ($v_1.get_uiElement()[0] === $p0) {
                return $v_0;
            }
        }
        return -1;
    },
    
    $5Y_2: function($p0) {
        if (!this.get_uiElement().has($p0.currentTarget).length) {
            return;
        }
        this.$U_2($p0.currentTarget);
        $p0.preventDefault();
        $p0.stopPropagation();
    },
    
    $U_2: function($p0) {
        this.$5_2 = -1;
        for (var $v_0 = 0; $v_0 < this.$2_2.length; $v_0++) {
            var $v_1 = this.$2_2[$v_0];
            var $v_2 = $v_1.get_uiElement()[0] === $p0;
            if ($v_2) {
                this.$5_2 = $v_0;
            }
            $v_1.set_isFocusable($v_2);
            $v_1.get_uiElement().toggleClass('selected', $v_2);
        }
        this.$2N_2('SelectionChanged', Sys.EventArgs.Empty);
    },
    
    $41_2: function($p0, $p1) {
        var $v_0 = this.$39_2($p0);
        var $v_1 = $p1 + $v_0;
        if ($v_1 < 0 || $v_1 >= this.get_itemCount()) {
            return;
        }
        this.set_selectedIndex($v_1);
        this.get_item($v_1).get_uiElement().focus();
    },
    
    $5Z_2: function($p0) {
        if ($p0.currentTarget !== $p0.target) {
            return;
        }
        switch ($p0.which) {
            case 13:
                this.$U_2($p0.currentTarget);
                break;
            case 27:
                this.$U_2(null);
                this.get_uiElement().focus();
                break;
            case 38:
                this.$41_2($p0.currentTarget, -1);
                break;
            case 40:
                this.$41_2($p0.currentTarget, 1);
                break;
            default:
                return;
        }
        $p0.preventDefault();
        $p0.stopPropagation();
    },
    
    $3Z_2: function($p0, $p1) {
        var $v_0 = Math.min($p0, $p1);
        var $v_1 = Math.max($p0, $p1);
        for (var $v_2 = $v_0; $v_2 <= $v_1; $v_2++) {
            var $v_3 = this.$2_2[$v_2];
            var $v_4 = ($v_2 + 1).toString();
            $v_3.index.text($v_4);
        }
    },
    
    $3a_2: function($p0, $p1, $p2) {
        if (this.$5_2 < Math.min($p0, $p1) || this.$5_2 > Math.max($p0, $p1)) {
            return;
        }
        this.$U_2($p2.get_uiElement()[0]);
    },
    
    $5S_2: function($p0, $p1) {
        var $v_0 = this.$2_2[$p0];
        var $v_1 = this.$2_2[$p1];
        if ($p0 > $p1) {
            $v_0.get_uiElement().insertBefore($v_1.get_uiElement());
        }
        else {
            $v_0.get_uiElement().insertAfter($v_1.get_uiElement());
        }
    },
    
    $2N_2: function($p0, $p1) {
        if (IsNull(this.$I_2)) {
            return;
        }
        var $v_0 = this.$I_2.getHandler($p0);
        if (!IsNull($v_0)) {
            $v_0(this, $p1);
        }
    },
    
    $1P_2: function($p0, $p1) {
        if ($p0 < 0 || $p0 >= this.get_itemCount()) {
            throw Error.argumentOutOfRange($p1);
        }
    },
    
    $3m_2: function($p0) {
        if ($p0.target !== this.get_uiElement()[0] || !this.get_itemCount() || this.$5_2 >= 0) {
            return;
        }
        this.get_item(0).set_isFocusable(true);
        this.get_item(0).get_uiElement().focus();
    },
    
    $L_2: function() {
        this.get_uiElement().bind('focusin', this.$$d_$3m_2);
    },
    
    $P_2: function() {
        this.get_uiElement().unbind('focusin', this.$$d_$3m_2);
    },
    
    $2z_2: function($p0) {
        var $v_0 = this.get_item($p0).get_uiElement();
        $v_0.unbind('click', this.$$d_$5Y_2);
        $v_0.unbind('keydown', this.$$d_$5Z_2);
    },
    
    actualDispose: function() {
        this.$P_2();
        for (var $v_0 = 0; $v_0 < this.$2_2.length; $v_0++) {
            this.$2z_2($v_0);
            this.get_item($v_0).dispose();
        }
    }
}


Mscrm.SocialInsights.Views.ListViewItem = function(uiElement) {
    this.$$d_$5X_3 = Function.createDelegate(this, this.$5X_3);
    this.$$d_$3m_3 = Function.createDelegate(this, this.$3m_3);
    Mscrm.SocialInsights.Views.ListViewItem.initializeBase(this, [ uiElement ]);
    this.$35_3 = this.findSingle('listview-item-container', 'There must be exactly one item container');
    this.index = this.find('listview-item-index');
    this.$L_3();
}
Mscrm.SocialInsights.Views.ListViewItem.createDefaultLayout = function() {
    var $v_0 = $P_CRM('<div class=\'listview-item\' tabindex=\'-1\'>\r\n\t\t\t\t<div class=\'listview-item-index\'></div>\r\n\t\t\t\t<div class=\'listview-item-container\'></div>\r\n\t\t\t</div>');
    return new Mscrm.SocialInsights.Views.ListViewItem($v_0);
}
Mscrm.SocialInsights.Views.ListViewItem.prototype = {
    $35_3: null,
    index: null,
    $o_3: null,
    
    get_itemView: function() {
        return this.$o_3;
    },
    
    get_isFocusable: function() {
        return this.get_uiElement().attr('tabindex') !== '-1';
    },
    
    set_isFocusable: function(value) {
        var $v_0 = (value) ? '0' : '-1';
        this.get_uiElement().attr('tabindex', $v_0);
        if (Mscrm.SocialInsights.Common.Views.ISupportFocus.isInstanceOfType(this.$o_3)) {
            (this.$o_3).set_isFocusable(value);
        }
        return value;
    },
    
    get_container: function() {
        return this.$35_3;
    },
    
    $3m_3: function($p0) {
        this.get_uiElement().addClass('focused');
    },
    
    $5X_3: function($p0) {
        this.get_uiElement().removeClass('focused');
    },
    
    $L_3: function() {
        this.get_uiElement().bind('focusin', this.$$d_$3m_3);
        this.get_uiElement().bind('focusout', this.$$d_$5X_3);
    },
    
    $P_3: function() {
        this.get_uiElement().unbind('focusin', this.$$d_$3m_3);
        this.get_uiElement().unbind('focusout', this.$$d_$5X_3);
    },
    
    actualDispose: function() {
        this.$P_3();
        Mscrm.SocialInsights.Views.ContainerView.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Views.SpinnerView = function(uiElement) {
    Mscrm.SocialInsights.Views.SpinnerView.initializeBase(this, [ uiElement ]);
    this.$1H_2 = this.find('spinner-AnimationContainer img');
}
Mscrm.SocialInsights.Views.SpinnerView.createDefaultLayout = function() {
    var $v_0 = $P_CRM('<div class=\'spinner-Container\' style=\'display: none;\' tabindex=\'0\'>\r\n\t\t\t\t<div class=\'spinner-MessageRow\'>\r\n\t\t\t\t\t<div class=\'spinner-MessageCell\'>\r\n\t\t\t\t\t\t<div class=\'spinner-AnimationContainer\'><img class=\'spinner-Animation\'></img></div>\r\n\t\t\t\t\t\t<div class=\'spinner-Title\'></div>\r\n\t\t\t\t\t\t<div class=\'spinner-Action\'><div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>');
    return new Mscrm.SocialInsights.Views.SpinnerView($v_0);
}
Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault = function() {
    var $v_0 = Mscrm.SocialInsights.Views.SpinnerView.createDefaultLayout();
    $v_0.setTitle(Xrm.Internal.getResourceString('LOCID_NETBREEZE_WAIT_TITLE'));
    var $v_1 = Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processing_loader.gif');
    var $v_2 = Mscrm.ImageStrip.getImageInfo($v_1);
    $v_0.setAnimation($v_2);
    $v_0.setAction(Xrm.Internal.getResourceString('LOCID_NETBREEZE_COMMUNICATING'));
    return $v_0;
}
Mscrm.SocialInsights.Views.SpinnerView.prototype = {
    
    show: function() {
        this.get_uiElement().show();
        if (IsNull(this.$1I_2)) {
            this.$1I_2 = new Mscrm.SocialInsights.Common.Views.KeepFocusBehavior(this.get_uiElement()[0], this.get_uiElement()[0], this.get_uiElement()[0]);
            var $$t_0 = this;
            this.$3I_2 = window.setTimeout(function() {
                $P_CRM(document.body).focus();
            }, 0);
        }
    },
    
    hide: function() {
        this.$3Y_2();
        this.get_uiElement().hide();
    },
    
    $3Y_2: function() {
        if (!IsNull(this.$1I_2)) {
            this.$1I_2.dispose();
            this.$1I_2 = null;
            window.clearTimeout(this.$3I_2);
        }
    },
    
    setAnimation: function(imageInfo) {
        if (IsNull(imageInfo)) {
            throw Error.argumentNull('imageInfo');
        }
        this.$4W_2();
        this.$1H_2.attr('src', imageInfo.source);
        this.$1H_2.addClass(imageInfo.cssClass);
    },
    
    setTitle: function(title) {
        var $v_0 = this.find('spinner-Title');
        $v_0.text(title);
        this.$1H_2.attr('alt', title);
    },
    
    setAction: function(actionDescription) {
        var $v_0 = this.find('spinner-Action');
        $v_0.text(actionDescription);
        $v_0.attr('title', actionDescription);
    },
    
    $1H_2: null,
    $2I_2: null,
    $1I_2: null,
    $3I_2: 0,
    $32_2: 0,
    
    $4W_2: function() {
        if (IsNull(this.$2I_2)) {
            return;
        }
        this.$1H_2.removeClass(this.$2I_2.cssClass);
        this.$2I_2 = null;
    },
    
    actualDispose: function() {
        this.$3Y_2();
    }
}


Mscrm.SocialInsights.Views.ChooseTopicTypeView = function(uiElement) {
    this.$$d_$52_3 = Function.createDelegate(this, this.$52_3);
    this.$$d_$56_3 = Function.createDelegate(this, this.$56_3);
    this.$$d_$3n_3 = Function.createDelegate(this, this.$3n_3);
    this.$$d_$4s_3 = Function.createDelegate(this, this.$4s_3);
    this.$$d_$5F_3 = Function.createDelegate(this, this.$5F_3);
    this.$s_3 = new Mscrm.Views.IconHoverBehavior();
    this.$m_3 = new Mscrm.Views.IconHoverBehavior();
    Mscrm.SocialInsights.Views.ChooseTopicTypeView.initializeBase(this, [ uiElement ]);
    this.checkSignInAndInitialize(this.$$d_$5F_3, '/SocialInsight/ConfigurationWizard/ChooseTopicTypePage.aspx');
}
Mscrm.SocialInsights.Views.ChooseTopicTypeView.run = function() {
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Views.ChooseTopicTypeView($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Views.ChooseTopicTypeView.skip = function() {
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(1);
}
Mscrm.SocialInsights.Views.ChooseTopicTypeView.prototype = {
    
    $5F_3: function() {
        this.$s_3.disabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$4K.get_value();
        this.$s_3.enabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$4J.get_value();
        this.$s_3.hover = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$4I.get_value();
        this.$s_3.attach(this.get_$2w_3());
        this.$m_3.disabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3Q.get_value();
        this.$m_3.enabled = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3P.get_value();
        this.$m_3.hover = Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3O.get_value();
        this.$m_3.attach(this.get_$2B_3());
        this.$a_3 = this.get_uiElement().find('input[name=\'radio\']');
        Mscrm.CrmDebug.assert(this.$a_3.length === 2);
        this.$L_3();
        this.$42_3();
        if (!this.get_currentDataItemType()) {
            this.$6H_3();
        }
    },
    
    save: function() {
        this.set_currentDataItemType(this.get_$40_3());
        return true;
    },
    
    $a_3: null,
    
    get_$40_3: function() {
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
    
    $3n_3: function($p0) {
        switch (this.get_$40_3()) {
            case 0:
                this.$3C_3(false, false);
                break;
            case 2:
                this.$3C_3(false, true);
                break;
            case 1:
                this.$3C_3(true, false);
                break;
        }
    },
    
    $3C_3: function($p0, $p1) {
        this.$s_3.toggle(this.get_$2w_3(), !$p0);
        this.$m_3.toggle(this.get_$2B_3(), !$p1);
        this.get_$2w_3().toggleClass('ui-state-active disabled', $p0);
        this.get_$2B_3().toggleClass('ui-state-active disabled', $p1);
        var $v_0 = $p0 || $p1;
        WizardSetButtonEnabled($v_0, _WizardButtonsEnum.NEXTBUTTON);
        this.keepFocus.$u_1 = ($v_0) ? this.get_uiElement().find('#buttonNext')[0] : this.get_uiElement().find('#buttonSettings')[0];
    },
    
    $42_3: function() {
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
        this.$3n_3(null);
    },
    
    get_$2w_3: function() {
        return this.get_uiElement().find('.topicLabel');
    },
    
    get_$2B_3: function() {
        return this.get_uiElement().find('.categoryLabel');
    },
    
    $6H_3: function() {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner();
        this.$3v_2().always(this.$$d_$4s_3);
    },
    
    $4s_3: function($p0) {
        this.$42_3();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
    },
    
    $L_3: function() {
        this.$a_3.change(this.$$d_$3n_3);
        this.$a_3.keydown(this.$$d_$56_3);
        this.$a_3.siblings('label').dblclick(this.$$d_$52_3);
    },
    
    $P_3: function() {
        if (!IsNull(this.$a_3)) {
            this.$a_3.unbind('change', this.$$d_$3n_3);
            this.$a_3.unbind('keydown', this.$$d_$56_3);
            this.$a_3.siblings('label').unbind('dblclick', this.$$d_$52_3);
        }
    },
    
    $52_3: function($p0) {
        this.$3q_3();
    },
    
    $56_3: function($p0) {
        if ($p0.which !== 13) {
            return;
        }
        this.$3q_3();
    },
    
    $3q_3: function() {
        this.save();
        this.wizardNavigate(_WizardNavigateEnum.NEXT);
    },
    
    actualDispose: function() {
        this.$P_3();
        if (!IsNull(this.$s_3)) {
            this.$s_3.detach(this.get_$2w_3());
        }
        if (!IsNull(this.$m_3)) {
            this.$m_3.detach(this.get_$2B_3());
        }
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Views.MslSignInView = function(uiElement) {
    this.$$d_$5i_3 = Function.createDelegate(this, this.$5i_3);
    this.$S_3 = Mscrm.SocialInsights.Shared.SignInUtility.maxSignInChecks;
    Mscrm.SocialInsights.Views.MslSignInView.initializeBase(this, [ uiElement ]);
    $P_CRM('#buttonSettings').hide();
    this.$2k_3 = $P_CRM('#mslSignInLink');
    this.$2l_3 = $P_CRM('#SignInRequiredMessage');
    this.$2j_3 = $P_CRM('#SessionExpiredSignInRequiredMessage');
    this.$25_3 = $P_CRM('#AddToTrustedSitesMessageForIEOnly');
    this.$2l_3.show();
    this.$2j_3.hide();
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        this.$25_3.show();
    }
    else {
        this.$25_3.hide();
    }
    WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
    this.$L_3();
}
Mscrm.SocialInsights.Views.MslSignInView.run = function() {
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Views.MslSignInView($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return $v_0;
}
Mscrm.SocialInsights.Views.MslSignInView.prototype = {
    $2k_3: null,
    $2l_3: null,
    $2j_3: null,
    $25_3: null,
    $T_3: false,
    
    save: function() {
        return true;
    },
    
    wizardNavigate: function(navigationTarget) {
        this.originalWizardNavigate(navigationTarget);
    },
    
    actualDispose: function() {
        this.$P_3();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    },
    
    $L_3: function() {
        this.$2k_3.click(this.$$d_$5i_3);
    },
    
    $P_3: function() {
        this.$2k_3.unbind('click', this.$$d_$5i_3);
    },
    
    $5i_3: function($p0) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner(Xrm.Internal.getResourceString('LOCID_NETBREEZE_SPINNER_SIGNIN'));
        this.$S_3 = Mscrm.SocialInsights.Shared.SignInUtility.maxSignInChecks;
        this.$3S_3();
    },
    
    $3S_3: function() {
        var $v_0 = false;
        var $v_1 = 0;
        var $$t_5 = this;
        $v_1 = window.setTimeout(function() {
            Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn().done(function($p2_0) {
                $v_0 = $p2_0;
            }).fail(function($p2_0) {
                $v_0 = false;
            }).always(function($p2_0) {
                window.clearTimeout($v_1);
                if ($v_0) {
                    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
                    $$t_5.wizardNavigate(_WizardNavigateEnum.NEXT);
                    $$t_5.$T_3 = false;
                }
                else {
                    if ($$t_5.$S_3 === Mscrm.SocialInsights.Shared.SignInUtility.maxSignInChecks) {
                        Mscrm.SocialInsights.Shared.SignInUtility.launchSignIn();
                    }
                    $$t_5.$T_3 = true;
                    $$t_5.$S_3--;
                    if ($$t_5.$S_3 > 0) {
                        $$t_5.$3S_3();
                    }
                    else {
                        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
                        $$t_5.$2l_3.hide();
                        $$t_5.$2j_3.show();
                        $$t_5.$T_3 = false;
                        WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
                    }
                }
            });
        }, (this.$T_3) ? Mscrm.SocialInsights.Shared.SignInUtility.signInCheckInterval : 0);
    }
}


Mscrm.SocialInsights.Views.SearchTopicItemView = function(uiElement, viewModel) {
    Mscrm.SocialInsights.Views.SearchTopicItemView.initializeBase(this, [ uiElement ]);
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    this.$D_2 = viewModel;
    this.$2a_2 = this.findSingle('searchTopicName', 'There must be only one name element');
    this.$2Z_2 = this.findSingle('searchTopicKeywords', 'There must be only one keyword element');
    uiElement.attr('item-id', CrmEncodeDecode.CrmHtmlAttributeEncode('' + viewModel.$13_0.id));
    this.$30_2();
}
Mscrm.SocialInsights.Views.SearchTopicItemView.createDefaultLayout = function(viewModel) {
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    var $v_0 = $P_CRM('<div class=\'searchTopicItem\'>\r\n\t\t\t\t<div class=\'searchTopicName\'></div>\r\n\t\t\t\t<div class=\'searchTopicKeywords\'></div>\r\n\t\t\t</div>');
    return new Mscrm.SocialInsights.Views.SearchTopicItemView($v_0, viewModel);
}
Mscrm.SocialInsights.Views.SearchTopicItemView.prototype = {
    $2a_2: null,
    $2Z_2: null,
    $D_2: null,
    
    $30_2: function() {
        this.$2a_2.text(this.$D_2.$1K_0);
        this.$2a_2.attr('title', this.$D_2.$1K_0);
        this.$2Z_2.text(this.$D_2.$1e_0);
        this.$2Z_2.attr('title', this.$D_2.$1e_0);
    },
    
    actualDispose: function() {
    }
}


Mscrm.SocialInsights.Views.SearchTopicItemsListView = function(uiElement, searchTopicItemViewModelsList) {
    this.$$d_$62_2 = Function.createDelegate(this, this.$62_2);
    Mscrm.SocialInsights.Views.SearchTopicItemsListView.initializeBase(this, [ uiElement ]);
    if (IsNull(searchTopicItemViewModelsList)) {
        throw Error.argumentNull('searchTopicItemViewModelsList');
    }
    var $v_0 = this.findSingle('searchTopicItemsList', 'There must be exactly one topics List');
    this.$0_2 = new Mscrm.SocialInsights.Views.ListView($v_0, searchTopicItemViewModelsList, this.$$d_$62_2);
}
Mscrm.SocialInsights.Views.SearchTopicItemsListView.prototype = {
    $0_2: null,
    
    initialize: function() {
        this.$0_2.initialize();
        if (!this.$0_2.get_itemCount()) {
            var $v_0 = String.format(Xrm.Internal.getResourceString('LOCID_NETBREEZE_NO_TOPICS'), Xrm.Internal.getResourceString('LOCID_NETBREEZE_TOPIC'));
            this.find('searchTopicItemsList').text($v_0);
        }
    },
    
    actualDispose: function() {
    },
    
    $62_2: function($p0) {
        if (IsNull($p0)) {
            throw Error.argumentNull('viewModel');
        }
        if (Object.getType($p0) !== Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel) {
            throw Error.argumentType('viewModel', Object.getType($p0), Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel);
        }
        var $v_0 = Mscrm.SocialInsights.Views.SearchTopicItemView.createDefaultLayout($p0);
        return $v_0;
    },
    
    getSelectedItem: function() {
        if (this.$0_2.$5_2 < 0) {
            return null;
        }
        return this.$0_2.$A_2[this.$0_2.$5_2];
    },
    
    selectFirstItem: function() {
        if (!this.$0_2.get_itemCount()) {
            return;
        }
        this.$0_2.set_selectedIndex(0);
    },
    
    select: function(itemID) {
        for (var $v_0 = 0; $v_0 < this.$0_2.get_itemCount(); $v_0++) {
            var $v_1 = this.$0_2.$A_2[$v_0];
            if ($v_1.$13_0.id !== itemID) {
                continue;
            }
            this.$0_2.set_selectedIndex($v_0);
            this.$0_2.scrollItemIntoView($v_0, true);
            return true;
        }
        return false;
    }
}


Mscrm.SocialInsights.Views.CreateTopicView = function($p0, $p1) {
    this.$$d_LaunchNetBreeze = Function.createDelegate(this, this.LaunchNetBreeze);
    this.$$d_$5U_2 = Function.createDelegate(this, this.$5U_2);
    this.$$d_handleNextForCreate = Function.createDelegate(this, this.handleNextForCreate);
    Mscrm.SocialInsights.Views.CreateTopicView.initializeBase(this, [ $p0 ]);
    this.$4_2 = $p1;
    this.$H_2 = this.get_uiElement().siblings('.errorDiv');
    this.$R_2 = this.get_uiElement().find('#edit');
    this.$1L_2 = this.$R_2.find('#nameInput');
    this.$w_2 = this.$R_2.find('#categorySelect');
    this.$1J_2 = this.$R_2.find('#keywordsInput');
    this.$2U_2 = this.$R_2.find('#inclusionsInput');
    this.$2M_2 = this.$R_2.find('#exclusionsInput');
    this.$2D_2 = this.$R_2.find('#channelsField .field');
    this.$2b_2 = this.$R_2.find('#languagesField .field');
    this.$19_2 = this.get_uiElement().find('#advancedEdit');
    this.$26_2 = this.$19_2.find('#advancedSetup');
    this.$1k_2 = this.get_uiElement().find('#quickSetupUnavailable');
    this.$2d_2 = this.$1k_2.find('#quickSetupUnavailableLink');
    this.$66_2();
    this.$1L_2.keyup(this.$$d_handleNextForCreate);
    this.$1J_2.keyup(this.$$d_handleNextForCreate);
}
Mscrm.SocialInsights.Views.CreateTopicView.setupCreateTopicView = function(element) {
    var $v_0 = new Mscrm.SocialInsights.ViewModels.CreateTopicViewModel();
    return new Mscrm.SocialInsights.Views.CreateTopicView(element, $v_0);
}
Mscrm.SocialInsights.Views.CreateTopicView.prototype = {
    $4_2: null,
    $H_2: null,
    $R_2: null,
    $19_2: null,
    $1L_2: null,
    $w_2: null,
    $1J_2: null,
    $2U_2: null,
    $2M_2: null,
    $2D_2: null,
    $2b_2: null,
    $26_2: null,
    $1k_2: null,
    $2d_2: null,
    $2V_2: false,
    
    handleNextForCreate: function(e) {
        var $v_0 = WizardGetProperty('editSearchItemAllowed');
        var $v_1 = false;
        if (IsNull($v_0)) {
            $v_0 = true;
        }
        var $v_2 = !isNullOrEmptyString(this.$1L_2.val()) && !isNullOrEmptyString(this.$1J_2.val()) && !isNullOrEmptyString(this.$w_2.val());
        if (!$v_0 || $v_2) {
            $v_1 = true;
        }
        WizardSetButtonEnabled($v_1, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    validateTopic: function() {
        this.$H_2.removeClass('topicTooBroadVisible');
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner();
        return this.$4_2.validateTopic();
    },
    
    storeValuesInPropertyBag: function() {
        if (!this.$4_2.get_showEdit()) {
            return;
        }
        this.$4_2.get_searchItem().name = this.$1L_2.val();
        this.$4_2.get_searchItem().parentId = this.$w_2.val();
        this.$4_2.get_searchItem().searchQuerySet[0].phrases = this.$1J_2.val();
        this.$4_2.get_searchItem().searchQuerySet[0].inclusions.phrases = this.$2U_2.val();
        this.$4_2.get_searchItem().searchQuerySet[0].exclusions.phrases = this.$2M_2.val();
        WizardSetProperty('proposedSearchItem', this.$4_2.get_searchItem());
    },
    
    initialize: function(searchItemId) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, String);
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner();
        if (isNullOrEmptyString(searchItemId)) {
            this.$45_2();
            $v_0.resolve();
        }
        else {
            var $$t_4 = this, $$t_5 = this;
            Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem(searchItemId).done(function($p1_0) {
                $v_0.resolve(true);
                $$t_4.$61_2($p1_0);
            }).fail(function($p1_0) {
                $$t_5.$45_2();
                $v_0.reject($p1_0);
            });
        }
        return $v_0.promise();
    },
    
    get_initialized: function() {
        return this.$2V_2;
    },
    
    showTopicTooBroadMessage: function() {
        this.$H_2.addClass('topicTooBroadVisible');
    },
    
    $61_2: function($p0) {
        this.$4_2.$N_0 = $p0.$13_0;
        if (!this.$4_2.get_showEdit()) {
            this.$6E_2();
            return;
        }
        var $$t_3 = this, $$t_4 = this;
        this.$4_2.get_categories().done(function($p1_0) {
            $$t_3.$3T_2(null, $p1_0);
            $$t_3.handleNextForCreate(null);
        }).fail(function($p1_0) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
            Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze(null, null);
        });
    },
    
    $45_2: function() {
        var $$t_2 = this, $$t_3 = this;
        $P_CRM.when(this.$4_2.get_netBreezeDefaults(), this.$4_2.get_categories()).done(function($p1_0) {
            $$t_2.$3T_2(arguments[0], arguments[1]);
        }).fail(function($p1_0) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
            Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze(null, null);
        });
    },
    
    $3T_2: function($p0, $p1) {
        this.$2V_2 = true;
        this.$5k_2($p1);
        this.$65_2();
        this.$67_2($p0);
        this.$6B_2();
    },
    
    $5k_2: function($p0) {
        this.$w_2.empty();
        for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            this.$w_2.append(String.format('<option value=\'{0}\'>{1}</option>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.id), CrmEncodeDecode.CrmHtmlEncode($v_0.name)));
        }
    },
    
    $65_2: function() {
        if (!IsNull(WizardGetProperty('proposedSearchItem'))) {
            this.$4_2.$N_0 = WizardGetProperty('proposedSearchItem');
        }
        if (!IsNull(this.$4_2.get_searchItem())) {
            var $v_0 = this.$4_2.get_searchItem();
            this.$1L_2.val($v_0.name);
            if (!IsNull($v_0.parentId)) {
                this.$w_2.val($v_0.parentId);
            }
            this.$1J_2.val($v_0.searchQuerySet[0].phrases);
            this.$2U_2.val($v_0.searchQuerySet[0].inclusions.phrases);
            this.$2M_2.val($v_0.searchQuerySet[0].exclusions.phrases);
        }
        else {
            this.$19_2.hide();
        }
    },
    
    $67_2: function($p0) {
        var $v_0 = this.$4_2.get_searchItem();
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
            this.$2b_2.text($v_2.join(', '));
            this.$2D_2.text($v_3.join(', '));
        }
        else {
            this.$2D_2.text($p0.searchChannelDefaults.join(', '));
            this.$2b_2.text($p0.searchLanguageDefaults.join(', '));
        }
    },
    
    $66_2: function() {
        this.$26_2.click(this.$$d_$5U_2);
        this.$2d_2.click(this.$$d_$5U_2);
    },
    
    $5U_2: function($p0) {
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_socialinsightsresetalldata.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_Advanced_Insight_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_Advanced_Insight_Description';
        $v_0.get_query()['resource_body1'] = 'Dialog_Advanced_Insight_Body1';
        $v_0.get_query()['resource_body2'] = 'Dialog_Advanced_Insight_Body2';
        var $v_1 = new Xrm.DialogOptions();
        $v_1.width = Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth;
        $v_1.height = Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight;
        var $v_2 = this.$$d_LaunchNetBreeze;
        var $v_3 = Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory($v_2, [ this ]);
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_3);
    },
    
    LaunchNetBreeze: function(result) {
        if (IsNull(result) || !result) {
            return;
        }
        window.open(Mscrm.SocialInsights.Runtime.Services.UrlService.getAdvancedSetupLink(this.$4_2.get_searchItem().id));
        WizardNavigate(_WizardNavigateEnum.CLOSE);
    },
    
    $6B_2: function() {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        this.$R_2.show();
        this.$19_2.show();
        this.$1k_2.hide();
        WizardSetProperty('editSearchItemAllowed', true);
    },
    
    $6E_2: function() {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        this.$R_2.hide();
        this.$19_2.hide();
        this.$1k_2.show();
        WizardSetProperty('editSearchItemAllowed', false);
    },
    
    actualDispose: function() {
        this.$26_2.unbind();
        this.$2d_2.unbind();
    }
}


Mscrm.SocialInsights.Views.WidgetListEditorStrings = function() {
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
    
    getFromWindowLocalizationVariables: function() {
        this.moveUpTooltip = Xrm.Internal.getResourceString('LOCID_NETBREEZE_WIDGET_UP');
        this.moveDownTooltip = Xrm.Internal.getResourceString('LOCID_NETBREEZE_WIDGET_DOWN');
        this.deleteTooltip = Xrm.Internal.getResourceString('LOCID_NETBREEZE_WIDGET_DEL');
        this.addButtonCaptionAndTooltip = Xrm.Internal.getResourceString('LOCID_NETBREEZE_WIDGET_ADD');
        this.headerType = Xrm.Internal.getResourceString('LOCID_NETBREEZE_HEAD_TYPE');
        this.headerDescription = Xrm.Internal.getResourceString('LOCID_NETBREEZE_HEAD_DESCR');
        this.headerPreview = Xrm.Internal.getResourceString('LOCID_NETBREEZE_HEAD_PREVIEW');
        this.unsupportedWidget = Xrm.Internal.getResourceString('LOCID_NETBREEZE_ERR_UNSUPPORTED');
        this.searchItemCaption = Xrm.Internal.getResourceString('LOCID_NETBREEZE_ITEM_CAPTION');
        this.searchCategoryCaption = Xrm.Internal.getResourceString('LOCID_NETBREEZE_CATEGORY_CAPTION');
    }
}


Mscrm.SocialInsights.Views.WidgetListEditorView = function($p0, $p1, $p2) {
    this.$$d_$4N_2 = Function.createDelegate(this, this.$4N_2);
    this.$$d_$5a_2 = Function.createDelegate(this, this.$5a_2);
    this.$$d_$4l_2 = Function.createDelegate(this, this.$4l_2);
    this.$$d_$6P_2 = Function.createDelegate(this, this.$6P_2);
    this.$e_2 = new Mscrm.Views.IconHoverBehavior();
    this.$1U_2 = new Mscrm.Views.IconHoverBehavior();
    Mscrm.SocialInsights.Views.WidgetListEditorView.initializeBase(this, [ $p0 ]);
    if (IsNull($p1)) {
        throw Error.argumentNull('viewModel');
    }
    if (IsNull($p2)) {
        throw Error.argumentNull('strings');
    }
    this.$16_2 = $p2;
    var $v_0 = this.findSingle('WidgetListEditor-List', 'There must be exactly one widget list');
    this.$0_2 = new Mscrm.SocialInsights.Views.ListView($v_0, $p1, this.$$d_$6P_2);
    var $$t_9 = this;
    this.$0_2.add_itemAdded(function($p1_0, $p1_1) {
        return Mscrm.SocialInsights.Views.WidgetListEditorView.$44(true);
    });
    var $$t_A = this;
    this.$0_2.add_itemRemoved(function($p1_0, $p1_1) {
        if (!$$t_A.$0_2.get_itemCount()) {
            Mscrm.SocialInsights.Views.WidgetListEditorView.$44(false);
        }
    });
    var $v_1 = this.findSingle('WidgetListEditor-MoveControls', 'There must be exactly one instance of move controls');
    this.$2c_2 = new Mscrm.Views.CrmMoveControlsView($v_1, this.$0_2);
    this.$F_2 = this.find('WidgetListEditor-AddButton');
    this.$e_2.enabled = Mscrm.Views.CrmMoveIcons.enabledAddInfo.get_value();
    this.$e_2.hover = Mscrm.Views.CrmMoveIcons.hoverAddInfo.get_value();
    this.$e_2.disabled = Mscrm.Views.CrmMoveIcons.disabledAddInfo.get_value();
    this.$e_2.attach(this.$F_2);
    this.$e_2.onDisable(this.$F_2);
    this.$1U_2.enabled = Mscrm.Views.CrmMoveIcons.enabledDeleteInfo.get_value();
    this.$1U_2.hover = Mscrm.Views.CrmMoveIcons.hoverDeleteInfo.get_value();
    this.$2c_2.initialize();
}
Mscrm.SocialInsights.Views.WidgetListEditorView.$44 = function($p0) {
    WizardSetButtonEnabled($p0, _WizardButtonsEnum.NEXTBUTTON);
}
Mscrm.SocialInsights.Views.WidgetListEditorView.createDefaultLayout = function(isCategory, strings) {
    if (IsNull(strings)) {
        throw Error.argumentNull('strings');
    }
    var $v_0 = String.format('<div class=\'WidgetListEditor\'>\r\n\t\t\t\t<div class=\'WidgetListEditor-Title\'>\t\t\t\t\t\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<div tabindex=0 class=\'WidgetListEditor-TopicContainer\'>\r\n\t\t\t\t\t\t\t<span class=\'WidgetListEditor-TopicCaption\'>{6}</span>\r\n\t\t\t\t\t\t\t<span class=\'WidgetListEditor-Topic\'></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<button id=\'WidgetListEditor-AddButton\' class=\'WidgetListEditor-AddButton disabled\'  title=\'{5}\' disabled=\'disabled\'><img alt=\'{5}\'/></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'WidgetListEditor-Header\'>\r\n\t\t\t\t\t<div class=\'listview-item-index\'><br></div>\r\n\t\t\t\t\t<div class=\'widget-type\'>{0}</div>\r\n\t\t\t\t\t<div class=\'widget-type-description\'>{1}</div>\r\n\t\t\t\t\t<div class=\'widget-type-preview\'>{2}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\'listview WidgetListEditor-List\'></div>\r\n\t\t\t\t<div class=\'WidgetListEditor-MoveControls\'>\r\n\t\t\t\t\t<button class=\'List-MoveUp disabled\' title=\'{3}\' disabled=\'disabled\'><img alt=\'{3}\'/></button>\r\n\t\t\t\t\t<button class=\'List-MoveDown disabled\'  title=\'{4}\' disabled=\'disabled\'><img alt=\'{4}\'/></button>\r\n\t\t\t\t\t<div class=\'WidgetListEditor-MoveCaptionCell\'>\r\n\t\t\t\t\t\t<span class=\'List-MoveCaption\'></span>\r\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t<div id=\'visualNotSupportedWarning\' class=\'WidgetListEditor-VisualNotSupported\'>   \r\n\t\t\t\t\t  <div style=\'display:table-cell\'>\r\n\t\t\t\t\t\t  <img class=\'WidgetListEditor-VisualNotSupportedInfoIcon\' src=\'/_imgs/SocialInsight/InfoAlert_16.png\'>\r\n\t\t\t\t\t  </div> \r\n\t\t\t\t\t  <div style=\'display:table-cell\'>\r\n\t\t\t\t\t\t<div class=\'WidgetListEditor-VisualNotSupportedMessage\'>{7}</div>\r\n\t\t\t\t\t  </div>  \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>', CrmEncodeDecode.CrmHtmlEncode(strings.headerType), CrmEncodeDecode.CrmHtmlEncode(strings.headerDescription), CrmEncodeDecode.CrmHtmlEncode(strings.headerPreview), CrmEncodeDecode.CrmHtmlAttributeEncode(strings.moveUpTooltip), CrmEncodeDecode.CrmHtmlAttributeEncode(strings.moveDownTooltip), CrmEncodeDecode.CrmHtmlAttributeEncode(strings.addButtonCaptionAndTooltip), CrmEncodeDecode.CrmHtmlEncode((isCategory) ? strings.searchCategoryCaption : strings.searchItemCaption), CrmEncodeDecode.CrmHtmlEncode(strings.unsupportedWidget));
    var $v_1 = $P_CRM($v_0);
    return new Mscrm.SocialInsights.Views.WidgetListEditorView($v_1, [], strings);
}
Mscrm.SocialInsights.Views.WidgetListEditorView.prototype = {
    
    initialize: function() {
        if (IsNull(this.$V_2)) {
            throw Error.invalidOperation('You must set SupportedTypes first');
        }
        this.$0_2.initialize();
        this.$L_2();
        this.$1o_2();
    },
    
    get_supportedTypes: function() {
        return this.$V_2;
    },
    
    set_supportedTypes: function(value) {
        if (IsNull(value)) {
            throw Error.argumentNull('SupportedTypes');
        }
        this.$V_2 = value;
        this.$1o_2();
        return value;
    },
    
    get_viewModel: function() {
        return this.$0_2.$A_2;
    },
    
    add: function(widgetType) {
        if (IsNull(widgetType)) {
            throw Error.argumentNull('widgetType');
        }
        Mscrm.CrmDebug.assert(!IsNull(widgetType));
        var $v_0 = this.$0_2.add(widgetType.clone());
        var $v_1 = $v_0.$o_3;
        var $v_2 = $v_1.$1D_2;
        $v_2.click(this.$$d_$4l_2);
        this.$1U_2.attach($v_2);
        this.$1o_2();
    },
    
    displayVisualNotFoundMessage: function() {
        var $v_0 = $P_CRM('#visualNotSupportedWarning');
        $v_0.show();
    },
    
    hideVisualNotFoundMessage: function() {
        var $v_0 = $P_CRM('#visualNotSupportedWarning');
        $v_0.hide();
    },
    
    $0_2: null,
    $2c_2: null,
    $F_2: null,
    $16_2: null,
    $V_2: null,
    
    $1o_2: function() {
        this.hideVisualNotFoundMessage();
        var $v_0 = this.$3A_2();
        this.$6K_2($v_0);
        if (this.$4Q_2($v_0)) {
            this.$F_2.addClass('disabled');
            this.$e_2.onDisable(this.$F_2);
            this.$F_2.prop('disabled', true);
        }
        else {
            this.$F_2.removeClass('disabled');
            this.$e_2.onEnable(this.$F_2);
            this.$F_2.prop('disabled', false);
        }
    },
    
    $6P_2: function($p0) {
        if (IsNull($p0)) {
            throw Error.argumentNull('viewModel');
        }
        var $v_0 = $p0;
        if (IsNull($v_0)) {
            throw Error.argumentType('viewModel', Object.getType($p0), Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel);
        }
        var $v_1 = Mscrm.SocialInsights.Views.WidgetTypeView.createDefaultLayout($v_0, this.$16_2);
        var $v_2 = this.$3A_2();
        $v_1.$43_2(this.$V_2, $v_2);
        $v_1.add_$4L_2(this.$$d_$5a_2);
        return $v_1;
    },
    
    $4l_2: function($p0) {
        var $v_0 = this.$0_2.getItemIndex($P_CRM($p0.currentTarget));
        Mscrm.CrmDebug.assert($v_0 >= 0, 'Should find something');
        this.$2z_2($v_0);
        this.$0_2.removeAt($v_0);
        this.$1o_2();
        this.$0_2.get_uiElement().focus();
    },
    
    $4N_2: function($p0) {
        if (this.$F_2.hasClass('disabled')) {
            return;
        }
        var $v_0 = this.$4v_2();
        this.add($v_0);
        this.$0_2.set_selectedIndex(this.$0_2.get_itemCount() - 1);
    },
    
    $4v_2: function() {
        var $v_0 = this.$3A_2();
        for (var $$arr_1 = this.$V_2, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            if (!(($v_1.get_id()) in $v_0)) {
                return $v_1;
            }
        }
        return null;
    },
    
    $6K_2: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$0_2.get_itemCount(); $v_0++) {
            var $v_1 = this.$0_2.get_item($v_0);
            var $v_2 = $v_1.$o_3;
            $v_2.$43_2(this.$V_2, $p0);
        }
    },
    
    $3A_2: function() {
        var $v_0 = {};
        var $v_1 = this.$0_2.get_itemViewModels();
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2];
            $v_0[$v_3.get_id()] = true;
        }
        return $v_0;
    },
    
    $4Q_2: function($p0) {
        for (var $$arr_1 = this.$V_2, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (!(($v_0.get_id()) in $p0)) {
                return false;
            }
        }
        return true;
    },
    
    $5a_2: function($p0, $p1) {
        this.$1o_2();
    },
    
    $2z_2: function($p0) {
        var $v_0 = this.$0_2.get_item($p0).$o_3;
        $v_0.$1D_2.unbind('click', this.$$d_$4l_2);
        this.$1U_2.detach($v_0.$1D_2);
        $v_0.remove_$4L_2(this.$$d_$5a_2);
    },
    
    $L_2: function() {
        this.$F_2.click(this.$$d_$4N_2);
    },
    
    $P_2: function() {
        this.$F_2.unbind('click', this.$$d_$4N_2);
        for (var $v_0 = 0; $v_0 < this.$0_2.get_itemCount(); $v_0++) {
            this.$2z_2($v_0);
        }
    },
    
    actualDispose: function() {
        this.$P_2();
        this.$e_2.detach(this.$F_2);
        this.$2c_2.dispose();
        this.$0_2.dispose();
    }
}


Mscrm.SocialInsights.Views.WidgetTypeView = function(uiElement, viewModel, strings) {
    this.$$d_$6O_2 = Function.createDelegate(this, this.$6O_2);
    this.$I_2 = new Sys.EventHandlerList();
    Mscrm.SocialInsights.Views.WidgetTypeView.initializeBase(this, [ uiElement ]);
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    if (IsNull(strings)) {
        throw Error.argumentNull('strings');
    }
    this.$D_2 = viewModel;
    this.$16_2 = strings;
    this.$t_2 = this.findSingle('widget-type', 'There must be only one dropdown for widget type');
    this.$1n_2 = this.get_uiElement().find('.widget-type-description-text div');
    Mscrm.CrmDebug.assert(this.$1n_2.length === 1);
    this.$3J_2 = this.findSingle('widget-type-preview', 'There must be only one widget preview element');
    this.$1D_2 = this.findSingle('WidgetListEditor-DeleteButton', 'There must be exactly one delete button');
    this.$30_2(true);
    this.$L_2();
}
Mscrm.SocialInsights.Views.WidgetTypeView.createDefaultLayout = function(viewModel, strings) {
    if (IsNull(viewModel)) {
        throw Error.argumentNull('viewModel');
    }
    var $v_0 = String.format('<div class=\'widget-type-view\'>\r\n\t\t\t\t<select class=\'widget-type\' title=\'{0}\' tabindex=\'-1\'></select>\r\n\t\t\t\t<div class=\'widget-type-description\'>\r\n\t\t\t\t\t<div class=\'widget-type-description-cell\'>\r\n\t\t\t\t\t\t<div class=\'widget-type-description-text\' direction=\'{1}\' tabindex=\'-1\'><div/></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img class=\'widget-type-preview\'>\r\n\t\t\t\t<button class=\'{2}\' title=\'{3}\' tabindex=\'-1\'><img alt=\'{3}\'/></button>\r\n\t\t\t</div>', CrmEncodeDecode.CrmHtmlAttributeEncode(strings.headerType), Xrm.Internal.getResourceString('LOCID_UI_DIR').toLowerCase(), 'WidgetListEditor-DeleteButton', CrmEncodeDecode.CrmHtmlAttributeEncode(strings.deleteTooltip));
    var $v_1 = $P_CRM($v_0);
    return new Mscrm.SocialInsights.Views.WidgetTypeView($v_1, viewModel, strings);
}
Mscrm.SocialInsights.Views.WidgetTypeView.prototype = {
    
    get_isFocusable: function() {
        return this.$2Y_2;
    },
    
    set_isFocusable: function(value) {
        if (value === this.$2Y_2) {
            return value;
        }
        var $v_0 = (value) ? '0' : '-1';
        this.get_uiElement().find('[tabindex]').attr('tabindex', $v_0);
        this.$2Y_2 = value;
        return value;
    },
    
    get_deleteButton: function() {
        return this.$1D_2;
    },
    
    add_$4L_2: function($p0) {
        this.$I_2.addHandler('TypeChanged', $p0);
    },
    
    remove_$4L_2: function($p0) {
        this.$I_2.removeHandler('TypeChanged', $p0);
    },
    
    $43_2: function($p0, $p1) {
        var $v_0 = false;
        this.$t_2.empty();
        for (var $$arr_3 = $p0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_1 = $$arr_3[$$idx_5];
            var $v_2 = $v_1.get_id() === this.$D_2.get_id();
            $v_0 = !!($v_0 | $v_2);
            if (!(($v_1.get_id()) in $p1) || $v_2) {
                this.$3L_2($v_1);
            }
        }
        if (!$v_0) {
            this.$3L_2(this.$D_2);
        }
        this.$t_2.val(this.$D_2.get_id());
        this.$V_2 = $p0;
        this.$30_2($v_0);
    },
    
    $t_2: null,
    $1n_2: null,
    $3J_2: null,
    $1D_2: null,
    $D_2: null,
    $16_2: null,
    $V_2: null,
    $2Y_2: false,
    
    $2N_2: function($p0, $p1) {
        if (IsNull(this.$I_2)) {
            return;
        }
        var $v_0 = this.$I_2.getHandler($p0);
        if (!IsNull($v_0)) {
            $v_0(this, $p1);
        }
    },
    
    $3L_2: function($p0) {
        var $v_0 = $P_CRM('<option>');
        $v_0.val($p0.get_id());
        $v_0.text($p0.get_name());
        this.$t_2.append($v_0);
    },
    
    $6O_2: function($p0) {
        var $v_0 = this.$t_2.val();
        var $v_1 = this.$4x_2($v_0);
        this.$D_2.setType($v_1);
        this.$30_2(true);
        this.$2N_2('TypeChanged', Sys.EventArgs.Empty);
    },
    
    $4x_2: function($p0) {
        for (var $$arr_1 = this.$V_2, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if ($v_0.get_id() === $p0) {
                return $v_0;
            }
        }
        throw Error.invalidOperation('Type ID not found: ' + $p0);
    },
    
    $30_2: function($p0) {
        if ($p0) {
            this.get_uiElement().removeClass('widget-type-unsupported');
            this.$1n_2.text(this.$D_2.get_typeDescription()).parent().attr('title', this.$D_2.get_typeDescription());
        }
        else {
            this.get_uiElement().addClass('widget-type-unsupported');
            this.$1n_2.text(this.$16_2.unsupportedWidget).parent().attr('title', this.$16_2.unsupportedWidget);
        }
        this.$3J_2.attr('src', this.$D_2.get_previewImage());
    },
    
    $L_2: function() {
        this.$t_2.change(this.$$d_$6O_2);
    },
    
    $P_2: function() {
        this.$t_2.unbind('change', this.$$d_$6O_2);
    },
    
    actualDispose: function() {
        this.$P_2();
    }
}


Type.registerNamespace('Mscrm.Views');

Mscrm.Views.IconHoverBehavior = function() {
    this.$$d_$5d_0 = Function.createDelegate(this, this.$5d_0);
    this.$$d_$5c_0 = Function.createDelegate(this, this.$5c_0);
}
Mscrm.Views.IconHoverBehavior.$3l = function($p0) {
    return $p0.hasClass('disabled');
}
Mscrm.Views.IconHoverBehavior.prototype = {
    disabled: null,
    enabled: null,
    hover: null,
    
    attach: function(icon) {
        this.$1B_0(icon);
        this.$1l_0(icon, this.enabled);
        icon.mouseenter(this.$$d_$5c_0);
        icon.mouseleave(this.$$d_$5d_0);
    },
    
    detach: function(icon) {
        this.$1B_0(icon);
        icon.unbind('mouseenter', this.$$d_$5c_0);
        icon.unbind('mouseleave', this.$$d_$5d_0);
    },
    
    onEnable: function(icon) {
        this.$1B_0(icon);
        this.$1l_0(icon, this.enabled);
    },
    
    onDisable: function(icon) {
        this.$1B_0(icon);
        this.$1l_0(icon, this.disabled);
    },
    
    toggle: function(icon, enabled) {
        if (enabled) {
            this.onEnable(icon);
        }
        else {
            this.onDisable(icon);
        }
    },
    
    $1B_0: function($p0) {
        if (IsNull($p0)) {
            throw Error.argumentNull('icon');
        }
        if (!$p0.children('img').length) {
            throw Error.argument('icon', 'This is not an icon container');
        }
    },
    
    $1l_0: function($p0, $p1) {
        var $v_0 = $p0.children('img');
        $v_0.removeClass(this.enabled.cssClass);
        $v_0.removeClass(this.hover.cssClass);
        if (!IsNull(this.disabled)) {
            $v_0.removeClass(this.disabled.cssClass);
        }
        $v_0.attr('src', $p1.source);
        $v_0.addClass($p1.cssClass);
    },
    
    $5c_0: function($p0) {
        var $v_0 = $P_CRM($p0.currentTarget);
        this.$1B_0($v_0);
        if (Mscrm.Views.IconHoverBehavior.$3l($v_0)) {
            return;
        }
        this.$1l_0($v_0, this.hover);
    },
    
    $5d_0: function($p0) {
        var $v_0 = $P_CRM($p0.currentTarget);
        this.$1B_0($v_0);
        if (Mscrm.Views.IconHoverBehavior.$3l($v_0)) {
            return;
        }
        this.$1l_0($v_0, this.enabled);
    }
}


Mscrm.Views.CrmMoveIcons = function() {
}
Mscrm.Views.CrmMoveIcons.$9 = function($p0) {
    return new (Mscrm.Lazy$1.$$(Mscrm.ImageInfo))(function() {
        var $v_0 = Mscrm.CrmUri.create($p0);
        return Mscrm.ImageStrip.getImageInfo($v_0);
    });
}


Mscrm.Views.CrmMoveControlsView = function(uiElement, listView) {
    this.$$d_$5f_3 = Function.createDelegate(this, this.$5f_3);
    this.$$d_$5e_3 = Function.createDelegate(this, this.$5e_3);
    this.$11_3 = new Mscrm.Views.IconHoverBehavior();
    this.$12_3 = new Mscrm.Views.IconHoverBehavior();
    Mscrm.Views.CrmMoveControlsView.initializeBase(this, [ uiElement, listView ]);
    this.$11_3.disabled = Mscrm.Views.CrmMoveIcons.disabledDownArrowInfo.get_value();
    this.$11_3.enabled = Mscrm.Views.CrmMoveIcons.enabledDownArrowInfo.get_value();
    this.$11_3.hover = Mscrm.Views.CrmMoveIcons.hoverDownArrowInfo.get_value();
    this.$12_3.disabled = Mscrm.Views.CrmMoveIcons.disabledUpArrowInfo.get_value();
    this.$12_3.enabled = Mscrm.Views.CrmMoveIcons.enabledUpArrowInfo.get_value();
    this.$12_3.hover = Mscrm.Views.CrmMoveIcons.hoverUpArrowInfo.get_value();
    this.$11_3.attach(this.$6_2);
    this.$12_3.attach(this.$7_2);
    this.$10_3 = this.find('List-MoveCaption');
    this.$10_3.text(Xrm.Internal.getResourceString('LOCID_PROCESS_MOVE'));
    this.$6_2.data('caption', Xrm.Internal.getResourceString('LOCID_PROCESS_MOVE_DOWN'));
    this.$7_2.data('caption', Xrm.Internal.getResourceString('LOCID_PROCESS_MOVE_UP'));
    this.$L_3();
}
Mscrm.Views.CrmMoveControlsView.prototype = {
    
    switchDownButton: function(enable) {
        Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype.switchDownButton.call(this, enable);
        this.$4G_3(this.$6_2, enable);
        this.$4H_3(this.$6_2, this.$11_3, enable);
        this.$10_3.toggleClass('disabled', !(this.get_canMoveDown() || this.get_canMoveUp()));
    },
    
    switchUpButton: function(enable) {
        Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype.switchUpButton.call(this, enable);
        this.$4G_3(this.$7_2, enable);
        this.$4H_3(this.$7_2, this.$12_3, enable);
        this.$10_3.toggleClass('disabled', !(this.get_canMoveDown() || this.get_canMoveUp()));
    },
    
    $10_3: null,
    
    $4H_3: function($p0, $p1, $p2) {
        if ($p2) {
            $p0.removeClass('disabled');
            $p1.onEnable($p0);
        }
        else {
            $p0.addClass('disabled');
            $p1.onDisable($p0);
        }
    },
    
    $4G_3: function($p0, $p1) {
        if ($p1) {
            $p0.removeAttr('disabled');
        }
        else {
            $p0.attr('disabled', 'disabled');
        }
    },
    
    $5e_3: function($p0) {
        var $v_0 = $P_CRM($p0.currentTarget);
        if ($v_0.hasClass('disabled')) {
            return;
        }
        this.$10_3.text($v_0.data('caption'));
    },
    
    $5f_3: function($p0) {
        this.$10_3.text(Xrm.Internal.getResourceString('LOCID_PROCESS_MOVE'));
    },
    
    $L_3: function() {
        this.$6_2.mouseenter(this.$$d_$5e_3);
        this.$7_2.mouseenter(this.$$d_$5e_3);
        this.$6_2.mouseleave(this.$$d_$5f_3);
        this.$7_2.mouseleave(this.$$d_$5f_3);
    },
    
    $P_3: function() {
        this.$6_2.unbind('mouseenter', this.$$d_$5e_3);
        this.$6_2.unbind('mouseleave', this.$$d_$5f_3);
        this.$7_2.unbind('mouseenter', this.$$d_$5e_3);
        this.$7_2.unbind('mouseleave', this.$$d_$5f_3);
    },
    
    actualDispose: function() {
        this.$11_3.detach(this.$6_2);
        this.$12_3.detach(this.$7_2);
        this.$P_3();
        Mscrm.SocialInsights.Views.ListItemMoveControlsView.prototype.actualDispose.call(this);
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Common.Views');

Mscrm.SocialInsights.Common.Views.ISupportFocus = function() {}
Mscrm.SocialInsights.Common.Views.ISupportFocus.registerInterface('Mscrm.SocialInsights.Common.Views.ISupportFocus');


Mscrm.SocialInsights.Common.Views.KeepFocusBehavior = function(target, firstFocusable, lastFocusable) {
    this.$$d_$5b_1 = Function.createDelegate(this, this.$5b_1);
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
    this.$2r_1 = target;
    this.$18_1 = firstFocusable;
    this.$u_1 = lastFocusable;
    this.$L_1();
}
Mscrm.SocialInsights.Common.Views.KeepFocusBehavior.prototype = {
    $18_1: null,
    
    get_firstFocusable: function() {
        return this.$18_1;
    },
    
    set_firstFocusable: function(value) {
        this.$18_1 = value;
        return value;
    },
    
    $u_1: null,
    
    get_lastFocusable: function() {
        return this.$u_1;
    },
    
    set_lastFocusable: function(value) {
        this.$u_1 = value;
        return value;
    },
    
    $2r_1: null,
    
    $5b_1: function($p0) {
        var $v_0 = $p0.keyCode === 9;
        if (!$v_0) {
            return;
        }
        if ($p0.target === this.$18_1 && $p0.shiftKey) {
            this.$3o_1(this.$u_1, $p0);
        }
        else if ($p0.target === this.$u_1 && !$p0.shiftKey) {
            this.$3o_1(this.$18_1, $p0);
        }
    },
    
    $3o_1: function($p0, $p1) {
        $p1.stopPropagation();
        $p1.preventDefault();
        if (!IsNull($p0)) {
            var $$t_2 = this;
            window.setTimeout(function() {
                $p0.focus();
            }, 0);
        }
    },
    
    $L_1: function() {
        $addHandler(this.$2r_1, 'keydown', this.$$d_$5b_1);
    },
    
    $P_1: function() {
        $removeHandler(this.$2r_1, 'keydown', this.$$d_$5b_1);
    },
    
    actualDispose: function() {
        this.$P_1();
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Configuration');

Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler = function() {
}
Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler.showAdvancedSettings = function() {
    Mscrm.SocialInsights.SocialInsightUtility.extractDialogArgumentsFromInlineDialog();
    var $v_0 = window.inlineDialogArguments.passedArguments;
    if (IsNull($v_0)) {
        return;
    }
    $v_0.Field.SolutionUrl = Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl();
    var $v_1 = Mscrm.CrmUri.create('/Tools/FormEditor/Dialogs/SocialInsight.aspx?mode=' + $v_0.mode + '&datatype=iframe&editorType=dashboardEditor&scrolling=auto');
    var $v_2 = new Xrm.DialogOptions();
    $v_2.height = 660;
    $v_2.width = 470;
    var $v_3 = Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory(Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler.getUpdatedField, []);
    Xrm.Internal.openDialog($v_1.toString(), $v_2, $v_0, null, $v_3);
}
Mscrm.SocialInsights.Configuration.AdvancedSettingsHandler.getUpdatedField = function(result) {
    if (!IsNull(result)) {
        var $v_0 = window.inlineDialogArguments.passedArguments;
        $v_0.Field = result;
        window.inlineDialogArguments.callbackFunction.content = result;
    }
}


Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler = function($p0) {
    this.$$d_$50_3 = Function.createDelegate(this, this.$50_3);
    this.$$d_$51_3 = Function.createDelegate(this, this.$51_3);
    this.$$d_$4z_3 = Function.createDelegate(this, this.$4z_3);
    this.$$d_$4n_3 = Function.createDelegate(this, this.$4n_3);
    this.$$d_$5I_3 = Function.createDelegate(this, this.$5I_3);
    Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.initializeBase(this, [ $p0 ]);
    this.checkSignInAndInitialize(this.$$d_$5I_3, '/SocialInsight/ConfigurationWizard/SelectSearchTopicCategoryPage.aspx');
}
Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.run = function() {
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.skip = function() {
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(3);
}
Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.prototype = {
    
    $5I_3: function() {
        this.$3E_3 = this.find('selectedCategory');
        this.$17_3 = this.find('topicCategorySelect');
        this.$2C_3 = this.find('topicCategoryPreview');
        this.$H_3 = this.find('errorDiv');
        this.$36_3 = $P_CRM('#topicCount');
        this.$j_3 = null;
        this.$2A_3 = {};
        this.$5O_3();
    },
    
    save: function() {
        if (IsNull(this.$j_3)) {
            return false;
        }
        var $v_0 = this.$j_3.attr('value');
        if (isNullOrEmptyString($v_0)) {
            return false;
        }
        this.set_currentDataItemId($v_0);
        return true;
    },
    
    $3E_3: null,
    $17_3: null,
    $2C_3: null,
    $H_3: null,
    $j_3: null,
    $36_3: null,
    $2A_3: null,
    
    $51_3: function($p0) {
        switch ($p0.which) {
            case 13:
                this.$U_3($p0.target);
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
    
    $50_3: function($p0) {
        this.$U_3($p0.target);
    },
    
    $U_3: function($p0) {
        this.$H_3.removeClass('errorVisible');
        if (!IsNull(this.$j_3)) {
            this.$j_3.removeClass('selected-category');
        }
        this.$j_3 = $P_CRM($p0);
        this.$j_3.addClass('selected-category');
        var $v_0 = this.$j_3.attr('value');
        this.$3E_3.val($v_0);
        this.$6J_3($v_0);
    },
    
    $6J_3: function($p0) {
        this.$2C_3.empty();
        var $v_0 = this.$2A_3[$p0];
        if (IsNull($v_0.searchItems)) {
            this.$3h_3(0);
            return;
        }
        this.$3h_3($v_0.searchItems.length);
        for (var $$arr_2 = $v_0.searchItems, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            var $v_2 = $P_CRM('<li></li>');
            $v_2.text($v_1.name);
            this.$2C_3.append($v_2);
        }
    },
    
    $3h_3: function($p0) {
        this.$36_3.text(String.format(Xrm.Internal.getResourceString('LOCID_NETBREEZE_CONTAINS_TOPICS'), $p0.toString()));
        WizardSetButtonEnabled($p0 > 0, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    $5O_3: function() {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner();
        var $v_0 = Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl();
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, $v_0, null).done(this.$$d_$4n_3).fail(this.$$d_$4z_3);
    },
    
    $4n_3: function($p0) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        this.$3U_3();
        var $v_0 = null;
        var $v_1 = $p0;
        for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_3 = $$arr_3[$$idx_5];
            var $v_4 = $P_CRM('<li></li>');
            $v_4.text($v_3.name);
            $v_4.attr('value', $v_3.id);
            $v_4.attr('tabindex', '0');
            $v_4.keydown(this.$$d_$51_3);
            $v_4.click(this.$$d_$50_3);
            this.$17_3.append($v_4);
            if (this.get_currentDataItemId() + '' === $v_3.id + '') {
                $v_0 = $v_4;
            }
            this.$2A_3[$v_3.id] = $v_3;
        }
        var $v_2 = this.get_currentDataItemType() === 2 && !IsNull(this.get_currentDataItemId()) && IsNull($v_0);
        $v_0 = $v_0 || this.$17_3.children().first();
        $v_0.click();
        var $$t_9 = this;
        window.setTimeout(function() {
            $v_0.focus();
        }, 0);
        if ($v_2) {
            this.$H_3.addClass('errorVisible');
        }
        WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    $4z_3: function($p0) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze($p0, null);
    },
    
    $3U_3: function() {
        if (!IsNull(this.$17_3)) {
            this.$17_3.find('li').unbind('click', this.$$d_$50_3).unbind('keydown', this.$$d_$51_3);
            this.$17_3.empty();
        }
    },
    
    actualDispose: function() {
        this.$3U_3();
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


Mscrm.SocialInsights.Configuration.Models.InlineDialogArguments = function() {
}
Mscrm.SocialInsights.Configuration.Models.InlineDialogArguments.prototype = {
    Field: null,
    mode: null
}


Mscrm.SocialInsights.Configuration.Models.SocialInsightObj = function() {
}
Mscrm.SocialInsights.Configuration.Models.SocialInsightObj.prototype = {
    Id: null,
    Labels: null,
    SolutionUrl: null
}


Mscrm.SocialInsights.Configuration.Models.Label = function() {
}
Mscrm.SocialInsights.Configuration.Models.Label.prototype = {
    Description: null
}


Mscrm.SocialInsights.Configuration.Models.WidgetRestriction = function() {
}


Type.registerNamespace('Mscrm.SocialInsights.Models');

Mscrm.SocialInsights.Models.AjaxCall = function() {
}
Mscrm.SocialInsights.Models.AjaxCall.prototype = {
    id: 0,
    ajax: null,
    result: null,
    error: null,
    errorCode: 0
}


Mscrm.SocialInsights.Models.PendingRequest = function() {
}
Mscrm.SocialInsights.Models.PendingRequest.prototype = {
    ajaxCall: null,
    deferred: null
}


Mscrm.SocialInsights.Models.NetBreezeEstimate = function() {
}
Mscrm.SocialInsights.Models.NetBreezeEstimate.prototype = {
    estimate: 0,
    valid: false,
    limit: 0,
    searchQueryId: null
}


Mscrm.SocialInsights.Models.NetBreezeLinks = function() {
}
Mscrm.SocialInsights.Models.NetBreezeLinks.prototype = {
    rel: null,
    ref: null
}


Mscrm.SocialInsights.Models.Channel = function() {
}
Mscrm.SocialInsights.Models.Channel.prototype = {
    name: null,
    id: null,
    parentId: null
}


Mscrm.SocialInsights.Models.SearchChannel = function() {
}
Mscrm.SocialInsights.Models.SearchChannel.prototype = {
    channel: null,
    searchChannelType: null,
    name: null,
    id: null
}


Mscrm.SocialInsights.Models.Inclusions = function() {
}
Mscrm.SocialInsights.Models.Inclusions.prototype = {
    phrases: null,
    matchScope: null
}


Mscrm.SocialInsights.Models.Exclusions = function() {
}
Mscrm.SocialInsights.Models.Exclusions.prototype = {
    phrases: null,
    matchScope: null
}


Mscrm.SocialInsights.Models.SearchQuery = function() {
}
Mscrm.SocialInsights.Models.SearchQuery.copy = function(original) {
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


Mscrm.SocialInsights.Models.NetBreezeSearchItem = function() {
}
Mscrm.SocialInsights.Models.NetBreezeSearchItem.copy = function(original) {
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


Mscrm.SocialInsights.Models.NetBreezeWidget = function() {
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


Mscrm.SocialInsights.Models.SearchItemCategory = function() {
}
Mscrm.SocialInsights.Models.SearchItemCategory.prototype = {
    name: null,
    id: null,
    searchItems: null
}


Mscrm.SocialInsights.Models.WidgetType = function(id, name, previewImage, description, restriction) {
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


Mscrm.SocialInsights.Models.NetBreezeDefaults = function() {
}
Mscrm.SocialInsights.Models.NetBreezeDefaults.prototype = {
    searchChannelDefaults: null,
    searchLanguageDefaults: null
}


Type.registerNamespace('Mscrm.SocialInsights.ViewModels');

Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel = function(netBreezeSearchItem) {
    this.$13_0 = netBreezeSearchItem;
    this.$1K_0 = netBreezeSearchItem.name;
    this.$1e_0 = Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.$4w(netBreezeSearchItem.searchQuerySet);
}
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.$4w = function($p0) {
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
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem = function(itemID) {
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
Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItems = function() {
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
    $1K_0: null,
    $1e_0: null,
    $13_0: null,
    
    get_keywords: function() {
        return this.$1e_0;
    },
    
    get_name: function() {
        return this.$1K_0;
    },
    
    get_netBreezeSearchItem: function() {
        return this.$13_0;
    }
}


Mscrm.SocialInsights.ViewModels.CreateTopicViewModel = function() {
    this.$1Q_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, Object);
    this.$5m_0();
    this.$1g_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.SocialInsights.Models.NetBreezeDefaults, Object);
    this.$5n_0();
}
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.saveTopic = function(topic) {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, String);
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn().done(function($p1_0) {
        if ($p1_0) {
            Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$60(topic, $v_0);
        }
        else {
            Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$x = true;
            $v_0.reject('SignInRequired');
        }
    }).fail(function($p1_0) {
        $v_0.reject($p1_0);
    });
    return $v_0;
}
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$60 = function($p0, $p1) {
    var $v_0 = IsNull($p0.id);
    var $v_1 = Mscrm.SocialInsights.Models.NetBreezeSearchItem.copy($p0);
    $v_1.searchQuerySet[0].id = WizardGetProperty('apiVersion1_1searchqueryId');
    Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(($v_0) ? 1 : 2, ($v_0) ? Mscrm.SocialInsights.Runtime.Services.UrlService.getCreateOrEditSearchItemsUrl() : Mscrm.SocialInsights.Runtime.Services.UrlService.getEditSearchItemUrl($p0.id), JSON.stringify($v_1), Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$x).done(function($p1_0) {
        var $v_2 = $p1_0;
        if (isNullOrEmptyString($v_2.id)) {
            $p1.reject($p1_0.toString());
        }
        else {
            $p1.resolve($v_2.id);
        }
    }).fail(function($p1_0) {
        $p1.reject($p1_0.error);
    });
    Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$x = false;
}
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.prototype = {
    
    get_showEdit: function() {
        return !this.$N_0 || this.$N_0.searchQuerySet.length === 1;
    },
    
    $N_0: null,
    
    get_searchItem: function() {
        if (IsNull(this.$N_0)) {
            this.$N_0 = this.$4e_0();
        }
        return this.$N_0;
    },
    
    set_searchItem: function(value) {
        this.$N_0 = value;
        return value;
    },
    
    get_categories: function() {
        return this.$1Q_0.promise();
    },
    
    get_netBreezeDefaults: function() {
        return this.$1g_0.promise();
    },
    
    $1Q_0: null,
    $1g_0: null,
    
    validateTopic: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(String, String);
        var $$t_3 = this, $$t_4 = this;
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn().done(function($p1_0) {
            if ($p1_0) {
                $$t_3.$6L_0($v_0);
            }
            else {
                Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$x = true;
                $v_0.reject('SignInRequired');
            }
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0;
    },
    
    $6L_0: function($p0) {
        var $v_0 = this.$N_0.searchQuerySet[0];
        var $v_1 = new Mscrm.SocialInsights.Models.SearchChannel();
        $v_1.id = '4';
        $v_1.name = 'Microblogs';
        $v_1.searchChannelType = 'STANDARD';
        var $v_2 = new Mscrm.SocialInsights.Models.Channel();
        $v_2.id = '18';
        $v_2.name = 'Microblogs';
        $v_2.parentId = '1';
        $v_2.param = 'Twitter';
        $v_1.channel = $v_2;
        $v_0.searchChannels = [ $v_1 ];
        $v_0.languages = [ 'en' ];
        $v_0.id = null;
        this.$N_0.searchQuerySet[0] = $v_0;
        var $$t_8 = this, $$t_9 = this;
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(1, Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchQueriesUrl(), JSON.stringify(this.$N_0.searchQuerySet[0]), Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$x).done(function($p1_0) {
            var $v_3 = $p1_0;
            if (!IsNull($v_3.valid) && $v_3.valid) {
                $p0.resolve($v_3.searchQueryId);
            }
            else {
                $p0.reject('TopicTooBroad');
            }
        }).fail(function($p1_0) {
            if (IsNull($p1_0)) {
                $p0.reject('NullEstimateResponse');
                return;
            }
            if (isNullOrEmptyString($p1_0.result)) {
                $p0.reject($p1_0.error);
                return;
            }
            var $v_4 = JSON.parse($p1_0.result);
            if (IsNull($v_4)) {
                $p0.reject($p1_0.error);
                return;
            }
            if (!$v_4.valid) {
                $p0.reject('TopicTooBroad');
                return;
            }
            $p0.reject($p1_0.error);
        });
        Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$x = false;
    },
    
    $5m_0: function() {
        var $$t_2 = this, $$t_3 = this;
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl(), null).done(function($p1_0) {
            $$t_2.$1Q_0.resolve($p1_0);
        }).fail(function($p1_0) {
            $$t_3.$1Q_0.reject($p1_0.error);
        });
    },
    
    $5n_0: function() {
        var $$t_2 = this, $$t_3 = this;
        Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeDefaultsUrl(), null).done(function($p1_0) {
            $$t_2.$1g_0.resolve($p1_0);
        }).fail(function($p1_0) {
            $$t_3.$1g_0.reject($p1_0.error);
        });
    },
    
    $4e_0: function() {
        var $v_0 = new Mscrm.SocialInsights.Models.SearchQuery();
        $v_0.inclusions = new Mscrm.SocialInsights.Models.Inclusions();
        $v_0.exclusions = new Mscrm.SocialInsights.Models.Exclusions();
        var $v_1 = new Mscrm.SocialInsights.Models.NetBreezeSearchItem();
        $v_1.searchQuerySet = [ $v_0 ];
        return $v_1;
    }
}


Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel = function($p0) {
    if (IsNull($p0)) {
        throw Error.argumentNull('widgetType');
    }
    this.$d_0 = $p0;
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.getWidgetTypes = function(isCategory) {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, Mscrm.SocialInsights.Runtime.Services.UrlService.getAllWidgetsUrl(), null).done(function($p1_0) {
        var $v_1 = $p1_0;
        var $v_2 = new Array(0);
        for (var $$arr_5 = $v_1, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_3 = $$arr_5[$$idx_7];
            if (isCategory && $v_3.restriction === 'SINGLE_SEARCH_ITEM') {
                continue;
            }
            var $v_4 = Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.$4f($v_3);
            $v_2[$v_2.length] = $v_4;
        }
        $v_0.resolve($v_2);
    }).fail(function($p1_0) {
        $v_0.reject($p1_0.error);
    });
    return $v_0.promise();
}
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.toControlParameters = function(types) {
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
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.fromControlParameters = function(currentSocialDataParameters, supportedTypes) {
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
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.hasUnsupportedWidgets = function(currentSocialDataParameters, supportedTypes) {
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
Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.$4f = function($p0) {
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
    $d_0: null,
    
    get_id: function() {
        return this.$d_0.id;
    },
    
    setType: function(type) {
        if (IsNull(type)) {
            throw Error.argumentNull('type');
        }
        this.$d_0 = type.$d_0;
    },
    
    get_name: function() {
        return this.$d_0.name;
    },
    
    get_previewImage: function() {
        return this.$d_0.previewImage;
    },
    
    get_typeDescription: function() {
        return this.$d_0.description;
    },
    
    get_restriction: function() {
        return this.$d_0.restriction;
    },
    
    clone: function() {
        return new Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel(this.$d_0);
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


Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView = function($p0) {
    this.$$d_$48_3 = Function.createDelegate(this, this.$48_3);
    this.$$d_$4A_3 = Function.createDelegate(this, this.$4A_3);
    this.$$d_$3i_3 = Function.createDelegate(this, this.$3i_3);
    this.$$d_$5t_3 = Function.createDelegate(this, this.$5t_3);
    this.$$d_$4o_3 = Function.createDelegate(this, this.$4o_3);
    this.$$d_validateFailure = Function.createDelegate(this, this.validateFailure);
    this.$$d_$4y_3 = Function.createDelegate(this, this.$4y_3);
    this.$$d_$5H_3 = Function.createDelegate(this, this.$5H_3);
    Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.initializeBase(this, [ $p0 ]);
    this.checkSignInAndInitialize(this.$$d_$5H_3, '/SocialInsight/ConfigurationWizard/SelectSearchTopicPage.aspx');
}
Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.run = function() {
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.skip = function() {
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(2);
}
Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.prototype = {
    
    $5H_3: function() {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner();
        this.$k_3 = $P_CRM('#selectATopic');
        this.$y_3 = $P_CRM('#createNewTopic');
        this.$2i_3 = $P_CRM('#selectATopicSection');
        this.$1C_3 = $P_CRM('#createNewTopicSection');
        this.$1T_3 = $P_CRM('#createLabel');
        this.$1W_3 = $P_CRM('#editLabel');
        this.$H_3 = $P_CRM('.errorDiv');
        this.$Q_3 = Mscrm.SocialInsights.Views.CreateTopicView.setupCreateTopicView(this.$1C_3);
        this.$5P_3();
        this.$L_3();
        this.$68_3();
        $P_CRM('#sectionsContainer').show();
    },
    
    $68_3: function() {
        if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem()) {
            this.$1W_3.show();
        }
        else {
            this.$1T_3.show();
        }
        if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor()) {
            this.$y_3.prop('checked', true);
            this.$48_3(null);
        }
        else {
            this.$k_3.prop('checked', true);
        }
    },
    
    wizardNavigate: function(navigationTarget) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wasShowingTopicEditor(this.get_$4h_3());
        if (navigationTarget === _WizardNavigateEnum.NEXT) {
            this.save();
            if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor()) {
                this.$Q_3.validateTopic().done(this.$$d_$4y_3).fail(this.$$d_validateFailure);
                return;
            }
        }
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.wizardNavigate.call(this, navigationTarget);
    },
    
    save: function() {
        if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor() && (!IsNull(this.get_editSearchItemAllowed()) && this.get_editSearchItemAllowed())) {
            this.$Q_3.storeValuesInPropertyBag();
        }
        return this.$3y_3();
    },
    
    $3y_3: function() {
        if (IsNull(this.$C_3)) {
            return false;
        }
        var $v_0 = this.$C_3.getSelectedItem();
        this.set_currentDataItemId((IsNull($v_0)) ? null : $v_0.$13_0.id);
        return !IsNull(this.get_currentDataItemId());
    },
    
    $Q_3: null,
    $k_3: null,
    $y_3: null,
    $2i_3: null,
    $1C_3: null,
    $H_3: null,
    $1T_3: null,
    $1W_3: null,
    $C_3: null,
    
    get_$4h_3: function() {
        return this.$1C_3.is(':visible');
    },
    
    $4o_3: function($p0) {
        var $v_0 = $P_CRM('#topicsList');
        this.$C_3 = new Mscrm.SocialInsights.Views.SearchTopicItemsListView($v_0, $p0);
        this.$C_3.initialize();
        var $$t_2 = this;
        window.setTimeout(function() {
            $v_0.focus();
        }, 0);
        this.$4r_3();
        if (!this.$C_3.select('' + this.get_currentDataItemId())) {
            if (!IsNull(this.get_currentDataItemId())) {
                this.$H_3.addClass('searchItemNotFoundVisible');
                this.$1W_3.hide();
                this.$1T_3.show();
            }
            this.$C_3.selectFirstItem();
        }
        this.$3f_3();
    },
    
    $3f_3: function() {
        var $v_0 = (IsNull(this.$C_3)) ? false : !!this.$C_3.getSelectedItem();
        WizardSetButtonEnabled($v_0, _WizardButtonsEnum.NEXTBUTTON);
    },
    
    $5t_3: function($p0) {
        var $v_0 = $P_CRM('#topicsList');
        this.$C_3 = new Mscrm.SocialInsights.Views.SearchTopicItemsListView($v_0, []);
        this.$C_3.initialize();
        Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze(null, $p0);
    },
    
    $4y_3: function($p0) {
        WizardSetProperty('apiVersion1_1searchqueryId', $p0);
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.wizardNavigate.call(this, _WizardNavigateEnum.NEXT);
    },
    
    validateFailure: function(status) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        if (status === 'TopicTooBroad') {
            this.$Q_3.showTopicTooBroadMessage();
        }
        else if (status === 'SignInRequired') {
            this.checkSignInAndNavigate('/SocialInsight/ConfigurationWizard/SelectSearchTopicPage.aspx');
        }
        else {
            Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze(null, status);
        }
    },
    
    $4r_3: function() {
        this.$k_3.prop('disabled', false);
        this.$y_3.prop('disabled', false);
        this.$k_3.focus();
    },
    
    $4A_3: function($p0) {
        this.$H_3.removeClass('topicTooBroadVisible');
        this.$Q_3.storeValuesInPropertyBag();
        this.$2i_3.show();
        this.$1C_3.hide();
        if (this.get_currentDataItemType() === 1) {
            if (!IsNull(this.$C_3)) {
                this.$C_3.select('' + this.get_currentDataItemId());
            }
        }
        this.$3f_3();
    },
    
    $48_3: function($p0) {
        this.$H_3.removeClass('searchItemNotFoundVisible');
        this.$3y_3();
        this.$2i_3.hide();
        this.$1C_3.show();
        if (!this.$Q_3.$2V_2) {
            var $$t_2 = this;
            this.$Q_3.initialize((Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem()) ? this.get_baseConfiguration().SocialDataItemId : null).fail(function($p1_0) {
                $$t_2.$4A_3(null);
                $$t_2.$H_3.addClass('searchItemNotFoundVisible');
                $$t_2.$k_3.prop('checked', true);
                $$t_2.$1W_3.hide();
                $$t_2.$1T_3.show();
                $$t_2.$3i_3(null);
            });
        }
        this.$Q_3.handleNextForCreate(null);
    },
    
    $3i_3: function($p0) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
    },
    
    $5P_3: function() {
        Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItems().done(this.$$d_$4o_3).fail(this.$$d_$5t_3).always(this.$$d_$3i_3);
    },
    
    $L_3: function() {
        this.$k_3.click(this.$$d_$4A_3);
        this.$y_3.click(this.$$d_$48_3);
    },
    
    $P_3: function() {
        if (!IsNull(this.$k_3)) {
            this.$k_3.unbind('click', this.$$d_$4A_3);
        }
        if (!IsNull(this.$y_3)) {
            this.$y_3.unbind('click', this.$$d_$48_3);
        }
    },
    
    actualDispose: function() {
        this.$P_3();
        if (!IsNull(this.$C_3)) {
            this.$C_3.dispose();
        }
        if (!IsNull(this.$Q_3)) {
            this.$Q_3.dispose();
        }
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView = function(ui) {
    this.$$d_$4j_3 = Function.createDelegate(this, this.$4j_3);
    this.$$d_$5z_3 = Function.createDelegate(this, this.$5z_3);
    this.$$d_$5V_3 = Function.createDelegate(this, this.$5V_3);
    this.$$d_$5g_3 = Function.createDelegate(this, this.$5g_3);
    this.$$d_$5N_3 = Function.createDelegate(this, this.$5N_3);
    this.$$d_$4U_3 = Function.createDelegate(this, this.$4U_3);
    this.$$d_$6M_3 = Function.createDelegate(this, this.$6M_3);
    this.$$d_$3k_3 = Function.createDelegate(this, this.$3k_3);
    this.$$d_$5J_3 = Function.createDelegate(this, this.$5J_3);
    Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.initializeBase(this, [ ui ]);
    this.checkSignInAndInitialize(this.$$d_$5J_3, '/SocialInsight/ConfigurationWizard/SelectVisualizationsPage.aspx');
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$5u = function($p0) {
    Mscrm.SocialInsights.SocialInsightUtility.extractDialogArgumentsFromInlineDialog();
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
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.run = function() {
    if (!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler)) {
        throw Error.invalidOperation();
    }
    var $v_0 = new Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView($P_CRM(document));
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild($v_0);
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler;
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.skip = function() {
    return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage(4);
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.get_hasSkippedOtherPages = function() {
    if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow() === 4 && IsNull(WizardGetProperty('wasShowingTopicEditor'))) {
        return true;
    }
    return false;
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$4i = function($p0) {
    var $v_0 = new Mscrm.SocialInsights.Views.WidgetListEditorStrings();
    $v_0.getFromWindowLocalizationVariables();
    var $v_1 = Mscrm.SocialInsights.Views.WidgetListEditorView.createDefaultLayout($p0, $v_0);
    $P_CRM('#socialInsightsEditorControl').append($v_1.get_uiElement());
    return $v_1;
}
Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.prototype = {
    
    $5J_3: function() {
        var $v_0 = this.get_currentDataItemType() === 2;
        this.$E_3 = Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$4i($v_0);
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner();
        Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.getWidgetTypes($v_0).done(this.$$d_$3k_3).fail(this.$$d_$6M_3);
        if ($v_0) {
            var $v_1 = Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl();
            Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, $v_1, null).done(this.$$d_$4U_3);
        }
        else {
            if (!Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor()) {
                Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem(this.get_currentDataItemId()).done(this.$$d_$5N_3);
            }
            else if (Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.get_hasSkippedOtherPages() || (!IsNull(this.get_editSearchItemAllowed()) && !this.get_editSearchItemAllowed())) {
                Mscrm.SocialInsights.ViewModels.SearchTopicItemViewModel.getSearchItem(this.get_baseConfiguration().SocialDataItemId).done(this.$$d_$5N_3);
                this.set_currentDataItemId(this.get_baseConfiguration().SocialDataItemId);
            }
            else {
                this.$3F_3((IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem().name)) ? '' : Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem().name);
            }
        }
    },
    
    save: function() {
        var $v_0 = this.$E_3.get_viewModel();
        this.set_currentSocialDataParameters(Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.toControlParameters($v_0));
        return true;
    },
    
    saveAndClose: function() {
        this.$E_3.hideVisualNotFoundMessage();
        this.save();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner(Xrm.Internal.getResourceString('LOCID_NETBREEZE_SAVING_WIDGETS'));
        if (!Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.get_hasSkippedOtherPages() && Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor() && this.get_currentDataItemType() === 1 && (!IsNull(this.get_editSearchItemAllowed()) && this.get_editSearchItemAllowed())) {
            Mscrm.CrmDebug.assert(!IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem()), 'expected proposed search item to be saved but was null');
            Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.saveTopic(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem()).done(this.$$d_$5g_3).fail(this.$$d_$5V_3);
        }
        else {
            this.$3x_3();
        }
    },
    
    $5g_3: function($p0) {
        this.set_currentDataItemId($p0);
        this.$3x_3();
    },
    
    $3x_3: function() {
        this.$E_3.hideVisualNotFoundMessage();
        this.$b_3 = Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.cloneSocialInsightsConfiguration(this.get_baseConfiguration());
        this.$b_3.SocialDataItemType = this.get_currentDataItemType();
        this.$b_3.SocialDataItemId = this.get_currentDataItemId();
        this.$b_3.SocialDataParameters = this.get_currentSocialDataParameters();
        if (!this.get_launchedFromRuntimeControl()) {
            Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.$5u(this.$b_3);
        }
        if (this.$b_3.FormId === '00000000-0000-0000-0000-000000000000') {
            saveForFuture(this.$b_3);
        }
        else {
            var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
            $v_0.createOrUpdate(this.$b_3).done(this.$$d_$5z_3).fail(this.$$d_$4j_3);
        }
    },
    
    $E_3: null,
    $b_3: null,
    
    $4U_3: function($p0) {
        var $v_0 = $p0;
        for (var $$arr_2 = $v_0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($v_1.id + '' === this.get_currentDataItemId() + '') {
                this.$3F_3($v_1.name);
                return;
            }
        }
    },
    
    $5N_3: function($p0) {
        this.$3F_3($p0.$1K_0);
    },
    
    $3F_3: function($p0) {
        var $v_0 = this.$E_3.find('WidgetListEditor-Topic');
        $v_0.text($p0);
        $v_0.attr('title', $p0);
    },
    
    $3k_3: function($p0) {
        this.$E_3.set_supportedTypes($p0);
        this.$E_3.initialize();
        var $v_0 = Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.fromControlParameters(this.get_currentSocialDataParameters(), $p0);
        if (!$v_0.length && $p0.length > 0) {
            $v_0[0] = $p0[0];
        }
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            this.$E_3.add($v_0[$v_1]);
        }
        this.$E_3.get_uiElement().focus();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        if (Mscrm.SocialInsights.ViewModels.WidgetTypeViewModel.hasUnsupportedWidgets(this.get_currentSocialDataParameters(), $p0)) {
            this.$E_3.displayVisualNotFoundMessage();
        }
    },
    
    $6M_3: function($p0) {
        this.$E_3.get_uiElement().focus();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        this.$3k_3(new Array(0));
        Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze(null, $p0);
    },
    
    $5z_3: function($p0) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
        completeClose(this.get_launchedFromRuntimeControl(),this.$b_3);
    },
    
    $5V_3: function($p0) {
        this.$4B_3();
        if ($p0 === 'SignInRequired') {
            this.checkSignInAndNavigate('/SocialInsight/ConfigurationWizard/SelectVisualizationsPage.aspx');
        }
        else {
            Mscrm.SocialInsights.Common.Dialogs.unableToConnectToNetBreeze(null, $p0);
        }
    },
    
    $4j_3: function($p0) {
        this.$4B_3();
    },
    
    $4B_3: function() {
        this.$E_3.get_uiElement().focus();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
    },
    
    actualDispose: function() {
        if (!IsNull(this.$E_3)) {
            this.$E_3.dispose();
        }
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.prototype.actualDispose.call(this);
    }
}


Mscrm.SocialInsights.Configuration.Views.WizardPageHandler = function(ui) {
    this.$$d_$5W_2 = Function.createDelegate(this, this.$5W_2);
    this.$$d_wizardNavigate = Function.createDelegate(this, this.wizardNavigate);
    this.$$d_HandleWizardExitResponse = Function.createDelegate(this, this.HandleWizardExitResponse);
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.initializeBase(this, [ ui ]);
    this.$5K_2();
    if (!IsNull((WizardGetProperty('baseConfiguration')).RegardingObjectId)) {
        $P_CRM('#buttonSettings').hide();
    }
    this.$5L_2();
    Mscrm.CrmDebug.assert(ui.length === 1);
    var $v_0 = ui.find('body');
    Mscrm.CrmDebug.assert($v_0.length === 1);
    var $v_1 = $P_CRM('#buttonNext');
    Mscrm.CrmDebug.assert($v_1.length === 1);
    this.keepFocus = new Mscrm.SocialInsights.Common.Views.KeepFocusBehavior(ui[0], $v_0[0], $v_1[0]);
    var $$t_3 = this;
    window.setTimeout(function() {
        window.focus();
        $v_0.focus();
    }, 0);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.runChild = function(pageHandler) {
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
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$4O();
    $P_CRM(window).unload(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2p);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.shouldSkipPage = function(currentPage) {
    return !(!Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow() || Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow() === currentPage);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow = function() {
    return WizardGetProperty('wizardPageToShow');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wizardPageToShow = function(value) {
    WizardSetProperty('wizardPageToShow', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem = function() {
    return WizardGetProperty('editExistingSearchItem');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_editExistingSearchItem = function(value) {
    WizardSetProperty('editExistingSearchItem', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wasShowingTopicEditor = function() {
    var $v_0 = WizardGetProperty('wasShowingTopicEditor');
    if (IsNull($v_0)) {
        $v_0 = Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_editExistingSearchItem();
    }
    return $v_0;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wasShowingTopicEditor = function(value) {
    WizardSetProperty('wasShowingTopicEditor', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_proposedSearchItem = function() {
    return WizardGetProperty('proposedSearchItem');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.cloneSocialInsightsConfiguration = function(config) {
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
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signInAutoNavigate = function() {
    return WizardGetProperty('signInAutoNavigate');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_signInAutoNavigate = function(value) {
    WizardSetProperty('signInAutoNavigate', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signedIn = function() {
    return WizardGetProperty('mslSignedInStatus');
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_signedIn = function(value) {
    WizardSetProperty('mslSignedInStatus', value);
    return value;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner = function(actionString) {
    if (IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8)) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8 = Mscrm.SocialInsights.Views.SpinnerView.createNetBreezeDefault();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.setAction(actionString);
        $P_CRM(document.body).append(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.get_uiElement());
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.show();
    }
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.$32_2++;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner = function() {
    if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.$32_2--;
        if (!Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.$32_2) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.hide();
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8.dispose();
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8 = null;
        }
    }
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2p = function($p0) {
    $P_CRM(window).unbind('unload', Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$2p);
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler.dispose();
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler = null;
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$4O = function() {
    if (window.parent.parent.$P_CRM('#InlineDialog').height() !== Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_wizardHeight()) {
        return;
    }
    Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$3R(1000, 50);
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$3R = function($p0, $p1) {
    if ($p0 <= 0) {
        return;
    }
    $p0--;
    if ($P_CRM('#wizardStagesContainer').height() > 0) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$69($P_CRM('#wizardStagesContainer').height());
    }
    else {
        window.setTimeout(function() {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$3R($p0, $p1);
        }, $p1);
    }
}
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$69 = function($p0) {
    var $v_0 = Mscrm.Utilities.parseInt($P_CRM('.wizardStageText').css('line-height'));
    Mscrm.CrmDebug.assert(!IsNull($v_0));
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
    
    checkSignInAndInitialize: function(InitializePage, navigateBackUrl) {
        if (Xrm.Page.context.isCrmOnline()) {
            InitializePage();
        }
        else {
            if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signInAutoNavigate() && Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signedIn()) {
                Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_signInAutoNavigate(false);
                InitializePage();
            }
            else {
                this.checkSignInAndNavigate(navigateBackUrl);
            }
        }
    },
    
    get_baseConfiguration: function() {
        return WizardGetProperty('baseConfiguration');
    },
    
    set_baseConfiguration: function(value) {
        WizardSetProperty('baseConfiguration', value);
        return value;
    },
    
    get_currentDataItemType: function() {
        var $v_0 = WizardGetProperty('socialDataItemType');
        if (!IsNull($v_0)) {
            return $v_0;
        }
        return this.get_baseConfiguration().SocialDataItemType;
    },
    
    set_currentDataItemType: function(value) {
        WizardSetProperty('socialDataItemType', value);
        return value;
    },
    
    get_currentDataItemId: function() {
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
    
    set_currentDataItemId: function(value) {
        var $v_0 = WizardGetProperty('currentDataItemIds');
        if (IsNull($v_0)) {
            $v_0 = {};
        }
        $v_0[Mscrm.SocialInsights.Configuration.Models.NetBreezeDataItemType.toString(this.get_currentDataItemType())] = value;
        WizardSetProperty('currentDataItemIds', $v_0);
        return value;
    },
    
    get_currentSocialDataParameters: function() {
        var $v_0 = WizardGetProperty('socialDataParameters');
        if (!IsNull($v_0)) {
            return $v_0;
        }
        return this.get_baseConfiguration().SocialDataParameters;
    },
    
    set_currentSocialDataParameters: function(value) {
        WizardSetProperty('socialDataParameters', value);
        return value;
    },
    
    get_editSearchItemAllowed: function() {
        return WizardGetProperty('editSearchItemAllowed');
    },
    
    get_launchedFromRuntimeControl: function() {
        return WizardGetProperty('launchedFromRuntimeControl');
    },
    
    set_launchedFromRuntimeControl: function(value) {
        WizardSetProperty('launchedFromRuntimeControl', value);
        return value;
    },
    
    get_pageToNavigateToAfterMslSignIn: function() {
        return WizardGetProperty('pageToNavigateToAfterMslSignIn');
    },
    
    set_pageToNavigateToAfterMslSignIn: function(value) {
        WizardSetProperty('pageToNavigateToAfterMslSignIn', value);
        return value;
    },
    
    wizardNavigate: function(navigationTarget) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wizardPageToShow(0);
        if (navigationTarget === _WizardNavigateEnum.CANCEL) {
            this.$59_2();
            return;
        }
        if (navigationTarget === _WizardNavigateEnum.BACK) {
            this.save();
        }
        this.originalWizardNavigate(navigationTarget);
    },
    
    checkSignInAndNavigate: function(pageToNavigateToAfterMslSignIn) {
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.showSpinner();
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_signInAutoNavigate(true);
        this.set_pageToNavigateToAfterMslSignIn(pageToNavigateToAfterMslSignIn);
        var $$t_4 = this, $$t_5 = this, $$t_6 = this;
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn().done(function($p1_0) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_signedIn($p1_0);
        }).fail(function($p1_0) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_signedIn(false);
        }).always(function($p1_0) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.hideSpinner();
            $$t_6.originalWizardNavigate(_WizardNavigateEnum.NEXT);
        });
    },
    
    keepFocus: null,
    
    $59_2: function() {
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_cancelwizard.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_CancelWizard_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_CancelWizard_Description';
        $v_0.get_query()['resource_body1'] = 'Dialog_CancelWizard_Body1';
        var $v_1 = new Xrm.DialogOptions();
        $v_1.width = 500;
        $v_1.height = 210;
        var $v_2 = this.$$d_HandleWizardExitResponse;
        var $v_3 = Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory($v_2, [ this ]);
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_3);
    },
    
    HandleWizardExitResponse: function(result) {
        if (!IsNull(result) && result) {
            this.originalWizardNavigate(_WizardNavigateEnum.CANCEL);
        }
    },
    
    originalWizardNavigate: null,
    
    $5L_2: function() {
        if (!IsNull(this.originalWizardNavigate)) {
            throw Error.invalidOperation();
        }
        this.originalWizardNavigate = WizardNavigate;
        Mscrm.CrmDebug.assert(!IsNull(this.originalWizardNavigate));
        window.WizardNavigate = this.$$d_wizardNavigate;
    },
    
    $6I_2: function() {
        if (IsNull(this.originalWizardNavigate)) {
            throw Error.invalidOperation();
        }
        window.WizardNavigate = this.originalWizardNavigate;
    },
    
    $5K_2: function() {
        Mscrm.SocialInsights.SocialInsightUtility.extractDialogArgumentsFromInlineDialog();
        this.$5C_2();
        this.$5G_2();
        this.$54_2();
    },
    
    $54_2: function() {
        if (this.get_launchedFromRuntimeControl() && this.get_baseConfiguration().SocialDataItemType && isNullOrEmptyString(this.get_baseConfiguration().SocialInsightsConfigurationId)) {
            this.$3v_2();
        }
    },
    
    $5G_2: function() {
        if (IsNull(Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_wizardPageToShow())) {
            Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_wizardPageToShow(window.inlineDialogArguments.passedArguments.wizardPageToShow);
        }
        Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.set_editExistingSearchItem((this.get_baseConfiguration().SocialDataItemType === 1));
        this.set_launchedFromRuntimeControl(window.inlineDialogArguments.passedArguments.launchedFromRuntimeControl);
    },
    
    $5C_2: function() {
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
    
    $3v_2: function() {
        return new Mscrm.SocialInsights.SocialInsightsConfigurationService().retrieve(this.get_baseConfiguration()).done(this.$$d_$5W_2);
    },
    
    $5W_2: function($p0) {
        if (!IsNull($p0)) {
            this.set_baseConfiguration($p0);
        }
    },
    
    actualDispose: function() {
        this.keepFocus.dispose();
        this.$6I_2();
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Provisioning');

Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler = function($p0) {
    this.$$d_applyNewNetBreezeInstanceForOnPrem = Function.createDelegate(this, this.applyNewNetBreezeInstanceForOnPrem);
    this.$$d_$5q_2 = Function.createDelegate(this, this.$5q_2);
    this.$$d_$4X_2 = Function.createDelegate(this, this.$4X_2);
    this.$$d_$4P_2 = Function.createDelegate(this, this.$4P_2);
    this.$$d_$4Z_2 = Function.createDelegate(this, this.$4Z_2);
    this.$$d_$3z_2 = Function.createDelegate(this, this.$3z_2);
    this.$$d_$3M_2 = Function.createDelegate(this, this.$3M_2);
    this.$$d_$57_2 = Function.createDelegate(this, this.$57_2);
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.initializeBase(this, [ $p0 ]);
    this.$23_2 = $p0.find('#acceptDisclaimer');
    this.$29_2 = $p0.find('#close');
    this.$2K_2 = $p0.find('#Disclaimer');
    this.$1N_2 = $p0.find('#resetNetbreeze');
    this.$2e_2 = $p0.find('#resetContainer');
    this.$2g_2 = $p0.find('#resetStatusMessageSucess');
    this.$2f_2 = $p0.find('#resetStatusMessageFailure');
    this.$2X_2 = $p0.find('#InstanceSelection');
    if (Xrm.Page.context.isCrmOnline()) {
        Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i = null;
        this.$2J_2 = $p0.find('#SocialInsightsInstance');
        this.$Y_2 = $p0.find('#NetbreezeInstance');
        this.$1A_2 = $p0.find('#applyInstance');
        this.$2m_2 = $p0.find('#SolutionUnavailable');
        this.$2e_2.addClass('reset');
        this.$5l_2(this.get_$z_2());
        var $$t_1 = this;
        window.setTimeout(function() {
            $$t_1.$Y_2.focus();
        }, 0);
    }
    else {
        this.$2e_2.addClass('resetOnPremContainer');
        Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i = new Mscrm.SocialInsights.Provisioning.NetBreezeOnPremiseConfigurationHandler($p0, this);
    }
    this.$L_2();
    if (!this.$2K_2.length && !$p0.find('#ProvisioningTemporaryError').length) {
        this.$2X_2.show();
    }
}
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.run = function() {
    if (!IsNull(Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1Z)) {
        throw Error.invalidOperation();
    }
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1Z = new Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler($P_CRM(document));
    $P_CRM(window).unload(Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$2p);
}
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$2p = function($p0) {
    $P_CRM(window).unbind('unload', Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$2p);
    if (Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i) {
        Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i.dispose();
        Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i = null;
    }
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1Z.dispose();
    Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1Z = null;
}
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.prototype = {
    $23_2: null,
    $29_2: null,
    $2K_2: null,
    $2X_2: null,
    $Y_2: null,
    $1A_2: null,
    $2J_2: null,
    $2m_2: null,
    $1N_2: null,
    $2e_2: null,
    $2g_2: null,
    $2f_2: null,
    
    $4P_2: function($p0) {
        this.$2K_2.hide();
        var $v_0 = Mscrm.SocialInsights.Shared.SocialInsightsWebService.acceptTerms();
        this.$3N_2($v_0);
        var $$t_2 = this;
        $v_0.done(function() {
            $$t_2.$2X_2.show();
        });
    },
    
    $3N_2: function($p0) {
        var $$t_1 = this;
        $p0.fail(function() {
            $$t_1.$6A_2($p0);
        });
    },
    
    $6A_2: function($p0) {
        Mscrm.CrmDebug.fail($p0.responseText);
    },
    
    $4X_2: function($p0) {
        window.history.back();
    },
    
    $5q_2: function($p0) {
        this.$1b_2();
        this.$1G_2();
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_socialinsightsresetalldata.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_Reset_Insight_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_Reset_Insight_Description';
        $v_0.get_query()['resource_body1'] = 'Dialog_Reset_Insight_Body1';
        $v_0.get_query()['resource_body2'] = 'Dialog_Reset_Insight_Body2';
        var $v_1 = new Xrm.DialogOptions();
        $v_1.width = Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth;
        $v_1.height = Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight;
        var $v_2 = this.$$d_$57_2;
        var $v_3 = Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory($v_2, [ this ]);
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_3);
    },
    
    $4m_2: function($p0) {
        var $v_0 = ($p0) ? this.$2g_2 : this.$2f_2;
        $v_0.show();
        var $$t_2 = this;
        window.setTimeout(function() {
            $v_0.focus();
        }, 0);
    },
    
    $1b_2: function() {
        this.$2g_2.hide();
        this.$2f_2.hide();
    },
    
    $1G_2: function() {
        if (!IsNull(Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i)) {
            Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i.$1G_2();
        }
    },
    
    $57_2: function($p0) {
        if (!IsNull($p0) && $p0) {
            var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
            this.$4m_2($v_0.resetAllSocialInsightsData());
        }
    },
    
    get_$z_2: function() {
        return this.$2J_2.attr('value');
    },
    
    set_$z_2: function($p0) {
        this.$2J_2.attr('value', $p0);
        return $p0;
    },
    
    $3z_2: function($p0) {
        var $v_0 = this.$Y_2.val();
        var $v_1 = $v_0 === this.get_$z_2() || (isNullOrEmptyString(this.get_$z_2()) && isNullOrEmptyString($v_0));
        this.$1A_2.prop('disabled', $v_1);
        this.$3e_2();
    },
    
    $4Z_2: function($p0) {
        this.$1b_2();
        this.$1G_2();
        var $v_0 = this.$Y_2.val();
        Mscrm.CrmDebug.assert(this.get_$z_2() !== $v_0, 'Current instance and changed instance should not be same. Select should have been disabled.');
        if (!isNullOrEmptyString(this.get_$z_2()) && !isNullOrEmptyString($v_0)) {
            this.$3p_2(this.$$d_$3M_2);
        }
        else {
            this.$3M_2(true);
        }
    },
    
    $3p_2: function($p0) {
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_socialinsightsresetalldata.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_Change_Insight_Instance_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_Change_Insight_Instance_Description';
        $v_0.get_query()['resource_body1'] = 'Dialog_Change_Insight_Instance_Body1';
        $v_0.get_query()['resource_body2'] = 'Dialog_Change_Insight_Instance_Body2';
        var $v_1 = new Xrm.DialogOptions();
        $v_1.width = Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth;
        $v_1.height = Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight;
        var $v_2 = Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory($p0, [ this ]);
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_2);
    },
    
    $3M_2: function($p0) {
        if (IsNull($p0) || !$p0) {
            return;
        }
        var $v_0 = this.$Y_2.val();
        var $v_1 = Mscrm.SocialInsights.Shared.SocialInsightsWebService.switchInstance($v_0);
        this.$6N_2($v_1);
        var $$t_3 = this;
        $v_1.done(function() {
            $$t_3.set_$z_2($v_0);
            $$t_3.$3z_2(null);
            $$t_3.$1N_2.prop('disabled', isNullOrEmptyString($$t_3.get_$z_2()));
        });
    },
    
    applyNewNetBreezeInstanceForOnPrem: function(result) {
        Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i.$4E_2(result);
    },
    
    $6N_2: function($p0) {
        this.$3N_2($p0);
        this.$1A_2.prop('disabled', true);
        this.$1N_2.prop('disabled', true);
    },
    
    $5l_2: function($p0) {
        if (isNullOrEmptyString($p0)) {
            return;
        }
        var $$t_4 = this;
        this.$Y_2.find('option').each(function($p1_0, $p1_1) {
            var $v_0 = $P_CRM($p1_1);
            if ($v_0.attr('value') === $p0) {
                $v_0.attr('selected', 'true');
                return false;
            }
            return true;
        });
        this.$3e_2();
    },
    
    $3e_2: function() {
        var $v_0 = this.$Y_2.find('option:selected');
        if ($v_0.length <= 0) {
            return;
        }
        var $v_1 = $v_0.prop('disabled');
        if ($v_1) {
            this.$2m_2.show();
        }
        else {
            this.$2m_2.hide();
        }
    },
    
    $L_2: function() {
        if (Xrm.Page.context.isCrmOnline()) {
            this.$Y_2.change(this.$$d_$3z_2);
            this.$1A_2.click(this.$$d_$4Z_2);
        }
        this.$23_2.click(this.$$d_$4P_2);
        this.$29_2.click(this.$$d_$4X_2);
        this.$1N_2.click(this.$$d_$5q_2);
    },
    
    $P_2: function() {
        if (Xrm.Page.context.isCrmOnline()) {
            this.$Y_2.unbind('change', this.$$d_$3z_2);
            this.$1A_2.unbind('click', this.$$d_$4Z_2);
        }
        this.$23_2.unbind('click', this.$$d_$4P_2);
        this.$29_2.unbind('click', this.$$d_$4X_2);
        this.$1N_2.unbind('click', this.$$d_$5q_2);
    },
    
    actualDispose: function() {
        this.$P_2();
    }
}


Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults = function() {
}


Mscrm.SocialInsights.Provisioning.NetBreezeOnPremiseConfigurationHandler = function(ui, nbConfigHandler) {
    this.$$d_$5v_2 = Function.createDelegate(this, this.$5v_2);
    this.$$d_$6G_2 = Function.createDelegate(this, this.$6G_2);
    this.$$d_$5M_2 = Function.createDelegate(this, this.$5M_2);
    this.$$d_$4a_2 = Function.createDelegate(this, this.$4a_2);
    this.$$d_$5w_2 = Function.createDelegate(this, this.$5w_2);
    this.$$d_$5x_2 = Function.createDelegate(this, this.$5x_2);
    Mscrm.SocialInsights.Provisioning.NetBreezeOnPremiseConfigurationHandler.initializeBase(this, [ ui ]);
    this.$W_2 = ui.find('#ConnectMslCheckBox');
    this.$3_2 = ui.find('#MslUrlText');
    this.$c_2 = ui.find('#mslUrlTestButton');
    this.$M_2 = ui.find('#mslUrlSaveButton');
    this.$2s_2 = ui.find('#testMSLInstanceSuccess');
    this.$1m_2 = ui.find('#testMSLInstanceFailure');
    this.$24_2 = ui.find('#AddToTrustedSitesMessage');
    this.$2v_2 = ui.find('#testMSLSignInFailure');
    this.$2t_2 = ui.find('#testMSLInvalidUrlFailure');
    this.$2u_2 = ui.find('#testMSLSaveToCRMFailure');
    this.$2h_2 = ui.find('#saveMSLInstanceSuccess');
    this.$3H_2 = ui.find('#signInNow');
    this.$1M_2 = nbConfigHandler;
    this.$p_2 = this.$3_2.val();
    this.$L_2();
    this.$M_2.attr('disabled', 'disabled');
    if (!this.$W_2.is(':checked')) {
        this.$3_2.attr('disabled', 'disabled');
        this.$c_2.attr('disabled', 'disabled');
    }
    this.$p_2 = this.$3_2.val().trim();
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        this.$24_2.show();
    }
    else {
        this.$24_2.hide();
    }
}
Mscrm.SocialInsights.Provisioning.NetBreezeOnPremiseConfigurationHandler.prototype = {
    $W_2: null,
    $3_2: null,
    $c_2: null,
    $M_2: null,
    $2s_2: null,
    $1m_2: null,
    $24_2: null,
    $2v_2: null,
    $2t_2: null,
    $2u_2: null,
    $2h_2: null,
    $3H_2: null,
    $p_2: null,
    $2F_2: false,
    $1c_2: false,
    $2L_2: 0,
    $3D_2: null,
    $1M_2: null,
    
    acceptedTermsAndConditions: function() {
        this.$W_2.prop('checked', true);
    },
    
    $1G_2: function() {
        this.$2s_2.hide();
        this.$1m_2.hide();
        this.$2v_2.hide();
        this.$2t_2.hide();
        this.$2u_2.hide();
        this.$2h_2.hide();
    },
    
    $1b_2: function() {
        if (!IsNull(this.$1M_2)) {
            this.$1M_2.$1b_2();
        }
    },
    
    $5M_2: function($p0) {
        var $v_0 = this.$3_2.val().trim();
        if ($v_0 !== this.$p_2) {
            this.$c_2.removeAttr('disabled');
            this.$M_2.removeAttr('disabled');
            this.$1c_2 = true;
        }
    },
    
    $6G_2: function($p0) {
        this.$1G_2();
        this.$1b_2();
        this.$4F_2(false);
    },
    
    $5v_2: function($p0) {
        this.$1G_2();
        this.$1b_2();
        if (!this.$W_2.is(':checked')) {
            this.$3w_2();
            return;
        }
        this.$4F_2(true);
    },
    
    $4F_2: function($p0) {
        var $v_0 = this.$3_2.val().trim();
        if ($v_0.indexOf('/api/') === -1 || $v_0.indexOf('/version/') === -1 || $v_0.indexOf('/solutions/') === -1 || $v_0.indexOf('/discovery') === -1) {
            this.$2t_2.show();
            return;
        }
        this.$3_2.attr('disabled', 'disabled');
        this.$5y_2();
        var $$t_5 = this, $$t_6 = this, $$t_7 = this;
        this.$5j_2().done(function($p1_0) {
            if (!$p1_0) {
                $$t_5.$1m_2.show();
                return;
            }
            if ($p0) {
                $$t_5.$3w_2();
            }
            else {
                $$t_5.$2s_2.show();
            }
        }).fail(function($p1_0) {
            if ($p1_0 === 'unauthorized') {
                $$t_6.$3H_2.attr('href', Mscrm.SocialInsights.Runtime.Services.UrlService.getSignInTargetUrl());
                $$t_6.$2v_2.show();
            }
            else {
                $$t_6.$1m_2.show();
            }
        }).always(function($p1_0) {
            $$t_7.$3_2.removeAttr('disabled');
            $$t_7.$5r_2();
        });
    },
    
    $5r_2: function() {
        this.$c_2.removeAttr('disabled');
        if (isNullOrEmptyString(this.$3D_2)) {
            this.$M_2.removeAttr('disabled');
        }
        else {
            this.$M_2.attr('disabled', 'disabled');
        }
    },
    
    $5y_2: function() {
        this.$3D_2 = this.$M_2.attr('disabled');
        this.$c_2.attr('disabled', 'disabled');
        this.$M_2.attr('disabled', 'disabled');
    },
    
    $3w_2: function() {
        if (this.$1c_2) {
            if (isNullOrEmptyString(this.$p_2) || this.$p_2 === this.$3_2.val().trim()) {
                this.$4E_2(true);
            }
            else {
                this.$1M_2.$3p_2(this.$1M_2.$$d_applyNewNetBreezeInstanceForOnPrem);
            }
        }
        else if (this.$2F_2 && !this.$1c_2) {
            Mscrm.SocialInsights.Shared.SocialInsightsWebService.setSocialInsightsEnabled(this.$W_2.is(':checked')).done(this.$$d_$5x_2).fail(this.$$d_$5w_2);
        }
    },
    
    $4E_2: function($p0) {
        if (IsNull($p0) || !$p0) {
            return;
        }
        Mscrm.SocialInsights.Shared.SocialInsightsWebService.switchInstanceAndSetEnabled(this.$3_2.val().trim(), this.$W_2.is(':checked')).done(this.$$d_$5x_2).fail(this.$$d_$5w_2);
    },
    
    $5x_2: function() {
        this.$p_2 = this.$3_2.val().trim();
        this.$2h_2.show();
        this.$1c_2 = false;
        this.$2F_2 = false;
        this.$M_2.attr('disabled', 'disabled');
    },
    
    $5w_2: function() {
        this.$2u_2.show();
    },
    
    $5j_2: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, String);
        var $v_1 = this.$3_2.val().trim();
        var $v_2 = $v_1.substring(0, $v_1.indexOf('/api/') + 1);
        var $v_3 = $v_1.substring($v_1.indexOf('/version/') + 9, $v_1.indexOf('/solutions/') + 1);
        var $v_4 = $v_1.substring($v_1.indexOf('/solutions/') + 11, $v_1.indexOf('/discovery') + 1);
        var $v_5 = new Mscrm.SocialInsights.Common.SocialInsightControlJsonWrapper();
        $v_5.RootUrl = $v_2;
        $v_5.VersionInfo = $v_3;
        $v_5.OrgInfo = $v_4;
        Mscrm.SocialInsights.Common.InternalDataHelper.set_$g($v_5);
        var $$t_B = this, $$t_C = this;
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn().done(function($p1_0) {
            if (!$p1_0) {
                $v_0.reject('unauthorized');
                return;
            }
            $$t_B.$2L_2 = window.setTimeout(function() {
                $v_0.reject('request timed out');
                $v_0 = null;
                window.clearTimeout($$t_B.$2L_2);
            }, 30000);
            Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest(0, $v_1, null, true).done(function($p2_0) {
                $v_0.resolve(true);
            }).fail(function($p2_0) {
                $v_0.reject($p2_0.error);
            }).always(function($p2_0) {
                window.clearTimeout($$t_B.$2L_2);
            });
        }).fail(function($p1_0) {
            $v_0.reject($p1_0);
        });
        return $v_0.promise();
    },
    
    $4a_2: function($p0) {
        this.$1G_2();
        if (this.$W_2.is(':checked')) {
            this.$3_2.removeAttr('disabled');
            this.$c_2.removeAttr('disabled');
        }
        else {
            this.$3_2.attr('disabled', 'disabled');
            this.$c_2.attr('disabled', 'disabled');
            if (isNullOrEmptyString(this.$3_2.val()) || isNullOrEmptyString(this.$3_2.val().trim())) {
                this.$3_2.val('');
            }
            else {
                this.$3_2.val(this.$p_2);
            }
        }
        this.$2F_2 = true;
        this.$M_2.removeAttr('disabled');
    },
    
    $L_2: function() {
        this.$W_2.change(this.$$d_$4a_2);
        this.$3_2.keyup(this.$$d_$5M_2);
        this.$c_2.click(this.$$d_$6G_2);
        this.$M_2.click(this.$$d_$5v_2);
    },
    
    $P_2: function() {
        this.$W_2.unbind('change', this.$$d_$4a_2);
        this.$3_2.unbind('keyup', this.$$d_$5M_2);
        this.$c_2.unbind('click', this.$$d_$6G_2);
        this.$M_2.unbind('click', this.$$d_$5v_2);
    },
    
    actualDispose: function() {
        this.$P_2();
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Runtime.Controls');

Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl = function(element) {
    this.$$d_$5A_4 = Function.createDelegate(this, this.$5A_4);
    this.$$d_$3g_4 = Function.createDelegate(this, this.$3g_4);
    this.$$d_$53_4 = Function.createDelegate(this, this.$53_4);
    this.$$d_$4k_4 = Function.createDelegate(this, this.$4k_4);
    this.$$d_$4p_4 = Function.createDelegate(this, this.$4p_4);
    this.$$d_$4q_4 = Function.createDelegate(this, this.$4q_4);
    this.$$d_DeleteSocialInsightsConfirmation = Function.createDelegate(this, this.DeleteSocialInsightsConfirmation);
    this.$$d_Refresh = Function.createDelegate(this, this.Refresh);
    this.$$d_userNotSignedInKeepPolling = Function.createDelegate(this, this.userNotSignedInKeepPolling);
    this.$$d_$4Y_4 = Function.createDelegate(this, this.$4Y_4);
    this.$$d_$4b_4 = Function.createDelegate(this, this.$4b_4);
    this.$$d_$4d_4 = Function.createDelegate(this, this.$4d_4);
    this.$$d_$4c_4 = Function.createDelegate(this, this.$4c_4);
    this.$$d_$46_4 = Function.createDelegate(this, this.$46_4);
    this.$$d_$58_4 = Function.createDelegate(this, this.$58_4);
    this.$$d_$6C_4 = Function.createDelegate(this, this.$6C_4);
    this.$$d_$6F_4 = Function.createDelegate(this, this.$6F_4);
    this.$$d_displaySignInScreenBasedOnConfiguration = Function.createDelegate(this, this.displaySignInScreenBasedOnConfiguration);
    this.$$d_$5D_4 = Function.createDelegate(this, this.$5D_4);
    this.$S_4 = Mscrm.SocialInsights.Shared.SignInUtility.maxSignInChecks;
    Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.initializeBase(this, [ element ]);
    setPerfMarkerTimestamp('StartSocialInsightsControlInitializationTimestamp');
    this.$G_4 = $P_CRM(element);
    this.$1j_4 = this.$G_4.parent();
    this.$8_4 = $P_CRM('#spinner', element);
    this.$f_4 = $P_CRM('#configuration', element);
    this.$2y_4 = $P_CRM('#unauthorized', element);
    this.$1V_4 = $P_CRM('#disabledByAdmin', element);
    this.$1h_4 = $P_CRM('#newEntityScreen', element);
    this.$1i_4 = $P_CRM('#outlookOfflineMessage', element);
    this.$h_4 = $P_CRM('#nbContent', element);
    this.$l_4 = $P_CRM('#buttons', element);
    this.$r_4 = $P_CRM('#signInRequired', element);
    this.$q_4 = $P_CRM('#sessionExpired', element);
    this.$2o_4 = $P_CRM('#loading', element);
    this.$2n_4 = $P_CRM('#checkingSignIn', element);
    this.$1S_4 = true;
    this.$Z_4 = !IsNull(Xrm.Page.data);
    if (this.$Z_4) {
        this.$r_4.addClass('noLeftMargin');
        this.$q_4.addClass('noLeftMargin');
        if (Mscrm.Utilities.isIE()) {
            this.$G_4.addClass('ie');
        }
    }
    else {
        this.$G_4.addClass('dashboard');
    }
    Array.add(Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.allControls, this);
}
Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.prototype = {
    $14_4: null,
    
    get_notSignedInAction: function() {
        return this.$14_4;
    },
    
    set_notSignedInAction: function(value) {
        this.$14_4 = value;
        return value;
    },
    
    get_numberOfSignInCheckAttempts: function() {
        return this.$S_4;
    },
    
    $T_4: false,
    
    get_pollingStarted: function() {
        return this.$T_4;
    },
    
    $1a_4: false,
    
    get_hasFocus: function() {
        return this.$1a_4;
    },
    
    set_hasFocus: function(value) {
        this.$1a_4 = value;
        return value;
    },
    
    $1F_4: false,
    
    get_hasMouse: function() {
        return this.$1F_4;
    },
    
    set_hasMouse: function(value) {
        this.$1F_4 = value;
        return value;
    },
    
    get_hasConfiguration: function() {
        return !IsNull(this.$1_4) && !isNullOrEmptyString(this.$1_4.SocialDataItemId) && !isNullOrEmptyString(this.$1_4.SocialDataParameters);
    },
    
    $Z_4: false,
    $1S_4: false,
    
    get_confirmDeletion: function() {
        return this.$1S_4;
    },
    
    set_confirmDeletion: function(value) {
        this.$1S_4 = value;
        return value;
    },
    
    $1j_4: null,
    $G_4: null,
    
    get_control: function() {
        return this.$G_4;
    },
    
    $8_4: null,
    
    get_spinner: function() {
        return this.$8_4;
    },
    
    $1h_4: null,
    
    get_newEntityScreen: function() {
        return this.$1h_4;
    },
    
    $1i_4: null,
    
    get_outlookOfflineScreen: function() {
        return this.$1i_4;
    },
    
    $f_4: null,
    
    get_configuration: function() {
        return this.$f_4;
    },
    
    $2y_4: null,
    $1V_4: null,
    
    get_disabledByAdmin: function() {
        return this.$1V_4;
    },
    
    $h_4: null,
    
    get_nbContent: function() {
        return this.$h_4;
    },
    
    $l_4: null,
    
    get_buttons: function() {
        return this.$l_4;
    },
    
    $r_4: null,
    
    get_signInRequired: function() {
        return this.$r_4;
    },
    
    $q_4: null,
    
    get_sessionExpired: function() {
        return this.$q_4;
    },
    
    $2o_4: null,
    $2n_4: null,
    $1_4: null,
    
    get_socialInsightsConfiguration: function() {
        return this.$1_4;
    },
    
    set_socialInsightsConfiguration: function(value) {
        this.$1_4 = value;
        return value;
    },
    
    $2P_4: 0,
    
    get_FormType: function() {
        return this.$2P_4;
    },
    
    set_FormType: function(value) {
        this.$2P_4 = value;
        return value;
    },
    
    $2O_4: null,
    
    get_FormId: function() {
        return this.$2O_4;
    },
    
    set_FormId: function(value) {
        this.$2O_4 = value;
        return value;
    },
    
    $2G_4: null,
    
    get_ControlId: function() {
        return this.$2G_4;
    },
    
    set_ControlId: function(value) {
        this.$2G_4 = value;
        return value;
    },
    
    $1w_4: null,
    
    get_editButtonIcon: function() {
        if (IsNull(this.$1w_4)) {
            this.$1w_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/socialinsight/nbediticon.png'));
        }
        return this.$1w_4;
    },
    
    $1z_4: null,
    
    get_editVisualizationButtonIcon: function() {
        if (IsNull(this.$1z_4)) {
            this.$1z_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/socialinsight/nbeditvisualizationicon.png'));
        }
        return this.$1z_4;
    },
    
    $1t_4: null,
    
    get_deleteButtonIcon: function() {
        if (IsNull(this.$1t_4)) {
            this.$1t_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/socialinsight/nbdeleteicon.png'));
        }
        return this.$1t_4;
    },
    
    $1v_4: null,
    
    get_editButtonHoverIcon: function() {
        if (IsNull(this.$1v_4)) {
            this.$1v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/socialinsight/nbhoverediticon.png'));
        }
        return this.$1v_4;
    },
    
    $1y_4: null,
    
    get_editVisualizationButtonHoverIcon: function() {
        if (IsNull(this.$1y_4)) {
            this.$1y_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/socialinsight/nbhovereditvisualizationicon.png'));
        }
        return this.$1y_4;
    },
    
    $1s_4: null,
    
    get_deleteButtonHoverIcon: function() {
        if (IsNull(this.$1s_4)) {
            this.$1s_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/socialinsight/nbhoverdeleteicon.png'));
        }
        return this.$1s_4;
    },
    
    $1u_4: null,
    
    get_editButton: function() {
        if (IsNull(this.$1u_4)) {
            this.$1u_4 = this.$l_4.find('.edit');
        }
        return this.$1u_4;
    },
    
    $1x_4: null,
    
    get_editVisualizationButton: function() {
        if (IsNull(this.$1x_4)) {
            this.$1x_4 = this.$l_4.find('.editVisualization');
        }
        return this.$1x_4;
    },
    
    $1r_4: null,
    
    get_deleteButton: function() {
        if (IsNull(this.$1r_4)) {
            this.$1r_4 = this.$l_4.find('.delete');
        }
        return this.$1r_4;
    },
    
    $1q_4: null,
    
    get_$34_4: function() {
        if (IsNull(this.$1q_4)) {
            this.$1q_4 = this.$f_4.find('a');
        }
        return this.$1q_4;
    },
    
    $22_4: null,
    
    get_signInRequiredSignInNowLink: function() {
        if (IsNull(this.$22_4)) {
            this.$22_4 = this.$r_4.find('a');
        }
        return this.$22_4;
    },
    
    $21_4: null,
    
    get_showMyInsightsLink: function() {
        if (IsNull(this.$21_4)) {
            this.$21_4 = this.$q_4.find('#showMyInsights');
        }
        return this.$21_4;
    },
    
    $20_4: null,
    
    get_sessionExpiredSignInNowLink: function() {
        if (IsNull(this.$20_4)) {
            this.$20_4 = this.$q_4.find('#sessionExpiredSignInNow');
        }
        return this.$20_4;
    },
    
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (isNullOrEmptyString(Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl())) {
            this.$B_4(this.$f_4);
            return;
        }
        if (Xrm.Page.context.isCrmOnline()) {
            this.$2W_4();
            return;
        }
        if (!window._AreSocialInsightsEnabled) {
            this.$B_4(this.$1V_4);
            return;
        }
        this.$3G_4();
        this.$3s_4(this.$$d_$5D_4);
    },
    
    $5D_4: function() {
        if (!this.get_hasConfiguration()) {
            this.$2W_4();
        }
        else {
            this.$14_4 = this.$$d_displaySignInScreenBasedOnConfiguration;
            this.$2E_4();
        }
    },
    
    $2E_4: function() {
        var $v_0 = false;
        var $v_1 = 0;
        var $$t_5 = this;
        $v_1 = window.setTimeout(function() {
            Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn().done(function($p2_0) {
                $v_0 = $p2_0;
            }).fail(function($p2_0) {
                $v_0 = false;
            }).always(function($p2_0) {
                window.clearTimeout($v_1);
                $$t_5.initializeOrPerformNotSignedInAction($v_0);
            });
        }, (this.$T_4) ? Mscrm.SocialInsights.Shared.SignInUtility.signInCheckInterval : 0);
    },
    
    initializeOrPerformNotSignedInAction: function(signInStatus) {
        if (signInStatus) {
            var $$t_2 = this;
            this.processAllConfiguredUninitializedControls(function($p1_0) {
                $p1_0.$2W_4();
            });
            this.$T_4 = false;
        }
        else {
            this.$14_4();
        }
    },
    
    displaySignInScreenBasedOnConfiguration: function() {
        if (this.get_hasConfiguration()) {
            this.get_signInRequiredSignInNowLink().click(this.$$d_$6F_4);
            this.get_sessionExpiredSignInNowLink().click(this.$$d_$6F_4);
            this.get_showMyInsightsLink().click(this.$$d_$6C_4);
            this.$B_4(this.$r_4);
        }
    },
    
    $2W_4: function() {
        var $v_0 = this.$G_4.parents('div.ms-crm-InlineTabBody-Read:first');
        if (!$v_0.length || $v_0.css('display') !== 'none') {
            this.$3j_4();
        }
        else {
        }
    },
    
    Refresh: function(socialInsightsConfiguration) {
        this.$1_4 = socialInsightsConfiguration;
        this.$49_4();
        this.$46_4();
        if (!Xrm.Page.context.isCrmOnline()) {
            var $$t_2 = this;
            this.processAllConfiguredUninitializedControls(function($p1_0) {
                $p1_0.$2W_4();
            });
        }
    },
    
    dispose: function() {
        this.get_editVisualizationButton().children(':first-child').unbind();
        this.get_editButton().children(':first-child').unbind();
        this.get_deleteButton().children(':first-child').unbind();
        this.get_editVisualizationButton().unbind();
        this.get_editButton().unbind();
        this.get_deleteButton().unbind();
        this.get_$34_4().unbind();
        this.$1j_4.unbind();
        if (this.get_hasConfiguration()) {
            this.get_signInRequiredSignInNowLink().unbind();
            this.get_sessionExpiredSignInNowLink().unbind();
            this.get_showMyInsightsLink().unbind();
        }
        Array.remove(Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.allControls, this);
        Mscrm.UIControl.prototype.dispose.call(this);
    },
    
    $58_4: function($p0) {
        var $v_0 = this.$G_4.parents('div.ms-crm-InlineTab-Read:first');
        $v_0.unbind('click', this.$$d_$58_4);
        this.$3j_4();
    },
    
    $3j_4: function() {
        var $v_0 = window.IS_ONLINE;
        if (!$v_0) {
            this.$B_4(this.$1i_4);
            return;
        }
        this.$3G_4();
        if (this.$Z_4 && isNullOrEmptyString(this.$1_4.RegardingObjectId)) {
            this.$55_4();
        }
        else {
            this.$3s_4(this.$$d_$46_4);
        }
        this.$5E_4();
    },
    
    $5E_4: function() {
        if (!this.$Z_4) {
            return;
        }
        this.$1j_4.mouseenter(this.$$d_$4c_4);
        this.$1j_4.mouseleave(this.$$d_$4d_4);
        this.$G_4.focusin(this.$$d_$4b_4);
        this.$G_4.focusout(this.$$d_$4b_4);
        this.get_editVisualizationButton().append(String.format('<img src=\'{0}\' class=\'{1}\' tabindex=\'0\'></img>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editVisualizationButtonIcon().source), CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editVisualizationButtonIcon().cssClass)));
        this.get_editButton().append(String.format('<img src=\'{0}\' class=\'{1}\' tabindex=\'0\'></img>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editButtonIcon().source), CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_editButtonIcon().cssClass)));
        this.get_deleteButton().append(String.format('<img src=\'{0}\' class=\'{1}\' tabindex=\'0\'></img>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_deleteButtonIcon().source), CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_deleteButtonIcon().cssClass)));
        this.get_$34_4().unbind('click', this.$$d_$4Y_4);
        this.get_$34_4().click(this.$$d_$4Y_4);
        this.$33_4(this.get_editVisualizationButton(), this.get_editVisualizationButtonIcon(), this.get_editVisualizationButtonHoverIcon());
        this.$33_4(this.get_editButton(), this.get_editButtonIcon(), this.get_editButtonHoverIcon());
        this.$33_4(this.get_deleteButton(), this.get_deleteButtonIcon(), this.get_deleteButtonHoverIcon());
        if (!this.$4V_4()) {
            this.$G_4.addClass('titleMissing');
        }
    },
    
    $4c_4: function($p0) {
        this.$1F_4 = true;
        this.$1Y_4();
    },
    
    $4d_4: function($p0) {
        this.$1F_4 = false;
        this.$1Y_4();
    },
    
    $4b_4: function($p0) {
        this.$1a_4 = this.$G_4[0] === document.activeElement || this.$G_4.has(document.activeElement).length > 0;
        this.$1Y_4();
    },
    
    $4Y_4: function($p0) {
        this.$1f_4(0);
        $p0.preventDefault();
    },
    
    $6F_4: function($p0) {
        var $$t_2 = this;
        this.processAllConfiguredUninitializedControls(function($p1_0) {
            $p1_0.$6D_4();
        });
        this.$S_4 = Mscrm.SocialInsights.Shared.SignInUtility.maxSignInChecks;
        this.$14_4 = this.$$d_userNotSignedInKeepPolling;
        this.$2E_4();
    },
    
    userNotSignedInKeepPolling: function() {
        if (this.$S_4 === Mscrm.SocialInsights.Shared.SignInUtility.maxSignInChecks) {
            Mscrm.SocialInsights.Shared.SignInUtility.launchSignIn();
        }
        this.$T_4 = true;
        this.$S_4--;
        if (this.$S_4 > 0) {
            this.$2E_4();
        }
        else {
            var $$t_1 = this;
            this.processAllConfiguredUninitializedControls(function($p1_0) {
                $p1_0.$B_4($p1_0.$q_4);
            });
            this.$T_4 = false;
        }
    },
    
    processAllConfiguredUninitializedControls: function(processPerControl) {
        var $$t_5 = this;
        var $v_0 = function($p1_0, $p1_1) {
            var $v_1 = $p1_1;
            if ($v_1.get_hasConfiguration() && $v_1.$h_4.hasClass('hidden')) {
                processPerControl($v_1);
            }
        };
        $P_CRM.each(Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.allControls, $v_0);
    },
    
    $6C_4: function($p0) {
        var $$t_3 = this;
        this.processAllConfiguredUninitializedControls(function($p1_0) {
            $p1_0.$49_4();
        });
        var $$t_4 = this;
        this.$14_4 = function() {
            $$t_4.processAllConfiguredUninitializedControls(function($p2_0) {
                $p2_0.$B_4($p2_0.$r_4);
            });
        };
        this.$2E_4();
    },
    
    $4p_4: function($p0) {
        switch (this.$1_4.SocialDataItemType) {
            case 1:
                this.$1f_4(2);
                break;
            case 2:
                this.$1f_4(3);
                break;
            case 0:
                this.$1f_4(0);
                break;
        }
    },
    
    $4q_4: function($p0) {
        this.$1f_4(4);
    },
    
    $1f_4: function($p0) {
        if (!this.get_hasConfiguration()) {
            this.$3G_4();
        }
        var $v_0 = {};
        $v_0.launchedFromRuntimeControl = true;
        $v_0.socialInsightsConfiguration = this.$1_4;
        $v_0.wizardPageToShow = $p0;
        $v_0.showInlineDialog = true;
        var $v_1 = new Xrm.DialogOptions();
        $v_1.height = 560;
        $v_1.width = 700;
        var $v_2 = this.$$d_Refresh;
        var $v_3 = Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory($v_2, [ this.$1_4 ]);
        Xrm.Internal.openDialog(Mscrm.CrmUri.create('/WebWizard/WizardContainer.aspx?WizardId=2F705211-E38E-4CF8-A0E3-980FC83025C6').toString(), $v_1, $v_0, null, $v_3);
    },
    
    $4k_4: function($p0) {
        if (!this.$1S_4) {
            this.DeleteSocialInsightsConfirmation(true);
            return;
        }
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_confirm_removesocialinsights.aspx');
        $v_0.get_query()['resource_title'] = 'Dialog_Remove_SocialInsight_Confirmation_Title';
        $v_0.get_query()['resource_description'] = 'Dialog_Remove_SocialInsight_Confirmation_Description';
        $v_0.get_query()['resource_body'] = 'Dialog_Remove_SocialInsight_Confirmation_Body';
        var $v_1 = new Xrm.DialogOptions();
        $v_1.width = 500;
        $v_1.height = 228;
        var $v_2 = this.$$d_DeleteSocialInsightsConfirmation;
        var $v_3 = Mscrm.SocialInsights.SocialInsightUtility.createCallbackFunctionFactory($v_2, [ this ]);
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_3);
    },
    
    DeleteSocialInsightsConfirmation: function(result) {
        if (!IsNull(result) && result) {
            var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
            var $$t_3 = this, $$t_4 = this;
            $v_0.deleteCommand(this.$1_4).done(function($p1_0) {
                $$t_3.$1_4 = $p1_0;
                $$t_3.$B_4($$t_3.$f_4);
                $$t_3.$1Y_4();
                $$t_3.$3V_4();
                $$t_3.$3W_4();
            }).fail(function() {
                $$t_4.$B_4($$t_4.$h_4);
            });
        }
    },
    
    $33_4: function($p0, $p1, $p2) {
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
    
    $4R_4: function() {
        this.get_editVisualizationButton().click(this.$$d_$4q_4);
        this.get_editButton().click(this.$$d_$4p_4);
        this.get_deleteButton().click(this.$$d_$4k_4);
    },
    
    $3V_4: function() {
        this.get_editVisualizationButton().unbind('click', this.$$d_$4q_4);
        this.get_editButton().unbind('click', this.$$d_$4p_4);
        this.get_deleteButton().unbind('click', this.$$d_$4k_4);
    },
    
    $4S_4: function() {
        this.get_editVisualizationButton().keydown(this.$$d_$53_4);
        this.get_editButton().keydown(this.$$d_$53_4);
        this.get_deleteButton().keydown(this.$$d_$53_4);
    },
    
    $3W_4: function() {
        this.get_editVisualizationButton().unbind('keydown', this.$$d_$53_4);
        this.get_editButton().unbind('keydown', this.$$d_$53_4);
        this.get_deleteButton().unbind('keydown', this.$$d_$53_4);
    },
    
    $53_4: function($p0) {
        if ($p0.which === 13) {
            $p0.target.click();
        }
    },
    
    $4V_4: function() {
        var $v_0 = (this.$G_4).parent().siblings();
        return !!$v_0.size();
    },
    
    $3G_4: function() {
        if (IsNull(this.$1_4)) {
            this.$1_4 = new Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration();
        }
        this.$1_4.FormId = this.$2O_4;
        this.$1_4.ControlId = this.$2G_4;
        this.$1_4.FormTypeCode = this.$2P_4;
        if (this.$Z_4) {
            if (isNullOrEmptyString(this.$1_4.RegardingObjectId)) {
                this.$1_4.RegardingObjectId = Xrm.Page.data.entity.getId();
            }
            if (!this.$1_4.RegardingObjectTypeCode) {
                this.$1_4.RegardingObjectTypeCode = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
            }
        }
    },
    
    $55_4: function() {
        this.$B_4(this.$1h_4);
        Xrm.Page.data.entity.addOnSave(this.$$d_$3g_4, false);
    },
    
    $3g_4: function($p0) {
        Xrm.Page.data.entity.removeOnSave(this.$$d_$3g_4);
        if (isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
            var $$t_1 = this;
            window.setTimeout(function() {
                $$t_1.$3g_4($p0);
            }, 100);
        }
        else {
            this.$1_4.RegardingObjectId = Xrm.Page.data.entity.getId();
            this.$1_4.RegardingObjectTypeCode = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
            this.$B_4(this.$f_4);
        }
    },
    
    $3s_4: function($p0) {
        if (this.get_hasConfiguration() || (this.$Z_4 && isNullOrEmptyString(this.$1_4.RegardingObjectId))) {
            $p0();
        }
        else {
            var $v_0 = new Mscrm.SocialInsights.SocialInsightsConfigurationService();
            var $$t_3 = this, $$t_4 = this;
            $v_0.retrieve(this.$1_4).done(function($p1_0) {
                if (!IsNull($p1_0)) {
                    $$t_3.$1_4 = $p1_0;
                }
            }).always(function() {
                $p0();
            });
        }
    },
    
    $46_4: function() {
        var $v_0 = (!IsNull(Xrm.Page.ui)) && (Xrm.Page.ui.getFormType() === 4);
        this.$1Y_4();
        this.$3V_4();
        this.$3W_4();
        if (!this.get_hasConfiguration() || !window._IsSocialInsightsInstanceAvailable) {
            if (this.$Z_4 && $v_0) {
                this.$B_4(this.$2y_4);
            }
            else {
                this.$B_4(this.$f_4);
            }
            setPerfMarkerTimestamp('FinishSocialInsightsControlInitializationTimestamp');
            return;
        }
        else if (this.$Z_4 && !$v_0) {
            this.$4R_4();
            this.$4S_4();
        }
        var $v_1 = Mscrm.SocialInsights.Common.DependencyInstanceContainer.get_urlServiceInstance().createDisplayUrl(this.$1_4.SocialDataItemId, this.$1_4.SocialDataParameters.split('-'));
        var $v_2 = this.$h_4.find('iframe');
        $v_2.removeAttr('url');
        $v_2.attr('src', $v_1);
        $v_2.load(this.$$d_$5A_4);
        setPerfMarkerTimestamp('FinishSocialInsightsControlInitializationTimestamp');
        setPerfMarkerTimestamp('StartSocialInsightsIFrameLoadTimestamp');
        this.$B_4(this.$h_4);
    },
    
    $5A_4: function($p0) {
        this.$h_4.find('iframe').unbind('load', this.$$d_$5A_4);
        setPerfMarkerTimestamp('FinishSocialInsightsIFrameLoadTimestamp');
    },
    
    $1Y_4: function() {
        var $v_0 = (!IsNull(Xrm.Page.ui)) && (Xrm.Page.ui.getFormType() === 4);
        if ((this.$1F_4 || this.$1a_4) && this.get_hasConfiguration() && this.$Z_4 && !$v_0) {
            this.$47_4(this.$l_4);
        }
        else {
            this.$X_4(this.$l_4);
        }
    },
    
    $6D_4: function() {
        this.$2o_4.hide();
        this.$2n_4.show();
        this.$B_4(this.$8_4);
    },
    
    $49_4: function() {
        this.$2o_4.show();
        this.$2n_4.hide();
        this.$B_4(this.$8_4);
    },
    
    $B_4: function($p0) {
        this.$X_4(this.$8_4);
        this.$X_4(this.$1h_4);
        this.$X_4(this.$f_4);
        this.$X_4(this.$2y_4);
        this.$X_4(this.$1V_4);
        this.$X_4(this.$h_4);
        this.$X_4(this.$1i_4);
        this.$X_4(this.$r_4);
        this.$X_4(this.$q_4);
        this.$47_4($p0);
    },
    
    $X_4: function($p0) {
        $p0.addClass('hidden');
    },
    
    $47_4: function($p0) {
        $p0.removeClass('hidden');
    }
}




Type.registerNamespace('Mscrm.SocialInsights.Runtime.Services');

Mscrm.SocialInsights.Runtime.Services.IUrlService = function() {}
Mscrm.SocialInsights.Runtime.Services.IUrlService.registerInterface('Mscrm.SocialInsights.Runtime.Services.IUrlService');


Mscrm.SocialInsights.Runtime.Services.UrlService = function() {
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl = function() {
    if (IsNull(Mscrm.SocialInsights.Common.InternalDataHelper.get_$g())) {
        return '';
    }
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$g().RootUrl;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo = function() {
    if (IsNull(Mscrm.SocialInsights.Common.InternalDataHelper.get_$g())) {
        return '';
    }
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$g().VersionInfo;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo = function() {
    if (IsNull(Mscrm.SocialInsights.Common.InternalDataHelper.get_$g())) {
        return '';
    }
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$g().OrgInfo;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl = function() {
    if (IsNull(Mscrm.SocialInsights.Common.InternalDataHelper.get_$g())) {
        return '';
    }
    return Mscrm.SocialInsights.Common.InternalDataHelper.get_$g().RestUrl || Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'api/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo() + 'solutions/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo();
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getAllWidgetsUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo() + 'solutions/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'widgets/';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgetInfoUrl = function(widgetId) {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getAllWidgetsUrl() + widgetId;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgetPictureUrl = function(widgetId) {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgetInfoUrl(widgetId) + '/graphics';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgets = function(widgetIds) {
    var $v_0 = '';
    for (var $v_1 = 0; $v_1 < widgetIds.length - 1; ++$v_1) {
        $v_0 += widgetIds[$v_1] + '-';
    }
    $v_0 += widgetIds[widgetIds.length - 1];
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'redirect?widgets=' + $v_0;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemsUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'searchitems';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getCreateOrEditSearchItemsUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.$3d() + 'searchitems';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemUrl = function(id) {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchItemsUrl() + '/' + id;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getEditSearchItemUrl = function(id) {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.getCreateOrEditSearchItemsUrl() + '/' + id;
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getCategoriesUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'categories/tree';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getAdvancedSetupLink = function(searchTermId) {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'settings/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + '#page:searchitems&id=' + (searchTermId || 'new');
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getCorsWorkaroundUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'cors.htm';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeOrigin = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl().substring(0, Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl().length - 1);
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getEstimateUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'searchitems' + '/' + 'estimate';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSearchQueriesUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.$3d() + 'searchqueries';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeDefaultsUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl() + 'searchitems' + '/' + 'config';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getSignInTargetUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'authenticate.htm';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.getAuthStatusUrl = function() {
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_rootUrl() + 'widgetapi/' + Mscrm.SocialInsights.Runtime.Services.UrlService.get_orgInfo() + 'auth_status.htm';
}
Mscrm.SocialInsights.Runtime.Services.UrlService.$3d = function() {
    if (Mscrm.SocialInsights.Runtime.Services.UrlService.get_versionInfo().indexOf('1.0') !== -1) {
        return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl().replace('1.0', '1.1');
    }
    return Mscrm.SocialInsights.Runtime.Services.UrlService.get_restUrl();
}
Mscrm.SocialInsights.Runtime.Services.UrlService.prototype = {
    
    createDisplayUrl: function(searchTerms, visualizationIds) {
        return Mscrm.SocialInsights.Runtime.Services.UrlService.getWidgets(visualizationIds) + '&nodeIds=' + searchTerms;
    }
}


Mscrm.SocialInsights.Runtime.Services.AjaxService = function() {
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$$cctor = function() {
    $P_CRM(window).unload(Mscrm.SocialInsights.Runtime.Services.AjaxService.$3X);
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$4T = function() {
    if (!IsNull(Mscrm.SocialInsights.Runtime.Services.AjaxService.$J)) {
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$J.unbind('load');
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$J.remove();
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$J = null;
    }
    ($P_CRM(window)).on('message', Mscrm.SocialInsights.Runtime.Services.AjaxService.$2S);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$J = $P_CRM('<iframe style=\'display:none;\'/>');
    $P_CRM('body').append(Mscrm.SocialInsights.Runtime.Services.AjaxService.$J);
    (Mscrm.SocialInsights.Runtime.Services.AjaxService.$J).on('load', function() {
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$5s();
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$3B = true;
    });
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$J.attr('src', Mscrm.SocialInsights.Runtime.Services.UrlService.getCorsWorkaroundUrl());
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$5s = function() {
    for (var $v_0 = 1; $v_0 <= Mscrm.SocialInsights.Runtime.Services.AjaxService.$2T; $v_0++) {
        var $v_1 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$15[$v_0 + ''];
        if (!IsNull($v_1)) {
            Mscrm.SocialInsights.Runtime.Services.AjaxService.$4D($v_1.ajaxCall);
        }
    }
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.makeRequest = function(requestType, url, data, createNewCorsFrame) {
    var $v_0 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$4g(requestType, url, data);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$2T++;
    var $v_1 = new Mscrm.SocialInsights.Models.AjaxCall();
    $v_1.id = Mscrm.SocialInsights.Runtime.Services.AjaxService.$2T;
    $v_1.ajax = $v_0;
    var $v_2 = new Mscrm.SocialInsights.Models.PendingRequest();
    $v_2.ajaxCall = $v_1;
    $v_2.deferred = jQueryApi.jQueryDeferredFactory.Deferred(Object, Mscrm.SocialInsights.Models.AjaxCall);
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$5Q($v_2, createNewCorsFrame);
    return $v_2.deferred.promise();
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$4g = function($p0, $p1, $p2) {
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
Mscrm.SocialInsights.Runtime.Services.AjaxService.$5Q = function($p0, $p1) {
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$15[$p0.ajaxCall.id + ''] = $p0;
    var $v_0 = $p0.ajaxCall.id;
    window.setTimeout(function() {
        return Mscrm.SocialInsights.Runtime.Services.AjaxService.$5o($v_0);
    }, Mscrm.SocialInsights.Runtime.Services.AjaxService.requestTimeout);
    if (IsNull(Mscrm.SocialInsights.Runtime.Services.AjaxService.$J) || $p1) {
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$4T();
    }
    if (!Mscrm.SocialInsights.Runtime.Services.AjaxService.$3B) {
        return;
    }
    Mscrm.SocialInsights.Runtime.Services.AjaxService.$4D($p0.ajaxCall);
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$4D = function($p0) {
    var $v_0 = JSON.stringify($p0);
    var $v_1 = (Mscrm.SocialInsights.Runtime.Services.AjaxService.$J[0]).contentWindow;
    $v_1.postMessage($v_0, '*');
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$5o = function($p0) {
    var $v_0 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$15[$p0.toString()];
    if (IsNull($v_0)) {
        return;
    }
    var $v_1 = $v_0.deferred;
    Mscrm.CrmDebug.assert($v_1.state() === 'pending');
    $v_0.ajaxCall.error = 'time is out';
    $v_1.reject($v_0.ajaxCall);
    delete Mscrm.SocialInsights.Runtime.Services.AjaxService.$15[$p0.toString()];
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$2S = function($p0) {
    var $v_0 = $p0.originalEvent;
    var $v_1 = $v_0.origin;
    if (Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeOrigin() !== $v_1) {
        return;
    }
    var $v_2 = '' + $v_0.data;
    var $v_3 = JSON.parse($v_2);
    if (IsNull($v_3.id)) {
        return;
    }
    var $v_4 = Mscrm.SocialInsights.Runtime.Services.AjaxService.$15[$v_3.id.toString()];
    if (IsNull($v_4)) {
        return;
    }
    if (IsNull($v_3.error)) {
        $v_4.deferred.resolve($v_3.result);
    }
    else {
        $v_4.deferred.reject($v_3);
    }
    delete Mscrm.SocialInsights.Runtime.Services.AjaxService.$15[$v_3.id.toString()];
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.$3X = function($p0) {
    $P_CRM(window).unbind('message', Mscrm.SocialInsights.Runtime.Services.AjaxService.$2S);
    if (!IsNull(Mscrm.SocialInsights.Runtime.Services.AjaxService.$J)) {
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$J.unbind('load');
        Mscrm.SocialInsights.Runtime.Services.AjaxService.$J.remove();
    }
}


Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType = function() {}
Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType.prototype = {
    get: 0, 
    post: 1, 
    put: 2
}
Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType.registerEnum('Mscrm.SocialInsights.Runtime.Services.AjaxService.RequestType', false);


Mscrm.SocialInsights.Runtime.Services.AuthCheckService = function() {
}
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$$cctor = function() {
    ($P_CRM(window)).on('message', Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$2S);
    $P_CRM(window).unload(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$3X);
}
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$3X = function($p0) {
    ($P_CRM(window)).unbind('message', Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$2S);
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$37();
}
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$5B = function() {
    Mscrm.CrmDebug.assert(IsNull(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K));
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K = $P_CRM('<iframe style=\'display:none;\' />');
    $P_CRM('body').append(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K);
    (Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K).on('load', function() {
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$3t();
    });
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$27 = Mscrm.SocialInsights.Runtime.Services.UrlService.getAuthStatusUrl();
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K.attr('src', Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$27);
}
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$3t = function() {
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$28 = window.setTimeout(function() {
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O.reject('request timed out');
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O = null;
        window.clearTimeout(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$28);
    }, 20000);
    (Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K[0]).contentWindow.postMessage('', '*');
}
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$2S = function($p0) {
    var $v_0 = $p0.originalEvent;
    var $v_1 = $v_0.origin;
    if ($v_1 !== Mscrm.SocialInsights.Runtime.Services.UrlService.getNetBreezeOrigin()) {
        return;
    }
    var $v_2 = Number.parseInvariant('' + $v_0.data);
    if (isNaN($v_2)) {
        return;
    }
    if (IsNull(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O)) {
        return;
    }
    window.clearTimeout(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$28);
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O.resolve(!$v_2);
}
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn = function() {
    if (Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$27 !== Mscrm.SocialInsights.Runtime.Services.UrlService.getAuthStatusUrl()) {
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O = null;
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$37();
    }
    if (IsNull(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O)) {
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O = jQueryApi.jQueryDeferredFactory.Deferred(Boolean, String);
        if (IsNull(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K)) {
            Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$5B();
        }
        else {
            Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$3t();
        }
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O.fail(function($p1_0) {
            Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$37();
        });
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O.always(function($p1_0) {
            Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O = null;
        });
    }
    return Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O.promise();
}
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$37 = function() {
    if (!IsNull(Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K)) {
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K.unbind('load');
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K.remove();
        Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K = null;
    }
}


Type.registerNamespace('Mscrm.SocialInsights.Shared');

Mscrm.SocialInsights.Shared.SignInUtility = function() {
}
Mscrm.SocialInsights.Shared.SignInUtility.launchSignIn = function() {
    var $v_0 = Mscrm.CrmUri.create(Mscrm.SocialInsights.Runtime.Services.UrlService.getSignInTargetUrl());
    openStdWin($v_0, null, Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_signInWindowWidth(), Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_signInWindowHeight(), '');
}


Mscrm.SocialInsights.Shared.SocialInsightsConstants = function() {
}
Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_wizardHeight = function() {
    return 560;
}
Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_wizardWidth = function() {
    return 700;
}
Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_signInWindowHeight = function() {
    return 572;
}
Mscrm.SocialInsights.Shared.SocialInsightsConstants.get_signInWindowWidth = function() {
    return 1000;
}


Mscrm.SocialInsights.Shared.SocialInsightsWebService = function() {
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.acceptTerms = function() {
    var $v_0 = '<organization>\r\n\t\t\t\t\t<socialinsightstermsaccepted>1</socialinsightstermsaccepted>\r\n\t\t\t\t</organization>';
    return Mscrm.SocialInsights.Shared.SocialInsightsWebService.$2q($v_0);
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.switchInstance = function($p0) {
    var $v_0 = '<organization>\r\n\t\t\t\t\t<socialinsightsinstance>{0}</socialinsightsinstance>\r\n\t\t\t\t</organization>';
    $p0 = CrmEncodeDecode.CrmXmlEncode($p0);
    var $v_1 = String.format($v_0, $p0);
    return Mscrm.SocialInsights.Shared.SocialInsightsWebService.$2q($v_1);
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.setSocialInsightsEnabled = function($p0) {
    var $v_0 = '<organization>\r\n\t\t\t\t\t<socialinsightsenabled>{0}</socialinsightsenabled>\r\n\t\t\t\t</organization>';
    var $v_1 = String.format($v_0, ($p0) ? 1 : 0);
    return Mscrm.SocialInsights.Shared.SocialInsightsWebService.$2q($v_1);
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.switchInstanceAndSetEnabled = function($p0, $p1) {
    var $v_0 = '<organization>\r\n\t\t\t\t\t<socialinsightsinstance>{0}</socialinsightsinstance>\r\n\t\t\t\t\t<socialinsightsenabled>{1}</socialinsightsenabled>\r\n\t\t\t\t</organization>';
    var $v_1 = String.format($v_0, CrmEncodeDecode.CrmXmlEncode($p0), ($p1) ? 1 : 0);
    return Mscrm.SocialInsights.Shared.SocialInsightsWebService.$2q($v_1);
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.get_$3r = function() {
    return Mscrm.CrmUri.create('/Tools/SocialInsights/cmds/cmd_update.aspx');
}
Mscrm.SocialInsights.Shared.SocialInsightsWebService.$2q = function($p0) {
    var $v_0 = new jQueryAjaxOptions();
    $v_0.beforeSend = function($p1_0) {
        SetTokenInHeader($p1_0, Mscrm.SocialInsights.Shared.SocialInsightsWebService.get_$3r());
    };
    $v_0.url = Mscrm.SocialInsights.Shared.SocialInsightsWebService.get_$3r().toString();
    $v_0.type = 'POST';
    $v_0.data = $p0;
    return $P_CRM.ajax($v_0);
}


Type.registerNamespace('Microsoft.Crm.Core.Application.WebServices');

Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration = function() {
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
Mscrm.SocialInsights.SocialInsightUtility.registerClass('Mscrm.SocialInsights.SocialInsightUtility');
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
Mscrm.SocialInsights.Views.MslSignInView.registerClass('Mscrm.SocialInsights.Views.MslSignInView', Mscrm.SocialInsights.Configuration.Views.WizardPageHandler);
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
Mscrm.SocialInsights.Provisioning.NetBreezeOnPremiseConfigurationHandler.registerClass('Mscrm.SocialInsights.Provisioning.NetBreezeOnPremiseConfigurationHandler', Mscrm.SocialInsights.Views.BaseView);
Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.registerClass('Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl', Mscrm.UIControl);
Mscrm.SocialInsights.Runtime.Services.UrlService.registerClass('Mscrm.SocialInsights.Runtime.Services.UrlService', null, Mscrm.SocialInsights.Runtime.Services.IUrlService);
Mscrm.SocialInsights.Runtime.Services.AjaxService.registerClass('Mscrm.SocialInsights.Runtime.Services.AjaxService');
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.registerClass('Mscrm.SocialInsights.Runtime.Services.AuthCheckService');
Mscrm.SocialInsights.Shared.SignInUtility.registerClass('Mscrm.SocialInsights.Shared.SignInUtility');
Mscrm.SocialInsights.Shared.SocialInsightsConstants.registerClass('Mscrm.SocialInsights.Shared.SocialInsightsConstants');
Mscrm.SocialInsights.Shared.SocialInsightsWebService.registerClass('Mscrm.SocialInsights.Shared.SocialInsightsWebService');
Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration.registerClass('Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration');
Mscrm.SocialInsights.Common.Constants.badData = 'for(;;);';
Mscrm.SocialInsights.Common.Constants.socialInsightControlJsonData = '_SocialInsightControlJsonData';
Mscrm.SocialInsights.Common.Constants.isSocialInsightsInstanceAvailable = '_IsSocialInsightsInstanceAvailable';
Mscrm.SocialInsights.Common.Constants.areSocialInsightsEnabled = '_AreSocialInsightsEnabled';
Mscrm.SocialInsights.Common.DependencyInstanceContainer.$1p = null;
Mscrm.SocialInsights.Common.InternalDataHelper.$1O = null;
Mscrm.SocialInsights.Views.CssClasses.disabled = 'disabled';
Mscrm.SocialInsights.Views.CssClasses.selected = 'selected';
Mscrm.SocialInsights.Views.CssClasses.focused = 'focused';
Mscrm.SocialInsights.Views.ListItemMoveControlsView.moveUpCssClass = 'List-MoveUp';
Mscrm.SocialInsights.Views.ListItemMoveControlsView.moveDownCssClass = 'List-MoveDown';
Mscrm.SocialInsights.Views.ListView.cssClass = 'listview';
Mscrm.SocialInsights.Views.ListViewItem.containerCssClass = 'listview-item-container';
Mscrm.SocialInsights.Views.ListViewItem.indexCssClass = 'listview-item-index';
Mscrm.SocialInsights.Views.ListViewItem.cssClass = 'listview-item';
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$4J = Mscrm.Views.CrmMoveIcons.$9(window.CDNURL + '/_imgs/socialinsight/topicdefault.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$4I = Mscrm.Views.CrmMoveIcons.$9(window.CDNURL + '/_imgs/socialinsight/topichover.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$4K = Mscrm.Views.CrmMoveIcons.$9(window.CDNURL + '/_imgs/socialinsight/topicselect.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3P = Mscrm.Views.CrmMoveIcons.$9(window.CDNURL + '/_imgs/socialinsight/categorydefault.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3O = Mscrm.Views.CrmMoveIcons.$9(window.CDNURL + '/_imgs/socialinsight/categoryhover.png');
Mscrm.SocialInsights.Views.ChooseTopicTypeView.$3Q = Mscrm.Views.CrmMoveIcons.$9(window.CDNURL + '/_imgs/socialinsight/categoryselect.png');
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
Mscrm.SocialInsights.Views.WidgetTypeView.defaultLayoutFormat = '<div class=\'widget-type-view\'>\r\n\t\t\t\t<select class=\'widget-type\' title=\'{0}\' tabindex=\'-1\'></select>\r\n\t\t\t\t<div class=\'widget-type-description\'>\r\n\t\t\t\t\t<div class=\'widget-type-description-cell\'>\r\n\t\t\t\t\t\t<div class=\'widget-type-description-text\' direction=\'{1}\' tabindex=\'-1\'><div/></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<img class=\'widget-type-preview\'>\r\n\t\t\t\t<button class=\'{2}\' title=\'{3}\' tabindex=\'-1\'><img alt=\'{3}\'/></button>\r\n\t\t\t</div>';
Mscrm.Views.CrmMoveIcons.enabledUpArrowInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Arrow_Up_active_30.png');
Mscrm.Views.CrmMoveIcons.disabledUpArrowInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Arrow_Up_inactive_30.png');
Mscrm.Views.CrmMoveIcons.hoverUpArrowInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Arrow_Up_active_hover_30.png');
Mscrm.Views.CrmMoveIcons.enabledDownArrowInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Arrow_Down_active_30.png');
Mscrm.Views.CrmMoveIcons.disabledDownArrowInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Arrow_Down_inactive_30.png');
Mscrm.Views.CrmMoveIcons.hoverDownArrowInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Arrow_Down_active_hover_30.png');
Mscrm.Views.CrmMoveIcons.enabledDeleteInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Delete_visualization_12.png');
Mscrm.Views.CrmMoveIcons.hoverDeleteInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Delete_visualization_hover_12.png');
Mscrm.Views.CrmMoveIcons.enabledAddInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Add_20.png');
Mscrm.Views.CrmMoveIcons.hoverAddInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Add_hover_20.png');
Mscrm.Views.CrmMoveIcons.disabledAddInfo = Mscrm.Views.CrmMoveIcons.$9('/_imgs/SocialInsight/Add_inactive_20.png');
Mscrm.Views.CrmMoveControlsView.moveCaptionCssClass = 'List-MoveCaption';
Mscrm.SocialInsights.Configuration.Models.WidgetRestriction.none = 'NONE';
Mscrm.SocialInsights.Configuration.Models.WidgetRestriction.singleSearchItem = 'SINGLE_SEARCH_ITEM';
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.nullEstimateResponse = 'NullEstimateResponse';
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.topicTooBroad = 'TopicTooBroad';
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.signInRequired = 'SignInRequired';
Mscrm.SocialInsights.ViewModels.CreateTopicViewModel.$x = false;
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.$8 = null;
Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.handler = null;
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$1Z = null;
Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.$i = null;
Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogWidth = 500;
Mscrm.SocialInsights.Provisioning.NetBreezeConfirmationDialogDefaults.confirmationDialogHeight = 286;
Mscrm.SocialInsights.Runtime.Controls.SocialInsightControl.allControls = [];
Mscrm.SocialInsights.Runtime.Services.AjaxService.requestTimeout = 120000;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$2T = 0;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$15 = {};
Mscrm.SocialInsights.Runtime.Services.AjaxService.$J = null;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$3B = false;
Mscrm.SocialInsights.Runtime.Services.AjaxService.$$cctor();
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$O = null;
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$K = null;
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$27 = '';
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$28 = 0;
Mscrm.SocialInsights.Runtime.Services.AuthCheckService.$$cctor();
Mscrm.SocialInsights.Shared.SignInUtility.maxSignInChecks = 24;
Mscrm.SocialInsights.Shared.SignInUtility.signInCheckInterval = 4500;
//@ sourceMappingURL=.srcmap
