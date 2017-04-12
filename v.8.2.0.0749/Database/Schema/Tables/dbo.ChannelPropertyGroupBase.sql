CREATE TABLE [dbo].[ChannelPropertyGroupBase]
(
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelPropertyGroupBase_IsManaged] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ChannelPropertyGroupId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelPropertyGroupBase_OverwriteTime] DEFAULT ((0)),
[statecode] [int] NULL,
[RegardingTypeCode] [int] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelPropertyGroupBase_ComponentState] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ChannelPropertyGroupIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ChannelPropertyGroupBase_ChannelPropertyGroupIdUnique] DEFAULT (newid()),
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelPropertyGroupBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ImportSequenceNumber] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[statuscode] [int] NULL,
[CreatedOn] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelPropertyGroupBase] ADD CONSTRAINT [cndx_PrimaryKey_ChannelPropertyGroup] PRIMARY KEY CLUSTERED  ([ChannelPropertyGroupId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyGroupId] ON [dbo].[ChannelPropertyGroupBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelPropertyGroupBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
