USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CampaignBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CampaignBase](
	[TypeCode] [int] NULL,
	[ProposedEnd] [datetime] NULL,
	[BudgetedCost] [money] NULL,
	[CreatedOn] [datetime] NULL,
	[PromotionCodeName] [nvarchar](128) NULL,
	[ModifiedOn] [datetime] NULL,
	[PriceListId] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[IsTemplate] [bit] NULL,
	[CampaignId] [uniqueidentifier] NOT NULL,
	[ActualStart] [datetime] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[TotalActualCost] [money] NULL,
	[Message] [nvarchar](256) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ExpectedRevenue] [money] NULL,
	[VersionNumber] [timestamp] NULL,
	[CodeName] [nvarchar](32) NULL,
	[ProposedStart] [datetime] NULL,
	[Objective] [nvarchar](max) NULL,
	[ActualEnd] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[OtherCost] [money] NULL,
	[Description] [nvarchar](max) NULL,
	[TotalCampaignActivityActualCost] [money] NULL,
	[ExpectedResponse] [int] NULL,
	[Name] [nvarchar](128) NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
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
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[StageId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
 CONSTRAINT [cndx_PrimaryKey_Campaign] PRIMARY KEY CLUSTERED 
(
	[CampaignId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_BusinessUnit_Campaigns]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Campaigns] ON [dbo].[CampaignBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_PriceList_Campaigns]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_PriceList_Campaigns] ON [dbo].[CampaignBase]
(
	[PriceListId] ASC
)
WHERE ([PriceListId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CampaignBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[CampaignBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[CampaignBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_BudgetedCost]  DEFAULT ((0)) FOR [BudgetedCost]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_IsTemplate]  DEFAULT ((0)) FOR [IsTemplate]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_TotalActualCost]  DEFAULT ((0)) FOR [TotalActualCost]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_ExpectedRevenue]  DEFAULT ((0)) FOR [ExpectedRevenue]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_OtherCost]  DEFAULT ((0)) FOR [OtherCost]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_TotalCampaignActivityActualCost]  DEFAULT ((0)) FOR [TotalCampaignActivityActualCost]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[CampaignBase] ADD  CONSTRAINT [DF_CampaignBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[CampaignBase]  WITH CHECK ADD  CONSTRAINT [BusinessUnit_Campaigns] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CampaignBase] CHECK CONSTRAINT [BusinessUnit_Campaigns]
GO
ALTER TABLE [dbo].[CampaignBase]  WITH CHECK ADD  CONSTRAINT [owner_campaigns] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CampaignBase] CHECK CONSTRAINT [owner_campaigns]
GO
ALTER TABLE [dbo].[CampaignBase]  WITH CHECK ADD  CONSTRAINT [PriceList_Campaigns] FOREIGN KEY([PriceListId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[CampaignBase] CHECK CONSTRAINT [PriceList_Campaigns]
GO
ALTER TABLE [dbo].[CampaignBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_campaign] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[CampaignBase] CHECK CONSTRAINT [transactioncurrency_campaign]
GO
