Type.registerNamespace("Xrm.Gen");
Type.registerNamespace("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated");
Xrm.Gen.AddDynamicPropertyRequestSerializer = function() {};
Xrm.Gen.AddDynamicPropertyRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObject", n.regardingObject, 6) +
            Xrm.Soap.Write.f("DynamicProperty", n.dynamicProperty, -1, "a:Entity")
    };
Xrm.Gen.AddDynamicPropertyRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.AddDynamicPropertyRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "RegardingObject"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "DynamicProperty"))
    };
Xrm.Gen.AddDynamicPropertyResponseSerializer = function() {};
Xrm.Gen.AddDynamicPropertyResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .AddDynamicPropertyResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "Id"),
                        Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "DynamicPropertyId"))
            })
    };
Xrm.Gen.AddItemCampaignActivityRequestSerializer = function() {};
Xrm.Gen.AddItemCampaignActivityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("CampaignActivityId", n.campaignActivityId, 15) +
            Xrm.Soap.Write.f("ItemId", n.itemId, 15) +
            Xrm.Soap.Write.f("EntityName", n.entityName, 14)
    };
Xrm.Gen.AddItemCampaignActivityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.AddItemCampaignActivityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CampaignActivityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ItemId"),
                Xrm.Soap.$5.$7(String, n, "EntityName"))
    };
Xrm.Gen.AddItemCampaignActivityResponseSerializer = function() {};
Xrm.Gen.AddItemCampaignActivityResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .AddItemCampaignActivityResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CampaignActivityItemId"))
            })
    };
Xrm.Gen.AddItemCampaignRequestSerializer = function() {};
Xrm.Gen.AddItemCampaignRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("CampaignId", n.campaignId, 15) +
            Xrm.Soap.Write.f("EntityId", n.entityId, 15) +
            Xrm.Soap.Write.f("EntityName", n.entityName, 14)
    };
Xrm.Gen.AddItemCampaignRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.AddItemCampaignRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CampaignId"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "EntityId"),
            Xrm.Soap.$5.$7(String, n, "EntityName"))
};
Xrm.Gen.AddItemCampaignResponseSerializer = function() {};
Xrm.Gen.AddItemCampaignResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.AddItemCampaignResponse(Xrm.Soap.$5
                    .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CampaignItemId"))
            })
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AddItemRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("AddItem",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer
            .$AZ);
        Xrm.Soap.Serializer.$Ab("AddItem",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer
            .$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("CampaignId", t.campaignId, 15) +
            Xrm.Soap.EntityRecordSerializer.$10E("EntityId", t.entityId, 15) +
            Xrm.Soap.EntityRecordSerializer.$10E("ObjectTypeCode", t.objectTypeCode, 5)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer
    .$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='CampaignId']/b:value"),
            f = $0.$1(t) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(t.get_$r()),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='EntityId']/b:value"),
            e = $0.$1(i) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(i.get_$r()),
            r = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ObjectTypeCode']/b:value/a:Value"),
            u;
        if ($0.$1(r)) throw Error.notImplemented();
        else u = parseInt(r.get_$r());
        return new Xrm.Sdk.AddItemRequest(f, e, u)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AddItemResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("AddItem",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer
            .$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer
    .$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                .$O(".//a:KeyValuePairOfstringanyType[b:key='CampaignItemId']/b:value"), r =
                $0.$1(i) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(i.get_$r()), new Xrm.Sdk
                .AddItemResponse(r))
            : null
    };
Xrm.Gen.AddOrEditLocationRequestSerializer = function() {};
Xrm.Gen.AddOrEditLocationRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("LocationName", n.locationName, 14) +
            Xrm.Soap.Write.f("AbsUrl", n.absUrl, 14) +
            Xrm.Soap.Write.f("RegardingObjectId", n.regardingObjectId, 14) +
            Xrm.Soap.Write.f("RelativePath", n.relativePath, 14) +
            Xrm.Soap.Write.f("RegardingObjType", n.regardingObjType, 5) +
            Xrm.Soap.Write.f("ParentType", n.parentType, 5) +
            Xrm.Soap.Write.f("ParentId", n.parentId, 14) +
            Xrm.Soap.Write.f("IsAddOrEditMode", n.isAddOrEditMode, 0) +
            Xrm.Soap.Write.f("IsCreateFolder", n.isCreateFolder, 0) +
            Xrm.Soap.Write.f("DocumentId", n.documentId, 14)
    };
Xrm.Gen.AddOrEditLocationRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.AddOrEditLocationRequest(Xrm.Soap.$5.$7(String, n, "LocationName"),
                Xrm.Soap.$5.$7(String, n, "AbsUrl"),
                Xrm.Soap.$5.$7(String, n, "RegardingObjectId"),
                Xrm.Soap.$5.$7(String, n, "RelativePath"),
                Xrm.Soap.$5.$7(Number, n, "RegardingObjType"),
                Xrm.Soap.$5.$7(Number, n, "ParentType"),
                Xrm.Soap.$5.$7(String, n, "ParentId"),
                Xrm.Soap.$5.$7(Boolean, n, "IsAddOrEditMode"),
                Xrm.Soap.$5.$7(Boolean, n, "IsCreateFolder"),
                Xrm.Soap.$5.$7(String, n, "DocumentId"))
    };
Xrm.Gen.AddOrEditLocationResponseSerializer = function() {};
Xrm.Gen.AddOrEditLocationResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.AddOrEditLocationResponse(Xrm.Soap.$5.$7(String, n, "LocationId")) })
    };
Xrm.Gen.AddRecurrenceRequestSerializer = function() {};
Xrm.Gen.AddRecurrenceRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Target", n.target, -1, "a:Entity") +
            Xrm.Soap.Write.f("AppointmentId", n.appointmentId, 15)
    };
Xrm.Gen.AddRecurrenceRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.AddRecurrenceRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord,
                n,
                "Target"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "AppointmentId"))
};
Xrm.Gen.AddRecurrenceResponseSerializer = function() {};
Xrm.Gen.AddRecurrenceResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.AddRecurrenceResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "id"))
        })
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AddToQueueRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("AddToQueue",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .AddToQueueRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("AddToQueue",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .AddToQueueRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Target", t.target, 6) +
            Xrm.Soap.EntityRecordSerializer.$10E("SourceQueueId", t.sourceQueueId, 15) +
            Xrm.Soap.EntityRecordSerializer.$10E("DestinationQueueId", t.destinationQueueId, 15) +
            Xrm.Soap.EntityRecordSerializer.$10E("QueueItemProperties", t.queueItemProperties, -1, "a:Entity")
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer
    .$4S = function(n) {
        var i;
        if ($0.$1(n)) return null;
        var r = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Target']/b:value"),
            o = $0.$1(r) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(r),
            u = n.$O(".//a:KeyValuePairOfstringanyType[b:key='SourceQueueId']/b:value"),
            s = $0.$1(u) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(u.get_$r()),
            f = n.$O(".//a:KeyValuePairOfstringanyType[b:key='DestinationQueueId']/b:value"),
            h = $0.$1(f) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(f.get_$r()),
            e = null,
            t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='QueueItemProperties']/b:value");
        return $0.$1(t) ||
            (i = t.$O("entity"), $0.$1(i) || (t = i), e = Xrm.Soap.EntityRecordSerializer.loadFromCrmSoap(t)), new Xrm
            .Sdk.AddToQueueRequest(o, s, h, e)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AssociateKnowledgeArticleRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AssociateKnowledgeArticleRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("AssociateKnowledgeArticle",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .AssociateKnowledgeArticleRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("AssociateKnowledgeArticle",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .AssociateKnowledgeArticleRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AssociateKnowledgeArticleRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("RegardingObjectId", t.regardingObjectId, 15) +
            Xrm.Soap.EntityRecordSerializer.$10E("RegardingObjectTypeCode", t.regardingObjectTypeCode, 5) +
            Xrm.Soap.EntityRecordSerializer.$10E("AssociationRelationshipName", t.associationRelationshipName, 14) +
            Xrm.Soap.EntityRecordSerializer.$10E("KnowledgeArticleId", t.knowledgeArticleId, 15)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AssociateKnowledgeArticleRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='RegardingObjectId']/b:value"),
            e = $0.$1(t) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(t.get_$r()),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='RegardingObjectTypeCode']/b:value"),
            r;
        if ($0.$1(i)) throw Error.notImplemented();
        else r = parseInt(i.get_$r());
        var u = n.$O(".//a:KeyValuePairOfstringanyType[b:key='AssociationRelationshipName']/b:value"),
            o = $0.$1(u) ? null : u.get_$r(),
            f = n.$O(".//a:KeyValuePairOfstringanyType[b:key='KnowledgeArticleId']/b:value"),
            s = $0.$1(f) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(f.get_$r());
        return new Xrm.Sdk.AssociateKnowledgeArticleRequest(e, r, o, s)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .DisassociateKnowledgeArticleRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .DisassociateKnowledgeArticleRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("DisassociateKnowledgeArticle",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .DisassociateKnowledgeArticleRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("DisassociateKnowledgeArticle",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .DisassociateKnowledgeArticleRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .DisassociateKnowledgeArticleRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("RegardingObjectId", t.regardingObjectId, 15) +
            Xrm.Soap.EntityRecordSerializer.$10E("RegardingObjectTypeCode", t.regardingObjectTypeCode, 5) +
            Xrm.Soap.EntityRecordSerializer.$10E("AssociationRelationshipName", t.associationRelationshipName, 14) +
            Xrm.Soap.EntityRecordSerializer.$10E("KnowledgeArticleId", t.knowledgeArticleId, 15)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .DisassociateKnowledgeArticleRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='RegardingObjectId']/b:value"),
            e = $0.$1(t) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(t.get_$r()),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='RegardingObjectTypeCode']/b:value"),
            r;
        if ($0.$1(i)) throw Error.notImplemented();
        else r = parseInt(i.get_$r());
        var u = n.$O(".//a:KeyValuePairOfstringanyType[b:key='AssociationRelationshipName']/b:value"),
            o = $0.$1(u) ? null : u.get_$r(),
            f = n.$O(".//a:KeyValuePairOfstringanyType[b:key='KnowledgeArticleId']/b:value"),
            s = $0.$1(f) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(f.get_$r());
        return new Xrm.Sdk.DisassociateKnowledgeArticleRequest(e, r, o, s)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AddToQueueResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("AddToQueue",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .AddToQueueResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer
    .$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                .$O(".//a:KeyValuePairOfstringanyType[b:key='QueueItemId']/b:value"), r =
                $0.$1(i) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(i.get_$r()), new Xrm.Sdk
                .AddToQueueResponse(r))
            : null
    };
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer = function() {};
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Target", n.target, 6) };
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .ApplyRecordCreationAndUpdateRuleRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"))
    };
Xrm.Gen.AssignAllRecordsTeamRequestSerializer = function() {};
Xrm.Gen.AssignAllRecordsTeamRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OldOwnerId", n.oldOwnerId, 15) +
            Xrm.Soap.Write.f("OldOwnerType", n.oldOwnerType, 5) +
            Xrm.Soap.Write.f("NewOwnerId", n.newOwnerId, 15) +
            Xrm.Soap.Write.f("NewOwnerType", n.newOwnerType, 5)
    };
Xrm.Gen.AssignAllRecordsTeamRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.AssignAllRecordsTeamRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OldOwnerId"),
                Xrm.Soap.$5.$7(Number, n, "OldOwnerType"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "NewOwnerId"),
                Xrm.Soap.$5.$7(Number, n, "NewOwnerType"))
    };
Xrm.Gen.AssignRequestSerializer = function() {};
Xrm.Gen.AssignRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, 6) + Xrm.Soap.Write.f("Assignee", n.assignee, 6)
};
Xrm.Gen.AssignRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.AssignRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
            Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Assignee"))
};
Xrm.Gen.AssociateRequestSerializer = function() {};
Xrm.Gen.AssociateRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, 6) +
        Xrm.Soap.Write.f("Relationship", n.relationship, -1, "a:Relationship") +
        Xrm.Soap.Write.f("RelatedEntities", n.relatedEntities, -1, "a:EntityReferenceCollection")
};
Xrm.Gen.AssociateRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.AssociateRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, n, "Relationship"),
            Xrm.Soap.$5.$7(Array, n, "RelatedEntities", "EntityReferenceArray"))
};
Xrm.Gen.BestTimeToEmailRequestSerializer = function() {};
Xrm.Gen.BestTimeToEmailRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityReferenceCollection",
            n.entityReferenceCollection,
            -1,
            "a:EntityReferenceCollection")
    };
Xrm.Gen.BestTimeToEmailRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.BestTimeToEmailRequest(Xrm.Soap.$5.$7(Array,
            n,
            "EntityReferenceCollection",
            "EntityReferenceArray"))
};
Xrm.Gen.BestTimeToEmailResponseSerializer = function() {};
Xrm.Gen.BestTimeToEmailResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.BestTimeToEmailResponse(Xrm.Soap.$5.$7(Date, n, "PreferredTime")) })
    };
Xrm.Gen.BookRequestSerializer = function() {};
Xrm.Gen.BookRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, -1, "a:Entity") +
        Xrm.Soap.Write.f("MaintainLegacyAppServerBehavior", n.maintainLegacyAppServerBehavior, 0) +
        Xrm.Soap.Write.f("ReturnNotifications", n.returnNotifications, 0)
};
Xrm.Gen.BookRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.BookRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                n,
                "Target"),
            Xrm.Soap.$5.$7(Boolean, n, "MaintainLegacyAppServerBehavior"),
            Xrm.Soap.$5.$7(Boolean, n, "ReturnNotifications"))
};
Xrm.Gen.BookResponseSerializer = function() {};
Xrm.Gen.BookResponseSerializer.loadFromCrmSoap = function(n) {
    var t;
    if (!$0.$1(n) &&
    (Xrm.Soap.$N.$D3(n), t = null, n.$3J("b", "http://schemas.microsoft.com/crm/2011/Contracts"), n
        .$3J("c", "http://schemas.datacontract.org/2004/07/System.Collections.Generic"), t = n.$O(".//a:Results"), !$0
        .$1(t))) {
        var i = t.$O(".//a:KeyValuePairOfstringanyType[c:key='ValidationResult']/c:value"),
            u = $0.$1(i) ? null : Xrm.Soap.ValidationResultSerializer.loadFromCrmSoap(i),
            r = t.$O(".//a:KeyValuePairOfstringanyType[c:key='Notifications']/c:value"),
            f = $0.$1(r) ? null : Xrm.Soap.BusinessNotificationArraySerializer.loadFromCrmSoap(r);
        return new Xrm.Gen.BookResponse(u, f)
    }
    return null
};
Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer = function() {};
Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("TargetEntityName", n.targetEntityName, 14) +
            Xrm.Soap.Write.f("ImportSequenceNumber", n.importSequenceNumber, 5) +
            Xrm.Soap.Write.f("ImportId", n.importId, 15) +
            Xrm.Soap.Write.f("DeleteImportHistory", n.deleteImportHistory, 0) +
            Xrm.Soap.Write.f("JobName", n.jobName, 14) +
            Xrm.Soap.Write.f("SendEmailNotification", n.sendEmailNotification, 0) +
            Xrm.Soap.Write.f("ToRecipients", n.toRecipients, 14) +
            Xrm.Soap.Write.f("CCRecipients", n.ccRecipients, 14) +
            Xrm.Soap.Write.f("RecurrencePattern", n.recurrencePattern, 14) +
            Xrm.Soap.Write.f("SourceImportId", n.sourceImportId, 15)
    };
Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.BulkDeleteImportedRecordsRequest(Xrm.Soap.$5.$7(String, n, "TargetEntityName"),
                Xrm.Soap.$5.$7(Number, n, "ImportSequenceNumber"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ImportId"),
                Xrm.Soap.$5.$7(Boolean, n, "DeleteImportHistory"),
                Xrm.Soap.$5.$7(String, n, "JobName"),
                Xrm.Soap.$5.$7(Boolean, n, "SendEmailNotification"),
                Xrm.Soap.$5.$7(String, n, "ToRecipients"),
                Xrm.Soap.$5.$7(String, n, "CCRecipients"),
                Xrm.Soap.$5.$7(String, n, "RecurrencePattern"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "SourceImportId"))
    };
Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer = function() {};
Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .BulkDeleteImportedRecordsResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "JobId"))
            })
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("CalculateActualValueOpportunity",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CalculateActualValueOpportunityRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("CalculateActualValueOpportunity",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CalculateActualValueOpportunityRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("OpportunityId", t.opportunityId, 15)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='OpportunityId']/b:value"),
            i = $0.$1(t) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(t.get_$r());
        return new Xrm.Sdk.CalculateActualValueOpportunityRequest(i)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("CalculateActualValueOpportunity",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CalculateActualValueOpportunityResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityResponseSerializer.$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                .$O(".//a:KeyValuePairOfstringanyType[b:key='Value']/b:value"), r =
                $0.$1(i) ? 0 : parseFloat(i.get_$r()), new Xrm.Sdk.CalculateActualValueOpportunityResponse(r))
            : null
    };
Xrm.Gen.CalculateRollupFieldRequestSerializer = function() {};
Xrm.Gen.CalculateRollupFieldRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Target", n.target, 6) + Xrm.Soap.Write.f("FieldName", n.fieldName, 14)
    };
Xrm.Gen.CalculateRollupFieldRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CalculateRollupFieldRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
                Xrm.Soap.$5.$7(String, n, "FieldName"))
    };
Xrm.Gen.CalculateRollupFieldResponseSerializer = function() {};
Xrm.Gen.CalculateRollupFieldResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .CalculateRollupFieldResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.CancelSalesOrderRequestSerializer = function() {};
Xrm.Gen.CancelSalesOrderRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OrderClose", n.orderClose, -1, "a:Entity") + Xrm.Soap.Write.f("Status", n.status, 11)
    };
Xrm.Gen.CancelSalesOrderRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CancelSalesOrderRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "OrderClose"),
                Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
    };
Xrm.Gen.CancelContractRequestSerializer = function() {};
Xrm.Gen.CancelContractRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ContractId", n.$1jp, 15) +
            Xrm.Soap.Write.f("CancelDate", n.$1ie, 2) +
            Xrm.Soap.Write.f("Status", n.$Fq, 11)
    };
Xrm.Gen.CancelContractRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CancelContractRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ContractId"),
            Xrm.Soap.$5.$7(Date, n, "CancelDate"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
};
Xrm.Gen.CanUserSendEmailRequestSerializer = function() {};
Xrm.Gen.CanUserSendEmailRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.CanUserSendEmailRequestSerializer
    .loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.CanUserSendEmailRequest };
Xrm.Gen.CanUserSendEmailResponseSerializer = function() {};
Xrm.Gen.CanUserSendEmailResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.CanUserSendEmailResponse(Xrm.Soap.$5.$7(Boolean, n, "HasPrivileges")) })
    };
Xrm.Gen.CheckInDocumentRequestSerializer = function() {};
Xrm.Gen.CheckInDocumentRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Entity", n.entity, -1, "a:Entity") +
            Xrm.Soap.Write.f("CheckInComments", n.checkInComments, 14) +
            Xrm.Soap.Write.f("RetainCheckout", n.retainCheckout, 0)
    };
Xrm.Gen.CheckInDocumentRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CheckInDocumentRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord,
                n,
                "Entity"),
            Xrm.Soap.$5.$7(String, n, "CheckInComments"),
            Xrm.Soap.$5.$7(Boolean, n, "RetainCheckout"))
};
Xrm.Gen.CheckoutDocumentRequestSerializer = function() {};
Xrm.Gen.CheckoutDocumentRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Entity", n.entity, -1, "a:Entity") };
Xrm.Gen.CheckoutDocumentRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CheckoutDocumentRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
    };
Xrm.Gen.CloneContractRequestSerializer = function() {};
Xrm.Gen.CloneContractRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ContractId", n.contractId, 15) +
            Xrm.Soap.Write.f("IncludeCanceledLines", n.includeCanceledLines, 0)
    };
Xrm.Gen.CloneContractRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CloneContractRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ContractId"),
            Xrm.Soap.$5.$7(Boolean, n, "IncludeCanceledLines"))
};
Xrm.Gen.CloneContractResponseSerializer = function() {};
Xrm.Gen.CloneContractResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.CloneContractResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
        })
};
Xrm.Gen.CloneProductRequestSerializer = function() {};
Xrm.Gen.CloneProductRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Source", n.source, 6) };
Xrm.Gen.CloneProductRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n) ? null : new Xrm.Gen.CloneProductRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Source"))
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("CloneMobileOfflineProfile",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CloneMobileOfflineProfileRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("CloneMobileOfflineProfile",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CloneMobileOfflineProfileRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Source", t.source, 6)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Source']/b:value"),
            i = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t);
        return new Xrm.Gen.CloneMobileOfflineProfileRequest(i)
    };
Xrm.Gen.CloneProductResponseSerializer = function() {};
Xrm.Gen.CloneProductResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.CloneProductResponse(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "ClonedProduct"))
        })
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileResponseSerializer.$$cctor = function() {
        Xrm.Soap.$N.$5s("CloneMobileOfflineProfile",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CloneMobileOfflineProfileResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileResponseSerializer.$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                .$O(".//a:KeyValuePairOfstringanyType[b:key='CloneMobileOfflineProfile']/b:value"), r =
                $0.$1(i) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(i), new Xrm.Gen
                .CloneMobileOfflineProfileResponse(r))
            : null
    };
Xrm.Gen.CloseIncidentRequestSerializer = function() {};
Xrm.Gen.CloseIncidentRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("IncidentResolution", n.incidentResolution, -1, "a:Entity") +
            Xrm.Soap.Write.f("Status", n.status, 11)
    };
Xrm.Gen.CloseIncidentRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CloseIncidentRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord,
                n,
                "IncidentResolution"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
};
Xrm.Gen.CloseQuoteRequestSerializer = function() {};
Xrm.Gen.CloseQuoteRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("QuoteClose", n.quoteClose, -1, "a:Entity") + Xrm.Soap.Write.f("Status", n.status, 11)
};
Xrm.Gen.CloseQuoteRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CloseQuoteRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord,
                n,
                "QuoteClose"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
};
Xrm.Gen.ConvertActivityRequestSerializer = function() {};
Xrm.Gen.ConvertActivityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ActivityId", n.activityId, 15) +
            Xrm.Soap.Write.f("ActivityEntityName", n.activityEntityName, 14) +
            Xrm.Soap.Write.f("TargetEntity", n.targetEntity, -1, "a:Entity") +
            Xrm.Soap.Write.f("TargetEntityName", n.targetEntityName, 14) +
            Xrm.Soap.Write.f("CreateCampaignResponse", n.createCampaignResponse, 0)
    };
Xrm.Gen.ConvertActivityRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.ConvertActivityRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ActivityId"),
            Xrm.Soap.$5.$7(String, n, "ActivityEntityName"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "TargetEntity"),
            Xrm.Soap.$5.$7(String, n, "TargetEntityName"),
            Xrm.Soap.$5.$7(Boolean, n, "CreateCampaignResponse"))
};
Xrm.Gen.ConvertActivityResponseSerializer = function() {};
Xrm.Gen.ConvertActivityResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.ConvertActivityResponse(Xrm.Soap.$5
                    .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "RecordId"))
            })
    };
Xrm.Gen.ConvertCampaignResponseRequestSerializer = function() {};
Xrm.Gen.ConvertCampaignResponseRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("CampaignResponse", n.campaignResponse, 6) +
            Xrm.Soap.Write.f("EntityName", n.entityName, 14) +
            Xrm.Soap.Write.f("CreateOpportunityForExistingCustomer", n.createOpportunityForExistingCustomer, 0) +
            Xrm.Soap.Write.f("Customer", n.customer, 6) +
            Xrm.Soap.Write.f("Currency", n.currency, 6) +
            Xrm.Soap.Write.f("Owner", n.owner, 6)
    };
Xrm.Gen.ConvertCampaignResponseRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.ConvertCampaignResponseRequest(Xrm.Soap.$5
                .$7(Xrm.Objects.EntityReference, n, "CampaignResponse"),
                Xrm.Soap.$5.$7(String, n, "EntityName"),
                Xrm.Soap.$5.$7(Boolean, n, "CreateOpportunityForExistingCustomer"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Customer"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Currency"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Owner"))
    };
Xrm.Gen.ConvertCampaignResponseResponseSerializer = function() {};
Xrm.Gen.ConvertCampaignResponseResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .ConvertCampaignResponseResponse(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "EntityReference"))
            })
    };
Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer = function() {};
Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("QuoteId", n.quoteId, 15) +
            Xrm.Soap.Write.f("ColumnSet", n.columnSet, -1, "a:ColumnSet") +
            Xrm.Soap.Write.f("QuoteCloseDate", n.quoteCloseDate, 2) +
            Xrm.Soap.Write.f("QuoteCloseStatus", n.quoteCloseStatus, 11) +
            Xrm.Soap.Write.f("QuoteCloseSubject", n.quoteCloseSubject, 14) +
            Xrm.Soap.Write.f("QuoteCloseDescription", n.quoteCloseDescription, 14) +
            Xrm.Soap.Write.f("ProcessInstanceId", n.processInstanceId, 6)
    };
Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.ConvertQuoteToSalesOrderRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QuoteId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.$4s, n, "ColumnSet", "ColumnSet"),
                Xrm.Soap.$5.$7(Date, n, "QuoteCloseDate"),
                Xrm.Soap.$5.$7(Number, n, "QuoteCloseStatus", "OptionSet"),
                Xrm.Soap.$5.$7(String, n, "QuoteCloseSubject"),
                Xrm.Soap.$5.$7(String, n, "QuoteCloseDescription"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "ProcessInstanceId"))
    };
Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer = function() {};
Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .ConvertQuoteToSalesOrderResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer = function() {};
Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("SalesOrderId", n.salesOrderId, 15) +
            Xrm.Soap.Write.f("ColumnSet", n.columnSet, -1, "a:ColumnSet")
    };
Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.ConvertSalesOrderToInvoiceRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "SalesOrderId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.$4s, n, "ColumnSet", "ColumnSet"))
    };
Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer = function() {};
Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .ConvertSalesOrderToInvoiceResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.CopyCampaignRequestSerializer = function() {};
Xrm.Gen.CopyCampaignRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("BaseCampaign", n.baseCampaign, 15) +
            Xrm.Soap.Write.f("SaveAsTemplate", n.saveAsTemplate, 0)
    };
Xrm.Gen.CopyCampaignRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CopyCampaignRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "BaseCampaign"),
            Xrm.Soap.$5.$7(Boolean, n, "SaveAsTemplate"))
};
Xrm.Gen.CopyCampaignResponseRequestSerializer = function() {};
Xrm.Gen.CopyCampaignResponseRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("CampaignResponseId", n.campaignResponseId, 6) };
Xrm.Gen.CopyCampaignResponseRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CopyCampaignResponseRequest(Xrm.Soap.$5
                .$7(Xrm.Objects.EntityReference, n, "CampaignResponseId"))
    };
Xrm.Gen.CopyCampaignResponseResponseSerializer = function() {};
Xrm.Gen.CopyCampaignResponseResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .CopyCampaignResponseResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CampaignResponseId"))
            })
    };
Xrm.Gen.CopyCampaignResponseSerializer = function() {};
Xrm.Gen.CopyCampaignResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.CopyCampaignResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CampaignCopyId"))
        })
};
Xrm.Gen.CopyDynamicListToStaticRequestSerializer = function() {};
Xrm.Gen.CopyDynamicListToStaticRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("ListId", n.listId, 15) };
Xrm.Gen.CopyDynamicListToStaticRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CopyDynamicListToStaticRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ListId"))
    };
Xrm.Gen.CopyDynamicListToStaticResponseSerializer = function() {};
Xrm.Gen.CopyDynamicListToStaticResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .CopyDynamicListToStaticResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "StaticListId"))
            })
    };
Xrm.Gen.CreateAndAssociateRequestSerializer = function() {};
Xrm.Gen.CreateAndAssociateRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObjectId", n.regardingObjectId, 15) +
            Xrm.Soap.Write.f("RegardingObjectTypeCode", n.regardingObjectTypeCode, 5) +
            Xrm.Soap.Write.f("AssociationRelationshipName", n.associationRelationshipName, 14) +
            Xrm.Soap.Write.f("Article", n.article, -1, "a:Entity")
    };
Xrm.Gen.CreateAndAssociateRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CreateAndAssociateRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "RegardingObjectId"),
                Xrm.Soap.$5.$7(Number, n, "RegardingObjectTypeCode"),
                Xrm.Soap.$5.$7(String, n, "AssociationRelationshipName"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Article"))
    };
Xrm.Gen.CreateDocumentLibrariesRequestSerializer = function() {};
Xrm.Gen.CreateDocumentLibrariesRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("DocumentLibraryNames", n.documentLibraryNames, 14) + Xrm.Soap.Write.f("Url", n.url, 14)
    };
Xrm.Gen.CreateDocumentLibrariesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CreateDocumentLibrariesRequest(Xrm.Soap.$5.$7(String, n, "DocumentLibraryNames"),
                Xrm.Soap.$5.$7(String, n, "Url"))
    };
Xrm.Gen.CreateDocumentLibrariesResponseSerializer = function() {};
Xrm.Gen.CreateDocumentLibrariesResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.CreateDocumentLibrariesResponse(Xrm.Soap.$5.$7(String, n, "DocumentLibraryResult"))
            })
    };
