SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for ChannelAccessProfileLogical
--
create view [dbo].[ChannelAccessProfileLogical]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [ChannelAccessProfileId],
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
    [ExchangeRate],
    [TransactionCurrencyId],
    [EmailAccess],
    [FacebookAccess],
    [PhoneAccess],
    [TwitterAccess],
    [WebAccess],
    [SolutionId],
    [SupportingSolutionId],
    [ViewKnowledgeArticles],
    [ViewArticleRating],
    [RateKnowledgeArticles],
    [SubmitFeedback],
    [IsManaged],
    [ComponentState],
    [OverwriteTime],
    [IntroducedVersion],
    [ChannelAccessProfileIdUnique],
    [IsGuestProfile],
    [HavePrivilegesChanged]
) with view_metadata as
select
    -- logical attributes
    [lk_channelaccessprofile_createdby].[FullName],
    [lk_channelaccessprofile_createdby].[YomiFullName],
    [lk_channelaccessprofile_modifiedby].[FullName],
    [lk_channelaccessprofile_modifiedby].[YomiFullName],
    [lk_channelaccessprofile_createdonbehalfby].[FullName],
    [lk_channelaccessprofile_createdonbehalfby].[YomiFullName],
    [lk_channelaccessprofile_modifiedonbehalfby].[FullName],
    [lk_channelaccessprofile_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_ChannelAccessProfile].[CurrencyName],

    -- ownership entries
    OwnerId = [T1].OwnerId,
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
    [T1].[ChannelAccessProfileId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OwningBusinessUnit],
    [T1].[StateCode],
    [T1].[StatusCode],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[Name],
    [T1].[ExchangeRate],
    [T1].[TransactionCurrencyId],
    [T1].[EmailAccess],
    [T1].[FacebookAccess],
    [T1].[PhoneAccess],
    [T1].[TwitterAccess],
    [T1].[WebAccess],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ViewKnowledgeArticles],
    [T1].[ViewArticleRating],
    [T1].[RateKnowledgeArticles],
    [T1].[SubmitFeedback],
    [T1].[IsManaged],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IntroducedVersion],
    [T1].[ChannelAccessProfileIdUnique],
    [T1].[IsGuestProfile],
    [T1].[HavePrivilegesChanged]
from [ChannelAccessProfileBase] [T1]
    left join [SystemUserBase] [lk_channelaccessprofile_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_channelaccessprofile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_channelaccessprofile_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_channelaccessprofile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_channelaccessprofile_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_channelaccessprofile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_channelaccessprofile_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_channelaccessprofile_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ChannelAccessProfile] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_ChannelAccessProfile].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0
GO
