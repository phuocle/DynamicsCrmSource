


--
-- base view for OrgInsightsNotification
--
create view dbo.[OrgInsightsNotification]
 (
    -- logical attributes
    [OrganizationIdName],

    -- physical attributes
    [OrgInsightsNotificationId],
    [OrganizationId],
    [CreatedOn],
    [InternalName],
    [Name],
    [JsonData]
) with view_metadata as
select
    -- logical attributes
    [organization_orginsightsnotification].[Name],

    -- physical attribute
    [OrgInsightsNotificationBase].[OrgInsightsNotificationId],
    [OrgInsightsNotificationBase].[OrganizationId],
    [OrgInsightsNotificationBase].[CreatedOn],
    [OrgInsightsNotificationBase].[InternalName],
    [OrgInsightsNotificationBase].[Name],
    [OrgInsightsNotificationBase].[JsonData]
from [OrgInsightsNotificationBase] 
    left join [OrganizationBase] [organization_orginsightsnotification]  on ([OrgInsightsNotificationBase].[OrganizationId] = [organization_orginsightsnotification].[OrganizationId])
