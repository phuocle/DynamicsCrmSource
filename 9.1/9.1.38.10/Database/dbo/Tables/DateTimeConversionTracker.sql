CREATE TABLE [dbo].[DateTimeConversionTracker] (
    [EntityId]    UNIQUEIDENTIFIER NOT NULL,
    [AttributeId] UNIQUEIDENTIFIER NOT NULL,
    [Status]      INT              NULL,
    [CreatedOn]   DATETIME         NULL,
    [ModifiedOn]  DATETIME         NULL,
    CONSTRAINT [DateTimeConversionTracker_PK] PRIMARY KEY CLUSTERED ([EntityId] ASC, [AttributeId] ASC)
);


GO
ALTER TABLE [dbo].[DateTimeConversionTracker] SET (LOCK_ESCALATION = DISABLE);

