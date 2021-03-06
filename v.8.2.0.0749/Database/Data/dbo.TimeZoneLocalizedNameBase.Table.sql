USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TimeZoneLocalizedNameBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeZoneLocalizedNameBase](
	[CultureId] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[TimeZoneDefinitionId] [uniqueidentifier] NOT NULL,
	[StandardName] [nvarchar](100) NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TimeZoneLocalizedNameId] [uniqueidentifier] NOT NULL,
	[UserInterfaceName] [nvarchar](100) NOT NULL,
	[DaylightName] [nvarchar](100) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_primarykey_timezonelocalizedname] PRIMARY KEY CLUSTERED 
(
	[TimeZoneLocalizedNameId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TimeZoneLocalizedNameBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_cultureid_timezonelocalizedname]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_cultureid_timezonelocalizedname] ON [dbo].[TimeZoneLocalizedNameBase]
(
	[TimeZoneDefinitionId] ASC,
	[CultureId] ASC,
	[StandardName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_UserInterfaceName]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_UserInterfaceName] ON [dbo].[TimeZoneLocalizedNameBase]
(
	[UserInterfaceName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeZoneLocalizedNameBase]  WITH CHECK ADD  CONSTRAINT [lk_timezonelocalizedname_timezonedefinitionid] FOREIGN KEY([TimeZoneDefinitionId])
REFERENCES [dbo].[TimeZoneDefinitionBase] ([TimeZoneDefinitionId])
GO
ALTER TABLE [dbo].[TimeZoneLocalizedNameBase] CHECK CONSTRAINT [lk_timezonelocalizedname_timezonedefinitionid]
GO
