CREATE TABLE [dbo].[EntityDataProviderBase] (
    [EntityDataProviderIdUnique]  UNIQUEIDENTIFIER CONSTRAINT [DF_EntityDataProviderBase_EntityDataProviderIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [DeletePlugin]                UNIQUEIDENTIFIER NULL,
    [DataSourceLogicalName]       NVARCHAR (160)   NULL,
    [ComponentState]              INT              CONSTRAINT [DF_EntityDataProviderBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_EntityDataProviderBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_EntityDataProviderBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IntroducedVersion]           NVARCHAR (48)    NULL,
    [RetrieveMultiplePlugin]      UNIQUEIDENTIFIER NULL,
    [UpdatePlugin]                UNIQUEIDENTIFIER NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_EntityDataProviderBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]              BIT              CONSTRAINT [DF_EntityDataProviderBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [CreatePlugin]                UNIQUEIDENTIFIER NULL,
    [Description]                 NVARCHAR (1000)  NULL,
    [EntityDataProviderId]        UNIQUEIDENTIFIER NOT NULL,
    [Name]                        NVARCHAR (160)   NULL,
    [RetrievePlugin]              UNIQUEIDENTIFIER NULL,
    [CreateMultiplePlugin]        UNIQUEIDENTIFIER NULL,
    [UpdateMultiplePlugin]        UNIQUEIDENTIFIER NULL,
    [UpsertMultiplePlugin]        UNIQUEIDENTIFIER NULL,
    [UpsertPlugin]                UNIQUEIDENTIFIER NULL,
    [RetrieveEntityChangesPlugin] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_EntityDataProvider] PRIMARY KEY CLUSTERED ([EntityDataProviderId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[EntityDataProviderBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[EntityDataProviderBase]([EntityDataProviderId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[EntityDataProviderBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