Xrm.Gen.CreateFolderRequestSerializer = function() {};
Xrm.Gen.CreateFolderRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("FolderName", n.folderName, 14) +
            Xrm.Soap.Write.f("RegardingObjectType", n.regardingObjectType, 5) +
            Xrm.Soap.Write.f("RegardingObjectId", n.regardingObjectId, 14) +
            Xrm.Soap.Write.f("DocumentType", n.documentType, 5) +
            Xrm.Soap.Write.f("ParentLocationId", n.parentLocationId, 14) +
            Xrm.Soap.Write.f("SiteType", n.siteType, 5) +
            Xrm.Soap.Write.f("ValidateFolder", n.validateFolder, 0)
    };
Xrm.Gen.CreateFolderRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CreateFolderRequest(Xrm.Soap.$5.$7(String, n, "FolderName"),
            Xrm.Soap.$5.$7(Number, n, "RegardingObjectType"),
            Xrm.Soap.$5.$7(String, n, "RegardingObjectId"),
            Xrm.Soap.$5.$7(Number, n, "DocumentType"),
            Xrm.Soap.$5.$7(String, n, "ParentLocationId"),
            Xrm.Soap.$5.$7(Number, n, "SiteType"),
            Xrm.Soap.$5.$7(Boolean, n, "ValidateFolder"))
};
Xrm.Gen.CreateFolderResponseSerializer = function() {};
Xrm.Gen.CreateFolderResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.CreateFolderResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "LocationId"))
        })
};
Xrm.Gen.CreateProductsRequestSerializer = function() {};
Xrm.Gen.CreateProductsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Entities", n.entities, -1, "a:EntityCollection") +
            Xrm.Soap.Write.f("ParentEntity", n.parentEntity, -1, "a:Entity")
    };
Xrm.Gen.CreateProductsRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CreateProductsRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityCollection,
                n,
                "Entities"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "ParentEntity"))
};
Xrm.Gen.CreateProductsResponseSerializer = function() {};
Xrm.Gen.CreateProductsResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.CreateProductsResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, n, "EntityCollection"))
        })
};
Xrm.Gen.CreateRequestSerializer = function() {};
Xrm.Gen.CreateRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, -1, "a:Entity") +
        Xrm.Soap.Write.f("SuppressDuplicateDetection", n.suppressDuplicateDetection, 0) +
        Xrm.Soap.Write.f("CalculateMatchCodeSynchronously", n.calculateMatchCodeSynchronously, 0) +
        Xrm.Soap.Write.f("SolutionUniqueName", n.solutionUniqueName, 14) +
        Xrm.Soap.Write.f("MaintainLegacyAppServerBehavior", n.maintainLegacyAppServerBehavior, 0) +
        Xrm.Soap.Write.f("ReturnRowVersion", n.returnRowVersion, 0)
};
Xrm.Gen.CreateRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.CreateRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                n,
                "Target"),
            Xrm.Soap.$5.$7(Boolean, n, "SuppressDuplicateDetection"),
            Xrm.Soap.$5.$7(Boolean, n, "CalculateMatchCodeSynchronously"),
            Xrm.Soap.$5.$7(String, n, "SolutionUniqueName"),
            Xrm.Soap.$5.$7(Boolean, n, "MaintainLegacyAppServerBehavior"),
            Xrm.Soap.$5.$7(Boolean, n, "ReturnRowVersion"))
};
Xrm.Gen.CreateResponseSerializer = function() {};
Xrm.Gen.CreateResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.CreateResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "id"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "EntityReference"))
        })
};
Xrm.Gen.DeleteDocumentRequestSerializer = function() {};
Xrm.Gen.DeleteDocumentRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Entities", n.entities, -1, "a:EntityCollection") };
Xrm.Gen.DeleteDocumentRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.DeleteDocumentRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityCollection,
            n,
            "Entities"))
};
Xrm.Gen.DeleteOpenInstancesRequestSerializer = function() {};
Xrm.Gen.DeleteOpenInstancesRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Target", n.target, -1, "a:Entity") +
            Xrm.Soap.Write.f("SeriesEndDate", n.seriesEndDate, 2) +
            Xrm.Soap.Write.f("StateOfPastInstances", n.stateOfPastInstances, 5)
    };
Xrm.Gen.DeleteOpenInstancesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.DeleteOpenInstancesRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Target"),
                Xrm.Soap.$5.$7(Date, n, "SeriesEndDate"),
                Xrm.Soap.$5.$7(Number, n, "StateOfPastInstances"))
    };
Xrm.Gen.DeleteRequestSerializer = function() {};
Xrm.Gen.DeleteRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, 6) +
        Xrm.Soap.Write.f("SolutionUniqueName", n.solutionUniqueName, 14) +
        Xrm.Soap.Write.f("ConcurrencyBehavior",
            n.concurrencyBehavior,
            -1,
            "c:ConcurrencyBehavior",
            'xmlns:c="http://schemas.microsoft.com/xrm/7.1/Contracts"')
};
Xrm.Gen.DeleteRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.DeleteRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
            Xrm.Soap.$5.$7(String, n, "SolutionUniqueName"),
            Xrm.Soap.$5.$7(Xrm.Gen.$7I, n, "ConcurrencyBehavior", "Enum"))
};
Xrm.Gen.DisassociateRequestSerializer = function() {};
Xrm.Gen.DisassociateRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Target", n.target, 6) +
            Xrm.Soap.Write.f("Relationship", n.relationship, -1, "a:Relationship") +
            Xrm.Soap.Write.f("RelatedEntities", n.relatedEntities, -1, "a:EntityReferenceCollection")
    };
Xrm.Gen.DisassociateRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.DisassociateRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship, n, "Relationship"),
            Xrm.Soap.$5.$7(Array, n, "RelatedEntities", "EntityReferenceArray"))
};
Xrm.Gen.DiscardDocumentCheckoutRequestSerializer = function() {};
Xrm.Gen.DiscardDocumentCheckoutRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Entity", n.entity, -1, "a:Entity") };
Xrm.Gen.DiscardDocumentCheckoutRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.DiscardDocumentCheckoutRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
    };
Xrm.Gen.EditDocumentPropertiesRequestSerializer = function() {};
Xrm.Gen.EditDocumentPropertiesRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Entity", n.entity, -1, "a:Entity") };
Xrm.Gen.EditDocumentPropertiesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.EditDocumentPropertiesRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
    };
Xrm.Gen.ExecuteMultipleRequestSerializer = function() {};
Xrm.Gen.ExecuteMultipleRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.$5s("ExecuteMultiple", Xrm.Gen.ExecuteMultipleRequestSerializer.$AZ);
    Xrm.Soap.Serializer.$Ab("ExecuteMultiple", Xrm.Gen.ExecuteMultipleRequestSerializer.$4S)
};
Xrm.Gen.ExecuteMultipleRequestSerializer.$AZ = function(n) {
    var t = n;
    return Xrm.Soap.EntityRecordSerializer.$10E("Requests",
            t.requests,
            -1,
            "c:OrganizationRequestCollection",
            'xmlns:c="http://schemas.microsoft.com/xrm/2012/Contracts"') +
        Xrm.Soap.EntityRecordSerializer.$10E("Settings",
            t.settings,
            -1,
            "c:ExecuteMultipleSettings",
            'xmlns:c="http://schemas.microsoft.com/xrm/2012/Contracts"')
};
Xrm.Gen.ExecuteMultipleRequestSerializer.$4S = function(n) {
    if ($0.$1(n)) return null;
    var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Requests']/b:value"),
        r = $0.$1(t) ? null : Xrm.Soap.OrganizationRequestCollectionSerializer.$4S(t),
        i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Settings']/b:value"),
        u = $0.$1(i) ? null : Xrm.Soap.ExecuteMultipleSettingsSerializer.loadFromCrmSoap(i);
    return new Xrm.Gen.ExecuteMultipleRequest(r, u)
};
Xrm.Gen.ExecuteMultipleResponseSerializer = function() {};
Xrm.Gen.ExecuteMultipleResponseSerializer.$$cctor = function() {
    Xrm.Soap.$N.$5s("ExecuteMultiple", Xrm.Gen.ExecuteMultipleResponseSerializer.$4S)
};
Xrm.Gen.ExecuteMultipleResponseSerializer.$4S = function(n, t) {
    var i, r, f, u, e;
    if (!$0.$1(n) && (Xrm.Soap.$N.$D3(n), i = null, i = n.$O(".//a:Results"), !$0.$1(i))) {
        if (r = i.$O(".//a:KeyValuePairOfstringanyType[b:key='IsFaulted']/b:value"), $0
            .$1(r)) throw Error.notImplemented();
        else f = Boolean.parse(r.get_$r());
        return u = i
            .$O(".//a:KeyValuePairOfstringanyType[b:key='Responses']/b:value"), e =
            $0.$1(u) ? null : Xrm.Soap.ExecuteMultipleResponseItemCollectionSerializer.$4S(u, t), new Xrm.Gen
            .ExecuteMultipleResponse(f, e)
    }
    return null
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ExecuteQuickFindRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("ExecuteQuickFind",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ExecuteQuickFindRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("ExecuteQuickFind",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ExecuteQuickFindRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("SearchText", t.searchText, 14) +
            Xrm.Soap.EntityRecordSerializer.$10E("EntityGroupName", t.entityGroupName, 14) +
            Xrm.Soap.EntityRecordSerializer.$10E("EntityNames",
                t.entityNames,
                -1,
                "sa:ArrayOfstring",
                'xmlns:sa="http://schemas.microsoft.com/2003/10/Serialization/Arrays"')
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer
    .$4S = function(n) {
        var t;
        if ($0.$1(n)) return null;
        var u = n.$O(".//a:KeyValuePairOfstringanyType[b:key='SearchText']/b:value"),
            e = $0.$1(u) ? null : u.get_$r(),
            f = n.$O(".//a:KeyValuePairOfstringanyType[b:key='EntityGroupName']/b:value"),
            o = $0.$1(f) ? null : f.get_$r(),
            i = n.$5k(".//a:KeyValuePairOfstringanyType[b:key='EntityNames']/b:value/sa:string"),
            r = null;
        if (!$0.$1(i)) for (r = new Array(i.get_$l()), t = 0; t < i.get_$l(); t++) r[t] = i.get_$H(t).get_$r();
        return new Xrm.Sdk.ExecuteQuickFindRequest(e, o, r)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ExecuteQuickFindResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("ExecuteQuickFind",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ExecuteQuickFindResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer
    .$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) &&
            (Xrm.Soap.$N.$D3(n), n.$3J("c", "http://schemas.datacontract.org/2004/07/System.Collections.Generic"), t = n
                .$O(".//a:Results"), !$0.$1(t) &&
            (i = t
                .$O(".//a:KeyValuePairOfstringanyType[c:key='Result']/c:value[@i:type='a:QuickFindResultCollection']"),
            !$0
                .$1(i)))
            ? (r = Xrm.Soap.QuickFindResultCollectionSerializer.loadFromCrmSoap(i), new Xrm.Sdk
                .ExecuteQuickFindResponse(r))
            : null
    };
Xrm.Gen.ExecuteWorkflowRequestSerializer = function() {};
Xrm.Gen.ExecuteWorkflowRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityId", n.entityId, 15) +
            Xrm.Soap.Write.f("WorkflowId", n.workflowId, 15) +
            Xrm.Soap.Write.f("InputArguments",
                n.inputArguments,
                -1,
                "c:InputArgumentCollection",
                'xmlns:c="http://schemas.microsoft.com/crm/2011/Contracts"')
    };
Xrm.Gen.ExecuteWorkflowRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.ExecuteWorkflowRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "EntityId"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "WorkflowId"),
            Xrm.Soap.$5.$7(Object, n, "InputArguments", "InputArgumentCollection"))
};
Xrm.Gen.ExecuteWorkflowResponseSerializer = function() {};
Xrm.Gen.ExecuteWorkflowResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.ExecuteWorkflowResponse(Xrm.Soap.$5
                    .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "Id"))
            })
    };
Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer = function() {};
Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Template", n.template, 6) +
            Xrm.Soap.Write.f("FetchXml", n.fetchXml, 14) +
            Xrm.Soap.Write.f("QueryApi", n.queryApi, 14) +
            Xrm.Soap.Write.f("QueryParameters",
                n.queryParameters,
                -1,
                "c:InputArgumentCollection",
                'xmlns:c="http://schemas.microsoft.com/crm/2011/Contracts"')
    };
Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .ExportTemplateToExcelOnlineRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Template"),
                Xrm.Soap.$5.$7(String, n, "FetchXml"),
                Xrm.Soap.$5.$7(String, n, "QueryApi"),
                Xrm.Soap.$5.$7(Object, n, "QueryParameters", "InputArgumentCollection"))
    };
Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer = function() {};
Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.ExportTemplateToExcelOnlineResponse(Xrm.Soap.$5.$7(String, n, "EditLink"))
            })
    };
Xrm.Gen.ExportToExcelOnlineRequestSerializer = function() {};
Xrm.Gen.ExportToExcelOnlineRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("View", n.view, 6) +
            Xrm.Soap.Write.f("FetchXml", n.fetchXml, 14) +
            Xrm.Soap.Write.f("LayoutXml", n.layoutXml, 14) +
            Xrm.Soap.Write.f("QueryApi", n.queryApi, 14) +
            Xrm.Soap.Write.f("QueryParameters",
                n.queryParameters,
                -1,
                "c:InputArgumentCollection",
                'xmlns:c="http://schemas.microsoft.com/crm/2011/Contracts"')
    };
Xrm.Gen.ExportToExcelOnlineRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.ExportToExcelOnlineRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "View"),
                Xrm.Soap.$5.$7(String, n, "FetchXml"),
                Xrm.Soap.$5.$7(String, n, "LayoutXml"),
                Xrm.Soap.$5.$7(String, n, "QueryApi"),
                Xrm.Soap.$5.$7(Object, n, "QueryParameters", "InputArgumentCollection"))
    };
Xrm.Gen.ExportToExcelOnlineResponseSerializer = function() {};
Xrm.Gen.ExportToExcelOnlineResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.ExportToExcelOnlineResponse(Xrm.Soap.$5.$7(String, n, "EditLink")) })
    };
Xrm.Gen.FetchSiteUrlRequestSerializer = function() {};
Xrm.Gen.FetchSiteUrlRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("DocumentId", n.documentId, 14) +
            Xrm.Soap.Write.f("RegardingObjectId", n.regardingObjectId, 14) +
            Xrm.Soap.Write.f("RegardingObjType", n.regardingObjType, 5)
    };
Xrm.Gen.FetchSiteUrlRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.FetchSiteUrlRequest(Xrm.Soap.$5.$7(String, n, "DocumentId"),
            Xrm.Soap.$5.$7(String, n, "RegardingObjectId"),
            Xrm.Soap.$5.$7(Number, n, "RegardingObjType"))
};
Xrm.Gen.FetchSiteUrlResponseSerializer = function() {};
Xrm.Gen.FetchSiteUrlResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) { return new Xrm.Gen.FetchSiteUrlResponse(Xrm.Soap.$5.$7(String, n, "SiteAndLocationUrl")) })
};
Xrm.Gen.FollowEmailAttachmentRequestSerializer = function() {};
Xrm.Gen.FollowEmailAttachmentRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ActivityMimeAttachmentId", n.activityMimeAttachmentId, 15)
    };
Xrm.Gen.FollowEmailAttachmentRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.FollowEmailAttachmentRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ActivityMimeAttachmentId"))
    };
Xrm.Gen.FollowEmailAttachmentResponseSerializer = function() {};
Xrm.Gen.FollowEmailAttachmentResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.FollowEmailAttachmentResponse(Xrm.Soap.$5.$7(String, n, "Response")) })
    };
Xrm.Gen.FlushMetadataCacheRequestSerializer = function() {};
Xrm.Gen.FlushMetadataCacheRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.FlushMetadataCacheRequestSerializer
    .loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.FlushMetadataCacheRequest };
Xrm.Gen.FulfillSalesOrderRequestSerializer = function() {};
Xrm.Gen.FulfillSalesOrderRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OrderClose", n.orderClose, -1, "a:Entity") + Xrm.Soap.Write.f("Status", n.status, 11)
    };
Xrm.Gen.FulfillSalesOrderRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.FulfillSalesOrderRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "OrderClose"),
                Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
    };
Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer = function() {};
Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("SearchText", n.searchText, 14) +
            Xrm.Soap.Write.f("UseInflection", n.useInflection, 0) +
            Xrm.Soap.Write.f("RemoveDuplicates", n.removeDuplicates, 0) +
            Xrm.Soap.Write.f("StateCode", n.stateCode, 5) +
            Xrm.Soap.Write.f("QueryExpression", n.queryExpression, -1, "a:FetchExpression")
    };
Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .FullTextSearchKnowledgeArticleRequest(Xrm.Soap.$5.$7(String, n, "SearchText"),
                Xrm.Soap.$5.$7(Boolean, n, "UseInflection"),
                Xrm.Soap.$5.$7(Boolean, n, "RemoveDuplicates"),
                Xrm.Soap.$5.$7(Number, n, "StateCode"),
                Xrm.Soap.$5.$7(String, n, "QueryExpression", "Query"))
    };
Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer = function() {};
Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .FullTextSearchKnowledgeArticleResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                            n,
                            "EntityCollection"))
            })
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetSimilarRecordsRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("GetSimilarRecords",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetSimilarRecordsRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("GetSimilarRecords",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetSimilarRecordsRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Id", t.id, 6) +
            Xrm.Soap.EntityRecordSerializer.$10E("Filter", t.filter, 14) +
            Xrm.Soap.EntityRecordSerializer.$10E("ReturnFields", t.returnFields, -1, "a:ColumnSet")
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer
    .$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Id']/b:value"),
            u = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Filter']/b:value"),
            f = $0.$1(i) ? null : i.get_$r(),
            r = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ReturnFields']/b:value"),
            e = $0.$1(r) ? null : Xrm.Soap.ColumnSetSerializer.loadFromCrmSoap(r);
        return new Xrm.Gen.GetSimilarRecordsRequest(u, f, e)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetSimilarRecordsResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("GetSimilarRecords",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetSimilarRecordsResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer
    .$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                    .$O(".//a:KeyValuePairOfstringanyType[b:key='EntityCollection']/b:value[@i:type='a:EntityCollection']"),
                r = null, $0.$1(i) ||
                (r = Xrm.Soap.EntityCollectionSerializer
                    .loadFromCrmSoap(i, Microsoft.Crm.Client.Core.Storage.DataApi.$1O.get_$1h())), new Xrm.Gen
                    .GetSimilarRecordsResponse(r))
            : null
    };
Xrm.Gen.InstantiateTemplateRequestSerializer = function() {};
Xrm.Gen.InstantiateTemplateRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("TemplateId", n.templateId, 15) +
            Xrm.Soap.Write.f("ObjectType", n.objectType, 14) +
            Xrm.Soap.Write.f("ObjectId", n.objectId, 15)
    };
Xrm.Gen.InstantiateTemplateRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.InstantiateTemplateRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "TemplateId"),
                Xrm.Soap.$5.$7(String, n, "ObjectType"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ObjectId"))
    };
Xrm.Gen.InstantiateTemplateResponseSerializer = function() {};
Xrm.Gen.InstantiateTemplateResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .InstantiateTemplateResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                            n,
                            "EntityCollection"))
            })
    };
Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer = function() {};
Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityId", n.opportunityId, 15) +
            Xrm.Soap.Write.f("ColumnSet", n.columnSet, -1, "a:ColumnSet")
    };
Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .GenerateInvoiceFromOpportunityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OpportunityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.$4s, n, "ColumnSet", "ColumnSet"))
    };
Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer = function() {};
Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .GenerateInvoiceFromOpportunityResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer = function() {};
Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityId", n.opportunityId, 15) +
            Xrm.Soap.Write.f("ColumnSet", n.columnSet, -1, "a:ColumnSet")
    };
Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .GenerateQuoteFromOpportunityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OpportunityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.$4s, n, "ColumnSet", "ColumnSet"))
    };
Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer = function() {};
Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .GenerateQuoteFromOpportunityResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer = function() {};
Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityId", n.opportunityId, 15) +
            Xrm.Soap.Write.f("ColumnSet", n.columnSet, -1, "a:ColumnSet")
    };
Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .GenerateSalesOrderFromOpportunityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OpportunityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.$4s, n, "ColumnSet", "ColumnSet"))
    };
Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer = function() {};
Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .GenerateSalesOrderFromOpportunityResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common
                        .ObjectModel.EntityRecord,
                        n,
                        "Entity"))
            })
    };
Xrm.Gen.GetActualDateRequestSerializer = function() {};
Xrm.Gen.GetActualDateRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Date", n.date, 14) };
Xrm.Gen.GetActualDateRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n) ? null : new Xrm.Gen.GetActualDateRequest(Xrm.Soap.$5.$7(String, n, "Date"))
};
Xrm.Gen.GetActualDateResponseSerializer = function() {};
Xrm.Gen.GetActualDateResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) { return new Xrm.Gen.GetActualDateResponse(Xrm.Soap.$5.$7(String, n, "Result")) })
};
Xrm.Gen.GetAllTimeZonesWithDisplayNameRequestSerializer = function() {};
Xrm.Gen.GetAllTimeZonesWithDisplayNameRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("LocaleId", n.localeId, 5) };
Xrm.Gen.GetAllTimeZonesWithDisplayNameRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.GetAllTimeZonesWithDisplayNameRequest(Xrm.Soap.$5.$7(Number, n, "LocaleId"))
    };
Xrm.Gen.GetAllTimeZonesWithDisplayNameResponseSerializer = function() {};
Xrm.Gen.GetAllTimeZonesWithDisplayNameResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .GetAllTimeZonesWithDisplayNameResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                            n,
                            "EntityCollection"))
            })
    };
Xrm.Gen.GetDefaultPriceLevelRequestSerializer = function() {};
Xrm.Gen.GetDefaultPriceLevelRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityName", n.entityName, 14) +
            Xrm.Soap.Write.f("ColumnSet", n.columnSet, -1, "a:ColumnSet")
    };
Xrm.Gen.GetDefaultPriceLevelRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.GetDefaultPriceLevelRequest(Xrm.Soap.$5.$7(String, n, "EntityName"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.$4s, n, "ColumnSet", "ColumnSet"))
    };
Xrm.Gen.GetDefaultPriceLevelResponseSerializer = function() {};
Xrm.Gen.GetDefaultPriceLevelResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .GetDefaultPriceLevelResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, n, "PriceLevels"))
            })
    };
Xrm.Gen.GetEntitiesForAzureMLRequestSerializer = function() {};
Xrm.Gen.GetEntitiesForAzureMLRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Filter", n.filter, 14) };
Xrm.Gen.GetEntitiesForAzureMLRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n) ? null : new Xrm.Gen.GetEntitiesForAzureMLRequest(Xrm.Soap.$5.$7(String, n, "Filter"))
    };
Xrm.Gen.GetEntitiesForAzureMLResponseSerializer = function() {};
Xrm.Gen.GetEntitiesForAzureMLResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.GetEntitiesForAzureMLResponse(Xrm.Soap.$5.$7(String, n, "Result")) })
    };
Xrm.Gen.GetFieldListForAzureMLRequestSerializer = function() {};
Xrm.Gen.GetFieldListForAzureMLRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityName", n.entityName, 14) + Xrm.Soap.Write.f("Filter", n.filter, 14)
    };
Xrm.Gen.GetFieldListForAzureMLRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.GetFieldListForAzureMLRequest(Xrm.Soap.$5.$7(String, n, "EntityName"),
                Xrm.Soap.$5.$7(String, n, "Filter"))
    };
Xrm.Gen.GetFieldListForAzureMLResponseSerializer = function() {};
Xrm.Gen.GetFieldListForAzureMLResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.GetFieldListForAzureMLResponse(Xrm.Soap.$5.$7(String, n, "Result")) })
    };
Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer = function() {};
Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityId", n.opportunityId, 15) + Xrm.Soap.Write.f("InvoiceId", n.invoiceId, 15)
    };
Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .GetInvoiceProductsFromOpportunityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OpportunityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "InvoiceId"))
    };
Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer = function() {};
Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityId", n.opportunityId, 15) + Xrm.Soap.Write.f("QuoteId", n.quoteId, 15)
    };
Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .GetQuoteProductsFromOpportunityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OpportunityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QuoteId"))
    };
Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer = function() {};
Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityName", n.entityName, 14) + Xrm.Soap.Write.f("Filter", n.filter, 14)
    };
Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.GetRelationshipsForAzureMLRequest(Xrm.Soap.$5.$7(String, n, "EntityName"),
                Xrm.Soap.$5.$7(String, n, "Filter"))
    };
Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer = function() {};
Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.GetRelationshipsForAzureMLResponse(Xrm.Soap.$5.$7(String, n, "Result")) })
    };
Xrm.Gen.GetRIProvisioningStatusRequestSerializer = function() {};
Xrm.Gen.GetRIProvisioningStatusRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.GetRIProvisioningStatusRequestSerializer
    .loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.GetRIProvisioningStatusRequest };
Xrm.Gen.GetRIProvisioningStatusResponseSerializer = function() {};
Xrm.Gen.GetRIProvisioningStatusResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.GetRIProvisioningStatusResponse(Xrm.Soap.$5.$7(String, n, "ProvisioningStatus"))
            })
    };
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer = function() {};
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityId", n.opportunityId, 15) +
            Xrm.Soap.Write.f("SalesOrderId", n.salesOrderId, 15)
    };
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .GetSalesOrderProductsFromOpportunityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OpportunityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "SalesOrderId"))
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("GetDataForTopicWordCloud",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetDataForTopicWordCloudRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("GetDataForTopicWordCloud",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetDataForTopicWordCloudRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Filter", t.filter, 14)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Filter']/b:value"), i = $0.$1(t) ? null : t.get_$r();
        return new Xrm.Gen.GetDataForTopicWordCloudRequest(i)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudResponseSerializer.$$cctor = function() {
        Xrm.Soap.$N.$5s("GetDataForTopicWordCloud",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetDataForTopicWordCloudResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudResponseSerializer.$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                .$O(".//a:KeyValuePairOfstringanyType[b:key='Topics']/b:value"), r = $0.$1(i) ? null : i.get_$r(), new
                Xrm.Gen.GetDataForTopicWordCloudResponse(r))
            : null
    };
Xrm.Gen.GetRITenantEndpointUrlRequestSerializer = function() {};
Xrm.Gen.GetRITenantEndpointUrlRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.GetRITenantEndpointUrlRequestSerializer
    .loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.GetRITenantEndpointUrlRequest };
Xrm.Gen.GetRITenantEndpointUrlResponseSerializer = function() {};
Xrm.Gen.GetRITenantEndpointUrlResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.GetRITenantEndpointUrlResponse(Xrm.Soap.$5.$7(String, n, "TenantEndpointUrl"))
            })
    };
Xrm.Gen.GetTrackingTokenEmailRequestSerializer = function() {};
Xrm.Gen.GetTrackingTokenEmailRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Subject", n.subject, 14) };
Xrm.Gen.GetTrackingTokenEmailRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n) ? null : new Xrm.Gen.GetTrackingTokenEmailRequest(Xrm.Soap.$5.$7(String, n, "Subject"))
    };
Xrm.Gen.GetTrackingTokenEmailResponseSerializer = function() {};
Xrm.Gen.GetTrackingTokenEmailResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.GetTrackingTokenEmailResponse(Xrm.Soap.$5
                    .$7(String, n, "TrackingToken"))
            })
    };
Xrm.Gen.GetValidStatusTransitionRequestSerializer = function() {};
Xrm.Gen.GetValidStatusTransitionRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("IncidentId", n.incidentId, 14) + Xrm.Soap.Write.f("ToStateCode", n.toStateCode, 5)
    };
Xrm.Gen.GetValidStatusTransitionRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.GetValidStatusTransitionRequest(Xrm.Soap.$5.$7(String, n, "IncidentId"),
                Xrm.Soap.$5.$7(Number, n, "ToStateCode"))
    };
Xrm.Gen.GetValidStatusTransitionResponseSerializer = function() {};
Xrm.Gen.GetValidStatusTransitionResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.GetValidStatusTransitionResponse(Xrm.Soap.$5.$7(Number, n, "Result")) })
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GrantAccessRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("GrantAccess",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GrantAccessRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("GrantAccess",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GrantAccessRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Target", t.target, 6) +
            Xrm.Soap.EntityRecordSerializer.$10E("PrincipalAccess", t.principalAccess, -1, "a:PrincipalAccess")
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer
    .$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Target']/b:value"),
            r = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='PrincipalAccess']/b:value"),
            u = $0.$1(i) ? null : Xrm.Soap.PrincipalAccessArraySerializer.loadFromCrmSoap(i)[0];
        return new Xrm.Sdk.GrantAccessRequest(r, u)
    };
Xrm.Gen.InitializeFromRequestSerializer = function() {};
Xrm.Gen.InitializeFromRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityMoniker", n.entityMoniker, 6) +
            Xrm.Soap.Write.f("TargetEntityName", n.targetEntityName, 14) +
            Xrm.Soap.Write.f("TargetFieldType", n.targetFieldType, -1, "a:TargetFieldType")
    };
