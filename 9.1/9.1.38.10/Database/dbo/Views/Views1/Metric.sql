


--
-- base view for Metric
--
create view dbo.[Metric]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [OrganizationIdName],

    -- physical attributes
    [MetricId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [AmountDataType],
    [IsAmount],
    [IsStretchTracked],
    [Description]
) with view_metadata as
select
    -- logical attributes
    [lk_metric_createdonbehalfby].[FullName],
    [lk_metric_createdonbehalfby].[YomiFullName],
    [lk_metric_createdby].[FullName],
    [lk_metric_modifiedonbehalfby].[YomiFullName],
    [lk_metric_modifiedonbehalfby].[FullName],
    [lk_metric_modifiedby].[FullName],
    [organization_metric].[Name],

    -- physical attribute
    [MetricBase].[MetricId],
    [MetricBase].[CreatedOn],
    [MetricBase].[CreatedBy],
    [MetricBase].[ModifiedOn],
    [MetricBase].[ModifiedBy],
    [MetricBase].[CreatedOnBehalfBy],
    [MetricBase].[ModifiedOnBehalfBy],
    [MetricBase].[OrganizationId],
    [MetricBase].[StateCode],
    [MetricBase].[StatusCode],
    [MetricBase].[VersionNumber],
    [MetricBase].[ImportSequenceNumber],
    [MetricBase].[OverriddenCreatedOn],
    [MetricBase].[TimeZoneRuleVersionNumber],
    [MetricBase].[UTCConversionTimeZoneCode],
    [MetricBase].[Name],
    [MetricBase].[AmountDataType],
    [MetricBase].[IsAmount],
    [MetricBase].[IsStretchTracked],
    [MetricBase].[Description]
from [MetricBase] 
    left join [SystemUserBase] [lk_metric_createdby]  on ([MetricBase].[CreatedBy] = [lk_metric_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_metric_createdonbehalfby]  on ([MetricBase].[CreatedOnBehalfBy] = [lk_metric_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_metric_modifiedby]  on ([MetricBase].[ModifiedBy] = [lk_metric_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_metric_modifiedonbehalfby]  on ([MetricBase].[ModifiedOnBehalfBy] = [lk_metric_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_metric]  on ([MetricBase].[OrganizationId] = [organization_metric].[OrganizationId])
