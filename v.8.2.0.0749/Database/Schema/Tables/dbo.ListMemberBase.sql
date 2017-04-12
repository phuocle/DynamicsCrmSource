CREATE TABLE [dbo].[ListMemberBase]
(
[EntityType] [int] NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[EntityId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ListId] [uniqueidentifier] NOT NULL,
[ListMemberId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[EntityIdTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ListMemberBase] ADD CONSTRAINT [ndx_PrimaryKey_ListMember] PRIMARY KEY NONCLUSTERED  ([ListMemberId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Account_ListMember] ON [dbo].[ListMemberBase] ([EntityId], [EntityType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [cndx_ListMember] ON [dbo].[ListMemberBase] ([ListId], [EntityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ListMemberBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ListMemberBase] ADD CONSTRAINT [list_member] FOREIGN KEY ([ListId]) REFERENCES [dbo].[ListBase] ([ListId])
GO
