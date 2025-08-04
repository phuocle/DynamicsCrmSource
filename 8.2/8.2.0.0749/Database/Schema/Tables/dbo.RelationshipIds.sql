CREATE TABLE [dbo].[RelationshipIds]
(
[RelationshipId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelationshipIds] ADD CONSTRAINT [XPKRelationshipIds] PRIMARY KEY CLUSTERED  ([RelationshipId]) ON [PRIMARY]
GO
