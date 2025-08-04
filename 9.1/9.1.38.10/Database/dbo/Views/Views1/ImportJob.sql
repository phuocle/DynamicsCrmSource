


--
-- base view for ImportJob
--
create view dbo.[ImportJob]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],

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
    [CreatedOnBehalfBy],
    [SolutionId],
    [ImportContext],
    [OperationContext]
) with view_metadata as
select
    -- logical attributes
    [lk_importjobbase_modifiedonbehalfby].[FullName],
    [lk_importjobbase_modifiedonbehalfby].[YomiFullName],
    [lk_importjobbase_modifiedby].[FullName],
    [lk_importjobbase_createdby].[FullName],
    [lk_importjobbase_createdonbehalfby].[YomiFullName],
    [lk_importjobbase_createdonbehalfby].[FullName],
    [organization_importjob].[Name],

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
    [ImportJobBase].[CreatedOnBehalfBy],
    [ImportJobBase].[SolutionId],
    [ImportJobBase].[ImportContext],
    [ImportJobBase].[OperationContext]
from [ImportJobBase] 
    left join [SystemUserBase] [lk_importjobbase_createdby]  on ([ImportJobBase].[CreatedBy] = [lk_importjobbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importjobbase_createdonbehalfby]  on ([ImportJobBase].[CreatedOnBehalfBy] = [lk_importjobbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importjobbase_modifiedby]  on ([ImportJobBase].[ModifiedBy] = [lk_importjobbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importjobbase_modifiedonbehalfby]  on ([ImportJobBase].[ModifiedOnBehalfBy] = [lk_importjobbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_importjob]  on ([ImportJobBase].[OrganizationId] = [organization_importjob].[OrganizationId])
