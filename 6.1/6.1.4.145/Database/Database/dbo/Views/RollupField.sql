


--
-- base view for RollupField
--
create view dbo.[RollupField]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [MetricIdName],
    [ModifiedByName],
    [OrganizationId],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [RollupFieldId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [SourceAttribute],
    [DateAttribute],
    [MetricId],
    [GoalAttribute],
    [SourceState],
    [SourceStatus],
    [SourceEntity],
    [EntityForDateAttribute],
    [IsStateParentEntityAttribute]
) with view_metadata as
select
    -- logical attributes
    [lk_rollupfield_createdby].[FullName],
    [lk_rollupfield_modifiedonbehalfby].[YomiFullName],
    [metric_rollupfield].[Name],
    [lk_rollupfield_modifiedby].[FullName],
    [metric_rollupfield].[OrganizationId],
    [lk_rollupfield_createdonbehalfby].[FullName],
    [lk_rollupfield_modifiedonbehalfby].[FullName],
    [lk_rollupfield_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [RollupFieldBase].[RollupFieldId],
    [RollupFieldBase].[CreatedOn],
    [RollupFieldBase].[CreatedBy],
    [RollupFieldBase].[ModifiedOn],
    [RollupFieldBase].[ModifiedBy],
    [RollupFieldBase].[CreatedOnBehalfBy],
    [RollupFieldBase].[ModifiedOnBehalfBy],
    [RollupFieldBase].[VersionNumber],
    [RollupFieldBase].[ImportSequenceNumber],
    [RollupFieldBase].[TimeZoneRuleVersionNumber],
    [RollupFieldBase].[UTCConversionTimeZoneCode],
    [RollupFieldBase].[SourceAttribute],
    [RollupFieldBase].[DateAttribute],
    [RollupFieldBase].[MetricId],
    [RollupFieldBase].[GoalAttribute],
    [RollupFieldBase].[SourceState],
    [RollupFieldBase].[SourceStatus],
    [RollupFieldBase].[SourceEntity],
    [RollupFieldBase].[EntityForDateAttribute],
    [RollupFieldBase].[IsStateParentEntityAttribute]
from [RollupFieldBase] 
    left join [SystemUserBase] [lk_rollupfield_createdby] with(nolock) on ([RollupFieldBase].[CreatedBy] = [lk_rollupfield_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_rollupfield_createdonbehalfby] with(nolock) on ([RollupFieldBase].[CreatedOnBehalfBy] = [lk_rollupfield_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_rollupfield_modifiedby] with(nolock) on ([RollupFieldBase].[ModifiedBy] = [lk_rollupfield_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_rollupfield_modifiedonbehalfby] with(nolock) on ([RollupFieldBase].[ModifiedOnBehalfBy] = [lk_rollupfield_modifiedonbehalfby].[SystemUserId])
    left join [MetricBase] [metric_rollupfield] on ([RollupFieldBase].[MetricId] = [metric_rollupfield].[MetricId])
