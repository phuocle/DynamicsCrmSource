SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for ChannelPropertyLogical
--
create view [dbo].[ChannelPropertyLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [RegardingObjectIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OverriddenCreatedOn],
    [Name],
    [Description],
    [ChannelPropertyId],
    [statecode],
    [ImportSequenceNumber],
    [OrganizationId],
    [VersionNumber],
    [RegardingObjectId],
    [RegardingObjectTypeCode],
    [statuscode],
    [Applicationsource],
    [SolutionId],
    [SupportingSolutionId],
    [DataType],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [ChannelPropertyIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_ChannelProperty_createdonbehalfby].[FullName],
    [lk_ChannelProperty_createdonbehalfby].[YomiFullName],
    [lk_ChannelProperty_modifiedonbehalfby].[YomiFullName],
    [lk_ChannelProperty_modifiedonbehalfby].[FullName],
    [ChannelPropertyGroup_ChannelProperty].[Name],
    [lk_ChannelProperty_modifiedby].[FullName],
    [lk_ChannelProperty_modifiedby].[YomiFullName],
    [channelproperty_organization].[Name],
    [lk_ChannelProperty_createdby].[FullName],
    [lk_ChannelProperty_createdby].[YomiFullName],

    -- physical attribute
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OverriddenCreatedOn],
    [T1].[Name],
    [T1].[Description],
    [T1].[ChannelPropertyId],
    [T1].[statecode],
    [T1].[ImportSequenceNumber],
    [T1].[OrganizationId],
    [T1].[VersionNumber],
    [T1].[RegardingObjectId],
    [T1].[RegardingObjectTypeCode],
    [T1].[statuscode],
    [T1].[Applicationsource],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[DataType],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[ChannelPropertyIdUnique]
from [ChannelPropertyBase] [T1]
    left join [OrganizationBase] [channelproperty_organization] with(nolock) on ([T1].[OrganizationId] = [channelproperty_organization].[OrganizationId])
    left join [ChannelPropertyGroupBase] [ChannelPropertyGroup_ChannelProperty] on ([T1].[RegardingObjectId] = [ChannelPropertyGroup_ChannelProperty].[ChannelPropertyGroupId] and [ChannelPropertyGroup_ChannelProperty].OverwriteTime = 0 and [ChannelPropertyGroup_ChannelProperty].ComponentState = 0)
    left join [SystemUserBase] [lk_ChannelProperty_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_ChannelProperty_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelProperty_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_ChannelProperty_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelProperty_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_ChannelProperty_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelProperty_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_ChannelProperty_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0
GO
