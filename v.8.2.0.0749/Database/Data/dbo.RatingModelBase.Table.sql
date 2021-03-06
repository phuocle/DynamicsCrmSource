USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RatingModelBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RatingModelBase](
	[UTCConversionTimeZoneCode] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[StateCode] [int] NOT NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[RatingModelId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[StatusCode] [int] NULL,
	[MinRatingValue] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[MaxRatingValue] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[VersionNumber] [timestamp] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_ratingmodelBase] PRIMARY KEY CLUSTERED 
(
	[RatingModelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RatingModelBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[RatingModelBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[RatingModelBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RatingModelBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RatingModelBase] ADD  CONSTRAINT [DF_RatingModelBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[RatingModelBase]  WITH CHECK ADD  CONSTRAINT [business_unit_ratingmodel] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[RatingModelBase] CHECK CONSTRAINT [business_unit_ratingmodel]
GO
ALTER TABLE [dbo].[RatingModelBase]  WITH CHECK ADD  CONSTRAINT [owner_ratingmodel] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[RatingModelBase] CHECK CONSTRAINT [owner_ratingmodel]
GO
ALTER TABLE [dbo].[RatingModelBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_ratingmodel] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[RatingModelBase] CHECK CONSTRAINT [TransactionCurrency_ratingmodel]
GO
