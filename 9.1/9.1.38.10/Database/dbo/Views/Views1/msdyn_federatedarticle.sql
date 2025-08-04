


--
-- base view for msdyn_federatedarticle
--
create view dbo.[msdyn_federatedarticle]
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
    [msdyn_searchprovideridName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_federatedarticleId],
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
    [msdyn_title],
    [msdyn_searchproviderarticleid],
    [msdyn_searchproviderid],
    [msdyn_url]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_federatedarticle_createdby].[FullName],
    [lk_msdyn_federatedarticle_createdby].[YomiFullName],
    [lk_msdyn_federatedarticle_createdonbehalfby].[FullName],
    [lk_msdyn_federatedarticle_createdonbehalfby].[YomiFullName],
    [lk_msdyn_federatedarticle_modifiedby].[FullName],
    [lk_msdyn_federatedarticle_modifiedby].[YomiFullName],
    [lk_msdyn_federatedarticle_modifiedonbehalfby].[FullName],
    [lk_msdyn_federatedarticle_modifiedonbehalfby].[YomiFullName],
    [IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid].[msdyn_Name],

    -- ownership entries
    OwnerId = [msdyn_federatedarticleBase].OwnerId,
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
    [msdyn_federatedarticleBase].[msdyn_federatedarticleId],
    [msdyn_federatedarticleBase].[CreatedOn],
    [msdyn_federatedarticleBase].[CreatedBy],
    [msdyn_federatedarticleBase].[ModifiedOn],
    [msdyn_federatedarticleBase].[ModifiedBy],
    [msdyn_federatedarticleBase].[CreatedOnBehalfBy],
    [msdyn_federatedarticleBase].[ModifiedOnBehalfBy],
    [msdyn_federatedarticleBase].[OwningBusinessUnit],
    [msdyn_federatedarticleBase].[statecode],
    [msdyn_federatedarticleBase].[statuscode],
    [msdyn_federatedarticleBase].[VersionNumber],
    [msdyn_federatedarticleBase].[ImportSequenceNumber],
    [msdyn_federatedarticleBase].[OverriddenCreatedOn],
    [msdyn_federatedarticleBase].[TimeZoneRuleVersionNumber],
    [msdyn_federatedarticleBase].[UTCConversionTimeZoneCode],
    [msdyn_federatedarticleBase].[msdyn_title],
    [msdyn_federatedarticleBase].[msdyn_searchproviderarticleid],
    [msdyn_federatedarticleBase].[msdyn_searchproviderid],
    [msdyn_federatedarticleBase].[msdyn_url]
from [msdyn_federatedarticleBase] 
    left join [msdyn_kmfederatedsearchconfigBase] [IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid] on ([msdyn_federatedarticleBase].[msdyn_searchproviderid] = [IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid].[msdyn_kmfederatedsearchconfigId])
    left join [SystemUserBase] [lk_msdyn_federatedarticle_createdby] on ([msdyn_federatedarticleBase].[CreatedBy] = [lk_msdyn_federatedarticle_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_federatedarticle_createdonbehalfby] on ([msdyn_federatedarticleBase].[CreatedOnBehalfBy] = [lk_msdyn_federatedarticle_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_federatedarticle_modifiedby] on ([msdyn_federatedarticleBase].[ModifiedBy] = [lk_msdyn_federatedarticle_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_federatedarticle_modifiedonbehalfby] on ([msdyn_federatedarticleBase].[ModifiedOnBehalfBy] = [lk_msdyn_federatedarticle_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_federatedarticleBase].OwnerId = XXowner.OwnerId)
