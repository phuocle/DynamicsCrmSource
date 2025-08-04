Type.registerNamespace("Mscrm");
Mscrm.BookableResourceMainSystemLibraryWebResource = function() {};
Mscrm.BookableResourceMainSystemLibraryWebResource.FormOnLoad = function() {
    var $v_0 = Xrm.Page.ui.getFormType() === 1;
    if ($v_0) {
        var $v_1 = Xrm.Page.context.getUserId();
        Mscrm.BookableResourceMainSystemLibraryWebResource.DefaultTimeZone("usersettings", "timezonecode", $v_1)
    }
};
Mscrm.BookableResourceMainSystemLibraryWebResource.ContactOnChange = function() {
    var $v_0 = Xrm.Page.getAttribute("contactid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = $v_0.getValue();
        Mscrm.BookableResourceMainSystemLibraryWebResource.DefaultName("contact", "fullname", $v_1[0].id.toString())
    }
};
Mscrm.BookableResourceMainSystemLibraryWebResource.AccountOnChange = function() {
    var $v_0 = Xrm.Page.getAttribute("accountid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = $v_0.getValue();
        Mscrm.BookableResourceMainSystemLibraryWebResource.DefaultName("account", "name", $v_1[0].id.toString())
    }
};
Mscrm.BookableResourceMainSystemLibraryWebResource.UserOnChange = function() {
    var $v_0 = Xrm.Page.getAttribute("userid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = $v_0.getValue();
        Mscrm.BookableResourceMainSystemLibraryWebResource.DefaultName("systemuser", "fullname", $v_1[0].id.toString());
        Mscrm.BookableResourceMainSystemLibraryWebResource
            .DefaultTimeZone("usersettings", "timezonecode", $v_1[0].id.toString())
    }
};
Mscrm.BookableResourceMainSystemLibraryWebResource.DefaultName = function($p0, $p1, $p2) {
    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p1) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p2) &&
        Xrm.Internal.messages.retrieve($p0, $p2, [$p1]).then(function($p1_0) {
                var $v_0 = $p1_0.entity, $v_1 = $v_0.getValue($p1), $v_2 = Xrm.Page.getAttribute("name");
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setValue($v_1)
            },
            function($p1_0) {})
};
Mscrm.BookableResourceMainSystemLibraryWebResource.DefaultTimeZone = function($p0, $p1, $p2) {
    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p1) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p2) &&
        Xrm.Internal.messages.retrieve($p0, $p2, [$p1]).then(function($p1_0) {
                var $v_0 = $p1_0.entity, $v_1 = $v_0.getValue($p1);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                    var $v_2 = Xrm.Page.data.entity.attributes.get("timezone");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setValue($v_1)
                }
            },
            function($p1_0) {})
};
Mscrm.BookableResourceMainSystemLibraryWebResource.registerClass("Mscrm.BookableResourceMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.BookableResourceMainSystemLibraryWebResource.FormOnLoad;
Mscrm.contactid_onchange = Mscrm.BookableResourceMainSystemLibraryWebResource.ContactOnChange;
Mscrm.accountid_onchange = Mscrm.BookableResourceMainSystemLibraryWebResource.AccountOnChange;
Mscrm.userid_onchange = Mscrm.BookableResourceMainSystemLibraryWebResource.UserOnChange