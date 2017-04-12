CREATE TABLE [dbo].[ResourceGroupBase]
(
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ObjectTypeCode] [int] NOT NULL,
[ResourceGroupId] [uniqueidentifier] NOT NULL,
[GroupTypeCode] [int] NULL,
[BusinessUnitId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ResourceGroupBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ResourceGroupBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceGroupBase] ADD CONSTRAINT [business_unit_resource_groups] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
