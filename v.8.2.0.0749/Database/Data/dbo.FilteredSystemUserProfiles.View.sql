USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredSystemUserProfiles]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for systemuserprofiles
--
create view [dbo].[FilteredSystemUserProfiles] (
    [fieldsecurityprofileid],
    [systemuserid],
    [systemuserprofileid],
    [versionnumber]
) with view_metadata as
select
    [SystemUserProfiles].[FieldSecurityProfileId],
    [SystemUserProfiles].[SystemUserId],
    [SystemUserProfiles].[SystemUserProfileId],
    [SystemUserProfiles].[VersionNumber]
from SystemUserProfiles

GO
