CREATE TABLE [dbo].[PublisherBase]
(
[PinpointPublisherId] [bigint] NULL,
[CustomizationPrefix] [nvarchar] (8) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOn] [datetime] NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[PublisherId] [uniqueidentifier] NOT NULL,
[PinpointPublisherDefaultLocale] [nvarchar] (16) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[CustomizationOptionValuePrefix] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SupportingWebsiteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[UniqueName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_PublisherBase_UniqueName] DEFAULT (''),
[CreatedBy] [uniqueidentifier] NULL,
[IsReadonly] [bit] NOT NULL CONSTRAINT [DF_PublisherBase_IsReadonly] DEFAULT ((0)),
[FriendlyName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_PublisherBase_FriendlyName] DEFAULT (''),
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PublisherBase] ADD CONSTRAINT [cndx_PrimaryKey_Publisher] PRIMARY KEY CLUSTERED  ([PublisherId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName] ON [dbo].[PublisherBase] ([UniqueName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PublisherBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
