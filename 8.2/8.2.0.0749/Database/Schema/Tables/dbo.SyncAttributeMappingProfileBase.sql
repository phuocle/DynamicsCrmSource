CREATE TABLE [dbo].[SyncAttributeMappingProfileBase]
(
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_OverwriteTime] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_ComponentState] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_IsManaged] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[SyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SyncAttributeMappingProfileIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SyncAttributeMappingProfileBase_SyncAttributeMappingProfileIdUnique] DEFAULT (newid())
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
