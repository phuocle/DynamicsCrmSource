USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DynamicPropertyOptionSetItemBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DynamicPropertyOptionSetItemBase](
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[DynamicPropertyOptionSetValueId] [uniqueidentifier] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[DynamicPropertyOptionSetValueSequenceNumber] [int] NULL,
	[DynamicPropertyId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[DynamicPropertyOptionName] [nvarchar](100) NULL,
	[ModifiedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[DynamicPropertyOptionValue] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[DynamicPropertyOptionDescription] [nvarchar](100) NULL,
	[CreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_DynamicPropertyOptionSetItem] PRIMARY KEY CLUSTERED 
(
	[DynamicPropertyOptionSetValueId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_DynamicProperty_DynamicPropertyOptionSetItem]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_DynamicProperty_DynamicPropertyOptionSetItem] ON [dbo].[DynamicPropertyOptionSetItemBase]
(
	[DynamicPropertyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyOptionSetItemBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_for_dynamicpropertyid_dynamicpropertyoptionname]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionname] ON [dbo].[DynamicPropertyOptionSetItemBase]
(
	[DynamicPropertyId] ASC,
	[DynamicPropertyOptionName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_dynamicpropertyid_dynamicpropertyoptionvalue]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionvalue] ON [dbo].[DynamicPropertyOptionSetItemBase]
(
	[DynamicPropertyId] ASC,
	[DynamicPropertyOptionValue] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase]  WITH CHECK ADD  CONSTRAINT [DynamicProperty_DynamicPropertyOptionSetItem] FOREIGN KEY([DynamicPropertyId])
REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId])
GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase] CHECK CONSTRAINT [DynamicProperty_DynamicPropertyOptionSetItem]
GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase]  WITH CHECK ADD  CONSTRAINT [DynamicPropertyOptionSetItem_TransactionCurrency] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase] CHECK CONSTRAINT [DynamicPropertyOptionSetItem_TransactionCurrency]
GO
