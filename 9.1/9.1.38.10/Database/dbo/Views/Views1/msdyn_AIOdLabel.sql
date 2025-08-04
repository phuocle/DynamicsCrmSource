


--
-- base view for msdyn_AIOdLabel
--
create view dbo.[msdyn_AIOdLabel]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AIOdLabelId],
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
    [msdyn_LabelString],
    [msdyn_SourceAttributeLogicalName],
    [msdyn_SourceEntitySetName],
    [msdyn_SourceRecordId]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aiodlabel_modifiedonbehalfby].[FullName],
    [lk_msdyn_aiodlabel_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aiodlabel_createdonbehalfby].[FullName],
    [lk_msdyn_aiodlabel_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aiodlabel_createdby].[FullName],
    [lk_msdyn_aiodlabel_createdby].[YomiFullName],
    [lk_msdyn_aiodlabel_modifiedby].[FullName],
    [lk_msdyn_aiodlabel_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIOdLabelBase].OwnerId,
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
    [msdyn_AIOdLabelBase].[msdyn_AIOdLabelId],
    [msdyn_AIOdLabelBase].[CreatedOn],
    [msdyn_AIOdLabelBase].[CreatedBy],
    [msdyn_AIOdLabelBase].[ModifiedOn],
    [msdyn_AIOdLabelBase].[ModifiedBy],
    [msdyn_AIOdLabelBase].[CreatedOnBehalfBy],
    [msdyn_AIOdLabelBase].[ModifiedOnBehalfBy],
    [msdyn_AIOdLabelBase].[OwningBusinessUnit],
    [msdyn_AIOdLabelBase].[statecode],
    [msdyn_AIOdLabelBase].[statuscode],
    [msdyn_AIOdLabelBase].[VersionNumber],
    [msdyn_AIOdLabelBase].[ImportSequenceNumber],
    [msdyn_AIOdLabelBase].[OverriddenCreatedOn],
    [msdyn_AIOdLabelBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdLabelBase].[UTCConversionTimeZoneCode],
    [msdyn_AIOdLabelBase].[msdyn_name],
    [msdyn_AIOdLabelBase].[msdyn_LabelString],
    [msdyn_AIOdLabelBase].[msdyn_SourceAttributeLogicalName],
    [msdyn_AIOdLabelBase].[msdyn_SourceEntitySetName],
    [msdyn_AIOdLabelBase].[msdyn_SourceRecordId]
from [msdyn_AIOdLabelBase] 
    left join [SystemUserBase] [lk_msdyn_aiodlabel_createdby] on ([msdyn_AIOdLabelBase].[CreatedBy] = [lk_msdyn_aiodlabel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodlabel_createdonbehalfby] on ([msdyn_AIOdLabelBase].[CreatedOnBehalfBy] = [lk_msdyn_aiodlabel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodlabel_modifiedby] on ([msdyn_AIOdLabelBase].[ModifiedBy] = [lk_msdyn_aiodlabel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodlabel_modifiedonbehalfby] on ([msdyn_AIOdLabelBase].[ModifiedOnBehalfBy] = [lk_msdyn_aiodlabel_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_AIOdLabelBase].OwnerId = XXowner.OwnerId)
