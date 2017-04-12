CREATE TABLE [dbo].[ConstraintBasedGroupBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[GroupTypeCode] [int] NOT NULL,
[VersionNumber] [timestamp] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[ConstraintBasedGroupId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Constraints] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConstraintBasedGroupBase] ADD CONSTRAINT [cndx_PrimaryKey_ConstraintBasedGroup] PRIMARY KEY CLUSTERED  ([ConstraintBasedGroupId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ConstraintBasedGroupBase] ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ConstraintBasedGroupBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConstraintBasedGroupBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConstraintBasedGroupBase] ADD CONSTRAINT [business_unit_constraint_based_groups] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
