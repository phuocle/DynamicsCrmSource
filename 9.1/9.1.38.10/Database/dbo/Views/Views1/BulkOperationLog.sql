


--
-- base view for BulkOperationLog
--
create view dbo.[BulkOperationLog]
 (
    -- logical attributes
    [BulkOperationIdName],
    [CreatedObjectIdName],
    [OwnerId],
    [OwnerIdType],
    [OwningUser],
    [OwningBusinessUnit],

    -- ownership entries
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwningTeam,


    RegardingObjectIdName,
    RegardingObjectIdYomiName,
    RegardingObjectIdDsc,

    -- physical attributes
    [BulkOperationLogId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [AdditionalInfo],
    [BulkOperationId],
    [CreatedObjectId],
    [ErrorNumber],
    [RegardingObjectId],
    [CreatedObjectIdTypeCode],
    [CreatedObjectIdYomiName],
    [RegardingObjectIdTypeCode],
    [BulkOperationIdType],
    [BulkOperationIdYomiName],
    [ErrorDescriptionFormatted],
    [ErrorNumberFormatted],
    [CampaignActivityId],
    [CampaignActivityIdType],
    [CampaignActivityIdName],
    [CampaignActivityIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [BulkOperation_logs].[BulkOperationNumber],
    [CreatedActivity_BulkOperationLogs].[Subject],
    [activity_pointer_BulkOperation_logs].[OwnerId],
    [activity_pointer_BulkOperation_logs].[OwnerIdType],
    case when [activity_pointer_BulkOperation_logs].OwnerIdType = 8
    then [activity_pointer_BulkOperation_logs].OwnerId
    else null
    end,
    [activity_pointer_BulkOperation_logs].[OwningBusinessUnit],

    -- ownership entries
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,


	RegardingObjectIdName = coalesce(XXaccount.Name, XXcontact.FullName), 
	RegardingObjectIdYomiName = coalesce(XXaccount.YomiName, XXcontact.YomiFullName),      
	RegardingObjectIdDsc  = 0,
    -- physical attribute
    [BulkOperationLogBase].[BulkOperationLogId],
    [BulkOperationLogBase].[VersionNumber],
    [BulkOperationLogBase].[ImportSequenceNumber],
    [BulkOperationLogBase].[OverriddenCreatedOn],
    [BulkOperationLogBase].[TimeZoneRuleVersionNumber],
    [BulkOperationLogBase].[UTCConversionTimeZoneCode],
    [BulkOperationLogBase].[Name],
    [BulkOperationLogBase].[AdditionalInfo],
    [BulkOperationLogBase].[BulkOperationId],
    [BulkOperationLogBase].[CreatedObjectId],
    [BulkOperationLogBase].[ErrorNumber],
    [BulkOperationLogBase].[RegardingObjectId],
    [BulkOperationLogBase].[CreatedObjectIdTypeCode],
    [BulkOperationLogBase].[CreatedObjectIdYomiName],
    [BulkOperationLogBase].[RegardingObjectIdTypeCode],
    [BulkOperationLogBase].[BulkOperationIdType],
    [BulkOperationLogBase].[BulkOperationIdYomiName],
    [BulkOperationLogBase].[ErrorDescriptionFormatted],
    [BulkOperationLogBase].[ErrorNumberFormatted],
    [BulkOperationLogBase].[CampaignActivityId],
    [BulkOperationLogBase].[CampaignActivityIdType],
    [BulkOperationLogBase].[CampaignActivityIdName],
    [BulkOperationLogBase].[CampaignActivityIdYomiName]
from [BulkOperationLogBase] 

	left join AccountBase XXaccount on ([BulkOperationLogBase].RegardingObjectId = XXaccount.AccountId and [BulkOperationLogBase].RegardingObjectIdTypeCode = 1)
	left join ContactBase XXcontact on ([BulkOperationLogBase].RegardingObjectId = XXcontact.ContactId and [BulkOperationLogBase].RegardingObjectIdTypeCode = 2)
    left join [ActivityPointerBase] [activity_pointer_BulkOperation_logs] on ([BulkOperationLogBase].[BulkOperationId] = [activity_pointer_BulkOperation_logs].[ActivityId])
    left join [ActivityPointerBase] [BulkOperation_logs] on ([BulkOperationLogBase].[BulkOperationId] = [BulkOperation_logs].[ActivityId] and [BulkOperation_logs].[ActivityTypeCode] = 4406)
    left join [ActivityPointerBase] [CreatedActivity_BulkOperationLogs] on ([BulkOperationLogBase].[CreatedObjectId] = [CreatedActivity_BulkOperationLogs].[ActivityId])
    left join OwnerBase XXowner on ([activity_pointer_BulkOperation_logs].OwnerId = XXowner.OwnerId)
