


--
-- base view for EmailSearch
--
create view dbo.[EmailSearch]
 (

    -- physical attributes
    [EmailSearchId],
    [EmailAddress],
    [EmailColumnNumber],
    [ParentObjectId],
    [ParentObjectTypeCode],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [EmailSearchBase].[EmailSearchId],
    [EmailSearchBase].[EmailAddress],
    [EmailSearchBase].[EmailColumnNumber],
    [EmailSearchBase].[ParentObjectId],
    [EmailSearchBase].[ParentObjectTypeCode],
    [EmailSearchBase].[VersionNumber]
from [EmailSearchBase] 
