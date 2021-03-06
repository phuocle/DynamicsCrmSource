USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DynamicPropertyAssociationBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DynamicPropertyAssociationBase](
	[ExchangeRate] [decimal](23, 10) NULL,
	[RegardingObjectid] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[AssociationStatus] [int] NULL,
	[DynamicPropertyAssociationId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[InheritanceState] [int] NULL,
	[DynamicPropertyId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_DynamicPropertyAssociation] PRIMARY KEY CLUSTERED 
(
	[DynamicPropertyAssociationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_Product_DynamicPropertyAssociation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicPropertyAssociation] ON [dbo].[DynamicPropertyAssociationBase]
(
	[RegardingObjectid] ASC
)
WHERE ([RegardingObjectid] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyAssociationBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_DynamicPropertyId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId] ON [dbo].[DynamicPropertyAssociationBase]
(
	[DynamicPropertyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyAssociationBase] ADD  CONSTRAINT [DF_DynamicPropertyAssociationBase_AssociationStatus]  DEFAULT ((1)) FOR [AssociationStatus]
GO
ALTER TABLE [dbo].[DynamicPropertyAssociationBase]  WITH CHECK ADD  CONSTRAINT [DynamicPropertyAssociation_TransactionCurrency] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[DynamicPropertyAssociationBase] CHECK CONSTRAINT [DynamicPropertyAssociation_TransactionCurrency]
GO
