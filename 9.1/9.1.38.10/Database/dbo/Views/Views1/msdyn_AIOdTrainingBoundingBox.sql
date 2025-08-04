


--
-- base view for msdyn_AIOdTrainingBoundingBox
--
create view dbo.[msdyn_AIOdTrainingBoundingBox]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [msdyn_AIOdLabelIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [msdyn_AIOdTrainingImageIdName],
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
    [msdyn_AIOdTrainingBoundingBoxId],
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
    [msdyn_Height],
    [msdyn_AIOdLabelId],
    [msdyn_Left],
    [msdyn_Top],
    [msdyn_AIOdTrainingImageId],
    [msdyn_Width]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aiodtrainingboundingbox_modifiedonbehalfby].[FullName],
    [lk_msdyn_aiodtrainingboundingbox_modifiedonbehalfby].[YomiFullName],
    [msdyn_aiodlabel_msdyn_aiodtrainingboundingbox].[msdyn_name],
    [lk_msdyn_aiodtrainingboundingbox_modifiedby].[FullName],
    [lk_msdyn_aiodtrainingboundingbox_modifiedby].[YomiFullName],
    [lk_msdyn_aiodtrainingboundingbox_createdby].[FullName],
    [lk_msdyn_aiodtrainingboundingbox_createdby].[YomiFullName],
    [msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox].[msdyn_name],
    [lk_msdyn_aiodtrainingboundingbox_createdonbehalfby].[FullName],
    [lk_msdyn_aiodtrainingboundingbox_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIOdTrainingBoundingBoxBase].OwnerId,
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
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_AIOdTrainingBoundingBoxId],
    [msdyn_AIOdTrainingBoundingBoxBase].[CreatedOn],
    [msdyn_AIOdTrainingBoundingBoxBase].[CreatedBy],
    [msdyn_AIOdTrainingBoundingBoxBase].[ModifiedOn],
    [msdyn_AIOdTrainingBoundingBoxBase].[ModifiedBy],
    [msdyn_AIOdTrainingBoundingBoxBase].[CreatedOnBehalfBy],
    [msdyn_AIOdTrainingBoundingBoxBase].[ModifiedOnBehalfBy],
    [msdyn_AIOdTrainingBoundingBoxBase].[OwningBusinessUnit],
    [msdyn_AIOdTrainingBoundingBoxBase].[statecode],
    [msdyn_AIOdTrainingBoundingBoxBase].[statuscode],
    [msdyn_AIOdTrainingBoundingBoxBase].[VersionNumber],
    [msdyn_AIOdTrainingBoundingBoxBase].[ImportSequenceNumber],
    [msdyn_AIOdTrainingBoundingBoxBase].[OverriddenCreatedOn],
    [msdyn_AIOdTrainingBoundingBoxBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdTrainingBoundingBoxBase].[UTCConversionTimeZoneCode],
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_name],
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_Height],
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_AIOdLabelId],
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_Left],
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_Top],
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_AIOdTrainingImageId],
    [msdyn_AIOdTrainingBoundingBoxBase].[msdyn_Width]
from [msdyn_AIOdTrainingBoundingBoxBase] 
    left join [SystemUserBase] [lk_msdyn_aiodtrainingboundingbox_createdby] on ([msdyn_AIOdTrainingBoundingBoxBase].[CreatedBy] = [lk_msdyn_aiodtrainingboundingbox_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodtrainingboundingbox_createdonbehalfby] on ([msdyn_AIOdTrainingBoundingBoxBase].[CreatedOnBehalfBy] = [lk_msdyn_aiodtrainingboundingbox_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodtrainingboundingbox_modifiedby] on ([msdyn_AIOdTrainingBoundingBoxBase].[ModifiedBy] = [lk_msdyn_aiodtrainingboundingbox_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodtrainingboundingbox_modifiedonbehalfby] on ([msdyn_AIOdTrainingBoundingBoxBase].[ModifiedOnBehalfBy] = [lk_msdyn_aiodtrainingboundingbox_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIOdLabelBase] [msdyn_aiodlabel_msdyn_aiodtrainingboundingbox] on ([msdyn_AIOdTrainingBoundingBoxBase].[msdyn_AIOdLabelId] = [msdyn_aiodlabel_msdyn_aiodtrainingboundingbox].[msdyn_AIOdLabelId])
    left join [msdyn_AIOdTrainingImageBase] [msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox] on ([msdyn_AIOdTrainingBoundingBoxBase].[msdyn_AIOdTrainingImageId] = [msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox].[msdyn_AIOdTrainingImageId])
    left join OwnerBase XXowner on ([msdyn_AIOdTrainingBoundingBoxBase].OwnerId = XXowner.OwnerId)
