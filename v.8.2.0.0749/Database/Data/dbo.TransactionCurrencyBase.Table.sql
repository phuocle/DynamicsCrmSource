USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TransactionCurrencyBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TransactionCurrencyBase](
	[StatusCode] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CurrencySymbol] [nvarchar](13) NOT NULL,
	[UniqueDscId] [uniqueidentifier] NULL,
	[CurrencyName] [nvarchar](100) NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ISOCurrencyCode] [nvarchar](5) NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CurrencyPrecision] [int] NOT NULL CONSTRAINT [DF_TransactionCurrencyBase_CurrencyPrecision]  DEFAULT ((2)),
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_TransactionCurrency] PRIMARY KEY CLUSTERED 
(
	[TransactionCurrencyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[TransactionCurrencyBase] ([StatusCode], [ModifiedOn], [StateCode], [ModifiedBy], [ImportSequenceNumber], [OverriddenCreatedOn], [CreatedOn], [TransactionCurrencyId], [ExchangeRate], [CurrencySymbol], [UniqueDscId], [CurrencyName], [CreatedBy], [ISOCurrencyCode], [OrganizationId], [CurrencyPrecision], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [EntityImageId]) VALUES (1, CAST(N'2017-04-10 13:56:59.000' AS DateTime), 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL, NULL, CAST(N'2017-04-10 13:56:59.000' AS DateTime), N'58f26690-f51d-e711-80d3-00155d00662d', CAST(1.0000000000 AS Decimal(23, 10)), N'$', NULL, N'US Dollar', N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'USD', N'94f9b696-f31d-e711-80d3-00155d00662d', 2, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TransactionCurrencyBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[TransactionCurrencyBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_CurrencyNameSymbol]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_CurrencyNameSymbol] ON [dbo].[TransactionCurrencyBase]
(
	[CurrencyName] ASC,
	[CurrencySymbol] ASC,
	[ExchangeRate] ASC,
	[CurrencyPrecision] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Unique_ISOCurrencyCode]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_ISOCurrencyCode] ON [dbo].[TransactionCurrencyBase]
(
	[ISOCurrencyCode] ASC,
	[UniqueDscId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
