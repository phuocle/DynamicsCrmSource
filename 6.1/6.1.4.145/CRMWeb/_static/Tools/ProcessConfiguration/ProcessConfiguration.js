Type.registerNamespace('ProcessControl.Configuration');

ProcessControl.Configuration.SystemStep = function() {}
ProcessControl.Configuration.SystemStep.prototype = {
    identifyContact: 0, 
    identifyAccount: 1, 
    identifyCustomer: 2, 
    identifyCase: 3, 
    solution: 4, 
    resolve: 5
}
ProcessControl.Configuration.SystemStep.registerEnum('ProcessControl.Configuration.SystemStep', false);


ProcessControl.Configuration.ClientDataJsonWrapper = function ProcessControl_Configuration_ClientDataJsonWrapper() {
    this.EntityMetadata = '';
}


ProcessControl.Configuration.FieldMetadataJsonWrapper = function ProcessControl_Configuration_FieldMetadataJsonWrapper() {
    this.LogicalName = '';
    this.Label = null;
}


ProcessControl.Configuration.LabelJsonWrapper = function ProcessControl_Configuration_LabelJsonWrapper() {
    this.LCID = -1;
    this.Description = '';
}


ProcessControl.Configuration.ProcessJsonWrapper = function ProcessControl_Configuration_ProcessJsonWrapper() {
    this.ProcessJson = '{}';
    this.Name = null;
    this.Description = null;
}


ProcessControl.Configuration.IEventAggregator = function() {}
ProcessControl.Configuration.IEventAggregator.registerInterface('ProcessControl.Configuration.IEventAggregator');


ProcessControl.Configuration.IExtensibleProcessControlView = function() {}
ProcessControl.Configuration.IExtensibleProcessControlView.$$ = function ProcessControl_Configuration_IExtensibleProcessControlView$$$(TChildView, TChildViewModel) {
    var $$cn = 'IExtensibleProcessControlView' + '$2' + '$' + TChildView.getName().replace(/\./g, '_') + '$' + TChildViewModel.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
        };
        $$ccr.registerInterface('ProcessControl.Configuration.' + $$cn);
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.IExtensibleProcessControlView.registerInterface('ProcessControl.Configuration.IExtensibleProcessControlView');


ProcessControl.Configuration.IProcessControlView = function() {}
ProcessControl.Configuration.IProcessControlView.registerInterface('ProcessControl.Configuration.IProcessControlView');


ProcessControl.Configuration.IProcessControlViewBase = function() {}
ProcessControl.Configuration.IProcessControlViewBase.$$ = function ProcessControl_Configuration_IProcessControlViewBase$$$(TViewModel) {
    var $$cn = 'IProcessControlViewBase' + '$1' + '$' + TViewModel.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
        };
        $$ccr.registerInterface('ProcessControl.Configuration.' + $$cn);
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.IProcessControlViewBase.registerInterface('ProcessControl.Configuration.IProcessControlViewBase');


ProcessControl.Configuration.EntityRelationshipMetadataWrapper = function ProcessControl_Configuration_EntityRelationshipMetadataWrapper() {
}
ProcessControl.Configuration.EntityRelationshipMetadataWrapper.prototype = {
    EntityLogicalName: null,
    EntityLabel: null,
    RelationshipId: null,
    RelationshipName: null,
    RelationshipType: null,
    AttributeLabel: null,
    AttributeName: null
}


