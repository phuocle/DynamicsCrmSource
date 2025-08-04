


--
-- logical view for RibbonCommandLogical
--
create view dbo.[RibbonCommandLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [CommandDefinition],
    [Entity],
    [RibbonCommandUniqueId],
    [Command],
    [VersionNumber],
    [OrganizationId],
    [RibbonCommandId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [RibbonCustomizationId],
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
    [lk_ribboncommand_createdonbehalfby].[FullName],
    [lk_ribboncommand_modifiedby].[YomiFullName],
    [lk_ribboncommand_createdonbehalfby].[YomiFullName],
    [lk_ribboncommand_modifiedonbehalfby].[YomiFullName],
    [lk_ribboncommand_createdby].[YomiFullName],
    [lk_ribboncommand_modifiedby].[FullName],
    [lk_ribboncommand_createdby].[FullName],
    [lk_ribboncommand_modifiedonbehalfby].[FullName],

    -- physical attribute
    [T1].[CommandDefinition],
    [T1].[Entity],
    [T1].[RibbonCommandUniqueId],
    [T1].[Command],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[RibbonCommandId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[RibbonCustomizationId],
    [T1].[IsManaged],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy]
from [RibbonCommandBase] [T1]
    left join [SystemUserBase] [lk_ribboncommand_createdby] on ([T1].[CreatedBy] = [lk_ribboncommand_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ribboncommand_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_ribboncommand_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ribboncommand_modifiedby] on ([T1].[ModifiedBy] = [lk_ribboncommand_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ribboncommand_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_ribboncommand_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0