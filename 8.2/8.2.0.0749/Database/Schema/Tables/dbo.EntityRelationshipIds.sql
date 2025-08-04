CREATE TABLE [dbo].[EntityRelationshipIds]
(
[EntityRelationshipId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntityRelationshipIds] ADD CONSTRAINT [XPKEntityRelationshipIds] PRIMARY KEY CLUSTERED  ([EntityRelationshipId]) ON [PRIMARY]
GO
