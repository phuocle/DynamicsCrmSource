


--
-- base view for SLAKPIInstance
--
create view dbo.[SLAKPIInstance]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [RegardingName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [SLAKPIInstanceId],
    [Name],
    [ComputedFailureTime],
    [ComputedWarningTime],
    [FailureTime],
    [OwningBusinessUnit],
    [Regarding],
    [Status],
    [SucceededOn],
    [WarningTime],
    [TransactionCurrencyId],
    [ExchangeRate],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [Description],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [RegardingObjectTypeCode],
    [WarningTimeReached],
    [RegardingYomiName],
    [RegardingIdName]
) with view_metadata as
select
    -- logical attributes
    [lk_slakpiinstancebase_createdby].[YomiFullName],
    [lk_slakpiinstancebase_createdby].[FullName],
    [lk_slakpiinstancebase_modifiedonbehalfby].[YomiFullName],
    [lk_slakpiinstancebase_modifiedonbehalfby].[FullName],
    [lk_slakpiinstancebase_createdonbehalfby].[FullName],
    [lk_slakpiinstancebase_createdonbehalfby].[YomiFullName],
    [lk_slakpiinstancebase_modifiedby].[YomiFullName],
    [lk_slakpiinstancebase_modifiedby].[FullName],
    [slakpiinstance_incident].[Title],
    [TransactionCurrency_slakpiinstance].[CurrencyName],

    -- ownership entries
    OwnerId = [SLAKPIInstanceBase].OwnerId,
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
    [SLAKPIInstanceBase].[SLAKPIInstanceId],
    [SLAKPIInstanceBase].[Name],
    [SLAKPIInstanceBase].[ComputedFailureTime],
    [SLAKPIInstanceBase].[ComputedWarningTime],
    [SLAKPIInstanceBase].[FailureTime],
    [SLAKPIInstanceBase].[OwningBusinessUnit],
    [SLAKPIInstanceBase].[Regarding],
    [SLAKPIInstanceBase].[Status],
    [SLAKPIInstanceBase].[SucceededOn],
    [SLAKPIInstanceBase].[WarningTime],
    [SLAKPIInstanceBase].[TransactionCurrencyId],
    [SLAKPIInstanceBase].[ExchangeRate],
    [SLAKPIInstanceBase].[CreatedBy],
    [SLAKPIInstanceBase].[CreatedOn],
    [SLAKPIInstanceBase].[CreatedOnBehalfBy],
    [SLAKPIInstanceBase].[Description],
    [SLAKPIInstanceBase].[ModifiedBy],
    [SLAKPIInstanceBase].[ModifiedOn],
    [SLAKPIInstanceBase].[ModifiedOnBehalfBy],
    [SLAKPIInstanceBase].[VersionNumber],
    [SLAKPIInstanceBase].[RegardingObjectTypeCode],
    [SLAKPIInstanceBase].[WarningTimeReached],
    [SLAKPIInstanceBase].[RegardingYomiName],
    [SLAKPIInstanceBase].[RegardingIdName]
from [SLAKPIInstanceBase] 
    left join [SystemUserBase] [lk_slakpiinstancebase_createdby] with(nolock) on ([SLAKPIInstanceBase].[CreatedBy] = [lk_slakpiinstancebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_slakpiinstancebase_createdonbehalfby] with(nolock) on ([SLAKPIInstanceBase].[CreatedOnBehalfBy] = [lk_slakpiinstancebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_slakpiinstancebase_modifiedby] with(nolock) on ([SLAKPIInstanceBase].[ModifiedBy] = [lk_slakpiinstancebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_slakpiinstancebase_modifiedonbehalfby] with(nolock) on ([SLAKPIInstanceBase].[ModifiedOnBehalfBy] = [lk_slakpiinstancebase_modifiedonbehalfby].[SystemUserId])
    left join [IncidentBase] [slakpiinstance_incident] on ([SLAKPIInstanceBase].[Regarding] = [slakpiinstance_incident].[IncidentId])
    left join [TransactionCurrencyBase] [TransactionCurrency_slakpiinstance] on ([SLAKPIInstanceBase].[TransactionCurrencyId] = [TransactionCurrency_slakpiinstance].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([SLAKPIInstanceBase].OwnerId = XXowner.OwnerId)
