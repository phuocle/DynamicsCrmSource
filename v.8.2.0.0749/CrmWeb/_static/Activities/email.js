Type.registerNamespace("Mscrm");
Mscrm.EmailState = function() {};
Mscrm.EmailState.prototype = { open: 0, completed: 1, canceled: 2 };
Mscrm.EmailState.registerEnum("Mscrm.EmailState", false);
Mscrm.EmailDeliveryMethod = function() {};
Mscrm.EmailDeliveryMethod.prototype = { unset: -1, none: 0, outlookClient: 1, emailRouter: 2, forwardMailbox: 3 };
Mscrm.EmailDeliveryMethod.registerEnum("Mscrm.EmailDeliveryMethod", false);
Mscrm.PartyStatusType = function() {};
Mscrm.PartyStatusType.prototype = {
    allOK: 0,
    partyMemberWithNoAddress: 1,
    partyMemberUnresolved: 2,
    partyMemberDoNotSend: 4,
    partySendAsNotAllowed: 8
};
Mscrm.PartyStatusType.registerEnum("Mscrm.PartyStatusType", false);

function send() {
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.getAttribute("from");
    if (!IsNull($v_1))
        if (IsNull($v_1.getValue()) || $v_1.getValue().length <= 0) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_EMAIL_SENDER_REQUIRED"), null);
            return
        }
    var $v_2 = Xrm.Page.getAttribute("to"),
        $v_3 = IsNull($v_2.getValue()) ? 0 : $v_2.getValue().length,
        $v_4 = Xrm.Page.getAttribute("cc");
    if (!IsNull($v_4)) if (!IsNull($v_4.getValue())) $v_3 += $v_4.getValue().length;
    var $v_5 = Xrm.Page.getAttribute("bcc");
    if (!IsNull($v_5)) if (!IsNull($v_5.getValue())) $v_3 += $v_5.getValue().length;
    if ($v_3 <= 0) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_EMAIL_RECIPIENT_REQUIRED"), null);
        return
    }
    var $v_6 = $v_1.getValue()[0].id.toString(),
        $v_7 = 8,
        $v_8 = "outgoingemaildeliverymethod",
        $v_9 = "enabledforoutgoingemail",
        $v_A =
            "<fetch version='1.0' mapping='logical'><entity name='mailbox'><attribute name='outgoingemaildeliverymethod' /><attribute name='enabledforoutgoingemail' /><filter type='and'><condition attribute='regardingobjectid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_6) + "' /><condition attribute='regardingobjecttypecode' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_7.toString()) + "' /></filter></entity></fetch>",
        $v_B = null;
    Xrm.Internal.messages.retrieveMultiple($v_A).then(function($p1_0) {
            var $v_C = true;
            if ($p1_0) {
                $v_B = $p1_0.entityCollection;
                if ($v_B.get_count()) {
                    var $v_I = $v_B.get_entities()[0], $v_J = $v_I.getValue($v_8).getValue("value");
                    if ($v_J === 2) {
                        var $v_K = $v_I.getValue($v_9).getValue("value");
                        $v_C = !IsNull($v_K) && !!$v_K
                    }
                }
            }
            var $v_D = new Xrm.Objects.EntityReference("email",
                    Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_0)),
                $v_E = new Array(1),
                $v_F = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_D,
                        {},
                        {},
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_D.setValue("from", Xrm.Page.getAttribute("from"));
            $v_E[0] = $v_F;
            var $v_G = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection($v_E, false, 1, false),
                $v_H = checkPartyStatus($v_G, null);
            if (checkBit($v_H, 2) || checkBit($v_H, 1)) return;
            $v_H = getRecipientsStatus($v_0);
            Xrm.Internal.messages.whoAmI().then(function($p2_0) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($p2_0)) {
                        var $v_L = $p2_0.organizationId,
                            $v_M = $v_L ? $v_L.toString() : null,
                            $v_N = ["allowunresolvedpartiesonemailsend"];
                        Xrm.Internal.messages.retrieve("organization", $v_M, $v_N).then(function($p3_0) {
                                var $v_O = $p3_0.entity, $v_P = $v_O.getValue("allowunresolvedpartiesonemailsend");
                                if ($v_P) $v_P = $v_P.getValue("value");
                                else $v_P = 0;
                                if ($v_P === 1) {
                                    if (checkBit($v_H, 1) || checkBit($v_H, 4)) return
                                } else if (checkBit($v_H, 2) || checkBit($v_H, 1) || checkBit($v_H, 4)) return;
                                var $v_Q = Xrm.Page.data.entity.getPrimaryAttributeValue();
                                if (Xrm.Page.context.client.getClientState() === "Offline") if (!$v_Q) $v_Q = "";
                                $B($v_0)
                            },
                            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                    }
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function $B($p0) {
    Xrm.Page.data.save().then(function() {
            var $v_0 = false;
            if (Xrm.Internal.isEnabledForInteractionCentric()) {
                var $v_1 = Xrm.Page.getAttribute("IsInteractionWallQuickAction");
                if (IsNull($v_1)) $p0 = Xrm.Page.data.entity.getId();
                else $v_0 = true
            } else $p0 = Xrm.Page.data.entity.getId();
            Xrm.Internal.messages.sendEmail(Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p0), true)
                .then(function($p2_0) {
                        var $v_2 = new Xrm.Objects.EntityReference("email",
                                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p0),
                                $p2_0.name),
                            $v_3 = "send",
                            $v_4 = true;
                        emailSuccessCallback($v_2, $v_3, $v_4, $v_0)
                    },
                    function($p2_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p2_0) })
        },
        function($p1_0) {
            Xrm.Internal.openErrorDialog($p1_0.errorCode, $p1_0.message);
            return
        })
}

