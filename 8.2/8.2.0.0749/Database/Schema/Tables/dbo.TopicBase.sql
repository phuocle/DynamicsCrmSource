CREATE TABLE [dbo].[TopicBase]
(
[IncidentId] [uniqueidentifier] NOT NULL,
[KeyPhrase] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL,
[TopicId] [uniqueidentifier] NOT NULL,
[Score] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicBase] ADD CONSTRAINT [cndx_PrimaryKey_Topic] PRIMARY KEY CLUSTERED  ([TopicId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
