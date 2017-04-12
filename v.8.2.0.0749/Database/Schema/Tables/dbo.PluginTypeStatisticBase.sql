CREATE TABLE [dbo].[PluginTypeStatisticBase]
(
[TerminateMemoryContributionPercent] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_TerminateMemoryContributionPercent] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[AverageExecuteTimeInMilliseconds] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_AverageExecuteTimeInMilliseconds] DEFAULT ((0)),
[FailurePercent] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_FailurePercent] DEFAULT ((0)),
[PluginTypeStatisticId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CrashPercent] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_CrashPercent] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[FailureCount] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_FailureCount] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CrashCount] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_CrashCount] DEFAULT ((0)),
[CrashContributionPercent] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_CrashContributionPercent] DEFAULT ((0)),
[TerminateCpuContributionPercent] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_TerminateCpuContributionPercent] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[TerminateHandlesContributionPercent] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_TerminateHandlesContributionPercent] DEFAULT ((0)),
[PluginTypeId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[ExecuteCount] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_ExecuteCount] DEFAULT ((0)),
[TerminateOtherContributionPercent] [int] NOT NULL CONSTRAINT [DF_PluginTypeStatisticBase_TerminateOtherContributionPercent] DEFAULT ((0)),
[CreatedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD CONSTRAINT [cndx_PrimaryKey_plugintypestatistic] PRIMARY KEY CLUSTERED  ([PluginTypeStatisticId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD CONSTRAINT [createdby_plugintypestatistic] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD CONSTRAINT [modifiedby_plugintypestatistic] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD CONSTRAINT [plugintype_plugintypestatistic] FOREIGN KEY ([PluginTypeId]) REFERENCES [dbo].[PluginTypeBaseIds] ([PluginTypeId])
GO