Xrm.Gen.InitializeFromRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.InitializeFromRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "EntityMoniker"),
            Xrm.Soap.$5.$7(String, n, "TargetEntityName"),
            Xrm.Soap.$5.$7(Xrm.Gen.$9K, n, "TargetFieldType", "Enum"))
};
Xrm.Gen.InitializeFromResponseSerializer = function() {};
Xrm.Gen.InitializeFromResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.InitializeFromResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
        })
};
Xrm.Gen.InviteUserRequestSerializer = function() {};
Xrm.Gen.InviteUserRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("UserId", n.userId, 15)
};
Xrm.Gen.InviteUserRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.InviteUserRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "UserId"))
};
Xrm.Gen.InviteUserResponseSerializer = function() {};
Xrm.Gen.InviteUserResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) { return new Xrm.Gen.InviteUserResponse(Xrm.Soap.$5.$7(String, n, "InvitationToken")) })
};
Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer = function() {};
Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("SolutionName", n.solutionName, 14) };
Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.IsPartnerSolutionInstalledRequest(Xrm.Soap.$5.$7(String, n, "SolutionName"))
    };
Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer = function() {};
Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .IsPartnerSolutionInstalledResponse(Xrm.Soap.$5.$7(Boolean, n, "IsPartnerSolutionInstalled"))
            })
    };
Xrm.Gen.LockInvoicePricingRequestSerializer = function() {};
Xrm.Gen.LockInvoicePricingRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("InvoiceId", n.invoiceId, 15) };
Xrm.Gen.LockInvoicePricingRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.LockInvoicePricingRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "InvoiceId"))
    };
Xrm.Gen.LockSalesOrderPricingRequestSerializer = function() {};
Xrm.Gen.LockSalesOrderPricingRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("SalesOrderId", n.salesOrderId, 15) };
Xrm.Gen.LockSalesOrderPricingRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.LockSalesOrderPricingRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "SalesOrderId"))
    };
Xrm.Gen.LoseOpportunityRequestSerializer = function() {};
Xrm.Gen.LoseOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityClose", n.opportunityClose, -1, "a:Entity") +
            Xrm.Soap.Write.f("Status", n.status, 11)
    };
Xrm.Gen.LoseOpportunityRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.LoseOpportunityRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord,
                n,
                "OpportunityClose"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
};
Xrm.Gen.MigrateToS2SRequestSerializer = function() {};
Xrm.Gen.MigrateToS2SRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("SiteUrl", n.siteUrl, 14) + Xrm.Soap.Write.f("EnableOneDrive", n.enableOneDrive, 0)
    };
Xrm.Gen.MigrateToS2SRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.MigrateToS2SRequest(Xrm.Soap.$5.$7(String, n, "SiteUrl"),
            Xrm.Soap.$5.$7(Boolean, n, "EnableOneDrive"))
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ModifyAccessRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("ModifyAccess",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ModifyAccessRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("ModifyAccess",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ModifyAccessRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Target", t.target, 6) +
            Xrm.Soap.EntityRecordSerializer.$10E("PrincipalAccess", t.principalAccess, -1, "a:PrincipalAccess")
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer
    .$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Target']/b:value"),
            r = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='PrincipalAccess']/b:value"),
            u = $0.$1(i) ? null : Xrm.Soap.PrincipalAccessArraySerializer.loadFromCrmSoap(i)[0];
        return new Xrm.Sdk.ModifyAccessRequest(r, u)
    };
Xrm.Gen.NavigateToNextEntityRequestSerializer = function() {};
Xrm.Gen.NavigateToNextEntityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("CurrentEntityId", n.currentEntityId, 15) +
            Xrm.Soap.Write.f("CurrentEntityLogicalName", n.currentEntityLogicalName, 14) +
            Xrm.Soap.Write.f("NextEntityId", n.nextEntityId, 15) +
            Xrm.Soap.Write.f("NextEntityLogicalName", n.nextEntityLogicalName, 14) +
            Xrm.Soap.Write.f("NewActiveStageId", n.newActiveStageId, 15) +
            Xrm.Soap.Write.f("NewTraversedPath", n.newTraversedPath, 14) +
            Xrm.Soap.Write.f("ProcessId", n.processId, 15) +
            Xrm.Soap.Write.iof("ProcessInstanceId", n.processInstanceId, 15)
    };
Xrm.Gen.NavigateToNextEntityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.NavigateToNextEntityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CurrentEntityId"),
                Xrm.Soap.$5.$7(String, n, "CurrentEntityLogicalName"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "NextEntityId"),
                Xrm.Soap.$5.$7(String, n, "NextEntityLogicalName"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "NewActiveStageId"),
                Xrm.Soap.$5.$7(String, n, "NewTraversedPath"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ProcessId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ProcessInstanceId"))
    };
Xrm.Gen.NewDocumentRequestSerializer = function() {};
Xrm.Gen.NewDocumentRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("FileName", n.fileName, 14) +
        Xrm.Soap.Write.f("RegardingObjectId", n.regardingObjectId, 14) +
        Xrm.Soap.Write.f("RegardingObjectTypeCode", n.regardingObjectTypeCode, 14) +
        Xrm.Soap.Write.f("LocationId", n.locationId, 14)
};
Xrm.Gen.NewDocumentRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.NewDocumentRequest(Xrm.Soap.$5.$7(String, n, "FileName"),
            Xrm.Soap.$5.$7(String, n, "RegardingObjectId"),
            Xrm.Soap.$5.$7(String, n, "RegardingObjectTypeCode"),
            Xrm.Soap.$5.$7(String, n, "LocationId"))
};
Xrm.Gen.NewDocumentResponseSerializer = function() {};
Xrm.Gen.NewDocumentResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) { return new Xrm.Gen.NewDocumentResponse(Xrm.Soap.$5.$7(String, n, "EditLink")) })
};
Xrm.Gen.OverrideDynamicPropertiesRequestSerializer = function() {};
Xrm.Gen.OverrideDynamicPropertiesRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObject", n.regardingObject, 6) +
            Xrm.Soap.Write.f("DynamicPropertyCollection", n.dynamicPropertyCollection, -1, "a:EntityCollection")
    };
Xrm.Gen.OverrideDynamicPropertiesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.OverrideDynamicPropertiesRequest(Xrm.Soap.$5
                .$7(Xrm.Objects.EntityReference, n, "RegardingObject"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                    n,
                    "DynamicPropertyCollection"))
    };
Xrm.Gen.OverrideDynamicPropertyRequestSerializer = function() {};
Xrm.Gen.OverrideDynamicPropertyRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObject", n.regardingObject, 6) +
            Xrm.Soap.Write.f("DynamicProperty", n.dynamicProperty, 6)
    };
Xrm.Gen.OverrideDynamicPropertyRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.OverrideDynamicPropertyRequest(Xrm.Soap.$5
                .$7(Xrm.Objects.EntityReference, n, "RegardingObject"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "DynamicProperty"))
    };
Xrm.Gen.OverrideDynamicPropertyResponseSerializer = function() {};
Xrm.Gen.OverrideDynamicPropertyResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .OverrideDynamicPropertyResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "Id"),
                        Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "DynamicPropertyId"))
            })
    };
Xrm.Gen.OverwriteDynamicPropertyRequestSerializer = function() {};
Xrm.Gen.OverwriteDynamicPropertyRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObject", n.regardingObject, 6) +
            Xrm.Soap.Write.f("DynamicProperty", n.dynamicProperty, 6)
    };
Xrm.Gen.OverwriteDynamicPropertyRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.OverwriteDynamicPropertyRequest(Xrm.Soap.$5
                .$7(Xrm.Objects.EntityReference, n, "RegardingObject"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "DynamicProperty"))
    };
Xrm.Gen.OverwriteDynamicPropertyResponseSerializer = function() {};
Xrm.Gen.OverwriteDynamicPropertyResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .OverwriteDynamicPropertyResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "Id"),
                        Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "DynamicPropertyId"))
            })
    };
Xrm.Gen.PickFromQueueRequestSerializer = function() {};
Xrm.Gen.PickFromQueueRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("QueueItemId", n.queueItemId, 15) +
            Xrm.Soap.Write.f("WorkerId", n.workerId, 15) +
            Xrm.Soap.Write.f("RemoveQueueItem", n.removeQueueItem, 0)
    };
Xrm.Gen.PickFromQueueRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.PickFromQueueRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QueueItemId"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "WorkerId"),
            Xrm.Soap.$5.$7(Boolean, n, "RemoveQueueItem"))
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("PopulateRecommendationCacheForRecord",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .PopulateRecommendationCacheForRecordRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("PopulateRecommendationCacheForRecord",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .PopulateRecommendationCacheForRecordRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("ParentRecord", t.parentRecord, 6)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ParentRecord']/b:value"),
            i = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t);
        return new Xrm.Gen.PopulateRecommendationCacheForRecordRequest(i)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("PopulateRecommendationCacheForRecord",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .PopulateRecommendationCacheForRecordResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordResponseSerializer.$4S = function(n) {
        var t, i, r;
        if (!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))) {
            if (i = t.$O(".//a:KeyValuePairOfstringanyType[b:key='ShowAzureRecommendations']/b:value"), $0
                .$1(i)) throw Error.notImplemented();
            else r = Boolean.parse(i.get_$r());
            return new Xrm.Gen.PopulateRecommendationCacheForRecordResponse(r)
        }
        return null
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("PopulateRecommendationCache",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .PopulateRecommendationCacheRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("PopulateRecommendationCache",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .PopulateRecommendationCacheRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("EntityName", t.entityName, 14) +
            Xrm.Soap.EntityRecordSerializer.$10E("ItemId", t.itemId, 15)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='EntityName']/b:value"),
            r = $0.$1(t) ? null : t.get_$r(),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ItemId']/b:value"),
            u = $0.$1(i) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(i.get_$r());
        return new Xrm.Gen.PopulateRecommendationCacheRequest(r, u)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("PopulateRecommendationCache",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .PopulateRecommendationCacheResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheResponseSerializer.$4S = function(n) {
        var t, i, r;
        if (!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))) {
            if (i = t.$O(".//a:KeyValuePairOfstringanyType[b:key='ShowAzureRecommendations']/b:value"), $0
                .$1(i)) throw Error.notImplemented();
            else r = Boolean.parse(i.get_$r());
            return new Xrm.Gen.PopulateRecommendationCacheResponse(r)
        }
        return null
    };
Xrm.Gen.PublishAllXmlRequestSerializer = function() {};
Xrm.Gen.PublishAllXmlRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.PublishAllXmlRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n) ? null : new Xrm.Gen.PublishAllXmlRequest
};
Xrm.Gen.PublishProductHierarchyRequestSerializer = function() {};
Xrm.Gen.PublishProductHierarchyRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Target", n.target, 6) };
Xrm.Gen.PublishProductHierarchyRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.PublishProductHierarchyRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"))
    };
Xrm.Gen.PublishThemeRequestSerializer = function() {};
Xrm.Gen.PublishThemeRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Target", n.target, 6) };
Xrm.Gen.PublishThemeRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n) ? null : new Xrm.Gen.PublishThemeRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"))
};
Xrm.Gen.RetrieveCardDataRequestSerializer = function() {};
Xrm.Gen.RetrieveCardDataRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("CardTypeId", n.cardTypeId, 15) +
            Xrm.Soap.Write.f("AdditionalParameter", n.additionalParameter, 14)
    };
Xrm.Gen.RetrieveCardDataRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveCardDataRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "CardTypeId"),
                Xrm.Soap.$5.$7(String, n, "AdditionalParameter"))
    };
Xrm.Gen.RetrieveCardDataResponseSerializer = function() {};
Xrm.Gen.RetrieveCardDataResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.RetrieveCardDataResponse(Xrm.Soap.$5.$7(String, n, "Data")) })
    };
Xrm.Gen.TrackEmailRequestSerializer = function() {};
Xrm.Gen.TrackEmailRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("ExchangeItemId", n.exchangeItemId, 14) + Xrm.Soap.Write.f("Regarding", n.regarding, 6)
};
Xrm.Gen.TrackEmailRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.TrackEmailRequest(Xrm.Soap.$5.$7(String, n, "ExchangeItemId"),
            Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Regarding"))
};
Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer = function() {};
Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("QueryingUnitId", n.queryingUnitId, 15) +
            Xrm.Soap.Write.f("ActionName", n.actionName, 14)
    };
Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .ExecuteDataPerformanceActionRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QueryingUnitId"),
                Xrm.Soap.$5.$7(String, n, "ActionName"))
    };
Xrm.Gen.QualifyLeadRequestSerializer = function() {};
Xrm.Gen.QualifyLeadRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("LeadId", n.leadId, 6) +
        Xrm.Soap.Write.f("CreateAccount", n.createAccount, 0) +
        Xrm.Soap.Write.f("CreateContact", n.createContact, 0) +
        Xrm.Soap.Write.f("CreateOpportunity", n.createOpportunity, 0) +
        Xrm.Soap.Write.f("OpportunityCurrencyId", n.opportunityCurrencyId, 6) +
        Xrm.Soap.Write.f("OpportunityCustomerId", n.opportunityCustomerId, 6) +
        Xrm.Soap.Write.f("SourceCampaignId", n.sourceCampaignId, 6) +
        Xrm.Soap.Write.f("Status", n.status, 11) +
        Xrm.Soap.Write.f("SuppressDuplicateDetection", n.suppressDuplicateDetection, 0) +
        Xrm.Soap.Write.iof("ProcessInstanceId", n.processInstanceId, 6)
};
Xrm.Gen.QualifyLeadRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.QualifyLeadRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "LeadId"),
            Xrm.Soap.$5.$7(Boolean, n, "CreateAccount"),
            Xrm.Soap.$5.$7(Boolean, n, "CreateContact"),
            Xrm.Soap.$5.$7(Boolean, n, "CreateOpportunity"),
            Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "OpportunityCurrencyId"),
            Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "OpportunityCustomerId"),
            Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "SourceCampaignId"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"),
            Xrm.Soap.$5.$7(Boolean, n, "SuppressDuplicateDetection"),
            Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "ProcessInstanceId"))
};
Xrm.Gen.QualifyLeadResponseSerializer = function() {};
Xrm.Gen.QualifyLeadResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.QualifyLeadResponse(Xrm.Soap.$5.$7(Array, n, "CreatedEntities", "EntityReferenceArray"))
        })
};
Xrm.Gen.ReleaseToQueueRequestSerializer = function() {};
Xrm.Gen.ReleaseToQueueRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("QueueItemId", n.queueItemId, 15) };
Xrm.Gen.ReleaseToQueueRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.ReleaseToQueueRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QueueItemId"))
};
Xrm.Gen.RemoveDynamicPropertyRequestSerializer = function() {};
Xrm.Gen.RemoveDynamicPropertyRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObject", n.regardingObject, 6) +
            Xrm.Soap.Write.f("DynamicProperty", n.dynamicProperty, 6)
    };
Xrm.Gen.RemoveDynamicPropertyRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RemoveDynamicPropertyRequest(Xrm.Soap.$5
                .$7(Xrm.Objects.EntityReference, n, "RegardingObject"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "DynamicProperty"))
    };
Xrm.Gen.RemoveFromQueueRequestSerializer = function() {};
Xrm.Gen.RemoveFromQueueRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("QueueItemId", n.queueItemId, 15) };
Xrm.Gen.RemoveFromQueueRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.RemoveFromQueueRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QueueItemId"))
};
Xrm.Gen.RenewContractRequestSerializer = function() {};
Xrm.Gen.RenewContractRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ContractId", n.contractId, 15) +
            Xrm.Soap.Write.f("Status", n.status, 5) +
            Xrm.Soap.Write.f("IncludeCanceledLines", n.includeCanceledLines, 0)
    };
Xrm.Gen.RenewContractRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.RenewContractRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ContractId"),
            Xrm.Soap.$5.$7(Number, n, "Status"),
            Xrm.Soap.$5.$7(Boolean, n, "IncludeCanceledLines"))
};
Xrm.Gen.RenewContractResponseSerializer = function() {};
Xrm.Gen.RenewContractResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.RenewContractResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
        })
};
Xrm.Gen.RenewEntitlementRequestSerializer = function() {};
Xrm.Gen.RenewEntitlementRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntitlementId", n.entitlementId, 15) + Xrm.Soap.Write.f("Status", n.status, 5)
    };
Xrm.Gen.RenewEntitlementRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RenewEntitlementRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "EntitlementId"),
                Xrm.Soap.$5.$7(Number, n, "Status"))
    };
Xrm.Gen.RenewEntitlementResponseSerializer = function() {};
Xrm.Gen.RenewEntitlementResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.RenewEntitlementResponse(Xrm.Soap.$5
                    .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.RescheduleRequestSerializer = function() {};
Xrm.Gen.RescheduleRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, -1, "a:Entity") +
        Xrm.Soap.Write.f("MaintainLegacyAppServerBehavior", n.maintainLegacyAppServerBehavior, 0) +
        Xrm.Soap.Write.f("ReturnNotifications", n.returnNotifications, 0)
};
Xrm.Gen.RescheduleRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.RescheduleRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord,
                n,
                "Target"),
            Xrm.Soap.$5.$7(Boolean, n, "MaintainLegacyAppServerBehavior"),
            Xrm.Soap.$5.$7(Boolean, n, "ReturnNotifications"))
};
Xrm.Gen.RescheduleResponseSerializer = function() {};
Xrm.Gen.RescheduleResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.RescheduleResponse(Xrm.Soap.$5.$7(Xrm.Gen.ValidationResult, n, "ValidationResult"),
                Xrm.Soap.$5.$7(Array, n, "Notifications", "BusinessNotificationArray"))
        })
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveAncestorsRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("RetrieveAncestors",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveAncestorsRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("RetrieveAncestors",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveAncestorsRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Entity", t.entity, 6) +
            Xrm.Soap.EntityRecordSerializer.$10E("Columns", t.columns, -1, "a:ColumnSet")
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer
    .$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Entity']/b:value"),
            r = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Columns']/b:value"),
            u = $0.$1(i) ? null : Xrm.Soap.ColumnSetSerializer.loadFromCrmSoap(i);
        return new Xrm.Sdk.RetrieveAncestorsRequest(r, u)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveAncestorsResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("RetrieveAncestors",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveAncestorsResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer
    .$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                    .$O(".//a:KeyValuePairOfstringanyType[b:key='EntityCollection']/b:value[@i:type='a:EntityCollection']"),
                r = null, $0.$1(i) ||
                (r = Xrm.Soap.EntityCollectionSerializer
                    .loadFromCrmSoap(i, Microsoft.Crm.Client.Core.Storage.DataApi.$1O.get_$1h())), new Xrm.Sdk
                    .RetrieveAncestorsResponse(r))
            : null
    };
Xrm.Gen.RetrieveAttributeListRequestSerializer = function() {};
Xrm.Gen.RetrieveAttributeListRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObjectTypeCode", n.regardingObjectTypeCode, 5)
    };
Xrm.Gen.RetrieveAttributeListRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveAttributeListRequest(Xrm.Soap.$5.$7(Number, n, "RegardingObjectTypeCode"))
    };
Xrm.Gen.RetrieveAttributeListResponseSerializer = function() {};
Xrm.Gen.RetrieveAttributeListResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.RetrieveAttributeListResponse(Xrm.Soap.$5.$7(String, n, "Result")) })
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("ShouldDisplaySLALimitNotification",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ShouldDisplaySLALimitNotificationRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("ShouldDisplaySLALimitNotification",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ShouldDisplaySLALimitNotificationRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("RegardingObjectTypeCode", t.regardingObjectTypeCode, 5)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='RegardingObjectTypeCode']/b:value"), i;
        if ($0.$1(t)) throw Error.notImplemented();
        else i = parseInt(t.get_$r());
        return new Xrm.Gen.ShouldDisplaySLALimitNotificationRequest(i)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("ShouldDisplaySLALimitNotification",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .ShouldDisplaySLALimitNotificationResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationResponseSerializer.$4S = function(n) {
        var t, i, r;
        if (!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))) {
            if (i = t.$O(".//a:KeyValuePairOfstringanyType[b:key='Result']/b:value"), $0
                .$1(i)) throw Error.notImplemented();
            else r = Boolean.parse(i.get_$r());
            return new Xrm.Gen.ShouldDisplaySLALimitNotificationResponse(r)
        }
        return null
    };
Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer = function() {};
Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityName", n.entityName, 14) + Xrm.Soap.Write.f("State", n.state, 11)
    };
Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .RetrieveDefaultStatusForStateRequest(Xrm.Soap.$5.$7(String, n, "EntityName"),
                Xrm.Soap.$5.$7(Number, n, "State", "OptionSet"))
    };
Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer = function() {};
Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveDefaultStatusForStateResponse(Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
            })
    };
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer = function() {};
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OuterQuery", n.outerQuery, -1, "a:FetchExpression") +
            Xrm.Soap.Write.f("SubQueries",
                n.subQueries,
                -1,
                "c:QueryByEntityNameDictionary",
                'xmlns:c="http://schemas.microsoft.com/crm/2011/Contracts"')
    };
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .RetrieveEntitiesForAggregateQueryRequest(Xrm.Soap.$5.$7(String, n, "OuterQuery", "Query"),
                Xrm.Soap.$5.$7(Object, n, "SubQueries", "QueryByEntityName"))
    };
Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer = function() {};
Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveEntitiesForAggregateQueryResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common
                        .ObjectModel.EntityCollection,
                        n,
                        "EntityCollection"))
            })
    };
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer = function() {};
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObject", n.regardingObject, 6) +
            Xrm.Soap.Write.f("ForDraftRegarding", n.forDraftRegarding, 0)
    };
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .RetrieveEntityDynamicPropertyDefinitionsRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference,
                    n,
                    "RegardingObject"),
                Xrm.Soap.$5.$7(Boolean, n, "ForDraftRegarding"))
    };
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer = function() {};
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveEntityDynamicPropertyDefinitionsResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                            n,
                            "EntityCollection"))
            })
    };
Xrm.Gen.RetrieveFilteredProcessesRequestSerializer = function() {};
Xrm.Gen.RetrieveFilteredProcessesRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("EntityLogicalName", n.entityLogicalName, 14) };
Xrm.Gen.RetrieveFilteredProcessesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveFilteredProcessesRequest(Xrm.Soap.$5.$7(String, n, "EntityLogicalName"))
    };
Xrm.Gen.RetrieveFilteredProcessesResponseSerializer = function() {};
Xrm.Gen.RetrieveFilteredProcessesResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveFilteredProcessesResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, n, "Processes"))
            })
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("RetrieveItemIdsForRecord",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveItemIdsForRecordRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("RetrieveItemIdsForRecord",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveItemIdsForRecordRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("ParentRecord", t.parentRecord, 6)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ParentRecord']/b:value"),
            i = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t);
        return new Xrm.Gen.RetrieveItemIdsForRecordRequest(i)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordResponseSerializer.$$cctor = function() {
        Xrm.Soap.$N.$5s("RetrieveItemIdsForRecord",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveItemIdsForRecordResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordResponseSerializer.$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                .$O(".//a:KeyValuePairOfstringanyType[b:key='ItemIds']/b:value"), r =
                $0
                .$1(i)
                ? null
                : Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.$AN.$4S(i), new Xrm.Gen
                .RetrieveItemIdsForRecordResponse(r))
            : null
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("RetrieveKeyPhrasesForKnowledgeSearch",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("RetrieveKeyPhrasesForKnowledgeSearch",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Target", t.$Ge, 6)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Target']/b:value"),
            i = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t);
        return new Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest(i)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("RetrieveKeyPhrasesForKnowledgeSearch",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                .$O(".//a:KeyValuePairOfstringanyType[b:key='KeyPhrases']/b:value"), r =
                $0.$1(i) ? null : Xrm.Soap.StringArraySerializer.loadFromCrmSoap(i), new Xrm.Sdk
                .RetrieveKeyPhrasesForKnowledgeSearchResponse(r))
            : null
    };
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer = function() {};
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Target", n.target, 6) };
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .RetrieveKeyPhrasesForSimilaritySearchRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"))
    };
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer = function() {};
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveKeyPhrasesForSimilaritySearchResponse(Xrm.Soap.$5
                        .$7(Array, n, "KeyPhrases", "StringArray"))
            })
    };
Xrm.Gen.RetrieveMultipleRequestSerializer = function() {};
Xrm.Gen.RetrieveMultipleRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Query", n.query, -1, "a:FetchExpression") };
Xrm.Gen.RetrieveMultipleRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n) ? null : new Xrm.Gen.RetrieveMultipleRequest(Xrm.Soap.$5.$7(String, n, "Query", "Query"))
    };
Xrm.Gen.RetrieveMultipleResponseSerializer = function() {};
Xrm.Gen.RetrieveMultipleResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.RetrieveMultipleResponse(Xrm.Soap.$5
                    .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, n, "EntityCollection"))
            })
    };
Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer = function() {};
Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Query", n.query, -1, "a:FetchExpression") };
Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveUnpublishedMultipleRequest(Xrm.Soap.$5.$7(String, n, "Query", "Query"))
    };
Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer = function() {};
Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveUnpublishedMultipleResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                            n,
                            "EntityCollection"))
            })
    };
Xrm.Gen.RetrievePrincipalAccessRequestSerializer = function() {};
Xrm.Gen.RetrievePrincipalAccessRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Target", n.target, 6) + Xrm.Soap.Write.f("Principal", n.principal, 6)
    };
Xrm.Gen.RetrievePrincipalAccessRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrievePrincipalAccessRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Principal"))
    };
Xrm.Gen.RetrievePrincipalAccessResponseSerializer = function() {};
Xrm.Gen.RetrievePrincipalAccessResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrievePrincipalAccessResponse(Xrm.Soap.$5
                        .$7(Xrm.Gen.AccessRights, n, "AccessRights", "FlagsEnum"))
            })
    };
Xrm.Gen.RetrieveProcessActiveStageRequestSerializer = function() {};
Xrm.Gen.RetrieveProcessActiveStageRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityId", n.entityId, 15) +
            Xrm.Soap.Write.f("EntityLogicalName", n.entityLogicalName, 14) +
            Xrm.Soap.Write.f("ProcessId", n.processId, 15) +
            Xrm.Soap.Write.iof("ProcessInstanceId", n.processInstanceId, 6)
    };
Xrm.Gen.RetrieveProcessActiveStageRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveProcessActiveStageRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "EntityId"),
                Xrm.Soap.$5.$7(String, n, "EntityLogicalName"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ProcessId"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "ProcessInstanceId"))
    };
Xrm.Gen.RetrieveProcessActiveStageResponseSerializer = function() {};
Xrm.Gen.RetrieveProcessActiveStageResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveProcessActiveStageResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.RetrieveProcessControlDataRequestSerializer = function() {};
Xrm.Gen.RetrieveProcessControlDataRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Target", n.target, 6) +
            Xrm.Soap.Write.iof("ProcessId", n.processId, 6) +
            Xrm.Soap.Write.iof("ProcessInstanceId", n.processInstanceId, 6)
    };
Xrm.Gen.RetrieveProcessControlDataRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveProcessControlDataRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "ProcessId"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "ProcessInstanceId"))
    };
Xrm.Gen.RetrieveProcessControlDataResponseSerializer = function() {};
Xrm.Gen.RetrieveProcessControlDataResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveProcessControlDataResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"),
                        Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                            n,
                            "GlobalNavigationData"))
            })
    };
Xrm.Gen.RetrieveProcessWithFallbackRequestSerializer = function() {};
Xrm.Gen.RetrieveProcessWithFallbackRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EntityLogicalName", n.entityLogicalName, 14) +
            Xrm.Soap.Write.f("Process", n.process, 6)
    };
Xrm.Gen.RetrieveProcessWithFallbackRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .RetrieveProcessWithFallbackRequest(Xrm.Soap.$5.$7(String, n, "EntityLogicalName"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Process"))
    };
Xrm.Gen.RetrieveProcessWithFallbackResponseSerializer = function() {};
Xrm.Gen.RetrieveProcessWithFallbackResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveProcessWithFallbackResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
            })
    };
Xrm.Gen.RetrieveProductPropertiesRequestSerializer = function() {};
Xrm.Gen.RetrieveProductPropertiesRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("ParentObject", n.parentObject, 6) };
Xrm.Gen.RetrieveProductPropertiesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveProductPropertiesRequest(Xrm.Soap.$5
                .$7(Xrm.Objects.EntityReference, n, "ParentObject"))
    };
