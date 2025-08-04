CREATE TABLE [dbo].[PrincipalSyncAttributeMapBase]
(
[MappingName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[AllowedSyncDirection] [tinyint] NOT NULL CONSTRAINT [DF_PrincipalSyncAttributeMapBase_AllowedSyncDirection] DEFAULT ((0)),
[PrincipalId] [uniqueidentifier] NOT NULL,
[SyncDirection] [int] NOT NULL CONSTRAINT [DF_PrincipalSyncAttributeMapBase_SyncDirection] DEFAULT ((0)),
[AttributeCRMName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[EntityTypeCode] [int] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[AttributeExchangeName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ParentPrincipalSyncAttributeMappingId] [uniqueidentifier] NULL,
[DefaultSyncDirection] [int] NOT NULL CONSTRAINT [DF_PrincipalSyncAttributeMapBase_DefaultSyncDirection] DEFAULT ((0)),
[IsComputed] [bit] NOT NULL CONSTRAINT [DF_PrincipalSyncAttributeMapBase_IsComputed] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[PrincipalSyncAttributeMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalSyncAttributeMapBase_PrincipalSyncAttributeMapId] DEFAULT (newid()),
[ComputedProperties] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[AttributeCRMDisplayName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AttributeExchangeDisplayName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalSyncAttributeMapBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
