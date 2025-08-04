CREATE TABLE [dbo].[RelationshipRoleBase]
(
[Description] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[StatusCode] [int] NULL,
[RelationshipRoleId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[StateCode] [int] NOT NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelationshipRoleBase] ADD CONSTRAINT [cndx_PrimaryKey_RelationshipRole] PRIMARY KEY CLUSTERED  ([RelationshipRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelationshipRoleBase] ADD CONSTRAINT [AK1_RelationshipRoleBase] UNIQUE NONCLUSTERED  ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[RelationshipRoleBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RelationshipRoleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
