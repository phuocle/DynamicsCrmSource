USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ConnectionBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConnectionBase](
	[Record2RoleId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Record2Id] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ConnectionId] [uniqueidentifier] NOT NULL,
	[IsMaster] [bit] NOT NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[Record2ObjectTypeCode] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[StateCode] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[EffectiveStart] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[Record1Id] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Record1ObjectTypeCode] [int] NULL,
	[RelatedConnectionId] [uniqueidentifier] NULL,
	[Record1RoleId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[EffectiveEnd] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[Record2IdName] [nvarchar](4000) NULL,
	[Record1IdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[Record2IdObjectTypeCode] [int] NULL,
	[Record1IdObjectTypeCode] [int] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Connection] PRIMARY KEY CLUSTERED 
(
	[ConnectionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_connection_related_connection]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_related_connection] ON [dbo].[ConnectionBase]
(
	[RelatedConnectionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_connection_role_connections1]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections1] ON [dbo].[ConnectionBase]
(
	[Record1RoleId] ASC
)
WHERE ([Record1RoleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_connection_role_connections2]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections2] ON [dbo].[ConnectionBase]
(
	[Record2RoleId] ASC
)
WHERE ([Record2RoleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_search_record1_type_code]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_search_record1_type_code] ON [dbo].[ConnectionBase]
(
	[Record1ObjectTypeCode] ASC
)
WHERE ([Record1ObjectTypeCode] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_search_record2_type_code]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_search_record2_type_code] ON [dbo].[ConnectionBase]
(
	[Record2ObjectTypeCode] ASC
)
WHERE ([Record2ObjectTypeCode] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConnectionBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_record1]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record1] ON [dbo].[ConnectionBase]
(
	[Record1Id] ASC,
	[Record1IdObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_record2]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record2] ON [dbo].[ConnectionBase]
(
	[Record2Id] ASC,
	[Record2IdObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_covering_record1_record2]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_covering_record1_record2] ON [dbo].[ConnectionBase]
(
	[Record1Id] ASC,
	[Record2Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ConnectionBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionBase] ADD  CONSTRAINT [DF_ConnectionBase_IsMaster]  DEFAULT ((1)) FOR [IsMaster]
GO
ALTER TABLE [dbo].[ConnectionBase] ADD  CONSTRAINT [DF_ConnectionBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ConnectionBase] ADD  CONSTRAINT [DF_ConnectionBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ConnectionBase]  WITH CHECK ADD  CONSTRAINT [business_unit_connections] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ConnectionBase] CHECK CONSTRAINT [business_unit_connections]
GO
ALTER TABLE [dbo].[ConnectionBase]  WITH CHECK ADD  CONSTRAINT [connection_related_connection] FOREIGN KEY([RelatedConnectionId])
REFERENCES [dbo].[ConnectionBase] ([ConnectionId])
GO
ALTER TABLE [dbo].[ConnectionBase] CHECK CONSTRAINT [connection_related_connection]
GO
ALTER TABLE [dbo].[ConnectionBase]  WITH CHECK ADD  CONSTRAINT [connection_role_connections1] FOREIGN KEY([Record1RoleId])
REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionBase] CHECK CONSTRAINT [connection_role_connections1]
GO
ALTER TABLE [dbo].[ConnectionBase]  WITH CHECK ADD  CONSTRAINT [connection_role_connections2] FOREIGN KEY([Record2RoleId])
REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionBase] CHECK CONSTRAINT [connection_role_connections2]
GO
ALTER TABLE [dbo].[ConnectionBase]  WITH CHECK ADD  CONSTRAINT [owner_connections] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ConnectionBase] CHECK CONSTRAINT [owner_connections]
GO
ALTER TABLE [dbo].[ConnectionBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_Connection] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ConnectionBase] CHECK CONSTRAINT [TransactionCurrency_Connection]
GO
