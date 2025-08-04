SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for principalentitymap
--
create view [dbo].[FilteredPrincipalEntityMap] (
    [objecttypecode],
    [principalentitymapid],
    [principalid],
    [versionnumber]
) with view_metadata as
select
    [PrincipalEntityMap].[ObjectTypeCode],
    [PrincipalEntityMap].[PrincipalEntityMapId],
    [PrincipalEntityMap].[PrincipalId],
    [PrincipalEntityMap].[VersionNumber]
from PrincipalEntityMap
GO
GRANT SELECT ON  [dbo].[FilteredPrincipalEntityMap] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredPrincipalEntityMap] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
