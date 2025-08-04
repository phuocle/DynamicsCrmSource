


--
-- base view for MailMergeTemplate
--
create view dbo.[MailMergeTemplate]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [ModifiedBy],
    [Body],
    [TemplateTypeCode],
    [CreatedBy],
    [Description],
    [UTCConversionTimeZoneCode],
    [FileSize],
    [ParameterXml],
    [MailMergeType],
    [CreatedOn],
    [DefaultFilter],
    [MimeType],
    [TimeZoneRuleVersionNumber],
    [StateCode],
    [FileName],
    [LanguageCode],
    [OwningBusinessUnit],
    [ModifiedOn],
    [DocumentFormat],
    [VersionNumber],
    [Name],
    [MailMergeTemplateId],
    [IsPersonal],
    [StatusCode],
    [ComponentState],
    [OverwriteTime],
    [SupportingSolutionId],
    [MailMergeTemplateIdUnique],
    [SolutionId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged],
    [IsCustomizable],
    [TransactionCurrencyId],
    [ExchangeRate],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_mailmergetemplatebase_modifiedby].[FullName],
    [lk_mailmergetemplatebase_createdby].[YomiFullName],
    [lk_mailmergetemplatebase_modifiedby].[YomiFullName],
    [lk_mailmergetemplatebase_createdby].[FullName],
    [lk_mailmergetemplatebase_modifiedonbehalfby].[FullName],
    [lk_mailmergetemplatebase_createdonbehalfby].[FullName],
    [lk_mailmergetemplatebase_createdonbehalfby].[YomiFullName],
    [lk_mailmergetemplatebase_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_MailMergeTemplate].[CurrencyName],

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
    [T1].[ModifiedBy],
    [T1].[Body],
    [T1].[TemplateTypeCode],
    [T1].[CreatedBy],
    [T1].[Description],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[FileSize],
    [T1].[ParameterXml],
    [T1].[MailMergeType],
    [T1].[CreatedOn],
    [T1].[DefaultFilter],
    [T1].[MimeType],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[StateCode],
    [T1].[FileName],
    [T1].[LanguageCode],
    [T1].[OwningBusinessUnit],
    [T1].[ModifiedOn],
    [T1].[DocumentFormat],
    [T1].[VersionNumber],
    [T1].[Name],
    [T1].[MailMergeTemplateId],
    [T1].[IsPersonal],
    [T1].[StatusCode],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SupportingSolutionId],
    [T1].[MailMergeTemplateIdUnique],
    [T1].[SolutionId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[TransactionCurrencyId],
    [T1].[ExchangeRate],
    [T1].[IntroducedVersion]
from [MailMergeTemplateBase] [T1]
    left join [SystemUserBase] [lk_mailmergetemplatebase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_mailmergetemplatebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_mailmergetemplatebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_mailmergetemplatebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_mailmergetemplatebase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_mailmergetemplatebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_mailmergetemplatebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_mailmergetemplatebase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_MailMergeTemplate] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_MailMergeTemplate].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0