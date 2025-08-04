


--
-- base view for Incident
--
create view dbo.[Incident]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ResponsibleContactIdName],
    [EntityImage_URL],
    [PrimaryContactIdYomiName],
    [SubjectIdName],
    [CreatedOnBehalfByYomiName],
    [PrimaryContactIdName],
    [ContractIdName],
    [CreatedByName],
    [EntityImage],
    [KbArticleIdName],
    [CreatedByYomiName],
    [MasterIdName],
    [SLAInvokedIdName],
    [SocialProfileIdName],
    [NumberOfChildIncidents],
    [ContractDetailIdName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ResponsibleContactIdYomiName],
    [EntityImage_Timestamp],
    [ParentCaseIdName],
    [TransactionCurrencyIdName],
    [ModifiedOnBehalfByName],
    [ProductIdName],
    [EntitlementIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,


	[AccountId],
	[AccountIdName],
	[AccountIdYomiName],
	[ContactId],
	[ContactIdName],
	[ContactIdYomiName],
    -- physical attributes
    [IncidentId],
    [OwningBusinessUnit],
    [ContractDetailId],
    [SubjectId],
    [ContractId],
    [ActualServiceUnits],
    [CaseOriginCode],
    [BilledServiceUnits],
    [CaseTypeCode],
    [ProductSerialNumber],
    [Title],
    [ProductId],
    [ContractServiceLevelCode],
    [Description],
    [IsDecrementing],
    [CreatedOn],
    [TicketNumber],
    [PriorityCode],
    [CustomerSatisfactionCode],
    [IncidentStageCode],
    [ModifiedOn],
    [CreatedBy],
    [FollowupBy],
    [ModifiedBy],
    [VersionNumber],
    [StateCode],
    [SeverityCode],
    [StatusCode],
    [ResponsibleContactId],
    [CustomerId],
    [CustomerIdName],
    [CustomerIdType],
    [KbArticleId],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [CustomerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ServiceStage],
    [ExistingCase],
    [StageId],
    [ProcessId],
    [EntityImageId],
    [CheckEmail],
    [ActivitiesComplete],
    [FollowUpTaskCreated],
    [SocialProfileId],
    [SLAInvokedId],
    [MessageTypeCode],
    [BlockedProfile],
    [EntitlementId],
    [MasterId],
    [ParentCaseId],
    [SentimentValue],
    [InfluenceScore],
    [Merged],
    [RouteCase],
    [ResolveBy],
    [ResponseBy],
    [CustomerContacted],
    [IsEscalated],
    [EscalatedOn],
    [PrimaryContactId],
    [FirstResponseSent],
    [FirstResponseSLAStatus],
    [ResolveBySLAStatus]
) with view_metadata as
select
    -- logical attributes
    [lk_incidentbase_modifiedby].[YomiFullName],
    [lk_incidentbase_modifiedonbehalfby].[YomiFullName],
    [contact_as_responsible_contact].[FullName],
    [lk_incident_entityimage].[ImageURL],
    [contact_as_primary_contact].[YomiFullName],
    [subject_incidents].[Title],
    [lk_incidentbase_createdonbehalfby].[YomiFullName],
    [contact_as_primary_contact].[FullName],
    [contract_cases].[Title],
    [lk_incidentbase_createdby].[FullName],
    [lk_incident_entityimage].[ImageData],
    [kbarticle_incidents].[Title],
    [lk_incidentbase_createdby].[YomiFullName],
    [incident_master_incident].[Title],
    [sla_cases].[Name],
    [socialprofile_cases].[ProfileName],
    [lk_incident_ChildIncidentCount].[NumberOfChildIncidents],
    [contract_detail_cases].[Title],
    [lk_incidentbase_createdonbehalfby].[FullName],
    [lk_incidentbase_modifiedby].[FullName],
    [contact_as_responsible_contact].[YomiFullName],
    [lk_incident_entityimage].[ImageTimestamp],
    [incident_parent_incident].[Title],
    [TransactionCurrency_Incident].[CurrencyName],
    [lk_incidentbase_modifiedonbehalfby].[FullName],
    [product_incidents].[Name],
    [entitlement_cases].[Name],

    -- ownership entries
    OwnerId = [IncidentBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,


	[AccountId] = case 
		when [IncidentBase].[CustomerIdType] = 1 AND [IncidentBase].[CustomerId] IS NOT NULL then [IncidentBase].[CustomerId]
		else NULL
		end,
	[AccountIdName] = case 
		when [IncidentBase].[CustomerIdType] = 1 AND [IncidentBase].[CustomerId] IS NOT NULL then [IncidentBase].[CustomerIdName]
		else NULL
		end,
	[AccountIdYomiName] = case 
		when [IncidentBase].[CustomerIdType] = 1 AND [IncidentBase].[CustomerId] IS NOT NULL then [IncidentBase].[CustomerIdYomiName]
		else NULL
		end,
	[ContactId] = case 
		when [IncidentBase].[CustomerIdType] = 2 AND [IncidentBase].[CustomerId] IS NOT NULL then [IncidentBase].[CustomerId]
		else NULL
		end,
	[ContactIdName] = case 
		when [IncidentBase].[CustomerIdType] = 2 AND [IncidentBase].[CustomerId] IS NOT NULL then [IncidentBase].[CustomerIdName]
		else NULL
		end,
	[ContactIdYomiName] = case 
		when [IncidentBase].[CustomerIdType] = 2 AND [IncidentBase].[CustomerId] IS NOT NULL then [IncidentBase].[CustomerIdYomiName]
		else NULL
		end,
    -- physical attribute
    [IncidentBase].[IncidentId],
    [IncidentBase].[OwningBusinessUnit],
    [IncidentBase].[ContractDetailId],
    [IncidentBase].[SubjectId],
    [IncidentBase].[ContractId],
    [IncidentBase].[ActualServiceUnits],
    [IncidentBase].[CaseOriginCode],
    [IncidentBase].[BilledServiceUnits],
    [IncidentBase].[CaseTypeCode],
    [IncidentBase].[ProductSerialNumber],
    [IncidentBase].[Title],
    [IncidentBase].[ProductId],
    [IncidentBase].[ContractServiceLevelCode],
    [IncidentBase].[Description],
    [IncidentBase].[IsDecrementing],
    [IncidentBase].[CreatedOn],
    [IncidentBase].[TicketNumber],
    [IncidentBase].[PriorityCode],
    [IncidentBase].[CustomerSatisfactionCode],
    [IncidentBase].[IncidentStageCode],
    [IncidentBase].[ModifiedOn],
    [IncidentBase].[CreatedBy],
    [IncidentBase].[FollowupBy],
    [IncidentBase].[ModifiedBy],
    [IncidentBase].[VersionNumber],
    [IncidentBase].[StateCode],
    [IncidentBase].[SeverityCode],
    [IncidentBase].[StatusCode],
    [IncidentBase].[ResponsibleContactId],
    [IncidentBase].[CustomerId],
    [IncidentBase].[CustomerIdName],
    [IncidentBase].[CustomerIdType],
    [IncidentBase].[KbArticleId],
    [IncidentBase].[TimeZoneRuleVersionNumber],
    [IncidentBase].[ImportSequenceNumber],
    [IncidentBase].[UTCConversionTimeZoneCode],
    [IncidentBase].[OverriddenCreatedOn],
    [IncidentBase].[CustomerIdYomiName],
    [IncidentBase].[CreatedOnBehalfBy],
    [IncidentBase].[ModifiedOnBehalfBy],
    [IncidentBase].[TransactionCurrencyId],
    [IncidentBase].[ExchangeRate],
    [IncidentBase].[ServiceStage],
    [IncidentBase].[ExistingCase],
    [IncidentBase].[StageId],
    [IncidentBase].[ProcessId],
    [IncidentBase].[EntityImageId],
    [IncidentBase].[CheckEmail],
    [IncidentBase].[ActivitiesComplete],
    [IncidentBase].[FollowUpTaskCreated],
    [IncidentBase].[SocialProfileId],
    [IncidentBase].[SLAInvokedId],
    [IncidentBase].[MessageTypeCode],
    [IncidentBase].[BlockedProfile],
    [IncidentBase].[EntitlementId],
    [IncidentBase].[MasterId],
    [IncidentBase].[ParentCaseId],
    [IncidentBase].[SentimentValue],
    [IncidentBase].[InfluenceScore],
    [IncidentBase].[Merged],
    [IncidentBase].[RouteCase],
    [IncidentBase].[ResolveBy],
    [IncidentBase].[ResponseBy],
    [IncidentBase].[CustomerContacted],
    [IncidentBase].[IsEscalated],
    [IncidentBase].[EscalatedOn],
    [IncidentBase].[PrimaryContactId],
    [IncidentBase].[FirstResponseSent],
    [IncidentBase].[FirstResponseSLAStatus],
    [IncidentBase].[ResolveBySLAStatus]
from [IncidentBase] 
    left join [ContactBase] [contact_as_primary_contact] on ([IncidentBase].[PrimaryContactId] = [contact_as_primary_contact].[ContactId])
    left join [ContactBase] [contact_as_responsible_contact] on ([IncidentBase].[ResponsibleContactId] = [contact_as_responsible_contact].[ContactId])
    left join [ContractBase] [contract_cases] on ([IncidentBase].[ContractId] = [contract_cases].[ContractId])
    left join [ContractDetailBase] [contract_detail_cases] on ([IncidentBase].[ContractDetailId] = [contract_detail_cases].[ContractDetailId])
    left join [EntitlementBase] [entitlement_cases] on ([IncidentBase].[EntitlementId] = [entitlement_cases].[EntitlementId])
    left join [IncidentBase] [incident_master_incident] on ([IncidentBase].[MasterId] = [incident_master_incident].[IncidentId])
    left join [IncidentBase] [incident_parent_incident] on ([IncidentBase].[ParentCaseId] = [incident_parent_incident].[IncidentId])
    left join [KbArticleBase] [kbarticle_incidents] on ([IncidentBase].[KbArticleId] = [kbarticle_incidents].[KbArticleId])
    left join [ChildIncidentCount] [lk_incident_ChildIncidentCount] on ([IncidentBase].[IncidentId] = [lk_incident_ChildIncidentCount].[ParentCaseId])
    left join [ImageDescriptor] [lk_incident_entityimage] on ([IncidentBase].[EntityImageId] = [lk_incident_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_incidentbase_createdby] with(nolock) on ([IncidentBase].[CreatedBy] = [lk_incidentbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_createdonbehalfby] with(nolock) on ([IncidentBase].[CreatedOnBehalfBy] = [lk_incidentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_modifiedby] with(nolock) on ([IncidentBase].[ModifiedBy] = [lk_incidentbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_modifiedonbehalfby] with(nolock) on ([IncidentBase].[ModifiedOnBehalfBy] = [lk_incidentbase_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [product_incidents] on ([IncidentBase].[ProductId] = [product_incidents].[ProductId])
    left join [SLABase] [sla_cases] on ([IncidentBase].[SLAInvokedId] = [sla_cases].[SLAId] and [sla_cases].OverwriteTime = 0 and [sla_cases].ComponentState = 0)
    left join [SocialProfileBase] [socialprofile_cases] on ([IncidentBase].[SocialProfileId] = [socialprofile_cases].[SocialProfileId])
    left join [SubjectBase] [subject_incidents] on ([IncidentBase].[SubjectId] = [subject_incidents].[SubjectId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Incident] on ([IncidentBase].[TransactionCurrencyId] = [TransactionCurrency_Incident].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([IncidentBase].OwnerId = XXowner.OwnerId)
