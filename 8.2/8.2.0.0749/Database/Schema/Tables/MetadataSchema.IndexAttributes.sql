CREATE TABLE [MetadataSchema].[IndexAttributes]
(
[IndexAttributeId] [uniqueidentifier] NOT NULL,
[AttributeId] [uniqueidentifier] NULL,
[IndexId] [uniqueidentifier] NULL,
[IndexOrder] [int] NULL,
[IsIncludeAttribute] [bit] NOT NULL CONSTRAINT [DF__IndexAttr__IsInc__6CEE02BA] DEFAULT ((0)),
[SortDescending] [bit] NOT NULL CONSTRAINT [DF__IndexAttr__SortD__3BC186D1] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[State] [int] NOT NULL CONSTRAINT [DF_IndexAttributes_State] DEFAULT ((0)),
[IsSystemManaged] [bit] NOT NULL CONSTRAINT [DF_IndexAttributes_SystemManaged] DEFAULT ((0)),
[IsQuickFindManaged] [bit] NOT NULL CONSTRAINT [DF_IndexAttributes_QuickFindManaged] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[IndexAttributes] ADD CONSTRAINT [PK__IndexAttributes__3B8BB150] PRIMARY KEY CLUSTERED  ([IndexAttributeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AttributeId] ON [MetadataSchema].[IndexAttributes] ([AttributeId]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[IndexAttributes] ADD CONSTRAINT [UQ_IndexIdAttributeId] UNIQUE NONCLUSTERED  ([IndexId], [AttributeId]) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[IndexAttributes] ADD CONSTRAINT [indexattributes_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[IndexAttributes] ADD CONSTRAINT [indexattributes_entityindex] FOREIGN KEY ([IndexId]) REFERENCES [MetadataSchema].[EntityIndex] ([IndexId])
GO
