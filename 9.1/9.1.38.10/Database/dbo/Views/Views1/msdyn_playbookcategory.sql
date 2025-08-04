


--
-- base view for msdyn_playbookcategory
--
create view dbo.[msdyn_playbookcategory]
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
    [msdyn_playbookcategoryId],
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
    [msdyn_Description]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_playbookcategory_createdby].[FullName],
    [lk_msdyn_playbookcategory_createdby].[YomiFullName],
    [lk_msdyn_playbookcategory_createdonbehalfby].[FullName],
    [lk_msdyn_playbookcategory_createdonbehalfby].[YomiFullName],
    [lk_msdyn_playbookcategory_modifiedby].[FullName],
    [lk_msdyn_playbookcategory_modifiedby].[YomiFullName],
    [lk_msdyn_playbookcategory_modifiedonbehalfby].[FullName],
    [lk_msdyn_playbookcategory_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_playbookcategoryBase].OwnerId,
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
    [msdyn_playbookcategoryBase].[msdyn_playbookcategoryId],
    [msdyn_playbookcategoryBase].[CreatedOn],
    [msdyn_playbookcategoryBase].[CreatedBy],
    [msdyn_playbookcategoryBase].[ModifiedOn],
    [msdyn_playbookcategoryBase].[ModifiedBy],
    [msdyn_playbookcategoryBase].[CreatedOnBehalfBy],
    [msdyn_playbookcategoryBase].[ModifiedOnBehalfBy],
    [msdyn_playbookcategoryBase].[OwningBusinessUnit],
    [msdyn_playbookcategoryBase].[statecode],
    [msdyn_playbookcategoryBase].[statuscode],
    [msdyn_playbookcategoryBase].[VersionNumber],
    [msdyn_playbookcategoryBase].[ImportSequenceNumber],
    [msdyn_playbookcategoryBase].[OverriddenCreatedOn],
    [msdyn_playbookcategoryBase].[TimeZoneRuleVersionNumber],
    [msdyn_playbookcategoryBase].[UTCConversionTimeZoneCode],
    [msdyn_playbookcategoryBase].[msdyn_name],
    [msdyn_playbookcategoryBase].[msdyn_Description]
from [msdyn_playbookcategoryBase] 
    left join [SystemUserBase] [lk_msdyn_playbookcategory_createdby] on ([msdyn_playbookcategoryBase].[CreatedBy] = [lk_msdyn_playbookcategory_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookcategory_createdonbehalfby] on ([msdyn_playbookcategoryBase].[CreatedOnBehalfBy] = [lk_msdyn_playbookcategory_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookcategory_modifiedby] on ([msdyn_playbookcategoryBase].[ModifiedBy] = [lk_msdyn_playbookcategory_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookcategory_modifiedonbehalfby] on ([msdyn_playbookcategoryBase].[ModifiedOnBehalfBy] = [lk_msdyn_playbookcategory_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_playbookcategoryBase].OwnerId = XXowner.OwnerId)
