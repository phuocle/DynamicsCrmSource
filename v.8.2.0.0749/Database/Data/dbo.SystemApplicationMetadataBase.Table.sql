USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemApplicationMetadataBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemApplicationMetadataBase](
	[Version] [nvarchar](100) NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[MetadataType] [int] NULL,
	[SourceId] [nvarchar](300) NULL,
	[FormFactor] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Data] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[Lcid] [int] NULL,
	[AssociatedEntityLogicalName] [nvarchar](64) NULL,
	[SystemApplicationMetadataId] [uniqueidentifier] NOT NULL,
	[DisplayName] [nvarchar](100) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[State] [int] NULL,
	[IsDefault] [bit] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[MetadataSubtype] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Dependency] [nvarchar](max) NULL,
 CONSTRAINT [cndx_PrimaryKey_SystemApplicationMetadataBase] PRIMARY KEY CLUSTERED 
(
	[SystemApplicationMetadataId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_latte]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_latte] ON [dbo].[SystemApplicationMetadataBase]
(
	[FormFactor] ASC
)
INCLUDE ( 	[MetadataType],
	[SourceId],
	[Lcid],
	[AssociatedEntityLogicalName],
	[SystemApplicationMetadataId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [ndx_SystemApplicationMetadataBase_modifiedon]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_modifiedon] ON [dbo].[SystemApplicationMetadataBase]
(
	[ModifiedOn] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_SystemApplicationMetadataBase_sourceid]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_sourceid] ON [dbo].[SystemApplicationMetadataBase]
(
	[SourceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
