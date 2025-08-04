


--
-- base view for EntitlementEntityAllocationTypeMapping
--
create view dbo.[EntitlementEntityAllocationTypeMapping]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [EntitlementEntityAllocationTypeMappingId],
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
    [name],
    [allocationtype],
    [entitytype]
) with view_metadata as
select
    -- logical attributes
    [lk_entitlemententityallocationtypemapping_createdby].[FullName],
    [lk_entitlemententityallocationtypemapping_createdby].[YomiFullName],
    [lk_entitlemententityallocationtypemapping_modifiedby].[FullName],
    [lk_entitlemententityallocationtypemapping_modifiedby].[YomiFullName],
    [lk_entitlemententityallocationtypemapping_createdonbehalfby].[FullName],
    [lk_entitlemententityallocationtypemapping_createdonbehalfby].[YomiFullName],
    [lk_entitlemententityallocationtypemapping_modifiedonbehalfby].[FullName],
    [lk_entitlemententityallocationtypemapping_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [EntitlementEntityAllocationTypeMappingBase].OwnerId,
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
    [EntitlementEntityAllocationTypeMappingBase].[EntitlementEntityAllocationTypeMappingId],
    [EntitlementEntityAllocationTypeMappingBase].[CreatedOn],
    [EntitlementEntityAllocationTypeMappingBase].[CreatedBy],
    [EntitlementEntityAllocationTypeMappingBase].[ModifiedOn],
    [EntitlementEntityAllocationTypeMappingBase].[ModifiedBy],
    [EntitlementEntityAllocationTypeMappingBase].[CreatedOnBehalfBy],
    [EntitlementEntityAllocationTypeMappingBase].[ModifiedOnBehalfBy],
    [EntitlementEntityAllocationTypeMappingBase].[OwningBusinessUnit],
    [EntitlementEntityAllocationTypeMappingBase].[statecode],
    [EntitlementEntityAllocationTypeMappingBase].[statuscode],
    [EntitlementEntityAllocationTypeMappingBase].[VersionNumber],
    [EntitlementEntityAllocationTypeMappingBase].[ImportSequenceNumber],
    [EntitlementEntityAllocationTypeMappingBase].[OverriddenCreatedOn],
    [EntitlementEntityAllocationTypeMappingBase].[TimeZoneRuleVersionNumber],
    [EntitlementEntityAllocationTypeMappingBase].[UTCConversionTimeZoneCode],
    [EntitlementEntityAllocationTypeMappingBase].[name],
    [EntitlementEntityAllocationTypeMappingBase].[allocationtype],
    [EntitlementEntityAllocationTypeMappingBase].[entitytype]
from [EntitlementEntityAllocationTypeMappingBase] 
    left join [SystemUserBase] [lk_entitlemententityallocationtypemapping_createdby] on ([EntitlementEntityAllocationTypeMappingBase].[CreatedBy] = [lk_entitlemententityallocationtypemapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlemententityallocationtypemapping_createdonbehalfby] on ([EntitlementEntityAllocationTypeMappingBase].[CreatedOnBehalfBy] = [lk_entitlemententityallocationtypemapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlemententityallocationtypemapping_modifiedby] on ([EntitlementEntityAllocationTypeMappingBase].[ModifiedBy] = [lk_entitlemententityallocationtypemapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_entitlemententityallocationtypemapping_modifiedonbehalfby] on ([EntitlementEntityAllocationTypeMappingBase].[ModifiedOnBehalfBy] = [lk_entitlemententityallocationtypemapping_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([EntitlementEntityAllocationTypeMappingBase].OwnerId = XXowner.OwnerId)
