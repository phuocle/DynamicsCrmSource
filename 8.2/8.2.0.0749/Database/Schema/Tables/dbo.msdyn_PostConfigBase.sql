CREATE TABLE [dbo].[msdyn_PostConfigBase]
(
[msdyn_PostConfigId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[statecode] [int] NOT NULL,
[statuscode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[msdyn_EntityDisplayName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_ConfigureWall] [bit] NULL,
[msdyn_EntityName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_FollowingViewId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_FollowingViewId2] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_Otc] [int] NULL,
[msdyn_Status] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_PostConfigBase] ADD CONSTRAINT [PK_msdyn_PostConfigBase] PRIMARY KEY CLUSTERED  ([msdyn_PostConfigId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_EntityDisplayName] ON [dbo].[msdyn_PostConfigBase] ([msdyn_EntityDisplayName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[msdyn_PostConfigBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[msdyn_PostConfigBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[msdyn_PostConfigBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
