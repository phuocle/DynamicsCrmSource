SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for ChannelPropertyGroupLogical
--
create view [dbo].[ChannelPropertyGroupLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
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
    [ChannelPropertyGroupId],
    [statecode],
    [ImportSequenceNumber],
    [OrganizationId],
    [VersionNumber],
    [RegardingTypeCode],
    [statuscode],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [ChannelPropertyGroupIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_ChannelPropertyGroup_createdonbehalfby].[YomiFullName],
    [lk_ChannelPropertyGroup_createdonbehalfby].[FullName],
    [lk_ChannelPropertyGroup_modifiedby].[FullName],
    [lk_ChannelPropertyGroup_modifiedby].[YomiFullName],
    [channelpropertygroup_organization].[Name],
    [lk_ChannelPropertyGroup_modifiedonbehalfby].[YomiFullName],
    [lk_ChannelPropertyGroup_modifiedonbehalfby].[FullName],
    [lk_ChannelPropertyGroup_createdby].[FullName],
    [lk_ChannelPropertyGroup_createdby].[YomiFullName],

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
    [T1].[ChannelPropertyGroupId],
    [T1].[statecode],
    [T1].[ImportSequenceNumber],
    [T1].[OrganizationId],
    [T1].[VersionNumber],
    [T1].[RegardingTypeCode],
    [T1].[statuscode],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[ChannelPropertyGroupIdUnique]
from [ChannelPropertyGroupBase] [T1]
    left join [OrganizationBase] [channelpropertygroup_organization] with(nolock) on ([T1].[OrganizationId] = [channelpropertygroup_organization].[OrganizationId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_ChannelPropertyGroup_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_ChannelPropertyGroup_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_ChannelPropertyGroup_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_ChannelPropertyGroup_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0
GO
