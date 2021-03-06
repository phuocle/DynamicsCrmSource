Type.registerNamespace("Mscrm");
Mscrm.CampaignActivityState = function() {};
Mscrm.CampaignActivityState.prototype = { open: 0, closed: 1, canceled: 2 };
Mscrm.CampaignActivityState.registerEnum("Mscrm.CampaignActivityState", false);

function CallDistribute(objectType) {
    var $v_0 = Xrm.Page.getAttribute("channeltypecode"), $v_1 = $v_0.getValue(), $v_2 = $5(true);
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) {
        var $v_3 = null;
        Xrm.Internal.messages.retrieveMultiple($v_2).then(function($p1_0) {
                $v_3 = $p1_0.entityCollection;
                var $v_4 = false;
                if ($v_3
                    .get_count() >
                    0 &&
                    $v_3.get_entities()[0]
                    .hasValue("istemplate")) $v_4 = $v_3.get_entities()[0].getValue("istemplate").getValue("value");
                var $v_5 = getCampaignActivityAction($v_1, $v_4);
                DoDistribute("", objectType, $v_5, Xrm.Page.data.entity.getId())
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
}

function DoDistribute(subGrid, objectType, action, objectId) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(objectId),
        $v_1 = "<fetch mapping='logical'><entity name='" +
            CrmEncodeDecode.CrmXmlAttributeEncode("list") +
            "'><attribute name='listname'/><link-entity name='campaignactivityitem' from='itemid'  to='listid' link-type='inner'><filter><condition attribute='campaignactivityid' operator='eq' value='" +
            CrmEncodeDecode.CrmXmlAttributeEncode($v_0.toString()) +
            "' /></filter></link-entity></entity></fetch>";
    Xrm.Internal.messages.retrieveMultiple($v_1).then(function($p1_0) {
            var $v_2 = $p1_0.entityCollection;
            if (!$v_2.get_count()) action = "nolistassociated";
            Xrm.Internal.doAction(subGrid, objectType, action, objectId)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function IsCampaignActivityOpen() {
    if ($9() === 0) return true;
    return false
}

function IsDistribute() {
    $B();
    if (IsCampaignActivityOpen() && !Mscrm.CampaignActivityVariables.$1 && !Mscrm.CampaignActivityVariables.$3
    ) return true;
    return false
}

function $5($p0) {
    var $v_0 = "";
    if ($p0) {
        var $v_1 = Xrm.Page.data.entity.attributes.get("regardingobjectid"), $v_2 = null, $v_3 = null;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) $v_2 = $v_1.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.length > 0) $v_3 = $v_2[0].id;
        if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString($v_3))
            $v_0 =
                "<fetch version='1.0' mapping='logical' distinct='true'><entity name='campaign'><attribute name='istemplate' /><filter type='and'><condition attribute='campaignid' operator='eq' value='" + $v_3 + "'/></filter></entity></fetch>"
    } else {
        var $v_4 = Xrm.Page.data.entity.getId(), $v_5 = Mscrm.CampaignActivityVariables.$6;
        if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString($v_4))
            $v_0 =
                "<fetch version='1.0' mapping='logical' distinct='true'><entity name='bulkoperation'><attribute name='activityid' /><link-entity name='activityparty' to='activityid' from='activityid' link-type='inner' ><filter type='and'><condition attribute='partyid' operator='eq' value='" + $v_4 + "'/><condition attribute='participationtypemask' operator='eq' value='" + $v_5 + "'/></filter></link-entity><order attribute='activityid' descending='false' /></entity></fetch>"
    }
    return $v_0
}

function $B() {
    var $v_0 = $5(true);
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        var $v_1 = null;
        Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
                $v_1 = $p1_0.entityCollection;
                if ($v_1
                    .get_count() >
                    0 &&
                    $v_1.get_entities()[0]
                    .hasValue("istemplate"))
                    Mscrm.CampaignActivityVariables.$3 = $v_1.get_entities()[0].getValue("istemplate")
                        .getValue("value");
                $A()
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
}

