CREATE TABLE [dbo].[ResourceGroupExpansionBase]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[ResourceGroupExpansionId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[ItemId] [uniqueidentifier] NOT NULL,
[MethodCode] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceGroupExpansionBase] ADD CONSTRAINT [cndx_PrimaryKey_ResourceGroupExpansion] PRIMARY KEY CLUSTERED  ([ResourceGroupExpansionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ItemIdMethodCode_ResourceGroupExpansion] ON [dbo].[ResourceGroupExpansionBase] ([ItemId], [MethodCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ObjectIdMethodCode_ResourceGroupExpansion] ON [dbo].[ResourceGroupExpansionBase] ([ObjectId], [MethodCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
