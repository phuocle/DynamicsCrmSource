CREATE TABLE [dbo].[EntityKeyIds]
(
[EntityKeyId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntityKeyIds] ADD CONSTRAINT [XPKEntityKeyIds] PRIMARY KEY CLUSTERED  ([EntityKeyId]) ON [PRIMARY]
GO
