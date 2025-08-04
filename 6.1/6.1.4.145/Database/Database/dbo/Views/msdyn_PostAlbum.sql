


--
-- base view for msdyn_PostAlbum
--
create view dbo.[msdyn_PostAlbum]
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

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_PostAlbumId],
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
    [lk_msdyn_postalbum_createdby].[FullName],
    [lk_msdyn_postalbum_createdby].[YomiFullName],
    [lk_msdyn_postalbum_createdonbehalfby].[FullName],
    [lk_msdyn_postalbum_createdonbehalfby].[YomiFullName],
    [lk_msdyn_postalbum_modifiedby].[FullName],
    [lk_msdyn_postalbum_modifiedby].[YomiFullName],
    [lk_msdyn_postalbum_modifiedonbehalfby].[FullName],
    [lk_msdyn_postalbum_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_PostAlbumBase].OwnerId,
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
    [msdyn_PostAlbumBase].[msdyn_PostAlbumId],
    [msdyn_PostAlbumBase].[CreatedOn],
    [msdyn_PostAlbumBase].[CreatedBy],
    [msdyn_PostAlbumBase].[ModifiedOn],
    [msdyn_PostAlbumBase].[ModifiedBy],
    [msdyn_PostAlbumBase].[CreatedOnBehalfBy],
    [msdyn_PostAlbumBase].[ModifiedOnBehalfBy],
    [msdyn_PostAlbumBase].[OwningBusinessUnit],
    [msdyn_PostAlbumBase].[statecode],
    [msdyn_PostAlbumBase].[statuscode],
    [msdyn_PostAlbumBase].[VersionNumber],
    [msdyn_PostAlbumBase].[ImportSequenceNumber],
    [msdyn_PostAlbumBase].[OverriddenCreatedOn],
    [msdyn_PostAlbumBase].[TimeZoneRuleVersionNumber],
    [msdyn_PostAlbumBase].[UTCConversionTimeZoneCode],
    [msdyn_PostAlbumBase].[msdyn_name]
from [msdyn_PostAlbumBase] 
    left join [SystemUserBase] [lk_msdyn_postalbum_createdby] with(nolock) on ([msdyn_PostAlbumBase].[CreatedBy] = [lk_msdyn_postalbum_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postalbum_createdonbehalfby] with(nolock) on ([msdyn_PostAlbumBase].[CreatedOnBehalfBy] = [lk_msdyn_postalbum_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postalbum_modifiedby] with(nolock) on ([msdyn_PostAlbumBase].[ModifiedBy] = [lk_msdyn_postalbum_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postalbum_modifiedonbehalfby] with(nolock) on ([msdyn_PostAlbumBase].[ModifiedOnBehalfBy] = [lk_msdyn_postalbum_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([msdyn_PostAlbumBase].OwnerId = XXowner.OwnerId)
