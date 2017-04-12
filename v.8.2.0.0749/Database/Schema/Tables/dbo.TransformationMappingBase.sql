CREATE TABLE [dbo].[TransformationMappingBase]
(
[ImportMapId] [uniqueidentifier] NULL,
[TransformationTypeName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ProcessCode] [int] NOT NULL CONSTRAINT [DF_TransformationMappingBase_ProcessCode] DEFAULT ((1)),
[SourceEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_TransformationMappingBase_StatusCode] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TransformationMappingId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_TransformationMappingBase_StateCode] DEFAULT ((0)),
[TargetEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TransformationMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_TransformationMapping] PRIMARY KEY CLUSTERED  ([TransformationMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[TransformationMappingBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TransformationMappingBase] ADD CONSTRAINT [TransformationMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId])
GO
