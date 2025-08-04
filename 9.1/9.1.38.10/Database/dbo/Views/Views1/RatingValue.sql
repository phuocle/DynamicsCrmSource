


--
-- base view for RatingValue
--
create view dbo.[RatingValue]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [RatingModelName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],

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
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [RatingModel],
    [StateCode],
    [StatusCode],
    [Value],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_ratingvalue_modifiedonbehalfby].[FullName],
    [lk_ratingvalue_modifiedonbehalfby].[YomiFullName],
    [lk_ratingvalue_modifiedby].[FullName],
    [lk_ratingvalue_modifiedby].[YomiFullName],
    [ratingmodel_ratingvalue_RatingModel].[Name],
    [lk_ratingvalue_createdonbehalfby].[FullName],
    [lk_ratingvalue_createdonbehalfby].[YomiFullName],
    [lk_ratingvalue_createdby].[FullName],
    [lk_ratingvalue_createdby].[YomiFullName],
    [TransactionCurrency_ratingvalue].[CurrencyName],

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
    [RatingValueBase].[VersionNumber],
    [RatingValueBase].[ImportSequenceNumber],
    [RatingValueBase].[OverriddenCreatedOn],
    [RatingValueBase].[TimeZoneRuleVersionNumber],
    [RatingValueBase].[UTCConversionTimeZoneCode],
    [RatingValueBase].[Name],
    [RatingValueBase].[RatingModel],
    [RatingValueBase].[StateCode],
    [RatingValueBase].[StatusCode],
    [RatingValueBase].[Value],
    [RatingValueBase].[ExchangeRate],
    [RatingValueBase].[TransactionCurrencyId]
from [RatingValueBase] 
    left join [SystemUserBase] [lk_ratingvalue_createdby]  on ([RatingValueBase].[CreatedBy] = [lk_ratingvalue_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingvalue_createdonbehalfby]  on ([RatingValueBase].[CreatedOnBehalfBy] = [lk_ratingvalue_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingvalue_modifiedby]  on ([RatingValueBase].[ModifiedBy] = [lk_ratingvalue_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingvalue_modifiedonbehalfby]  on ([RatingValueBase].[ModifiedOnBehalfBy] = [lk_ratingvalue_modifiedonbehalfby].[SystemUserId])
    left join [RatingModelBase] [ratingmodel_ratingvalue_RatingModel] on ([RatingValueBase].[RatingModel] = [ratingmodel_ratingvalue_RatingModel].[RatingModelId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ratingvalue] on ([RatingValueBase].[TransactionCurrencyId] = [TransactionCurrency_ratingvalue].[TransactionCurrencyId])
    left join OwnerBase XXowner  on ([RatingValueBase].OwnerId = XXowner.OwnerId)
