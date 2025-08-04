CREATE TABLE [dbo].[ClientUpdate] (
    [ClientUpdateId] UNIQUEIDENTIFIER CONSTRAINT [DF_ClientUpdate_ClientUpdateId] DEFAULT (newid()) NOT NULL,
    [Description]    NVARCHAR (512)   NULL,
    [VersionNumber]  ROWVERSION       NULL,
    [SqlScript]      NVARCHAR (MAX)   NULL,
    [CreatedOn]      DATETIME         CONSTRAINT [DF_ClientUpdate_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    [WhenExecute]    INT              CONSTRAINT [DF_ClientUpdate_WhenExecute] DEFAULT ((3)) NOT NULL,
    [WasExecuted]    BIT              CONSTRAINT [DF_ClientUpdate_WasExecuted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ClientUpdate] PRIMARY KEY CLUSTERED ([ClientUpdateId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ClientUpdate]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

