CREATE TABLE [dbo].[UserFormBase]
(
[ModifiedOn] [datetime] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_UserFormBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Type] [int] NULL CONSTRAINT [DF_UserFormBase_Type] DEFAULT ((0)),
[FormXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[UserFormId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ObjectTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_UserFormBase_OwnerIdType] DEFAULT ((8)),
[IsTabletEnabled] [bit] NOT NULL CONSTRAINT [DF_UserFormBase_IsTabletEnabled] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserFormBase] ADD CONSTRAINT [cndx_PrimaryKey_UserForm] PRIMARY KEY CLUSTERED  ([UserFormId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userform] ON [dbo].[UserFormBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Type_ObjectType] ON [dbo].[UserFormBase] ([Type], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserFormBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserFormBase] ADD CONSTRAINT [business_unit_userform] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserFormBase] ADD CONSTRAINT [owner_userform] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
