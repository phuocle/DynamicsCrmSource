Type.registerNamespace("Mscrm");
Mscrm.KnowledgeArticleFormState = function() {};
Mscrm.KnowledgeArticleFormState.prototype = {
    draft: 0,
    approved: 1,
    scheduled: 2,
    published: 3,
    expired: 4,
    archived: 5,
    discarded: 6
};
Mscrm.KnowledgeArticleFormState.registerEnum("Mscrm.KnowledgeArticleFormState", false);
Mscrm.TranslateDialogVersionPreference = function() {};
Mscrm.TranslateDialogVersionPreference.prototype = { major: 0, minor: 1 };
Mscrm.TranslateDialogVersionPreference.registerEnum("Mscrm.TranslateDialogVersionPreference", false);
Mscrm.PublishDialogPublishPreference = function() {};
Mscrm.PublishDialogPublishPreference.prototype = { now: 0, inFuture: 1 };
Mscrm.PublishDialogPublishPreference.registerEnum("Mscrm.PublishDialogPublishPreference", false);
Mscrm.MarkInternalExternalSelectVersions = function() {};
Mscrm.MarkInternalExternalSelectVersions.prototype = { thisVersionOnly: 0, allVersionsAndtranslations: 1 };
Mscrm.MarkInternalExternalSelectVersions.registerEnum("Mscrm.MarkInternalExternalSelectVersions", false);
Mscrm.KnowledgeArticleReviewState = function() {};
Mscrm.KnowledgeArticleReviewState.prototype = { approved: 0, rejected: 1 };
Mscrm.KnowledgeArticleReviewState.registerEnum("Mscrm.KnowledgeArticleReviewState", false);
Mscrm.KnowledgeArticleExpiredReviewState = function() {};
Mscrm.KnowledgeArticleExpiredReviewState.prototype = { needsUpdating: 0, republish: 1, archive: 2 };
Mscrm.KnowledgeArticleExpiredReviewState.registerEnum("Mscrm.KnowledgeArticleExpiredReviewState", false);
Mscrm.KnowledgeArticleCommandActions = function() {};
Mscrm.KnowledgeArticleCommandActions.major = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = Xrm.Page.data.entity.getEntityReference(),
        $v_1 = new Xrm.Objects.EntityReference($v_0.entityType, new Microsoft.Crm.Client.Core.Framework.Guid($v_0.id));
    Mscrm.KnowledgeArticleCommandActions.$9($v_1, true)
};
Mscrm.KnowledgeArticleCommandActions.minor = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = Xrm.Page.data.entity.getEntityReference(),
        $v_1 = new Xrm.Objects.EntityReference($v_0.entityType, new Microsoft.Crm.Client.Core.Framework.Guid($v_0.id));
    Mscrm.KnowledgeArticleCommandActions.$9($v_1, false)
};
Mscrm.KnowledgeArticleCommandActions.viewContent = function() {
    var $v_0 = Xrm.Page.context.client.getClient() === "Web";
    if ($v_0) {
        var $v_1 = Mscrm.GlobalImported.CrmUri.create("/KnowledgeArticleViewer/KnowledgeArticleContentViewer.aspx");
        $v_1.get_query()["id"] = Xrm.Page.data.entity.getId();
        if (Mscrm.KnowledgeArticleCommandActions.$U()) window.open($v_1.toString());
        else
            window.open($v_1.toString(),
                "_blank",
                "height=600,width=800,top=150,left=150,menubar=no,resizable=yes,status=yes,scrollbars=yes,titlebar=yes,toolbar=no,location=yes,directories=yes")
    }
};
Mscrm.KnowledgeArticleCommandActions.approve = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = function($p1_0) {
            var $v_2 = Xrm.Page.getAttribute("review");
            if ($v_2) {
                Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 = $v_2.getValue();
                $v_2.setValue(0)
            }
            Xrm.Page.ui.process.reflow(true,
                "508cc4cd-0c56-a25d-aedb-b6d59aad8e15",
                "11230204-8518-212c-81b5-aaed12ad363e");
            Mscrm.KnowledgeArticleCommandActions.$4($p1_0)
        },
        $v_1 = function() {
            var $v_3 = Xrm.Page.getAttribute("review");
            $v_3 && $v_3.setValue(Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2);
            Mscrm.KnowledgeArticleCommandActions.$3()
        };
    Mscrm.KnowledgeArticleCommandActions.approveArticle($v_0, $v_1)
};
Mscrm.KnowledgeArticleCommandActions
    .approveArticle = function(onApproveDialogConfirmCallback, onApproveDialogCancelCallback) {
        var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
        if (!$v_1) {
            $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_APPROVE_TITLE");
            $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_APPROVE_TEXT")
        } else {
            $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_Approve_Confirmation_DialogTitle");
            $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_Approve_Confirmation_DialogText")
        }
        Mscrm.KnowledgeArticleCommandActions.$5($v_0,
            Mscrm.KnowledgeArticleCommandActions.get_$0(),
            1,
            -1,
            !Mscrm.InternalUtilities.JSTypes.isNull(onApproveDialogConfirmCallback)
            ? onApproveDialogConfirmCallback
            : Mscrm.KnowledgeArticleCommandActions.$4,
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback,
            !Mscrm.InternalUtilities.JSTypes.isNull(onApproveDialogCancelCallback)
            ? onApproveDialogCancelCallback
            : Mscrm.KnowledgeArticleCommandActions.$3)
    };
