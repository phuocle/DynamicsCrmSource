CREATE TABLE [dbo].[DuplicateRecordBase]
(
[DuplicateRuleId] [uniqueidentifier] NULL,
[BaseRecordId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NOT NULL,
[DuplicateId] [uniqueidentifier] NOT NULL,
[AsyncOperationId] [uniqueidentifier] NULL,
[DuplicateRecordId] [uniqueidentifier] NULL,
[BaseRecordIdTypeCode] [int] NULL,
[BaseRecordIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[DuplicateRecordIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[DuplicateRecordIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[BaseRecordIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[DuplicateRecordIdTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DuplicateRecordBase] ADD CONSTRAINT [cndx_PrimaryKey_DuplicateRecord] PRIMARY KEY CLUSTERED  ([DuplicateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_AsyncOperation_DuplicateBaseRecord] ON [dbo].[DuplicateRecordBase] ([AsyncOperationId]) WHERE ([AsyncOperationId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_baserecordid] ON [dbo].[DuplicateRecordBase] ([BaseRecordId], [BaseRecordIdTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_bulkdetect] ON [dbo].[DuplicateRecordBase] ([BaseRecordId], [DuplicateRuleId], [AsyncOperationId], [BaseRecordIdTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Account_DuplicateMatchingRecord] ON [dbo].[DuplicateRecordBase] ([DuplicateRecordId], [DuplicateRecordIdTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_DuplicateRule_DuplicateBaseRecord] ON [dbo].[DuplicateRecordBase] ([DuplicateRuleId]) WHERE ([DuplicateRuleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DuplicateRecordBase] ADD CONSTRAINT [DuplicateRule_DuplicateBaseRecord] FOREIGN KEY ([DuplicateRuleId]) REFERENCES [dbo].[DuplicateRuleBase] ([DuplicateRuleId])
GO