ProcessControl.Configuration.Initializer = function ProcessControl_Configuration_Initializer() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (21,3)
ProcessControl.Configuration.Initializer.initialize = function ProcessControl_Configuration_Initializer$initialize() {
    ProcessControl.Configuration.Initializer.$48();
    ProcessControl.Configuration.Initializer.$4V();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.setBehavior();
    ProcessControl.Configuration.Initializer.$3z();
    ProcessConfiguration.Behavior.ResizeBehavior.setResizeBehavior();
    ProcessControl.Configuration.Initializer.$3O();
    ProcessControl.Configuration.Initializer.initializeScrollbar();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (35,3)
ProcessControl.Configuration.Initializer.$48 = function ProcessControl_Configuration_Initializer$$48() {
    ProcessControl.Configuration.Initializer.$H = $create(ProcessControl.Configuration.EntityTabsControl, null, null, null, $get('pcc_tabs'));
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (43,3)
ProcessControl.Configuration.Initializer.initializeScrollbar = function ProcessControl_Configuration_Initializer$initializeScrollbar() {
    if (Mscrm.CrmBrowser.get_currentBrowser().get_agent() === 1) {
        $P_CRM('body').attr('scroll', 'yes');
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (54,3)
ProcessControl.Configuration.Initializer.$3z = function ProcessControl_Configuration_Initializer$$3z() {
    var $v_0 = $P_CRM.parseJSON(window._Process_JsonData.substr(8));
    var $v_1 = $P_CRM.parseJSON($v_0.EntityMetadata);
    var $v_2 = $P_CRM.parseJSON($v_0.RelationshipMetadata);
    var $v_3 = $P_CRM.parseJSON($v_0.Process.ProcessJson);
    var $v_4 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep($v_0.Process.PrimaryEntity, 4);
    $v_4.initializeFromDynamic($v_3);
    ProcessControl.Configuration.StageCategory.initialize($v_0.StageCategoryMetadata);
    var $v_5 = {};
    $v_5['dataContext'] = $v_4;
    var $v_6 = Mscrm.CrmUIComponent.crmCreate(ProcessControl.Configuration.ProcessControlView, $v_5, null, null, $get('pcc'));
    $v_6.set_entityMetadata($v_1);
    $v_6.$E_5 = $v_2;
    $v_6.$H_5 = ProcessControl.Configuration.Initializer.$H;
    $v_6.setTitleAndDescriptionFromForm();
    $v_6.set_initialJson($v_6.get_dataContext().toJson());
    $v_6.renderView();
    ProcessControl.Configuration.BpfMenuActions.$7 = $v_6;
    ProcessControl.Configuration.BpfMenuActions.bindMenuActions();
    ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.setUnloadBehavior($v_6, window.LOCID_PROCESS_UNSAVED_MESSAGE);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (94,3)
ProcessControl.Configuration.Initializer.$3O = function ProcessControl_Configuration_Initializer$$3O() {
    var $v_0 = $P_CRM('#Description').val().trim();
    if (isNullOrEmptyString($v_0)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler(null);
    }
    else {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler(null);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (110,3)
ProcessControl.Configuration.Initializer.$4V = function ProcessControl_Configuration_Initializer$$4V() {
    var $v_0 = $P_CRM('#expandContainer');
    if ($v_0.length > 0) {
        $v_0.hide();
    }
    var $v_1 = $P_CRM('#content_pcc_tabs');
    $v_1.removeAttr('style');
    var $v_2 = $P_CRM('#header_pcc_tabs');
    if ($v_2.length > 0) {
        $v_2.addClass('bpfConfEntityTabHeader');
    }
    var $v_3 = $P_CRM('#header_pcc_tabs').children();
    if ($v_3.length > 0) {
        $v_3.addClass('confTabTitle');
    }
    var $v_4 = $P_CRM('#processDetailArea :input');
    if ($v_4.length > 0) {
        $v_4.attr('class', 'bpfConfText');
    }
    var $v_5 = $P_CRM('#processDetailArea .ms-crm-Input-Container');
    if ($v_5.length > 0) {
        $v_5.attr('class', 'bpfConfInputContainer');
    }
    var $v_6 = $P_CRM('#processDetailArea [disabled=\'disabled\']');
    if ($v_6.length > 0) {
        $v_6.addClass('bpfConfInputDisabled');
    }
    ProcessControl.Configuration.Initializer.$2y();
    ProcessControl.Configuration.Initializer.$2z();
    ProcessControl.Configuration.Initializer.$3R();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (164,3)
ProcessControl.Configuration.Initializer.$3R = function ProcessControl_Configuration_Initializer$$3R() {
    if (Sys.Browser.agent !== Sys.Browser.Safari) {
        return;
    }
    var $v_0 = $P_CRM('.prc_step_rc');
    $v_0.addClass('prc_step_rc_webkit');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (178,3)
ProcessControl.Configuration.Initializer.$2z = function ProcessControl_Configuration_Initializer$$2z() {
    var $v_0 = 4;
    var $v_1 = String.format('pcc_tab_{0}', $v_0);
    var $v_2 = $P_CRM('a[tabid=\'' + $v_1 + '\']');
    var $v_3 = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_OPTIONSTEXT);
    var $v_4 = CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_OPTIONSTEXT);
    var $v_5 = String.format(ProcessControl.Configuration.HtmlTemplate.$2Z, $v_4, $v_3);
    var $v_6 = $P_CRM($v_5);
    $v_6.insertAfter($v_2);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (195,3)
ProcessControl.Configuration.Initializer.$2y = function ProcessControl_Configuration_Initializer$$2y() {
    var $v_0 = $P_CRM('.tabLink');
    $v_0.each(ProcessControl.Configuration.Initializer.$49);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (207,3)
ProcessControl.Configuration.Initializer.$49 = function ProcessControl_Configuration_Initializer$$49($p0, $p1) {
    if ($p0 >= 4 || IsNull($p1)) {
        return false;
    }
    var $v_0 = $P_CRM($p1);
    var $v_1 = String.format('breadcrumb_{0}', $p0);
    var $v_2 = String.format(ProcessControl.Configuration.HtmlTemplate.$2B, $v_1);
    var $v_3 = $P_CRM($v_2);
    $v_3.insertAfter($v_0);
    var $v_4 = String.format('pcc_tab_{0}', $p0 + 1);
    var $v_5 = $P_CRM('a[tabid=\'' + $v_4 + '\']');
    if (!$v_5.is(':visible')) {
        $v_3.addClass('bpfConfBreadcrumbHide');
    }
    return true;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (249,3)
ProcessControl.Configuration.Initializer.dispose = function ProcessControl_Configuration_Initializer$dispose() {
    ProcessControl.Configuration.Initializer.$3L();
    ProcessControl.Configuration.Initializer.$3K();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (255,3)
ProcessControl.Configuration.Initializer.$3L = function ProcessControl_Configuration_Initializer$$3L() {
    var $v_0 = $find('pcc_tabs');
    if (!IsNull($v_0) && !$v_0.get_isDisposed()) {
        $v_0.dispose();
    }
    if (!IsNull(ProcessControl.Configuration.Initializer.$H) && !ProcessControl.Configuration.Initializer.$H.get_isDisposed()) {
        ProcessControl.Configuration.Initializer.$H.dispose();
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Initializer.cs (269,3)
ProcessControl.Configuration.Initializer.$3K = function ProcessControl_Configuration_Initializer$$3K() {
    var $v_0 = $find('pcc');
    if (!IsNull($v_0)) {
        $v_0.dispose();
    }
}


ProcessControl.Configuration.ConfiguratorActions = function ProcessControl_Configuration_ConfiguratorActions() {
}


ProcessControl.Configuration.SystemStepType = function ProcessControl_Configuration_SystemStepType() {
}


ProcessControl.Configuration.Constants = function ProcessControl_Configuration_Constants() {
}


ProcessControl.Configuration.SystemStepParams = function ProcessControl_Configuration_SystemStepParams() {
}


ProcessControl.Configuration.CssClass = function ProcessControl_Configuration_CssClass() {
}


ProcessControl.Configuration.HtmlTemplate = function ProcessControl_Configuration_HtmlTemplate() {
}
// file://c:\bt\160165\src\core\application\WebApplication\controls\ProcessControl\ScriptShared\HtmlTemplate.cs (103,3)
ProcessControl.Configuration.HtmlTemplate.$M = function ProcessControl_Configuration_HtmlTemplate$$M($p0, $p1) {
    return String.format.apply(null, [ $p0 ].concat($p1));
}


ProcessControl.Configuration.AddChildControlBehavior = function ProcessControl_Configuration_AddChildControlBehavior(element) {
    this.$$d_$4D_3 = Function.createDelegate(this, this.$4D_3);
    this.$$d_addChild = Function.createDelegate(this, this.addChild);
    ProcessControl.Configuration.AddChildControlBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.AddChildControlBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (20,3)
    initialize: function ProcessControl_Configuration_AddChildControlBehavior$initialize() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        if (!IsNull(this.$4_3)) {
            this.$4_3.bind('click', this.$$d_addChild);
            this.$4_3.bind('keydown', this.$$d_$4D_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (35,4)
    get_entityView: function ProcessControl_Configuration_AddChildControlBehavior$get_entityView() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (36,4)
    set_entityView: function ProcessControl_Configuration_AddChildControlBehavior$set_entityView(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (46,3)
    enableDisableAddIcon: function ProcessControl_Configuration_AddChildControlBehavior$enableDisableAddIcon(enable, message) {
        if (!enable) {
            this.$O_3 = false;
            this.$4_3.attr('src', this.get_$1o_3().source);
            this.$4_3.removeClass(this.get_enabledIconInfo().cssClass);
            this.$4_3.addClass(this.get_$1o_3().cssClass);
            this.$4_3.addClass('pc_en_colh_ssp_img_disabled');
            this.$4_3.removeClass('pc_en_colh_ssp_img_enabled');
        }
        else {
            this.$O_3 = true;
            this.$4_3.attr('src', this.get_enabledIconInfo().source);
            this.$4_3.removeClass(this.get_$1o_3().cssClass);
            this.$4_3.addClass(this.get_enabledIconInfo().cssClass);
            this.$4_3.removeClass('pc_en_colh_ssp_img_disabled');
            this.$4_3.addClass('pc_en_colh_ssp_img_enabled');
        }
        this.$4_3.attr('title', message || this.get_defaultAddTitle());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (75,3)
    isChildControlMaxLimitReached: function ProcessControl_Configuration_AddChildControlBehavior$isChildControlMaxLimitReached(currentCount, maxLimit) {
        return currentCount >= maxLimit;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (90,4)
    get_enabledIconInfo: function ProcessControl_Configuration_AddChildControlBehavior$get_enabledIconInfo() {
        if (IsNull(this.$1b_3)) {
            this.$1b_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/21_OrangePlus.png'));
        }
        return this.$1b_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (105,4)
    get_$1o_3: function ProcessControl_Configuration_AddChildControlBehavior$get_$1o_3() {
        if (IsNull(this.$1Y_3)) {
            this.$1Y_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/21_InactivePlus.png'));
        }
        return this.$1Y_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (121,3)
    $4D_3: function ProcessControl_Configuration_AddChildControlBehavior$$4D_3($p0) {
        switch ($p0.which) {
            case 13:
                this.addChild($p0);
                $p0.preventDefault();
                $p0.stopPropagation();
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (137,3)
    addChild: function ProcessControl_Configuration_AddChildControlBehavior$addChild(eventObject) {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (146,3)
    dispose: function ProcessControl_Configuration_AddChildControlBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$4_3)) {
            this.$4_3.unbind('click');
            this.$4_3.unbind('keydown');
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (164,4)
    get_addImage: function ProcessControl_Configuration_AddChildControlBehavior$get_addImage() {
        return this.$4_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (165,4)
    set_addImage: function ProcessControl_Configuration_AddChildControlBehavior$set_addImage(value) {
        this.$4_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddChildControlBehavior.cs (173,4)
    get_isEnabled: function ProcessControl_Configuration_AddChildControlBehavior$get_isEnabled() {
        return this.$O_3;
    },
    
    $4_3: null,
    $3_3: null,
    $1Y_3: null,
    $1b_3: null,
    $O_3: false
}


ProcessControl.Configuration.AddStageBehavior = function ProcessControl_Configuration_AddStageBehavior(element) {
    this.$$d_$3D_4 = Function.createDelegate(this, this.$3D_4);
    ProcessControl.Configuration.AddStageBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.AddStageBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStageBehavior.cs (22,3)
    initialize: function ProcessControl_Configuration_AddStageBehavior$initialize() {
        this.$4_3 = $P_CRM(this.get_element()).children(':first-child');
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.$4_3.hide();
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.initialize.call(this);
        (this.$3_3).get_dataContext().get_steps().add_stepCollectionChanged(this.$$d_$3D_4);
        this.$14_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStageBehavior.cs (39,3)
    $3D_4: function ProcessControl_Configuration_AddStageBehavior$$3D_4($p0, $p1) {
        if (IsNull(this.$3_3) || IsNull((this.$3_3).get_dataContext()) || IsNull((this.$3_3).get_dataContext().get_steps())) {
            return;
        }
        this.$14_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStageBehavior.cs (53,3)
    $14_4: function ProcessControl_Configuration_AddStageBehavior$$14_4() {
        if (this.$4B_4()) {
            this.enableDisableAddIcon(false, String.format(window.LOCID_PROCESS_MAXSTAGE, 30));
        }
        else {
            this.enableDisableAddIcon(true, null);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStageBehavior.cs (69,3)
    $4B_4: function ProcessControl_Configuration_AddStageBehavior$$4B_4() {
        if (IsNull(this.$3_3) || IsNull(this.$3_3) || IsNull((this.$3_3).get_dataContext().get_steps())) {
            return false;
        }
        var $v_0 = ProcessControl.Configuration.AddChildControlBehavior.prototype.isChildControlMaxLimitReached.call(this, (this.$3_3).get_dataContext().get_steps().get_count(), 30);
        if ($v_0) {
            Mscrm.MetricsReporting.instance().addMetric('Sales Process Configurator', 'Stage max limit reached for ' + (this.$3_3).get_dataContext().get_entityLogicalName());
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStageBehavior.cs (93,4)
    get_defaultAddTitle: function ProcessControl_Configuration_AddStageBehavior$get_defaultAddTitle() {
        return window.LOCID_PROCESS_ADDSTAGE;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStageBehavior.cs (100,3)
    addChild: function ProcessControl_Configuration_AddStageBehavior$addChild(eventObject) {
        if (!this.$O_3) {
            return;
        }
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStageData((this.$3_3).get_dataContext().get_parent());
        $v_0.set_parent((this.$3_3).get_dataContext().get_lastStep());
        $v_0.set_workflow((this.$3_3).get_dataContext().get_parent());
        (this.$3_3).get_dataContext().appendStep($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStageBehavior.cs (118,3)
    dispose: function ProcessControl_Configuration_AddStageBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if ((this.$3_3).get_dataContext() && (this.$3_3).get_dataContext().get_steps()) {
            (this.$3_3).get_dataContext().get_steps().remove_stepCollectionChanged(this.$$d_$3D_4);
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.dispose.call(this);
    }
}


ProcessControl.Configuration.AddStepBehavior = function ProcessControl_Configuration_AddStepBehavior(element) {
    this.$$d_$3m_4 = Function.createDelegate(this, this.$3m_4);
    this.$$d_$4s_4 = Function.createDelegate(this, this.$4s_4);
    this.$$d_$3p_4 = Function.createDelegate(this, this.$3p_4);
    this.$$d_$3o_4 = Function.createDelegate(this, this.$3o_4);
    this.$$d_$3r_4 = Function.createDelegate(this, this.$3r_4);
    this.$$d_$3t_4 = Function.createDelegate(this, this.$3t_4);
    this.$$d_$3s_4 = Function.createDelegate(this, this.$3s_4);
    this.$$d_$3n_4 = Function.createDelegate(this, this.$3n_4);
    this.$$d_$1P_4 = Function.createDelegate(this, this.$1P_4);
    this.$$d_$3q_4 = Function.createDelegate(this, this.$3q_4);
    this.$$d_$27_4 = Function.createDelegate(this, this.$27_4);
    this.$$d_$4v_4 = Function.createDelegate(this, this.$4v_4);
    this.$$d_$3y_4 = Function.createDelegate(this, this.$3y_4);
    this.$$d_$4r_4 = Function.createDelegate(this, this.$4r_4);
    this.$$d_$33_4 = Function.createDelegate(this, this.$33_4);
    ProcessControl.Configuration.AddStepBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.AddStepBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (24,3)
    initialize: function ProcessControl_Configuration_AddStepBehavior$initialize() {
        this.$18_4 = $P_CRM(this.get_element());
        this.$4_3 = $P_CRM('#' + String.format('{0}_plusimg', this.get_element().id));
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.$4_3.hide();
        }
        this.$G_4 = $P_CRM('.pc_en_colh_ss_menu', this.$18_4.parents().first());
        $addHandler(this.$4_3.parents('.ui-dialog-content').get(0), 'keydown', this.$$d_$33_4);
        ProcessControl.Configuration.AddChildControlBehavior.prototype.initialize.call(this);
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().subscribe('stageselected', this.$$d_$4r_4);
        this.$14_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (46,3)
    configureMenu: function ProcessControl_Configuration_AddStepBehavior$configureMenu() {
        this.$4q_4();
        if (this.$1e_4) {
            this.$34_4();
        }
        else {
            this.$2v_4();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (59,3)
    $2v_4: function ProcessControl_Configuration_AddStepBehavior$$2v_4() {
        if (!this.$1G_4) {
            return;
        }
        this.$G_4.find('li').unbind();
        this.$j_4.parents('span').first().unbind();
        this.$K_4.unbind('mouseenter').unbind('mouseleave').unbind('focusin').unbind('focusout');
        this.$18_4.unbind();
        this.$B_4.unbind();
        this.$1G_4 = false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (76,3)
    $34_4: function ProcessControl_Configuration_AddStepBehavior$$34_4() {
        if (this.$1G_4) {
            return;
        }
        this.$G_4.find('li').focus(this.$$d_$3y_4).mouseover(this.$$d_$3y_4).mouseleave(this.$$d_$4v_4).click(this.$$d_$27_4).keydown(this.$$d_$3q_4);
        this.$j_4 = $P_CRM('#' + String.format('{0}_arrowimg', this.get_element().id));
        this.$j_4.parents('span').first().click(this.$$d_$1P_4).keydown(this.$$d_$3n_4);
        this.$K_4 = this.$4_3.parents().first();
        this.$B_4 = this.$j_4.parents().first();
        this.$K_4.mouseenter(this.$$d_$3s_4);
        this.$K_4.mouseleave(this.$$d_$3t_4);
        (this.$K_4).focusin(this.$$d_$3s_4);
        (this.$K_4).focusout(this.$$d_$3t_4);
        this.$18_4.mouseleave(this.$$d_$3r_4);
        this.$B_4.mouseenter(this.$$d_$3o_4);
        this.$B_4.mouseleave(this.$$d_$3p_4);
        (this.$B_4).focusin(this.$$d_$3o_4);
        (this.$B_4).focusout(this.$$d_$3p_4);
        this.$1G_4 = true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (118,3)
    $4q_4: function ProcessControl_Configuration_AddStepBehavior$$4q_4() {
        this.$G_4.find('li').css('display', 'none');
        var $v_0 = (this.$3_3).get_dataContext().get_entityLogicalName();
        var $v_1 = Mscrm.InternalUtilities._String.format('li[entityLogicalName=\'{0}\']', $v_0);
        this.$1e_4 = this.$G_4.find($v_1).css('display', '').size() > 0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (131,4)
    get_defaultAddTitle: function ProcessControl_Configuration_AddStepBehavior$get_defaultAddTitle() {
        return window.LOCID_PROCESS_ADDSTEP;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (139,3)
    $4r_4: function ProcessControl_Configuration_AddStepBehavior$$4r_4($p0, $p1) {
        this.$4t_4();
        if (!this.$s_4()) {
            this.enableDisableAddIcon(false, null);
            return;
        }
        this.$g_4 = ProcessControl.Configuration.StageFocusBehavior.get_$2();
        this.$g_4.get_dataContext().get_steps().add_stepCollectionChanged(this.$$d_$4s_4);
        this.$14_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (158,3)
    $4s_4: function ProcessControl_Configuration_AddStepBehavior$$4s_4($p0, $p1) {
        if (!this.$s_4()) {
            return;
        }
        if (IsNull(this.$g_4) || IsNull(this.$g_4.get_dataContext()) || IsNull(this.$g_4.get_dataContext().get_steps())) {
            return;
        }
        this.$14_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (179,3)
    $14_4: function ProcessControl_Configuration_AddStepBehavior$$14_4() {
        if (!this.$s_4()) {
            this.enableDisableAddIcon(false, null);
            return;
        }
        if (this.$4C_4()) {
            this.enableDisableAddIcon(false, String.format(window.LOCID_PROCESS_MAXSTEP, 30));
            return;
        }
        this.enableDisableAddIcon(true, null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (199,3)
    $4C_4: function ProcessControl_Configuration_AddStepBehavior$$4C_4() {
        var $v_0 = ProcessControl.Configuration.StageFocusBehavior.get_$2();
        if (IsNull($v_0.get_dataContext()) || IsNull($v_0.get_dataContext().get_steps())) {
            return false;
        }
        var $v_1 = ProcessControl.Configuration.AddChildControlBehavior.prototype.isChildControlMaxLimitReached.call(this, $v_0.get_dataContext().get_steps().get_count(), 30);
        if ($v_1) {
            Mscrm.MetricsReporting.instance().addMetric('Sales Process Configurator', 'Step max limit reached for ' + (this.$3_3).get_dataContext().get_entityLogicalName());
        }
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (222,3)
    $s_4: function ProcessControl_Configuration_AddStepBehavior$$s_4() {
        if (IsNull(ProcessControl.Configuration.StageFocusBehavior.get_$2()) || ProcessControl.Configuration.StageFocusBehavior.get_$2().$1_5 !== this.$3_3) {
            return false;
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (238,3)
    addChild: function ProcessControl_Configuration_AddStepBehavior$addChild(eventObject) {
        if (!this.$O_3 || !this.$s_4()) {
            return;
        }
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData((this.$3_3).get_dataContext().get_parent());
        $v_0.set_parent(ProcessControl.Configuration.StageFocusBehavior.get_$2().get_dataContext());
        $v_0.set_workflow((this.$3_3).get_dataContext().get_workflow());
        ProcessControl.Configuration.StageFocusBehavior.get_$2().get_dataContext().appendStep($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (256,3)
    $27_4: function ProcessControl_Configuration_AddStepBehavior$$27_4($p0) {
        if (!this.$O_3 || !this.$s_4()) {
            return;
        }
        var $v_0 = $P_CRM($p0.target).attr('data-system-step-enum-value');
        var $v_1 = $P_CRM($p0.target).attr('data-system-step-description');
        var $v_2 = (this.$3_3).get_dataContext().get_parent();
        var $v_3 = (ProcessControl.Configuration.StageFocusBehavior.get_$2().get_dataContext().get_parent()).get_entityLogicalName();
        var $v_4 = this.$3_3.get_entityMetadata()[$v_3];
        var $v_5 = ProcessControl.Configuration.ProcessConfigurationUtility.generateSystemStep($v_0, $v_2, $v_4, $v_1);
        ProcessControl.Configuration.StageFocusBehavior.get_$2().get_dataContext().appendStep($v_5);
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(ProcessControl.Configuration.StageFocusBehavior.get_$2().$1_5.get_parent());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (279,3)
    $1P_4: function ProcessControl_Configuration_AddStepBehavior$$1P_4($p0) {
        if (!this.$O_3 || !this.$s_4()) {
            return;
        }
        if (!this.$26_4) {
            $P_CRM('body').bind('click', this.$$d_$3m_4);
            this.$26_4 = true;
        }
        if (this.$m_4) {
            this.$2P_4();
        }
        else {
            if (!this.$21_4) {
                var $v_0 = this.$K_4.width();
                var $v_1 = Number.parseInvariant(this.$K_4.css('margin-left').replace('px', '')) + Number.parseInvariant(this.$K_4.css('margin-right').replace('px', ''));
                var $v_2 = this.$G_4.parents().first().find('.pc_step_colh_text').width() + $v_0 + $v_1;
                if (Mscrm.Utilities.get_isLeftToRight()) {
                    this.$G_4.css('margin-left', $v_2 + 'px');
                }
                else {
                    this.$G_4.css('margin-right', $v_2 + 'px');
                }
                this.$21_4 = true;
            }
            this.$G_4.find('li').removeClass('pc_en_colh_ss_hover');
            this.$G_4.show(0);
            this.$m_4 = true;
            this.$2K_4().focus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (332,3)
    $2P_4: function ProcessControl_Configuration_AddStepBehavior$$2P_4() {
        this.$G_4.hide(0);
        this.$G_4.find('li').removeClass('pc_en_colh_ss_hover');
        this.$B_4.removeClass('pc_en_colh_ss_hover');
        this.$B_4.css('visibility', 'hidden');
        this.$m_4 = false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (351,3)
    $3m_4: function ProcessControl_Configuration_AddStepBehavior$$3m_4($p0) {
        if (!this.$G_4.parents().first().has($p0.target).length) {
            this.$2P_4();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (364,3)
    $3n_4: function ProcessControl_Configuration_AddStepBehavior$$3n_4($p0) {
        switch ($p0.which) {
            case 13:
                this.$1P_4($p0);
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (378,3)
    $3q_4: function ProcessControl_Configuration_AddStepBehavior$$3q_4($p0) {
        var $v_0 = $P_CRM($p0.target);
        switch ($p0.which) {
            case 13:
                this.$27_4($p0);
                break;
            case 9:
                if (!this.$2T_4($v_0)) {
                    this.$2L_4($v_0).focus();
                }
                else {
                    $p0.stopImmediatePropagation();
                    this.$1P_4($p0);
                    this.$1x_4();
                }
                $p0.preventDefault();
                break;
            case 40:
                $p0.stopImmediatePropagation();
                if (!this.$2T_4($v_0)) {
                    this.$2L_4($v_0).focus();
                }
                break;
            case 38:
                $p0.stopImmediatePropagation();
                if (!this.$4A_4($v_0)) {
                    this.$3j_4($v_0).focus();
                }
                break;
            case 27:
                $p0.stopImmediatePropagation();
                this.$1P_4($p0);
                this.$1x_4();
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (426,3)
    $2T_4: function ProcessControl_Configuration_AddStepBehavior$$2T_4($p0) {
        return $p0.is(this.$G_4.find('li:visible').last());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (436,3)
    $4A_4: function ProcessControl_Configuration_AddStepBehavior$$4A_4($p0) {
        return $p0.is(this.$2K_4());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (445,3)
    $2K_4: function ProcessControl_Configuration_AddStepBehavior$$2K_4() {
        return this.$G_4.find('li:visible').first();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (455,3)
    $2L_4: function ProcessControl_Configuration_AddStepBehavior$$2L_4($p0) {
        return $p0.nextAll('li:visible').first();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (465,3)
    $3j_4: function ProcessControl_Configuration_AddStepBehavior$$3j_4($p0) {
        return $p0.prevAll('li:visible').first();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (473,3)
    $1x_4: function ProcessControl_Configuration_AddStepBehavior$$1x_4() {
        this.$B_4.addClass('pc_en_colh_ss_hover');
        this.$B_4.css('visibility', 'visible');
        this.$j_4.focus();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (484,3)
    $33_4: function ProcessControl_Configuration_AddStepBehavior$$33_4($p0) {
        if ($p0.keyCode === 78 && $p0.altKey && $p0.shiftKey) {
            $p0.stopPropagation();
            this.addChild(null);
            return;
        }
        if (!this.$m_4 && this.$1e_4 && this.$K_4.is(':visible') && $p0.keyCode === 77 && $p0.altKey && $p0.shiftKey) {
            $p0.stopPropagation();
            this.$1x_4();
            this.$j_4.click();
            return;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (508,3)
    $3y_4: function ProcessControl_Configuration_AddStepBehavior$$3y_4($p0) {
        $P_CRM($p0.currentTarget).siblings().removeClass('pc_en_colh_ss_hover').addClass('pc_en_colh_ss_menu_li_normal');
        $P_CRM($p0.currentTarget).addClass('pc_en_colh_ss_hover');
        if ($p0.target !== document.activeElement) {
            $p0.target.focus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (521,3)
    $4v_4: function ProcessControl_Configuration_AddStepBehavior$$4v_4($p0) {
        if ($p0.currentTarget !== document.activeElement) {
            $P_CRM($p0.currentTarget).removeClass('pc_en_colh_ss_hover').addClass('pc_en_colh_ss_menu_li_normal');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (534,3)
    $3s_4: function ProcessControl_Configuration_AddStepBehavior$$3s_4($p0) {
        if (!this.$O_3) {
            return;
        }
        this.$K_4.addClass('pc_en_colh_ss_hover');
        this.$B_4.css('visibility', 'visible');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (547,3)
    $3t_4: function ProcessControl_Configuration_AddStepBehavior$$3t_4($p0) {
        if (!this.$O_3) {
            return;
        }
        this.$K_4.removeClass('pc_en_colh_ss_hover');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (559,3)
    $3r_4: function ProcessControl_Configuration_AddStepBehavior$$3r_4($p0) {
        if (!this.$O_3) {
            return;
        }
        this.$K_4.removeClass('pc_en_colh_ss_hover');
        if (!this.$m_4) {
            this.$B_4.removeClass('pc_en_colh_ss_hover');
            this.$B_4.css('visibility', 'hidden');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (577,3)
    $3o_4: function ProcessControl_Configuration_AddStepBehavior$$3o_4($p0) {
        if (!this.$O_3) {
            return;
        }
        this.$B_4.addClass('pc_en_colh_ss_hover');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (589,3)
    $3p_4: function ProcessControl_Configuration_AddStepBehavior$$3p_4($p0) {
        if (!this.$O_3) {
            return;
        }
        if (!this.$m_4) {
            this.$B_4.removeClass('pc_en_colh_ss_hover');
            this.$B_4.css('visibility', 'hidden');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (623,3)
    dispose: function ProcessControl_Configuration_AddStepBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        $P_CRM('body').unbind('click', this.$$d_$3m_4);
        $removeHandler(this.$4_3.parents('.ui-dialog-content').get(0), 'keydown', this.$$d_$33_4);
        this.$2v_4();
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().unsubscribe('stageselected', this.$$d_$4r_4);
        ProcessControl.Configuration.AddChildControlBehavior.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddStepBehavior.cs (642,3)
    $4t_4: function ProcessControl_Configuration_AddStepBehavior$$4t_4() {
        if (IsNull(this.$g_4)) {
            return;
        }
        try {
            this.$g_4.get_dataContext().get_steps().remove_stepCollectionChanged(this.$$d_$4s_4);
        }
        catch ($$e_0) {
        }
    },
    
    $K_4: null,
    $18_4: null,
    $j_4: null,
    $B_4: null,
    $G_4: null,
    $1e_4: false,
    $21_4: false,
    $26_4: false,
    $m_4: false,
    $1G_4: false,
    $g_4: null
}


ProcessControl.Configuration.FocusBehaviorBase = function ProcessControl_Configuration_FocusBehaviorBase(element) {
    this.$$d_$3S_3 = Function.createDelegate(this, this.$3S_3);
    this.$$d_onFocused = Function.createDelegate(this, this.onFocused);
    this.$11_3 = ((this.$$gta['ProcessControl.Configuration.FocusBehaviorBase']['T'] === Number || Type.isEnum(this.$$gta['ProcessControl.Configuration.FocusBehaviorBase']['T'])) ? 0 : (this.$$gta['ProcessControl.Configuration.FocusBehaviorBase']['T'] === Boolean) ? false : null);
    ProcessControl.Configuration.FocusBehaviorBase.$$(this.$$gta['ProcessControl.Configuration.FocusBehaviorBase']['T']).initializeBase(this, [ element ]);
    this.$P_3 = $P_CRM(element);
}
ProcessControl.Configuration.FocusBehaviorBase.$$ = function ProcessControl_Configuration_FocusBehaviorBase$$$(T) {
    var $$cn = 'FocusBehaviorBase' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.FocusBehaviorBase'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.FocusBehaviorBase.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn, Mscrm.CrmUIBehavior);
        var $$dict_5 = ProcessControl.Configuration.FocusBehaviorBase.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.FocusBehaviorBase.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\FocusBehaviorBase.cs (24,3)
    initialize: function ProcessControl_Configuration_FocusBehaviorBase$initialize() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.bindEvents();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\FocusBehaviorBase.cs (35,4)
    get_view: function ProcessControl_Configuration_FocusBehaviorBase$get_view() {
        return this.$11_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\FocusBehaviorBase.cs (36,4)
    set_view: function ProcessControl_Configuration_FocusBehaviorBase$set_view(value) {
        this.$11_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\FocusBehaviorBase.cs (42,3)
    dispose: function ProcessControl_Configuration_FocusBehaviorBase$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$P_3.unbind('focusin');
        }
        else {
            this.$P_3.get(0).removeEventListener('focus', this.$1d_3, true);
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\FocusBehaviorBase.cs (64,3)
    bindEvents: function ProcessControl_Configuration_FocusBehaviorBase$bindEvents() {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$P_3.bind('focusin', this.$$d_onFocused);
        }
        else {
            this.$1d_3 = this.$$d_$3S_3;
            this.$P_3.get(0).addEventListener('focus', this.$1d_3, true);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\FocusBehaviorBase.cs (81,4)
    get_jQueryElement: function ProcessControl_Configuration_FocusBehaviorBase$get_jQueryElement() {
        return this.$P_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\FocusBehaviorBase.cs (88,3)
    $3S_3: function ProcessControl_Configuration_FocusBehaviorBase$$3S_3($p0) {
        this.onFocused($P_CRM.event.fix($p0));
    },
    
    $P_3: null,
    $1d_3: null
}


ProcessControl.Configuration.HoverBehavior = function ProcessControl_Configuration_HoverBehavior(element) {
    this.$$d_$4N_3 = Function.createDelegate(this, this.$4N_3);
    this.$$d_$4M_3 = Function.createDelegate(this, this.$4M_3);
    this.$$d_onHoverOut = Function.createDelegate(this, this.onHoverOut);
    this.$$d_onHover = Function.createDelegate(this, this.onHover);
    ProcessControl.Configuration.HoverBehavior.$$(this.$$gta['ProcessControl.Configuration.HoverBehavior']['T']).initializeBase(this, [ element ]);
    this.$P_3 = $P_CRM(element);
}
ProcessControl.Configuration.HoverBehavior.$$ = function ProcessControl_Configuration_HoverBehavior$$$(T) {
    var $$cn = 'HoverBehavior' + '$1' + '$' + T.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.HoverBehavior'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.HoverBehavior.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn, Mscrm.CrmUIBehavior);
        var $$dict_5 = ProcessControl.Configuration.HoverBehavior.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.HoverBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (23,3)
    initialize: function ProcessControl_Configuration_HoverBehavior$initialize() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.bindEvents();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (34,4)
    get_view: function ProcessControl_Configuration_HoverBehavior$get_view() {
        return this.$11_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (35,4)
    set_view: function ProcessControl_Configuration_HoverBehavior$set_view(value) {
        this.$11_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (42,3)
    bindEvents: function ProcessControl_Configuration_HoverBehavior$bindEvents() {
        this.$P_3.bind('mouseover', this.$$d_onHover);
        this.$P_3.bind('mouseout', this.$$d_onHoverOut);
        this.get_deleteIcon().bind('mouseover', this.$$d_$4M_3);
        this.get_deleteIcon().bind('mouseout', this.$$d_$4N_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (58,3)
    $4M_3: function ProcessControl_Configuration_HoverBehavior$$4M_3($p0) {
        var $v_0 = this.get_deleteIcon().children(':first-child');
        $v_0.attr('src', this.get_$2Q_3().source);
        $v_0.attr('class', this.get_$2Q_3().cssClass + ' ' + 'pc_step_d_img');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (69,3)
    $4N_3: function ProcessControl_Configuration_HoverBehavior$$4N_3($p0) {
        var $v_0 = this.get_deleteIcon().children(':first-child');
        $v_0.attr('src', this.get_$2F_3().source);
        $v_0.attr('class', this.get_$2F_3().cssClass + ' ' + 'pc_step_d_img');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (83,3)
    dispose: function ProcessControl_Configuration_HoverBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$P_3.unbind('mouseover');
        this.$P_3.unbind('mouseout');
        this.get_deleteIcon().unbind('mouseover');
        this.get_deleteIcon().unbind('mouseout');
        Mscrm.CrmUIBehavior.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (101,4)
    get_$2Q_3: function ProcessControl_Configuration_HoverBehavior$get_$2Q_3() {
        if (IsNull(this.$1g_3)) {
            this.$1g_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/12_active_config_delete.png'));
        }
        return this.$1g_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (114,4)
    get_jQueryElement: function ProcessControl_Configuration_HoverBehavior$get_jQueryElement() {
        return this.$P_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (122,4)
    get_$2F_3: function ProcessControl_Configuration_HoverBehavior$get_$2F_3() {
        if (IsNull(this.$1W_3)) {
            this.$1W_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/12_inactive_config_delete.png'));
        }
        return this.$1W_3;
    },
    
    $P_3: null,
    $11_3: null,
    $1g_3: null,
    $1W_3: null
}


ProcessControl.Configuration.StepHoverBehavior = function ProcessControl_Configuration_StepHoverBehavior(element) {
    ProcessControl.Configuration.StepHoverBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StepHoverBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (160,3)
    onHover: function ProcessControl_Configuration_StepHoverBehavior$onHover(eventHandler) {
        if (ProcessControl.Configuration.StageFocusBehavior.get_$2() === this.get_view().$1_4 && !ProcessControl.Configuration.StepFocusBehavior.get_$D()) {
            return;
        }
        ProcessControl.Configuration.StepHoverBehavior.$x = this.get_view();
        this.$1q_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (179,4)
    get_deleteIcon: function ProcessControl_Configuration_StepHoverBehavior$get_deleteIcon() {
        return this.get_view().get_$6_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (186,3)
    onHoverOut: function ProcessControl_Configuration_StepHoverBehavior$onHoverOut(eventHandler) {
        ProcessControl.Configuration.StepHoverBehavior.$x = null;
        this.$t_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (195,3)
    $1q_4: function ProcessControl_Configuration_StepHoverBehavior$$1q_4() {
        this.get_view().get_$d_4().addClass('pc_stepmo');
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly() && !IsNull(this.get_view().$1_4.get_$4x_3()) && this.get_view().$1_4.get_$4x_3().length > 1) {
            this.get_view().get_$a_4().addClass('pc_stepmo');
            this.get_view().get_$6_4().addClass('pc_step_del_hov');
        }
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$d_4().addClass('pc_highContrastHover');
            this.get_view().get_$a_4().addClass('pc_highContrastHover');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (217,3)
    $t_4: function ProcessControl_Configuration_StepHoverBehavior$$t_4() {
        this.get_view().get_$d_4().removeClass('pc_stepmo');
        this.get_view().get_$a_4().removeClass('pc_stepmo');
        this.get_view().get_$6_4().removeClass('pc_step_del_hov');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$d_4().removeClass('pc_highContrastHover');
            this.get_view().get_$a_4().removeClass('pc_highContrastHover');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (234,3)
    dispose: function ProcessControl_Configuration_StepHoverBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        ProcessControl.Configuration.StepHoverBehavior.$x = null;
        ProcessControl.Configuration.HoverBehavior.prototype.dispose.call(this);
    }
}


ProcessControl.Configuration.StageHoverBehavior = function ProcessControl_Configuration_StageHoverBehavior(element) {
    ProcessControl.Configuration.StageHoverBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StageHoverBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (261,3)
    onHover: function ProcessControl_Configuration_StageHoverBehavior$onHover(eventHandler) {
        if ((ProcessControl.Configuration.StageFocusBehavior.get_$2() === this.get_view() && !ProcessControl.Configuration.StepFocusBehavior.get_$D()) || ProcessControl.Configuration.StepHoverBehavior.$x) {
            return;
        }
        this.$1q_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (278,4)
    get_deleteIcon: function ProcessControl_Configuration_StageHoverBehavior$get_deleteIcon() {
        return this.get_view().get_$6_5();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (285,3)
    onHoverOut: function ProcessControl_Configuration_StageHoverBehavior$onHoverOut(eventHandler) {
        this.$t_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (293,3)
    $1q_4: function ProcessControl_Configuration_StageHoverBehavior$$1q_4() {
        this.get_view().get_$c_5().addClass('pc_stagemo');
        this.get_view().get_$I_5().addClass('pc_stagemo');
        if (this.get_view().$1_5.get_$4x_3().length > 1 && !ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.get_view().get_$6_5().addClass('pc_stg_del_hov');
        }
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$I_5().addClass('pc_highContrastHover');
            this.get_view().get_$c_5().addClass('pc_highContrastHover');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\HoverBehavior.cs (313,3)
    $t_4: function ProcessControl_Configuration_StageHoverBehavior$$t_4() {
        this.get_view().get_$c_5().removeClass('pc_stagemo');
        this.get_view().get_$I_5().removeClass('pc_stagemo');
        this.get_view().get_$6_5().removeClass('pc_stg_del_hov');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$I_5().removeClass('pc_highContrastHover');
            this.get_view().get_$c_5().removeClass('pc_highContrastHover');
        }
    }
}


ProcessControl.Configuration.MoveBehavior = function ProcessControl_Configuration_MoveBehavior($p0) {
    this.$$d_handleKeyboardDown = Function.createDelegate(this, this.handleKeyboardDown);
    this.$$d_moveDown = Function.createDelegate(this, this.moveDown);
    this.$$d_downArrowMouseLeave = Function.createDelegate(this, this.downArrowMouseLeave);
    this.$$d_downArrowMouseEnter = Function.createDelegate(this, this.downArrowMouseEnter);
    this.$$d_handleKeyboardUp = Function.createDelegate(this, this.handleKeyboardUp);
    this.$$d_moveUp = Function.createDelegate(this, this.moveUp);
    this.$$d_upArrowMouseLeave = Function.createDelegate(this, this.upArrowMouseLeave);
    this.$$d_upArrowMouseEnter = Function.createDelegate(this, this.upArrowMouseEnter);
    this.$$d_enableDisableUpDownArrows = Function.createDelegate(this, this.enableDisableUpDownArrows);
    ProcessControl.Configuration.MoveBehavior.initializeBase(this, [ $p0 ]);
}
ProcessControl.Configuration.MoveBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (26,3)
    initialize: function ProcessControl_Configuration_MoveBehavior$initialize() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.$U_3 = $find('pcc_tabs');
        if (!$P_CRM('#pcc_up_img').length && !ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.renderUpAndDownArrows();
        }
        this.$9_3 = $P_CRM('#pcc_up_img');
        this.$8_3 = $P_CRM('#pcc_down_img');
        this.$Z_3 = $P_CRM('#pcc_updown_arrows_text');
        this.disableUpAndDownArrows();
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().subscribe('stageselected', this.$$d_enableDisableUpDownArrows);
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().subscribe('stepselected', this.$$d_enableDisableUpDownArrows);
        this.$U_3.add_onTabChanging(this.$$d_enableDisableUpDownArrows);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (52,3)
    renderUpAndDownArrows: function ProcessControl_Configuration_MoveBehavior$renderUpAndDownArrows() {
        var $v_0 = $P_CRM(String.format('<img tabIndex=0 id=\'{0}\' title=\'{1}\'/>', CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_up_img'), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_MOVE_UP)));
        var $v_1 = $P_CRM(String.format('<img tabIndex=0 id=\'{0}\' title=\'{1}\'/>', CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_down_img'), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_MOVE_DOWN)));
        var $v_2 = $P_CRM(String.format('<p id=\'{0}\' class=\'{1}\'>{2}</p>', CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_updown_arrows_text'), CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_updown_text'), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_MOVE)));
        $v_2.addClass('pcc_updown_text_disabled');
        $v_0.attr('src', this.get_$13_3().source);
        $v_0.addClass(this.get_$13_3().cssClass);
        $v_1.attr('src', this.get_$12_3().source);
        $v_1.addClass(this.get_$12_3().cssClass);
        $P_CRM(this.get_element()).append($v_0).append($v_1).append($v_2);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (80,3)
    enableDisableUpDownArrows: function ProcessControl_Configuration_MoveBehavior$enableDisableUpDownArrows($p0, $p1) {
        this.clearUpAndDownArrowState();
        var $v_0 = this.handleNothingSelected();
        $v_0 = $v_0 || this.handleOnCorrectTab($p1);
        $v_0 = $v_0 || this.handleStepFocus();
        $v_0 = $v_0 || this.handleStageFocus();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (91,3)
    handleNothingSelected: function ProcessControl_Configuration_MoveBehavior$handleNothingSelected() {
        if (IsNull(ProcessControl.Configuration.StageFocusBehavior.get_$2())) {
            this.disableUpAndDownArrows();
            return true;
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (103,3)
    handleOnCorrectTab: function ProcessControl_Configuration_MoveBehavior$handleOnCorrectTab($p0) {
        if (IsNull(this.$U_3)) {
            this.$U_3 = $find('pcc_tabs');
        }
        if (IsNull(this.$U_3) || this.$U_3.get_isDisposed()) {
            return true;
        }
        var $v_0 = this.$U_3.getActiveTabId();
        if (Mscrm.FormInputControl.Tabs.TabChangingEventArgs.isInstanceOfType($p0)) {
            $v_0 = ($p0).get_newTabId();
        }
        var $v_1 = this.$U_3.getActiveTabId();
        if ($v_1 !== $v_0) {
            this.disableUpAndDownArrows();
            return true;
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (135,3)
    handleStepFocus: function ProcessControl_Configuration_MoveBehavior$handleStepFocus() {
        if (!IsNull(ProcessControl.Configuration.StepFocusBehavior.get_$D())) {
            var $v_0 = (Array.indexOf(ProcessControl.Configuration.StageFocusBehavior.get_$2().get_$4x_3(), ProcessControl.Configuration.StepFocusBehavior.get_$D()));
            if (!$v_0) {
                this.disableUpArrow();
            }
            if ($v_0 === ProcessControl.Configuration.StageFocusBehavior.get_$2().get_$4x_3().length - 1) {
                this.disableDownArrow();
            }
            if (ProcessControl.Configuration.StageFocusBehavior.get_$2().get_$4x_3().length === 1) {
                this.disableText();
            }
            return true;
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (163,3)
    handleStageFocus: function ProcessControl_Configuration_MoveBehavior$handleStageFocus() {
        var $v_0 = (Array.indexOf(ProcessControl.Configuration.StageFocusBehavior.get_$2().$1_5.get_$4x_3(), ProcessControl.Configuration.StageFocusBehavior.get_$2()));
        if (!$v_0) {
            this.disableUpArrow();
        }
        if ($v_0 === ProcessControl.Configuration.StageFocusBehavior.get_$2().$1_5.get_$4x_3().length - 1) {
            this.disableDownArrow();
        }
        if (ProcessControl.Configuration.StageFocusBehavior.get_$2().$1_5.get_$4x_3().length === 1) {
            this.disableText();
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (185,3)
    clearUpAndDownArrowState: function ProcessControl_Configuration_MoveBehavior$clearUpAndDownArrowState() {
        this.disableUpAndDownArrows();
        this.enableUpAndDownArrows();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (194,3)
    enableUpAndDownArrows: function ProcessControl_Configuration_MoveBehavior$enableUpAndDownArrows() {
        this.enableUpArrow();
        this.enableDownArrow();
        this.enableText();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (202,3)
    enableText: function ProcessControl_Configuration_MoveBehavior$enableText() {
        this.$Z_3.removeClass('pcc_updown_text_disabled');
        this.$Z_3.text(window.LOCID_PROCESS_MOVE);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (208,3)
    enableUpArrow: function ProcessControl_Configuration_MoveBehavior$enableUpArrow() {
        this.$9_3.removeClass(this.get_$13_3().cssClass);
        this.$9_3.addClass(this.get_$p_3().cssClass);
        this.$9_3.attr('src', this.get_$p_3().source);
        this.$9_3.mouseenter(this.$$d_upArrowMouseEnter);
        this.$9_3.mouseleave(this.$$d_upArrowMouseLeave);
        this.$9_3.focus(this.$$d_upArrowMouseEnter);
        this.$9_3.blur(this.$$d_upArrowMouseLeave);
        this.$9_3.click(this.$$d_moveUp);
        $P_CRM('body').keydown(this.$$d_handleKeyboardUp);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (225,3)
    enableDownArrow: function ProcessControl_Configuration_MoveBehavior$enableDownArrow() {
        this.$8_3.removeClass(this.get_$12_3().cssClass);
        this.$8_3.addClass(this.get_$o_3().cssClass);
        this.$8_3.attr('src', this.get_$o_3().source);
        this.$8_3.mouseenter(this.$$d_downArrowMouseEnter);
        this.$8_3.mouseleave(this.$$d_downArrowMouseLeave);
        this.$8_3.focus(this.$$d_upArrowMouseEnter);
        this.$8_3.blur(this.$$d_upArrowMouseLeave);
        this.$8_3.click(this.$$d_moveDown);
        $P_CRM('body').keydown(this.$$d_handleKeyboardDown);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (241,3)
    disableText: function ProcessControl_Configuration_MoveBehavior$disableText() {
        this.$Z_3.addClass('pcc_updown_text_disabled');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (249,3)
    disableUpAndDownArrows: function ProcessControl_Configuration_MoveBehavior$disableUpAndDownArrows() {
        this.disableUpArrow();
        this.disableDownArrow();
        this.disableText();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (260,3)
    disableUpArrow: function ProcessControl_Configuration_MoveBehavior$disableUpArrow() {
        this.$9_3.removeClass(this.get_$p_3().cssClass);
        this.$9_3.removeClass(this.get_$1M_3().cssClass);
        this.$9_3.addClass(this.get_$13_3().cssClass);
        this.$9_3.attr('src', this.get_$13_3().source);
        this.$9_3.unbind();
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardUp);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (276,3)
    disableDownArrow: function ProcessControl_Configuration_MoveBehavior$disableDownArrow() {
        this.$8_3.removeClass(this.get_$o_3().cssClass);
        this.$8_3.removeClass(this.get_$1L_3().cssClass);
        this.$8_3.addClass(this.get_$12_3().cssClass);
        this.$8_3.attr('src', this.get_$12_3().source);
        this.$8_3.unbind();
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardDown);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (293,3)
    upArrowMouseEnter: function ProcessControl_Configuration_MoveBehavior$upArrowMouseEnter($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$9_3.removeClass(this.get_$p_3().cssClass);
        this.$9_3.attr('src', this.get_$1M_3().source);
        this.$9_3.addClass(this.get_$1M_3().cssClass);
        this.$Z_3.text(window.LOCID_PROCESS_MOVE_UP);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (310,3)
    upArrowMouseLeave: function ProcessControl_Configuration_MoveBehavior$upArrowMouseLeave($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$9_3.removeClass(this.get_$1M_3().cssClass);
        this.$9_3.attr('src', this.get_$p_3().source);
        this.$9_3.addClass(this.get_$p_3().cssClass);
        this.$Z_3.text(window.LOCID_PROCESS_MOVE);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (327,3)
    downArrowMouseEnter: function ProcessControl_Configuration_MoveBehavior$downArrowMouseEnter($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$8_3.removeClass(this.get_$o_3().cssClass);
        this.$8_3.attr('src', this.get_$1L_3().source);
        this.$8_3.addClass(this.get_$1L_3().cssClass);
        this.$Z_3.text(window.LOCID_PROCESS_MOVE_DOWN);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (344,3)
    downArrowMouseLeave: function ProcessControl_Configuration_MoveBehavior$downArrowMouseLeave($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$8_3.removeClass(this.get_$1L_3().cssClass);
        this.$8_3.attr('src', this.get_$o_3().source);
        this.$8_3.addClass(this.get_$o_3().cssClass);
        this.$Z_3.text(window.LOCID_PROCESS_MOVE);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (357,3)
    handleKeyboardUp: function ProcessControl_Configuration_MoveBehavior$handleKeyboardUp($p0) {
        if ($p0.which === 38 && !this.$2t_3($p0.target)) {
            $p0.preventDefault();
            $p0.stopPropagation();
            this.moveUp($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (367,3)
    handleKeyboardDown: function ProcessControl_Configuration_MoveBehavior$handleKeyboardDown($p0) {
        if ($p0.which === 40 && !this.$2t_3($p0.target)) {
            $p0.preventDefault();
            $p0.stopPropagation();
            this.moveDown($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (377,3)
    $2t_3: function ProcessControl_Configuration_MoveBehavior$$2t_3($p0) {
        var $v_0 = $p0.id;
        return $v_0.substring($v_0.length - 7, $v_0.length) === '_sp_f_i';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (388,3)
    moveUp: function ProcessControl_Configuration_MoveBehavior$moveUp($p0) {
        if (IsNull($p0)) {
            return;
        }
        if (IsNull(ProcessControl.Configuration.StageFocusBehavior.get_$2())) {
            return;
        }
        if (!IsNull(ProcessControl.Configuration.StepFocusBehavior.get_$D())) {
            this.$2Y_3(ProcessControl.Configuration.MoveBehavior.$1r);
        }
        else {
            this.$2X_3(ProcessControl.Configuration.MoveBehavior.$1r);
        }
        this.enableDisableUpDownArrows(null, null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (407,3)
    $2Y_3: function ProcessControl_Configuration_MoveBehavior$$2Y_3($p0) {
        var $v_0 = ProcessControl.Configuration.StepFocusBehavior.get_$D().get_dataContext().get_parent();
        var $v_1 = ProcessControl.Configuration.StepFocusBehavior.get_$D().get_dataContext();
        var $v_2 = $v_0.get_steps().indexOf($v_1);
        $v_0.get_steps().move($v_2 + $p0, $v_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (416,3)
    $2X_3: function ProcessControl_Configuration_MoveBehavior$$2X_3($p0) {
        var $v_0 = ProcessControl.Configuration.StageFocusBehavior.get_$2().get_dataContext().get_parent();
        var $v_1 = ProcessControl.Configuration.StageFocusBehavior.get_$2().get_dataContext();
        var $v_2 = $v_0.get_steps().indexOf($v_1);
        $v_0.get_steps().move($v_2 + $p0, $v_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (429,3)
    moveDown: function ProcessControl_Configuration_MoveBehavior$moveDown($p0) {
        if (IsNull($p0)) {
            return;
        }
        if (IsNull(ProcessControl.Configuration.StageFocusBehavior.get_$2())) {
            return;
        }
        if (!IsNull(ProcessControl.Configuration.StepFocusBehavior.get_$D())) {
            this.$2Y_3(1);
        }
        else {
            this.$2X_3(1);
        }
        this.enableDisableUpDownArrows(null, null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (451,3)
    dispose: function ProcessControl_Configuration_MoveBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        var $v_0 = ProcessControl.Configuration.ProcessEventAggregator.get_instance();
        if (!$v_0.get_isDisposed()) {
            $v_0.unsubscribe('stageselected', this.$$d_enableDisableUpDownArrows);
            $v_0.unsubscribe('stepselected', this.$$d_enableDisableUpDownArrows);
        }
        if (!this.$U_3.get_isDisposed()) {
            this.$U_3.remove_onTabChanging(this.$$d_enableDisableUpDownArrows);
        }
        this.$9_3.unbind();
        this.$8_3.unbind();
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardUp);
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardDown);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (475,4)
    get_$p_3: function ProcessControl_Configuration_MoveBehavior$get_$p_3() {
        if (IsNull(this.$1c_3)) {
            this.$1c_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/30_enabled_move_up.png'));
        }
        return this.$1c_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (487,4)
    get_$o_3: function ProcessControl_Configuration_MoveBehavior$get_$o_3() {
        if (IsNull(this.$1a_3)) {
            this.$1a_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/30_enabled_move_down.png'));
        }
        return this.$1a_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (499,4)
    get_$1M_3: function ProcessControl_Configuration_MoveBehavior$get_$1M_3() {
        if (IsNull(this.$1h_3)) {
            this.$1h_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/30_moveuphover.png'));
        }
        return this.$1h_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (511,4)
    get_$1L_3: function ProcessControl_Configuration_MoveBehavior$get_$1L_3() {
        if (IsNull(this.$1f_3)) {
            this.$1f_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/30_movedownhover.png'));
        }
        return this.$1f_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (523,4)
    get_$13_3: function ProcessControl_Configuration_MoveBehavior$get_$13_3() {
        if (IsNull(this.$1Z_3)) {
            this.$1Z_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/30_disabled_move_up.png'));
        }
        return this.$1Z_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\MoveBehavior.cs (535,4)
    get_$12_3: function ProcessControl_Configuration_MoveBehavior$get_$12_3() {
        if (IsNull(this.$1X_3)) {
            this.$1X_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/30_disabled_move_down.png'));
        }
        return this.$1X_3;
    },
    
    $U_3: null,
    $9_3: null,
    $8_3: null,
    $Z_3: null,
    $1c_3: null,
    $1Z_3: null,
    $1h_3: null,
    $1a_3: null,
    $1X_3: null,
    $1f_3: null
}


ProcessControl.Configuration.StageFocusBehavior = function ProcessControl_Configuration_StageFocusBehavior(element) {
    this.$$d_$4E_4 = Function.createDelegate(this, this.$4E_4);
    ProcessControl.Configuration.StageFocusBehavior.initializeBase(this, [ element ]);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (26,4)
ProcessControl.Configuration.StageFocusBehavior.get_$2 = function ProcessControl_Configuration_StageFocusBehavior$get_$2() {
    return ProcessControl.Configuration.StageFocusBehavior.$Y;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (27,4)
ProcessControl.Configuration.StageFocusBehavior.set_$2 = function ProcessControl_Configuration_StageFocusBehavior$set_$2($p0) {
    if (ProcessControl.Configuration.StageFocusBehavior.$Y !== $p0) {
        if (!IsNull(ProcessControl.Configuration.StageFocusBehavior.$Y)) {
            ProcessControl.Configuration.StepFocusBehavior.set_$D(null);
            (ProcessControl.Configuration.StageFocusBehavior.$Y.$N_5).$t_4();
        }
        ProcessControl.Configuration.StageFocusBehavior.$Y = $p0;
        if (!IsNull(ProcessControl.Configuration.StageFocusBehavior.$Y)) {
            (ProcessControl.Configuration.StageFocusBehavior.$Y.$N_5).makeSelection();
        }
        ProcessControl.Configuration.StageFocusBehavior.$2d();
    }
    return $p0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (51,3)
ProcessControl.Configuration.StageFocusBehavior.$2d = function ProcessControl_Configuration_StageFocusBehavior$$2d() {
    var $v_0 = ProcessControl.Configuration.ProcessEventAggregator.get_instance();
    $v_0.publish('stageselected', null, null);
}
ProcessControl.Configuration.StageFocusBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (60,3)
    dispose: function ProcessControl_Configuration_StageFocusBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (ProcessControl.Configuration.StageFocusBehavior.get_$2() === this.get_view()) {
            ProcessControl.Configuration.StageFocusBehavior.set_$2(null);
        }
        ProcessControl.Configuration.FocusBehaviorBase.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (79,3)
    onFocused: function ProcessControl_Configuration_StageFocusBehavior$onFocused(eventHandler) {
        ProcessControl.Configuration.StageFocusBehavior.set_$2(this.get_view());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (89,3)
    $t_4: function ProcessControl_Configuration_StageFocusBehavior$$t_4() {
        this.get_view().get_$c_5().removeClass('pc_stagehl');
        this.get_view().get_$I_5().removeClass('pc_arrow_sel');
        this.get_view().get_$6_5().removeClass('pc_stg_del_sel');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$c_5().removeClass('pc_highContrastFocused');
            this.get_view().get_$I_5().removeClass('pc_highContrastFocused');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (108,3)
    $2V_4: function ProcessControl_Configuration_StageFocusBehavior$$2V_4() {
        this.get_view().get_$I_5().addClass('pc_arrow_sel');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$I_5().addClass('pc_highContrastFocused');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (120,3)
    makeSelection: function ProcessControl_Configuration_StageFocusBehavior$makeSelection() {
        this.get_view().get_$c_5().addClass('pc_stagehl');
        this.get_view().get_$I_5().addClass('pc_arrow_sel');
        if (this.get_view().$1_5.get_$4x_3().length > 1 && !ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.get_view().get_$6_5().addClass('pc_stg_del_sel');
        }
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$c_5().addClass('pc_highContrastFocused');
            this.get_view().get_$I_5().addClass('pc_highContrastFocused');
        }
        this.get_view().get_elementWrapper().bind('keydown', this.$$d_$4E_4);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (145,3)
    $4E_4: function ProcessControl_Configuration_StageFocusBehavior$$4E_4($p0) {
        switch ($p0.which) {
            case 127:
            case 8:
            case 46:
                if (!this.$T_4($p0)) {
                    return;
                }
                this.get_view().$1_5.$1t_5($p0);
                $p0.preventDefault();
                $p0.stopImmediatePropagation();
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (170,3)
    $T_4: function ProcessControl_Configuration_StageFocusBehavior$$T_4($p0) {
        return this.get_view().get_$6_5().is(':visible') && ProcessControl.Configuration.BpfMenuActions.isCtrlKeyPressed($p0);
    }
}


ProcessControl.Configuration.StageFocusEventBubbleBehavior = function ProcessControl_Configuration_StageFocusEventBubbleBehavior(element) {
    ProcessControl.Configuration.StageFocusEventBubbleBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StageFocusEventBubbleBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (197,3)
    onFocused: function ProcessControl_Configuration_StageFocusEventBubbleBehavior$onFocused(eventHandler) {
        var $v_0 = $P_CRM(eventHandler.target);
        var $v_1 = $v_0.attr('data-stepSelected');
        if (isNullOrEmptyString($v_1) || !Boolean.parse($v_1)) {
            ProcessControl.Configuration.StepFocusBehavior.set_$D(null);
            ProcessControl.Configuration.StageFocusBehavior.set_$2(null);
        }
        $v_0.removeAttr('data-stepSelected');
        ProcessControl.Configuration.StageFocusBehavior.prototype.onFocused.call(this, eventHandler);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (215,3)
    makeSelection: function ProcessControl_Configuration_StageFocusEventBubbleBehavior$makeSelection() {
        if (IsNull(ProcessControl.Configuration.StepFocusBehavior.get_$D())) {
            ProcessControl.Configuration.StageFocusBehavior.prototype.makeSelection.call(this);
        }
        else {
            this.$t_4();
            this.$2V_4();
        }
    }
}


ProcessControl.Configuration.StageFocusEventCapturingBehavior = function ProcessControl_Configuration_StageFocusEventCapturingBehavior(element) {
    ProcessControl.Configuration.StageFocusEventCapturingBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StageFocusEventCapturingBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StageFocusBehavior.cs (246,3)
    onFocused: function ProcessControl_Configuration_StageFocusEventCapturingBehavior$onFocused(eventHandler) {
        ProcessControl.Configuration.StepFocusBehavior.set_$D(null);
        ProcessControl.Configuration.StageFocusBehavior.set_$2(null);
        ProcessControl.Configuration.StageFocusBehavior.prototype.onFocused.call(this, eventHandler);
    }
}


ProcessControl.Configuration.StepFocusBehavior = function ProcessControl_Configuration_StepFocusBehavior(element) {
    this.$$d_$2U_4 = Function.createDelegate(this, this.$2U_4);
    ProcessControl.Configuration.StepFocusBehavior.initializeBase(this, [ element ]);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (30,4)
ProcessControl.Configuration.StepFocusBehavior.get_$D = function ProcessControl_Configuration_StepFocusBehavior$get_$D() {
    return ProcessControl.Configuration.StepFocusBehavior.$e;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (31,4)
ProcessControl.Configuration.StepFocusBehavior.set_$D = function ProcessControl_Configuration_StepFocusBehavior$set_$D($p0) {
    if (!IsNull(ProcessControl.Configuration.StepFocusBehavior.$e)) {
        (ProcessControl.Configuration.StepFocusBehavior.$e.$N_4).$t_4();
    }
    ProcessControl.Configuration.StepFocusBehavior.$e = $p0;
    if (!IsNull(ProcessControl.Configuration.StepFocusBehavior.$e)) {
        (ProcessControl.Configuration.StepFocusBehavior.$e.$N_4).$1q_4();
    }
    ProcessControl.Configuration.StepFocusBehavior.$2d();
    return $p0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (50,3)
ProcessControl.Configuration.StepFocusBehavior.$2d = function ProcessControl_Configuration_StepFocusBehavior$$2d() {
    var $v_0 = ProcessControl.Configuration.ProcessEventAggregator.get_instance();
    $v_0.publish('stepselected', null, null);
}
ProcessControl.Configuration.StepFocusBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (20,3)
    initialize: function ProcessControl_Configuration_StepFocusBehavior$initialize() {
        ProcessControl.Configuration.FocusBehaviorBase.prototype.initialize.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (59,3)
    dispose: function ProcessControl_Configuration_StepFocusBehavior$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (ProcessControl.Configuration.StepFocusBehavior.get_$D() === this.get_view()) {
            ProcessControl.Configuration.StepFocusBehavior.set_$D(null);
        }
        ProcessControl.Configuration.FocusBehaviorBase.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (77,3)
    onFocused: function ProcessControl_Configuration_StepFocusBehavior$onFocused(eventHandler) {
        ProcessControl.Configuration.StepFocusBehavior.set_$D(this.get_view());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (86,3)
    $1q_4: function ProcessControl_Configuration_StepFocusBehavior$$1q_4() {
        this.get_view().get_$d_4().addClass('pc_stephl');
        this.get_view().get_$a_4().addClass('pc_stephl');
        if (!IsNull(this.get_view().$1_4.get_$4x_3()) && this.get_view().$1_4.get_$4x_3().length > 1 && !ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.get_view().get_$6_4().addClass('pc_step_del_sel');
        }
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$d_4().addClass('pc_highContrastFocused');
            this.get_view().get_$a_4().addClass('pc_highContrastFocused');
        }
        this.get_view().get_elementWrapper().bind('keydown', this.$$d_$2U_4);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (110,3)
    $2U_4: function ProcessControl_Configuration_StepFocusBehavior$$2U_4($p0) {
        switch ($p0.which) {
            case 127:
            case 8:
            case 46:
                if (!this.$T_4($p0)) {
                    return;
                }
                this.get_view().$1_4.$1u_5($p0);
                $p0.preventDefault();
                $p0.stopImmediatePropagation();
                break;
            case 81:
                if (!this.$T_4($p0)) {
                    return;
                }
                this.get_view().$1s_4($p0);
                $p0.preventDefault();
                $p0.stopImmediatePropagation();
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (146,3)
    $T_4: function ProcessControl_Configuration_StepFocusBehavior$$T_4($p0) {
        return this.get_view().get_$6_4().is(':visible') && ProcessControl.Configuration.BpfMenuActions.isCtrlKeyPressed($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (154,3)
    $t_4: function ProcessControl_Configuration_StepFocusBehavior$$t_4() {
        this.get_view().get_$d_4().removeClass('pc_stephl');
        this.get_view().get_$a_4().removeClass('pc_stephl');
        this.get_view().get_$6_4().removeClass('pc_step_del_sel');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$d_4().removeClass('pc_highContrastFocused');
            this.get_view().get_$a_4().removeClass('pc_highContrastFocused');
        }
    }
}


ProcessControl.Configuration.StepFocusEventBubbleBehavior = function ProcessControl_Configuration_StepFocusEventBubbleBehavior(element) {
    ProcessControl.Configuration.StepFocusEventBubbleBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StepFocusEventBubbleBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (187,3)
    onFocused: function ProcessControl_Configuration_StepFocusEventBubbleBehavior$onFocused(eventHandler) {
        ProcessControl.Configuration.StepFocusBehavior.set_$D(null);
        ProcessControl.Configuration.StageFocusBehavior.set_$2(null);
        ProcessControl.Configuration.StepFocusBehavior.prototype.onFocused.call(this, eventHandler);
        $P_CRM(eventHandler.target).attr('data-stepSelected', 'true');
    }
}


ProcessControl.Configuration.StepFocusEventCapturingBehavior = function ProcessControl_Configuration_StepFocusEventCapturingBehavior(element) {
    ProcessControl.Configuration.StepFocusEventCapturingBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StepFocusEventCapturingBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\StepFocusBehavior.cs (213,3)
    onFocused: function ProcessControl_Configuration_StepFocusEventCapturingBehavior$onFocused(eventHandler) {
        ProcessControl.Configuration.StepFocusBehavior.prototype.onFocused.call(this, eventHandler);
        (ProcessControl.Configuration.StageFocusBehavior.get_$2().$N_5).$t_4();
        (ProcessControl.Configuration.StageFocusBehavior.get_$2().$N_5).$2V_4();
    }
}


ProcessControl.Configuration.ProcessBuilder = function ProcessControl_Configuration_ProcessBuilder() {
}
ProcessControl.Configuration.ProcessBuilder.$$ = function ProcessControl_Configuration_ProcessBuilder$$$(TWrapper) {
    var $$cn = 'ProcessBuilder' + '$1' + '$' + TWrapper.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.ProcessBuilder'] = {'TWrapper': TWrapper};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.ProcessBuilder.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn);
        var $$dict_5 = ProcessControl.Configuration.ProcessBuilder.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.ProcessBuilder.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (25,3)
    sanitizeId: function ProcessControl_Configuration_ProcessBuilder$sanitizeId(id) {
        return id.replace('{', '').replace('}', '');
    }
}


ProcessControl.Configuration.StageBuilder = function ProcessControl_Configuration_StageBuilder() {
    ProcessControl.Configuration.StageBuilder.initializeBase(this);
}
ProcessControl.Configuration.StageBuilder.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (36,3)
    buildProcessComponent: function ProcessControl_Configuration_StageBuilder$buildProcessComponent(wrapper, idPrefix) {
        var $v_0 = wrapper;
        var $v_1 = String.format('{0}_{1}_st', idPrefix, this.sanitizeId($v_0.get_id()));
        var $v_2 = new Sys.StringBuilder();
        this.$36_1($v_2, $v_0, $v_1);
        return $P_CRM($v_2.toString());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (53,3)
    $36_1: function ProcessControl_Configuration_StageBuilder$$36_1($p0, $p1, $p2) {
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2l, $p2));
        this.$37_1($p0);
        this.$38_1($p0, $p1, $p2);
        this.$35_1($p0, $p2);
        $p0.append('</div></li>');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (66,3)
    $37_1: function ProcessControl_Configuration_StageBuilder$$37_1($p0) {
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$28, 'block', 'none'));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (77,3)
    $38_1: function ProcessControl_Configuration_StageBuilder$$38_1($p0, $p1, $p2) {
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2k, 'pc_st_stc pc_stc_hasnext', CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_name', $p2)), CrmEncodeDecode.CrmHtmlEncode($p1.get_stepLabels().get_item(0).get_description()), CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_category', $p2)), CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_spl', $p2))));
        new ProcessControl.Configuration.StepBuilder().$2C_1($p0, $p1.get_steps().get_item(0), $p2);
        $p0.append('</ul></span></span>');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (95,3)
    $35_1: function ProcessControl_Configuration_StageBuilder$$35_1($p0, $p1) {
        var $v_0 = CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_DELETESTAGE);
        var $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/12_inactive_config_delete.png'));
        var $v_2 = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_del', $p1));
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2j, $v_1.cssClass, $v_1.source, $v_0, $v_0, $v_2));
    }
}


ProcessControl.Configuration.StepBuilder = function ProcessControl_Configuration_StepBuilder() {
    ProcessControl.Configuration.StepBuilder.initializeBase(this);
}
ProcessControl.Configuration.StepBuilder.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (109,3)
    buildProcessComponent: function ProcessControl_Configuration_StepBuilder$buildProcessComponent(wrapper, idPrefix) {
        var $v_0 = wrapper;
        var $v_1 = new Sys.StringBuilder();
        this.$2C_1($v_1, $v_0, idPrefix);
        return $P_CRM($v_1.toString());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (125,3)
    $2C_1: function ProcessControl_Configuration_StepBuilder$$2C_1($p0, $p1, $p2) {
        var $v_0 = String.format('{0}_{1}_sp', $p2, this.sanitizeId($p1.get_id()));
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2r, CrmEncodeDecode.CrmHtmlAttributeEncode($v_0)));
        this.$4b_1($p0, $p1, $v_0);
        this.$4Z_1($p0, $v_0);
        this.$4Y_1($p0, $v_0);
        $p0.append('</li>');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (142,3)
    $4b_1: function ProcessControl_Configuration_StepBuilder$$4b_1($p0, $p1, $p2) {
        $p0.append(ProcessControl.Configuration.HtmlTemplate.$2p);
        this.$4c_1($p0, $p1, $p2);
        this.$4a_1($p0, $p1, $p2);
        $p0.append(ProcessControl.Configuration.HtmlTemplate.$2o);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (156,3)
    $4c_1: function ProcessControl_Configuration_StepBuilder$$4c_1($p0, $p1, $p2) {
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2q, CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_n', $p2)), CrmEncodeDecode.CrmHtmlEncode(ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser($p1.get_stepLabels(), $p1.get_stepStepId()).get_description())));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (169,3)
    $4a_1: function ProcessControl_Configuration_StepBuilder$$4a_1($p0, $p1, $p2) {
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2n, CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_f', $p2)), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_NEWFIELDTEXTKEY)));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (180,3)
    $4Y_1: function ProcessControl_Configuration_StepBuilder$$4Y_1($p0, $p1) {
        var $v_0 = CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_DELETESTEP);
        var $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/12_inactive_config_delete.png'));
        var $v_2 = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_del', $p1));
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2m, $v_1.source, 'pc_step_d_img ' + $v_1.cssClass, $v_0, $v_0, $v_2));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Builder\ProcessBuilder.cs (192,3)
    $4Z_1: function ProcessControl_Configuration_StepBuilder$$4Z_1($p0, $p1) {
        var $v_0 = CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_PROCESSREQUIRED);
        var $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/12_checkbox_off.png'));
        var $v_2 = 'pc_step_req prc_step_rc ' + Sys.Browser.name;
        var $v_3 = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_req', $p1));
        $p0.append(String.format(ProcessControl.Configuration.HtmlTemplate.$2f, $v_2, $v_1.source, $v_0, $v_0, $v_3));
    }
}


ProcessControl.Configuration.ProcessEventAggregator = function ProcessControl_Configuration_ProcessEventAggregator(element) {
    ProcessControl.Configuration.ProcessEventAggregator.initializeBase(this, [ element ]);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Events\EventAggregator.cs (36,4)
ProcessControl.Configuration.ProcessEventAggregator.get_instance = function ProcessControl_Configuration_ProcessEventAggregator$get_instance() {
    if (IsNull(ProcessControl.Configuration.ProcessEventAggregator.$1A)) {
        ProcessControl.Configuration.ProcessEventAggregator.$1A = $find('pcc_event');
    }
    return ProcessControl.Configuration.ProcessEventAggregator.$1A;
}
ProcessControl.Configuration.ProcessEventAggregator.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Events\EventAggregator.cs (51,3)
    subscribe: function ProcessControl_Configuration_ProcessEventAggregator$subscribe(eventToSubscribe, handler) {
        this.get_events().addHandler(eventToSubscribe, handler);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Events\EventAggregator.cs (61,3)
    unsubscribe: function ProcessControl_Configuration_ProcessEventAggregator$unsubscribe(eventToUnsubscibe, handler) {
        this.get_events().removeHandler(eventToUnsubscibe, handler);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Events\EventAggregator.cs (73,3)
    publish: function ProcessControl_Configuration_ProcessEventAggregator$publish(eventToPublish, sender, args) {
        var $v_0 = this.get_events().getHandler(eventToPublish);
        if (!IsNull($v_0)) {
            $v_0(sender, args);
        }
    }
}


ProcessControl.Configuration.EventNames = function ProcessControl_Configuration_EventNames() {
}


ProcessControl.Configuration.KeyCode = function ProcessControl_Configuration_KeyCode() {
}


ProcessControl.Configuration.BpfMenuActions = function ProcessControl_Configuration_BpfMenuActions() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (33,4)
ProcessControl.Configuration.BpfMenuActions.get_bpfView = function ProcessControl_Configuration_BpfMenuActions$get_bpfView() {
    return ProcessControl.Configuration.BpfMenuActions.$7;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (34,4)
ProcessControl.Configuration.BpfMenuActions.set_bpfView = function ProcessControl_Configuration_BpfMenuActions$set_bpfView(value) {
    ProcessControl.Configuration.BpfMenuActions.$7 = value;
    return value;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (40,3)
ProcessControl.Configuration.BpfMenuActions.saveProcess = function ProcessControl_Configuration_BpfMenuActions$saveProcess(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    ProcessControl.Configuration.BpfMenuActions.$7.saveProcess(null);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (56,3)
ProcessControl.Configuration.BpfMenuActions.saveProcessAs = function ProcessControl_Configuration_BpfMenuActions$saveProcessAs(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    ProcessControl.Configuration.BpfMenuActions.$7.saveProcessAs();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (74,3)
ProcessControl.Configuration.BpfMenuActions.activateBusinessProcessFlow = function ProcessControl_Configuration_BpfMenuActions$activateBusinessProcessFlow(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    if (ProcessControl.Configuration.BpfMenuActions.$7.get_isDirty()) {
        ProcessControl.Configuration.BpfMenuActions.$7.saveProcess(function($p1_0, $p1_1) {
            if (!$p1_0.Success) {
                return;
            }
            ProcessControl.Configuration.BpfMenuActions.$7.activateProcess();
        });
    }
    else {
        ProcessControl.Configuration.BpfMenuActions.$7.activateProcess();
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (100,3)
ProcessControl.Configuration.BpfMenuActions.deleteBusinessProcessFlow = function ProcessControl_Configuration_BpfMenuActions$deleteBusinessProcessFlow(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    ProcessControl.Configuration.BpfMenuActions.$7.deleteProcess();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (113,3)
ProcessControl.Configuration.BpfMenuActions.deactivateBusinessProcessFlow = function ProcessControl_Configuration_BpfMenuActions$deactivateBusinessProcessFlow(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    if (ProcessControl.Configuration.BpfMenuActions.$7.get_isDirty()) {
        ProcessControl.Configuration.BpfMenuActions.$7.saveProcess(function($p1_0, $p1_1) {
            if (!$p1_0.Success) {
                return;
            }
            ProcessControl.Configuration.BpfMenuActions.$7.deactivateProcess();
        });
    }
    else {
        ProcessControl.Configuration.BpfMenuActions.$7.deactivateProcess();
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (136,3)
ProcessControl.Configuration.BpfMenuActions.openProcessRoleAssignment = function ProcessControl_Configuration_BpfMenuActions$openProcessRoleAssignment(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    var $v_0 = '/tools/dialogs/RoleAssignment.aspx?oid=' + CrmEncodeDecode.CrmUrlEncode(window._Process_Id);
    ProcessControl.Configuration.BpfMenuActions.$1N($v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (150,3)
ProcessControl.Configuration.BpfMenuActions.openProcessOrder = function ProcessControl_Configuration_BpfMenuActions$openProcessOrder(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    var $v_0 = '/tools/dialogs/componentorder.aspx?etn=' + CrmEncodeDecode.CrmUrlEncode(ProcessControl.Configuration.BpfMenuActions.$7.get_dataContext().get_primaryEntityName());
    ProcessControl.Configuration.BpfMenuActions.$1N($v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (165,3)
ProcessControl.Configuration.BpfMenuActions.showBusinessProcessFlowDependencies = function ProcessControl_Configuration_BpfMenuActions$showBusinessProcessFlowDependencies(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$T(eventData)) {
        return;
    }
    var $v_0 = Mscrm.CrmUri.create('/tools/dependency/dependencyviewdialog.aspx');
    $v_0.get_query()['objectid'] = window._Process_Id;
    $v_0.get_query()['objecttype'] = 4703;
    $v_0.get_query()['operationtype'] = 'showdependency';
    openStdWin($v_0, 'ShowDependency', 660, 580, null);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (182,3)
ProcessControl.Configuration.BpfMenuActions.bindMenuActions = function ProcessControl_Configuration_BpfMenuActions$bindMenuActions() {
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBSave', ProcessControl.Configuration.BpfMenuActions.saveProcess);
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBSaveAs', ProcessControl.Configuration.BpfMenuActions.saveProcessAs);
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBActivate', ProcessControl.Configuration.BpfMenuActions.activateBusinessProcessFlow);
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBDeactivate', ProcessControl.Configuration.BpfMenuActions.deactivateBusinessProcessFlow);
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBDelete', ProcessControl.Configuration.BpfMenuActions.deleteBusinessProcessFlow);
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBOrder', ProcessControl.Configuration.BpfMenuActions.openProcessOrder);
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBRoleAssignment', ProcessControl.Configuration.BpfMenuActions.openProcessRoleAssignment);
    ProcessControl.Configuration.BpfMenuActions.$b('#_MBDependencies', ProcessControl.Configuration.BpfMenuActions.showBusinessProcessFlowDependencies);
    ProcessControl.Configuration.BpfMenuActions.$2A('#ProcessName', ProcessControl.Configuration.BpfMenuActions.$7.$$d_titleOrDescriptionChanged);
    ProcessControl.Configuration.BpfMenuActions.$2A('#Description', ProcessControl.Configuration.BpfMenuActions.$7.$$d_titleOrDescriptionChanged);
    var $v_0 = {};
    $v_0['Action'] = 'Shortcut';
    $P_CRM(window).bind(Mscrm.EventKeys.keyDown, $v_0, ProcessControl.Configuration.BpfMenuActions.$4F);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (216,3)
ProcessControl.Configuration.BpfMenuActions.$4F = function ProcessControl_Configuration_BpfMenuActions$$4F($p0) {
    if (!ProcessControl.Configuration.BpfMenuActions.isCtrlKeyPressed($p0)) {
        return;
    }
    switch (String.fromCharCode($p0.which).toLowerCase()) {
        case 's':
            ProcessControl.Configuration.BpfMenuActions.saveProcess($p0);
            $p0.stopPropagation();
            $p0.preventDefault();
            break;
        case ' ':
            ProcessConfiguration.Behavior.ConfiguratorFlyout.showFlyout();
            $p0.stopPropagation();
            $p0.preventDefault();
            break;
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (242,3)
ProcessControl.Configuration.BpfMenuActions.$1N = function ProcessControl_Configuration_BpfMenuActions$$1N($p0) {
    var $v_0 = Mscrm.CrmUri.create($p0);
    $v_0 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_0);
    var $v_1 = new Xrm.DialogOptions();
    $v_1.width = 660;
    $v_1.height = 580;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (254,3)
ProcessControl.Configuration.BpfMenuActions.$2A = function ProcessControl_Configuration_BpfMenuActions$$2A($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    $v_0.bind('change', $p1);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (265,3)
ProcessControl.Configuration.BpfMenuActions.$T = function ProcessControl_Configuration_BpfMenuActions$$T($p0) {
    if ($p0.which === 9) {
        return false;
    }
    if (IsNull(ProcessControl.Configuration.BpfMenuActions.$7) || ($p0.which !== 13 && $p0.which !== 1 && $p0.which && $p0.data['Action'] !== 'Shortcut')) {
        return false;
    }
    ProcessControl.Configuration.BpfMenuActions.$7.validate();
    if (!ProcessControl.Configuration.BpfMenuActions.$7.get_validationResult().isValid) {
        return false;
    }
    return true;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (297,3)
ProcessControl.Configuration.BpfMenuActions.isCtrlKeyPressed = function ProcessControl_Configuration_BpfMenuActions$isCtrlKeyPressed(e) {
    return (e.ctrlKey || e.metaKey);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\BpfMenuActions.cs (309,3)
ProcessControl.Configuration.BpfMenuActions.$b = function ProcessControl_Configuration_BpfMenuActions$$b($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    $v_0.bind('click', $p1);
    $v_0.bind('keydown', $p1);
    $v_0.removeAttr('action');
    $v_0.removeAttr('onClick');
}


ProcessControl.Configuration.BpfDataUtility = function ProcessControl_Configuration_BpfDataUtility() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\BpfDataUtility.cs (29,3)
ProcessControl.Configuration.BpfDataUtility.getEntityAndRelationshipMetadata = function ProcessControl_Configuration_BpfDataUtility$getEntityAndRelationshipMetadata(entityLogicalName, callback) {
    var $v_0 = new RemoteCommand('ProcessControl', 'GetEntityAndRelationshipMetadata');
    $v_0.SetParameter('entityName', entityLogicalName);
    $v_0.Execute(callback);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\BpfDataUtility.cs (52,3)
ProcessControl.Configuration.BpfDataUtility.executeConfiguratorActionCommand = function ProcessControl_Configuration_BpfDataUtility$executeConfiguratorActionCommand(serializedData, action, callback, errorHandler) {
    var $v_0 = new RemoteCommand('ProcessControl', action);
    $v_0.SetParameter('jsonData', serializedData);
    $v_0.SetParameter('id', window._Process_Id);
    $v_0.ErrorHandler = errorHandler;
    $v_0.Execute(callback);
}


ProcessControl.Configuration.EntityTabsControl = function ProcessControl_Configuration_EntityTabsControl(element) {
    ProcessControl.Configuration.EntityTabsControl.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.EntityTabsControl.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\EntityTabsControl.cs (21,3)
    initialize: function ProcessControl_Configuration_EntityTabsControl$initialize() {
        Mscrm.FormInputControl.Tabs.TabsControl.prototype.initialize.call(this);
        this.get_tabsContentjQueryObject().height(this.get_tabsControljQueryObject().height() - this.get_tabsHeaderjQueryObject().height());
        var $v_0 = this.get_tabLinksjQueryObject().filter('.' + Mscrm.FormInputControl.Tabs.TabsControl.activeTabClassName);
        if (!IsNull($v_0)) {
            $v_0.focus();
        }
    }
}


ProcessControl.Configuration.ProcessConfigurationUtility = function ProcessControl_Configuration_ProcessConfigurationUtility() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (22,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getIndexFromTabContentId = function ProcessControl_Configuration_ProcessConfigurationUtility$getIndexFromTabContentId(tabId) {
    tabId = tabId.replace('pcc_', '');
    return Number.parseInvariant(tabId);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (31,3)
ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl = function ProcessControl_Configuration_ProcessConfigurationUtility$resetFocusOnActiveControl() {
    if (IsNull(Mscrm.InlineEditUtilities.get_activeControl())) {
        return;
    }
    Mscrm.InlineEditUtilities.get_activeControl().blur();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (46,3)
ProcessControl.Configuration.ProcessConfigurationUtility.isLinkControl = function ProcessControl_Configuration_ProcessConfigurationUtility$isLinkControl(stepStep) {
    var $v_0 = stepStep.get_steps().get_item(0);
    if (!$v_0.get_isSystemControl()) {
        return false;
    }
    var $v_1 = $v_0.get_parameters();
    return ($v_1 === '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>') || ($v_1 === '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (66,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepTypeFromControlParameters = function ProcessControl_Configuration_ProcessConfigurationUtility$getSystemStepTypeFromControlParameters(control) {
    if (!control.get_isSystemControl()) {
        return '';
    }
    switch (control.get_parameters()) {
        case '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{f9e54d49-0c76-4cbd-979b-5fe94b496be0}</InlineViewIds></parameters>':
            return 'IdentifyAccount';
        case '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Incident</EntityLogicalName><InlineViewIds>{06D2061B-703E-465B-B8AD-FD69C6157127}</InlineViewIds></parameters>':
            return 'IdentifyCase';
        case '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74220}</InlineViewIds></parameters>':
            return 'IdentifyContact';
        case '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Contact</EntityLogicalName><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74228},{f9e54d49-0c76-4cbd-979b-5fe94b496beb}</InlineViewIds></parameters>':
            return 'IdentifyCustomer';
        case '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>':
            return 'Resolve';
        case '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>':
            return 'Solution';
        default:
            return '';
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (93,3)
ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls = function ProcessControl_Configuration_ProcessConfigurationUtility$refreshAvailableSystemControls(processControlView) {
    var $v_0 = processControlView.get_dataContext();
    ProcessControl.Configuration.ProcessConfigurationUtility.$4p(processControlView);
    if (!ProcessControl.Configuration.ProcessConfigurationUtility.workflowCanContainSystemSteps($v_0)) {
        return;
    }
    for (var $v_1 = 0; $v_1 < $v_0.get_steps().get_count(); $v_1++) {
        var $v_2 = $v_0.get_steps().get_item($v_1);
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps($v_2)) {
            continue;
        }
        for (var $v_3 = 0; $v_3 < $v_2.get_steps().get_count(); $v_3++) {
            var $v_4 = $v_2.get_steps().get_item($v_3);
            for (var $v_5 = 0; $v_5 < $v_4.get_steps().get_count(); $v_5++) {
                var $v_6 = $v_4.get_steps().get_item($v_5);
                if (!ProcessControl.Configuration.ProcessConfigurationUtility.isLinkControl($v_6)) {
                    continue;
                }
                var $v_7 = $v_6.get_steps().get_item(0);
                ProcessControl.Configuration.ProcessConfigurationUtility.$3x($v_7, processControlView);
            }
        }
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (132,3)
ProcessControl.Configuration.ProcessConfigurationUtility.workflowCanContainSystemSteps = function ProcessControl_Configuration_ProcessConfigurationUtility$workflowCanContainSystemSteps(workflowStep) {
    for (var $v_0 = 0; $v_0 < workflowStep.get_steps().get_count(); $v_0++) {
        var $v_1 = workflowStep.get_steps().get_item($v_0);
        if (ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps($v_1)) {
            return true;
        }
    }
    return false;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (148,3)
ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps = function ProcessControl_Configuration_ProcessConfigurationUtility$entityCanContainSystemSteps(entityStep) {
    var $v_0 = entityStep.get_entityLogicalName();
    return $v_0 === Mscrm.EntityLogicalNames.Incident || $v_0 === Mscrm.EntityLogicalNames.Lead;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (158,3)
ProcessControl.Configuration.ProcessConfigurationUtility.$4p = function ProcessControl_Configuration_ProcessConfigurationUtility$$4p($p0) {
    for (var $v_0 = 0; $v_0 < $p0.get_$4x_3().length; $v_0++) {
        ($p0.get_$4x_3()[$v_0]).configureControlStepMenu();
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (171,3)
ProcessControl.Configuration.ProcessConfigurationUtility.$3x = function ProcessControl_Configuration_ProcessConfigurationUtility$$3x($p0, $p1) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepTypeFromControlParameters($p0);
    var $v_1 = String.format('div.pc_en_colh_ss_menu li[data-system-step-enum-value=\'{0}\']', $v_0);
    var $v_2 = $P_CRM($p1.get_element());
    var $v_3 = $v_2.find($v_1);
    $v_3.css('display', 'none');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (187,3)
ProcessControl.Configuration.ProcessConfigurationUtility.generateEntityStep = function ProcessControl_Configuration_ProcessConfigurationUtility$generateEntityStep(workflowStep, entityLogicalName) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.EntityStep(workflowStep, entityLogicalName);
    $v_0.set_workflow(workflowStep);
    $v_0.set_parent(workflowStep);
    $v_0.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_0.appendStep(ProcessControl.Configuration.ProcessConfigurationUtility.createOnlyStageData(workflowStep));
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (202,3)
ProcessControl.Configuration.ProcessConfigurationUtility.createOnlyStageData = function ProcessControl_Configuration_ProcessConfigurationUtility$createOnlyStageData(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid();
    var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.StageStep(workflowStep, window.LOCID_PROCESS_NEWSTAGETEXTKEY);
    $v_1.addLabel(ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel(window.LOCID_PROCESS_NEWSTAGETEXTKEY, window._Process_CurrentLCID, $v_0));
    $v_1.set_workflow(workflowStep);
    $v_1.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_1.set_stageId($v_0);
    $v_1.set_stageCategory('-1');
    return $v_1;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (224,3)
ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel = function ProcessControl_Configuration_ProcessConfigurationUtility$generateStepLabel(labelValue, lcid, labelId) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
    $v_0.set_description(labelValue);
    $v_0.set_labelId(labelId);
    $v_0.set_languageCode(parseInt(lcid));
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (239,3)
ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabelForCurrentUser = function ProcessControl_Configuration_ProcessConfigurationUtility$generateStepLabelForCurrentUser(labelValue, labelId) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel(labelValue, window._Process_CurrentLCID, labelId);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (248,3)
ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStageData = function ProcessControl_Configuration_ProcessConfigurationUtility$createEmptyStageData(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid();
    var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.StageStep(workflowStep, window.LOCID_PROCESS_NEWSTAGETEXTKEY);
    $v_1.addLabel(ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel(window.LOCID_PROCESS_NEWSTAGETEXTKEY, window._Process_CurrentLCID, $v_0));
    $v_1.set_workflow(workflowStep);
    $v_1.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_1.set_stageId($v_0);
    $v_1.set_stageCategory('-1');
    var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData(workflowStep);
    $v_2.set_parent($v_1);
    $v_2.get_parent().set_workflow(workflowStep);
    $v_2.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_1.appendStep($v_2);
    return $v_1;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (274,3)
ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData = function ProcessControl_Configuration_ProcessConfigurationUtility$createEmptyStepData(workflowStep) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '', '', '', '');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (289,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getSystemStep(workflowStep, parameters, dataFieldName, classId, controlDisplayName) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid();
    var $v_1 = window.LOCID_PROCESS_NEWSTEPTEXTKEY;
    if (!isNullOrEmptyString(classId)) {
        $v_1 = controlDisplayName;
    }
    var $v_2 = new Microsoft.Crm.Workflow.ObjectModel.StepStep(workflowStep, $v_1);
    $v_2.addLabel(ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel($v_1, window._Process_CurrentLCID, $v_0));
    $v_2.set_workflow(workflowStep);
    $v_2.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_2.set_stepStepId($v_0);
    var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getEmptyControl(workflowStep);
    $v_3.set_workflow(workflowStep);
    $v_3.set_parent($v_2);
    $v_3.set_parameters(parameters);
    $v_3.set_dataFieldName(dataFieldName);
    if (!isNullOrEmptyString(classId)) {
        $v_3.set_classId(classId);
        $v_3.set_controlDisplayName(controlDisplayName);
        $v_3.set_isSystemControl(true);
    }
    $v_2.appendStep($v_3);
    return $v_2;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (330,3)
ProcessControl.Configuration.ProcessConfigurationUtility.generateSystemStep = function ProcessControl_Configuration_ProcessConfigurationUtility$generateSystemStep(stepType, workflowStep, entityMetadata, displayName) {
    switch (stepType) {
        case 'IdentifyAccount':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyAccountStep(workflowStep, entityMetadata, displayName);
        case 'IdentifyCase':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyCaseStep(workflowStep, entityMetadata, displayName);
        case 'IdentifyContact':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyContactStep(workflowStep, entityMetadata, displayName);
        case 'IdentifyCustomer':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyCustomerStep(workflowStep, entityMetadata, displayName);
        case 'Resolve':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getResolveStep(workflowStep, entityMetadata, displayName);
        case 'Solution':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getSolutionStep(workflowStep, entityMetadata, displayName);
        default:
            return null;
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (358,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyContactStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getIdentifyContactStep(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74220}</InlineViewIds></parameters>', 'parentcontactid', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (370,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyAccountStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getIdentifyAccountStep(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{f9e54d49-0c76-4cbd-979b-5fe94b496be0}</InlineViewIds></parameters>', 'parentaccountid', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (382,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyCustomerStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getIdentifyCustomerStep(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Contact</EntityLogicalName><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74228},{f9e54d49-0c76-4cbd-979b-5fe94b496beb}</InlineViewIds></parameters>', 'customerid', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (394,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyCaseStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getIdentifyCaseStep(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Incident</EntityLogicalName><InlineViewIds>{06D2061B-703E-465B-B8AD-FD69C6157127}</InlineViewIds></parameters>', 'existingcase', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (406,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getSolutionStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getSolutionStep(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>', '', 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D', displayName);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (418,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getResolveStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getResolveStep(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>', '', 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D', displayName);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (429,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getControlDisplayName = function ProcessControl_Configuration_ProcessConfigurationUtility$getControlDisplayName(datafieldName, fields) {
    if (IsNull(fields)) {
        return '';
    }
    for (var $v_0 = 0; $v_0 < fields.length; $v_0++) {
        if (fields[$v_0].LogicalName === datafieldName && !IsNull(fields[$v_0].Label)) {
            return fields[$v_0].Label.Description;
        }
    }
    return '';
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (451,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getEmptyControl = function ProcessControl_Configuration_ProcessConfigurationUtility$getEmptyControl(workflowStep) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.ControlStep(workflowStep);
    $v_0.set_dataFieldName('');
    $v_0.set_classId(Mscrm.Utilities.emptyGuid());
    $v_0.set_parameters('');
    $v_0.set_isSystemControl(false);
    $v_0.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_0.set_controlId(ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid());
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (468,3)
ProcessControl.Configuration.ProcessConfigurationUtility.sanitizeId = function ProcessControl_Configuration_ProcessConfigurationUtility$sanitizeId(id) {
    return id.replace('{', '').replace('}', '');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (477,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid = function ProcessControl_Configuration_ProcessConfigurationUtility$getCleanGuid() {
    return ProcessControl.Configuration.ProcessConfigurationUtility.sanitizeId(Mscrm.Utilities.createGuid());
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (488,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser = function ProcessControl_Configuration_ProcessConfigurationUtility$getStepLabelForCurrentUser(labels, labelId) {
    for (var $v_0 = 0; $v_0 < labels.get_count(); $v_0++) {
        if (labels.get_item($v_0).get_labelId() === labelId) {
            return labels.get_item($v_0);
        }
    }
    return null;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (507,3)
ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser = function ProcessControl_Configuration_ProcessConfigurationUtility$replaceStepLabelForCurrentUser(labels, newLabelValue, labelId) {
    for (var $v_1 = 0; $v_1 < labels.get_count(); $v_1++) {
        if (labels.get_item($v_1).get_labelId() === labelId) {
            labels.get_item($v_1).set_description(newLabelValue);
            return;
        }
    }
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
    $v_0.set_labelId(labelId);
    $v_0.set_description(newLabelValue);
    $v_0.set_languageCode(parseInt(window._Process_CurrentLCID));
    labels.add($v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (535,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getCloseLoopEntityList = function ProcessControl_Configuration_ProcessConfigurationUtility$getCloseLoopEntityList(relationshipDictionary, entityList, lastEntity) {
    if (entityList.length < 2) {
        return null;
    }
    var $v_0 = [];
    for (var $v_1 = 0; $v_1 < entityList.length; $v_1++) {
        var $v_2 = entityList[$v_1];
        if ($v_2 === lastEntity) {
            continue;
        }
        var $v_3 = new ProcessControl.Configuration.EntityRelationshipMetadataWrapper();
        $v_3.EntityLogicalName = $v_2;
        $v_3.EntityLabel = ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent($v_2);
        Array.add($v_0, $v_3);
    }
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (566,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess = function ProcessControl_Configuration_ProcessConfigurationUtility$getEntitiesInProcess(steps) {
    var $v_0 = [];
    for (var $v_1 = 0; $v_1 < steps.get_steps().get_count(); $v_1++) {
        var $v_2 = (steps.get_steps().get_item($v_1));
        if ($v_2.get_description() !== 'DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B') {
            Array.add($v_0, $v_2.get_entityLogicalName());
        }
    }
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (586,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getFirstDoNotPersistEntityStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getFirstDoNotPersistEntityStep(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(workflowStep);
    return ($v_0 < 5) ? workflowStep.get_steps().get_item($v_0) : null;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (598,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getLastValidEntityStep(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(workflowStep);
    return ($v_0 <= 5) ? workflowStep.get_steps().get_item($v_0 - 1) : null;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (611,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidProcessControlEntityView = function ProcessControl_Configuration_ProcessConfigurationUtility$getLastValidProcessControlEntityView(processControlView) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(processControlView.get_dataContext().get_workflow());
    return ($v_0 <= 5) ? processControlView.get_$4x_3()[$v_0 - 1] : null;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (623,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getEntityBeforeLast = function ProcessControl_Configuration_ProcessConfigurationUtility$getEntityBeforeLast(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(workflowStep);
    return ($v_0 <= 5) ? workflowStep.get_steps().get_item($v_0 - 2) : null;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (635,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep = function ProcessControl_Configuration_ProcessConfigurationUtility$getIndexOfFirstDoNotPersistEntityStep(workflowStep) {
    for (var $v_0 = 0; $v_0 < workflowStep.get_steps().get_count(); $v_0++) {
        var $v_1 = workflowStep.get_steps().get_item($v_0);
        if ($v_1.get_description() === 'DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B') {
            return $v_0;
        }
    }
    return 5;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (654,3)
ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly = function ProcessControl_Configuration_ProcessConfigurationUtility$setStatusBasedOnReadOnly(view) {
    if (Mscrm.Utilities.parseBoolean(window._Process_IsReadOnly)) {
        view.set_disabled(true);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (666,3)
ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly = function ProcessControl_Configuration_ProcessConfigurationUtility$isProcessReadonly() {
    return Mscrm.Utilities.parseBoolean(window._Process_IsReadOnly);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessConfigurationUtility.cs (671,3)
ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepControlId = function ProcessControl_Configuration_ProcessConfigurationUtility$getSystemStepControlId(controlStep) {
    switch (controlStep.get_parameters()) {
        case '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74220}</InlineViewIds></parameters>':
            return 'parentcontactid';
        case '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{f9e54d49-0c76-4cbd-979b-5fe94b496be0}</InlineViewIds></parameters>':
            return 'parentaccountid';
        case '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Contact</EntityLogicalName><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74228},{f9e54d49-0c76-4cbd-979b-5fe94b496beb}</InlineViewIds></parameters>':
            return 'customer';
        case '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Incident</EntityLogicalName><InlineViewIds>{06D2061B-703E-465B-B8AD-FD69C6157127}</InlineViewIds></parameters>':
            return 'relatedcases';
        case '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>':
            return 'CaseResearch_LinkControl';
        case '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>':
            return 'IncidentResolution_LinkControl';
        default:
            return controlStep.get_dataFieldName();
    }
}


ProcessControl.Configuration.ProcessSaveEventArgs = function ProcessControl_Configuration_ProcessSaveEventArgs(status, statusReason, serverException) {
    this.$24_0 = status;
    this.$25_0 = statusReason;
    this.$23_0 = serverException;
}
ProcessControl.Configuration.ProcessSaveEventArgs.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessControlSaveEventArgs.cs (28,4)
    get_status: function ProcessControl_Configuration_ProcessSaveEventArgs$get_status() {
        return this.$24_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessControlSaveEventArgs.cs (36,4)
    get_statusReason: function ProcessControl_Configuration_ProcessSaveEventArgs$get_statusReason() {
        return this.$25_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\ProcessControlSaveEventArgs.cs (45,4)
    get_serverException: function ProcessControl_Configuration_ProcessSaveEventArgs$get_serverException() {
        return this.$23_0;
    },
    
    $24_0: 0,
    $25_0: 0,
    $23_0: null
}


ProcessControl.Configuration.ProcessSaveStatus = function ProcessControl_Configuration_ProcessSaveStatus() {
}


ProcessControl.Configuration.SuccessStatusReason = function ProcessControl_Configuration_SuccessStatusReason() {
}


ProcessControl.Configuration.FailureStatusReason = function ProcessControl_Configuration_FailureStatusReason() {
}


ProcessControl.Configuration.StageCategory = function ProcessControl_Configuration_StageCategory() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\StageCategory.cs (22,3)
ProcessControl.Configuration.StageCategory.initialize = function ProcessControl_Configuration_StageCategory$initialize(stageCategories) {
    ProcessControl.Configuration.StageCategory.$W = stageCategories;
    var $v_0 = new Mscrm.EnumOptionJsonWrapper();
    $v_0.Value = -1;
    $v_0.Label = '';
    Array.insert(ProcessControl.Configuration.StageCategory.$W, 0, $v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\StageCategory.cs (36,3)
ProcessControl.Configuration.StageCategory.getStageCategories = function ProcessControl_Configuration_StageCategory$getStageCategories() {
    return ProcessControl.Configuration.StageCategory.$W;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\StageCategory.cs (46,3)
ProcessControl.Configuration.StageCategory.getLabelByValue = function ProcessControl_Configuration_StageCategory$getLabelByValue(value) {
    if (IsNull(ProcessControl.Configuration.StageCategory.$W)) {
        return '';
    }
    for (var $v_0 = 0; $v_0 < ProcessControl.Configuration.StageCategory.$W.length; $v_0++) {
        if (ProcessControl.Configuration.StageCategory.$W[$v_0].Value.toString() === value) {
            return ProcessControl.Configuration.StageCategory.$W[$v_0].Label;
        }
    }
    return '';
}


ProcessControl.Configuration.EmptyView = function ProcessControl_Configuration_EmptyView() {
}
ProcessControl.Configuration.EmptyView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (17,3)
    renderView: function ProcessControl_Configuration_EmptyView$renderView() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (26,4)
    get_dataContext: function ProcessControl_Configuration_EmptyView$get_dataContext() {
        return new ProcessControl.Configuration.EmptyViewModel();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (27,4)
    set_dataContext: function ProcessControl_Configuration_EmptyView$set_dataContext(value) {
        return value;
    },
    
    $X_0: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (36,4)
    get_entityMetadata: function ProcessControl_Configuration_EmptyView$get_entityMetadata() {
        return this.$X_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (37,4)
    set_entityMetadata: function ProcessControl_Configuration_EmptyView$set_entityMetadata(value) {
        this.$X_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (43,3)
    validate: function ProcessControl_Configuration_EmptyView$validate() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (53,4)
    get_validationResult: function ProcessControl_Configuration_EmptyView$get_validationResult() {
        return new Mscrm.ValidationResult(true, null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (59,4)
    get_elementWrapper: function ProcessControl_Configuration_EmptyView$get_elementWrapper() {
        return null;
    }
}


ProcessControl.Configuration.EmptyJsonWrapper = function ProcessControl_Configuration_EmptyJsonWrapper() {
}


ProcessControl.Configuration.EmptyViewModel = function ProcessControl_Configuration_EmptyViewModel() {
}
ProcessControl.Configuration.EmptyViewModel.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\EmptyView.cs (76,3)
    dispose: function ProcessControl_Configuration_EmptyViewModel$dispose() {
    }
}


ProcessControl.Configuration.ProcessControlEntityView = function ProcessControl_Configuration_ProcessControlEntityView(element) {
    this.$$d_$4R_5 = Function.createDelegate(this, this.$4R_5);
    ProcessControl.Configuration.ProcessControlEntityView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlEntityView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (30,4)
    get_dataContext: function ProcessControl_Configuration_ProcessControlEntityView$get_dataContext() {
        return ProcessControl.Configuration.ProcessControlViewBase.prototype.get_dataContext.call(this);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (31,4)
    set_dataContext: function ProcessControl_Configuration_ProcessControlEntityView$set_dataContext(value) {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.set_dataContext.call(this, value);
        var $v_0 = value.get_steps();
        var $v_1 = $v_0.get_count();
        var $v_2 = $P_CRM('#' + String.format('{0}_sl', this.get_elementWrapper().get(0).id));
        var $v_3 = $v_2.children('*');
        var $v_4 = this.get_$4x_3();
        var $v_5 = ProcessControl.Configuration.ProcessControlStageView;
        for (var $v_6 = 0; $v_6 < $v_1; $v_6++) {
            var $v_7 = {};
            $v_7['dataContext'] = $v_0.get_item($v_6);
            $v_7['parentView'] = this;
            var $v_8 = Mscrm.CrmUIComponent.crmCreate($v_5, $v_7, null, null, $v_3[$v_6]);
            $v_8.set_entityMetadata(this.get_entityMetadata());
            Array.add($v_4, $v_8);
        }
        $v_0.add_stepCollectionChanged(this.$$d_$4R_5);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (70,3)
    setEntityMetadata: function ProcessControl_Configuration_ProcessControlEntityView$setEntityMetadata(entityMetadata) {
        this.set_entityMetadata(entityMetadata);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (80,4)
    get_relationshipMetadata: function ProcessControl_Configuration_ProcessControlEntityView$get_relationshipMetadata() {
        return this.$E_5;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (81,4)
    set_relationshipMetadata: function ProcessControl_Configuration_ProcessControlEntityView$set_relationshipMetadata(value) {
        this.$E_5 = value;
        return value;
    },
    
    $E_5: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (89,3)
    renderView: function ProcessControl_Configuration_ProcessControlEntityView$renderView() {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.renderView.call(this);
        var $v_0 = {};
        $v_0['entityView'] = this;
        this.$15_5 = $create(ProcessControl.Configuration.AddStageBehavior, $v_0, null, null, $get(String.format('{0}_add{1}', this.get_id(), 'stage')));
        this.$h_5 = $create(ProcessControl.Configuration.AddStepBehavior, $v_0, null, null, $get(String.format('{0}_add{1}', this.get_id(), 'step')));
        var $$t_2 = this;
        $P_CRM('.pc_en_slc', this.get_element()).scroll(function($p1_0) {
            window.clearTimeout($$t_2.$22_5);
            $$t_2.$22_5 = window.setTimeout(function() {
                if (Sys.Browser.agent === Sys.Browser.Firefox) {
                    return;
                }
                $P_CRM('.ui-autocomplete:visible').hide();
            }, 10);
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (116,3)
    configureControlStepMenu: function ProcessControl_Configuration_ProcessControlEntityView$configureControlStepMenu() {
        if (!IsNull(this.$h_5)) {
            this.$h_5.configureMenu();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (122,3)
    setFocus: function ProcessControl_Configuration_ProcessControlEntityView$setFocus() {
        if (this.get_$4x_3().length > 0) {
            (this.get_$4x_3()[0]).setFocus(false);
        }
        else {
            $P_CRM('#' + String.format('{0}_add{1}', this.get_id(), 'step')).children(':first-child').focus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (140,3)
    $1t_5: function ProcessControl_Configuration_ProcessControlEntityView$$1t_5($p0) {
        if (confirm(window.LOCID_PROCESS_CONFIRMDELETESTAGE)) {
            var $v_0 = ($P_CRM($p0.target)).closest('li').attr('id');
            var $v_1 = $find($v_0);
            var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps(this.get_dataContext());
            var $v_3 = this.get_parent();
            $v_1.$1_5.get_dataContext().remove($v_1.get_dataContext());
            if ($v_2) {
                ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls($v_3);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (164,3)
    $4R_5: function ProcessControl_Configuration_ProcessControlEntityView$$4R_5($p0, $p1) {
        var $v_0 = $p1;
        switch ($v_0.get_action()) {
            case 0:
                this.$31_5($v_0);
                break;
            case 1:
                this.$3G_5($v_0);
                break;
            case 2:
                var $v_1 = $p1;
                this.move($v_1);
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (186,3)
    $31_5: function ProcessControl_Configuration_ProcessControlEntityView$$31_5($p0) {
        var $v_0 = this.addChildView($p0.get_newItems());
        $v_0.setFocus(true);
        this.executePostAddSteps();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (197,3)
    $3G_5: function ProcessControl_Configuration_ProcessControlEntityView$$3G_5($p0) {
        if ($p0.get_oldStartingIndex() < 0) {
            return;
        }
        this.removeChildView($p0.get_oldStartingIndex());
        this.executePostRemoveSteps($p0.get_oldStartingIndex());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (211,3)
    move: function ProcessControl_Configuration_ProcessControlEntityView$move(args) {
        ProcessControl.Configuration.ProcessControlExtensibleView.prototype.move.call(this, args);
        this.$1p_5([ args.get_oldStartingIndex(), args.get_newStartingIndex() ]);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (222,4)
    get_uiBuilder: function ProcessControl_Configuration_ProcessControlEntityView$get_uiBuilder() {
        return new ProcessControl.Configuration.StageBuilder();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (230,4)
    get_childViewContainer: function ProcessControl_Configuration_ProcessControlEntityView$get_childViewContainer() {
        return $P_CRM('#' + String.format('{0}_sl', this.get_id()));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (233,3)
    executePostAddSteps: function ProcessControl_Configuration_ProcessControlEntityView$executePostAddSteps() {
        ProcessControl.Configuration.ProcessControlExtensibleView.prototype.executePostAddSteps.call(this);
        var $v_0 = this.get_$4x_3().length - 1;
        this.$1p_5([ $v_0 - 1, $v_0, $v_0 + 1 ]);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (244,3)
    executePostRemoveSteps: function ProcessControl_Configuration_ProcessControlEntityView$executePostRemoveSteps(index) {
        if (index < 0) {
            throw Error.create('Invalid Index');
        }
        ProcessControl.Configuration.ProcessControlExtensibleView.prototype.executePostRemoveSteps.call(this, index);
        this.$1p_5([ index - 1, index ]);
        var $v_0 = this.findBestChildViewForFocus(index);
        if (IsNull($v_0)) {
            return;
        }
        $v_0.setFocus(false);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (266,3)
    $1p_5: function ProcessControl_Configuration_ProcessControlEntityView$$1p_5($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = this.get_$4x_3()[$p0[$v_0]];
            if (IsNull($v_1)) {
                continue;
            }
            if (this.get_$4x_3().length > $p0[$v_0] + 1) {
                $v_1.get_$I_5().children(':nth-child(2)').css('display', 'block');
            }
            else {
                $v_1.get_$I_5().children(':nth-child(2)').css('display', 'none');
            }
            if ($p0[$v_0] > 0) {
                $v_1.get_$I_5().children(':first-child').css('display', 'block');
            }
            else {
                $v_1.get_$I_5().children(':first-child').css('display', 'none');
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlEntityView.cs (301,3)
    dispose: function ProcessControl_Configuration_ProcessControlEntityView$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.get_dataContext()) || !IsNull(this.get_dataContext().get_steps())) {
            this.get_dataContext().get_steps().remove_stepCollectionChanged(this.$$d_$4R_5);
        }
        if (!IsNull(this.$15_5)) {
            this.$15_5.dispose();
            this.$15_5 = null;
        }
        if (!IsNull(this.$h_5)) {
            this.$h_5.dispose();
            this.$h_5 = null;
        }
        ProcessControl.Configuration.ProcessControlViewBase.prototype.dispose.call(this);
    },
    
    $15_5: null,
    $h_5: null,
    $22_5: 0
}


ProcessControl.Configuration.ProcessControlExtensibleView = function ProcessControl_Configuration_ProcessControlExtensibleView(element) {
    ProcessControl.Configuration.ProcessControlExtensibleView.$$(this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView']['TChildView'], this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView']['TChildViewModel']).initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlExtensibleView.$$ = function ProcessControl_Configuration_ProcessControlExtensibleView$$$(TChildView, TChildViewModel) {
    var $$cn = 'ProcessControlExtensibleView' + '$2' + '$' + TChildView.getName().replace(/\./g, '_') + '$' + TChildViewModel.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.ProcessControlExtensibleView'] = {'TChildView': TChildView, 'TChildViewModel': TChildViewModel};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.ProcessControlExtensibleView.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn, ProcessControl.Configuration.ProcessControlViewBase.$$(TChildViewModel, TChildView), ProcessControl.Configuration.IExtensibleProcessControlView.$$(TChildView, TChildViewModel));
        var $$dict_6 = ProcessControl.Configuration.ProcessControlExtensibleView.prototype;
        for (var $$key_7 in $$dict_6) {
            var $$entry_8 = { key: $$key_7, value: $$dict_6[$$key_7] };
            if ('constructor' !== $$entry_8.key) {
                $$ccr.prototype[$$entry_8.key] = $$entry_8.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.ProcessControlExtensibleView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (42,3)
    addChildView: function ProcessControl_Configuration_ProcessControlExtensibleView$addChildView(viewModel) {
        var $v_0 = this.buildDomForNewView(viewModel);
        var $v_1 = this.createNewViewControl(viewModel, $v_0);
        $v_1.set_entityMetadata(this.get_entityMetadata());
        Array.insert(this.get_$4x_3(), this.get_$4x_3().length, $v_1);
        $v_1.renderView();
        this.executePostAddSteps();
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (61,3)
    move: function ProcessControl_Configuration_ProcessControlExtensibleView$move(args) {
        var $v_0 = document.activeElement;
        var $v_1 = this.get_$4x_3()[args.get_oldStartingIndex()];
        var $v_2 = this.get_$4x_3()[args.get_newStartingIndex()];
        if (args.get_newStartingIndex() < args.get_oldStartingIndex()) {
            $v_1.get_elementWrapper().insertBefore($v_2.get_elementWrapper());
        }
        else {
            $v_1.get_elementWrapper().insertAfter($v_2.get_elementWrapper());
        }
        Array.removeAt(this.get_$4x_3(), args.get_oldStartingIndex());
        Array.insert(this.get_$4x_3(), args.get_newStartingIndex(), $v_1);
        $v_0.focus();
        if (Mscrm.CrmBrowser.get_currentBrowser().get_agent() === (1)) {
            this.$3Q_4($v_1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (87,3)
    $3Q_4: function ProcessControl_Configuration_ProcessControlExtensibleView$$3Q_4($p0) {
        $p0.get_elementWrapper().focus();
        var $v_0 = $p0.get_elementWrapper().parents('.pc_en_slc');
        var $v_1 = $p0.get_elementWrapper().offset().top;
        var $v_2 = $v_0.offset().top;
        var $v_3 = $v_0.height();
        if ($v_1 < $v_2) {
            ($v_0.get(0)).scrollTop -= ($v_2 - $v_1);
        }
        else if ($v_1 > $v_2 + $v_3) {
            ($v_0.get(0)).scrollTop += ($v_1 - $v_2 - $v_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (114,3)
    buildDomForNewView: function ProcessControl_Configuration_ProcessControlExtensibleView$buildDomForNewView(viewModel) {
        var $v_0 = this.get_uiBuilder();
        var $v_1 = $v_0.buildProcessComponent(viewModel, this.get_id());
        this.get_childViewContainer().append($v_1);
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (128,3)
    createNewViewControl: function ProcessControl_Configuration_ProcessControlExtensibleView$createNewViewControl(viewModel, newViewDom) {
        var $v_0 = {};
        $v_0['dataContext'] = viewModel;
        $v_0['parentView'] = this;
        return Mscrm.CrmUIComponent.crmCreate(this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView']['TChildView'], $v_0, null, null, newViewDom.get(0));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (151,3)
    executePostAddSteps: function ProcessControl_Configuration_ProcessControlExtensibleView$executePostAddSteps() {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (161,3)
    removeChildView: function ProcessControl_Configuration_ProcessControlExtensibleView$removeChildView(index) {
        var $v_0 = this.get_$4x_3()[index];
        Array.removeAt(this.get_$4x_3(), index);
        var $v_1 = $v_0.get_elementWrapper();
        ($v_0).dispose();
        $v_0 = ((this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView']['TChildView'] === Number || Type.isEnum(this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView']['TChildView'])) ? 0 : (this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView']['TChildView'] === Boolean) ? false : null);
        $v_1.remove();
        this.executePostRemoveSteps(index);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (178,3)
    executePostRemoveSteps: function ProcessControl_Configuration_ProcessControlExtensibleView$executePostRemoveSteps(index) {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlExtensibleView.cs (187,3)
    findBestChildViewForFocus: function ProcessControl_Configuration_ProcessControlExtensibleView$findBestChildViewForFocus(index) {
        if (!this.get_$4x_3().length) {
            return null;
        }
        if (index === this.get_$4x_3().length) {
            return this.get_$4x_3()[this.get_$4x_3().length - 1];
        }
        return this.get_$4x_3()[index];
    }
}


ProcessControl.Configuration.ProcessControlStageView = function ProcessControl_Configuration_ProcessControlStageView(element) {
    this.$$d_$4P_5 = Function.createDelegate(this, this.$4P_5);
    this.$$d_$4Q_5 = Function.createDelegate(this, this.$4Q_5);
    this.$$d_$2U_5 = Function.createDelegate(this, this.$2U_5);
    this.$$d_$3A_5 = Function.createDelegate(this, this.$3A_5);
    ProcessControl.Configuration.ProcessControlStageView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlStageView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (32,4)
    get_dataContext: function ProcessControl_Configuration_ProcessControlStageView$get_dataContext() {
        return ProcessControl.Configuration.ProcessControlViewBase.prototype.get_dataContext.call(this);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (33,4)
    set_dataContext: function ProcessControl_Configuration_ProcessControlStageView$set_dataContext(value) {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.set_dataContext.call(this, value);
        var $v_0 = value.get_steps();
        var $v_1 = $P_CRM('#' + String.format('{0}_spl', this.get_elementWrapper().get(0).id));
        var $v_2 = $v_1.children('*');
        var $v_3 = ProcessControl.Configuration.ProcessControlStepView;
        var $v_4 = this.get_$4x_3();
        for (var $v_5 = 0; $v_5 < $v_0.get_count(); $v_5++) {
            var $v_6 = {};
            $v_6['dataContext'] = $v_0.get_item($v_5);
            $v_6['parentView'] = this;
            var $v_7 = Mscrm.CrmUIComponent.crmCreate($v_3, $v_6, null, null, $v_2[$v_5]);
            $v_7.set_entityMetadata(this.get_entityMetadata());
            Array.add($v_4, $v_7);
        }
        $v_0.add_stepCollectionChanged(this.$$d_$3A_5);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (72,3)
    renderView: function ProcessControl_Configuration_ProcessControlStageView$renderView() {
        this.$29_5();
        this.$46_5();
        this.$45_5();
        ProcessControl.Configuration.ProcessControlViewBase.prototype.renderView.call(this);
        this.$1J_5();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (81,3)
    $1J_5: function ProcessControl_Configuration_ProcessControlStageView$$1J_5() {
        var $$t_3 = this;
        this.get_$6_5().bind('click', function($p1_0) {
            $$t_3.$1_5.$1t_5($p1_0);
        });
        var $$t_4 = this;
        this.get_$6_5().bind('keydown', function($p1_0) {
            switch ($p1_0.which) {
                case 13:
                case 127:
                    $$t_4.$1_5.$1t_5($p1_0);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation();
                    break;
            }
        });
        var $v_0 = $P_CRM(this.get_element()).find('.pc_steplistc');
        $v_0.bind('keydown', this.$$d_$2U_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (105,3)
    $2U_5: function ProcessControl_Configuration_ProcessControlStageView$$2U_5($p0) {
        var $v_0 = $p0.keyCode === 9;
        var $v_1 = $p0.shiftKey;
        var $v_2 = !$v_0 || $v_1;
        if ($v_2) {
            return;
        }
        var $v_3 = this.$1_5.get_dataContext().get_steps().get_count() === 1;
        if ($v_3) {
            return;
        }
        this.$4u_5($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (126,3)
    $4u_5: function ProcessControl_Configuration_ProcessControlStageView$$4u_5($p0) {
        var $v_0 = this.get_dataContext().get_steps().get_count() === 1;
        var $v_1 = $P_CRM($p0.target);
        var $v_2 = $P_CRM(this.get_element()).find('.pc_steplistc');
        var $v_3 = $v_1.is($v_2.find('.pc_step_d_img').last());
        var $v_4 = $v_1.is($v_2.find('.pc_step_req.prc_step_rc').last().find('img'));
        var $v_5 = $v_0 && $v_4;
        var $v_6 = !$v_0 && $v_3;
        if ($v_5 || $v_6) {
            (this.get_$6_5()).addClass('pc_stg_del_sel');
            this.get_$6_5().find('img').focus();
            $p0.preventDefault();
            $p0.stopPropagation();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (153,3)
    validate: function ProcessControl_Configuration_ProcessControlStageView$validate() {
        var $v_0 = this.$F_5.get_isValid();
        if (!$v_0) {
            this.set_validationResult(new Mscrm.ValidationResult(false, this.$F_5.get_validateResult().errorText));
            return;
        }
        ProcessControl.Configuration.ProcessControlViewBase.prototype.validate.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (186,3)
    $29_5: function ProcessControl_Configuration_ProcessControlStageView$$29_5() {
        var $v_0 = {};
        $v_0['view'] = this;
        var $v_1 = (Sys.Browser.agent === Sys.Browser.InternetExplorer) ? ProcessControl.Configuration.StageFocusEventBubbleBehavior : ProcessControl.Configuration.StageFocusEventCapturingBehavior;
        this.$N_5 = $create($v_1, $v_0, null, null, this.get_elementWrapper().get(0));
        this.$k_5 = $create(ProcessControl.Configuration.StageHoverBehavior, $v_0, null, null, this.get_elementWrapper().get(0));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (202,3)
    setFocus: function ProcessControl_Configuration_ProcessControlStageView$setFocus(selectStageName) {
        if (selectStageName) {
            this.$F_5.get_valueElement().focus();
            var $$t_1 = this;
            window.setTimeout(function() {
                $$t_1.$F_5.get_valueElement().click();
                $$t_1.$F_5.get_editView().get_editElement().select();
            }, 10);
        }
        else {
            this.get_elementWrapper().focus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (223,3)
    $46_5: function ProcessControl_Configuration_ProcessControlStageView$$46_5() {
        var $v_0 = String.format('{0}_name', this.get_elementWrapper().get(0).id);
        var $v_1 = $P_CRM('#' + $v_0);
        var $v_2 = {};
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), this.get_dataContext().get_stageId());
        $v_2['value'] = CrmEncodeDecode.CrmHtmlEncode(CrmEncodeDecode.CrmHtmlEncode($v_3.get_description()));
        this.$F_5 = Mscrm.InlineControlFactory.createInlineTextBoxControlForDom($v_1, $v_0, 100, $v_2, 'pcc', Mscrm.InlineEditControlMode.normal);
        this.$F_5.get_dataContext().set_emptyValuePlaceholder(window.LOCID_PROCESS_NEWSTAGETEXTKEY);
        this.$F_5.initializeAndRenderEditView();
        this.$2G_5($v_3.get_description(), this.$F_5);
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$F_5);
        this.$F_5.get_chromeElement().bind(Mscrm.EditEvents.attributeChanged, this.$$d_$4Q_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (240,3)
    $45_5: function ProcessControl_Configuration_ProcessControlStageView$$45_5() {
        var $v_0 = String.format('{0}_category', this.get_elementWrapper().get(0).id);
        var $v_1 = $P_CRM('#' + $v_0);
        var $v_2 = ProcessControl.Configuration.StageCategory.getStageCategories();
        var $v_3 = this.$3i_5();
        this.$l_5 = Mscrm.InlineControlFactory.createInlinePicklistControlForDomByControlMode($v_1, $v_0, ProcessControl.Configuration.StageCategory.getStageCategories(), '', Mscrm.InlineEditControlMode.normal, $v_3);
        this.$l_5.initializeAndRenderEditView();
        this.$2G_5(ProcessControl.Configuration.StageCategory.getLabelByValue(this.$l_5.get_dataContext().get_editValue()), this.$l_5);
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$l_5);
        this.$l_5.get_chromeElement().bind(Mscrm.EditEvents.attributeChanged, this.$$d_$4P_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (260,3)
    $3i_5: function ProcessControl_Configuration_ProcessControlStageView$$3i_5() {
        var $v_0 = '';
        if (isNullOrEmptyString(this.get_dataContext().get_stageCategory())) {
            $v_0 = '-1';
        }
        else {
            $v_0 = this.get_dataContext().get_stageCategory().toString();
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (280,3)
    $2G_5: function ProcessControl_Configuration_ProcessControlStageView$$2G_5($p0, $p1) {
        if (isNullOrEmptyString($p0)) {
            $p0 = $p1.get_dataContext().get_emptyValuePlaceholder();
        }
        var $v_0 = $p1.get_valueElement();
        if ($p1.get_valueElement().text() === $p0) {
            return;
        }
        $v_0.text($p0);
        ($p1.get_layout()).updateTooltip($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (303,3)
    $4Q_5: function ProcessControl_Configuration_ProcessControlStageView$$4Q_5($p0) {
        if (arguments.length > 1) {
            var $v_0 = arguments[1];
            if (isNullOrEmptyString($v_0)) {
                this.$F_5.get_dataContext().get_attribute().set_rawValue(window.LOCID_PROCESS_NEWSTAGETEXTKEY);
                return;
            }
            this.get_dataContext().set_stageName($v_0);
            ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), $v_0, this.get_dataContext().get_stageId());
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (323,3)
    $4P_5: function ProcessControl_Configuration_ProcessControlStageView$$4P_5($p0) {
        if (arguments.length > 1) {
            var $v_0 = arguments[1];
            if (isNullOrEmptyString($v_0)) {
                this.get_dataContext().set_stageCategory('-1');
                return;
            }
            this.get_dataContext().set_stageCategory($v_0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (344,3)
    $1u_5: function ProcessControl_Configuration_ProcessControlStageView$$1u_5($p0) {
        ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
        var $v_0 = ($P_CRM($p0.target)).closest('li').attr('id');
        var $v_1 = $find($v_0);
        var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.isLinkControl($v_1.get_dataContext());
        var $v_3 = $v_1.$1_4.$1_5.get_parent();
        $v_1.$1_4.get_dataContext().remove($v_1.get_dataContext());
        if ($v_2) {
            ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls($v_3);
        }
        $p0.stopPropagation();
        $p0.preventDefault();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (368,3)
    $3A_5: function ProcessControl_Configuration_ProcessControlStageView$$3A_5($p0, $p1) {
        var $v_0 = $p1;
        switch ($v_0.get_action()) {
            case 0:
                this.$32_5($v_0);
                break;
            case 1:
                this.$3H_5($v_0);
                break;
            case 2:
                var $v_1 = $p1;
                this.move($v_1);
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (391,3)
    $32_5: function ProcessControl_Configuration_ProcessControlStageView$$32_5($p0) {
        var $v_0 = this.addChildView($p0.get_newItems());
        $v_0.setFocus(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (401,3)
    $3H_5: function ProcessControl_Configuration_ProcessControlStageView$$3H_5($p0) {
        this.removeChildView($p0.get_oldStartingIndex());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (411,4)
    get_uiBuilder: function ProcessControl_Configuration_ProcessControlStageView$get_uiBuilder() {
        return new ProcessControl.Configuration.StepBuilder();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (419,4)
    get_childViewContainer: function ProcessControl_Configuration_ProcessControlStageView$get_childViewContainer() {
        return $P_CRM('#' + String.format('{0}_spl', this.get_id()));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (426,3)
    executePostRemoveSteps: function ProcessControl_Configuration_ProcessControlStageView$executePostRemoveSteps(index) {
        ProcessControl.Configuration.ProcessControlExtensibleView.prototype.executePostRemoveSteps.call(this, index);
        var $v_0 = this.findBestChildViewForFocus(index);
        if (IsNull($v_0)) {
            return;
        }
        $v_0.setFocus(false);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (448,4)
    get_parentView: function ProcessControl_Configuration_ProcessControlStageView$get_parentView() {
        return this.$1_5;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (449,4)
    set_parentView: function ProcessControl_Configuration_ProcessControlStageView$set_parentView(value) {
        this.$1_5 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (457,4)
    get_$c_5: function ProcessControl_Configuration_ProcessControlStageView$get_$c_5() {
        if (IsNull(this.$1j_5)) {
            this.$1j_5 = this.get_elementWrapper().children(':first-child').children(':nth-child(2)');
        }
        return this.$1j_5;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (472,4)
    get_$I_5: function ProcessControl_Configuration_ProcessControlStageView$get_$I_5() {
        if (IsNull(this.$1S_5)) {
            this.$1S_5 = this.get_elementWrapper().children(':first-child').children(':first-child').children(':first-child');
        }
        return this.$1S_5;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (487,4)
    get_$6_5: function ProcessControl_Configuration_ProcessControlStageView$get_$6_5() {
        if (IsNull(this.$i_5)) {
            this.$i_5 = this.get_elementWrapper().children(':first-child').children(':nth-child(3)').children(':first-child');
        }
        return this.$i_5;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (499,3)
    dispose: function ProcessControl_Configuration_ProcessControlStageView$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.get_dataContext()) || !IsNull(this.get_dataContext().get_steps())) {
            this.get_dataContext().get_steps().remove_stepCollectionChanged(this.$$d_$3A_5);
        }
        this.$2u_5();
        this.$N_5.dispose();
        this.$k_5.dispose();
        this.$N_5 = null;
        this.$k_5 = null;
        ProcessControl.Configuration.ProcessControlViewBase.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStageView.cs (518,3)
    $2u_5: function ProcessControl_Configuration_ProcessControlStageView$$2u_5() {
        this.get_$6_5().unbind('click');
        this.get_$6_5().unbind('keydown');
        $P_CRM(this.get_element()).find('.pc_steplistc').unbind('keydown');
        if (!IsNull(this.$F_5) && !this.$F_5.get_isDisposed()) {
            this.$F_5.get_chromeElement().unbind(Mscrm.EditEvents.attributeChanged, this.$$d_$4Q_5);
        }
    },
    
    $F_5: null,
    $l_5: null,
    $1j_5: null,
    $1S_5: null,
    $i_5: null,
    $1_5: null,
    $N_5: null,
    $k_5: null
}


ProcessControl.Configuration.ProcessControlStepView = function ProcessControl_Configuration_ProcessControlStepView(element) {
    this.$$d_$4S_4 = Function.createDelegate(this, this.$4S_4);
    ProcessControl.Configuration.ProcessControlStepView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlStepView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (32,4)
    get_dataContext: function ProcessControl_Configuration_ProcessControlStepView$get_dataContext() {
        return ProcessControl.Configuration.ProcessControlViewBase.prototype.get_dataContext.call(this);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (33,4)
    set_dataContext: function ProcessControl_Configuration_ProcessControlStepView$set_dataContext(value) {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.set_dataContext.call(this, value);
        var $v_0 = ProcessControl.Configuration.ProcessControlViewBase.prototype.get_dataContext.call(this).get_steps();
        var $v_1 = String.format('{0}_f', this.get_id());
        var $v_2 = $P_CRM('#' + $v_1);
        var $v_3 = this.get_$4x_3();
        for (var $v_4 = 0; $v_4 < $v_0.get_count(); $v_4++) {
            var $v_5 = $v_0.get_item($v_4);
            var $v_6 = {};
            $v_6['dataContext'] = $v_5;
            $v_6['parentView'] = this;
            Array.add($v_3, Mscrm.CrmUIComponent.crmCreate(ProcessControl.Configuration.StepFieldControlView, $v_6, null, null, $v_2[0]));
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (57,3)
    renderView: function ProcessControl_Configuration_ProcessControlStepView$renderView() {
        this.$29_4();
        this.$47_4();
        this.$44_4();
        ProcessControl.Configuration.ProcessControlViewBase.prototype.renderView.call(this);
        this.$1J_4();
        this.$3M_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (67,3)
    $1J_4: function ProcessControl_Configuration_ProcessControlStepView$$1J_4() {
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            return;
        }
        var $$t_4 = this;
        this.get_$6_4().bind('click', function($p1_0) {
            $$t_4.$1_4.$1u_5($p1_0);
        });
        var $$t_5 = this;
        this.get_$6_4().bind('keydown', function($p1_0) {
            switch ($p1_0.which) {
                case 13:
                    $$t_5.$1_4.$1u_5($p1_0);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation();
                    break;
            }
        });
        var $$t_6 = this;
        this.get_$S_4().bind('click', function($p1_0) {
            $$t_6.$1s_4($p1_0);
        });
        var $$t_7 = this;
        this.get_$S_4().bind('keydown', function($p1_0) {
            switch ($p1_0.which) {
                case 13:
                case 32:
                    $$t_7.$1s_4($p1_0);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation();
                    break;
            }
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (111,3)
    $3M_4: function ProcessControl_Configuration_ProcessControlStepView$$3M_4() {
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            return;
        }
        this.get_elementWrapper().addClass('pc_highContrast');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (125,3)
    validate: function ProcessControl_Configuration_ProcessControlStepView$validate() {
        var $v_0 = this.$A_4.get_isValid();
        if (!$v_0) {
            this.set_validationResult(new Mscrm.ValidationResult(false, this.$A_4.get_validateResult().errorText));
            return;
        }
        ProcessControl.Configuration.ProcessControlViewBase.prototype.validate.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (158,3)
    $29_4: function ProcessControl_Configuration_ProcessControlStepView$$29_4() {
        var $v_0 = {};
        $v_0['view'] = this;
        var $v_1 = (Sys.Browser.agent === Sys.Browser.InternetExplorer) ? ProcessControl.Configuration.StepFocusEventBubbleBehavior : ProcessControl.Configuration.StepFocusEventCapturingBehavior;
        this.$N_4 = $create($v_1, $v_0, null, null, this.get_elementWrapper().get(0));
        this.$k_4 = $create(ProcessControl.Configuration.StepHoverBehavior, $v_0, null, null, this.get_elementWrapper().get(0));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (175,3)
    setFocus: function ProcessControl_Configuration_ProcessControlStepView$setFocus(selectStepName) {
        this.$A_4.get_chromeElement().focus();
        if (selectStepName) {
            var $$t_1 = this;
            window.setTimeout(function() {
                $$t_1.$A_4.get_valueElement().click();
                $$t_1.$A_4.get_editView().get_editElement().select();
            }, 10);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (194,3)
    $47_4: function ProcessControl_Configuration_ProcessControlStepView$$47_4() {
        var $v_0 = String.format('{0}_n', this.get_elementWrapper().get(0).id);
        var $v_1 = $P_CRM('#' + $v_0);
        var $v_2 = {};
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), this.get_dataContext().get_stepStepId());
        $v_2['value'] = CrmEncodeDecode.CrmHtmlEncode(CrmEncodeDecode.CrmHtmlEncode($v_3.get_description()));
        this.$A_4 = Mscrm.InlineControlFactory.createInlineTextBoxControlForDom($v_1, $v_0, 100, $v_2, 'pcc', Mscrm.InlineEditControlMode.normal);
        this.$A_4.get_dataContext().set_emptyValuePlaceholder(window.LOCID_PROCESS_NEWSTEPTEXTKEY);
        this.$A_4.initializeAndRenderEditView();
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$A_4);
        this.$2H_4($v_3.get_description());
        this.$A_4.get_chromeElement().bind(Mscrm.EditEvents.attributeChanged, this.$$d_$4S_4);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (214,3)
    $44_4: function ProcessControl_Configuration_ProcessControlStepView$$44_4() {
        if (this.get_dataContext().get_isProcessRequired()) {
            this.$2h_4();
        }
        else {
            this.$2i_4();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (230,3)
    $1s_4: function ProcessControl_Configuration_ProcessControlStepView$$1s_4($p0) {
        var $v_0 = ($P_CRM($p0.target)).closest('li').attr('id');
        var $v_1 = $find($v_0);
        var $v_2 = this.get_$S_4().children('img');
        if (IsNull($v_2.attr('required'))) {
            $v_1.get_dataContext().set_isProcessRequired(true);
            this.$2h_4();
        }
        else {
            $v_1.get_dataContext().set_isProcessRequired(false);
            this.$2i_4();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (253,4)
    get_$S_4: function ProcessControl_Configuration_ProcessControlStepView$get_$S_4() {
        if (IsNull(this.$1i_4)) {
            this.$1i_4 = this.get_elementWrapper().children(':nth-child(2)').children(':first-child');
        }
        return this.$1i_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (263,3)
    $2h_4: function ProcessControl_Configuration_ProcessControlStepView$$2h_4() {
        this.get_$S_4().children('img').attr('src', this.get_$2D_4().source);
        this.get_$S_4().children('img').attr('class', this.get_$2D_4().cssClass);
        this.get_$S_4().children('img').attr('required', 'required');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (270,3)
    $2i_4: function ProcessControl_Configuration_ProcessControlStepView$$2i_4() {
        this.get_$S_4().children('img').attr('src', this.get_$2w_4().source);
        this.get_$S_4().children('img').attr('class', this.get_$2w_4().cssClass);
        this.get_$S_4().children('img').removeAttr('required');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (282,4)
    get_$2D_4: function ProcessControl_Configuration_ProcessControlStepView$get_$2D_4() {
        if (IsNull(this.$1U_4)) {
            this.$1U_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/12_checkbox_on.png'));
        }
        return this.$1U_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (297,4)
    get_$2w_4: function ProcessControl_Configuration_ProcessControlStepView$get_$2w_4() {
        if (IsNull(this.$1l_4)) {
            this.$1l_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/processcontrol/12_checkbox_off.png'));
        }
        return this.$1l_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (313,3)
    $2H_4: function ProcessControl_Configuration_ProcessControlStepView$$2H_4($p0) {
        var $v_0 = this.$A_4.get_valueElement();
        if (this.$A_4.get_valueElement().text() === $p0) {
            return;
        }
        $v_0.text($p0);
        (this.$A_4.get_layout()).updateTooltip($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (330,3)
    $4S_4: function ProcessControl_Configuration_ProcessControlStepView$$4S_4($p0) {
        if (arguments.length < 2) {
            return;
        }
        var $v_0 = arguments[1];
        if (isNullOrEmptyString($v_0)) {
            this.$A_4.get_dataContext().get_attribute().set_rawValue(window.LOCID_PROCESS_NEWSTEPTEXTKEY);
            return;
        }
        var $v_1 = arguments[1];
        ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), $v_1, this.get_dataContext().get_stepStepId());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (353,4)
    get_parentView: function ProcessControl_Configuration_ProcessControlStepView$get_parentView() {
        return this.$1_4;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (354,4)
    set_parentView: function ProcessControl_Configuration_ProcessControlStepView$set_parentView(value) {
        this.$1_4 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (362,4)
    get_$d_4: function ProcessControl_Configuration_ProcessControlStepView$get_$d_4() {
        if (IsNull(this.$1k_4)) {
            this.$1k_4 = this.get_elementWrapper().children(':first-child');
        }
        return this.$1k_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (377,4)
    get_$a_4: function ProcessControl_Configuration_ProcessControlStepView$get_$a_4() {
        if (IsNull(this.$1T_4)) {
            this.$1T_4 = this.get_elementWrapper().children(':nth-child(2)');
        }
        return this.$1T_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (392,4)
    get_$6_4: function ProcessControl_Configuration_ProcessControlStepView$get_$6_4() {
        if (IsNull(this.$i_4)) {
            this.$i_4 = this.get_elementWrapper().children(':last-child').children(':first-child');
        }
        return this.$i_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (406,3)
    $4n_4: function ProcessControl_Configuration_ProcessControlStepView$$4n_4($p0) {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), this.get_dataContext().get_stepStepId()).get_description();
        if ($v_0 === window.LOCID_PROCESS_NEWSTEPTEXTKEY) {
            ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), $p0, this.get_dataContext().get_stepStepId());
            this.$2H_4($p0);
            var $v_1 = this.$A_4.get_valueElement();
            var $v_2 = this.$A_4.get_editView().get_editElement();
            $v_1.val($p0);
            $v_2.val($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (427,3)
    dispose: function ProcessControl_Configuration_ProcessControlStepView$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$2u_4();
        this.$N_4.dispose();
        this.$k_4.dispose();
        this.$N_4 = null;
        this.$k_4 = null;
        ProcessControl.Configuration.ProcessControlViewBase.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlStepView.cs (441,3)
    $2u_4: function ProcessControl_Configuration_ProcessControlStepView$$2u_4() {
        this.get_$6_4().unbind('click');
        this.get_$6_4().unbind('keydown');
        this.get_$S_4().unbind('click');
        this.get_$S_4().unbind('keydown');
        if (!this.$A_4.get_isDisposed()) {
            this.$A_4.get_chromeElement().unbind(Mscrm.EditEvents.attributeChanged, this.$$d_$4S_4);
        }
    },
    
    $A_4: null,
    $1k_4: null,
    $1T_4: null,
    $i_4: null,
    $1_4: null,
    $N_4: null,
    $k_4: null,
    $1i_4: null,
    $1U_4: null,
    $1l_4: null
}


ProcessControl.Configuration.ProcessControlView = function ProcessControl_Configuration_ProcessControlView(element, entityMetadata) {
    this.$$d_$4g_5 = Function.createDelegate(this, this.$4g_5);
    this.$$d_titleOrDescriptionChanged = Function.createDelegate(this, this.titleOrDescriptionChanged);
    this.$L_5 = -1;
    ProcessControl.Configuration.ProcessControlView.initializeBase(this, [ element ]);
    this.set_entityMetadata(entityMetadata);
    this.$2x_5();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (261,3)
ProcessControl.Configuration.ProcessControlView.$4I = function ProcessControl_Configuration_ProcessControlView$$4I() {
    var $v_0 = ProcessControl.Configuration.ProcessControlView.$1N('/_grid/cmds/dlg_delete.aspx');
    ProcessControl.Configuration.ProcessControlView.deleteProcessConfirmationCallback($v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (272,3)
ProcessControl.Configuration.ProcessControlView.deleteProcessConfirmationCallback = function ProcessControl_Configuration_ProcessControlView$deleteProcessConfirmationCallback(confirmation) {
    if (!IsNull(confirmation) && confirmation) {
        ProcessControl.Configuration.ProcessControlView.$1Q('DeleteBusinessProcess');
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (309,4)
ProcessControl.Configuration.ProcessControlView.get_$1R = function ProcessControl_Configuration_ProcessControlView$get_$1R() {
    if (IsNull(ProcessControl.Configuration.ProcessControlView.$1F)) {
        ProcessControl.Configuration.ProcessControlView.$1F = new Mscrm.ProgressControl();
    }
    return ProcessControl.Configuration.ProcessControlView.$1F;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (339,3)
ProcessControl.Configuration.ProcessControlView.$4G = function ProcessControl_Configuration_ProcessControlView$$4G() {
    var $v_0 = new Mscrm.ReturnFunctionReference();
    $v_0.content = {};
    $v_0.callback = ProcessControl.Configuration.ProcessControlView.activateProcessConfirmationCallback;
    var $v_1 = new Mscrm.CrmDialog(ProcessControl.Configuration.ProcessControlView.$2I('/_grid/cmds/dlg_activate.aspx'), [ window._Process_Id ], 500, 200, null);
    $v_1.setCallbackReference($v_0);
    $v_1.show();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (355,3)
ProcessControl.Configuration.ProcessControlView.activateProcessConfirmationCallback = function ProcessControl_Configuration_ProcessControlView$activateProcessConfirmationCallback(confirmation) {
    if (!IsNull(confirmation) && confirmation) {
        ProcessControl.Configuration.ProcessControlView.$1Q('ActivateBusinessProcess');
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (366,3)
ProcessControl.Configuration.ProcessControlView.$4H = function ProcessControl_Configuration_ProcessControlView$$4H() {
    var $v_0 = ProcessControl.Configuration.ProcessControlView.$1N('/_grid/cmds/dlg_deactivate.aspx');
    ProcessControl.Configuration.ProcessControlView.activateProcessConfirmationCallback($v_0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (377,3)
ProcessControl.Configuration.ProcessControlView.deactivateProcessConfirmationCallback = function ProcessControl_Configuration_ProcessControlView$deactivateProcessConfirmationCallback(confirmation) {
    if (!IsNull(confirmation) && confirmation) {
        ProcessControl.Configuration.ProcessControlView.$1Q('DeactivateBusinessProcess');
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (390,3)
ProcessControl.Configuration.ProcessControlView.$1N = function ProcessControl_Configuration_ProcessControlView$$1N($p0) {
    var $v_0 = ProcessControl.Configuration.ProcessControlView.$2I($p0);
    var $v_1 = openStdDlgWithCallback($v_0, [ window._Process_Id ], 405, 205, null);
    return $v_1;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (408,3)
ProcessControl.Configuration.ProcessControlView.$2I = function ProcessControl_Configuration_ProcessControlView$$2I($p0) {
    var $v_0 = Mscrm.CrmUri.create($p0);
    $v_0.get_query()['iObjType'] = 4703;
    $v_0.get_query()['iTotal'] = '1';
    $v_0.get_query()['sIds'] = window._Process_Id;
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (432,3)
ProcessControl.Configuration.ProcessControlView.$2N = function ProcessControl_Configuration_ProcessControlView$$2N() {
    var $v_0 = $P_CRM('#ProcessName');
    return $v_0.val();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (475,3)
ProcessControl.Configuration.ProcessControlView.$4h = function ProcessControl_Configuration_ProcessControlView$$4h($p0, $p1) {
    ProcessControl.Configuration.ProcessControlView.get_$1R().hide();
    if (!$p0.Success) {
        return;
    }
    if ($p0.ReturnValue === 'success') {
        ProcessControl.Configuration.ProcessControlView.$1D = ProcessControl.Configuration.ProcessControlView.$z;
        ProcessControl.Configuration.ProcessControlView.$1Q($p1.Command);
    }
    else {
        var $v_0 = ProcessControl.Configuration.ProcessControlView.$2M($p0);
        ProcessControl.Configuration.ProcessControlView.$2O($v_0);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (560,3)
ProcessControl.Configuration.ProcessControlView.$1Q = function ProcessControl_Configuration_ProcessControlView$$1Q($p0) {
    var $v_0 = false;
    var $v_1 = false;
    var $v_2 = false;
    switch ($p0) {
        case 'DeleteBusinessProcess':
            $v_0 = true;
            $v_2 = true;
            break;
        case 'ActivateBusinessProcess':
        case 'DeactivateBusinessProcess':
            $v_0 = true;
            $v_1 = true;
            break;
        case 'UpdateProcess':
            if (ProcessControl.Configuration.ProcessControlView.$1I) {
                $v_0 = true;
                var $v_3 = ProcessControl.Configuration.ProcessControlView.$2N();
                ProcessControl.Configuration.ProcessControlView.$4o($v_3);
                ProcessControl.Configuration.ProcessControlView.$1I = false;
            }
            break;
    }
    if ($v_0) {
        ProcessControl.Configuration.ProcessControlView.$2e();
    }
    if ($v_1) {
        ProcessControl.Configuration.ProcessControlView.$4U(true);
    }
    if ($v_2) {
        ProcessControl.Configuration.ProcessControlView.$3C();
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (604,3)
ProcessControl.Configuration.ProcessControlView.$4o = function ProcessControl_Configuration_ProcessControlView$$4o($p0) {
    var $v_0 = $P_CRM('#ProcessTitle');
    $v_0.text($p0);
    $v_0.attr('title', $p0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (614,3)
ProcessControl.Configuration.ProcessControlView.$3C = function ProcessControl_Configuration_ProcessControlView$$3C() {
    window.top.close();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (623,3)
ProcessControl.Configuration.ProcessControlView.$4U = function ProcessControl_Configuration_ProcessControlView$$4U($p0) {
    window.location.reload($p0);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (631,3)
ProcessControl.Configuration.ProcessControlView.$2e = function ProcessControl_Configuration_ProcessControlView$$2e() {
    if (!IsNull(window.top.opener)) {
        window.top.opener.auto('4703');
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (666,3)
ProcessControl.Configuration.ProcessControlView.$2O = function ProcessControl_Configuration_ProcessControlView$$2O($p0) {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (676,3)
ProcessControl.Configuration.ProcessControlView.$2M = function ProcessControl_Configuration_ProcessControlView$$2M($p0) {
    if (!$p0.Success || isNullOrEmptyString($p0.ReturnValue)) {
        return null;
    }
    var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(($p0.ReturnValue).substr(8));
    if (!IsNull($v_0) && !IsNull($v_0['_error'])) {
        return $v_0['_error'];
    }
    return null;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (692,3)
ProcessControl.Configuration.ProcessControlView.$3N = function ProcessControl_Configuration_ProcessControlView$$3N($p0, $p1) {
    ProcessControl.Configuration.ProcessControlView.get_$1R().hide();
    Mscrm.RemoteCommandXml.remoteCommandXmlDefaultErrorHandler($p0, $p1);
}
ProcessControl.Configuration.ProcessControlView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (36,3)
    initialize: function ProcessControl_Configuration_ProcessControlView$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $P_CRM.fn.extend({propAttr: $P_CRM.fn.prop || $P_CRM.fn.attr});;
        $create(ProcessControl.Configuration.ProcessEventAggregator, null, null, null, $get('pcc_event'));
        $create(ProcessControl.Configuration.MoveBehavior, null, null, null, $get('pcc_updown_arrows'));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (50,4)
    get_dataContext: function ProcessControl_Configuration_ProcessControlView$get_dataContext() {
        return ProcessControl.Configuration.ProcessControlViewBase.prototype.get_dataContext.call(this);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (51,4)
    set_dataContext: function ProcessControl_Configuration_ProcessControlView$set_dataContext(value) {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.set_dataContext.call(this, value);
        this.$40_5(value.get_steps());
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (62,3)
    $2x_5: function ProcessControl_Configuration_ProcessControlView$$2x_5() {
        switch (Mscrm.CrmBrowser.get_currentBrowser().get_agent()) {
            case 1:
                this.get_elementWrapper().addClass('ie');
                var $v_0 = 'ie8';
                if (Mscrm.Utilities.isIE10()) {
                    $v_0 = 'ie10';
                }
                else if (Mscrm.Utilities.isIE9()) {
                    $v_0 = 'ie9';
                }
                this.get_elementWrapper().addClass($v_0);
                break;
            case 4:
                this.get_elementWrapper().addClass('safari');
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (85,3)
    $40_5: function ProcessControl_Configuration_ProcessControlView$$40_5($p0) {
        var $v_0 = ProcessControl.Configuration.ProcessControlEntityView;
        var $v_1 = this.get_$4x_3();
        for (var $v_2 = 0; $v_2 < $p0.get_count(); $v_2++) {
            var $v_3 = $p0.get_item($v_2);
            var $v_4 = {};
            $v_4['dataContext'] = $v_3;
            $v_4['entityMetadata'] = this.get_entityMetadata();
            var $v_5 = String.format('{0}_{1}', this.get_elementWrapper().get(0).id, $v_2);
            var $v_6 = Mscrm.CrmUIComponent.crmCreate($v_0, $v_4, null, null, $get($v_5));
            $v_6.set_parent(this);
            if (!IsNull(this.$E_5) && (($v_3.get_entityLogicalName()) in this.$E_5)) {
                $v_6.$E_5 = this.$E_5[$v_3.get_entityLogicalName()];
                ProcessConfiguration.Utility.LabelDictionary.insertIfNotPresent($v_6.$E_5.EntityLogicalName, $v_6.$E_5.EntityLabel);
            }
            Array.add($v_1, $v_6);
            if ($v_3.get_description() !== 'DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B') {
                this.$L_5++;
                this.$y_5 = $v_3.get_entityLogicalName();
            }
            if ($v_3.get_isClosedLoop()) {
                this.$V_5 = true;
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (123,3)
    renderView: function ProcessControl_Configuration_ProcessControlView$renderView() {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.renderView.call(this);
        var $v_0 = {};
        $v_0['entityView'] = this;
        this.$1z_5 = $create(ProcessConfiguration.Behavior.AddEntityBehavior, $v_0, null, null, $get('pcc_tabs'));
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (137,4)
    get_uiBuilder: function ProcessControl_Configuration_ProcessControlView$get_uiBuilder() {
        return new ProcessControl.Configuration.StepBuilder();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (142,4)
    get_childViewContainer: function ProcessControl_Configuration_ProcessControlView$get_childViewContainer() {
        return $P_CRM('pcc_tabs');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (150,4)
    get_tabControl: function ProcessControl_Configuration_ProcessControlView$get_tabControl() {
        return this.$H_5;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (151,4)
    set_tabControl: function ProcessControl_Configuration_ProcessControlView$set_tabControl(value) {
        this.$H_5 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (159,4)
    get_initialJson: function ProcessControl_Configuration_ProcessControlView$get_initialJson() {
        return ProcessControl.Configuration.ProcessControlView.$1D;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (160,4)
    set_initialJson: function ProcessControl_Configuration_ProcessControlView$set_initialJson(value) {
        ProcessControl.Configuration.ProcessControlView.$1D = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (168,4)
    get_isDirty: function ProcessControl_Configuration_ProcessControlView$get_isDirty() {
        this.setTitleAndDescriptionFromForm();
        return this.get_initialJson() !== this.get_dataContext().toJson();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (180,4)
    get_lastEntity: function ProcessControl_Configuration_ProcessControlView$get_lastEntity() {
        return this.$y_5;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (181,4)
    set_lastEntity: function ProcessControl_Configuration_ProcessControlView$set_lastEntity(value) {
        this.$y_5 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (189,4)
    get_relationshipMetadata: function ProcessControl_Configuration_ProcessControlView$get_relationshipMetadata() {
        return this.$E_5;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (190,4)
    set_relationshipMetadata: function ProcessControl_Configuration_ProcessControlView$set_relationshipMetadata(value) {
        this.$E_5 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (198,4)
    get_currentTabId: function ProcessControl_Configuration_ProcessControlView$get_currentTabId() {
        return this.$L_5;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (199,4)
    set_currentTabId: function ProcessControl_Configuration_ProcessControlView$set_currentTabId(value) {
        this.$L_5 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (207,4)
    get_isProcessClosed: function ProcessControl_Configuration_ProcessControlView$get_isProcessClosed() {
        return this.$V_5;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (208,4)
    set_isProcessClosed: function ProcessControl_Configuration_ProcessControlView$set_isProcessClosed(value) {
        this.$V_5 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (216,3)
    saveProcess: function ProcessControl_Configuration_ProcessControlView$saveProcess(callback) {
        var $$t_3 = this;
        this.$2a_5('UpdateProcess', function($p1_0, $p1_1) {
            ProcessControl.Configuration.ProcessControlView.$4h($p1_0, $p1_1);
            if (!IsNull(callback)) {
                callback($p1_0, $p1_1);
            }
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (228,3)
    saveProcessAs: function ProcessControl_Configuration_ProcessControlView$saveProcessAs() {
        this.$2a_5('SaveAsBpf', this.$$d_$4g_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (236,3)
    activateProcess: function ProcessControl_Configuration_ProcessControlView$activateProcess() {
        this.$2b_5('ActivateBusinessProcess');
        ProcessControl.Configuration.ProcessControlView.$4G();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (245,3)
    deactivateProcess: function ProcessControl_Configuration_ProcessControlView$deactivateProcess() {
        ProcessControl.Configuration.ProcessControlView.$4H();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (253,3)
    deleteProcess: function ProcessControl_Configuration_ProcessControlView$deleteProcess() {
        ProcessControl.Configuration.ProcessControlView.$4I();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (285,3)
    $2a_5: function ProcessControl_Configuration_ProcessControlView$$2a_5($p0, $p1) {
        this.validate();
        if (!this.get_validationResult().isValid) {
            return;
        }
        this.$2b_5($p0);
        ProcessControl.Configuration.ProcessControlView.$z = this.$3d_5();
        if (!isNullOrEmptyString(ProcessControl.Configuration.ProcessControlView.$z)) {
            ProcessControl.Configuration.ProcessControlView.get_$1R().forceShow();
            ProcessControl.Configuration.BpfDataUtility.executeConfiguratorActionCommand(ProcessControl.Configuration.ProcessControlView.$z, $p0, $p1, ProcessControl.Configuration.ProcessControlView.$3N);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (323,3)
    $3d_5: function ProcessControl_Configuration_ProcessControlView$$3d_5() {
        this.validate();
        if (!this.get_validationResult().isValid) {
            return null;
        }
        this.setTitleAndDescriptionFromForm();
        return this.get_dataContext().toJson();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (422,3)
    $3e_5: function ProcessControl_Configuration_ProcessControlView$$3e_5() {
        var $v_0 = $P_CRM('#Description');
        return $v_0.val();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (442,3)
    titleOrDescriptionChanged: function ProcessControl_Configuration_ProcessControlView$titleOrDescriptionChanged(eventData) {
        ProcessControl.Configuration.ProcessControlView.$1I = true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (451,3)
    setTitleAndDescriptionFromForm: function ProcessControl_Configuration_ProcessControlView$setTitleAndDescriptionFromForm() {
        var $v_0 = this.$3e_5();
        var $v_1 = ProcessControl.Configuration.ProcessControlView.$2N();
        if (isNullOrEmptyString($v_1)) {
            $v_1 = ' ';
        }
        if (isNullOrEmptyString($v_0)) {
            $v_0 = ' ';
        }
        this.get_dataContext().set_description($v_0);
        this.get_dataContext().set_title($v_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (500,3)
    $2b_5: function ProcessControl_Configuration_ProcessControlView$$2b_5($p0) {
        switch ($p0) {
            case 'SaveAsBpf':
            case 'UpdateProcess':
                this.$3E_5();
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (511,3)
    $3E_5: function ProcessControl_Configuration_ProcessControlView$$3E_5() {
        var $v_0 = {};
        var $v_1 = this.get_dataContext();
        for (var $v_2 = 0; $v_2 < $v_1.get_steps().get_count(); $v_2++) {
            var $v_3 = $v_1.get_steps().get_item($v_2);
            for (var $v_4 = 0; $v_4 < $v_3.get_steps().get_count(); $v_4++) {
                var $v_5 = $v_3.get_steps().get_item($v_4);
                for (var $v_6 = 0; $v_6 < $v_5.get_steps().get_count(); $v_6++) {
                    var $v_7 = $v_5.get_steps().get_item($v_6);
                    for (var $v_8 = 0; $v_8 < $v_7.get_steps().get_count(); $v_8++) {
                        var $v_9 = $v_7.get_steps().get_item($v_8);
                        var $v_A = ($v_9.get_isSystemControl()) ? ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepControlId($v_9) : $v_9.get_dataFieldName();
                        var $v_B = (($v_A) in $v_0) ? ($v_0[$v_A]) + 1 : 0;
                        $v_0[$v_A] = $v_B;
                        $v_9.set_controlId(String.format('{0}{1}', $v_A, (!$v_B) ? Mscrm.InternalUtilities._String.Empty : Mscrm.InternalUtilities._String.Empty + $v_B));
                    }
                }
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (645,3)
    $4g_5: function ProcessControl_Configuration_ProcessControlView$$4g_5($p0, $p1) {
        ProcessControl.Configuration.ProcessControlView.get_$1R().hide();
        if ($p0.Success && !isNullOrEmptyString($p0.ReturnValue)) {
            ProcessControl.Configuration.ProcessControlView.$2e();
            var $v_0 = $p0.ReturnValue.toString();
            Mscrm.BpfConfiguratorUtils.launchConfigurator($v_0);
        }
        else {
            var $v_1 = ProcessControl.Configuration.ProcessControlView.$2M($p0);
            ProcessControl.Configuration.ProcessControlView.$2O($v_1);
        }
    },
    
    $1z_5: null,
    $E_5: null,
    $y_5: null,
    $H_5: null,
    $V_5: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (717,3)
    dispose: function ProcessControl_Configuration_ProcessControlView$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        this.disposeChildViews();
        this.$3I_5();
        this.$3J_5();
        this.$1z_5.dispose();
        ProcessControl.Configuration.ProcessControlViewBase.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (732,3)
    $3J_5: function ProcessControl_Configuration_ProcessControlView$$3J_5() {
        var $v_0 = $find('pcc_updown_arrows');
        if (!IsNull($v_0)) {
            $v_0.dispose();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlView.cs (744,3)
    $3I_5: function ProcessControl_Configuration_ProcessControlView$$3I_5() {
        var $v_0 = $find('pcc_event');
        if (!IsNull($v_0)) {
            $v_0.dispose();
        }
    }
}


ProcessControl.Configuration.ProcessControlViewBase = function ProcessControl_Configuration_ProcessControlViewBase(element) {
    this.$R_3 = [];
    this.$1V_3 = ((this.$$gta['ProcessControl.Configuration.ProcessControlViewBase']['TViewModel'] === Number || Type.isEnum(this.$$gta['ProcessControl.Configuration.ProcessControlViewBase']['TViewModel'])) ? 0 : (this.$$gta['ProcessControl.Configuration.ProcessControlViewBase']['TViewModel'] === Boolean) ? false : null);
    ProcessControl.Configuration.ProcessControlViewBase.$$(this.$$gta['ProcessControl.Configuration.ProcessControlViewBase']['TViewModel'], this.$$gta['ProcessControl.Configuration.ProcessControlViewBase']['TChildView']).initializeBase(this, [ element ]);
    this.$20_3 = $P_CRM(element);
}
ProcessControl.Configuration.ProcessControlViewBase.$$ = function ProcessControl_Configuration_ProcessControlViewBase$$$(TViewModel, TChildView) {
    var $$cn = 'ProcessControlViewBase' + '$2' + '$' + TViewModel.getName().replace(/\./g, '_') + '$' + TChildView.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.ProcessControlViewBase'] = {'TViewModel': TViewModel, 'TChildView': TChildView};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.ProcessControlViewBase.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn, Mscrm.CrmUIControl, ProcessControl.Configuration.IProcessControlViewBase.$$(TViewModel), ProcessControl.Configuration.IProcessControlView);
        var $$dict_6 = ProcessControl.Configuration.ProcessControlViewBase.prototype;
        for (var $$key_7 in $$dict_6) {
            var $$entry_8 = { key: $$key_7, value: $$dict_6[$$key_7] };
            if ('constructor' !== $$entry_8.key) {
                $$ccr.prototype[$$entry_8.key] = $$entry_8.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.ProcessControlViewBase.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (56,3)
    renderView: function ProcessControl_Configuration_ProcessControlViewBase$renderView() {
        for (var $v_0 = 0; $v_0 < this.$R_3.length; $v_0++) {
            (this.$R_3[$v_0]).set_entityMetadata(this.get_entityMetadata());
            (this.$R_3[$v_0]).renderView();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (65,3)
    dispose: function ProcessControl_Configuration_ProcessControlViewBase$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        this.disposeChildViews();
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (78,3)
    disposeChildViews: function ProcessControl_Configuration_ProcessControlViewBase$disposeChildViews() {
        for (var $v_0 = 0; $v_0 < this.$R_3.length; $v_0++) {
            if (Sys.IDisposable.isInstanceOfType(this.$R_3[$v_0])) {
                var $v_1 = this.$R_3[$v_0];
                $v_1.dispose();
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (95,4)
    get_dataContext: function ProcessControl_Configuration_ProcessControlViewBase$get_dataContext() {
        return this.$1V_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (96,4)
    set_dataContext: function ProcessControl_Configuration_ProcessControlViewBase$set_dataContext(value) {
        this.$1V_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (104,4)
    get_entityMetadata: function ProcessControl_Configuration_ProcessControlViewBase$get_entityMetadata() {
        return this.$X_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (105,4)
    set_entityMetadata: function ProcessControl_Configuration_ProcessControlViewBase$set_entityMetadata(value) {
        this.$X_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (113,4)
    get_elementWrapper: function ProcessControl_Configuration_ProcessControlViewBase$get_elementWrapper() {
        return this.$20_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (121,4)
    get_$4x_3: function ProcessControl_Configuration_ProcessControlViewBase$get_$4x_3() {
        return this.$R_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (129,4)
    get_validationResult: function ProcessControl_Configuration_ProcessControlViewBase$get_validationResult() {
        return this.$10_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (130,4)
    set_validationResult: function ProcessControl_Configuration_ProcessControlViewBase$set_validationResult(value) {
        this.$10_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (137,3)
    validate: function ProcessControl_Configuration_ProcessControlViewBase$validate() {
        var $v_0 = true;
        if (IsNull(this.$R_3)) {
            this.$10_3 = new Mscrm.ValidationResult(true, null);
            return;
        }
        for (var $v_1 = this.$R_3.length - 1; $v_1 >= 0; $v_1--) {
            var $v_2 = this.$R_3[$v_1];
            $v_2.validate();
            if (!IsNull($v_2.get_validationResult()) && !$v_2.get_validationResult().isValid && $v_0) {
                this.$10_3 = new Mscrm.ValidationResult(false, $v_2.get_validationResult().errorText);
                $v_0 = false;
                this.$4j_3($v_2);
            }
        }
        if ($v_0) {
            this.$10_3 = new Mscrm.ValidationResult(true, null);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (175,3)
    $4j_3: function ProcessControl_Configuration_ProcessControlViewBase$$4j_3($p0) {
        var $v_0 = ($p0).$1_4;
        if (!IsNull($v_0)) {
            $v_0.get_element().focus();
        }
        var $v_1 = ($p0).$1_5;
        if (!IsNull($v_1)) {
            var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexFromTabContentId($v_1.get_element().id);
            var $v_3 = String.format('pcc_tab_{0}', $v_2);
            var $v_4 = $P_CRM('a[tabid=\'' + $v_3 + '\']');
            if ($v_4.length > 0) {
                $v_4.click();
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\ProcessControlViewBase.cs (201,3)
    onKeyDown: function ProcessControl_Configuration_ProcessControlViewBase$onKeyDown(jEvent) {
    },
    
    $20_3: null,
    $10_3: null,
    $X_3: null
}


ProcessControl.Configuration.StepControlViewBase = function ProcessControl_Configuration_StepControlViewBase(element) {
    ProcessControl.Configuration.StepControlViewBase.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StepControlViewBase.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepControlViewBase.cs (21,4)
    get_parentView: function ProcessControl_Configuration_StepControlViewBase$get_parentView() {
        return this.$1_4;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepControlViewBase.cs (22,4)
    set_parentView: function ProcessControl_Configuration_StepControlViewBase$set_parentView(value) {
        this.$1_4 = value;
        return value;
    },
    
    $1_4: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepControlViewBase.cs (32,4)
    get_dataContext: function ProcessControl_Configuration_StepControlViewBase$get_dataContext() {
        return ProcessControl.Configuration.ProcessControlViewBase.prototype.get_dataContext.call(this);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepControlViewBase.cs (33,4)
    set_dataContext: function ProcessControl_Configuration_StepControlViewBase$set_dataContext(value) {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.set_dataContext.call(this, value);
        return value;
    }
}


ProcessControl.Configuration.StepFieldControlView = function ProcessControl_Configuration_StepFieldControlView(element) {
    this.$$d_$4O_5 = Function.createDelegate(this, this.$4O_5);
    ProcessControl.Configuration.StepFieldControlView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StepFieldControlView.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (23,3)
    renderView: function ProcessControl_Configuration_StepFieldControlView$renderView() {
        ProcessControl.Configuration.ProcessControlViewBase.prototype.renderView.call(this);
        this.$42_5();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (36,3)
    validate: function ProcessControl_Configuration_StepFieldControlView$validate() {
        if (this.get_dataContext().get_isSystemControl()) {
            this.set_validationResult(new Mscrm.ValidationResult(true, null));
            return;
        }
        var $v_0 = this.$Q_5.get_isValid();
        if (!$v_0) {
            this.set_validationResult(new Mscrm.ValidationResult(false, this.$Q_5.get_validateResult().errorText));
            return;
        }
        ProcessControl.Configuration.ProcessControlViewBase.prototype.validate.call(this);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (57,3)
    $42_5: function ProcessControl_Configuration_StepFieldControlView$$42_5() {
        this.$43_5();
        this.$1J_5();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (66,3)
    $43_5: function ProcessControl_Configuration_StepFieldControlView$$43_5() {
        var $v_0 = {};
        var $v_1 = this.get_$1w_5();
        $v_0['raw'] = ($v_1 === ProcessControl.Configuration.Constants.$u) ? '' : this.get_$1w_5().toString();
        Sys.Application.beginCreateComponents();
        var $v_2 = Mscrm.InlineEditControlMode.normal;
        if (this.get_dataContext().get_isSystemControl()) {
            $v_2 = Mscrm.InlineEditControlMode.locked;
        }
        var $v_3 = this.$3F_5(this.get_entityMetadata()[this.get_$q_5()]);
        var $v_4 = new Mscrm.InlineOptionSetAttribute($v_3, $v_0, this.get_elementWrapper().attr(Mscrm.InlineEditConstants.HtmlAttributeForFormDataEntityId));
        var $v_5 = new Mscrm.InlineAutoCompleteControlViewModel($v_4, $v_2);
        $v_5.set_labelValue(window.LOCID_PROCESS_FIELDLABEL);
        $v_5.set_emptyValuePlaceholder(window.LOCID_PROCESS_NEWFIELDTEXTKEY);
        var $v_6 = this.$3Y_5($v_5, $v_1);
        this.$Q_5 = new Mscrm.InlineAutoCompleteControlView($v_6);
        this.$Q_5.set_dataContext($v_5);
        this.$4m_5(this.$Q_5, $v_1);
        this.$Q_5.set_errorDisplayAreaProvider(new Mscrm.FlyoutDialogErrorDisplayContainerProvider('pcc'));
        this.$Q_5.renderForRead();
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$Q_5);
        Sys.Application.endCreateComponents();
        var $v_7 = $find(this.$Q_5.get_dataContext().get_attribute().get_dataAttributeId());
        $v_7.set_isVirtual(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (120,3)
    $4m_5: function ProcessControl_Configuration_StepFieldControlView$$4m_5($p0, $p1) {
        if ($p1 !== ProcessControl.Configuration.Constants.$u && $p1 !== ProcessControl.Configuration.Constants.$1O) {
            $p0.get_valueElement().text((this.get_entityMetadata()[this.get_$q_5()]).Fields[$p1].Label.Description);
        }
        if ($p1 === ProcessControl.Configuration.Constants.$1O && !isNullOrEmptyString(this.get_dataContext().get_controlDisplayName()) && $p0.get_valueElement().text() === window.LOCID_PROCESS_NEWFIELDTEXTKEY) {
            $p0.get_valueElement().text(this.get_dataContext().get_controlDisplayName());
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (143,3)
    $3Y_5: function ProcessControl_Configuration_StepFieldControlView$$3Y_5($p0, $p1) {
        var $v_0 = new Mscrm.AutoCompleteLayout(this.get_elementWrapper(), $p0);
        if ($p1 === ProcessControl.Configuration.Constants.$u && $p0.get_controlMode() !== Mscrm.InlineEditControlMode.locked) {
            $v_0.set_valueElementClass('pc_inline_value pc_inline_empty_value');
        }
        else {
            $v_0.set_valueElementClass('pc_inline_value');
        }
        $v_0.set_imageIconFilePath('/_imgs/ProcessControl/dropdown.png');
        $v_0.set_imageIconTooltip(window.LOCID_PROCESS_SHOWFIELDS);
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (164,4)
    get_$q_5: function ProcessControl_Configuration_StepFieldControlView$get_$q_5() {
        if (IsNull(this.get_dataContext().get_parent()) || IsNull(this.get_dataContext().get_parent().get_parent()) || IsNull(this.get_dataContext().get_parent().get_parent().get_parent())) {
            return '';
        }
        return (this.get_dataContext().get_parent().get_parent().get_parent()).get_entityLogicalName();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (181,3)
    $1J_5: function ProcessControl_Configuration_StepFieldControlView$$1J_5() {
        this.$Q_5.get_chromeElement().bind(Mscrm.EditEvents.attributeChanged, this.$$d_$4O_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (190,3)
    $4O_5: function ProcessControl_Configuration_StepFieldControlView$$4O_5($p0) {
        if (arguments.length < 2) {
            return;
        }
        var $v_0 = ProcessControl.Configuration.Constants.$u;
        if (!IsNull(arguments[1])) {
            $v_0 = parseInt(arguments[1]);
        }
        this.set_$1w_5($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (209,4)
    get_$1w_5: function ProcessControl_Configuration_StepFieldControlView$get_$1w_5() {
        if (isNullOrEmptyString(this.get_dataContext().get_dataFieldName()) && !this.get_dataContext().get_isSystemControl()) {
            return ProcessControl.Configuration.Constants.$u;
        }
        var $v_0 = this.get_entityMetadata()[this.get_$q_5()];
        var $v_1 = $v_0.Fields;
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if ($v_1[$v_2].LogicalName === this.get_dataContext().get_dataFieldName()) {
                return $v_2;
            }
        }
        return ProcessControl.Configuration.Constants.$1O;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (228,4)
    set_$1w_5: function ProcessControl_Configuration_StepFieldControlView$set_$1w_5($p0) {
        if (IsNull((this.get_entityMetadata()[this.get_$q_5()])) || IsNull((this.get_entityMetadata()[this.get_$q_5()]).Fields[$p0])) {
            return $p0;
        }
        var $v_0 = (this.get_entityMetadata()[this.get_$q_5()]).Fields[$p0];
        this.get_dataContext().set_dataFieldName($v_0.LogicalName);
        this.get_dataContext().set_controlDisplayName($v_0.Label.Description);
        this.$1_4.$4n_4($v_0.Label.Description);
        this.get_elementWrapper().children(':first').removeClass('pc_inline_empty_value');
        return $p0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (248,3)
    $3F_5: function ProcessControl_Configuration_StepFieldControlView$$3F_5($p0) {
        var $v_0 = {};
        $v_0.AttributeType = 'picklist';
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Options = this.getEntityAttributeList($p0);
        $v_0.LogicalName = this.get_elementWrapper().attr('id');
        $v_0.RequiredLevel = Mscrm.AttributeRequiredLevel.systemRequired;
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (266,3)
    getEntityAttributeList: function ProcessControl_Configuration_StepFieldControlView$getEntityAttributeList(entityMetadata) {
        var $v_0 = new Array(0);
        for (var $v_1 = 0; $v_1 < entityMetadata.Fields.length; $v_1++) {
            var $v_2 = new Mscrm.EnumOptionJsonWrapper();
            $v_2.Value = $v_1;
            $v_2.Label = entityMetadata.Fields[$v_1].Label.Description;
            Array.add($v_0, $v_2);
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\View\StepFieldControlView.cs (281,3)
    dispose: function ProcessControl_Configuration_StepFieldControlView$dispose() {
        if (this.get_isDisposed() || IsNull(this.$Q_5)) {
            return;
        }
        this.$Q_5.get_chromeElement().unbind(Mscrm.EditEvents.attributeChanged, this.$$d_$4O_5);
        ProcessControl.Configuration.ProcessControlViewBase.prototype.dispose.call(this);
    },
    
    $Q_5: null
}


ProcessControl.Configuration.SystemStepControlView = function ProcessControl_Configuration_SystemStepControlView(element) {
    ProcessControl.Configuration.SystemStepControlView.initializeBase(this, [ element ]);
    XUI.Html.DomUtils.GetFirstChild(element).className += ' pc_inline_value';
}


Type.registerNamespace('ProcessConfiguration.Behavior');

ProcessConfiguration.Behavior.AddEntityBehavior = function ProcessConfiguration_Behavior_AddEntityBehavior(element) {
    this.$$d_handleOptionIconClick = Function.createDelegate(this, this.handleOptionIconClick);
    this.$$d_$41_4 = Function.createDelegate(this, this.$41_4);
    this.$$d_clickHandler = Function.createDelegate(this, this.clickHandler);
    ProcessConfiguration.Behavior.AddEntityBehavior.initializeBase(this, [ element ]);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (363,3)
ProcessConfiguration.Behavior.AddEntityBehavior.$4k = function ProcessConfiguration_Behavior_AddEntityBehavior$$4k($p0, $p1, $p2) {
    $p0.set_relationshipName($p1);
    $p0.set_attributeName($p2);
}
ProcessConfiguration.Behavior.AddEntityBehavior.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (37,3)
    initialize: function ProcessConfiguration_Behavior_AddEntityBehavior$initialize() {
        ProcessControl.Configuration.AddChildControlBehavior.prototype.initialize.call(this);
        this.$3v_4();
        this.$1J_4();
        this.$4W_4();
        ProcessConfiguration.Behavior.ConfiguratorFlyout.createFlyOutMenuDescriptor(this.get_$0_4().$y_5, ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$0_4().get_dataContext()), this.get_$0_4().$E_5, this.$$d_clickHandler, this.get_$0_4().$V_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (51,3)
    handleOptionIconClick: function ProcessConfiguration_Behavior_AddEntityBehavior$handleOptionIconClick(jQueryEvent) {
        if (IsNull(ProcessConfiguration.Behavior.ConfiguratorFlyout.$C) || ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.get_isDisposed() || !ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.get_visible()) {
            ProcessConfiguration.Behavior.ConfiguratorFlyout.showFlyout();
        }
        else {
            ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (70,4)
    get_defaultAddTitle: function ProcessConfiguration_Behavior_AddEntityBehavior$get_defaultAddTitle() {
        return window.LOCID_PROCESS_ADDSTAGE;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (80,4)
    get_canAddEntity: function ProcessConfiguration_Behavior_AddEntityBehavior$get_canAddEntity() {
        return !this.get_$0_4().$V_5 && !this.$3u_4();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (91,4)
    get_canRemoveEntity: function ProcessConfiguration_Behavior_AddEntityBehavior$get_canRemoveEntity() {
        return !this.isSingleEntityInProcess();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (99,3)
    clickHandler: function ProcessConfiguration_Behavior_AddEntityBehavior$clickHandler(eventObject) {
        if (IsNull(eventObject.data) || !('Action' in eventObject.data)) {
            ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
            return;
        }
        var $v_0 = eventObject.data['Action'];
        switch ($v_0) {
            case 'AddEntity':
                this.addChild(eventObject);
                break;
            case 'RemoveEntity':
                this.removeChild(eventObject);
                break;
            case 'CloseLoop':
                this.$3B_4(eventObject);
                break;
            default:
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (132,3)
    addChild: function ProcessConfiguration_Behavior_AddEntityBehavior$addChild(eventObject) {
        if (!this.get_canAddEntity()) {
            return;
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.addChild.call(this, eventObject);
        if (IsNull(eventObject.data) || !('entityLogicalName' in eventObject.data)) {
            return;
        }
        var $v_0 = eventObject.data['entityLogicalName'];
        var $v_1 = eventObject.data['entityLabel'];
        var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.getFirstDoNotPersistEntityStep(this.get_$J_4());
        $v_2.set_entityLogicalName($v_0);
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntityBeforeLast(this.get_$J_4());
        this.$2g_4($v_3, eventObject);
        ProcessConfiguration.Utility.LabelDictionary.insertIfNotPresent($v_0, $v_1);
        ProcessControl.Configuration.BpfDataUtility.getEntityAndRelationshipMetadata($v_0, this.$$d_$41_4);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (161,3)
    removeChild: function ProcessConfiguration_Behavior_AddEntityBehavior$removeChild(eventObject) {
        if (!this.get_canRemoveEntity()) {
            return;
        }
        this.$3w_4();
        this.get_$0_4().$L_5--;
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep(this.get_$J_4());
        this.$4X_4($v_0.get_entityLogicalName());
        this.$4f_4($v_0);
        this.$4e_4();
        $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep(this.get_$J_4());
        this.$4d_4($v_0);
        this.get_$0_4().$V_5 = false;
        this.$1v_4($v_0.get_entityLogicalName());
        this.$1y_4($v_0.get_entityLogicalName());
        ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        if (ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps($v_0)) {
            ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this.get_$0_4());
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (196,3)
    $4X_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4X_4($p0) {
        if (this.get_$0_4().$V_5) {
            return;
        }
        delete this.get_$0_4().$E_5[$p0];
        delete this.get_$0_4().get_entityMetadata()[$p0];
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (210,3)
    $4e_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4e_4() {
        var $v_0 = this.get_$0_4().get_$4x_3().length;
        var $v_1 = null;
        for (var $v_3 = 0; $v_3 < $v_0; $v_3++) {
            if ((this.get_$0_4().get_$4x_3()[$v_3]).get_dataContext().get_description() === 'DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B') {
                $v_1 = this.get_$0_4().get_$4x_3()[$v_3];
                break;
            }
        }
        if (!$v_1) {
            return;
        }
        var $v_2 = $v_1.get_$4x_3().length;
        for (var $v_4 = 0; $v_4 < $v_2; $v_4++) {
            $v_1.removeChildView(0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (238,3)
    $4W_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4W_4() {
        for (var $v_0 = 0; $v_0 <= this.get_$0_4().$L_5; $v_0++) {
            var $v_1 = String.format('pcc_tab_{0}', $v_0);
            var $v_2 = $P_CRM('#header_pcc_tabs').children('a[tabid=\'' + $v_1 + '\']');
            ProcessConfiguration.Utility.LabelDictionary.insertIfNotPresent(this.get_$J_4().get_steps().get_item($v_0).get_description(), $v_2.text());
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (252,3)
    $3u_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$3u_4() {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$J_4()).length;
        return $v_0 >= 5;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (262,3)
    isSingleEntityInProcess: function ProcessConfiguration_Behavior_AddEntityBehavior$isSingleEntityInProcess() {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$J_4()).length;
        return $v_0 === 1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (272,3)
    $3B_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$3B_4($p0) {
        if (IsNull($p0.data) || !('entityLogicalName' in $p0.data)) {
            return;
        }
        var $v_0 = $p0.data['entityLogicalName'];
        if (!this.$39_4($v_0)) {
            return;
        }
        var $v_1 = ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent($v_0);
        var $v_2 = String.format('{0} {1}', $v_1.toUpperCase(), window.LOCID_PROCESS_CLOSELOOPINDICATOR);
        this.$4J_4($v_0, $p0);
        this.get_$0_4().$L_5++;
        this.$2S_4();
        this.$2W_4($v_2);
        this.$1y_4($v_0);
        ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        this.get_$0_4().$V_5 = true;
        this.$1v_4($v_0);
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this.get_$0_4());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (307,3)
    $4J_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4J_4($p0, $p1) {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getFirstDoNotPersistEntityStep(this.get_$J_4());
        $v_0.set_entityLogicalName($p0);
        var $v_1 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntityBeforeLast(this.get_$J_4());
        $v_1.set_isClosedLoop(true);
        this.$2g_4($v_1, $p1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (323,3)
    $39_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$39_4($p0) {
        return !(!isNullOrEmptyString($p0) && this.get_$0_4().$V_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (331,3)
    $1J_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$1J_4() {
        var $v_0 = $P_CRM('#pcc_options');
        $v_0.bind('click', this.$$d_handleOptionIconClick);
        var $$t_2 = this;
        $v_0.bind('keydown', function($p1_0) {
            switch ($p1_0.which) {
                case 13:
                    $$t_2.handleOptionIconClick($p1_0);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation();
                    break;
            }
        });
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (348,3)
    $3v_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$3v_4() {
        var $v_0 = $P_CRM('#pcc_options');
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            $v_0.hide();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (374,3)
    $41_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$41_4($p0, $p1) {
        if (!$p0.Success) {
            return;
        }
        var $v_0 = $P_CRM.parseJSON($p0.ReturnValue.toString().substr(8));
        var $v_1 = $p1.GetParameter('entityName').Value;
        this.$4i_4($v_0, $v_1);
        this.$4l_4($v_0, $v_1);
        this.get_$0_4().$L_5++;
        var $v_2 = ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent($v_1);
        this.$2S_4();
        this.$2W_4($v_2.toUpperCase());
        this.$1y_4($v_1);
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this.get_$0_4());
        ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        this.$1v_4($v_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (407,3)
    $2S_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$2S_4() {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep(this.get_$J_4());
        if ($v_0.get_steps().get_count() > 0) {
            var $v_1 = $v_0.get_steps().get_item(0);
            if ($v_1.get_steps().get_count() > 0) {
                return;
            }
            var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData(this.get_$J_4());
            $v_2.set_parent($v_1);
            $v_2.set_workflow(this.get_$J_4().get_workflow());
            $v_1.appendStep($v_2);
        }
        else {
            var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStageData(this.get_$J_4());
            $v_0.appendStep($v_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (436,3)
    $1v_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$1v_4($p0) {
        ProcessConfiguration.Behavior.ConfiguratorFlyout.createFlyOutMenuDescriptor($p0, ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$J_4()), this.get_$0_4().$E_5, this.$$d_clickHandler, this.get_$0_4().$V_5);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (446,3)
    $1y_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$1y_4($p0) {
        this.get_$0_4().$y_5 = $p0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (456,3)
    $4l_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4l_4($p0, $p1) {
        var $v_0 = $P_CRM.parseJSON($p0.RelationshipMetadata);
        this.get_$0_4().$E_5[$p1] = $v_0[$p1];
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (467,3)
    $4i_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4i_4($p0, $p1) {
        var $v_0 = $P_CRM.parseJSON($p0.EntityMetadata);
        this.$3_3.get_entityMetadata()[$p1] = $v_0[$p1];
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (476,3)
    $4f_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4f_4($p0) {
        $p0.set_description('DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B');
        $p0.set_isClosedLoop(false);
        var $v_0 = $p0.get_steps().getArrayList();
        Array.clear($v_0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (488,3)
    $4d_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$4d_4($p0) {
        $p0.set_isClosedLoop(false);
        $p0.set_relationshipName(null);
        $p0.set_attributeName(null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (499,3)
    $3w_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$3w_4() {
        var $v_0 = String.format('pcc_tab_{0}', this.get_$0_4().$L_5);
        var $v_1 = String.format('pcc_tab_{0}', this.get_$0_4().$L_5 - 1);
        this.get_$0_4().$H_5.hideTab($v_0);
        if ($v_0 === this.get_$0_4().$H_5.getActiveTabId()) {
            this.get_$0_4().$H_5.showTab($v_1);
            this.get_$0_4().$H_5.setActiveTab($v_1);
        }
        var $v_2 = String.format('breadcrumb_{0}', this.get_$0_4().$L_5 - 1);
        var $v_3 = $P_CRM('#' + $v_2);
        if (!IsNull($v_3)) {
            $v_3.hide();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (525,4)
    get_$J_4: function ProcessConfiguration_Behavior_AddEntityBehavior$get_$J_4() {
        if (IsNull(this.$1n_4)) {
            this.$1n_4 = (this.$3_3).get_dataContext().get_parent();
        }
        return this.$1n_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (540,4)
    get_$0_4: function ProcessConfiguration_Behavior_AddEntityBehavior$get_$0_4() {
        if (IsNull(this.$f_4)) {
            this.$f_4 = (this.$3_3);
        }
        return this.$f_4;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (556,3)
    $2g_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$2g_4($p0, $p1) {
        var $v_0 = $p1.data['relationshipName'];
        var $v_1 = $p1.data['attributeName'];
        ProcessConfiguration.Behavior.AddEntityBehavior.$4k($p0, $v_0, $v_1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\AddEntityBehavior.cs (567,3)
    $2W_4: function ProcessConfiguration_Behavior_AddEntityBehavior$$2W_4($p0) {
        var $v_0 = String.format('pcc_tab_{0}', this.get_$0_4().$L_5);
        var $v_1 = String.format('breadcrumb_{0}', this.get_$0_4().$L_5 - 1);
        var $v_2 = $P_CRM('#' + $v_1);
        if (!IsNull($v_2)) {
            $v_2.show();
        }
        var $v_3 = $P_CRM('#header_pcc_tabs').children('a[tabid=\'' + $v_0 + '\']');
        $v_3.text($p0);
        $v_3.attr('title', $p0);
        this.get_$0_4().$H_5.showTab($v_0);
        this.get_$0_4().$H_5.setActiveTab($v_0);
    },
    
    $1n_4: null,
    $f_4: null
}


ProcessConfiguration.Behavior.ConfiguratorFlyout = function ProcessConfiguration_Behavior_ConfiguratorFlyout() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (45,4)
ProcessConfiguration.Behavior.ConfiguratorFlyout.get_flyout = function ProcessConfiguration_Behavior_ConfiguratorFlyout$get_flyout() {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$C;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (46,4)
ProcessConfiguration.Behavior.ConfiguratorFlyout.set_flyout = function ProcessConfiguration_Behavior_ConfiguratorFlyout$set_flyout(value) {
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$C = value;
    return value;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (52,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.showFlyout = function ProcessConfiguration_Behavior_ConfiguratorFlyout$showFlyout() {
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$C = Mscrm.FlyOutMenu.createFlyOut(ProcessConfiguration.Behavior.ConfiguratorFlyout.$w);
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.get_options().set_minHeight(0);
    if (!IsNull(ProcessConfiguration.Behavior.ConfiguratorFlyout.$C) && !ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.get_isDisposed() && !ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.get_visible()) {
        var $v_0 = $P_CRM('#pcc_options');
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.show($v_0);
        var $v_1 = $P_CRM('.ui-widget-overlay.ui-widget-overlay-flyout');
        if (!IsNull($v_1)) {
            $v_1.addClass('confWidgetOverlay');
            $v_1.bind('click', ProcessConfiguration.Behavior.ConfiguratorFlyout.$4T);
        }
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$3P();
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$30();
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (80,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$4T = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$4T($p0) {
    ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
    $p0.preventDefault();
    $p0.stopImmediatePropagation();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (87,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$30 = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$30() {
    var $v_0 = $P_CRM('.menuItemName');
    $v_0.wrap('<div class=\'menuItem\'/>');
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (104,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3P = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3P() {
    var $v_0 = $P_CRM(String.format('.{0},.{1}', 'sectionItem', 'sectionTitle'));
    var $v_1 = $P_CRM('.addCloseContent');
    if ($v_0.length > 0 && !$v_1.length) {
        $('.sectionTitle,.sectionItem').wrapAll('<div class="addCloseContent" />');;
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (118,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout = function ProcessConfiguration_Behavior_ConfiguratorFlyout$hideFlyout() {
    if (!IsNull(ProcessConfiguration.Behavior.ConfiguratorFlyout.$C) && !ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.get_isDisposed()) {
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.hide();
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$C.dispose();
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (136,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.createFlyOutMenuDescriptor = function ProcessConfiguration_Behavior_ConfiguratorFlyout$createFlyOutMenuDescriptor(lastEntity, entitiesInProcess, relationshipDictionary, clickHandler, isProcessClosed) {
    var $v_0 = 'sectionItem';
    if (isProcessClosed || entitiesInProcess.length >= 5) {
        $v_0 += ' flyoutSectionHide';
    }
    var $v_1 = relationshipDictionary[lastEntity];
    var $v_2 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3X(clickHandler);
    $v_2.cssClass = 'sectionTitle';
    var $v_3 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3W($v_1, entitiesInProcess, clickHandler);
    $v_3.cssClass = $v_0;
    var $v_4 = false;
    if ($v_3.menuListItems.length > 1) {
        $v_4 = true;
    }
    var $v_5 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3T(entitiesInProcess, isProcessClosed, $v_4);
    var $v_6 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3c(clickHandler);
    $v_6.cssClass = 'sectionTitle';
    var $v_7 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3b(relationshipDictionary, entitiesInProcess, clickHandler, lastEntity);
    $v_7.cssClass = $v_0;
    var $v_8 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3l(clickHandler);
    $v_8.cssClass = 'flyoutDelete';
    var $v_9 = entitiesInProcess.length < 2;
    if ($v_9) {
        $v_8.cssClass += ' flyoutSectionHide';
    }
    if (isProcessClosed || $v_9) {
        $v_6.cssClass += ' flyoutSectionHide';
    }
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$w = new Mscrm.FlyOutMenuDescriptor();
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$w.cssClass = 'flyoutContainer';
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$w.menuSections = [ $v_2, $v_5, $v_3, $v_6, $v_7, $v_8 ];
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (203,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3W = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3W($p0, $p1, $p2) {
    var $v_0 = new Mscrm.MenuSectionDescriptor();
    $v_0.menuListItems = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3V($p0, $p1);
    $v_0.clickHandler = $p2;
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (220,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3b = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3b($p0, $p1, $p2, $p3) {
    var $v_0 = new Mscrm.MenuSectionDescriptor();
    $v_0.menuListItems = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3a($p0, $p1, $p3);
    $v_0.clickHandler = $p2;
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (232,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3X = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3X($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$1K(window.LOCID_PROCESS_ADDENTITY, 'AddEntity', $p0, window.LOCID_PROCESS_ADDENTITY_TOOLTIP, false);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (245,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3T = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3T($p0, $p1, $p2) {
    var $v_0 = '';
    var $v_1 = false;
    if (!$p2) {
        $v_0 = window.LOCID_PROCESS_NORELATEDENTITIES;
        $v_1 = true;
    }
    if ($p1) {
        $v_0 = window.LOCID_PROCESS_ALREADYCLOSED;
        $v_1 = true;
    }
    if ($p0.length >= 5) {
        $v_0 = window.LOCID_PROCESS_MAXENTITIESREACHED;
        $v_1 = true;
    }
    var $v_2 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3f($v_0);
    $v_2.cssClass = 'sectionItem bpfConfFlyoutEmptySection';
    if (!$v_1) {
        $v_2.cssClass += ' flyoutSectionHide';
    }
    return $v_2;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (283,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3f = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3f($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$1K($p0, 'NoOp', function($p1_0) {
    }, '', false);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (292,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3c = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3c($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$1K(window.LOCID_PROCESS_CLOSELOOP, 'CloseLoop', $p0, window.LOCID_PROCESS_CLOSELOOP_TOOLTIP, false);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (301,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3l = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3l($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$1K(window.LOCID_PROCESS_REMOVEENTITY, 'RemoveEntity', $p0, '', true);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (313,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$1K = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$1K($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new Mscrm.MenuListItemDescriptor();
    $v_0.title = $v_0.displayName = $p0;
    $v_0.data = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3U($p1);
    if ($p4) {
        $v_0.tabIndex = '0';
    }
    if (!isNullOrEmptyString($p3)) {
        $v_0.title = $p3;
    }
    var $v_1 = new Mscrm.MenuSectionDescriptor();
    $v_1.menuListItems = [ $v_0 ];
    $v_1.clickHandler = $p2;
    return $v_1;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (340,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3U = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3U($p0) {
    var $v_0 = {};
    $v_0['Action'] = $p0;
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (354,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3V = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3V($p0, $p1) {
    var $v_0 = new Array(ProcessConfiguration.Behavior.ConfiguratorFlyout.$3g($p0, $p1) + 1);
    $p0.sort();
    var $v_1 = 0;
    for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
        var $v_4 = $p0[$v_3];
        if (Array.contains($p1, $v_4.EntityLogicalName)) {
            continue;
        }
        var $v_5 = new Mscrm.MenuListItemDescriptor();
        $v_5.id = String.format('add_{0}', $v_4.RelationshipName);
        $v_5.title = $v_5.displayName = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3h($v_4);
        $v_5.data = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3k($v_4);
        $v_5.cssClass = 'menuItemName';
        $v_5.tabIndex = '0';
        $v_0[$v_1++] = $v_5;
    }
    $v_0.sort(ProcessConfiguration.Behavior.ConfiguratorFlyout.$4K);
    var $v_2 = new Mscrm.MenuListItemDescriptor();
    $v_2.displayName = ' ';
    $v_2.cssClass = 'sentinelBorder';
    if ($p1.length < 2) {
        $v_2.cssClass += ' flyoutSectionHide';
    }
    $v_0[$v_0.length - 1] = $v_2;
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (400,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$4K = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$4K($p0, $p1) {
    var $v_0 = ($p0).displayName.toUpperCase();
    var $v_1 = ($p1).displayName.toUpperCase();
    return $v_0.localeCompare($v_1);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (415,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3g = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3g($p0, $p1) {
    var $v_0 = 0;
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];
        if (!Array.contains($p1, $v_2.EntityLogicalName)) {
            $v_0++;
        }
    }
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (439,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3a = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3a($p0, $p1, $p2) {
    var $v_0 = new Array($p1.length);
    var $v_1 = ProcessControl.Configuration.ProcessConfigurationUtility.getCloseLoopEntityList($p0, $p1, $p2);
    if (!IsNull($v_1)) {
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            var $v_4 = $v_1[$v_3];
            var $v_5 = $v_4.EntityLogicalName;
            var $v_6 = new Mscrm.MenuListItemDescriptor();
            $v_6.id = String.format('close_{0}', $v_5);
            $v_6.title = $v_6.displayName = $v_4.EntityLabel;
            $v_6.data = ProcessConfiguration.Behavior.ConfiguratorFlyout.$3Z($v_4);
            $v_6.cssClass = 'menuItemName';
            $v_6.tabIndex = '0';
            $v_0[$v_3] = $v_6;
        }
    }
    var $v_2 = new Mscrm.MenuListItemDescriptor();
    $v_2.displayName = ' ';
    $v_2.cssClass = 'sentinel';
    $v_0[$p1.length - 1] = $v_2;
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (474,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3Z = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3Z($p0) {
    var $v_0 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$2J($p0);
    $v_0['Action'] = 'CloseLoop';
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (486,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3h = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3h($p0) {
    return String.format('{0} ({1})', $p0.EntityLabel, $p0.AttributeLabel);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (496,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3k = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$3k($p0) {
    var $v_0 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$2J($p0);
    $v_0['Action'] = 'AddEntity';
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorFlyout.cs (508,3)
ProcessConfiguration.Behavior.ConfiguratorFlyout.$2J = function ProcessConfiguration_Behavior_ConfiguratorFlyout$$2J($p0) {
    var $v_0 = {};
    if (IsNull($p0)) {
        return $v_0;
    }
    $v_0['entityLogicalName'] = $p0.EntityLogicalName;
    $v_0['relationshipId'] = $p0.RelationshipId;
    $v_0['relationshipName'] = $p0.RelationshipName;
    $v_0['attributeName'] = $p0.AttributeName;
    $v_0['entityLabel'] = $p0.EntityLabel;
    return $v_0;
}


ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior = function ProcessConfiguration_Behavior_ConfiguratorUnloadBehavior() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorUnloadBehavior.cs (27,3)
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.setUnloadBehavior = function ProcessConfiguration_Behavior_ConfiguratorUnloadBehavior$setUnloadBehavior(pcView, message) {
    ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$f = pcView;
    attachWindowOnBeforeUnload(ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$4L, window);
    ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$1m = message;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ConfiguratorUnloadBehavior.cs (38,3)
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$4L = function ProcessConfiguration_Behavior_ConfiguratorUnloadBehavior$$4L($p0) {
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    if (!(IsNull(ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$f)) && !ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$f.get_isDirty()) {
        return;
    }
    $p0.rawEvent.returnValue = ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$1m;
    return ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior._warningMessage;;
}


ProcessConfiguration.Behavior.ExpandCollapseBehavior = function ProcessConfiguration_Behavior_ExpandCollapseBehavior() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (28,3)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.setBehavior = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$setBehavior() {
    if (ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$r().length > 0) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$r().bind('click', ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler);
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$r().bind('keyup', ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpExpandHandler);
    }
    if (ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$n().length > 0) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$n().bind('click', ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler);
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$n().bind('keyup', ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpCollapseHandler);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (50,3)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpCollapseHandler = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$keyUpCollapseHandler(jQueryEvent) {
    switch (jQueryEvent.which) {
        case 13:
            ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler(jQueryEvent);
            break;
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (64,3)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpExpandHandler = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$keyUpExpandHandler(jQueryEvent) {
    switch (jQueryEvent.which) {
        case 13:
            ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler(jQueryEvent);
            break;
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (78,3)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$expandHandler(jQueryEvent) {
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2E().removeClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().removeClass('expanded');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2R().removeClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2c().slideDown('fast');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$r().hide();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$n().show();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$n().focus();
    if (IsNull(jQueryEvent)) {
        return;
    }
    jQueryEvent.preventDefault();
    jQueryEvent.stopPropagation();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (99,3)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$collapseHandler(jQueryEvent) {
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2E().addClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().addClass('expanded');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2R().addClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2c().slideUp('fast');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$n().hide();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$r().show();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$r().focus();
    if (IsNull(jQueryEvent)) {
        return;
    }
    jQueryEvent.preventDefault();
    jQueryEvent.stopPropagation();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (123,4)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2c = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$get_$2c() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1E)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1E = $P_CRM('#processDetailArea');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1E;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (138,4)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$r = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$get_$r() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1B)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1B = $P_CRM('#expandContainer');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1B;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (153,4)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$n = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$get_$n() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$16)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$16 = $P_CRM('#collapseContainer');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$16;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (168,4)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2E = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$get_$2E() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$17)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$17 = $P_CRM('#pcc');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$17;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (183,4)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$get_$2s() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1H)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1H = $P_CRM('.pc_en_slc');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1H;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ExpandCollapseBehavior.cs (198,4)
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2R = function ProcessConfiguration_Behavior_ExpandCollapseBehavior$get_$2R() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1C)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1C = $P_CRM('#includedEntities');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1C;
}


ProcessConfiguration.Behavior.ResizeBehavior = function ProcessConfiguration_Behavior_ResizeBehavior() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ResizeBehavior.cs (19,3)
ProcessConfiguration.Behavior.ResizeBehavior.setResizeBehavior = function ProcessConfiguration_Behavior_ResizeBehavior$setResizeBehavior() {
    $P_CRM(window).resize(ProcessConfiguration.Behavior.ResizeBehavior.$4w);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Behavior\ResizeBehavior.cs (24,3)
ProcessConfiguration.Behavior.ResizeBehavior.$4w = function ProcessConfiguration_Behavior_ResizeBehavior$$4w($p0) {
    var $v_0 = $P_CRM('#content_pcc_tabs');
    if (IsNull($v_0)) {
        return;
    }
    $v_0.removeAttr('style');
}


Type.registerNamespace('ProcessConfiguration.Utility');

ProcessConfiguration.Utility.LabelDictionary = function ProcessConfiguration_Utility_LabelDictionary() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\LabelDictionary.cs (30,3)
ProcessConfiguration.Utility.LabelDictionary.insertIfNotPresent = function ProcessConfiguration_Utility_LabelDictionary$insertIfNotPresent(logicalName, localizedLabel) {
    if (((logicalName) in ProcessConfiguration.Utility.LabelDictionary.$v)) {
        return;
    }
    ProcessConfiguration.Utility.LabelDictionary.$v[logicalName] = localizedLabel;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\LabelDictionary.cs (45,3)
ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent = function ProcessConfiguration_Utility_LabelDictionary$getLabelIfPresent(logicalName) {
    var $v_0 = logicalName;
    if (((logicalName) in ProcessConfiguration.Utility.LabelDictionary.$v)) {
        $v_0 = ProcessConfiguration.Utility.LabelDictionary.$v[logicalName];
    }
    return $v_0;
}


Type.registerNamespace('ProcessConfiguration.ViewModel');

ProcessConfiguration.ViewModel.EntityMetadataInfo = function ProcessConfiguration_ViewModel_EntityMetadataInfo(jsonWrapper) {
    this.$X_0 = jsonWrapper;
}
ProcessConfiguration.ViewModel.EntityMetadataInfo.prototype = {
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\EntityMetadataInfo.cs (37,4)
    get_entityFields: function ProcessConfiguration_ViewModel_EntityMetadataInfo$get_entityFields() {
        return this.$X_0.Fields;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\tools\processconfiguration\Utility\EntityMetadataInfo.cs (45,3)
    entityAttributeList: function ProcessConfiguration_ViewModel_EntityMetadataInfo$entityAttributeList() {
        if (IsNull(this.$19_0)) {
            this.$19_0 = new Array(0);
            for (var $v_0 = 0; $v_0 < this.$X_0.Fields.length; $v_0++) {
                var $v_1 = new Mscrm.EnumOptionJsonWrapper();
                $v_1.Value = $v_0;
                $v_1.Label = this.$X_0.Fields[$v_0].Label.Description;
                Array.add(this.$19_0, $v_1);
            }
        }
        return this.$19_0;
    },
    
    $X_0: null,
    $19_0: null
}


ProcessControl.Configuration.ClientDataJsonWrapper.registerClass('ProcessControl.Configuration.ClientDataJsonWrapper');
ProcessControl.Configuration.FieldMetadataJsonWrapper.registerClass('ProcessControl.Configuration.FieldMetadataJsonWrapper');
ProcessControl.Configuration.LabelJsonWrapper.registerClass('ProcessControl.Configuration.LabelJsonWrapper');
ProcessControl.Configuration.ProcessJsonWrapper.registerClass('ProcessControl.Configuration.ProcessJsonWrapper');
ProcessControl.Configuration.EntityRelationshipMetadataWrapper.registerClass('ProcessControl.Configuration.EntityRelationshipMetadataWrapper');
ProcessControl.Configuration.Initializer.registerClass('ProcessControl.Configuration.Initializer');
ProcessControl.Configuration.ConfiguratorActions.registerClass('ProcessControl.Configuration.ConfiguratorActions');
ProcessControl.Configuration.SystemStepType.registerClass('ProcessControl.Configuration.SystemStepType');
ProcessControl.Configuration.Constants.registerClass('ProcessControl.Configuration.Constants');
ProcessControl.Configuration.SystemStepParams.registerClass('ProcessControl.Configuration.SystemStepParams');
ProcessControl.Configuration.CssClass.registerClass('ProcessControl.Configuration.CssClass');
ProcessControl.Configuration.HtmlTemplate.registerClass('ProcessControl.Configuration.HtmlTemplate');
ProcessControl.Configuration.AddChildControlBehavior.registerClass('ProcessControl.Configuration.AddChildControlBehavior', Mscrm.CrmUIBehavior);
ProcessControl.Configuration.AddStageBehavior.registerClass('ProcessControl.Configuration.AddStageBehavior', ProcessControl.Configuration.AddChildControlBehavior);
ProcessControl.Configuration.AddStepBehavior.registerClass('ProcessControl.Configuration.AddStepBehavior', ProcessControl.Configuration.AddChildControlBehavior);
ProcessControl.Configuration.EmptyView.registerClass('ProcessControl.Configuration.EmptyView', null, ProcessControl.Configuration.IProcessControlView);
ProcessControl.Configuration.StepControlViewBase.registerClass('ProcessControl.Configuration.StepControlViewBase', ProcessControl.Configuration.ProcessControlViewBase.$$(Microsoft.Crm.Workflow.ObjectModel.StepBase, ProcessControl.Configuration.EmptyView), ProcessControl.Configuration.IProcessControlView);
ProcessControl.Configuration.ProcessControlStepView.registerClass('ProcessControl.Configuration.ProcessControlStepView', ProcessControl.Configuration.ProcessControlViewBase.$$(Microsoft.Crm.Workflow.ObjectModel.StepStep, ProcessControl.Configuration.StepControlViewBase));
ProcessControl.Configuration.StepHoverBehavior.registerClass('ProcessControl.Configuration.StepHoverBehavior', ProcessControl.Configuration.HoverBehavior.$$(ProcessControl.Configuration.ProcessControlStepView));
ProcessControl.Configuration.ProcessControlStageView.registerClass('ProcessControl.Configuration.ProcessControlStageView', ProcessControl.Configuration.ProcessControlExtensibleView.$$(ProcessControl.Configuration.ProcessControlStepView, Microsoft.Crm.Workflow.ObjectModel.StageStep));
ProcessControl.Configuration.StageHoverBehavior.registerClass('ProcessControl.Configuration.StageHoverBehavior', ProcessControl.Configuration.HoverBehavior.$$(ProcessControl.Configuration.ProcessControlStageView));
ProcessControl.Configuration.MoveBehavior.registerClass('ProcessControl.Configuration.MoveBehavior', Mscrm.CrmUIBehavior);
ProcessControl.Configuration.StageFocusBehavior.registerClass('ProcessControl.Configuration.StageFocusBehavior', ProcessControl.Configuration.FocusBehaviorBase.$$(ProcessControl.Configuration.ProcessControlStageView));
ProcessControl.Configuration.StageFocusEventBubbleBehavior.registerClass('ProcessControl.Configuration.StageFocusEventBubbleBehavior', ProcessControl.Configuration.StageFocusBehavior);
ProcessControl.Configuration.StageFocusEventCapturingBehavior.registerClass('ProcessControl.Configuration.StageFocusEventCapturingBehavior', ProcessControl.Configuration.StageFocusBehavior);
ProcessControl.Configuration.StepFocusBehavior.registerClass('ProcessControl.Configuration.StepFocusBehavior', ProcessControl.Configuration.FocusBehaviorBase.$$(ProcessControl.Configuration.ProcessControlStepView));
ProcessControl.Configuration.StepFocusEventBubbleBehavior.registerClass('ProcessControl.Configuration.StepFocusEventBubbleBehavior', ProcessControl.Configuration.StepFocusBehavior);
ProcessControl.Configuration.StepFocusEventCapturingBehavior.registerClass('ProcessControl.Configuration.StepFocusEventCapturingBehavior', ProcessControl.Configuration.StepFocusBehavior);
ProcessControl.Configuration.StageBuilder.registerClass('ProcessControl.Configuration.StageBuilder', ProcessControl.Configuration.ProcessBuilder.$$(Microsoft.Crm.Workflow.ObjectModel.StepBase));
ProcessControl.Configuration.StepBuilder.registerClass('ProcessControl.Configuration.StepBuilder', ProcessControl.Configuration.ProcessBuilder.$$(Microsoft.Crm.Workflow.ObjectModel.StepBase));
ProcessControl.Configuration.ProcessEventAggregator.registerClass('ProcessControl.Configuration.ProcessEventAggregator', Mscrm.CrmUIControl, ProcessControl.Configuration.IEventAggregator);
ProcessControl.Configuration.EventNames.registerClass('ProcessControl.Configuration.EventNames');
ProcessControl.Configuration.KeyCode.registerClass('ProcessControl.Configuration.KeyCode');
ProcessControl.Configuration.BpfMenuActions.registerClass('ProcessControl.Configuration.BpfMenuActions');
ProcessControl.Configuration.BpfDataUtility.registerClass('ProcessControl.Configuration.BpfDataUtility');
ProcessControl.Configuration.EntityTabsControl.registerClass('ProcessControl.Configuration.EntityTabsControl', Mscrm.FormInputControl.Tabs.TabsControl);
ProcessControl.Configuration.ProcessConfigurationUtility.registerClass('ProcessControl.Configuration.ProcessConfigurationUtility');
ProcessControl.Configuration.ProcessSaveEventArgs.registerClass('ProcessControl.Configuration.ProcessSaveEventArgs');
ProcessControl.Configuration.ProcessSaveStatus.registerClass('ProcessControl.Configuration.ProcessSaveStatus');
ProcessControl.Configuration.SuccessStatusReason.registerClass('ProcessControl.Configuration.SuccessStatusReason');
ProcessControl.Configuration.FailureStatusReason.registerClass('ProcessControl.Configuration.FailureStatusReason');
ProcessControl.Configuration.StageCategory.registerClass('ProcessControl.Configuration.StageCategory');
ProcessControl.Configuration.EmptyJsonWrapper.registerClass('ProcessControl.Configuration.EmptyJsonWrapper');
ProcessControl.Configuration.EmptyViewModel.registerClass('ProcessControl.Configuration.EmptyViewModel', null, Sys.IDisposable);
ProcessControl.Configuration.ProcessControlEntityView.registerClass('ProcessControl.Configuration.ProcessControlEntityView', ProcessControl.Configuration.ProcessControlExtensibleView.$$(ProcessControl.Configuration.ProcessControlStageView, Microsoft.Crm.Workflow.ObjectModel.EntityStep));
ProcessControl.Configuration.ProcessControlView.registerClass('ProcessControl.Configuration.ProcessControlView', ProcessControl.Configuration.ProcessControlExtensibleView.$$(ProcessControl.Configuration.ProcessControlEntityView, Microsoft.Crm.Workflow.ObjectModel.WorkflowStep));
ProcessControl.Configuration.StepFieldControlView.registerClass('ProcessControl.Configuration.StepFieldControlView', ProcessControl.Configuration.StepControlViewBase);
ProcessControl.Configuration.SystemStepControlView.registerClass('ProcessControl.Configuration.SystemStepControlView', ProcessControl.Configuration.StepControlViewBase);
ProcessConfiguration.Behavior.AddEntityBehavior.registerClass('ProcessConfiguration.Behavior.AddEntityBehavior', ProcessControl.Configuration.AddChildControlBehavior);
ProcessConfiguration.Behavior.ConfiguratorFlyout.registerClass('ProcessConfiguration.Behavior.ConfiguratorFlyout');
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.registerClass('ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior');
ProcessConfiguration.Behavior.ExpandCollapseBehavior.registerClass('ProcessConfiguration.Behavior.ExpandCollapseBehavior');
ProcessConfiguration.Behavior.ResizeBehavior.registerClass('ProcessConfiguration.Behavior.ResizeBehavior');
ProcessConfiguration.Utility.LabelDictionary.registerClass('ProcessConfiguration.Utility.LabelDictionary');
ProcessConfiguration.ViewModel.EntityMetadataInfo.registerClass('ProcessConfiguration.ViewModel.EntityMetadataInfo');
ProcessControl.Configuration.Initializer.$H = null;
ProcessControl.Configuration.ConfiguratorActions.activate = 'ActivateBusinessProcess';
ProcessControl.Configuration.ConfiguratorActions.deactivate = 'DeactivateBusinessProcess';
ProcessControl.Configuration.ConfiguratorActions.update = 'UpdateProcess';
ProcessControl.Configuration.ConfiguratorActions.deleteProcess = 'DeleteBusinessProcess';
ProcessControl.Configuration.ConfiguratorActions.fetchMetadata = 'GetEntityAndRelationshipMetadata';
ProcessControl.Configuration.ConfiguratorActions.saveAs = 'SaveAsBpf';
ProcessControl.Configuration.SystemStepType.identifyAccount = 'IdentifyAccount';
ProcessControl.Configuration.SystemStepType.identifyCase = 'IdentifyCase';
ProcessControl.Configuration.SystemStepType.identifyContact = 'IdentifyContact';
ProcessControl.Configuration.SystemStepType.identifyCustomer = 'IdentifyCustomer';
ProcessControl.Configuration.SystemStepType.resolve = 'Resolve';
ProcessControl.Configuration.SystemStepType.solution = 'Solution';
ProcessControl.Configuration.SystemStepType.undefined = '';
ProcessControl.Configuration.Constants.id = 'pcc';
ProcessControl.Configuration.Constants.expandContainerSelector = '#expandContainer';
ProcessControl.Configuration.Constants.collapseContainerSelector = '#collapseContainer';
ProcessControl.Configuration.Constants.tabControlId = 'pcc_tabs';
ProcessControl.Configuration.Constants.entityTabDataIdFormat = 'pcc_tab_{0}';
ProcessControl.Configuration.Constants.entityControlIdFormat = 'pcc_tab_entity_{0}';
ProcessControl.Configuration.Constants.eventAggregatorId = 'pcc_event';
ProcessControl.Configuration.Constants.badData = 'for(;;);';
ProcessControl.Configuration.Constants.upDownArrowsDivId = 'pcc_updown_arrows';
ProcessControl.Configuration.Constants.upArrowId = 'pcc_up_img';
ProcessControl.Configuration.Constants.downArrowId = 'pcc_down_img';
ProcessControl.Configuration.Constants.upDownArrowsTextId = 'pcc_updown_arrows_text';
ProcessControl.Configuration.Constants.maxEntitiesPerProcess = 5;
ProcessControl.Configuration.Constants.tabHeaderId = 'header_pcc_tabs';
ProcessControl.Configuration.Constants.optionsId = 'pcc_options';
ProcessControl.Configuration.Constants.workflowObjType = 4703;
ProcessControl.Configuration.Constants.$u = -1;
ProcessControl.Configuration.Constants.$1O = -2;
ProcessControl.Configuration.Constants.saveSuccessMessage = 'success';
ProcessControl.Configuration.Constants.bpfCategory = 4;
ProcessControl.Configuration.Constants.maxStepInStage = 30;
ProcessControl.Configuration.Constants.maxStagePerEntity = 30;
ProcessControl.Configuration.Constants.deleteKeyCode = 46;
ProcessControl.Configuration.SystemStepParams.identifyContactControlId = 'parentcontactid';
ProcessControl.Configuration.SystemStepParams.identifyAccountControlId = 'parentaccountid';
ProcessControl.Configuration.SystemStepParams.identifyCustomerControlId = 'customer';
ProcessControl.Configuration.SystemStepParams.identifyCaseControlId = 'relatedcases';
ProcessControl.Configuration.SystemStepParams.solutionControlId = 'CaseResearch_LinkControl';
ProcessControl.Configuration.SystemStepParams.resolveControlId = 'IncidentResolution_LinkControl';
ProcessControl.Configuration.SystemStepParams.identifyCustomerDataField = 'customerid';
ProcessControl.Configuration.SystemStepParams.identifyCaseDataField = 'existingcase';
ProcessControl.Configuration.SystemStepParams.identifyContactClassId = '270BD3DB-D9AF-4782-9025-509E298DEC0A';
ProcessControl.Configuration.SystemStepParams.identifyAccountClassId = '270BD3DB-D9AF-4782-9025-509E298DEC0A';
ProcessControl.Configuration.SystemStepParams.identifyCustomerClassId = '270BD3DB-D9AF-4782-9025-509E298DEC0A';
ProcessControl.Configuration.SystemStepParams.identifyCaseClassId = '270BD3DB-D9AF-4782-9025-509E298DEC0A';
ProcessControl.Configuration.SystemStepParams.solutionClassId = 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D';
ProcessControl.Configuration.SystemStepParams.resolveClassId = 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D';
ProcessControl.Configuration.SystemStepParams.identifyContactParams = '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74220}</InlineViewIds></parameters>';
ProcessControl.Configuration.SystemStepParams.identifyAccountParams = '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{f9e54d49-0c76-4cbd-979b-5fe94b496be0}</InlineViewIds></parameters>';
ProcessControl.Configuration.SystemStepParams.identifyCustomerParams = '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Contact</EntityLogicalName><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74228},{f9e54d49-0c76-4cbd-979b-5fe94b496beb}</InlineViewIds></parameters>';
ProcessControl.Configuration.SystemStepParams.identifyCaseParams = '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Incident</EntityLogicalName><InlineViewIds>{06D2061B-703E-465B-B8AD-FD69C6157127}</InlineViewIds></parameters>';
ProcessControl.Configuration.SystemStepParams.solutionParams = '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>';
ProcessControl.Configuration.SystemStepParams.resolveParams = '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>';
ProcessControl.Configuration.HtmlTemplate.$2l = ProcessControl.Configuration.HtmlTemplate.$M('<li id=\'{0}\' tabIndex=\'0\'><div class=\'{1}\'>', [ '{0}', 'pc_stc' ]);
ProcessControl.Configuration.HtmlTemplate.$28 = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'><div class=\'{1}\'><div class=\'{2}\' style=\'display: {3};\'>&nbsp;</div><div class=\'{4}\' style=\'display: {5};\'>&nbsp;</div></div></span>', [ 'pc_st_arrowc', 'pc_arrow', 'pc_arrow_hasPrev', '{0}', 'pc_arrow_hasNext', '{1}' ]);
ProcessControl.Configuration.HtmlTemplate.$2k = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'><span class=\'{1}\'><div id=\'{2}\' tabIndex=\'0\' data-inline=\'true\' {8}=\'{9}\'><div class=\'{3}\'>{4}</div></div></span><span class=\'{1}\'><div id=\'{6}\' tabIndex=\'0\' data-inline=\'true\' {8}=\'{9}\'><div class=\'{3} pc_inline_value\'>{4}</div></div></span><span class=\'{5}\'><ul id=\'{7}\'>', [ '{0}', ProcessControl.Configuration.HtmlTemplate.$M('pc_en_{0}_body', [ 'stage' ]), '{1}', 'ms-crm-Inline-Value', '{2}', 'pc_steplistc', '{3}', '{4}', Mscrm.InlineEditConstants.HtmlAttributeForLayout, '3' ]);
ProcessControl.Configuration.HtmlTemplate.$2j = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'><div class=\'{1}\'><img class=\'{2}\' tabIndex=\'0\' src=\'{3}\' title=\'{4}\' alt=\'{5}\' id=\'{6}\'></div></span>', [ 'pc_stg_dc', 'pc_stg_del', '{0}', '{1}', '{2}', '{3}', '{4}' ]);
ProcessControl.Configuration.HtmlTemplate.$2r = ProcessControl.Configuration.HtmlTemplate.$M('<li class=\'{0}\' id=\'{1}\' tabIndex=\'-1\'>', [ 'pc_step', '{0}' ]);
ProcessControl.Configuration.HtmlTemplate.$2p = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'>', [ 'pc_step_namecontrol_container' ]);
ProcessControl.Configuration.HtmlTemplate.$2o = '</span>';
ProcessControl.Configuration.HtmlTemplate.$2q = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'><div data-inline=\'true\' id=\'{1}\' tabindex=\'0\' {4}=\'{5}\'><div class=\'{2}\'>{3}</div></div></span>', [ ProcessControl.Configuration.HtmlTemplate.$M('pc_en_{0}_body', [ 'step' ]), '{0}', 'ms-crm-Inline-Value', '{1}', Mscrm.InlineEditConstants.HtmlAttributeForLayout, '3' ]);
ProcessControl.Configuration.HtmlTemplate.$2n = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'><div data-inline=\'true\' id=\'{1}\' tabindex=\'0\'><div class=\'{2}\'>{3}</div></div></span>', [ ProcessControl.Configuration.HtmlTemplate.$M('pc_en_{0}_body', [ 'field' ]), '{0}', 'ms-crm-Inline-Value', '{1}' ]);
ProcessControl.Configuration.HtmlTemplate.$2m = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'><div class=\'{1}\'><img src=\'{2}\' class=\'{3}\' tabindex=\'0\' title=\'{4}\' alt=\'{5}\' id=\'{6}\'/></div></span>', [ 'pc_step_dc', 'pc_step_del', '{0}', '{1}', '{2}', '{3}', '{4}' ]);
ProcessControl.Configuration.HtmlTemplate.$2f = ProcessControl.Configuration.HtmlTemplate.$M('<span class=\'{0}\'><div class=\'{1}\'><img src=\'{2}\' tabindex=\'0\' title=\'{3}\' alt=\'{4}\' id=\'{5}\'/></div></span>', [ 'pc_step_req', '{0}', '{1}', '{2}', '{3}', '{4}' ]);
ProcessControl.Configuration.HtmlTemplate.$2B = '<img src=\'/_imgs/ProcessControl/6x8_breadcrumb_config.png\' id = \'{0}\' class=\'bpfConfBreadcrumbImg\'>';
ProcessControl.Configuration.HtmlTemplate.$2Z = '<a id=\'pcc_options\' class=\'pcc_options\' title=\'{0}\'><img src=\'/_imgs/ProcessControl/23_addminus_config.png\' id=\'pcc_options_img\' class=\'bpfConfOptionsImg\' alt=\'{0}\' title=\'{0}\' tabindex=\'0\'>{1}</a>';
ProcessControl.Configuration.StepHoverBehavior.$x = null;
ProcessControl.Configuration.MoveBehavior.$1r = -1;
ProcessControl.Configuration.StageFocusBehavior.$Y = null;
ProcessControl.Configuration.StepFocusBehavior.$e = null;
ProcessControl.Configuration.ProcessEventAggregator.$1A = null;
ProcessControl.Configuration.EventNames.stageFocusChanged = 'stageselected';
ProcessControl.Configuration.EventNames.stepFocusChanged = 'stepselected';
ProcessControl.Configuration.EventNames.click = 'click';
ProcessControl.Configuration.EventNames.focus = 'focus';
ProcessControl.Configuration.EventNames.focusIn = 'focusin';
ProcessControl.Configuration.EventNames.focusOut = 'focusout';
ProcessControl.Configuration.EventNames.mouseOver = 'mouseover';
ProcessControl.Configuration.EventNames.mouseEnter = 'mouseenter';
ProcessControl.Configuration.EventNames.mouseLeave = 'mouseleave';
ProcessControl.Configuration.EventNames.mouseOut = 'mouseout';
ProcessControl.Configuration.EventNames.stepDeleted = 'stepdeleted';
ProcessControl.Configuration.EventNames.keyDown = 'keydown';
ProcessControl.Configuration.EventNames.keyUp = 'keyup';
ProcessControl.Configuration.EventNames.change = 'change';
ProcessControl.Configuration.KeyCode.sKey = 83;
ProcessControl.Configuration.BpfMenuActions.$7 = null;
ProcessControl.Configuration.ProcessSaveStatus.success = 0;
ProcessControl.Configuration.ProcessSaveStatus.failure = 1;
ProcessControl.Configuration.SuccessStatusReason.notIsDirty = 0;
ProcessControl.Configuration.SuccessStatusReason.success = 1;
ProcessControl.Configuration.FailureStatusReason.validation = 0;
ProcessControl.Configuration.FailureStatusReason.failure = 1;
ProcessControl.Configuration.StageCategory.$W = null;
ProcessControl.Configuration.StageCategory.defaultCategory = '-1';
ProcessControl.Configuration.ProcessControlView.$z = '';
ProcessControl.Configuration.ProcessControlView.$1D = null;
ProcessControl.Configuration.ProcessControlView.$1I = false;
ProcessControl.Configuration.ProcessControlView.$1F = null;
ProcessConfiguration.Behavior.ConfiguratorFlyout.$C = null;
ProcessConfiguration.Behavior.ConfiguratorFlyout.$w = null;
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$f = null;
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$1m = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1E = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1B = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$16 = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$17 = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1H = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$1C = null;
ProcessConfiguration.Utility.LabelDictionary.$v = {};
