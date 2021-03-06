USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ResourceSpecBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResourceSpecBase](
	[EffortRequired] [float] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](160) NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[ObjectiveExpression] [nvarchar](max) NOT NULL,
	[SameSite] [bit] NULL,
	[Constraints] [nvarchar](max) NULL,
	[ResourceSpecId] [uniqueidentifier] NOT NULL,
	[GroupObjectId] [uniqueidentifier] NOT NULL,
	[RequiredCount] [int] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_ResourceSpec] PRIMARY KEY CLUSTERED 
(
	[ResourceSpecId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ResourceSpecBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_constraint_based_group_resource_specs]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_constraint_based_group_resource_specs] ON [dbo].[ResourceSpecBase]
(
	[GroupObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ResourceSpecBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ResourceSpecBase]
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceSpecBase]  WITH CHECK ADD  CONSTRAINT [business_unit_resource_specs] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ResourceSpecBase] CHECK CONSTRAINT [business_unit_resource_specs]
GO
