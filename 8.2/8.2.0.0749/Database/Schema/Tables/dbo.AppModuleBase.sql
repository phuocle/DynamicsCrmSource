CREATE TABLE [dbo].[AppModuleBase]
(
[VersionNumber] [timestamp] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_AppModuleBase_ComponentState] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ConfigXML] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ImportSequenceNumber] [int] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_AppModuleBase_OverwriteTime] DEFAULT ((0)),
[WebResourceId] [uniqueidentifier] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AppModuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[AppModuleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_AppModuleBase_AppModuleIdUnique] DEFAULT (newid()),
[IsDefault] [bit] NULL CONSTRAINT [DF_AppModuleBase_IsDefault] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsFeatured] [bit] NOT NULL CONSTRAINT [DF_AppModuleBase_IsFeatured] DEFAULT ((0)),
[URL] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[AppModuleId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AppModuleBase_AppModuleId] DEFAULT (newid()),
[IsManaged] [bit] NULL CONSTRAINT [DF_AppModuleBase_IsManaged] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[UniqueName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[PublisherId] [uniqueidentifier] NULL,
[ClientType] [int] NULL,
[AppModuleVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[PublishedOn] [datetime] NULL,
[FormFactor] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[IntroducedVersion] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AppModuleXmlManaged] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD CONSTRAINT [cndx_PrimaryKey_AppModule] PRIMARY KEY CLUSTERED  ([AppModuleId], [UniqueName], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_uniquename_AppModule] ON [dbo].[AppModuleBase] ([UniqueName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_url_AppModule] ON [dbo].[AppModuleBase] ([URL]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
