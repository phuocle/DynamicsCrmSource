


--
-- base view for msdyn_untrackedappointment
--
create view dbo.[msdyn_untrackedappointment]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_untrackedappointmentId],
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
    [msdyn_name]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_untrackedappointment_modifiedby].[FullName],
    [lk_msdyn_untrackedappointment_modifiedby].[YomiFullName],
    [lk_msdyn_untrackedappointment_createdby].[FullName],
    [lk_msdyn_untrackedappointment_createdby].[YomiFullName],
    [lk_msdyn_untrackedappointment_modifiedonbehalfby].[FullName],
    [lk_msdyn_untrackedappointment_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_untrackedappointment_createdonbehalfby].[FullName],
    [lk_msdyn_untrackedappointment_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_untrackedappointmentBase].OwnerId,
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
    [msdyn_untrackedappointmentBase].[msdyn_untrackedappointmentId],
    [msdyn_untrackedappointmentBase].[CreatedOn],
    [msdyn_untrackedappointmentBase].[CreatedBy],
    [msdyn_untrackedappointmentBase].[ModifiedOn],
    [msdyn_untrackedappointmentBase].[ModifiedBy],
    [msdyn_untrackedappointmentBase].[CreatedOnBehalfBy],
    [msdyn_untrackedappointmentBase].[ModifiedOnBehalfBy],
    [msdyn_untrackedappointmentBase].[OwningBusinessUnit],
    [msdyn_untrackedappointmentBase].[statecode],
    [msdyn_untrackedappointmentBase].[statuscode],
    [msdyn_untrackedappointmentBase].[VersionNumber],
    [msdyn_untrackedappointmentBase].[ImportSequenceNumber],
    [msdyn_untrackedappointmentBase].[OverriddenCreatedOn],
    [msdyn_untrackedappointmentBase].[TimeZoneRuleVersionNumber],
    [msdyn_untrackedappointmentBase].[UTCConversionTimeZoneCode],
    [msdyn_untrackedappointmentBase].[msdyn_name]
from [msdyn_untrackedappointmentBase] 
    left join [SystemUserBase] [lk_msdyn_untrackedappointment_createdby] on ([msdyn_untrackedappointmentBase].[CreatedBy] = [lk_msdyn_untrackedappointment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_untrackedappointment_createdonbehalfby] on ([msdyn_untrackedappointmentBase].[CreatedOnBehalfBy] = [lk_msdyn_untrackedappointment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_untrackedappointment_modifiedby] on ([msdyn_untrackedappointmentBase].[ModifiedBy] = [lk_msdyn_untrackedappointment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_untrackedappointment_modifiedonbehalfby] on ([msdyn_untrackedappointmentBase].[ModifiedOnBehalfBy] = [lk_msdyn_untrackedappointment_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_untrackedappointmentBase].OwnerId = XXowner.OwnerId)
