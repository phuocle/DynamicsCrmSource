USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ChannelAccessProfileRuleItemLogical]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for ChannelAccessProfileRuleItemLogical
--
create view [dbo].[ChannelAccessProfileRuleItemLogical]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [AssociatedChannelAccessProfileName],
    [TransactionCurrencyIdName],
    [OwnerIdType],
    [OwningUser],
    [OwnerId],
    [OwningBusinessUnit],
    [ChannelAccessProfileRuleIdName],

    -- physical attributes
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [ChannelAccessProfileRuleItemIdUnique],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ExchangeRate],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [ConditionXml],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [ChannelAccessProfileRuleId],
    [ChannelAccessProfileRuleItemId],
    [SequenceNumber],
    [AssociatedChannelAccessProfile],
    [Description]
) with view_metadata as
select
    -- logical attributes
    [lk_profileruleitem_modifiedby].[FullName],
    [lk_profileruleitem_modifiedby].[YomiFullName],
    [lk_profileruleitem_createdonbehalfby].[FullName],
    [lk_profileruleitem_createdonbehalfby].[YomiFullName],
    [lk_profileruleitem_modifiedonbehalfby].[FullName],
    [lk_profileruleitem_modifiedonbehalfby].[YomiFullName],
    [lk_profileruleitem_createdby].[FullName],
    [lk_profileruleitem_createdby].[YomiFullName],
    [profileruleitem_associated_channelaccessprofile].[Name],
    [TransactionCurrency_profileruleitem].[CurrencyName],
    [profilerule_entries].[OwnerIdType],
    case when [profilerule_entries].OwnerIdType = 8
    then [profilerule_entries].OwnerId
    else null
    end,
    [profilerule_entries].[OwnerId],
    [profilerule_entries].[OwningBusinessUnit],
    [profilerule_entries].[Name],

    -- physical attribute
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[ChannelAccessProfileRuleItemIdUnique],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ExchangeRate],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[Name],
    [T1].[ConditionXml],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[TransactionCurrencyId],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[VersionNumber],
    [T1].[ChannelAccessProfileRuleId],
    [T1].[ChannelAccessProfileRuleItemId],
    [T1].[SequenceNumber],
    [T1].[AssociatedChannelAccessProfile],
    [T1].[Description]
from [ChannelAccessProfileRuleItemBase] [T1]
    left join [SystemUserBase] [lk_profileruleitem_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_profileruleitem_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_profileruleitem_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_profileruleitem_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_profileruleitem_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_profileruleitem_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_profileruleitem_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_profileruleitem_modifiedonbehalfby].[SystemUserId])
    left join [ChannelAccessProfileRuleBase] [profilerule_entries] on ([T1].[ChannelAccessProfileRuleId] = [profilerule_entries].[ChannelAccessProfileRuleId] and [profilerule_entries].OverwriteTime = 0 and [profilerule_entries].ComponentState = 0)
    left join [ChannelAccessProfileBase] [profileruleitem_associated_channelaccessprofile] on ([T1].[AssociatedChannelAccessProfile] = [profileruleitem_associated_channelaccessprofile].[ChannelAccessProfileId] and [profileruleitem_associated_channelaccessprofile].OverwriteTime = 0 and [profileruleitem_associated_channelaccessprofile].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_profileruleitem] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_profileruleitem].[TransactionCurrencyId])
where T1.OverwriteTime = 0
GO
