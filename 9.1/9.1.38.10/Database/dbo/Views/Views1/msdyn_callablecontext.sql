


--
-- base view for msdyn_callablecontext
--
create view dbo.[msdyn_callablecontext]
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
    [msdyn_callablecontextId],
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
    [msdyn_EntityLogicalName],
    [msdyn_EntityOTC]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_callablecontext_createdby].[FullName],
    [lk_msdyn_callablecontext_createdby].[YomiFullName],
    [lk_msdyn_callablecontext_createdonbehalfby].[FullName],
    [lk_msdyn_callablecontext_createdonbehalfby].[YomiFullName],
    [lk_msdyn_callablecontext_modifiedby].[FullName],
    [lk_msdyn_callablecontext_modifiedby].[YomiFullName],
    [lk_msdyn_callablecontext_modifiedonbehalfby].[FullName],
    [lk_msdyn_callablecontext_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_callablecontextBase].OwnerId,
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
    [msdyn_callablecontextBase].[msdyn_callablecontextId],
    [msdyn_callablecontextBase].[CreatedOn],
    [msdyn_callablecontextBase].[CreatedBy],
    [msdyn_callablecontextBase].[ModifiedOn],
    [msdyn_callablecontextBase].[ModifiedBy],
    [msdyn_callablecontextBase].[CreatedOnBehalfBy],
    [msdyn_callablecontextBase].[ModifiedOnBehalfBy],
    [msdyn_callablecontextBase].[OwningBusinessUnit],
    [msdyn_callablecontextBase].[statecode],
    [msdyn_callablecontextBase].[statuscode],
    [msdyn_callablecontextBase].[VersionNumber],
    [msdyn_callablecontextBase].[ImportSequenceNumber],
    [msdyn_callablecontextBase].[OverriddenCreatedOn],
    [msdyn_callablecontextBase].[TimeZoneRuleVersionNumber],
    [msdyn_callablecontextBase].[UTCConversionTimeZoneCode],
    [msdyn_callablecontextBase].[msdyn_EntityLogicalName],
    [msdyn_callablecontextBase].[msdyn_EntityOTC]
from [msdyn_callablecontextBase] 
    left join [SystemUserBase] [lk_msdyn_callablecontext_createdby] on ([msdyn_callablecontextBase].[CreatedBy] = [lk_msdyn_callablecontext_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_callablecontext_createdonbehalfby] on ([msdyn_callablecontextBase].[CreatedOnBehalfBy] = [lk_msdyn_callablecontext_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_callablecontext_modifiedby] on ([msdyn_callablecontextBase].[ModifiedBy] = [lk_msdyn_callablecontext_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_callablecontext_modifiedonbehalfby] on ([msdyn_callablecontextBase].[ModifiedOnBehalfBy] = [lk_msdyn_callablecontext_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_callablecontextBase].OwnerId = XXowner.OwnerId)
