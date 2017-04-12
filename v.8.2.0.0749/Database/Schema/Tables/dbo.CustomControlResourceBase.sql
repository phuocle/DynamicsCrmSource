CREATE TABLE [dbo].[CustomControlResourceBase]
(
[ModifiedOn] [datetime] NULL,
[CustomControlResourceId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CustomControlId] [uniqueidentifier] NOT NULL,
[VersionRequirement] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Version] [nvarchar] (20) COLLATE Latin1_General_CI_AI NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedOn] [datetime] NULL,
[WebResourceId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CustomControlResourceIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_CustomControlResourceBase_CustomControlResourceIdUnique] DEFAULT (newid()),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_CustomControlResourceBase_OverwriteTime] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_CustomControlResourceBase_IsManaged] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CustomControlResourceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_CustomControlResourceBase_ComponentState] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomControlResourceBase] ADD CONSTRAINT [cndx_PrimaryKey_CustomControlResource] PRIMARY KEY CLUSTERED  ([CustomControlResourceId], [SolutionId], [ComponentState], [OverwriteTime], [Version]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomControlResourceBase] ADD CONSTRAINT [UQ_CustomControlresourceBase_CustomControlResourceIdUnique] UNIQUE NONCLUSTERED  ([CustomControlResourceIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [indx_Sync_VersionNumber] ON [dbo].[CustomControlResourceBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