Xrm.Gen.RetrieveProductPropertiesResponseSerializer = function() {};
Xrm.Gen.RetrieveProductPropertiesResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveProductPropertiesResponse(Xrm.Soap.$5
                        .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection,
                            n,
                            "EntityCollection"))
            })
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("RetrieveRecommendationsCount",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveRecommendationsCountRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("RetrieveRecommendationsCount",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveRecommendationsCountRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("ParentRecord", t.parentRecord, 6) +
            Xrm.Soap.EntityRecordSerializer.$10E("PriceLevelId", t.priceLevelId, 15)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ParentRecord']/b:value"),
            r = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='PriceLevelId']/b:value"),
            u = $0.$1(i) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(i.get_$r());
        return new Xrm.Gen.RetrieveRecommendationsCountRequest(r, u)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("RetrieveRecommendationsCount",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .RetrieveRecommendationsCountResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountResponseSerializer.$4S = function(n) {
        var t, i, r;
        if (!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))) {
            if (i = t.$O(".//a:KeyValuePairOfstringanyType[b:key='RecommendationsCount']/b:value"), $0
                .$1(i)) throw Error.notImplemented();
            else r = parseInt(i.get_$r());
            return new Xrm.Gen.RetrieveRecommendationsCountResponse(r)
        }
        return null
    };
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer = function() {};
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("ParentEntityName", n.parentEntityName, 14) };
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest(Xrm.Soap.$5.$7(String, n, "ParentEntityName"))
    };
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer = function() {};
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveRecommendationLineItemMetadataResponse(Xrm.Soap.$5
                        .$7(String, n, "RecommendationLineItemMetadata"))
            })
    };
Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer = function() {};
Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ParentEntityName", n.parentEntityName, 14) +
            Xrm.Soap.Write.f("ParentEntityId", n.parentEntityId, 15)
    };
Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .RetrieveRecommendationLineItemProductsRequest(Xrm.Soap.$5.$7(String, n, "ParentEntityName"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ParentEntityId"))
    };
Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer = function() {};
Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveRecommendationLineItemProductsResponse(Xrm.Soap.$5
                        .$7(String, n, "RecommendationLineItemProducts"))
            })
    };
Xrm.Gen.RetrieveRequestSerializer = function() {};
Xrm.Gen.RetrieveRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.$5s("Retrieve", Xrm.Gen.RetrieveRequestSerializer.$AZ);
    Xrm.Soap.Serializer.$Ab("Retrieve", Xrm.Gen.RetrieveRequestSerializer.$4S)
};
Xrm.Gen.RetrieveRequestSerializer.$AZ = function(n) {
    var t = n;
    return Xrm.Soap.EntityRecordSerializer.$10E("Target", t.target, 6) +
        Xrm.Soap.EntityRecordSerializer.$10E("ColumnSet", t.columnSet, -1, "a:ColumnSet") +
        Xrm.Soap.EntityRecordSerializer.$10E("RelatedEntitiesQuery",
            t.relatedEntitiesQuery,
            -1,
            "a:RelationshipQueryCollection") +
        Xrm.Soap.EntityRecordSerializer.$10E("ReturnNotifications", t.returnNotifications, 0)
};
Xrm.Gen.RetrieveRequestSerializer.$4S = function(n) {
    if ($0.$1(n)) return null;
    var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Target']/b:value"),
        e = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t),
        i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ColumnSet']/b:value"),
        o = $0.$1(i) ? null : Xrm.Soap.ColumnSetSerializer.loadFromCrmSoap(i),
        r = n.$O(".//a:KeyValuePairOfstringanyType[b:key='RelatedEntitiesQuery']/b:value"),
        s = $0.$1(r) ? null : Xrm.Soap.RelationshipQueryCollectionSerializer.$4S(r),
        u = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ReturnNotifications']/b:value"),
        f;
    if ($0.$1(u)) throw Error.notImplemented();
    else f = Boolean.parse(u.get_$r());
    return new Xrm.Gen.RetrieveRequest(e, o, s, f)
};
Xrm.Gen.RetrieveResponseSerializer = function() {};
Xrm.Gen.RetrieveResponseSerializer.$$cctor = function() {
    Xrm.Soap.$N.$5s("Retrieve", Xrm.Gen.RetrieveResponseSerializer.$4S)
};
Xrm.Gen.RetrieveResponseSerializer.$4S = function(n, t) {
    var r, i, u, f, o, e, s;
    return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), r = null, r = n.$O(".//a:Results"), !$0.$1(r))
        ? (i = null, u = r
                .$O(".//a:KeyValuePairOfstringanyType[b:key='Entity']/b:value"),
            $0.$1(u) ||
            (f = u.$O("entity"), $0.$1(f) || (u = f), i = Xrm.Soap.EntityRecordSerializer
                .loadFromCrmSoap(u, t.relatedEntitiesQuery), o = $0.$1(i.$6E) ? new Array(0) : i.$6E.$aJ, i
                .updateColumnSet(t.columnSet, o)), e = r
                .$O(".//a:KeyValuePairOfstringanyType[b:key='Notifications']/b:value"), s =
                $0.$1(e) ? null : Xrm.Soap.BusinessNotificationArraySerializer.loadFromCrmSoap(e), new Xrm.Gen
                .RetrieveResponse(i, s))
        : null
};
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer = function() {};
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Target", n.target, 6) };
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .RetrieveSharedPrincipalsAndAccessRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"))
    };
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer = function() {};
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveSharedPrincipalsAndAccessResponse(Xrm.Soap.$5.$7(Array,
                        n,
                        "PrincipalAccesses",
                        "PrincipalAccessArray"))
            })
    };
Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer = function() {};
Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer
    .loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.RetrievePersonalSiteUrlRequest };
Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer = function() {};
Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.RetrievePersonalSiteUrlResponse(Xrm.Soap.$5.$7(String, n, "PersonalSiteUrl"))
            })
    };
Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer = function() {};
Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer
    .loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.RetrieveSharePointGlobalSettingsRequest };
Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer = function() {};
Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveSharePointGlobalSettingsResponse(Xrm.Soap.$5.$7(String, n, "SharePointGlobalSetting"))
            })
    };
Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer = function() {};
Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer
    .loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.RetrieveUserDefaultCurrencyRequest };
Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer = function() {};
Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveUserDefaultCurrencyResponse(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Currency"))
            })
    };
Xrm.Gen.RetrieveUserPrivilegesRequestSerializer = function() {};
Xrm.Gen.RetrieveUserPrivilegesRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("UserId", n.userId, 15) };
Xrm.Gen.RetrieveUserPrivilegesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.RetrieveUserPrivilegesRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "UserId"))
    };
Xrm.Gen.RetrieveUserPrivilegesResponseSerializer = function() {};
Xrm.Gen.RetrieveUserPrivilegesResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .RetrieveUserPrivilegesResponse(Xrm.Soap.$5.$7(Array, n, "RolePrivileges", "RolePrivilegeArray"))
            })
    };
Xrm.Gen.RevertProductRequestSerializer = function() {};
Xrm.Gen.RevertProductRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Target", n.target, 6) };
Xrm.Gen.RevertProductRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n) ? null : new Xrm.Gen.RevertProductRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"))
};
Xrm.Gen.ReviseQuoteRequestSerializer = function() {};
Xrm.Gen.ReviseQuoteRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("QuoteId", n.quoteId, 15) + Xrm.Soap.Write.f("ColumnSet", n.columnSet, -1, "a:ColumnSet")
};
Xrm.Gen.ReviseQuoteRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.ReviseQuoteRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QuoteId"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.$4s, n, "ColumnSet", "ColumnSet"))
};
Xrm.Gen.ReviseQuoteResponseSerializer = function() {};
Xrm.Gen.ReviseQuoteResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.ReviseQuoteResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"))
        })
};
Xrm.Gen.RevokeAccessRequestSerializer = function() {};
Xrm.Gen.RevokeAccessRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Target", n.target, 6) + Xrm.Soap.Write.f("Revokee", n.revokee, 6)
    };
Xrm.Gen.RevokeAccessRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.RevokeAccessRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
            Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Revokee"))
};
Xrm.Gen.RollupRequestSerializer = function() {};
Xrm.Gen.RollupRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, 6) +
        Xrm.Soap.Write.f("Query", n.query, -1, "a:FetchExpression") +
        Xrm.Soap.Write.f("RollupType", n.rollupType, -1, "a:RollupType")
};
Xrm.Gen.RollupRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.RollupRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
            Xrm.Soap.$5.$7(String, n, "Query", "Query"),
            Xrm.Soap.$5.$7(Xrm.Gen.$9G, n, "RollupType", "Enum"))
};
Xrm.Gen.RollupResponseSerializer = function() {};
Xrm.Gen.RollupResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.RollupResponse(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, n, "EntityCollection"))
        })
};
Xrm.Gen.RouteToRequestSerializer = function() {};
Xrm.Gen.RouteToRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, 6) + Xrm.Soap.Write.f("QueueItemId", n.queueItemId, 15)
};
Xrm.Gen.RouteToRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.RouteToRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Target"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QueueItemId"))
};
Xrm.Gen.SearchDocumentRequestSerializer = function() {};
Xrm.Gen.SearchDocumentRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("RegardingObjectType", n.regardingObjectType, 5) +
            Xrm.Soap.Write.f("RegardingObjectId", n.regardingObjectId, 14) +
            Xrm.Soap.Write.f("DocumentId", n.documentId, 14)
    };
Xrm.Gen.SearchDocumentRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.SearchDocumentRequest(Xrm.Soap.$5.$7(Number, n, "RegardingObjectType"),
            Xrm.Soap.$5.$7(String, n, "RegardingObjectId"),
            Xrm.Soap.$5.$7(String, n, "DocumentId"))
};
Xrm.Gen.SearchDocumentResponseSerializer = function() {};
Xrm.Gen.SearchDocumentResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.SearchDocumentResponse(Xrm.Soap.$5.$7(String, n, "SearchLocation"),
                Xrm.Soap.$5.$7(String, n, "DocumentLocation"))
        })
};
Xrm.Gen.SendEmailRequestSerializer = function() {};
Xrm.Gen.SendEmailRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("EmailId", n.emailId, 15) +
        Xrm.Soap.Write.f("IssueSend", n.issueSend, 0) +
        Xrm.Soap.Write.f("TrackingToken", n.trackingToken, 14)
};
Xrm.Gen.SendEmailRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.SendEmailRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "EmailId"),
            Xrm.Soap.$5.$7(Boolean, n, "IssueSend"),
            Xrm.Soap.$5.$7(String, n, "TrackingToken"))
};
Xrm.Gen.SendEmailResponseSerializer = function() {};
Xrm.Gen.SendEmailResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) { return new Xrm.Gen.SendEmailResponse(Xrm.Soap.$5.$7(String, n, "Subject")) })
};
Xrm.Gen.SendFaxRequestSerializer = function() {};
Xrm.Gen.SendFaxRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("FaxId", n.faxId, 15) + Xrm.Soap.Write.f("IssueSend", n.issueSend, 0)
};
Xrm.Gen.SendFaxRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.SendFaxRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "FaxId"),
            Xrm.Soap.$5.$7(Boolean, n, "IssueSend"))
};
Xrm.Gen.SetBusinessEquipmentRequestSerializer = function() {};
Xrm.Gen.SetBusinessEquipmentRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("EquipmentId", n.equipmentId, 15) +
            Xrm.Soap.Write.f("BusinessUnitId", n.businessUnitId, 15)
    };
Xrm.Gen.SetBusinessEquipmentRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.SetBusinessEquipmentRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "EquipmentId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "BusinessUnitId"))
    };
Xrm.Gen.SetBusinessSystemUserRequestSerializer = function() {};
Xrm.Gen.SetBusinessSystemUserRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("UserId", n.userId, 15) +
            Xrm.Soap.Write.f("BusinessId", n.businessId, 15) +
            Xrm.Soap.Write.f("ReassignPrincipal", n.reassignPrincipal, 6)
    };
Xrm.Gen.SetBusinessSystemUserRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.SetBusinessSystemUserRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "UserId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "BusinessId"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "ReassignPrincipal"))
    };
Xrm.Gen.SetDevErrorsRequestSerializer = function() {};
Xrm.Gen.SetDevErrorsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("UserId", n.userId, 15) +
            Xrm.Soap.Write.f("OrganizationId", n.organizationId, 15) +
            Xrm.Soap.Write.f("Value", n.value, 0)
    };
Xrm.Gen.SetDevErrorsRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.SetDevErrorsRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "UserId"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OrganizationId"),
            Xrm.Soap.$5.$7(Boolean, n, "Value"))
};
Xrm.Gen.SetFeatureStatusRequestSerializer = function() {};
Xrm.Gen.SetFeatureStatusRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("FetaureType", n.fetaureType, 5) +
            Xrm.Soap.Write.f("Status", n.status, 0) +
            Xrm.Soap.Write.f("IsSolutionUninstall", n.isSolutionUninstall, 0)
    };
Xrm.Gen.SetFeatureStatusRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.SetFeatureStatusRequest(Xrm.Soap.$5.$7(Number, n, "FetaureType"),
                Xrm.Soap.$5.$7(Boolean, n, "Status"),
                Xrm.Soap.$5.$7(Boolean, n, "IsSolutionUninstall"))
    };
Xrm.Gen.SetParentBusinessUnitRequestSerializer = function() {};
Xrm.Gen.SetParentBusinessUnitRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("BusinessUnitId", n.businessUnitId, 15) + Xrm.Soap.Write.f("ParentId", n.parentId, 15)
    };
Xrm.Gen.SetParentBusinessUnitRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.SetParentBusinessUnitRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "BusinessUnitId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ParentId"))
    };
Xrm.Gen.SetParentTeamRequestSerializer = function() {};
Xrm.Gen.SetParentTeamRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("TeamId", n.teamId, 15) + Xrm.Soap.Write.f("BusinessId", n.businessId, 15)
    };
Xrm.Gen.SetParentTeamRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.SetParentTeamRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "TeamId"),
            Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "BusinessId"))
};
Xrm.Gen.SetStateRequestSerializer = function() {};
Xrm.Gen.SetStateRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("EntityMoniker", n.entityMoniker, 6) +
        Xrm.Soap.Write.f("State", n.state, 11) +
        Xrm.Soap.Write.f("Status", n.status, 11) +
        Xrm.Soap.Write.f("MaintainLegacyAppServerBehavior", n.maintainLegacyAppServerBehavior, 0)
};
Xrm.Gen.SetStateRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.SetStateRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "EntityMoniker"),
            Xrm.Soap.$5.$7(Number, n, "State", "OptionSet"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"),
            Xrm.Soap.$5.$7(Boolean, n, "MaintainLegacyAppServerBehavior"))
};
Xrm.Gen.StartRIProvisioningRequestSerializer = function() {};
Xrm.Gen.StartRIProvisioningRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("HubName", n.hubName, 14) + Xrm.Soap.Write.f("PrimaryKey", n.primaryKey, 14)
    };
Xrm.Gen.StartRIProvisioningRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.StartRIProvisioningRequest(Xrm.Soap.$5.$7(String, n, "HubName"),
                Xrm.Soap.$5.$7(String, n, "PrimaryKey"))
    };
Xrm.Gen.UnfollowEmailAttachmentRequestSerializer = function() {};
Xrm.Gen.UnfollowEmailAttachmentRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ActivityMimeAttachmentId", n.activityMimeAttachmentId, 15)
    };
Xrm.Gen.UnfollowEmailAttachmentRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.UnfollowEmailAttachmentRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ActivityMimeAttachmentId"))
    };
Xrm.Gen.UnlockInvoicePricingRequestSerializer = function() {};
Xrm.Gen.UnlockInvoicePricingRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("InvoiceId", n.invoiceId, 15) };
Xrm.Gen.UnlockInvoicePricingRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.UnlockInvoicePricingRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "InvoiceId"))
    };
Xrm.Gen.UnlockSalesOrderPricingRequestSerializer = function() {};
Xrm.Gen.UnlockSalesOrderPricingRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("SalesOrderId", n.salesOrderId, 15) };
Xrm.Gen.UnlockSalesOrderPricingRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.UnlockSalesOrderPricingRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "SalesOrderId"))
    };
Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer = function() {};
Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("SiteCollection", n.siteCollection, 14) +
            Xrm.Soap.Write.f("FolderStructureEntity", n.folderStructureEntity, 5) +
            Xrm.Soap.Write.f("EntityDocMgmtXml", n.entityDocMgmtXml, 14) +
            Xrm.Soap.Write.f("ValidateStatus", n.validateStatus, 5) +
            Xrm.Soap.Write.f("ValidateStatusReason", n.validateStatusReason, 5)
    };
Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .UpdateDocumentManagementSettingsRequest(Xrm.Soap.$5.$7(String, n, "SiteCollection"),
                Xrm.Soap.$5.$7(Number, n, "FolderStructureEntity"),
                Xrm.Soap.$5.$7(String, n, "EntityDocMgmtXml"),
                Xrm.Soap.$5.$7(Number, n, "ValidateStatus"),
                Xrm.Soap.$5.$7(Number, n, "ValidateStatusReason"))
    };
Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer = function() {};
Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("SharePointRealm", n.sharePointRealm, 14) +
            Xrm.Soap.Write.f("IsSharePointOnline", n.isSharePointOnline, 0) +
            Xrm.Soap.Write.f("UseAuthorizationServer", n.useAuthorizationServer, 0)
    };
Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .UpdateGlobalSharePointSettingsRequest(Xrm.Soap.$5.$7(String, n, "SharePointRealm"),
                Xrm.Soap.$5.$7(Boolean, n, "IsSharePointOnline"),
                Xrm.Soap.$5.$7(Boolean, n, "UseAuthorizationServer"))
    };
Xrm.Gen.UpdateProductPropertiesRequestSerializer = function() {};
Xrm.Gen.UpdateProductPropertiesRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("PropertyInstanceList", n.propertyInstanceList, -1, "a:EntityCollection")
    };
Xrm.Gen.UpdateProductPropertiesRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.UpdateProductPropertiesRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection, n, "PropertyInstanceList"))
    };
Xrm.Gen.UpdateRequestSerializer = function() {};
Xrm.Gen.UpdateRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("Target", n.target, -1, "a:Entity") +
        Xrm.Soap.Write.f("SuppressDuplicateDetection", n.suppressDuplicateDetection, 0) +
        Xrm.Soap.Write.f("CalculateMatchCodeSynchronously", n.calculateMatchCodeSynchronously, 0) +
        Xrm.Soap.Write.f("SolutionUniqueName", n.solutionUniqueName, 14) +
        Xrm.Soap.Write.f("MaintainLegacyAppServerBehavior", n.maintainLegacyAppServerBehavior, 0) +
        Xrm.Soap.Write.f("ConcurrencyBehavior",
            n.concurrencyBehavior,
            -1,
            "c:ConcurrencyBehavior",
            'xmlns:c="http://schemas.microsoft.com/xrm/7.1/Contracts"') +
        Xrm.Soap.Write.f("ReturnRowVersion", n.returnRowVersion, 0)
};
Xrm.Gen.UpdateRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.UpdateRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                n,
                "Target"),
            Xrm.Soap.$5.$7(Boolean, n, "SuppressDuplicateDetection"),
            Xrm.Soap.$5.$7(Boolean, n, "CalculateMatchCodeSynchronously"),
            Xrm.Soap.$5.$7(String, n, "SolutionUniqueName"),
            Xrm.Soap.$5.$7(Boolean, n, "MaintainLegacyAppServerBehavior"),
            Xrm.Soap.$5.$7(Xrm.Gen.$7I, n, "ConcurrencyBehavior", "Enum"),
            Xrm.Soap.$5.$7(Boolean, n, "ReturnRowVersion"))
};
Xrm.Gen.UpdateRITenantInfoRequestSerializer = function() {};
Xrm.Gen.UpdateRITenantInfoRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("HubName", n.hubName, 14) + Xrm.Soap.Write.f("PrimaryKey", n.primaryKey, 14)
    };
Xrm.Gen.UpdateRITenantInfoRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.UpdateRITenantInfoRequest(Xrm.Soap.$5.$7(String, n, "HubName"),
                Xrm.Soap.$5.$7(String, n, "PrimaryKey"))
    };
Xrm.Gen.UpgradeToS2SRequestSerializer = function() {};
Xrm.Gen.UpgradeToS2SRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.UpgradeToS2SRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n) ? null : new Xrm.Gen.UpgradeToS2SRequest
};
Xrm.Gen.ValidateUrlRequestSerializer = function() {};
Xrm.Gen.ValidateUrlRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("SharePointUrls", n.sharePointUrls, 14)
};
Xrm.Gen.ValidateUrlRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n) ? null : new Xrm.Gen.ValidateUrlRequest(Xrm.Soap.$5.$7(String, n, "SharePointUrls"))
};
Xrm.Gen.ValidateUrlResponseSerializer = function() {};
Xrm.Gen.ValidateUrlResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) { return new Xrm.Gen.ValidateUrlResponse(Xrm.Soap.$5.$7(String, n, "UrlValidationResult")) })
};
Xrm.Gen.WhoAmIRequestSerializer = function() {};
Xrm.Gen.WhoAmIRequestSerializer.parametersToCrmSoap = function() { return null };
Xrm.Gen.WhoAmIRequestSerializer.loadFromCrmSoap = function(n) { return $0.$1(n) ? null : new Xrm.Gen.WhoAmIRequest };
Xrm.Gen.WhoAmIResponseSerializer = function() {};
Xrm.Gen.WhoAmIResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.WhoAmIResponse(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "UserId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "BusinessUnitId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OrganizationId"))
        })
};
Xrm.Gen.WinOpportunityRequestSerializer = function() {};
Xrm.Gen.WinOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityClose", n.opportunityClose, -1, "a:Entity") +
            Xrm.Soap.Write.f("Status", n.status, 11)
    };
Xrm.Gen.WinOpportunityRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.WinOpportunityRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord,
                n,
                "OpportunityClose"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
};
Xrm.Gen.WinQuoteRequestSerializer = function() {};
Xrm.Gen.WinQuoteRequestSerializer.parametersToCrmSoap = function(n) {
    return Xrm.Soap.Write.f("QuoteClose", n.quoteClose, -1, "a:Entity") + Xrm.Soap.Write.f("Status", n.status, 11)
};
Xrm.Gen.WinQuoteRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.WinQuoteRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord,
                n,
                "QuoteClose"),
            Xrm.Soap.$5.$7(Number, n, "Status", "OptionSet"))
};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetQuantityDecimalRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer
    .$$cctor = function() {
        Xrm.Soap.Serializer.$5s("GetQuantityDecimal",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetQuantityDecimalRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("GetQuantityDecimal",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetQuantityDecimalRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer
    .$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("Target", t.target, 6) +
            Xrm.Soap.EntityRecordSerializer.$10E("ProductId", t.productId, 15) +
            Xrm.Soap.EntityRecordSerializer.$10E("UoMId", t.uoMId, 15)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer
    .$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='Target']/b:value"),
            u = $0.$1(t) ? null : Xrm.Soap.EntityReferenceSerializer.loadFromCrmSoap(t),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ProductId']/b:value"),
            f = $0.$1(i) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(i.get_$r()),
            r = n.$O(".//a:KeyValuePairOfstringanyType[b:key='UoMId']/b:value"),
            e = $0.$1(r) ? null : new Microsoft.Crm.Client.Core.Framework.Guid(r.get_$r());
        return new Xrm.Gen.GetQuantityDecimalRequest(u, f, e)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetQuantityDecimalResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("GetQuantityDecimal",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .GetQuantityDecimalResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer
    .$4S = function(n) {
        var t, i, r;
        if (!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))) {
            if (i = t.$O(".//a:KeyValuePairOfstringanyType[b:key='Quantity']/b:value"), $0
                .$1(i)) throw Error.notImplemented();
            else r = parseInt(i.get_$r());
            return new Xrm.Gen.GetQuantityDecimalResponse(r)
        }
        return null
    };
Xrm.Gen.CanCloseOpportunityRequestSerializer = function() {};
Xrm.Gen.CanCloseOpportunityRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("OpportunityId", n.opportunityId, 15) +
            Xrm.Soap.Write.f("QuoteId", n.quoteId, 15) +
            Xrm.Soap.Write.f("NewStatus", n.newStatus, 5)
    };
Xrm.Gen.CanCloseOpportunityRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.CanCloseOpportunityRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "OpportunityId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "QuoteId"),
                Xrm.Soap.$5.$7(Number, n, "NewStatus"))
    };
Xrm.Gen.CanCloseOpportunityResponseSerializer = function() {};
Xrm.Gen.CanCloseOpportunityResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.CanCloseOpportunityResponse(Xrm.Soap.$5.$7(Boolean, n, "CanClose")) })
    };
Xrm.Gen.UpdateResponseSerializer = function() {};
Xrm.Gen.UpdateResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) {
            return new Xrm.Gen.UpdateResponse(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "EntityReference"))
        })
};
Xrm.Gen.UpdateDelveActionStatusRequestSerializer = function() {};
Xrm.Gen.UpdateDelveActionStatusRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("MessageId", n.messageId, 14) +
            Xrm.Soap.Write.f("ActionState", n.actionState, 5) +
            Xrm.Soap.Write.f("RecordId", n.recordId, 14)
    };
Xrm.Gen.UpdateDelveActionStatusRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.UpdateDelveActionStatusRequest(Xrm.Soap.$5.$7(String, n, "MessageId"),
                Xrm.Soap.$5.$7(Number, n, "ActionState"),
                Xrm.Soap.$5.$7(String, n, "RecordId"))
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftRequestSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftRequestSerializer.$$cctor = function() {
        Xrm.Soap.Serializer.$5s("CreateEmailReplyDraft",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CreateEmailReplyDraftRequestSerializer.$AZ);
        Xrm.Soap.Serializer.$Ab("CreateEmailReplyDraft",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CreateEmailReplyDraftRequestSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftRequestSerializer.$AZ = function(n) {
        var t = n;
        return Xrm.Soap.EntityRecordSerializer.$10E("MessageId", t.messageId, 14) +
            Xrm.Soap.EntityRecordSerializer.$10E("ReplyText", t.replyText, 14)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftRequestSerializer.$4S = function(n) {
        if ($0.$1(n)) return null;
        var t = n.$O(".//a:KeyValuePairOfstringanyType[b:key='MessageId']/b:value"),
            r = $0.$1(t) ? null : t.get_$r(),
            i = n.$O(".//a:KeyValuePairOfstringanyType[b:key='ReplyText']/b:value"),
            u = $0.$1(i) ? null : i.get_$r();
        return new Xrm.Gen.CreateEmailReplyDraftRequest(r, u)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftResponseSerializer = function() {};
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftResponseSerializer.$$cctor = function() {
        Xrm.Soap.$N.$5s("CreateEmailReplyDraft",
            Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
            .CreateEmailReplyDraftResponseSerializer.$4S)
    };
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftResponseSerializer.$4S = function(n) {
        var t, i, r;
        return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
            ? (i = t
                    .$O(".//a:KeyValuePairOfstringanyType[b:key='MailWebLink']/b:value"), r =
                    $0.$1(i) ? null : i.get_$r(),
                new Xrm.Gen.CreateEmailReplyDraftResponse(r))
            : null
    };
Xrm.Gen.CopySharePointDocumentsRequestSerializer = function() {};
Xrm.Gen.CopySharePointDocumentsRequestSerializer.$$cctor = function() {
    Xrm.Soap.Serializer.$5s("CopySharePointDocuments",
        Xrm.Gen.CopySharePointDocumentsRequestSerializer.parametersToCrmSoap);
    Xrm.Soap.Serializer.$Ab("CopySharePointDocuments", Xrm.Gen.CopySharePointDocumentsRequestSerializer.loadFromCrmSoap)
};
Xrm.Gen.CopySharePointDocumentsRequestSerializer.parametersToCrmSoap = function(n) {
    var t = n;
    return Xrm.Soap.EntityRecordSerializer.$10E("DestinationLocation", t.destinationLocation, 14) +
        Xrm.Soap.EntityRecordSerializer.$10E("AbsoluteUrls",
            t.absoluteUrls,
            -1,
            "sa:ArrayOfstring",
            'xmlns:sa="http://schemas.microsoft.com/2003/10/Serialization/Arrays"') +
        Xrm.Soap.EntityRecordSerializer.$10E("RelativeUrls",
            t.relativeUrls,
            -1,
            "sa:ArrayOfstring",
            'xmlns:sa="http://schemas.microsoft.com/2003/10/Serialization/Arrays"') +
        Xrm.Soap.EntityRecordSerializer.$10E("Source", t.source, 14)
};
Xrm.Gen.CopySharePointDocumentsRequestSerializer.loadFromCrmSoap = function(n) {
    var t, i, o, h;
    if ($0.$1(n)) return null;
    var s = n.$O(".//a:KeyValuePairOfstringanyType[b:key='DestinationLocation']/b:value"),
        c = $0.$1(s) ? null : s.get_$r(),
        l = n.$O(".//a:KeyValuePairOfstringanyType[b:key='AbsoluteUrls']/b:value"),
        r = n.$5k(".//a:KeyValuePairOfstringanyType[b:key='AbsoluteUrls']/b:value/sa:string"),
        f = null;
    if (!$0.$1(r)) for (f = new Array(r.get_$l()), t = 0; t < r.get_$l(); t++) f[t] = r.get_$H(t).get_$r();
    var a = n.$O(".//a:KeyValuePairOfstringanyType[b:key='RelativeUrls']/b:value"),
        u = n.$5k(".//a:KeyValuePairOfstringanyType[b:key='RelativeUrls']/b:value/sa:string"),
        e = null;
    if (!$0.$1(u)) for (e = new Array(u.get_$l()), i = 0; i < u.get_$l(); i++) e[i] = u.get_$H(i).get_$r();
    return o = n
        .$O(".//a:KeyValuePairOfstringanyType[b:key='Source']/b:value"), h = $0.$1(o) ? null : o.get_$r(), new Xrm.Gen
        .CopySharePointDocumentsRequest(c, f, e, h)
};
Xrm.Gen.CopySharePointDocumentsResponseSerializer = function() {};
Xrm.Gen.CopySharePointDocumentsResponseSerializer
    .$$cctor = function() {
        Xrm.Soap.$N.$5s("CopySharePointDocuments", Xrm.Gen.CopySharePointDocumentsResponseSerializer.loadFromCrmSoap)
    };
Xrm.Gen.CopySharePointDocumentsResponseSerializer.loadFromCrmSoap = function(n) {
    var t, i, r;
    return!$0.$1(n) && (Xrm.Soap.$N.$D3(n), t = null, t = n.$O(".//a:Results"), !$0.$1(t))
        ? (i = t
            .$O(".//a:KeyValuePairOfstringanyType[b:key='Status']/b:value"), r = $0.$1(i) ? null : i.get_$r(), new Xrm
            .Gen.CopySharePointDocumentsResponse(r))
        : null
};
Xrm.Gen.SetActionCardStateRequestSerializer = function() {};
Xrm.Gen.SetActionCardStateRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("ActionCardId", n.actionCardId, 15) +
            Xrm.Soap.Write.f("ActionState", n.actionState, 11) +
            Xrm.Soap.Write.f("MessageId", n.messageId, 14)
    };
Xrm.Gen.SetActionCardStateRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.SetActionCardStateRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ActionCardId"),
                Xrm.Soap.$5.$7(Number, n, "ActionState", "OptionSet"),
                Xrm.Soap.$5.$7(String, n, "MessageId"))
    };
Xrm.Gen.SnoozeActionCardRequestSerializer = function() {};
Xrm.Gen.SnoozeActionCardRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("ActionCardId", n.actionCardId, 15) };
Xrm.Gen.SnoozeActionCardRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.SnoozeActionCardRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ActionCardId"))
    };
