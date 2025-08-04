


--
-- base view for BulkDeleteFailure
--
create view dbo.[BulkDeleteFailure]
 (
    -- logical attributes
    [OwnerId],
    [OwningBusinessUnit],
    [OwnerIdType],
    [OwningUser],

    -- physical attributes
    [ErrorDescription],
    [AsyncOperationId],
    [BulkDeleteFailureId],
    [RegardingObjectId],
    [ErrorNumber],
    [OrderedQueryIndex],
    [BulkDeleteOperationId],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName]
) with view_metadata as
select
    -- logical attributes
    [BulkDeleteOperation_BulkDeleteFailure].[OwnerId],
    [BulkDeleteOperation_BulkDeleteFailure].[OwningBusinessUnit],
    [BulkDeleteOperation_BulkDeleteFailure].[OwnerIdType],
    case when [BulkDeleteOperation_BulkDeleteFailure].OwnerIdType = 8
    then [BulkDeleteOperation_BulkDeleteFailure].OwnerId
    else null
    end,

    -- physical attribute
    [BulkDeleteFailureBase].[ErrorDescription],
    [BulkDeleteFailureBase].[AsyncOperationId],
    [BulkDeleteFailureBase].[BulkDeleteFailureId],
    [BulkDeleteFailureBase].[RegardingObjectId],
    [BulkDeleteFailureBase].[ErrorNumber],
    [BulkDeleteFailureBase].[OrderedQueryIndex],
    [BulkDeleteFailureBase].[BulkDeleteOperationId],
    [BulkDeleteFailureBase].[RegardingObjectIdYomiName],
    [BulkDeleteFailureBase].[RegardingObjectTypeCode],
    [BulkDeleteFailureBase].[RegardingObjectIdName]
from [BulkDeleteFailureBase] 
    left join [BulkDeleteOperationBase] [BulkDeleteOperation_BulkDeleteFailure] on ([BulkDeleteFailureBase].[BulkDeleteOperationId] = [BulkDeleteOperation_BulkDeleteFailure].[BulkDeleteOperationId])
