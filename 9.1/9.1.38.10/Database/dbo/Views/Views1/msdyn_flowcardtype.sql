


--
-- base view for msdyn_flowcardtype
--
create view dbo.[msdyn_flowcardtype]
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
    [msdyn_flowcardtypeId],
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
    [msdyn_actionCommand],
    [msdyn_actionname],
    [msdyn_cardname],
    [msdyn_cardtypeid],
    [msdyn_description],
    [msdyn_flowname],
    [msdyn_iscdsflow],
    [msdyn_isdeleted],
    [msdyn_samplebody],
    [msdyn_sampletitle],
    [msdyn_workflowid]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_flowcardtype_createdby].[FullName],
    [lk_msdyn_flowcardtype_createdby].[YomiFullName],
    [lk_msdyn_flowcardtype_createdonbehalfby].[FullName],
    [lk_msdyn_flowcardtype_createdonbehalfby].[YomiFullName],
    [lk_msdyn_flowcardtype_modifiedby].[FullName],
    [lk_msdyn_flowcardtype_modifiedby].[YomiFullName],
    [lk_msdyn_flowcardtype_modifiedonbehalfby].[FullName],
    [lk_msdyn_flowcardtype_modifiedonbehalfby].[YomiFullName],
    [msdyn_cardtype_msdyn_flowcardtype_cardtypeid].[CardName],

    -- ownership entries
    OwnerId = [msdyn_flowcardtypeBase].OwnerId,
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
    [msdyn_flowcardtypeBase].[msdyn_flowcardtypeId],
    [msdyn_flowcardtypeBase].[CreatedOn],
    [msdyn_flowcardtypeBase].[CreatedBy],
    [msdyn_flowcardtypeBase].[ModifiedOn],
    [msdyn_flowcardtypeBase].[ModifiedBy],
    [msdyn_flowcardtypeBase].[CreatedOnBehalfBy],
    [msdyn_flowcardtypeBase].[ModifiedOnBehalfBy],
    [msdyn_flowcardtypeBase].[OwningBusinessUnit],
    [msdyn_flowcardtypeBase].[statecode],
    [msdyn_flowcardtypeBase].[statuscode],
    [msdyn_flowcardtypeBase].[VersionNumber],
    [msdyn_flowcardtypeBase].[ImportSequenceNumber],
    [msdyn_flowcardtypeBase].[OverriddenCreatedOn],
    [msdyn_flowcardtypeBase].[TimeZoneRuleVersionNumber],
    [msdyn_flowcardtypeBase].[UTCConversionTimeZoneCode],
    [msdyn_flowcardtypeBase].[msdyn_name],
    [msdyn_flowcardtypeBase].[msdyn_actionCommand],
    [msdyn_flowcardtypeBase].[msdyn_actionname],
    [msdyn_flowcardtypeBase].[msdyn_cardname],
    [msdyn_flowcardtypeBase].[msdyn_cardtypeid],
    [msdyn_flowcardtypeBase].[msdyn_description],
    [msdyn_flowcardtypeBase].[msdyn_flowname],
    [msdyn_flowcardtypeBase].[msdyn_iscdsflow],
    [msdyn_flowcardtypeBase].[msdyn_isdeleted],
    [msdyn_flowcardtypeBase].[msdyn_samplebody],
    [msdyn_flowcardtypeBase].[msdyn_sampletitle],
    [msdyn_flowcardtypeBase].[msdyn_workflowid]
from [msdyn_flowcardtypeBase] 
    left join [SystemUserBase] [lk_msdyn_flowcardtype_createdby] on ([msdyn_flowcardtypeBase].[CreatedBy] = [lk_msdyn_flowcardtype_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_flowcardtype_createdonbehalfby] on ([msdyn_flowcardtypeBase].[CreatedOnBehalfBy] = [lk_msdyn_flowcardtype_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_flowcardtype_modifiedby] on ([msdyn_flowcardtypeBase].[ModifiedBy] = [lk_msdyn_flowcardtype_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_flowcardtype_modifiedonbehalfby] on ([msdyn_flowcardtypeBase].[ModifiedOnBehalfBy] = [lk_msdyn_flowcardtype_modifiedonbehalfby].[SystemUserId])
    left join [CardTypeBase] [msdyn_cardtype_msdyn_flowcardtype_cardtypeid] on ([msdyn_flowcardtypeBase].[msdyn_cardtypeid] = [msdyn_cardtype_msdyn_flowcardtype_cardtypeid].[CardTypeId])
    left join OwnerBase XXowner on ([msdyn_flowcardtypeBase].OwnerId = XXowner.OwnerId)
