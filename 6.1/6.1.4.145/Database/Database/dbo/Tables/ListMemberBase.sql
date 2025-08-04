CREATE TABLE [dbo].[ListMemberBase] (
    [EntityType]         INT              NOT NULL,
    [CreatedOn]          DATETIME         NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [EntityId]           UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ListId]             UNIQUEIDENTIFIER NOT NULL,
    [ListMemberId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]         DATETIME         NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [EntityIdTypeCode]   INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_ListMember] PRIMARY KEY NONCLUSTERED ([ListMemberId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [list_member] FOREIGN KEY ([ListId]) REFERENCES [dbo].[ListBase] ([ListId]) NOT FOR REPLICATION
);


GO
CREATE CLUSTERED INDEX [cndx_ListMember]
    ON [dbo].[ListMemberBase]([ListId] ASC, [EntityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ListMemberBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Account_ListMember]
    ON [dbo].[ListMemberBase]([EntityId] ASC, [EntityType] ASC) WITH (FILLFACTOR = 80);

