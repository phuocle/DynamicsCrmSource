USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BookableResourceBookingBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookableResourceBookingBase](
	[BookingStatus] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[BookingType] [int] NULL,
	[StartTime] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[BookableResourceBookingId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[StatusCode] [int] NULL,
	[StateCode] [int] NOT NULL,
	[Duration] [int] NULL,
	[StageId] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[CreatedOn] [datetime] NULL,
	[EndTime] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[Resource] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[Header] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_bookableresourcebookingBase] PRIMARY KEY CLUSTERED 
(
	[BookableResourceBookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceBookingBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceBookingBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceBookingBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceBookingBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] ADD  CONSTRAINT [DF_BookableResourceBookingBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase]  WITH CHECK ADD  CONSTRAINT [bookableresource_bookableresourcebooking_Resource] FOREIGN KEY([Resource])
REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] CHECK CONSTRAINT [bookableresource_bookableresourcebooking_Resource]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase]  WITH CHECK ADD  CONSTRAINT [bookableresourcebookingheader_bookableresourcebooking_Header] FOREIGN KEY([Header])
REFERENCES [dbo].[BookableResourceBookingHeaderBase] ([BookableResourceBookingHeaderId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] CHECK CONSTRAINT [bookableresourcebookingheader_bookableresourcebooking_Header]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase]  WITH CHECK ADD  CONSTRAINT [bookingstatus_bookableresourcebooking_BookingStatus] FOREIGN KEY([BookingStatus])
REFERENCES [dbo].[BookingStatusBase] ([BookingStatusId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] CHECK CONSTRAINT [bookingstatus_bookableresourcebooking_BookingStatus]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase]  WITH CHECK ADD  CONSTRAINT [business_unit_bookableresourcebooking] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] CHECK CONSTRAINT [business_unit_bookableresourcebooking]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase]  WITH CHECK ADD  CONSTRAINT [owner_bookableresourcebooking] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] CHECK CONSTRAINT [owner_bookableresourcebooking]
GO
ALTER TABLE [dbo].[BookableResourceBookingBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_bookableresourcebooking] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[BookableResourceBookingBase] CHECK CONSTRAINT [TransactionCurrency_bookableresourcebooking]
GO
