


--
-- logical view for ReportCategoryLogical
--
create view dbo.[ReportCategoryLogical]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [ModifiedByName],
    [CreatedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [OwningUser],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ReportIdName],
    [CreatedByYomiName],
    [OwningBusinessUnit],
    [TransactionCurrencyIdName],

    -- physical attributes
    [ModifiedBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [CategoryCode],
    [UTCConversionTimeZoneCode],
    [ReportCategoryId],
    [CreatedBy],
    [TimeZoneRuleVersionNumber],
    [CreatedOn],
    [ModifiedOn],
    [ReportId],
    [ReportCategoryIdUnique],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [IsManaged],
    [IsCustomizable]
) with view_metadata as
select
    -- logical attributes
    [report_reportcategories].[OwnerId],
    [report_reportcategories].[OwnerIdType],
    [lk_reportcategorybase_modifiedby].[FullName],
    [lk_reportcategorybase_createdby].[FullName],
    [lk_reportcategorybase_modifiedby].[YomiFullName],
    [lk_reportcategorybase_createdonbehalfby].[FullName],
    case when [report_reportcategories].OwnerIdType = 8
    then [report_reportcategories].OwnerId
    else null
    end,
    [lk_reportcategorybase_modifiedonbehalfby].[FullName],
    [lk_reportcategorybase_createdonbehalfby].[YomiFullName],
    [lk_reportcategorybase_modifiedonbehalfby].[YomiFullName],
    [report_reportcategories].[Name],
    [lk_reportcategorybase_createdby].[YomiFullName],
    [report_reportcategories].[OwningBusinessUnit],
    [TransactionCurrency_ReportCategory].[CurrencyName],

    -- physical attribute
    [T1].[ModifiedBy],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[CategoryCode],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[ReportCategoryId],
    [T1].[CreatedBy],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[CreatedOn],
    [T1].[ModifiedOn],
    [T1].[ReportId],
    [T1].[ReportCategoryIdUnique],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[TransactionCurrencyId],
    [T1].[ExchangeRate],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [ReportCategoryBase] [T1]
    left join [SystemUserBase] [lk_reportcategorybase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_reportcategorybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_reportcategorybase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_reportcategorybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_reportcategorybase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_reportcategorybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_reportcategorybase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_reportcategorybase_modifiedonbehalfby].[SystemUserId])
    left join [ReportBase] [report_reportcategories] on ([T1].[ReportId] = [report_reportcategories].[ReportId] and [report_reportcategories].OverwriteTime = 0 and [report_reportcategories].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_ReportCategory] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_ReportCategory].[TransactionCurrencyId])
where T1.OverwriteTime = 0