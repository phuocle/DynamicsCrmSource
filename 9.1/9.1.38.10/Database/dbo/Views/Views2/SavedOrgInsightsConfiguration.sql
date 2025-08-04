


--
-- base view for SavedOrgInsightsConfiguration
--
create view dbo.[SavedOrgInsightsConfiguration]
 (
    -- logical attributes
    [OrganizationIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [OrganizationId],
    [SavedOrgInsightsConfigurationId],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [PlotOption],
    [Lookback],
    [Name],
    [Description],
    [IsDefault],
    [Parameters],
    [MetricType],
    [JsonData],
    [IsDrilldown],
    [JsonDataStartTime],
    [JsonDataEndTime]
) with view_metadata as
select
    -- logical attributes
    [organization_savedorginsightsconfiguration].[Name],
    [lk_savedorginsightsconfiguration_createdonbehalfby].[YomiFullName],
    [lk_savedorginsightsconfiguration_createdonbehalfby].[FullName],
    [lk_savedorginsightsconfiguration_modifiedby].[YomiFullName],
    [lk_savedorginsightsconfiguration_modifiedby].[FullName],
    [lk_savedorginsightsconfiguration_modifiedonbehalfby].[YomiFullName],
    [lk_savedorginsightsconfiguration_modifiedonbehalfby].[FullName],
    [lk_savedorginsightsconfiguration_createdby].[YomiFullName],
    [lk_savedorginsightsconfiguration_createdby].[FullName],

    -- physical attribute
    [SavedOrgInsightsConfigurationBase].[CreatedBy],
    [SavedOrgInsightsConfigurationBase].[CreatedOn],
    [SavedOrgInsightsConfigurationBase].[CreatedOnBehalfBy],
    [SavedOrgInsightsConfigurationBase].[OrganizationId],
    [SavedOrgInsightsConfigurationBase].[SavedOrgInsightsConfigurationId],
    [SavedOrgInsightsConfigurationBase].[ModifiedBy],
    [SavedOrgInsightsConfigurationBase].[ModifiedOn],
    [SavedOrgInsightsConfigurationBase].[ModifiedOnBehalfBy],
    [SavedOrgInsightsConfigurationBase].[PlotOption],
    [SavedOrgInsightsConfigurationBase].[Lookback],
    [SavedOrgInsightsConfigurationBase].[Name],
    [SavedOrgInsightsConfigurationBase].[Description],
    [SavedOrgInsightsConfigurationBase].[IsDefault],
    [SavedOrgInsightsConfigurationBase].[Parameters],
    [SavedOrgInsightsConfigurationBase].[MetricType],
    [SavedOrgInsightsConfigurationBase].[JsonData],
    [SavedOrgInsightsConfigurationBase].[IsDrilldown],
    [SavedOrgInsightsConfigurationBase].[JsonDataStartTime],
    [SavedOrgInsightsConfigurationBase].[JsonDataEndTime]
from [SavedOrgInsightsConfigurationBase] 
    left join [SystemUserBase] [lk_savedorginsightsconfiguration_createdby]  on ([SavedOrgInsightsConfigurationBase].[CreatedBy] = [lk_savedorginsightsconfiguration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_savedorginsightsconfiguration_createdonbehalfby]  on ([SavedOrgInsightsConfigurationBase].[CreatedOnBehalfBy] = [lk_savedorginsightsconfiguration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_savedorginsightsconfiguration_modifiedby]  on ([SavedOrgInsightsConfigurationBase].[ModifiedBy] = [lk_savedorginsightsconfiguration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_savedorginsightsconfiguration_modifiedonbehalfby]  on ([SavedOrgInsightsConfigurationBase].[ModifiedOnBehalfBy] = [lk_savedorginsightsconfiguration_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_savedorginsightsconfiguration]  on ([SavedOrgInsightsConfigurationBase].[OrganizationId] = [organization_savedorginsightsconfiguration].[OrganizationId])
