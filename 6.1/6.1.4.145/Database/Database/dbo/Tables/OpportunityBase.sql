CREATE TABLE [dbo].[OpportunityBase] (
    [OpportunityId]                    UNIQUEIDENTIFIER NOT NULL,
    [PriceLevelId]                     UNIQUEIDENTIFIER NULL,
    [OpportunityRatingCode]            INT              NULL,
    [PriorityCode]                     INT              NULL,
    [Name]                             NVARCHAR (300)   NULL,
    [StepId]                           UNIQUEIDENTIFIER NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [EstimatedValue]                   MONEY            NULL,
    [StepName]                         NVARCHAR (200)   NULL,
    [SalesStageCode]                   INT              NULL,
    [ParticipatesInWorkflow]           BIT              CONSTRAINT [Set_To_Zero119] DEFAULT ((0)) NULL,
    [PricingErrorCode]                 INT              NULL,
    [EstimatedCloseDate]               DATETIME         NULL,
    [CloseProbability]                 INT              NULL,
    [ActualValue]                      MONEY            NULL,
    [ActualCloseDate]                  DATETIME         NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [OriginatingLeadId]                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                        DATETIME         NULL,
    [IsPrivate]                        BIT              CONSTRAINT [Set_To_Zero120] DEFAULT ((0)) NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [IsRevenueSystemCalculated]        BIT              CONSTRAINT [Set_To_Zero121] DEFAULT ((0)) NULL,
    [CampaignId]                       UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]             INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [ActualValue_Base]                 MONEY            NULL,
    [EstimatedValue_Base]              MONEY            NULL,
    [TotalDiscountAmount]              MONEY            NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [TotalAmount]                      MONEY            NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [TotalAmountLessFreight]           MONEY            NULL,
    [TotalLineItemDiscountAmount]      MONEY            NULL,
    [CustomerId]                       UNIQUEIDENTIFIER NULL,
    [DiscountAmount]                   MONEY            NULL,
    [OwnerId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_OpportunityBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [FreightAmount]                    MONEY            NULL,
    [TotalTax]                         MONEY            NULL,
    [DiscountPercentage]               DECIMAL (23, 10) NULL,
    [TotalLineItemAmount]              MONEY            NULL,
    [CustomerIdName]                   NVARCHAR (4000)  NULL,
    [CustomerIdType]                   INT              NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_OpportunityBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [TotalDiscountAmount_Base]         MONEY            NULL,
    [FreightAmount_Base]               MONEY            NULL,
    [TotalLineItemAmount_Base]         MONEY            NULL,
    [TotalTax_Base]                    MONEY            NULL,
    [TotalLineItemDiscountAmount_Base] MONEY            NULL,
    [TotalAmount_Base]                 MONEY            NULL,
    [DiscountAmount_Base]              MONEY            NULL,
    [TotalAmountLessFreight_Base]      MONEY            NULL,
    [CustomerIdYomiName]               NVARCHAR (4000)  NULL,
    [FileDebrief]                      BIT              NULL,
    [BudgetStatus]                     INT              NULL,
    [PresentProposal]                  BIT              NULL,
    [SendThankYouNote]                 BIT              NULL,
    [EvaluateFit]                      BIT              NULL,
    [FinalDecisionDate]                DATETIME         NULL,
    [ConfirmInterest]                  BIT              NULL,
    [CompleteInternalReview]           BIT              NULL,
    [TimeLine]                         INT              NULL,
    [CustomerPainPoints]               NVARCHAR (MAX)   NULL,
    [ResolveFeedback]                  BIT              NULL,
    [QuoteComments]                    NVARCHAR (MAX)   NULL,
    [PurchaseProcess]                  INT              NULL,
    [CaptureProposalFeedback]          BIT              NULL,
    [ParentContactId]                  UNIQUEIDENTIFIER NULL,
    [IdentifyCustomerContacts]         BIT              NULL,
    [CompleteFinalProposal]            BIT              NULL,
    [BudgetAmount]                     MONEY            NULL,
    [ParentAccountId]                  UNIQUEIDENTIFIER NULL,
    [ScheduleFollowup_Qualify]         DATETIME         NULL,
    [Need]                             INT              NULL,
    [PursuitDecision]                  BIT              NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [ScheduleProposalMeeting]          DATETIME         NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [QualificationComments]            NVARCHAR (MAX)   NULL,
    [SalesStage]                       INT              NULL,
    [InitialCommunication]             INT              NULL,
    [IdentifyPursuitTeam]              BIT              NULL,
    [ScheduleFollowup_Prospect]        DATETIME         NULL,
    [PurchaseTimeframe]                INT              NULL,
    [IdentifyCompetitors]              BIT              NULL,
    [DecisionMaker]                    BIT              NULL,
    [CurrentSituation]                 NVARCHAR (MAX)   NULL,
    [CustomerNeed]                     NVARCHAR (MAX)   NULL,
    [ProposedSolution]                 NVARCHAR (MAX)   NULL,
    [PresentFinalProposal]             BIT              NULL,
    [DevelopProposal]                  BIT              NULL,
    [BudgetAmount_Base]                MONEY            NULL,
    CONSTRAINT [cndx_PrimaryKey_Opportunity] PRIMARY KEY CLUSTERED ([OpportunityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_opportunities] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [campaign_opportunities] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_parent_contact] FOREIGN KEY ([ParentContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_opportunitys] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [price_level_opportunties] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_opportunity] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OpportunityBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_opportunities]
    ON [dbo].[OpportunityBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_opportunities]
    ON [dbo].[OpportunityBase]([CampaignId] ASC) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_originating_lead]
    ON [dbo].[OpportunityBase]([OriginatingLeadId] ASC) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunityBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_accounts]
    ON [dbo].[OpportunityBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn]
    ON [dbo].[OpportunityBase]([CreatedOn] ASC)
    INCLUDE([ActualCloseDate], [ActualValue_Base], [EstimatedValue_Base], [OwnerId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_FiscalYear]
    ON [dbo].[OpportunityBase]([ActualCloseDate] ASC, [StateCode] ASC)
    INCLUDE([ActualValue_Base], [EstimatedValue_Base], [OwnerId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OpenOpportunities]
    ON [dbo].[OpportunityBase]([StateCode] ASC, [Name] ASC, [OpportunityId] ASC)
    INCLUDE([OpportunityRatingCode], [EstimatedValue], [EstimatedCloseDate], [CloseProbability], [TransactionCurrencyId], [CustomerId], [CustomerIdName], [CustomerIdType], [CustomerIdYomiName], [ActualValue_Base], [EstimatedValue_Base], [CampaignId], [OwnerId], [StepName]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[OpportunityBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Opportunity_Name]
    ON [dbo].[OpportunityBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_contact]
    ON [dbo].[OpportunityBase]([ParentContactId] ASC) WHERE ([ParentContactId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[OpportunityBase]([OwnerId] ASC, [StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_account]
    ON [dbo].[OpportunityBase]([ParentAccountId] ASC) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Opportunity_EstimatedCloseDate]
    ON [dbo].[OpportunityBase]([EstimatedCloseDate] ASC) WITH (FILLFACTOR = 80);

