Type.registerNamespace("Mscrm");
Mscrm.SocialProfileMainSystemLibraryWebResource = function() {};
Mscrm.SocialProfileMainSystemLibraryWebResource.form_onsave = function(Context) {
    if (Xrm.Page.ui.getFormType() === 1) {
        Context.getEventArgs().preventDefault();
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ERR_NO_CREATE_FOR_SOCIAL"), null)
    }
};
Mscrm.SocialProfileMainSystemLibraryWebResource.registerClass("Mscrm.SocialProfileMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onsave = Mscrm.SocialProfileMainSystemLibraryWebResource.form_onsave