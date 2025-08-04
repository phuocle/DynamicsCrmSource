CREATE TABLE [dbo].[LookUpMappingBase] (
    [LookUpEntityName]                 NVARCHAR (160)   NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [LookUpSourceCode]                 INT              CONSTRAINT [DF_LookUpMappingBase_LookUpSourceCode] DEFAULT ((0)) NOT NULL,
    [ColumnMappingId]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NOT NULL,
    [LookUpMappingId]                  UNIQUEIDENTIFIER NOT NULL,
    [TransformationParameterMappingId] UNIQUEIDENTIFIER NULL,
    [ProcessCode]                      INT              CONSTRAINT [DF_LookUpMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [StatusCode]                       INT              CONSTRAINT [DF_LookUpMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [StateCode]                        INT              CONSTRAINT [DF_LookUpMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                        DATETIME         NOT NULL,
    [LookUpAttributeName]              NVARCHAR (160)   NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_lookupmapping] PRIMARY KEY CLUSTERED ([LookUpMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [LookUpMapping_ColumnMapping] FOREIGN KEY ([ColumnMappingId]) REFERENCES [dbo].[ColumnMappingBase] ([ColumnMappingId]) NOT FOR REPLICATION,
    CONSTRAINT [LookUpMapping_TransformationParameterMapping] FOREIGN KEY ([TransformationParameterMappingId]) REFERENCES [dbo].[TransformationParameterMappingBase] ([TransformationParameterMappingId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[LookUpMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

