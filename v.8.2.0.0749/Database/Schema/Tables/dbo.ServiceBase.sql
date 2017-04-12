CREATE TABLE [dbo].[ServiceBase]
(
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ServiceId] [uniqueidentifier] NOT NULL,
[ResourceSpecId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[AnchorOffset] [int] NULL,
[ModifiedOn] [datetime] NULL,
[Duration] [int] NOT NULL,
[IsSchedulable] [bit] NOT NULL CONSTRAINT [DF_ServiceBase_IsSchedulable] DEFAULT ((1)),
[StrategyId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ServiceBase_StrategyId] DEFAULT ('07F7DC72-1671-452D-812C-7172D3CA881F'),
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[InitialStatusCode] [int] NOT NULL,
[CalendarId] [uniqueidentifier] NULL,
[ShowResources] [bit] NULL CONSTRAINT [DF_ServiceBase_ShowResources] DEFAULT ((1)),
[Granularity] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[IsVisible] [bit] NULL CONSTRAINT [DF_ServiceBase_IsVisible] DEFAULT ((1)),
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceBase] ADD CONSTRAINT [cndx_PrimaryKey_Service] PRIMARY KEY CLUSTERED  ([ServiceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_services] ON [dbo].[ServiceBase] ([CalendarId]) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_IsSchedulableNameDuration] ON [dbo].[ServiceBase] ([Name], [IsSchedulable], [Duration]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_NameServiceId] ON [dbo].[ServiceBase] ([Name], [ServiceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_resource_spec_services] ON [dbo].[ServiceBase] ([ResourceSpecId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_plugin_type_service] ON [dbo].[ServiceBase] ([StrategyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ServiceBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceBase] ADD CONSTRAINT [calendar_services] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[ServiceBase] ADD CONSTRAINT [resource_spec_services] FOREIGN KEY ([ResourceSpecId]) REFERENCES [dbo].[ResourceSpecBase] ([ResourceSpecId])
GO
