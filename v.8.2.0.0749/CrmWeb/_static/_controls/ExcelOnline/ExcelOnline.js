Type.registerNamespace("Mscrm.ExcelOnline");
Mscrm.ExcelOnline.ExcelOnlineControl = function(element) {
    this.$$d_$8_4 = Function.createDelegate(this, this.$8_4);
    this.$4_4 = new Mscrm.MetricsStopwatch("ExcelOnline.SessionTime");
    Mscrm.ExcelOnline.ExcelOnlineControl.initializeBase(this, [element]);
    this.$5_4 = $P_CRM("#wopiPostForm", element);
    this.$0_4 = $P_CRM("#wopiHostIframe");
    this.$2_4 = $P_CRM("#divDateTime", element);
    this.$1_4 = true
};
Mscrm.ExcelOnline.ExcelOnlineControl.prototype = {
    $3_4: null,
    get_FileId: function() { return this.$3_4 },
    set_FileId: function(value) {
        this.$3_4 = value;
        return value
    },
    $1_4: false,
    get_handleNavigate: function() { return this.$1_4 },
    set_handleNavigate: function(value) {
        this.$1_4 = value;
        return value
    },
    $5_4: null,
    $0_4: null,
    $2_4: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$5_4.submit();
        this.$4_4.start();
        this.$6_4();
        Mscrm.PageManager.get_instance().get_eventManager().subscribeEvent(46, this.get_id())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$4_4.stop();
        !IsNull(Mscrm.PageManager.get_instance()) &&
            !IsNull(Mscrm.PageManager.get_instance().get_eventManager()) &&
            Mscrm.PageManager.get_instance().get_eventManager().unsubscribeEvent(46, this.get_id());
        this.$0_4.off("load", this.$$d_$8_4);
        Mscrm.UIControl.prototype.dispose.call(this)
    },
    saveToCrm: function() {
        this.$1_4 = false;
        this.$0_4.off("load", this.$$d_$8_4);
        this.$0_4.on("load", this.$$d_$8_4);
        this.$0_4.attr("src", "/_static/blank.htm")
    },
    $8_4: function($p0) {
        this.$0_4.off("load", this.$$d_$8_4);
        var $v_0 = Mscrm.CrmUri.create("/Tools/ImportWizard/ImportExcelOnline.aspx");
        Mscrm.CrmUri.updateCrmUriHostAndScheme($v_0);
        $v_0.get_query()["fileId"] = this.$3_4;
        $v_0.appendToQuery(Mscrm.WrpcTokenFuncs.getTokenAsQS($v_0));
        window.location.host === window.parent.location.host &&
            window.parent.Mscrm.GridRibbonActions.SaveToCrmHelper($v_0.toString())
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        return eventCode === 46
            ? this.$7_4()
            : Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    $7_4: function() { return this.$1_4 ? confirm(window.LOCID_DLG_RETURNTOCRM_TEXT) : true },
    $6_4: function() {
        var $v_0 = (new Date(this.$2_4.text())).toLocaleString();
        this.$2_4.text($v_0)
    }
};
Mscrm.ExcelOnline.ExcelOnlineControl.registerClass("Mscrm.ExcelOnline.ExcelOnlineControl", Mscrm.UIControl)