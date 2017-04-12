Type.registerNamespace("Mscrm");
Mscrm.LetterMainSystemLibraryWebResource = function() {};
Mscrm.LetterMainSystemLibraryWebResource.formOnLoad = function() { Mscrm.EntityPageHandlerFactory.create() };
Mscrm.LetterMainSystemLibraryWebResource.directionCodeOnChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("from"), $v_1 = Xrm.Page.data.entity.attributes.get("to");
    Mscrm.CommandBarActions.swapLookups($v_0, $v_1)
};
Mscrm.LetterMainSystemLibraryWebResource.registerClass("Mscrm.LetterMainSystemLibraryWebResource");
Mscrm.Form_onload = Mscrm.LetterMainSystemLibraryWebResource.formOnLoad;
Mscrm.directioncode_onchange = Mscrm.LetterMainSystemLibraryWebResource.directionCodeOnChange