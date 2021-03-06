USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BookableResourceBookingHeaderBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookableResourceBookingHeaderBase](
	[BookableResourceBookingHeaderId] [uniqueidentifier] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[Name] [nvarchar](100) NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[StageId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[StatusCode] [int] NULL,
	[StateCode] [int] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[StartTime] [datetime] NULL,
	[Duration] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[EndTime] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_bookableresourcebookingheaderBase] PRIMARY KEY CLUSTERED 
(
	[BookableResourceBookingHeaderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceBookingHeaderBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceBookingHeaderBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceBookingHeaderBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceBookingHeaderBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] ADD  CONSTRAINT [DF_BookableResourceBookingHeaderBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase]  WITH CHECK ADD  CONSTRAINT [business_unit_bookableresourcebookingheader] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] CHECK CONSTRAINT [business_unit_bookableresourcebookingheader]
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase]  WITH CHECK ADD  CONSTRAINT [owner_bookableresourcebookingheader] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] CHECK CONSTRAINT [owner_bookableresourcebookingheader]
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_bookableresourcebookingheader] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] CHECK CONSTRAINT [TransactionCurrency_bookableresourcebookingheader]
GO
