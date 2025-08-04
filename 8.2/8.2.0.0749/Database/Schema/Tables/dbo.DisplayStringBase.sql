CREATE TABLE [dbo].[DisplayStringBase]
(
[PublishedDisplayString] [nvarchar] (750) COLLATE Latin1_General_CI_AI NULL,
[CustomDisplayString] [nvarchar] (750) COLLATE Latin1_General_CI_AI NULL,
[DisplayStringKey] [nvarchar] (200) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CustomComment] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[FormatParameters] [int] NOT NULL CONSTRAINT [DF_DisplayStringBase_FormatParameters] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NOT NULL,
[ModifiedOn] [datetime] NOT NULL,
[LanguageCode] [int] NULL,
[DisplayStringId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_DisplayStringBase_IsManaged] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_DisplayStringBase_OverwriteTime] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_DisplayStringBase_ComponentState] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_DisplayStringBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NULL,
[DisplayStringIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_DisplayStringBase_DisplayStringIdUnique] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DisplayStringBase] ADD CONSTRAINT [cndx_PrimaryKey_DisplayString] PRIMARY KEY CLUSTERED  ([DisplayStringId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DisplayStringBase] ADD CONSTRAINT [UQ_DisplayStringBase_DisplayStringIdUnique] UNIQUE NONCLUSTERED  ([DisplayStringIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [UQ_DisplayString] ON [dbo].[DisplayStringBase] ([DisplayStringKey], [LanguageCode], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DisplayStringBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
