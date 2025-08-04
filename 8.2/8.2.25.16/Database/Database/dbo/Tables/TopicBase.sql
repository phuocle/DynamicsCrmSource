CREATE TABLE [dbo].[TopicBase] (
    [IncidentId] UNIQUEIDENTIFIER NOT NULL,
    [KeyPhrase]  NVARCHAR (512)   NULL,
    [TopicId]    UNIQUEIDENTIFIER NOT NULL,
    [Score]      INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Topic] PRIMARY KEY CLUSTERED ([TopicId] ASC) WITH (FILLFACTOR = 80)
);

