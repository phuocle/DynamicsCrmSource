Type.registerNamespace('ActivityFeeds.UI');

ActivityFeeds.UI.IActivityFeedService = function() {}
ActivityFeeds.UI.IActivityFeedService.registerInterface('ActivityFeeds.UI.IActivityFeedService');


ActivityFeeds.UI.IFollowService = function() {}
ActivityFeeds.UI.IFollowService.registerInterface('ActivityFeeds.UI.IFollowService');


Type.registerNamespace('Mscrm.TurboForm.Control.SfaTabs.Commands');

Mscrm.TurboForm.Control.SfaTabs.Commands.ICreateSFATabControlsCommand = function() {}
Mscrm.TurboForm.Control.SfaTabs.Commands.ICreateSFATabControlsCommand
    .registerInterface('Mscrm.TurboForm.Control.SfaTabs.Commands.ICreateSFATabControlsCommand');


Mscrm.TurboForm.Control.SfaTabs.Commands.CreateSFATabControlsCommand = function() {
}
Mscrm.TurboForm.Control.SfaTabs.Commands.CreateSFATabControlsCommand.prototype = {
    $H_0: null,

    get_sfaTabsInitDeferredStatements: function() {
        return this.$H_0;
    },

    set_sfaTabsInitDeferredStatements: function(value) {
        this.$H_0 = value;
        return value;
    },

    initialize: function(sfatabDeferredStatements) {
        this.$H_0 = sfatabDeferredStatements;
    },

    execute: function() {
        eval(this.$H_0);
    }
}


