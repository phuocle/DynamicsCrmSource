CREATE TABLE [dbo].[CascadeDeleteAsyncOperation] (
    [OperationId]                UNIQUEIDENTIFIER NOT NULL,
    [UserIdToImpersonate]        UNIQUEIDENTIFIER NOT NULL,
    [ParentEntityIds]            NVARCHAR (MAX)   NULL,
    [ParentObjectTypeCode]       INT              NOT NULL,
    [RetryUntil]                 DATETIME         CONSTRAINT [DF_CDAO_retryUntil] DEFAULT (dateadd(hour,(24),getutcdate())) NOT NULL,
    [ParentEntityIdsDeleted]     BIT              CONSTRAINT [DF_CDAO_parentsNotDeleted] DEFAULT ((0)) NOT NULL,
    [RetryCount]                 INT              CONSTRAINT [DF_CDAO_retryCount] DEFAULT ((0)) NOT NULL,
    [RecordLockedByAsyncExpires] DATETIME         NULL,
    [DurationInMs]               BIGINT           NULL,
    [CreatedOn]                  DATETIME         CONSTRAINT [DF_CDAO_createdOn] DEFAULT (getutcdate()) NOT NULL,
    [ModifiedOn]                 DATETIME         CONSTRAINT [DF_CDAO_modifiedOn] DEFAULT (getutcdate()) NOT NULL,
    [ValidRecordContent]         BIT              CONSTRAINT [DF_CDAO_validRecordContent] DEFAULT ((1)) NOT NULL,
    [ExceptionMessage]           NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_CDAO_PrimaryKey_operationId] PRIMARY KEY CLUSTERED ([OperationId] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CascadeDeleteAsyncOperation]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CascadeDeleteAsyncOperation] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_recordLockedByAsyncExpires]
    ON [dbo].[CascadeDeleteAsyncOperation]([RecordLockedByAsyncExpires] ASC);

