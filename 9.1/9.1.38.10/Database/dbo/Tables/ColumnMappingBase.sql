CREATE TABLE [dbo].[ColumnMappingBase] (
    [StateCode]             INT              CONSTRAINT [DF_ColumnMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [SourceEntityName]      NVARCHAR (160)   NULL,
    [CreatedOn]             DATETIME         NOT NULL,
    [ImportMapId]           UNIQUEIDENTIFIER NULL,
    [ProcessCode]           INT              CONSTRAINT [DF_ColumnMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [ModifiedOn]            DATETIME         NOT NULL,
    [SourceAttributeName]   NVARCHAR (160)   NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_ColumnMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ColumnMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [StatusCode]            INT              CONSTRAINT [DF_ColumnMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [TargetEntityName]      NVARCHAR (160)   NULL,
    [IntroducedVersion]     NVARCHAR (48)    NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_ColumnMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ColumnMappingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ColumnMappingBase_ColumnMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_ColumnMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ColumnMappingId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [TargetAttributeName]   NVARCHAR (160)   NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ColumnMapping] PRIMARY KEY CLUSTERED ([ColumnMappingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ColumnMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ColumnMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_ColumnMapping_ImportMap]
    ON [dbo].[ColumnMappingBase]([ImportMapId] ASC) WHERE ([ImportMapId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_columnmappingidunique]
    ON [dbo].[ColumnMappingBase]([ColumnMappingIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ColumnMappingBase]([ColumnMappingId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SourceAttributeName]
    ON [dbo].[ColumnMappingBase]([SourceAttributeName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A7CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[ColumnMappingBase]([ColumnMappingId] ASC)
    INCLUDE([SourceAttributeName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A7CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[ColumnMappingBase]([ColumnMappingId] ASC)
    INCLUDE([SourceAttributeName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A7CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[ColumnMappingBase]([SourceAttributeName] ASC, [ColumnMappingId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

