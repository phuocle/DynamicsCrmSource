CREATE TABLE [dbo].[BulkDeleteOperationBase]
(
[OwningUser] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[BulkDeleteOperationId] [uniqueidentifier] NOT NULL,
[IsRecurring] [bit] NOT NULL CONSTRAINT [DF_BulkDeleteOperationBase_IsRecurring] DEFAULT ((0)),
[ProcessingQEIndex] [int] NULL CONSTRAINT [DF_BulkDeleteOperationBase_ProcessingQEIndex] DEFAULT ((0)),
[AsyncOperationId] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OrderedQuerySetXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FailureCount] [int] NULL CONSTRAINT [DF_BulkDeleteOperationBase_FailureCount] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[SuccessCount] [int] NULL CONSTRAINT [DF_BulkDeleteOperationBase_SuccessCount] DEFAULT ((0)),
[CreatedOn] [datetime] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_BulkDeleteOperationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BulkDeleteOperationBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkDeleteOperationBase] ADD CONSTRAINT [cndx_PrimaryKey_BulkDeleteOperation] PRIMARY KEY CLUSTERED  ([BulkDeleteOperationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_AsyncOperation_BulkDeleteOperation] ON [dbo].[BulkDeleteOperationBase] ([AsyncOperationId]) WHERE ([AsyncOperationId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_IsRecurring_BulkDeleteOperation] ON [dbo].[BulkDeleteOperationBase] ([IsRecurring], [SuccessCount], [FailureCount]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BulkDeleteOperationBase] ([OwningUser], [OwningBusinessUnit]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkDeleteOperationBase] ADD CONSTRAINT [BulkDeleteOperation_BusinessUnit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