function checkPartyStatus(parties, activityLogicalName) {
    var $v_0 = 0;
    if (null === parties) return $v_0;
    for (var $v_1 = 0; $v_1 < parties.get_count(); $v_1++) {
        var $v_2 = parties.get_entities()[$v_1], $v_3 = "";
        if (activityLogicalName) $v_3 = "donotemail";
        if (!!$v_3 && Xrm.Page.getAttribute($v_3) && Xrm.Page.getAttribute($v_3).getValue()) $v_0 |= 4;
        if ($7($v_0)) break
    }
    return $v_0
}

function checkBit(value, bit) { return (bit & value) === bit }

function getRecipientsStatus(emailId) {
    if (IsNull(emailId)) emailId = Xrm.Page.data.entity.getId();
    for (var $v_0 = ["from", "to", "bcc", "cc"], $v_1 = 0, $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0;
        $$idx_5 < $$len_4;
        ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5],
            $v_3 = new Xrm.Objects
                .EntityReference("email", Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(emailId)),
            $v_4 = new Array(1),
            $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_3,
                    {},
                    {},
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_3.setValue($v_2, Xrm.Page.getAttribute($v_2));
        $v_4[0] = $v_5;
        var $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection($v_4, false, 1, false);
        $v_1 |= $F($v_6, $v_2, "email");
        if ($7($v_1)) break
    }
    return $v_1
}

function emailSuccessCallback(entityReference, sendType, sendSucceed, isInteractionWallQuickAction) {
    var $v_0 = false,
        $v_1 = false,
        $v_2 = IsNull(sendType) ? "" : sendType.toString(),
        $v_3 = IsNull(sendSucceed) ? false : Boolean.parse(sendSucceed.toString()),
        $v_4 = entityReference,
        $v_5 = cloneEntityReference($v_4);
    $v_5.Name = CrmEncodeDecode.CrmHtmlDecode($v_4.Name);
    $v_5.TypeDisplayName = CrmEncodeDecode.CrmHtmlDecode($v_4.TypeDisplayName);
    if (!IsNull($v_4)) {
        var $v_6 = $v_4.Id.toString();
        $v_1 = true;
        if (sendType === "send")
            if (sendSucceed) {
                !isInteractionWallQuickAction && refreshPageClose($v_1);
                $v_0 = true
            } else {
                !isInteractionWallQuickAction && Xrm.Utility.openEntityForm("email", $v_6, {});
                $v_0 = false
            }
        else {
            Xrm.Utility.openEntityForm("email", $v_6, null);
            $v_0 = false
        }
        if (!isInteractionWallQuickAction)
            Xrm.Internal.refreshParentGrid(4202,
                Xrm.Page.data.entity.getPrimaryAttributeValue(),
                Xrm.Page.data.entity.getId());
        else {
            var $v_7 = Xrm.Page.getAttribute("InteractionWallViewModel");
            !IsNull($v_7) && $v_7.fireOnChange()
        }
    }
    return $v_0
}

