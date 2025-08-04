


--
-- base view for listoperation
--
create view dbo.[listoperation]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ListIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [listoperationId],
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
    [ListOperationPrimaryName],
    [BatchInput],
    [ErrorCode],
    [ErrorDescription],
    [Input],
    [ListId],
    [ListOperationName],
    [Log],
    [Type],
    [Processed],
    [Added]
) with view_metadata as
select
    -- logical attributes
    [lk_listoperation_modifiedby].[FullName],
    [lk_listoperation_modifiedby].[YomiFullName],
    [lk_listoperation_createdby].[FullName],
    [lk_listoperation_createdby].[YomiFullName],
    [lk_listoperation_modifiedonbehalfby].[FullName],
    [lk_listoperation_modifiedonbehalfby].[YomiFullName],
    [lk_listoperation_createdonbehalfby].[FullName],
    [lk_listoperation_createdonbehalfby].[YomiFullName],
    [list_listoperation_ListId].[ListName],

    -- ownership entries
    OwnerId = [listoperationBase].OwnerId,
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
    [listoperationBase].[listoperationId],
    [listoperationBase].[CreatedOn],
    [listoperationBase].[CreatedBy],
    [listoperationBase].[ModifiedOn],
    [listoperationBase].[ModifiedBy],
    [listoperationBase].[CreatedOnBehalfBy],
    [listoperationBase].[ModifiedOnBehalfBy],
    [listoperationBase].[OwningBusinessUnit],
    [listoperationBase].[statecode],
    [listoperationBase].[statuscode],
    [listoperationBase].[VersionNumber],
    [listoperationBase].[ImportSequenceNumber],
    [listoperationBase].[OverriddenCreatedOn],
    [listoperationBase].[TimeZoneRuleVersionNumber],
    [listoperationBase].[UTCConversionTimeZoneCode],
    [listoperationBase].[ListOperationPrimaryName],
    [listoperationBase].[BatchInput],
    [listoperationBase].[ErrorCode],
    [listoperationBase].[ErrorDescription],
    [listoperationBase].[Input],
    [listoperationBase].[ListId],
    [listoperationBase].[ListOperationName],
    [listoperationBase].[Log],
    [listoperationBase].[Type],
    [listoperationBase].[Processed],
    [listoperationBase].[Added]
from [listoperationBase] 
    left join [ListBase] [list_listoperation_ListId] on ([listoperationBase].[ListId] = [list_listoperation_ListId].[ListId])
    left join [SystemUserBase] [lk_listoperation_createdby] on ([listoperationBase].[CreatedBy] = [lk_listoperation_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_listoperation_createdonbehalfby] on ([listoperationBase].[CreatedOnBehalfBy] = [lk_listoperation_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_listoperation_modifiedby] on ([listoperationBase].[ModifiedBy] = [lk_listoperation_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_listoperation_modifiedonbehalfby] on ([listoperationBase].[ModifiedOnBehalfBy] = [lk_listoperation_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([listoperationBase].OwnerId = XXowner.OwnerId)
