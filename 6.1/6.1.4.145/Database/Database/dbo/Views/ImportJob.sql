


--
-- base view for ImportJob
--
create view dbo.[ImportJob]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedByName],
    [OrganizationIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [CompletedOn],
    [StartedOn],
    [ImportJobId],
    [ModifiedOn],
    [Data],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [CreatedOn],
    [Name],
    [CreatedBy],
    [ModifiedBy],
    [SolutionName],
    [Progress],
    [OrganizationId],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_importjobbase_createdby].[FullName],
    [lk_importjobbase_modifiedby].[FullName],
    [organization_importjob].[Name],
    [lk_importjobbase_createdonbehalfby].[YomiFullName],
    [lk_importjobbase_createdonbehalfby].[FullName],
    [lk_importjobbase_modifiedonbehalfby].[FullName],
    [lk_importjobbase_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [ImportJobBase].[CompletedOn],
    [ImportJobBase].[StartedOn],
    [ImportJobBase].[ImportJobId],
    [ImportJobBase].[ModifiedOn],
    [ImportJobBase].[Data],
    [ImportJobBase].[TimeZoneRuleVersionNumber],
    [ImportJobBase].[UTCConversionTimeZoneCode],
    [ImportJobBase].[CreatedOn],
    [ImportJobBase].[Name],
    [ImportJobBase].[CreatedBy],
    [ImportJobBase].[ModifiedBy],
    [ImportJobBase].[SolutionName],
    [ImportJobBase].[Progress],
    [ImportJobBase].[OrganizationId],
    [ImportJobBase].[ModifiedOnBehalfBy],
    [ImportJobBase].[CreatedOnBehalfBy]
from [ImportJobBase] 
    left join [SystemUserBase] [lk_importjobbase_createdby] with(nolock) on ([ImportJobBase].[CreatedBy] = [lk_importjobbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importjobbase_createdonbehalfby] with(nolock) on ([ImportJobBase].[CreatedOnBehalfBy] = [lk_importjobbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importjobbase_modifiedby] with(nolock) on ([ImportJobBase].[ModifiedBy] = [lk_importjobbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importjobbase_modifiedonbehalfby] with(nolock) on ([ImportJobBase].[ModifiedOnBehalfBy] = [lk_importjobbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_importjob] with(nolock) on ([ImportJobBase].[OrganizationId] = [organization_importjob].[OrganizationId])