function $A() {
    var $v_0 = $5(false);
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        var $v_1 = null;
        Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
                $v_1 = $p1_0.entityCollection;
                if ($v_1.get_count() > 0) Mscrm.CampaignActivityVariables.$1 = true;
                else Mscrm.CampaignActivityVariables.$1 = false;
                if (!Mscrm.CampaignActivityVariables.$2) {
                    Xrm.Page.ui.refreshRibbon();
                    Mscrm.CampaignActivityVariables.$2 = true
                } else Mscrm.CampaignActivityVariables.$2 = false
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
}

function RefreshCampaignResponse() { Xrm.Internal.refreshParentGrid(4401, Xrm.Internal.getEntityName(4401), "") }

function locAssocObjCampaignActivity(type, subType, associationName, roleOrdinal, parentId, parentObjectTypeCode) {
    var $v_0 = $C(parentId, parentObjectTypeCode),
        $v_1 = new Xrm.LookupOptions,
        $v_2,
        $v_3 = Xrm.Internal.getEntityName(type);
    $v_2 = [$v_3];
    switch (type) {
    case 4300:
        var $v_4 = {};
        $v_1.lookupStyle = "multi";
        $v_1.lookupTypes = $v_2;
        $v_4["campaignActivityId"] = parentId;
        $v_1.additionalParams = $v_4;
        $v_1.showProperties = true;
        $v_1.disableViewPicker = true;
        $v_1.dataProviderOverride = "";
        $v_1.defaultViewId = "B4E49A57-0229-4087-837C-45E1BDD7DD38";
        Xrm.Internal.lookupObjects($v_1,
            function($p1_0) {
                var $v_5 = new Mscrm.LookupObjects;
                $v_5.items = $p1_0;
                $7($v_5, type, subType, associationName, roleOrdinal, $v_0)
            });
        break;
    default:
        $v_1.lookupStyle = "multi";
        $v_1.lookupTypes = $v_2;
        $v_1.dataProviderOverride = "";
        Xrm.Internal.lookupObjects($v_1,
            function($p1_0) {
                var $v_6 = new Mscrm.LookupObjects;
                $v_6.items = $p1_0;
                $7($v_6, type, subType, associationName, roleOrdinal, $v_0)
            });
        break
    }
}

function $7($p0, $p1, $p2, $p3, $p4, $p5) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        if ($p0.items.length > 0) {
            $p4 = Mscrm.InternalUtilities.JSTypes.isNull($p4) ? "-1" : $p4;
            for (var $v_0 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName($p5[1]),
                         new Microsoft.Crm.Client.Core.Framework.Guid($p5[0].toString())),
                $v_1 = 0;
                $v_1 < $p0.items.length;
                $v_1++) {
                var $v_2 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName($p1),
                    new Microsoft.Crm.Client.Core.Framework.Guid($p0.items[$v_1].id));
                if ($p4 === "2") {
                    var $v_3 = $v_0;
                    $v_0 = $v_2;
                    $v_2 = $v_3
                }
                Xrm.Internal.messages.addItemCampaignActivity($v_0.Id, $v_2.Id, $v_2.TypeName)
                    .then(function($p1_0) { Xrm.Internal.refreshParentGrid($p1, "", "") },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            }
        }
}

function $C($p0, $p1) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0) || Mscrm.InternalUtilities.JSTypes.isNull($p1))
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity)) {
            var $v_1 = Xrm.Page.data.entity.getEntityName();
            $p1 = Xrm.Internal.getEntityCode($v_1);
            $p0 = Xrm.Page.data.entity.getId()
        }
    var $v_0 = [$p0, $p1];
    return $v_0
}

function getCampaignActivityAction(channelTypeCode, isTemplate) {
    return $D($8(channelTypeCode, isTemplate), channelTypeCode)
}

function $D($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0)) return $p0;
    if (!$p1) $p0 = "nochannel";
    else if ($p1 === 4 || $p1 === 6 || $p1 === 8) $p0 = "invalidmailmergechannel";
    else $p0 = "invalidchannel";
    return $p0
}

