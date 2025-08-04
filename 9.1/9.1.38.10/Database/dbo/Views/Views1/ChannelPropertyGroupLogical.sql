


--
-- logical view for ChannelPropertyGroupLogical
--
create view dbo.[ChannelPropertyGroupLogical]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [OrganizationIdName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],

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
    [lk_ChannelPropertyGroup_createdby].[FullName],
    [lk_ChannelPropertyGroup_modifiedonbehalfby].[YomiFullName],
    [lk_ChannelPropertyGroup_modifiedby].[FullName],
    [channelpropertygroup_organization].[Name],
    [lk_ChannelPropertyGroup_createdonbehalfby].[YomiFullName],
    [lk_ChannelPropertyGroup_modifiedonbehalfby].[FullName],
    [lk_ChannelPropertyGroup_modifiedby].[YomiFullName],
    [lk_ChannelPropertyGroup_createdby].[YomiFullName],
    [lk_ChannelPropertyGroup_createdonbehalfby].[FullName],

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
    left join [OrganizationBase] [channelpropertygroup_organization] on ([T1].[OrganizationId] = [channelpropertygroup_organization].[OrganizationId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_createdby] on ([T1].[CreatedBy] = [lk_ChannelPropertyGroup_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_ChannelPropertyGroup_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_modifiedby] on ([T1].[ModifiedBy] = [lk_ChannelPropertyGroup_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ChannelPropertyGroup_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_ChannelPropertyGroup_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0