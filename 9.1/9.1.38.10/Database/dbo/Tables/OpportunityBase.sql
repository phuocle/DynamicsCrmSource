CREATE TABLE [dbo].[OpportunityBase] (
    [OpportunityId]                    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_OpportunityBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [EmailAddress]                     NVARCHAR (256)   NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [Name]                             NVARCHAR (300)   NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [TraversedPath]                    NVARCHAR (1250)  NULL,
    [ActualCloseDate]                  DATETIME         NULL,
    [ActualValue]                      MONEY            NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [ActualValue_Base]                 MONEY            NULL,
    [BudgetAmount]                     MONEY            NULL,
    [BudgetAmount_Base]                MONEY            NULL,
    [BudgetStatus]                     INT              NULL,
    [CloseProbability]                 INT              NULL,
    [CompleteInternalReview]           BIT              NULL,
    [ConfirmInterest]                  BIT              NULL,
    [CurrentSituation]                 NVARCHAR (MAX)   NULL,
    [CustomerId]                       UNIQUEIDENTIFIER NULL,
    [CustomerNeed]                     NVARCHAR (MAX)   NULL,
    [CustomerPainPoints]               NVARCHAR (MAX)   NULL,
    [DecisionMaker]                    BIT              NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [DevelopProposal]                  BIT              NULL,
    [DiscountAmount]                   MONEY            NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [DiscountPercentage]               DECIMAL (23, 10) NULL,
    [EstimatedCloseDate]               DATETIME         NULL,
    [EstimatedValue]                   MONEY            NULL,
    [EstimatedValue_Base]              MONEY            NULL,
    [EvaluateFit]                      BIT              NULL,
    [ResolveFeedback]                  BIT              NULL,
    [FileDebrief]                      BIT              NULL,
    [CompleteFinalProposal]            BIT              NULL,
    [FinalDecisionDate]                DATETIME         NULL,
    [FreightAmount]                    MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [InitialCommunication]             INT              NULL,
    [IsPrivate]                        BIT              CONSTRAINT [DF_OpportunityBase_IsPrivate] DEFAULT ((0)) NULL,
    [IsRevenueSystemCalculated]        BIT              CONSTRAINT [DF_OpportunityBase_IsRevenueSystemCalculated] DEFAULT ((0)) NULL,
    [Need]                             INT              NULL,
    [OpportunityRatingCode]            INT              NULL,
    [ParentAccountId]                  UNIQUEIDENTIFIER NULL,
    [ParentContactId]                  UNIQUEIDENTIFIER NULL,
    [ParticipatesInWorkflow]           BIT              CONSTRAINT [DF_OpportunityBase_ParticipatesInWorkflow] DEFAULT ((0)) NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [PricingErrorCode]                 INT              NULL,
    [PriorityCode]                     INT              NULL,
    [PurchaseProcess]                  INT              NULL,
    [PurchaseTimeframe]                INT              NULL,
    [SalesStage]                       INT              NULL,
    [SalesStageCode]                   INT              NULL,
    [PresentProposal]                  BIT              NULL,
    [CaptureProposalFeedback]          BIT              NULL,
    [ProposedSolution]                 NVARCHAR (MAX)   NULL,
    [PursuitDecision]                  BIT              NULL,
    [QualificationComments]            NVARCHAR (MAX)   NULL,
    [QuoteComments]                    NVARCHAR (MAX)   NULL,
    [SendThankYouNote]                 BIT              NULL,
    [ScheduleFollowup_Prospect]        DATETIME         NULL,
    [ScheduleFollowup_Qualify]         DATETIME         NULL,
    [ScheduleProposalMeeting]          DATETIME         NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [StepId]                           UNIQUEIDENTIFIER NULL,
    [StepName]                         NVARCHAR (200)   NULL,
    [TimeLine]                         INT              NULL,
    [TotalAmount]                      MONEY            NULL,
    [TotalAmount_Base]                 MONEY            NULL,
    [TotalAmountLessFreight]           MONEY            NULL,
    [TotalAmountLessFreight_Base]      MONEY            NULL,
    [TotalDiscountAmount]              MONEY            NULL,
    [TotalDiscountAmount_Base]         MONEY            NULL,
    [TotalLineItemAmount]              MONEY            NULL,
    [TotalLineItemAmount_Base]         MONEY            NULL,
    [TotalLineItemDiscountAmount]      MONEY            NULL,
    [TotalLineItemDiscountAmount_Base] MONEY            NULL,
    [TotalTax]                         MONEY            NULL,
    [TotalTax_Base]                    MONEY            NULL,
    [IdentifyCustomerContacts]         BIT              NULL,
    [IdentifyCompetitors]              BIT              NULL,
    [IdentifyPursuitTeam]              BIT              NULL,
    [PresentFinalProposal]             BIT              NULL,
    [OnHoldTime]                       INT              NULL,
    [LastOnHoldTime]                   DATETIME         NULL,
    [SLAId]                            UNIQUEIDENTIFIER NULL,
    [SLAInvokedId]                     UNIQUEIDENTIFIER NULL,
    [TimeSpentByMeOnEmailAndMeetings]  NVARCHAR (1250)  NULL,
    [OriginatingLeadId]                UNIQUEIDENTIFIER NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [CustomerIdType]                   INT              NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [CampaignId]                       UNIQUEIDENTIFIER NULL,
    [TeamsFollowed]                    INT              NULL,
    [SkipPriceCalculation]             INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Opportunity] PRIMARY KEY CLUSTERED ([OpportunityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_opportunities] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [campaign_opportunities] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]),
    CONSTRAINT [manualsla_opportunity] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [opportunity_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [opportunity_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [opportunity_parent_contact] FOREIGN KEY ([ParentContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [owner_opportunitys] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [price_level_opportunties] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [transactioncurrency_opportunity] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OpportunityBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[OpportunityBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunityBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_OpportunityBase_OpportunityId_PriceLevelId]
    ON [dbo].[OpportunityBase]([OpportunityId] ASC, [PriceLevelId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[OpportunityBase]([OwnerId] ASC, [StateCode] ASC)
    INCLUDE([OpportunityId], [VersionNumber], [Name], [ProcessId], [TransactionCurrencyId], [CloseProbability], [CustomerId], [EstimatedCloseDate], [EstimatedValue], [OpportunityRatingCode], [ParentAccountId], [ParentContactId], [CustomerIdName], [CustomerIdType], [CustomerIdYomiName]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_Opportunity_EstimatedCloseDate]
    ON [dbo].[OpportunityBase]([EstimatedCloseDate] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_Opportunity_Name]
    ON [dbo].[OpportunityBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[OpportunityBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_contact]
    ON [dbo].[OpportunityBase]([ParentContactId] ASC) WHERE ([ParentContactId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_OpenOpportunities]
    ON [dbo].[OpportunityBase]([StateCode] ASC, [Name] ASC, [OpportunityId] ASC)
    INCLUDE([OpportunityRatingCode], [EstimatedValue], [EstimatedCloseDate], [CloseProbability], [TransactionCurrencyId], [CustomerId], [CustomerIdName], [CustomerIdType], [CustomerIdYomiName], [ActualValue_Base], [EstimatedValue_Base], [CampaignId], [OwnerId], [StepName]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn]
    ON [dbo].[OpportunityBase]([CreatedOn] ASC)
    INCLUDE([ActualCloseDate], [ActualValue_Base], [EstimatedValue_Base], [OwnerId]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_account]
    ON [dbo].[OpportunityBase]([ParentAccountId] ASC) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_accounts]
    ON [dbo].[OpportunityBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_FiscalYear]
    ON [dbo].[OpportunityBase]([ActualCloseDate] ASC)
    INCLUDE([ActualValue_Base], [EstimatedValue_Base], [StateCode], [OwnerId]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_originating_lead]
    ON [dbo].[OpportunityBase]([OriginatingLeadId] ASC) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_opportunities]
    ON [dbo].[OpportunityBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_opportunities]
    ON [dbo].[OpportunityBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3F6D889E654940259CE04C4103EFB6A3]
    ON [dbo].[OpportunityBase]([OpportunityId] ASC)
    INCLUDE([Name], [EstimatedValue], [EstimatedCloseDate], [CustomerId], [CustomerIdType], [CustomerIdName], [CustomerIdYomiName], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_3F6D889E654940259CE04C4103EFB6A3]
    ON [dbo].[OpportunityBase]([Name] ASC, [OpportunityId] ASC)
    INCLUDE([EstimatedValue], [EstimatedCloseDate], [CustomerId], [CustomerIdType], [CustomerIdName], [CustomerIdYomiName], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_3F6D889E654940259CE04C4103EFB6A3]
    ON [dbo].[OpportunityBase]([OpportunityId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ParentAccountId]
    ON [dbo].[OpportunityBase]([ParentAccountId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ParentContactId]
    ON [dbo].[OpportunityBase]([ParentContactId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_opportunties]
    ON [dbo].[OpportunityBase]([PriceLevelId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

