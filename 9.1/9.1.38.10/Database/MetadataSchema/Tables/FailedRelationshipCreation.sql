CREATE TABLE [MetadataSchema].[FailedRelationshipCreation] (
    [RelationshipId]   UNIQUEIDENTIFIER NOT NULL,
    [NumberOfAttempts] INT              NULL,
    [LastAttemptTime]  DATETIME         NULL
);

