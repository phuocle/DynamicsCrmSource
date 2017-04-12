CREATE TABLE [dbo].[ImportEntityMappingBase]
(
[ImportMapId] [uniqueidentifier] NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_ImportEntityMappingBase_StatusCode] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ImportEntityMappingId] [uniqueidentifier] NOT NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_ImportEntityMappingBase_StateCode] DEFAULT ((0)),
[ModifiedOn] [datetime] NOT NULL,
[CreatedOn] [datetime] NOT NULL,
[DeDupe] [int] NOT NULL CONSTRAINT [DF_ImportEntityMappingBase_DeDupe] DEFAULT ((1)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ProcessCode] [int] NOT NULL CONSTRAINT [DF_ImportEntityMappingBase_ProcessCode] DEFAULT ((1)),
[TargetEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[SourceEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportEntityMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_ImportEntityMapping] PRIMARY KEY CLUSTERED  ([ImportEntityMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportEntityMappingBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportEntityMappingBase] ADD CONSTRAINT [ImportEntityMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId])
GO
