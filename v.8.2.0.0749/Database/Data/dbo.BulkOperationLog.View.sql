USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[BulkOperationLog]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for BulkOperationLog
--
create view [dbo].[BulkOperationLog]
 (
    -- logical attributes
    [CreatedObjectIdName],
    [OwnerId],
    [OwnerIdType],
    [OwningUser],
    [OwningBusinessUnit],
    [BulkOperationIdName],


    RegardingObjectIdName,
    RegardingObjectIdYomiName,
    RegardingObjectIdDsc,

    -- physical attributes
    [RegardingObjectId],
    [ErrorNumber],
    [CreatedObjectId],
    [BulkOperationLogId],
    [BulkOperationId],
    [AdditionalInfo],
    [RegardingObjectIdTypeCode],
    [CreatedObjectIdTypeCode]
) with view_metadata as
select
    -- logical attributes
    [CreatedActivity_BulkOperationLogs].[Subject],
    [activity_pointer_BulkOperation_logs].[OwnerId],
    [activity_pointer_BulkOperation_logs].[OwnerIdType],
    case when [activity_pointer_BulkOperation_logs].OwnerIdType = 8
    then [activity_pointer_BulkOperation_logs].OwnerId
    else null
    end,
    [activity_pointer_BulkOperation_logs].[OwningBusinessUnit],
    [BulkOperation_logs].[BulkOperationNumber],


	RegardingObjectIdName = coalesce(XXaccount.Name, XXcontact.FullName, XXlead.FullName), 
	RegardingObjectIdYomiName = coalesce(XXaccount.YomiName, XXcontact.YomiFullName, XXlead.YomiFullName),      
	RegardingObjectIdDsc  = 0,
    -- physical attribute
    [BulkOperationLogBase].[RegardingObjectId],
    [BulkOperationLogBase].[ErrorNumber],
    [BulkOperationLogBase].[CreatedObjectId],
    [BulkOperationLogBase].[BulkOperationLogId],
    [BulkOperationLogBase].[BulkOperationId],
    [BulkOperationLogBase].[AdditionalInfo],
    [BulkOperationLogBase].[RegardingObjectIdTypeCode],
    [BulkOperationLogBase].[CreatedObjectIdTypeCode]
from [BulkOperationLogBase] 

	left join AccountBase XXaccount on ([BulkOperationLogBase].RegardingObjectId = XXaccount.AccountId and [BulkOperationLogBase].RegardingObjectIdTypeCode = 1)
	left join ContactBase XXcontact on ([BulkOperationLogBase].RegardingObjectId = XXcontact.ContactId and [BulkOperationLogBase].RegardingObjectIdTypeCode = 2)
	left join LeadBase XXlead on ([BulkOperationLogBase].RegardingObjectId = XXlead.LeadId and [BulkOperationLogBase].RegardingObjectIdTypeCode = 4)
    left join [ActivityPointerBase] [activity_pointer_BulkOperation_logs] with(nolock) on ([BulkOperationLogBase].[BulkOperationId] = [activity_pointer_BulkOperation_logs].[ActivityId])
    left join [ActivityPointerBase] [BulkOperation_logs] on ([BulkOperationLogBase].[BulkOperationId] = [BulkOperation_logs].[ActivityId] and [BulkOperation_logs].[ActivityTypeCode] = 4406)
    left join [ActivityPointerBase] [CreatedActivity_BulkOperationLogs] with(nolock) on ([BulkOperationLogBase].[CreatedObjectId] = [CreatedActivity_BulkOperationLogs].[ActivityId])

GO
