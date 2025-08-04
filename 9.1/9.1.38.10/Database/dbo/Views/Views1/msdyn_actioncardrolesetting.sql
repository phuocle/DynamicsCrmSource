


--
-- base view for msdyn_actioncardrolesetting
--
create view dbo.[msdyn_actioncardrolesetting]
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
    [msdyn_RoleidName],
    [msdyn_cardtypeidName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_actioncardrolesettingId],
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
    [msdyn_cardtypeid],
    [msdyn_IsDisabled],
    [msdyn_Roleid]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_actioncardrolesetting_createdby].[FullName],
    [lk_msdyn_actioncardrolesetting_createdby].[YomiFullName],
    [lk_msdyn_actioncardrolesetting_createdonbehalfby].[FullName],
    [lk_msdyn_actioncardrolesetting_createdonbehalfby].[YomiFullName],
    [lk_msdyn_actioncardrolesetting_modifiedby].[FullName],
    [lk_msdyn_actioncardrolesetting_modifiedby].[YomiFullName],
    [lk_msdyn_actioncardrolesetting_modifiedonbehalfby].[FullName],
    [lk_msdyn_actioncardrolesetting_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_roleid].[Name],
    [lk_msdyn_cardtypeid].[CardName],

    -- ownership entries
    OwnerId = [msdyn_actioncardrolesettingBase].OwnerId,
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
    [msdyn_actioncardrolesettingBase].[msdyn_actioncardrolesettingId],
    [msdyn_actioncardrolesettingBase].[CreatedOn],
    [msdyn_actioncardrolesettingBase].[CreatedBy],
    [msdyn_actioncardrolesettingBase].[ModifiedOn],
    [msdyn_actioncardrolesettingBase].[ModifiedBy],
    [msdyn_actioncardrolesettingBase].[CreatedOnBehalfBy],
    [msdyn_actioncardrolesettingBase].[ModifiedOnBehalfBy],
    [msdyn_actioncardrolesettingBase].[OwningBusinessUnit],
    [msdyn_actioncardrolesettingBase].[statecode],
    [msdyn_actioncardrolesettingBase].[statuscode],
    [msdyn_actioncardrolesettingBase].[VersionNumber],
    [msdyn_actioncardrolesettingBase].[ImportSequenceNumber],
    [msdyn_actioncardrolesettingBase].[OverriddenCreatedOn],
    [msdyn_actioncardrolesettingBase].[TimeZoneRuleVersionNumber],
    [msdyn_actioncardrolesettingBase].[UTCConversionTimeZoneCode],
    [msdyn_actioncardrolesettingBase].[msdyn_name],
    [msdyn_actioncardrolesettingBase].[msdyn_cardtypeid],
    [msdyn_actioncardrolesettingBase].[msdyn_IsDisabled],
    [msdyn_actioncardrolesettingBase].[msdyn_Roleid]
from [msdyn_actioncardrolesettingBase] 
    left join [SystemUserBase] [lk_msdyn_actioncardrolesetting_createdby] on ([msdyn_actioncardrolesettingBase].[CreatedBy] = [lk_msdyn_actioncardrolesetting_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_actioncardrolesetting_createdonbehalfby] on ([msdyn_actioncardrolesettingBase].[CreatedOnBehalfBy] = [lk_msdyn_actioncardrolesetting_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_actioncardrolesetting_modifiedby] on ([msdyn_actioncardrolesettingBase].[ModifiedBy] = [lk_msdyn_actioncardrolesetting_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_actioncardrolesetting_modifiedonbehalfby] on ([msdyn_actioncardrolesettingBase].[ModifiedOnBehalfBy] = [lk_msdyn_actioncardrolesetting_modifiedonbehalfby].[SystemUserId])
    left join [CardTypeBase] [lk_msdyn_cardtypeid] on ([msdyn_actioncardrolesettingBase].[msdyn_cardtypeid] = [lk_msdyn_cardtypeid].[CardTypeId])
    left join [RoleBase] [lk_msdyn_roleid] on ([msdyn_actioncardrolesettingBase].[msdyn_Roleid] = [lk_msdyn_roleid].[RoleId] and [lk_msdyn_roleid].OverwriteTime = 0 and [lk_msdyn_roleid].ComponentState = 0)
    left join OwnerBase XXowner on ([msdyn_actioncardrolesettingBase].OwnerId = XXowner.OwnerId)
