CREATE TABLE [dbo].[UserQueryBase]
(
[QueryType] [int] NOT NULL,
[ModifiedOn] [datetime] NOT NULL,
[ModifiedBy] [uniqueidentifier] NOT NULL,
[StatusCode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[FetchXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ColumnSetXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_UserQueryBase_StateCode] DEFAULT ((0)),
[UserQueryId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NOT NULL,
[ReturnedTypeCode] [int] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[LayoutXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[AdvancedGroupBy] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ConditionalFormatting] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_UserQueryBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ParentQueryId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_UserQueryBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserQueryBase] ADD CONSTRAINT [cndx_PrimaryKey_UserQuery] PRIMARY KEY CLUSTERED  ([UserQueryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[UserQueryBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[UserQueryBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserQueryBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserQueryBase] ADD CONSTRAINT [business_unit_userquery] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserQueryBase] ADD CONSTRAINT [owner_userquerys] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
