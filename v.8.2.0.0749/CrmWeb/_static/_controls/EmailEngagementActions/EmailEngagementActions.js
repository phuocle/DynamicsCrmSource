Type.registerNamespace("Mscrm");
Mscrm.EmailEngagementActions = function(element) {
    this.$$d_setReminderCallback = Function.createDelegate(this, this.setReminderCallback);
    this.$$d_sendLaterCallback = Function.createDelegate(this, this.sendLaterCallback);
    this.$$d_onEmailFollowedDialogCloseCallback = Function
        .createDelegate(this, this.onEmailFollowedDialogCloseCallback);
    this.$$d_$a_3 = Function.createDelegate(this, this.$a_3);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    this.$$d_$b_3 = Function.createDelegate(this, this.$b_3);
    this.$$d_$h_3 = Function.createDelegate(this, this.$h_3);
    this.$$d_$f_3 = Function.createDelegate(this, this.$f_3);
    this.$$d_$e_3 = Function.createDelegate(this, this.$e_3);
    this.$$d_$U_3 = Function.createDelegate(this, this.$U_3);
    this.$$d_$g_3 = Function.createDelegate(this, this.$g_3);
    this.$$d_$P_3 = Function.createDelegate(this, this.$P_3);
    this.$$d_$N_3 = Function.createDelegate(this, this.$N_3);
    this.$$d_$O_3 = Function.createDelegate(this, this.$O_3);
    this.$$d_$S_3 = Function.createDelegate(this, this.$S_3);
    this.$$d_$T_3 = Function.createDelegate(this, this.$T_3);
    this.$$d_$Q_3 = Function.createDelegate(this, this.$Q_3);
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    this.$$d_$R_3 = Function.createDelegate(this, this.$R_3);
    this.$$d_$G_3 = Function.createDelegate(this, this.$G_3);
    this.$0_3 = Mscrm.EmailEngagementActions.$4;
    Mscrm.EmailEngagementActions.initializeBase(this, [element])
};
Mscrm.EmailEngagementActions.initializeLocalizedStrings = function() {
    if (!Mscrm.EmailEngagementActions.localizedStrings)
        Mscrm.EmailEngagementActions.localizedStrings = window.self.EmailEngagementActionsStrings
};
Mscrm.EmailEngagementActions.$d = function($p0) {
    if (IsNull($p0) || !Mscrm.InternalUtilities.Utilities.isRefreshForm()) return;
    !Mscrm.InternalUtilities.Utilities.isTurboForm() &&
        Xrm.Page.ui.getTabs().getByName("Email").getSections().getByName("emailengagementactions") &&
        Xrm.Page.ui.getTabs().getByName("Email").getSections().getByName("emailengagementactions").setVisible(false);
    var $v_0 = $find($p0.id), $v_1 = new Mscrm.InlineEmailEngagementActionsControlView($v_0), $v_2 = Xrm.Page.ui;
    if (IsNull($v_2.controls)) $v_2.controls = new Xrm.XrmControls;
    if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
        $v_2.controls.add($v_1);
        Mscrm.EmailEngagementActions.$M($p0, $v_1)
    }
};
Mscrm.EmailEngagementActions.$M = function($p0, $p1) {
    if (!IsNull($p0)) {
        var $v_0 = Xrm.Page.ui,
            $v_1 = $P_CRM($p0).parents("table.ms-crm-FormSection:first"),
            $v_2 = IsNull($v_1) ? "" : $v_1.attr("name");
        if (isNullOrEmptyString($v_2)) return;
        var $v_3 = $P_CRM($p0).parents("div.ms-crm-InlineTab-Read:first"), $v_4 = IsNull($v_3) ? "" : $v_3.attr("name");
        if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_4)) {
            var $v_5 = $v_0.tabs.get($v_4);
            if (!IsNull($v_5)) {
                var $v_6 = $v_5.sections.get($v_2);
                !IsNull($v_6) && $v_6.controls.add($p1.getWrapper())
            }
        }
    }
};
Mscrm.EmailEngagementActions.$K = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = {};
    if ($p0) {
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            if ($p0[$v_1].entityType === "account") {
                $p4 = $p1 === "" ? $p4 + 1 : $p4;
                $p1 = $p1 + String.format("<value>{0}</value>", $p0[$v_1].id.toString())
            }
            if ($p0[$v_1].entityType === "contact") {
                $p4 = $p2 === "" ? $p4 + 1 : $p4;
                $p2 = $p2 + String.format("<value>{0}</value>", $p0[$v_1].id.toString())
            }
            if ($p0[$v_1].entityType === "lead") {
                $p4 = $p3 === "" ? $p4 + 1 : $p4;
                $p3 = $p3 + String.format("<value>{0}</value>", $p0[$v_1].id.toString())
            }
        }
        $v_0["account"] = $p1;
        $v_0["contact"] = $p2;
        $v_0["lead"] = $p3;
        $v_0["participatingEntitiesCount"] = $p4
    }
    return $v_0
};
Mscrm.EmailEngagementActions.getRecipientPreferences = function() {
    var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = 3, $v_4 = 0, $v_5 = [], $v_6 = null, $v_7 = null;
    if (Xrm.Page.getAttribute("to")) $v_6 = Xrm.Page.getAttribute("to").getValue();
    if (Xrm.Page.getAttribute("cc")) $v_7 = Xrm.Page.getAttribute("cc").getValue();
    if ($v_6 && $v_6.length > 0) {
        var $v_G = Mscrm.EmailEngagementActions.$K($v_6, $v_0, $v_1, $v_2, $v_3);
        $v_0 = $v_0 + $v_G["account"];
        $v_1 = $v_1 + $v_G["contact"];
        $v_2 = $v_2 + $v_G["lead"]
    }
    if ($v_7 && $v_7.length > 0) {
        var $v_H = Mscrm.EmailEngagementActions.$K($v_7, $v_0, $v_1, $v_2, $v_3);
        $v_0 = $v_0 + $v_H["account"];
        $v_1 = $v_1 + $v_H["contact"];
        $v_2 = $v_2 + $v_H["lead"]
    }
    var $v_8 =
            "<fetch version='1.0' mapping='logical' distinct='true'><entity name='{0}'><attribute name='{1}' /><attribute name='{2}' /><attribute name='{3}' /><filter type='and'><condition attribute='{4}' operator='in'>{5}</condition></filter></entity></fetch>",
        $v_9 = String.format($v_8, "account", "followemail", "name", "accountid", "accountid", $v_0),
        $v_A = String.format($v_8, "contact", "followemail", "fullname", "contactid", "contactid", $v_1),
        $v_B = String.format($v_8, "lead", "followemail", "subject", "leadid", "leadid", $v_2),
        $v_C = jQueryApi.jQueryDeferredFactory.Deferred(Array,
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse),
        $v_D = jQueryApi.jQueryDeferredFactory.Deferred(Array,
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse),
        $v_E = jQueryApi.jQueryDeferredFactory.Deferred(Array,
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse),
        $v_F = jQueryApi.jQueryDeferredFactory.Deferred(Array,
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses.CrmErrorResponse);
    if ($v_0 !== "")
        Xrm.Internal.messages.retrieveMultiple($v_9).then(function($p1_0) {
                var $v_I = $p1_0.entityCollection;
                if ($v_I.get_count() > 0)
                    for (var $v_J = 0; $v_J < $v_I.get_count(); $v_J++)
                        if ($v_I.get_item($v_J).hasField("followemail")) {
                            var $v_K = new Mscrm.RecipientResponse;
                            $v_K.entityName = "account";
                            $v_K.entityDisplayName = $v_I.get_item($v_J).getValue("name").toString();
                            $v_K.entityId = $v_I.get_item($v_J).getValue("accountid").toString();
                            $v_K.emailPreference = $v_I.get_item($v_J).getValue("followemail").get_value();
                            $v_5.push($v_K)
                        }
                $v_C.resolve($v_5)
            },
            function($p1_0) { $v_C.reject($p1_0) });
    else $v_C.resolve($v_5);
    if ($v_1 !== "")
        Xrm.Internal.messages.retrieveMultiple($v_A).then(function($p1_0) {
                var $v_L = $p1_0.entityCollection;
                if ($v_L.get_count() > 0)
                    for (var $v_M = 0; $v_M < $v_L.get_count(); $v_M++)
                        if ($v_L.get_item($v_M).hasField("followemail")) {
                            var $v_N = new Mscrm.RecipientResponse;
                            $v_N.entityName = "contact";
                            $v_N.entityDisplayName = $v_L.get_item($v_M).getValue("fullname").toString();
                            $v_N.emailPreference = $v_L.get_item($v_M).getValue("followemail").get_value();
                            $v_N.entityId = $v_L.get_item($v_M).getValue("contactid").toString();
                            $v_5.push($v_N)
                        }
                $v_D.resolve($v_5)
            },
            function($p1_0) { $v_D.reject($p1_0) });
    else $v_D.resolve($v_5);
    if ($v_2 !== "")
        Xrm.Internal.messages.retrieveMultiple($v_B).then(function($p1_0) {
                var $v_O = $p1_0.entityCollection;
                if ($v_O.get_count() > 0)
                    for (var $v_P = 0; $v_P < $v_O.get_count(); $v_P++)
                        if ($v_O.get_item($v_P).hasField("followemail")) {
                            var $v_Q = new Mscrm.RecipientResponse;
                            $v_Q.entityName = "lead";
                            $v_Q.entityDisplayName = $v_O.get_item($v_P).getValue("subject").toString();
                            $v_Q.emailPreference = $v_O.get_item($v_P).getValue("followemail").get_value();
                            $v_Q.entityId = $v_O.get_item($v_P).getValue("leadid").toString();
                            $v_5.push($v_Q)
                        }
                $v_E.resolve($v_5)
            },
            function($p1_0) { $v_E.reject($p1_0) });
    else $v_E.resolve($v_5);
    $v_C.then(function($p1_0) {
            $v_4++;
            $v_4 === $v_3 && $v_F.resolve($v_5)
        },
        function($p1_0) {});
    $v_D.then(function($p1_0) {
            $v_4++;
            $v_4 === $v_3 && $v_F.resolve($v_5)
        },
        function($p1_0) {});
    $v_E.then(function($p1_0) {
            $v_4++;
            $v_4 === $v_3 && $v_F.resolve($v_5)
        },
        function($p1_0) {});
    return $v_F.promise()
};
Mscrm.EmailEngagementActions.prototype = {
    $3_3: false,
    $1_3: false,
    $C_3: false,
    $B_3: "emailreminderstatus",
    $2_3: "followemailuserpreference",
    $I_3: "EmailEngagementActionsHeader",
    $7_3: "isemailfollowed",
    $L_3: "to",
    $F_3: "cc",
    $A_3: "statuscode",
    $6_3: false,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = $get("emailFollowUnfollow");
        if (!IsNull($v_0) &&
            Xrm.Page.getAttribute("directioncode").getValue() &&
            Mscrm.InternalUtilities.Utilities.isTurboForm()) {
            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
                Xrm.Page.getAttribute(this.$7_3).setValue(true);
                Xrm.Page.getAttribute(this.$2_3).setValue(true)
            }
            Mscrm.EmailEngagementActions.initializeLocalizedStrings();
            this.$Y_3();
            this.$X_3();
            this.$Z_3();
            this.$D_3(Xrm.Page.getAttribute(this.$7_3).getValue());
            this.$5_3();
            this.$8_3()
        } else
            Xrm.Page.ui.getTabs().getByName("Email").getSections().getByName("emailengagementactions") &&
                Mscrm.InternalUtilities.Utilities.isTurboForm() &&
                Xrm.Page.ui.getTabs().getByName("Email").getSections().getByName("emailengagementactions")
                .setVisible(false);
        if (Mscrm.InternalUtilities.Utilities.isTurboForm()) this.$G_3();
        else Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$G_3, 2)
    },
    $G_3: function() { Mscrm.EmailEngagementActions.$d(this.get_element()) },
    $D_3: function($p0) {
        if (Xrm.Page.getAttribute(this.$2_3)) {
            this.$1_3 = Xrm.Page.getAttribute(this.$2_3).getValue();
            this.$i_3(this.$1_3 && $p0)
        }
        var $v_0 = $get("email_followed"), $v_1 = $get("email_cannot_be_followed"), $v_2 = $get("email_not_followed");
        if (this.$3_3 && this.$1_3) {
            $v_0.style.display = "table";
            $v_1.style.display = "none";
            $v_2.style.display = "none"
        } else if (!this.$3_3 && this.$1_3) {
            $v_0.style.display = "none";
            $v_1.style.display = "table";
            $v_2.style.display = "none"
        } else {
            $v_0.style.display = "none";
            $v_1.style.display = "none";
            $v_2.style.display = "table"
        }
    },
    $i_3: function($p0) {
        this.$3_3 = $p0;
        this.$5_3()
    },
    $5_3: function() {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("ReminderRelatedStatesMetrics");
        $v_0.start();
        this.$6_3 = false;
        var $v_1 = $get("reminderSet"),
            $v_2 = $get("reminderNotSet"),
            $v_3 = $get("reminderSetAndHasWarning"),
            $v_4 = $get("reminderMet");
        if (Xrm.Page
            .getAttribute("emailreminderexpirytime"))
            this.$C_3 = Xrm.Page.getAttribute("emailreminderexpirytime").getValue();
        if (this.$C_3)
            if (Xrm.Page.getAttribute(this.$B_3).getValue() === 2) {
                this.$6_3 = true;
                $v_1.style.display = "none";
                $v_2.style.display = "none";
                $v_3.style.display = "none";
                $v_4.style.display = "table"
            } else if (Xrm.Page.getAttribute("emailreminderexpirytime").getValue() <
                Mscrm.DateTimeUtility.localDateTimeNow()) {
                this.$6_3 = true;
                $v_1.style.display = "none";
                $v_2.style.display = "table";
                $v_3.style.display = "none";
                $v_4.style.display = "none"
            } else if (this.$3_3 || Xrm.Page.getAttribute("emailremindertype").getValue() === 2) {
                $v_1.style.display = "table";
                $v_2.style.display = "none";
                $v_3.style.display = "none";
                $v_4.style.display = "none"
            } else {
                $v_1.style.display = "none";
                $v_2.style.display = "none";
                $v_3.style.display = "table";
                $v_4.style.display = "none"
            }
        else {
            $v_1.style.display = "none";
            $v_2.style.display = "table";
            $v_3.style.display = "none";
            $v_4.style.display = "none"
        }
        if (Xrm.Page.getAttribute("emailreminderexpirytime").getValue()) {
            var $v_5 = Xrm.Page.getAttribute("emailremindertype").getValue(),
                $v_6 = Xrm.Page.getAttribute("emailreminderexpirytime").getValue(),
                $v_7 = Sys.CultureInfo.CurrentCulture.dateTimeFormat["ShortDatePattern"],
                $v_8 = Sys.CultureInfo.CurrentCulture.dateTimeFormat["ShortTimePattern"],
                $v_9 = String.localeFormat("{0:" + $v_7 + " " + $v_8 + "}", $v_6),
                $v_A = "",
                $v_B = this.$H_3();
            if (!$v_5)
                if ($v_B === "")
                    $v_A = String.format(Mscrm.EmailEngagementActions.localizedStrings
                        .SET_REMINDER_INLINEDLG_REMINDOPTION1_2,
                        $v_9);
                else
                    $v_A = String.format(Mscrm.EmailEngagementActions.localizedStrings
                        .SET_REMINDER_INLINEDLG_REMINDOPTION1_1,
                        $v_B,
                        $v_9);
            if ($v_5 === 1)
                if ($v_B === "")
                    $v_A = String.format(Mscrm.EmailEngagementActions.localizedStrings
                        .SET_REMINDER_INLINEDLG_REMINDOPTION2_2,
                        $v_9);
                else
                    $v_A = String.format(Mscrm.EmailEngagementActions.localizedStrings
                        .SET_REMINDER_INLINEDLG_REMINDOPTION2_1,
                        $v_B,
                        $v_9);
            if ($v_5 === 2)
                $v_A = String.format(Mscrm.EmailEngagementActions.localizedStrings
                    .SET_REMINDER_INLINEDLG_REMINDOPTION3_1,
                    $v_9);
            var $v_C = $get("reminderSet_text");
            $v_C.innerText = $v_A;
            $v_C.setAttribute("aria-label", $v_A);
            $v_C.setAttribute("title", $v_A)
        }
        $v_0.stop()
    },
    $8_3: function() {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("DelayRelatedStatesMetrics");
        $v_0.start();
        var $v_1 = $get("delaySendNotSet"),
            $v_2 = $get("delaySendNotSet_hassuggestion"),
            $v_3 = $get("delaySendSet"),
            $v_4 = $get("emailSent");
        if (Xrm.Page.getAttribute("statuscode") &&
        (Xrm.Page.getAttribute("statuscode").getValue() === 3 ||
            Xrm.Page.getAttribute("statuscode").getValue() === 2)) {
            $v_1.style.display = "none";
            $v_2.style.display = "none";
            $v_3.style.display = "none";
            $v_4.style.display = "none"
        } else if (Xrm.Page.getAttribute("delayedemailsendtime") &&
            !IsNull(Xrm.Page.getAttribute("delayedemailsendtime").getValue())) {
            var $v_5 = $get("delaySendSet_text"),
                $v_6 = Xrm.Page.getAttribute("delayedemailsendtime").getValue(),
                $v_7 = Sys.CultureInfo.CurrentCulture.dateTimeFormat["ShortDatePattern"],
                $v_8 = Sys.CultureInfo.CurrentCulture.dateTimeFormat["ShortTimePattern"],
                $v_9 = String.localeFormat("{0:" + $v_7 + " " + $v_8 + "}", $v_6);
            $v_5.innerText = String.format(Mscrm.EmailEngagementActions.localizedStrings
                .EMAIL_ACT_DELAY_SEND_SET,
                $v_9);
            $v_5.setAttribute("title",
                String.format(Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_SEND_SET, $v_9));
            $v_5.setAttribute("aria-label",
                String.format(Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_SEND_SET, $v_9));
            $v_1.style.display = "none";
            $v_2.style.display = "none";
            $v_3.style.display = "table";
            $v_4.style.display = "none"
        } else this.$V_3();
        $v_0.stop()
    },
    $V_3: function() {
        var $v_0 = "", $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_2 = "", $v_3 = null, $v_4 = null;
        if (Xrm.Page.getAttribute("to")) $v_3 = Xrm.Page.getAttribute("to").getValue();
        if (Xrm.Page.getAttribute("cc")) $v_4 = Xrm.Page.getAttribute("cc").getValue();
        if ($v_3 && $v_3.length === 1)
            if ($v_3[0].entityType) {
                $v_0 = $v_3[0].name.toString();
                $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid($v_3[0].id);
                $v_2 = $v_3[0].entityType
            }
        if ($v_4 && $v_4.length === 1)
            if ($v_0 === "" && $v_4[0].entityType) {
                $v_0 = $v_4[0].name.toString();
                $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid($v_4[0].id);
                $v_2 = $v_4[0].entityType
            } else $v_0 = "";
        var $v_5 = $get("delaySendNotSet"),
            $v_6 = $get("delaySendNotSet_hassuggestion"),
            $v_7 = $get("delaySendSet"),
            $v_8 = $get("emailSent");
        if ($v_0 !== "") {
            var $v_9 = new Xrm.Objects.EntityReference($v_2, $v_1), $v_A = [$v_9], $$t_N = this, $$t_O = this;
            Xrm.Internal.messages.bestTimeToEmail($v_A).then(function($p1_0) {
                    var $v_B = new Mscrm.BestTimeToEmailResponse, $v_C = {};
                    if ($p1_0) {
                        $v_5.style.display = "none";
                        $v_6.style.display = "table";
                        $v_7.style.display = "none";
                        $v_8.style.display = "none";
                        var $v_D = "";
                        $v_C = $p1_0;
                        $v_B = $v_C;
                        var $v_E = $v_B.preferredTime, $v_F = new Date;
                        $v_E.setMinutes($v_E.getMinutes() + $v_F.getTimezoneOffset());
                        var $v_G = Mscrm.DateTimeUtility.localDateTimeNow();
                        if ($v_G.getTime() > $v_E.getTime()) {
                            $v_5.style.display = "table";
                            $v_6.style.display = "none";
                            $v_7.style.display = "none";
                            $v_8.style.display = "none";
                            $$t_N.$0_3 = Mscrm.EmailEngagementActions.$4
                        } else {
                            $$t_N.$0_3 = $v_E;
                            var $v_H = Sys.CultureInfo.CurrentCulture.dateTimeFormat["ShortDatePattern"],
                                $v_I = Sys.CultureInfo.CurrentCulture.dateTimeFormat["ShortTimePattern"],
                                $v_J = String.localeFormat("{0:" + $v_H + " " + $v_I + "}", $v_E);
                            $v_D = String.format(Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SCH,
                                $v_0,
                                $v_J);
                            var $v_K = $get("delaySendNotSet_hassuggestion_text");
                            $v_K.innerText = $v_D;
                            $v_K.setAttribute("title", $v_D);
                            $v_K.setAttribute("aria-label", $v_D)
                        }
                    } else {
                        $v_5.style.display = "table";
                        $v_6.style.display = "none";
                        $v_7.style.display = "none";
                        $v_8.style.display = "none";
                        $$t_N.$0_3 = Mscrm.EmailEngagementActions.$4
                    }
                },
                function($p1_0) {
                    $v_5.style.display = "table";
                    $v_6.style.display = "none";
                    $v_7.style.display = "none";
                    $v_8.style.display = "none";
                    $$t_O.$0_3 = Mscrm.EmailEngagementActions.$4
                })
        } else {
            $v_5.style.display = "table";
            $v_6.style.display = "none";
            $v_7.style.display = "none";
            $v_8.style.display = "none";
            this.$0_3 = Mscrm.EmailEngagementActions.$4
        }
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $Y_3: function() {
        var $v_0 = $get("emailFollowUnfollow");
        if (!IsNull($v_0)) {
            var $v_3 = $get("email_followed_icon"), $v_4 = $v_3.tabIndex, $v_5 = $get(this.$I_3);
            $v_5.setAttribute("tabindex", $v_4 - 5);
            $v_5.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_HEADER);
            $v_5.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_HEADER);
            $v_5.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAILENGAGEMENT_TITLE;
            Sys.UI.DomElement.addCssClass($v_5, "clsEmailEngagementActions");
            var $v_6 = $get("email_followed");
            if (!IsNull($v_6)) {
                var $v_9 = $get("email_followed_text");
                $v_9.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_FOLLOWED;
                $v_9.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_FOLLOWED);
                $v_9.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_FOLLOWED);
                var $v_A = $get("email_followed_link");
                $v_A.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_DONT_FOLLOW;
                $addHandler($v_A, "click", this.$$d_$R_3);
                !(Xrm.Page.getAttribute(this.$A_3).getValue() === 1) &&
                    Sys.UI.DomElement.toggleCssClass($v_A, "emailLink-disabled");
                var $v_B = $get("emailFollowedHelpIcon");
                $v_B.setAttribute("title",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_LINK_HELP_TOOLTIP);
                $addHandler($v_B, "click", this.$$d_$W_3)
            }
            var $v_7 = $get("email_cannot_be_followed");
            if (!IsNull($v_7)) {
                var $v_C = $get("email_cannot_be_followed_text");
                $v_C.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_NOT_FOLLOWED;
                $v_C.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_NOT_FOLLOWED);
                $v_C.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_NOT_FOLLOWED);
                var $v_D = $get("email_cannot_be_followed_link");
                $v_D.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_RECEIPIENTS_PREF;
                $addHandler($v_D, "click", this.$$d_$Q_3);
                var $v_E = $get("email_retry_follow_link");
                $v_E.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_RETRY_FOLLOW;
                $addHandler($v_E, "click", this.$$d_$T_3);
                var $v_F = $get("email_donot_follow_link");
                $v_F.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_DONT_FOLLOW;
                $addHandler($v_F, "click", this.$$d_$R_3);
                if (!(Xrm.Page.getAttribute(this.$A_3).getValue() === 1)) {
                    Sys.UI.DomElement.toggleCssClass($v_E, "emailLink-disabled");
                    Sys.UI.DomElement.toggleCssClass($v_F, "emailLink-disabled")
                }
                var $v_G = $get("emailCantBeFollowedHelpIcon");
                $v_G.setAttribute("title",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_LINK_HELP_TOOLTIP);
                $addHandler($v_G, "click", this.$$d_$W_3)
            }
            var $v_8 = $get("email_not_followed");
            if (!IsNull($v_8)) {
                var $v_H = $get("email_not_followed_text");
                $v_H.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_NOT_FOLLOW;
                $v_H.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_NOT_FOLLOW);
                $v_H.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_NOT_FOLLOW);
                var $v_I = $get("email_not_followed_link");
                $v_I.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_FOLLOW;
                $addHandler($v_I, "click", this.$$d_$S_3);
                !(Xrm.Page.getAttribute(this.$A_3).getValue() === 1) &&
                    Sys.UI.DomElement.toggleCssClass($v_I, "emailLink-disabled");
                var $v_J = $get("emailNotFollowedHelpIcon");
                $v_J.setAttribute("title",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_LINK_HELP_TOOLTIP);
                $addHandler($v_J, "click", this.$$d_$W_3)
            }
        }
        var $v_1 = $get("delaySend");
        if (!IsNull($v_1)) {
            var $v_K = $get("delaySendNotSet");
            if (!IsNull($v_K)) {
                var $v_O = $get("delaySendNotSet_text");
                $v_O.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_MAIL;
                $v_O.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_MAIL);
                $v_O.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_MAIL);
                var $v_P = $get("delaySendNotSet_link");
                $v_P.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_DELAY_SEND;
                $addHandler($v_P, "click", this.$$d_$O_3)
            }
            var $v_L = $get("delaySendNotSet_hassuggestion");
            if (!IsNull($v_L)) {
                var $v_Q = $get("delaySendNotSet_hassuggestion_text");
                $v_Q.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SCH;
                $v_Q.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SCH);
                $v_Q.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SCH);
                var $v_R = $get("delaySendNotSet_hassuggestion_link");
                $v_R.innerText = Mscrm.EmailEngagementActions.localizedStrings
                    .EMAIL_ENGAGEMENT_ACTIONS_LINK_DELAY_MAIL_TITLE;
                $addHandler($v_R, "click", this.$$d_$N_3)
            }
            var $v_M = $get("delaySendSet");
            if (!IsNull($v_M)) {
                var $v_S = $get("delaySendSet_text");
                $v_S.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_SEND_SET;
                $v_S.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_SEND_SET);
                $v_S.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_DELAY_SEND_SET);
                var $v_T = $get("delaySendSet_link");
                $v_T.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_CHANGE_SCHEDULE;
                $addHandler($v_T, "click", this.$$d_$P_3);
                var $v_U = $get("resetDelaySend_link");
                $v_U.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_REMOVE_DELAY;
                $addHandler($v_U, "click", this.$$d_$g_3)
            }
            var $v_N = $get("emailSent");
            if (!IsNull($v_N)) {
                var $v_V = $get("emailSent_text");
                $v_V.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SENT;
                $v_V.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SENT);
                $v_V.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SENT);
                var $v_W = $get("emailSent_link");
                $v_W.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_SENT;
                $addHandler($v_W, "click", this.$$d_$U_3)
            }
        }
        var $v_2 = $get("emailReminder");
        if (!IsNull($v_2)) {
            var $v_X = $get("reminderNotSet");
            if (!IsNull($v_X)) {
                var $v_b = $get("reminderNotSet_text");
                $v_b.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_REMINDER;
                $v_b.setAttribute("title", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_REMINDER);
                $v_b.setAttribute("aria-label", Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_REMINDER);
                var $v_c = $get("reminderNotSet_link");
                $v_c.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_SET_REMINDER;
                $addHandler($v_c, "click", this.$$d_$e_3)
            }
            var $v_Y = $get("reminderSet");
            if (!IsNull($v_Y)) {
                var $v_d = $get("reminderSet_text");
                $v_d.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_REMIND_EMAIL_NOREPLYBY;
                $v_d.setAttribute("title",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_REMIND_EMAIL_NOREPLYBY);
                $v_d.setAttribute("aria-label",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_REMIND_EMAIL_NOREPLYBY);
                var $v_e = $get("reminderSet_link");
                $v_e.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_CHANGE_REMINDER;
                $addHandler($v_e, "click", this.$$d_$f_3);
                var $v_f = $get("reminderRemove_link");
                $v_f.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_REMOVE_REMINDER;
                $addHandler($v_f, "click", this.$$d_$h_3)
            }
            var $v_Z = $get("reminderSetAndHasWarning");
            if (!IsNull($v_Z)) {
                var $v_g = $get("reminderSetAndHasWarning_text");
                $v_g.innerText = Mscrm.EmailEngagementActions.localizedStrings
                    .EMAIL_ENGAGEMENT_ACTIONS_REMINDER_NOT_FOLLOWED;
                $v_g.setAttribute("title",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_REMINDER_NOT_FOLLOWED);
                $v_g.setAttribute("aria-label",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_REMINDER_NOT_FOLLOWED);
                var $v_h = $get("reminderHasWarning_change_link");
                $v_h.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_CHANGE_REMINDER;
                $addHandler($v_h, "click", this.$$d_$f_3);
                var $v_i = $get("reminderHasWarning_remove_link");
                $v_i.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_REMOVE_REMINDER;
                $addHandler($v_i, "click", this.$$d_$h_3)
            }
            var $v_a = $get("reminderMet");
            if (!IsNull($v_a)) {
                var $v_j = $get("reminderMet_text");
                $v_j.innerText = Mscrm.EmailEngagementActions.localizedStrings
                    .EMAIL_ENGAGEMENT_ACTIONS_REMINDER_CONDITION_MET;
                $v_j.setAttribute("title",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_REMINDER_CONDITION_MET);
                $v_j.setAttribute("aria-label",
                    Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_REMINDER_CONDITION_MET);
                var $v_k = $get("reminderMet_link");
                $v_k.innerText = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_LINK_SET_REMINDER;
                $addHandler($v_k, "click", this.$$d_$f_3)
            }
        }
    },
    $W_3: function($p0) {
        var $v_0 = Mscrm.CrmUri.create(Mscrm.EmailEngagementActions.localizedStrings
            .EMAIL_ENGAGEMENT_ACTIONS_LINK_HELP_URL);
        openStdWin($v_0, "_blank", 1e3, 600, null)
    },
    $9_3: function() {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("FollowRelatedStatesMetrics");
        $v_0.start();
        var $v_1 = true, $$t_5 = this, $$t_6 = this;
        Mscrm.EmailEngagementActions.getRecipientPreferences().then(function($p1_0) {
                if (!$p1_0.length) $$t_5.$D_3(true);
                else {
                    for (var $v_2 = 0;
                        $v_2 < $p1_0.length;
                        $v_2++
                    ) $v_1 = $v_1 && ($p1_0[$v_2].emailPreference === 1 ? true : false);
                    $$t_5.$D_3($v_1)
                }
                $v_0.stop()
            },
            function($p1_0) {})
    },
    $X_3: function() {
        var $v_0 = Xrm.Page.getAttribute(this.$7_3);
        $v_0 && $v_0.addOnChange(this.$$d_$b_3);
        var $v_1 = Xrm.Page.getAttribute(this.$2_3);
        $v_1 && $v_1.addOnChange(this.$$d_$b_3);
        var $v_2 = Xrm.Page.getAttribute(this.$B_3);
        $v_2 && $v_2.addOnChange(this.$$d_$c_3);
        var $v_3 = Xrm.Page.getAttribute(this.$L_3);
        if ($v_3) {
            $v_3.addOnChange(this.$$d_$b_3);
            $v_3.addOnChange(this.$$d_$a_3)
        }
        var $v_4 = Xrm.Page.getAttribute(this.$F_3);
        if ($v_4) {
            $v_4.addOnChange(this.$$d_$b_3);
            $v_4.addOnChange(this.$$d_$a_3)
        }
    },
    $b_3: function($p0) { this.$9_3() },
    $a_3: function($p0) { this.$8_3() },
    $c_3: function($p0) { this.$5_3() },
    $R_3: function($p0) {
        var $v_0 = new Xrm.ConfirmDialogStrings;
        $v_0.title = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_DIALOG_TITLE_DONOT_FOLLOW;
        $v_0.subtitle = Mscrm.EmailEngagementActions.localizedStrings
            .EMAIL_ENGAGEMENT_ACTIONS_ERROR_DIALOG_CANCEL_RECIPIENT_ACTIVITY;
        $v_0.text = Mscrm.EmailEngagementActions.localizedStrings
            .EMAIL_ENGAGEMENT_ACTIONS_ERROR_DIALOG_CANCEL_RECIPIENT_ACTIVITY;
        $v_0.confirmButtonLabel = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_BUTTON_OK;
        $v_0.cancelButtonLabel = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_BUTTON_CANCEL;
        var $$t_2 = this, $$t_3 = this;
        Xrm.Dialog.openConfirmDialog($v_0,
            null,
            function() {
                Xrm.Page.getAttribute($$t_2.$2_3).setValue(false);
                $$t_2.$9_3();
                window.setTimeout(function() { $get("email_not_followed_link").focus() }, 100)
            },
            function() { $p0.target.focus() })
    },
    $Q_3: function($p0) {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = 400;
        $v_0.width = 400;
        var $v_1 = {}, $$t_9 = this, $$t_A = this;
        Mscrm.EmailEngagementActions.getRecipientPreferences().then(function($p1_0) {
                $p1_0.sort(function($p2_0, $p2_1) {
                    var $v_2 = $p2_0, $v_3 = $p2_1;
                    if ($v_2
                        .emailPreference !==
                        $v_3.emailPreference) return $v_2.emailPreference - $v_3.emailPreference;
                    else return $v_2.entityDisplayName.localeCompare($v_3.entityDisplayName)
                });
                $v_1["preferences"] = $p1_0;
                $v_1["tableHeaderLeft"] = Mscrm.EmailEngagementActions.localizedStrings
                    .VIEW_CONTACT_PREFERENCES_INLINEDLG_TABLEHEADINGLEFT;
                $v_1["tableHeaderRight"] = Mscrm.EmailEngagementActions.localizedStrings
                    .VIEW_CONTACT_PREFERENCES_INLINEDLG_TABLEHEADINGRIGHT;
                $v_1["followText"] = Mscrm.EmailEngagementActions.localizedStrings
                    .VIEW_CONTACT_PREFERENCES_INLINEDLG_FOLLOW;
                $v_1["donotFollowText"] = Mscrm.EmailEngagementActions.localizedStrings
                    .VIEW_CONTACT_PREFERENCES_INLINEDLG_DONOTFOLLOW;
                Xrm.Dialog.openDialog("ContactPreferences",
                    $v_0,
                    $v_1,
                    $$t_9.$$d_onEmailFollowedDialogCloseCallback,
                    null)
            },
            function($p1_0) {})
    },
    onEmailFollowedDialogCloseCallback: function(outputArgs, callbackParameters) {
        var $$t_2 = this;
        window.setTimeout(function() { $get("email_cannot_be_followed_link").focus() }, 100)
    },
    $T_3: function($p0) {
        this.$9_3();
        $p0.target.focus()
    },
    $S_3: function($p0) {
        var $v_0 = new Xrm.ConfirmDialogStrings;
        $v_0.title = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_DIALOG_TITLE_FOLLOW;
        $v_0.text = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_WARNING_ATTACHMENTS;
        $v_0.subtitle = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ENGAGEMENT_ACTIONS_WARNING_ATTACHMENTS;
        $v_0.confirmButtonLabel = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_BUTTON_OK;
        $v_0.cancelButtonLabel = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_ACT_BUTTON_CANCEL;
        var $$t_2 = this, $$t_3 = this;
        Xrm.Dialog.openConfirmDialog($v_0,
            null,
            function() {
                Xrm.Page.getAttribute($$t_2.$2_3).setValue(true);
                $$t_2.$9_3();
                window.setTimeout(function() { $get("email_followed_link").focus() }, 100)
            },
            function() { $p0.target.focus() })
    },
    $E_3: function() {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = 230;
        $v_0.width = 450;
        var $v_1 = {};
        if (!IsNull(Xrm.Page.getAttribute("delayedemailsendtime")) &&
            Xrm.Page.getAttribute("delayedemailsendtime")
            .getValue()) $v_1["delayedSendTime"] = Xrm.Page.getAttribute("delayedemailsendtime").getValue();
        else if (this.$0_3 > Mscrm.DateTimeUtility.localDateTimeNow()) $v_1["delayedSendTime"] = this.$0_3;
        var $v_2 = $v_1["delayedSendTime"];
        $v_1["footerText"] = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_DELAY_SEND_INLINEDLG_FOOTERTEXT;
        $v_1["dateErrorText"] = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_DIALOG_DATE_ERROR;
        $v_1["lastButtonClicked"] = "";
        $v_1["now"] = Mscrm.DateTimeUtility.localDateTimeNow().getTime();
        $v_1["UserSpecificShortDatePattern"] = Mscrm.DateTimeUtility.getShortDateFormat();
        $v_1["UserSpecificShortTimePattern"] = Mscrm.DateTimeUtility.getShortTimeFormat();
        var $v_3 = this.$$d_sendLaterCallback;
        Xrm.Dialog.openDialog("DelaySend", $v_0, $v_1, $v_3, null)
    },
    $O_3: function($p0) { this.$E_3() },
    sendLaterCallback: function(dialogParams, callbackParams) {
        if (IsNull(dialogParams) || dialogParams["lastButtonClicked"] !== "ok_id") {
            var $$t_3 = this;
            window.setTimeout(function() { $get("delaySendNotSet_link").focus() }, 100);
            return
        }
        var $v_0 = dialogParams["delayedSendTime"];
        if ($v_0) {
            Xrm.Page.getAttribute("delayedemailsendtime").setValue($v_0.getTime());
            this.$8_3();
            var $$t_4 = this;
            window.setTimeout(function() { $get("delaySendSet_link").focus() }, 100)
        } else {
            var $$t_5 = this;
            window.setTimeout(function() { $get("delaySendNotSet_link").focus() }, 100)
        }
    },
    $Z_3: function() {
        var $v_0 = $get("EmailEngagementParentcontainer");
        if (Mscrm.InternalUtilities.Utilities
            .isHighContrastEnabled())
            !Sys.UI.DomElement.containsCssClass($v_0, "EmailEngagementActions-HighContrast") &&
                Sys.UI.DomElement.addCssClass($v_0, "EmailEngagementActions-HighContrast");
        else
            Sys.UI.DomElement.containsCssClass($v_0, "EmailEngagementActions-HighContrast") &&
                Sys.UI.DomElement.removeCssClass($v_0, "EmailEngagementActions-HighContrast")
    },
    $N_3: function($p0) { this.$E_3() },
    $P_3: function($p0) { this.$E_3() },
    $U_3: function($p0) {},
    $e_3: function($p0) { this.$J_3() },
    setReminderCallback: function(dialogParams, callbackParams) {
        if (IsNull(dialogParams) || dialogParams["lastButtonClicked"] !== "ok_id") {
            var $$t_3 = this;
            window.setTimeout(function() { $get("reminderNotSet_link").focus() }, 100);
            return
        }
        var $v_0 = dialogParams["reminderDateSelected"];
        if (!$v_0) return;
        Xrm.Page.getAttribute("emailreminderexpirytime").setValue($v_0.getTime());
        Xrm.Page.getAttribute("emailremindertype").setValue(dialogParams["reminderOptionSelected"]);
        Xrm.Page.getAttribute("emailremindertext").setValue(dialogParams["reminderTextSelected"]);
        this.$5_3();
        var $$t_4 = this;
        window.setTimeout(function() { $get("reminderSet_link").focus() }, 100)
    },
    $J_3: function() {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = 320;
        $v_0.width = 530;
        var $v_1 = Mscrm.DateTimeUtility.localDateTimeNow();
        $v_1.setDate($v_1.getDate() + 2);
        var $v_2 = {};
        $v_2["reminderOptionSelected"] = Xrm.Page.getAttribute("emailremindertype").getValue();
        $v_2["reminderTextSelected"] = Xrm.Page.getAttribute("emailremindertext").getValue();
        if (!IsNull(Xrm.Page.getAttribute("emailreminderexpirytime")))
            if (Xrm.Page.getAttribute("emailreminderexpirytime").getValue())
                if (!this.$6_3)
                    $v_2["reminderDateSelected"] = Xrm.Page.getAttribute("emailreminderexpirytime").getValue();
                else $v_2["reminderDateSelected"] = null;
            else $v_2["reminderDateSelected"] = $v_1;
        else $v_2["reminderDateSelected"] = $v_1;
        $v_2["footerTextOption1_single_recipient"] = Mscrm.EmailEngagementActions.localizedStrings
            .SET_REMINDER_INLINEDLG_REMINDOPTION1_1;
        $v_2["footerTextOption1_ignore_recipient"] = Mscrm.EmailEngagementActions.localizedStrings
            .SET_REMINDER_INLINEDLG_REMINDOPTION1_2;
        $v_2["footerTextOption2_single_recipient"] = Mscrm.EmailEngagementActions.localizedStrings
            .SET_REMINDER_INLINEDLG_REMINDOPTION2_1;
        $v_2["footerTextOption2_ignore_recipient"] = Mscrm.EmailEngagementActions.localizedStrings
            .SET_REMINDER_INLINEDLG_REMINDOPTION2_2;
        $v_2["footerTextOption3"] = Mscrm.EmailEngagementActions.localizedStrings
            .SET_REMINDER_INLINEDLG_REMINDOPTION3_1;
        $v_2["dateErrorText"] = Mscrm.EmailEngagementActions.localizedStrings.EMAIL_DIALOG_DATE_ERROR;
        if (!this.$3_3 && this.$1_3)
            $v_2["invalidChoice"] = Mscrm.EmailEngagementActions.localizedStrings
                .EMAIL_ENGAGEMENT_ACTIONS_REMINDER_NOT_FOLLOWED;
        else $v_2["invalidChoice"] = Mscrm.EmailEngagementActions.localizedStrings.FOLLOW_EMAIL_INVALID_CHOICE;
        $v_2["isEmailFollowedValue"] = this.$3_3 && this.$1_3;
        $v_2["now"] = Mscrm.DateTimeUtility.localDateTimeNow().getTime();
        var $v_3 = this.$H_3();
        if ($v_3 !== "") $v_2["recipientName"] = $v_3;
        $v_2["lastButtonClicked"] = "";
        $v_2["UserSpecificShortDatePattern"] = Mscrm.DateTimeUtility.getShortDateFormat();
        $v_2["UserSpecificShortTimePattern"] = Mscrm.DateTimeUtility.getShortTimeFormat();
        var $v_4 = this.$$d_setReminderCallback;
        Xrm.Dialog.openDialog("EmailReminder", $v_0, $v_2, $v_4, null)
    },
    $H_3: function() {
        var $v_0 = "", $v_1 = null, $v_2 = null;
        if (Xrm.Page.getAttribute("to")) $v_1 = Xrm.Page.getAttribute("to").getValue();
        if (Xrm.Page.getAttribute("cc")) $v_2 = Xrm.Page.getAttribute("cc").getValue();
        if ($v_1 && $v_1.length === 1) $v_0 = $v_1[0].name.toString();
        if ($v_2 && $v_2.length === 1)
            if ($v_0 === "") $v_0 = $v_2[0].name.toString();
            else $v_0 = "";
        return $v_0
    },
    $h_3: function($p0) {
        Xrm.Page.getAttribute("emailremindertype").setValue("0");
        Xrm.Page.getAttribute("emailremindertext").setValue(null);
        Xrm.Page.getAttribute("emailreminderexpirytime").setValue(null);
        this.$5_3();
        var $$t_1 = this;
        window.setTimeout(function() { $get("reminderNotSet_link").focus() }, 100)
    },
    $g_3: function($p0) {
        Xrm.Page.getAttribute("delayedemailsendtime").setValue(null);
        this.$8_3();
        var $$t_1 = this;
        window.setTimeout(function() { $get("delaySendNotSet_link").focus() }, 100)
    },
    $f_3: function($p0) { this.$J_3() }
};
Mscrm.BestTimeToEmailResponse = function() {};
Mscrm.BestTimeToEmailResponse.prototype = { preferredTime: null };
Mscrm.RecipientResponse = function() {};
Mscrm.RecipientResponse.prototype = { entityId: null, entityName: null, emailPreference: 0, entityDisplayName: null };
Mscrm.EmailEngagementActions.registerClass("Mscrm.EmailEngagementActions", Mscrm.CrmUIControl);
Mscrm.BestTimeToEmailResponse.registerClass("Mscrm.BestTimeToEmailResponse");
Mscrm.RecipientResponse.registerClass("Mscrm.RecipientResponse");
Mscrm.EmailEngagementActions.$4 = Mscrm.DateTimeUtility.localDateTimeNow();
Mscrm.EmailEngagementActions.localizedStrings = null