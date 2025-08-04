CREATE TABLE [dbo].[IncidentBase] (
    [IncidentId]                UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ContractDetailId]          UNIQUEIDENTIFIER NULL,
    [SubjectId]                 UNIQUEIDENTIFIER NULL,
    [ContractId]                UNIQUEIDENTIFIER NULL,
    [ActualServiceUnits]        INT              NULL,
    [CaseOriginCode]            INT              NULL,
    [BilledServiceUnits]        INT              NULL,
    [CaseTypeCode]              INT              NULL,
    [ProductSerialNumber]       NVARCHAR (100)   NULL,
    [Title]                     NVARCHAR (200)   NULL,
    [ProductId]                 UNIQUEIDENTIFIER NULL,
    [ContractServiceLevelCode]  INT              NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [IsDecrementing]            BIT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [TicketNumber]              NVARCHAR (100)   NULL,
    [PriorityCode]              INT              NULL,
    [CustomerSatisfactionCode]  INT              NULL,
    [IncidentStageCode]         INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [FollowupBy]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [StateCode]                 INT              NOT NULL,
    [SeverityCode]              INT              NULL,
    [StatusCode]                INT              NULL,
    [ResponsibleContactId]      UNIQUEIDENTIFIER NULL,
    [KbArticleId]               UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_IncidentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_IncidentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdType]            INT              NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    [ActivitiesComplete]        BIT              NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [ExistingCase]              UNIQUEIDENTIFIER NULL,
    [ServiceStage]              INT              CONSTRAINT [DF_IncidentBase_ServiceStage] DEFAULT ((0)) NULL,
    [CheckEmail]                BIT              NULL,
    [FollowUpTaskCreated]       BIT              NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [FirstResponseSLAStatus]    INT              NULL,
    [OnHoldTime]                INT              NULL,
    [SLAInvokedId]              UNIQUEIDENTIFIER NULL,
    [CustomerContacted]         BIT              CONSTRAINT [DF_IncidentBase_CustomerContacted] DEFAULT ((0)) NULL,
    [LastOnHoldTime]            DATETIME         NULL,
    [SocialProfileId]           UNIQUEIDENTIFIER NULL,
    [RouteCase]                 BIT              CONSTRAINT [DF_IncidentBase_RouteCase] DEFAULT ((1)) NULL,
    [IsEscalated]               BIT              CONSTRAINT [DF_IncidentBase_IsEscalated] DEFAULT ((0)) NULL,
    [MasterId]                  UNIQUEIDENTIFIER NULL,
    [BlockedProfile]            BIT              NULL,
    [PrimaryContactId]          UNIQUEIDENTIFIER NULL,
    [ResolveByKPIId]            UNIQUEIDENTIFIER NULL,
    [ResolveBySLAStatus]        INT              NULL,
    [SentimentValue]            FLOAT (53)       NULL,
    [Merged]                    BIT              CONSTRAINT [DF_IncidentBase_Merged] DEFAULT ((0)) NULL,
    [ResponseBy]                DATETIME         NULL,
    [EscalatedOn]               DATETIME         NULL,
    [ParentCaseId]              UNIQUEIDENTIFIER NULL,
    [FirstResponseByKPIId]      UNIQUEIDENTIFIER NULL,
    [MessageTypeCode]           INT              NULL,
    [ResolveBy]                 DATETIME         NULL,
    [InfluenceScore]            FLOAT (53)       NULL,
    [EntitlementId]             UNIQUEIDENTIFIER NULL,
    [FirstResponseSent]         BIT              CONSTRAINT [DF_IncidentBase_FirstResponseSent] DEFAULT ((0)) NULL,
    [SLAId]                     UNIQUEIDENTIFIER NULL,
    [CreatedByExternalParty]    UNIQUEIDENTIFIER NULL,
    [ModifiedByExternalParty]   UNIQUEIDENTIFIER NULL,
    [DecrementEntitlementTerm]  BIT              CONSTRAINT [DF_IncidentBase_DecrementEntitlementTerm] DEFAULT ((1)) NULL,
    CONSTRAINT [cndx_PrimaryKey_Incident] PRIMARY KEY CLUSTERED ([IncidentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_incidents] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [contact_as_primary_contact] FOREIGN KEY ([PrimaryContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [contact_as_responsible_contact] FOREIGN KEY ([ResponsibleContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [contract_cases] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId]),
    CONSTRAINT [contract_detail_cases] FOREIGN KEY ([ContractDetailId]) REFERENCES [dbo].[ContractDetailBase] ([ContractDetailId]),
    CONSTRAINT [entitlement_cases] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId]),
    CONSTRAINT [kbarticle_incidents] FOREIGN KEY ([KbArticleId]) REFERENCES [dbo].[KbArticleBase] ([KbArticleId]),
    CONSTRAINT [manualsla_cases] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [owner_incidents] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [product_incidents] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [slakpiinstance_incident_firstresponsebykpi] FOREIGN KEY ([FirstResponseByKPIId]) REFERENCES [dbo].[SLAKPIInstanceBase] ([SLAKPIInstanceId]),
    CONSTRAINT [slakpiinstance_incident_resolvebykpi] FOREIGN KEY ([ResolveByKPIId]) REFERENCES [dbo].[SLAKPIInstanceBase] ([SLAKPIInstanceId]),
    CONSTRAINT [socialprofile_cases] FOREIGN KEY ([SocialProfileId]) REFERENCES [dbo].[SocialProfileBase] ([SocialProfileId]),
    CONSTRAINT [subject_incidents] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]),
    CONSTRAINT [TransactionCurrency_Incident] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [AK1_IncidentBase] UNIQUE NONCLUSTERED ([OwningBusinessUnit] ASC, [TicketNumber] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[IncidentBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[IncidentBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_TicketNumber]
    ON [dbo].[IncidentBase]([TicketNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_incident_customer_accounts]
    ON [dbo].[IncidentBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_cases]
    ON [dbo].[IncidentBase]([ContractDetailId] ASC) WHERE ([ContractDetailId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Title]
    ON [dbo].[IncidentBase]([Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_incidents]
    ON [dbo].[IncidentBase]([SubjectId] ASC) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_incidents]
    ON [dbo].[IncidentBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_cases]
    ON [dbo].[IncidentBase]([ContractId] ASC) WHERE ([ContractId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[IncidentBase]([StateCode] ASC, [StatusCode] ASC)
    INCLUDE([CaseTypeCode], [CaseOriginCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_entitlement_cases]
    ON [dbo].[IncidentBase]([EntitlementId] ASC) WHERE ([EntitlementId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[IncidentBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_report]
    ON [dbo].[IncidentBase]([StateCode] ASC)
    INCLUDE([OwningBusinessUnit], [ModifiedOn], [OwnerId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cases_origin_per_day]
    ON [dbo].[IncidentBase]([CreatedOn] ASC, [CaseOriginCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_kbarticle_incidents]
    ON [dbo].[IncidentBase]([KbArticleId] ASC) WHERE ([KbArticleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_as_responsible_contact]
    ON [dbo].[IncidentBase]([ResponsibleContactId] ASC) WHERE ([ResponsibleContactId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_sla_cases]
    ON [dbo].[IncidentBase]([SLAId] ASC) WHERE ([SLAId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_master_case]
    ON [dbo].[IncidentBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_parent_case]
    ON [dbo].[IncidentBase]([ParentCaseId] ASC) WHERE ([ParentCaseId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_active_cases]
    ON [dbo].[IncidentBase]([StateCode] ASC)
    INCLUDE([IncidentId], [CaseOriginCode], [Title], [ModifiedOn]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_AllCasesforCustomer]
    ON [dbo].[IncidentBase]([ModifiedOn] DESC, [IncidentId] ASC)
    INCLUDE([StateCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_CasesByAccount]
    ON [dbo].[IncidentBase]([CustomerId] ASC, [IncidentId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IncidentBase_modifiedon]
    ON [dbo].[IncidentBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_filtered_cases]
    ON [dbo].[IncidentBase]([StateCode] ASC, [OwnerId] ASC, [ModifiedOn] ASC)
    INCLUDE([CreatedOn], [PriorityCode], [CaseOriginCode], [ProductId], [SubjectId], [SLAInvokedId], [SLAId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PrimaryContactId]
    ON [dbo].[IncidentBase]([PrimaryContactId] ASC) WITH (FILLFACTOR = 80);

