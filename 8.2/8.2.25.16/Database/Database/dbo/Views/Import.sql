


--
-- base view for Import
--
create view dbo.[Import]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [SendNotification],
    [IsImport],
    [ModeCode],
    [StateCode],
    [OwningBusinessUnit],
    [ImportId],
    [EMailAddress],
    [CreatedBy],
    [Name],
    [CreatedOn],
    [ModifiedBy],
    [Sequence],
    [ModifiedOn],
    [StatusCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_importbase_createdonbehalfby].[FullName],
    [lk_importbase_modifiedby].[YomiFullName],
    [lk_importbase_modifiedonbehalfby].[YomiFullName],
    [lk_importbase_createdby].[YomiFullName],
    [lk_importbase_createdby].[FullName],
    [lk_importbase_createdonbehalfby].[YomiFullName],
    [lk_importbase_modifiedonbehalfby].[FullName],
    [lk_importbase_modifiedby].[FullName],

    -- ownership entries
    OwnerId = [ImportBase].OwnerId,
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
    [ImportBase].[SendNotification],
    [ImportBase].[IsImport],
    [ImportBase].[ModeCode],
    [ImportBase].[StateCode],
    [ImportBase].[OwningBusinessUnit],
    [ImportBase].[ImportId],
    [ImportBase].[EMailAddress],
    [ImportBase].[CreatedBy],
    [ImportBase].[Name],
    [ImportBase].[CreatedOn],
    [ImportBase].[ModifiedBy],
    [ImportBase].[Sequence],
    [ImportBase].[ModifiedOn],
    [ImportBase].[StatusCode],
    [ImportBase].[CreatedOnBehalfBy],
    [ImportBase].[ModifiedOnBehalfBy]
from [ImportBase] 
    left join [SystemUserBase] [lk_importbase_createdby] with(nolock) on ([ImportBase].[CreatedBy] = [lk_importbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importbase_createdonbehalfby] with(nolock) on ([ImportBase].[CreatedOnBehalfBy] = [lk_importbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importbase_modifiedby] with(nolock) on ([ImportBase].[ModifiedBy] = [lk_importbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importbase_modifiedonbehalfby] with(nolock) on ([ImportBase].[ModifiedOnBehalfBy] = [lk_importbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ImportBase].OwnerId = XXowner.OwnerId)
