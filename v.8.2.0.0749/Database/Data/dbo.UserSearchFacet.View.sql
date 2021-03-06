USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[UserSearchFacet]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for UserSearchFacet
--
create view [dbo].[UserSearchFacet]
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

GO
