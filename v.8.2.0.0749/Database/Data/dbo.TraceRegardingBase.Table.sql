USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TraceRegardingBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TraceRegardingBase](
	[RegardingObjectOwningBusinessUnit] [uniqueidentifier] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[TraceRegardingId] [uniqueidentifier] NOT NULL,
	[RegardingObjectOwnerId] [uniqueidentifier] NOT NULL,
	[RegardingObjectTypeCodeForSharing] [int] NOT NULL,
	[RegardingObjectOwnerIdType] [int] NULL,
	[RegardingObjectTypeCode] [int] NOT NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_TraceRegardingBase] PRIMARY KEY CLUSTERED 
(
	[TraceRegardingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_RegardingObjectTypeCode]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCode] ON [dbo].[TraceRegardingBase]
(
	[RegardingObjectTypeCode] ASC,
	[RegardingObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RegardingObjectTypeCodeForSharing]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCodeForSharing] ON [dbo].[TraceRegardingBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCodeForSharing] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceRegardingBase]  WITH CHECK ADD  CONSTRAINT [business_unit_TraceRegarding] FOREIGN KEY([RegardingObjectOwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[TraceRegardingBase] CHECK CONSTRAINT [business_unit_TraceRegarding]
GO
