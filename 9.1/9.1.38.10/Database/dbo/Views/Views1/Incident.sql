


--
-- base view for Incident
--
create view dbo.[Incident]
 (
    -- logical attributes
    [SLAName],
    [EntityImage_Timestamp],
    [EntityImage_URL],
    [EntityImage],
    [ModifiedByName],
    [ModifiedByYomiName],
    [MasterIdName],
    [TransactionCurrencyIdName],
    [EntitlementIdName],
    [FirstResponseByKPIIdName],
    [NumberOfChildIncidents],
    [PrimaryContactIdName],
    [PrimaryContactIdYomiName],
    [SubjectIdName],
    [KbArticleIdName],
    [ContractIdName],
    [ResponsibleContactIdName],
    [ResponsibleContactIdYomiName],
    [ModifiedByExternalPartyYomiName],
    [ModifiedByExternalPartyName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ProductIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ContractDetailIdName],
    [SLAInvokedIdName],
    [ResolveByKPIIdName],
    [SocialProfileIdName],
    [ParentCaseIdName],
    [CreatedByExternalPartyYomiName],
    [CreatedByExternalPartyName],

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
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [EmailAddress],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Title],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [ActivitiesComplete],
    [ActualServiceUnits],
    [BilledServiceUnits],
    [BlockedProfile],
    [CaseOriginCode],
    [CaseTypeCode],
    [CheckEmail],
    [ContractDetailId],
    [ContractId],
    [ContractServiceLevelCode],
    [CustomerId],
    [CustomerSatisfactionCode],
    [Description],
    [EntitlementId],
    [SLAId],
    [FirstResponseSLAStatus],
    [FollowupBy],
    [FollowUpTaskCreated],
    [IncidentStageCode],
    [IsDecrementing],
    [KbArticleId],
    [MessageTypeCode],
    [PriorityCode],
    [ProductId],
    [ProductSerialNumber],
    [ExistingCase],
    [ResolveBySLAStatus],
    [ResponsibleContactId],
    [SentimentValue],
    [InfluenceScore],
    [ServiceStage],
    [SeverityCode],
    [SLAInvokedId],
    [SocialProfileId],
    [StateCode],
    [StatusCode],
    [SubjectId],
    [TicketNumber],
    [MasterId],
    [ParentCaseId],
    [Merged],
    [RouteCase],
    [ResolveBy],
    [ResponseBy],
    [CustomerContacted],
    [FirstResponseSent],
    [IsEscalated],
    [EscalatedOn],
    [PrimaryContactId],
    [OnHoldTime],
    [LastOnHoldTime],
    [ResolveByKPIId],
    [FirstResponseByKPIId],
    [DecrementEntitlementTerm],
    [EntityImageId],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName],
    [ExchangeRate],
    [TransactionCurrencyId],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [manualsla_cases].[Name],
    [lk_incident_entityimage].[ImageTimestamp],
    [lk_incident_entityimage].[ImageURL],
    [lk_incident_entityimage].[ImageData],
    [lk_incidentbase_modifiedby].[FullName],
    [lk_incidentbase_modifiedby].[YomiFullName],
    [incident_master_incident].[Title],
    [TransactionCurrency_Incident].[CurrencyName],
    [entitlement_cases].[Name],
    [slakpiinstance_incident_firstresponsebykpi].[Name],
    [lk_incident_ChildIncidentCount].[NumberOfChildIncidents],
    [contact_as_primary_contact].[FullName],
    [contact_as_primary_contact].[YomiFullName],
    [subject_incidents].[Title],
    [kbarticle_incidents].[Title],
    [contract_cases].[Title],
    [contact_as_responsible_contact].[FullName],
    [contact_as_responsible_contact].[YomiFullName],
    [lk_externalparty_incident_modifiedby].[YomiFullName],
    [lk_externalparty_incident_modifiedby].[FullName],
    [lk_incidentbase_modifiedonbehalfby].[FullName],
    [lk_incidentbase_modifiedonbehalfby].[YomiFullName],
    [product_incidents].[Name],
    [lk_incidentbase_createdonbehalfby].[FullName],
    [lk_incidentbase_createdonbehalfby].[YomiFullName],
    [lk_incidentbase_createdby].[FullName],
    [lk_incidentbase_createdby].[YomiFullName],
    [contract_detail_cases].[Title],
    [sla_cases].[Name],
    [slakpiinstance_incident_resolvebykpi].[Name],
    [socialprofile_cases].[ProfileName],
    [incident_parent_incident].[Title],
    [lk_externalparty_incident_createdby].[YomiFullName],
    [lk_externalparty_incident_createdby].[FullName],

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
    [IncidentBase].[CreatedOn],
    [IncidentBase].[CreatedBy],
    [IncidentBase].[ModifiedOn],
    [IncidentBase].[ModifiedBy],
    [IncidentBase].[CreatedOnBehalfBy],
    [IncidentBase].[ModifiedOnBehalfBy],
    [IncidentBase].[OwningBusinessUnit],
    [IncidentBase].[VersionNumber],
    [IncidentBase].[EmailAddress],
    [IncidentBase].[ImportSequenceNumber],
    [IncidentBase].[OverriddenCreatedOn],
    [IncidentBase].[TimeZoneRuleVersionNumber],
    [IncidentBase].[UTCConversionTimeZoneCode],
    [IncidentBase].[Title],
    [IncidentBase].[ProcessId],
    [IncidentBase].[StageId],
    [IncidentBase].[TraversedPath],
    [IncidentBase].[ActivitiesComplete],
    [IncidentBase].[ActualServiceUnits],
    [IncidentBase].[BilledServiceUnits],
    [IncidentBase].[BlockedProfile],
    [IncidentBase].[CaseOriginCode],
    [IncidentBase].[CaseTypeCode],
    [IncidentBase].[CheckEmail],
    [IncidentBase].[ContractDetailId],
    [IncidentBase].[ContractId],
    [IncidentBase].[ContractServiceLevelCode],
    [IncidentBase].[CustomerId],
    [IncidentBase].[CustomerSatisfactionCode],
    [IncidentBase].[Description],
    [IncidentBase].[EntitlementId],
    [IncidentBase].[SLAId],
    [IncidentBase].[FirstResponseSLAStatus],
    [IncidentBase].[FollowupBy],
    [IncidentBase].[FollowUpTaskCreated],
    [IncidentBase].[IncidentStageCode],
    [IncidentBase].[IsDecrementing],
    [IncidentBase].[KbArticleId],
    [IncidentBase].[MessageTypeCode],
    [IncidentBase].[PriorityCode],
    [IncidentBase].[ProductId],
    [IncidentBase].[ProductSerialNumber],
    [IncidentBase].[ExistingCase],
    [IncidentBase].[ResolveBySLAStatus],
    [IncidentBase].[ResponsibleContactId],
    [IncidentBase].[SentimentValue],
    [IncidentBase].[InfluenceScore],
    [IncidentBase].[ServiceStage],
    [IncidentBase].[SeverityCode],
    [IncidentBase].[SLAInvokedId],
    [IncidentBase].[SocialProfileId],
    [IncidentBase].[StateCode],
    [IncidentBase].[StatusCode],
    [IncidentBase].[SubjectId],
    [IncidentBase].[TicketNumber],
    [IncidentBase].[MasterId],
    [IncidentBase].[ParentCaseId],
    [IncidentBase].[Merged],
    [IncidentBase].[RouteCase],
    [IncidentBase].[ResolveBy],
    [IncidentBase].[ResponseBy],
    [IncidentBase].[CustomerContacted],
    [IncidentBase].[FirstResponseSent],
    [IncidentBase].[IsEscalated],
    [IncidentBase].[EscalatedOn],
    [IncidentBase].[PrimaryContactId],
    [IncidentBase].[OnHoldTime],
    [IncidentBase].[LastOnHoldTime],
    [IncidentBase].[ResolveByKPIId],
    [IncidentBase].[FirstResponseByKPIId],
    [IncidentBase].[DecrementEntitlementTerm],
    [IncidentBase].[EntityImageId],
    [IncidentBase].[CustomerIdName],
    [IncidentBase].[CustomerIdType],
    [IncidentBase].[CustomerIdYomiName],
    [IncidentBase].[ExchangeRate],
    [IncidentBase].[TransactionCurrencyId],
    [IncidentBase].[CreatedByExternalParty],
    [IncidentBase].[ModifiedByExternalParty]
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
    left join [SystemUserBase] [lk_incidentbase_createdby] on ([IncidentBase].[CreatedBy] = [lk_incidentbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_createdonbehalfby] on ([IncidentBase].[CreatedOnBehalfBy] = [lk_incidentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_modifiedby] on ([IncidentBase].[ModifiedBy] = [lk_incidentbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentbase_modifiedonbehalfby] on ([IncidentBase].[ModifiedOnBehalfBy] = [lk_incidentbase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_cases] on ([IncidentBase].[SLAId] = [manualsla_cases].[SLAId] and [manualsla_cases].OverwriteTime = 0 and [manualsla_cases].ComponentState = 0)
    left join [ProductBase] [product_incidents] on ([IncidentBase].[ProductId] = [product_incidents].[ProductId])
    left join [SLABase] [sla_cases] on ([IncidentBase].[SLAInvokedId] = [sla_cases].[SLAId] and [sla_cases].OverwriteTime = 0 and [sla_cases].ComponentState = 0)
    left join [SLAKPIInstanceBase] [slakpiinstance_incident_firstresponsebykpi] on ([IncidentBase].[FirstResponseByKPIId] = [slakpiinstance_incident_firstresponsebykpi].[SLAKPIInstanceId])
    left join [SLAKPIInstanceBase] [slakpiinstance_incident_resolvebykpi] on ([IncidentBase].[ResolveByKPIId] = [slakpiinstance_incident_resolvebykpi].[SLAKPIInstanceId])
    left join [SocialProfileBase] [socialprofile_cases] on ([IncidentBase].[SocialProfileId] = [socialprofile_cases].[SocialProfileId])
    left join [SubjectBase] [subject_incidents] on ([IncidentBase].[SubjectId] = [subject_incidents].[SubjectId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Incident] on ([IncidentBase].[TransactionCurrencyId] = [TransactionCurrency_Incident].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([IncidentBase].OwnerId = XXowner.OwnerId)
