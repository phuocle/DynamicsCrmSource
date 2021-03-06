USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SyncError]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for SyncError
--
create view [dbo].[SyncError]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [SyncErrorId],
    [Name],
    [Action],
    [ErrorMessage],
    [ErrorDetail],
    [ActionData],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [ErrorTime],
    [VersionNumber],
    [RequestData],
    [ErrorType],
    [StatusCode],
    [StateCode],
    [Description],
    [ErrorCode]
) with view_metadata as
select
    -- logical attributes
    [lk_syncerrorbase_createdonbehalfby].[FullName],
    [lk_syncerrorbase_createdonbehalfby].[YomiFullName],
    [lk_syncerrorbase_createdby].[FullName],
    [lk_syncerrorbase_createdby].[YomiFullName],
    [lk_syncerrorbase_modifiedby].[FullName],
    [lk_syncerrorbase_modifiedby].[YomiFullName],
    [lk_syncerrorbase_modifiedonbehalfby].[YomiFullName],
    [lk_syncerrorbase_modifiedonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [SyncErrorBase].OwnerId,
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
    [SyncErrorBase].[CreatedBy],
    [SyncErrorBase].[CreatedOn],
    [SyncErrorBase].[CreatedOnBehalfBy],
    [SyncErrorBase].[ModifiedBy],
    [SyncErrorBase].[ModifiedOn],
    [SyncErrorBase].[ModifiedOnBehalfBy],
    [SyncErrorBase].[OwningBusinessUnit],
    [SyncErrorBase].[SyncErrorId],
    [SyncErrorBase].[Name],
    [SyncErrorBase].[Action],
    [SyncErrorBase].[ErrorMessage],
    [SyncErrorBase].[ErrorDetail],
    [SyncErrorBase].[ActionData],
    [SyncErrorBase].[RegardingObjectId],
    [SyncErrorBase].[RegardingObjectIdName],
    [SyncErrorBase].[RegardingObjectIdYomiName],
    [SyncErrorBase].[RegardingObjectTypeCode],
    [SyncErrorBase].[ErrorTime],
    [SyncErrorBase].[VersionNumber],
    [SyncErrorBase].[RequestData],
    [SyncErrorBase].[ErrorType],
    [SyncErrorBase].[StatusCode],
    [SyncErrorBase].[StateCode],
    [SyncErrorBase].[Description],
    [SyncErrorBase].[ErrorCode]
from [SyncErrorBase] 
    left join [SystemUserBase] [lk_syncerrorbase_createdby] with(nolock) on ([SyncErrorBase].[CreatedBy] = [lk_syncerrorbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_syncerrorbase_createdonbehalfby] with(nolock) on ([SyncErrorBase].[CreatedOnBehalfBy] = [lk_syncerrorbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_syncerrorbase_modifiedby] with(nolock) on ([SyncErrorBase].[ModifiedBy] = [lk_syncerrorbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_syncerrorbase_modifiedonbehalfby] with(nolock) on ([SyncErrorBase].[ModifiedOnBehalfBy] = [lk_syncerrorbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([SyncErrorBase].OwnerId = XXowner.OwnerId)

GO
