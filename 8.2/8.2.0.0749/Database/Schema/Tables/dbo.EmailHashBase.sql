CREATE TABLE [dbo].[EmailHashBase]
(
[HashType] [int] NOT NULL,
[Hash] [int] NOT NULL,
[EmailHashId] [uniqueidentifier] NOT NULL,
[ActivityId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailHashBase] ADD CONSTRAINT [cndx_PrimaryKey_EmailHash] PRIMARY KEY CLUSTERED  ([EmailHashId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_activity_pointer_email_hash] ON [dbo].[EmailHashBase] ([ActivityId]) WHERE ([ActivityId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_email_hash_hash_hashtype] ON [dbo].[EmailHashBase] ([Hash], [HashType]) INCLUDE ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EmailHashBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailHashBase] ADD CONSTRAINT [activity_pointer_email_hash] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[EmailHashBase] ADD CONSTRAINT [email_email_hash] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
