CREATE TABLE [dbo].[ChannelPropertyBase] (
    [Description]             NVARCHAR (1000)  NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_ChannelPropertyBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ImportSequenceNumber]    INT              NULL,
    [Name]                    NVARCHAR (300)   NULL,
    [ChannelPropertyIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyBase_ChannelPropertyIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ComponentState]          INT              CONSTRAINT [DF_ChannelPropertyBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [statuscode]              INT              NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [DataType]                INT              NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_ChannelPropertyBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [Applicationsource]       NVARCHAR (100)   NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [statecode]               INT              NULL,
    [ChannelPropertyId]       UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ChannelProperty] PRIMARY KEY CLUSTERED ([ChannelPropertyId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ChannelPropertyBase_NameRegardingObjectIdUnique] UNIQUE NONCLUSTERED ([Name] ASC, [RegardingObjectId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ChannelPropertyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelPropertyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyId]
    ON [dbo].[ChannelPropertyBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ChannelPropertyBase]([ChannelPropertyId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A2431975C59E485483A597152D2B53EB]
    ON [dbo].[ChannelPropertyBase]([ChannelPropertyId] ASC)
    INCLUDE([Name], [DataType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A2431975C59E485483A597152D2B53EB]
    ON [dbo].[ChannelPropertyBase]([Name] DESC, [ChannelPropertyId] ASC)
    INCLUDE([DataType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A2431975C59E485483A597152D2B53EB]
    ON [dbo].[ChannelPropertyBase]([ChannelPropertyId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