Mscrm.KnowledgeArticleCommandActions.publish = function() {
    Mscrm.KnowledgeArticlePublishCommands
        .openPublishArticleDialog([
                new Xrm.Objects.EntityReference("knowledgearticle",
                    new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()))
            ],
            false,
            null)
};
Mscrm.KnowledgeArticleCommandActions.articleOnLoad = function() {
    var $v_0 = Xrm.Page.getControl("publishingdatetime_id"),
        $v_1 = Xrm.Page.getControl("expirationdate_id"),
        $v_2 = $v_1.getAttribute(),
        $v_3 = $v_0.getAttribute(),
        $v_4 = Xrm.Page.getControl("expirationstate_id"),
        $v_5 = Xrm.Page.getControl("expirationstatus_id"),
        $v_6 = Xrm.Page.getControl("scheduledstatus_id");
    Mscrm.KnowledgeArticleCommandActions.$8(3, "publishedstatus_id");
    var $v_7 = Mscrm.InternalUtilities.DialogUtility
            .deserializeSdkEntityReferences(Xrm.Page.getAttribute("selectedrecords").getValue().toString()),
        $v_8 = Xrm.Page.getAttribute("isbulkpublishaction").getValue();
    if ($v_8.toString().toLowerCase() === "false") {
        var $v_9 = $v_7[0];
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Internal.messages.retrieve("knowledgearticle",
                $v_9.Id.toString(),
                [
                    "publishon", "expirationdate", "expirationstateid", "publishstatusid", "expirationstatusid",
                    "statecode"
                ])
            .then(function($p1_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    var $v_A = $p1_0.entity,
                        $v_B = parseInt($v_A.getValue("statecode").getValue("value").toString()),
                        $v_C = 0;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A.getValue("publishon"))) {
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setUtcValue($v_A.getValue("publishon"));
                        $v_C = 1;
                        $v_0.setVisible(true)
                    }
                    Xrm.Page.getAttribute("publish_id").setValue($v_C);
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A.getValue("expirationdate"))) {
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                            $v_2.setUtcValue($v_A.getValue("expirationdate"));
                        var $v_D = 3;
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A
                            .getValue("expirationstateid"))) $v_D = $v_A.getValue("expirationstateid");
                        switch ($v_D) {
                        case 5:
                            Xrm.Page.getAttribute("expirationstate_id").setValue(5);
                            break;
                        case 4:
                            Xrm.Page.getAttribute("expirationstate_id").setValue(4);
                            break;
                        case 3:
                            Xrm.Page.getAttribute("expirationstate_id").setValue(3);
                            break
                        }
                        Mscrm.KnowledgeArticleCommandActions.expiredstatusdefaultValue = $v_A
                            .getValue("expirationstatusid");
                        Mscrm.KnowledgeArticleCommandActions.$8($v_D, "expirationstatus_id");
                        $v_4.setVisible(true);
                        $v_5.setVisible(true)
                    }
                    if ($v_B === 2) {
                        Mscrm.KnowledgeArticleCommandActions.isScheduledArticle = true;
                        Xrm.Page.getAttribute("publish_id").setValue(1);
                        Mscrm.KnowledgeArticleCommandActions.defaultValue = $v_A.getValue("publishstatusid");
                        Xrm.Page.getAttribute("publishedstatus_id")
                            .setValue(Mscrm.KnowledgeArticleCommandActions.defaultValue);
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
                            !Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue())) {
                            $v_6.setVisible(true);
                            $v_0.setVisible(true)
                        }
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                            !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
                            $v_4.setVisible(true);
                            $v_5.setVisible(true)
                        }
                        Mscrm.KnowledgeArticleCommandActions.$8(2, "scheduledstatus_id")
                    }
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.KnowledgeArticleCommandActions.isScheduledArticle = false;
    Mscrm.KnowledgeArticleCommandActions.$W()
};
Mscrm.KnowledgeArticleCommandActions.scheduledStatusOnChange = function() {
    var $v_0 = new Mscrm.KnowledgeArticleConstants,
        $v_1 = Xrm.Page.getControl("publish_id"),
        $v_2 = $v_1.getAttribute(),
        $v_3 = Xrm.Page.getControl("publishingdatetime_id"),
        $v_4 = Xrm.Page.getControl("scheduledstatus_id"),
        $v_5 = $v_3.getAttribute();
    if (!(Mscrm.InternalUtilities.JSTypes
        .isNull($v_1) &&
        Mscrm.InternalUtilities.JSTypes.isNull($v_2))) $v_0.PublishState = $v_2.getSelectedOption().value;
    if (!$v_0.PublishState) {
        $v_3.setVisible(false);
        $v_4.setVisible(false);
        $v_5.setValue(null)
    } else {
        $v_3.setVisible(true);
        $v_4.setVisible(true);
        Mscrm.KnowledgeArticleCommandActions.$8(2, "scheduledstatus_id")
    }
};
Mscrm.KnowledgeArticleCommandActions.expirationDateOnChange = function() {
    var $v_0 = Xrm.Page.getControl("expirationstate_id"),
        $v_1 = Xrm.Page.getControl("expirationstatus_id"),
        $v_2 = $v_0.getAttribute(),
        $v_3 = Xrm.Page.getControl("publish_id"),
        $v_4 = $v_3.getAttribute();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.KnowledgeArticleCommandActions.$A())) {
        $v_0.setVisible(false);
        $v_1.setVisible(false)
    } else {
        $v_0.setVisible(true);
        $v_1.setVisible(true);
        $v_2.setValue($v_2.getOptions()[0].value);
        var $v_5 = $v_0.getAttribute();
        $v_5.fireOnChange()
    }
};
Mscrm.KnowledgeArticleCommandActions.publishDateOnChange = function() { return };
Mscrm.KnowledgeArticleCommandActions.expirationStateOnChange = function() {
    var $v_0 = new Mscrm.KnowledgeArticleConstants,
        $v_1 = Xrm.Page.getControl("expirationstate_id"),
        $v_2 = $v_1.getAttribute(),
        $v_3 = Xrm.Page.getControl("expirationstatus_id");
    if (!(Mscrm.InternalUtilities.JSTypes.isNull($v_1) && Mscrm.InternalUtilities.JSTypes.isNull($v_2))) {
        $v_0.ExpirationState = $v_2.getSelectedOption().value;
        Mscrm.KnowledgeArticleCommandActions.$8($v_2.getSelectedOption().value, "expirationstatus_id")
    }
};
Mscrm.KnowledgeArticleCommandActions.approveRelatedOnChange = function() {
    var $v_0 = Xrm.Page.getControl("copyrelated_id");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_0) &&
        Xrm.Page.getAttribute("approverelated_id").getValue()) $v_0.setVisible(true);
    else $v_0.setVisible(false)
};
Mscrm.KnowledgeArticleCommandActions.archive = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_ARCHIVE_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_ARCHIVE_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_Archive_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_Archive_Confirmation_DialogText")
    }
    Mscrm.KnowledgeArticleCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleCommandActions.get_$0(),
        5,
        -1,
        function($p1_0) {
            var $v_2 = Xrm.Page.data.entity.attributes.get("expiredreviewoptions");
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($v_2)) Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$6 = $v_2.getValue();
            Mscrm.KnowledgeArticleCommandActions.refreshForm()
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca,
        function() {
            var $v_3 = Xrm.Page.data.entity.attributes.get("expiredreviewoptions");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
                $v_3.setValue(Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$6)
        })
};
Mscrm.KnowledgeArticleCommandActions.discard = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_DISCARD_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_DISCARD_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_Discard_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_Discard_Confirmation_DialogText")
    }
    Mscrm.KnowledgeArticleCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleCommandActions.get_$0(),
        6,
        -1,
        Mscrm.KnowledgeArticleCommandActions.$4,
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca,
        Mscrm.KnowledgeArticleCommandActions.$3)
};
Mscrm.KnowledgeArticleCommandActions.revertToDraft = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_REVERTDRAFT_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_REVERTDRAFT_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_RevertToDraft_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_RevertToDraft_Confirmation_DialogText")
    }
    Mscrm.KnowledgeArticleCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleCommandActions.get_$0(),
        0,
        -1,
        Mscrm.KnowledgeArticleCommandActions.$4,
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca,
        Mscrm.KnowledgeArticleCommandActions.$3)
};
Mscrm.KnowledgeArticleCommandActions.restore = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_RESTORE_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_RESTORE_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_Restore_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_Restore_Confirmation_DialogText")
    }
    Mscrm.KnowledgeArticleCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleCommandActions.get_$0(),
        0,
        -1,
        Mscrm.KnowledgeArticleCommandActions.$4,
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca,
        Mscrm.KnowledgeArticleCommandActions.$3)
};
Mscrm.KnowledgeArticleCommandActions.update = function() {
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_UPDATE_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_UPDATE_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_Update_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_Update_Confirmation_DialogText")
    }
    Xrm.Dialog.openConfirmDialog($v_0,
        Mscrm.KnowledgeArticleCommandActions.get_$0(),
        function() {
            if (!Xrm.Page.data.getIsValid()) return;
            if (Xrm.Page.data.entity.getIsDirty()) {
                Mscrm.KnowledgeArticleCommandActions.isUpdateAction = true;
                Xrm.Page.data.save().done(function() { Mscrm.KnowledgeArticleCommandActions.refreshForm() })
                    .always(function() { Mscrm.KnowledgeArticleCommandActions.isUpdateAction = false })
            }
        },
        Mscrm.KnowledgeArticleCommandActions.$3)
};
Mscrm.KnowledgeArticleCommandActions.translateArticle = function() {
    var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = [];
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
        .getAttribute("isprimary".toLowerCase()))) $v_3.concat("isprimary".toLowerCase());
    else $v_0 = Xrm.Page.getAttribute("isprimary".toLowerCase()).getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
        .getAttribute("parentarticlecontentid".toLowerCase()))) $v_3.concat("parentarticlecontentid".toLowerCase());
    else {
        var $v_4 = Xrm.Page.getAttribute("parentarticlecontentid".toLowerCase()).getValue();
        $v_1 = $v_4[0].id
    }
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
        .getAttribute("articlePublicNumber".toLowerCase()))) $v_3.concat("articlePublicNumber".toLowerCase());
    else $v_2 = Xrm.Page.getAttribute("articlePublicNumber".toLowerCase()).getValue().toString();
    if ($v_3.length > 0) {
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Internal.messages.retrieve("knowledgearticle", Xrm.Page.data.entity.getId(), $v_3).then(function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                var $v_5 = $p1_0.entity;
                if (!($v_0 != null)) $v_0 = $v_5.getValue("isprimary".toLowerCase());
                if (Mscrm.InternalUtilities.JSTypes
                    .isNull($v_1)) $v_1 = $v_5.getValue("parentarticlecontentid".toLowerCase()).toString();
                if (Mscrm.InternalUtilities.JSTypes
                    .isNull($v_2)) $v_2 = $v_5.getValue("articlePublicNumber".toLowerCase()).toString();
                Mscrm.KnowledgeArticleCommandActions.$O($v_0 ? Xrm.Page.data.entity.getId() : $v_1, $v_2)
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.KnowledgeArticleCommandActions.$O($v_0 ? Xrm.Page.data.entity.getId() : $v_1, $v_2)
};
Mscrm.KnowledgeArticleCommandActions.translateKnowledgeArticle = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = Xrm.Page.getAttribute("knowledgeArticleId"),
        $v_1 = $v_0.getValue(),
        $v_2 = new Xrm.Objects.EntityReference("knowledgearticle", $v_1),
        $v_3 = Xrm.Page.getAttribute("translateLanguageLocale_id");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue())) {
        var $v_6 = new Xrm.AlertDialogStrings, $v_7 = Xrm.Page.context.client.getClient() === "Mobile";
        if (!$v_7) $v_6.text = Xrm.Internal.getResourceString("LOCID_KNOWART_TRANSLATE_LANGUAGE");
        else $v_6.text = Xrm.Internal.getResourceString("KnowledgeArticle_TranslateDialog_TranslateLanguageMessage");
        var $v_8 = new Xrm.DialogOptions;
        $v_8.width = 600;
        $v_8.height = 150;
        Xrm.Dialog.openAlertDialog($v_6, $v_8, null);
        return
    }
    var $v_4 = $v_3.getValue(), $v_5 = $v_4[0].id;
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Xrm.Internal.messages.retrieve("languagelocale", $v_5, ["languagelocaleid"]).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            var $v_9 = $p1_0.entity,
                $v_A = $v_9.getValue("languagelocaleid"),
                $v_B = new Xrm.Objects.EntityReference("languagelocale", $v_A),
                $v_C = 0,
                $v_D = Xrm.Page.getAttribute("versionType_id");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_D
                .getSelectedOption())) $v_C = $v_D.getSelectedOption().value;
            var $v_E = $v_C === 0;
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            Xrm.Internal.messages.createKnowledgeArticleTranslation($v_2, $v_B, $v_E).then(function($p2_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    Xrm.Page.ui.close();
                    var $v_F = $p2_0;
                    Xrm.Utility.openEntityForm($v_F.createKnowledgeArticleTranslation.LogicalName,
                        $v_F.createKnowledgeArticleTranslation.get_identifier())
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.KnowledgeArticleCommandActions.relateArticle = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 500;
    $v_0.width = 400;
    var $v_1 = {};
    $v_1["knowledgeArticleId"] = Xrm.Page.data.entity.getId();
    $v_1["lastButtonClicked"] = "ok_id";
    $v_1["associationType"] = "knowledgearticle";
    Xrm.Dialog.openDialog("ArticleToArticleAssociation", $v_0, $v_1, null, null)
};
Mscrm.KnowledgeArticleCommandActions.relateProduct = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 500;
    $v_0.width = 400;
    var $v_1 = {};
    $v_1["knowledgeArticleId"] = Xrm.Page.data.entity.getId();
    $v_1["lastButtonClicked"] = "ok_id";
    $v_1["associationType"] = "product";
    Xrm.Dialog.openDialog("ArticleToProductAssociation", $v_0, $v_1, null, null)
};
Mscrm.KnowledgeArticleCommandActions.relateCategory = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 500;
    $v_0.width = 400;
    var $v_1 = {};
    $v_1["knowledgeArticleId"] = Xrm.Page.data.entity.getId();
    $v_1["lastButtonClicked"] = "ok_id";
    $v_1["associationType"] = "category";
    Xrm.Dialog.openDialog("ArticleToCategoryAssociation", $v_0, $v_1, null, null)
};
Mscrm.KnowledgeArticleCommandActions.associate = function() {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    var $v_0 = Xrm.Page.getAttribute("knowledgeArticleId"),
        $v_1 = Xrm.Page.getAttribute("associationType"),
        $v_2 = $v_0.getValue(),
        $v_3 = Xrm.Page.getAttribute("associateEntity_id"),
        $v_4 = $v_3.getValue(),
        $v_5 = new Xrm.Objects.EntityReference("knowledgearticle", $v_2),
        $v_6 = $v_1.getValue();
    Mscrm.KnowledgeArticleCommandActions.$Q($v_6, $v_5, $v_4)
};
Mscrm.KnowledgeArticleCommandActions.getLatestVersion = function() {
    var $v_0 = Xrm.Page.getAttribute("knowledgeArticleId"),
        $v_1 = $v_0.getValue(),
        $v_2 = Xrm.Page.getAttribute("translateLanguageLocale_id"),
        $v_3 = Xrm.Page.context.client.getClient() === "Mobile";
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        var $v_D = new Xrm.AlertDialogStrings;
        if (!$v_3) $v_D.text = Xrm.Internal.getResourceString("LOCID_KNOWART_TRANSLATE_LANGUAGE");
        else $v_D.text = Xrm.Internal.getResourceString("KnowledgeArticle_TranslateDialog_TranslateLanguageMessage");
        var $v_E = new Xrm.DialogOptions;
        $v_E.width = 600;
        $v_E.height = 150;
        Xrm.Dialog.openAlertDialog($v_D, $v_E, null);
        return
    }
    var $v_4 = $v_2.getValue(),
        $v_5 = $v_4[0].id,
        $v_6 = Xrm.Page.getControl("lbl_latestVersion"),
        $v_7 = Xrm.Page.getControl("lbl_majorVersion"),
        $v_8 = Xrm.Page.getControl("lbl_minorVersion"),
        $v_9 = Xrm.Page.getControl("versionType_id"),
        $v_A = Xrm.Page.getAttribute("articlePublicNumber").getValue().toString(),
        $v_B =
            "<fetch version='1.0' mapping='logical' distinct='false' count='1'><entity name='knowledgearticle'><attribute name='majorversionnumber' /><attribute name='minorversionnumber' /><filter type='and'><condition attribute='languagelocaleid' operator='eq' value='" + $v_5 + "' /><condition attribute='articlepublicnumber' operator='eq' value='" + $v_A + "' /><condition attribute='isrootarticle' operator='eq' value='0' /></filter><order attribute='majorversionnumber' descending='true' /><order attribute='minorversionnumber' descending='true' /></entity></fetch>",
        $v_C = null;
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Xrm.Internal.messages.retrieveMultiple($v_B).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            if ($p1_0) {
                $v_C = $p1_0.entityCollection;
                if ($v_C.get_count()) {
                    if (!$v_3) {
                        $v_6.setLabel(Xrm.Internal.getResourceString("LOCID_KNOWART_TRANSLATE_LATEST"));
                        $v_7.setLabel(Xrm.Internal.getResourceString("LOCID_KNOWART_TRANSLATE_MAJOR") +
                            $v_C.get_entities()[0].getValue("majorversionnumber").toString());
                        $v_8.setLabel(Xrm.Internal.getResourceString("LOCID_KNOWART_TRANSLATE_MINOR") +
                            $v_C.get_entities()[0].getValue("minorversionnumber").toString())
                    } else {
                        $v_6.setLabel(Xrm.Internal.getResourceString("KnowledgeArticle_TranslateDialog_LatestVersion"));
                        $v_7.setLabel(Xrm.Internal.getResourceString("KnowledgeArticle_TranslateDialog_MajorVersion") +
                            $v_C.get_entities()[0].getValue("majorversionnumber").toString());
                        $v_8.setLabel(Xrm.Internal.getResourceString("KnowledgeArticle_TranslateDialog_MinorVersion") +
                            $v_C.get_entities()[0].getValue("minorversionnumber").toString())
                    }
                    $v_9.setDisabled(false);
                    $v_6.setVisible(true);
                    $v_7.setVisible(true);
                    $v_8.setVisible(true)
                } else {
                    if (!$v_3) $v_6.setLabel(Xrm.Internal.getResourceString("LOCID_KNOWART_TRANSLATE_NOTRANS"));
                    else
                        $v_6.setLabel(Xrm.Internal
                            .getResourceString("KnowledgeArticle_TranslateDialog_NoTranslations"));
                    $v_9.setDisabled(true);
                    $v_6.setVisible(true);
                    $v_7.setLabel("");
                    $v_7.setVisible(false);
                    $v_8.setLabel("");
                    $v_8.setVisible(false)
                }
            }
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.KnowledgeArticleCommandActions.refreshForm = function() {
    Xrm.Page.data.refresh(true).done(function() { Xrm.Page.ui.refreshRibbon() }, function() {})
};
Mscrm.KnowledgeArticleCommandActions.markInternalOpenDialog = function() {
    var $v_0 = {};
    $v_0["knowledgeArticleId"] = Xrm.Page.data.entity.getId();
    $v_0["lastButtonClicked"] = "ok_id";
    $v_0["articlePublicNumber"] = Xrm.Page.data.entity.attributes.get("articlePublicNumber".toLowerCase()).getValue();
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 500;
    $v_1.width = 400;
    Xrm.Dialog.openDialog("MarkInternal", $v_1, $v_0, Mscrm.KnowledgeArticleCommandActions.markInternalCallback, null)
};
Mscrm.KnowledgeArticleCommandActions.markExternalOpenDialog = function() {
    var $v_0 = {};
    $v_0["knowledgeArticleId"] = Xrm.Page.data.entity.getId();
    $v_0["lastButtonClicked"] = "ok_id";
    $v_0["articlePublicNumber"] = Xrm.Page.data.entity.attributes.get("articlePublicNumber".toLowerCase()).getValue();
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 500;
    $v_1.width = 400;
    Xrm.Dialog.openDialog("MarkExternal", $v_1, $v_0, Mscrm.KnowledgeArticleCommandActions.markExternalCallback, null)
};
Mscrm.KnowledgeArticleCommandActions.markInternalCallback = function(dialogParams, callbackParams) {
    if (dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = true, $v_1 = dialogParams["selectversions_id"];
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            $v_1 === 0 &&
            Mscrm.KnowledgeArticleCommandActions.confirmCallBack($v_0, dialogParams);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            $v_1 === 1 &&
            Mscrm.KnowledgeArticleCommandActions.confirmCascadingCallBack($v_0, dialogParams)
    }
};
Mscrm.KnowledgeArticleCommandActions.markExternalCallback = function(dialogParams, callbackParams) {
    if (dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = false, $v_1 = dialogParams["selectversions_id"];
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            $v_1 === 0 &&
            Mscrm.KnowledgeArticleCommandActions.confirmCallBack($v_0, dialogParams);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            $v_1 === 1 &&
            Mscrm.KnowledgeArticleCommandActions.confirmCascadingCallBack($v_0, dialogParams)
    }
};
Mscrm.KnowledgeArticleCommandActions.markInternalSubmitClick = function() {
    Mscrm.KnowledgeArticlePublishCommands.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.KnowledgeArticleCommandActions.markExternalSubmitClick = function() {
    Mscrm.KnowledgeArticlePublishCommands.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.KnowledgeArticleCommandActions.confirmCallBack = function(isInternal, dialogParams) {
    var $v_0 = dialogParams["knowledgeArticleId"];
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    var $v_1 = Mscrm.KnowledgeArticleCommandActions.getKnowledgeArticleRecord($v_0, isInternal);
    Xrm.Internal.messages.update($v_1).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Mscrm.KnowledgeArticleCommandActions.refreshForm()
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.KnowledgeArticleCommandActions.confirmCascadingCallBack = function(isInternal, dialogParams) {
    var $v_0 = dialogParams["articlePublicNumber"].toString(),
        $v_1 = String
            .format("<fetch version='1.0' mapping='logical' distinct='false'><entity name='knowledgearticle'><attribute name='isinternal' /><attribute name='knowledgearticleid' /><attribute name='rootarticleid' /><filter type='and'><condition attribute='articlepublicnumber' operator='eq' value='{0}' /></filter></entity></fetch>", $v_0),
        $v_2 = null;
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Xrm.Internal.messages.retrieveMultiple($v_1).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            if ($p1_0) {
                $v_2 = $p1_0.entityCollection;
                var $v_3 = $v_2.get_count();
                if ($v_3)
                    for (var $v_4 = 0; $v_4 < $v_3; $v_4++) {
                        var $v_5 = $v_2.get_entities()[$v_4].getValue("knowledgearticleid"),
                            $v_6 = $v_2.get_entities()[$v_4].getValue("rootarticleid"),
                            $v_7 = Mscrm.KnowledgeArticleCommandActions
                                .getKnowledgeArticleRecordForCascade($v_5, isInternal, $v_6);
                        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                        Xrm.Internal.messages.update($v_7).then(function($p2_0) {
                                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                $v_4 === $v_3 && Mscrm.KnowledgeArticleCommandActions.refreshForm()
                            },
                            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
                    }
            }
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.KnowledgeArticleCommandActions.getKnowledgeArticleRecord = function(articleId, isInternal) {
    var $v_0 = new Xrm.Objects.EntityReference("knowledgearticle", articleId),
        $v_1 = {},
        $v_2 = {},
        $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_0,
                $v_1,
                $v_2,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_1["isinternal"] = isInternal;
    $v_2["isinternal"] = 0;
    $v_3.get_changedFieldNames().addRange(["isinternal"]);
    return $v_3
};
Mscrm.KnowledgeArticleCommandActions
    .getKnowledgeArticleRecordForCascade = function(articleId, isInternal, rootarticleid) {
        var $v_0 = new Xrm.Objects.EntityReference("knowledgearticle", articleId),
            $v_1 = {},
            $v_2 = {},
            $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_0,
                    $v_1,
                    $v_2,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_1["isinternal"] = isInternal;
        $v_1["rootarticleid"] = rootarticleid;
        $v_2["isinternal"] = 0;
        $v_2["rootarticleid"] = 6;
        $v_3.get_changedFieldNames().addRange(["isinternal"]);
        $v_3.get_changedFieldNames().addRange(["rootarticleid"]);
        return $v_3
    };
Mscrm.KnowledgeArticleCommandActions.$U = function() {
    return window.navigator.userAgent.indexOf("Chrome") !== -1 ? true : false
};
Mscrm.KnowledgeArticleCommandActions.$A = function() {
    var $v_0 = Xrm.Page.getControl("expirationdate_id"), $v_1 = $v_0.getAttribute(), $v_2 = $v_1.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        $v_2 = new Date($v_2.getFullYear(), $v_2.getMonth(), $v_2.getDate());
    return $v_2
};
Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        var $v_0 = Xrm.Page.data.entity.getIsDirty();
        if ($v_0)
            if (Mscrm.KnowledgeArticleMainSystemLibraryWebResource.isScheduledOrPublishedState()) {
                var $v_1 = new Xrm.AlertDialogStrings, $v_2 = Xrm.Page.context.client.getClient() === "Mobile";
                if (!$v_2) $v_1.text = Xrm.Internal.getResourceString("LOCID_KNOWART_SAVEPUBLISHED_TEXT");
                else
                    $v_1.text = Xrm.Internal
                        .getResourceString("KnowledgeArticle_Save_PublishedStatus_Notification_DialogText");
                var $v_3 = new Xrm.DialogOptions;
                $v_3.width = 600;
                $v_3.height = 150;
                Xrm.Dialog.openAlertDialog($v_1, $v_3, null);
                return false
            } else Xrm.Page.data.save()
    }
    return true
};
Mscrm.KnowledgeArticleCommandActions.$9 = function($p0, $p1) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("majorversionnumber").getValue(),
        $v_1 = Xrm.Page.data.entity.attributes.get("minorversionnumber").getValue(),
        $v_2 = new Array(0),
        $v_3 = "";
    if (Xrm.Page.data.entity.attributes
        .get("articlepublicnumber")) $v_3 = Xrm.Page.data.entity.attributes.get("articlepublicnumber").getValue();
    else $v_2[$v_2.length] = "articlepublicnumber";
    var $v_4 = null;
    if (Xrm.Page.data.entity.attributes
        .get("languagelocaleid")) $v_4 = Xrm.Page.data.entity.attributes.get("languagelocaleid").getValue()[0];
    else $v_2[$v_2.length] = "languagelocaleid";
    if ($v_2.length > 0) {
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Utility.retrieveEntityRecord(new Xrm.Objects.EntityReference($p0.LogicalName, $p0.Id),
            $v_2,
            function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                if ($p1_0.hasField("articlepublicnumber")) $v_3 = $p1_0.getValue("articlepublicnumber");
                if ($p1_0.hasField("languagelocaleid")) $v_4 = $p1_0.getValue("languagelocaleid");
                Mscrm.KnowledgeArticleCommandActions.$F($p0, $v_4, $v_3, $v_0, $v_1, $p1)
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.KnowledgeArticleCommandActions.$F($p0, $v_4, $v_3, $v_0, $v_1, $p1)
};
Mscrm.KnowledgeArticleCommandActions.$F = function($p0, $p1, $p2, $p3, $p4, $p5) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1) && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p2)) {
        var $v_0 = "";
        $v_0 = $p1.id;
        var $v_1 = 0,
            $v_2 = 0,
            $v_3 =
                "<fetch version='1.0' mapping='logical' distinct='false' count='1'><entity name='knowledgearticle'><attribute name='majorversionnumber' /><attribute name='minorversionnumber' /><filter type='and'><condition attribute='articlepublicnumber' operator='eq' value='" + $p2 + "' /><condition attribute='languagelocaleid' operator='eq' value='" + $v_0 + "' /></filter><order attribute='majorversionnumber' descending='true' /><order attribute='minorversionnumber' descending='true' /></entity></fetch>",
            $v_4 = null;
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Internal.messages.retrieveMultiple($v_3).then(function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                if ($p1_0) {
                    $v_4 = $p1_0.entityCollection;
                    if ($v_4.get_count()) {
                        $v_1 = $v_4.get_entities()[0].getValue("majorversionnumber") + 1;
                        $v_2 = $v_4.get_entities()[0].getValue("minorversionnumber") + 1
                    }
                    var $v_5 = new Xrm.ConfirmDialogStrings, $v_6 = Xrm.Page.context.client.getClient() === "Mobile";
                    if (!$v_6)
                        if ($p5) {
                            $v_5.title = Xrm.Internal.getResourceString("LOCID_KNOWART_CREATEMAJOR_TITLE");
                            $v_5.text = String.format(Xrm.Internal.getResourceString("LOCID_KNOWART_CREATEMAJOR_TEXT"),
                                $v_1,
                                $p3,
                                $p4)
                        } else {
                            $v_5.title = Xrm.Internal.getResourceString("LOCID_KNOWART_CREATEMINOR_TITLE");
                            $v_5.text = String.format(Xrm.Internal.getResourceString("LOCID_KNOWART_CREATEMINOR_TEXT"),
                                $v_1 - 1,
                                $v_2,
                                $p3,
                                $p4)
                        }
                    else if ($p5) {
                        $v_5.title = Xrm.Internal
                            .getResourceString("KnowledgeArticle_CreateMajor_Confirmation_DialogTitle");
                        $v_5.text = String.format(Xrm.Internal
                            .getResourceString("KnowledgeArticle_CreateMajor_Confirmation_DialogText"),
                            $v_1,
                            $p3,
                            $p4)
                    } else {
                        $v_5.title = Xrm.Internal
                            .getResourceString("KnowledgeArticle_CreateMinor_Confirmation_DialogTitle");
                        $v_5.text = String.format(Xrm.Internal
                            .getResourceString("KnowledgeArticle_CreateMinor_Confirmation_DialogText"),
                            $v_1 - 1,
                            $v_2,
                            $p3,
                            $p4)
                    }
                    Xrm.Dialog.openConfirmDialog($v_5,
                        Mscrm.KnowledgeArticleCommandActions.get_$0(),
                        function() {
                            var $v_7 = Xrm.Page.data.entity.getEntityReference();
                            $p0 = new Xrm.Objects
                                .EntityReference($v_7
                                    .entityType,
                                    new Microsoft.Crm.Client.Core.Framework.Guid($v_7.id));
                            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                            Xrm.Internal.messages.createKnowledgeArticleVersion($p0, $p5).then(function($p3_0) {
                                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                    var $v_8 = $p3_0;
                                    Xrm.Utility.openEntityForm($v_8.createKnowledgeArticleVersion.LogicalName,
                                        $v_8.createKnowledgeArticleVersion.get_identifier())
                                },
                                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
                        },
                        Mscrm.KnowledgeArticleCommandActions.$3)
                }
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    }
};
Mscrm.KnowledgeArticleCommandActions.get_$0 = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 300;
    $v_0.width = 450;
    return $v_0
};
Mscrm.KnowledgeArticleCommandActions.$4 = function($p0) { Mscrm.KnowledgeArticleCommandActions.refreshForm() };
Mscrm.KnowledgeArticleCommandActions.$3 = function() {};
Mscrm.KnowledgeArticleCommandActions.$5 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = function() {
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Internal.messages.setState("knowledgearticle", Xrm.Page.data.entity.getId(), $p2, $p3)
            .then(function($p2_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    $p4($p2_0)
                },
                function($p2_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    $p5($p2_0)
                })
    };
    Xrm.Dialog.openConfirmDialog($p0, $p1, $v_0, $p6)
};
Mscrm.KnowledgeArticleCommandActions.$8 = function($p0, $p1) {
    if (Xrm.Utility.areStateTransitionsEnforced("knowledgearticle")) {
        var $v_0 = Xrm.Page.getAttribute("knowledgeArticleId"), $v_1 = $v_0.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) return;
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Internal.messages.retrieve("knowledgearticle", $v_1, ["statuscode"]).then(function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                var $v_2 = $p1_0.entity, $v_3 = parseInt($v_2.getValue("statuscode").getValue("value").toString());
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                Xrm.Internal.getAllowedStatusTransitions("knowledgearticle", $v_3).then(function($p2_0) {
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Mscrm.KnowledgeArticleCommandActions.$L("knowledgearticle", $p0, $p1, $p2_0)
                    },
                    function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() })
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.KnowledgeArticleCommandActions.$L("knowledgearticle", $p0, $p1, null)
};
Mscrm.KnowledgeArticleCommandActions.$L = function($p0, $p1, $p2, $p3) {
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Xrm.Internal.messages.retrieveDefaultStatusForState("knowledgearticle", $p1).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            var $v_0 = -1;
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) $v_0 = $p1_0.status;
            if ($p2 === "expirationstatus_id") $v_0 = Mscrm.KnowledgeArticleCommandActions.expiredstatusdefaultValue;
            else if (Mscrm.KnowledgeArticleCommandActions
                .isScheduledArticle) $v_0 = Mscrm.KnowledgeArticleCommandActions.defaultValue;
            var $v_1 = Xrm.Page.getControl($p2),
                $v_2 = $v_1.getAttribute(),
                $v_3 = Xrm.Page.getControl("defaultexpirationstatus_id"),
                $v_4 = $v_3.getAttribute();
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                Xrm.Internal.getStatusOptionsFromStateCode($p0, $p1).then(function($p2_0) {
                        for (var $v_5 = $v_2.getOptions(),
                            $v_6 = new Array(0),
                            $$arr_D = $v_5,
                            $$len_E = $$arr_D.length,
                            $$idx_F = 0;
                            $$idx_F < $$len_E;
                            ++$$idx_F) {
                            var $v_7 = $$arr_D[$$idx_F];
                            if (Array.contains($p2_0, $v_7.value) &&
                            (Mscrm.InternalUtilities.JSTypes
                                .isNull($p3) ||
                                Array.contains($p3, $v_7.value))) $v_6[$v_6.length] = $v_7.value;
                            else $v_1.removeOption($v_7.value)
                        }
                        if ($p2 === "expirationstatus_id") {
                            $v_6 = new Array(0);
                            for (var $v_8 = $v_4.getOptions(), $$arr_I = $v_8, $$len_J = $$arr_I.length, $$idx_K = 0;
                                $$idx_K < $$len_J;
                                ++$$idx_K) {
                                var $v_9 = $$arr_I[$$idx_K];
                                if (Array.contains($p2_0, $v_9.value) &&
                                (Mscrm.InternalUtilities.JSTypes
                                    .isNull($p3) ||
                                    Array.contains($p3, $v_9.value))) $v_6[$v_6.length] = $v_9.value
                            }
                            $v_1.clearOptions();
                            for (var $$arr_M = $v_6, $$len_N = $$arr_M.length, $$idx_O = 0;
                                $$idx_O < $$len_N;
                                ++$$idx_O)
                                for (var $v_A = $$arr_M[$$idx_O], $$arr_Q = $v_8, $$len_R = $$arr_Q.length, $$idx_S = 0;
                                    $$idx_S < $$len_R;
                                    ++$$idx_S) {
                                    var $v_B = $$arr_Q[$$idx_S];
                                    if ($v_A === $v_B.value) {
                                        $v_1.addOption($v_B);
                                        break
                                    }
                                }
                        }
                        $v_6 = Mscrm.InternalUtilities.JSTypes.isNull($p3) ? $p2_0 : $v_6;
                        $v_2.setValue($v_0 !== -1 && Array.contains($v_6, $v_0) ? $v_0 : $v_6[0])
                    },
                    function() {})
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.KnowledgeArticleCommandActions.$W = function() {
    var $v_0 = Xrm.Page.getAttribute("isprimary"),
        $v_1 = Xrm.Page.getAttribute("isbulkpublishaction"),
        $v_2 = $v_0.getValue(),
        $v_3 = Xrm.Page.getControl("copyrelated_id"),
        $v_4 = Xrm.Page.getControl("copyrelatedcategories_id"),
        $v_5 = Xrm.Page.getControl("approverelated_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_5) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4))
        if ($v_1.getValue().toString() === "true") {
            $v_3.setVisible(true);
            $v_4.setVisible(true);
            $v_5.setVisible(true)
        } else if ($v_2) {
            $v_3.setVisible(false);
            $v_4.setVisible(false);
            $v_5.setVisible(true)
        } else {
            $v_3.setVisible(true);
            $v_4.setVisible(true);
            $v_5.setVisible(false)
        }
};
Mscrm.KnowledgeArticleCommandActions.$Q = function($p0, $p1, $p2) {
    var $v_0 = null, $v_1 = null, $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p2))
        if ($p0 === "knowledgearticle") {
            $v_0 = new Xrm.Objects.EntityReference("connectionrole",
                new Microsoft.Crm.Client.Core.Framework.Guid("5A18DFC8-0B8B-40C7-9381-CCE1C485822D"));
            $v_1 = new Xrm.Objects.EntityReference("connectionrole",
                new Microsoft.Crm.Client.Core.Framework.Guid("CFFE4A59-CE11-4FCA-B132-5985D3917D26"));
            $v_2 = new Xrm.Objects.EntityReference("knowledgearticle",
                new Microsoft.Crm.Client.Core.Framework.Guid($p2[0].id));
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            Xrm.Internal.messages.retrieve("knowledgearticle", $p1.Id.toString(), ["rootarticleid"])
                .then(function($p1_0) {
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        var $v_3 = $p1_0.entity, $v_4 = $v_3.getValue("rootarticleid");
                        Mscrm.KnowledgeArticleCommandActions.$E($v_4, $v_2, $v_0, $v_1, 9953, 9953)
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        } else if ($p0 === "category") {
            var $v_5 = Xrm.Page.getAttribute("knowledgeArticleId"), $v_6 = $v_5.getValue();
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            Xrm.Internal.messages.associateKnowledgeArticle($p2[0].id,
                9959,
                "knowledgearticle_category",
                $v_6.toString()).then(function($p1_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    Xrm.Page.ui.close();
                    Mscrm.KnowledgeArticleCommandActions.refreshForm()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        } else {
            $v_0 = new Xrm.Objects.EntityReference("connectionrole",
                new Microsoft.Crm.Client.Core.Framework.Guid("81BB2655-F19B-42B2-9C4B-D45B84C3F61C"));
            $v_1 = new Xrm.Objects.EntityReference("connectionrole",
                new Microsoft.Crm.Client.Core.Framework.Guid("131F5D06-9F36-4B59-B8B7-A1F7D6C5C5EF"));
            $v_2 = new Xrm.Objects.EntityReference("product", new Microsoft.Crm.Client.Core.Framework.Guid($p2[0].id));
            Mscrm.KnowledgeArticleCommandActions.$E($p1, $v_2, $v_0, $v_1, 9953, 1024)
        }
    else {
        var $v_7 = new Xrm.AlertDialogStrings;
        if ($p0 === "knowledgearticle")
            $v_7.text = Xrm.Internal.getResourceString("KnowledgeArticle_AssociateArticleArticle_DialogText");
        else if ($p0 === "category")
            $v_7.text = Xrm.Internal.getResourceString("KnowledgeArticle_AssociateArticleCategory_DialogText");
        else $v_7.text = Xrm.Internal.getResourceString("KnowledgeArticle_AssociateArticleProduct_DialogText");
        var $v_8 = new Xrm.DialogOptions;
        $v_8.width = 600;
        $v_8.height = 150;
        Xrm.Dialog.openAlertDialog($v_7, $v_8, null)
    }
};
Mscrm.KnowledgeArticleCommandActions.$E = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(6), $v_3 = null;
    $v_3 = "record1id";
    $v_2[0] = $v_3;
    $v_1[$v_3] = 6;
    $v_0[$v_3] = $p0;
    $v_3 = "record2id";
    $v_2[1] = $v_3;
    $v_1[$v_3] = 6;
    $v_0[$v_3] = $p1;
    $v_3 = "record1roleid";
    $v_2[2] = $v_3;
    $v_1[$v_3] = 6;
    $v_0[$v_3] = $p2;
    $v_3 = "record2roleid";
    $v_2[3] = $v_3;
    $v_1[$v_3] = 6;
    $v_0[$v_3] = $p3;
    $v_3 = "record1objecttypecode";
    $v_2[4] = $v_3;
    $v_1[$v_3] = 5;
    $v_0[$v_3] = $p4;
    $v_3 = "record2objecttypecode";
    $v_2[5] = $v_3;
    $v_1[$v_3] = 5;
    $v_0[$v_3] = $p5;
    var $v_4 = new Xrm.Objects.EntityReference("connection", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_4,
                $v_0,
                $v_1,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_5.get_changedFieldNames().addRange($v_2);
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Xrm.Internal.messages.create($v_5).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Page.ui.close();
            Mscrm.KnowledgeArticleCommandActions.refreshForm()
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.KnowledgeArticleCommandActions.$O = function($p0, $p1) {
    var $v_0 = {};
    $v_0["lastButtonClicked"] = "ok_id";
    $v_0["knowledgeArticleId"] = $p0;
    $v_0["articlePublicNumber"] = $p1;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 500;
    $v_1.width = 400;
    Xrm.Dialog.openDialog("TranslateKnowledgeArticle", $v_1, $v_0, null, null)
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource = function() {};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource
    .get_expirationDate = function() {
        return !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("expirationdate"))
            ? Xrm.Page.ui.controls.get("expirationdate").getAttribute()
            : null
    };
Mscrm.KnowledgeArticleMainSystemLibraryWebResource
    .get_publishDate = function() {
        return !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("publishon"))
            ? Xrm.Page.ui.controls.get("publishon").getAttribute()
            : null
    };
Mscrm.KnowledgeArticleMainSystemLibraryWebResource
    .get_reviewOptionSetPreviousSelection = function() { return Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 };
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.set_reviewOptionSetPreviousSelection = function(value) {
    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 = value;
    return value
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource
    .get_expiredReviewOptionSetPreviousSelection = function() {
        return Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$6
    };
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.set_expiredReviewOptionSetPreviousSelection = function(value) {
    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$6 = value;
    return value
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.form_onload = function() {
    var $v_0 = Xrm.Internal.getResourceString("LOCID_KNOWART_NOTIFY_READONLY"),
        $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !$v_1 &&
        Xrm.Page.ui.setFormNotification($v_0, "WARNING", "ArticleReadOnlyNotification");
    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.isScheduledOrPublishedState() &&
        Xrm.Page.data.blockAutoSave(true);
    var $v_2 = Xrm.Page.data.entity.getId();
    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$V($v_2);
    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$P();
    var $v_3 = Xrm.Page.getAttribute("primaryauthorid"), $v_4 = Xrm.Page.getAttribute("ownerid");
    $v_2 === Mscrm.KnowledgeArticleMainSystemLibraryWebResource.emptyGuid &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) &&
        $v_3.setValue($v_4.getValue());
    if ($v_2 !== Mscrm.KnowledgeArticleMainSystemLibraryWebResource.emptyGuid) {
        Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$R();
        Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$S()
    } else Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$T();
    var $v_5 = Xrm.Page.data.entity.attributes.get("review");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5))
        Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 = $v_5.getValue()
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.form_onsave = function(context) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && ($v_0.getValue() === 2 || $v_0.getValue() === 3))
        if (!Mscrm.KnowledgeArticleCommandActions.isUpdateAction) {
            var $v_1 = context.getEventArgs(), $v_2 = $v_1.getSaveMode();
            if ($v_2 === -1 || $v_2 === 1) {
                var $v_3 = new Xrm.AlertDialogStrings, $v_4 = Xrm.Page.context.client.getClient() === "Mobile";
                if (!$v_4) $v_3.text = Xrm.Internal.getResourceString("LOCID_KNOWART_PUBLISH_MSG");
                else $v_3.text = Xrm.Internal.getResourceString("KnowledgeArticle_PublishDialog_SaveBlockMessage");
                Xrm.Dialog.openAlertDialog($v_3, null, null)
            }
            $v_1.preventDefault();
            return
        }
    if (!Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$M() ||
        !Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$N()) {
        var $v_5 = context.getEventArgs();
        $v_5.preventDefault();
        return
    }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.review_onchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("review");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if ($v_0.getValue() === 1) {
            var $v_1 = Xrm.Page.getAttribute("primaryauthorid"), $v_2 = null;
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                var $v_5 = $v_1.getValue();
                if (!Mscrm.InternalUtilities.JSTypes
                    .isNull($v_5) &&
                    $v_5.length > 0) $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid($v_5[0].id)
            }
            var $v_3 = new Xrm.DialogOptions;
            $v_3.height = 500;
            $v_3.width = 400;
            var $v_4 = {};
            $v_4["knowledgeArticleId"] = Xrm.Page.data.entity.getId();
            $v_4["lastButtonClicked"] = "ok_id";
            $v_4["primaryauthorid"] = $v_2;
            Xrm.Dialog.openDialog("RejectKnowledgeArticle",
                $v_3,
                $v_4,
                Mscrm.KnowledgeArticleMainSystemLibraryWebResource.CloseRejectedDialog,
                null)
        } else if ($v_0.getValue() === 0) {
            var $v_6 = function() {
                    var $v_8 = $v_0;
                    $v_8.setValue(Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2)
                },
                $v_7 = function() {
                    var $v_9 = $v_0;
                    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 = $v_9.getValue();
                    Xrm.Page.data.refresh(true).done(function() {
                        Xrm.Page.ui.process.reflow(true,
                            "508cc4cd-0c56-a25d-aedb-b6d59aad8e15",
                            "11230204-8518-212c-81b5-aaed12ad363e")
                    })
                };
            Mscrm.KnowledgeArticleCommandActions.approveArticle($v_7, $v_6)
        } else Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 = $v_0.getValue()
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.expirationdate_onchange = function() {
    if (!Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$M()) {
        var $v_0 = new Xrm.AlertDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
        if (!$v_1) $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_EXPIREON_ISVALID");
        else $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_ExpireOn_DialogText");
        var $v_2 = new Xrm.DialogOptions;
        $v_2.width = 600;
        $v_2.height = 150;
        Xrm.Dialog.openAlertDialog($v_0, $v_2, null);
        var $v_3 = Xrm.Page.getControl("expirationdate"), $v_4 = $v_3.getAttribute();
        $v_4.setValue(null)
    }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.publishdate_onchange = function() {
    if (!Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$N()) {
        var $v_0 = new Xrm.AlertDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
        if (!$v_1) $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_PUBLISH_DATETIME");
        else $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_PublishDialog_PublishingDateTimeMessage");
        var $v_2 = new Xrm.DialogOptions;
        $v_2.width = 600;
        $v_2.height = 150;
        Xrm.Dialog.openAlertDialog($v_0, $v_2, null);
        var $v_3 = Xrm.Page.getControl("publishon"), $v_4 = $v_3.getAttribute();
        $v_4.setValue(null)
    }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.expiredreviewoptions_onchange = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity)) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("expiredreviewoptions");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
                if ($v_0.getValue() === 0) {
                    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$6 = $v_0.getValue();
                    Xrm.Page.ui.process.reflow(true,
                        "e33cdd31-c568-4a14-8dcb-60d790cc85cb",
                        "5c2b5c67-6ab5-4653-890b-b700bb5d5813")
                } else if ($v_0.getValue() === 1) {
                    Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$6 = $v_0.getValue();
                    Xrm.Page.ui.process.reflow(true,
                        "e33cdd31-c568-4a14-8dcb-60d790cc85cb",
                        "397596bd-de78-5384-9b5e-4e791a4eed61")
                } else if ($v_0.getValue() === 2) {
                    Xrm.Page.ui.process.reflow(true, "e33cdd31-c568-4a14-8dcb-60d790cc85cb", "");
                    Mscrm.KnowledgeArticleCommandActions.archive()
                }
            } else {
                Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$6 = $v_0.getValue();
                Xrm.Page.ui.process.reflow(true, "e33cdd31-c568-4a14-8dcb-60d790cc85cb", "")
            }
    }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.ReviewRejected = function() {
    var $v_0 = Xrm.Page.getAttribute("reasonforrejection").getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        var $v_2 = Xrm.Page.getAttribute("knowledgeArticleId"),
            $v_3 = $v_2.getValue(),
            $v_4 = new Xrm.Objects.EntityReference("knowledgearticle",
                new Microsoft.Crm.Client.Core.Framework.Guid($v_3)),
            $v_5 = {},
            $v_6 = Xrm.Page.getAttribute("primaryauthorid");
        if ($v_6.getValue()) {
            var $v_C = new Xrm.Objects.EntityReference("systemuser", $v_6.getValue());
            $v_5["ownerid"] = $v_C;
            var $v_D = {};
            $v_D["ownerid"] = 9;
            var $v_E = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_4,
                    $v_5,
                    $v_D,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_E.get_changedFieldNames().addRange(["ownerid"]);
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            Xrm.Internal.messages.update($v_E).then(function($p1_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        }
        var $v_7 = new Xrm.Objects.EntityReference("annotation", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
            $v_8 = {};
        $v_8["objecttypecode"] = 9953;
        $v_8["objectid"] = new Xrm.Objects.EntityReference("knowledgearticle",
            new Microsoft.Crm.Client.Core.Framework.Guid($v_3));
        $v_8["isdocument"] = false;
        var $v_9 = Xrm.Page.context.client.getClient() === "Mobile";
        if (!$v_9) $v_8["subject"] = Xrm.Internal.getResourceString("LOCID_KNOWART_REJECT_NOTE_TITLE");
        else $v_8["subject"] = Xrm.Internal.getResourceString("KnowledgeArticle_Reject_Note_Title");
        $v_8["notetext"] = Xrm.Page.getAttribute("reasonforrejection").getValue();
        $v_8["owneridtype"] = 8;
        var $v_A = {};
        $v_A["objecttypecode"] = 5;
        $v_A["objectid"] = 6;
        $v_A["isdocument"] = 0;
        $v_A["subject"] = 14;
        $v_A["notetext"] = 14;
        $v_A["owneridtype"] = 5;
        var $v_B = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_7,
                $v_8,
                $v_A,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_B.get_changedFieldNames().addRange([
            "objecttypecode", "objectid", "isdocument", "subject", "notetext", "owneridtype"
        ]);
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Internal.messages.setState("knowledgearticle", $v_3, 0, -1)
            .then(function() {
                    Xrm.Internal.messages.create($v_B).then(function($p2_0) {
                            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage()
                        },
                        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca).then(function() {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    Xrm.Page.ui.close();
                    Xrm.Page.ui.process.reflow(true,
                        "508cc4cd-0c56-a25d-aedb-b6d59aad8e15",
                        "1926340e-b1a8-7702-b123-49e4884ed323");
                    Xrm.Page.data.refresh(true)
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else {
        var $v_F = new Xrm.AlertDialogStrings;
        $v_F.text = Xrm.Internal.getResourceString("KnowledgeArticle_ReviewRejectReason_DialogText");
        var $v_G = new Xrm.DialogOptions;
        $v_G.width = 600;
        $v_G.height = 150;
        Xrm.Dialog.openAlertDialog($v_F, $v_G, null)
    }
    var $v_1 = Xrm.Page.getAttribute("review");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 = $v_1.getValue()
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.CloseRejectedDialog = function(dialogParams, callbackParams) {
    var $v_0 = Xrm.Page.getAttribute("review");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if (dialogParams["lastButtonClicked"] === "ok_id")
            Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2 = $v_0.getValue();
        else $v_0.setValue(Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$2)
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$M = function() {
    var $v_0 = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$A(),
        $v_1 = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$G();
    return Mscrm.InternalUtilities.JSTypes.isNull($v_0) || (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || $v_0 > $v_1)
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$N = function() {
    var $v_0 = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$A(),
        $v_1 = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_$G();
    return Mscrm.InternalUtilities.JSTypes.isNull($v_1) || (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || $v_1 < $v_0)
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource
    .get_$A = function() { return Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_expirationDate().getValue() };
Mscrm.KnowledgeArticleMainSystemLibraryWebResource
    .get_$G = function() { return Mscrm.KnowledgeArticleMainSystemLibraryWebResource.get_publishDate().getValue() };
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$R = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("isprimary");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if ($v_0.getValue() === 1) {
            var $v_1 = Xrm.Page.ui.controls.get("header_process_parentarticlecontentid");
            $v_1 && $v_1.setDisabled(true)
        }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$P = function() {
    if (!Xrm.Internal.canApproveOrPublishKnowledgeArticle(true)) {
        var $v_0 = Xrm.Page.ui.controls.get("header_process_review");
        $v_0 && $v_0.setDisabled(true)
    }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$S = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("isprimary");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if (!$v_0.getValue()) {
            var $v_1 = Xrm.Page.ui.controls.get("header_process_languagelocaleid");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setDisabled(true)
        }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$V = function($p0) {
    if ($p0 === Mscrm.KnowledgeArticleMainSystemLibraryWebResource.emptyGuid &&
        Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes.get("languagelocaleid").getValue())) {
        var $v_0 = Xrm.Page.context.getUserLcid(),
            $v_1 =
                "<fetch version='1.0' mapping='logical' distinct='false' count='1'><entity name='languagelocale'><attribute name='localeid' /><attribute name='name' /><filter type='and'><condition attribute='localeid' operator='eq' value='" + $v_0 + "' /></filter></entity></fetch>";
        Xrm.Internal.messages.retrieveMultiple($v_1).then(function($p1_0) {
                var $v_2 = $p1_0.entityCollection;
                if ($v_2.get_count() > 0) {
                    var $v_3 = $v_2.get_entities()[0], $v_4 = new Array(1), $v_5 = new Xrm.LookupObject;
                    $v_5.id = $v_3.getValue("languagelocaleid").toString();
                    $v_5.name = $v_3.getValue("name").toString();
                    $v_5.entityType = "languagelocale";
                    $v_4[0] = $v_5;
                    Xrm.Page.data.entity.attributes.get("languagelocaleid").setValue($v_4)
                }
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.$T = function() {
    var $v_0 = Xrm.Page.getAttribute("languagelocaleid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.controls;
        $v_1.forEach(function($p1_0, $p1_1) {
            var $v_2 = $p1_0;
            $v_2.setDisabled(false)
        })
    }
};
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.isScheduledOrPublishedState = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("statecode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return $v_0.getValue() === 3 || $v_0.getValue() === 2
    }
    return false
};
Mscrm.KnowledgeArticleFormStateDescription = function() {};
Mscrm.ExpiredBpfStageIdentifier = function() {};
Mscrm.KnowledgeArticlePublishCommands = function() {};
Mscrm.KnowledgeArticlePublishCommands.openPublishArticleDialog = function(records, isBulkPublishAction, gridControl) {
    var $v_0 = {};
    $v_0["selectedrecords"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences(records);
    $v_0["isbulkpublishaction"] = isBulkPublishAction.toString();
    if (isBulkPublishAction) $v_0["isprimary"] = true;
    else if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity)) {
        $v_0["isprimary"] = Xrm.Page.data.entity.attributes.get("isprimary").getValue();
        $v_0["parentarticlecontentid"] = Xrm.Page.data.entity.attributes.get("parentarticlecontentid").getValue();
        $v_0["articlePublicNumber"] = Xrm.Page.data.entity.attributes.get("articlePublicNumber".toLowerCase())
            .getValue();
        $v_0["languagelocaleid"] = Xrm.Page.data.entity.attributes.get("languagelocaleid").getValue();
        $v_0["majorversionnumber"] = Xrm.Page.data.entity.attributes.get("majorversionnumber").getValue();
        $v_0["minorversionnumber"] = Xrm.Page.data.entity.attributes.get("minorversionnumber").getValue()
    }
    var $v_1 = function($p1_0, $p1_1) {
        Mscrm.KnowledgeArticlePublishCommands.publishArticleCallback($p1_0, $p1_1, gridControl)
    };
    Xrm.Dialog.openDialog("PublishKnowledgeArticle", Mscrm.KnowledgeArticlePublishCommands.get_$0(), $v_0, $v_1, null)
};
Mscrm.KnowledgeArticlePublishCommands.closeDialog = function(dialogParams) {
    if (!Mscrm.KnowledgeArticleCommandActions.saveCurrentChanges()) return;
    Mscrm.KnowledgeArticlePublishCommands.setLastButtonClicked("ok_id");
    var $v_0 = Xrm.Page.getControl("publishingdatetime_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.getVisible()) {
        var $v_2 = Xrm.Page.context.client.getClient() === "Mobile", $v_3 = $v_0.getAttribute();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue())) {
            var $v_4 = new Xrm.AlertDialogStrings;
            if (!$v_2) $v_4.text = Xrm.Internal.getResourceString("LOCID_KNOWART_PUBLISH_DATE");
            else $v_4.text = Xrm.Internal.getResourceString("KnowledgeArticle_Publish_PublishingDate");
            Xrm.Dialog.openAlertDialog($v_4, null, null);
            return
        }
    }
    var $v_1 = Xrm.Page.getControl("expirationdate_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_5 = Xrm.Page.context.client.getClient() === "Mobile", $v_6 = $v_1.getAttribute();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue())) {
            var $v_7 = Xrm.Page.getControl("expirationstate_id"), $v_8 = $v_7.getAttribute();
            if (!(Mscrm.InternalUtilities.JSTypes.isNull($v_7) && Mscrm.InternalUtilities.JSTypes.isNull($v_8)) &&
                Mscrm.InternalUtilities.JSTypes.isNull($v_8.getSelectedOption())) {
                var $v_B = new Xrm.AlertDialogStrings;
                if (!$v_5) $v_B.text = Xrm.Internal.getResourceString("LOCID_KNOWART_PUBLISH_EXPSTATE");
                else $v_B.text = Xrm.Internal.getResourceString("KnowledgeArticle_Publish_ExpirationStateText");
                Xrm.Dialog.openAlertDialog($v_B, null, null);
                return
            }
            var $v_9 = Xrm.Page.getControl("expirationstatus_id"), $v_A = $v_9.getAttribute();
            if (!(Mscrm.InternalUtilities.JSTypes.isNull($v_9) && Mscrm.InternalUtilities.JSTypes.isNull($v_A)) &&
                Mscrm.InternalUtilities.JSTypes.isNull($v_A.getSelectedOption())) {
                var $v_C = new Xrm.AlertDialogStrings;
                if (!$v_5) $v_C.text = Xrm.Internal.getResourceString("LOCID_KNOWART_PUBLISH_EXPSTATUS");
                else $v_C.text = Xrm.Internal.getResourceString("KnowledgeArticle_Publish_ExpirationStatusText");
                Xrm.Dialog.openAlertDialog($v_C, null, null);
                return
            }
        }
    }
    if (!Mscrm.KnowledgeArticlePublishCommands.$X()) return;
    Xrm.Page.data.entity.attributes.get("isbulkpublishaction").getValue().toString() === "false" &&
        Mscrm.KnowledgeArticlePublishCommands.setScheduledVersion(dialogParams);
    Xrm.Page.data.entity.attributes.get("isbulkpublishaction").getValue().toString() === "true" && Xrm.Page.ui.close()
};
Mscrm.KnowledgeArticlePublishCommands.cancelDialog = function() {
    Mscrm.KnowledgeArticlePublishCommands.setLastButtonClicked("cancel_id");
    Xrm.Page.ui.close();
    !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui) && Xrm.Page.ui.refreshRibbon()
};
Mscrm.KnowledgeArticlePublishCommands.setLastButtonClicked = function(buttonId) {
    var $v_0 = Xrm.Page.getAttribute("lastButtonClicked");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue(buttonId)
};
Mscrm.KnowledgeArticlePublishCommands
    .validatePublishConfirmationDialog = function(confirmDialogStrings,
        dialogOptions,
        doneCallback,
        failCallback,
        onDialogCancelCallback) {
        var $v_0 = function() { Xrm.Page.ui.close() };
        onDialogCancelCallback = function() {};
        Xrm.Dialog.openConfirmDialog(confirmDialogStrings, dialogOptions, $v_0, onDialogCancelCallback)
    };
Mscrm.KnowledgeArticlePublishCommands.$4 = function($p0) { Xrm.Page.data.refresh(true) };
Mscrm.KnowledgeArticlePublishCommands.$3 = function() {};
Mscrm.KnowledgeArticlePublishCommands.publishArticleCallback = function(dialogParams, callbackParams, gridControl) {
    if (dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = !Mscrm.InternalUtilities.JSTypes.isNull(dialogParams["isprimary"]) &&
                dialogParams["isprimary"].toString() === "true"
                ? true
                : false,
            $v_1 = Mscrm.InternalUtilities.DialogUtility
                .deserializeSdkEntityReferences(dialogParams["selectedrecords"].toString()),
            $v_2 = {},
            $v_3 = {},
            $v_4 = new Array(1),
            $v_5,
            $v_6 = dialogParams["publish_id"];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6) && $v_6 === 1) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams["publishingdatetime_id"])) {
                $v_5 = "publishon";
                var $v_D = new Date(dialogParams["publishingdatetime_id"].toString());
                $v_3[$v_5] = $v_D;
                $v_2[$v_5] = 2;
                $v_4[$v_4.length] = $v_5;
                if (dialogParams["publishedstatus_id"]) {
                    var $v_E = parseInt(dialogParams["publishedstatus_id"].toString());
                    $v_5 = "publishstatusid";
                    $v_3[$v_5] = $v_E;
                    $v_2[$v_5] = 5;
                    $v_4[$v_4.length] = $v_5
                }
                $v_5 = "statecode";
                $v_3[$v_5] = 2;
                $v_2[$v_5] = 12;
                $v_4[$v_4.length] = $v_5;
                if (dialogParams["scheduledstatus_id"]) {
                    $v_5 = "statuscode";
                    $v_3[$v_5] = dialogParams["scheduledstatus_id"];
                    $v_2[$v_5] = 13;
                    $v_4[$v_4.length] = $v_5
                }
            }
        } else {
            $v_5 = "statecode";
            $v_3[$v_5] = 3;
            $v_2[$v_5] = 12;
            $v_4[$v_4.length] = $v_5;
            if (dialogParams["publishedstatus_id"]) {
                $v_5 = "statuscode";
                $v_3[$v_5] = dialogParams["publishedstatus_id"];
                $v_2[$v_5] = 13;
                $v_4[$v_4.length] = $v_5
            }
            $v_5 = "publishon";
            $v_3[$v_5] = null;
            $v_2[$v_5] = 2;
            $v_4[$v_4.length] = $v_5
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams["expirationdate_id"])) {
            $v_5 = "expirationdate";
            var $v_F = new Date(dialogParams["expirationdate_id"].toString());
            $v_3[$v_5] = $v_F;
            $v_2[$v_5] = 2;
            $v_4[$v_4.length] = $v_5;
            if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams["expirationstate_id"])) {
                var $v_G = parseInt(dialogParams["expirationstate_id"].toString());
                $v_5 = "expirationstateid";
                $v_3[$v_5] = $v_G;
                $v_2[$v_5] = 5;
                $v_4[$v_4.length] = $v_5
            }
            if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams["expirationstatus_id"])) {
                var $v_H = parseInt(dialogParams["expirationstatus_id"].toString());
                $v_5 = "expirationstatusid";
                $v_3[$v_5] = $v_H;
                $v_2[$v_5] = 5;
                $v_4[$v_4.length] = $v_5
            }
        }
        if (!$v_0) {
            var $v_I = Xrm.Page.getAttribute("parentarticlecontentid");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_I)) {
                var $v_J = $v_I.getValue();
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_J) && $v_J.length > 0) {
                    var $v_K = new Microsoft.Crm.Client.Core.Framework.Guid($v_J[0].id);
                    $v_5 = "parentarticlecontentid";
                    $v_2[$v_5] = 6;
                    $v_4[$v_4.length] = $v_5;
                    $v_3[$v_5] = new Xrm.Objects.EntityReference("knowledgearticle", $v_K)
                }
            }
        }
        for (var $v_7 = dialogParams["isbulkpublishaction"].toString() === "true" ? true : false,
            $v_8 = [],
            $v_9 = new Array(0),
            $v_A = false,
            $v_B = false,
            $v_C = false,
            $$arr_O = $v_1,
            $$len_P = $$arr_O.length,
            $$idx_Q = 0;
            $$idx_Q < $$len_P;
            ++$$idx_Q) {
            var $v_L = $$arr_O[$$idx_Q],
                $v_M = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_L,
                        $v_3,
                        $v_2,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_M.get_changedFieldNames().addRange($v_4);
            if (dialogParams["approverelated_id"])
                $v_A = dialogParams["approverelated_id"].toString() === "1" ? true : false;
            if (dialogParams["copyrelated_id"]) $v_B = dialogParams["copyrelated_id"].toString() === "1" ? true : false;
            if (dialogParams["copyrelatedcategories_id"])
                $v_C = dialogParams["copyrelatedcategories_id"].toString() === "1" ? true : false;
            if ($v_7) {
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                $v_9.push($v_M)
            } else if ($v_0) {
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                Xrm.Internal.messages.publishKnowledgeArticle($v_M, false, false, $v_A).then(function($p1_0) {
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Mscrm.KnowledgeArticleCommandActions.refreshForm()
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
            } else {
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                Xrm.Internal.messages.publishKnowledgeArticle($v_M, $v_B, $v_C, false).then(function($p1_0) {
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Mscrm.KnowledgeArticleCommandActions.refreshForm()
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
            }
        }
        Mscrm.KnowledgeArticlePublishCommands.$C($v_9, 0, $v_B, $v_C, $v_A, gridControl)
    }
};
Mscrm.KnowledgeArticlePublishCommands.$C = function($p0, $p1, $p2, $p3, $p4, $p5) {
    if ($p0.length > $p1) {
        var $v_0 = Xrm.Internal.messages.publishKnowledgeArticle($p0[$p1], $p2, $p3, $p4);
        $v_0.then(function($p1_0) { Mscrm.KnowledgeArticlePublishCommands.$C($p0, $p1 + 1, $p2, $p3, $p4, $p5) },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        $p5 && $p5.refresh()
    }
};
Mscrm.KnowledgeArticlePublishCommands.get_$0 = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 200;
    $v_0.width = 400;
    return $v_0
};
Mscrm.KnowledgeArticlePublishCommands.setScheduledVersion = function($p0) {
    var $v_0 = Xrm.Page.getAttribute("articlePublicNumber"),
        $v_1 = $v_0.getValue(),
        $v_2 = Xrm.Page.getAttribute("languagelocaleid").getValue(),
        $v_3 = $v_2[0].id,
        $v_4 = Xrm.Page.getAttribute("majorversionnumber").getValue(),
        $v_5 = Xrm.Page.getAttribute("minorversionnumber").getValue(),
        $v_6 =
            "<fetch version='1.0' mapping='logical'><entity name='knowledgearticle'><attribute name='knowledgearticleid' /><filter type='and'><condition attribute='articlepublicnumber' operator='eq' value='" + $v_1 + "' /><condition attribute='languagelocaleid' operator='eq' value='" + $v_3 + "' /><condition attribute='statecode' operator='eq' value='" + 3 + "' /><filter type='or'><condition attribute='majorversionnumber' operator='gt' value='" + $v_4 + "' /><filter type='and'><condition attribute='majorversionnumber' operator='eq' value='" + $v_4 + "' /><condition attribute='minorversionnumber' operator='gt' value='" + $v_5 + "' /></filter></filter></filter></entity></fetch>",
        $v_7 = null;
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    var $v_8 = new Xrm.ConfirmDialogStrings, $v_9 = Xrm.Page.context.client.getClient() === "Mobile";
    Xrm.Internal.messages.retrieveMultiple($v_6).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            if ($p1_0) {
                $v_7 = $p1_0.entityCollection;
                if ($v_7.get_count()) {
                    if (!$v_9) {
                        $v_8.title = Xrm.Internal.getResourceString("LOCID_KNOWART_CHKPUBLISH_TITLE");
                        $v_8.text = Xrm.Internal.getResourceString("LOCID_KNOWART_CHKPUBLISH_TEXT")
                    } else {
                        $v_8.title = Xrm.Internal
                            .getResourceString("KnowledgeArticle_ChkPublish_Confirmation_DialogTitle");
                        $v_8.text = Xrm.Internal
                            .getResourceString("KnowledgeArticle_ChkPublish_Confirmation_DialogText")
                    }
                    Mscrm.KnowledgeArticlePublishCommands
                        .validatePublishConfirmationDialog($v_8,
                            Mscrm.KnowledgeArticlePublishCommands.get_$0(),
                            Mscrm.KnowledgeArticlePublishCommands.$4,
                            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca,
                            Mscrm.KnowledgeArticlePublishCommands.$3)
                } else Xrm.Page.ui.close()
            }
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.KnowledgeArticlePublishCommands.$X = function() {
    var $v_0 = true,
        $v_1 = Xrm.Page.getControl("publish_id"),
        $v_2 = $v_1.getAttribute(),
        $v_3 = Xrm.Page.getControl("expirationdate_id"),
        $v_4 = $v_3.getAttribute(),
        $v_5 = Xrm.Page.getControl("publishingdatetime_id"),
        $v_6 = $v_5.getAttribute();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue()) &&
    (!Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue()) &&
        $v_4.getValue() <= $v_6.getValue())) {
        var $v_7 = new Xrm.AlertDialogStrings, $v_8 = Xrm.Page.context.client.getClient() === "Mobile";
        if (!$v_8) $v_7.text = Xrm.Internal.getResourceString("LOCID_KNOWART_EXPIREON_ISVALID");
        else $v_7.text = Xrm.Internal.getResourceString("KnowledgeArticle_ExpireOn_DialogText");
        Xrm.Dialog.openAlertDialog($v_7, null, null);
        $v_0 = false;
        return $v_0
    }
    if ($v_2.getSelectedOption().value === 1 &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue()) &&
        $v_6.getValue() <= Mscrm.KnowledgeArticlePublishCommands.localDateTimeNow()) {
        var $v_9 = new Xrm.AlertDialogStrings, $v_A = Xrm.Page.context.client.getClient() === "Mobile";
        if (!$v_A) $v_9.text = Xrm.Internal.getResourceString("LOCID_KNOWART_PUBLISH_DATETIME");
        else $v_9.text = Xrm.Internal.getResourceString("KnowledgeArticle_PublishDialog_PublishingDateTimeMessage");
        Xrm.Dialog.openAlertDialog($v_9, null, null);
        $v_0 = false;
        return $v_0
    }
    return $v_0
};
Mscrm.KnowledgeArticlePublishCommands.localDateTimeNow = function() {
    var $v_0 = new Date;
    $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset() + Xrm.Page.context.getTimeZoneOffsetMinutes());
    return $v_0
};
Mscrm.KnowledgeArticleConstants = function() {};
Mscrm.KnowledgeArticleConstants.prototype = {
    PublishState: 0,
    PublishDateTime: null,
    ScheduledStatus: null,
    PublishedStatus: null,
    ExpirationDate: null,
    UnpublishOnExpiration: null,
    ExpirationState: 0,
    ExpirationStatus: null
};
Mscrm.KnowledgeArticleGridCommandActions = function() {};
Mscrm.KnowledgeArticleGridCommandActions.major = function(gridControl, records) {
    Mscrm.KnowledgeArticleGridCommandActions.$9(gridControl, records, true)
};
Mscrm.KnowledgeArticleGridCommandActions.minor = function(gridControl, records) {
    Mscrm.KnowledgeArticleGridCommandActions.$9(gridControl, records, false)
};
Mscrm.KnowledgeArticleGridCommandActions.markInternal = function(gridControl, records) {
    var $v_0 = true;
    Mscrm.KnowledgeArticleGridCommandActions.$B(gridControl, records, $v_0)
};
Mscrm.KnowledgeArticleGridCommandActions.markExternal = function(gridControl, records) {
    var $v_0 = false;
    Mscrm.KnowledgeArticleGridCommandActions.$B(gridControl, records, $v_0)
};
Mscrm.KnowledgeArticleGridCommandActions.approve = function(gridControl, records) {
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKAPRV_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKAPRV_TEXT")
    }
    $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_BulkApprove_Confirmation_DialogTitle");
    $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_BulkApprove_Confirmation_DialogText");
    Mscrm.KnowledgeArticleGridCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleGridCommandActions.get_$0(),
        records,
        1,
        -1,
        gridControl,
        Mscrm.KnowledgeArticleGridCommandActions.$4,
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback,
        Mscrm.KnowledgeArticleGridCommandActions.$3)
};
Mscrm.KnowledgeArticleGridCommandActions.publish = function(gridControl, records) {
    Mscrm.KnowledgeArticlePublishCommands.openPublishArticleDialog(records, true, gridControl)
};
Mscrm.KnowledgeArticleGridCommandActions.archive = function(gridControl, records) {
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKARCV_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKARCV_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_BulkArchive_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_BulkArchive_Confirmation_DialogText")
    }
    Mscrm.KnowledgeArticleGridCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleGridCommandActions.get_$0(),
        records,
        5,
        -1,
        gridControl,
        Mscrm.KnowledgeArticleGridCommandActions.$4,
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback,
        Mscrm.KnowledgeArticleGridCommandActions.$3)
};
Mscrm.KnowledgeArticleGridCommandActions.discard = function(gridControl, records) {
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKDISCARD_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKDISCARD_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_BulkDiscard_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_BulkDiscard_Confirmation_DialogTitle")
    }
    Mscrm.KnowledgeArticleGridCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleGridCommandActions.get_$0(),
        records,
        6,
        -1,
        gridControl,
        Mscrm.KnowledgeArticleGridCommandActions.$4,
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback,
        Mscrm.KnowledgeArticleGridCommandActions.$3)
};
Mscrm.KnowledgeArticleGridCommandActions.revertToDraft = function(gridControl, records) {
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1) {
        $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKREV_TITLE");
        $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKREV_TEXT")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_BulkRevertToDraft_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_BulkRevertToDraft_Confirmation_DialogText")
    }
    Mscrm.KnowledgeArticleGridCommandActions.$5($v_0,
        Mscrm.KnowledgeArticleGridCommandActions.get_$0(),
        records,
        0,
        -1,
        gridControl,
        Mscrm.KnowledgeArticleGridCommandActions.$4,
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback,
        Mscrm.KnowledgeArticleGridCommandActions.$3)
};
Mscrm.KnowledgeArticleGridCommandActions
    .canApproveKnowledgeArticleGrid = function(gridControl, records) {
        return Mscrm.KnowledgeArticleGridCommandActions.$7(gridControl,
            records,
            ["Approved", "Scheduled", "Published", "Expired", "Archived", "Discarded"])
    };
