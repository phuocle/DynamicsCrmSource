CREATE TABLE [dbo].[CascadeAssignAsyncOperation] (
    [OperationId]                UNIQUEIDENTIFIER NOT NULL,
    [UserIdToImpersonate]        UNIQUEIDENTIFIER NOT NULL,
    [ParentEntityId]             UNIQUEIDENTIFIER NOT NULL,
    [ParentObjectTypeCode]       INT              NOT NULL,
    [Assignee]                   UNIQUEIDENTIFIER NOT NULL,
    [AssigneeType]               INT              NOT NULL,
    [ParentEntityIdAssigned]     BIT              CONSTRAINT [DF_CAAO_parentEntityIdAssigned] DEFAULT ((0)) NOT NULL,
    [RetryUntil]                 DATETIME         CONSTRAINT [DF_CAAO_retryUntil] DEFAULT (dateadd(hour,(24),getutcdate())) NOT NULL,
    [RetryCount]                 INT              CONSTRAINT [DF_CAAO_retryCount] DEFAULT ((0)) NOT NULL,
    [RecordLockedByAsyncExpires] DATETIME         NULL,
    [DurationInMs]               BIGINT           NULL,
    [CreatedOn]                  DATETIME         CONSTRAINT [DF_CAAO_createdOn] DEFAULT (getutcdate()) NOT NULL,
    [ModifiedOn]                 DATETIME         CONSTRAINT [DF_CAAO_modifiedOn] DEFAULT (getutcdate()) NOT NULL,
    [ValidRecordContent]         BIT              CONSTRAINT [DF_CAAO_validRecordContent] DEFAULT ((1)) NOT NULL,
    [ExceptionMessage]           NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_CAAO_PrimaryKey_operationId] PRIMARY KEY CLUSTERED ([OperationId] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CascadeAssignAsyncOperation]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CascadeAssignAsyncOperation] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_recordLockedByAsyncExpires]
    ON [dbo].[CascadeAssignAsyncOperation]([RecordLockedByAsyncExpires] ASC);

