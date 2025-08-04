


--
-- logical view for ServicePlanLogical
--
create view dbo.[ServicePlanLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [ServicePlanId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [DisplayName],
    [AccessMode]
) with view_metadata as
select
    -- logical attributes
    [lk_serviceplan_createdonbehalfby].[FullName],
    [lk_serviceplan_createdonbehalfby].[YomiFullName],
    [lk_serviceplan_createdby].[FullName],
    [lk_serviceplan_createdby].[YomiFullName],
    [lk_serviceplan_modifiedonbehalfby].[FullName],
    [lk_serviceplan_modifiedonbehalfby].[YomiFullName],
    [lk_serviceplan_modifiedby].[FullName],
    [lk_serviceplan_modifiedby].[YomiFullName],

    -- physical attribute
    [T1].[ServicePlanId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[Name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[DisplayName],
    [T1].[AccessMode]
from [ServicePlanBase] [T1]
    left join [SystemUserBase] [lk_serviceplan_createdby] on ([T1].[CreatedBy] = [lk_serviceplan_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceplan_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_serviceplan_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceplan_modifiedby] on ([T1].[ModifiedBy] = [lk_serviceplan_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceplan_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_serviceplan_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0