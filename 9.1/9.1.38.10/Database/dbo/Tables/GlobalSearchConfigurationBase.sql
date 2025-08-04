CREATE TABLE [dbo].[GlobalSearchConfigurationBase] (
    [OverwriteTime]                     DATETIME         CONSTRAINT [DF_GlobalSearchConfigurationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]              UNIQUEIDENTIFIER NULL,
    [ComponentState]                    INT              CONSTRAINT [DF_GlobalSearchConfigurationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SearchProviderName]                NVARCHAR (64)    NOT NULL,
    [IsEnabled]                         BIT              CONSTRAINT [DF_GlobalSearchConfigurationBase_IsEnabled] DEFAULT ((1)) NOT NULL,
    [SearchProviderResultsPage]         NVARCHAR (1024)  NOT NULL,
    [IsManaged]                         BIT              CONSTRAINT [DF_GlobalSearchConfigurationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsLocalized]                       BIT              CONSTRAINT [DF_GlobalSearchConfigurationBase_IsLocalized] DEFAULT ((1)) NOT NULL,
    [SolutionId]                        UNIQUEIDENTIFIER CONSTRAINT [DF_GlobalSearchConfigurationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [GlobalSearchConfigurationidUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_GlobalSearchConfigurationBase_GlobalSearchConfigurationidUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [GlobalSearchConfigurationId]       UNIQUEIDENTIFIER CONSTRAINT [DF_GlobalSearchConfigurationBase_GlobalSearchConfigurationId] DEFAULT (newid()) NOT NULL,
    [IsSearchBoxVisible]                BIT              CONSTRAINT [DF_GlobalSearchConfigurationBase_IsSearchBoxVisible] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_globalsearchconfigurationid] PRIMARY KEY CLUSTERED ([GlobalSearchConfigurationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[GlobalSearchConfigurationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_searchprovidername]
    ON [dbo].[GlobalSearchConfigurationBase]([SearchProviderName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[GlobalSearchConfigurationBase]([GlobalSearchConfigurationId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

