


--
-- base view for package_solution
--
create view dbo.[package_solution]
 (

    -- physical attributes
    [package_solutionId],
    [VersionNumber],
    [packageid],
    [solutionid]
) with view_metadata as
select

    -- physical attribute
    [package_solutionBase].[package_solutionId],
    [package_solutionBase].[VersionNumber],
    [package_solutionBase].[packageid],
    [package_solutionBase].[solutionid]
from [package_solutionBase] 
