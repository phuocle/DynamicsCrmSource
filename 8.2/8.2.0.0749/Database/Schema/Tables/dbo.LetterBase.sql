CREATE TABLE [dbo].[LetterBase]
(
[ActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LetterBase] ADD CONSTRAINT [PK_LetterBase] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LetterBase] WITH NOCHECK ADD CONSTRAINT [FK_LetterBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
GO
