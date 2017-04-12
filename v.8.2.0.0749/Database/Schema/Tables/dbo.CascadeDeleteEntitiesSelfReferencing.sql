CREATE TABLE [dbo].[CascadeDeleteEntitiesSelfReferencing]
(
[ObjectTypeCode] [int] NOT NULL,
[ColumnNumber] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CascadeDeleteEntitiesSelfReferencing] ADD CONSTRAINT [PK_CascadeDeleteEntitiesSelfReferencing] PRIMARY KEY CLUSTERED  ([ObjectTypeCode], [ColumnNumber]) ON [PRIMARY]
GO
