


--
-- base view for RatingValue
--
create view dbo.[RatingValue]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [RatingModelName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [RatingValueId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [Value],
    [RatingModel],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_ratingvalue_modifiedby].[FullName],
    [lk_ratingvalue_modifiedby].[YomiFullName],
    [lk_ratingvalue_createdonbehalfby].[FullName],
    [lk_ratingvalue_createdonbehalfby].[YomiFullName],
    [lk_ratingvalue_createdby].[FullName],
    [lk_ratingvalue_createdby].[YomiFullName],
    [lk_ratingvalue_modifiedonbehalfby].[FullName],
    [lk_ratingvalue_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_ratingvalue].[CurrencyName],
    [ratingmodel_ratingvalue_RatingModel].[Name],

    -- ownership entries
    OwnerId = [RatingValueBase].OwnerId,
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
    [RatingValueBase].[RatingValueId],
    [RatingValueBase].[CreatedOn],
    [RatingValueBase].[CreatedBy],
    [RatingValueBase].[ModifiedOn],
    [RatingValueBase].[ModifiedBy],
    [RatingValueBase].[CreatedOnBehalfBy],
    [RatingValueBase].[ModifiedOnBehalfBy],
    [RatingValueBase].[OwningBusinessUnit],
    [RatingValueBase].[StateCode],
    [RatingValueBase].[StatusCode],
    [RatingValueBase].[VersionNumber],
    [RatingValueBase].[ImportSequenceNumber],
    [RatingValueBase].[OverriddenCreatedOn],
    [RatingValueBase].[TimeZoneRuleVersionNumber],
    [RatingValueBase].[UTCConversionTimeZoneCode],
    [RatingValueBase].[Name],
    [RatingValueBase].[Value],
    [RatingValueBase].[RatingModel],
    [RatingValueBase].[ExchangeRate],
    [RatingValueBase].[TransactionCurrencyId]
from [RatingValueBase] 
    left join [SystemUserBase] [lk_ratingvalue_createdby] with(nolock) on ([RatingValueBase].[CreatedBy] = [lk_ratingvalue_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingvalue_createdonbehalfby] with(nolock) on ([RatingValueBase].[CreatedOnBehalfBy] = [lk_ratingvalue_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingvalue_modifiedby] with(nolock) on ([RatingValueBase].[ModifiedBy] = [lk_ratingvalue_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingvalue_modifiedonbehalfby] with(nolock) on ([RatingValueBase].[ModifiedOnBehalfBy] = [lk_ratingvalue_modifiedonbehalfby].[SystemUserId])
    left join [RatingModelBase] [ratingmodel_ratingvalue_RatingModel] on ([RatingValueBase].[RatingModel] = [ratingmodel_ratingvalue_RatingModel].[RatingModelId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ratingvalue] on ([RatingValueBase].[TransactionCurrencyId] = [TransactionCurrency_ratingvalue].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([RatingValueBase].OwnerId = XXowner.OwnerId)
