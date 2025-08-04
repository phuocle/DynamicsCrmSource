


--
-- base view for adminsettingsentity
--
create view dbo.[adminsettingsentity]
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
    [adminsettingsentityId],
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
    [new_name]
) with view_metadata as
select
    -- logical attributes
    [lk_adminsettingsentity_createdby].[FullName],
    [lk_adminsettingsentity_createdby].[YomiFullName],
    [lk_adminsettingsentity_createdonbehalfby].[FullName],
    [lk_adminsettingsentity_createdonbehalfby].[YomiFullName],
    [lk_adminsettingsentity_modifiedby].[FullName],
    [lk_adminsettingsentity_modifiedby].[YomiFullName],
    [lk_adminsettingsentity_modifiedonbehalfby].[FullName],
    [lk_adminsettingsentity_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [adminsettingsentityBase].OwnerId,
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
    [adminsettingsentityBase].[adminsettingsentityId],
    [adminsettingsentityBase].[CreatedOn],
    [adminsettingsentityBase].[CreatedBy],
    [adminsettingsentityBase].[ModifiedOn],
    [adminsettingsentityBase].[ModifiedBy],
    [adminsettingsentityBase].[CreatedOnBehalfBy],
    [adminsettingsentityBase].[ModifiedOnBehalfBy],
    [adminsettingsentityBase].[OwningBusinessUnit],
    [adminsettingsentityBase].[statecode],
    [adminsettingsentityBase].[statuscode],
    [adminsettingsentityBase].[VersionNumber],
    [adminsettingsentityBase].[ImportSequenceNumber],
    [adminsettingsentityBase].[OverriddenCreatedOn],
    [adminsettingsentityBase].[TimeZoneRuleVersionNumber],
    [adminsettingsentityBase].[UTCConversionTimeZoneCode],
    [adminsettingsentityBase].[new_name]
from [adminsettingsentityBase] 
    left join [SystemUserBase] [lk_adminsettingsentity_createdby] on ([adminsettingsentityBase].[CreatedBy] = [lk_adminsettingsentity_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_adminsettingsentity_createdonbehalfby] on ([adminsettingsentityBase].[CreatedOnBehalfBy] = [lk_adminsettingsentity_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_adminsettingsentity_modifiedby] on ([adminsettingsentityBase].[ModifiedBy] = [lk_adminsettingsentity_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_adminsettingsentity_modifiedonbehalfby] on ([adminsettingsentityBase].[ModifiedOnBehalfBy] = [lk_adminsettingsentity_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([adminsettingsentityBase].OwnerId = XXowner.OwnerId)
