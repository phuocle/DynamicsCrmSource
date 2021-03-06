USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BuildVersion]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BuildVersion](
	[BuildDate] [datetime] NOT NULL,
	[TimeStamp] [timestamp] NULL,
	[BuildNumber] [int] NULL,
	[BuildQFE] [int] NULL CONSTRAINT [Set_To_Zero100]  DEFAULT ((0)),
	[MajorVersion] [int] NULL,
	[MinorVersion] [int] NULL,
	[Revision] [int] NULL,
	[LastDatabaseQfe] [nvarchar](100) NULL,
	[MinSupportedClient] [nvarchar](20) NULL,
	[MaxSupportedClient] [nvarchar](20) NULL,
	[MinSupportedRouter] [nvarchar](20) NULL,
	[MaxSupportedRouter] [nvarchar](20) NULL,
	[RevisionForMetadata] [int] NULL,
	[MajorVersionForMetadata] [int] NULL,
	[MinorVersionForMetadata] [int] NULL,
	[BuildNumberForMetadata] [int] NULL,
	[MajorVersionForMetadataForMetadata] [int] NULL,
	[MinorVersionForMetadataForMetadata] [int] NULL,
	[BuildNumberForMetadataForMetadata] [int] NULL,
	[RevisionForMetadataForMetadata] [int] NULL,
 CONSTRAINT [PK_BuildVersion] PRIMARY KEY CLUSTERED 
(
	[BuildDate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[BuildVersion] ([BuildDate], [BuildNumber], [BuildQFE], [MajorVersion], [MinorVersion], [Revision], [LastDatabaseQfe], [MinSupportedClient], [MaxSupportedClient], [MinSupportedRouter], [MaxSupportedRouter], [RevisionForMetadata], [MajorVersionForMetadata], [MinorVersionForMetadata], [BuildNumberForMetadata], [MajorVersionForMetadataForMetadata], [MinorVersionForMetadataForMetadata], [BuildNumberForMetadataForMetadata], [RevisionForMetadataForMetadata]) VALUES (CAST(N'2015-09-17 08:00:13.297' AS DateTime), 0, 0, 8, 2, 749, N'                                                                                                    ', N'7.0.0000.3543', N'8.9.9999.9999', N'8.0.0000.0', N'8.0.9999.9999', 749, 8, 2, 0, 8, 2, 0, 749)
