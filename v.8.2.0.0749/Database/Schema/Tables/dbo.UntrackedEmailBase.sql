CREATE TABLE [dbo].[UntrackedEmailBase]
(
[ActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UntrackedEmailBase] ADD CONSTRAINT [PK_UntrackedEmailBase] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UntrackedEmailBase] ADD CONSTRAINT [FK_UntrackedEmailBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
