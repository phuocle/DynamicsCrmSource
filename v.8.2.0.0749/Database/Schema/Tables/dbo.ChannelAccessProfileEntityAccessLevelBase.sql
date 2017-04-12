CREATE TABLE [dbo].[ChannelAccessProfileEntityAccessLevelBase]
(
[ChannelAccessProfileEntityAccessLevelIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ChannelAccessProfileEntityAccessLevelIdUnique] DEFAULT (newid()),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ChannelAccessProfileEntityAccessLevelId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ChannelAccessProfileEntityAccessLevelId] DEFAULT (newid()),
[EntityAccessLevelId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_OverwriteTime] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ComponentState] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_SolutionId] DEFAULT ('00229848-a113-4019-bc48-5a8513fcf87f'),
[EntityAccessLevelDepthMask] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_EntityAccessLevelDepthMask] DEFAULT ((0)),
[ChannelAccessProfileId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelAccessProfileEntityAccessLevelBase] ADD CONSTRAINT [cndx_PrimaryKey_ChannelAccessProfilEentityAccessLevels] PRIMARY KEY CLUSTERED  ([ChannelAccessProfileEntityAccessLevelId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_channelaccessprofileentityaccesslevels] ON [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_channelaccessprofile_entityaccesslevels] ON [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([EntityAccessLevelId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
