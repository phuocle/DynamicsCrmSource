


--
-- base view for msdyn_TeamsCollaboration
--
create view dbo.[msdyn_TeamsCollaboration]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [msdyn_TeamsCollaborationId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [msdyn_TeamName],
    [msdyn_GroupId],
    [msdyn_TenantId],
    [msdyn_TeamId],
    [msdyn_ChannelName],
    [msdyn_ChannelId],
    [msdyn_WebUrl],
    [msdyn_AppId],
    [msdyn_pipedEntityId],
    [msdyn_ContentUrl],
    [RegardingObjectId],
    [RegardingObjectTypeCode],
    [RegardingObjectTypeName],
    [OrganizationId],
    [msdyn_TeamSiteUrl],
    [msdyn_ChannelFolderRelativeUrl],
    [msdyn_channelType]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_teamscollaboration_createdby].[FullName],
    [lk_msdyn_teamscollaboration_createdby].[YomiFullName],
    [lk_msdyn_teamscollaboration_modifiedonbehalfby].[FullName],
    [lk_msdyn_teamscollaboration_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_teamscollaboration_modifiedby].[FullName],
    [lk_msdyn_teamscollaboration_modifiedby].[YomiFullName],
    [lk_msdyn_teamscollaboration_createdonbehalfby].[FullName],
    [lk_msdyn_teamscollaboration_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [msdyn_TeamsCollaborationBase].[msdyn_TeamsCollaborationId],
    [msdyn_TeamsCollaborationBase].[CreatedOn],
    [msdyn_TeamsCollaborationBase].[CreatedBy],
    [msdyn_TeamsCollaborationBase].[ModifiedOn],
    [msdyn_TeamsCollaborationBase].[ModifiedBy],
    [msdyn_TeamsCollaborationBase].[CreatedOnBehalfBy],
    [msdyn_TeamsCollaborationBase].[ModifiedOnBehalfBy],
    [msdyn_TeamsCollaborationBase].[statecode],
    [msdyn_TeamsCollaborationBase].[statuscode],
    [msdyn_TeamsCollaborationBase].[VersionNumber],
    [msdyn_TeamsCollaborationBase].[ImportSequenceNumber],
    [msdyn_TeamsCollaborationBase].[OverriddenCreatedOn],
    [msdyn_TeamsCollaborationBase].[TimeZoneRuleVersionNumber],
    [msdyn_TeamsCollaborationBase].[UTCConversionTimeZoneCode],
    [msdyn_TeamsCollaborationBase].[msdyn_TeamName],
    [msdyn_TeamsCollaborationBase].[msdyn_GroupId],
    [msdyn_TeamsCollaborationBase].[msdyn_TenantId],
    [msdyn_TeamsCollaborationBase].[msdyn_TeamId],
    [msdyn_TeamsCollaborationBase].[msdyn_ChannelName],
    [msdyn_TeamsCollaborationBase].[msdyn_ChannelId],
    [msdyn_TeamsCollaborationBase].[msdyn_WebUrl],
    [msdyn_TeamsCollaborationBase].[msdyn_AppId],
    [msdyn_TeamsCollaborationBase].[msdyn_pipedEntityId],
    [msdyn_TeamsCollaborationBase].[msdyn_ContentUrl],
    [msdyn_TeamsCollaborationBase].[RegardingObjectId],
    [msdyn_TeamsCollaborationBase].[RegardingObjectTypeCode],
    [msdyn_TeamsCollaborationBase].[RegardingObjectTypeName],
    [msdyn_TeamsCollaborationBase].[OrganizationId],
    [msdyn_TeamsCollaborationBase].[msdyn_TeamSiteUrl],
    [msdyn_TeamsCollaborationBase].[msdyn_ChannelFolderRelativeUrl],
    [msdyn_TeamsCollaborationBase].[msdyn_channelType]
from [msdyn_TeamsCollaborationBase] 
    left join [SystemUserBase] [lk_msdyn_teamscollaboration_createdby] on ([msdyn_TeamsCollaborationBase].[CreatedBy] = [lk_msdyn_teamscollaboration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_teamscollaboration_createdonbehalfby] on ([msdyn_TeamsCollaborationBase].[CreatedOnBehalfBy] = [lk_msdyn_teamscollaboration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_teamscollaboration_modifiedby] on ([msdyn_TeamsCollaborationBase].[ModifiedBy] = [lk_msdyn_teamscollaboration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_teamscollaboration_modifiedonbehalfby] on ([msdyn_TeamsCollaborationBase].[ModifiedOnBehalfBy] = [lk_msdyn_teamscollaboration_modifiedonbehalfby].[SystemUserId])
