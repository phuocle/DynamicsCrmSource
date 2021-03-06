USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BulkDeleteFailureBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BulkDeleteFailureBase](
	[ErrorDescription] [nvarchar](512) NULL,
	[AsyncOperationId] [uniqueidentifier] NULL,
	[BulkDeleteFailureId] [uniqueidentifier] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ErrorNumber] [int] NULL,
	[OrderedQueryIndex] [int] NULL,
	[BulkDeleteOperationId] [uniqueidentifier] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_BulkDeleteFailure] PRIMARY KEY CLUSTERED 
(
	[BulkDeleteFailureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_BulkDeleteOperation_BulkDeleteFailure]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BulkDeleteOperation_BulkDeleteFailure] ON [dbo].[BulkDeleteFailureBase]
(
	[BulkDeleteOperationId] ASC
)
WHERE ([BulkDeleteOperationId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkDeleteFailureBase] ADD  CONSTRAINT [DF_BulkDeleteFailureBase_OrderedQueryIndex]  DEFAULT ((0)) FOR [OrderedQueryIndex]
GO
ALTER TABLE [dbo].[BulkDeleteFailureBase]  WITH CHECK ADD  CONSTRAINT [BulkDeleteOperation_BulkDeleteFailure] FOREIGN KEY([BulkDeleteOperationId])
REFERENCES [dbo].[BulkDeleteOperationBase] ([BulkDeleteOperationId])
GO
ALTER TABLE [dbo].[BulkDeleteFailureBase] CHECK CONSTRAINT [BulkDeleteOperation_BulkDeleteFailure]
GO
