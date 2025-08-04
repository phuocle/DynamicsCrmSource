CREATE TABLE [dbo].[ProcessStageBase]
(
[ProcessId] [uniqueidentifier] NOT NULL,
[StageName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[StageCategory] [int] NULL,
[ProcessStageId] [uniqueidentifier] NOT NULL,
[PrimaryEntityTypeCode] [int] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ClientData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProcessStageBase] ADD CONSTRAINT [cndx_PrimaryKey_ProcessStage] PRIMARY KEY CLUSTERED  ([ProcessStageId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_ProcessStage_ProcessId] ON [dbo].[ProcessStageBase] ([ProcessId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ProcessStageBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
