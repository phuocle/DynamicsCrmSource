


--
-- base view for BulkOperation
--
create view dbo.[BulkOperation]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ScheduledDurationMinutes],
    [ServiceId],
    [TargetedRecordTypeCode],
    [OwningBusinessUnit],
    [CreatedRecordTypeCode],
    [ScheduledEnd],
    [ActualDurationMinutes],
    [IsWorkflowCreated],
    [Parameters],
    [ErrorNumber],
    [StatusCode],
    [Subject],
    [BulkOperationNumber],
    [VersionNumber],
    [Description],
    [OperationTypeCode],
    [ScheduledStart],
    [TargetMembersCount],
    [ActivityId],
    [SuccessCount],
    [FailureCount],
    [CreatedBy],
    [ActualStart],
    [IsBilled],
    [CreatedOn],
    [ActualEnd],
    [RegardingObjectId],
    [StateCode],
    [ModifiedBy],
    [ModifiedOn],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [UTCConversionTimeZoneCode],
    [TimeZoneRuleVersionNumber],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity]
) with view_metadata as
select
    -- logical attributes
    [lk_BulkOperation_modifiedby].[FullName],
    [lk_BulkOperation_createdonbehalfby].[FullName],
    [lk_BulkOperation_modifiedonbehalfby].[FullName],
    [lk_BulkOperation_modifiedby].[YomiFullName],
    [lk_BulkOperation_createdonbehalfby].[YomiFullName],
    [lk_BulkOperation_modifiedonbehalfby].[YomiFullName],
    [lk_BulkOperation_createdby].[FullName],
    [lk_BulkOperation_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [ActivityPointerBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[TargetedRecordTypeCode],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[CreatedRecordTypeCode],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[Parameters],
    [ActivityPointerBase].[ErrorNumber],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[BulkOperationNumber],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[OperationTypeCode],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[TargetMembersCount],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[SuccessCount],
    [ActivityPointerBase].[FailureCount],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_BulkOperation_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_BulkOperation_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_BulkOperation_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_BulkOperation_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_BulkOperation_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_BulkOperation_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_BulkOperation_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_BulkOperation_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4406