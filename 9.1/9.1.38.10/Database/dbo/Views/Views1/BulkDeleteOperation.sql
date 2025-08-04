


--
-- base view for BulkDeleteOperation
--
create view dbo.[BulkDeleteOperation]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [Name],
    [StatusCode],
    [NextRun],
    [StateCode],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

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
    [lk_bulkdeleteoperationbase_modifiedby].[FullName],
    [lk_bulkdeleteoperationbase_modifiedby].[YomiFullName],
    [AsyncOperation_BulkDeleteOperation].[Name],
    [AsyncOperation_BulkDeleteOperation].[StatusCode],
    [AsyncOperation_BulkDeleteOperation].[PostponeUntil],
    [AsyncOperation_BulkDeleteOperation].[StateCode],
    [lk_bulkdeleteoperationbase_createdby].[YomiFullName],
    [lk_bulkdeleteoperationbase_createdby].[FullName],
    [lk_bulkdeleteoperationbase_modifiedonbehalfby].[FullName],
    [lk_bulkdeleteoperationbase_modifiedonbehalfby].[YomiFullName],
    [lk_bulkdeleteoperationbase_createdonbehalfby].[FullName],
    [lk_bulkdeleteoperationbase_createdonbehalfby].[YomiFullName],

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
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_createdby]  on ([BulkDeleteOperationBase].[CreatedBy] = [lk_bulkdeleteoperationbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_createdonbehalfby]  on ([BulkDeleteOperationBase].[CreatedOnBehalfBy] = [lk_bulkdeleteoperationbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_modifiedby]  on ([BulkDeleteOperationBase].[ModifiedBy] = [lk_bulkdeleteoperationbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bulkdeleteoperationbase_modifiedonbehalfby]  on ([BulkDeleteOperationBase].[ModifiedOnBehalfBy] = [lk_bulkdeleteoperationbase_modifiedonbehalfby].[SystemUserId])
