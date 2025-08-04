CREATE TABLE [dbo].[SocialActivityBase] (
    [ActivityId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SocialActivityBase] PRIMARY KEY CLUSTERED ([ActivityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FK_SocialActivityBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
);

