CREATE TABLE [dbo].[OpportunityCloseBase] (
    [ActivityId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_OpportunityCloseBase] PRIMARY KEY CLUSTERED ([ActivityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FK_OpportunityCloseBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
ALTER TABLE [dbo].[OpportunityCloseBase] SET (LOCK_ESCALATION = DISABLE);

