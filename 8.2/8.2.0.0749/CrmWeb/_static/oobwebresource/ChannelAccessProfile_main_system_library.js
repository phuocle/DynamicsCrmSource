Type.registerNamespace("Mscrm");
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource = function() {};
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource.formOnLoad = function() {
    var $v_0 = Xrm.Page.ui.controls.getByName("Role_Control");
    if ($v_0) {
        var $v_1 = "/_controls/externalpartyroles/ext_party_roles.aspx?id=",
            $v_2 = Xrm.Page.data.entity.getId(),
            $v_3 = Xrm.Page.context.getClientUrl(),
            $v_4 = Mscrm.GlobalImported.CrmUri.create($v_3 + $v_1 + $v_2);
        $v_0.setSrc($v_4.toString());
        $v_0.setVisible(true)
    }
};
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource.formOnSave = function() {
    if (Xrm.Page.data.entity.getId() != "") {
        var x = Xrm.Page.getControl("Role_Control"), y = x.getObject();
        y.contentWindow.saveForm()
    }
    var haveprivilegeschanged = Xrm.Page.getAttribute("haveprivilegeschanged");
    haveprivilegeschanged.setValue(false)
};
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource.copyProfile = function(gridControl, records) {
    if (records.length > 0) {
        var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(records[0].Id);
        Mscrm.ChannelAccessProfileMainSystemLibraryWebResource.copyProfileInternal(gridControl, $v_0)
    }
};
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource
    .copyProfileForm = function(parentEntityId) {
        Mscrm.ChannelAccessProfileMainSystemLibraryWebResource
            .copyProfileInternal(null, new Microsoft.Crm.Client.Core.Framework.Guid(parentEntityId))
    };
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource.performActionAfterCopyProfile = function(args, gridControl) {
    var $v_0 = args[0], $v_1 = args[1];
    if ($v_1) Xrm.Utility.openEntityForm("channelaccessprofile", $v_0.toString(), null);
    else !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh()
};
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource.copyProfileInternal = function(gridControl, profileId) {
    var $v_0 = Mscrm.GridCommandActions.generateStandardActionUri("cloneprofile", 3005, 1);
    $v_0.get_query()["profileId"] = profileId.toString();
    var $v_1 = [gridControl, "copyprofile", profileId, "channelaccessprofileid"], $v_2 = new Xrm.DialogOptions;
    $v_2.width = 450;
    $v_2.height = 300;
    var $v_3 = Mscrm.CommandBarActions
        .createCallbackFunctionFactory(Mscrm.ChannelAccessProfileMainSystemLibraryWebResource
            .performActionAfterCopyProfile,
            $v_1);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, [profileId.toString()], null, $v_3)
};
Mscrm.ChannelAccessProfileMainSystemLibraryWebResource
    .registerClass("Mscrm.ChannelAccessProfileMainSystemLibraryWebResource")