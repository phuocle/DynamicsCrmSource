CREATE TABLE [dbo].[IncidentBase] (
    [IncidentId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_IncidentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_IncidentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [EmailAddress]              NVARCHAR (256)   NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Title]                     NVARCHAR (200)   NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [ActivitiesComplete]        BIT              NULL,
    [ActualServiceUnits]        INT              NULL,
    [BilledServiceUnits]        INT              NULL,
    [BlockedProfile]            BIT              NULL,
    [CaseOriginCode]            INT              NULL,
    [CaseTypeCode]              INT              NULL,
    [CheckEmail]                BIT              NULL,
    [ContractDetailId]          UNIQUEIDENTIFIER NULL,
    [ContractId]                UNIQUEIDENTIFIER NULL,
    [ContractServiceLevelCode]  INT              NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [CustomerSatisfactionCode]  INT              NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [EntitlementId]             UNIQUEIDENTIFIER NULL,
    [SLAId]                     UNIQUEIDENTIFIER NULL,
    [FirstResponseSLAStatus]    INT              NULL,
    [FollowupBy]                DATETIME         NULL,
    [FollowUpTaskCreated]       BIT              NULL,
    [IncidentStageCode]         INT              NULL,
    [IsDecrementing]            BIT              NULL,
    [KbArticleId]               UNIQUEIDENTIFIER NULL,
    [MessageTypeCode]           INT              NULL,
    [PriorityCode]              INT              NULL,
    [ProductId]                 UNIQUEIDENTIFIER NULL,
    [ProductSerialNumber]       NVARCHAR (100)   NULL,
    [ExistingCase]              UNIQUEIDENTIFIER NULL,
    [ResolveBySLAStatus]        INT              NULL,
    [ResponsibleContactId]      UNIQUEIDENTIFIER NULL,
    [SentimentValue]            FLOAT (53)       NULL,
    [InfluenceScore]            FLOAT (53)       NULL,
    [ServiceStage]              INT              CONSTRAINT [DF_IncidentBase_ServiceStage] DEFAULT ((0)) NULL,
    [SeverityCode]              INT              NULL,
    [SLAInvokedId]              UNIQUEIDENTIFIER NULL,
    [SocialProfileId]           UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [SubjectId]                 UNIQUEIDENTIFIER NULL,
    [TicketNumber]              NVARCHAR (100)   NULL,
    [MasterId]                  UNIQUEIDENTIFIER NULL,
    [ParentCaseId]              UNIQUEIDENTIFIER NULL,
    [Merged]                    BIT              CONSTRAINT [DF_IncidentBase_Merged] DEFAULT ((0)) NULL,
    [RouteCase]                 BIT              CONSTRAINT [DF_IncidentBase_RouteCase] DEFAULT ((1)) NULL,
    [ResolveBy]                 DATETIME         NULL,
    [ResponseBy]                DATETIME         NULL,
    [CustomerContacted]         BIT              CONSTRAINT [DF_IncidentBase_CustomerContacted] DEFAULT ((0)) NULL,
    [FirstResponseSent]         BIT              CONSTRAINT [DF_IncidentBase_FirstResponseSent] DEFAULT ((0)) NULL,
    [IsEscalated]               BIT              CONSTRAINT [DF_IncidentBase_IsEscalated] DEFAULT ((0)) NULL,
    [EscalatedOn]               DATETIME         NULL,
    [PrimaryContactId]          UNIQUEIDENTIFIER NULL,
    [OnHoldTime]                INT              NULL,
    [LastOnHoldTime]            DATETIME         NULL,
    [ResolveByKPIId]            UNIQUEIDENTIFIER NULL,
    [FirstResponseByKPIId]      UNIQUEIDENTIFIER NULL,
    [DecrementEntitlementTerm]  BIT              CONSTRAINT [DF_IncidentBase_DecrementEntitlementTerm] DEFAULT ((1)) NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdType]            INT              NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedByExternalParty]    UNIQUEIDENTIFIER NULL,
    [ModifiedByExternalParty]   UNIQUEIDENTIFIER NULL,
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
    CONSTRAINT [AK1_IncidentBase] UNIQUE NONCLUSTERED ([OwningBusinessUnit] ASC, [TicketNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[IncidentBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[IncidentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[IncidentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[IncidentBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[IncidentBase]([StateCode] ASC, [StatusCode] ASC)
    INCLUDE([CaseTypeCode], [CaseOriginCode]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_IncidentBase_modifiedon]
    ON [dbo].[IncidentBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_cases]
    ON [dbo].[IncidentBase]([ContractId] ASC) WHERE ([ContractId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_parent_case]
    ON [dbo].[IncidentBase]([ParentCaseId] ASC) WHERE ([ParentCaseId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_incident_customer_accounts]
    ON [dbo].[IncidentBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_entitlement_cases]
    ON [dbo].[IncidentBase]([EntitlementId] ASC) WHERE ([EntitlementId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_master_case]
    ON [dbo].[IncidentBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_active_cases]
    ON [dbo].[IncidentBase]([StateCode] ASC)
    INCLUDE([IncidentId], [CaseOriginCode], [Title], [ModifiedOn]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_incidents]
    ON [dbo].[IncidentBase]([SubjectId] ASC) WHERE ([SubjectId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_CasesByAccount]
    ON [dbo].[IncidentBase]([CustomerId] ASC, [IncidentId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_sla_cases]
    ON [dbo].[IncidentBase]([SLAId] ASC) WHERE ([SLAId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_kbarticle_incidents]
    ON [dbo].[IncidentBase]([KbArticleId] ASC) WHERE ([KbArticleId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_incidents]
    ON [dbo].[IncidentBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_PrimaryContactId]
    ON [dbo].[IncidentBase]([PrimaryContactId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cases_origin_per_day]
    ON [dbo].[IncidentBase]([CreatedOn] ASC, [CaseOriginCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_TicketNumber]
    ON [dbo].[IncidentBase]([TicketNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_filtered_cases]
    ON [dbo].[IncidentBase]([StateCode] ASC, [OwnerId] ASC, [ModifiedOn] ASC)
    INCLUDE([CreatedOn], [CaseOriginCode], [SLAId], [ProductId], [SLAInvokedId], [SubjectId], [IncidentId], [TicketNumber], [PriorityCode], [Title], [StatusCode], [ProcessId], [VersionNumber], [CustomerIdYomiName], [CustomerId], [CustomerIdType], [CustomerIdName]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_report]
    ON [dbo].[IncidentBase]([StateCode] ASC)
    INCLUDE([OwningBusinessUnit], [ModifiedOn], [OwnerId]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_as_responsible_contact]
    ON [dbo].[IncidentBase]([ResponsibleContactId] ASC) WHERE ([ResponsibleContactId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_cases]
    ON [dbo].[IncidentBase]([ContractDetailId] ASC) WHERE ([ContractDetailId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_AllCasesforCustomer]
    ON [dbo].[IncidentBase]([ModifiedOn] DESC, [IncidentId] ASC)
    INCLUDE([StateCode]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_PerformanceIncident]
    ON [dbo].[IncidentBase]([CreatedOn] DESC, [IncidentId] ASC)
    INCLUDE([CustomerIdName]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_Title]
    ON [dbo].[IncidentBase]([Title] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D95D47EF4A1D479E9065B9CEA0089048]
    ON [dbo].[IncidentBase]([Title] ASC, [IncidentId] ASC)
    INCLUDE([PriorityCode], [TicketNumber], [CreatedOn], [CaseOriginCode], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D95D47EF4A1D479E9065B9CEA0089048]
    ON [dbo].[IncidentBase]([IncidentId] ASC)
    INCLUDE([Title], [PriorityCode], [TicketNumber], [CreatedOn], [CaseOriginCode], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D95D47EF4A1D479E9065B9CEA0089048]
    ON [dbo].[IncidentBase]([IncidentId] ASC)
    INCLUDE([Title], [TicketNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

