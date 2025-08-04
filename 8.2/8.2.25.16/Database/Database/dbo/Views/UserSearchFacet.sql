


--
-- base view for UserSearchFacet
--
create view dbo.[UserSearchFacet]
 (

    -- physical attributes
    [UserSearchFacetId],
    [SystemUserId],
    [EntityName],
    [AttributeName],
    [FacetOrder]
) with view_metadata as
select

    -- physical attribute
    [UserSearchFacetBase].[UserSearchFacetId],
    [UserSearchFacetBase].[SystemUserId],
    [UserSearchFacetBase].[EntityName],
    [UserSearchFacetBase].[AttributeName],
    [UserSearchFacetBase].[FacetOrder]
from [UserSearchFacetBase] 
