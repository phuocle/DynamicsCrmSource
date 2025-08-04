CREATE TABLE [dbo].[MetadataTimestamp] (
    [VersionNumber] ROWVERSION NOT NULL,
    [CreatedOn]     DATETIME   NULL,
    CONSTRAINT [MetadataTimestamp_PK] PRIMARY KEY CLUSTERED ([VersionNumber] ASC)
);


GO
ALTER TABLE [dbo].[MetadataTimestamp] SET (LOCK_ESCALATION = DISABLE);

