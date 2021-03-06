USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PluginTypeStatisticBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PluginTypeStatisticBase](
	[TerminateMemoryContributionPercent] [int] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[AverageExecuteTimeInMilliseconds] [int] NOT NULL,
	[FailurePercent] [int] NOT NULL,
	[PluginTypeStatisticId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CrashPercent] [int] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[FailureCount] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CrashCount] [int] NOT NULL,
	[CrashContributionPercent] [int] NOT NULL,
	[TerminateCpuContributionPercent] [int] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TerminateHandlesContributionPercent] [int] NOT NULL,
	[PluginTypeId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[ExecuteCount] [int] NOT NULL,
	[TerminateOtherContributionPercent] [int] NOT NULL,
	[CreatedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_plugintypestatistic] PRIMARY KEY CLUSTERED 
(
	[PluginTypeStatisticId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_TerminateMemoryContributionPercent]  DEFAULT ((0)) FOR [TerminateMemoryContributionPercent]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_AverageExecuteTimeInMilliseconds]  DEFAULT ((0)) FOR [AverageExecuteTimeInMilliseconds]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_FailurePercent]  DEFAULT ((0)) FOR [FailurePercent]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_CrashPercent]  DEFAULT ((0)) FOR [CrashPercent]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_FailureCount]  DEFAULT ((0)) FOR [FailureCount]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_CrashCount]  DEFAULT ((0)) FOR [CrashCount]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_CrashContributionPercent]  DEFAULT ((0)) FOR [CrashContributionPercent]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_TerminateCpuContributionPercent]  DEFAULT ((0)) FOR [TerminateCpuContributionPercent]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_TerminateHandlesContributionPercent]  DEFAULT ((0)) FOR [TerminateHandlesContributionPercent]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_ExecuteCount]  DEFAULT ((0)) FOR [ExecuteCount]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] ADD  CONSTRAINT [DF_PluginTypeStatisticBase_TerminateOtherContributionPercent]  DEFAULT ((0)) FOR [TerminateOtherContributionPercent]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase]  WITH CHECK ADD  CONSTRAINT [createdby_plugintypestatistic] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] CHECK CONSTRAINT [createdby_plugintypestatistic]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase]  WITH CHECK ADD  CONSTRAINT [modifiedby_plugintypestatistic] FOREIGN KEY([ModifiedBy])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] CHECK CONSTRAINT [modifiedby_plugintypestatistic]
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase]  WITH CHECK ADD  CONSTRAINT [plugintype_plugintypestatistic] FOREIGN KEY([PluginTypeId])
REFERENCES [dbo].[PluginTypeBaseIds] ([PluginTypeId])
GO
ALTER TABLE [dbo].[PluginTypeStatisticBase] CHECK CONSTRAINT [plugintype_plugintypestatistic]
GO
