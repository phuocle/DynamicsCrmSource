


--
-- base view for UserForm
--
create view dbo.[UserForm]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [Description],
    [FormXml],
    [ModifiedBy],
    [ModifiedOn],
    [Name],
    [ObjectTypeCode],
    [OwningBusinessUnit],
    [Type],
    [UserFormId],
    [VersionNumber],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_userform_modifiedby].[FullName],
    [lk_userformbase_modifiedonbehalfby].[YomiFullName],
    [lk_userform_modifiedby].[YomiFullName],
    [lk_userform_createdby].[FullName],
    [lk_userformbase_createdonbehalfby].[YomiFullName],
    [lk_userformbase_modifiedonbehalfby].[FullName],
    [lk_userform_createdby].[YomiFullName],
    [lk_userformbase_createdonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [UserFormBase].OwnerId,
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
    [UserFormBase].[CreatedBy],
    [UserFormBase].[CreatedOn],
    [UserFormBase].[Description],
    [UserFormBase].[FormXml],
    [UserFormBase].[ModifiedBy],
    [UserFormBase].[ModifiedOn],
    [UserFormBase].[Name],
    [UserFormBase].[ObjectTypeCode],
    [UserFormBase].[OwningBusinessUnit],
    [UserFormBase].[Type],
    [UserFormBase].[UserFormId],
    [UserFormBase].[VersionNumber],
    [UserFormBase].[ModifiedOnBehalfBy],
    [UserFormBase].[CreatedOnBehalfBy]
from [UserFormBase] 
    left join [SystemUserBase] [lk_userform_createdby] with(nolock) on ([UserFormBase].[CreatedBy] = [lk_userform_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_userform_modifiedby] with(nolock) on ([UserFormBase].[ModifiedBy] = [lk_userform_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_userformbase_createdonbehalfby] with(nolock) on ([UserFormBase].[CreatedOnBehalfBy] = [lk_userformbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_userformbase_modifiedonbehalfby] with(nolock) on ([UserFormBase].[ModifiedOnBehalfBy] = [lk_userformbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([UserFormBase].OwnerId = XXowner.OwnerId)
