CREATE TABLE [dbo].[EntityRelationshipIds] (
    [EntityRelationshipId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [XPKEntityRelationshipIds] PRIMARY KEY CLUSTERED ([EntityRelationshipId] ASC)
);


GO
ALTER TABLE [dbo].[EntityRelationshipIds] SET (LOCK_ESCALATION = DISABLE);

