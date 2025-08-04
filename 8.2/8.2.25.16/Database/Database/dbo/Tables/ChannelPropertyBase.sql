CREATE TABLE [dbo].[ChannelPropertyBase] (
    [statuscode]              INT              NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_ChannelPropertyBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [DataType]                INT              NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [Description]             NVARCHAR (1000)  NULL,
    [Applicationsource]       NVARCHAR (100)   NULL,
    [ModifiedOn]              DATETIME         NULL,
    [ChannelPropertyIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyBase_ChannelPropertyIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]    INT              NULL,
    [Name]                    NVARCHAR (300)   NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ChannelPropertyId]       UNIQUEIDENTIFIER NOT NULL,
    [statecode]               INT              NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelPropertyBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_ChannelPropertyBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ComponentState]          INT              CONSTRAINT [DF_ChannelPropertyBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ChannelProperty] PRIMARY KEY CLUSTERED ([ChannelPropertyId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ChannelPropertyBase_NameRegardingObjectIdUnique] UNIQUE NONCLUSTERED ([Name] ASC, [RegardingObjectId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelPropertyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyId]
    ON [dbo].[ChannelPropertyBase]([Name] ASC) WITH (FILLFACTOR = 80);

