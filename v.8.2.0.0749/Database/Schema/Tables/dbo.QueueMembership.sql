CREATE TABLE [dbo].[QueueMembership]
(
[QueueId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[QueueMembershipId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_QueueMembership_QueueMembershipId] DEFAULT (newid()),
[SystemUserId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueMembership] ADD CONSTRAINT [cndx_PrimaryKey_QueueMembership] PRIMARY KEY CLUSTERED  ([QueueMembershipId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueMembership] ADD CONSTRAINT [UQ_QueueMembership] UNIQUE NONCLUSTERED  ([QueueId], [SystemUserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_queue_membership] ON [dbo].[QueueMembership] ([SystemUserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QueueMembership] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueMembership] ADD CONSTRAINT [queue_queue_membership] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[QueueMembership] ADD CONSTRAINT [system_user_queue_membership] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
