CREATE TABLE [dbo].[UserEntityInstanceDataBase] (
    [CommonStart]              DATETIME         NULL,
    [ReminderTime]             DATETIME         NULL,
    [ToDoTitle]                NVARCHAR (2000)  NULL,
    [FlagRequest]              NVARCHAR (50)    NULL,
    [OwningBusinessUnit]       UNIQUEIDENTIFIER NULL,
    [ToDoOrdinalDate]          DATETIME         NULL,
    [DueDate]                  DATETIME         NULL,
    [FlagStatus]               INT              NULL,
    [FlagDueBy]                DATETIME         NULL,
    [ReminderSet]              BIT              CONSTRAINT [DF_UserEntityInstanceDataBase_ReminderSet] DEFAULT ((0)) NULL,
    [ObjectId]                 UNIQUEIDENTIFIER NULL,
    [ToDoItemFlags]            INT              NULL,
    [ObjectTypeCode]           INT              CONSTRAINT [DF_UserEntityInstanceDataBase_ObjectTypeCode] DEFAULT ((0)) NOT NULL,
    [PersonalCategories]       NVARCHAR (MAX)   NULL,
    [ToDoSubOrdinal]           NVARCHAR (50)    NULL,
    [UserEntityInstanceDataId] UNIQUEIDENTIFIER CONSTRAINT [DF_UserEntityInstanceDataBase_UserEntityInstanceDataId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [OwnerId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CommonEnd]                DATETIME         NULL,
    [StartTime]                DATETIME         NULL,
    [OwnerIdType]              INT              CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_UserEntityInstanceData] PRIMARY KEY NONCLUSTERED ([UserEntityInstanceDataId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_userentityinstancedata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [userentityinstancedata_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
CREATE CLUSTERED INDEX [fndx_Security]
    ON [dbo].[UserEntityInstanceDataBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_ObjectIdTypeCode]
    ON [dbo].[UserEntityInstanceDataBase]([ObjectId] ASC, [ObjectTypeCode] ASC, [OwnerId] ASC, [OwnerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserEntityInstanceDataBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

