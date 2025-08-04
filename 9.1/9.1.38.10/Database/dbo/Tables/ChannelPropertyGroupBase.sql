CREATE TABLE [dbo].[ChannelPropertyGroupBase] (
    [ImportSequenceNumber]         INT              NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyGroupBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]               INT              CONSTRAINT [DF_ChannelPropertyGroupBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_ChannelPropertyGroupBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [statecode]                    INT              NULL,
    [ChannelPropertyGroupId]       UNIQUEIDENTIFIER NOT NULL,
    [RegardingTypeCode]            INT              NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_ChannelPropertyGroupBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [statuscode]                   INT              NULL,
    [ChannelPropertyGroupIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyGroupBase_ChannelPropertyGroupIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ChannelPropertyGroup] PRIMARY KEY CLUSTERED ([ChannelPropertyGroupId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ChannelPropertyGroupBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ChannelPropertyGroupBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelPropertyGroupBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyGroupId]
    ON [dbo].[ChannelPropertyGroupBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ChannelPropertyGroupBase]([ChannelPropertyGroupId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9DE36810E69B4B43BB6B8B6BC5108D58]
    ON [dbo].[ChannelPropertyGroupBase]([ChannelPropertyGroupId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9DE36810E69B4B43BB6B8B6BC5108D58]
    ON [dbo].[ChannelPropertyGroupBase]([ChannelPropertyGroupId] ASC)
    INCLUDE([Name], [RegardingTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9DE36810E69B4B43BB6B8B6BC5108D58]
    ON [dbo].[ChannelPropertyGroupBase]([Name] DESC, [ChannelPropertyGroupId] ASC)
    INCLUDE([RegardingTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