function refreshPageClose(forceNavigationAway) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        var $v_0 = promptDataLossOnClose(forceNavigationAway);
        if ($v_0)
            Xrm.Utility.confirmDialog(Xrm.Internal.getResourceString("LOCID_FORMS_SAVE_CONFIRM_TITLE"),
                function() {
                    Xrm.Page.data.save();
                    Xrm.Page.ui.close()
                },
                function() { return });
        else {
            Xrm.Page.data.save();
            Xrm.Page.ui.close()
        }
    }
}

function promptDataLossOnClose(forceNavigationAway) {
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        if (forceNavigationAway) return false;
        Xrm.Page.ui.getCurrentControl().setFocus();
        var $v_0 = Xrm.Page.data.entity;
        if (IsNull($v_0)) return false;
        if (!Xrm.Page.data.entity.getIsDirty()) return false;
        else {
            Xrm.Page.data.save();
            Xrm.Page.ui.close();
            return true
        }
    }
    return false
}

function cloneEntityReference(original) {
    var $v_0 = new Xrm.Objects.EntityReference(original.Name, original.Id);
    $v_0.TypeCode = original.TypeCode;
    $v_0.TypeName = original.TypeName;
    $v_0.TypeDisplayName = original.TypeDisplayName;
    return $v_0
}

function reply() { createReply(Xrm.Page.data.entity.getId()) }

function replyall() { createReplyAll(Xrm.Page.data.entity.getId()) }

function forward() { createForward(Xrm.Page.data.entity.getId()) }

