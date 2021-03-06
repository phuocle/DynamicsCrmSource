USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BookableResourceCharacteristicBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookableResourceCharacteristicBase](
	[ProcessId] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[Name] [nvarchar](100) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[BookableResourceCharacteristicId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[Characteristic] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Resource] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[RatingValue] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_bookableresourcecharacteristicBase] PRIMARY KEY CLUSTERED 
(
	[BookableResourceCharacteristicId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceCharacteristicBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceCharacteristicBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceCharacteristicBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceCharacteristicBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] ADD  CONSTRAINT [DF_BookableResourceCharacteristicBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase]  WITH CHECK ADD  CONSTRAINT [bookableresource_bookableresourcecharacteristic_Resource] FOREIGN KEY([Resource])
REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] CHECK CONSTRAINT [bookableresource_bookableresourcecharacteristic_Resource]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase]  WITH CHECK ADD  CONSTRAINT [business_unit_bookableresourcecharacteristic] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] CHECK CONSTRAINT [business_unit_bookableresourcecharacteristic]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase]  WITH CHECK ADD  CONSTRAINT [characteristic_bookableresourcecharacteristic_Characteristic] FOREIGN KEY([Characteristic])
REFERENCES [dbo].[CharacteristicBase] ([CharacteristicId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] CHECK CONSTRAINT [characteristic_bookableresourcecharacteristic_Characteristic]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase]  WITH CHECK ADD  CONSTRAINT [owner_bookableresourcecharacteristic] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] CHECK CONSTRAINT [owner_bookableresourcecharacteristic]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase]  WITH CHECK ADD  CONSTRAINT [ratingvalue_bookableresourcecharacteristic_RatingValue] FOREIGN KEY([RatingValue])
REFERENCES [dbo].[RatingValueBase] ([RatingValueId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] CHECK CONSTRAINT [ratingvalue_bookableresourcecharacteristic_RatingValue]
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_bookableresourcecharacteristic] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] CHECK CONSTRAINT [TransactionCurrency_bookableresourcecharacteristic]
GO
