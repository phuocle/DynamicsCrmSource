Type.registerNamespace("Mscrm");
Mscrm.WorkflowActionsControl = function(element) {
    this.$$d_$3_3 = Function.createDelegate(this, this.$3_3);
    Mscrm.WorkflowActionsControl.initializeBase(this, [element])
};
Mscrm.WorkflowActionsControl.prototype = {
    initialize: function() {
        AddFocusEvent($get(this.get_id()), this.$$d_$3_3);
        WorkflowActionsCntrlOnLoad(this.$0_3, this.$2_3, this.$1_3);
        SetRenderTypeCode(Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName()).toString())
    },
    $3_3: function($p0) { SetCurrentControl(this.$0_3) },
    $0_3: null,
    $2_3: null,
    $1_3: null,
    get_controlId: function() { return this.$0_3 },
    set_controlId: function(value) {
        this.$0_3 = value;
        return value
    },
    get_hiddenSteps: function() { return this.$2_3 },
    set_hiddenSteps: function(value) {
        this.$2_3 = value;
        return value
    },
    get_cloneSteps: function() { return this.$1_3 },
    set_cloneSteps: function(value) {
        this.$1_3 = value;
        return value
    }
};
Mscrm.WorkflowActionsControl.registerClass("Mscrm.WorkflowActionsControl", Mscrm.CrmUIControl)