CREATE TABLE [dbo].[IntegrationStatusBase]
(
[IntegrationEntryId] [uniqueidentifier] NOT NULL,
[SystemName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ObjectId] [uniqueidentifier] NULL,
[ObjectTypeCode] [int] NULL,
[StateCode] [int] NULL,
[StateDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NULL,
[StatusDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[IntegrationStatusBase] ADD CONSTRAINT [cndx_PrimaryKey_IntegrationStatus] PRIMARY KEY CLUSTERED  ([IntegrationEntryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[IntegrationStatusBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[IntegrationStatusBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
