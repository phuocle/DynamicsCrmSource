CREATE TABLE [dbo].[BulkDeleteOperationBase] (
    [OwningUser]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [BulkDeleteOperationId]     UNIQUEIDENTIFIER NOT NULL,
    [IsRecurring]               BIT              CONSTRAINT [DF_BulkDeleteOperationBase_IsRecurring] DEFAULT ((0)) NOT NULL,
    [ProcessingQEIndex]         INT              CONSTRAINT [DF_BulkDeleteOperationBase_ProcessingQEIndex] DEFAULT ((0)) NULL,
    [AsyncOperationId]          UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OrderedQuerySetXml]        NVARCHAR (MAX)   NULL,
    [FailureCount]              INT              CONSTRAINT [DF_BulkDeleteOperationBase_FailureCount] DEFAULT ((0)) NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [SuccessCount]              INT              CONSTRAINT [DF_BulkDeleteOperationBase_SuccessCount] DEFAULT ((0)) NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_BulkDeleteOperationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BulkDeleteOperationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_BulkDeleteOperation] PRIMARY KEY CLUSTERED ([BulkDeleteOperationId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_AsyncOperation_BulkDeleteOperation]
    ON [dbo].[BulkDeleteOperationBase]([AsyncOperationId] ASC) WHERE ([AsyncOperationId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IsRecurring_BulkDeleteOperation]
    ON [dbo].[BulkDeleteOperationBase]([IsRecurring] ASC, [SuccessCount] ASC, [FailureCount] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BulkDeleteOperationBase]([OwningUser] ASC, [OwningBusinessUnit] ASC) WITH (FILLFACTOR = 80);

