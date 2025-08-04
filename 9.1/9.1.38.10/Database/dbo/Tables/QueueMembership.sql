CREATE TABLE [dbo].[QueueMembership] (
    [QueueId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]     ROWVERSION       NULL,
    [SystemUserId]      UNIQUEIDENTIFIER NOT NULL,
    [QueueMembershipId] UNIQUEIDENTIFIER CONSTRAINT [DF_QueueMembership_QueueMembershipId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_QueueMembership] PRIMARY KEY CLUSTERED ([QueueMembershipId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [queue_queue_membership] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]),
    CONSTRAINT [system_user_queue_membership] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [UQ_QueueMembership] UNIQUE NONCLUSTERED ([QueueId] ASC, [SystemUserId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[QueueMembership] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[QueueMembership]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_queue_membership]
    ON [dbo].[QueueMembership]([SystemUserId] ASC) WITH (FILLFACTOR = 80);

