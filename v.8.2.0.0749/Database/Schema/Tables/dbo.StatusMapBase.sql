CREATE TABLE [dbo].[StatusMapBase]
(
[ObjectTypeCode] [int] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[State] [int] NOT NULL,
[Status] [int] NOT NULL,
[IsDefault] [bit] NULL,
[StatusMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_StatusMap_StatusMapId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[StatusMapBase] ADD CONSTRAINT [cndx_PrimaryKey_StatusMap] PRIMARY KEY CLUSTERED  ([StatusMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[StatusMapBase] ADD CONSTRAINT [UQ_StatusMap] UNIQUE NONCLUSTERED  ([ObjectTypeCode], [State], [Status]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[StatusMapBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
