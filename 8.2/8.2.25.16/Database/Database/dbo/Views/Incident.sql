


--
-- base view for Incident
--
create view dbo.[Incident]
 (
    -- logical attributes
    [CreatedByExternalPartyYomiName],
    [CreatedByExternalPartyName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [EntitlementIdName],
    [PrimaryContactIdYomiName],
    [PrimaryContactIdName],
    [ContractDetailIdName],
    [NumberOfChildIncidents],
    [ResponsibleContactIdName],
    [ResponsibleContactIdYomiName],
    [ContractIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByExternalPartyName],
    [ModifiedByExternalPartyYomiName],
    [EntityImage_URL],
    [EntityImage],
    [EntityImage_Timestamp],
    [KbArticleIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [CreatedByYomiName],
    [MasterIdName],
    [ParentCaseIdName],
    [TransactionCurrencyIdName],
    [FirstResponseByKPIIdName],
    [ResolveByKPIIdName],
    [SLAName],
    [ProductIdName],
    [SocialProfileIdName],
    [SLAInvokedIdName],
    [SubjectIdName],

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
    [SLAId],
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
    [TraversedPath],
    [ParentCaseId],
    [DecrementEntitlementTerm],
    [CreatedByExternalParty],
    [ModifiedByExternalParty],
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
    [ResolveBySLAStatus],
    [OnHoldTime],
    [LastOnHoldTime],
    [ResolveByKPIId],
    [FirstResponseByKPIId]
) with view_metadata as
select
    -- logical attributes
    [lk_externalparty_incident_createdby].[YomiFullName],
    [lk_externalparty_incident_createdby].[FullName],
    [lk_incidentbase_modifiedby].[YomiFullName],
    [lk_incidentbase_modifiedby].[FullName],
    [entitlement_cases].[Name],
    [contact_as_primary_contact].[YomiFullName],
    [contact_as_primary_contact].[FullName],
    [contract_detail_cases].[Title],
    [lk_incident_ChildIncidentCount].[NumberOfChildIncidents],
    [contact_as_responsible_contact].[FullName],
    [contact_as_responsible_contact].[YomiFullName],
    [contract_cases].[Title],
    [lk_incidentbase_createdonbehalfby].[YomiFullName],
    [lk_incidentbase_createdonbehalfby].[FullName],
    [lk_externalparty_incident_modifiedby].[FullName],
    [lk_externalparty_incident_modifiedby].[YomiFullName],
    [lk_incident_entityimage].[ImageURL],
    [lk_incident_entityimage].[ImageData],
    [lk_incident_entityimage].[ImageTimestamp],
    [kbarticle_incidents].[Title],
    [lk_incidentbase_modifiedonbehalfby].[YomiFullName],
    [lk_incidentbase_modifiedonbehalfby].[FullName],
    [lk_incidentbase_createdby].[FullName],
    [lk_incidentbase_createdby].[YomiFullName],
    [incident_master_incident].[Title],
    [incident_parent_incident].[Title],
    [TransactionCurrency_Incident].[CurrencyName],
    [slakpiinstance_incident_firstresponsebykpi].[Name],
    [slakpiinstance_incident_resolvebykpi].[Name],
    [manualsla_cases].[Name],
    [product_incidents].[Name],
    [socialprofile_cases].[ProfileName],
    [sla_cases].[Name],
    [subject_incidents].[Title],

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
    [IncidentBase].[SLAId],
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
    [IncidentBase].[TraversedPath],
    [IncidentBase].[ParentCaseId],
    [IncidentBase].[DecrementEntitlementTerm],
    [IncidentBase].[CreatedByExternalParty],
    [IncidentBase].[ModifiedByExternalParty],
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
    [IncidentBase].[ResolveBySLAStatus],
    [IncidentBase].[OnHoldTime],
    [IncidentBase].[LastOnHoldTime],
    [IncidentBase].[ResolveByKPIId],
    [IncidentBase].[FirstResponseByKPIId]
from [IncidentBase] 
    left join [ContactBase] [contact_as_primary_contact] on ([IncidentBase].[PrimaryContactId] = [contact_as_primary_contact].[ContactId])
    left join [ContactBase] [contact_as_responsible_contact] on ([IncidentBase].[ResponsibleContactId] = [contact_as_responsible_contact].[ContactId])
    left join [ContractBase] [contract_cases] on ([IncidentBase].[ContractId] = [contract_cases].[ContractId])
    left join [ContractDetailBase] [contract_detail_cases] on ([IncidentBase].[ContractDetailId] = [contract_detail_cases].[ContractDetailId])
    left join [EntitlementBase] [entitlement_cases] on ([IncidentBase].[EntitlementId] = [entitlement_cases].[EntitlementId])
    left join [IncidentBase] [incident_master_incident] on ([IncidentBase].[MasterId] = [incident_master_incident].[IncidentId])
    left join [IncidentBase] [incident_parent_incident] on ([IncidentBase].[ParentCaseId] = [incident_parent_incident].[IncidentId])
    left join [KbArticleBase] [kbarticle_incidents] on ([IncidentBase].[KbArticleId] = [kbarticle_incidents].[KbArticleId])
    left join [ExternalPartyBase] [lk_externalparty_incident_createdby] on ([IncidentBase].[CreatedByExternalParty] = [lk_externalparty_incident_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_incident_modifiedby] on ([IncidentBase].[ModifiedByExternalParty] = [lk_externalparty_incident_modifiedby].[ExternalPartyId])
    left join [ChildIncidentCount] [lk_incident_ChildIncidentCount] on ([IncidentBase].[IncidentId] = [lk_incident_ChildIncidentCount].[ParentCaseId])
    left join [ImageDescriptor] [lk_incident_entityimage] on ([IncidentBase].[EntityImageId] = [lk_incident_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_incidentbase_createdby] with(nolock) on ([IncidentBase].[CreatedBy] = [lk_incidentbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_createdonbehalfby] with(nolock) on ([IncidentBase].[CreatedOnBehalfBy] = [lk_incidentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_modifiedby] with(nolock) on ([IncidentBase].[ModifiedBy] = [lk_incidentbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_modifiedonbehalfby] with(nolock) on ([IncidentBase].[ModifiedOnBehalfBy] = [lk_incidentbase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_cases] on ([IncidentBase].[SLAId] = [manualsla_cases].[SLAId] and [manualsla_cases].OverwriteTime = 0 and [manualsla_cases].ComponentState = 0)
    left join [ProductBase] [product_incidents] on ([IncidentBase].[ProductId] = [product_incidents].[ProductId])
    left join [SLABase] [sla_cases] on ([IncidentBase].[SLAInvokedId] = [sla_cases].[SLAId] and [sla_cases].OverwriteTime = 0 and [sla_cases].ComponentState = 0)
    left join [SLAKPIInstanceBase] [slakpiinstance_incident_firstresponsebykpi] on ([IncidentBase].[FirstResponseByKPIId] = [slakpiinstance_incident_firstresponsebykpi].[SLAKPIInstanceId])
    left join [SLAKPIInstanceBase] [slakpiinstance_incident_resolvebykpi] on ([IncidentBase].[ResolveByKPIId] = [slakpiinstance_incident_resolvebykpi].[SLAKPIInstanceId])
    left join [SocialProfileBase] [socialprofile_cases] on ([IncidentBase].[SocialProfileId] = [socialprofile_cases].[SocialProfileId])
    left join [SubjectBase] [subject_incidents] on ([IncidentBase].[SubjectId] = [subject_incidents].[SubjectId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Incident] on ([IncidentBase].[TransactionCurrencyId] = [TransactionCurrency_Incident].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([IncidentBase].OwnerId = XXowner.OwnerId)
