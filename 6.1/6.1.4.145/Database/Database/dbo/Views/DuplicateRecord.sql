


--
-- base view for DuplicateRecord
--
create view dbo.[DuplicateRecord]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OwningUser],

    -- physical attributes
    [DuplicateRuleId],
    [BaseRecordId],
    [CreatedOn],
    [DuplicateId],
    [AsyncOperationId],
    [DuplicateRecordId],
    [BaseRecordIdTypeCode],
    [BaseRecordIdName],
    [DuplicateRecordIdName],
    [DuplicateRecordIdYomiName],
    [BaseRecordIdYomiName],
    [DuplicateRecordIdTypeCode]
) with view_metadata as
select
    -- logical attributes
    [AsyncOperation_DuplicateBaseRecord].[OwnerId],
    [AsyncOperation_DuplicateBaseRecord].[OwnerIdType],
    [AsyncOperation_DuplicateBaseRecord].[OwningBusinessUnit],
    case when [AsyncOperation_DuplicateBaseRecord].OwnerIdType = 8
    then [AsyncOperation_DuplicateBaseRecord].OwnerId
    else null
    end,

    -- physical attribute
    [DuplicateRecordBase].[DuplicateRuleId],
    [DuplicateRecordBase].[BaseRecordId],
    [DuplicateRecordBase].[CreatedOn],
    [DuplicateRecordBase].[DuplicateId],
    [DuplicateRecordBase].[AsyncOperationId],
    [DuplicateRecordBase].[DuplicateRecordId],
    [DuplicateRecordBase].[BaseRecordIdTypeCode],
    [DuplicateRecordBase].[BaseRecordIdName],
    [DuplicateRecordBase].[DuplicateRecordIdName],
    [DuplicateRecordBase].[DuplicateRecordIdYomiName],
    [DuplicateRecordBase].[BaseRecordIdYomiName],
    [DuplicateRecordBase].[DuplicateRecordIdTypeCode]
from [DuplicateRecordBase] 
    left join [AsyncOperationBase] [AsyncOperation_DuplicateBaseRecord] on ([DuplicateRecordBase].[AsyncOperationId] = [AsyncOperation_DuplicateBaseRecord].[AsyncOperationId])