Type.registerNamespace('Mscrm.TurboForm.Control.SfaTabs.Components');

Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent = function() {
    this.$0_0 = new Mscrm.TurboForm.Control.SfaTabs.Components
        .WallDataPreloader(Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.getName());
    this.$0_0.$D_0 = Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.preloadRequestFactory;
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.get_instance = function() {
    return Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$1;
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.preloadRequestFactory = function() {
    var $v_0 = new Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesPreloadRequest();
    $v_0.$4_1 = Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$c();
    var $v_1 = Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$d();
    var $v_2 = Mscrm.Caching.LocalStorageCache
        .getEntityMetadataCache(Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().entityName);
    if (IsNull($v_0.$4_1)) {
        $v_0.$4_1 = $v_2.get_item('ActivityPointerRelationshipName');
        if (IsNullOrEmptyString($v_0.$4_1)) {
            return null;
        }
        Xrm.Internal.trace.logT(Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent,
            'PreloadRequestFactory: using ActivityPointerRelationshipName from metadata cache');
    } else {
        $v_2.set_item('ActivityPointerRelationshipName', $v_0.$4_1);
    }
    if (($v_1 != null)) {
        $v_2.set_item('IsActivityParty', ($v_1) ? '1' : '0');
    } else {
        var $v_3 = $v_2.get_item('IsActivityParty');
        if (IsNullOrEmptyString($v_3)) {
            return null;
        }
        $v_1 = $v_3 === '1';
        Xrm.Internal.trace.logT(Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent,
            'PreloadRequestFactory: using IsActivityParty from metadata cache: {0}',
            $v_3);
    }
    $v_0.$C_1 = $v_1;
    return $v_0;
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$c = function() {
    if (IsNull(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings)) {
        return null;
    }
    return Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ACTIVITYPOINTER_RELATIONSHIP_NAME;
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$d = function() {
    if (IsNull(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings) ||
        IsNull(Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ISACTIVITYPARTY_LOC_STRING)) {
        return null;
    }
    return Mscrm.FormInputControl.ActivitiesWallPage.localizedStrings.ISACTIVITYPARTY_LOC_STRING.toUpperCase() ===
        'TRUE';
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.prototype = {
    $0_0: null
}


Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesPreloadRequest = function() {
    Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesPreloadRequest.initializeBase(this);
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesPreloadRequest.prototype = {
    $4_1: null,

    get_activityPointerRelationshipName: function() {
        return this.$4_1;
    },

    set_activityPointerRelationshipName: function(value) {
        this.$4_1 = value;
        return value;
    },

    $C_1: false,

    get_isActivityParty: function() {
        return this.$C_1;
    },

    set_isActivityParty: function(value) {
        this.$C_1 = value;
        return value;
    },

    equals: function(obj) {
        if (!Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest.prototype.equals.call(this, obj)) {
            return false;
        }
        if (!(Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesPreloadRequest.isInstanceOfType(obj))) {
            return false;
        }
        var $v_0 = obj;
        return this.$4_1 === $v_0.$4_1 && this.$C_1 === $v_0.$C_1;
    },

    createWallService: function() {
        return new ActivitiesWall.Service.WallService(this.$5_0.get_id(),
            null,
            this.$5_0.get_typeCode().toString(),
            this.$4_1,
            this.$C_1);
    }
}


Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsPreloadRequest = function() {
    Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsPreloadRequest.initializeBase(this);
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsPreloadRequest.prototype = {
    createWallService: function() {
        var $v_0 = new Sales.Common.CrmSoapServiceProxy.ObjectModel.EntityReference();
        $v_0.id = this.$5_0.get_id();
        $v_0.logicalName = this.$5_0.get_logicalName();
        return new Wall.Service.WallService(Xrm.Page.context, $v_0);
    }
}


Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent = function() {
    this.$$d_$t_0 = Function.createDelegate(this, this.$t_0);
    this.$0_0 = new Mscrm.TurboForm.Control.SfaTabs.Components
        .WallDataPreloader(Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.getName());
    this.$0_0.$D_0 = this.$$d_$t_0;
}
Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.get_instance = function() {
    return Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.$1;
}
Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.prototype = {
    $t_0: function() {
        var $v_0 = new Mscrm.TurboForm.Control.SfaTabs.Components.NotesPreloadRequest();
        return $v_0;
    },

    $0_0: null,

    get_preloader: function() {
        return this.$0_0;
    },

    set_preloader: function($p0) {
        this.$0_0 = $p0;
        return $p0;
    }
}


Mscrm.TurboForm.Control.SfaTabs.Components.NotesPreloadRequest = function() {
    Mscrm.TurboForm.Control.SfaTabs.Components.NotesPreloadRequest.initializeBase(this);
}
Mscrm.TurboForm.Control.SfaTabs.Components.NotesPreloadRequest.prototype = {
    createWallService: function() {
        return new Mscrm.FormInputControl.NotesV2.NotesWallService(Xrm.Page.context, this.$5_0, $P_CRM(window), null);
    }
}


Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent = function() {
    this.$$d_$Q_0 = Function.createDelegate(this, this.$Q_0);
}
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$$cctor = function() {
    Mscrm.TurboForm.Control.PageBootstrapper
        .add_onDataBound(Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$1.$$d_$Q_0);
}
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$M = function() {
    var $v_0 = Mscrm.TurboForm.Control.PageManager.get_instance().get_activityFeedsState();
    return ($v_0.IsConfigured && $v_0.IsWallEnabled);
}
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$j = function() {
    var $v_0 = $get('notescontrol');
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
            if (!IsNull($v_2) &&
            ($v_2.getAttribute('tabid') === 'ActivityFeedsSystemTab' ||
                $v_2.getAttribute('tabid') === 'ActivitiesTab')) {
                return true;
            }
        }
    }
    return false;
}
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$e = function() {
    var $v_0 = $get('WebResource_RecordWall');
    if (!IsNull($v_0)) {
        var $v_1 = $P_CRM($v_0);
        var $v_2 = ($v_1).closest('.ms-crm-InlineTab-Read');
        if (!IsNull($v_2)) {
            $v_2.css('display', 'none');
        }
    }
}
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$x = function() {
    var $v_0 = 'ActivityFeedsSystemTab';
    var $v_1 = 'ActivitiesTab';
    var $v_2 = $get('notescontrol');
    if (!IsNull($v_2)) {
        if ($v_2.nodeName.toUpperCase() === 'IFRAME' ||
            !Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$j()) {
            return;
        }
        var $v_3 = Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$M();
        var $v_4 = XUI.Html.DomUtils.GetFirstChild($v_2);
        if (!IsNull($v_4)) {
            var $v_5 = ($v_3) ? '' : 'none';
            var $v_6 = XUI.Html.DomUtils.GetFirstChild($v_4);
            if (Mscrm.Utilities.isIosDevice() && !IsNull($v_6) && $v_6.getAttribute('tabid') === $v_0) {
                $v_6.style.display = $v_5;
            } else if (!IsNull($v_6) && $v_6.getAttribute('tabid') === $v_1) {
                $v_6.style.display = $v_5;
                var $v_8 = XUI.Html.DomUtils.GetNextSibling($v_6);
                if (!IsNull($v_8) && $v_8.getAttribute('tabid') === $v_0) {
                    $v_8.style.display = $v_5;
                }
            } else {
                Mscrm.CrmDebug.assert(false, 'Failed to find tab for \'ActivityFeedsTab\'');
            }
            var $v_7 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetLastChild($v_2));
            if (Mscrm.Utilities.isIosDevice() && !IsNull($v_7) && $v_7.getAttribute('tabid') === $v_0) {
                $v_7.style.display = $v_5;
            } else if (!IsNull($v_7) && $v_6.getAttribute('tabid') === $v_1) {
                $v_7.style.display = $v_5;
                var $v_9 = XUI.Html.DomUtils.GetNextSibling($v_7);
                if (!IsNull($v_9) && $v_9.getAttribute('tabid') === $v_0) {
                    $v_9.style.display = $v_5;
                }
            } else {
                Mscrm.CrmDebug.assert(false, 'Failed to find contents for \'ActivityFeedsTab\'');
            }
        }
    }
}
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$i = function() {
    Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$x();
    var $v_0 = $find('notescontrol');
    var $v_1 = (typeof(Mscrm.CaseResearchConstants) !== 'undefined')
        ? $find('header_process_CaseResearch_LinkControl_casesconversations')
        : null;
    if (!Mscrm.Utilities.isProcessForm() && isNullOrEmptyString(getCurrentEntityId())) {
        Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$e();
    }
    if (!IsNull($v_0)) {
        $v_0.set_shouldDeferDataProcessing(false);
        $v_0.setActivityFeedsTabState(Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$M());
    }
    if (!IsNull($v_1)) {
        $v_1.setActivityFeedsTabState(Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$M());
    }
}
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.prototype = {
    $Q_0: function($p0, $p1) {
        Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$i();
    }
}


Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent = function() {
    this.$$d_$q_0 = Function.createDelegate(this, this.$q_0);
    this.$$d_$Q_0 = Function.createDelegate(this, this.$Q_0);
    this.$0_0 = new Mscrm.TurboForm.Control.SfaTabs.Components
        .WallDataPreloader(Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.getName());
    var $$t_0 = this;
    this.$0_0.$D_0 = function() {
        return new Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsPreloadRequest();
    };
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$$cctor = function() {
    Mscrm.TurboForm.Control.PageBootstrapper
        .add_onDataBound(Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$1.$$d_$Q_0);
    Mscrm.TurboForm.Control.PageBootstrapper
        .add_onBeforeUnload(Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$1.$$d_$q_0);
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.get_instance = function() {
    return Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$1;
}
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.prototype = {
    $0_0: null,

    get_preloader: function() {
        return this.$0_0;
    },

    set_preloader: function($p0) {
        this.$0_0 = $p0;
        return $p0;
    },

    $Q_0: function($p0, $p1) {
        this.$10_0();
    },

    $q_0: function($p0, $p1) {
        this.$11_0();
    },

    $6_0: null,

    $10_0: function() {
        var $v_0 = Mscrm.TurboForm.Control.PageManager.get_instance().get_activityFeedsState();
        if (!$v_0) {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent,
                'Activity Feeds state is not accessible. Some features may be unavailable');
            return;
        }
        this.$6_0 = new ActivityFeeds.UI.ActivityFeedService();
        this.$6_0.set_hasPostConfig($v_0.IsConfigured);
        this.$6_0.set_isFollowed($v_0.IsFollowed);
        this.$6_0.set_isFollowedInYammer($v_0.IsFollowedInYammer);
        Xrm.Internal.getServiceDirectory().register(ActivityFeeds.UI.IActivityFeedService, this.$6_0);
        Xrm.Internal.getServiceDirectory().register(ActivityFeeds.UI.IFollowService, this.$6_0);
    },

    $11_0: function() {
        if (this.$6_0) {
            Xrm.Internal.getServiceDirectory().unregister(ActivityFeeds.UI.IActivityFeedService, this.$6_0);
            Xrm.Internal.getServiceDirectory().unregister(ActivityFeeds.UI.IFollowService, this.$6_0);
            this.$6_0 = null;
        }
    }
}


Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader = function($p0) {
    this.$$d_$n_0 = Function.createDelegate(this, this.$n_0);
    this.$$d_$p_0 = Function.createDelegate(this, this.$p_0);
    if (IsNull($p0)) {
        throw Error.argumentNull('componentName');
    }
    Mscrm.TurboForm.Control.PageBootstrapper.add_onLoadStarted(this.$$d_$p_0);
    Mscrm.TurboForm.Control.PageBootstrapper.add_onBeforeUnload(this.$$d_$n_0);
    this.$I_0 = $p0;
}
Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader.$P = function() {
    var $v_0 = new Wall.Service.ObjectModel.EntityReference();
    var $v_1 = Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState();
    $v_0.set_id((IsNull($v_1.recordId)) ? '' : $v_1.recordId.toString());
    $v_0.set_logicalName($v_1.entityName);
    $v_0.set_typeCode(Number.parseInvariant($v_1.etc));
    return $v_0;
}
Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader.$b = function() {
    var $v_0 = Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().primaryFormId;
    if (IsNull($v_0) || $v_0.equals(Microsoft.Crm.Client.Core.Framework.Guid.get_empty())) {
        return Mscrm.TurboForm.Control.DefaultFormCache.get_instance()
            .get_item(Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().entityName);
    }
    return $v_0;
}
Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader.prototype = {
    $I_0: null,
    $B_0: null,
    $F_0: null,
    $D_0: null,

    get_wallRequestFactory: function() {
        return this.$D_0;
    },

    set_wallRequestFactory: function($p0) {
        this.$D_0 = $p0;
        return $p0;
    },

    get_preloadRequest: function() {
        var $v_0 = Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader.$P();
        var $v_1 = Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().primaryFormId;
        var $v_2 = this.$O_0($v_0, $v_1);
        if (IsNull(this.$B_0) || IsNull(this.$F_0)) {
            return null;
        }
        if (this.$B_0.equals($v_2)) {
            return this.$F_0;
        } else {
            Xrm.Tracing.XrmTraceHelper.traceWarning(this,
                'discarded preloaded data for {0}: request parameters mismatch',
                this.$I_0);
            return null;
        }
    },

    togglePreloadingForCurrentForm: function($p0) {
        var $v_0 = Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().entityName;
        var $v_1 = Mscrm.TurboForm.Control.PageManager.get_instance().get_pageState().primaryFormId;
        var $v_2 = this.$R_0($v_0, $v_1);
        Mscrm.CrmLocalStorage.setItem($v_2, ($p0) ? 'preload' : '');
    },

    $m_0: function($p0, $p1) {
        var $v_0 = this.$R_0($p0, $p1);
        return Mscrm.CrmLocalStorage.getItem($v_0) === 'preload';
    },

    $p_0: function($p0, $p1) {
        this.$B_0 = null;
        this.$F_0 = null;
        var $v_0 = Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader.$P();
        if (Microsoft.Crm.Client.Core.Framework.Guid.isNullOrEmpty($v_0.get_id())) {
            return;
        }
        var $v_1 = Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader.$b();
        var $v_2 = this.$m_0($v_0.get_logicalName(), $v_1);
        if ($v_2) {
            this.$12_0($v_0, $v_1);
        }
    },

    $R_0: function($p0, $p1) {
        return String.format('{0}/Preload/{1}/{2}', this.$I_0, $p0, $p1);
    },

    $12_0: function($p0, $p1) {
        this.$B_0 = this.$O_0($p0, $p1);
        if (IsNull(this.$B_0)) {
            return;
        }
        this.$F_0 = this.$B_0.submit();
    },

    $O_0: function($p0, $p1) {
        var $v_0 = this.$D_0();
        if (!IsNull($v_0)) {
            $v_0.$5_0 = $p0;
            $v_0.$A_0 = $p1;
            $v_0.$E_0 = this.$I_0;
        }
        return $v_0;
    },

    $n_0: function($p0, $p1) {
        this.$B_0 = null;
        this.$F_0 = null;
    }
}


Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest = function() {
}
Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest.$Y = function($p0) {
    var $v_0 = $p0.getWallServiceFactory().createRetrievePostsRequest();
    $v_0.set_pageNumber(1);
    $v_0.set_pageSize(10);
    $v_0.set_endDate(null);
    $v_0.set_pagingCookie(null);
    return $v_0;
}
Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest.$a = function($p0, $p1) {
    if ($p0 === $p1) {
        return true;
    }
    return $p0.get_id() === $p1.get_id() && $p0.get_logicalName() === $p1.get_logicalName();
}
Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest.prototype = {
    $5_0: null,

    get_entityReference: function() {
        return this.$5_0;
    },

    set_entityReference: function(value) {
        this.$5_0 = value;
        return value;
    },

    $A_0: null,

    get_formId: function() {
        return this.$A_0;
    },

    set_formId: function(value) {
        this.$A_0 = value;
        return value;
    },

    $E_0: null,

    get_componentName: function() {
        return this.$E_0;
    },

    set_componentName: function(value) {
        this.$E_0 = value;
        return value;
    },

    submit: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Wall.Interfaces.IRetrievePostsResponse, Error);
        var $v_1 = this.createWallService();
        if (IsNull($v_1)) {
            return null;
        }
        Xrm.Internal.setPerfMarkerTimestamp(this.$E_0 + '_DataPreload');
        Xrm.Tracing.XrmTraceHelper.traceLog(this, 'preloading data...');
        var $v_2 = Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest.$Y($v_1);
        var $$t_4 = this;
        $v_1.retrievePosts($v_2,
            function($p1_0) {
                Xrm.Internal.setPerfMarkerTimestamp($$t_4.$E_0 + '_DataPreload_End');
                $v_0.resolve($p1_0);
            });
        return $v_0.promise();
    },

    equals: function(obj) {
        if (IsNull(obj)) {
            return false;
        }
        if (!(Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest.isInstanceOfType(obj))) {
            return false;
        }
        var $v_0 = obj;
        return Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest.$a(this.$5_0, $v_0.$5_0) &&
            !IsNull(this.$A_0) &&
            !IsNull($v_0.$A_0) &&
            this.$A_0.equals($v_0.$A_0);
    }
}


Type.registerNamespace('Mscrm.TurboForm.Control.SfaTabs.ViewModels');

Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel = function(descriptor, container, parentFormUI) {
    Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel
        .initializeBase(this, [descriptor, container, parentFormUI]);
}
Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel.$$cctor = function() {
    Mscrm.TurboForm.Control.ControlBuilder.get_instance()
        .registerViewModelBuilder(Mscrm.TurboForm.Common.FormControlClassId.notesControl,
            Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel.$T);
}
Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel.$T = function($p0, $p1, $p2) {
    var $v_0 = new Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel($p0, $p1, $p2);
    return $v_0;
}
Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel.prototype = {
    getControlType: function() {
        return 'none';
    }
}


Type.registerNamespace('Mscrm.TurboForm.Control.SfaTabs.Views');

Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView = function($p0) {
    this.$$d_$o_3 = Function.createDelegate(this, this.$o_3);
    this.$$d_$u_3 = Function.createDelegate(this, this.$u_3);
    Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.initializeBase(this, [$p0]);
}
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$$cctor = function() {
    Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$w();
    Mscrm.TurboForm.Control.ControlBuilder.get_instance()
        .registerViewBuilder(Mscrm.TurboForm.Common.FormControlClassId.notesControl,
            Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.buildSfaTabsView);
}
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.get_htmlLoader = function() {
    return Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8;
}
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$L = function($p0) {
    return $p0.parentNode.style.display === 'none';
}
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$w = function() {
    Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker('RequestNotesControlLayout_Start', 1);
    var $v_0 = Xrm.Internal.startMetricsStopwatch('RequestNotesControlLayout');
    $v_0.start();
    var $v_1 = Xrm.Page.context.getUserLcid();
    var $v_2 = window.top.VERSION_STAMP;
    var $v_3 = jQueryApi.jQueryDeferredFactory.Deferred(String, Error);
    var $v_4 = jQueryApi.jQueryDeferredFactory.Deferred(String, Error);
    var $v_5 = jQueryApi.jQueryDeferredFactory.Deferred(String, Error);
    var $v_6 = jQueryApi.jQueryDeferredFactory.Deferred(String, Error);
    var $v_7 = Mscrm.CrmUri.create(String.format('{0}msdyn_/WallContent.{1}.htm', '$webresource:', $v_1));
    var $v_8 = Mscrm.CrmUri.create(String.format('{0}msdyn_/FirstRunContent.{1}.htm', '$webresource:', $v_1));
    var $v_9 = Mscrm.CrmUri.create('/_static/WallControl/ActivitiesWallContent.aspx');
    var $v_A = Mscrm.CrmUri.create('/_controls/notes/notesv2template.aspx');
    $v_7.get_query()['ver'] = $v_2;
    $v_8.get_query()['ver'] = $v_2;
    $v_9.get_query()['ver'] = $v_2;
    $v_A.get_query()['lcid'] = $v_1;
    $v_A.get_query()['ver'] = $v_2;
    var $v_B = $v_7.toString();
    var $v_C = $v_8.toString();
    var $v_D = $v_9.toString();
    var $v_E = $v_A.toString();
    Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8.loadContent($v_B,
        'html',
        function($p1_0) {
            $P_CRM($p1_0);
            $v_3.resolve($p1_0);
        });
    Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8.loadContent($v_C,
        'html',
        function($p1_0) {
            $v_4.resolve($p1_0);
        });
    Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8.loadContent($v_D,
        'html',
        function($p1_0) {
            $v_5.resolve($p1_0);
        });
    Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8.loadContent($v_E,
        'html',
        function($p1_0) {
            $v_6.resolve($p1_0);
        });
    $P_CRM.when($v_3, $v_4, $v_5, $v_6).done(function() {
        $v_0.stop();
    });
}
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.buildSfaTabsView = function(descriptor) {
    return new Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView(descriptor);
}
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$X = function() {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Object);
    Mscrm.TurboForm.Control.CustomScriptsManager.get_instance().addMessageHandler('TurboFormPostOnloadTimestamp',
        function() {
            $v_0.resolve(null);
        });
    return $v_0.promise();
}
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.prototype = {
    $3_3: null,
    $K_3: null,
    $7_3: false,
    $9_3: null,
    $2_3: null,
    $G_3: null,

    $V_3: function() {
        if (this.getKey() === 'header_process_CaseResearch_LinkControl_casesconversations' &&
            typeof(Mscrm.CaseResearchConstants) !== 'undefined') {
            this.$7_3 = true;
        } else {
            this.$7_3 = false;
        }
    },

    bindInternal: function() {
        this.$V_3();
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker('Turbo.ActivityFeeds_Start', 1);
        var $v_0 = Xrm.Internal.startMetricsStopwatch('Bind SFA Tabs');
        $v_0.start();
        Mscrm.TurboForm.Control.View.ControlViewBase.prototype.bindInternal.call(this);
        this.$K_3 = Xrm.Page.data.entity;
        this.$W_3();
        this.$Z_3();
        this.$r_3();
        this.$s_3();
        this.$v_3();
        $v_0.stop();
    },

    $v_3: function() {
        this.$S_3();
        var $v_0 = $find(this.getKey());
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.get_defaultTabId();
            $v_0.setActiveTab($v_1);
            if (window.IS_ACTIONHUB_ENABLED) {
                this.$U_3($v_1);
            }
            this.$z_3($v_1);
        } else {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                'Could not find SFATabsControl with Key: {0} ',
                this.getKey());
        }
    },

    $z_3: function($p0) {
        var $v_0 = $P_CRM('#header');
        if ($p0 === 'ActivityFeedsTab') {
            $v_0.attr('style', 'display:block;');
        } else {
            $v_0.attr('style', 'display:none;');
        }
    },

    $U_3: function($p0) {
        var $v_0 = $P_CRM('#containerID');
        if ($p0 !== 'ActionHubTab') {
            if (this.$l_3() && !this.$k_3()) {
                var $v_1 = $v_0.children('#iFrmActionCards');
                $v_1.attr('src', 'about:blank');
                $v_0.attr('style', 'display:block;');
            }
        } else {
            $v_0.attr('style', 'display:none;');
        }
    },

    $k_3: function() {
        return Microsoft.Crm.Client.Core.Framework.Guid.get_empty().equals(Xrm.Page.data.entity.getId());
    },

    $l_3: function() {
        var $v_0 = window.top.SHOWCAROUSEL;
        return $v_0;
    },

    $W_3: function() {
        var $v_0 = String.format('activityfeedscontrol_{0}_container', this.getKey());
        var $v_1 = $get($v_0);
        if (!this.$7_3) {
            Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$1.$0_0
                .togglePreloadingForCurrentForm(false);
        }
        if ($v_1) {
            if (!Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$L($v_1)) {
                this.$g_3($v_1);
            }
        } else {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                'activity feeds element {0} was not found',
                $v_0);
        }
    },

    $g_3: function($p0) {
        Xrm.Internal.trace.logT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView, 'initializing ActivityFeedsControl');
        this.$3_3 = $create(ActivityFeeds.UI.ActivityFeedsControl, null, null, null, $p0);
        this.$3_3.set_hasInitialSkeleton(true);
        this.$3_3.set_isTurboForm(true);
        if (!this.$7_3) {
            this.$3_3.set_preloadRequest(this.$N_3(Wall.Interfaces.IRetrievePostsResponse,
                Error,
                Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$1.$0_0.get_preloadRequest()));
            Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$1.$0_0
                .togglePreloadingForCurrentForm(true);
        }
        var $v_0 = getCurrentEntityReference();
        this.$3_3.loadWallForEntityTurboForm($v_0, Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8);
        Mscrm.TurboForm.Control.CommandService.get_instance().addAfterCommandExecutionHandler(1, this.$$d_$u_3);
    },

    $r_3: function() {
        var $v_0 = String.format('{0}activityContainer_{0}', this.getKey());
        var $v_1 = $get($v_0);
        if (!this.$7_3) {
            Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$1.$0_0
                .togglePreloadingForCurrentForm(false);
        }
        if ($v_1) {
            if (!Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$L($v_1)) {
                this.$f_3($v_1);
            }
        } else {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                'Activities element {0} was not found',
                $v_0);
        }
    },

    $f_3: function($p0) {
        var $v_0 = null;
        if (this.$7_3) {
            $v_0 = $p0.id;
        } else {
            if (!$p0.hasChildNodes()) {
                Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                    'ActivityContainer with ID {0} does not contain child nodes',
                    $p0.id);
                return;
            }
            $v_0 = $p0.lastChild.id;
        }
        if (isNullOrEmptyString($v_0)) {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                'ActivitiesWallPageID was not found');
            return;
        }
        this.$9_3 = $find($v_0);
        if (IsNull(this.$9_3)) {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                'Activities Control was not found on Page');
            return;
        }
        if (!this.$7_3) {
            this.$9_3.set_preloadRequest(this.$N_3(Wall.Interfaces.IRetrievePostsResponse,
                Error,
                Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$1.$0_0.get_preloadRequest()));
            Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$1.$0_0
                .togglePreloadingForCurrentForm(false);
        }
        this.$9_3.loadWallContent(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8);
    },

    $s_3: function() {
        var $v_0 = String.format('notesv2control_{0}_container', this.getKey());
        var $v_1 = $get($v_0);
        if (!this.$7_3) {
            Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.$1.$0_0.togglePreloadingForCurrentForm(false);
        }
        if ($v_1) {
            if (!Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$L($v_1) &&
                !isNullOrEmptyString(getCurrentEntityId())) {
                this.$h_3($v_1);
            }
        } else {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                'Notes element {0} was not found',
                $v_0);
        }
    },

    $h_3: function($p0) {
        this.$2_3 = $find($p0.id);
        if (IsNull(this.$2_3)) {
            Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                'Cannot Find Component with Notes ID : {0}',
                $p0.id);
            return;
        }
        if (!this.$7_3) {
            this.$2_3.set_preloadRequest(this.$N_3(Wall.Interfaces.IRetrievePostsResponse,
                Error,
                Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.$1.$0_0.get_preloadRequest()));
            Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.$1.$0_0.togglePreloadingForCurrentForm(false);
        }
        this.$2_3.loadNotesContent(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8);
    },

    $Z_3: function() {
        var $v_0 = new Mscrm.TurboForm.Control.SfaTabs.Commands.CreateSFATabControlsCommand();
        if (this.getKey() === 'notescontrol') {
            $v_0.initialize(Mscrm.TurboForm.Control.PageManager.get_instance().get_sfaTabsInitDeferredStatements());
            this.$G_3 = this.$$d_$o_3;
            Xrm.Page.data.addOnLoad(this.$G_3);
        } else if (this.getKey() === 'header_process_CaseResearch_LinkControl_casesconversations') {
            $v_0.initialize(Mscrm.TurboForm.Control.PageManager.get_instance().get_caseSFATabsInitDeferredStatements());
        }
        $v_0.execute();
    },

    unbindInternal: function() {
        Mscrm.TurboForm.Control.View.ControlViewBase.prototype.unbindInternal.call(this);
        if (this.$3_3) {
            Mscrm.TurboForm.Control.CommandService.get_instance().removeAfterCommandExecutionHandler(1, this.$$d_$u_3);
            this.$3_3.dispose();
            this.$3_3 = null;
        }
        if (this.$9_3) {
            this.$9_3.dispose();
            this.$9_3 = null;
        }
        if (this.$2_3) {
            this.$2_3.dispose();
            this.$2_3 = null;
        }
        if (this.$G_3) {
            Xrm.Page.data.removeOnLoad(this.$G_3);
            this.$G_3 = null;
        }
        this.$K_3 = null;
    },

    update: function(propertyBag) {
    },

    $u_3: function($p0) {
        var $v_0 = new Mscrm.EntityReference();
        $v_0.Id = getCurrentEntityId();
        $v_0.TypeName = this.$K_3.getEntityName();
        if (this.$3_3.get_entityId() !== $v_0.Id || this.$3_3.get_entityType() !== $v_0.TypeName) {
            this.$3_3.loadWallForEntity($v_0);
        }
    },

    $y_3: function() {
        if (IsNull(this.$2_3)) {
            var $v_0 = String.format('notesv2control_{0}_container', this.getKey());
            var $v_1 = $get($v_0);
            if ($v_1 && !Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$L($v_1)) {
                this.$2_3 = $find($v_1.id);
                if (IsNull(this.$2_3)) {
                    Xrm.Internal.trace.warningT(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView,
                        'Cannot Find Component with Notes ID : {0}',
                        $v_1.id);
                }
            }
        }
    },

    $S_3: function() {
        var $v_0 = $find('notescontrol');
        if (!IsNull($v_0)) {
            $v_0.updateEntityReference(getCurrentEntityReference());
        }
    },

    $N_3: function($p0, $p1, $p2) {
        if (IsNull($p2)) {
            return null;
        }
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred($p0, $p1);
        var $$t_5 = this;
        $P_CRM.when($p2, Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$X()).done(function($p1_0) {
            Mscrm.CrmDebug.assert($p0.isInstanceOfType($p1_0));
            $v_0.resolve($p1_0);
        });
        return $v_0.promise();
    },

    $o_3: function($p0) {
        this.$S_3();
        var $v_0 = ($p0.getEventArgs()).getDataLoadState();
        if ($v_0 === 2) {
            this.$y_3();
            if (!IsNull(this.$2_3) && !this.$2_3.isContentLoaded()) {
                this.$2_3.set_firstInitialization(true);
                this.$2_3.loadNotesContent(Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8);
            }
        } else if ($v_0 === 3) {
            if (Xrm.Page.data.entity.getEntityName() === 'incident') {
                if (!IsNull(this.$9_3)) {
                    var $v_1 = Xrm.Page.data.entity;
                    var $v_2 = {};
                    $v_2['entityID'] = $v_1.getId();
                    var $v_3 = $find('notescontrol');
                    $v_3.raiseTabRefreshEventHandler('ActivitiesTab', $v_2);
                }
            }
        }
    }
}


