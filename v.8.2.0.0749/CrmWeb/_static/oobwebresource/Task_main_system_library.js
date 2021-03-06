Type.registerNamespace("Mscrm");
Mscrm.TaskMainSystemLibraryWebResource = function() {};
Mscrm.TaskMainSystemLibraryWebResource.Mscrm_Form_onload = function() {
    Mscrm.EntityPageHandlerFactory.create();
    if (Xrm.Page.ui.getFormType() !== 3 &&
        Xrm.Internal.isEnabledForInteractionCentric() &&
        Xrm.Page.ui.getFormType() !== 2) {
        var $v_0 = Xrm.Page.ui.controls.get("subject");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !$v_0.getDisabled() && $v_0.setFocus();
        if (Xrm.Page.ui.getFormType() === 1) {
            var $v_1 = Xrm.Page.getAttribute("actualdurationminutes");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                var $v_2 = $v_1.getValue();
                (Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue()) ||
                        Mscrm.InternalUtilities._String.isNullOrWhiteSpace($v_1.getValue().toString())) &&
                    $v_1.setValue(30)
            }
        }
    }
};
Mscrm.TaskMainSystemLibraryWebResource.registerClass("Mscrm.TaskMainSystemLibraryWebResource");
Mscrm.Form_onload = Mscrm.TaskMainSystemLibraryWebResource.Mscrm_Form_onload