CREATE TABLE [dbo].[ChannelPropertyBase]
(
[statuscode] [int] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelPropertyBase_IsManaged] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[DataType] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[Description] [nvarchar] (1000) COLLATE Latin1_General_CI_AI NULL,
[Applicationsource] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[ChannelPropertyIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ChannelPropertyBase_ChannelPropertyIdUnique] DEFAULT (newid()),
[ModifiedBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[Name] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ChannelPropertyId] [uniqueidentifier] NOT NULL,
[statecode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelPropertyBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CreatedOn] [datetime] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelPropertyBase_OverwriteTime] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelPropertyBase_ComponentState] DEFAULT ((0)),
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelPropertyBase] ADD CONSTRAINT [cndx_PrimaryKey_ChannelProperty] PRIMARY KEY CLUSTERED  ([ChannelPropertyId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyId] ON [dbo].[ChannelPropertyBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelPropertyBase] ADD CONSTRAINT [UQ_ChannelPropertyBase_NameRegardingObjectIdUnique] UNIQUE NONCLUSTERED  ([Name], [RegardingObjectId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelPropertyBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
