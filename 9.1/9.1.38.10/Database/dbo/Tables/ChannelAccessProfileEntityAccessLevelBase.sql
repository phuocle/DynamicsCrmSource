CREATE TABLE [dbo].[ChannelAccessProfileEntityAccessLevelBase] (
    [ChannelAccessProfileId]                        UNIQUEIDENTIFIER NOT NULL,
    [EntityAccessLevelDepthMask]                    INT              CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_EntityAccessLevelDepthMask] DEFAULT ((0)) NOT NULL,
    [SolutionId]                                    UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_SolutionId] DEFAULT ('00229848-a113-4019-bc48-5a8513fcf87f') NOT NULL,
    [VersionNumber]                                 ROWVERSION       NULL,
    [ComponentState]                                INT              CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]                          UNIQUEIDENTIFIER NULL,
    [IsManaged]                                     BIT              CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                                 DATETIME         CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ChannelAccessProfileEntityAccessLevelId]       UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ChannelAccessProfileEntityAccessLevelId] DEFAULT (newid()) NOT NULL,
    [EntityAccessLevelId]                           UNIQUEIDENTIFIER NOT NULL,
    [ChannelAccessProfileEntityAccessLevelIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ChannelAccessProfileEntityAccessLevelIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ChannelAccessProfilEentityAccessLevels] PRIMARY KEY CLUSTERED ([ChannelAccessProfileEntityAccessLevelId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ChannelAccessProfileEntityAccessLevelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelAccessProfileEntityAccessLevelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_channelaccessprofileentityaccesslevels]
    ON [dbo].[ChannelAccessProfileEntityAccessLevelBase]([ChannelAccessProfileEntityAccessLevelId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_channelaccessprofile_entityaccesslevels]
    ON [dbo].[ChannelAccessProfileEntityAccessLevelBase]([EntityAccessLevelId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ChannelAccessProfileEntityAccessLevelBase]([ChannelAccessProfileEntityAccessLevelId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

