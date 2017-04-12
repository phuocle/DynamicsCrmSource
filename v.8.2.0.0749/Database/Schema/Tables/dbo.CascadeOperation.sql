CREATE TABLE [dbo].[CascadeOperation]
(
[CascadeLinkType] [int] NOT NULL,
[IsDeleteEntitySchema] [bit] NULL CONSTRAINT [DF__CascadeOp__IsDel__006E18DE] DEFAULT ((0)),
[HasExtraConditions] [bit] NULL CONSTRAINT [DF__CascadeOp__HasEx__01623D17] DEFAULT ((0)),
[ReferencedEntityObjectTypeCode] [int] NOT NULL,
[ReferencingEntityObjectTypeCode] [int] NOT NULL,
[ReferencingAttributeColumnNumber] [int] NOT NULL,
[CascadeStatement] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CascadeOperation] ADD CONSTRAINT [PK__CascadeO__F37E259D2A19845B] PRIMARY KEY CLUSTERED  ([ReferencedEntityObjectTypeCode], [CascadeLinkType], [ReferencingEntityObjectTypeCode], [ReferencingAttributeColumnNumber]) ON [PRIMARY]
GO
