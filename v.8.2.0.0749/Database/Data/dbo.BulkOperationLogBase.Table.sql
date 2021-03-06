USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BulkOperationLogBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BulkOperationLogBase](
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ErrorNumber] [int] NULL,
	[CreatedObjectId] [uniqueidentifier] NULL,
	[BulkOperationLogId] [uniqueidentifier] NOT NULL,
	[BulkOperationId] [uniqueidentifier] NOT NULL,
	[AdditionalInfo] [nvarchar](max) NULL,
	[RegardingObjectIdTypeCode] [int] NULL,
	[CreatedObjectIdTypeCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_BulkOperationLog] PRIMARY KEY CLUSTERED 
(
	[BulkOperationLogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_for_cascaderelationship_BulkOperation_logs]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_BulkOperation_logs] ON [dbo].[BulkOperationLogBase]
(
	[BulkOperationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_CreatedOpportunity_BulkOperationLogs]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_CreatedOpportunity_BulkOperationLogs] ON [dbo].[BulkOperationLogBase]
(
	[CreatedObjectId] ASC,
	[CreatedObjectIdTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_SourceAccount_BulkOperationLogs]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SourceAccount_BulkOperationLogs] ON [dbo].[BulkOperationLogBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectIdTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkOperationLogBase]  WITH CHECK ADD  CONSTRAINT [BulkOperation_logs] FOREIGN KEY([BulkOperationId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[BulkOperationLogBase] CHECK CONSTRAINT [BulkOperation_logs]
GO
