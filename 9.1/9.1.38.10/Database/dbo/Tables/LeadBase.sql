CREATE TABLE [dbo].[LeadBase] (
    [LeadId]                          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_LeadBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_LeadBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [FullName]                        NVARCHAR (160)   NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [TraversedPath]                   NVARCHAR (1250)  NULL,
    [ParentAccountId]                 UNIQUEIDENTIFIER NULL,
    [ParentContactId]                 UNIQUEIDENTIFIER NULL,
    [BudgetAmount]                    MONEY            NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [BudgetAmount_Base]               MONEY            NULL,
    [BudgetStatus]                    INT              NULL,
    [CompanyName]                     NVARCHAR (100)   NULL,
    [ConfirmInterest]                 BIT              NULL,
    [CustomerId]                      UNIQUEIDENTIFIER NULL,
    [DecisionMaker]                   BIT              NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [DoNotBulkEMail]                  BIT              CONSTRAINT [DF_LeadBase_DoNotBulkEMail] DEFAULT ((0)) NULL,
    [DoNotEMail]                      BIT              CONSTRAINT [DF_LeadBase_DoNotEMail] DEFAULT ((0)) NULL,
    [DoNotFax]                        BIT              CONSTRAINT [DF_LeadBase_DoNotFax] DEFAULT ((0)) NULL,
    [DoNotPhone]                      BIT              CONSTRAINT [DF_LeadBase_DoNotPhone] DEFAULT ((0)) NULL,
    [DoNotPostalMail]                 BIT              CONSTRAINT [DF_LeadBase_DoNotPostalMail] DEFAULT ((0)) NULL,
    [DoNotSendMM]                     BIT              CONSTRAINT [DF_LeadBase_DoNotSendMM] DEFAULT ((0)) NULL,
    [EMailAddress1]                   NVARCHAR (100)   NULL,
    [EMailAddress2]                   NVARCHAR (100)   NULL,
    [EMailAddress3]                   NVARCHAR (100)   NULL,
    [EstimatedAmount]                 MONEY            NULL,
    [EstimatedAmount_Base]            MONEY            NULL,
    [EstimatedCloseDate]              DATETIME         NULL,
    [EstimatedValue]                  FLOAT (53)       NULL,
    [EvaluateFit]                     BIT              NULL,
    [Fax]                             NVARCHAR (50)    NULL,
    [FirstName]                       NVARCHAR (50)    NULL,
    [IndustryCode]                    INT              NULL,
    [InitialCommunication]            INT              NULL,
    [IsAutoCreate]                    BIT              CONSTRAINT [DF_LeadBase_IsAutoCreate] DEFAULT ((0)) NULL,
    [IsPrivate]                       BIT              CONSTRAINT [DF_LeadBase_IsPrivate] DEFAULT ((0)) NULL,
    [JobTitle]                        NVARCHAR (100)   NULL,
    [LastName]                        NVARCHAR (50)    NULL,
    [LastUsedInCampaign]              DATETIME         NULL,
    [LeadQualityCode]                 INT              NULL,
    [LeadSourceCode]                  INT              NULL,
    [MasterId]                        UNIQUEIDENTIFIER NULL,
    [Merged]                          BIT              CONSTRAINT [DF_LeadBase_Merged] DEFAULT ((0)) NULL,
    [MiddleName]                      NVARCHAR (50)    NULL,
    [MobilePhone]                     NVARCHAR (20)    NULL,
    [Need]                            INT              NULL,
    [NumberOfEmployees]               INT              NULL,
    [Pager]                           NVARCHAR (20)    NULL,
    [ParticipatesInWorkflow]          BIT              CONSTRAINT [DF_LeadBase_ParticipatesInWorkflow] DEFAULT ((0)) NULL,
    [PreferredContactMethodCode]      INT              NULL,
    [PriorityCode]                    INT              NULL,
    [PurchaseProcess]                 INT              NULL,
    [QualificationComments]           NVARCHAR (MAX)   NULL,
    [Revenue]                         MONEY            NULL,
    [Revenue_Base]                    MONEY            NULL,
    [SalesStage]                      INT              NULL,
    [SalesStageCode]                  INT              NULL,
    [Salutation]                      NVARCHAR (100)   NULL,
    [ScheduleFollowUp_Prospect]       DATETIME         NULL,
    [ScheduleFollowUp_Qualify]        DATETIME         NULL,
    [SIC]                             NVARCHAR (20)    NULL,
    [StateCode]                       INT              NOT NULL,
    [StatusCode]                      INT              NULL,
    [Subject]                         NVARCHAR (300)   NULL,
    [Telephone1]                      NVARCHAR (50)    NULL,
    [Telephone2]                      NVARCHAR (50)    NULL,
    [Telephone3]                      NVARCHAR (50)    NULL,
    [PurchaseTimeFrame]               INT              NULL,
    [WebSiteUrl]                      NVARCHAR (200)   NULL,
    [SLAId]                           UNIQUEIDENTIFIER NULL,
    [SLAInvokedId]                    UNIQUEIDENTIFIER NULL,
    [OnHoldTime]                      INT              NULL,
    [LastOnHoldTime]                  DATETIME         NULL,
    [FollowEmail]                     BIT              CONSTRAINT [DF_LeadBase_FollowEmail] DEFAULT ((1)) NULL,
    [TimeSpentByMeOnEmailAndMeetings] NVARCHAR (1250)  NULL,
    [EntityImageId]                   UNIQUEIDENTIFIER NULL,
    [CustomerIdName]                  NVARCHAR (4000)  NULL,
    [CustomerIdType]                  INT              NULL,
    [CustomerIdYomiName]              NVARCHAR (4000)  NULL,
    [YomiCompanyName]                 NVARCHAR (100)   NULL,
    [YomiFirstName]                   NVARCHAR (150)   NULL,
    [YomiFullName]                    NVARCHAR (450)   NULL,
    [YomiLastName]                    NVARCHAR (150)   NULL,
    [YomiMiddleName]                  NVARCHAR (150)   NULL,
    [CampaignId]                      UNIQUEIDENTIFIER NULL,
    [RelatedObjectId]                 UNIQUEIDENTIFIER NULL,
    [OriginatingCaseId]               UNIQUEIDENTIFIER NULL,
    [QualifyingOpportunityId]         UNIQUEIDENTIFIER NULL,
    [msdyn_gdproptout]                BIT              NULL,
    [TeamsFollowed]                   INT              NULL,
    [BusinessCard]                    NVARCHAR (MAX)   NULL,
    [BusinessCardAttributes]          NVARCHAR (256)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Lead] PRIMARY KEY CLUSTERED ([LeadId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_leads] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [campaign_leads] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]),
    CONSTRAINT [lead_master_lead] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [lead_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [lead_parent_contact] FOREIGN KEY ([ParentContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [lead_qualifying_opportunity] FOREIGN KEY ([QualifyingOpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [manualsla_lead] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [OriginatingCase_Lead] FOREIGN KEY ([OriginatingCaseId]) REFERENCES [dbo].[IncidentBase] ([IncidentId]),
    CONSTRAINT [owner_leads] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_lead] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[LeadBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[LeadBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[LeadBase]([OwnerId] ASC, [StateCode] ASC)
    INCLUDE([LeadId], [CreatedOn], [VersionNumber], [FullName], [ProcessId], [CompanyName], [StatusCode], [Subject]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[LeadBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_leads]
    ON [dbo].[LeadBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_oob_charts]
    ON [dbo].[LeadBase]([StateCode] ASC, [StatusCode] ASC)
    INCLUDE([LeadQualityCode], [LeadSourceCode]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_originatingcaseid]
    ON [dbo].[LeadBase]([OriginatingCaseId] ASC) WHERE ([OriginatingCaseId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_contact]
    ON [dbo].[LeadBase]([ParentContactId] ASC) WHERE ([ParentContactId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_firstname]
    ON [dbo].[LeadBase]([FirstName] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_lastname]
    ON [dbo].[LeadBase]([LastName] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_companyname]
    ON [dbo].[LeadBase]([CompanyName] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_leads]
    ON [dbo].[LeadBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_oob_views]
    ON [dbo].[LeadBase]([FullName] ASC, [LeadId] ASC)
    INCLUDE([Telephone1], [Subject], [CompanyName], [EMailAddress1], [CreatedOn], [Fax], [StatusCode]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_account]
    ON [dbo].[LeadBase]([ParentAccountId] ASC) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_master_lead]
    ON [dbo].[LeadBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_FullName]
    ON [dbo].[LeadBase]([FullName] ASC) WHERE ([FullName] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_campaign_leads]
    ON [dbo].[LeadBase]([LastUsedInCampaign] ASC, [CampaignId] ASC)
    INCLUDE([LeadSourceCode], [LeadQualityCode], [OwnerId], [CreatedOn]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_subject]
    ON [dbo].[LeadBase]([Subject] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_customer_accounts]
    ON [dbo].[LeadBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_lead_views]
    ON [dbo].[LeadBase]([CreatedOn] DESC, [LeadId] ASC, [StateCode] ASC)
    INCLUDE([Subject], [StatusCode], [FullName]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_F1A7C4D9F43946DA8B69ECC133214695]
    ON [dbo].[LeadBase]([Subject] ASC, [LeadId] ASC)
    INCLUDE([FullName], [CompanyName], [StatusCode], [Telephone1], [EMailAddress1], [CreatedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_F1A7C4D9F43946DA8B69ECC133214695]
    ON [dbo].[LeadBase]([LeadId] ASC)
    INCLUDE([Subject], [FullName], [FirstName], [LastName], [CompanyName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_F1A7C4D9F43946DA8B69ECC133214695]
    ON [dbo].[LeadBase]([LeadId] ASC)
    INCLUDE([Subject], [FullName], [CompanyName], [StatusCode], [Telephone1], [EMailAddress1], [CreatedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_qualifying_opportunity]
    ON [dbo].[LeadBase]([QualifyingOpportunityId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

