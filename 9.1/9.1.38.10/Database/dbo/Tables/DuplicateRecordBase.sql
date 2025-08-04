CREATE TABLE [dbo].[DuplicateRecordBase] (
    [AsyncOperationId]          UNIQUEIDENTIFIER NULL,
    [BaseRecordId]              UNIQUEIDENTIFIER NULL,
    [DuplicateRuleId]           UNIQUEIDENTIFIER NULL,
    [DuplicateId]               UNIQUEIDENTIFIER NOT NULL,
    [DuplicateRecordId]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [DuplicateRecordIdName]     NVARCHAR (4000)  NULL,
    [DuplicateRecordIdYomiName] NVARCHAR (4000)  NULL,
    [BaseRecordIdYomiName]      NVARCHAR (4000)  NULL,
    [DuplicateRecordIdTypeCode] INT              NULL,
    [BaseRecordIdTypeCode]      INT              NULL,
    [BaseRecordIdName]          NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_DuplicateRecord] PRIMARY KEY CLUSTERED ([DuplicateId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [DuplicateRule_DuplicateBaseRecord] FOREIGN KEY ([DuplicateRuleId]) REFERENCES [dbo].[DuplicateRuleBase] ([DuplicateRuleId])
);


GO
ALTER TABLE [dbo].[DuplicateRecordBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Account_DuplicateMatchingRecord]
    ON [dbo].[DuplicateRecordBase]([DuplicateRecordId] ASC, [DuplicateRecordIdTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_DuplicateRule_DuplicateBaseRecord]
    ON [dbo].[DuplicateRecordBase]([DuplicateRuleId] ASC) WHERE ([DuplicateRuleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_bulkdetect]
    ON [dbo].[DuplicateRecordBase]([BaseRecordId] ASC, [DuplicateRuleId] ASC, [AsyncOperationId] ASC, [BaseRecordIdTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_baserecordid]
    ON [dbo].[DuplicateRecordBase]([BaseRecordId] ASC, [BaseRecordIdTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_AsyncOperation_DuplicateBaseRecord]
    ON [dbo].[DuplicateRecordBase]([AsyncOperationId] ASC) WHERE ([AsyncOperationId] IS NOT NULL) WITH (FILLFACTOR = 80);

