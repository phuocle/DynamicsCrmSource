Type.registerNamespace("Mscrm");
Mscrm.IFrameControl = function() {
    this.$$d_$4_2 = Function.createDelegate(this, this.$4_2);
    Mscrm.IFrameControl.initializeBase(this)
};
Mscrm.IFrameControl.prototype = {
    defaultUrl: null,
    iFrameId: null,
    url: null,
    $2_2: null,
    $1_2: null,
    $0_2: null,
    get_$5_2: function() {
        if (IsNull(this.$0_2)) {
            this.$0_2 = document.createElement("DIV");
            this.$0_2.style.width = "100%";
            this.$0_2.style.height = "100%";
            this.$0_2.style.backgroundColor = "#FFFFFF";
            this.$0_2.className = "ms-crm-absolutePosition";
            this.$0_2.style.zIndex = 1e4;
            this.$0_2
                .innerHTML =
                "<table style='height:100%;width:100%;background-color:FFFFFF'><tr><td style='vertical-align: middle' align='center'><IMG id='loading' alt='' src='" + window.CDNURL + "/_imgs/advfind/progress.gif'><br>" + CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PAGELOADING_MSG) + "</td></tr></table>"
        }
        this.$0_2.style.display = "none";
        return this.$0_2
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIComponent.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 9:
            this.$7_2(parameters);
            break;
        case 57:
            this.$2_2 && this.$2_2.equals(Mscrm.CrmUri.create(parameters["uri"]), true) && this.$4_2(null);
            !IsNull(this.$1_2) && this.$6_2();
            break
        }
        return null
    },
    $7_2: function($p0) {
        this.$1_2 = $get(this.iFrameId);
        if (IsNull(this.$1_2) || !IsNull(this.$2_2)) return;
        var $v_0 = this.url;
        if (isNullOrEmptyString($v_0)) $v_0 = this.$1_2.attributes.getNamedItem("url").value;
        if (isNullOrEmptyString($v_0)) return;
        this.$1_2.parentNode.appendChild(this.get_$5_2());
        this.get_$5_2().style.display = "block";
        $addHandler(this.$1_2, "load", this.$$d_$4_2);
        this.$1_2.contentWindow.location.replace($v_0);
        this.$2_2 = Mscrm.CrmUri.create($v_0)
    },
    $4_2: function($p0) { !IsNull(this.$1_2) && this.$6_2() },
    $6_2: function() {
        if (!IsNull(this.$0_2) && Mscrm.Utilities.isDescendant(document.body, this.$0_2)) {
            this.$0_2.style.display = "none";
            this.$0_2.parentNode.removeChild(this.$0_2)
        }
    }
};
Mscrm.IFrameControl.registerClass("Mscrm.IFrameControl", Mscrm.CrmUIComponent)