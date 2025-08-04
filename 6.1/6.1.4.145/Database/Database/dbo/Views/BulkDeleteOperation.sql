


--
-- base view for BulkDeleteOperation
--
create view dbo.[BulkDeleteOperation]
 (
    -- logical attributes
    [Name],
    [StatusCode],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [NextRun],
    [StateCode],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],

    -- physical attributes
    [OwningUser],
    [ModifiedOn],
    [BulkDeleteOperationId],
    [IsRecurring],
    [ProcessingQEIndex],
    [AsyncOperationId],
    [UTCConversionTimeZoneCode],
    [OrderedQuerySetXml],
    [FailureCount],
    [ModifiedBy],
    [CreatedBy],
    [OwningBusinessUnit],
    [TimeZoneRuleVersionNumber],
    [SuccessCount],
    [CreatedOn],
    [OwnerId],
    [OwnerIdType],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [AsyncOperation_BulkDeleteOperation].[Name],
    [AsyncOperation_BulkDeleteOperation].[StatusCode],
    [lk_bulkdeleteoperationbase_modifiedonbehalfby].[FullName],
    [lk_bulkdeleteoperationbase_createdby].[YomiFullName],
    [AsyncOperation_BulkDeleteOperation].[PostponeUntil],
    [AsyncOperation_BulkDeleteOperation].[StateCode],
    [lk_bulkdeleteoperationbase_createdonbehalfby].[FullName],
    [lk_bulkdeleteoperationbase_createdby].[FullName],
    [lk_bulkdeleteoperationbase_createdonbehalfby].[YomiFullName],
    [lk_bulkdeleteoperationbase_modifiedby].[FullName],
    [lk_bulkdeleteoperationbase_modifiedonbehalfby].[YomiFullName],
    [lk_bulkdeleteoperationbase_modifiedby].[YomiFullName],

    -- physical attribute
    [BulkDeleteOperationBase].[OwningUser],
    [BulkDeleteOperationBase].[ModifiedOn],
    [BulkDeleteOperationBase].[BulkDeleteOperationId],
    [BulkDeleteOperationBase].[IsRecurring],
    [BulkDeleteOperationBase].[ProcessingQEIndex],
    [BulkDeleteOperationBase].[AsyncOperationId],
    [BulkDeleteOperationBase].[UTCConversionTimeZoneCode],
    [BulkDeleteOperationBase].[OrderedQuerySetXml],
    [BulkDeleteOperationBase].[FailureCount],
    [BulkDeleteOperationBase].[ModifiedBy],
    [BulkDeleteOperationBase].[CreatedBy],
    [BulkDeleteOperationBase].[OwningBusinessUnit],
    [BulkDeleteOperationBase].[TimeZoneRuleVersionNumber],
    [BulkDeleteOperationBase].[SuccessCount],
    [BulkDeleteOperationBase].[CreatedOn],
    [BulkDeleteOperationBase].[OwnerId],
    [BulkDeleteOperationBase].[OwnerIdType],
    [BulkDeleteOperationBase].[CreatedOnBehalfBy],
    [BulkDeleteOperationBase].[ModifiedOnBehalfBy]
from [BulkDeleteOperationBase] 
    left join [AsyncOperationBase] [AsyncOperation_BulkDeleteOperation] on ([BulkDeleteOperationBase].[AsyncOperationId] = [AsyncOperation_BulkDeleteOperation].[AsyncOperationId])
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_createdby] with(nolock) on ([BulkDeleteOperationBase].[CreatedBy] = [lk_bulkdeleteoperationbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_createdonbehalfby] with(nolock) on ([BulkDeleteOperationBase].[CreatedOnBehalfBy] = [lk_bulkdeleteoperationbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_modifiedby] with(nolock) on ([BulkDeleteOperationBase].[ModifiedBy] = [lk_bulkdeleteoperationbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_modifiedonbehalfby] with(nolock) on ([BulkDeleteOperationBase].[ModifiedOnBehalfBy] = [lk_bulkdeleteoperationbase_modifiedonbehalfby].[SystemUserId])
