USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PostRegardingBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostRegardingBase](
	[PostRegardingId] [uniqueidentifier] NOT NULL,
	[LatestManualPostModifiedOn] [datetime] NULL,
	[LatestAutoPostModifiedOn] [datetime] NULL,
	[RegardingObjectOwningBusinessUnit] [uniqueidentifier] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[RegardingObjectOwnerId] [uniqueidentifier] NULL,
	[RegardingObjectTypeCodeForSharing] [int] NOT NULL,
	[RegardingObjectOwnerIdType] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NOT NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_PostRegardingBase] PRIMARY KEY CLUSTERED 
(
	[PostRegardingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_RegardingObjectForSharing]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RegardingObjectForSharing] ON [dbo].[PostRegardingBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCodeForSharing] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RegardingObjectTypeCode]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCode] ON [dbo].[PostRegardingBase]
(
	[RegardingObjectTypeCode] ASC,
	[RegardingObjectId] ASC
)
INCLUDE ( 	[LatestManualPostModifiedOn],
	[LatestAutoPostModifiedOn]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostRegardingBase]  WITH CHECK ADD  CONSTRAINT [business_unit_PostRegarding] FOREIGN KEY([RegardingObjectOwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[PostRegardingBase] CHECK CONSTRAINT [business_unit_PostRegarding]
GO
