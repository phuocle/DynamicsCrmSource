SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

--	This function gets called from stored-procedure p_UpdateRootSite. It's a recursive query which returns all the SharePointDocumentLocation children for a given parent.
--	This parent can be a site or location record.


create function [dbo].[fn_GetSharePointChildLocations](@objectId uniqueidentifier)
	
returns table
as 
return 
	with ChildLocations (SharePointDocumentLocationId, ParentSiteOrLocation)
	as
	(
		select SharePointDocumentLocationId, ParentSiteOrLocation
		from SharePointDocumentLocationBase
		where ParentSiteOrLocation = @objectId
	
		union all
	
		select SP.SharePointDocumentLocationId,SP.ParentSiteOrLocation
		from SharePointDocumentLocationBase SP
		inner join ChildLocations A on A.SharePointDocumentLocationId = SP.ParentSiteOrLocation
	)
	select SharePointDocumentLocationId
	from ChildLocations 
GO
