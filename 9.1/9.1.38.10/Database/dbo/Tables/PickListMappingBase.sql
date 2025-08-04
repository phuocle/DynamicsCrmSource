CREATE TABLE [dbo].[PickListMappingBase] (
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ProcessCode]             INT              CONSTRAINT [DF_PickListMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_PickListMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ColumnMappingId]         UNIQUEIDENTIFIER NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_PickListMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IntroducedVersion]       NVARCHAR (48)    NULL,
    [ModifiedOn]              DATETIME         NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [PickListMappingId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]               DATETIME         NOT NULL,
    [StateCode]               INT              CONSTRAINT [DF_PickListMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [TargetValue]             INT              NULL,
    [ComponentState]          INT              CONSTRAINT [DF_PickListMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [PickListMappingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_PickListMappingBase_PickListMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_PickListMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [StatusCode]              INT              CONSTRAINT [DF_PickListMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [SourceValue]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_PickListMapping] PRIMARY KEY CLUSTERED ([PickListMappingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PickListMappingBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[PickListMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[PickListMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_PickListMapping_ColumnMapping]
    ON [dbo].[PickListMappingBase]([ColumnMappingId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[PickListMappingBase]([PickListMappingId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

