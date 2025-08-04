


--
-- logical view for RibbonRuleLogical
--
create view dbo.[RibbonRuleLogical]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],

    -- physical attributes
    [RuleId],
    [RuleDefinition],
    [Entity],
    [RuleType],
    [RibbonRuleUniqueId],
    [VersionNumber],
    [OrganizationId],
    [RibbonRuleId],
    [RibbonCustomizationId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_ribbonrule_modifiedby].[YomiFullName],
    [lk_ribbonrule_modifiedonbehalfby].[FullName],
    [lk_ribbonrule_modifiedonbehalfby].[YomiFullName],
    [lk_ribbonrule_modifiedby].[FullName],
    [lk_ribbonrule_createdonbehalfby].[YomiFullName],
    [lk_ribbonrule_createdonbehalfby].[FullName],
    [lk_ribbonrule_createdby].[YomiFullName],
    [lk_ribbonrule_createdby].[FullName],

    -- physical attribute
    [T1].[RuleId],
    [T1].[RuleDefinition],
    [T1].[Entity],
    [T1].[RuleType],
    [T1].[RibbonRuleUniqueId],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[RibbonRuleId],
    [T1].[RibbonCustomizationId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy]
from [RibbonRuleBase] [T1]
    left join [SystemUserBase] [lk_ribbonrule_createdby] on ([T1].[CreatedBy] = [lk_ribbonrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ribbonrule_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_ribbonrule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ribbonrule_modifiedby] on ([T1].[ModifiedBy] = [lk_ribbonrule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ribbonrule_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_ribbonrule_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0