


--
-- base view for StringMap
--
create view dbo.[StringMap]
 (

    -- physical attributes
    [ObjectTypeCode],
    [AttributeName],
    [AttributeValue],
    [LangId],
    [OrganizationId],
    [Value],
    [DisplayOrder],
    [VersionNumber],
    [StringMapId]
) with view_metadata as
select

    -- physical attribute
    [StringMapBase].[ObjectTypeCode],
    [StringMapBase].[AttributeName],
    [StringMapBase].[AttributeValue],
    [StringMapBase].[LangId],
    [StringMapBase].[OrganizationId],
    [StringMapBase].[Value],
    [StringMapBase].[DisplayOrder],
    [StringMapBase].[VersionNumber],
    [StringMapBase].[StringMapId]
from [StringMapBase] 