function createForward(forwardFromId) {
    var $v_0 = Mscrm.CommandBarActions.isMobileCompanionApp()
            ? Xrm.Internal.getResourceString("Email_Prefix_Forward")
            : Xrm.Internal.getResourceString("LOCID_EMAIL_PREFIX_FORWARD"),
        $v_1 = [
            "statuscode", "statecode", "from", "activityid", "subject", "directioncode", "regardingobjectid",
            "actualdurationminutes", "prioritycode", "scheduledend", "ownerid", "parentactivityid", "to", "cc", "bcc",
            "description", "actualend", "baseconversationindexhash"
        ];
    Xrm.Internal.messages.retrieve("email", forwardFromId, $v_1).then(function($p1_0) {
            var $v_2 = $2($p1_0, $v_0);
            $v_2.hasField("description") && $v_2.setValue("description", buildEmailFollowUpBody($v_2));
            $C($v_2);
            $4($v_2, forwardFromId);
            var $v_3 = {}, $v_4 = {}, $v_5 = new Array(9), $v_6 = "subject";
            $v_5[0] = $v_6;
            $v_3[$v_6] = 14;
            $v_4[$v_6] = $v_2.getValue("subject");
            $v_6 = "description";
            $v_5[1] = $v_6;
            $v_3[$v_6] = 14;
            $v_4[$v_6] = $v_2.getValue("description");
            $v_6 = "parentactivityid";
            $v_5[2] = $v_6;
            $v_3[$v_6] = 6;
            $v_4[$v_6] = new Xrm.Objects.EntityReference("email",
                new Microsoft.Crm.Client.Core.Framework.Guid($v_2.getValue("parentactivityid").toString()));
            $v_6 = "from";
            $v_5[3] = $v_6;
            $v_3[$v_6] = 10;
            var $v_7 = $v_2.getValue("from");
            $v_4[$v_6] = $v_7;
            $v_6 = "regardingobjectid";
            $v_5[4] = $v_6;
            $v_3[$v_6] = 6;
            $v_4[$v_6] = $v_2.getValue("regardingobjectid");
            $v_6 = "actualdurationminutes";
            $v_5[5] = $v_6;
            $v_3[$v_6] = 5;
            $v_4[$v_6] = $v_2.getValue("actualdurationminutes");
            $v_6 = "prioritycode";
            $v_5[6] = $v_6;
            $v_3[$v_6] = 11;
            $v_4[$v_6] = $v_2.getValue("prioritycode");
            $v_6 = "scheduledend";
            $v_5[7] = $v_6;
            $v_3[$v_6] = 2;
            $v_4[$v_6] = $v_2.getValue("scheduledend");
            $v_6 = "baseconversationindexhash";
            $v_5[8] = $v_6;
            $v_3[$v_6] = 5;
            $v_4[$v_6] = $v_2.getValue($v_6);
            $v_6 = "followemailuserpreference";
            $v_5[9] = $v_6;
            $v_3[$v_6] = 0;
            $v_4[$v_6] = true;
            var $v_8 = new Xrm.Objects.EntityReference("email", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                $v_9 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_8,
                        $v_4,
                        $v_3,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_9.get_changedFieldNames().addRange($v_5);
            Xrm.Internal.messages.create($v_9).then(function($p2_0) {
                    var $v_A = $p2_0.id,
                        $v_B =
                            "<fetch version='1.0' mapping='logical'><entity name='activitymimeattachment'><all-attributes/><filter type='and'><condition attribute='activityid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(forwardFromId) + "' /><condition attribute='objecttypecode' operator='eq' value='" + 4202 + "' /></filter></entity></fetch>";
                    Xrm.Internal.messages.retrieveMultiple($v_B).then(function($p3_0) {
                            var $v_C = $p3_0.entityCollection;
                            Mscrm.AttachmentCount.$0 = $v_C.get_count();
                            if (!Mscrm.AttachmentCount.$0) {
                                Mscrm.AttachmentCount.$0 = -1;
                                Xrm.Utility.openEntityForm("email", $v_A.toString())
                            } else $A($v_C, $v_A)
                        },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function createReply(replyToEmailId) {
    var $v_0 = Mscrm.CommandBarActions.isMobileCompanionApp()
            ? Xrm.Internal.getResourceString("Email_Prefix_Reply")
            : Xrm.Internal.getResourceString("LOCID_EMAIL_PREFIX_REPLY"),
        $v_1 = [
            "statecode", "statuscode", "from", "subject", "directioncode", "ownerid", "regardingobjectid",
            "actualdurationminutes", "prioritycode", "scheduledend", "parentactivityid", "to", "cc", "bcc",
            "description",
            "actualend", "baseconversationindexhash"
        ],
        $v_2 = replyToEmailId;
    Xrm.Internal.messages.retrieve("email", $v_2, $v_1).then(function($p1_0) {
            var $v_3 = $2($p1_0, $v_0);
            $4($v_3, $v_2);
            $v_3.hasField("description") && $v_3.setValue("description", buildEmailFollowUpBody($v_3));
            $E($v_3);
            var $v_4 = {}, $v_5 = {}, $v_6 = new Array(10), $v_7 = "subject";
            $v_6[0] = $v_7;
            $v_4[$v_7] = 14;
            $v_5[$v_7] = $v_3.getValue("subject");
            $v_7 = "description";
            $v_6[1] = $v_7;
            $v_4[$v_7] = 14;
            $v_5[$v_7] = $v_3.getValue("description");
            $v_7 = "parentactivityid";
            $v_6[2] = $v_7;
            $v_4[$v_7] = 6;
            $v_5[$v_7] = new Xrm.Objects.EntityReference("email",
                new Microsoft.Crm.Client.Core.Framework.Guid($v_3.getValue("parentactivityid").toString()));
            $v_7 = "from";
            $v_6[3] = $v_7;
            $v_4[$v_7] = 10;
            var $v_8 = $v_3.getValue("from");
            $v_5[$v_7] = $v_8;
            $v_7 = "to";
            $v_6[4] = $v_7;
            $v_4[$v_7] = 10;
            $v_8 = $v_3.getValue("to");
            $v_5[$v_7] = $v_8;
            $v_7 = "regardingobjectid";
            $v_6[5] = $v_7;
            $v_4[$v_7] = 6;
            $v_5[$v_7] = $v_3.getValue("regardingobjectid");
            $v_7 = "actualdurationminutes";
            $v_6[6] = $v_7;
            $v_4[$v_7] = 5;
            $v_5[$v_7] = $v_3.getValue("actualdurationminutes");
            $v_7 = "prioritycode";
            $v_6[7] = $v_7;
            $v_4[$v_7] = 11;
            $v_5[$v_7] = $v_3.getValue("prioritycode");
            $v_7 = "scheduledend";
            $v_6[8] = $v_7;
            $v_4[$v_7] = 2;
            $v_5[$v_7] = $v_3.getValue("scheduledend");
            $v_7 = "baseconversationindexhash";
            $v_6[9] = $v_7;
            $v_4[$v_7] = 5;
            $v_5[$v_7] = $v_3.getValue($v_7);
            $v_7 = "followemailuserpreference";
            $v_6[10] = $v_7;
            $v_4[$v_7] = 0;
            $v_5[$v_7] = true;
            var $v_9 = new Xrm.Objects.EntityReference("email", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                $v_A = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_9,
                        $v_5,
                        $v_4,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_A.get_changedFieldNames().addRange($v_6);
            Xrm.Internal.messages.create($v_A).then(function($p2_0) {
                    var $v_B = $p2_0.id.toString();
                    Xrm.Utility.openEntityForm("email", $v_B.toString(), null)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function createReplyAll(replyAllToEmailId) {
    var $v_0 = Mscrm.CommandBarActions.isMobileCompanionApp()
            ? Xrm.Internal.getResourceString("Email_Prefix_Reply")
            : Xrm.Internal.getResourceString("LOCID_EMAIL_PREFIX_REPLY"),
        $v_1 = [
            "statuscode", "statecode", "from", "activityid", "subject", "directioncode", "regardingobjectid", "ownerid",
            "prioritycode", "scheduledend", "actualdurationminutes", "parentactivityid", "to", "cc", "bcc",
            "description",
            "actualend", "baseconversationindexhash"
        ],
        $v_2 = replyAllToEmailId;
    Xrm.Internal.messages.retrieve("email", $v_2, $v_1).then(function($p1_0) {
            var $v_3 = $2($p1_0, $v_0);
            $4($v_3, $v_2);
            $v_3.hasField("description") && $v_3.setValue("description", buildEmailFollowUpBody($v_3));
            $D($v_3);
            var $v_4 = {}, $v_5 = {}, $v_6 = new Array(11), $v_7 = "subject";
            $v_6[0] = $v_7;
            $v_4[$v_7] = 14;
            $v_5[$v_7] = $v_3.getValue("subject");
            $v_7 = "description";
            $v_6[1] = $v_7;
            $v_4[$v_7] = 14;
            $v_5[$v_7] = $v_3.getValue("description");
            $v_7 = "parentactivityid";
            $v_6[2] = $v_7;
            $v_4[$v_7] = 6;
            $v_5[$v_7] = new Xrm.Objects.EntityReference("email",
                new Microsoft.Crm.Client.Core.Framework.Guid($v_3.getValue("parentactivityid").toString()));
            $v_7 = "from";
            $v_6[3] = $v_7;
            $v_4[$v_7] = 10;
            var $v_8 = $v_3.getValue("from");
            $v_5[$v_7] = $v_8;
            $v_7 = "to";
            $v_6[4] = $v_7;
            $v_4[$v_7] = 10;
            $v_8 = $v_3.getValue("to");
            $v_5[$v_7] = $v_8;
            $v_7 = "cc";
            $v_6[5] = $v_7;
            $v_4[$v_7] = 10;
            $v_8 = $v_3.getValue("cc");
            $v_5[$v_7] = $v_8;
            $v_7 = "regardingobjectid";
            $v_6[6] = $v_7;
            $v_4[$v_7] = 6;
            $v_5[$v_7] = $v_3.getValue("regardingobjectid");
            $v_7 = "actualdurationminutes";
            $v_6[7] = $v_7;
            $v_4[$v_7] = 5;
            $v_5[$v_7] = $v_3.getValue("actualdurationminutes");
            $v_7 = "prioritycode";
            $v_6[8] = $v_7;
            $v_4[$v_7] = 11;
            $v_5[$v_7] = $v_3.getValue("prioritycode");
            $v_7 = "scheduledend";
            $v_6[9] = $v_7;
            $v_4[$v_7] = 2;
            $v_5[$v_7] = $v_3.getValue("scheduledend");
            $v_7 = "baseconversationindexhash";
            $v_6[10] = $v_7;
            $v_4[$v_7] = 5;
            $v_5[$v_7] = $v_3.getValue($v_7);
            $v_7 = "followemailuserpreference";
            $v_6[11] = $v_7;
            $v_4[$v_7] = 0;
            $v_5[$v_7] = true;
            var $v_9 = new Xrm.Objects.EntityReference("email", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                $v_A = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_9,
                        $v_5,
                        $v_4,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_A.get_changedFieldNames().addRange($v_6);
            Xrm.Internal.messages.create($v_A).then(function($p2_0) {
                    var $v_B = $p2_0.id.toString();
                    Xrm.Utility.openEntityForm("email", $v_B.toString(), null)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function buildEmailFollowUpBody(email) {
    var $v_0 = new Sys.StringBuilder, $v_1 = "", $v_2 = email.getValue("description");
    $v_1 = $v_2;
    if ($v_2 && $v_2.indexOf("id=signature") > -1)
        $v_1 = $v_1.replace("<div id=signature></div>", "<div id=oldsignature></div>");
    $v_0.append("<br/><div id=signature></div><br/>");
    $v_0.append('<font face="');
    $v_0.append(CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.CommandBarActions.isMobileCompanionApp()
        ? Xrm.Internal.getResourceString("Microsoft_Crm_Msgbody_Default_fonts")
        : Xrm.Internal.getResourceString("LOCID_MSCRM_MSGBODY_FONTS")));
    $v_0.append('" size="2">');
    $v_0.append("<br>");
    $v_0.append(CrmEncodeDecode.CrmHtmlEncode(Mscrm.CommandBarActions.isMobileCompanionApp()
        ? Xrm.Internal.getResourceString("Email_Followup_Header")
        : Xrm.Internal.getResourceString("LOCID_EMAIL_FOLLOWUP_HEADER")));
    $v_0.append("<br>");
    var $v_3 = email.getValue("from");
    $v_3 &&
        $v_3.get_count() > 0 &&
        $v_0.append($1(Mscrm.CommandBarActions.isMobileCompanionApp()
            ? Xrm.Internal.getResourceString("Email_Followup_Sender")
            : Xrm.Internal.getResourceString("LOCID_EMAIL_FOLLOWUP_SENDER"),
            $v_3));
    $v_0.append("<b>");
    $v_0.append(CrmEncodeDecode.CrmHtmlEncode(Mscrm.CommandBarActions.isMobileCompanionApp()
        ? Xrm.Internal.getResourceString("Email_Followup_ReceivedDate")
        : Xrm.Internal.getResourceString("LOCID_EMAIL_FOLLOWUP_RECEIVED")));
    $v_0.append("</b> ");
    email.getFormattedValue("actualend") &&
        $v_0.append(CrmEncodeDecode.CrmHtmlEncode(email.getFormattedValue("actualend").toString()));
    $v_0.append("<br>");
    var $v_4 = email.getValue("to");
    $v_4 &&
        $v_4.get_count() > 0 &&
        $v_0.append($1(Mscrm.CommandBarActions.isMobileCompanionApp()
            ? Xrm.Internal.getResourceString("Email_Followup_ToRecipients")
            : Xrm.Internal.getResourceString("LOCID_EMAIL_FOLLOWUP_TO"),
            $v_4));
    var $v_5 = email.getValue("cc");
    $v_5 &&
        $v_5.get_count() > 0 &&
        $v_0.append($1(Mscrm.CommandBarActions.isMobileCompanionApp()
            ? Xrm.Internal.getResourceString("Email_Followup_CcRecipients")
            : Xrm.Internal.getResourceString("LOCID_EMAIL_FOLLOWUP_CC"),
            $v_5));
    $v_0.append("<b>");
    $v_0.append(CrmEncodeDecode.CrmHtmlEncode(Mscrm.CommandBarActions.isMobileCompanionApp()
        ? Xrm.Internal.getResourceString("Email_Followup_Subject")
        : Xrm.Internal.getResourceString("LOCID_EMAIL_FOLLOWUP_SUBJECT")));
    $v_0.append("</b> ");
    var $v_6 = email.getValue("subject"), $v_7 = $v_6.substring($v_6.indexOf(":") + 1, $v_6.length);
    $v_0.append(CrmEncodeDecode.CrmHtmlEncode($v_7));
    $v_0.append("</font><br><br>");
    $v_2 && $v_0.append($v_1);
    return $v_0.toString()
}

function createEmailReply(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && createReply($v_0)
}

function $7($p0) { return checkBit($p0, 2) && checkBit($p0, 1) && checkBit($p0, 4) }

function $F($p0, $p1, $p2) {
    var $v_0 = 0, $v_1 = checkPartyStatus($p0, $p2);
    if (checkBit($v_1, 2)) $v_0 |= 2;
    if (checkBit($v_1, 1)) $v_0 |= 1;
    if (checkBit($v_1, 4)) $v_0 |= 4;
    return $v_0
}

function $C($p0) {
    $p0.setValue("from", null);
    $p0.setValue("to", null);
    $p0.setValue("cc", null);
    $p0.setValue("bcc", null);
    $3($p0)
}

function $D($p0) {
    var $v_0 = $8($p0.getValue("from")), $v_1 = $9($p0.getValue("to"));
    $5($v_1, $v_0, true);
    $p0.setValue("to", $v_0);
    var $v_2 = $9($p0.getValue("cc"));
    $5(null, $v_2, true);
    $p0.setValue("cc", $v_2);
    $p0.setValue("bcc", null);
    $3($p0)
}

function $5($p0, $p1, $p2) {
    if (!$p0 || !$p0.get_count()) return;
    for (var $v_0 = Xrm.Page.context.getUserId(), $v_1 = $p0.get_count(), $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $p0.get_entities()[$v_2];
        if (!$p2 ||
            !$v_3.getValue("partyid") ||
            $v_3.getValue("partyid").Id !== new Microsoft.Crm.Client.Core.Framework.Guid($v_0)) {
            $6($v_3);
            $p1.add($v_3)
        }
    }
}

function $4($p0, $p1) {
    var $v_0;
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
        .data))
        $v_0 = new Xrm.Objects.EntityReference("email", Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($p1));
    else
        $v_0 = new Xrm.Objects.EntityReference("email",
            Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(Xrm.Page.data.entity.getId()));
    var $v_1 = {};
    $v_1["parentactivityid"] = new Microsoft.Crm.Client.Core.Framework.Guid($p1);
    var $v_2 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityRecord($v_0,
            $v_1,
            $v_1,
            {},
            {},
            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $p0.mergeChanges($v_2);
    $p0.setValue("parentactivityid", new Microsoft.Crm.Client.Core.Framework.Guid($p1));
    if ($p0.hasField("messageid")) delete $p0.get_cleanFields().messageid;
    if ($p0.hasField("inreplyto")) delete $p0.get_cleanFields().inreplyto;
    if ($p0.hasField("conversationindex")) delete $p0.get_cleanFields().conversationindex
}

function $E($p0) {
    $p0.setValue("to", null);
    $p0.setValue("cc", null);
    $p0.setValue("bcc", null);
    $6($p0);
    $p0.setValue("to", $8($p0.getValue("from")));
    $3($p0)
}

function $9($p0) {
    var $v_0 = new Array($p0.get_count());
    if ($p0 && $p0.get_count() > 0)
        for (var $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
            var $v_2 = {},
                $v_3 = {},
                $v_4 = new Array(1),
                $v_5 = $p0.get_entities()[$v_1],
                $v_6 = $v_5.getValue("partyid");
            if (!IsNull($v_6)) {
                var $v_9 = new Xrm.Objects.EntityReference($v_6.LogicalName, $v_6.Id, $v_6.Name);
                $v_4[0] = "partyid";
                $v_3[$v_4[0]] = $v_9;
                $v_2[$v_4[0]] = 6
            } else {
                $v_4[0] = "addressused";
                $v_3["addressused"] = $v_5.getValue("addressused");
                $v_2["addressused"] = 14
            }
            var $v_7 = new Xrm.Objects.EntityReference("activityparty",
                    Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                $v_8 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_7,
                        $v_3,
                        $v_2,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_8.get_changedFieldNames().addRange($v_4);
            $v_0[$v_1] = $v_8
        }
    if (!IsNull($v_0))
        return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityCollection($v_0, false, $v_0.length, false);
    else return null
}

function $8($p0) {
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(1), $v_3 = null;
    if ($p0 && $p0.get_count() > 0) {
        var $v_4 = $p0.get_entities()[0], $v_5 = $v_4.getValue("partyid");
        if (!IsNull($v_5)) {
            $v_5 = new Xrm.Objects.EntityReference($v_5.LogicalName, $v_5.Id, $v_5.Name);
            $v_2[0] = "partyid";
            $v_1[$v_2[0]] = $v_5;
            $v_0[$v_2[0]] = 6
        } else {
            $v_2[0] = "addressused";
            $v_1["addressused"] = $v_4.getValue("addressused");
            $v_0["addressused"] = 14
        }
        var $v_6 = new Xrm.Objects.EntityReference("activityparty",
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
        $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_6,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_3.get_changedFieldNames().addRange($v_2)
    }
    return new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection([$v_3], false, 1, false)
}

function $6($p0) {
    if ($p0.get_cleanFields()) {
        delete $p0.get_cleanFields().activityid;
        delete $p0.get_cleanFields().activitypartyid;
        delete $p0.get_cleanFields().exchangeentryid;
        if ($p0.hasField("ispartydeleted") && $p0.getValue("ispartydeleted")) delete $p0.get_cleanFields().partyid
    }
}

function $3($p0) {
    $p0.setValue("from", null);
    var $v_0 = {},
        $v_1 = {},
        $v_2 = new Array(1),
        $v_3 = new Xrm.Objects.EntityReference("systemuser",
            new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId()),
            "email");
    $v_2[0] = "partyid";
    $v_1[$v_2[0]] = $v_3;
    $v_0[$v_2[0]] = 6;
    var $v_4 = new Xrm.Objects.EntityReference("activityparty", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_4,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_5.get_changedFieldNames().addRange($v_2);
    $p0.setValue("from",
        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection([$v_5], false, 1, false))
}

function $2($p0, $p1) {
    var $v_0 = null;
    $v_0 = $p0.entity;
    $v_0.get_identifier().Id = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    delete $v_0.get_cleanFields().activityid;
    delete $v_0.get_cleanFields().statecode;
    $H($v_0);
    $I($v_0);
    $G($v_0, $p1);
    return $v_0
}

function $G($p0, $p1) {
    var $v_0 = "...";
    !$p0.hasField("subject") && $p0.initializeValue("subject", "", 14);
    var $v_1 = $p0.getValue("subject").toString();
    if (!$v_1) $v_1 = "";
    if (!$v_1.startsWith($p1))
        $v_1 = $p1 +
            " " +
            ($p1.length + 1 + $v_1.length > 200
                ? $v_1.substring(0, $v_1.length - $p1.length - $v_0.length - 1) + $v_0
                : $v_1);
    $p0.setValue("subject", $v_1)
}

function $I($p0) { $p0.setValue("ownerid", Xrm.Page.context.getUserId()) }

function $H($p0) {
    $p0.setValue("directioncode", true);
    $p0.setValue("statecode", Mscrm.EmailState.toString(0));
    $p0.setValue("statuscode", 1)
}

function $1($p0, $p1) {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append("<b>");
    $v_0.append(CrmEncodeDecode.CrmHtmlEncode($p0));
    $v_0.append("</b> ");
    for (var $v_1 = 0; $v_1 < $p1.get_count(); $v_1++) {
        $v_1 && $v_0.append("; ");
        var $v_2 = $p1.get_entities()[$v_1], $v_3 = "";
        if (!IsNull($v_2.getValue("partyid"))) $v_3 = $v_2.getValue("partyid").Name;
        else $v_3 = $v_2.getValue("addressused");
        $v_0.append(CrmEncodeDecode.CrmHtmlEncode($v_3))
    }
    $v_0.append("<br>");
    return $v_0.toString()
}

function $A($p0, $p1) {
    for (var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_1 = 0; $v_1 < $p0.get_count(); $v_1++) {
        var $v_2 = $p0.get_entities()[$v_1], $v_3 = $v_2.clone();
        $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
        $v_3.setValue("activitymimeattachmentid", $v_0.toString());
        var $v_4 = new Xrm.Objects.EntityReference("email", $p1);
        $v_3.setValue("objectid", $v_4);
        for (var $$arr_7 = $v_3.get_fieldNames(), $$len_8 = $$arr_7.length, $$idx_9 = 0; $$idx_9 < $$len_8; ++$$idx_9) {
            var $v_5 = $$arr_7[$$idx_9];
            $v_3.get_changedFieldNames().add($v_5)
        }
        $v_3.get_changedFieldNames().remove("activityid");
        $v_3.get_changedFieldNames().remove("attachmentid");
        $v_3.get_identifier().Id = $v_0;
        Xrm.Internal.messages.create($v_3).then(function($p1_0) {
                var $v_6 = $p1_0.id;
                if (!(Xrm.Page.context.client.getClient() === "Outlook" &&
                    !(Xrm.Page.context.client.getClientState() === "Online"))) {
                    $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
                    Mscrm.AttachmentCount.$0 = Mscrm.AttachmentCount.$0 - 1;
                    if (!Mscrm.AttachmentCount.$0) {
                        Mscrm.AttachmentCount.$0 = -1;
                        Xrm.Utility.openEntityForm("email", $p1.toString())
                    }
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
}

Mscrm.AttachmentCount = function() {};
Mscrm.AttachmentCount.get_currentAttachmentCount = function() { return Mscrm.AttachmentCount.$0 };
Mscrm.AttachmentCount.set_currentAttachmentCount = function(value) {
    Mscrm.AttachmentCount.$0 = value;
    return value
};
Mscrm.AttachmentCount.registerClass("Mscrm.AttachmentCount");
Mscrm.AttachmentCount.$0 = -1