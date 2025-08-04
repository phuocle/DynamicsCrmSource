


--
-- base view for msdyn_icebreakersconfig
--
create view dbo.[msdyn_icebreakersconfig]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [msdyn_icebreakersconfigId],
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
    [msdyn_isadminsettingenabled],
    [msdyn_ishealthcategoryenabled],
    [msdyn_isfamilycategoryenabled],
    [msdyn_issportscategoryenabled],
    [msdyn_isentertainmentcategoryenabled],
    [msdyn_aretermsaccepted]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_icebreakersconfig_createdby].[FullName],
    [lk_msdyn_icebreakersconfig_createdby].[YomiFullName],
    [lk_msdyn_icebreakersconfig_createdonbehalfby].[FullName],
    [lk_msdyn_icebreakersconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_icebreakersconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_icebreakersconfig_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_icebreakersconfig_modifiedby].[FullName],
    [lk_msdyn_icebreakersconfig_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_icebreakersconfigBase].OwnerId,
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
    [msdyn_icebreakersconfigBase].[msdyn_icebreakersconfigId],
    [msdyn_icebreakersconfigBase].[CreatedOn],
    [msdyn_icebreakersconfigBase].[CreatedBy],
    [msdyn_icebreakersconfigBase].[ModifiedOn],
    [msdyn_icebreakersconfigBase].[ModifiedBy],
    [msdyn_icebreakersconfigBase].[CreatedOnBehalfBy],
    [msdyn_icebreakersconfigBase].[ModifiedOnBehalfBy],
    [msdyn_icebreakersconfigBase].[OwningBusinessUnit],
    [msdyn_icebreakersconfigBase].[statecode],
    [msdyn_icebreakersconfigBase].[statuscode],
    [msdyn_icebreakersconfigBase].[VersionNumber],
    [msdyn_icebreakersconfigBase].[ImportSequenceNumber],
    [msdyn_icebreakersconfigBase].[OverriddenCreatedOn],
    [msdyn_icebreakersconfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_icebreakersconfigBase].[UTCConversionTimeZoneCode],
    [msdyn_icebreakersconfigBase].[msdyn_name],
    [msdyn_icebreakersconfigBase].[msdyn_isadminsettingenabled],
    [msdyn_icebreakersconfigBase].[msdyn_ishealthcategoryenabled],
    [msdyn_icebreakersconfigBase].[msdyn_isfamilycategoryenabled],
    [msdyn_icebreakersconfigBase].[msdyn_issportscategoryenabled],
    [msdyn_icebreakersconfigBase].[msdyn_isentertainmentcategoryenabled],
    [msdyn_icebreakersconfigBase].[msdyn_aretermsaccepted]
from [msdyn_icebreakersconfigBase] 
    left join [SystemUserBase] [lk_msdyn_icebreakersconfig_createdby] on ([msdyn_icebreakersconfigBase].[CreatedBy] = [lk_msdyn_icebreakersconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_icebreakersconfig_createdonbehalfby] on ([msdyn_icebreakersconfigBase].[CreatedOnBehalfBy] = [lk_msdyn_icebreakersconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_icebreakersconfig_modifiedby] on ([msdyn_icebreakersconfigBase].[ModifiedBy] = [lk_msdyn_icebreakersconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_icebreakersconfig_modifiedonbehalfby] on ([msdyn_icebreakersconfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_icebreakersconfig_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_icebreakersconfigBase].OwnerId = XXowner.OwnerId)
