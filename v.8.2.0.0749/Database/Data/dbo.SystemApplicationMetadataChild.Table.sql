USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SystemApplicationMetadataChild]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SystemApplicationMetadataChild](
	[Id] [uniqueidentifier] NOT NULL,
	[MetadataType] [int] NULL,
	[FormFactor] [int] NULL,
	[SourceId] [nvarchar](300) NULL,
	[Lcid] [int] NULL,
	[AssociatedEntityLogicalName] [nvarchar](64) NULL,
	[ChildMetadataType] [int] NULL,
	[ChildSourceId] [nvarchar](300) NULL,
	[ChildAssociatedEntityLogicalName] [nvarchar](64) NULL,
	[SystemApplicationMetadataId] [uniqueidentifier] NULL,
	[SystemApplicationMetadataChildId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_SystemApplicationMetadataChild] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_latte]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_latte] ON [dbo].[SystemApplicationMetadataChild]
(
	[FormFactor] ASC,
	[Lcid] ASC,
	[SystemApplicationMetadataId] ASC
)
INCLUDE ( 	[Id],
	[MetadataType],
	[SourceId],
	[AssociatedEntityLogicalName],
	[ChildMetadataType],
	[ChildSourceId],
	[ChildAssociatedEntityLogicalName]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
