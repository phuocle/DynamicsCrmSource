CREATE TABLE [dbo].[SyncAttributeMappingBase]
(
[AttributeCRMName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[DefaultSyncDirection] [int] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_DefaultSyncDirection] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_ComponentState] DEFAULT ((0)),
[SyncAttributeMappingIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SyncAttributeMappingBase_SyncAttributeMappingIdUnique] DEFAULT (newid()),
[ParentSyncAttributeMappingId] [uniqueidentifier] NULL,
[SyncAttributeMappingId] [uniqueidentifier] NOT NULL,
[SyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL,
[SyncDirection] [int] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_SyncDirection] DEFAULT ((0)),
[MappingName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[AllowedSyncDirection] [tinyint] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_AllowedSyncDirection] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_IsManaged] DEFAULT ((0)),
[EntityTypeCode] [int] NOT NULL,
[ComputedProperties] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[AttributeExchangeName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsComputed] [bit] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_IsComputed] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SyncAttributeMappingBase_OverwriteTime] DEFAULT ((0))
) ON [PRIMARY]
GO
