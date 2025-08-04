CREATE TABLE [dbo].[FieldSecurityProfileBase]
(
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_ComponentState] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_OverwriteTime] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_IsManaged] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[FieldSecurityProfileId] [uniqueidentifier] NOT NULL,
[FieldSecurityProfileIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_FieldSecurityProfileBase_FieldSecurityProfileIdUnique] DEFAULT (newid()),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[FieldSecurityProfileBase] ADD CONSTRAINT [cndx_PrimaryKey_FieldSecurityProfile] PRIMARY KEY CLUSTERED  ([FieldSecurityProfileId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FieldSecurityProfileBase] ADD CONSTRAINT [UQ_FieldSecurityProfileBase_FieldSecurityProfileIdUnique] UNIQUE NONCLUSTERED  ([FieldSecurityProfileIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[FieldSecurityProfileBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