function $8($p0, $p1) {
    var $v_0 = "";
    if (Xrm.Page.context.client.getClientState() === "Online" && !$p1)
        switch ($p0) {
        case 3:
            $v_0 = "listletter";
            break;
        case 7:
            $v_0 = "listemail";
            break;
        case 1:
            $v_0 = "listphone";
            break;
        case 5:
            $v_0 = "listfax";
            break;
        case 2:
            $v_0 = "listappointment";
            break;
        case 4:
            $v_0 = $4("letterviamailmerge");
            break;
        case 6:
            $v_0 = $4("faxviamailmerge");
            break;
        case 8:
            $v_0 = $4("emailviamailmerge");
            var $v_1 = false;
            if (Mscrm.InternalUtilities.Utilities.isTurboForm()) $v_1 = window.parent.IsMarketingExecutionEnabled;
            else $v_1 = window.IsMarketingExecutionEnabled;
            if (!$v_1) $v_0 = "emailviamailmergeoff";
            break;
        default:
            $v_0 = "";
            break
        }
    return $v_0
}

function $4($p0) {
    if (Xrm.Page.context.client.getClient() === "Outlook") return $p0;
    else return ""
}

function $9() {
    var $v_0 = "statecode", $v_1 = Xrm.Page.data.entity.attributes.get($v_0);
    if ($v_1) Mscrm.CampaignActivityVariables.$0 = $v_1.getValue();
    else
        Xrm.Internal.messages.retrieve("campaignactivity", Xrm.Page.data.entity.getId(), [$v_0]).then(function($p1_0) {
                var $v_2 = $p1_0.entity;
                if ($v_2.hasValue($v_0)) {
                    var $v_3 = $v_2.getValue($v_0).get_value();
                    Mscrm.CampaignActivityVariables.$0 = $v_3
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    return Mscrm.CampaignActivityVariables.$0
}

Mscrm.CampaignActivityVariables = function() {};
Mscrm.CampaignActivityVariables
    .get_isCampaignActivityTemplate = function() { return Mscrm.CampaignActivityVariables.$3 };
Mscrm.CampaignActivityVariables.set_isCampaignActivityTemplate = function(value) {
    Mscrm.CampaignActivityVariables.$3 = value;
    return value
};
Mscrm.CampaignActivityVariables
    .get_isCampaignActivityDistributed = function() { return Mscrm.CampaignActivityVariables.$1 };
Mscrm.CampaignActivityVariables.set_isCampaignActivityDistributed = function(value) {
    Mscrm.CampaignActivityVariables.$1 = value;
    return value
};
Mscrm.CampaignActivityVariables.get_isRefreshRibbon = function() { return Mscrm.CampaignActivityVariables.$2 };
Mscrm.CampaignActivityVariables.set_isRefreshRibbon = function(value) {
    Mscrm.CampaignActivityVariables.$2 = value;
    return value
};
Mscrm.CampaignActivityVariables.get_campaignActivityState = function() { return Mscrm.CampaignActivityVariables.$0 };
Mscrm.CampaignActivityVariables.set_campaignActivityState = function(value) {
    Mscrm.CampaignActivityVariables.$0 = value;
    return value
};
Mscrm.CampaignActivityVariables
    .get_regardingActivityPartyType = function() { return Mscrm.CampaignActivityVariables.$6 };
Mscrm.LookupObjects = function() {};
Mscrm.LookupObjects.prototype = { items: null };
Mscrm.CampaignActivityVariables.registerClass("Mscrm.CampaignActivityVariables");
Mscrm.LookupObjects.registerClass("Mscrm.LookupObjects");
Mscrm.CampaignActivityVariables.$3 = false;
Mscrm.CampaignActivityVariables.$1 = false;
Mscrm.CampaignActivityVariables.$2 = false;
Mscrm.CampaignActivityVariables.$0 = -1;
Mscrm.CampaignActivityVariables.$6 = 8