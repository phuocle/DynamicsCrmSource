CREATE TABLE [dbo].[EntityAnalyticsConfigBase] (
    [EntityAnalyticsConfigId] UNIQUEIDENTIFIER NOT NULL,
    [ComponentIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_EntityAnalyticsConfigBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]          INT              CONSTRAINT [DF_EntityAnalyticsConfigBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ParentEntityLogicalName] NVARCHAR (128)   NOT NULL,
    [ParentEntityId]          UNIQUEIDENTIFIER NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [IsEnabledForADLS]        BIT              NULL,
    [IsEnabledForTimeSeries]  BIT              NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_EntityAnalyticsConfigBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_EntityAnalyticsConfigBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_EntityAnalyticsConfigBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_EntityAnalyticsConfigBase] PRIMARY KEY CLUSTERED ([EntityAnalyticsConfigId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [entity_entityanalyticsconfig] FOREIGN KEY ([ParentEntityId]) REFERENCES [dbo].[EntityIds] ([EntityId]),
    CONSTRAINT [organization_entityanalyticsconfig] FOREIGN KEY ([OrganizationId]) REFERENCES [dbo].[OrganizationBase] ([OrganizationId]),
    CONSTRAINT [ndx_EntityAnalytics_Name] UNIQUE NONCLUSTERED ([ParentEntityLogicalName] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_EntityAnalyticsConfigBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);

