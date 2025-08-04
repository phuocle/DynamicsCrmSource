CREATE TABLE [dbo].[QueueMembership] (
    [QueueId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]     ROWVERSION       NULL,
    [QueueMembershipId] UNIQUEIDENTIFIER CONSTRAINT [DF_QueueMembership_QueueMembershipId] DEFAULT (newid()) NOT NULL,
    [SystemUserId]      UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_QueueMembership] PRIMARY KEY CLUSTERED ([QueueMembershipId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [queue_queue_membership] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]) NOT FOR REPLICATION,
    CONSTRAINT [system_user_queue_membership] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_QueueMembership] UNIQUE NONCLUSTERED ([QueueId] ASC, [SystemUserId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_queue_membership]
    ON [dbo].[QueueMembership]([SystemUserId] ASC) WITH (FILLFACTOR = 80);

