CREATE TABLE [dbo].[LookUpMappingBase]
(
[LookUpEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[LookUpSourceCode] [int] NOT NULL CONSTRAINT [DF_LookUpMappingBase_LookUpSourceCode] DEFAULT ((0)),
[ColumnMappingId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NOT NULL,
[LookUpMappingId] [uniqueidentifier] NOT NULL,
[TransformationParameterMappingId] [uniqueidentifier] NULL,
[ProcessCode] [int] NOT NULL CONSTRAINT [DF_LookUpMappingBase_ProcessCode] DEFAULT ((1)),
[StatusCode] [int] NOT NULL CONSTRAINT [DF_LookUpMappingBase_StatusCode] DEFAULT ((0)),
[StateCode] [int] NOT NULL CONSTRAINT [DF_LookUpMappingBase_StateCode] DEFAULT ((0)),
[CreatedOn] [datetime] NOT NULL,
[LookUpAttributeName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LookUpMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_lookupmapping] PRIMARY KEY CLUSTERED  ([LookUpMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[LookUpMappingBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LookUpMappingBase] ADD CONSTRAINT [LookUpMapping_ColumnMapping] FOREIGN KEY ([ColumnMappingId]) REFERENCES [dbo].[ColumnMappingBase] ([ColumnMappingId])
GO
ALTER TABLE [dbo].[LookUpMappingBase] ADD CONSTRAINT [LookUpMapping_TransformationParameterMapping] FOREIGN KEY ([TransformationParameterMappingId]) REFERENCES [dbo].[TransformationParameterMappingBase] ([TransformationParameterMappingId])
GO
