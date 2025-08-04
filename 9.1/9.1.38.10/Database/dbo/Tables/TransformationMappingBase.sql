CREATE TABLE [dbo].[TransformationMappingBase] (
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [SolutionId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_TransformationMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [StatusCode]                    INT              CONSTRAINT [DF_TransformationMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ImportMapId]                   UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                 DATETIME         CONSTRAINT [DF_TransformationMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ComponentState]                INT              CONSTRAINT [DF_TransformationMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [TransformationMappingId]       UNIQUEIDENTIFIER NOT NULL,
    [TransformationTypeName]        NVARCHAR (256)   NULL,
    [SourceEntityName]              NVARCHAR (160)   NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [TransformationMappingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_TransformationMappingBase_TransformationMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                     BIT              CONSTRAINT [DF_TransformationMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]             NVARCHAR (48)    NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [TargetEntityName]              NVARCHAR (160)   NULL,
    [ProcessCode]                   INT              CONSTRAINT [DF_TransformationMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [StateCode]                     INT              CONSTRAINT [DF_TransformationMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_TransformationMapping] PRIMARY KEY CLUSTERED ([TransformationMappingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TransformationMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[TransformationMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[TransformationMappingBase]([TransformationMappingId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

