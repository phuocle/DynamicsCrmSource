CREATE TABLE [MetadataSchema].[FailedIndexCreation] (
    [IndexId]          UNIQUEIDENTIFIER NOT NULL,
    [NumberOfAttempts] INT              NULL,
    [LastAttemptTime]  DATETIME         NULL
);


GO
ALTER TABLE [MetadataSchema].[FailedIndexCreation] SET (LOCK_ESCALATION = DISABLE);

