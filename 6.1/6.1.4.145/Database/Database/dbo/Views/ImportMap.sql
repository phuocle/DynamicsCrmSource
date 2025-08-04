


--
-- base view for ImportMap
--
create view dbo.[ImportMap]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedByName],
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
    [StatusCode],
    [ModifiedBy],
    [ModifiedOn],
    [TargetEntity],
    [ImportMapType],
    [TargetUserIdentifierForSourceCRMUserLink],
    [IsWizardCreated],
    [CreatedOn],
    [CreatedBy],
    [ImportMapId],
    [Description],
    [Name],
    [SourceUserIdentifierForSourceDataSourceUserLink],
    [SourceUserIdentifierForSourceCRMUserLink],
    [StateCode],
    [OwningBusinessUnit],
    [Source],
    [IsValidForImport],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [MapCustomizations],
    [EntitiesPerFile],
    [SourceType]
) with view_metadata as
select
    -- logical attributes
    [lk_importmapbase_createdby].[YomiFullName],
    [lk_importmapbase_createdonbehalfby].[YomiFullName],
    [lk_importmapbase_createdonbehalfby].[FullName],
    [lk_importmapbase_modifiedby].[YomiFullName],
    [lk_importmapbase_modifiedonbehalfby].[FullName],
    [lk_importmapbase_modifiedby].[FullName],
    [lk_importmapbase_createdby].[FullName],
    [lk_importmapbase_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [ImportMapBase].OwnerId,
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
    [ImportMapBase].[StatusCode],
    [ImportMapBase].[ModifiedBy],
    [ImportMapBase].[ModifiedOn],
    [ImportMapBase].[TargetEntity],
    [ImportMapBase].[ImportMapType],
    [ImportMapBase].[TargetUserIdentifierForSourceCRMUserLink],
    [ImportMapBase].[IsWizardCreated],
    [ImportMapBase].[CreatedOn],
    [ImportMapBase].[CreatedBy],
    [ImportMapBase].[ImportMapId],
    [ImportMapBase].[Description],
    [ImportMapBase].[Name],
    [ImportMapBase].[SourceUserIdentifierForSourceDataSourceUserLink],
    [ImportMapBase].[SourceUserIdentifierForSourceCRMUserLink],
    [ImportMapBase].[StateCode],
    [ImportMapBase].[OwningBusinessUnit],
    [ImportMapBase].[Source],
    [ImportMapBase].[IsValidForImport],
    [ImportMapBase].[CreatedOnBehalfBy],
    [ImportMapBase].[ModifiedOnBehalfBy],
    [ImportMapBase].[MapCustomizations],
    [ImportMapBase].[EntitiesPerFile],
    [ImportMapBase].[SourceType]
from [ImportMapBase] 
    left join [SystemUserBase] [lk_importmapbase_createdby] with(nolock) on ([ImportMapBase].[CreatedBy] = [lk_importmapbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importmapbase_createdonbehalfby] with(nolock) on ([ImportMapBase].[CreatedOnBehalfBy] = [lk_importmapbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importmapbase_modifiedby] with(nolock) on ([ImportMapBase].[ModifiedBy] = [lk_importmapbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importmapbase_modifiedonbehalfby] with(nolock) on ([ImportMapBase].[ModifiedOnBehalfBy] = [lk_importmapbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ImportMapBase].OwnerId = XXowner.OwnerId)
