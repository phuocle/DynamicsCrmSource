USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserFormBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserFormBase](
	[ModifiedOn] [datetime] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Type] [int] NULL,
	[FormXml] [nvarchar](max) NULL,
	[UserFormId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[ObjectTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[IsTabletEnabled] [bit] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_UserForm] PRIMARY KEY CLUSTERED 
(
	[UserFormId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserFormBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_owner_userform]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userform] ON [dbo].[UserFormBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Type_ObjectType]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Type_ObjectType] ON [dbo].[UserFormBase]
(
	[Type] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserFormBase] ADD  CONSTRAINT [DF_UserFormBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[UserFormBase] ADD  CONSTRAINT [DF_UserFormBase_Type]  DEFAULT ((0)) FOR [Type]
GO
ALTER TABLE [dbo].[UserFormBase] ADD  CONSTRAINT [DF_UserFormBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[UserFormBase] ADD  CONSTRAINT [DF_UserFormBase_IsTabletEnabled]  DEFAULT ((0)) FOR [IsTabletEnabled]
GO
ALTER TABLE [dbo].[UserFormBase]  WITH CHECK ADD  CONSTRAINT [business_unit_userform] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserFormBase] CHECK CONSTRAINT [business_unit_userform]
GO
ALTER TABLE [dbo].[UserFormBase]  WITH CHECK ADD  CONSTRAINT [owner_userform] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserFormBase] CHECK CONSTRAINT [owner_userform]
GO
