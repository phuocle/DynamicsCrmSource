CREATE TABLE [dbo].[CustomControlBase]
(
[CustomControlIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_CustomControlBase_CustomControlIdUnique] DEFAULT (newid()),
[CompatibleDataTypes] [nvarchar] (500) COLLATE Latin1_General_CI_AI NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_CustomControlBase_ComponentState] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[CustomControlId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Version] [nvarchar] (20) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Manifest] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CustomControlBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_CustomControlBase_IsManaged] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_CustomControlBase_OverwriteTime] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomControlBase] ADD CONSTRAINT [cndx_PrimaryKey_CustomControl] PRIMARY KEY CLUSTERED  ([CustomControlId], [SolutionId], [ComponentState], [OverwriteTime], [Version]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomControlBase] ADD CONSTRAINT [UQ_CustomControlBase_CustomControlIdNameVersion] UNIQUE NONCLUSTERED  ([CustomControlId], [Name], [Version]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomControlBase] ADD CONSTRAINT [UQ_CustomControlBase_CustomControlIdUnique] UNIQUE NONCLUSTERED  ([CustomControlIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [indx_Sync_VersionNumber] ON [dbo].[CustomControlBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
