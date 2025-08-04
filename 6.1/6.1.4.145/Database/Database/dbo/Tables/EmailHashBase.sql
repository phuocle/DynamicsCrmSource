CREATE TABLE [dbo].[EmailHashBase] (
    [HashType]      INT              NOT NULL,
    [Hash]          INT              NOT NULL,
    [EmailHashId]   UNIQUEIDENTIFIER NOT NULL,
    [ActivityId]    UNIQUEIDENTIFIER NULL,
    [VersionNumber] ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_EmailHash] PRIMARY KEY CLUSTERED ([EmailHashId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activity_pointer_email_hash] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION,
    CONSTRAINT [email_email_hash] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_activity_pointer_email_hash]
    ON [dbo].[EmailHashBase]([ActivityId] ASC) WHERE ([ActivityId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_email_hash_hash_hashtype]
    ON [dbo].[EmailHashBase]([Hash] ASC, [HashType] ASC)
    INCLUDE([ActivityId]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EmailHashBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

