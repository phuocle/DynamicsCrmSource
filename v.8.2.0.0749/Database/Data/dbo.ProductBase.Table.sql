USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ProductBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductBase](
	[ProductId] [uniqueidentifier] NOT NULL,
	[DefaultUoMScheduleId] [uniqueidentifier] NULL,
	[SubjectId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NULL,
	[DefaultUoMId] [uniqueidentifier] NULL,
	[PriceLevelId] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[ProductTypeCode] [int] NULL,
	[ProductUrl] [nvarchar](255) NULL,
	[Price] [money] NULL,
	[IsKit] [bit] NULL,
	[ProductNumber] [nvarchar](100) NOT NULL,
	[Size] [nvarchar](200) NULL,
	[CurrentCost] [money] NULL,
	[StockVolume] [decimal](23, 10) NULL,
	[StandardCost] [money] NULL,
	[StockWeight] [decimal](23, 10) NULL,
	[QuantityDecimal] [int] NULL,
	[QuantityOnHand] [decimal](23, 10) NULL,
	[IsStockItem] [bit] NULL,
	[SupplierName] [nvarchar](100) NULL,
	[VendorName] [nvarchar](100) NULL,
	[VendorPartNumber] [nvarchar](100) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[CurrentCost_Base] [money] NULL,
	[Price_Base] [money] NULL,
	[StandardCost_Base] [money] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[ProductStructure] [int] NOT NULL,
	[VendorID] [nvarchar](100) NULL,
	[ParentProductId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[ValidToDate] [datetime] NULL,
	[ValidFromDate] [datetime] NULL,
	[HierarchyPath] [nvarchar](900) NULL,
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
	[CreatedByExternalParty] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Product] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_ProductBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ProductBase] ADD  CONSTRAINT [AK1_ProductBase] UNIQUE NONCLUSTERED 
(
	[ProductNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_subject_products]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_products] ON [dbo].[ProductBase]
(
	[SubjectId] ASC
)
WHERE ([SubjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProductBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ProductBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_hierarchypath]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_hierarchypath] ON [dbo].[ProductBase]
(
	[HierarchyPath] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ProductBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ParentProductId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ParentProductId] ON [dbo].[ProductBase]
(
	[ParentProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ProductTypeCode]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ProductTypeCode] ON [dbo].[ProductBase]
(
	[ProductTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProductBase] ADD  CONSTRAINT [Set_To_Zero137]  DEFAULT ((0)) FOR [IsKit]
GO
ALTER TABLE [dbo].[ProductBase] ADD  CONSTRAINT [DF_ProductBase_ProductStructure]  DEFAULT ((1)) FOR [ProductStructure]
GO
ALTER TABLE [dbo].[ProductBase]  WITH CHECK ADD  CONSTRAINT [price_level_products] FOREIGN KEY([PriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[ProductBase] CHECK CONSTRAINT [price_level_products]
GO
ALTER TABLE [dbo].[ProductBase]  WITH CHECK ADD  CONSTRAINT [product_parent_product] FOREIGN KEY([ParentProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ProductBase] CHECK CONSTRAINT [product_parent_product]
GO
ALTER TABLE [dbo].[ProductBase]  WITH CHECK ADD  CONSTRAINT [subject_products] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[ProductBase] CHECK CONSTRAINT [subject_products]
GO
ALTER TABLE [dbo].[ProductBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_product] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ProductBase] CHECK CONSTRAINT [transactioncurrency_product]
GO
ALTER TABLE [dbo].[ProductBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_products] FOREIGN KEY([DefaultUoMId])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[ProductBase] CHECK CONSTRAINT [unit_of_measurement_products]
GO
ALTER TABLE [dbo].[ProductBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_schedule_products] FOREIGN KEY([DefaultUoMScheduleId])
REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
ALTER TABLE [dbo].[ProductBase] CHECK CONSTRAINT [unit_of_measurement_schedule_products]
GO
