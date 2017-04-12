CREATE TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase]
(
[msdyn_wallsavedqueryusersettingsId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_msdyn_wallsavedqueryusersettingsBase_OwnerIdType] DEFAULT ((8)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[statecode] [int] NOT NULL,
[statuscode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[msdyn_entityname] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[msdyn_default] [int] NULL,
[msdyn_entitydisplayname] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_includewallinresponse] [bit] NULL,
[msdyn_isfollowing] [bit] NULL,
[msdyn_IsVirtual] [bit] NULL,
[msdyn_isvisible] [bit] NULL,
[msdyn_isvisiblebit] [int] NULL,
[msdyn_otc] [int] NULL,
[msdyn_savedqueryname] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_sortorder] [int] NULL,
[msdyn_type] [int] NULL,
[msdyn_userid] [uniqueidentifier] NULL,
[msdyn_wallsavedqueryid] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] ADD CONSTRAINT [PK_msdyn_wallsavedqueryusersettingsBase] PRIMARY KEY CLUSTERED  ([msdyn_wallsavedqueryusersettingsId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_entityname] ON [dbo].[msdyn_wallsavedqueryusersettingsBase] ([msdyn_entityname]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_savedqueryname] ON [dbo].[msdyn_wallsavedqueryusersettingsBase] ([msdyn_savedqueryname]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_wallsavedquery_wallsavedqueryusersettings] ON [dbo].[msdyn_wallsavedqueryusersettingsBase] ([msdyn_wallsavedqueryid]) WHERE ([msdyn_wallsavedqueryid] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[msdyn_wallsavedqueryusersettingsBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[msdyn_wallsavedqueryusersettingsBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[msdyn_wallsavedqueryusersettingsBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] ADD CONSTRAINT [business_unit_msdyn_wallsavedqueryusersettings] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] ADD CONSTRAINT [msdyn_systemuser_wallsavedqueryusersettings_userid] FOREIGN KEY ([msdyn_userid]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] ADD CONSTRAINT [msdyn_wallsavedquery_wallsavedqueryusersettings] FOREIGN KEY ([msdyn_wallsavedqueryid]) REFERENCES [dbo].[msdyn_wallsavedqueryBase] ([msdyn_wallsavedqueryId])
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] ADD CONSTRAINT [owner_msdyn_wallsavedqueryusersettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
