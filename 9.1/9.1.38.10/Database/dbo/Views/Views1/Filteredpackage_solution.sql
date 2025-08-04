

--
-- report view for package_solution
--
create view dbo.[Filteredpackage_solution] 
(
    [packageid],
    [package_solutionid],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [package_solution].[packageid],
    [package_solution].[package_solutionId],
    [package_solution].[solutionid],
    [package_solution].[VersionNumber]
from package_solution

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredpackage_solution] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredpackage_solution] TO [CRMReaderRole]
    AS [dbo];

