


--
-- base view for StatusMap
--
create view dbo.[StatusMap]
 (

    -- physical attributes
    [ObjectTypeCode],
    [OrganizationId],
    [State],
    [Status],
    [IsDefault],
    [StatusMapId],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [StatusMapBase].[ObjectTypeCode],
    [StatusMapBase].[OrganizationId],
    [StatusMapBase].[State],
    [StatusMapBase].[Status],
    [StatusMapBase].[IsDefault],
    [StatusMapBase].[StatusMapId],
    [StatusMapBase].[VersionNumber]
from [StatusMapBase] 