Xrm.Gen.PopulateCardRequestSerializer = function() {};
Xrm.Gen.PopulateCardRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("UserId", n.userId, 15) };
Xrm.Gen.PopulateCardRequestSerializer.loadFromCrmSoap = function(n) {
    return $0.$1(n)
        ? null
        : new Xrm.Gen.PopulateCardRequest(Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "UserId"))
};
Xrm.Gen.PopulateCardResponseSerializer = function() {};
Xrm.Gen.PopulateCardResponseSerializer.loadFromCrmSoap = function(n, t) {
    return Xrm.Soap.$N.$1u(n,
        t,
        function(n) { return new Xrm.Gen.PopulateCardResponse(Xrm.Soap.$5.$7(String, n, "Data")) })
};
Xrm.Gen.LogExternalResultsClickedRequestSerializer = function() {};
Xrm.Gen.LogExternalResultsClickedRequestSerializer
    .parametersToCrmSoap = function(n) { return Xrm.Soap.Write.f("Source", n.source, 14) };
Xrm.Gen.LogExternalResultsClickedRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n) ? null : new Xrm.Gen.LogExternalResultsClickedRequest(Xrm.Soap.$5.$7(String, n, "Source"))
    };
Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer = function() {};
Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Source", n.source, 6) +
            Xrm.Soap.Write.f("Language", n.language, 6) +
            Xrm.Soap.Write.f("IsMajor", n.isMajor, 0)
    };
Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .CreateKnowledgeArticleTranslationRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Source"),
                Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Language"),
                Xrm.Soap.$5.$7(Boolean, n, "IsMajor"))
    };
Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer = function() {};
Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .CreateKnowledgeArticleTranslationResponse(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference,
                        n,
                        "CreateKnowledgeArticleTranslation"))
            })
    };
Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer = function() {};
Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Source", n.source, 6) + Xrm.Soap.Write.f("IsMajor", n.isMajor, 0)
    };
Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .CreateKnowledgeArticleVersionRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Source"),
                Xrm.Soap.$5.$7(Boolean, n, "IsMajor"))
    };
Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer = function() {};
Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .CreateKnowledgeArticleVersionResponse(Xrm.Soap.$5
                        .$7(Xrm.Objects.EntityReference, n, "CreateKnowledgeArticleVersion"))
            })
    };
Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer = function() {};
Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Source", n.source, 6) +
            Xrm.Soap.Write.f("ViewDate", n.viewDate, 2) +
            Xrm.Soap.Write.f("Location", n.location, 5) +
            Xrm.Soap.Write.f("Count", n.count, 5)
    };
Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen
            .IncrementKnowledgeArticleViewCountRequest(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference, n, "Source"),
                Xrm.Soap.$5.$7(Date, n, "ViewDate"),
                Xrm.Soap.$5.$7(Number, n, "Location"),
                Xrm.Soap.$5.$7(Number, n, "Count"))
    };
Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer = function() {};
Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .IncrementKnowledgeArticleViewCountResponse(Xrm.Soap.$5.$7(Xrm.Objects.EntityReference,
                        n,
                        "IncrementKnowledgeArticleViewCount"))
            })
    };
Xrm.Gen.PublishKnowledgeArticleRequestSerializer = function() {};
Xrm.Gen.PublishKnowledgeArticleRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("Entity", n.entity, -1, "a:Entity") +
            Xrm.Soap.Write.f("CopyRelatedProductFromAssociatedPrimary", n.copyRelatedProductFromAssociatedPrimary, 0) +
            Xrm.Soap.Write
            .f("CopyRelatedCategoryFromAssociatedPrimary", n.copyRelatedCategoryFromAssociatedPrimary, 0) +
            Xrm.Soap.Write.f("PublishApprovedRelatedTranslations", n.publishApprovedRelatedTranslations, 0)
    };
Xrm.Gen.PublishKnowledgeArticleRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.PublishKnowledgeArticleRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord, n, "Entity"),
                Xrm.Soap.$5.$7(Boolean, n, "CopyRelatedProductFromAssociatedPrimary"),
                Xrm.Soap.$5.$7(Boolean, n, "CopyRelatedCategoryFromAssociatedPrimary"),
                Xrm.Soap.$5.$7(Boolean, n, "PublishApprovedRelatedTranslations"))
    };
Xrm.Gen.PublishKnowledgeArticleResponseSerializer = function() {};
Xrm.Gen.PublishKnowledgeArticleResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) { return new Xrm.Gen.PublishKnowledgeArticleResponse(Xrm.Soap.$5.$7(Boolean, n, "IsPublish")) })
    };
Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer = function() {};
Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("TrackingId", n.trackingId, 15) +
            Xrm.Soap.Write.f("ConversationTrackingId", n.conversationTrackingId, 15) +
            Xrm.Soap.Write.f("ClientType", n.clientType, 14) +
            Xrm.Soap.Write.f("EmailLinkUrls",
                n.emailLinkUrls,
                -1,
                "sa:ArrayOfstring",
                'xmlns:sa="http://schemas.microsoft.com/2003/10/Serialization/Arrays"')
    };
Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.GetEmailLinkTrackingUrlsRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "TrackingId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ConversationTrackingId"),
                Xrm.Soap.$5.$7(String, n, "ClientType"),
                Xrm.Soap.$5.$7(Array, n, "EmailLinkUrls", "StringArray"))
    };
Xrm.Gen.GetEmailLinkTrackingUrlsResponseSerializer = function() {};
Xrm.Gen.GetEmailLinkTrackingUrlsResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen
                    .GetEmailLinkTrackingUrlsResponse(Xrm.Soap.$5.$7(Array, n, "EmailLinkTrackingUrls", "StringArray"))
            })
    };
Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer = function() {};
Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer
    .parametersToCrmSoap = function(n) {
        return Xrm.Soap.Write.f("TrackingId", n.trackingId, 15) +
            Xrm.Soap.Write.f("ConversationTrackingId", n.conversationTrackingId, 15) +
            Xrm.Soap.Write.f("ClientType", n.clientType, 14)
    };
Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer
    .loadFromCrmSoap = function(n) {
        return $0.$1(n)
            ? null
            : new Xrm.Gen.GetEmailTrackingPixelUrlRequest(Xrm.Soap.$5
                .$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "TrackingId"),
                Xrm.Soap.$5.$7(Microsoft.Crm.Client.Core.Framework.Guid, n, "ConversationTrackingId"),
                Xrm.Soap.$5.$7(String, n, "ClientType"))
    };
Xrm.Gen.GetEmailTrackingPixelUrlResponseSerializer = function() {};
Xrm.Gen.GetEmailTrackingPixelUrlResponseSerializer
    .loadFromCrmSoap = function(n, t) {
        return Xrm.Soap.$N.$1u(n,
            t,
            function(n) {
                return new Xrm.Gen.GetEmailTrackingPixelUrlResponse(Xrm.Soap.$5.$7(String, n, "EmailTrackingPixelUrl"))
            })
    };
