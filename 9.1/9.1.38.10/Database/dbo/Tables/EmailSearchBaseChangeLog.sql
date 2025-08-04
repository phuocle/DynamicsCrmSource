CREATE TABLE [dbo].[EmailSearchBaseChangeLog] (
    [EmailSearchBaseChangeLogId] UNIQUEIDENTIFIER NOT NULL,
    [LastUpdated]                DATETIME         NOT NULL,
    PRIMARY KEY CLUSTERED ([EmailSearchBaseChangeLogId] ASC)
);


GO
ALTER TABLE [dbo].[EmailSearchBaseChangeLog] SET (LOCK_ESCALATION = DISABLE);

