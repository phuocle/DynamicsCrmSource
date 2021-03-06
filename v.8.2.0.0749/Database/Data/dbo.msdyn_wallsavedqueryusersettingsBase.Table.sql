USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[msdyn_wallsavedqueryusersettingsBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase](
	[msdyn_wallsavedqueryusersettingsId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[statecode] [int] NOT NULL,
	[statuscode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[msdyn_entityname] [nvarchar](100) NULL,
	[msdyn_data] [nvarchar](max) NULL,
	[msdyn_default] [int] NULL,
	[msdyn_entitydisplayname] [nvarchar](100) NULL,
	[msdyn_includewallinresponse] [bit] NULL,
	[msdyn_isfollowing] [bit] NULL,
	[msdyn_IsVirtual] [bit] NULL,
	[msdyn_isvisible] [bit] NULL,
	[msdyn_isvisiblebit] [int] NULL,
	[msdyn_otc] [int] NULL,
	[msdyn_savedqueryname] [nvarchar](100) NULL,
	[msdyn_sortorder] [int] NULL,
	[msdyn_type] [int] NULL,
	[msdyn_userid] [uniqueidentifier] NULL,
	[msdyn_wallsavedqueryid] [uniqueidentifier] NULL,
 CONSTRAINT [PK_msdyn_wallsavedqueryusersettingsBase] PRIMARY KEY CLUSTERED 
(
	[msdyn_wallsavedqueryusersettingsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[msdyn_wallsavedqueryusersettingsBase]
(
	[statecode] ASC,
	[statuscode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_msdyn_wallsavedquery_wallsavedqueryusersettings]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_wallsavedquery_wallsavedqueryusersettings] ON [dbo].[msdyn_wallsavedqueryusersettingsBase]
(
	[msdyn_wallsavedqueryid] ASC
)
WHERE ([msdyn_wallsavedqueryid] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_msdyn_entityname]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_msdyn_entityname] ON [dbo].[msdyn_wallsavedqueryusersettingsBase]
(
	[msdyn_entityname] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[msdyn_wallsavedqueryusersettingsBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Sync]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[msdyn_wallsavedqueryusersettingsBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] ADD  CONSTRAINT [DF_msdyn_wallsavedqueryusersettingsBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase]  WITH CHECK ADD  CONSTRAINT [business_unit_msdyn_wallsavedqueryusersettings] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] CHECK CONSTRAINT [business_unit_msdyn_wallsavedqueryusersettings]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase]  WITH CHECK ADD  CONSTRAINT [msdyn_systemuser_wallsavedqueryusersettings_userid] FOREIGN KEY([msdyn_userid])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] CHECK CONSTRAINT [msdyn_systemuser_wallsavedqueryusersettings_userid]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase]  WITH CHECK ADD  CONSTRAINT [msdyn_wallsavedquery_wallsavedqueryusersettings] FOREIGN KEY([msdyn_wallsavedqueryid])
REFERENCES [dbo].[msdyn_wallsavedqueryBase] ([msdyn_wallsavedqueryId])
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] CHECK CONSTRAINT [msdyn_wallsavedquery_wallsavedqueryusersettings]
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase]  WITH CHECK ADD  CONSTRAINT [owner_msdyn_wallsavedqueryusersettings] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] CHECK CONSTRAINT [owner_msdyn_wallsavedqueryusersettings]
GO
