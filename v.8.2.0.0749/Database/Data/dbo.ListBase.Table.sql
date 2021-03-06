USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ListBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListBase](
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[MemberCount] [int] NULL,
	[ListName] [nvarchar](128) NOT NULL,
	[LastUsedOn] [datetime] NULL,
	[ListId] [uniqueidentifier] NOT NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[DoNotSendOnOptOut] [bit] NULL,
	[Description] [nvarchar](max) NULL,
	[Purpose] [nvarchar](512) NULL,
	[Cost] [money] NULL,
	[IgnoreInactiveListMembers] [bit] NULL,
	[MemberType] [int] NULL,
	[Source] [nvarchar](128) NULL,
	[CreatedFromCode] [int] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[LockStatus] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[Cost_Base] [money] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Type] [bit] NOT NULL,
	[Query] [nvarchar](max) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
	[StageId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
 CONSTRAINT [cndx_PrimaryKey_List] PRIMARY KEY CLUSTERED 
(
	[ListId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_list]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_list] ON [dbo].[ListBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ListBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ListBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ListBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_MemberCount]  DEFAULT ((0)) FOR [MemberCount]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_StatusCode]  DEFAULT ((0)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_DoNotSendOnOptOut]  DEFAULT ((1)) FOR [DoNotSendOnOptOut]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_IgnoreInactiveListMembers]  DEFAULT ((1)) FOR [IgnoreInactiveListMembers]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_LockStatus]  DEFAULT ((0)) FOR [LockStatus]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_Type]  DEFAULT ((0)) FOR [Type]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ListBase] ADD  CONSTRAINT [DF_ListBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ListBase]  WITH CHECK ADD  CONSTRAINT [business_unit_list] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ListBase] CHECK CONSTRAINT [business_unit_list]
GO
ALTER TABLE [dbo].[ListBase]  WITH CHECK ADD  CONSTRAINT [owner_lists] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ListBase] CHECK CONSTRAINT [owner_lists]
GO
ALTER TABLE [dbo].[ListBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_list] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ListBase] CHECK CONSTRAINT [transactioncurrency_list]
GO
