USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[WizardAccessPrivilegeBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WizardAccessPrivilegeBase](
	[ModifiedBy] [uniqueidentifier] NULL,
	[PrivilegeName] [nvarchar](100) NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[WebWizardId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[EntityName] [nvarchar](100) NOT NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[WizardAccessPrivilegeId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_primarykey_wizardaccessarivilege] PRIMARY KEY CLUSTERED 
(
	[WizardAccessPrivilegeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[WizardAccessPrivilegeBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_entityname_privilegename_wizardaccessarivilege]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_entityname_privilegename_wizardaccessarivilege] ON [dbo].[WizardAccessPrivilegeBase]
(
	[WebWizardId] ASC,
	[EntityName] ASC,
	[PrivilegeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_wizardaccessprivilege_webwizardid]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_wizardaccessprivilege_webwizardid] ON [dbo].[WizardAccessPrivilegeBase]
(
	[WebWizardId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WizardAccessPrivilegeBase]  WITH CHECK ADD  CONSTRAINT [lk_wizardaccessprivilege_webwizardid] FOREIGN KEY([WebWizardId])
REFERENCES [dbo].[WebWizardBase] ([WebWizardId])
GO
ALTER TABLE [dbo].[WizardAccessPrivilegeBase] CHECK CONSTRAINT [lk_wizardaccessprivilege_webwizardid]
GO
