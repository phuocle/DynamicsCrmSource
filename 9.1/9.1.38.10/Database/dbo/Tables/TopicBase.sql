CREATE TABLE [dbo].[TopicBase] (
    [TopicId]                   UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [IncidentId]                UNIQUEIDENTIFIER NOT NULL,
    [KeyPhrase]                 NVARCHAR (512)   NULL,
    [Score]                     INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Topic] PRIMARY KEY CLUSTERED ([TopicId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TopicBase] SET (LOCK_ESCALATION = DISABLE);

