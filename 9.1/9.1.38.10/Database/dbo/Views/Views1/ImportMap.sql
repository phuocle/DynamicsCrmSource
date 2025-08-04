


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
    [SourceType],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [ImportMapIdUnique]
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
    OwnerId = [T1].OwnerId,
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
    [T1].[StatusCode],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[TargetEntity],
    [T1].[ImportMapType],
    [T1].[TargetUserIdentifierForSourceCRMUserLink],
    [T1].[IsWizardCreated],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ImportMapId],
    [T1].[Description],
    [T1].[Name],
    [T1].[SourceUserIdentifierForSourceDataSourceUserLink],
    [T1].[SourceUserIdentifierForSourceCRMUserLink],
    [T1].[StateCode],
    [T1].[OwningBusinessUnit],
    [T1].[Source],
    [T1].[IsValidForImport],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[MapCustomizations],
    [T1].[EntitiesPerFile],
    [T1].[SourceType],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[ImportMapIdUnique]
from [ImportMapBase] [T1]
    left join [SystemUserBase] [lk_importmapbase_createdby] on ([T1].[CreatedBy] = [lk_importmapbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importmapbase_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_importmapbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importmapbase_modifiedby] on ([T1].[ModifiedBy] = [lk_importmapbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importmapbase_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_importmapbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0