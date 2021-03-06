USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserQueryBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserQueryBase](
	[QueryType] [int] NOT NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[StatusCode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[FetchXml] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[ColumnSetXml] [nvarchar](max) NULL,
	[StateCode] [int] NOT NULL,
	[UserQueryId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[ReturnedTypeCode] [int] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[LayoutXml] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[AdvancedGroupBy] [nvarchar](160) NULL,
	[ConditionalFormatting] [nvarchar](max) NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ParentQueryId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_UserQuery] PRIMARY KEY CLUSTERED 
(
	[UserQueryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserQueryBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[UserQueryBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[UserQueryBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserQueryBase] ADD  CONSTRAINT [DF_UserQueryBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[UserQueryBase] ADD  CONSTRAINT [DF_UserQueryBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[UserQueryBase] ADD  CONSTRAINT [DF_UserQueryBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[UserQueryBase]  WITH CHECK ADD  CONSTRAINT [business_unit_userquery] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserQueryBase] CHECK CONSTRAINT [business_unit_userquery]
GO
ALTER TABLE [dbo].[UserQueryBase]  WITH CHECK ADD  CONSTRAINT [owner_userquerys] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserQueryBase] CHECK CONSTRAINT [owner_userquerys]
GO
