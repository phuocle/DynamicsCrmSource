CREATE TABLE [dbo].[ImportEntityMappingBase] (
    [ImportMapId]                 UNIQUEIDENTIFIER NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_ImportEntityMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [StatusCode]                  INT              CONSTRAINT [DF_ImportEntityMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [ComponentState]              INT              CONSTRAINT [DF_ImportEntityMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ImportEntityMappingId]       UNIQUEIDENTIFIER NOT NULL,
    [ImportEntityMappingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ImportEntityMappingBase_ImportEntityMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOn]                  DATETIME         NOT NULL,
    [CreatedOn]                   DATETIME         NOT NULL,
    [DeDupe]                      INT              CONSTRAINT [DF_ImportEntityMappingBase_DeDupe] DEFAULT ((1)) NOT NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ProcessCode]                 INT              CONSTRAINT [DF_ImportEntityMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [StateCode]                   INT              CONSTRAINT [DF_ImportEntityMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [TargetEntityName]            NVARCHAR (160)   NULL,
    [IntroducedVersion]           NVARCHAR (48)    NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [SourceEntityName]            NVARCHAR (160)   NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_ImportEntityMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_ImportEntityMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportEntityMapping] PRIMARY KEY CLUSTERED ([ImportEntityMappingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ImportEntityMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportEntityMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ImportEntityMappingBase]([ImportEntityMappingId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_886473B73B944496B2197B377A5AC0A2]
    ON [dbo].[ImportEntityMappingBase]([SourceEntityName] ASC, [ImportEntityMappingId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_886473B73B944496B2197B377A5AC0A2]
    ON [dbo].[ImportEntityMappingBase]([ImportEntityMappingId] ASC)
    INCLUDE([SourceEntityName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SourceEntityName]
    ON [dbo].[ImportEntityMappingBase]([SourceEntityName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_886473B73B944496B2197B377A5AC0A2]
    ON [dbo].[ImportEntityMappingBase]([ImportEntityMappingId] ASC)
    INCLUDE([SourceEntityName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