Mscrm.KnowledgeArticleGridCommandActions
    .canPublishKnowledgeArticleGrid = function(gridControl, records) {
        return Mscrm.KnowledgeArticleGridCommandActions.$7(gridControl, records, ["Published", "Archived", "Discarded"])
    };
Mscrm.KnowledgeArticleGridCommandActions
    .canRevertToDraftKnowledgeArticleGrid = function(gridControl, records) {
        return Mscrm.KnowledgeArticleGridCommandActions.$7(gridControl, records, ["Draft", "Archived", "Discarded"])
    };
Mscrm.KnowledgeArticleGridCommandActions
    .canArchiveKnowledgeArticleGrid = function(gridControl, records) {
        return Mscrm.KnowledgeArticleGridCommandActions.$7(gridControl, records, ["Archived", "Discarded"])
    };
Mscrm.KnowledgeArticleGridCommandActions
    .canDiscardKnowledgeArticleGrid = function(gridControl, records) {
        return Mscrm.KnowledgeArticleGridCommandActions.$7(gridControl, records, ["Discarded"])
    };
Mscrm.KnowledgeArticleGridCommandActions.checkForApproveMiscellaneousPrivilege = function() {
    var $v_0 = Xrm.Page.context.client.getClient();
    if ($v_0 !== "Web" && $v_0 !== "Outlook") return Xrm.Internal.canApproveOrPublishKnowledgeArticle(true);
    return true
};
Mscrm.KnowledgeArticleGridCommandActions.checkForPublishMiscellaneousPrivilege = function() {
    var $v_0 = Xrm.Page.context.client.getClient();
    if ($v_0 !== "Web" && $v_0 !== "Outlook") return Xrm.Internal.canApproveOrPublishKnowledgeArticle(false);
    return true
};
Mscrm.KnowledgeArticleGridCommandActions
    .whenAllActionsAreCompleted = function(bulkActions, gridControl) {
        bulkActions &&
            bulkActions.length > 0 &&
            Microsoft.Crm.Client.Core.Imported.DeferredPromiseHelper.whenArray(bulkActions)
            .then(function($p1_0) { gridControl && gridControl.refresh() }, function($p1_0) {})
    };
