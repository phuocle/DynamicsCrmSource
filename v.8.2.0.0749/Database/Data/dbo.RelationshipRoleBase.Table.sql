USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RelationshipRoleBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RelationshipRoleBase](
	[Description] [nvarchar](500) NULL,
	[Name] [nvarchar](100) NOT NULL,
	[StatusCode] [int] NULL,
	[RelationshipRoleId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_RelationshipRole] PRIMARY KEY CLUSTERED 
(
	[RelationshipRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_RelationshipRoleBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[RelationshipRoleBase] ADD  CONSTRAINT [AK1_RelationshipRoleBase] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RelationshipRoleBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[RelationshipRoleBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
