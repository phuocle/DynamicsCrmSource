CREATE TABLE [dbo].[DataEngineLeadBlockingData] (
    [data_retrieval_datetime]      DATETIME NOT NULL,
    [blocked_spid]                 SMALLINT NOT NULL,
    [lead_blocking_spid]           SMALLINT NOT NULL,
    [lead_blocking_transaction_id] BIGINT   NULL
);


GO
ALTER TABLE [dbo].[DataEngineLeadBlockingData] SET (LOCK_ESCALATION = DISABLE);

