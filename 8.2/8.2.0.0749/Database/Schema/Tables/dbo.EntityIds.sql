CREATE TABLE [dbo].[EntityIds]
(
[EntityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntityIds] ADD CONSTRAINT [XPKEntityIds] PRIMARY KEY CLUSTERED  ([EntityId]) ON [PRIMARY]
GO
