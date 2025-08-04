


--
-- base view for CanvasAppExtendedMetadata
--
create view dbo.[CanvasAppExtendedMetadata]
 (
    -- logical attributes
    [CanvasAppIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CanvasAppExtendedMetadataId],
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
    [Name],
    [CanvasAppId],
    [CanvasAppUniqueId],
    [OwningBusinessUnitIdType],
    [OwningBusinessUnitName],
    [OwningBusinessUnitYomiName]
) with view_metadata as
select
    -- logical attributes
    [canvasappextendedmetadata].[Name],
    [lk_canvasappextendedmetadata_modifiedby].[FullName],
    [lk_canvasappextendedmetadata_modifiedby].[YomiFullName],
    [lk_canvasappextendedmetadata_createdonbehalfby].[FullName],
    [lk_canvasappextendedmetadata_createdonbehalfby].[YomiFullName],
    [lk_canvasappextendedmetadata_modifiedonbehalfby].[FullName],
    [lk_canvasappextendedmetadata_modifiedonbehalfby].[YomiFullName],
    [lk_canvasappextendedmetadata_createdby].[FullName],
    [lk_canvasappextendedmetadata_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [CanvasAppExtendedMetadataBase].OwnerId,
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
    [CanvasAppExtendedMetadataBase].[CanvasAppExtendedMetadataId],
    [CanvasAppExtendedMetadataBase].[CreatedOn],
    [CanvasAppExtendedMetadataBase].[CreatedBy],
    [CanvasAppExtendedMetadataBase].[ModifiedOn],
    [CanvasAppExtendedMetadataBase].[ModifiedBy],
    [CanvasAppExtendedMetadataBase].[CreatedOnBehalfBy],
    [CanvasAppExtendedMetadataBase].[ModifiedOnBehalfBy],
    [CanvasAppExtendedMetadataBase].[OwningBusinessUnit],
    [CanvasAppExtendedMetadataBase].[statecode],
    [CanvasAppExtendedMetadataBase].[statuscode],
    [CanvasAppExtendedMetadataBase].[VersionNumber],
    [CanvasAppExtendedMetadataBase].[ImportSequenceNumber],
    [CanvasAppExtendedMetadataBase].[OverriddenCreatedOn],
    [CanvasAppExtendedMetadataBase].[TimeZoneRuleVersionNumber],
    [CanvasAppExtendedMetadataBase].[UTCConversionTimeZoneCode],
    [CanvasAppExtendedMetadataBase].[Name],
    [CanvasAppExtendedMetadataBase].[CanvasAppId],
    [CanvasAppExtendedMetadataBase].[CanvasAppUniqueId],
    [CanvasAppExtendedMetadataBase].[OwningBusinessUnitIdType],
    [CanvasAppExtendedMetadataBase].[OwningBusinessUnitName],
    [CanvasAppExtendedMetadataBase].[OwningBusinessUnitYomiName]
from [CanvasAppExtendedMetadataBase] 
    left join [CanvasAppBase] [canvasappextendedmetadata] on ([CanvasAppExtendedMetadataBase].[CanvasAppId] = [canvasappextendedmetadata].[CanvasAppId] and [canvasappextendedmetadata].OverwriteTime = 0 and [canvasappextendedmetadata].ComponentState = 0)
    left join [SystemUserBase] [lk_canvasappextendedmetadata_createdby] on ([CanvasAppExtendedMetadataBase].[CreatedBy] = [lk_canvasappextendedmetadata_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_canvasappextendedmetadata_createdonbehalfby] on ([CanvasAppExtendedMetadataBase].[CreatedOnBehalfBy] = [lk_canvasappextendedmetadata_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_canvasappextendedmetadata_modifiedby] on ([CanvasAppExtendedMetadataBase].[ModifiedBy] = [lk_canvasappextendedmetadata_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_canvasappextendedmetadata_modifiedonbehalfby] on ([CanvasAppExtendedMetadataBase].[ModifiedOnBehalfBy] = [lk_canvasappextendedmetadata_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([CanvasAppExtendedMetadataBase].OwnerId = XXowner.OwnerId)
