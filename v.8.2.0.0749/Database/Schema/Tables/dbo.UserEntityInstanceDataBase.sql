CREATE TABLE [dbo].[UserEntityInstanceDataBase]
(
[CommonStart] [datetime] NULL,
[ReminderTime] [datetime] NULL,
[ToDoTitle] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[FlagRequest] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ToDoOrdinalDate] [datetime] NULL,
[DueDate] [datetime] NULL,
[FlagStatus] [int] NULL,
[FlagDueBy] [datetime] NULL,
[ReminderSet] [bit] NULL CONSTRAINT [DF_UserEntityInstanceDataBase_ReminderSet] DEFAULT ((0)),
[ObjectId] [uniqueidentifier] NULL,
[ToDoItemFlags] [int] NULL,
[ObjectTypeCode] [int] NOT NULL CONSTRAINT [DF_UserEntityInstanceDataBase_ObjectTypeCode] DEFAULT ((0)),
[PersonalCategories] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ToDoSubOrdinal] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[UserEntityInstanceDataId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_UserEntityInstanceDataBase_UserEntityInstanceDataId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CommonEnd] [datetime] NULL,
[StartTime] [datetime] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD CONSTRAINT [ndx_PrimaryKey_UserEntityInstanceData] PRIMARY KEY NONCLUSTERED  ([UserEntityInstanceDataId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_ObjectIdTypeCode] ON [dbo].[UserEntityInstanceDataBase] ([ObjectId], [ObjectTypeCode], [OwnerId], [OwnerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [fndx_Security] ON [dbo].[UserEntityInstanceDataBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserEntityInstanceDataBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD CONSTRAINT [owner_userentityinstancedata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] ADD CONSTRAINT [userentityinstancedata_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
