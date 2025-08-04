CREATE TABLE [dbo].[ColumnMappingBase] (
    [ColumnMappingId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]           UNIQUEIDENTIFIER NULL,
    [TargetEntityName]    NVARCHAR (160)   NULL,
    [StatusCode]          INT              CONSTRAINT [DF_ColumnMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ProcessCode]         INT              CONSTRAINT [DF_ColumnMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [ModifiedOn]          DATETIME         NOT NULL,
    [TargetAttributeName] NVARCHAR (160)   NULL,
    [CreatedOn]           DATETIME         NOT NULL,
    [ImportMapId]         UNIQUEIDENTIFIER NULL,
    [SourceAttributeName] NVARCHAR (160)   NULL,
    [SourceEntityName]    NVARCHAR (160)   NULL,
    [ModifiedBy]          UNIQUEIDENTIFIER NULL,
    [StateCode]           INT              CONSTRAINT [DF_ColumnMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ColumnMapping] PRIMARY KEY CLUSTERED ([ColumnMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [ColumnMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ColumnMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_ColumnMapping_ImportMap]
    ON [dbo].[ColumnMappingBase]([ImportMapId] ASC) WHERE ([ImportMapId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SourceAttributeName]
    ON [dbo].[ColumnMappingBase]([SourceAttributeName] ASC) WITH (FILLFACTOR = 80);

