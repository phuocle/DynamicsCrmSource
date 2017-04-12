CREATE TABLE [dbo].[WebResourceBase]
(
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_WebResourceBase_IsManaged] DEFAULT ((0)),
[WebResourceType] [int] NOT NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_WebResourceBase_ComponentState] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[SilverlightVersion] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[WebResourceIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_WebResourceBase_WebResourceIdUnique] DEFAULT (newid()),
[DisplayName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[IsHidden] [bit] NOT NULL CONSTRAINT [DF_WebResourceBase_IsHidden] DEFAULT ((0)),
[WebResourceId] [uniqueidentifier] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_WebResourceBase_OverwriteTime] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[CanBeDeleted] [bit] NOT NULL CONSTRAINT [DF_WebResourceBase_CanBeDeleted] DEFAULT ((1)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_WebResourceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_WebResourceBase_IsCustomizable] DEFAULT ((1)),
[Content] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LanguageCode] [int] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsEnabledForMobileClient] [bit] NOT NULL CONSTRAINT [DF_WebResourceBase_IsEnabledForMobileClient] DEFAULT ((0)),
[DependencyXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsAvailableForMobileOffline] [bit] NOT NULL CONSTRAINT [DF_WebResourceBase_IsAvailableForMobileOffline] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[WebResourceBase] ADD CONSTRAINT [cndx_PrimaryKey_WebResource] PRIMARY KEY CLUSTERED  ([WebResourceId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Webresource_ModifiedOn] ON [dbo].[WebResourceBase] ([ModifiedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_WebResourceNames] ON [dbo].[WebResourceBase] ([Name]) INCLUDE ([IsHidden], [WebResourceIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[WebResourceBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WebResourceBase] ADD CONSTRAINT [UQ_WebResourceBase_WebResourceIdUnique] UNIQUE NONCLUSTERED  ([WebResourceIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
