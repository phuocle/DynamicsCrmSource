CREATE TABLE [dbo].[TransformationMappingBase] (
    [ImportMapId]             UNIQUEIDENTIFIER NULL,
    [TransformationTypeName]  NVARCHAR (256)   NULL,
    [ProcessCode]             INT              CONSTRAINT [DF_TransformationMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [SourceEntityName]        NVARCHAR (160)   NULL,
    [StatusCode]              INT              CONSTRAINT [DF_TransformationMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [TransformationMappingId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [StateCode]               INT              CONSTRAINT [DF_TransformationMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [TargetEntityName]        NVARCHAR (160)   NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_TransformationMapping] PRIMARY KEY CLUSTERED ([TransformationMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransformationMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[TransformationMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

