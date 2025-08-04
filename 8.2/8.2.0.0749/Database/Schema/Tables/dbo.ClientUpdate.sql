CREATE TABLE [dbo].[ClientUpdate]
(
[ClientUpdateId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ClientUpdate_ClientUpdateId] DEFAULT (newid()),
[Description] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[SqlScript] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL CONSTRAINT [DF_ClientUpdate_CreatedOn] DEFAULT (getutcdate()),
[WhenExecute] [int] NOT NULL CONSTRAINT [DF_ClientUpdate_WhenExecute] DEFAULT ((3)),
[WasExecuted] [bit] NOT NULL CONSTRAINT [DF_ClientUpdate_WasExecuted] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ClientUpdate] ADD CONSTRAINT [cndx_PrimaryKey_ClientUpdate] PRIMARY KEY CLUSTERED  ([ClientUpdateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ClientUpdate] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
