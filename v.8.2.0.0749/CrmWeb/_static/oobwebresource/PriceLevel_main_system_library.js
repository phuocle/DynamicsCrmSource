Type.registerNamespace("Mscrm");
Mscrm.PriceLevelMainSystemLibraryWebResource = function() {};
Mscrm.PriceLevelMainSystemLibraryWebResource
    .get_beginDate = function() { return Xrm.Page.ui.controls.get("begindate").getAttribute() };
Mscrm.PriceLevelMainSystemLibraryWebResource.get_endDate = function() {
    return Xrm.Page.ui.controls.get("enddate").getAttribute()
};
Mscrm.PriceLevelMainSystemLibraryWebResource.form_Load = function() {
    var $v_0 = Xrm.Page.getAttribute("begindate"), $v_1 = Xrm.Page.getAttribute("enddate");
    Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$1_0 = $v_0.getValue();
    Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$2_0 = $v_1.getValue()
};
Mscrm.PriceLevelMainSystemLibraryWebResource.beginDate_OnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.PriceLevelMainSystemLibraryWebResource.$0
        .$1_0))
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$1_0 = Mscrm.PriceLevelMainSystemLibraryWebResource
            .get_beginDate().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.PriceLevelMainSystemLibraryWebResource.$0
        .$2_0))
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$2_0 = Mscrm.PriceLevelMainSystemLibraryWebResource
            .get_endDate().getValue();
    Mscrm.CommandBarActions.isStartDateLessThanEndDate(Mscrm.PriceLevelMainSystemLibraryWebResource.get_beginDate(),
        Mscrm.PriceLevelMainSystemLibraryWebResource.get_endDate(),
        "begindate",
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$1_0,
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$2_0)
};
Mscrm.PriceLevelMainSystemLibraryWebResource.endDate_OnChange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.PriceLevelMainSystemLibraryWebResource.$0
        .$1_0))
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$1_0 = Mscrm.PriceLevelMainSystemLibraryWebResource
            .get_beginDate().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.PriceLevelMainSystemLibraryWebResource.$0
        .$2_0))
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$2_0 = Mscrm.PriceLevelMainSystemLibraryWebResource
            .get_endDate().getValue();
    Mscrm.CommandBarActions.isStartDateLessThanEndDate(Mscrm.PriceLevelMainSystemLibraryWebResource.get_beginDate(),
        Mscrm.PriceLevelMainSystemLibraryWebResource.get_endDate(),
        "enddate",
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$1_0,
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$2_0)
};
Mscrm.PriceLevelMainSystemLibraryWebResource.form_OnSave = function(context) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.PriceLevelMainSystemLibraryWebResource.$0
        .$1_0))
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$1_0 = Mscrm.PriceLevelMainSystemLibraryWebResource
            .get_beginDate().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.PriceLevelMainSystemLibraryWebResource.$0
        .$2_0))
        Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$2_0 = Mscrm.PriceLevelMainSystemLibraryWebResource
            .get_endDate().getValue();
    !Mscrm.CommandBarActions.isStartDateLessThanEndDate(Mscrm.PriceLevelMainSystemLibraryWebResource.get_beginDate(),
            Mscrm.PriceLevelMainSystemLibraryWebResource.get_endDate(),
            "enddate",
            Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$1_0,
            Mscrm.PriceLevelMainSystemLibraryWebResource.$0.$2_0) &&
        context.getEventArgs().preventDefault()
};
Mscrm.PreviousDateTimeValues = function() {};
Mscrm.PreviousDateTimeValues.prototype = {
    $1_0: null,
    get_beginDate: function() { return this.$1_0 },
    set_beginDate: function(value) {
        this.$1_0 = value;
        return value
    },
    $2_0: null,
    get_endDate: function() { return this.$2_0 },
    set_endDate: function(value) {
        this.$2_0 = value;
        return value
    }
};
Mscrm.PriceLevelMainSystemLibraryWebResource.registerClass("Mscrm.PriceLevelMainSystemLibraryWebResource");
Mscrm.PreviousDateTimeValues.registerClass("Mscrm.PreviousDateTimeValues");
Mscrm.PriceLevelMainSystemLibraryWebResource.$0 = new Mscrm.PreviousDateTimeValues;
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.PriceLevelMainSystemLibraryWebResource.form_Load;
Mscrm.begindate_onchange = Mscrm.PriceLevelMainSystemLibraryWebResource.beginDate_OnChange;
Mscrm.enddate_onchange = Mscrm.PriceLevelMainSystemLibraryWebResource.endDate_OnChange;
Mscrm.Form_onsave = Mscrm.PriceLevelMainSystemLibraryWebResource.form_OnSave