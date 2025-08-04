


--
-- base view for SocialProfile
--
create view dbo.[SocialProfile]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [TransactionCurrencyIdName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [SocialProfileId],
    [ProfileName],
    [ProfileFullName],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [StateCode],
    [StatusCode],
    [CustomerId],
    [CustomerIdType],
    [CustomerIdName],
    [Blocked],
    [OwningBusinessUnit],
    [OverriddenCreatedOn],
    [Community],
    [InfluenceScore],
    [ProfileLink],
    [UniqueProfileID],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [CustomerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_socialprofileBase_modifiedonbehalfby].[FullName],
    [lk_socialprofileBase_createdonbehalfby].[FullName],
    [transactioncurrency_SocialProfile].[CurrencyName],
    [lk_socialprofileBase_modifiedonbehalfby].[YomiFullName],
    [lk_socialprofileBase_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [SocialProfileBase].OwnerId,
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
    [SocialProfileBase].[SocialProfileId],
    [SocialProfileBase].[ProfileName],
    [SocialProfileBase].[ProfileFullName],
    [SocialProfileBase].[CreatedOn],
    [SocialProfileBase].[CreatedBy],
    [SocialProfileBase].[ModifiedOn],
    [SocialProfileBase].[ModifiedBy],
    [SocialProfileBase].[StateCode],
    [SocialProfileBase].[StatusCode],
    [SocialProfileBase].[CustomerId],
    [SocialProfileBase].[CustomerIdType],
    [SocialProfileBase].[CustomerIdName],
    [SocialProfileBase].[Blocked],
    [SocialProfileBase].[OwningBusinessUnit],
    [SocialProfileBase].[OverriddenCreatedOn],
    [SocialProfileBase].[Community],
    [SocialProfileBase].[InfluenceScore],
    [SocialProfileBase].[ProfileLink],
    [SocialProfileBase].[UniqueProfileID],
    [SocialProfileBase].[TransactionCurrencyId],
    [SocialProfileBase].[ExchangeRate],
    [SocialProfileBase].[ImportSequenceNumber],
    [SocialProfileBase].[TimeZoneRuleVersionNumber],
    [SocialProfileBase].[UTCConversionTimeZoneCode],
    [SocialProfileBase].[VersionNumber],
    [SocialProfileBase].[CustomerIdYomiName],
    [SocialProfileBase].[CreatedOnBehalfBy],
    [SocialProfileBase].[ModifiedOnBehalfBy]
from [SocialProfileBase] 
    left join [SystemUserBase] [lk_socialprofileBase_createdonbehalfby] with(nolock) on ([SocialProfileBase].[CreatedOnBehalfBy] = [lk_socialprofileBase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_socialprofileBase_modifiedonbehalfby] with(nolock) on ([SocialProfileBase].[ModifiedOnBehalfBy] = [lk_socialprofileBase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_SocialProfile] on ([SocialProfileBase].[TransactionCurrencyId] = [transactioncurrency_SocialProfile].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([SocialProfileBase].OwnerId = XXowner.OwnerId)
