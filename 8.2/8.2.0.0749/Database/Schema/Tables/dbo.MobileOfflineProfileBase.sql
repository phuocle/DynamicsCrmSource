CREATE TABLE [dbo].[MobileOfflineProfileBase]
(
[PublishedOn] [datetime] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_MobileOfflineProfileBase_IsManaged] DEFAULT ((0)),
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MobileOfflineProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_MobileOfflineProfileBase_OverwriteTime] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[MobileOfflineProfileId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_MobileOfflineProfileBase_ComponentState] DEFAULT ((0)),
[MobileOfflineProfileIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_MobileOfflineProfileBase_MobileOfflineProfileIdUnique] DEFAULT (newid()),
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ProcessId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[SelectedEntityMetadata] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsValidated] [bit] NOT NULL CONSTRAINT [DF_MobileOfflineProfileBase_IsValidated] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfile] PRIMARY KEY CLUSTERED  ([MobileOfflineProfileId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD CONSTRAINT [UQ_MobileOfflineProfileBase_MobileOfflineProfileIdUnique] UNIQUE NONCLUSTERED  ([MobileOfflineProfileIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD CONSTRAINT [UQ_MobileOfflineProfileBase_NameUnique] UNIQUE NONCLUSTERED  ([Name], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MobileOfflineProfileBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
