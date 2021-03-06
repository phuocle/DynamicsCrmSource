USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredTeamProfiles]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for teamprofiles
--
create view [dbo].[FilteredTeamProfiles] (
    [fieldsecurityprofileid],
    [teamid],
    [teamprofileid],
    [versionnumber]
) with view_metadata as
select
    [TeamProfiles].[FieldSecurityProfileId],
    [TeamProfiles].[TeamId],
    [TeamProfiles].[TeamProfileId],
    [TeamProfiles].[VersionNumber]
from TeamProfiles

GO
