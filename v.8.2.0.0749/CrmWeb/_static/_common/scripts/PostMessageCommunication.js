Type.registerNamespace("Mscrm.PostMessageCommunication");
Mscrm.PostMessageCommunication.PostMessages = function() {};
Mscrm.PostMessageCommunication.PostMessages.openEntityForm = function(eventArgs) {
    var $v_0 = eventArgs["etn"], $v_1 = eventArgs.id, $v_2 = eventArgs.parameters, $v_3 = eventArgs.windowOptions;
    Xrm.Utility.openEntityForm($v_0, $v_1, $v_2, $v_3)
};
Mscrm.PostMessageCommunication.PostMessages
    .messageNotSupported = function() { throw Error.create("Not supported post message") };
Mscrm.PostMessageCommunication.PostMessageConstants = function() {};
Mscrm.PostMessageCommunication.PostMessageManager = function() {
    this.$$d_$2_0 = Function.createDelegate(this, this.$2_0)
};
Mscrm.PostMessageCommunication.PostMessageManager.get_instance = function() {
    if (IsNull(Mscrm.PostMessageCommunication.PostMessageManager.$0)) {
        Mscrm.PostMessageCommunication.PostMessageManager.$0 = new Mscrm.PostMessageCommunication.PostMessageManager;
        $P_CRM(window.self).bind("message", Mscrm.PostMessageCommunication.PostMessageManager.$0.$$d_$2_0)
    }
    return Mscrm.PostMessageCommunication.PostMessageManager.$0
};
Mscrm.PostMessageCommunication.PostMessageManager.prototype = {
    $2_0: function($p0) {
        var $v_0 = $p0.originalEvent, $v_1 = $v_0.origin;
        if (!Mscrm.PostMessageCommunication.TrustedDomainManager.get_instance().isTrustedDomain($v_1)) return;
        var $v_2 = JSON.parse($v_0.data);
        if (IsNull($v_2)) return;
        var $v_3 = $v_2["messageName"];
        switch ($v_3) {
        case "openEntityForm":
            Mscrm.PostMessageCommunication.PostMessages.openEntityForm($v_2);
            break;
        default:
            Mscrm.PostMessageCommunication.PostMessages.messageNotSupported();
            break
        }
    }
};
Mscrm.PostMessageCommunication.TrustedDomainConstants = function() {};
Mscrm.PostMessageCommunication.TrustedDomainManager = function() {};
Mscrm.PostMessageCommunication.TrustedDomainManager.get_instance = function() {
    if (IsNull(Mscrm.PostMessageCommunication.TrustedDomainManager.$0)) {
        Mscrm.PostMessageCommunication.TrustedDomainManager.$0 = new Mscrm.PostMessageCommunication
            .TrustedDomainManager;
        Mscrm.PostMessageCommunication.TrustedDomainManager.$0.$3_0()
    }
    return Mscrm.PostMessageCommunication.TrustedDomainManager.$0
};
Mscrm.PostMessageCommunication.TrustedDomainManager.prototype = {
    $1_0: null,
    $3_0: function() {
        var $v_0 = ["postmessagewhitelistdomains"], $$t_4 = this;
        Xrm.Internal.messages.retrieve("organization", window.ORG_ID, $v_0).then(function($p1_0) {
                var $v_1 = $p1_0.entity;
                if ($v_1.hasField("postmessagewhitelistdomains")) {
                    var $v_2 = $v_1.getValue("postmessagewhitelistdomains");
                    if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_2)) {
                        $$t_4.$1_0 = $v_2.split(";");
                        Array.remove($$t_4.$1_0, "")
                    }
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    },
    isTrustedDomain: function(originUrl) {
        if (this.$1_0 && this.$1_0.length > 0 && !isNullOrEmptyString(originUrl)) {
            var $v_0 = Mscrm.CrmUri.create(originUrl),
                $v_1 = $v_0.get_scheme() +
                    "://" +
                    $v_0.get_host() +
                    ($v_0.get_port() !== -1 ? ":" + $v_0.get_port().toString() : "");
            if (Array.contains(this.$1_0, $v_1)) return true
        }
        return false
    }
};
Mscrm.PostMessageCommunication.PostMessages.registerClass("Mscrm.PostMessageCommunication.PostMessages");
Mscrm.PostMessageCommunication.PostMessageConstants
    .registerClass("Mscrm.PostMessageCommunication.PostMessageConstants");
Mscrm.PostMessageCommunication.PostMessageManager.registerClass("Mscrm.PostMessageCommunication.PostMessageManager");
Mscrm.PostMessageCommunication.TrustedDomainConstants
    .registerClass("Mscrm.PostMessageCommunication.TrustedDomainConstants");
Mscrm.PostMessageCommunication.TrustedDomainManager
    .registerClass("Mscrm.PostMessageCommunication.TrustedDomainManager");
Mscrm.PostMessageCommunication.PostMessageConstants.eventToBindPostMessage = "message";
Mscrm.PostMessageCommunication.PostMessageConstants.messageNameKey = "messageName";
Mscrm.PostMessageCommunication.PostMessageConstants.openEntityForm = "openEntityForm";
Mscrm.PostMessageCommunication.PostMessageConstants.entityName = "etn";
Mscrm.PostMessageCommunication.PostMessageConstants.entityRecordId = "id";
Mscrm.PostMessageCommunication.PostMessageConstants.parameters = "parameters";
Mscrm.PostMessageCommunication.PostMessageConstants.windowOptions = "windowOptions";
Mscrm.PostMessageCommunication.PostMessageManager.$0 = Mscrm.PostMessageCommunication.PostMessageManager.get_instance();
Mscrm.PostMessageCommunication.TrustedDomainConstants.orgWhitelistDomainsAttribute = "postmessagewhitelistdomains";
Mscrm.PostMessageCommunication.TrustedDomainConstants.whitelistDomainsSplitChar = ";";
Mscrm.PostMessageCommunication.TrustedDomainManager.$0 = Mscrm.PostMessageCommunication.TrustedDomainManager
    .get_instance()