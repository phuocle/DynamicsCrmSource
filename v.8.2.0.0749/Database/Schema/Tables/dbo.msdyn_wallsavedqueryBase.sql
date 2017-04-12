CREATE TABLE [dbo].[msdyn_wallsavedqueryBase]
(
[msdyn_wallsavedqueryId] [uniqueidentifier] NOT NULL,
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
[msdyn_entityname] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_entitydisplayname] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_IsVirtual] [bit] NULL,
[msdyn_IsVisible] [bit] NULL,
[msdyn_isvisiblebit] [int] NULL,
[msdyn_otc] [int] NULL,
[msdyn_SavedQueryId] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[msdyn_savedqueryname] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_postconfigurationid] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryBase] ADD CONSTRAINT [PK_msdyn_wallsavedqueryBase] PRIMARY KEY CLUSTERED  ([msdyn_wallsavedqueryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_entityname] ON [dbo].[msdyn_wallsavedqueryBase] ([msdyn_entityname]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_postconfig_wallsavedquery] ON [dbo].[msdyn_wallsavedqueryBase] ([msdyn_postconfigurationid]) WHERE ([msdyn_postconfigurationid] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[msdyn_wallsavedqueryBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[msdyn_wallsavedqueryBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[msdyn_wallsavedqueryBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryBase] ADD CONSTRAINT [msdyn_postconfig_wallsavedquery] FOREIGN KEY ([msdyn_postconfigurationid]) REFERENCES [dbo].[msdyn_PostConfigBase] ([msdyn_PostConfigId])
GO
