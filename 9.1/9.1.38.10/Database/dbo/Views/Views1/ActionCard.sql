


--
-- base view for ActionCard
--
create view dbo.[ActionCard]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CardTypeIdName],
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ActionCardId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [Title],
    [Description],
    [RecordId],
    [RecordIdName],
    [RecordIdObjectTypeCode],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [Priority],
    [Data],
    [Visibility],
    [StartDate],
    [ExpiryDate],
    [Source],
    [ReferenceTokens],
    [State],
    [CardTypeId],
    [CardType],
    [RecordIdObjectTypeCode2],
    [ParentRegardingObjectId],
    [ParentRegardingObjectTypeCode],
    [ParentRegardingObjectIdData],
    [msdyn_regardingobjectid],
    [msdyn_regardingobjectlogicalname],
    [msdyn_actioncardregardingid]
) with view_metadata as
select
    -- logical attributes
    [lk_actioncardbase_createdby].[FullName],
    [lk_actioncardbase_modifiedby].[YomiFullName],
    [lk_actioncardbase_modifiedonbehalfby].[YomiFullName],
    [cardtype_actioncard].[CardName],
    [transactioncurrency_actioncard].[CurrencyName],
    [lk_actioncardbase_createdonbehalfby].[FullName],
    [lk_actioncardbase_createdonbehalfby].[YomiFullName],
    [lk_actioncardbase_modifiedby].[FullName],
    [lk_actioncardbase_modifiedonbehalfby].[FullName],
    [lk_actioncardbase_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [ActionCardBase].OwnerId,
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
    [ActionCardBase].[ActionCardId],
    [ActionCardBase].[CreatedBy],
    [ActionCardBase].[CreatedOn],
    [ActionCardBase].[CreatedOnBehalfBy],
    [ActionCardBase].[ModifiedBy],
    [ActionCardBase].[ModifiedOn],
    [ActionCardBase].[ModifiedOnBehalfBy],
    [ActionCardBase].[OwningBusinessUnit],
    [ActionCardBase].[VersionNumber],
    [ActionCardBase].[OverriddenCreatedOn],
    [ActionCardBase].[TransactionCurrencyId],
    [ActionCardBase].[ExchangeRate],
    [ActionCardBase].[ImportSequenceNumber],
    [ActionCardBase].[Title],
    [ActionCardBase].[Description],
    [ActionCardBase].[RecordId],
    [ActionCardBase].[RecordIdName],
    [ActionCardBase].[RecordIdObjectTypeCode],
    [ActionCardBase].[RegardingObjectId],
    [ActionCardBase].[RegardingObjectIdName],
    [ActionCardBase].[RegardingObjectTypeCode],
    [ActionCardBase].[Priority],
    [ActionCardBase].[Data],
    [ActionCardBase].[Visibility],
    [ActionCardBase].[StartDate],
    [ActionCardBase].[ExpiryDate],
    [ActionCardBase].[Source],
    [ActionCardBase].[ReferenceTokens],
    [ActionCardBase].[State],
    [ActionCardBase].[CardTypeId],
    [ActionCardBase].[CardType],
    [ActionCardBase].[RecordIdObjectTypeCode2],
    [ActionCardBase].[ParentRegardingObjectId],
    [ActionCardBase].[ParentRegardingObjectTypeCode],
    [ActionCardBase].[ParentRegardingObjectIdData],
    [ActionCardBase].[msdyn_regardingobjectid],
    [ActionCardBase].[msdyn_regardingobjectlogicalname],
    [ActionCardBase].[msdyn_actioncardregardingid]
from [ActionCardBase] 
    left join [CardTypeBase] [cardtype_actioncard] on ([ActionCardBase].[CardTypeId] = [cardtype_actioncard].[CardTypeId])
    left join [SystemUserBase] [lk_actioncardbase_createdby] on ([ActionCardBase].[CreatedBy] = [lk_actioncardbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_actioncardbase_createdonbehalfby] on ([ActionCardBase].[CreatedOnBehalfBy] = [lk_actioncardbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_actioncardbase_modifiedby] on ([ActionCardBase].[ModifiedBy] = [lk_actioncardbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_actioncardbase_modifiedonbehalfby] on ([ActionCardBase].[ModifiedOnBehalfBy] = [lk_actioncardbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_actioncard] on ([ActionCardBase].[TransactionCurrencyId] = [transactioncurrency_actioncard].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([ActionCardBase].OwnerId = XXowner.OwnerId)
