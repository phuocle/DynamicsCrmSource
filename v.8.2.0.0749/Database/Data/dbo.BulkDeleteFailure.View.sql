USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[BulkDeleteFailure]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for BulkDeleteFailure
--
create view [dbo].[BulkDeleteFailure]
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

GO
