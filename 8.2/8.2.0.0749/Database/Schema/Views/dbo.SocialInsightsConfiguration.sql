SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SocialInsightsConfiguration
--
create view [dbo].[SocialInsightsConfiguration]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [OrganizationIdName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [OrganizationId],
    [FormId],
    [FormIdName],
    [SocialInsightsConfigurationId],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [ControlId],
    [SocialDataItemId],
    [SocialDataParameters],
    [FormTypeCode],
    [SocialDataItemType]
) with view_metadata as
select
    -- logical attributes
    [lk_socialinsightsconfiguration_createdonbehalfby].[FullName],
    [lk_socialinsightsconfiguration_createdonbehalfby].[YomiFullName],
    [lk_socialinsightsconfiguration_modifiedonbehalfby].[FullName],
    [lk_socialinsightsconfiguration_modifiedonbehalfby].[YomiFullName],
    [lk_socialinsightsconfiguration_createdby].[FullName],
    [lk_socialinsightsconfiguration_createdby].[FullName],
    [lk_socialinsightsconfiguration_modifiedby].[FullName],
    [lk_socialinsightsconfiguration_modifiedby].[FullName],
    [organization_socialinsightsconfiguration].[Name],

    -- physical attribute
    [SocialInsightsConfigurationBase].[CreatedBy],
    [SocialInsightsConfigurationBase].[CreatedOn],
    [SocialInsightsConfigurationBase].[CreatedOnBehalfBy],
    [SocialInsightsConfigurationBase].[OrganizationId],
    [SocialInsightsConfigurationBase].[FormId],
    [SocialInsightsConfigurationBase].[FormIdName],
    [SocialInsightsConfigurationBase].[SocialInsightsConfigurationId],
    [SocialInsightsConfigurationBase].[ModifiedBy],
    [SocialInsightsConfigurationBase].[ModifiedOn],
    [SocialInsightsConfigurationBase].[ModifiedOnBehalfBy],
    [SocialInsightsConfigurationBase].[RegardingObjectId],
    [SocialInsightsConfigurationBase].[RegardingObjectIdName],
    [SocialInsightsConfigurationBase].[RegardingObjectIdYomiName],
    [SocialInsightsConfigurationBase].[RegardingObjectTypeCode],
    [SocialInsightsConfigurationBase].[ControlId],
    [SocialInsightsConfigurationBase].[SocialDataItemId],
    [SocialInsightsConfigurationBase].[SocialDataParameters],
    [SocialInsightsConfigurationBase].[FormTypeCode],
    [SocialInsightsConfigurationBase].[SocialDataItemType]
from [SocialInsightsConfigurationBase] 
    left join [SystemUserBase] [lk_socialinsightsconfiguration_createdby] with(nolock) on ([SocialInsightsConfigurationBase].[CreatedBy] = [lk_socialinsightsconfiguration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_socialinsightsconfiguration_createdonbehalfby] with(nolock) on ([SocialInsightsConfigurationBase].[CreatedOnBehalfBy] = [lk_socialinsightsconfiguration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_socialinsightsconfiguration_modifiedby] with(nolock) on ([SocialInsightsConfigurationBase].[ModifiedBy] = [lk_socialinsightsconfiguration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_socialinsightsconfiguration_modifiedonbehalfby] with(nolock) on ([SocialInsightsConfigurationBase].[ModifiedOnBehalfBy] = [lk_socialinsightsconfiguration_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_socialinsightsconfiguration] with(nolock) on ([SocialInsightsConfigurationBase].[OrganizationId] = [organization_socialinsightsconfiguration].[OrganizationId])
GO
