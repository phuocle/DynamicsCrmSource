CREATE TABLE [dbo].[EntityDataSourceBase] (
    [EntityDataSourceIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_EntityDataSourceBase_EntityDataSourceIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_EntityDataSourceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ConnectionDefinition]        NVARCHAR (2000)  NULL,
    [IntroducedVersion]           NVARCHAR (48)    NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [ConnectionDefinitionSecrets] NVARCHAR (2000)  NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_EntityDataSourceBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]              BIT              CONSTRAINT [DF_EntityDataSourceBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [EntityDataSourceId]          UNIQUEIDENTIFIER NOT NULL,
    [Description]                 NVARCHAR (1000)  NULL,
    [EntityName]                  NVARCHAR (160)   NULL,
    [EntityDataProviderId]        UNIQUEIDENTIFIER NULL,
    [ComponentState]              INT              CONSTRAINT [DF_EntityDataSourceBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [Name]                        NVARCHAR (256)   NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_EntityDataSourceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_EntityDataSource] PRIMARY KEY CLUSTERED ([EntityDataSourceId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[EntityDataSourceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_entitydataproviderid]
    ON [dbo].[EntityDataSourceBase]([EntityDataProviderId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntityDataSourceBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[EntityDataSourceBase]([EntityDataSourceId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_45F9121C1ADD403E996DECA6E8EEF473]
    ON [dbo].[EntityDataSourceBase]([Name] ASC, [EntityDataSourceId] ASC)
    INCLUDE([EntityDataProviderId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_45F9121C1ADD403E996DECA6E8EEF473]
    ON [dbo].[EntityDataSourceBase]([EntityDataSourceId] ASC)
    INCLUDE([Name], [EntityDataProviderId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_45F9121C1ADD403E996DECA6E8EEF473]
    ON [dbo].[EntityDataSourceBase]([EntityDataSourceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

