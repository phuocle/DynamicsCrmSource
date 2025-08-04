CREATE TABLE [dbo].[TransformationParameterMappingBase] (
    [ParameterArrayIndex]              INT              NULL,
    [ParameterTypeCode]                INT              NULL,
    [TransformationParameterMappingId] UNIQUEIDENTIFIER NOT NULL,
    [TransformationMappingId]          UNIQUEIDENTIFIER NULL,
    [CreatedOn]                        DATETIME         NOT NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [DataTypeCode]                     INT              CONSTRAINT [DF_TransformationParameterMappingBase_DataTypeCode] DEFAULT ((0)) NULL,
    [Data]                             NVARCHAR (500)   NULL,
    [ModifiedOn]                       DATETIME         NOT NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [ParameterSequence]                INT              NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_TransformationParameterMapping] PRIMARY KEY CLUSTERED ([TransformationParameterMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransformationParameterMapping_TransformationMapping] FOREIGN KEY ([TransformationMappingId]) REFERENCES [dbo].[TransformationMappingBase] ([TransformationMappingId]) NOT FOR REPLICATION
);

