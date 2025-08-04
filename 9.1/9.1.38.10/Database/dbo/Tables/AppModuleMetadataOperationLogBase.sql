CREATE TABLE [dbo].[AppModuleMetadataOperationLogBase] (
    [AppModuleId]                     UNIQUEIDENTIFIER NOT NULL,
    [StartedOn]                       DATETIME         NULL,
    [AppModuleMetadataOperationLogId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NOT NULL,
    [State]                           INT              NULL,
    [ModifiedOn]                      DATETIME         NOT NULL,
    [RetryCount]                      INT              NULL
);


GO
ALTER TABLE [dbo].[AppModuleMetadataOperationLogBase] SET (LOCK_ESCALATION = DISABLE);

