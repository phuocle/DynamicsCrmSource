


--
-- base view for msdyn_kmfederatedsearchconfig
--
create view dbo.[msdyn_kmfederatedsearchconfig]
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
    [msdyn_kmfederatedsearchconfigId],
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
    [msdyn_Name],
    [IsDefault],
    [msdyn_Description],
    [Organization],
    [SearchType],
    [SharepointURL],
    [ConnectionId]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_kmfederatedsearchconfig_createdby].[FullName],
    [lk_msdyn_kmfederatedsearchconfig_createdby].[YomiFullName],
    [lk_msdyn_kmfederatedsearchconfig_createdonbehalfby].[FullName],
    [lk_msdyn_kmfederatedsearchconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_kmfederatedsearchconfig_modifiedby].[FullName],
    [lk_msdyn_kmfederatedsearchconfig_modifiedby].[YomiFullName],
    [lk_msdyn_kmfederatedsearchconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_kmfederatedsearchconfig_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_kmfederatedsearchconfigBase].OwnerId,
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
    [msdyn_kmfederatedsearchconfigBase].[msdyn_kmfederatedsearchconfigId],
    [msdyn_kmfederatedsearchconfigBase].[CreatedOn],
    [msdyn_kmfederatedsearchconfigBase].[CreatedBy],
    [msdyn_kmfederatedsearchconfigBase].[ModifiedOn],
    [msdyn_kmfederatedsearchconfigBase].[ModifiedBy],
    [msdyn_kmfederatedsearchconfigBase].[CreatedOnBehalfBy],
    [msdyn_kmfederatedsearchconfigBase].[ModifiedOnBehalfBy],
    [msdyn_kmfederatedsearchconfigBase].[OwningBusinessUnit],
    [msdyn_kmfederatedsearchconfigBase].[statecode],
    [msdyn_kmfederatedsearchconfigBase].[statuscode],
    [msdyn_kmfederatedsearchconfigBase].[VersionNumber],
    [msdyn_kmfederatedsearchconfigBase].[ImportSequenceNumber],
    [msdyn_kmfederatedsearchconfigBase].[OverriddenCreatedOn],
    [msdyn_kmfederatedsearchconfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_kmfederatedsearchconfigBase].[UTCConversionTimeZoneCode],
    [msdyn_kmfederatedsearchconfigBase].[msdyn_Name],
    [msdyn_kmfederatedsearchconfigBase].[IsDefault],
    [msdyn_kmfederatedsearchconfigBase].[msdyn_Description],
    [msdyn_kmfederatedsearchconfigBase].[Organization],
    [msdyn_kmfederatedsearchconfigBase].[SearchType],
    [msdyn_kmfederatedsearchconfigBase].[SharepointURL],
    [msdyn_kmfederatedsearchconfigBase].[ConnectionId]
from [msdyn_kmfederatedsearchconfigBase] 
    left join [SystemUserBase] [lk_msdyn_kmfederatedsearchconfig_createdby] on ([msdyn_kmfederatedsearchconfigBase].[CreatedBy] = [lk_msdyn_kmfederatedsearchconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_kmfederatedsearchconfig_createdonbehalfby] on ([msdyn_kmfederatedsearchconfigBase].[CreatedOnBehalfBy] = [lk_msdyn_kmfederatedsearchconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_kmfederatedsearchconfig_modifiedby] on ([msdyn_kmfederatedsearchconfigBase].[ModifiedBy] = [lk_msdyn_kmfederatedsearchconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_kmfederatedsearchconfig_modifiedonbehalfby] on ([msdyn_kmfederatedsearchconfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_kmfederatedsearchconfig_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_kmfederatedsearchconfigBase].OwnerId = XXowner.OwnerId)
