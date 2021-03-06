USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ExchangeSyncIdMappingBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExchangeSyncIdMappingBase](
	[ExchangeSyncIdmappingId] [uniqueidentifier] NOT NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[FromCrmChangeType] [int] NULL,
	[IsDeletedInExchange] [bit] NULL,
	[ObjectTypeCode] [int] NULL,
	[LastSyncErrorCode] [int] NULL,
	[UserDecision] [int] NULL,
	[IsUnlinkedInCRM] [bit] NULL,
	[Retries] [int] NULL,
	[ToCrmChangeType] [int] NULL,
	[ExchangeEntryId] [nvarchar](1024) NULL,
	[LastSyncError] [nvarchar](1024) NULL,
	[VersionNumber] [timestamp] NULL,
	[OwnerIdType] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[LastSyncErrorOccurredOn] [datetime] NULL,
 CONSTRAINT [PK_exchangesyncidmappingBase] PRIMARY KEY CLUSTERED 
(
	[ExchangeSyncIdmappingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_exchangeentryid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid] ON [dbo].[ExchangeSyncIdMappingBase]
(
	[ExchangeEntryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ExchangeSyncIdMappingBase]
(
	[OwnerId] ASC
)
INCLUDE ( 	[Retries]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_uniqueobjectidmapping]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueobjectidmapping] ON [dbo].[ExchangeSyncIdMappingBase]
(
	[ObjectId] ASC,
	[OwnerId] ASC
)
WHERE ([ObjectId]<>'00000000-0000-0000-0000-000000000000')
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] ADD  CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsDeletedInExchange]  DEFAULT ((0)) FOR [IsDeletedInExchange]
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] ADD  CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsUnlinkedInCRM]  DEFAULT ((0)) FOR [IsUnlinkedInCRM]
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] ADD  CONSTRAINT [DF_ExchangeSyncIdMappingBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase]  WITH CHECK ADD  CONSTRAINT [business_unit_exchangesyncidmapping] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] CHECK CONSTRAINT [business_unit_exchangesyncidmapping]
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase]  WITH CHECK ADD  CONSTRAINT [owner_exchangesyncidmapping] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] CHECK CONSTRAINT [owner_exchangesyncidmapping]
GO
