USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredTeamMembership]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
