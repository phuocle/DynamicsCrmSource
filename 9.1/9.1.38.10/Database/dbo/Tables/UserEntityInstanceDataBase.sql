CREATE TABLE [dbo].[UserEntityInstanceDataBase] (
    [ToDoItemFlags]            INT              NULL,
    [ReminderSet]              BIT              CONSTRAINT [DF_UserEntityInstanceDataBase_ReminderSet] DEFAULT ((0)) NULL,
    [OwnerId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ObjectId]                 UNIQUEIDENTIFIER NULL,
    [CommonStart]              DATETIME         NULL,
    [ToDoTitle]                NVARCHAR (2000)  NULL,
    [FlagRequest]              NVARCHAR (50)    NULL,
    [FlagDueBy]                DATETIME         NULL,
    [ToDoOrdinalDate]          DATETIME         NULL,
    [FlagStatus]               INT              NULL,
    [ReminderTime]             DATETIME         NULL,
    [PersonalCategories]       NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]       UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]           INT              CONSTRAINT [DF_UserEntityInstanceDataBase_ObjectTypeCode] DEFAULT ((0)) NOT NULL,
    [DueDate]                  DATETIME         NULL,
    [CommonEnd]                DATETIME         NULL,
    [UserEntityInstanceDataId] UNIQUEIDENTIFIER CONSTRAINT [DF_UserEntityInstanceDataBase_UserEntityInstanceDataId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [ToDoSubOrdinal]           NVARCHAR (50)    NULL,
    [StartTime]                DATETIME         NULL,
    [OwnerIdType]              INT              CONSTRAINT [DF_UserEntityInstanceDataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_UserEntityInstanceData] PRIMARY KEY NONCLUSTERED ([UserEntityInstanceDataId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_userentityinstancedata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [userentityinstancedata_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UserEntityInstanceDataBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UserEntityInstanceDataBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [fndx_Security]
    ON [dbo].[UserEntityInstanceDataBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserEntityInstanceDataBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_ObjectIdTypeCode]
    ON [dbo].[UserEntityInstanceDataBase]([ObjectId] ASC, [ObjectTypeCode] ASC, [OwnerId] ASC, [OwnerIdType] ASC) WITH (FILLFACTOR = 80);

