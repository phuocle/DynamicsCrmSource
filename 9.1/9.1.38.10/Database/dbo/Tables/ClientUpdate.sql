CREATE TABLE [dbo].[ClientUpdate] (
    [WasExecuted]    BIT              CONSTRAINT [DF_ClientUpdate_WasExecuted] DEFAULT ((0)) NOT NULL,
    [CreatedOn]      DATETIME         CONSTRAINT [DF_ClientUpdate_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    [Description]    NVARCHAR (512)   NULL,
    [SqlScript]      NVARCHAR (MAX)   NULL,
    [WhenExecute]    INT              CONSTRAINT [DF_ClientUpdate_WhenExecute] DEFAULT ((3)) NOT NULL,
    [ClientUpdateId] UNIQUEIDENTIFIER CONSTRAINT [DF_ClientUpdate_ClientUpdateId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]  ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_ClientUpdate] PRIMARY KEY CLUSTERED ([ClientUpdateId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ClientUpdate]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ClientUpdate] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ClientUpdate]([VersionNumber] ASC) WITH (FILLFACTOR = 100);

