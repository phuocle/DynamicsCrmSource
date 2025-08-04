


--
-- base view for IncidentResolution
--
create view dbo.[IncidentResolution]
 (
    -- logical attributes
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ModifiedOn],
    [ActualStart],
    [CreatedBy],
    [ActualDurationMinutes],
    [IsWorkflowCreated],
    [ScheduledEnd],
    [Category],
    [IsBilled],
    [ActivityId],
    [StateCode],
    [Description],
    [StatusCode],
    [ServiceId],
    [TimeSpent],
    [Subject],
    [CreatedOn],
    [ModifiedBy],
    [ScheduledStart],
    [ScheduledDurationMinutes],
    [VersionNumber],
    [ActualEnd],
    [OwningBusinessUnit],
    [IncidentId],
    [Subcategory],
    [IncidentIdName],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [IncidentIdType],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity]
) with view_metadata as
select
    -- logical attributes
    [lk_incidentresolution_createdby].[YomiFullName],
    [lk_incidentresolution_modifiedby].[YomiFullName],
    [lk_incidentresolution_modifiedby].[FullName],
    [lk_incidentresolution_createdonbehalfby].[FullName],
    [lk_incidentresolution_modifiedonbehalfby].[YomiFullName],
    [lk_incidentresolution_createdonbehalfby].[YomiFullName],
    [lk_incidentresolution_modifiedonbehalfby].[FullName],
    [lk_incidentresolution_createdby].[FullName],

    -- ownership entries
    OwnerId = [ActivityPointerBase].OwnerId,
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
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[IncResCategory],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[TimeSpent],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[IncResSubcategory],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[IncResImportSequenceNumber],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[IncResOverriddenCreatedOn],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_incidentresolution_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_incidentresolution_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentresolution_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_incidentresolution_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentresolution_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_incidentresolution_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_incidentresolution_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_incidentresolution_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4206