CREATE TABLE [dbo].[ListMemberBase] (
    [ListMemberId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [EntityId]                  UNIQUEIDENTIFIER NOT NULL,
    [EntityType]                INT              NOT NULL,
    [ListId]                    UNIQUEIDENTIFIER NOT NULL,
    [EntityIdTypeCode]          INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_ListMember] PRIMARY KEY NONCLUSTERED ([ListMemberId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [list_member] FOREIGN KEY ([ListId]) REFERENCES [dbo].[ListBase] ([ListId])
);


GO
ALTER TABLE [dbo].[ListMemberBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_ListMember]
    ON [dbo].[ListMemberBase]([ListId] ASC, [EntityId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ListMemberBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Account_ListMember]
    ON [dbo].[ListMemberBase]([EntityId] ASC, [EntityType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

