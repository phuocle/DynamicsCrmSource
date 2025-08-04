SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for teammembership
--
create view [dbo].[FilteredTeamMembership] (
    [systemuserid],
    [teamid],
    [teammembershipid],
    [versionnumber]
) with view_metadata as
select
    [TeamMembership].[SystemUserId],
    [TeamMembership].[TeamId],
    [TeamMembership].[TeamMembershipId],
    [TeamMembership].[VersionNumber]
from TeamMembership
GO
GRANT SELECT ON  [dbo].[FilteredTeamMembership] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredTeamMembership] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
