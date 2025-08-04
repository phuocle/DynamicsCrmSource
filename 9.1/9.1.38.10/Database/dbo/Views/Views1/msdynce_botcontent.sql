


--
-- base view for msdynce_botcontent
--
create view dbo.[msdynce_botcontent]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [msdynce_botcontentId],
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
    [msdynce_autonumber],
    [msdynce_botid],
    [msdynce_state]
) with view_metadata as
select
    -- logical attributes
    [lk_msdynce_botcontent_createdby].[FullName],
    [lk_msdynce_botcontent_createdby].[YomiFullName],
    [lk_msdynce_botcontent_modifiedonbehalfby].[FullName],
    [lk_msdynce_botcontent_modifiedonbehalfby].[YomiFullName],
    [lk_msdynce_botcontent_createdonbehalfby].[FullName],
    [lk_msdynce_botcontent_createdonbehalfby].[YomiFullName],
    [lk_msdynce_botcontent_modifiedby].[FullName],
    [lk_msdynce_botcontent_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdynce_botcontentBase].OwnerId,
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
    [msdynce_botcontentBase].[msdynce_botcontentId],
    [msdynce_botcontentBase].[CreatedOn],
    [msdynce_botcontentBase].[CreatedBy],
    [msdynce_botcontentBase].[ModifiedOn],
    [msdynce_botcontentBase].[ModifiedBy],
    [msdynce_botcontentBase].[CreatedOnBehalfBy],
    [msdynce_botcontentBase].[ModifiedOnBehalfBy],
    [msdynce_botcontentBase].[OwningBusinessUnit],
    [msdynce_botcontentBase].[statecode],
    [msdynce_botcontentBase].[statuscode],
    [msdynce_botcontentBase].[VersionNumber],
    [msdynce_botcontentBase].[ImportSequenceNumber],
    [msdynce_botcontentBase].[OverriddenCreatedOn],
    [msdynce_botcontentBase].[TimeZoneRuleVersionNumber],
    [msdynce_botcontentBase].[UTCConversionTimeZoneCode],
    [msdynce_botcontentBase].[msdynce_autonumber],
    [msdynce_botcontentBase].[msdynce_botid],
    [msdynce_botcontentBase].[msdynce_state]
from [msdynce_botcontentBase] 
    left join [SystemUserBase] [lk_msdynce_botcontent_createdby] on ([msdynce_botcontentBase].[CreatedBy] = [lk_msdynce_botcontent_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdynce_botcontent_createdonbehalfby] on ([msdynce_botcontentBase].[CreatedOnBehalfBy] = [lk_msdynce_botcontent_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdynce_botcontent_modifiedby] on ([msdynce_botcontentBase].[ModifiedBy] = [lk_msdynce_botcontent_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdynce_botcontent_modifiedonbehalfby] on ([msdynce_botcontentBase].[ModifiedOnBehalfBy] = [lk_msdynce_botcontent_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdynce_botcontentBase].OwnerId = XXowner.OwnerId)
