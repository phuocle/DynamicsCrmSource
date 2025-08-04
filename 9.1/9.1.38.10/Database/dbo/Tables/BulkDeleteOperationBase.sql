CREATE TABLE [dbo].[BulkDeleteOperationBase] (
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OwningUser]                UNIQUEIDENTIFIER NULL,
    [BulkDeleteOperationId]     UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_BulkDeleteOperationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [SuccessCount]              INT              CONSTRAINT [DF_BulkDeleteOperationBase_SuccessCount] DEFAULT ((0)) NULL,
    [IsRecurring]               BIT              CONSTRAINT [DF_BulkDeleteOperationBase_IsRecurring] DEFAULT ((0)) NOT NULL,
    [OrderedQuerySetXml]        NVARCHAR (MAX)   NULL,
    [AsyncOperationId]          UNIQUEIDENTIFIER NULL,
    [FailureCount]              INT              CONSTRAINT [DF_BulkDeleteOperationBase_FailureCount] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ProcessingQEIndex]         INT              CONSTRAINT [DF_BulkDeleteOperationBase_ProcessingQEIndex] DEFAULT ((0)) NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BulkDeleteOperationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_BulkDeleteOperation] PRIMARY KEY CLUSTERED ([BulkDeleteOperationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BulkDeleteOperation_BusinessUnit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BulkDeleteOperationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[BulkDeleteOperationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BulkDeleteOperationBase]([OwningUser] ASC, [OwningBusinessUnit] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_AsyncOperation_BulkDeleteOperation]
    ON [dbo].[BulkDeleteOperationBase]([AsyncOperationId] ASC) WHERE ([AsyncOperationId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IsRecurring_BulkDeleteOperation]
    ON [dbo].[BulkDeleteOperationBase]([IsRecurring] ASC, [SuccessCount] ASC, [FailureCount] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D96C4FD99BA24B4CA7DE13712D7F4280]
    ON [dbo].[BulkDeleteOperationBase]([BulkDeleteOperationId] ASC)
    INCLUDE([SuccessCount], [FailureCount]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

