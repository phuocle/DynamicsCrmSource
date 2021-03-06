USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TimeStampDateMapping]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TimeStampDateMapping](
	[TimeStamp] [bigint] NOT NULL,
	[Date] [datetime] NOT NULL,
	[TimeStampDateMappingId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Date_ChangeTrackingDbTimestamp]    Script Date: 4/10/2017 9:59:22 PM ******/
CREATE CLUSTERED INDEX [fndx_Date_ChangeTrackingDbTimestamp] ON [dbo].[TimeStampDateMapping]
(
	[Date] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_PrimaryKey_ChangeTrackingDbTimestamp]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[TimeStampDateMapping] ADD  CONSTRAINT [cndx_PrimaryKey_ChangeTrackingDbTimestamp] PRIMARY KEY NONCLUSTERED 
(
	[TimeStampDateMappingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeStampDateMapping] ADD  CONSTRAINT [DF_TimeStampDateMapping_TimeStampDateMappingId]  DEFAULT (newid()) FOR [TimeStampDateMappingId]
GO
