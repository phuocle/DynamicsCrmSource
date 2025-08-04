CREATE TABLE [dbo].[ServicePlanAppModulesBase] (
    [ServicePlanAppModulesId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ServicePlanId]           UNIQUEIDENTIFIER NOT NULL,
    [AppModuleId]             UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_ServicePlanAppModulesBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ServicePlanAppModulesBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [ComponentState]          INT              CONSTRAINT [DF_ServicePlanAppModulesBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_ServicePlanAppModulesBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_ServicePlanAppModulesBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]          BIT              CONSTRAINT [DF_ServicePlanAppModulesBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ServicePlanAppModules] PRIMARY KEY CLUSTERED ([ServicePlanAppModulesId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [serviceplan_appmoduleOne] FOREIGN KEY ([ServicePlanId]) REFERENCES [dbo].[ServicePlanBaseIds] ([ServicePlanId]),
    CONSTRAINT [serviceplan_appmoduleTwo] FOREIGN KEY ([AppModuleId]) REFERENCES [dbo].[AppModuleBaseIds] ([AppModuleId]),
    CONSTRAINT [UQ_ServicePlanAppModulesBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ServicePlanAppModulesBase]([ServicePlanAppModulesId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_serviceplan_appmoduleTwo]
    ON [dbo].[ServicePlanAppModulesBase]([AppModuleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_serviceplan_appmoduleOne]
    ON [dbo].[ServicePlanAppModulesBase]([ServicePlanId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

