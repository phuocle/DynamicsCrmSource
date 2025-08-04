Type.registerNamespace("Mscrm");
Mscrm.KnowledgeBaseRecordMainSystemLibraryWebResource = function() {};
Mscrm.KnowledgeBaseRecordMainSystemLibraryWebResource.formOnLoad = function() {
    var $v_0 = "";
    if (window.IS_ONPREMISE) {
        $v_0 = Xrm.Internal.getResourceString("LOCID_NOTIFICATION_ONLINE");
        Xrm.Page.ui.setFormNotification($v_0, "WARNING", "KnowledgeBaseRecordWarningNotification")
    }
};
Mscrm.KnowledgeBaseRecordMainSystemLibraryWebResource
    .registerClass("Mscrm.KnowledgeBaseRecordMainSystemLibraryWebResource")