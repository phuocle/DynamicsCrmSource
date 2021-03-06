USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase](
	[OwnerId] [uniqueidentifier] NOT NULL,
	[LastSyncErrorCode] [int] NULL,
	[Retries] [int] NULL,
	[LastSyncErrorOccurredOn] [datetime] NULL,
	[ExchangeEntryId] [nvarchar](1024) NULL,
	[BookableResourceBookingId] [uniqueidentifier] NULL,
	[SyncVersionNumber] [bigint] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[SyncStatus] [int] NULL,
	[BookableResourceBookingExchangeSyncIdMappingId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[IsDeletedInExchange] [bit] NULL,
	[LastSyncError] [nvarchar](1024) NULL,
	[ModifiedOn] [datetime] NULL,
	[UserId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_bookableresourcebookingexchangesyncidmappingBase] PRIMARY KEY CLUSTERED 
(
	[BookableResourceBookingExchangeSyncIdMappingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_exchangeentryid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid] ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]
(
	[ExchangeEntryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_uniquebookableresourcebookingid_mapping]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniquebookableresourcebookingid_mapping] ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]
(
	[BookableResourceBookingId] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ADD  CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_SyncStatus]  DEFAULT ((0)) FOR [SyncStatus]
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ADD  CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_IsDeletedInExchange]  DEFAULT ((0)) FOR [IsDeletedInExchange]
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ADD  CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]  WITH CHECK ADD  CONSTRAINT [business_unit_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] CHECK CONSTRAINT [business_unit_bookableresourcebookingexchangesyncidmapping]
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]  WITH CHECK ADD  CONSTRAINT [owner_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] CHECK CONSTRAINT [owner_bookableresourcebookingexchangesyncidmapping]
GO
