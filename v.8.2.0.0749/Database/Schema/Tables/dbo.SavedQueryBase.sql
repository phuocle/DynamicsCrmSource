CREATE TABLE [dbo].[SavedQueryBase]
(
[SavedQueryId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[QueryType] [int] NOT NULL,
[IsDefault] [bit] NOT NULL CONSTRAINT [Set_To_Zero147] DEFAULT ((0)),
[ReturnedTypeCode] [int] NOT NULL,
[QueryAppUsage] [int] NULL,
[IsUserDefined] [bit] NULL CONSTRAINT [DF_SavedQueryBase_IsUserDefined] DEFAULT ((1)),
[FetchXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [Set_To_One2] DEFAULT ((1)),
[IsQuickFindQuery] [bit] NOT NULL CONSTRAINT [Set_To_Zero148] DEFAULT ((0)),
[ColumnSetXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LayoutXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[QueryAPI] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[IsPrivate] [bit] NOT NULL CONSTRAINT [DF_SavedQueryBase_IsPrivate] DEFAULT ((0)),
[SavedQueryIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SavedQueryBase_SavedQueryIdUnique] DEFAULT (newid()),
[SupportingSolutionId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SavedQueryBase_OverwriteTime] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SavedQueryBase_IsManaged] DEFAULT ((0)),
[AdvancedGroupBy] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ConditionalFormatting] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CanBeDeleted] [bit] NOT NULL CONSTRAINT [DF_SavedQueryBase_CanBeDeleted] DEFAULT ((1)),
[StatusCode] [int] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SavedQueryBase_ComponentState] DEFAULT ((0)),
[OrganizationTabOrder] [int] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SavedQueryBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsCustom] [bit] NOT NULL CONSTRAINT [DF_SavedQueryBase_IsCustom] DEFAULT ((1))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SavedQueryBase] ADD CONSTRAINT [cndx_PrimaryKey_SavedQuery] PRIMARY KEY CLUSTERED  ([SavedQueryId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SavedQueryBase] ([ReturnedTypeCode], [StateCode], [QueryType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SavedQueryBase] ADD CONSTRAINT [UQ_SavedQuery_SavedQueryIdUnique] UNIQUE NONCLUSTERED  ([SavedQueryIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SavedQueryBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
