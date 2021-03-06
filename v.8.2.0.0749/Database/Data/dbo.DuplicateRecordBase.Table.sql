USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DuplicateRecordBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DuplicateRecordBase](
	[DuplicateRuleId] [uniqueidentifier] NULL,
	[BaseRecordId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NOT NULL,
	[DuplicateId] [uniqueidentifier] NOT NULL,
	[AsyncOperationId] [uniqueidentifier] NULL,
	[DuplicateRecordId] [uniqueidentifier] NULL,
	[BaseRecordIdTypeCode] [int] NULL,
	[BaseRecordIdName] [nvarchar](4000) NULL,
	[DuplicateRecordIdName] [nvarchar](4000) NULL,
	[DuplicateRecordIdYomiName] [nvarchar](4000) NULL,
	[BaseRecordIdYomiName] [nvarchar](4000) NULL,
	[DuplicateRecordIdTypeCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_DuplicateRecord] PRIMARY KEY CLUSTERED 
(
	[DuplicateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_AsyncOperation_DuplicateBaseRecord]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_AsyncOperation_DuplicateBaseRecord] ON [dbo].[DuplicateRecordBase]
(
	[AsyncOperationId] ASC
)
WHERE ([AsyncOperationId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_DuplicateRule_DuplicateBaseRecord]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_DuplicateRule_DuplicateBaseRecord] ON [dbo].[DuplicateRecordBase]
(
	[DuplicateRuleId] ASC
)
WHERE ([DuplicateRuleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_baserecordid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_baserecordid] ON [dbo].[DuplicateRecordBase]
(
	[BaseRecordId] ASC,
	[BaseRecordIdTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_bulkdetect]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_bulkdetect] ON [dbo].[DuplicateRecordBase]
(
	[BaseRecordId] ASC,
	[DuplicateRuleId] ASC,
	[AsyncOperationId] ASC,
	[BaseRecordIdTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_Account_DuplicateMatchingRecord]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Account_DuplicateMatchingRecord] ON [dbo].[DuplicateRecordBase]
(
	[DuplicateRecordId] ASC,
	[DuplicateRecordIdTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DuplicateRecordBase]  WITH CHECK ADD  CONSTRAINT [DuplicateRule_DuplicateBaseRecord] FOREIGN KEY([DuplicateRuleId])
REFERENCES [dbo].[DuplicateRuleBase] ([DuplicateRuleId])
GO
ALTER TABLE [dbo].[DuplicateRecordBase] CHECK CONSTRAINT [DuplicateRule_DuplicateBaseRecord]
GO
