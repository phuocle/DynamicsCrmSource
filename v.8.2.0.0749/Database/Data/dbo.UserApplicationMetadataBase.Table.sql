USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserApplicationMetadataBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserApplicationMetadataBase](
	[State] [int] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[AssociatedEntityLogicalName] [nvarchar](64) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[DisplayName] [nvarchar](100) NULL,
	[UserApplicationMetadataId] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[MetadataType] [int] NULL,
	[Data] [nvarchar](max) NULL,
	[FormFactor] [int] NULL,
	[Lcid] [int] NULL,
	[MetadataSubtype] [int] NULL,
	[SourceId] [nvarchar](36) NULL,
	[IsDefault] [bit] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[OwnerIdType] [int] NOT NULL,
	[Dependency] [nvarchar](max) NULL,
 CONSTRAINT [cndx_PrimaryKey_UserApplicationMetadataBase] PRIMARY KEY CLUSTERED 
(
	[UserApplicationMetadataId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[UserApplicationMetadataBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_UserApplicationMetadataBase_modifiedon]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_modifiedon] ON [dbo].[UserApplicationMetadataBase]
(
	[ModifiedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_UserApplicationMetadataBase_sourceid]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_sourceid] ON [dbo].[UserApplicationMetadataBase]
(
	[SourceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase] ADD  CONSTRAINT [DF_UserApplicationMetadataBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase]  WITH CHECK ADD  CONSTRAINT [business_unit_userapplicationmetadata] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase] CHECK CONSTRAINT [business_unit_userapplicationmetadata]
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase]  WITH CHECK ADD  CONSTRAINT [owner_userapplicationmetadata] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase] CHECK CONSTRAINT [owner_userapplicationmetadata]
GO
