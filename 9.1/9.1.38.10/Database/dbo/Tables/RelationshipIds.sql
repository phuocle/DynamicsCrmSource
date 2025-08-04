CREATE TABLE [dbo].[RelationshipIds] (
    [RelationshipId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [XPKRelationshipIds] PRIMARY KEY CLUSTERED ([RelationshipId] ASC)
);


GO
ALTER TABLE [dbo].[RelationshipIds] SET (LOCK_ESCALATION = DISABLE);

