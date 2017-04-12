CREATE TABLE [dbo].[IncidentBase]
(
[IncidentId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ContractDetailId] [uniqueidentifier] NULL,
[SubjectId] [uniqueidentifier] NULL,
[ContractId] [uniqueidentifier] NULL,
[ActualServiceUnits] [int] NULL,
[CaseOriginCode] [int] NULL,
[BilledServiceUnits] [int] NULL,
[CaseTypeCode] [int] NULL,
[ProductSerialNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ProductId] [uniqueidentifier] NULL,
[ContractServiceLevelCode] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsDecrementing] [bit] NULL,
[CreatedOn] [datetime] NULL,
[TicketNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[PriorityCode] [int] NULL,
[CustomerSatisfactionCode] [int] NULL,
[IncidentStageCode] [int] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[FollowupBy] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[StateCode] [int] NOT NULL,
[SeverityCode] [int] NULL,
[StatusCode] [int] NULL,
[ResponsibleContactId] [uniqueidentifier] NULL,
[KbArticleId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CustomerId] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_IncidentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_IncidentBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdType] [int] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ActivitiesComplete] [bit] NULL,
[StageId] [uniqueidentifier] NULL,
[ExistingCase] [uniqueidentifier] NULL,
[ServiceStage] [int] NULL CONSTRAINT [DF_IncidentBase_ServiceStage] DEFAULT ((0)),
[CheckEmail] [bit] NULL,
[FollowUpTaskCreated] [bit] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[FirstResponseSLAStatus] [int] NULL,
[OnHoldTime] [int] NULL,
[SLAInvokedId] [uniqueidentifier] NULL,
[CustomerContacted] [bit] NULL CONSTRAINT [DF_IncidentBase_CustomerContacted] DEFAULT ((0)),
[LastOnHoldTime] [datetime] NULL,
[SocialProfileId] [uniqueidentifier] NULL,
[RouteCase] [bit] NULL CONSTRAINT [DF_IncidentBase_RouteCase] DEFAULT ((1)),
[IsEscalated] [bit] NULL CONSTRAINT [DF_IncidentBase_IsEscalated] DEFAULT ((0)),
[MasterId] [uniqueidentifier] NULL,
[BlockedProfile] [bit] NULL,
[PrimaryContactId] [uniqueidentifier] NULL,
[ResolveByKPIId] [uniqueidentifier] NULL,
[ResolveBySLAStatus] [int] NULL,
[SentimentValue] [float] NULL,
[Merged] [bit] NULL CONSTRAINT [DF_IncidentBase_Merged] DEFAULT ((0)),
[ResponseBy] [datetime] NULL,
[EscalatedOn] [datetime] NULL,
[ParentCaseId] [uniqueidentifier] NULL,
[FirstResponseByKPIId] [uniqueidentifier] NULL,
[MessageTypeCode] [int] NULL,
[ResolveBy] [datetime] NULL,
[InfluenceScore] [float] NULL,
[EntitlementId] [uniqueidentifier] NULL,
[FirstResponseSent] [bit] NULL CONSTRAINT [DF_IncidentBase_FirstResponseSent] DEFAULT ((0)),
[SLAId] [uniqueidentifier] NULL,
[CreatedByExternalParty] [uniqueidentifier] NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL,
[DecrementEntitlementTerm] [bit] NULL CONSTRAINT [DF_IncidentBase_DecrementEntitlementTerm] DEFAULT ((1))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [cndx_PrimaryKey_Incident] PRIMARY KEY CLUSTERED  ([IncidentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_cases] ON [dbo].[IncidentBase] ([ContractDetailId]) WHERE ([ContractDetailId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_cases] ON [dbo].[IncidentBase] ([ContractId]) WHERE ([ContractId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cases_origin_per_day] ON [dbo].[IncidentBase] ([CreatedOn], [CaseOriginCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_incident_customer_accounts] ON [dbo].[IncidentBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_entitlement_cases] ON [dbo].[IncidentBase] ([EntitlementId]) WHERE ([EntitlementId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_kbarticle_incidents] ON [dbo].[IncidentBase] ([KbArticleId]) WHERE ([KbArticleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_master_case] ON [dbo].[IncidentBase] ([MasterId]) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[IncidentBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [AK1_IncidentBase] UNIQUE NONCLUSTERED  ([OwningBusinessUnit], [TicketNumber]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_parent_case] ON [dbo].[IncidentBase] ([ParentCaseId]) WHERE ([ParentCaseId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_incidents] ON [dbo].[IncidentBase] ([ProductId]) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_as_responsible_contact] ON [dbo].[IncidentBase] ([ResponsibleContactId]) WHERE ([ResponsibleContactId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_sla_cases] ON [dbo].[IncidentBase] ([SLAId]) WHERE ([SLAId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_active_cases] ON [dbo].[IncidentBase] ([StateCode]) INCLUDE ([CaseOriginCode], [IncidentId], [ModifiedOn], [Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_report] ON [dbo].[IncidentBase] ([StateCode]) INCLUDE ([ModifiedOn], [OwnerId], [OwningBusinessUnit]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[IncidentBase] ([StateCode], [StatusCode]) INCLUDE ([CaseOriginCode], [CaseTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_incidents] ON [dbo].[IncidentBase] ([SubjectId]) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_TicketNumber] ON [dbo].[IncidentBase] ([TicketNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Title] ON [dbo].[IncidentBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[IncidentBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [business_unit_incidents] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [contact_as_primary_contact] FOREIGN KEY ([PrimaryContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [contact_as_responsible_contact] FOREIGN KEY ([ResponsibleContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [contract_cases] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [contract_detail_cases] FOREIGN KEY ([ContractDetailId]) REFERENCES [dbo].[ContractDetailBase] ([ContractDetailId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [entitlement_cases] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [kbarticle_incidents] FOREIGN KEY ([KbArticleId]) REFERENCES [dbo].[KbArticleBase] ([KbArticleId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [manualsla_cases] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [owner_incidents] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [product_incidents] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [slakpiinstance_incident_firstresponsebykpi] FOREIGN KEY ([FirstResponseByKPIId]) REFERENCES [dbo].[SLAKPIInstanceBase] ([SLAKPIInstanceId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [slakpiinstance_incident_resolvebykpi] FOREIGN KEY ([ResolveByKPIId]) REFERENCES [dbo].[SLAKPIInstanceBase] ([SLAKPIInstanceId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [socialprofile_cases] FOREIGN KEY ([SocialProfileId]) REFERENCES [dbo].[SocialProfileBase] ([SocialProfileId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [subject_incidents] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[IncidentBase] ADD CONSTRAINT [TransactionCurrency_Incident] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
