Type.registerNamespace('ProcessControl.Configuration');

ProcessControl.Configuration.PageLayoutWrapper = function() {}


ProcessControl.Configuration.SystemStep = function() {}
ProcessControl.Configuration.SystemStep.prototype = {
    leadIdentifyContact: 0, 
    identifyAccount: 1, 
    identifyCustomer: 2, 
    identifyCase: 3, 
    solution: 4, 
    resolve: 5, 
    incidentIdentifyContact: 6
}
ProcessControl.Configuration.SystemStep.registerEnum('ProcessControl.Configuration.SystemStep', false);


ProcessControl.Configuration.ClientDataJsonWrapper = function() {
    this.EntityMetadata = '';
}


ProcessControl.Configuration.FieldMetadataJsonWrapper = function() {
    this.LogicalName = '';
    this.Label = null;
}


ProcessControl.Configuration.LabelJsonWrapper = function() {
    this.LCID = -1;
    this.Description = '';
}


ProcessControl.Configuration.ProcessJsonWrapper = function() {
    this.ProcessJson = '{}';
    this.Name = null;
    this.Description = null;
}


ProcessControl.Configuration.IConditionBuilder = function() {}
ProcessControl.Configuration.IConditionBuilder.registerInterface('ProcessControl.Configuration.IConditionBuilder');


ProcessControl.Configuration.IEventAggregator = function() {}
ProcessControl.Configuration.IEventAggregator.registerInterface('ProcessControl.Configuration.IEventAggregator');


ProcessControl.Configuration.IRelationshipPickerDialogArguments = function() {}
ProcessControl.Configuration.IRelationshipPickerDialogArguments.registerInterface('ProcessControl.Configuration.IRelationshipPickerDialogArguments');


ProcessControl.Configuration.IExtensibleProcessControlView$2 = function() {}
ProcessControl.Configuration.IExtensibleProcessControlView$2.$$ = function(TChildView, TChildViewModel) {
    var $$cn = 'IExtensibleProcessControlView$2' + '$' + TChildView.getName().replace(/\./g, '_') + '$' + TChildViewModel.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
        };
        $$ccr.registerInterface('ProcessControl.Configuration.' + $$cn);
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.IExtensibleProcessControlView$2.registerInterface('ProcessControl.Configuration.IExtensibleProcessControlView$2');


ProcessControl.Configuration.IProcessControlView = function() {}
ProcessControl.Configuration.IProcessControlView.registerInterface('ProcessControl.Configuration.IProcessControlView');


ProcessControl.Configuration.IProcessControlViewBase$1 = function() {}
ProcessControl.Configuration.IProcessControlViewBase$1.$$ = function(TViewModel) {
    var $$cn = 'IProcessControlViewBase$1' + '$' + TViewModel.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
        };
        $$ccr.registerInterface('ProcessControl.Configuration.' + $$cn);
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.IProcessControlViewBase$1.registerInterface('ProcessControl.Configuration.IProcessControlViewBase$1');


ProcessControl.Configuration.EntityRelationshipMetadataWrapper = function() {
}
ProcessControl.Configuration.EntityRelationshipMetadataWrapper.prototype = {
    ReferencingEntityLogicalName: null,
    ReferencedEntityLogicalName: null,
    ReferencingEntityLabel: null,
    ReferencedEntityLabel: null,
    RelationshipId: null,
    RelationshipName: null,
    RelationshipType: null,
    AttributeLabel: null,
    AttributeName: null
}


ProcessControl.Configuration.EntityMetadataJsonWrapper = function() {
}
ProcessControl.Configuration.EntityMetadataJsonWrapper.prototype = {
    Fields: null,
    EntityMetadataId: ''
}


ProcessControl.Configuration.SourceData = function() {
}
ProcessControl.Configuration.SourceData.create = function(EntityName, DisplayText, ControlType) {
    var $v_0 = new ProcessControl.Configuration.SourceData();
    $v_0.$x_0 = EntityName;
    $v_0.$2B_0 = DisplayText;
    $v_0.$g_0 = ControlType;
    return $v_0;
}
ProcessControl.Configuration.SourceData.prototype = {
    $2B_0: null,
    
    get_displayText: function() {
        return this.$2B_0;
    },
    
    set_displayText: function(value) {
        this.$2B_0 = value;
        return value;
    },
    
    $x_0: null,
    
    get_entityName: function() {
        return this.$x_0;
    },
    
    set_entityName: function(value) {
        this.$x_0 = value;
        return value;
    },
    
    $1F_0: null,
    
    get_relationshipName: function() {
        return this.$1F_0;
    },
    
    set_relationshipName: function(value) {
        this.$1F_0 = value;
        return value;
    },
    
    $2E_0: null,
    
    get_relatedAttributeName: function() {
        return this.$2E_0;
    },
    
    set_relatedAttributeName: function(value) {
        this.$2E_0 = value;
        return value;
    },
    
    $g_0: 0,
    
    get_controlType: function() {
        return this.$g_0;
    },
    
    set_controlType: function(value) {
        this.$g_0 = value;
        return value;
    }
}


ProcessControl.Configuration.ProcessControlPageView = function(element) {
    ProcessControl.Configuration.ProcessControlPageView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlPageView.prototype = {
    
    renderView: function() {
        this.$9C_6();
        this.renderProcessControlViewBase();
        this.bindEvents();
    },
    
    $9C_6: function() {
        var $v_0 = String.format('{0}_name', this.get_elementWrapper().get(0).id);
        var $v_1 = this.get_elementWrapper().find('.stage-name');
        var $v_2 = {};
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), (this.get_dataContext()).get_pageLayoutId());
        $v_2['value'] = CrmEncodeDecode.CrmHtmlEncode(CrmEncodeDecode.CrmHtmlEncode($v_3.get_description()));
        this._stageNameView = Mscrm.InlineControlFactory.createInlineTextBoxControlForDom($v_1, $v_0, 100, $v_2, 'pcc', 'normal');
        this._stageNameView.get_dataContext().set_emptyValuePlaceholder(window.LOCID_PROCESS_NEWPAGETEXTKEY);
        this._stageNameView.initializeAndRenderEditView();
        this.fixStageControl($v_3.get_description(), this._stageNameView);
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this._stageNameView);
        this._stageNameView.get_chromeElement().bind('attribute-changed', this.$$d_onStageNameChanged);
    },
    
    getDefaultStageNameKey: function() {
        return window.LOCID_PROCESS_NEWPAGETEXTKEY;
    }
}


ProcessControl.Configuration.Initializer = function() {
}
ProcessControl.Configuration.Initializer.initialize = function() {
    ProcessControl.Configuration.Initializer.$9w();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.setBehavior();
    var $v_0 = new ProcessConfiguration.InitializationContext();
    ProcessControl.Configuration.Initializer.$93($v_0);
    ProcessControl.Configuration.Initializer.$90($v_0);
    ProcessConfiguration.Behavior.ResizeBehavior.setResizeBehavior();
    if ($v_0.get_businessProcessFlowModel().get_workflowBusinessProcessType() === 1) {
        ProcessConfiguration.Behavior.ShowImageUploaderBehavior.get_instance().setBehavior($v_0.get_businessProcessFlowModel().get_workflowEntityId());
    }
    ProcessControl.Configuration.Initializer.$7l();
    ProcessControl.Configuration.Initializer.initializeScrollbar();
}
ProcessControl.Configuration.Initializer.initializeScrollbar = function() {
    if (Mscrm.CrmBrowser.get_currentBrowser().get_agent() === 1) {
        $P_CRM('body').attr('scroll', 'yes');
    }
}
ProcessControl.Configuration.Initializer.get_isProcessUnificationDebugMode = function() {
    var $v_0 = Mscrm.CrmUri.create(window.location.href).get_query()['IsProcessUnificationDebugMode'];
    if (!IsNull($v_0)) {
        if ($v_0.toString().trim().toLowerCase() === 'true') {
            return true;
        }
    }
    return false;
}
ProcessControl.Configuration.Initializer.$93 = function($p0) {
    Mscrm.BusinessRules.BusinessRuleInitializer.initializeViewContainerIds(null, 'bpfConfContent', 'bpfConfFooter');
    Mscrm.BusinessRules.BusinessRuleInitializer.set_readOnly(ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly());
    Mscrm.BusinessRules.Views.ConditionReadToolBarView.set_bodyViewContainerId('bpfConfContent');
    Mscrm.BusinessRules.BusinessRuleManager.get_instance().set_rootWorkflowStep($p0.get_businessProcessFlowModel());
    if (Mscrm.BusinessRules.BusinessRuleManager.get_instance().get_rootWorkflowStep().get_workflowBusinessProcessType() === 1) {
        Mscrm.BusinessRules.BusinessRuleInitializer.set_editorType(4);
    }
    else {
        Mscrm.BusinessRules.BusinessRuleInitializer.set_editorType(3);
    }
}
ProcessControl.Configuration.Initializer.$90 = function($p0) {
    var $v_0 = new ProcessConfiguration.Models.SystemControlMetadataModel();
    var $v_1 = ProcessControl.Configuration.Initializer.initializeMetadataModelFactory($v_0);
    var $v_2 = ProcessControl.Configuration.Initializer.$9A($p0, $v_1);
    var $v_3 = ProcessControl.Configuration.Initializer.$92($p0);
    var $v_4 = ProcessControl.Configuration.Initializer.$9W($v_3);
    var $v_5 = ProcessControl.Configuration.Initializer.$9Q($v_3, $v_0);
    var $v_6 = new Mscrm.Proxies.JQueryProxy();
    var $v_7 = new ProcessConfiguration.Behavior.BehaviorsFactory();
    var $v_8 = ProcessControl.Configuration.Initializer.$9U($v_6, $v_7);
    var $v_9 = ProcessControl.Configuration.Initializer.$99($v_6);
    var $v_A = new Mscrm.Proxies.ImageStripProxy();
    var $v_B = ProcessControl.Configuration.Initializer.$6U($v_6, $v_A);
    var $v_C = ProcessControl.Configuration.Initializer.$94($v_6, $v_B);
    var $v_D = ProcessControl.Configuration.Initializer.$9P($v_6, $v_C, $v_B, $v_9, $p0);
    var $v_E = ProcessControl.Configuration.Initializer.$9K($v_6, $v_C, $v_D, $v_9, $v_B, $v_A, $p0);
    var $v_F = ProcessControl.Configuration.Initializer.$9V($v_6, $v_8, $v_7, $v_D, $v_E);
    var $v_G = $v_4.createProcessConfigurationViewModel($p0, $v_2, $v_5);
    $v_G.initialize();
    var $v_H = $v_F.createProcessConfigurationView($v_G);
    $v_H.initialize();
    ProcessControl.Configuration.Initializer.$9G($v_2, $v_F);
    var $v_I = $v_H.get_processControlViewAdapter().get_instance();
    ProcessControl.Configuration.BpfMenuActions.$R = $v_I;
    ProcessControl.Configuration.BpfMenuActions.bindMenuActions();
    ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.setUnloadBehavior($v_I, window.LOCID_PROCESS_UNSAVED_MESSAGE);
    $v_I.updateInitialJSON();
}
ProcessControl.Configuration.Initializer.initializeMetadataModelFactory = function(systemControlMetadataModel) {
    var $v_0 = new ProcessConfiguration.Models.MetadataModelFactory();
    $v_0.set_systemControlMetadataModel(systemControlMetadataModel);
    systemControlMetadataModel.set_metadataModelFactory($v_0);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9G = function($p0, $p1) {
    ProcessConfiguration.Utility.RelationshipFilteringModule.get_instance().set_metadataService($p0);
    ProcessConfiguration.Utility.RelationshipFilteringModule.get_instance().set_viewFactory($p1);
}
ProcessControl.Configuration.Initializer.$6U = function($p0, $p1) {
    var $v_0 = new ProcessConfiguration.Builder.ImageBuilder();
    $v_0.set_imageStripProxy($p1);
    $v_0.set_jQueryProxy($p0);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$99 = function($p0) {
    var $v_0 = new ProcessConfiguration.Builder.InlineEditControlBuilder();
    $v_0.set_jQueryProxy($p0);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9P = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = ProcessConfiguration.Builder.StepBuilder.createStepBuilder($p4.get_businessProcessFlowModel().get_workflowBusinessProcessType());
    $v_0.set_buttonBuilder($p1);
    $v_0.set_jQueryProxy($p0);
    $v_0.set_imageBuilder($p2);
    $v_0.set_inlineEditControlBuilder($p3);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$94 = function($p0, $p1) {
    var $v_0 = new ProcessConfiguration.Builder.ButtonBuilder();
    $v_0.set_jQueryProxy($p0);
    $v_0.set_imageBuilder($p1);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9K = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = ProcessConfiguration.Builder.StageBuilder.createBuilder($p6.get_businessProcessFlowModel().get_workflowBusinessProcessType());
    $v_0.set_imageStripProxy($p5);
    $v_0.set_jQueryProxy($p0);
    $v_0.set_stepBuilder($p2);
    $v_0.set_buttonBuilder($p1);
    $v_0.set_inlineEditControlBuilder($p3);
    $v_0.set_imageBuilder($p4);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9V = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new ProcessConfiguration.View.ViewFactory();
    $v_0.set_viewAdapterFactory($p1);
    $v_0.set_behaviorsFactory($p2);
    $v_0.set_jQueryProxy($p0);
    $v_0.set_stepBuilder($p3);
    $v_0.set_stageBuilder($p4);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9U = function($p0, $p1) {
    var $v_0 = new ProcessConfiguration.View.ViewAdapterFactory();
    $v_0.set_jQueryProxy($p0);
    $v_0.set_behaviorsFactory($p1);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9Q = function($p0, $p1) {
    var $v_0 = new ProcessConfiguration.ViewModels.StepModelFactory();
    $v_0.set_stagesById($p0.get_stagesById());
    $v_0.set_systemControlMetadataModel($p1);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9W = function($p0) {
    var $v_0 = new ProcessConfiguration.ViewModels.ViewModelFactory();
    $v_0.set_firstLevelStages($p0.get_firstLevelStages());
    $v_0.set_businessProcessFlowVisitor($p0);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$92 = function($p0) {
    var $v_0 = new ProcessObjectModel.Visitors.BusinessProcessFlowVisitor();
    $v_0.visit($p0.get_businessProcessFlowModel());
    return $v_0;
}
ProcessControl.Configuration.Initializer.$9A = function($p0, $p1) {
    var $v_0 = new ProcessConfiguration.Services.MetadataService();
    $v_0.set_metadataModelFactory($p1);
    $v_0.initialize($p0);
    return $v_0;
}
ProcessControl.Configuration.Initializer.$7l = function() {
    var $v_0 = $P_CRM('#processDetailArea');
    if ($v_0.length > 0) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler(null);
    }
}
ProcessControl.Configuration.Initializer.$9w = function() {
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
    ProcessControl.Configuration.Initializer.$7A();
    ProcessControl.Configuration.Initializer.$7B();
    ProcessControl.Configuration.Initializer.$89();
}
ProcessControl.Configuration.Initializer.$89 = function() {
    if (Sys.Browser.agent !== Sys.Browser.Safari) {
        return;
    }
    var $v_0 = $P_CRM('.prc_step_rc');
    $v_0.addClass('prc_step_rc_webkit');
}
ProcessControl.Configuration.Initializer.$7B = function() {
    var $v_0 = 4;
    var $v_1 = String.format('pcc_tab_{0}', $v_0);
    var $v_2 = $P_CRM('a[tabid=\'' + $v_1 + '\']');
    var $v_3 = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_OPTIONSTEXT);
    var $v_4 = CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_OPTIONSTEXT);
    var $v_5 = String.format(ProcessControl.Configuration.HtmlTemplate.$6e, $v_4, $v_3);
    var $v_6 = $P_CRM($v_5);
    $v_6.insertAfter($v_2);
}
ProcessControl.Configuration.Initializer.$7A = function() {
    var $v_0 = $P_CRM('.tabLink');
    $v_0.each(ProcessControl.Configuration.Initializer.$9X);
}
ProcessControl.Configuration.Initializer.$9X = function($p0, $p1) {
    if ($p0 >= 4 || IsNull($p1)) {
        return false;
    }
    var $v_0 = $P_CRM($p1);
    var $v_1 = String.format('breadcrumb_{0}', $p0);
    var $v_2 = String.format(ProcessControl.Configuration.HtmlTemplate.$5t, $v_1);
    var $v_3 = $P_CRM($v_2);
    $v_3.insertAfter($v_0);
    var $v_4 = String.format('pcc_tab_{0}', $p0 + 1);
    var $v_5 = $P_CRM('a[tabid=\'' + $v_4 + '\']');
    if (!$v_5.is(':visible')) {
        $v_3.addClass('bpfConfBreadcrumbHide');
    }
    return true;
}
ProcessControl.Configuration.Initializer.dispose = function() {
    ProcessControl.Configuration.Initializer.$82();
    ProcessControl.Configuration.Initializer.$81();
}
ProcessControl.Configuration.Initializer.$82 = function() {
    var $v_0 = $find('pcc_tabs');
    if (!IsNull($v_0) && !$v_0.get_isDisposed()) {
        $v_0.dispose();
    }
}
ProcessControl.Configuration.Initializer.$81 = function() {
    var $v_0 = $find('pcc');
    if (!IsNull($v_0)) {
        $v_0.dispose();
    }
}


ProcessControl.Configuration.RelationshipPickerDialogInitializer = function() {
}
ProcessControl.Configuration.RelationshipPickerDialogInitializer.initialize = function() {
    var $v_0 = new ProcessConfiguration.ViewModels.ViewModelFactory();
    var $v_1 = new ProcessConfiguration.View.ViewFactory();
    var $v_2 = window.getDialogArguments();
    ProcessControl.Configuration.RelationshipPickerDialogInitializer.$12 = $v_0.createRelationshipPickerViewModel($v_2);
    ProcessControl.Configuration.RelationshipPickerDialogInitializer.$12.checkForInvalidExistingRelationships();
    var $v_3 = new Mscrm.Proxies.JQueryProxy();
    var $v_4 = new Mscrm.Proxies.ImageStripProxy();
    var $v_5 = new ProcessConfiguration.Builder.InlineEditControlBuilder();
    $v_5.set_jQueryProxy($v_3);
    var $v_6 = new ProcessConfiguration.Builder.RelationshipsTableBuilder();
    $v_6.set_stageViewsById($v_2.get_stageById());
    $v_6.set_inlineEditControlBuilder($v_5);
    $v_6.set_jQueryProxy($v_3);
    var $v_7 = ProcessControl.Configuration.RelationshipPickerDialogInitializer.$6U($v_3, $v_4);
    ProcessControl.Configuration.RelationshipPickerDialogInitializer.$4u = $v_1.createRelationshipPickerView(ProcessControl.Configuration.RelationshipPickerDialogInitializer.$12, $v_6, $v_7);
    ProcessControl.Configuration.RelationshipPickerDialogInitializer.$4u.initialize();
}
ProcessControl.Configuration.RelationshipPickerDialogInitializer.applyChanges = function() {
    return ProcessControl.Configuration.RelationshipPickerDialogInitializer.$4u.getRelationshipModelList().toArray();
}
ProcessControl.Configuration.RelationshipPickerDialogInitializer.$6U = function($p0, $p1) {
    var $v_0 = new ProcessConfiguration.Builder.ImageBuilder();
    $v_0.set_imageStripProxy($p1);
    $v_0.set_jQueryProxy($p0);
    return $v_0;
}


ProcessControl.Configuration.ConfiguratorActions = function() {
}


ProcessControl.Configuration.SystemStepType = function() {
}


ProcessControl.Configuration.Constants = function() {
}


ProcessControl.Configuration.SystemStepParams = function() {
}


ProcessControl.Configuration.CssClass = function() {
}


ProcessControl.Configuration.HtmlTemplate = function() {
}
ProcessControl.Configuration.HtmlTemplate.$63 = function($p0, $p1) {
    return String.format.apply(null, [ $p0 ].concat($p1));
}


ProcessControl.Configuration.AddBranchConditionBehavior = function(element) {
    ProcessControl.Configuration.AddBranchConditionBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.AddBranchConditionBehavior.prototype = {
    $d_4: null,
    
    get_stageViewModel: function() {
        return this.$d_4;
    },
    
    set_stageViewModel: function(value) {
        this.$d_4 = value;
        return value;
    },
    
    $1a_4: null,
    
    get_stageView: function() {
        return this.$1a_4;
    },
    
    set_stageView: function(value) {
        this.$1a_4 = value;
        return value;
    },
    
    $2F_4: null,
    
    get_rootWorkflowStep: function() {
        return this.$2F_4;
    },
    
    set_rootWorkflowStep: function(value) {
        this.$2F_4 = value;
        return value;
    },
    
    initialize: function() {
        this.$1q_3 = $P_CRM(this.get_element()).children(':first-child');
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.$1q_3.hide();
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.initialize.call(this);
    },
    
    get_defaultAddTitle: function() {
        return window.LOCID_PROCESS_ADDSTAGE;
    },
    
    $78_4: function($p0) {
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.$4v_4 = this.$4v_4 + 1;
            var $v_0 = new ProcessControl.Configuration.ConditionBuilder(this.$2F_4.get_workflowBusinessProcessType());
            $v_0.set_jQueryProxy(this.$8_4);
            $v_0.set_buttonBuilder(this.$M_4.get_stageBuilder().get_buttonBuilder());
            var $v_1 = !!this.$1a_4.get_conditionView();
            if ($v_1) {
                this.$7D_4($v_0);
            }
            else {
                this.$7E_4($v_0);
                this.$1a_4.toggleInsertStageButtonViewLabel();
            }
        }
    },
    
    $7E_4: function($p0) {
        var $v_0 = this.$32_4.createNewConditionModel(this.$2F_4, this.$d_4.get_stageModel().get_stageStep());
        var $v_1 = this.$34_4.createConditionViewModel(this.$d_4, this.$d_4.get_metadataService(), $v_0);
        $v_1.initialize();
        this.$d_4.set_childConditionViewModel($v_1);
        var $v_2 = $p0.buildConditionElement();
        var $v_3 = $v_0.get_conditionBranches().first();
        var $v_4 = $v_3.get_conditionBranchStep().get_Id();
        var $v_5 = $p0.buildConditionBranchElement($v_4);
        $v_2.append($v_5);
        this.$1a_4.get_element().after($v_2);
        var $v_6 = this.$M_4.createConditionView($v_2, $v_1);
        $v_6.initialize();
        $v_6.set_parent(this.$1a_4);
        this.$1a_4.set_conditionView($v_6);
        ($v_6.get_children().get_item(0)).get_conditionsSectionsView().addNewExpressions(null);
    },
    
    $7D_4: function($p0) {
        var $v_0 = this.$1a_4.get_conditionView();
        var $v_1 = $v_0.get_dataContext();
        var $v_2 = $v_1.get_conditionModel();
        var $v_3 = this.$32_4.createNewConditionBranchModel(this.$2F_4, $v_2);
        var $v_4 = $v_3.get_conditionBranchStep().get_Id();
        var $v_5 = $p0.buildConditionBranchElement($v_4);
        var $v_6 = $v_0.get_element();
        $v_6.append($v_5);
        var $v_7 = this.$34_4.createConditionBranchViewModel($v_1, $v_1.get_metadataService(), $v_3);
        $v_7.initialize();
        var $v_8 = this.$M_4.createConditionBranchView($v_5, $v_7);
        $v_8.initialize();
        var $$t_A = $v_0;
        $v_8.get_conditionsSectionsView().set_deleteHandler(($$t_A.$$d_deleteConditionBranchHandler || ($$t_A.$$d_deleteConditionBranchHandler = Function.createDelegate($$t_A, $$t_A.deleteConditionBranchHandler))));
        $v_1.get_childConditionBranchViewModels().add($v_7);
        $v_8.set_parent($v_0);
        $v_0.get_children().add($v_8);
        $v_8.get_conditionsSectionsView().addNewExpressions(null);
    },
    
    $32_4: null,
    
    get_stepModelFactory: function() {
        return this.$32_4;
    },
    
    set_stepModelFactory: function(value) {
        this.$32_4 = value;
        return value;
    },
    
    $34_4: null,
    
    get_viewModelFactory: function() {
        return this.$34_4;
    },
    
    set_viewModelFactory: function(value) {
        this.$34_4 = value;
        return value;
    },
    
    $M_4: null,
    
    get_viewFactory: function() {
        return this.$M_4;
    },
    
    set_viewFactory: function(value) {
        this.$M_4 = value;
        return value;
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.dispose.call(this);
    },
    
    $4v_4: 0,
    $8_4: null,
    
    get_jQueryProxy: function() {
        return this.$8_4;
    },
    
    set_jQueryProxy: function(value) {
        this.$8_4 = value;
        return value;
    }
}


ProcessControl.Configuration.AddChildControlBehavior = function(element) {
    this.$$d_$9b_3 = Function.createDelegate(this, this.$9b_3);
    this.$$d_addChild = Function.createDelegate(this, this.addChild);
    ProcessControl.Configuration.AddChildControlBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.AddChildControlBehavior.prototype = {
    
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        if (!IsNull(this.$Q_3)) {
            this.$Q_3.bind('click', this.$$d_addChild);
            this.$Q_3.bind('keydown', this.$$d_$9b_3);
        }
    },
    
    get_entityView: function() {
        return this.$F_3;
    },
    
    set_entityView: function(value) {
        this.$F_3 = value;
        return value;
    },
    
    enableDisableAddIcon: function(enable, message) {
        if (!enable) {
            this.$18_3 = false;
            this.$Q_3.attr('src', this.get_$5S_3().source);
            this.$Q_3.removeClass(this.get_enabledIconInfo().cssClass);
            this.$Q_3.addClass(this.get_$5S_3().cssClass);
        }
        else {
            this.$18_3 = true;
            this.$Q_3.attr('src', this.get_enabledIconInfo().source);
            this.$Q_3.removeClass(this.get_$5S_3().cssClass);
            this.$Q_3.addClass(this.get_enabledIconInfo().cssClass);
        }
        this.$Q_3.attr('title', message || this.get_defaultAddTitle());
    },
    
    isChildControlMaxLimitReached: function(currentCount, maxLimit) {
        return currentCount >= maxLimit;
    },
    
    get_enabledIconInfo: function() {
        if (IsNull(this.$3u_3)) {
            this.$3u_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/21_orangeplus.png'));
        }
        return this.$3u_3;
    },
    
    get_$5S_3: function() {
        if (IsNull(this.$3q_3)) {
            this.$3q_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/21_inactiveplus.png'));
        }
        return this.$3q_3;
    },
    
    $9b_3: function($p0) {
        switch ($p0.which) {
            case 13:
                this.addChild($p0);
                $p0.preventDefault();
                $p0.stopPropagation();
                break;
        }
    },
    
    addChild: function(eventObject) {
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$Q_3)) {
            this.$Q_3.unbind('click');
            this.$Q_3.unbind('keydown');
        }
        if (!IsNull(this.$1q_3)) {
            this.$1q_3.unbind('click');
            this.$1q_3.unbind('keydown');
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this);
    },
    
    get_addImage: function() {
        return this.$Q_3;
    },
    
    set_addImage: function(value) {
        this.$Q_3 = value;
        return value;
    },
    
    get_branchImage: function() {
        return this.$1q_3;
    },
    
    set_branchImage: function(value) {
        this.$1q_3 = value;
        return value;
    },
    
    get_isEnabled: function() {
        return this.$18_3;
    },
    
    $Q_3: null,
    $1q_3: null,
    $F_3: null,
    $3q_3: null,
    $3u_3: null,
    $18_3: false
}


ProcessControl.Configuration.AddStageBehavior = function(element) {
    this.$$d_$7m_4 = Function.createDelegate(this, this.$7m_4);
    ProcessControl.Configuration.AddStageBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.AddStageBehavior.prototype = {
    
    initialize: function() {
        this.$Q_3 = $P_CRM(this.get_element()).children(':first-child');
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.$Q_3.hide();
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.initialize.call(this);
        (this.$F_3).get_dataContext().get_Steps().add_stepCollectionChanged(this.$$d_$7m_4);
        this.$3T_4();
    },
    
    $7m_4: function($p0, $p1) {
        if (IsNull(this.$F_3) || IsNull((this.$F_3).get_dataContext()) || IsNull((this.$F_3).get_dataContext().get_Steps())) {
            return;
        }
        this.$3T_4();
    },
    
    $3T_4: function() {
        if (this.$9Z_4()) {
            this.enableDisableAddIcon(false, String.format(window.LOCID_PROCESS_MAXSTAGE, 30));
        }
        else {
            this.enableDisableAddIcon(true, null);
        }
    },
    
    $9Z_4: function() {
        if (IsNull(this.$F_3) || IsNull(this.$F_3) || IsNull((this.$F_3).get_dataContext().get_Steps())) {
            return false;
        }
        var $v_0 = ProcessControl.Configuration.AddChildControlBehavior.prototype.isChildControlMaxLimitReached.call(this, (this.$F_3).get_dataContext().get_Steps().get_Count(), 30);
        if ($v_0) {
            Mscrm.MetricsReporting.instance().addMetric('Sales Process Configurator', 'Stage max limit reached for ' + (this.$F_3).get_dataContext().get_EntityLogicalName());
        }
        return $v_0;
    },
    
    get_defaultAddTitle: function() {
        return window.LOCID_PROCESS_ADDSTAGE;
    },
    
    addChild: function(eventObject) {
        if (!this.$18_3) {
            return;
        }
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStageData((this.$F_3).get_dataContext().get_parent());
        $v_0.set_parent((this.$F_3).get_dataContext().get_lastStep());
        $v_0.set_workflow((this.$F_3).get_dataContext().get_parent());
        (this.$F_3).get_dataContext().appendStep($v_0);
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        if ((this.$F_3).get_dataContext() && (this.$F_3).get_dataContext().get_Steps()) {
            (this.$F_3).get_dataContext().get_Steps().remove_stepCollectionChanged(this.$$d_$7m_4);
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.dispose.call(this);
    }
}


ProcessControl.Configuration.AddStepBehavior = function(element) {
    this.$$d_$8j_4 = Function.createDelegate(this, this.$8j_4);
    this.$$d_$AJ_4 = Function.createDelegate(this, this.$AJ_4);
    this.$$d_$8o_4 = Function.createDelegate(this, this.$8o_4);
    this.$$d_$8n_4 = Function.createDelegate(this, this.$8n_4);
    this.$$d_$8q_4 = Function.createDelegate(this, this.$8q_4);
    this.$$d_$8s_4 = Function.createDelegate(this, this.$8s_4);
    this.$$d_$8r_4 = Function.createDelegate(this, this.$8r_4);
    this.$$d_$8m_4 = Function.createDelegate(this, this.$8m_4);
    this.$$d_$4o_4 = Function.createDelegate(this, this.$4o_4);
    this.$$d_$8p_4 = Function.createDelegate(this, this.$8p_4);
    this.$$d_$5r_4 = Function.createDelegate(this, this.$5r_4);
    this.$$d_$AU_4 = Function.createDelegate(this, this.$AU_4);
    this.$$d_$8y_4 = Function.createDelegate(this, this.$8y_4);
    this.$$d_$AI_4 = Function.createDelegate(this, this.$AI_4);
    this.$$d_$7J_4 = Function.createDelegate(this, this.$7J_4);
    ProcessControl.Configuration.AddStepBehavior.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.AddStepBehavior.prototype = {
    
    initialize: function() {
        this.$3s_4 = $P_CRM(this.get_element());
        this.$Q_3 = $P_CRM('#' + String.format('{0}_plusimg', this.get_element().id));
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.$Q_3.hide();
        }
        $addHandler(this.$Q_3.parents('.ui-dialog-content').get(0), 'keydown', this.$$d_$7J_4);
        ProcessControl.Configuration.AddChildControlBehavior.prototype.initialize.call(this);
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().subscribe('stageselected', this.$$d_$AI_4);
        this.$3T_4();
    },
    
    configureMenu: function() {
        this.$AH_4();
        if (this.$43_4) {
            this.$7P_4();
        }
        else {
            this.$73_4();
        }
    },
    
    $73_4: function() {
        if (!this.$3M_4) {
            return;
        }
        this.$u_4.find('li').unbind();
        this.$2C_4.parents('span').first().unbind();
        this.$v_4.unbind('mouseenter').unbind('mouseleave').unbind('focusin').unbind('focusout');
        this.$3s_4.unbind();
        this.$i_4.unbind();
        this.$3M_4 = false;
    },
    
    $7P_4: function() {
        if (this.$3M_4) {
            return;
        }
        this.$u_4.find('li').focus(this.$$d_$8y_4).mouseover(this.$$d_$8y_4).mouseleave(this.$$d_$AU_4).click(this.$$d_$5r_4).keydown(this.$$d_$8p_4);
        this.$2C_4 = $P_CRM('#' + String.format('{0}_arrowimg', this.get_element().id));
        this.$2C_4.parents('span').first().click(this.$$d_$4o_4).keydown(this.$$d_$8m_4);
        this.$v_4 = this.$Q_3.parents().first();
        this.$i_4 = this.$2C_4.parents().first();
        this.$v_4.mouseenter(this.$$d_$8r_4);
        this.$v_4.mouseleave(this.$$d_$8s_4);
        (this.$v_4).focusin(this.$$d_$8r_4);
        (this.$v_4).focusout(this.$$d_$8s_4);
        this.$3s_4.mouseleave(this.$$d_$8q_4);
        this.$i_4.mouseenter(this.$$d_$8n_4);
        this.$i_4.mouseleave(this.$$d_$8o_4);
        (this.$i_4).focusin(this.$$d_$8n_4);
        (this.$i_4).focusout(this.$$d_$8o_4);
        this.$3M_4 = true;
    },
    
    $AH_4: function() {
        this.$u_4.find('li').css('display', 'none');
        var $v_0 = (this.$F_3).get_dataContext().get_EntityLogicalName();
        var $v_1 = Mscrm.InternalUtilities._String.format('li[entityLogicalName=\'{0}\']', $v_0);
        this.$43_4 = this.$u_4.find($v_1).css('display', '').size() > 0;
    },
    
    get_defaultAddTitle: function() {
        return window.LOCID_PROCESS_ADDSTEP;
    },
    
    $AI_4: function($p0, $p1) {
        this.$AP_4();
        if (!this.$2x_4()) {
            this.enableDisableAddIcon(false, null);
            return;
        }
        this.$1z_4 = ProcessConfiguration.Behavior.StageFocusBehavior.$6;
        this.$1z_4.get_dataContext().get_Steps().add_stepCollectionChanged(this.$$d_$AJ_4);
        this.$3T_4();
    },
    
    $AJ_4: function($p0, $p1) {
        if (!this.$2x_4()) {
            return;
        }
        if (IsNull(this.$1z_4) || IsNull(this.$1z_4.get_dataContext()) || IsNull(this.$1z_4.get_dataContext().get_Steps())) {
            return;
        }
        this.$3T_4();
    },
    
    $3T_4: function() {
        if (!this.$2x_4()) {
            this.enableDisableAddIcon(false, null);
            return;
        }
        if (this.$9a_4()) {
            this.enableDisableAddIcon(false, String.format(window.LOCID_PROCESS_MAXSTEP, 30));
            return;
        }
        this.enableDisableAddIcon(true, null);
    },
    
    $9a_4: function() {
        var $v_0 = ProcessConfiguration.Behavior.StageFocusBehavior.$6;
        if (IsNull($v_0.get_dataContext()) || IsNull($v_0.get_dataContext().get_Steps())) {
            return false;
        }
        var $v_1 = ProcessControl.Configuration.AddChildControlBehavior.prototype.isChildControlMaxLimitReached.call(this, $v_0.get_dataContext().get_Steps().get_Count(), 30);
        if ($v_1) {
            Mscrm.MetricsReporting.instance().addMetric('Sales Process Configurator', 'Step max limit reached for ' + (this.$F_3).get_dataContext().get_EntityLogicalName());
        }
        return $v_1;
    },
    
    $2x_4: function() {
        if (IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6) || ProcessConfiguration.Behavior.StageFocusBehavior.$6.$s_5 !== this.$F_3) {
            return false;
        }
        return true;
    },
    
    addChild: function(eventObject) {
        if (!this.$18_3 || !this.$2x_4()) {
            return;
        }
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData((this.$F_3).get_dataContext().get_parent());
        $v_0.set_parent(ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_dataContext());
        $v_0.set_workflow((this.$F_3).get_dataContext().get_workflow());
        ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_dataContext().appendStep($v_0);
    },
    
    $5r_4: function($p0) {
        if (!this.$18_3 || !this.$2x_4()) {
            return;
        }
        var $v_0 = $P_CRM($p0.target).attr('data-system-step-enum-value');
        var $v_1 = $P_CRM($p0.target).attr('data-system-step-description');
        var $v_2 = (this.$F_3).get_dataContext().get_parent();
        var $v_3 = (ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_dataContext().get_parent()).get_EntityLogicalName();
        var $v_4 = this.$F_3.get_entityMetadata()[$v_3];
        var $v_5 = ProcessControl.Configuration.ProcessConfigurationUtility.generateSystemStep($v_0, $v_2, $v_4, $v_1);
        ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_dataContext().appendStep($v_5);
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(ProcessConfiguration.Behavior.StageFocusBehavior.$6.$s_5.get_parent());
    },
    
    $4o_4: function($p0) {
        if (!this.$18_3 || !this.$2x_4()) {
            return;
        }
        if (!this.$5M_4) {
            $P_CRM('body').bind('click', this.$$d_$8j_4);
            this.$5M_4 = true;
        }
        if (this.$2K_4) {
            this.$6Q_4();
        }
        else {
            if (!this.$55_4) {
                var $v_0 = this.$v_4.width();
                var $v_1 = Number.parseInvariant(this.$v_4.css('margin-left').replace('px', '')) + Number.parseInvariant(this.$v_4.css('margin-right').replace('px', ''));
                var $v_2 = this.$u_4.parents().first().find('.pc_step_colh_text').width() + $v_0 + $v_1;
                if (Mscrm.Utilities.get_isLeftToRight()) {
                    this.$u_4.css('margin-left', $v_2 + 'px');
                }
                else {
                    this.$u_4.css('margin-right', $v_2 + 'px');
                }
                this.$55_4 = true;
            }
            this.$u_4.find('li').removeClass('pc_en_colh_ss_hover');
            this.$u_4.show(0);
            this.$2K_4 = true;
            this.$6J_4().focus();
        }
    },
    
    $6Q_4: function() {
        this.$u_4.hide(0);
        this.$u_4.find('li').removeClass('pc_en_colh_ss_hover');
        this.$i_4.removeClass('pc_en_colh_ss_hover');
        this.$i_4.css('visibility', 'hidden');
        this.$2K_4 = false;
    },
    
    $8j_4: function($p0) {
        if (!this.$u_4.parents().first().has($p0.target).length) {
            this.$6Q_4();
        }
    },
    
    $8m_4: function($p0) {
        switch ($p0.which) {
            case 13:
                this.$4o_4($p0);
                break;
        }
    },
    
    $8p_4: function($p0) {
        var $v_0 = $P_CRM($p0.target);
        switch ($p0.which) {
            case 13:
                this.$5r_4($p0);
                break;
            case 9:
                if (!this.$6W_4($v_0)) {
                    this.$6K_4($v_0).focus();
                }
                else {
                    $p0.stopImmediatePropagation();
                    this.$4o_4($p0);
                    this.$5j_4();
                }
                $p0.preventDefault();
                break;
            case 40:
                $p0.stopImmediatePropagation();
                if (!this.$6W_4($v_0)) {
                    this.$6K_4($v_0).focus();
                }
                break;
            case 38:
                $p0.stopImmediatePropagation();
                if (!this.$9Y_4($v_0)) {
                    this.$8b_4($v_0).focus();
                }
                break;
            case 27:
                $p0.stopImmediatePropagation();
                this.$4o_4($p0);
                this.$5j_4();
                break;
        }
    },
    
    $6W_4: function($p0) {
        return $p0.is(this.$u_4.find('li:visible').last());
    },
    
    $9Y_4: function($p0) {
        return $p0.is(this.$6J_4());
    },
    
    $6J_4: function() {
        return this.$u_4.find('li:visible').first();
    },
    
    $6K_4: function($p0) {
        return $p0.nextAll('li:visible').first();
    },
    
    $8b_4: function($p0) {
        return $p0.prevAll('li:visible').first();
    },
    
    $5j_4: function() {
        this.$i_4.addClass('pc_en_colh_ss_hover');
        this.$i_4.css('visibility', 'visible');
        this.$2C_4.focus();
    },
    
    $7J_4: function($p0) {
        if ($p0.keyCode === 78 && $p0.altKey && $p0.shiftKey) {
            $p0.stopPropagation();
            this.addChild(null);
            return;
        }
        if (!this.$2K_4 && this.$43_4 && this.$v_4.is(':visible') && $p0.keyCode === 77 && $p0.altKey && $p0.shiftKey) {
            $p0.stopPropagation();
            this.$5j_4();
            this.$2C_4.click();
            return;
        }
    },
    
    $8y_4: function($p0) {
        $P_CRM($p0.currentTarget).siblings().removeClass('pc_en_colh_ss_hover').addClass('pc_en_colh_ss_menu_li_normal');
        $P_CRM($p0.currentTarget).addClass('pc_en_colh_ss_hover');
        if ($p0.target !== document.activeElement) {
            $p0.target.focus();
        }
    },
    
    $AU_4: function($p0) {
        if ($p0.currentTarget !== document.activeElement) {
            $P_CRM($p0.currentTarget).removeClass('pc_en_colh_ss_hover').addClass('pc_en_colh_ss_menu_li_normal');
        }
    },
    
    $8r_4: function($p0) {
        if (!this.$18_3) {
            return;
        }
        this.$v_4.addClass('pc_en_colh_ss_hover');
        this.$i_4.css('visibility', 'visible');
    },
    
    $8s_4: function($p0) {
        if (!this.$18_3) {
            return;
        }
        this.$v_4.removeClass('pc_en_colh_ss_hover');
    },
    
    $8q_4: function($p0) {
        if (!this.$18_3) {
            return;
        }
        this.$v_4.removeClass('pc_en_colh_ss_hover');
        if (!this.$2K_4) {
            this.$i_4.removeClass('pc_en_colh_ss_hover');
            this.$i_4.css('visibility', 'hidden');
        }
    },
    
    $8n_4: function($p0) {
        if (!this.$18_3) {
            return;
        }
        this.$i_4.addClass('pc_en_colh_ss_hover');
    },
    
    $8o_4: function($p0) {
        if (!this.$18_3) {
            return;
        }
        if (!this.$2K_4) {
            this.$i_4.removeClass('pc_en_colh_ss_hover');
            this.$i_4.css('visibility', 'hidden');
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        $P_CRM('body').unbind('click', this.$$d_$8j_4);
        $removeHandler(this.$Q_3.parents('.ui-dialog-content').get(0), 'keydown', this.$$d_$7J_4);
        this.$73_4();
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().unsubscribe('stageselected', this.$$d_$AI_4);
        ProcessControl.Configuration.AddChildControlBehavior.prototype.dispose.call(this);
    },
    
    $AP_4: function() {
        if (IsNull(this.$1z_4)) {
            return;
        }
        try {
            this.$1z_4.get_dataContext().get_Steps().remove_stepCollectionChanged(this.$$d_$AJ_4);
        }
        catch ($$e_0) {
        }
    },
    
    $v_4: null,
    $3s_4: null,
    $2C_4: null,
    $i_4: null,
    $u_4: null,
    $43_4: false,
    $55_4: false,
    $5M_4: false,
    $2K_4: false,
    $3M_4: false,
    $1z_4: null
}


ProcessControl.Configuration.ProcessBuilder$1 = function() {
}
ProcessControl.Configuration.ProcessBuilder$1.$$ = function(TWrapper) {
    var $$cn = 'ProcessBuilder$1' + '$' + TWrapper.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.ProcessBuilder$1'] = {'TWrapper': TWrapper};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.ProcessBuilder$1.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn);
        var $$dict_5 = ProcessControl.Configuration.ProcessBuilder$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.ProcessBuilder$1.prototype = {
    
    sanitizeId: function(id) {
        return id.replace('{', '').replace('}', '');
    }
}


ProcessControl.Configuration.ConditionBuilder = function(businessProcessType) {
    this.$4w_0 = new Mscrm.BusinessRules.Builders.ConditionBranchStepSectionViewViewBuilder(null, null);
    this.$5P_0 = businessProcessType;
}
ProcessControl.Configuration.ConditionBuilder.prototype = {
    $4w_0: null,
    $5P_0: 0,
    
    $7Q_0: function($p0) {
        var $v_0 = this.$8_0.fromHtml('<div></div>');
        $v_0.addClass('conditionbranch');
        var $v_1 = this.$4w_0.buildConditionHtmlForBranching($p0, '');
        var $v_2 = this.$8_0.fromHtml($v_1);
        var $v_3 = $v_2.find('.sectionbody');
        var $v_4 = this.$8Z_0();
        var $v_5 = this.$k_0.build($v_4, 'add-stage', '/_imgs/processcontrol/grey_plus_16.png', $v_4, $v_4).addClass('conditions');
        $v_3.append($v_5);
        $v_0.append($v_2);
        return $v_0;
    },
    
    $8Z_0: function() {
        if (this.$5P_0 === 1) {
            return window.LOCID_PROCESS_INSERTPAGETEXTKEY;
        }
        return window.LOCID_PROCESS_INSERTSTAGETEXTKEY;
    },
    
    buildConditionElement: function() {
        var $v_0 = this.$8_0.fromHtml('<div></div>');
        $v_0.addClass('condition');
        return $v_0;
    },
    
    buildConditionBranchElement: function(stepId) {
        var $v_0 = this.$7Q_0(stepId);
        return $v_0;
    },
    
    $8_0: null,
    
    get_jQueryProxy: function() {
        return this.$8_0;
    },
    
    set_jQueryProxy: function(value) {
        this.$8_0 = value;
        return value;
    },
    
    $k_0: null,
    
    get_buttonBuilder: function() {
        return this.$k_0;
    },
    
    set_buttonBuilder: function(value) {
        this.$k_0 = value;
        return value;
    }
}


ProcessControl.Configuration.ProcessEventAggregator = function(element) {
    ProcessControl.Configuration.ProcessEventAggregator.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessEventAggregator.get_instance = function() {
    if (IsNull(ProcessControl.Configuration.ProcessEventAggregator.$3x)) {
        ProcessControl.Configuration.ProcessEventAggregator.$3x = $find('pcc_event');
    }
    return ProcessControl.Configuration.ProcessEventAggregator.$3x;
}
ProcessControl.Configuration.ProcessEventAggregator.prototype = {
    
    subscribe: function(eventToSubscribe, handler) {
        this.get_events().addHandler(eventToSubscribe, handler);
    },
    
    unsubscribe: function(eventToUnsubscibe, handler) {
        this.get_events().removeHandler(eventToUnsubscibe, handler);
    },
    
    publish: function(eventToPublish, sender, args) {
        var $v_0 = this.get_events().getHandler(eventToPublish);
        if (!IsNull($v_0)) {
            $v_0(sender, args);
        }
    }
}


ProcessControl.Configuration.EventNames = function() {
}


ProcessControl.Configuration.KeyCode = function() {
}


ProcessControl.Configuration.BpfMenuActions = function() {
}
ProcessControl.Configuration.BpfMenuActions.get_bpfView = function() {
    return ProcessControl.Configuration.BpfMenuActions.$R;
}
ProcessControl.Configuration.BpfMenuActions.set_bpfView = function(value) {
    ProcessControl.Configuration.BpfMenuActions.$R = value;
    return value;
}
ProcessControl.Configuration.BpfMenuActions.saveProcess = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    if (window._OverwriteOnSave) {
        var $v_0 = new Xrm.ConfirmDialogStrings();
        $v_0.title = Xrm.Internal.getResourceString('ProcessControl.Configurator.OverwriteWarning.Title');
        $v_0.text = Xrm.Internal.getResourceString('ProcessControl.Configurator.OverwriteWarning');
        $v_0.confirmButtonLabel = Xrm.Internal.getResourceString('Button_Label_OK');
        $v_0.cancelButtonLabel = Xrm.Internal.getResourceString('Button_Label_Cancel');
        var $v_1 = new Xrm.DialogOptions();
        $v_1.height = 250;
        $v_1.width = 550;
        Xrm.Dialog.openConfirmDialog($v_0, $v_1, function() {
            window._OverwriteOnSave = false;
            ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
            ProcessControl.Configuration.BpfMenuActions.$R.saveProcess(null);
        }, function() {
            ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
            return;
        });
    }
    else {
        ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
        ProcessControl.Configuration.BpfMenuActions.$R.saveProcess(null);
    }
}
ProcessControl.Configuration.BpfMenuActions.saveProcessAs = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    ProcessControl.Configuration.BpfMenuActions.$R.saveProcessAs();
}
ProcessControl.Configuration.BpfMenuActions.activateBusinessProcessFlow = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    if (ProcessControl.Configuration.BpfMenuActions.$R.get_isDirty()) {
        ProcessControl.Configuration.BpfMenuActions.$R.saveProcess(function($p1_0, $p1_1) {
            if (!$p1_0.Success) {
                return;
            }
            ProcessControl.Configuration.BpfMenuActions.$R.activateProcess();
        });
    }
    else {
        ProcessControl.Configuration.BpfMenuActions.$R.activateProcess();
    }
}
ProcessControl.Configuration.BpfMenuActions.deleteBusinessProcessFlow = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    ProcessControl.Configuration.BpfMenuActions.$R.deleteProcess();
}
ProcessControl.Configuration.BpfMenuActions.deactivateBusinessProcessFlow = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    if (ProcessControl.Configuration.BpfMenuActions.$R.get_isDirty()) {
        ProcessControl.Configuration.BpfMenuActions.$R.saveProcess(function($p1_0, $p1_1) {
            if (!$p1_0.Success) {
                return;
            }
            ProcessControl.Configuration.BpfMenuActions.$R.deactivateProcess();
        });
    }
    else {
        ProcessControl.Configuration.BpfMenuActions.$R.deactivateProcess();
    }
}
ProcessControl.Configuration.BpfMenuActions.openProcessRoleAssignment = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = '/tools/dialogs/RoleAssignment.aspx?oid=' + CrmEncodeDecode.CrmUrlEncode(window._Process_Id);
    ProcessControl.Configuration.BpfMenuActions.$3Z($v_0);
}
ProcessControl.Configuration.BpfMenuActions.openProcessOrder = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = '/tools/dialogs/componentorder.aspx?etn=' + CrmEncodeDecode.CrmUrlEncode(ProcessControl.Configuration.BpfMenuActions.$R.get_dataContext().get_primaryEntityName());
    ProcessControl.Configuration.BpfMenuActions.$3Z($v_0);
}
ProcessControl.Configuration.BpfMenuActions.showBusinessProcessFlowDependencies = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = Mscrm.CrmUri.create('/tools/dependency/dependencyviewdialog.aspx');
    $v_0.get_query()['objectid'] = window._Process_Id;
    $v_0.get_query()['objecttype'] = 4703;
    $v_0.get_query()['operationtype'] = 'showdependency';
    openStdWin($v_0, 'ShowDependency', 660, 580, null, '');
}
ProcessControl.Configuration.BpfMenuActions.openBusinessRules = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = Mscrm.CrmUri.create('/tools/SystemCustomization/BusinessRules/businessRulesList.aspx');
    $v_0.get_query()['entityId'] = (ProcessControl.Configuration.BpfMenuActions.$R.get_entityMetadata()[ProcessControl.Configuration.BpfMenuActions.$R.get_dataContext().get_primaryEntityName()])['EntityMetadataId'];
    $v_0.get_query()['appSolutionId'] = window.DEF_SOL_ID;
    $v_0.get_query()['formId'] = ProcessControl.Configuration.BpfMenuActions.$R.get_dataContext().get_formId();
    openStdWin($v_0, 'OpenBusinessRules', 660, 580, null, '');
}
ProcessControl.Configuration.BpfMenuActions.openVisualizeProcess = function(eventData) {
    if (!ProcessControl.Configuration.BpfMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = Mscrm.CrmUri.create('/Tools/SystemCustomization/ProcessDesigner/processdesigner.aspx');
    $v_0.get_query()['id'] = window._Process_Id;
    $v_0.get_query()['type'] = '4';
    openStdWin($v_0, 'VisualizeProcess', ProcessControl.Configuration.BpfMenuActions.$5h, ProcessControl.Configuration.BpfMenuActions.$5g, null, '');
}
ProcessControl.Configuration.BpfMenuActions.bindMenuActions = function() {
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBSave', ProcessControl.Configuration.BpfMenuActions.saveProcess);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBSaveAs', ProcessControl.Configuration.BpfMenuActions.saveProcessAs);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBActivate', ProcessControl.Configuration.BpfMenuActions.activateBusinessProcessFlow);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBDeactivate', ProcessControl.Configuration.BpfMenuActions.deactivateBusinessProcessFlow);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBDelete', ProcessControl.Configuration.BpfMenuActions.deleteBusinessProcessFlow);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBOrder', ProcessControl.Configuration.BpfMenuActions.openProcessOrder);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBRoleAssignment', ProcessControl.Configuration.BpfMenuActions.openProcessRoleAssignment);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBDependencies', ProcessControl.Configuration.BpfMenuActions.showBusinessProcessFlowDependencies);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBVisualizeProcess', ProcessControl.Configuration.BpfMenuActions.openVisualizeProcess);
    ProcessControl.Configuration.BpfMenuActions.$X('#_MBBusinessRules', ProcessControl.Configuration.BpfMenuActions.openBusinessRules);
    ProcessControl.Configuration.BpfMenuActions.$4X('#ProcessName', ProcessControl.Configuration.BpfMenuActions.$R.$$d_titleOrDescriptionChanged);
    ProcessControl.Configuration.BpfMenuActions.$4X('#Description', ProcessControl.Configuration.BpfMenuActions.$R.$$d_titleOrDescriptionChanged);
    var $v_0 = {};
    $v_0['Action'] = 'Shortcut';
    $P_CRM(window).bind('keydown', $v_0, ProcessControl.Configuration.BpfMenuActions.$6X);
}
ProcessControl.Configuration.BpfMenuActions.$6X = function($p0) {
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
ProcessControl.Configuration.BpfMenuActions.$3Z = function($p0) {
    var $v_0 = Mscrm.CrmUri.createWithOrigin($p0);
    $v_0 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_0);
    var $v_1 = new Xrm.DialogOptions();
    $v_1.width = 660;
    $v_1.height = 580;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null);
}
ProcessControl.Configuration.BpfMenuActions.$4X = function($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    $v_0.bind('change', $p1);
}
ProcessControl.Configuration.BpfMenuActions.$Z = function($p0) {
    if ($p0.which === 9) {
        return false;
    }
    if (IsNull(ProcessControl.Configuration.BpfMenuActions.$R) || ($p0.which !== 13 && $p0.which !== 1 && $p0.which)) {
        if (!IsNull($p0.data)) {
            if ((('Action') in $p0.data) && $p0.data['Action'] !== 'Shortcut') {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
ProcessControl.Configuration.BpfMenuActions.isCtrlKeyPressed = function(e) {
    return (e.ctrlKey || e.metaKey);
}
ProcessControl.Configuration.BpfMenuActions.$X = function($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    $v_0.bind('click', $p1);
    $v_0.bind('keydown', $p1);
    $v_0.removeAttr('action');
    $v_0.removeAttr('onClick');
    var $v_1 = $P_CRM('a', $v_0);
    $v_1.removeAttr('href');
}


ProcessControl.Configuration.BpfDataUtility = function() {
}
ProcessControl.Configuration.BpfDataUtility.getEntityAndRelationshipMetadata = function(entityLogicalName, callback) {
    var $v_0 = new RemoteCommand('ProcessControl', 'GetEntityAndRelationshipMetadata');
    $v_0.SetParameter('entityName', entityLogicalName);
    $v_0.Execute(callback);
}
ProcessControl.Configuration.BpfDataUtility.getEntityMetadata = function(entityLogicalName, callback) {
    var $v_0 = new RemoteCommand('ProcessControl', 'GetEntityMetadata');
    $v_0.SetParameter('entityName', entityLogicalName);
    $v_0.Execute(callback);
}
ProcessControl.Configuration.BpfDataUtility.executeConfiguratorActionCommand = function(serializedData, action, callback, errorHandler) {
    var $v_0 = new RemoteCommand('ProcessControl', action);
    $v_0.SetParameter('jsonData', serializedData);
    $v_0.SetParameter('id', window._Process_Id);
    $v_0.ErrorHandler = errorHandler;
    $v_0.Execute(callback);
}
ProcessControl.Configuration.BpfDataUtility.addProcessDataToSmbSolution = function(solutionRequest) {
    var $v_0 = new XMLHttpRequest();
    var $v_1 = Mscrm.CrmUri.create(Xrm.Page.context.getClientUrl() + '/' + window.ORG_UNIQUE_NAME + '/api/data/v8.0/AddSolutionComponent');
    $v_0.open('POST', $v_1.toString(), false);
    $v_0.setRequestHeader('Accept', 'application/json');
    $v_0.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    $v_0.setRequestHeader('X-HTTP-Method', 'MERGE');
    $v_0.send(JSON.stringify(solutionRequest));
    if (!IsNull($v_0) && $v_0.status !== 200) {
        window.SmbAddBPFAddSolutionDependency('Error',solutionxmlRequest.StatusText,solutionxmlRequest.ResponseText);
    }
}


ProcessControl.Configuration.solutionParameter = function() {
}
ProcessControl.Configuration.solutionParameter.prototype = {
    ComponentId: null,
    ComponentType: 0,
    SolutionUniqueName: null,
    AddRequiredComponents: false,
    DoNotIncludeSubcomponents: false,
    IncludedComponentSettingsValues: null
}


ProcessControl.Configuration.BPFClientProxy = function() {
}
ProcessControl.Configuration.BPFClientProxy.getEntityAndRelationshipMetadata = function(entityLogicalName, callback) {
    if (!ProcessControl.Configuration.BPFClientProxy.$2p) {
        ProcessControl.Configuration.BPFClientProxy.initializeClientProxy();
    }
    var $v_0 = ProcessControl.Configuration.BPFClientProxy.$1S.retrieveEntityAndRelationshipMetadataAsync(entityLogicalName);
    $v_0.done(function() {
        var $v_1 = ProcessControl.Configuration.BPFClientProxy.$1S.$2V_0[entityLogicalName];
        callback($v_1);
    });
}
ProcessControl.Configuration.BPFClientProxy.getStepAttributeListMetadata = function(entityLogicalName, callback) {
    if (!ProcessControl.Configuration.BPFClientProxy.$2p) {
        ProcessControl.Configuration.BPFClientProxy.initializeClientProxy();
    }
    var $v_0 = ProcessControl.Configuration.BPFClientProxy.$1S.retrieveEntityMetadataAsync(entityLogicalName);
    $v_0.done(function() {
        callback(ProcessControl.Configuration.BPFClientProxy.$1S.$E_0[entityLogicalName]);
    });
}
ProcessControl.Configuration.BPFClientProxy.getSystemControlAttributeMetadataModel = function(entityLogicalName) {
    var $v_0 = ProcessControl.Configuration.BPFClientProxy.$1S.retrieveEntityMetadataSync(entityLogicalName);
    var $v_1 = $v_0.get_systemControlMetadataModel();
    if ($v_1) {
        var $v_2 = $v_1.retrieveSystemControlsForEntity(entityLogicalName);
        return $v_2.get_items();
    }
    else {
        return null;
    }
}
ProcessControl.Configuration.BPFClientProxy.getLoadedRelationshipEntityMetadata = function() {
    if (!ProcessControl.Configuration.BPFClientProxy.$3S) {
        ProcessControl.Configuration.BPFClientProxy.$3S = (!isNullOrEmptyString(window._BusinessRuleEditorJsonData)) ? JSON.parse(window._BusinessRuleEditorJsonData.substr(8)) : null;
    }
    if (!IsNull(ProcessControl.Configuration.BPFClientProxy.$3S)) {
        return ProcessControl.Configuration.BPFClientProxy.$3S.RelatedLinkedEntities;
    }
    else {
        return null;
    }
}
ProcessControl.Configuration.BPFClientProxy.getEntityListMetadata = function(callback) {
    if (!ProcessControl.Configuration.BPFClientProxy.$2p) {
        ProcessControl.Configuration.BPFClientProxy.initializeClientProxy();
    }
    callback(ProcessControl.Configuration.ProcessEnabledEntities.getEntities());
}
ProcessControl.Configuration.BPFClientProxy.initializeClientProxy = function() {
    ProcessControl.Configuration.BPFClientProxy.$1S = new ProcessConfiguration.Services.MetadataService();
    var $v_0 = new ProcessConfiguration.Models.SystemControlMetadataModel();
    var $v_1 = ProcessControl.Configuration.Initializer.initializeMetadataModelFactory($v_0);
    ProcessControl.Configuration.BPFClientProxy.$1S.$Y_0 = $v_1;
    ProcessControl.Configuration.BPFClientProxy.$1S.initialize(ProcessControl.Configuration.BPFClientProxy.$4l);
    ProcessControl.Configuration.ProcessDesignerMenuActions.bindMenuActions();
    ProcessControl.Configuration.BPFClientProxy.$2p = true;
}
ProcessControl.Configuration.BPFClientProxy.getEntityMetadata = function(entityLogicalName, callback) {
    if (!ProcessControl.Configuration.BPFClientProxy.$2p) {
        ProcessControl.Configuration.BPFClientProxy.initializeClientProxy();
    }
    var $v_0 = ProcessControl.Configuration.BPFClientProxy.$1S.retrieveEntityMetadataAsync(entityLogicalName);
    $v_0.done(function() {
        var $v_1 = ProcessControl.Configuration.BPFClientProxy.$1S.$E_0[entityLogicalName];
        callback($v_1);
    });
}
ProcessControl.Configuration.BPFClientProxy.launchLookupDialog = function(entityLogicalName, attributeLogicalName, callback) {
    var $v_0 = Mscrm.BusinessRules.BusinessRuleEntityManager.get_instance();
    $v_0.generateAttributeDictionary($v_0.getEntity(entityLogicalName));
    var $v_1 = $v_0.getAttributeByEntityAndName(entityLogicalName, attributeLogicalName);
    var $v_2 = $v_1.AdditionalMetadata;
    var $v_3 = $v_2.DefaultType;
    var $v_4 = $v_2.LookupTypes;
    var $v_5 = '/_controls/lookup/lookupinfo.aspx?DefaultType=' + $v_3 + '&IsInlineMultiLookup=0&LookupStyle=single&ShowNewButton=1&ShowPropButton=1&browse=false&dType=1&mrsh=false&objecttypes=' + $v_4;
    var $v_6 = Mscrm.CrmUri.createWithOrigin($v_5);
    var $v_7 = new Mscrm.ReturnFunctionReference();
    $v_7.callback = callback;
    var $v_8 = new Mscrm.CrmDialog($v_6, null, 550, 550, null);
    $v_8.setCallbackReference($v_7);
    $v_8.show();
}
ProcessControl.Configuration.BPFClientProxy.launchWorkflowLookupDialog = function(ViewId, callback, showNewBtn) {
    window.TabSessionId = Mscrm.Utilities.createGuid();
    window.NavigationCounter = 0;
    var $v_0 = '';
    if (ViewId === '') {
        ViewId = '45102185-B1B4-422b-A3BF-F1BA9C6E130A';
    }
    if (showNewBtn) {
        $v_0 = '/_controls/lookup/lookupinfo.aspx?DefaultType=4703&DefaultViewId=' + ViewId + '&IsInlineMultiLookup=0&LookupStyle=single&ShowNewButton=1&ShowPropButton=1&browse=true&dType=1&mrsh=false&objecttypes=4703';
    }
    else {
        $v_0 = '/_controls/lookup/lookupinfo.aspx?DefaultType=4703&DefaultViewId=' + ViewId + '&IsInlineMultiLookup=0&LookupStyle=single&ShowNewButton=0&ShowPropButton=1&browse=true&dType=1&mrsh=false&objecttypes=4703';
    }
    var $v_1 = Mscrm.CrmUri.createWithOrigin($v_0);
    var $v_2 = new Mscrm.ReturnFunctionReference();
    $v_2.callback = callback;
    var $v_3 = new Mscrm.CrmDialog($v_1, null, 550, 550, null);
    $v_3.setCallbackReference($v_2);
    $v_3.show();
    return $v_3;
}
ProcessControl.Configuration.BPFClientProxy.launchWorkflowNewDialog = function() {
    var $v_0 = '/' + window.ORG_UNIQUE_NAME + '/sfa/workflow/';
    var $v_1 = Mscrm.CrmUri.createWithOrigin($v_0 + 'workflowTemplate/workflowTemplatePage.aspx');
    var $v_2 = getWindowInformation(4703);
    var $v_3 = $v_2['windowInfo'];
    var $v_4 = '1472468033315';
    var $v_5 = Mscrm.CrmUri.createWithOrigin($v_0 + 'edit.aspx');
    var $v_6 = null;
    var $v_7 = null;
    var $v_8 = [ 4703, $v_5, $v_3, '', $v_4, 4703, $v_6, 1200, 768, false, $v_7 ];
    var $v_9 = new Xrm.DialogOptions();
    $v_9.height = 480;
    $v_9.width = 640;
    var $v_A = Mscrm.Utilities.createCallbackFunctionForXrmDialog(refreshWorkflowGrid, $v_8);
    var $v_B = new Mscrm.CrmDialog($v_1, null, 550, 550, null);
    $v_B.setCallbackReference($v_A);
    $v_B.show();
}
ProcessControl.Configuration.BPFClientProxy.buildChromeElement = function(elementId) {
    var $v_0 = new Mscrm.Proxies.JQueryProxy();
    var $v_1 = new ProcessConfiguration.Builder.InlineEditControlBuilder();
    $v_1.set_jQueryProxy($v_0);
    var $v_2 = 'DateTimeControl';
    var $v_3 = '';
    var $v_4 = $v_1.build($v_3, elementId, $v_2);
    $v_4.attribute('tabindex', '-1');
    return $v_4;
}
ProcessControl.Configuration.BPFClientProxy.createInlineDateTimeControl = function(element, attributeName, initialDateTime, parentContainerId, isDateOnly) {
    var $v_0;
    if (isDateOnly) {
        $v_0 = 'date';
    }
    else {
        $v_0 = 'datetime';
    }
    var $v_1 = {};
    $v_1['raw'] = (IsNull(initialDateTime)) ? null : (ProcessControl.Configuration.BPFClientProxy.convertToUserSettingTime(initialDateTime, isDateOnly)).localeFormat('s');
    return Mscrm.InlineControlFactory.createInlineDateTimeControlForDom(element, attributeName, $v_0, 1, $v_1, parentContainerId);
}
ProcessControl.Configuration.BPFClientProxy.updateDateTimeControl = function(dateTimeControlEditView) {
    dateTimeControlEditView.get_dataContext().setPropertyWithoutRaisingEvent('EditValue', dateTimeControlEditView.get_editElementValue());
    dateTimeControlEditView.confirm();
}
ProcessControl.Configuration.BPFClientProxy.getUserSettingTime = function(value, isDateOnly) {
    var $v_0 = value;
    if (isDateOnly) {
        var $v_1 = Date.UTC($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate());
        return ProcessControl.Configuration.BPFClientProxy.getUtcStringInGmtFormat(new Date($v_1));
    }
    else {
        var $v_2 = $v_0.getTime();
        var $v_3 = ProcessControl.Configuration.BPFClientProxy.$6M($v_0);
        var $v_4 = new Date($v_2 - $v_3);
        return ProcessControl.Configuration.BPFClientProxy.getUtcStringInGmtFormat($v_4);
    }
}
ProcessControl.Configuration.BPFClientProxy.convertToUserSettingTime = function(dateTimeValue, isDateOnly) {
    if (IsNull(dateTimeValue)) {
        return null;
    }
    if (isDateOnly) {
        return dateTimeValue;
    }
    else {
        var $v_0 = dateTimeValue.getTime();
        var $v_1 = ProcessControl.Configuration.BPFClientProxy.$6M(dateTimeValue);
        var $v_2 = new Date($v_0 + $v_1);
        return $v_2;
    }
}
ProcessControl.Configuration.BPFClientProxy.getUtcStringInGmtFormat = function(utcTime) {
    return utcTime.toUTCString().replace('UTC', 'GMT');
}
ProcessControl.Configuration.BPFClientProxy.parseDateInvariant = function(dateString) {
    return Date.parseInvariant(dateString);
}
ProcessControl.Configuration.BPFClientProxy.$6M = function($p0) {
    return ($p0.getTimezoneOffset() + window.ORG_TIMEZONE_OFFSET) * 60000;
}
ProcessControl.Configuration.BPFClientProxy.getFormId = function() {
    return ProcessControl.Configuration.BPFClientProxy.$4l.get_businessProcessFlowModel().get_formId();
}
ProcessControl.Configuration.BPFClientProxy.getStageCategoryMetadata = function() {
    return ProcessControl.Configuration.BPFClientProxy.$4l.get_stageCategoryMetadata();
}


ProcessControl.Configuration.ProcessDesignerMenuActions = function() {
}
ProcessControl.Configuration.ProcessDesignerMenuActions.saveProcess = function(eventData) {
    GenericWorkflowDesigner.StaticStopwatch = new GenericWorkflowDesigner.Stopwatch();
    GenericWorkflowDesigner.StaticStopwatch.reset();
    GenericWorkflowDesigner.StaticStopwatch.start();
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessDesignerMenuActions.validationButtonOff();
    var $v_0 = window['isProcessActivated'];
    if ($v_0) {
        var $v_3 = isTaskFlow;
        if ($v_3) {
            MscrmControls.ProcessDesigner.TBXDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
        }
        else {
            MscrmControls.ProcessDesigner.ProcessDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
        }
        MscrmControls.ProcessDesigner.Validation.Engine.setAction(MscrmControls.ProcessDesigner.Validation.Level.Activate);
    }
    else {
        MscrmControls.ProcessDesigner.Validation.Engine.setAction(MscrmControls.ProcessDesigner.Validation.Level.Save);
    }
    var $v_1 = ProcessControl.Configuration.ProcessDesignerMenuActions.$3b();
    if (!$v_1.isValid) {
        GenericWorkflowDesigner.StaticStopwatch.stop();
        var $v_4 = GenericWorkflowDesigner.StaticStopwatch.elapsedMilliseconds;
        var $v_5 = ($v_1.errorText && $v_1.errorText.trim().length > 0) ? $v_1.errorText : 'Validation error';
        window.designerSave($v_4, $v_5, 1);
        return;
    }
    if (window._OverwriteOnSave) {
        var $v_6 = new Xrm.ConfirmDialogStrings();
        $v_6.title = Xrm.Internal.getResourceString('ProcessControl.Configurator.OverwriteWarning.Title');
        $v_6.text = Xrm.Internal.getResourceString('ProcessControl.Configurator.OverwriteWarning');
        $v_6.confirmButtonLabel = Xrm.Internal.getResourceString('Button_Label_OK');
        $v_6.cancelButtonLabel = Xrm.Internal.getResourceString('Button_Label_Cancel');
        var $v_7 = new Xrm.DialogOptions();
        $v_7.height = 250;
        $v_7.width = 550;
        Xrm.Dialog.openConfirmDialog($v_6, $v_7, function() {
            window._OverwriteOnSave = false;
            ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
            ProcessControl.Configuration.ProcessDesignerMenuActions.$4r(null);
        }, function() {
            ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
            return;
        });
    }
    else {
        ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
        ProcessControl.Configuration.ProcessDesignerMenuActions.$4r(null);
    }
    var $v_2 = $P_CRM('#processingDialog');
    $v_2.attr('tabIndex', '0');
    $v_2.attr('aria-label', 'saving');
    $v_2.focus();
}
ProcessControl.Configuration.ProcessDesignerMenuActions.get_$2Q = function() {
    if (IsNull(ProcessControl.Configuration.ProcessDesignerMenuActions.$1x)) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$1x = new Mscrm.ProgressControl();
    }
    return ProcessControl.Configuration.ProcessDesignerMenuActions.$1x;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$4r = function($p0) {
    if (ProcessControl.Configuration.ProcessDesignerMenuActions.$1n) {
        var $v_0 = $P_CRM('#ProcessName');
        var $v_1 = $v_0.val();
        var $v_2 = $P_CRM('#Description');
        var $v_3 = $v_2.val();
        MscrmControls.ProcessDesigner.ControlManager.setProcessTitle($v_1);
        MscrmControls.ProcessDesigner.ControlManager.setProcessDescription($v_3);
    }
    ProcessControl.Configuration.ProcessDesignerMenuActions.$4p('UpdateProcess', function($p1_0, $p1_1) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.get_$2Q().hide();
        ProcessControl.Configuration.ProcessDesignerMenuActions.$6n($p1_0, $p1_1);
        if (!IsNull($p0)) {
            $p0($p1_0, $p1_1);
        }
    });
}
ProcessControl.Configuration.ProcessDesignerMenuActions.saveProcessAs = function(eventData) {
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessDesignerMenuActions.validationButtonOff();
    var $v_0 = window['isProcessActivated'];
    if ($v_0) {
        var $v_3 = isTaskFlow;
        if ($v_3) {
            MscrmControls.ProcessDesigner.TBXDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
        }
        else {
            MscrmControls.ProcessDesigner.ProcessDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
        }
        MscrmControls.ProcessDesigner.Validation.Engine.setAction(MscrmControls.ProcessDesigner.Validation.Level.Activate);
    }
    else {
        MscrmControls.ProcessDesigner.Validation.Engine.setAction(MscrmControls.ProcessDesigner.Validation.Level.Save);
    }
    var $v_1 = ProcessControl.Configuration.ProcessDesignerMenuActions.$3b();
    if (!$v_1.isValid) {
        return;
    }
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    ProcessControl.Configuration.ProcessDesignerMenuActions.$A6();
    var $v_2 = $P_CRM('#processingDialog');
    $v_2.attr('tabIndex', '0');
    $v_2.attr('aria-label', 'saving');
    $v_2.focus();
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$A6 = function() {
    ProcessControl.Configuration.ProcessDesignerMenuActions.$4p('SaveAsBpf', ProcessControl.Configuration.ProcessDesignerMenuActions.$6m);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$5W = function($p0, $p1) {
    getTopWindow().opener.AppDesignerCallback($p0,'BPC',null,$p1);;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$6m = function($p0, $p1) {
    ProcessControl.Configuration.ProcessDesignerMenuActions.get_$2Q().hide();
    var $v_0 = ($p0.Success) ? $p0.ReturnValue : null;
    if (!isNullOrEmptyString($p0.ReturnValue) && $v_0.indexOf('_error') < 0) {
        var $v_1 = $p0.ReturnValue.toString();
        if (ProcessControl.Configuration.ProcessDesignerMenuActions.$5m()) {
            var $v_2 = new Mscrm.AppDesignerResult();
            if (!isNullOrEmptyString($v_1)) {
                $v_2.id = $v_1.toLowerCase();
                ProcessControl.Configuration.ProcessDesignerMenuActions.$5W($v_2, false);
                return;
            }
        }
        ProcessControl.Configuration.ProcessDesignerMenuActions.$4q();
        Mscrm.BpfConfiguratorUtils.launchConfigurator($v_1);
    }
    else {
        var $v_3 = ProcessControl.Configuration.ProcessDesignerMenuActions.$4g($p0);
        if (!IsNull($v_3)) {
            var $v_4 = Mscrm.ErrorInformation.createErrorInfo($v_3.Code, $v_3.DisplayText, $v_3.SerializedException);
            Mscrm.ErrorStatusControl.showCrmMessage($v_4);
        }
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$4p = function($p0, $p1) {
    MscrmControls.ProcessDesigner.ControlManager.ConvertBPFActivityTreeToJson();
    var $v_0 = window.clientdata;
    if (!isNullOrEmptyString($v_0)) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.get_$2Q().forceShow();
        ProcessControl.Configuration.BpfDataUtility.executeConfiguratorActionCommand($v_0, $p0, $p1, Mscrm.RemoteCommandXml.remoteCommandXmlDefaultErrorHandler);
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$6n = function($p0, $p1) {
    GenericWorkflowDesigner.StaticStopwatch.stop();
    var $v_0 = GenericWorkflowDesigner.StaticStopwatch.elapsedMilliseconds;
    localStorage.setItem('ProcessDesignerControl_BPF_SaveProcess', $v_0) ;
    if ($p0.Success) {
        window.isDirty = false;
        if (ProcessControl.Configuration.ProcessDesignerMenuActions.$5m()) {
            var $v_1 = new Mscrm.AppDesignerResult();
            var $v_2 = window._Process_Id;
            if (!isNullOrEmptyString($v_2)) {
                $v_1.id = $v_2.substring(1, $v_2.length - 1).toLowerCase();
                $v_1.displayName = JSON.parse(window.clientdata).title;
                $v_1.description = JSON.parse(window.clientdata).description;
                ProcessControl.Configuration.ProcessDesignerMenuActions.$5W($v_1, false);
            }
        }
        if (!IsNull(window._Process_IsSMBSalesApp) && window._Process_IsSMBSalesApp && !isNullOrEmptyString(window._Process_ParkingSolutionUniqueName)) {
            ProcessControl.Configuration.ProcessDesignerMenuActions.addProcessDataToSmbSolution(window._Process_ParkingSolutionUniqueName, window._Process_Id);
        }
        ProcessControl.Configuration.ProcessDesignerMenuActions.$1c('UpdateProcess', $v_0);
    }
    else {
        var $v_3 = ProcessControl.Configuration.ProcessDesignerMenuActions.$4g($p0);
        if (!IsNull($v_3)) {
            var $v_4 = Mscrm.ErrorInformation.createErrorInfo($v_3.Code, $v_3.DisplayText, $v_3.SerializedException);
            Mscrm.ErrorStatusControl.showCrmMessage($v_4);
            var $v_5 = $v_3.DisplayText + ' \n' + $v_3.SerializedException;
            window.designerSave($v_0, $v_5, 1);
        }
        else {
            ProcessControl.Configuration.ProcessDesignerMenuActions.$A0($v_0, $p0);
        }
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.addProcessDataToSmbSolution = function(parkingSolutionUniqueName, processId) {
    var $v_0 = new ProcessControl.Configuration.solutionParameter();
    $v_0.SolutionUniqueName = parkingSolutionUniqueName;
    $v_0.ComponentId = processId;
    $v_0.ComponentType = 29;
    $v_0.AddRequiredComponents = true;
    $v_0.DoNotIncludeSubcomponents = false;
    $v_0.IncludedComponentSettingsValues = null;
    ProcessControl.Configuration.BpfDataUtility.addProcessDataToSmbSolution($v_0);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.activateBusinessProcessFlow = function(eventData) {
    GenericWorkflowDesigner.StaticStopwatch = new GenericWorkflowDesigner.Stopwatch();
    GenericWorkflowDesigner.StaticStopwatch.reset();
    GenericWorkflowDesigner.StaticStopwatch.start();
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    MscrmControls.ProcessDesigner.Validation.Engine.setAction(MscrmControls.ProcessDesigner.Validation.Level.Activate);
    var $v_0 = ProcessControl.Configuration.ProcessDesignerMenuActions.$3b();
    if (!$v_0.isValid) {
        return;
    }
    var $v_1 = window.isDirty;
    if ($v_1) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$4r(function($p1_0, $p1_1) {
            if (!$p1_0.Success) {
                return;
            }
            ProcessControl.Configuration.ProcessDesignerMenuActions.$31('/_grid/cmds/dlg_activate.aspx', ProcessControl.Configuration.ProcessDesignerMenuActions.activateProcessConfirmationCallback);
        });
    }
    else {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$31('/_grid/cmds/dlg_activate.aspx', ProcessControl.Configuration.ProcessDesignerMenuActions.activateProcessConfirmationCallback);
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.activateProcessConfirmationCallback = function(confirmation) {
    GenericWorkflowDesigner.StaticStopwatch.stop();
    var $v_0 = GenericWorkflowDesigner.StaticStopwatch.elapsedMilliseconds;
    localStorage.setItem('ProcessDesignerControl_BPF_ActivateProcess', $v_0) ;
    if (GenericWorkflowDesigner.designerType === GenericWorkflowDesigner.DesignerType.BpfDesigner) {
        var $v_1 = confirmation;
        if (!IsNull($v_1.value) && $v_1.value) {
            ProcessControl.Configuration.ProcessDesignerMenuActions.$1c('ActivateBusinessProcess', $v_0);
        }
        else {
            window.designerActivate($v_0, $v_1.errorCode, $v_1.error, 1);
        }
    }
    else {
        if (!IsNull(confirmation) && confirmation) {
            ProcessControl.Configuration.ProcessDesignerMenuActions.$1c('ActivateBusinessProcess', $v_0);
        }
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$31 = function($p0, $p1) {
    var $v_0 = new Mscrm.ReturnFunctionReference();
    $v_0.content = {};
    $v_0.callback = $p1;
    var $v_1 = new Mscrm.CrmDialog(ProcessControl.Configuration.ProcessDesignerMenuActions.$4f($p0), [ window._Process_Id ], 500, 200, null);
    $v_1.setCallbackReference($v_0);
    $v_1.show();
}
ProcessControl.Configuration.ProcessDesignerMenuActions.deactivateProcessConfirmationCallback = function(confirmation) {
    GenericWorkflowDesigner.StaticStopwatch.stop();
    var $v_0 = GenericWorkflowDesigner.StaticStopwatch.elapsedMilliseconds;
    localStorage.setItem('ProcessDesignerControl_BPF_DeactivateProcess', $v_0) ;
    if (GenericWorkflowDesigner.designerType === GenericWorkflowDesigner.DesignerType.BpfDesigner) {
        var $v_1 = confirmation;
        if (!IsNull($v_1.value) && $v_1.value) {
            ProcessControl.Configuration.ProcessDesignerMenuActions.$1c('DeactivateBusinessProcess', $v_0);
        }
        else {
            window.designerDeactivate($v_0, $v_1.errorCode, $v_1.error, 1);
        }
    }
    else {
        if (!IsNull(confirmation) && confirmation) {
            ProcessControl.Configuration.ProcessDesignerMenuActions.$1c('DeactivateBusinessProcess', $v_0);
        }
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$4f = function($p0) {
    var $v_0 = Mscrm.CrmUri.createWithOrigin($p0);
    $v_0.get_query()['iObjType'] = 4703;
    $v_0.get_query()['iTotal'] = '1';
    $v_0.get_query()['sIds'] = window._Process_Id;
    return $v_0;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$4g = function($p0) {
    if (!$p0.Success || isNullOrEmptyString($p0.ReturnValue)) {
        return null;
    }
    try {
        var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(($p0.ReturnValue).substr(8));
        if (!IsNull($v_0) && !IsNull($v_0['_error'])) {
            return $v_0['_error'];
        }
    }
    catch ($v_1) {
    }
    return null;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.deleteBusinessProcessFlow = function(eventData) {
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    ProcessControl.Configuration.ProcessDesignerMenuActions.$7v();
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$7v = function() {
    ProcessControl.Configuration.ProcessDesignerMenuActions.$6Y();
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$6Y = function() {
    ProcessControl.Configuration.ProcessDesignerMenuActions.$9e('/_grid/cmds/dlg_delete.aspx', ProcessControl.Configuration.ProcessDesignerMenuActions.deleteProcessConfirmationCallback);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.deleteProcessConfirmationCallback = function(confirmation) {
    if (!IsNull(confirmation) && confirmation) {
        if (ProcessControl.Configuration.ProcessDesignerMenuActions.$5m()) {
            var $v_0 = new Mscrm.AppDesignerResult();
            var $v_1 = window._Process_Id;
            if (!isNullOrEmptyString($v_1)) {
                $v_0.id = $v_1.substring(1, $v_1.length - 1).toLowerCase();
                ProcessControl.Configuration.ProcessDesignerMenuActions.$5W($v_0, true);
            }
        }
    }
    ProcessControl.Configuration.ProcessDesignerMenuActions.$1c('DeleteBusinessProcess', null);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.deactivateBusinessProcessFlow = function(eventData) {
    GenericWorkflowDesigner.StaticStopwatch = new GenericWorkflowDesigner.Stopwatch();
    GenericWorkflowDesigner.StaticStopwatch.reset();
    GenericWorkflowDesigner.StaticStopwatch.start();
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    MscrmControls.ProcessDesigner.Validation.Engine.setAction(MscrmControls.ProcessDesigner.Validation.Level.Deactivate);
    var $v_0 = ProcessControl.Configuration.ProcessDesignerMenuActions.$3b();
    if (!$v_0.isValid) {
        return;
    }
    var $v_1 = window.isDirty;
    if ($v_1) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$4r(function($p1_0, $p1_1) {
            if (!$p1_0.Success) {
                return;
            }
            ProcessControl.Configuration.ProcessDesignerMenuActions.$31('/_grid/cmds/dlg_deactivate.aspx', ProcessControl.Configuration.ProcessDesignerMenuActions.deactivateProcessConfirmationCallback);
        });
    }
    else {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$31('/_grid/cmds/dlg_deactivate.aspx', ProcessControl.Configuration.ProcessDesignerMenuActions.deactivateProcessConfirmationCallback);
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$1c = function($p0, $p1) {
    var $v_0 = false;
    var $v_1 = false;
    var $v_2 = false;
    var $v_3 = window.designerLoaded;
    switch ($p0) {
        case 'DeleteBusinessProcess':
            $v_0 = true;
            $v_2 = true;
            break;
        case 'ActivateBusinessProcess':
        case 'DeactivateBusinessProcess':
            $v_0 = true;
            $v_1 = true;
            if ($p0 === 'ActivateBusinessProcess') {
                if (!IsNull($v_3) && Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.UnifiedProcessDesigner')) {
                    window.designerActivate($p1, '', '', 0);
                }
            }
            else if ($p0 === 'DeactivateBusinessProcess') {
                if (!IsNull($v_3) && Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.UnifiedProcessDesigner')) {
                    window.designerDeactivate($p1, '', '', 0);
                }
            }
            break;
        case 'UpdateProcess':
            if (ProcessControl.Configuration.ProcessDesignerMenuActions.$1n) {
                $v_0 = true;
                var $v_4 = MscrmControls.ProcessDesigner.ControlManager.processTitle;
                ProcessControl.Configuration.ProcessDesignerMenuActions.$6t($v_4);
                ProcessControl.Configuration.ProcessDesignerMenuActions.$1n = false;
            }
            if (!IsNull($v_3) && Mscrm.FeatureControl.get_Current().isFeatureEnabled('FCB.UnifiedProcessDesigner')) {
                window.designerSave($p1, '', 0);
            }
            break;
    }
    if ($v_0) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$4q();
    }
    if ($v_1) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$6f(true);
    }
    if ($v_2) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$5w();
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$6t = function($p0) {
    var $v_0 = $P_CRM('#ProcessTitle');
    $v_0.text($p0);
    $v_0.attr('title', $p0);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$5w = function() {
    getTopWindow().close();
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$6f = function($p0) {
    window.location.reload($p0);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$5m = function() {
    if (Mscrm.FeatureControl.get_Current().areFeaturesEnabled([ 'FCB.AppModuleForOrganization', 'FCB.AppDesigner' ])) {
        var $v_0 = getTopWindow();
        return !IsNull($v_0) && !IsNull($v_0.opener) && !IsNull($v_0.opener.AppDesignerCallback);
    }
    return false;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$4q = function() {
    var $v_0 = getTopWindow();
    if (!isWindowOpenerAccessible($v_0)) {
        return;
    }
    if (!IsNull($v_0.opener) && !IsNull($v_0.opener.auto)) {
        $v_0.opener.auto('4703');
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.openProcessRoleAssignment = function(eventData) {
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = isTaskFlow;
    if ($v_0) {
        var $v_1 = '/tools/dialogs/RoleAssignment.aspx?oid=' + CrmEncodeDecode.CrmUrlEncode(window._Process_Id);
        ProcessControl.Configuration.ProcessDesignerMenuActions.$3Z($v_1);
    }
    else {
        var $v_2 = Mscrm.CrmUri.create('/tools/business/home_role.aspx');
        openStdWin($v_2, 'RoleAssignment', 660, 580, null, '');
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.openProcessOrder = function(eventData) {
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = '/tools/dialogs/componentorder.aspx?etn=' + CrmEncodeDecode.CrmUrlEncode(MscrmControls.ProcessDesigner.primaryEntity);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$3Z($v_0);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.showBusinessProcessFlowDependencies = function(eventData) {
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = Mscrm.CrmUri.create('/tools/dependency/dependencyviewdialog.aspx');
    $v_0.get_query()['objectid'] = window._Process_Id;
    $v_0.get_query()['objecttype'] = 4703;
    $v_0.get_query()['operationtype'] = 'showdependency';
    openStdWin($v_0, 'ShowDependency', 660, 580, null, '');
}
ProcessControl.Configuration.ProcessDesignerMenuActions.openBusinessRules = function(eventData) {
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.$Z(eventData)) {
        return;
    }
    var $v_0 = Mscrm.CrmUri.create('/tools/SystemCustomization/BusinessRules/businessRulesList.aspx');
    var $v_1 = new ProcessConfiguration.InitializationContext();
    var $v_2 = $v_1.get_businessProcessFlowModel().get_primaryEntityName();
    if (!IsNull($v_1.get_entityMetadata())) {
        $v_0.get_query()['entityId'] = ($v_1.get_entityMetadata()[$v_2])['EntityMetadataId'];
    }
    $v_0.get_query()['appSolutionId'] = window.DEF_SOL_ID;
    $v_0.get_query()['formId'] = $v_1.get_businessProcessFlowModel().get_formId();
    openStdWin($v_0, 'OpenBusinessRules', 660, 580, null, '');
}
ProcessControl.Configuration.ProcessDesignerMenuActions.validateProcess = function(eventData) {
    GenericWorkflowDesigner.StaticStopwatch = new GenericWorkflowDesigner.Stopwatch();
    GenericWorkflowDesigner.StaticStopwatch.reset();
    GenericWorkflowDesigner.StaticStopwatch.start();
    if (eventData.which === 13 || eventData.type === 'click') {
        ProcessControl.Configuration.ProcessDesignerMenuActions.$AM();
    }
    GenericWorkflowDesigner.StaticStopwatch.stop();
    var $v_0 = GenericWorkflowDesigner.StaticStopwatch.elapsedMilliseconds;
    localStorage.setItem('ProcessDesignerControl_BPF_ValidateProcessOn', $v_0) ;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.validationButtonOn = function() {
    var $v_0 = $P_CRM('#_MBValidateOn');
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.isValidationOn()) {
        $v_0.addClass('_MBValidateOff');
        $P_CRM($v_0.selector + ' a').attr('title', ProcessDesignerControl_BPF_ValidateMode_On);
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.validationButtonOff = function() {
    var $v_0 = $P_CRM('#_MBValidateOn');
    if (ProcessControl.Configuration.ProcessDesignerMenuActions.isValidationOn()) {
        $v_0.removeClass('_MBValidateOff');
        $P_CRM($v_0.selector + ' a').attr('title', ProcessDesignerControl_BPF_ValidateMode_Off);
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.titleOrDescriptionChanged = function(eventData) {
    ProcessControl.Configuration.ProcessDesignerMenuActions.$1n = true;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.bindMenuActions = function() {
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBSave', ProcessControl.Configuration.ProcessDesignerMenuActions.saveProcess);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBUpdate', ProcessControl.Configuration.ProcessDesignerMenuActions.saveProcess);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBSaveAs', ProcessControl.Configuration.ProcessDesignerMenuActions.saveProcessAs);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBActivate', ProcessControl.Configuration.ProcessDesignerMenuActions.activateBusinessProcessFlow);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBDeactivate', ProcessControl.Configuration.ProcessDesignerMenuActions.deactivateBusinessProcessFlow);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBDelete', ProcessControl.Configuration.ProcessDesignerMenuActions.deleteBusinessProcessFlow);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBOrder', ProcessControl.Configuration.ProcessDesignerMenuActions.openProcessOrder);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBRoleAssignment', ProcessControl.Configuration.ProcessDesignerMenuActions.openProcessRoleAssignment);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBDependencies', ProcessControl.Configuration.ProcessDesignerMenuActions.showBusinessProcessFlowDependencies);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBBusinessRules', ProcessControl.Configuration.ProcessDesignerMenuActions.openBusinessRules);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$X('#_MBValidateOn', ProcessControl.Configuration.ProcessDesignerMenuActions.validateProcess);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$4X('#ProcessName', ProcessControl.Configuration.ProcessDesignerMenuActions.titleOrDescriptionChanged);
    ProcessControl.Configuration.ProcessDesignerMenuActions.$4X('#Description', ProcessControl.Configuration.ProcessDesignerMenuActions.titleOrDescriptionChanged);
    var $v_0 = {};
    $v_0['Action'] = 'Shortcut';
    $P_CRM(window).bind('keydown', $v_0, ProcessControl.Configuration.ProcessDesignerMenuActions.$6X);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.isValidationOn = function() {
    var $v_0 = $P_CRM('#_MBValidateOn');
    var $v_1 = false;
    if ($v_0.hasClass('_MBValidateOff')) {
        $v_1 = true;
    }
    return $v_1;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$A0 = function($p0, $p1) {
    var $v_0 = $P_CRM($p1.RawResponse);
    var $v_1 = $v_0.find('error')[0];
    if ($v_1) {
        var $v_2 = ($v_1.getElementsByTagName('description').length > 0) ? $v_1.getElementsByTagName('description')[0].innerHTML : 'Server error';
        var $v_3 = ($v_1.getElementsByTagName('stacktrace').length > 0) ? $v_1.getElementsByTagName('stacktrace')[0].innerHTML : '';
        var $v_4 = $v_2 + ' \n' + $v_3;
        window.designerSave($p0, $v_4, 1);
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$AS = function() {
    var $v_0 = isTaskFlow;
    if ($v_0) {
        MscrmControls.ProcessDesigner.TBXDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
    }
    else {
        MscrmControls.ProcessDesigner.ProcessDesignerControl.validationMode = GenericWorkflowDesigner.ValidationMode.Error;
    }
    MscrmControls.ProcessDesigner.Validation.Engine.setAction(MscrmControls.ProcessDesigner.Validation.Level.Validate);
    return ProcessControl.Configuration.ProcessDesignerMenuActions.$3b().isValid;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$AR = function() {
    GenericWorkflowDesigner.StaticStopwatch = new GenericWorkflowDesigner.Stopwatch();
    GenericWorkflowDesigner.StaticStopwatch.reset();
    GenericWorkflowDesigner.StaticStopwatch.start();
    MscrmControls.ProcessDesigner.ValidateBPF.validateOff();
    GenericWorkflowDesigner.StaticStopwatch.stop();
    var $v_0 = GenericWorkflowDesigner.StaticStopwatch.elapsedMilliseconds;
    localStorage.setItem('ProcessDesignerControl_BPF_ValidateProcessOff', $v_0) ;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$AM = function() {
    if (ProcessControl.Configuration.ProcessDesignerMenuActions.isValidationOn()) {
        ProcessControl.Configuration.ProcessDesignerMenuActions.validationButtonOff();
        ProcessControl.Configuration.ProcessDesignerMenuActions.$AR();
    }
    else {
        ProcessControl.Configuration.ProcessDesignerMenuActions.validationButtonOn();
        ProcessControl.Configuration.ProcessDesignerMenuActions.$AS();
    }
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$6X = function($p0) {
    if (!ProcessControl.Configuration.ProcessDesignerMenuActions.isCtrlKeyPressed($p0)) {
        return;
    }
    switch (String.fromCharCode($p0.which).toLowerCase()) {
        case 's':
            ProcessControl.Configuration.ProcessDesignerMenuActions.saveProcess($p0);
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
ProcessControl.Configuration.ProcessDesignerMenuActions.$3Z = function($p0) {
    var $v_0 = Mscrm.CrmUri.createWithOrigin($p0);
    $v_0 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_0);
    var $v_1 = new Xrm.DialogOptions();
    $v_1.width = 660;
    $v_1.height = 580;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$9e = function($p0, $p1) {
    var $v_0 = ProcessControl.Configuration.ProcessDesignerMenuActions.$4f($p0);
    var $v_1 = openStdDlgWithCallback($v_0, [ window._Process_Id ], 500, 200, $p1);
    return $v_1;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$4X = function($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    $v_0.bind('change', $p1);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$Z = function($p0) {
    if ($p0.which === 9) {
        return false;
    }
    if (($p0.which !== 13 && $p0.which !== 1 && $p0.which)) {
        if (!IsNull($p0.data)) {
            if ((('Action') in $p0.data) && $p0.data['Action'] !== 'Shortcut') {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.isCtrlKeyPressed = function(e) {
    return (e.ctrlKey || e.metaKey);
}
ProcessControl.Configuration.ProcessDesignerMenuActions.getOrigin = function() {
    var $v_0 = isTaskFlow;
    if (!$v_0) {
        return MscrmControls.ProcessDesigner.ProcessDesignerControl.getOrigin();
    }
    return null;
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$X = function($p0, $p1) {
    var $v_0 = $P_CRM($p0);
    $v_0.bind('click', $p1);
    $v_0.bind('keydown', $p1);
    $v_0.removeAttr('action');
    $v_0.removeAttr('onClick');
    var $v_1 = $P_CRM('a', $v_0);
    $v_1.removeAttr('href');
}
ProcessControl.Configuration.ProcessDesignerMenuActions.$3b = function() {
    var result = MscrmControls.ProcessDesigner.ValidateBPF.validate();
    var $v_0 = result.isValid;
    var $v_1 = result.errors.length > 0 && result.errors[0] || null;
    return new Mscrm.ValidationResult($v_0, $v_1);
}


ProcessControl.Configuration.ProcessDesignerMenuActions.ReturnObj = function() {
}
ProcessControl.Configuration.ProcessDesignerMenuActions.ReturnObj.prototype = {
    value: null,
    errorCode: null,
    error: null
}


ProcessControl.Configuration.EntityTabsControl = function(element) {
    ProcessControl.Configuration.EntityTabsControl.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.EntityTabsControl.prototype = {
    
    initialize: function() {
        Mscrm.FormInputControl.Tabs.TabsControl.prototype.initialize.call(this);
        this.get_tabsContentjQueryObject().height(this.get_tabsControljQueryObject().height() - this.get_tabsHeaderjQueryObject().height());
        var $v_0 = this.get_tabLinksjQueryObject().filter('.active');
        if (!IsNull($v_0)) {
            $v_0.focus();
        }
    }
}


ProcessControl.Configuration.ProcessConfigurationUtility = function() {
}
ProcessControl.Configuration.ProcessConfigurationUtility.getIndexFromTabContentId = function(tabId) {
    tabId = tabId.replace('pcc_', '');
    return Number.parseInvariant(tabId);
}
ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl = function() {
    if (IsNull(Mscrm.InlineEditUtilities.get_activeControl())) {
        return;
    }
    Mscrm.InlineEditUtilities.get_activeControl().blur();
}
ProcessControl.Configuration.ProcessConfigurationUtility.isLinkControl = function(stepStep) {
    var $v_0 = Microsoft.Crm.Workflow.ObjectModel.ControlStep.getControlStep(stepStep.get_Steps().get_item(0));
    if (!$v_0.get_isSystemControl()) {
        return false;
    }
    var $v_1 = $v_0.get_parameters();
    return ($v_1 === '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>') || ($v_1 === '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>');
}
ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepTypeFromControlParameters = function(control) {
    if (!control.get_isSystemControl()) {
        return '';
    }
    switch (control.get_parameters()) {
        case '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{f9e54d49-0c76-4cbd-979b-5fe94b496be0}</InlineViewIds></parameters>':
            return 'IdentifyAccount';
        case '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Incident</EntityLogicalName><InlineViewIds>{06D2061B-703E-465B-B8AD-FD69C6157127}</InlineViewIds></parameters>':
            return 'IdentifyCase';
        case '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74220}</InlineViewIds></parameters>':
            return 'LeadIdentifyContact';
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
ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls = function(processControlView) {
    var $v_0 = processControlView.get_dataContext();
    ProcessControl.Configuration.ProcessConfigurationUtility.$AG(processControlView);
    if (!ProcessControl.Configuration.ProcessConfigurationUtility.workflowCanContainSystemSteps($v_0)) {
        return;
    }
    for (var $v_1 = 0; $v_1 < $v_0.get_Steps().get_Count(); $v_1++) {
        var $v_2 = $v_0.get_Steps().get_item($v_1);
        if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_2))) {
            continue;
        }
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps($v_2)) {
            continue;
        }
        for (var $v_3 = 0; $v_3 < $v_2.get_Steps().get_Count(); $v_3++) {
            var $v_4 = $v_2.get_Steps().get_item($v_3);
            for (var $v_5 = 0; $v_5 < $v_4.get_Steps().get_Count(); $v_5++) {
                if (!(Microsoft.Crm.Workflow.ObjectModel.StepStep.isInstanceOfType($v_4.get_Steps().get_item($v_5)))) {
                    continue;
                }
                var $v_6 = $v_4.get_Steps().get_item($v_5);
                if (!ProcessControl.Configuration.ProcessConfigurationUtility.isLinkControl($v_6)) {
                    continue;
                }
                var $v_7 = Microsoft.Crm.Workflow.ObjectModel.ControlStep.getControlStep($v_6.get_Steps().get_item(0));
                ProcessControl.Configuration.ProcessConfigurationUtility.$8x($v_7, processControlView);
            }
        }
    }
}
ProcessControl.Configuration.ProcessConfigurationUtility.workflowCanContainSystemSteps = function(workflowStep) {
    for (var $v_0 = 0; $v_0 < workflowStep.get_Steps().get_Count(); $v_0++) {
        var $v_1 = workflowStep.get_Steps().get_item($v_0);
        if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_1))) {
            continue;
        }
        if (ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps($v_1)) {
            return true;
        }
    }
    return false;
}
ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps = function(entityStep) {
    var $v_0 = entityStep.get_EntityLogicalName();
    return $v_0 === 'incident' || $v_0 === 'lead';
}
ProcessControl.Configuration.ProcessConfigurationUtility.$AG = function($p0) {
    for (var $v_0 = 0; $v_0 < $p0.get_$Ac_3().length; $v_0++) {
        ($p0.get_$Ac_3()[$v_0]).configureControlStepMenu();
    }
}
ProcessControl.Configuration.ProcessConfigurationUtility.$8x = function($p0, $p1) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepTypeFromControlParameters($p0);
    var $v_1 = String.format('div.pc_en_colh_ss_menu li[data-system-step-enum-value=\'{0}\']', $v_0);
    var $v_2 = $P_CRM($p1.get_element());
    var $v_3 = $v_2.find($v_1);
    $v_3.css('display', 'none');
}
ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel = function(labelValue, lcid, labelId) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.StepLabel();
    $v_0.set_description(labelValue);
    $v_0.set_labelId(labelId);
    $v_0.set_languageCode(parseInt(lcid));
    return $v_0;
}
ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabelForCurrentUser = function(labelValue, labelId) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel(labelValue, window._Process_CurrentLCID, labelId);
}
ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStageData = function(workflowStep) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.StageStep(workflowStep, window.LOCID_PROCESS_NEWSTAGETEXTKEY);
    ProcessControl.Configuration.ProcessConfigurationUtility.$AF(workflowStep, $v_0);
    var $v_1 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData(workflowStep);
    $v_1.set_parent($v_0);
    $v_1.get_parent().set_workflow(workflowStep);
    $v_1.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_0.appendStep($v_1);
    return $v_0;
}
ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyPageData = function(workflowStep) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.PageStep(workflowStep, window.LOCID_PROCESS_NEWPAGETEXTKEY);
    ProcessControl.Configuration.ProcessConfigurationUtility.$AC(workflowStep, $v_0);
    var $v_1 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData(workflowStep);
    $v_1.set_parent($v_0);
    $v_1.get_parent().set_workflow(workflowStep);
    $v_1.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_0.appendStep($v_1);
    return $v_0;
}
ProcessControl.Configuration.ProcessConfigurationUtility.$AF = function($p0, $p1) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid();
    $p1.addLabel(ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel(window.LOCID_PROCESS_NEWSTAGETEXTKEY, window._Process_CurrentLCID, $v_0));
    $p1.set_workflow($p0);
    $p1.setJQueryFriendlyNameAndId($p0.get_currentStepId());
    $p1.set_stageId($v_0);
    $p1.set_stageCategory('-1');
}
ProcessControl.Configuration.ProcessConfigurationUtility.$AC = function($p0, $p1) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid();
    $p1.addLabel(ProcessControl.Configuration.ProcessConfigurationUtility.generateStepLabel(window.LOCID_PROCESS_NEWPAGETEXTKEY, window._Process_CurrentLCID, $v_0));
    $p1.set_workflow($p0);
    $p1.setJQueryFriendlyNameAndId($p0.get_currentStepId());
    $p1.set_stageId(ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid());
    $p1.set_stageCategory('-1');
    $p1.set_pageLayoutId($v_0);
}
ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData = function(workflowStep) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '', '', '', '');
}
ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep = function(workflowStep, parameters, dataFieldName, classId, controlDisplayName) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid();
    var $v_1;
    if (workflowStep.get_workflowBusinessProcessType() === 1) {
        $v_1 = window.LOCID_PROCESS_PAGE_NEWLABEL;
    }
    else {
        $v_1 = window.LOCID_PROCESS_NEWSTEPTEXTKEY;
    }
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
ProcessControl.Configuration.ProcessConfigurationUtility.generateSystemStep = function(stepType, workflowStep, entityMetadata, displayName) {
    switch (stepType) {
        case 'IdentifyAccount':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyAccountStep(workflowStep, entityMetadata, displayName);
        case 'IdentifyCase':
            return ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyCaseStep(workflowStep, entityMetadata, displayName);
        case 'LeadIdentifyContact':
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
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyContactStep = function(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74220}</InlineViewIds></parameters>', 'parentcontactid', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyAccountStep = function(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{f9e54d49-0c76-4cbd-979b-5fe94b496be0}</InlineViewIds></parameters>', 'parentaccountid', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyCustomerStep = function(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Contact</EntityLogicalName><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74228},{f9e54d49-0c76-4cbd-979b-5fe94b496beb}</InlineViewIds></parameters>', 'customerid', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
ProcessControl.Configuration.ProcessConfigurationUtility.getIdentifyCaseStep = function(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Incident</EntityLogicalName><InlineViewIds>{06D2061B-703E-465B-B8AD-FD69C6157127}</InlineViewIds></parameters>', 'existingcase', '270BD3DB-D9AF-4782-9025-509E298DEC0A', displayName);
}
ProcessControl.Configuration.ProcessConfigurationUtility.getSolutionStep = function(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>', '', 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D', displayName);
}
ProcessControl.Configuration.ProcessConfigurationUtility.getResolveStep = function(workflowStep, entityMetadata, displayName) {
    return ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStep(workflowStep, '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>', '', 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D', displayName);
}
ProcessControl.Configuration.ProcessConfigurationUtility.getControlDisplayName = function(datafieldName, fields) {
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
ProcessControl.Configuration.ProcessConfigurationUtility.getEmptyControl = function(workflowStep) {
    var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.ControlStep(workflowStep);
    $v_0.set_dataFieldName('');
    $v_0.set_classId(Mscrm.Utilities.emptyGuid());
    $v_0.set_parameters('');
    $v_0.set_isSystemControl(false);
    $v_0.setJQueryFriendlyNameAndId(workflowStep.get_currentStepId());
    $v_0.set_controlId(ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid());
    return $v_0;
}
ProcessControl.Configuration.ProcessConfigurationUtility.sanitizeId = function(id) {
    return id.replace('{', '').replace('}', '');
}
ProcessControl.Configuration.ProcessConfigurationUtility.getCleanGuid = function() {
    return ProcessControl.Configuration.ProcessConfigurationUtility.sanitizeId(Mscrm.Utilities.createGuid());
}
ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser = function(labels, labelId) {
    for (var $v_0 = 0; $v_0 < labels.get_count(); $v_0++) {
        if (labels.get_item($v_0).get_labelId() === labelId) {
            return labels.get_item($v_0);
        }
    }
    return null;
}
ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser = function(labels, newLabelValue, labelId) {
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
ProcessControl.Configuration.ProcessConfigurationUtility.getCloseLoopEntityList = function(relationshipDictionary, entityList, lastEntity) {
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
        $v_3.ReferencingEntityLogicalName = $v_2;
        $v_3.ReferencingEntityLabel = ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent($v_2);
        Array.add($v_0, $v_3);
    }
    return $v_0;
}
ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess = function(steps) {
    var $v_0 = [];
    for (var $v_1 = 0; $v_1 < steps.get_Steps().get_Count(); $v_1++) {
        var $v_2 = steps.get_Steps().get_item($v_1);
        if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_2))) {
            continue;
        }
        if ($v_2.get_Description() !== 'DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B') {
            Array.add($v_0, $v_2.get_EntityLogicalName());
        }
    }
    return $v_0;
}
ProcessControl.Configuration.ProcessConfigurationUtility.getFirstDoNotPersistEntityStep = function(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(workflowStep);
    return ($v_0 < 5) ? workflowStep.get_Steps().get_item($v_0) : null;
}
ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep = function(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(workflowStep);
    return ($v_0 <= 5) ? workflowStep.get_Steps().get_item($v_0 - 1) : null;
}
ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidProcessControlEntityView = function(processControlView) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(processControlView.get_dataContext().get_workflow());
    return ($v_0 <= 5) ? processControlView.get_$Ac_3()[$v_0 - 1] : null;
}
ProcessControl.Configuration.ProcessConfigurationUtility.getEntityBeforeLast = function(workflowStep) {
    var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep(workflowStep);
    return ($v_0 <= 5) ? workflowStep.get_Steps().get_item($v_0 - 2) : null;
}
ProcessControl.Configuration.ProcessConfigurationUtility.getIndexOfFirstDoNotPersistEntityStep = function(workflowStep) {
    for (var $v_0 = 0; $v_0 < workflowStep.get_Steps().get_Count(); $v_0++) {
        var $v_1 = workflowStep.get_Steps().get_item($v_0);
        if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_1))) {
            continue;
        }
        if ($v_1.get_Description() === 'DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B') {
            return $v_0;
        }
    }
    return 5;
}
ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly = function(view) {
    if (Mscrm.Utilities.parseBoolean(window._Process_IsReadOnly)) {
        view.set_disabled(true);
    }
}
ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly = function() {
    return Mscrm.Utilities.parseBoolean(window._Process_IsReadOnly);
}
ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepControlId = function(controlStep) {
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
ProcessControl.Configuration.ProcessConfigurationUtility.createAttributeArray = function(attributes) {
    var $v_0 = new Array(0);
    if (!IsNull(attributes)) {
        for (var $v_1 = 0; $v_1 < attributes.length; $v_1++) {
            var $v_2 = new Mscrm.EnumOptionJsonWrapper();
            $v_2.Value = $v_1;
            $v_2.Label = attributes[$v_1].Label.Description;
            Array.add($v_0, $v_2);
        }
    }
    return $v_0;
}
ProcessControl.Configuration.ProcessConfigurationUtility.createAttributeMetadataModel = function(displayText, entityLogicalName, lcid) {
    var $v_0 = new ProcessControl.Configuration.LabelJsonWrapper();
    $v_0.Description = displayText;
    $v_0.LCID = lcid;
    var $v_1 = new ProcessControl.Configuration.FieldMetadataJsonWrapper();
    $v_1.Label = $v_0;
    $v_1.LogicalName = entityLogicalName;
    var $v_2 = new ProcessConfiguration.Models.AttributeMetadataModel();
    $v_2.set_attributeMetadata($v_1);
    return $v_2;
}


ProcessControl.Configuration.ProcessSaveEventArgs = function(status, statusReason, serverException) {
    this.$5I_0 = status;
    this.$5J_0 = statusReason;
    this.$5E_0 = serverException;
}
ProcessControl.Configuration.ProcessSaveEventArgs.prototype = {
    
    get_status: function() {
        return this.$5I_0;
    },
    
    get_statusReason: function() {
        return this.$5J_0;
    },
    
    get_serverException: function() {
        return this.$5E_0;
    },
    
    $5I_0: 0,
    $5J_0: 0,
    $5E_0: null
}


ProcessControl.Configuration.ProcessSaveStatus = function() {
}


ProcessControl.Configuration.SuccessStatusReason = function() {
}


ProcessControl.Configuration.FailureStatusReason = function() {
}


ProcessControl.Configuration.StageCategory = function() {
}
ProcessControl.Configuration.StageCategory.initialize = function(stageCategories) {
    ProcessControl.Configuration.StageCategory.$1r = stageCategories;
    var $v_0 = new Mscrm.EnumOptionJsonWrapper();
    $v_0.Value = -1;
    $v_0.Label = '';
    Array.insert(ProcessControl.Configuration.StageCategory.$1r, 0, $v_0);
}
ProcessControl.Configuration.StageCategory.getStageCategories = function() {
    return ProcessControl.Configuration.StageCategory.$1r;
}
ProcessControl.Configuration.StageCategory.getLabelByValue = function(value) {
    if (IsNull(ProcessControl.Configuration.StageCategory.$1r)) {
        return '';
    }
    for (var $v_0 = 0; $v_0 < ProcessControl.Configuration.StageCategory.$1r.length; $v_0++) {
        if (ProcessControl.Configuration.StageCategory.$1r[$v_0].Value.toString() === value) {
            return ProcessControl.Configuration.StageCategory.$1r[$v_0].Label;
        }
    }
    return '';
}


ProcessControl.Configuration.ProcessEnabledEntities = function() {
}
ProcessControl.Configuration.ProcessEnabledEntities.initialize = function(entities) {
    ProcessControl.Configuration.ProcessEnabledEntities.$3B = entities;
    ProcessControl.Configuration.ProcessEnabledEntities.$w = new Array(0);
    ProcessControl.Configuration.ProcessEnabledEntities.$4D = {};
    for (var $v_0 = 0; $v_0 < entities.length; $v_0++) {
        var $v_1 = new Mscrm.EnumOptionJsonWrapper();
        $v_1.Value = $v_0;
        $v_1.Label = entities[$v_0].DisplayName;
        ProcessControl.Configuration.ProcessEnabledEntities.$4D[$v_0.toString()] = entities[$v_0].LogicalName;
        Array.add(ProcessControl.Configuration.ProcessEnabledEntities.$w, $v_1);
    }
}
ProcessControl.Configuration.ProcessEnabledEntities.getEntities = function() {
    return ProcessControl.Configuration.ProcessEnabledEntities.$3B;
}
ProcessControl.Configuration.ProcessEnabledEntities.getLabelByValue = function(value) {
    if (IsNull(ProcessControl.Configuration.ProcessEnabledEntities.$w)) {
        return '';
    }
    for (var $v_0 = 0; $v_0 < ProcessControl.Configuration.ProcessEnabledEntities.$w.length; $v_0++) {
        if (ProcessControl.Configuration.ProcessEnabledEntities.$w[$v_0].Value.toString() === value) {
            return ProcessControl.Configuration.ProcessEnabledEntities.$w[$v_0].Label;
        }
    }
    return '';
}
ProcessControl.Configuration.ProcessEnabledEntities.getLogicalNameByValue = function(value) {
    if (IsNull(ProcessControl.Configuration.ProcessEnabledEntities.$w)) {
        return '';
    }
    for (var $v_0 = 0; $v_0 < ProcessControl.Configuration.ProcessEnabledEntities.$w.length; $v_0++) {
        if (ProcessControl.Configuration.ProcessEnabledEntities.$w[$v_0].Value.toString() === value) {
            return ProcessControl.Configuration.ProcessEnabledEntities.$4D[value];
        }
    }
    return '';
}
ProcessControl.Configuration.ProcessEnabledEntities.getLabelByLogicalName = function(logicalName) {
    if (IsNull(ProcessControl.Configuration.ProcessEnabledEntities.$3B)) {
        return '';
    }
    for (var $$arr_1 = ProcessControl.Configuration.ProcessEnabledEntities.$3B, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
        var $v_0 = $$arr_1[$$idx_3];
        if ($v_0.LogicalName === logicalName) {
            return $v_0.DisplayName;
        }
    }
    return '';
}
ProcessControl.Configuration.ProcessEnabledEntities.getValueByLogicalName = function(logicalName) {
    var $v_0 = ProcessControl.Configuration.ProcessEnabledEntities.getLabelByLogicalName(logicalName);
    for (var $v_1 = 0; $v_1 < ProcessControl.Configuration.ProcessEnabledEntities.$w.length; $v_1++) {
        if (ProcessControl.Configuration.ProcessEnabledEntities.$w[$v_1].Label === $v_0) {
            return ProcessControl.Configuration.ProcessEnabledEntities.$w[$v_1].Value;
        }
    }
    return 0;
}
ProcessControl.Configuration.ProcessEnabledEntities.getEnumOptions = function() {
    return ProcessControl.Configuration.ProcessEnabledEntities.$w;
}


ProcessControl.Configuration.RelationshipPickerDialogArguments = function() {
}
ProcessControl.Configuration.RelationshipPickerDialogArguments.prototype = {
    $1d_0: null,
    
    get_allAvailableRelationships: function() {
        return this.$1d_0;
    },
    
    set_allAvailableRelationships: function(value) {
        this.$1d_0 = value;
        return value;
    },
    
    $1j_0: null,
    
    get_selectedRelationships: function() {
        return this.$1j_0;
    },
    
    set_selectedRelationships: function(value) {
        this.$1j_0 = value;
        return value;
    },
    
    $1b_0: null,
    
    get_targetStageId: function() {
        return this.$1b_0;
    },
    
    set_targetStageId: function(value) {
        this.$1b_0 = value;
        return value;
    },
    
    $5H_0: null,
    
    get_stageById: function() {
        return this.$5H_0;
    },
    
    set_stageById: function(value) {
        this.$5H_0 = value;
        return value;
    }
}


ProcessControl.Configuration.EmptyView = function() {
}
ProcessControl.Configuration.EmptyView.prototype = {
    
    renderView: function() {
    },
    
    get_dataContext: function() {
        return new ProcessControl.Configuration.EmptyViewModel();
    },
    
    set_dataContext: function(value) {
        return value;
    },
    
    $E_0: null,
    
    get_entityMetadata: function() {
        return this.$E_0;
    },
    
    set_entityMetadata: function(value) {
        this.$E_0 = value;
        return value;
    },
    
    validate: function() {
    },
    
    get_validationResult: function() {
        return new Mscrm.ValidationResult(true, null);
    },
    
    get_elementWrapper: function() {
        return null;
    }
}


ProcessControl.Configuration.EmptyJsonWrapper = function() {
}


ProcessControl.Configuration.EmptyViewModel = function() {
}
ProcessControl.Configuration.EmptyViewModel.prototype = {
    
    dispose: function() {
    }
}


ProcessControl.Configuration.ProcessControlEntityView = function(element) {
    this.$$d_$9q_5 = Function.createDelegate(this, this.$9q_5);
    ProcessControl.Configuration.ProcessControlEntityView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlEntityView.prototype = {
    
    get_dataContext: function() {
        return ProcessControl.Configuration.ProcessControlViewBase$2.prototype.get_dataContext.call(this);
    },
    
    set_dataContext: function(value) {
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.set_dataContext.call(this, value);
        var $v_0 = value.get_Steps();
        var $v_1 = $v_0.get_Count();
        var $v_2 = $P_CRM('#' + String.format('{0}_sl', this.get_elementWrapper().get(0).id));
        var $v_3 = $v_2.children('*');
        var $v_4 = this.get_$Ac_3();
        var $v_5 = ProcessControl.Configuration.ProcessControlStageView;
        for (var $v_6 = 0; $v_6 < $v_1; $v_6++) {
            var $v_7 = {};
            $v_7['dataContext'] = $v_0.get_item($v_6);
            $v_7['parentView'] = this;
            var $v_8 = Mscrm.CrmUIComponent.crmCreate($v_5, $v_7, null, null, $v_3[$v_6]);
            $v_8.set_entityMetadata(this.get_entityMetadata());
            Array.add($v_4, $v_8);
        }
        $v_0.add_stepCollectionChanged(this.$$d_$9q_5);
        return value;
    },
    
    setEntityMetadata: function(entityMetadata) {
        this.set_entityMetadata(entityMetadata);
    },
    
    get_relationshipMetadata: function() {
        return this.$t_5;
    },
    
    set_relationshipMetadata: function(value) {
        this.$t_5 = value;
        return value;
    },
    
    $t_5: null,
    
    renderView: function() {
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.renderView.call(this);
        var $v_0 = {};
        $v_0['entityView'] = this;
        this.$35_5 = $create(ProcessControl.Configuration.AddStageBehavior, $v_0, null, null, $get(String.format('{0}_add{1}', this.get_id(), 'stage')));
        this.$27_5 = $create(ProcessControl.Configuration.AddStepBehavior, $v_0, null, null, $get(String.format('{0}_add{1}', this.get_id(), 'step')));
    },
    
    configureControlStepMenu: function() {
        if (!IsNull(this.$27_5)) {
            this.$27_5.configureMenu();
        }
    },
    
    setFocus: function() {
        if (this.get_$Ac_3().length > 0) {
            (this.get_$Ac_3()[0]).setFocus(false);
        }
        else {
            $P_CRM('#' + String.format('{0}_add{1}', this.get_id(), 'step')).children(':first-child').focus();
        }
    },
    
    $9q_5: function($p0, $p1) {
        var $v_0 = $p1;
        switch ($v_0.get_action()) {
            case 0:
                this.$7G_5($v_0);
                break;
            case 1:
                this.$7w_5($v_0);
                break;
            case 2:
                var $v_1 = $p1;
                this.move($v_1);
                break;
        }
    },
    
    $7G_5: function($p0) {
        var $v_0 = this.addChildView($p0.get_newItems());
        $v_0.setFocus(true);
        this.executePostAddSteps();
    },
    
    $7w_5: function($p0) {
        if ($p0.get_oldStartingIndex() < 0) {
            return;
        }
        this.removeChildView($p0.get_oldStartingIndex());
        this.executePostRemoveSteps($p0.get_oldStartingIndex());
    },
    
    move: function(args) {
        ProcessControl.Configuration.ProcessControlExtensibleView$2.prototype.move.call(this, args);
        this.$5Z_5([ args.get_oldStartingIndex(), args.get_newStartingIndex() ]);
    },
    
    get_uiBuilder: function() {
        return new ProcessConfiguration.Builder.StageBuilder();
    },
    
    get_childViewContainer: function() {
        return $P_CRM('#' + String.format('{0}_sl', this.get_id()));
    },
    
    executePostAddSteps: function() {
        ProcessControl.Configuration.ProcessControlExtensibleView$2.prototype.executePostAddSteps.call(this);
        var $v_0 = this.get_$Ac_3().length - 1;
        this.$5Z_5([ $v_0 - 1, $v_0, $v_0 + 1 ]);
    },
    
    executePostRemoveSteps: function(index) {
        if (index < 0) {
            throw Error.create('Invalid Index');
        }
        ProcessControl.Configuration.ProcessControlExtensibleView$2.prototype.executePostRemoveSteps.call(this, index);
        this.$5Z_5([ index - 1, index ]);
        var $v_0 = this.findBestChildViewForFocus(index);
        if (IsNull($v_0)) {
            return;
        }
        $v_0.setFocus(false);
    },
    
    $5Z_5: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = this.get_$Ac_3()[$p0[$v_0]];
            if (IsNull($v_1)) {
                continue;
            }
            if (this.get_$Ac_3().length > $p0[$v_0] + 1) {
                $v_1.get_$22_5().children(':nth-child(2)').css('display', 'block');
            }
            else {
                $v_1.get_$22_5().children(':nth-child(2)').css('display', 'none');
            }
            if ($p0[$v_0] > 0) {
                $v_1.get_$22_5().children(':first-child').css('display', 'block');
            }
            else {
                $v_1.get_$22_5().children(':first-child').css('display', 'none');
            }
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.get_dataContext()) || !IsNull(this.get_dataContext().get_Steps())) {
            this.get_dataContext().get_Steps().remove_stepCollectionChanged(this.$$d_$9q_5);
        }
        if (!IsNull(this.$35_5)) {
            this.$35_5.dispose();
            this.$35_5 = null;
        }
        if (!IsNull(this.$27_5)) {
            this.$27_5.dispose();
            this.$27_5 = null;
        }
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.dispose.call(this);
    },
    
    $35_5: null,
    $27_5: null
}


ProcessControl.Configuration.ProcessControlExtensibleView$2 = function(element) {
    ProcessControl.Configuration.ProcessControlExtensibleView$2.$$(this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView$2']['TChildView'], this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView$2']['TChildViewModel']).initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlExtensibleView$2.$$ = function(TChildView, TChildViewModel) {
    var $$cn = 'ProcessControlExtensibleView$2' + '$' + TChildView.getName().replace(/\./g, '_') + '$' + TChildViewModel.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.ProcessControlExtensibleView$2'] = {'TChildView': TChildView, 'TChildViewModel': TChildViewModel};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.ProcessControlExtensibleView$2.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn, ProcessControl.Configuration.ProcessControlViewBase$2.$$(TChildViewModel, TChildView), ProcessControl.Configuration.IExtensibleProcessControlView$2.$$(TChildView, TChildViewModel));
        var $$dict_6 = ProcessControl.Configuration.ProcessControlExtensibleView$2.prototype;
        for (var $$key_7 in $$dict_6) {
            var $$entry_8 = { key: $$key_7, value: $$dict_6[$$key_7] };
            if ('constructor' !== $$entry_8.key) {
                $$ccr.prototype[$$entry_8.key] = $$entry_8.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.ProcessControlExtensibleView$2.prototype = {
    
    addChildView: function(viewModel) {
        var $v_0 = this.buildDomForNewView(viewModel);
        var $v_1 = this.createNewViewControl(viewModel, $v_0);
        $v_1.set_entityMetadata(this.get_entityMetadata());
        Array.insert(this.get_$Ac_3(), this.get_$Ac_3().length, $v_1);
        $v_1.renderView();
        this.executePostAddSteps();
        return $v_1;
    },
    
    move: function(args) {
        var $v_0 = document.activeElement;
        var $v_1 = this.get_$Ac_3()[args.get_oldStartingIndex()];
        var $v_2 = this.get_$Ac_3()[args.get_newStartingIndex()];
        if (args.get_newStartingIndex() < args.get_oldStartingIndex()) {
            $v_1.get_elementWrapper().insertBefore($v_2.get_elementWrapper());
        }
        else {
            $v_1.get_elementWrapper().insertAfter($v_2.get_elementWrapper());
        }
        Array.removeAt(this.get_$Ac_3(), args.get_oldStartingIndex());
        Array.insert(this.get_$Ac_3(), args.get_newStartingIndex(), $v_1);
        $v_0.focus();
        if (Mscrm.CrmBrowser.get_currentBrowser().get_agent() === (1)) {
            this.$88_4($v_1);
        }
    },
    
    $88_4: function($p0) {
        $p0.get_elementWrapper().focus();
        var $v_0 = $p0.get_elementWrapper().offset().top;
    },
    
    buildDomForNewView: function(viewModel) {
        var $v_0 = this.get_uiBuilder();
        var $v_1 = $v_0.buildProcessComponent(viewModel, this.get_id()).get_jQueryObject();
        this.get_childViewContainer().append($v_1);
        return $v_1;
    },
    
    createNewViewControl: function(viewModel, newViewDom) {
        var $v_0 = {};
        $v_0['dataContext'] = viewModel;
        $v_0['parentView'] = this;
        return Mscrm.CrmUIComponent.crmCreate(this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView$2']['TChildView'], $v_0, null, null, newViewDom.get(0));
    },
    
    executePostAddSteps: function() {
    },
    
    removeChildView: function(index) {
        var $v_0 = this.get_$Ac_3()[index];
        Array.removeAt(this.get_$Ac_3(), index);
        var $v_1 = $v_0.get_elementWrapper();
        ($v_0).dispose();
        $v_0 = ((this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView$2']['TChildView'] === Number || Type.isEnum(this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView$2']['TChildView'])) ? 0 : (this.$$gta['ProcessControl.Configuration.ProcessControlExtensibleView$2']['TChildView'] === Boolean) ? false : null);
        $v_1.remove();
        this.executePostRemoveSteps(index);
    },
    
    executePostRemoveSteps: function(index) {
    },
    
    findBestChildViewForFocus: function(index) {
        if (!this.get_$Ac_3().length) {
            return null;
        }
        if (index === this.get_$Ac_3().length) {
            return this.get_$Ac_3()[this.get_$Ac_3().length - 1];
        }
        return this.get_$Ac_3()[index];
    }
}


ProcessControl.Configuration.ProcessControlStageView = function(element) {
    this.$$d_addStepKeyBoardShortcut = Function.createDelegate(this, this.addStepKeyBoardShortcut);
    this.$$d_$7h_5 = Function.createDelegate(this, this.$7h_5);
    this.$$d_$9p_5 = Function.createDelegate(this, this.$9p_5);
    this.$$d_$9n_5 = Function.createDelegate(this, this.$9n_5);
    this.$$d_$9d_5 = Function.createDelegate(this, this.$9d_5);
    this.$$d_onStageNameChanged = Function.createDelegate(this, this.onStageNameChanged);
    ProcessControl.Configuration.ProcessControlStageView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlStageView.prototype = {
    $d_5: null,
    
    get_stageViewModel: function() {
        return this.$d_5;
    },
    
    set_stageViewModel: function(value) {
        this.$d_5 = value;
        return value;
    },
    
    $1_5: null,
    
    get_metadataService: function() {
        return this.$1_5;
    },
    
    set_metadataService: function(value) {
        this.$1_5 = value;
        return value;
    },
    
    $2_5: null,
    
    get_viewFactory: function() {
        return this.$2_5;
    },
    
    set_viewFactory: function(value) {
        this.$2_5 = value;
        return value;
    },
    
    renderView: function() {
        this.$9O_5(window.LOCID_PROCESS_NEWSTAGETEXTKEY);
        this.$9L_5();
        var $$t_0 = this;
        (this.$1_5).retrieveEntityAndRelationshipMetadataAsync(this.$d_5.get_entityLogicalName()).done(function() {
            if (!$$t_0.$d_5.get_isFirstStage()) {
                $$t_0.$97_5();
            }
            $$t_0.renderProcessControlViewBase();
            $$t_0.bindEvents();
        });
    },
    
    renderProcessControlViewBase: function() {
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.renderView.call(this);
    },
    
    bindEvents: function() {
        var $$t_3 = this;
        this.get_$1A_5().bind('keydown', function($p1_0) {
            switch ($p1_0.which) {
                case 13:
                case 127:
                    var $v_1 = $$t_3.$2_5.getStageViewById($$t_3.get_id());
                    $v_1.deleteStage();
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation();
                    break;
            }
        });
        var $v_0 = $P_CRM(this.get_element()).find('.pc_steplistc');
        $v_0.bind('keydown', this.$$d_$9d_5);
    },
    
    $9d_5: function($p0) {
        var $v_0 = $p0.keyCode === 9;
        var $v_1 = $p0.shiftKey;
        var $v_2 = !$v_0 || $v_1;
        if ($v_2) {
            return;
        }
        this.$AQ_5($p0);
    },
    
    $AQ_5: function($p0) {
        var $v_0 = this.get_dataContext().get_Steps().get_Count() === 1;
        var $v_1 = $P_CRM($p0.target);
        var $v_2 = $P_CRM(this.get_element()).find('.pc_steplistc');
        var $v_3 = $v_1.is($v_2.find('.pc_step_d_img').last());
        var $v_4 = $v_1.is($v_2.find('.pc_step_req.prc_step_rc').last().find('img'));
        var $v_5 = $v_0 && $v_4;
        var $v_6 = !$v_0 && $v_3;
        if ($v_5 || $v_6) {
            this.get_$1A_5().addClass('pc_stg_del_sel');
            this.get_$1A_5().find('img').focus();
            $p0.preventDefault();
            $p0.stopPropagation();
        }
    },
    
    setFocus: function(selectStageName) {
        if (selectStageName) {
            this._stageNameView.get_valueElement().focus();
            var $$t_1 = this;
            window.setTimeout(function() {
                $$t_1._stageNameView.get_valueElement().click();
                $$t_1._stageNameView.get_editView().get_editElement().select();
            }, 10);
        }
        else {
            this.get_elementWrapper().focus();
        }
    },
    
    $97_5: function() {
        var $v_0 = String.format('{0}_entity', this.get_elementWrapper().get(0).id);
        var $v_1 = this.get_elementWrapper().find('.stage-parent-entity');
        var $v_2 = this.$8Y_5();
        this.$2i_5 = Mscrm.InlineControlFactory.createInlinePicklistControlForDomByControlMode($v_1, $v_0, ProcessControl.Configuration.ProcessEnabledEntities.getEnumOptions(), '', 'normal', $v_2.toString());
        this.$2i_5.initializeAndRenderEditView();
        this.fixStageControl(ProcessControl.Configuration.ProcessEnabledEntities.getLabelByLogicalName(this.$d_5.get_entityLogicalName()), this.$2i_5);
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$2i_5);
        this.$2i_5.get_chromeElement().bind('attribute-changed', this.$$d_$9n_5);
    },
    
    $9n_5: function($p0) {
        if (arguments.length > 1) {
            var $v_0 = arguments[1];
            var $v_1 = ProcessControl.Configuration.ProcessEnabledEntities.getLogicalNameByValue($v_0);
            var $$t_3 = this;
            (this.$1_5).retrieveEntityAndRelationshipMetadataAsync($v_1).done(function() {
                $$t_3.$d_5.changeEntity($v_1);
            });
        }
    },
    
    $9O_5: function($p0) {
        var $v_0 = String.format('{0}_name', this.get_elementWrapper().get(0).id);
        var $v_1 = this.get_elementWrapper().find('.stage-name');
        var $v_2 = {};
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), this.get_dataContext().get_stageId());
        $v_2['value'] = CrmEncodeDecode.CrmHtmlEncode(CrmEncodeDecode.CrmHtmlEncode($v_3.get_description()));
        this._stageNameView = Mscrm.InlineControlFactory.createInlineTextBoxControlForDom($v_1, $v_0, 100, $v_2, 'pcc', 'normal');
        this._stageNameView.get_dataContext().set_emptyValuePlaceholder($p0);
        this._stageNameView.initializeAndRenderEditView();
        this.fixStageControl($v_3.get_description(), this._stageNameView);
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this._stageNameView);
        this._stageNameView.get_chromeElement().bind('attribute-changed', this.$$d_onStageNameChanged);
    },
    
    $9L_5: function() {
        var $v_0 = String.format('{0}_category', this.get_elementWrapper().get(0).id);
        var $v_1 = this.get_elementWrapper().find('.stage-category');
        if ($v_1.length > 0) {
            var $v_2 = this.$8X_5();
            this.$2G_5 = Mscrm.InlineControlFactory.createInlinePicklistControlForDomByControlMode($v_1, $v_0, ProcessControl.Configuration.StageCategory.getStageCategories(), '', 'normal', $v_2);
            this.$2G_5.initializeAndRenderEditView();
            this.fixStageControl(ProcessControl.Configuration.StageCategory.getLabelByValue(this.$2G_5.get_dataContext().get_editValue()), this.$2G_5);
            ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$2G_5);
            this.$2G_5.get_chromeElement().bind('attribute-changed', this.$$d_$9p_5);
        }
    },
    
    $8X_5: function() {
        var $v_0;
        if (isNullOrEmptyString(this.get_dataContext().get_stageCategory())) {
            $v_0 = '-1';
        }
        else {
            $v_0 = this.get_dataContext().get_stageCategory();
        }
        return $v_0;
    },
    
    $8Y_5: function() {
        return ProcessControl.Configuration.ProcessEnabledEntities.getValueByLogicalName(this.$d_5.get_entityLogicalName());
    },
    
    fixStageControl: function(name, view) {
        if (isNullOrEmptyString(name)) {
            name = view.get_dataContext().get_emptyValuePlaceholder();
        }
        var $v_0 = view.get_valueElement();
        if (view.get_valueElement().text() === name) {
            return;
        }
        $v_0.text(name);
        (view.get_layout()).updateTooltip(name);
    },
    
    onStageNameChanged: function(eventHandler) {
        if (arguments.length > 1) {
            var $v_0 = arguments[1];
            if (isNullOrEmptyString($v_0)) {
                this._stageNameView.get_dataContext().get_attribute().set_rawValue(this.getDefaultStageNameKey());
                return;
            }
            this.get_dataContext().set_stageName($v_0);
            ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), $v_0, this.get_dataContext().get_stageId());
        }
    },
    
    $9p_5: function($p0) {
        if (arguments.length > 1) {
            var $v_0 = arguments[1];
            if (isNullOrEmptyString($v_0)) {
                this.get_dataContext().set_stageCategory('-1');
                return;
            }
            this.get_dataContext().set_stageCategory($v_0);
        }
    },
    
    getDefaultStageNameKey: function() {
        return window.LOCID_PROCESS_NEWSTAGETEXTKEY;
    },
    
    $7h_5: function($p0, $p1) {
        var $v_0 = $p1;
        switch ($v_0.get_action()) {
            case 0:
                this.$7H_5($v_0);
                break;
            case 1:
                this.$5R_5($v_0);
                break;
            case 2:
                var $v_1 = $p1;
                this.move($v_1);
                break;
        }
    },
    
    addStepKeyBoardShortcut: function(eventObject) {
        if (eventObject.altKey && eventObject.shiftKey && eventObject.keyCode === 78) {
            var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData(this.get_dataContext().get_workflow());
            var $v_1 = ProcessConfiguration.Behavior.StageFocusBehavior.$6.$2_5.get_stepBuilder().buildProcessComponent($v_0, $v_0.get_Id());
            var $v_2 = $P_CRM('#' + this.get_id() + ' ul');
            $v_2.append($v_1.get_jQueryObject());
            var $v_3 = this.$d_5.get_stageModel().get_stepModelFactory().createStepModel($v_0);
            var $v_4 = this.$d_5.get_childStepListViewModel().addStepViewModel($v_3);
            var $v_5 = this.$2_5.get_viewAdapterFactory().createStepViewAdapter(this.$2_5, $v_1, $v_4, this.$1O_5.get_viewFactory().getStageViewById(this.get_id()));
            $v_5.set_nextStepViewAdapter($v_5);
            $v_5.initialize();
            $v_5.get_stepFocusBehaviorAdapter().get_instance().get_view().setFocus(true);
            eventObject.preventDefault();
            eventObject.stopPropagation();
        }
    },
    
    $7H_5: function($p0) {
        if (Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType($p0.get_newItems())) {
            return;
        }
        var $v_0 = this.addChildView($p0.get_newItems());
        $v_0.setFocus(true);
    },
    
    $5R_5: function($p0) {
        this.removeChildView($p0.get_oldStartingIndex());
    },
    
    get_uiBuilder: function() {
        return new ProcessConfiguration.Builder.StepBuilder();
    },
    
    get_childViewContainer: function() {
        return $P_CRM('#' + String.format('{0}_spl', this.get_id()));
    },
    
    executePostRemoveSteps: function(index) {
        ProcessControl.Configuration.ProcessControlExtensibleView$2.prototype.executePostRemoveSteps.call(this, index);
        var $v_0 = this.findBestChildViewForFocus(index);
        if (IsNull($v_0)) {
            return;
        }
        $v_0.setFocus(false);
    },
    
    get_parentView: function() {
        return this.$s_5;
    },
    
    set_parentView: function(value) {
        this.$s_5 = value;
        return value;
    },
    
    get_$25_5: function() {
        if (IsNull(this.$4Q_5)) {
            this.$4Q_5 = this.get_elementWrapper();
        }
        return this.$4Q_5;
    },
    
    get_$22_5: function() {
        if (IsNull(this.$3f_5)) {
            this.$3f_5 = this.get_elementWrapper().children(':first-child').children(':first-child').children(':first-child');
        }
        return this.$3f_5;
    },
    
    get_$1A_5: function() {
        if (IsNull(this.$1s_5)) {
            this.$1s_5 = this.get_elementWrapper().children(':first-child').children(':nth-child(3)').children(':first-child').children(':first-child');
        }
        return this.$1s_5;
    },
    
    $1O_5: null,
    
    get_stageViewAdapter: function() {
        return this.$1O_5;
    },
    
    set_stageViewAdapter: function(value) {
        this.$1O_5 = value;
        return value;
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.get_dataContext()) || !IsNull(this.get_dataContext().get_Steps())) {
            this.get_dataContext().get_Steps().remove_stepCollectionChanged(this.$$d_$7h_5);
        }
        this.$72_5();
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.dispose.call(this);
    },
    
    $72_5: function() {
        this.get_$1A_5().unbind('click');
        this.get_$1A_5().unbind('keydown');
        $P_CRM(this.get_element()).find('.pc_steplistc').unbind('keydown');
        if (!IsNull(this._stageNameView) && !this._stageNameView.get_isDisposed()) {
            this._stageNameView.get_chromeElement().unbind('attribute-changed', this.$$d_onStageNameChanged);
        }
    },
    
    _stageNameView: null,
    $2G_5: null,
    $2i_5: null,
    $4Q_5: null,
    $3f_5: null,
    $1s_5: null,
    $s_5: null,
    
    setTitleAndDescriptionFromForm: function() {
    }
}


ProcessControl.Configuration.ProcessControlStepView = function(element) {
    this.$$d_$9r_4 = Function.createDelegate(this, this.$9r_4);
    ProcessControl.Configuration.ProcessControlStepView.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.ProcessControlStepView.prototype = {
    
    renderView: function() {
        this.$9R_4();
        this.$9H_4();
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.renderView.call(this);
        this.$5s_4();
        this.$83_4();
    },
    
    $5s_4: function() {
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            return;
        }
        var $$t_2 = this;
        this.get_$1T_4().bind('click', function($p1_0) {
            $$t_2.$6d_4($p1_0);
        });
        var $$t_3 = this;
        this.get_$1T_4().bind('keydown', function($p1_0) {
            switch ($p1_0.which) {
                case 13:
                case 32:
                    $$t_3.$6d_4($p1_0);
                    $p1_0.preventDefault();
                    $p1_0.stopPropagation();
                    break;
            }
        });
    },
    
    $83_4: function() {
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            return;
        }
        this.get_elementWrapper().addClass('pc_highContrast');
    },
    
    validate: function() {
        var $v_0 = this.$V_4.get_isValid();
        if (!$v_0) {
            this.set_validationResult(new Mscrm.ValidationResult(false, this.$V_4.get_validateResult().errorText));
            return;
        }
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.validate.call(this);
    },
    
    setFocus: function(selectStepName) {
        this.$V_4.get_chromeElement().focus();
        if (selectStepName) {
            var $$t_1 = this;
            window.setTimeout(function() {
                $$t_1.$V_4.get_valueElement().click();
                $$t_1.$V_4.get_editView().get_editElement().select();
            }, 10);
        }
    },
    
    $9R_4: function() {
        var $v_0 = String.format('{0}_n', this.get_elementWrapper().get(0).id);
        var $v_1 = $P_CRM('#' + $v_0);
        var $v_2 = {};
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), this.get_dataContext().get_stepStepId());
        $v_2['value'] = CrmEncodeDecode.CrmHtmlEncode(CrmEncodeDecode.CrmHtmlEncode($v_3.get_description()));
        if (ProcessControl.Configuration.Initializer.get_isProcessUnificationDebugMode()) {
            if (Microsoft.Crm.Workflow.ObjectModel.ActionStep.isInstanceOfType(this.get_dataContext().get_Steps().get_item(0))) {
                var $v_4 = this.get_dataContext().get_Steps().get_item(0).toJson();
                $v_3.set_description($v_4);
                $v_2['value'] = CrmEncodeDecode.CrmHtmlEncode(CrmEncodeDecode.CrmHtmlEncode($v_3.get_description()));
            }
            this.$V_4 = Mscrm.InlineControlFactory.createInlineTextControlForDom($v_1, $v_0, 10000000, 'ntext', $v_2, 'pcc', 'alwaysedit');
            Mscrm.InlineControlFactory.registerForDispose(this.$V_4);
            $v_1.addClass('textarea_debug');
        }
        else {
            this.$V_4 = Mscrm.InlineControlFactory.createInlineTextBoxControlForDom($v_1, $v_0, 100, $v_2, 'pcc', 'normal');
        }
        this.$V_4.get_dataContext().set_emptyValuePlaceholder(window.LOCID_PROCESS_NEWSTEPTEXTKEY);
        this.$V_4.initializeAndRenderEditView();
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$V_4);
        this.$62_4($v_3.get_description());
        this.$V_4.get_chromeElement().bind('attribute-changed', this.$$d_$9r_4);
    },
    
    $9H_4: function() {
        if (this.get_dataContext().get_isProcessRequired()) {
            this.$6u_4();
        }
        else {
            this.$6w_4();
        }
    },
    
    $6d_4: function($p0) {
        var $v_0 = this.get_$1T_4().children('img');
        if (IsNull($v_0.attr('required'))) {
            this.get_dataContext().set_isProcessRequired(true);
            this.$6u_4();
        }
        else {
            this.get_dataContext().set_isProcessRequired(false);
            this.$6w_4();
        }
    },
    
    get_$1T_4: function() {
        if (IsNull(this.$4K_4)) {
            this.$4K_4 = this.get_elementWrapper().children(':nth-child(2)').children(':first-child');
        }
        return this.$4K_4;
    },
    
    $6u_4: function() {
        this.get_$1T_4().children('img').attr('src', this.get_$5u_4().source);
        this.get_$1T_4().children('img').attr('class', this.get_$5u_4().cssClass);
        this.get_$1T_4().children('img').attr('required', 'required');
    },
    
    $6w_4: function() {
        this.get_$1T_4().children('img').attr('src', this.get_$74_4().source);
        this.get_$1T_4().children('img').attr('class', this.get_$74_4().cssClass);
        this.get_$1T_4().children('img').removeAttr('required');
    },
    
    get_$5u_4: function() {
        if (IsNull(this.$3i_4)) {
            this.$3i_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/12_checkbox_on.png'));
        }
        return this.$3i_4;
    },
    
    get_$74_4: function() {
        if (IsNull(this.$4T_4)) {
            this.$4T_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/12_checkbox_off.png'));
        }
        return this.$4T_4;
    },
    
    $62_4: function($p0) {
        var $v_0 = this.$V_4.get_valueElement();
        if (this.$V_4.get_valueElement().text() === $p0) {
            return;
        }
        $v_0.text($p0);
        (this.$V_4.get_layout()).updateTooltip($p0);
    },
    
    $9r_4: function($p0) {
        if (arguments.length < 2) {
            return;
        }
        var $v_0 = arguments[1];
        if (isNullOrEmptyString($v_0)) {
            this.$V_4.get_dataContext().get_attribute().set_rawValue(this.$8S_4());
            return;
        }
        ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), $v_0, this.get_dataContext().get_stepStepId());
    },
    
    $8S_4: function() {
        if (this.get_dataContext().get_workflow().get_workflowBusinessProcessType() === 1) {
            return window.LOCID_PROCESS_PAGE_NEWLABEL;
        }
        return window.LOCID_PROCESS_NEWSTEPTEXTKEY;
    },
    
    $19_4: null,
    
    get_stepViewAdapter: function() {
        return this.$19_4;
    },
    
    set_stepViewAdapter: function(value) {
        this.$19_4 = value;
        return value;
    },
    
    get_$4s_4: function() {
        if (IsNull(this.$4R_4)) {
            this.$4R_4 = this.get_elementWrapper().children(':first-child');
        }
        return this.$4R_4;
    },
    
    get_$4Y_4: function() {
        if (IsNull(this.$3h_4)) {
            this.$3h_4 = this.get_elementWrapper().children(':nth-child(2)');
        }
        return this.$3h_4;
    },
    
    get_$1A_4: function() {
        if (IsNull(this.$1s_4)) {
            this.$1s_4 = this.get_elementWrapper().children('.button.delete-step');
        }
        return this.$1s_4;
    },
    
    $6s_4: function($p0) {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), this.get_dataContext().get_stepStepId()).get_description();
        if ($v_0 === window.LOCID_PROCESS_NEWSTEPTEXTKEY || $v_0 === window.LOCID_PROCESS_PAGE_NEWLABEL) {
            ProcessControl.Configuration.ProcessConfigurationUtility.replaceStepLabelForCurrentUser(this.get_dataContext().get_stepLabels(), $p0, this.get_dataContext().get_stepStepId());
            this.$62_4($p0);
            var $v_1 = this.$V_4.get_valueElement();
            var $v_2 = this.$V_4.get_editView().get_editElement();
            $v_1.val($p0);
            $v_2.val($p0);
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$72_4();
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.dispose.call(this);
    },
    
    $72_4: function() {
        this.get_$1A_4().unbind('click');
        this.get_$1A_4().unbind('keydown');
        this.get_$1T_4().unbind('click');
        this.get_$1T_4().unbind('keydown');
        if (!this.$V_4.get_isDisposed()) {
            this.$V_4.get_chromeElement().unbind('attribute-changed', this.$$d_$9r_4);
        }
    },
    
    $V_4: null,
    $4R_4: null,
    $3h_4: null,
    $1s_4: null,
    $4K_4: null,
    $3i_4: null,
    $4T_4: null,
    
    setTitleAndDescriptionFromForm: function() {
    }
}


ProcessControl.Configuration.ProcessControlView = function(element, entityMetadata) {
    this.$$d_$6m_5 = Function.createDelegate(this, this.$6m_5);
    this.$$d_titleOrDescriptionChanged = Function.createDelegate(this, this.titleOrDescriptionChanged);
    this.$1D_5 = -1;
    ProcessControl.Configuration.ProcessControlView.initializeBase(this, [ element ]);
    this.set_entityMetadata(entityMetadata);
    this.$79_5();
}
ProcessControl.Configuration.ProcessControlView.$6Y = function() {
    var $v_0 = ProcessControl.Configuration.ProcessControlView.$3Z('/_grid/cmds/dlg_delete.aspx');
    ProcessControl.Configuration.ProcessControlView.deleteProcessConfirmationCallback($v_0);
}
ProcessControl.Configuration.ProcessControlView.deleteProcessConfirmationCallback = function(confirmation) {
    if (!IsNull(confirmation) && confirmation) {
        ProcessControl.Configuration.ProcessControlView.$1c('DeleteBusinessProcess');
    }
}
ProcessControl.Configuration.ProcessControlView.get_$2Q = function() {
    if (IsNull(ProcessControl.Configuration.ProcessControlView.$1x)) {
        ProcessControl.Configuration.ProcessControlView.$1x = new Mscrm.ProgressControl();
    }
    return ProcessControl.Configuration.ProcessControlView.$1x;
}
ProcessControl.Configuration.ProcessControlView.activateProcessConfirmationCallback = function(confirmation) {
    if (!IsNull(confirmation) && confirmation) {
        ProcessControl.Configuration.ProcessControlView.$1c('ActivateBusinessProcess');
    }
}
ProcessControl.Configuration.ProcessControlView.$31 = function($p0, $p1) {
    var $v_0 = new Mscrm.ReturnFunctionReference();
    $v_0.content = {};
    $v_0.callback = $p1;
    var $v_1 = new Mscrm.CrmDialog(ProcessControl.Configuration.ProcessControlView.$4f($p0), [ window._Process_Id ], 500, 200, null);
    $v_1.setCallbackReference($v_0);
    $v_1.show();
}
ProcessControl.Configuration.ProcessControlView.deactivateProcessConfirmationCallback = function(confirmation) {
    if (!IsNull(confirmation) && confirmation) {
        ProcessControl.Configuration.ProcessControlView.$1c('DeactivateBusinessProcess');
    }
}
ProcessControl.Configuration.ProcessControlView.$3Z = function($p0) {
    var $v_0 = ProcessControl.Configuration.ProcessControlView.$4f($p0);
    var $v_1 = openStdDlgWithCallback($v_0, [ window._Process_Id ], 500, 200, null);
    return $v_1;
}
ProcessControl.Configuration.ProcessControlView.$4f = function($p0) {
    var $v_0 = Mscrm.CrmUri.create($p0);
    $v_0.get_query()['iObjType'] = 4703;
    $v_0.get_query()['iTotal'] = '1';
    $v_0.get_query()['sIds'] = window._Process_Id;
    return $v_0;
}
ProcessControl.Configuration.ProcessControlView.$6N = function() {
    var $v_0 = $P_CRM('#ProcessName');
    return $v_0.val();
}
ProcessControl.Configuration.ProcessControlView.$6n = function($p0, $p1) {
    ProcessControl.Configuration.ProcessControlView.get_$2Q().hide();
    if (!$p0.Success) {
        return;
    }
    if ($p0.ReturnValue === 'success') {
        ProcessControl.Configuration.ProcessControlView.$49 = ProcessControl.Configuration.ProcessControlView.$3I;
        ProcessControl.Configuration.ProcessControlView.$1c($p1.Command);
    }
    else {
        var $v_0 = ProcessControl.Configuration.ProcessControlView.$4g($p0);
        ProcessControl.Configuration.ProcessControlView.$6O($v_0);
    }
}
ProcessControl.Configuration.ProcessControlView.$1c = function($p0) {
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
            if (ProcessControl.Configuration.ProcessControlView.$1n) {
                $v_0 = true;
                var $v_3 = ProcessControl.Configuration.ProcessControlView.$6N();
                ProcessControl.Configuration.ProcessControlView.$6t($v_3);
                ProcessControl.Configuration.ProcessControlView.$1n = false;
            }
            break;
    }
    if ($v_0) {
        ProcessControl.Configuration.ProcessControlView.$4q();
    }
    if ($v_1) {
        ProcessControl.Configuration.ProcessControlView.$6f(true);
    }
    if ($v_2) {
        ProcessControl.Configuration.ProcessControlView.$5w();
    }
}
ProcessControl.Configuration.ProcessControlView.$6t = function($p0) {
    var $v_0 = $P_CRM('#ProcessTitle');
    $v_0.text($p0);
    $v_0.attr('title', $p0);
}
ProcessControl.Configuration.ProcessControlView.$5w = function() {
    getTopWindow().close();
}
ProcessControl.Configuration.ProcessControlView.$6f = function($p0) {
    window.location.reload($p0);
}
ProcessControl.Configuration.ProcessControlView.$4q = function() {
    var $v_0 = getTopWindow();
    if (!IsNull($v_0.opener)) {
        $v_0.opener.auto('4703');
    }
}
ProcessControl.Configuration.ProcessControlView.$6O = function($p0) {
}
ProcessControl.Configuration.ProcessControlView.$4g = function($p0) {
    if (!$p0.Success || isNullOrEmptyString($p0.ReturnValue)) {
        return null;
    }
    var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize(($p0.ReturnValue).substr(8));
    if (!IsNull($v_0) && !IsNull($v_0['_error'])) {
        return $v_0['_error'];
    }
    return null;
}
ProcessControl.Configuration.ProcessControlView.$85 = function($p0, $p1) {
    ProcessControl.Configuration.ProcessControlView.get_$2Q().hide();
    Mscrm.RemoteCommandXml.remoteCommandXmlDefaultErrorHandler($p0, $p1);
}
ProcessControl.Configuration.ProcessControlView.$6v = function() {
    var $v_0 = window.LOCID_PROCESS_SAVEERROR;
    if (IsNull(ProcessControl.Configuration.ProcessControlView.$1E)) {
        ProcessControl.Configuration.ProcessControlView.$1E = new Mscrm.BusinessRuleErrorFlyout($P_CRM('#bpfConfContent'));
    }
    ProcessControl.Configuration.ProcessControlView.$1E.show($v_0);
}
ProcessControl.Configuration.ProcessControlView.prototype = {
    
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $P_CRM.fn.extend({propAttr: $P_CRM.fn.prop || $P_CRM.fn.attr});;
        $create(ProcessControl.Configuration.ProcessEventAggregator, null, null, null, $get('pcc_event'));
        $create(ProcessConfiguration.Behavior.MoveBehavior, null, null, null, $get('pcc_updown_arrows'));
    },
    
    get_processViewVisitor: function() {
        return this.$1W_5;
    },
    
    set_processViewVisitor: function(value) {
        this.$1W_5 = value;
        return value;
    },
    
    $79_5: function() {
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
    
    renderView: function() {
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.renderView.call(this);
        var $v_0 = {};
        $v_0['entityView'] = this;
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this);
    },
    
    get_uiBuilder: function() {
        return new ProcessConfiguration.Builder.StepBuilder();
    },
    
    get_childViewContainer: function() {
        return $P_CRM('pcc_tabs');
    },
    
    get_tabControl: function() {
        return this.$1l_5;
    },
    
    set_tabControl: function(value) {
        this.$1l_5 = value;
        return value;
    },
    
    get_initialJson: function() {
        return ProcessControl.Configuration.ProcessControlView.$49;
    },
    
    set_initialJson: function(value) {
        ProcessControl.Configuration.ProcessControlView.$49 = value;
        return value;
    },
    
    get_isDirty: function() {
        this.validate();
        this.setTitleAndDescriptionFromForm();
        return this.get_initialJson() !== this.get_dataContext().toJson();
    },
    
    get_lastEntity: function() {
        return this.$3F_5;
    },
    
    set_lastEntity: function(value) {
        this.$3F_5 = value;
        return value;
    },
    
    get_relationshipMetadata: function() {
        return this.$t_5;
    },
    
    set_relationshipMetadata: function(value) {
        this.$t_5 = value;
        return value;
    },
    
    get_currentTabId: function() {
        return this.$1D_5;
    },
    
    set_currentTabId: function(value) {
        this.$1D_5 = value;
        return value;
    },
    
    get_isProcessClosed: function() {
        return this.$1U_5;
    },
    
    set_isProcessClosed: function(value) {
        this.$1U_5 = value;
        return value;
    },
    
    saveProcess: function(callback) {
        var $$t_3 = this;
        this.$4p_5('UpdateProcess', function($p1_0, $p1_1) {
            ProcessControl.Configuration.ProcessControlView.$6n($p1_0, $p1_1);
            if (!IsNull(callback)) {
                callback($p1_0, $p1_1);
            }
        });
    },
    
    saveProcessAs: function() {
        this.$4p_5('SaveAsBpf', this.$$d_$6m_5);
    },
    
    activateProcess: function() {
        this.validate();
        if (!this.get_validationResult().isValid) {
            ProcessControl.Configuration.ProcessControlView.$6v();
            return;
        }
        this.$6h_5('ActivateBusinessProcess');
        ProcessControl.Configuration.ProcessControlView.$31('/_grid/cmds/dlg_activate.aspx', ProcessControl.Configuration.ProcessControlView.activateProcessConfirmationCallback);
    },
    
    deactivateProcess: function() {
        ProcessControl.Configuration.ProcessControlView.$31('/_grid/cmds/dlg_deactivate.aspx', ProcessControl.Configuration.ProcessControlView.deactivateProcessConfirmationCallback);
    },
    
    deleteProcess: function() {
        ProcessControl.Configuration.ProcessControlView.$6Y();
    },
    
    $4p_5: function($p0, $p1) {
        this.validate();
        if (!this.get_validationResult().isValid) {
            ProcessControl.Configuration.ProcessControlView.$6v();
            return;
        }
        this.$6h_5($p0);
        ProcessControl.Configuration.ProcessControlView.$3I = this.$8R_5();
        if (!isNullOrEmptyString(ProcessControl.Configuration.ProcessControlView.$3I)) {
            ProcessControl.Configuration.ProcessControlView.get_$2Q().forceShow();
            ProcessControl.Configuration.BpfDataUtility.executeConfiguratorActionCommand(ProcessControl.Configuration.ProcessControlView.$3I, $p0, $p1, ProcessControl.Configuration.ProcessControlView.$85);
        }
    },
    
    get_jQueryProxy: function() {
        if (IsNull(this.$0_5)) {
            this.$0_5 = new Mscrm.Proxies.JQueryProxy();
        }
        return this.$0_5;
    },
    
    set_jQueryProxy: function(value) {
        this.$0_5 = value;
        return value;
    },
    
    $8R_5: function() {
        if (!this.get_validationResult().isValid) {
            return null;
        }
        this.setTitleAndDescriptionFromForm();
        return this.get_dataContext().toJson();
    },
    
    validate: function() {
        var $v_0 = this.$1W_5;
        $v_0.set_displayErrors(true);
        var $v_1 = $v_0.validate();
        this.set_dataContext($v_0.get_bpfWorkflowStep());
        var $v_2 = ($v_1.get_success()) ? null : $v_1.get_errorMessage();
        this.set_validationResult(new Mscrm.ValidationResult($v_1.get_success(), $v_2));
    },
    
    updateInitialJSON: function() {
        var $v_0 = this.$1W_5;
        $v_0.set_displayErrors(false);
        $v_0.validate();
        this.set_dataContext($v_0.get_bpfWorkflowStep());
        this.setTitleAndDescriptionFromForm();
        this.set_initialJson(this.get_dataContext().toJson());
    },
    
    $8T_5: function() {
        var $v_0 = $P_CRM('#Description');
        return $v_0.val();
    },
    
    titleOrDescriptionChanged: function(eventData) {
        ProcessControl.Configuration.ProcessControlView.$1n = true;
    },
    
    setTitleAndDescriptionFromForm: function() {
        var $v_0 = this.$8T_5();
        var $v_1 = ProcessControl.Configuration.ProcessControlView.$6N();
        var $v_2 = '';
        if (isNullOrEmptyString($v_1)) {
            $v_1 = $v_2;
        }
        if (isNullOrEmptyString($v_0)) {
            $v_0 = $v_2;
        }
        this.get_dataContext().set_Description($v_0);
        this.get_dataContext().set_title($v_1);
    },
    
    $6h_5: function($p0) {
        switch ($p0) {
            case 'SaveAsBpf':
            case 'UpdateProcess':
                this.$7n_5();
                break;
        }
    },
    
    $7n_5: function() {
        var $v_0 = {};
        var $v_1 = this.get_dataContext();
        for (var $v_2 = 0; $v_2 < $v_1.get_Steps().get_Count(); $v_2++) {
            var $v_3 = $v_1.get_Steps().get_item($v_2);
            if (!(Microsoft.Crm.Workflow.ObjectModel.EntityStep.isInstanceOfType($v_3))) {
                continue;
            }
            for (var $v_4 = 0; $v_4 < $v_3.get_Steps().get_Count(); $v_4++) {
                var $v_5 = $v_3.get_Steps().get_item($v_4);
                for (var $v_6 = 0; $v_6 < $v_5.get_Steps().get_Count(); $v_6++) {
                    var $v_7 = $v_5.get_Steps().get_item($v_6);
                    if (!(Microsoft.Crm.Workflow.ObjectModel.StepStep.isInstanceOfType($v_7))) {
                        continue;
                    }
                    var $v_8 = $v_7;
                    for (var $v_9 = 0; $v_9 < $v_8.get_Steps().get_Count(); $v_9++) {
                        var $v_A = Microsoft.Crm.Workflow.ObjectModel.ControlStep.getControlStep($v_8.get_Steps().get_item($v_9));
                        if (ProcessControl.Configuration.Initializer.get_isProcessUnificationDebugMode()) {
                            if (IsNull($v_A)) {
                                continue;
                            }
                        }
                        var $v_B = ($v_A.get_isSystemControl()) ? ProcessControl.Configuration.ProcessConfigurationUtility.getSystemStepControlId($v_A) : $v_A.get_dataFieldName();
                        if (isNullOrEmptyString($v_B)) {
                            continue;
                        }
                        var $v_C = (($v_B) in $v_0) ? ($v_0[$v_B]) + 1 : 0;
                        $v_0[$v_B] = $v_C;
                        $v_A.set_controlId(String.format('{0}{1}', $v_B, (!$v_C) ? '' : '' + $v_C));
                    }
                }
            }
        }
    },
    
    $6m_5: function($p0, $p1) {
        ProcessControl.Configuration.ProcessControlView.get_$2Q().hide();
        var $v_0 = ($p0.Success) ? $p0.ReturnValue : null;
        if (!isNullOrEmptyString($p0.ReturnValue) && $v_0.indexOf('_error') < 0) {
            ProcessControl.Configuration.ProcessControlView.$4q();
            var $v_1 = $p0.ReturnValue.toString();
            Mscrm.BpfConfiguratorUtils.launchConfigurator($v_1);
        }
        else {
            var $v_2 = ProcessControl.Configuration.ProcessControlView.$4g($p0);
            ProcessControl.Configuration.ProcessControlView.$6O($v_2);
        }
    },
    
    $t_5: null,
    $3F_5: null,
    $1l_5: null,
    $1U_5: false,
    $0_5: null,
    $1W_5: null,
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        this.disposeChildViews();
        this.$7z_5();
        this.$80_5();
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.dispose.call(this);
    },
    
    $80_5: function() {
    },
    
    $7z_5: function() {
        var $v_0 = $find('pcc_event');
        if (!IsNull($v_0)) {
            $v_0.dispose();
        }
    }
}


ProcessControl.Configuration.ProcessControlViewBase$2 = function(element) {
    this.$1J_3 = [];
    this.$b_3 = ((this.$$gta['ProcessControl.Configuration.ProcessControlViewBase$2']['TViewModel'] === Number || Type.isEnum(this.$$gta['ProcessControl.Configuration.ProcessControlViewBase$2']['TViewModel'])) ? 0 : (this.$$gta['ProcessControl.Configuration.ProcessControlViewBase$2']['TViewModel'] === Boolean) ? false : null);
    ProcessControl.Configuration.ProcessControlViewBase$2.$$(this.$$gta['ProcessControl.Configuration.ProcessControlViewBase$2']['TViewModel'], this.$$gta['ProcessControl.Configuration.ProcessControlViewBase$2']['TChildView']).initializeBase(this, [ element ]);
    this.$4z_3 = $P_CRM(element);
}
ProcessControl.Configuration.ProcessControlViewBase$2.$$ = function(TViewModel, TChildView) {
    var $$cn = 'ProcessControlViewBase$2' + '$' + TViewModel.getName().replace(/\./g, '_') + '$' + TChildView.getName().replace(/\./g, '_');
    if (!ProcessControl.Configuration[$$cn]) {
        var $$ccr = ProcessControl.Configuration[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessControl.Configuration.ProcessControlViewBase$2'] = {'TViewModel': TViewModel, 'TChildView': TChildView};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessControl.Configuration.ProcessControlViewBase$2.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessControl.Configuration.' + $$cn, Mscrm.CrmUIControl, ProcessControl.Configuration.IProcessControlViewBase$1.$$(TViewModel), ProcessControl.Configuration.IProcessControlView);
        var $$dict_6 = ProcessControl.Configuration.ProcessControlViewBase$2.prototype;
        for (var $$key_7 in $$dict_6) {
            var $$entry_8 = { key: $$key_7, value: $$dict_6[$$key_7] };
            if ('constructor' !== $$entry_8.key) {
                $$ccr.prototype[$$entry_8.key] = $$entry_8.value;
            }
        }
    }
    return ProcessControl.Configuration[$$cn];
}
ProcessControl.Configuration.ProcessControlViewBase$2.prototype = {
    
    renderView: function() {
        for (var $v_0 = 0; $v_0 < this.$1J_3.length; $v_0++) {
            (this.$1J_3[$v_0]).set_entityMetadata(this.get_entityMetadata());
            (this.$1J_3[$v_0]).renderView();
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        this.disposeChildViews();
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    },
    
    disposeChildViews: function() {
        for (var $v_0 = 0; $v_0 < this.$1J_3.length; $v_0++) {
            if (Sys.IDisposable.isInstanceOfType(this.$1J_3[$v_0])) {
                var $v_1 = this.$1J_3[$v_0];
                $v_1.dispose();
            }
        }
    },
    
    get_dataContext: function() {
        return this.$b_3;
    },
    
    set_dataContext: function(value) {
        this.$b_3 = value;
        return value;
    },
    
    get_entityMetadata: function() {
        return this.$E_3;
    },
    
    set_entityMetadata: function(value) {
        this.$E_3 = value;
        return value;
    },
    
    get_elementWrapper: function() {
        return this.$4z_3;
    },
    
    get_$Ac_3: function() {
        return this.$1J_3;
    },
    
    get_validationResult: function() {
        return this.$2o_3;
    },
    
    set_validationResult: function(value) {
        this.$2o_3 = value;
        return value;
    },
    
    validate: function() {
        var $v_0 = true;
        if (IsNull(this.$1J_3)) {
            this.$2o_3 = new Mscrm.ValidationResult(true, null);
            return;
        }
        for (var $v_1 = this.$1J_3.length - 1; $v_1 >= 0; $v_1--) {
            var $v_2 = this.$1J_3[$v_1];
            $v_2.validate();
            if (!IsNull($v_2.get_validationResult()) && !$v_2.get_validationResult().isValid && $v_0) {
                this.$2o_3 = new Mscrm.ValidationResult(false, $v_2.get_validationResult().errorText);
                $v_0 = false;
                this.$AA_3($v_2);
            }
        }
        if ($v_0) {
            this.$2o_3 = new Mscrm.ValidationResult(true, null);
        }
    },
    
    $AA_3: function($p0) {
        var $v_0 = ($p0).$s_5;
        if (!IsNull($v_0)) {
            var $v_1 = ProcessControl.Configuration.ProcessConfigurationUtility.getIndexFromTabContentId($v_0.get_element().id);
            var $v_2 = String.format('pcc_tab_{0}', $v_1);
            var $v_3 = $P_CRM('a[tabid=\'' + $v_2 + '\']');
            if ($v_3.length > 0) {
                $v_3.click();
            }
        }
    },
    
    onKeyDown: function(jEvent) {
    },
    
    $4z_3: null,
    $2o_3: null,
    $E_3: null
}


ProcessControl.Configuration.StepControlViewBase = function(element) {
    ProcessControl.Configuration.StepControlViewBase.initializeBase(this, [ element ]);
}
ProcessControl.Configuration.StepControlViewBase.prototype = {
    
    get_parentView: function() {
        return this.$s_4;
    },
    
    set_parentView: function(value) {
        this.$s_4 = value;
        return value;
    },
    
    $s_4: null,
    
    get_dataContext: function() {
        return ProcessControl.Configuration.ProcessControlViewBase$2.prototype.get_dataContext.call(this);
    },
    
    set_dataContext: function(value) {
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.set_dataContext.call(this, value);
        return value;
    }
}


Type.registerNamespace('ProcessConfiguration');

ProcessConfiguration.IInitializationContext = function() {}
ProcessConfiguration.IInitializationContext.registerInterface('ProcessConfiguration.IInitializationContext');


ProcessConfiguration.InitializationContext = function() {
}
ProcessConfiguration.InitializationContext.prototype = {
    $3k_0: null,
    
    get_$1H_0: function() {
        if (IsNull(this.$3k_0)) {
            this.$3k_0 = (!isNullOrEmptyString(window._Process_JsonData)) ? JSON.parse(window._Process_JsonData.substr(8)) : null;
        }
        return this.$3k_0;
    },
    
    $1e_0: null,
    
    get_businessProcessFlowModel: function() {
        if (IsNull(this.$1e_0) && !IsNull(this.get_$1H_0())) {
            var $v_0 = (!isNullOrEmptyString(this.get_$1H_0().Process.ProcessJson)) ? JSON.parse(this.get_$1H_0().Process.ProcessJson) : null;
            var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep(this.get_$1H_0().Process.PrimaryEntity, 4);
            $v_1.initializeFromDynamic($v_0);
            this.$1e_0 = $v_1;
        }
        return this.$1e_0;
    },
    
    $E_0: null,
    
    get_entityMetadata: function() {
        if (IsNull(this.$E_0) && !IsNull(this.get_$1H_0())) {
            this.$E_0 = (!isNullOrEmptyString(this.get_$1H_0().EntityMetadata)) ? JSON.parse(this.get_$1H_0().EntityMetadata) : null;
        }
        return this.$E_0;
    },
    
    $t_0: null,
    
    get_relationshipMetadata: function() {
        if (IsNull(this.$t_0) && !IsNull(this.get_$1H_0())) {
            this.$t_0 = (!isNullOrEmptyString(this.get_$1H_0().RelationshipMetadata)) ? JSON.parse(this.get_$1H_0().RelationshipMetadata) : null;
        }
        return this.$t_0;
    },
    
    get_stageCategoryMetadata: function() {
        return this.get_$1H_0().StageCategoryMetadata;
    },
    
    get_processEnabledEntityMetadata: function() {
        return this.get_$1H_0().ProcessEnabledEntityMetadata;
    }
}


Type.registerNamespace('ProcessConfiguration.Behavior');

ProcessConfiguration.Behavior.IStageFocusBehaviorAdapter = function() {}
ProcessConfiguration.Behavior.IStageFocusBehaviorAdapter.registerInterface('ProcessConfiguration.Behavior.IStageFocusBehaviorAdapter');


ProcessConfiguration.Behavior.IStageHoverBehaviorAdapter = function() {}
ProcessConfiguration.Behavior.IStageHoverBehaviorAdapter.registerInterface('ProcessConfiguration.Behavior.IStageHoverBehaviorAdapter');


ProcessConfiguration.Behavior.IStepFocusBehaviorAdapter = function() {}
ProcessConfiguration.Behavior.IStepFocusBehaviorAdapter.registerInterface('ProcessConfiguration.Behavior.IStepFocusBehaviorAdapter');


ProcessConfiguration.Behavior.IBehaviorsFactory = function() {}
ProcessConfiguration.Behavior.IBehaviorsFactory.registerInterface('ProcessConfiguration.Behavior.IBehaviorsFactory');


ProcessConfiguration.Behavior.IAddBranchConditionBehaviorAdapter = function() {}
ProcessConfiguration.Behavior.IAddBranchConditionBehaviorAdapter.registerInterface('ProcessConfiguration.Behavior.IAddBranchConditionBehaviorAdapter');


ProcessConfiguration.Behavior.IStepHoverBehaviorAdapter = function() {}
ProcessConfiguration.Behavior.IStepHoverBehaviorAdapter.registerInterface('ProcessConfiguration.Behavior.IStepHoverBehaviorAdapter');


ProcessConfiguration.Behavior.StageFocusBehaviorAdapter = function() {
}
ProcessConfiguration.Behavior.StageFocusBehaviorAdapter.prototype = {
    $5_0: null,
    
    get_instance: function() {
        return this.$5_0;
    },
    
    set_instance: function($p0) {
        this.$5_0 = $p0;
        return $p0;
    },
    
    initialize: function() {
        this.$5_0.initialize();
    },
    
    dispose: function() {
        this.$5_0.dispose();
        this.$5_0 = null;
    }
}


ProcessConfiguration.Behavior.StageFocusEventBubbleBehavior = function(element) {
    ProcessConfiguration.Behavior.StageFocusEventBubbleBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StageFocusEventBubbleBehavior.prototype = {
    
    onFocused: function(eventHandler) {
        var $v_0 = $P_CRM(eventHandler.target);
        var $v_1 = $v_0.attr('data-stepSelected');
        if (isNullOrEmptyString($v_1) || !Boolean.parse($v_1)) {
            ProcessConfiguration.Behavior.StepFocusBehavior.set_focusedStep(null);
            ProcessConfiguration.Behavior.StageFocusBehavior.set_$3U(null);
        }
        $v_0.removeAttr('data-stepSelected');
        ProcessConfiguration.Behavior.StageFocusBehavior.prototype.onFocused.call(this, eventHandler);
    },
    
    makeSelection: function() {
        if (IsNull(ProcessConfiguration.Behavior.StepFocusBehavior.$j)) {
            ProcessConfiguration.Behavior.StageFocusBehavior.prototype.makeSelection.call(this);
        }
        else {
            this.$30_4();
        }
    }
}


ProcessConfiguration.Behavior.StageFocusEventCapturingBehavior = function(element) {
    ProcessConfiguration.Behavior.StageFocusEventCapturingBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StageFocusEventCapturingBehavior.prototype = {
    
    onFocused: function(eventHandler) {
        ProcessConfiguration.Behavior.StepFocusBehavior.set_focusedStep(null);
        ProcessConfiguration.Behavior.StageFocusBehavior.set_$3U(null);
        ProcessConfiguration.Behavior.StageFocusBehavior.prototype.onFocused.call(this, eventHandler);
    }
}


ProcessConfiguration.Behavior.StageHoverBehavior = function(element) {
    ProcessConfiguration.Behavior.StageHoverBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StageHoverBehavior.prototype = {
    
    onHover: function(eventHandler) {
        this.$5f_4();
    },
    
    get_deleteIcon: function() {
        return this.get_view().get_$1A_5();
    },
    
    onHoverOut: function(eventHandler) {
        this.$30_4();
    },
    
    $5f_4: function() {
        this.get_view().get_$25_5().addClass('pc_stagemo');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$22_5().addClass('pc_highContrastHover');
            this.get_view().get_$25_5().addClass('pc_highContrastHover');
        }
    },
    
    $30_4: function() {
        this.get_view().get_$25_5().removeClass('pc_stagemo');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$22_5().removeClass('pc_highContrastHover');
            this.get_view().get_$25_5().removeClass('pc_highContrastHover');
        }
    }
}


ProcessConfiguration.Behavior.StageHoverBehaviorAdapter = function() {
}
ProcessConfiguration.Behavior.StageHoverBehaviorAdapter.prototype = {
    $5_0: null,
    
    get_instance: function() {
        return this.$5_0;
    },
    
    set_instance: function($p0) {
        this.$5_0 = $p0;
        return $p0;
    },
    
    initialize: function() {
        this.$5_0.initialize();
    },
    
    dispose: function() {
        this.$5_0.dispose();
        this.$5_0 = null;
    }
}


ProcessConfiguration.Behavior.StepFocusBehaviorAdapter = function() {
}
ProcessConfiguration.Behavior.StepFocusBehaviorAdapter.prototype = {
    $5_0: null,
    
    get_instance: function() {
        return this.$5_0;
    },
    
    set_instance: function($p0) {
        this.$5_0 = $p0;
        return $p0;
    },
    
    initialize: function() {
        this.$5_0.initialize();
    },
    
    dispose: function() {
        this.$5_0.dispose();
        this.$5_0 = null;
    }
}


ProcessConfiguration.Behavior.StepFocusEventBubbleBehavior = function(element) {
    ProcessConfiguration.Behavior.StepFocusEventBubbleBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StepFocusEventBubbleBehavior.prototype = {
    
    onFocused: function(eventHandler) {
        ProcessConfiguration.Behavior.StepFocusBehavior.set_focusedStep(null);
        ProcessConfiguration.Behavior.StageFocusBehavior.set_$3U(null);
        ProcessConfiguration.Behavior.StepFocusBehavior.prototype.onFocused.call(this, eventHandler);
        $P_CRM(eventHandler.target).attr('data-stepSelected', 'true');
    }
}


ProcessConfiguration.Behavior.StepFocusEventCapturingBehavior = function(element) {
    ProcessConfiguration.Behavior.StepFocusEventCapturingBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StepFocusEventCapturingBehavior.prototype = {
    
    onFocused: function(eventHandler) {
        ProcessConfiguration.Behavior.StepFocusBehavior.prototype.onFocused.call(this, eventHandler);
        if (this.$1N_4.get_processControlStageViewAdapter() === ProcessConfiguration.Behavior.StageFocusBehavior.$6.$1O_5) {
            return;
        }
        ProcessConfiguration.Behavior.StageFocusBehavior.$6.$1O_5.get_stageFocusBehaviorAdapter().get_instance().$30_4();
    }
}


ProcessConfiguration.Behavior.StepHoverBehavior = function(element) {
    ProcessConfiguration.Behavior.StepHoverBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StepHoverBehavior.prototype = {
    
    onHover: function(eventHandler) {
        ProcessConfiguration.Behavior.StepHoverBehavior.$46 = this.get_view();
        this.$5f_4();
    },
    
    get_deleteIcon: function() {
        return this.get_view().get_$1A_4();
    },
    
    onHoverOut: function(eventHandler) {
        ProcessConfiguration.Behavior.StepHoverBehavior.$46 = null;
        this.$30_4();
    },
    
    $5f_4: function() {
        this.get_jQueryElement().addClass('hover');
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly();
        var $v_1 = this.get_view().$19_4.get_viewModel().get_canDelete();
        if (!$v_0 && $v_1) {
            this.get_deleteIcon().addClass('pc_step_del_hov');
        }
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$4s_4().addClass('pc_highContrastHover');
            this.get_view().get_$4Y_4().addClass('pc_highContrastHover');
        }
    },
    
    $30_4: function() {
        this.get_jQueryElement().removeClass('hover');
        this.get_deleteIcon().removeClass('pc_step_del_hov');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$4s_4().removeClass('pc_highContrastHover');
            this.get_view().get_$4Y_4().removeClass('pc_highContrastHover');
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        ProcessConfiguration.Behavior.StepHoverBehavior.$46 = null;
        ProcessConfiguration.Behavior.HoverBehavior$1.prototype.dispose.call(this);
    }
}


ProcessConfiguration.Behavior.StepHoverBehaviorAdapter = function() {
}
ProcessConfiguration.Behavior.StepHoverBehaviorAdapter.prototype = {
    $5_0: null,
    
    get_instance: function() {
        return this.$5_0;
    },
    
    set_instance: function($p0) {
        this.$5_0 = $p0;
        return $p0;
    },
    
    initialize: function() {
        this.$5_0.initialize();
    },
    
    dispose: function() {
        this.$5_0.dispose();
        this.$5_0 = null;
    }
}


ProcessConfiguration.Behavior.AddEntityBehavior = function(element) {
    this.$$d_handleOptionIconClick = Function.createDelegate(this, this.handleOptionIconClick);
    this.$$d_$98_4 = Function.createDelegate(this, this.$98_4);
    this.$$d_clickHandler = Function.createDelegate(this, this.clickHandler);
    ProcessConfiguration.Behavior.AddEntityBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.AddEntityBehavior.$AD = function($p0, $p1, $p2) {
    $p0.set_relationshipName($p1);
    $p0.set_attributeName($p2);
}
ProcessConfiguration.Behavior.AddEntityBehavior.prototype = {
    
    initialize: function() {
        ProcessControl.Configuration.AddChildControlBehavior.prototype.initialize.call(this);
        this.$8v_4();
        this.$5s_4();
        this.$9y_4();
        ProcessConfiguration.Behavior.ConfiguratorFlyout.createFlyOutMenuDescriptor(this.get_$9_4().$3F_5, ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$9_4().get_dataContext()), this.get_$9_4().$t_5, this.$$d_clickHandler, this.get_$9_4().$1U_5);
    },
    
    handleOptionIconClick: function(jQueryEvent) {
        if (IsNull(ProcessConfiguration.Behavior.ConfiguratorFlyout.$m) || ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.get_isDisposed() || !ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.get_visible()) {
            ProcessConfiguration.Behavior.ConfiguratorFlyout.showFlyout();
        }
        else {
            ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        }
    },
    
    get_defaultAddTitle: function() {
        return window.LOCID_PROCESS_ADDSTAGE;
    },
    
    get_canAddEntity: function() {
        return !this.get_$9_4().$1U_5 && !this.$8u_4();
    },
    
    get_canRemoveEntity: function() {
        return !this.isSingleEntityInProcess();
    },
    
    clickHandler: function(eventObject) {
        if (IsNull(eventObject.data) || !(('Action') in eventObject.data)) {
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
                this.$7k_4(eventObject);
                break;
            default:
                break;
        }
    },
    
    addChild: function(eventObject) {
        if (!this.get_canAddEntity()) {
            return;
        }
        ProcessControl.Configuration.AddChildControlBehavior.prototype.addChild.call(this, eventObject);
        if (IsNull(eventObject.data) || !(('entityLogicalName') in eventObject.data)) {
            return;
        }
        var $v_0 = eventObject.data['entityLogicalName'];
        var $v_1 = eventObject.data['entityLabel'];
        var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.getFirstDoNotPersistEntityStep(this.get_$13_4());
        $v_2.set_EntityLogicalName($v_0);
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntityBeforeLast(this.get_$13_4());
        this.$6q_4($v_3, eventObject);
        ProcessConfiguration.Utility.LabelDictionary.insertIfNotPresent($v_0, $v_1);
        ProcessControl.Configuration.BpfDataUtility.getEntityAndRelationshipMetadata($v_0, this.$$d_$98_4);
    },
    
    removeChild: function(eventObject) {
        if (!this.get_canRemoveEntity()) {
            return;
        }
        this.$8w_4();
        this.get_$9_4().$1D_5--;
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep(this.get_$13_4());
        this.$9z_4($v_0.get_EntityLogicalName());
        this.$A4_4($v_0);
        this.$A3_4();
        $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep(this.get_$13_4());
        this.$A2_4($v_0);
        this.get_$9_4().$1U_5 = false;
        this.$5i_4($v_0.get_EntityLogicalName());
        this.$5k_4($v_0.get_EntityLogicalName());
        ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        if (ProcessControl.Configuration.ProcessConfigurationUtility.entityCanContainSystemSteps($v_0)) {
            ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this.get_$9_4());
        }
    },
    
    $9z_4: function($p0) {
        if (this.get_$9_4().$1U_5) {
            return;
        }
        delete this.get_$9_4().$t_5[$p0];
        delete this.get_$9_4().get_entityMetadata()[$p0];
    },
    
    $A3_4: function() {
        var $v_0 = this.get_$9_4().get_$Ac_3().length;
        var $v_1 = null;
        for (var $v_3 = 0; $v_3 < $v_0; $v_3++) {
            if ((this.get_$9_4().get_$Ac_3()[$v_3]).get_dataContext().get_Description() === 'DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B') {
                $v_1 = this.get_$9_4().get_$Ac_3()[$v_3];
                break;
            }
        }
        if (!$v_1) {
            return;
        }
        var $v_2 = $v_1.get_$Ac_3().length;
        for (var $v_4 = 0; $v_4 < $v_2; $v_4++) {
            $v_1.removeChildView(0);
        }
    },
    
    $9y_4: function() {
        for (var $v_0 = 0; $v_0 <= this.get_$9_4().$1D_5; $v_0++) {
            var $v_1 = String.format('pcc_tab_{0}', $v_0);
            var $v_2 = $P_CRM('#header_pcc_tabs').children('a[tabid=\'' + $v_1 + '\']');
            ProcessConfiguration.Utility.LabelDictionary.insertIfNotPresent(this.get_$13_4().get_Steps().get_item($v_0).get_Description(), $v_2.text());
        }
    },
    
    $8u_4: function() {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$13_4()).length;
        return $v_0 >= 5;
    },
    
    isSingleEntityInProcess: function() {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$13_4()).length;
        return $v_0 === 1;
    },
    
    $7k_4: function($p0) {
        if (IsNull($p0.data) || !(('entityLogicalName') in $p0.data)) {
            return;
        }
        var $v_0 = $p0.data['entityLogicalName'];
        if (!this.$7f_4($v_0)) {
            return;
        }
        var $v_1 = ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent($v_0);
        var $v_2 = String.format('{0} {1}', $v_1.toUpperCase(), window.LOCID_PROCESS_CLOSELOOPINDICATOR);
        this.$9f_4($v_0, $p0);
        this.get_$9_4().$1D_5++;
        this.$6V_4();
        this.$6a_4($v_2);
        this.$5k_4($v_0);
        ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        this.get_$9_4().$1U_5 = true;
        this.$5i_4($v_0);
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this.get_$9_4());
    },
    
    $9f_4: function($p0, $p1) {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getFirstDoNotPersistEntityStep(this.get_$13_4());
        $v_0.set_EntityLogicalName($p0);
        var $v_1 = ProcessControl.Configuration.ProcessConfigurationUtility.getEntityBeforeLast(this.get_$13_4());
        $v_1.set_isClosedLoop(true);
        this.$6q_4($v_1, $p1);
    },
    
    $7f_4: function($p0) {
        return !(!isNullOrEmptyString($p0) && this.get_$9_4().$1U_5);
    },
    
    $5s_4: function() {
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
    
    $8v_4: function() {
        var $v_0 = $P_CRM('#pcc_options');
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            $v_0.hide();
        }
    },
    
    $98_4: function($p0, $p1) {
        if (!$p0.Success) {
            return;
        }
        var $v_0 = $P_CRM.parseJSON($p0.ReturnValue.toString().substr(8));
        var $v_1 = $p1.GetParameter('entityName').Value;
        this.$A9_4($v_0, $v_1);
        this.$AE_4($v_0, $v_1);
        this.get_$9_4().$1D_5++;
        var $v_2 = ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent($v_1);
        this.$6V_4();
        this.$6a_4($v_2.toUpperCase());
        this.$5k_4($v_1);
        ProcessControl.Configuration.ProcessConfigurationUtility.refreshAvailableSystemControls(this.get_$9_4());
        ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
        this.$5i_4($v_1);
    },
    
    $6V_4: function() {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.getLastValidEntityStep(this.get_$13_4());
        if ($v_0.get_Steps().get_Count() > 0) {
            var $v_1 = $v_0.get_Steps().get_item(0);
            if ($v_1.get_Steps().get_Count() > 0) {
                return;
            }
            var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData(this.get_$13_4());
            $v_2.set_parent($v_1);
            $v_2.set_workflow(this.get_$13_4().get_workflow());
            $v_1.appendStep($v_2);
        }
        else {
            var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStageData(this.get_$13_4());
            $v_0.appendStep($v_3);
        }
    },
    
    $5i_4: function($p0) {
        ProcessConfiguration.Behavior.ConfiguratorFlyout.createFlyOutMenuDescriptor($p0, ProcessControl.Configuration.ProcessConfigurationUtility.getEntitiesInProcess(this.get_$13_4()), this.get_$9_4().$t_5, this.$$d_clickHandler, this.get_$9_4().$1U_5);
    },
    
    $5k_4: function($p0) {
        this.get_$9_4().$3F_5 = $p0;
    },
    
    $AE_4: function($p0, $p1) {
        var $v_0 = $P_CRM.parseJSON($p0.RelationshipMetadata);
        this.get_$9_4().$t_5[$p1] = $v_0[$p1];
    },
    
    $A9_4: function($p0, $p1) {
        var $v_0 = $P_CRM.parseJSON($p0.EntityMetadata);
        this.$F_3.get_entityMetadata()[$p1] = $v_0[$p1];
    },
    
    $A4_4: function($p0) {
        $p0.set_Description('DoNotPersist33F3B39A-9705-11E2-B7C4-67BF6188709B');
        $p0.set_isClosedLoop(false);
        var $v_0 = $p0.get_Steps().getArrayList();
        Array.clear($v_0);
    },
    
    $A2_4: function($p0) {
        $p0.set_isClosedLoop(false);
        $p0.set_relationshipName(null);
        $p0.set_attributeName(null);
    },
    
    $8w_4: function() {
        var $v_0 = String.format('pcc_tab_{0}', this.get_$9_4().$1D_5);
        var $v_1 = String.format('pcc_tab_{0}', this.get_$9_4().$1D_5 - 1);
        this.get_$9_4().$1l_5.hideTab($v_0);
        if ($v_0 === this.get_$9_4().$1l_5.getActiveTabId()) {
            this.get_$9_4().$1l_5.showTab($v_1);
            this.get_$9_4().$1l_5.setActiveTab($v_1);
        }
        var $v_2 = String.format('breadcrumb_{0}', this.get_$9_4().$1D_5 - 1);
        var $v_3 = $P_CRM('#' + $v_2);
        if (!IsNull($v_3)) {
            $v_3.hide();
        }
    },
    
    get_$13_4: function() {
        if (IsNull(this.$4W_4)) {
            this.$4W_4 = (this.$F_3).get_dataContext().get_parent();
        }
        return this.$4W_4;
    },
    
    get_$9_4: function() {
        if (IsNull(this.$1w_4)) {
            this.$1w_4 = (this.$F_3);
        }
        return this.$1w_4;
    },
    
    $6q_4: function($p0, $p1) {
        var $v_0 = $p1.data['relationshipName'];
        var $v_1 = $p1.data['attributeName'];
        ProcessConfiguration.Behavior.AddEntityBehavior.$AD($p0, $v_0, $v_1);
    },
    
    $6a_4: function($p0) {
        var $v_0 = String.format('pcc_tab_{0}', this.get_$9_4().$1D_5);
        var $v_1 = String.format('breadcrumb_{0}', this.get_$9_4().$1D_5 - 1);
        var $v_2 = $P_CRM('#' + $v_1);
        if (!IsNull($v_2)) {
            $v_2.show();
        }
        var $v_3 = $P_CRM('#header_pcc_tabs').children('a[tabid=\'' + $v_0 + '\']');
        $v_3.text($p0);
        $v_3.attr('title', $p0);
        this.get_$9_4().$1l_5.showTab($v_0);
        this.get_$9_4().$1l_5.setActiveTab($v_0);
    },
    
    $4W_4: null,
    $1w_4: null
}


ProcessConfiguration.Behavior.BehaviorsFactory = function() {
}
ProcessConfiguration.Behavior.BehaviorsFactory.prototype = {
    
    $7t_0: function($p0, $p1) {
        var $v_0 = new ProcessConfiguration.Behavior.StepHoverBehavior($p0.get_jQueryObject().get(0));
        $v_0.set_view($p1.get_instance());
        return $v_0;
    },
    
    $7s_0: function($p0, $p1, $p2) {
        var $v_0;
        var $v_1 = $p0.get_jQueryObject().get(0);
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            $v_0 = new ProcessConfiguration.Behavior.StepFocusEventBubbleBehavior($v_1);
        }
        else {
            $v_0 = new ProcessConfiguration.Behavior.StepFocusEventCapturingBehavior($v_1);
        }
        $v_0.set_view($p1.get_instance());
        $v_0.$1N_4 = $p2;
        return $v_0;
    },
    
    $7r_0: function($p0, $p1) {
        var $v_0 = new ProcessConfiguration.Behavior.StageHoverBehavior($p0.get_jQueryObject().get(0));
        $v_0.set_view($p1.get_instance());
        return $v_0;
    },
    
    $7q_0: function($p0, $p1) {
        var $v_0;
        var $v_1 = $p0.get_jQueryObject().get(0);
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            $v_0 = new ProcessConfiguration.Behavior.StageFocusEventBubbleBehavior($v_1);
        }
        else {
            $v_0 = new ProcessConfiguration.Behavior.StageFocusEventCapturingBehavior($v_1);
        }
        $v_0.set_view($p1.get_instance());
        return $v_0;
    },
    
    createAddBranchConditionBehavior: function($p0, $p1, $p2) {
        var $v_0 = new ProcessControl.Configuration.AddBranchConditionBehavior($p0.get_item(0));
        $v_0.$2F_4 = $p1.get_stageModel().get_rootWorkflow();
        $v_0.$d_4 = $p1;
        $v_0.$1a_4 = $p2;
        $v_0.$32_4 = $p1.get_stageModel().get_stepModelFactory();
        $v_0.$M_4 = $p2.get_viewFactory();
        $v_0.$34_4 = $p1.get_viewModelFactory();
        $v_0.$8_4 = $p2.get_jQueryProxy();
        return $v_0;
    },
    
    createStepHoverBehaviorAdapter: function($p0, $p1, $p2) {
        var $v_0 = new ProcessConfiguration.Behavior.StepHoverBehaviorAdapter();
        $v_0.set_instance(this.$7t_0($p0, $p1));
        return $v_0;
    },
    
    createStepFocusBehaviorAdapter: function($p0, $p1, $p2) {
        var $v_0 = new ProcessConfiguration.Behavior.StepFocusBehaviorAdapter();
        $v_0.set_instance(this.$7s_0($p0, $p1, $p2));
        return $v_0;
    },
    
    createStageHoverBehaviorAdapter: function($p0, $p1) {
        var $v_0 = new ProcessConfiguration.Behavior.StageHoverBehaviorAdapter();
        $v_0.set_instance(this.$7r_0($p0, $p1));
        return $v_0;
    },
    
    createStageFocusBehaviorAdapter: function($p0, $p1) {
        var $v_0 = new ProcessConfiguration.Behavior.StageFocusBehaviorAdapter();
        $v_0.set_instance(this.$7q_0($p0, $p1));
        return $v_0;
    }
}


ProcessConfiguration.Behavior.ConfiguratorFlyout = function() {
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.get_flyout = function() {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$m;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.set_flyout = function(value) {
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$m = value;
    return value;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.showFlyout = function() {
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$m = Mscrm.FlyOutMenu.createFlyOut(ProcessConfiguration.Behavior.ConfiguratorFlyout.$3E);
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.get_options().set_minHeight(0);
    if (!IsNull(ProcessConfiguration.Behavior.ConfiguratorFlyout.$m) && !ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.get_isDisposed() && !ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.get_visible()) {
        var $v_0 = $P_CRM('#pcc_options');
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.show($v_0);
        var $v_1 = $P_CRM('.ui-widget-overlay.ui-widget-overlay-flyout');
        if (!IsNull($v_1)) {
            $v_1.addClass('confWidgetOverlay');
            $v_1.bind('click', ProcessConfiguration.Behavior.ConfiguratorFlyout.$9v);
        }
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$87();
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$7C();
    }
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$9v = function($p0) {
    ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout();
    $p0.preventDefault();
    $p0.stopImmediatePropagation();
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$7C = function() {
    var $v_0 = $P_CRM('.menuItemName');
    $v_0.wrap('<div class=\'menuItem\'/>');
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$87 = function() {
    var $v_0 = $P_CRM(String.format('.{0},.{1}', 'sectionItem', 'sectionTitle'));
    var $v_1 = $P_CRM('.addCloseContent');
    if ($v_0.length > 0 && !$v_1.length) {
        $('.sectionTitle,.sectionItem').wrapAll('<div class="addCloseContent" />');;
    }
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.hideFlyout = function() {
    if (!IsNull(ProcessConfiguration.Behavior.ConfiguratorFlyout.$m) && !ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.get_isDisposed()) {
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.hide();
        ProcessConfiguration.Behavior.ConfiguratorFlyout.$m.dispose();
    }
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.createFlyOutMenuDescriptor = function(lastEntity, entitiesInProcess, relationshipDictionary, clickHandler, isProcessClosed) {
    var $v_0 = 'sectionItem';
    if (isProcessClosed || entitiesInProcess.length >= 5) {
        $v_0 += ' flyoutSectionHide';
    }
    var $v_1 = relationshipDictionary[lastEntity];
    var $v_2 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8L(clickHandler);
    $v_2.cssClass = 'sectionTitle';
    var $v_3 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8K($v_1, entitiesInProcess, clickHandler);
    $v_3.cssClass = $v_0;
    var $v_4 = false;
    if ($v_3.menuListItems.length > 1) {
        $v_4 = true;
    }
    var $v_5 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8B(entitiesInProcess, isProcessClosed, $v_4);
    var $v_6 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8Q(clickHandler);
    $v_6.cssClass = 'sectionTitle';
    var $v_7 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8P(relationshipDictionary, entitiesInProcess, clickHandler, lastEntity);
    $v_7.cssClass = $v_0;
    var $v_8 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8d(clickHandler);
    $v_8.cssClass = 'flyoutDelete';
    var $v_9 = entitiesInProcess.length < 2;
    if ($v_9) {
        $v_8.cssClass += ' flyoutSectionHide';
    }
    if (isProcessClosed || $v_9) {
        $v_6.cssClass += ' flyoutSectionHide';
    }
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$3E = new Mscrm.FlyOutMenuDescriptor();
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$3E.cssClass = 'flyoutContainer';
    ProcessConfiguration.Behavior.ConfiguratorFlyout.$3E.menuSections = [ $v_2, $v_5, $v_3, $v_6, $v_7, $v_8 ];
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8K = function($p0, $p1, $p2) {
    var $v_0 = new Mscrm.MenuSectionDescriptor();
    $v_0.menuListItems = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8J($p0, $p1);
    $v_0.clickHandler = $p2;
    return $v_0;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8P = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Mscrm.MenuSectionDescriptor();
    $v_0.menuListItems = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8O($p0, $p1, $p3);
    $v_0.clickHandler = $p2;
    return $v_0;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8L = function($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$4h(window.LOCID_PROCESS_ADDENTITY, 'AddEntity', $p0, window.LOCID_PROCESS_ADDENTITY_TOOLTIP, false);
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8B = function($p0, $p1, $p2) {
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
    var $v_2 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8U($v_0);
    $v_2.cssClass = 'sectionItem bpfConfFlyoutEmptySection';
    if (!$v_1) {
        $v_2.cssClass += ' flyoutSectionHide';
    }
    return $v_2;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8U = function($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$4h($p0, 'NoOp', function($p1_0) {
    }, '', false);
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8Q = function($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$4h(window.LOCID_PROCESS_CLOSELOOP, 'CloseLoop', $p0, window.LOCID_PROCESS_CLOSELOOP_TOOLTIP, false);
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8d = function($p0) {
    return ProcessConfiguration.Behavior.ConfiguratorFlyout.$4h(window.LOCID_PROCESS_REMOVEENTITY, 'RemoveEntity', $p0, '', true);
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$4h = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new Mscrm.MenuListItemDescriptor();
    $v_0.title = $v_0.displayName = $p0;
    $v_0.data = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8I($p1);
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
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8I = function($p0) {
    var $v_0 = {};
    $v_0['Action'] = $p0;
    return $v_0;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8J = function($p0, $p1) {
    var $v_0 = new Array(ProcessConfiguration.Behavior.ConfiguratorFlyout.$8V($p0, $p1) + 1);
    $p0.sort();
    var $v_1 = 0;
    for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
        var $v_4 = $p0[$v_3];
        if (Array.contains($p1, $v_4.ReferencingEntityLogicalName)) {
            continue;
        }
        var $v_5 = new Mscrm.MenuListItemDescriptor();
        $v_5.id = String.format('add_{0}', $v_4.RelationshipName);
        $v_5.title = $v_5.displayName = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8W($v_4);
        $v_5.data = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8c($v_4);
        $v_5.cssClass = 'menuItemName';
        $v_5.tabIndex = '0';
        $v_0[$v_1++] = $v_5;
    }
    $v_0.sort(ProcessConfiguration.Behavior.ConfiguratorFlyout.$9g);
    var $v_2 = new Mscrm.MenuListItemDescriptor();
    $v_2.displayName = ' ';
    $v_2.cssClass = 'sentinelBorder';
    if ($p1.length < 2) {
        $v_2.cssClass += ' flyoutSectionHide';
    }
    $v_0[$v_0.length - 1] = $v_2;
    return $v_0;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$9g = function($p0, $p1) {
    var $v_0 = ($p0).displayName.toUpperCase();
    var $v_1 = ($p1).displayName.toUpperCase();
    return $v_0.localeCompare($v_1);
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8V = function($p0, $p1) {
    var $v_0 = 0;
    for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];
        if (!Array.contains($p1, $v_2.ReferencingEntityLogicalName)) {
            $v_0++;
        }
    }
    return $v_0;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8O = function($p0, $p1, $p2) {
    var $v_0 = new Array($p1.length);
    var $v_1 = ProcessControl.Configuration.ProcessConfigurationUtility.getCloseLoopEntityList($p0, $p1, $p2);
    if (!IsNull($v_1)) {
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            var $v_4 = $v_1[$v_3];
            var $v_5 = $v_4.ReferencingEntityLogicalName;
            var $v_6 = new Mscrm.MenuListItemDescriptor();
            $v_6.id = String.format('close_{0}', $v_5);
            $v_6.title = $v_6.displayName = $v_4.ReferencingEntityLabel;
            $v_6.data = ProcessConfiguration.Behavior.ConfiguratorFlyout.$8N($v_4);
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
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8N = function($p0) {
    var $v_0 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$6I($p0);
    $v_0['Action'] = 'CloseLoop';
    return $v_0;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8W = function($p0) {
    return String.format('{0} ({1})', $p0.ReferencingEntityLabel, $p0.AttributeLabel);
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$8c = function($p0) {
    var $v_0 = ProcessConfiguration.Behavior.ConfiguratorFlyout.$6I($p0);
    $v_0['Action'] = 'AddEntity';
    return $v_0;
}
ProcessConfiguration.Behavior.ConfiguratorFlyout.$6I = function($p0) {
    var $v_0 = {};
    if (IsNull($p0)) {
        return $v_0;
    }
    $v_0['entityLogicalName'] = $p0.ReferencingEntityLogicalName;
    $v_0['relationshipId'] = $p0.RelationshipId;
    $v_0['relationshipName'] = $p0.RelationshipName;
    $v_0['attributeName'] = $p0.AttributeName;
    $v_0['entityLabel'] = $p0.ReferencingEntityLabel;
    return $v_0;
}


ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior = function() {
}
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.setUnloadBehavior = function(pcView, message) {
    ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$1w = pcView;
    attachWindowOnBeforeUnload(ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$9j, window);
    ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$5O = message;
}
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$9j = function($p0) {
    ProcessControl.Configuration.ProcessConfigurationUtility.resetFocusOnActiveControl();
    if (!(IsNull(ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$1w)) && !ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$1w.get_isDirty()) {
        return;
    }
    $p0.rawEvent.returnValue = ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$5O;
    return ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior._warningMessage;;
}


ProcessConfiguration.Behavior.ExpandCollapseBehavior = function() {
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.setBehavior = function() {
    if (ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().length > 0) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().bind('click', ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler);
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().bind('keyup', ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpExpandHandler);
    }
    if (ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$3O().length > 0) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$3O().bind('click', ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler);
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$3O().bind('keyup', ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpCollapseHandler);
    }
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpCollapseHandler = function(jQueryEvent) {
    switch (jQueryEvent.which) {
        case 13:
            ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler(jQueryEvent);
            break;
        case 32:
            ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler(jQueryEvent);
            break;
    }
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.keyUpExpandHandler = function(jQueryEvent) {
    switch (jQueryEvent.which) {
        case 13:
            ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler(jQueryEvent);
            break;
        case 32:
            ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler(jQueryEvent);
            break;
    }
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.expandHandler = function(jQueryEvent) {
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$5x().removeClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$70().removeClass('expanded');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$6S().removeClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$6i().slideDown('fast');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().hide();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$3O().show();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$9x().focus();
    if (IsNull(jQueryEvent)) {
        return;
    }
    jQueryEvent.preventDefault();
    jQueryEvent.stopPropagation();
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.collapseHandler = function(jQueryEvent) {
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$5x().addClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$70().addClass('expanded');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$6S().addClass('collapsed');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$6i().slideUp('fast');
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$3O().hide();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().show();
    ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s().focus();
    if (IsNull(jQueryEvent)) {
        return;
    }
    jQueryEvent.preventDefault();
    jQueryEvent.stopPropagation();
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$6i = function() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4G)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4G = $P_CRM('#processDetailArea');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4G;
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$2s = function() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$40)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$40 = $P_CRM('#expandContainer');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$40;
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$3O = function() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3l)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3l = $P_CRM('#collapseContainer');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3l;
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$9x = function() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4H)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4H = $P_CRM('#ProcessName');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4H;
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$5x = function() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3m)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3m = $P_CRM('#pcc');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3m;
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$70 = function() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4S)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4S = $P_CRM('.pc_en_slc');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4S;
}
ProcessConfiguration.Behavior.ExpandCollapseBehavior.get_$6S = function() {
    if (IsNull(ProcessConfiguration.Behavior.ExpandCollapseBehavior.$48)) {
        ProcessConfiguration.Behavior.ExpandCollapseBehavior.$48 = $P_CRM('#includedEntities');
    }
    return ProcessConfiguration.Behavior.ExpandCollapseBehavior.$48;
}


ProcessConfiguration.Behavior.ShowImageUploaderBehavior = function() {
    this.$$d_onSetImageLinkClick = Function.createDelegate(this, this.onSetImageLinkClick);
}
ProcessConfiguration.Behavior.ShowImageUploaderBehavior.get_instance = function() {
    if (IsNull(ProcessConfiguration.Behavior.ShowImageUploaderBehavior._instance)) {
        ProcessConfiguration.Behavior.ShowImageUploaderBehavior._instance = new ProcessConfiguration.Behavior.ShowImageUploaderBehavior();
    }
    return ProcessConfiguration.Behavior.ShowImageUploaderBehavior._instance;
}
ProcessConfiguration.Behavior.ShowImageUploaderBehavior.prototype = {
    
    setBehavior: function(entityId) {
        this.$50_0 = entityId;
        this.get_$AB_0().bind('click', this.$$d_onSetImageLinkClick);
    },
    
    onSetImageLinkClick: function(jQueryEvent) {
        var $v_0 = Mscrm.CrmUri.create('/_grid/cmds/dlg_imageupload.aspx');
        $v_0.get_query()['entityId'] = this.$50_0.toString();
        $v_0.get_query()['entityName'] = 'workflow';
        $v_0.get_query()['attributeName'] = 'entityimage';
        var $v_1 = 390;
        var $v_2 = 456;
        var $v_3 = new Mscrm.CrmDialog($v_0, null, $v_2, $v_1, null);
        $v_3.show();
    },
    
    get_$AB_0: function() {
        if (IsNull(this.$4M_0)) {
            this.$4M_0 = $P_CRM('.setImageLink');
        }
        return this.$4M_0;
    },
    
    $4M_0: null,
    $50_0: null
}


ProcessConfiguration.Behavior.MoveBehavior = function($p0) {
    this.$$d_handleKeyboardDown = Function.createDelegate(this, this.handleKeyboardDown);
    this.$$d_moveDown = Function.createDelegate(this, this.moveDown);
    this.$$d_downArrowMouseLeave = Function.createDelegate(this, this.downArrowMouseLeave);
    this.$$d_downArrowMouseEnter = Function.createDelegate(this, this.downArrowMouseEnter);
    this.$$d_handleKeyboardUp = Function.createDelegate(this, this.handleKeyboardUp);
    this.$$d_moveUp = Function.createDelegate(this, this.moveUp);
    this.$$d_upArrowMouseLeave = Function.createDelegate(this, this.upArrowMouseLeave);
    this.$$d_upArrowMouseEnter = Function.createDelegate(this, this.upArrowMouseEnter);
    this.$$d_enableDisableUpDownArrows = Function.createDelegate(this, this.enableDisableUpDownArrows);
    ProcessConfiguration.Behavior.MoveBehavior.initializeBase(this, [ $p0 ]);
}
ProcessConfiguration.Behavior.MoveBehavior.prototype = {
    
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.$5p_3 = $find('pcc_tabs');
        if (!$P_CRM('#pcc_up_img').length && !ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.renderUpAndDownArrows();
        }
        this.$U_3 = $P_CRM('#pcc_up_img');
        this.$T_3 = $P_CRM('#pcc_down_img');
        this.$1m_3 = $P_CRM('#pcc_updown_arrows_text');
        this.disableUpAndDownArrows();
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().subscribe('stageselected', this.$$d_enableDisableUpDownArrows);
        ProcessControl.Configuration.ProcessEventAggregator.get_instance().subscribe('stepselected', this.$$d_enableDisableUpDownArrows);
    },
    
    renderUpAndDownArrows: function() {
        var $v_0 = $P_CRM(String.format('<img tabIndex=0 id=\'{0}\' title=\'{1}\'/>', CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_up_img'), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_MOVE_UP)));
        var $v_1 = $P_CRM(String.format('<img tabIndex=0 id=\'{0}\' title=\'{1}\'/>', CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_down_img'), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_PROCESS_MOVE_DOWN)));
        var $v_2 = $P_CRM(String.format('<p id=\'{0}\' class=\'{1}\'>{2}</p>', CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_updown_arrows_text'), CrmEncodeDecode.CrmHtmlAttributeEncode('pcc_updown_text'), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_MOVE)));
        $v_2.addClass('pcc_updown_text_disabled');
        $v_0.attr('src', this.get_$3R_3().source);
        $v_0.addClass(this.get_$3R_3().cssClass);
        $v_1.attr('src', this.get_$3Q_3().source);
        $v_1.addClass(this.get_$3Q_3().cssClass);
        $P_CRM(this.get_element()).append($v_0).append($v_1).append($v_2);
    },
    
    enableDisableUpDownArrows: function($p0, $p1) {
        this.clearUpAndDownArrowState();
        var $v_0 = this.handleNothingSelected();
        $v_0 = $v_0 || this.handleStepFocus();
        $v_0 = $v_0 || this.handleStageFocus();
    },
    
    handleNothingSelected: function() {
        if (IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6)) {
            this.disableUpAndDownArrows();
            return true;
        }
        return false;
    },
    
    handleStepFocus: function() {
        if (!IsNull(ProcessConfiguration.Behavior.StepFocusBehavior.$j)) {
            if (!ProcessConfiguration.Behavior.StepFocusBehavior.$j.$19_4.get_previousStepViewAdapter()) {
                this.disableUpArrow();
            }
            if (!ProcessConfiguration.Behavior.StepFocusBehavior.$j.$19_4.get_nextStepViewAdapter()) {
                this.disableDownArrow();
            }
            if (ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_$Ac_3().length === 1) {
                this.disableText();
            }
            return true;
        }
        return false;
    },
    
    handleStageFocus: function() {
        var $v_0 = ProcessConfiguration.Behavior.StageFocusBehavior.$6;
        if (!IsNull($v_0) && !IsNull((($v_0.get_id()) in $v_0.$2_5.get_stageViewsById()))) {
            var $v_1 = $v_0.$2_5.getStageViewById($v_0.get_id());
            if (IsNull($v_1.get_previousNavigationInfo()) || IsNull($v_1.get_previousNavigationInfo().get_previousNavigationInfo())) {
                this.disableUpArrow();
            }
            if (IsNull($v_1.get_previousNavigationInfo()) || IsNull($v_1.get_nextStageView())) {
                this.disableDownArrow();
            }
            if (!IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6.$s_5)) {
                if (ProcessConfiguration.Behavior.StageFocusBehavior.$6.$s_5.get_$Ac_3().length === 1) {
                    this.disableText();
                }
            }
            return true;
        }
        return false;
    },
    
    clearUpAndDownArrowState: function() {
        this.disableUpAndDownArrows();
        this.enableUpAndDownArrows();
    },
    
    enableUpAndDownArrows: function() {
        this.enableUpArrow();
        this.enableDownArrow();
        this.enableText();
    },
    
    enableText: function() {
        this.$1m_3.removeClass('pcc_updown_text_disabled');
        this.$1m_3.text(window.LOCID_PROCESS_MOVE);
    },
    
    enableUpArrow: function() {
        this.$U_3.removeClass(this.get_$3R_3().cssClass);
        this.$U_3.addClass(this.get_$2r_3().cssClass);
        this.$U_3.attr('src', this.get_$2r_3().source);
        this.$U_3.mouseenter(this.$$d_upArrowMouseEnter);
        this.$U_3.mouseleave(this.$$d_upArrowMouseLeave);
        this.$U_3.focus(this.$$d_upArrowMouseEnter);
        this.$U_3.blur(this.$$d_upArrowMouseLeave);
        this.$U_3.click(this.$$d_moveUp);
        $P_CRM('body').keydown(this.$$d_handleKeyboardUp);
    },
    
    enableDownArrow: function() {
        this.$T_3.removeClass(this.get_$3Q_3().cssClass);
        this.$T_3.addClass(this.get_$2q_3().cssClass);
        this.$T_3.attr('src', this.get_$2q_3().source);
        this.$T_3.mouseenter(this.$$d_downArrowMouseEnter);
        this.$T_3.mouseleave(this.$$d_downArrowMouseLeave);
        this.$T_3.focus(this.$$d_downArrowMouseEnter);
        this.$T_3.blur(this.$$d_downArrowMouseLeave);
        this.$T_3.click(this.$$d_moveDown);
        $P_CRM('body').keydown(this.$$d_handleKeyboardDown);
    },
    
    disableText: function() {
        this.$1m_3.addClass('pcc_updown_text_disabled');
    },
    
    disableUpAndDownArrows: function() {
        this.disableUpArrow();
        this.disableDownArrow();
        this.disableText();
    },
    
    disableUpArrow: function() {
        this.$U_3.removeClass(this.get_$2r_3().cssClass);
        this.$U_3.removeClass(this.get_$4k_3().cssClass);
        this.$U_3.addClass(this.get_$3R_3().cssClass);
        this.$U_3.attr('src', this.get_$3R_3().source);
        this.$U_3.unbind();
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardUp);
    },
    
    disableDownArrow: function() {
        this.$T_3.removeClass(this.get_$2q_3().cssClass);
        this.$T_3.removeClass(this.get_$4j_3().cssClass);
        this.$T_3.addClass(this.get_$3Q_3().cssClass);
        this.$T_3.attr('src', this.get_$3Q_3().source);
        this.$T_3.unbind();
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardDown);
    },
    
    upArrowMouseEnter: function($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$U_3.removeClass(this.get_$2r_3().cssClass);
        this.$U_3.attr('src', this.get_$4k_3().source);
        this.$U_3.addClass(this.get_$4k_3().cssClass);
        this.$1m_3.text(window.LOCID_PROCESS_MOVE_UP);
    },
    
    upArrowMouseLeave: function($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$U_3.removeClass(this.get_$4k_3().cssClass);
        this.$U_3.attr('src', this.get_$2r_3().source);
        this.$U_3.addClass(this.get_$2r_3().cssClass);
        this.$1m_3.text(window.LOCID_PROCESS_MOVE);
    },
    
    downArrowMouseEnter: function($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$T_3.removeClass(this.get_$2q_3().cssClass);
        this.$T_3.attr('src', this.get_$4j_3().source);
        this.$T_3.addClass(this.get_$4j_3().cssClass);
        this.$1m_3.text(window.LOCID_PROCESS_MOVE_DOWN);
    },
    
    downArrowMouseLeave: function($p0) {
        if (IsNull($p0)) {
            return;
        }
        this.$T_3.removeClass(this.get_$4j_3().cssClass);
        this.$T_3.attr('src', this.get_$2q_3().source);
        this.$T_3.addClass(this.get_$2q_3().cssClass);
        this.$1m_3.text(window.LOCID_PROCESS_MOVE);
    },
    
    handleKeyboardUp: function($p0) {
        if ($p0.which === 38 && !this.$71_3($p0.target)) {
            $p0.preventDefault();
            $p0.stopPropagation();
            this.moveUp($p0);
        }
    },
    
    handleKeyboardDown: function($p0) {
        if ($p0.which === 40 && !this.$71_3($p0.target)) {
            $p0.preventDefault();
            $p0.stopPropagation();
            this.moveDown($p0);
        }
    },
    
    $71_3: function($p0) {
        if ($p0.id.endsWith('_sp_f_i') || $p0.id.endsWith('_StageCategory_i') || $p0.id.endsWith('_StageParentEntity_i')) {
            return true;
        }
        return false;
    },
    
    moveUp: function($p0) {
        if (IsNull($p0)) {
            return;
        }
        $p0.preventDefault();
        $p0.stopPropagation();
        if (IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6) || Mscrm.MaskPanel.get_instance().get_isDisplayed()) {
            return;
        }
        if (!IsNull(ProcessConfiguration.Behavior.StepFocusBehavior.$j)) {
            this.$6c_3(-1);
        }
        else {
            this.$6b_3(-1);
        }
        this.enableDisableUpDownArrows(null, null);
    },
    
    $6c_3: function($p0) {
        var $v_0 = ProcessConfiguration.Behavior.StepFocusBehavior.$j.$19_4;
        if ($p0 === -1) {
            $v_0.moveUp();
        }
        else {
            $v_0.moveDown();
        }
    },
    
    $6b_3: function($p0) {
        var $v_0 = ProcessConfiguration.Behavior.StageFocusBehavior.$6;
        var $v_1 = $v_0.$2_5.getStageViewById($v_0.get_id());
        if ($p0 === -1) {
            $v_1.moveUp();
        }
        else {
            $v_1.moveDown();
        }
    },
    
    moveDown: function($p0) {
        if (IsNull($p0)) {
            return;
        }
        $p0.preventDefault();
        $p0.stopPropagation();
        if (IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6) || Mscrm.MaskPanel.get_instance().get_isDisplayed()) {
            return;
        }
        if (!IsNull(ProcessConfiguration.Behavior.StepFocusBehavior.$j)) {
            this.$6c_3(1);
        }
        else {
            this.$6b_3(1);
        }
        this.enableDisableUpDownArrows(null, null);
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        var $v_0 = ProcessControl.Configuration.ProcessEventAggregator.get_instance();
        if (!$v_0.get_isDisposed()) {
            $v_0.unsubscribe('stageselected', this.$$d_enableDisableUpDownArrows);
            $v_0.unsubscribe('stepselected', this.$$d_enableDisableUpDownArrows);
        }
        this.$U_3.unbind();
        this.$T_3.unbind();
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardUp);
        $P_CRM('body').unbind('keydown', this.$$d_handleKeyboardDown);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this);
    },
    
    get_$2r_3: function() {
        if (IsNull(this.$3v_3)) {
            this.$3v_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/30_enabled_move_up.png'));
        }
        return this.$3v_3;
    },
    
    get_$2q_3: function() {
        if (IsNull(this.$3t_3)) {
            this.$3t_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/30_enabled_move_down.png'));
        }
        return this.$3t_3;
    },
    
    get_$4k_3: function() {
        if (IsNull(this.$47_3)) {
            this.$47_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/30_moveuphover.png'));
        }
        return this.$47_3;
    },
    
    get_$4j_3: function() {
        if (IsNull(this.$44_3)) {
            this.$44_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/30_movedownhover.png'));
        }
        return this.$44_3;
    },
    
    get_$3R_3: function() {
        if (IsNull(this.$3r_3)) {
            this.$3r_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/30_disabled_move_up.png'));
        }
        return this.$3r_3;
    },
    
    get_$3Q_3: function() {
        if (IsNull(this.$3p_3)) {
            this.$3p_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/30_disabled_move_down.png'));
        }
        return this.$3p_3;
    },
    
    $5p_3: null,
    $U_3: null,
    $T_3: null,
    $1m_3: null,
    $3v_3: null,
    $3r_3: null,
    $47_3: null,
    $3t_3: null,
    $3p_3: null,
    $44_3: null
}


ProcessConfiguration.Behavior.ResizeBehavior = function() {
}
ProcessConfiguration.Behavior.ResizeBehavior.setResizeBehavior = function() {
    $P_CRM(window).resize(ProcessConfiguration.Behavior.ResizeBehavior.$Ab);
}
ProcessConfiguration.Behavior.ResizeBehavior.$Ab = function($p0) {
    var $v_0 = $P_CRM('#content_pcc_tabs');
    if (IsNull($v_0)) {
        return;
    }
    $v_0.removeAttr('style');
}


ProcessConfiguration.Behavior.AddBranchConditionBehaviorAdapter = function() {
    ProcessConfiguration.Behavior.AddBranchConditionBehaviorAdapter.initializeBase(this);
}
ProcessConfiguration.Behavior.AddBranchConditionBehaviorAdapter.prototype = {
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        var $v_0 = this.$b_0;
        this.$5_1 = this.$J_1.createAddBranchConditionBehavior(this.$B_1, $v_0, this.$1V_0);
        this.$5_1.initialize();
    },
    
    $B_1: null,
    
    get_element: function() {
        return this.$B_1;
    },
    
    set_element: function($p0) {
        this.$B_1 = $p0;
        return $p0;
    },
    
    $J_1: null,
    
    get_behaviorsFactory: function() {
        return this.$J_1;
    },
    
    set_behaviorsFactory: function($p0) {
        this.$J_1 = $p0;
        return $p0;
    },
    
    $5_1: null,
    
    get_instance: function() {
        return this.$5_1;
    },
    
    set_instance: function($p0) {
        this.$5_1 = $p0;
        return $p0;
    },
    
    dispose: function() {
        Error.notImplemented('The method or operation is not implemented.');
    }
}


ProcessConfiguration.Behavior.FocusBehaviorBase$1 = function(element) {
    this.$$d_$8A_3 = Function.createDelegate(this, this.$8A_3);
    this.$$d_onFocused = Function.createDelegate(this, this.onFocused);
    this.$1P_3 = ((this.$$gta['ProcessConfiguration.Behavior.FocusBehaviorBase$1']['T'] === Number || Type.isEnum(this.$$gta['ProcessConfiguration.Behavior.FocusBehaviorBase$1']['T'])) ? 0 : (this.$$gta['ProcessConfiguration.Behavior.FocusBehaviorBase$1']['T'] === Boolean) ? false : null);
    ProcessConfiguration.Behavior.FocusBehaviorBase$1.$$(this.$$gta['ProcessConfiguration.Behavior.FocusBehaviorBase$1']['T']).initializeBase(this, [ element ]);
    this.$y_3 = $P_CRM(element);
}
ProcessConfiguration.Behavior.FocusBehaviorBase$1.$$ = function(T) {
    var $$cn = 'FocusBehaviorBase$1' + '$' + T.getName().replace(/\./g, '_');
    if (!ProcessConfiguration.Behavior[$$cn]) {
        var $$ccr = ProcessConfiguration.Behavior[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessConfiguration.Behavior.FocusBehaviorBase$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessConfiguration.Behavior.FocusBehaviorBase$1.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessConfiguration.Behavior.' + $$cn, Mscrm.CrmUIBehavior);
        var $$dict_5 = ProcessConfiguration.Behavior.FocusBehaviorBase$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return ProcessConfiguration.Behavior[$$cn];
}
ProcessConfiguration.Behavior.FocusBehaviorBase$1.prototype = {
    
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.bindEvents();
    },
    
    get_view: function() {
        return this.$1P_3;
    },
    
    set_view: function(value) {
        this.$1P_3 = value;
        return value;
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$y_3.unbind('focusin');
        }
        else {
            this.$y_3.get(0).removeEventListener('focus', this.$42_3, true);
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this);
    },
    
    bindEvents: function() {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$y_3.bind('focusin', this.$$d_onFocused);
        }
        else {
            this.$42_3 = this.$$d_$8A_3;
            this.$y_3.get(0).addEventListener('focus', this.$42_3, true);
        }
    },
    
    get_jQueryElement: function() {
        return this.$y_3;
    },
    
    $8A_3: function($p0) {
        this.onFocused($P_CRM.event.fix($p0));
    },
    
    $y_3: null,
    $42_3: null
}


ProcessConfiguration.Behavior.HoverBehavior$1 = function(element) {
    this.$$d_$9m_3 = Function.createDelegate(this, this.$9m_3);
    this.$$d_$9l_3 = Function.createDelegate(this, this.$9l_3);
    this.$$d_onHoverOut = Function.createDelegate(this, this.onHoverOut);
    this.$$d_onHover = Function.createDelegate(this, this.onHover);
    ProcessConfiguration.Behavior.HoverBehavior$1.$$(this.$$gta['ProcessConfiguration.Behavior.HoverBehavior$1']['T']).initializeBase(this, [ element ]);
    this.$y_3 = $P_CRM(element);
}
ProcessConfiguration.Behavior.HoverBehavior$1.$$ = function(T) {
    var $$cn = 'HoverBehavior$1' + '$' + T.getName().replace(/\./g, '_');
    if (!ProcessConfiguration.Behavior[$$cn]) {
        var $$ccr = ProcessConfiguration.Behavior[$$cn] = function() {
            (this.$$gta = this.$$gta || {})['ProcessConfiguration.Behavior.HoverBehavior$1'] = {'T': T};
            var $v_0 = [];
            for (var $v_1 = 0; $v_1 < arguments.length; ++$v_1) {
                $v_0[$v_1] = arguments[$v_1];
            }
            ProcessConfiguration.Behavior.HoverBehavior$1.apply(this, $v_0);
        };
        $$ccr.registerClass('ProcessConfiguration.Behavior.' + $$cn, Mscrm.CrmUIBehavior);
        var $$dict_5 = ProcessConfiguration.Behavior.HoverBehavior$1.prototype;
        for (var $$key_6 in $$dict_5) {
            var $$entry_7 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ('constructor' !== $$entry_7.key) {
                $$ccr.prototype[$$entry_7.key] = $$entry_7.value;
            }
        }
    }
    return ProcessConfiguration.Behavior[$$cn];
}
ProcessConfiguration.Behavior.HoverBehavior$1.prototype = {
    
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.bindEvents();
    },
    
    get_view: function() {
        return this.$1P_3;
    },
    
    set_view: function(value) {
        this.$1P_3 = value;
        return value;
    },
    
    bindEvents: function() {
        this.$y_3.bind('mouseover', this.$$d_onHover);
        this.$y_3.bind('mouseout', this.$$d_onHoverOut);
        this.get_deleteIcon().bind('mouseover', this.$$d_$9l_3);
        this.get_deleteIcon().bind('mouseout', this.$$d_$9m_3);
    },
    
    $9l_3: function($p0) {
        var $v_0 = this.get_deleteIcon().children(':first-child');
        $v_0.attr('src', this.get_$6R_3().source);
        $v_0.attr('class', this.get_$6R_3().cssClass + ' ' + 'pc_step_d_img');
    },
    
    $9m_3: function($p0) {
        var $v_0 = this.get_deleteIcon().children(':first-child');
        $v_0.attr('src', this.get_$60_3().source);
        $v_0.attr('class', this.get_$60_3().cssClass + ' ' + 'pc_step_d_img');
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        try {
            this.$y_3.unbind('mouseover');
            this.$y_3.unbind('mouseout');
            this.get_deleteIcon().unbind('mouseover');
            this.get_deleteIcon().unbind('mouseout');
            Mscrm.CrmUIBehavior.prototype.dispose.call(this);
        }
        catch ($$e_0) {
        }
    },
    
    get_$6R_3: function() {
        if (IsNull(this.$45_3)) {
            this.$45_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/12_active_config_delete.png'));
        }
        return this.$45_3;
    },
    
    get_jQueryElement: function() {
        return this.$y_3;
    },
    
    get_$60_3: function() {
        if (IsNull(this.$3o_3)) {
            this.$3o_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + '/_imgs/processcontrol/12_inactive_config_delete.png'));
        }
        return this.$3o_3;
    },
    
    $y_3: null,
    $1P_3: null,
    $45_3: null,
    $3o_3: null
}


ProcessConfiguration.Behavior.StageFocusBehavior = function(element) {
    this.$$d_$9c_4 = Function.createDelegate(this, this.$9c_4);
    ProcessConfiguration.Behavior.StageFocusBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StageFocusBehavior.set_$3U = function($p0) {
    if (ProcessConfiguration.Behavior.StageFocusBehavior.$6 !== $p0) {
        if (!IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6)) {
            ProcessConfiguration.Behavior.StepFocusBehavior.set_focusedStep(null);
            if (!IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6) && ProcessConfiguration.Behavior.StageFocusBehavior.$6.$1O_5) {
                ProcessConfiguration.Behavior.StageFocusBehavior.$6.$1O_5.get_stageFocusBehaviorAdapter().get_instance().$30_4();
            }
        }
        ProcessConfiguration.Behavior.StageFocusBehavior.$6 = $p0;
        if (!IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6) && ProcessConfiguration.Behavior.StageFocusBehavior.$6.$1O_5) {
            ProcessConfiguration.Behavior.StageFocusBehavior.$6.$1O_5.get_stageFocusBehaviorAdapter().get_instance().makeSelection();
        }
        if (!IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6)) {
            try {
                $removeHandler(ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_element(), 'keydown', ProcessConfiguration.Behavior.StageFocusBehavior.$6.$$d_addStepKeyBoardShortcut);
            }
            catch ($$e_1) {
            }
            $addHandler(ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_element(), 'keydown', ProcessConfiguration.Behavior.StageFocusBehavior.$6.$$d_addStepKeyBoardShortcut);
        }
        ProcessConfiguration.Behavior.StageFocusBehavior.$6j();
    }
    return $p0;
}
ProcessConfiguration.Behavior.StageFocusBehavior.$6j = function() {
    var $v_0 = ProcessControl.Configuration.ProcessEventAggregator.get_instance();
    try {
        $v_0.publish('stageselected', null, null);
    }
    catch ($$e_1) {
    }
}
ProcessConfiguration.Behavior.StageFocusBehavior.prototype = {
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        if (ProcessConfiguration.Behavior.StageFocusBehavior.$6 === this.get_view()) {
            ProcessConfiguration.Behavior.StageFocusBehavior.set_$3U(null);
        }
        if (!IsNull(ProcessConfiguration.Behavior.StageFocusBehavior.$6)) {
            $removeHandler(ProcessConfiguration.Behavior.StageFocusBehavior.$6.get_element(), 'keydown', ProcessConfiguration.Behavior.StageFocusBehavior.$6.$$d_addStepKeyBoardShortcut);
        }
        ProcessConfiguration.Behavior.FocusBehaviorBase$1.prototype.dispose.call(this);
    },
    
    onFocused: function(eventHandler) {
        ProcessConfiguration.Behavior.StageFocusBehavior.set_$3U(this.get_view());
    },
    
    $30_4: function() {
        this.get_view().get_$25_5().removeClass('pc_stagehl');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$25_5().removeClass('pc_highContrastFocused');
            this.get_view().get_$22_5().removeClass('pc_highContrastFocused');
        }
    },
    
    makeSelection: function() {
        this.get_view().get_$25_5().addClass('pc_stagehl');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$25_5().addClass('pc_highContrastFocused');
            this.get_view().get_$22_5().addClass('pc_highContrastFocused');
        }
        this.get_view().get_elementWrapper().bind('keydown', this.$$d_$9c_4);
    },
    
    $9c_4: function($p0) {
        switch ($p0.which) {
            case 127:
            case 8:
            case 46:
                if (!this.$Z_4($p0)) {
                    return;
                }
                $p0.preventDefault();
                $p0.stopImmediatePropagation();
                break;
        }
    },
    
    $Z_4: function($p0) {
        return this.get_view().get_$1A_5().is(':visible') && ProcessControl.Configuration.BpfMenuActions.isCtrlKeyPressed($p0);
    }
}


ProcessConfiguration.Behavior.StepFocusBehavior = function(element) {
    ProcessConfiguration.Behavior.StepFocusBehavior.initializeBase(this, [ element ]);
}
ProcessConfiguration.Behavior.StepFocusBehavior.get_focusedStep = function() {
    return ProcessConfiguration.Behavior.StepFocusBehavior.$j;
}
ProcessConfiguration.Behavior.StepFocusBehavior.set_focusedStep = function(value) {
    if (!IsNull(ProcessConfiguration.Behavior.StepFocusBehavior.$j) && ProcessConfiguration.Behavior.StepFocusBehavior.$j.$19_4) {
        ProcessConfiguration.Behavior.StepFocusBehavior.$j.$19_4.get_stepFocusBehaviorAdapter().get_instance().$30_4();
    }
    ProcessConfiguration.Behavior.StepFocusBehavior.$j = value;
    if (!IsNull(ProcessConfiguration.Behavior.StepFocusBehavior.$j) && ProcessConfiguration.Behavior.StepFocusBehavior.$j.$19_4) {
        ProcessConfiguration.Behavior.StepFocusBehavior.$j.$19_4.get_stepFocusBehaviorAdapter().get_instance().$5f_4();
    }
    ProcessConfiguration.Behavior.StepFocusBehavior.$6j();
    return value;
}
ProcessConfiguration.Behavior.StepFocusBehavior.$6j = function() {
    var $v_0 = ProcessControl.Configuration.ProcessEventAggregator.get_instance();
    try {
        $v_0.publish('stepselected', null, null);
    }
    catch ($$e_1) {
    }
}
ProcessConfiguration.Behavior.StepFocusBehavior.prototype = {
    $1N_4: null,
    
    get_parentStageView: function() {
        return this.$1N_4;
    },
    
    set_parentStageView: function(value) {
        this.$1N_4 = value;
        return value;
    },
    
    get_$1A_4: function() {
        return this.get_view().get_$1A_4();
    },
    
    dispose: function() {
        if (this.get_isDisposed()) {
            return;
        }
        if (ProcessConfiguration.Behavior.StepFocusBehavior.$j === this.get_view()) {
            ProcessConfiguration.Behavior.StepFocusBehavior.set_focusedStep(null);
        }
        ProcessConfiguration.Behavior.FocusBehaviorBase$1.prototype.dispose.call(this);
    },
    
    onFocused: function(eventHandler) {
        ProcessConfiguration.Behavior.StepFocusBehavior.set_focusedStep(this.get_view());
    },
    
    $5f_4: function() {
        this.get_jQueryElement().addClass('selected');
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly();
        var $v_1 = this.get_view().$19_4.get_viewModel().get_canDelete();
        if (!$v_0 && $v_1) {
            this.get_$1A_4().addClass('pc_step_del_sel');
        }
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$4s_4().addClass('pc_highContrastHover');
            this.get_view().get_$4Y_4().addClass('pc_highContrastHover');
        }
    },
    
    $30_4: function() {
        this.get_jQueryElement().removeClass('selected');
        this.get_$1A_4().removeClass('pc_step_del_sel');
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.get_view().get_$4s_4().removeClass('pc_highContrastFocused');
            this.get_view().get_$4Y_4().removeClass('pc_highContrastFocused');
        }
    }
}


Type.registerNamespace('ProcessConfiguration.Builder');

ProcessConfiguration.Builder.IButtonBuilder = function() {}
ProcessConfiguration.Builder.IButtonBuilder.registerInterface('ProcessConfiguration.Builder.IButtonBuilder');


ProcessConfiguration.Builder.IImageBuilder = function() {}
ProcessConfiguration.Builder.IImageBuilder.registerInterface('ProcessConfiguration.Builder.IImageBuilder');


ProcessConfiguration.Builder.IInlineEditControlBuilder = function() {}
ProcessConfiguration.Builder.IInlineEditControlBuilder.registerInterface('ProcessConfiguration.Builder.IInlineEditControlBuilder');


ProcessConfiguration.Builder.IRelationshipsTableBuilder = function() {}
ProcessConfiguration.Builder.IRelationshipsTableBuilder.registerInterface('ProcessConfiguration.Builder.IRelationshipsTableBuilder');


ProcessConfiguration.Builder.IStageBuilder = function() {}
ProcessConfiguration.Builder.IStageBuilder.registerInterface('ProcessConfiguration.Builder.IStageBuilder');


ProcessConfiguration.Builder.IStepBuilder = function() {}
ProcessConfiguration.Builder.IStepBuilder.registerInterface('ProcessConfiguration.Builder.IStepBuilder');


ProcessConfiguration.Builder.ButtonBuilder = function() {
}
ProcessConfiguration.Builder.ButtonBuilder.prototype = {
    
    $7S_0: function($p0) {
        var $v_0 = this.$0_0.fromHtml('<label></label>');
        $v_0.set_text($p0 || '');
        return $v_0;
    },
    
    build: function(labelText, className, iconPath, title, iconAltText) {
        var $v_0 = this.$0_0.fromHtml('<button></button>');
        $v_0.addClass('button');
        $v_0.addClass(className || '');
        $v_0.attribute('title', title || '');
        var $v_1;
        if (!isNullOrEmptyString(iconPath)) {
            $v_1 = this.$n_0.build(iconPath, title, iconAltText);
        }
        else {
            $v_1 = this.$0_0.fromHtml('<div></div>');
            $v_1.addClass('image');
        }
        $v_0.append($v_1);
        var $v_2 = this.$7S_0(labelText);
        $v_0.append($v_2);
        return $v_0;
    },
    
    $0_0: null,
    
    get_jQueryProxy: function() {
        return this.$0_0;
    },
    
    set_jQueryProxy: function(value) {
        this.$0_0 = value;
        return value;
    },
    
    $n_0: null,
    
    get_imageBuilder: function() {
        return this.$n_0;
    },
    
    set_imageBuilder: function(value) {
        this.$n_0 = value;
        return value;
    }
}


ProcessConfiguration.Builder.ImageBuilder = function() {
}
ProcessConfiguration.Builder.ImageBuilder.prototype = {
    
    build: function(iconPath, title, altText) {
        var $v_0 = this.$2D_0.getImageFromPath(iconPath);
        var $v_1 = this.$0_0.fromElement($v_0.get_element());
        $v_1.attribute('title', title);
        $v_1.attribute('alt', altText);
        return $v_1;
    },
    
    $2D_0: null,
    
    get_imageStripProxy: function() {
        return this.$2D_0;
    },
    
    set_imageStripProxy: function(value) {
        this.$2D_0 = value;
        return value;
    },
    
    $0_0: null,
    
    get_jQueryProxy: function() {
        return this.$0_0;
    },
    
    set_jQueryProxy: function(value) {
        this.$0_0 = value;
        return value;
    }
}


ProcessConfiguration.Builder.InlineEditControlBuilder = function() {
}
ProcessConfiguration.Builder.InlineEditControlBuilder.prototype = {
    
    build: function($p0, $p1, $p2) {
        var $v_0 = this.$0_0.fromHtml('<div></div>');
        $v_0.addClass($p0 || '');
        $v_0.attribute('id', $p1);
        $v_0.attribute('tabindex', '0');
        $v_0.attribute('data-layout', '3');
        var $v_1 = this.$0_0.fromHtml('<div></div>');
        $v_1.addClass('ms-crm-Inline-Value');
        $v_1.set_text($p2 || '');
        $v_0.append($v_1);
        return $v_0;
    },
    
    $0_0: null,
    
    get_jQueryProxy: function() {
        return this.$0_0;
    },
    
    set_jQueryProxy: function($p0) {
        this.$0_0 = $p0;
        return $p0;
    }
}


ProcessConfiguration.Builder.PageBuilder = function() {
    ProcessConfiguration.Builder.PageBuilder.initializeBase(this);
}
ProcessConfiguration.Builder.PageBuilder.prototype = {
    
    buildStageDetailsColumn: function(stageViewModel) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('details');
        $v_0.addClass('column');
        var $v_1 = this.$7U_2(stageViewModel);
        $v_0.append($v_1);
        var $v_2 = this.$7V_2(stageViewModel);
        $v_0.append($v_2);
        var $v_3 = this.$7W_2(stageViewModel);
        $v_0.append($v_3);
        return $v_0;
    },
    
    buildStageStepsColumn: function(pageViewModel) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('steps');
        $v_0.addClass('column');
        $v_0.addClass('pageSection');
        var $v_1 = this.buildStageStepHeader();
        $v_0.append($v_1);
        var $v_2 = this.buildStepList(pageViewModel);
        $v_0.append($v_2);
        var $v_3 = this.$k_1.build(null, 'add-step', '/_imgs/processcontrol/white_plus_16.png', window.LOCID_PROCESS_ADDSTEP, window.LOCID_PROCESS_ADDSTEP);
        $v_0.append($v_3);
        return $v_0;
    },
    
    $7W_2: function($p0) {
        var $v_0 = String.format('{0}_PageUniqueName', $p0.get_stageId());
        var $v_1 = this.buildInlineEditControl($p0.get_stageModel().get_stageStep().get_Name(), window.LOCID_PROCESS_STAGEUNIQUENAME, 'page-unique-name', $v_0, false);
        return $v_1;
    },
    
    $7U_2: function($p0) {
        var $v_0 = $p0.get_stageName();
        var $v_1 = String.format('{0}_PageName', $p0.get_stageId());
        var $v_2 = this.buildInlineEditControl($v_0, window.LOCID_PROCESS_PAGENAME, 'stage-name', $v_1, true);
        return $v_2;
    },
    
    $7V_2: function($p0) {
        var $v_0 = ProcessControl.Configuration.ProcessEnabledEntities.getLabelByLogicalName($p0.get_entityLogicalName());
        var $v_1 = String.format('{0}_PageParentEntity', $p0.get_stageId());
        var $v_2 = this.buildInlineEditControl($v_0, window.LOCID_PROCESS_STAGE_ENTITYNAME, 'stage-parent-entity', $v_1, true);
        return $v_2;
    },
    
    buildStageStepHeader: function() {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('step-header');
        var $v_1 = this.$8_1.fromHtml('<span></span>');
        $v_1.addClass('pc_pagestep_name_value_container');
        $v_0.append($v_1);
        var $v_2 = this.buildLabelElement(window.LOCID_PROCESS_PAGE_LABELNAME);
        $v_1.append($v_2);
        var $v_3 = this.$8_1.fromHtml('<span></span>');
        $v_3.addClass('pc_pagestep_name_value_container');
        $v_0.append($v_3);
        var $v_4 = this.buildLabelElement(window.LOCID_PROCESS_PAGE_SOURCENAME);
        $v_3.append($v_4);
        var $v_5 = this.$8_1.fromHtml('<span></span>');
        $v_5.addClass('pc_pagestep_name_value_container');
        $v_0.append($v_5);
        var $v_6 = this.buildLabelElement(window.LOCID_PROCESS_PAGE_FIELDNAME);
        $v_5.append($v_6);
        return $v_0;
    },
    
    createEmptyStageData: function(workflowStep) {
        return ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyPageData(workflowStep);
    },
    
    getInsertStageTextKey: function() {
        return window.LOCID_PROCESS_INSERTPAGETEXTKEY;
    }
}


ProcessConfiguration.Builder.PageStepBuilder = function() {
    ProcessConfiguration.Builder.PageStepBuilder.initializeBase(this);
}
ProcessConfiguration.Builder.PageStepBuilder.prototype = {
    
    buildNewStep: function(wrapper, idPrefix) {
        var $v_0 = String.format('{0}_{1}_sp', idPrefix, this.sanitizeId(wrapper.get_Id()));
        var $v_1 = this.$0_1.fromHtml('<li></li>');
        $v_1.addClass('pc_step');
        $v_1.attribute('id', CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $v_1.attribute('tabindex', '-1');
        var $v_2 = this.renderStepMainArea(wrapper, $v_0);
        $v_1.append($v_2);
        var $v_3 = this.renderDeleteIcon();
        $v_1.append($v_3);
        return $v_1;
    },
    
    renderStepMainArea: function(wrapper, stepId) {
        var $v_0 = this.$0_1.fromHtml('<span></span>');
        $v_0.addClass('pc_step_namecontrol_container');
        var $v_1 = this.renderStepName(wrapper, stepId);
        $v_1.addClass('pc_pagestep_element');
        $v_0.append($v_1);
        var $v_2 = this.renderStepOptions(stepId, '{0}_s');
        $v_2.addClass('pc_pagestep_element');
        $v_0.append($v_2);
        var $v_3 = this.renderStepOptions(stepId, '{0}_f');
        $v_3.addClass('pc_pagestep_element');
        $v_0.append($v_3);
        return $v_0;
    }
}


ProcessConfiguration.Builder.RelationshipsTableBuilder = function() {
}
ProcessConfiguration.Builder.RelationshipsTableBuilder.prototype = {
    
    build: function($p0, $p1) {
        var $v_0 = this.$0_0.fromHtml('<table></table>');
        $v_0.addClass('relationshipTable');
        var $v_1 = this.$0_0.fromHtml('<tr></tr>');
        var $v_2 = this.$0_0.fromHtml('<th></th>');
        $v_2.set_text(window.LOCID_PROCESS_DIALOG_PREV_STAGE);
        $v_2.attribute('title', window.LOCID_PROCESS_DIALOG_PREV_STAGE);
        var $v_3 = this.$0_0.fromHtml('<th></th>');
        $v_3.set_text(window.LOCID_PROCESS_DIALOG_ENTITY);
        $v_3.attribute('title', window.LOCID_PROCESS_DIALOG_ENTITY);
        var $v_4 = this.$0_0.fromHtml('<th></th>');
        $v_4.set_text(window.LOCID_PROCESS_DIALOG_RELATION);
        $v_4.attribute('title', window.LOCID_PROCESS_DIALOG_RELATION);
        $v_2.addClass('previousStageEntityColumn');
        $v_3.addClass('previousStageEntityColumn');
        $v_4.addClass('relationshipColumn');
        $v_1.append($v_2);
        $v_1.append($v_3);
        $v_1.append($v_4);
        $v_0.append($v_1);
        var $v_5 = $p0.get_picklistViewModelDictionary();
        for (var $v_6 = 0; $v_6 < $p0.get_picklistCount(); $v_6++) {
            var $v_7 = $v_5[$v_6.toString()];
            var $v_8 = $v_7.$3w_0;
            var $v_9 = this.$0_0.fromHtml('<tr></tr>');
            var $v_A = this.$20_0[$v_7.$4O_0];
            var $v_B = this.$0_0.fromHtml('<td></td>');
            var $v_C = $v_A.get_viewModel().get_stageName();
            $v_B.set_text($v_C);
            $v_B.attribute('title', $v_C);
            var $v_D = this.$0_0.fromHtml('<td></td>');
            var $v_E = $v_7.$37_0.first().get_sourceStageEntityDisplayName();
            $v_D.set_text($v_E);
            $v_D.attribute('title', $v_E);
            var $v_F = this.$0_0.fromHtml(String.format('<td id={0}></td>', 'inlineControl' + $v_6));
            $v_9.append($v_B);
            $v_9.append($v_D);
            $v_9.append($v_F);
            $v_0.append($v_9);
            var $v_G = this.$17_0.build('', 'inlineControl' + $v_6, 'inlineControl' + $v_6);
            $v_F.get_jQueryObject().append($v_G.get_jQueryObject());
            var $v_H = Mscrm.InlineControlFactory.createInlineAutoCompletePicklistControlForDom($v_G.get_jQueryObject(), 'inlineControl' + $v_6, $v_8, $p0.getDefaultRelationshiupEnum($v_6.toString()).toString(), '', 0, 'alwaysedit', '', '');
            $v_H.initializeAndRenderEditView();
            $p1.add($v_H);
        }
        return $v_0;
    },
    
    $0_0: null,
    
    get_jQueryProxy: function() {
        return this.$0_0;
    },
    
    set_jQueryProxy: function($p0) {
        this.$0_0 = $p0;
        return $p0;
    },
    
    $17_0: null,
    
    get_inlineEditControlBuilder: function() {
        return this.$17_0;
    },
    
    set_inlineEditControlBuilder: function($p0) {
        this.$17_0 = $p0;
        return $p0;
    },
    
    $20_0: null,
    
    get_stageViewsById: function() {
        return this.$20_0;
    },
    
    set_stageViewsById: function($p0) {
        this.$20_0 = $p0;
        return $p0;
    }
}


ProcessConfiguration.Builder.StageBuilder = function() {
    ProcessConfiguration.Builder.StageBuilder.initializeBase(this);
}
ProcessConfiguration.Builder.StageBuilder.createBuilder = function(businessProcessType) {
    var $v_0;
    if (businessProcessType === 1) {
        $v_0 = new ProcessConfiguration.Builder.PageBuilder();
    }
    else {
        $v_0 = new ProcessConfiguration.Builder.StageBuilder();
    }
    return $v_0;
}
ProcessConfiguration.Builder.StageBuilder.prototype = {
    $2D_1: null,
    
    get_imageStripProxy: function() {
        return this.$2D_1;
    },
    
    set_imageStripProxy: function(value) {
        this.$2D_1 = value;
        return value;
    },
    
    buildProcessComponent: function(wrapper, idPrefix) {
        return null;
    },
    
    $7X_1: function($p0) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('body');
        $v_0.attribute('tabindex', '0');
        var $v_1 = this.buildStageDetailsColumn($p0);
        $v_0.append($v_1);
        var $v_2 = this.buildStageStepsColumn($p0);
        $v_0.append($v_2);
        var $v_3 = this.buildStageDeleteColumn($p0);
        $v_0.append($v_3);
        return $v_0;
    },
    
    buildStageStepsColumn: function(stageViewModel) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('steps');
        $v_0.addClass('column');
        var $v_1 = this.buildStageStepHeader();
        $v_0.append($v_1);
        var $v_2 = this.buildStepList(stageViewModel);
        $v_0.append($v_2);
        var $v_3 = this.$k_1.build(null, 'add-step', '/_imgs/processcontrol/white_plus_16.png', window.LOCID_PROCESS_ADDSTEP, window.LOCID_PROCESS_ADDSTEP);
        $v_0.append($v_3);
        return $v_0;
    },
    
    buildStageStepHeader: function() {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('step-header');
        var $v_1 = this.$8_1.fromHtml('<span></span>');
        $v_1.addClass('pc_step_name_value_container');
        $v_0.append($v_1);
        var $v_2 = this.buildLabelElement(window.LOCID_PROCESS_STAGE_STEPNAME);
        $v_1.append($v_2);
        var $v_3 = this.$8_1.fromHtml('<span></span>');
        $v_3.addClass('pc_step_name_value_container');
        $v_0.append($v_3);
        var $v_4 = this.buildLabelElement(window.LOCID_PROCESS_STAGE_STEPVALNAME);
        $v_3.append($v_4);
        var $v_5 = this.$8_1.fromHtml('<span></span>');
        $v_5.addClass('pc_step_required_container');
        $v_0.append($v_5);
        var $v_6 = this.buildLabelElement(window.LOCID_PROCESS_STAGE_STEPREQNAME);
        $v_5.append($v_6);
        return $v_0;
    },
    
    buildStepList: function(stageViewModel) {
        var $v_0 = this.$8_1.fromHtml('<ul></ul>');
        var $v_1 = stageViewModel.get_stageModel().get_steps().first().get_stepStep();
        var $v_2 = this.$1C_1.buildProcessComponent($v_1, $v_1.get_Id());
        $v_0.append($v_2);
        return $v_0;
    },
    
    buildStageDeleteColumn: function(stageViewModel) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('delete');
        $v_0.addClass('column');
        var $v_1 = this.$7a_1(stageViewModel);
        $v_0.append($v_1);
        return $v_0;
    },
    
    buildStageDetailsColumn: function(stageViewModel) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('details');
        $v_0.addClass('column');
        var $v_1 = this.$7c_1(stageViewModel);
        $v_0.append($v_1);
        var $v_2 = this.$7d_1(stageViewModel);
        $v_0.append($v_2);
        var $v_3 = this.$7e_1(stageViewModel);
        $v_0.append($v_3);
        var $v_4 = this.$7Y_1(stageViewModel);
        $v_0.append($v_4);
        return $v_0;
    },
    
    $7Y_1: function($p0) {
        var $v_0 = String.format('{0}_StageCategory', $p0.get_stageId());
        var $v_1 = $p0.get_stageCategory() || '';
        var $v_2 = this.buildInlineEditControl($v_1, window.LOCID_PROCESS_STAGE_CATEGORYNAME, 'stage-category', $v_0, false);
        return $v_2;
    },
    
    $7d_1: function($p0) {
        var $v_0 = $p0.get_entityLogicalName();
        var $v_1 = String.format('{0}_StageParentEntity', $p0.get_stageId());
        var $v_2 = this.buildInlineEditControl($v_0, window.LOCID_PROCESS_STAGE_ENTITYNAME, 'stage-parent-entity', $v_1, true);
        return $v_2;
    },
    
    $7e_1: function($p0) {
        var $v_0 = this.$6l_1(window.LOCID_PROCESS_RELATION_TITLE, false);
        var $v_1 = String.format('{0}_Relationship', $p0.get_stageId());
        var $v_2 = this.$8_1.fromHtml('<div></div>');
        $v_2.attribute('id', $v_1);
        $v_2.addClass('stage-relationship');
        var $v_3 = this.$8_1.fromHtml('<a></a>');
        $v_3.addClass('stage-relationship-link');
        $v_3.attribute('tabindex', '0');
        $v_3.attribute('title', window.LOCID_PROCESS_RELATION_TOOLTIP);
        $v_3.attribute('href', '#');
        $v_3.set_text(window.LOCID_PROCESS_RELATION_SELECT);
        $v_2.append($v_3);
        $v_0.append($v_2);
        return $v_0;
    },
    
    $7a_1: function($p0) {
        var $v_0 = this.$7Z_1('', 'delete-stage');
        return $v_0;
    },
    
    $7c_1: function($p0) {
        var $v_0 = $p0.get_stageName();
        var $v_1 = String.format('{0}_StageName', $p0.get_stageId());
        var $v_2 = this.buildInlineEditControl($v_0, window.LOCID_PROCESS_STAGENAME, 'stage-name', $v_1, true);
        return $v_2;
    },
    
    $7Z_1: function($p0, $p1) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        var $v_1 = window.LOCID_PROCESS_DELETESTAGE;
        $v_0.addClass('row');
        var $v_2 = this.$k_1.build(null, 'delete-stage', window.CDNURL + '/_imgs/processcontrol/12_inactive_config_delete.png', $v_1, $v_1);
        $v_0.append($v_2);
        return $v_0;
    },
    
    buildInlineEditControl: function(valueText, labelText, className, controlId, isRequired) {
        var $v_0 = this.$6l_1(labelText, isRequired);
        var $v_1 = this.$17_1.build(className, controlId, valueText);
        $v_0.append($v_1);
        return $v_0;
    },
    
    $6l_1: function($p0, $p1) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('row');
        var $v_1 = this.buildLabelElement($p0);
        $v_0.append($v_1);
        if ($p1) {
            var $v_2 = this.$n_1.build('/_imgs/frm_required.gif', $p0, window.LOCID_PROCESS_STAGE_STEPREQNAME);
            $v_2.addClass('ms-crm-Inline-RequiredLevel');
            $v_0.append($v_2);
        }
        return $v_0;
    },
    
    buildLabelElement: function(labelText) {
        var $v_0 = this.$8_1.fromHtml('<label></label>');
        $v_0.set_text(labelText || '');
        return $v_0;
    },
    
    $7b_1: function() {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('footer');
        var $v_1 = this.getInsertStageTextKey();
        var $v_2 = this.$k_1.build($v_1, 'add-stage', '/_imgs/processcontrol/grey_plus_16.png', $v_1, $v_1);
        $v_0.append($v_2);
        $v_1 = window.LOCID_PROCESS_ADDBRANCHTEXTKEY;
        var $v_3 = this.$k_1.build($v_1, 'add-branch', '/_imgs/processcontrol/add_branch_16.png', $v_1, $v_1);
        $v_0.append($v_3);
        return $v_0;
    },
    
    getInsertStageTextKey: function() {
        return window.LOCID_PROCESS_INSERTSTAGETEXTKEY;
    },
    
    createEmptyStageData: function(workflowStep) {
        return ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStageData(workflowStep);
    },
    
    buildStageElement: function(stageViewModel) {
        var $v_0 = this.$8_1.fromHtml('<div></div>');
        $v_0.addClass('stage');
        $v_0.attribute('id', stageViewModel.get_stageId());
        var $v_1 = this.$7X_1(stageViewModel);
        $v_0.append($v_1);
        var $v_2 = this.$7b_1();
        $v_0.append($v_2);
        return $v_0;
    },
    
    $8_1: null,
    
    get_jQueryProxy: function() {
        return this.$8_1;
    },
    
    set_jQueryProxy: function(value) {
        this.$8_1 = value;
        return value;
    },
    
    $1C_1: null,
    
    get_stepBuilder: function() {
        return this.$1C_1;
    },
    
    set_stepBuilder: function(value) {
        this.$1C_1 = value;
        return value;
    },
    
    $k_1: null,
    
    get_buttonBuilder: function() {
        return this.$k_1;
    },
    
    set_buttonBuilder: function(value) {
        this.$k_1 = value;
        return value;
    },
    
    $17_1: null,
    
    get_inlineEditControlBuilder: function() {
        return this.$17_1;
    },
    
    set_inlineEditControlBuilder: function(value) {
        this.$17_1 = value;
        return value;
    },
    
    $n_1: null,
    
    get_imageBuilder: function() {
        return this.$n_1;
    },
    
    set_imageBuilder: function(value) {
        this.$n_1 = value;
        return value;
    }
}


ProcessConfiguration.Builder.StepBuilder = function() {
    ProcessConfiguration.Builder.StepBuilder.initializeBase(this);
}
ProcessConfiguration.Builder.StepBuilder.createStepBuilder = function(businessProcessType) {
    return (businessProcessType === 1) ? new ProcessConfiguration.Builder.PageStepBuilder() : new ProcessConfiguration.Builder.StepBuilder();
}
ProcessConfiguration.Builder.StepBuilder.prototype = {
    
    buildProcessComponent: function(wrapper, idPrefix) {
        var $v_0 = wrapper;
        var $v_1 = this.buildNewStep($v_0, idPrefix);
        return $v_1;
    },
    
    createEmptyStepData: function(workflowStep) {
        var $v_0 = ProcessControl.Configuration.ProcessConfigurationUtility.createEmptyStepData(workflowStep);
        return $v_0;
    },
    
    $k_1: null,
    
    get_buttonBuilder: function() {
        return this.$k_1;
    },
    
    set_buttonBuilder: function(value) {
        this.$k_1 = value;
        return value;
    },
    
    $0_1: null,
    
    get_jQueryProxy: function() {
        return this.$0_1;
    },
    
    set_jQueryProxy: function(value) {
        this.$0_1 = value;
        return value;
    },
    
    $17_1: null,
    
    get_inlineEditControlBuilder: function() {
        return this.$17_1;
    },
    
    set_inlineEditControlBuilder: function(value) {
        this.$17_1 = value;
        return value;
    },
    
    $n_1: null,
    
    get_imageBuilder: function() {
        return this.$n_1;
    },
    
    set_imageBuilder: function(value) {
        this.$n_1 = value;
        return value;
    },
    
    buildNewStep: function(wrapper, idPrefix) {
        var $v_0 = String.format('{0}_{1}_sp', idPrefix, this.sanitizeId(wrapper.get_Id()));
        var $v_1 = this.$0_1.fromHtml('<li></li>');
        $v_1.addClass('pc_step');
        if (ProcessControl.Configuration.Initializer.get_isProcessUnificationDebugMode()) {
            $v_1.addClass('pc_step_debug');
        }
        $v_1.attribute('id', CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        $v_1.attribute('tabindex', '-1');
        var $v_2 = this.renderStepMainArea(wrapper, $v_0);
        $v_1.append($v_2);
        var $v_3 = this.renderRequiredCheckbox($v_0);
        $v_1.append($v_3);
        var $v_4 = this.renderDeleteIcon();
        $v_1.append($v_4);
        return $v_1;
    },
    
    renderStepMainArea: function(wrapper, stepId) {
        var $v_0 = this.$0_1.fromHtml('<span></span>');
        $v_0.addClass('pc_step_namecontrol_container');
        var $v_1 = this.renderStepName(wrapper, stepId);
        $v_0.append($v_1);
        var $v_2 = this.renderStepOptions(stepId, '{0}_f');
        $v_0.append($v_2);
        return $v_0;
    },
    
    renderStepName: function(wrapper, stepId) {
        var $v_0 = this.$0_1.fromHtml('<span></span>');
        var $v_1 = String.format('pc_en_{0}_body', 'step');
        $v_0.addClass($v_1);
        if (ProcessControl.Configuration.Initializer.get_isProcessUnificationDebugMode()) {
            $v_0.addClass('pc_en_step_body_debug');
        }
        var $v_2 = String.format('{0}_n', stepId);
        var $v_3 = ProcessControl.Configuration.ProcessConfigurationUtility.getStepLabelForCurrentUser(wrapper.get_stepLabels(), wrapper.get_stepStepId()).get_description();
        var $v_4 = this.$17_1.build(null, $v_2, $v_3);
        $v_0.append($v_4);
        return $v_0;
    },
    
    renderStepOptions: function(stepId, stepElementIdFormat) {
        var $v_0 = this.$0_1.fromHtml('<span></span>');
        var $v_1 = String.format('pc_en_{0}_body', 'field');
        $v_0.addClass($v_1);
        var $v_2 = String.format(stepElementIdFormat, stepId);
        var $v_3 = (stepElementIdFormat === '{0}_s') ? window.LOCID_PROCESS_PAGE_SOURCENAME : window.LOCID_PROCESS_PAGE_FIELDNAME;
        var $v_4 = this.$17_1.build(null, $v_2, $v_3);
        $v_0.append($v_4);
        return $v_0;
    },
    
    renderDeleteIcon: function() {
        var $v_0 = window.LOCID_PROCESS_DELETESTEP;
        var $v_1 = this.$k_1.build(null, 'delete-step', window.CDNURL + '/_imgs/processcontrol/12_inactive_config_delete.png', $v_0, $v_0);
        return $v_1;
    },
    
    renderRequiredCheckbox: function(stepId) {
        var $v_0 = this.$0_1.fromHtml('<span></span>');
        $v_0.addClass('pc_step_req');
        var $v_1 = this.$0_1.fromHtml('<div></div>');
        var $v_2 = String.format('{0} {1} {2}', 'pc_step_req', 'prc_step_rc', Sys.Browser.name);
        $v_1.addClass($v_2);
        $v_0.append($v_1);
        var $v_3 = '/_imgs/processcontrol/12_checkbox_off.png';
        var $v_4 = window.LOCID_PROCESS_PROCESSREQUIRED;
        var $v_5 = this.$n_1.build(window.CDNURL + $v_3, $v_4, $v_4);
        var $v_6 = CrmEncodeDecode.CrmHtmlAttributeEncode(String.format('{0}_req', stepId));
        $v_5.attribute('id', $v_6);
        $v_5.attribute('tabindex', '0');
        $v_1.append($v_5);
        return $v_0;
    }
}


Type.registerNamespace('ProcessConfiguration.Events');

ProcessConfiguration.Events.IEventManager = function() {}
ProcessConfiguration.Events.IEventManager.registerInterface('ProcessConfiguration.Events.IEventManager');


ProcessConfiguration.Events.EventManager = function() {
    this.$3y_0 = new Sys.EventHandlerList();
}
ProcessConfiguration.Events.EventManager.prototype = {
    
    addHandler: function($p0, $p1) {
        this.$3y_0.addHandler($p0, $p1);
    },
    
    removeHandler: function($p0, $p1) {
        this.$3y_0.removeHandler($p0, $p1);
    },
    
    fireEvent: function($p0, $p1, $p2) {
        var $v_0 = this.$3y_0.getHandler($p0);
        if ($v_0) {
            $v_0($p1, $p2);
        }
    }
}


Type.registerNamespace('ProcessConfiguration.Models');

ProcessConfiguration.Models.IRelationshipModel = function() {}
ProcessConfiguration.Models.IRelationshipModel.registerInterface('ProcessConfiguration.Models.IRelationshipModel');


ProcessConfiguration.Models.ISystemControlAttributeMetadataModel = function() {}
ProcessConfiguration.Models.ISystemControlAttributeMetadataModel.registerInterface('ProcessConfiguration.Models.ISystemControlAttributeMetadataModel');


ProcessConfiguration.Models.ISystemControlMetadataModel = function() {}
ProcessConfiguration.Models.ISystemControlMetadataModel.registerInterface('ProcessConfiguration.Models.ISystemControlMetadataModel');


ProcessConfiguration.Models.IMetadataModelFactory = function() {}
ProcessConfiguration.Models.IMetadataModelFactory.registerInterface('ProcessConfiguration.Models.IMetadataModelFactory');


ProcessConfiguration.Models.IAttributeMetadataModel = function() {}
ProcessConfiguration.Models.IAttributeMetadataModel.registerInterface('ProcessConfiguration.Models.IAttributeMetadataModel');


ProcessConfiguration.Models.IEntityMetadataModel = function() {}
ProcessConfiguration.Models.IEntityMetadataModel.registerInterface('ProcessConfiguration.Models.IEntityMetadataModel');


ProcessConfiguration.Models.IdentifyAccountSystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.IdentifyAccountSystemControlMetadataModel.prototype = {
    
    get_logicalName: function() {
        return this.get_controlId();
    },
    
    get_displayText: function() {
        return window.LOCID_SYSSTEP_IDACCOUNT;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return 'parentaccountid';
    },
    
    get_classId: function() {
        return '270BD3DB-D9AF-4782-9025-509E298DEC0A';
    },
    
    get_parameters: function() {
        return '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{f9e54d49-0c76-4cbd-979b-5fe94b496be0}</InlineViewIds></parameters>';
    }
}


ProcessConfiguration.Models.IdentifyCaseSystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.IdentifyCaseSystemControlMetadataModel.prototype = {
    
    get_logicalName: function() {
        return 'existingcase';
    },
    
    get_displayText: function() {
        return window.LOCID_SYSSTEP_IDISSUE;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return 'relatedcases';
    },
    
    get_classId: function() {
        return '270BD3DB-D9AF-4782-9025-509E298DEC0A';
    },
    
    get_parameters: function() {
        return '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Incident</EntityLogicalName><InlineViewIds>{06D2061B-703E-465B-B8AD-FD69C6157127}</InlineViewIds></parameters>';
    }
}


ProcessConfiguration.Models.IncidentIdentifyContactSystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.IncidentIdentifyContactSystemControlMetadataModel.prototype = {
    
    get_logicalName: function() {
        return 'primarycontactid';
    },
    
    get_displayText: function() {
        return window.LOCID_SYSSTEP_IDCONTACT;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return 'contact';
    },
    
    get_classId: function() {
        return '270BD3DB-D9AF-4782-9025-509E298DEC0A';
    },
    
    get_parameters: function() {
        return '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Contact</EntityLogicalName><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74228},{f9e54d49-0c76-4cbd-979b-5fe94b496beb}</InlineViewIds></parameters>';
    }
}


ProcessConfiguration.Models.LeadIdentifyContactSystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.LeadIdentifyContactSystemControlMetadataModel.prototype = {
    
    get_logicalName: function() {
        return 'parentcontactid';
    },
    
    get_displayText: function() {
        return window.LOCID_SYSSTEP_IDCONTACT;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return 'parentcontactid';
    },
    
    get_classId: function() {
        return '270BD3DB-D9AF-4782-9025-509E298DEC0A';
    },
    
    get_parameters: function() {
        return '<parameters><IsDeDupLookup>true</IsDeDupLookup><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74220}</InlineViewIds></parameters>';
    }
}


ProcessConfiguration.Models.IdentifyCustomerSystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.IdentifyCustomerSystemControlMetadataModel.prototype = {
    
    get_logicalName: function() {
        return 'customerid';
    },
    
    get_displayText: function() {
        return window.LOCID_SYSSTEP_IDCUSTOMER;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return 'customer';
    },
    
    get_classId: function() {
        return '270BD3DB-D9AF-4782-9025-509E298DEC0A';
    },
    
    get_parameters: function() {
        return '<parameters><IsInlineNewEnabled>true</IsInlineNewEnabled><EntityLogicalName>Contact</EntityLogicalName><InlineViewIds>{c14e0638-4996-4720-97cd-c58f0df74228},{f9e54d49-0c76-4cbd-979b-5fe94b496beb}</InlineViewIds></parameters>';
    }
}


ProcessConfiguration.Models.AvailableSystemControlsRefreshedEventArgs = function() {
    ProcessConfiguration.Models.AvailableSystemControlsRefreshedEventArgs.initializeBase(this);
}
ProcessConfiguration.Models.AvailableSystemControlsRefreshedEventArgs.prototype = {
    $4C_1: null,
    $4A_1: null,
    
    get_oldLogicalname: function() {
        return this.$4C_1;
    },
    
    set_oldLogicalname: function(value) {
        this.$4C_1 = value;
        return value;
    },
    
    get_newLogicalName: function() {
        return this.$4A_1;
    },
    
    set_newLogicalName: function(value) {
        this.$4A_1 = value;
        return value;
    }
}


ProcessConfiguration.Models.RelationshipModel = function() {
}
ProcessConfiguration.Models.RelationshipModel.copy = function(model) {
    var $v_0 = new ProcessConfiguration.Models.RelationshipModel();
    var $v_1 = model;
    $v_0._attributeDisplayName = $v_1._attributeDisplayName;
    $v_0._attributeLogicalName = $v_1._attributeLogicalName;
    $v_0._relationshipName = $v_1._relationshipName;
    $v_0._sourceStageEntityDisplayName = $v_1._sourceStageEntityDisplayName;
    $v_0._sourceStageId = $v_1._sourceStageId;
    $v_0._targetStageEntityLogicalName = $v_1._targetStageEntityLogicalName;
    $v_0._targetStageId = $v_1._targetStageId;
    return $v_0;
}
ProcessConfiguration.Models.RelationshipModel.prototype = {
    _attributeDisplayName: null,
    
    get_attributeDisplayName: function() {
        return this._attributeDisplayName;
    },
    
    set_attributeDisplayName: function(value) {
        this._attributeDisplayName = value;
        return value;
    },
    
    _attributeLogicalName: null,
    
    get_attributeLogicalName: function() {
        return this._attributeLogicalName;
    },
    
    set_attributeLogicalName: function(value) {
        this._attributeLogicalName = value;
        return value;
    },
    
    _relationshipName: null,
    
    get_relationshipName: function() {
        return this._relationshipName;
    },
    
    set_relationshipName: function(value) {
        this._relationshipName = value;
        return value;
    },
    
    _sourceStageEntityDisplayName: null,
    
    get_sourceStageEntityDisplayName: function() {
        return this._sourceStageEntityDisplayName;
    },
    
    set_sourceStageEntityDisplayName: function(value) {
        this._sourceStageEntityDisplayName = value;
        return value;
    },
    
    _targetStageEntityLogicalName: null,
    
    get_targetStageEntityLogicalName: function() {
        return this._targetStageEntityLogicalName;
    },
    
    set_targetStageEntityLogicalName: function(value) {
        this._targetStageEntityLogicalName = value;
        return value;
    },
    
    _sourceStageId: null,
    
    get_sourceStageId: function() {
        return this._sourceStageId;
    },
    
    set_sourceStageId: function(value) {
        this._sourceStageId = value;
        return value;
    },
    
    _targetStageId: null,
    
    get_targetStageId: function() {
        return this._targetStageId;
    },
    
    set_targetStageId: function(value) {
        this._targetStageId = value;
        return value;
    },
    
    toRelationshipStep: function(rootStep) {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.RelationshipStep(rootStep);
        $v_0.setJQueryFriendlyNameAndId(rootStep.get_currentStepId());
        $v_0.set_attributeName(this._attributeLogicalName);
        $v_0.set_relationshipName(this._relationshipName);
        $v_0.set_sourceStageId(this._sourceStageId);
        $v_0.set_targetStageId(this._targetStageId);
        return $v_0;
    },
    
    isValid: function(allAvailableRelationships) {
        if (!allAvailableRelationships) {
            return false;
        }
        var $v_0 = false;
        if (((this._sourceStageId) in allAvailableRelationships)) {
            var $v_1 = allAvailableRelationships[this._sourceStageId];
            for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
                var $v_3 = $v_1.get_item($v_2);
                if ($v_3.get_targetStageId() === this._targetStageId && $v_3.get_attributeLogicalName() === this._attributeLogicalName && $v_3.get_relationshipName() === this._relationshipName && $v_3.get_targetStageEntityLogicalName() === this._targetStageEntityLogicalName) {
                    $v_0 = true;
                    this._attributeDisplayName = $v_3.get_attributeDisplayName();
                    this._sourceStageEntityDisplayName = $v_3.get_sourceStageEntityDisplayName();
                    break;
                }
            }
        }
        return $v_0;
    }
}


ProcessConfiguration.Models.MetadataModelFactory = function() {
}
ProcessConfiguration.Models.MetadataModelFactory.prototype = {
    
    createEntityMetadataModel: function(entityMetadata, entityLogicalName) {
        var $v_0 = new ProcessConfiguration.Models.EntityMetadataModel();
        $v_0.set_entityMetadata(entityMetadata);
        $v_0.set_entityLogicalName(entityLogicalName);
        $v_0.set_metadataModelFactory(this);
        $v_0.set_systemControlMetadataModel(this.$W_0);
        return $v_0;
    },
    
    createAttributeMetadataModel: function(attributeMetadata) {
        var $v_0 = new ProcessConfiguration.Models.AttributeMetadataModel();
        $v_0.set_attributeMetadata(attributeMetadata);
        return $v_0;
    },
    
    createRelationshipModel: function(relationshipMetadata) {
        var $v_0 = new ProcessConfiguration.Models.RelationshipModel();
        $v_0.set_attributeDisplayName(relationshipMetadata.AttributeLabel);
        $v_0.set_attributeLogicalName(relationshipMetadata.AttributeName);
        $v_0.set_relationshipName(relationshipMetadata.RelationshipName);
        $v_0.set_sourceStageEntityDisplayName(relationshipMetadata.ReferencedEntityLabel);
        $v_0.set_targetStageEntityLogicalName(relationshipMetadata.ReferencingEntityLogicalName);
        return $v_0;
    },
    
    createSystemControlMetadata: function(systemStep) {
        var $v_0 = null;
        switch (systemStep) {
            case 1:
                $v_0 = new ProcessConfiguration.Models.IdentifyAccountSystemControlMetadataModel();
                break;
            case 3:
                $v_0 = new ProcessConfiguration.Models.IdentifyCaseSystemControlMetadataModel();
                break;
            case 0:
                $v_0 = new ProcessConfiguration.Models.LeadIdentifyContactSystemControlMetadataModel();
                break;
            case 2:
                $v_0 = new ProcessConfiguration.Models.IdentifyCustomerSystemControlMetadataModel();
                break;
            case 5:
                $v_0 = new ProcessConfiguration.Models.ResolveSystemControlMetadataModel();
                break;
            case 4:
                $v_0 = new ProcessConfiguration.Models.SolutionSystemControlMetadataModel();
                break;
            case 6:
                $v_0 = new ProcessConfiguration.Models.IncidentIdentifyContactSystemControlMetadataModel();
                break;
        }
        return $v_0;
    },
    
    $W_0: null,
    
    get_systemControlMetadataModel: function() {
        return this.$W_0;
    },
    
    set_systemControlMetadataModel: function(value) {
        this.$W_0 = value;
        return value;
    }
}


ProcessConfiguration.Models.EntityMetadataModel = function() {
}
ProcessConfiguration.Models.EntityMetadataModel.prototype = {
    
    $91_0: function() {
        this.$28_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.IAttributeMetadataModel))();
        var $v_0 = this.$E_0.Fields;
        var $v_1 = this.$W_0.retrieveSystemControlsForEntity(this.$K_0);
        for (var $v_2 = 0; $v_2 < $v_1.get_count(); $v_2++) {
            this.$28_0.add($v_1.get_item($v_2));
        }
        for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
            var $v_4 = $v_0[$v_3];
            var $v_5 = this.$Y_0.createAttributeMetadataModel($v_4);
            this.$28_0.add($v_5);
        }
    },
    
    $9J_0: function() {
        this.$1k_0 = new (Sales.Common.Framework.List$1.$$(ProcessControl.Configuration.SourceData))();
        var $v_0 = Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().EntityMetadata;
        var $v_1 = ProcessControl.Configuration.SourceData.create($v_0.EntityLogicalName, $v_0.DisplayName, 0);
        this.$1k_0.add($v_1);
        var $v_2 = ProcessControl.Configuration.SourceData.create(null, window.LOCID_PROCESS_LABEL, 2);
        this.$1k_0.add($v_2);
        var $v_3 = ProcessControl.Configuration.SourceData.create(null, window.LOCID_PROCESS_SECTIONLABEL, 1);
        this.$1k_0.add($v_3);
        var $v_4 = Mscrm.BusinessRules.Views.ViewHelper.get_editorDataWrapper().RelatedLinkedEntities;
        if ($v_4) {
            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                var $v_6 = $v_4[$v_5];
                var $v_7 = String.format('{0} ({1})', $v_6.RelationshipAttribute.Label.Description, $v_6.RelationshipEntity.DisplayName);
                var $v_8 = ProcessControl.Configuration.SourceData.create($v_6.RelationshipEntity.EntityLogicalName, $v_7, 0);
                $v_8.$1F_0 = $v_6.RelationshipName;
                $v_8.$2E_0 = $v_6.RelationshipAttribute.LogicalName;
                this.$1k_0.add($v_8);
            }
        }
    },
    
    $28_0: null,
    
    get_attributes: function() {
        if (this.$28_0) {
            return this.$28_0;
        }
        this.$91_0();
        return this.$28_0;
    },
    
    $1k_0: null,
    
    get_sources: function() {
        if (this.$1k_0) {
            return this.$1k_0;
        }
        this.$9J_0();
        return this.$1k_0;
    },
    
    $E_0: null,
    
    get_entityMetadata: function() {
        return this.$E_0;
    },
    
    set_entityMetadata: function(value) {
        this.$E_0 = value;
        return value;
    },
    
    $Y_0: null,
    
    get_metadataModelFactory: function() {
        return this.$Y_0;
    },
    
    set_metadataModelFactory: function(value) {
        this.$Y_0 = value;
        return value;
    },
    
    $K_0: null,
    
    get_entityLogicalName: function() {
        return this.$K_0;
    },
    
    set_entityLogicalName: function(value) {
        this.$K_0 = value;
        return value;
    },
    
    $W_0: null,
    
    get_systemControlMetadataModel: function() {
        return this.$W_0;
    },
    
    set_systemControlMetadataModel: function(value) {
        this.$W_0 = value;
        return value;
    },
    
    refreshAvailableSystemControls: function(oldAttributeLogicalName, newAttributeLogicalName) {
        this.$W_0.refreshAvailableSystemControls(oldAttributeLogicalName, newAttributeLogicalName);
    },
    
    retrieveAttributesExcludingUsedSystemSteps: function(attributeLogicalName) {
        var $v_0 = this.get_attributes();
        var $v_1 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.IAttributeMetadataModel))();
        var $v_2 = this.$W_0.retrieveSystemControlsForEntity(this.$K_0).get_count() > 0;
        for (var $v_3 = 0; $v_3 < $v_0.get_count(); $v_3++) {
            var $v_4 = $v_0.get_item($v_3);
            var $v_5 = ProcessConfiguration.Models.ISystemControlAttributeMetadataModel.isInstanceOfType($v_4);
            if ($v_5) {
                var $v_7 = $v_4;
                var $v_8 = this.$W_0.checkAvailability($v_7);
                if (!$v_8 && $v_7.get_logicalName() !== attributeLogicalName) {
                    continue;
                }
            }
            var $v_6 = !!this.$W_0.retrieveMetadataByLogicalName($v_4.get_logicalName()) && !$v_5;
            if ($v_2 && $v_6) {
                continue;
            }
            $v_1.add($v_4);
        }
        return $v_1;
    }
}


ProcessConfiguration.Models.AttributeMetadataModel = function() {
}
ProcessConfiguration.Models.AttributeMetadataModel.prototype = {
    $57_0: null,
    
    get_logicalName: function() {
        return this.$57_0 || (this.$57_0 = this.$I_0.LogicalName);
    },
    
    get_displayText: function() {
        if (!this.$I_0.Label) {
            return '';
        }
        return this.$I_0.Label.Description;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    }
}


ProcessConfiguration.Models.ResolveSystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.ResolveSystemControlMetadataModel.prototype = {
    
    get_logicalName: function() {
        return this.get_controlId();
    },
    
    get_displayText: function() {
        return window.LOCID_SYSSTEP_RESOLVE;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return 'IncidentResolution_LinkControl';
    },
    
    get_classId: function() {
        return 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D';
    },
    
    get_parameters: function() {
        return '<parameters><LinkControlDefinitionId>{26cf241a-886d-4870-a22a-356cad9a75dd}</LinkControlDefinitionId></parameters>';
    }
}


ProcessConfiguration.Models.SolutionSystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.SolutionSystemControlMetadataModel.prototype = {
    
    get_logicalName: function() {
        return this.get_controlId();
    },
    
    get_displayText: function() {
        return window.LOCID_SYSSTEP_SOLUTIONS;
    },
    
    $I_0: null,
    
    get_attributeMetadata: function() {
        return this.$I_0;
    },
    
    set_attributeMetadata: function(value) {
        this.$I_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return 'CaseResearch_LinkControl';
    },
    
    get_classId: function() {
        return 'DFDF1CDE-837B-4AC9-98CF-AC74361FD89D';
    },
    
    get_parameters: function() {
        return '<parameters><LinkControlDefinitionId>{0F337699-D595-48D9-B733-6479E5F5EB07}</LinkControlDefinitionId></parameters>';
    }
}


ProcessConfiguration.Models.SystemControlMetadataModel = function() {
}
ProcessConfiguration.Models.SystemControlMetadataModel.prototype = {
    $53_0: null,
    
    get_$5V_0: function() {
        return this.$53_0 || (this.$53_0 = new ProcessConfiguration.Events.EventManager());
    },
    
    $2I_0: null,
    
    get_$6y_0: function() {
        if (this.$2I_0) {
            return this.$2I_0;
        }
        this.$2I_0 = {};
        this.$2I_0['lead'] = this.get_$2z_0();
        this.$2I_0['incident'] = this.get_$1p_0();
        return this.$2I_0;
    },
    
    $2J_0: null,
    
    get_$6z_0: function() {
        if (this.$2J_0) {
            return this.$2J_0;
        }
        this.$2J_0 = {};
        for (var $v_0 = 0; $v_0 < this.get_$2z_0().get_count(); $v_0++) {
            var $v_1 = this.get_$2z_0().get_item($v_0);
            this.$2J_0[$v_1.get_logicalName()] = $v_1;
        }
        for (var $v_2 = 0; $v_2 < this.get_$1p_0().get_count(); $v_2++) {
            var $v_3 = this.get_$1p_0().get_item($v_2);
            this.$2J_0[$v_3.get_logicalName()] = $v_3;
        }
        return this.$2J_0;
    },
    
    $2Z_0: null,
    
    get_$2z_0: function() {
        if (this.$2Z_0) {
            return this.$2Z_0;
        }
        this.$2Z_0 = this.$7T_0();
        return this.$2Z_0;
    },
    
    $2X_0: null,
    
    get_$1p_0: function() {
        if (this.$2X_0) {
            return this.$2X_0;
        }
        this.$2X_0 = this.$7R_0();
        return this.$2X_0;
    },
    
    $5N_0: null,
    
    get_$4t_0: function() {
        return this.$5N_0 || (this.$5N_0 = {});
    },
    
    $7R_0: function() {
        this.$2X_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.ISystemControlAttributeMetadataModel))();
        var $v_0 = this.$Y_0.createSystemControlMetadata(3);
        this.get_$1p_0().add($v_0);
        $v_0 = this.$Y_0.createSystemControlMetadata(2);
        this.get_$1p_0().add($v_0);
        $v_0 = this.$Y_0.createSystemControlMetadata(6);
        this.get_$1p_0().add($v_0);
        $v_0 = this.$Y_0.createSystemControlMetadata(5);
        this.get_$1p_0().add($v_0);
        $v_0 = this.$Y_0.createSystemControlMetadata(4);
        this.get_$1p_0().add($v_0);
        return this.get_$1p_0();
    },
    
    $7T_0: function() {
        this.$2Z_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.ISystemControlAttributeMetadataModel))();
        var $v_0 = this.$Y_0.createSystemControlMetadata(1);
        this.get_$2z_0().add($v_0);
        $v_0 = this.$Y_0.createSystemControlMetadata(0);
        this.get_$2z_0().add($v_0);
        return this.get_$2z_0();
    },
    
    add_availableSystemControlsRefreshed: function(value) {
        this.get_$5V_0().addHandler('AvailableSystemControlsRefreshed', value);
    },
    
    remove_availableSystemControlsRefreshed: function(value) {
        this.get_$5V_0().removeHandler('AvailableSystemControlsRefreshed', value);
    },
    
    retrieveSystemControlsForEntity: function(entityLogicalName) {
        var $v_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.ISystemControlAttributeMetadataModel))();
        if (!((entityLogicalName) in this.get_$6y_0())) {
            return $v_0;
        }
        $v_0 = this.get_$6y_0()[entityLogicalName];
        return $v_0;
    },
    
    $Y_0: null,
    
    get_metadataModelFactory: function() {
        return this.$Y_0;
    },
    
    set_metadataModelFactory: function(value) {
        this.$Y_0 = value;
        return value;
    },
    
    retrieveMetadataByLogicalName: function(logicalName) {
        if (!((logicalName) in this.get_$6z_0())) {
            return null;
        }
        var $v_0 = this.get_$6z_0()[logicalName];
        return $v_0;
    },
    
    refreshAvailableSystemControls: function(oldAttributeLogicalName, newAttributeLogicalName) {
        if (oldAttributeLogicalName === newAttributeLogicalName) {
            return;
        }
        var $v_0 = !_String.isNullOrWhiteSpace(oldAttributeLogicalName) && ((oldAttributeLogicalName) in this.get_$4t_0());
        if ($v_0) {
            delete this.get_$4t_0()[oldAttributeLogicalName];
        }
        if (!_String.isNullOrWhiteSpace(newAttributeLogicalName)) {
            this.get_$4t_0()[newAttributeLogicalName] = 1;
        }
        var $v_1 = new ProcessConfiguration.Models.AvailableSystemControlsRefreshedEventArgs();
        $v_1.$4C_1 = oldAttributeLogicalName;
        $v_1.$4A_1 = newAttributeLogicalName;
        this.get_$5V_0().fireEvent('AvailableSystemControlsRefreshed', this, $v_1);
    },
    
    checkAvailability: function(systemStepMetadata) {
        var $v_0 = ((systemStepMetadata.get_logicalName()) in this.get_$4t_0());
        return !$v_0;
    }
}


Type.registerNamespace('ProcessConfiguration.Services');

ProcessConfiguration.Services.IRelationshipFilteringService = function() {}
ProcessConfiguration.Services.IRelationshipFilteringService.registerInterface('ProcessConfiguration.Services.IRelationshipFilteringService');


ProcessConfiguration.Services.IMetadataService = function() {}
ProcessConfiguration.Services.IMetadataService.registerInterface('ProcessConfiguration.Services.IMetadataService');


ProcessConfiguration.Services.RelationshipFilteringService = function() {
}
ProcessConfiguration.Services.RelationshipFilteringService.prototype = {
    
    getAllAvailableRelationships: function(targetStageId) {
        var $v_0 = this.$2_0.getStageViewById(targetStageId);
        var $v_1 = {};
        var $v_2 = this.$AN_0($v_0);
        for (var $v_3 = 0; $v_3 < $v_2.get_count(); ++$v_3) {
            var $v_4 = this.$2_0.getStageViewById($v_2.get_item($v_3));
            $v_1[$v_2.get_item($v_3)] = this.$86_0(this.$1_0.get_entityRelationshipMetadata()[$v_4.get_viewModel().get_entityLogicalName()], $v_2.get_item($v_3), $v_0.get_viewModel().get_stageId(), $v_0.get_viewModel().get_entityLogicalName());
        }
        return $v_1;
    },
    
    getSelectedRelationships: function(targetStageId) {
        var $v_0 = this.$2_0.getStageViewById(targetStageId);
        return $v_0.get_viewModel().get_relationships();
    },
    
    get_metadataService: function() {
        return this.$1_0;
    },
    
    set_metadataService: function(value) {
        this.$1_0 = value;
        return value;
    },
    
    get_viewFactory: function() {
        return this.$2_0;
    },
    
    set_viewFactory: function(value) {
        this.$2_0 = value;
        return value;
    },
    
    $AN_0: function($p0) {
        var $v_0 = new (Sales.Common.Framework.List$1.$$(String))();
        var $v_1 = new (Sales.Common.Framework.List$1.$$(String))();
        if ($p0.get_previousNavigationInfo()) {
            if (ProcessConfiguration.View.IStageView.isInstanceOfType($p0.get_previousNavigationInfo())) {
                $v_1 = this.$6L_0($p0);
                var $v_2 = $p0.get_viewModel().get_entityLogicalName();
                if (!$v_1.contains($v_2)) {
                    var $v_3 = $p0.get_previousNavigationInfo();
                    if (!this.$6P_0($v_3)) {
                        $v_0.add($v_3.get_viewModel().get_stageId());
                    }
                    if ($v_3.get_conditionView() && $v_3.get_conditionView().get_children().get_count() > 0) {
                        for (var $v_4 = 0; $v_4 < $v_3.get_conditionView().get_children().get_count(); ++$v_4) {
                            var $v_5 = this.$6k_0($v_3.get_conditionView().get_children().get_item($v_4), $v_2);
                            $v_0.addRange($v_5.toArray());
                        }
                    }
                }
            }
            else if (ProcessConfiguration.View.IConditionBranchView.isInstanceOfType($p0.get_previousNavigationInfo())) {
                var $v_6 = $p0.get_previousNavigationInfo();
                var $v_7 = $v_6.get_viewModel().get_parentStageViewModel();
                $v_1 = this.$6L_0($p0);
                if ($v_7 && !$v_1.contains($p0.get_viewModel().get_entityLogicalName())) {
                    $v_0.add($v_7.get_stageId());
                }
            }
        }
        return $v_0;
    },
    
    $6k_0: function($p0, $p1) {
        var $v_0 = new (Sales.Common.Framework.List$1.$$(String))();
        var $v_1 = new (Sales.Common.Framework.List$1.$$(String))();
        var $v_2 = $p0.get_nextStageView();
        while ($v_2) {
            if ($v_2.get_conditionView() && $v_2.get_conditionView().get_children().get_count() > 0) {
                for (var $v_3 = 0; $v_3 < $v_2.get_conditionView().get_children().get_count(); ++$v_3) {
                    var $v_4 = this.$6k_0($v_2.get_conditionView().get_children().get_item($v_3), $p1);
                    $v_1.addRange($v_4.toArray());
                }
            }
            if ($v_2.get_nextStageView()) {
                $v_0.add($v_2.get_viewModel().get_entityLogicalName());
                $v_2 = $v_2.get_nextStageView();
            }
            else {
                if (!$v_0.contains($p1) && $v_2.get_viewModel().get_entityLogicalName() !== $p1 && !this.$6P_0($v_2)) {
                    $v_1.add($v_2.get_viewModel().get_stageId());
                }
                break;
            }
        }
        return $v_1;
    },
    
    $6L_0: function($p0) {
        var $v_0 = new (Sales.Common.Framework.List$1.$$(String))();
        var $v_1 = $p0.get_previousNavigationInfo();
        while ($v_1) {
            if (ProcessConfiguration.View.IStageView.isInstanceOfType($v_1)) {
                $v_0.add(($v_1).get_viewModel().get_entityLogicalName());
                $v_1 = $v_1.get_previousNavigationInfo();
            }
            else if (ProcessConfiguration.View.IConditionBranchView.isInstanceOfType($v_1)) {
                var $v_2 = $v_1;
                if ($v_2.get_parent()) {
                    $v_1 = $v_2.get_parent().get_parent();
                }
            }
            else {
                break;
            }
        }
        return $v_0;
    },
    
    $86_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.IRelationshipModel))();
        for (var $v_1 = 0; $v_1 < $p0.get_count(); ++$v_1) {
            if ($p0.get_item($v_1).get_targetStageEntityLogicalName() === $p3) {
                var $v_2 = this.$7j_0($p0.get_item($v_1));
                $v_2.set_sourceStageId($p1);
                $v_2.set_targetStageId($p2);
                $v_0.add($v_2);
            }
        }
        return $v_0;
    },
    
    $6P_0: function($p0) {
        return !!$p0.get_conditionView() && $p0.get_conditionView().get_hasElseConditionBranch();
    },
    
    $7j_0: function($p0) {
        var $v_0 = new ProcessConfiguration.Models.RelationshipModel();
        $v_0.set_attributeDisplayName($p0.get_attributeDisplayName());
        $v_0.set_attributeLogicalName($p0.get_attributeLogicalName());
        $v_0.set_relationshipName($p0.get_relationshipName());
        $v_0.set_sourceStageEntityDisplayName($p0.get_sourceStageEntityDisplayName());
        $v_0.set_targetStageEntityLogicalName($p0.get_targetStageEntityLogicalName());
        return $v_0;
    },
    
    $1_0: null,
    $2_0: null
}


ProcessConfiguration.Services.MetadataService = function() {
}
ProcessConfiguration.Services.MetadataService.prototype = {
    $E_0: null,
    
    get_entityMetadata: function() {
        return this.$E_0;
    },
    
    $2V_0: null,
    
    get_entityRelationshipMetadata: function() {
        return this.$2V_0;
    },
    
    $4P_0: null,
    
    get_stageCategoryMetadata: function() {
        return this.$4P_0;
    },
    
    $Y_0: null,
    
    get_metadataModelFactory: function() {
        return this.$Y_0;
    },
    
    set_metadataModelFactory: function(value) {
        this.$Y_0 = value;
        return value;
    },
    
    $5B_0: null,
    
    get_processEnabledEntityMetadata: function() {
        return this.$5B_0;
    },
    
    initialize: function(initializationContext) {
        if (!IsNull(initializationContext.get_entityMetadata())) {
            this.$E_0 = initializationContext.get_entityMetadata();
        }
        if (!IsNull(initializationContext.get_relationshipMetadata())) {
            this.$2V_0 = this.$7p_0(initializationContext.get_relationshipMetadata());
        }
        this.$4P_0 = initializationContext.get_stageCategoryMetadata();
        ProcessControl.Configuration.StageCategory.initialize(this.$4P_0);
        ProcessControl.Configuration.ProcessEnabledEntities.initialize(initializationContext.get_processEnabledEntityMetadata());
        this.$5B_0 = ProcessControl.Configuration.ProcessEnabledEntities.getEnumOptions();
    },
    
    getStageCategoryLabelByValue: function(value) {
        return ProcessControl.Configuration.StageCategory.getLabelByValue(value);
    },
    
    retrieveEntityMetadataSync: function(entityLogicalName) {
        var $v_0 = this.$E_0[entityLogicalName];
        var $v_1 = this.$Y_0.createEntityMetadataModel($v_0, entityLogicalName);
        return $v_1;
    },
    
    retrieveEntityMetadataAsync: function(entityLogicalName) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(ProcessControl.Configuration.ClientDataJsonWrapper, Object);
        if (Microsoft.Crm.Workflow.Utils.SharedUtility.dictionaryContainKey(String, Object, this.$E_0, entityLogicalName)) {
            $v_0.resolve();
        }
        else {
            var $$t_7 = this;
            ProcessControl.Configuration.BpfDataUtility.getEntityMetadata(entityLogicalName, function($p1_0, $p1_1) {
                var $v_1 = (!isNullOrEmptyString($p1_0.ReturnValue.toString())) ? JSON.parse($p1_0.ReturnValue.toString().substr(8)) : null;
                var $v_2 = $p1_1.GetParameter('entityName').Value;
                if (!IsNull($v_1)) {
                    var $v_3 = (!isNullOrEmptyString($v_1.EntityMetadata)) ? JSON.parse($v_1.EntityMetadata) : null;
                    if (!IsNull($v_3)) {
                        $$t_7.$E_0[$v_2] = $v_3[$v_2];
                    }
                }
                $v_0.resolve($v_1);
            });
        }
        return $v_0.promise();
    },
    
    retrieveEntityAndRelationshipMetadataAsync: function(entityLogicalName) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(ProcessControl.Configuration.ClientDataJsonWrapper, Object);
        if (this.$8t_0(entityLogicalName)) {
            $v_0.resolve();
        }
        else {
            var $$t_8 = this;
            ProcessControl.Configuration.BpfDataUtility.getEntityAndRelationshipMetadata(entityLogicalName, function($p1_0, $p1_1) {
                var $v_1 = (!isNullOrEmptyString($p1_0.ReturnValue.toString())) ? JSON.parse($p1_0.ReturnValue.toString().substr(8)) : null;
                var $v_2 = $p1_1.GetParameter('entityName').Value;
                if (!IsNull($v_1)) {
                    var $v_3 = (!isNullOrEmptyString($v_1.RelationshipMetadata)) ? JSON.parse($v_1.RelationshipMetadata) : null;
                    if (!IsNull($v_3)) {
                        $$t_8.$2V_0[$v_2] = $$t_8.$5y_0($v_3[$v_2]);
                    }
                    var $v_4 = (!isNullOrEmptyString($v_1.EntityMetadata)) ? JSON.parse($v_1.EntityMetadata) : null;
                    if (!IsNull($v_4)) {
                        $$t_8.$E_0[$v_2] = $v_4[$v_2];
                    }
                }
                $v_0.resolve($v_1);
            });
        }
        return $v_0.promise();
    },
    
    $8t_0: function($p0) {
        return Microsoft.Crm.Workflow.Utils.SharedUtility.dictionaryContainKey(String, Object, this.$E_0, $p0) && Microsoft.Crm.Workflow.Utils.SharedUtility.dictionaryContainKey(String, Object, this.$2V_0, $p0);
    },
    
    dispose: function() {
        Error.notImplemented('The method or operation is not implemented.');
    },
    
    $7p_0: function($p0) {
        var $v_0 = {};
        var $$dict_3 = $p0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_0[$v_1.key] = this.$5y_0($v_1.value);
        }
        return $v_0;
    },
    
    $5y_0: function($p0) {
        var $v_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.IRelationshipModel))();
        for (var $v_1 = 0; $v_1 < $p0.length; ++$v_1) {
            $v_0.add(this.$Y_0.createRelationshipModel($p0[$v_1]));
        }
        return $v_0;
    }
}


Type.registerNamespace('ProcessConfiguration.Utility');

ProcessConfiguration.Utility.IProcessViewVisitor = function() {}
ProcessConfiguration.Utility.IProcessViewVisitor.registerInterface('ProcessConfiguration.Utility.IProcessViewVisitor');


ProcessConfiguration.Utility.IRelationshipPickerDialogLauncher = function() {}
ProcessConfiguration.Utility.IRelationshipPickerDialogLauncher.registerInterface('ProcessConfiguration.Utility.IRelationshipPickerDialogLauncher');


ProcessConfiguration.Utility.RelationshipFilteringModule = function() {
}
ProcessConfiguration.Utility.RelationshipFilteringModule.get_instance = function() {
    if (!ProcessConfiguration.Utility.RelationshipFilteringModule.$4m) {
        ProcessConfiguration.Utility.RelationshipFilteringModule.$4m = new ProcessConfiguration.Services.RelationshipFilteringService();
    }
    return ProcessConfiguration.Utility.RelationshipFilteringModule.$4m;
}


ProcessConfiguration.Utility.LabelDictionary = function() {
}
ProcessConfiguration.Utility.LabelDictionary.insertIfNotPresent = function(logicalName, localizedLabel) {
    if (((logicalName) in ProcessConfiguration.Utility.LabelDictionary.$39)) {
        return;
    }
    ProcessConfiguration.Utility.LabelDictionary.$39[logicalName] = localizedLabel;
}
ProcessConfiguration.Utility.LabelDictionary.getLabelIfPresent = function(logicalName) {
    var $v_0 = logicalName;
    if (((logicalName) in ProcessConfiguration.Utility.LabelDictionary.$39)) {
        $v_0 = ProcessConfiguration.Utility.LabelDictionary.$39[logicalName];
    }
    return $v_0;
}


ProcessConfiguration.Utility.ProcessViewVisitor = function(rootViewModel) {
    this.$1Y_0 = rootViewModel;
    this.$3A_0 = true;
}
ProcessConfiguration.Utility.ProcessViewVisitor.prototype = {
    $1X_0: null,
    $2f_0: null,
    $1Y_0: null,
    $3A_0: false,
    
    get_displayErrors: function() {
        return this.$3A_0;
    },
    
    set_displayErrors: function(value) {
        this.$3A_0 = value;
        return value;
    },
    
    $5o_0: function($p0) {
        var $v_0 = (($p0.get_stageId()) in this.get_$77_0());
        if (!$v_0) {
            if (this.$3A_0) {
                var $v_1 = $p0.validate();
                this.$1X_0.get_nestedResults().add($v_1);
            }
            if (!$p0.get_nextStageViewModel() && !this.$1Y_0.get_firstLevelStageViewModels().contains($p0)) {
                var $v_2 = this.$AO_0($p0);
                if ($v_2) {
                    $p0.get_stageModel().set_nextStageId($v_2.get_stageModel().get_nextStageId());
                }
            }
            this.$7L_0($p0);
            this.get_$77_0()[$p0.get_stageId()] = $p0;
        }
        if ($p0.get_childConditionViewModel()) {
            var $v_3 = $p0.get_childConditionViewModel();
            for (var $v_4 = 0; $v_4 < $v_3.get_childConditionBranchViewModels().get_count(); $v_4++) {
                var $v_5 = $v_3.get_childConditionBranchViewModels().get_item($v_4);
                $v_5.get_conditionBranchStepSectionViewModel().validate();
                if ($v_5.get_nextStageViewModel()) {
                    this.$5o_0($v_5.get_nextStageViewModel());
                }
            }
        }
        if ($p0.get_nextStageViewModel()) {
            this.$5o_0($p0.get_nextStageViewModel());
        }
    },
    
    $AO_0: function($p0) {
        var $v_0 = $p0;
        while ($v_0.get_parentStage()) {
            $v_0 = $v_0.get_parentStage();
            if ($v_0.get_nextStageViewModel()) {
                break;
            }
        }
        return $v_0;
    },
    
    $7L_0: function($p0) {
        var $v_0 = this.$C_0.createNewEntityModel($p0.get_entityLogicalName(), this.$14_0);
        if ($p0.get_stageModel().get_stageStep()) {
            $p0.get_stageModel().get_stageStep().set_workflow(this.$14_0);
        }
        $v_0.addStage($p0.get_stageModel());
        this.$14_0.appendStep($v_0.get_entityStep());
        this.$7N_0($p0);
    },
    
    $7N_0: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.get_relationships().get_count(); $v_0++) {
            var $v_1 = $p0.get_relationships().get_item($v_0);
            var $v_2 = $v_1.toRelationshipStep(this.$14_0);
            this.$6r_0($v_2);
            this.$2f_0.appendStep($v_2);
        }
    },
    
    $4V_0: null,
    
    get_$77_0: function() {
        return this.$4V_0 || (this.$4V_0 = {});
    },
    
    $7M_0: function() {
        this.$2f_0 = new Microsoft.Crm.Workflow.ObjectModel.RelationshipCollectionStep(this.$14_0);
        this.$2f_0.setJQueryFriendlyNameAndId(this.$14_0.get_currentStepId());
        this.$6r_0(this.$2f_0);
        this.$14_0.appendStep(this.$2f_0);
    },
    
    $6r_0: function($p0) {
        var $v_0 = '';
        if (isNullOrEmptyString($p0.get_Description())) {
            $p0.set_Description($v_0);
        }
    },
    
    validate: function() {
        this.$14_0 = new Microsoft.Crm.Workflow.ObjectModel.WorkflowStep(this.$1Y_0.get_businessProcessFlowModel().get_primaryEntityName(), this.$1Y_0.get_businessProcessFlowModel().get_workflowCategory());
        this.$14_0.initializeBusinessProcess(this.$1Y_0.get_businessProcessFlowModel().get_workflowBusinessProcessType(), this.$1Y_0.get_businessProcessFlowModel().get_formId());
        this.$7M_0();
        this.$4V_0 = {};
        this.$1X_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, '');
        this.$5o_0(this.$1Y_0.get_firstLevelStageViewModels().get_item(0));
        this.$14_0.set_Id(this.$1Y_0.get_businessProcessFlowModel().get_Id());
        this.$14_0.set_nextStepIndex(this.$1Y_0.get_businessProcessFlowModel().get_nextStepIndex());
        return this.$1X_0;
    },
    
    $14_0: null,
    
    get_bpfWorkflowStep: function() {
        return this.$14_0;
    },
    
    $C_0: null,
    
    get_stepModelFactory: function() {
        return this.$C_0;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_0 = value;
        return value;
    }
}


ProcessConfiguration.Utility.RelationshipPickerDialogLauncher = function() {
}
ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.get_instance = function() {
    if (IsNull(ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.$5)) {
        ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.$5 = new ProcessConfiguration.Utility.RelationshipPickerDialogLauncher();
    }
    return ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.$5;
}
ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.prototype = {
    $3_0: null,
    
    openDialog: function(model, targetStageId) {
        this.$3_0 = model;
        var $v_0 = new ProcessControl.Configuration.RelationshipPickerDialogArguments();
        $v_0.set_targetStageId(targetStageId);
        $v_0.set_allAvailableRelationships(ProcessConfiguration.Utility.RelationshipFilteringModule.get_instance().getAllAvailableRelationships(targetStageId));
        $v_0.set_selectedRelationships(ProcessConfiguration.Utility.RelationshipFilteringModule.get_instance().getSelectedRelationships(targetStageId));
        $v_0.set_stageById(ProcessConfiguration.Utility.RelationshipFilteringModule.get_instance().get_viewFactory().get_stageViewsById());
        var $v_1 = Mscrm.CrmUri.create('/tools/processcontrol/dlg_RelationshipPicker.aspx');
        var $v_2 = new Mscrm.CrmDialog($v_1, $v_0, 630, 400, null);
        $v_2.setCallbackInfo('setViewModelCallBack', this, null);
        $v_2.show();
    },
    
    setViewModelCallBack: function(result) {
        if (result) {
            var $v_0 = result;
            var $v_1 = Mscrm.BusinessRules.SharedMethods.getList(ProcessConfiguration.Models.IRelationshipModel);
            for (var $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
                var $v_2 = $$arr_3[$$idx_5];
                $v_1.add(ProcessConfiguration.Models.RelationshipModel.copy($v_2));
            }
            this.$3_0.set_relationshipsCollection($v_1);
        }
    }
}


Type.registerNamespace('ProcessConfiguration.ViewModels');

ProcessConfiguration.ViewModels.IControlModel = function() {}
ProcessConfiguration.ViewModels.IControlModel.registerInterface('ProcessConfiguration.ViewModels.IControlModel');


ProcessConfiguration.ViewModels.IEntityModel = function() {}
ProcessConfiguration.ViewModels.IEntityModel.registerInterface('ProcessConfiguration.ViewModels.IEntityModel');


ProcessConfiguration.ViewModels.IStepListViewModel = function() {}
ProcessConfiguration.ViewModels.IStepListViewModel.registerInterface('ProcessConfiguration.ViewModels.IStepListViewModel');


ProcessConfiguration.ViewModels.IStepModel = function() {}
ProcessConfiguration.ViewModels.IStepModel.registerInterface('ProcessConfiguration.ViewModels.IStepModel');


ProcessConfiguration.ViewModels.IStepViewModel = function() {}
ProcessConfiguration.ViewModels.IStepViewModel.registerInterface('ProcessConfiguration.ViewModels.IStepViewModel');


ProcessConfiguration.ViewModels.IRelationshipControlViewModel = function() {}
ProcessConfiguration.ViewModels.IRelationshipControlViewModel.registerInterface('ProcessConfiguration.ViewModels.IRelationshipControlViewModel');


ProcessConfiguration.ViewModels.IRelationshipPickerPicklistViewModel = function() {}
ProcessConfiguration.ViewModels.IRelationshipPickerPicklistViewModel.registerInterface('ProcessConfiguration.ViewModels.IRelationshipPickerPicklistViewModel');


ProcessConfiguration.ViewModels.ICompositeViewModel = function() {}
ProcessConfiguration.ViewModels.ICompositeViewModel.registerInterface('ProcessConfiguration.ViewModels.ICompositeViewModel');


ProcessConfiguration.ViewModels.IConditionBranchModel = function() {}
ProcessConfiguration.ViewModels.IConditionBranchModel.registerInterface('ProcessConfiguration.ViewModels.IConditionBranchModel');


ProcessConfiguration.ViewModels.IConditionBranchViewModel = function() {}
ProcessConfiguration.ViewModels.IConditionBranchViewModel.registerInterface('ProcessConfiguration.ViewModels.IConditionBranchViewModel');


ProcessConfiguration.ViewModels.IConditionModel = function() {}
ProcessConfiguration.ViewModels.IConditionModel.registerInterface('ProcessConfiguration.ViewModels.IConditionModel');


ProcessConfiguration.ViewModels.IConditionViewModel = function() {}
ProcessConfiguration.ViewModels.IConditionViewModel.registerInterface('ProcessConfiguration.ViewModels.IConditionViewModel');


ProcessConfiguration.ViewModels.ISetNextStageModel = function() {}
ProcessConfiguration.ViewModels.ISetNextStageModel.registerInterface('ProcessConfiguration.ViewModels.ISetNextStageModel');


ProcessConfiguration.ViewModels.IStageModel = function() {}
ProcessConfiguration.ViewModels.IStageModel.registerInterface('ProcessConfiguration.ViewModels.IStageModel');


ProcessConfiguration.ViewModels.IStageViewModel = function() {}
ProcessConfiguration.ViewModels.IStageViewModel.registerInterface('ProcessConfiguration.ViewModels.IStageViewModel');


ProcessConfiguration.ViewModels.IStepModelFactory = function() {}
ProcessConfiguration.ViewModels.IStepModelFactory.registerInterface('ProcessConfiguration.ViewModels.IStepModelFactory');


ProcessConfiguration.ViewModels.IViewModelFactory = function() {}
ProcessConfiguration.ViewModels.IViewModelFactory.registerInterface('ProcessConfiguration.ViewModels.IViewModelFactory');


ProcessConfiguration.ViewModels.IRelationshipPickerViewModel = function() {}
ProcessConfiguration.ViewModels.IRelationshipPickerViewModel.registerInterface('ProcessConfiguration.ViewModels.IRelationshipPickerViewModel');


ProcessConfiguration.ViewModels.IProcessConfigurationViewModel = function() {}
ProcessConfiguration.ViewModels.IProcessConfigurationViewModel.registerInterface('ProcessConfiguration.ViewModels.IProcessConfigurationViewModel');


ProcessConfiguration.ViewModels.AttributeLogicalNameChangedEventArgs = function() {
    ProcessConfiguration.ViewModels.AttributeLogicalNameChangedEventArgs.initializeBase(this);
}
ProcessConfiguration.ViewModels.AttributeLogicalNameChangedEventArgs.prototype = {
    $1v_1: null,
    
    get_oldValue: function() {
        return this.$1v_1;
    },
    
    set_oldValue: function(value) {
        this.$1v_1 = value;
        return value;
    },
    
    $1u_1: null,
    
    get_newValue: function() {
        return this.$1u_1;
    },
    
    set_newValue: function(value) {
        this.$1u_1 = value;
        return value;
    }
}


ProcessConfiguration.ViewModels.AttributeValidatedEventArgs = function() {
    ProcessConfiguration.ViewModels.AttributeValidatedEventArgs.initializeBase(this);
}
ProcessConfiguration.ViewModels.AttributeValidatedEventArgs.prototype = {
    $1X_1: null,
    
    get_result: function() {
        return this.$1X_1;
    },
    
    set_result: function(value) {
        this.$1X_1 = value;
        return value;
    }
}


ProcessConfiguration.ViewModels.ControlModel = function() {
}
ProcessConfiguration.ViewModels.ControlModel.prototype = {
    $A_0: null,
    
    get_controlStep: function() {
        return this.$A_0;
    },
    
    set_controlStep: function(value) {
        this.$A_0 = value;
        return value;
    },
    
    get_dataFieldName: function() {
        return this.$A_0.get_dataFieldName();
    },
    
    set_dataFieldName: function(value) {
        this.$A_0.set_dataFieldName(value);
        return value;
    },
    
    get_classId: function() {
        return this.$A_0.get_classId();
    },
    
    set_classId: function(value) {
        this.$A_0.set_classId(value);
        return value;
    },
    
    get_parameters: function() {
        return this.$A_0.get_parameters();
    },
    
    set_parameters: function(value) {
        this.$A_0.set_parameters(value);
        return value;
    },
    
    get_controlDisplayName: function() {
        var $v_0 = this.$A_0.get_controlDisplayName();
        if (this.get_isSystemStep()) {
            var $v_1 = this.$W_0.retrieveMetadataByLogicalName(this.get_attributeLogicalName());
            $v_0 = $v_1.get_displayText();
        }
        return $v_0;
    },
    
    set_controlDisplayName: function(value) {
        this.$A_0.set_controlDisplayName(value);
        return value;
    },
    
    get_isSystemStep: function() {
        return this.$A_0.get_isSystemControl();
    },
    
    set_isSystemStep: function(value) {
        this.$A_0.set_isSystemControl(value);
        return value;
    },
    
    $W_0: null,
    
    get_systemControlMetadataModel: function() {
        return this.$W_0;
    },
    
    set_systemControlMetadataModel: function(value) {
        this.$W_0 = value;
        return value;
    },
    
    get_controlId: function() {
        return this.$A_0.get_controlId();
    },
    
    set_controlId: function(value) {
        this.$A_0.set_controlId(value);
        return value;
    },
    
    get_attributeLogicalName: function() {
        return (this.get_isSystemStep() && _String.isNullOrWhiteSpace(this.get_dataFieldName())) ? this.get_controlId() : this.get_dataFieldName();
    },
    
    set_attributeLogicalName: function(value) {
        var $v_0 = this.$W_0.retrieveMetadataByLogicalName(value);
        var $v_1 = !!$v_0 && (ProcessConfiguration.Models.ResolveSystemControlMetadataModel.isInstanceOfType($v_0) || ProcessConfiguration.Models.SolutionSystemControlMetadataModel.isInstanceOfType($v_0));
        if ($v_1) {
            this.set_controlId(value);
        }
        else {
            this.set_dataFieldName(value);
        }
        return value;
    },
    
    $c_0: null,
    
    get_entity: function() {
        if (this.$c_0) {
            return this.$c_0;
        }
        this.$c_0 = new ProcessControl.Configuration.SourceData();
        this.$c_0.$g_0 = this.$A_0.get_controlType();
        if (!this.$c_0.$g_0 && this.$A_0.get_entity()) {
            this.$c_0.$x_0 = this.$A_0.get_entity().get_entityName();
            if (Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked.isInstanceOfType(this.$A_0.get_entity())) {
                var $v_0 = this.$A_0.get_entity();
                this.$c_0.$2E_0 = $v_0.get_relatedAttributeName();
                this.$c_0.$1F_0 = $v_0.get_relationshipName();
            }
        }
        return this.$c_0;
    },
    
    set_entity: function(value) {
        this.$c_0 = value;
        this.$A_0.set_controlType(value.$g_0);
        if (!this.$c_0.$g_0) {
            if (isNullOrEmptyString(this.$c_0.$1F_0)) {
                if (!this.$A_0.get_entity() || Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked.isInstanceOfType(this.$A_0.get_entity())) {
                    this.$A_0.set_entity(new Microsoft.Crm.Workflow.Expressions.PrimaryEntity(this.$A_0.get_workflow()));
                }
            }
            else {
                if (!this.$A_0.get_entity() || Microsoft.Crm.Workflow.Expressions.PrimaryEntity.isInstanceOfType(this.$A_0.get_entity())) {
                    this.$A_0.set_entity(new Microsoft.Crm.Workflow.Expressions.RelatedEntityLinked(this.$A_0.get_workflow(), this.$c_0.$2E_0, this.$c_0.$x_0, this.$c_0.$1F_0));
                }
                else {
                    var $v_0 = this.$A_0.get_entity();
                    $v_0.set_relatedAttributeName(this.$c_0.$2E_0);
                    $v_0.set_relationshipName(this.$c_0.$1F_0);
                }
            }
            this.$A_0.get_entity().set_entityName(this.$c_0.$x_0);
        }
        else {
            this.$A_0.set_entity(null);
            this.$A_0.set_controlDisplayName('');
            this.$A_0.set_dataFieldName('');
        }
        return value;
    }
}


ProcessConfiguration.ViewModels.EntityModel = function() {
}
ProcessConfiguration.ViewModels.EntityModel.prototype = {
    $3D_0: null,
    
    get_entityStep: function() {
        return this.$3D_0;
    },
    
    set_entityStep: function(value) {
        this.$3D_0 = value;
        return value;
    },
    
    addStage: function(stageModel) {
        var $v_0 = this.$3D_0.get_Steps().contains(stageModel.get_stageStep());
        if ($v_0) {
            return;
        }
        this.$3D_0.get_Steps().add(stageModel.get_stageStep());
    }
}


ProcessConfiguration.ViewModels.PageStepViewModel = function() {
    ProcessConfiguration.ViewModels.PageStepViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.PageStepViewModel.prototype = {
    
    initialize: function() {
        this._attributeLogicalName = this.$P_1.get_attributeLogicalName();
        this.$1h_1.refreshAvailableSystemControls(null, this._attributeLogicalName);
    },
    
    add_sourceLogicalNameChanged: function(value) {
        this.addEventHandler(value, 'SourceLogicalNameChanged');
    },
    
    remove_sourceLogicalNameChanged: function(value) {
        this.removeEventHandler(value, 'SourceLogicalNameChanged');
    },
    
    get_source: function() {
        return this.$P_1.get_source();
    },
    
    set_source: function(value) {
        var $v_0 = new ProcessConfiguration.ViewModels.SourceLogicalNameChangedEventArgs();
        $v_0.$1v_1 = this.$P_1.get_source().$x_0;
        $v_0.$1u_1 = value.$x_0;
        $v_0.$2c_2 = this.$P_1.get_source().$g_0;
        $v_0.$2a_2 = value.$g_0;
        $v_0.$2d_2 = this.$P_1.get_source().$1F_0;
        $v_0.$2b_2 = value.$1F_0;
        this.$P_1.set_source(value);
        this.fireEvent('SourceLogicalNameChanged', $v_0);
        return value;
    },
    
    updateStepSourceProperties: function(sourceData) {
        this.set_source(sourceData);
        this.$P_1.set_isSystemStep(false);
        this.$P_1.set_parameters('');
    },
    
    validateAttributeLogicalName: function(value) {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, null);
        if (isNullOrEmptyString(value)) {
            $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(false, window.LOCID_PROCESS_FIELDISBESELECTED);
        }
        var $v_1 = new ProcessConfiguration.ViewModels.AttributeValidatedEventArgs();
        $v_1.$1X_1 = $v_0;
        this.fireEvent('AttributeValidated', $v_1);
        return $v_0;
    }
}


ProcessConfiguration.ViewModels.RelationshipControlViewModel = function() {
    ProcessConfiguration.ViewModels.RelationshipControlViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.RelationshipControlViewModel.prototype = {
    $1b_1: null,
    
    get_targetStageId: function() {
        return this.$1b_1;
    },
    
    set_targetStageId: function($p0) {
        this.$1b_1 = $p0;
        return $p0;
    },
    
    $4I_1: null,
    
    get_relationshipsCollection: function() {
        return this.$4I_1 || (this.$4I_1 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.IRelationshipModel))());
    },
    
    set_relationshipsCollection: function($p0) {
        this.$A5_1($p0);
        this.validate();
        return $p0;
    },
    
    $A5_1: function($p0) {
        this.get_relationshipsCollection().clear();
        if ($p0) {
            this.get_relationshipsCollection().addRange($p0.toArray());
        }
    },
    
    validate: function() {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, '');
        var $v_1 = ProcessConfiguration.Utility.RelationshipFilteringModule.get_instance().getAllAvailableRelationships(this.$1b_1);
        for (var $v_2 = 0; $v_2 < this.get_relationshipsCollection().get_count(); $v_2++) {
            if (!this.get_relationshipsCollection().get_item($v_2).isValid($v_1)) {
                $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(false, 'Invalid relationship');
                break;
            }
        }
        this.set_showWarning(!$v_0.get_success());
        return $v_0;
    },
    
    $5F_1: false,
    
    get_showWarning: function() {
        return this.$5F_1;
    },
    
    set_showWarning: function($p0) {
        this.$5F_1 = $p0;
        var $v_0 = new Sys.PropertyChangedEventArgs('ShowWarningProperty');
        this.fireEvent('PropertyChanged', $v_0);
        return $p0;
    },
    
    $5C_1: false,
    
    get_readOnly: function() {
        return this.$5C_1;
    },
    
    set_readOnly: function($p0) {
        this.$5C_1 = $p0;
        return $p0;
    },
    
    dispose: function() {
        this.$4I_1 = null;
    },
    
    setPropertyWithoutRaisingEvent: function($p0, $p1) {
        Error.notImplemented('The method or operation is not implemented.');
    }
}


ProcessConfiguration.ViewModels.SourceLogicalNameChangedEventArgs = function() {
    ProcessConfiguration.ViewModels.SourceLogicalNameChangedEventArgs.initializeBase(this);
}
ProcessConfiguration.ViewModels.SourceLogicalNameChangedEventArgs.prototype = {
    $2c_2: 0,
    
    get_oldControlType: function() {
        return this.$2c_2;
    },
    
    set_oldControlType: function(value) {
        this.$2c_2 = value;
        return value;
    },
    
    $2a_2: 0,
    
    get_newControlType: function() {
        return this.$2a_2;
    },
    
    set_newControlType: function(value) {
        this.$2a_2 = value;
        return value;
    },
    
    $2b_2: null,
    
    get_newRelationshipName: function() {
        return this.$2b_2;
    },
    
    set_newRelationshipName: function(value) {
        this.$2b_2 = value;
        return value;
    },
    
    $2d_2: null,
    
    get_oldRelationshipName: function() {
        return this.$2d_2;
    },
    
    set_oldRelationshipName: function(value) {
        this.$2d_2 = value;
        return value;
    }
}


ProcessConfiguration.ViewModels.StepEventArgs = function() {
    ProcessConfiguration.ViewModels.StepEventArgs.initializeBase(this);
}
ProcessConfiguration.ViewModels.StepEventArgs.prototype = {
    $4_1: null,
    
    get_stepViewModel: function() {
        return this.$4_1;
    },
    
    set_stepViewModel: function(value) {
        this.$4_1 = value;
        return value;
    },
    
    $2H_1: null,
    
    get_stepView: function() {
        return this.$2H_1;
    },
    
    set_stepView: function(value) {
        this.$2H_1 = value;
        return value;
    }
}


ProcessConfiguration.ViewModels.StepListViewModel = function() {
    this.$$d_handleStepViewModelDeleting = Function.createDelegate(this, this.handleStepViewModelDeleting);
    this.$$d_handleChildStepViewModelAttributeLogicalNameChanged = Function.createDelegate(this, this.handleChildStepViewModelAttributeLogicalNameChanged);
    ProcessConfiguration.ViewModels.StepListViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.StepListViewModel.prototype = {
    _attributeMetadataModelsByLogicalName: null,
    _entityMetadataModel: null,
    
    $7g_1: function() {
        for (var $v_0 = 0; $v_0 < this.get_childStepViewModels().get_count(); $v_0++) {
            var $v_1 = this.get_childStepViewModels().get_item($v_0);
            $v_1.changeEntity(this._entityMetadataModel, this._attributeMetadataModelsByLogicalName);
        }
        this.clearValidAttributeLogicalNames();
    },
    
    clearValidAttributeLogicalNames: function() {
        var $$dict_1 = this.get_validAttributeLogicalNames();
        for (var $$key_2 in $$dict_1) {
            var $v_1 = { key: $$key_2, value: $$dict_1[$$key_2] };
            delete this.get_validAttributeLogicalNames()[$v_1.key];
        }
        var $v_0 = new Sys.PropertyChangedEventArgs('ValidAttributeLogicalNames');
        this.fireEvent('PropertyChanged', $v_0);
    },
    
    updateAttributeMetadataModelsByLogicalName: function() {
        this._entityMetadataModel = this.$1_1.retrieveEntityMetadataSync(this._entityLogicalName);
        this._attributeMetadataModelsByLogicalName = {};
        for (var $v_0 = 0; $v_0 < this._entityMetadataModel.get_attributes().get_count(); $v_0++) {
            var $v_1 = this._entityMetadataModel.get_attributes().get_item($v_0);
            var $v_2 = $v_1.get_logicalName();
            this._attributeMetadataModelsByLogicalName[$v_2] = $v_1;
        }
    },
    
    createAttributeLogicalName: function(attributeLogicalName) {
        var $v_0 = this.$75_1(attributeLogicalName);
        if (!$v_0.get_success()) {
            return;
        }
        if (((attributeLogicalName) in this.get_validAttributeLogicalNames())) {
            var $v_2 = this.get_validAttributeLogicalNames()[attributeLogicalName];
            this.get_validAttributeLogicalNames()[attributeLogicalName] = $v_2 + 1;
            return;
        }
        this.get_validAttributeLogicalNames()[attributeLogicalName] = 1;
        var $v_1 = new Sys.PropertyChangedEventArgs('ValidAttributeLogicalNames');
        this.fireEvent('PropertyChanged', $v_1);
    },
    
    $AV_1: function($p0, $p1) {
        if ($p0 === $p1) {
            return;
        }
        var $v_0 = this.$75_1($p1);
        if (!$v_0.get_success()) {
            return;
        }
        this.createAttributeLogicalName($p1);
        this.deleteAttributeLogicalName($p0);
    },
    
    deleteAttributeLogicalName: function(attributeLogicalName) {
        if (isNullOrEmptyString(attributeLogicalName)) {
            return;
        }
        if (!((attributeLogicalName) in this.get_validAttributeLogicalNames())) {
            return;
        }
        var $v_0 = this.get_validAttributeLogicalNames()[attributeLogicalName];
        $v_0--;
        if ($v_0 < 1) {
            delete this.get_validAttributeLogicalNames()[attributeLogicalName];
            var $v_1 = new Sys.PropertyChangedEventArgs('ValidAttributeLogicalNames');
            this.fireEvent('PropertyChanged', $v_1);
        }
        else {
            this.get_validAttributeLogicalNames()[attributeLogicalName] = $v_0;
        }
    },
    
    $75_1: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, null);
        if (isNullOrEmptyString($p0)) {
            $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(false, 'attribute logical name cannot be empty');
            return $v_0;
        }
        var $v_1 = (($p0) in this._attributeMetadataModelsByLogicalName);
        if (!$v_1) {
            $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(false, 'attribute must exist on parent entity.');
            return $v_0;
        }
        return $v_0;
    },
    
    handleChildStepViewModelAttributeLogicalNameChanged: function(sender, eventArgs) {
        this.$AV_1(eventArgs.$1v_1, eventArgs.$1u_1);
    },
    
    handleStepViewModelDeleting: function(sender, stepEventArgs) {
        this.deleteStep(stepEventArgs.$4_1);
    },
    
    deleteStep: function(stepViewModel) {
        stepViewModel.remove_attributeLogicalNameChanged(this.$$d_handleChildStepViewModelAttributeLogicalNameChanged);
        stepViewModel.remove_deleting(this.$$d_handleStepViewModelDeleting);
        this.deleteAttributeLogicalName(stepViewModel.get_attributeLogicalName());
        this.get_childStepViewModels().remove(stepViewModel);
        if (this.get_childStepViewModels().get_count() === 1) {
            this.get_childStepViewModels().first().set_canDelete(false);
        }
        var $v_0 = new ProcessConfiguration.ViewModels.StepEventArgs();
        $v_0.$4_1 = stepViewModel;
        this.fireEvent('Deleting', $v_0);
    },
    
    dispose: function() {
    },
    
    setPropertyWithoutRaisingEvent: function(propertyName, value) {
    },
    
    add_stepDeleting: function(value) {
        this.addEventHandler(value, 'Deleting');
    },
    
    remove_stepDeleting: function(value) {
        this.removeEventHandler(value, 'Deleting');
    },
    
    add_stepAdding: function(value) {
        this.addEventHandler(value, 'Adding');
    },
    
    remove_stepAdding: function(value) {
        this.removeEventHandler(value, 'Adding');
    },
    
    $3L_1: null,
    
    get_steps: function() {
        return this.$3L_1;
    },
    
    set_steps: function(value) {
        this.$3L_1 = value;
        return value;
    },
    
    $H_1: null,
    
    get_viewModelFactory: function() {
        return this.$H_1;
    },
    
    set_viewModelFactory: function(value) {
        this.$H_1 = value;
        return value;
    },
    
    $1_1: null,
    
    get_metadataService: function() {
        return this.$1_1;
    },
    
    set_metadataService: function(value) {
        this.$1_1 = value;
        return value;
    },
    
    $4y_1: null,
    
    get_childStepViewModels: function() {
        return this.$4y_1 || (this.$4y_1 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.ViewModels.IStepViewModel))());
    },
    
    $1G_1: null,
    
    get_validAttributeLogicalNames: function() {
        return this.$1G_1 || (this.$1G_1 = {});
    },
    
    _entityLogicalName: null,
    
    get_entityLogicalName: function() {
        return this._entityLogicalName;
    },
    
    set_entityLogicalName: function(value) {
        var $v_0 = this._entityLogicalName !== value;
        if (!$v_0) {
            return value;
        }
        this._entityLogicalName = value;
        this.updateAttributeMetadataModelsByLogicalName();
        return value;
    },
    
    $5D_1: null,
    
    get_rootWorkflow: function() {
        return this.$5D_1;
    },
    
    set_rootWorkflow: function(value) {
        this.$5D_1 = value;
        return value;
    },
    
    initialize: function() {
        for (var $v_0 = 0; $v_0 < this.$3L_1.get_count(); $v_0++) {
            var $v_1 = this.$3L_1.get_item($v_0);
            this.addStepViewModel($v_1);
        }
    },
    
    addStepViewModel: function(newStepModel) {
        this._entityMetadataModel = this.$1_1.retrieveEntityMetadataSync(this._entityLogicalName);
        var $v_0 = this.$H_1.createStepViewModel(newStepModel, this.$1_1, this._entityLogicalName, this._entityMetadataModel, this._attributeMetadataModelsByLogicalName);
        $v_0.add_attributeLogicalNameChanged(this.$$d_handleChildStepViewModelAttributeLogicalNameChanged);
        $v_0.add_deleting(this.$$d_handleStepViewModelDeleting);
        $v_0.initialize();
        this.get_childStepViewModels().add($v_0);
        this.createAttributeLogicalName($v_0.get_attributeLogicalName());
        if (this.get_childStepViewModels().get_count() === 1) {
            $v_0.set_canDelete(false);
        }
        else if (this.get_childStepViewModels().get_count() > 1) {
            this.get_childStepViewModels().first().set_canDelete(true);
        }
        var $v_1 = new ProcessConfiguration.ViewModels.StepEventArgs();
        $v_1.$4_1 = $v_0;
        this.fireEvent('Adding', $v_1);
        return $v_0;
    },
    
    changeEntity: function(entityLogicalName) {
        this.set_entityLogicalName(entityLogicalName);
        this.$7g_1();
    },
    
    validate: function() {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, '');
        for (var $v_1 = 0; $v_1 < this.get_childStepViewModels().get_count(); $v_1++) {
            var $v_2 = this.get_childStepViewModels().get_item($v_1);
            var $v_3 = $v_2.validate();
            $v_0.get_nestedResults().add($v_3);
        }
        return $v_0;
    }
}


ProcessConfiguration.ViewModels.PageStepListViewModel = function() {
    ProcessConfiguration.ViewModels.PageStepListViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.PageStepListViewModel.prototype = {
    
    deleteStep: function(stepViewModel) {
        stepViewModel.remove_deleting(this.$$d_handleStepViewModelDeleting);
        this.get_childStepViewModels().remove(stepViewModel);
        if (this.get_childStepViewModels().get_count() === 1) {
            this.get_childStepViewModels().first().set_canDelete(false);
        }
        var $v_0 = new ProcessConfiguration.ViewModels.StepEventArgs();
        $v_0.$4_1 = stepViewModel;
        this.fireEvent('Deleting', $v_0);
    },
    
    addStepViewModel: function(newStepModel) {
        this._entityMetadataModel = this.$1_1.retrieveEntityMetadataSync(this._entityLogicalName);
        var $v_0 = this.$H_1.createStepViewModel(newStepModel, this.$1_1, this._entityLogicalName, this._entityMetadataModel, this._attributeMetadataModelsByLogicalName);
        $v_0.add_deleting(this.$$d_handleStepViewModelDeleting);
        $v_0.initialize();
        this.get_childStepViewModels().add($v_0);
        if (this.get_childStepViewModels().get_count() === 1) {
            $v_0.set_canDelete(false);
        }
        else if (this.get_childStepViewModels().get_count() > 1) {
            this.get_childStepViewModels().first().set_canDelete(true);
        }
        var $v_1 = new ProcessConfiguration.ViewModels.StepEventArgs();
        $v_1.$4_1 = $v_0;
        this.fireEvent('Adding', $v_1);
        return $v_0;
    }
}


ProcessConfiguration.ViewModels.StepModel = function() {
}
ProcessConfiguration.ViewModels.StepModel.prototype = {
    $2n_0: null,
    
    get_stepStep: function() {
        return this.$2n_0;
    },
    
    set_stepStep: function(value) {
        this.$2n_0 = value;
        return value;
    },
    
    $z_0: null,
    
    get_parentStage: function() {
        return this.$z_0;
    },
    
    set_parentStage: function(value) {
        this.$z_0 = value;
        this.$2n_0.set_parent(this.$z_0.get_stageStep());
        return value;
    },
    
    get_dataFieldName: function() {
        return this.get_controlModel().get_dataFieldName();
    },
    
    set_dataFieldName: function(value) {
        this.get_controlModel().set_dataFieldName(value);
        return value;
    },
    
    $3P_0: null,
    
    get_controlModel: function() {
        if (this.$3P_0) {
            return this.$3P_0;
        }
        var $v_0 = Microsoft.Crm.Workflow.ObjectModel.ControlStep.getControlStep(this.$2n_0.get_Steps().get_item(0));
        this.$3P_0 = this.$C_0.createControlModel($v_0);
        return this.$3P_0;
    },
    
    get_source: function() {
        return this.get_controlModel().get_entity();
    },
    
    set_source: function(value) {
        this.get_controlModel().set_entity(value);
        return value;
    },
    
    $C_0: null,
    
    get_stepModelFactory: function() {
        return this.$C_0;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_0 = value;
        return value;
    },
    
    get_classId: function() {
        return this.get_controlModel().get_classId();
    },
    
    set_classId: function(value) {
        this.get_controlModel().set_classId(value);
        return value;
    },
    
    get_parameters: function() {
        return this.get_controlModel().get_parameters();
    },
    
    set_parameters: function(value) {
        this.get_controlModel().set_parameters(value);
        return value;
    },
    
    get_controlDisplayName: function() {
        return this.get_controlModel().get_controlDisplayName();
    },
    
    set_controlDisplayName: function(value) {
        this.get_controlModel().set_controlDisplayName(value);
        return value;
    },
    
    get_isSystemStep: function() {
        return this.get_controlModel().get_isSystemStep();
    },
    
    set_isSystemStep: function(value) {
        this.get_controlModel().set_isSystemStep(value);
        return value;
    },
    
    get_attributeLogicalName: function() {
        return this.get_controlModel().get_attributeLogicalName();
    },
    
    set_attributeLogicalName: function(value) {
        this.get_controlModel().set_attributeLogicalName(value);
        return value;
    },
    
    moveUp: function() {
        this.$6x_0(true);
    },
    
    moveDown: function() {
        this.$6x_0(false);
    },
    
    $6x_0: function($p0) {
        var $v_0 = ($p0) ? -1 : 1;
        var $v_1 = this.$z_0.get_steps().indexOf(this, 0) + $v_0;
        this.$z_0.get_steps().remove(this);
        this.$z_0.get_steps().insert($v_1, this);
        this.$z_0.get_stageStep().get_Steps().move($v_1, this.$2n_0);
    }
}


ProcessConfiguration.ViewModels.StepViewModel = function() {
    ProcessConfiguration.ViewModels.StepViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.StepViewModel.prototype = {
    
    validateAttributeLogicalName: function(value) {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, null);
        if (isNullOrEmptyString(value) || !((value) in this.$2R_1)) {
            $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(false, window.LOCID_PROCESS_FIELDISBESELECTED);
        }
        var $v_1 = new ProcessConfiguration.ViewModels.AttributeValidatedEventArgs();
        $v_1.$1X_1 = $v_0;
        this.fireEvent('AttributeValidated', $v_1);
        return $v_0;
    },
    
    dispose: function() {
        this.$P_1 = null;
        this.$1_1 = null;
        this.$1h_1 = null;
        this.$2R_1 = null;
    },
    
    setPropertyWithoutRaisingEvent: function(propertyName, value) {
    },
    
    add_attributeLogicalNameChanged: function(value) {
        this.addEventHandler(value, 'AttributeLogicalNameChanged');
    },
    
    remove_attributeLogicalNameChanged: function(value) {
        this.removeEventHandler(value, 'AttributeLogicalNameChanged');
    },
    
    add_attributeValidated: function(value) {
        this.addEventHandler(value, 'AttributeValidated');
    },
    
    remove_attributeValidated: function(value) {
        this.addEventHandler(value, 'AttributeValidated');
    },
    
    add_deleting: function(value) {
        this.addEventHandler(value, 'Deleting');
    },
    
    remove_deleting: function(value) {
        this.removeEventHandler(value, 'Deleting');
    },
    
    initialize: function() {
        this._attributeLogicalName = this.$P_1.get_attributeLogicalName();
        this.$1h_1.refreshAvailableSystemControls(null, this._attributeLogicalName);
    },
    
    $P_1: null,
    
    get_stepModel: function() {
        return this.$P_1;
    },
    
    set_stepModel: function(value) {
        this.$P_1 = value;
        return value;
    },
    
    $1_1: null,
    
    get_metadataService: function() {
        return this.$1_1;
    },
    
    set_metadataService: function(value) {
        this.$1_1 = value;
        return value;
    },
    
    _attributeLogicalName: null,
    
    get_attributeLogicalName: function() {
        return this._attributeLogicalName;
    },
    
    set_attributeLogicalName: function(value) {
        var $v_0 = this._attributeLogicalName;
        this._attributeLogicalName = value;
        var $v_1 = this.validateAttributeLogicalName(this._attributeLogicalName);
        if (!$v_1.get_success()) {
            return value;
        }
        this.$P_1.set_attributeLogicalName(this._attributeLogicalName);
        var $v_2 = new ProcessConfiguration.ViewModels.AttributeLogicalNameChangedEventArgs();
        $v_2.$1v_1 = $v_0;
        $v_2.$1u_1 = this._attributeLogicalName;
        this.fireEvent('AttributeLogicalNameChanged', $v_2);
        return value;
    },
    
    $2R_1: null,
    
    get_attributeMetadataModelsByLogicalName: function() {
        return this.$2R_1;
    },
    
    set_attributeMetadataModelsByLogicalName: function(value) {
        this.$2R_1 = value;
        return value;
    },
    
    $1h_1: null,
    
    get_entityMetadataModel: function() {
        return this.$1h_1;
    },
    
    set_entityMetadataModel: function(value) {
        this.$1h_1 = value;
        var $v_0 = new Sys.PropertyChangedEventArgs('EntityMetadataModel');
        this.fireEvent('PropertyChanged', $v_0);
        return value;
    },
    
    $4x_1: false,
    
    get_canDelete: function() {
        return this.$4x_1;
    },
    
    set_canDelete: function(value) {
        this.$4x_1 = value;
        var $v_0 = new Sys.PropertyChangedEventArgs('CanDelete');
        this.fireEvent('PropertyChanged', $v_0);
        return value;
    },
    
    get_isSystemStep: function() {
        return this.$P_1.get_isSystemStep();
    },
    
    get_fieldDisplayText: function() {
        return this.$P_1.get_controlDisplayName();
    },
    
    changeEntity: function(entityMetadataModel, attributeMetadataModelsByLogicalName) {
        this.set_entityMetadataModel(entityMetadataModel);
        this.$2R_1 = attributeMetadataModelsByLogicalName;
        this.set_attributeLogicalName(null);
    },
    
    deleteStep: function() {
        if (!IsNull(this.$1h_1)) {
            this.$1h_1.refreshAvailableSystemControls(this._attributeLogicalName, null);
        }
        var $v_0 = new ProcessConfiguration.ViewModels.StepEventArgs();
        $v_0.$4_1 = this;
        this.fireEvent('Deleting', $v_0);
        this.dispose();
    },
    
    validate: function() {
        var $v_0;
        if (this.$P_1.get_source().$g_0) {
            $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, null);
            return $v_0;
        }
        if (ProcessControl.Configuration.Initializer.get_isProcessUnificationDebugMode()) {
            var $v_1 = this.$P_1.get_stepStep();
            for (var $v_2 = 0; $v_2 < $v_1.get_stepLabels().get_count(); $v_2++) {
                if ($v_1.get_stepLabels().get_item($v_2).get_labelId() === $v_1.get_stepStepId()) {
                    var $v_3 = $v_1.get_stepLabels().get_item($v_2).get_description();
                    var $v_4 = $v_3.trim();
                    if ($v_4.startsWith('{')) {
                        var $v_5 = JSON.parse($v_4);
                        var $v_6 = Microsoft.Crm.Workflow.ObjectModel.NullObjectsFactory.buildStep('ActionStep:#Microsoft.Crm.Workflow.ObjectModel');
                        $v_6.initializeFromDynamic($v_5);
                        $v_1.get_stepLabels().get_item($v_2).set_description('Invoke ' + $v_6.get_uniqueName());
                        Array.clear($v_1.get_Steps().getArrayList());
                        $v_1.get_Steps().add($v_6);
                        var $v_7 = $v_1.get_workflow();
                        $v_6.set_workflow($v_7);
                        $v_6.set_actionId(Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString());
                        $v_7.set_nextStepIndex($v_7.get_nextStepIndex() + 1);
                        $v_6.setJQueryFriendlyNameAndId($v_7.get_currentStepId());
                        if (!IsNull($v_6.get_actionControl())) {
                            $v_6.get_actionControl().set_workflow($v_7);
                            $v_6.get_actionControl().set_controlId(Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString());
                            $v_7.set_nextStepIndex($v_7.get_nextStepIndex() + 1);
                            $v_6.get_actionControl().setJQueryFriendlyNameAndId($v_7.get_currentStepId());
                        }
                        if (!IsNull($v_6.get_Steps())) {
                            for (var $v_8 = 0; $v_8 < $v_6.get_Steps().get_Count(); $v_8++) {
                                $v_7.set_nextStepIndex($v_7.get_nextStepIndex() + 1);
                                $v_6.get_Steps().get_item($v_8).setJQueryFriendlyNameAndId($v_7.get_currentStepId());
                            }
                        }
                        $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, null);
                        return $v_0;
                    }
                }
            }
        }
        $v_0 = this.validateAttributeLogicalName(this._attributeLogicalName);
        return $v_0;
    },
    
    updateSystemStepProperties: function(systemControlMetadata) {
        var $v_0 = this._attributeLogicalName;
        this.updateStepProperties(systemControlMetadata);
        this.$P_1.set_classId(systemControlMetadata.get_classId());
        this.$P_1.set_parameters(systemControlMetadata.get_parameters());
        this.$P_1.set_isSystemStep(true);
        this.$1h_1.refreshAvailableSystemControls($v_0, this._attributeLogicalName);
    },
    
    updateStepProperties: function(attributeMetadataModel) {
        this.set_attributeLogicalName(attributeMetadataModel.get_logicalName());
        this.$P_1.set_controlDisplayName(attributeMetadataModel.get_displayText());
        this.$P_1.set_isSystemStep(false);
        this.$P_1.set_parameters('');
    }
}


ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult = function($p0, $p1) {
    this.$51_0 = $p1;
    this.$5L_0 = $p0;
}
ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult.prototype = {
    $5L_0: false,
    
    get_success: function() {
        var $v_0 = this.$5L_0;
        for (var $v_1 = 0; $v_1 < this.get_nestedResults().get_Count(); $v_1++) {
            var $v_2 = this.get_nestedResults().get_item($v_1);
            $v_0 = $v_0 && $v_2.get_success();
        }
        return $v_0;
    },
    
    $51_0: null,
    
    get_errorMessage: function() {
        return this.$51_0;
    },
    
    $59_0: null,
    
    get_nestedResults: function() {
        return this.$59_0 || (this.$59_0 = new (Microsoft.Crm.Client.Core.Framework.List$1.$$(Mscrm.IValidationResult))());
    }
}


ProcessConfiguration.ViewModels.RelationshipPickerPicklistViewModel = function() {
}
ProcessConfiguration.ViewModels.RelationshipPickerPicklistViewModel.prototype = {
    $4O_0: null,
    
    get_sourceStageId: function() {
        return this.$4O_0;
    },
    
    set_sourceStageId: function(value) {
        this.$4O_0 = value;
        return value;
    },
    
    $3w_0: null,
    $37_0: null,
    $3n_0: 0,
    
    get_enumOptions: function() {
        return this.$3w_0;
    },
    
    set_enumOptions: function(value) {
        this.$3w_0 = value;
        return value;
    },
    
    get_availableRelationShips: function() {
        return this.$37_0;
    },
    
    set_availableRelationShips: function(value) {
        this.$37_0 = value;
        return value;
    },
    
    get_defaultEnumOptions: function() {
        return this.$3n_0;
    },
    
    set_defaultEnumOptions: function(value) {
        this.$3n_0 = value;
        return value;
    }
}


ProcessConfiguration.ViewModels.ConditionBranchModel = function() {
}
ProcessConfiguration.ViewModels.ConditionBranchModel.prototype = {
    $54_0: false,
    
    $9I_0: function() {
        this.$54_0 = true;
        if (this.$q_0.get_Steps().get_Count() < 1) {
            return;
        }
        var $v_0 = this.$q_0.get_Steps().get_item(0);
        var $v_1 = $v_0;
        var $v_2 = this.$C_0.createSetNextStageModel($v_1);
        this.$1Z_0 = $v_2;
    },
    
    $q_0: null,
    
    get_conditionBranchStep: function() {
        return this.$q_0;
    },
    
    set_conditionBranchStep: function(value) {
        this.$q_0 = value;
        return value;
    },
    
    $1Z_0: null,
    
    get_setNextStage: function() {
        if (this.$54_0) {
            return this.$1Z_0;
        }
        this.$9I_0();
        return this.$1Z_0;
    },
    
    set_setNextStage: function(value) {
        this.$1Z_0 = value;
        if (!this.$1Z_0 && this.$q_0.get_Steps().get_Count() > 0) {
            var $v_0 = this.$q_0.get_Steps().get_item(0);
            this.$q_0.remove($v_0);
            return value;
        }
        if (this.$1Z_0 && this.$q_0.get_Steps().get_Count() > 0) {
            var $v_1 = this.$q_0.get_Steps().get_item(0);
            this.$q_0.remove($v_1);
            this.$q_0.appendStep(this.$1Z_0.get_setNextStageStep());
            return value;
        }
        if (this.$1Z_0 && !this.$q_0.get_Steps().get_Count()) {
            this.$q_0.appendStep(this.$1Z_0.get_setNextStageStep());
        }
        return value;
    },
    
    $C_0: null,
    
    get_stepModelFactory: function() {
        return this.$C_0;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_0 = value;
        return value;
    },
    
    get_rootWorkflow: function() {
        return this.$q_0.get_workflow();
    }
}


ProcessConfiguration.ViewModels.ConditionBranchViewModel = function() {
    ProcessConfiguration.ViewModels.ConditionBranchViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.ConditionBranchViewModel.prototype = {
    
    get_parentStageViewModel: function() {
        return this.$1V_0.get_parent();
    },
    
    $1L_1: null,
    
    get_conditionBranchModel: function() {
        return this.$1L_1;
    },
    
    set_conditionBranchModel: function(value) {
        this.$1L_1 = value;
        return value;
    },
    
    $1_1: null,
    
    get_metadataService: function() {
        return this.$1_1;
    },
    
    set_metadataService: function(value) {
        this.$1_1 = value;
        return value;
    },
    
    $N_1: null,
    
    get_nextStageViewModel: function() {
        return this.$N_1;
    },
    
    set_nextStageViewModel: function(value) {
        this.$N_1 = value;
        if (!value) {
            this.$1L_1.get_setNextStage().get_setNextStageStep().set_stageId(null);
        }
        return value;
    },
    
    $K_1: null,
    
    get_entityLogicalName: function() {
        return this.$K_1;
    },
    
    set_entityLogicalName: function(value) {
        this.$K_1 = value;
        if (!IsNull(this.$1f_1)) {
            this.$1f_1.set_entityLogicName(this.$K_1);
        }
        return value;
    },
    
    $1G_1: null,
    
    get_validAttributeLogicalNames: function() {
        return this.$1G_1;
    },
    
    set_validAttributeLogicalNames: function(value) {
        this.$1G_1 = value;
        return value;
    },
    
    initialize: function() {
        this.$1f_1 = new Mscrm.BusinessRules.ViewModels.BranchingConditionBranchSectionViewModel(this.$1L_1.get_conditionBranchStep(), this.$K_1);
        var $v_0 = this.$1L_1.get_setNextStage();
        var $v_1 = $v_0.get_nextStage();
        if (!$v_1) {
            return;
        }
        var $v_2 = this.$H_1.createStageViewModel(this.$1_1, $v_1, this.get_parentStageViewModel(), $v_1.get_entityLogicalName());
        $v_2.initialize();
        this.$N_1 = $v_2;
    },
    
    $1f_1: null,
    
    get_conditionBranchStepSectionViewModel: function() {
        return this.$1f_1;
    },
    
    set_conditionBranchStepSectionViewModel: function(value) {
        this.$1f_1 = value;
        return value;
    },
    
    insertNextStageViewModel: function(nextStageViewModel) {
        var $v_0 = this.$1L_1.get_stepModelFactory().createNewSetNextStageModel(this.$1L_1, nextStageViewModel, this.get_parentStageViewModel());
        if (this.$N_1) {
            var $v_1 = this.$N_1;
            this.$N_1 = nextStageViewModel;
            this.$N_1.insertNextStageViewModel($v_1);
            this.$N_1.get_stageModel().set_nextStageId($v_1.get_stageId());
        }
        else {
            this.$N_1 = nextStageViewModel;
        }
        this.$1L_1.set_setNextStage($v_0);
    },
    
    $H_1: null,
    
    get_viewModelFactory: function() {
        return this.$H_1;
    },
    
    set_viewModelFactory: function(value) {
        this.$H_1 = value;
        return value;
    },
    
    validate: function() {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, '');
        if (!this.$1L_1.get_rootWorkflow().get_workflowBusinessProcessType()) {
            for (var $v_1 = 0; $v_1 < this.$1f_1.get_conditions().get_expressionViewModels().get_count(); $v_1++) {
                var $v_2 = this.$1f_1.get_conditions().get_expressionViewModels().get_item($v_1);
                if ($v_2.get_conditionBranchDisplayMode() !== 2) {
                    $v_0.get_nestedResults().add(this.$AZ_1($v_2));
                }
            }
        }
        return $v_0;
    },
    
    $AZ_1: function($p0) {
        var $v_0 = false;
        var $v_1 = new Sys.StringBuilder();
        if ($p0.get_alwaysShowWarning()) {
            $v_0 = true;
            $v_1.append(this.$K_1);
        }
        else {
            var $v_2 = new Mscrm.BusinessRules.Views.EntityAttributeExpressionVisitor();
            $p0.get_expression().accept($v_2);
            if (!IsNull($v_2.get_expressions())) {
                for (var $v_3 = 0; $v_3 < $v_2.get_expressions().get_count(); $v_3++) {
                    if (IsNull(this.$1G_1) || !(($v_2.get_expressions().get_item($v_3).get_attributeName()) in this.$1G_1) || this.$K_1 !== $v_2.get_expressions().get_item($v_3).get_entity().get_entityName()) {
                        $v_0 = true;
                        $v_1.append($v_2.get_expressions().get_item($v_3).get_attributeName());
                        $v_1.append(' ');
                    }
                }
            }
        }
        $p0.set_showWarning($v_0);
        return new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(!$v_0, $v_1.toString());
    },
    
    dispose: function() {
        this.$N_1 = null;
        this.$1f_1 = null;
        this.$1L_1 = null;
    },
    
    setPropertyWithoutRaisingEvent: function(propertyName, value) {
        Error.notImplemented('The method or operation is not implemented.');
    }
}


ProcessConfiguration.ViewModels.ConditionModel = function() {
}
ProcessConfiguration.ViewModels.ConditionModel.prototype = {
    
    $96_0: function() {
        this.$2S_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.ViewModels.IConditionBranchModel))();
        for (var $v_0 = 0; $v_0 < this.$2U_0.get_Steps().get_Count(); $v_0++) {
            var $v_1 = this.$2U_0.get_Steps().get_item($v_0);
            var $v_2 = $v_1;
            var $v_3 = this.$C_0.createConditionBranchModel($v_2);
            this.$2S_0.add($v_3);
        }
    },
    
    $2U_0: null,
    
    get_conditionStep: function() {
        return this.$2U_0;
    },
    
    set_conditionStep: function(value) {
        this.$2U_0 = value;
        return value;
    },
    
    $2S_0: null,
    
    get_conditionBranches: function() {
        if (this.$2S_0) {
            return this.$2S_0;
        }
        this.$96_0();
        return this.$2S_0;
    },
    
    $C_0: null,
    
    get_stepModelFactory: function() {
        return this.$C_0;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_0 = value;
        return value;
    },
    
    deleteConditionBranch: function(conditionBranchModel) {
        this.$2U_0.remove(conditionBranchModel.get_conditionBranchStep());
        this.get_conditionBranches().remove(conditionBranchModel);
    }
}


ProcessConfiguration.ViewModels.ConditionViewModel = function() {
    ProcessConfiguration.ViewModels.ConditionViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.ConditionViewModel.prototype = {
    
    dispose: function() {
        this.$3j_1 = null;
        this.$2T_1 = null;
    },
    
    setPropertyWithoutRaisingEvent: function(propertyName, value) {
        Error.notImplemented('The method or operation is not implemented.');
    },
    
    $2T_1: null,
    
    get_conditionModel: function() {
        return this.$2T_1;
    },
    
    set_conditionModel: function(value) {
        this.$2T_1 = value;
        return value;
    },
    
    $1_1: null,
    
    get_metadataService: function() {
        return this.$1_1;
    },
    
    set_metadataService: function(value) {
        this.$1_1 = value;
        return value;
    },
    
    $H_1: null,
    
    get_viewModelFactory: function() {
        return this.$H_1;
    },
    
    set_viewModelFactory: function(value) {
        this.$H_1 = value;
        return value;
    },
    
    $3j_1: null,
    
    get_childConditionBranchViewModels: function() {
        return this.$3j_1 || (this.$3j_1 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.ViewModels.IConditionBranchViewModel))());
    },
    
    $1G_1: null,
    
    get_validAttributeLogicalNames: function() {
        return this.$1G_1;
    },
    
    set_validAttributeLogicalNames: function(value) {
        this.$1G_1 = value;
        if (!IsNull(this.get_childConditionBranchViewModels())) {
            for (var $v_0 = 0; $v_0 < this.get_childConditionBranchViewModels().get_count(); $v_0++) {
                this.get_childConditionBranchViewModels().get_item($v_0).set_validAttributeLogicalNames(this.$1G_1);
            }
        }
        return value;
    },
    
    $K_1: null,
    
    get_entityLogicalName: function() {
        return this.$K_1;
    },
    
    set_entityLogicalName: function(value) {
        this.$K_1 = value;
        if (!IsNull(this.get_childConditionBranchViewModels())) {
            for (var $v_0 = 0; $v_0 < this.get_childConditionBranchViewModels().get_count(); $v_0++) {
                this.get_childConditionBranchViewModels().get_item($v_0).set_entityLogicalName(this.$K_1);
            }
        }
        return value;
    },
    
    initialize: function() {
        var $v_0 = this.$2T_1.get_conditionBranches();
        for (var $v_1 = 0; $v_1 < $v_0.get_count(); $v_1++) {
            var $v_2 = $v_0.get_item($v_1);
            var $v_3 = this.$H_1.createConditionBranchViewModel(this, this.$1_1, $v_2);
            $v_3.initialize();
            this.get_childConditionBranchViewModels().add($v_3);
        }
    },
    
    deleteConditionBranch: function(conditionBranchViewModel) {
        this.$2T_1.deleteConditionBranch(conditionBranchViewModel.get_conditionBranchModel());
        this.get_childConditionBranchViewModels().remove(conditionBranchViewModel);
    },
    
    validate: function() {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, '');
        for (var $v_1 = 0; $v_1 < this.get_childConditionBranchViewModels().get_count(); $v_1++) {
            $v_0.get_nestedResults().add(this.get_childConditionBranchViewModels().get_item($v_1).validate());
        }
        return $v_0;
    }
}


ProcessConfiguration.ViewModels.SetNextStageModel = function() {
}
ProcessConfiguration.ViewModels.SetNextStageModel.prototype = {
    $1y_0: null,
    
    get_setNextStageStep: function() {
        return this.$1y_0;
    },
    
    set_setNextStageStep: function(value) {
        this.$1y_0 = value;
        return value;
    },
    
    $1M_0: null,
    
    get_nextStage: function() {
        if (!this.$1M_0 && !isNullOrEmptyString(this.$1y_0.get_stageId())) {
            var $v_0 = this.$1y_0.get_stageId();
            this.$1M_0 = this.$C_0.createStageModelForExistingStage($v_0);
        }
        return this.$1M_0;
    },
    
    set_nextStage: function(value) {
        this.$1M_0 = value;
        this.$1y_0.set_stageId(this.$1M_0.get_id());
        return value;
    },
    
    $C_0: null,
    
    get_stepModelFactory: function() {
        return this.$C_0;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_0 = value;
        return value;
    },
    
    get_parentStageId: function() {
        return this.$1y_0.get_parentStageId();
    },
    
    set_parentStageId: function(value) {
        this.$1y_0.set_parentStageId(value);
        return value;
    }
}


ProcessConfiguration.ViewModels.StageModel = function() {
}
ProcessConfiguration.ViewModels.StageModel.prototype = {
    $4i_0: false,
    
    $6T_0: function() {
        this.$33_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.ViewModels.IStepModel))();
        for (var $v_0 = 0; $v_0 < this.$h_0.get_Steps().get_Count(); $v_0++) {
            var $v_1 = this.$h_0.get_Steps().get_item($v_0);
            if (Microsoft.Crm.Workflow.ObjectModel.ConditionStep.isInstanceOfType($v_1)) {
                var $v_2 = $v_1;
                this.$1K_0 = this.$C_0.createConditionModel($v_2);
            }
            if (Microsoft.Crm.Workflow.ObjectModel.StepStep.isInstanceOfType($v_1)) {
                var $v_3 = $v_1;
                var $v_4 = this.$C_0.createStepModel($v_3);
                $v_4.set_parentStage(this);
                this.$33_0.add($v_4);
            }
        }
        this.$4i_0 = true;
    },
    
    $h_0: null,
    
    get_stageStep: function() {
        return this.$h_0;
    },
    
    set_stageStep: function(value) {
        this.$h_0 = value;
        return value;
    },
    
    $1K_0: null,
    
    get_condition: function() {
        if (this.$4i_0) {
            return this.$1K_0;
        }
        this.$6T_0();
        return this.$1K_0;
    },
    
    set_condition: function(value) {
        if (!value && this.$1K_0) {
            this.$h_0.get_Steps().remove(this.$1K_0.get_conditionStep());
            this.$1K_0 = null;
            return value;
        }
        if (value && !this.$1K_0) {
            this.$h_0.get_Steps().add(value.get_conditionStep());
            this.$1K_0 = value;
            for (var $v_0 = 0; $v_0 < this.$1K_0.get_conditionBranches().get_count(); $v_0++) {
                var $v_1 = this.$1K_0.get_conditionBranches().get_item($v_0);
                $v_1.get_setNextStage().set_parentStageId(this.get_id());
            }
        }
        return value;
    },
    
    $1M_0: null,
    
    get_nextStage: function() {
        if (isNullOrEmptyString(this.$h_0.get_nextStageId())) {
            return null;
        }
        if (this.$1M_0) {
            return this.$1M_0;
        }
        this.$1M_0 = this.$C_0.createStageModelForExistingStage(this.$h_0.get_nextStageId());
        return this.$1M_0;
    },
    
    get_id: function() {
        return this.$h_0.get_stageId();
    },
    
    $C_0: null,
    
    get_stepModelFactory: function() {
        return this.$C_0;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_0 = value;
        return value;
    },
    
    get_rootWorkflow: function() {
        return this.$h_0.get_workflow();
    },
    
    $33_0: null,
    
    get_steps: function() {
        if (this.$33_0 && this.$4i_0) {
            return this.$33_0;
        }
        this.$6T_0();
        return this.$33_0;
    },
    
    get_stageName: function() {
        return this.$h_0.get_stepLabels().get_item(0).get_description();
    },
    
    get_category: function() {
        return this.$h_0.get_stageCategory();
    },
    
    get_nextStageId: function() {
        return this.$h_0.get_nextStageId();
    },
    
    set_nextStageId: function(value) {
        this.$h_0.set_nextStageId(value);
        return value;
    },
    
    $K_0: null,
    
    get_entityLogicalName: function() {
        if (this.$K_0) {
            return this.$K_0;
        }
        var $v_0 = this.$h_0.get_parent();
        var $v_1 = $v_0;
        this.$K_0 = $v_1.get_EntityLogicalName();
        return this.$K_0;
    },
    
    set_entityLogicalName: function(value) {
        this.$K_0 = value;
        return value;
    },
    
    get_workflowCategory: function() {
        return this.get_rootWorkflow().get_workflowCategory();
    },
    
    addStep: function(stepModel) {
        this.get_steps().add(stepModel);
        this.$h_0.appendStep(stepModel.get_stepStep());
        stepModel.set_parentStage(this);
    },
    
    deleteCondition: function() {
        if (!IsNull(this.get_condition())) {
            this.set_condition(null);
        }
    },
    
    deleteStep: function(stepModel) {
        this.get_steps().remove(stepModel);
        this.$h_0.remove(stepModel.get_stepStep());
    }
}


ProcessConfiguration.ViewModels.StageViewModel = function() {
    this.$$d_$8g_1 = Function.createDelegate(this, this.$8g_1);
    this.$$d_$8h_1 = Function.createDelegate(this, this.$8h_1);
    this.$$d_$8f_1 = Function.createDelegate(this, this.$8f_1);
    ProcessConfiguration.ViewModels.StageViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.StageViewModel.prototype = {
    
    $95_1: function() {
        this.$15_1 = this.$H_1.createStepListViewModel(this.$S_1.get_steps(), this.$1_1, this);
        this.$15_1.initialize();
        this.$15_1.add_propertyChanged(this.$$d_$8f_1);
        this.$15_1.add_stepDeleting(this.$$d_$8h_1);
        this.$15_1.add_stepAdding(this.$$d_$8g_1);
    },
    
    $5R_1: function($p0) {
        this.$S_1.deleteStep($p0.get_stepModel());
    },
    
    $8g_1: function($p0, $p1) {
        this.$S_1.addStep($p1.$4_1.get_stepModel());
    },
    
    $8h_1: function($p0, $p1) {
        this.$5R_1($p1.$4_1);
    },
    
    $8f_1: function($p0, $p1) {
        switch ($p1.get_propertyName()) {
            case 'ValidAttributeLogicalNames':
                this.$76_1();
                break;
        }
    },
    
    $S_1: null,
    
    get_stageModel: function() {
        return this.$S_1;
    },
    
    set_stageModel: function(value) {
        this.$S_1 = value;
        return value;
    },
    
    $z_1: null,
    
    get_parentStage: function() {
        return this.$z_1;
    },
    
    set_parentStage: function(value) {
        this.$z_1 = value;
        return value;
    },
    
    $41_1: null,
    
    get_firstLevelStagesById: function() {
        return this.$41_1;
    },
    
    set_firstLevelStagesById: function(value) {
        this.$41_1 = value;
        return value;
    },
    
    $K_1: null,
    
    get_entityLogicalName: function() {
        return this.$K_1;
    },
    
    set_entityLogicalName: function(value) {
        this.$K_1 = value;
        if (!IsNull(this.$l_1)) {
            this.$l_1.set_entityLogicalName(this.$K_1);
        }
        return value;
    },
    
    $1_1: null,
    
    get_metadataService: function() {
        return this.$1_1;
    },
    
    set_metadataService: function(value) {
        this.$1_1 = value;
        return value;
    },
    
    $l_1: null,
    
    get_childConditionViewModel: function() {
        return this.$l_1;
    },
    
    set_childConditionViewModel: function(value) {
        this.$l_1 = value;
        if (this.$l_1) {
            this.$S_1.set_condition(this.$l_1.get_conditionModel());
        }
        return value;
    },
    
    $N_1: null,
    
    get_nextStageViewModel: function() {
        return this.$N_1;
    },
    
    set_nextStageViewModel: function(value) {
        this.$N_1 = value;
        if (!this.$N_1) {
            this.$S_1.set_nextStageId('');
        }
        else {
            this.$S_1.set_nextStageId(this.$N_1.get_stageId());
        }
        return value;
    },
    
    get_stageName: function() {
        return this.$S_1.get_stageName();
    },
    
    get_stageCategory: function() {
        return this.$1_1.getStageCategoryLabelByValue(this.$S_1.get_category());
    },
    
    $15_1: null,
    
    get_childStepListViewModel: function() {
        return this.$15_1;
    },
    
    $29_1: null,
    
    get_childRelationshipControlViewModel: function() {
        return this.$29_1;
    },
    
    $56_1: false,
    
    get_isFirstStage: function() {
        return this.$56_1;
    },
    
    set_isFirstStage: function(value) {
        this.$56_1 = value;
        return value;
    },
    
    get_stageId: function() {
        return this.$S_1.get_id();
    },
    
    get_relationships: function() {
        return this.$29_1.get_relationshipsCollection();
    },
    
    initialize: function() {
        var $v_0 = !!this.$l_1;
        if (this.$S_1.get_condition() && !$v_0) {
            this.$l_1 = this.$H_1.createConditionViewModel(this, this.$1_1, this.$S_1.get_condition());
            this.$l_1.initialize();
        }
        var $v_1 = this.$8a_1();
        var $v_2 = !!this.$N_1;
        var $v_3 = !!$v_1 && !!this.$S_1.get_nextStage() && $v_1.get_id() !== this.$S_1.get_nextStage().get_id();
        var $v_4 = !!this.$S_1.get_nextStage() && !$v_1;
        if (!$v_2 && ($v_4 || $v_3) && !((this.$S_1.get_nextStageId()) in this.$41_1)) {
            var $v_5 = this.$S_1.get_nextStage();
            var $v_6 = this.$H_1.createStageViewModel(this.$1_1, $v_5, this.$z_1, $v_5.get_entityLogicalName());
            $v_6.initialize();
            this.$N_1 = $v_6;
        }
        this.$95_1();
        this.$9E_1();
    },
    
    $8a_1: function() {
        var $v_0 = null;
        if (this.$z_1) {
            $v_0 = this.$z_1.get_stageModel().get_nextStage();
        }
        return $v_0;
    },
    
    $9E_1: function() {
        this.$29_1 = this.$H_1.createRelationshipControlViewModel(this);
    },
    
    insertNextStageViewModel: function(nextStageViewModel) {
        if (!this.$N_1) {
            this.$5l_1(nextStageViewModel);
            return;
        }
        if (this.$N_1 && !this.$l_1) {
            var $v_0 = this.$N_1;
            this.$5l_1(nextStageViewModel);
            nextStageViewModel.insertNextStageViewModel($v_0);
            nextStageViewModel.get_stageModel().set_nextStageId($v_0.get_stageId());
            return;
        }
        if (this.$N_1 && this.$l_1) {
            var $v_1 = this.$N_1;
            this.$5l_1(nextStageViewModel);
            nextStageViewModel.insertNextStageViewModel($v_1);
            nextStageViewModel.get_stageModel().set_nextStageId($v_1.get_stageId());
        }
    },
    
    changeEntity: function(entityLogicalName) {
        this.set_entityLogicalName(entityLogicalName);
        this.$15_1.changeEntity(this.$K_1);
    },
    
    $5l_1: function($p0) {
        this.$N_1 = $p0;
        this.$S_1.set_nextStageId(this.$N_1.get_stageId());
    },
    
    $H_1: null,
    
    get_viewModelFactory: function() {
        return this.$H_1;
    },
    
    set_viewModelFactory: function(value) {
        this.$H_1 = value;
        return value;
    },
    
    deleteCondition: function() {
        this.$S_1.deleteCondition();
        this.set_childConditionViewModel(null);
    },
    
    validate: function() {
        var $v_0 = null;
        $v_0 = this.$15_1.validate();
        if (!this.$S_1.get_rootWorkflow().get_workflowBusinessProcessType()) {
            $v_0.get_nestedResults().add(this.$76_1());
            if (this.$29_1) {
                $v_0.get_nestedResults().add(this.$29_1.validate());
            }
        }
        return $v_0;
    },
    
    $76_1: function() {
        if (!this.$l_1) {
            return new ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult(true, '');
        }
        this.$l_1.set_validAttributeLogicalNames(this.$15_1.get_validAttributeLogicalNames());
        return this.$l_1.validate();
    },
    
    $58_1: 0,
    
    get_nestedLevel: function() {
        return this.$58_1;
    },
    
    set_nestedLevel: function(value) {
        this.$58_1 = value;
        return value;
    },
    
    dispose: function() {
        if (!IsNull(this.$15_1)) {
            this.$15_1.remove_propertyChanged(this.$$d_$8f_1);
            this.$15_1 = null;
        }
        this.$29_1 = null;
        this.$l_1 = null;
        this.$N_1 = null;
        this.$S_1 = null;
    },
    
    setPropertyWithoutRaisingEvent: function(propertyName, value) {
        Error.notImplemented('The method or operation is not implemented.');
    }
}


ProcessConfiguration.ViewModels.StepModelFactory = function() {
}
ProcessConfiguration.ViewModels.StepModelFactory.prototype = {
    $2k_0: null,
    
    get_stagesById: function() {
        return this.$2k_0;
    },
    
    set_stagesById: function($p0) {
        this.$2k_0 = $p0;
        return $p0;
    },
    
    $W_0: null,
    
    get_systemControlMetadataModel: function() {
        return this.$W_0;
    },
    
    set_systemControlMetadataModel: function($p0) {
        this.$W_0 = $p0;
        return $p0;
    },
    
    createConditionModel: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.ConditionModel();
        $v_0.set_conditionStep($p0);
        $v_0.set_stepModelFactory(this);
        return $v_0;
    },
    
    createConditionBranchModel: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.ConditionBranchModel();
        $v_0.set_conditionBranchStep($p0);
        $v_0.set_stepModelFactory(this);
        return $v_0;
    },
    
    createSetNextStageModel: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.SetNextStageModel();
        $v_0.set_setNextStageStep($p0);
        $v_0.set_stepModelFactory(this);
        return $v_0;
    },
    
    createStepModel: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.StepModel();
        $v_0.set_stepStep($p0);
        $v_0.set_stepModelFactory(this);
        return $v_0;
    },
    
    createStageModel: function($p0) {
        if (!(($p0.get_stageId()) in this.$2k_0)) {
            this.$2k_0[$p0.get_stageId()] = $p0;
        }
        var $v_0 = new ProcessConfiguration.ViewModels.StageModel();
        $v_0.set_stageStep($p0);
        $v_0.set_stepModelFactory(this);
        return $v_0;
    },
    
    createNewConditionModel: function($p0, $p1) {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.ConditionStep($p0);
        $v_0.set_workflow($p0);
        $v_0.setJQueryFriendlyNameAndId($p0.get_currentStepId());
        $v_0.set_parent($p1);
        this.$5z_0($p0, $v_0);
        var $v_1 = this.createConditionModel($v_0);
        return $v_1;
    },
    
    createNewConditionBranchModel: function($p0, $p1) {
        var $v_0 = this.$5z_0($p0, $p1.get_conditionStep());
        var $v_1 = this.createConditionBranchModel($v_0);
        $p1.get_conditionBranches().add($v_1);
        return $v_1;
    },
    
    $5z_0: function($p0, $p1) {
        var $v_0 = null;
        if (!$p1.get_Steps().get_Count()) {
            $v_0 = new Microsoft.Crm.Workflow.Expressions.PrimitiveExpression($p0, true, 0);
        }
        var $v_1 = new Microsoft.Crm.Workflow.ObjectModel.ConditionBranchStep($p1, $v_0);
        $v_1.set_workflow($p0);
        $v_1.setJQueryFriendlyNameAndId($p0.get_currentStepId());
        $v_1.set_parent($p1);
        $p1.appendStep($v_1);
        var $v_2 = new Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep($p0);
        $v_2.set_workflow($p0);
        $v_2.setJQueryFriendlyNameAndId($p0.get_currentStepId());
        $v_2.set_parent($v_1);
        $v_1.appendStep($v_2);
        return $v_1;
    },
    
    createControlModel: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.ControlModel();
        $v_0.set_controlStep($p0);
        $v_0.set_systemControlMetadataModel(this.$W_0);
        return $v_0;
    },
    
    createNewSetNextStageModel: function($p0, $p1, $p2) {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.SetNextStageStep($p0.get_rootWorkflow());
        $v_0.set_stageId($p1.get_stageId());
        $v_0.set_parentStageId($p2.get_stageId());
        $v_0.set_workflow($p0.get_rootWorkflow());
        $v_0.setJQueryFriendlyNameAndId($p0.get_rootWorkflow().get_currentStepId());
        return this.createSetNextStageModel($v_0);
    },
    
    createNewEntityModel: function($p0, $p1) {
        var $v_0 = new Microsoft.Crm.Workflow.ObjectModel.EntityStep($p1, $p0);
        $v_0.set_workflow($p1);
        $v_0.set_parent($p1);
        $v_0.setJQueryFriendlyNameAndId($p1.get_currentStepId());
        var $v_1 = new ProcessConfiguration.ViewModels.EntityModel();
        $v_1.set_entityStep($v_0);
        return $v_1;
    },
    
    createStageModelForExistingStage: function($p0) {
        var $v_0 = this.createStageModel(this.$2k_0[$p0]);
        return $v_0;
    },
    
    createRelationshipModel: function($p0) {
        var $v_0 = new ProcessConfiguration.Models.RelationshipModel();
        if ($p0) {
            $v_0.set_attributeLogicalName($p0.get_attributeName());
            $v_0.set_relationshipName($p0.get_relationshipName());
            $v_0.set_sourceStageId($p0.get_sourceStageId());
            $v_0.set_targetStageId($p0.get_targetStageId());
        }
        return $v_0;
    }
}


ProcessConfiguration.ViewModels.ViewModelBase = function() {
    this.$3z_0 = new Sys.EventHandlerList();
}
ProcessConfiguration.ViewModels.ViewModelBase.prototype = {
    
    add_propertyChanged: function(value) {
        this.addEventHandler(value, 'PropertyChanged');
    },
    
    remove_propertyChanged: function(value) {
        this.removeEventHandler(value, 'PropertyChanged');
    },
    
    addEventHandler: function(eventHandler, eventName) {
        this.$3z_0.addHandler(eventName, eventHandler);
    },
    
    removeEventHandler: function(eventHandler, eventName) {
        this.$3z_0.removeHandler(eventName, eventHandler);
    },
    
    getHandler: function(eventName) {
        return this.$3z_0.getHandler(eventName);
    },
    
    fireEvent: function(eventName, args) {
        var $v_0 = this.getHandler(eventName);
        if (!$v_0) {
            return;
        }
        $v_0(this, args);
    },
    
    $1V_0: null,
    
    get_parent: function() {
        return this.$1V_0;
    },
    
    set_parent: function(value) {
        this.$1V_0 = value;
        return value;
    }
}


ProcessConfiguration.ViewModels.ViewModelFactory = function() {
}
ProcessConfiguration.ViewModels.ViewModelFactory.prototype = {
    $1i_0: null,
    
    get_firstLevelStages: function() {
        return this.$1i_0;
    },
    
    set_firstLevelStages: function($p0) {
        this.$1i_0 = $p0;
        return $p0;
    },
    
    $3g_0: null,
    
    get_businessProcessFlowVisitor: function() {
        return this.$3g_0;
    },
    
    set_businessProcessFlowVisitor: function($p0) {
        this.$3g_0 = $p0;
        return $p0;
    },
    
    createConditionViewModel: function($p0, $p1, $p2) {
        var $v_0 = $p0;
        var $v_1 = new ProcessConfiguration.ViewModels.ConditionViewModel();
        $v_1.set_parent($p0);
        $v_1.set_conditionModel($p2);
        $v_1.set_viewModelFactory(this);
        $v_1.set_metadataService($p1);
        $v_1.set_entityLogicalName($v_0.get_entityLogicalName());
        return $v_1;
    },
    
    createStageViewModel: function($p0, $p1, $p2, $p3) {
        var $v_0 = new ProcessConfiguration.ViewModels.StageViewModel();
        $v_0.set_stageModel($p1);
        $v_0.set_firstLevelStagesById(this.$1i_0);
        $v_0.set_viewModelFactory(this);
        $v_0.set_metadataService($p0);
        $v_0.set_entityLogicalName($p3);
        $v_0.set_parentStage($p2);
        $v_0.set_nestedLevel(((!$p2) ? 0 : $p2.get_nestedLevel() + 1));
        return $v_0;
    },
    
    createConditionBranchViewModel: function($p0, $p1, $p2) {
        var $v_0 = $p0;
        var $v_1 = new ProcessConfiguration.ViewModels.ConditionBranchViewModel();
        $v_1.set_conditionBranchModel($p2);
        $v_1.set_parent($p0);
        $v_1.set_viewModelFactory(this);
        $v_1.set_metadataService($p1);
        $v_1.set_entityLogicalName($v_0.get_entityLogicalName());
        return $v_1;
    },
    
    createProcessConfigurationViewModel: function($p0, $p1, $p2) {
        var $v_0 = new ProcessConfiguration.ViewModels.ProcessConfigurationViewModel();
        $v_0.set_firstLevelStages(this.$1i_0);
        $v_0.set_businessProcessFlowModel($p0.get_businessProcessFlowModel());
        $v_0.set_metadataService($p1);
        $v_0.set_stepModelFactory($p2);
        $v_0.set_viewModelFactory(this);
        return $v_0;
    },
    
    createStepViewModel: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0;
        if ($p0.get_stepStep().get_workflow().get_workflowBusinessProcessType() === 1) {
            $v_0 = new ProcessConfiguration.ViewModels.PageStepViewModel();
        }
        else {
            $v_0 = new ProcessConfiguration.ViewModels.StepViewModel();
        }
        $v_0.set_stepModel($p0);
        $v_0.set_metadataService($p1);
        $v_0.set_entityMetadataModel($p3);
        $v_0.set_attributeMetadataModelsByLogicalName($p4);
        $v_0.set_canDelete(true);
        return $v_0;
    },
    
    createStepListViewModel: function($p0, $p1, $p2) {
        var $v_0;
        if ($p2.get_stageModel().get_rootWorkflow().get_workflowBusinessProcessType() === 1) {
            $v_0 = new ProcessConfiguration.ViewModels.PageStepListViewModel();
        }
        else {
            $v_0 = new ProcessConfiguration.ViewModels.StepListViewModel();
        }
        $v_0.set_steps($p0);
        $v_0.set_viewModelFactory(this);
        $v_0.set_metadataService($p1);
        $v_0.set_entityLogicalName($p2.get_entityLogicalName());
        $v_0.set_rootWorkflow($p2.get_stageModel().get_rootWorkflow());
        return $v_0;
    },
    
    createRelationshipControlViewModel: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.RelationshipControlViewModel();
        $v_0.set_targetStageId($p0.get_stageId());
        $v_0.set_readOnly(ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly());
        var $v_1 = this.$3g_0.getRelationshipStepsByTargetStage($p0.get_stageId());
        if ($v_1) {
            var $$dict_6 = $v_1;
            for (var $$key_7 in $$dict_6) {
                var $v_2 = { key: $$key_7, value: $$dict_6[$$key_7] };
                var $v_3 = $v_2.value;
                if ($v_3) {
                    var $v_4 = $p0.get_stageModel().get_stepModelFactory().createRelationshipModel($v_3);
                    $v_4.set_targetStageEntityLogicalName($p0.get_entityLogicalName());
                    $v_0.get_relationshipsCollection().add($v_4);
                }
            }
        }
        return $v_0;
    },
    
    createRelationshipPickerViewModel: function($p0) {
        var $v_0 = new ProcessConfiguration.ViewModels.RelationshipPickerViewModel();
        $v_0.set_allAvailableRelationships($p0.get_allAvailableRelationships());
        $v_0.set_selectedRelationships($p0.get_selectedRelationships());
        $v_0.set_targetStageId($p0.get_targetStageId());
        $v_0.set_viewModelFactory(this);
        $v_0.createEnumsForRelationships();
        return $v_0;
    },
    
    createRelationshipPickerPicklistViewModel: function($p0, $p1, $p2, $p3) {
        var $v_0 = new ProcessConfiguration.ViewModels.RelationshipPickerPicklistViewModel();
        $v_0.set_availableRelationShips($p0);
        $v_0.set_sourceStageId($p1);
        $v_0.set_defaultEnumOptions($p2);
        $v_0.set_enumOptions($p3);
        return $v_0;
    }
}


ProcessConfiguration.ViewModels.RelationshipPickerViewModel = function() {
    ProcessConfiguration.ViewModels.RelationshipPickerViewModel.initializeBase(this);
    this.$2e_1 = {};
}
ProcessConfiguration.ViewModels.RelationshipPickerViewModel.prototype = {
    $5A_1: 0,
    
    get_picklistCount: function() {
        return this.$5A_1;
    },
    
    $2e_1: null,
    
    get_picklistViewModelDictionary: function() {
        return this.$2e_1;
    },
    
    $1d_1: null,
    
    get_allAvailableRelationships: function() {
        return this.$1d_1;
    },
    
    set_allAvailableRelationships: function($p0) {
        this.$1d_1 = $p0;
        return $p0;
    },
    
    $1j_1: null,
    
    get_selectedRelationships: function() {
        return this.$1j_1;
    },
    
    set_selectedRelationships: function($p0) {
        this.$1j_1 = $p0;
        return $p0;
    },
    
    dispose: function() {
        this.$1d_1 = null;
        this.$1j_1 = null;
    },
    
    $1b_1: null,
    
    get_targetStageId: function() {
        return this.$1b_1;
    },
    
    set_targetStageId: function($p0) {
        this.$1b_1 = $p0;
        return $p0;
    },
    
    $4B_1: 0,
    
    get_numberOfInvalidRelationships: function() {
        return this.$4B_1;
    },
    
    set_numberOfInvalidRelationships: function($p0) {
        this.$4B_1 = $p0;
        return $p0;
    },
    
    checkForInvalidExistingRelationships: function() {
        var $v_0 = 0;
        for (var $$arr_1 = this.$1j_1.get_items(), $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_1 = $$arr_1[$$idx_3];
            if (!$v_1.isValid(this.$1d_1)) {
                $v_0++;
            }
        }
        this.$4B_1 = $v_0;
    },
    
    getDefaultRelationshiupEnum: function($p0) {
        var $v_0 = 0;
        if ((($p0) in this.$2e_1)) {
            var $v_1 = this.$2e_1[$p0.toString()];
            $v_0 = $v_1.$3n_0;
        }
        return $v_0;
    },
    
    createEnumsForRelationships: function() {
        var $v_0 = 0;
        var $$dict_C = this.$1d_1;
        for (var $$key_D in $$dict_C) {
            var $v_1 = { key: $$key_D, value: $$dict_C[$$key_D] };
            var $v_2 = $v_1.value;
            if ($v_2.get_count() > 0) {
                var $v_3 = new Array(0);
                var $v_4 = 0;
                var $v_5 = new Mscrm.EnumOptionJsonWrapper();
                $v_5.Value = 0;
                $v_5.Label = window.LOCID_PROCESS_DIALOG_NONE;
                Array.add($v_3, $v_5);
                for (var $v_7 = 0; $v_7 < $v_2.get_count(); $v_7++) {
                    $v_5 = new Mscrm.EnumOptionJsonWrapper();
                    $v_5.Value = $v_7 + 1;
                    $v_5.Label = $v_2.get_item($v_7).get_attributeDisplayName();
                    Array.add($v_3, $v_5);
                    for (var $$arr_7 = this.$1j_1.get_items(), $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
                        var $v_8 = $$arr_7[$$idx_9];
                        if ($v_8.get_attributeLogicalName() === $v_2.get_item($v_7).get_attributeLogicalName() && $v_8.get_relationshipName() === $v_2.get_item($v_7).get_relationshipName() && $v_8.get_sourceStageId() === $v_2.get_item($v_7).get_sourceStageId() && $v_8.get_targetStageId() === $v_2.get_item($v_7).get_targetStageId() && $v_8.get_targetStageEntityLogicalName() === $v_2.get_item($v_7).get_targetStageEntityLogicalName()) {
                            $v_4 = $v_7 + 1;
                        }
                    }
                }
                var $v_6 = this.$H_1.createRelationshipPickerPicklistViewModel($v_2, $v_1.key, $v_4, $v_3);
                this.$2e_1[$v_0.toString()] = $v_6;
                $v_0++;
            }
        }
        this.$5A_1 = $v_0;
    },
    
    $H_1: null,
    
    get_viewModelFactory: function() {
        return this.$H_1;
    },
    
    set_viewModelFactory: function($p0) {
        this.$H_1 = $p0;
        return $p0;
    },
    
    nonE_VALUE: 0,
    
    setPropertyWithoutRaisingEvent: function($p0, $p1) {
        Error.notImplemented('The method or operation is not implemented.');
    }
}


ProcessConfiguration.ViewModels.ProcessConfigurationViewModel = function() {
    ProcessConfiguration.ViewModels.ProcessConfigurationViewModel.initializeBase(this);
}
ProcessConfiguration.ViewModels.ProcessConfigurationViewModel.prototype = {
    
    dispose: function() {
        Error.notImplemented('The method or operation is not implemented.');
    },
    
    setPropertyWithoutRaisingEvent: function(propertyName, value) {
        Error.notImplemented('The method or operation is not implemented.');
    },
    
    $1i_1: null,
    
    get_firstLevelStages: function() {
        return this.$1i_1;
    },
    
    set_firstLevelStages: function(value) {
        this.$1i_1 = value;
        return value;
    },
    
    $5X_1: null,
    
    get_firstLevelStageViewModels: function() {
        return this.$5X_1 || (this.$5X_1 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.ViewModels.IStageViewModel))());
    },
    
    initialize: function() {
        this.$4E_1 = this.$1_1.get_entityMetadata();
        this.$4F_1 = this.$1_1.get_entityRelationshipMetadata();
        var $v_0 = null;
        var $$dict_6 = this.$1i_1;
        for (var $$key_7 in $$dict_6) {
            var $v_2 = { key: $$key_7, value: $$dict_6[$$key_7] };
            var $v_3 = $v_2.value;
            var $v_4 = $v_3;
            var $v_5 = this.$C_1.createStageModelForExistingStage($v_4.get_stageId());
            var $v_6 = this.$H_1.createStageViewModel(this.$1_1, $v_5, null, $v_5.get_entityLogicalName());
            if ($v_0) {
                $v_0.set_nextStageViewModel($v_6);
            }
            $v_0 = $v_6;
            $v_6.initialize();
            this.get_firstLevelStageViewModels().add($v_6);
        }
        var $v_1 = this.get_firstLevelStageViewModels().first();
        $v_1.set_isFirstStage(true);
    },
    
    $C_1: null,
    
    get_stepModelFactory: function() {
        return this.$C_1;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_1 = value;
        return value;
    },
    
    $1_1: null,
    
    get_metadataService: function() {
        return this.$1_1;
    },
    
    set_metadataService: function(value) {
        this.$1_1 = value;
        return value;
    },
    
    $H_1: null,
    
    get_viewModelFactory: function() {
        return this.$H_1;
    },
    
    set_viewModelFactory: function(value) {
        this.$H_1 = value;
        return value;
    },
    
    $4E_1: null,
    
    get_primaryEntityMetadata: function() {
        return this.$4E_1;
    },
    
    set_primaryEntityMetadata: function(value) {
        this.$4E_1 = value;
        return value;
    },
    
    $4F_1: null,
    
    get_primaryEntityRelationshipMetadata: function() {
        return this.$4F_1;
    },
    
    set_primaryEntityRelationshipMetadata: function(value) {
        this.$4F_1 = value;
        return value;
    },
    
    $1e_1: null,
    
    get_businessProcessFlowModel: function() {
        return this.$1e_1;
    },
    
    set_businessProcessFlowModel: function(value) {
        this.$1e_1 = value;
        return value;
    },
    
    get_businessProcessFlowModelJson: function() {
        return (IsNull(this.$1e_1)) ? '' : this.$1e_1.toJson();
    }
}


Type.registerNamespace('ProcessConfiguration.View');

ProcessConfiguration.View.IButtonView = function() {}
ProcessConfiguration.View.IButtonView.registerInterface('ProcessConfiguration.View.IButtonView');


ProcessConfiguration.View.IRelationshipControlView = function() {}
ProcessConfiguration.View.IRelationshipControlView.registerInterface('ProcessConfiguration.View.IRelationshipControlView');


ProcessConfiguration.View.INavigationInfo = function() {}
ProcessConfiguration.View.INavigationInfo.registerInterface('ProcessConfiguration.View.INavigationInfo');


ProcessConfiguration.View.IProcessControlStepViewAdapter = function() {}
ProcessConfiguration.View.IProcessControlStepViewAdapter.registerInterface('ProcessConfiguration.View.IProcessControlStepViewAdapter');


ProcessConfiguration.View.IStepFieldControlView = function() {}
ProcessConfiguration.View.IStepFieldControlView.registerInterface('ProcessConfiguration.View.IStepFieldControlView');


ProcessConfiguration.View.IStepListView = function() {}
ProcessConfiguration.View.IStepListView.registerInterface('ProcessConfiguration.View.IStepListView');


ProcessConfiguration.View.ILegacyProcessControlView = function() {}
ProcessConfiguration.View.ILegacyProcessControlView.registerInterface('ProcessConfiguration.View.ILegacyProcessControlView');


ProcessConfiguration.View.IViewFactory = function() {}
ProcessConfiguration.View.IViewFactory.registerInterface('ProcessConfiguration.View.IViewFactory');


ProcessConfiguration.View.ICompositeView = function() {}
ProcessConfiguration.View.ICompositeView.registerInterface('ProcessConfiguration.View.ICompositeView');


ProcessConfiguration.View.IProcessControlViewAdapter = function() {}
ProcessConfiguration.View.IProcessControlViewAdapter.registerInterface('ProcessConfiguration.View.IProcessControlViewAdapter');


ProcessConfiguration.View.IProcessControlStageViewAdapter = function() {}
ProcessConfiguration.View.IProcessControlStageViewAdapter.registerInterface('ProcessConfiguration.View.IProcessControlStageViewAdapter');


ProcessConfiguration.View.IProcessConfigurationView = function() {}
ProcessConfiguration.View.IProcessConfigurationView.registerInterface('ProcessConfiguration.View.IProcessConfigurationView');


ProcessConfiguration.View.IViewAdapterFactory = function() {}
ProcessConfiguration.View.IViewAdapterFactory.registerInterface('ProcessConfiguration.View.IViewAdapterFactory');


ProcessConfiguration.View.IStageView = function() {}
ProcessConfiguration.View.IStageView.registerInterface('ProcessConfiguration.View.IStageView');


ProcessConfiguration.View.IConditionView = function() {}
ProcessConfiguration.View.IConditionView.registerInterface('ProcessConfiguration.View.IConditionView');


ProcessConfiguration.View.IConditionBranchView = function() {}
ProcessConfiguration.View.IConditionBranchView.registerInterface('ProcessConfiguration.View.IConditionBranchView');


ProcessConfiguration.View.IRelationshipPickerView = function() {}
ProcessConfiguration.View.IRelationshipPickerView.registerInterface('ProcessConfiguration.View.IRelationshipPickerView');


ProcessConfiguration.View.ButtonView = function() {
    this.$$d_$7i_1 = Function.createDelegate(this, this.$7i_1);
    ProcessConfiguration.View.ButtonView.initializeBase(this);
}
ProcessConfiguration.View.ButtonView.prototype = {
    
    $7i_1: function($p0) {
        var $v_0 = this.getHandler('click');
        if (!$v_0) {
            return;
        }
        var $v_1 = new ProcessConfiguration.View.ButtonClickedEventArgs();
        $v_0(this, $v_1);
    },
    
    dispose: function() {
        if (!this.$B_1) {
            return;
        }
        this.$B_1.remove(null);
        this.$B_1 = null;
    },
    
    initialize: function() {
        this.$B_1.click(this.$$d_$7i_1);
    },
    
    add_clicked: function(value) {
        this.addEventHandler('click', value);
    },
    
    remove_clicked: function(value) {
        this.removeEventHandler('click', value);
    },
    
    $B_1: null,
    
    get_element: function() {
        return this.$B_1;
    },
    
    set_element: function(value) {
        this.$B_1 = value;
        return value;
    },
    
    $4U_1: false,
    
    get_visible: function() {
        return this.$4U_1;
    },
    
    set_visible: function(value) {
        this.$4U_1 = value;
        if (this.$4U_1) {
            this.$B_1.removeClass('hidden');
        }
        else {
            this.$B_1.addClass('hidden');
        }
        return value;
    },
    
    $2y_1: null,
    
    get_label: function() {
        if (isNullOrEmptyString(this.$2y_1)) {
            var $v_0 = this.$B_1.children('label');
            if (!IsNull($v_0) && $v_0.get_length() === 1) {
                this.$2y_1 = $v_0.get_text();
            }
        }
        return this.$2y_1;
    },
    
    set_label: function(value) {
        this.$2y_1 = value;
        var $v_0 = this.$B_1.children('label');
        if (!IsNull($v_0) && $v_0.get_length() === 1) {
            $v_0.set_text(this.$2y_1);
            $v_0.attribute('title', $v_0.get_text());
        }
        return value;
    }
}


ProcessConfiguration.View.ButtonClickedEventArgs = function() {
    ProcessConfiguration.View.ButtonClickedEventArgs.initializeBase(this);
}


ProcessConfiguration.View.PageView = function() {
    ProcessConfiguration.View.PageView.initializeBase(this);
}
ProcessConfiguration.View.PageView.prototype = {
    
    initialize: function() {
        this.initializeStageViewBase();
        if (this.get_viewModel().get_childConditionViewModel() && !this.$D_1) {
            this.initializeConditionView();
        }
        if (this.get_viewModel().get_nextStageViewModel() && !this.$G_1 && !((this.get_viewModel().get_nextStageViewModel().get_stageId()) in this.get_viewModel().get_firstLevelStagesById())) {
            this.initializeNextStageView();
        }
        this.initializeProcessControlStageViewAdapter();
        this.initializeStepListView();
        this.$9B_2();
        this.initializeAddStageButtonView();
        this.initializeDeleteStageButtonView();
        this.initializeAddBranchButtonView();
    },
    
    $9B_2: function() {
        var $v_0 = this.get_element().find('.stage-pageLayout');
        var $$t_3 = this;
        $v_0.bind('change', function($p1_0) {
            var $v_1 = $$t_3.$0_0.fromElement($p1_0.target).get_value();
            ($$t_3.get_viewModel().get_stageModel().get_stageStep()).set_pageLayoutId($v_1);
        });
    },
    
    getInsertStageTextKey: function() {
        return window.LOCID_PROCESS_INSERTPAGETEXTKEY;
    },
    
    getInsertStageAfterBranchKey: function() {
        return window.LOCID_PROCESS_PAGEAFTERBRANCH;
    }
}


ProcessConfiguration.View.ProcessControlPageStepViewAdapter = function() {
    this.$$d_$8l_2 = Function.createDelegate(this, this.$8l_2);
    ProcessConfiguration.View.ProcessControlPageStepViewAdapter.initializeBase(this);
}
ProcessConfiguration.View.ProcessControlPageStepViewAdapter.prototype = {
    $4N_2: null,
    
    initialize: function() {
        this.initializeProcessControlStepViewBase();
        this.initializeProcessControlStepView();
        this.$9S_2();
        this.initializeStepFieldControlView();
        this.initializeDeleteStepButtonView();
        (this.get_viewModel()).add_sourceLogicalNameChanged(this.$$d_$8l_2);
        this.get_viewModel().add_attributeValidated(this.$$d_handleAttributeValidated);
        this.get_viewModel().add_propertyChanged(this.$$d_handlePropertyChanged);
        this.get_viewModel().add_deleting(this.$$d_handleStepDeleting);
        this.initializeStepHoverBehavior();
        this.initializeStepFocusBehavior();
    },
    
    $9S_2: function() {
        var $v_0 = String.format('{0}_s', this.$L_1.getAttribute('id'));
        var $v_1 = String.format('#{0}', $v_0);
        var $v_2 = this.$L_1.find($v_1);
        this.$4N_2 = this.$M_1.createStepSourceControlView($v_2, this.get_viewModel(), this._stepView);
        this.$4N_2.initialize();
        this.$4N_2.renderView();
    },
    
    $8l_2: function($p0, $p1) {
        if ($p1.$1u_1 === $p1.$1v_1 && $p1.$2a_2 === $p1.$2c_2 && $p1.$2b_2 === $p1.$2d_2) {
            return;
        }
        var $v_0 = this._fieldControlView;
        if ($p1.$1u_1 !== $p1.$1v_1 || $p1.$2a_2 !== $p1.$2c_2) {
            $v_0.clearValidation();
            $v_0.updateEntityOptionsList(true);
        }
        else if ($p1.$2b_2 !== $p1.$2d_2) {
            $v_0.set_$6o_5(-1);
        }
    }
}


ProcessConfiguration.View.ProcessEditorErrorContainerProvider = function() {
}
ProcessConfiguration.View.ProcessEditorErrorContainerProvider.prototype = {
    
    getDisplayContainer: function($p0) {
        return this.$38_0.get_jQueryObject();
    },
    
    $38_0: null,
    
    get_containerElement: function() {
        return this.$38_0;
    },
    
    set_containerElement: function($p0) {
        this.$38_0 = $p0;
        return $p0;
    }
}


ProcessConfiguration.View.ProcessControlStageViewAdapter = function() {
    ProcessConfiguration.View.ProcessControlStageViewAdapter.initializeBase(this);
}
ProcessConfiguration.View.ProcessControlStageViewAdapter.prototype = {
    $1P_1: null,
    $3J_1: null,
    $2j_1: null,
    $12_1: null,
    
    get_$a_1: function() {
        if (this.$12_1) {
            return this.$12_1;
        }
        this.$12_1 = this.$b_0;
        return this.$12_1;
    },
    
    $9D_1: function() {
        this.$1P_1 = this.$2_1.createProcessControlStageView(this, this.$B_1, this.get_$a_1());
        this.$1P_1.renderView();
    },
    
    $9N_1: function() {
        this.$3J_1 = this.$J_1.createStageHoverBehaviorAdapter(this.$B_1, this);
        this.$3J_1.initialize();
    },
    
    $9M_1: function() {
        this.$2j_1 = this.$J_1.createStageFocusBehaviorAdapter(this.$B_1, this);
        this.$2j_1.initialize();
    },
    
    dispose: function() {
        this.$3J_1.dispose();
        this.$3J_1 = null;
        this.$2j_1.dispose();
        this.$2j_1 = null;
    },
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        this.$9D_1();
        this.$9N_1();
        this.$9M_1();
    },
    
    $2_1: null,
    
    get_viewFactory: function() {
        return this.$2_1;
    },
    
    set_viewFactory: function(value) {
        this.$2_1 = value;
        return value;
    },
    
    $B_1: null,
    
    get_element: function() {
        return this.$B_1;
    },
    
    set_element: function(value) {
        this.$B_1 = value;
        return value;
    },
    
    get_instance: function() {
        return this.$1P_1;
    },
    
    $J_1: null,
    
    get_behaviorsFactory: function() {
        return this.$J_1;
    },
    
    set_behaviorsFactory: function(value) {
        this.$J_1 = value;
        return value;
    },
    
    get_stageFocusBehaviorAdapter: function() {
        return this.$2j_1;
    },
    
    validate: function() {
        this.$1P_1.validate();
    }
}


ProcessConfiguration.View.ConditionBranchView = function() {
    this.$$d_$5q_1 = Function.createDelegate(this, this.$5q_1);
    ProcessConfiguration.View.ConditionBranchView.initializeBase(this);
}
ProcessConfiguration.View.ConditionBranchView.prototype = {
    $f_1: null,
    $16_1: null,
    
    get_conditionsSectionsView: function() {
        return this.$16_1;
    },
    
    $3_1: null,
    
    get_viewModel: function() {
        if (this.$3_1) {
            return this.$3_1;
        }
        this.$3_1 = this.$b_0;
        return this.$3_1;
    },
    
    $5q_1: function($p0, $p1) {
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            var $v_0 = this.get_viewModel().get_metadataService();
            var $v_1 = this.$p_1.createEmptyStageData(this.get_viewModel().get_conditionBranchModel().get_rootWorkflow());
            var $v_2 = this.get_viewModel().get_conditionBranchModel().get_stepModelFactory().createStageModel($v_1);
            var $v_3 = this.get_viewModel().get_viewModelFactory().createStageViewModel($v_0, $v_2, this.get_viewModel().get_parentStageViewModel(), this.get_viewModel().get_entityLogicalName());
            this.get_viewModel().insertNextStageViewModel($v_3);
            $v_3.initialize();
            var $v_4 = this.$p_1.buildStageElement($v_3);
            this.$16_1.get_element().after($v_4);
            var $v_5 = this.$M_1.createStageView($v_3);
            $v_5.set_previousNavigationInfo(this);
            this.set_nextStageView($v_5);
            $v_5.initialize();
        }
    },
    
    get_$7K_1: function() {
        var $v_0 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.View.IStageView))();
        var $v_1 = this.$G_1;
        var $v_2 = this.get_nextStageViewModel();
        var $v_3 = this.get_viewModel().get_viewModelFactory().get_firstLevelStages();
        while ($v_1 && $v_2 && !(($v_2.get_stageId()) in $v_3)) {
            $v_0.add($v_1);
            $v_2 = $v_1.get_nextStageViewModel();
            $v_1 = $v_1.get_nextStageView();
        }
        return $v_0;
    },
    
    dispose: function() {
        if (!IsNull(this.$16_1)) {
            this.$16_1.set_deleteHandler(null);
            this.$16_1.dispose();
            this.$16_1 = null;
        }
        if (!IsNull(this.$f_1)) {
            this.$f_1.remove_clicked(this.$$d_$5q_1);
            this.$f_1.dispose();
            this.$f_1 = null;
        }
        var $v_0 = this.get_$7K_1();
        if (!IsNull($v_0)) {
            for (var $v_1 = $v_0.get_count() - 1; $v_1 >= 0; $v_1--) {
                $v_0.get_item($v_1).dispose();
            }
            this.$G_1 = null;
        }
        if (!IsNull(this.$3_1)) {
            this.$3_1.dispose();
            this.$3_1 = null;
        }
    },
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        var $v_0 = String.format('{0}_section', 'condition');
        var $v_1 = String.format('{0}_{1}', this.get_viewModel().get_conditionBranchStepSectionViewModel().get_stepId(), $v_0);
        this.$16_1 = new Mscrm.BusinessRules.Views.BranchingConditionsSectionsView(this.$0_0.selectElement('#' + $v_1));
        this.$16_1.set_dataContext(this.get_viewModel().get_conditionBranchStepSectionViewModel().get_conditions());
        this.$16_1.initialize();
        this.$16_1.set_parent(this);
        if (this.get_viewModel().get_nextStageViewModel()) {
            this.$G_1 = this.$M_1.createStageView(this.get_viewModel().get_nextStageViewModel());
            this.$G_1.set_previousNavigationInfo(this);
            this.$G_1.initialize();
        }
        var $v_2 = this.$16_1.get_element().find('.button.add-stage');
        this.$f_1 = this.$M_1.createButtonView($v_2);
        this.$f_1.initialize();
        this.$f_1.add_clicked(this.$$d_$5q_1);
    },
    
    $M_1: null,
    
    get_viewFactory: function() {
        return this.$M_1;
    },
    
    set_viewFactory: function(value) {
        this.$M_1 = value;
        return value;
    },
    
    $L_1: null,
    
    get_element: function() {
        return this.$L_1;
    },
    
    set_element: function(value) {
        this.$L_1 = value;
        return value;
    },
    
    $p_1: null,
    
    get_stageBuilder: function() {
        return this.$p_1;
    },
    
    set_stageBuilder: function(value) {
        this.$p_1 = value;
        return value;
    },
    
    insertNextStageViewModel: function(nextStageViewModel) {
        this.get_viewModel().insertNextStageViewModel(nextStageViewModel);
    },
    
    get_nextStageViewModel: function() {
        return this.get_viewModel().get_nextStageViewModel();
    },
    
    set_nextStageViewModel: function(value) {
        this.get_viewModel().set_nextStageViewModel(value);
        return value;
    },
    
    $G_1: null,
    
    get_nextStageView: function() {
        return this.$G_1;
    },
    
    set_nextStageView: function(value) {
        if (IsNull(value)) {
            this.$G_1 = null;
            return value;
        }
        if (!this.$G_1) {
            this.$G_1 = value;
        }
        else {
            var $v_0 = this.$G_1;
            this.$G_1 = value;
            value.set_nextStageView($v_0);
        }
        this.$G_1.set_previousNavigationInfo(this);
        return value;
    },
    
    $10_1: null,
    
    get_previousNavigationInfo: function() {
        return this.$10_1;
    },
    
    set_previousNavigationInfo: function(value) {
        this.$10_1 = value;
        return value;
    },
    
    get_conditionBranchDisplayMode: function() {
        return (this.$16_1.get_dataContext()).get_conditionBranchDisplayMode();
    }
}


ProcessConfiguration.View.ConditionView = function() {
    this.$$d_deleteConditionBranchHandler = Function.createDelegate(this, this.deleteConditionBranchHandler);
    ProcessConfiguration.View.ConditionView.initializeBase(this);
}
ProcessConfiguration.View.ConditionView.prototype = {
    
    add_conditionDelete: function(value) {
        this.addEventHandler('ConditionDeleteEvent', value);
    },
    
    remove_conditionDelete: function(value) {
        this.removeEventHandler('ConditionDeleteEvent', value);
    },
    
    $3_1: null,
    
    get_$a_1: function() {
        if (this.$3_1) {
            return this.$3_1;
        }
        this.$3_1 = this.$b_0;
        return this.$3_1;
    },
    
    dispose: function() {
        if (!IsNull(this.$2A_1)) {
            for (var $v_0 = this.$2A_1.get_count() - 1; $v_0 >= 0; $v_0--) {
                this.$2A_1.get_item($v_0).dispose();
                this.$2A_1.removeAt($v_0);
            }
        }
        if (!IsNull(this.$3_1)) {
            this.$3_1.dispose();
            this.$3_1 = null;
        }
    },
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        var $v_0 = String.format('.{0}', 'conditionbranch');
        var $v_1 = this.$B_1.children($v_0);
        for (var $v_2 = 0; $v_2 < this.get_$a_1().get_childConditionBranchViewModels().get_count(); $v_2++) {
            var $v_3 = this.get_$a_1().get_childConditionBranchViewModels().get_item($v_2);
            var $v_4 = this.$0_0.fromElement($v_1.get_item($v_2));
            var $v_5 = this.$2_1.createConditionBranchView($v_4, $v_3);
            $v_5.initialize();
            $v_5.get_conditionsSectionsView().set_deleteHandler(this.$$d_deleteConditionBranchHandler);
            $v_5.set_parent(this);
            this.get_children().add($v_5);
        }
    },
    
    $2_1: null,
    
    get_viewFactory: function() {
        return this.$2_1;
    },
    
    set_viewFactory: function(value) {
        this.$2_1 = value;
        return value;
    },
    
    $B_1: null,
    
    get_element: function() {
        return this.$B_1;
    },
    
    set_element: function(value) {
        this.$B_1 = value;
        return value;
    },
    
    deleteConditionBranchHandler: function(branchingConditionBranchView) {
        var $v_0 = branchingConditionBranchView.get_parent();
        this.deleteConditionBranch($v_0);
    },
    
    deleteConditionBranch: function(conditionBranchView) {
        this.get_$a_1().deleteConditionBranch(conditionBranchView.get_viewModel());
        conditionBranchView.get_element().remove(null);
        conditionBranchView.dispose();
        this.get_children().remove(conditionBranchView);
        if (!this.get_children().get_count()) {
            this.fireEvent('ConditionDeleteEvent', null);
        }
        else {
            var $v_0 = (this.get_children().get_item(0)).get_conditionsSectionsView();
            var $v_1 = $v_0.get_dataContext();
            if ($v_1.get_conditionBranchDisplayMode() === 1) {
                $v_1.set_conditionBranchDisplayMode(0);
                ($v_0.get_expressions().get_item(0)).updateReadModeExpression();
            }
            else if ($v_1.get_conditionBranchDisplayMode() === 2) {
                $v_1.set_conditionBranchDisplayMode(0);
                var $v_2 = $v_0.get_expressions().get_item(0);
                $v_2.set_isNewCreated(true);
                $v_2.set_isPromoteToIf(true);
                $v_2.updateReadModeExpression();
                $v_2.get_inlineView().goToEditState();
            }
        }
    },
    
    get_hasElseConditionBranch: function() {
        if (this.get_children().get_count() > 0) {
            var $v_0 = this.get_children().last();
            return $v_0.get_conditionBranchDisplayMode() === 2;
        }
        return false;
    },
    
    $2A_1: null,
    
    get_children: function() {
        return this.$2A_1 || (this.$2A_1 = new (Sales.Common.Framework.List$1.$$(Mscrm.BusinessRules.Views.IView))());
    }
}


ProcessConfiguration.View.ProcessControlStepViewAdapter = function() {
    this.$$d_$7y_1 = Function.createDelegate(this, this.$7y_1);
    this.$$d_handleStepDeleting = Function.createDelegate(this, this.handleStepDeleting);
    this.$$d_handlePropertyChanged = Function.createDelegate(this, this.handlePropertyChanged);
    this.$$d_handleAttributeValidated = Function.createDelegate(this, this.handleAttributeValidated);
    ProcessConfiguration.View.ProcessControlStepViewAdapter.initializeBase(this);
}
ProcessConfiguration.View.ProcessControlStepViewAdapter.prototype = {
    _fieldControlView: null,
    $1g_1: null,
    _stepView: null,
    $3K_1: null,
    $1N_1: null,
    
    get_parentStageView: function() {
        this.$1N_1 = this.$1V_0;
        return this.$1N_1;
    },
    
    $3_1: null,
    
    get_viewModel: function() {
        if (this.$3_1) {
            return this.$3_1;
        }
        this.$3_1 = this.$b_0;
        return this.$3_1;
    },
    
    handleAttributeValidated: function(sender, args) {
        if (this._fieldControlView.tryAddAndShowValidationResult(args.$1X_1)) {
            this._fieldControlView.clearReadValue();
        }
    },
    
    handlePropertyChanged: function(sender, e) {
        switch (e.get_propertyName()) {
            case 'EntityMetadataModel':
                this.$8i_1();
                break;
            case 'CanDelete':
                this.$8e_1();
                break;
        }
    },
    
    $8e_1: function() {
        this.$1g_1.set_visible(this.get_viewModel().get_canDelete());
    },
    
    $7y_1: function($p0, $p1) {
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.get_viewModel().deleteStep();
        }
    },
    
    $5R_1: function() {
        var $v_0 = new ProcessConfiguration.ViewModels.StepEventArgs();
        $v_0.$2H_1 = this;
        this.fireEvent('Deleting', $v_0);
        var $v_1 = null;
        if (!this.$o_1 && this.$r_1) {
            this.$r_1.set_previousStepViewAdapter(null);
            $v_1 = this.$r_1;
        }
        else if (!this.$r_1 && this.$o_1) {
            this.$o_1.set_nextStepViewAdapter(null);
            $v_1 = this.$o_1;
        }
        else if (this.$r_1 && this.$o_1) {
            this.$o_1.set_nextStepViewAdapter(this.$r_1);
            this.$r_1.set_previousStepViewAdapter(this.$o_1);
            $v_1 = this.$r_1;
        }
        this.dispose();
        var $$t_2 = this;
        window.setTimeout(function() {
            $v_1.get_element().setFocus();
        }, 100);
    },
    
    $8i_1: function() {
        this._fieldControlView.clearValidation();
        var $v_0 = this._fieldControlView.get_viewModel();
        var $v_1 = this._fieldControlView.getEntityOptionsList();
        $v_0.setOptions($v_1);
    },
    
    handleStepDeleting: function(sender, stepEventArgs) {
        this.$5R_1();
    },
    
    initializeProcessControlStepView: function() {
        this._stepView = this.$M_1.createProcessControlStepView(this.$L_1, this.get_viewModel(), this);
        this._stepView.initialize();
        this._stepView.renderView();
    },
    
    initializeStepFieldControlView: function() {
        var $v_0 = String.format('{0}_f', this.$L_1.getAttribute('id'));
        var $v_1 = String.format('#{0}', $v_0);
        var $v_2 = this.$L_1.find($v_1);
        this._fieldControlView = this.$M_1.createStepFieldControlView($v_2, this.get_viewModel(), this._stepView);
        this._fieldControlView.initialize();
        this._fieldControlView.renderView();
    },
    
    initializeDeleteStepButtonView: function() {
        var $v_0 = this.$L_1.find('.button.delete-step');
        this.$1g_1 = this.$M_1.createButtonView($v_0);
        this.$1g_1.initialize();
        this.$1g_1.add_clicked(this.$$d_$7y_1);
        this.$1g_1.set_visible(this.get_viewModel().get_canDelete());
    },
    
    initializeStepHoverBehavior: function() {
        this.$3K_1 = this.$J_1.createStepHoverBehaviorAdapter(this.$L_1, this, this.get_parentStageView());
        this.$3K_1.initialize();
    },
    
    initializeStepFocusBehavior: function() {
        this.$2l_1 = this.$J_1.createStepFocusBehaviorAdapter(this.$L_1, this, this.get_parentStageView());
        this.$2l_1.initialize();
    },
    
    dispose: function() {
        this.get_viewModel().remove_attributeValidated(this.$$d_handleAttributeValidated);
        this.get_viewModel().remove_propertyChanged(this.$$d_handlePropertyChanged);
        this.get_viewModel().remove_deleting(this.$$d_handleStepDeleting);
        this.$3_1 = null;
        this.$b_0 = null;
        this._stepView.dispose();
        this._stepView = null;
        this._fieldControlView.dispose();
        this._fieldControlView = null;
        this.$1g_1.remove_clicked(this.$$d_$7y_1);
        this.$1g_1.dispose();
        this.$1g_1 = null;
        this.$L_1.remove(null);
        this.$L_1 = null;
        this.$0_0 = null;
        this.$M_1 = null;
        this.$2l_1.dispose();
        this.$2l_1 = null;
        this.$3K_1.dispose();
        this.$3K_1 = null;
    },
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        this.initializeProcessControlStepView();
        this.initializeStepFieldControlView();
        this.initializeDeleteStepButtonView();
        this.get_viewModel().add_attributeValidated(this.$$d_handleAttributeValidated);
        this.get_viewModel().add_propertyChanged(this.$$d_handlePropertyChanged);
        this.get_viewModel().add_deleting(this.$$d_handleStepDeleting);
        this.initializeStepHoverBehavior();
        this.initializeStepFocusBehavior();
    },
    
    initializeProcessControlStepViewBase: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
    },
    
    add_deleting: function(value) {
        this.addEventHandler('Deleting', value);
    },
    
    remove_deleting: function(value) {
        this.removeEventHandler('Deleting', value);
    },
    
    $M_1: null,
    
    get_viewFactory: function() {
        return this.$M_1;
    },
    
    set_viewFactory: function(value) {
        this.$M_1 = value;
        return value;
    },
    
    $L_1: null,
    
    get_element: function() {
        return this.$L_1;
    },
    
    set_element: function(value) {
        this.$L_1 = value;
        return value;
    },
    
    $o_1: null,
    
    get_previousStepViewAdapter: function() {
        return this.$o_1;
    },
    
    set_previousStepViewAdapter: function(value) {
        this.$o_1 = value;
        return value;
    },
    
    $r_1: null,
    
    get_nextStepViewAdapter: function() {
        return this.$r_1;
    },
    
    set_nextStepViewAdapter: function(value) {
        this.$r_1 = value;
        if (!IsNull(value)) {
            value.set_previousStepViewAdapter(this);
        }
        return value;
    },
    
    $J_1: null,
    
    get_behaviorsFactory: function() {
        return this.$J_1;
    },
    
    set_behaviorsFactory: function(value) {
        this.$J_1 = value;
        return value;
    },
    
    get_instance: function() {
        return this._stepView;
    },
    
    $2l_1: null,
    
    get_stepFocusBehaviorAdapter: function() {
        return this.$2l_1;
    },
    
    moveUp: function() {
        if (this.$o_1) {
            var $v_0 = this.$o_1;
            this.$o_1.get_element().before(this.$L_1);
            this.$o_1 = this.$o_1.get_previousStepViewAdapter();
            $v_0.set_nextStepViewAdapter(this.$r_1);
            this.set_nextStepViewAdapter($v_0);
            this.get_viewModel().get_stepModel().moveUp();
        }
    },
    
    moveDown: function() {
        if (this.$r_1) {
            var $v_0 = this.$r_1;
            this.$r_1.get_element().after(this.$L_1);
            this.set_nextStepViewAdapter($v_0.get_nextStepViewAdapter());
            $v_0.set_previousStepViewAdapter(this.$o_1);
            $v_0.set_nextStepViewAdapter(this);
            this.get_viewModel().get_stepModel().moveDown();
        }
    }
}


ProcessConfiguration.View.StageView = function() {
    this.$$d_$9k_1 = Function.createDelegate(this, this.$9k_1);
    this.$$d_$9i_1 = Function.createDelegate(this, this.$9i_1);
    this.$$d_$9h_1 = Function.createDelegate(this, this.$9h_1);
    this.$$d_$7x_1 = Function.createDelegate(this, this.$7x_1);
    this.$$d_$5q_1 = Function.createDelegate(this, this.$5q_1);
    ProcessConfiguration.View.StageView.initializeBase(this);
}
ProcessConfiguration.View.StageView.prototype = {
    $3e_1: null,
    $3G_1: null,
    $2m_1: null,
    $2g_1: null,
    $f_1: null,
    $1t_1: null,
    $26_1: null,
    
    get_$2L_1: function() {
        if (IsNull(this.$26_1)) {
            this.$26_1 = this.get_element().find('.button.add-branch');
        }
        return this.$26_1;
    },
    
    $3_1: null,
    
    get_viewModel: function() {
        if (this.$3_1) {
            return this.$3_1;
        }
        this.$3_1 = this.$b_0;
        return this.$3_1;
    },
    
    $9F_1: function() {
        var $v_0 = this.get_element().find('#' + this.get_viewModel().get_stageId() + '_Relationship');
        if ($v_0.get_length() > 0) {
            this.$2g_1 = this.$2_1.createRelationshipControlView($v_0, this.get_viewModel().get_childRelationshipControlViewModel());
            this.$2g_1.initialize();
            if (this.get_viewModel().get_isFirstStage()) {
                $v_0.get_jQueryObject().parent().hide();
            }
        }
    },
    
    initializeStepListView: function() {
        var $v_0 = this.get_element().find('ul');
        this.$2m_1 = this.$2_1.createStepListView(this, $v_0, this.get_viewModel().get_childStepListViewModel(), this.get_viewModel().get_stageModel().get_stepModelFactory());
        this.$2m_1.initialize();
    },
    
    initializeProcessControlStageViewAdapter: function() {
        this.$3e_1 = this.$1Q_1.createAddBranchConditionBehaviorAdapter(this.get_$2L_1(), this.$J_1, this.get_viewModel(), this);
        this.$3e_1.initialize();
        this.$3G_1 = this.$1Q_1.createStageViewAdapter(this.$2_1, this.get_viewModel(), this.get_element());
        this.$3G_1.initialize();
    },
    
    initializeNextStageView: function() {
        var $v_0 = this.$2_1.createStageView(this.get_viewModel().get_nextStageViewModel());
        this.set_nextStageView($v_0);
        this.$G_1.initialize();
    },
    
    initializeConditionView: function() {
        var $v_0 = String.format('.{0}', 'condition');
        var $v_1 = this.get_element().nextSibling($v_0);
        var $v_2 = this.$2_1.createConditionView($v_1, this.get_viewModel().get_childConditionViewModel());
        this.set_conditionView($v_2);
        this.$D_1.initialize();
        this.$D_1.set_parent(this);
    },
    
    initializeAddStageButtonView: function() {
        var $v_0 = this.get_element().find('.button.add-stage');
        this.$f_1 = this.$2_1.createButtonView($v_0);
        this.$f_1.initialize();
        this.$f_1.add_clicked(this.$$d_$5q_1);
    },
    
    initializeDeleteStageButtonView: function() {
        var $v_0 = this.get_element().find('.button.delete-stage');
        this.$1t_1 = this.$2_1.createButtonView($v_0);
        this.$1t_1.initialize();
        this.$1t_1.add_clicked(this.$$d_$7x_1);
        if (this.get_viewModel().get_isFirstStage()) {
            $v_0.get_jQueryObject().parent().hide();
        }
    },
    
    initializeAddBranchButtonView: function() {
        this.$5Q_1(this.get_$4n_1());
        this.get_$2L_1().click(this.$$d_$9h_1);
        this.get_$2L_1().mouseEnter(this.$$d_$9i_1);
    },
    
    $9h_1: function($p0) {
        if (!this.get_$4n_1()) {
            this.$3e_1.get_instance().$78_4($p0);
        }
        this.$5Q_1(this.get_$4n_1());
    },
    
    $9i_1: function($p0) {
        this.$5Q_1(this.get_$4n_1());
    },
    
    get_$4n_1: function() {
        if (this.get_viewModel().get_childConditionViewModel()) {
            var $v_0 = this.get_viewModel().get_childConditionViewModel();
            if ($v_0.get_childConditionBranchViewModels().get_count() > 0 && $v_0.get_childConditionBranchViewModels().last().get_conditionBranchStepSectionViewModel().get_conditions().get_conditionBranchDisplayMode() === 2) {
                return true;
            }
            if ($v_0.get_childConditionBranchViewModels().get_count() >= 10) {
                return true;
            }
        }
        if (ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            return true;
        }
        if (this.get_viewModel().get_nestedLevel() >= 5) {
            return true;
        }
        return false;
    },
    
    $5Q_1: function($p0) {
        if ($p0) {
            this.get_$2L_1().addClass('default-cursor');
            var $v_0 = this.get_$2L_1().children('*');
            if ($v_0) {
                $v_0.addClass('default-cursor');
            }
        }
        else {
            this.get_$2L_1().removeClass('default-cursor');
            var $v_1 = this.get_$2L_1().children('*');
            if ($v_1) {
                $v_1.removeClass('default-cursor');
            }
        }
    },
    
    $5q_1: function($p0, $p1) {
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            var $v_0 = this.get_viewModel().get_metadataService();
            var $v_1 = this.$p_1.createEmptyStageData(this.get_viewModel().get_stageModel().get_rootWorkflow());
            var $v_2 = this.get_viewModel().get_stageModel().get_stepModelFactory().createStageModel($v_1);
            var $v_3 = this.get_viewModel().get_viewModelFactory().createStageViewModel($v_0, $v_2, this.get_viewModel().get_parentStage(), this.get_viewModel().get_entityLogicalName());
            this.get_viewModel().insertNextStageViewModel($v_3);
            $v_3.initialize();
            var $v_4 = this.$p_1.buildStageElement($v_3);
            if (this.$D_1) {
                this.$D_1.get_element().after($v_4);
            }
            else {
                this.get_element().after($v_4);
            }
            var $v_5 = this.$2_1.createStageView($v_3);
            this.set_nextStageView($v_5);
            $v_5.initialize();
        }
    },
    
    $7x_1: function($p0, $p1) {
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            this.deleteStage();
        }
    },
    
    $AW_1: function($p0) {
        if (IsNull($p0)) {
            this.$G_1 = null;
            return;
        }
        if (this.$G_1) {
            var $v_0 = this.$G_1;
            this.$G_1 = $p0;
            this.$G_1.set_nextStageView($v_0);
        }
        else {
            this.$G_1 = $p0;
        }
        $p0.set_previousNavigationInfo(this);
    },
    
    $p_1: null,
    
    get_stageBuilder: function() {
        return this.$p_1;
    },
    
    set_stageBuilder: function(value) {
        this.$p_1 = value;
        return value;
    },
    
    $L_1: null,
    
    get_element: function() {
        var $v_0 = String.format('#{0}', this.get_viewModel().get_stageId());
        this.$L_1 = this.$0_0.selectElement($v_0);
        return this.$L_1;
    },
    
    set_element: function(value) {
        Error.notImplemented('The method or operation is not implemented.');
        return value;
    },
    
    dispose: function() {
        if (!IsNull(this.$D_1)) {
            this.$D_1.remove_conditionDelete(this.$$d_$9k_1);
            this.$D_1.dispose();
            this.$D_1 = null;
        }
        if (!IsNull(this.$2m_1)) {
            this.$2m_1.dispose();
            this.$2m_1 = null;
        }
        if (!IsNull(this.$2g_1)) {
            this.$2g_1.dispose();
            this.$2g_1 = null;
        }
        if (!IsNull(this.$f_1)) {
            this.$f_1.remove_clicked(this.$$d_$5q_1);
            this.$f_1.dispose();
            this.$f_1 = null;
        }
        if (!IsNull(this.$1t_1)) {
            this.$1t_1.remove_clicked(this.$$d_$7x_1);
            this.$1t_1.dispose();
            this.$1t_1 = null;
        }
        if (!IsNull(this.$26_1)) {
            this.$26_1.unbindAll();
            this.$26_1 = null;
        }
        this.$G_1 = null;
        if (!IsNull(this.$2_1)) {
            if (((this.get_viewModel().get_stageId()) in this.$2_1.get_stageViewsById())) {
                delete this.$2_1.get_stageViewsById()[this.get_viewModel().get_stageId()];
            }
        }
        if (!IsNull(this.$3_1)) {
            this.$3_1.dispose();
            this.$3_1 = null;
        }
    },
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        if (this.get_viewModel().get_childConditionViewModel() && !this.$D_1) {
            this.initializeConditionView();
        }
        if (this.get_viewModel().get_nextStageViewModel() && !this.$G_1 && !((this.get_viewModel().get_nextStageViewModel().get_stageId()) in this.get_viewModel().get_firstLevelStagesById())) {
            this.initializeNextStageView();
        }
        this.initializeProcessControlStageViewAdapter();
        this.$9F_1();
        this.initializeStepListView();
        this.initializeAddStageButtonView();
        this.initializeDeleteStageButtonView();
        this.initializeAddBranchButtonView();
    },
    
    initializeStageViewBase: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
    },
    
    $J_1: null,
    
    get_behaviorsFactory: function() {
        return this.$J_1;
    },
    
    set_behaviorsFactory: function(value) {
        this.$J_1 = value;
        return value;
    },
    
    $2_1: null,
    
    get_viewFactory: function() {
        return this.$2_1;
    },
    
    set_viewFactory: function(value) {
        this.$2_1 = value;
        return value;
    },
    
    validate: function() {
        this.$3G_1.validate();
    },
    
    get_entityLogicalName: function() {
        return this.get_viewModel().get_entityLogicalName();
    },
    
    $D_1: null,
    
    get_conditionView: function() {
        return this.$D_1;
    },
    
    set_conditionView: function(value) {
        if (!IsNull(this.$D_1)) {
            this.$D_1.remove_conditionDelete(this.$$d_$9k_1);
        }
        this.$D_1 = value;
        if (!IsNull(this.$D_1)) {
            this.$D_1.add_conditionDelete(this.$$d_$9k_1);
        }
        return value;
    },
    
    deleteStage: function() {
        if (IsNull(this.$10_1)) {
            return;
        }
        var $v_0 = this.$10_1;
        var $v_1 = this.$G_1;
        $v_0.set_nextStageView(null);
        $v_0.set_nextStageViewModel(null);
        if (!IsNull($v_1)) {
            $v_0.set_nextStageView($v_1);
            $v_0.insertNextStageViewModel($v_1.get_viewModel());
        }
        if (!IsNull(this.$D_1) && !IsNull(this.$D_1.get_element())) {
            this.$D_1.get_element().remove(null);
        }
        this.get_element().remove(null);
        this.dispose();
        var $$t_2 = this;
        window.setTimeout(function() {
            $v_0.get_element().setFocus();
        }, 0);
    },
    
    $9k_1: function($p0, $p1) {
        this.$7u_1();
    },
    
    $1Q_1: null,
    
    get_viewAdapterFactory: function() {
        return this.$1Q_1;
    },
    
    set_viewAdapterFactory: function(value) {
        this.$1Q_1 = value;
        return value;
    },
    
    $7u_1: function() {
        this.get_viewModel().deleteCondition();
        this.$D_1.get_element().remove(null);
        this.$D_1.dispose();
        this.set_conditionView(null);
        this.toggleInsertStageButtonViewLabel();
    },
    
    insertNextStageViewModel: function(nextStageViewModel) {
        this.get_viewModel().insertNextStageViewModel(nextStageViewModel);
    },
    
    get_nextStageViewModel: function() {
        return this.get_viewModel().get_nextStageViewModel();
    },
    
    set_nextStageViewModel: function(value) {
        this.get_viewModel().set_nextStageViewModel(value);
        return value;
    },
    
    $G_1: null,
    
    get_nextStageView: function() {
        return this.$G_1;
    },
    
    set_nextStageView: function(value) {
        this.$AW_1(value);
        return value;
    },
    
    $10_1: null,
    
    get_previousNavigationInfo: function() {
        return this.$10_1;
    },
    
    set_previousNavigationInfo: function(value) {
        this.$10_1 = value;
        return value;
    },
    
    get_processControlStageViewAdapter: function() {
        return this.$3G_1;
    },
    
    moveUp: function() {
        if (IsNull(this.$10_1) || IsNull(this.$10_1.get_previousNavigationInfo())) {
            return;
        }
        var $v_0 = this.$10_1;
        var $v_1 = this.$10_1.get_previousNavigationInfo();
        $v_0.get_element().before(this.get_element());
        $v_0.set_nextStageView(null);
        $v_0.set_nextStageViewModel(null);
        $v_1.set_nextStageView(this);
        $v_1.insertNextStageViewModel(this.get_viewModel());
        if (this.$D_1) {
            this.get_element().after(this.$D_1.get_element());
        }
    },
    
    moveDown: function() {
        if (IsNull(this.$10_1) || IsNull(this.$G_1)) {
            return;
        }
        var $v_0 = this.$10_1;
        var $v_1 = this.$G_1;
        this.set_nextStageView(null);
        this.set_nextStageViewModel(null);
        $v_0.set_nextStageView($v_1);
        $v_0.insertNextStageViewModel($v_1.get_viewModel());
        if ($v_1.get_conditionView()) {
            $v_1.get_conditionView().get_element().after(this.get_element());
        }
        else {
            $v_1.get_element().after(this.get_element());
        }
        if (this.$D_1) {
            this.get_element().after(this.$D_1.get_element());
        }
    },
    
    getAllChildStagesPointingToTargetStage: function(currentStages, targetStageId) {
        if (!this.$D_1) {
            return;
        }
        var $v_0 = this.$D_1.get_children();
        for (var $v_1 = 0; $v_1 < $v_0.get_count(); ++$v_1) {
            var $v_2 = $v_0.get_item($v_1);
            var $v_3 = $v_2.get_nextStageView();
            while ($v_3) {
                if (!$v_3.get_nextStageView()) {
                    if (targetStageId === '') {
                        Array.add(currentStages, $v_3);
                    }
                    break;
                }
                if ($v_3.get_conditionView()) {
                    $v_3.getAllChildStagesPointingToTargetStage(currentStages, targetStageId);
                }
                if ($v_3.get_nextStageView().get_viewModel().get_stageId().toLowerCase() === targetStageId.toLowerCase()) {
                    Array.add(currentStages, $v_3);
                    break;
                }
                $v_3 = $v_3.get_nextStageView();
            }
        }
    },
    
    toggleInsertStageButtonViewLabel: function() {
        if (!IsNull(this.$D_1)) {
            this.$f_1.set_label(this.getInsertStageAfterBranchKey());
        }
        else {
            this.$f_1.set_label(this.getInsertStageTextKey());
        }
    },
    
    getInsertStageTextKey: function() {
        return window.LOCID_PROCESS_INSERTSTAGETEXTKEY;
    },
    
    getInsertStageAfterBranchKey: function() {
        return window.LOCID_PROCESS_STAGEAFTERBRANCH;
    }
}


ProcessConfiguration.View.RelationshipControlView = function() {
    this.$$d_$9u_1 = Function.createDelegate(this, this.$9u_1);
    this.$$d_$9t_1 = Function.createDelegate(this, this.$9t_1);
    this.$$d_$9o_1 = Function.createDelegate(this, this.$9o_1);
    this.$$d_$9s_1 = Function.createDelegate(this, this.$9s_1);
    ProcessConfiguration.View.RelationshipControlView.initializeBase(this);
}
ProcessConfiguration.View.RelationshipControlView.prototype = {
    
    get_$5T_1: function() {
        return this.$B_1.getAttribute('id');
    },
    
    get_$a_1: function() {
        return this.$b_0;
    },
    
    set_$a_1: function($p0) {
        this.$b_0 = $p0;
        return $p0;
    },
    
    $B_1: null,
    
    get_element: function() {
        return this.$B_1;
    },
    
    set_element: function($p0) {
        this.$B_1 = $p0;
        return $p0;
    },
    
    $5G_1: null,
    
    get_stageBuilder: function() {
        return this.$5G_1;
    },
    
    set_stageBuilder: function($p0) {
        this.$5G_1 = $p0;
        return $p0;
    },
    
    $4L_1: null,
    
    get_$6p_1: function() {
        if (IsNull(this.$4L_1)) {
            this.$4L_1 = this.$0_0.selectInElement('.stage-relationship-link', this.$B_1);
        }
        return this.$4L_1;
    },
    
    initialize: function() {
        if (!this.get_$a_1().get_readOnly()) {
            this.get_$a_1().add_propertyChanged(this.$$d_$9s_1);
            this.$7O_1();
        }
    },
    
    $9s_1: function($p0, $p1) {
        switch ($p1.get_propertyName()) {
            case 'ShowWarningProperty':
                this.$8k_1();
                break;
        }
    },
    
    $8k_1: function() {
        if (this.get_$a_1().get_showWarning()) {
            this.get_warningIcon().show();
        }
        else {
            this.get_warningIcon().hide();
        }
    },
    
    $7O_1: function() {
        this.get_$6p_1().click(this.$$d_$9o_1);
    },
    
    $AT_1: function() {
        this.get_$6p_1().unbind('click', this.$$d_$9o_1);
    },
    
    $9o_1: function($p0) {
        ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.get_instance().openDialog(this.get_$a_1(), this.get_$a_1().get_targetStageId());
    },
    
    dispose: function() {
        if (!IsNull(this.$1E_1)) {
            this.$1E_1.dispose();
        }
        if (!IsNull(this.$21_1)) {
            this.$21_1.unbind('mouseenter', this.$$d_$9t_1).unbind('mouseleave', this.$$d_$9u_1);
        }
        if (!IsNull(this.get_$a_1())) {
            this.get_$a_1().remove_propertyChanged(this.$$d_$9s_1);
            this.get_$a_1().dispose();
            this.set_$a_1(null);
        }
        this.$AT_1();
    },
    
    $21_1: null,
    
    get_warningIcon: function() {
        if (IsNull(this.$21_1)) {
            this.$21_1 = this.$0_0.fromHtml('<span></span>').addClass('ms-crm-Inline-WarningIcon').append(this.$0_0.fromElement(Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create('/_imgs/inlineedit/warning.png'))).attribute('alt', window.LOCID_WARNINGICON_ALTTEXT).attribute('id', this.get_$5T_1() + '_warn')).append(this.$0_0.fromHtml('<div></div>').attribute('id', this.get_$5T_1() + '_w').addClass('ms-crm-Hidden-NoBehavior')).attribute('title', '');
            this.$B_1.append(this.$21_1);
            this.$21_1.mouseEnter(this.$$d_$9t_1).mouseLeave(this.$$d_$9u_1).hide();
        }
        return this.$21_1;
    },
    
    $9t_1: function($p0) {
        this.get_$84_1().showError(window.LOCID_PROCESS_RELATION_WARNING);
    },
    
    $9u_1: function($p0) {
        if (!IsNull(this.$1E_1)) {
            this.$1E_1.hideError(false);
        }
    },
    
    $1E_1: null,
    
    get_$84_1: function() {
        if (IsNull(this.$1E_1)) {
            this.$1E_1 = new Mscrm.ErrorFlyout(this.get_warningIcon().get_jQueryObject(), this.get_$Aa_1().get_jQueryObject(), this.get_$61_1().get_jQueryObject());
        }
        return this.$1E_1;
    },
    
    $3N_1: null,
    
    get_$Aa_1: function() {
        if (IsNull(this.$3N_1)) {
            this.$3N_1 = this.$0_0.fromHtml('<div></div>').addClass('ms-crm-Inline-Validation').hide().attribute('id', this.get_$5T_1() + '_err');
            this.get_$61_1().append(this.$3N_1);
        }
        return this.$3N_1;
    },
    
    get_$61_1: function() {
        return this.$0_0.selectElement('#bpfConfContent');
    }
}


ProcessConfiguration.View.StepFieldViewBase = function(element) {
    this.$$d_onFieldChanged = Function.createDelegate(this, this.onFieldChanged);
    ProcessConfiguration.View.StepFieldViewBase.initializeBase(this, [ element ]);
}
ProcessConfiguration.View.StepFieldViewBase.prototype = {
    $1_5: null,
    
    get_metadataService: function() {
        return this.$1_5;
    },
    
    set_metadataService: function(value) {
        this.$1_5 = value;
        return value;
    },
    
    renderView: function() {
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.renderView.call(this);
        this.initializeControl();
    },
    
    validate: function() {
        if (this.get_dataContext().get_isSystemControl()) {
            this.set_validationResult(new Mscrm.ValidationResult(true, null));
            return;
        }
        var $v_0 = this.$O_5.get_isValid();
        if (!$v_0) {
            this.set_validationResult(new Mscrm.ValidationResult(false, this.$O_5.get_validateResult().errorText));
            return;
        }
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.validate.call(this);
    },
    
    initializeControl: function() {
        this.initializePicklistInlineControl();
        this.bindEvents();
    },
    
    initializePicklistInlineControl: function() {
        var $v_0 = this.get_$6o_5();
        var $v_1 = {};
        $v_1['raw'] = ($v_0 === -1 || $v_0 === -2) ? '' : $v_0.toString();
        Sys.Application.beginCreateComponents();
        var $v_2 = this.$7o_5();
        var $v_3 = new Mscrm.InlineOptionSetAttribute($v_2, $v_1, this.get_elementWrapper().attr('data-fdeid'));
        var $v_4 = 'normal';
        var $v_5 = new Mscrm.InlineAutoCompleteControlViewModel($v_3, $v_4);
        $v_5.set_labelValue(window.LOCID_PROCESS_FIELDLABEL);
        $v_5.set_emptyValuePlaceholder(window.LOCID_PROCESS_NEWFIELDTEXTKEY);
        var $v_6 = this.$8M_5($v_5, this.$4_5);
        this.$O_5 = new Mscrm.InlineAutoCompleteControlView($v_6);
        this.$O_5.set_dataContext($v_5);
        this.setStepControlValue(this.$O_5);
        var $v_7 = new ProcessConfiguration.View.ProcessEditorErrorContainerProvider();
        var $v_8 = new Mscrm.Proxies.JQueryProxy();
        $v_7.$38_0 = $v_8.selectElement('#bpfConfContent');
        this.$O_5.set_errorDisplayAreaProvider($v_7);
        this.$O_5.renderForRead();
        ProcessControl.Configuration.ProcessConfigurationUtility.setStatusBasedOnReadOnly(this.$O_5);
        Sys.Application.endCreateComponents();
        var $v_9 = $find(this.$O_5.get_dataContext().get_attribute().get_dataAttributeId());
        $v_9.set_isVirtual(true);
    },
    
    bindEvents: function() {
        this.$O_5.get_chromeElement().bind('attribute-changed', this.$$d_onFieldChanged);
    },
    
    $8M_5: function($p0, $p1) {
        var $v_0 = new Mscrm.AutoCompleteLayout(this.get_elementWrapper(), $p0);
        if (_String.isNullOrWhiteSpace($p1.get_attributeLogicalName()) && $p0.get_controlMode() !== 'locked') {
            $v_0.set_valueElementClass('pc_inline_value pc_inline_empty_value');
        }
        else {
            $v_0.set_valueElementClass('pc_inline_value');
        }
        $v_0.set_imageIconFilePath(window.CDNURL + '/_imgs/processcontrol/dropdown.png');
        $v_0.set_imageIconTooltip(window.LOCID_PROCESS_SHOWFIELDS);
        return $v_0;
    },
    
    onFieldChanged: function(eventHandler) {
        if (arguments.length < 2) {
            return;
        }
        var $v_0 = -1;
        if (!isNullOrEmptyString(arguments[1])) {
            $v_0 = parseInt(arguments[1]);
        }
        this.set_$6o_5($v_0);
    },
    
    $4_5: null,
    
    get_stepViewModel: function() {
        return this.$4_5;
    },
    
    set_stepViewModel: function(value) {
        this.$4_5 = value;
        return value;
    },
    
    $O_5: null,
    
    get_inlineEditControlView: function() {
        return this.$O_5;
    },
    
    $7o_5: function() {
        var $v_0 = {};
        $v_0.AttributeType = 'picklist';
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.LogicalName = this.get_elementWrapper().attr('id');
        $v_0.Options = this.getEntityOptionsList();
        $v_0.RequiredLevel = 1;
        return $v_0;
    },
    
    tryAddAndShowValidationResult: function(result) {
        return this.$O_5.tryReplaceAndShowValidationResult(result);
    },
    
    clearReadValue: function() {
        this.$O_5.get_dataContext().get_attribute().set_rawValue(-1);
        this.$O_5.tryUpdateValueElementText('');
    },
    
    clearValidation: function() {
        this.$O_5.clearValidation();
    },
    
    get_viewModel: function() {
        return this.$O_5.get_dataContext();
    }
}


ProcessConfiguration.View.StepListView = function() {
    this.$$d_$7I_1 = Function.createDelegate(this, this.$7I_1);
    this.$$d_$AL_1 = Function.createDelegate(this, this.$AL_1);
    ProcessConfiguration.View.StepListView.initializeBase(this);
}
ProcessConfiguration.View.StepListView.prototype = {
    $36_1: null,
    $2Y_1: null,
    $3_1: null,
    
    get_$a_1: function() {
        if (this.$3_1) {
            return this.$3_1;
        }
        this.$3_1 = this.$b_0;
        return this.$3_1;
    },
    
    $1N_1: null,
    
    get_$6g_1: function() {
        this.$1N_1 = this.$1V_0;
        return this.$1N_1;
    },
    
    $5K_1: null,
    
    get_$5n_1: function() {
        return this.$5K_1 || (this.$5K_1 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.View.IProcessControlStepViewAdapter))());
    },
    
    $7I_1: function($p0, $p1) {
        if (!ProcessControl.Configuration.ProcessConfigurationUtility.isProcessReadonly()) {
            var $v_0 = this.$1C_1.createEmptyStepData(this.get_$a_1().get_rootWorkflow());
            var $v_1 = this.$1C_1.buildProcessComponent($v_0, $v_0.get_Id());
            this.$L_1.append($v_1);
            var $v_2 = this.$C_1.createStepModel($v_0);
            var $v_3 = this.get_$a_1().addStepViewModel($v_2);
            var $v_4 = this.$3d_1.createStepViewAdapter(this.$M_1, $v_1, $v_3, this.get_$6g_1());
            this.$2Y_1.set_nextStepViewAdapter($v_4);
            this.$2Y_1 = $v_4;
            $v_4.initialize();
            $v_4.add_deleting(this.$$d_$AL_1);
        }
    },
    
    $AL_1: function($p0, $p1) {
        $p1.$2H_1.remove_deleting(this.$$d_$AL_1);
        if ($p1.$2H_1 === this.$2Y_1) {
            this.$2Y_1 = $p1.$2H_1.get_previousStepViewAdapter();
        }
    },
    
    $9T_1: function($p0, $p1) {
        var $v_0 = this.$3d_1.createStepViewAdapter(this.$M_1, $p0, $p1, this.get_$6g_1());
        $v_0.initialize();
        $v_0.add_deleting(this.$$d_$AL_1);
        this.get_$5n_1().add($v_0);
        return $v_0;
    },
    
    $8z_1: function() {
        var $v_0 = this.$L_1.siblings('.button.add-step');
        this.$36_1 = this.$M_1.createButtonView($v_0);
        this.$36_1.initialize();
        this.$36_1.add_clicked(this.$$d_$7I_1);
    },
    
    dispose: function() {
        this.$36_1.remove_clicked(this.$$d_$7I_1);
        for (var $v_0 = 0; $v_0 < this.get_$5n_1().get_count(); $v_0++) {
            var $v_1 = this.get_$5n_1().get_item($v_0);
            $v_1.remove_deleting(this.$$d_$AL_1);
            $v_1.dispose();
        }
    },
    
    initialize: function() {
        var $v_0 = this.$L_1.find('li');
        var $v_1 = null;
        for (var $v_2 = 0; $v_2 < this.get_$a_1().get_childStepViewModels().get_count(); $v_2++) {
            var $v_3 = this.$9T_1(this.$0_0.fromElement($v_0.get_item($v_2)), this.get_$a_1().get_childStepViewModels().get_item($v_2));
            if ($v_1) {
                $v_1.set_nextStepViewAdapter($v_3);
            }
            $v_1 = $v_3;
        }
        this.$2Y_1 = $v_1;
        this.$8z_1();
    },
    
    $3d_1: null,
    
    get_viewAdapterFactory: function() {
        return this.$3d_1;
    },
    
    set_viewAdapterFactory: function(value) {
        this.$3d_1 = value;
        return value;
    },
    
    $L_1: null,
    
    get_element: function() {
        return this.$L_1;
    },
    
    set_element: function(value) {
        this.$L_1 = value;
        return value;
    },
    
    $M_1: null,
    
    get_viewFactory: function() {
        return this.$M_1;
    },
    
    set_viewFactory: function(value) {
        this.$M_1 = value;
        return value;
    },
    
    $1C_1: null,
    
    get_stepBuilder: function() {
        return this.$1C_1;
    },
    
    set_stepBuilder: function(value) {
        this.$1C_1 = value;
        return value;
    },
    
    $C_1: null,
    
    get_stepModelFactory: function() {
        return this.$C_1;
    },
    
    set_stepModelFactory: function(value) {
        this.$C_1 = value;
        return value;
    }
}


ProcessConfiguration.View.PageStepSourceView = function(element) {
    ProcessConfiguration.View.PageStepSourceView.initializeBase(this, [ element ]);
}
ProcessConfiguration.View.PageStepSourceView.prototype = {
    
    initializeControl: function() {
        if (this.get_$6o_5() < 0) {
            this.set_$6o_5(0);
        }
        this.initializePicklistInlineControl();
        this.bindEvents();
        this.get_elementWrapper().children(':first').removeClass('pc_inline_empty_value');
    },
    
    get_$3a_6: function() {
        return this.$4_5;
    },
    
    $2W_6: null,
    
    get_$2M_6: function() {
        if (this.$2W_6) {
            return this.$2W_6;
        }
        this.$2W_6 = this.$4_5.get_entityMetadataModel().get_sources();
        return this.$2W_6;
    },
    
    setStepControlValue: function(stepFieldControlView) {
        stepFieldControlView.get_valueElement().text(this.get_$3a_6().get_source().$2B_0 || window.LOCID_PROCESS_PAGE_SOURCENAME);
    },
    
    get_$6o_5: function() {
        var $v_0 = this.get_$3a_6().get_source().$g_0;
        var $v_1 = this.get_$3a_6().get_source().$x_0;
        var $v_2 = $v_1 + '#' + this.get_$3a_6().get_source().$1F_0;
        if (!$v_0 && isNullOrEmptyString($v_1)) {
            return -1;
        }
        for (var $v_3 = 0; $v_3 < this.get_$2M_6().get_count(); $v_3++) {
            if ($v_0) {
                if ($v_0 === this.get_$2M_6().get_item($v_3).$g_0) {
                    return $v_3;
                }
            }
            else {
                var $v_4 = this.get_$2M_6().get_item($v_3).$x_0 + '#' + this.get_$2M_6().get_item($v_3).$1F_0;
                if ($v_2 === $v_4) {
                    return $v_3;
                }
            }
        }
        return -2;
    },
    
    set_$6o_5: function($p0) {
        if ($p0 < 0 || $p0 >= this.$4_5.get_entityMetadataModel().get_sources().get_count()) {
            return $p0;
        }
        var $v_0 = this.get_$2M_6().get_item($p0);
        if ($v_0.$g_0) {
            this.$s_4.$6s_4($v_0.$2B_0);
        }
        this.$AX_6($v_0);
        return $p0;
    },
    
    $AX_6: function($p0) {
        this.get_$3a_6().updateStepSourceProperties($p0);
    },
    
    getEntityOptionsList: function() {
        var $v_0 = new Array(0);
        this.$2W_6 = null;
        for (var $v_1 = 0; $v_1 < this.get_$2M_6().get_count(); $v_1++) {
            var $v_2 = new Mscrm.EnumOptionJsonWrapper();
            $v_2.Value = $v_1;
            $v_2.Label = this.get_$2M_6().get_item($v_1).$2B_0;
            Array.add($v_0, $v_2);
        }
        return $v_0;
    },
    
    dispose: function() {
        if (this.get_isDisposed() || IsNull(this.$O_5)) {
            return;
        }
        this.$O_5.get_chromeElement().unbind('attribute-changed', this.$$d_onFieldChanged);
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.dispose.call(this);
    }
}


ProcessConfiguration.View.StepFieldView = function(element) {
    this.$$d_onAvailableSystemControlsRefreshed = Function.createDelegate(this, this.onAvailableSystemControlsRefreshed);
    ProcessConfiguration.View.StepFieldView.initializeBase(this, [ element ]);
}
ProcessConfiguration.View.StepFieldView.prototype = {
    _filteredOptions: null,
    
    get_filteredOptions: function() {
        if (this._filteredOptions) {
            return this._filteredOptions;
        }
        this._filteredOptions = this.$4_5.get_entityMetadataModel().retrieveAttributesExcludingUsedSystemSteps(this.$4_5.get_attributeLogicalName());
        this.$4_5.get_entityMetadataModel().get_systemControlMetadataModel().add_availableSystemControlsRefreshed(this.$$d_onAvailableSystemControlsRefreshed);
        return this._filteredOptions;
    },
    
    setStepControlValue: function(StepValueControlView) {
        StepValueControlView.get_valueElement().text(this.$4_5.get_fieldDisplayText() || window.LOCID_PROCESS_NEWFIELDTEXTKEY);
    },
    
    get_$6o_5: function() {
        if (isNullOrEmptyString(this.$4_5.get_attributeLogicalName())) {
            return -1;
        }
        for (var $v_0 = 0; $v_0 < this.get_filteredOptions().get_count(); $v_0++) {
            if (this.get_filteredOptions().get_item($v_0).get_logicalName() === this.$4_5.get_attributeLogicalName()) {
                return $v_0;
            }
        }
        return -2;
    },
    
    set_$6o_5: function($p0) {
        if ($p0 < 0 || $p0 >= this.get_filteredOptions().get_count()) {
            this.$O_5.get_dataContext().get_attribute().set_rawValue(-1);
            this.$O_5.get_valueElement().text(window.LOCID_PROCESS_NEWFIELDTEXTKEY);
            this.get_elementWrapper().children(':first').addClass('pc_inline_empty_value');
            return $p0;
        }
        var $v_0 = this.get_filteredOptions().get_item($p0);
        if (ProcessConfiguration.Models.ISystemControlAttributeMetadataModel.isInstanceOfType($v_0)) {
            var $v_1 = $v_0;
            this.$AY_6($v_1);
        }
        else {
            this.updateStepProperties($v_0);
        }
        this.$s_4.$6s_4($v_0.get_displayText());
        this.get_elementWrapper().children(':first').removeClass('pc_inline_empty_value');
        return $p0;
    },
    
    updateStepProperties: function(attributeMetadataModel) {
        this.$4_5.updateStepProperties(attributeMetadataModel);
    },
    
    $AY_6: function($p0) {
        this.$4_5.updateSystemStepProperties($p0);
    },
    
    getEntityOptionsList: function() {
        var $v_0 = new Array(0);
        this._filteredOptions = null;
        for (var $v_1 = 0; $v_1 < this.get_filteredOptions().get_count(); $v_1++) {
            var $v_2 = new Mscrm.EnumOptionJsonWrapper();
            $v_2.Value = $v_1;
            $v_2.Label = this.get_filteredOptions().get_item($v_1).get_displayText();
            Array.add($v_0, $v_2);
        }
        return $v_0;
    },
    
    onAvailableSystemControlsRefreshed: function(sender, args) {
        if (!IsNull(this.$4_5) && !IsNull(this.$4_5.get_entityMetadataModel())) {
            this._filteredOptions = this.$4_5.get_entityMetadataModel().retrieveAttributesExcludingUsedSystemSteps(this.$4_5.get_attributeLogicalName());
        }
    },
    
    dispose: function() {
        if (this.get_isDisposed() || IsNull(this.$O_5)) {
            return;
        }
        this.$O_5.get_chromeElement().unbind('attribute-changed', this.$$d_onFieldChanged);
        this.$4_5.get_entityMetadataModel().get_systemControlMetadataModel().remove_availableSystemControlsRefreshed(this.$$d_onAvailableSystemControlsRefreshed);
        ProcessControl.Configuration.ProcessControlViewBase$2.prototype.dispose.call(this);
    }
}


ProcessConfiguration.View.ViewFactory = function() {
}
ProcessConfiguration.View.ViewFactory.prototype = {
    $1Q_0: null,
    
    get_viewAdapterFactory: function() {
        return this.$1Q_0;
    },
    
    set_viewAdapterFactory: function($p0) {
        this.$1Q_0 = $p0;
        return $p0;
    },
    
    $0_0: null,
    
    get_jQueryProxy: function() {
        return this.$0_0;
    },
    
    set_jQueryProxy: function($p0) {
        this.$0_0 = $p0;
        return $p0;
    },
    
    $J_0: null,
    
    get_behaviorsFactory: function() {
        return this.$J_0;
    },
    
    set_behaviorsFactory: function($p0) {
        this.$J_0 = $p0;
        return $p0;
    },
    
    $p_0: null,
    
    get_stageBuilder: function() {
        return this.$p_0;
    },
    
    set_stageBuilder: function($p0) {
        this.$p_0 = $p0;
        return $p0;
    },
    
    createProcessConfigurationView: function($p0) {
        var $v_0 = new ProcessConfiguration.View.ProcessConfigurationView();
        $v_0.set_dataContext($p0);
        $v_0.set_viewFactory(this);
        $v_0.set_jQueryProxy(this.$0_0);
        var $v_1 = this.$1Q_0.createProcessControlViewAdapter(this, $v_0, $p0);
        $v_0.set_processControlViewAdapter($v_1);
        return $v_0;
    },
    
    createProcessViewVisitor: function($p0) {
        var $v_0 = new ProcessConfiguration.Utility.ProcessViewVisitor($p0);
        $v_0.set_stepModelFactory($p0.get_stepModelFactory());
        return $v_0;
    },
    
    createProcessControlView: function($p0, $p1, $p2) {
        var $v_0 = new ProcessControl.Configuration.ProcessControlView($p0.get_item(0), $p2.get_primaryEntityMetadata());
        $v_0.set_dataContext($p2.get_businessProcessFlowModel());
        $v_0.$t_5 = $p2.get_primaryEntityRelationshipMetadata();
        $v_0.set_initialJson($p2.get_businessProcessFlowModelJson());
        $v_0.$1W_5 = $p1;
        return $v_0;
    },
    
    createProcessControlStageView: function($p0, $p1, $p2) {
        var $v_0;
        if ($p2.get_stageModel().get_rootWorkflow().get_workflowBusinessProcessType() === 1) {
            $v_0 = new ProcessControl.Configuration.ProcessControlPageView($p1.get_item(0));
        }
        else {
            $v_0 = new ProcessControl.Configuration.ProcessControlStageView($p1.get_item(0));
        }
        $v_0.$1O_5 = $p0;
        $v_0.$d_5 = $p2;
        $v_0.set_dataContext($p2.get_stageModel().get_stageStep());
        $v_0.$1_5 = $p2.get_metadataService();
        $v_0.set_entityMetadata($p2.get_metadataService().get_entityMetadata());
        $v_0.$2_5 = this;
        return $v_0;
    },
    
    createProcessControlStepView: function($p0, $p1, $p2) {
        var $v_0 = new ProcessControl.Configuration.ProcessControlStepView($p0.get_item(0));
        $v_0.set_dataContext($p1.get_stepModel().get_stepStep());
        $v_0.$19_4 = $p2;
        $v_0.set_entityMetadata($p1.get_metadataService().get_entityMetadata());
        return $v_0;
    },
    
    createStepListView: function($p0, $p1, $p2, $p3) {
        var $v_0 = new ProcessConfiguration.View.StepListView();
        $v_0.set_dataContext($p2);
        $v_0.set_element($p1);
        $v_0.set_viewFactory(this);
        $v_0.set_viewAdapterFactory(this.$1Q_0);
        $v_0.set_jQueryProxy(this.$0_0);
        $v_0.set_stepBuilder(this.$1C_0);
        $v_0.set_stepModelFactory($p3);
        $v_0.set_parent($p0);
        return $v_0;
    },
    
    $1C_0: null,
    
    get_stepBuilder: function() {
        return this.$1C_0;
    },
    
    set_stepBuilder: function($p0) {
        this.$1C_0 = $p0;
        return $p0;
    },
    
    createButtonView: function($p0) {
        var $v_0 = new ProcessConfiguration.View.ButtonView();
        $v_0.set_element($p0);
        return $v_0;
    },
    
    createConditionView: function($p0, $p1) {
        var $v_0 = new ProcessConfiguration.View.ConditionView();
        $v_0.set_dataContext($p1);
        $v_0.set_jQueryProxy(this.$0_0);
        $v_0.set_viewFactory(this);
        $v_0.set_element($p0);
        return $v_0;
    },
    
    createStageView: function($p0) {
        var $v_0;
        if ($p0.get_stageModel().get_rootWorkflow().get_workflowBusinessProcessType() === 1) {
            $v_0 = new ProcessConfiguration.View.PageView();
        }
        else {
            $v_0 = new ProcessConfiguration.View.StageView();
        }
        $v_0.set_dataContext($p0);
        $v_0.set_viewFactory(this);
        $v_0.set_viewAdapterFactory(this.$1Q_0);
        $v_0.set_behaviorsFactory(this.$J_0);
        $v_0.set_jQueryProxy(this.$0_0);
        $v_0.set_stageBuilder(this.$p_0);
        this.get_stageViewsById()[$p0.get_stageId()] = $v_0;
        return $v_0;
    },
    
    createConditionBranchView: function($p0, $p1) {
        var $v_0 = new ProcessConfiguration.View.ConditionBranchView();
        $v_0.set_dataContext($p1);
        $v_0.set_jQueryProxy(this.$0_0);
        $v_0.set_viewFactory(this);
        $v_0.set_element($p0);
        $v_0.set_stageBuilder(this.$p_0);
        return $v_0;
    },
    
    getStageViewById: function($p0) {
        if ((($p0) in this.get_stageViewsById())) {
            return this.get_stageViewsById()[$p0];
        }
        return null;
    },
    
    createStepFieldControlView: function($p0, $p1, $p2) {
        var $v_0 = null;
        if ($p1.get_stepModel().get_stepStep().get_workflow().get_workflowBusinessProcessType() === 1) {
            $v_0 = new ProcessConfiguration.View.PageStepFieldView($p0.get_item(0));
        }
        else {
            $v_0 = new ProcessConfiguration.View.StepFieldView($p0.get_item(0));
        }
        $v_0.set_dataContext($p1.get_stepModel().get_controlModel().get_controlStep());
        $v_0.$4_5 = $p1;
        $v_0.$s_4 = $p2;
        $v_0.$1_5 = $p1.get_metadataService();
        return $v_0;
    },
    
    createStepSourceControlView: function($p0, $p1, $p2) {
        var $v_0 = new ProcessConfiguration.View.PageStepSourceView($p0.get_item(0));
        $v_0.set_dataContext($p1.get_stepModel().get_controlModel().get_controlStep());
        $v_0.$4_5 = $p1;
        $v_0.$s_4 = $p2;
        $v_0.$1_5 = $p1.get_metadataService();
        return $v_0;
    },
    
    createRelationshipControlView: function($p0, $p1) {
        var $v_0 = new ProcessConfiguration.View.RelationshipControlView();
        $v_0.set_dataContext($p1);
        $v_0.set_jQueryProxy(this.$0_0);
        $v_0.set_element($p0);
        $v_0.set_stageBuilder(this.$p_0);
        return $v_0;
    },
    
    createRelationshipPickerView: function($p0, $p1, $p2) {
        var $v_0 = new ProcessConfiguration.View.RelationshipPickerView();
        $v_0.set_dataContext($p0);
        $v_0.set_relationshipsTableBuilder($p1);
        $v_0.set_imageBuilder($p2);
        return $v_0;
    },
    
    $20_0: null,
    
    get_stageViewsById: function() {
        if (!this.$20_0) {
            this.$20_0 = {};
        }
        return this.$20_0;
    }
}


ProcessConfiguration.View.ProcessConfigurationView = function() {
    ProcessConfiguration.View.ProcessConfigurationView.initializeBase(this);
}
ProcessConfiguration.View.ProcessConfigurationView.prototype = {
    $12_1: null,
    
    get_$a_1: function() {
        if (this.$12_1) {
            return this.$12_1;
        }
        this.$12_1 = this.$b_0;
        return this.$12_1;
    },
    
    dispose: function() {
        Error.notImplemented('The method or operation is not implemented.');
    },
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        var $v_0 = null;
        for (var $v_1 = 0; $v_1 < this.get_$a_1().get_firstLevelStageViewModels().get_count(); $v_1++) {
            var $v_2 = this.get_$a_1().get_firstLevelStageViewModels().get_item($v_1);
            var $v_3 = this.$2_1.createStageView($v_2);
            if ($v_0) {
                $v_0.set_nextStageView($v_3);
            }
            $v_0 = $v_3;
            $v_3.initialize();
            this.get_firstLevelStageViews().add($v_3);
        }
        this.$3H_1.set_processViewVisitor(this.$2_1.createProcessViewVisitor(this.get_$a_1()));
        this.$3H_1.initialize();
    },
    
    $3H_1: null,
    
    get_processControlViewAdapter: function() {
        return this.$3H_1;
    },
    
    set_processControlViewAdapter: function(value) {
        this.$3H_1 = value;
        return value;
    },
    
    $2_1: null,
    
    get_viewFactory: function() {
        return this.$2_1;
    },
    
    set_viewFactory: function(value) {
        this.$2_1 = value;
        return value;
    },
    
    $5Y_1: null,
    
    get_firstLevelStageViews: function() {
        return this.$5Y_1 || (this.$5Y_1 = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.View.IStageView))());
    }
}


ProcessConfiguration.View.ProcessControlViewAdapter = function() {
    ProcessConfiguration.View.ProcessControlViewAdapter.initializeBase(this);
}
ProcessConfiguration.View.ProcessControlViewAdapter.prototype = {
    $5_1: null,
    
    get_instance: function() {
        return this.$5_1;
    },
    
    set_instance: function(value) {
        this.$5_1 = value;
        return value;
    },
    
    $1W_1: null,
    
    get_processViewVisitor: function() {
        return this.$1W_1;
    },
    
    set_processViewVisitor: function(value) {
        this.$1W_1 = value;
        return value;
    },
    
    $2_1: null,
    
    get_viewFactory: function() {
        return this.$2_1;
    },
    
    set_viewFactory: function(value) {
        this.$2_1 = value;
        return value;
    },
    
    dispose: function() {
        Error.notImplemented('The method or operation is not implemented.');
    },
    
    initialize: function() {
        ProcessConfiguration.View.ViewBase.prototype.initialize.call(this);
        var $v_0 = this.$b_0;
        var $v_1 = String.format('#{0}', 'pcc');
        var $v_2 = this.$0_0.selectElement($v_1);
        this.$5_1 = this.$2_1.createProcessControlView($v_2, this.$1W_1, $v_0);
        this.$5_1.initialize();
        this.$5_1.setTitleAndDescriptionFromForm();
        this.$5_1.renderView();
    }
}


ProcessConfiguration.View.PageStepFieldView = function(element) {
    ProcessConfiguration.View.PageStepFieldView.initializeBase(this, [ element ]);
    this.$0_7 = new Mscrm.Proxies.JQueryProxy();
}
ProcessConfiguration.View.PageStepFieldView.prototype = {
    $0_7: null,
    
    initializeControl: function() {
        this.initializePicklistInlineControl();
        this.bindEvents();
        if (this.$4_5.get_stepModel().get_source().$g_0) {
            this.$5v_7();
        }
    },
    
    get_filteredOptions: function() {
        if (this._filteredOptions) {
            return this._filteredOptions;
        }
        this.getEntityOptionsList();
        this.$4_5.get_entityMetadataModel().get_systemControlMetadataModel().add_availableSystemControlsRefreshed(this.$$d_onAvailableSystemControlsRefreshed);
        return this._filteredOptions;
    },
    
    getEntityOptionsList: function() {
        var $v_0 = this.$4_5.get_stepModel().get_source();
        var $v_1 = new Array(0);
        if (!this.$4_5.get_stepModel().get_source().$g_0) {
            $v_1 = (this.$1_5.get_entityMetadata()[this.$4_5.get_stepModel().get_source().$x_0]).Fields;
        }
        return this.$6Z_7($v_1);
    },
    
    updateEntityOptionsList: function(resetToDefault) {
        var $v_0 = this.$4_5.get_stepModel().get_source();
        if ($v_0.$g_0) {
            this.$5v_7();
            return;
        }
        else {
            this.$O_5.set_disabled(false);
            var $v_1 = (this.$1_5).retrieveEntityMetadataAsync($v_0.$x_0);
            var $$t_7 = this;
            $v_1.done(function() {
                var $v_2 = $$t_7.$1_5.get_entityMetadata()[$v_0.$x_0];
                var $v_3 = $$t_7.$6Z_7($v_2.Fields);
                $$t_7.get_viewModel().setOptions($v_3);
                $$t_7.set_$6o_5(-1);
            });
            if ($v_1.state() === 'pending') {
                var $v_4 = this.$0_7.fromElement(this.get_element().parentNode);
                var $v_5 = this.$0_7.selectInElement('.processing', $v_4);
                if ($v_5.get_length() < 1) {
                    this.$7F_7(this.$0_7.fromElement(this.get_element()));
                }
                $v_4.addClass(' currently_processing');
                var $$t_8 = this;
                $v_1.always(function() {
                    $v_4.removeClass(' currently_processing');
                });
            }
        }
        if (!resetToDefault) {
            this.get_elementWrapper().children(':first').removeClass('pc_inline_empty_value');
        }
    },
    
    $7F_7: function($p0) {
        $p0.before(this.$0_7.fromHtml(String.format('<span class=\'{0}\'><img src=\'{1}\' /></span>', 'processing', Mscrm.CrmUri.create('/_imgs/ico/16_progress.gif'))));
    },
    
    $5v_7: function() {
        this.$O_5.tryUpdateValueElementText('');
        this.$O_5.set_disabled(true);
    },
    
    $6Z_7: function($p0) {
        var $v_0 = new Array(0);
        this._filteredOptions = new (Sales.Common.Framework.List$1.$$(ProcessConfiguration.Models.IAttributeMetadataModel))();
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = ProcessControl.Configuration.ProcessConfigurationUtility.createAttributeMetadataModel($p0[$v_1].Label.Description, $p0[$v_1].LogicalName, $p0[$v_1].Label.LCID);
            this._filteredOptions.add($v_2);
            var $v_3 = new Mscrm.EnumOptionJsonWrapper();
            $v_3.Value = $v_1;
            $v_3.Label = $p0[$v_1].Label.Description;
            Array.add($v_0, $v_3);
        }
        return $v_0;
    },
    
    setStepControlValue: function(StepValueControlView) {
        var $v_0;
        if (this.$4_5.get_stepModel().get_source().$g_0) {
            $v_0 = '';
        }
        else {
            $v_0 = (!isNullOrEmptyString(this.$4_5.get_fieldDisplayText())) ? this.$4_5.get_fieldDisplayText() : window.LOCID_PROCESS_NEWFIELDTEXTKEY;
        }
        StepValueControlView.get_valueElement().text($v_0);
    }
}


ProcessConfiguration.View.ViewAdapterFactory = function() {
}
ProcessConfiguration.View.ViewAdapterFactory.prototype = {
    $0_0: null,
    
    get_jQueryProxy: function() {
        return this.$0_0;
    },
    
    set_jQueryProxy: function($p0) {
        this.$0_0 = $p0;
        return $p0;
    },
    
    $J_0: null,
    
    get_behaviorsFactory: function() {
        return this.$J_0;
    },
    
    set_behaviorsFactory: function($p0) {
        this.$J_0 = $p0;
        return $p0;
    },
    
    createProcessControlViewAdapter: function($p0, $p1, $p2) {
        var $v_0 = new ProcessConfiguration.View.ProcessControlViewAdapter();
        $v_0.set_dataContext($p2);
        $v_0.set_jQueryProxy(this.$0_0);
        $v_0.set_parent($p1);
        $v_0.set_viewFactory($p0);
        return $v_0;
    },
    
    createStageViewAdapter: function($p0, $p1, $p2) {
        var $v_0 = new ProcessConfiguration.View.ProcessControlStageViewAdapter();
        $v_0.set_dataContext($p1);
        $v_0.set_jQueryProxy(this.$0_0);
        $v_0.set_viewFactory($p0);
        $v_0.set_element($p2);
        $v_0.set_behaviorsFactory(this.$J_0);
        return $v_0;
    },
    
    createAddBranchConditionBehaviorAdapter: function($p0, $p1, $p2, $p3) {
        var $v_0 = new ProcessConfiguration.Behavior.AddBranchConditionBehaviorAdapter();
        $v_0.set_element($p0);
        $v_0.set_behaviorsFactory($p1);
        $v_0.set_dataContext($p2);
        $v_0.set_parent($p3);
        $v_0.set_jQueryProxy(this.$0_0);
        return $v_0;
    },
    
    createStepViewAdapter: function($p0, $p1, $p2, $p3) {
        var $v_0;
        if ($p2.get_stepModel().get_controlModel().get_controlStep().get_workflow().get_workflowBusinessProcessType() === 1) {
            $v_0 = new ProcessConfiguration.View.ProcessControlPageStepViewAdapter();
        }
        else {
            $v_0 = new ProcessConfiguration.View.ProcessControlStepViewAdapter();
        }
        $v_0.set_dataContext($p2);
        $v_0.set_element($p1);
        $v_0.set_viewFactory($p0);
        $v_0.set_parent($p3);
        $v_0.set_behaviorsFactory(this.$J_0);
        $v_0.set_jQueryProxy(this.$0_0);
        return $v_0;
    }
}


ProcessConfiguration.View.ViewBase = function() {
}
ProcessConfiguration.View.ViewBase.prototype = {
    $52_0: null,
    
    get_$5U_0: function() {
        return this.$52_0 || (this.$52_0 = new Sys.EventHandlerList());
    },
    
    $0_0: null,
    
    get_jQueryProxy: function() {
        return this.$0_0;
    },
    
    set_jQueryProxy: function(value) {
        this.$0_0 = value;
        return value;
    },
    
    $b_0: null,
    
    get_dataContext: function() {
        return this.$b_0;
    },
    
    set_dataContext: function(value) {
        this.$b_0 = value;
        return value;
    },
    
    $1V_0: null,
    
    get_parent: function() {
        return this.$1V_0;
    },
    
    set_parent: function(value) {
        this.$1V_0 = value;
        return value;
    },
    
    initialize: function() {
    },
    
    addEventHandler: function(eventName, eventHandler) {
        this.get_$5U_0().addHandler(eventName, eventHandler);
    },
    
    removeEventHandler: function(eventName, eventHandler) {
        this.get_$5U_0().removeHandler(eventName, eventHandler);
    },
    
    getHandler: function(eventName) {
        return this.get_$5U_0().getHandler(eventName);
    },
    
    fireEvent: function(eventName, args) {
        var $v_0 = this.getHandler(eventName);
        if (!$v_0) {
            return;
        }
        $v_0(this, args);
    }
}


ProcessConfiguration.View.RelationshipPickerView = function() {
    ProcessConfiguration.View.RelationshipPickerView.initializeBase(this);
}
ProcessConfiguration.View.RelationshipPickerView.prototype = {
    $2h_1: null,
    
    initialize: function() {
        this.$2h_1 = Mscrm.BusinessRules.SharedMethods.getList(Mscrm.SimpleInlineControlView);
        this.$0_0 = new Mscrm.Proxies.JQueryProxy();
        if (this.get_viewModel().get_picklistCount() > 0) {
            var $v_0 = this.$4J_1.build(this.get_viewModel(), this.$2h_1);
            this.get_element().append($v_0);
        }
        else {
            var $v_1 = this.$0_0.fromHtml('<div></div>');
            $v_1.set_text(window.LOCID_PROCESS_DIALOG_NO_RELATION);
            $v_1.addClass('warningMessage');
            this.get_element().append($v_1);
        }
        if (this.get_viewModel().get_numberOfInvalidRelationships() > 0) {
            var $v_2 = this.$n_1.build('/_imgs/inlineedit/alert.png', window.LOCID_PROCESS_DIALOG_INVALID, window.LOCID_PROCESS_DIALOG_INVALID);
            var $v_3 = this.$0_0.fromHtml('<div></div>');
            $v_3.addClass('warningBanner');
            $v_3.append($v_2);
            var $v_4 = this.$0_0.fromHtml('<div></div>');
            $v_4.set_text(window.LOCID_PROCESS_DIALOG_INVALID);
            $v_4.addClass('invalidMessage');
            $v_3.append($v_4);
            var $v_5 = '#DlgHdBodyContainer';
            var $v_6 = this.$0_0.selectElement($v_5);
            $v_6.before($v_3);
            $v_6.addClass('invalidState');
        }
    },
    
    $B_1: null,
    
    get_element: function() {
        var $v_0 = '#relationshippickerdialogcontainer';
        this.$B_1 = this.$0_0.selectElement($v_0);
        return this.$B_1;
    },
    
    set_element: function($p0) {
        Error.notImplemented('The method or operation is not implemented.');
        return $p0;
    },
    
    $3_1: null,
    
    get_viewModel: function() {
        if (this.$3_1) {
            return this.$3_1;
        }
        this.$3_1 = this.$b_0;
        return this.$3_1;
    },
    
    dispose: function() {
        this.$2h_1 = null;
    },
    
    getRelationshipModelList: function() {
        var $v_0 = Mscrm.BusinessRules.SharedMethods.getList(ProcessConfiguration.Models.IRelationshipModel);
        for (var $v_1 = 0; $v_1 < this.$2h_1.get_count(); $v_1++) {
            var $v_2 = this.get_viewModel().get_picklistViewModelDictionary()[$v_1.toString()];
            var $v_3 = (this.$2h_1.get_item($v_1).get_editView()).get_dataContext().get_attribute().get_rawValue();
            if (!IsNull($v_3) && $v_3) {
                var $v_4 = $v_2.$37_0.get_item($v_3 - 1);
                if (!IsNull($v_4)) {
                    $v_0.add($v_4);
                }
            }
        }
        return $v_0;
    },
    
    $4J_1: null,
    
    get_relationshipsTableBuilder: function() {
        return this.$4J_1;
    },
    
    set_relationshipsTableBuilder: function($p0) {
        this.$4J_1 = $p0;
        return $p0;
    },
    
    $n_1: null,
    
    get_imageBuilder: function() {
        return this.$n_1;
    },
    
    set_imageBuilder: function($p0) {
        this.$n_1 = $p0;
        return $p0;
    }
}


Type.registerNamespace('ProcessConfiguration.ViewModel');

ProcessConfiguration.ViewModel.EntityMetadataInfo = function(jsonWrapper) {
    this.$E_0 = jsonWrapper;
}
ProcessConfiguration.ViewModel.EntityMetadataInfo.prototype = {
    
    get_entityFields: function() {
        return this.$E_0.Fields;
    },
    
    entityAttributeList: function() {
        if (IsNull(this.$3C_0)) {
            this.$3C_0 = new Array(0);
            for (var $v_0 = 0; $v_0 < this.$E_0.Fields.length; $v_0++) {
                var $v_1 = new Mscrm.EnumOptionJsonWrapper();
                $v_1.Value = $v_0;
                $v_1.Label = this.$E_0.Fields[$v_0].Label.Description;
                Array.add(this.$3C_0, $v_1);
            }
        }
        return this.$3C_0;
    },
    
    $E_0: null,
    $3C_0: null
}


ProcessControl.Configuration.PageLayoutWrapper.registerClass('ProcessControl.Configuration.PageLayoutWrapper');
ProcessControl.Configuration.ClientDataJsonWrapper.registerClass('ProcessControl.Configuration.ClientDataJsonWrapper');
ProcessControl.Configuration.FieldMetadataJsonWrapper.registerClass('ProcessControl.Configuration.FieldMetadataJsonWrapper');
ProcessControl.Configuration.LabelJsonWrapper.registerClass('ProcessControl.Configuration.LabelJsonWrapper');
ProcessControl.Configuration.ProcessJsonWrapper.registerClass('ProcessControl.Configuration.ProcessJsonWrapper');
ProcessControl.Configuration.EntityRelationshipMetadataWrapper.registerClass('ProcessControl.Configuration.EntityRelationshipMetadataWrapper');
ProcessControl.Configuration.EntityMetadataJsonWrapper.registerClass('ProcessControl.Configuration.EntityMetadataJsonWrapper');
ProcessControl.Configuration.SourceData.registerClass('ProcessControl.Configuration.SourceData');
ProcessControl.Configuration.EmptyView.registerClass('ProcessControl.Configuration.EmptyView', null, ProcessControl.Configuration.IProcessControlView);
ProcessControl.Configuration.StepControlViewBase.registerClass('ProcessControl.Configuration.StepControlViewBase', ProcessControl.Configuration.ProcessControlViewBase$2.$$(Microsoft.Crm.Workflow.ObjectModel.StepBase, ProcessControl.Configuration.EmptyView), ProcessControl.Configuration.IProcessControlView);
ProcessControl.Configuration.ProcessControlStepView.registerClass('ProcessControl.Configuration.ProcessControlStepView', ProcessControl.Configuration.ProcessControlViewBase$2.$$(Microsoft.Crm.Workflow.ObjectModel.StepStep, ProcessControl.Configuration.StepControlViewBase), ProcessConfiguration.View.ILegacyProcessControlView);
ProcessControl.Configuration.ProcessControlStageView.registerClass('ProcessControl.Configuration.ProcessControlStageView', ProcessControl.Configuration.ProcessControlExtensibleView$2.$$(ProcessControl.Configuration.ProcessControlStepView, Microsoft.Crm.Workflow.ObjectModel.StageStep), ProcessConfiguration.View.ILegacyProcessControlView);
ProcessControl.Configuration.ProcessControlPageView.registerClass('ProcessControl.Configuration.ProcessControlPageView', ProcessControl.Configuration.ProcessControlStageView);
ProcessControl.Configuration.Initializer.registerClass('ProcessControl.Configuration.Initializer');
ProcessControl.Configuration.RelationshipPickerDialogInitializer.registerClass('ProcessControl.Configuration.RelationshipPickerDialogInitializer');
ProcessControl.Configuration.ConfiguratorActions.registerClass('ProcessControl.Configuration.ConfiguratorActions');
ProcessControl.Configuration.SystemStepType.registerClass('ProcessControl.Configuration.SystemStepType');
ProcessControl.Configuration.Constants.registerClass('ProcessControl.Configuration.Constants');
ProcessControl.Configuration.SystemStepParams.registerClass('ProcessControl.Configuration.SystemStepParams');
ProcessControl.Configuration.CssClass.registerClass('ProcessControl.Configuration.CssClass');
ProcessControl.Configuration.HtmlTemplate.registerClass('ProcessControl.Configuration.HtmlTemplate');
ProcessControl.Configuration.AddChildControlBehavior.registerClass('ProcessControl.Configuration.AddChildControlBehavior', Mscrm.CrmUIBehavior);
ProcessControl.Configuration.AddBranchConditionBehavior.registerClass('ProcessControl.Configuration.AddBranchConditionBehavior', ProcessControl.Configuration.AddChildControlBehavior);
ProcessControl.Configuration.AddStageBehavior.registerClass('ProcessControl.Configuration.AddStageBehavior', ProcessControl.Configuration.AddChildControlBehavior);
ProcessControl.Configuration.AddStepBehavior.registerClass('ProcessControl.Configuration.AddStepBehavior', ProcessControl.Configuration.AddChildControlBehavior);
ProcessControl.Configuration.ConditionBuilder.registerClass('ProcessControl.Configuration.ConditionBuilder', null, ProcessControl.Configuration.IConditionBuilder);
ProcessControl.Configuration.ProcessEventAggregator.registerClass('ProcessControl.Configuration.ProcessEventAggregator', Mscrm.CrmUIControl, ProcessControl.Configuration.IEventAggregator);
ProcessControl.Configuration.EventNames.registerClass('ProcessControl.Configuration.EventNames');
ProcessControl.Configuration.KeyCode.registerClass('ProcessControl.Configuration.KeyCode');
ProcessControl.Configuration.BpfMenuActions.registerClass('ProcessControl.Configuration.BpfMenuActions');
ProcessControl.Configuration.BpfDataUtility.registerClass('ProcessControl.Configuration.BpfDataUtility');
ProcessControl.Configuration.solutionParameter.registerClass('ProcessControl.Configuration.solutionParameter');
ProcessControl.Configuration.BPFClientProxy.registerClass('ProcessControl.Configuration.BPFClientProxy');
ProcessControl.Configuration.ProcessDesignerMenuActions.registerClass('ProcessControl.Configuration.ProcessDesignerMenuActions');
ProcessControl.Configuration.ProcessDesignerMenuActions.ReturnObj.registerClass('ProcessControl.Configuration.ProcessDesignerMenuActions.ReturnObj');
ProcessControl.Configuration.EntityTabsControl.registerClass('ProcessControl.Configuration.EntityTabsControl', Mscrm.FormInputControl.Tabs.TabsControl);
ProcessControl.Configuration.ProcessConfigurationUtility.registerClass('ProcessControl.Configuration.ProcessConfigurationUtility');
ProcessControl.Configuration.ProcessSaveEventArgs.registerClass('ProcessControl.Configuration.ProcessSaveEventArgs');
ProcessControl.Configuration.ProcessSaveStatus.registerClass('ProcessControl.Configuration.ProcessSaveStatus');
ProcessControl.Configuration.SuccessStatusReason.registerClass('ProcessControl.Configuration.SuccessStatusReason');
ProcessControl.Configuration.FailureStatusReason.registerClass('ProcessControl.Configuration.FailureStatusReason');
ProcessControl.Configuration.StageCategory.registerClass('ProcessControl.Configuration.StageCategory');
ProcessControl.Configuration.ProcessEnabledEntities.registerClass('ProcessControl.Configuration.ProcessEnabledEntities');
ProcessControl.Configuration.RelationshipPickerDialogArguments.registerClass('ProcessControl.Configuration.RelationshipPickerDialogArguments', null, ProcessControl.Configuration.IRelationshipPickerDialogArguments);
ProcessControl.Configuration.EmptyJsonWrapper.registerClass('ProcessControl.Configuration.EmptyJsonWrapper');
ProcessControl.Configuration.EmptyViewModel.registerClass('ProcessControl.Configuration.EmptyViewModel', null, Sys.IDisposable);
ProcessControl.Configuration.ProcessControlEntityView.registerClass('ProcessControl.Configuration.ProcessControlEntityView', ProcessControl.Configuration.ProcessControlExtensibleView$2.$$(ProcessControl.Configuration.ProcessControlStageView, Microsoft.Crm.Workflow.ObjectModel.EntityStep));
ProcessControl.Configuration.ProcessControlView.registerClass('ProcessControl.Configuration.ProcessControlView', ProcessControl.Configuration.ProcessControlExtensibleView$2.$$(ProcessControl.Configuration.ProcessControlEntityView, Microsoft.Crm.Workflow.ObjectModel.WorkflowStep), ProcessConfiguration.View.ILegacyProcessControlView);
ProcessConfiguration.InitializationContext.registerClass('ProcessConfiguration.InitializationContext', null, ProcessConfiguration.IInitializationContext);
ProcessConfiguration.Behavior.StageFocusBehaviorAdapter.registerClass('ProcessConfiguration.Behavior.StageFocusBehaviorAdapter', null, ProcessConfiguration.Behavior.IStageFocusBehaviorAdapter);
ProcessConfiguration.Behavior.StageFocusBehavior.registerClass('ProcessConfiguration.Behavior.StageFocusBehavior', ProcessConfiguration.Behavior.FocusBehaviorBase$1.$$(ProcessControl.Configuration.ProcessControlStageView));
ProcessConfiguration.Behavior.StageFocusEventBubbleBehavior.registerClass('ProcessConfiguration.Behavior.StageFocusEventBubbleBehavior', ProcessConfiguration.Behavior.StageFocusBehavior);
ProcessConfiguration.Behavior.StageFocusEventCapturingBehavior.registerClass('ProcessConfiguration.Behavior.StageFocusEventCapturingBehavior', ProcessConfiguration.Behavior.StageFocusBehavior);
ProcessConfiguration.Behavior.StageHoverBehavior.registerClass('ProcessConfiguration.Behavior.StageHoverBehavior', ProcessConfiguration.Behavior.HoverBehavior$1.$$(ProcessControl.Configuration.ProcessControlStageView));
ProcessConfiguration.Behavior.StageHoverBehaviorAdapter.registerClass('ProcessConfiguration.Behavior.StageHoverBehaviorAdapter', null, ProcessConfiguration.Behavior.IStageHoverBehaviorAdapter);
ProcessConfiguration.Behavior.StepFocusBehaviorAdapter.registerClass('ProcessConfiguration.Behavior.StepFocusBehaviorAdapter', null, ProcessConfiguration.Behavior.IStepFocusBehaviorAdapter);
ProcessConfiguration.Behavior.StepFocusBehavior.registerClass('ProcessConfiguration.Behavior.StepFocusBehavior', ProcessConfiguration.Behavior.FocusBehaviorBase$1.$$(ProcessControl.Configuration.ProcessControlStepView));
ProcessConfiguration.Behavior.StepFocusEventBubbleBehavior.registerClass('ProcessConfiguration.Behavior.StepFocusEventBubbleBehavior', ProcessConfiguration.Behavior.StepFocusBehavior);
ProcessConfiguration.Behavior.StepFocusEventCapturingBehavior.registerClass('ProcessConfiguration.Behavior.StepFocusEventCapturingBehavior', ProcessConfiguration.Behavior.StepFocusBehavior);
ProcessConfiguration.Behavior.StepHoverBehavior.registerClass('ProcessConfiguration.Behavior.StepHoverBehavior', ProcessConfiguration.Behavior.HoverBehavior$1.$$(ProcessControl.Configuration.ProcessControlStepView));
ProcessConfiguration.Behavior.StepHoverBehaviorAdapter.registerClass('ProcessConfiguration.Behavior.StepHoverBehaviorAdapter', null, ProcessConfiguration.Behavior.IStepHoverBehaviorAdapter, Sys.IDisposable);
ProcessConfiguration.Behavior.AddEntityBehavior.registerClass('ProcessConfiguration.Behavior.AddEntityBehavior', ProcessControl.Configuration.AddChildControlBehavior);
ProcessConfiguration.Behavior.BehaviorsFactory.registerClass('ProcessConfiguration.Behavior.BehaviorsFactory', null, ProcessConfiguration.Behavior.IBehaviorsFactory);
ProcessConfiguration.Behavior.ConfiguratorFlyout.registerClass('ProcessConfiguration.Behavior.ConfiguratorFlyout');
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.registerClass('ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior');
ProcessConfiguration.Behavior.ExpandCollapseBehavior.registerClass('ProcessConfiguration.Behavior.ExpandCollapseBehavior');
ProcessConfiguration.Behavior.ShowImageUploaderBehavior.registerClass('ProcessConfiguration.Behavior.ShowImageUploaderBehavior');
ProcessConfiguration.Behavior.MoveBehavior.registerClass('ProcessConfiguration.Behavior.MoveBehavior', Mscrm.CrmUIBehavior);
ProcessConfiguration.Behavior.ResizeBehavior.registerClass('ProcessConfiguration.Behavior.ResizeBehavior');
ProcessConfiguration.View.ViewBase.registerClass('ProcessConfiguration.View.ViewBase');
ProcessConfiguration.Behavior.AddBranchConditionBehaviorAdapter.registerClass('ProcessConfiguration.Behavior.AddBranchConditionBehaviorAdapter', ProcessConfiguration.View.ViewBase, ProcessConfiguration.Behavior.IAddBranchConditionBehaviorAdapter, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.Builder.ButtonBuilder.registerClass('ProcessConfiguration.Builder.ButtonBuilder', null, ProcessConfiguration.Builder.IButtonBuilder);
ProcessConfiguration.Builder.ImageBuilder.registerClass('ProcessConfiguration.Builder.ImageBuilder', null, ProcessConfiguration.Builder.IImageBuilder);
ProcessConfiguration.Builder.InlineEditControlBuilder.registerClass('ProcessConfiguration.Builder.InlineEditControlBuilder', null, ProcessConfiguration.Builder.IInlineEditControlBuilder);
ProcessConfiguration.Builder.StageBuilder.registerClass('ProcessConfiguration.Builder.StageBuilder', ProcessControl.Configuration.ProcessBuilder$1.$$(Microsoft.Crm.Workflow.ObjectModel.StepBase), ProcessConfiguration.Builder.IStageBuilder);
ProcessConfiguration.Builder.PageBuilder.registerClass('ProcessConfiguration.Builder.PageBuilder', ProcessConfiguration.Builder.StageBuilder);
ProcessConfiguration.Builder.StepBuilder.registerClass('ProcessConfiguration.Builder.StepBuilder', ProcessControl.Configuration.ProcessBuilder$1.$$(Microsoft.Crm.Workflow.ObjectModel.StepBase), ProcessConfiguration.Builder.IStepBuilder);
ProcessConfiguration.Builder.PageStepBuilder.registerClass('ProcessConfiguration.Builder.PageStepBuilder', ProcessConfiguration.Builder.StepBuilder);
ProcessConfiguration.Builder.RelationshipsTableBuilder.registerClass('ProcessConfiguration.Builder.RelationshipsTableBuilder', null, ProcessConfiguration.Builder.IRelationshipsTableBuilder);
ProcessConfiguration.Events.EventManager.registerClass('ProcessConfiguration.Events.EventManager', null, ProcessConfiguration.Events.IEventManager);
ProcessConfiguration.Models.IdentifyAccountSystemControlMetadataModel.registerClass('ProcessConfiguration.Models.IdentifyAccountSystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlAttributeMetadataModel, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.IdentifyCaseSystemControlMetadataModel.registerClass('ProcessConfiguration.Models.IdentifyCaseSystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlAttributeMetadataModel, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.IncidentIdentifyContactSystemControlMetadataModel.registerClass('ProcessConfiguration.Models.IncidentIdentifyContactSystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlAttributeMetadataModel, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.LeadIdentifyContactSystemControlMetadataModel.registerClass('ProcessConfiguration.Models.LeadIdentifyContactSystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlAttributeMetadataModel, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.IdentifyCustomerSystemControlMetadataModel.registerClass('ProcessConfiguration.Models.IdentifyCustomerSystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlAttributeMetadataModel, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.AvailableSystemControlsRefreshedEventArgs.registerClass('ProcessConfiguration.Models.AvailableSystemControlsRefreshedEventArgs', Sys.EventArgs);
ProcessConfiguration.Models.RelationshipModel.registerClass('ProcessConfiguration.Models.RelationshipModel', null, ProcessConfiguration.Models.IRelationshipModel);
ProcessConfiguration.Models.MetadataModelFactory.registerClass('ProcessConfiguration.Models.MetadataModelFactory', null, ProcessConfiguration.Models.IMetadataModelFactory);
ProcessConfiguration.Models.EntityMetadataModel.registerClass('ProcessConfiguration.Models.EntityMetadataModel', null, ProcessConfiguration.Models.IEntityMetadataModel);
ProcessConfiguration.Models.AttributeMetadataModel.registerClass('ProcessConfiguration.Models.AttributeMetadataModel', null, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.ResolveSystemControlMetadataModel.registerClass('ProcessConfiguration.Models.ResolveSystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlAttributeMetadataModel, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.SolutionSystemControlMetadataModel.registerClass('ProcessConfiguration.Models.SolutionSystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlAttributeMetadataModel, ProcessConfiguration.Models.IAttributeMetadataModel);
ProcessConfiguration.Models.SystemControlMetadataModel.registerClass('ProcessConfiguration.Models.SystemControlMetadataModel', null, ProcessConfiguration.Models.ISystemControlMetadataModel);
ProcessConfiguration.Services.RelationshipFilteringService.registerClass('ProcessConfiguration.Services.RelationshipFilteringService', null, ProcessConfiguration.Services.IRelationshipFilteringService);
ProcessConfiguration.Services.MetadataService.registerClass('ProcessConfiguration.Services.MetadataService', null, ProcessConfiguration.Services.IMetadataService, Sys.IDisposable);
ProcessConfiguration.Utility.RelationshipFilteringModule.registerClass('ProcessConfiguration.Utility.RelationshipFilteringModule');
ProcessConfiguration.Utility.LabelDictionary.registerClass('ProcessConfiguration.Utility.LabelDictionary');
ProcessConfiguration.Utility.ProcessViewVisitor.registerClass('ProcessConfiguration.Utility.ProcessViewVisitor', null, ProcessConfiguration.Utility.IProcessViewVisitor);
ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.registerClass('ProcessConfiguration.Utility.RelationshipPickerDialogLauncher', null, ProcessConfiguration.Utility.IRelationshipPickerDialogLauncher);
ProcessConfiguration.ViewModels.AttributeLogicalNameChangedEventArgs.registerClass('ProcessConfiguration.ViewModels.AttributeLogicalNameChangedEventArgs', Sys.EventArgs);
ProcessConfiguration.ViewModels.AttributeValidatedEventArgs.registerClass('ProcessConfiguration.ViewModels.AttributeValidatedEventArgs', Sys.EventArgs);
ProcessConfiguration.ViewModels.ControlModel.registerClass('ProcessConfiguration.ViewModels.ControlModel', null, ProcessConfiguration.ViewModels.IControlModel);
ProcessConfiguration.ViewModels.EntityModel.registerClass('ProcessConfiguration.ViewModels.EntityModel', null, ProcessConfiguration.ViewModels.IEntityModel);
ProcessConfiguration.ViewModels.ViewModelBase.registerClass('ProcessConfiguration.ViewModels.ViewModelBase');
ProcessConfiguration.ViewModels.StepViewModel.registerClass('ProcessConfiguration.ViewModels.StepViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IStepViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.ViewModels.PageStepViewModel.registerClass('ProcessConfiguration.ViewModels.PageStepViewModel', ProcessConfiguration.ViewModels.StepViewModel);
ProcessConfiguration.ViewModels.RelationshipControlViewModel.registerClass('ProcessConfiguration.ViewModels.RelationshipControlViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IRelationshipControlViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.ViewModels.SourceLogicalNameChangedEventArgs.registerClass('ProcessConfiguration.ViewModels.SourceLogicalNameChangedEventArgs', ProcessConfiguration.ViewModels.AttributeLogicalNameChangedEventArgs);
ProcessConfiguration.ViewModels.StepEventArgs.registerClass('ProcessConfiguration.ViewModels.StepEventArgs', Sys.EventArgs);
ProcessConfiguration.ViewModels.StepListViewModel.registerClass('ProcessConfiguration.ViewModels.StepListViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IStepListViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.ViewModels.PageStepListViewModel.registerClass('ProcessConfiguration.ViewModels.PageStepListViewModel', ProcessConfiguration.ViewModels.StepListViewModel);
ProcessConfiguration.ViewModels.StepModel.registerClass('ProcessConfiguration.ViewModels.StepModel', null, ProcessConfiguration.ViewModels.IStepModel);
ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult.registerClass('ProcessConfiguration.ViewModels.ProcessConfigurationValidationResult', null, Mscrm.IValidationResult);
ProcessConfiguration.ViewModels.RelationshipPickerPicklistViewModel.registerClass('ProcessConfiguration.ViewModels.RelationshipPickerPicklistViewModel', null, ProcessConfiguration.ViewModels.IRelationshipPickerPicklistViewModel);
ProcessConfiguration.ViewModels.ConditionBranchModel.registerClass('ProcessConfiguration.ViewModels.ConditionBranchModel', null, ProcessConfiguration.ViewModels.IConditionBranchModel);
ProcessConfiguration.ViewModels.ConditionBranchViewModel.registerClass('ProcessConfiguration.ViewModels.ConditionBranchViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IConditionBranchViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.ViewModels.ConditionModel.registerClass('ProcessConfiguration.ViewModels.ConditionModel', null, ProcessConfiguration.ViewModels.IConditionModel);
ProcessConfiguration.ViewModels.ConditionViewModel.registerClass('ProcessConfiguration.ViewModels.ConditionViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IConditionViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.ViewModels.SetNextStageModel.registerClass('ProcessConfiguration.ViewModels.SetNextStageModel', null, ProcessConfiguration.ViewModels.ISetNextStageModel);
ProcessConfiguration.ViewModels.StageModel.registerClass('ProcessConfiguration.ViewModels.StageModel', null, ProcessConfiguration.ViewModels.IStageModel);
ProcessConfiguration.ViewModels.StageViewModel.registerClass('ProcessConfiguration.ViewModels.StageViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IStageViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.ViewModels.StepModelFactory.registerClass('ProcessConfiguration.ViewModels.StepModelFactory', null, ProcessConfiguration.ViewModels.IStepModelFactory);
ProcessConfiguration.ViewModels.ViewModelFactory.registerClass('ProcessConfiguration.ViewModels.ViewModelFactory', null, ProcessConfiguration.ViewModels.IViewModelFactory);
ProcessConfiguration.ViewModels.RelationshipPickerViewModel.registerClass('ProcessConfiguration.ViewModels.RelationshipPickerViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IRelationshipPickerViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.ViewModels.ProcessConfigurationViewModel.registerClass('ProcessConfiguration.ViewModels.ProcessConfigurationViewModel', ProcessConfiguration.ViewModels.ViewModelBase, ProcessConfiguration.ViewModels.IProcessConfigurationViewModel, Mscrm.BusinessRules.ViewModels.IViewModel, Sys.INotifyPropertyChange, Sys.IDisposable);
ProcessConfiguration.View.ButtonView.registerClass('ProcessConfiguration.View.ButtonView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IButtonView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.View.ButtonClickedEventArgs.registerClass('ProcessConfiguration.View.ButtonClickedEventArgs', Sys.EventArgs);
ProcessConfiguration.View.StageView.registerClass('ProcessConfiguration.View.StageView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IStageView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable, ProcessConfiguration.View.INavigationInfo);
ProcessConfiguration.View.PageView.registerClass('ProcessConfiguration.View.PageView', ProcessConfiguration.View.StageView);
ProcessConfiguration.View.ProcessControlStepViewAdapter.registerClass('ProcessConfiguration.View.ProcessControlStepViewAdapter', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IProcessControlStepViewAdapter, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.View.ProcessControlPageStepViewAdapter.registerClass('ProcessConfiguration.View.ProcessControlPageStepViewAdapter', ProcessConfiguration.View.ProcessControlStepViewAdapter);
ProcessConfiguration.View.ProcessEditorErrorContainerProvider.registerClass('ProcessConfiguration.View.ProcessEditorErrorContainerProvider', null, Mscrm.IErrorDisplayContainerProvider);
ProcessConfiguration.View.ProcessControlStageViewAdapter.registerClass('ProcessConfiguration.View.ProcessControlStageViewAdapter', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IProcessControlStageViewAdapter, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.View.ConditionBranchView.registerClass('ProcessConfiguration.View.ConditionBranchView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IConditionBranchView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable, ProcessConfiguration.View.INavigationInfo);
ProcessConfiguration.View.ConditionView.registerClass('ProcessConfiguration.View.ConditionView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IConditionView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable, ProcessConfiguration.View.ICompositeView);
ProcessConfiguration.View.RelationshipControlView.registerClass('ProcessConfiguration.View.RelationshipControlView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IRelationshipControlView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.View.StepFieldViewBase.registerClass('ProcessConfiguration.View.StepFieldViewBase', ProcessControl.Configuration.StepControlViewBase, ProcessConfiguration.View.IStepFieldControlView);
ProcessConfiguration.View.StepListView.registerClass('ProcessConfiguration.View.StepListView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IStepListView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.View.PageStepSourceView.registerClass('ProcessConfiguration.View.PageStepSourceView', ProcessConfiguration.View.StepFieldViewBase);
ProcessConfiguration.View.StepFieldView.registerClass('ProcessConfiguration.View.StepFieldView', ProcessConfiguration.View.StepFieldViewBase);
ProcessConfiguration.View.ViewFactory.registerClass('ProcessConfiguration.View.ViewFactory', null, ProcessConfiguration.View.IViewFactory);
ProcessConfiguration.View.ProcessConfigurationView.registerClass('ProcessConfiguration.View.ProcessConfigurationView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IProcessConfigurationView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.View.ProcessControlViewAdapter.registerClass('ProcessConfiguration.View.ProcessControlViewAdapter', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IProcessControlViewAdapter, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.View.PageStepFieldView.registerClass('ProcessConfiguration.View.PageStepFieldView', ProcessConfiguration.View.StepFieldView);
ProcessConfiguration.View.ViewAdapterFactory.registerClass('ProcessConfiguration.View.ViewAdapterFactory', null, ProcessConfiguration.View.IViewAdapterFactory);
ProcessConfiguration.View.RelationshipPickerView.registerClass('ProcessConfiguration.View.RelationshipPickerView', ProcessConfiguration.View.ViewBase, ProcessConfiguration.View.IRelationshipPickerView, Mscrm.BusinessRules.Views.IView, Sys.IDisposable);
ProcessConfiguration.ViewModel.EntityMetadataInfo.registerClass('ProcessConfiguration.ViewModel.EntityMetadataInfo');
ProcessControl.Configuration.RelationshipPickerDialogInitializer.$12 = null;
ProcessControl.Configuration.RelationshipPickerDialogInitializer.$4u = null;
ProcessControl.Configuration.ConfiguratorActions.activate = 'ActivateBusinessProcess';
ProcessControl.Configuration.ConfiguratorActions.deactivate = 'DeactivateBusinessProcess';
ProcessControl.Configuration.ConfiguratorActions.update = 'UpdateProcess';
ProcessControl.Configuration.ConfiguratorActions.deleteProcess = 'DeleteBusinessProcess';
ProcessControl.Configuration.ConfiguratorActions.fetchMetadata = 'GetEntityAndRelationshipMetadata';
ProcessControl.Configuration.ConfiguratorActions.fetchEntityMetadata = 'GetEntityMetadata';
ProcessControl.Configuration.ConfiguratorActions.saveAs = 'SaveAsBpf';
ProcessControl.Configuration.ConfiguratorActions.addSolutionComponent = 'AddSolutionComponent';
ProcessControl.Configuration.SystemStepType.identifyAccount = 'IdentifyAccount';
ProcessControl.Configuration.SystemStepType.identifyCase = 'IdentifyCase';
ProcessControl.Configuration.SystemStepType.identifyContact = 'LeadIdentifyContact';
ProcessControl.Configuration.SystemStepType.identifyCustomer = 'IdentifyCustomer';
ProcessControl.Configuration.SystemStepType.resolve = 'Resolve';
ProcessControl.Configuration.SystemStepType.solution = 'Solution';
ProcessControl.Configuration.SystemStepType.undefined = '';
ProcessControl.Configuration.Constants.dialogContainerId = 'relationshippickerdialogcontainer';
ProcessControl.Configuration.Constants.dialogBodyContainerId = 'DlgHdBodyContainer';
ProcessControl.Configuration.Constants.noneIndex = 0;
ProcessControl.Configuration.Constants.title = 'title';
ProcessControl.Configuration.Constants.id = 'pcc';
ProcessControl.Configuration.Constants.expandContainerSelector = '#expandContainer';
ProcessControl.Configuration.Constants.collapseContainerSelector = '#collapseContainer';
ProcessControl.Configuration.Constants.processNameSelector = '#ProcessName';
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
ProcessControl.Configuration.Constants.bodyViewContainerId = 'bpfConfContent';
ProcessControl.Configuration.Constants.footerViewContainerId = 'bpfConfFooter';
ProcessControl.Configuration.Constants.formRequired = '/_imgs/frm_required.gif';
ProcessControl.Configuration.Constants.addStageIcon = '/_imgs/processcontrol/grey_plus_16.png';
ProcessControl.Configuration.Constants.addStepIcon = '/_imgs/processcontrol/white_plus_16.png';
ProcessControl.Configuration.Constants.addBranchIcon = '/_imgs/processcontrol/add_branch_16.png';
ProcessControl.Configuration.Constants.addConditionIcon = '/_imgs/processcontrol/green_plus_16.png';
ProcessControl.Configuration.Constants.alertIcon = '/_imgs/inlineedit/alert.png';
ProcessControl.Configuration.Constants.entityStepColumn = 'step';
ProcessControl.Configuration.Constants.entityFieldColumn = 'field';
ProcessControl.Configuration.Constants.entitySourceColumn = 'source';
ProcessControl.Configuration.Constants.stepNameIdFormat = '{0}_n';
ProcessControl.Configuration.Constants.stepFieldIdFormat = '{0}_f';
ProcessControl.Configuration.Constants.stepSourceIdFormat = '{0}_s';
ProcessControl.Configuration.Constants.stepRequiredIdFormat = '{0}_req';
ProcessControl.Configuration.Constants.stepRelatedEntityFormat = '{0} ({1})';
ProcessControl.Configuration.Constants.saveSuccessMessage = 'success';
ProcessControl.Configuration.Constants.bpfCategory = 4;
ProcessControl.Configuration.Constants.deleteKeyCode = 46;
ProcessControl.Configuration.Constants.maxStepInStage = 30;
ProcessControl.Configuration.Constants.maxStagePerEntity = 30;
ProcessControl.Configuration.Constants.maxBranchPerStage = 10;
ProcessControl.Configuration.Constants.maxNestedLevel = 5;
ProcessControl.Configuration.SystemStepParams.leadIdentifyContactControlId = 'parentcontactid';
ProcessControl.Configuration.SystemStepParams.identifyAccountControlId = 'parentaccountid';
ProcessControl.Configuration.SystemStepParams.identifyCustomerControlId = 'customer';
ProcessControl.Configuration.SystemStepParams.incidentIdentifyContactControlId = 'contact';
ProcessControl.Configuration.SystemStepParams.identifyCaseControlId = 'relatedcases';
ProcessControl.Configuration.SystemStepParams.solutionControlId = 'CaseResearch_LinkControl';
ProcessControl.Configuration.SystemStepParams.resolveControlId = 'IncidentResolution_LinkControl';
ProcessControl.Configuration.SystemStepParams.leadIdentifyContactDataField = 'parentcontactid';
ProcessControl.Configuration.SystemStepParams.identifyCustomerDataField = 'customerid';
ProcessControl.Configuration.SystemStepParams.incidentIdentifyContactDataField = 'primarycontactid';
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
ProcessControl.Configuration.CssClass.entityBodyClassFormat = 'pc_en_{0}_body';
ProcessControl.Configuration.CssClass.stepClass = 'pc_step';
ProcessControl.Configuration.CssClass.pageStepClass = 'pc_pagestep';
ProcessControl.Configuration.CssClass.stepNameControlContainerClass = 'pc_step_namecontrol_container';
ProcessControl.Configuration.CssClass.requiredAreaContainerClass = 'pc_step_req';
ProcessControl.Configuration.CssClass.requiredClass = 'prc_step_rc';
ProcessControl.Configuration.CssClass.inlineRequiredLevel = 'ms-crm-Inline-RequiredLevel';
ProcessControl.Configuration.CssClass.stepHeaderClassName = 'step-header';
ProcessControl.Configuration.CssClass.stepNameValueClassName = 'pc_step_name_value_container';
ProcessControl.Configuration.CssClass.stepRequiredClassName = 'pc_step_required_container';
ProcessControl.Configuration.CssClass.stageNameClassName = 'stage-name';
ProcessControl.Configuration.CssClass.stageRelationshipClassName = 'stage-relationship';
ProcessControl.Configuration.CssClass.stageRelationshipLinkClassName = 'stage-relationship-link';
ProcessControl.Configuration.CssClass.pageStepNameValueClassName = 'pc_pagestep_name_value_container';
ProcessControl.Configuration.CssClass.pageStepElementClassName = 'pc_pagestep_element';
ProcessControl.Configuration.CssClass.conditionClass = 'condition';
ProcessControl.Configuration.CssClass.conditionBranchClass = 'conditionbranch';
ProcessControl.Configuration.CssClass.conditionBranchAddStageButtonClass = 'conditions';
ProcessControl.Configuration.HtmlTemplate.$AK = ProcessControl.Configuration.HtmlTemplate.$63('<span class=\'{0}\'><div class=\'{1}\'><img src=\'{2}\' class=\'{3}\' tabindex=\'0\' title=\'{4}\' alt=\'{5}\' id=\'{6}\'/></div></span>', [ 'pc_step_dc', 'pc_step_del', '{0}', '{1}', '{2}', '{3}', '{4}' ]);
ProcessControl.Configuration.HtmlTemplate.$A1 = ProcessControl.Configuration.HtmlTemplate.$63('<span class=\'{0}\'><div class=\'{1}\'><img src=\'{2}\' tabindex=\'0\' title=\'{3}\' alt=\'{4}\' id=\'{5}\'/></div></span>', [ 'pc_step_req', '{0}', '{1}', '{2}', '{3}', '{4}' ]);
ProcessControl.Configuration.HtmlTemplate.$5t = '<img src=\'/_imgs/processcontrol/6x8_breadcrumb_config.png\' id = \'{0}\' class=\'bpfConfBreadcrumbImg\'>';
ProcessControl.Configuration.HtmlTemplate.$6e = '<a id=\'pcc_options\' class=\'pcc_options\' title=\'{0}\'><img src=\'/_imgs/processcontrol/23_addminus_config.png\' id=\'pcc_options_img\' class=\'bpfConfOptionsImg\' alt=\'{0}\' title=\'{0}\' tabindex=\'0\'>{1}</a>';
ProcessControl.Configuration.ProcessEventAggregator.$3x = null;
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
ProcessControl.Configuration.BpfMenuActions.$R = null;
ProcessControl.Configuration.BpfMenuActions.$5g = window.screen.availHeight;
ProcessControl.Configuration.BpfMenuActions.$5h = window.screen.availWidth - 10;
ProcessControl.Configuration.BPFClientProxy.$2p = false;
ProcessControl.Configuration.BPFClientProxy.$3S = null;
ProcessControl.Configuration.BPFClientProxy.$1S = null;
ProcessControl.Configuration.BPFClientProxy.$4l = new ProcessConfiguration.InitializationContext();
ProcessControl.Configuration.ProcessDesignerMenuActions.$1n = false;
ProcessControl.Configuration.ProcessDesignerMenuActions.$1x = null;
ProcessControl.Configuration.ProcessDesignerMenuActions.$5g = window.screen.availHeight;
ProcessControl.Configuration.ProcessDesignerMenuActions.$5h = window.screen.availWidth - 10;
ProcessControl.Configuration.ProcessSaveStatus.success = 0;
ProcessControl.Configuration.ProcessSaveStatus.failure = 1;
ProcessControl.Configuration.SuccessStatusReason.notIsDirty = 0;
ProcessControl.Configuration.SuccessStatusReason.success = 1;
ProcessControl.Configuration.FailureStatusReason.validation = 0;
ProcessControl.Configuration.FailureStatusReason.failure = 1;
ProcessControl.Configuration.StageCategory.$1r = null;
ProcessControl.Configuration.StageCategory.defaultCategory = '-1';
ProcessControl.Configuration.ProcessEnabledEntities.$w = null;
ProcessControl.Configuration.ProcessEnabledEntities.$4D = null;
ProcessControl.Configuration.ProcessEnabledEntities.$3B = null;
ProcessControl.Configuration.ProcessControlView.$3I = '';
ProcessControl.Configuration.ProcessControlView.$49 = null;
ProcessControl.Configuration.ProcessControlView.$1n = false;
ProcessControl.Configuration.ProcessControlView.$1x = null;
ProcessControl.Configuration.ProcessControlView.$1E = null;
ProcessConfiguration.Behavior.StepHoverBehavior.$46 = null;
ProcessConfiguration.Behavior.ConfiguratorFlyout.$m = null;
ProcessConfiguration.Behavior.ConfiguratorFlyout.$3E = null;
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$1w = null;
ProcessConfiguration.Behavior.ConfiguratorUnloadBehavior.$5O = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4G = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$40 = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3l = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4H = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$3m = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$4S = null;
ProcessConfiguration.Behavior.ExpandCollapseBehavior.$48 = null;
ProcessConfiguration.Behavior.ShowImageUploaderBehavior._instance = null;
ProcessConfiguration.Behavior.StageFocusBehavior.$6 = null;
ProcessConfiguration.Behavior.StepFocusBehavior.$j = null;
ProcessConfiguration.Utility.RelationshipFilteringModule.$4m = null;
ProcessConfiguration.Utility.LabelDictionary.$39 = {};
ProcessConfiguration.Utility.RelationshipPickerDialogLauncher.$5 = null;
ProcessConfiguration.ViewModels.PageStepViewModel.sourceLogicalNameChangedEventName = 'SourceLogicalNameChanged';
ProcessConfiguration.ViewModels.RelationshipControlViewModel.showWarningPropertyValue = 'ShowWarningProperty';
ProcessConfiguration.ViewModels.StepListViewModel.deletingEventName = 'Deleting';
ProcessConfiguration.ViewModels.StepListViewModel.addingEventName = 'Adding';
ProcessConfiguration.ViewModels.StepListViewModel.validAttributeLogicalNamesPropertyName = 'ValidAttributeLogicalNames';
ProcessConfiguration.ViewModels.StepViewModel.attributeValidatedEventName = 'AttributeValidated';
ProcessConfiguration.ViewModels.StepViewModel.entityMetadataModelPropertyName = 'EntityMetadataModel';
ProcessConfiguration.ViewModels.StepViewModel.canDeletePropertyName = 'CanDelete';
ProcessConfiguration.ViewModels.ViewModelBase.propertyChangedEventName = 'PropertyChanged';
ProcessConfiguration.View.ConditionView.conditionDeleteEventName = 'ConditionDeleteEvent';
