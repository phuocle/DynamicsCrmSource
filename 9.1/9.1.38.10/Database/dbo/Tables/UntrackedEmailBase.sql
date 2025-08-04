CREATE TABLE [dbo].[UntrackedEmailBase] (
    [ActivityId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_UntrackedEmailBase] PRIMARY KEY CLUSTERED ([ActivityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FK_UntrackedEmailBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
ALTER TABLE [dbo].[UntrackedEmailBase] SET (LOCK_ESCALATION = DISABLE);

