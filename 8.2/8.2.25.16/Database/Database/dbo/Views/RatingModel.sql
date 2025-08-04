


--
-- base view for RatingModel
--
create view dbo.[RatingModel]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
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
    [RatingModelId],
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
    [MaxRatingValue],
    [MinRatingValue],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_ratingmodel_createdonbehalfby].[FullName],
    [lk_ratingmodel_createdonbehalfby].[YomiFullName],
    [lk_ratingmodel_modifiedonbehalfby].[FullName],
    [lk_ratingmodel_modifiedonbehalfby].[YomiFullName],
    [lk_ratingmodel_createdby].[FullName],
    [lk_ratingmodel_createdby].[YomiFullName],
    [lk_ratingmodel_modifiedby].[FullName],
    [lk_ratingmodel_modifiedby].[YomiFullName],
    [TransactionCurrency_ratingmodel].[CurrencyName],

    -- ownership entries
    OwnerId = [RatingModelBase].OwnerId,
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
    [RatingModelBase].[RatingModelId],
    [RatingModelBase].[CreatedOn],
    [RatingModelBase].[CreatedBy],
    [RatingModelBase].[ModifiedOn],
    [RatingModelBase].[ModifiedBy],
    [RatingModelBase].[CreatedOnBehalfBy],
    [RatingModelBase].[ModifiedOnBehalfBy],
    [RatingModelBase].[OwningBusinessUnit],
    [RatingModelBase].[StateCode],
    [RatingModelBase].[StatusCode],
    [RatingModelBase].[VersionNumber],
    [RatingModelBase].[ImportSequenceNumber],
    [RatingModelBase].[OverriddenCreatedOn],
    [RatingModelBase].[TimeZoneRuleVersionNumber],
    [RatingModelBase].[UTCConversionTimeZoneCode],
    [RatingModelBase].[Name],
    [RatingModelBase].[MaxRatingValue],
    [RatingModelBase].[MinRatingValue],
    [RatingModelBase].[ExchangeRate],
    [RatingModelBase].[TransactionCurrencyId]
from [RatingModelBase] 
    left join [SystemUserBase] [lk_ratingmodel_createdby] with(nolock) on ([RatingModelBase].[CreatedBy] = [lk_ratingmodel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingmodel_createdonbehalfby] with(nolock) on ([RatingModelBase].[CreatedOnBehalfBy] = [lk_ratingmodel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingmodel_modifiedby] with(nolock) on ([RatingModelBase].[ModifiedBy] = [lk_ratingmodel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ratingmodel_modifiedonbehalfby] with(nolock) on ([RatingModelBase].[ModifiedOnBehalfBy] = [lk_ratingmodel_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ratingmodel] on ([RatingModelBase].[TransactionCurrencyId] = [TransactionCurrency_ratingmodel].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([RatingModelBase].OwnerId = XXowner.OwnerId)