Mscrm.TurboForm.Control.SfaTabs.Commands.CreateSFATabControlsCommand
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Commands.CreateSFATabControlsCommand',
        null,
        Mscrm.TurboForm.Control.SfaTabs.Commands.ICreateSFATabControlsCommand);
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent');
Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest');
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesPreloadRequest
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesPreloadRequest',
        Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest);
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsPreloadRequest
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsPreloadRequest',
        Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest);
Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent');
Mscrm.TurboForm.Control.SfaTabs.Components.NotesPreloadRequest
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.NotesPreloadRequest',
        Mscrm.TurboForm.Control.SfaTabs.Components.WallPreloadRequest);
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent');
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent');
Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Components.WallDataPreloader');
Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel',
        Mscrm.TurboForm.Control.ViewModel.ControlViewModelBase);
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView
    .registerClass('Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView', Mscrm.TurboForm.Control.View.ControlViewBase);
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.$1 = new Mscrm.TurboForm.Control.SfaTabs.Components
    .ActivitiesComponent();
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent
    .activityPointerRelationshipNameCacheKey = 'ActivityPointerRelationshipName';
Mscrm.TurboForm.Control.SfaTabs.Components.ActivitiesComponent.isActivityPartyCacheKey = 'IsActivityParty';
Mscrm.TurboForm.Control.SfaTabs.Components.NotesComponent.$1 = new Mscrm.TurboForm.Control.SfaTabs.Components
    .NotesComponent();
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$1 = new Mscrm.TurboForm.Control.SfaTabs.Components
    .SfaTabsComponent();
Mscrm.TurboForm.Control.SfaTabs.Components.SfaTabsComponent.$$cctor();
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$1 = new Mscrm.TurboForm.Control.SfaTabs.Components
    .ActivityFeedsComponent();
Mscrm.TurboForm.Control.SfaTabs.Components.ActivityFeedsComponent.$$cctor();
Mscrm.TurboForm.Control.SfaTabs.ViewModels.SfaTabsViewModel.$$cctor();
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$8 = new Sales.Common.Framework.Loaders.ConcurrentContentLoader();
Mscrm.TurboForm.Control.SfaTabs.Views.SfaTabsView.$$cctor();
//@ sourceMappingURL=.srcmap