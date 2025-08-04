


--
-- base view for msdyn_actioncardregarding
--
create view dbo.[msdyn_actioncardregarding]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_actioncardregardingId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [msdyn_name],
    [msdyn_actioncardid]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_actioncardregarding_createdby].[FullName],
    [lk_msdyn_actioncardregarding_createdby].[YomiFullName],
    [lk_msdyn_actioncardregarding_createdonbehalfby].[FullName],
    [lk_msdyn_actioncardregarding_createdonbehalfby].[YomiFullName],
    [lk_msdyn_actioncardregarding_modifiedby].[FullName],
    [lk_msdyn_actioncardregarding_modifiedby].[YomiFullName],
    [lk_msdyn_actioncardregarding_modifiedonbehalfby].[FullName],
    [lk_msdyn_actioncardregarding_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_actioncardregardingBase].OwnerId,
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
    [msdyn_actioncardregardingBase].[msdyn_actioncardregardingId],
    [msdyn_actioncardregardingBase].[CreatedOn],
    [msdyn_actioncardregardingBase].[CreatedBy],
    [msdyn_actioncardregardingBase].[ModifiedOn],
    [msdyn_actioncardregardingBase].[ModifiedBy],
    [msdyn_actioncardregardingBase].[CreatedOnBehalfBy],
    [msdyn_actioncardregardingBase].[ModifiedOnBehalfBy],
    [msdyn_actioncardregardingBase].[OwningBusinessUnit],
    [msdyn_actioncardregardingBase].[statecode],
    [msdyn_actioncardregardingBase].[statuscode],
    [msdyn_actioncardregardingBase].[VersionNumber],
    [msdyn_actioncardregardingBase].[ImportSequenceNumber],
    [msdyn_actioncardregardingBase].[OverriddenCreatedOn],
    [msdyn_actioncardregardingBase].[TimeZoneRuleVersionNumber],
    [msdyn_actioncardregardingBase].[UTCConversionTimeZoneCode],
    [msdyn_actioncardregardingBase].[msdyn_name],
    [msdyn_actioncardregardingBase].[msdyn_actioncardid]
from [msdyn_actioncardregardingBase] 
    left join [SystemUserBase] [lk_msdyn_actioncardregarding_createdby] on ([msdyn_actioncardregardingBase].[CreatedBy] = [lk_msdyn_actioncardregarding_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_actioncardregarding_createdonbehalfby] on ([msdyn_actioncardregardingBase].[CreatedOnBehalfBy] = [lk_msdyn_actioncardregarding_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_actioncardregarding_modifiedby] on ([msdyn_actioncardregardingBase].[ModifiedBy] = [lk_msdyn_actioncardregarding_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_actioncardregarding_modifiedonbehalfby] on ([msdyn_actioncardregardingBase].[ModifiedOnBehalfBy] = [lk_msdyn_actioncardregarding_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_actioncardregardingBase].OwnerId = XXowner.OwnerId)
