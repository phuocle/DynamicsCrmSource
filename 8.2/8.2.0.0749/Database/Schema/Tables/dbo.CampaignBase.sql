CREATE TABLE [dbo].[CampaignBase]
(
[TypeCode] [int] NULL,
[ProposedEnd] [datetime] NULL,
[BudgetedCost] [money] NULL CONSTRAINT [DF_CampaignBase_BudgetedCost] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[PromotionCodeName] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[PriceListId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[IsTemplate] [bit] NULL CONSTRAINT [DF_CampaignBase_IsTemplate] DEFAULT ((0)),
[CampaignId] [uniqueidentifier] NOT NULL,
[ActualStart] [datetime] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[TotalActualCost] [money] NULL CONSTRAINT [DF_CampaignBase_TotalActualCost] DEFAULT ((0)),
[Message] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ExpectedRevenue] [money] NULL CONSTRAINT [DF_CampaignBase_ExpectedRevenue] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[CodeName] [nvarchar] (32) COLLATE Latin1_General_CI_AI NULL,
[ProposedStart] [datetime] NULL,
[Objective] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ActualEnd] [datetime] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_CampaignBase_StateCode] DEFAULT ((0)),
[OtherCost] [money] NULL CONSTRAINT [DF_CampaignBase_OtherCost] DEFAULT ((0)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TotalCampaignActivityActualCost] [money] NULL CONSTRAINT [DF_CampaignBase_TotalCampaignActivityActualCost] DEFAULT ((0)),
[ExpectedResponse] [int] NULL,
[Name] [nvarchar] (128) COLLATE Latin1_General_CI_AI NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TotalCampaignActivityActualCost_Base] [money] NULL,
[BudgetedCost_Base] [money] NULL,
[ExpectedRevenue_Base] [money] NULL,
[OtherCost_Base] [money] NULL,
[TotalActualCost_Base] [money] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CampaignBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_CampaignBase_OwnerIdType] DEFAULT ((8)),
[StageId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignBase] ADD CONSTRAINT [cndx_PrimaryKey_Campaign] PRIMARY KEY CLUSTERED  ([CampaignId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_CodeName] ON [dbo].[CampaignBase] ([CodeName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[CampaignBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[CampaignBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Campaigns] ON [dbo].[CampaignBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_PriceList_Campaigns] ON [dbo].[CampaignBase] ([PriceListId]) WHERE ([PriceListId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[CampaignBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CampaignBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignBase] ADD CONSTRAINT [BusinessUnit_Campaigns] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CampaignBase] ADD CONSTRAINT [owner_campaigns] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CampaignBase] ADD CONSTRAINT [PriceList_Campaigns] FOREIGN KEY ([PriceListId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[CampaignBase] ADD CONSTRAINT [transactioncurrency_campaign] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
