Type.registerNamespace("Mscrm");
Mscrm.Severity = function() {};
Mscrm.Severity.prototype = { SEVERITYERROR: 1, SEVERITYWARNING: 2, SEVERITYINFORMATION: 3 };
Mscrm.Severity.registerEnum("Mscrm.Severity", false);
Mscrm.NotificationList = function(element) { Mscrm.NotificationList.initializeBase(this, [element]) };
Mscrm.NotificationList.$C = function() {
    var $v_0 = $get("rofContainer");
    return !IsNull($v_0)
};
Mscrm.NotificationList.prototype = {
    $1_3: null,
    $5_3: 0,
    $3_3: 3,
    $2_3: 0,
    SetVisible: function(isVisible) { this.get_element().style.display = isVisible ? "block" : "none" },
    GetNotificationSeverity: function($p0) {
        var $v_0 = 0;
        switch ($p0) {
        case "ERROR":
            $v_0 = 1;
            break;
        case "WARNING":
            $v_0 = 2;
            break;
        case "INFO":
            $v_0 = 3;
            break;
        default:
            $v_0 = 0;
            break
        }
        return $v_0
    },
    $9_3: function($p0) {
        var $v_0 = $p0;
        if (isNullOrEmptyString($p0)) $v_0 = this.$A_3();
        $v_0 = $v_0.trim();
        return $v_0
    },
    $8_3: function($p0) {
        var $v_0 = this.$B_3($p0);
        $v_0 && this.clearFormNotification($p0)
    },
    setFormNotification: function(message, notificationLevel, uniqueId) {
        if (isNullOrEmptyString(message)) return false;
        var $v_0 = this.GetNotificationSeverity(notificationLevel);
        uniqueId = this.$9_3(uniqueId);
        message = message.trim();
        var $v_1 = uniqueId;
        this.$8_3(uniqueId);
        this.AddGenericNotification(uniqueId, $v_0, $v_1, message, false);
        return true
    },
    setFormHtmlNotification: function(htmlText, notificationLevel, uniqueId) {
        if (isNullOrEmptyString(htmlText)) return false;
        var $v_0 = this.GetNotificationSeverity(notificationLevel);
        uniqueId = this.$9_3(uniqueId);
        htmlText = htmlText.trim();
        var $v_1 = uniqueId;
        this.$8_3(uniqueId);
        this.AddGenericNotification(uniqueId, $v_0, $v_1, htmlText, true);
        return true
    },
    clearFormNotification: function(uniqueId) {
        var $v_0 = this.$1_3.removeNotification(uniqueId);
        $v_0 && this.$7_3();
        return $v_0
    },
    AddNotification: function(id, severity, source, text) {
        var $v_0 = this.AddGenericNotification(id, severity, source, text, false);
        return $v_0
    },
    AddGenericNotification: function(id, severity, source, text, hasHtmlContent) {
        var $v_0 = this.CreateNotification(id, severity, source, text);
        $v_0.HasHtmlContent = hasHtmlContent;
        var $v_1 = this.$1_3.addNotification($v_0);
        $v_1 && this.$7_3();
        return $v_1
    },
    $B_3: function($p0) { return this.$1_3.hasNotification($p0) },
    CreateNotification: function(id, severity, source, text) {
        return new Mscrm.Notification(id, severity, source, text, this.$5_3++, "")
    },
    get_hasErrors: function() { return this.$1_3.count > 0 && this.$1_3.getItem(0).Severity === 1 },
    GetNotifications: function() { return this.$1_3.getNotificationsArray() },
    $7_3: function() {
        for (var $v_0, $v_1 = "", $v_2 = this.$1_3.count, $v_3 = 0; $v_3 < $v_2; $v_3++) {
            $v_0 = this.$1_3.getItem($v_3);
            $v_1 += '<DIV role="alert" aria-live="polite" class="Notification" ID="Notification' +
                $v_3 +
                '" NotificationId="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.Id) +
                '">';
            $v_1 += "<table cellpadding='0' cellspacing='0'><tr><td valign='top'>";
            var $v_4 = null;
            switch ($v_0.Severity) {
            case 1:
                $v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/error/notif_icn_crit16.png"));
                break;
            case 2:
                $v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/error/notif_icn_warn16.png"));
                break;
            case 3:
                $v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/error/notif_icn_info16.png"));
                break;
            default:
                break
            }
            if ($v_4)
                $v_1 += '<img alt="" src="' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_4.source) +
                    '" class="ms-crm-Lookup-Item ' +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_4.cssClass) +
                    '">';
            $v_1 += "</td><td>";
            $v_1 += "<span id='Notification" + $v_3 + "_text'>";
            if ($v_0.HasHtmlContent) $v_1 += $v_0.Text;
            else $v_1 += CrmEncodeDecode.CrmHtmlEncode($v_0.Text);
            $v_1 += "</span></td></tr></table></DIV>"
        }
        this.get_element().innerHTML = $v_1;
        this.SetVisible(!!this.$1_3.count);
        if (this.$1_3.count > this.$3_3) {
            var $v_5 = this.get_element().children[0].offsetHeight, $v_6 = $v_5 * this.$3_3;
            $v_6 += this.$4_3("borderTopWidth");
            $v_6 += this.$4_3("borderBottomWidth");
            $v_6 += this.$4_3("paddingTop");
            $v_6 += this.$4_3("paddingBottom");
            if (!IsNull(this.$2_3) && this.$2_3 < $v_6) $v_6 = this.$2_3;
            this.get_element().style.height = $v_6 + "px"
        } else this.get_element().style.height = null;
        this.$E_3()
    },
    $4_3: function($p0) {
        try {
            var $v_0 = parseInt(XUI.Html.GetComputedStyle(this.get_element(), $p0), 10);
            if (IsNull($v_0) || isNaN($v_0)) return 0;
            return $v_0
        } catch ($$e_2) {
            return 0
        }
    },
    $E_3: function() {
        var $v_0 = $get("formHeaderContainer"), $v_1 = $get("crmFormHeaderTop"), $v_2 = $get("tdAreas");
        if (IsNull($v_0) || IsNull($v_1) || IsNull($v_2)) return;
        var $v_3 = $v_1.scrollHeight + this.get_element().scrollHeight;
        if (Mscrm.NotificationList.$C()) $P_CRM(window).trigger("resize-header");
        else $v_0.style.height = $v_3 + "px";
        var $v_4 = $v_0.clientHeight, $v_5 = 0, $$t_6 = this;
        $v_5 = window.setInterval(function() {
                if ($v_0.clientHeight !== $v_4) {
                    $v_4 = $v_0.clientHeight;
                    $P_CRM(window).trigger("resize-header")
                } else $v_0.clientHeight > 1 && window.clearInterval($v_5)
            },
            0)
    },
    SetBusinessNotifications: function(newNotifications) { this.SetNotifications(newNotifications, null) },
    SetNotifications: function(notifications, source) {
        this.$1_3.setNotifications(notifications, source);
        this.$7_3()
    },
    initialize: function() {
        var $v_0 = parseInt(this.get_element().getAttribute("Size"), 10);
        if (!isNaN($v_0)) this.$3_3 = $v_0;
        var $v_1 = parseInt(this.get_element().getAttribute("MaxHeight"), 10);
        if (!isNaN($v_1)) this.$2_3 = $v_1;
        var $v_2 = [], $$t_9 = this;
        XUI.Html.DomUtils.ForEachChild(this.get_element(),
            function($p1_0) {
                var $v_3 = $p1_0.getAttribute("NotificationId"),
                    $v_4 = parseInt($p1_0.getAttribute("Severity")),
                    $v_5 = $p1_0.getAttribute("Source"),
                    $v_6 = parseInt($p1_0.getAttribute("Order")),
                    $v_7 = $get($p1_0.id + "_text", $p1_0).innerHTML;
                $v_2[$v_2.length] = new Mscrm.Notification($v_3, $v_4, $v_5, $v_7, $v_6, "");
                return false
            });
        this.$5_3 = $v_2.length;
        this.$1_3 = new Mscrm.Notifications($v_2)
    },
    $A_3: function() {
        var $v_0 = Math.random();
        return "Random_String_" + $v_0
    }
};
Mscrm.Notifications = function(notifications) {
    this.$$d_$D_0 = Function.createDelegate(this, this.$D_0);
    if (!isArray(notifications)) this.$0_0 = [];
    else this.$0_0 = notifications;
    this.count = this.$0_0.length;
    this.count > 0 && this.$6_0()
};
Mscrm.Notifications.prototype = {
    $0_0: null,
    count: 0,
    getItem: function(index) {
        if (index < 0 || index >= this.$0_0.length) return null;
        return this.$0_0[index]
    },
    getNotificationsArray: function() { return this.$0_0 },
    addNotification: function(notification) {
        for (var $v_0 = this.$0_0.length - 1; $v_0 >= 0; $v_0--)
            if (this.$0_0[$v_0].Id === notification.Id) {
                this.$0_0[$v_0] = notification;
                return true
            }
        this.$0_0[this.$0_0.length] = notification;
        this.$6_0();
        this.count = this.$0_0.length;
        return true
    },
    removeNotification: function(id) {
        for (var $v_0 = this.$0_0.length - 1; $v_0 >= 0; $v_0--)
            if (this.$0_0[$v_0].Id === id) {
                this.$0_0.splice($v_0, 1);
                this.count = this.$0_0.length;
                return true
            }
        return false
    },
    hasNotification: function(givenId) {
        for (var $v_0 = this.$0_0.length - 1; $v_0 >= 0; $v_0--) if (this.$0_0[$v_0].Id === givenId) return true;
        return false
    },
    setNotifications: function(newNotifications, source) {
        var $v_0 = false;
        if (!isArray(newNotifications)) newNotifications = [];
        for (var $v_1 = this.$0_0.length - 1; $v_1 >= 0; $v_1--) {
            $v_0 = false;
            if (!source || this.$0_0[$v_1].Source === source) {
                for (var $v_2 = this.$0_0[$v_1].Id, $v_3 = newNotifications.length - 1; $v_3 >= 0; $v_3--)
                    if ($v_2 === newNotifications[$v_3].Id) {
                        newNotifications.splice($v_3, 1);
                        $v_0 = true;
                        break
                    }
                !$v_0 && this.$0_0.splice($v_1, 1)
            }
        }
        if (newNotifications.length > 0) {
            this.$0_0 = this.$0_0.concat(newNotifications);
            this.$6_0()
        }
        this.count = this.$0_0.length
    },
    $6_0: function() { this.$0_0.sort(this.$$d_$D_0) },
    $D_0: function($p0, $p1) {
        var $v_0 = $p0, $v_1 = $p1;
        if ($v_0.Severity < $v_1.Severity) return -1;
        if ($v_0.Severity > $v_1.Severity) return 1;
        if ($v_0.Order < $v_1.Order) return 1;
        if ($v_0.Order > $v_1.Order) return -1;
        return 0
    }
};
Mscrm.NotificationList.registerClass("Mscrm.NotificationList", Mscrm.CrmUIControl);
Mscrm.Notifications.registerClass("Mscrm.Notifications")