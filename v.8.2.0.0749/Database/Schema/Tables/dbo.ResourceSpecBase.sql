CREATE TABLE [dbo].[ResourceSpecBase]
(
[EffortRequired] [float] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[ObjectTypeCode] [int] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ObjectiveExpression] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[SameSite] [bit] NULL,
[Constraints] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ResourceSpecId] [uniqueidentifier] NOT NULL,
[GroupObjectId] [uniqueidentifier] NOT NULL,
[RequiredCount] [int] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceSpecBase] ADD CONSTRAINT [cndx_PrimaryKey_ResourceSpec] PRIMARY KEY CLUSTERED  ([ResourceSpecId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ResourceSpecBase] ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_constraint_based_group_resource_specs] ON [dbo].[ResourceSpecBase] ([GroupObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ResourceSpecBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ResourceSpecBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceSpecBase] ADD CONSTRAINT [business_unit_resource_specs] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
