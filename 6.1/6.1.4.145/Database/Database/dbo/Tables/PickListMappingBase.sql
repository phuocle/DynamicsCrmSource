CREATE TABLE [dbo].[PickListMappingBase] (
    [StatusCode]         INT              CONSTRAINT [DF_PickListMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [PickListMappingId]  UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]         DATETIME         NOT NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [TargetValue]        INT              NULL,
    [ProcessCode]        INT              CONSTRAINT [DF_PickListMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [ColumnMappingId]    UNIQUEIDENTIFIER NULL,
    [SourceValue]        NVARCHAR (MAX)   NULL,
    [CreatedOn]          DATETIME         NOT NULL,
    [StateCode]          INT              CONSTRAINT [DF_PickListMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_PickListMapping] PRIMARY KEY CLUSTERED ([PickListMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [PickListMapping_ColumnMapping] FOREIGN KEY ([ColumnMappingId]) REFERENCES [dbo].[ColumnMappingBase] ([ColumnMappingId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_PickListMapping_ColumnMapping]
    ON [dbo].[PickListMappingBase]([ColumnMappingId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[PickListMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

