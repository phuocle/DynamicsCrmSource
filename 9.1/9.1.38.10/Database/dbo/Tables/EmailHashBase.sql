CREATE TABLE [dbo].[EmailHashBase] (
    [HashType]      INT              NOT NULL,
    [ActivityId]    UNIQUEIDENTIFIER NULL,
    [EmailHashId]   UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber] ROWVERSION       NULL,
    [Hash]          INT              NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_EmailHash] PRIMARY KEY CLUSTERED ([EmailHashId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activity_pointer_email_hash] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]),
    CONSTRAINT [email_email_hash] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
ALTER TABLE [dbo].[EmailHashBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EmailHashBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_email_hash_hash_hashtype]
    ON [dbo].[EmailHashBase]([Hash] ASC, [HashType] ASC)
    INCLUDE([ActivityId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_activity_pointer_email_hash]
    ON [dbo].[EmailHashBase]([ActivityId] ASC) WHERE ([ActivityId] IS NOT NULL) WITH (FILLFACTOR = 80);