Mscrm.KnowledgeArticleGridCommandActions.$9 = function($p0, $p1, $p2) {
    var $v_0 = new Xrm.ConfirmDialogStrings, $v_1 = Xrm.Page.context.client.getClient() === "Mobile";
    if (!$v_1)
        if ($p2) {
            $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKMAJOR_TITLE");
            $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKMAJOR_TEXT")
        } else {
            $v_0.title = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKMINOR_TITLE");
            $v_0.text = Xrm.Internal.getResourceString("LOCID_KNOWART_BULKMINOR_TEXT")
        }
    else if ($p2) {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_BulkMajor_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_BulkMajor_Confirmation_DialogText")
    } else {
        $v_0.title = Xrm.Internal.getResourceString("KnowledgeArticle_BulkMinor_Confirmation_DialogTitle");
        $v_0.text = Xrm.Internal.getResourceString("KnowledgeArticle_BulkMinor_Confirmation_DialogText")
    }
    var $v_2 = function() {
            var $v_4 = new Array(0);
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            for (var $$arr_6 = $p1, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
                var $v_5 = $$arr_6[$$idx_8];
                $v_4.push($v_5)
            }
            Mscrm.KnowledgeArticleGridCommandActions.$D($v_4, 0, $p2, $p0)
        },
        $v_3 = function() {};
    Xrm.Dialog.openConfirmDialog($v_0, Mscrm.KnowledgeArticleGridCommandActions.get_$0(), $v_2, $v_3)
};
Mscrm.KnowledgeArticleGridCommandActions.$D = function($p0, $p1, $p2, $p3) {
    if ($p0.length > $p1) {
        var $v_0 = new Xrm.Objects.EntityReference("knowledgearticle", $p0[$p1].Id),
            $v_1 = Xrm.Internal.messages.createKnowledgeArticleVersion($v_0, $p2);
        $v_1.then(function($p1_0) { Mscrm.KnowledgeArticleGridCommandActions.$D($p0, $p1 + 1, $p2, $p3) },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        $p3 && $p3.refresh()
    }
};
Mscrm.KnowledgeArticleGridCommandActions.$7 = function($p0, $p1, $p2) { return true };
Mscrm.KnowledgeArticleGridCommandActions.$5 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = function() {
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        for (var $v_1 = [], $$arr_A = $p2, $$len_B = $$arr_A.length, $$idx_C = 0; $$idx_C < $$len_B; ++$$idx_C) {
            var $v_2 = $$arr_A[$$idx_C],
                $v_3 = Xrm.Internal.messages.setState("knowledgearticle", $v_2.Id.toString(), $p3, $p4);
            $v_1.push($v_3);
            $v_3.then($p6,
                function($p2_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    $p7($p2_0)
                })
        }
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        Mscrm.KnowledgeArticleGridCommandActions.whenAllActionsAreCompleted($v_1, $p5)
    };
    Xrm.Dialog.openConfirmDialog($p0, $p1, $v_0, $p8)
};
Mscrm.KnowledgeArticleGridCommandActions.get_$0 = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 200;
    $v_0.width = 400;
    return $v_0
};
Mscrm.KnowledgeArticleGridCommandActions.$4 = function($p0) {};
Mscrm.KnowledgeArticleGridCommandActions.$3 = function() {};
Mscrm.KnowledgeArticleGridCommandActions.$B = function($p0, $p1, $p2) {
    for (var $v_0 = [], $$arr_4 = $p1, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_1 = $$arr_4[$$idx_6],
            $v_2 = $p2,
            $v_3 = Mscrm.KnowledgeArticleCommandActions
                .getKnowledgeArticleRecord(new Microsoft.Crm.Client.Core.Framework.Guid($v_1.Id.toString()), $v_2),
            $v_4 = Xrm.Internal.messages.update($v_3);
        $v_0.push($v_4);
        $v_4.then(function($p1_0) { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    }
    Mscrm.KnowledgeArticleGridCommandActions.whenAllActionsAreCompleted($v_0, $p0)
};
Mscrm.KnowledgeArticleCommandActions.registerClass("Mscrm.KnowledgeArticleCommandActions");
Mscrm.KnowledgeArticleMainSystemLibraryWebResource.registerClass("Mscrm.KnowledgeArticleMainSystemLibraryWebResource");
Mscrm.KnowledgeArticleFormStateDescription.registerClass("Mscrm.KnowledgeArticleFormStateDescription");
Mscrm.ExpiredBpfStageIdentifier.registerClass("Mscrm.ExpiredBpfStageIdentifier");
Mscrm.KnowledgeArticlePublishCommands.registerClass("Mscrm.KnowledgeArticlePublishCommands");
Mscrm.KnowledgeArticleConstants.registerClass("Mscrm.KnowledgeArticleConstants");
Mscrm.KnowledgeArticleGridCommandActions.registerClass("Mscrm.KnowledgeArticleGridCommandActions");
Mscrm.KnowledgeArticleCommandActions.isUpdateAction = false;
Mscrm.KnowledgeArticleCommandActions.isScheduledArticle = false;
Mscrm.KnowledgeArticleCommandActions.defaultValue = -1;
Mscrm.KnowledgeArticleCommandActions.expiredstatusdefaultValue = -1;
Mscrm.KnowledgeArticleMainSystemLibraryWebResource
    .emptyGuid = "{" + Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString() + "}";
this.$2 = 0;
this.$6 = 0;
Mscrm.KnowledgeArticleFormStateDescription.draft = "Draft";
Mscrm.KnowledgeArticleFormStateDescription.approved = "Approved";
Mscrm.KnowledgeArticleFormStateDescription.scheduled = "Scheduled";
Mscrm.KnowledgeArticleFormStateDescription.published = "Published";
Mscrm.KnowledgeArticleFormStateDescription.expired = "Expired";
Mscrm.KnowledgeArticleFormStateDescription.archived = "Archived";
Mscrm.KnowledgeArticleFormStateDescription.discarded = "Discarded";
Mscrm.ExpiredBpfStageIdentifier.review = "e33cdd31-c568-4a14-8dcb-60d790cc85cb";
Mscrm.ExpiredBpfStageIdentifier.updateContent = "5c2b5c67-6ab5-4653-890b-b700bb5d5813";
Mscrm.ExpiredBpfStageIdentifier.publish = "397596bd-de78-5384-9b5e-4e791a4eed61";
Mscrm.KnowledgeArticleConstants.DefaultStatusCode = -1;
Mscrm.KnowledgeArticleConstants.GridControl = "gridControl";
Mscrm.KnowledgeArticleConstants.SelectedRecords = "selectedrecords";
Mscrm.KnowledgeArticleConstants.PublishStatus = "publish_id";
Mscrm.KnowledgeArticleConstants.PublishDateTimeId = "publishingdatetime_id";
Mscrm.KnowledgeArticleConstants.ScheduledStatusId = "scheduledstatus_id";
Mscrm.KnowledgeArticleConstants.PublishedStatusId = "publishedstatus_id";
Mscrm.KnowledgeArticleConstants.ExpirationDateId = "expirationdate_id";
Mscrm.KnowledgeArticleConstants.UnpublishOnExpirationId = "unpublishonexpiration_id";
Mscrm.KnowledgeArticleConstants.ExpirationStateId = "expirationstate_id";
Mscrm.KnowledgeArticleConstants.ExpirationStatusId = "expirationstatus_id";
Mscrm.KnowledgeArticleConstants.DefaultExpirationStatusId = "defaultexpirationstatus_id";
Mscrm.KnowledgeArticleConstants.CopyRelatedId = "copyrelated_id";
Mscrm.KnowledgeArticleConstants.CopyRelatedCategoryId = "copyrelatedcategories_id";
Mscrm.KnowledgeArticleConstants.ApproveRelatedId = "approverelated_id";
Mscrm.KnowledgeArticleConstants.EntityId = "knowledgeArticleId";
Mscrm.KnowledgeArticleConstants.LastButtonClicked = "lastButtonClicked";
Mscrm.KnowledgeArticleConstants.DialogOkId = "ok_id";
Mscrm.KnowledgeArticleConstants.DialogCancelId = "cancel_id";
Mscrm.KnowledgeArticleConstants.ArticlePublicNumber = "articlePublicNumber";
Mscrm.KnowledgeArticleConstants.PublishArticleDialog = "PublishKnowledgeArticle";
Mscrm.KnowledgeArticleConstants.IsPrimary = "isprimary";
Mscrm.KnowledgeArticleConstants.ParentArticleContentId = "parentarticlecontentid";
Mscrm.KnowledgeArticleConstants.IsBulkPublishAction = "isbulkpublishaction";
Mscrm.KnowledgeArticleConstants.MajorVersionNumber = "majorversionnumber";
Mscrm.KnowledgeArticleConstants.MinorVersionNumber = "minorversionnumber";
Mscrm.KnowledgeArticleConstants.ExpirationDateFormId = "expirationdate";
Mscrm.KnowledgeArticleConstants.PubishonDateFormId = "publishon";
Mscrm.KnowledgeArticleConstants.TranslateArticleDialog = "TranslateKnowledgeArticle";
Mscrm.KnowledgeArticleConstants.TranslateLanguageId = "translateLanguageLocale_id";
Mscrm.KnowledgeArticleConstants.LanguageLocaleid = "languagelocaleid";
Mscrm.KnowledgeArticleConstants.LatestVersionId = "lbl_latestVersion";
Mscrm.KnowledgeArticleConstants.MajorVersionId = "lbl_majorVersion";
Mscrm.KnowledgeArticleConstants.MinorVersionId = "lbl_minorVersion";
Mscrm.KnowledgeArticleConstants.VersionTypeId = "versionType_id";
Mscrm.KnowledgeArticleConstants.Major = "Major";
Mscrm.KnowledgeArticleConstants.ArticleToArticleAssociationDialog = "ArticleToArticleAssociation";
Mscrm.KnowledgeArticleConstants.ArticleToProductAssociationDialog = "ArticleToProductAssociation";
Mscrm.KnowledgeArticleConstants.ArticleToCategoryAssociationDialog = "ArticleToCategoryAssociation";
Mscrm.KnowledgeArticleConstants.AssociateEntityId = "associateEntity_id";
Mscrm.KnowledgeArticleConstants.RelatedEntityRoleId = "CFFE4A59-CE11-4FCA-B132-5985D3917D26";
Mscrm.KnowledgeArticleConstants.PrimaryEntityRoleId = "5A18DFC8-0B8B-40C7-9381-CCE1C485822D";
Mscrm.KnowledgeArticleConstants.AssociateProductRoleId = "131F5D06-9F36-4B59-B8B7-A1F7D6C5C5EF";
Mscrm.KnowledgeArticleConstants.KnowledgeArticleRoleId = "81BB2655-F19B-42B2-9C4B-D45B84C3F61C";
Mscrm.KnowledgeArticleConstants.AssociationType = "associationType";
Mscrm.KnowledgeArticleConstants.RejectKnowledgeArticleDialog = "RejectKnowledgeArticle";
Mscrm.KnowledgeArticleConstants.PrimaryAuthorId = "primaryauthorid";
Mscrm.KnowledgeArticleConstants.ReasonForRejection = "reasonforrejection";
Mscrm.KnowledgeArticleConstants.ReviewStageId = "508cc4cd-0c56-a25d-aedb-b6d59aad8e15";
Mscrm.KnowledgeArticleConstants.PublishStageId = "11230204-8518-212c-81b5-aaed12ad363e";
Mscrm.KnowledgeArticleConstants.MarkInternalDialog = "MarkInternal";
Mscrm.KnowledgeArticleConstants.MarkExternalDialog = "MarkExternal";
Mscrm.KnowledgeArticleConstants.SelectVersions = "selectversions_id";
Mscrm.Form_onload = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.form_onload;
Mscrm.Form_onsave = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.form_onsave;
Mscrm.review_onchange = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.review_onchange;
Mscrm.expirationdate_onchange = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.expirationdate_onchange;
Mscrm.publishdate_onchange = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.publishdate_onchange;
Mscrm.expiredreviewoptions_onchange = Mscrm.KnowledgeArticleMainSystemLibraryWebResource.expiredreviewoptions_onchange