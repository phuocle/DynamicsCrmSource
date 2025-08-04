CREATE TABLE [dbo].[TransformationParameterMappingBase]
(
[ParameterArrayIndex] [int] NULL,
[ParameterTypeCode] [int] NULL,
[TransformationParameterMappingId] [uniqueidentifier] NOT NULL,
[TransformationMappingId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[DataTypeCode] [int] NULL CONSTRAINT [DF_TransformationParameterMappingBase_DataTypeCode] DEFAULT ((0)),
[Data] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ParameterSequence] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TransformationParameterMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_TransformationParameterMapping] PRIMARY KEY CLUSTERED  ([TransformationParameterMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TransformationParameterMappingBase] ADD CONSTRAINT [TransformationParameterMapping_TransformationMapping] FOREIGN KEY ([TransformationMappingId]) REFERENCES [dbo].[TransformationMappingBase] ([TransformationMappingId])
GO
