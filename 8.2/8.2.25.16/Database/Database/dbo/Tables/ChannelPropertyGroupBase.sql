CREATE TABLE [dbo].[ChannelPropertyGroupBase] (
    [IsManaged]                    BIT              CONSTRAINT [DF_ChannelPropertyGroupBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [ChannelPropertyGroupId]       UNIQUEIDENTIFIER NOT NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_ChannelPropertyGroupBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [statecode]                    INT              NULL,
    [RegardingTypeCode]            INT              NULL,
    [ComponentState]               INT              CONSTRAINT [DF_ChannelPropertyGroupBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ChannelPropertyGroupIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyGroupBase_ChannelPropertyGroupIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyGroupBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ImportSequenceNumber]         INT              NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [statuscode]                   INT              NULL,
    [CreatedOn]                    DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_ChannelPropertyGroup] PRIMARY KEY CLUSTERED ([ChannelPropertyGroupId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelPropertyGroupBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyGroupId]
    ON [dbo].[ChannelPropertyGroupBase]([Name] ASC) WITH (FILLFACTOR = 80);

