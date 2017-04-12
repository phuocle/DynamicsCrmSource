CREATE TABLE [dbo].[ConnectionRoleBase]
(
[ConnectionRoleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ConnectionRoleBase_ConnectionRoleIdUnique] DEFAULT (newid()),
[ConnectionRoleId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ConnectionRoleBase_ComponentState] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ConnectionRoleBase_IsManaged] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[StateCode] [int] NOT NULL,
[Category] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ConnectionRoleBase_OverwriteTime] DEFAULT ((0)),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ConnectionRoleBase_IsCustomizable] DEFAULT ((1)),
[Description] [nvarchar] (1000) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ConnectionRoleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleBase] ADD CONSTRAINT [cndx_PrimaryKey_ConnectionRole] PRIMARY KEY CLUSTERED  ([ConnectionRoleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleBase] ADD CONSTRAINT [UQ_ConnectionRoleBase_ConnectionRoleIdUnique] UNIQUE NONCLUSTERED  ([ConnectionRoleIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ConnectionRoleBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ConnectionRoleBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConnectionRoleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
