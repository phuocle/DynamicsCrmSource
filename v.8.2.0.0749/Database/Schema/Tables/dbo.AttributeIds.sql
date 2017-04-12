CREATE TABLE [dbo].[AttributeIds]
(
[AttributeId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AttributeIds] ADD CONSTRAINT [XPKAttributeIds] PRIMARY KEY CLUSTERED  ([AttributeId]) ON [PRIMARY]
GO
