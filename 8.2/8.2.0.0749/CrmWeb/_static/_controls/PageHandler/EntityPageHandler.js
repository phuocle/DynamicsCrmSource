Type.registerNamespace("Mscrm");
Mscrm.ActivityPageHandler = function() { Mscrm.ActivityPageHandler.initializeBase(this) };
Mscrm.ActivityPageHandler.prototype = {
    execute: function() {
        this.$8_1();
        this.postInlineInitialization()
    },
    postInlineInitialization: function() {},
    $8_1: function() {
        (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(this.get_entityId()) ||
                this.get_entityId() === "{00000000-0000-0000-0000-000000000000}") &&
            this.setDefaultValues()
    },
    setDefaultValues: function() {
        var $v_0 = this.get_entityAttributes().get("ownerid");
        try {
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
                Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()) &&
                $v_0.setValue(this.getCurrentUser())
        } catch ($$e_1) {
        }
    },
    getCurrentUser: function() {
        var $v_0 = new Array(1);
        $v_0[0] = new Xrm.LookupObject;
        $v_0[0].id = Xrm.Page.context.getUserId();
        $v_0[0].name = Xrm.Page.context.getUserName();
        $v_0[0].entityType = "systemuser";
        return $v_0
    },
    setOrganizer: function() {
        try {
            var $v_0 = this.get_entityAttributes().get("organizer");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
                var $v_1 = this.get_entityAttributes().get("ownerid");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) $v_0.setValue($v_1.getValue());
                else $v_0.setValue(this.getCurrentUser())
            }
        } catch ($$e_2) {
        }
    },
    setFocusToSubject: function() {
        var $v_0 = Xrm.Page.ui.controls.get("subject");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !$v_0.getDisabled() && $v_0.setFocus()
    }
};
Mscrm.AppointmentPageHandler = function() { Mscrm.AppointmentPageHandler.initializeBase(this) };
Mscrm.AppointmentPageHandler.prototype = {
    $2_2: 30,
    execute: function() {
        Mscrm.ActivityPageHandler.prototype.execute.call(this);
        this.$K_2();
        this.$D_2();
        var $v_0 = this.get_entityAttributes().get("activityid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setSubmitMode("never")
    },
    setDefaultValues: function() {
        Mscrm.ActivityPageHandler.prototype.setDefaultValues.call(this);
        this.setOrganizer();
        var $v_0 = this.get_entityAttributes().get("statuscode");
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_0) &&
            Mscrm.InternalUtilities.JSTypes.isNull($v_0
                .getValue())) Xrm.Page.context.client.getClient() !== "Mobile" && $v_0.setValue(5);
        var $v_1 = this.get_entityAttributes().get("isalldayevent");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setValue(0);
        this.$L_2()
    },
    $L_2: function() {
        var $v_0 = this.get_entityAttributes().get("scheduleddurationminutes");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()) &&
            $v_0.setValue(this.$2_2)
    },
    $K_2: function() {
        var $v_0 = this.get_entityAttributes().get("isalldayevent").getValue();
        if ($v_0) {
            var $v_1 = Xrm.Page.ui.controls.get("scheduledend");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setIsAllDay(true)
        }
    },
    $D_2: function() {
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(this.get_entityId())) {
            var $v_0 = Mscrm.CrmUri.create(window.location.href), $v_1 = $v_0.get_query()["_StartTime"];
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
                var $v_2 = this.get_entityAttributes().get("scheduledstart").getValue(), $v_3 = $v_2;
                $v_3.setMinutes($v_2.getMinutes() + this.$2_2);
                this.get_entityAttributes().get("scheduledend").setValue($v_3);
                this.get_entityAttributes().get("scheduleddurationminutes").setValue(this.$2_2)
            }
        }
    }
};
Mscrm.EmailPageHandler = function() { Mscrm.EmailPageHandler.initializeBase(this) };
Mscrm.EmailPageHandler.prototype = {
    $0_2: 1,
    $1_2: false,
    postInlineInitialization: function() {
        Mscrm.ActivityPageHandler.prototype.postInlineInitialization.call(this);
        this.$J_2();
        this.$I_2();
        Xrm.Page.ui.getFormType() !== 3 && this.setFocusToSubject();
        if (!Xrm.Internal.isEnabledForInteractionCentric() && Xrm.Page.ui.getFormType() !== 3) {
            this.$E_2();
            var $v_0 = $get("descriptionEditIFrame"), $v_1 = $get("descriptionIFrame");
            if ($v_0 && $v_1) {
                var $v_2 = $v_0.contentWindow.document,
                    $v_3 = $v_1.contentWindow.document,
                    $v_4 = $v_2.getElementById("signature"),
                    $v_5 = $v_3.getElementById("signature");
                if (Xrm.Page.ui.getFormType() === 1) (!$v_4 || $v_4.innerHTML === "") && this.$6_2();
                else if (Xrm.Page.ui.getFormType() === 2) $v_5 && $v_5.innerHTML === "" && this.$6_2()
            }
        }
    },
    setDefaultValues: function() {
        Mscrm.ActivityPageHandler.prototype.setDefaultValues.call(this);
        if (Xrm.Page.ui.getFormType() !== 3 && Xrm.Internal.isEnabledForInteractionCentric()) {
            var $v_0 = this.get_entityAttributes().get("directioncode");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
                var $v_1 = this.getCurrentUser();
                if ($v_0.getValue()) this.$4_2("from", $v_1);
                else this.$4_2("to", $v_1)
            }
        }
        Xrm.Page.ui.getFormType() !== 3 && this.$H_2()
    },
    $E_2: function() {
        var $v_0 = Xrm.Page.getAttribute("from");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $$t_5 = this;
            Mscrm.EmailPageHandler.$5 = function($p1_0) {
                var $v_1 = $$t_5.$1_2;
                $$t_5.$6_2();
                var $v_2 = $$t_5.$1_2, $v_3 = "EmailSignatureFromChanged";
                if ($v_1) $v_3 += "SourceHadDefault";
                if ($v_2) $v_3 += "DestinationHadDefault";
                Mscrm.MetricsReporting.instance().addCounterMetric($v_3, 1)
            };
            $v_0.addOnChange(Mscrm.EmailPageHandler.$5)
        }
    },
    $6_2: function() {
        var $v_0 = Xrm.Page.getAttribute("from");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
            var $v_1 = $v_0.getValue()[0].id,
                $v_2 = $v_0.getValue()[0].entityType.toString(),
                $v_3 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1),
                $v_4 = this.$A_2($v_3, $v_2);
            this.$1_2 = !IsNull($v_4) && "" !== $v_4 && "<div><br></div><div></div>" !== $v_4;
            this.$C_2($v_4)
        }
    },
    $C_2: function($p0) {
        var $v_0 = $get("descriptionEditIFrame"), $v_1 = $get("descriptionIFrame");
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0) &&
            !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) {
            var $v_2 = $v_0.contentWindow.document,
                $v_3 = $v_1.contentWindow.document,
                $v_4 = $v_2.getElementById("signature"),
                $v_5 = $v_3.getElementById("signature");
            if (!$v_4 && !$v_5) {
                var $v_6 = document.createElement("BR"), $v_7 = document.createElement("div");
                $v_7.innerHTML = $p0;
                $v_7.setAttribute("id", "signature");
                $v_2.body.appendChild($v_6);
                $v_2.body.appendChild($v_6);
                $v_2.body.appendChild($v_6);
                $v_2.body.appendChild($v_7);
                Mscrm.MetricsReporting.instance().addCounterMetric("EmailSignatureReplaced", 1)
            }
            var $$t_9 = this;
            window.setTimeout(function() {
                    $v_2.body.focus();
                    $v_2.getElementById("signature").innerHTML = $p0
                },
                0)
        }
    },
    $A_2: function($p0, $p1) {
        var $v_0 = null, $v_1 = new RemoteCommand("EmailSignatureService", "GetDefaultEmailSignature");
        $v_1.SetParameter("entityId", $p0);
        $v_1.SetParameter("entityName", $p1);
        var $v_2 = $v_1.Execute();
        if ($v_2
            .Success &&
            !Mscrm.InternalUtilities._String.isNullOrEmpty($v_2.ReturnValue)) $v_0 = this.$F_2($v_2.ReturnValue);
        return $v_0
    },
    $F_2: function($p0) {
        var $v_0 = XUI.Xml.LoadXml($p0);
        if ($v_0
            .getElementsByTagName("SignatureValue")[0] &&
            $v_0.getElementsByTagName("SignatureValue")[0]
            .firstChild)
            return CrmEncodeDecode.CrmXmlDecode($v_0.getElementsByTagName("SignatureValue")[0].firstChild.nodeValue);
        return ""
    },
    $4_2: function($p0, $p1) {
        try {
            var $v_0 = this.get_entityAttributes().get($p0);
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue($p1)
        } catch ($$e_3) {
        }
    },
    $J_2: function() {
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(this.get_entityId())) {
            var $v_0 = this.get_entityAttributes().get("statuscode");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
                var $v_1 = $v_0.getValue();
                switch ($v_1) {
                case 1:
                    this.$0_2 = 1;
                    break;
                case 3:
                    this.$0_2 = 3;
                    break;
                case 4:
                    this.$0_2 = 4;
                    break;
                case 5:
                    this.$0_2 = 5;
                    break;
                case 2:
                    this.$0_2 = 2;
                    break;
                case 6:
                    this.$0_2 = 6;
                    break;
                case 7:
                    this.$0_2 = 7;
                    break;
                case 8:
                    this.$0_2 = 8;
                    break
                }
            }
        }
    },
    $I_2: function() {
        var $v_0 = Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(this.get_entityId()) ? 1 : 2;
        if (1 !== $v_0 && 2 !== $v_0) return;
        var $v_1 = this.get_entityAttributes().get("statecode");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) return;
        var $v_2 = this.get_entityAttributes().get("regardingobjectid"), $v_3 = $v_1.getValue();
        if ($v_3 !== 0)
            if ((this.$0_2 === 3 || this.$0_2 === 4 || this.$0_2 === 6 || this.$0_2 === 7) &&
                $v_2.getUserPrivilege().canUpdate) {
                this.$9_2();
                (this.$0_2 === 3 || this.$0_2 === 4) && this.$M_2()
            }
    },
    $M_2: function() {
        var $v_0 = Xrm.Internal.getLookupTypes(Xrm.Page.getAttribute("to"));
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            Xrm.Internal.filterLookupTypes(Xrm.Page.getAttribute("from"), $v_0, false)
    },
    $9_2: function() {
        var $v_0 = this.get_uiControls().get("regardingobjectid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setDisabled(false)
    },
    $H_2: function() {
        var $v_0 = this.get_entityAttributes().get("description");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
            if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.context.getQueryStringParameters()["description"])) {
                var $v_1 = CrmEncodeDecode.CrmUrlDecode(Xrm.Page.context.getQueryStringParameters()["description"]
                    .toString());
                $v_0.setValue(CrmEncodeDecode.CrmUrlDecode($v_1))
            } else if (!Mscrm.InternalUtilities.JSTypes
                .isNull(Xrm.Page.context.getQueryStringParameters()["articleid"])) {
                var $v_2 = Xrm.Page.context.getQueryStringParameters()["articleid"].toString(), $$t_6 = this;
                Xrm.Internal.messages.retrieve("knowledgearticle", $v_2, ["content"]).then(function($p1_0) {
                        var $v_3 = $p1_0.entity, $v_4 = $v_3.getValue("content").toString();
                        $v_0.setValue($v_4)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            }
        return
    }
};
Mscrm.EntityPageHandlerFactory = function() {};
Mscrm.EntityPageHandlerFactory.create = function() {
    var $v_0 = null;
    if (Xrm.Internal.isEnabledForInteractionCentric() ||
        Xrm.Page.context.client.getClient() === "Mobile" ||
        Mscrm.Utilities.isRefreshForm()) {
        var $v_1 = Xrm.Page.data.entity.getEntityName();
        switch ($v_1) {
        case "phonecall":
            $v_0 = new Mscrm.PhonePageHandler;
            break;
        case "email":
            $v_0 = new Mscrm.EmailPageHandler;
            break;
        case "letter":
            $v_0 = new Mscrm.LetterPageHandler;
            break;
        case "appointment":
            $v_0 = new Mscrm.AppointmentPageHandler;
            break;
        case "recurringappointmentmaster":
            $v_0 = new Mscrm.RecurringAppointmentMasterPageHandler;
            break;
        case "fax":
            $v_0 = new Mscrm.FaxPageHandler;
            break;
        default:
            $v_0 = new Mscrm.ActivityPageHandler;
            break
        }
        $v_0.execute();
        return $v_0
    }
    return null
};
Mscrm.EntityPageHandler = function() {};
Mscrm.EntityPageHandler.prototype = {
    get_entityAttributes: function() { return Xrm.Page.data.entity.attributes },
    get_uiControls: function() { return Xrm.Page.ui.controls },
    get_entityId: function() { return Xrm.Page.data.entity.getId() },
    execute: function() {}
};
Mscrm.FaxPageHandler = function() { Mscrm.FaxPageHandler.initializeBase(this) };
Mscrm.FaxPageHandler.prototype = {
    execute: function() {
        Mscrm.ActivityPageHandler.prototype.execute.call(this);
        this.setFocusToSubject()
    }
};
Mscrm.PhonePageHandler = function() { Mscrm.PhonePageHandler.initializeBase(this) };
Mscrm.PhonePageHandler.prototype = {
    $7_2: 30,
    setDefaultValues: function() {
        Mscrm.ActivityPageHandler.prototype.setDefaultValues.call(this);
        Xrm.Page.ui.getFormType() !== 3 &&
            Xrm.Internal.isEnabledForInteractionCentric() &&
            Xrm.Page.ui.getFormType() !== 2 &&
            this.setFocusToSubject();
        var $v_0 = this.get_entityAttributes().get("directioncode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_1 = this.getCurrentUser();
            if ($v_0.getValue()) this.$4_2("from", $v_1);
            else this.$4_2("to", $v_1)
        }
        this.$G_2()
    },
    $4_2: function($p0, $p1) {
        try {
            var $v_0 = this.get_entityAttributes().get($p0);
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue($p1)
        } catch ($$e_3) {
        }
    },
    $G_2: function() {
        var $v_0 = this.get_entityAttributes().get("actualdurationminutes");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()) &&
            $v_0.setValue(this.$7_2)
    }
};
Mscrm.RecurringAppointmentMasterPageHandler = function() {
    Mscrm.RecurringAppointmentMasterPageHandler.initializeBase(this);
    window._appointId = ""
};
Mscrm.RecurringAppointmentMasterPageHandler.$B = function($p0) {
    var $v_0 = window._appointId;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return;
    Mscrm.CommandBarActions.addRecurrenceSdkCall($v_0, null, null);
    !Mscrm.InternalUtilities.JSTypes.isNull($p0) && $p0.getEventArgs().preventDefault()
};
Mscrm.RecurringAppointmentMasterPageHandler.prototype = {
    $3_2: null,
    execute: function() {
        Mscrm.ActivityPageHandler.prototype.execute.call(this);
        var $v_0 = false, $v_1 = "recurringAppointmentFormData", $v_2 = Xrm.Page.context.getQueryStringParameters();
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_2) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_2[$v_1])) $v_0 = true;
        Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(this.get_entityId()) &&
            $v_0 &&
            this.configureNewRecurringAppointmentForm($v_1);
        var $v_3 = this.get_entityAttributes().get("activityid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setSubmitMode("never");
        this.setFocusToSubject()
    },
    configureNewRecurringAppointmentForm: function($p0) {
        try {
            var $v_0 = Xrm.Internal.getLocalStorageItem($p0);
            if ($v_0) {
                this.$3_2 = $v_0;
                Xrm.Internal.removeLocalStorageItem($p0)
            }
        } catch ($$e_2) {
        }
        window._appointId = Mscrm.CommandBarActions.getActivityId(this.$3_2, Xrm.Page.data.entity.getEntityName());
        Mscrm.CommandBarActions.setEntityAttributeValueFromXml(this.$3_2, Xrm.Page.data.entity.getEntityName());
        Xrm.Page.data.entity.addOnSave(Mscrm.RecurringAppointmentMasterPageHandler.$B)
    },
    setDefaultValues: function() {
        Mscrm.ActivityPageHandler.prototype.setDefaultValues.call(this);
        this.setOrganizer()
    }
};
Mscrm.LetterPageHandler = function() { Mscrm.LetterPageHandler.initializeBase(this) };
Mscrm.LetterPageHandler.prototype = {
    execute: function() {
        Mscrm.ActivityPageHandler.prototype.execute.call(this);
        this.setFocusToSubject()
    }
};
Mscrm.EntityPageHandler.registerClass("Mscrm.EntityPageHandler");
Mscrm.ActivityPageHandler.registerClass("Mscrm.ActivityPageHandler", Mscrm.EntityPageHandler);
Mscrm.AppointmentPageHandler.registerClass("Mscrm.AppointmentPageHandler", Mscrm.ActivityPageHandler);
Mscrm.EmailPageHandler.registerClass("Mscrm.EmailPageHandler", Mscrm.ActivityPageHandler);
Mscrm.EntityPageHandlerFactory.registerClass("Mscrm.EntityPageHandlerFactory");
Mscrm.FaxPageHandler.registerClass("Mscrm.FaxPageHandler", Mscrm.ActivityPageHandler);
Mscrm.PhonePageHandler.registerClass("Mscrm.PhonePageHandler", Mscrm.ActivityPageHandler);
Mscrm.RecurringAppointmentMasterPageHandler.registerClass("Mscrm.RecurringAppointmentMasterPageHandler",
    Mscrm.ActivityPageHandler);
Mscrm.LetterPageHandler.registerClass("Mscrm.LetterPageHandler", Mscrm.ActivityPageHandler);
Mscrm.EmailPageHandler.$5 = null;
Mscrm.EntityPageHandler.emptyGuid = "{00000000-0000-0000-0000-000000000000}"