CREATE TABLE [dbo].[LeadBase] (
    [LeadId]                     UNIQUEIDENTIFIER NOT NULL,
    [LeadSourceCode]             INT              NULL,
    [LeadQualityCode]            INT              NULL,
    [PriorityCode]               INT              NULL,
    [IndustryCode]               INT              NULL,
    [PreferredContactMethodCode] INT              NULL,
    [SalesStageCode]             INT              NULL,
    [OwningBusinessUnit]         UNIQUEIDENTIFIER NULL,
    [Subject]                    NVARCHAR (300)   NULL,
    [ParticipatesInWorkflow]     BIT              CONSTRAINT [Set_To_Zero116] DEFAULT ((0)) NULL,
    [Description]                NVARCHAR (MAX)   NULL,
    [EstimatedValue]             FLOAT (53)       NULL,
    [EstimatedCloseDate]         DATETIME         NULL,
    [CompanyName]                NVARCHAR (100)   NULL,
    [FirstName]                  NVARCHAR (50)    NULL,
    [MiddleName]                 NVARCHAR (50)    NULL,
    [LastName]                   NVARCHAR (50)    NULL,
    [Revenue]                    MONEY            NULL,
    [NumberOfEmployees]          INT              NULL,
    [DoNotPhone]                 BIT              CONSTRAINT [DF_LeadBase_DoNotPhone] DEFAULT ((0)) NULL,
    [SIC]                        NVARCHAR (20)    NULL,
    [DoNotFax]                   BIT              CONSTRAINT [DF_LeadBase_DoNotFax] DEFAULT ((0)) NULL,
    [EMailAddress1]              NVARCHAR (100)   NULL,
    [JobTitle]                   NVARCHAR (100)   NULL,
    [Salutation]                 NVARCHAR (100)   NULL,
    [DoNotEMail]                 BIT              CONSTRAINT [DF_LeadBase_DoNotEMail] DEFAULT ((0)) NULL,
    [EMailAddress2]              NVARCHAR (100)   NULL,
    [DoNotPostalMail]            BIT              CONSTRAINT [DF_LeadBase_DoNotPostalMail] DEFAULT ((0)) NULL,
    [EMailAddress3]              NVARCHAR (100)   NULL,
    [FullName]                   NVARCHAR (160)   NULL,
    [YomiFirstName]              NVARCHAR (150)   NULL,
    [WebSiteUrl]                 NVARCHAR (200)   NULL,
    [Telephone1]                 NVARCHAR (50)    NULL,
    [Telephone2]                 NVARCHAR (50)    NULL,
    [Telephone3]                 NVARCHAR (50)    NULL,
    [CreatedOn]                  DATETIME         NULL,
    [IsPrivate]                  BIT              CONSTRAINT [Set_To_Zero117] DEFAULT ((0)) NULL,
    [Fax]                        NVARCHAR (50)    NULL,
    [YomiMiddleName]             NVARCHAR (150)   NULL,
    [YomiLastName]               NVARCHAR (150)   NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [YomiFullName]               NVARCHAR (450)   NULL,
    [MobilePhone]                NVARCHAR (20)    NULL,
    [StateCode]                  INT              NOT NULL,
    [Pager]                      NVARCHAR (20)    NULL,
    [StatusCode]                 INT              NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [MasterId]                   UNIQUEIDENTIFIER NULL,
    [CampaignId]                 UNIQUEIDENTIFIER NULL,
    [DoNotSendMM]                BIT              CONSTRAINT [DF_LeadBase_DoNotSendMM] DEFAULT ((0)) NULL,
    [Merged]                     BIT              CONSTRAINT [DF_LeadBase_Merged] DEFAULT ((0)) NULL,
    [DoNotBulkEMail]             BIT              CONSTRAINT [DF_LeadBase_DoNotBulkEMail] DEFAULT ((0)) NULL,
    [LastUsedInCampaign]         DATETIME         NULL,
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [EstimatedAmount]            MONEY            NULL,
    [EstimatedAmount_Base]       MONEY            NULL,
    [Revenue_Base]               MONEY            NULL,
    [YomiCompanyName]            NVARCHAR (100)   NULL,
    [IsAutoCreate]               BIT              CONSTRAINT [DF_LeadBase_IsAutoCreate] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OwnerId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_LeadBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CustomerId]                 UNIQUEIDENTIFIER NULL,
    [CustomerIdType]             INT              NULL,
    [CustomerIdName]             NVARCHAR (4000)  NULL,
    [OwnerIdType]                INT              CONSTRAINT [DF_LeadBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdYomiName]         NVARCHAR (4000)  NULL,
    [StageId]                    UNIQUEIDENTIFIER NULL,
    [DecisionMaker]              BIT              NULL,
    [Need]                       INT              NULL,
    [BudgetAmount]               MONEY            NULL,
    [QualificationComments]      NVARCHAR (MAX)   NULL,
    [QualifyingOpportunityId]    UNIQUEIDENTIFIER NULL,
    [ScheduleFollowUp_Qualify]   DATETIME         NULL,
    [ConfirmInterest]            BIT              NULL,
    [ParentAccountId]            UNIQUEIDENTIFIER NULL,
    [OriginatingCaseId]          UNIQUEIDENTIFIER NULL,
    [ScheduleFollowUp_Prospect]  DATETIME         NULL,
    [EntityImageId]              UNIQUEIDENTIFIER NULL,
    [ParentContactId]            UNIQUEIDENTIFIER NULL,
    [InitialCommunication]       INT              NULL,
    [SalesStage]                 INT              NULL,
    [BudgetStatus]               INT              NULL,
    [ProcessId]                  UNIQUEIDENTIFIER NULL,
    [PurchaseTimeFrame]          INT              NULL,
    [PurchaseProcess]            INT              NULL,
    [RelatedObjectId]            UNIQUEIDENTIFIER NULL,
    [EvaluateFit]                BIT              NULL,
    [BudgetAmount_Base]          MONEY            NULL,
    CONSTRAINT [cndx_PrimaryKey_Lead] PRIMARY KEY CLUSTERED ([LeadId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_leads] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [campaign_leads] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]) NOT FOR REPLICATION,
    CONSTRAINT [lead_master_lead] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[LeadBase] ([LeadId]) NOT FOR REPLICATION,
    CONSTRAINT [lead_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]) NOT FOR REPLICATION,
    CONSTRAINT [lead_parent_contact] FOREIGN KEY ([ParentContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [lead_qualifying_opportunity] FOREIGN KEY ([QualifyingOpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]) NOT FOR REPLICATION,
    CONSTRAINT [OriginatingCase_Lead] FOREIGN KEY ([OriginatingCaseId]) REFERENCES [dbo].[IncidentBase] ([IncidentId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_leads] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_lead] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[LeadBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_contact]
    ON [dbo].[LeadBase]([ParentContactId] ASC) WHERE ([ParentContactId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_customer_accounts]
    ON [dbo].[LeadBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_lead_views]
    ON [dbo].[LeadBase]([CreatedOn] DESC, [LeadId] ASC, [StateCode] ASC)
    INCLUDE([Subject], [StatusCode], [FullName]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_subject]
    ON [dbo].[LeadBase]([Subject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[LeadBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_leads]
    ON [dbo].[LeadBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_companyname]
    ON [dbo].[LeadBase]([CompanyName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_master_lead]
    ON [dbo].[LeadBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_oob_views]
    ON [dbo].[LeadBase]([FullName] ASC, [LeadId] ASC)
    INCLUDE([Telephone1], [Subject], [CompanyName], [EMailAddress1], [CreatedOn], [Fax], [StatusCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_campaign_leads]
    ON [dbo].[LeadBase]([LastUsedInCampaign] ASC, [CampaignId] ASC)
    INCLUDE([LeadSourceCode], [LeadQualityCode], [OwnerId], [CreatedOn]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_leads]
    ON [dbo].[LeadBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_oob_charts]
    ON [dbo].[LeadBase]([StateCode] ASC, [StatusCode] ASC)
    INCLUDE([LeadQualityCode], [LeadSourceCode]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[LeadBase]([OwnerId] ASC, [StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_account]
    ON [dbo].[LeadBase]([ParentAccountId] ASC) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_FullName]
    ON [dbo].[LeadBase]([FullName] ASC) WHERE ([FullName] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_firstname]
    ON [dbo].[LeadBase]([FirstName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_lastname]
    ON [dbo].[LeadBase]([LastName] ASC) WITH (FILLFACTOR = 80);

