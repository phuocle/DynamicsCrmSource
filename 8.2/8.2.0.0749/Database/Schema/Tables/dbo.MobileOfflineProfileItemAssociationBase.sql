CREATE TABLE [dbo].[MobileOfflineProfileItemAssociationBase]
(
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ProfileItemAssociationEntityFilter] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[StageId] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_OverwriteTime] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[PublishedOn] [datetime] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[MobileOfflineProfileItemAssociationIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique] DEFAULT (newid()),
[MobileOfflineProfileItemId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_ComponentState] DEFAULT ((0)),
[IsValidated] [bit] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsValidated] DEFAULT ((0)),
[RelationshipName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[RelationshipData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[RelationshipDisplayName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[RelationshipId] [uniqueidentifier] NOT NULL,
[ProcessId] [uniqueidentifier] NULL,
[SelectedRelationShipsSchema] [int] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[MobileOfflineProfileItemAssociationId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItemAssociation] PRIMARY KEY CLUSTERED  ([MobileOfflineProfileItemAssociationId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique] UNIQUE NONCLUSTERED  ([MobileOfflineProfileItemAssociationIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemIdRelationshipIdUnique] UNIQUE NONCLUSTERED  ([RelationshipId], [MobileOfflineProfileItemId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MobileOfflineProfileItemAssociationBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