Xrm.Gen.GetQuantityDecimalRequest = function(n, t, i) {
    this.target = n;
    this.productId = t;
    this.uoMId = i;
    this.name = "GetQuantityDecimal";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveCardDataRequest = function(n, t) {
    this.cardTypeId = n;
    this.additionalParameter = t;
    this.name = "RetrieveCardData";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CanCloseOpportunityRequest = function(n, t, i) {
    this.opportunityId = n;
    this.quoteId = t;
    this.newStatus = i;
    this.name = "CanCloseOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AddDynamicPropertyRequest = function(n, t) {
    this.regardingObject = n;
    this.dynamicProperty = t;
    this.name = "AddDynamicProperty";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AddItemCampaignActivityRequest = function(n, t, i) {
    this.campaignActivityId = n;
    this.itemId = t;
    this.entityName = i;
    this.name = "AddItemCampaignActivity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AddItemCampaignRequest = function(n, t, i) {
    this.campaignId = n;
    this.entityId = t;
    this.entityName = i;
    this.name = "AddItemCampaign";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Type.registerNamespace("Xrm.Sdk");
Xrm.Sdk.AddItemRequest = function(n, t, i) {
    this.campaignId = n;
    this.entityId = t;
    this.objectTypeCode = i;
    this.name = "AddItem";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AddOrEditLocationRequest = function(n, t, i, r, u, f, e, o, s, h) {
    this.locationName = n;
    this.absUrl = t;
    this.regardingObjectId = i;
    this.relativePath = r;
    this.regardingObjType = u;
    this.parentType = f;
    this.parentId = e;
    this.isAddOrEditMode = o;
    this.isCreateFolder = s;
    this.documentId = h;
    this.name = "AddOrEditLocation";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AddRecurrenceRequest = function(n, t) {
    this.target = n;
    this.appointmentId = t;
    this.name = "AddRecurrence";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.AddToQueueRequest = function(n, t, i, r) {
    this.target = n;
    this.sourceQueueId = t;
    this.destinationQueueId = i;
    this.queueItemProperties = r;
    this.name = "AddToQueue";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.AssociateKnowledgeArticleRequest = function(n, t, i, r) {
    this.regardingObjectId = n;
    this.regardingObjectTypeCode = t;
    this.associationRelationshipName = i;
    this.knowledgeArticleId = r;
    this.name = "AssociateKnowledgeArticle";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.DisassociateKnowledgeArticleRequest = function(n, t, i, r) {
    this.regardingObjectId = n;
    this.regardingObjectTypeCode = t;
    this.associationRelationshipName = i;
    this.knowledgeArticleId = r;
    this.name = "DisassociateKnowledgeArticle";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest = function(n) {
    this.target = n;
    this.name = "ApplyRecordCreationAndUpdateRule";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AssignAllRecordsTeamRequest = function(n, t, i, r) {
    this.oldOwnerId = n;
    this.oldOwnerType = t;
    this.newOwnerId = i;
    this.newOwnerType = r;
    this.name = "AssignAllRecordsTeam";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AssignRequest = function(n, t) {
    this.target = n;
    this.assignee = t;
    this.name = "Assign";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.AssociateRequest = function(n, t, i) {
    this.target = n;
    this.relationship = t;
    this.relatedEntities = i;
    this.name = "Associate";
    this.xmlNamespace = "http://schemas.microsoft.com/xrm/2011/Contracts"
};
Xrm.Gen.BestTimeToEmailRequest = function(n) {
    this.entityReferenceCollection = n;
    this.name = "BestTimeToEmail";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.BookRequest = function(n, t, i) {
    this.target = n;
    this.maintainLegacyAppServerBehavior = t;
    this.returnNotifications = i;
    this.name = "Book";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.BulkDeleteImportedRecordsRequest = function(n, t, i, r, u, f, e, o, s, h) {
    this.targetEntityName = n;
    this.importSequenceNumber = t;
    this.importId = i;
    this.deleteImportHistory = r;
    this.jobName = u;
    this.sendEmailNotification = f;
    this.toRecipients = e;
    this.ccRecipients = o;
    this.recurrencePattern = s;
    this.sourceImportId = h;
    this.name = "BulkDeleteImportedRecords";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.CalculateActualValueOpportunityRequest = function(n) {
    this.opportunityId = n;
    this.name = "CalculateActualValueOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CancelSalesOrderRequest = function(n, t) {
    this.orderClose = n;
    this.status = t;
    this.name = "CancelSalesOrder";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CancelContractRequest = function(n, t, i) {
    this.$1jp = n;
    this.$1ie = t;
    this.$Fq = i;
    this.name = "CancelContract";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CanUserSendEmailRequest = function() {
    this.name = "CanUserSendEmail";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CheckInDocumentRequest = function(n, t, i) {
    this.entity = n;
    this.checkInComments = t;
    this.retainCheckout = i;
    this.name = "CheckInDocument";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CheckoutDocumentRequest = function(n) {
    this.entity = n;
    this.name = "CheckoutDocument";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CloneContractRequest = function(n, t) {
    this.contractId = n;
    this.includeCanceledLines = t;
    this.name = "CloneContract";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CloneProductRequest = function(n) {
    this.source = n;
    this.name = "CloneProduct";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CloneMobileOfflineProfileRequest = function(n) {
    this.source = n;
    this.name = "CloneMobileOfflineProfile";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CloseIncidentRequest = function(n, t) {
    this.incidentResolution = n;
    this.status = t;
    this.name = "CloseIncident";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CloseQuoteRequest = function(n, t) {
    this.quoteClose = n;
    this.status = t;
    this.name = "CloseQuote";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ConvertActivityRequest = function(n, t, i, r, u) {
    this.activityId = n;
    this.activityEntityName = t;
    this.targetEntity = i;
    this.targetEntityName = r;
    this.createCampaignResponse = u;
    this.name = "ConvertActivity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ConvertCampaignResponseRequest = function(n, t, i, r, u, f) {
    this.campaignResponse = n;
    this.entityName = t;
    this.createOpportunityForExistingCustomer = i;
    this.customer = r;
    this.currency = u;
    this.owner = f;
    this.name = "ConvertCampaignResponse";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ConvertQuoteToSalesOrderRequest = function(n, t, i, r, u, f, e) {
    this.quoteId = n;
    this.columnSet = t;
    this.quoteCloseDate = i;
    this.quoteCloseStatus = r;
    this.quoteCloseSubject = u;
    this.quoteCloseDescription = f;
    this.processInstanceId = e;
    this.name = "ConvertQuoteToSalesOrder";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ConvertSalesOrderToInvoiceRequest = function(n, t) {
    this.salesOrderId = n;
    this.columnSet = t;
    this.name = "ConvertSalesOrderToInvoice";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CopyCampaignRequest = function(n, t) {
    this.baseCampaign = n;
    this.saveAsTemplate = t;
    this.name = "CopyCampaign";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CopyCampaignResponseRequest = function(n) {
    this.campaignResponseId = n;
    this.name = "CopyCampaignResponse";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CopyDynamicListToStaticRequest = function(n) {
    this.listId = n;
    this.name = "CopyDynamicListToStatic";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CreateAndAssociateRequest = function(n, t, i, r) {
    this.regardingObjectId = n;
    this.regardingObjectTypeCode = t;
    this.associationRelationshipName = i;
    this.article = r;
    this.name = "CreateAndAssociate";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CreateDocumentLibrariesRequest = function(n, t) {
    this.documentLibraryNames = n;
    this.url = t;
    this.name = "CreateDocumentLibraries";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CreateFolderRequest = function(n, t, i, r, u, f, e) {
    this.folderName = n;
    this.regardingObjectType = t;
    this.regardingObjectId = i;
    this.documentType = r;
    this.parentLocationId = u;
    this.siteType = f;
    this.validateFolder = e;
    this.name = "CreateFolder";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CreateProductsRequest = function(n, t) {
    this.entities = n;
    this.parentEntity = t;
    this.name = "CreateProducts";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.DeleteDocumentRequest = function(n) {
    this.entities = n;
    this.name = "DeleteDocument";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.DeleteOpenInstancesRequest = function(n, t, i) {
    this.target = n;
    this.seriesEndDate = t;
    this.stateOfPastInstances = i;
    this.name = "DeleteOpenInstances";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.DisassociateRequest = function(n, t, i) {
    this.target = n;
    this.relationship = t;
    this.relatedEntities = i;
    this.name = "Disassociate";
    this.xmlNamespace = "http://schemas.microsoft.com/xrm/2011/Contracts"
};
Xrm.Gen.DiscardDocumentCheckoutRequest = function(n) {
    this.entity = n;
    this.name = "DiscardDocumentCheckout";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.EditDocumentPropertiesRequest = function(n) {
    this.entity = n;
    this.name = "EditDocumentProperties";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.ExecuteQuickFindRequest = function(n, t, i) {
    this.searchText = n;
    this.entityGroupName = t;
    this.entityNames = i;
    this.name = "ExecuteQuickFind";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ExecuteWorkflowRequest = function(n, t, i) {
    this.entityId = n;
    this.workflowId = t;
    this.inputArguments = i;
    this.name = "ExecuteWorkflow";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ExportTemplateToExcelOnlineRequest = function(n, t, i, r) {
    this.template = n;
    this.fetchXml = t;
    this.queryApi = i;
    this.queryParameters = r;
    this.name = "ExportTemplateToExcelOnline";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ExportToExcelOnlineRequest = function(n, t, i, r, u) {
    this.view = n;
    this.fetchXml = t;
    this.layoutXml = i;
    this.queryApi = r;
    this.queryParameters = u;
    this.name = "ExportToExcelOnline";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.FetchSiteUrlRequest = function(n, t, i) {
    this.documentId = n;
    this.regardingObjectId = t;
    this.regardingObjType = i;
    this.name = "FetchSiteUrl";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.FollowEmailAttachmentRequest = function(n) {
    this.activityMimeAttachmentId = n;
    this.name = "FollowEmailAttachment";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.FlushMetadataCacheRequest = function() {
    this.name = "FlushMetadataCache";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.FulfillSalesOrderRequest = function(n, t) {
    this.orderClose = n;
    this.status = t;
    this.name = "FulfillSalesOrder";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetSimilarRecordsRequest = function(n, t, i) {
    this.id = n;
    this.filter = t;
    this.returnFields = i;
    this.name = "GetSimilarRecords";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.InstantiateTemplateRequest = function(n, t, i) {
    this.templateId = n;
    this.objectType = t;
    this.objectId = i;
    this.name = "InstantiateTemplate";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveUnpublishedMultipleRequest = function(n) {
    this.query = n;
    this.name = "RetrieveUnpublishedMultiple";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GenerateInvoiceFromOpportunityRequest = function(n, t) {
    this.opportunityId = n;
    this.columnSet = t;
    this.name = "GenerateInvoiceFromOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GenerateQuoteFromOpportunityRequest = function(n, t) {
    this.opportunityId = n;
    this.columnSet = t;
    this.name = "GenerateQuoteFromOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GenerateSalesOrderFromOpportunityRequest = function(n, t) {
    this.opportunityId = n;
    this.columnSet = t;
    this.name = "GenerateSalesOrderFromOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetActualDateRequest = function(n) {
    this.date = n;
    this.name = "GetActualDate";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetAllTimeZonesWithDisplayNameRequest = function(n) {
    this.localeId = n;
    this.name = "GetAllTimeZonesWithDisplayName";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetDefaultPriceLevelRequest = function(n, t) {
    this.entityName = n;
    this.columnSet = t;
    this.name = "GetDefaultPriceLevel";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetEntitiesForAzureMLRequest = function(n) {
    this.filter = n;
    this.name = "GetEntitiesForAzureML";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetFieldListForAzureMLRequest = function(n, t) {
    this.entityName = n;
    this.filter = t;
    this.name = "GetFieldListForAzureML";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetInvoiceProductsFromOpportunityRequest = function(n, t) {
    this.opportunityId = n;
    this.invoiceId = t;
    this.name = "GetInvoiceProductsFromOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetQuoteProductsFromOpportunityRequest = function(n, t) {
    this.opportunityId = n;
    this.quoteId = t;
    this.name = "GetQuoteProductsFromOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetRelationshipsForAzureMLRequest = function(n, t) {
    this.entityName = n;
    this.filter = t;
    this.name = "GetRelationshipsForAzureML";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetDataForTopicWordCloudRequest = function(n) {
    this.filter = n;
    this.name = "GetDataForTopicWordCloud";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest = function(n, t) {
    this.opportunityId = n;
    this.salesOrderId = t;
    this.name = "GetSalesOrderProductsFromOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetTrackingTokenEmailRequest = function(n) {
    this.subject = n;
    this.name = "GetTrackingTokenEmail";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetRIProvisioningStatusRequest = function() {
    this.name = "GetRIProvisioningStatus";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetRITenantEndpointUrlRequest = function() {
    this.name = "GetRITenantEndpointUrl";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetValidStatusTransitionRequest = function(n, t) {
    this.incidentId = n;
    this.toStateCode = t;
    this.name = "GetValidStatusTransition";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.GrantAccessRequest = function(n, t) {
    this.target = n;
    this.principalAccess = t;
    this.name = "GrantAccess";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.InviteUserRequest = function(n) {
    this.userId = n;
    this.name = "InviteUser";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.IsPartnerSolutionInstalledRequest = function(n) {
    this.solutionName = n;
    this.name = "IsPartnerSolutionInstalled";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.LockInvoicePricingRequest = function(n) {
    this.invoiceId = n;
    this.name = "LockInvoicePricing";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.LockSalesOrderPricingRequest = function(n) {
    this.salesOrderId = n;
    this.name = "LockSalesOrderPricing";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.LoseOpportunityRequest = function(n, t) {
    this.opportunityClose = n;
    this.status = t;
    this.name = "LoseOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.MigrateToS2SRequest = function(n, t) {
    this.siteUrl = n;
    this.enableOneDrive = t;
    this.name = "MigrateToS2S";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.ModifyAccessRequest = function(n, t) {
    this.target = n;
    this.principalAccess = t;
    this.name = "ModifyAccess";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.NavigateToNextEntityRequest = function(n, t, i, r, u, f, e, o) {
    this.currentEntityId = n;
    this.currentEntityLogicalName = t;
    this.nextEntityId = i;
    this.nextEntityLogicalName = r;
    this.newActiveStageId = u;
    this.newTraversedPath = f;
    this.processId = e;
    this.processInstanceId = o;
    this.name = "NavigateToNextEntity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.NewDocumentRequest = function(n, t, i, r) {
    this.fileName = n;
    this.regardingObjectId = t;
    this.regardingObjectTypeCode = i;
    this.locationId = r;
    this.name = "NewDocument";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.OverrideDynamicPropertiesRequest = function(n, t) {
    this.regardingObject = n;
    this.dynamicPropertyCollection = t;
    this.name = "OverrideDynamicProperties";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.OverrideDynamicPropertyRequest = function(n, t) {
    this.regardingObject = n;
    this.dynamicProperty = t;
    this.name = "OverrideDynamicProperty";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.OverwriteDynamicPropertyRequest = function(n, t) {
    this.regardingObject = n;
    this.dynamicProperty = t;
    this.name = "OverwriteDynamicProperty";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PickFromQueueRequest = function(n, t, i) {
    this.queueItemId = n;
    this.workerId = t;
    this.removeQueueItem = i;
    this.name = "PickFromQueue";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PopulateRecommendationCacheForRecordRequest = function(n) {
    this.parentRecord = n;
    this.name = "PopulateRecommendationCacheForRecord";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PopulateRecommendationCacheRequest = function(n, t) {
    this.entityName = n;
    this.itemId = t;
    this.name = "PopulateRecommendationCache";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PublishAllXmlRequest = function() {
    this.name = "PublishAllXml";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PublishProductHierarchyRequest = function(n) {
    this.target = n;
    this.name = "PublishProductHierarchy";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PublishThemeRequest = function(n) {
    this.target = n;
    this.name = "PublishTheme";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.TrackEmailRequest = function(n, t) {
    this.exchangeItemId = n;
    this.regarding = t;
    this.name = "TrackEmail";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ExecuteDataPerformanceActionRequest = function(n, t) {
    this.queryingUnitId = n;
    this.actionName = t;
    this.name = "ExecuteDataPerformanceAction";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.QualifyLeadRequest = function(n, t, i, r, u, f, e, o, s, h) {
    this.leadId = n;
    this.createAccount = t;
    this.createContact = i;
    this.createOpportunity = r;
    this.opportunityCurrencyId = u;
    this.opportunityCustomerId = f;
    this.sourceCampaignId = e;
    this.status = o;
    this.suppressDuplicateDetection = s;
    this.processInstanceId = h;
    this.name = "QualifyLead";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ReleaseToQueueRequest = function(n) {
    this.queueItemId = n;
    this.name = "ReleaseToQueue";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RemoveDynamicPropertyRequest = function(n, t) {
    this.regardingObject = n;
    this.dynamicProperty = t;
    this.name = "RemoveDynamicProperty";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RemoveFromQueueRequest = function(n) {
    this.queueItemId = n;
    this.name = "RemoveFromQueue";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RenewContractRequest = function(n, t, i) {
    this.contractId = n;
    this.status = t;
    this.includeCanceledLines = i;
    this.name = "RenewContract";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RenewEntitlementRequest = function(n, t) {
    this.entitlementId = n;
    this.status = t;
    this.name = "RenewEntitlement";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RescheduleRequest = function(n, t, i) {
    this.target = n;
    this.maintainLegacyAppServerBehavior = t;
    this.returnNotifications = i;
    this.name = "Reschedule";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.RetrieveAncestorsRequest = function(n, t) {
    this.entity = n;
    this.columns = t;
    this.name = "RetrieveAncestors";
    this.xmlNamespace = "http://schemas.microsoft.com/xrm/2011/Contracts"
};
Xrm.Gen.RetrieveAttributeListRequest = function(n) {
    this.regardingObjectTypeCode = n;
    this.name = "RetrieveAttributeList";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ShouldDisplaySLALimitNotificationRequest = function(n) {
    this.regardingObjectTypeCode = n;
    this.name = "ShouldDisplaySLALimitNotification";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveDefaultStatusForStateRequest = function(n, t) {
    this.entityName = n;
    this.state = t;
    this.name = "RetrieveDefaultStatusForState";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest = function(n, t) {
    this.regardingObject = n;
    this.forDraftRegarding = t;
    this.name = "RetrieveEntityDynamicPropertyDefinitions";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveFilteredProcessesRequest = function(n) {
    this.entityLogicalName = n;
    this.name = "RetrieveFilteredProcesses";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveItemIdsForRecordRequest = function(n) {
    this.parentRecord = n;
    this.name = "RetrieveItemIdsForRecord";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest = function(n) {
    this.$Ge = n;
    this.name = "RetrieveKeyPhrasesForKnowledgeSearch";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest = function(n) {
    this.target = n;
    this.name = "RetrieveKeyPhrasesForSimilaritySearch";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveProcessActiveStageRequest = function(n, t, i, r) {
    this.entityId = n;
    this.entityLogicalName = t;
    this.processId = i;
    this.processInstanceId = r;
    this.name = "RetrieveProcessActiveStage";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveProcessWithFallbackRequest = function(n, t) {
    this.entityLogicalName = n;
    this.process = t;
    this.name = "RetrieveProcessWithFallback";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveProductPropertiesRequest = function(n) {
    this.parentObject = n;
    this.name = "RetrieveProductProperties";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveRecommendationsCountRequest = function(n, t) {
    this.parentRecord = n;
    this.priceLevelId = t;
    this.name = "RetrieveRecommendationsCount";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest = function(n) {
    this.parentEntityName = n;
    this.name = "RetrieveRecommendationLineItemMetadata";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveRecommendationLineItemProductsRequest = function(n, t) {
    this.parentEntityName = n;
    this.parentEntityId = t;
    this.name = "RetrieveRecommendationLineItemProducts";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest = function(n) {
    this.target = n;
    this.name = "RetrieveSharedPrincipalsAndAccess";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrievePersonalSiteUrlRequest = function() {
    this.name = "RetrievePersonalSiteUrl";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveSharePointGlobalSettingsRequest = function() {
    this.name = "RetrieveSharePointGlobalSettings";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveUserDefaultCurrencyRequest = function() {
    this.name = "RetrieveUserDefaultCurrency";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RetrieveUserPrivilegesRequest = function(n) {
    this.userId = n;
    this.name = "RetrieveUserPrivileges";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RevertProductRequest = function(n) {
    this.target = n;
    this.name = "RevertProduct";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ReviseQuoteRequest = function(n, t) {
    this.quoteId = n;
    this.columnSet = t;
    this.name = "ReviseQuote";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RevokeAccessRequest = function(n, t) {
    this.target = n;
    this.revokee = t;
    this.name = "RevokeAccess";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RollupRequest = function(n, t, i) {
    this.target = n;
    this.query = t;
    this.rollupType = i;
    this.name = "Rollup";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.RouteToRequest = function(n, t) {
    this.target = n;
    this.queueItemId = t;
    this.name = "RouteTo";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SearchDocumentRequest = function(n, t, i) {
    this.regardingObjectType = n;
    this.regardingObjectId = t;
    this.documentId = i;
    this.name = "SearchDocument";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SendEmailRequest = function(n, t, i) {
    this.emailId = n;
    this.issueSend = t;
    this.trackingToken = i;
    this.name = "SendEmail";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SendFaxRequest = function(n, t) {
    this.faxId = n;
    this.issueSend = t;
    this.name = "SendFax";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetBusinessEquipmentRequest = function(n, t) {
    this.equipmentId = n;
    this.businessUnitId = t;
    this.name = "SetBusinessEquipment";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetBusinessSystemUserRequest = function(n, t, i) {
    this.userId = n;
    this.businessId = t;
    this.reassignPrincipal = i;
    this.name = "SetBusinessSystemUser";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetDevErrorsRequest = function(n, t, i) {
    this.userId = n;
    this.organizationId = t;
    this.value = i;
    this.name = "SetDevErrors";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetFeatureStatusRequest = function(n, t, i) {
    this.fetaureType = n;
    this.status = t;
    this.isSolutionUninstall = i;
    this.name = "SetFeatureStatus";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetParentBusinessUnitRequest = function(n, t) {
    this.businessUnitId = n;
    this.parentId = t;
    this.name = "SetParentBusinessUnit";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetParentTeamRequest = function(n, t) {
    this.teamId = n;
    this.businessId = t;
    this.name = "SetParentTeam";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetStateRequest = function(n, t, i, r) {
    this.entityMoniker = n;
    this.state = t;
    this.status = i;
    this.maintainLegacyAppServerBehavior = r;
    this.name = "SetState";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.StartRIProvisioningRequest = function(n, t) {
    this.hubName = n;
    this.primaryKey = t;
    this.name = "StartRIProvisioning";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UnfollowEmailAttachmentRequest = function(n) {
    this.activityMimeAttachmentId = n;
    this.name = "UnfollowEmailAttachment";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UnlockInvoicePricingRequest = function(n) {
    this.invoiceId = n;
    this.name = "UnlockInvoicePricing";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UnlockSalesOrderPricingRequest = function(n) {
    this.salesOrderId = n;
    this.name = "UnlockSalesOrderPricing";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UpdateDocumentManagementSettingsRequest = function(n, t, i, r, u) {
    this.siteCollection = n;
    this.folderStructureEntity = t;
    this.entityDocMgmtXml = i;
    this.validateStatus = r;
    this.validateStatusReason = u;
    this.name = "UpdateDocumentManagementSettings";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UpdateGlobalSharePointSettingsRequest = function(n, t, i) {
    this.sharePointRealm = n;
    this.isSharePointOnline = t;
    this.useAuthorizationServer = i;
    this.name = "UpdateGlobalSharePointSettings";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UpdateProductPropertiesRequest = function(n) {
    this.propertyInstanceList = n;
    this.name = "UpdateProductProperties";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UpdateRITenantInfoRequest = function(n, t) {
    this.hubName = n;
    this.primaryKey = t;
    this.name = "UpdateRITenantInfo";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UpgradeToS2SRequest = function() {
    this.name = "UpgradeToS2S";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.ValidateUrlRequest = function(n) {
    this.sharePointUrls = n;
    this.name = "ValidateUrl";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.WhoAmIRequest = function() {
    this.name = "WhoAmI";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.WinOpportunityRequest = function(n, t) {
    this.opportunityClose = n;
    this.status = t;
    this.name = "WinOpportunity";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.WinQuoteRequest = function(n, t) {
    this.quoteClose = n;
    this.status = t;
    this.name = "WinQuote";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.UpdateDelveActionStatusRequest = function(n, t, i) {
    this.messageId = n;
    this.actionState = t;
    this.recordId = i;
    this.name = "UpdateDelveActionStatus";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SetActionCardStateRequest = function(n, t, i) {
    this.actionCardId = n;
    this.actionState = t;
    this.messageId = i;
    this.name = "SetActionCardState";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.SnoozeActionCardRequest = function(n) {
    this.actionCardId = n;
    this.name = "SnoozeActionCard";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PopulateCardRequest = function(n) {
    this.userId = n;
    this.name = "PopulateCard";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CreateEmailReplyDraftRequest = function(n, t) {
    this.messageId = n;
    this.replyText = t;
    this.name = "CreateEmailReplyDraft";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CopySharePointDocumentsRequest = function(n, t, i, r) {
    this.destinationLocation = n;
    this.absoluteUrls = t;
    this.relativeUrls = i;
    this.source = r;
    this.name = "CopySharePointDocuments";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.LogExternalResultsClickedRequest = function(n) {
    this.source = n;
    this.name = "LogExternalResultsClicked";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CreateKnowledgeArticleTranslationRequest = function(n, t, i) {
    this.source = n;
    this.language = t;
    this.isMajor = i;
    this.name = "CreateKnowledgeArticleTranslation";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.CreateKnowledgeArticleVersionRequest = function(n, t) {
    this.source = n;
    this.isMajor = t;
    this.name = "CreateKnowledgeArticleVersion";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.IncrementKnowledgeArticleViewCountRequest = function(n, t, i, r) {
    this.source = n;
    this.viewDate = t;
    this.location = i;
    this.count = r;
    this.name = "IncrementKnowledgeArticleViewCount";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.PublishKnowledgeArticleRequest = function(n, t, i, r) {
    this.entity = n;
    this.copyRelatedProductFromAssociatedPrimary = t;
    this.copyRelatedCategoryFromAssociatedPrimary = i;
    this.publishApprovedRelatedTranslations = r;
    this.name = "PublishKnowledgeArticle";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetEmailLinkTrackingUrlsRequest = function(n, t, i, r) {
    this.trackingId = n;
    this.conversationTrackingId = t;
    this.clientType = i;
    this.emailLinkUrls = r;
    this.name = "GetEmailLinkTrackingUrls";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetEmailTrackingPixelUrlRequest = function(n, t, i) {
    this.trackingId = n;
    this.conversationTrackingId = t;
    this.clientType = i;
    this.name = "GetEmailTrackingPixelUrl";
    this.xmlNamespace = "http://schemas.microsoft.com/crm/2011/Contracts"
};
Xrm.Gen.GetQuantityDecimalResponse = function(n) {
    this.quantity = n;
    this.name = "GetQuantityDecimal"
};
Xrm.Gen.CanCloseOpportunityResponse = function(n) {
    this.canClose = n;
    this.name = "CanCloseOpportunity"
};
Xrm.Gen.PopulateCardResponse = function(n) {
    this.data = n;
    this.name = "PopulateCard"
};
Xrm.Gen.AddDynamicPropertyResponse = function(n, t) {
    this.id = n;
    this.dynamicPropertyId = t;
    this.name = "AddDynamicProperty"
};
Xrm.Gen.AddItemCampaignActivityResponse = function(n) {
    this.campaignActivityItemId = n;
    this.name = "AddItemCampaignActivity"
};
Xrm.Gen.AddItemCampaignResponse = function(n) {
    this.campaignItemId = n;
    this.name = "AddItemCampaign"
};
Xrm.Sdk.AddItemResponse = function(n) {
    this.campaignItemId = n;
    this.name = "AddItem"
};
Xrm.Gen.AddOrEditLocationResponse = function(n) {
    this.locationId = n;
    this.name = "AddOrEditLocation"
};
Xrm.Gen.AddRecurrenceResponse = function(n) {
    this.id = n;
    this.name = "AddRecurrence"
};
Xrm.Sdk.AddToQueueResponse = function(n) {
    this.queueItemId = n;
    this.name = "AddToQueue"
};
Xrm.Gen.BestTimeToEmailResponse = function(n) {
    this.preferredTime = n;
    this.name = "BestTimeToEmail"
};
Xrm.Gen.BookResponse = function(n, t) {
    this.validationResult = n;
    this.notifications = t;
    this.name = "Book"
};
Xrm.Gen.BulkDeleteImportedRecordsResponse = function(n) {
    this.jobId = n;
    this.name = "BulkDeleteImportedRecords"
};
Xrm.Sdk.CalculateActualValueOpportunityResponse = function(n) {
    this.value = n;
    this.name = "CalculateActualValueOpportunity"
};
Xrm.Gen.CanUserSendEmailResponse = function(n) {
    this.hasPrivileges = n;
    this.name = "CanUserSendEmail"
};
Xrm.Gen.CloneContractResponse = function(n) {
    this.entity = n;
    this.name = "CloneContract"
};
Xrm.Gen.CloneProductResponse = function(n) {
    this.clonedProduct = n;
    this.name = "CloneProduct"
};
Xrm.Gen.CloneMobileOfflineProfileResponse = function(n) {
    this.cloneMobileOfflineProfile = n;
    this.name = "CloneMobileOfflineProfile"
};
Xrm.Gen.ConvertActivityResponse = function(n) {
    this.recordId = n;
    this.name = "ConvertActivity"
};
Xrm.Gen.ConvertCampaignResponseResponse = function(n) {
    this.entityReference = n;
    this.name = "ConvertCampaignResponse"
};
Xrm.Gen.ConvertQuoteToSalesOrderResponse = function(n) {
    this.entity = n;
    this.name = "ConvertQuoteToSalesOrder"
};
Xrm.Gen.ConvertSalesOrderToInvoiceResponse = function(n) {
    this.entity = n;
    this.name = "ConvertSalesOrderToInvoice"
};
Xrm.Gen.CopyCampaignResponse = function(n) {
    this.campaignCopyId = n;
    this.name = "CopyCampaign"
};
Xrm.Gen.CopyCampaignResponseResponse = function(n) {
    this.campaignResponseId = n;
    this.name = "CopyCampaignResponse"
};
Xrm.Gen.CopyDynamicListToStaticResponse = function(n) {
    this.staticListId = n;
    this.name = "CopyDynamicListToStatic"
};
Xrm.Gen.CreateDocumentLibrariesResponse = function(n) {
    this.documentLibraryResult = n;
    this.name = "CreateDocumentLibraries"
};
Xrm.Gen.CreateFolderResponse = function(n) {
    this.locationId = n;
    this.name = "CreateFolder"
};
Xrm.Gen.CreateProductsResponse = function(n) {
    this.entityCollection = n;
    this.name = "CreateProducts"
};
Xrm.Sdk.ExecuteQuickFindResponse = function(n) {
    this.result = n;
    this.name = "ExecuteQuickFind"
};
Xrm.Gen.ExecuteWorkflowResponse = function(n) {
    this.id = n;
    this.name = "ExecuteWorkflow"
};
Xrm.Gen.ExportTemplateToExcelOnlineResponse = function(n) {
    this.editLink = n;
    this.name = "ExportTemplateToExcelOnline"
};
Xrm.Gen.ExportToExcelOnlineResponse = function(n) {
    this.editLink = n;
    this.name = "ExportToExcelOnline"
};
Xrm.Gen.FetchSiteUrlResponse = function(n) {
    this.siteAndLocationUrl = n;
    this.name = "FetchSiteUrl"
};
Xrm.Gen.FollowEmailAttachmentResponse = function(n) {
    this.response = n;
    this.name = "FollowEmailAttachment"
};
Xrm.Gen.GetSimilarRecordsResponse = function(n) {
    this.name = "GetSimilarRecords";
    this.entityCollection = n
};
Xrm.Gen.InstantiateTemplateResponse = function(n) {
    this.entityCollection = n;
    this.name = "InstantiateTemplate"
};
Xrm.Gen.RetrieveCardDataResponse = function(n) {
    this.data = n;
    this.name = "RetrieveCardData"
};
Xrm.Gen.RetrieveUnpublishedMultipleResponse = function(n) {
    this.entityCollection = n;
    this.name = "RetrieveUnpublishedMultiple"
};
Xrm.Gen.GenerateInvoiceFromOpportunityResponse = function(n) {
    this.entity = n;
    this.name = "GenerateInvoiceFromOpportunity"
};
Xrm.Gen.GenerateQuoteFromOpportunityResponse = function(n) {
    this.entity = n;
    this.name = "GenerateQuoteFromOpportunity"
};
Xrm.Gen.GenerateSalesOrderFromOpportunityResponse = function(n) {
    this.entity = n;
    this.name = "GenerateSalesOrderFromOpportunity"
};
Xrm.Gen.GetActualDateResponse = function(n) {
    this.result = n;
    this.name = "GetActualDate"
};
Xrm.Gen.GetAllTimeZonesWithDisplayNameResponse = function(n) {
    this.entityCollection = n;
    this.name = "GetAllTimeZonesWithDisplayName"
};
Xrm.Gen.GetDefaultPriceLevelResponse = function(n) {
    this.priceLevels = n;
    this.name = "GetDefaultPriceLevel"
};
Xrm.Gen.GetEntitiesForAzureMLResponse = function(n) {
    this.result = n;
    this.name = "GetEntitiesForAzureML"
};
Xrm.Gen.GetFieldListForAzureMLResponse = function(n) {
    this.result = n;
    this.name = "GetFieldListForAzureML"
};
Xrm.Gen.GetRelationshipsForAzureMLResponse = function(n) {
    this.result = n;
    this.name = "GetRelationshipsForAzureML"
};
Xrm.Gen.GetDataForTopicWordCloudResponse = function(n) {
    this.topics = n;
    this.name = "GetDataForTopicWordCloud"
};
Xrm.Gen.GetRIProvisioningStatusResponse = function(n) {
    this.provisioningStatus = n;
    this.name = "GetRIProvisioningStatus"
};
Xrm.Gen.GetRITenantEndpointUrlResponse = function(n) {
    this.tenantEndpointUrl = n;
    this.name = "GetRITenantEndpointUrl"
};
Xrm.Gen.GetTrackingTokenEmailResponse = function(n) {
    this.trackingToken = n;
    this.name = "GetTrackingTokenEmail"
};
Xrm.Gen.GetValidStatusTransitionResponse = function(n) {
    this.result = n;
    this.name = "GetValidStatusTransition"
};
Xrm.Gen.InviteUserResponse = function(n) {
    this.invitationToken = n;
    this.name = "InviteUser"
};
Xrm.Gen.IsPartnerSolutionInstalledResponse = function(n) {
    this.isPartnerSolutionInstalled = n;
    this.name = "IsPartnerSolutionInstalled"
};
Xrm.Gen.NewDocumentResponse = function(n) {
    this.editLink = n;
    this.name = "NewDocument"
};
Xrm.Gen.OverrideDynamicPropertyResponse = function(n, t) {
    this.id = n;
    this.dynamicPropertyId = t;
    this.name = "OverrideDynamicProperty"
};
Xrm.Gen.PopulateRecommendationCacheForRecordResponse = function(n) {
    this.showAzureRecommendations = n;
    this.name = "PopulateRecommendationCacheForRecord"
};
Xrm.Gen.PopulateRecommendationCacheResponse = function(n) {
    this.showAzureRecommendations = n;
    this.name = "PopulateRecommendationCache"
};
Xrm.Gen.OverwriteDynamicPropertyResponse = function(n, t) {
    this.id = n;
    this.dynamicPropertyId = t;
    this.name = "OverwriteDynamicProperty"
};
Xrm.Gen.QualifyLeadResponse = function(n) {
    this.createdEntities = n;
    this.name = "QualifyLead"
};
Xrm.Gen.RenewContractResponse = function(n) {
    this.entity = n;
    this.name = "RenewContract"
};
Xrm.Gen.RenewEntitlementResponse = function(n) {
    this.entity = n;
    this.name = "RenewEntitlement"
};
Xrm.Gen.RescheduleResponse = function(n, t) {
    this.validationResult = n;
    this.notifications = t;
    this.name = "Reschedule"
};
Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchResponse = function(n) {
    this.keyPhrases = n;
    this.name = "RetrieveKeyPhrasesForKnowledgeSearch"
};
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponse = function(n) {
    this.keyPhrases = n;
    this.name = "RetrieveKeyPhrasesForSimilaritySearch"
};
Xrm.Gen.RetrievePersonalSiteUrlResponse = function(n) {
    this.personalSiteUrl = n;
    this.name = "RetrievePersonalSiteUrl"
};
Xrm.Sdk.RetrieveAncestorsResponse = function(n) {
    this.entityCollection = n;
    this.name = "RetrieveAncestors"
};
Xrm.Gen.RetrieveAttributeListResponse = function(n) {
    this.result = n;
    this.name = "RetrieveAttributeList"
};
Xrm.Gen.ShouldDisplaySLALimitNotificationResponse = function(n) {
    this.result = n;
    this.name = "ShouldDisplaySLALimitNotification"
};
Xrm.Gen.RetrieveDefaultStatusForStateResponse = function(n) {
    this.status = n;
    this.name = "RetrieveDefaultStatusForState"
};
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponse = function(n) {
    this.entityCollection = n;
    this.name = "RetrieveEntityDynamicPropertyDefinitions"
};
Xrm.Gen.RetrieveFilteredProcessesResponse = function(n) {
    this.processes = n;
    this.name = "RetrieveFilteredProcesses"
};
Xrm.Gen.RetrieveItemIdsForRecordResponse = function(n) {
    this.itemIds = n;
    this.name = "RetrieveItemIdsForRecord"
};
Xrm.Gen.RetrieveProcessActiveStageResponse = function(n) {
    this.entity = n;
    this.name = "RetrieveProcessActiveStage"
};
Xrm.Gen.RetrieveProcessWithFallbackResponse = function(n) {
    this.entity = n;
    this.name = "RetrieveProcessWithFallback"
};
Xrm.Gen.RetrieveProductPropertiesResponse = function(n) {
    this.entityCollection = n;
    this.name = "RetrieveProductProperties"
};
Xrm.Gen.RetrieveRecommendationsCountResponse = function(n) {
    this.recommendationsCount = n;
    this.name = "RetrieveRecommendationsCount"
};
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponse = function(n) {
    this.recommendationLineItemMetadata = n;
    this.name = "RetrieveRecommendationLineItemMetadata"
};
Xrm.Gen.RetrieveRecommendationLineItemProductsResponse = function(n) {
    this.recommendationLineItemProducts = n;
    this.name = "RetrieveRecommendationLineItemProducts"
};
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponse = function(n) {
    this.principalAccesses = n;
    this.name = "RetrieveSharedPrincipalsAndAccess"
};
Xrm.Gen.RetrieveSharePointGlobalSettingsResponse = function(n) {
    this.sharePointGlobalSetting = n;
    this.name = "RetrieveSharePointGlobalSettings"
};
Xrm.Gen.RetrieveUserDefaultCurrencyResponse = function(n) {
    this.currency = n;
    this.name = "RetrieveUserDefaultCurrency"
};
Xrm.Gen.RetrieveUserPrivilegesResponse = function(n) {
    this.rolePrivileges = n;
    this.name = "RetrieveUserPrivileges"
};
Xrm.Gen.ReviseQuoteResponse = function(n) {
    this.entity = n;
    this.name = "ReviseQuote"
};
Xrm.Gen.RollupResponse = function(n) {
    this.entityCollection = n;
    this.name = "Rollup"
};
Xrm.Gen.SearchDocumentResponse = function(n, t) {
    this.searchLocation = n;
    this.documentLocation = t;
    this.name = "SearchDocument"
};
Xrm.Gen.CreateEmailReplyDraftResponse = function(n) {
    this.mailWebLink = n;
    this.name = "CreateEmailReplyDraft"
};
Xrm.Gen.CopySharePointDocumentsResponse = function(n) {
    this.status = n;
    this.name = "CopySharePointDocuments"
};
Xrm.Gen.SendEmailResponse = function(n) {
    this.subject = n;
    this.name = "SendEmail"
};
Xrm.Gen.ValidateUrlResponse = function(n) {
    this.urlValidationResult = n;
    this.name = "ValidateUrl"
};
Xrm.Gen.WhoAmIResponse = function(n, t, i) {
    this.userId = n;
    this.businessUnitId = t;
    this.organizationId = i;
    this.name = "WhoAmI"
};
Xrm.Gen.CreateKnowledgeArticleTranslationResponse = function(n) {
    this.createKnowledgeArticleTranslation = n;
    this.name = "CreateKnowledgeArticleTranslation"
};
Xrm.Gen.CreateKnowledgeArticleVersionResponse = function(n) {
    this.createKnowledgeArticleVersion = n;
    this.name = "CreateKnowledgeArticleVersion"
};
Xrm.Gen.IncrementKnowledgeArticleViewCountResponse = function(n) {
    this.incrementKnowledgeArticleViewCount = n;
    this.name = "IncrementKnowledgeArticleViewCount"
};
Xrm.Gen.PublishKnowledgeArticleResponse = function(n) {
    this.isPublish = n;
    this.name = "PublishKnowledgeArticle"
};
Xrm.Gen.GetEmailLinkTrackingUrlsResponse = function(n) {
    this.emailLinkTrackingUrls = n;
    this.name = "GetEmailLinkTrackingUrls"
};
Xrm.Gen.GetEmailTrackingPixelUrlResponse = function(n) {
    this.emailTrackingPixelUrl = n;
    this.name = "GetEmailTrackingPixelUrl"
};
Xrm.Gen.AddDynamicPropertyRequestSerializer.registerClass("Xrm.Gen.AddDynamicPropertyRequestSerializer");
Xrm.Gen.AddDynamicPropertyResponseSerializer.registerClass("Xrm.Gen.AddDynamicPropertyResponseSerializer");
Xrm.Gen.AddItemCampaignActivityRequestSerializer.registerClass("Xrm.Gen.AddItemCampaignActivityRequestSerializer");
Xrm.Gen.AddItemCampaignActivityResponseSerializer.registerClass("Xrm.Gen.AddItemCampaignActivityResponseSerializer");
Xrm.Gen.AddItemCampaignRequestSerializer.registerClass("Xrm.Gen.AddItemCampaignRequestSerializer");
Xrm.Gen.AddItemCampaignResponseSerializer.registerClass("Xrm.Gen.AddItemCampaignResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer");
Xrm.Gen.AddOrEditLocationRequestSerializer.registerClass("Xrm.Gen.AddOrEditLocationRequestSerializer");
Xrm.Gen.AddOrEditLocationResponseSerializer.registerClass("Xrm.Gen.AddOrEditLocationResponseSerializer");
Xrm.Gen.AddRecurrenceRequestSerializer.registerClass("Xrm.Gen.AddRecurrenceRequestSerializer");
Xrm.Gen.AddRecurrenceResponseSerializer.registerClass("Xrm.Gen.AddRecurrenceResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AssociateKnowledgeArticleRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AssociateKnowledgeArticleRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .DisassociateKnowledgeArticleRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.DisassociateKnowledgeArticleRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer");
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer
    .registerClass("Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequestSerializer");
Xrm.Gen.AssignAllRecordsTeamRequestSerializer.registerClass("Xrm.Gen.AssignAllRecordsTeamRequestSerializer");
Xrm.Gen.AssignRequestSerializer.registerClass("Xrm.Gen.AssignRequestSerializer");
Xrm.Gen.AssociateRequestSerializer.registerClass("Xrm.Gen.AssociateRequestSerializer");
Xrm.Gen.BestTimeToEmailRequestSerializer.registerClass("Xrm.Gen.BestTimeToEmailRequestSerializer");
Xrm.Gen.BestTimeToEmailResponseSerializer.registerClass("Xrm.Gen.BestTimeToEmailResponseSerializer");
Xrm.Gen.BookRequestSerializer.registerClass("Xrm.Gen.BookRequestSerializer");
Xrm.Gen.BookResponseSerializer.registerClass("Xrm.Gen.BookResponseSerializer");
Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer.registerClass("Xrm.Gen.BulkDeleteImportedRecordsRequestSerializer");
Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer
    .registerClass("Xrm.Gen.BulkDeleteImportedRecordsResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CalculateActualValueOpportunityResponseSerializer");
Xrm.Gen.CalculateRollupFieldRequestSerializer.registerClass("Xrm.Gen.CalculateRollupFieldRequestSerializer");
Xrm.Gen.CalculateRollupFieldResponseSerializer.registerClass("Xrm.Gen.CalculateRollupFieldResponseSerializer");
Xrm.Gen.CancelSalesOrderRequestSerializer.registerClass("Xrm.Gen.CancelSalesOrderRequestSerializer");
Xrm.Gen.CancelContractRequestSerializer.registerClass("Xrm.Gen.CancelContractRequestSerializer");
Xrm.Gen.CanUserSendEmailRequestSerializer.registerClass("Xrm.Gen.CanUserSendEmailRequestSerializer");
Xrm.Gen.CanUserSendEmailResponseSerializer.registerClass("Xrm.Gen.CanUserSendEmailResponseSerializer");
Xrm.Gen.CheckInDocumentRequestSerializer.registerClass("Xrm.Gen.CheckInDocumentRequestSerializer");
Xrm.Gen.CheckoutDocumentRequestSerializer.registerClass("Xrm.Gen.CheckoutDocumentRequestSerializer");
Xrm.Gen.CloneContractRequestSerializer.registerClass("Xrm.Gen.CloneContractRequestSerializer");
Xrm.Gen.CloneContractResponseSerializer.registerClass("Xrm.Gen.CloneContractResponseSerializer");
Xrm.Gen.CloneProductRequestSerializer.registerClass("Xrm.Gen.CloneProductRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileRequestSerializer");
Xrm.Gen.CloneProductResponseSerializer.registerClass("Xrm.Gen.CloneProductResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CloneMobileOfflineProfileResponseSerializer");
Xrm.Gen.CloseIncidentRequestSerializer.registerClass("Xrm.Gen.CloseIncidentRequestSerializer");
Xrm.Gen.CloseQuoteRequestSerializer.registerClass("Xrm.Gen.CloseQuoteRequestSerializer");
Xrm.Gen.ConvertActivityRequestSerializer.registerClass("Xrm.Gen.ConvertActivityRequestSerializer");
Xrm.Gen.ConvertActivityResponseSerializer.registerClass("Xrm.Gen.ConvertActivityResponseSerializer");
Xrm.Gen.ConvertCampaignResponseRequestSerializer.registerClass("Xrm.Gen.ConvertCampaignResponseRequestSerializer");
Xrm.Gen.ConvertCampaignResponseResponseSerializer.registerClass("Xrm.Gen.ConvertCampaignResponseResponseSerializer");
Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer.registerClass("Xrm.Gen.ConvertQuoteToSalesOrderRequestSerializer");
Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer.registerClass("Xrm.Gen.ConvertQuoteToSalesOrderResponseSerializer");
Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer
    .registerClass("Xrm.Gen.ConvertSalesOrderToInvoiceRequestSerializer");
Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer
    .registerClass("Xrm.Gen.ConvertSalesOrderToInvoiceResponseSerializer");
Xrm.Gen.CopyCampaignRequestSerializer.registerClass("Xrm.Gen.CopyCampaignRequestSerializer");
Xrm.Gen.CopyCampaignResponseRequestSerializer.registerClass("Xrm.Gen.CopyCampaignResponseRequestSerializer");
Xrm.Gen.CopyCampaignResponseResponseSerializer.registerClass("Xrm.Gen.CopyCampaignResponseResponseSerializer");
Xrm.Gen.CopyCampaignResponseSerializer.registerClass("Xrm.Gen.CopyCampaignResponseSerializer");
Xrm.Gen.CopyDynamicListToStaticRequestSerializer.registerClass("Xrm.Gen.CopyDynamicListToStaticRequestSerializer");
Xrm.Gen.CopyDynamicListToStaticResponseSerializer.registerClass("Xrm.Gen.CopyDynamicListToStaticResponseSerializer");
Xrm.Gen.CreateAndAssociateRequestSerializer.registerClass("Xrm.Gen.CreateAndAssociateRequestSerializer");
Xrm.Gen.CreateDocumentLibrariesRequestSerializer.registerClass("Xrm.Gen.CreateDocumentLibrariesRequestSerializer");
Xrm.Gen.CreateDocumentLibrariesResponseSerializer.registerClass("Xrm.Gen.CreateDocumentLibrariesResponseSerializer");
Xrm.Gen.CreateFolderRequestSerializer.registerClass("Xrm.Gen.CreateFolderRequestSerializer");
Xrm.Gen.CreateFolderResponseSerializer.registerClass("Xrm.Gen.CreateFolderResponseSerializer");
Xrm.Gen.CreateProductsRequestSerializer.registerClass("Xrm.Gen.CreateProductsRequestSerializer");
Xrm.Gen.CreateProductsResponseSerializer.registerClass("Xrm.Gen.CreateProductsResponseSerializer");
Xrm.Gen.CreateRequestSerializer.registerClass("Xrm.Gen.CreateRequestSerializer");
Xrm.Gen.CreateResponseSerializer.registerClass("Xrm.Gen.CreateResponseSerializer");
Xrm.Gen.DeleteDocumentRequestSerializer.registerClass("Xrm.Gen.DeleteDocumentRequestSerializer");
Xrm.Gen.DeleteOpenInstancesRequestSerializer.registerClass("Xrm.Gen.DeleteOpenInstancesRequestSerializer");
Xrm.Gen.DeleteRequestSerializer.registerClass("Xrm.Gen.DeleteRequestSerializer");
Xrm.Gen.DisassociateRequestSerializer.registerClass("Xrm.Gen.DisassociateRequestSerializer");
Xrm.Gen.DiscardDocumentCheckoutRequestSerializer.registerClass("Xrm.Gen.DiscardDocumentCheckoutRequestSerializer");
Xrm.Gen.EditDocumentPropertiesRequestSerializer.registerClass("Xrm.Gen.EditDocumentPropertiesRequestSerializer");
Xrm.Gen.ExecuteMultipleRequestSerializer.registerClass("Xrm.Gen.ExecuteMultipleRequestSerializer");
Xrm.Gen.ExecuteMultipleResponseSerializer.registerClass("Xrm.Gen.ExecuteMultipleResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer");
Xrm.Gen.ExecuteWorkflowRequestSerializer.registerClass("Xrm.Gen.ExecuteWorkflowRequestSerializer");
Xrm.Gen.ExecuteWorkflowResponseSerializer.registerClass("Xrm.Gen.ExecuteWorkflowResponseSerializer");
Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer
    .registerClass("Xrm.Gen.ExportTemplateToExcelOnlineRequestSerializer");
Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer
    .registerClass("Xrm.Gen.ExportTemplateToExcelOnlineResponseSerializer");
Xrm.Gen.ExportToExcelOnlineRequestSerializer.registerClass("Xrm.Gen.ExportToExcelOnlineRequestSerializer");
Xrm.Gen.ExportToExcelOnlineResponseSerializer.registerClass("Xrm.Gen.ExportToExcelOnlineResponseSerializer");
Xrm.Gen.FetchSiteUrlRequestSerializer.registerClass("Xrm.Gen.FetchSiteUrlRequestSerializer");
Xrm.Gen.FetchSiteUrlResponseSerializer.registerClass("Xrm.Gen.FetchSiteUrlResponseSerializer");
Xrm.Gen.FollowEmailAttachmentRequestSerializer.registerClass("Xrm.Gen.FollowEmailAttachmentRequestSerializer");
Xrm.Gen.FollowEmailAttachmentResponseSerializer.registerClass("Xrm.Gen.FollowEmailAttachmentResponseSerializer");
Xrm.Gen.FlushMetadataCacheRequestSerializer.registerClass("Xrm.Gen.FlushMetadataCacheRequestSerializer");
Xrm.Gen.FulfillSalesOrderRequestSerializer.registerClass("Xrm.Gen.FulfillSalesOrderRequestSerializer");
Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer
    .registerClass("Xrm.Gen.FullTextSearchKnowledgeArticleRequestSerializer");
Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer
    .registerClass("Xrm.Gen.FullTextSearchKnowledgeArticleResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer");
Xrm.Gen.InstantiateTemplateRequestSerializer.registerClass("Xrm.Gen.InstantiateTemplateRequestSerializer");
Xrm.Gen.InstantiateTemplateResponseSerializer.registerClass("Xrm.Gen.InstantiateTemplateResponseSerializer");
Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer
    .registerClass("Xrm.Gen.GenerateInvoiceFromOpportunityRequestSerializer");
Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer
    .registerClass("Xrm.Gen.GenerateInvoiceFromOpportunityResponseSerializer");
Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer
    .registerClass("Xrm.Gen.GenerateQuoteFromOpportunityRequestSerializer");
Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer
    .registerClass("Xrm.Gen.GenerateQuoteFromOpportunityResponseSerializer");
Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer
    .registerClass("Xrm.Gen.GenerateSalesOrderFromOpportunityRequestSerializer");
Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer
    .registerClass("Xrm.Gen.GenerateSalesOrderFromOpportunityResponseSerializer");
Xrm.Gen.GetActualDateRequestSerializer.registerClass("Xrm.Gen.GetActualDateRequestSerializer");
Xrm.Gen.GetActualDateResponseSerializer.registerClass("Xrm.Gen.GetActualDateResponseSerializer");
Xrm.Gen.GetAllTimeZonesWithDisplayNameRequestSerializer
    .registerClass("Xrm.Gen.GetAllTimeZonesWithDisplayNameRequestSerializer");
Xrm.Gen.GetAllTimeZonesWithDisplayNameResponseSerializer
    .registerClass("Xrm.Gen.GetAllTimeZonesWithDisplayNameResponseSerializer");
Xrm.Gen.GetDefaultPriceLevelRequestSerializer.registerClass("Xrm.Gen.GetDefaultPriceLevelRequestSerializer");
Xrm.Gen.GetDefaultPriceLevelResponseSerializer.registerClass("Xrm.Gen.GetDefaultPriceLevelResponseSerializer");
Xrm.Gen.GetEntitiesForAzureMLRequestSerializer.registerClass("Xrm.Gen.GetEntitiesForAzureMLRequestSerializer");
Xrm.Gen.GetEntitiesForAzureMLResponseSerializer.registerClass("Xrm.Gen.GetEntitiesForAzureMLResponseSerializer");
Xrm.Gen.GetFieldListForAzureMLRequestSerializer.registerClass("Xrm.Gen.GetFieldListForAzureMLRequestSerializer");
Xrm.Gen.GetFieldListForAzureMLResponseSerializer.registerClass("Xrm.Gen.GetFieldListForAzureMLResponseSerializer");
Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer
    .registerClass("Xrm.Gen.GetInvoiceProductsFromOpportunityRequestSerializer");
Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer
    .registerClass("Xrm.Gen.GetQuoteProductsFromOpportunityRequestSerializer");
Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer
    .registerClass("Xrm.Gen.GetRelationshipsForAzureMLRequestSerializer");
Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer
    .registerClass("Xrm.Gen.GetRelationshipsForAzureMLResponseSerializer");
Xrm.Gen.GetRIProvisioningStatusRequestSerializer.registerClass("Xrm.Gen.GetRIProvisioningStatusRequestSerializer");
Xrm.Gen.GetRIProvisioningStatusResponseSerializer.registerClass("Xrm.Gen.GetRIProvisioningStatusResponseSerializer");
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer
    .registerClass("Xrm.Gen.GetSalesOrderProductsFromOpportunityRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetDataForTopicWordCloudResponseSerializer");
Xrm.Gen.GetRITenantEndpointUrlRequestSerializer.registerClass("Xrm.Gen.GetRITenantEndpointUrlRequestSerializer");
Xrm.Gen.GetRITenantEndpointUrlResponseSerializer.registerClass("Xrm.Gen.GetRITenantEndpointUrlResponseSerializer");
Xrm.Gen.GetTrackingTokenEmailRequestSerializer.registerClass("Xrm.Gen.GetTrackingTokenEmailRequestSerializer");
Xrm.Gen.GetTrackingTokenEmailResponseSerializer.registerClass("Xrm.Gen.GetTrackingTokenEmailResponseSerializer");
Xrm.Gen.GetValidStatusTransitionRequestSerializer.registerClass("Xrm.Gen.GetValidStatusTransitionRequestSerializer");
Xrm.Gen.GetValidStatusTransitionResponseSerializer.registerClass("Xrm.Gen.GetValidStatusTransitionResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer");
Xrm.Gen.InitializeFromRequestSerializer.registerClass("Xrm.Gen.InitializeFromRequestSerializer");
Xrm.Gen.InitializeFromResponseSerializer.registerClass("Xrm.Gen.InitializeFromResponseSerializer");
Xrm.Gen.InviteUserRequestSerializer.registerClass("Xrm.Gen.InviteUserRequestSerializer");
Xrm.Gen.InviteUserResponseSerializer.registerClass("Xrm.Gen.InviteUserResponseSerializer");
Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer
    .registerClass("Xrm.Gen.IsPartnerSolutionInstalledRequestSerializer");
Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer
    .registerClass("Xrm.Gen.IsPartnerSolutionInstalledResponseSerializer");
Xrm.Gen.LockInvoicePricingRequestSerializer.registerClass("Xrm.Gen.LockInvoicePricingRequestSerializer");
Xrm.Gen.LockSalesOrderPricingRequestSerializer.registerClass("Xrm.Gen.LockSalesOrderPricingRequestSerializer");
Xrm.Gen.LoseOpportunityRequestSerializer.registerClass("Xrm.Gen.LoseOpportunityRequestSerializer");
Xrm.Gen.MigrateToS2SRequestSerializer.registerClass("Xrm.Gen.MigrateToS2SRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer");
Xrm.Gen.NavigateToNextEntityRequestSerializer.registerClass("Xrm.Gen.NavigateToNextEntityRequestSerializer");
Xrm.Gen.NewDocumentRequestSerializer.registerClass("Xrm.Gen.NewDocumentRequestSerializer");
Xrm.Gen.NewDocumentResponseSerializer.registerClass("Xrm.Gen.NewDocumentResponseSerializer");
Xrm.Gen.OverrideDynamicPropertiesRequestSerializer.registerClass("Xrm.Gen.OverrideDynamicPropertiesRequestSerializer");
Xrm.Gen.OverrideDynamicPropertyRequestSerializer.registerClass("Xrm.Gen.OverrideDynamicPropertyRequestSerializer");
Xrm.Gen.OverrideDynamicPropertyResponseSerializer.registerClass("Xrm.Gen.OverrideDynamicPropertyResponseSerializer");
Xrm.Gen.OverwriteDynamicPropertyRequestSerializer.registerClass("Xrm.Gen.OverwriteDynamicPropertyRequestSerializer");
Xrm.Gen.OverwriteDynamicPropertyResponseSerializer.registerClass("Xrm.Gen.OverwriteDynamicPropertyResponseSerializer");
Xrm.Gen.PickFromQueueRequestSerializer.registerClass("Xrm.Gen.PickFromQueueRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheForRecordResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.PopulateRecommendationCacheResponseSerializer");
Xrm.Gen.PublishAllXmlRequestSerializer.registerClass("Xrm.Gen.PublishAllXmlRequestSerializer");
Xrm.Gen.PublishProductHierarchyRequestSerializer.registerClass("Xrm.Gen.PublishProductHierarchyRequestSerializer");
Xrm.Gen.PublishThemeRequestSerializer.registerClass("Xrm.Gen.PublishThemeRequestSerializer");
Xrm.Gen.RetrieveCardDataRequestSerializer.registerClass("Xrm.Gen.RetrieveCardDataRequestSerializer");
Xrm.Gen.RetrieveCardDataResponseSerializer.registerClass("Xrm.Gen.RetrieveCardDataResponseSerializer");
Xrm.Gen.TrackEmailRequestSerializer.registerClass("Xrm.Gen.TrackEmailRequestSerializer");
Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer
    .registerClass("Xrm.Gen.ExecuteDataPerformanceActionRequestSerializer");
Xrm.Gen.QualifyLeadRequestSerializer.registerClass("Xrm.Gen.QualifyLeadRequestSerializer");
Xrm.Gen.QualifyLeadResponseSerializer.registerClass("Xrm.Gen.QualifyLeadResponseSerializer");
Xrm.Gen.ReleaseToQueueRequestSerializer.registerClass("Xrm.Gen.ReleaseToQueueRequestSerializer");
Xrm.Gen.RemoveDynamicPropertyRequestSerializer.registerClass("Xrm.Gen.RemoveDynamicPropertyRequestSerializer");
Xrm.Gen.RemoveFromQueueRequestSerializer.registerClass("Xrm.Gen.RemoveFromQueueRequestSerializer");
Xrm.Gen.RenewContractRequestSerializer.registerClass("Xrm.Gen.RenewContractRequestSerializer");
Xrm.Gen.RenewContractResponseSerializer.registerClass("Xrm.Gen.RenewContractResponseSerializer");
Xrm.Gen.RenewEntitlementRequestSerializer.registerClass("Xrm.Gen.RenewEntitlementRequestSerializer");
Xrm.Gen.RenewEntitlementResponseSerializer.registerClass("Xrm.Gen.RenewEntitlementResponseSerializer");
Xrm.Gen.RescheduleRequestSerializer.registerClass("Xrm.Gen.RescheduleRequestSerializer");
Xrm.Gen.RescheduleResponseSerializer.registerClass("Xrm.Gen.RescheduleResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer");
Xrm.Gen.RetrieveAttributeListRequestSerializer.registerClass("Xrm.Gen.RetrieveAttributeListRequestSerializer");
Xrm.Gen.RetrieveAttributeListResponseSerializer.registerClass("Xrm.Gen.RetrieveAttributeListResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ShouldDisplaySLALimitNotificationResponseSerializer");
Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer
    .registerClass("Xrm.Gen.RetrieveDefaultStatusForStateRequestSerializer");
Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer
    .registerClass("Xrm.Gen.RetrieveDefaultStatusForStateResponseSerializer");
Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer
    .registerClass("Xrm.Gen.RetrieveEntitiesForAggregateQueryRequestSerializer");
Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer
    .registerClass("Xrm.Gen.RetrieveEntitiesForAggregateQueryResponseSerializer");
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer
    .registerClass("Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequestSerializer");
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer
    .registerClass("Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponseSerializer");
Xrm.Gen.RetrieveFilteredProcessesRequestSerializer.registerClass("Xrm.Gen.RetrieveFilteredProcessesRequestSerializer");
Xrm.Gen.RetrieveFilteredProcessesResponseSerializer
    .registerClass("Xrm.Gen.RetrieveFilteredProcessesResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveItemIdsForRecordResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer");
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer
    .registerClass("Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequestSerializer");
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer
    .registerClass("Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponseSerializer");
Xrm.Gen.RetrieveMultipleRequestSerializer.registerClass("Xrm.Gen.RetrieveMultipleRequestSerializer");
Xrm.Gen.RetrieveMultipleResponseSerializer.registerClass("Xrm.Gen.RetrieveMultipleResponseSerializer");
Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer
    .registerClass("Xrm.Gen.RetrieveUnpublishedMultipleRequestSerializer");
Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer
    .registerClass("Xrm.Gen.RetrieveUnpublishedMultipleResponseSerializer");
Xrm.Gen.RetrievePrincipalAccessRequestSerializer.registerClass("Xrm.Gen.RetrievePrincipalAccessRequestSerializer");
Xrm.Gen.RetrievePrincipalAccessResponseSerializer.registerClass("Xrm.Gen.RetrievePrincipalAccessResponseSerializer");
Xrm.Gen.RetrieveProcessActiveStageRequestSerializer
    .registerClass("Xrm.Gen.RetrieveProcessActiveStageRequestSerializer");
Xrm.Gen.RetrieveProcessActiveStageResponseSerializer
    .registerClass("Xrm.Gen.RetrieveProcessActiveStageResponseSerializer");
Xrm.Gen.RetrieveProcessControlDataRequestSerializer
    .registerClass("Xrm.Gen.RetrieveProcessControlDataRequestSerializer");
Xrm.Gen.RetrieveProcessControlDataResponseSerializer
    .registerClass("Xrm.Gen.RetrieveProcessControlDataResponseSerializer");
Xrm.Gen.RetrieveProcessWithFallbackRequestSerializer
    .registerClass("Xrm.Gen.RetrieveProcessWithFallbackRequestSerializer");
Xrm.Gen.RetrieveProcessWithFallbackResponseSerializer
    .registerClass("Xrm.Gen.RetrieveProcessWithFallbackResponseSerializer");
Xrm.Gen.RetrieveProductPropertiesRequestSerializer.registerClass("Xrm.Gen.RetrieveProductPropertiesRequestSerializer");
Xrm.Gen.RetrieveProductPropertiesResponseSerializer
    .registerClass("Xrm.Gen.RetrieveProductPropertiesResponseSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveRecommendationsCountResponseSerializer");
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemMetadataRequestSerializer");
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemMetadataResponseSerializer");
Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemProductsRequestSerializer");
Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemProductsResponseSerializer");
Xrm.Gen.RetrieveRequestSerializer.registerClass("Xrm.Gen.RetrieveRequestSerializer");
Xrm.Gen.RetrieveResponseSerializer.registerClass("Xrm.Gen.RetrieveResponseSerializer");
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer
    .registerClass("Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequestSerializer");
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer
    .registerClass("Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponseSerializer");
Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer.registerClass("Xrm.Gen.RetrievePersonalSiteUrlRequestSerializer");
Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer.registerClass("Xrm.Gen.RetrievePersonalSiteUrlResponseSerializer");
Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer
    .registerClass("Xrm.Gen.RetrieveSharePointGlobalSettingsRequestSerializer");
Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer
    .registerClass("Xrm.Gen.RetrieveSharePointGlobalSettingsResponseSerializer");
Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer
    .registerClass("Xrm.Gen.RetrieveUserDefaultCurrencyRequestSerializer");
Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer
    .registerClass("Xrm.Gen.RetrieveUserDefaultCurrencyResponseSerializer");
Xrm.Gen.RetrieveUserPrivilegesRequestSerializer.registerClass("Xrm.Gen.RetrieveUserPrivilegesRequestSerializer");
Xrm.Gen.RetrieveUserPrivilegesResponseSerializer.registerClass("Xrm.Gen.RetrieveUserPrivilegesResponseSerializer");
Xrm.Gen.RevertProductRequestSerializer.registerClass("Xrm.Gen.RevertProductRequestSerializer");
Xrm.Gen.ReviseQuoteRequestSerializer.registerClass("Xrm.Gen.ReviseQuoteRequestSerializer");
Xrm.Gen.ReviseQuoteResponseSerializer.registerClass("Xrm.Gen.ReviseQuoteResponseSerializer");
Xrm.Gen.RevokeAccessRequestSerializer.registerClass("Xrm.Gen.RevokeAccessRequestSerializer");
Xrm.Gen.RollupRequestSerializer.registerClass("Xrm.Gen.RollupRequestSerializer");
Xrm.Gen.RollupResponseSerializer.registerClass("Xrm.Gen.RollupResponseSerializer");
Xrm.Gen.RouteToRequestSerializer.registerClass("Xrm.Gen.RouteToRequestSerializer");
Xrm.Gen.SearchDocumentRequestSerializer.registerClass("Xrm.Gen.SearchDocumentRequestSerializer");
Xrm.Gen.SearchDocumentResponseSerializer.registerClass("Xrm.Gen.SearchDocumentResponseSerializer");
Xrm.Gen.SendEmailRequestSerializer.registerClass("Xrm.Gen.SendEmailRequestSerializer");
Xrm.Gen.SendEmailResponseSerializer.registerClass("Xrm.Gen.SendEmailResponseSerializer");
Xrm.Gen.SendFaxRequestSerializer.registerClass("Xrm.Gen.SendFaxRequestSerializer");
Xrm.Gen.SetBusinessEquipmentRequestSerializer.registerClass("Xrm.Gen.SetBusinessEquipmentRequestSerializer");
Xrm.Gen.SetBusinessSystemUserRequestSerializer.registerClass("Xrm.Gen.SetBusinessSystemUserRequestSerializer");
Xrm.Gen.SetDevErrorsRequestSerializer.registerClass("Xrm.Gen.SetDevErrorsRequestSerializer");
Xrm.Gen.SetFeatureStatusRequestSerializer.registerClass("Xrm.Gen.SetFeatureStatusRequestSerializer");
Xrm.Gen.SetParentBusinessUnitRequestSerializer.registerClass("Xrm.Gen.SetParentBusinessUnitRequestSerializer");
Xrm.Gen.SetParentTeamRequestSerializer.registerClass("Xrm.Gen.SetParentTeamRequestSerializer");
Xrm.Gen.SetStateRequestSerializer.registerClass("Xrm.Gen.SetStateRequestSerializer");
Xrm.Gen.StartRIProvisioningRequestSerializer.registerClass("Xrm.Gen.StartRIProvisioningRequestSerializer");
Xrm.Gen.UnfollowEmailAttachmentRequestSerializer.registerClass("Xrm.Gen.UnfollowEmailAttachmentRequestSerializer");
Xrm.Gen.UnlockInvoicePricingRequestSerializer.registerClass("Xrm.Gen.UnlockInvoicePricingRequestSerializer");
Xrm.Gen.UnlockSalesOrderPricingRequestSerializer.registerClass("Xrm.Gen.UnlockSalesOrderPricingRequestSerializer");
Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer
    .registerClass("Xrm.Gen.UpdateDocumentManagementSettingsRequestSerializer");
Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer
    .registerClass("Xrm.Gen.UpdateGlobalSharePointSettingsRequestSerializer");
Xrm.Gen.UpdateProductPropertiesRequestSerializer.registerClass("Xrm.Gen.UpdateProductPropertiesRequestSerializer");
Xrm.Gen.UpdateRequestSerializer.registerClass("Xrm.Gen.UpdateRequestSerializer");
Xrm.Gen.UpdateRITenantInfoRequestSerializer.registerClass("Xrm.Gen.UpdateRITenantInfoRequestSerializer");
Xrm.Gen.UpgradeToS2SRequestSerializer.registerClass("Xrm.Gen.UpgradeToS2SRequestSerializer");
Xrm.Gen.ValidateUrlRequestSerializer.registerClass("Xrm.Gen.ValidateUrlRequestSerializer");
Xrm.Gen.ValidateUrlResponseSerializer.registerClass("Xrm.Gen.ValidateUrlResponseSerializer");
Xrm.Gen.WhoAmIRequestSerializer.registerClass("Xrm.Gen.WhoAmIRequestSerializer");
Xrm.Gen.WhoAmIResponseSerializer.registerClass("Xrm.Gen.WhoAmIResponseSerializer");
Xrm.Gen.WinOpportunityRequestSerializer.registerClass("Xrm.Gen.WinOpportunityRequestSerializer");
Xrm.Gen.WinQuoteRequestSerializer.registerClass("Xrm.Gen.WinQuoteRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer");
Xrm.Gen.CanCloseOpportunityRequestSerializer.registerClass("Xrm.Gen.CanCloseOpportunityRequestSerializer");
Xrm.Gen.CanCloseOpportunityResponseSerializer.registerClass("Xrm.Gen.CanCloseOpportunityResponseSerializer");
Xrm.Gen.UpdateResponseSerializer.registerClass("Xrm.Gen.UpdateResponseSerializer");
Xrm.Gen.UpdateDelveActionStatusRequestSerializer.registerClass("Xrm.Gen.UpdateDelveActionStatusRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftRequestSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftRequestSerializer");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftResponseSerializer
    .registerClass("Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.CreateEmailReplyDraftResponseSerializer");
Xrm.Gen.CopySharePointDocumentsRequestSerializer.registerClass("Xrm.Gen.CopySharePointDocumentsRequestSerializer");
Xrm.Gen.CopySharePointDocumentsResponseSerializer.registerClass("Xrm.Gen.CopySharePointDocumentsResponseSerializer");
Xrm.Gen.SetActionCardStateRequestSerializer.registerClass("Xrm.Gen.SetActionCardStateRequestSerializer");
Xrm.Gen.SnoozeActionCardRequestSerializer.registerClass("Xrm.Gen.SnoozeActionCardRequestSerializer");
Xrm.Gen.PopulateCardRequestSerializer.registerClass("Xrm.Gen.PopulateCardRequestSerializer");
Xrm.Gen.PopulateCardResponseSerializer.registerClass("Xrm.Gen.PopulateCardResponseSerializer");
Xrm.Gen.LogExternalResultsClickedRequestSerializer.registerClass("Xrm.Gen.LogExternalResultsClickedRequestSerializer");
Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer
    .registerClass("Xrm.Gen.CreateKnowledgeArticleTranslationRequestSerializer");
Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer
    .registerClass("Xrm.Gen.CreateKnowledgeArticleTranslationResponseSerializer");
Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer
    .registerClass("Xrm.Gen.CreateKnowledgeArticleVersionRequestSerializer");
Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer
    .registerClass("Xrm.Gen.CreateKnowledgeArticleVersionResponseSerializer");
Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer
    .registerClass("Xrm.Gen.IncrementKnowledgeArticleViewCountRequestSerializer");
Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer
    .registerClass("Xrm.Gen.IncrementKnowledgeArticleViewCountResponseSerializer");
Xrm.Gen.PublishKnowledgeArticleRequestSerializer.registerClass("Xrm.Gen.PublishKnowledgeArticleRequestSerializer");
Xrm.Gen.PublishKnowledgeArticleResponseSerializer.registerClass("Xrm.Gen.PublishKnowledgeArticleResponseSerializer");
Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer.registerClass("Xrm.Gen.GetEmailLinkTrackingUrlsRequestSerializer");
Xrm.Gen.GetEmailLinkTrackingUrlsResponseSerializer.registerClass("Xrm.Gen.GetEmailLinkTrackingUrlsResponseSerializer");
Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer.registerClass("Xrm.Gen.GetEmailTrackingPixelUrlRequestSerializer");
Xrm.Gen.GetEmailTrackingPixelUrlResponseSerializer.registerClass("Xrm.Gen.GetEmailTrackingPixelUrlResponseSerializer");
Xrm.Gen.GetQuantityDecimalRequest.registerClass("Xrm.Gen.GetQuantityDecimalRequest");
Xrm.Gen.RetrieveCardDataRequest.registerClass("Xrm.Gen.RetrieveCardDataRequest");
Xrm.Gen.CanCloseOpportunityRequest.registerClass("Xrm.Gen.CanCloseOpportunityRequest");
Xrm.Gen.AddDynamicPropertyRequest.registerClass("Xrm.Gen.AddDynamicPropertyRequest");
Xrm.Gen.AddItemCampaignActivityRequest.registerClass("Xrm.Gen.AddItemCampaignActivityRequest");
Xrm.Gen.AddItemCampaignRequest.registerClass("Xrm.Gen.AddItemCampaignRequest");
Xrm.Sdk.AddItemRequest.registerClass("Xrm.Sdk.AddItemRequest");
Xrm.Gen.AddOrEditLocationRequest.registerClass("Xrm.Gen.AddOrEditLocationRequest");
Xrm.Gen.AddRecurrenceRequest.registerClass("Xrm.Gen.AddRecurrenceRequest");
Xrm.Sdk.AddToQueueRequest.registerClass("Xrm.Sdk.AddToQueueRequest");
Xrm.Sdk.AssociateKnowledgeArticleRequest.registerClass("Xrm.Sdk.AssociateKnowledgeArticleRequest");
Xrm.Sdk.DisassociateKnowledgeArticleRequest.registerClass("Xrm.Sdk.DisassociateKnowledgeArticleRequest");
Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest.registerClass("Xrm.Gen.ApplyRecordCreationAndUpdateRuleRequest");
Xrm.Gen.AssignAllRecordsTeamRequest.registerClass("Xrm.Gen.AssignAllRecordsTeamRequest");
Xrm.Gen.AssignRequest.registerClass("Xrm.Gen.AssignRequest");
Xrm.Gen.AssociateRequest.registerClass("Xrm.Gen.AssociateRequest");
Xrm.Gen.BestTimeToEmailRequest.registerClass("Xrm.Gen.BestTimeToEmailRequest");
Xrm.Gen.BookRequest.registerClass("Xrm.Gen.BookRequest");
Xrm.Gen.BulkDeleteImportedRecordsRequest.registerClass("Xrm.Gen.BulkDeleteImportedRecordsRequest");
Xrm.Sdk.CalculateActualValueOpportunityRequest.registerClass("Xrm.Sdk.CalculateActualValueOpportunityRequest");
Xrm.Gen.CancelSalesOrderRequest.registerClass("Xrm.Gen.CancelSalesOrderRequest");
Xrm.Gen.CancelContractRequest.registerClass("Xrm.Gen.CancelContractRequest");
Xrm.Gen.CanUserSendEmailRequest.registerClass("Xrm.Gen.CanUserSendEmailRequest");
Xrm.Gen.CheckInDocumentRequest.registerClass("Xrm.Gen.CheckInDocumentRequest");
Xrm.Gen.CheckoutDocumentRequest.registerClass("Xrm.Gen.CheckoutDocumentRequest");
Xrm.Gen.CloneContractRequest.registerClass("Xrm.Gen.CloneContractRequest");
Xrm.Gen.CloneProductRequest.registerClass("Xrm.Gen.CloneProductRequest");
Xrm.Gen.CloneMobileOfflineProfileRequest.registerClass("Xrm.Gen.CloneMobileOfflineProfileRequest");
Xrm.Gen.CloseIncidentRequest.registerClass("Xrm.Gen.CloseIncidentRequest");
Xrm.Gen.CloseQuoteRequest.registerClass("Xrm.Gen.CloseQuoteRequest");
Xrm.Gen.ConvertActivityRequest.registerClass("Xrm.Gen.ConvertActivityRequest");
Xrm.Gen.ConvertCampaignResponseRequest.registerClass("Xrm.Gen.ConvertCampaignResponseRequest");
Xrm.Gen.ConvertQuoteToSalesOrderRequest.registerClass("Xrm.Gen.ConvertQuoteToSalesOrderRequest");
Xrm.Gen.ConvertSalesOrderToInvoiceRequest.registerClass("Xrm.Gen.ConvertSalesOrderToInvoiceRequest");
Xrm.Gen.CopyCampaignRequest.registerClass("Xrm.Gen.CopyCampaignRequest");
Xrm.Gen.CopyCampaignResponseRequest.registerClass("Xrm.Gen.CopyCampaignResponseRequest");
Xrm.Gen.CopyDynamicListToStaticRequest.registerClass("Xrm.Gen.CopyDynamicListToStaticRequest");
Xrm.Gen.CreateAndAssociateRequest.registerClass("Xrm.Gen.CreateAndAssociateRequest");
Xrm.Gen.CreateDocumentLibrariesRequest.registerClass("Xrm.Gen.CreateDocumentLibrariesRequest");
Xrm.Gen.CreateFolderRequest.registerClass("Xrm.Gen.CreateFolderRequest");
Xrm.Gen.CreateProductsRequest.registerClass("Xrm.Gen.CreateProductsRequest");
Xrm.Gen.DeleteDocumentRequest.registerClass("Xrm.Gen.DeleteDocumentRequest");
Xrm.Gen.DeleteOpenInstancesRequest.registerClass("Xrm.Gen.DeleteOpenInstancesRequest");
Xrm.Gen.DisassociateRequest.registerClass("Xrm.Gen.DisassociateRequest");
Xrm.Gen.DiscardDocumentCheckoutRequest.registerClass("Xrm.Gen.DiscardDocumentCheckoutRequest");
Xrm.Gen.EditDocumentPropertiesRequest.registerClass("Xrm.Gen.EditDocumentPropertiesRequest");
Xrm.Sdk.ExecuteQuickFindRequest.registerClass("Xrm.Sdk.ExecuteQuickFindRequest");
Xrm.Gen.ExecuteWorkflowRequest.registerClass("Xrm.Gen.ExecuteWorkflowRequest");
Xrm.Gen.ExportTemplateToExcelOnlineRequest.registerClass("Xrm.Gen.ExportTemplateToExcelOnlineRequest");
Xrm.Gen.ExportToExcelOnlineRequest.registerClass("Xrm.Gen.ExportToExcelOnlineRequest");
Xrm.Gen.FetchSiteUrlRequest.registerClass("Xrm.Gen.FetchSiteUrlRequest");
Xrm.Gen.FollowEmailAttachmentRequest.registerClass("Xrm.Gen.FollowEmailAttachmentRequest");
Xrm.Gen.FlushMetadataCacheRequest.registerClass("Xrm.Gen.FlushMetadataCacheRequest");
Xrm.Gen.FulfillSalesOrderRequest.registerClass("Xrm.Gen.FulfillSalesOrderRequest");
Xrm.Gen.GetSimilarRecordsRequest.registerClass("Xrm.Gen.GetSimilarRecordsRequest");
Xrm.Gen.InstantiateTemplateRequest.registerClass("Xrm.Gen.InstantiateTemplateRequest");
Xrm.Gen.RetrieveUnpublishedMultipleRequest.registerClass("Xrm.Gen.RetrieveUnpublishedMultipleRequest");
Xrm.Gen.GenerateInvoiceFromOpportunityRequest.registerClass("Xrm.Gen.GenerateInvoiceFromOpportunityRequest");
Xrm.Gen.GenerateQuoteFromOpportunityRequest.registerClass("Xrm.Gen.GenerateQuoteFromOpportunityRequest");
Xrm.Gen.GenerateSalesOrderFromOpportunityRequest.registerClass("Xrm.Gen.GenerateSalesOrderFromOpportunityRequest");
Xrm.Gen.GetActualDateRequest.registerClass("Xrm.Gen.GetActualDateRequest");
Xrm.Gen.GetAllTimeZonesWithDisplayNameRequest.registerClass("Xrm.Gen.GetAllTimeZonesWithDisplayNameRequest");
Xrm.Gen.GetDefaultPriceLevelRequest.registerClass("Xrm.Gen.GetDefaultPriceLevelRequest");
Xrm.Gen.GetEntitiesForAzureMLRequest.registerClass("Xrm.Gen.GetEntitiesForAzureMLRequest");
Xrm.Gen.GetFieldListForAzureMLRequest.registerClass("Xrm.Gen.GetFieldListForAzureMLRequest");
Xrm.Gen.GetInvoiceProductsFromOpportunityRequest.registerClass("Xrm.Gen.GetInvoiceProductsFromOpportunityRequest");
Xrm.Gen.GetQuoteProductsFromOpportunityRequest.registerClass("Xrm.Gen.GetQuoteProductsFromOpportunityRequest");
Xrm.Gen.GetRelationshipsForAzureMLRequest.registerClass("Xrm.Gen.GetRelationshipsForAzureMLRequest");
Xrm.Gen.GetDataForTopicWordCloudRequest.registerClass("Xrm.Gen.GetDataForTopicWordCloudRequest");
Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest
    .registerClass("Xrm.Gen.GetSalesOrderProductsFromOpportunityRequest");
Xrm.Gen.GetTrackingTokenEmailRequest.registerClass("Xrm.Gen.GetTrackingTokenEmailRequest");
Xrm.Gen.GetRIProvisioningStatusRequest.registerClass("Xrm.Gen.GetRIProvisioningStatusRequest");
Xrm.Gen.GetRITenantEndpointUrlRequest.registerClass("Xrm.Gen.GetRITenantEndpointUrlRequest");
Xrm.Gen.GetValidStatusTransitionRequest.registerClass("Xrm.Gen.GetValidStatusTransitionRequest");
Xrm.Sdk.GrantAccessRequest.registerClass("Xrm.Sdk.GrantAccessRequest");
Xrm.Gen.InviteUserRequest.registerClass("Xrm.Gen.InviteUserRequest");
Xrm.Gen.IsPartnerSolutionInstalledRequest.registerClass("Xrm.Gen.IsPartnerSolutionInstalledRequest");
Xrm.Gen.LockInvoicePricingRequest.registerClass("Xrm.Gen.LockInvoicePricingRequest");
Xrm.Gen.LockSalesOrderPricingRequest.registerClass("Xrm.Gen.LockSalesOrderPricingRequest");
Xrm.Gen.LoseOpportunityRequest.registerClass("Xrm.Gen.LoseOpportunityRequest");
Xrm.Gen.MigrateToS2SRequest.registerClass("Xrm.Gen.MigrateToS2SRequest");
Xrm.Sdk.ModifyAccessRequest.registerClass("Xrm.Sdk.ModifyAccessRequest");
Xrm.Gen.NavigateToNextEntityRequest.registerClass("Xrm.Gen.NavigateToNextEntityRequest");
Xrm.Gen.NewDocumentRequest.registerClass("Xrm.Gen.NewDocumentRequest");
Xrm.Gen.OverrideDynamicPropertiesRequest.registerClass("Xrm.Gen.OverrideDynamicPropertiesRequest");
Xrm.Gen.OverrideDynamicPropertyRequest.registerClass("Xrm.Gen.OverrideDynamicPropertyRequest");
Xrm.Gen.OverwriteDynamicPropertyRequest.registerClass("Xrm.Gen.OverwriteDynamicPropertyRequest");
Xrm.Gen.PickFromQueueRequest.registerClass("Xrm.Gen.PickFromQueueRequest");
Xrm.Gen.PopulateRecommendationCacheForRecordRequest
    .registerClass("Xrm.Gen.PopulateRecommendationCacheForRecordRequest");
Xrm.Gen.PopulateRecommendationCacheRequest.registerClass("Xrm.Gen.PopulateRecommendationCacheRequest");
Xrm.Gen.PublishAllXmlRequest.registerClass("Xrm.Gen.PublishAllXmlRequest");
Xrm.Gen.PublishProductHierarchyRequest.registerClass("Xrm.Gen.PublishProductHierarchyRequest");
Xrm.Gen.PublishThemeRequest.registerClass("Xrm.Gen.PublishThemeRequest");
Xrm.Gen.TrackEmailRequest.registerClass("Xrm.Gen.TrackEmailRequest");
Xrm.Gen.ExecuteDataPerformanceActionRequest.registerClass("Xrm.Gen.ExecuteDataPerformanceActionRequest");
Xrm.Gen.QualifyLeadRequest.registerClass("Xrm.Gen.QualifyLeadRequest");
Xrm.Gen.ReleaseToQueueRequest.registerClass("Xrm.Gen.ReleaseToQueueRequest");
Xrm.Gen.RemoveDynamicPropertyRequest.registerClass("Xrm.Gen.RemoveDynamicPropertyRequest");
Xrm.Gen.RemoveFromQueueRequest.registerClass("Xrm.Gen.RemoveFromQueueRequest");
Xrm.Gen.RenewContractRequest.registerClass("Xrm.Gen.RenewContractRequest");
Xrm.Gen.RenewEntitlementRequest.registerClass("Xrm.Gen.RenewEntitlementRequest");
Xrm.Gen.RescheduleRequest.registerClass("Xrm.Gen.RescheduleRequest");
Xrm.Sdk.RetrieveAncestorsRequest.registerClass("Xrm.Sdk.RetrieveAncestorsRequest");
Xrm.Gen.RetrieveAttributeListRequest.registerClass("Xrm.Gen.RetrieveAttributeListRequest");
Xrm.Gen.ShouldDisplaySLALimitNotificationRequest.registerClass("Xrm.Gen.ShouldDisplaySLALimitNotificationRequest");
Xrm.Gen.RetrieveDefaultStatusForStateRequest.registerClass("Xrm.Gen.RetrieveDefaultStatusForStateRequest");
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest
    .registerClass("Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsRequest");
Xrm.Gen.RetrieveFilteredProcessesRequest.registerClass("Xrm.Gen.RetrieveFilteredProcessesRequest");
Xrm.Gen.RetrieveItemIdsForRecordRequest.registerClass("Xrm.Gen.RetrieveItemIdsForRecordRequest");
Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest
    .registerClass("Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchRequest");
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest
    .registerClass("Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchRequest");
Xrm.Gen.RetrieveProcessActiveStageRequest.registerClass("Xrm.Gen.RetrieveProcessActiveStageRequest");
Xrm.Gen.RetrieveProcessWithFallbackRequest.registerClass("Xrm.Gen.RetrieveProcessWithFallbackRequest");
Xrm.Gen.RetrieveProductPropertiesRequest.registerClass("Xrm.Gen.RetrieveProductPropertiesRequest");
Xrm.Gen.RetrieveRecommendationsCountRequest.registerClass("Xrm.Gen.RetrieveRecommendationsCountRequest");
Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemMetadataRequest");
Xrm.Gen.RetrieveRecommendationLineItemProductsRequest
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemProductsRequest");
Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest.registerClass("Xrm.Gen.RetrieveSharedPrincipalsAndAccessRequest");
Xrm.Gen.RetrievePersonalSiteUrlRequest.registerClass("Xrm.Gen.RetrievePersonalSiteUrlRequest");
Xrm.Gen.RetrieveSharePointGlobalSettingsRequest.registerClass("Xrm.Gen.RetrieveSharePointGlobalSettingsRequest");
Xrm.Gen.RetrieveUserDefaultCurrencyRequest.registerClass("Xrm.Gen.RetrieveUserDefaultCurrencyRequest");
Xrm.Gen.RetrieveUserPrivilegesRequest.registerClass("Xrm.Gen.RetrieveUserPrivilegesRequest");
Xrm.Gen.RevertProductRequest.registerClass("Xrm.Gen.RevertProductRequest");
Xrm.Gen.ReviseQuoteRequest.registerClass("Xrm.Gen.ReviseQuoteRequest");
Xrm.Gen.RevokeAccessRequest.registerClass("Xrm.Gen.RevokeAccessRequest");
Xrm.Gen.RollupRequest.registerClass("Xrm.Gen.RollupRequest");
Xrm.Gen.RouteToRequest.registerClass("Xrm.Gen.RouteToRequest");
Xrm.Gen.SearchDocumentRequest.registerClass("Xrm.Gen.SearchDocumentRequest");
Xrm.Gen.SendEmailRequest.registerClass("Xrm.Gen.SendEmailRequest");
Xrm.Gen.SendFaxRequest.registerClass("Xrm.Gen.SendFaxRequest");
Xrm.Gen.SetBusinessEquipmentRequest.registerClass("Xrm.Gen.SetBusinessEquipmentRequest");
Xrm.Gen.SetBusinessSystemUserRequest.registerClass("Xrm.Gen.SetBusinessSystemUserRequest");
Xrm.Gen.SetDevErrorsRequest.registerClass("Xrm.Gen.SetDevErrorsRequest");
Xrm.Gen.SetFeatureStatusRequest.registerClass("Xrm.Gen.SetFeatureStatusRequest");
Xrm.Gen.SetParentBusinessUnitRequest.registerClass("Xrm.Gen.SetParentBusinessUnitRequest");
Xrm.Gen.SetParentTeamRequest.registerClass("Xrm.Gen.SetParentTeamRequest");
Xrm.Gen.SetStateRequest.registerClass("Xrm.Gen.SetStateRequest");
Xrm.Gen.StartRIProvisioningRequest.registerClass("Xrm.Gen.StartRIProvisioningRequest");
Xrm.Gen.UnfollowEmailAttachmentRequest.registerClass("Xrm.Gen.UnfollowEmailAttachmentRequest");
Xrm.Gen.UnlockInvoicePricingRequest.registerClass("Xrm.Gen.UnlockInvoicePricingRequest");
Xrm.Gen.UnlockSalesOrderPricingRequest.registerClass("Xrm.Gen.UnlockSalesOrderPricingRequest");
Xrm.Gen.UpdateDocumentManagementSettingsRequest.registerClass("Xrm.Gen.UpdateDocumentManagementSettingsRequest");
Xrm.Gen.UpdateGlobalSharePointSettingsRequest.registerClass("Xrm.Gen.UpdateGlobalSharePointSettingsRequest");
Xrm.Gen.UpdateProductPropertiesRequest.registerClass("Xrm.Gen.UpdateProductPropertiesRequest");
Xrm.Gen.UpdateRITenantInfoRequest.registerClass("Xrm.Gen.UpdateRITenantInfoRequest");
Xrm.Gen.UpgradeToS2SRequest.registerClass("Xrm.Gen.UpgradeToS2SRequest");
Xrm.Gen.ValidateUrlRequest.registerClass("Xrm.Gen.ValidateUrlRequest");
Xrm.Gen.WhoAmIRequest.registerClass("Xrm.Gen.WhoAmIRequest");
Xrm.Gen.WinOpportunityRequest.registerClass("Xrm.Gen.WinOpportunityRequest");
Xrm.Gen.WinQuoteRequest.registerClass("Xrm.Gen.WinQuoteRequest");
Xrm.Gen.UpdateDelveActionStatusRequest.registerClass("Xrm.Gen.UpdateDelveActionStatusRequest");
Xrm.Gen.SetActionCardStateRequest.registerClass("Xrm.Gen.SetActionCardStateRequest");
Xrm.Gen.SnoozeActionCardRequest.registerClass("Xrm.Gen.SnoozeActionCardRequest");
Xrm.Gen.PopulateCardRequest.registerClass("Xrm.Gen.PopulateCardRequest");
Xrm.Gen.CreateEmailReplyDraftRequest.registerClass("Xrm.Gen.CreateEmailReplyDraftRequest");
Xrm.Gen.CopySharePointDocumentsRequest.registerClass("Xrm.Gen.CopySharePointDocumentsRequest");
Xrm.Gen.LogExternalResultsClickedRequest.registerClass("Xrm.Gen.LogExternalResultsClickedRequest");
Xrm.Gen.CreateKnowledgeArticleTranslationRequest.registerClass("Xrm.Gen.CreateKnowledgeArticleTranslationRequest");
Xrm.Gen.CreateKnowledgeArticleVersionRequest.registerClass("Xrm.Gen.CreateKnowledgeArticleVersionRequest");
Xrm.Gen.IncrementKnowledgeArticleViewCountRequest.registerClass("Xrm.Gen.IncrementKnowledgeArticleViewCountRequest");
Xrm.Gen.PublishKnowledgeArticleRequest.registerClass("Xrm.Gen.PublishKnowledgeArticleRequest");
Xrm.Gen.GetEmailLinkTrackingUrlsRequest.registerClass("Xrm.Gen.GetEmailLinkTrackingUrlsRequest");
Xrm.Gen.GetEmailTrackingPixelUrlRequest.registerClass("Xrm.Gen.GetEmailTrackingPixelUrlRequest");
Xrm.Gen.GetQuantityDecimalResponse.registerClass("Xrm.Gen.GetQuantityDecimalResponse");
Xrm.Gen.CanCloseOpportunityResponse.registerClass("Xrm.Gen.CanCloseOpportunityResponse");
Xrm.Gen.PopulateCardResponse.registerClass("Xrm.Gen.PopulateCardResponse");
Xrm.Gen.AddDynamicPropertyResponse.registerClass("Xrm.Gen.AddDynamicPropertyResponse");
Xrm.Gen.AddItemCampaignActivityResponse.registerClass("Xrm.Gen.AddItemCampaignActivityResponse");
Xrm.Gen.AddItemCampaignResponse.registerClass("Xrm.Gen.AddItemCampaignResponse");
Xrm.Sdk.AddItemResponse.registerClass("Xrm.Sdk.AddItemResponse");
Xrm.Gen.AddOrEditLocationResponse.registerClass("Xrm.Gen.AddOrEditLocationResponse");
Xrm.Gen.AddRecurrenceResponse.registerClass("Xrm.Gen.AddRecurrenceResponse");
Xrm.Sdk.AddToQueueResponse.registerClass("Xrm.Sdk.AddToQueueResponse");
Xrm.Gen.BestTimeToEmailResponse.registerClass("Xrm.Gen.BestTimeToEmailResponse");
Xrm.Gen.BookResponse.registerClass("Xrm.Gen.BookResponse");
Xrm.Gen.BulkDeleteImportedRecordsResponse.registerClass("Xrm.Gen.BulkDeleteImportedRecordsResponse");
Xrm.Sdk.CalculateActualValueOpportunityResponse.registerClass("Xrm.Sdk.CalculateActualValueOpportunityResponse");
Xrm.Gen.CanUserSendEmailResponse.registerClass("Xrm.Gen.CanUserSendEmailResponse");
Xrm.Gen.CloneContractResponse.registerClass("Xrm.Gen.CloneContractResponse");
Xrm.Gen.CloneProductResponse.registerClass("Xrm.Gen.CloneProductResponse");
Xrm.Gen.CloneMobileOfflineProfileResponse.registerClass("Xrm.Gen.CloneMobileOfflineProfileResponse");
Xrm.Gen.ConvertActivityResponse.registerClass("Xrm.Gen.ConvertActivityResponse");
Xrm.Gen.ConvertCampaignResponseResponse.registerClass("Xrm.Gen.ConvertCampaignResponseResponse");
Xrm.Gen.ConvertQuoteToSalesOrderResponse.registerClass("Xrm.Gen.ConvertQuoteToSalesOrderResponse");
Xrm.Gen.ConvertSalesOrderToInvoiceResponse.registerClass("Xrm.Gen.ConvertSalesOrderToInvoiceResponse");
Xrm.Gen.CopyCampaignResponse.registerClass("Xrm.Gen.CopyCampaignResponse");
Xrm.Gen.CopyCampaignResponseResponse.registerClass("Xrm.Gen.CopyCampaignResponseResponse");
Xrm.Gen.CopyDynamicListToStaticResponse.registerClass("Xrm.Gen.CopyDynamicListToStaticResponse");
Xrm.Gen.CreateDocumentLibrariesResponse.registerClass("Xrm.Gen.CreateDocumentLibrariesResponse");
Xrm.Gen.CreateFolderResponse.registerClass("Xrm.Gen.CreateFolderResponse");
Xrm.Gen.CreateProductsResponse.registerClass("Xrm.Gen.CreateProductsResponse");
Xrm.Sdk.ExecuteQuickFindResponse.registerClass("Xrm.Sdk.ExecuteQuickFindResponse");
Xrm.Gen.ExecuteWorkflowResponse.registerClass("Xrm.Gen.ExecuteWorkflowResponse");
Xrm.Gen.ExportTemplateToExcelOnlineResponse.registerClass("Xrm.Gen.ExportTemplateToExcelOnlineResponse");
Xrm.Gen.ExportToExcelOnlineResponse.registerClass("Xrm.Gen.ExportToExcelOnlineResponse");
Xrm.Gen.FetchSiteUrlResponse.registerClass("Xrm.Gen.FetchSiteUrlResponse");
Xrm.Gen.FollowEmailAttachmentResponse.registerClass("Xrm.Gen.FollowEmailAttachmentResponse");
Xrm.Gen.GetSimilarRecordsResponse.registerClass("Xrm.Gen.GetSimilarRecordsResponse");
Xrm.Gen.InstantiateTemplateResponse.registerClass("Xrm.Gen.InstantiateTemplateResponse");
Xrm.Gen.RetrieveCardDataResponse.registerClass("Xrm.Gen.RetrieveCardDataResponse");
Xrm.Gen.RetrieveUnpublishedMultipleResponse.registerClass("Xrm.Gen.RetrieveUnpublishedMultipleResponse");
Xrm.Gen.GenerateInvoiceFromOpportunityResponse.registerClass("Xrm.Gen.GenerateInvoiceFromOpportunityResponse");
Xrm.Gen.GenerateQuoteFromOpportunityResponse.registerClass("Xrm.Gen.GenerateQuoteFromOpportunityResponse");
Xrm.Gen.GenerateSalesOrderFromOpportunityResponse.registerClass("Xrm.Gen.GenerateSalesOrderFromOpportunityResponse");
Xrm.Gen.GetActualDateResponse.registerClass("Xrm.Gen.GetActualDateResponse");
Xrm.Gen.GetAllTimeZonesWithDisplayNameResponse.registerClass("Xrm.Gen.GetAllTimeZonesWithDisplayNameResponse");
Xrm.Gen.GetDefaultPriceLevelResponse.registerClass("Xrm.Gen.GetDefaultPriceLevelResponse");
Xrm.Gen.GetEntitiesForAzureMLResponse.registerClass("Xrm.Gen.GetEntitiesForAzureMLResponse");
Xrm.Gen.GetFieldListForAzureMLResponse.registerClass("Xrm.Gen.GetFieldListForAzureMLResponse");
Xrm.Gen.GetRelationshipsForAzureMLResponse.registerClass("Xrm.Gen.GetRelationshipsForAzureMLResponse");
Xrm.Gen.GetDataForTopicWordCloudResponse.registerClass("Xrm.Gen.GetDataForTopicWordCloudResponse");
Xrm.Gen.GetRIProvisioningStatusResponse.registerClass("Xrm.Gen.GetRIProvisioningStatusResponse");
Xrm.Gen.GetRITenantEndpointUrlResponse.registerClass("Xrm.Gen.GetRITenantEndpointUrlResponse");
Xrm.Gen.GetTrackingTokenEmailResponse.registerClass("Xrm.Gen.GetTrackingTokenEmailResponse");
Xrm.Gen.GetValidStatusTransitionResponse.registerClass("Xrm.Gen.GetValidStatusTransitionResponse");
Xrm.Gen.InviteUserResponse.registerClass("Xrm.Gen.InviteUserResponse");
Xrm.Gen.IsPartnerSolutionInstalledResponse.registerClass("Xrm.Gen.IsPartnerSolutionInstalledResponse");
Xrm.Gen.NewDocumentResponse.registerClass("Xrm.Gen.NewDocumentResponse");
Xrm.Gen.OverrideDynamicPropertyResponse.registerClass("Xrm.Gen.OverrideDynamicPropertyResponse");
Xrm.Gen.PopulateRecommendationCacheForRecordResponse
    .registerClass("Xrm.Gen.PopulateRecommendationCacheForRecordResponse");
Xrm.Gen.PopulateRecommendationCacheResponse.registerClass("Xrm.Gen.PopulateRecommendationCacheResponse");
Xrm.Gen.OverwriteDynamicPropertyResponse.registerClass("Xrm.Gen.OverwriteDynamicPropertyResponse");
Xrm.Gen.QualifyLeadResponse.registerClass("Xrm.Gen.QualifyLeadResponse");
Xrm.Gen.RenewContractResponse.registerClass("Xrm.Gen.RenewContractResponse");
Xrm.Gen.RenewEntitlementResponse.registerClass("Xrm.Gen.RenewEntitlementResponse");
Xrm.Gen.RescheduleResponse.registerClass("Xrm.Gen.RescheduleResponse");
Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchResponse
    .registerClass("Xrm.Sdk.RetrieveKeyPhrasesForKnowledgeSearchResponse");
Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponse
    .registerClass("Xrm.Gen.RetrieveKeyPhrasesForSimilaritySearchResponse");
Xrm.Gen.RetrievePersonalSiteUrlResponse.registerClass("Xrm.Gen.RetrievePersonalSiteUrlResponse");
Xrm.Sdk.RetrieveAncestorsResponse.registerClass("Xrm.Sdk.RetrieveAncestorsResponse");
Xrm.Gen.RetrieveAttributeListResponse.registerClass("Xrm.Gen.RetrieveAttributeListResponse");
Xrm.Gen.ShouldDisplaySLALimitNotificationResponse.registerClass("Xrm.Gen.ShouldDisplaySLALimitNotificationResponse");
Xrm.Gen.RetrieveDefaultStatusForStateResponse.registerClass("Xrm.Gen.RetrieveDefaultStatusForStateResponse");
Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponse
    .registerClass("Xrm.Gen.RetrieveEntityDynamicPropertyDefinitionsResponse");
Xrm.Gen.RetrieveFilteredProcessesResponse.registerClass("Xrm.Gen.RetrieveFilteredProcessesResponse");
Xrm.Gen.RetrieveItemIdsForRecordResponse.registerClass("Xrm.Gen.RetrieveItemIdsForRecordResponse");
Xrm.Gen.RetrieveProcessActiveStageResponse.registerClass("Xrm.Gen.RetrieveProcessActiveStageResponse");
Xrm.Gen.RetrieveProcessWithFallbackResponse.registerClass("Xrm.Gen.RetrieveProcessWithFallbackResponse");
Xrm.Gen.RetrieveProductPropertiesResponse.registerClass("Xrm.Gen.RetrieveProductPropertiesResponse");
Xrm.Gen.RetrieveRecommendationsCountResponse.registerClass("Xrm.Gen.RetrieveRecommendationsCountResponse");
Xrm.Gen.RetrieveRecommendationLineItemMetadataResponse
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemMetadataResponse");
Xrm.Gen.RetrieveRecommendationLineItemProductsResponse
    .registerClass("Xrm.Gen.RetrieveRecommendationLineItemProductsResponse");
Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponse.registerClass("Xrm.Gen.RetrieveSharedPrincipalsAndAccessResponse");
Xrm.Gen.RetrieveSharePointGlobalSettingsResponse.registerClass("Xrm.Gen.RetrieveSharePointGlobalSettingsResponse");
Xrm.Gen.RetrieveUserDefaultCurrencyResponse.registerClass("Xrm.Gen.RetrieveUserDefaultCurrencyResponse");
Xrm.Gen.RetrieveUserPrivilegesResponse.registerClass("Xrm.Gen.RetrieveUserPrivilegesResponse");
Xrm.Gen.ReviseQuoteResponse.registerClass("Xrm.Gen.ReviseQuoteResponse");
Xrm.Gen.RollupResponse.registerClass("Xrm.Gen.RollupResponse");
Xrm.Gen.SearchDocumentResponse.registerClass("Xrm.Gen.SearchDocumentResponse");
Xrm.Gen.CreateEmailReplyDraftResponse.registerClass("Xrm.Gen.CreateEmailReplyDraftResponse");
Xrm.Gen.CopySharePointDocumentsResponse.registerClass("Xrm.Gen.CopySharePointDocumentsResponse");
Xrm.Gen.SendEmailResponse.registerClass("Xrm.Gen.SendEmailResponse");
Xrm.Gen.ValidateUrlResponse.registerClass("Xrm.Gen.ValidateUrlResponse");
Xrm.Gen.WhoAmIResponse.registerClass("Xrm.Gen.WhoAmIResponse");
Xrm.Gen.CreateKnowledgeArticleTranslationResponse.registerClass("Xrm.Gen.CreateKnowledgeArticleTranslationResponse");
Xrm.Gen.CreateKnowledgeArticleVersionResponse.registerClass("Xrm.Gen.CreateKnowledgeArticleVersionResponse");
Xrm.Gen.IncrementKnowledgeArticleViewCountResponse.registerClass("Xrm.Gen.IncrementKnowledgeArticleViewCountResponse");
Xrm.Gen.PublishKnowledgeArticleResponse.registerClass("Xrm.Gen.PublishKnowledgeArticleResponse");
Xrm.Gen.GetEmailLinkTrackingUrlsResponse.registerClass("Xrm.Gen.GetEmailLinkTrackingUrlsResponse");
Xrm.Gen.GetEmailTrackingPixelUrlResponse.registerClass("Xrm.Gen.GetEmailTrackingPixelUrlResponse");
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddItemResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueRequestSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .AssociateKnowledgeArticleRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .DisassociateKnowledgeArticleRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.AddToQueueResponseSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CalculateActualValueOpportunityResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CloneMobileOfflineProfileResponseSerializer.$$cctor();
Xrm.Gen.ExecuteMultipleRequestSerializer.$$cctor();
Xrm.Gen.ExecuteMultipleResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindRequestSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ExecuteQuickFindResponseSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsRequestSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetSimilarRecordsResponseSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .GetDataForTopicWordCloudResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GrantAccessRequestSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.ModifyAccessRequestSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheForRecordResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .PopulateRecommendationCacheResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsRequestSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.RetrieveAncestorsResponseSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .ShouldDisplaySLALimitNotificationResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveItemIdsForRecordResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveKeyPhrasesForKnowledgeSearchResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .RetrieveRecommendationsCountResponseSerializer.$$cctor();
Xrm.Gen.RetrieveRequestSerializer.$$cctor();
Xrm.Gen.RetrieveResponseSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalRequestSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated.GetQuantityDecimalResponseSerializer
    .$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftRequestSerializer.$$cctor();
Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.CrmSoapSerializers.Generated
    .CreateEmailReplyDraftResponseSerializer.$$cctor();
Xrm.Gen.CopySharePointDocumentsRequestSerializer.$$cctor();
Xrm.Gen.CopySharePointDocumentsResponseSerializer.$$cctor()
//# sourceMappingURL=../../../../../../../../../../Symbols/retail/amd64/jsmin/Microsoft.Crm.Client.Core.Messages.js.srcmap